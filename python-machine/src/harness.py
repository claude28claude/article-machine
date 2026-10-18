# The Python Machine: the harness that runs a learner's code inside Pyodide.
# It is executed once when the worker starts and defines three entry points,
# _pm_run, _pm_test and _pm_trace, each taking and returning a JSON string.

import ast
import builtins
import importlib
import io
import json
import linecache
import math
import os
import random
import shutil
import sys
import time
import traceback
import types

FILENAME = "main.py"
MAX_CHARS = 200_000
MAX_STEPS = 1500
WORK = "/home/pyodide/work"

os.makedirs(WORK, exist_ok=True)
os.chdir(WORK)
os.environ.setdefault("MPLBACKEND", "Agg")

_emit_js = globals().get("_pm_emit_js")


class _NeedInput(BaseException):
    """The program asked for input the learner has not typed yet."""


class _OutputLimit(BaseException):
    """The program printed more than MAX_CHARS characters."""


class _StepLimit(BaseException):
    """The visualizer recorded MAX_STEPS steps and stopped."""


class _Session:
    def __init__(self, inputs=(), interactive=False, stream=False):
        self.inputs = [str(x) for x in inputs]
        self.used = 0
        self.interactive = interactive
        self.chunks = []
        self.stdout_parts = []
        self.size = 0
        self.need_input = False
        self.stream = stream and _emit_js is not None
        self.pending = []
        self.last_emit = time.monotonic()
        self.charts = []

    def add_image(self, b64):
        self.chunks.append(["img", b64])
        if self.stream:
            self.pending.append(["img", b64])
            self.flush()

    def add(self, kind, text):
        if not text:
            return
        if self.need_input:
            # Output after an unanswered input() would be wrong on the replay.
            raise _NeedInput()
        if self.chunks and self.chunks[-1][0] == kind:
            self.chunks[-1][1] += text
        else:
            self.chunks.append([kind, text])
        if kind == "out":
            self.stdout_parts.append(text)
        self.size += len(text)
        if self.size > MAX_CHARS:
            raise _OutputLimit()
        if self.stream:
            self.pending.append([kind, text])
            if time.monotonic() - self.last_emit > 0.06:
                self.flush()

    def flush(self):
        if self.stream and self.pending:
            _emit_js(json.dumps(self.pending))
            self.pending = []
            self.last_emit = time.monotonic()

    @property
    def stdout(self):
        return "".join(self.stdout_parts)


class _Stream(io.TextIOBase):
    def __init__(self, session, kind):
        self._session = session
        self._kind = kind

    def writable(self):
        return True

    def write(self, s):
        if not isinstance(s, str):
            raise TypeError(f"write() argument must be str, not {type(s).__name__}")
        self._session.add(self._kind, s)
        return len(s)

    def flush(self):
        pass

    def isatty(self):
        return False


def _make_input(session):
    def input(prompt=""):
        prompt = str(prompt)
        if prompt:
            sys.stdout.write(prompt)
        if session.used < len(session.inputs):
            value = session.inputs[session.used]
            session.used += 1
            session.add("in", value + "\n")
            return value
        if session.interactive:
            session.need_input = True
            raise _NeedInput()
        raise EOFError("EOF when reading a line")

    return input


def _filter_tb(te):
    te.stack = traceback.StackSummary.from_list(
        [f for f in te.stack if f.filename == FILENAME]
    )
    if te.__cause__ is not None:
        _filter_tb(te.__cause__)
    if te.__context__ is not None:
        _filter_tb(te.__context__)
    return te


def _error_info(e):
    try:
        te = _filter_tb(traceback.TracebackException.from_exception(e))
        tb = "".join(te.format())
    except Exception:
        tb = f"{type(e).__name__}: {e}\n"
    line = None
    if isinstance(e, SyntaxError) and e.filename == FILENAME:
        line = e.lineno
    else:
        frames = [f for f in traceback.extract_tb(e.__traceback__) if f.filename == FILENAME]
        if frames:
            line = frames[-1].lineno
    return {"type": type(e).__name__, "msg": str(e), "line": line, "tb": tb}


def _prepare_files(files, fresh):
    if fresh:
        for name in os.listdir(WORK):
            path = os.path.join(WORK, name)
            if os.path.isdir(path):
                shutil.rmtree(path, ignore_errors=True)
            else:
                os.remove(path)
    os.chdir(WORK)
    for name, content in (files or {}).items():
        path = os.path.join(WORK, name)
        folder = os.path.dirname(path)
        if folder:
            os.makedirs(folder, exist_ok=True)
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(content)


