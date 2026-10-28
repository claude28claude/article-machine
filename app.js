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
  hub: 'The index'
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
      { t: 'The article map', href: '#/high-yield/map',
        n: amapCount('groups') + ' indexed entries',
        w: 'The Constitution indexed by subject instead of by number, with every article number a link.',
        k: 'which article covers index list ranges parts schedules directive principles emergency panchayat municipality language' },
      { t: 'Centre-State relations and the Seventh Schedule', href: '#/high-yield/centre-state',
      n: (AMAP.centrestate || []).reduce(function (a, b) { return a + b.rows.length; }, 0) + ' entries',
      w: 'Who may legislate on what, what happens when two laws collide, which List a subject is in, and the commissions that tried to move the line.',
      k: 'union list state list concurrent list seventh schedule 246 248 249 254 262 263 residuary repugnancy pith and substance sarkaria punchhi bommai quasi federal 42nd amendment education forests' },
    { t: 'The courts, article by article', href: '#/high-yield/courts',
        n: amapCount('courts') + ' entries',
        w: 'Supreme Court 124 to 147 and High Courts 214 to 231 in full, the five writs, and the tribunals.',
        k: 'supreme court high court writ habeas corpus mandamus certiorari prohibition quo warranto slp review judicial tribunal district judge' },
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

/* ==========================================================================
   NAVIGATION, AFTER THE ANSWER KEY

   The header used to change with the page. At the front it listed the
   subjects; inside a subject it was replaced by that subject's own sections,
   so moving from Biology to Modern History meant going back to the front page
   first and then choosing again — two taps and a page in between.

   Now the header never changes. It is the list of subjects, on every page,
   with the one you are in underlined, so any subject is one tap away from
   anywhere. Tapping a subject opens that subject's page, which lists its
   topics and nothing else. The subject's own sections — the tabs that used to
   live in the header — move into the page: a rail beside the topic list on a
   wide screen, and a strip across the top of every page inside the subject.

   The header stays exactly one row of tabs, so none of this costs any of the
   screen on a phone.
   ========================================================================== */

function defaultSubject() {
  return SUBJECTS.filter(function (s) { return s.isDefault; })[0];
}

function subjectById(id) {
  var hit = null;
  SUBJECTS.forEach(function (s) { if (s.id === id) hit = s; });
  return hit;
}

/* Which item on the subject bar owns this address. The Constitution's pages
   have no prefix of their own (#/a/21, #/cases), so anything that is not the
   index, About, a subject page or another subject's prefix belongs to it. */
function barKey(seg) {
  var first = seg[0] || '';
  if (first === '' || first === 'hub' || first === 'topics' ||
      first === 'index' || first === 'contents') return '__index__';
  if (first === 's') return subjectById(seg[1]) ? seg[1] : '__index__';
  if (first === 'about') return 'about';
  var sub = subjectById(first);
  return sub && !sub.isDefault ? sub.id : defaultSubject().id;
}

/* A subject's sections are its old header tabs, less the two that are not
   sections of it: About is on the bar now, and a tab with nothing to match
   ("↔ Constitution") is a cross-link to a different subject. */
function sectionsOf(sub) {
  return (sub.tabs || []).filter(function (t) {
    return t.match && t.match.length && t.label !== 'About';
  });
}

function sectionKey(sub, seg) {
  return sub.isDefault ? (seg[0] || '') : (seg[1] || '');
}

/* The strip across the top of every page inside a subject. Its first item is
   the subject itself, and leads back to the list of all its topics. */
function secStrip(seg) {
  var k = barKey(seg);
  if (k === '__index__' || k === 'about' || seg[0] === 's') return '';
  var sub = subjectById(k);
  if (!sub) return '';
  var key = sectionKey(sub, seg);
  return '<div class="wrap secwrap"><nav class="secstrip" aria-label="Sections of ' +
    esc(sub.name) + '">' +
    '<a class="secsub" href="#/s/' + sub.id + '">' + esc(sub.short || sub.name) + '</a>' +
    sectionsOf(sub).map(function (t) {
      var on = t.match.indexOf(key) >= 0;
      return '<a href="' + t.href + '"' + (on ? ' aria-current="page"' : '') + '>' +
        esc(t.label) + '</a>';
    }).join('') + '</nav></div>';
}

function statSpans(list) {
  return list.map(function (x) {
    var m = /^(\d[\d,]*)\s+(.*)$/.exec(x);
    return m ? '<span><b>' + esc(m[1]) + '</b> ' + esc(m[2]) + '</span>'
             : '<span>' + esc(x) + '</span>';
  }).join('');
}

/* A subject's own page: every topic in it, numbered, with a line on what each
   one covers — the page the bar opens. */
function subjectPage(id) {
  var sub = subjectById(id);
  if (!sub) return notFound('There is no such subject on this site.');
  var i = SUBJECTS.indexOf(sub);
  var topics = sub.topics ? sub.topics() : [];
  var secs = sectionsOf(sub);

  var h = '<div class="wrap artpage">' +
    '<div class="pagehead"><p class="eyebrow">Subject ' + (i + 1) + ' of ' +
    SUBJECTS.length + '</p>' +
    '<h1>' + esc(sub.name) + '</h1>' +
    '<p class="lede">' + esc(sub.blurb || '') + '</p>' +
    '<div class="herostats">' + statSpans(sub.stats ? sub.stats() : []) +
    '<span><b>' + topics.length + '</b> topics</span></div></div>';

  h += '<div class="rail"><nav class="railnav" aria-label="Sections of ' +
    esc(sub.name) + '"><span class="lbl">Sections</span><ol>' +
    secs.map(function (t) {
      return '<li><a href="' + t.href + '">' + esc(t.label) + '</a></li>';
    }).join('') + '</ol></nav>';

  h += '<div><p class="lbl topiclbl">Every topic in ' + esc(sub.short || sub.name) +
    '</p><ul class="idxlist topiclist">' +
    topics.map(function (t, j) {
      return '<li><a href="' + t.href + '"><span class="n">' + (j + 1) + '</span>' +
        '<span class="t"><b>' + esc(t.t) + '</b>' +
        (t.w ? '<span class="d">' + esc(t.w) + '</span>' : '') + '</span>' +
        (t.n ? '<span class="c">' + esc(t.n) + '</span>' : '') + '</a></li>';
    }).join('') + '</ul>' +
    '<p class="foot">These are the topics. Every single page of ' + esc(sub.name) +
    ' — each article, event, case and person — is in the ' +
    '<a href="#/index">full index</a>.</p></div></div></div>';

  render(h);
}

function renderNav(seg) {
  if (!tabBar) return;
  var on = barKey(seg);
  function tab(href, key, label) {
    return '<a href="' + href + '"' + (on === key ? ' aria-current="page"' : '') + '>' +
      esc(label) + '</a>';
  }
  tabBar.innerHTML = tab('#/', '__index__', 'Index') +
    SUBJECTS.map(function (s) { return tab('#/s/' + s.id, s.id, s.short || s.name); }).join('') +
    tab('#/about', 'about', 'About');

  var sub = subjectById(on);
  if (brandSub) brandSub.textContent = sub ? sub.name : (on === 'about' ? 'About' : SITE.hub);

  /* On a phone the bar scrolls sideways, and a subject near the end of it —
     Biology — would be underlined somewhere off the edge of the screen. Bring
     the underlined tab into view. scrollLeft, not scrollIntoView: the bar is
     inside a sticky header and scrollIntoView would move the page as well. */
  var cur = tabBar.querySelector('[aria-current="page"]');
  if (cur && tabBar.scrollWidth > tabBar.clientWidth) {
    tabBar.scrollLeft = Math.max(0, cur.offsetLeft - 16);
  }
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

/* ------------------------------------------------------------------ back

   Going back a step is the commonest move there is while studying: open a
   topic, read it, return to where you were choosing from. The browser has a
   Back button for that, but the site is installed as an app on a phone and
   an installed app has NO browser chrome - no address bar and no back arrow.
   So the site carries its own.

   It walks a trail of pages actually visited rather than calling
   history.back(), for two reasons: history may start outside the site (the
   first entry would leave it), and the trail can fall back to something
   sensible - the parent section - when there is nothing to go back to, which
   is what happens when a link is opened cold from outside. */

var trail = [], lastHash = null, backJump = false;

function recordStep(h) {
  if (backJump) { backJump = false; return; }
  /* The browser's own Back fires the same event we do. If the new page is
     the one on top of our trail, the reader has gone back by other means and
     the trail should shorten rather than grow. */
  if (trail.length && trail[trail.length - 1] === h) { trail.pop(); return; }
  if (lastHash !== null && lastHash !== h) {
    trail.push(lastHash);
    if (trail.length > 80) trail.shift();
  }
}

/* Where "up" goes when there is no trail: the section this page belongs to,
   never a URL that does not resolve. #/a/21 belongs to the article list,
   #/case/kesavananda to the case list, anything inside a namespaced subject
   to that subject's home. */
function parentOf(h) {
  var seg = h.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (!seg.length) return '#/';
  if (seg[0] === 's' || seg[0] === 'index' || seg[0] === 'contents' ||
      seg[0] === 'about' || seg[0] === 'hub' || seg[0] === 'topics') return '#/';

  /* "Up" is read off the subject's own sections, the same list the strip at
     the top of the page shows. A page that IS a section goes up to the
     subject's list of topics. A page INSIDE a section — one act, one Viceroy,
     one article — goes up to its section. So the Acts page goes to Modern
     History, not sideways to the Timeline, and Curzon goes to the Viceroys.
     A hand-written list of these used to live here, and every new section
     had to remember to add itself to it; this cannot be forgotten. */
  var sub = subjectById(barKey(seg));
  if (!sub) return '#/';
  var key = sectionKey(sub, seg), here = '#/' + seg.join('/'), sec = null;
  sectionsOf(sub).forEach(function (t) { if (!sec && t.match.indexOf(key) >= 0) sec = t; });
  if (sec && sec.href.replace(/\/+$/, '') !== here) return sec.href;
  return '#/s/' + sub.id;
}

function goBack() {
  if (trail.length) {
    backJump = true;
    location.hash = trail.pop();
    return;
  }
  /* Going UP is a Back too, so it must not leave the page it came from on the
     trail. It used to: Back from an article opened cold went up to the list,
     and the next Back went straight back DOWN to the article, which is not
     what anybody pressing Back twice means. Now repeated Backs keep climbing
     — Acts, then Modern History's topics, then the index. */
  var up = parentOf(location.hash);
  /* Only when the address really changes: if it did not, no hashchange would
     fire to consume the flag, and it would swallow the next real step. */
  if (up !== location.hash) backJump = true;
  location.hash = up;
}

/* The button lives in the shell rather than being created per page, so there
   is one of it and its `hidden` state is the only thing that changes. */
(function () {
  var b = document.getElementById('backfab');
  if (b) b.addEventListener('click', goBack);
})();

function syncBack() {
  var b = document.getElementById('backfab');
  if (!b) return;
  /* Nothing to go back to from the front page - that IS the way back. */
  b.hidden = atHub(location.hash.replace(/^#\/?/, '').split('/'));
}

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

/* The address, split into its segments, with each one decoded. Built once
   per render and handed to everything that needs to know where we are. */
function segOf() {
  return location.hash.replace(/^#\/?/, '').split('/').map(function (x) {
    try { return decodeURIComponent(x); } catch (e) { return x; }
  });
}

function render(html) {
  var seg = segOf();
  main.innerHTML = secStrip(seg) + html;
  layoutSide(seg);
  syncBack();
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
         '<p class="plain">' + prose(pl.p) + '</p>' +
         (pl.w ? '<p class="why">' + prose(pl.w) + '</p>' : '') + '</div>';
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

  h += '<div class="block"><h3>What it did</h3><p class="plain">' + prose(m.s) + '</p>';
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

  h += '<div class="block"><h3>What it is</h3><p class="plain">' + prose(s.p) + '</p>' +
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

  h += '<div class="block"><h3>What it held</h3><p class="plain">' + prose(c.h) + '</p>' +
    (c.note ? '<p class="why">' + prose(c.note) + '</p>' : '') + '</div>';

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
  var tabs = [['', 'Overview'], ['articles', 'Articles'], ['map', 'Article map'],
              ['courts', 'Courts'], ['centre-state', 'Centre and State'], ['cases', 'Cases'],
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
               '<div class="cmpv">' + emph(linkArts(r[1]), 2) + '</div></div>';
      }).join('') +
      (c.note ? '<div class="cmpn">' + prose(c.note, 2) + '</div>' : '') + '</div>';
  });
  return hyShell('confusions', h);
}

/* Turn every "article 226" / "Article 32" mentioned in the text into a link,
   so a confused pair, or an explanation that cross-refers, is one press from
   the real thing.

   The word "article" goes inside the link with the number. Linking the two
   digits alone left an 18px target in the middle of a sentence, which is
   half the 44px a fingertip needs and sits below the site's own standard —
   the article map was fixed the same way, by making the whole key the link
   rather than the digits inside it. */
function linkArts(s) {
  return esc(s).replace(/\b([Aa]rticles?\s+)(\d{1,3}(?:[A-Z]{1,2})?(?:-[A-Z])?)/g,
    function (all, word, num) {
      return byArt[num]
        ? '<a href="#/a/' + encodeURIComponent(num) + '">' + word + num + '</a>'
        : all;
    });
}

/* ==========================================================================
   EMPHASIS INSIDE A SENTENCE

   Every explanation on this site used to be one flat grey paragraph, so
   finding the fact you came for meant reading all of it. These functions
   mark the two things a person is actually looking for — the named idea and
   the figure — and the marking is a change of typeface rather than a colour
   wash, which is quieter and survives being read for an hour. The EMPHASIS
   block in styles.css says why.

   Two rules keep it from turning into a highlighted textbook, which is the
   failure mode of every automatic highlighter:

     - a term is marked on its FIRST appearance in a paragraph and never
       again, so "hormone" in a paragraph about hormones is marked once;
     - at most three terms per paragraph, whatever else matches. Past three,
       nothing is emphasised any more — it is just bold text.

   Figures are not capped, because in "reduced from 21 to 18 in 1989" all
   three numbers are the answer to something.  */

/* Named ideas worth catching by eye. Deliberately not a dictionary: a word
   earns a place here only if seeing it is a reason to slow down. Common
   words with a technical meaning are in (writ, ordinance, quorum); common
   words with only their ordinary meaning are out. */
var KEYTERMS = [
  /* the Constitution */
  'Directive Principles of State Policy', 'Directive Principles',
  'Fundamental Rights', 'Fundamental Duties', 'Basic Structure', 'Preamble',
  'judicial review', 'Public Interest Litigation', 'writ petition', 'writs',
  'writ', 'habeas corpus', 'mandamus', 'certiorari', 'quo warranto',
  'President of India', 'Vice-President', 'Prime Minister',
  'Council of Ministers', 'Cabinet', 'Governor', 'Chief Minister',
  'Attorney General', 'Advocate General', 'Comptroller and Auditor General',
  'Election Commission', 'Finance Commission', 'Public Service Commission',
  'Supreme Court', 'High Court', 'Chief Justice', 'collegium',
  'Parliament', 'Lok Sabha', 'Rajya Sabha', 'Legislative Assembly',
  'Legislative Council', 'Money Bill', 'Finance Bill', 'ordinance',
  'special majority', 'simple majority', 'absolute majority',
  'National Emergency', 'Financial Emergency', 'Union List', 'State List',
  'Concurrent List', 'residuary', 'anti-defection', 'Panchayat',
  'Gram Sabha', 'Municipality', 'Scheduled Castes', 'Scheduled Tribes',
  'Other Backward Classes', 'sovereign', 'socialist', 'secular', 'republic',
  'quorum', 'impeachment', 'Constituent Assembly', 'Drafting Committee',
  'Objectives Resolution', 'universal adult suffrage', 'single citizenship',
  'doctrine of pleasure', 'due process', 'procedure established by law',
  'separation of powers', 'Union territory', 'Union of States',
  'Governor-General', 'Viceroy', 'President', 'Speaker', 'two-thirds',
  'ratification', 'First Schedule', 'Second Schedule', 'Third Schedule',
  'Fourth Schedule', 'Fifth Schedule', 'Sixth Schedule', 'Seventh Schedule',
  'Eighth Schedule', 'Ninth Schedule', 'Tenth Schedule', 'Eleventh Schedule',
  'Twelfth Schedule',
  /* modern history */
  'Doctrine of Lapse', 'Subsidiary Alliance', 'Permanent Settlement',
  'Ryotwari', 'Mahalwari', 'Non-Cooperation Movement', 'Civil Disobedience',
  'Quit India', 'Khilafat', 'Swadeshi', 'Home Rule',
  'Round Table Conference', 'Simon Commission', 'Cripps Mission',
  'Cabinet Mission', 'Mountbatten Plan', 'Indian National Congress',
  'Muslim League', 'Revolt of 1857', 'Partition of Bengal',
  'Jallianwala Bagh', 'Dandi March', 'Poona Pact', 'Lucknow Pact',
  'Government of India Act', 'Regulating Act', 'Charter Act', 'Rowlatt Act',
  'Vernacular Press Act', 'Ilbert Bill', 'Morley-Minto',
  'Montagu-Chelmsford', 'Communal Award', 'dyarchy', 'provincial autonomy',
  /* the economy */
  'Five Year Plan', 'Green Revolution', 'White Revolution',
  'liberalisation', 'privatisation', 'globalisation', 'disinvestment',
  'devaluation', 'Reserve Bank of India', 'repo rate', 'reverse repo',
  'cash reserve ratio', 'statutory liquidity ratio',
  'open market operations', 'bank rate', 'fiscal deficit',
  'revenue deficit', 'primary deficit', 'balance of payments', 'inflation',
  'deflation', 'stagflation', 'gross domestic product', 'national income',
  'NITI Aayog', 'Planning Commission', 'monetary policy', 'fiscal policy',
  'nationalisation', 'mixed economy', 'licence raj', 'GDP', 'GNP', 'CRR',
  'SLR', 'per capita income',
  /* biology */
  'haemoglobin', 'insulin', 'thyroxine', 'adrenaline', 'pituitary',
  'thyroid', 'parathyroid', 'pancreas', 'adrenal', 'oestrogen',
  'testosterone', 'melatonin', 'protozoan', 'bacterium', 'bacteria',
  'virus', 'fungus', 'fungal', 'deficiency', 'vitamin', 'enzyme',
  'hormone', 'antibody', 'vaccine', 'carbohydrate', 'protein',
  'fat-soluble', 'water-soluble', 'metabolism', 'goitre', 'rickets',
  'scurvy', 'beriberi', 'pellagra', 'anaemia', 'night blindness',
  'malaria', 'tuberculosis', 'dengue', 'cholera', 'typhoid', 'ringworm',
  'leprosy', 'osteomalacia', 'osteoporosis', 'cretinism', 'myxoedema',
  'acromegaly', 'gigantism', 'dwarfism', 'tetany', 'diabetes',
  /* The named vitamins are here as well as the bare word, so that "vitamin D"
     is marked whole rather than leaving its letter stranded outside the
     mark. Sorting by length below is what makes the longer one win. */
  'vitamin B12', 'vitamin B1', 'vitamin B2', 'vitamin B3', 'vitamin B6',
  'vitamin A', 'vitamin B', 'vitamin C', 'vitamin D', 'vitamin E',
  'vitamin K'
];

var MONTHS = 'January|February|March|April|May|June|July|August|September|' +
             'October|November|December';

/* Longest first, so "Directive Principles of State Policy" is matched whole
   rather than being eaten by "Directive Principles". Apostrophes and
   hyphens are matched in both their typewriter and typographic forms,
   because the data files contain both. */
var EMPH_RE = (function () {
  function rx(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            .replace(/'/g, '[\'’]')
            .replace(/-/g, '[-‑–]');
  }
  var terms = KEYTERMS.slice().sort(function (a, b) { return b.length - a.length; });
  return new RegExp(
    '\\b(' + terms.map(rx).join('|') + ')\\b' +
    '|(\\b\\d{1,2}\\s(?:' + MONTHS + ')\\s\\d{3,4}\\b)' +
    '|(\\b(?:' + MONTHS + ')\\s\\d{3,4}\\b)' +
    /* A span of years is one figure, not two: "1951-56" must not come out as
       two separate marks with a stray hyphen loose between them. */
    '|(\\b\\d[\\d,]*(?:\\.\\d+)?(?:\\s?[-–—]\\s?\\d[\\d,]*(?:\\.\\d+)?)?' +
    '(?:st|nd|rd|th)?\\b(?:\\s(?:per\\scent|crore|lakh))?)',
    'gi');
})();

/* Marks up already-escaped HTML. Anything between < and > is a tag and is
   stepped over, and so is everything inside an <a>…</a> — a link is already
   emphasised by being a link, and marking the words inside one would put a
   second signal on top of the first. */
function emph(html, cap) {
  if (!html) return html;
  if (cap == null) cap = 3;
  var parts = String(html).split(/(<[^>]*>)/), inLink = 0, used = 0, seen = {};
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];
    if (!p) continue;
    if (p.charAt(0) === '<') {
      if (/^<a[\s>]/i.test(p)) inLink++;
      else if (/^<\/a\s*>/i.test(p)) inLink = Math.max(0, inLink - 1);
      continue;
    }
    if (inLink) continue;
    parts[i] = p.replace(EMPH_RE, function (m, term) {
      if (term) {
        var k = term.toLowerCase();
        if (used >= cap || seen[k]) return m;
        seen[k] = 1; used++;
        return '<b class="kw">' + term + '</b>';
      }
      /* A short number in brackets is a clause reference — "clauses (4) and
         (5)" — and a clause number is not a fact anybody memorises. Marking
         those put gold pinpricks through the middle of the very paragraphs
         that had most worth marking. A four-digit number in brackets is the
         year of a case, "Minerva Mills (1980)", which is exactly the thing
         to mark, so the rule is length-bound rather than bracket-bound. */
      var whole = arguments[arguments.length - 1], at = arguments[arguments.length - 2];
      if (/^\d{1,2}$/.test(m) &&
          whole.charAt(at - 1) === '(' && whole.charAt(at + m.length) === ')') return m;
      return '<em class="num">' + m + '</em>';
    });
  }
  return parts.join('');
}

/* The one call every explanation goes through: escape it, turn its article
   references into links, then mark the terms and the figures. */
function prose(s, cap) { return emph(linkArts(s), cap); }

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
  if (slug === 'map')        return render(hyArticleMap());
  if (slug === 'courts')     return render(hyCourts());
  if (slug === 'centre-state') return render(hyCentreState());
  return notFound('No such high-yield section.');
}

/* ------------------------------------------------------- the article map

   The reverse index. The article pages run in numerical order, which is the
   right shape for reading one article and the wrong shape for revision: an
   exam asks which article covers the State Finance Commission, not what
   article 243I says. Every number here is rendered through linkArts, so a
   row is one tap from the official text. */

var AMAP = window.ARTMAP || {};

function amapCount(key) {
  return (AMAP[key] || []).reduce(function (a, b) { return a + (b.rows || []).length; }, 0);
}

function hyArticleMap() {
  var h = '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    'The article map</h1>' +
    '<p class="sub">' + esc(AMAP.lede || '') + '</p>' +
    '<div class="figs">' + fig(amapCount('framework'), 'framework rows') +
      fig(amapCount('groups'), 'indexed entries') +
      fig((AMAP.groups || []).length, 'subject groups') + '</div>';
  if (AMAP.intro) h += '<p class="plain stack">' + prose(AMAP.intro) + '</p>';
  h += (AMAP.framework || []).map(factsBlockLinked).join('');
  h += (AMAP.groups || []).map(factsBlockLinked).join('');
  return hyShell('map', h);
}

function hyCourts() {
  var h = '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    'The courts, article by article</h1>' +
    '<p class="sub">The Supreme Court from 124 to 147 and the High Courts from 214 to 231, in full, ' +
    'plus the writs, the judicial review articles and the tribunals.</p>' +
    '<div class="figs">' + fig(amapCount('courts'), 'entries') +
      fig(5, 'writs') + fig(2, 'tribunal articles') + '</div>';
  h += (AMAP.courts || []).map(factsBlockLinked).join('');
  return hyShell('courts', h);
}


/* Centre-State relations, indexed the way the question asks rather than the
   way Part XI is numbered. Part XI is already on the site article by
   article, which is the right shape for reading article 254 once and the
   wrong shape for answering "who prevails on a Concurrent subject". Every
   number goes through factsBlockLinked, so a row is one tap from the text.

   The Seventh Schedule gets a block of its own here as well as its own page
   under Schedules. The Schedules page prints all 219 entries, which is what
   you want when checking one; this prints the dozen subjects that actually
   get asked, which is what you want the night before. */
function hyCentreState() {
  var rows = (AMAP.centrestate || []).reduce(function (a, b) { return a + b.rows.length; }, 0);
  var h = '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s3);font-weight:600">' +
    'Centre and State, and the Seventh Schedule</h1>' +
    '<p class="sub">The three divisions of power, the doctrines the courts built on them, which List a ' +
    'subject falls in, and the commissions that have been asked to change the balance.</p>' +
    '<div class="figs">' + fig(rows, 'entries') + fig(3, 'Lists') +
      fig((AMAP.centrestateNotes || []).length, 'notes to write down') + '</div>';
  h += notesBlock(AMAP.centrestateNotes, 'the ones that come back');
  h += (AMAP.centrestate || []).map(factsBlockLinked).join('');
  h += '<p class="foot">The Seventh Schedule in full \u2014 all three Lists, every entry \u2014 is on its own ' +
    '<a href="#/schedule/7">Schedule page</a>. This page is the shortlist.</p>';
  return hyShell('centre-state', h);
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
    if (ASM.intro) h += '<p class="plain stack">' + prose(ASM.intro) + '</p>';
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

  /* The front page is the index, as on the Answer Key: every subject, and
     inside each one every topic, as a numbered list. The bar above switches
     subject; this page shows the shape of all of them at once. */
  var h = '<div class="wrap artpage"><section class="ixhero">' +
    '<h1>Everything to study, on one screen</h1>' +
    '<p>' + SUBJECTS.length + ' subjects and ' + total + ' topics for the SSC track. ' +
    'Choose a subject from the bar at the top to see only its topics — the bar ' +
    'stays there on every page, so you can switch subject from anywhere — or run ' +
    'down all of them below.</p>' +
    '<div class="herostats"><span><b>' + SUBJECTS.length + '</b> subjects</span>' +
    '<span><b>' + total + '</b> topics</span>' +
    '<span><b>' + ARTICLES.length + '</b> articles</span>' +
    '<span>Works offline</span></div>' +
    '<div class="hubfilter">' +
      '<input id="topicq" type="search" autocomplete="off" spellcheck="false" ' +
      'aria-label="Filter topics" aria-controls="hublist" ' +
      'placeholder="Filter topics — try “gst”, “viceroy”, “emergency”, “rivers”">' +
      '<span id="topicn" aria-live="polite"></span></div>' +
    '<div class="stack"><a class="pill big" href="#/index">' +
    'Every page on the site — the full outline</a></div></section>';

  h += '<div class="indexgrid" id="hublist">' + groups.map(function (g, i) {
    return '<section class="idxcard">' +
      '<span class="num">Subject ' + (i + 1) + '</span>' +
      '<h2><a href="#/s/' + g.s.id + '">' + esc(g.s.name) + '</a></h2>' +
      '<p class="w">' + esc(g.s.blurb || '') + '</p>' +
      '<ul class="idxlist">' + g.topics.map(function (t, j) {
        /* A count that runs to a phrase ("15 women, and the names asked")
           belongs on the subject's own page, where there is room for it. In
           a card it would wrap into the topic name, so only short counts
           are shown here. */
        var c = t.n && String(t.n).length <= 22 ? t.n : '';
        return '<li data-k="' +
          esc((t.t + ' ' + t.w + ' ' + (t.k || '') + ' ' + g.s.name).toLowerCase()) + '">' +
          '<a href="' + t.href + '"><span class="n">' + (j + 1) + '</span>' +
          '<span class="t">' + esc(t.t) + '</span>' +
          (c ? '<span class="c">' + esc(c) + '</span>' : '') + '</a></li>';
      }).join('') + '</ul>' +
      '<a class="idxmore" href="#/s/' + g.s.id + '">Open ' + esc(g.s.short || g.s.name) +
      ' →</a></section>';
  }).join('') + '</div>';

  h += '<div class="empty" id="hubempty" hidden><b>No topic matches that</b>' +
    'The search box at the top of the page goes deeper — it looks inside every ' +
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
  var items = [].slice.call(document.querySelectorAll('#hublist li[data-k]'));
  var secs  = [].slice.call(document.querySelectorAll('#hublist .idxcard'));
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
      sec.hidden = !sec.querySelector('li[data-k]:not([hidden])');
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
    '<div class="block"><h3>What happened</h3><p class="plain">' + prose(ev.w) + '</p></div>';

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
    '<div class="block"><h3>Why it mattered</h3><p class="plain">' + prose(a.w) + '</p></div>' +
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
    '<div class="block"><h3>What they did</h3><p class="plain">' + prose(p.w) + '</p></div>');
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
    '<div class="block"><h3>What set it off</h3><p class="plain">' + prose(m.cause) + '</p></div>' +
    '<div class="block"><h3>How it was fought</h3><p class="plain">' + prose(m.w) + '</p>' +
    '<p class="why">Led by ' + esc(m.lead) + '</p></div>' +
    '<div class="block"><h3>What it achieved</h3><p class="plain">' + prose(m.out) + '</p></div>');
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

/* ------------------------------------------------------------- treaties

   A treaty question is always the same shape - which year, between whom,
   and which war did it end - so the settlements get their own section
   rather than being scattered through the timeline. */

var TRT = window.TREATIES || {};

function trtCount(key) {
  return (TRT[key] || []).reduce(function (a, b) { return a + (b.rows || []).length; }, 0);
}

function histTreaties(slug) {
  var tabs = [['', 'The treaties'], ['wars', 'By war'], ['after', 'After 1947'],
              ['drill', 'The drill'], ['confusions', 'Confused pairs']];
  var known = false;
  tabs.forEach(function (t) { if (t[0] === (slug || '')) known = true; });
  if (!known) return notFound('That address does not exist in the treaties section.');

  var body = '<div class="listtabs">' + tabs.map(function (t) {
    return '<button onclick="location.hash=\'#/history/treaties' + (t[0] ? '/' + t[0] : '') +
      '\'" aria-pressed="' + (t[0] === (slug || '')) + '">' + esc(t[1]) + '</button>';
  }).join('') + '</div>';

  if (slug === 'wars') {
    body += histH1('Grouped by the enemy',
      'Maratha, Mysore, Sikh, Nepalese and Afghan - which is how they are actually remembered.');
    body += (TRT.wars || []).map(factsBlock).join('');
  } else if (slug === 'after') {
    body += histH1('The agreements since independence',
      'Six of them, and each is asked by year and by the two countries or the two leaders.');
    body += (TRT.post || []).map(factsBlock).join('');
  } else if (slug === 'drill') {
    body += histH1('The drill',
      'Twenty treaties in date order, then the ten that come up most.');
    body += (TRT.drill || []).map(factsBlock).join('');
  } else if (slug === 'confusions') {
    body += histH1('The pairs that get mixed up',
      'Two treaties called Amritsar, two signed in 1803, and the one that started a war rather than ending one.');
    body += (TRT.confusions || []).map(cmpBlock).join('');
  } else {
    body += histH1('The treaties', TRT.lede || '');
    body += '<div class="figs">' + fig(trtCount('main'), 'to memorise') +
      fig(trtCount('wars'), 'grouped by war') + fig(trtCount('post'), 'since 1947') +
      fig((TRT.confusions || []).length, 'confused pairs') + '</div>';
    if (TRT.intro) body += '<p class="plain stack">' + prose(TRT.intro) + '</p>';
    body += (TRT.main || []).map(factsBlock).join('');
  }

  return render(histShell(histCrumb('Treaties') + body));
}


/* ==========================================================================
   THE ADMINISTRATORS — Governors, Governors-General, Viceroys

   Five offices in one line of succession, so the section is built from a
   table of groups rather than five copies of the same code. Each holder gets
   a page of his own, because "his policies and how he impacted India" is a
   page's worth of writing, not a table cell.
   ========================================================================== */

