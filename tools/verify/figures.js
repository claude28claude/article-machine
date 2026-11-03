/* Every figure in a daily set is also in the mind maps written beside it. If
   the two disagree, one of them is wrong - so assert each pairing rather than
   trusting that I copied them across correctly. */
global.window = {};
const D = require('path').join(__dirname, '..', '..') + require('path').sep;
['data-daily.js', 'data-gk-maps.js', 'data-econ-maps.js', 'data-early-maps.js',
 'data-geo-maps.js'].forEach(f => require(D + f));
const W = global.window;

/* The prose spells an ordinal out ("the twelfth century") where a map,
   written in keywords, puts a numeral ("12th century"). That is a house
   style, not a disagreement, so flatten the two to one form before
   comparing - which means a REAL disagreement between them is caught
   across the style difference rather than hidden by it. */
const ORD = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
             'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
function ordSuffix(n) {
  return n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th';
}
function norm(s) {
  /* The highlight marks sit INSIDE a figure - a map writes "==34== caves" -
     so a pattern looking for "34 caves" cannot match across them. Drop them
     first, then fold the spelled-out ordinals onto the numerals. */
  s = s.replace(/==/g, '');
  ORD.forEach(function (w, i) {
    s = s.replace(new RegExp(w + ' century', 'gi'),
                  (i + 1) + ordSuffix(i + 1) + ' century');
  });
  return s;
}

function flat(o, out) {
  out = out || [];
  if (typeof o === 'string') out.push(o);
  else if (Array.isArray(o)) o.forEach(x => flat(x, out));
  else if (o && typeof o === 'object') Object.keys(o).forEach(k => flat(o[k], out));
  return out;
}

/* The question bank is deliberately full of wrong figures - that is what a
   distractor is, and "16 goals" is there precisely because somebody will
   pick it. It is not part of the prose this checks; only the notes, the
   tables and the comparisons are. tools/verify/questions.js checks the
   bank itself. */
function setProse(id) {
  const s = W.DAILY.sets.find(x => x.id === id);
  if (!s) { console.log('NO SUCH SET  ' + id); process.exit(1); }
  const copy = Object.assign({}, s);
  delete copy.quiz;
  return norm(flat(copy).join(' \n '));
}

function mapProse(list) {
  return list.map(([file, id]) => {
    const m = (W[file].topics || {})[id];
    if (!m) { console.log('NO SUCH MAP  ' + file + '.' + id); process.exit(1); }
    return norm(flat(m).join(' \n '));
  }).join(' \n ');
}

/* Each row: a label, and the string that must appear in BOTH the set's prose
   and the maps written beside it. A figure in only one of the two is the
   thing to catch. */