# Charts: figures are drawn with the Agg backend and shown in the console as
# PNG images, in a dark style that matches the page.
_CHART_STYLE = {
    "figure.facecolor": "#151d2b",
    "axes.facecolor": "#151d2b",
    "savefig.facecolor": "#151d2b",
    "axes.edgecolor": "#3a4a64",
    "axes.labelcolor": "#e2e6ee",
    "axes.titlecolor": "#e2e6ee",
    "text.color": "#e2e6ee",
    "xtick.color": "#9aa6b9",
    "ytick.color": "#9aa6b9",
    "grid.color": "#2a3850",
    "legend.facecolor": "#151d2b",
    "legend.edgecolor": "#3a4a64",
    "figure.figsize": (6.4, 3.8),
    "axes.prop_cycle": None,
}


def _chart_setup(session):
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from cycler import cycler

    plt.close("all")
    style = dict(_CHART_STYLE)
    style["axes.prop_cycle"] = cycler(color=["#f2cb4a", "#74ace4", "#6cc795", "#e7a65a", "#b7a4f2", "#f08181", "#6fd1cf"])
    matplotlib.rcdefaults()
    matplotlib.rcParams.update(style)

    def show(*args, **kwargs):
        _emit_figures(session)

    plt.show = show
    return plt


def _emit_figures(session):
    import base64
    import matplotlib.pyplot as plt

    for num in plt.get_fignums():
        fig = plt.figure(num)
        info = {"title": fig._suptitle.get_text() if fig._suptitle else "", "axes": []}
        for ax in fig.axes:
            info["axes"].append(
                {
                    "title": ax.get_title(),
                    "xlabel": ax.get_xlabel(),
                    "ylabel": ax.get_ylabel(),
                    "lines": len(ax.lines),
                    "bars": sum(1 for p in ax.patches if type(p).__name__ == "Rectangle"),
                    "points": sum(len(c.get_offsets()) for c in ax.collections if hasattr(c, "get_offsets")),
                    "wedges": sum(1 for p in ax.patches if type(p).__name__ == "Wedge"),
                    "legend": ax.get_legend() is not None,
                }
            )
        session.charts.append(info)
        buf = io.BytesIO()
        fig.savefig(buf, format="png", dpi=96, bbox_inches="tight")
        session.add_image(base64.b64encode(buf.getvalue()).decode("ascii"))
        plt.close(fig)


def _forget_user_modules():
    """Drop modules imported from the work folder so edits to them are seen."""
    for name, mod in list(sys.modules.items()):
        path = getattr(mod, "__file__", None) or ""
        if path.startswith(WORK):
            del sys.modules[name]
    importlib.invalidate_caches()


def _execute(src, session, seed=None, tracer=None):
    """Run src as __main__. Returns (error_info_or_None, globals, status)."""
    _forget_user_modules()
    if WORK not in sys.path:
        sys.path.insert(0, WORK)
    linecache.cache[FILENAME] = (len(src), None, src.splitlines(True), FILENAME)
    g = {"__name__": "__main__", "__builtins__": builtins}
    saved = (sys.stdout, sys.stderr, builtins.input, sys.stdin)
    sys.stdout = _Stream(session, "out")
    sys.stderr = _Stream(session, "err")
    sys.stdin = io.StringIO("".join(x + "\n" for x in session.inputs))
    builtins.input = _make_input(session)
    if seed is not None:
        random.seed(seed)
    err = None
    status = "ok"
    try:
        os.chdir(WORK)
    except OSError:
        pass
    charts = None
    if "matplotlib" in src or "pylab" in src:
        try:
            charts = _chart_setup(session)
        except Exception:
            charts = None
    try:
        code = compile(src, FILENAME, "exec")
        if tracer is not None:
            sys.settrace(tracer)
        try:
            exec(code, g)
        finally:
            sys.settrace(None)
    except _NeedInput:
        status = "input"
    except _OutputLimit:
        status = "limit"
        err = {
            "type": "OutputLimit",
            "msg": "Your program printed more than 200,000 characters, so it was stopped.",
            "line": None,
            "tb": "",
        }
    except _StepLimit:
        status = "steps"
    except SystemExit as e:
        status = "exit"
        if e.code not in (None, 0):
            if isinstance(e.code, int):
                session.chunks.append(["sys", f"Program exited with code {e.code}\n"])
            else:
                session.chunks.append(["err", f"{e.code}\n"])
    except BaseException as e:  # noqa: BLE001 - report every learner error
        status = "error"
        err = _error_info(e)
    finally:
        sys.stdout, sys.stderr, builtins.input, sys.stdin = saved
        if charts is not None and status != "input":
            try:
                _emit_figures(session)
            except Exception:
                pass
        try:
            session.flush()
        except Exception:
            pass
    return err, g, status


