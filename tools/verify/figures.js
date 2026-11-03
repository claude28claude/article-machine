/* Every figure in a daily set is also in the mind maps written beside it. If
   the two disagree, one of them is wrong - so assert each pairing rather than
   trusting that I copied them across correctly. */
global.window = {};
const D = require('path').join(__dirname, '..', '..') + require('path').sep;
['data-daily.js', 'data-gk-maps.js', 'data-econ-maps.js', 'data-early-maps.js',
 'data-geo-maps.js', 'data-hist-maps.js'].forEach(f => require(D + f));
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

/* A leaf is a pair - a key and the text beside it - and a table row is the
   same shape. The two halves are one fact, so they go on ONE line. Keeping
   them together is what lets a date check ask for the name and the year
   together instead of merely asking whether the year appears somewhere. */
function flat(o, out) {
  out = out || [];
  if (typeof o === 'string') out.push(o);
  else if (Array.isArray(o)) {
    if (o.length === 2 && typeof o[0] === 'string' && typeof o[1] === 'string')
      out.push(o[0] + ' = ' + o[1]);
    else o.forEach(x => flat(x, out));
  }
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

/* Each row: a label, and the string - or pattern - that must appear in BOTH
   the set's prose and the maps written beside it. A figure in only one of the
   two is the thing to catch. */

/* A bare year is a weak probe. 1878 is The Hindu, the Vernacular Press Act
   AND the day Amrita Bazar Patrika went English overnight, so moving any one
   of them leaves 1878 in the prose and the mismatch hides. This asks for the
   name and the year on the same LINE, in whichever order that side writes
   them - which is why a leaf has to stay on one line above. */
function yr(name, year) {
  const n = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp('(' + n + '[^\\n]{0,170}' + year +
                    '|' + year + '[^\\n]{0,170}' + n + ')');
}

/* The dates of the 6 November set, in one place, because each is checked
   twice: once that the notes and the maps agree, and once that nothing
   inside either of them dates the same thing differently. */
const NOV6_DATES = [
  ['Bengal Gazette', '1780'], ['Bengal Gazetti', '1816'], ['Samachar Darpan', '1818'],
  ['Sambad Kaumudi', '1821'], ['Mirat-ul-Akhbar', '1822'], ['Bombay Samachar', '1822'],
  ['Darpan', '1832'], ['Rast Goftar', '1851'], ['Indian Mirror', '1861'],
  ['Amrita Bazar Patrika', '1868'], ['Bangadarshan', '1872'], ['The Hindu', '1878'],
  ['The Tribune', '1881'], ['Kesari', '1881'], ['Mahratta', '1881'],
  ['Swadeshamitran', '1882'], ['Bande Mataram', '1906'], ['Yugantar', '1906'],
  ['Sandhya', '1906'], ['Indian Opinion', '1903'], ['Harijan', '1933'],
  ['Al-Hilal', '1912'], ['Al-Balagh', '1915'], ['Comrade', '1911'],
  ['Hamdard', '1913'], ['The Leader', '1909'], ['The Independent', '1919'],
  ['National Herald', '1938'], ['Mooknayak', '1920'], ['Bahishkrit Bharat', '1927'],
  ['Pratap', '1913'], ['Bombay Chronicle', '1913'], ['Censorship of Press Act', '1799'],
  ['Licensing Regulations', '1823'], ['Metcalfe', '1835'], ['Registration', '1867'],
  ['Vernacular Press Act', '1878'], ['Indian Press Act', '1910'], ["Landholders' Society", '1838'],
  ['Bengal British India Society', '1843'], ['British Indian Association', '1851'], ['East India Association', '1866'],
  ['Poona Sarvajanik Sabha', '1870'], ['Indian League', '1875'], ['Indian Association', '1876'],
  ['Madras Mahajana Sabha', '1884'], ['Bombay Presidency Association', '1885'], ['Atmiya Sabha', '1815'],
  ['Brahmo Sabha', '1828'], ['Tattvabodhini Sabha', '1839'], ['Rahnumai Mazdayasnan Sabha', '1851'],
  ['Prarthana Samaj', '1867'], ['Arya Samaj', '1875'], ['Theosophical Society', '1875'],
  ['Ramakrishna Mission', '1897'], ['Belur Math', '1899'], ['Chicago', '1893'], ['Chicago', '1893'], ['Servants of India Society', '1905'],
  ['Satyashodhak Samaj', '1873'], ['Self-Respect Movement', '1925'], ['SNDP Yogam', '1903'],
  ['Bahishkrit Hitakarini Sabha', '1924'], ['MAO College', '1875'], ['AMU', '1920'],
  ['Deoband', '1866'], ['Ahmadiya', '1889'], ['Singh Sabha', '1873'],
  ['Anushilan Samiti', '1902'], ['Abhinav Bharat', '1904'], ['India House', '1905'],
  ['Jugantar', '1906'], ['Ghadar Party', '1913'], ['HRA', '1924'],
  ['Kakori', '1925'], ['HSRA', '1928'], ['Naujawan Bharat Sabha', '1926'],
  ['Khudai Khidmatgar', '1929'], ['Muslim League', '1906'], ['Hindu Mahasabha', '1915'],
  ['Justice Party', '1916'], ['AITUC', '1920'], ['Swaraj Party', '1923'],
  ['RSS', '1925'], ['Congress Socialist Party', '1934'], ['All India Kisan Sabha', '1936'],
  ['Forward Bloc', '1939']
];

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
  ['Durgapur', 'Durgapur'], ['Bokaro', 'Bokaro'],

  /* the people and the places, so a rename cannot pass */
  ['Siddhartha Gautama', 'Siddhartha Gautama'], ['Uruvela', 'Uruvela'], ['Deer Park', 'Deer Park'],
  ['Mahaparinirvana', 'Mahaparinirvana'], ['Sutta Pitaka', 'Sutta Pitaka'], ['Vinaya Pitaka', 'Vinaya Pitaka'],
  ['Abhidhamma', 'Abhidhamma'], ['Shravasti', 'Shravasti'], ['Bimbisara', 'Bimbisara'],
  ['Prasenjit', 'Prasenjit'], ['Udayana', 'Udayana'], ['Saptaparni cave', 'Saptaparni cave'],
  ['Vijnanavada', 'Vijnanavada'], ['Menander', 'Menander'], ['Nagasena', 'Nagasena'],
  ['Dhamek stupa', 'Dhamek stupa'], ['Hiuen Tsang', 'Hiuen Tsang'], ['Odantapuri', 'Odantapuri'],
  ['Sri Lanka', 'Sri Lanka'], ['Dharwar system', 'Dharwar system'], ['Neyveli', 'Neyveli'],
  ['Sukinda', 'Sukinda'], ['Digboi', 'Digboi'], ['Moran', 'Moran'],
  ['Kalol', 'Kalol'], ['Mehsana', 'Mehsana'], ['Krishna-Godavari', 'Krishna-Godavari'],
  ['Cauvery', 'Cauvery'], ['Hazira', 'Hazira'], ['Vijaipur', 'Vijaipur'],
  ['Rawatbhata', 'Rawatbhata'], ['Kalpakkam', 'Kalpakkam'], ['Narora', 'Narora'],
  ['Kakrapar', 'Kakrapar'], ['Kaiga', 'Kaiga'], ['Jamshedpur', 'Jamshedpur']

]},