var RAJ = window.RAJ || {};

var RAJ_GROUPS = [
  ['bengal',   'Governors of Bengal',              '1757–1773'],
  ['ggBengal', 'Governors-General of Bengal',      '1773–1833'],
  ['ggIndia',  'Governors-General of India',       '1833–1858'],
  ['viceroys', 'Viceroys of India',                '1858–1947'],
  ['free',     'Governors-General of the Dominion', '1947–1950']
];

var rajById = {}, rajAll = [];
RAJ_GROUPS.forEach(function (g) {
  (RAJ[g[0]] || []).forEach(function (p) {
    p.grp = g[1]; p.grpYears = g[2];
    rajById[p.id] = p; rajAll.push(p);
  });
});

function rajYears(p) {
  var s = p.from === p.to ? String(p.from) : p.from + '–' + p.to;
  return p.also ? s + ' (' + p.also + ')' : s;
}

/* One row in the roll. The acting holders are shown but dimmed: dropping them
   would make this list disagree with every other list, and pretending they
   are examinable would waste the reader's time. */
function rajRow(p) {
  return '<a class="arow' + (p.acting ? ' gone' : '') + '" href="#/history/ruler/' +
    encodeURIComponent(p.id) + '">' +
    '<span class="no range">' + esc(rajYears(p)) + '</span>' +
    '<span class="tx"><b>' + esc(p.n) + '</b><i>' + esc(p.t) +
    (p.acting ? ' · acting' : '') + '</i></span>' +
    '<span class="tag">' + (p.hy ? '<span class="chip live">Asked</span>' : '') +
    '</span></a>';
}

function rajList() {
  return RAJ_GROUPS.map(function (g) {
    var list = RAJ[g[0]] || [];
    if (!list.length) return '';
    return '<div class="partband"><span class="pn">' + esc(g[2]) + '</span>' +
      '<h2>' + esc(g[1]) + '</h2></div>' + list.map(rajRow).join('');
  }).join('');
}

/* One administrator. The impact is stated first and the policies follow,
   because "what did he change" is the question and the list of Acts is the
   evidence for the answer. */
function rajPage(id) {
  var p = rajById[id];
  if (!p) return notFound('There is no such Governor-General or Viceroy on this site.');

  var h = '<div class="crumb"><a href="#/history">Modern History</a> → ' +
    '<a href="#/history/raj">The administrators</a> → ' + esc(p.grp) + '</div>' +
    /* The big numeral takes the term and nothing else. Clive held the office
       twice, and putting "1758-1760 (and again 1765-1767)" at 38px pushed the
       page 191px off the side of a phone. The second term is a chip. */
    '<div class="arthead"><div class="big" style="font-size:var(--n-lg)">' +
    esc(p.from === p.to ? String(p.from) : p.from + '–' + p.to) +
    '</div><div class="ht"><h1>' + esc(p.n) + '</h1>' +
    '<div class="chips"><span class="chip">' + esc(p.t) + '</span>' +
    (p.also ? '<span class="chip amd">' + esc(p.also) + '</span>' : '') +
    (p.acting ? '<span class="chip gone">Acting · not examined</span>' : '') +
    (p.hy ? '<span class="chip live">Asked in exams</span>' : '') +
    '</div></div></div>';

  h += '<div class="block"><h3>What he changed</h3><p class="plain">' +
    prose(p.w) + '</p>' +
    (p.note ? '<p class="why">' + prose(p.note) + '</p>' : '') + '</div>';

  if ((p.pol || []).length) {
    h += factsBlock({ h: 'His policies, and what each one did', rows: p.pol });
  }

  var i = rajAll.indexOf(p), out = '<div class="nextprev">';
  if (i > 0) out += '<a href="#/history/ruler/' + encodeURIComponent(rajAll[i - 1].id) +
    '"><span class="d">Before him</span><span class="t">' + esc(rajAll[i - 1].n) +
    '</span></a>';
  if (i > -1 && i < rajAll.length - 1) out += '<a class="r" href="#/history/ruler/' +
    encodeURIComponent(rajAll[i + 1].id) + '"><span class="d">After him</span>' +
    '<span class="t">' + esc(rajAll[i + 1].n) + '</span></a>';
  h += out + '</div>';

  return render(histShell(h));
}

function histRaj(slug) {
  var tabs = [['', 'The roll'], ['offices', 'The four offices'],
              ['drill', 'Who was in charge when'], ['confusions', 'Confused pairs']];
  var known = false;
  tabs.forEach(function (t) { if (t[0] === (slug || '')) known = true; });
  if (!known) return notFound('That address does not exist in the administrators section.');

  var body = '<div class="listtabs">' + tabs.map(function (t) {
    return '<button onclick="location.hash=\'#/history/raj' + (t[0] ? '/' + t[0] : '') +
      '\'" aria-pressed="' + (t[0] === (slug || '')) + '">' + esc(t[1]) + '</button>';
  }).join('') + '</div>';

  if (slug === 'offices') {
    body += histH1('The four offices',
      'Governor of Bengal, Governor-General of Bengal, Governor-General of India, ' +
      'Viceroy. Every "who was the first" question is a question about these boundaries.');
    body += (RAJ.offices || []).map(factsBlock).join('');
  } else if (slug === 'drill') {
    body += histH1('Who was in charge when',
      'The events most often asked, each against the man who held the office.');
    body += (RAJ.facts || []).map(factsBlock).join('');
  } else if (slug === 'confusions') {
    body += histH1('The pairs that get mixed up',
      'Two Hastingses, two Mintos, two Elgins, two Treaties of Amritsar and two censuses.');
    body += (RAJ.confusions || []).map(cmpBlock).join('');
  } else {
    body += histH1('The administrators', RAJ.lede || '');
    body += '<div class="figs">' + fig(rajAll.length, 'in all') +
      fig((RAJ.viceroys || []).length, 'Viceroys') +
      fig(rajAll.filter(function (p) { return p.hy; }).length, 'asked in exams') +
      fig((RAJ.confusions || []).length, 'confused pairs') + '</div>';
    if (RAJ.intro) body += '<p class="plain stack">' + prose(RAJ.intro) + '</p>';
    body += '<div class="stack-lg">' + rajList() + '</div>';
  }

  return render(histShell(histCrumb('The administrators') + body));
}

/* ==========================================================================
   THE CONGRESS SESSIONS

   Every session carries a `why` — the one reason it is asked — and the whole
   point of this section is that the `why` is NOT buried in the row. It is
   rendered as its own block under the session, labelled, with a rule down the
   side, so that it can be read on its own without reading the row first.
   ========================================================================== */

var CONG = window.CONGRESS || {};
var CONG_SESSIONS = CONG.sessions || [];
var congById = {};
CONG_SESSIONS.forEach(function (s) { congById[s.id] = s; });

function sessHead(s, link) {
  var yr = '<span class="sy">' + esc(s.y) + '</span>';
  var name = '<b>' + esc(s.place) + '</b>' +
    '<i>' + esc(s.pres) + '</i>';
  var chips = '<span class="schips">' +
    (s.n ? '<span class="chip">' + ordinal(s.n) + ' session</span>' : '') +
    (s.special ? '<span class="chip amd">Special session</span>' : '') +
    (s.none ? '<span class="chip gone">No session</span>' : '') +
    (s.disputed ? '<span class="chip struck">Lists disagree</span>' : '') +
    (s.tag ? '<span class="chip live">' + esc(s.tag) + '</span>' : '') +
    '</span>';
  var inner = yr + '<span class="stx">' + name + '</span>';
  return link
    ? '<a class="sesshead" href="#/history/session/' + encodeURIComponent(s.id) + '">' +
      inner + '</a>' + chips
    : '<div class="sesshead plain-head">' + inner + '</div>' + chips;
}

function sessBlock(s) {
  return '<div class="sess' + (s.none ? ' empty-year' : '') + '">' +
    sessHead(s, true) +
    '<div class="sesswhy"><span class="swl">Why it matters</span>' +
    /* Figures only in the list. On a page of sixty of these the term marks
       start competing with each other and with the labels - and "president",
       on a page about Congress presidents, is a column heading rather than a
       key term. A cap of nothing leaves the years and dates marked, which is
       what the eye is actually running down. */
    prose(s.why, 0) + '</div></div>';
}

function sessPage(id) {
  var s = congById[id];
  if (!s) return notFound('There is no such Congress session on this site.');

  var h = '<div class="crumb"><a href="#/history">Modern History</a> → ' +
    '<a href="#/history/congress">Congress sessions</a></div>' +
    '<div class="arthead"><div class="big" style="font-size:var(--n-lg)">' +
    esc(String(s.y).replace(/^.*?(\d{4}).*$/, '$1')) + '</div><div class="ht">' +
    '<h1>' + esc(s.place) + '</h1><div class="chips">' +
    (s.n ? '<span class="chip">' + ordinal(s.n) + ' session</span>' : '') +
    (s.special ? '<span class="chip amd">Special session</span>' : '') +
    (s.none ? '<span class="chip gone">No session held</span>' : '') +
    (s.disputed ? '<span class="chip struck">Standard lists disagree</span>' : '') +
    (s.hy ? '<span class="chip live">Asked in exams</span>' : '') +
    '</div></div></div>';

  h += factsBlock({ h: 'The session', rows: [
    ['When', s.y],
    ['Where', s.place],
    [s.none ? 'President through the gap' : 'President', s.pres],
    ['Number', s.n ? ordinal(s.n) + ' session' : (s.special ? 'Special session, unnumbered' : '—')]
  ] });

  /* On a page of its own the block has nothing to compete with, so the terms
     are marked here. */
  h += '<div class="block"><h3>Why it matters</h3><p class="plain">' +
    prose(s.why, 2) + '</p></div>';

  var i = CONG_SESSIONS.indexOf(s), out = '<div class="nextprev">';
  if (i > 0) out += '<a href="#/history/session/' + encodeURIComponent(CONG_SESSIONS[i - 1].id) +
    '"><span class="d">Previous session</span><span class="t">' +
    esc(CONG_SESSIONS[i - 1].place + ' · ' + CONG_SESSIONS[i - 1].y) + '</span></a>';
  if (i > -1 && i < CONG_SESSIONS.length - 1) out += '<a class="r" href="#/history/session/' +
    encodeURIComponent(CONG_SESSIONS[i + 1].id) + '"><span class="d">Next session</span>' +
    '<span class="t">' + esc(CONG_SESSIONS[i + 1].place + ' · ' + CONG_SESSIONS[i + 1].y) +
    '</span></a>';
  h += out + '</div>';

  return render(histShell(h));
}

function histCongress(slug) {
  var tabs = [['', 'Every session'], ['asked', 'The ones that get asked'],
              ['firsts', 'Firsts and records'], ['confusions', 'Confused pairs']];
  var known = false;
  tabs.forEach(function (t) { if (t[0] === (slug || '')) known = true; });
  if (!known) return notFound('That address does not exist in the Congress sessions section.');

  var body = '<div class="listtabs">' + tabs.map(function (t) {
    return '<button onclick="location.hash=\'#/history/congress' + (t[0] ? '/' + t[0] : '') +
      '\'" aria-pressed="' + (t[0] === (slug || '')) + '">' + esc(t[1]) + '</button>';
  }).join('') + '</div>';

  if (slug === 'firsts') {
    body += histH1('Firsts and records',
      'First president, first Muslim, first woman, first Indian woman, youngest, ' +
      'longest-serving, and the only session Gandhi ever presided over.');
    body += (CONG.firsts || []).map(factsBlock).join('');
  } else if (slug === 'confusions') {
    body += histH1('The pairs that get mixed up',
      'Besant or Naidu, Calcutta or Nagpur, elected or presiding, and the three ' +
      'different sessions at which independence was demanded.');
    body += (CONG.confusions || []).map(cmpBlock).join('');
  } else {
    var list = slug === 'asked'
      ? CONG_SESSIONS.filter(function (s) { return s.hy; })
      : CONG_SESSIONS;
    if (slug === 'asked') {
      body += histH1('The sessions that get asked',
        list.length + ' of the ' + CONG_SESSIONS.length + ' sessions carry a fact ' +
        'that is actually examined. These are those.');
    } else {
      body += histH1('The Congress sessions', CONG.lede || '');
      body += '<div class="figs">' +
        fig(CONG_SESSIONS.filter(function (s) { return !s.none; }).length, 'sessions') +
        fig(CONG_SESSIONS.filter(function (s) { return s.hy; }).length, 'asked in exams') +
        fig(CONG_SESSIONS.filter(function (s) { return s.special; }).length, 'special sessions') +
        fig((CONG.confusions || []).length, 'confused pairs') + '</div>';
      if (CONG.intro) body += '<p class="plain stack">' + prose(CONG.intro) + '</p>';
    }
    body += '<div class="stack-lg">' + list.map(sessBlock).join('') + '</div>';
  }

  return render(histShell(histCrumb('Congress sessions') + body));
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
    case 'treaties':   return histTreaties(seg[1] || '');
    case 'raj':        return histRaj(seg[1] || '');
    case 'ruler':      return rajPage(seg[1]);
    case 'congress':   return histCongress(seg[1] || '');
    case 'session':    return sessPage(seg[1]);
    case 'movement':   return render(histMovementPage(seg[1]));
    case 'event':      return render(histEventPage(seg[1]));
    default:           return notFound('That address does not exist in Modern History.');
  }
}

