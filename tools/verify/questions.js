/* The question banks in the daily study sets.

   A bank is easy to get subtly wrong in ways that reading it will not show:
   an answer index pointing at the wrong option after an edit, two identical
   options, a question whose `p` names a part that has been renamed, or an
   answer that always sits in the same place. This asserts all four, and
   exits 1 on any of them. */
global.window = {};
const path = require('path');
require(path.join(__dirname, '..', '..', 'data-daily.js'));
const D = global.window.DAILY;

let total = 0;
const bad = [];
const spread = [0, 0, 0, 0];

D.sets.forEach(function (s) {
  const parts = new Set((s.parts || []).map(p => p.id));
  const seen = new Map();
  (s.quiz || []).forEach(function (it, i) {
    const at = s.id + ' #' + (i + 1);
    total++;

    if (!it.q || !it.q.trim()) bad.push(at + ': no question text');
    if (!it.s || !it.s.trim()) bad.push(at + ': no solution');
    if (!Array.isArray(it.o) || it.o.length !== 4) bad.push(at + ': not four options');
    else {
      if (new Set(it.o).size !== 4) bad.push(at + ': two options are identical');
      it.o.forEach(function (o, k) {
        if (!o || !String(o).trim()) bad.push(at + ': option ' + 'ABCD'[k] + ' is empty');
      });
    }
    if (!(Number.isInteger(it.a) && it.a >= 0 && it.a <= 3))
      bad.push(at + ': answer index is ' + it.a);
    else spread[it.a]++;

    if (!parts.has(it.p)) bad.push(at + ': names part "' + it.p + '", which this set has not got');

    /* A solution that says "the first option" breaks the moment the options
       are rotated to even out the answer positions. */
    if (/\b(first|second|third|fourth|last)\s+(option|answer|choice)\b/i.test(it.s))
      bad.push(at + ': the solution refers to an option by position');

    /* == belongs in the notes, where the renderer strips it. Nothing here
       passes through that renderer. */
    if (/==/.test(it.q + it.s + (it.o || []).join('')))
      bad.push(at + ': stray == highlight marks');

    const key = it.q.trim().toLowerCase();
    if (seen.has(key)) bad.push(at + ': same question as #' + (seen.get(key) + 1));
    else seen.set(key, i);
  });
});

console.log('sets: ' + D.sets.map(s => s.id + ' (' + (s.quiz || []).length + ')').join(', '));
console.log('questions: ' + total);
console.log('answer positions A/B/C/D: ' + spread.join(' / '));

/* Guessing one letter every time should not beat chance by much. */
if (total) {
  const worst = Math.max.apply(null, spread) / total;
  console.log('always picking the commonest letter scores ' + Math.round(worst * 100) + ' per cent');
  if (worst > 0.35) bad.push('answers are skewed: one position holds ' +
    Math.round(worst * 100) + ' per cent of them');
}

console.log(bad.length ? '\nPROBLEMS:\n  ' + bad.join('\n  ') : '\nno problems');
if (bad.length) process.exit(1);