_HIDDEN = {"__name__", "__builtins__", "__doc__", "__loader__", "__spec__", "__package__", "__file__", "__cached__", "__annotations__"}


def _short(value, limit=72):
    try:
        if isinstance(value, types.FunctionType):
            try:
                import inspect

                return f"{value.__name__}{inspect.signature(value)}"
            except Exception:
                return f"{value.__name__}(...)"
        if isinstance(value, type):
            return f"class {value.__name__}"
        cls = type(value)
        if cls.__repr__ is object.__repr__ and hasattr(value, "__dict__"):
            inner = ", ".join(f"{k}={_short(v, 24)}" for k, v in vars(value).items() if not k.startswith("_"))
            text = f"{cls.__name__}({inner})"
        else:
            text = repr(value)
    except Exception as e:  # a broken __repr__ in learner code
        text = f"<repr failed: {type(e).__name__}>"
    if len(text) > limit:
        text = text[: limit - 1] + "…"
    return text


def _type_name(value):
    if isinstance(value, types.FunctionType):
        return "function"
    if isinstance(value, type):
        return "class"
    return type(value).__name__


def _var_rows(items, refs=None):
    rows = []
    for name, value in items:
        if name in _HIDDEN or name.startswith("_pm") or isinstance(value, types.ModuleType):
            continue
        if name.startswith("__") and name.endswith("__"):
            continue
        ref = 0
        if refs is not None and not isinstance(value, (types.FunctionType, type)):
            if isinstance(value, (list, dict, set, bytearray)) or (
                hasattr(value, "__dict__") and not isinstance(value, (types.BuiltinFunctionType, types.MethodType))
            ):
                key = id(value)
                if key not in refs:
                    refs[key] = len(refs) + 1
                ref = refs[key]
        rows.append([name, _type_name(value), _short(value), ref])
    return rows


def _split_lines(text):
    if text is None:
        return []
    if isinstance(text, list):
        return [str(x) for x in text]
    text = str(text)
    if text == "":
        return []
    if text.endswith("\n"):
        text = text[:-1]
    return text.split("\n")


def _trim(chunks, limit=60_000):
    total = 0
    kept = []
    for kind, text in chunks:
        if kind == "img":
            kept.append([kind, text])
            continue
        if total + len(text) > limit:
            kept.append([kind, text[: max(0, limit - total)]])
            kept.append(["sys", "\n[output cut here, it was too long to show]\n"])
            break
        kept.append([kind, text])
        total += len(text)
    return kept


def _pm_run(payload):
    p = json.loads(payload)
    _prepare_files(p.get("files"), p.get("fresh", False))
    session = _Session(p.get("inputs", []), p.get("interactive", False), p.get("stream", False))
    t0 = time.perf_counter()
    err, g, status = _execute(p["code"], session, seed=p.get("seed"))
    ms = round((time.perf_counter() - t0) * 1000)
    return json.dumps(
        {
            "chunks": _trim(session.chunks),
            "error": err,
            "status": status,
            "used": session.used,
            "ms": ms,
            "vars": _var_rows(list(g.items()))[:40] if status in ("ok", "exit") else [],
        }
    )


# ---------------------------------------------------------------- testing


class _AbortTest(Exception):
    pass


def _norm(text):
    lines = [line.rstrip() for line in str(text).replace("\r\n", "\n").split("\n")]
    while lines and lines[-1] == "":
        lines.pop()
    while lines and lines[0] == "":
        lines.pop(0)
    return "\n".join(lines)