{ id: '6-november',
  maps: [['HIST_MAPS', 'press'], ['HIST_MAPS', 'bodies']],
  pairs: [
  /* the papers */
  ['Hicky', 'James Augustus Hicky'], ['first paper', '1780'],
  ['Bengal Gazetti', 'Gangadhar Bhattacharya'], ['Indian-owned', '1816'],
  ['Samachar Darpan', 'Samachar Darpan'], ['Serampore', 'Serampore'],
  ['Mirat-ul-Akhbar', 'Mirat-ul-Akhbar'],
  ['Bombay Samachar', 'Fardunjee Marzban'], ['Mumbai Samachar', 'Mumbai Samachar'],
  ['Darpan', 'Balshastri Jambhekar'], ['Rast Goftar', 'Rast Goftar'], ['Indian Mirror', 'Devendranath Tagore'],
  ['Amrita Bazar', 'Amrita Bazar Patrika'], ['Ghosh brothers', '1868'],
  ['Bangadarshan', 'Bankim Chandra'], ['The Hindu', 'G. Subramania Iyer'],
  ['Swadeshamitran', 'Swadeshamitran'], ['Tribune', 'Dyal Singh Majithia'],
  ['Kesari', 'Kesari'], ['Mahratta', 'Mahratta'], ['Agarkar', 'Agarkar'],
  ['Bande Mataram', 'Bipin Chandra Pal'], ['Yugantar', 'Barindra Kumar Ghosh'],
  ['Sandhya', 'Brahmabandhab Upadhyay'],
  ['Indian Opinion', 'Indian Opinion'], ['Young India', 'Young India'],
  ['Navajivan', 'Navajivan'], ['Harijan', 'Harijan'],
  ['Al-Hilal', 'Al-Hilal'], ['Al-Balagh', 'Al-Balagh'],
  ['Comrade', 'Comrade'], ['Hamdard', 'Hamdard'],
  ['New India', 'New India'], ['Commonweal', 'Commonweal'],
  ['The Leader', 'Abhyudaya'], ['Independent', 'The Independent'],
  ['National Herald', 'National Herald'], ['Mooknayak', 'Mooknayak'],
  ['Bahishkrit Bharat', 'Bahishkrit Bharat'], ['Pratap', 'Pratap'],
  ['Bombay Chronicle', 'Horniman'], ['Indian Sociologist', 'Indian Sociologist'],
  ['Ghadar paper', 'Ghadar'], ['Talvar', 'Virendranath Chattopadhyay'],
  ['Free Hindustan', 'Taraknath Das'],

  /* the press Acts */
  ['Wellesley', 'Wellesley'],
  ['John Adam', 'John Adam'],
  ['Metcalfe', 'Metcalfe'], ['Vernacular Press Act', 'Vernacular Press Act'], ['Lytton', 'Lytton'], ['Ripon', 'Ripon'],
  ['Minto II', 'Minto II'], ['emergency powers', '1931'],

  /* before the Congress */
  ["Landholders' Society", "Landholders' Society"], ['British Indian Association', 'British Indian Association'],
  ['Debendranath Tagore', 'Debendranath Tagore'],
  ['East India Association', 'East India Association'], ['Poona Sarvajanik Sabha', 'Poona Sarvajanik Sabha'], ['Ranade', 'Ranade'],
  ['Indian League', 'Indian League'],
  ['Indian Association', 'Surendranath Banerjee'], ['Anandamohan Bose', 'Anandamohan Bose'],
  ['Madras Mahajana Sabha', 'Madras Mahajana Sabha'], ['Bombay Presidency Association', 'Bombay Presidency Association'],
  ['Telang', 'Telang'], ['Tyabji', 'Tyabji'],
  ['Indian National Conference', 'Indian National Conference'],
  ['merged', '1886'],

  /* the reform societies */
  ['Atmiya Sabha', 'Atmiya Sabha'], ['Brahmo Sabha', 'Brahmo Sabha'], ['Derozio', 'Henry Vivian Derozio'], ['Hindu College', 'Hindu College'],
  ['Tattvabodhini', 'Tattvabodhini Sabha'],
  ['Rahnumai', 'Rahnumai Mazdayasnan Sabha'],
  ['Prarthana Samaj', 'Atmaram Pandurang'], ['Bhandarkar', 'Bhandarkar'],
  ['Arya Samaj', 'Dayanand Saraswati'], ['the slogan', 'Back to the Vedas'],
  ['Satyarth Prakash', 'Satyarth Prakash'], ['Shuddhi', 'Shuddhi'],
  ['Theosophical', 'Blavatsky'], ['Olcott', 'Olcott'], ['Adyar', 'Adyar'],
  ['Ramakrishna Mission', 'Ramakrishna Mission'], ['Belur', 'Belur Math'],
  ['Vivekananda', 'Vivekananda'],
  ['Servants of India', 'Servants of India Society'], ['Gokhale', 'Gokhale'],
  ['Satyashodhak', 'Satyashodhak Samaj'], ['Gulamgiri', 'Gulamgiri'],
  ['Periyar', 'Periyar'], ['Self-Respect', 'Self-Respect Movement'],
  ['SNDP', 'SNDP Yogam'], ['Narayana Guru', 'Sri Narayana Guru'],
  ['the maxim', 'one caste, one religion, one God for man'],
  ['Aligarh', 'Sir Syed Ahmed Khan'], ['MAO College', 'MAO College'], ['Deoband', 'Nanautavi'], ['Gangohi', 'Gangohi'],
  ['Ahmadiya', 'Mirza Ghulam Ahmad'], ['Singh Sabha', 'Singh Sabha'],
  ['Bahishkrit Hitakarini', 'Bahishkrit Hitakarini Sabha'],

  /* the revolutionary and political bodies */
  ['Anushilan', 'Anushilan Samiti'], ['Satish Chandra Basu', 'Satish Chandra Basu'],
  ['Pramathanath Mitra', 'Pramathanath Mitra'],
  ['Abhinav Bharat', 'Abhinav Bharat'], ['Savarkar', 'Savarkar'],
  ['India House', 'India House'], ['Shyamji', 'Shyamji Krishna Varma'],
  ['Jugantar', 'Bagha Jatin'],
  ['Ghadar Party', 'Sohan Singh Bhakna'], ['Har Dayal', 'Lala Har Dayal'],
  ['San Francisco', 'San Francisco'],
  ['Muslim League', 'Nawab Salimullah'], ['Aga Khan', 'Aga Khan'],
  ['Dhaka', 'Dhaka'],
  ['Hindu Mahasabha', 'Hindu Mahasabha'],
  ['Justice Party', 'Theagaraya Chetty'], ['T. M. Nair', 'T. M. Nair'],
  ['Home Rule Tilak', 'April'], ['Home Rule Besant', 'September'],
  ['Berar', 'Berar'],
  ['AITUC', 'AITUC'], ['first president', 'Lala Lajpat Rai'],
  ['Swaraj Party', 'Swaraj Party'], ['C. R. Das', 'C. R. Das'],
  ['HRA', 'Kanpur'], ['Bismil', 'Bismil'], ['Kakori', 'Kakori'],
  ['HSRA', 'Feroz Shah Kotla'], ['Azad', 'Chandrashekhar Azad'],
  ['Bhagat Singh', 'Bhagat Singh'],
  ['Naujawan', 'Naujawan Bharat Sabha'], ['Lahore', 'Lahore'],
  ['Khudai Khidmatgar', 'Khudai Khidmatgar'], ['Ghaffar Khan', 'Khan Abdul Ghaffar Khan'],
  ['CPI', 'Tashkent'], ['M. N. Roy', 'M. N. Roy'],
  ['RSS', 'Hedgewar'], ['Nagpur', 'Nagpur'],
  ['CSP', 'Jayaprakash Narayan'], ['Narendra Dev', 'Narendra Dev'],
  ['Kisan Sabha', 'Swami Sahajanand Saraswati'],
  ['Forward Bloc', 'Forward Bloc'], ['Bose', 'Subhas Chandra Bose'],
  ['INA', 'Mohan Singh'], ['Azad Hind', '21 October 1943'],
  ['Singapore', 'Singapore'],

  /* every year bound to the thing it dates */
  ...NOV6_DATES.map(([n, y]) => [n + ' ' + y, yr(n, y)])
,

  /* the people and the titles, so a rename cannot pass */
  ['Ram Mohan Roy', 'Ram Mohan Roy'], ['Gopal Ganesh Agarkar', 'Gopal Ganesh Agarkar'], ['Jambhekar', 'Jambhekar'],
  ['Janata', 'Janata'], ['Dadabhai Naoroji', 'Dadabhai Naoroji'], ['Voice of India', 'Voice of India'],
  ['Vande Mataram', 'Vande Mataram'], ['Aurobindo Ghosh', 'Aurobindo Ghosh'], ['B. G. Horniman', 'B. G. Horniman'],
  ['Metcalfe Act', 'Metcalfe Act'], ['Liberator of the Indian Press', 'Liberator of the Indian Press'], ['Canning', 'Canning'],
  ['Registration Act', 'Registration Act'], ['Gagging Act', 'Gagging Act'], ['Civil Disobedience', 'Civil Disobedience'],
  ['M. G. Ranade', 'M. G. Ranade'], ['Sisir Kumar Ghosh', 'Sisir Kumar Ghosh'], ['Jyotiba Phule', 'Jyotiba Phule'],
  ['E. V. Ramasamy', 'E. V. Ramasamy'], ['Ambedkar', 'Ambedkar'], ['Scientific Society', 'Scientific Society'],
  ['Amritsar', 'Amritsar'], ['Nasik', 'Nasik'], ['V. D. Savarkar', 'V. D. Savarkar'],
  ['Sanyal', 'Sanyal'], ['Red Shirts', 'Red Shirts'], ['Malaviya', 'Malaviya'],
  ['P. Theagaraya Chetty', 'P. Theagaraya Chetty'], ['Motilal Nehru', 'Motilal Nehru'], ['Gaya', 'Gaya'],
  ['K. B. Hedgewar', 'K. B. Hedgewar'], ['Lucknow Pact', 'Lucknow Pact'], ['New York', 'New York']

]}
];

