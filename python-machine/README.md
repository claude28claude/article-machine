# The Python Machine

A personal Python course, from a first `print()` to job-ready, that runs as a
private claude.ai artifact: **https://claude.ai/artifact/KytK7jjzq1TnCXBQiVafm7**
(it opens only for its owner unless shared).

This folder is its source. It is separate from The Article Machine: nothing
here is linked from the site or precached by its service worker.

## What is in it

| | |
|---|---|
| Course | 19 units, 87 lessons, 218 auto-checked exercises, 264 runnable examples, 57 predict-the-output questions, 8 quizzes, 248 recall cards |
| Phases | 1 Foundations (units 1 to 5), 2 Data and functions (6 to 8), 3 Real programs (9 to 12), 4 Professional Python (13 to 15), 5 Tracks: A Automation, B Data and AI, C Interviews, D Web apps |
| Python | Real CPython 3.13 (Pyodide 0.29.5) in a Web Worker: `input()`, files, numpy, pandas, matplotlib charts, bs4, sqlite3; step-through visualizer; runaway programs stopped after 10 s |
| Memory | Progress, saved code and spaced-repetition reviews (Leitner: 1, 2, 4, 8, 16, 32 days) in the artifact's private per-user database |
| Tutor | Claude, on the viewer's own usage: hints, error explanations, code review, chat, and new practice problems that real Python validates before you see them |

## Layout

```
build.js           assembles dist/ from src/, course/ and vendor/
fetch-vendor.sh    downloads Pyodide, its wheels, CodeMirror and test fonts (pinned)
src/page.html      page shell: fonts, header, CodeMirror script tags
src/app.css        the single dark theme
src/app.js         the app: router, views, store, code bench, tutor
src/worker.js      Pyodide worker; serves base64 stdlib and wheels to Pyodide
src/harness.py     runs learner code: input replay, limits, tracebacks, tests, tracer, charts
src/parse.js       course text parser, shared by the page and the validator
course/NN-*.txt    the lessons, one unit per file
test/              content validator, engine test, browser tests, local CSP server
```

## Change a lesson

1. Edit the unit's file in `course/`.
2. `node test/validate.js 05` checks that file with real Python (the argument filters by file name; leave it out to check everything). Every example must run, every predict answer must equal the real output, every solution must pass its test and every starter must fail it.
3. `node build.js`, then publish (below).

### Course format

````
@phase 1 | Foundations | One-line summary
@unit u1 | 1 | Hello, Python
@zen Readability counts.
@summary What the unit teaches.

@lesson 1.1 | Your first program | 20          minutes; a 4th field "project" marks a project lesson
@goal What the learner can do afterwards.

Body: paragraphs, ## headings, - lists, | tables |, **bold**, `code`.

```py                 runnable example; flags: norun, error (expected to raise)
```stdin              input for the example just above
```file data.txt      a file the lesson's programs can open
:::tip Title          boxes: tip, warn, note, real
:::predict            and :::quiz: "? question", a code fence, "+ right", "- wrong", "= why"
:::recall             review cards: "Q: ..." then "A: ..."

@exercise 1.1a | Title
Prompt text, then ```starter, ```solution, ```test and optional ```stdin,
and :::hints with one "- hint" per line (at least two).
@end
````

Inside a ` ```test ` block: `check(cond, label, detail)`, `check_out(expected)`,
`check_has(text)`, `check_lines(lines)`, `run(stdin, files)`, `last_error()`,
`expect("expr", value)`, `expect_raises("expr", ValueError)`,
`need("name", "function")`, `has("For", "Call")` (AST node names), `calls(name)`,
`uses(name)`, `defined(name)`, `var(name)`, `file_text(name)`, `reset_files()`,
and the values `out`, `src`, `error`, `lines`, `charts`.

## Build and test

```sh
./fetch-vendor.sh                  # once: about 50 MB into vendor/
node build.js                      # writes dist/
node test/validate.js              # all course content, with real Python
node test/engine.test.js           # engine smoke output

python3 test/serve.py 8800 dist &  # local server with an artifact-like CSP
node test/browser.js http://127.0.0.1:8800/
node test/views.js http://127.0.0.1:8800/
node test/packages.js http://127.0.0.1:8800/
node test/full.js http://127.0.0.1:8800/    # end to end with a mocked Claude runtime
```

The browser tests need Playwright (project or global install) and write
screenshots to `shots/`.

## Publish

Ask Claude Code to republish `dist/` to the artifact URL above. It publishes
`dist/index.html` with `root: dist` and a `files` map of whatever changed
(`course.js`, `pyworker.js`, `pm-parse.js`, `py/*`); files left out are kept,
and the capabilities (`db`, `user` with `profile`, `sample`) carry forward.

Artifacts cannot serve `.zip` or `.whl` files, so the build ships Python's
standard library and the package wheels as base64 `.txt` files and the worker
decodes them on the fly. Pyodide is self-hosted because artifact pages may load
scripts only from a few CDNs; it needs nothing beyond `wasm-unsafe-eval`.