def _diff(expected, got):
    e_lines = expected.split("\n") if expected else []
    g_lines = got.split("\n") if got else []
    first = None
    for i in range(max(len(e_lines), len(g_lines))):
        a = e_lines[i] if i < len(e_lines) else None
        b = g_lines[i] if i < len(g_lines) else None
        if a != b:
            first = (i + 1, a, b)
            break
    parts = ["Expected output:", expected if expected else "(nothing)", "", "Your output:", got if got else "(nothing)"]
    if first:
        n, a, b = first
        parts.append("")
        if b is None:
            parts.append(f"Line {n} is missing. Expected: {a!r}")
        elif a is None:
            parts.append(f"Extra line {n}: {b!r}")
        else:
            parts.append(f"First difference on line {n}:")
            parts.append(f"  expected {a!r}")
            parts.append(f"  got      {b!r}")
    return "\n".join(parts)


def _same(a, b):
    if isinstance(a, bool) or isinstance(b, bool):
        return type(a) is type(b) and a == b
    if isinstance(a, (int, float)) and isinstance(b, (int, float)):
        if isinstance(a, float) or isinstance(b, float):
            return math.isclose(a, b, rel_tol=1e-9, abs_tol=1e-9)
        return a == b
    if isinstance(a, (list, tuple)) and isinstance(b, (list, tuple)):
        return type(a) is type(b) and len(a) == len(b) and all(_same(x, y) for x, y in zip(a, b))
    try:
        return type(a) is type(b) and a == b if isinstance(b, (str, dict, set)) else a == b
    except Exception:
        return False


def _pm_test(payload):
    p = json.loads(payload)
    src = p["code"]
    test_src = p.get("test", "")
    files = p.get("files") or {}
    _prepare_files(files, True)
    session = _Session(_split_lines(p.get("stdin", "")), False)
    err, g, status = _execute(src, session, seed=p.get("seed", 7))
    out = session.stdout
    checks = []
    try:
        tree = ast.parse(src)
    except SyntaxError:
        tree = None

    def check(cond, label, detail=""):
        ok = bool(cond)
        checks.append({"ok": ok, "label": str(label), "detail": "" if ok else str(detail)})
        return ok

    def check_out(expected, label="Your program prints the right output", got=None):
        got = out if got is None else got
        e, o = _norm(expected), _norm(got)
        return check(e == o, label, _diff(e, o))

    def check_has(text, label=None, got=None):
        got = out if got is None else got
        label = label or f"The output includes {str(text)!r}"
        return check(str(text) in got, label, f"Your output was:\n{_norm(got) or '(nothing)'}")

    def check_lines(expected_lines, label="Your program prints the right lines", got=None):
        return check_out("\n".join(str(x) for x in expected_lines), label, got)

    last = {}

    def run(stdin="", files=None):
        """Run the learner's program again from scratch and return its output."""
        _prepare_files(files or {}, False)
        s = _Session(_split_lines(stdin), False)
        e2, g2, st2 = _execute(src, s, seed=p.get("seed", 7))
        last.clear()
        last.update({"error": e2, "globals": g2, "out": s.stdout})
        return s.stdout

    def last_error():
        e2 = last.get("error")
        return e2["type"] if e2 else None

    def expect(expr, expected, label=None):
        label = label or f"{expr} gives {expected!r}"
        try:
            value = eval(expr, tg)
        except NameError as e:
            return check(False, label, f"{e}. Did you define it with exactly that name?")
        except Exception as e:  # learner function raised
            return check(False, label, f"{expr} raised {type(e).__name__}: {e}")
        return check(_same(value, expected), label, f"{expr} gave {value!r} ({type(value).__name__})")

    def expect_raises(expr, exc_type, label=None):
        label = label or f"{expr} raises {exc_type.__name__}"
        try:
            value = eval(expr, tg)
        except exc_type:
            return check(True, label)
        except Exception as e:
            return check(False, label, f"It raised {type(e).__name__}: {e}")
        return check(False, label, f"It returned {value!r} instead of raising {exc_type.__name__}")

    def has(*kinds):
        return tree is not None and any(type(n).__name__ in kinds for n in ast.walk(tree))

    def calls(name):
        if tree is None:
            return False
        for n in ast.walk(tree):
            if isinstance(n, ast.Call):
                f = n.func
                if (isinstance(f, ast.Name) and f.id == name) or (isinstance(f, ast.Attribute) and f.attr == name):
                    return True
        return False

    def uses(name):
        return tree is not None and any(
            (isinstance(n, ast.Name) and n.id == name) or (isinstance(n, ast.Attribute) and n.attr == name)
            for n in ast.walk(tree)
        )

    def defined(name):
        return name in g

    def need(name, kind=None):
        """Stop the checks with a clear message if a name is missing."""
        if name not in g:
            check(False, f"Your code defines {name}", f"There is no {name} in your code. Check the spelling.")
            raise _AbortTest()
        if kind == "function" and not callable(g[name]):
            check(False, f"{name} is a function", f"{name} is a {type(g[name]).__name__}, not a function.")
            raise _AbortTest()
        return g[name]

    def var(name, default=None):
        return g.get(name, default)

    def reset_files():
        """Put the exercise's starting files back, as they were before the run."""
        _prepare_files(files, True)

    def file_text(name):
        try:
            with open(os.path.join(WORK, name), encoding="utf-8") as fh:
                return fh.read()
        except OSError:
            return None

    tg = {"__builtins__": builtins}
    tg.update({k: v for k, v in g.items() if k != "__builtins__"})
    tg.update(
        check=check, check_out=check_out, check_has=check_has, check_lines=check_lines,
        run=run, last_error=last_error, expect=expect, expect_raises=expect_raises,
        has=has, calls=calls, uses=uses, defined=defined, need=need, var=var,
        file_text=file_text, reset_files=reset_files, out=out, src=src, error=(err["type"] if err else None), charts=session.charts,
        lines=_norm(out).split("\n") if _norm(out) else [],
    )

    if err is not None and not p.get("allow_error"):
        checks.append({"ok": False, "label": "Your program runs without errors", "detail": err["tb"] or err["msg"]})
    elif status == "input":
        checks.append({"ok": False, "label": "Your program runs to the end", "detail": "It is waiting for input."})
    else:
        saved_out = sys.stdout
        sys.stdout = io.StringIO()  # tests never print into the learner's console
        try:
            exec(compile(test_src, "test.py", "exec"), tg)
        except _AbortTest:
            pass
        except Exception as e:  # noqa: BLE001
            checks.append({"ok": False, "label": "The checks could finish", "detail": f"{type(e).__name__}: {e}"})
        finally:
            sys.stdout = saved_out
    passed = bool(checks) and all(c["ok"] for c in checks)
    return json.dumps({"checks": checks, "passed": passed, "chunks": _trim(session.chunks), "error": err, "status": status})


