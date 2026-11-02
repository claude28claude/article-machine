/* The Article Machine - data-gk-maps.js
   The Static GK mind maps: twelve, grouping the twenty-three packs, and an
   overview whose branches open them.

   Nothing here is new. Every line is taken from the tables in data-gk.js,
   which is where the facts are checked and where the fuller statement of each
   one lives. Static GK is a long list of facts to recognise; a map is the
   part of that list which is actually asked, cut to the words the question
   turns on.

   Fields:  GK_MAPS                   the overview map
              hub, sub                the centre of the map
              br[]                    branches: h title, to (a map id: the
                                      branch opens that map), lv leaves,
                                      m an optional memory hook
            GK_MAPS.topics[id]        one map per group, same shape, no `to`

   A leaf is a string, or [key, text]. The key is the PROMPT - a symbol, a
   cup, a date, an instrument - and it stays visible when the map is covered
   for recall; the text is the answer and is what gets covered. ==text== marks
   the words the question turns on.                                        */

window.GK_MAPS = {

hub: "Static GK",
sub: "Twelve maps over twenty-three packs",
br: [
  { h: "National symbols", to: "symbols",
    lv: [["The flag", "adopted ==22 July 1947==, ratio ==3:2==, from ==Pingali Venkayya's== design"],
         ["The emblem", "the ==Lion Capital at Sarnath== — ==four== lions, ==three== ever visible"],
         ["The anthem", "==Jana Gana Mana==, Tagore — ==fifty-two seconds=="],
         ["What India has not got", "==no national game==, ==no national language=="]] },

  { h: "Dance, music, festivals", to: "arts",
    lv: [["The classical eight", "==Sattriya== is the one people miss — classical only since ==2000=="],
         ["Kathak", "the only form with ==both Hindu and Muslim== court lineages"],
         ["Harvest festivals", "almost all in the ==same fortnight of January=="],
         ["Durga Puja", "on the ==UNESCO== intangible heritage list since ==2021=="]] },

  { h: "Awards and prizes", to: "awards",
    lv: [["The order", "Bharat Ratna, ==Padma Vibhushan==, Padma Bhushan, Padma Shri — all ==1954=="],
         ["Highest in war", "==Param Vir Chakra==; in peace, the ==Ashoka Chakra=="],
         ["Highest in cinema", "==Dadasaheb Phalke==, 1969 — first to ==Devika Rani=="],
         ["First Indian Nobel", "==Tagore==, ==Literature 1913=="]] },

  { h: "Sports", to: "sports",
    lv: [["Players a side", "kabaddi ==7==, volleyball ==6==, basketball ==5=="],
         ["The oldest", "==Durand Cup== 1888 in football; ==Beighton Cup== 1895 in hockey"],
         ["First individual gold", "==Abhinav Bindra==, Beijing ==2008=="],
         ["Paris 2024", "==6== Olympic medals; ==29== Paralympic, the ==best ever=="]] },

  { h: "Firsts and superlatives", to: "firsts",
    lv: [["First President", "==Rajendra Prasad== — the only one elected ==twice=="],
         ["First Indian in space", "==Rakesh Sharma==, ==1984==, on ==Soyuz T-11=="],
         ["Largest state", "==Rajasthan== by area, ==Uttar Pradesh== by population"],
         ["Tallest statue", "the ==Statue of Unity==, ==182 m== — the ==tallest in the world=="]] },

  { h: "Rivers, parks, monuments", to: "places",
    lv: [["Largest freshwater lake", "==Wular==; the longest is ==Vembanad=="],
         ["Asiatic lion", "==Gir== — the ==only wild population in the world=="],
         ["First national park", "==Jim Corbett==, ==1936==, as Hailey"],
         ["Qutb Minar", "begun by ==Qutb-ud-din Aibak==, completed by ==Iltutmish=="]] },

  { h: "Important days", to: "days",
    lv: [["26 November", "==Constitution Day=="],
         ["29 August", "==National Sports Day== — ==Dhyan Chand's== birthday"],
         ["5 September", "==Teachers' Day== — ==Radhakrishnan's== birthday"],
         ["21 June", "==International Day of Yoga=="]] },

  { h: "Books and authors", to: "books",
    lv: [["Arthashastra", "==Kautilya==, also called Chanakya"],
         ["Rajatarangini", "==Kalhana== — the kings of ==Kashmir=="],
         ["Hind Swaraj", "==Gandhi==, ==1909=="],
         ["Premchand", "the pen name of ==Dhanpat Rai Srivastava=="]] },

  { h: "Organisations", to: "orgs",
    lv: [["The UN Charter", "signed ==26 June 1945==, in force ==24 October 1945=="],
         ["The oldest agency", "the ==ITU==, ==1865=="],
         ["The ICJ", "==The Hague== — the ==only principal organ outside New York=="],
         ["SAARC", "==8 December 1985 at Dhaka==; secretariat ==Kathmandu=="]] },

  { h: "Instruments and units", to: "science",
    lv: [["Barometer", "==atmospheric pressure==; the ==anemometer== ==wind speed=="],
         ["The base units", "==seven== — metre, kilogram, second, ampere, kelvin, mole, candela"],
         ["Blood groups", "==Karl Landsteiner=="],
         ["The body", "==206== bones in an adult, ==46== chromosomes, ==32== teeth"]] },

  { h: "Space, nuclear, defence", to: "space",
    lv: [["ISRO", "founded ==15 August 1969== — ==Vikram Sarabhai=="],
         ["Aryabhata", "==19 April 1975==, launched by the ==Soviet Union=="],
         ["Chandrayaan-3", "landed ==23 August 2023==, near the ==lunar south pole=="],
         ["Mangalyaan", "Mars orbit at the ==first attempt==, ==24 September 2014=="]] },

  { h: "States and the world", to: "states",
    lv: [["Longest border", "with ==Bangladesh==, about ==4,096 km==; the shortest with ==Afghanistan=="],
         ["First linguistic state", "==Andhra, 1953==, after ==Potti Sriramulu's== fast"],
         ["Bhutan's currency", "the ==ngultrum==; the Maldives' the ==rufiyaa=="],
         ["Israel's parliament", "the ==Knesset==; Japan's the ==Diet=="]] }
],

topics: {

/* =============================================== NATIONAL SYMBOLS */
symbols: {
hub: "National symbols",
sub: "The flag, the emblem, the anthem, the list",
br: [
  { h: "The flag",
    lv: [["Adopted", "==22 July 1947==, by the ==Constituent Assembly== — ==three weeks== before independence"],
         ["Designed from", "the ==Swaraj flag== of ==Pingali Venkayya=="],
         ["Ratio", "==3:2==, length to width"],
         ["The wheel", "the ==Ashoka Chakra==, ==navy blue==, ==24 spokes==, from the ==Sarnath== capital"],
         ["", "it ==replaced the spinning wheel== of the Swaraj flag"],
         ["Governed by", "the ==Flag Code of India, 2002==, and the ==1971== Act on national honour"]] },

  { h: "The emblem",
    lv: [["Adopted", "==26 January 1950=="],
         ["Taken from", "the ==Lion Capital of Ashoka at Sarnath==, carved about ==250 BCE=="],
         ["The lions", "==four==, back to back — but only ==three are ever visible=="],
         ["The motto", "==Satyameva Jayate==, from the ==Mundaka Upanishad==, in ==Devanagari=="],
         ["Careful", "the motto is ==not part of the original capital== — it was ==added in 1950=="],
         ["On the abacus", "an ==elephant, a bull, a horse and a lion==, separated by wheels"]],
    m: "Four lions, three visible, and a motto the sculptor never carved." },

  { h: "Anthem and song",
    lv: [["Jana Gana Mana", "==Tagore==; first sung ==27 December 1911==, Calcutta session"],
         ["", "adopted ==24 January 1950==; written in ==Bengali== as ==Bharoto Bhagyo Bidhata=="],
         ["Playing time", "==fifty-two seconds== in full; about ==twenty== for the short version"],
         ["Vande Mataram", "==Bankim Chandra==, in ==Anandamath, 1882==; first sung ==1896=="],
         ["Their status", "==equal== — Rajendra Prasad's statement of ==24 January 1950=="]] },

  { h: "The rest of the list",
    lv: [["Animal", "==Royal Bengal Tiger==, ==1973== — it ==replaced the lion=="],
         ["Bird", "==Indian Peacock==, ==1963=="],
         ["River", "==Ganga==, declared ==2008==; the ==aquatic animal== the ==Gangetic dolphin==, 2009"],
         ["Heritage animal", "the ==Indian elephant==, ==2010=="],
         ["Flower, tree, fruit", "==lotus==, ==banyan==, ==mango=="],
         ["Calendar", "the ==Saka== calendar, ==22 March 1957== — first month ==Chaitra==, era from ==78 CE=="]] },

  { h: "What India does NOT have",
    lv: [["No national game", "==hockey is assumed==, but ==none has ever been declared=="],
         ["No national language", "==Hindi is the official language== of the Union under ==343=="],
         ["", "=='official' is not 'national'== — the Constitution ==never uses the second word=="],
         ["No national dish, dress or vegetable", "==none has ever been declared=="]] }
]},

/* ================================= DANCE, MUSIC AND FESTIVALS */
arts: {
hub: "Dance, music, festivals",
sub: "The classical eight, and the calendar",
br: [
  { h: "The eight classical dances",
    lv: [["Bharatanatyam", "==Tamil Nadu== — the ==oldest==, temple-born; revived by ==Rukmini Devi Arundale=="],
         ["Kathak", "==Uttar Pradesh== — the ==only== form with ==both Hindu and Muslim== court lineages"],
         ["Kathakali", "==Kerala== — story-play, heavy make-up, traditionally ==all-male=="],
         ["Mohiniyattam", "==Kerala== — solo, by women: the ==dance of the enchantress=="],
         ["Kuchipudi", "==Andhra Pradesh== — danced drama, with ==speech and song by the dancer=="],
         ["Odissi", "==Odisha== — ==tribhanga==, the three-bend posture"],
         ["Manipuri", "==Manipur== — ==Ras Leela==, and ==no sharp foot-strikes=="],
         ["Sattriya", "==Assam==, from ==Sankardeva's== monasteries — classical only since ==2000=="]],
    m: "Sattriya is the one people miss, because it was added last." },

  { h: "Folk dances by state",
    lv: [["Punjab", "==Bhangra== (men), ==Giddha== (women)"],
         ["Gujarat", "==Garba==, ==Dandiya Raas==; ==Rajasthan== ==Ghoomar== and ==Kalbelia=="],
         ["Maharashtra", "==Lavani==, Tamasha"],
         ["Assam", "==Bihu=="],
         ["Chhau", "==three states== — Purulia (==West Bengal==), Seraikella (==Jharkhand==), Mayurbhanj (==Odisha==)"],
         ["Mizoram", "==Cheraw==, the bamboo dance"]] },

  { h: "Music",
    lv: [["The two systems", "==Hindustani== in the north, ==Carnatic== in the south — split about the ==13th century=="],
         ["Carnatic trinity", "==Tyagaraja==, Muthuswami Dikshitar, Syama Sastri"],
         ["The foundational text", "the ==Natya Shastra==, of ==Bharata Muni=="],
         ["Shehnai", "==Bismillah Khan==; ==sarod== ==Amjad Ali Khan==; ==santoor== ==Shivkumar Sharma=="],
         ["Flute", "==Hariprasad Chaurasia==; ==tabla== ==Zakir Hussain=="]] },

  { h: "UNESCO intangible heritage",
    lv: [["2008", "==Kutiyattam==, ==Vedic chanting==, ==Ramlila=="],
         ["2010", "==Chhau==, ==Kalbelia==, Mudiyettu"],
         ["2016", "==Yoga=="],
         ["2017", "the ==Kumbh Mela=="],
         ["2021", "==Durga Puja== in Kolkata"]] },

  { h: "The festivals",
    lv: [["The January fortnight", "==Makar Sankranti==, ==Pongal==, ==Lohri==, ==Magh Bihu== — almost all together"],
         ["Fixed to the sun", "==Makar Sankranti== (14 or 15 Jan) and ==Baisakhi== (13 or 14 Apr) — ==every other== is lunar"],
         ["Onam", "==Kerala==, ==August–September== — for ==King Mahabali==. ==Not== January"],
         ["Hornbill", "==Nagaland==, ==1 to 10 December== — the ==Festival of Festivals=="],
         ["Chhath", "==Bihar==, ==four days==, to the ==setting then the rising== sun"],
         ["Kumbh Mela", "the ==largest religious gathering in the world== — Prayagraj, Haridwar, Ujjain, Nashik"],
         ["The three national festivals", "==Republic Day, Independence Day, Gandhi Jayanti== — the ==only three=="]] }
]},

/* =============================================== AWARDS */
awards: {
hub: "Awards and prizes",
sub: "Civilian, gallantry, the Nobels",
br: [
  { h: "The civilian awards",
    lv: [["The order", "==Bharat Ratna==, Padma Vibhushan, Padma Bhushan, ==Padma Shri=="],
         ["Instituted", "==all four in 1954=="],
         ["First Bharat Ratna", "==C. Rajagopalachari, Radhakrishnan and C. V. Raman==, ==1954=="],
         ["First posthumous", "==Lal Bahadur Shastri==, ==1966=="],
         ["Youngest", "==Sachin Tendulkar==, ==2014==, at ==forty=="],
         ["Non-Indians", "==Khan Abdul Ghaffar Khan (1987)==, the first, and ==Nelson Mandela (1990)=="],
         ["How many a year", "==no more than three=="],
         ["Announced", "the Padma awards on ==Republic Day=="]] },

  { h: "Gallantry awards",
    lv: [["In war", "==Param Vir Chakra==, Maha Vir Chakra, Vir Chakra"],
         ["In peace", "==Ashoka Chakra==, Kirti Chakra, Shaurya Chakra"],
         ["Designed by", "==Savitri Khanolkar==, Swiss-born, who designed the ==Param Vir Chakra=="],
         ["First PVC", "==Major Somnath Sharma==, ==posthumously==, for ==Badgam==, 1947"],
         ["Careful", "the ==Ashoka Chakra== is the ==highest peacetime== award — ==not a lesser PVC=="]] },

  { h: "Literature and cinema",
    lv: [["Jnanpith", "the ==highest literary== award — instituted ==1961==, first awarded ==1965=="],
         ["", "to ==G. Sankara Kurup==, for ==Malayalam=="],
         ["Sahitya Akademi", "==1954=="],
         ["Dadasaheb Phalke", "the ==highest in cinema== — ==1969==, first to ==Devika Rani=="],
         ["First Indian Oscar", "==Bhanu Athaiya==, ==costume design==, ==Gandhi, 1983=="],
         ["", "==Satyajit Ray== received an ==honorary== Oscar in ==1992=="]] },

  { h: "Sports awards",
    lv: [["Khel Ratna", "the ==highest sporting honour== — ==1991–92==, renamed for ==Dhyan Chand== in ==2021=="],
         ["First recipient", "==Viswanathan Anand=="],
         ["Arjuna", "==1961==, for performance; ==Dronacharya== ==1985==, for ==coaches=="],
         ["Dhyan Chand Award", "==2002==, for ==lifetime contribution=="],
         ["National Sports Day", "==29 August== — ==Dhyan Chand's== birthday"]] },

  { h: "Nobel Prizes, and the rest",
    lv: [["Tagore", "==Literature, 1913== — the ==first non-European== to win it"],
         ["C. V. Raman", "==Physics, 1930==, for the ==Raman effect=="],
         ["Mother Teresa", "==Peace, 1979== — an Indian by ==naturalisation=="],
         ["Amartya Sen", "==Economic Sciences, 1998=="],
         ["Kailash Satyarthi", "==Peace, 2014==, with ==Malala=="],
         ["Booker", "==Rushdie 1981==, ==Arundhati Roy 1997==, Kiran Desai 2006, Aravind Adiga 2008"],
         ["International Booker", "==Geetanjali Shree==, ==Tomb of Sand, 2022== — the ==first in any Indian language=="],
         ["Magsaysay", "==1957==, ==Asia's Nobel== — ==Vinoba Bhave== the first Indian"]] }
]},

/* =============================================== SPORTS */
sports: {
hub: "Sports",
sub: "Terms, cups and the Olympics",
br: [
  { h: "Players a side, and the terms",
    lv: [["Eleven", "==cricket, football, hockey=="],
         ["Seven", "==kabaddi== and ==water polo==; ==six== ==volleyball==; ==five== ==basketball=="],
         ["Cricket", "==googly, yorker, bouncer, silly point, maiden over, LBW=="],
         ["Hockey", "==bully, penalty corner, short corner, astroturf=="],
         ["Kabaddi", "==raider, cant, lona, ant=="],
         ["Basketball", "==dunk, rebound, pivot, free throw=="]] },

  { h: "The team cups",
    lv: [["Badminton", "==Thomas== men, ==Uber== women, ==Sudirman== mixed"],
         ["Tennis", "==Davis== men, ==Billie Jean King== women (the old ==Fed Cup==)"],
         ["Table tennis", "==Swaythling== men, ==Corbillon== women"],
         ["Golf", "==Ryder== men, ==Solheim== women — ==USA against Europe=="],
         ["Football, India", "the ==Durand Cup==, ==1888== — the ==oldest in Asia=="],
         ["Hockey", "the ==Beighton Cup==, ==1895==, Kolkata — the ==oldest in the world=="],
         ["America's Cup", "==yachting==, ==1851== — the ==oldest international sporting trophy=="]],
    m: "Thomas men, Uber women; Davis men, Billie Jean King women; Swaythling men, Corbillon women." },

  { h: "Cricket",
    lv: [["World Cup", "since ==1975== — India won ==1983== (==Kapil Dev==, at ==Lord's==) and ==2011=="],
         ["T20 World Cup", "since ==2007== — India ==2007, 2024 and 2026==, the ==first to win it three times=="],
         ["Women's World Cup", "since ==1973== — ==two years before the men's==; India's first title ==2025=="],
         ["Ranji Trophy", "since ==1934-35==, named for ==Ranjitsinhji== — ==Mumbai== have won it most"],
         ["Duleep Trophy", "named for ==Duleepsinhji==, ==Ranjitsinhji's nephew=="],
         ["Border–Gavaskar", "India against ==Australia==; the ==Ashes== is ==England against Australia=="]] },

  { h: "India at the Olympics",
    lv: [["First individual medal", "==K. D. Jadhav==, ==wrestling==, ==Helsinki 1952=="],
         ["First individual gold", "==Abhinav Bindra==, ==10 m air rifle==, ==Beijing 2008=="],
         ["First woman medallist", "==Karnam Malleswari==, ==weightlifting==, ==Sydney 2000=="],
         ["Hockey", "==eight== Olympic golds, ==six in a row== from ==1928 to 1956=="],
         ["Neeraj Chopra", "==gold== in the javelin at ==Tokyo==, ==silver== at ==Paris=="],
         ["Best haul", "==seven at Tokyo 2020=="]] },

  { h: "Paris 2024",
    lv: [["The Games", "==26 July to 11 August 2024== — Paris for the ==third== time"],
         ["The opening", "on the ==river Seine== — the ==first held outside a stadium=="],
         ["India's medals", "==six== — ==one silver and five bronze==, ==71st== on the table"],
         ["Manu Bhaker", "==two== bronzes — the ==first Indian since independence== to win two at one Games"],
         ["Aman Sehrawat", "==21 years and 24 days== — the ==youngest== Indian Olympic medallist"],
         ["The Paralympics", "==29== medals — ==7 gold==, the ==best ever==, ==18th== on the table"],
         ["Avani Lekhara", "the ==first Indian woman with two Paralympic golds=="]] }
]},

/* ================================== FIRSTS AND SUPERLATIVES */
firsts: {
hub: "Firsts and superlatives",
sub: "First in India, largest, longest, highest",
br: [
  { h: "The first office-holders",
    lv: [["President", "==Rajendra Prasad== — the ==only== one elected ==twice=="],
         ["Vice-President", "==S. Radhakrishnan==; ==Prime Minister== ==Nehru=="],
         ["Home, Law, Education", "==Patel==, ==Ambedkar==, ==Maulana Azad=="],
         ["Speaker", "==G. V. Mavalankar==; ==Chief Justice== ==H. J. Kania=="],
         ["Chief Election Commissioner", "==Sukumar Sen=="],
         ["Field Marshal", "==Sam Manekshaw==, ==1973==; ==Cariappa== was made one in ==1986=="],
         ["Chief of Defence Staff", "==General Bipin Rawat==, ==2019=="]] },

  { h: "The first women",
    lv: [["President", "==Pratibha Patil==, ==2007==; ==Droupadi Murmu== the first ==tribal==, 2022"],
         ["Prime Minister", "==Indira Gandhi==, ==1966=="],
         ["Governor", "==Sarojini Naidu==, ==United Provinces==, ==1947=="],
         ["Chief Minister", "==Sucheta Kripalani==, ==Uttar Pradesh==, ==1963=="],
         ["Supreme Court judge", "==Fathima Beevi==, ==1989=="],
         ["IPS officer", "==Kiran Bedi==, ==1972==; the first ==IAS== ==Anna Rajam Malhotra==, 1951"],
         ["Everest", "==Bachendri Pal==, ==1984=="]] },

  { h: "Firsts in science and industry",
    lv: [["In space", "==Rakesh Sharma==, ==1984==, on ==Soyuz T-11=="],
         ["Satellite", "==Aryabhata==, ==1975==, launched by the ==Soviet Union=="],
         ["On an Indian launcher", "==Rohini RS-1==, ==1980==, on ==SLV-3=="],
         ["Nuclear test", "==Pokhran, 18 May 1974== — ==Smiling Buddha=="],
         ["Railway line", "==Bombay to Thane==, ==16 April 1853==, about ==34 km=="],
         ["Feature film", "==Raja Harishchandra==, ==1913==, ==Dadasaheb Phalke==; the talkie ==Alam Ara, 1931=="]] },

  { h: "Largest and smallest in India",
    lv: [["By area", "largest ==Rajasthan==, smallest ==Goa=="],
         ["By population", "largest ==Uttar Pradesh==, smallest ==Sikkim=="],
         ["Union territories", "largest ==Ladakh==, smallest ==Lakshadweep=="],
         ["Longest coastline", "==Gujarat=="],
         ["Most neighbours", "==Uttar Pradesh== — ==eight states and Delhi=="],
         ["Largest delta", "the ==Sundarbans== — the ==largest in the world=="],
         ["Largest river island", "==Majuli==, in the ==Brahmaputra=="]] },

  { h: "The built superlatives",
    lv: [["Longest dam", "==Hirakud== — the ==longest earthen dam in the world=="],
         ["Highest dam", "==Tehri==, on the ==Bhagirathi=="],
         ["Tallest statue", "the ==Statue of Unity==, ==182 m== — the ==tallest in the world=="],
         ["Longest sea bridge", "==Atal Setu==, about ==21.8 km==, ==January 2024=="],
         ["Longest railway platform", "==Hubballi==, about ==1,507 m== — the ==longest in the world=="],
         ["Longest highway tunnel", "the ==Atal Tunnel== at Rohtang, about ==9.02 km=="],
         ["Longest national highway", "==NH 44==, ==Srinagar to Kanyakumari==, about ==3,745 km=="]] }
]},

/* ============================ RIVERS, PARKS AND MONUMENTS */
places: {
hub: "Rivers, parks, monuments",
sub: "Water, wildlife, heritage, buildings",
br: [
  { h: "The rivers",
    lv: [["Ganga", "rises at ==Gangotri== as the ==Bhagirathi==; the Ganga from ==Devprayag=="],
         ["Its tributaries", "left ==Ramganga, Gomti, Ghaghara, Gandak, Kosi==; right ==Yamuna, Son=="],
         ["Godavari", "the ==longest peninsular== river — the ==Dakshina Ganga==, from ==Trimbakeshwar=="],
         ["Narmada and Tapi", "flow ==west== through ==rift valleys== — and make ==estuaries, not deltas=="],
         ["Luni", "disappears into the ==Rann of Kutch== ==without reaching the sea=="],
         ["Damodar", "the ==sorrow of Bengal=="]] },

  { h: "Dams and lakes",
    lv: [["Bhakra–Nangal", "on the ==Satluj== — its reservoir is ==Gobind Sagar=="],
         ["Hirakud", "==Mahanadi==, Odisha; ==Tehri== ==Bhagirathi==; ==Sardar Sarovar== ==Narmada=="],
         ["Nagarjuna Sagar", "on the ==Krishna=="],
         ["Wular", "India's ==largest freshwater== lake; ==Vembanad== the ==longest=="],
         ["Chilika", "the ==largest brackish lagoon==; ==Sambhar== the ==largest inland saline=="],
         ["Loktak", "the ==phumdis==, and ==Keibul Lamjao==, the ==only floating national park=="]] },

  { h: "Parks by their animal",
    lv: [["One-horned rhinoceros", "==Kaziranga==, Assam"],
         ["Asiatic lion", "==Gir== — the ==only wild population in the world=="],
         ["Snow leopard", "==Hemis==, Ladakh — ==India's largest national park=="],
         ["Hangul", "==Dachigam==, Jammu and Kashmir"],
         ["Sangai", "==Keibul Lamjao==, Manipur"],
         ["Great Indian bustard", "the ==Desert National Park==, Rajasthan"]] },

  { h: "Conservation",
    lv: [["First national park", "==Jim Corbett==, ==1936==, as ==Hailey=="],
         ["Project Tiger", "==1 April 1973==, with ==nine== reserves; ==Project Elephant== ==1992=="],
         ["Most tigers", "==Madhya Pradesh=="],
         ["Wildlife Protection Act", "==1972=="],
         ["First biosphere reserve", "the ==Nilgiri==, ==1986=="],
         ["Ramsar", "signed at ==Ramsar, Iran, 1971==; India joined ==1982=="]] },

  { h: "World Heritage, and who built what",
    lv: [["1983, the first four", "==Ajanta==, ==Ellora==, ==Agra Fort== and the ==Taj Mahal=="],
         ["Only mixed site", "==Khangchendzonga==, Sikkim, ==2016=="],
         ["First Heritage City", "==Ahmedabad==, ==2017=="],
         ["Qutb Minar", "begun by ==Qutb-ud-din Aibak==, completed by ==Iltutmish=="],
         ["Kailasa Temple, Ellora", "==Krishna I== of the ==Rashtrakutas== — carved ==downward out of one rock=="],
         ["Brihadeeswarar", "==Rajaraja Chola I==; ==Konark== ==Narasimhadeva I=="],
         ["Jantar Mantar", "==Sawai Jai Singh II== — ==five== of them"],
         ["India Gate and Rashtrapati Bhavan", "==Edwin Lutyens=="]] }
]},

/* ========================================== IMPORTANT DAYS */
days: {
hub: "Important days",
sub: "The thirty-five that keep coming back",
br: [
  { h: "January to March",
    lv: [["12 January", "==National Youth Day== — ==Vivekananda's== birthday"],
         ["15 January", "==Army Day== — ==Cariappa==, 1949"],
         ["25 January", "==National Voters' Day==; ==26 January== ==Republic Day=="],
         ["30 January", "==Martyrs' Day=="],
         ["28 February", "==National Science Day=="],
         ["8 March", "==International Women's Day==; ==22 March== ==World Water Day=="],
         ["24 March", "==World Tuberculosis Day=="]] },

  { h: "April to June",
    lv: [["7 April", "==World Health Day== — the ==WHO's== founding, 1948"],
         ["14 April", "==Ambedkar Jayanti==; ==22 April== ==Earth Day=="],
         ["1 May", "==International Labour Day=="],
         ["11 May", "==National Technology Day== — ==Pokhran-II==, 1998"],
         ["5 June", "==World Environment Day=="],
         ["21 June", "==International Day of Yoga== — declared ==December 2014==, on ==India's proposal=="]] },

  { h: "July to September",
    lv: [["11 July", "==World Population Day=="],
         ["26 July", "==Kargil Vijay Diwas=="],
         ["15 August", "==Independence Day=="],
         ["29 August", "==National Sports Day== — ==Dhyan Chand's== birthday"],
         ["5 September", "==Teachers' Day== — ==Radhakrishnan's== birthday"],
         ["14 September", "==Hindi Diwas== — Hindi made an official language in ==1949=="],
         ["15 September", "==Engineers' Day== — ==Visvesvaraya's== birthday"]] },

  { h: "October to December",
    lv: [["2 October", "==Gandhi Jayanti==, and the ==International Day of Non-Violence=="],
         ["8 October", "==Indian Air Force Day== — the force raised in ==1932=="],
         ["16 October", "==World Food Day== — the ==FAO's== founding"],
         ["24 October", "==United Nations Day== — the ==Charter in force==, 1945"],
         ["31 October", "==National Unity Day== — ==Patel's== birthday"],
         ["11 November", "==National Education Day== — ==Maulana Azad's== birthday"],
         ["14 November", "==Children's Day== — ==Nehru's== birthday"],
         ["26 November", "==Constitution Day=="]] },

  { h: "December, and the pairs that trip people",
    lv: [["1 December", "==World AIDS Day=="],
         ["2 December", "==National Pollution Control Day== — the ==Bhopal== tragedy, 1984"],
         ["4 December", "==Navy Day== — ==Operation Trident==, 1971"],
         ["10 December", "==Human Rights Day=="],
         ["22 December", "==National Mathematics Day== — ==Ramanujan's== birthday"],
         ["23 December", "==Kisan Diwas=="],
         ["Children's Day", "==14 November== in India; the ==universal== one is ==20 November=="],
         ["Hindi", "==World Hindi Day 10 January==; ==Hindi Diwas 14 September=="]],
    m: "Two Children's Days and two Hindi days. The Indian one comes first in each pair." }
]},

/* ========================================= BOOKS AND AUTHORS */
books: {
hub: "Books and authors",
sub: "Classical to the prize-winners",
br: [
  { h: "Classical and medieval",
    lv: [["Arthashastra", "==Kautilya==, also called ==Chanakya=="],
         ["Indica", "==Megasthenes==, envoy of ==Seleucus Nicator== to ==Chandragupta Maurya=="],
         ["Ashtadhyayi", "==Panini== — the grammar of ==Sanskrit=="],
         ["Natyashastra", "==Bharata Muni== — drama, dance and music together"],
         ["Rajatarangini", "==Kalhana== — the kings of ==Kashmir=="],
         ["Shakuntalam, Meghadutam", "==Kalidasa=="],
         ["Mudrarakshasa", "==Vishakhadatta==; ==Mrichchhakatika== ==Shudraka=="]] },

  { h: "The national movement",
    lv: [["Experiments with Truth", "==Gandhi== — in ==Gujarati==, as Satya na Prayogo"],
         ["Hind Swaraj", "==Gandhi==, ==1909=="],
         ["Discovery of India", "==Nehru=="],
         ["India Wins Freedom", "==Maulana Azad=="],
         ["The Indian Struggle", "==Subhas Chandra Bose=="],
         ["Poverty and Un-British Rule", "==Dadabhai Naoroji== — the ==drain theory=="],
         ["Gita Rahasya", "==Tilak==, written in ==Mandalay jail=="],
         ["Unhappy India", "==Lala Lajpat Rai=="]] },

  { h: "Modern and prize-winning",
    lv: [["Midnight's Children", "==Salman Rushdie=="],
         ["The God of Small Things", "==Arundhati Roy=="],
         ["The Inheritance of Loss", "==Kiran Desai==; ==The White Tiger== ==Aravind Adiga=="],
         ["A Suitable Boy", "==Vikram Seth==; ==Train to Pakistan== ==Khushwant Singh=="],
         ["Interpreter of Maladies", "==Jhumpa Lahiri=="],
         ["Tomb of Sand", "==Geetanjali Shree=="]] },

  { h: "Foreign works that get asked",
    lv: [["The Wealth of Nations", "==Adam Smith=="],
         ["Das Kapital", "==Karl Marx==; the ==Manifesto== with ==Engels=="],
         ["The Origin of Species", "==Charles Darwin=="],
         ["The Prince", "==Machiavelli==; ==Republic== ==Plato==; ==Leviathan== ==Hobbes=="],
         ["The Social Contract", "==Rousseau=="],
         ["War and Peace", "==Tolstoy=="]] },

  { h: "Memoirs and pen names",
    lv: [["Wings of Fire", "==A. P. J. Abdul Kalam==, with Arun Tiwari — ==Turning Points== is the sequel"],
         ["My Truth", "==Indira Gandhi=="],
         ["The Insider", "==P. V. Narasimha Rao== — a ==novel== drawn from his own political life"],
         ["Playing It My Way", "==Sachin Tendulkar==; ==Sunny Days== ==Gavaskar=="],
         ["Premchand", "==Dhanpat Rai Srivastava=="],
         ["Nirala", "==Suryakant Tripathi==; ==Dinkar== ==Ramdhari Singh==; ==Agyeya== ==S. H. Vatsyayan=="]] }
]},

/* ===================================== ORGANISATIONS */
orgs: {
hub: "Organisations",
sub: "The UN, the groupings, the headquarters",
br: [
  { h: "The United Nations",
    lv: [["The Charter", "signed ==26 June 1945== at ==San Francisco== by ==50== countries"],
         ["In force", "==24 October 1945== — ==UN Day=="],
         ["Headquarters", "==New York==, on land given by ==John D. Rockefeller Jr=="],
         ["Members", "==193== — the newest ==South Sudan (2011)=="],
         ["Observer states", "the ==Holy See== and ==Palestine=="],
         ["Official languages", "==six== — ==Arabic== was added in ==1973=="]] },

  { h: "The six principal organs",
    lv: [["General Assembly", "==all 193==, one vote each — important questions need ==two-thirds=="],
         ["Security Council", "==15== — ==5 permanent with a veto==, ==10 elected for two years=="],
         ["ECOSOC", "==54== members, elected for ==three== years"],
         ["Trusteeship Council", "==suspended in 1994==, after ==Palau=="],
         ["International Court of Justice", "==The Hague== — the ==only principal organ outside New York=="],
         ["", "==15== judges, elected for ==nine== years"],
         ["Secretariat", "headed by the ==Secretary-General=="]] },

  { h: "The agencies, and where they sit",
    lv: [["ITU", "==Geneva==, ==1865== — the ==oldest== UN agency"],
         ["ILO", "==Geneva==, ==1919== — ==older than the UN==, and the ==only tripartite== body"],
         ["UPU", "==Bern==, 1874 — ==World Post Day, 9 October=="],
         ["FAO", "==Rome==, ==16 October 1945== — hence ==World Food Day=="],
         ["UNESCO", "==Paris==; ==WHO== ==Geneva==, ==1948==; ==UNICEF== ==New York==, 1946"],
         ["ICAO", "==Montreal==; ==UNEP== ==Nairobi==, 1972"],
         ["IMF and World Bank", "both ==Washington DC==; the ==WTO== ==Geneva==, ==1995=="]] },

  { h: "The groupings",
    lv: [["SAARC", "==8 December 1985 at Dhaka==; secretariat ==Kathmandu=="],
         ["BIMSTEC", "the ==Bangkok Declaration==; secretariat ==Dhaka=="],
         ["BRICS", "first summit ==2009==; ==South Africa== joined ==2010=="],
         ["SCO", "==15 June 2001==; secretariat ==Beijing=="],
         ["ASEAN", "==8 August 1967==, Bangkok; secretariat ==Jakarta== — ==India is not a member=="],
         ["NATO", "==4 April 1949==; headquarters ==Brussels=="],
         ["OPEC", "==1960==, Baghdad; headquarters ==Vienna=="],
         ["African Union", "==2002==; ==Addis Ababa=="]] },

  { h: "India and the UN, and the other bodies",
    lv: [["Original member", "signed the ==Declaration in 1942== and the ==Charter in 1945=="],
         ["Security Council", "elected ==eight== times — most recently ==2021–22=="],
         ["First woman to preside", "over the ==General Assembly== — ==Vijaya Lakshmi Pandit==, ==1953=="],
         ["Red Cross", "==Geneva, 1863==, founded by ==Henri Dunant==, the ==first Nobel Peace laureate=="],
         ["Amnesty International", "==London, 1961== — ==Nobel Peace Prize 1977=="],
         ["IUCN", "==Gland== — it keeps the ==Red List=="],
         ["Interpol", "==Lyon==; the ==World Economic Forum== ==Geneva==, the ==Davos== meeting"]] }
]},

/* ================================= INSTRUMENTS, UNITS, BODY */
science: {
hub: "Instruments and units",
sub: "What measures what, and who found it",
br: [
  { h: "Instruments",
    lv: [["Altimeter", "==altitude==; ==anemometer== ==wind speed=="],
         ["Ammeter", "==electric current=="],
         ["Barometer", "==atmospheric pressure=="],
         ["Audiometer", "==intensity of sound==; ==calorimeter== ==quantity of heat=="],
         ["Chronometer", "==time, accurately, at sea=="],
         ["Fathometer", "==depth of the ocean=="]] },

  { h: "SI units",
    lv: [["The base units", "==seven== — ==metre, kilogram, second, ampere, kelvin, mole, candela=="],
         ["Force", "==newton==; ==pressure== ==pascal=="],
         ["Energy and work", "==joule==; ==power== ==watt=="],
         ["Charge", "==coulomb==; ==resistance== ==ohm==; ==frequency== ==hertz=="]] },

  { h: "Discoveries and inventions",
    lv: [["Laws of motion", "==Isaac Newton==; ==relativity== ==Einstein=="],
         ["Periodic table", "==Dmitri Mendeleev=="],
         ["Natural selection", "==Charles Darwin=="],
         ["Circulation of blood", "==William Harvey==; ==blood groups== ==Karl Landsteiner=="],
         ["Vaccination", "==Edward Jenner==; ==penicillin== ==Alexander Fleming=="]] },

  { h: "The body in numbers",
    lv: [["Bones", "==206== in an adult; a newborn has about ==300==, which ==fuse=="],
         ["Largest and smallest bone", "==femur== and the ==stapes==, in the ear"],
         ["Largest organ", "the ==skin==; the largest ==internal== organ and ==gland== is the ==liver=="],
         ["Largest muscle", "==gluteus maximus==; the ==longest cell== is the ==nerve cell=="],
         ["Teeth", "==32== in an adult, ==20== milk teeth"],
         ["Chromosomes", "==46==, in ==23== pairs"],
         ["Temperature", "about ==37°C==, or ==98.6°F=="]] },

  { h: "Vitamins, and what causes what",
    lv: [["A", "==night blindness==; ==B1== ==beriberi==; ==B3== ==pellagra=="],
         ["C", "==scurvy==; ==D== ==rickets== in children, ==osteomalacia== in adults"],
         ["B12", "==pernicious anaemia== — the ==only vitamin with a metal==, ==cobalt=="],
         ["Bacteria", "==TB, cholera, typhoid, tetanus, plague, leprosy=="],
         ["Virus", "==influenza, AIDS, dengue, rabies, polio, measles=="],
         ["Protozoa", "==malaria, kala-azar, amoebic dysentery, sleeping sickness=="],
         ["Careful", "==malaria== is a ==protozoan== — ==not== a bacterium and ==not== a virus"]] }
]},

/* ================================= SPACE, NUCLEAR AND DEFENCE */
space: {
hub: "Space and defence",
sub: "ISRO, the missions, the nuclear programme",
br: [
  { h: "ISRO",
    lv: [["Founded", "==15 August 1969== — its predecessor ==INCOSPAR==, ==1962=="],
         ["Founder", "==Vikram Sarabhai== — the ==father of the Indian space programme=="],
         ["Headquarters", "==Bengaluru=="],
         ["First launch site", "==Thumba==, near Thiruvananthapuram — first launch ==21 November 1963=="],
         ["Main launch site", "the ==Satish Dhawan Space Centre==, ==Sriharikota=="]] },

  { h: "The missions",
    lv: [["Aryabhata", "India's ==first satellite==, ==19 April 1975== — launched by the ==Soviet Union=="],
         ["Rohini RS-1", "==18 July 1980== — the ==first put in orbit by an Indian launcher=="],
         ["Chandrayaan-1", "==2008== — its data established ==water molecules on the Moon=="],
         ["Chandrayaan-2", "==2019== — the ==orbiter works==, the ==lander did not survive=="],
         ["Chandrayaan-3", "landed ==23 August 2023==, near the ==lunar south pole=="],
         ["Mangalyaan", "==Mars orbit 24 September 2014== — at the ==first attempt=="]] },

  { h: "The launchers and the nuclear tests",
    lv: [["First nuclear test", "==Pokhran, 18 May 1974== — ==Smiling Buddha=="],
         ["Pokhran-II", "==11 and 13 May 1998== — ==Operation Shakti==; ==11 May== is ==National Technology Day=="],
         ["The three stages", "==heavy water==, then ==fast breeder==, then ==thorium== — Bhabha's design"],
         ["First nuclear power station", "==Tarapur==, Maharashtra, ==1969=="],
         ["Father of the Indian nuclear programme", "==Homi Bhabha=="],
         ["Missile man", "==A. P. J. Abdul Kalam=="]] }
]},

/* ================================= STATES AND THE WORLD */
states: {
hub: "States and the world",
sub: "Capitals, borders, currencies, parliaments",
br: [
  { h: "The newer states",
    lv: [["Andhra State, 1953", "the ==first on a linguistic basis==, after ==Potti Sriramulu's== fast"],
         ["1956", "the ==States Reorganisation Act== — the ==biggest single reorganisation=="],
         ["1960", "==Maharashtra and Gujarat==, from ==Bombay State=="],
         ["1975", "==Sikkim==, the ==22nd== state, by the ==36th Amendment=="],
         ["2000", "==Chhattisgarh (1 Nov)==, ==Uttarakhand (9 Nov)==, ==Jharkhand=="],
         ["2014", "==Telangana==, ==2 June== — the ==29th state at the time=="],
         ["2019", "==Jammu and Kashmir== ==ceased to be a state==, becoming ==two union territories=="]] },

  { h: "The union territories",
    lv: [["With a legislature", "==Delhi==, ==Puducherry== and ==Jammu and Kashmir== since ==2019=="],
         ["Without one", "==Ladakh==, since ==2019=="],
         ["Chandigarh", "the capital of ==both Punjab and Haryana=="],
         ["Port Blair", "renamed ==Sri Vijaya Puram== in ==2024=="],
         ["Lakshadweep", "capital ==Kavaratti== — the ==smallest== union territory"],
         ["Merged in 2020", "==Dadra and Nagar Haveli== with ==Daman and Diu== — capital ==Daman=="]] },

  { h: "The borders",
    lv: [["How many on land", "==seven== — Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar, Bangladesh"],
         ["Longest", "with ==Bangladesh==, about ==4,096 km=="],
         ["Shortest", "with ==Afghanistan==, about ==106 km=="],
         ["Maritime neighbours", "==Sri Lanka== and the ==Maldives=="],
         ["Touching China", "==Ladakh, Himachal, Uttarakhand, Sikkim, Arunachal== — ==five=="],
         ["Touching Bhutan", "==Sikkim, West Bengal, Assam, Arunachal=="]] },

  { h: "The boundary lines",
    lv: [["Radcliffe", "==India and Pakistan==, ==1947=="],
         ["McMahon", "==India and China==, from the ==1914== Simla Convention — ==China does not accept it=="],
         ["Durand", "==Pakistan and Afghanistan=="],
         ["38th parallel", "==North and South Korea==; ==49th== ==USA and Canada=="],
         ["17th parallel", "formerly ==North and South Vietnam=="],
         ["Maginot", "France's fortifications ==facing Germany=="]] },

  { h: "Currencies and parliaments",
    lv: [["Bhutan", "==ngultrum==; the ==Maldives== ==rufiyaa==; ==Myanmar== ==kyat=="],
         ["Bangladesh", "==taka==; ==Afghanistan== the ==afghani=="],
         ["Japan", "==yen==; ==Russia== ==rouble==; ==Thailand== ==baht==; ==Vietnam== ==dong=="],
         ["India", "==Sansad==; the ==UK== ==Parliament==; the ==USA== ==Congress=="],
         ["Japan's parliament", "the ==Diet==; ==Israel's== the ==Knesset=="],
         ["Russia", "the ==Federal Assembly== — the ==State Duma== and the ==Federation Council=="],
         ["Germany", "the ==Bundestag== and ==Bundesrat==; ==China== the ==National People's Congress=="]] }
]}

}};
