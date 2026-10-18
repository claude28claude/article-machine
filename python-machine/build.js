// Assembles dist/: index.html (page + inline CSS/JS), pyworker.js (with the
// harness inside), pm-parse.js and course.js (lesson files as JSON strings).
const fs = require("fs");
const path = require("path");
const R = (p) => fs.readFileSync(path.join(__dirname, p), "utf8");
const dist = path.join(__dirname, "dist");
fs.mkdirSync(path.join(dist, "py"), { recursive: true });
// The Pyodide runtime itself, unchanged.
for (const f of ["pyodide.js", "pyodide.asm.js", "pyodide.asm.wasm", "pyodide-lock.json"]) {
  fs.copyFileSync(path.join(__dirname, "vendor/pyodide", f), path.join(dist, "py", f));
}
let page = R("src/page.html");
page = page.replace("/*CSS*/", () => R("src/app.css")).replace("/*APP*/", () => R("src/app.js"));
fs.writeFileSync(path.join(dist, "index.html"), page);
fs.writeFileSync(path.join(dist, "pyworker.js"), R("src/worker.js").replace('"__HARNESS__"', () => JSON.stringify(R("src/harness.py"))));
fs.writeFileSync(path.join(dist, "pm-parse.js"), R("src/parse.js"));
// Python's standard library as base64 text (the host serves no .zip).
const zip = fs.readFileSync(path.join(__dirname, "vendor/pyodide/python_stdlib.zip")).toString("base64");
fs.writeFileSync(path.join(dist, "py/python_stdlib.b64.txt"), zip.replace(/.{1,2000}/g, "$&\n"));
if (fs.existsSync(path.join(dist, "py/python_stdlib.zip"))) fs.unlinkSync(path.join(dist, "py/python_stdlib.zip"));
// Extra packages (numpy, pandas, matplotlib, bs4, sqlite3...) as base64 text too.
for (const whl of fs.readdirSync(path.join(__dirname, "vendor/wheels"))) {
  const target = path.join(dist, "py", whl + ".b64.txt");
  if (!fs.existsSync(target)) fs.writeFileSync(target, fs.readFileSync(path.join(__dirname, "vendor/wheels", whl)).toString("base64").replace(/.{1,2000}/g, "$&\n"));
}
const files = fs.readdirSync(path.join(__dirname, "course")).filter((f) => f.endsWith(".txt")).sort();
const sources = files.map((f) => R("course/" + f));
fs.writeFileSync(path.join(dist, "course.js"), "window.PM_COURSE = " + JSON.stringify(sources) + ";\n");
const size = (f) => (fs.statSync(path.join(dist, f)).size / 1024).toFixed(1) + " KB";
console.log("built", ["index.html", "pyworker.js", "pm-parse.js", "course.js"].map((f) => f + " " + size(f)).join(", "), "from", files.length, "course files");