const SETS = [

{ id: '4-november',
  maps: [['GK_MAPS', 'census'], ['ECON_MAPS', 'sdg'],
         ['EARLY_MAPS', 'mughal-state'], ['EARLY_MAPS', 'mughal-decline']],
  pairs: [
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
]},

{ id: '5-november',
  maps: [['EARLY_MAPS', 'buddhism'], ['GEO_MAPS', 'minerals']],
  pairs: [
  /* the Buddha */
  ['Buddha dates', '563'], ['death year', '483 BCE'],
  ['left home', '29'], ['enlightened', '35'], ['died at', '80'],
  ['seven days', 'seven days'], ['five disciples', 'five'],
  ['Lumbini', 'Lumbini'], ['Kapilavastu', 'Kapilavastu'],
  ['Bodh Gaya', 'Bodh Gaya'], ['Sarnath', 'Sarnath'],
  ['Kushinagar', 'Kushinagar'], ['Niranjana', 'Niranjana'],
  ['pipal', 'pipal'], ['Kanthaka', 'Kanthaka'], ['Channa', 'Channa'],
  ['Alara Kalama', 'Alara Kalama'], ['Uddaka', 'Uddaka Ramaputta'],
  ['Suddhodana', 'Suddhodana'], ['Mahamaya', 'Mahamaya'],
  ['Gautami', 'Mahaprajapati Gautami'], ['Yashodhara', 'Yashodhara'],
  ['Rahula', 'Rahula'], ['Devadatta', 'Devadatta'],
  ['Anathapindika', 'Anathapindika'], ['Jetavana', 'Jetavana'],
  ['Ananda', 'Ananda'], ['Upali', 'Upali'], ['Sujata', 'Sujata'],
  ['Shakya', 'Shakya'], ['Malla', 'Malla'],
  ['Dharmachakra', 'Dharmachakrapravartana'],
  ['Mahabhinishkramana', 'Mahabhinishkramana'],

  /* the teaching */
  ['anatta', 'anatta'], ['anicca', 'anicca'], ['dukkha', 'dukkha'],
  ['trishna', 'trishna'], ['twelve links', 'twelve links'],
  ['pratityasamutpada', 'Pratityasamutpada'],
  ['Majjhima', 'Majjhima Patipada'], ['panchsila', 'anchsila'],
  ['Prajna', 'Prajna'], ['Sila', 'Sila'], ['Samadhi', 'Samadhi'],
  ['Pali', 'Pali'],

  /* councils and schools */
  ['1st council', '483 BCE'], ['2nd council', '383 BCE'],
  ['3rd council', '250 BCE'], ['Rajagriha', 'Rajagriha'],
  ['Saptaparni', 'Saptaparni'], ['Vaishali', 'Vaishali'],
  ['Pataliputra', 'Pataliputra'], ['Kundalvana', 'Kundalvana'],
  ['Ajatashatru', 'Ajatashatru'], ['Kalashoka', 'Kalashoka'],
  ['Mahakassapa', 'Mahakassapa'], ['Sabakami', 'Sabakami'],
  ['Moggaliputta', 'Moggaliputta Tissa'], ['Vasumitra', 'Vasumitra'],
  ['Ashvaghosha', 'Ashvaghosha'], ['Kanishka', 'Kanishka'],
  ['Nagarjuna', 'Nagarjuna'], ['shunyavada', 'shunyavada'],
  ['Asanga', 'Asanga'], ['Vasubandhu', 'Vasubandhu'],
  ['Vajrayana 8th c', '8th century'], ['Taras', 'Taras'],
  ['Mahendra', 'Mahendra and Sanghamitra'],
  ['12th century decline', '12th century'],

  /* the texts */
  ['Jatakas', '547'], ['five Nikayas', 'five Nikayas'],
  ['Dhammapada', 'Dhammapada'], ['Milindapanho', 'Milindapanho'],
  ['Buddhacharita', 'Buddhacharita'], ['Mahavastu', 'Mahavastu'],
  ['Lalitavistara', 'Lalitavistara'], ['Divyavadana', 'Divyavadana'],
  ['Saddharmapundarika', 'Saddharmapundarika'],
  ['Dipavamsa', 'Dipavamsa'], ['Mahavamsa', 'Mahavamsa'],
  ['Visuddhimagga', 'Visuddhimagga'], ['Buddhaghosa', 'Buddhaghosa'],
  ['Abhidharmakosha', 'Abhidharmakosha'],

  /* the stones */
  ['Ellora caves', '34'], ['Kailasa cave', '16'],
  ['Nalanda destroyed', '1193'], ['Kumaragupta', 'Kumaragupta I'],
  ['Dharmapala', 'Dharmapala'], ['Bakhtiyar', 'Bakhtiyar Khalji'],
  ['Krishna I', 'Krishna I'], ['Sanchi', 'Sanchi'],
  ['Bharhut', 'Bharhut'], ['Amaravati', 'Amaravati'],
  ['Nagarjunakonda', 'Nagarjunakonda'], ['Karle', 'Karle'],
  ['Barabar', 'Barabar'], ['Ajivikas', 'Ajivikas'],
  ['Dhamek', 'Dhamek'], ['anda', 'anda'], ['harmika', 'harmika'],
  ['chhatra', 'chhatra'], ['medhi', 'medhi'], ['torana', 'torana'],
  ['Gandhara', 'Gandhara'], ['grey schist', 'grey schist'],
  ['Mathura red sandstone', 'red sandstone'],
  ['Padmapani', 'Padmapani'], ['Vajrapani', 'Vajrapani'],

  /* minerals: the classes and the belts */
  ['Dharwar', 'Dharwar'], ['Aravalli', 'Aravalli'],
  ['GSI', '1851'], ['IBM', '1948'], ['NMDC', '1958'],
  ['Kolkata', 'Kolkata'], ['Nagpur', 'Nagpur'], ['Hyderabad', 'Hyderabad'],
  ['MMDR', 'Act, 1957'],

  /* iron ore, by grade */
  ['magnetite', '70 per cent'], ['hematite', '60 to 70'],
  ['limonite', '40 to 60'], ['siderite', 'under 40'],
  ['Bailadila', 'Bailadila'], ['Visakhapatnam', 'Visakhapatnam'],
  ['Kudremukh', 'Kudremukh'], ['Mangaluru', 'Mangaluru'],
  ['Noamundi', 'Noamundi'], ['Joda', 'Joda'], ['Barbil', 'Barbil'],

  /* mineral by mineral */
  ['Panchpatmali', 'Panchpatmali'], ['Koraput', 'Koraput'],
  ['Sukinda', 'Sukinda'], ['Koderma', 'Koderma'],
  ['Malanjkhand', 'Malanjkhand'], ['Khetri', 'Khetri'],
  ['Singhbhum', 'Singhbhum'], ['Kolar closed', '2001'],
  ['Hutti', 'Hutti'], ['Zawar', 'Zawar'],
  ['Rampura Agucha', 'Rampura Agucha'], ['Panna', 'Panna'],
  ['Degana', 'Degana'],

  /* coal */
  ['anthracite', '80 to 95'], ['bituminous', '60 to 80'],
  ['lignite', '40 to 55'], ['peat', 'under 40'],
  ['Gondwana age', '250 million years'], ['Gondwana share', '96 to 98'],
  ['tertiary age', '55 million years'],
  ['Jharia', 'Jharia'], ['Raniganj', 'Raniganj'], ['Neyveli', 'Neyveli'],

  /* oil, gas, the atom and power */
  ['Mumbai High found', '1974'], ['Mumbai High producing', '1976'],
  ['Sagar Samrat', 'Sagar Samrat'], ['Digboi refinery', '1901'],
  ['Jamnagar', 'Jamnagar'], ['Ankleshwar', 'Ankleshwar'],
  ['Naharkatiya', 'Naharkatiya'], ['Barmer', 'Barmer'],
  ['HVJ', 'Jagdishpur'], ['Jaduguda', 'Jaduguda'],
  ['Tummalapalle', 'Tummalapalle'], ['monazite', 'monazite'],
  ['Tarapur', '1969'], ['Kudankulam', 'Kudankulam'],
  ['Manikaran', 'Manikaran'], ['Puga', 'Puga'],
  ['Khambhat', 'Khambhat'], ['Kachchh', 'Kachchh'],
  ['TISCO', '1907'], ['Bhilai', 'Bhilai'], ['Rourkela', 'Rourkela'],
  ['Durgapur', 'Durgapur'], ['Bokaro', 'Bokaro']
]}

];

