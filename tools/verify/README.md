# Checking the Congress sessions and the administrators

`data-congress.js` and `data-raj.js` were written from two sources, and this
directory is the check that nothing drifted between the sources and the file.

    python tools/verify/check.py

It compares, row by row:

- every Congress session against a standard exam list (typed into `check.py`)
  and against `inc.txt`, the presidents table from Wikipedia;
- every Governor, Governor-General and Viceroy against `gg.txt`, the
  governors-general and viceroys tables from Wikipedia.

A clean run means 100 rows agreed on name, year and venue with both sources.
It does not mean the prose is right — only that no name, date or place
drifted while it was being written, which is the mistake this catches.

`inc.txt` and `gg.txt` are the fetched tables, flattened to one row per line
by `dump.py` (which uses the parser in `rows.py`). To refresh them:

```bash
curl -s "https://en.wikipedia.org/w/api.php?action=parse&page=List%20of%20presidents%20of%20the%20Indian%20National%20Congress&prop=wikitext&format=json&formatversion=2" -o inc.json
python dump.py inc.json inc.txt
```

Wikipedia is used only as a source of facts — names, years, places. Facts are
not copyrightable and none of its prose is reproduced; every sentence on the
site is written for the site.

## What the check found the first time

Eleven differences, of which four were real and are now fixed: Nehru's 1946
presidency had no row of its own, Canning's Governor-Generalship was given as
1856–1862 instead of 1856–1858, and five acting Viceroys were missing. The
other seven were spelling variants of the same person — Dar and Dhar, Bose
and Basu — and the site now prints both, because an answer key may use
either.
