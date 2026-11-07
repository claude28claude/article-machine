# The Article Machine

Ten subjects for the Indian exam track, in plain English, organised by
**topic** rather than by subject. Searchable across all of them, works offline,
installable.

**The Constitution of India** — every article, what it actually means, the
official text word for word, the landmark case that defined it, and every
amendment that changed it.

**The Constituent Assembly** — the body that wrote it: how it was
constituted, who chaired what, the committees, the members, the debates, and
every date from 9 December 1946 to 26 January 1950. The article pages are
about the document; this is about the making of it, and an exam treats the two
as different topics.

**Modern History** — 1600 to 1950: the timeline, the Acts, the people and the
movements.

**Ancient and Medieval History** — what came before 1600: Jainism and the two
Jain councils (with the Buddhist councils beside them, because Pataliputra
hosted one of each), and the Mughal empire from Babur to Bahadur Shah Zafar,
with a page for each great Mughal and topic pages for the battles, the
administration, Akbar's religious policy, the buildings and the books.

**Indian Economy** — every Five Year Plan and every gap between them, each with
its own SSC notes, a one-line-each table and a scheme-to-plan lookup; the 1991
reforms in full, with the dates in order and the vocabulary; and eight standing topics: planning bodies, banking, the
Budget and GST, poverty and schemes, agriculture, national income, who
publishes which report, and the international bodies.

**Static General Knowledge** — twenty-two packs of the facts that do not change:
national symbols, dance, awards, sports, every cup and trophy by sport, Paris
2024 (the Olympics and the Paralympics), firsts, superlatives, rivers and dams,
national parks, World Heritage Sites, monuments, important days, books and
authors (with the autobiographies, pen names and the latest literary prizes),
headquarters, international organisations in full, science, the human body,
space and defence, ISRO and every space mission in order, the states, and the
world.

**Biology** — three topics done in full rather than in summary: diseases,
nutrients, and the glands and their hormones.

**Advanced Maths** — every SSC formula for algebra, geometry, mensuration,
trigonometry and coordinate geometry, with a recall drill that hides each
formula until you have produced it, 164 practice questions with worked
solutions, and 23 diagrams; profit, loss and mixture kept separate.

**Daily study sets** — one page per study day, labelled with its date: a sheet
of highlighted SSC notes for what was added to the site that day, and a set of
questions written from those notes. **632 questions** across the four sets,
four options each, taken ten or twenty at a time or as one paper, from one day
or from all of them mixed.

There are two front doors, because a reader arrives with one of two
questions. `#/` is a **filterable list of every topic** — for when you know
what you want. `#/index` is **the whole site as an outline**: every subject,
every section, and every one of the 1,254 individual pages, folded shut so you
can see the shape at a glance and open only the part you are working through.

The front page is a **filterable list of every topic on the site**. A reader
arrives knowing what they need to revise, not which of ten subjects it lives
in, so `#/` asks that question first and every subject sits one click behind
it.

**Live at <https://claude28claude.github.io/article-machine/>**

One page, no framework, no build step, no network calls, no tracking.

