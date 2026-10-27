/* The Rule Book - app.js
   The law paper of the Supreme Court JCA 2026 objective test.
   Hash-routed, no framework, no build step, no network calls. It shares the
   Article Machine's stylesheet and fonts, reads that site's official text of
   the Constitution, and takes everything else from the three data files
   loaded before it. */

(function () {
'use strict';

var ARTICLES = window.ARTICLES || [];
var PLAIN    = window.PLAIN    || {};
var CASES    = window.CASES    || [];
var JCA      = window.JCA      || {};

var main   = document.getElementById('main');
var qBox   = document.getElementById('q');
var resBox = document.getElementById('results');
var tabBar = document.getElementById('tabs');

/* The objective test date given in the advertisement of 30 September 2026,
   which marks it tentative. Month is 0-based. */
var EXAM = { y: 2026, m: 10, d: 20, label: '20 November 2026' };

/* The mock is the law block of the real paper at the real pace: 35 of its
   100 questions in the same 15/10/10 split, at the paper's 54 seconds a
   question (90 minutes for 100), rounded up to 32 minutes, with the paper's
   quarter-mark deduction for a wrong answer. */
var MOCK = { split: [['c', 15], ['r', 10], ['s', 10]], minutes: 32, neg: 0.25 };

/* ------------------------------------------------------------------ data */

var SECTIONS = [JCA.judiciary, JCA.scr, JCA.osr].filter(Boolean);
var SEC = {};
SECTIONS.forEach(function (s) { SEC[s.id] = s; });

var byArt = {};
ARTICLES.forEach(function (a) { byArt[a.a] = a; });

var caseById = {}, casesByArt = {};
CASES.forEach(function (c) {
  caseById[c.id] = c;
  (c.a || []).forEach(function (n) { (casesByArt[n] = casesByArt[n] || []).push(c); });
});

/* The judiciary articles in reading order, and the topic each sits under, so
   an article page knows its neighbours and its way back up. */
var ART_ORDER = [], artTopic = {};
if (SEC.c) SEC.c.topics.forEach(function (t) {
  (t.arts || []).forEach(function (n) {
    if (!artTopic[n] && byArt[n]) { artTopic[n] = t; ART_ORDER.push(n); }
  });
});

function topicOf(secId, tid) {
  var s = SEC[secId], hit = null;
  if (s) s.topics.forEach(function (t) { if (t.id === tid) hit = t; });
  return hit;
}

/* A question is stored by a hash of its own wording, not by its position,
   so adding a question to a bank does not move anyone's marks onto the
   wrong one. Rewording a question resets its marks, which is right: it is a
   different question. */
function hash(s) {
  var h = 5381;
  for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

var ALLQ = [], QBY = {}, qByArt = {};
SECTIONS.forEach(function (s) {
  s.qs.forEach(function (q) {
    var item = { id: s.id + '.' + hash(q.q), sec: s, q: q };
    ALLQ.push(item);
    QBY[item.id] = item;
    /* "Art. 124(4)", "Arts. 32, 226", "Art. 125; Art. 112(3)(d)" */
    String(q.r || '').split(';').forEach(function (part) {
      if (!/^\s*Arts?\./.test(part)) return;
      (part.replace(/\([^)]*\)/g, '').match(/\d{1,3}[A-Z]{0,2}/g) || []).forEach(function (n) {
        (qByArt[n] = qByArt[n] || []).push(item.id);
      });
    });
  });
});

function qsOf(secId, tid) {
  return ALLQ.filter(function (x) {
    return x.sec.id === secId && (!tid || x.q.t === tid);
  }).map(function (x) { return x.id; });
}

/* --------------------------------------------------------------- storage

   What you answer is kept on this device and nowhere else. A browser with
   site data blocked throws on the first touch of localStorage, so every read
   falls back to a copy held in memory for the visit and every write fails
   quietly: the pages work the same, they just forget when the tab closes. */

var K_WRONG = 'rb.wrong.v1';      /* { qid: 1 } */
var K_SEEN  = 'rb.seen.v1';       /* { qid: [right, wrong] } */
var K_MOCKS = 'rb.mocks.v1';      /* [ summary, newest first ] */
var K_LIVE  = 'rb.mock.live.v1';  /* the test in progress */
var K_LAST  = 'rb.mock.last.v1';  /* the last finished test, in full */

var MEM = {};
function load(key, dflt) {
  try {
    var raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* fall through to memory */ }
  return MEM.hasOwnProperty(key) ? MEM[key] : dflt;
}
function save(key, val) {
  MEM[key] = val;
  try {
    if (val === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(val));
  } catch (e) { /* fine */ }
}

function markAnswer(qid, ok) {
  var seen = load(K_SEEN, {}), rec = seen[qid] || [0, 0];
  rec[ok ? 0 : 1]++;
  seen[qid] = rec;
  save(K_SEEN, seen);
  var wrong = load(K_WRONG, {});
  if (ok) delete wrong[qid]; else wrong[qid] = 1;
  save(K_WRONG, wrong);
}

function wrongIds() {
  var w = load(K_WRONG, {});
  return Object.keys(w).filter(function (id) { return QBY[id]; });
}

/* How far a set of questions has got: how many tried, and the share of
   attempts that were right. */
function progress(ids) {
  var seen = load(K_SEEN, {}), tried = 0, r = 0, w = 0;
  ids.forEach(function (id) {
    var s = seen[id];
    if (s) { tried++; r += s[0]; w += s[1]; }
  });
  return { tried: tried, total: ids.length, pct: (r + w) ? Math.round(100 * r / (r + w)) : null };
}

/* --------------------------------------------------------------- helpers */

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function hiMark(html) {
  return String(html).replace(/==([\s\S]+?)==/g, '<mark class="hi">$1</mark>');
}
function unmark(s) { return String(s == null ? '' : s).replace(/==/g, ''); }

function shorten(s, n) {
  s = unmark(s);
  return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s;
}

function plural(n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); }

/* Article numbers inside a sentence become links to the article page. Only
   the word "Article(s)" triggers it, so "Order XV, Rule 5" and a bare year
   are left alone. */
function linkArts(s) {
  return esc(s).replace(/\b([Aa]rticles?\s+)(\d{1,3}(?:[A-Z]{1,2})?)/g, function (all, word, num) {
    return byArt[num] ? '<a href="#/a/' + encodeURIComponent(num) + '">' + word + num + '</a>' : all;
  });
}

/* Emphasis inside a sentence, as on the Article Machine: a short list of the
   terms worth catching by eye, marked once each and at most three to a
   paragraph, and every figure in its own face. */
var KEYTERMS = ['special leave', 'court of record', 'complete justice', 'curative petition',
  'review', 'collegium', 'habeas corpus', 'mandamus', 'certiorari', 'prohibition',
  'quo warranto', 'Advocate-on-Record', 'Senior Advocate', 'original jurisdiction',
  'advisory', 'superintendence', 'probation', 'censure', 'dismissal', 'removal',
  'compulsory retirement', 'reservation', 'Registrar', 'Judge in Chambers',
  'basic structure', 'contempt', 'quorum', 'ad hoc', 'circulation', 'Consolidated Fund'];
var MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';
var EMPH_RE = (function () {
  var terms = KEYTERMS.slice().sort(function (a, b) { return b.length - a.length; })
    .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/-/g, '[-‑]'); });
  return new RegExp('\\b(' + terms.join('|') + ')\\b' +
    '|(\\b\\d{1,2}\\s(?:' + MONTHS + ')\\s\\d{4}\\b)' +
    '|(\\b\\d[\\d,]*(?:\\.\\d+)?(?:st|nd|rd|th)?\\b(?:\\sper\\scent)?)', 'gi');
})();

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
      var whole = arguments[arguments.length - 1], at = arguments[arguments.length - 2];
      if (term) {
        var k = term.toLowerCase();
        if (used >= cap || seen[k]) return m;
        seen[k] = 1; used++;
        return '<b class="kw">' + term + '</b>';
      }
      /* "(4)" is a clause, not a fact; "(1980)" is a case year, and is. */
      if (/^\d{1,2}$/.test(m) && whole.charAt(at - 1) === '(' && whole.charAt(at + m.length) === ')') return m;
      return '<em class="num">' + m + '</em>';
    });
  }
  return parts.join('');
}

function prose(s, cap) { return emph(linkArts(s), cap); }

/* The official text, broken at its numbered clauses; square brackets mark
   the words an amendment put there. Same rules as the Article Machine. */