SUBJECTS.push({
  id: 'history',
  name: 'Modern History',
  short: 'History',
  blurb: 'India from the Company\'s charter to the Constitution — the timeline, the Acts, the people, the movements, every Congress session and every Viceroy.',
  tabs: [
    { href: '#/history',            label: 'Timeline',   match: ['', 'event'] },
    { href: '#/history/high-yield', label: 'High-yield', match: ['high-yield'] },
    { href: '#/history/acts',       label: 'Acts',       match: ['acts', 'act'] },
    { href: '#/history/people',     label: 'People',     match: ['people', 'person'] },
    { href: '#/history/movements',  label: 'Movements',  match: ['movements', 'movement'] },
    { href: '#/history/treaties',   label: 'Treaties',   match: ['treaties'] },
    { href: '#/history/congress',   label: 'Congress sessions',
      match: ['congress', 'session'] },
    { href: '#/history/raj',        label: 'Viceroys',   match: ['raj', 'ruler'] },
    { href: '#/constitution',       label: '↔ Constitution', match: [] }
  ],
  stats: function () {
    return [(HIST.timeline || []).length + ' events', (HIST.acts || []).length + ' Acts',
            CONG_SESSIONS.filter(function (x) { return !x.none; }).length + ' Congress sessions',
            rajAll.length + ' Viceroys and Governors-General'];
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
      { t: 'The treaties', href: '#/history/treaties',
        n: trtCount('main') + ' to memorise',
        w: 'Year, parties, and the war each one ended \u2014 from Alinagar in 1757 to Rawalpindi in 1919.',
        k: 'allahabad diwani salbai bassein mangalore seringapatam amritsar sugauli lahore gandamak subsidiary alliance' },
      { t: 'Treaties by war, and since 1947', href: '#/history/treaties/wars',
        n: trtCount('wars') + ' rows',
        w: 'Anglo-Maratha, Anglo-Mysore, Anglo-Sikh, Anglo-Nepalese and Anglo-Afghan, then Panchsheel to Lahore.',
        k: 'maratha mysore sikh nepal afghan panchsheel indus waters tashkent shimla lahore declaration sri lanka accord' },
      { t: 'The Congress sessions, 1885 to 1948', href: '#/history/congress',
        n: CONG_SESSIONS.filter(function (x) { return !x.none; }).length + ' sessions',
        w: 'Every session with its place and its president, and beside each one — '
           + 'set apart, not buried — the single reason it is asked.' },
      { t: 'Governors, Governors-General and Viceroys', href: '#/history/raj',
        n: rajAll.length + ' in all',
        w: 'Clive to Rajagopalachari, in order, with the policies each one brought '
           + 'in and what they did to India.' },
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
   SUBJECT: ANCIENT AND MEDIEVAL HISTORY

   Jainism and its councils, and the Mughals. Modern History here begins
   with the Company's charter in 1600, and stretching it back two thousand
   years would make its name mean nothing, so what came before is a subject
   of its own. It sits next to Modern History on the bar because a reader
   revising one is usually revising the other.
   ========================================================================= */

var EARLY = window.EARLY || {};
var earlyTopicById = {}, emperorById = {};
(EARLY.topics   || []).forEach(function (t) { earlyTopicById[t.id] = t; });
(EARLY.emperors || []).forEach(function (e) { emperorById[e.id] = e; });

var EARLY_ERAS = [
  ['ancient',  'Ancient India'],
  ['medieval', 'Medieval India: the Mughals']
];

function earlyRows(t) {
  return t.blocks.reduce(function (a, b) { return a + b.rows.length; }, 0);
}
function earlyShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

/* `trail` is a list of [label, href]; the last item is where you are and
   has no href. */
function earlyCrumb(trail) {
  if (!trail || !trail.length) return '<div class="crumb">Ancient &amp; Medieval</div>';
  return '<div class="crumb"><a href="#/early">Ancient &amp; Medieval</a>' +
    trail.map(function (x) {
      return ' → ' + (x[1] ? '<a href="' + x[1] + '">' + esc(x[0]) + '</a>' : esc(x[0]));
    }).join('') + '</div>';
}

/* 1526-30 inside one century, 1759-1806 across two: "1759-06" would read as
   a reign that ended before it began. */
function yrSpan(a, b) {
  var sa = String(a), sb = String(b);
  return sa + '–' + (sa.slice(0, 2) === sb.slice(0, 2) ? sb.slice(2) : sb);
}

function greatEmperors() {
  return (EARLY.emperors || []).filter(function (e) { return e.kind !== 'later'; });
}

function emperorRow(e) {
  return '<a class="arow hy" href="#/early/emperor/' + encodeURIComponent(e.id) + '">' +
    '<span class="no range">' + yrSpan(e.from, e.to) + '</span>' +
    '<span class="tx"><b>' + esc(e.n) + '</b><i>' + esc(shorten(e.w, 150)) + '</i></span>' +
    '<span class="tag">' + (e.kind === 'sur' ? '<span class="chip">Sur dynasty</span>' : '') +
    '</span></a>';
}

function earlyHome() {
  var topics = EARLY.topics || [];
  var total = topics.reduce(function (a, t) { return a + earlyRows(t); }, 0);
  var h = earlyCrumb([]) +
    pageH1('Before the Company',
      'Jainism and its councils from ancient India, and the Mughal empire from Babur to ' +
      'Bahadur Shah Zafar. Modern History on this site begins in 1600; this is what came before it.');

  h += '<div class="figs">' + fig(topics.length, 'topics') +
    fig(greatEmperors().length, 'emperors in detail') + fig(total, 'facts') +
    fig((EARLY.confusions || []).length, 'confused pairs') + '</div>';

  EARLY_ERAS.forEach(function (era) {
    var list = topics.filter(function (t) { return t.era === era[0]; });
    if (!list.length) return;
    h += '<div class="block"><h3>' + esc(era[1]) + '</h3><div class="grid">' +
      (era[0] === 'medieval'
        ? '<a class="pcard" href="#/early/mughals"><div class="pn">1526–1857</div>' +
          '<div class="pt">The Mughal emperors, in order</div>' +
          '<div class="pr">Babur to Aurangzeb in full, Sher Shah, and the later Mughals</div></a>'
        : '') +
      list.map(function (t) {
        return '<a class="pcard" href="#/early/topic/' + encodeURIComponent(t.id) + '">' +
          '<div class="pn">' + esc(t.n) + '</div><div class="pt">' + esc(t.w) + '</div>' +
          '<div class="pr">' + t.blocks.length + ' tables · ' + earlyRows(t) + ' facts · ' +
          (t.notes || []).length + ' SSC notes</div></a>';
      }).join('') + '</div></div>';
  });

  h += '<div class="block"><h3>The traps</h3><div class="grid">' +
    '<a class="pcard" href="#/early/confusions"><div class="pn">' +
    (EARLY.confusions || []).length + '</div><div class="pt">Confused pairs</div>' +
    '<div class="pr">The two councils at Pataliputra, the three Panipats, four tombs and their builders.</div></a>' +
    '</div></div>';

  return earlyShell(h);
}

function earlyTopicPage(id) {
  var t = earlyTopicById[id];
  if (!t) return earlyShell(earlyCrumb([['Not found']]) +
    '<div class="empty"><b>No such topic</b>Nothing on this site is filed under that name.</div>');

  var list = EARLY.topics || [], i = list.indexOf(t);
  var h = earlyCrumb([[t.n]]) + pageH1(t.n, t.w);
  if (t.intro) h += '<p class="plain stack">' + prose(t.intro) + '</p>';
  h += notesBlock(t.notes, 'the page in ' + (t.notes || []).length + ' lines');
  h += t.blocks.map(factsBlock).join('');
  if (t.era === 'medieval') {
    h += '<div class="block"><h3>Reign by reign</h3><div class="grid">' +
      '<a class="pcard" href="#/early/mughals"><div class="pn">The emperors</div>' +
      '<div class="pt">Babur to Bahadur Shah Zafar</div>' +
      '<div class="pr">Each great Mughal on a page of his own</div></a></div></div>';
  }

  var prev = list[i - 1], next = list[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/early/topic/' + encodeURIComponent(prev.id) + '">' +
      '<span class="d">Previous</span><span class="t">' + esc(prev.n) + '</span></a>' : '<span></span>') +
    (next ? '<a class="r" href="#/early/topic/' + encodeURIComponent(next.id) + '">' +
      '<span class="d">Next</span><span class="t">' + esc(next.n) + '</span></a>' : '<span></span>') +
    '</div>';
  return earlyShell(h);
}

function emperorsPage() {
  var later = (EARLY.emperors || []).filter(function (e) { return e.kind === 'later'; });
  var h = earlyCrumb([['The Mughal emperors']]) +
    pageH1('The Mughal emperors',
      'Six great Mughals from 1526 to 1707, the Sur interlude in the middle of them, and the ' +
      'fifteen decades of decline that ended with an emperor exiled to Rangoon.');
  h += notesBlock(EARLY.mughalNotes, 'the dynasty in ' + (EARLY.mughalNotes || []).length + ' lines');
  h += '<div class="block"><h3>The great Mughals, and Sher Shah</h3>' +
    greatEmperors().map(emperorRow).join('') + '</div>';
  h += factsBlock({ h: 'After Aurangzeb',
    note: 'The later Mughals are asked for one fact each, so each gets one line.',
    rows: later.map(function (e) { return [e.n + ', ' + yrSpan(e.from, e.to), e.w]; }) });
  h += '<div class="block"><h3>The Mughals by topic</h3><div class="grid">' +
    (EARLY.topics || []).filter(function (t) { return t.era === 'medieval'; }).map(function (t) {
      return '<a class="pcard" href="#/early/topic/' + encodeURIComponent(t.id) + '">' +
        '<div class="pn">' + esc(t.n) + '</div><div class="pt">' + esc(t.w) + '</div></a>';
    }).join('') + '</div></div>';
  return earlyShell(h);
}

function emperorPage(id) {
  var e = emperorById[id];
  if (!e || e.kind === 'later') return earlyShell(earlyCrumb([['The Mughal emperors', '#/early/mughals'], ['Not found']]) +
    '<div class="empty"><b>No page for that name</b>The later Mughals are listed one line each on ' +
    '<a href="#/early/mughals">the emperors page</a>.</div>');

  var all = greatEmperors(), i = all.indexOf(e);
  var h = earlyCrumb([['The Mughal emperors', '#/early/mughals'], [e.n]]) +
    '<div class="arthead"><div class="big">' + e.from + '<span style="font-size:.5em">' +
    yrSpan(e.from, e.to).slice(4) + '</span></div><div class="ht">' +
    '<h1>' + esc(e.n) + '</h1>' +
    '<div class="chips">' + (e.kind === 'sur' ? '<span class="chip">Sur dynasty</span>'
                                               : '<span class="chip live">Mughal emperor</span>') +
    (e.full ? '<span class="chip amd">' + esc(e.full) + '</span>' : '') + '</div></div></div>';

  h += notesBlock(e.notes, 'the reign in ' + (e.notes || []).length + ' lines');
  h += '<div class="block"><h3>Who he was</h3><p class="plain">' + prose(e.w) + '</p></div>';
  h += factsBlock({ h: 'Life', rows: [['Reigned', yrSpan(e.from, e.to)], ['Born', e.born],
                                      ['Died', e.died], ['Buried', e.tomb]].filter(function (r) { return r[1]; }) });
  h += '<div class="block"><h3>What happened in his reign</h3><ul class="trail">' +
    (e.key || []).map(function (k, j) {
      return '<li><span class="an">' + (j + 1) + '</span><span class="ad">' + prose(k, 2) + '</span></li>';
    }).join('') + '</ul></div>';

  var prev = all[i - 1], next = all[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/early/emperor/' + encodeURIComponent(prev.id) + '">' +
      '<span class="d">Before</span><span class="t">' + esc(prev.n) + '</span></a>' : '<span></span>') +
    (next ? '<a class="r" href="#/early/emperor/' + encodeURIComponent(next.id) + '">' +
      '<span class="d">After</span><span class="t">' + esc(next.n) + '</span></a>' : '<span></span>') +
    '</div>';
  return earlyShell(h);
}

function earlyConfusions() {
  var h = earlyCrumb([['Confused pairs']]) +
    pageH1('The pairs that get mixed up',
      'Two councils in one city, three battles on one field, and four tombs not one of which ' +
      'was built by the person inside it.');
  h += (EARLY.confusions || []).map(cmpBlock).join('');
  return earlyShell(h);
}

function earlyRoute(seg) {
  switch (seg[0] || '') {
    case '':           return render(earlyHome());
    case 'topic':      return render(earlyTopicPage(seg[1]));
    case 'mughals':    return render(emperorsPage());
    case 'emperor':    return render(emperorPage(seg[1]));
    case 'confusions': return render(earlyConfusions());
    default:           return notFound('That address does not exist in Ancient and Medieval History.');
  }
}

SUBJECTS.push({
  id: 'early',
  name: 'Ancient and Medieval History',
  short: 'Ancient & Medieval',
  blurb: 'Jainism and the Jain councils, and the Mughal empire from Babur to Bahadur Shah Zafar: the battles, the administration, the buildings and the books.',
  tabs: [
    { href: '#/early',            label: 'Topics',          match: ['', 'topic'] },
    { href: '#/early/mughals',    label: 'Mughal emperors', match: ['mughals', 'emperor'] },
    { href: '#/early/confusions', label: 'Confused pairs',  match: ['confusions'] }
  ],
  stats: function () {
    var total = (EARLY.topics || []).reduce(function (a, t) { return a + earlyRows(t); }, 0);
    return [(EARLY.topics || []).length + ' topics', greatEmperors().length + ' emperors',
            total + ' facts'];
  },
  topics: function () {
    var out = (EARLY.topics || []).map(function (t) {
      return { t: t.n, href: '#/early/topic/' + encodeURIComponent(t.id), w: t.w,
               k: t.blocks.map(function (b) { return b.h; }).join(' ') +
                  (t.era === 'medieval' ? ' mughal mughals medieval' : ' ancient'),
               n: earlyRows(t) + ' facts' };
    });
    out.splice(1, 0, { t: 'The Mughal emperors, 1526 to 1857', href: '#/early/mughals',
      n: greatEmperors().length + ' in detail',
      w: 'Babur, Humayun, Sher Shah, Akbar, Jahangir, Shah Jahan and Aurangzeb, each on a page, and the later Mughals in a line each.',
      k: 'mughal mughals babur humayun akbar jahangir shah jahan aurangzeb sher shah suri bahadur shah zafar medieval' });
    out.push({ t: 'Ancient and Medieval - confused pairs', href: '#/early/confusions',
               n: (EARLY.confusions || []).length + ' pairs',
               w: 'The two councils at Pataliputra, the three Panipats, and four tombs with four builders.' });
    return out;
  },
  route: earlyRoute
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

/* ------------------------------------------------------------ highlights

   The SSC notes. Everywhere else on the site emphasis is a change of
   typeface, applied by rule. A highlighted note is different: it is a
   one-line answer, and inside it ONE phrase is the thing the question
   asks for. A rule cannot know which phrase that is, so the data says so,
   by wrapping it in ==double equals==. The marker never appears in the
   text the reader sees and never reaches the search results.

   The highlight is a low band of yellow behind the words rather than a
   solid block, so it reads as marked on the dark ground without glaring. */
function hiMark(html) {
  return String(html).replace(/==([\s\S]+?)==/g, '<mark class="hi">$1</mark>');
}
function unmark(s) { return String(s == null ? '' : s).replace(/==/g, ''); }

/* A box of highlighted one-liners: the page reduced to what to write down. */
function notesBlock(notes, title, label) {
  if (!notes || !notes.length) return '';
  return '<aside class="ssc"><div class="ssch"><span class="sscl">' + esc(label || 'SSC notes') + '</span>' +
    (title ? '<span class="ssct">' + esc(title) + '</span>' : '') + '</div><ol>' +
    notes.map(function (n) { return '<li>' + hiMark(prose(n, 2)) + '</li>'; }).join('') +
    '</ol></aside>';
}

/* A confused pair: a heading, two or more labelled rows, and the note that
   says which one the question is actually asking about. */
function cmpBlock(c) {
  return '<div class="cmp"><div class="cmph">' + esc(c.k) + '</div>' +
    c.rows.map(function (r) {
      return '<div class="cmpr"><div class="cmpk">' + esc(r[0]) + '</div>' +
             '<div class="cmpv">' + hiMark(prose(r[1], 2)) + '</div></div>';
    }).join('') +
    (c.note ? '<div class="cmpn">' + hiMark(prose(c.note, 2)) + '</div>' : '') + '</div>';
}

/* A table of facts. Modern History calls the group `g` and its rows `items`;
   Economy and Static GK call them `h` and `rows`. Both are accepted rather
   than rewriting two data files to agree on a letter. A row may carry a
   ==highlight== on the part of it that is the answer. */
function factsBlock(g) {
  var items = g.items || g.rows || [];
  return '<div class="block"><h3>' + esc(g.g || g.h || '') + '</h3>' +
    (g.note ? '<p class="foot before">' + hiMark(esc(g.note)) + '</p>' : '') +
    '<dl class="facts">' + items.map(function (it) {
      return '<dt>' + hiMark(esc(it[0])) + '</dt><dd>' + hiMark(esc(it[1])) + '</dd>';
    }).join('') + '</dl></div>';
}

/* Same as factsBlock, but every article number in the text becomes a link.
   The article map is an index, so a row that names article 243I is only
   useful if that number is one tap from the article itself. */
function factsBlockLinked(g) {
  var items = g.items || g.rows || [];
  return '<div class="block"><h3>' + esc(g.g || g.h || '') + '</h3>' +
    (g.note ? '<p class="foot before">' + esc(g.note) + '</p>' : '') +
    '<dl class="facts">' + items.map(function (it) {
      return '<dt>' + artKey(it[0]) + '</dt><dd>' + linkArts(it[1]) + '</dd>';
    }).join('') + '</dl></div>';
}

/* linkArts links the DIGITS only, which is right inside a sentence and wrong
   here: in the map the key cell IS the article reference, so linking only the
   number leaves an eight-pixel-wide tap target on a phone. When the whole key
   is an article reference, the whole key becomes the link. */
function artKey(k) {
  var m = /^(Articles?\s+)(\d{1,3}(?:[A-Z]{1,2})?(?:-[A-Z])?)/.exec(k);
  if (m && byArt[m[2]]) {
    return '<a href="#/a/' + encodeURIComponent(m[2]) + '">' + esc(k) + '</a>';
  }
  return linkArts(k);
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
      yrSpan(p.from, p.to) + '</span>' +
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

  h += notesBlock(ECON.planNotes, 'all fifteen in ' + (ECON.planNotes || []).length + ' lines');

  h += '<div class="block"><h3>The plans, in order</h3>' +
    (ECON.plans || []).map(econPlanRow).join('') + '</div>';

  /* Built from the plans themselves rather than stored, so the summary can
     never disagree with the pages it summarises. */
  h += factsBlock({ h: 'At a glance', note: 'One line each: years, model where there was one, focus, and growth.',
    rows: (ECON.plans || []).map(function (p) {
      var head = (p.kind === 'plan' ? ordinal(p.no) + ' Plan' : p.n) + ', ' + yrSpan(p.from, p.to);
      var bits = [];
      if (p.model) bits.push(p.model);
      bits.push(p.theme);
      if (p.kind === 'plan') bits.push(econRate(p));
      return [head, bits.join(' \u00b7 ')];
    }) });

  if (ECON.planMatch && ECON.planMatch.length) h += factsBlock({ h: 'Which plan was it?',
    note: 'The question is usually put this way round: a scheme, an Act or an event, and the plan it fell in.',
    rows: ECON.planMatch || [] });

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
    '<div class="arthead"><div class="big">' + p.from + '<span style="font-size:.5em">' +
    yrSpan(p.from, p.to).slice(4) + '</span></div><div class="ht">' +
    '<h1>' + esc(p.n) + '</h1>' +
    '<div class="chips">' +
      (p.kind === 'gap' ? '<span class="chip">not a Five Year Plan</span>' :
        '<span class="chip live">Plan ' + p.no + '</span>') +
      (p.model ? '<span class="chip amd">' + esc(p.model) + '</span>' : '') +
    '</div></div></div>';

  h += notesBlock(p.ssc, p.kind === 'plan' ? 'the plan in ' + (p.ssc || []).length + ' lines'
                                            : 'the gap in ' + (p.ssc || []).length + ' lines');

  h += '<div class="block"><h3>What it was for</h3>' +
    '<p class="plain">' + prose(p.theme) + '</p>' +
    '<p class="plain">' + prose(p.w) + '</p></div>';

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

  if (p.note) h += '<div class="block"><div class="why">' + prose(p.note) + '</div></div>';

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
  h += notesBlock(r.notes, '1991 in ' + (r.notes || []).length + ' lines');
  if (r.dates) h += factsBlock({ h: 'The dates, in order', rows: r.dates });

  h += '<div class="block"><h3>' + esc((r.crisis || {}).h || 'How the crisis built') + '</h3>' +
    '<p class="plain">' + prose((r.crisis || {}).w || '') + '</p>' +
    '<dl class="facts">' + ((r.crisis || {}).rows || []).map(function (x) {
      return '<dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd>';
    }).join('') + '</dl></div>';

  (r.lpg || []).forEach(function (part) {
    h += '<div class="block"><h3>' + esc(part.k) + '</h3>' +
      '<p class="plain">' + prose(part.w) + '</p>' +
      '<dl class="facts">' + part.rows.map(function (x) {
        return '<dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd>';
      }).join('') + '</dl></div>';
  });

  if (r.terms) h += factsBlock({ h: 'The words the questions use', rows: r.terms });
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
  if (t.intro) h += '<p class="plain stack">' + prose(t.intro) + '</p>';
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
        w: 'Every plan from 1951 to 2017 — its model, its target, what it achieved and what happened in it — with SSC notes, a one-line-each table, and which scheme fell in which plan.',
        k: 'harrod domar mahalanobis gadgil formula garibi hatao rolling plan plan holiday annual plans nabard irdp which plan at a glance ssc notes' },
      { t: 'The 1991 reforms', href: '#/economy/reforms', n: 'liberalisation, privatisation, globalisation',
        w: 'The balance of payments crisis, the gold flown to London, the dates in order, and the three kinds of change that followed.',
        k: 'lpg new economic policy nep narasimha rao manmohan singh gold devaluation stabilisation structural adjustment fera fema sebi narasimham chelliah' }
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
   Twenty-two packs of the material that does not change from year to year.
   ========================================================================= */

var GKD = window.GK || {};
var gkPackById = {};
(GKD.packs || []).forEach(function (p) { gkPackById[p.id] = p; });

var GK_SEE_ALSO = {
  sports: ['cups',   'Every cup and trophy, sport by sport, is in'],
  cups:   ['sports', 'Players on a side, the terms of each game and the Olympic milestones are in'],
  space:  ['isro',   'Every ISRO mission in order, the centres, the rockets and what is coming next are in'],
  isro:   ['space',  'The nuclear programme, the missiles and the armed forces are in'],
  hq:     ['orgs',   'The UN\'s organs, every agency with its year, the groupings and who heads what are in'],
  orgs:   ['hq',     'The one-line headquarters list, with the Indian institutions, is in'],
  'paris-2024': ['sports', 'Every Indian Olympic milestone before Paris is in'],
  books:  ['awards', 'The other awards and honours, civilian to sporting, are in']
};

function gkRows(p) {
  return p.blocks.reduce(function (a, b) { return a + b.rows.length; }, 0);
}

function gkShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function gkHome() {
  var total = (GKD.packs || []).reduce(function (a, p) { return a + gkRows(p); }, 0);
  var h = '<div class="crumb">Static GK</div>' +
    pageH1('The facts that do not move',
      (GKD.packs || []).length + ' packs of static general knowledge — chosen because the answer is the same this year as ' +
      'last. Current affairs are kept apart, in the dated study sets: they go stale, and mixing them in is how a ' +
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
  if (p.intro) h += '<p class="plain stack">' + prose(p.intro) + '</p>';
  h += notesBlock(p.notes, 'the pack in ' + (p.notes || []).length + ' lines');
  /* The short pack and the full one on the same ground point at each
     other, so a reader on the revision version knows the full one exists. */
  var see = GK_SEE_ALSO[p.id];
  if (see && gkPackById[see[0]]) {
    h += '<p class="why stack">' + esc(see[1]) + ' <a href="#/gk/pack/' + see[0] + '">' +
      esc(gkPackById[see[0]].n) + '</a>.</p>';
  }
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
  blurb: 'National symbols, dances, awards, sports and every cup by sport, Paris 2024, rivers and dams, parks, heritage sites, days, books and authors, international organisations, science, ISRO\'s missions and the states.',
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
  if (t.intro) h += '<p class="plain stack">' + prose(t.intro) + '</p>';
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

/* =========================================================================
   SUBJECT: ADVANCED MATHS

   The sixth subject, and the first one that is not a thing to read. The
   other five answer "what is the rule"; this one answers "do I actually
   know the rule", which is a different question and needs a different
   page. So every chapter has three views:

     the sheet     every formula with its prompt and its note, open. This
                   is the reference view - what you read.
     the recall    the prompt alone, one at a time, with the formula hidden
                   until you ask for it. You mark whether you had it. This
                   is the only view that can tell you something you did not
                   already know.
     the practice  four options, one right, a worked line for the answer and
                   a named error for each wrong one. SSC asks the formulas
                   through questions, so the last step is questions.

   WHAT IS REMEMBERED AND WHERE. The marks you give yourself in the recall
   drill, and the questions you get wrong in practice, are kept in
   localStorage under the keys below - on the device, never sent anywhere,
   and the site works identically with storage blocked (every read and write
   is wrapped). The Review page is built entirely from those two stores: it
   is the list of what you have told the site you do not know yet.

   TWO THINGS DELIBERATELY NOT DONE. There is no timer, because a formula
   you can only produce against a clock is not yet learnt and a clock at
   this stage teaches guessing. And nothing here is scored across chapters
   into a single number - a percentage hides which chapter is weak, which is
   the only thing the page is for.
   ========================================================================= */

var MATH  = window.MATHS || {};
var MATHQ = (window.MATHS_MCQ || {}).banks || {};
var mathChap = {};
(MATH.chapters || []).forEach(function (c) { mathChap[c.id] = c; });

var MATH_BANDS = [
  ['advanced', 'Advanced maths',
   'The eight chapters that make up the advance block of Tier-1 and almost all of Tier-2 Section-1.'],
  ['arith', 'Profit and mixture',
   'Arithmetic, not advance maths - kept in its own band so that revising one does not silently mean revising the other.']
];

function mathRows(c) {
  return c.blocks.reduce(function (a, b) { return a + b.rows.length; }, 0);
}
function mathQcount(id) { return (MATHQ[id] || []).length; }
function mathBandChaps(band) {
  return (MATH.chapters || []).filter(function (c) { return c.band === band; });
}
function mathAllRows() {
  return (MATH.chapters || []).reduce(function (a, c) { return a + mathRows(c); }, 0);
}
function mathAllQs() {
  return Object.keys(MATHQ).reduce(function (a, k) { return a + MATHQ[k].length; }, 0);
}
function mathAllFigs() {
  return (MATH.chapters || []).reduce(function (a, c) { return a + (c.figs || []).length; }, 0);
}

/* ------------------------------------------------------------- the stores

   Two keys, both optional. A browser in private mode, or one with site data
   blocked, throws on the first localStorage access - so every read returns a
   default and every write fails silently. Nothing on these pages depends on
   a store having worked. */

var MK_RECALL = 'am.maths.recall.v1';   /* { "<chapter>|<block>|<row>": "know" | "again" } */
var MK_WRONG  = 'am.maths.wrong.v1';    /* { "<chapter>|<index>": 1 } */

function mathGet(key) {
  try {
    var raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) || {}) : {};
  } catch (e) { return {}; }
}
function mathPut(key, obj) {
  try { localStorage.setItem(key, JSON.stringify(obj)); } catch (e) { /* fine */ }
}
function mathMark(key, id, value) {
  var all = mathGet(key);
  if (value === null) delete all[id]; else all[id] = value;
  mathPut(key, all);
}

/* How a chapter is doing, read off the recall store. */
function mathProgress(c) {
  var marks = mathGet(MK_RECALL), know = 0, again = 0;
  c.blocks.forEach(function (b, bi) {
    b.rows.forEach(function (r, ri) {
      var v = marks[c.id + '|' + bi + '|' + ri];
      if (v === 'know') know++; else if (v === 'again') again++;
    });
  });
  return { know: know, again: again, total: mathRows(c) };
}

function mathShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function mathCrumb(c, here) {
  return '<div class="crumb"><a href="#/maths">Advanced Maths</a>' +
    (c ? ' → <a href="#/maths/chapter/' + encodeURIComponent(c.id) + '">' + esc(c.short || c.n) + '</a>' : '') +
    (here ? ' → ' + esc(here) : '') + '</div>';
}

/* The three-way switch that sits at the top of every chapter page. It is
   not subTabs(): these are three different ACTIVITIES on the same chapter,
   not three views of one list, and they deserve a label each. */
function mathModes(id, active) {
  var modes = [['chapter', 'The sheet', 'every formula, open'],
               ['recall',  'Recall drill', 'prompt first, formula hidden'],
               ['practice','Practice', mathQcount(id) + ' questions']];
  return '<div class="mmodes">' + modes.map(function (m) {
    var on = m[0] === active;
    return '<a class="mmode' + (on ? ' on' : '') + '" href="#/maths/' + m[0] + '/' +
      encodeURIComponent(id) + '"' + (on ? ' aria-current="page"' : '') + '>' +
      '<b>' + esc(m[1]) + '</b><i>' + esc(m[2]) + '</i></a>';
  }).join('') + '</div>';
}

/* A figure. The SVG is written in the data file and goes in as-is - it is
   ours, not user input, and escaping it would print the markup. */
function mathFig(f) {
  return '<figure class="mfig" id="fig-' + esc(f.id) + '">' + f.svg +
    '<figcaption>' + esc(f.cap) + '</figcaption></figure>';
}

function mathTag(t) {
  if (t === 'trick') return '<span class="chip mtrick">shortcut</span>';
  if (t === 'trap')  return '<span class="chip mtrap">commonly wrong</span>';
  return '';
}

/* ------------------------------------------------------------------- home */

function mathHome() {
  var h = '<div class="crumb">Advanced Maths</div>' +
    pageH1('The formulas, and whether you actually have them',
      'Eleven chapters. Each one in three views: the sheet to read, the recall drill that hides the ' +
      'formula until you have produced it, and the practice questions that ask it the way SSC asks it.');

  h += '<div class="figs">' + fig((MATH.chapters || []).length, 'chapters') +
    fig(mathAllRows(), 'formulas') + fig(mathAllQs(), 'questions') +
    fig(mathAllFigs(), 'diagrams') + '</div>';

  var wrong = Object.keys(mathGet(MK_WRONG)).length;
  var marks = mathGet(MK_RECALL);
  var again = Object.keys(marks).filter(function (k) { return marks[k] === 'again'; }).length;
  if (wrong || again) {
    h += '<div class="mresume"><b>Where you left off</b>' +
      '<span>' + again + ' formula' + (again === 1 ? '' : 's') + ' flagged as needing work, and ' +
      wrong + ' question' + (wrong === 1 ? '' : 's') + ' got wrong.</span>' +
      '<a class="pill big" href="#/maths/review">Open the review list →</a></div>';
  }

  MATH_BANDS.forEach(function (b) {
    var chaps = mathBandChaps(b[0]);
    if (!chaps.length) return;
    h += '<div class="block"><h3>' + esc(b[1]) + '</h3>' +
      '<p class="foot before">' + esc(b[2]) + '</p><div class="grid">' +
      chaps.map(function (c) {
        var p = mathProgress(c);
        var bar = p.total ? Math.round(100 * p.know / p.total) : 0;
        return '<a class="pcard mcard" href="#/maths/chapter/' + encodeURIComponent(c.id) + '">' +
          '<div class="pn">' + esc(c.n) + '</div>' +
          '<div class="pt">' + esc(c.w) + '</div>' +
          '<div class="pr">' + mathRows(c) + ' formulas · ' + mathQcount(c.id) + ' questions' +
          ((c.figs || []).length ? ' · ' + c.figs.length + ' diagrams' : '') + '</div>' +
          (p.know || p.again
            ? '<div class="mbar" role="img" aria-label="' + bar + ' per cent marked known">' +
              '<span style="width:' + bar + '%"></span></div>' +
              '<div class="pr">' + p.know + ' known · ' + p.again + ' to work on</div>'
            : '') +
          '</a>';
      }).join('') + '</div></div>';
  });

  h += '<p class="foot">Nothing here is timed and nothing is scored into one number. ' +
    'A single percentage would hide which chapter is weak, and which chapter is weak is the ' +
    'only thing these pages are for. The marks you give yourself stay on this device.</p>';

  return mathShell(h);
}

/* --------------------------------------------------------- the sheet view */

function mathChapterPage(id) {
  var c = mathChap[id];
  if (!c) return notFound('There is no such chapter in Advanced Maths.');
  var chaps = MATH.chapters || [], i = chaps.indexOf(c);
  var p = mathProgress(c);

  var h = mathCrumb(null, c.n) + pageH1(c.n, c.w) + mathModes(id, 'chapter');

  if (c.intro) h += '<p class="plain stack">' + esc(c.intro) + '</p>';

  h += '<div class="figs">' + fig(mathRows(c), 'formulas') +
    fig(c.blocks.length, 'groups') + fig(mathQcount(id), 'questions') +
    (p.know ? fig(p.know, 'marked known') : '') + '</div>';

  /* A jump list, because a sheet of seventy formulas is a page you scroll
     past rather than a page you use. */
  if (c.blocks.length > 2) {
    h += '<nav class="mjump" aria-label="Groups in this chapter"><span class="lbl">In this chapter</span>' +
      c.blocks.map(function (b, bi) {
        return '<button type="button" data-jump="mb-' + bi + '">' + esc(b.h) + '</button>';
      }).join('') + '</nav>';
  }

  if ((c.figs || []).length) {
    h += '<div class="block"><h3>The diagrams</h3>' +
      '<p class="foot before">Each theorem in this chapter is drawn once, in the position the ' +
      'paper draws it. A theorem you can recite and cannot recognise in a figure is not yet usable.</p>' +
      '<div class="mfigs">' + c.figs.map(mathFig).join('') + '</div></div>';
  }

  h += c.blocks.map(function (b, bi) {
    return '<div class="block" id="mb-' + bi + '"><h3>' + esc(b.h) + '</h3>' +
      (b.note ? '<p class="foot before">' + esc(b.note) + '</p>' : '') +
      '<div class="msheet">' + b.rows.map(function (r) {
        return '<div class="mrow">' +
          '<div class="mp">' + esc(r.p) + (r.t ? ' ' + mathTag(r.t) : '') + '</div>' +
          '<div class="mf">' + esc(r.f) + '</div>' +
          '<div class="md">' + esc(r.d) + '</div></div>';
      }).join('') + '</div></div>';
  }).join('');

  h += '<div class="stack"><a class="pill big" href="#/maths/recall/' + encodeURIComponent(id) +
    '">Now hide them and see what you have →</a></div>';

  var prev = chaps[i - 1], next = chaps[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/maths/chapter/' + encodeURIComponent(prev.id) + '">' +
      '<span class="d">Previous</span><span class="t">' + esc(prev.n) + '</span></a>' : '<span></span>') +
    (next ? '<a class="r" href="#/maths/chapter/' + encodeURIComponent(next.id) + '">' +
      '<span class="d">Next</span><span class="t">' + esc(next.n) + '</span></a>' : '<span></span>') +
    '</div>';

  render(mathShell(h));
  mathWireJump();
}

/* The jump list scrolls rather than navigating, because a real #hash would
   fight the router - every address on this site begins #/. */
function mathWireJump() {
  var nav = main.querySelector('.mjump');
  if (!nav) return;
  nav.addEventListener('click', function (e) {
    var a = e.target.closest('button[data-jump]');
    if (!a) return;
    var el = document.getElementById(a.getAttribute('data-jump'));
    if (el) el.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
}

/* -------------------------------------------------------- the recall drill

   One prompt on the screen, the formula hidden, and two buttons once it is
   shown. Deliberately one at a time: a page of cards with the answers a
   scroll away is read, not recalled, and reading is what the sheet is for.

   The order is the chapter's own by default. "Shuffle" matters more here
   than it looks - a formula you only know in position is not known, and the
   x + 1/x block in particular teaches itself in sequence if you let it. */

var mathDrill = null;

function mathRecallPage(id) {
  var c = mathChap[id];
  if (!c) return notFound('There is no such chapter in Advanced Maths.');

  var flat = [];
  c.blocks.forEach(function (b, bi) {
    b.rows.forEach(function (r, ri) {
      flat.push({ r: r, h: b.h, key: c.id + '|' + bi + '|' + ri });
    });
  });

  mathDrill = { id: id, all: flat, list: flat.slice(), i: 0, shuffled: false, onlyFlagged: false };

  render(mathShell(mathCrumb(null, c.n) +
    pageH1(c.n + ' — recall drill',
      'The prompt first. Produce the formula in your head, out loud or on paper, and only then show it. ' +
      'Marking honestly is the entire value of this page.') +
    mathModes(id, 'recall') +
    '<div id="mdrill"></div>'));
  mathDrawDrill();
}

function mathDrawDrill() {
  var box = document.getElementById('mdrill');
  if (!box || !mathDrill) return;
  var d = mathDrill, marks = mathGet(MK_RECALL);

  var know = 0, again = 0;
  d.all.forEach(function (x) {
    if (marks[x.key] === 'know') know++; else if (marks[x.key] === 'again') again++;
  });

  var head = '<div class="mdhead">' +
    '<div class="mdstat"><b>' + know + '</b> known <b>' + again + '</b> to work on <b>' +
      (d.all.length - know - again) + '</b> untouched</div>' +
    '<div class="listtabs">' +
      '<button type="button" data-act="shuffle" aria-pressed="' + d.shuffled + '">Shuffle</button>' +
      '<button type="button" data-act="flagged" aria-pressed="' + d.onlyFlagged + '">' +
        'Only what I flagged (' + again + ')</button>' +
      '<button type="button" data-act="reset">Clear this chapter’s marks</button>' +
    '</div></div>';

  if (!d.list.length) {
    box.innerHTML = head + '<div class="empty"><b>Nothing flagged in this chapter</b>' +
      'Turn the filter off to run the whole chapter again.</div>';
    mathWireDrill();
    return;
  }

  if (d.i >= d.list.length) {
    box.innerHTML = head +
      '<div class="mdone"><b>End of the run</b>' +
      '<span>' + d.list.length + ' prompt' + (d.list.length === 1 ? '' : 's') + ' seen. ' +
      (again ? again + ' still flagged — run them again, or go and see them asked as questions.'
             : 'Nothing left flagged in this chapter.') + '</span>' +
      '<div class="stack"><button class="pill big" type="button" data-act="restart">Run it again</button> ' +
      '<a class="pill big" href="#/maths/practice/' + encodeURIComponent(d.id) + '">Practice questions →</a></div></div>';
    mathWireDrill();
    return;
  }

  var it = d.list[d.i], mark = marks[it.key] || '';
  var pct = Math.round(100 * d.i / d.list.length);

  box.innerHTML = head +
    '<div class="mprog"><span style="width:' + pct + '%"></span></div>' +
    '<div class="mcount">' + (d.i + 1) + ' of ' + d.list.length + ' · ' + esc(it.h) + '</div>' +
    '<div class="mdcard">' +
      '<div class="mdp">' + esc(it.r.p) + (it.r.t ? ' ' + mathTag(it.r.t) : '') + '</div>' +
      (mark ? '<div class="mdwas">You marked this “' +
        (mark === 'know' ? 'known' : 'needs work') + '” last time.</div>' : '') +
      '<div id="mdans" hidden>' +
        '<div class="mdf">' + esc(it.r.f) + '</div>' +
        '<div class="mdd">' + esc(it.r.d) + '</div>' +
      '</div>' +
      '<div class="mdacts" id="mdacts">' +
        '<button class="pill big" type="button" data-act="show">Show the formula</button>' +
      '</div>' +
    '</div>' +
    '<div class="mdnav">' +
      '<button type="button" data-act="back"' + (d.i ? '' : ' disabled') + '>Back</button>' +
      '<button type="button" data-act="skip">Skip</button>' +
    '</div>';

  mathWireDrill();
}

function mathWireDrill() {
  var box = document.getElementById('mdrill');
  if (!box || box.getAttribute('data-wired')) return;
  box.setAttribute('data-wired', '1');
  box.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-act]');
    if (!btn) return;
    var act = btn.getAttribute('data-act'), d = mathDrill;
    if (!d) return;

    if (act === 'show') {
      var ans = document.getElementById('mdans');
      if (ans) ans.hidden = false;
      var acts = document.getElementById('mdacts');
      if (acts) acts.innerHTML =
        '<button class="pill big mgood" type="button" data-act="know">I had it</button>' +
        '<button class="pill big mbad" type="button" data-act="again">I did not — flag it</button>';
      return;
    }
    if (act === 'know' || act === 'again') {
      mathMark(MK_RECALL, d.list[d.i].key, act);
      d.i++;
      mathDrawDrill();
      return;
    }
    if (act === 'skip')    { d.i++; mathDrawDrill(); return; }
    if (act === 'back')    { if (d.i) d.i--; mathDrawDrill(); return; }
    if (act === 'restart') { d.i = 0; mathDrawDrill(); return; }
    if (act === 'shuffle') {
      d.shuffled = !d.shuffled;
      mathRebuildDrill();
      return;
    }
    if (act === 'flagged') {
      d.onlyFlagged = !d.onlyFlagged;
      mathRebuildDrill();
      return;
    }
    if (act === 'reset') {
      var marks = mathGet(MK_RECALL);
      d.all.forEach(function (x) { delete marks[x.key]; });
      mathPut(MK_RECALL, marks);
      d.onlyFlagged = false;
      mathRebuildDrill();
      return;
    }
  });
}

function mathRebuildDrill() {
  var d = mathDrill;
  if (!d) return;
  var marks = mathGet(MK_RECALL);
  d.list = d.all.filter(function (x) {
    return !d.onlyFlagged || marks[x.key] === 'again';
  });
  if (d.shuffled) {
    for (var j = d.list.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1)), t = d.list[j];
      d.list[j] = d.list[k]; d.list[k] = t;
    }
  }
  d.i = 0;
  mathDrawDrill();
}

/* ----------------------------------------------------------- the practice

   One question, four options, and the answer the moment you choose - not at
   the end. A score at the end of twenty questions tells you a number; the
   solution the moment you are wrong tells you which step you missed, and
   that is the only part worth having.

   Every wrong answer is written to the store, so the Review page can show
   the list later. A question answered right a second time clears it. */

var mathQuiz = null;

function mathPracticePage(id) {
  var c = mathChap[id];
  if (!c) return notFound('There is no such chapter in Advanced Maths.');
  var bank = MATHQ[id] || [];

  if (!bank.length) {
    return render(mathShell(mathCrumb(null, c.n) + pageH1(c.n + ' — practice', '') +
      mathModes(id, 'practice') +
      '<div class="empty"><b>No questions in this chapter yet</b>' +
      'The formula sheet and the recall drill are both there.</div>'));
  }

  var order = [];
  for (var j = 0; j < bank.length; j++) order.push(j);
  for (var m = order.length - 1; m > 0; m--) {
    var k = Math.floor(Math.random() * (m + 1)), t = order[m];
    order[m] = order[k]; order[k] = t;
  }

  mathQuiz = { id: id, order: order, i: 0, right: 0, wrong: [], answered: false };

  render(mathShell(mathCrumb(null, c.n) +
    pageH1(c.n + ' — practice',
      bank.length + ' questions in the SSC shape, in a different order each time. Every wrong option is ' +
      'a real error rather than filler, and the solution names which one you made.') +
    mathModes(id, 'practice') +
    '<div id="mquiz"></div>'));
  mathDrawQuiz();
}

function mathDrawQuiz() {
  var box = document.getElementById('mquiz');
  if (!box || !mathQuiz) return;
  var q = mathQuiz, bank = MATHQ[q.id] || [];

  if (q.i >= q.order.length) {
    var pct = Math.round(100 * q.right / q.order.length);
    box.innerHTML = '<div class="mdone"><b>' + q.right + ' right out of ' + q.order.length +
      '</b><span>' + pct + ' per cent. ' +
      (q.wrong.length
        ? 'The ' + q.wrong.length + ' you missed are below, and they are kept on the review page too.'
        : 'Nothing missed. Shuffle the recall drill and try the chapter cold.') + '</span>' +
      '<div class="stack"><button class="pill big" type="button" data-act="again">Run it again</button> ' +
      '<a class="pill big" href="#/maths/recall/' + encodeURIComponent(q.id) + '">Back to the drill</a> ' +
      '<a class="pill big" href="#/maths/review">The whole review list →</a></div></div>' +
      (q.wrong.length ? '<div class="block"><h3>What you missed</h3>' +
        q.wrong.map(function (qi) { return mathWrongCard(q.id, qi); }).join('') + '</div>' : '');
    mathWireQuiz();
    return;
  }

  var qi = q.order[q.i], it = bank[qi];
  var pct2 = Math.round(100 * q.i / q.order.length);

  box.innerHTML =
    '<div class="mprog"><span style="width:' + pct2 + '%"></span></div>' +
    '<div class="mcount">Question ' + (q.i + 1) + ' of ' + q.order.length +
      ' · ' + q.right + ' right so far</div>' +
    '<div class="mq"><div class="mqq">' + esc(it.q) + '</div>' +
    '<div class="mqo" id="mqo">' + it.o.map(function (o, oi) {
      return '<button type="button" class="mopt" data-pick="' + oi + '">' +
        '<span class="ml">' + 'ABCD'.charAt(oi) + '</span><span class="mt">' + esc(o) + '</span></button>';
    }).join('') + '</div>' +
    '<div id="mqs"></div></div>';

  mathWireQuiz();
}

function mathWrongCard(chId, qi) {
  var it = (MATHQ[chId] || [])[qi];
  if (!it) return '';
  var ch = mathChap[chId];
  return '<div class="mwrong"><div class="mqq">' + esc(it.q) + '</div>' +
    '<div class="mans">' + esc('ABCD'.charAt(it.a)) + ' · ' + esc(it.o[it.a]) + '</div>' +
    '<div class="mqsol">' + esc(it.s) + '</div>' +
    (ch ? '<div class="pr"><a href="#/maths/chapter/' + encodeURIComponent(chId) + '">' +
      esc(ch.n) + '</a></div>' : '') + '</div>';
}

function mathWireQuiz() {
  var box = document.getElementById('mquiz');
  if (!box || box.getAttribute('data-wired')) return;
  box.setAttribute('data-wired', '1');
  box.addEventListener('click', function (e) {
    var q = mathQuiz;
    if (!q) return;

    var next = e.target.closest('[data-act]');
    if (next) {
      var act = next.getAttribute('data-act');
      if (act === 'next')  { q.i++; q.answered = false; mathDrawQuiz(); return; }
      if (act === 'again') { mathPracticePage(q.id); return; }
      return;
    }

    var opt = e.target.closest('.mopt');
    if (!opt || q.answered) return;
    q.answered = true;

    var qi = q.order[q.i], it = (MATHQ[q.id] || [])[qi];
    var pick = parseInt(opt.getAttribute('data-pick'), 10);
    var ok = pick === it.a;

    var buttons = box.querySelectorAll('.mopt');
    for (var j = 0; j < buttons.length; j++) {
      var bi = parseInt(buttons[j].getAttribute('data-pick'), 10);
      buttons[j].disabled = true;
      if (bi === it.a) buttons[j].className = 'mopt right';
      else if (bi === pick) buttons[j].className = 'mopt wrong';
      else buttons[j].className = 'mopt dim';
    }

    if (ok) {
      q.right++;
      mathMark(MK_WRONG, q.id + '|' + qi, null);
    } else {
      q.wrong.push(qi);
      mathMark(MK_WRONG, q.id + '|' + qi, 1);
    }

    var sol = document.getElementById('mqs');
    if (sol) sol.innerHTML =
      '<div class="mqsol' + (ok ? ' ok' : '') + '">' +
      '<b>' + (ok ? 'Right.' : 'Not that one — the answer is ' + esc('ABCD'.charAt(it.a)) +
        ', ' + esc(it.o[it.a]) + '.') + '</b> ' + esc(it.s) + '</div>' +
      '<div class="stack"><button class="pill big" type="button" data-act="next">' +
      (q.i + 1 >= q.order.length ? 'See the score' : 'Next question') + '</button></div>';
  });
}

/* -------------------------------------------------------------- the review

   Built from nothing but the two stores: the formulas you flagged and the
   questions you got wrong. If both are empty the page says so rather than
   inventing a list, because an empty review list is the correct output and
   not an error state. */

function mathReviewPage() {
  var marks = mathGet(MK_RECALL), wrongs = mathGet(MK_WRONG);

  var flagged = [];
  (MATH.chapters || []).forEach(function (c) {
    c.blocks.forEach(function (b, bi) {
      b.rows.forEach(function (r, ri) {
        if (marks[c.id + '|' + bi + '|' + ri] === 'again') {
          flagged.push({ c: c, b: b, r: r });
        }
      });
    });
  });

  var missed = [];
  Object.keys(wrongs).forEach(function (k) {
    var bits = k.split('|'), chId = bits[0], qi = parseInt(bits[1], 10);
    if (mathChap[chId] && (MATHQ[chId] || [])[qi]) missed.push({ id: chId, qi: qi });
  });
  missed.sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : a.qi - b.qi; });

  var h = '<div class="crumb"><a href="#/maths">Advanced Maths</a> → Review</div>' +
    pageH1('What you have told the site you do not know',
      'Every formula you flagged in a recall drill and every question you got wrong, across all eleven ' +
      'chapters. Nothing on this page was chosen for you.');

  h += '<div class="figs">' + fig(flagged.length, 'formulas flagged') +
    fig(missed.length, 'questions missed') + '</div>';

  if (!flagged.length && !missed.length) {
    h += '<div class="empty"><b>The list is empty</b>' +
      'Either nothing has been flagged yet, or this browser is not keeping site data. ' +
      'Run a recall drill and flag what you miss — this page is built from those marks and nothing else.' +
      '<div class="stack"><a class="pill" href="#/maths">Pick a chapter</a></div></div>';
    return render(mathShell(h));
  }

  if (flagged.length) {
    /* Grouped by chapter, because "weak in algebra" is a useful sentence and
       "weak in forty scattered formulas" is not. */
    var byChap = {};
    flagged.forEach(function (x) {
      (byChap[x.c.id] = byChap[x.c.id] || { c: x.c, rows: [] }).rows.push(x);
    });
    h += '<div class="block"><h3>The formulas you flagged</h3>' +
      '<p class="foot before">In chapter order, with the group each one came from. ' +
      'Clearing a mark here is the same as marking it known in the drill.</p>' +
      Object.keys(byChap).map(function (k) {
        var g = byChap[k];
        return '<div class="mrevgrp"><div class="mrevh"><a href="#/maths/recall/' +
          encodeURIComponent(g.c.id) + '">' + esc(g.c.n) + '</a>' +
          '<span>' + g.rows.length + ' flagged</span></div>' +
          '<div class="msheet">' + g.rows.map(function (x) {
            return '<div class="mrow"><div class="mp">' + esc(x.r.p) + '</div>' +
              '<div class="mf">' + esc(x.r.f) + '</div>' +
              '<div class="md">' + esc(x.r.d) + '</div></div>';
          }).join('') + '</div></div>';
      }).join('') + '</div>';
  }

  if (missed.length) {
    h += '<div class="block"><h3>The questions you got wrong</h3>' +
      '<p class="foot before">A question leaves this list the next time you answer it correctly.</p>' +
      missed.map(function (x) { return mathWrongCard(x.id, x.qi); }).join('') + '</div>';
  }

  h += '<div class="stack"><button class="pill big" type="button" id="mclear">' +
    'Clear everything on this page</button></div>';

  render(mathShell(h));

  var btn = document.getElementById('mclear');
  if (btn) btn.addEventListener('click', function () {
    mathPut(MK_RECALL, {});
    mathPut(MK_WRONG, {});
    mathReviewPage();
  });
}