let bad = 0, total = 0;
SETS.forEach(S => {
  const notes = setProse(S.id), maps = mapProse(S.maps);
  S.pairs.forEach(([label, s]) => {
    total++;
    const inNotes = notes.includes(s), inMaps = maps.includes(s);
    if (!inNotes || !inMaps) {
      bad++;
      console.log('MISMATCH  ' + S.id + '  ' + label.padEnd(26) + ' "' + s + '"' +
        '  notes:' + (inNotes ? 'yes' : 'NO ') + '  maps:' + (inMaps ? 'yes' : 'NO '));
    }
  });
});
console.log(bad ? '\n' + bad + ' of ' + total + ' figures do not appear in both'
                : 'All ' + total + ' figures agree between the notes and the maps');

/* And the things that must NOT be there: a figure I may have fat-fingered. */
const ALL = SETS.map(S => setProse(S.id) + ' \n ' + mapProse(S.maps)).join(' \n ');
const SUSPECT = [
  ['literacy must not be 74.4', /74\.4[^0-9]/],
  ['sex ratio must not be 940', /\b940\b/],
  ['growth must not be 17.7 per cent written as 17.07', /17\.07/],
  ['the goals are 17, never 16 goals', /\b16 goals\b/],
  ['targets are 169, never 196', /\b196 targets\b/],
  /* the Buddha died at 80 in 483 BCE; 487 and 544 are other traditions
     the site does not use, and mixing them in is the likely slip */
  ['the Buddha dies in 483 BCE, not 487', /\b487 BCE\b/],
  ['Ellora has 34 caves, not 32', /\b32 caves\b/],
  ['the Jatakas are 547, not 357', /\b357\b/],
  ['anthracite is 80 to 95 per cent, not 90 to 95', /\b90 to 95\b/],
  ['Gondwana coal is 96 to 98 per cent, not 66 to 68', /\b66 to 68\b/],
  ['Digboi is 1901, not 1910', /Digboi[^.]{0,40}1910/],
  ['Tarapur is 1969, not 1959', /Tarapur[^.]{0,40}1959/]
];
let suspect = 0;
SUSPECT.forEach(([label, re]) => {
  if (re.test(ALL)) { suspect++; console.log('SUSPECT   ' + label); }
});

if (bad || suspect) process.exit(1);
