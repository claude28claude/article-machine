# The Article Machine

Two subjects for the Indian exam track, in plain English. Searchable across
both, works offline, installable.

**The Constitution of India** — every article, what it actually means, the
official text word for word, the landmark case that defined it, and every
amendment that changed it.

**Modern History** — 1600 to 1949: the timeline, the Acts, the people and the
movements.

**Live at <https://claude28claude.github.io/article-machine/>**

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
| Landmark cases | **91** |
| High-yield entries | **298** articles, 91 cases, 73 amendments, tiered |
| Confused pairs | **16** side-by-side comparisons |
| Quick facts | **52** across 6 sets |

## The high-yield layer

A separate section (`#/high-yield`) pulls out what actually gets asked, in three
tiers — **must know / should know / worth a look** — for articles, cases and
amendments alike, each with a line on *why* it is asked rather than just that it
is. Alongside it:

- **Confused pairs** — 32 vs 226, the three emergencies, 72 vs 161, 110 vs 117,
  249/250/252/253, Fifth vs Sixth Schedule, the five writs, the four majorities.
  Every article number mentioned is auto-linked to the real article.
- **Quick facts** — the Preamble, dates, numbers, firsts and onlys, the
  conventional borrowed-features list, and constitutional vs statutory bodies.

**What the tiers are and are not.** They are editorial judgement about what
recurs in Indian competitive-exam polity. They are *not* counts of past papers,
and nothing on the site claims "asked N times". The site says so on the page
itself, because a made-up frequency figure would be worse than none.

## Modern History

| | |
|---|---|
| Timeline events | **107**, across 8 eras from 1600 to 1949 |
| Acts | **13**, from the Regulating Act 1773 to the Independence Act 1947 |
| People | **32** |
| Movements | **8**, each with trigger, method and outcome |
| Confused pairs | **13** |
| Quick facts | **111** across 8 tables |

**This subject is written, not extracted.** The Constitution has a single
authoritative PDF behind it; history does not. Dates are where errors hide, so
the ones sources most often disagree on were checked before writing: the two
dates of the Partition of Bengal, the founding of both Home Rule Leagues, the
Non-Cooperation timeline, the Communal Award and Poona Pact including the
71-to-148 seat figure, and the Azad Hind government. Where an attribution is
genuinely disputed — "Jai Hind", "Sarfaroshi ki tamanna" — the entry says so
instead of picking a side quietly.

Every event is validated to fall inside the era it is filed under; that check
caught five misfiled events on the first run.

## Adding another subject

The site is built as a registry of subjects so an unrelated one can be added
without touching the router or the header. In `app.js`:

```js
var SUBJECTS = [{ id, name, blurb, isDefault, tabs:[...], stats(), route(seg) }]
```

To add one: drop in its data file, push an entry, and it appears in the nav and
answers at `#/<id>/...` on its own. The Constitution is the default subject, so
its routes stay at the top level (`#/a/21`) and every published link keeps
working; a second subject is namespaced under its id, and a hub page at `#/hub`
appears automatically once there is more than one.

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
| `data-cases.js` | 91 landmark judgments, keyed to articles |
| `data-highyield.js` | The Constitution's exam layer: tiers, confused pairs, quick facts |
| `data-history.js` | Modern History: eras, timeline, Acts, people, movements |
| `data-history-hy.js` | Modern History's exam layer |
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
- **Install it as an app** with the button in the header. In Chrome and Edge
  that is one click (the site captures `beforeinstallprompt` and replays it from
  its own button). Every other browser installs from its own menu and fires no
  event, so the same button shows instructions written for the browser actually
  in use — Safari on iOS, Safari on macOS, Firefox, Android. The button hides
  itself once the site is already running installed.

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