/* ------------------------------------------------------------------ route */

function mathsRoute(seg) {
  switch (seg[0] || '') {
    case '':         return render(mathHome());
    case 'chapter':  return mathChapterPage(seg[1]);
    case 'recall':   return mathRecallPage(seg[1]);
    case 'practice': return mathPracticePage(seg[1]);
    case 'review':   return mathReviewPage();
    default:         return notFound('That address does not exist in Advanced Maths.');
  }
}

SUBJECTS.push({
  id: 'maths',
  name: 'Advanced Maths',
  short: 'Maths',
  blurb: 'Algebra, triangles, circles, polygons, mensuration 2D and 3D, trigonometry, height and distance and coordinate geometry — each with a recall drill and SSC-shaped questions. Profit, loss and mixture are kept separate.',
  tabs: [
    { href: '#/maths',        label: 'All chapters', match: ['', 'chapter'] },
    { href: '#/maths/recall/algebra',   label: 'Recall drill', match: ['recall'] },
    { href: '#/maths/practice/algebra', label: 'Practice',     match: ['practice'] },
    { href: '#/maths/review', label: 'Review list', match: ['review'] }
  ],
  stats: function () {
    return [(MATH.chapters || []).length + ' chapters', mathAllRows() + ' formulas',
            mathAllQs() + ' questions', mathAllFigs() + ' diagrams'];
  },
  topics: function () {
    return (MATH.chapters || []).map(function (c) {
      return { t: c.n, href: '#/maths/chapter/' + encodeURIComponent(c.id), w: c.w,
               k: c.blocks.map(function (b) { return b.h; }).join(' ') + ' ' +
                  (c.band === 'arith' ? 'arithmetic profit mixture' : 'advance maths'),
               n: mathRows(c) + ' formulas' };
    }).concat([
      { t: 'Maths — the review list', href: '#/maths/review', n: 'what you flagged',
        w: 'Every formula you flagged in a drill and every question you got wrong, in one place.',
        k: 'wrong answers weak formulas revision mistakes' }
    ]);
  },
  route: mathsRoute
});

/* =========================================================================
   SUBJECT: THE NEW CRIMINAL LAWS

   WHY A SUBJECT RATHER THAN A STATIC GK PACK. Because the questions are
   about numbers. Since 2024 a general awareness paper has asked which
   Sanhita replaced which Code, which section now carries murder, and what
   section 152 created in place of sedition. A pack of three names answers
   none of that - and an answer that still says "IPC 302" is simply wrong
   for any offence on or after 1 July 2024.

   WHY IT SITS BESIDE THE CONSTITUTION RATHER THAN INSIDE IT. The
   Constitution subject is one document, extracted from the Government's own
   publication and printed word for word. These three are a different kind
   of thing: a reading of three new Acts, written from the police handbooks
   and the standard commentaries, with the places where those commentaries
   disagree named rather than smoothed over. Keeping them apart keeps the
   claim each subject makes about its own reliability honest.

   It reuses factsBlock and cmpBlock, so the whole subject is about ninety
   lines here and lives in its data file.
   ========================================================================= */

var LAW = window.LAWS || {};
var lawTopicById = {};
(LAW.topics || []).forEach(function (t) { lawTopicById[t.id] = t; });

function lawRows(t) {
  return t.blocks.reduce(function (a, b) { return a + b.rows.length; }, 0);
}
function lawAllRows() {
  return (LAW.topics || []).reduce(function (a, t) { return a + lawRows(t); }, 0);
}

function lawShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function lawHome() {
  var h = '<div class="crumb">The new criminal laws</div>' +
    pageH1('Three Acts, one date, and a great many new numbers',
      'The Bharatiya Nyaya Sanhita, the Bharatiya Nagarik Suraksha Sanhita and the Bharatiya ' +
      'Sakshya Adhiniyam replaced the Indian Penal Code, the Code of Criminal Procedure and the ' +
      'Indian Evidence Act on 1 July 2024. The exam asks them by section number, so the numbers ' +
      'are the content.');

  h += '<div class="figs">' + fig(3, 'Acts') + fig((LAW.topics || []).length, 'topics') +
    fig(lawAllRows(), 'provisions') + fig((LAW.confusions || []).length, 'confused pairs') + '</div>';

  h += '<div class="block"><h3>The topics</h3><div class="grid">' +
    (LAW.topics || []).map(function (t) {
      return '<a class="pcard" href="#/laws/topic/' + encodeURIComponent(t.id) + '">' +
        '<div class="pn">' + esc(t.n) + '</div><div class="pt">' + esc(t.w) + '</div>' +
        '<div class="pr">' + t.blocks.length + ' tables · ' + lawRows(t) + ' rows</div></a>';
    }).join('') + '</div></div>';

  /* The reliability note belongs on the landing page, not buried in a
     topic, because it governs how to read every number behind it. */
  h += '<div class="block"><h3>How firm each statement is</h3>' +
    '<p class="plain">The names of the three Acts, what each replaced, the dates and the rule ' +
    'that the date of the <em>offence</em> decides which law applies do not move. The section ' +
    'counts — 358, 531 and 170 against 511, 484 and 167 — are consistent across the official ' +
    'handbooks. Chapter counts vary between secondary sources, so where one is given the row says ' +
    'it is the commonly cited figure. Where commentaries genuinely disagree, which is the case for ' +
    'the undertrial fraction in BNSS 479 and the investigation deadlines in BNSS 193, the row gives ' +
    'both readings rather than picking one quietly. This is a list of provisions an exam asks you ' +
    'to name, not legal advice and not a bare act.</p></div>';

  return lawShell(h);
}

function lawTopicPage(id) {
  var t = lawTopicById[id];
  if (!t) return lawShell('<div class="crumb"><a href="#/laws">The new criminal laws</a></div>' +
    '<div class="empty"><b>No such topic</b>Nothing on this site is filed under that name.</div>');

  var topics = LAW.topics || [], i = topics.indexOf(t);
  var h = '<div class="crumb"><a href="#/laws">The new criminal laws</a> → ' + esc(t.n) + '</div>' +
    pageH1(t.n, t.w);
  if (t.intro) h += '<p class="plain stack">' + esc(t.intro) + '</p>';
  h += t.blocks.map(factsBlock).join('');

  var prev = topics[i - 1], next = topics[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/laws/topic/' + encodeURIComponent(prev.id) + '">' +
      '<span class="d">Previous</span><span class="t">' + esc(prev.n) + '</span></a>' : '<span></span>') +
    (next ? '<a class="r" href="#/laws/topic/' + encodeURIComponent(next.id) + '">' +
      '<span class="d">Next</span><span class="t">' + esc(next.n) + '</span></a>' : '<span></span>') +
    '</div>';
  return lawShell(h);
}

function lawConfusions() {
  return lawShell('<div class="crumb"><a href="#/laws">The new criminal laws</a> → Confused pairs</div>' +
    pageH1('The pairs that get mixed up',
      'Which Sanhita replaced which Code, why 302 is now the wrong answer, whether sedition was ' +
      'renumbered or repealed, and whether BNSS 479 says half or one third.') +
    (LAW.confusions || []).map(cmpBlock).join(''));
}

function lawRoute(seg) {
  switch (seg[0] || '') {
    case '':           return render(lawHome());
    case 'topic':      return render(lawTopicPage(seg[1]));
    case 'confusions': return render(lawConfusions());
    default:           return notFound('That address does not exist in the criminal laws.');
  }
}

SUBJECTS.push({
  id: 'laws',
  name: 'The new criminal laws',
  short: 'Criminal laws',
  blurb: 'The Bharatiya Nyaya Sanhita, Nagarik Suraksha Sanhita and Sakshya Adhiniyam that replaced the IPC, the CrPC and the Evidence Act on 1 July 2024 — the dates, the counts, the new offences, and the section numbers an exam asks for.',
  tabs: [
    { href: '#/laws',            label: 'The topics',     match: ['', 'topic'] },
    { href: '#/laws/topic/mapping', label: 'IPC → BNS', match: [] },
    { href: '#/laws/confusions', label: 'Confused pairs', match: ['confusions'] },
    { href: '#/constitution',    label: '↔ Constitution', match: [] }
  ],
  stats: function () {
    return ['3 Acts', (LAW.topics || []).length + ' topics', lawAllRows() + ' provisions',
            (LAW.confusions || []).length + ' confused pairs'];
  },
  topics: function () {
    return (LAW.topics || []).map(function (t) {
      return { t: t.n, href: '#/laws/topic/' + encodeURIComponent(t.id), w: t.w,
               k: t.blocks.map(function (b) { return b.h; }).join(' ') +
                  ' bns bnss bsa ipc crpc evidence act criminal law 2023 2024',
               n: lawRows(t) + ' rows' };
    }).concat([{ t: 'The criminal laws - confused pairs', href: '#/laws/confusions',
                 n: (LAW.confusions || []).length + ' pairs',
                 w: 'Which Sanhita replaced which Code, why 302 is the wrong answer now, and whether sedition was renumbered or repealed.',
                 k: 'sedition 124a 152 murder 302 103 section counts community service 479' }]);
  },
  route: lawRoute
});

/* =========================================================================
   SUBJECT: GEOGRAPHY

   WHY THIS EXISTS WHEN STATIC GK ALREADY HAS RIVERS, STATES AND
   SUPERLATIVES. Those packs are lists of facts to recognise. Geography is
   the arrangement that holds the facts together, and an exam tests the
   arrangement: which range lies between two others, which pass joins which
   two places, why Tamil Nadu gets its rain in a different season from
   everywhere else. A list cannot answer any of those. So the Static GK
   packs stay where they are as the revision version and this is the full
   one.

   THE HIMALAYAS TAKE A THIRD OF THE SUBJECT, ON PURPOSE. Between the three
   ranges, the four longitudinal divisions, the peaks, the passes, the
   glaciers, the lakes and the rivers that rise there, they carry more SSC
   geography marks than any other single topic - and the passes alone come
   up almost every sitting.

   It reuses the shared renderers: factsBlock for a table and cmpBlock for a
   compared pair, which is why this section is a tenth the length of the
   Maths one. The only thing it adds is a figure, and even that borrows
   mathFig.
   ========================================================================= */

var GEO = window.GEOGRAPHY || {};
var geoTopicById = {};
(GEO.topics || []).forEach(function (t) { geoTopicById[t.id] = t; });

function geoRows(t) {
  return t.blocks.reduce(function (a, b) { return a + b.rows.length; }, 0);
}
function geoAllRows() {
  return (GEO.topics || []).reduce(function (a, t) { return a + geoRows(t); }, 0);
}
function geoAllFigs() {
  return (GEO.topics || []).reduce(function (a, t) { return a + (t.figs || []).length; }, 0);
}

function geoShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function geoHome() {
  var h = '<div class="crumb">Geography</div>' +
    pageH1('The arrangement, not just the facts',
      'Seven topics, and the Himalayas take the largest share of them because they take the ' +
      'largest share of the paper. Everything here is the physical geography an SSC general ' +
      'awareness section actually asks about, and nothing beyond it.');

  h += '<div class="figs">' + fig((GEO.topics || []).length, 'topics') +
    fig(geoAllRows(), 'facts') + fig((GEO.confusions || []).length, 'confused pairs') +
    fig(geoAllFigs(), 'diagrams') + '</div>';

  h += '<div class="block"><h3>The topics</h3><div class="grid">' +
    (GEO.topics || []).map(function (t) {
      return '<a class="pcard" href="#/geography/topic/' + encodeURIComponent(t.id) + '">' +
        '<div class="pn">' + esc(t.n) + '</div><div class="pt">' + esc(t.w) + '</div>' +
        '<div class="pr">' + t.blocks.length + ' tables · ' + geoRows(t) + ' facts' +
        ((t.figs || []).length ? ' · ' + t.figs.length + ' diagrams' : '') + '</div></a>';
    }).join('') + '</div></div>';

  h += '<p class="foot">The Static GK packs on <a href="#/gk/pack/rivers">rivers, dams and lakes</a>, ' +
    '<a href="#/gk/pack/states">states and capitals</a> and ' +
    '<a href="#/gk/pack/superlatives">largest, longest, highest</a> cover the same ground as lists ' +
    'of facts to recognise. They are the revision version; this is the full one.</p>';

  return geoShell(h);
}

function geoTopicPage(id) {
  var t = geoTopicById[id];
  if (!t) return geoShell('<div class="crumb"><a href="#/geography">Geography</a></div>' +
    '<div class="empty"><b>No such topic</b>Nothing on this site is filed under that name.</div>');

  var topics = GEO.topics || [], i = topics.indexOf(t);
  var h = '<div class="crumb"><a href="#/geography">Geography</a> → ' + esc(t.n) + '</div>' +
    pageH1(t.n, t.w);
  if (t.intro) h += '<p class="plain stack">' + esc(t.intro) + '</p>';

  if ((t.figs || []).length) {
    h += '<div class="block"><h3>The diagrams</h3><div class="mfigs">' +
      t.figs.map(mathFig).join('') + '</div></div>';
  }

  h += t.blocks.map(factsBlock).join('');

  var prev = topics[i - 1], next = topics[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/geography/topic/' + encodeURIComponent(prev.id) + '">' +
      '<span class="d">Previous</span><span class="t">' + esc(prev.n) + '</span></a>' : '<span></span>') +
    (next ? '<a class="r" href="#/geography/topic/' + encodeURIComponent(next.id) + '">' +
      '<span class="d">Next</span><span class="t">' + esc(next.n) + '</span></a>' : '<span></span>') +
    '</div>';
  return geoShell(h);
}

function geoConfusions() {
  return geoShell('<div class="crumb"><a href="#/geography">Geography</a> → Confused pairs</div>' +
    pageH1('The pairs that get mixed up',
      'Three different mountains answer three different wordings of “highest peak”; bhabar and ' +
      'terai are not bhangar and khadar; and an estuary rather than a delta is what a rift valley gives you.') +
    (GEO.confusions || []).map(cmpBlock).join(''));
}

function geoRoute(seg) {
  switch (seg[0] || '') {
    case '':           return render(geoHome());
    case 'topic':      return render(geoTopicPage(seg[1]));
    case 'confusions': return render(geoConfusions());
    default:           return notFound('That address does not exist in Geography.');
  }
}

SUBJECTS.push({
  id: 'geography',
  name: 'Geography',
  short: 'Geography',
  blurb: 'The Himalayas in full — ranges, divisions, peaks, passes, glaciers and lakes — then the physical divisions, the drainage, the monsoon, the soils, agriculture and minerals, and the world geography that gets asked.',
  tabs: [
    { href: '#/geography',            label: 'The topics',     match: ['', 'topic'] },
    { href: '#/geography/confusions', label: 'Confused pairs', match: ['confusions'] },
    { href: '#/gk',                   label: '↔ Static GK', match: [] }
  ],
  stats: function () {
    return [(GEO.topics || []).length + ' topics', geoAllRows() + ' facts',
            (GEO.confusions || []).length + ' confused pairs'];
  },
  topics: function () {
    return (GEO.topics || []).map(function (t) {
      return { t: t.n, href: '#/geography/topic/' + encodeURIComponent(t.id), w: t.w,
               k: t.blocks.map(function (b) { return b.h; }).join(' '),
               n: geoRows(t) + ' facts' };
    }).concat([{ t: 'Geography - confused pairs', href: '#/geography/confusions',
                 n: (GEO.confusions || []).length + ' pairs',
                 w: 'Which peak answers which wording, bhabar against bhangar, and why Narmada makes an estuary.',
                 k: 'k2 kanchenjunga nanda devi bhabar terai khadar bhangar estuary delta el nino' }]);
  },
  route: geoRoute
});

/* =========================================================================
   SUBJECT: DAILY STUDY SETS

   One page per study day, labelled with its date. Current affairs live
   here, because here a date can be put on them; the rest of each set is a
   revision sheet for what was added to the site that day, built from notes
   that already live on the subject pages rather than copied out of them.

   Each set is also a section of its own in the strip at the top of the
   page, so "10 October" is one tap from anywhere in the subject.
   ========================================================================= */

var DAILY = window.DAILY || {};
var DAILY_SETS = DAILY.sets || [];
var dailyById = {};
DAILY_SETS.forEach(function (d) { dailyById[d.id] = d; });

/* A recap part names the notes it shows by address, so the set and the page
   it summarises can never disagree. */
function dailyNotesFrom(key) {
  if (key === 'econ.reform') return (ECON.reform || {}).notes;
  if (key === 'econ.plans')  return ECON.planNotes;
  if (key === 'early.mughals') return EARLY.mughalNotes;
  var m = /^(gk|early)\.(.+)$/.exec(key || '');
  if (!m) return null;
  return ((m[1] === 'gk' ? gkPackById : earlyTopicById)[m[2]] || {}).notes;
}

function dailyNotes(part) {
  return part.notes || dailyNotesFrom(part.from) || [];
}

function dailyShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function dailyHome() {
  var h = '<div class="crumb">Daily sets</div>' +
    pageH1('Daily study sets',
      'One page for each study day, labelled with its date. The current affairs live here, where a ' +
      'date can be put on them; the rest of each set is a sheet of highlighted SSC notes for what was ' +
      'added that day, with a link to the full page.');
  h += '<div class="block"><h3>The sets, newest first</h3>' +
    DAILY_SETS.map(function (d) {
      var n = d.parts.reduce(function (a, p) { return a + dailyNotes(p).length; }, 0);
      return '<a class="arow hy" href="#/daily/' + encodeURIComponent(d.id) + '">' +
        '<span class="no range">' + esc(d.d) + '</span>' +
        '<span class="tx"><b>' + esc(d.d + ' ' + d.y) + '</b><i>' + esc(d.w) + '</i></span>' +
        '<span class="tag"><span class="chip live">' + n + ' notes</span></span></a>';
    }).join('') + '</div>';
  return dailyShell(h);
}

function dailyPart(part) {
  var h = '<section class="setpart" id="part-' + esc(part.id) + '">' +
    '<p class="eyebrow">' + esc(part.tag || '') + '</p>' +
    '<h2>' + esc(part.h) + '</h2>' +
    (part.w ? '<p class="sub">' + esc(part.w) + '</p>' : '');
  h += notesBlock(dailyNotes(part), part.from ? 'revise these first' : '');
  (part.blocks || []).forEach(function (b) { h += factsBlock(b); });
  if (part.cmp && part.cmp.length) {
    h += '<div class="block"><h3>The pairs that get mixed up</h3>' +
      part.cmp.map(cmpBlock).join('') + '</div>';
  }
  if (part.links && part.links.length) {
    h += '<div class="setlinks">' + part.links.map(function (l) {
      return '<a class="pill" href="' + l[0] + '">' + esc(l[1]) + ' →</a>';
    }).join('') + '</div>';
  }
  return h + '</section>';
}

function dailySetPage(id) {
  var d = dailyById[id];
  if (!d) return dailyShell('<div class="crumb"><a href="#/daily">Daily sets</a></div>' +
    '<div class="empty"><b>No set for that date</b>The sets that exist are listed on ' +
    '<a href="#/daily">the Daily sets page</a>.</div>');

  var i = DAILY_SETS.indexOf(d);
  var notes = d.parts.reduce(function (a, p) { return a + dailyNotes(p).length; }, 0);
  var h = '<div class="crumb"><a href="#/daily">Daily sets</a> → ' + esc(d.d) + '</div>' +
    '<span class="datebadge">Study set · ' + esc(d.d + ' ' + d.y) + '</span>' +
    pageH1(d.d, d.w);
  if (d.intro) h += '<p class="plain stack">' + prose(d.intro) + '</p>';
  h += '<div class="figs">' + fig(d.parts.length, 'parts') + fig(notes, 'highlighted notes') +
    fig(d.parts.filter(function (p) { return !p.from; }).length, 'current-affairs parts') + '</div>';

  /* Contents. Buttons rather than links: the address is the router's, so an
     in-page anchor would be read as a route. */
  h += '<div class="listtabs stack">' + d.parts.map(function (p) {
    /* Pressing the part you are already on changes no hash, so no hashchange
       would fire and nothing would scroll. Fire one by hand in that case. */
    return '<button type="button" onclick="var h=\'#/daily/' + esc(d.id) + '/' + esc(p.id) +
      '\';if(location.hash===h)window.dispatchEvent(new HashChangeEvent(\'hashchange\'));else location.hash=h">' +
      esc(p.h) + '</button>';
  }).join('') + '</div>';

  h += d.parts.map(dailyPart).join('');

  var newer = DAILY_SETS[i - 1], older = DAILY_SETS[i + 1];
  h += '<div class="nextprev">' +
    (older ? '<a href="#/daily/' + encodeURIComponent(older.id) + '">' +
      '<span class="d">Earlier set</span><span class="t">' + esc(older.d) + '</span></a>' : '<span></span>') +
    (newer ? '<a class="r" href="#/daily/' + encodeURIComponent(newer.id) + '">' +
      '<span class="d">Later set</span><span class="t">' + esc(newer.d) + '</span></a>' : '<span></span>') +
    '</div>';
  return dailyShell(h);
}

/* #/daily/10-october/booker opens the set at that part. render() has just
   put the page at the top, so this scroll happens on the page the reader
   asked for, and it is instant for the same reason jumpToTop is. */
function scrollToPart(partId) {
  var el = document.getElementById('part-' + partId);
  if (!el) return;
  var head = document.querySelector('header.top');
  var off = head ? head.getBoundingClientRect().height : 0;
  var root = document.documentElement, prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - off - 12);
  root.style.scrollBehavior = prev;
}

function dailyRoute(seg) {
  if (!seg[0]) return render(dailyHome());
  render(dailySetPage(seg[0]));
  if (seg[1]) scrollToPart(seg[1]);
}

SUBJECTS.push({
  id: 'daily',
  name: 'Daily study sets',
  short: 'Daily sets',
  blurb: 'One page per study day, labelled with its date: the current affairs that go stale, and highlighted SSC notes for everything added that day.',
  tabs: [{ href: '#/daily', label: 'All sets', match: [''] }].concat(DAILY_SETS.map(function (d) {
    return { href: '#/daily/' + d.id, label: d.d, match: [d.id] };
  })),
  stats: function () {
    return [DAILY_SETS.length + (DAILY_SETS.length === 1 ? ' set' : ' sets'),
            DAILY_SETS.reduce(function (a, d) {
              return a + d.parts.reduce(function (b, p) { return b + dailyNotes(p).length; }, 0);
            }, 0) + ' notes'];
  },
  topics: function () {
    var out = [];
    DAILY_SETS.forEach(function (d) {
      out.push({ t: d.d + ' ' + d.y, href: '#/daily/' + d.id, w: d.w,
                 n: d.parts.length + ' parts',
                 k: d.parts.map(function (p) { return p.h; }).join(' ') + ' daily set current affairs' });
      d.parts.filter(function (p) { return !p.from; }).forEach(function (p) {
        out.push({ t: p.h + ' (' + d.d + ')', href: '#/daily/' + d.id + '/' + p.id, w: p.w,
                   n: dailyNotes(p).length + ' notes',
                   k: (p.blocks || []).map(function (b) { return b.h; }).join(' ') + ' current affairs ' + d.d });
      });
    });
    return out;
  },
  route: dailyRoute
});

/* =========================================================================
   SUBJECT: JCA

   The law paper of the Supreme Court Junior Court Assistant 2026 objective
   test: the three sections with a fixed text behind them, 35 of its 100
   questions. Judiciary provisions of the Constitution (15), the Supreme
   Court Rules, 2013 (10), and the Supreme Court Officers and Servants Rules,
   1961 (10). English, aptitude, general knowledge and computers are not in
   it, on purpose.

   WHY ONE EXAM GETS A SUBJECT OF ITS OWN. Every other subject is organised
   by what a thing is; this one is organised by what one paper asks. Its
   Constitution part is not a second copy of the Constitution: it is the
   articles that paper picks out, indexed by question, and every article in
   it links to the article page that already exists here. The two rule books
   exist nowhere else on the site.

   WHY IT CARRIES ITS OWN QUESTIONS AND A TIMED MOCK. It is the one subject
   studied against a date and a marking scheme. So practice gives the reason
   for every answer and hides the rule a question tests until it is answered,
   and the mock runs at the paper's pace with the paper's quarter-mark
   deduction.

   It was a separate app at jca/ for its first day; that address now
   forwards here, and the marks it kept are carried over below.
   ========================================================================= */

var JCA = window.JCA || {};
var JCA_SECS = [JCA.judiciary, JCA.scr, JCA.osr].filter(Boolean);
var jcaSec = {};
JCA_SECS.forEach(function (s) { jcaSec[s.id] = s; });

/* The objective test date in the advertisement of 30 September 2026, which
   marks it tentative. Month is 0-based. */
var JCA_EXAM = { y: 2026, m: 10, d: 20, label: '20 November 2026' };

/* The law block at the paper's pace: 35 of its 100 questions in the same
   15/10/10 split, at 54 seconds a question (90 minutes for 100) rounded up
   to 32 minutes, with a quarter mark off for a wrong answer. */
var JCA_MOCK = { split: [['c', 15], ['r', 10], ['s', 10]], minutes: 32, neg: 0.25 };

/* The judiciary articles in reading order, each filed under its topic, so
   an article page can say which JCA topic it belongs to. */
var JCA_ARTS = [], jcaArtTopic = {};
if (jcaSec.c) jcaSec.c.topics.forEach(function (t) {
  (t.arts || []).forEach(function (n) {
    if (!jcaArtTopic[n] && byArt[n]) { jcaArtTopic[n] = t; JCA_ARTS.push(n); }
  });
});

function jcaTopic(secId, tid) {
  var s = jcaSec[secId], hit = null;
  if (s) s.topics.forEach(function (t) { if (t.id === tid) hit = t; });
  return hit;
}

function jcaTopicCount() {
  return JCA_SECS.reduce(function (a, s) { return a + s.topics.length; }, 0);
}

/* A question is stored by a hash of its wording, not by its position, so
   adding a question never moves anyone's marks onto a different one. */
function jcaHash(s) {
  var h = 5381;
  for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

var JCA_Q = [], JCA_QBY = {}, jcaQByArt = {};
JCA_SECS.forEach(function (s) {
  s.qs.forEach(function (q) {
    var item = { id: s.id + '.' + jcaHash(q.q), sec: s, q: q };
    JCA_Q.push(item);
    JCA_QBY[item.id] = item;
    /* "Art. 124(4)", "Arts. 32, 226", "Art. 125; Art. 112(3)(d)" */
    String(q.r || '').split(';').forEach(function (part) {
      if (!/^\s*Arts?\./.test(part)) return;
      (part.replace(/\([^)]*\)/g, '').match(/\d{1,3}[A-Z]{0,2}/g) || []).forEach(function (n) {
        (jcaQByArt[n] = jcaQByArt[n] || []).push(item.id);
      });
    });
  });
});

function jcaQs(secId, tid) {
  return JCA_Q.filter(function (x) {
    return x.sec.id === secId && (!tid || x.q.t === tid);
  }).map(function (x) { return x.id; });
}

/* --------------------------------------------------------------- storage

   What you answer stays on this device. Every read falls back to a copy
   held in memory for the visit, so with site data blocked the pages behave
   the same and simply forget when the tab closes; a test in progress needs
   that, or a blocked store would end it at the first tap. */

var JK_WRONG = 'am.jca.wrong.v1';   /* { qid: 1 } */
var JK_SEEN  = 'am.jca.seen.v1';    /* { qid: [right, wrong] } */
var JK_MOCKS = 'am.jca.mocks.v1';   /* [ summary, newest first ] */
var JK_LIVE  = 'am.jca.live.v1';    /* the test in progress */
var JK_LAST  = 'am.jca.last.v1';    /* the last finished test, in full */

/* The day this was its own app at jca/ it kept the same marks under rb.*.
   Same origin, same browser, so they are carried over once. */
(function () {
  try {
    [['rb.wrong.v1', JK_WRONG], ['rb.seen.v1', JK_SEEN], ['rb.mocks.v1', JK_MOCKS],
     ['rb.mock.live.v1', JK_LIVE], ['rb.mock.last.v1', JK_LAST]].forEach(function (p) {
      var old = localStorage.getItem(p[0]);
      if (old === null) return;
      if (localStorage.getItem(p[1]) === null) localStorage.setItem(p[1], old);
      localStorage.removeItem(p[0]);
    });
  } catch (e) { /* no storage, nothing to carry */ }
})();

var JCA_MEM = {};
function jcaLoad(key, dflt) {
  try {
    var raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* fall through to memory */ }
  return JCA_MEM.hasOwnProperty(key) ? JCA_MEM[key] : dflt;
}
function jcaSave(key, val) {
  JCA_MEM[key] = val;
  try {
    if (val === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(val));
  } catch (e) { /* fine */ }
}

function jcaMark(qid, ok) {
  var seen = jcaLoad(JK_SEEN, {}), rec = seen[qid] || [0, 0];
  rec[ok ? 0 : 1]++;
  seen[qid] = rec;
  jcaSave(JK_SEEN, seen);
  var wrong = jcaLoad(JK_WRONG, {});
  if (ok) delete wrong[qid]; else wrong[qid] = 1;
  jcaSave(JK_WRONG, wrong);
}

function jcaWrongIds() {
  return Object.keys(jcaLoad(JK_WRONG, {})).filter(function (id) { return JCA_QBY[id]; });
}

/* How far a set of questions has got: how many tried, and the share of
   attempts that were right. */
function jcaProgress(ids) {
  var seen = jcaLoad(JK_SEEN, {}), tried = 0, r = 0, w = 0;
  ids.forEach(function (id) {
    var s = seen[id];
    if (s) { tried++; r += s[0]; w += s[1]; }
  });
  return { tried: tried, total: ids.length, pct: (r + w) ? Math.round(100 * r / (r + w)) : null };
}

function jcaProgressLine(p) {
  if (!p.tried) return 'Not started';
  return p.tried + ' of ' + p.total + ' tried' + (p.pct === null ? '' : ' · ' + p.pct + ' per cent right');
}

function jcaPlural(n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); }

/* ------------------------------------------------------------ rendering */

function jcaShell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function jcaCrumb(items) {
  return '<div class="crumb"><a href="#/jca">JCA</a>' + items.map(function (x) {
    return ' → ' + (x[1] ? '<a href="' + x[1] + '">' + esc(x[0]) + '</a>' : esc(x[0]));
  }).join('') + '</div>';
}

function jcaChk() { return '<span class="chip chk">check the bare text</span>'; }

/* A table, as factsBlock draws one, plus two things this subject needs: an
   article number anywhere in a row is a link, and a table resting on one
   source carries the mark that says so. */
