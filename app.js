/* The Article Machine — app.js
   Hash-routed, no framework, no build step, no network calls.
   Every page is rendered from the four data files loaded before this one. */

(function () {
'use strict';

var ARTICLES  = window.ARTICLES  || [];
var AMENDMENTS= window.AMENDMENTS|| [];
var SCHEDULES = window.SCHEDULES || [];
var CASES     = window.CASES     || [];
var PLAIN     = window.PLAIN     || {};
var HIGHYIELD = window.HIGHYIELD || {};

var main = document.getElementById('main');
var qBox = document.getElementById('q');
var resBox = document.getElementById('results');
var tabBar = document.getElementById('tabs');
var brandSub = document.getElementById('brandsub');

/* ------------------------------------------------------------------ site

   The site is built as a set of SUBJECTS so that an unrelated one can be
   added later without touching the router or the header. To add a subject:
   drop in its data file, push an entry here with its own `tabs` and `route`,
   and it appears in the nav and at #/<id>/... on its own. Nothing below the
   registry needs to change.

   The Constitution is the default subject, so its routes sit at the top level
   (#/a/21) rather than behind a prefix — the links already published stay
   valid. Any later subject is namespaced under its own id.                  */

var SITE = {
  name: 'The Article Machine',
  /* The front door is the topic list, not any one subject. A reader arrives
     knowing what they need to revise, not which of four subjects it lives
     in — so #/ asks that question and every subject sits one click behind
     it. The Constitution keeps its old top-level routes (#/a/21, #/cases)
     so that nothing already linked breaks; its landing page moved to
     #/constitution. */
  hub: 'Study by topic'
};

/* The Parts of the Constitution, named the way a syllabus names them rather
   than the way the Constitution numbers them. "Part XVIII" is not a topic
   anybody looks for; "Emergency provisions" is. Article ranges are read off
   the data at run time rather than written here, so they cannot drift. */
var COI_TOPICS = [
  ['III',   'Fundamental Rights',        'Equality, freedom, life and liberty, religion — and the writs that enforce them.'],
  ['IV',    'Directive Principles',      'What the state is directed to aim at, and cannot be taken to court over.'],
  ['IVA',   'Fundamental Duties',        'The eleven duties, added by the 42nd Amendment in 1976.'],
  ['V',     'The Union',                 'President, Vice-President, Council of Ministers, Parliament, the Supreme Court and the CAG.'],
  ['VI',    'The States',                'Governor, state legislature, the High Courts and subordinate courts.'],
  ['XVIII', 'Emergency provisions',      'National, state and financial emergency — and everything the 44th Amendment tightened.'],
  ['XI',    'Centre-State relations',    'Who may legislate on what, and how the Union directs a state.'],
  ['XX',    'Amendment of the Constitution', 'Article 368, and the basic structure doctrine that limits it.'],
  ['XV',    'Elections',                 'The Election Commission and the bar on courts interfering in an election.'],
  ['XII',   'Finance, property and contracts', 'Taxation, the Finance Commission, borrowing, and the right to property after 1978.'],
  ['IX',    'The Panchayats',            'The 73rd Amendment — three tiers, five-year terms, reservation and the state election commission.'],
  ['IXA',   'The Municipalities',        'The 74th Amendment — urban local government on the same pattern.'],
  ['XIV',   'Services and the Public Service Commissions', 'The civil services, and the protections in Article 311.'],
  ['XVII',  'Official language',         'Hindi, English, and the languages of the Eighth Schedule.'],
  ['XVI',   'Special provisions for certain classes', 'Reservation of seats, and the National Commissions.'],
  ['II',    'Citizenship',               'Who was a citizen at commencement, and who decides now.'],
  ['I',     'The Union and its territory', 'How a state is created, renamed, merged or reorganised.'],
  ['X',     'Scheduled and Tribal Areas','Read with the Fifth and Sixth Schedules.'],
  ['XIVA',  'Tribunals',                 'Administrative tribunals, and what the courts did to them.'],
  ['XXI',   'Temporary and special provisions', 'The special provisions for particular states, including Article 370 as it stands.']
];

var SUBJECTS = [{
  id: 'constitution',
  name: 'Constitution of India',
  short: 'Constitution',
  blurb: 'Every article in plain English, with the official text, the cases and the amendments.',
  isDefault: true,
  tabs: [
    { href: '#/constitution', label: 'Articles',  match: ['', 'constitution', 'part', 'a'] },
    { href: '#/assembly',    label: 'The Assembly', match: ['assembly'] },
    { href: '#/high-yield',  label: 'High-yield', match: ['high-yield'] },
    { href: '#/amendments',  label: 'Amendments', match: ['amendments', 'amendment'] },
    { href: '#/schedules',   label: 'Schedules',  match: ['schedules', 'schedule'] },
    { href: '#/cases',       label: 'Cases',      match: ['cases', 'case'] },
    { href: '#/about',       label: 'About',      match: ['about'] }
  ],
  stats: function () {
    return [ARTICLES.length + ' articles', AMENDMENTS.length + ' amendments',
            CASES.length + ' cases', SCHEDULES.length + ' schedules'];
  },
  topics: function () {
    var out = COI_TOPICS.map(function (t) {
      var p = null;
      parts.forEach(function (x) { if (x.num === t[0]) p = x; });
      if (!p) return null;
      var live = p.arts.filter(function (a) { return !a.om; });
      var use = live.length ? live : p.arts;
      return {
        t: t[1], w: t[2], href: '#/part/' + encodeURIComponent(p.num),
        n: 'Articles ' + use[0].a + (use.length > 1 ? '-' + use[use.length - 1].a : '')
      };
    }).filter(Boolean);
    out.push(
      { t: 'The amendments', href: '#/amendments', n: AMENDMENTS.length + ' amendments',
        w: 'All of them, in order, with the articles each one touched.' },
      { t: 'The Schedules', href: '#/schedules', n: SCHEDULES.length + ' schedules',
        w: 'The Union, State and Concurrent Lists, the languages, the salaries and the anti-defection law.' },
      { t: 'Landmark cases', href: '#/cases', n: CASES.length + ' judgments',
        w: 'Kesavananda to Puttaswamy — what each one held, and which articles it turned on.' },
      { t: 'Constitution - the exam layer', href: '#/high-yield',
        n: hyCount('articles', 1) + ' must-know articles',
        w: 'Articles, cases and amendments sorted into three tiers, plus the confused pairs.' },
      { t: 'The Constituent Assembly', href: '#/assembly',
        n: asmCount('story') + ' facts',
        w: 'Who constituted it and how, the chairs, the three readings, and everything else it did besides drafting.',
        k: 'cabinet mission plan 1946 389 seats 299 objectives resolution b n rau three readings polity' },
      { t: 'The Assembly\'s committees', href: '#/assembly/committees',
        n: asmCount('committees') + ' rows',
        w: 'The eight major committees and their chairmen, and the Drafting Committee member by member.',
        k: 'ambedkar nehru patel rajendra prasad drafting committee chairman union powers advisory sub-committee alladi munshi saadulla' },
      { t: 'Who was in the Constituent Assembly', href: '#/assembly/people',
        n: '15 women, and the names asked',
        w: 'The members an exam asks for, the fifteen women, and the people who wrote out and painted the document.',
        k: 'members women sarojini naidu hansa mehta begum aizaz rasul dakshayani velayudhan raizada nandalal bose calligrapher' },
      { t: 'What the Assembly argued about', href: '#/assembly/debates',
        n: 'the Objectives Resolution and the fights',
        w: 'Language, secular and socialist, federal or unitary, and the criticisms of the Assembly itself.',
        k: 'objectives resolution official language munshi ayyangar formula secular socialist uniform civil code criticism grammar of anarchy' },
      { t: 'The Assembly - dates and confused pairs', href: '#/assembly/dates',
        n: (ASM.confusions || []).length + ' pairs',
        w: 'Adopted, signed and commenced are three different dates, and three different men chaired three different things.',
        k: '9 december 1946 26 november 1949 26 january 1950 constitution day adopted signed commenced sinha prasad ambedkar article 394' }
    );
    return out;
  }
}];

function activeSubject() {
  var seg = location.hash.replace(/^#\/?/, '').split('/')[0];
  var hit = null;
  SUBJECTS.forEach(function (s) { if (s.id === seg) hit = s; });
  return hit || SUBJECTS.filter(function (s) { return s.isDefault; })[0];
}

function atHub(seg) {
  var first = seg[0] || '';
  return first === '' || first === 'hub' || first === 'topics';
}

function renderNav(seg) {
  if (!tabBar) return;

  /* At the hub there is no active subject, so the nav becomes the list of
     subjects instead of one subject's sections. */
  if (atHub(seg)) {
    if (brandSub) brandSub.textContent = SITE.hub;
    tabBar.innerHTML = SUBJECTS.map(function (s) {
      return '<a href="#/' + (s.isDefault ? 'constitution' : s.id) + '">' +
             esc(s.short || s.name) + '</a>';
    }).join('') + '<a href="#/about">About</a>';
    syncHead();
    return;
  }

  var sub = activeSubject();
  if (brandSub) brandSub.textContent = sub.name;
  /* For a namespaced subject the first segment is its id, so the segment that
     identifies the tab is the SECOND one. The default subject has no prefix. */
  var key = sub.isDefault ? (seg[0] || '') : (seg[1] || '');
  tabBar.innerHTML = '<a href="#/" class="hublink">All topics</a>' +
    sub.tabs.map(function (t) {
      var on = t.match.indexOf(key) >= 0;
      return '<a href="' + t.href + '"' + (on ? ' aria-current="page"' : '') + '>' +
             esc(t.label) + '</a>';
    }).join('');
  syncHead();
}

/* The search results panel hangs below the header, so it needs the header's
   real height. That was a hard-coded guess in CSS, and the install button
   invalidated it by wrapping onto a third row on a narrow phone. Measure the
   header instead — and measure it AFTER the nav is filled, since the nav is
   rendered by JS and the header is 43px shorter without it. */
function syncHead() {
  var head = document.querySelector('header.top');
  if (!head) return;
  document.documentElement.style.setProperty('--headh',
    Math.round(head.getBoundingClientRect().height) + 'px');
}

/* A resize event is not always enough — a font finishing loading, or the tab
   being resized without one firing, both change the header's height silently.
   Watching the element itself catches every case. */
(function () {
  var head = document.querySelector('header.top');
  if (head && window.ResizeObserver) new ResizeObserver(syncHead).observe(head);
})();

/* ------------------------------------------------------------------ index */

var byArt = {}, parts = [], partOf = {};
ARTICLES.forEach(function (a) { byArt[a.a] = a; });

ARTICLES.forEach(function (a) {
  var p = parts.length ? parts[parts.length - 1] : null;
  if (!p || p.num !== a.p) {
    p = { num: a.p, title: a.pt, arts: [] };
    parts.push(p);
  }
  p.arts.push(a);
  partOf[a.a] = p;
});

var casesByArt = {};
CASES.forEach(function (c) {
  (c.a || []).forEach(function (n) {
    (casesByArt[n] = casesByArt[n] || []).push(c);
  });
});
var caseById = {};
CASES.forEach(function (c) { caseById[c.id] = c; });

var amdByNo = {};
AMENDMENTS.forEach(function (m) { amdByNo[m.n] = m; });

var LIVE = ARTICLES.filter(function (a) { return !a.om; });
var GONE = ARTICLES.filter(function (a) { return a.om; });

/* ----------------------------------------------------------------- helpers */

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

var ORD = ['', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh',
  'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth'];

function ordinal(n) {
  var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

/* "1-11-1956" -> "1 November 1956" */
var MONTHS = ['January','February','March','April','May','June','July','August',
              'September','October','November','December'];
function niceDate(d) {
  if (!d) return '';
  var m = /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(d);
  if (!m) return d;
  return (+m[1]) + ' ' + MONTHS[(+m[2]) - 1] + ' ' + m[3];
}

var KIND = { i: 'inserted by', s: 'substituted by', o: 'words omitted by',
             a: 'amended by' };

/* Break the official text at numbered clauses so it is readable, and mark the
   square brackets the official edition uses for text an amendment put there. */
function fmtOfficial(t) {
  var h = esc(t);
  /* Start a new paragraph at each numbered clause. Two things to be careful
     of: a clause inserted by an amendment is written "[(4) ..." and the
     bracket must stay attached to its number, and a cross-reference in the
     middle of a sentence ("clause (1) of article 368") must NOT break. So
     only break where the clause marker follows a full stop, a semicolon, a
     colon or a closing bracket -- which is how a clause actually begins. */
  h = h.replace(/([.;:\]])\s*(\[?)(\(\d{1,2}[A-Z]?\))\s*/g, '$1\n\n$2$3 ');
  h = h.replace(/^\s*(\[?)(\(\d{1,2}[A-Z]?\))\s*/, '$1$2 ');
  h = h.replace(/(\(\d{1,2}[A-Z]?\)) \]/g, '$1]');   // the break added a space before a close bracket
  h = h.replace(/\s*(Provided\b)/g, '\n\n$1');
  h = h.replace(/\s*(Explanation\b)/g, '\n\n$1');
  h = h.replace(/\[([^\[\]]{1,600}?)\]/g, '<span class="ins">[$1]</span>');
  return h.trim();
}

function artLabel(a) { return 'Article ' + a; }

function statusChips(a) {
  var out = [];
  if (a.om) {
    out.push('<span class="chip gone">Repealed</span>');
  } else {
    out.push('<span class="chip live">In force</span>');
  }
  if (a.sd) out.push('<span class="chip struck">' + ordinal(a.sd) + ' struck down</span>');
  if (a.am) out.push('<span class="chip amd">' + a.am.length + ' amendment' +
                     (a.am.length > 1 ? 's' : '') + '</span>');
  if (casesByArt[a.a]) out.push('<span class="chip case">' + casesByArt[a.a].length +
                                ' case' + (casesByArt[a.a].length > 1 ? 's' : '') + '</span>');
  return out.join('');
}

function plainOf(a) {
  var p = PLAIN[a.a];
  if (p) return p;
  if (a.om) {
    return { p: 'Repealed. ' + (a.omBy
      ? 'Taken out of the Constitution by the ' + a.omBy[0] + ' Amendment (' + a.omBy[1] + ')' +
        (a.omBy[2] ? ', with effect from ' + niceDate(a.omBy[2]) : '') + '.'
      : 'No longer part of the Constitution.') };
  }
  return null;
}

/* --------------------------------------------------------------- rendering */

function render(html) {
  main.innerHTML = html;
  /* Scroll AFTER the new content is in place, not before. route() scrolls
     first, but the page it scrolls is still the OLD one — and when the
     content is then swapped, Chrome's scroll anchoring tries to keep what
     you were looking at steady and nudges the position back down (it landed
     at 38px, not 0). Doing it here, once the new page exists, leaves nothing
     for anchoring to react to. */
  jumpToTop();
  main.focus && main.focus();
}

function partCard(p) {
  var live = p.arts.filter(function (a) { return !a.om; }).length;
  return '<a class="pcard" href="#/part/' + encodeURIComponent(p.num) + '">' +
    '<div class="pn"' + (live ? '' : ' style="color:var(--hot)"') + '>Part ' + esc(p.num) +
    (live ? '' : ' · repealed') + '</div>' +
    '<div class="pt"' + (live ? '' : ' style="color:var(--dim)"') + '>' +
    esc(titleCase(p.title)) + '</div>' +
    '<div class="pr">' + esc(p.arts[0].a) +
    (p.arts.length > 1 ? '–' + esc(p.arts[p.arts.length - 1].a) : '') +
    ' · ' + (live ? live + ' in force' : 'no longer in the Constitution') + '</div></a>';
}

/* Part titles are printed in full capitals in the official text; this puts
   them back into a form that can sit in a heading without shouting. */
function titleCase(s) {
  if (!s) return '';
  var small = { and: 1, or: 1, of: 1, the: 1, to: 1, in: 1, for: 1, a: 1, as: 1,
                by: 1, with: 1, its: 1, within: 1, under: 1, between: 1, on: 1 };
  return s.toLowerCase().split(/\s+/).map(function (w, i) {
    if (i > 0 && small[w]) return w;
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

function homePage() {
  var amdCount = AMENDMENTS.length;
  var caseCount = CASES.length;
  var h = '<div class="wrap hero">' +
    '<h1>Every article of the Constitution, in plain English.</h1>' +
    '<p class="lede">All ' + ARTICLES.length + ' articles of the Constitution of India — ' +
    'what each one actually means, the official text word for word, the landmark case ' +
    'that defined it, and every amendment that changed it. Searchable. Works offline.</p>' +
    '<div class="figs">' +
      fig(LIVE.length, 'articles in force') +
      fig(GONE.length, 'repealed') +
      fig(parts.length, 'parts') +
      fig(amdCount, 'amendments') +
      fig(SCHEDULES.length, 'schedules') +
      fig(caseCount, 'landmark cases') +
    '</div></div>';

  var livePartCount = parts.filter(function (p) {
    return p.arts.some(function (a) { return !a.om; });
  }).length;
  h += '<div class="wrap"><div class="label stack-lg">The parts of the Constitution · ' +
       livePartCount + ' in force, ' + (parts.length - livePartCount) + ' repealed</div>' +
       '<div class="grid">' + parts.map(partCard).join('') + '</div></div>';

  h += '<div class="wrap"><div class="label stack-lg">Start here</div><div class="grid">' +
    quick('21', 'Life and personal liberty', 'The article the Court has drawn most of modern India from') +
    quick('14', 'Equality before law', 'And the arbitrariness test that grew out of it') +
    quick('32', 'The right to move the Supreme Court', 'Ambedkar called it the heart and soul') +
    quick('368', 'The power to amend', 'And the basic structure that limits it') +
    quick('356', "President's rule", 'And the case that made it reviewable') +
    quick('19', 'Freedom of speech', 'With the eight grounds on which it can be restricted') +
    '</div></div>';

  /* The other subjects, once there is more than one. */
  var others = SUBJECTS.filter(function (s) { return !s.isDefault; });
  if (others.length) {
    h += '<div class="wrap"><div class="label stack-lg">Also on this site</div>' +
      '<div class="grid">' + others.map(function (s) {
        return '<a class="pcard" href="#/' + s.id + '">' +
          '<div class="pn">' + esc(s.name) + '</div>' +
          '<div class="pt">' + esc(s.blurb) + '</div>' +
          '<div class="pr">' + esc(s.stats().join(' · ')) + '</div></a>';
      }).join('') + '</div></div>';
  }
  render(h);
}

function fig(n, label) {
  return '<div class="fig"><b>' + n + '</b><span>' + esc(label) + '</span></div>';
}

function quick(a, t, sub) {
  return '<a class="pcard" href="#/a/' + encodeURIComponent(a) + '">' +
    '<div class="pn">Article ' + esc(a) + '</div>' +
    '<div class="pt">' + esc(t) + '</div>' +
    '<div class="pr">' + esc(sub) + '</div></a>';
}

function artRow(a) {
  var p = plainOf(a);
  var teaser = p && p.p ? p.p : '';
  if (teaser.length > 150) teaser = teaser.slice(0, 148).replace(/\s+\S*$/, '') + '…';
  return '<a class="arow' + (a.om ? ' gone' : '') + '" href="#/a/' + encodeURIComponent(a.a) + '">' +
    '<span class="no">' + esc(a.a) + '</span>' +
    '<span class="tx"><b>' + esc(a.h || '(no heading)') + '</b>' +
    (teaser ? '<i>' + esc(teaser) + '</i>' : '') + '</span>' +
    '<span class="tag">' + statusChips(a) + '</span></a>';
}

function partPage(num) {
  var p = null;
  parts.forEach(function (x) { if (x.num === num) p = x; });
  if (!p) return notFound('No Part ' + num + ' in the Constitution.');

  var h = '<div class="wrap artpage">' +
    '<div class="crumb"><a href="#/constitution">Articles</a> → Part ' + esc(p.num) + '</div>' +
    '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    esc(titleCase(p.title)) + '</h1>' +
    '<p class="sub">Part ' + esc(p.num) + ' · Articles ' + esc(p.arts[0].a) + '–' +
    esc(p.arts[p.arts.length - 1].a) + ' · ' + p.arts.length + ' articles</p>';

  var chap = null;
  p.arts.forEach(function (a) {
    if (a.c !== chap) {
      chap = a.c;
      if (chap) h += '<div class="chapband">' + esc(chap) + '</div>';
    }
    h += artRow(a);
  });

  h += navBetweenParts(p) + '</div>';
  render(h);
}

function navBetweenParts(p) {
  var i = parts.indexOf(p), out = '<div class="nextprev">';
  if (i > 0) out += '<a href="#/part/' + encodeURIComponent(parts[i - 1].num) + '">' +
    '<span class="d">Previous part</span><span class="t">Part ' + esc(parts[i - 1].num) +
    ' · ' + esc(titleCase(parts[i - 1].title)) + '</span></a>';
  if (i < parts.length - 1) out += '<a class="r" href="#/part/' +
    encodeURIComponent(parts[i + 1].num) + '"><span class="d">Next part</span>' +
    '<span class="t">Part ' + esc(parts[i + 1].num) + ' · ' +
    esc(titleCase(parts[i + 1].title)) + '</span></a>';
  return out + '</div>';
}

function articlePage(num) {
  var a = byArt[num];
  if (!a) return notFound('There is no Article ' + esc(num) + ' in the Constitution.');
  var p = partOf[a.a], pl = plainOf(a), idx = ARTICLES.indexOf(a);

  var h = '<div class="wrap artpage">' +
    '<div class="crumb"><a href="#/constitution">Articles</a> → ' +
    '<a href="#/part/' + encodeURIComponent(p.num) + '">Part ' + esc(p.num) + ' · ' +
    esc(titleCase(p.title)) + '</a>' + (a.c ? ' → ' + esc(a.c) : '') + '</div>';

  h += '<div class="arthead"><div class="big">' + esc(a.a) + '</div><div class="ht">' +
    '<h1>' + esc(a.h || 'Repealed') + '</h1>' +
    '<div class="chips">' + statusChips(a) + '</div></div></div>';

  /* ---- plain English ---- */
  if (pl && pl.p) {
    h += '<div class="block"><h3>What it means</h3>' +
         '<p class="plain">' + esc(pl.p) + '</p>' +
         (pl.w ? '<p class="why">' + esc(pl.w) + '</p>' : '') + '</div>';
  } else {
    h += '<div class="block"><h3>What it means</h3>' +
         '<p class="plain" style="color:var(--dim)">A plain-English note for this article ' +
         'has not been written yet. The official text is below, in full.</p></div>';
  }

  /* ---- repeal note ---- */
  if (a.om && a.omBy) {
    h += '<div class="block"><h3>How it went</h3><ul class="trail"><li>' +
      '<span class="an">' + a.omBy[1] + '</span>' +
      '<span class="ad">Repealed by the <a href="#/amendment/' + amdNumberFromName(a.omBy[0]) +
      '">' + esc(a.omBy[0]) + ' Amendment</a></span>' +
      '<span class="aw">' + (a.omBy[2] ? niceDate(a.omBy[2]) : '') + '</span></li></ul></div>';
  }

  /* ---- official text ---- */
  if (a.t) {
    h += '<div class="block"><h3>The official text</h3>' +
         '<p class="official">' + fmtOfficial(a.t) + '</p>' +
         '<p class="foot">Verbatim from <em>The Constitution of India [As on 1st May, 2024]</em>. ' +
         'Square brackets mark words an amendment put there; asterisks mark words an ' +
         'amendment took out.</p></div>';
  }

  /* ---- amendments ---- */
  if (a.am && a.am.length) {
    h += '<div class="block"><h3>What changed, and when</h3><ul class="trail">';
    a.am.forEach(function (m) {
      var amd = amdByNo[m[0]];
      h += '<li><span class="an">' + ordinal(m[0]) + '</span><span class="ad">' +
        '<a href="#/amendment/' + m[0] + '" style="text-decoration:none">' +
        esc(KIND[m[2]] || 'amended by') + ' the ' + ordinal(m[0]) + ' Amendment (' + m[1] + ')</a>' +
        (amd ? '<em> — ' + esc(shorten(amd.s, 110)) + '</em>' : '') +
        '</span><span class="aw">' + (m[3] ? niceDate(m[3]) : '') + '</span></li>';
    });
    h += '</ul></div>';
  }

  /* ---- cases ---- */
  var cs = casesByArt[a.a];
  if (cs && cs.length) {
    h += '<div class="block"><h3>The cases that defined it</h3><div class="caselist">';
    cs.slice().sort(function (x, y) { return x.y - y.y; }).forEach(function (c) {
      h += caseCard(c);
    });
    h += '</div></div>';
  }

  /* ---- neighbours ---- */
  h += '<div class="nextprev">';
  if (idx > 0) h += '<a href="#/a/' + encodeURIComponent(ARTICLES[idx - 1].a) + '">' +
    '<span class="d">Previous</span><span class="t">' + esc(ARTICLES[idx - 1].a) + ' · ' +
    esc(ARTICLES[idx - 1].h || 'Repealed') + '</span></a>';
  if (idx < ARTICLES.length - 1) h += '<a class="r" href="#/a/' +
    encodeURIComponent(ARTICLES[idx + 1].a) + '"><span class="d">Next</span><span class="t">' +
    esc(ARTICLES[idx + 1].a) + ' · ' + esc(ARTICLES[idx + 1].h || 'Repealed') + '</span></a>';
  h += '</div></div>';

  render(h);
}

function shorten(s, n) {
  if (!s || s.length <= n) return s || '';
  return s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
}

var ORDNAMES = {};
(function () {
  var names = ['', 'First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth',
    'Ninth','Tenth','Eleventh','Twelfth','Thirteenth','Fourteenth','Fifteenth','Sixteenth',
    'Seventeenth','Eighteenth','Nineteenth','Twentieth'];
  var tens = { 20:'Twenty',30:'Thirty',40:'Forty',50:'Fifty',60:'Sixty',70:'Seventy',
               80:'Eighty',90:'Ninety' };
  var ones = ['','first','second','third','fourth','fifth','sixth','seventh','eighth','ninth'];
  for (var i = 1; i <= 106; i++) {
    var nm;
    if (i <= 20) nm = names[i];
    else if (i < 100) {
      var t = Math.floor(i / 10) * 10, o = i % 10;
      nm = o ? tens[t] + '-' + ones[o] : tens[t].replace(/y$/, 'ieth');
    } else if (i === 100) nm = 'One Hundredth';
    else nm = 'One Hundred and ' + (i - 100 <= 20 ? names[i - 100] : '');
    ORDNAMES[nm.toLowerCase()] = i;
  }
})();

function amdNumberFromName(name) {
  var k = String(name || '').toLowerCase().trim();
  return ORDNAMES[k] || '';
}

function caseCard(c) {
  return '<a class="casecard" href="#/case/' + encodeURIComponent(c.id) + '">' +
    '<b>' + esc(c.n) + '</b>' +
    '<div class="meta">' + c.y + (c.c ? ' · ' + esc(c.c) : '') +
    (c.b ? ' · ' + c.b + '-judge bench' : '') +
    (c.court ? ' · ' + esc(c.court) : '') + '</div>' +
    '<p>' + esc(c.h) + '</p></a>';
}

/* ------------------------------------------------------------- amendments */

function amendmentsPage() {
  var h = '<div class="wrap artpage">' +
    '<div class="crumb">Amendments</div>' +
    '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    'All ' + AMENDMENTS.length + ' amendments</h1>' +
    '<p class="sub">Newest first. The articles listed under each one are derived from the ' +
    'official text\'s own footnotes.</p>';

  AMENDMENTS.slice().reverse().forEach(function (m) {
    h += '<a class="amdrow" href="#/amendment/' + m.n + '">' +
      '<span class="no">' + ordinal(m.n) + '</span>' +
      '<span class="tx"><b>' + esc(shorten(m.s, 170)) + '</b>' +
      '<i>' + (m.arts.length ? m.arts.length + ' article' + (m.arts.length > 1 ? 's' : '') +
        ' changed · ' + m.arts.slice(0, 6).join(', ') + (m.arts.length > 6 ? '…' : '')
        : 'Schedules only, or superseded by later amendments') + '</i></span>' +
      '<span class="yr">' + m.y + '</span></a>';
  });
  h += '</div>';
  render(h);
}

function amendmentPage(no) {
  var m = amdByNo[+no];
  if (!m) return notFound('There is no ' + esc(no) + ' amendment.');
  var h = '<div class="wrap artpage">' +
    '<div class="crumb"><a href="#/amendments">Amendments</a> → ' + ordinal(m.n) + '</div>' +
    '<div class="arthead"><div class="big" style="color:var(--violet)">' + ordinal(m.n) +
    '</div><div class="ht"><h1>The Constitution (' + ordName(m.n) + ' Amendment) Act, ' +
    m.y + '</h1><div class="chips">' +
    (m.wef ? '<span class="chip">In force ' + niceDate(m.wef) + '</span>' : '') +
    (m.arts.length ? '<span class="chip amd">' + m.arts.length + ' articles</span>' : '') +
    (m.untraced ? '<span class="chip gone">Superseded</span>' : '') +
    '</div></div></div>';

  h += '<div class="block"><h3>What it did</h3><p class="plain">' + esc(m.s) + '</p>';
  if (m.untraced) h += '<p class="why">Later amendments overwrote this one so completely ' +
    'that the current official text no longer cites it anywhere. Its details here come ' +
    'from the Act itself rather than from the footnotes of the present Constitution.</p>';
  h += '</div>';

  if (m.arts.length) {
    h += '<div class="block"><h3>Articles it changed</h3><div class="pills">';
    m.arts.forEach(function (a) {
      h += '<a class="pill" href="#/a/' + encodeURIComponent(a) + '">' + esc(a) + '</a>';
    });
    h += '</div><p class="foot">Derived from the footnotes of the official text. An ' +
      'amendment that also changed a Schedule will not show that here.</p></div>';
  }

  var rel = CASES.filter(function (c) {
    return (c.note && c.note.indexOf(ordinal(m.n) + ' Amendment') >= 0) ||
           (c.h && c.h.indexOf(ordinal(m.n) + ' Amendment') >= 0);
  });
  if (rel.length) {
    h += '<div class="block"><h3>In court</h3><div class="caselist">' +
      rel.map(caseCard).join('') + '</div></div>';
  }

  h += '<div class="nextprev">';
  if (m.n > 1) h += '<a href="#/amendment/' + (m.n - 1) + '"><span class="d">Previous</span>' +
    '<span class="t">' + ordinal(m.n - 1) + ' Amendment</span></a>';
  if (m.n < AMENDMENTS.length) h += '<a class="r" href="#/amendment/' + (m.n + 1) +
    '"><span class="d">Next</span><span class="t">' + ordinal(m.n + 1) + ' Amendment</span></a>';
  h += '</div></div>';
  render(h);
}

function ordName(i) {
  for (var k in ORDNAMES) if (ORDNAMES[k] === i) {
    return k.replace(/(^|[\s-])([a-z])/g, function (m0, a, b) { return a + b.toUpperCase(); });
  }
  return ordinal(i);
}

/* -------------------------------------------------------------- schedules */

function schedulesPage() {
  var h = '<div class="wrap artpage"><div class="crumb">Schedules</div>' +
    '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    'The twelve Schedules</h1>' +
    '<p class="sub">The lists and tables the articles point to.</p><div class="grid">';
  SCHEDULES.forEach(function (s) {
    h += '<a class="pcard" href="#/schedule/' + s.n + '">' +
      '<div class="pn">' + esc(s.name) + '</div>' +
      '<div class="pt">' + esc(s.sub) + '</div>' +
      '<div class="pr">' + esc(s.ref) + ' · ' + esc(s.stat) + '</div></a>';
  });
  h += '</div></div>';
  render(h);
}

function schedulePage(no) {
  var s = null;
  SCHEDULES.forEach(function (x) { if (x.n === +no) s = x; });
  if (!s) return notFound('There is no Schedule ' + esc(no) + '.');

  var h = '<div class="wrap artpage">' +
    '<div class="crumb"><a href="#/schedules">Schedules</a> → ' + esc(s.name) + '</div>' +
    '<div class="arthead"><div class="big">' + s.n + '</div><div class="ht">' +
    '<h1>' + esc(s.sub) + '</h1><div class="chips">' +
    '<span class="chip">' + esc(s.ref) + '</span>' +
    '<span class="chip live">' + esc(s.stat) + '</span></div></div></div>';

  h += '<div class="block"><h3>What it is</h3><p class="plain">' + esc(s.p) + '</p>' +
       '<div class="pills">' + refPills(s.ref) + '</div></div>';

  if (s.lists) {
    Object.keys(s.lists).forEach(function (name) {
      h += '<div class="block"><h3>' + esc(name) + ' · ' + s.lists[name].length +
        ' entries</h3><ul class="entries">' +
        s.lists[name].map(function (e) {
          var gone = /^\**$/.test(e.t.replace(/[\s*]/g, '')) || e.t === '';
          return '<li><span class="en">' + e.n + '</span><span' +
            (gone ? ' class="gone"' : '') + '>' +
            esc(gone ? 'Omitted.' : e.t) + '</span></li>';
        }).join('') + '</ul></div>';
    });
  }
  if (s.items) {
    h += '<div class="block"><h3>The entries</h3><ul class="entries">' +
      s.items.map(function (e) {
        return '<li><span class="en">' + e.n + '</span><span>' + esc(e.t) + '</span></li>';
      }).join('') + '</ul></div>';
  }

  h += '<div class="nextprev">';
  if (s.n > 1) h += '<a href="#/schedule/' + (s.n - 1) + '"><span class="d">Previous</span>' +
    '<span class="t">' + esc(ORD[s.n - 1]) + ' Schedule</span></a>';
  if (s.n < SCHEDULES.length) h += '<a class="r" href="#/schedule/' + (s.n + 1) +
    '"><span class="d">Next</span><span class="t">' + esc(ORD[s.n + 1]) +
    ' Schedule</span></a>';
  h += '</div></div>';
  render(h);
}

function refPills(ref) {
  var out = [], seen = {};
  String(ref).replace(/(\d{1,3}[A-Z]?)(\(\d+\))?/g, function (all, n) {
    if (byArt[n] && !seen[n]) { seen[n] = 1; out.push(n); }
    return all;
  });
  return out.map(function (n) {
    return '<a class="pill" href="#/a/' + encodeURIComponent(n) + '">Article ' + esc(n) + '</a>';
  }).join('');
}

/* ------------------------------------------------------------------ cases */

function casesPage() {
  var h = '<div class="wrap artpage"><div class="crumb">Cases</div>' +
    '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    CASES.length + ' landmark judgments</h1>' +
    '<p class="sub">Oldest first. A case appears here only where it settled the meaning ' +
    'of an article — most articles have never had one.</p><div class="caselist">';
  CASES.slice().sort(function (a, b) { return a.y - b.y; }).forEach(function (c) {
    h += caseCard(c);
  });
  h += '</div></div>';
  render(h);
}

function casePage(id) {
  var c = caseById[id];
  if (!c) return notFound('No case with that name.');
  var h = '<div class="wrap artpage">' +
    '<div class="crumb"><a href="#/cases">Cases</a> → ' + esc(c.n) + '</div>' +
    '<div class="arthead"><div class="big" style="color:var(--indigo)">' + c.y +
    '</div><div class="ht"><h1>' + esc(c.n) + '</h1><div class="chips">' +
    (c.c ? '<span class="chip">' + esc(c.c) + '</span>' : '') +
    (c.b ? '<span class="chip case">' + c.b + '-judge bench</span>' : '') +
    (c.court ? '<span class="chip">' + esc(c.court) + '</span>' : '') +
    (c.ov ? '<span class="chip gone">' + esc(c.ov.indexOf('overruled ') === 0 ?
       'Overruled an earlier case' : 'Overruled') + '</span>' : '') +
    '</div></div></div>';

  h += '<div class="block"><h3>What it held</h3><p class="plain">' + esc(c.h) + '</p>' +
    (c.note ? '<p class="why">' + esc(c.note) + '</p>' : '') + '</div>';

  if (c.ov) h += '<div class="block"><h3>Standing</h3><p class="plain">' +
    (c.ov.indexOf('overruled ') === 0
      ? 'This case ' + esc(c.ov) + '.'
      : 'Overruled by ' + esc(c.ov) + '.') + '</p></div>';

  h += '<div class="block"><h3>Articles it turns on</h3><div class="pills">' +
    (c.a || []).map(function (n) {
      var a = byArt[n];
      return '<a class="pill" href="#/a/' + encodeURIComponent(n) + '">Article ' + esc(n) +
        (a ? ' · ' + esc(shorten(a.h, 44)) : '') + '</a>';
    }).join('') + '</div></div></div>';
  render(h);
}

/* ------------------------------------------------------------- high-yield */

var TIERS = [
  { n: 1, label: 'Must know',    sub: 'Answer these cold.' },
  { n: 2, label: 'Should know',  sub: 'Regular, usually with a case or a number attached.' },
  { n: 3, label: 'Worth a look', sub: 'Harder papers, and descriptive answers.' }
];

function tierChip(t) {
  return '<span class="chip tier t' + t + '">' + esc(TIERS[t - 1].label) + '</span>';
}

function hyCount(kind, t) {
  return (HIGHYIELD[kind] || []).filter(function (x) { return !t || x.t === t; }).length;
}

function hyShell(active, body) {
  var tabs = [['', 'Overview'], ['articles', 'Articles'], ['cases', 'Cases'],
              ['amendments', 'Amendments'], ['confusions', 'Confused pairs'],
              ['facts', 'Quick facts']];
  return '<div class="wrap artpage">' +
    '<div class="crumb"><a href="#/constitution">Articles</a> → High-yield' +
    (active ? ' → ' + esc((tabs.filter(function (t) { return t[0] === active; })[0] || ['', ''])[1]) : '') +
    '</div>' +
    '<div class="listtabs">' + tabs.map(function (t) {
      return '<button onclick="location.hash=\'#/high-yield' + (t[0] ? '/' + t[0] : '') +
        '\'" aria-pressed="' + (t[0] === active) + '">' + esc(t[1]) + '</button>';
    }).join('') + '</div>' + body + '</div>';
}

function highYieldHome() {
  var h = '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    'The exam layer</h1>' +
    '<p class="sub">What actually gets asked, and why. ' + hyCount('articles', 1) +
    ' articles carry the “must know” tier, out of ' + LIVE.length +
    ' in force — so you can start with those and work outward.</p>' +

    '<div class="figs" style="margin-top:var(--s5)">' +
      fig(hyCount('articles'), 'articles') +
      fig(hyCount('cases'), 'cases') +
      fig(hyCount('amendments'), 'amendments') +
      fig((HIGHYIELD.confusions || []).length, 'confused pairs') +
      fig((HIGHYIELD.facts || []).reduce(function (a, g) { return a + g.items.length; }, 0), 'quick facts') +
    '</div>';

  h += '<div class="block"><h3>How the three tiers work</h3><div class="tiergrid">' +
    TIERS.map(function (t) {
      return '<div class="tiercard t' + t.n + '">' +
        '<div class="tn">' + esc(t.label) + '</div>' +
        '<div class="tc">' + hyCount('articles', t.n) + ' articles · ' +
        hyCount('cases', t.n) + ' cases · ' + hyCount('amendments', t.n) + ' amendments</div>' +
        '<div class="ts">' + esc(t.sub) + '</div></div>';
    }).join('') + '</div>' +
    '<p class="why">These tiers are a judgement about what recurs in Indian competitive-exam ' +
    'polity, not a count of past papers. Nothing here claims “asked N times”. What each entry ' +
    'gives you instead is the <em>kind</em> of question the item produces — which is the part ' +
    'that changes how you study it.</p></div>';

  h += '<div class="block"><h3>Where to start</h3><div class="grid">' +
    hyCard('articles', 'Articles', hyCount('articles'), 'Tiered, each with the reason it gets asked.') +
    hyCard('confusions', 'Confused pairs', (HIGHYIELD.confusions || []).length,
           '32 vs 226, the three emergencies, 110 vs 117, the five writs. Where marks are actually lost.') +
    hyCard('facts', 'Quick facts', (HIGHYIELD.facts || []).length + ' sets',
           'Preamble, dates, numbers, firsts and onlys, borrowed features, constitutional bodies.') +
    hyCard('cases', 'Cases', hyCount('cases'), 'The judgments worth knowing by name.') +
    hyCard('amendments', 'Amendments', hyCount('amendments'), 'The ones that changed something you will be asked about.') +
    '</div></div>';
  return hyShell('', h);
}

function hyCard(slug, title, n, sub) {
  return '<a class="pcard" href="#/high-yield/' + slug + '">' +
    '<div class="pn">' + n + '</div><div class="pt">' + esc(title) + '</div>' +
    '<div class="pr">' + esc(sub) + '</div></a>';
}

/* One list renderer for articles, cases and amendments — they differ only in
   how a row is labelled and where it links. */
function hyList(kind, title, intro, rowFn) {
  var rows = HIGHYIELD[kind] || [];
  var h = '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    esc(title) + '</h1><p class="sub">' + esc(intro) + '</p>';
  TIERS.forEach(function (t) {
    var band = rows.filter(function (r) { return r.t === t.n; });
    if (!band.length) return;
    h += '<div class="partband"><span class="pn t' + t.n + '">' + esc(t.label) + '</span>' +
      '<h2>' + band.length + ' ' + kind + '</h2>' +
      '<span class="pr" style="font-family:var(--mono);font-size:var(--t-tiny);color:var(--dimmer)">' +
      esc(t.sub) + '</span></div>';
    h += band.map(rowFn).join('');
  });
  return hyShell(kind, h);
}

function hyArticles() {
  return hyList('articles', 'The articles that get asked',
    'Every one links to the full article, with the official text and any case attached to it.',
    function (r) {
      var a = byArt[r.a];
      if (!a) return '';
      return '<a class="arow hy" href="#/a/' + encodeURIComponent(r.a) + '">' +
        '<span class="no">' + esc(r.a) + '</span><span class="tx">' +
        '<b>' + esc(a.h || 'Repealed') + '</b><i>' + esc(r.w) + '</i></span></a>';
    });
}

function hyCases() {
  return hyList('cases', 'The cases worth knowing by name',
    'Each one links to what it held, the citation and the articles it turns on.',
    function (r) {
      var c = caseById[r.id];
      if (!c) return '';
      return '<a class="arow hy" href="#/case/' + encodeURIComponent(r.id) + '">' +
        '<span class="no" style="color:var(--indigo)">' + c.y + '</span><span class="tx">' +
        '<b>' + esc(c.n) + '</b><i>' + esc(r.w) + '</i></span></a>';
    });
}

function hyAmendments() {
  return hyList('amendments', 'The amendments that changed something',
    'Each one links to what it did and the articles it touched.',
    function (r) {
      var m = amdByNo[r.n];
      if (!m) return '';
      return '<a class="arow hy" href="#/amendment/' + r.n + '">' +
        '<span class="no" style="color:var(--violet)">' + ordinal(r.n) + '</span>' +
        '<span class="tx"><b>' + ordinal(r.n) + ' Amendment, ' + m.y + '</b>' +
        '<i>' + esc(r.w) + '</i></span></a>';
    });
}

function hyConfusions() {
  var h = '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    'The pairs that get mixed up</h1>' +
    '<p class="sub">Where marks are actually lost: two things that sound alike and are not.</p>';
  (HIGHYIELD.confusions || []).forEach(function (c) {
    h += '<div class="cmp"><div class="cmph">' + esc(c.k) + '</div>' +
      c.rows.map(function (r) {
        return '<div class="cmpr"><div class="cmpk">' + linkArts(r[0]) + '</div>' +
               '<div class="cmpv">' + linkArts(r[1]) + '</div></div>';
      }).join('') +
      (c.note ? '<div class="cmpn">' + linkArts(c.note) + '</div>' : '') + '</div>';
  });
  return hyShell('confusions', h);
}

/* Turn every "article 226" / "Article 32" mentioned in the comparison text
   into a link, so a confused pair is one click from the real thing. */
function linkArts(s) {
  return esc(s).replace(/\b([Aa]rticles?\s+)(\d{1,3}[A-Z]?(?:-[A-Z])?)/g,
    function (all, word, num) {
      return byArt[num] ? word + '<a href="#/a/' + encodeURIComponent(num) + '">' + num + '</a>' : all;
    });
}

function hyFacts() {
  var h = '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    'Quick facts</h1><p class="sub">The recall block — the things that are simply asked as they stand.</p>';
  (HIGHYIELD.facts || []).forEach(function (g) {
    h += '<div class="block"><h3>' + esc(g.g) + '</h3>' +
      (g.note ? '<p class="foot before">' + esc(g.note) + '</p>' : '') +
      '<dl class="facts">' + g.items.map(function (it) {
        return '<dt>' + esc(it[0]) + '</dt><dd>' + linkArts(it[1]) + '</dd>';
      }).join('') + '</dl></div>';
  });
  return hyShell('facts', h);
}

function highYieldPage(slug) {
  if (!slug)                 return render(highYieldHome());
  if (slug === 'articles')   return render(hyArticles());
  if (slug === 'cases')      return render(hyCases());
  if (slug === 'amendments') return render(hyAmendments());
  if (slug === 'confusions') return render(hyConfusions());
  if (slug === 'facts')      return render(hyFacts());
  return notFound('No such high-yield section.');
}

/* =========================================================================
   THE CONSTITUENT ASSEMBLY

   Part of the Constitution subject rather than a subject of its own: the
   article pages are about the document, and this is about the making of it.
   An exam treats them as two different topics, which is why this is its own
   tab with its own committees, members, debates and dates.

   Its routes sit at the top level (#/assembly) because the Constitution is
   the default subject and its routes are not namespaced.
   ========================================================================= */

var ASM = window.ASSEMBLY || {};

var ASM_VIEWS = [
  ['',           'The story'],
  ['committees', 'Committees'],
  ['people',     'Who was who'],
  ['debates',    'What was argued'],
  ['dates',      'Dates and confusions']
];

/* Count the rows of every table in one section, so the hub reports what the
   data actually holds instead of a number written by hand that then drifts
   as rows are added. */
function asmCount(key) {
  return (ASM[key] || []).reduce(function (a, b) { return a + (b.rows || []).length; }, 0);
}

function asmShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function asmCrumb(here) {
  return '<div class="crumb"><a href="#/constitution">Constitution</a> \u2192 ' +
    (here ? '<a href="#/assembly">The Constituent Assembly</a> \u2192 ' + esc(here)
          : 'The Constituent Assembly') + '</div>';
}

function assemblyPage(slug) {
  slug = slug || '';
  var label = null;
  ASM_VIEWS.forEach(function (v) { if (v[0] === slug) label = v[1]; });
  if (label === null) {
    return notFound('That address does not exist in the Constituent Assembly section.');
  }

  var h = asmCrumb(slug ? label : '') + subTabs('#/assembly', ASM_VIEWS, slug);

  if (slug === 'committees') {
    h += pageH1('The committees, and who chaired them',
      'Eight major committees, thirteen more, the four sub-committees under Patel, and the Drafting Committee member by member.');
    h += (ASM.committees || []).map(factsBlock).join('');

  } else if (slug === 'people') {
    h += pageH1('Who was in the Assembly',
      'The members an exam asks for, the fifteen women, and the four people who physically made the document.');
    h += (ASM.people || []).map(factsBlock).join('');

  } else if (slug === 'debates') {
    h += pageH1('What the Assembly argued about',
      'The Objectives Resolution, the fights that shaped the text, the criticisms, and the closing warning.');
    h += (ASM.debates || []).map(factsBlock).join('');

  } else if (slug === 'dates') {
    h += pageH1('The dates, the numbers and the confused pairs',
      'Every date in order, the counts that are asked as questions on their own, and the names that get swapped.');
    h += (ASM.timeline || []).map(factsBlock).join('');
    h += (ASM.facts || []).map(factsBlock).join('');
    h += '<div class="block"><h3>The pairs that get mixed up</h3></div>';
    h += (ASM.confusions || []).map(cmpBlock).join('');

  } else {
    h += pageH1('The Constituent Assembly', ASM.lede || '');
    h += '<div class="figs">' + fig(389, 'seats in 1946') + fig(299, 'after Partition') +
      fig(11, 'sessions') + fig(165, 'days sitting') + '</div>';
    if (ASM.intro) h += '<p class="plain stack">' + esc(ASM.intro) + '</p>';
    h += (ASM.story || []).map(factsBlock).join('');
  }

  return render(asmShell(h));
}

/* --------------------------------------------------------------------- hub */

/* The front page. Every topic on the site in one filterable list, grouped by
   subject but filtered across subjects — so a reader who types "rivers" or
   "emergency" reaches the page they wanted without first having to work out
   which of four subjects it belongs to. */
function hubPage() {
  var groups = SUBJECTS.map(function (s) {
    return { s: s, topics: s.topics ? s.topics() : [] };
  });
  var total = groups.reduce(function (a, g) { return a + g.topics.length; }, 0);

  var h = '<div class="wrap hero"><h1>What do you need to study?</h1>' +
    '<p class="lede">' + total + ' topics across ' + SUBJECTS.length +
    ' subjects, each written to be read on its own. Filter the list, or open a ' +
    'subject and work through it.</p>' +
    '<div class="hubfilter">' +
      '<input id="topicq" type="search" autocomplete="off" spellcheck="false" ' +
      'aria-label="Filter topics" aria-controls="hublist" ' +
      'placeholder="Filter topics \u2014 try \u201cgst\u201d, \u201cdance\u201d, \u201cemergency\u201d, \u201crivers\u201d">' +
      '<span id="topicn" aria-live="polite"></span></div></div>';

  h += '<div class="wrap" id="hublist">';
  groups.forEach(function (g) {
    h += '<section class="hubsec">' +
      '<div class="hubhead"><a href="#/' + (g.s.isDefault ? 'constitution' : g.s.id) + '">' +
        esc(g.s.name) + '</a><span>' + esc(g.s.stats().join(' \u00b7 ')) + '</span></div>' +
      '<div class="topics">' + g.topics.map(function (t) {
        return '<a class="topic" href="' + t.href + '" data-k="' +
          esc((t.t + ' ' + t.w + ' ' + (t.k || '') + ' ' + g.s.name).toLowerCase()) + '">' +
          '<b>' + esc(t.t) + '</b><i>' + esc(t.w) + '</i>' +
          '<em>' + esc(t.n) + '</em></a>';
      }).join('') + '</div></section>';
  });
  h += '<div class="empty" id="hubempty" hidden><b>No topic matches that</b>' +
    'The search box at the top of the page goes deeper \u2014 it looks inside every ' +
    'article, case, event and fact on the site, not just the topic names.</div></div>';

  render(h);
  wireHubFilter();
}

/* The filter is plain substring matching over a key built from the topic's
   title, its one-line description and its subject name — so "history" finds
   a whole subject and "vitamin" finds one pack. Every term must match, which
   makes "punjab dance" work. */
function wireHubFilter() {
  var box = document.getElementById('topicq');
  if (!box) return;
  var items = [].slice.call(document.querySelectorAll('#hublist .topic'));
  var secs  = [].slice.call(document.querySelectorAll('#hublist .hubsec'));
  var count = document.getElementById('topicn');
  var none  = document.getElementById('hubempty');

  function apply() {
    var terms = box.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;
    items.forEach(function (el) {
      var hay = el.getAttribute('data-k');
      var ok = terms.every(function (t) { return hay.indexOf(t) >= 0; });
      el.hidden = !ok;
      if (ok) shown++;
    });
    secs.forEach(function (sec) {
      sec.hidden = !sec.querySelector('.topic:not([hidden])');
    });
    if (count) count.textContent = terms.length ? shown + ' of ' + items.length : '';

    /* A filter that can only dead-end is a bad filter. This one matches topic
       names and descriptions, so a query naming a fact rather than a topic
       finds nothing here even when the site holds the answer — "punjab dance"
       is in the folk-dance table, not in any topic's name. Hand it to the
       real search instead of stopping. */
    if (!none) return;
    none.hidden = shown > 0;
    if (shown) return;
    var raw = box.value.trim();
    none.innerHTML = '<b>No topic is named that</b>' +
      'The topic filter only looks at the names and one-line descriptions above. ' +
      'The search box at the top of the page goes all the way in \u2014 every article, ' +
      'case, event, plan and fact on the site.' +
      '<div class="stack"><button class="pill big" type="button" id="deepsearch">' +
      'Search everything for \u201c' + esc(raw) + '\u201d</button></div>';
    var btn = document.getElementById('deepsearch');
    /* A click anywhere outside the results panel closes it, and this button
       is outside it. Without stopping the bubble the panel would open and
       then be shut again by that handler in the same click. */
    if (btn) btn.addEventListener('click', function (e) {
      e.stopPropagation();
      qBox.value = raw;
      qBox.focus();
      runSearch(raw);
    });
  }
  box.addEventListener('input', apply);
}

/* =========================================================================
   SUBJECT: MODERN INDIAN HISTORY
   The first subject added through the registry. Everything below is reached
   only from #/history/... and touches nothing in the Constitution subject.
   ========================================================================= */

var HIST    = window.HISTORY    || {};
var HIST_HY = window.HISTORY_HY || {};
var histEra = {}, histEvent = {}, histAct = {}, histPerson = {}, histMove = {};
(HIST.eras      || []).forEach(function (e) { histEra[e.id] = e; });
(HIST.timeline  || []).forEach(function (e) { histEvent[e.id] = e; });
(HIST.acts      || []).forEach(function (a) { histAct[a.id] = a; });
(HIST.people    || []).forEach(function (p) { histPerson[p.id] = p; });
(HIST.movements || []).forEach(function (m) { histMove[m.id] = m; });

function histShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function histCrumb(here) {
  return '<div class="crumb"><a href="#/history">Modern History</a>' +
         (here ? ' → ' + esc(here) : '') + '</div>';
}

/* Kept as a name because it is called from a dozen places; the markup itself
   is now shared with Economy and Static GK. */
function histH1(t, sub) { return pageH1(t, sub); }

function histTimeline() {
  var h = histCrumb('') + histH1('The timeline',
    'From the Company\'s charter in 1600 to the Constitution in 1949, in ' +
    (HIST.timeline || []).length + ' events. A gold marker means the event is high-yield.');

  h += '<div class="listtabs">' + (HIST.eras || []).map(function (e) {
    return '<button onclick="document.getElementById(\'era-' + e.id +
      '\').scrollIntoView()">' + esc(e.n) + '</button>';
  }).join('') + '</div>';

  (HIST.eras || []).forEach(function (era) {
    var evs = (HIST.timeline || []).filter(function (x) { return x.e === era.id; })
                                   .sort(function (a, b) { return a.y - b.y; });
    if (!evs.length) return;
    h += '<div class="partband" id="era-' + esc(era.id) + '">' +
      '<span class="pn">' + era.from + ' – ' + era.to + '</span>' +
      '<h2>' + esc(era.n) + '</h2></div>' +
      '<p class="foot before">' + esc(era.w) + '</p>';
    h += evs.map(histRow).join('');
  });
  return histShell(h);
}

function histRow(ev) {
  return '<a class="arow hy" href="#/history/event/' + encodeURIComponent(ev.id) + '">' +
    '<span class="no' + (ev.hy ? '' : ' dimyear') + '">' + ev.y + '</span>' +
    '<span class="tx"><b>' + esc(ev.t) + '</b>' +
    '<i>' + esc(shorten(ev.w, 190)) + '</i></span>' +
    (ev.hy ? '<span class="tag"><span class="chip tier t1">High-yield</span></span>' : '') +
    '</a>';
}

function histEventPage(id) {
  var ev = histEvent[id];
  if (!ev) return notFound('No such event.');
  var era = histEra[ev.e] || {};
  var all = (HIST.timeline || []).slice().sort(function (a, b) { return a.y - b.y; });
  var i = all.indexOf(ev);

  var h = histCrumb(era.n || '') +
    '<div class="arthead"><div class="big">' + ev.y + '</div><div class="ht">' +
    '<h1>' + esc(ev.t) + '</h1><div class="chips">' +
    (ev.d ? '<span class="chip">' + esc(ev.d) + '</span>' : '') +
    (era.n ? '<span class="chip">' + esc(era.n) + '</span>' : '') +
    (ev.hy ? '<span class="chip tier t1">High-yield</span>' : '') +
    '</div></div></div>' +
    '<div class="block"><h3>What happened</h3><p class="plain">' + esc(ev.w) + '</p></div>';

  h += '<div class="nextprev">';
  if (all[i - 1]) h += '<a href="#/history/event/' + encodeURIComponent(all[i - 1].id) +
    '"><span class="d">Before</span><span class="t">' + all[i - 1].y + ' · ' +
    esc(all[i - 1].t) + '</span></a>';
  if (all[i + 1]) h += '<a class="r" href="#/history/event/' + encodeURIComponent(all[i + 1].id) +
    '"><span class="d">After</span><span class="t">' + all[i + 1].y + ' · ' +
    esc(all[i + 1].t) + '</span></a>';
  return histShell(h + '</div>');
}

function histActs() {
  var h = histCrumb('Acts') + histH1('The Acts, 1773 to 1947',
    'The legislative spine of British rule — and, in 1935, the direct ancestor of the Constitution of 1950.');
  h += (HIST.acts || []).map(function (a) {
    return '<a class="arow hy" href="#/history/act/' + encodeURIComponent(a.id) + '">' +
      '<span class="no">' + a.y + '</span><span class="tx"><b>' + esc(a.n) + '</b>' +
      '<i>' + esc(a.w) + '</i></span></a>';
  }).join('');
  return histShell(h);
}

function histActPage(id) {
  var a = histAct[id];
  if (!a) return notFound('No such Act.');
  var h = histCrumb('Acts') +
    '<div class="arthead"><div class="big">' + a.y + '</div><div class="ht">' +
    '<h1>' + esc(a.n) + '</h1></div></div>' +
    '<div class="block"><h3>Why it mattered</h3><p class="plain">' + esc(a.w) + '</p></div>' +
    '<div class="block"><h3>What it did</h3><ul class="entries">' +
    a.k.map(function (x, i) {
      return '<li><span class="en">' + (i + 1) + '</span><span>' + esc(x) + '</span></li>';
    }).join('') + '</ul></div>';

  /* The 1935 Act is the bridge between the two subjects. */
  if (a.id === 'a-1935' || a.id === 'a-1947') {
    h += '<div class="block"><h3>Where it leads</h3><div class="pills">' +
      '<a class="pill" href="#/a/246">Article 246 · the three Lists</a>' +
      '<a class="pill" href="#/schedule/7">Seventh Schedule</a>' +
      '<a class="pill" href="#/a/395">Article 395 · repeals this Act</a>' +
      '</div><p class="foot">The Constitution subject on this site carries the text these Acts led to.</p></div>';
  }
  return histShell(h);
}

function histPeople() {
  var h = histCrumb('People') + histH1('The people',
    (HIST.people || []).length + ' figures — reformers, nationalists, revolutionaries and the Viceroys they were arguing with.');
  h += (HIST.people || []).map(function (p) {
    return '<a class="arow hy" href="#/history/person/' + encodeURIComponent(p.id) + '">' +
      '<span class="no" style="font-size:var(--t-small);color:var(--dim)">' + esc(p.y) + '</span>' +
      '<span class="tx"><b>' + esc(p.n) + '</b><i>' + esc(shorten(p.w, 180)) + '</i></span>' +
      (p.hy ? '<span class="tag"><span class="chip tier t1">High-yield</span></span>' : '') +
      '</a>';
  }).join('');
  return histShell(h);
}

function histPersonPage(id) {
  var p = histPerson[id];
  if (!p) return notFound('No such person.');
  return histShell(histCrumb('People') +
    '<div class="arthead"><div class="ht"><h1>' + esc(p.n) + '</h1>' +
    '<div class="chips"><span class="chip">' + esc(p.y) + '</span>' +
    '<span class="chip case">' + esc(p.r) + '</span>' +
    (p.hy ? '<span class="chip tier t1">High-yield</span>' : '') + '</div></div></div>' +
    '<div class="block"><h3>What they did</h3><p class="plain">' + esc(p.w) + '</p></div>');
}

function histMovements() {
  var h = histCrumb('Movements') + histH1('The movements',
    'The set-pieces: what triggered each, how it was fought, and what it actually achieved.');
  h += (HIST.movements || []).map(function (m) {
    return '<a class="arow hy" href="#/history/movement/' + encodeURIComponent(m.id) + '">' +
      '<span class="no" style="font-size:var(--n-sm)">' + m.from + '</span>' +
      '<span class="tx"><b>' + esc(m.n) + ' · ' + m.from + '–' + m.to + '</b>' +
      '<i>' + esc(shorten(m.w, 190)) + '</i></span></a>';
  }).join('');
  return histShell(h);
}

function histMovementPage(id) {
  var m = histMove[id];
  if (!m) return notFound('No such movement.');
  return histShell(histCrumb('Movements') +
    '<div class="arthead"><div class="big">' + m.from + '</div><div class="ht">' +
    '<h1>' + esc(m.n) + '</h1><div class="chips">' +
    '<span class="chip">' + m.from + ' – ' + m.to + '</span>' +
    (m.hy ? '<span class="chip tier t1">High-yield</span>' : '') + '</div></div></div>' +
    '<div class="block"><h3>What set it off</h3><p class="plain">' + esc(m.cause) + '</p></div>' +
    '<div class="block"><h3>How it was fought</h3><p class="plain">' + esc(m.w) + '</p>' +
    '<p class="why">Led by ' + esc(m.lead) + '</p></div>' +
    '<div class="block"><h3>What it achieved</h3><p class="plain">' + esc(m.out) + '</p></div>');
}

function histHigh(slug) {
  var tabs = [['', 'Overview'], ['confusions', 'Confused pairs'], ['facts', 'Quick facts']];
  var body = '<div class="listtabs">' + tabs.map(function (t) {
    return '<button onclick="location.hash=\'#/history/high-yield' + (t[0] ? '/' + t[0] : '') +
      '\'" aria-pressed="' + (t[0] === (slug || '')) + '">' + esc(t[1]) + '</button>';
  }).join('') + '</div>';

  if (slug === 'confusions') {
    body += histH1('The pairs that get mixed up',
      'Plassey or Buxar, 1858 or 1861, which Act put dyarchy where, and which of Gandhi\'s three first campaigns was which.');
    body += (HIST_HY.confusions || []).map(cmpBlock).join('');
  } else if (slug === 'facts') {
    body += histH1('Quick facts', 'The tables that get asked as they stand.');
    body += (HIST_HY.facts || []).map(factsBlock).join('');
  } else {
    var ev = (HIST.timeline || []).filter(function (x) { return x.hy; });
    var pe = (HIST.people || []).filter(function (x) { return x.hy; });
    var mo = (HIST.movements || []).filter(function (x) { return x.hy; });
    var factCount = (HIST_HY.facts || []).reduce(function (a, g) { return a + g.items.length; }, 0);

    body += histH1('The exam layer',
      'What gets asked, marked across the timeline and gathered here.') +
      '<div class="figs">' + fig(ev.length, 'key events') + fig((HIST.acts || []).length, 'Acts') +
      fig(pe.length, 'key people') + fig(mo.length, 'movements') +
      fig((HIST_HY.confusions || []).length, 'confused pairs') +
      fig(factCount, 'quick facts') + '</div>';

    body += '<div class="block"><h3>Start here</h3><div class="grid">' +
      '<a class="pcard" href="#/history/high-yield/confusions"><div class="pn">' +
      (HIST_HY.confusions || []).length + '</div><div class="pt">Confused pairs</div>' +
      '<div class="pr">Plassey vs Buxar, 1858 vs 1861, the three big Acts, the three mass movements.</div></a>' +
      '<a class="pcard" href="#/history/high-yield/facts"><div class="pn">' + factCount +
      '</div><div class="pt">Quick facts</div><div class="pr">Viceroys, Congress sessions, newspapers, books, slogans, risings, trials, firsts.</div></a>' +
      '<a class="pcard" href="#/history/acts"><div class="pn">' + (HIST.acts || []).length +
      '</div><div class="pt">The Acts</div><div class="pr">1773 to 1947, and what each one actually did.</div></a>' +
      '</div></div>';

    body += '<div class="block"><h3>The events to know cold</h3>' +
      ev.sort(function (a, b) { return a.y - b.y; }).map(histRow).join('') + '</div>';
  }
  return histShell(histCrumb('High-yield') + body);
}

function historyRoute(seg) {
  switch (seg[0] || '') {
    case '':           return render(histTimeline());
    case 'high-yield': return render(histHigh(seg[1] || ''));
    case 'acts':       return render(histActs());
    case 'act':        return render(histActPage(seg[1]));
    case 'people':     return render(histPeople());
    case 'person':     return render(histPersonPage(seg[1]));
    case 'movements':  return render(histMovements());
    case 'movement':   return render(histMovementPage(seg[1]));
    case 'event':      return render(histEventPage(seg[1]));
    default:           return notFound('That address does not exist in Modern History.');
  }
}

SUBJECTS.push({
  id: 'history',
  name: 'Modern History',
  short: 'History',
  blurb: 'India from the Company\'s charter to the Constitution — the timeline, the Acts, the people and the movements.',
  tabs: [
    { href: '#/history',            label: 'Timeline',   match: ['', 'event'] },
    { href: '#/history/high-yield', label: 'High-yield', match: ['high-yield'] },
    { href: '#/history/acts',       label: 'Acts',       match: ['acts', 'act'] },
    { href: '#/history/people',     label: 'People',     match: ['people', 'person'] },
    { href: '#/history/movements',  label: 'Movements',  match: ['movements', 'movement'] },
    { href: '#/constitution',       label: '↔ Constitution', match: [] }
  ],
  stats: function () {
    return [(HIST.timeline || []).length + ' events', (HIST.acts || []).length + ' Acts',
            (HIST.people || []).length + ' people', (HIST.movements || []).length + ' movements'];
  },
  topics: function () {
    var facts = (HIST_HY.facts || []).reduce(function (a, g) { return a + g.items.length; }, 0);
    return [
      { t: 'The timeline, 1600 to 1950', href: '#/history',
        n: (HIST.timeline || []).length + ' events',
        w: 'Every event in order, grouped into eight eras, with the high-yield ones marked.' },
      { t: 'The Acts, 1773 to 1947', href: '#/history/acts',
        n: (HIST.acts || []).length + ' Acts',
        w: 'Regulating Act to Indian Independence Act \u2014 what each one actually changed.' },
      { t: 'The people', href: '#/history/people', n: (HIST.people || []).length + ' people',
        w: 'Governors-General, Viceroys, reformers, revolutionaries and the leaders of the Congress.' },
      { t: 'The mass movements', href: '#/history/movements',
        n: (HIST.movements || []).length + ' movements',
        w: 'Swadeshi to Quit India \u2014 cause, course, leadership and outcome.' },
      { t: 'History - confused pairs', href: '#/history/high-yield/confusions',
        n: (HIST_HY.confusions || []).length + ' pairs',
        w: 'Plassey or Buxar, 1858 or 1861, which Act put dyarchy where.' },
      { t: 'History - quick facts', href: '#/history/high-yield/facts', n: facts + ' facts',
        w: 'Viceroys, Congress sessions, newspapers, books, slogans, risings and trials.' }
    ];
  },
  route: historyRoute
});

/* =========================================================================
   SHARED RENDERERS

   Three of the four subjects are written rather than extracted, and they
   present the same three shapes: a page heading, a compared pair, and a
   table of facts. History grew its own copies of these first; they are
   here now so that a fourth subject costs a data file and a route, and no
   markup at all.
   ========================================================================= */

function pageH1(t, sub) {
  return '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
         esc(t) + '</h1>' + (sub ? '<p class="sub">' + esc(sub) + '</p>' : '');
}

/* A confused pair: a heading, two or more labelled rows, and the note that
   says which one the question is actually asking about. */
function cmpBlock(c) {
  return '<div class="cmp"><div class="cmph">' + esc(c.k) + '</div>' +
    c.rows.map(function (r) {
      return '<div class="cmpr"><div class="cmpk">' + esc(r[0]) + '</div>' +
             '<div class="cmpv">' + esc(r[1]) + '</div></div>';
    }).join('') +
    (c.note ? '<div class="cmpn">' + esc(c.note) + '</div>' : '') + '</div>';
}

/* A table of facts. Modern History calls the group `g` and its rows `items`;
   Economy and Static GK call them `h` and `rows`. Both are accepted rather
   than rewriting two data files to agree on a letter. */
function factsBlock(g) {
  var items = g.items || g.rows || [];
  return '<div class="block"><h3>' + esc(g.g || g.h || '') + '</h3>' +
    (g.note ? '<p class="foot before">' + esc(g.note) + '</p>' : '') +
    '<dl class="facts">' + items.map(function (it) {
      return '<dt>' + esc(it[0]) + '</dt><dd>' + esc(it[1]) + '</dd>';
    }).join('') + '</dl></div>';
}

/* The row of pill buttons that switches between views inside a subject. */
function subTabs(base, tabs, active) {
  return '<div class="listtabs">' + tabs.map(function (t) {
    return '<button onclick="location.hash=\'' + base + (t[0] ? '/' + t[0] : '') +
      '\'" aria-pressed="' + (t[0] === (active || '')) + '">' + esc(t[1]) + '</button>';
  }).join('') + '</div>';
}

/* =========================================================================
   SUBJECT: INDIAN ECONOMY
   The Five Year Plans, the 1991 reforms, and the standing topics.
   ========================================================================= */

var ECON = window.ECONOMY || {};
var econPlanById = {}, econTopicById = {};
(ECON.plans  || []).forEach(function (p) { econPlanById[p.id] = p; });
(ECON.topics || []).forEach(function (t) { econTopicById[t.id] = t; });

function econShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function econCrumb(here) {
  return '<div class="crumb"><a href="#/economy">Economy</a>' +
         (here ? ' → ' + esc(here) : '') + '</div>';
}

/* target vs achieved, written the way an answer sheet wants it */
function econRate(p) {
  if (p.kind !== 'plan') return '';
  if (p.act === null || p.act === undefined) return 'target ' + p.tgt + '%';
  return 'target ' + p.tgt + '% · achieved ' + p.act + '%';
}

function econPlanRow(p) {
  var met = p.kind === 'plan' && p.act !== null && p.act !== undefined && p.act >= p.tgt;
  return '<a class="arow hy" href="#/economy/plan/' + encodeURIComponent(p.id) + '">' +
    '<span class="no range' + (p.kind === 'gap' ? ' dimyear' : '') + '">' +
      p.from + '–' + String(p.to).slice(2) + '</span>' +
    '<span class="tx"><b>' + esc(p.n) + '</b>' +
      '<i>' + esc(p.theme || '') + (econRate(p) ? ' · ' + econRate(p) : '') + '</i></span>' +
    '<span class="tag">' + (p.kind === 'gap' ? '<span class="chip">no plan</span>' :
      (met ? '<span class="chip live">target met</span>' : '')) + '</span></a>';
}

function econHome() {
  var fyp = (ECON.plans || []).filter(function (p) { return p.kind === 'plan'; });
  var h = pageH1('Fifteen documents, sixty-six years',
    'India planned in five-year blocks from 1951 to 2017 — twelve plans, and three gaps where ' +
    'the country could not commit to five years at a time. The gaps matter as much as the plans.');

  h += '<div class="figs">' + fig(fyp.length, 'Five Year Plans') +
    fig((ECON.plans || []).length - fyp.length, 'plan gaps') +
    fig((ECON.topics || []).length, 'standing topics') +
    fig((ECON.confusions || []).length, 'confused pairs') + '</div>';

  h += '<div class="block"><h3>The plans, in order</h3>' +
    (ECON.plans || []).map(econPlanRow).join('') + '</div>';

  h += '<div class="block"><h3>Start here</h3><div class="grid">' +
    '<a class="pcard" href="#/economy/reforms"><div class="pn">1991</div>' +
    '<div class="pt">The year the economy changed shape</div>' +
    '<div class="pr">The crisis, liberalisation, privatisation, globalisation, and what did not follow.</div></a>' +
    '<a class="pcard" href="#/economy/topics"><div class="pn">' + (ECON.topics || []).length +
    '</div><div class="pt">Standing topics</div>' +
    '<div class="pr">Banking, the Budget and GST, poverty and schemes, agriculture, national income.</div></a>' +
    '<a class="pcard" href="#/economy/high-yield"><div class="pn">' +
    (ECON.confusions || []).length + '</div><div class="pt">Confused pairs and quick facts</div>' +
    '<div class="pr">Which plan had which objective, CRR against SLR, 1966 against 1991.</div></a>' +
    '</div></div>';

  return econShell(econCrumb('') + h);
}

function econPlanPage(id) {
  var p = econPlanById[id];
  if (!p) return econShell(econCrumb('') + '<div class="empty"><b>No such plan</b>' +
    'Nothing on this site is filed under that name.</div>');

  var all = ECON.plans || [];
  var i = all.indexOf(p);

  var h = econCrumb(p.n) +
    '<div class="arthead"><div class="big">' + p.from + '<span style="font-size:.5em">–' +
    String(p.to).slice(2) + '</span></div><div class="ht">' +
    '<h1>' + esc(p.n) + '</h1>' +
    '<div class="chips">' +
      (p.kind === 'gap' ? '<span class="chip">not a Five Year Plan</span>' :
        '<span class="chip live">Plan ' + p.no + '</span>') +
      (p.model ? '<span class="chip amd">' + esc(p.model) + '</span>' : '') +
    '</div></div></div>';

  h += '<div class="block"><h3>What it was for</h3>' +
    '<p class="plain">' + esc(p.theme) + '</p>' +
    '<p class="plain">' + esc(p.w) + '</p></div>';

  if (p.kind === 'plan') {
    h += '<div class="block"><h3>Growth</h3><div class="figs">' +
      fig(p.tgt + '%', 'target, a year') +
      (p.act === null || p.act === undefined
        ? '<div class="fig"><b style="color:var(--dim);font-size:var(--n-md)">not settled</b>' +
          '<span>achieved</span></div>'
        : fig(p.act + '%', 'achieved, a year')) + '</div></div>';
  }

  /* .entries puts its first cell in a fixed, non-shrinking column, because it
     was built for a Schedule's entry NUMBER. A whole sentence in there cannot
     wrap and runs off the side of a phone. .trail is the right list: a short
     marker, then text that flows. */
  h += '<div class="block"><h3>What happened in it</h3><ul class="trail">' +
    (p.key || []).map(function (k, i) {
      return '<li><span class="an">' + (i + 1) + '</span>' +
             '<span class="ad">' + esc(k) + '</span></li>';
    }).join('') + '</ul></div>';

  if (p.note) h += '<div class="block"><div class="why">' + esc(p.note) + '</div></div>';

  var prev = all[i - 1], next = all[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/economy/plan/' + encodeURIComponent(prev.id) + '">' +
      '<span class="d">Before</span><span class="t">' + esc(prev.n) + '</span></a>' : '<span></span>') +
    (next ? '<a class="r" href="#/economy/plan/' + encodeURIComponent(next.id) + '">' +
      '<span class="d">After</span><span class="t">' + esc(next.n) + '</span></a>' : '<span></span>') +
    '</div>';

  return econShell(h);
}

function econReform() {
  var r = ECON.reform || {};
  var h = econCrumb('1991') + pageH1(r.title || '1991', r.lede || '');

  h += '<div class="block"><h3>' + esc((r.crisis || {}).h || 'How the crisis built') + '</h3>' +
    '<p class="plain">' + esc((r.crisis || {}).w || '') + '</p>' +
    '<dl class="facts">' + ((r.crisis || {}).rows || []).map(function (x) {
      return '<dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd>';
    }).join('') + '</dl></div>';

  (r.lpg || []).forEach(function (part) {
    h += '<div class="block"><h3>' + esc(part.k) + '</h3>' +
      '<p class="plain">' + esc(part.w) + '</p>' +
      '<dl class="facts">' + part.rows.map(function (x) {
        return '<dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd>';
      }).join('') + '</dl></div>';
  });

  h += factsBlock({ h: 'The committees behind the reforms', rows: r.committees || [] });
  h += factsBlock({ h: 'What followed, and what did not',
                    note: 'The criticisms are here alongside the achievements, because both are asked.',
                    rows: r.after || [] });

  return econShell(h);
}

function econTopics() {
  var h = econCrumb('Topics') + pageH1('The standing topics',
    'Eight subjects that do not belong to any one plan. Each is a study page: what the thing is, then the tables the questions come from.');
  h += '<div class="grid">' + (ECON.topics || []).map(function (t) {
    var rows = t.blocks.reduce(function (a, b) { return a + b.rows.length; }, 0);
    return '<a class="pcard" href="#/economy/topic/' + encodeURIComponent(t.id) + '">' +
      '<div class="pn">' + esc(t.n) + '</div><div class="pt">' + esc(t.w) + '</div>' +
      '<div class="pr">' + t.blocks.length + ' tables · ' + rows + ' facts</div></a>';
  }).join('') + '</div>';
  return econShell(h);
}

function econTopicPage(id) {
  var t = econTopicById[id];
  if (!t) return econShell(econCrumb('Topics') + '<div class="empty"><b>No such topic</b>' +
    'Nothing on this site is filed under that name.</div>');
  var h = '<div class="crumb"><a href="#/economy">Economy</a> → ' +
    '<a href="#/economy/topics">Topics</a> → ' + esc(t.n) + '</div>' +
    pageH1(t.n, t.w);
  if (t.intro) h += '<p class="plain stack">' + esc(t.intro) + '</p>';
  h += t.blocks.map(factsBlock).join('');
  return econShell(h);
}

function econHigh(slug) {
  var tabs = [['', 'Confused pairs'], ['facts', 'Quick facts']];
  var h = econCrumb('High-yield') + subTabs('#/economy/high-yield', tabs, slug);

  if (slug === 'facts') {
    h += pageH1('Quick facts', 'The tables that are asked as they stand.');
    h += (ECON.facts || []).map(factsBlock).join('');
  } else {
    h += pageH1('The pairs that get mixed up',
      'Which plan had which objective, CRR against SLR, repo against reverse repo, and the two devaluations.');
    h += (ECON.confusions || []).map(cmpBlock).join('');
  }
  return econShell(h);
}

function econRoute(seg) {
  switch (seg[0] || '') {
    case '':           return render(econHome());
    case 'plan':       return render(econPlanPage(seg[1]));
    case 'reforms':    return render(econReform());
    case 'topics':     return render(econTopics());
    case 'topic':      return render(econTopicPage(seg[1]));
    case 'high-yield': return render(econHigh(seg[1] || ''));
    default:           return notFound('That address does not exist in Economy.');
  }
}

SUBJECTS.push({
  id: 'economy',
  name: 'Indian Economy',
  short: 'Economy',
  blurb: 'The Five Year Plans one by one, the 1991 reforms in full, and the standing topics — banking, the Budget, GST, poverty and agriculture.',
  tabs: [
    { href: '#/economy',            label: 'Five Year Plans', match: ['', 'plan'] },
    { href: '#/economy/reforms',    label: '1991 reforms',    match: ['reforms'] },
    { href: '#/economy/topics',     label: 'Topics',          match: ['topics', 'topic'] },
    { href: '#/economy/high-yield', label: 'High-yield',      match: ['high-yield'] }
  ],
  stats: function () {
    var fyp = (ECON.plans || []).filter(function (p) { return p.kind === 'plan'; }).length;
    return [fyp + ' plans', (ECON.topics || []).length + ' topics',
            (ECON.confusions || []).length + ' confused pairs'];
  },
  topics: function () {
    var out = [
      { t: 'The Five Year Plans', href: '#/economy',
        n: (ECON.plans || []).length + ' plans and gaps',
        w: 'Every plan from 1951 to 2017 — its model, its target, what it achieved and what happened in it.' },
      { t: 'The 1991 reforms', href: '#/economy/reforms', n: 'liberalisation, privatisation, globalisation',
        w: 'The balance of payments crisis, the gold flown to London, and the three kinds of change that followed.' }
    ];
    (ECON.topics || []).forEach(function (t) {
      out.push({ t: t.n, href: '#/economy/topic/' + encodeURIComponent(t.id), w: t.w,
                 k: t.blocks.map(function (b) { return b.h; }).join(' '),
                 n: t.blocks.reduce(function (a, b) { return a + b.rows.length; }, 0) + ' facts' });
    });
    out.push({ t: 'Economy — confused pairs and quick facts', href: '#/economy/high-yield',
               n: (ECON.confusions || []).length + ' pairs',
               w: 'Which plan had which objective, CRR against SLR, 1966 against 1991.' });
    return out;
  },
  route: econRoute
});

/* =========================================================================
   SUBJECT: STATIC GENERAL KNOWLEDGE
   Eighteen packs of the material that does not change from year to year.
   ========================================================================= */

var GKD = window.GK || {};
var gkPackById = {};
(GKD.packs || []).forEach(function (p) { gkPackById[p.id] = p; });

function gkRows(p) {
  return p.blocks.reduce(function (a, b) { return a + b.rows.length; }, 0);
}

function gkShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function gkHome() {
  var total = (GKD.packs || []).reduce(function (a, p) { return a + gkRows(p); }, 0);
  var h = '<div class="crumb">Static GK</div>' +
    pageH1('The facts that do not move',
      'Eighteen packs of static general knowledge — chosen because the answer is the same this year as ' +
      'last. Current affairs are deliberately not here: they go stale, and mixing them in is how a ' +
      'study file quietly stops being true.');

  h += '<div class="figs">' + fig((GKD.packs || []).length, 'packs') +
    fig(total, 'facts') + fig((GKD.confusions || []).length, 'confused pairs') + '</div>';

  h += '<div class="block"><h3>The packs</h3><div class="grid">' +
    (GKD.packs || []).map(function (p) {
      return '<a class="pcard" href="#/gk/pack/' + encodeURIComponent(p.id) + '">' +
        '<div class="pn">' + esc(p.n) + '</div><div class="pt">' + esc(p.w) + '</div>' +
        '<div class="pr">' + p.blocks.length + ' tables · ' + gkRows(p) + ' facts</div></a>';
    }).join('') + '</div></div>';

  return gkShell(h);
}

function gkPackPage(id) {
  var p = gkPackById[id];
  if (!p) return gkShell('<div class="crumb"><a href="#/gk">Static GK</a></div>' +
    '<div class="empty"><b>No such pack</b>Nothing on this site is filed under that name.</div>');

  var packs = GKD.packs || [], i = packs.indexOf(p);
  var h = '<div class="crumb"><a href="#/gk">Static GK</a> → ' + esc(p.n) + '</div>' +
    pageH1(p.n, p.w);
  if (p.intro) h += '<p class="plain stack">' + esc(p.intro) + '</p>';
  h += p.blocks.map(factsBlock).join('');

  var prev = packs[i - 1], next = packs[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/gk/pack/' + encodeURIComponent(prev.id) + '">' +
      '<span class="d">Previous</span><span class="t">' + esc(prev.n) + '</span></a>' : '<span></span>') +
    (next ? '<a class="r" href="#/gk/pack/' + encodeURIComponent(next.id) + '">' +
      '<span class="d">Next</span><span class="t">' + esc(next.n) + '</span></a>' : '<span></span>') +
    '</div>';
  return gkShell(h);
}

function gkConfusions() {
  var h = '<div class="crumb"><a href="#/gk">Static GK</a> → Confused pairs</div>' +
    pageH1('The pairs that get mixed up',
      'Kathak or Kathakali, which lake is the largest what, and how many lions you can actually see.');
  h += (GKD.confusions || []).map(cmpBlock).join('');
  return gkShell(h);
}

function gkRoute(seg) {
  switch (seg[0] || '') {
    case '':           return render(gkHome());
    case 'pack':       return render(gkPackPage(seg[1]));
    case 'confusions': return render(gkConfusions());
    default:           return notFound('That address does not exist in Static GK.');
  }
}

SUBJECTS.push({
  id: 'gk',
  name: 'Static General Knowledge',
  short: 'Static GK',
  blurb: 'National symbols, dances, awards, sports, rivers and dams, parks, heritage sites, days, books, headquarters, science and the states.',
  tabs: [
    { href: '#/gk',             label: 'All packs',      match: ['', 'pack'] },
    { href: '#/gk/confusions',  label: 'Confused pairs', match: ['confusions'] }
  ],
  stats: function () {
    var total = (GKD.packs || []).reduce(function (a, p) { return a + gkRows(p); }, 0);
    return [(GKD.packs || []).length + ' packs', total + ' facts'];
  },
  topics: function () {
    return (GKD.packs || []).map(function (p) {
      return { t: p.n, href: '#/gk/pack/' + encodeURIComponent(p.id), w: p.w,
               k: p.blocks.map(function (b) { return b.h; }).join(' '),
               n: gkRows(p) + ' facts' };
    }).concat([{ t: 'Static GK — confused pairs', href: '#/gk/confusions',
                 n: (GKD.confusions || []).length + ' pairs',
                 w: 'Kathak or Kathakali, which lake is the largest what, and how many lions are visible.' }]);
  },
  route: gkRoute
});

/* =========================================================================
   SUBJECT: BIOLOGY

   Three topics, not a course: diseases, nutrients, and the glands with
   their hormones. They are here because between them they account for most
   of the biology a general awareness paper asks, and because each is a
   table-learning job rather than a reasoning one.

   The Static GK section keeps its short forty-row summary of the same
   ground. That is the revision version; this is the full one.
   ========================================================================= */

var BIO = window.BIOLOGY || {};
var bioTopicById = {};
(BIO.topics || []).forEach(function (t) { bioTopicById[t.id] = t; });

function bioRows(t) {
  return t.blocks.reduce(function (a, b) { return a + b.rows.length; }, 0);
}

function bioShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function bioHome() {
  var total = (BIO.topics || []).reduce(function (a, t) { return a + bioRows(t); }, 0);
  var h = '<div class="crumb">Biology</div>' +
    pageH1('Three topics, in full',
      'Diseases, nutrients, and the glands and their hormones \u2014 with every table complete rather than summarised, because this is the material that is asked row by row.');

  h += '<div class="figs">' + fig((BIO.topics || []).length, 'topics') + fig(total, 'facts') +
    fig((BIO.confusions || []).length, 'confused pairs') + '</div>';

  h += '<div class="block"><h3>The topics</h3><div class="grid">' +
    (BIO.topics || []).map(function (t) {
      return '<a class="pcard" href="#/biology/topic/' + encodeURIComponent(t.id) + '">' +
        '<div class="pn">' + esc(t.n) + '</div><div class="pt">' + esc(t.w) + '</div>' +
        '<div class="pr">' + t.blocks.length + ' tables \u00b7 ' + bioRows(t) + ' facts</div></a>';
    }).join('') + '</div></div>';

  return bioShell(h);
}

function bioTopicPage(id) {
  var t = bioTopicById[id];
  if (!t) return bioShell('<div class="crumb"><a href="#/biology">Biology</a></div>' +
    '<div class="empty"><b>No such topic</b>Nothing on this site is filed under that name.</div>');

  var topics = BIO.topics || [], i = topics.indexOf(t);
  var h = '<div class="crumb"><a href="#/biology">Biology</a> \u2192 ' + esc(t.n) + '</div>' +
    pageH1(t.n, t.w);
  if (t.intro) h += '<p class="plain stack">' + esc(t.intro) + '</p>';
  h += t.blocks.map(factsBlock).join('');

  var prev = topics[i - 1], next = topics[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/biology/topic/' + encodeURIComponent(prev.id) + '">' +
      '<span class="d">Previous</span><span class="t">' + esc(prev.n) + '</span></a>' : '<span></span>') +
    (next ? '<a class="r" href="#/biology/topic/' + encodeURIComponent(next.id) + '">' +
      '<span class="d">Next</span><span class="t">' + esc(next.n) + '</span></a>' : '<span></span>') +
    '</div>';
  return bioShell(h);
}

function bioHigh(slug) {
  var tabs = [['', 'Confused pairs'], ['facts', 'Quick facts']];
  var h = '<div class="crumb"><a href="#/biology">Biology</a> \u2192 High-yield</div>' +
    subTabs('#/biology/high-yield', tabs, slug);

  if (slug === 'facts') {
    h += pageH1('Quick facts',
      'Who discovered what, the pathogens by their scientific names, and the one-line answers that keep coming back.');
    h += (BIO.facts || []).map(factsBlock).join('');
  } else {
    h += pageH1('The pairs that get mixed up',
      'Which mosquito carries what, kwashiorkor against marasmus, and the two diseases that share the word diabetes.');
    h += (BIO.confusions || []).map(cmpBlock).join('');
  }
  return bioShell(h);
}

function bioRoute(seg) {
  switch (seg[0] || '') {
    case '':           return render(bioHome());
    case 'topic':      return render(bioTopicPage(seg[1]));
    case 'high-yield': return render(bioHigh(seg[1] || ''));
    default:           return notFound('That address does not exist in Biology.');
  }
}

SUBJECTS.push({
  id: 'biology',
  name: 'Biology',
  short: 'Biology',
  blurb: 'Diseases and what causes them, the nutrients and the deficiency diseases, and every gland with its hormones and disorders.',
  tabs: [
    { href: '#/biology',            label: 'The three topics', match: ['', 'topic'] },
    { href: '#/biology/high-yield', label: 'High-yield', match: ['high-yield'] }
  ],
  stats: function () {
    var total = (BIO.topics || []).reduce(function (a, t) { return a + bioRows(t); }, 0);
    return [(BIO.topics || []).length + ' topics', total + ' facts',
            (BIO.confusions || []).length + ' confused pairs'];
  },
  topics: function () {
    return (BIO.topics || []).map(function (t) {
      return { t: t.n, href: '#/biology/topic/' + encodeURIComponent(t.id), w: t.w,
               k: t.blocks.map(function (b) { return b.h; }).join(' '),
               n: bioRows(t) + ' facts' };
    }).concat([{ t: 'Biology - confused pairs and quick facts', href: '#/biology/high-yield',
                 n: (BIO.confusions || []).length + ' pairs',
                 w: 'Anopheles against Aedes, kwashiorkor against marasmus, and mellitus against insipidus.' }]);
  },
  route: bioRoute
});

/* ------------------------------------------------------------------ about */

function aboutPage() {
  render('<div class="wrap artpage"><div class="crumb">About</div>' +
  '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s5);font-weight:600">' +
  'How this was built, and what to trust</h1>' +

  '<p class="plain">Five subjects: the Constitution of India — including the Constituent ' +
  'Assembly that wrote it — Modern History, the Indian Economy, Static General Knowledge ' +
  'and Biology. They are organised by topic rather than by subject, because a reader ' +
  'arrives knowing what they need to revise rather than which subject it belongs to.</p>' +

  '<div class="block"><h3>The Constitution: where the text comes from</h3>' +
  '<p class="plain">Every article number, every official heading and every word of official ' +
  'text on this site was extracted from the Government of India\'s own publication: ' +
  '<em>The Constitution of India [As on 1st May, 2024]</em>, Legislative Department, ' +
  'Ministry of Law and Justice — a 402-page document. Nothing was typed in from memory.</p>' +
  '<p class="why">That edition was then checked against the later ' +
  '<em>[As on 11th November, 2025]</em> edition, which confirms that the 106th Amendment ' +
  'is still the most recent one enacted. So the text here is current.</p></div>' +

  '<div class="block"><h3>Where the amendment history comes from</h3>' +
  '<p class="plain">The official edition footnotes every change ever made to every clause — ' +
  'which Amendment Act made it, in which year, and from what date. Those footnotes were ' +
  'read programmatically and attached to the articles they belong to. That is why an ' +
  'article\'s trail here is specific rather than approximate.</p>' +
  '<p class="why">Where a footnote cites two Acts at once, a commencement date can belong ' +
  'to either. Rather than guess, this site shows a date only where it clearly attaches to ' +
  'that Act, and shows nothing where it does not. A missing date is deliberate.</p></div>' +

  '<div class="block"><h3>The other subjects are written, not extracted</h3>' +
  '<p class="plain">Modern History, the Indian Economy, Static GK, Biology and the account ' +
  'of the Constituent Assembly have no equivalent single government document behind them, ' +
  'so they are written from the established record rather than lifted from a source. That is a weaker guarantee than the ' +
  'Constitution\'s, and it is stated rather than hidden: the head of each data file says ' +
  'which kinds of statement it holds and how firm each kind is.</p>' +
  '<ul class="trail" style="margin-top:var(--s4)">' +
  '<li><span class="an">Firm</span><span class="ad">Dates, structures, who founded what and ' +
  'when. A plan\'s years, an Act\'s provisions, a river\'s source.</span></li>' +
  '<li><span class="an">Soft</span><span class="ad">The achieved growth rate of a Five Year ' +
  'Plan. These come from the Planning Commission\'s own end-of-plan reviews and move by a ' +
  'few tenths between sources depending on the GDP base year. The first decimal is safe; ' +
  'the last is not.</span></li>' +
  '<li><span class="an">Dated</span><span class="ad">Foreign exchange reserves, tax slabs, ' +
  'the number of World Heritage Sites. Every one of these carries the date it is true as ' +
  'of, so a stale figure reads as stale rather than as wrong.</span></li>' +
  '</ul>' +
  '<p class="why">Where the confidently repeated answer is not the accurate one, the page ' +
  'says so instead of repeating it. India has no national game and no national language. ' +
  'Malaria is protozoan, not bacterial. Only three of the national emblem\'s four lions ' +
  'are visible. Those corrections are worth more than the easy rows around them.</p></div>' +

  '<div class="block"><h3>What was written rather than extracted</h3>' +
  '<p class="plain">The plain-English explanation under each article, the one-line summary ' +
  'of each amendment, the description of each Schedule, and the account of each case were ' +
  'written for this site. They are summaries, and summaries lose things. The official text ' +
  'sits directly underneath every one of them so you can check what was lost.</p>' +
  '<p class="why">This is a study aid, not legal advice. For anything that matters, read ' +
  'the article itself, and then the judgment.</p></div>' +

  '<div class="block"><h3>Why the count here may not match your textbook</h3>' +
  '<p class="plain">This site lists <b>506</b> article numbers: 471 in force and 35 repealed. ' +
  'You will often see “395 articles” or “448 articles” instead. All three can be true, ' +
  'because they count different things.</p>' +
  '<ul class="trail" style="margin-top:var(--s4)">' +
  '<li><span class="an">395</span><span class="ad">Plain-numbered articles, 1 to 395 — the ' +
  'Constitution as adopted in 1949. Every one of them still has its number, even where the ' +
  'article itself has been repealed.</span></li>' +
  '<li><span class="an">111</span><span class="ad">Articles inserted by amendment and given a ' +
  'letter: 21A, 31C, 51A, 243ZH, 371J, 330A and the rest.</span></li>' +
  '<li><span class="an">506</span><span class="ad">The two added together — every article ' +
  'number that appears in the official text.</span></li>' +
  '<li><span class="an">35</span><span class="ad">Repealed: 24 plain-numbered and 11 lettered. ' +
  'They are kept here, marked, because a number that has been emptied is itself worth ' +
  'knowing about.</span></li>' +
  '<li><span class="an">471</span><span class="ad">What is actually in force today.</span></li>' +
  '</ul>' +
  '<p class="why">That the plain-numbered articles come to exactly 395 is not a coincidence — ' +
  'it is the check on the extraction. If it had found a false article the total would have ' +
  'been 396, and if it had missed one it would have been 394.</p></div>' +

  '<div class="block"><h3>Why some fields are empty</h3>' +
  '<p class="plain">Most articles have never been the subject of a landmark judgment. ' +
  'Rather than attach a vaguely related case to every article, this site leaves the field ' +
  'out. ' + CASES.length + ' judgments are listed, against the articles they actually ' +
  'settled. The same rule applies everywhere: a commencement date that cannot be pinned to ' +
  'one Act is left blank, and no article carries an invented “asked N times” figure.</p></div>' +

  '<div class="block"><h3>Offline, and installable as an app</h3>' +
  '<p class="plain">All five subjects are loaded into your browser the first time you open ' +
  'the page — about 1.4 MB in total, once. After that the site works with no network at ' +
  'all: on a train, on a plane, or with the data switched off.</p>' +
  '<p class="plain stack">You can also install it, so it gets its own icon and opens in its ' +
  'own window without the browser bars. In Chrome and Edge the button below installs it in ' +
  'one click; in other browsers it shows you where the option lives in that browser\'s menu.</p>' +
  '<p class="stack"><button class="installbtn big" onclick="window.__install&amp;&amp;window.__install.trigger()">' +
  '↓ Install as an app</button></p>' +
  '<p class="why">Nothing is uploaded and nothing is tracked, installed or not. The install ' +
  'is only your browser keeping the files and giving them an icon.</p></div>' +

  '</div>');
}

function notFound(msg) {
  render('<div class="wrap"><div class="empty"><b>Nothing here</b>' + esc(msg) +
    '<div class="stack"><a class="pill" href="#/">Back to all topics</a></div></div></div>');
}

/* ----------------------------------------------------------------- search */

var searchIndex = null;
function buildIndex() {
  if (searchIndex) return searchIndex;
  searchIndex = [];
  ARTICLES.forEach(function (a) {
    var pl = PLAIN[a.a];
    /* The summary line is the plain-English note where there is one: in a list
       of results, what the article means is more use than which Part it is in. */
    var sub = pl && pl.p ? pl.p : 'Part ' + a.p + ' · ' + titleCase(a.pt);
    searchIndex.push({
      kind: 'article', id: a.a, no: 'Art. ' + a.a,
      title: a.h || 'Repealed', sub: sub,
      /* Just the "why it matters" note: the heading is already covered by
         `title` and the meaning by `sub`, so this field is what lets a note
         that OPENS with a term ("President's rule, and the most abused
         article...") outrank everything that only mentions it. */
      near: (pl && pl.w ? pl.w : '').toLowerCase(),
      hay: (a.a + ' article ' + a.a + ' ' + (a.h || '') + ' ' + (pl ? pl.p + ' ' + (pl.w || '') : '') +
            ' ' + (a.t || '') + ' ' + a.pt + ' ' + (a.c || '')).toLowerCase(),
      href: '#/a/' + encodeURIComponent(a.a), num: a.a.toLowerCase(), gone: !!a.om
    });
  });
  CASES.forEach(function (c) {
    searchIndex.push({
      kind: 'case', id: c.id, no: String(c.y), title: c.n,
      sub: c.h, near: (c.n + ' ' + c.h + ' ' + (c.note || '')).toLowerCase(),
      hay: (c.n + ' ' + c.h + ' ' + (c.note || '') + ' ' + (c.a || []).join(' ')).toLowerCase(),
      href: '#/case/' + encodeURIComponent(c.id), num: ''
    });
  });
  AMENDMENTS.forEach(function (m) {
    searchIndex.push({
      kind: 'amendment', id: m.n, no: ordinal(m.n),
      title: ordinal(m.n) + ' Amendment, ' + m.y, sub: m.s, near: m.s.toLowerCase(),
      hay: (ordinal(m.n) + ' amendment ' + m.n + ' ' + m.y + ' ' + m.s + ' ' +
            m.arts.join(' ')).toLowerCase(),
      href: '#/amendment/' + m.n, num: ''
    });
  });
  /* Modern History is searched from the same box, so "Plassey" or "Dandi" or
     "Curzon" finds its way in without the reader having to switch subject
     first. The kind label on each row says which subject it came from. */
  (HIST.timeline || []).forEach(function (e) {
    searchIndex.push({
      kind: 'history', id: e.id, no: String(e.y), title: e.t,
      sub: e.w, near: (e.t + ' ' + e.w).toLowerCase(),
      hay: (e.y + ' ' + e.t + ' ' + e.w + ' ' + (e.d || '')).toLowerCase(),
      href: '#/history/event/' + encodeURIComponent(e.id), num: ''
    });
  });
  (HIST.people || []).forEach(function (p) {
    var yr = /\d{4}/.exec(p.y);          // "1772–1833" / "Viceroy 1899–1905"
    searchIndex.push({
      kind: 'person', id: p.id, no: yr ? yr[0] : '', title: p.n, sub: p.r + ' · ' + p.y,
      near: (p.n + ' ' + p.w).toLowerCase(),
      hay: (p.n + ' ' + p.r + ' ' + p.y + ' ' + p.w).toLowerCase(),
      href: '#/history/person/' + encodeURIComponent(p.id), num: ''
    });
  });
  (HIST.acts || []).forEach(function (a) {
    searchIndex.push({
      kind: 'act', id: a.id, no: String(a.y), title: a.n, sub: a.w,
      near: (a.n + ' ' + a.w).toLowerCase(),
      hay: (a.y + ' ' + a.n + ' ' + a.w + ' ' + a.k.join(' ')).toLowerCase(),
      href: '#/history/act/' + encodeURIComponent(a.id), num: ''
    });
  });
  (HIST.movements || []).forEach(function (m) {
    searchIndex.push({
      kind: 'movement', id: m.id, no: String(m.from), title: m.n,
      sub: m.w, near: (m.n + ' ' + m.w).toLowerCase(),
      hay: (m.n + ' ' + m.w + ' ' + m.cause + ' ' + m.out + ' ' + m.lead).toLowerCase(),
      href: '#/history/movement/' + encodeURIComponent(m.id), num: ''
    });
  });

  /* Economy. The plans are indexed one by one, and each standing topic is
     indexed twice: once under its own name, and once per table inside it —
     so "lactometer" or "primary deficit" finds the table it sits in, rather
     than only the topic that happens to contain it. */
  (ECON.plans || []).forEach(function (p) {
    searchIndex.push({
      kind: 'plan', id: p.id, no: String(p.from), title: p.n,
      sub: p.theme + (p.kind === 'plan' ? ' \u00b7 target ' + p.tgt + '%' : ''),
      near: (p.n + ' ' + p.theme + ' ' + p.w).toLowerCase(),
      hay: (p.n + ' ' + p.from + ' ' + p.to + ' ' + p.theme + ' ' + p.w + ' ' +
            (p.model || '') + ' ' + (p.key || []).join(' ') + ' ' + (p.note || '')).toLowerCase(),
      href: '#/economy/plan/' + encodeURIComponent(p.id), num: ''
    });
  });
  (ECON.topics || []).forEach(function (t) {
    var href = '#/economy/topic/' + encodeURIComponent(t.id);
    var all = t.blocks.map(function (b) {
      return b.h + ' ' + b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ');
    }).join(' ');
    searchIndex.push({
      kind: 'economy', id: t.id, no: '', title: t.n, sub: t.w,
      near: (t.n + ' ' + t.w + ' ' + (t.intro || '')).toLowerCase(),
      hay: (t.n + ' ' + t.w + ' ' + (t.intro || '') + ' ' + all).toLowerCase(),
      href: href, num: ''
    });
    t.blocks.forEach(function (b, i) {
      searchIndex.push({
        kind: 'economy', id: t.id + '-' + i, no: '', title: b.h, sub: t.n,
        near: b.h.toLowerCase(),
        hay: (b.h + ' ' + b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
        href: href, num: ''
      });
    });
  });
  if (ECON.reform) {
    searchIndex.push({
      kind: 'economy', id: 'reforms', no: '1991', title: ECON.reform.title,
      sub: ECON.reform.lede,
      near: ('1991 reforms liberalisation privatisation globalisation lpg ' +
             ECON.reform.lede).toLowerCase(),
      hay: ('1991 lpg ' + ECON.reform.title + ' ' + ECON.reform.lede + ' ' +
            ((ECON.reform.crisis || {}).rows || []).map(function (r) { return r[0] + ' ' + r[1]; }).join(' ') + ' ' +
            (ECON.reform.lpg || []).map(function (p) {
              return p.k + ' ' + p.w + ' ' + p.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ');
            }).join(' ') + ' ' +
            (ECON.reform.committees || []).map(function (r) { return r[0] + ' ' + r[1]; }).join(' ') + ' ' +
            (ECON.reform.after || []).map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
      href: '#/economy/reforms', num: ''
    });
  }

  /* Static GK, on the same pattern: the pack, then each table within it. */
  (GKD.packs || []).forEach(function (p) {
    var href = '#/gk/pack/' + encodeURIComponent(p.id);
    var all = p.blocks.map(function (b) {
      return b.h + ' ' + b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ');
    }).join(' ');
    searchIndex.push({
      kind: 'static gk', id: p.id, no: '', title: p.n, sub: p.w,
      near: (p.n + ' ' + p.w + ' ' + (p.intro || '')).toLowerCase(),
      hay: (p.n + ' ' + p.w + ' ' + (p.intro || '') + ' ' + all).toLowerCase(),
      href: href, num: ''
    });
    p.blocks.forEach(function (b, i) {
      searchIndex.push({
        kind: 'static gk', id: p.id + '-' + i, no: '', title: b.h, sub: p.n,
        near: b.h.toLowerCase(),
        hay: (b.h + ' ' + b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
        href: href, num: ''
      });
    });
  });

  /* The Constituent Assembly. Every table is indexed on its own, so a name
     that appears in one row - "Saadulla", "Dakshayani", "Raizada" - reaches
     the table it sits in rather than only the section. */
  (function () {
    var view = { story: '', timeline: 'dates', committees: 'committees',
                 people: 'people', debates: 'debates', facts: 'dates' };
    Object.keys(view).forEach(function (key) {
      (ASM[key] || []).forEach(function (b, i) {
        searchIndex.push({
          kind: 'assembly', id: key + '-' + i, no: '', title: b.h,
          sub: 'The Constituent Assembly',
          near: (b.h + ' constituent assembly').toLowerCase(),
          hay: (b.h + ' constituent assembly ' + (b.note || '') + ' ' +
                b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
          href: '#/assembly' + (view[key] ? '/' + view[key] : ''), num: ''
        });
      });
    });
    (ASM.confusions || []).forEach(function (c, i) {
      searchIndex.push({
        kind: 'assembly', id: 'cmp-' + i, no: '', title: c.k,
        sub: 'Constituent Assembly \u00b7 confused pair',
        near: c.k.toLowerCase(),
        hay: (c.k + ' ' + (c.note || '') + ' ' +
              c.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
        href: '#/assembly/dates', num: ''
      });
    });
  })();

  /* Biology, on the same pattern as Economy and Static GK: the topic, then
     every table inside it, so "acromegaly" or "Culex" lands on the table. */
  (BIO.topics || []).forEach(function (t) {
    var href = '#/biology/topic/' + encodeURIComponent(t.id);
    var all = t.blocks.map(function (b) {
      return b.h + ' ' + b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ');
    }).join(' ');
    searchIndex.push({
      kind: 'biology', id: t.id, no: '', title: t.n, sub: t.w,
      near: (t.n + ' ' + t.w + ' ' + (t.intro || '')).toLowerCase(),
      hay: (t.n + ' ' + t.w + ' ' + (t.intro || '') + ' ' + all).toLowerCase(),
      href: href, num: ''
    });
    t.blocks.forEach(function (b, i) {
      searchIndex.push({
        kind: 'biology', id: t.id + '-' + i, no: '', title: b.h, sub: t.n,
        near: b.h.toLowerCase(),
        hay: (b.h + ' ' + b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
        href: href, num: ''
      });
    });
  });
  (BIO.confusions || []).forEach(function (c, i) {
    searchIndex.push({
      kind: 'biology', id: 'cmp-' + i, no: '', title: c.k,
      sub: 'Biology \u00b7 confused pair', near: c.k.toLowerCase(),
      hay: (c.k + ' ' + (c.note || '') + ' ' +
            c.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
      href: '#/biology/high-yield', num: ''
    });
  });

  SCHEDULES.forEach(function (s) {
    var extra = '';
    if (s.items) extra = s.items.map(function (e) { return e.t; }).join(' ');
    if (s.lists) Object.keys(s.lists).forEach(function (k) {
      extra += ' ' + k + ' ' + s.lists[k].map(function (e) { return e.t; }).join(' ');
    });
    searchIndex.push({
      kind: 'schedule', id: s.n, no: ORD[s.n], title: s.name + ' — ' + s.sub,
      sub: s.stat, near: (s.sub + ' ' + s.p).toLowerCase(),
      hay: (s.name + ' ' + s.sub + ' ' + s.p + ' ' + extra).toLowerCase(),
      href: '#/schedule/' + s.n, num: ''
    });
  });
  return searchIndex;
}

var selIdx = -1, lastHits = [];

function runSearch(raw) {
  var q = raw.trim().toLowerCase();
  if (q.length < 1) { closeResults(); return; }
  var idx = buildIndex(), hits = [];

  /* "article 21" / "art 21" / "21" all mean article 21 */
  var artQ = /^(?:article|art\.?|a)?\s*(\d{1,3}[a-z]?(?:-[a-z])?)$/i.exec(q);
  var terms = q.split(/\s+/).filter(Boolean);

  /* A term matched as a bare substring is almost always wrong: "gst" is
     inside "amongst", "act" inside "practice" — and, as testing found, "dance"
     is inside "accordance", which put Article 356 above the folk-dance table
     for the query "punjab dance". Length is no protection, so every term must
     now begin at a word boundary. The boundary is only at the START, so a stem
     still matches: "amend" finds "amendment", "constitut" finds
     "constitutional". A term that does not begin with a letter or digit is
     matched plainly, because \\b before "\u20b9" would never match. */
  var tests = terms.map(function (t) {
    if (!/^[a-z0-9]/.test(t)) {
      return function (s) { return s.indexOf(t) >= 0; };
    }
    var lit = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('\\b' + lit, 'i');
    return function (s) { return re.test(s); };
  });

  idx.forEach(function (r) {
    var score = 0;
    if (artQ && r.kind === 'article') {
      if (r.num === artQ[1]) score += 1000;
      else if (r.num.indexOf(artQ[1]) === 0) score += 400;
    }
    var ok = tests.every(function (fn) { return fn(r.hay); });
    if (!ok && score === 0) return;
    if (ok) {
      score += 10;
      var t = r.title.toLowerCase(), sub = (r.sub || '').toLowerCase(),
          near = r.near || '';
      if (t.indexOf(q) >= 0) score += 120;
      if (t.indexOf(q) === 0) score += 60;
      /* A phrase like "basic structure" or "President's rule" is in no
         heading — it lives in the explanation and in the case holdings. Rank
         a whole-phrase hit there above a record that merely contains the
         separate words somewhere in several thousand characters of text, and
         rank a note that OPENS with the phrase above one that mentions it in
         passing: leading with the term is what identifies the subject. */
      if (sub.indexOf(q) >= 0) score += 90;
      if (near.indexOf(q) >= 0) score += 70;
      if (sub.indexOf(q) === 0 || near.indexOf(q) === 0) score += 110;
      if (r.kind === 'article') score += 8;
      /* Tie-break on how much litigation an article has generated. When two
         articles score identically, the one the courts have actually fought
         over is the likelier thing to be looking for. */
      if (r.kind === 'article' && casesByArt[r.id]) {
        score += Math.min(casesByArt[r.id].length, 6) * 4;
      }
      if (r.gone) score -= 15;
    }
    hits.push({ r: r, s: score });
  });

  hits.sort(function (a, b) { return b.s - a.s; });
  hits = hits.slice(0, 40);
  lastHits = hits.map(function (h) { return h.r; });
  selIdx = -1;

  if (!hits.length) {
    resBox.innerHTML = '<div class="wrap"><div class="empty" style="padding:var(--s6)">' +
      '<b>No match</b>Nothing on this site matches “' + esc(raw) + '”.</div></div>';
  } else {
    resBox.innerHTML = '<div class="wrap">' + hits.map(function (h, i) {
      var r = h.r;
      return '<a class="res" role="option" data-i="' + i + '" href="' + r.href + '">' +
        '<span class="no">' + esc(r.no) + '</span><span class="tx"><b>' +
        hl(r.title, terms) + '</b><i>' + hl(shorten(r.sub, 120), terms) + '</i></span>' +
        '<span class="kind">' + r.kind + '</span></a>';
    }).join('') + '</div>';
  }
  resBox.hidden = false;
  qBox.setAttribute('aria-expanded', 'true');
}

function hl(text, terms) {
  var out = esc(text);
  terms.forEach(function (t) {
    if (t.length < 2) return;
    out = out.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'),
                      '<mark>$1</mark>');
  });
  return out;
}

function closeResults() {
  resBox.hidden = true;
  resBox.innerHTML = '';
  selIdx = -1;
  qBox.setAttribute('aria-expanded', 'false');
}

function moveSel(d) {
  var rows = resBox.querySelectorAll('.res');
  if (!rows.length) return;
  if (selIdx >= 0 && rows[selIdx]) rows[selIdx].classList.remove('sel');
  selIdx = (selIdx + d + rows.length) % rows.length;
  rows[selIdx].classList.add('sel');
  rows[selIdx].scrollIntoView({ block: 'nearest' });
}

/* Going to a new page must put you at the TOP of it.

   The stylesheet sets html{scroll-behavior:smooth}, which quietly turns
   window.scrollTo(0,0) into an ANIMATED scroll — and that animation is then
   running while render() replaces the entire page underneath it. The browser
   abandons it part-way, so you land in the MIDDLE of the page you asked for.
   With a sticky header the top bar looks identical either way, so the whole
   thing reads as "the click did nothing".

   It got much worse with the topic hub: that page is over 9,000px tall, so a
   reader is usually thousands of pixels down when they click Economy or
   Static GK — exactly the case where the abandoned animation strands them.

   So this one scroll is forced to be instant. The smooth behaviour is left in
   place for what it was meant for: the era buttons on the history timeline,
   which scroll within a page the reader can see. */
function jumpToTop() {
  var root = document.documentElement;
  var prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';   // beats the stylesheet for this call
  window.scrollTo(0, 0);
  if (root.scrollTop) root.scrollTop = 0;
  if (document.body && document.body.scrollTop) document.body.scrollTop = 0;
  root.style.scrollBehavior = prev;
}

/* ------------------------------------------------------------------ router */

/* Every page here is the same document, so the browser's scroll restoration
   puts a reload part-way down whatever page loads next — which is rarely the
   page the position came from. route() sets the scroll itself. */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

function route() {
  var h = location.hash.replace(/^#\/?/, '');
  var seg = h.split('/').map(decodeURIComponent);
  closeResults();
  jumpToTop();

  renderNav(seg);

  /* A registered non-default subject handles its own routes under its id. */
  var sub = null;
  SUBJECTS.forEach(function (s) { if (!s.isDefault && s.id === seg[0]) sub = s; });
  if (sub && sub.route) return sub.route(seg.slice(1));

  switch (seg[0]) {
    /* #/ is the topic hub. The Constitution's landing page, which used to
       live here, is at #/constitution; everything else about the subject
       keeps the address it has always had.

       CAUTION when adding links. This address changed meaning, and every
       link that still pointed at "#/" meaning "the Constitution" became a
       link that silently lands on the hub instead. Three breadcrumbs
       reading "Articles" and the History nav's "Constitution" tab all did
       exactly that, and nothing failed loudly — the label lied and the page
       still rendered. A link to the article list is "#/constitution"; only
       a link that genuinely means "all topics" is "#/". */
    case '':             return hubPage();
    case 'hub':          return hubPage();
    case 'topics':       return hubPage();
    case 'constitution': return homePage();
    case 'assembly':   return assemblyPage(seg[1] || '');
    case 'part':       return partPage(seg[1]);
    case 'a':          return articlePage(seg[1]);
    case 'high-yield': return highYieldPage(seg[1] || '');
    case 'amendments': return amendmentsPage();
    case 'amendment':  return amendmentPage(seg[1]);
    case 'schedules':  return schedulesPage();
    case 'schedule':   return schedulePage(seg[1]);
    case 'cases':      return casesPage();
    case 'case':       return casePage(seg[1]);
    case 'about':      return aboutPage();
    default:           return notFound('That address does not exist on this site.');
  }
}

/* ------------------------------------------------------------------ events */

var tmr;
qBox.addEventListener('input', function () {
  clearTimeout(tmr);
  var v = qBox.value;
  tmr = setTimeout(function () { runSearch(v); }, 90);
});

qBox.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown') { e.preventDefault(); moveSel(1); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); moveSel(-1); }
  else if (e.key === 'Enter') {
    var rows = resBox.querySelectorAll('.res');
    if (rows.length) { e.preventDefault(); (rows[selIdx >= 0 ? selIdx : 0]).click(); }
  } else if (e.key === 'Escape') { qBox.value = ''; closeResults(); qBox.blur(); }
});

resBox.addEventListener('click', function (e) {
  if (e.target.closest('.res')) { qBox.value = ''; closeResults(); }
});

document.addEventListener('keydown', function (e) {
  var inField = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if (e.key === '/' && !inField) { e.preventDefault(); qBox.focus(); qBox.select(); }
  else if (e.key === 'Escape' && !resBox.hidden) closeResults();
  else if (!inField && (e.key === 'j' || e.key === 'k')) {
    var cur = location.hash.match(/^#\/a\/(.+)$/);
    if (!cur) return;
    var a = byArt[decodeURIComponent(cur[1])];
    if (!a) return;
    var i = ARTICLES.indexOf(a) + (e.key === 'j' ? 1 : -1);
    if (ARTICLES[i]) location.hash = '#/a/' + encodeURIComponent(ARTICLES[i].a);
  }
});

document.addEventListener('click', function (e) {
  if (!resBox.hidden && !resBox.contains(e.target) && e.target !== qBox) closeResults();
});

/* =========================================================================
   INSTALLING IT AS AN APP

   Chromium browsers fire `beforeinstallprompt`, which can be captured and
   replayed from a button of our own — that is the one-click install. Every
   other browser installs through its own menu instead and fires nothing, so
   the same button falls back to instructions for the browser actually in use.
   The button hides itself once the site is already running installed.
   ========================================================================= */

(function () {
  var btn   = document.getElementById('install');
  var sheet = document.getElementById('sheet');
  if (!btn || !sheet) return;

  var deferred = null;
  var ua = navigator.userAgent;
  var isIOS      = /iPad|iPhone|iPod/.test(ua) ||
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid  = /Android/.test(ua);
  var isFirefox  = /Firefox|FxiOS/.test(ua);
  var isEdge     = /Edg\//.test(ua);
  var isChromium = /Chrome|Chromium|CriOS/.test(ua) && !isFirefox;
  var isSafari   = /Safari/.test(ua) && !isChromium && !isFirefox;

  function installed() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
           navigator.standalone === true;
  }

  if (!installed()) btn.hidden = false;

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();            // keep Chrome's own mini-bar from taking over
    deferred = e;
    btn.hidden = installed();
  });

  window.addEventListener('appinstalled', function () {
    deferred = null;
    btn.hidden = true;
    closeSheet();
  });

  /* ---- the instructions, for browsers that install through their own menu ---- */
  function steps() {
    if (isIOS && isSafari) {
      return { t: 'Add to your Home Screen', s: [
        'Tap the Share button at the bottom of Safari — the square with an arrow coming out of it.',
        'Scroll down the list and tap <b>Add to Home Screen</b>.',
        'Tap <b>Add</b>. It appears as an app icon, opens without the browser bars, and works offline.'],
        n: 'iPhone and iPad only allow this from Safari. If you are in Chrome on iOS, open the site in Safari first.' };
    }
    if (isIOS) {
      return { t: 'Open this in Safari first', s: [
        'On iPhone and iPad, only Safari can install a web app.',
        'Open <b>claude28claude.github.io/article-machine</b> in Safari.',
        'Then use Share → <b>Add to Home Screen</b>.'] };
    }
    if (isAndroid && isFirefox) {
      return { t: 'Install from the Firefox menu', s: [
        'Tap the <b>⋮</b> menu at the top right.',
        'Tap <b>Install</b>, or <b>Add to Home screen</b>.'] };
    }
    if (isAndroid) {
      return { t: 'Install from the browser menu', s: [
        'Tap the <b>⋮</b> menu at the top right.',
        'Tap <b>Install app</b>, or <b>Add to Home screen</b>.',
        'Confirm. It gets its own icon and opens without the browser bars.'] };
    }
    if (isEdge) {
      return { t: 'Install from Edge', s: [
        'Click the <b>⋯</b> menu at the top right.',
        'Choose <b>Apps</b> → <b>Install this site as an app</b>.'] };
    }
    if (isFirefox) {
      return { t: 'Firefox on desktop cannot install this', s: [
        'Desktop Firefox has no install option for web apps.',
        'It still works offline here once loaded — nothing is lost except the separate window.',
        'To get an app icon, open the site in Chrome or Edge and install from there.'] };
    }
    if (isSafari) {
      return { t: 'Add to your Dock', s: [
        'In Safari 17 or later, open the <b>File</b> menu.',
        'Choose <b>Add to Dock</b>.',
        'On older versions of Safari there is no install option; the site still works offline.'] };
    }
    return { t: 'Install from the browser menu', s: [
      'Look for an install icon in the address bar — a screen with a downward arrow.',
      'Or open the browser menu and look for <b>Install</b> or <b>Add to Home screen</b>.'],
      n: 'If neither appears, your browser does not support installing web apps. The site still works offline once loaded.' };
  }

  function openSheet() {
    var d = steps();
    sheet.innerHTML =
      '<div class="sheetbg"></div><div class="sheetbox" role="dialog" aria-modal="true" ' +
      'aria-label="' + esc(d.t) + '"><button class="sheetx" aria-label="Close">✕</button>' +
      '<div class="label tight">Install</div><h2>' + esc(d.t) + '</h2>' +
      '<ol>' + d.s.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>' +
      (d.n ? '<p class="note">' + esc(d.n) + '</p>' : '') +
      '<p class="note">Once installed it opens in its own window, keeps all four subjects on ' +
      'the device, and works with no network at all.</p></div>';
    sheet.hidden = false;
    var x = sheet.querySelector('.sheetx');
    x.focus();
    x.addEventListener('click', closeSheet);
    sheet.querySelector('.sheetbg').addEventListener('click', closeSheet);
  }

  function closeSheet() {
    sheet.hidden = true;
    sheet.innerHTML = '';
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !sheet.hidden) closeSheet();
  });

  /* One click where the browser allows it, instructions where it does not. */
  function trigger() {
    if (deferred) {
      deferred.prompt();
      deferred.userChoice.then(function (r) {
        if (r && r.outcome === 'accepted') btn.hidden = true;
        deferred = null;
      });
    } else if (installed()) {
      sheet.innerHTML = '<div class="sheetbg"></div><div class="sheetbox" role="dialog">' +
        '<button class="sheetx" aria-label="Close">✕</button>' +
        '<div class="label tight">Install</div><h2>Already installed</h2>' +
        '<p class="note" style="border:0;padding:0;margin:0">You are running this as an ' +
        'installed app already.</p></div>';
      sheet.hidden = false;
      sheet.querySelector('.sheetx').addEventListener('click', closeSheet);
      sheet.querySelector('.sheetbg').addEventListener('click', closeSheet);
    } else {
      openSheet();
    }
  }

  btn.addEventListener('click', trigger);

  /* The About page offers the same thing, for anyone who scrolled past the
     button in the header. */
  window.__install = { trigger: trigger, open: openSheet,
                       canPrompt: function () { return !!deferred; },
                       installed: installed };
})();

window.addEventListener('resize', syncHead);
window.addEventListener('orientationchange', syncHead);
window.addEventListener('hashchange', route);
route();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () { /* offline is a bonus */ });
  });
}

window.__AM = { ARTICLES: ARTICLES, parts: parts, byArt: byArt, casesByArt: casesByArt,
                buildIndex: buildIndex, runSearch: runSearch };

})();

