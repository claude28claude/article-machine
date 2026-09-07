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

var SITE = { name: 'The Article Machine' };

var SUBJECTS = [{
  id: 'constitution',
  name: 'Constitution of India',
  blurb: 'Every article in plain English, with the official text, the cases and the amendments.',
  isDefault: true,
  tabs: [
    { href: '#/',            label: 'Articles',   match: ['', 'part', 'a'] },
    { href: '#/high-yield',  label: 'High-yield', match: ['high-yield'] },
    { href: '#/amendments',  label: 'Amendments', match: ['amendments', 'amendment'] },
    { href: '#/schedules',   label: 'Schedules',  match: ['schedules', 'schedule'] },
    { href: '#/cases',       label: 'Cases',      match: ['cases', 'case'] },
    { href: '#/about',       label: 'About',      match: ['about'] }
  ],
  stats: function () {
    return [ARTICLES.length + ' articles', AMENDMENTS.length + ' amendments',
            CASES.length + ' cases', SCHEDULES.length + ' schedules'];
  }
}];

function activeSubject() {
  var seg = location.hash.replace(/^#\/?/, '').split('/')[0];
  var hit = null;
  SUBJECTS.forEach(function (s) { if (s.id === seg) hit = s; });
  return hit || SUBJECTS.filter(function (s) { return s.isDefault; })[0];
}

function renderNav(seg0) {
  var sub = activeSubject();
  if (brandSub) brandSub.textContent = sub.name;
  if (!tabBar) return;
  tabBar.innerHTML = (SUBJECTS.length > 1
      ? '<a href="#/hub" class="hublink">All subjects</a>' : '') +
    sub.tabs.map(function (t) {
      var on = t.match.indexOf(seg0) >= 0;
      return '<a href="' + t.href + '"' + (on ? ' aria-current="page"' : '') + '>' +
             esc(t.label) + '</a>';
    }).join('');
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

function render(html) {
  main.innerHTML = html;
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
    '<div class="crumb"><a href="#/">Articles</a> → Part ' + esc(p.num) + '</div>' +
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
    '<div class="crumb"><a href="#/">Articles</a> → ' +
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
    '<div class="crumb"><a href="#/">Articles</a> → High-yield' +
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

/* --------------------------------------------------------------------- hub */

function hubPage() {
  var h = '<div class="wrap hero"><h1>' + esc(SITE.name) + '</h1>' +
    '<p class="lede">Pick a subject.</p></div><div class="wrap"><div class="grid">';
  SUBJECTS.forEach(function (s) {
    h += '<a class="pcard" href="#/' + (s.isDefault ? '' : s.id) + '">' +
      '<div class="pn">' + esc(s.name) + '</div>' +
      '<div class="pt">' + esc(s.blurb) + '</div>' +
      '<div class="pr">' + esc(s.stats().join(' · ')) + '</div></a>';
  });
  render(h + '</div></div>');
}

/* ------------------------------------------------------------------ about */

function aboutPage() {
  render('<div class="wrap artpage"><div class="crumb">About</div>' +
  '<h1 style="font-family:var(--serif);font-size:var(--t-h2);margin:0 0 var(--s5);font-weight:600">' +
  'How this was built, and what to trust</h1>' +

  '<div class="block"><h3>Where the text comes from</h3>' +
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
  'out. Seventy-two judgments are listed, against the articles they actually settled.</p></div>' +

  '<div class="block"><h3>Offline and installable</h3>' +
  '<p class="plain">The whole Constitution is loaded into your browser when you first open ' +
  'the page. After that it works with no network at all. On a phone, your browser\'s ' +
  '“Add to Home Screen” will install it as an app.</p></div>' +

  '</div>');
}

function notFound(msg) {
  render('<div class="wrap"><div class="empty"><b>Nothing here</b>' + esc(msg) +
    '<div class="stack"><a class="pill" href="#/">Back to the articles</a></div></div></div>');
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

  /* A short term matched as a bare substring is almost always wrong: "gst"
     is inside "amongst", "act" inside "practice". Short terms must match a
     whole word. Longer ones may still match a stem. */
  var tests = terms.map(function (t) {
    var lit = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (t.length <= 4) {
      var re = new RegExp('\\b' + lit, 'i');
      return function (s) { return re.test(s); };
    }
    return function (s) { return s.indexOf(t) >= 0; };
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
      '<b>No match</b>Nothing in the Constitution, the amendments, the Schedules or the ' +
      'cases matches “' + esc(raw) + '”.</div></div>';
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

/* ------------------------------------------------------------------ router */

function route() {
  var h = location.hash.replace(/^#\/?/, '');
  var seg = h.split('/').map(decodeURIComponent);
  closeResults();
  window.scrollTo(0, 0);

  renderNav(seg[0]);

  /* A registered non-default subject handles its own routes under its id. */
  var sub = null;
  SUBJECTS.forEach(function (s) { if (!s.isDefault && s.id === seg[0]) sub = s; });
  if (sub && sub.route) return sub.route(seg.slice(1));

  switch (seg[0]) {
    case '':           return homePage();
    case 'hub':        return hubPage();
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