function jcaFacts(g) {
  return '<div class="block"><h3>' + esc(g.h) + (g.chk ? ' ' + jcaChk() : '') + '</h3>' +
    (g.note ? '<p class="foot jcnote">' + hiMark(linkArts(g.note)) + '</p>' : '') +
    '<dl class="facts">' + g.rows.map(function (r) {
      return '<dt>' + hiMark(linkArts(r[0])) + '</dt><dd>' + hiMark(linkArts(r[1])) + '</dd>';
    }).join('') + '</dl></div>';
}

function jcaDaysLeft() {
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((new Date(JCA_EXAM.y, JCA_EXAM.m, JCA_EXAM.d) - today) / 86400000);
}

function jcaCountdown() {
  var n = jcaDaysLeft();
  var big = n > 1 ? n + ' days' : n === 1 ? '1 day' : n === 0 ? 'Today' : 'Done';
  var line = n > 0 ? 'to the objective test on ' + JCA_EXAM.label + ' (tentative in the advertisement)'
    : n === 0 ? 'The objective test is today. Read the JCA notes, not new material.'
    : 'The objective test date (' + JCA_EXAM.label + ') has passed.';
  return '<div class="jccount"><b>' + esc(big) + '</b><span>' + esc(line) + '</span></div>';
}

function jcaBar(p) {
  var w = p.total ? Math.round(100 * p.tried / p.total) : 0;
  return '<div class="jcbar"><span style="width:' + w + '%"></span></div>';
}

function jcaSecLine(s) {
  return s.marks + ' marks · ' + jcaPlural(s.topics.length, 'topic') + ' · ' +
    jcaPlural(jcaQs(s.id).length, 'question');
}

function jcaLiveBanner() {
  var live = jcaLoad(JK_LIVE, null);
  if (!live || !live.ids) return '';
  var left = Math.max(0, live.start + live.dur - Date.now());
  return '<div class="mresume"><b>A mock test is running</b><span>' +
    (left ? Math.ceil(left / 60000) + ' minutes left on the clock, which keeps running while you are away.'
          : 'Its time is up; open it to see the score.') +
    '</span><a class="pill big" href="#/jca/mock">' + (left ? 'Back to the test' : 'See the score') + '</a></div>';
}

/* ------------------------------------------------------------------ home */

function jcaHome() {
  var wrong = jcaWrongIds().length;
  var h = jcaShell('<div class="crumb">JCA</div>' +
    pageH1('The Supreme Court JCA law paper, all 35 marks of it',
      'Judiciary provisions of the Constitution (15 questions), the Supreme Court Rules, 2013 (10) ' +
      'and the Supreme Court Officers and Servants Rules, 1961 (10): the notes, the tables, and ' +
      JCA_Q.length + ' questions with the reason for every answer.') +
    jcaCountdown() +
    '<div class="figs">' + fig(JCA_Q.length, 'questions') + fig(jcaTopicCount(), 'topics') +
      fig(JCA_ARTS.length, 'articles') + fig(((jcaSec.r && jcaSec.r.orders) || []).length, 'Orders mapped') +
    '</div>' + jcaLiveBanner() +

    '<div class="label stack-lg">Start here</div><div class="mmodes jcmodes">' +
      '<a class="mmode" href="#/jca/mock"><b>Mock test</b><i>35 questions · ' + JCA_MOCK.minutes +
        ' minutes · minus ' + JCA_MOCK.neg + '</i></a>' +
      '<a class="mmode" href="#/jca/practice/mixed"><b>Twenty mixed</b><i>From all three sections, least-tried first</i></a>' +
      '<a class="mmode" href="' + (wrong ? '#/jca/practice/wrong' : '#/jca/r/scr-orders') + '"><b>' +
        (wrong ? 'Your ' + jcaPlural(wrong, 'wrong answer') : 'Every Order, in one table') + '</b><i>' +
        (wrong ? 'Until each one is right' : 'The 57 Orders of the 2013 Rules') + '</i></a>' +
    '</div>' +

    '<div class="label stack-lg">The three sections</div><div class="grid">' +
    JCA_SECS.map(function (s) {
      var p = jcaProgress(jcaQs(s.id));
      return '<a class="pcard" href="#/jca/' + s.id + '"><div class="pn">' + s.marks + ' of the 100 questions</div>' +
        '<div class="pt">' + esc(s.name) + '</div><div class="jcdesc">' + esc(shorten(s.lede, 140)) + '</div>' +
        jcaBar(p) + '<div class="pr">' + esc(jcaSecLine(s)) + '</div>' +
        '<div class="pr">' + esc(jcaProgressLine(p)) + '</div></a>';
    }).join('') + '</div>' +

    '<div class="block"><h3>The paper, and where this subject fits</h3>' +
    '<p class="foot jcnote">The objective test as the 2026 advertisement is reported: 100 questions, ' +
    '90 minutes, a quarter mark off for a wrong answer, 50 to qualify. The law block is the part with ' +
    'a fixed text behind it, so it repays revision more than any other.</p>' +
    '<dl class="facts jcpaper">' + [
      ['General English, with comprehension', '20', 0],
      ['General Aptitude', '15', 0],
      ['General Knowledge', '15', 0],
      ['Judiciary provisions in the Constitution', '15', 'c'],
      ['Supreme Court Rules, 2013', '10', 'r'],
      ['SC Officers and Servants Rules, 1961', '10', 's'],
      ['Computer Knowledge', '15', 0]
    ].map(function (r) {
      return '<dt>' + (r[2] ? '<a href="#/jca/' + r[2] + '">' + esc(r[0]) + '</a>' : '<span class="jcout">' + esc(r[0]) + '</span>') +
        '</dt><dd>' + r[1] + ' questions' + (r[2] ? ' · <b class="jcin">here</b>' : ' · not covered here') + '</dd>';
    }).join('') + '</dl></div>' + jcaPlan() +

    '<div class="block"><h3>How firm this is</h3><p class="plain">The official text of every article is the ' +
    'site\'s own verbatim extract. The notes and questions on the two rule books are written, not quoted: ' +
    'their bare text could not be fetched while they were written, so every Order heading and every rule a ' +
    'question tests was checked against at least two independent sources. A point with one source carries ' +
    jcaChk() + ', and rules whose headings could not be confirmed are left out. Read both rule books once ' +
    'in full on the Supreme Court\'s website before the test.</p>' +
    '<div class="stack"><a class="pill big" href="https://www.sci.gov.in/supreme-court-rules-2013/" rel="noopener">' +
    'Supreme Court Rules, 2013</a> <a class="pill big" href="https://www.sci.gov.in/officers-servant-rules/" rel="noopener">' +
    'Officers and Servants Rules, 1961</a></div></div>');
  render(h);
}

/* A suggestion for the days that are left, worked out from the clock. The
   two rule books come first because they are short, fixed and new to most
   candidates, which makes them the cheapest marks on the paper. */
function jcaPlan() {
  var n = jcaDaysLeft();
  if (n <= 0) return '';
  if (n < 4) {
    return '<div class="block"><h3>The last ' + jcaPlural(n, 'day') + '</h3><p class="plain">No new ' +
      'material now. Read the JCA notes of every topic, take one mock test, and clear the review list.</p></div>';
  }
  var a = Math.round(n * 0.4), b = Math.round(n * 0.35), c = n - a - b;
  return '<div class="block"><h3>A plan for the ' + jcaPlural(n, 'day') + ' left</h3>' +
    '<p class="foot jcnote">A suggestion, not a rule.</p><dl class="facts">' +
    '<dt>Next ' + jcaPlural(a, 'day') + '</dt><dd>The SC Rules 2013 and the 1961 Rules: read each topic, then practise it until you score above 80 per cent.</dd>' +
    '<dt>Then ' + jcaPlural(b, 'day') + '</dt><dd>The Constitution topics, with the official text of every article you get wrong.</dd>' +
    '<dt>Last ' + jcaPlural(c, 'day') + '</dt><dd>A mock test every other day, and the review list on the days between.</dd>' +
    '</dl></div>';
}

/* --------------------------------------------------------------- sections */

function jcaTopicCard(s, t, practise) {
  var ids = jcaQs(s.id, t.id), p = jcaProgress(ids);
  return '<a class="topic" href="#/jca/' + (practise ? 'practice/' : '') + s.id + '/' + encodeURIComponent(t.id) + '">' +
    '<b>' + esc(t.t) + '</b>' + (practise ? '' : '<i>' + esc(t.w) + '</i>') +
    '<em>' + jcaPlural(ids.length, 'question') + (p.tried ? ' · ' + p.tried + ' tried' +
    (p.pct === null ? '' : ', ' + p.pct + '% right') : '') + '</em></a>';
}

function jcaSectionPage(s) {
  var ids = jcaQs(s.id);
  var h = jcaCrumb([[s.short]]) +
    '<div class="pagehead"><p class="eyebrow">' + s.marks + ' of the 100 questions</p>' +
    '<h1>' + esc(s.name) + '</h1><p class="lede">' + esc(s.lede) + '</p>' +
    '<div class="stack"><a class="pill big" href="#/jca/practice/' + s.id + '">Practise all ' + ids.length +
    ' questions</a> <a class="pill big" href="#/jca/mock">Mock test</a>' +
    (s.id === 'r' ? ' <a class="pill big" href="#/jca/r/scr-orders">Every Order, in one table</a>' : '') +
    '</div></div>';

  h += '<div class="block"><h3>The topics</h3><div class="topics">' +
    s.topics.map(function (t) { return jcaTopicCard(s, t); }).join('') + '</div></div>';

  /* The Constitution part lists every article it covers, each a link to the
     article's own page with the official text. */
  if (s.id === 'c') {
    s.topics.forEach(function (t) {
      if (!t.arts || !t.arts.length) return;
      h += '<div class="block"><h3><a class="jch3a" href="#/jca/c/' + t.id + '">' + esc(t.t) + '</a></h3>' +
        t.arts.map(function (n) { return byArt[n] ? artRow(byArt[n]) : ''; }).join('') + '</div>';
    });
  }
  render(jcaShell(h));
}

function jcaOrders() {
  var orders = (jcaSec.r && jcaSec.r.orders) || [], groups = [], at = {};
  orders.forEach(function (o) {
    if (!at.hasOwnProperty(o[2])) { at[o[2]] = groups.length; groups.push({ g: o[2], rows: [] }); }
    groups[at[o[2]]].rows.push(o);
  });
  return groups.map(function (g) {
    var first = g.rows[0][0], last = g.rows[g.rows.length - 1][0];
    return '<div class="block"><h3>' + esc(g.g) + ' · ' +
      (first === last ? 'Order ' + first : 'Orders ' + first + ' to ' + last) + '</h3>' +
      '<dl class="facts jcorders">' + g.rows.map(function (o) {
        return '<dt>Order ' + esc(o[0]) + '</dt><dd>' + esc(o[1]) + '</dd>';
      }).join('') + '</dl></div>';
  }).join('');
}

