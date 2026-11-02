/* The Article Machine - data-early-maps.js
   The Ancient and Medieval mind maps: one for the roll of emperors, one for
   each topic, and one overview of the whole subject whose branches open the
   rest.

   Nothing here is new. Every line is taken from the tables, the SSC notes and
   the emperor pages in data-early.js, which is where the facts are checked
   and where the fuller statement of each one lives. A map is that material
   reduced to keywords, so that a topic can be revised in two minutes rather
   than twenty.

   Fields:  EARLY_MAPS                the overview map
              hub, sub                the centre of the map
              br[]                    branches: h title, to (a map id: the
                                      branch opens that map), lv leaves,
                                      m an optional memory hook
            EARLY_MAPS.topics[id]     one map per topic, same shape, no `to`.
                                      `emperors` is the roll; the rest are
                                      topic ids from data-early.js

   A leaf is a string, or [key, text]. The key is the PROMPT - a battle, a
   rank, a building - and it stays visible when the map is covered for recall;
   the text is the answer and is what gets covered. ==text== marks the words
   the question turns on.                                                  */

window.EARLY_MAPS = {

hub: "Ancient and Medieval",
sub: "The Mughals, and the Jain world before them",
br: [
  { h: "The emperors, in order", to: "emperors",
    lv: [["The six great", "Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb — ==1526 to 1707=="],
         ["The interlude", "==Sher Shah== and the Surs, ==1540–55==, in the middle of Humayun"],
         ["The last", "==Bahadur Shah Zafar==, exiled to ==Rangoon== after 1857"],
         ["After 1707", "the provinces break away — ==Hyderabad 1724==, Awadh, Bengal"]] },

  { h: "The battles", to: "mughal-battles",
    lv: [["First Panipat", "==1526==, Babur beats ==Ibrahim Lodi== — the empire begins"],
         ["Second Panipat", "==1556==, ==Bairam Khan== for Akbar beats ==Hemu=="],
         ["Third Panipat", "==1761==, ==Ahmad Shah Abdali== beats the ==Marathas=="],
         ["Haldighati", "==1576==, ==Man Singh== for Akbar against ==Maharana Pratap=="]] },

  { h: "Administration and revenue", to: "mughal-admin",
    lv: [["Mansabdari", "==Akbar==, 1570s — ==zat== is rank and pay, ==sawar== is cavalry"],
         ["Todar Mal", "==zabti==, and the ==Ain-i-Dahsala== of ==1580=="],
         ["The state's share", "==one-third== of the produce"],
         ["Sher Shah first", "the ==rupiya==, the ==dam==, the ==Grand Trunk Road=="]] },

  { h: "Akbar's religious policy", to: "mughal-religion",
    lv: [["Sulh-i-kul", "==peace with all== — the principle, set out by ==Abul Fazl=="],
         ["The taxes", "pilgrimage tax ==1563==, ==jizya 1564== — reimposed by Aurangzeb in ==1679=="],
         ["Ibadat Khana", "==1575== at Fatehpur Sikri; opened to ==all faiths== in 1578"],
         ["Din-i-Ilahi", "==1582== — a ==circle of disciples==, not a religion"]] },

  { h: "Architecture and painting", to: "mughal-architecture",
    lv: [["Humayun's Tomb", "built by ==Bega Begum== — the ==first garden tomb==, the model for the Taj"],
         ["Fatehpur Sikri", "Akbar, from ==1571==, for ==Shaikh Salim Chishti=="],
         ["Taj Mahal", "==1632–53==, Shah Jahan for ==Mumtaz Mahal==; ==Ustad Ahmad Lahauri=="],
         ["Bibi ka Maqbara", "Aurangzeb's son ==Azam Shah== — the ==Taj of the Deccan=="]] },

  { h: "Books, writers, travellers", to: "mughal-books",
    lv: [["Two memoirs", "==Babur== in Turkish, ==Jahangir== in Persian"],
         ["Akbarnama", "==Abul Fazl==; its third volume is the ==Ain-i-Akbari=="],
         ["Dara Shikoh", "==Sirr-i-Akbar==, ==fifty Upanishads== in Persian, 1657"],
         ["Hawkins and Roe", "both to ==Jahangir== — Hawkins a ==mansab==, Roe the ==trade=="]] },

  { h: "Jainism and the councils", to: "jainism",
    lv: [["The two councils", "==Pataliputra c. 300 BCE==; ==Vallabhi 512 CE=="],
         ["Mahavira", "the ==24th== Tirthankara — born ==Kundagrama==, died ==Pavapuri=="],
         ["The split", "==Bhadrabahu== south → ==Digambara==; ==Sthulabhadra== stays → ==Shvetambara=="],
         ["Gommateshwara", "==Shravanabelagola==, commissioned by ==Chamundaraya=="]] }
],

topics: {

/* =============================================== THE EMPERORS */
emperors: {
hub: "The Mughal emperors",
sub: "1526 to 1857, and the Sur interlude",
br: [
  { h: "The six great Mughals",
    lv: [["Babur", "==1526–1530==. A ==Timurid==; took Kabul in 1504, then India"],
         ["Humayun", "==1530–40== and ==1555–56== — ==fifteen years== of exile between"],
         ["Akbar", "==1556–1605==. Crowned at ==thirteen==; fifty years"],
         ["Jahangir", "==1605–1627==. Salim, named for ==Shaikh Salim Chishti=="],
         ["Shah Jahan", "==1628–1658==. ==The builder=="],
         ["Aurangzeb", "==1658–1707==. ==Forty-nine years==, the last ==twenty-five== in the Deccan"]],
    m: "26, 30, 56, 05, 28, 58, 07 — the seven dates carry the whole dynasty." },

  { h: "The Sur interlude",
    lv: [["Sher Shah Suri", "==1540–1545==, an ==Afghan== of the Sur clan — beat Humayun ==twice=="],
         ["What he left", "the silver ==rupiya==, the copper ==dam==, the ==Grand Trunk Road=="],
         ["His buildings", "==Purana Qila==, Rohtas Fort, and his tomb at ==Sasaram=="],
         ["How he died", "==22 May 1545==, a ==gunpowder explosion== at ==Kalinjar=="]] },

  { h: "The later Mughals",
    lv: [["Bahadur Shah I", "==1707–12==. Won the succession war at ==Jajau=="],
         ["Jahandar Shah", "the first emperor ==raised by a noble==, Zulfiqar Khan. ==Abolished jizya=="],
         ["Farrukhsiyar", "put up — and killed — by the ==Sayyid brothers==, the ==king-makers=="],
         ["Muhammad Shah", "'Rangila', ==1719–48==. ==Nadir Shah== at ==Karnal, 1739=="],
         ["Alamgir II", "==Plassey, 1757==, was fought in his reign"],
         ["Shah Alam II", "lost at ==Buxar 1764==; gave the Company the ==Diwani== in ==1765=="],
         ["Bahadur Shah II", "'Zafar', the ==last==; exiled to ==Rangoon==, died ==1862=="]] },

  { h: "The capitals",
    lv: [["Agra", "Babur's and Akbar's, and again after Fatehpur Sikri"],
         ["Fatehpur Sikri", "==1571–85==, then abandoned as capital"],
         ["Lahore", "Akbar's, while the north-west needed watching"],
         ["Shahjahanabad", "Delhi, from ==1648== — Shah Jahan's new city"]] },

  { h: "What each is remembered for",
    lv: [["Akbar", "built the ==system== — mansabdari, the revenue settlement, the Rajput alliances"],
         ["Shah Jahan", "built the ==monuments=="],
         ["Aurangzeb", "the ==largest extent==, and the ==breaking point=="],
         ["The memoirs", "==Babur== wrote his in ==Turkish==, ==Jahangir== his in ==Persian=="]] },

  { h: "The break-up after 1707",
    lv: [["Hyderabad", "==1724==, under ==Nizam-ul-Mulk=="],
         ["Awadh", "under ==Saadat Khan=="],
         ["Bengal", "under ==Murshid Quli Khan=="],
         ["What finished it", "==Karnal 1739== and ==Third Panipat 1761== left the field to the ==Company=="]] }
]},

/* ================================================= THE BATTLES */
"mughal-battles": {
hub: "The battles, 1526–1761",
sub: "Who fought whom, and what it settled",
br: [
  { h: "Babur's four",
    lv: [["First Panipat", "==21 April 1526==, against ==Ibrahim Lodi== — ends the ==Delhi Sultanate=="],
         ["How he won it", "==field artillery== (Ustad Ali, Mustafa), carts lashed in a line, the ==tulughma== flank"],
         ["Khanwa", "==17 March 1527==, against ==Rana Sanga== of Mewar — he takes the title ==Ghazi=="],
         ["Chanderi", "==1528==, against ==Medini Rai==, Rana Sanga's Rajput ally"],
         ["Ghaghra", "==1529==, against the ==Afghans== under Mahmud Lodi — fought ==on the river=="]],
    m: "Panipat, Khanwa, Chanderi, Ghaghra — 26, 27, 28, 29." },

  { h: "Humayun and Sher Shah",
    lv: [["Chausa", "==26 June 1539==, near Buxar — ==Sher Khan== wins and crowns himself ==Sher Shah=="],
         ["Kannauj (Bilgram)", "==17 May 1540== — Humayun loses again and goes into ==fifteen years== of exile"],
         ["The exile", "Sindh, Rajputana, then ==Persia== under ==Shah Tahmasp==; Kandahar and Kabul ==1545=="],
         ["Sirhind", "==1555==, against ==Sikandar Shah Suri== — Humayun recovers ==Delhi=="]] },

  { h: "Akbar to Aurangzeb",
    lv: [["Second Panipat", "==5 November 1556== — ==Bairam Khan== for Akbar against ==Hemu=="],
         ["How Hemu lost", "hit in the ==eye== by an arrow, captured and killed"],
         ["Haldighati", "==18 June 1576== — Raja ==Man Singh== against ==Maharana Pratap=="],
         ["", "Pratap escaped on ==Chetak==; ==Mewar was never fully subdued=="],
         ["Samugarh", "==1658== — Aurangzeb and Murad defeat ==Dara Shikoh== in the ==war of succession=="],
         ["Saraighat", "==1671== — the ==Ahoms== under ==Lachit Borphukan== beat Ram Singh on the Brahmaputra"]] },

  { h: "After Aurangzeb",
    lv: [["Karnal", "==24 February 1739== — ==Nadir Shah== beats Muhammad Shah 'Rangila'"],
         ["", "Delhi sacked; the ==Peacock Throne== and the ==Koh-i-Noor== go to Persia"],
         ["Third Panipat", "==14 January 1761== — ==Ahmad Shah Abdali== against the ==Marathas=="],
         ["", "Marathas under ==Sadashivrao Bhau==; the Peshwa ==Balaji Baji Rao was not on the field=="],
         ["Buxar", "==22 October 1764== — the Company beats ==Shah Alam II==, Shuja-ud-Daula and Mir Qasim"],
         ["", "followed by the grant of the ==Diwani== in ==1765=="]] },

  { h: "The three Panipats",
    lv: [["1526", "Babur against ==Ibrahim Lodi=="],
         ["1556", "Bairam Khan against ==Hemu=="],
         ["1761", "Ahmad Shah Abdali against the ==Marathas=="]],
    m: "Three Panipats, three different losers: a Sultan, a general, a confederacy." },

  { h: "Not Mughal, but asked alongside",
    lv: [["Talikota", "==23 January 1565== — the Deccan Sultanates destroy ==Vijayanagara=="],
         ["", "Akbar was emperor, but the ==Mughals were not involved=="],
         ["Tarain", "==1191 and 1192== — Prithviraj Chauhan against ==Muhammad Ghori=="],
         ["Plassey", "==1757==, in Alamgir II's reign — ==Company against the Nawab==, not the Mughals"]] }
]},

/* ========================================= ADMINISTRATION */
"mughal-admin": {
hub: "Administration and revenue",
sub: "Mansabdari, the land, the officers",
br: [
  { h: "The mansabdari system",
    lv: [["Introduced", "by ==Akbar==, in the ==1570s== — the decimal ranks from ==Central Asian== practice"],
         ["Zat", "the ==personal rank==: it fixed his ==salary== and his place in the hierarchy"],
         ["Sawar", "the ==cavalry==, with horses, he had to ==maintain=="],
         ["Two numbers", "stated separately from about ==1595–96==, Akbar's ==fortieth== regnal year"],
         ["The range", "==10 to 5,000== for nobles; ==7,000== for a few, higher for ==princes=="],
         ["Not hereditary", "a mansab was ==not inherited==, and a jagir was ==moved every few years=="],
         ["Du-aspa sih-aspa", "==Jahangir=='s addition — troopers counted at ==two or three horses=="],
         ["Dagh and chehra", "==branding== the horses and a ==descriptive roll== of each trooper, from 1573–74"]],
    m: "Zat is the man, sawar is the horse. Alauddin Khalji had dagh and chehra first." },

  { h: "Land revenue",
    lv: [["Zabti (bandobast)", "==Todar Mal=='s system: land ==measured==, crops assessed ==in cash=="],
         ["Ain-i-Dahsala", "==1580== — rates on the ==average of ten years==' produce and prices"],
         ["The state's share", "==one-third== of the average produce"],
         ["Ghallabakshi (batai)", "==crop-sharing== — the harvest itself divided"],
         ["Nasaq and kankut", "assessment by ==estimate==, from records or the ==standing crop=="],
         ["Ilahi gaz", "Akbar's ==standard measure==, replacing the Sikandari gaz; ==bamboo== for the rope"]] },

  { h: "The land, by how often it was farmed",
    lv: [["Polaj", "cultivated ==every year=="],
         ["Parauti", "rested ==a year or two=="],
         ["Chachar", "rested ==three or four== years"],
         ["Banjar", "==five years or more== — effectively waste"]],
    m: "Polaj, parauti, chachar, banjar — the rest gets longer as you go down." },

  { h: "Jagir, khalisa, and who collected",
    lv: [["Jagir", "the ==right to collect revenue==, given ==in place of salary== — and ==transferable=="],
         ["Khalisa", "land kept for the ==emperor's own treasury=="],
         ["Amalguzar", "the revenue collector in the ==sarkar=="],
         ["Qanungo", "kept the ==records==; the ==patwari== the village accounts"],
         ["Muqaddam", "the ==village headman=="]] },

  { h: "The officers at the centre",
    lv: [["Vakil", "the ==chief minister== — Bairam Khan as ==Vakil-us-Sultanat=="],
         ["Diwan-i-Kul", "==revenue and finance=="],
         ["Mir Bakshi", "the ==military==: the mansabdars' pay and inspection, and ==intelligence=="],
         ["Mir Saman", "the ==household== and the imperial ==karkhanas=="],
         ["Sadr-us-Sudur", "==religious grants== and charity"],
         ["Qazi-ul-Quzat", "the ==chief judge=="],
         ["Muhtasib", "the ==censor of morals== — given weight by ==Aurangzeb=="]] },

  { h: "In the provinces",
    lv: [["Suba", "the ==province== — under a ==Subedar== (Sipahsalar). Akbar had ==12==, later ==15=="],
         ["Sarkar", "the ==district== — under a ==Faujdar=="],
         ["Pargana", "the ==sub-district== — ==Shiqdar== for order, ==Amil== for revenue"],
         ["Kotwal", "the ==town== police chief"]],
    m: "Suba, sarkar, pargana — big to small, and a different officer at each." },

  { h: "Sher Shah came first, and the coins",
    lv: [["Rupiya and dam", "==Sher Shah== — the silver rupiya of ==178 grains==; the ==rupee is named from it=="],
         ["The road", "the ==Grand Trunk Road== (Sadak-e-Azam), ==Sonargaon== to the north-west frontier"],
         ["Sarais", "about ==1,700==, doubling as stages for the ==dak== horse-post"],
         ["Patta and qabuliyat", "the ==title deed== and the ==deed of agreement== with the cultivator"],
         ["Mohur", "the ==gold== coin; ==Ilahi== was Akbar's, from his ==1584== era"],
         ["Zodiac coins", "==Jahangir==, who also struck coins in ==Nur Jahan's name=="]] }
]},

/* ================================== AKBAR'S RELIGIOUS POLICY */
"mughal-religion": {
hub: "Akbar's religious policy",
sub: "Sulh-i-kul, and the four things it produced",
br: [
  { h: "In order",
    lv: [["1562", "marriage to ==Raja Bharmal=='s daughter — the first ==Rajput alliance=="],
         ["1563", "the ==pilgrimage tax== abolished"],
         ["1564", "the ==jizya== abolished"],
         ["1575", "the ==Ibadat Khana== built at ==Fatehpur Sikri=="],
         ["1578", "the Ibadat Khana ==opened to all faiths=="],
         ["1579", "the ==Mahzar=="],
         ["1582", "the ==Din-i-Ilahi=="],
         ["1584", "the ==Ilahi era==, a new ==solar== calendar"]],
    m: "62 the marriage, 63 and 64 the taxes, 75 the house, 79 the decree, 82 the circle." },

  { h: "The four names",
    lv: [["Sulh-i-kul", "==peace with all== — the principle behind it, set out by ==Abul Fazl=="],
         ["Ibadat Khana", "the ==house of worship==: Muslim scholars first, ==all faiths from 1578=="],
         ["Mahzar", "==1579==, the =='infallibility decree'==, drafted by ==Shaikh Mubarak=="],
         ["", "it let Akbar ==decide between scholars== of Islamic law"],
         ["Din-i-Ilahi", "==1582== — a ==circle of disciples==, ==not a religion=="],
         ["", "==Birbal== was the ==only prominent Hindu== to join"]] },

  { h: "Who came to the Ibadat Khana",
    lv: [["Jain", "==Hiravijaya Suri==, given the title ==Jagatguru=="],
         ["Zoroastrian", "==Dastur Meherji Rana=="],
         ["Christian", "the ==Jesuits== from Goa, ==1580== — Monserrate and Acquaviva"],
         ["Hindu", "Purushottam and Devi"]] },

  { h: "The nine jewels",
    lv: [["Abul Fazl", "==Akbarnama== and ==Ain-i-Akbari==; killed ==1602== by ==Bir Singh Deo Bundela=="],
         ["Faizi", "==poet laureate==, Abul Fazl's brother; translated the ==Lilavati=="],
         ["Birbal", "born ==Mahesh Das==, a Brahmin; killed fighting the ==Yusufzais==, 1586"],
         ["Tansen", "the musician, from ==Gwalior==, a disciple of ==Swami Haridas=="],
         ["Todar Mal", "==finance and land revenue=="],
         ["Man Singh", "the general, of ==Amber== — commanded at ==Haldighati=="],
         ["Abdur Rahim", "Khan-i-Khanan, ==Bairam Khan's son==; translated the ==Baburnama=="]] },

  { h: "And afterwards",
    lv: [["Aurangzeb", "==reimposed the jizya== in ==1679=="],
         ["Jahandar Shah", "==abolished it again==, 1712"],
         ["Jharokha darshan", "Akbar's morning showing of himself — ==ended by Aurangzeb=="]] }
]},

/* ===================================== ARCHITECTURE AND PAINTING */
"mughal-architecture": {
hub: "Architecture and painting",
sub: "Who built what, and for whom",
br: [
  { h: "Babur, Humayun, Sher Shah",
    lv: [["Aram Bagh, Agra", "==Babur== — the ==earliest Mughal garden==, a ==charbagh==. He was first buried here"],
         ["Din-panah", "==Humayun==, 1533 — ==Sher Shah completed it== as the ==Purana Qila=="],
         ["Humayun's Tomb", "==1565–72==, built by his widow ==Bega Begum==; architect ==Mirak Mirza Ghiyas=="],
         ["", "the ==first garden tomb== in India, and the ==model for the Taj=="]] },

  { h: "Akbar",
    lv: [["Agra Fort", "from ==1565==, in ==red sandstone=="],
         ["Fatehpur Sikri", "from ==1571==, capital till ==1585==, in honour of ==Shaikh Salim Chishti=="],
         ["Buland Darwaza", "marks the conquest of ==Gujarat==, ==1573=="],
         ["Sikandra", "Akbar's own tomb — ==begun by him==, ==completed by Jahangir== in 1613"]] },

  { h: "Jahangir and Nur Jahan",
    lv: [["Itimad-ud-Daulah", "==1622–28==, built by ==Nur Jahan== ==for her father=="],
         ["", "the ==first Mughal tomb in white marble==, with ==pietra dura== — the =='Baby Taj'=="],
         ["Shalimar Bagh", "==Srinagar==, 1619, for Nur Jahan; ==Nishat Bagh== is her brother Asaf Khan's"],
         ["Jahangir's tomb", "==Shahdara, Lahore==, built after 1627"]] },

  { h: "Shah Jahan",
    lv: [["Taj Mahal", "==1632–53==, for ==Mumtaz Mahal==; ==Ustad Ahmad Lahauri==; ==Makrana== marble"],
         ["Red Fort", "==1638–48==, for his new city ==Shahjahanabad== — the ==same architect=="],
         ["Jama Masjid", "Delhi, ==1650–56=="],
         ["Moti Masjid", "the one in ==Agra Fort== is his"]] },

  { h: "Aurangzeb and after",
    lv: [["Moti Masjid", "the one in the ==Red Fort==, Delhi, is ==Aurangzeb's==, for his own use"],
         ["Badshahi Mosque", "==Lahore==, ==1673=="],
         ["Bibi ka Maqbara", "==Aurangabad==, built by his son ==Azam Shah== for ==Dilras Banu Begum=="],
         ["", "the =='Taj of the Deccan'== — architect ==Ata-ullah==, son of Ustad Ahmad Lahauri"],
         ["Safdarjung's Tomb", "Delhi, ==1754== — the ==last great Mughal garden tomb=="]],
    m: "Two Moti Masjids: Agra Fort is Shah Jahan's, the Red Fort is Aurangzeb's." },

  { h: "The vocabulary",
    lv: [["Charbagh", "a garden in ==four parts==, divided by ==water channels=="],
         ["Pietra dura", "==parchin kari== — ==inlay of coloured stones== in marble"],
         ["Double dome", "an ==inner dome== for the ceiling, a ==taller outer one== for the skyline"],
         ["Jharokha", "a ==projecting balcony== — ==jharokha darshan== was ended by Aurangzeb"]] },

  { h: "Painting and music",
    lv: [["The beginning", "==Mir Sayyid Ali== and ==Abdus Samad==, brought from ==Persia by Humayun=="],
         ["Hamzanama", "Akbar's workshop — about ==1,400== large paintings"],
         ["Akbar's painters", "==Daswanth== and ==Basawan=="],
         ["Ustad Mansur", "==Jahangir's== painter of ==birds and animals==; title ==Nadir-ul-Asr=="],
         ["Abul Hasan", "Jahangir's ==portraitist==; title ==Nadir-uz-Zaman=="],
         ["Aurangzeb", "==ended music at court== — yet more books on it were written in his reign"]] }
]},

/* ==================================== BOOKS, WRITERS, TRAVELLERS */
"mughal-books": {
hub: "Books and travellers",
sub: "Who wrote what, and who came to look",
br: [
  { h: "The emperors' own",
    lv: [["Baburnama", "Tuzuk-i-Baburi — ==Babur==, in ==Chagatai Turkish=="],
         ["", "translated into ==Persian== by ==Abdur Rahim Khan-i-Khanan=="],
         ["Tuzuk-i-Jahangiri", "==Jahangir==, in ==Persian=="],
         ["Humayun-nama", "==Gulbadan Begum== — ==Babur's daughter==, Humayun's half-sister"]],
    m: "Two emperors wrote their own: Babur in Turkish, Jahangir in Persian." },

  { h: "Akbar's three",
    lv: [["Akbarnama", "==Abul Fazl==, in ==three volumes=="],
         ["Ain-i-Akbari", "its ==third volume== — the ==administration== of the empire"],
         ["Muntakhab-ut-Tawarikh", "==Badauni==, the ==critic== of Akbar's religious policy"],
         ["Tabaqat-i-Akbari", "==Nizamuddin Ahmad=="]] },

  { h: "After Akbar",
    lv: [["Padshahnama", "==Abdul Hamid Lahori== — the ==official history== of Shah Jahan"],
         ["Shahjahannama", "==Inayat Khan=="],
         ["Alamgirnama", "==Mirza Muhammad Kazim==, on Aurangzeb's ==first ten years=="],
         ["Muntakhab-ul-Lubab", "==Khafi Khan==, written ==secretly== — Aurangzeb had ==banned histories=="],
         ["Fatawa-i-Alamgiri", "a ==digest of Islamic law== compiled under Aurangzeb"]] },

  { h: "Translation, and the meeting of ideas",
    lv: [["Razmnama", "the ==Mahabharata== in Persian, from Akbar's ==Maktab Khana=="],
         ["The Ramayana", "translated for Akbar by ==Badauni=="],
         ["Sirr-i-Akbar", "==Dara Shikoh==, ==1657== — ==fifty Upanishads== in Persian"],
         ["Majma-ul-Bahrain", "Dara Shikoh — ==Sufism and Vedanta== compared"],
         ["Ramcharitmanas", "==Tulsidas==, in Akbar's reign — but ==not at his court=="]] },

  { h: "Europeans at the court",
    lv: [["Ralph Fitch", "English merchant — reached ==Akbar's== Fatehpur Sikri in ==1585=="],
         ["Monserrate", "==Jesuit==, on the first mission to Akbar, ==1580=="],
         ["William Hawkins", "==1608== Surat, ==1609== Agra, with a letter from ==James I=="],
         ["", "given a ==mansab==, but ==no trading rights=="],
         ["Thomas Roe", "==ambassador== of James I to ==Jahangir==, ==1615–19== — won ==wider rights to trade=="],
         ["Tavernier", "French ==jeweller== — described the ==Peacock Throne=="],
         ["Bernier", "French ==physician== to Dara Shikoh — Travels in the Mogul Empire"],
         ["Manucci", "Venetian, served Dara Shikoh — ==Storia do Mogor=="]],
    m: "Hawkins got a mansab, Roe got the trade. Both came to Jahangir." }
]},

/* ========================================= JAINISM (ANCIENT) */
jainism: {
hub: "Jainism",
sub: "The councils, Mahavira, the split",
br: [
  { h: "The two councils",
    lv: [["First", "==Pataliputra==, c. ==300 BCE==, under ==Sthulabhadra==, in ==Chandragupta Maurya's== reign"],
         ["", "called after a ==twelve-year famine==; the ==12 Angas== compiled to replace the lost ==14 Purvas=="],
         ["Second", "==Vallabhi==, Gujarat, ==512 CE==, under ==Devardhi Kshamashramana=="],
         ["", "the canon was ==written down== for the first time. Some books give ==453 or 454 CE=="]] },

  { h: "Mahavira",
    lv: [["Which Tirthankara", "the ==24th==. ==Parshvanath== the 23rd, ==Rishabhadeva== (Adinath) the ==first=="],
         ["Born", "==Kundagrama==, near ==Vaishali== — the ==Jnatrika== clan"],
         ["Parents", "father ==Siddhartha==, a clan chief; mother ==Trishala==, a ==Lichchhavi== princess"],
         ["Kaivalya", "at ==42==, at ==Jrimbhikagrama== on the ==Rijupalika==, under a ==sal== tree"],
         ["Died", "at ==72==, at ==Pavapuri== near Rajgir"],
         ["Titles", "==Jina== the conqueror, ==Mahavira==, ==Kevalin==, ==Nirgrantha=="],
         ["Language", "==Ardhamagadhi==, a Prakrit — the language of ==ordinary people=="]] },

  { h: "The split, and the two sects",
    lv: [["The cause", "the ==famine in Magadha=="],
         ["Digambara", "==sky-clad==. Followers of ==Bhadrabahu==, who went ==south== to Shravanabelagola"],
         ["", "monks go ==naked==; a woman ==cannot== attain moksha without rebirth as a man"],
         ["Shvetambara", "==white-clad==. Followers of ==Sthulabhadra==, who ==stayed=="],
         ["", "a woman ==can== attain moksha — ==Mallinatha==, the 19th, was ==a woman=="],
         ["Where each is strong", "Digambara ==Karnataka and Maharashtra==; Shvetambara ==Gujarat and Rajasthan=="]] },

  { h: "What it teaches",
    lv: [["Triratna", "right ==faith==, right ==knowledge==, right ==conduct=="],
         ["The five vows", "ahimsa, satya, asteya, aparigraha — and ==brahmacharya==, ==added by Mahavira=="],
         ["", "Parshvanath taught ==four== (chaturyama); Mahavira made it ==five=="],
         ["Anekantavada", "reality has ==many sides=="],
         ["Syadvada", "every statement is true only =='in some respect'== (syat)"],
         ["Jiva and ajiva", "==soul and non-soul==; karma is ==fine matter== that sticks to the soul"],
         ["Sallekhana", "==voluntary fasting to death== — ==Chandragupta Maurya==, by tradition"]] },

  { h: "The texts",
    lv: [["Agamas", "the canon: ==12 Angas==, in ==Ardhamagadhi Prakrit=="],
         ["Acharanga Sutra", "the ==first== Anga — the ==rules of conduct== for monks"],
         ["Bhagavati Sutra", "has its ==own list== of the ==sixteen Mahajanapadas=="],
         ["Kalpasutra", "==lives of the Tirthankaras==, attributed to ==Bhadrabahu=="],
         ["Tattvartha Sutra", "==Umaswati== — the ==one text both sects accept=="],
         ["Prakrit", "made a ==classical language== on ==3 October 2024==, with Pali, Marathi, Assamese, Bengali"]] },

  { h: "The patrons and the places",
    lv: [["Chandragupta Maurya", "went ==south with Bhadrabahu==; died by ==sallekhana== on ==Chandragiri=="],
         ["Kharavela", "of Kalinga — the ==Hathigumpha inscription== at ==Udayagiri=="],
         ["Chamundaraya", "minister of the ==Western Gangas== — commissioned ==Gommateshwara=="],
         ["Shravanabelagola", "the statue stands on ==Vindhyagiri==; ==Mahamastakabhisheka== every ==12 years=="],
         ["Dilwara", "==Mount Abu==: ==Vimal Vasahi== (1031) and ==Luna Vasahi== (1230, Vastupala and Tejapala)"],
         ["Ranakpur", "the ==Chaumukha== temple, ==1,444== pillars, ==no two alike=="],
         ["Ellora", "caves ==30 to 34== are Jain — including the ==Indra Sabha=="]] },

  { h: "Beside the Buddhist councils",
    lv: [["1st Buddhist", "==483 BCE==, ==Rajagriha== — king ==Ajatashatru==, presided by ==Mahakassapa=="],
         ["2nd Buddhist", "==383 BCE==, ==Vaishali== — king ==Kalashoka==, presided by ==Sabakami=="],
         ["3rd Buddhist", "c. ==250 BCE==, ==Pataliputra== — king ==Ashoka==, presided by ==Moggaliputta Tissa=="],
         ["4th Buddhist", "1st century CE, ==Kashmir== — king ==Kanishka==, presided by ==Vasumitra=="],
         ["The Jain two", "==Pataliputra c. 300 BCE== and ==Vallabhi 512 CE=="]],
    m: "Pataliputra hosted both a Jain council and the third Buddhist one — different centuries, same city." }
]}

}};