**The Supreme Court JCA law paper is a subject here too**. The gold **JCA**
pill in the header opens it from any page of the site; the **JCA** tab in the
strip below opens its list of topics. See [The JCA section](#the-jca-section)
below.

### The JCA pill in the header

The subject tabs live in a strip that scrolls sideways, and JCA is twelfth of
the fourteen entries in it. Measured in the browser: on a 375px phone the
strip is 1,497px wide and the JCA tab starts at 1,255px, and even a 1440px
desktop shows only the first 1,280px of it. Reaching the law paper meant
dragging the strip past eleven other subjects first — on the site where that
paper is the next exam on the calendar.

So the header carries a pill of its own, in `.topin`, which is the one part
of the chrome no JavaScript rewrites: `nav.tabs` is rebuilt from
`tabBar.innerHTML` on every route, and a static link placed in it would be
wiped before it was ever painted. The pill is an ordinary `<a href="#/jca">`
— the hash router needs nothing else — and it points at the overview rather
than at `#/s/jca`, because the overview is the page that answers *what now*:
the countdown, the mock test, twenty mixed questions, the mind maps and your
wrong answers, each one tap away.

`renderNav` sets `aria-current="page"` on it whenever `barKey` returns `jca`,
which covers `#/jca`, `#/s/jca` and every page under either, and the pill
fills solid — the same thing the underline says about the current tab.

Two pills in one header row risked the third row on a narrow phone that the
install button had already caused once, so they are wrapped in a single
`.headbtns` block that takes one push to the right and wraps as a unit, and
the word "law paper" is hidden below 760px for the same reason "app" is
hidden next to the download arrow. Measured after the change: the header is
194px on a phone at 320, 360 and 375px — exactly what it was before — with no
sideways scroll on any of 24 routes.

**The tablet caught it, and neither the phone nor the desktop did.** Above
the phone breakpoint the header is a single row, and one row at 768px has
720px for a 286px brand, a 260px search basis and the pills. One pill fitted;
two did not, so from 761px to 918px the pair wrapped and the header went from
103px to 156px — 53px of sticky chrome on every page, invisible if you only
test a phone and a 1440px window. The fix is the same trade twice over: in
that band the words go, as they do on a phone, and the search box asks for
200px rather than 260px before it will break the row. Flex-basis is only what
an item asks for, and the search box is the only one that grows, so above
about 808px it fills the row to the same width either way — the smaller
number moves where the row breaks and nothing else. The header is 103px at
761, 768, 900, 999, 1000, 1180 and 1440px, one row at every one of them.

The installed app gets the same shortcut from outside: `manifest.webmanifest`
now declares one, so a long press on the home-screen icon offers **JCA**
straight into `./index.html#/jca`.

---

## The JCA section

The law paper of the Supreme Court Junior Court Assistant 2026 objective
test: the three sections with a fixed text behind them, 35 of its 100
questions.

| Part | Questions on the paper | Here |
|---|---|---|
| Judiciary provisions in the Constitution | 15 | 7 topics over the 70 articles that matter, **234** questions |
| Supreme Court Rules, 2013 | 10 | 10 topics, all **57** Orders mapped, **186** questions |
| SC Officers and Servants Rules, 1961 | 10 | 8 topics, Rules 1 to 49 checked line by line against the full text, **231** questions |

651 questions in all, the answer evenly spread over A to D in each part. No
rule-book question tests a statement that rests on one source; those sit in
the flagged tables only. The questions added in October 2026 were also
checked so that none names, in its own wording, the answer to another, since
any two can be drawn into the same mock test.

The rule-book notes now cover every Order of the 2013 Rules with what it
says, not just its heading (Orders VII to XIV have a topic of their own), and
every rule of the 1961 Rules from 1 to 49 with its provisos and
Explanations. In October 2026 the 1961 notes were checked line by line
against the Court's full consolidated text (amended up to 6 November 2024).
That fixed five statements the excerpts had got wrong: recovery from pay is
of a loss caused to the Registry, not the Court (Rule 11(iii)); helping an
outsider into a court room is barred by Rule 30(2), for subscriptions, not by
Rule 26; private trade needs the Registrar's previous permission, not a
sanction (Rule 33); the intoxicant laws bind a Court servant wherever he
happens to be, not only where he serves (Rule 24A); and deemed suspension in
custody is by an order of the Chief Justice (Rule 15(2)). It filled in what
they had left short, among them the religious functions among the gift
occasions (Rule 31), the five groups of the 2007 Rule 4A, and the exact
headings of all 24 conduct rules. It added the six Explanations to Rule 11, the whole Rule 13 procedure,
suspension and servants on loan (Rules 15 to 17, now a topic of their own),
and every conduct proviso, Rules 34 to 46 also on a page of their own. One
thing is still not here because no copy of it could be read: the rupee
figures of the Third Schedule to the 2013 Rules (court fees). The 1961 text
does not reprint its own Schedule, so the posts and pay rest on the Court's
recruitment notices.

English, aptitude, general knowledge and computers are left out on purpose.

**A subject organised by one paper.** Every other subject is organised by
what a thing is; this one by what the JCA paper asks. Its Constitution part
is not a second copy of the Constitution: every article in it links to the
article page that already exists, with its official text, plain-English note
and cases, and that article page carries a JCA card back (the questions that
test it, and a warning where the official edition still prints the
struck-down NJAC wording). The two rule books exist nowhere else on the site.
Its data is `data-jca-judiciary.js`, `data-jca-scr.js` and `data-jca-osr.js`,
with the mind maps in `data-jca-maps.js` and the memory tricks in
`data-jca-tricks.js`.

**Four ways to work.** Every topic page carries JCA notes, fact tables and
confused pairs. The notes are in short sections, one for each rule, Order or
article: an entry `"## Kicker | Title"` in a topic's `notes` starts a
section, the kicker being the rule it covers ("Rule 13(5) to (8)"), and a
table whose `after` names that kicker sits straight under it. Section edges
take the mind maps' four colours in turn. A marked phrase is bold with a fine
gold underline rather than a yellow band, because a rule-book note marks
four or five phrases a line. Below 1000px (a phone, or a tablet held
upright), where the side column's contents list goes to the bottom, a row of
chips at the top jumps to each section. A
part's topics are numbered and grouped under the rule book's own divisions
(`part` on each topic: the Parts of the 1961 Rules, the groups of Orders),
with the rules each covers (`span`) above its title. Practice is one question at a
time with the reason for the answer; the rule a question tests is shown only
after it is answered, because shown first it would answer the "which Order"
questions by itself. The mock test is the law block at the paper's pace: 35
questions in the 15/10/10 split, 32 minutes, minus 0.25 for a wrong answer,
with a palette, mark-for-review, and a clock that survives a reload. Both
prefer the questions you have tried least.

**Mind maps** (`#/jca/maps`). One map for each of the 25 topics and an
overview of each part: the notes reduced to keywords, 624 lines on 28 maps.
Nothing on them is new; every line is taken from the checked notes, and a
point the notes flag as resting on one source is left off, so nothing on a
map needs checking before it is learnt. A branch may carry a hook, a line
made to be said aloud ("Judge 5, Advocate 10, or a Jurist").

On a wide screen the branches stand either side of the centre and SVG curves
join them to it; the curves are measured off the laid-out page, so they are
redrawn on a resize, once the fonts arrive, and when covering changes the
layout. Below 900px the same markup becomes a tree down the left edge (the
columns turn into `display: contents`), so a map never scrolls sideways.
**Cover the details** turns a map into a recall drill: the branch names and
the keys (an article, an Order, a rule) stay as prompts, every line becomes
a blank bar the length of its words, and a tap, Enter or Space uncovers it.
The words are made invisible rather than removed, so uncovering moves
nothing. The maps take the whole width: they have no side column.

**Tricks to remember** (`#/jca/tricks`). A memory hook for every part of
the two rule books, the 1961 Rules first: 43 tricks for them and 25 for the
2013 Rules, written after reading what the bank's 417 rule-book questions
actually ask (a rule's number, who decides, a time limit, a list in order,
the odd one out). Each card has the hook in English (“Can We Recover?” for
the three minor penalties, “ReCoRD” for the four major ones; Five for
Filing, Six for Staff; the T20 rule for Rule 20's one month), the same
trick in one line of Hinglish, a second way in, and the facts it unlocks as
rows. A hook may hang a fact on an outside image (1857 for
Order LVII, the seven times table for Order XXI and Form No. 28); the rows
never add anything: every number, rule, Order and article in them is
checked against the verified notes of the book, and a single-source table
is never used. **Cover the facts** covers the rows and leaves the hooks as
prompts, as the maps do.

Each trick carries the references it answers (`refs`, with `kw` where two
tricks share a rule), so it knows its questions: every card opens a
practice set of exactly those (`#/jca/practice/trick/<id>`), and in practice,
the results and the review list an answered question shows its best trick
under the reason, never before the answer. Between them they answer all 231
questions on the 1961 Rules and 185 of the 186 on the 2013 Rules. The
headings of the Order-by-Order tricks are read from the 2013 Rules' own list
of Orders (`orders: [first, last]`), so no heading is written twice.

**How firm the rule-book material is.** The 1961 Rules were checked line by
line against the Court's full consolidated text (amended up to 6 November
2024): every heading is its own and every amendment date is from its
footnotes. The Court's website cannot be reached from where this was
written, so the 2013 Rules were read in search excerpts of the official
copies on the Court's own document server: the 2014 Gazette text, the
Handbook on Practice and Procedure, and the Court's notices. Every Order
heading and every rule a question tests rests on that official text or on two
independent sources; a statement with one source is flagged `chk: 1` and
printed with a "check the bare text" mark. The 1966 Rules number many
things differently, and the section uses the 2013 numbering throughout.

**What it remembers**, in `localStorage` only, every access wrapped:
`am.jca.wrong.v1` (questions answered wrong, until answered right),
`am.jca.seen.v1` (right and wrong counts per question), `am.jca.mocks.v1`
and `am.jca.last.v1` (mock history and the last result), `am.jca.live.v1`
(a test in progress). Questions are keyed by a hash of their wording, so
adding a question never moves anyone's marks.

**It was a separate app at `jca/` for its first day.** That folder now holds
only a page that forwards the old addresses (`jca/#/c/sc-bench` to
`#/jca/c/sc-bench`) and a service worker that deletes the old app's cache and
unregisters itself. Marks kept under the old `rb.*` keys are carried over on
the first visit.

---

## What is in it

| | |
|---|---|
| Articles | **506** — 471 in force, 35 repealed |
| Parts | 26 (25 in force; Part VII was repealed in 1956) |
| Plain-English notes | **493**, covering every article in force |
| ...of which carry a "why it matters" note | **284** — every article the exam layer calls must-know or should-know |
| Amendments | All **106**, with the articles each one touched |
| Schedules | All **12**, with the three legislative Lists in full |
| Landmark cases | **91** |
| High-yield entries | **298** articles, 91 cases, 73 amendments, tiered |
| Confused pairs | **16** side-by-side comparisons |
| Quick facts | **52** across 6 sets |

**Mind maps** (`#/maps`). Thirteen — the frame, the rights, the principles and
duties, the Union executive, Parliament, the courts, the States and the Lists,
the emergencies, amendment, the Schedules, citizenship with language and the
special provisions, the cases and the Constituent Assembly — and one of the
whole subject, 364 lines in all. An article number
on a map opens that article. Every Part page, every article page and every
section page carries a *Revise it* link to the map that covers it. See *The
mind maps*.

## The article map

The article pages run in numerical order, which is the right shape for reading
one article and the wrong shape for revision — an exam asks which article
covers the State Finance Commission, not what article 243I says. The map is
the reverse index: subject first, number second, grouped the way a syllabus
groups them, and **every number in it is a link to the article itself**.

Two views: the map (the framework ranges, the twelve Schedules, and every
subject group from citizenship to amendment), and the courts (the Supreme
Court from 124 to 147 and the High Courts from 214 to 231 in full, the five
writs, the judicial-review articles and the two tribunal articles).

One small completeness fix worth noting: lists of the article 371 series
usually run A, B, C, D and then jump to F. 371E is not missing from the
Constitution, only from the lists, so it is here.

## Centre-State relations and the Seventh Schedule

At `#/high-yield/centre-state`, a tab of the Constitution's exam layer: 62
entries across 8 tables, with 14 highlighted notes at the top.

**Why it is not just Part XI.** Part XI is on the site already, article by
article, which is the right shape for reading article 254 once and the wrong
shape for the question — which is never "what does 254 say" but "who prevails
when a state law and a central law on a Concurrent subject conflict". So this
is the same ground indexed the way it is asked: the three divisions of power,
the doctrines the courts built on top of them (territorial nexus, pith and
substance, colourable legislation, repugnancy, occupied field), the Seventh
Schedule entries that actually appear, and the commissions that have been
asked to move the line — Rajamannar, Sarkaria, Punchhi — plus *S. R. Bommai*.

**The Seventh Schedule twice, on purpose.** The Schedules page prints all 219
entries of the three Lists, which is what you want when checking one. This
page prints the dozen subjects that get asked, plus the one fact asked more
than any other: the 42nd Amendment moved education, forests, protection of
wild animals and birds, weights and measures, and the administration of
justice from the State List to the Concurrent List.

Every article number on the page is a link to its own article page, through
the same linker the article map uses.

## The Constituent Assembly

| | |
|---|---|
| The story | How it was constituted, the chairs, the three readings, and everything it did besides drafting |
| The dates | 9 December 1946 to 26 January 1950, in order, plus the fifteen articles that came into force on 26 November 1949 |
| Committees | The 8 major ones, 13 more, 4 sub-committees, and the Drafting Committee member by member |
| The people | The names an exam asks for, the fifteen women, and the four people who physically made the document |
| The debates | The Objectives Resolution, the language fight, "secular" and "socialist", and the criticisms |
| Confused pairs | **10** |

**Where two standard figures compete, both are given.** How many members
attended the first sitting is the clearest case: 211 in some textbooks, 207 in
other accounts. The page prints both and says which part is not in dispute,
rather than picking one and sounding certain.

## The treaties

| | |
|---|---|
| To memorise first | **16**, with year, parties and the war each ended |
| Grouped by war | Anglo-Maratha, Anglo-Mysore, Anglo-Sikh, Anglo-Nepalese, Anglo-Afghan |
| Since 1947 | **6** — Panchsheel to the Lahore Declaration |
| The drill | Twenty in date order, then the ten that come up most |
| Confused pairs | **10** |

**Two dates move, and both are given.** Sugauli was signed in December 1815
and ratified in March 1816; Pondicherry is dated 1754 by some sources and 1755
by others. One entry is flagged as the weaker association outright: the name
"Srirangapatam" belongs firmly to 1792 and the Third Anglo-Mysore War, not to
1799.

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

**Mind maps** (`#/history/maps`). Eight — the timeline, the Acts, the
movements, the people, the Congress sessions, the Governors-General and
Viceroys, the treaties and the quick-fact tables — and one of the whole
subject, 307 lines in all. Every section page carries a *Revise it* link to
its own map. See *The mind maps*.

## Indian Economy

| | |
|---|---|
| Five Year Plans | **12**, 1951 to 2017, each with model, target, achievement |
| Plan gaps | **3** — the 1966–69 holiday, the 1978–80 rolling plan, 1990–92 |
| The 1991 reforms | The crisis, then liberalisation, privatisation and globalisation in full |
| Standing topics | **8**, 218 facts in 30 tables |
| Confused pairs | **10** |
| Quick facts | **72** across 5 tables |

**Three kinds of statement, and the difference is stated.** Dates and
structures are firm. Achieved growth rates come from the Planning Commission's
own end-of-plan reviews and move by a few tenths between sources depending on
the GDP base year — the first decimal is safe, the last is not. Current figures
(reserves, tax slabs) each carry the date they are true as of, so a stale
number reads as stale rather than as wrong.

**Mind maps** (`#/economy/maps`). Ten — the plans, the planning bodies, the
RBI and the rates, the Budget and GST, 1991, poverty and the schemes,
agriculture and the revolutions, national income and the data, the world's
economic bodies, and the dates — and one of the whole subject, 277 lines in
all. Every one of the eight standing topics now has a map. See *The mind maps*.

## Static General Knowledge

| | |
|---|---|
| Packs | **23** |
| Tables | **126** |
| Facts | **1,425** |
| Confused pairs | **10** |

The **Important days** pack alone carries 151 rows: every date month by month
with the reason behind it where there is one, a chain of month anchors, a
thirty-five-date shortlist, and the pairs built to be confused — World Hindi
Day on 10 January against Hindi Diwas on 14 September, World Consumer Rights
Day on 15 March against National Consumer Day on 24 December.

The **Festivals and fairs** pack is the newest: the harvest festivals that all fall
in the same fortnight of January under a dozen names, the regional new years split
between the March group and the mid-April one, the tribal and monastery festivals
that belong to one state and nowhere else, and the fairs asked by name. It sits
next to the dance pack because the two are asked together.

**Static means static.** Everything here was chosen because the answer is the
same this year as last. Current affairs are deliberately excluded — they go
stale, and mixing them in is how a study file quietly stops being true.

**Where the popular answer is wrong, the page says so.** India has no national
game and no national language. Malaria is protozoan, not bacterial. Only three
of the national emblem's four lions are visible. The Amazon may well be longer
than the Nile. Those corrections are worth more than the easy rows around them.

## Biology

| | |
|---|---|
| Topics | **3** — diseases, nutrients, glands and hormones |
| Tables | **35** |
| Facts | **317** |
| Confused pairs | **11** |
| Quick facts | **47** |

**Three topics, not a course.** These three account for most of the biology a
general awareness paper asks, and each is a table-learning job rather than a
reasoning one — so the value is in having the tables complete and right.

**It deliberately overlaps the Static GK pack.** Static GK keeps a forty-row
summary of vitamins, glands and pathogens; that is the revision version. This
is the full one: every pathogen with its scientific name and the organ it
attacks, every vitamin with its sources, every gland with all of its hormones
and every disorder that follows from too much or too little.

**Where the popular answer is wrong, the page says so.** Ringworm is a fungus,
not a worm. Malaria is protozoan. Bile contains no enzyme. Vitamin D is really
a hormone, because the body makes its own. Night blindness is curable and
colour blindness is not.

## Advanced Maths

| | |
|---|---|
| Chapters | **11** — nine advance, two arithmetic |
| Formulas | **344**, each with a prompt, the formula and a note |
| Practice questions | **164**, four options, worked solution |
| Diagrams | **23** inline SVG figures |

**The first subject that is not a thing to read.** The other five answer *what
is the rule*; this one answers *do I actually know the rule*, which is a
different question and needs a different page. So every chapter has three
views:

| View | Address | What it does |
|---|---|---|
| The sheet | `#/maths/chapter/<id>` | Every formula open. The reference view |
| The recall drill | `#/maths/recall/<id>` | One prompt at a time, formula hidden until you ask. You mark whether you had it |
| The practice | `#/maths/practice/<id>` | Four options, the answer the moment you choose, and a named error for each wrong one |

**Why every formula carries a prompt.** A formula sheet you read is a formula
sheet you believe you know. Each row has three fields: `p` is the prompt you
are asked cold, `f` is the formula, `d` is what it is for and where the trap
is. The drill shows only `p`. That is the difference between revising and
checking.

**The boundary is the SSC paper, not a syllabus.** No calculus, no matrices,
no determinants, no vectors, no complex numbers, no conic section past the
plain circle — because CGL, CHSL, CPO and MTS do not ask them. What is in:
algebra, triangles, circles, quadrilaterals and polygons, mensuration 2D,
mensuration 3D, trigonometry, height and distance, coordinate geometry. Then,
in a band of their own because they are arithmetic rather than advance maths:
profit, loss and discount, and mixture and alligation.

**Every circle theorem is drawn.** A theorem you can recite and cannot
recognise in a figure is not usable, and the figure is how it is asked. The
thirteen circle diagrams and ten others are inline SVG whose every stroke
comes from a palette variable, so they recolour with the site rather than
being twenty-three pictures to redraw.

**Rows are tagged where it matters.** `t:"trick"` marks a shortcut that turns
a three-step question into one line — `a + b + c = 0` so `a³ + b³ + c³ = 3abc`,
complementary angles so `h = √(ab)`. `t:"trap"` marks what candidates
reliably get backwards: the sum of the squares of a parallelogram's diagonals,
the sign in a successive-discount formula, the difference of the radii in a
frustum's slant height against the sum in its curved surface, the false weight
in the denominator of a dishonest-dealer gain.

**The distractors are not filler.** Every wrong option is a real error — the
sign flipped, the square forgotten, the sector taken for the segment, the
slant height swapped for the vertical one — and the solution says which one
you made. Answer positions are evenly spread across A, B, C and D (41 each),
so the position carries no information.

**What is remembered, and where.** The marks you give yourself in a drill
(`am.maths.recall.v1`) and the questions you get wrong (`am.maths.wrong.v1`)
go to `localStorage` on the device and nowhere else. Every read and write is
wrapped, so the pages work identically with site data blocked — the review
list simply says it is empty. The review page at `#/maths/review` is built
from those two stores and nothing else.

**Two things deliberately not done.** There is no timer, because a formula you
can only produce against a clock is not yet learnt. And nothing is scored
across chapters into a single number, because a percentage hides which chapter
is weak and which chapter is weak is the only thing these pages are for.

## The SSC notes

A box of one-line answers at the top of every new topic, every Five Year Plan,
the 1991 reforms, every Mughal emperor and every daily set. Inside each line
the phrase an answer sheet wants is **highlighted**: a low band of yellow
behind the words, at a quarter strength so it marks without glaring on the
dark ground.

It is the one place the site uses a highlighter, and it cannot be applied by
rule, because a rule cannot know which phrase in a sentence is the answer. So
the data says so, with a double-equals marker:

```js
"First Jain council: ==Pataliputra==, c. ==300 BCE==, presided over by ==Sthulabhadra==."
```

`hiMark()` turns each pair into `<mark class="hi">`, and `unmark()` strips
the markers from everything that goes into the search index, so a reader never
sees one. `factsBlock` and `cmpBlock` honour the marker too, so a table row can
highlight the part of it that is the answer. `notesBlock(notes, title)` renders
a box; a page that has no `notes` simply shows none.

## Ancient and Medieval History

`data-early.js` — six topics, the Mughal emperors, and the confused pairs.

| | |
|---|---|
| Topics | **6** — Jainism and the councils; Mughal battles; administration and revenue; Akbar's religious policy; architecture and painting; books, writers and travellers |
| Emperors | **7** in full (Babur to Aurangzeb, with Sher Shah), and the **9** later Mughals a line each |
| Tables | **28**, 196 facts |
| SSC notes | **82** |
| Confused pairs | **11** — two councils at Pataliputra, three Panipats, four tombs and four builders |

**Where the date moves, both are given.** The second Jain council is 512 CE in
the books SSC follows and 453 or 454 CE in others, because tradition dates it
from Mahavira's death and that date is itself disputed. Akbar's "nine jewels"
is a later tradition, and the page says so. "Gadgil Yojana" for the Third Plan
is flagged as a coaching-book label: the Gadgil formula came in 1969.

## The daily study sets

`data-daily.js` — one entry per study day, newest first. A set holds two kinds
of part:

- a **full** part carries its own `notes` and `blocks`. Anything that has a
  date on it lives here and nowhere else;
- a **recap** part carries `from: "gk.cups"`, `"econ.reform"`,
  `"early.jainism"` and so on: the address of notes that already live on a
  subject page. The set shows those notes and links to the page. Nothing is
  copied, so the two cannot drift apart.

Each set is its own section in the strip at the top of the subject, so
**5 November** is one tap from anywhere in it, and `#/daily/5-november/buddha`
opens the set at that part. To add tomorrow's, put one more entry at the top
of `sets`; it reaches the strip, the hub, the index and the search on its own.

Every row that can go stale says what date it is true as of, so that an old
figure reads as dated rather than as wrong.

## The question sets

A set may also carry a `quiz`: questions written from that set's own notes.
**632 of them** — 169 on the 3 November set, 134 on the 4 November, 158 on the
5 November and 171 on the 6 November — at `#/daily/<set>/quiz/<10|20|all>`,
with every set mixed together at `#/daily/quiz/<10|20|all>`.

Four options, one right, the answer the moment you pick, and a line under it
linking to the part of the set the question came from, so a wrong answer leads
straight to the notes that explain it. A to D or 1 to 4 answer from the
keyboard. The order is shuffled on every run, and the questions are mixed
across every part of the set rather than grouped by topic.

**This is not the Practice section, and the difference is deliberate.**
Practice draws from the mind maps, where a leaf was written as a prompt and an
answer; inventing three wrong options for those would be inventing content, so
Practice has none and you mark yourself. These were written as questions from
the start, and every distractor is a real alternative — the other soil, the
other Sultan, the figure from the previous census, the index published by
somebody else. Several name the mistake they are there to catch: Puducherry's
sex ratio is offered against Kerala's because one is a union territory, and
8–21–60 is offered against 17–169–231 because those are the MDGs.

**The answers are spread across the four positions on purpose.** Written
straight through, the right answer lands on B far more often than anywhere
else — at one point B in 88 of 142, so a reader who always picked B would have
scored 62 per cent knowing nothing. Each question's options are rotated by a
hash of its own question text until the spread is even (162/153/160/157 across
all 632, so the commonest letter is worth 26 per cent), and the rotation is
stable: running the rebalance again changes nothing.

Because the options rotate, **no solution may refer to an option by its
position.** `tools/verify/questions.js` fails the build if one does.

The engine is the one the Advanced Maths chapters already use — same markup,
same keys, same result screen — with one addition, the link back to the notes.

**The feedback line does not say the answer twice.** It opens "Not that one —
the answer is C, Rajagriha." and then prints the solution, and a solution
usually opens by naming the answer, which read as *"the answer is C, Rajagriha.
Rajagriha, in the Saptaparni cave..."*. That was true of 179 of the 266. The
fix is one helper, `quizLead`, shared by the daily sets, Advanced Maths and the
JCA paper: when the answer already appears in the solution's opening clause,
the lead gives the letter alone.

That helper had a second bug, found by playing all 632 questions deliberately
wrong and reading every line. The opening clause was the solution's first
eight words, so an answer *longer* than eight words could never be found
inside it: "The Mines and Minerals (Development and Regulation) Act, 1957" is
ten, and that question read the title out twice. The window is now eight words
or the answer's own length plus two, whichever is longer.

## Checked, not just written

Everything added for the site's first daily set was fact-checked after it was
written: twelve independent checkers took one slice each (Jainism, the Mughal
pages, the Booker and cup holders, the five GK packs, the Economy additions
and the code), checked every row against sources, and every error they claimed
went to two more checkers told to disprove it. A row was changed only when
both agreed. That pass corrected 26 facts, including Humayun's exile (about a
year in Persia, not most of fifteen), the date of the two-number mansab (about
1595, not the 1570s), Roe and the Surat factory (the factory dated from 1613;
Roe won wider rights), the "largest mosque" (the Taj-ul-Masajid at Bhopal is
bigger than the Jama Masjid), the JCB Prize (discontinued in 2025), and four
older Five Year Plan notes that contradicted the site's own figures. It also
added 38 high-yield facts the pages were missing, from Saraighat and Lachit
Borphukan to SITE, EDUSAT and the classical-language status of Prakrit and Pali.