function fmtOfficial(t) {
  var h = esc(t);
  h = h.replace(/([.;:\]])\s*(\[?)(\(\d{1,2}[A-Z]?\))\s*/g, '$1\n\n$2$3 ');
  h = h.replace(/^\s*(\[?)(\(\d{1,2}[A-Z]?\))\s*/, '$1$2 ');
  h = h.replace(/(\(\d{1,2}[A-Z]?\)) \]/g, '$1]');
  h = h.replace(/\s*(Provided\b)/g, '\n\n$1');
  h = h.replace(/\s*(Explanation\b)/g, '\n\n$1');
  h = h.replace(/\[([^\[\]]{1,600}?)\]/g, '<span class="ins">[$1]</span>');
  return h.trim();
}

function pageH1(t, sub) {
  return '<h1 class="rbh1">' + esc(t) + '</h1>' + (sub ? '<p class="sub">' + esc(sub) + '</p>' : '');
}

function fig(n, label) {
  return '<div class="fig"><b>' + n + '</b><span>' + esc(label) + '</span></div>';
}

function chkChip() { return '<span class="chip chk">check the bare text</span>'; }

/* The JCA notes: the page reduced to what to write down, with the answer
   inside each line highlighted. */
function notesBlock(notes, title) {
  if (!notes || !notes.length) return '';
  return '<aside class="ssc"><div class="ssch"><span class="sscl">JCA notes</span>' +
    (title ? '<span class="ssct">' + esc(title) + '</span>' : '') + '</div><ol>' +
    notes.map(function (n) { return '<li>' + hiMark(prose(n, 2)) + '</li>'; }).join('') +
    '</ol></aside>';
}

function factsBlock(g) {
  return '<div class="block"><h3>' + esc(g.h) + (g.chk ? ' ' + chkChip() : '') + '</h3>' +
    (g.note ? '<p class="foot before">' + hiMark(linkArts(g.note)) + '</p>' : '') +
    '<dl class="facts">' + g.rows.map(function (r) {
      return '<dt>' + hiMark(linkArts(r[0])) + '</dt><dd>' + hiMark(linkArts(r[1])) + '</dd>';
    }).join('') + '</dl></div>';
}

function cmpBlock(c) {
  return '<div class="cmp"><div class="cmph">' + esc(c.k) + '</div>' +
    c.rows.map(function (r) {
      return '<div class="cmpr"><div class="cmpk">' + esc(r[0]) + '</div>' +
             '<div class="cmpv">' + hiMark(prose(r[1], 2)) + '</div></div>';
    }).join('') +
    (c.note ? '<div class="cmpn">' + hiMark(prose(c.note, 2)) + '</div>' : '') + '</div>';
}

/* A case from the Article Machine's own list, linked to its page there. */
function caseCard(c) {
  return '<a class="casecard" href="../#/case/' + encodeURIComponent(c.id) + '">' +
    '<b>' + esc(c.n) + '</b><div class="meta">' + esc(c.y) + (c.c ? ' · ' + esc(c.c) : '') +
    (c.b ? ' · ' + c.b + ' judges' : '') + '</div><p>' + esc(c.h) + '</p></a>';
}

function plainOf(n) { var p = PLAIN[n]; return p && p.p ? p : null; }

function artChips(a) {
  var out = [];
  if (a.om) out.push('<span class="chip gone">Repealed</span>');
  else if (a.sd && /^124[ABC]$/.test(a.a)) out.push('<span class="chip struck">Struck down, 2015</span>');
  else out.push('<span class="chip live">In force</span>');
  if (casesByArt[a.a]) out.push('<span class="chip case">' + plural(casesByArt[a.a].length, 'case') + '</span>');
  if (qByArt[a.a]) out.push('<span class="chip amd">' + plural(qByArt[a.a].length, 'question') + '</span>');
  return out.join('');
}

function artRow(n) {
  var a = byArt[n];
  if (!a) return '';
  var p = plainOf(n), teaser = p ? shorten(p.p, 150) : '';
  return '<a class="arow' + (a.om ? ' gone' : '') + '" href="#/a/' + encodeURIComponent(n) + '">' +
    '<span class="no">' + esc(n) + '</span>' +
    '<span class="tx"><b>' + esc(a.h || '(no heading)') + '</b>' +
    (teaser ? '<i>' + esc(teaser) + '</i>' : '') + '</span>' +
    '<span class="tag">' + artChips(a) + '</span></a>';
}

/* ------------------------------------------------------------- rendering */

function segOf() {
  return location.hash.replace(/^#\/?/, '').split('/').map(function (x) {
    try { return decodeURIComponent(x); } catch (e) { return x; }
  });
}

function jumpToTop() {
  var root = document.documentElement, prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  if (root.scrollTop) root.scrollTop = 0;
  root.style.scrollBehavior = prev;
}

/* An instant scroll that leaves the element just below the sticky header. */
function scrollToEl(el) {
  var root = document.documentElement, prev = root.style.scrollBehavior;
  var head = document.querySelector('header.top'), off = head ? head.getBoundingClientRect().height : 0;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - off - 12));
  root.style.scrollBehavior = prev;
}

function render(html) {
  main.innerHTML = html;
  syncBack();
  jumpToTop();
  if (main.focus) main.focus({ preventScroll: true });
}

function shell(body) { return '<div class="wrap artpage">' + body + '</div>'; }

function crumb(items) {
  return '<div class="crumb">' + items.map(function (x) {
    return x[1] ? '<a href="' + x[1] + '">' + esc(x[0]) + '</a>' : esc(x[0]);
  }).join(' → ') + '</div>';
}

var TABS = [
  ['#/', 'Home', ['']],
  ['#/c', 'Constitution', ['c', 'a']],
  ['#/r', 'SC Rules 2013', ['r']],
  ['#/s', 'O&S Rules 1961', ['s']],
  ['#/practice', 'Practice', ['practice']],
  ['#/mock', 'Mock test', ['mock']],
  ['#/review', 'Review', ['review']],
  ['#/about', 'About', ['about']]
];

function renderNav(seg) {
  tabBar.innerHTML = TABS.map(function (t) {
    var on = t[2].indexOf(seg[0] || '') >= 0;
    return '<a href="' + t[0] + '"' + (on ? ' aria-current="page"' : '') + '>' + esc(t[1]) + '</a>';
  }).join('') + '<a class="hublink" href="../">The Article Machine</a>';
}

function syncHead() {
  var head = document.querySelector('header.top');
  if (head) document.documentElement.style.setProperty('--headh',
    Math.round(head.getBoundingClientRect().height) + 'px');
}
(function () {
  var head = document.querySelector('header.top');
  if (head && window.ResizeObserver) new ResizeObserver(syncHead).observe(head);
})();

/* --------------------------------------------------------------- back

   An installed app has no browser back button, so the site carries its own.
   It walks the trail of pages actually visited, and when there is none it
   goes up to the page's section instead of leaving the site. */

var trail = [], lastHash = null, backJump = false;

function recordStep(h) {
  if (backJump) { backJump = false; return; }
  if (trail.length && trail[trail.length - 1] === h) { trail.pop(); return; }
  if (lastHash !== null && lastHash !== h) {
    trail.push(lastHash);
    if (trail.length > 80) trail.shift();
  }
}

function parentOf(h) {
  var seg = h.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (!seg.length) return '#/';
  if (seg[0] === 'a') return artTopic[seg[1]] ? '#/c/' + artTopic[seg[1]].id : '#/c';
  if (seg.length > 1) return '#/' + seg[0];
  return '#/';
}

function goBack() {
  if (trail.length) { backJump = true; location.hash = trail.pop(); return; }
  var up = parentOf(location.hash);
  if (up !== location.hash) backJump = true;
  location.hash = up;
}

(function () {
  var b = document.getElementById('backfab');
  if (b) b.addEventListener('click', goBack);
})();

