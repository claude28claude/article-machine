// Validates course files with the real engine: every runnable example runs,
// every predict answer matches real output, every solution passes its test
// and every starter fails it.
const fs = require("fs");
const path = require("path");
const { parseCourse } = require("../src/parse.js");
const { makeEngine } = require("./node-engine");

const norm = (s) => String(s).replace(/\r\n/g, "\n").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/^\n+|\n+$/g, "");
const outOf = (r) => r.chunks.filter((c) => c[0] === "out").map((c) => c[1]).join("");

(async () => {
  const dir = path.join(__dirname, "../course");
  const only = process.argv[2];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".txt") && (!only || f.includes(only))).sort();
  const course = parseCourse(files.map((f) => fs.readFileSync(path.join(dir, f), "utf8")));
  const { call } = await makeEngine();
  let problems = 0, examples = 0, exercises = 0, predicts = 0, quizzes = 0, cards = 0;
  const fail = (where, msg) => { problems++; console.log("✗", where, "\n   ", msg.replace(/\n/g, "\n    ")); };
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      const where = `${lesson.id} ${lesson.title}`;
      if (!lesson.goal) fail(where, "missing @goal");
      cards += lesson.recall.length;
      if (!lesson.recall.length && !lesson.flags.includes("project")) fail(where, "no recall cards");
      const walk = async (blocks) => {
        for (const b of blocks) {
          if (b.t === "box") await walk(b.blocks);
          if (b.t === "code" && b.lang === "py" && !b.flags.includes("norun")) {
            examples++;
            const r = await call("run", { code: b.code, inputs: (b.stdin || "").split("\n").filter((x, i, a) => !(i === a.length - 1 && x === "")), interactive: false, files: lesson.files, fresh: true });
            const wantsError = b.flags.includes("error");
            if (wantsError && !r.error) fail(where, "example marked error ran fine:\n" + b.code);
            if (!wantsError && r.error) fail(where, "example failed:\n" + b.code + "\n" + r.error.tb);
          }
          if (b.t === "predict") {
            predicts++;
            const r = await call("run", { code: b.code, files: lesson.files, fresh: true });
            const right = b.options.filter((o) => o.ok);
            if (right.length !== 1) fail(where, "predict needs exactly one + option: " + b.q);
            const actual = r.error ? r.error.type : norm(outOf(r));
            if (right[0] && norm(right[0].text) !== actual) fail(where, `predict answer wrong: marked ${JSON.stringify(right[0].text)} actual ${JSON.stringify(actual)}\n${b.code}`);
            for (const o of b.options) if (!o.ok && norm(o.text) === actual) fail(where, "a wrong option equals the real output: " + o.text);
            if (!b.why) fail(where, "predict without explanation");
          }
          if (b.t === "quiz") {
            quizzes++;
            if (b.options.filter((o) => o.ok).length !== 1) fail(where, "quiz needs exactly one + option: " + b.q);
            if (!b.why) fail(where, "quiz without explanation: " + b.q);
          }
        }
      };
      await walk(lesson.blocks);
      for (const ex of lesson.exercises) {
        exercises++;
        const w = `${ex.id} ${ex.title}`;
        if (!ex.solution) { fail(w, "no solution"); continue; }
        if (!ex.test) { fail(w, "no test"); continue; }
        if (ex.hints.length < 2) fail(w, "fewer than 2 hints");
        const files = Object.assign({}, lesson.files, ex.files);
        const good = await call("test", { code: ex.solution, test: ex.test, stdin: ex.stdin, files });
        if (!good.passed) fail(w, "solution fails:\n" + good.checks.filter((c) => !c.ok).map((c) => c.label + "\n" + c.detail).join("\n"));
        const bad = await call("test", { code: ex.starter || "", test: ex.test, stdin: ex.stdin, files });
        if (bad.passed) fail(w, "starter already passes the test");
      }
    }
  }
  console.log(`\n${course.units.length} units, ${course.order.length} lessons, ${exercises} exercises, ${examples} examples, ${predicts} predicts, ${quizzes} quizzes, ${cards} recall cards`);
  console.log(problems ? `${problems} problem(s)` : "all good");
  process.exit(problems ? 1 : 0);
})();