## The new criminal laws

| | |
|---|---|
| Acts | **3** |
| Topics | **5** |
| Provisions listed | **125** |
| Confused pairs | **7** |

**Why a subject and not a Static GK pack.** Because the questions are about
numbers. Since 2024 a general awareness paper has asked which Sanhita
replaced which Code, which section now carries murder, and what section 152
created in place of sedition. A pack of three names answers none of that —
and an answer that still says "IPC 302" is simply wrong for any offence on or
after 1 July 2024.

**What replaced what.** Bharatiya Nyaya Sanhita → Indian Penal Code (the
offences). Bharatiya Nagarik Suraksha Sanhita → Code of Criminal Procedure
(the procedure). Bharatiya Sakshya Adhiniyam → Indian Evidence Act (the
evidence). The commonest error is pairing Nagarik Suraksha with the penal
code because the name sounds as though it should be about crime.

**Three levels of firmness, and the rows say which.** The names, what each
replaced, the dates and the rule that the date of the *offence* decides which
law applies do not move. The section counts — 358, 531 and 170 against 511,
484 and 167 — are consistent across the official handbooks. Chapter counts
vary between secondary sources more than they should, so a row that gives one
says it is the commonly cited figure. And where commentaries genuinely
disagree — the undertrial fraction in BNSS 479 and the investigation
deadlines in BNSS 193 — the row gives both readings rather than picking one
quietly.

