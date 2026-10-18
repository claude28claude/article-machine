/* The Python Machine: Python engine worker.
   Loads Pyodide from ./py/ next to this file, runs the harness, then answers
   {id, cmd, payload} messages with {type: "result" | "error", id, ...}.
   Output is streamed while a program runs as {type: "stream", id, data},
   and package downloads are announced as {type: "status", id, loading}. */

const HARNESS = "__HARNESS__";

let pyodide = null;
let boot = null;
let currentId = 0;
const fns = {};

function post(message) {
  self.postMessage(message);
}

// The artifact host serves no .zip or .whl files, so Python's standard library
// and the extra packages ship as base64 text and are turned back into bytes
// when Pyodide asks for them.
const realFetch = self.fetch.bind(self);
self.fetch = async (url, options) => {
  const href = String((url && url.url) || url);
  if (/(python_stdlib\.zip|\.whl)$/.test(href)) {
    const res = await realFetch(href.replace(/python_stdlib\.zip$/, "python_stdlib.b64.txt").replace(/\.whl$/, ".whl.b64.txt"));
    if (!res.ok) return res;
    const bin = atob((await res.text()).replace(/\s+/g, ""));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new Response(bytes, { status: 200, headers: { "Content-Type": "application/octet-stream" } });
  }
  return realFetch(url, options);
};

// Packages bundled with the page, by the name used in an import line.
const PACKAGES = /^\s*(?:from|import)\s+(numpy|pandas|matplotlib|pylab|bs4|sqlite3|PIL|dateutil|pytz)\b/m;

async function start(baseOverride) {
  const base = baseOverride || new URL("./", self.location.href).href;
  const t0 = Date.now();
  if (typeof loadPyodide === "undefined") importScripts(base + "py/pyodide.js");
  pyodide = await loadPyodide({ indexURL: base + "py/", env: { MPLBACKEND: "Agg", HOME: "/home/pyodide" } });
  pyodide.setStdout({ batched: () => {} });
  pyodide.setStderr({ batched: () => {} });
  pyodide.globals.set("_pm_emit_js", (data) => post({ type: "stream", id: currentId, data }));
  pyodide.runPython(HARNESS);
  fns.run = pyodide.globals.get("_pm_run");
  fns.test = pyodide.globals.get("_pm_test");
  fns.trace = pyodide.globals.get("_pm_trace");
  const version = pyodide.runPython("import sys\nsys.version.split()[0]");
  return { ms: Date.now() - t0, version };
}

async function loadPackagesFor(id, payload) {
  const source = [payload.code || "", payload.test || ""].join("\n");
  if (!PACKAGES.test(source)) return;
  post({ type: "status", id, loading: true });
  try {
    await pyodide.loadPackagesFromImports(source);
  } finally {
    post({ type: "status", id, loading: false });
  }
}

self.onmessage = async (event) => {
  const { id, cmd, payload, base } = event.data || {};
  try {
    if (!boot) boot = start(base);
    const info = await boot;
    if (cmd === "init") {
      post({ type: "result", id, result: info });
      return;
    }
    const fn = fns[cmd];
    if (!fn) throw new Error("Unknown command " + cmd);
    await loadPackagesFor(id, payload || {});
    currentId = id;
    const result = JSON.parse(fn(JSON.stringify(payload || {})));
    post({ type: "result", id, result });
  } catch (err) {
    const message = String((err && err.message) || err);
    const fatal = !pyodide || /fatal error|has suffered|RuntimeError: memory|Maximum call stack/i.test(message);
    post({ type: "error", id, error: message, fatal });
    if (!pyodide) boot = null;
  }
};