function jcaTopicPage(s, t) {
  var ids = jcaQs(s.id, t.id), p = jcaProgress(ids);
  var h = jcaCrumb([[s.short, '#/jca/' + s.id], [t.t]]) + pageH1(t.t, t.w);

  h += '<div class="stack-sm"><a class="pill big" href="#/jca/practice/' + s.id + '/' + t.id + '">' +
    'Practise these ' + jcaPlural(ids.length, 'question') + '</a>' +
    (p.tried ? ' <span class="jcmeta">' + esc(jcaProgressLine(p)) + '</span>' : '') + '</div>';

  h += notesBlock(t.notes, '', 'JCA notes');
  if (t.special === 'orders') h += jcaOrders();

  if (t.arts && t.arts.length) {
    h += '<div class="block"><h3>The articles</h3>' +
      '<p class="foot jcnote">Each opens on its own page, with the plain-English note and the official text.</p>' +
      t.arts.map(function (n) { return byArt[n] ? artRow(byArt[n]) : ''; }).join('') + '</div>';
  }

  (t.blocks || []).forEach(function (b) { h += jcaFacts(b); });

  if (t.pairs && t.pairs.length) {
    h += '<div class="block"><h3>Confused pairs</h3>' + t.pairs.map(cmpBlock).join('') + '</div>';
  }

  var cs = (t.cases || []).map(function (id) { return caseById[id]; }).filter(Boolean);
  if (cs.length) {
    h += '<div class="block"><h3>The cases</h3><div class="caselist">' + cs.map(caseCard).join('') + '</div></div>';
  }

  var i = s.topics.indexOf(t), prev = s.topics[i - 1], next = s.topics[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/jca/' + s.id + '/' + prev.id + '"><span class="d">Previous</span><span class="t">' + esc(prev.t) + '</span></a>' : '<span></span>') +
    (next ? '<a class="r" href="#/jca/' + s.id + '/' + next.id + '"><span class="d">Next</span><span class="t">' + esc(next.t) + '</span></a>' : '<span></span>') +
    '</div>';
  render(jcaShell(h));
}

/* --------------------------------------------------------------- practice

   One question at a time, the answer the moment you choose, and the reason
   for it. Every wrong option is a real confusion (65 for 62, the President
   for the Governor, Order XLVII for XLVIII), never filler. */

function jcaShuffle(a) {
  for (var m = a.length - 1; m > 0; m--) {
    var k = Math.floor(Math.random() * (m + 1)), t = a[m];
    a[m] = a[k]; a[k] = t;
  }
  return a;
}

/* Least-tried first, shuffled within each level, so repeated sessions work
   through the whole bank rather than meeting the same favourites. */
function jcaFreshFirst(ids) {
  var seen = jcaLoad(JK_SEEN, {});
  function tries(x) { return seen[x] ? seen[x][0] + seen[x][1] : 0; }
  return jcaShuffle(ids.slice()).sort(function (x, y) { return tries(x) - tries(y); });
}

function jcaPracticeHub() {
  var wrong = jcaWrongIds().length;
  var h = jcaCrumb([['Practice']]) +
    pageH1('Practice', JCA_Q.length + ' questions in the paper\'s own shape, with the reason for every ' +
      'answer. What you get wrong goes on the review list until you get it right.') +
    '<div class="mmodes jcmodes">' +
      '<a class="mmode" href="#/jca/practice/mixed"><b>Twenty mixed</b><i>All three sections, least-tried first</i></a>' +
      '<a class="mmode" href="#/jca/practice/wrong"><b>Only my wrong answers</b><i>' + jcaPlural(wrong, 'question') + ' waiting</i></a>' +
      '<a class="mmode" href="#/jca/mock"><b>Mock test</b><i>35 questions, timed, negative marking</i></a></div>';

  JCA_SECS.forEach(function (s) {
    var p = jcaProgress(jcaQs(s.id));
    h += '<div class="hubsec"><div class="hubhead"><a href="#/jca/practice/' + s.id + '">' + esc(s.name) + '</a>' +
      '<span>' + esc(jcaSecLine(s)) + ' · ' + esc(jcaProgressLine(p)) + '</span></div><div class="topics">' +
      s.topics.map(function (t) { return jcaQs(s.id, t.id).length ? jcaTopicCard(s, t, true) : ''; }).join('') +
      '</div></div>';
  });
  render(jcaShell(h));
}

var jcaQuiz = null;

function jcaStartQuiz(ids, title, sub, back) {
  if (!ids.length) {
    return render(jcaShell(jcaCrumb([['Practice', '#/jca/practice']]) + pageH1(title, '') +
      '<div class="empty"><b>Nothing to practise here</b>' +
      (location.hash === '#/jca/practice/wrong'
        ? 'No wrong answers are waiting, or this browser is not keeping site data.'
        : 'This set has no questions yet.') +
      '<div class="stack"><a class="pill big" href="#/jca/practice">Pick a set</a></div></div>'));
  }
  jcaQuiz = { ids: ids, i: 0, right: 0, wrong: [], answered: false };
  render(jcaShell(jcaCrumb(back ? [back, ['Practice']] : [['Practice']]) + pageH1(title, sub) +
    '<div id="jquiz"></div>'));
  jcaDrawQuiz();
  jcaWireQuiz();
}

/* The rule a question tests ("Order IV", "Art. 217(3)") is shown only once
   the question is answered: printed above the options, it would answer the
   "which Order" questions by itself. */
function jcaQMeta(item, withRef) {
  var t = jcaTopic(item.sec.id, item.q.t);
  return '<div class="jcqmeta"><span>' + esc(item.sec.short) + '</span>' +
    (t ? '<a href="#/jca/' + item.sec.id + '/' + t.id + '">' + esc(t.t) + '</a>' : '') +
    (withRef ? '<span>' + esc(item.q.r) + '</span>' : '') + '</div>';
}

function jcaAnswerCard(id, pick) {
  var item = JCA_QBY[id];
  if (!item) return '';
  var q = item.q;
  return '<div class="mwrong"><div class="mqq">' + esc(q.q) + '</div>' +
    (pick != null && pick !== q.a ? '<div class="mans jcyours">You chose ' + 'ABCD'.charAt(pick) +
      ' · ' + esc(q.o[pick]) + '</div>' : '') +
    '<div class="mans">' + 'ABCD'.charAt(q.a) + ' · ' + esc(q.o[q.a]) + '</div>' +
    '<div class="mqsol">' + hiMark(prose(q.s, 1)) + '</div>' + jcaQMeta(item, true) + '</div>';
}

function jcaDrawQuiz() {
  var box = document.getElementById('jquiz'), z = jcaQuiz;
  if (!box || !z) return;

  if (z.i >= z.ids.length) {
    var pct = Math.round(100 * z.right / z.ids.length), n = z.wrong.length;
    box.innerHTML = '<div class="mdone"><b>' + z.right + ' right out of ' + z.ids.length + '</b><span>' +
      pct + ' per cent. ' + (n
        ? 'The ' + jcaPlural(n, 'one') + ' you missed ' + (n === 1 ? 'is' : 'are') + ' below, and on the ' +
          'review list until you get ' + (n === 1 ? 'it' : 'them') + ' right.'
        : 'Nothing missed. Try the mock test, against the clock.') + '</span>' +
      '<div class="stack"><button class="pill big" type="button" data-act="again">Run it again</button> ' +
      '<a class="pill big" href="#/jca/review">The review list</a> ' +
      '<a class="pill big" href="#/jca/practice">Another set</a></div></div>' +
      (n ? '<div class="block"><h3>What you missed</h3>' +
        z.wrong.map(function (x) { return jcaAnswerCard(x[0], x[1]); }).join('') + '</div>' : '');
    return;
  }

  var item = JCA_QBY[z.ids[z.i]], q = item.q;
  box.innerHTML =
    '<div class="mprog"><span style="width:' + Math.round(100 * z.i / z.ids.length) + '%"></span></div>' +
    '<div class="mcount">Question ' + (z.i + 1) + ' of ' + z.ids.length + ' · ' + z.right + ' right so far</div>' +
    '<div class="mq">' + jcaQMeta(item, false) + '<div class="mqq">' + esc(q.q) + '</div>' +
    '<div class="mqo">' + q.o.map(function (o, oi) {
      return '<button type="button" class="mopt" data-pick="' + oi + '"><span class="ml">' +
        'ABCD'.charAt(oi) + '</span><span class="mt">' + esc(o) + '</span></button>';
    }).join('') + '</div><div id="jqs"></div></div>';
}

function jcaPick(pick) {
  var z = jcaQuiz, box = document.getElementById('jquiz');
  if (!z || z.answered || z.i >= z.ids.length || !box) return;
  z.answered = true;
  var id = z.ids[z.i], q = JCA_QBY[id].q, ok = pick === q.a;
  var buttons = box.querySelectorAll('.mopt');
  for (var j = 0; j < buttons.length; j++) {
    var bi = parseInt(buttons[j].getAttribute('data-pick'), 10);
    buttons[j].disabled = true;
    buttons[j].className = 'mopt ' + (bi === q.a ? 'right' : bi === pick ? 'wrong' : 'dim');
  }
  if (ok) z.right++; else z.wrong.push([id, pick]);
  jcaMark(id, ok);
  var sol = document.getElementById('jqs');
  if (sol) sol.innerHTML = '<div class="mqsol' + (ok ? ' ok' : '') + '"><b>' +
    (ok ? 'Right.' : 'Not that one: the answer is ' + 'ABCD'.charAt(q.a) + ', ' + esc(q.o[q.a]) + '.') +
    '</b> ' + hiMark(prose(q.s, 1)) + ' <span class="jctests">Tests ' + esc(q.r) + '</span></div>' +
    '<div class="stack"><button class="pill big" type="button" data-act="next">' +
    (z.i + 1 >= z.ids.length ? 'See the score' : 'Next question') + '</button></div>';
  var nb = box.querySelector('[data-act="next"]');
  if (nb) nb.focus({ preventScroll: true });
}

function jcaWireQuiz() {
  var box = document.getElementById('jquiz');
  if (!box || box.getAttribute('data-wired')) return;
  box.setAttribute('data-wired', '1');
  box.addEventListener('click', function (e) {
    var act = e.target.closest('[data-act]');
    if (act) {
      var a = act.getAttribute('data-act');
      if (a === 'next' && jcaQuiz) { jcaQuiz.i++; jcaQuiz.answered = false; jcaDrawQuiz(); jumpToTop(); }
      else if (a === 'again') route();
      return;
    }
    var opt = e.target.closest('.mopt');
    if (opt) jcaPick(parseInt(opt.getAttribute('data-pick'), 10));
  });
}

function jcaPractice(seg) {
  var k = seg[0] || '';
  if (!k) return jcaPracticeHub();
  if (k === 'wrong') {
    return jcaStartQuiz(jcaShuffle(jcaWrongIds()), 'Your wrong answers',
      'Each one leaves this list the next time you answer it right.', ['Review', '#/jca/review']);
  }
  if (k === 'mixed') {
    return jcaStartQuiz(jcaFreshFirst(JCA_Q.map(function (x) { return x.id; })).slice(0, 20), 'Twenty mixed',
      'From all three sections, the ones you have tried least first.');
  }
  if (k === 'a') {
    var num = seg[1], a = byArt[num];
    if (!a) return notFound('There is no Article ' + num + '.');
    return jcaStartQuiz(jcaShuffle((jcaQByArt[num] || []).slice()), 'Article ' + num + ': ' + a.h,
      'Every JCA question that tests this article.', ['Article ' + num, '#/a/' + encodeURIComponent(num)]);
  }
  var s = jcaSec[k];
  if (!s) return notFound('There is no such practice set in JCA.');
  if (seg[1]) {
    var t = jcaTopic(k, seg[1]);
    if (!t) return notFound('There is no such topic in JCA.');
    return jcaStartQuiz(jcaFreshFirst(jcaQs(k, t.id)), t.t, s.name + ', in a different order each time.',
      [t.t, '#/jca/' + k + '/' + t.id]);
  }
  jcaStartQuiz(jcaFreshFirst(jcaQs(k)), s.name, jcaPlural(jcaQs(k).length, 'question') + ', least-tried first.',
    [s.short, '#/jca/' + k]);
}

/* ------------------------------------------------------------- mock test

   The test in progress lives in storage, not in the page, so a reload, a
   phone call or a wander to another subject loses nothing. The clock is the
   wall clock: it keeps running while you are away, as the real one would. */

var jcaTick = null, jcaSel = 0;

function jcaStopTick() { if (jcaTick) { clearInterval(jcaTick); jcaTick = null; } }

function jcaClock(ms) {
  var s = Math.max(0, Math.ceil(ms / 1000)), m = Math.floor(s / 60);
  s = s % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function jcaNewMock() {
  var ids = [];
  JCA_MOCK.split.forEach(function (x) {
    if (jcaSec[x[0]]) ids = ids.concat(jcaFreshFirst(jcaQs(x[0])).slice(0, x[1]));
  });
  var live = { v: 1, ids: ids, ans: {}, mark: {}, cur: 0, start: Date.now(), dur: JCA_MOCK.minutes * 60000 };
  jcaSave(JK_LIVE, live);
  return live;
}

function jcaMockTable(list) {
  return '<div class="jctable"><table><thead><tr><th>When</th><th>Score</th><th>Right</th><th>Wrong</th>' +
    '<th>Blank</th><th>Time</th></tr></thead><tbody>' + list.map(function (m) {
      var d = new Date(m.at);
      var when = d.getDate() + ' ' + JCA_MON[d.getMonth()] + ', ' +
        (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
      return '<tr><td>' + esc(when) + '</td><td><b>' + jcaNet(m.net) + '</b> / ' + m.n + '</td><td>' +
        m.right + '</td><td>' + m.wrong + '</td><td>' + m.skip + '</td><td>' + jcaClock(m.used) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
}

function jcaNet(n) { return String(Math.round(n * 100) / 100); }

/* Its own month names: MONTHS above is redefined as a regular expression
   source further up the file, so it cannot be indexed. */
var JCA_MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function jcaMockPage() {
  var live = jcaLoad(JK_LIVE, null);
  if (live && live.ids && live.ids.every(function (id) { return JCA_QBY[id]; })) {
    if (Date.now() >= live.start + live.dur) return jcaFinishMock(live);
    return jcaMockRun(live);
  }
  if (live) jcaSave(JK_LIVE, null);

  var hist = jcaLoad(JK_MOCKS, []);
  var h = jcaCrumb([['Mock test']]) +
    pageH1('Mock test', 'The law block of the real paper, at the real pace.') +
    '<dl class="facts">' +
      '<dt>Questions</dt><dd>35: Constitution 15, SC Rules 2013 10, O&amp;S Rules 1961 10, in that order</dd>' +
      '<dt>Time</dt><dd>' + JCA_MOCK.minutes + ' minutes, the paper\'s 54 seconds a question; the clock keeps running if you leave the page</dd>' +
      '<dt>Marking</dt><dd>One mark for a right answer, minus ' + JCA_MOCK.neg + ' for a wrong one, nothing for a blank</dd>' +
      '<dt>Which questions</dt><dd>The ones you have tried least, so each test brings new ones</dd>' +
      '<dt>Moving about</dt><dd>Jump to any question from the palette, mark one to come back to, change an answer until you submit. Keys: A to D to choose, the arrows to move</dd>' +
    '</dl><div class="stack"><button class="pill big jcgo" type="button" id="jcgo">Start the test</button></div>';
  if (hist.length) {
    h += '<div class="block"><h3>Your last tests</h3>' + jcaMockTable(hist.slice(0, 5)) +
      '<p class="foot">All of them are on the <a href="#/jca/review">review page</a>.</p></div>';
  }
  render(jcaShell(h));
  var go = document.getElementById('jcgo');
  if (go) go.addEventListener('click', function () { jcaSel = 0; jcaMockRun(jcaNewMock()); });
}

function jcaMockRun(live) {
  jcaStopTick();
  jcaSel = live.cur || 0;
  render('<div class="wrap artpage jcmock">' + jcaCrumb([['Mock test']]) +
    '<div class="jcbarline" id="jcmbar"></div><div id="jcmbody"></div>' +
    '<div class="block"><h3>All 35</h3><div class="jcpal" id="jcmpal"></div>' +
    '<p class="foot jcnote">Gold: answered. Purple ring: marked to come back to. Outlined: where you are.</p></div></div>');
  /* No floating Back button over the test's own controls. */
  var fab = document.getElementById('backfab');
  if (fab) fab.hidden = true;
  jcaDrawMock(live);
  var box = main.querySelector('.jcmock');
  if (box) box.addEventListener('click', function (e) {
    var el = e.target.closest('[data-m]');
    if (el) jcaMockAct(el.getAttribute('data-m'), el);
  });
  jcaTick = setInterval(function () {
    var cur = jcaLoad(JK_LIVE, null);
    if (!cur || !document.getElementById('jcmbar')) { jcaStopTick(); return; }
    if (Date.now() >= cur.start + cur.dur) { jcaStopTick(); jcaFinishMock(cur); return; }
    jcaDrawMockBar(cur);
  }, 1000);
}

function jcaDrawMockBar(live) {
  var bar = document.getElementById('jcmbar');
  if (!bar) return;
  var left = live.start + live.dur - Date.now();
  bar.innerHTML = '<span class="jcclock' + (left < 300000 ? ' low' : '') + '">' + jcaClock(left) + '</span>' +
    '<span class="jcdone">' + Object.keys(live.ans).length + ' of ' + live.ids.length + ' answered</span>' +
    '<button class="pill big jcsubmit" type="button" data-m="submit">Submit</button>';
}

function jcaDrawMock(live) {
  jcaDrawMockBar(live);
  var body = document.getElementById('jcmbody'), pal = document.getElementById('jcmpal');
  if (!body || !pal) return;
  var i = jcaSel, id = live.ids[i], item = JCA_QBY[id], q = item.q, pick = live.ans[id];
  body.innerHTML = '<div class="mcount">Question ' + (i + 1) + ' of ' + live.ids.length + ' · ' +
    esc(item.sec.short) + '</div><div class="mq"><div class="mqq">' + esc(q.q) + '</div><div class="mqo">' +
    q.o.map(function (o, oi) {
      return '<button type="button" class="mopt' + (pick === oi ? ' jcpick' : '') + '" data-m="pick" data-o="' + oi + '">' +
        '<span class="ml">' + 'ABCD'.charAt(oi) + '</span><span class="mt">' + esc(o) + '</span></button>';
    }).join('') + '</div></div>' +
    '<div class="stack jcnav">' +
      '<button class="pill big" type="button" data-m="prev"' + (i ? '' : ' disabled') + '>Previous</button>' +
      '<button class="pill big" type="button" data-m="mark">' + (live.mark[id] ? 'Unmark' : 'Mark for review') + '</button>' +
      (pick != null ? '<button class="pill big" type="button" data-m="clear">Clear answer</button>' : '') +
      '<button class="pill big" type="button" data-m="next"' + (i + 1 < live.ids.length ? '' : ' disabled') + '>Next</button>' +
    '</div>';
  pal.innerHTML = live.ids.map(function (qid, k) {
    var cls = (live.ans.hasOwnProperty(qid) ? ' ans' : '') + (live.mark[qid] ? ' mk' : '') + (k === i ? ' cur' : '');
    return '<button type="button" class="jcp' + cls + '" data-m="go" data-i="' + k + '" aria-label="Question ' +
      (k + 1) + '">' + (k + 1) + '</button>';
  }).join('');
}

/* An instant scroll that leaves the element just below the sticky header;
   the stylesheet's smooth scrolling would be abandoned half-way by a redraw. */
function jcaScrollTo(el) {
  var root = document.documentElement, prev = root.style.scrollBehavior;
  var head = document.querySelector('header.top'), off = head ? head.getBoundingClientRect().height : 0;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - off - 12));
  root.style.scrollBehavior = prev;
}

function jcaMockAct(act, el) {
  var live = jcaLoad(JK_LIVE, null);
  if (!live) return;
  var id = live.ids[jcaSel];
  if (act === 'pick') live.ans[id] = parseInt(el.getAttribute('data-o'), 10);
  else if (act === 'clear') delete live.ans[id];
  else if (act === 'mark') { if (live.mark[id]) delete live.mark[id]; else live.mark[id] = 1; }
  else if (act === 'prev' && jcaSel > 0) jcaSel--;
  else if (act === 'next' && jcaSel + 1 < live.ids.length) jcaSel++;
  else if (act === 'go') jcaSel = parseInt(el.getAttribute('data-i'), 10) || 0;
  else if (act === 'submit') return jcaConfirmSubmit(live);
  live.cur = jcaSel;
  jcaSave(JK_LIVE, live);
  jcaDrawMock(live);
  if (act === 'prev' || act === 'next' || act === 'go') {
    var body = document.getElementById('jcmbody');
    if (body && body.getBoundingClientRect().top < 0) jcaScrollTo(document.getElementById('jcmbar') || body);
  }
}

function jcaConfirmSubmit(live) {
  var sheet = document.getElementById('sheet');
  if (!sheet) return jcaFinishMock(live);
  var blank = live.ids.length - Object.keys(live.ans).length, marked = Object.keys(live.mark).length;
  sheet.innerHTML = '<div class="sheetbg"></div><div class="sheetbox" role="dialog" aria-modal="true" ' +
    'aria-label="Submit the test"><button class="sheetx" aria-label="Close">✕</button>' +
    '<div class="label tight">Mock test</div><h2>Submit now?</h2><p class="note">' +
    (blank ? jcaPlural(blank, 'question') + ' still blank. A blank costs nothing; a guess that is wrong costs a quarter mark. '
           : 'Every question is answered. ') +
    (marked ? jcaPlural(marked, 'question') + ' marked for review. ' : '') +
    jcaClock(live.start + live.dur - Date.now()) + ' left.</p>' +
    '<div class="stack"><button class="pill big jcgo" type="button" id="jcyes">Submit the test</button> ' +
    '<button class="pill big" type="button" id="jcno">Keep going</button></div></div>';
  sheet.hidden = false;
  function close() { sheet.hidden = true; sheet.innerHTML = ''; }
  sheet.querySelector('.sheetx').addEventListener('click', close);
  sheet.querySelector('.sheetbg').addEventListener('click', close);
  document.getElementById('jcno').addEventListener('click', close);
  document.getElementById('jcyes').addEventListener('click', function () {
    close();
    jcaFinishMock(jcaLoad(JK_LIVE, live));
  });
  document.getElementById('jcyes').focus();
}

function jcaFinishMock(live) {
  jcaStopTick();
  var secs = {}, right = 0, wrong = 0, items = [];
  JCA_MOCK.split.forEach(function (x) { secs[x[0]] = { n: 0, r: 0, w: 0 }; });
  live.ids.forEach(function (id) {
    var item = JCA_QBY[id];
    if (!item) return;
    var pick = live.ans.hasOwnProperty(id) ? live.ans[id] : null, s = secs[item.sec.id];
    s.n++;
    if (pick !== null) {
      var ok = pick === item.q.a;
      if (ok) { right++; s.r++; } else { wrong++; s.w++; }
      jcaMark(id, ok);
    }
    items.push([id, pick]);
  });
  var res = { at: Date.now(), n: items.length, right: right, wrong: wrong, skip: items.length - right - wrong,
              net: right - JCA_MOCK.neg * wrong, used: Math.min(live.dur, Date.now() - live.start), secs: secs };
  var hist = jcaLoad(JK_MOCKS, []);
  hist.unshift(res);
  jcaSave(JK_MOCKS, hist.slice(0, 30));
  res.items = items;
  jcaSave(JK_LAST, res);
  jcaSave(JK_LIVE, null);
  if (location.hash !== '#/jca/mock/result') location.hash = '#/jca/mock/result';
  else jcaMockResult();
}

function jcaMockResult(filter) {
  var res = jcaLoad(JK_LAST, null);
  if (!res || !res.items) {
    return render(jcaShell(jcaCrumb([['Mock test', '#/jca/mock'], ['Result']]) + pageH1('Mock test', '') +
      '<div class="empty"><b>No finished test yet</b>Take one and the score and every answer appear here.' +
      '<div class="stack"><a class="pill big" href="#/jca/mock">Start a test</a></div></div>'));
  }
  var f = filter || 'all';
  var pct = res.n ? Math.round(100 * res.net / res.n) : 0;
  var h = jcaCrumb([['Mock test', '#/jca/mock'], ['Result']]) +
    pageH1('Your score: ' + jcaNet(res.net) + ' out of ' + res.n,
      res.right + ' right, ' + res.wrong + ' wrong (minus ' + jcaNet(JCA_MOCK.neg * res.wrong) + '), ' +
      res.skip + ' blank, in ' + jcaClock(res.used) + '.') +
    '<div class="figs">' + fig(pct + '%', 'net score') + fig(res.right, 'right') + fig(res.wrong, 'wrong') +
      fig(res.skip, 'blank') + '</div>' +
    '<p class="foot">The paper needs 50 out of 100 to qualify, so at the same rate this block wants 17.5 ' +
    'out of 35. Treat that as the floor: the law block is the part you can push close to full marks.</p>';

  h += '<div class="block"><h3>By section</h3><dl class="facts">' + JCA_MOCK.split.map(function (x) {
    var s = res.secs[x[0]], sec = jcaSec[x[0]];
    if (!s || !sec) return '';
    return '<dt><a href="#/jca/' + x[0] + '">' + esc(sec.name) + '</a></dt><dd>' + jcaNet(s.r - JCA_MOCK.neg * s.w) +
      ' out of ' + s.n + ' · ' + s.r + ' right, ' + s.w + ' wrong, ' + (s.n - s.r - s.w) + ' blank</dd>';
  }).join('') + '</dl></div>';

  h += '<div class="block"><h3>Every question</h3><div class="listtabs" id="jcrtabs">' +
    [['all', 'All ' + res.n], ['wrong', 'Wrong ' + res.wrong], ['blank', 'Blank ' + res.skip], ['right', 'Right ' + res.right]]
    .map(function (t) {
      return '<button type="button" data-f="' + t[0] + '" aria-pressed="' + (t[0] === f) + '">' + esc(t[1]) + '</button>';
    }).join('') + '</div>' + res.items.map(function (x, k) {
      var item = JCA_QBY[x[0]];
      if (!item) return '';
      var st = x[1] === null ? 'blank' : x[1] === item.q.a ? 'right' : 'wrong';
      if (f !== 'all' && f !== st) return '';
      return '<div class="jcres ' + st + '"><div class="jcresn">' + (k + 1) + ' · ' +
        (st === 'right' ? 'Right' : st === 'wrong' ? 'Wrong' : 'Blank') + '</div>' + jcaAnswerCard(x[0], x[1]) + '</div>';
    }).join('') + '</div>';

  h += '<div class="stack"><a class="pill big" href="#/jca/mock">Another test</a> ' +
    '<a class="pill big" href="#/jca/practice/wrong">Practise what you got wrong</a></div>';
  render(jcaShell(h));
  var rt = document.getElementById('jcrtabs');
  if (!rt) return;
  if (filter) jcaScrollTo(rt);
  rt.addEventListener('click', function (e) {
    var b = e.target.closest('[data-f]');
    if (b) jcaMockResult(b.getAttribute('data-f'));
  });
}

/* ------------------------------------------------------------------ review */

function jcaReviewPage() {
  var ids = jcaWrongIds(), hist = jcaLoad(JK_MOCKS, []);
  var best = hist.reduce(function (m, x) { return Math.max(m, x.net); }, -Infinity);
  var h = jcaCrumb([['Review']]) +
    pageH1('Review', 'Everything you have told the site you do not know yet. Nothing here was chosen for you.') +
    '<div class="figs">' + fig(ids.length, 'wrong answers') + fig(hist.length, 'mock tests') +
      fig(hist.length ? jcaNet(best) : 'none', 'best mock') + '</div>';

  h += '<div class="block"><h3>By section</h3><dl class="facts">' + JCA_SECS.map(function (s) {
    return '<dt><a href="#/jca/practice/' + s.id + '">' + esc(s.name) + '</a></dt><dd>' +
      esc(jcaProgressLine(jcaProgress(jcaQs(s.id)))) + '</dd>';
  }).join('') + '</dl></div>';

  if (ids.length) {
    h += '<div class="block"><h3>The questions you got wrong</h3>' +
      '<p class="foot jcnote">A question leaves this list the next time you answer it right.</p>' +
      '<div class="stack-sm"><a class="pill big" href="#/jca/practice/wrong">Practise these ' + ids.length + '</a></div>';
    JCA_SECS.forEach(function (s) {
      var mine = ids.filter(function (id) { return JCA_QBY[id].sec === s; });
      if (!mine.length) return;
      h += '<div class="label stack-lg">' + esc(s.name) + ' · ' + mine.length + '</div>' +
        mine.map(function (id) { return jcaAnswerCard(id, null); }).join('');
    });
    h += '</div>';
  } else {
    h += '<div class="empty"><b>The list is empty</b>Either nothing has been answered wrong yet, or this ' +
      'browser is not keeping site data. Practise a topic and anything you miss lands here.' +
      '<div class="stack"><a class="pill big" href="#/jca/practice">Practise</a></div></div>';
  }

  if (hist.length) h += '<div class="block"><h3>Every mock test</h3>' + jcaMockTable(hist) + '</div>';

  h += '<div class="stack"><button class="pill big" type="button" id="jcclear">Clear everything on this page</button></div>';
  render(jcaShell(h));
  var btn = document.getElementById('jcclear');
  if (btn) btn.addEventListener('click', function () {
    if (btn.getAttribute('data-sure')) {
      [JK_WRONG, JK_SEEN, JK_MOCKS, JK_LAST].forEach(function (k) { jcaSave(k, null); delete JCA_MEM[k]; });
      jcaReviewPage();
    } else {
      btn.setAttribute('data-sure', '1');
      btn.textContent = 'Press again to clear your answers and mock history';
    }
  });
}

/* ------------------------------------------------------------------ keys

   In a mock, A to D (or 1 to 4) choose and the arrows move; in practice,
   A to D choose and Enter takes the Next button, which has the focus. */
document.addEventListener('keydown', function (e) {
  if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  var sheet = document.getElementById('sheet');
  if (sheet && !sheet.hidden) return;
  var k = e.key.toLowerCase(), oi = 'abcd'.indexOf(k);
  if (oi < 0 && /^[1-4]$/.test(k)) oi = parseInt(k, 10) - 1;
  if (main.querySelector('.jcmock')) {
    if (oi >= 0) { e.preventDefault(); jcaMockAct('pick', { getAttribute: function () { return String(oi); } }); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); jcaMockAct('next'); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); jcaMockAct('prev'); }
  } else if (jcaQuiz && document.getElementById('jquiz') && oi >= 0 && !jcaQuiz.answered) {
    e.preventDefault();
    jcaPick(oi);
  }
});

/* ------------------------------------------------------------------ route */

function jcaRoute(seg) {
  var k = seg[0] || '';
  if (!k) return jcaHome();
  if (k === 'practice') return jcaPractice(seg.slice(1));
  if (k === 'mock') return seg[1] === 'result' ? jcaMockResult() : jcaMockPage();
  if (k === 'review') return jcaReviewPage();
  var s = jcaSec[k];
  if (!s) return notFound('That address does not exist in JCA.');
  if (!seg[1]) return jcaSectionPage(s);
  var t = jcaTopic(k, seg[1]);
  if (!t) return notFound('There is no such topic in ' + s.name + '.');
  jcaTopicPage(s, t);
}

SUBJECTS.push({
  id: 'jca',
  name: 'Supreme Court JCA',
  short: 'JCA',
  blurb: 'The law paper of the Supreme Court Junior Court Assistant 2026 objective test: the judiciary provisions of the Constitution, the Supreme Court Rules, 2013 and the Officers and Servants Rules, 1961, with questions, a timed mock test and a review list.',
  tabs: [
    { href: '#/jca',          label: 'Overview',       match: [''] },
    { href: '#/jca/c',        label: 'Constitution',   match: ['c'] },
    { href: '#/jca/r',        label: 'SC Rules 2013',  match: ['r'] },
    { href: '#/jca/s',        label: 'O&S Rules 1961', match: ['s'] },
    { href: '#/jca/practice', label: 'Practice',       match: ['practice'] },
    { href: '#/jca/mock',     label: 'Mock test',      match: ['mock'] },
    { href: '#/jca/review',   label: 'Review',         match: ['review'] }
  ],
  stats: function () {
    return ['35 marks', JCA_Q.length + ' questions', ((jcaSec.r && jcaSec.r.orders) || []).length + ' Orders'];
  },
  topics: function () {
    var out = [];
    JCA_SECS.forEach(function (s) {
      s.topics.forEach(function (t) {
        out.push({ t: t.t, href: '#/jca/' + s.id + '/' + encodeURIComponent(t.id), w: t.w,
                   n: jcaPlural(jcaQs(s.id, t.id).length, 'question'),
                   k: s.name + ' ' + (t.blocks || []).map(function (b) { return b.h; }).join(' ') +
                      ' jca junior court assistant supreme court exam' });
      });
    });
    return out.concat([
      { t: 'JCA mock test', href: '#/jca/mock', n: '35 questions',
        w: 'The law block at the paper\'s pace: 32 minutes, a quarter mark off for a wrong answer.',
        k: 'mock test timed negative marking jca practice exam' },
      { t: 'JCA practice and review', href: '#/jca/practice', n: JCA_Q.length + ' questions',
        w: 'Every question with the reason for its answer, and the list of the ones you got wrong.',
        k: 'mcq practice wrong answers review jca' }
    ]);
  },
  route: jcaRoute
});

/* The side column on a JCA page: where you stand in this topic or section,
   and the way to practise it. Practice and the mock have no side column at
   all: they are pages to concentrate on. */
function sideJca(seg) {
  var k = seg[0] || '', s = jcaSec[k];
  if (!k) {
    var n = jcaDaysLeft();
    return [sFacts('The law paper', [
      ['Questions', '35 of the 100'],
      ['On the paper', '90 minutes for all 100'],
      ['Marking', 'plus 1, minus 0.25'],
      ['Test date', JCA_EXAM.label + ', tentative'],
      ['Days left', n > 0 ? String(n) : 'none']
    ])];
  }
  if (!s) return [];
  var t = seg[1] ? jcaTopic(k, seg[1]) : null;
  var ids = jcaQs(k, t ? t.id : null), p = jcaProgress(ids);
  return [
    sFacts(t ? 'This topic' : s.short, [
      ['Questions', String(ids.length)],
      ['Tried', p.tried ? p.tried + ' of ' + ids.length : 'none yet'],
      ['Right', p.pct === null ? 'not yet' : p.pct + ' per cent']
    ]),
    sLinks('Practise', [
      { href: '#/jca/practice/' + k + (t ? '/' + t.id : ''), t: t ? 'This topic' : 'All of ' + s.short,
        d: jcaPlural(ids.length, 'question') },
      { href: '#/jca/mock', t: 'A mock test', d: '35 questions, 32 minutes' },
      { href: '#/jca/review', t: 'Your review list', d: jcaPlural(jcaWrongIds().length, 'wrong answer') }
    ]),
    t ? sLinks('The other topics in ' + s.short, s.topics.map(function (x) {
      return { href: '#/jca/' + k + '/' + x.id, t: x.t, on: x.id === t.id };
    }), null, 12) : ''
  ];
}

/* On an article page: the JCA questions that test it, and a warning where
   the official edition still prints the struck-down NJAC wording. */
function jcaArticleCards(n) {
  var a = byArt[n], out = [], qn = (jcaQByArt[n] || []).length, t = jcaArtTopic[n];
  if (!a) return out;
  if (qn || t) {
    out.push(sLinks('Supreme Court JCA', [
      qn ? { href: '#/jca/practice/a/' + encodeURIComponent(n), t: 'Practise its ' + jcaPlural(qn, 'question'),
             d: 'With the reason for every answer' } : null,
      t ? { href: '#/jca/c/' + t.id, t: t.t, d: 'The JCA topic it belongs to' } : null
    ]));
  }
  if (a.t && /National Judicial Appointments Commission/.test(a.t)) {
    out.push(sText('Read this text with care', esc(/^124[ABC]$/.test(a.a)
      ? 'Inserted by the 99th Amendment (2014), which the Supreme Court struck down on 16 October 2015. It has no effect; the official edition still prints it.'
      : 'The words about the National Judicial Appointments Commission came with the 99th Amendment (2014), struck down on 16 October 2015. The wording from before 2014, with the Chief Justice of India and the collegium, is what operates.')));
  }
  return out;
}

/* ----------------------------------------------------------------- index

   The whole site as a contents page: every subject, every section, and every
   individual page inside them - all 506 articles, all 106 amendments, all 91
   cases, every event, act, person, movement, plan, pack and topic.

   It is deliberately not the same thing as the hub. The hub asks what you
   need to study and filters about seventy topics down to the one you want.
   This asks nothing: it shows the shape of the whole site at once, which is
   what you want when you are deciding what to study rather than looking for
   something you have already decided on.

   Long groups are folded shut so the page opens as an outline and expands
   where you point it. */

function idxItems(list) {
  return '<div class="idxgrid">' + list.map(function (it) {
    return '<a href="' + it.href + '">' + esc(it.t) +
      (it.n ? ' <i>' + esc(it.n) + '</i>' : '') + '</a>';
  }).join('') + '</div>';
}

function idxGroup(name, list, forceOpen) {
  if (!list.length) return '';
  /* Only the Sections group of each subject opens by default. Anything else
     open turns the outline back into the wall of links it exists to replace. */
  var open = forceOpen ? ' open' : '';
  return '<details class="idx"' + open + '><summary>' + esc(name) +
    ' <b>' + list.length + '</b></summary>' + idxItems(list) + '</details>';
}

function idxSection(title, stat, body) {
  return '<div class="idxsec"><div class="idxhead"><h2>' + esc(title) + '</h2>' +
    '<span>' + esc(stat) + '</span></div>' + body + '</div>';
}

function indexPage() {
  var h = '<div class="wrap artpage"><div class="crumb">Index</div>' +
    pageH1('Every page on the site',
      'Every section and every page, laid out so you can see the whole shape before you choose. Tap a group to open it.') +
    '<div class="listtabs"><button type="button" id="idxopen">Open everything</button>' +
    '<button type="button" id="idxclose">Close everything</button></div>';

  var total = 0;
  function count(list) { total += list.length; return list; }

  /* ---------------------------------------------------------- Constitution */
  var coiSections = count([
    { t: 'Every topic, listed', href: '#/s/constitution' },
    { t: 'The articles', href: '#/constitution', n: LIVE.length + ' in force' },
    { t: 'The exam layer', href: '#/high-yield' },
    { t: 'The article map', href: '#/high-yield/map' },
    { t: 'The courts, article by article', href: '#/high-yield/courts' },
    { t: 'Centre and State, and the Seventh Schedule', href: '#/high-yield/centre-state' },
    { t: 'The Constituent Assembly', href: '#/assembly' },
    { t: 'The amendments', href: '#/amendments', n: String(AMENDMENTS.length) },
    { t: 'The Schedules', href: '#/schedules', n: String(SCHEDULES.length) },
    { t: 'Landmark cases', href: '#/cases', n: String(CASES.length) },
    { t: 'About this site', href: '#/about' }
  ]);

  var partItems = count(parts.map(function (p) {
    var live = p.arts.filter(function (a) { return !a.om; });
    var use = live.length ? live : p.arts;
    return { t: 'Part ' + p.num + ' \u00b7 ' + titleCase(p.title || p.arts[0].pt),
             href: '#/part/' + encodeURIComponent(p.num),
             n: use[0].a + '\u2013' + use[use.length - 1].a };
  }));

  var artItems = count(ARTICLES.map(function (a) {
    return { t: 'Art. ' + a.a + ' \u2014 ' + shorten(a.h || 'Repealed', 42),
             href: '#/a/' + encodeURIComponent(a.a) };
  }));

  var asmItems = count(ASM_VIEWS.map(function (v) {
    return { t: v[1], href: '#/assembly' + (v[0] ? '/' + v[0] : '') };
  }));

  var hyItems = count([
    { t: 'Overview', href: '#/high-yield' },
    { t: 'Articles, in three tiers', href: '#/high-yield/articles' },
    { t: 'The article map', href: '#/high-yield/map' },
    { t: 'The courts', href: '#/high-yield/courts' },
    { t: 'Centre and State', href: '#/high-yield/centre-state' },
    { t: 'Cases', href: '#/high-yield/cases' },
    { t: 'Amendments', href: '#/high-yield/amendments' },
    { t: 'Confused pairs', href: '#/high-yield/confusions' },
    { t: 'Quick facts', href: '#/high-yield/facts' }
  ]);

  var amdItems = count(AMENDMENTS.map(function (m) {
    return { t: ordinal(m.n) + ' \u2014 ' + shorten(m.s, 38), href: '#/amendment/' + m.n,
             n: String(m.y) };
  }));

  var schItems = count(SCHEDULES.map(function (s) {
    return { t: ORD[s.n] + ' Schedule \u2014 ' + shorten(s.sub, 34), href: '#/schedule/' + s.n };
  }));

  var caseItems = count(CASES.map(function (c) {
    return { t: shorten(c.n, 46), href: '#/case/' + encodeURIComponent(c.id), n: String(c.y) };
  }));

  h += idxSection('Constitution of India',
    ARTICLES.length + ' articles \u00b7 ' + AMENDMENTS.length + ' amendments \u00b7 ' +
    CASES.length + ' cases \u00b7 ' + SCHEDULES.length + ' schedules',
    idxGroup('Sections', coiSections, true) +
    idxGroup('The Parts', partItems) +
    idxGroup('Every article', artItems) +
    idxGroup('The Constituent Assembly', asmItems) +
    idxGroup('The exam layer', hyItems) +
    idxGroup('Every amendment', amdItems) +
    idxGroup('The Schedules', schItems) +
    idxGroup('Every case', caseItems));

  /* -------------------------------------------------------------- History */
  var histSections = count([
    { t: 'Every topic, listed', href: '#/s/history' },
    { t: 'The timeline', href: '#/history' },
    { t: 'The Acts', href: '#/history/acts' },
    { t: 'The people', href: '#/history/people' },
    { t: 'The movements', href: '#/history/movements' },
    { t: 'The treaties', href: '#/history/treaties' },
    { t: 'The Congress sessions', href: '#/history/congress' },
    { t: 'Governors-General and Viceroys', href: '#/history/raj' },
    { t: 'The exam layer', href: '#/history/high-yield' }
  ]);
  var evItems = count((HIST.timeline || []).map(function (e) {
    return { t: shorten(e.t, 44), href: '#/history/event/' + encodeURIComponent(e.id),
             n: String(e.y) };
  }));
  var actItems = count((HIST.acts || []).map(function (a) {
    return { t: shorten(a.n, 44), href: '#/history/act/' + encodeURIComponent(a.id),
             n: String(a.y) };
  }));
  var perItems = count((HIST.people || []).map(function (p) {
    return { t: p.n, href: '#/history/person/' + encodeURIComponent(p.id) };
  }));
  var movItems = count((HIST.movements || []).map(function (m) {
    return { t: m.n, href: '#/history/movement/' + encodeURIComponent(m.id),
             n: m.from + '\u2013' + m.to };
  }));
  var trtItems = count([
    { t: 'The treaties', href: '#/history/treaties' },
    { t: 'Grouped by war', href: '#/history/treaties/wars' },
    { t: 'After 1947', href: '#/history/treaties/after' },
    { t: 'The drill', href: '#/history/treaties/drill' },
    { t: 'Confused pairs', href: '#/history/treaties/confusions' }
  ]);
  var congItems = count(CONG_SESSIONS.map(function (x) {
    return { t: x.place + ' \u2014 ' + shorten(x.pres, 30),
             href: '#/history/session/' + encodeURIComponent(x.id),
             n: String(x.y).replace(/^.*?(\d{4}).*$/, '$1') };
  }));
  var congViews = count([
    { t: 'Every session', href: '#/history/congress' },
    { t: 'The ones that get asked', href: '#/history/congress/asked' },
    { t: 'Firsts and records', href: '#/history/congress/firsts' },
    { t: 'Confused pairs', href: '#/history/congress/confusions' }
  ]);
  var rajItems = count(rajAll.map(function (x) {
    return { t: x.n, href: '#/history/ruler/' + encodeURIComponent(x.id),
             n: rajYears(x) };
  }));
  var rajViews = count([
    { t: 'The roll', href: '#/history/raj' },
    { t: 'The four offices', href: '#/history/raj/offices' },
    { t: 'Who was in charge when', href: '#/history/raj/drill' },
    { t: 'Confused pairs', href: '#/history/raj/confusions' }
  ]);
  var histHyItems = count([
    { t: 'Overview', href: '#/history/high-yield' },
    { t: 'Confused pairs', href: '#/history/high-yield/confusions' },
    { t: 'Quick facts', href: '#/history/high-yield/facts' }
  ]);

  h += idxSection('Modern History',
    (HIST.timeline || []).length + ' events \u00b7 ' + (HIST.acts || []).length + ' Acts \u00b7 ' +
    (HIST.people || []).length + ' people \u00b7 ' +
    CONG_SESSIONS.filter(function (x) { return !x.none; }).length + ' Congress sessions \u00b7 ' +
    rajAll.length + ' Viceroys and Governors-General',
    idxGroup('Sections', histSections, true) +
    idxGroup('Every event', evItems) +
    idxGroup('The Acts', actItems) +
    idxGroup('The people', perItems) +
    idxGroup('The movements', movItems) +
    idxGroup('The treaties', trtItems) +
    idxGroup('Congress sessions', congViews) +
    idxGroup('Every Congress session', congItems) +
    idxGroup('Governors-General and Viceroys', rajViews) +
    idxGroup('Every Governor-General and Viceroy', rajItems) +
    idxGroup('The exam layer', histHyItems));

  /* -------------------------------------------------------------- Economy */
  var econSections = count([
    { t: 'Every topic, listed', href: '#/s/economy' },
    { t: 'The Five Year Plans', href: '#/economy' },
    { t: 'The 1991 reforms', href: '#/economy/reforms' },
    { t: 'The standing topics', href: '#/economy/topics' },
    { t: 'Confused pairs', href: '#/economy/high-yield' },
    { t: 'Quick facts', href: '#/economy/high-yield/facts' }
  ]);
  var planItems = count((ECON.plans || []).map(function (p) {
    return { t: p.n, href: '#/economy/plan/' + encodeURIComponent(p.id),
             n: p.from + '\u2013' + p.to };
  }));
  var econTopicItems = count((ECON.topics || []).map(function (t) {
    return { t: t.n, href: '#/economy/topic/' + encodeURIComponent(t.id) };
  }));

  h += idxSection('Indian Economy',
    (ECON.plans || []).length + ' plans and gaps \u00b7 ' + (ECON.topics || []).length + ' topics',
    idxGroup('Sections', econSections, true) +
    idxGroup('Every plan', planItems) +
    idxGroup('The standing topics', econTopicItems));

  /* ------------------------------------------------------------ Static GK */
  var gkItems = count((GKD.packs || []).map(function (p) {
    return { t: p.n, href: '#/gk/pack/' + encodeURIComponent(p.id), n: gkRows(p) + ' facts' };
  }));
  var gkSections = count([
    { t: 'Every topic, listed', href: '#/s/gk' },
    { t: 'All packs', href: '#/gk' },
    { t: 'Confused pairs', href: '#/gk/confusions' }
  ]);

  h += idxSection('Static General Knowledge',
    (GKD.packs || []).length + ' packs',
    idxGroup('Sections', gkSections, true) +
    idxGroup('Every pack', gkItems));

  /* -------------------------------------------------------------- Biology */
  var bioItems = count((BIO.topics || []).map(function (t) {
    return { t: t.n, href: '#/biology/topic/' + encodeURIComponent(t.id), n: bioRows(t) + ' facts' };
  }));
  var bioSections = count([
    { t: 'Every topic, listed', href: '#/s/biology' },
    { t: 'The three topics', href: '#/biology' },
    { t: 'Confused pairs', href: '#/biology/high-yield' },
    { t: 'Quick facts', href: '#/biology/high-yield/facts' }
  ]);

  h += idxSection('Biology', (BIO.topics || []).length + ' topics',
    idxGroup('Sections', bioSections, true) +
    idxGroup('The topics', bioItems));

  /* --------------------------------------------------------- Advanced Maths */
  var mathSections = count([
    { t: 'Every chapter, listed', href: '#/s/maths' },
    { t: 'All chapters', href: '#/maths' },
    { t: 'The review list', href: '#/maths/review' }
  ]);
  var mathChapItems = count((MATH.chapters || []).map(function (c) {
    return { t: c.n, href: '#/maths/chapter/' + encodeURIComponent(c.id),
             n: mathRows(c) + ' formulas' };
  }));
  /* The drill and the practice run are separate PAGES, not views of the
     chapter, so the outline lists them separately - otherwise two thirds of
     this subject would be missing from a page whose whole claim is that it
     shows everything. */
  var mathDrillItems = count((MATH.chapters || []).map(function (c) {
    return { t: c.n, href: '#/maths/recall/' + encodeURIComponent(c.id) };
  }));
  var mathQuizItems = count((MATH.chapters || []).filter(function (c) {
    return mathQcount(c.id);
  }).map(function (c) {
    return { t: c.n, href: '#/maths/practice/' + encodeURIComponent(c.id),
             n: mathQcount(c.id) + ' questions' };
  }));

  h += idxSection('Advanced Maths',
    (MATH.chapters || []).length + ' chapters \u00b7 ' + mathAllRows() + ' formulas \u00b7 ' +
    mathAllQs() + ' questions \u00b7 ' + mathAllFigs() + ' diagrams',
    idxGroup('Sections', mathSections, true) +
    idxGroup('The formula sheets', mathChapItems) +
    idxGroup('The recall drills', mathDrillItems) +
    idxGroup('The practice banks', mathQuizItems));

  /* ------------------------------------------------- Ancient and Medieval */
  var earlySections = count([
    { t: 'Every topic, listed', href: '#/s/early' },
    { t: 'The topics', href: '#/early' },
    { t: 'The Mughal emperors', href: '#/early/mughals' },
    { t: 'Confused pairs', href: '#/early/confusions' }
  ]);
  var earlyItems = count((EARLY.topics || []).map(function (t) {
    return { t: t.n, href: '#/early/topic/' + encodeURIComponent(t.id), n: earlyRows(t) + ' facts' };
  }));
  var empItems = count(greatEmperors().map(function (e) {
    return { t: e.n, href: '#/early/emperor/' + encodeURIComponent(e.id), n: yrSpan(e.from, e.to) };
  }));

  h += idxSection('Ancient and Medieval History',
    (EARLY.topics || []).length + ' topics \u00b7 ' + greatEmperors().length + ' emperors',
    idxGroup('Sections', earlySections, true) +
    idxGroup('The topics', earlyItems) +
    idxGroup('The emperors', empItems));

  /* --------------------------------------------------- The criminal laws */
  var lawSections = count([
    { t: 'Every topic, listed', href: '#/s/laws' },
    { t: 'The topics', href: '#/laws' },
    { t: 'IPC to BNS mapping', href: '#/laws/topic/mapping' },
    { t: 'Confused pairs', href: '#/laws/confusions' }
  ]);
  var lawItems = count((LAW.topics || []).map(function (t) {
    return { t: t.n, href: '#/laws/topic/' + encodeURIComponent(t.id), n: lawRows(t) + ' rows' };
  }));

  h += idxSection('The new criminal laws',
    '3 Acts \u00b7 ' + lawAllRows() + ' provisions',
    idxGroup('Sections', lawSections, true) +
    idxGroup('The topics', lawItems));

  /* ------------------------------------------------------------- Geography */
  var geoSections = count([
    { t: 'Every topic, listed', href: '#/s/geography' },
    { t: 'The topics', href: '#/geography' },
    { t: 'Confused pairs', href: '#/geography/confusions' }
  ]);
  var geoItems = count((GEO.topics || []).map(function (t) {
    return { t: t.n, href: '#/geography/topic/' + encodeURIComponent(t.id),
             n: geoRows(t) + ' facts' };
  }));

  h += idxSection('Geography',
    (GEO.topics || []).length + ' topics \u00b7 ' + geoAllRows() + ' facts',
    idxGroup('Sections', geoSections, true) +
    idxGroup('The topics', geoItems));

  /* ----------------------------------------------------------- Daily sets */
  var dailyItems = count([{ t: 'Every set', href: '#/daily' }].concat(DAILY_SETS.map(function (d) {
    return { t: d.d + ' ' + d.y, href: '#/daily/' + d.id, n: d.parts.length + ' parts' };
  })));
  var dailyParts = count([].concat.apply([], DAILY_SETS.map(function (d) {
    return d.parts.map(function (p) {
      return { t: p.h, href: '#/daily/' + d.id + '/' + p.id, n: d.d };
    });
  })));

  h += idxSection('Daily study sets', DAILY_SETS.length + (DAILY_SETS.length === 1 ? ' set' : ' sets'),
    idxGroup('The sets', dailyItems, true) +
    idxGroup('Every part of every set', dailyParts));

  /* ------------------------------------------------------------------ JCA */
  var jcaSections = count([
    { t: 'Every topic, listed', href: '#/s/jca' },
    { t: 'Overview', href: '#/jca' },
    { t: 'Every Order of the SC Rules, 2013', href: '#/jca/r/scr-orders', n: '57' },
    { t: 'Practice', href: '#/jca/practice', n: JCA_Q.length + ' questions' },
    { t: 'Mock test', href: '#/jca/mock', n: '35 questions' },
    { t: 'Review', href: '#/jca/review' }
  ]);
  var jcaItems = count([].concat.apply([], JCA_SECS.map(function (s) {
    return [{ t: s.name, href: '#/jca/' + s.id, n: s.marks + ' marks' }].concat(s.topics.map(function (t) {
      return { t: t.t, href: '#/jca/' + s.id + '/' + encodeURIComponent(t.id), n: s.short };
    }));
  })));

  h += idxSection('Supreme Court JCA', JCA_Q.length + ' questions \u00b7 ' + jcaTopicCount() + ' topics',
    idxGroup('Sections', jcaSections, true) +
    idxGroup('The topics', jcaItems));

  h += '<p class="foot">' + total + ' pages listed. Every one of them is also ' +
    'reachable from the search box at the top, which looks inside the pages as well ' +
    'as at their names.</p></div>';
  render(h);

  function setAll(open) {
    var d = main.querySelectorAll('details.idx');
    for (var i = 0; i < d.length; i++) d[i].open = open;
  }
  var oa = document.getElementById('idxopen'), ca = document.getElementById('idxclose');
  if (oa) oa.addEventListener('click', function () { setAll(true); });
  if (ca) ca.addEventListener('click', function () { setAll(false); });
}

/* ------------------------------------------------------------------ about */

function aboutPage() {
  render('<div class="wrap artpage"><div class="crumb">About</div>' +
  '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s5);font-weight:600">' +
  'How this was built, and what to trust</h1>' +

  '<p class="plain">' + SUBJECTS.length + ' subjects: the Constitution of India — including the Constituent ' +
  'Assembly that wrote it — Modern History, Ancient and Medieval History, the Indian Economy, ' +
  'Static General Knowledge, Biology, Advanced Maths, the Daily study sets, one dated page per study day, ' +
  'and the law paper of the Supreme Court JCA test. ' +
  'They are organised by topic rather than by subject, because a reader ' +
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
  '<p class="plain">Modern History, Ancient and Medieval History, the Indian Economy, Static GK, ' +
  'Biology, Advanced Maths, the Daily sets and the account ' +
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

  '<div class="block"><h3>The JCA section: one exam, two rule books</h3>' +
  '<p class="plain">The JCA subject is the law paper of the Supreme Court Junior Court Assistant ' +
  'test. Its Constitution part links to the article pages above, so its official text is the ' +
  'extracted one. Its two rule books, the Supreme Court Rules, 2013 and the Officers and Servants ' +
  'Rules, 1961, are written, not quoted: the Court\'s website cannot be reached from where the ' +
  'section is made, so both were read in search excerpts of the official copies on the Court\'s own ' +
  'document server, and every Order heading and every rule a question tests rests on that official ' +
  'text or on two independent sources.</p>' +
  '<p class="why">A point with one source only is marked <span class="chip chk">check the bare text</span>, ' +
  'and where a rule\'s heading was not seen, its subject is given instead and the table says so. ' +
  'Read both rule books once in full on the Supreme Court\'s website before the test.</p></div>' +

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

  '<div class="block"><h3>Two lists, checked against two sources</h3>' +
  '<p class="plain">The Congress sessions and the Governors-General and Viceroys ' +
  'were both written from two independent lists and then compared back against ' +
  'both, row by row — a hundred rows of name, year and venue. The comparison ' +
  'found eleven differences. Seven were spellings of the same person, and both ' +
  'spellings are now printed, because an answer key may use either. Four were ' +
  'real mistakes and are fixed.</p>' +
  '<p class="why">Where the two lists genuinely disagree — the year of the ' +
  'Faizpur session, who presided at Delhi in 1932, whether there was a session ' +
  'in 1930 at all — the page prints both answers and says which is which, ' +
  'rather than choosing one and hiding the choice.</p></div>' +

  '<div class="block"><h3>How the pages are set</h3>' +
  '<p class="plain">Three typefaces, each with one job. <b class="kw">Literata</b> — a serif ' +
  'drawn for reading on a screen — sets the headings and the Constitution’s own words. ' +
  '<b class="kw">Inter</b> sets everything the site says in its own voice: the explanations, ' +
  'the tables, the cards. <b class="kw">IBM Plex Mono</b> sets the labels, the chips and the ' +
  'article numbers. All three are stored with the site, so the pages look the same with ' +
  'the network off and nothing about your reading is requested from anyone else.</p>' +
  '<p class="plain stack">Inside an explanation, emphasis is a change of typeface rather ' +
  'than a highlighter. A named idea appears in the serif and in purple; a figure appears in ' +
  'the monospace and in yellow, so that <em class="num">1950</em> and <em class="num">1976</em> ' +
  'are the same width and the eye can compare them down a page. A term is marked once per ' +
  'paragraph and never more than three times, because a page where everything is ' +
  'emphasised has nothing emphasised.</p>' +
  '<p class="why">The marking is applied to the display only. It never changes, adds or ' +
  'removes a word: strip the marks from any paragraph on this site and you get back exactly ' +
  'the text that was written. The official text of the Constitution is not marked at all.</p></div>' +

  '<div class="block"><h3>The one place with a highlighter</h3>' +
  '<p class="plain">The SSC notes are different. Each is a one-line answer, and inside it one ' +
  'phrase is what an answer sheet wants, so that phrase is <mark class="hi">highlighted</mark>. ' +
  'A rule cannot know which phrase that is, so the highlight is written into the data by hand, ' +
  'and the boxes sit at the top of the pages that have them: every new topic, every Five Year ' +
  'Plan, the 1991 reforms, every Mughal emperor and each daily set.</p>' +
  '<p class="why">Current affairs are kept to the Daily sets, where each page carries its date. ' +
  'A Booker winner or a cup holder changes every year; on a dated page an old answer reads as ' +
  'old rather than as wrong.</p></div>' +

  '<div class="block"><h3>Offline, and installable as an app</h3>' +
  '<p class="plain">Every subject is loaded into your browser the first time you open ' +
  'the page — about 2 MB in total, once, fonts and all. After that the site works with no network at ' +
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
      hay: unmark(p.n + ' ' + p.from + ' ' + p.to + ' ' + p.theme + ' ' + p.w + ' ' +
            (p.model || '') + ' ' + (p.key || []).join(' ') + ' ' + (p.note || '') + ' ' +
            (p.ssc || []).join(' ')).toLowerCase(),
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
            (ECON.reform.after || []).map(function (r) { return r[0] + ' ' + r[1]; }).join(' ') + ' ' +
            unmark((ECON.reform.notes || []).join(' ')) + ' ' +
            (ECON.reform.dates || []).concat(ECON.reform.terms || []).map(function (r) {
              return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
      href: '#/economy/reforms', num: ''
    });
  }
  if (ECON.planMatch) {
    searchIndex.push({
      kind: 'plan', id: 'plan-match', no: '', title: 'Which plan was it?',
      sub: 'Schemes, Acts and events matched to the Five Year Plan they fell in',
      near: 'which plan five year plan scheme',
      hay: ('which plan five year plans at a glance ' + unmark((ECON.planNotes || []).join(' ')) + ' ' +
            ECON.planMatch.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
      href: '#/economy', num: ''
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
        hay: unmark(b.h + ' ' + b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
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


  /* Ancient and Medieval History: every topic and every table inside it,
     every emperor with his reign in the haystack, and the confused pairs. */
  function rowsText(rows) {
    return (rows || []).map(function (r) { return r[0] + ' ' + r[1]; }).join(' ');
  }
  (EARLY.topics || []).forEach(function (t) {
    var href = '#/early/topic/' + encodeURIComponent(t.id);
    searchIndex.push({
      kind: t.era === 'medieval' ? 'medieval' : 'ancient', id: 'e-' + t.id, no: '', title: t.n, sub: t.w,
      near: (t.n + ' ' + t.w).toLowerCase(),
      hay: unmark(t.n + ' ' + t.w + ' ' + (t.intro || '') + ' ' + (t.notes || []).join(' ') + ' ' +
            t.blocks.map(function (b) { return b.h + ' ' + rowsText(b.rows); }).join(' ')).toLowerCase(),
      href: href, num: ''
    });
    t.blocks.forEach(function (b, i) {
      searchIndex.push({
        kind: t.era === 'medieval' ? 'medieval' : 'ancient', id: 'e-' + t.id + '-' + i, no: '',
        title: b.h, sub: t.n, near: b.h.toLowerCase(),
        hay: unmark(b.h + ' ' + (b.note || '') + ' ' + rowsText(b.rows)).toLowerCase(),
        href: href, num: ''
      });
    });
  });
  (EARLY.emperors || []).forEach(function (e) {
    searchIndex.push({
      kind: e.kind === 'sur' ? 'sur dynasty' : 'mughal', id: 'emp-' + e.id, no: String(e.from), title: e.n,
      sub: (e.kind === 'sur' ? 'Sur dynasty' : 'Mughal emperor') + ' · ' + yrSpan(e.from, e.to),
      near: (e.n + ' ' + (e.full || '')).toLowerCase(),
      hay: unmark(e.n + ' ' + (e.full || '') + (e.kind === 'sur' ? ' sur dynasty ' : ' mughal emperor ') + e.from + ' ' + e.to + ' ' + e.w + ' ' +
            (e.key || []).join(' ') + ' ' + (e.notes || []).join(' ') + ' ' + (e.born || '') + ' ' +
            (e.tomb || '')).toLowerCase(),
      href: e.kind === 'later' ? '#/early/mughals' : '#/early/emperor/' + encodeURIComponent(e.id), num: ''
    });
  });
  (EARLY.confusions || []).forEach(function (c, i) {
    searchIndex.push({
      kind: 'medieval', id: 'ecmp-' + i, no: '', title: c.k,
      sub: 'Ancient and Medieval · confused pair', near: c.k.toLowerCase(),
      hay: unmark(c.k + ' ' + (c.note || '') + ' ' + rowsText(c.rows)).toLowerCase(),
      href: '#/early/confusions', num: ''
    });
  });

  /* The daily sets: each current-affairs table on its own, so "Szalay" or
     "Thomas Cup 2026" lands on the part of the set that holds it. */
  DAILY_SETS.forEach(function (d) {
    d.parts.forEach(function (p) {
      var href = '#/daily/' + d.id + '/' + p.id;
      searchIndex.push({
        kind: 'daily set', id: d.id + '-' + p.id, no: d.d, title: p.h, sub: d.d + ' ' + d.y + ' · ' + (p.w || ''),
        near: p.h.toLowerCase(),
        hay: unmark(p.h + ' ' + (p.w || '') + ' ' + d.d + ' ' + dailyNotes(p).join(' ')).toLowerCase(),
        href: href, num: ''
      });
      (p.blocks || []).forEach(function (b, i) {
        searchIndex.push({
          kind: 'daily set', id: d.id + '-' + p.id + '-' + i, no: d.d, title: b.h, sub: d.d + ' · ' + p.h,
          near: b.h.toLowerCase(),
          hay: unmark(b.h + ' ' + (b.note || '') + ' ' + rowsText(b.rows) + ' ' + p.h).toLowerCase(),
          href: href, num: ''
        });
      });
    });
  });

  /* GK packs may carry SSC notes; keep them reachable. */
  (GKD.packs || []).forEach(function (p) {
    if (!p.notes) return;
    searchIndex.push({
      kind: 'static gk', id: p.id + '-notes', no: '', title: p.n + ': SSC notes', sub: p.w,
      near: (p.n + ' ssc notes').toLowerCase(),
      hay: unmark(p.n + ' ssc notes ' + p.notes.join(' ')).toLowerCase(),
      href: '#/gk/pack/' + encodeURIComponent(p.id), num: ''
    });
  });

  /* The criminal laws, topic then table, so that a bare section number -
     "152", "BNS 103", "479" - reaches the table that explains it. The old
     IPC numbers are in the haystack too, because that is what a reader who
     learnt the law before 2024 will type. */
  (LAW.topics || []).forEach(function (t) {
    var href = '#/laws/topic/' + encodeURIComponent(t.id);
    var all = t.blocks.map(function (b) {
      return b.h + ' ' + b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ');
    }).join(' ');
    searchIndex.push({
      kind: 'criminal law', id: 'law-' + t.id, no: '', title: t.n, sub: t.w,
      near: (t.n + ' ' + t.w + ' ' + (t.intro || '')).toLowerCase(),
      hay: (t.n + ' ' + t.w + ' ' + (t.intro || '') + ' bns bnss bsa ipc crpc ' + all).toLowerCase(),
      href: href, num: ''
    });
    t.blocks.forEach(function (b, i) {
      searchIndex.push({
        kind: 'criminal law', id: 'law-' + t.id + '-' + i, no: '', title: b.h, sub: t.n,
        near: b.h.toLowerCase(),
        hay: (b.h + ' ' + (b.note || '') + ' ' +
              b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
        href: href, num: ''
      });
    });
  });
  (LAW.confusions || []).forEach(function (c, i) {
    searchIndex.push({
      kind: 'criminal law', id: 'lcmp-' + i, no: '', title: c.k,
      sub: 'Criminal laws \u00b7 confused pair', near: c.k.toLowerCase(),
      hay: (c.k + ' ' + (c.note || '') + ' ' +
            c.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
      href: '#/laws/confusions', num: ''
    });
  });

  /* JCA, topic then table, and every Order of the 2013 Rules by its numeral,
     so that "Order XLVII" finds review and "curative" finds Order XLVIII. */
  JCA_SECS.forEach(function (s) {
    s.topics.forEach(function (t) {
      var href = '#/jca/' + s.id + '/' + encodeURIComponent(t.id);
      searchIndex.push({
        kind: 'jca', id: 'jca-' + t.id, no: '', title: t.t, sub: s.short + ' \u00b7 ' + t.w,
        near: (t.t + ' ' + t.w).toLowerCase(),
        hay: unmark([t.t, t.w, s.name].concat(t.notes || []).join(' ') +
             ' jca junior court assistant').toLowerCase(),
        href: href, num: ''
      });
      (t.blocks || []).forEach(function (b, i) {
        searchIndex.push({
          kind: 'jca', id: 'jca-' + t.id + '-' + i, no: '', title: b.h, sub: s.short + ' \u00b7 ' + t.t,
          near: b.h.toLowerCase(),
          hay: unmark(b.h + ' ' + (b.note || '') + ' ' +
                b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
          href: href, num: ''
        });
      });
      (t.pairs || []).forEach(function (c, i) {
        searchIndex.push({
          kind: 'jca', id: 'jcmp-' + t.id + '-' + i, no: '', title: c.k,
          sub: s.short + ' \u00b7 confused pair', near: c.k.toLowerCase(),
          hay: unmark(c.k + ' ' + (c.note || '') + ' ' +
                c.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
          href: href, num: ''
        });
      });
    });
  });
  ((jcaSec.r && jcaSec.r.orders) || []).forEach(function (o) {
    searchIndex.push({
      kind: 'sc rules', id: 'order-' + o[0], no: 'Order ' + o[0], title: o[1],
      sub: 'Supreme Court Rules, 2013 \u00b7 ' + o[2],
      near: ('order ' + o[0] + ' ' + o[1]).toLowerCase(),
      hay: ('order ' + o[0] + ' ' + o[1] + ' supreme court rules 2013 jca').toLowerCase(),
      href: '#/jca/r/scr-orders', num: ''
    });
  });

  /* Geography, topic then table, so that a feature named in one row - "Zoji
     La", "karewas", "Mawsynram", "regur" - reaches the table it sits in
     rather than only the topic that contains it. */
  (GEO.topics || []).forEach(function (t) {
    var href = '#/geography/topic/' + encodeURIComponent(t.id);
    var all = t.blocks.map(function (b) {
      return b.h + ' ' + b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ');
    }).join(' ');
    searchIndex.push({
      kind: 'geography', id: 'geo-' + t.id, no: '', title: t.n, sub: t.w,
      near: (t.n + ' ' + t.w + ' ' + (t.intro || '')).toLowerCase(),
      hay: (t.n + ' ' + t.w + ' ' + (t.intro || '') + ' ' + all).toLowerCase(),
      href: href, num: ''
    });
    t.blocks.forEach(function (b, i) {
      searchIndex.push({
        kind: 'geography', id: 'geo-' + t.id + '-' + i, no: '', title: b.h, sub: t.n,
        near: b.h.toLowerCase(),
        hay: (b.h + ' ' + (b.note || '') + ' ' +
              b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
        href: href, num: ''
      });
    });
  });
  (GEO.confusions || []).forEach(function (c, i) {
    searchIndex.push({
      kind: 'geography', id: 'gcmp-' + i, no: '', title: c.k,
      sub: 'Geography \u00b7 confused pair', near: c.k.toLowerCase(),
      hay: (c.k + ' ' + (c.note || '') + ' ' +
            c.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
      href: '#/geography/confusions', num: ''
    });
  });

  /* Every Congress session, by year, by place and by president — those are
     the three ways a question can name the same thing, so all three have to
     reach the same page. */
  CONG_SESSIONS.forEach(function (s) {
    searchIndex.push({
      kind: 'congress', id: s.id, no: String(s.y).replace(/^.*?(\d{4}).*$/, '$1'),
      title: s.place + ' · ' + s.pres,
      sub: 'Congress session' + (s.tag ? ' · ' + s.tag : ''),
      near: (s.place + ' ' + s.pres + ' ' + s.y + ' congress session').toLowerCase(),
      hay: (s.place + ' ' + s.pres + ' ' + s.y + ' congress session inc ' +
            (s.tag || '') + ' ' + s.why).toLowerCase(),
      href: '#/history/session/' + encodeURIComponent(s.id), num: ''
    });
  });

  (CONG.firsts || []).concat(CONG.confusions || []).forEach(function (b, i) {
    var rows = b.rows || [];
    searchIndex.push({
      kind: 'congress', id: 'cg-' + i, no: '', title: b.h || b.k,
      sub: 'Congress sessions' + (b.k ? ' · confused pair' : ''),
      near: (b.h || b.k).toLowerCase(),
      hay: ((b.h || b.k) + ' congress ' + (b.note || '') + ' ' +
            rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
      href: '#/history/congress/' + (b.k ? 'confusions' : 'firsts'), num: ''
    });
  });

  /* Every Governor, Governor-General and Viceroy, with his policies in the
     haystack so that "Ilbert Bill" or "Doctrine of Lapse" finds the man. */
  rajAll.forEach(function (p) {
    searchIndex.push({
      kind: 'viceroy', id: p.id, no: String(p.from), title: p.n, sub: p.t,
      near: (p.n + ' ' + p.t).toLowerCase(),
      hay: (p.n + ' ' + p.t + ' ' + rajYears(p) + ' ' + p.w + ' ' + (p.note || '') + ' ' +
            (p.pol || []).map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
      href: '#/history/ruler/' + encodeURIComponent(p.id), num: ''
    });
  });

  (function () {
    var view = { offices: 'offices', facts: 'drill' };
    Object.keys(view).forEach(function (key) {
      (RAJ[key] || []).forEach(function (b, i) {
        searchIndex.push({
          kind: 'viceroy', id: key + '-' + i, no: '', title: b.h,
          sub: 'Governors-General and Viceroys',
          near: b.h.toLowerCase(),
          hay: (b.h + ' viceroy governor general ' + (b.note || '') + ' ' +
                b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
          href: '#/history/raj/' + view[key], num: ''
        });
      });
    });
    (RAJ.confusions || []).forEach(function (c, i) {
      searchIndex.push({
        kind: 'viceroy', id: 'rcmp-' + i, no: '', title: c.k,
        sub: 'Viceroys · confused pair', near: c.k.toLowerCase(),
        hay: (c.k + ' viceroy governor general ' + (c.note || '') + ' ' +
              c.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
        href: '#/history/raj/confusions', num: ''
      });
    });
  })();

  /* The treaties, table by table, so "Sugauli" or "Gulab Singh" reaches the
     table it sits in rather than only the section. */
  (function () {
    var view = { main: '', wars: 'wars', post: 'after', drill: 'drill' };
    Object.keys(view).forEach(function (key) {
      (TRT[key] || []).forEach(function (b, i) {
        searchIndex.push({
          kind: 'treaty', id: key + '-' + i, no: '', title: b.h, sub: 'Treaties',
          near: (b.h + ' treaty treaties').toLowerCase(),
          hay: (b.h + ' treaty treaties ' + (b.note || '') + ' ' +
                b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
          href: '#/history/treaties' + (view[key] ? '/' + view[key] : ''), num: ''
        });
      });
    });
    (TRT.confusions || []).forEach(function (c, i) {
      searchIndex.push({
        kind: 'treaty', id: 'cmp-' + i, no: '', title: c.k,
        sub: 'Treaties \u00b7 confused pair', near: c.k.toLowerCase(),
        hay: (c.k + ' treaty ' + (c.note || '') + ' ' +
              c.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
        href: '#/history/treaties/confusions', num: ''
      });
    });
  })();

  /* The article map and the courts index. These are indexed so that a
     SUBJECT reaches its article number - the reverse of what the article
     entries above do, and the whole point of the map. */
  (function () {
    var view = { framework: 'map', groups: 'map', courts: 'courts',
                 centrestate: 'centre-state' };
    Object.keys(view).forEach(function (key) {
      (AMAP[key] || []).forEach(function (b, i) {
        searchIndex.push({
          kind: 'article map', id: key + '-' + i, no: '', title: b.h,
          sub: key === 'courts' ? 'The courts, article by article'
             : key === 'centrestate' ? 'Centre and State' : 'The article map',
          /* "centre state" without the hyphen is how it gets typed, and the
             hyphenated form in the headings does not match it, so the whole
             topic was unreachable by its own name. */
          near: (b.h + (key === 'centrestate'
            ? ' centre state centre-state center state union state relations federalism seventh schedule'
            : '')).toLowerCase(),
          hay: (b.h + ' ' + (b.note || '') + ' ' +
                (key === 'centrestate' ? 'centre state centre-state center state relations federalism ' : '') +
                b.rows.map(function (r) { return r[0] + ' ' + r[1]; }).join(' ')).toLowerCase(),
          href: '#/high-yield/' + view[key], num: ''
        });
      });
    });
  })();

  /* Advanced Maths, indexed three ways so that the box reaches the right
     page whatever the reader types. A chapter name reaches the sheet. A
     GROUP name ("the x + 1/x family", "alternate segment theorem") reaches
     the sheet too, because that is where the formula is printed. And a
     formula's own PROMPT is in the haystack, so searching "median" or
     "frustum" or "componendo" lands on the chapter holding it rather than
     on nothing. */
  (MATH.chapters || []).forEach(function (c) {
    var href = '#/maths/chapter/' + encodeURIComponent(c.id);
    var all = c.blocks.map(function (b) {
      return b.h + ' ' + b.rows.map(function (r) {
        return r.p + ' ' + r.f + ' ' + r.d;
      }).join(' ');
    }).join(' ');
    searchIndex.push({
      kind: 'maths', id: c.id, no: '', title: c.n, sub: c.w,
      near: (c.n + ' ' + c.w + ' ' + (c.intro || '')).toLowerCase(),
      hay: (c.n + ' ' + (c.short || '') + ' ' + c.w + ' ' + (c.intro || '') + ' ' +
            (c.band === 'arith' ? 'arithmetic ' : 'advance maths ') + all).toLowerCase(),
      href: href, num: ''
    });
    c.blocks.forEach(function (b, i) {
      searchIndex.push({
        kind: 'maths', id: c.id + '-' + i, no: '', title: b.h, sub: c.n,
        near: b.h.toLowerCase(),
        hay: (b.h + ' ' + (b.note || '') + ' ' + b.rows.map(function (r) {
          return r.p + ' ' + r.f + ' ' + r.d;
        }).join(' ')).toLowerCase(),
        href: href, num: ''
      });
    });
    /* The drill is a page in its own right and has to be findable by name,
       since "algebra drill" is a thing a reader types. */
    searchIndex.push({
      kind: 'maths', id: c.id + '-drill', no: '', title: c.n + ' \u2014 recall drill',
      sub: 'Formula recall, one prompt at a time',
      near: (c.n + ' recall drill practice formulas').toLowerCase(),
      hay: (c.n + ' recall drill flashcard test myself formulas hidden ' + c.w).toLowerCase(),
      href: '#/maths/recall/' + encodeURIComponent(c.id), num: ''
    });
    if (mathQcount(c.id)) {
      searchIndex.push({
        kind: 'maths', id: c.id + '-mcq', no: '', title: c.n + ' \u2014 practice questions',
        sub: mathQcount(c.id) + ' questions with worked solutions',
        near: (c.n + ' practice questions mcq').toLowerCase(),
        hay: (c.n + ' practice questions mcq options solutions ' +
              (MATHQ[c.id] || []).map(function (q) { return q.q; }).join(' ')).toLowerCase(),
        href: '#/maths/practice/' + encodeURIComponent(c.id), num: ''
      });
    }
  });

  SCHEDULES.forEach(function (s) {
    var extra = '';
    if (s.items) extra = s.items.map(function (e) { return e.t; }).join(' ');
    if (s.lists) Object.keys(s.lists).forEach(function (k) {
      extra += ' ' + k + ' ' + s.lists[k].map(function (e) { return e.t; }).join(' ');
    });
    /* A reader types "schedule 7" or "7th schedule" far more often than
       "seventh schedule", and the digit appears nowhere in the Schedule's own
       name, so without these aliases the commonest query for this page misses
       it entirely. The List names go into `near` as well as `hay` so that
       "union list" ranks the Seventh Schedule near the article that creates
       it rather than fifty entries below. */
    var listNames = s.lists ? Object.keys(s.lists).join(' ') : '';
    var alias = 'schedule ' + s.n + ' ' + ordinal(s.n) + ' schedule schedule ' + ordinal(s.n);
    searchIndex.push({
      kind: 'schedule', id: s.n, no: ORD[s.n], title: s.name + ' — ' + s.sub,
      sub: s.stat, near: (s.sub + ' ' + listNames + ' ' + alias + ' ' + s.p).toLowerCase(),
      hay: (s.name + ' ' + alias + ' ' + s.sub + ' ' + s.p + ' ' + extra).toLowerCase(),
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
      /* The page that IS the query beats a table that merely starts with it:
         "akbar" is the emperor, before "Akbar's nine jewels". */
      if (t === q) score += 150;
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

/* ==========================================================================
   THE SIDE COLUMN

   Every page used to end where its own content ended, and on a wide screen
   that left a third of the window empty. Worse, the things a reader wants
   NEXT were all somewhere else on the site: the Viceroy who was in office the
   year of the event they are reading about, the other sessions held in the
   same city, the pair this article gets mixed up with, the tier the exam
   layer puts it in. Each of those was two or three taps and a page of
   choosing away.

   So every study page now carries a column beside it. Nothing in it is a new
   fact — it is the facts the site already holds, crossed against each other:
   a year looked up against the roll of administrators, a term looked up
   against the timeline, an article looked up against the article map. A year
   is the join between three sections that were previously unaware of one
   another.

   On a screen too narrow for a second column the cards drop below the page
   and stay useful — all but the contents list, which is only worth having
   while the page is still ahead of you.
   ========================================================================== */

var HY_ART = {};
(HIGHYIELD.articles || []).forEach(function (x) { HY_ART[x.a] = x; });

/* ------------------------------------------------------------ the cards */

function sCard(lbl, inner, note) {
  return '<section class="scard"><h2 class="slbl">' + esc(lbl) + '</h2>' + inner +
    (note ? '<p class="snote">' + esc(note) + '</p>' : '') + '</section>';
}

/* A list of links. k is the marker on the left — a year, a number, a range. */
function sLinks(lbl, items, note, cap) {
  items = (items || []).filter(Boolean);
  if (!items.length) return '';
  var lim = cap || 7;
  if (items.length > lim) {
    var hidden = items.length - lim;
    items = items.slice(0, lim);
    note = (note ? note + ' ' : '') + 'And ' + hidden + ' more.';
  }
  return sCard(lbl, '<ul class="slist">' + items.map(function (x) {
    return '<li><a href="' + x.href + '"' + (x.on ? ' aria-current="true"' : '') + '>' +
      (x.k ? '<span class="sk">' + esc(x.k) + '</span>' : '') +
      '<span class="sb">' + esc(x.t) + '</span>' +
      (x.d ? '<span class="sd">' + esc(x.d) + '</span>' : '') +
      '</a></li>';
  }).join('') + '</ul>', note);
}

/* Key and value, the shape the rest of the site already uses for a fact. A
   third element in a row makes the value a link. */
function sFacts(lbl, rows, note) {
  rows = (rows || []).filter(function (r) { return r && r[1]; });
  if (!rows.length) return '';
  return sCard(lbl, '<dl class="sfacts">' + rows.map(function (r) {
    var v = esc(r[1]);
    if (r[2]) v = '<a href="' + r[2] + '">' + v + '</a>';
    return '<dt>' + esc(r[0]) + '</dt><dd>' + v + '</dd>';
  }).join('') + '</dl>', note);
}

/* Already-marked-up prose, so this one does NOT escape its argument. */
function sText(lbl, html, note) {
  if (!html) return '';
  return sCard(lbl, '<div class="stext">' + html + '</div>', note);
}

/* --------------------------------------------------------- the joins

   Four small functions carry most of the new content. Each takes a year or a
   span of years and asks a different section of the site what it had then. */

function yr4(v) {
  var m = /(\d{4})/.exec(String(v));
  return m ? +m[1] : null;
}

function rulersIn(from, to) {
  if (!from) return [];
  if (!to) to = from;
  return rajAll.filter(function (p) {
    return !p.acting && p.from <= to && p.to >= from;
  });
}

function eventsIn(from, to, skip) {
  return (HIST.timeline || []).filter(function (e) {
    return e.y >= from && e.y <= to && e.id !== skip;
  }).sort(function (a, b) { return a.y - b.y; });
}

function actsIn(from, to, skip) {
  return (HIST.acts || []).filter(function (a) {
    return a.y >= from && a.y <= to && a.id !== skip;
  });
}

function sessionsIn(from, to, skip) {
  return CONG_SESSIONS.filter(function (s) {
    var y = yr4(s.y);
    return y && y >= from && y <= to && s.id !== skip && !s.none;
  });
}

/* The cards those four produce, so that a page only has to say which it
   wants. */
function rulerCard(from, to, lbl) {
  var hits = rulersIn(from, to);
  if (!hits.length) return '';
  return sLinks(lbl || 'Who was in charge', hits.map(function (p) {
    return { href: '#/history/ruler/' + encodeURIComponent(p.id),
             k: rajYears(p), t: p.n, d: p.t };
  }), null, 4);
}

function eventCard(from, to, skip, lbl) {
  return sLinks(lbl || 'Happening then', eventsIn(from, to, skip).map(function (e) {
    return { href: '#/history/event/' + encodeURIComponent(e.id), k: String(e.y), t: e.t };
  }), null, 6);
}

function actCard(from, to, skip, lbl) {
  return sLinks(lbl || 'The law then', actsIn(from, to, skip).map(function (a) {
    return { href: '#/history/act/' + encodeURIComponent(a.id), k: String(a.y), t: a.n };
  }), null, 6);
}

function sessionCard(from, to, skip, lbl) {
  return sLinks(lbl || 'Congress then', sessionsIn(from, to, skip).map(function (s) {
    return { href: '#/history/session/' + encodeURIComponent(s.id),
             k: String(yr4(s.y)), t: s.place, d: s.pres };
  }), null, 6);
}

/* A name is matched in full wherever it can be — "Subhas Chandra Bose" inside
   a president's name. Where only the surname is given, as in the leaders of a
   movement ("Tilak, Lajpat Rai"), the surname is accepted ONLY if no other
   person on the site shares it; otherwise Ananda Mohan Bose's session would
   be offered on Subhas Chandra Bose's page. The list of ambiguous surnames is
   counted off the data rather than written down, so it cannot go stale. */
var SURNAMES = {};
(HIST.people || []).forEach(function (p) {
  var w = String(p.n).trim().split(/\s+/);
  var last = w[w.length - 1].replace(/[^A-Za-z-]/g, '');
  SURNAMES[last.toLowerCase()] = (SURNAMES[last.toLowerCase()] || 0) + 1;
});

function flat(s) { return String(s || '').replace(/\./g, '').replace(/\s+/g, ' ').toLowerCase(); }

function namesIn(hay, person) {
  var h = flat(hay);
  if (h.indexOf(flat(person.n)) >= 0) return true;
  var w = String(person.n).trim().split(/\s+/);
  var last = w[w.length - 1].replace(/[^A-Za-z-]/g, '');
  if (last.length < 4 || SURNAMES[last.toLowerCase()] !== 1) return false;
  return new RegExp('(^|[^a-z])' + last.toLowerCase() + '([^a-z]|$)').test(h);
}

/* ---------------------------------------------------- the Constitution */

function sideArticle(n) {
  var a = byArt[n];
  if (!a) return [];
  var out = [], p = partOf[a.a], hy = HY_ART[a.a];

  if (hy) {
    var tier = null;
    TIERS.forEach(function (t) { if (t.n === hy.t) tier = t; });
    out.push(sCard('Why it gets asked',
      (tier ? '<div class="schip"><span class="chip tier t' + hy.t + '">' +
        esc(tier.label) + '</span></div>' : '') +
      '<div class="stext">' + prose(hy.w, 1) + '</div>',
      tier ? tier.sub : null));
  }

  /* The pairs this article is mixed up with. Matched on the pair's own title
     and on the first cell of each of its rows, so that "32 vs 226" is found
     from either side. */
  var conf = (HIGHYIELD.confusions || []).filter(function (c) {
    if (tokenIn(c.k, a.a)) return true;
    return (c.rows || []).some(function (r) { return tokenIn(r[0], a.a); });
  });
  if (conf.length) {
    out.push(sLinks('Easy to confuse with', conf.map(function (c) {
      return { href: '#/high-yield/confusions', t: c.k };
    }), 'Set side by side on the confused-pairs page.', 4));
  }

  /* Its neighbours in the article map — the Constitution indexed by subject
     rather than by number. */
  var grp = null;
  (AMAP.groups || []).forEach(function (g) {
    if (grp) return;
    if ((g.rows || []).some(function (r) { return rowCovers(r[0], a.a); })) grp = g;
  });
  if (grp) {
    var sibs = [];
    grp.rows.forEach(function (r) {
      var one = /^Article\s+(\d{1,3}[A-Z]*)$/.exec(String(r[0]).trim());
      if (!one || one[1] === a.a || !byArt[one[1]]) return;
      sibs.push({ href: '#/a/' + encodeURIComponent(one[1]), k: one[1], t: shorten(r[1], 74) });
    });
    out.push(sLinks('Read with these', sibs, 'From "' + grp.h + '" in the article map.', 6));
  }

  var inPart = p.arts.indexOf(a) + 1;
  out.push(sFacts('Where it sits', [
    ['Part', p.num + ' · ' + titleCase(p.title), '#/part/' + encodeURIComponent(p.num)],
    a.c ? ['Chapter', a.c] : null,
    ['In this Part', inPart + ' of ' + p.arts.length],
    ['Amendments', a.am && a.am.length ? a.am.length + ' so far' : 'never amended'],
    ['Cases here', casesByArt[a.a] ? casesByArt[a.a].length + ' on this site' : 'none on this site']
  ]));
  return out;
}

/* "32" inside "32 vs 226 — the two writ jurisdictions", but not inside "132". */
function tokenIn(hay, n) {
  return new RegExp('(^|[^0-9A-Za-z])' + n + '([^0-9A-Za-z]|$)').test(String(hay || ''));
}

/* An article-map row is labelled either "Article 21" or "Articles 5 to 11". */
function rowCovers(label, n) {
  label = String(label || '');
  if (tokenIn(label, n)) return true;
  var m = /^Articles?\s+(\d{1,3})\s*(?:to|–|-)\s*(\d{1,3})\b/.exec(label);
  if (!m) return false;
  var base = parseInt(n, 10);
  return !isNaN(base) && /^\d+$/.test(n) && base >= +m[1] && base <= +m[2];
}

function sidePart(num) {
  var p = null, i = -1;
  parts.forEach(function (x, j) { if (x.num === num) { p = x; i = j; } });
  if (!p) return [];
  var live = p.arts.filter(function (x) { return !x.om; }).length;
  var amd = p.arts.filter(function (x) { return x.am && x.am.length; }).length;
  var cas = p.arts.filter(function (x) { return casesByArt[x.a]; }).length;
  var hyn = p.arts.filter(function (x) { return HY_ART[x.a]; }).length;
  return [
    sFacts('This Part', [
      ['Articles', p.arts[0].a + ' to ' + p.arts[p.arts.length - 1].a],
      ['In force', live + ' of ' + p.arts.length],
      ['Amended at least once', String(amd)],
      ['With a case on this site', String(cas)],
      ['In the exam layer', hyn + ' articles'],
      ['Part', p.num + ' of ' + parts.length]
    ]),
    sLinks('The Parts either side', [
      parts[i - 1] ? { href: '#/part/' + encodeURIComponent(parts[i - 1].num),
        k: parts[i - 1].num, t: titleCase(parts[i - 1].title) } : null,
      parts[i + 1] ? { href: '#/part/' + encodeURIComponent(parts[i + 1].num),
        k: parts[i + 1].num, t: titleCase(parts[i + 1].title) } : null
    ])
  ];
}

function sideAmendment(no) {
  var m = amdByNo[+no];
  if (!m) return [];
  var hy = null;
  (HIGHYIELD.amendments || []).forEach(function (x) { if (x.n === m.n) hy = x; });
  var near = [];
  for (var i = m.n - 3; i <= m.n + 3; i++) {
    if (i === m.n || !amdByNo[i]) continue;
    near.push({ href: '#/amendment/' + i, k: ordinal(i), t: shorten(amdByNo[i].s, 70) });
  }
  return [
    hy ? sText('Why it gets asked', prose(hy.w, 1)) : '',
    sFacts('This amendment', [
      ['Passed', String(m.y)],
      m.wef ? ['In force from', niceDate(m.wef)] : null,
      ['Articles changed', m.arts.length ? String(m.arts.length) : 'none traced'],
      ['Number', ordinal(m.n) + ' of ' + AMENDMENTS.length]
    ]),
    sLinks('The ones around it', near, null, 6)
  ];
}

function sideSchedule(no) {
  var cur = +no;
  return [sLinks('The twelve Schedules', SCHEDULES.map(function (s) {
    return { href: '#/schedule/' + s.n, k: String(s.n), t: s.sub,
             on: s.n === cur };
  }), null, 12)];
}

function sideCase(id) {
  var c = caseById[id];
  if (!c) return [];
  var hy = null;
  (HIGHYIELD.cases || []).forEach(function (x) { if (x.id === c.id) hy = x; });
  var out = [];
  if (hy) out.push(sText('Why it gets asked', prose(hy.w, 1)));
  out.push(sFacts('This judgment', [
    ['Decided', String(c.y)],
    c.c ? ['Citation', c.c] : null,
    c.b ? ['Bench', c.b + ' judges'] : null,
    c.court ? ['Court', c.court] : null,
    c.ov ? ['Standing', c.ov.indexOf('overruled ') === 0 ? 'Overruled an earlier case' : 'Overruled'] : null
  ]));
  /* The other judgments on the same article. A case page shows the articles
     it turns on; this is the way back out of them. */
  var first = (c.a || [])[0];
  if (first && casesByArt[first]) {
    out.push(sLinks('Also on article ' + first,
      casesByArt[first].filter(function (x) { return x.id !== c.id; })
        .sort(function (x, y) { return x.y - y.y; }).map(function (x) {
          return { href: '#/case/' + encodeURIComponent(x.id), k: String(x.y), t: x.n };
        }), null, 6));
  }
  return out;
}

/* ------------------------------------------------------------- history */

function sideHistory(seg) {
  var k = seg[0] || '';

  if (k === 'event') {
    var ev = histEvent[seg[1]];
    if (!ev) return [];
    var era = histEra[ev.e] || {};
    return [
      rulerCard(ev.y, ev.y, 'Who was in charge'),
      eventCard(ev.y, ev.y, ev.id, 'The same year'),
      actCard(ev.y, ev.y, null, 'Passed that year'),
      sessionCard(ev.y, ev.y, null, 'Congress that year'),
      era.n ? sFacts('The era', [
        ['Era', era.n, '#/history'],
        ['Spans', era.from + ' to ' + era.to],
        ['Events in it', String(eventsIn(era.from, era.to).filter(function (x) {
          return x.e === era.id; }).length)]
      ], era.w) : ''
    ];
  }

  if (k === 'act') {
    var ac = histAct[seg[1]];
    if (!ac) return [];
    var all = HIST.acts || [], i = all.indexOf(ac);
    return [
      rulerCard(ac.y, ac.y, 'Who was in charge'),
      eventCard(ac.y, ac.y, null, 'The same year'),
      sLinks('The Acts either side', [
        all[i - 1] ? { href: '#/history/act/' + encodeURIComponent(all[i - 1].id),
          k: String(all[i - 1].y), t: all[i - 1].n } : null,
        all[i + 1] ? { href: '#/history/act/' + encodeURIComponent(all[i + 1].id),
          k: String(all[i + 1].y), t: all[i + 1].n } : null
      ]),
      sFacts('This Act', [
        ['Passed', String(ac.y)],
        ['Provisions here', String((ac.k || []).length)],
        ['Act', (i + 1) + ' of ' + all.length + ' on this site']
      ])
    ];
  }

  if (k === 'person') {
    var pe = histPerson[seg[1]];
    if (!pe) return [];
    var sess = CONG_SESSIONS.filter(function (s) {
      return !s.none && namesIn(s.pres, pe);
    });
    var movs = (HIST.movements || []).filter(function (m) { return namesIn(m.lead, pe); });
    var evs = (HIST.timeline || []).filter(function (e) {
      return namesIn(e.t, pe) || namesIn(e.w, pe);
    }).sort(function (a, b) { return a.y - b.y; });
    return [
      sFacts('In short', [['Lived', pe.y], ['Known as', pe.r]]),
      sLinks('Presided over Congress', sess.map(function (s) {
        return { href: '#/history/session/' + encodeURIComponent(s.id),
                 k: String(yr4(s.y)), t: s.place, d: s.pres };
      }), null, 6),
      sLinks('Led or helped lead', movs.map(function (m) {
        return { href: '#/history/movement/' + encodeURIComponent(m.id),
                 k: String(m.from), t: m.n };
      }), null, 5),
      sLinks('Turns up in', evs.map(function (e) {
        return { href: '#/history/event/' + encodeURIComponent(e.id), k: String(e.y), t: e.t };
      }), 'Events on the timeline that name them.', 6)
    ];
  }

  if (k === 'movement') {
    var mv = histMove[seg[1]];
    if (!mv) return [];
    return [
      rulerCard(mv.from, mv.to, 'Who was in charge'),
      eventCard(mv.from, mv.to, null, 'Inside these years'),
      sessionCard(mv.from, mv.to, null, 'Congress sessions in it'),
      sFacts('This movement', [
        ['Ran', mv.from + ' to ' + mv.to],
        ['Years', (mv.to - mv.from + 1) + ''],
        ['Led by', shorten(mv.lead, 90)]
      ])
    ];
  }

  if (k === 'ruler') {
    var ru = rajById[seg[1]];
    if (!ru) return [];
    return [
      sFacts('The office', [
        ['Title', ru.t],
        ['Term', rajYears(ru)],
        ['Office', ru.grp, '#/history/raj'],
        ['The office ran', ru.grpYears],
        ['Policies listed', String((ru.pol || []).length)]
      ]),
      actCard(ru.from, ru.to, null, 'Acts in his time'),
      sessionCard(ru.from, ru.to, null, 'Congress in his time'),
      eventCard(ru.from, ru.to, null, 'On the timeline')
    ];
  }

  if (k === 'session') {
    var se = congById[seg[1]];
    if (!se) return [];
    var y = yr4(se.y);
    var same = CONG_SESSIONS.filter(function (s) {
      return s.id !== se.id && !s.none && samePlace(s.place, se.place);
    });
    return [
      rulerCard(y, y, 'Who was Viceroy then'),
      sLinks('Also at ' + shorten(bareplace(se.place), 28), same.map(function (s) {
        return { href: '#/history/session/' + encodeURIComponent(s.id),
                 k: String(yr4(s.y)), t: s.pres };
      }), 'Sessions held in the same city.', 6),
      eventCard(y, y, null, 'The same year'),
      sFacts('This session', [
        ['Year', String(se.y)],
        se.n ? ['Number', ordinal(se.n) + ' session'] : null,
        ['Sessions here', CONG_SESSIONS.filter(function (s) { return !s.none; }).length + ' in all']
      ])
    ];
  }

  if (k === 'raj') {
    return [sFacts('The roll', RAJ_GROUPS.map(function (g) {
      var list = RAJ[g[0]] || [];
      return list.length ? [g[1], list.length + ' · ' + g[2]] : null;
    }).concat([['Asked in exams', rajAll.filter(function (p) { return p.hy; }).length +
      ' of ' + rajAll.length]]))];
  }

  if (k === 'congress') {
    /* Which cities the Congress kept going back to — counted off the roll of
       sessions, not written down anywhere. */
    var by = {};
    CONG_SESSIONS.forEach(function (s) {
      if (s.none) return;
      var p = bareplace(s.place);
      by[p] = (by[p] || 0) + 1;
    });
    var top = Object.keys(by).sort(function (a, b) { return by[b] - by[a] || a.localeCompare(b); });
    return [
      sFacts('The venues used most', top.slice(0, 6).map(function (p) {
        return [p, by[p] + ' sessions'];
      }), 'Counted off the list of sessions.'),
      sFacts('The roll', [
        ['Sessions', String(CONG_SESSIONS.filter(function (s) { return !s.none; }).length)],
        ['Cities used', String(top.length)],
        ['Asked in exams', String(CONG_SESSIONS.filter(function (s) { return s.hy; }).length)],
        ['Years with no session', String(CONG_SESSIONS.filter(function (s) { return s.none; }).length)]
      ])
    ];
  }

  if (k === '') {
    return [sFacts('The timeline', (HIST.eras || []).map(function (e) {
      return [e.n, (HIST.timeline || []).filter(function (x) { return x.e === e.id; }).length +
        ' events · ' + e.from + '–' + e.to];
    }), 'The whole span is ' + ((HIST.timeline || []).length) + ' events.')];
  }

  if (k === 'acts') {
    var acts = HIST.acts || [];
    return [sFacts('The Acts', [
      ['How many', String(acts.length)],
      ['First', acts.length ? acts[0].y + ' · ' + acts[0].n : ''],
      ['Last', acts.length ? acts[acts.length - 1].y + ' · ' + acts[acts.length - 1].n : ''],
      ['Spanning', acts.length ? (acts[acts.length - 1].y - acts[0].y) + ' years' : '']
    ])];
  }

  if (k === 'people') {
    var pp = HIST.people || [];
    var roles = {};
    pp.forEach(function (x) { roles[x.r] = (roles[x.r] || 0) + 1; });
    return [sFacts('The people', Object.keys(roles).sort(function (a, b) {
      return roles[b] - roles[a] || a.localeCompare(b);
    }).slice(0, 8).map(function (r) { return [r, String(roles[r])]; }),
      pp.length + ' people in all.')];
  }

  if (k === 'movements') {
    var mm = HIST.movements || [];
    return [sFacts('The movements', mm.map(function (m) {
      return [m.n, m.from + '–' + m.to];
    }))];
  }

  return [];
}

/* "Bombay (Gowalia Tank)" and "Bombay" are the same city for counting. */
function bareplace(s) {
  return String(s || '').replace(/\s*\(.*$/, '').replace(/\s*[,–-].*$/, '').trim();
}
function samePlace(a, b) { return bareplace(a).toLowerCase() === bareplace(b).toLowerCase(); }

/* ------------------------------------- economy, static GK and biology */

function sideEcon(seg) {
  var k = seg[0] || '';
  if (k === 'plan') {
    var p = econPlanById[seg[1]];
    if (!p) return [];
    return [
      sFacts('This plan', [
        ['Ran', p.from + ' to ' + p.to],
        p.model ? ['Model', p.model] : null,
        p.kind === 'plan' ? ['Target', p.tgt + '% a year'] : null,
        p.kind === 'plan' && p.act !== null && p.act !== undefined
          ? ['Achieved', p.act + '% a year'] : null,
        ['Theme', shorten(p.theme, 60)]
      ]),
      sLinks('Every plan, in order', (ECON.plans || []).map(function (x) {
        return { href: '#/economy/plan/' + encodeURIComponent(x.id),
                 k: String(x.from), t: x.n, on: x.id === p.id };
      }), null, 20)
    ];
  }
  if (k === 'topic') {
    var t = econTopicById[seg[1]];
    return [sLinks('The standing topics', (ECON.topics || []).map(function (x) {
      return { href: '#/economy/topic/' + encodeURIComponent(x.id), t: x.n,
               on: t && x.id === t.id };
    }), null, 12)];
  }
  if (k === '') {
    var plans = (ECON.plans || []).filter(function (x) { return x.kind === 'plan'; });
    return [sFacts('The planning years', [
      ['Five Year Plans', String(plans.length)],
      ['First', plans.length ? String(plans[0].from) : ''],
      ['Last', plans.length ? String(plans[plans.length - 1].to) : ''],
      ['Standing topics', String((ECON.topics || []).length)],
      ['Confused pairs', String((ECON.confusions || []).length)]
    ])];
  }
  return [];
}

function sideGk(seg) {
  if ((seg[0] || '') === '') {
    var packs = GKD.packs || [];
    return [sFacts('Static GK', [
      ['Packs', String(packs.length)],
      ['Facts', String(packs.reduce(function (a, p) { return a + gkRows(p); }, 0))],
      ['Asked often', packs.filter(function (p) { return p.hy; }).length + ' packs'],
      ['Confused pairs', String((GKD.confusions || []).length)]
    ])];
  }
  var cur = gkPackById[seg[1]];
  if (!cur) return [];
  return [
    sFacts('This pack', [
      ['Tables', String((cur.blocks || []).length)],
      ['Facts', String(gkRows(cur))],
      ['Asked often', cur.hy ? 'yes' : 'less so']
    ]),
    sLinks('The other packs', (GKD.packs || []).map(function (p) {
      return { href: '#/gk/pack/' + encodeURIComponent(p.id), t: p.n, on: p.id === cur.id };
    }), null, 20)
  ];
}

function sideBio(seg) {
  if ((seg[0] || '') === '') {
    var tops = BIO.topics || [];
    return [sFacts('Biology', [
      ['Topics', String(tops.length)],
      ['Facts', String(tops.reduce(function (a, t) { return a + bioRows(t); }, 0))],
      ['Confused pairs', String((BIO.confusions || []).length)]
    ])];
  }
  var cur = bioTopicById[seg[1]];
  if (!cur) return [];
  return [
    sFacts('This topic', [
      ['Tables', String((cur.blocks || []).length)],
      ['Facts', String(bioRows(cur))]
    ]),
    sLinks('The other topics', (BIO.topics || []).map(function (t) {
      return { href: '#/biology/topic/' + encodeURIComponent(t.id), t: t.n, on: t.id === cur.id };
    }), null, 12)
  ];
}

/* ------------------------ the five subjects added since

   Ancient and Medieval History, Advanced Maths, the new criminal laws,
   Geography and the daily sets. Each one is a list of topics with one page
   per topic, so each gets the same two things: where this page sits, and
   every other page in the section with this one marked. */

function sideEarly(seg) {
  var k = seg[0] || '';
  var topics = EARLY.topics || [], emps = EARLY.emperors || [];

  if (k === 'topic') {
    var t = earlyTopicById[seg[1]];
    return [
      t ? sFacts('This topic', [
        ['Tables', String((t.blocks || []).length)],
        ['Facts', String(earlyRows(t))],
        ['Asked often', t.hy ? 'yes' : 'less so']
      ]) : '',
      sLinks('The other topics', topics.map(function (x) {
        return { href: '#/early/topic/' + encodeURIComponent(x.id), t: x.n,
                 on: t && x.id === t.id };
      }), null, 12)
    ];
  }

  if (k === 'emperor') {
    var e = emperorById[seg[1]];
    if (!e) return [];
    return [
      sFacts('The reign', [
        ['Reigned', e.from === e.to ? String(e.from) : e.from + '–' + e.to],
        e.full ? ['In full', e.full] : null,
        e.born ? ['Born', e.born] : null,
        e.died ? ['Died', e.died] : null,
        e.tomb ? ['Tomb', e.tomb] : null
      ]),
      /* Only the great Mughals and Sher Shah have pages. The later ones are
         a line each on the emperors page, so linking them here would have
         offered fifteen doors with nothing behind them. */
      sLinks('The emperors, in order', emps.filter(function (x) {
        return x.kind !== 'later';
      }).map(function (x) {
        return { href: '#/early/emperor/' + encodeURIComponent(x.id),
                 k: String(x.from), t: x.n, on: x.id === e.id };
      }), 'The later Mughals are a line each on the emperors page.', 20)
    ];
  }

  if (k === '') {
    return [sFacts('Ancient and Medieval', [
      ['Topics', String(topics.length)],
      ['Facts', String(topics.reduce(function (a, t) { return a + earlyRows(t); }, 0))],
      ['Mughal rulers', String(emps.length)],
      ['Confused pairs', String((EARLY.confusions || []).length)]
    ])];
  }
  return [];
}

function sideMath(seg) {
  var k = seg[0] || '', chaps = MATH.chapters || [];
  var c = mathChap[seg[1]];

  /* Every chapter has three pages - the formulas, the recall drill and the
     questions - and the one thing a reader always wants from any of them is
     one of the other two. */
  function trio(ch, now) {
    return sLinks('This chapter', [
      { href: '#/maths/chapter/' + encodeURIComponent(ch.id), t: 'The formulas',
        d: mathRows(ch) + ' rows', on: now === 'chapter' },
      { href: '#/maths/recall/' + encodeURIComponent(ch.id), t: 'The recall drill',
        d: 'Cover the answer and say it', on: now === 'recall' },
      mathQcount(ch.id) ? { href: '#/maths/practice/' + encodeURIComponent(ch.id),
        t: 'The questions', d: mathQcount(ch.id) + ' asked in SSC papers',
        on: now === 'practice' } : null
    ], null, 3);
  }

  if (c && (k === 'chapter' || k === 'recall' || k === 'practice')) {
    var band = null;
    MATH_BANDS.forEach(function (b) { if (b[0] === c.band) band = b; });
    return [
      trio(c, k),
      sFacts('Where it sits', [
        band ? ['Band', band[1]] : null,
        ['Formulas here', String(mathRows(c))],
        ['Questions here', String(mathQcount(c.id))],
        ['Asked often', c.hy ? 'yes' : 'less so']
      ]),
      sLinks('Every chapter', chaps.map(function (x) {
        return { href: '#/maths/chapter/' + encodeURIComponent(x.id), t: x.n,
                 d: mathRows(x) + ' rows · ' + mathQcount(x.id) + ' questions',
                 on: x.id === c.id };
      }), null, 20)
    ];
  }

  if (k === '' || k === 'review') {
    return [sFacts('Advanced Maths', [
      ['Chapters', String(chaps.length)],
      ['Formulas', String(mathAllRows())],
      ['Questions', String(chaps.reduce(function (a, x) { return a + mathQcount(x.id); }, 0))]
    ])];
  }
  return [];
}

function sideLaw(seg) {
  var topics = LAW.topics || [];
  if ((seg[0] || '') === 'topic') {
    var t = lawTopicById[seg[1]];
    return [
      t ? sFacts('This topic', [
        ['Tables', String((t.blocks || []).length)],
        ['Provisions', String(lawRows(t))],
        ['Asked often', t.hy ? 'yes' : 'less so']
      ]) : '',
      sLinks('The other topics', topics.map(function (x) {
        return { href: '#/laws/topic/' + encodeURIComponent(x.id), t: x.n,
                 on: t && x.id === t.id };
      }), null, 12)
    ];
  }
  if ((seg[0] || '') === '') {
    return [sFacts('The new criminal laws', [
      ['Acts', '3'],
      ['Topics', String(topics.length)],
      ['Provisions', String(lawAllRows())],
      ['Confused pairs', String((LAW.confusions || []).length)],
      ['In force from', '1 July 2024']
    ])];
  }
  return [];
}

function sideGeo(seg) {
  var topics = GEO.topics || [];
  if ((seg[0] || '') === 'topic') {
    var t = geoTopicById[seg[1]];
    return [
      t ? sFacts('This topic', [
        ['Tables', String((t.blocks || []).length)],
        ['Facts', String(geoRows(t))],
        ['Asked often', t.hy ? 'yes' : 'less so']
      ]) : '',
      sLinks('The other topics', topics.map(function (x) {
        return { href: '#/geography/topic/' + encodeURIComponent(x.id), t: x.n,
                 on: t && x.id === t.id };
      }), null, 12)
    ];
  }
  if ((seg[0] || '') === '') {
    return [sFacts('Geography', [
      ['Topics', String(topics.length)],
      ['Facts', String(topics.reduce(function (a, t) { return a + geoRows(t); }, 0))],
      ['Confused pairs', String((GEO.confusions || []).length)]
    ])];
  }
  return [];
}

function sideDaily(seg) {
  var cur = dailyById[seg[0] || ''];
  return [
    cur ? sFacts('This set', [
      ['Date', cur.d + ' ' + cur.y],
      ['Parts', String((cur.parts || []).length)]
    ]) : '',
    sLinks('The sets', DAILY_SETS.map(function (d) {
      return { href: '#/daily/' + encodeURIComponent(d.id), k: String(d.y),
               t: d.d, on: cur && d.id === cur.id };
    }), null, 20)
  ];
}

/* ----------------------------------------------------- one for every page

   Whatever else a page has beside it, it gets a way on to the rest of its
   subject: the topics that come after this one in the subject's own list,
   wrapping round at the end. Nearest-first rather than always the same six,
   so that walking a subject does not keep offering the same way out. */

function sideElsewhere(seg, anchor) {
  var sub = subjectById(barKey(seg));
  if (!sub || !sub.topics) return [];
  var topics = sub.topics(), here = '#/' + seg.join('/');
  if (topics.length < 3) return [];
  /* Where in the subject's list of topics this page counts as being. The
     page's own address first; failing that the topic it hangs under, so that
     one Viceroy is placed with the Viceroys and one article with its Part. */
  var at = -1;
  /* An exact address first, from any of the three. Starting with "the page
     begins with this topic's address" instead would put every page in Modern
     History at the top of the list, because the first topic there is the
     timeline at #/history and every other address in the subject begins with
     those characters. Prefix matching is the last resort, and then it is the
     LONGEST prefix that wins, for the same reason. */
  [here, anchor, parentOf(here)].forEach(function (k) {
    if (at >= 0 || !k) return;
    topics.forEach(function (t, i) { if (at < 0 && k === t.href) at = i; });
  });
  if (at < 0) {
    topics.forEach(function (t, i) {
      if (here.indexOf(t.href + '/') !== 0) return;
      if (at < 0 || t.href.length > topics[at].href.length) at = i;
    });
  }
  var out = [];
  for (var i = 1; i <= topics.length && out.length < 5; i++) {
    var t = topics[(Math.max(at, 0) + i) % topics.length];
    if (t.href === here) continue;
    out.push({ href: t.href, t: t.t, d: t.n || '' });
  }
  return [sLinks('Elsewhere in ' + (sub.short || sub.name), out,
    'Every topic is on the ' + (sub.short || sub.name) + ' page.', 5)];
}

/* ------------------------------------------------------------ assembling */

/* The hubs - the index, a subject's own page, About - are lists of ways on
   already, and do not get a second one. */
function sideSkip(seg) {
  var k = seg[0] || '';
  return k === '' || k === 'hub' || k === 'topics' || k === 'index' ||
         k === 'contents' || k === 's' || k === 'about' ||
         (k === 'jca' && (seg[1] === 'practice' || seg[1] === 'mock'));
}

function sideFor(seg) {
  var k = seg[0] || '', out = [];
  if (k === 'a') out = sideArticle(seg[1]).concat(jcaArticleCards(seg[1]));
  else if (k === 'part') out = sidePart(seg[1]);
  else if (k === 'amendment') out = sideAmendment(seg[1]);
  else if (k === 'schedule') out = sideSchedule(seg[1]);
  else if (k === 'case') out = sideCase(seg[1]);
  else if (k === 'history') out = sideHistory(seg.slice(1));
  else if (k === 'economy') out = sideEcon(seg.slice(1));
  else if (k === 'gk') out = sideGk(seg.slice(1));
  else if (k === 'biology') out = sideBio(seg.slice(1));
  else if (k === 'early') out = sideEarly(seg.slice(1));
  else if (k === 'maths') out = sideMath(seg.slice(1));
  else if (k === 'laws') out = sideLaw(seg.slice(1));
  else if (k === 'geography') out = sideGeo(seg.slice(1));
  else if (k === 'daily') out = sideDaily(seg.slice(1));
  else if (k === 'jca') out = sideJca(seg.slice(1));

  /* An article belongs to its Part, which IS one of the Constitution's
     topics, so say so rather than leaving it to be guessed. */
  var anchor = null;
  if (k === 'a' && byArt[seg[1]]) {
    anchor = '#/part/' + encodeURIComponent(partOf[byArt[seg[1]].a].num);
  }
  return out.concat(sideElsewhere(seg, anchor));
}

/* The contents of the page itself, read off the headings that are there
   rather than from a list each page has to keep up to date. */
function sideContents(flow) {
  var hs = flow.querySelectorAll('.block > h3, .partband h2, .chapband');
  if (hs.length < 3) return '';
  var items = [];
  for (var i = 0; i < hs.length; i++) {
    var el = hs[i], t = (el.textContent || '').trim();
    if (!t) continue;
    if (!el.id) el.id = 'sx' + i;
    var band = el.className === 'chapband' || el.parentNode.className === 'partband';
    items.push('<li' + (band ? ' class="band"' : '') + '>' +
      '<button type="button" onclick="document.getElementById(\'' + el.id +
      '\').scrollIntoView()">' + esc(shorten(t, 54)) + '</button></li>');
  }
  if (items.length < 3) return '';
  return '<section class="scard onpage"><h2 class="slbl">On this page</h2>' +
    '<ol class="sjump">' + items.join('') + '</ol></section>';
}

/* Done to the finished page rather than inside forty page functions: every
   one of them builds a .artpage and that is all this needs to know. */
function layoutSide(seg) {
  if (sideSkip(seg)) return;
  var page = main.querySelector('.artpage');
  if (!page) return;

  var flow = document.createElement('div');
  flow.className = 'mainflow';
  while (page.firstChild) flow.appendChild(page.firstChild);
  page.appendChild(flow);

  var cards;
  try {
    cards = sideFor(seg);
  } catch (e) {
    cards = [];   /* a page is worth more than its margin */
  }
  cards = [sideContents(flow)].concat(cards).filter(Boolean);
  if (!cards.length) return;

  var aside = document.createElement('aside');
  aside.className = 'side';
  aside.setAttribute('aria-label', 'Alongside this page');
  aside.innerHTML = cards.join('');
  page.appendChild(aside);
  page.classList.add('withside');
}

/* ------------------------------------------------------------------ router */

/* Every page here is the same document, so the browser's scroll restoration
   puts a reload part-way down whatever page loads next — which is rarely the
   page the position came from. route() sets the scroll itself. */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

function route() {
  var h = location.hash.replace(/^#\/?/, '');
  var seg = h.split('/').map(decodeURIComponent);
  recordStep(location.hash || '#/');
  lastHash = location.hash || '#/';
  closeResults();
  jcaStopTick();
  jcaQuiz = null;
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
    case 's':          return subjectPage(seg[1]);
    case 'index':      return indexPage();
    case 'contents':   return indexPage();
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
  /* A result for the page you are already on changes no hash, so nothing
     would happen; a daily set's tables all share their part's address. */
  var hit = e.target.closest('.res');
  if (hit) {
    qBox.value = ''; closeResults();
    if (hit.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
  }
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
      '<p class="note">Once installed it opens in its own window, keeps every subject on ' +
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
                buildIndex: buildIndex, runSearch: runSearch,
                parentOf: parentOf, barKey: barKey };

})();

