#!/usr/bin/env bash
# Downloads what the build and the tests need but the repo does not carry
# (about 50 MB): Pyodide 0.29.5 with the 17 package wheels the course uses,
# CodeMirror 5.65.16, and local copies of the Google Fonts for the browser
# tests. Pinned versions, so a rebuild is byte-for-byte the published page.
set -euo pipefail
cd "$(dirname "$0")"

PYODIDE=0.29.5
CODEMIRROR=5.65.16
WHEELS="
beautifulsoup4-4.13.3-py3-none-any.whl
contourpy-1.3.1-cp313-cp313-pyemscripten_2025_0_wasm32.whl
cycler-0.12.1-py3-none-any.whl
fonttools-4.56.0-py3-none-any.whl
kiwisolver-1.4.8-cp313-cp313-pyemscripten_2025_0_wasm32.whl
matplotlib-3.8.4-cp313-cp313-pyemscripten_2025_0_wasm32.whl
numpy-2.2.5-cp313-cp313-pyemscripten_2025_0_wasm32.whl
packaging-26.2-py3-none-any.whl
pandas-2.3.3-cp313-cp313-pyemscripten_2025_0_wasm32.whl
pillow-11.3.0-cp313-cp313-pyemscripten_2025_0_wasm32.whl
pyparsing-3.2.1-py3-none-any.whl
python_dateutil-2.9.0.post0-py2.py3-none-any.whl
pytz-2025.2-py2.py3-none-any.whl
six-1.17.0-py2.py3-none-any.whl
soupsieve-2.6-py3-none-any.whl
sqlite3-1.0.0-cp313-cp313-pyemscripten_2025_0_wasm32.whl
typing_extensions-4.15.0-py3-none-any.whl
"

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
mkdir -p vendor/pyodide vendor/codemirror vendor/wheels test/fonts

echo "npm: pyodide@$PYODIDE, codemirror@$CODEMIRROR"
(cd "$tmp" && npm pack --silent "pyodide@$PYODIDE" "codemirror@$CODEMIRROR" >/dev/null)
tar -xzf "$tmp/pyodide-$PYODIDE.tgz" -C vendor/pyodide --strip-components=1
tar -xzf "$tmp/codemirror-$CODEMIRROR.tgz" -C vendor/codemirror --strip-components=1

echo "wheels: from the Pyodide $PYODIDE release (a 400 MB download, streamed)"
members=()
for w in $WHEELS; do members+=("pyodide/$w"); done
curl -fsSL "https://github.com/pyodide/pyodide/releases/download/$PYODIDE/pyodide-$PYODIDE.tar.bz2" | tar -xj -C "$tmp" "${members[@]}"
for w in $WHEELS; do
  cp "$tmp/pyodide/$w" vendor/wheels/
  cp "$tmp/pyodide/$w" vendor/pyodide/ # the Node engine loads packages from here
done

echo "fonts: local copies for the browser tests"
while read -r url; do
  [ -n "$url" ] || continue
  name=$(printf '%s' "${url#https://fonts.gstatic.com/}" | tr / _)
  curl -fsSL "$url" -o "test/fonts/$name"
done < test/fonts/urls.txt

echo "done: $(du -sh vendor | cut -f1) in vendor/"
