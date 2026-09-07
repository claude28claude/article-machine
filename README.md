# The Article Machine

Every article of the Constitution of India in plain English: what it actually
means, the official text word for word, the landmark case that defined it, and
every amendment that changed it. Searchable, works offline, installable.

One page, no framework, no build step, no network calls, no tracking.

---

## What is in it

| | |
|---|---|
| Articles | **506** — 471 in force, 35 repealed |
| Parts | 26 (25 in force; Part VII was repealed in 1956) |
| Plain-English notes | **493**, covering every article in force |
| ...of which carry a "why it matters" note | 267 |
| Amendments | All **106**, with the articles each one touched |
| Schedules | All **12**, with the three legislative Lists in full |
| Landmark cases | **72** |

## Where the content comes from

**Extracted, not typed from memory.** Every article number, official heading and
word of official text was pulled programmatically from the Government of India's
own publication:

> *The Constitution of India [As on 1st May, 2024]*
> Legislative Department, Ministry of Law and Justice — 402 pages.

That edition was checked against the later *[As on 11th November, 2025]* edition,
which confirms the 106th Amendment is still the most recent one enacted.

**The amendment history is extracted too.** The official edition footnotes every
change ever made to every clause — which Amendment Act, in which year, from what
date. Those footnotes were parsed and attached to the articles they belong to.
182 articles carry a trail; 84 distinct amendments were traced this way.

**Written for the site:** the plain-English note under each article, the one-line
summary of each amendment, the description of each Schedule, and the account of
each case. These are summaries, and the official text sits underneath every one
of them so a reader can check what a summary lost.

### Where a field is deliberately empty

- **Commencement dates.** A footnote often cites two Acts at once, so a date in
  it may belong to either. A date is shown only where it clearly attaches to
  that Act. All eleven dates spot-checked against known values were correct;
  the three that could not be attributed show nothing rather than a guess.
- **Cases.** Most articles have never had a defining judgment. Rather than
  attach a loosely related case to every article, the field is left out.
- **Five amendments** (2nd, 8th, 12th, 37th, 48th) left no footnote trace,
  because later amendments overwrote what they did. They are marked as such.

## Files

| File | What it is |
|---|---|
| `index.html` | The shell: header, search box, nav, footer |
| `styles.css` | One stylesheet. Tokenised type ramp, numeral ramp, 4px space scale |
| `app.js` | Hash router, search, and the renderer for all five views |
| `data-articles.js` | The 506 articles: heading, Part, official text, amendment trail |
| `data-amendments.js` | The 106 amendments and the articles each touched |
| `data-schedules.js` | The 12 Schedules, including all 220 entries of the three Lists |
| `data-cases.js` | 72 landmark judgments, keyed to articles |
| `data-plain-1..5.js` | The plain-English notes, one file per group of Parts |
| `sw.js` | Service worker: precache everything, then serve offline |
| `tools/make-icons.py` | Regenerates the PWA icons |

## Running it

```bash
npx -y http-server article-machine -p 8137 -c-1
```

Then open <http://localhost:8137>. It is also registered in the workspace
`.claude/launch.json` as `article-machine`.

## Using it

- `/` focuses the search box. It searches article numbers, headings, the
  plain-English notes, the official text, case names and amendment subjects.
  Typing `21`, `art 21` or `article 21` all reach Article 21.
- `J` and `K` step to the next and previous article.
- `Esc` closes the results.
- On a phone, "Add to Home Screen" installs it as an app.

## Regenerating the data

The extraction scripts are not in this repo — they run against a 2.4 MB PDF
downloaded from legislative.gov.in. The pipeline was: fetch the PDF, parse the
contents pages for the article spine, walk the body in article order to pull
each article's heading and text, then parse each page's footnotes and attribute
the amendment markers to the articles they sit inside.

Four extraction bugs were found and fixed by auditing the output against the
source, and they are worth knowing about if it is ever rebuilt:

1. The running header is `THE CONSTITUTION OF  INDIA` with **two** spaces, so a
   single-space pattern silently never matched it.
2. The printed folio equals the PDF page index minus 30. Stripping it with a
   greedy digit run ate the leading digits of any article that began right after
   a page break — Article 100 became "00".
3. A bare hyphen is not a heading terminator. Treating it as one truncated every
   heading containing one: "The Vice-President of India" became "The Vice".
4. The contents pages glue adjacent entries together, which silently gave
   Article 330A the heading belonging to Article 330. The body text is
   authoritative and is used in preference.

## Not legal advice

This is a study aid. For anything that matters, read the article itself, and
then the judgment.