function syncBack() {
  var b = document.getElementById('backfab');
  if (b) b.hidden = !location.hash.replace(/^#\/?/, '') || !!main.querySelector('.rbmock');
}

/* ------------------------------------------------------------ the clock */

function daysLeft() {
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var exam = new Date(EXAM.y, EXAM.m, EXAM.d);
  return Math.round((exam - today) / 86400000);
}

function countdown() {
  var n = daysLeft();
  var big = n > 1 ? n + ' days' : n === 1 ? '1 day' : n === 0 ? 'Today' : 'Done';
  var line = n > 0 ? 'to the objective test on ' + EXAM.label + ' (tentative in the advertisement)'
    : n === 0 ? 'The objective test is today. Read the JCA notes, not new material.'
    : 'The objective test date (' + EXAM.label + ') has passed.';
  return '<div class="rbcount"><b>' + esc(big) + '</b><span>' + esc(line) + '</span></div>';
}

/* ------------------------------------------------------------------ home */

function secStats(s) {
  var ids = qsOf(s.id), p = progress(ids);
  return { ids: ids, p: p,
    line: s.marks + ' marks · ' + plural(s.topics.length, 'topic') + ' · ' + plural(ids.length, 'question') };
}

function progressLine(p) {
  if (!p.tried) return 'Not started';
  return p.tried + ' of ' + p.total + ' tried' + (p.pct === null ? '' : ' · ' + p.pct + ' per cent right');
}

function barHtml(p) {
  var w = p.total ? Math.round(100 * p.tried / p.total) : 0;
  return '<div class="rbbar"><span style="width:' + w + '%"></span></div>';
}

function liveBanner() {
  var live = load(K_LIVE, null);
  if (!live || !live.ids) return '';
  var left = Math.max(0, live.start + live.dur - Date.now());
  return '<div class="mresume"><b>A mock test is running</b><span>' +
    (left ? Math.ceil(left / 60000) + ' minutes left on the clock, which keeps running while you are away.'
          : 'Its time is up; open it to see the score.') +
    '</span><a class="pill big" href="#/mock">' + (left ? 'Back to the test' : 'See the score') + '</a></div>';
}

function homePage() {
  var total = ALLQ.length, wrong = wrongIds().length;
  var nTopics = SECTIONS.reduce(function (a, s) { return a + s.topics.length; }, 0);

  var h = '<div class="wrap hero">' +
    '<div class="eyebrow">Supreme Court JCA 2026 · objective test</div>' +
    '<h1>The law paper, all 35 marks of it.</h1>' +
    '<p class="lede">Judiciary provisions of the Constitution (15 questions), the Supreme Court ' +
    'Rules, 2013 (10) and the Supreme Court Officers and Servants Rules, 1961 (10): the notes, ' +
    'the tables, the official text of every article, and ' + total + ' questions with the reason ' +
    'for every answer.</p>' + countdown() +
    '<div class="figs">' + fig(total, 'questions') + fig(nTopics, 'topics') +
      fig(ART_ORDER.length, 'articles') + fig((SEC.r && SEC.r.orders || []).length, 'Orders mapped') +
    '</div></div>';

  h += '<div class="wrap">' + liveBanner() +
    '<div class="label stack-lg">Start here</div><div class="mmodes rbmodes">' +
      '<a class="mmode" href="#/mock"><b>Mock test</b><i>35 questions · ' + MOCK.minutes + ' minutes · minus ' + MOCK.neg + '</i></a>' +
      '<a class="mmode" href="#/practice/mixed"><b>Twenty mixed</b><i>From all three sections, least-tried first</i></a>' +
      '<a class="mmode" href="' + (wrong ? '#/practice/wrong' : '#/r/scr-orders') + '"><b>' +
        (wrong ? 'Your ' + plural(wrong, 'wrong answer') : 'Every Order, in one table') + '</b><i>' +
        (wrong ? 'Until each one is right' : 'The 57 Orders of the 2013 Rules') + '</i></a>' +
    '</div>';

  h += '<div class="label stack-lg">The three sections</div><div class="grid">' +
    SECTIONS.map(function (s) {
      var st = secStats(s);
      return '<a class="pcard" href="#/' + s.id + '"><div class="pn">' + s.marks + ' of the 100 questions</div>' +
        '<div class="pt">' + esc(s.name) + '</div><div class="rbdesc">' + esc(shorten(s.lede, 140)) + '</div>' + barHtml(st.p) +
        '<div class="pr">' + esc(st.line) + '</div>' +
        '<div class="pr">' + esc(progressLine(st.p)) + '</div></a>';
    }).join('') + '</div>';

  h += '<div class="block"><h3>The paper, and where this site fits</h3>' +
    '<p class="foot before">The objective test as the 2026 advertisement is reported: 100 questions, ' +
    '90 minutes, a quarter mark off for a wrong answer, 50 to qualify. The law block is the part ' +
    'with a fixed text behind it, so it repays revision more than any other.</p>' +
    '<dl class="facts rbpaper">' + [
      ['General English, with comprehension', '20', 0],
      ['General Aptitude', '15', 0],
      ['General Knowledge', '15', 0],
      ['Judiciary provisions in the Constitution', '15', 'c'],
      ['Supreme Court Rules, 2013', '10', 'r'],
      ['SC Officers and Servants Rules, 1961', '10', 's'],
      ['Computer Knowledge', '15', 0]
    ].map(function (r) {
      return '<dt>' + (r[2] ? '<a href="#/' + r[2] + '">' + esc(r[0]) + '</a>' : '<span class="rbout">' + esc(r[0]) + '</span>') +
        '</dt><dd>' + r[1] + ' questions' + (r[2] ? ' · <b class="rbin">on this site</b>' : ' · not covered here') + '</dd>';
    }).join('') + '</dl></div>';

  h += planBlock() + '</div>';
  render(h);
}

/* A suggested order for the days that are left, worked out from the clock.
   It is a suggestion and says so: the point is that the rule books come
   first, because they are where marks are cheapest. */
function planBlock() {
  var n = daysLeft();
  if (n <= 0) return '';
  if (n < 4) {
    return '<div class="block"><h3>The last ' + plural(n, 'day') + '</h3><p class="plain">No new material now. ' +
      'Read the JCA notes of every topic, take one mock test, and clear the review list.</p></div>';
  }
  var a = Math.round(n * 0.4), b = Math.round(n * 0.35), c = n - a - b;
  return '<div class="block"><h3>A plan for the ' + plural(n, 'day') + ' left</h3>' +
    '<p class="foot before">A suggestion, not a rule. The two rule books come first because they are ' +
    'short, fixed, and new to most candidates.</p><dl class="facts">' +
    '<dt>Next ' + plural(a, 'day') + '</dt><dd>The SC Rules 2013 and the 1961 Rules: read each topic, then practise it until you score above 80 per cent.</dd>' +
    '<dt>Then ' + plural(b, 'day') + '</dt><dd>The Constitution topics, with the official text of every article you get wrong.</dd>' +
    '<dt>Last ' + plural(c, 'day') + '</dt><dd>A mock test every other day, and the review list on the days between.</dd>' +
    '</dl></div>';
}

/* --------------------------------------------------------------- sections */

function topicCard(s, t) {
  var ids = qsOf(s.id, t.id), p = progress(ids);
  return '<a class="topic" href="#/' + s.id + '/' + encodeURIComponent(t.id) + '"><b>' + esc(t.t) + '</b>' +
    '<i>' + esc(t.w) + '</i><em>' + plural(ids.length, 'question') +
    (p.tried ? ' · ' + p.tried + ' tried' + (p.pct === null ? '' : ', ' + p.pct + '% right') : '') + '</em></a>';
}

function sectionPage(s) {
  var st = secStats(s);
  var h = '<div class="pagehead"><div class="eyebrow">' + s.marks + ' of the 100 questions</div>' +
    '<h1>' + esc(s.name) + '</h1><p class="lede">' + esc(s.lede) + '</p>' +
    '<div class="stack"><a class="pill big" href="#/practice/' + s.id + '">Practise all ' + st.ids.length +
    ' questions</a> <a class="pill big" href="#/mock">Mock test</a>' +
    (s.id === 'r' ? ' <a class="pill big" href="#/r/scr-orders">Every Order, in one table</a>' : '') +
    '</div></div>';

  h += '<div class="label">Topics</div><div class="topics">' +
    s.topics.map(function (t) { return topicCard(s, t); }).join('') + '</div>';

  if (s.id === 'c') {
    s.topics.forEach(function (t) {
      if (!t.arts || !t.arts.length) return;
      h += '<div class="block"><h3><a class="rbh3a" href="#/c/' + t.id + '">' + esc(t.t) + '</a></h3>' +
        t.arts.map(artRow).join('') + '</div>';
    });
  }
  render(shell(h));
}

function ordersBlocks() {
  var orders = (SEC.r && SEC.r.orders) || [], groups = [], at = {};
  orders.forEach(function (o) {
    if (!at.hasOwnProperty(o[2])) { at[o[2]] = groups.length; groups.push({ g: o[2], rows: [] }); }
    groups[at[o[2]]].rows.push(o);
  });
  return groups.map(function (g) {
    var first = g.rows[0][0], last = g.rows[g.rows.length - 1][0];
    return '<div class="block"><h3>' + esc(g.g) + ' · ' +
      (first === last ? 'Order ' + first : 'Orders ' + first + ' to ' + last) + '</h3>' +
      '<dl class="facts rborders">' + g.rows.map(function (o) {
        return '<dt id="order-' + o[0] + '">Order ' + esc(o[0]) + '</dt><dd>' + esc(o[1]) + '</dd>';
      }).join('') + '</dl></div>';
  }).join('');
}

function topicPage(s, t) {
  var ids = qsOf(s.id, t.id), p = progress(ids);
  var h = crumb([[s.short, '#/' + s.id], [t.t]]) + pageH1(t.t, t.w);

  h += '<div class="stack-sm"><a class="pill big" href="#/practice/' + s.id + '/' + t.id + '">' +
    'Practise these ' + plural(ids.length, 'question') + '</a>' +
    (p.tried ? ' <span class="rbmeta">' + esc(progressLine(p)) + '</span>' : '') + '</div>';

  h += notesBlock(t.notes);

  if (t.special === 'orders') h += ordersBlocks();

  if (t.arts && t.arts.length) {
    h += '<div class="block"><h3>The articles</h3>' +
      '<p class="foot before">Each one opens with the plain-English note and the official text.</p>' +
      t.arts.map(artRow).join('') + '</div>';
  }

  (t.blocks || []).forEach(function (b) { h += factsBlock(b); });

  if (t.pairs && t.pairs.length) {
    h += '<div class="block"><h3>Confused pairs</h3>' + t.pairs.map(cmpBlock).join('') + '</div>';
  }

  var cs = (t.cases || []).map(function (id) { return caseById[id]; }).filter(Boolean);
  if (cs.length) {
    h += '<div class="block"><h3>The cases</h3><div class="caselist">' + cs.map(caseCard).join('') + '</div></div>';
  }

  var i = s.topics.indexOf(t), prev = s.topics[i - 1], next = s.topics[i + 1];
  h += '<div class="nextprev">' +
    (prev ? '<a href="#/' + s.id + '/' + prev.id + '"><span class="d">Previous</span><span class="t">' + esc(prev.t) + '</span></a>' : '') +
    (next ? '<a class="r" href="#/' + s.id + '/' + next.id + '"><span class="d">Next</span><span class="t">' + esc(next.t) + '</span></a>' : '') +
    '</div>';

  render(shell(h));
}

/* --------------------------------------------------------------- articles */

function articlePage(num) {
  var a = byArt[num];
  if (!a) return notFound('There is no Article ' + num + ' in the Constitution.');
  var t = artTopic[num], pl = plainOf(num);

  var h = crumb(t ? [['Constitution', '#/c'], [t.t, '#/c/' + t.id], ['Article ' + num]]
                  : [['Constitution', '#/c'], ['Article ' + num]]);

  h += '<div class="arthead"><div class="big">' + esc(a.a) + '</div><div class="ht">' +
    '<h1>' + esc(a.h || 'Repealed') + '</h1><div class="chips">' + artChips(a) + '</div></div></div>';

  if (pl) {
    h += '<div class="block"><h3>What it means</h3><p class="plain">' + prose(pl.p) + '</p>' +
      (pl.w ? '<p class="why">' + prose(pl.w) + '</p>' : '') + '</div>';
  }

  /* The official edition prints the 99th Amendment's words, with a footnote
     that the amendment was struck down; the reader needs to know which
     wording is the law. */
  if (a.t && /National Judicial Appointments Commission/.test(a.t)) {
    h += '<div class="mresume rbwarn"><b>Read this text with care</b><span>' +
      (/^124[ABC]$/.test(a.a)
        ? 'This article was inserted by the 99th Amendment (2014). The Supreme Court struck the amendment down on 16 October 2015, so it has no effect. The official edition still prints it.'
        : 'The words about the National Judicial Appointments Commission were put in by the 99th Amendment (2014), which the Supreme Court struck down on 16 October 2015. The wording from before 2014, with the Chief Justice of India and the collegium, is what operates.') +
      '</span></div>';
  }

  if (a.t) {
    h += '<div class="block"><h3>The official text</h3><p class="official">' + fmtOfficial(a.t) + '</p>' +
      '<p class="foot">Verbatim from <em>The Constitution of India [As on 1st May, 2024]</em>, read from ' +
      'the Article Machine. Square brackets mark words an amendment put there.</p></div>';
  }

  var qn = (qByArt[num] || []).length;
  h += '<div class="stack"><a class="pill big" href="../#/a/' + encodeURIComponent(num) + '">' +
    'Open it in the Article Machine</a>' +
    (qn ? ' <a class="pill big" href="#/practice/a/' + encodeURIComponent(num) + '">Practise its ' +
      plural(qn, 'question') + '</a>' : '') + '</div>';

  var cs = casesByArt[num];
  if (cs && cs.length) {
    h += '<div class="block"><h3>The cases that defined it</h3><div class="caselist">' +
      cs.slice().sort(function (x, y) { return x.y - y.y; }).map(caseCard).join('') + '</div></div>';
  }

  var i = ART_ORDER.indexOf(num);
  if (i >= 0) {
    var pv = ART_ORDER[i - 1], nx = ART_ORDER[i + 1];
    h += '<div class="nextprev">' +
      (pv ? '<a href="#/a/' + encodeURIComponent(pv) + '"><span class="d">Previous</span><span class="t">' +
        esc(pv) + ' · ' + esc(byArt[pv].h) + '</span></a>' : '') +
      (nx ? '<a class="r" href="#/a/' + encodeURIComponent(nx) + '"><span class="d">Next</span><span class="t">' +
        esc(nx) + ' · ' + esc(byArt[nx].h) + '</span></a>' : '') + '</div>';
  }
  render(shell(h));
}

/* --------------------------------------------------------------- practice

   One question at a time, the answer the moment you choose, and the reason
   for it. Every wrong option is a real confusion (65 for 62, the President
   for the Governor, Order XLVII for XLVIII), never filler. */

function shuffle(a) {
  for (var m = a.length - 1; m > 0; m--) {
    var k = Math.floor(Math.random() * (m + 1)), t = a[m];
    a[m] = a[k]; a[k] = t;
  }
  return a;
}

/* Least-tried first, shuffled within each level, so repeated sessions work
   through the whole bank rather than meeting the same favourites. */
function freshFirst(ids) {
  var seen = load(K_SEEN, {});
  return shuffle(ids.slice()).sort(function (x, y) {
    var a = seen[x] ? seen[x][0] + seen[x][1] : 0, b = seen[y] ? seen[y][0] + seen[y][1] : 0;
    return a - b;
  });
}

function practiceHub() {
  var wrong = wrongIds().length;
  var h = pageH1('Practice', ALLQ.length + ' questions in the paper\'s own shape, with the reason for every answer. ' +
    'What you get wrong goes on the review list until you get it right.');

  h += '<div class="mmodes rbmodes">' +
    '<a class="mmode" href="#/practice/mixed"><b>Twenty mixed</b><i>All three sections, least-tried first</i></a>' +
    '<a class="mmode" href="#/practice/wrong"><b>Only my wrong answers</b><i>' + plural(wrong, 'question') + ' waiting</i></a>' +
    '<a class="mmode" href="#/mock"><b>Mock test</b><i>35 questions, timed, negative marking</i></a></div>';

  SECTIONS.forEach(function (s) {
    var st = secStats(s);
    h += '<div class="hubsec"><div class="hubhead"><a href="#/practice/' + s.id + '">' + esc(s.name) + '</a>' +
      '<span>' + esc(st.line) + ' · ' + esc(progressLine(st.p)) + '</span></div><div class="topics">' +
      s.topics.map(function (t) {
        var ids = qsOf(s.id, t.id), p = progress(ids);
        if (!ids.length) return '';
        return '<a class="topic" href="#/practice/' + s.id + '/' + t.id + '"><b>' + esc(t.t) + '</b>' +
          '<em>' + plural(ids.length, 'question') + (p.tried ? ' · ' + p.tried + ' tried' +
          (p.pct === null ? '' : ', ' + p.pct + '% right') : '') + '</em></a>';
      }).join('') + '</div></div>';
  });
  render(shell(h));
}

var quiz = null;

function startQuiz(ids, title, sub, back) {
  if (!ids.length) {
    return render(shell(pageH1(title, '') + '<div class="empty"><b>Nothing to practise here</b>' +
      (location.hash === '#/practice/wrong'
        ? 'No wrong answers are waiting, or this browser is not keeping site data.'
        : 'This set has no questions yet.') +
      '<div class="stack"><a class="pill big" href="#/practice">Pick a set</a></div></div>'));
  }
  quiz = { ids: ids, i: 0, right: 0, wrong: [], answered: false, title: title, back: back, again: location.hash };
  render(shell((back ? crumb([[back[0], back[1]], ['Practice']]) : '') + pageH1(title, sub) + '<div id="mquiz"></div>'));
  drawQuiz();
}

/* The reference a question tests ("Order IV", "Art. 217(3)") is shown only
   once it has been answered: printed above the options it would answer half
   the "which Order" questions by itself. */
function qMeta(item, withRef) {
  var t = topicOf(item.sec.id, item.q.t);
  return '<div class="rbqmeta"><span>' + esc(item.sec.short) + '</span>' +
    (t ? '<a href="#/' + item.sec.id + '/' + t.id + '">' + esc(t.t) + '</a>' : '') +
    (withRef ? '<span>' + esc(item.q.r) + '</span>' : '') + '</div>';
}

function wrongCard(id, pick) {
  var item = QBY[id];
  if (!item) return '';
  var q = item.q;
  return '<div class="mwrong"><div class="mqq">' + esc(q.q) + '</div>' +
    (pick != null && pick !== q.a ? '<div class="mans rbyours">You chose ' + 'ABCD'.charAt(pick) + ' · ' + esc(q.o[pick]) + '</div>' : '') +
    '<div class="mans">' + 'ABCD'.charAt(q.a) + ' · ' + esc(q.o[q.a]) + '</div>' +
    '<div class="mqsol">' + hiMark(prose(q.s, 1)) + '</div>' + qMeta(item, true) + '</div>';
}

function drawQuiz() {
  var box = document.getElementById('mquiz');
  if (!box || !quiz) return;
  var z = quiz;

  if (z.i >= z.ids.length) {
    var pct = Math.round(100 * z.right / z.ids.length);
    box.innerHTML = '<div class="mdone"><b>' + z.right + ' right out of ' + z.ids.length + '</b><span>' +
      pct + ' per cent. ' + (z.wrong.length
        ? 'The ' + plural(z.wrong.length, 'one') + ' you missed ' + (z.wrong.length === 1 ? 'is' : 'are') +
          ' below, and on the review list until you get ' + (z.wrong.length === 1 ? 'it' : 'them') + ' right.'
        : 'Nothing missed. Try the mock test, against the clock.') + '</span>' +
      '<div class="stack"><button class="pill big" type="button" data-act="again">Run it again</button> ' +
      '<a class="pill big" href="#/review">The review list</a> ' +
      '<a class="pill big" href="#/practice">Another set</a></div></div>' +
      (z.wrong.length ? '<div class="block"><h3>What you missed</h3>' +
        z.wrong.map(function (x) { return wrongCard(x[0], x[1]); }).join('') + '</div>' : '');
    return;
  }

  var item = QBY[z.ids[z.i]], q = item.q;
  box.innerHTML =
    '<div class="mprog"><span style="width:' + Math.round(100 * z.i / z.ids.length) + '%"></span></div>' +
    '<div class="mcount">Question ' + (z.i + 1) + ' of ' + z.ids.length + ' · ' + z.right + ' right so far</div>' +
    '<div class="mq">' + qMeta(item, false) + '<div class="mqq">' + esc(q.q) + '</div>' +
    '<div class="mqo">' + q.o.map(function (o, oi) {
      return '<button type="button" class="mopt" data-pick="' + oi + '"><span class="ml">' +
        'ABCD'.charAt(oi) + '</span><span class="mt">' + esc(o) + '</span></button>';
    }).join('') + '</div><div id="mqs"></div></div>';
}

function pickQuiz(pick) {
  var z = quiz, box = document.getElementById('mquiz');
  if (!z || z.answered || z.i >= z.ids.length || !box) return;
  z.answered = true;
  var id = z.ids[z.i], q = QBY[id].q, ok = pick === q.a;
  var buttons = box.querySelectorAll('.mopt');
  for (var j = 0; j < buttons.length; j++) {
    var bi = parseInt(buttons[j].getAttribute('data-pick'), 10);
    buttons[j].disabled = true;
    buttons[j].className = 'mopt ' + (bi === q.a ? 'right' : bi === pick ? 'wrong' : 'dim');
  }
  if (ok) z.right++; else z.wrong.push([id, pick]);
  markAnswer(id, ok);
  var sol = document.getElementById('mqs');
  if (sol) sol.innerHTML = '<div class="mqsol' + (ok ? ' ok' : '') + '"><b>' +
    (ok ? 'Right.' : 'Not that one: the answer is ' + 'ABCD'.charAt(q.a) + ', ' + esc(q.o[q.a]) + '.') +
    '</b> ' + hiMark(prose(q.s, 1)) + ' <span class="rbtests">Tests ' + esc(q.r) + '</span></div>' +
    '<div class="stack"><button class="pill big" type="button" data-act="next">' +
    (z.i + 1 >= z.ids.length ? 'See the score' : 'Next question') + '</button></div>';
  var nb = box.querySelector('[data-act="next"]');
  if (nb) nb.focus({ preventScroll: true });
}

main.addEventListener('click', function (e) {
  if (!quiz || !document.getElementById('mquiz')) return;
  var act = e.target.closest('[data-act]');
  if (act && document.getElementById('mquiz').contains(act)) {
    var a = act.getAttribute('data-act');
    if (a === 'next') { quiz.i++; quiz.answered = false; drawQuiz(); jumpToTop(); }
    else if (a === 'again') { route(); }
    return;
  }
  var opt = e.target.closest('.mopt');
  if (opt && opt.closest('#mquiz')) pickQuiz(parseInt(opt.getAttribute('data-pick'), 10));
});

function practiceRoute(seg) {
  var k = seg[0] || '';
  if (!k) return practiceHub();
  if (k === 'wrong') {
    return startQuiz(shuffle(wrongIds()), 'Your wrong answers',
      'Each one leaves this list the next time you answer it right.', ['Review', '#/review']);
  }
  if (k === 'mixed') {
    var pool = [];
    SECTIONS.forEach(function (s) { pool = pool.concat(qsOf(s.id)); });
    return startQuiz(freshFirst(pool).slice(0, 20), 'Twenty mixed',
      'From all three sections, the ones you have tried least first.', ['Practice', '#/practice']);
  }
  if (k === 'a') {
    var num = seg[1], a = byArt[num];
    if (!a) return notFound('There is no Article ' + num + '.');
    return startQuiz(shuffle((qByArt[num] || []).slice()), 'Article ' + num + ': ' + a.h,
      'Every question that tests this article.', ['Article ' + num, '#/a/' + encodeURIComponent(num)]);
  }
  var s = SEC[k];
  if (!s) return notFound('There is no such practice set.');
  if (seg[1]) {
    var t = topicOf(k, seg[1]);
    if (!t) return notFound('There is no such topic.');
    return startQuiz(freshFirst(qsOf(k, t.id)), t.t, s.name + ', in a different order each time.', [t.t, '#/' + k + '/' + t.id]);
  }
  startQuiz(freshFirst(qsOf(k)), s.name, plural(qsOf(k).length, 'question') + ', least-tried first.', [s.short, '#/' + k]);
}

/* ------------------------------------------------------------- mock test

   The test in progress lives in storage, not in the page, so a reload, a
   phone call or a wander to another tab loses nothing. The clock is the wall
   clock: it keeps running while you are away, as the real one would. */

var mockTick = null, mockSel = 0;

function stopTick() { if (mockTick) { clearInterval(mockTick); mockTick = null; } }

function mmss(ms) {
  var s = Math.max(0, Math.ceil(ms / 1000)), m = Math.floor(s / 60);
  s = s % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function newMock() {
  var ids = [];
  MOCK.split.forEach(function (x) {
    if (SEC[x[0]]) ids = ids.concat(freshFirst(qsOf(x[0])).slice(0, x[1]));
  });
  var live = { v: 1, ids: ids, ans: {}, mark: {}, cur: 0, start: Date.now(), dur: MOCK.minutes * 60000 };
  save(K_LIVE, live);
  return live;
}

function mockPage() {
  var live = load(K_LIVE, null);
  if (live && live.ids && live.ids.every(function (id) { return QBY[id]; })) {
    if (Date.now() >= live.start + live.dur) return finishMock(live);
    return mockRun(live);
  }
  if (live) save(K_LIVE, null);

  var last = load(K_MOCKS, []);
  var h = pageH1('Mock test', 'The law block of the real paper, at the real pace.') +
    '<dl class="facts rbrules">' +
      '<dt>Questions</dt><dd>35: Constitution 15, SC Rules 2013 10, O&amp;S Rules 1961 10, in that order</dd>' +
      '<dt>Time</dt><dd>' + MOCK.minutes + ' minutes, the paper\'s 54 seconds a question; the clock keeps running if you leave the page</dd>' +
      '<dt>Marking</dt><dd>One mark for a right answer, minus ' + MOCK.neg + ' for a wrong one, nothing for a blank</dd>' +
      '<dt>Which questions</dt><dd>The ones you have tried least, so each test brings new ones</dd>' +
      '<dt>Moving about</dt><dd>Jump to any question from the palette, mark one to come back to, change an answer until you submit. Keys: A to D to choose, arrows to move</dd>' +
    '</dl><div class="stack"><button class="pill big rbgo" type="button" id="mockgo">Start the test</button></div>';

  if (last.length) {
    h += '<div class="block"><h3>Your last tests</h3>' + mockTable(last.slice(0, 5)) +
      '<p class="foot">All of them are on the <a href="#/review">review page</a>.</p></div>';
  }
  render(shell(h));
  var go = document.getElementById('mockgo');
  if (go) go.addEventListener('click', function () { mockSel = 0; mockRun(newMock()); });
}

function mockRun(live) {
  stopTick();
  mockSel = live.cur || 0;
  render('<div class="wrap artpage rbmock">' +
    '<div class="rbbarline" id="mbar"></div>' +
    '<div id="mbody"></div>' +
    '<div class="block"><h3>All 35</h3><div class="rbpal" id="mpal"></div>' +
    '<p class="foot before">Gold: answered. Purple ring: marked to come back to. Outlined: where you are.</p></div>' +
    '</div>');
  drawMock(live);
  mockTick = setInterval(function () {
    var cur = load(K_LIVE, null);
    if (!cur || !document.getElementById('mbar')) { stopTick(); return; }
    if (Date.now() >= cur.start + cur.dur) { stopTick(); finishMock(cur); return; }
    drawMockBar(cur);
  }, 1000);
}

function drawMockBar(live) {
  var bar = document.getElementById('mbar');
  if (!bar) return;
  var left = live.start + live.dur - Date.now(), done = Object.keys(live.ans).length;
  bar.innerHTML = '<span class="rbclock' + (left < 300000 ? ' low' : '') + '">' + mmss(left) + '</span>' +
    '<span class="rbdone">' + done + ' of ' + live.ids.length + ' answered</span>' +
    '<button class="pill big rbsubmit" type="button" data-m="submit">Submit</button>';
}

function drawMock(live) {
  drawMockBar(live);
  var body = document.getElementById('mbody'), pal = document.getElementById('mpal');
  if (!body || !pal) return;
  var i = mockSel, id = live.ids[i], item = QBY[id], q = item.q, pick = live.ans[id];
  body.innerHTML = '<div class="mcount">Question ' + (i + 1) + ' of ' + live.ids.length + ' · ' +
    esc(item.sec.short) + '</div><div class="mq"><div class="mqq">' + esc(q.q) + '</div><div class="mqo">' +
    q.o.map(function (o, oi) {
      return '<button type="button" class="mopt' + (pick === oi ? ' rbpick' : '') + '" data-m="pick" data-o="' + oi + '">' +
        '<span class="ml">' + 'ABCD'.charAt(oi) + '</span><span class="mt">' + esc(o) + '</span></button>';
    }).join('') + '</div></div>' +
    '<div class="stack rbnav">' +
      '<button class="pill big" type="button" data-m="prev"' + (i ? '' : ' disabled') + '>Previous</button>' +
      '<button class="pill big" type="button" data-m="mark">' + (live.mark[id] ? 'Unmark' : 'Mark for review') + '</button>' +
      (pick != null ? '<button class="pill big" type="button" data-m="clear">Clear answer</button>' : '') +
      '<button class="pill big" type="button" data-m="next"' + (i + 1 < live.ids.length ? '' : ' disabled') + '>Next</button>' +
    '</div>';
  pal.innerHTML = live.ids.map(function (qid, k) {
    var cls = (live.ans.hasOwnProperty(qid) ? ' ans' : '') + (live.mark[qid] ? ' mk' : '') + (k === i ? ' cur' : '');
    return '<button type="button" class="rbp' + cls + '" data-m="go" data-i="' + k + '" aria-label="Question ' +
      (k + 1) + '">' + (k + 1) + '</button>';
  }).join('');
}

function mockAct(act, el) {
  var live = load(K_LIVE, null);
  if (!live) return;
  var id = live.ids[mockSel];
  if (act === 'pick') live.ans[id] = parseInt(el.getAttribute('data-o'), 10);
  else if (act === 'clear') delete live.ans[id];
  else if (act === 'mark') { if (live.mark[id]) delete live.mark[id]; else live.mark[id] = 1; }
  else if (act === 'prev' && mockSel > 0) mockSel--;
  else if (act === 'next' && mockSel + 1 < live.ids.length) mockSel++;
  else if (act === 'go') mockSel = parseInt(el.getAttribute('data-i'), 10) || 0;
  else if (act === 'submit') return confirmSubmit(live);
  live.cur = mockSel;
  save(K_LIVE, live);
  drawMock(live);
  if (act === 'prev' || act === 'next' || act === 'go') {
    var body = document.getElementById('mbody');
    if (body && body.getBoundingClientRect().top < 0) scrollToEl(document.getElementById('mbar') || body);
  }
}

main.addEventListener('click', function (e) {
  var el = e.target.closest('[data-m]');
  if (el && main.querySelector('.rbmock')) mockAct(el.getAttribute('data-m'), el);
});

function confirmSubmit(live) {
  var sheet = document.getElementById('sheet');
  var blank = live.ids.length - Object.keys(live.ans).length, marked = Object.keys(live.mark).length;
  sheet.innerHTML = '<div class="sheetbg"></div><div class="sheetbox" role="dialog" aria-modal="true" aria-label="Submit the test">' +
    '<button class="sheetx" aria-label="Close">✕</button><div class="label tight">Mock test</div>' +
    '<h2>Submit now?</h2><p class="note">' +
    (blank ? plural(blank, 'question') + ' still blank. A blank costs nothing; a guess that is wrong costs a quarter mark. '
           : 'Every question is answered. ') +
    (marked ? plural(marked, 'question') + ' marked for review. ' : '') + mmss(live.start + live.dur - Date.now()) + ' left.</p>' +
    '<div class="stack"><button class="pill big rbgo" type="button" id="subyes">Submit the test</button> ' +
    '<button class="pill big" type="button" id="subno">Keep going</button></div></div>';
  sheet.hidden = false;
  function close() { sheet.hidden = true; sheet.innerHTML = ''; }
  sheet.querySelector('.sheetx').addEventListener('click', close);
  sheet.querySelector('.sheetbg').addEventListener('click', close);
  document.getElementById('subno').addEventListener('click', close);
  document.getElementById('subyes').addEventListener('click', function () { close(); finishMock(load(K_LIVE, live)); });
  document.getElementById('subyes').focus();
}

function finishMock(live) {
  stopTick();
  var secs = {}, right = 0, wrong = 0, items = [];
  MOCK.split.forEach(function (x) { secs[x[0]] = { n: 0, r: 0, w: 0 }; });
  live.ids.forEach(function (id) {
    var item = QBY[id];
    if (!item) return;
    var pick = live.ans.hasOwnProperty(id) ? live.ans[id] : null, s = secs[item.sec.id];
    s.n++;
    if (pick !== null) {
      var ok = pick === item.q.a;
      if (ok) { right++; s.r++; } else { wrong++; s.w++; }
      markAnswer(id, ok);
    }
    items.push([id, pick]);
  });
  var used = Math.min(live.dur, Date.now() - live.start);
  var res = { at: Date.now(), n: items.length, right: right, wrong: wrong, skip: items.length - right - wrong,
              net: right - MOCK.neg * wrong, used: used, secs: secs };
  var hist = load(K_MOCKS, []);
  hist.unshift(res);
  save(K_MOCKS, hist.slice(0, 30));
  res.items = items;
  save(K_LAST, res);
  save(K_LIVE, null);
  if (location.hash !== '#/mock/result') location.hash = '#/mock/result';
  else mockResult();
}

function netStr(n) { return (Math.round(n * 100) / 100).toString(); }

function niceWhen(t) {
  var d = new Date(t);
  return d.getDate() + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()] +
    ', ' + (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
}

function mockTable(list) {
  return '<div class="rbtable"><table><thead><tr><th>When</th><th>Score</th><th>Right</th><th>Wrong</th>' +
    '<th>Blank</th><th>Time</th></tr></thead><tbody>' + list.map(function (m) {
      return '<tr><td>' + esc(niceWhen(m.at)) + '</td><td><b>' + netStr(m.net) + '</b> / ' + m.n + '</td><td>' +
        m.right + '</td><td>' + m.wrong + '</td><td>' + m.skip + '</td><td>' + mmss(m.used) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
}

function mockResult(filter) {
  var res = load(K_LAST, null);
  if (!res || !res.items) {
    return render(shell(pageH1('Mock test', '') + '<div class="empty"><b>No finished test yet</b>' +
      'Take one and the score and every answer appear here.' +
      '<div class="stack"><a class="pill big" href="#/mock">Start a test</a></div></div>'));
  }
  filter = filter || 'all';
  var pct = res.n ? Math.round(100 * res.net / res.n) : 0;
  var h = crumb([['Mock test', '#/mock'], ['Result']]) +
    pageH1('Your score: ' + netStr(res.net) + ' out of ' + res.n,
      res.right + ' right, ' + res.wrong + ' wrong (minus ' + netStr(MOCK.neg * res.wrong) + '), ' + res.skip +
      ' blank, in ' + mmss(res.used) + '.') +
    '<div class="figs">' + fig(pct + '%', 'net score') + fig(res.right, 'right') + fig(res.wrong, 'wrong') +
      fig(res.skip, 'blank') + '</div>' +
    '<p class="foot">The paper needs 50 out of 100 to qualify, so at the same rate this block wants 17.5 out of 35. ' +
    'Treat that as the floor, not the target: the law block is the part you can push close to full marks.</p>';

  h += '<div class="block"><h3>By section</h3><dl class="facts">' + MOCK.split.map(function (x) {
    var s = res.secs[x[0]], sec = SEC[x[0]];
    if (!s || !sec) return '';
    return '<dt><a href="#/' + x[0] + '">' + esc(sec.name) + '</a></dt><dd>' + netStr(s.r - MOCK.neg * s.w) + ' out of ' + s.n +
      ' · ' + s.r + ' right, ' + s.w + ' wrong, ' + (s.n - s.r - s.w) + ' blank</dd>';
  }).join('') + '</dl></div>';

  var tabs = [['all', 'All ' + res.n], ['wrong', 'Wrong ' + res.wrong], ['blank', 'Blank ' + res.skip], ['right', 'Right ' + res.right]];
  h += '<div class="block"><h3>Every question</h3><div class="listtabs" id="rtabs">' + tabs.map(function (t) {
    return '<button type="button" data-f="' + t[0] + '" aria-pressed="' + (t[0] === filter) + '">' + esc(t[1]) + '</button>';
  }).join('') + '</div>' + res.items.map(function (x, k) {
    var item = QBY[x[0]];
    if (!item) return '';
    var st = x[1] === null ? 'blank' : x[1] === item.q.a ? 'right' : 'wrong';
    if (filter !== 'all' && filter !== st) return '';
    return '<div class="rbres ' + st + '"><div class="rbresn">' + (k + 1) + ' · ' +
      (st === 'right' ? 'Right' : st === 'wrong' ? 'Wrong' : 'Blank') + '</div>' + wrongCard(x[0], x[1]) + '</div>';
  }).join('') + '</div>';

  h += '<div class="stack"><a class="pill big" href="#/mock">Another test</a> ' +
    '<a class="pill big" href="#/practice/wrong">Practise what you got wrong</a></div>';
  render(shell(h));
  var rt = document.getElementById('rtabs');
  if (rt && arguments.length) scrollToEl(rt);
  if (rt) rt.addEventListener('click', function (e) {
    var b = e.target.closest('[data-f]');
    if (b) mockResult(b.getAttribute('data-f'));
  });
}

/* ------------------------------------------------------------------ review */

function reviewPage() {
  var ids = wrongIds(), hist = load(K_MOCKS, []);
  var best = hist.reduce(function (m, x) { return Math.max(m, x.net); }, -Infinity);
  var h = pageH1('Review', 'Everything you have told the site you do not know yet. Nothing here was chosen for you.') +
    '<div class="figs">' + fig(ids.length, 'wrong answers') + fig(hist.length, 'mock tests') +
      fig(hist.length ? netStr(best) : 'none', 'best mock') + '</div>';

  h += '<div class="block"><h3>By section</h3><dl class="facts">' + SECTIONS.map(function (s) {
    var st = secStats(s);
    return '<dt><a href="#/practice/' + s.id + '">' + esc(s.name) + '</a></dt><dd>' + esc(progressLine(st.p)) + '</dd>';
  }).join('') + '</dl></div>';

  if (ids.length) {
    h += '<div class="block"><h3>The questions you got wrong</h3>' +
      '<p class="foot before">A question leaves this list the next time you answer it right.</p>' +
      '<div class="stack-sm"><a class="pill big" href="#/practice/wrong">Practise these ' + ids.length + '</a></div>';
    SECTIONS.forEach(function (s) {
      var mine = ids.filter(function (id) { return QBY[id].sec === s; });
      if (!mine.length) return;
      h += '<div class="label stack-lg">' + esc(s.name) + ' · ' + mine.length + '</div>' +
        mine.map(function (id) { return wrongCard(id, null); }).join('');
    });
    h += '</div>';
  } else {
    h += '<div class="empty"><b>The list is empty</b>Either nothing has been answered wrong yet, or this browser ' +
      'is not keeping site data. Practise a topic and anything you miss lands here.' +
      '<div class="stack"><a class="pill big" href="#/practice">Practise</a></div></div>';
  }

  if (hist.length) h += '<div class="block"><h3>Every mock test</h3>' + mockTable(hist) + '</div>';

  h += '<div class="stack"><button class="pill big" type="button" id="rclear">Clear everything on this page</button></div>';
  render(shell(h));
  var btn = document.getElementById('rclear');
  if (btn) btn.addEventListener('click', function () {
    if (btn.getAttribute('data-sure')) {
      [K_WRONG, K_SEEN, K_MOCKS, K_LAST].forEach(function (k) { save(k, null); delete MEM[k]; });
      reviewPage();
    } else {
      btn.setAttribute('data-sure', '1');
      btn.textContent = 'Press again to clear your answers and mock history';
    }
  });
}

/* ------------------------------------------------------------------ about */

function aboutPage() {
  var h = pageH1('About this site', 'What is in it, where it comes from, and how firm each part is.');
  h += '<div class="block"><h3>What it covers</h3><p class="plain">The three law sections of the Supreme Court ' +
    'Junior Court Assistant 2026 objective test: 35 of its 100 questions. English, aptitude, general ' +
    'knowledge and computers are left out on purpose for now.</p></div>';

  h += factsBlock({ h: 'How firm each part is', rows: [
    ['The official text of the articles', 'Extracted, verbatim, from The Constitution of India [As on 1st May, 2024], through the Article Machine'],
    ['The plain-English notes on articles', 'The Article Machine\'s, written for that site and checked against the official text'],
    ['The Constitution notes and questions', 'Written for this site, each fact checked against the official text'],
    ['The SC Rules 2013 and 1961 Rules material', 'Written for this site. Every Order heading and rule used in a question was checked against at least two independent copies or reports of the text; single-source points are marked “check the bare text”'],
    ['Current facts', 'The Chief Justice, the Court\'s strength, the number of High Courts: true as on 27 October 2026'],
    ['The exam pattern', 'As reported from the advertisement of 30 September 2026 (F.6/2026-SC (RC)) and the notice of 1 October 2026; the objective test date of 20 November 2026 is tentative']
  ] });

  h += '<div class="block"><h3>Read the bare text too</h3><p class="plain">The Rules are short. Read them once ' +
    'in full before the test; this site is for learning them and checking yourself.</p>' +
    '<div class="stack"><a class="pill big" href="https://www.sci.gov.in/supreme-court-rules-2013/" rel="noopener">' +
    'Supreme Court Rules, 2013 on sci.gov.in</a> <a class="pill big" href="https://www.sci.gov.in/officers-servant-rules/" rel="noopener">' +
    'Officers and Servants Rules, 1961 on sci.gov.in</a> <a class="pill big" href="https://www.sci.gov.in/recruitments/" rel="noopener">' +
    'Recruitment notices</a></div></div>';

  h += factsBlock({ h: 'What it remembers', rows: [
    ['Your wrong answers', 'rb.wrong.v1, until you answer each one right'],
    ['How often you got each question right and wrong', 'rb.seen.v1, used to put the least-tried questions first'],
    ['Your mock tests', 'rb.mocks.v1 and rb.mock.last.v1; a test in progress is rb.mock.live.v1'],
    ['Where', 'This browser only. Nothing is sent anywhere, and the Review page can clear all of it']
  ] });
  render(shell(h));
}

function notFound(msg) {
  render(shell('<div class="empty"><b>Not here</b>' + esc(msg) +
    '<div class="stack"><a class="pill big" href="#/">The front page</a></div></div>'));
}

/* ------------------------------------------------------------------ search */

var searchIndex = null, selIdx = -1;

function buildIndex() {
  if (searchIndex) return searchIndex;
  var idx = [];
  ART_ORDER.forEach(function (n) {
    var a = byArt[n], p = plainOf(n);
    idx.push({ kind: 'Article', num: n.toLowerCase(), no: n, title: a.h, sub: p ? p.p : '',
               href: '#/a/' + encodeURIComponent(n), hay: (n + ' ' + a.h + ' ' + (p ? p.p : '')).toLowerCase() });
  });
  SECTIONS.forEach(function (s) {
    s.topics.forEach(function (t) {
      var href = '#/' + s.id + '/' + t.id, parts = [t.t, t.w].concat(t.notes || []);
      (t.blocks || []).forEach(function (b) {
        parts.push(b.h);
        b.rows.forEach(function (r) {
          parts.push(r[0], r[1]);
          idx.push({ kind: 'Fact', no: s.short, title: unmark(r[0]), sub: unmark(r[1]), href: href,
                     hay: (r[0] + ' ' + r[1] + ' ' + b.h).toLowerCase().replace(/==/g, '') });
        });
      });
      (t.pairs || []).forEach(function (c) { parts.push(c.k); c.rows.forEach(function (r) { parts.push(r[0], r[1]); }); });
      idx.push({ kind: 'Topic', no: s.short, title: t.t, sub: t.w, href: href,
                 hay: unmark(parts.join(' ')).toLowerCase() });
    });
  });
  ((SEC.r && SEC.r.orders) || []).forEach(function (o) {
    idx.push({ kind: 'Order', roman: o[0].toLowerCase(), no: 'Order ' + o[0], title: o[1], sub: 'Supreme Court Rules, 2013 · ' + o[2],
               href: '#/r/scr-orders', hay: ('order ' + o[0] + ' ' + o[1]).toLowerCase() });
  });
  searchIndex = idx;
  return idx;
}

function hl(text, terms) {
  var out = esc(text);
  terms.forEach(function (t) {
    if (t.length < 2) return;
    out = out.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
  });
  return out;
}

function runSearch(raw) {
  var q = raw.trim().toLowerCase();
  if (!q) { closeResults(); return; }
  var artQ = /^(?:article|art\.?)?\s*(\d{1,3}[a-z]{0,2})$/i.exec(q);
  var ordQ = /^order\s+([ivxl]+)$/i.exec(q);
  var terms = q.split(/\s+/).filter(Boolean);
  var tests = terms.map(function (t) {
    if (!/^[a-z0-9]/.test(t)) return function (s) { return s.indexOf(t) >= 0; };
    var re = new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    return function (s) { return re.test(s); };
  });
  var hits = [];
  buildIndex().forEach(function (r) {
    var score = 0;
    if (artQ && r.kind === 'Article' && r.num === artQ[1]) score += 1000;
    if (ordQ && r.kind === 'Order' && r.roman === ordQ[1]) score += 1000;
    var ok = tests.every(function (fn) { return fn(r.hay); });
    if (!ok && !score) return;
    if (ok) {
      var t = String(r.title).toLowerCase();
      score += 10;
      if (t.indexOf(q) >= 0) score += 120;
      if (t.indexOf(q) === 0) score += 60;
      if (r.kind === 'Topic') score += 30;
      if (r.kind === 'Fact') score -= 5;
    }
    hits.push({ r: r, s: score });
  });
  hits.sort(function (a, b) { return b.s - a.s; });
  hits = hits.slice(0, 30);
  selIdx = -1;
  resBox.innerHTML = '<div class="wrap">' + (hits.length ? hits.map(function (x, i) {
    var r = x.r;
    return '<a class="res" role="option" data-i="' + i + '" href="' + r.href + '"><span class="no">' + esc(r.no) +
      '</span><span class="tx"><b>' + hl(r.title, terms) + '</b><i>' + hl(shorten(r.sub, 120), terms) +
      '</i></span><span class="kind">' + r.kind + '</span></a>';
  }).join('') : '<div class="empty" style="padding:var(--s6)"><b>No match</b>Nothing on this site matches “' +
    esc(raw) + '”.</div>') + '</div>';
  resBox.hidden = false;
  qBox.setAttribute('aria-expanded', 'true');
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
    if (rows.length) { e.preventDefault(); rows[selIdx >= 0 ? selIdx : 0].click(); }
  } else if (e.key === 'Escape') { qBox.value = ''; closeResults(); qBox.blur(); }
});

resBox.addEventListener('click', function (e) {
  var hit = e.target.closest('.res');
  if (hit) {
    qBox.value = ''; closeResults();
    if (hit.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
  }
});

document.addEventListener('click', function (e) {
  if (!resBox.hidden && !resBox.contains(e.target) && e.target !== qBox) closeResults();
});

document.addEventListener('keydown', function (e) {
  var inField = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  var sheet = document.getElementById('sheet');
  if (e.key === '/' && !inField) { e.preventDefault(); qBox.focus(); qBox.select(); return; }
  if (e.key === 'Escape') {
    if (!resBox.hidden) closeResults();
    if (sheet && !sheet.hidden) { sheet.hidden = true; sheet.innerHTML = ''; }
    return;
  }
  if (inField || e.ctrlKey || e.metaKey || e.altKey || (sheet && !sheet.hidden)) return;
  var k = e.key.toLowerCase(), oi = 'abcd'.indexOf(k);
  if (oi < 0 && /^[1-4]$/.test(k)) oi = parseInt(k, 10) - 1;

  /* In a mock: A to D (or 1 to 4) choose, the arrows move. */
  if (main.querySelector('.rbmock')) {
    if (oi >= 0) { e.preventDefault(); mockAct('pick', { getAttribute: function () { return String(oi); } }); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); mockAct('next'); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); mockAct('prev'); }
    return;
  }
  /* In practice: A to D choose, Enter goes on. */
  if (quiz && document.getElementById('mquiz')) {
    if (oi >= 0 && !quiz.answered) { e.preventDefault(); pickQuiz(oi); }
  }
});

/* ------------------------------------------------------------------ route */

function route() {
  stopTick();
  var seg = segOf();
  recordStep(location.hash || '#/');
  lastHash = location.hash || '#/';
  closeResults();
  quiz = null;
  renderNav(seg);

  switch (seg[0]) {
    case '':         return homePage();
    case 'a':        return articlePage(seg[1]);
    case 'practice': return practiceRoute(seg.slice(1));
    case 'mock':     return seg[1] === 'result' ? mockResult() : mockPage();
    case 'review':   return reviewPage();
    case 'about':    return aboutPage();
  }
  var s = SEC[seg[0]];
  if (s) {
    if (!seg[1]) return sectionPage(s);
    var t = topicOf(s.id, seg[1]);
    return t ? topicPage(s, t) : notFound('There is no such topic in ' + s.name + '.');
  }
  notFound('That address does not exist on this site.');
}

/* =========================================================================
   INSTALLING IT AS AN APP
   Chromium browsers hand over an install prompt that a button of our own can
   replay; every other browser installs from its own menu, so the same button
   falls back to instructions for the browser in use.
   ========================================================================= */

(function () {
  var btn = document.getElementById('install'), sheet = document.getElementById('sheet');
  if (!btn || !sheet) return;
  var deferred = null, ua = navigator.userAgent;
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/.test(ua), isFirefox = /Firefox|FxiOS/.test(ua);
  var isChromium = /Chrome|Chromium|CriOS/.test(ua) && !isFirefox;
  var isSafari = /Safari/.test(ua) && !isChromium && !isFirefox;

  function installed() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  }
  if (!installed()) btn.hidden = false;

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    btn.hidden = installed();
  });
  window.addEventListener('appinstalled', function () { deferred = null; btn.hidden = true; closeSheet(); });

  function steps() {
    if (isIOS && isSafari) return { t: 'Add to your Home Screen', s: [
      'Tap the Share button at the bottom of Safari.',
      'Scroll down and tap <b>Add to Home Screen</b>.',
      'Tap <b>Add</b>. It opens without the browser bars and works offline.'] };
    if (isIOS) return { t: 'Open this in Safari first', s: [
      'On iPhone and iPad only Safari can install a web app.',
      'Open <b>claude28claude.github.io/article-machine/jca</b> in Safari.',
      'Then Share, then <b>Add to Home Screen</b>.'] };
    if (isAndroid) return { t: 'Install from the browser menu', s: [
      'Tap the <b>⋮</b> menu at the top right.',
      'Tap <b>Install app</b>, or <b>Add to Home screen</b>.'] };
    return { t: 'Install from the browser menu', s: [
      'Look for the install icon in the address bar, or open the browser menu.',
      'Choose <b>Install</b>, or <b>Add to Home screen</b>.'],
      n: 'If neither appears, this browser cannot install web apps; the site still works offline once loaded.' };
  }

  function closeSheet() { sheet.hidden = true; sheet.innerHTML = ''; }

  function openSheet() {
    var d = steps();
    sheet.innerHTML = '<div class="sheetbg"></div><div class="sheetbox" role="dialog" aria-modal="true" aria-label="' +
      esc(d.t) + '"><button class="sheetx" aria-label="Close">✕</button><div class="label tight">Install</div>' +
      '<h2>' + esc(d.t) + '</h2><ol>' + d.s.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>' +
      (d.n ? '<p class="note">' + esc(d.n) + '</p>' : '') + '</div>';
    sheet.hidden = false;
    sheet.querySelector('.sheetx').addEventListener('click', closeSheet);
    sheet.querySelector('.sheetbg').addEventListener('click', closeSheet);
    sheet.querySelector('.sheetx').focus();
  }

  btn.addEventListener('click', function () {
    if (deferred) {
      deferred.prompt();
      deferred.userChoice.then(function (r) { if (r && r.outcome === 'accepted') btn.hidden = true; deferred = null; });
    } else openSheet();
  });
})();

window.addEventListener('resize', syncHead);
window.addEventListener('hashchange', route);
route();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () { /* offline is a bonus */ });
  });
}

window.__RB = { ALLQ: ALLQ, QBY: QBY, qByArt: qByArt, ART_ORDER: ART_ORDER, buildIndex: buildIndex };

})();
