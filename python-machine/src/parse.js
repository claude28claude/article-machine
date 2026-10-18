/* The Python Machine: course text parser. Shared by the page and the
   content validator, so a lesson file means the same thing in both. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.PMParse = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const FENCE = /^```\s*([a-z]+)?\s*(.*)$/;

  function parseCourse(sources) {
    const course = { phases: [], units: [], lessons: {}, exercises: {}, order: [] };
    for (const src of sources) parseFile(src, course);
    return course;
  }

  function parseFile(text, course) {
    const lines = text.replace(/\r\n/g, "\n").split("\n");
    let unit = null;
    let lesson = null;
    let exercise = null;
    let i = 0;

    // Body text between directives belongs to the open exercise, else the lesson.
    let buffer = [];
    const flush = () => {
      if (!buffer.length) return;
      const target = exercise || lesson;
      if (target) {
        const blocks = parseBlocks(buffer, target, lesson);
        if (exercise) exercise.prompt.push(...blocks);
        else lesson.blocks.push(...blocks);
      } else if (unit) {
        unit.intro.push(...parseBlocks(buffer, null, null));
      }
      buffer = [];
    };

    while (i < lines.length) {
      const line = lines[i];
      const m = /^@(\w+)\s*(.*)$/.exec(line);
      if (m && !insideFence(buffer)) {
        const [, key, rest] = m;
        const parts = rest.split("|").map((s) => s.trim());
        if (key === "phase") {
          flush();
          course.phases.push({ n: parts[0], title: parts[1] || "", summary: parts[2] || "", units: [] });
        } else if (key === "unit") {
          flush();
          exercise = null;
          lesson = null;
          unit = { id: parts[0], n: parts[1], title: parts[2], zen: "", summary: "", intro: [], lessons: [], phase: null };
          const phase = course.phases[course.phases.length - 1];
          if (phase) {
            phase.units.push(unit.id);
            unit.phase = phase.n;
          }
          course.units.push(unit);
        } else if (key === "zen" && unit && !lesson) {
          unit.zen = rest.trim();
        } else if (key === "summary" && unit && !lesson) {
          unit.summary = rest.trim();
        } else if (key === "lesson") {
          flush();
          exercise = null;
          lesson = {
            id: parts[0], title: parts[1], min: Number(parts[2] || 20), flags: (parts[3] || "").split(/\s+/).filter(Boolean),
            unit: unit && unit.id, goal: "", blocks: [], exercises: [], recall: [], files: {},
          };
          unit.lessons.push(lesson);
          course.lessons[lesson.id] = lesson;
          course.order.push(lesson.id);
        } else if (key === "goal" && lesson) {
          lesson.goal = rest.trim();
        } else if (key === "exercise" && lesson) {
          flush();
          exercise = {
            id: parts[0], title: parts[1], flags: (parts[2] || "").split(/\s+/).filter(Boolean),
            lesson: lesson.id, prompt: [], starter: "", solution: "", test: "", stdin: "", hints: [], files: {},
          };
          lesson.exercises.push(exercise);
          course.exercises[exercise.id] = exercise;
        } else if (key === "end") {
          flush();
          exercise = null;
        } else {
          buffer.push(line);
        }
        i++;
        continue;
      }
      buffer.push(line);
      i++;
    }
    flush();
    return course;
  }

  function insideFence(buffer) {
    let open = false;
    for (const l of buffer) if (/^```/.test(l)) open = !open;
    return open;
  }

  // Turns lines into blocks. `owner` receives exercise fields (starter,
  // solution, test, hints) and files; `lesson` receives recall cards.
  function parseBlocks(lines, owner, lesson) {
    const blocks = [];
    let i = 0;
    let para = [];
    const endPara = () => {
      if (para.length) blocks.push({ t: "p", s: para.join(" ") });
      para = [];
    };
    while (i < lines.length) {
      const line = lines[i];
      const fence = FENCE.exec(line);
      if (fence && /^```/.test(line)) {
        endPara();
        const lang = fence[1] || "text";
        const info = (fence[2] || "").trim();
        const body = [];
        i++;
        while (i < lines.length && !/^```\s*$/.test(lines[i])) body.push(lines[i++]);
        i++;
        const code = body.join("\n");
        if (owner && ["starter", "solution", "test"].includes(lang)) {
          owner[lang] = code;
        } else if (lang === "stdin") {
          // In an exercise it is the exercise's input; in a lesson it belongs
          // to the example just above it.
          const prev = blocks[blocks.length - 1];
          if (owner && owner.prompt) owner.stdin = code;
          else if (prev && prev.t === "code") prev.stdin = code;
        } else if (lang === "file") {
          const name = info || "data.txt";
          if (owner) owner.files[name] = code + "\n";
          if (lesson && lesson !== owner) lesson.files[name] = code + "\n";
          blocks.push({ t: "file", name, code });
        } else {
          const flags = info.split(/\s+/).filter(Boolean);
          blocks.push({ t: "code", lang, flags, code });
        }
        continue;
      }
      const box = /^:::(\w+)\s*(.*)$/.exec(line);
      if (box) {
        endPara();
        const kind = box[1];
        const title = box[2] || "";
        const body = [];
        i++;
        let depthFence = false;
        while (i < lines.length) {
          const l = lines[i];
          if (/^```/.test(l)) depthFence = !depthFence;
          if (!depthFence && /^:::\s*$/.test(l)) break;
          body.push(l);
          i++;
        }
        i++;
        if (kind === "quiz" || kind === "predict") blocks.push(parseQuiz(kind, body));
        else if (kind === "recall") {
          const cards = parseRecall(body);
          if (lesson) lesson.recall.push(...cards);
        } else if (kind === "hints") {
          const hints = body.filter((l) => /^\s*-\s+/.test(l)).map((l) => l.replace(/^\s*-\s+/, ""));
          if (owner) owner.hints = hints;
        } else {
          blocks.push({ t: "box", kind, title, blocks: parseBlocks(body, null, null) });
        }
        continue;
      }
      const h = /^(#{2,3})\s+(.*)$/.exec(line);
      if (h) {
        endPara();
        blocks.push({ t: "h", level: h[1].length, s: h[2] });
        i++;
        continue;
      }
      if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
        endPara();
        const ordered = /^\s*\d+\.\s+/.test(line);
        const items = [];
        while (i < lines.length && (/^\s*[-*]\s+/.test(lines[i]) || /^\s*\d+\.\s+/.test(lines[i]) || (/^\s{2,}\S/.test(lines[i]) && items.length))) {
          const l = lines[i];
          if (/^\s{2,}\S/.test(l) && !/^\s*[-*]\s+/.test(l) && !/^\s*\d+\.\s+/.test(l)) items[items.length - 1] += " " + l.trim();
          else items.push(l.replace(/^\s*(?:[-*]|\d+\.)\s+/, ""));
          i++;
        }
        blocks.push({ t: ordered ? "ol" : "ul", items });
        continue;
      }
      if (/^\|.*\|\s*$/.test(line)) {
        endPara();
        const rows = [];
        while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) {
          const cells = lines[i].trim().slice(1, -1).split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, "|"));
          if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
          i++;
        }
        blocks.push({ t: "table", head: rows[0], rows: rows.slice(1) });
        continue;
      }
      if (line.trim() === "") {
        endPara();
        i++;
        continue;
      }
      para.push(line.trim());
      i++;
    }
    endPara();
    return blocks;
  }

  function parseQuiz(kind, body) {
    const q = { t: kind, q: "", code: "", options: [], why: "" };
    let i = 0;
    while (i < body.length) {
      const l = body[i];
      if (/^```/.test(l)) {
        const code = [];
        i++;
        while (i < body.length && !/^```\s*$/.test(body[i])) code.push(body[i++]);
        q.code = code.join("\n");
        i++;
        continue;
      }
      if (/^\?\s+/.test(l)) q.q = l.replace(/^\?\s+/, "");
      else if (/^[+-]\s/.test(l)) q.options.push({ text: l.slice(2).replace(/\\n/g, "\n"), ok: l[0] === "+" });
      else if (/^=\s+/.test(l)) q.why = l.replace(/^=\s+/, "");
      else if (q.why && l.trim()) q.why += " " + l.trim();
      i++;
    }
    return q;
  }

  function parseRecall(body) {
    const cards = [];
    let cur = null;
    for (const l of body) {
      if (/^Q:\s*/.test(l)) {
        cur = { q: l.replace(/^Q:\s*/, ""), a: "" };
        cards.push(cur);
      } else if (/^A:\s*/.test(l) && cur) cur.a = l.replace(/^A:\s*/, "");
      else if (cur && l.trim()) cur.a += (cur.a ? " " : "") + l.trim();
    }
    return cards;
  }

  return { parseCourse };
});
