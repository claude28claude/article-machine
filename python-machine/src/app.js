/* The Python Machine: the app. Views are rendered from the course data and
   the learner's progress; one shared code bench (editor, console,
   step-through and tutor) moves between lessons and practice pages. */
(function () {
  "use strict";

  // ------------------------------------------------------------ utilities
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ESC[c]);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const pad = (n) => String(n).padStart(2, "0");
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseDay = (k) => {
    const [y, m, d] = k.split("-").map(Number);
    return new Date(y, m - 1, d);
  };
  const addDays = (k, n) => {
    const d = parseDay(k);
    d.setDate(d.getDate() + n);
    return dayKey(d);
  };
  const daysBetween = (a, b) => Math.round((parseDay(b) - parseDay(a)) / 86400000);
  const fmtDate = (d, opts) => d.toLocaleDateString("en-IN", opts || { day: "numeric", month: "short", year: "numeric" });
  const plural = (n, word, many) => `${n} ${n === 1 ? word : many || word + "s"}`;
  const store = {
    get(k) {
      try { return localStorage.getItem(k); } catch (e) { return null; }
    },
    set(k, v) {
      try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ }
    },
    del(k) {
      try { localStorage.removeItem(k); } catch (e) { /* storage blocked */ }
    },
  };

  function inline(s) {
    return String(s == null ? "" : s)
      .split(/(`[^`]+`)/g)
      .map((part) => {
        if (/^`[^`]+`$/.test(part)) return "<code>" + esc(part.slice(1, -1)) + "</code>";
        let t = esc(part);
        t = t.replace(/\[\[([^\]]+)\]\]/g, "<kbd>$1</kbd>");
        t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
        t = t.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, "$1<em>$2</em>");
        t = t.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
        return t;
      })
      .join("");
  }

  // Python highlighting for code that is shown, not edited.
  const KW = new Set("False None True and as assert async await break case class continue def del elif else except finally for from global if import in is lambda match nonlocal not or pass raise return try while with yield".split(" "));
  const BI = new Set("print input len range int float str bool list dict set tuple type isinstance enumerate zip map filter sorted reversed sum min max abs round open super object Exception ValueError TypeError KeyError IndexError ZeroDivisionError NameError AttributeError FileNotFoundError StopIteration RuntimeError any all iter next help dir id hash chr ord format repr divmod pow hex bin oct callable getattr setattr hasattr frozenset property staticmethod classmethod self".split(" "));
  function highlight(code) {
    const re = /(#[^\n]*)|([rRbBfFuU]{0,2}(?:"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$)|"(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?))|(\b0[xXoObB][\da-fA-F_]+\b|\b\d[\d_]*(?:\.\d*)?(?:[eE][+-]?\d+)?j?\b|\.\d+\b)|(^[ \t]*@[\w.]+)|([A-Za-z_]\w*)|(\s+)|([^\w\s])/gm;
    let out = "";
    let prev = "";
    let m;
    while ((m = re.exec(code))) {
      const [t, com, str, num, dec, word, ws] = m;
      if (com) out += `<span class="tk-com">${esc(t)}</span>`;
      else if (str) out += `<span class="tk-str">${esc(t)}</span>`;
      else if (num) out += `<span class="tk-num">${esc(t)}</span>`;
      else if (dec) out += `<span class="tk-dec">${esc(t)}</span>`;
      else if (word) {
        if (KW.has(word)) out += `<span class="tk-kw">${t}</span>`;
        else if (prev === "def" || prev === "class") out += `<span class="tk-def">${t}</span>`;
        else if (BI.has(word)) out += `<span class="tk-bi">${t}</span>`;
        else out += t;
        prev = word;
        continue;
      } else if (ws) {
        out += esc(t);
        continue;
      } else out += `<span class="tk-op">${esc(t)}</span>`;
      prev = "";
    }
    return out;
  }

  // Markdown for tutor answers and AI-written prompts. Escapes first.
  function md(text) {
    const lines = String(text || "").replace(/\r\n/g, "\n").split("\n");
    let html = "";
    let i = 0;
    let para = [];
    const endPara = () => {
      if (para.length) html += "<p>" + inline(para.join(" ")) + "</p>";
      para = [];
    };
    while (i < lines.length) {
      const l = lines[i];
      const fence = /^\s*```\s*([\w+-]*)/.exec(l);
      if (fence) {
        endPara();
        const body = [];
        i++;
        while (i < lines.length && !/^\s*```\s*$/.test(lines[i])) body.push(lines[i++]);
        i++;
        const code = body.join("\n");
        const lang = (fence[1] || "").toLowerCase();
        const py = !lang || lang === "python" || lang === "py";
        html += `<div class="codebox"><pre>${py ? highlight(code) : esc(code)}</pre>` +
          `<div class="bar"><button class="btn small ghost" data-act="copy-code">Copy</button>` +
          (py ? `<button class="btn small ghost" data-act="try-code">Try in editor</button>` : "") +
          `</div><textarea hidden>${esc(code)}</textarea></div>`;
        continue;
      }
      if (/^#{1,6}\s/.test(l)) {
        endPara();
        html += "<h4>" + inline(l.replace(/^#+\s/, "")) + "</h4>";
        i++;
        continue;
      }
      if (/^\s*[-*]\s+/.test(l) || /^\s*\d+[.)]\s+/.test(l)) {
        endPara();
        const ordered = /^\s*\d+[.)]\s+/.test(l);
        const items = [];
        while (i < lines.length && (/^\s*[-*]\s+/.test(lines[i]) || /^\s*\d+[.)]\s+/.test(lines[i]))) {
          items.push(lines[i].replace(/^\s*(?:[-*]|\d+[.)])\s+/, ""));
          i++;
        }
        html += (ordered ? "<ol>" : "<ul>") + items.map((x) => "<li>" + inline(x) + "</li>").join("") + (ordered ? "</ol>" : "</ul>");
        continue;
      }
      if (!l.trim()) {
        endPara();
        i++;
        continue;
      }
      para.push(l.trim());
      i++;
    }
    endPara();
    return html;
  }

  let toastTimer = null;
  function toast(html, ms = 2600) {
    const el = $("#toast");
    el.innerHTML = html;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), ms);
  }

  async function copyText(text, button) {
    try {
      await navigator.clipboard.writeText(text);
      if (button) {
        const old = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => (button.textContent = old), 1400);
      }
    } catch (e) {
      toast("Copy is blocked here. Select the text and press <kbd>Ctrl</kbd>+<kbd>C</kbd>.");
    }
  }

  // ------------------------------------------------------------ course
  const course = window.PMParse.parseCourse(window.PM_COURSE || []);
  const unitOf = {};
  for (const u of course.units) for (const l of u.lessons) unitOf[l.id] = u;
  const CORE_PHASES = new Set(["1", "2", "3", "4"]);
  const coreLessons = course.order.filter((id) => CORE_PHASES.has(String(unitOf[id].phase)));
  const exerciseLesson = {};
  for (const id of course.order) for (const ex of course.lessons[id].exercises) exerciseLesson[ex.id] = id;

  const TRACKS = [
    { key: "automation", unit: "uA", title: "Automation", line: "Scripts that rename files, fill spreadsheets, scrape pages and run bots." },
    { key: "data", unit: "uB", title: "Data & AI", line: "Clean and analyse data, chart it, then train a model and call the Claude API." },
    { key: "interviews", unit: "uC", title: "Interviews & DSA", line: "Big-O, arrays, hash maps, stacks, recursion and the patterns coding tests ask." },
    { key: "web", unit: "uD", title: "Web apps", line: "HTTP, JSON APIs, Flask and FastAPI, and an API for your Article Machine." },
  ];
  const GOAL_NAMES = { automation: "Automation", data: "Data & AI", interviews: "Interviews", web: "Web apps" };

  // ------------------------------------------------------------ progress store
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32];
  const DEFAULT_PROFILE = { goals: ["automation", "data", "interviews", "web"], minutes: 60, device: "laptop", lang: "English" };

  function freshState() {
    return {
      v: 1,
      profile: Object.assign({}, DEFAULT_PROFILE, { start: dayKey() }),
      lessons: {},
      ex: {},
      quiz: {},
      cards: {},
      days: {},
      xp: 0,
      streak: { cur: 0, best: 0, last: null },
      last: {},
      engine: null,
      onboarded: false,
    };
  }

  // Snapshots from the store are frozen; progress is edited in place, so copy it.
  const clone = (x) => JSON.parse(JSON.stringify(x == null ? null : x));

  function migrate(data) {
    const base = freshState();
    const s = Object.assign(base, data || {});
    s.profile = Object.assign({}, DEFAULT_PROFILE, base.profile, (data && data.profile) || {});
    for (const k of ["lessons", "ex", "quiz", "cards", "days", "last"]) if (!s[k] || typeof s[k] !== "object") s[k] = {};
    if (!s.streak) s.streak = { cur: 0, best: 0, last: null };
    return s;
  }

  const Store = {
    mode: "loading",
    state: migrate(JSON.parse(store.get("pm-progress") || "null")),
    uid: null,
    db: null,
    ref: null,
    name: "",
    writing: false,
    dirty: false,
    timer: null,
    pendingMin: 0,
    assignments: [],
    generated: [],
    listeners: new Set(),
    codeWrites: {},
    readOnly: false,

    on(fn) {
      this.listeners.add(fn);
    },
    emit() {
      for (const fn of this.listeners) fn();
    },

    async init() {
      let db = null;
      let user = null;
      try {
        if (window.claude && window.claude.use) [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
      } catch (e) {
        db = null;
      }
      if (user) {
        try {
          const me = await user.me();
          this.name = (me && me.name) || "";
        } catch (e) { /* no profile */ }
      }
      const uid = user ? await user.id().catch(() => null) : null;
      if (db && uid) {
        this.db = db;
        this.uid = uid;
        this.ref = db.doc(`data/users/${uid}/progress`);
        try {
          const snap = await this.ref.get();
          if (snap.exists) this.state = migrate(clone(snap.data()));
          else {
            this.state = migrate(this.state); // carry over anything done before signing in
            this.dirty = true;
          }
          this.mode = "db";
        } catch (e) {
          this.mode = "local";
        }
        if (this.mode === "db") {
          this.ref.onSnapshot(
            (snap) => {
              if (!snap.exists || snap.metadata.hasPendingWrites || this.writing || this.dirty) return;
              this.state = migrate(clone(snap.data()));
              this.emit();
            },
            () => {}
          );
          const sub = (name, key) =>
            this.ref.collection(name).onSnapshot(
              (qs) => {
                this[key] = qs.docs.map((d) => Object.assign({ id: d.id }, d.data()));
                this[key].sort((a, b) => (b.created || 0) - (a.created || 0));
                this.emit();
              },
              () => {}
            );
          sub("assign", "assignments");
          sub("gen", "generated");
          if (this.dirty) this.schedule();
        }
      } else {
        this.mode = "local";
      }
      this.emit();
    },

    change(mutate) {
      mutate(this.state);
      this.dirty = true;
      this.schedule();
      this.emit();
    },

    schedule(ms = 1200) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.flush(), ms);
    },

    foldMinutes() {
      if (!this.pendingMin) return;
      const k = dayKey();
      const d = this.state.days[k] || (this.state.days[k] = { min: 0, xp: 0 });
      d.min = (d.min || 0) + this.pendingMin;
      this.pendingMin = 0;
      this.dirty = true;
    },

    async flush() {
      this.foldMinutes();
      if (!this.dirty) return;
      if (this.mode !== "db") {
        store.set("pm-progress", JSON.stringify(this.state));
        this.dirty = false;
        return;
      }
      if (this.readOnly) return;
      if (this.writing) {
        this.schedule();
        return;
      }
      this.writing = true;
      this.dirty = false;
      try {
        await this.ref.set(JSON.parse(JSON.stringify(this.state)));
      } catch (e) {
        if (e && e.code === "invalid_argument") {
          this.readOnly = true;
          toast("Progress can't be saved for this account here, so it stays in this tab.");
        } else {
          this.dirty = true;
          if (e && e.code === "quota_exceeded") toast("The progress store is full. Clear old practice in Progress.");
        }
      } finally {
        this.writing = false;
        if (this.dirty && !this.readOnly) this.schedule(4000);
      }
    },

    async saveCode(exId, code, passed) {
      const key = "pm-code:" + exId;
      store.set(key, code);
      if (this.mode !== "db" || this.readOnly) return;
      const prev = this.codeWrites[exId];
      if (prev) await prev.catch(() => {});
      const body = { code: code.slice(0, 60000), passed: !!passed, at: Date.now() };
      this.codeWrites[exId] = this.ref.collection("code").doc(exId.replace(/[^A-Za-z0-9_.~:@+-]/g, "-")).set(body);
      try {
        await this.codeWrites[exId];
      } catch (e) { /* kept locally */ }
    },

    async addGenerated(ex) {
      if (this.mode !== "db" || this.readOnly) {
        const list = JSON.parse(store.get("pm-gen") || "[]");
        const item = Object.assign({ id: "g" + Date.now().toString(36) }, ex);
        list.unshift(item);
        store.set("pm-gen", JSON.stringify(list.slice(0, 40)));
        this.generated = list;
        this.emit();
        return item.id;
      }
      const ref = this.ref.collection("gen").doc();
      await ref.set(ex);
      return ref.id;
    },

    activity(xp, reason) {
      const today = dayKey();
      this.change((s) => {
        const st = s.streak;
        if (st.last !== today) {
          st.cur = st.last && addDays(st.last, 1) === today ? st.cur + 1 : 1;
          st.best = Math.max(st.best || 0, st.cur);
          st.last = today;
        }
        if (xp) {
          s.xp = (s.xp || 0) + xp;
          const d = s.days[today] || (s.days[today] = { min: 0, xp: 0 });
          d.xp = (d.xp || 0) + xp;
        }
      });
      if (xp) toast(`<b>+${xp} XP</b> · ${esc(reason)}`);
    },
  };

  // Count a minute of study when the page is visible and was used recently.
  let lastTouch = Date.now();
  for (const ev of ["pointerdown", "keydown", "wheel"]) addEventListener(ev, () => (lastTouch = Date.now()), { passive: true });
  setInterval(() => {
    if (document.visibilityState === "visible" && Date.now() - lastTouch < 120000) {
      Store.pendingMin++;
      if (Store.pendingMin >= 5) Store.flush();
      renderTopStats();
    }
  }, 60000);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") Store.flush();
  });

  const minutesToday = () => ((Store.state.days[dayKey()] || {}).min || 0) + Store.pendingMin;
  const lessonDone = (id) => !!Store.state.lessons[id];
  const exPassed = (id) => !!(Store.state.ex[id] && Store.state.ex[id].pass);

  function nextLessonId() {
    const last = Store.state.last.lesson;
    if (last && course.lessons[last] && !lessonDone(last)) return last;
    return course.order.find((id) => !lessonDone(id)) || course.order[course.order.length - 1];
  }

  function dueCards() {
    const today = dayKey();
    const out = [];
    for (const [key, c] of Object.entries(Store.state.cards)) {
      if (c.due <= today) {
        const [lid, idx] = key.split("#");
        const lesson = course.lessons[lid];
        if (lesson && lesson.recall[Number(idx)]) out.push({ key, lesson, card: lesson.recall[Number(idx)], box: c.box });
      }
    }
    return out;
  }

  // ------------------------------------------------------------ Python engine
  const Py = {
    worker: null,
    status: "off",
    version: "",
    error: "",
    loadMs: 0,
    seq: 0,
    pending: new Map(),
    waiters: [],
    restarts: 0,

    start() {
      this.setStatus("loading");
      try {
        this.worker = new Worker("pyworker.js");
      } catch (e) {
        this.fail("This browser could not start the Python worker (" + e.message + ").");
        return;
      }
      this.worker.onmessage = (e) => this.onMessage(e.data);
      this.worker.onerror = (e) => {
        e.preventDefault && e.preventDefault();
        this.fail((e && e.message) || "The Python worker could not load.");
      };
      const t0 = Date.now();
      this.send("init", {}, 120000)
        .then((info) => {
          this.version = info.version;
          this.loadMs = Date.now() - t0;
          this.setStatus("ready");
          const today = dayKey();
          const prev = Store.state.engine;
          if (!prev || prev.at !== today || !prev.ok) {
            Store.change((s) => (s.engine = { ok: true, v: info.version, ms: this.loadMs, at: today, ua: navigator.userAgent.slice(0, 160) }));
          }
        })
        .catch((err) => {
          if (err && err.code === "restarted") return;
          this.fail((err && err.message) || "Python did not start.");
          Store.change((s) => (s.engine = { ok: false, err: String((err && err.message) || err).slice(0, 300), at: dayKey(), ua: navigator.userAgent.slice(0, 160) }));
        });
    },

    setStatus(st) {
      this.status = st;
      if (st === "ready") {
        const w = this.waiters;
        this.waiters = [];
        w.forEach((r) => r.resolve());
      }
      if (st === "failed") {
        const w = this.waiters;
        this.waiters = [];
        w.forEach((r) => r.reject({ code: "failed", message: this.error }));
      }
      renderEngineChip();
      Bench.onEngine();
    },

    fail(msg) {
      this.error = msg;
      this.setStatus("failed");
    },

    ready() {
      if (this.status === "ready") return Promise.resolve();
      if (this.status === "failed") return Promise.reject({ code: "failed", message: this.error });
      return new Promise((resolve, reject) => this.waiters.push({ resolve, reject }));
    },

    send(cmd, payload, timeout, onStream, onStatus) {
      return new Promise((resolve, reject) => {
        const id = ++this.seq;
        const entry = { resolve, reject, timer: null, onStream, onStatus, timeout };
        this.arm(id, entry, timeout);
        this.pending.set(id, entry);
        this.worker.postMessage({ id, cmd, payload });
      });
    },

    arm(id, entry, ms) {
      clearTimeout(entry.timer);
      entry.timer = ms
        ? setTimeout(() => {
            this.pending.delete(id);
            entry.reject({ code: "timeout" });
            this.restart();
          }, ms)
        : null;
    },

    async call(cmd, payload, { timeout = 12000, onStream, onStatus } = {}) {
      await this.ready();
      return this.send(cmd, payload, timeout, onStream, onStatus);
    },

    onMessage(m) {
      const p = this.pending.get(m.id);
      if (!p) return;
      if (m.type === "stream") {
        if (p.onStream) {
          try { p.onStream(JSON.parse(m.data)); } catch (e) { /* ignore a bad chunk */ }
        }
        return;
      }
      if (m.type === "status") {
        // Downloading packages can take a while the first time: no time limit
        // until it's done, then the normal one starts again.
        this.arm(m.id, p, m.loading ? 180000 : p.timeout);
        if (p.onStatus) p.onStatus(m.loading);
        else if (m.loading) toast("Loading Python packages (first time only)…", 4000);
        return;
      }
      clearTimeout(p.timer);
      this.pending.delete(m.id);
      if (m.type === "result") p.resolve(m.result);
      else {
        p.reject({ code: "engine", message: m.error });
        if (m.fatal && this.status === "ready") this.restart();
      }
    },

    restart() {
      if (this.worker) this.worker.terminate();
      for (const [, p] of this.pending) {
        clearTimeout(p.timer);
        p.reject({ code: "restarted" });
      }
      this.pending.clear();
      this.restarts++;
      this.start();
    },
  };

  // ------------------------------------------------------------ Claude (tutor)
  const AI = {
    sample: null,
    off: false,
    reason: "",
    async init() {
      try {
        if (window.claude && window.claude.use) this.sample = await window.claude.use("sample");
      } catch (e) {
        this.sample = null;
      }
      if (!this.sample) {
        this.off = true;
        this.reason = "The tutor works when this page is open in Claude.";
      }
      Bench.renderTutorButtons();
      if (route.name === "tutor") render();
    },
    available() {
      return !!this.sample && !this.off;
    },
    errorText(e) {
      const code = e && e.code;
      if (code === "not_granted" || code === "sampling_disabled" || code === "not_declared" || code === "capability_disabled" || code === "capability_removed") {
        this.off = true;
        this.reason = "The tutor is off for this page. To turn it on, allow Claude in the page's Permissions menu.";
        Bench.renderTutorButtons();
        return this.reason;
      }
      if (code === "rate_limited") return "Too many tutor requests right now. Wait a minute and ask again.";
      if (code === "session_expired") return "Your Claude session expired. Sign in again, then ask again.";
      if (code === "refused") return "The tutor couldn't answer that. Try asking it a different way.";
      if (code === "invalid_json") return "The tutor's answer came back in the wrong shape. Press the button again.";
      if (code === "prompt_too_large") return "That is too much code to send at once. Shorten it and ask again.";
      if (code === "cancelled") return "";
      return "The tutor didn't answer (connection problem). Ask again in a moment.";
    },
    profileText() {
      const p = Store.state.profile;
      const done = Object.keys(Store.state.lessons).length;
      const goals = (p.goals || []).map((g) => GOAL_NAMES[g] || g).join(", ") || "general Python";
      const lang = p.lang === "Hinglish" ? "Reply in simple Hinglish (Hindi words in Latin script mixed with English; keep code and technical terms in English)." : "Reply in simple, plain English.";
      return [
        'You are the tutor inside "The Python Machine", a Python course that runs in the learner\'s browser.',
        `Learner: a beginner learning Python from zero, about ${p.minutes} minutes a day on a ${p.device === "phone" ? "phone" : "laptop"}. Goals: ${goals}. They are also preparing for SSC exams in India, so examples from that world (marks, mock tests, Constitution articles) land well.`,
        `Progress: ${done} of ${course.order.length} lessons done. Weak spots: ${weakSpots().join("; ") || "none recorded yet"}.`,
        "Their code runs on Python 3.13 (Pyodide) in the browser: standard library only, no internet, no pip installs.",
        lang,
        "Style: warm, direct, short. Use Markdown with ```python code blocks. Never use em dashes. One idea at a time; do not lecture.",
      ].join("\n");
    },
    async ask(input, { onText, signal, tier, cache } = {}) {
      if (!this.available()) throw { code: "not_granted" };
      return this.sample(input, { onText, signal, modelTier: tier || "default", cache: cache === undefined ? true : cache });
    },
    async json(input, opts = {}) {
      if (!this.available()) throw { code: "not_granted" };
      return this.sample.json(input, Object.assign({ modelTier: "default", cache: false }, opts));
    },
  };

  function weakSpots() {
    const rows = Object.entries(Store.state.ex)
      .filter(([, v]) => (v.tries || 0) >= 4 || v.sol)
      .map(([id]) => {
        const lid = exerciseLesson[id];
        const ex = course.exercises[id];
        return ex && lid ? `${ex.title} (lesson ${lid})` : null;
      })
      .filter(Boolean);
    return rows.slice(-6);
  }

  // ------------------------------------------------------------ router
  const route = { name: "today", arg: "" };
  function parseHash() {
    const h = (location.hash || "").replace(/^#/, "");
    if (h.startsWith("l-")) return { name: "lesson", arg: h.slice(2) };
    if (h.startsWith("p-")) return { name: "practice", arg: h.slice(2) };
    if (["today", "course", "review", "tutor", "progress"].includes(h)) return { name: h, arg: "" };
    return { name: "today", arg: "" };
  }
  function go(hash) {
    if (location.hash === "#" + hash) render();
    else location.hash = hash;
  }
  addEventListener("hashchange", () => {
    Object.assign(route, parseHash());
    render();
    window.scrollTo({ top: 0 });
  });

  // ------------------------------------------------------------ top bar
  function renderNav() {
    const due = dueCards().length;
    const links = [
      ["today", "Today"],
      ["course", "Course"],
      ["review", "Review" + (due ? ` <span class="count">${due}</span>` : "")],
      ["tutor", "Tutor"],
      ["progress", "Progress"],
    ];
    const cur = route.name === "lesson" || route.name === "practice" ? "course" : route.name;
    $("#nav").innerHTML = links.map(([k, label]) => `<a href="#${k}"${k === cur ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  }
  function renderEngineChip() {
    const el = $("#engine");
    if (!el) return;
    const st = Py.status;
    const text = st === "ready" ? `Python ${esc(Py.version)}` : st === "failed" ? "Python offline" : "Starting Python…";
    const dot = st === "ready" ? "ok" : st === "failed" ? "bad" : "busy";
    el.innerHTML = `<span class="dot ${dot}"></span><span class="label">${text}</span>`;
    el.setAttribute("aria-label", st === "ready" ? "Python is ready" : st === "failed" ? "Python is offline" : "Python is starting");
    el.title = st === "failed" ? Py.error : st === "ready" ? `Real CPython running in your browser. Started in ${(Py.loadMs / 1000).toFixed(1)} s.` : "Loading the Python engine (about 12 MB the first time).";
  }
  function renderTopStats() {
    const el = $("#streak");
    if (!el) return;
    const s = Store.state;
    el.innerHTML = `<b>${s.streak.cur || 0}</b> day streak · <b>${minutesToday()}</b>/${s.profile.minutes} min`;
  }

  // ------------------------------------------------------------ views
  function render() {
    renderNav();
    renderTopStats();
    const main = $("#main");
    Bench.detach();
    if (route.name === "course") main.innerHTML = viewCourse();
    else if (route.name === "lesson") viewLesson(main, route.arg);
    else if (route.name === "practice") viewPractice(main, route.arg);
    else if (route.name === "review") viewReview(main);
    else if (route.name === "tutor") viewTutor(main);
    else if (route.name === "progress") viewProgress(main);
    else main.innerHTML = viewToday();
  }

  function greeting() {
    const h = new Date().getHours();
    const part = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
    const first = (Store.name || "").trim().split(/\s+/)[0];
    return first ? `${part}, ${esc(first)}.` : `${part}.`;
  }

  function finishDate() {
    const left = coreLessons.filter((id) => !lessonDone(id)).length;
    const perDay = Math.max(0.25, (Store.state.profile.minutes || 60) / 60);
    const days = Math.ceil(left / perDay);
    const d = new Date();
    d.setDate(d.getDate() + days);
    return { left, date: d, days };
  }

  function viewToday() {
    const s = Store.state;
    const next = course.lessons[nextLessonId()];
    const due = dueCards();
    const nextExs = next ? next.exercises : [];
    const passedNext = nextExs.filter((e) => exPassed(e.id)).length;
    const unit = next ? unitOf[next.id] : null;
    const fin = finishDate();
    const studyDays = Object.keys(s.days).filter((k) => (s.days[k].min || 0) > 0 || (s.days[k].xp || 0) > 0).length;
    const minGoal = s.profile.minutes || 60;
    const mins = minutesToday();
    const reviewMin = Math.min(15, Math.max(5, Math.round(due.length * 0.75)));
    const lessonMin = next ? next.min : 25;
    const practiceMin = Math.max(10, minGoal - reviewMin - lessonMin);
    const todayDone = (s.days[dayKey()] || {}).xp > 0;
    const goals = (s.profile.goals || []).map((g) => GOAL_NAMES[g]).filter(Boolean);
    const intro = !s.onboarded && !Object.keys(s.lessons).length && !Object.keys(s.ex).length
      ? `<section class="panel stack" style="margin-bottom:22px">
          <div class="eyebrow">Built for you</div>
          <h2 class="section-title">Python from zero to job-ready, one hour a day.</h2>
          <p class="dim">Your plan follows your answers: ${esc(minGoal)} minutes a day on a laptop, explained in plain English, aiming at ${esc(goals.join(", ") || "general Python")}. Every hour has three parts: a quick review of past lessons, one new lesson, and practice that is checked by real Python.</p>
          <ul class="dim" style="margin:0;padding-left:1.2em">
            <li>Code runs in your browser on real Python 3.13. Nothing to install yet; that comes in Unit 15.</li>
            <li><b>Step through</b> any program to watch variables change line by line.</li>
            <li>Stuck? The tutor (Claude) gives hints without handing you the answer.</li>
          </ul>
          <div class="row"><a class="btn primary" href="#l-${esc(course.order[0])}" data-act="onboard">Start lesson ${esc(course.order[0])}</a><a class="btn ghost" href="#progress">Change my plan</a></div>
        </section>`
      : "";
    const assign = Store.assignments.filter((a) => !exPassed("a:" + a.id));
    const assignHtml = assign.length
      ? `<section class="panel stack"><div class="eyebrow">From Claude, your tutor</div>${assign
          .map((a) => `<div class="ex-card"><span class="st">✦</span><div><h4>${esc(a.title || "Practice")}</h4><p>${esc(a.note || a.topic || "Set for you in Claude Code")}</p></div><a class="btn small" href="#p-a-${esc(a.id)}">Open</a></div>`)
          .join("")}</section>`
      : "";
    const engineNote =
      Py.status === "failed"
        ? `<p class="notice"><b>Python couldn't start here.</b> ${esc(Py.error)} Lessons still work; running code needs the engine. Try reloading the page.</p>`
        : "";
    return `<div class="wrap">
      <div class="hello">
        <div>
          <div class="eyebrow">${esc(fmtDate(new Date(), { weekday: "long", day: "numeric", month: "long" }))} · study day ${studyDays + (todayDone ? 0 : 1)}</div>
          <h1 class="page-title" style="margin-top:6px">${greeting()}</h1>
        </div>
        <p class="dim" style="max-width:40ch">At ${esc(minGoal)} minutes a day you finish the core course around <b style="color:var(--ink)">${esc(fmtDate(fin.date, { day: "numeric", month: "long", year: "numeric" }))}</b>. ${fin.left} core lessons to go.</p>
      </div>
      ${intro}
      ${engineNote}
      <div class="grid-2" style="align-items:start">
        <section class="panel">
          <div class="row" style="justify-content:space-between;margin-bottom:6px"><h2>Today's hour</h2><span class="faint mono">${mins}/${minGoal} min</span></div>
          <div class="meter"><i style="width:${Math.min(100, (mins / minGoal) * 100)}%"></i></div>
          <div class="plan" style="margin-top:6px">
            <div class="plan-item${due.length ? "" : " done"}">
              <span class="tick">${due.length ? "1" : "✓"}</span>
              <div><h3>Warm up: review</h3><p>${due.length ? `${plural(due.length, "card")} due · about ${reviewMin} min` : "Nothing due. Cards from finished lessons come back here."}</p></div>
              ${due.length ? `<a class="btn" href="#review">Review</a>` : ""}
            </div>
            <div class="plan-item${next && lessonDone(next.id) ? " done" : ""}">
              <span class="tick">2</span>
              <div><h3>Learn: ${next ? esc(next.id + " " + next.title) : "All lessons done"}</h3><p>${unit ? esc(`Unit ${unit.n} · ${unit.title}`) : ""} · about ${lessonMin} min</p></div>
              ${next ? `<a class="btn primary" href="#l-${esc(next.id)}">${Store.state.last.lesson === next.id ? "Continue" : "Start"}</a>` : ""}
            </div>
            <div class="plan-item${nextExs.length && passedNext === nextExs.length ? " done" : ""}">
              <span class="tick">3</span>
              <div><h3>Practise</h3><p>${nextExs.length ? `${passedNext} of ${plural(nextExs.length, "exercise")} passed · about ${practiceMin} min` : "Use the extra time on a past exercise or the tutor's practice."}</p></div>
              ${next && nextExs.length ? `<a class="btn" href="#l-${esc(next.id)}" data-act="goto-ex">Exercises</a>` : ""}
            </div>
          </div>
        </section>
        <div class="stack">
          <div class="stats two">
            <div class="stat"><b>${s.streak.cur || 0}</b><span>day streak (best ${s.streak.best || 0})</span></div>
            <div class="stat"><b>${Object.keys(s.lessons).length}</b><span>of ${course.order.length} lessons</span></div>
            <div class="stat"><b>${Object.values(s.ex).filter((e) => e.pass).length}</b><span>exercises passed</span></div>
            <div class="stat"><b>${s.xp || 0}</b><span>XP</span></div>
          </div>
          ${assignHtml}
        </div>
      </div>
      <section style="margin-top:34px" class="stack">
        <div class="row" style="justify-content:space-between"><h2 class="section-title">Your four tracks</h2><span class="dim">Start them after Unit 15, in any order</span></div>
        <div class="tracks">${TRACKS.map((t) => {
          const u = course.units.find((x) => x.id === t.unit);
          const first = u && u.lessons[0];
          const done = u ? u.lessons.filter((l) => lessonDone(l.id)).length : 0;
          return `<div class="track"><h3>${esc(t.title)}${(s.profile.goals || []).includes(t.key) ? '<span class="badge track">your goal</span>' : ""}</h3><p>${esc(t.line)}</p>${
            u ? `<p class="mono faint" style="margin-top:8px">${done}/${u.lessons.length} lessons · <a href="#l-${esc(first.id)}">open</a></p>` : `<p class="mono faint" style="margin-top:8px">Coming in the next update</p>`
          }</div>`;
        }).join("")}</div>
      </section>
    </div>`;
  }

  function viewCourse() {
    const next = nextLessonId();
    let html = `<div class="wrap"><h1 class="page-title">The course</h1><p class="lede" style="margin-top:8px">${course.order.length} lessons in ${course.units.length} units. Go in order; each lesson builds on the last. Every lesson ends with exercises checked by real Python.</p>`;
    for (const phase of course.phases) {
      html += `<section class="phase"><div class="phase-head"><span class="eyebrow">Phase ${esc(phase.n)}</span><h2>${esc(phase.title)}</h2><span class="dim">${esc(phase.summary)}</span></div>`;
      for (const uid of phase.units) {
        const u = course.units.find((x) => x.id === uid);
        if (!u) continue;
        const done = u.lessons.filter((l) => lessonDone(l.id)).length;
        html += `<div class="unit"><div class="unit-head"><span class="unit-num">${esc(u.n)}</span><div><h3>${esc(u.title)}</h3>${u.zen ? `<div class="zen">${esc(u.zen)}</div>` : ""}</div><span class="mono faint">${done}/${u.lessons.length}</span></div><div class="lessons">`;
        for (const l of u.lessons) {
          const exDone = l.exercises.filter((e) => exPassed(e.id)).length;
          const cls = lessonDone(l.id) ? "done" : l.id === next ? "next" : "";
          html += `<a class="lesson-row ${cls}" href="#l-${esc(l.id)}"><span class="id">${lessonDone(l.id) ? "✓" : esc(l.id)}</span><span>${esc(l.title)}${l.flags.includes("project") ? '<span class="badge project">project</span>' : ""}${l.id === next ? '<span class="badge">next</span>' : ""}</span><span class="meta">${l.min} min${l.exercises.length ? ` · ${exDone}/${l.exercises.length} ex` : ""}</span></a>`;
        }
        html += `</div></div>`;
      }
      html += `</section>`;
    }
    return html + `</div>`;
  }

  // ---- lesson blocks
  let pageCode = []; // code blocks of the current page, by index

  function renderBlocks(blocks, lesson) {
    return blocks.map((b, i) => renderBlock(b, lesson, i)).join("");
  }

  function renderBlock(b, lesson, i) {
    if (b.t === "p") return `<p>${inline(b.s)}</p>`;
    if (b.t === "h") return b.level === 2 ? `<h3>${inline(b.s)}</h3>` : `<h4>${inline(b.s)}</h4>`;
    if (b.t === "ul") return `<ul>${b.items.map((x) => `<li>${inline(x)}</li>`).join("")}</ul>`;
    if (b.t === "ol") return `<ol>${b.items.map((x) => `<li>${inline(x)}</li>`).join("")}</ol>`;
    if (b.t === "table")
      return `<div class="table-wrap"><table><thead><tr>${(b.head || []).map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${b.rows
        .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
        .join("")}</tbody></table></div>`;
    if (b.t === "box") {
      const labels = { tip: "Tip", warn: "Watch out", note: "Note", real: "In the real world", why: "Why this matters" };
      return `<div class="box ${esc(b.kind)}"><span class="label">${esc(b.title || labels[b.kind] || b.kind)}</span>${renderBlocks(b.blocks, lesson)}</div>`;
    }
    if (b.t === "file") {
      return `<div class="codebox file"><div class="fname">${esc(b.name)}</div><pre>${esc(b.code)}</pre></div>`;
    }
    if (b.t === "code") {
      if (b.lang === "console") {
        const html = b.code
          .split("\n")
          .map((l) => (/^(>>>|\.\.\.)( |$)/.test(l) ? `<span class="p">${esc(l.slice(0, 3))}</span>${highlight(l.slice(3))}` : esc(l)))
          .join("\n");
        return `<div class="codebox console"><pre>${html}</pre></div>`;
      }
      if (b.lang !== "py") return `<div class="codebox output"><pre>${esc(b.code)}</pre></div>`;
      const idx = pageCode.push({ code: b.code, stdin: b.stdin || "", files: lesson ? lesson.files : {}, error: b.flags.includes("error") }) - 1;
      const runnable = !b.flags.includes("norun");
      return `<div class="codebox" data-code="${idx}"><pre>${highlight(b.code)}</pre>${
        runnable
          ? `<div class="bar"><span class="label eyebrow">${b.flags.includes("error") ? "This one crashes on purpose" : "Example"}</span><button class="btn small" data-act="ex-run">Run</button><button class="btn small ghost" data-act="ex-edit">Edit</button><button class="btn small ghost" data-act="ex-viz">Step through</button></div><div class="inline-out" hidden><pre class="console-body"></pre></div>`
          : ""
      }</div>`;
    }
    if (b.t === "quiz" || b.t === "predict") {
      const qid = `${lesson ? lesson.id : "x"}-q${i}`;
      const answered = Store.state.quiz[qid];
      const idx = b.t === "predict" ? pageCode.push({ code: b.code, stdin: "", files: lesson ? lesson.files : {} }) - 1 : -1;
      return `<div class="quiz" data-quiz="${esc(qid)}" data-qi="${i}">
        <span class="eyebrow">${b.t === "predict" ? "Predict the output" : "Quick check"}</span>
        ${b.q ? `<p class="q">${inline(b.q)}</p>` : b.t === "predict" ? `<p class="q">What does this print?</p>` : ""}
        ${b.code ? `<div class="codebox" data-code="${idx}"><pre>${highlight(b.code)}</pre></div>` : ""}
        <div class="options">${b.options
          .map((o, k) => `<button class="opt" data-act="quiz-pick" data-k="${k}"><span class="k">${String.fromCharCode(65 + k)}</span>${b.t === "predict" ? `<pre>${esc(o.text)}</pre>` : `<span>${inline(o.text)}</span>`}</button>`)
          .join("")}</div>
        <div class="why" hidden>${inline(b.why)}${b.t === "predict" ? ` <button class="btn small ghost" data-act="ex-run-quiz">Run it to check</button><div class="inline-out" hidden><pre class="console-body"></pre></div>` : ""}</div>
        ${answered !== undefined ? `<span class="faint mono" style="font-size:.8rem">You answered this before (${answered ? "right" : "wrong"}).</span>` : ""}
      </div>`;
    }
    return "";
  }

  function lessonQuizBlock(lesson, i) {
    const flat = lesson.blocks;
    return flat[i];
  }

  function viewLesson(main, id) {
    const lesson = course.lessons[id];
    if (!lesson) {
      main.innerHTML = `<div class="narrow"><p class="empty">There is no lesson ${esc(id)}. <a href="#course">Open the course map</a>.</p></div>`;
      return;
    }
    pageCode = [];
    const unit = unitOf[id];
    const idx = course.order.indexOf(id);
    const prev = course.order[idx - 1];
    const next = course.order[idx + 1];
    if (Store.state.last.lesson !== id) Store.change((s) => (s.last.lesson = id));
    const exHtml = lesson.exercises.length
      ? `<section class="stack" id="exercises" style="margin-top:34px"><h2 class="section-title">Exercises</h2><p class="dim">Write the code in the bench, press <b>Check</b>, and real Python tests it. Hints are free; the tutor can look at your code.</p><div class="ex-list">${lesson.exercises
          .map((ex, k) => {
            const st = Store.state.ex[ex.id] || {};
            return `<div class="ex-card${st.pass ? " passed" : ""}" data-ex="${esc(ex.id)}"><span class="st">${st.pass ? "✓" : String.fromCharCode(97 + k)}</span><div><h4>${esc(ex.title)}${ex.flags.includes("project") ? '<span class="badge project">project</span>' : ""}</h4><p>${st.pass ? "passed" : st.tries ? plural(st.tries, "try", "tries") : "not started"}</p></div><button class="btn small${st.pass ? " ghost" : ""}" data-act="open-ex" data-id="${esc(ex.id)}">${st.pass ? "Open" : "Start"}</button></div>`;
          })
          .join("")}</div></section>`
      : "";
    const allPassed = lesson.exercises.every((e) => exPassed(e.id));
    const done = lessonDone(id);
    const recallHtml = lesson.recall.length
      ? `<section class="stack" style="margin-top:30px"><h2 class="section-title">Remember this</h2><p class="dim">${plural(lesson.recall.length, "recall card")} from this lesson join your review deck when you complete it. You'll see them again tomorrow, then at growing gaps.</p></section>`
      : "";
    main.innerHTML = `<div class="lesson-layout">
      <article class="lesson-main">
        <header class="lesson-head">
          <div class="eyebrow">Unit ${esc(unit.n)} · ${esc(unit.title)} · Lesson ${esc(lesson.id)}</div>
          <h1>${esc(lesson.title)}</h1>
          <p class="goal"><span>${inline(lesson.goal)}</span></p>
          <p class="mono faint" style="margin-top:10px;font-size:.85rem">About ${lesson.min} min · ${plural(lesson.exercises.length, "exercise")}${done ? " · completed" : ""}</p>
          ${AI.available() ? `<div class="row" style="margin-top:12px"><button class="btn small tutor" data-act="explain-lesson">Explain this lesson another way</button></div><div class="tutor-out" id="lesson-tutor" style="margin-top:10px"></div>` : ""}
        </header>
        <div class="prose">${renderBlocks(lesson.blocks, lesson)}</div>
        ${exHtml}
        ${recallHtml}
        <footer class="lesson-foot">
          ${prev ? `<a class="btn ghost" href="#l-${esc(prev)}">← ${esc(prev)} ${esc(course.lessons[prev].title)}</a>` : "<span></span>"}
          ${done ? `<span class="btn ghost" aria-disabled="true">✓ Completed</span>` : `<button class="btn ${allPassed ? "primary" : ""}" data-act="complete">${allPassed ? "Complete lesson" : "Mark lesson complete"}</button>`}
          ${next ? `<a class="btn ghost" href="#l-${esc(next)}">${esc(next)} ${esc(course.lessons[next].title)} →</a>` : "<span></span>"}
        </footer>
      </article>
      <aside class="bench-col" id="bench-slot"></aside>
    </div>`;
    Bench.attach($("#bench-slot"));
    const want = sessionStorage_get("pm-open-ex");
    const firstOpen = lesson.exercises.find((e) => !exPassed(e.id)) || lesson.exercises[0];
    if (want && course.exercises[want] && exerciseLesson[want] === id) {
      sessionStorage_del("pm-open-ex");
      Bench.loadExercise(course.exercises[want], lesson);
      setTimeout(() => $("#exercises") && $("#exercises").scrollIntoView({ block: "start" }), 50);
    } else if (Bench.lessonId === id && Bench.mode) {
      Bench.refresh();
    } else if (firstOpen) {
      Bench.loadExercise(firstOpen, lesson);
    } else {
      const first = pageCode.find((c) => !c.error);
      Bench.loadScratch(lesson, first ? first.code : "# Try anything here\nprint(\"Hello\")\n");
    }
    markActiveExercise();
  }

  function sessionStorage_get(k) {
    try { return sessionStorage.getItem(k); } catch (e) { return null; }
  }
  function sessionStorage_del(k) {
    try { sessionStorage.removeItem(k); } catch (e) { /* blocked */ }
  }
  function sessionStorage_set(k, v) {
    try { sessionStorage.setItem(k, v); } catch (e) { /* blocked */ }
  }

  function markActiveExercise() {
    $$(".ex-card").forEach((c) => c.classList.toggle("active", Bench.ex && c.dataset.ex === Bench.ex.id));
  }

  function practiceItem(arg) {
    if (arg.startsWith("a-")) {
      const a = Store.assignments.find((x) => x.id === arg.slice(2));
      return a ? { kind: "a", item: a } : null;
    }
    if (arg.startsWith("g-")) {
      const g = Store.generated.find((x) => x.id === arg.slice(2));
      return g ? { kind: "g", item: g } : null;
    }
    return null;
  }

  function viewPractice(main, arg) {
    const found = practiceItem(arg);
    if (!found) {
      main.innerHTML = `<div class="narrow"><p class="empty">${Store.mode === "loading" ? "Loading your practice…" : "This practice isn't here any more."} <a href="#tutor">Open the tutor</a>.</p></div>`;
      return;
    }
    const { kind, item } = found;
    const ex = {
      id: `${kind}:${item.id}`,
      title: item.title || "Practice",
      flags: [],
      prompt: [],
      promptMd: item.prompt || "",
      starter: item.starter || "",
      solution: item.solution || "",
      test: item.test || "",
      stdin: item.stdin || "",
      hints: Array.isArray(item.hints) ? item.hints : [],
      files: item.files || {},
    };
    main.innerHTML = `<div class="lesson-layout"><article class="lesson-main">
      <header class="lesson-head"><div class="eyebrow">${kind === "a" ? "Set by Claude, your tutor" : "Practice the tutor made for you"}${item.topic ? " · " + esc(item.topic) : ""}</div><h1>${esc(ex.title)}</h1></header>
      <div class="prose md">${md(ex.promptMd)}</div>
      <div class="row" style="margin-top:24px"><a class="btn ghost" href="#today">← Today</a><a class="btn ghost" href="#tutor">Make another</a></div>
    </article><aside class="bench-col" id="bench-slot"></aside></div>`;
    Bench.attach($("#bench-slot"));
    Bench.loadExercise(ex, null);
  }

  // ---- review
  let reviewQueue = null;
  function viewReview(main) {
    if (!reviewQueue || !reviewQueue.length) reviewQueue = dueCards();
    const boxes = [1, 2, 3, 4, 5, 6].map((b) => Object.values(Store.state.cards).filter((c) => Math.min(6, c.box) === b).length);
    const total = Object.keys(Store.state.cards).length;
    const card = reviewQueue[0];
    let body;
    if (!total) {
      body = `<p class="empty">Your deck is empty. Each lesson you complete adds its recall cards here. <a href="#l-${esc(nextLessonId())}">Go to your next lesson</a>.</p>`;
    } else if (!card) {
      const upcoming = Object.values(Store.state.cards).map((c) => c.due).sort()[0];
      body = `<div class="flash"><p class="q">Nothing left to review today.</p><p class="dim">Next card is due ${upcoming ? esc(fmtDate(parseDay(upcoming), { weekday: "long", day: "numeric", month: "short" })) : "soon"}. Short daily reviews beat long cramming sessions.</p><div class="row"><a class="btn primary" href="#l-${esc(nextLessonId())}">Continue learning</a></div></div>`;
    } else {
      body = `<div class="flash" id="flash">
        <span class="eyebrow">Lesson ${esc(card.lesson.id)} · ${esc(card.lesson.title)} · box ${Math.min(6, card.box)}</span>
        <p class="q">${inline(card.card.q)}</p>
        <p class="dim">Say or write your answer first, then reveal it.</p>
        <div class="a" hidden>${inline(card.card.a)}</div>
        <div class="row" id="reveal-row"><button class="btn primary" data-act="reveal">Show answer</button><span class="faint mono">${reviewQueue.length} left</span></div>
        <div class="grade" hidden id="grade">
          <button class="btn" data-act="grade" data-g="again">Again</button>
          <button class="btn" data-act="grade" data-g="hard">Hard</button>
          <button class="btn blue" data-act="grade" data-g="good">Good</button>
          <button class="btn" data-act="grade" data-g="easy">Easy</button>
        </div>
      </div>`;
    }
    main.innerHTML = `<div class="card-stage stack">
      <h1 class="page-title">Review</h1>
      <p class="dim">Recall cards come back after 1, 2, 4, 8, 16 and 32 days. Answer from memory: that effort is what makes it stick.</p>
      ${body}
      ${total ? `<div class="boxes">${boxes.map((n, k) => `<div><b>${n}</b>box ${k + 1}</div>`).join("")}</div>` : ""}
    </div>`;
  }

  function gradeCard(g) {
    const item = reviewQueue.shift();
    if (!item) return;
    const today = dayKey();
    Store.change((s) => {
      const c = s.cards[item.key] || { box: 1, due: today };
      if (g === "again") {
        c.box = 1;
        c.due = today;
        reviewQueue.push(Object.assign({}, item, { box: 1 }));
      } else if (g === "hard") {
        c.due = addDays(today, Math.max(1, Math.floor(INTERVALS[Math.min(6, c.box)] / 2)));
      } else {
        c.box = Math.min(6, c.box + (g === "easy" ? 2 : 1));
        c.due = addDays(today, INTERVALS[c.box]);
      }
      s.cards[item.key] = c;
    });
    Store.activity(g === "again" ? 0 : 1, "Card reviewed");
    render();
  }

  // ---- tutor page
  const chat = { turns: [], ctl: null };
  function viewTutor(main) {
    const ai = AI.available();
    const doneUnits = course.units.filter((u) => u.lessons.some((l) => lessonDone(l.id)));
    const topicOptions = (doneUnits.length ? doneUnits : course.units.slice(0, 1))
      .map((u) => `<option value="${esc(u.id)}">Unit ${esc(u.n)} · ${esc(u.title)}</option>`)
      .join("");
    const gens = Store.generated;
    main.innerHTML = `<div class="wrap stack">
      <h1 class="page-title">Tutor</h1>
      <p class="lede">Claude knows your plan and your progress. Ask anything about Python, or have it make practice on what you've learned.</p>
      ${ai ? "" : `<p class="notice">${esc(AI.reason || "The tutor works when this page is open in Claude.")}</p>`}
      <div class="grid-2" style="align-items:start">
        <section class="panel chat">
          <h2>Ask the tutor</h2>
          <div class="quick">
            <button class="btn small ghost" data-act="quick" ${ai ? "" : "disabled"}>What's the difference between a list and a tuple?</button>
            <button class="btn small ghost" data-act="quick" ${ai ? "" : "disabled"}>Quiz me on what I learned this week</button>
            <button class="btn small ghost" data-act="quick" ${ai ? "" : "disabled"}>What should I focus on next?</button>
          </div>
          <div class="tutor-out" id="chat-out">${chat.turns.map((t) => turnHtml(t)).join("")}</div>
          <form class="ask-row" id="chat-form"><textarea id="chat-in" rows="2" placeholder="Type a question, or paste code you want explained" ${ai ? "" : "disabled"}></textarea><button class="btn primary" ${ai ? "" : "disabled"}>Ask</button></form>
          <div class="row"><button class="btn small ghost" data-act="chat-new" ${chat.turns.length ? "" : "disabled"}>New conversation</button><button class="btn small ghost" data-act="chat-stop" hidden id="chat-stop">Stop</button></div>
        </section>
        <div class="stack">
          <section class="panel stack">
            <h2>Make me practice</h2>
            <p class="dim">The tutor writes a fresh exercise, then real Python checks that its own solution passes before you see it.</p>
            <div class="field"><label for="gen-topic">Topic</label><select id="gen-topic">${topicOptions}</select></div>
            <div class="field"><label for="gen-level">Difficulty</label><select id="gen-level"><option>easy</option><option selected>medium</option><option>stretch</option></select></div>
            <div class="row"><button class="btn primary" data-act="gen" ${ai ? "" : "disabled"}>Make an exercise</button><span class="dim" id="gen-status"></span></div>
            ${gens.length ? `<div class="ex-list">${gens.slice(0, 8).map((g) => `<div class="ex-card${exPassed("g:" + g.id) ? " passed" : ""}"><span class="st">${exPassed("g:" + g.id) ? "✓" : "·"}</span><div><h4>${esc(g.title)}</h4><p>${esc(g.topic || "")}</p></div><a class="btn small" href="#p-g-${esc(g.id)}">Open</a></div>`).join("")}</div>` : ""}
          </section>
          <section class="panel stack">
            <h2>Go deeper in Claude Code</h2>
            <p class="dim">Claude Code can read your progress and code from this page, spot patterns in your mistakes and add exercises here for you. Open a Claude Code session and paste:</p>
            <div class="copybox"><code id="cc-prompt">Read my Python Machine progress (lessons, exercise tries and my saved code), tell me my three weakest spots, and add three exercises for them to the page.</code><button class="btn small" data-act="copy-cc">Copy</button></div>
          </section>
        </div>
      </div>
    </div>`;
    const form = $("#chat-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = $("#chat-in").value.trim();
      if (v) sendChat(v);
    });
    $("#chat-in").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.requestSubmit();
      }
    });
  }

  function turnHtml(t) {
    return t.role === "user"
      ? `<div class="tutor-msg me"><div class="who">You</div><div class="md">${md(t.content)}</div></div>`
      : `<div class="tutor-msg"><div class="who">Tutor</div><div class="md">${t.content ? md(t.content) : '<span class="thinking">Thinking</span>'}</div></div>`;
  }

  async function sendChat(text) {
    if (chat.ctl) return;
    chat.turns.push({ role: "user", content: text });
    chat.turns.push({ role: "assistant", content: "" });
    const out = $("#chat-out");
    out.innerHTML = chat.turns.map(turnHtml).join("");
    $("#chat-in").value = "";
    const bubble = out.lastElementChild.querySelector(".md");
    const ctl = (chat.ctl = new AbortController());
    $("#chat-stop").hidden = false;
    const next = course.lessons[nextLessonId()];
    const rules = AI.profileText() + `\nThey are currently on lesson ${next ? next.id + " " + next.title : "(finished)"}. Answer the learner's questions. Keep answers under 200 words unless they ask for more.`;
    const turns = [{ role: "user", content: rules }].concat(chat.turns.slice(-13, -1).map((t) => ({ role: t.role, content: t.content || "(no answer)" })));
    try {
      const { text: answer } = await AI.ask(turns, { signal: ctl.signal, cache: false, onText: ({ text }) => (bubble.innerHTML = md(text)) });
      chat.turns[chat.turns.length - 1].content = answer;
    } catch (e) {
      const msg = AI.errorText(e);
      chat.turns[chat.turns.length - 1].content = (e && e.text) || msg || "(stopped)";
      bubble.innerHTML = md(chat.turns[chat.turns.length - 1].content) + (msg && e.text ? `<p class="faint">${esc(msg)}</p>` : "");
    } finally {
      chat.ctl = null;
      const stop = $("#chat-stop");
      if (stop) stop.hidden = true;
    }
  }

  const HELPERS_DOC = [
    "Test helpers (already defined when the test runs, with every name the learner's program created):",
    "- check(condition, label, detail='') records one check",
    "- check_out(expected_text) compares everything the program printed (whitespace at line ends ignored)",
    "- check_has(text) passes if the printed output contains text",
    "- expect(\"expr\", expected) evaluates expr with the learner's names, e.g. expect(\"add(2, 3)\", 5)",
    "- need(\"name\", \"function\") stops with a clear message if the name is missing",
    "- run(\"line1\\nline2\") reruns the whole program with those input lines and returns what it printed",
    "- has(\"For\") / has(\"While\") / has(\"FunctionDef\") / has(\"ListComp\") checks the code uses that Python syntax node",
    "- calls(\"name\") checks the code calls a function or method with that name",
    "- out is the printed text of the first run; src is the learner's code",
  ].join("\n");

  async function generatePractice() {
    const unitId = $("#gen-topic").value;
    const level = $("#gen-level").value;
    const unit = course.units.find((u) => u.id === unitId) || course.units[0];
    const status = $("#gen-status");
    const button = $('[data-act="gen"]');
    button.disabled = true;
    status.textContent = "Writing an exercise…";
    const learned = course.order.filter((id) => lessonDone(id)).map((id) => `${id} ${course.lessons[id].title}`);
    const prompt = [
      AI.profileText(),
      "",
      `Create ONE new practice exercise about: Unit ${unit.n}, ${unit.title} (${unit.lessons.map((l) => l.title).join(", ")}). Difficulty: ${level}.`,
      `Lessons the learner has finished: ${learned.join("; ") || "none yet, so keep it to the very basics of this unit"}. Use only Python features from those lessons and this unit.`,
      "Make it feel real: a small task from daily life, exam prep or work. Not a copy of a textbook exercise.",
      "",
      'Reply with only JSON: {"title": string, "prompt": string (Markdown, 2-5 sentences, state the exact expected output or function behaviour with one example), "starter": string (Python with helpful comments; it must NOT already solve the task), "solution": string (a correct, simple Python solution), "stdin": string (the input lines the program reads on its first run, one per line; "" if it reads no input), "test": string (Python that checks the learner\'s program using the helpers below; 2-5 checks), "hints": [string, string, string]}',
      "",
      HELPERS_DOC,
      "If the program reads input(), test it with run(\"...\") and check_has or check_out on the result. Make tests check behaviour, not exact code style.",
    ].join("\n");
    try {
      let ex = null;
      for (let attempt = 0; attempt < 2 && !ex; attempt++) {
        const data = await AI.json(prompt + (attempt ? "\nThe previous attempt's solution failed its own test. Keep the test simpler and exact." : ""), { modelTier: "default" });
        if (!data || typeof data.solution !== "string" || typeof data.test !== "string") continue;
        status.textContent = "Checking it with real Python…";
        const stdin = typeof data.stdin === "string" ? data.stdin : "";
        const good = await Py.call("test", { code: data.solution, test: data.test, stdin }, { timeout: 15000 });
        const bad = await Py.call("test", { code: data.starter || "", test: data.test, stdin }, { timeout: 15000 });
        if (good.passed && !bad.passed) ex = data;
      }
      if (!ex) {
        status.textContent = "That exercise failed its own check, so it was thrown away. Try again.";
        return;
      }
      const id = await Store.addGenerated({
        title: String(ex.title || "Practice").slice(0, 120),
        prompt: String(ex.prompt || ""),
        starter: String(ex.starter || ""),
        solution: String(ex.solution || ""),
        test: String(ex.test),
        stdin: typeof ex.stdin === "string" ? ex.stdin : "",
        hints: (Array.isArray(ex.hints) ? ex.hints : []).map(String).slice(0, 4),
        topic: `Unit ${unit.n} · ${unit.title}`,
        level,
        created: Date.now(),
      });
      status.textContent = "";
      go("p-g-" + id);
    } catch (e) {
      status.textContent = (e && e.code && AI.errorText(e)) || "Python couldn't check the exercise. Try again.";
    } finally {
      const b = $('[data-act="gen"]');
      if (b) b.disabled = false;
    }
  }

  // ---- progress page
  function viewProgress(main) {
    const s = Store.state;
    const passed = Object.values(s.ex).filter((e) => e.pass).length;
    const totalEx = Object.keys(course.exercises).length;
    const mins = Object.values(s.days).reduce((a, d) => a + (d.min || 0), 0) + Store.pendingMin;
    const today = dayKey();
    const weeks = 18;
    const start = addDays(today, -(weeks * 7 - 1) - new Date().getDay());
    let cells = "";
    for (let k = 0; k < weeks * 7; k++) {
      const key = addDays(start, k);
      if (key > today) {
        cells += `<i style="visibility:hidden"></i>`;
        continue;
      }
      const d = s.days[key] || {};
      const m = (d.min || 0) + (key === today ? Store.pendingMin : 0);
      const lv = m >= 60 ? 4 : m >= 35 ? 3 : m >= 15 ? 2 : m > 0 || d.xp ? 1 : 0;
      cells += `<i class="${lv ? "l" + lv : ""}" title="${esc(key)}: ${m} min"></i>`;
    }
    const units = course.units
      .map((u) => {
        const d = u.lessons.filter((l) => lessonDone(l.id)).length;
        return `<div class="unit-bar"><span>${esc(u.n)} · ${esc(u.title)}</span><div class="meter green"><i style="width:${(d / u.lessons.length) * 100}%"></i></div><span>${d}/${u.lessons.length}</span></div>`;
      })
      .join("");
    const p = s.profile;
    const eng = s.engine;
    main.innerHTML = `<div class="wrap stack">
      <h1 class="page-title">Progress</h1>
      <div class="stats">
        <div class="stat"><b>${Object.keys(s.lessons).length}/${course.order.length}</b><span>lessons</span></div>
        <div class="stat"><b>${passed}/${totalEx}</b><span>exercises</span></div>
        <div class="stat"><b>${s.streak.best || 0}</b><span>best streak (now ${s.streak.cur || 0})</span></div>
        <div class="stat"><b>${Math.floor(mins / 60)}h ${mins % 60}m</b><span>time studied</span></div>
        <div class="stat"><b>${s.xp || 0}</b><span>XP</span></div>
      </div>
      <section class="panel stack"><h2>Last ${weeks} weeks</h2><div class="heat">${cells}</div><p class="faint mono" style="font-size:.8rem">Darker yellow means more minutes. A full square is a full hour.</p></section>
      <section class="panel stack"><h2>Units</h2><div class="unit-bars">${units}</div></section>
      <section class="panel stack">
        <h2>Your plan</h2>
        <div class="field"><span class="dim" style="font-size:.9rem">Goals</span><div class="checks-inline">${Object.entries(GOAL_NAMES)
          .map(([k, v]) => `<label><input type="checkbox" id="goal-${k}" data-goal="${k}" ${p.goals.includes(k) ? "checked" : ""}> ${esc(v)}</label>`)
          .join("")}</div></div>
        <div class="grid-2">
          <div class="field"><label for="plan-min">Minutes a day</label><select id="plan-min">${[15, 30, 45, 60, 90, 120].map((m) => `<option value="${m}" ${m === p.minutes ? "selected" : ""}>${m} minutes</option>`).join("")}</select></div>
          <div class="field"><label for="plan-lang">Tutor explains in</label><select id="plan-lang">${["English", "Hinglish"].map((l) => `<option ${l === p.lang ? "selected" : ""}>${l}</option>`).join("")}</select></div>
        </div>
        <div class="row"><button class="btn primary" data-act="save-plan">Save plan</button><span class="dim" id="plan-status"></span></div>
      </section>
      <section class="panel stack">
        <h2>Share with Claude Code</h2>
        <p class="dim">Copy a summary of where you are to paste into any Claude chat.</p>
        <div class="row"><button class="btn" data-act="copy-summary">Copy progress summary</button></div>
        <p class="faint mono" style="font-size:.8rem">Saved ${Store.mode === "db" ? "to your Claude account, on every device" : "in this browser only"}${eng ? ` · engine ${eng.ok ? "Python " + esc(eng.v) + ", started in " + (eng.ms / 1000).toFixed(1) + " s" : "failed: " + esc(eng.err)}` : ""}</p>
      </section>
      <section class="panel stack">
        <h2>Start over</h2>
        <p class="dim">Clears lessons, exercises, cards and streak. Your saved code stays.</p>
        <div id="reset-area"><button class="btn ghost" data-act="reset-ask">Reset progress…</button></div>
      </section>
    </div>`;
  }

  function progressSummary() {
    const s = Store.state;
    const done = course.order.filter((id) => lessonDone(id));
    const next = course.lessons[nextLessonId()];
    const tough = Object.entries(s.ex)
      .filter(([, v]) => (v.tries || 0) >= 3 || v.sol)
      .map(([id, v]) => `${id} ${course.exercises[id] ? course.exercises[id].title : ""} (${v.tries || 0} tries${v.sol ? ", saw solution" : ""}${v.pass ? ", passed" : ""})`);
    return [
      "My Python Machine progress",
      `Plan: ${s.profile.minutes} min/day, goals: ${s.profile.goals.map((g) => GOAL_NAMES[g]).join(", ")}`,
      `Lessons done: ${done.length}/${course.order.length} (last: ${done.slice(-3).join(", ") || "none"})`,
      `Next lesson: ${next ? next.id + " " + next.title : "all done"}`,
      `Exercises passed: ${Object.values(s.ex).filter((e) => e.pass).length}/${Object.keys(course.exercises).length}`,
      `Streak: ${s.streak.cur} days (best ${s.streak.best}), XP ${s.xp}`,
      `Exercises I found hard: ${tough.join("; ") || "none yet"}`,
    ].join("\n");
  }

  // ------------------------------------------------------------ the bench
  const ERROR_HELP = {
    SyntaxError: "Python couldn't read this line. Look near the ^ for a missing quote, bracket, colon or comma.",
    IndentationError: "The spaces at the start of a line are off. Code inside an if, loop or function needs the same indent, 4 spaces.",
    TabError: "Tabs and spaces are mixed in the indentation. Use 4 spaces everywhere.",
    NameError: "Python doesn't know this name. Check the spelling, create the variable before using it, or add quotes if you meant text.",
    TypeError: "A value of the wrong type was used, like adding text to a number. Convert with int(), float() or str().",
    ValueError: "The type is right but the value isn't, like int(\"abc\").",
    IndexError: "That position doesn't exist. Positions start at 0, and the last one is len(x) - 1.",
    KeyError: "That key isn't in the dictionary. Check the spelling, or use .get(key) to get None instead of a crash.",
    ZeroDivisionError: "Something was divided by zero.",
    AttributeError: "This kind of value has no attribute or method with that name. Check the spelling and what type the value is.",
    RecursionError: "A function kept calling itself and never stopped. Check that it has a base case that returns without calling itself.",
    EOFError: "Your program asked for more input than it was given.",
    ModuleNotFoundError: "That module isn't available here. The browser has Python's standard library; other packages are installed on your laptop with pip (Unit 15).",
    ImportError: "That name can't be imported from the module. Check the spelling.",
    UnboundLocalError: "A variable was used inside a function before it was given a value there. Pass it in as a parameter, or return the new value.",
    FileNotFoundError: "No file has that name here. Check the name, including the extension.",
    OutputLimit: "Your program printed far too much, so it was stopped. Is there a loop that never ends?",
    AssertionError: "An assert statement found something false.",
  };

  const Bench = {
    el: null,
    cm: null,
    plain: null,
    mode: null,
    ex: null,
    lesson: null,
    lessonId: null,
    session: null,
    running: false,
    trace: null,
    step: 0,
    marks: [],
    hintShown: 0,
    lastError: null,
    lastChecks: null,
    tutorCtl: null,
    tutorTurns: [],
    solutionAsk: false,

    build() {
      const el = document.createElement("section");
      el.className = "bench";
      el.setAttribute("aria-label", "Code bench");
      el.innerHTML = `
        <div class="bench-head">
          <div class="bench-title"><span class="eyebrow" id="b-kind">Bench</span><b id="b-title">Scratchpad</b></div>
          <div class="bench-actions">
            <button class="btn primary" data-act="run" title="Run (Ctrl+Enter)">Run</button>
            <button class="btn blue" data-act="check" title="Check (Ctrl+Shift+Enter)">Check</button>
            <button class="btn ghost" data-act="viz" title="Watch the program run line by line">Step through</button>
            <button class="btn ghost" data-act="stop" hidden>Stop</button>
            <button class="btn ghost" data-act="reset" title="Put the starting code back">Reset</button>
          </div>
        </div>
        <div class="task" id="b-task" hidden></div>
        <div class="editor" id="b-editor"></div>
        <div class="console">
          <div class="console-head"><span class="eyebrow">Output</span><span class="faint mono" id="b-ms" style="font-size:.78rem"></span><button class="btn small ghost" data-act="clear">Clear</button></div>
          <pre class="console-body" id="b-out" aria-live="polite"></pre>
          <form class="stdin-row" id="b-stdin" hidden><label for="b-stdin-in">Your input ▸</label><input id="b-stdin-in" autocomplete="off" spellcheck="false"><button class="btn small primary">Enter</button></form>
          <div id="b-explain"></div>
          <div id="b-vars"></div>
        </div>
        <div class="checks" id="b-checks" hidden></div>
        <div class="viz" id="b-viz" hidden></div>
        <div class="tutor-panel" id="b-tutor"></div>`;
      this.el = el;
      el.addEventListener("click", (e) => this.onClick(e));
      $("#b-stdin", el).addEventListener("submit", (e) => {
        e.preventDefault();
        const input = $("#b-stdin-in", el);
        this.sendInput(input.value);
        input.value = "";
      });
      const host = $("#b-editor", el);
      if (window.CodeMirror) {
        this.cm = window.CodeMirror(host, {
          mode: { name: "python", version: 3, singleLineStringErrors: false },
          lineNumbers: true,
          indentUnit: 4,
          tabSize: 4,
          indentWithTabs: false,
          matchBrackets: true,
          autoCloseBrackets: true,
          styleActiveLine: true,
          viewportMargin: Infinity,
          extraKeys: {
            "Ctrl-Enter": () => this.run(),
            "Cmd-Enter": () => this.run(),
            "Shift-Ctrl-Enter": () => this.check(),
            "Shift-Cmd-Enter": () => this.check(),
            Tab: (cm) => (cm.somethingSelected() ? cm.indentSelection("add") : cm.replaceSelection("    ", "end")),
            "Shift-Tab": (cm) => cm.indentSelection("subtract"),
            "Ctrl-/": (cm) => cm.toggleComment && cm.toggleComment(),
            "Cmd-/": (cm) => cm.toggleComment && cm.toggleComment(),
            Esc: () => this.exitViz(),
          },
        });
        this.cm.on("change", () => this.onEdit());
      } else {
        const ta = document.createElement("textarea");
        ta.className = "plain";
        ta.id = "b-plain";
        ta.spellcheck = false;
        ta.setAttribute("aria-label", "Python code");
        ta.addEventListener("keydown", (e) => {
          if (e.key === "Tab") {
            e.preventDefault();
            const s = ta.selectionStart;
            ta.setRangeText("    ", s, ta.selectionEnd, "end");
          } else if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            e.shiftKey ? this.check() : this.run();
          }
        });
        ta.addEventListener("input", () => this.onEdit());
        host.appendChild(ta);
        this.plain = ta;
      }
    },

    getCode() {
      return this.cm ? this.cm.getValue() : this.plain ? this.plain.value : "";
    },
    setCode(code) {
      if (this.cm) {
        this.cm.setValue(code);
        this.cm.clearHistory();
      } else if (this.plain) this.plain.value = code;
    },

    attach(slot) {
      if (!this.el) this.build();
      slot.appendChild(this.el);
      if (this.cm) setTimeout(() => this.cm.refresh(), 0);
      this.renderTutorButtons();
    },
    detach() {
      if (this.el && this.el.parentNode) this.el.parentNode.removeChild(this.el);
      this.stopTutor();
    },

    draftKey() {
      return this.ex ? "pm-code:" + this.ex.id : "pm-scratch:" + (this.lessonId || "x");
    },

    loadExercise(ex, lesson) {
      this.exitViz(true);
      this.mode = "exercise";
      this.ex = ex;
      this.lesson = lesson;
      this.lessonId = lesson ? lesson.id : null;
      this.hintShown = 0;
      this.solutionAsk = false;
      this.tutorTurns = [];
      $("#b-kind", this.el).textContent = lesson ? `Exercise ${ex.id}` : "Practice";
      $("#b-title", this.el).textContent = ex.title;
      const task = $("#b-task", this.el);
      task.hidden = false;
      task.innerHTML = ex.promptMd !== undefined ? `<div class="md">${md(ex.promptMd)}</div>` : `<div class="prose">${renderBlocks(ex.prompt, lesson)}</div>`;
      $('[data-act="check"]', this.el).hidden = false;
      const saved = store.get(this.draftKey());
      this.setCode(saved != null ? saved : ex.starter || "");
      this.clearOutput();
      this.renderChecks(null);
      this.renderTutor();
      markActiveExercise();
      if (this.cm) setTimeout(() => this.cm.refresh(), 0);
    },

    loadScratch(lesson, code, title) {
      this.exitViz(true);
      this.mode = "scratch";
      this.ex = null;
      this.lesson = lesson;
      this.lessonId = lesson ? lesson.id : null;
      this.tutorTurns = [];
      $("#b-kind", this.el).textContent = "Scratchpad";
      $("#b-title", this.el).textContent = title || "Try the examples here";
      $("#b-task", this.el).hidden = true;
      $('[data-act="check"]', this.el).hidden = true;
      this.setCode(code);
      this.clearOutput();
      this.renderChecks(null);
      this.renderTutor();
      markActiveExercise();
    },

    refresh() {
      if (this.cm) setTimeout(() => this.cm.refresh(), 0);
      markActiveExercise();
    },

    onEdit() {
      if (this.trace) this.exitViz();
      clearTimeout(this.saveTimer);
      this.saveTimer = setTimeout(() => store.set(this.draftKey(), this.getCode()), 500);
      this.clearMarks();
    },

    onEngine() {
      if (!this.el) return;
      const run = $('[data-act="run"]', this.el);
      if (Py.status === "failed") {
        $("#b-out", this.el).innerHTML = `<span class="sys">Python couldn't start here: ${esc(Py.error)}</span>`;
      }
      run.disabled = false;
    },

    clearOutput() {
      $("#b-out", this.el).innerHTML = `<span class="hint">${Py.status === "ready" ? "Press Run (or Ctrl+Enter) to see what your code prints." : Py.status === "failed" ? "Python is offline: " + esc(Py.error) : "Python is starting. It takes a few seconds the first time."}</span>`;
      $("#b-explain", this.el).innerHTML = "";
      $("#b-vars", this.el).innerHTML = "";
      $("#b-ms", this.el).textContent = "";
      $("#b-stdin", this.el).hidden = true;
      this.lastError = null;
      this.clearMarks();
    },

    clearMarks() {
      if (!this.cm) return;
      for (const m of this.marks) this.cm.removeLineClass(m.line, "background", m.cls);
      this.marks = [];
    },
    markLine(line, cls) {
      if (!this.cm || line == null || line < 1 || line > this.cm.lineCount()) return;
      this.cm.addLineClass(line - 1, "background", cls);
      this.marks.push({ line: line - 1, cls });
    },

    renderChunks(chunks, extra) {
      const html = chunksHtml(chunks);
      $("#b-out", this.el).innerHTML = html + (extra || "");
      const out = $("#b-out", this.el);
      out.scrollTop = out.scrollHeight;
    },

    setRunning(on) {
      this.running = on;
      $('[data-act="run"]', this.el).disabled = on;
      $('[data-act="check"]', this.el).disabled = on;
      $('[data-act="viz"]', this.el).disabled = on;
      $('[data-act="stop"]', this.el).hidden = !on;
    },

    async run() {
      if (this.running) return;
      this.exitViz(true);
      this.session = { seed: Math.floor(Math.random() * 1e9), inputs: [] };
      await this.execute();
    },

    async execute() {
      const code = this.getCode();
      store.set(this.draftKey(), code);
      this.setRunning(true);
      this.clearMarks();
      $("#b-explain", this.el).innerHTML = "";
      $("#b-vars", this.el).innerHTML = "";
      $("#b-stdin", this.el).hidden = true;
      if (Py.status !== "ready") $("#b-out", this.el).innerHTML = `<span class="sys">Starting Python…</span>`;
      const files = Object.assign({}, this.lesson ? this.lesson.files : {}, this.ex ? this.ex.files : {});
      let live = [];
      try {
        const res = await Py.call(
          "run",
          { code, inputs: this.session.inputs, interactive: true, seed: this.session.seed, files, stream: true },
          {
            timeout: 10000,
            onStream: (chunks) => {
              live = live.concat(chunks);
              if (!this.session.inputs.length) this.renderChunks(live);
            },
            onStatus: (loading) => {
              if (loading) $("#b-out", this.el).innerHTML = `<span class="sys">Loading packages such as pandas and matplotlib. The first time takes a little while; after that they are ready instantly.</span>`;
            },
          }
        );
        this.showResult(res);
      } catch (err) {
        this.showFailure(err, live);
      } finally {
        this.setRunning(false);
      }
    },

    showFailure(err, live) {
      const code = err && err.code;
      let msg;
      if (code === "timeout") msg = "Stopped: your program ran for more than 10 seconds. Look for a loop that never ends (a while loop whose condition never becomes False).";
      else if (code === "restarted") msg = "Stopped.";
      else if (code === "failed") msg = "Python is offline here: " + (err.message || "");
      else msg = "Something went wrong running your code: " + ((err && err.message) || err);
      this.renderChunks(live || [], `\n<span class="sys">${esc(msg)}</span>`);
    },

    showResult(res) {
      const errHtml = res.error && res.error.tb ? `<span class="err">${esc(res.error.tb)}</span>` : res.error ? `<span class="err">${esc(res.error.msg)}</span>` : "";
      const tail = res.status === "ok" && !res.chunks.length && !res.error ? `<span class="sys">(Your program ran but printed nothing. Use print() to show a value.)</span>` : "";
      this.renderChunks(res.chunks, errHtml + tail);
      $("#b-ms", this.el).textContent = res.status === "input" ? "waiting for input" : `${res.ms} ms`;
      this.lastError = res.error || null;
      if (res.status === "input") {
        const row = $("#b-stdin", this.el);
        row.hidden = false;
        $("#b-stdin-in", this.el).focus();
      }
      if (res.error) {
        this.markLine(res.error.line, "cm-err-line");
        const help = ERROR_HELP[res.error.type] || "Read the last line of the error first: it names the problem. The line number above it shows where.";
        $("#b-explain", this.el).innerHTML = `<div class="explain"><div><b>${esc(res.error.type)}</b>${res.error.line ? ` on line ${res.error.line}` : ""}. ${esc(help)}</div>${
          AI.available() ? `<div class="row"><button class="btn small tutor" data-act="t-error">Explain this error for my code</button></div>` : ""
        }</div>`;
      }
      if (res.vars && res.vars.length) {
        $("#b-vars", this.el).innerHTML = `<details class="varsbox"><summary>Variables after the run (${res.vars.length})</summary><table class="vt">${res.vars
          .map(([n, t, v]) => `<tr><td class="n">${esc(n)}</td><td class="t">${esc(t)}</td><td class="v">${esc(v)}</td></tr>`)
          .join("")}</table></details>`;
      }
    },

    sendInput(value) {
      if (!this.session || this.running) return;
      this.session.inputs.push(value);
      this.execute();
    },

    async check() {
      if (!this.ex || this.running) return;
      this.exitViz(true);
      const code = this.getCode();
      store.set(this.draftKey(), code);
      this.setRunning(true);
      const files = Object.assign({}, this.lesson ? this.lesson.files : {}, this.ex.files || {});
      const box = $("#b-checks", this.el);
      box.hidden = false;
      box.innerHTML = `<span class="sys faint">Checking with real Python…</span>`;
      try {
        const res = await Py.call("test", { code, test: this.ex.test, stdin: this.ex.stdin || "", files }, { timeout: 15000 });
        this.renderChunks(res.chunks, res.error ? `<span class="err">${esc(res.error.tb || res.error.msg)}</span>` : "");
        this.lastError = res.error || null;
        if (res.error) this.markLine(res.error.line, "cm-err-line");
        this.recordAttempt(res.passed, code);
        this.renderChecks(res);
      } catch (err) {
        box.innerHTML = `<span class="sys">${esc(err && err.code === "timeout" ? "Stopped: the checks ran for more than 15 seconds. Is there a loop that never ends?" : "The check couldn't run: " + ((err && err.message) || err))}</span>`;
      } finally {
        this.setRunning(false);
      }
    },

    recordAttempt(passed, code) {
      const id = this.ex.id;
      const before = Store.state.ex[id] || {};
      const first = passed && !before.pass;
      Store.change((s) => {
        const e = s.ex[id] || (s.ex[id] = { tries: 0, hints: 0 });
        e.tries = (e.tries || 0) + 1;
        if (passed && !e.pass) e.pass = Date.now();
      });
      Store.saveCode(id, code, passed);
      if (first) {
        const clean = !before.sol && (before.hints || 0) === 0 && (before.tries || 0) <= 1;
        Store.activity(clean ? 25 : 20, clean ? "Passed on your own" : "Exercise passed");
      }
      this.lastChecks = { passed, at: Date.now() };
      if (route.name === "lesson") refreshExerciseCards();
    },

    renderChecks(res) {
      const box = $("#b-checks", this.el);
      if (!res) {
        box.hidden = true;
        box.innerHTML = "";
        return;
      }
      box.hidden = false;
      const rows = res.checks
        .map((c) => `<div class="check-row ${c.ok ? "ok" : "no"}"><span class="mark">${c.ok ? "✓" : "✗"}</span><span>${inline(c.label)}</span>${!c.ok && c.detail ? `<pre>${esc(c.detail)}</pre>` : ""}</div>`)
        .join("");
      const st = Store.state.ex[this.ex.id] || {};
      let banner = "";
      if (res.passed) {
        const lesson = this.lesson;
        const nextEx = lesson ? lesson.exercises.find((e) => !exPassed(e.id) && e.id !== this.ex.id) : null;
        banner = `<div class="passed-banner"><b>All checks passed.</b><span class="dim">${st.tries > 1 ? `Took ${st.tries} tries. That's how it's done.` : "First try."}</span>
          ${AI.available() ? `<button class="btn small tutor" data-act="t-review">Review my code</button>` : ""}
          ${nextEx ? `<button class="btn small primary" data-act="open-ex" data-id="${esc(nextEx.id)}">Next: ${esc(nextEx.title)}</button>` : lesson && !lessonDone(lesson.id) ? `<button class="btn small primary" data-act="complete">Complete the lesson</button>` : ""}
        </div>`;
      } else {
        const tries = st.tries || 0;
        const more = [];
        if (this.ex.hints.length && this.hintShown < this.ex.hints.length) more.push(`<button class="btn small" data-act="hint">Show a hint (${this.hintShown + 1} of ${this.ex.hints.length})</button>`);
        if (AI.available()) more.push(`<button class="btn small tutor" data-act="t-hint">Ask the tutor about my code</button>`);
        if (tries >= 3 && this.ex.solution) more.push(`<button class="btn small ghost" data-act="sol-ask">Show the solution…</button>`);
        banner = `<div class="row" style="gap:6px">${more.join("")}</div>`;
      }
      box.innerHTML = rows + banner + this.hintsHtml() + this.solutionHtml();
    },

    hintsHtml() {
      if (!this.ex || !this.hintShown) return "";
      return `<div class="stack" style="gap:6px">${this.ex.hints
        .slice(0, this.hintShown)
        .map((h, i) => `<div class="tutor-msg"><div class="who">Hint ${i + 1}</div><div>${inline(h)}</div></div>`)
        .join("")}</div>`;
    },

    solutionHtml() {
      if (this.solutionAsk === "ask")
        return `<div class="confirm"><span>Seeing the answer early makes it harder to remember. One more try first?</span><button class="btn small" data-act="sol-no">Keep trying</button><button class="btn small ghost" data-act="sol-yes">Show it</button></div>`;
      if (this.solutionAsk === "shown")
        return `<div class="stack" style="gap:6px"><span class="eyebrow">One correct solution</span><div class="codebox"><pre>${highlight(this.ex.solution)}</pre><div class="bar"><span class="label faint">Type it out yourself rather than pasting: your fingers learn too.</span><button class="btn small ghost" data-act="sol-use">Put it in the editor</button></div></div></div>`;
      return "";
    },

    showHint() {
      if (!this.ex) return;
      this.hintShown = Math.min(this.ex.hints.length, this.hintShown + 1);
      Store.change((s) => {
        const e = s.ex[this.ex.id] || (s.ex[this.ex.id] = { tries: 0, hints: 0 });
        e.hints = Math.max(e.hints || 0, this.hintShown);
      });
      const box = $("#b-checks", this.el);
      box.hidden = false;
      if (!box.innerHTML.trim() || !$(".check-row", box)) {
        box.innerHTML = `<div class="row" style="gap:6px">${this.hintShown < this.ex.hints.length ? `<button class="btn small" data-act="hint">Show a hint (${this.hintShown + 1} of ${this.ex.hints.length})</button>` : ""}${AI.available() ? `<button class="btn small tutor" data-act="t-hint">Ask the tutor about my code</button>` : ""}</div>` + this.hintsHtml();
      } else {
        this.rerenderChecksTail();
      }
    },

    rerenderChecksTail() {
      const box = $("#b-checks", this.el);
      const keep = $$(".check-row", box).map((r) => r.outerHTML).join("");
      const st = Store.state.ex[this.ex.id] || {};
      const more = [];
      if (this.ex.hints.length && this.hintShown < this.ex.hints.length) more.push(`<button class="btn small" data-act="hint">Show a hint (${this.hintShown + 1} of ${this.ex.hints.length})</button>`);
      if (AI.available()) more.push(`<button class="btn small tutor" data-act="t-hint">Ask the tutor about my code</button>`);
      if ((st.tries || 0) >= 3 && this.ex.solution && this.solutionAsk !== "shown") more.push(`<button class="btn small ghost" data-act="sol-ask">Show the solution…</button>`);
      box.innerHTML = keep + `<div class="row" style="gap:6px">${more.join("")}</div>` + this.hintsHtml() + this.solutionHtml();
    },

    // ---- step-through
    async visualize(code) {
      if (this.running) return;
      if (code !== undefined) this.setCode(code);
      this.setRunning(true);
      const viz = $("#b-viz", this.el);
      viz.hidden = false;
      viz.innerHTML = `<span class="sys faint">Recording every step…</span>`;
      const files = Object.assign({}, this.lesson ? this.lesson.files : {}, this.ex ? this.ex.files : {});
      const inputs = (this.session && this.session.inputs) || [];
      try {
        const res = await Py.call("trace", { code: this.getCode(), stdin: inputs.join("\n") + (inputs.length ? "\n" : ""), files: files }, { timeout: 15000 });
        if (!res.steps.length) {
          viz.innerHTML = `<p class="dim">${res.error ? "Your code has an error before the first line can run:" : "There's nothing to step through yet."}</p>${res.error ? `<pre class="viz-out err">${esc(res.error.tb)}</pre>` : ""}`;
          return;
        }
        this.trace = res;
        this.step = 0;
        this.el.classList.add("viz-on");
        if (this.cm) this.cm.setOption("readOnly", true);
        this.renderStep();
        viz.scrollIntoView({ block: "nearest" });
      } catch (err) {
        viz.innerHTML = `<p class="dim">${esc(err && err.code === "timeout" ? "Stopped: recording took more than 15 seconds." : "Couldn't record the steps: " + ((err && err.message) || err))}</p>`;
      } finally {
        this.setRunning(false);
      }
    },

    exitViz(silent) {
      if (!this.trace && silent) {
        if (this.el) $("#b-viz", this.el).hidden = true;
        return;
      }
      this.trace = null;
      if (this.el) this.el.classList.remove("viz-on");
      if (this.cm) this.cm.setOption("readOnly", false);
      this.clearMarks();
      if (this.el) {
        const viz = $("#b-viz", this.el);
        viz.hidden = true;
        viz.innerHTML = "";
      }
    },

    renderStep() {
      const t = this.trace;
      if (!t) return;
      const n = t.steps.length;
      const finished = this.step >= n;
      const s = finished ? t.steps[n - 1] : t.steps[this.step];
      const prev = this.step > 0 ? t.steps[Math.min(this.step, n) - 1] : null;
      this.clearMarks();
      if (!finished && s.event === "line") this.markLine(s.line, "cm-next-line");
      if (prev && (finished || prev.line !== s.line)) this.markLine(prev.line, "cm-prev-line");
      if (this.cm && !finished) this.cm.scrollIntoView({ line: s.line - 1, ch: 0 }, 60);
      const prevVals = {};
      if (prev) for (const f of prev.stack) for (const v of f.vars) prevVals[f.fn + "." + v[0]] = v[2];
      const colors = ["#f2cb4a", "#74ace4", "#6cc795", "#e7a65a", "#b7a4f2", "#f08181", "#6fd1cf"];
      const frames = s.stack
        .map((f, k) => {
          const rows = f.vars.length
            ? f.vars
                .map(([name, type, val, ref]) => {
                  const changed = prev && prevVals[f.fn + "." + name] !== val;
                  const badge = ref ? `<span class="ref" style="background:${colors[(ref - 1) % colors.length]}" title="Same badge means the same object in memory">#${ref}</span>` : "";
                  return `<tr><td class="n">${esc(name)}</td><td class="v${changed ? " changed" : ""}">${esc(val)}${badge}</td><td class="t">${esc(type)}</td></tr>`;
                })
                .join("")
            : `<tr><td class="t" colspan="3">no variables yet</td></tr>`;
          return `<div class="frame${k === s.stack.length - 1 ? " top" : ""}"><div class="frame-name">${f.fn === "Global" ? "Global variables" : esc(f.fn) + "()  local variables"}</div><table class="vt">${rows}</table></div>`;
        })
        .join("");
      let note;
      if (finished) note = t.error ? `<b>The program crashed:</b> ${esc(t.error.type)}: ${esc(t.error.msg)}` : t.truncated ? `<b>Stopped recording</b> after ${n} steps. Programs this long are best run normally.` : `<b>Program finished.</b>`;
      else if (s.event === "return") note = `<b>${esc(s.fn)}()</b> returns <code>${esc(s.ret)}</code> to the line that called it.`;
      else if (s.event === "exception") note = `<b>Error raised on line ${s.line}:</b> ${esc(s.exc)}`;
      else note = `Next to run: <b>line ${s.line}</b>${prev && prev.event === "line" ? ` · just ran line ${prev.line}` : ""}`;
      const outText = t.chunks.filter((c) => c[0] !== "img").map((c) => c[1]).join("").slice(0, finished ? undefined : s.out);
      $("#b-viz", this.el).innerHTML = `
        <div class="viz-controls">
          <button class="btn small ghost" data-act="v-first" ${this.step === 0 ? "disabled" : ""} title="First step">⏮</button>
          <button class="btn small" data-act="v-prev" ${this.step === 0 ? "disabled" : ""} title="Back (←)">◀ Back</button>
          <button class="btn small primary" data-act="v-next" ${finished ? "disabled" : ""} title="Next (→)">Next ▶</button>
          <button class="btn small ghost" data-act="v-last" ${finished ? "disabled" : ""} title="Last step">⏭</button>
          <input type="range" id="v-range" min="0" max="${n}" value="${this.step}" aria-label="Step">
          <span class="viz-step">${finished ? "end" : "step " + (this.step + 1)} / ${n}</span>
          <button class="btn small ghost" data-act="v-exit">Edit code</button>
        </div>
        <p class="viz-note">${note}</p>
        <div class="frames">${frames}</div>
        <div><span class="eyebrow">Printed so far</span><pre class="viz-out">${esc(outText) || '<span class="faint">(nothing yet)</span>'}</pre></div>`;
      const range = $("#v-range", this.el);
      range.addEventListener("input", () => {
        this.step = Number(range.value);
        this.renderStep();
      });
    },

    vizMove(delta) {
      if (!this.trace) return;
      const n = this.trace.steps.length;
      this.step = Math.max(0, Math.min(n, delta === "first" ? 0 : delta === "last" ? n : this.step + delta));
      this.renderStep();
    },

    // ---- tutor in the bench
    renderTutorButtons() {
      if (this.el) this.renderTutor();
    },

    renderTutor() {
      const panel = $("#b-tutor", this.el);
      if (!panel) return;
      if (!AI.available()) {
        panel.innerHTML = `<span class="faint" style="font-size:.88rem">${esc(AI.reason || "The tutor starts when the page is open in Claude.")}</span>`;
        return;
      }
      panel.innerHTML = `<div class="row">
          <span class="eyebrow" style="margin-right:auto;color:var(--violet)">Tutor</span>
          ${this.ex ? `<button class="btn small tutor" data-act="t-hint">Hint for my code</button>` : `<button class="btn small tutor" data-act="t-explain-code">Explain this code</button>`}
          <button class="btn small tutor" data-act="t-review">Review my code</button>
          <button class="btn small ghost" data-act="t-stop" hidden>Stop</button>
        </div>
        <div class="tutor-out" id="b-tutor-out">${this.tutorTurns.map((t) => turnHtml(t)).join("")}</div>
        <form class="ask-row" id="b-ask"><input id="b-ask-in" placeholder="Ask about this code…" autocomplete="off"><button class="btn small">Ask</button></form>`;
      $("#b-ask", panel).addEventListener("submit", (e) => {
        e.preventDefault();
        const v = $("#b-ask-in", panel).value.trim();
        if (v) {
          $("#b-ask-in", panel).value = "";
          this.tutor("ask", v);
        }
      });
    },

    stopTutor() {
      if (this.tutorCtl) this.tutorCtl.abort();
      this.tutorCtl = null;
    },

    contextText() {
      const lines = [];
      if (this.lesson) lines.push(`Current lesson: ${this.lesson.id} ${this.lesson.title}. Goal: ${this.lesson.goal}`);
      if (this.ex) {
        const promptText = this.ex.promptMd !== undefined ? this.ex.promptMd : blocksText(this.ex.prompt);
        lines.push(`Exercise "${this.ex.title}":\n${promptText}`);
      }
      lines.push("Their code:\n```python\n" + this.getCode().slice(0, 12000) + "\n```");
      const out = $("#b-out", this.el).textContent.slice(-3000);
      if (out.trim()) lines.push("What the console shows now:\n```\n" + out + "\n```");
      const failed = $$(".check-row.no", this.el).map((r) => r.textContent.trim().slice(0, 500));
      if (failed.length) lines.push("Failed checks:\n" + failed.join("\n"));
      return lines.join("\n\n");
    },

    async tutor(kind, question) {
      if (!AI.available()) return;
      this.stopTutor();
      const next = this.lesson ? course.order[course.order.indexOf(this.lesson.id) + 1] : null;
      const notYet = next ? `Don't use Python features the course hasn't taught yet (they are on lesson ${this.lesson.id}).` : "";
      const tasks = {
        hint: `Give ONE hint for this exercise based on their current code. If their code is close, point at the exact line to change. Never write the full solution or more than one line of code. Max 70 words. ${notYet}`,
        error: `Their program crashed. In max 110 words: say what the error means in one plain sentence, which line caused it and why, and how to fix it (show at most the corrected line). ${notYet}`,
        review: `Review their code like a kind senior developer, in max 140 words: one thing done well, then one or two improvements (naming, readability, a more Pythonic way, an edge case). Show an improved version in one code block only if it's clearly better. ${notYet}`,
        explain: `Explain what this code does, line by line in plain words, for a beginner. Max 150 words.`,
        ask: `Answer the learner's question about this code in max 160 words. ${notYet}\nQuestion: ${question || ""}`,
      };
      const label = { hint: "Hint for my code", error: "Explain this error", review: "Review my code", explain: "Explain this code", ask: question }[kind];
      this.tutorTurns.push({ role: "user", content: label });
      this.tutorTurns.push({ role: "assistant", content: "" });
      if (this.tutorTurns.length > 8) this.tutorTurns = this.tutorTurns.slice(-8);
      this.renderTutor();
      const out = $("#b-tutor-out", this.el);
      const bubble = out.lastElementChild.querySelector(".md");
      const stop = $('[data-act="t-stop"]', this.el);
      stop.hidden = false;
      const ctl = (this.tutorCtl = new AbortController());
      if (kind === "hint" && this.ex) {
        Store.change((s) => {
          const e = s.ex[this.ex.id] || (s.ex[this.ex.id] = { tries: 0, hints: 0 });
          e.hints = (e.hints || 0) + 1;
          e.ai = (e.ai || 0) + 1;
        });
      }
      const prompt = AI.profileText() + "\n\n" + this.contextText() + "\n\nTask: " + tasks[kind];
      try {
        const { text } = await AI.ask(prompt, { signal: ctl.signal, cache: kind === "ask" ? false : true, onText: ({ text }) => (bubble.innerHTML = md(text)) });
        this.tutorTurns[this.tutorTurns.length - 1].content = text;
      } catch (e) {
        const msg = AI.errorText(e);
        this.tutorTurns[this.tutorTurns.length - 1].content = (e && e.text) || msg || "(stopped)";
        if (bubble.isConnected) bubble.innerHTML = md(this.tutorTurns[this.tutorTurns.length - 1].content);
      } finally {
        this.tutorCtl = null;
        if (stop.isConnected) stop.hidden = true;
      }
    },

    onClick(e) {
      const b = e.target.closest("[data-act]");
      if (!b || !this.el.contains(b)) return;
      const act = b.dataset.act;
      if (["open-ex", "complete", "copy-code", "try-code"].includes(act)) return; // handled globally
      e.stopPropagation();
      if (act === "run") this.run();
      else if (act === "check") this.check();
      else if (act === "viz") this.visualize();
      else if (act === "stop") Py.restart();
      else if (act === "reset") {
        if (this.ex) this.setCode(this.ex.starter || "");
        else this.setCode("");
        this.clearOutput();
        this.renderChecks(null);
      } else if (act === "clear") this.clearOutput();
      else if (act === "hint") this.showHint();
      else if (act === "sol-ask") {
        this.solutionAsk = "ask";
        this.rerenderChecksTail();
      } else if (act === "sol-no") {
        this.solutionAsk = false;
        this.rerenderChecksTail();
      } else if (act === "sol-yes") {
        this.solutionAsk = "shown";
        Store.change((s) => {
          const x = s.ex[this.ex.id] || (s.ex[this.ex.id] = { tries: 0, hints: 0 });
          x.sol = true;
        });
        this.rerenderChecksTail();
      } else if (act === "sol-use") this.setCode(this.ex.solution);
      else if (act === "v-next") this.vizMove(1);
      else if (act === "v-prev") this.vizMove(-1);
      else if (act === "v-first") this.vizMove("first");
      else if (act === "v-last") this.vizMove("last");
      else if (act === "v-exit") this.exitViz();
      else if (act === "t-hint") this.tutor("hint");
      else if (act === "t-error") this.tutor("error");
      else if (act === "t-review") this.tutor("review");
      else if (act === "t-explain-code") this.tutor("explain");
      else if (act === "t-stop") this.stopTutor();
    },
  };

  function blocksText(blocks) {
    return (blocks || [])
      .map((b) => (b.t === "p" ? b.s : b.t === "ul" || b.t === "ol" ? b.items.map((x) => "- " + x).join("\n") : b.t === "code" ? "```\n" + b.code + "\n```" : ""))
      .filter(Boolean)
      .join("\n");
  }

  function refreshExerciseCards() {
    for (const card of $$(".ex-card[data-ex]")) {
      const id = card.dataset.ex;
      const st = Store.state.ex[id] || {};
      card.classList.toggle("passed", !!st.pass);
      const k = course.exercises[id] ? course.lessons[exerciseLesson[id]].exercises.findIndex((x) => x.id === id) : 0;
      $(".st", card).textContent = st.pass ? "✓" : String.fromCharCode(97 + k);
      $("p", card).textContent = st.pass ? "passed" : st.tries ? plural(st.tries, "try", "tries") : "not started";
      const btn = $("button", card);
      if (btn) {
        btn.textContent = st.pass ? "Open" : "Start";
        btn.classList.toggle("ghost", !!st.pass);
      }
    }
    const lesson = Bench.lesson;
    const btn = $('.lesson-foot [data-act="complete"]');
    if (lesson && btn && lesson.exercises.every((e) => exPassed(e.id))) {
      btn.classList.add("primary");
      btn.textContent = "Complete lesson";
    }
  }

  function completeLesson(id) {
    const lesson = course.lessons[id];
    if (!lesson || lessonDone(id)) return;
    const today = dayKey();
    Store.change((s) => {
      s.lessons[id] = { done: Date.now() };
      lesson.recall.forEach((c, i) => {
        const key = `${id}#${i}`;
        if (!s.cards[key]) s.cards[key] = { box: 1, due: addDays(today, 1) };
      });
      const idx = course.order.indexOf(id);
      if (course.order[idx + 1]) s.last.lesson = course.order[idx + 1];
    });
    reviewQueue = null;
    Store.activity(10, `Lesson ${id} complete`);
    const next = course.order[course.order.indexOf(id) + 1];
    if (next) go("l-" + next);
    else go("course");
  }

  // ------------------------------------------------------------ global events
  document.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-act]");
    if (!b) return;
    const act = b.dataset.act;
    if (act === "onboard") Store.change((s) => (s.onboarded = true));
    else if (act === "goto-ex") sessionStorage_set("pm-open-ex", (course.lessons[nextLessonId()].exercises.find((x) => !exPassed(x.id)) || {}).id || "");
    else if (act === "open-ex") {
      e.preventDefault();
      const ex = course.exercises[b.dataset.id];
      if (ex) {
        Bench.loadExercise(ex, course.lessons[exerciseLesson[ex.id]]);
        if (matchMedia("(max-width: 1100px)").matches) $("#bench-slot") && $("#bench-slot").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (act === "complete") completeLesson(Bench.lesson ? Bench.lesson.id : route.arg);
    else if (act === "ex-run" || act === "ex-edit" || act === "ex-viz") {
      const box = b.closest("[data-code]");
      const c = pageCode[Number(box.dataset.code)];
      if (!c) return;
      if (act === "ex-edit" || (act === "ex-run" && /\binput\s*\(/.test(c.code))) {
        Bench.loadScratch(Bench.lesson || course.lessons[route.arg], c.code, "Example from the lesson");
        if (act === "ex-run") Bench.run();
        if (matchMedia("(max-width: 1100px)").matches) $("#bench-slot").scrollIntoView({ behavior: "smooth" });
        else Bench.el.scrollIntoView({ block: "nearest" });
        return;
      }
      if (act === "ex-viz") {
        Bench.loadScratch(Bench.lesson || course.lessons[route.arg], c.code, "Example from the lesson");
        if (c.stdin) Bench.session = { seed: 7, inputs: c.stdin.split("\n").filter((x) => x !== "") };
        Bench.visualize();
        if (matchMedia("(max-width: 1100px)").matches) $("#bench-slot").scrollIntoView({ behavior: "smooth" });
        return;
      }
      runInline(box, c);
    } else if (act === "ex-run-quiz") {
      const quiz = b.closest(".quiz");
      const box = $("[data-code]", quiz);
      const c = pageCode[Number(box.dataset.code)];
      const out = $(".inline-out", b.parentNode);
      runInline(null, c, out);
    } else if (act === "quiz-pick") pickQuiz(b);
    else if (act === "reveal") {
      $("#flash .a").hidden = false;
      $("#reveal-row").hidden = true;
      $("#grade").hidden = false;
    } else if (act === "grade") gradeCard(b.dataset.g);
    else if (act === "copy-code" || act === "try-code") {
      const ta = b.closest(".codebox").querySelector("textarea");
      const code = ta ? ta.value : "";
      if (act === "copy-code") copyText(code, b);
      else {
        if (!Bench.el || !Bench.el.isConnected) {
          go("l-" + nextLessonId());
          setTimeout(() => {
            Bench.loadScratch(Bench.lesson, code, "Code from the tutor");
          }, 60);
        } else Bench.loadScratch(Bench.lesson, code, "Code from the tutor");
      }
    } else if (act === "explain-lesson") explainLesson(b);
    else if (act === "quick") sendChat(b.textContent);
    else if (act === "chat-new") {
      chat.turns = [];
      render();
    } else if (act === "chat-stop") chat.ctl && chat.ctl.abort();
    else if (act === "gen") generatePractice();
    else if (act === "copy-cc") copyText($("#cc-prompt").textContent, b);
    else if (act === "copy-summary") copyText(progressSummary(), b);
    else if (act === "save-plan") {
      const goals = $$("[data-goal]").filter((x) => x.checked).map((x) => x.dataset.goal);
      const minutes = Number($("#plan-min").value);
      const lang = $("#plan-lang").value;
      Store.change((s) => Object.assign(s.profile, { goals, minutes, lang }));
      $("#plan-status").textContent = "Saved.";
    } else if (act === "reset-ask") {
      $("#reset-area").innerHTML = `<div class="confirm"><span>Erase all progress? This can't be undone.</span><button class="btn small" data-act="reset-no">Keep it</button><button class="btn small ghost" style="color:var(--red)" data-act="reset-yes">Erase progress</button></div>`;
    } else if (act === "reset-no") render();
    else if (act === "reset-yes") {
      const profile = Store.state.profile;
      Store.change((s) => {
        const f = freshState();
        Object.keys(s).forEach((k) => delete s[k]);
        Object.assign(s, f, { profile, onboarded: true });
      });
      reviewQueue = null;
      toast("Progress erased. Fresh start.");
      render();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (Bench.trace && Bench.el && Bench.el.isConnected && !e.target.closest("input, textarea, .CodeMirror")) {
      if (e.key === "ArrowRight") {
        Bench.vizMove(1);
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        Bench.vizMove(-1);
        e.preventDefault();
      }
    }
  });

  function chunksHtml(chunks) {
    return chunks
      .map(([k, t]) => {
        if (k === "img") return `<img class="chart" alt="Chart drawn by the program" src="data:image/png;base64,${t}">`;
        if (k === "out") return esc(t);
        return `<span class="${k === "in" ? "in" : k === "err" ? "err" : "sys"}">${esc(t)}</span>`;
      })
      .join("");
  }

  async function runInline(box, c, outEl) {
    const out = outEl || $(".inline-out", box);
    out.hidden = false;
    const pre = $("pre", out);
    pre.innerHTML = `<span class="sys">${Py.status === "ready" ? "Running…" : "Starting Python…"}</span>`;
    try {
      const res = await Py.call("run", { code: c.code, inputs: (c.stdin || "").split("\n").filter((x) => x !== ""), interactive: false, files: c.files || {}, seed: 7 }, { timeout: 10000 });
      const chunks = chunksHtml(res.chunks);
      const err = res.error ? `<span class="err">${esc(res.error.tb || res.error.msg)}</span>` : "";
      pre.innerHTML = chunks + err || `<span class="sys">(nothing printed)</span>`;
    } catch (err) {
      pre.innerHTML = `<span class="sys">${esc(err && err.code === "timeout" ? "Stopped after 10 seconds." : "Couldn't run: " + ((err && err.message) || err))}</span>`;
    }
  }

  function pickQuiz(btn) {
    const quiz = btn.closest(".quiz");
    const qid = quiz.dataset.quiz;
    const lesson = course.lessons[route.arg];
    const block = lesson ? lesson.blocks[Number(quiz.dataset.qi)] : null;
    if (!block) return;
    const k = Number(btn.dataset.k);
    const right = block.options[k].ok;
    $$(".opt", quiz).forEach((o, i) => {
      o.disabled = true;
      if (block.options[i].ok) o.classList.add("right");
      else if (i === k) o.classList.add("wrong");
    });
    $(".why", quiz).hidden = false;
    const first = Store.state.quiz[qid] === undefined;
    Store.change((s) => (s.quiz[qid] = right ? 1 : 0));
    if (first) Store.activity(right ? 2 : 0, right ? "Right answer" : "");
  }

  async function explainLesson(btn) {
    const lesson = course.lessons[route.arg];
    const out = $("#lesson-tutor");
    if (!lesson || !out) return;
    btn.disabled = true;
    out.innerHTML = `<div class="tutor-msg"><div class="who">Tutor</div><div class="md"><span class="thinking">Thinking</span></div></div>`;
    const bubble = $(".md", out);
    const text = blocksText(lesson.blocks).slice(0, 6000);
    try {
      await AI.ask(
        AI.profileText() + `\n\nExplain the lesson "${lesson.title}" again in a different way: a fresh everyday analogy (Indian daily life or exam prep works well), then one tiny code example with its output. Max 170 words.\n\nThe lesson says:\n${text}`,
        { onText: ({ text }) => (bubble.innerHTML = md(text)) }
      );
    } catch (e) {
      bubble.innerHTML = esc(AI.errorText(e));
    } finally {
      btn.disabled = false;
    }
  }

  // ------------------------------------------------------------ boot
  Object.assign(route, parseHash());
  Store.on(() => {
    renderNav();
    renderTopStats();
  });
  let lastSig = "";
  Store.on(() => {
    // Re-render pages that show progress when the saved state arrives or
    // changes on another device, but never under the learner's hands.
    const sig = Store.mode + "|" + Store.assignments.length + "|" + Store.generated.length + "|" + Object.keys(Store.state.lessons).length + "|" + Store.state.onboarded;
    if (sig === lastSig) return;
    lastSig = sig;
    if (["today", "course", "progress"].includes(route.name)) render();
    if (route.name === "review" && !(reviewQueue && reviewQueue.length)) render();
    if (route.name === "practice" && !(Bench.el && Bench.el.isConnected)) render();
  });
  render();
  Py.start();
  Store.init().then(() => {
    if (Store.mode === "local") {
      try {
        Store.generated = JSON.parse(store.get("pm-gen") || "[]");
      } catch (e) { /* none */ }
    }
    render();
  });
  AI.init();
})();