**The fifth topic is the IPC → BNS mapping**, limited to the sections famous
enough to be asked: 302 → 103, 420 → 318, 498A → 85, 376 → 64, 124A →
repealed and not renumbered. Nothing is gained by trying to learn all 358.

**It is not legal advice and not a bare act.** It is the list of provisions an
exam asks you to name. The authoritative text of all three is on India Code.

## Geography

| | |
|---|---|
| Topics | **7** |
| Facts | **260**, of which 95 are the Himalayas |
| Confused pairs | **10** |
| Diagrams | **2** |

**Why it exists when Static GK already has rivers, states and
superlatives.** Those packs are lists of facts to recognise: which dam is on
which river, which state has which capital. Geography is the arrangement that
holds the facts together, and that is what an exam tests — which range lies
between two others, which pass joins which two places, why Tamil Nadu gets
its rain in a different season from everywhere else. A list cannot answer any
of those. The packs stay as the revision version; this is the full one.

**The Himalayas take a third of the subject, on purpose.** Between the three
parallel ranges, the four longitudinal divisions, the peaks, the passes, the
glaciers, the valleys and lakes and the rivers that rise there, they carry
more SSC geography marks than any other single topic — and the passes alone
come up almost every sitting, so every one is listed with the two places it
joins rather than with its height.

**Three different mountains answer three different wordings.** Highest peak
*in* India is K2, in the part of Kashmir administered by Pakistan. Highest in
India's undisputed territory is Kanchenjunga, which sits on the Sikkim–Nepal
border. Highest lying *wholly* within India is Nanda Devi. That one word is
the whole question, so all three are printed together in the confused pairs.

**The other six topics:** the physical divisions (with bhabar, terai, bhangar
and khadar in the right order), the drainage system, climate and the monsoon,
soils and natural vegetation, agriculture with minerals and industry, and the
Earth and world geography.

**Figures that move between sources are flagged.** Everest is 8,848.86 m on
the 2020 joint Nepal–China survey and older keys still carry 8,848 m.
Leading-producer rankings shift year to year, so a row says where the top two
are genuinely close instead of asserting one.

**Mind maps** (`#/geography/maps`). One for each of the seven topics and one
of the whole subject, 245 lines in all, every one of them from the tables
above. See *The mind maps*.

**Two diagrams**, both inline SVG on the palette variables: the ranges in
cross-section south to north, and the four longitudinal divisions with the
boundary river at each cut. They reuse the figure renderer and the stylesheet
the Maths subject brought in, which is why the whole subject costs about a
hundred lines of `app.js`.

## The mind maps

Nine subjects carry mind maps now: the **Constitution** at `#/maps`, **Modern
History** at `#/history/maps`, the **Indian Economy** at `#/economy/maps`,
**Ancient and Medieval History** at `#/early/maps`, **Geography** at
`#/geography/maps`, **Static GK** at `#/gk/maps`, **Biology** at
`#/biology/maps`, **the new criminal laws** at `#/laws/maps`, and the JCA law
paper (above). Each has one map per topic
and one map of the whole subject whose branches open the others.

**Static GK is the one that does not match its own pages.** Twenty-three packs
would make twenty-three maps, and a map of six facts is not a map; they are
grouped into twelve instead — the cups with the sports terms and Paris, the
rivers with the parks and the monuments — and `GK_MAP_ORDER` names the packs
each map covers, so a map links back to the full lists behind it and every
pack page carries a *Revise it* link to the map that covers it. The thirteenth,
**Census 2011**, has no pack behind it at all: it was written for the 4
November set, so its entry names that page in `notes` instead and the block
beneath the map reads *The notes behind it*.

**The counts in those sentences are counted, not typed.** "All thirteen on one
map" is `numWord(gkMapOrder().length)`, so adding a map changes the sentence
too. They were written out as words once, and three of them were already stale
by the time anyone noticed.