# ---------------------------------------------------------------- visualizer


def _pm_trace(payload):
    p = json.loads(payload)
    src = p["code"]
    _prepare_files(p.get("files"), p.get("fresh", False))
    session = _Session(_split_lines(p.get("stdin", "")), False)
    steps = []
    refs = {}

    def out_len():
        return sum(len(c[1]) for c in session.chunks if c[0] != "img")

    def snapshot(frame, event, arg):
        frames = []
        f = frame
        while f is not None:
            if f.f_code.co_filename == FILENAME:
                frames.append(f)
            f = f.f_back
        frames.reverse()
        stack = []
        for fr in frames:
            name = fr.f_code.co_name
            if name == "<module>":
                rows = _var_rows(list(fr.f_globals.items()), refs)
                stack.append({"fn": "Global", "line": fr.f_lineno, "vars": rows})
            else:
                local_items = list(fr.f_locals.items())
                is_class_body = any(k == "__qualname__" for k, _ in local_items)
                rows = _var_rows(local_items, refs)
                label = f"class {name}" if is_class_body else name
                stack.append({"fn": label, "line": fr.f_lineno, "vars": rows})
        step = {"line": frame.f_lineno, "event": event, "stack": stack, "out": out_len()}
        if event == "return" and frame.f_code.co_name != "<module>":
            if stack and stack[-1]["fn"].startswith("class "):
                return
            step["ret"] = _short(arg)
            step["fn"] = frame.f_code.co_name
        if event == "exception":
            step["exc"] = f"{arg[0].__name__}: {arg[1]}"
        steps.append(step)
        if len(steps) >= MAX_STEPS:
            raise _StepLimit()

    def tracer(frame, event, arg):
        if frame.f_code.co_filename != FILENAME:
            return None
        if frame.f_code.co_name in ("<listcomp>", "<dictcomp>", "<setcomp>", "<genexpr>") and event == "line":
            return tracer
        if event in ("line", "return", "exception"):
            snapshot(frame, event, arg)
        return tracer

    err, g, status = _execute(src, session, seed=p.get("seed", 7), tracer=tracer)
    return json.dumps(
        {
            "steps": steps,
            "chunks": _trim(session.chunks),
            "error": err,
            "status": status,
            "truncated": status == "steps",
        }
    )
