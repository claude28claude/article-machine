// Drives the built page in Chromium under an artifact-like CSP.
const { chromium } = require("./pw");
const path = require("path");
const fs = require("fs");
const PM = path.join(__dirname, "..");
const SHOTS = path.join(PM, "shots");
const fontCss = fs.readFileSync(path.join(__dirname, "fonts/fonts.css"), "utf8");
async function setup(context) {
  await context.route("https://cdn.jsdelivr.net/npm/codemirror@5.65.16/**", (route) => {
    const rel = route.request().url().split("codemirror@5.65.16/")[1];
    route.fulfill({ path: path.join(PM, "vendor/codemirror", rel), contentType: "application/javascript" });
  });
  await context.route("https://fonts.googleapis.com/**", (route) => route.fulfill({ body: fontCss, contentType: "text/css" }));
  await context.route("https://fonts.gstatic.com/**", (route) => {
    const f = route.request().url().replace("https://fonts.gstatic.com/", "").replace(/\//g, "_");
    route.fulfill({ path: path.join(__dirname, "fonts", f), contentType: "font/woff2" });
  });
}
(async () => {
  const base = process.argv[2];
  const flow = process.argv[3] || "smoke";
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: "dark" });
  await setup(context);
  const page = await context.newPage();
  const logs = [];
  page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") logs.push(m.type() + ": " + m.text()); });
  page.on("pageerror", (e) => logs.push("pageerror: " + e.message));
  const shot = async (name) => { await page.screenshot({ path: path.join(SHOTS, name + ".png"), fullPage: false }); console.log("shot", name); };
  await page.goto(base + "index.html#today");
  await page.waitForFunction(() => document.querySelector("#engine") && /Python 3/.test(document.querySelector("#engine").textContent), null, { timeout: 60000 });
  console.log("engine:", await page.textContent("#engine"));
  await page.waitForTimeout(400);
  await shot("01-today");
  await page.goto(base + "index.html#l-1.1");
  await page.waitForTimeout(500);
  await page.click('[data-code="0"] [data-act="ex-run"]');
  await page.waitForTimeout(800);
  console.log("inline out:", (await page.textContent('[data-code="0"] .inline-out')).trim());
  await shot("02-lesson");
  // write the solution into the editor and check
  await page.evaluate(() => { const cm = document.querySelector(".CodeMirror").CodeMirror; cm.setValue('print("Hello, Python")'); });
  await page.click('[data-act="check"]');
  await page.waitForSelector(".check-row", { timeout: 20000 });
  console.log("check (wrong):", (await page.textContent("#b-checks")).replace(/\s+/g, " ").slice(0, 300));
  await shot("03-check-fail");
  await page.evaluate(() => { const cm = document.querySelector(".CodeMirror").CodeMirror; cm.setValue('print("Hello, Python!")'); });
  await page.click('[data-act="check"]');
  await page.waitForSelector(".passed-banner", { timeout: 20000 });
  console.log("check (right):", (await page.textContent("#b-checks")).replace(/\s+/g, " ").slice(0, 200));
  await shot("04-check-pass");
  // interactive input replay
  await page.evaluate(() => { const cm = document.querySelector(".CodeMirror").CodeMirror; cm.setValue('name = input("Your name: ")\ncity = input("Your city: ")\nprint("Hi", name, "from", city)'); });
  await page.click('[data-act="run"]');
  await page.waitForSelector("#b-stdin:not([hidden])", { timeout: 20000 });
  await page.fill("#b-stdin-in", "Aman");
  await page.press("#b-stdin-in", "Enter");
  await page.waitForTimeout(600);
  await page.fill("#b-stdin-in", "Jaipur");
  await page.press("#b-stdin-in", "Enter");
  await page.waitForTimeout(800);
  console.log("console:", JSON.stringify(await page.textContent("#b-out")));
  await shot("05-input");
  // error + friendly explanation
  await page.evaluate(() => { const cm = document.querySelector(".CodeMirror").CodeMirror; cm.setValue('score = 10\nprint(scor)'); });
  await page.click('[data-act="run"]');
  await page.waitForSelector(".explain", { timeout: 20000 });
  await shot("06-error");
  // step through
  await page.evaluate(() => { const cm = document.querySelector(".CodeMirror").CodeMirror; cm.setValue('def square(x):\n    y = x * x\n    return y\n\nnums = [1, 2, 3]\nalias = nums\ntotal = 0\nfor n in nums:\n    total = total + square(n)\nalias.append(4)\nprint(total)'); });
  await page.click('[data-act="viz"]');
  await page.waitForSelector(".viz-controls", { timeout: 20000 });
  for (let i = 0; i < 9; i++) await page.click('[data-act="v-next"]');
  await shot("07-viz");
  // infinite loop timeout + recovery
  await page.click('[data-act="v-exit"]');
  await page.evaluate(() => { const cm = document.querySelector(".CodeMirror").CodeMirror; cm.setValue('while True:\n    pass'); });
  const t0 = Date.now();
  await page.click('[data-act="run"]');
  await page.waitForFunction(() => /more than 10 seconds/.test(document.querySelector("#b-out").textContent), null, { timeout: 30000 });
  console.log("timeout shown after", Date.now() - t0, "ms");
  await page.waitForFunction(() => /Python 3/.test(document.querySelector("#engine").textContent), null, { timeout: 60000 });
  console.log("engine back:", await page.textContent("#engine"));
  await page.goto(base + "index.html#course");
  await page.waitForTimeout(300);
  await shot("08-course");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "index.html#l-1.3");
  await page.waitForTimeout(600);
  await shot("09-phone-lesson");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log("phone horizontal overflow px:", overflow);
  console.log("logs:\n" + logs.join("\n"));
  await browser.close();
})().catch((e) => { console.error("FAILED", e); process.exit(1); });