| | Maps | Lines in its data file |
|---|---|---|
| Constitution | 13 maps + 1 overview | 628 |
| Modern History | 10 maps + 1 overview | 657 |
| Ancient and Medieval | 11 maps + 1 overview | 745 |
| Geography | 8 maps + 1 overview | 498 |
| Indian Economy | 11 maps + 1 overview | 554 |
| Static GK | 13 maps + 1 overview | 762 |
| Biology | 3 maps + 1 overview | 311 |
| The new criminal laws | 5 maps + 1 overview | 238 |
| JCA | 28 | 656 |

The line counts in that last column were stale in every row when the 6
November set was written — they described the files as they had been several
passes earlier, and nothing recomputes them, which is the same failure the
paragraph above describes for the sentences. They are `wc -l` of each
`data-*-maps.js` as it stands. Treat them as a rough sense of size, not as a
number to rely on.

**On the Constitution's maps an article number is a link.** That is the `arts`
argument to `mmHtml`, which only the Constitution and the JCA Constitution
maps pass: on the rule books "Rule 6" must not become a link to Article 6, and
in Geography neither must a pass or a peak. It also means a key there is
written as the bare number — "124", not "Article 124" — and that "42nd" or "26
November" stays plain text, because neither is an article.

**Modern History is the one that does not line up with its own pages.** The
other subjects are a list of topics with a page each, so a map and a topic are
the same thing. Modern History keeps its material in eight different sections
— the timeline, the Acts, the movements, the people, the Congress sessions,
the administrators, the treaties and the quick-fact tables — so the order of
its maps and the way back from each one are written out in `HIST_MAP_ORDER`,
and `HIST_MAP_FOR` pairs each section with the map that revises it. One
Viceroy is at `#/history/ruler/curzon` and his map is at `#/history/maps/raj`;
nothing in the addresses would tell you that.

**Nothing on a map is new.** Every line is taken from the tables and the SSC
notes on the topic pages, which is where the facts are checked and where the
fuller statement of each one lives. A map is that material cut to the words
the question turns on, so that a topic can be revised in two minutes instead
of twenty. When a note changes, its line here changes with it.

**A leaf is a prompt and an answer**, written `[key, text]`. The key is the
thing being asked about — a pass, a soil, a battle, a rank — and it stays
visible when the map is covered; the text is the answer and is what gets
covered. That is what makes **Cover the details** a drill rather than a trick:
the map still reads as a list of questions with the answers blanked out.
`==text==` marks the words inside an answer that the question turns on.

**The drawing is shared, the navigating is not.** `mmLeaf`, `mmBranch`,
`mmHtml`, `mmLinks` and `mmWire` know nothing about any subject except the
address a branch should link to, which is an argument; each subject keeps its
own hub, its own order and its own way back to the notes. Adding maps to a
fourth subject is a data file and about sixty lines.

**A map page keeps its side column, but underneath.** The branches stand
either side of the centre and want every pixel of the page; a 300px column
beside them took exactly the room they needed and the words started breaking
mid-word at 1000px. So a page with a map on it gets `sidebelow`, and the cards
lay themselves out below as the row they already become on a narrow screen.

**Hooks.** A branch may end with a hook — a line made to be said aloud, not
read. "Panipat, Khanwa, Chanderi, Ghaghra — 26, 27, 28, 29." "Zat is the man,
sawar is the horse." "Three Panipats, three different losers." They are
mnemonics for what is already on the branch, never a new fact.

## The 7 November set

The gharanas, which the site carried as a single clause — that Kathak has three
of them — and nothing else. That clause is as far as most study files go, and it
is the one place in Art and Culture where the exam asks past it. It does not ask
what a gharana is. It asks which gharana, founded by whom, at which town, and
who sang or played in it. So the set is built in that shape: every gharana with
its founder, its place, the one feature it is identified by, and the names that
belong to it.

Ten parts, 206 questions.

1. **What a gharana actually is** — the word, the three-generation test, the
   ganda bandhan, why the houses formed after 1857 when Mughal patronage
   collapsed and the Delhi musicians scattered to the princely courts, and the
   fact that Carnatic music has no gharanas at all.
2. **The khayal gharanas** — eleven of them: Gwalior, Agra, Kirana,
   Jaipur-Atrauli, Patiala, Rampur-Sahaswan, Bhendibazaar, Mewati, Indore,
   Delhi, Sham Chaurasi, with Bishnupur beside them.
3. **Dhrupad, its four banis, and the vocal forms** — the older layer, the four
   banis and the families that hold them, and then khayal, thumri, tappa,
   tarana, dhamar, ghazal and qawwali.
4. **The six tabla gharanas** — Delhi, Ajrada, Lucknow, Farrukhabad, Benaras,
   Punjab, split into the closed Delhi baaj and the open Purab baaj.
5. **The four Kathak gharanas** — Lucknow, Jaipur, Banaras and Raigarh. Raigarh
   is the one the three-gharana answer leaves out.
6. **The instrumental gharanas** — Tansen's own Seniya line and its two
   branches, Maihar, Imdadkhani or Etawah, the Bangash sarod line,
   Shahjahanpur.
7. **Who belonged to which** — the whole set as one ladder, because that is the
   form the question takes, with the titles (Aftab-e-Mousiqi, Surashri, Nritya
   Samragni) on the end of it.
8. **The Carnatic side** — the trinity, the 72 melakartas, the forms in concert
   order, the instruments, and the point that the word gharana does not cross
   over.
9. **The texts, the thaats and the instruments** — Natya Shastra, Brihaddeshi,
   Sangeet Ratnakara, Chaturdandi Prakasika; Bhatkhande's ten thaats against
   Venkatamakhin's seventy-two melakartas; Tansen and Amir Khusrau; the four
   classes of instrument.
10. **The academies and the awards** — Sangeet Natak Akademi, the Akademi Ratna,
    and the six musicians with a Bharat Ratna in the order they received it.

The comparison boxes are where the confusions are settled: Kirana against
Jaipur-Atrauli, Gwalior against Agra, dhrupad against khayal by counting the
sections and naming the drum, Delhi baaj against Purab baaj, Lucknow Kathak
against Jaipur Kathak, Bhatkhande against Paluskar, thaat against melakarta.

## The 3 November set

`#/daily/3-november`. Ten parts, **118 highlighted notes and 230 table rows**
(seven when it was written, three added in the gap-filling pass below):
the soils of India and agriculture as revision sheets for what Geography and
Economy already hold, and then **the Delhi Sultanate in full** — the five
dynasties, Alauddin Khalji's reforms, Muhammad bin Tughlaq's five experiments
and Firoz Shah's building, the administration and the taxes, the architecture,
the chroniclers and the Sufis.

**The Sultanate was the gap.** Ancient and Medieval History ran from the Jain
councils to the Mughals with the three hundred and twenty years between 1206
and 1526 left out — the one stretch of medieval history that an SSC paper is
certain to ask about. It is written here, and it also has a mind map at
`#/early/maps/sultanate`, whose "full notes" button points back at this set
rather than at a topic page, because the set is where the notes live.

Where standard books disagree, the set says so rather than picking: the capital
moved to Daulatabad in 1327 or 1326, and the token currency was issued in
1329–30 or 1330–32. The failure, and the reason for it, are not in dispute.

## The 5 November set

Three subjects, eleven parts, 117 notes written here and 192 table rows
(ten parts when it was written; one added in the gap-filling pass below).

**Buddhism was the largest hole left on the site.** It existed as four rows in
a table of councils, written to sit beside the Jain ones — and nothing else.
No Buddha, no Four Noble Truths, no Tripitaka, no Sanchi. Five parts fill it:
the life (`#/daily/5-november/buddha`), the teaching, the councils and the
three vehicles, the texts, and the stupas, caves and monasteries. The mind map
at `#/early/maps/buddhism` carries 71 lines of it.

**Jainism is the opposite case, and the set says so.** The councils, Mahavira,
the two sects, the texts, the patrons and the temples are already on the site
at `#/early/topic/jainism`, with their own map. Repeating them would have been
padding. So the full part is the material that was missing — anekantavada,
syadvada, the tattvas, the vows and who added which, sallekhana, kevala jnana
— and a **recap** part pulls in the existing notes by reference rather than
copying them. A comparison table sets Buddhism against Jainism on the eight
points that actually differ, the soul first.

**Minerals had eleven rows** inside the Geography agriculture page. They have
three parts here: the classes and the rocks and the three belts; mineral by
mineral with the leading state and the named mines; and coal, petroleum and
power. Geography's maps were tied one-to-one to its seven topics, so this one
needed `GEO_MAP_AFTER` — the same device Ancient and Medieval already uses —
which lets a map continue a topic instead of being one. `#/geography/maps/minerals`
is the result, 65 lines.

Where the sources move, the set says which question is being asked:
**Jharkhand** holds the largest coal reserves while **Chhattisgarh and Odisha**
have led production in recent years, and the two change places, so "largest
coal producing state" and "largest coal reserves" do not have the same answer.

## The 4 November set

`#/daily/4-november`. Eleven parts, **114 highlighted notes and 193 table
rows** (nine when it was written, two added in the gap-filling pass below),
on three things:

**The Sustainable Development Goals**, which the site did not have at all — it
knew the phrase only as the name of a NITI Aayog index. Two parts: the 2030
Agenda with all seventeen goals, the 169 targets and 231 indicators, the line
back through Rio+20, the MDGs, the Brundtland Report and Stockholm; then India
and the SDGs — NITI Aayog as the nodal body, MoSPI and the National Indicator
Framework, the SDG India Index edition by edition, and the distinction a
question turns on between that index and the SDSN's own.

**Census 2011**, which the site also did not have. Three parts: the headline
figures, the state and union-territory records in the highest-and-lowest form
the question is actually asked in, and the census itself from Mayo in 1872 to
the two-phase count announced for 2026–27.

**The Mughal empire in detail.** Ancient and Medieval History already held the
battles, the administration, Akbar's religious policy, the architecture and
the books. The four parts here are what those five topics do not carry: the
reigns set out one by one with the campaigns and the treaties, the nobility
and the mansab and jagir systems with the provincial machinery and the
economy, the Rajput and Deccan policies with Shivaji and the Marathas, and the
decline — the causes as an answer is expected to list them, and the forty
years in which it happened.

**Four mind maps came out of it**, because a set that is only prose cannot be
drilled and cannot feed Practice: `#/economy/maps/sdg`, `#/gk/maps/census`,
`#/early/maps/mughal-state` and `#/early/maps/mughal-decline`. Each points its
"notes" button back at this set rather than at a topic page, the way the
Sultanate map does.

**Every figure in the set is asserted against the map that repeats it.**
Ninety-five of them — the population, each ratio, each state record, the goal
and target counts, the Maratha and Mughal dates — are checked to appear in
both, because a figure copied into a map by hand is a figure that can be
copied wrong. Where editions move, the set says which edition: the SDG India
Index score is given as 57 in 2018 through 71 in 2023–24 rather than as one
number, and India's rank on the SDSN's index is given as a range, because it
changes every year.

## The 6 November set

`#/daily/6-november`. Ten parts, **111 highlighted notes and 239 table rows**,
on the national movement's institutions: the press, the organisations, the
Congress sessions, and the men in charge.

**The newspapers were the gap.** The site knew *Kesari* and *Amrita Bazar
Patrika* as names in a timeline and nothing more. Three parts fill it: the
firsts, where the question turns on whether it asks for the first newspaper in
India (Hicky's *Bengal Gazette*, 1780) or the oldest still published (*Bombay
Samachar*, 1822); the nationalist papers from *Amrita Bazar Patrika* to
*National Herald*, each with its founder, its language and its year; and the
Acts that gagged them, where two pairs carry the whole topic — Adam licensed
the press and Metcalfe freed it, Lytton gagged it and Ripon freed it again.

**The organisations likewise.** The bodies before the Congress, from the
Landholders' Society of 1838 to the Indian Association of 1876; the reform
societies; and the revolutionary and political bodies from Anushilan Samiti to
the Forward Bloc. One branch of the map does nothing but list the years that
carry several at once — 1875, 1906, 1916 and 1925 — because a question that
gives a year and four bodies is almost always one of those four.

**The Congress sessions and the Viceroys were already strong,** so these parts
are ladders rather than repeats. `CONGRESS.sessions` has held all 63 sessions
since the site's second week, checked against Wikipedia by `tools/verify/
check.py`; `#/history/raj` has held every Governor-General and Viceroy for as
long. What the set adds is the eleven sessions that are actually asked and what
happened at each, the presidents that are asked, and — in the Viceroys part —
the offices tied to *this set's* material, so the Vernacular Press Act sits
with Lytton and the founding of the Congress with Dufferin.

**Two new maps**, `press` and `bodies`, bring Modern History to ten. Both are
registered in `HIST_MAP_ORDER` with their notes pointing at a daily-set page
rather than a subject page, which is what the `notes`/`label` fields on an
order entry are for.

## Filling the gaps across all four sets

A later pass went back over all four sets looking for what a question could
reasonably ask that nothing on the site answered. Seven parts came out of it,
and they are listed here separately because they are not what those days were
originally written for.

**What was missing site-wide, not just from a set.** Four of the seven filled
holes that no page anywhere covered. The **Bhakti movement** — Kabir, Nanak,
the four acharyas, the Alvars and Nayanars, the Nirguna and Saguna division —
appeared nowhere; a grep for Kabir and Namdev returned nothing at all.
**Vijayanagara and the Bahmani kingdom** had two passing mentions and no
Krishnadeva Raya, no Talikota, no five Deccan sultanates. **Sufism** had three
mentions of the Chishtis and one of Nizamuddin. **The Marathas after Shivaji**
had no Peshwas, no Panipat 1761, and none of the three Anglo-Maratha wars.
Those four are now parts of the 3 and 4 November sets, with the 3 November
Sultanate pages beside them.

**Hydro and the dams** were the same kind of hole in Geography: the set had
coal, oil and the coalfields but nothing on a multipurpose project, so Bhakra,
Hirakud, Tehri, the Damodar Valley Corporation and the nuclear stations are a
new part of 5 November.

**The Governors-General before 1858** were the clearest miss against what the
6 November set set out to do. It covered the Viceroys tied to the press and
stopped; Warren Hastings to Canning — the Regulating Act, the Permanent
Settlement, the Subsidiary Alliance, the Doctrine of Lapse, the first railway
— were not in it. That part also carries the comparison the whole topic turns
on: the first Governor-General of *Bengal* is Warren Hastings in 1773, the
first Governor-General of *India* is Bentinck in 1833.

**Mughal art and letters** is the one part here that overlaps the subject
pages on purpose. `EARLY` already has `mughal-architecture`, `mughal-books`
and `mughal-religion`, so the buildings and the chronicles were covered — but
the 4 November set, which teaches the Mughals reign by reign, had no culture
part at all, and the Navratnas appeared nowhere on the site. It is written as
the comparisons rather than as a survey: Hawkins against Roe, Humayun's Tomb
against Itmad-ud-Daulah's tomb, painting's rise under Jahangir against its
collapse under Aurangzeb.

**Blocks, not parts, where a part already existed.** Four existing parts were
short of something rather than missing a subject, so they gained tables and
kept everything they had: the Khalji, Tughlaq and Sayyid rulers one by one,
the two battles of Tarain and the Mongol invasions, and the coins, into the
Sultanate part; erosion, conservation and the soil profile into the soil part;
the three cropping seasons, the Green Revolution in detail, irrigation and the
research institutes into the agriculture part; and the eight Viceroys the 6
November set had not named, into the Viceroys part.

**274 new questions**, taking the four sets from 398 to 632. The rebalance ran
again afterwards, because a batch written straight through lands on B — the
spread was 163/220/136/113 before it and 162/153/160/157 after.

## Practice

`#/practice`. Ten or twenty questions at a time, drawn at random from every
mind map on the site — **2,331 lines across eight subjects** — mixed, or from
one subject. Read the prompt, say the answer, press to see it, and mark
yourself; what you miss is listed at the end with a link to the map it came
from, so the next thing to read is already chosen.

**The question bank was already there.** A map leaf is written `[key, text]`:
the key is the prompt and stays visible when the map is covered, the text is
the answer and is what gets blanked. That is a few thousand question-and-answer
pairs nobody had to write twice, and `pracBuild` walks every map in every
subject once to pool them. A leaf with no key never becomes a question,
because there is nothing to ask with.

**There are no options to choose from, on purpose.** These lines were written
as a prompt and an answer, not as multiple choice, and inventing three wrong
answers for each would be inventing content. The marking is the reader's own:
*I knew it* or *I missed it*. Space shows the answer, 1 and 2 mark it, so a
set can be done with the hands on the keys.

**JCA is excluded.** That paper has its own MCQ practice and its own mock test,
with real options, negative marking and a clock, because it is examined
differently. `PRAC_SUBJECTS` lists the seven that are in, so adding an eighth
is one line once that subject has maps.

Drawing is a shuffle of the indices and then a slice, not a random pick each
time: drawing with replacement would repeat a question inside one set of ten,
which reads as a bug however random it is. The run is held in memory and the
box is redrawn in place, so Back leaves the set rather than stepping through
the questions inside it.

## Adding another subject

The site is built as a registry of subjects so an unrelated one can be added
without touching the router or the header. In `app.js`:

```js
var SUBJECTS = [{ id, name, short, blurb, isDefault,
                  tabs:[...], stats(), topics(), route(seg) }]
```

To add one: drop in its data file, push an entry, and it appears in the nav, in
the topic hub, in the cross-subject search, and answers at `#/<id>/...` on its
own. Nothing else needs touching. `topics()` returns
`[{t, w, href, n, k?}]` — the rows the hub lists and filters, where `k` is
optional extra keywords so a filter for "vitamin" reaches a pack called "Human
body, vitamins and diseases".

Three renderers are shared by every written subject, so a new one costs a data
file and a route and no markup: `pageH1`, `cmpBlock` (a confused pair) and
`factsBlock` (a table of facts, accepting either `{g, items}` or `{h, rows}`).