let bad = 0, total = 0;
SETS.forEach(S => {
  const notes = setProse(S.id), maps = mapProse(S.maps);
  S.pairs.forEach(([label, s]) => {
    total++;
    const has = x => (s instanceof RegExp ? s.test(x) : x.includes(s));
    const inNotes = has(notes), inMaps = has(maps);
    if (!inNotes || !inMaps) {
      bad++;
      console.log('MISMATCH  ' + S.id + '  ' + label.padEnd(30) +
        ' ' + (s instanceof RegExp ? String(s) : '"' + s + '"') +
        '  notes:' + (inNotes ? 'yes' : 'NO ') + '  maps:' + (inMaps ? 'yes' : 'NO '));
    }
  });
});
console.log(bad ? '\n' + bad + ' of ' + total + ' figures do not appear in both'
                : 'All ' + total + ' figures agree between the notes and the maps');

/* A figure written twice - once in a sentence, once in a table row - can be
   changed in one place only, and the check above still passes, because the
   other copy answers for it. So the dates are checked again from the other
   side: on every line that DEFINES one of them, it must be the same date.

   Defines, not mentions. Prose cross-refers constantly - the 1823 Act line
   says Mirat-ul-Akhbar closed, the Amrita Bazar line says it went English in
   1878 - and treating those as dates for those papers gave 28 false alarms
   and nothing true. A definition is narrower: a table row or a map leaf,
   which flat() has already joined as "key = value", with the thing on the
   KEY side. That is the one place where a date is being asserted. */
