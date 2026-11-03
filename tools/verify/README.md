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

# Checking the figures in the daily sets

    node tools/verify/figures.js

Three sets are covered: 4 November (the Sustainable Development Goals,
Census 2011 and the Mughal empire, against the census, SDG, Mughal-state and
Mughal-decline maps), 5 November (Buddhism and minerals, against the
Buddhism and minerals maps) and 6 November (the press and the organisations,
against the press and bodies maps). **573 figures in all**, of which 87 are
dates checked a second way, described below.

Before comparing, both sides are flattened the same way: the `==highlight==`
marks are dropped, because they sit INSIDE a figure - a map writes
`==34== caves` - so a pattern looking for "34 caves" could not otherwise
match; and a spelled-out ordinal is folded onto its numeral, because the
prose says "the twelfth century" where a map says "12th century". Those are
house style, not disagreement, and folding them means a REAL disagreement is
caught across the difference rather than hidden by it.

Each subject was written twice over: once as notes in `data-daily.js`, and again, cut to
keywords, in the mind maps that drill them. Copying a number by hand into a
second place is how a number goes wrong, so this asserts that each of 95
figures — the population and every ratio, each state record, the goal and
target counts, the Maratha and Mughal dates — appears in **both**, and that a
handful of plausible slips (sex ratio 940, 16 goals, 196 targets) appear in
neither.

It exits 1 on a mismatch. Changing 943 to 940 in one of the two places makes
it fail, which is the check working.

## A bare year is a weak probe

The first version of the 6 November coverage asked only whether a figure
appeared on both sides, and a mutation test showed how little that catches
for dates. 1878 is The Hindu, the Vernacular Press Act **and** the year
*Amrita Bazar Patrika* went English overnight, so moving any one of them
leaves 1878 in the prose and the mismatch hides. Six of eight deliberate
errors went through.

So every date in that set is bound to the thing it dates. `NOV6_DATES` holds
87 pairs, and `yr(name, year)` builds a pattern asking for the name and the
year **on the same line**, in whichever order that side writes them. That is
why `flat()` now joins a leaf or a table row as `key = value` on one line
instead of two: a leaf and its text are one fact, and splitting them made the
binding impossible.

## And the same dates checked from the other side

A figure written twice — once in a sentence, once in a table row — can still
be changed in one place only, with the first check passing because the other
copy answers for it. So the dates are checked again: on every line that
**defines** one of them, it must be the same date.

Defines, not mentions. Prose cross-refers constantly — the 1823 Act line says
*Mirat-ul-Akhbar* closed, the *Amrita Bazar* line says it went English in 1878
— and reading those as dates for those papers gave 28 false alarms and nothing
true. A definition is narrower: a table row or a map leaf with the thing on
the key side, or a note that *opens* by naming it. Three refinements were
needed after that, each from a real false alarm:

- **Longer names first.** "Darpan" sits inside "Samachar Darpan", and "Indian
  Association" inside "British Indian Association" — different papers and
  different bodies, each with its own date. The longer names are removed from
  the line before the shorter one is looked for.
- **A later event is not the founding.** "1882 · Vernacular Press Act
  repealed = Ripon" is the repeal, and giving it 1878 would be the error, so a
  key naming a later event — repealed, merged, renamed, turned — is skipped.
- **A row may be keyed by several things.** "Mooknayak, Bahishkrit Bharat,
  Janata = Ambedkar, from 1920" is Mooknayak's date, honestly given; if another
  dated thing on the line owns the year, it is not a disagreement.

A fourth check covers the four papers printed abroad. Every one of those
cities is in the prose whatever happens, so asking whether San Francisco
appears cannot see the Ghadar press moved to Vancouver. Each paper is checked
against the *other three* cities instead.

# Checking the daily question sets

    node tools/verify/questions.js

The 266 questions in the three November sets. It asserts that every question
has four distinct non-empty options and a solution, that the answer index
points inside that range, that the part each question names still exists in
its set, that no solution refers to an option by position (which would break
when the options are rotated), that no `==` highlight marks leaked in from
the notes, and that no question is asked twice in the same set.

It also checks the answer positions are spread. Written straight through, the
right answer lands on B far more often than anywhere else - at one point B in
88 of 142; the options are rotated by a hash of the question text until no
position holds more than about a quarter, and this fails if any holds more
than 35 per cent. Guessing one letter every time currently scores 29 per cent.

Exits 1 on any of these. Pointing a question at a renamed part, putting the
answer index out of range, or writing "the first option" into a solution each
make it fail, which is the check working.

# Mutation testing

A checker that cannot fail is not a checker. Both of the above were tested by
breaking the data on purpose and confirming they exit 1:

| Broken on purpose | Caught |
|---|---|
| Ellora's 34 caves changed to 32 in the map | yes |
| The Jatakas' 547 changed to 357 | yes |
| Tarapur's 1969 changed to 1959 | yes |
| Gondwana's 96 to 98 per cent changed to 66 to 68 | yes |
| The Buddha's death moved from 483 BCE to 487 | yes |
| Digboi's 1901 changed to 1910 | yes |
| Nalanda's 1193 changed to 1197 | yes |
| Sukinda renamed in the minerals map | yes |
| A question pointed at a renamed part | yes |
| An answer index put out of range | yes |
| "the first option" written into a solution | yes |

The first run of the mark-stripping change was found this way: the Ellora
mutation went through, because the `==` marks sat between the number and the
word and the pattern could not match across them.

The 6 November coverage was built the same way. The first version caught two
of eight; the bound dates and the second check took it to eight of eight:

| Broken on purpose, 6 November | First version | Now |
|---|---|---|
| Hicky's 1780 moved to 1870 in the notes | no | yes |
| The Vernacular Press Act dated 1876 in the map | no | yes |
| The Ghadar press moved to Vancouver | no | yes |
| The Muslim League dated 1905 in the notes | no | yes |
| The Ghadar president swapped for its secretary | yes | yes |
| The Indian Association dated 1867 | no | yes |
| Belur Math dated 1889 | no | yes |
| Azad Hind dated 1942 | yes | yes |

**One known limit.** Renaming *one* of three mentions of a name still passes,
because the string survives in the other two: changing `==Digboi==` in the
minerals map's Assam leaf leaves "Digboi refinery" standing one leaf below.
A substring check cannot see that, and four of five older-set mutations are
caught for the same reason — the fifth is this one. It is recorded rather
than papered over.