The Constitution is the default subject, so its routes stay at the top level
(`#/a/21`, `#/cases`) and every published link keeps working. Its own landing
page is at `#/constitution`; `#/` is the topic hub.

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
| `app.js` | Hash router, topic hub, cross-subject search, and every view |
| `data-articles.js` | The 506 articles: heading, Part, official text, amendment trail |
| `data-amendments.js` | The 106 amendments and the articles each touched |
| `data-schedules.js` | The 12 Schedules, including all 219 printed entries of the three Lists |
| `data-cases.js` | 91 landmark judgments, keyed to articles |
| `data-highyield.js` | The Constitution's exam layer: tiers, confused pairs, quick facts |
| `data-history.js` | Modern History: eras, timeline, Acts, people, movements |
| `data-history-hy.js` | Modern History's exam layer |
| `data-economy.js` | The plans, the 1991 reforms, the standing topics, the exam layer |
| `data-gk.js` | 22 packs of static general knowledge, 1,364 facts |
| `data-assembly.js` | The Constituent Assembly: story, dates, committees, people, debates |
| `data-biology.js` | Diseases, nutrients, and glands and hormones |
| `data-maths.js` | Advanced Maths: 11 chapters, 344 formulas with prompts, 23 SVG diagrams |
| `data-maths-mcq.js` | The 164 practice questions, four options and a worked solution each |
| `data-treaties.js` | The treaties of modern Indian history, and the agreements since 1947 |
| `data-artmap.js` | The Constitution indexed by subject, and the courts article by article |
| `data-early.js` | Ancient and Medieval History: Jainism and its councils, and the Mughals |
| `data-geography.js` | Geography: 7 topics, 260 facts, the Himalayas in full, 10 confused pairs |
| `data-laws.js` | The BNS, BNSS and BSA: dates, counts, the new offences, and the IPC mapping |
| `data-jca-judiciary.js`, `data-jca-scr.js`, `data-jca-osr.js` | The JCA law paper: notes, tables, confused pairs and 651 questions |
| `data-jca-maps.js` | The 28 JCA mind maps, every line taken from those three files |
| `data-geo-maps.js` | The 8 Geography mind maps, every line taken from `data-geography.js` |
| `data-early-maps.js` | The 11 Ancient and Medieval mind maps, from `data-early.js` and the 3, 4 and 5 November sets |
| `data-hist-maps.js` | The 9 Modern History mind maps, from the five history data files |
| `data-coi-maps.js` | The 14 Constitution mind maps, from the articles, the notes and the exam layer |
| `data-econ-maps.js` | The 11 Indian Economy mind maps, from `data-economy.js` |
| `data-gk-maps.js` | The 13 Static GK mind maps, grouping the 23 packs |
| `data-bio-maps.js` | The 4 Biology mind maps, from `data-biology.js` |
| `data-law-maps.js` | The 6 criminal-law mind maps, from `data-laws.js` |
| `data-daily.js` | The dated daily study sets: current affairs, and recaps of what was added |
| `data-plain-1..5.js` | The plain-English notes, one file per group of Parts |
| `sw.js` | Service worker: precache everything, then serve offline. A data file whose new fields app.js now reads carries a `?v=` query in `index.html` and in `ASSETS`; bump it on such a deploy, or the first visit afterwards pairs new code with old cached data |
| `fonts/*.woff2` | Literata, Inter and IBM Plex Mono, latin subsets, 139 KB in total |
| `tools/make-icons.py` | Regenerates the PWA icons |

## A tablet held sideways

On its side a tablet is 1024 to 1366px wide but only 744 to 1024 tall: width
to spare, height scarce. The layout spends the first to save the second, and
hides nothing for good: each change moves a thing, resizes it, or lets it
step aside until it is called back.

- **The side column stays** from 1000px (above), with the contents list in it.
- **The header steps aside.** On a short touch screen held sideways (landscape,
  900px tall or less) it slides up while you swipe down a page and drops back
  the moment you swipe up, reach the top, or move into it from the keyboard.
  Only a swipe, a wheel or a key moves it: the page's own jumps (a contents
  link, the next question) leave it as it is, so they land where they were
  aimed. Everything that sticks under it reads `--headh`, which `syncHead`
  sets to nothing while it is away.
- **Practice is two columns** from 1000px: the question and its four options
  on the left, and on the right the count, then the reason and the Next
  button the moment you answer, so neither the options nor Next moves below
  the fold.
- **The mock test is the real test's screen**: the question on the left, and
  on the right one panel with the clock, Submit and the palette, five to a
  row so the Constitution's 15 are the first three rows and each rule book's
  10 the next two.
- **Every control a finger presses is at least 44px tall** on a touch screen.
  Links inside a sentence keep their size, as words do; the short links that
  stand alone (the trail at the top of a page, the topic above a question)
  get the height as padding pulled back by an equal negative margin, so their
  line does not move.
- **Back moves to the bottom right** from 1000px, under the right thumb and
  off the reading column, where it sat over a question's fourth option.

## Going back

Every page except the front one carries a **Back** control, fixed to the
bottom of the screen. It is there because the site installs as an app, and an
installed app has no browser chrome — no address bar and no back arrow — so
the browser's own Back is not available to reach for.

It walks a trail of pages actually visited rather than calling
`history.back()`. Two reasons: history can start outside the site, so the
first Back would leave it; and a trail can fall back to something sensible
when there is nothing to go back to. Open `#/a/356` cold from a bookmark and
Back goes **up** — to the article list, not off the site.

Going up is a Back too, so it does not leave the page it came from on the
trail: repeated Backs keep climbing — an act, then the Acts, then Modern
History's topics, then the index — instead of bouncing back down to where
they started. "Up" is read off each subject's own sections (`sectionsOf`), so a
new section is covered the moment it is added to its subject's `tabs`.

## Getting around

The navigation is the Answer Key's, ported:

| | |
|---|---|
| **The bar** | One row in the header, the same on every page: Index · Constitution · History · Ancient & Medieval · Economy · Static GK · Biology · Daily sets · About. The subject you are in is underlined in yellow, so any subject is one tap from anywhere. |
| **A subject's page** — `#/s/<id>` | What the bar opens. Every topic in the subject, numbered, with a line on what each covers, and the subject's sections in a rail beside them (a strip across the top on a phone). |
| **The section strip** | Across the top of every page inside a subject; the section you are in is underlined in purple. Its first item is the subject itself and leads back to its topics. |
| **The index** — `#/` | Every subject as a card, every topic inside it, and a filter. The full page-by-page outline is one link away at `#/index`. |
| **The column beside it** | On every study page, built from the data the site already holds. See *Beside the page*. |

The header used to be replaced by a subject's own tabs as soon as you entered
it, so changing subject meant going back to the front first. Now it never
changes, and never grows: the sections moved into the page rather than onto a
second header row, which on a phone would have cost another 44px of screen for
good.

## Beside the page

Every study page is two columns on a wide screen: the page, and beside it a
stack of small cards. From 1000 to 1180px, a tablet held sideways, the column
narrows to 260px rather than leaving, so its contents list stays in view
while you read. Below 1000px the cards drop under the page and lay
themselves out as a row that wraps, so nothing is lost on a phone — all but
the contents list, which is worth having while the page is still ahead of you
and worth nothing underneath it.

Nothing in the column is a new fact. It is the facts the site already holds,
crossed against each other, and a **year is the join**: four small functions
(`rulersIn`, `eventsIn`, `actsIn`, `sessionsIn`) take a year or a span of
years and ask a different section what it had then. That is where most of the
column comes from.

| On | What is beside it |
|---|---|
| Every page | **On this page** — its own headings, read off the rendered page rather than from a list each view has to keep up to date. **Elsewhere in ‹subject›** — the next five topics in the subject, starting from where this page sits in it. |
| An article | Why it gets asked, with its tier. The confused pairs it belongs to. The other articles in its group in the article map. Its Part, chapter, position, amendments and cases. |
| A Part | How many of its articles are in force, amended, in the exam layer; the Parts either side. |
| An amendment | Why it gets asked, the year, the day it came into force, and the amendments either side of it. |
| A Schedule | All twelve, with this one marked. |
| A case | Why it gets asked, the citation and the bench, and the other judgments on the same article. |
| An event, an Act | Who was in charge that year, what else happened in it, what was passed in it, where the Congress met in it. |
| A person | What they presided over, what they led, and every event on the timeline that names them. |
| A movement | Who was in charge across its years, the events inside them, the sessions held during it. |
| A Viceroy | His office and term, and the Acts, sessions and events of his years. |
| A Congress session | The Viceroy of that year, the other sessions held in the same city, and what else happened that year. |
| A plan, a pack, a topic | Where it sits, and every other one in its section with this one marked. Topics in Ancient and Medieval History, the criminal laws and Geography work the same way. |
| A Mughal emperor | His reign, and the great Mughals in order. The later Mughals are a line each on the emperors page, so they are not linked as pages that do not exist. |
| A maths chapter | The other two pages of the same chapter — the formulas, the recall drill and the questions — its band, and every chapter with its counts. |
| A daily set | Its date and parts, and every other set. |