const NOV6 = (setProse('6-november') + ' \n ' +
              mapProse([['HIST_MAPS', 'press'], ['HIST_MAPS', 'bodies']]))
             .split('\n');
const YEAR = /\b1[789]\d\d\b/;
let crossed = 0;
NOV6_DATES.forEach(([name, year]) => {
  /* "Darpan" sits inside "Samachar Darpan", and "Indian Association" inside
     "British Indian Association" - two different papers and two different
     bodies, each with its own date. Take the longer names out of the line
     before looking for the shorter one. */
  const longer = NOV6_DATES
    .map(d => d[0])
    .filter(o => o !== name && o.indexOf(name) >= 0);
  NOV6.forEach(raw => {
    /* Two shapes define a thing. A row or leaf, which flat() has joined as
       "key = value", with the thing on the key side; or a note that OPENS by
       naming it, which is how the prose introduces one. A name further into
       a sentence is a cross-reference - the 1823 Act line says Mirat-ul-Akhbar
       closed - and reading those as dates gave 28 false alarms and nothing
       true, so only the opening counts. */
    const cut = raw.indexOf(' = ');
    let key = cut >= 0 ? raw.slice(0, cut) : raw.trimStart().slice(0, 34);
    longer.forEach(o => { key = key.split(o).join(''); });
    if (key.indexOf(name) < 0) return;               /* defines something else */
    /* A date in the table is when the thing began. A line keyed by a LATER
       event is dating that event, not the beginning: "1882 . Vernacular
       Press Act repealed = Ripon" is the repeal, and giving it 1878 would
       be the error. */
    if (/(repeal|reorganis|renam|merg|becam|revive|split|closed|turned|overnight)/i.test(key)) return;
    /* The date may be on either side: a map leaf is keyed by the year
       ("1835 . Press Act (Metcalfe Act) = Metcalfe"), a table row by the
       thing. So the subject is read from the key and the date from the
       whole line. */
    if (!YEAR.test(raw)) return;                     /* dates nothing */
    if (raw.indexOf(year) >= 0) return;              /* and dates it right */
    /* A row may be keyed by several things and dated for one of them -
       "Mooknayak, Bahishkrit Bharat, Janata = Ambedkar, from 1920" is
       Mooknayak's date, honestly given. If another dated thing on the line
       owns the year, this is not a disagreement. */
    const owned = NOV6_DATES.some(([n2, y2]) =>
      n2 !== name && raw.indexOf(n2) >= 0 && raw.indexOf(y2) >= 0);
    if (owned) return;
    crossed++;
    console.log('DATED TWICE  ' + (name + ' is ' + year).padEnd(34) +
                ' but a line reads: ' + raw.trim().slice(0, 88));
  });
});

