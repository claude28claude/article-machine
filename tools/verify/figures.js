/* Every figure in the 4 November set is also in one of the three new mind
   maps. If the two disagree, one of them is wrong - so assert each pairing
   rather than trusting that I copied them across correctly. */
global.window = {};
const D = require('path').join(__dirname, '..', '..') + require('path').sep;
['data-daily.js', 'data-gk-maps.js', 'data-econ-maps.js', 'data-early-maps.js']
  .forEach(f => require(D + f));
const W = global.window;

function flat(o, out) {
  out = out || [];
  if (typeof o === 'string') out.push(o);
  else if (Array.isArray(o)) o.forEach(x => flat(x, out));
  else if (o && typeof o === 'object') Object.keys(o).forEach(k => flat(o[k], out));
  return out;
}

const set4 = W.DAILY.sets.find(s => s.id === '4-november');
const notes = flat(set4).join(' \n ');
const census = flat(W.GK_MAPS.topics.census).join(' \n ');
const sdg = flat(W.ECON_MAPS.topics.sdg).join(' \n ');
const mstate = flat(W.EARLY_MAPS.topics['mughal-state']).join(' \n ');
const mdecl = flat(W.EARLY_MAPS.topics['mughal-decline']).join(' \n ');
const maps = [census, sdg, mstate, mdecl].join(' \n ');

/* Each row: a label, and the string that must appear in BOTH the notes and
   the maps. A figure in only one of the two is the thing to catch. */
const PAIRS = [
  ['population', '1,210,854,977'], ['population crore', '121.09'],
  ['males', '62.37'], ['females', '58.65'],
  ['growth', '17.70'], ['previous growth', '21.54'],
  ['density', '382'], ['previous density', '325'],
  ['sex ratio', '943'], ['previous sex ratio', '933'],
  ['child sex ratio', '919'], ['previous child sex ratio', '927'],
  ['literacy', '74.04'], ['male literacy', '82.14'], ['female literacy', '65.46'],
  ['urban', '31.16'],
  ['Kerala literacy', '93.91'], ['Bihar literacy', '63.82'],
  ['Rajasthan female literacy', '52.66'],
  ['Kerala sex ratio', '1,084'], ['Haryana sex ratio', '879'],
  ['Puducherry', '1,037'], ['Daman and Diu', '618'],
  ['Bihar density', '1,106'], ['Arunachal density', '17'],
  ['Delhi density', '11,320'], ['Andaman density', '46'],
  ['UP population', '19.98'], ['Sikkim population', '6.11'],
  ['Lakshadweep population', '64,473'],
  ['Meghalaya growth', '27.95'], ['Nagaland growth', '0.58'],
  ['Haryana child sex ratio', '834'],
  ['SC share', '16.6'], ['SC number', '20.14'],
  ['ST share', '8.6'], ['ST number', '10.43'],
  ['Punjab SC', '31.9'], ['Mizoram ST', '94.4'],
  ['Hindu', '79.8'], ['Muslim', '14.2'], ['Christian', '2.3'],
  ['Sikh', '1.7'], ['Buddhist', '0.7'], ['Jain', '0.4'],
  ['first census', '1872'], ['first synchronous', '1881'],
  ['Mayo', 'Mayo'], ['Ripon', 'Ripon'], ['Plowden', 'Plowden'],
  ['Chandramouli', 'Chandramouli'], ['Census Act', 'Census Act, 1948'],
  ['Union List entry', 'entry 69'], ['15th census', '15th'],
  ['next census', '1 March 2027'],

  ['goals', '17 goals'], ['targets', '169 targets'], ['indicators', '231'],
  ['adopted', '25 September 2015'], ['members', '193'],
  ['resolution', '70/1'], ['in force', '1 January 2016'],
  ['MDG goals', '8 goals'], ['MDG targets', '21 targets'], ['MDG indicators', '60 indicators'],
  ['Brundtland', 'Brundtland'], ['five Ps', 'Prosperity'],
  ['index 2018', '57'], ['index 2023-24', '71'],
  ['SDSN', 'SDSN'], ['Bertelsmann', 'Bertelsmann'],
  ['NITI Aayog', 'NITI Aayog'], ['MoSPI', 'MoSPI'],

  ['subas Akbar', '12'], ['subas Aurangzeb', '21 or 22'],
  ['Ain-i-Dahsala', '1580'], ['Todar Mal', 'Todar Mal'],
  ['dams to rupee', 'forty dams'], ['Mir Saman', 'Mir Saman'],
  ['jizya reimposed', '1679'], ['Bijapur', '1686'], ['Golconda', '1687'],
  ['Purandar', '1665'], ['Raigad', '1674'], ['Torna', '1646'],
  ['Afzal Khan', '1659'], ['Sambhaji', '1689'],
  ['Nadir Shah', '1739'], ['Panipat third', '1761'], ['Diwani', '1765'],
  ['Hyderabad', '1724'], ['Farrukhsiyar', '1719'],
  ['Mewar settled', '1615'], ['Haldighati', '1576'],
  ['Aurangzeb dies', '1707']
];

let bad = 0;
PAIRS.forEach(([label, s]) => {
  const inNotes = notes.includes(s), inMaps = maps.includes(s);
  if (!inNotes || !inMaps) {
    bad++;
    console.log('MISMATCH  ' + label.padEnd(26) + ' "' + s + '"' +
      '  notes:' + (inNotes ? 'yes' : 'NO ') + '  maps:' + (inMaps ? 'yes' : 'NO '));
  }
});
console.log(bad ? '\n' + bad + ' of ' + PAIRS.length + ' figures do not appear in both'
                : 'All ' + PAIRS.length + ' figures agree between the notes and the maps');

/* And the things that must NOT be there: a figure I may have fat-fingered. */
const SUSPECT = [
  ['literacy must not be 74.4', /74\.4[^0-9]/],
  ['sex ratio must not be 940', /\b940\b/],
  ['growth must not be 17.7 per cent written as 17.07', /17\.07/],
  ['the goals are 17, never 16 goals', /\b16 goals\b/],
  ['targets are 169, never 196', /\b196 targets\b/]
];
let suspect = 0;
SUSPECT.forEach(([label, re]) => {
  if (re.test(notes) || re.test(maps)) { suspect++; console.log('SUSPECT   ' + label); }
});

if (bad || suspect) process.exit(1);
