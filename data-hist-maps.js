/* The Article Machine - data-hist-maps.js
   The Modern History mind maps: one for the timeline, the Acts, the
   movements, the people, the Congress sessions, the administrators, the
   treaties and the quick-fact tables, and one overview of the whole subject
   whose branches open the rest.

   Nothing here is new. Every line is taken from data-history.js,
   data-history-hy.js, data-treaties.js, data-raj.js and data-congress.js,
   which is where the facts are checked and where the fuller statement of each
   one lives. A map is that material reduced to keywords, so that a topic can
   be revised in two minutes rather than twenty.

   Fields:  HIST_MAPS                 the overview map
              hub, sub                the centre of the map
              br[]                    branches: h title, to (a map id: the
                                      branch opens that map), lv leaves,
                                      m an optional memory hook
            HIST_MAPS.topics[id]      one map per topic, same shape, no `to`

   A leaf is a string, or [key, text]. The key is the PROMPT - a year, an Act,
   a Viceroy, a session - and it stays visible when the map is covered for
   recall; the text is the answer and is what gets covered. ==text== marks the
   words the question turns on.                                            */

window.HIST_MAPS = {

hub: "Modern History",
sub: "1600 to 1950, in eight maps",
br: [
  { h: "The timeline", to: "timeline",
    lv: [["1757", "==Plassey==; ==Buxar 1764==; the ==Diwani 1765=="],
         ["1857", "the ==Revolt==, and the ==Crown takes over in 1858=="],
         ["1905", "==Partition of Bengal== — annulled at the ==Delhi Durbar, 1911=="],
         ["1919", "==Rowlatt==, ==Jallianwala Bagh==, and the ==1919 Act=="],
         ["1947", "==Mountbatten Plan 3 June==; ==Independence 15 August=="]] },

  { h: "The Acts, 1773 to 1947", to: "acts",
    lv: [["1773", "==Regulating Act== — ==Warren Hastings==, first Governor-General of ==Bengal=="],
         ["1833", "==Governor-General of India== — ==Bentinck== the first"],
         ["1858", "==Crown rule==; ==Canning== the first ==Viceroy=="],
         ["1909", "==Morley–Minto== — ==separate electorates=="],
         ["1935", "==three lists==, the ancestor of the ==Seventh Schedule=="]] },

  { h: "The movements", to: "movements",
    lv: [["Swadeshi", "==1905–08==, after the ==partition of Bengal=="],
         ["Non-Cooperation", "==1920–22==, withdrawn after ==Chauri Chaura=="],
         ["Civil Disobedience", "==1930–34==, begun with the ==Dandi March=="],
         ["Quit India", "==1942==, ==Do or Die== — and ==leaderless within hours=="]] },

  { h: "The people", to: "people",
    lv: [["Lal-Bal-Pal", "==Lajpat Rai==, ==Tilak==, ==Bipin Chandra Pal=="],
         ["Drain of wealth", "==Dadabhai Naoroji==, the ==Grand Old Man of India=="],
         ["The Sardar", "==Vallabhbhai Patel== — ==Bardoli== won him the title"],
         ["Netaji", "==Subhas Chandra Bose== — the ==Forward Bloc== and the ==INA=="]] },

  { h: "The Congress sessions", to: "congress",
    lv: [["1885 Bombay", "the ==first==, ==72 delegates==, ==W. C. Bonnerjee=="],
         ["1907 Surat", "the ==split== between Moderates and Extremists"],
         ["1929 Lahore", "==Purna Swaraj==, and ==26 January 1930== fixed"],
         ["1924 Belgaum", "the ==only== session ==Gandhi== ever presided over"]] },

  { h: "Governors-General and Viceroys", to: "raj",
    lv: [["Cornwallis", "the ==Permanent Settlement==, 1793"],
         ["Dalhousie", "the ==Doctrine of Lapse==, and the ==first railway=="],
         ["Curzon", "the ==Partition of Bengal==, 1905"],
         ["Ripon", "==local self-government==, 1882 — and the ==Ilbert Bill=="]] },

  { h: "The treaties", to: "treaties",
    lv: [["Allahabad 1765", "the ==Diwani== of Bengal, Bihar and Orissa"],
         ["Salbai 1782", "ended the ==First Anglo-Maratha== War"],
         ["Bassein 1802", "the Peshwa accepts the ==Subsidiary Alliance=="],
         ["Two Amritsars", "==1809== Ranjit Singh; ==1846== Gulab Singh and ==Kashmir=="]] },

  { h: "Newspapers, books, slogans", to: "facts",
    lv: [["Kesari", "==Bal Gangadhar Tilak==, in Marathi"],
         ["Poverty and Un-British Rule", "==Dadabhai Naoroji== — the ==drain of wealth=="],
         ["Do or Die", "==Gandhi==, ==8 August 1942=="],
         ["Quit India, Simon Go Back", "both coined by ==Yusuf Meherally=="]] }
],

topics: {

/* ================================================== THE TIMELINE */
timeline: {
hub: "The timeline",
sub: "Eight eras, 1600 to 1950",
br: [
  { h: "The Company's rise, 1600–1857",
    lv: [["Plassey", "==23 June 1757== — Clive against ==Siraj-ud-Daulah=="],
         ["Buxar", "==22 October 1764== — and the ==Diwani== follows in ==1765=="],
         ["Permanent Settlement", "==1793==, Cornwallis, in ==Bengal=="],
         ["Subsidiary Alliance", "==1798==, ==Wellesley=="],
         ["Doctrine of Lapse", "==1848==, ==Dalhousie== — Awadh annexed in ==1856=="],
         ["The Revolt", "begins at ==Meerut==, ==10 May 1857=="]] },

  { h: "Crown rule, 1858–1904",
    lv: [["The transfer", "the ==1858 Act== and the ==Queen's Proclamation==, ==1 November 1858=="],
         ["Councils Act", "==1861== — the first ==Indian members==, nominated"],
         ["Vernacular Press Act", "==1878==, ==Lytton== — ==repealed by Ripon=="],
         ["Ilbert Bill", "==1883==, Ripon — and the ==white revolt== against it"],
         ["Congress founded", "==28 December 1885==, Bombay"]] },

  { h: "Partition and the split, 1905–1914",
    lv: [["Partition of Bengal", "announced ==19 July==, effective ==16 October 1905=="],
         ["Muslim League", "==Dhaka==, ==30 December 1906=="],
         ["Surat Split", "==1907== — Moderates and Extremists part"],
         ["Morley–Minto", "==1909== — ==separate electorates=="],
         ["Delhi Durbar", "==12 December 1911== — partition ==annulled==, capital ==moved to Delhi=="]] },

  { h: "Gandhi's arrival to Chauri Chaura, 1915–1922",
    lv: [["He returns", "==9 January 1915==, from South Africa"],
         ["Lucknow Pact", "==1916== — Congress and ==League== together"],
         ["The three satyagrahas", "==Champaran 1917==, ==Kheda 1918==, ==Ahmedabad 1918=="],
         ["Rowlatt", "==March 1919== — ==no appeal, no vakil, no daleel=="],
         ["Jallianwala Bagh", "==13 April 1919==, Amritsar — General ==Dyer=="],
         ["Non-Cooperation", "launched ==1 August 1920=="],
         ["Chauri Chaura", "==5 February 1922== — and the ==withdrawal== on 11 February"]] },

  { h: "Between the movements, 1923–1929",
    lv: [["Swaraj Party", "==1923== — ==C. R. Das== and ==Motilal Nehru==, to enter the councils"],
         ["Simon Commission", "appointed ==1927== — ==all-white==, hence ==Simon Go Back=="],
         ["Nehru Report", "==1928== — ==Motilal Nehru==, on dominion status"],
         ["The Assembly bomb", "==8 April 1929== — ==Bhagat Singh== and ==B. K. Dutt=="],
         ["Lahore session", "==December 1929== — ==Purna Swaraj=="]] },

  { h: "Civil Disobedience, 1930–1939",
    lv: [["First Independence Day", "==26 January 1930=="],
         ["Dandi March", "==12 March to 6 April 1930== — ==240 miles== from ==Sabarmati==, ==78 followers=="],
         ["Gandhi–Irwin Pact", "==5 March 1931== — and the ==Second Round Table== follows"],
         ["Communal Award", "==16 August 1932== — separate electorates for the ==depressed classes=="],
         ["Poona Pact", "==24 September 1932== — ==reserved seats== instead"],
         ["Act of 1935", "and the ==Congress ministries== of ==1937=="],
         ["Bose resigns", "==1939==, and founds the ==Forward Bloc=="]] },

  { h: "War, Quit India, Partition, 1939–1947",
    lv: [["At war", "==1939==, declared ==without consultation== — ==Linlithgow=="],
         ["Lahore Resolution", "==23 March 1940==, the ==Muslim League=="],
         ["Cripps Mission", "==March 1942== — ==a post-dated cheque=="],
         ["Quit India", "==8 August 1942== — ==Do or Die=="],
         ["Azad Hind", "==21 October 1943==, Bose's ==provisional government=="],
         ["INA trials", "==1945==, at the ==Red Fort=="],
         ["Cabinet Mission", "==March 1946== — and the ==Constituent Assembly== first meets ==9 December=="],
         ["The end", "==Mountbatten Plan 3 June==, ==Independence 15 August 1947=="]] },

  { h: "Independence and the Republic",
    lv: [["The princely states", "==1948== — ==Patel== and ==V. P. Menon==, ==562== of them"],
         ["The Constitution", "adopted ==26 November 1949==, in force ==26 January 1950=="]] }
]},

/* ====================================================== THE ACTS */
acts: {
hub: "The Acts, 1773–1947",
sub: "Thirteen Acts, and what each one did",
br: [
  { h: "Controlling the Company, 1773–1793",
    lv: [["1773 Regulating", "==Governor-General of Bengal== — ==Warren Hastings== the first"],
         ["", "a council of ==four==, deciding by ==majority==, the GG with only a ==casting vote=="],
         ["", "==Bombay and Madras== subordinated; a ==Supreme Court at Calcutta== in 1774"],
         ["1784 Pitt's India", "==dual government==: the Company ==traded==, the Crown ==governed=="],
         ["", "a ==Board of Control== in London; the territories called ==British possessions=="],
         ["1793 Charter", "monopoly extended ==twenty years==; the GG may ==override his council=="]] },

  { h: "The monopoly gives way, 1813–1853",
    lv: [["1813 Charter", "monopoly ==ended==, except ==tea and the China trade=="],
         ["", "==missionaries== let in; ==one lakh a year== for education — the ==first money for it=="],
         ["1833 Charter", "==Governor-General of India== — ==Bentinck== the first"],
         ["", "the Company ==stops trading== altogether; a ==Law Member== added — ==Macaulay=="],
         ["", "==no Indian disqualified== from office by religion, birth, descent or colour"],
         ["1853 Charter", "==legislative and executive== functions ==separated=="],
         ["", "==open competition== for the civil service; the ==Macaulay Committee== followed in 1854"]] },

  { h: "The Crown takes over, 1858–1892",
    lv: [["1858 Government of India", "rule from the ==Company to the Crown=="],
         ["", "==Secretary of State for India==, in the Cabinet, with a ==Council of fifteen=="],
         ["", "the Governor-General also styled ==Viceroy== — ==Canning== the first"],
         ["1861 Councils", "==non-official Indians== nominated; the ==portfolio system== recognised"],
         ["", "legislative power ==restored== to Bombay and Madras — ==decentralisation begins=="],
         ["1892 Councils", "members may ==discuss the budget and ask questions== — but ==not vote=="],
         ["", "nomination on ==recommendation== — ==election in substance, not in name=="]] },

  { h: "Representation, 1909–1919",
    lv: [["1909 Morley–Minto", "==separate electorates== for Muslims — ==only Muslims== voting for Muslim seats"],
         ["", "the first Indian on the Viceroy's ==executive council== — ==S. P. Sinha==, Law Member"],
         ["1919 Montagu–Chelmsford", "==dyarchy== in the ==provinces=="],
         ["", "==transferred== subjects to Indian ministers, ==reserved== ones to the Governor"],
         ["", "a ==bicameral== centre: ==Council of State== and ==Legislative Assembly=="],
         ["", "separate electorates ==extended== to Sikhs, Indian Christians, Anglo-Indians, Europeans"],
         ["", "a ==statutory commission after ten years== — which became ==Simon=="]],
    m: "1919 put dyarchy in the provinces; 1935 moved it to the centre. That swap is the question." },

  { h: "The template, 1935 and 1947",
    lv: [["1935 Government of India", "an ==All-India Federation== — ==never established==, the princes did not accede"],
         ["", "==provincial autonomy==: dyarchy ==abolished== in the provinces, ==moved to the centre=="],
         ["", "==three lists== — Federal, Provincial, Concurrent — the ==Seventh Schedule's ancestor=="],
         ["", "==Federal Court== (1937) and the ==Reserve Bank of India=="],
         ["", "==Burma separated== from India"],
         ["1947 Independence", "==two dominions== from ==15 August 1947=="],
         ["", "==paramountcy lapsed==, leaving the princely states free to accede"],
         ["", "governed under the ==1935 Act as adapted== until a constitution — ==repealed by article 395=="]] },

  { h: "The firsts the Acts created",
    lv: [["Governor-General of Bengal", "==Warren Hastings==, ==1774== (Regulating Act)"],
         ["Governor-General of India", "==Bentinck==, ==1833== (Charter Act)"],
         ["Viceroy", "==Canning==, ==1858== (Government of India Act)"],
         ["Indian on the executive council", "==S. P. Sinha==, ==1909== (Morley–Minto)"]] }
]},

/* ================================================= THE MOVEMENTS */
movements: {
hub: "The movements",
sub: "What set each off, how it was fought, what it won",
br: [
  { h: "Swadeshi and Boycott, 1905–08",
    lv: [["Set off by", "the ==partition of Bengal=="],
         ["Led by", "==Tilak, Lajpat Rai, Bipin Chandra Pal, Aurobindo==; ==Surendranath Banerjee== in Bengal"],
         ["How", "==boycott== of British goods, ==national education==, the ==samitis=="],
         ["First time", "==students and women== took a visible public part"],
         ["Outcome", "partition ==annulled in 1911== — but the Congress ==split at Surat, 1907=="]] },

  { h: "Home Rule, 1916–18",
    lv: [["Two leagues", "==Tilak's== from ==Belgaum, April 1916==; ==Besant's== from ==Madras, September 1916=="],
         ["Who worked where", "Tilak: ==Maharashtra, Karnataka, Berar, CP==; Besant: ==the rest=="],
         ["Outcome", "Besant's ==internment in 1917== forced Montagu's ==August 1917 declaration=="],
         ["What it left", "the ==organisation Gandhi inherited=="]] },

  { h: "Khilafat, 1919–24",
    lv: [["Set off by", "the ==Caliph's position== after the dismemberment of the ==Ottoman empire=="],
         ["Led by", "the ==Ali brothers== (Shaukat and Muhammad), ==Azad==, Hakim Ajmal Khan, Hasrat Mohani"],
         ["Joined to", "==Non-Cooperation==, by Gandhi, ==against the advice== of several colleagues"],
         ["Ended by", "==Ataturk abolishing the Caliphate==, ==1924=="],
         ["Outcome", "the ==closest Hindu-Muslim cooperation== of the period — then the ==worst rioting=="]] },

  { h: "Non-Cooperation, 1920–22",
    lv: [["Set off by", "the ==Rowlatt Act==, ==Jallianwala Bagh==, and the ==Khilafat== grievance"],
         ["How", "==surrender of titles==; boycott of ==legislatures, courts, schools, foreign cloth=="],
         ["Approved", "==Calcutta, September 1920==; ==endorsed at Nagpur==, December"],
         ["Withdrawn", "==11 February 1922==, after ==Chauri Chaura=="],
         ["Outcome", "==failed== to win swaraj in a year; ==made the Congress a mass organisation=="]] },

  { h: "Civil Disobedience, 1930–34",
    lv: [["Set off by", "the rejection of the ==Nehru Report==, and the ==Lahore resolution=="],
         ["Began with", "the ==Dandi March==, ==12 March to 6 April 1930== — and the ==making of salt=="],
         ["Led by", "Gandhi; ==Patel== in Gujarat; ==Khan Abdul Ghaffar Khan== in the Frontier"],
         ["Suspended", "by the ==Gandhi–Irwin Pact==, ==March 1931==; ==resumed 1932=="],
         ["Outcome", "the ==Round Table Conferences==, the ==Communal Award==, the ==Poona Pact=="]] },

  { h: "Quit India, 1942–44",
    lv: [["Set off by", "the failure of the ==Cripps Mission==, and the ==Japanese advance=="],
         ["The call", "=='Do or Die'==, ==8 August 1942=="],
         ["Leadership", "==arrested within hours== — effectively ==leaderless=="],
         ["The underground", "==Jayaprakash Narayan==, Lohia, ==Aruna Asaf Ali==, ==Usha Mehta's Congress Radio=="],
         ["Parallel governments", "==Ballia==, ==Tamluk== in Midnapore, and ==Satara== — which lasted to ==1945=="],
         ["Outcome", "==crushed in months==, but no British government afterwards proposed to ==stay=="]] },

  { h: "The revolutionaries, 1905–31",
    lv: [["Who", "==Anushilan Samiti== and ==Jugantar== in Bengal; the ==HRA== and ==HSRA== in the north"],
         ["Abroad", "the ==Ghadar Party==, San Francisco"],
         ["The actions", "==Alipore 1908==, ==Delhi Conspiracy 1912==, ==Kakori 1925=="],
         ["", "==Saunders 1928==, the ==Assembly bomb 1929==, ==Chittagong 1930== under ==Surya Sen=="],
         ["Outcome", "==militarily negligible==, ==politically considerable== — the ==trials gave a platform=="]] },

  { h: "Peasant and tribal risings",
    lv: [["The causes", "==revenue, tenancy, forest law, indigo, moneylenders=="],
         ["The risings", "==Indigo 1859–60==, ==Pabna 1873==, ==Deccan 1875==, ==Santhal 1855–56=="],
         ["", "==Munda ulgulan== under ==Birsa Munda==, 1899–1900"],
         ["With Gandhi", "==Champaran 1917==, ==Kheda 1918==, ==Bardoli 1928=="],
         ["What they forced", "the ==Bengal Tenancy Act 1885== and the ==Deccan Agriculturists' Relief Act 1879=="]] }
]},

/* ==================================================== THE PEOPLE */
people: {
hub: "The people",
sub: "Reformers, moderates, extremists, revolutionaries",
br: [
  { h: "The reformers",
    lv: [["Ram Mohan Roy", "==Brahmo Samaj, 1828==; ==sati abolished 1829== — ==father of the Indian Renaissance=="],
         ["Vidyasagar", "the ==Hindu Widows' Remarriage Act, 1856=="],
         ["Dayanand Saraswati", "=='Back to the Vedas'== — ==Arya Samaj, 1875==; ==Satyarth Prakash=="],
         ["Vivekananda", "==Chicago, 1893==; the ==Ramakrishna Mission=="],
         ["Sir Syed Ahmad Khan", "==Aligarh, 1875== — modern education, and ==political loyalism=="],
         ["Jyotirao Phule", "==Satyashodhak Samaj, 1873==; ==Gulamgiri==; schools with ==Savitribai=="],
         ["Periyar", "the ==Self-Respect Movement, 1925==, and the ==Dravidar Kazhagam=="]] },

  { h: "Moderates and Extremists",
    lv: [["Dadabhai Naoroji", "the ==drain of wealth==; first Indian in the ==House of Commons, 1892=="],
         ["Gokhale", "the ==Servants of India Society, 1905== — ==Gandhi's political mentor=="],
         ["Tilak", "=='Swaraj is my birthright'== — ==Kesari== and ==Maratha==; ==Mandalay 1908–14=="],
         ["Lajpat Rai", "the ==Punjab Kesari== — died after the ==Simon lathi charge==, 1928"],
         ["Bipin Chandra Pal", "the third of ==Lal-Bal-Pal=="]],
    m: "Lal-Bal-Pal: Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal." },

  { h: "Gandhi, and those around him",
    lv: [["Gandhi", "returned ==9 January 1915==; ==Champaran, Kheda, Ahmedabad== 1917–18"],
         ["", "==Non-Cooperation 1920==, ==Salt Satyagraha 1930==, ==Quit India 1942=="],
         ["Nehru", "==Congress president at Lahore, 1929==; moved the ==Objectives Resolution==, Dec 1946"],
         ["Patel", "==Kheda== and ==Bardoli== — Bardoli won him ==Sardar=="],
         ["", "with ==V. P. Menon==, integrated ==562 princely states=="],
         ["Ambedkar", "==Poona Pact, 1932==; ==chairman of the Drafting Committee=="],
         ["Azad", "==youngest== Congress president, ==1923==; president through ==1940–46=="]] },

  { h: "The revolutionaries",
    lv: [["Subhas Chandra Bose", "president ==1938 and 1939==; resigned after ==Tripuri==, founded the ==Forward Bloc=="],
         ["", "==escaped India 1941==; took command of the ==INA==; =='Give me blood'=="],
         ["Bhagat Singh", "==HSRA==; killed ==Saunders 1928==; the ==Assembly bomb, 8 April 1929=="],
         ["", "wrote ==Why I Am an Atheist==; hanged ==23 March 1931=="],
         ["Chandrashekhar Azad", "reorganised the ==HRA into the HSRA==; died at ==Alfred Park==, Feb 1931"],
         ["Aurobindo Ghosh", "wrote in ==Bande Mataram==; tried in the ==Alipore== case, 1908"],
         ["", "defended by ==C. R. Das==; withdrew to ==Pondicherry== in 1910"]] },

  { h: "The others who get asked",
    lv: [["Annie Besant", "==Home Rule League at Madras, September 1916==; ==first woman== Congress president, 1917"],
         ["Sarojini Naidu", "==first Indian woman== president, ==Kanpur 1925==; the ==Dharasana== raid, 1930"],
         ["Tagore", "==Nobel, 1913==, for ==Gitanjali==; ==renounced his knighthood== after Jallianwala"],
         ["Jinnah", "the ==Lucknow Pact 1916==; the ==Fourteen Points 1929==; the ==Lahore Resolution 1940=="],
         ["Rajendra Prasad", "==president of the Constituent Assembly==, from ==11 December 1946=="],
         ["Rajagopalachari", "the ==only Indian== and ==last== Governor-General; the ==CR Formula, 1944=="]] }
]},

/* ========================================= THE CONGRESS SESSIONS */
congress: {
hub: "The Congress sessions",
sub: "The ones that get asked, 1885 to 1939",
br: [
  { h: "The first sessions",
    lv: [["1885 Bombay", "the ==first==, ==72 delegates== — ==W. C. Bonnerjee==; ==A. O. Hume== the moving spirit"],
         ["1886 Calcutta", "==Dadabhai Naoroji=="],
         ["1887 Madras", "==Badruddin Tyabji== — the ==first Muslim== president"],
         ["1888 Allahabad", "==George Yule== — the ==first English== president"]] },

  { h: "Swaraj, and the split",
    lv: [["1906 Calcutta", "==Dadabhai Naoroji== — ==swaraj declared the goal== for the first time"],
         ["1907 Surat", "==Rash Behari Ghosh== — the ==split== between Moderates and Extremists"],
         ["1916 Lucknow", "==A. C. Majumdar== — ==Congress and League reunion==, and the ==Lucknow Pact=="],
         ["1917 Calcutta", "==Annie Besant== — the ==first woman== president"]] },

  { h: "The Gandhi years",
    lv: [["1920 Calcutta", "a ==special== session — ==Lala Lajpat Rai==; ==Non-Cooperation approved=="],
         ["1920 Nagpur", "==C. Vijayaraghavachariar== — Non-Cooperation ==endorsed=="],
         ["", "the Congress ==reorganised on linguistic provinces==, with a ==working committee=="],
         ["1924 Belgaum", "==M. K. Gandhi== — the ==only session he ever presided over=="],
         ["1925 Kanpur", "==Sarojini Naidu== — the ==first Indian woman== president"]] },

  { h: "Towards independence",
    lv: [["1929 Lahore", "==Jawaharlal Nehru== — ==Purna Swaraj==, and ==26 January 1930== fixed"],
         ["1931 Karachi", "==Vallabhbhai Patel== — ==Fundamental Rights and National Economic Policy=="],
         ["", "the resolution was ==drafted by Nehru== — the ==first Congress statement of rights=="],
         ["1936 Faizpur", "==Jawaharlal Nehru== — the ==first session in a village=="],
         ["1938 Haripura", "==Subhas Chandra Bose== — the ==National Planning Committee=="],
         ["1939 Tripuri", "Bose ==beats Pattabhi Sitaramayya==, then ==resigns== and founds the ==Forward Bloc=="]] },

  { h: "The firsts",
    lv: [["First president", "==W. C. Bonnerjee==, ==1885=="],
         ["First Muslim", "==Badruddin Tyabji==, ==1887=="],
         ["First English", "==George Yule==, ==1888=="],
         ["First woman", "==Annie Besant==, ==1917=="],
         ["First Indian woman", "==Sarojini Naidu==, ==1925=="]],
    m: "Besant was first; Naidu was the first Indian. One word apart, two different answers." }
]},

/* ============================== GOVERNORS-GENERAL AND VICEROYS */
raj: {
hub: "Governors-General and Viceroys",
sub: "Who did what, 1774 to 1950",
br: [
  { h: "The Company's Governors-General",
    lv: [["Warren Hastings", "==1774–85== — the ==first Governor-General of Bengal==; ==impeached and acquitted=="],
         ["Cornwallis", "==1786–93== — the ==Permanent Settlement, 1793==; ==father of the civil services=="],
         ["Wellesley", "==1798–1805== — the ==Subsidiary Alliance==; the ==death of Tipu==; ==Fort William College=="],
         ["William Bentinck", "==1828–35== — the ==first Governor-General of India=="],
         ["", "==sati abolished 1829==; ==thuggee== suppressed; ==English== as the medium after ==Macaulay's Minute=="]] },

  { h: "Dalhousie and Canning",
    lv: [["Dalhousie", "==1848–56== — the ==Doctrine of Lapse==; ==Awadh annexed 1856=="],
         ["", "the ==first railway, telegraph and postage stamp==; ==Wood's Despatch==; the ==PWD=="],
         ["Canning", "==1856–62== — the ==last Governor-General of the Company== and the ==first Viceroy=="],
         ["", "the ==Revolt of 1857==; the ==Act of 1858==; the ==Councils Act 1861=="],
         ["", "==withdrew the Doctrine of Lapse=="]] },

  { h: "Lytton and Ripon — the pair",
    lv: [["Lytton", "==1876–80== — the ==Vernacular Press Act== and ==Arms Act==, ==1878=="],
         ["", "the ==Delhi Durbar of 1877==, during a ==famine==; ICS age cut from ==21 to 19=="],
         ["Ripon", "==1880–84== — ==repealed== the Vernacular Press Act; the ==Ilbert Bill=="],
         ["", "==local self-government, 1882== — the ==father of local self-government in India=="],
         ["", "the ==first Factory Act, 1881=="]],
    m: "Lytton passed it, Ripon repealed it. That is the Vernacular Press Act question." },

  { h: "Curzon to Hardinge",
    lv: [["Curzon", "==1899–1905== — the ==Partition of Bengal=="],
         ["", "the ==Indian Universities Act 1904==, ==Ancient Monuments Act 1904==, and the ==NWFP=="],
         ["Minto", "==1905–10== — the ==Morley–Minto Reforms== and ==separate electorates=="],
         ["Hardinge", "==1910–16== — the ==Delhi Durbar 1911==: partition ==annulled==, capital ==moved=="],
         ["", "survived a ==bomb attack== in ==1912=="]] },

  { h: "The last Viceroys",
    lv: [["Chelmsford", "==1916–21== — ==Montagu–Chelmsford== and the ==1919 Act=="],
         ["", "the ==Rowlatt Act== and ==Jallianwala Bagh=="],
         ["Irwin", "==1926–31== — the ==Simon Commission==, the ==Dandi March==, the ==Gandhi–Irwin Pact=="],
         ["Linlithgow", "==1936–43== — declared India ==at war without consultation=="],
         ["", "the ==August Offer==, the ==Cripps Mission==, ==Quit India=="],
         ["Wavell", "==1943–47== — the ==Wavell Plan== and ==Simla Conference 1945==; the ==INA trials=="],
         ["", "the ==Cabinet Mission== and the ==Interim Government=="],
         ["Mountbatten", "==1947== — the ==last Viceroy==; the ==3 June Plan=="]] },

  { h: "The firsts and the lasts",
    lv: [["First GG of Bengal", "==Warren Hastings==, ==1774=="],
         ["First GG of India", "==William Bentinck==, ==1833=="],
         ["First Viceroy", "==Canning==, ==1858=="],
         ["Last Viceroy", "==Mountbatten==, ==1947== — and ==first Governor-General of free India=="],
         ["Only Indian GG", "==C. Rajagopalachari==, ==1948–50== — and the ==last=="]] }
]},

/* ================================================= THE TREATIES */
treaties: {
hub: "The treaties",
sub: "Which year, between whom, which war",
br: [
  { h: "Bengal, and the Company",
    lv: [["Alinagar 1757", "British and ==Siraj-ud-Daulah== — ==months before Plassey==, and it ==settled nothing=="],
         ["Allahabad 1765", "the Company and ==Shah Alam II== — the ==Diwani== of ==Bengal, Bihar and Orissa=="],
         ["", "the ==single most consequential== treaty on the list"]] },

  { h: "The Marathas",
    lv: [["Wadgaon 1779", "a ==British defeat== in the ==First== Anglo-Maratha War"],
         ["Salbai 1782", "==ended the First War== — and bought about ==twenty years== of peace"],
         ["Bassein 1802", "==Baji Rao II== accepts the ==Subsidiary Alliance== — which ==started the Second War=="],
         ["Deogaon 1803", "==Raghuji II Bhonsle=="],
         ["Surji-Anjangaon 1803", "==Daulat Rao Scindia== — major territories ceded"]] },

  { h: "Mysore",
    lv: [["Madras 1769", "==Hyder Ali== — ended the ==First== Anglo-Mysore War"],
         ["Mangalore 1784", "==Tipu Sultan== — ended the ==Second==, each side ==restoring== what it took"],
         ["Seringapatam 1792", "ended the ==Third== — Tipu ceded ==about half== his territory"],
         ["The Fourth", "==1799== — no treaty; ==Tipu died== at ==Seringapatam=="]] },

  { h: "The Sikhs, and Kashmir",
    lv: [["Amritsar 1809", "==Maharaja Ranjit Singh== — the ==Sutlej== as the line that mattered"],
         ["Lahore 1846", "ended the ==First== Anglo-Sikh War"],
         ["Amritsar 1846", "==Gulab Singh== — ==Kashmir== transferred for ==₹75 lakh=="]],
    m: "Two Amritsars: 1809 is Ranjit Singh and the Sutlej; 1846 is Gulab Singh and Kashmir." },

  { h: "The frontier",
    lv: [["Sugauli 1816", "==Nepal== — ended the ==Anglo-Nepalese (Gurkha) War== of 1814–16"],
         ["Gandamak 1879", "==Afghanistan== — ended the ==Second== Anglo-Afghan War"],
         ["Rawalpindi 1919", "ended the ==Third== — Afghanistan's control of its own ==foreign affairs== recognised"]] }
]},

/* ===================================== THE QUICK-FACT TABLES */
facts: {
hub: "The quick facts",
sub: "Newspapers, books, slogans, risings, trials, firsts",
br: [
  { h: "Newspapers and who ran them",
    lv: [["Bengal Gazette, 1780", "==James Augustus Hicky== — the ==first newspaper printed in India=="],
         ["Sambad Kaumudi", "==Ram Mohan Roy== — and ==Mirat-ul-Akhbar== in Persian"],
         ["Kesari and Maratha", "==Tilak== — ==Marathi== and ==English=="],
         ["Bande Mataram", "==Aurobindo Ghosh==, with ==Bipin Chandra Pal=="],
         ["Al-Hilal, Al-Balagh", "==Maulana Azad=="],
         ["Young India, Harijan", "==Gandhi==, in India — ==Indian Opinion== was in South Africa"],
         ["The Hindu, 1878", "==G. Subramania Iyer=="],
         ["Comrade, Hamdard", "==Muhammad Ali=="]] },

  { h: "Books and authors",
    lv: [["Poverty and Un-British Rule", "==Dadabhai Naoroji== — the ==drain of wealth=="],
         ["Gita Rahasya", "==Tilak==, written in ==Mandalay jail=="],
         ["Anandamath", "==Bankim Chandra== — it contains ==Vande Mataram=="],
         ["Gitanjali", "==Tagore== — the ==Nobel Prize, 1913=="],
         ["Hind Swaraj", "==Gandhi=="],
         ["India Wins Freedom", "==Maulana Azad=="],
         ["Annihilation of Caste", "==Ambedkar=="],
         ["Why I Am an Atheist", "==Bhagat Singh=="],
         ["The Indian War of Independence", "==V. D. Savarkar== — the book that called ==1857 a war of independence=="]] },

  { h: "Slogans, and who is responsible",
    lv: [["Swaraj is my birthright", "==Tilak=="],
         ["Do or Die", "==Gandhi==, ==8 August 1942==, launching Quit India"],
         ["Give me blood", "==Subhas Chandra Bose==, to the INA — and =='Delhi Chalo'=="],
         ["Inquilab Zindabad", "coined by ==Hasrat Mohani== — ==popularised== by Bhagat Singh"],
         ["Quit India, Simon Go Back", "==both== coined by ==Yusuf Meherally=="],
         ["Vande Mataram", "==Bankim Chandra==, in ==Anandamath=="]],
    m: "Two of the most famous slogans were coined by one man nobody names: Yusuf Meherally." },

  { h: "Tribal and peasant risings",
    lv: [["Sannyasi, 1763–1800", "Bengal — the setting of ==Anandamath=="],
         ["Paika, 1817", "Odisha — ==Bakshi Jagabandhu=="],
         ["Khasi, 1829–33", "Meghalaya hills — ==Tirot Sing=="],
         ["Santhal Hool, 1855–56", "Rajmahal hills — ==Sidhu and Kanhu Murmu=="],
         ["Indigo, 1859–60", "Bengal — ==Digambar and Bishnu Biswas=="],
         ["Munda Ulgulan, 1899–1900", "==Birsa Munda== — led to the ==Chotanagpur Tenancy Act 1908=="],
         ["Rampa, 1922–24", "Andhra — ==Alluri Sitarama Raju=="],
         ["Telangana, 1946–51", "the ==largest armed peasant rising== in modern India"]] },

  { h: "The famous trials",
    lv: [["Alipore Bomb, 1908", "==Aurobindo==, defended by ==C. R. Das== and ==acquitted=="],
         ["Delhi Conspiracy, 1912", "the bomb at ==Viceroy Hardinge== — ==Rash Behari Bose escaped=="],
         ["Kakori, 1925", "==Bismil==, ==Ashfaqullah Khan==, Roshan Singh and Rajendra Lahiri ==hanged=="],
         ["Lahore Conspiracy, 1929–31", "==Bhagat Singh==, Sukhdev and Rajguru — hanged ==23 March 1931=="],
         ["INA trials, 1945–46", "at the ==Red Fort== — ==one Muslim, one Hindu, one Sikh=="],
         ["", "defended by ==Bhulabhai Desai==, Sapru and ==Nehru==; the sentences were ==remitted=="]] },

  { h: "Firsts",
    lv: [["First Indian in the ICS", "==Satyendranath Tagore==, ==1863=="],
         ["First Indian in the Commons", "==Dadabhai Naoroji==, ==1892=="],
         ["First railway line", "==Bombay to Thane==, ==34 km==, ==April 1853=="],
         ["First universities", "==Calcutta, Bombay and Madras==, all ==1857=="],
         ["First newspaper", "==Bengal Gazette==, ==1780=="]] }
]}

}};
