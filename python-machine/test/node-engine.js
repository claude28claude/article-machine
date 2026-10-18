// Loads Pyodide in Node with the harness, for tests and content validation.
const path = require("path");
const fs = require("fs");
const { loadPyodide } = require(path.join(__dirname, "../vendor/pyodide/pyodide.js"));
const PACKAGES = /^\s*(?:from|import)\s+(numpy|pandas|matplotlib|pylab|bs4|sqlite3|PIL|dateutil|pytz)\b/m;
async function makeEngine() {
  const py = await loadPyodide({ indexURL: path.join(__dirname, "../vendor/pyodide/"), env: { MPLBACKEND: "Agg", HOME: "/home/pyodide" } });
  py.setStdout({ batched: () => {} });
  py.setStderr({ batched: () => {} });
  py.runPython(fs.readFileSync(path.join(__dirname, "../src/harness.py"), "utf8"));
  const f = { run: py.globals.get("_pm_run"), test: py.globals.get("_pm_test"), trace: py.globals.get("_pm_trace") };
  const call = async (cmd, payload) => {
    const source = [payload.code || "", payload.test || ""].join("\n");
    if (PACKAGES.test(source)) await py.loadPackagesFromImports(source, { messageCallback: () => {} });
    return JSON.parse(f[cmd](JSON.stringify(payload)));
  };
  return { py, call };
}
module.exports = { makeEngine };