/* The four papers printed abroad, and four cities. Each of the cities is in
   the prose whatever happens, so "does San Francisco appear" cannot see the
   Ghadar press moved to Vancouver - only asking whether a paper sits with
   somebody ELSE'S city can. */
const CITIES = [['Ghadar', 'San Francisco'], ['Talvar', 'Berlin'],
                ['Free Hindustan', 'Vancouver'],
                ['Indian Sociologist', 'London']];
CITIES.forEach(([paper, city]) => {
  const others = CITIES.map(c => c[1]).filter(c => c !== city);
  let seen = false;
  NOV6.forEach(raw => {
    const cut = raw.indexOf(' = ');
    if (cut < 0 || raw.slice(0, cut).indexOf(paper) < 0) return;
    const val = raw.slice(cut);
    if (val.indexOf(city) >= 0) seen = true;
    others.forEach(o => {
      if (val.indexOf(o) >= 0) {
        crossed++;
        console.log('WRONG CITY   ' + (paper + ' is ' + city).padEnd(34) +
                    ' but a line gives it ' + o);
      }
    });
  });
  if (!seen) {
    crossed++;
    console.log('NO CITY      ' + paper + ' is nowhere given as ' + city);
  }
});

if (!crossed) console.log('each of the ' + NOV6_DATES.length +
  ' dates is given the same way wherever it is defined, and the four papers ' +
  'printed abroad sit with their own cities');

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
  ['Tarapur is 1969, not 1959', /Tarapur[^.]{0,40}1959/],
  /* the Vernacular Press Act is 1878 and Lytton's; giving it to Ripon,
     who REPEALED it, is the likeliest slip in the whole set */
  ['the Vernacular Press Act is 1878, not 1876', /Vernacular Press Act[^.]{0,30}1876/],
  ['Ripon repealed the VPA, he did not pass it', /Ripon[^.]{0,30}passed the Vernacular/],
  ['the Congress is 1885, never 1883', /Congress[^.]{0,20}founded[^.]{0,20}1883/],
  ['the Muslim League is 1906, not 1905', /Muslim League[^.]{0,20}1905/]
];
let suspect = 0;
SUSPECT.forEach(([label, re]) => {
  if (re.test(ALL)) { suspect++; console.log('SUSPECT   ' + label); }
});

if (bad || crossed || suspect) process.exit(1);