Two rules keep the joins honest. A **person** is matched in full where a full
name is given; where only a surname is — the leaders of a movement, "Tilak,
Lajpat Rai" — the surname is accepted only if no other person on the site
shares it, so Ananda Mohan Bose's session is never offered on Subhas Chandra
Bose's page. That list of ambiguous surnames is counted off the data, not
written down. And a page is placed in its subject by its **exact** address
first: Modern History's first topic is the timeline at `#/history`, and every
other address in the subject begins with those characters, so prefix matching
is the last resort and then the longest prefix wins.

The column is built after the page is rendered, from the finished markup
(`layoutSide`), rather than inside forty view functions: each of them builds a
`.artpage` and that is all this needs to know. If a card throws, the page
still renders — a page is worth more than its margin.

## The palette

Three text colours on one unchanged near-black ground:

| | |
|---|---|
| **Yellow** | the things you can act on — links, article numbers, figures, subject headings |
| **Purple** | the key column of every table, the courts, the amendments |
| **Red** | section headings, and anything dead or warned about |

Each colour also has an `--x-rgb` companion so a translucent version is
derived from the colour rather than typed out again. Six hard-coded
`rgba(201,162,39,…)` values used to sit in the stylesheet as copies of the
palette that would not have moved when the palette did.

## The type

Three self-hosted typefaces, each with one job, and the difference between
them is what marks emphasis inside a sentence — there is no highlighter pen.

| | |
|---|---|
| **Literata** | the Constitution's own voice: headings, the official text, and key terms quoted inside an explanation |
| **Inter** | the site talking: explanations, tables, cards |
| **IBM Plex Mono** | the machine's labels: section headings, chips, tags, and figures marked inside a sentence |

They are latin subsets, one static weight per file, 139 KB for all seven,
served from `./fonts` and precached with everything else. Nothing is fetched
from a font CDN: the pages have to work with the aeroplane switch on, and a
request to someone else's server would also be a record of what is being
read. Each stack keeps its old device fallback behind the new face, so the
text is readable from the first paint and stays readable if a file ever fails
to load.

Everything is two to three steps larger than it was. Reading text moved
furthest — a paragraph went 17.5px to 20.5px — because that is what a person
looks at for an hour; the letter-spaced mono labels moved one step, because
capitals shout when they get big and they are signposts, not reading.

### Emphasis

`prose()` in `app.js` escapes a string, links its article references, then
marks two things in what is left:

- a **named idea** — one of ~225 curated exam terms — in the serif, in purple;
- a **figure** — a year, a date, an ordinal, a percentage, a span like
  1951-56 — in the monospace, in yellow, where the digits are all one width
  so two years can be compared down a page.

Two rules stop it becoming a highlighted textbook: a term is marked on its
first appearance in a paragraph and never again, and at most three terms are
marked per paragraph whatever else matches. Figures are not capped — in
"reduced from 21 to 18 in 1989" all three are the answer to something.
Across the site that comes to about **5% of words marked**, roughly one in
twenty.

Nothing inside an `<a>` is marked, because a link is already emphasised by
being one. A short number in brackets is left alone, because on this site
that is a clause reference — "clauses (4) and (5)" — while a four-digit
number in brackets is the year of a case and is marked.

The marking is display only. It never changes, adds or removes a word: a
check over all 5,594 strings in the data files confirms that stripping the
tags returns exactly the text that was written, with no unbalanced tags and
no nested links. **The official text of the Constitution is never marked.**

## The Congress sessions

`data-congress.js` — every session of the Indian National Congress from 1885
to 1948, and the years in between when no session was held but somebody was
still president.

Each session carries a `why`: the one reason it is asked. That field is
rendered as its own block under the row, with a rule down the side and a
label of its own, because the reason is the content and the year and the
president are only its address. In a list of sixty the term marking is turned
off and only figures are marked — on a page about Congress presidents the
word "president" is a column heading, not a key term.

Three sessions carry an ordinal and the rest do not. Neither source numbers
the sessions, and counting them by hand makes Faizpur the 51st while the
sources that give a number call it the 50th — the difference is whether the
banned Delhi session of 1932 is counted. So a number is printed only where a
source states one.

## Governors, Governors-General and Viceroys

`data-raj.js` — fifty-three holders of five offices in one line of
succession, from Clive to Rajagopalachari, each with a page giving what he
changed and then his policies one by one.

The offices are the point. Warren Hastings was the first Governor-General of
BENGAL; Bentinck the first of INDIA; Canning was the last Governor-General of
the Company and the first Viceroy; Mountbatten the last Viceroy and the first
Governor-General of free India. Every "who was the first" question is a
question about one of those boundaries, so the section has a page for them.

Acting holders are listed and marked, and their pages say they are not
examined. Dropping them would make this list disagree with every other list;
pretending they matter would waste the reader's time.

## Checking those two files

    python tools/verify/check.py

Both files were written from two sources and this compares them back against
both, row by row — 100 rows of name, year and venue. See
`tools/verify/README.md`. The first run found eleven differences, four of them
real: a missing presidency, a wrong term boundary, and five missing acting
Viceroys.

## Running it

```bash
npx -y http-server article-machine -p 8137 -c-1
```

Then open <http://localhost:8137>. It is also registered in the workspace
`.claude/launch.json` as `article-machine`.

## Using it

- The **front page filters topics** by name and description. If nothing
  matches, it hands the query to the deep search rather than dead-ending.
- `/` focuses the search box. It searches every subject: article numbers,
  headings, the plain-English notes, the official text, case names, amendment
  subjects, history events, plans, and every table of facts — down to the
  individual table, so "lactometer" reaches "Instruments and what they measure".
  Typing `21`, `art 21` or `article 21` all reach Article 21.
- Every search term must begin at a word boundary. Without that, "gst" matched
  inside "amongst" and "dance" inside "accordance" — which put Article 356 above
  the folk-dance table for the query "punjab dance". A stem still matches, so
  "amend" finds "amendment".
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

## The refinement pass

A sweep for defects that changed no content — no fact, no sentence, no question.
Five things were found by measurement and fixed.

**Printing produced a blank sheet.** There was no print stylesheet at all, so a
printed page carried the screen's near-black background instruction (which most
browsers drop) together with the screen's near-white text (which they keep).
Black-on-black became white-on-white. The fix redefines the colour tokens inside
`@media print` rather than patching selectors: every colour on the site is drawn
from about a dozen custom properties, so one redefinition reaches all of them,
and the hierarchy survives — the quiet grey is still quieter than the body text,
the three accents are still three distinguishable accents, each just darkened
until it is ink. The chrome that means nothing on paper is hidden (header, tabs,
search, the side column, the back button), the reading column takes the full
sheet, headings do not sit alone at the foot of a page, and boxes keep their
shape as an outline since the tint is exactly what will not print.

Three colours were written in by hand rather than taken from a token and so were
missed by that redefinition: the date badge, the bare text of an article, and
the list rows on the law-paper pages. They were found by walking all 356 routes
with the print rules applied and measuring the contrast of every visible text
element against white. The first pass flagged 13 cases on a single page; the
last pass flagged none on any of the 356.

**Fifty labels failed the contrast floor.** `--dimmer`, the grey that carries
the eyebrows, the counts beside a topic, the column headings, the search
placeholder and the keyboard hints, measured 3.35:1 against the page and 2.85:1
against a panel. Small letter-spaced mono type is exactly what it is used for,
and 4.5:1 is the floor for small text. Same hue, lifted to `#878393`: 5.33:1 on
the page, 4.54:1 on the darkest panel it sits on, still plainly quieter than
`--dim`.

**Corrupt storage blanked the law-paper pages.** `jcaLoad` and `mathGet` parsed
whatever was in `localStorage` and handed it straight to the caller. Valid JSON
of the wrong shape — a string, a number, `null`, an array where a record was
expected — reached code that called `.reduce`, `.map` and `Object.keys` on it.
Poisoning the six storage keys six ways across five routes produced eight hard
crashes and blank pages. Both readers now check the parsed value against the
shape of the default before returning it, and fall back when it does not match.
The same test now produces no errors and no blank pages in thirty combinations.

**A focus ring was suppressed.** The jump buttons on the law-paper pages set
`outline:none` on focus without putting anything back, so a keyboard user could
not see where they were. They now take the same gold the hover state uses.

**The header height fallback was wrong at both ends.** `--headh` is written for
real by the script, but the CSS value is what the first paint uses. It claimed
122px on desktop where the header measures 103px, leaving a visible gap, and
162px on a phone where it measures 194px — and too small is the harmful
direction, because the top of the page then sits underneath the fixed bar until
the script catches up. Both now carry the measured figures.

Verified across the whole site afterwards: 356 routes walked at 375px with no
horizontal overflow and no console errors, and the same 356 walked again with
the print rules applied with no unreadable text. No file under `data-` was
touched.

## Not legal advice

This is a study aid. For anything that matters, read the article itself, and
then the judgment.
