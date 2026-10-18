// Visits every view once and completes a lesson, reporting console errors.
const { chromium } = require("./pw");
const path = require("path");
const fs = require("fs");
const SHOTS = path.join(__dirname, "../shots");
const PM = path.join(__dirname, "..");
const fontCss = fs.readFileSync(path.join(__dirname, "fonts/fonts.css"), "utf8");
(async () => {
  const base = process.argv[2];
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: "dark" });
  await context.route("https://cdn.jsdelivr.net/npm/codemirror@5.65.16/**", (r) => r.fulfill({ path: path.join(PM, "vendor/codemirror", r.request().url().split("codemirror@5.65.16/")[1]), contentType: "application/javascript" }));
  await context.route("https://fonts.googleapis.com/**", (r) => r.fulfill({ body: fontCss, contentType: "text/css" }));
  await context.route("https://fonts.gstatic.com/**", (r) => r.fulfill({ path: path.join(__dirname, "fonts", r.request().url().replace("https://fonts.gstatic.com/", "").replace(/\//g, "_")), contentType: "font/woff2" }));
  const page = await context.newPage();
  const logs = [];
  page.on("console", (m) => { if (m.type() === "error") logs.push("console: " + m.text()); });
  page.on("pageerror", (e) => logs.push("pageerror: " + e.message));
  await page.goto(base + "index.html#l-1.1");
  await page.waitForTimeout(800);
  await page.click('[data-act="quiz-pick"][data-k="1"]');
  await page.click('[data-act="complete"]');
  await page.waitForTimeout(500);
  console.log("after complete, route:", await page.evaluate(() => location.hash));
  for (const v of ["today", "course", "review", "tutor", "progress"]) {
    await page.goto(base + "index.html#" + v);
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(SHOTS, "v-" + v + ".png") });
  }
  const state = await page.evaluate(() => localStorage.getItem("pm-progress"));
  console.log("state:", state && state.slice(0, 400));
  console.log("logs:", logs.join("\n") || "none");
  await browser.close();
})().catch((e) => { console.error("FAILED", e); process.exit(1); });
