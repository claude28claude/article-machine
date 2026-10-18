// A stand-in for the claude.ai viewer runtime: user, db (frozen snapshots,
// async delivery) and sample (streaming). Injected before the page loads.
(() => {
  const deepFreeze = (o) => { if (o && typeof o === "object") { Object.values(o).forEach(deepFreeze); Object.freeze(o); } return o; };
  const copy = (o) => JSON.parse(JSON.stringify(o));
  const docs = new Map(JSON.parse(localStorage.getItem("__mockdb") || "[]"));
  const persist = () => localStorage.setItem("__mockdb", JSON.stringify([...docs]));
  const listeners = [];
  const snapOf = (path) => {
    const has = docs.has(path);
    return { id: path.split("/").pop(), exists: has, data: () => (has ? deepFreeze(copy(docs.get(path))) : undefined), metadata: { fromCache: false, hasPendingWrites: false } };
  };
  const notify = () => setTimeout(() => listeners.forEach((l) => l()), 5);
  const docRef = (path) => ({
    id: path.split("/").pop(),
    path,
    async get() { await null; return snapOf(path); },
    async set(data) { docs.set(path, copy(data)); persist(); window.__writes = (window.__writes || 0) + 1; notify(); },
    async update(data) { if (!docs.has(path)) throw { code: "invalid_argument" }; docs.set(path, Object.assign(copy(docs.get(path)), copy(data))); persist(); notify(); },
    async delete() { docs.delete(path); persist(); notify(); },
    onSnapshot(next) { const l = () => next(snapOf(path)); listeners.push(l); setTimeout(l, 5); return () => {}; },
    collection(name) { return collRef(path + "/" + name); },
  });
  const collRef = (cpath) => ({
    path: cpath,
    doc(id) { return docRef(cpath + "/" + (id || "id" + Math.random().toString(36).slice(2, 10))); },
    async add(data) { const r = this.doc(); await r.set(data); return r; },
    onSnapshot(next) {
      const l = () => {
        const list = [...docs.keys()].filter((k) => k.startsWith(cpath + "/") && k.slice(cpath.length + 1).indexOf("/") === -1).map(snapOf);
        next({ docs: list, size: list.length, empty: !list.length, docChanges: () => [], metadata: { fromCache: false, hasPendingWrites: false } });
      };
      listeners.push(l); setTimeout(l, 5); return () => {};
    },
  });
  const db = { doc: docRef, collection: collRef };
  const user = { id: async () => "u_test", me: async () => ({ id: "u_test", name: "Aman Sharma", avatarUrl: "", color: "#888", email: null, isOwner: true, canEdit: true }), isOwner: async () => true, canEdit: async () => true, can: async () => true };
  const sample = async (input, opts = {}) => {
    window.__sampleCalls = (window.__sampleCalls || []).concat([typeof input === "string" ? input : JSON.stringify(input)]);
    const text = "Look at **line 1**: the closing quote is missing.\n\n```python\nprint(\"Hello, Python!\")\n```";
    let sofar = "";
    for (const part of text.match(/.{1,12}/gs)) { await new Promise((r) => setTimeout(r, 15)); sofar += part; opts.onText && opts.onText({ text: sofar, delta: part }); }
    return { text, truncated: false, modelTierApplied: "default" };
  };
  sample.json = async () => ({
    title: "Double the number",
    prompt: "Read a whole number and print it doubled, like `Result: 14` for 7.",
    starter: "n = int(input())\n",
    stdin: "7",
    solution: "n = int(input())\nprint('Result:', n * 2)\n",
    test: "check_has('Result: 14', got=run('7'))\ncheck_has('Result: 0', got=run('0'))",
    hints: ["Multiply by 2", "Use print with a comma", "print('Result:', n * 2)"],
  });
  sample.limits = async () => ({ maxPromptBytes: 262144 });
  window.claude = { use: async (name) => { await new Promise((r) => setTimeout(r, 30)); return { db, user, sample }[name] || null; } };
  window.__mockDocs = docs;
})();
