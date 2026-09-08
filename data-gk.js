/* The Article Machine — data-gk.js
   Static General Knowledge: the material that does not change from year to
   year and is therefore worth learning once, properly.

   WHAT "STATIC" MEANS AND WHY IT MATTERS HERE. Everything in this file is
   chosen because the answer is stable — a river's source, who built a
   monument, which vitamin's absence causes which disease. Current affairs
   are deliberately not here; they belong somewhere that can be updated
   weekly, and mixing them in is how a study file quietly goes stale.

   A few entries are unavoidably dated — the number of World Heritage Sites,
   the head of an organisation. Each of those carries the date it is true as
   of, so it reads as dated rather than as wrong.

   WHERE THE POPULAR ANSWER IS WRONG, THIS FILE SAYS SO. India has no
   national game. The four lions of the national emblem are not four in the
   image. The Amazon may be longer than the Nile. A `careful` note marks
   every place where the confidently repeated answer is not the accurate
   one — those are worth more than the easy rows around them.               */

window.GK = {

packs: [

/* =================================================================== */
{id:"symbols", n:"National symbols and identity", hy:1,
 w:"The flag, the emblem, the anthem — and the three things India does not officially have.",
 intro:"Almost every one of these was adopted in a six-month window around independence and the commencement of the Constitution, and the dates are what get asked. The traps are at the end: India has no national game, no national language, and the emblem does not show four lions.",
 blocks:[
  {h:"The flag",
   rows:[
    ["Adopted","22 July 1947, by the Constituent Assembly — three weeks before independence"],
    ["Design","Based on the Swaraj flag designed by Pingali Venkayya"],
    ["Ratio","3:2, length to width"],
    ["The wheel","The Ashoka Chakra, in navy blue, with 24 spokes — taken from the abacus of the Lion Capital at Sarnath. It replaced the spinning wheel of the Swaraj flag"],
    ["The colours","Saffron, white and India green, in equal horizontal bands"],
    ["Governed by","The Flag Code of India, 2002, and the Prevention of Insults to National Honour Act, 1971"]
   ]},
  {h:"The emblem",
   rows:[
    ["Adopted","26 January 1950"],
    ["Taken from","The Lion Capital of Ashoka at Sarnath, carved about 250 BCE"],
    ["The lions","Four, placed back to back — but only three are ever visible in the emblem, because the fourth is hidden behind"],
    ["The motto","Satyameva Jayate — 'Truth alone triumphs' — from the Mundaka Upanishad, inscribed in Devanagari below the abacus"],
    ["Careful","The motto is not part of the original Sarnath capital. It was added when the emblem was adopted"],
    ["The animals on the abacus","An elephant, a bull, a horse and a lion, separated by wheels"]
   ]},
  {h:"Anthem and song",
   rows:[
    ["National anthem","Jana Gana Mana, by Rabindranath Tagore. First sung on 27 December 1911 at the Calcutta session of the Congress; adopted by the Constituent Assembly on 24 January 1950"],
    ["Playing time","Fifty-two seconds for the full version; about twenty seconds for the short version"],
    ["Written in","Bengali, as Bharoto Bhagyo Bidhata. The adopted version is the Hindi translation"],
    ["National song","Vande Mataram, by Bankim Chandra Chattopadhyay, published in the novel Anandamath in 1882 and first sung at the 1896 Calcutta session of the Congress"],
    ["Their status","Equal. Rajendra Prasad's statement to the Constituent Assembly on 24 January 1950 gave the national song the same honour as the anthem"]
   ]},
  {h:"The rest of the list",
   rows:[
    ["National animal","Royal Bengal Tiger — adopted in 1973, replacing the lion"],
    ["National bird","Indian Peacock, adopted 1963"],
    ["National flower","Lotus"],
    ["National tree","Banyan"],
    ["National fruit","Mango"],
    ["National river","Ganga, declared in 2008"],
    ["National aquatic animal","Gangetic river dolphin, declared 2009"],
    ["National heritage animal","Indian elephant, declared 2010"],
    ["National calendar","The Saka calendar, adopted 22 March 1957. Its first month is Chaitra and its era begins in 78 CE"],
    ["Currency symbol","₹ — designed by D. Udaya Kumar, adopted 15 July 2010"]
   ]},
  {h:"What India does NOT have",
   note:"Three of the most reliably wrong 'facts' in general knowledge.",
   rows:[
    ["No national game","Hockey is universally assumed to be it. The Government has stated in replies to right-to-information requests that no game has ever been declared the national game"],
    ["No national language","Hindi in the Devanagari script is the official language of the Union under Article 343, alongside English. 'Official' is not 'national', and the Constitution never uses the second word"],
    ["No national dish, dress or vegetable","None has ever been declared, despite the lists that circulate"]
   ]}
 ]},

/* =================================================================== */
{id:"dance", n:"Dance, music and heritage arts", hy:1,
 w:"The eight classical dances, the folk forms by state, and India's UNESCO intangible heritage.",
 intro:"Eight dance forms are recognised as classical by the Sangeet Natak Akademi. Sattriya is the one people forget, because it was added last — in 2000. The theoretical basis of all of them is the Natya Shastra, attributed to Bharata Muni.",
 blocks:[
  {h:"The eight classical dances",
   rows:[
    ["Bharatanatyam","Tamil Nadu. The oldest, temple-born, danced traditionally by devadasis; revived in the twentieth century by Rukmini Devi Arundale"],
    ["Kathak","North India, principally Uttar Pradesh. The only classical form with both Hindu and Muslim court lineages — the Lucknow, Jaipur and Banaras gharanas"],
    ["Kathakali","Kerala. Story-play; elaborate make-up and costume; traditionally all-male"],
    ["Kuchipudi","Andhra Pradesh. Danced drama, with speech and song by the dancer"],
    ["Odissi","Odisha. Tribhanga — the three-bend posture — is its signature"],
    ["Manipuri","Manipur. Ras Leela; gentler, without the sharp foot-strikes of the others"],
    ["Mohiniyattam","Kerala. Solo, danced by women; the name means the dance of the enchantress"],
    ["Sattriya","Assam. From the Vaishnava monasteries founded by Srimanta Sankardeva. Recognised as classical only in 2000, which is why it is the one that gets missed"]
   ]},
  {h:"Folk dances by state",
   rows:[
    ["Punjab","Bhangra (men), Giddha (women)"],
    ["Gujarat","Garba, Dandiya Raas"],
    ["Rajasthan","Ghoomar, Kalbelia, Kathputli"],
    ["Maharashtra","Lavani, Tamasha, Dhangari Gaja"],
    ["Assam","Bihu"],
    ["West Bengal","Chhau (Purulia), Gambhira, Baul"],
    ["Jharkhand","Chhau (Seraikella), Paika"],
    ["Odisha","Chhau (Mayurbhanj), Ghumura"],
    ["Bihar","Jat-Jatin, Bidesia"],
    ["Uttar Pradesh","Charkula, Raslila, Nautanki"],
    ["Himachal Pradesh","Nati"],
    ["Uttarakhand","Chholiya, Jhora"],
    ["Haryana","Khoria, Jhumar"],
    ["Jammu & Kashmir","Rouf, Dumhal"],
    ["Madhya Pradesh","Matki, Gaur"],
    ["Chhattisgarh","Panthi, Raut Nacha"],
    ["Karnataka","Yakshagana, Dollu Kunitha"],
    ["Kerala","Theyyam, Kaikottikali, Padayani"],
    ["Tamil Nadu","Karagattam, Kolattam, Kummi"],
    ["Andhra Pradesh & Telangana","Perini, Lambadi, Dhimsa"],
    ["Manipur","Thang Ta, Dhol Cholom"],
    ["Mizoram","Cheraw — the bamboo dance"],
    ["Nagaland","Chang Lo, Zeliang"],
    ["Meghalaya","Nongkrem, Laho, Shad Suk Mynsiem"],
    ["Tripura","Hojagiri"],
    ["Arunachal Pradesh","Bardo Chham, Ponung"],
    ["Sikkim","Singhi Chham — the snow lion dance"],
    ["Goa","Dekhni, Fugdi, Dhalo"]
   ]},
  {h:"UNESCO Intangible Cultural Heritage from India",
   note:"Fifteen elements as of 2025, counting the multinational Nowruz that India joined in 2016.",
   rows:[
    ["2008","Kutiyattam Sanskrit theatre; the tradition of Vedic chanting; Ramlila"],
    ["2009","Ramman, the religious festival and ritual theatre of Garhwal"],
    ["2010","Chhau dance; Kalbelia folk songs and dances of Rajasthan; Mudiyettu of Kerala"],
    ["2012","Buddhist chanting of Ladakh"],
    ["2013","Sankirtana — ritual singing, drumming and dancing of Manipur"],
    ["2014","The brass and copper craft of the Thatheras of Jandiala Guru, Punjab"],
    ["2016","Yoga; and Nowruz, jointly with several other countries"],
    ["2017","Kumbh Mela"],
    ["2021","Durga Puja in Kolkata"],
    ["2023","Garba of Gujarat"]
   ]},
  {h:"Music",
   rows:[
    ["The two systems","Hindustani in the north, Carnatic in the south. The split is usually traced to around the thirteenth century"],
    ["Carnatic trinity","Tyagaraja, Muthuswami Dikshitar and Syama Sastri"],
    ["Foundational text","The Natya Shastra, attributed to Bharata Muni — dance, drama and music together"],
    ["Sitar","Ravi Shankar, Vilayat Khan"],
    ["Sarod","Ali Akbar Khan, Amjad Ali Khan"],
    ["Shehnai","Bismillah Khan"],
    ["Flute","Hariprasad Chaurasia"],
    ["Santoor","Shivkumar Sharma"],
    ["Tabla","Zakir Hussain, Alla Rakha"],
    ["Veena","Chitti Babu, S. Balachander"],
    ["Sarangi","Ram Narayan"]
   ]}
 ]},

/* =================================================================== */
{id:"awards", n:"Awards and honours", hy:1,
 w:"Civilian, gallantry, literary, film and sporting awards, in order of precedence.",
 intro:"Two things are asked about awards: the order of precedence, and the firsts. The order is fixed and short enough to learn outright. Note that the Bharat Ratna is not a title within the meaning of Article 18 — the Supreme Court has held so — but it still cannot be used as a prefix or suffix to the recipient's name.",
 blocks:[
  {h:"Civilian awards",
   rows:[
    ["Order","Bharat Ratna, then Padma Vibhushan, Padma Bhushan, Padma Shri"],
    ["Instituted","All four in 1954"],
    ["Bharat Ratna — first recipients","C. Rajagopalachari, Sarvepalli Radhakrishnan and C.V. Raman, in 1954"],
    ["First posthumous","Lal Bahadur Shastri, 1966"],
    ["Youngest recipient","Sachin Tendulkar, in 2014, at forty"],
    ["Non-Indian recipients","Khan Abdul Ghaffar Khan (1987), the first non-Indian, and Nelson Mandela (1990)"],
    ["How many a year","No more than three"],
    ["Recommended by","The Prime Minister, to the President. There is no formal recommendation for the Bharat Ratna beyond that"],
    ["Announced","Padma awards are announced on Republic Day"]
   ]},
  {h:"Gallantry awards",
   note:"All six were instituted on 26 January 1950 and made effective from 15 August 1947.",
   rows:[
    ["Wartime, in order","Param Vir Chakra, Maha Vir Chakra, Vir Chakra"],
    ["Peacetime, in order","Ashoka Chakra, Kirti Chakra, Shaurya Chakra"],
    ["Designed by","Savitri Khanolkar — Swiss-born, married to an Indian army officer — designed the Param Vir Chakra"],
    ["First Param Vir Chakra","Major Somnath Sharma, posthumously, for Badgam in the 1947 Kashmir operations"],
    ["Careful","The Ashoka Chakra is the highest peacetime gallantry award and outranks the Kirti Chakra. It is not a lesser version of the Param Vir Chakra — the two belong to different lists"]
   ]},
  {h:"Literature and cinema",
   rows:[
    ["Jnanpith Award","India's highest literary award. Instituted 1961, first awarded 1965 to G. Sankara Kurup for Malayalam. Covers the scheduled languages and, since 2013, English"],
    ["Sahitya Akademi Award","1954, for a work in any of the recognised languages"],
    ["Saraswati Samman","1991, K.K. Birla Foundation — for a literary work of the last ten years"],
    ["Dadasaheb Phalke Award","India's highest award in cinema. Instituted 1969; first awarded to Devika Rani"],
    ["National Film Awards","Since 1954; the highest is the Best Feature Film award"],
    ["First Indian to win an Oscar","Bhanu Athaiya, for costume design in Gandhi, 1983. Satyajit Ray received an honorary Oscar in 1992"]
   ]},
  {h:"Sports awards",
   rows:[
    ["Major Dhyan Chand Khel Ratna","The highest sporting honour. Instituted 1991–92 as the Rajiv Gandhi Khel Ratna and renamed in 2021. First recipient: Viswanathan Anand"],
    ["Arjuna Award","1961, for consistently outstanding performance"],
    ["Dronacharya Award","1985, for coaches"],
    ["Dhyan Chand Award","2002, for lifetime contribution"],
    ["Maulana Abul Kalam Azad Trophy","For the best-performing university in inter-university sport"],
    ["National Sports Day","29 August — Dhyan Chand's birthday"]
   ]},
  {h:"Nobel Prizes and India",
   note:"The distinction that gets asked is between Indian citizens and people of Indian origin who were citizens elsewhere when they won.",
   rows:[
    ["Rabindranath Tagore","Literature, 1913 — the first non-European to win it"],
    ["C.V. Raman","Physics, 1930, for the Raman effect"],
    ["Har Gobind Khorana","Medicine, 1968 — an American citizen by then"],
    ["Mother Teresa","Peace, 1979 — an Indian citizen by naturalisation"],
    ["Subrahmanyan Chandrasekhar","Physics, 1983 — an American citizen"],
    ["Amartya Sen","Economic Sciences, 1998"],
    ["Venkatraman Ramakrishnan","Chemistry, 2009 — an American and British citizen"],
    ["Kailash Satyarthi","Peace, 2014, jointly with Malala Yousafzai"],
    ["Abhijit Banerjee","Economic Sciences, 2019 — an American citizen"],
    ["Indian citizens at the time of the award","Tagore, Raman, Mother Teresa, Sen and Satyarthi"]
   ]},
  {h:"International awards won by Indians",
   rows:[
    ["Booker Prize","Salman Rushdie, Midnight's Children (1981); Arundhati Roy, The God of Small Things (1997); Kiran Desai, The Inheritance of Loss (2006); Aravind Adiga, The White Tiger (2008)"],
    ["International Booker Prize","Geetanjali Shree, Tomb of Sand (2022), translated by Daisy Rockwell — the first in any Indian language; Banu Mushtaq, Heart Lamp (2025), translated by Deepa Bhasthi"],
    ["Fields Medal","Manjul Bhargava, 2014 — Canadian-American of Indian origin"],
    ["Ramon Magsaysay Award","Instituted 1957; often called Asia's Nobel. Many Indian recipients, including Vinoba Bhave, the first"],
    ["Miss World and Miss Universe","Reita Faria was the first Indian Miss World (1966); Sushmita Sen the first Indian Miss Universe (1994)"]
   ]}
 ]},

/* =================================================================== */
{id:"sports", n:"Sports: players, terms and trophies", hy:1,
 w:"How many on a side, which term belongs to which game, and who plays for which cup.",
 intro:"Three question types, all pure recall: the number of players, the vocabulary, and the trophy. The trophies are where marks are lost, because several sound like they belong to a different sport than they do.",
 blocks:[
  {h:"Players on a side",
   rows:[
    ["Cricket","11"],["Football","11"],["Hockey","11"],
    ["Volleyball","6"],["Basketball","5"],["Kabaddi","7"],
    ["Water polo","7"],["Kho-Kho","9 on the field, from a squad of 12"],
    ["Baseball","9"],["Netball","7"],["Rugby","15"],
    ["Polo","4"],["Handball","7"],["Badminton doubles","2"]
   ]},
  {h:"Terms and their sport",
   rows:[
    ["Googly, yorker, bouncer, silly point, maiden over, LBW","Cricket"],
    ["Bully, dribble, penalty corner, short corner, astroturf","Hockey"],
    ["Offside, penalty kick, hat-trick, dribble, corner kick","Football"],
    ["Smash, spike, deuce, service, love","Volleyball, and deuce and love also tennis"],
    ["Deuce, volley, let, ace, grand slam","Tennis"],
    ["Dunk, rebound, pivot, free throw","Basketball"],
    ["Raider, cant, lona, ant","Kabaddi"],
    ["Birdie, eagle, bogey, putt, tee, caddie","Golf"],
    ["Gambit, checkmate, stalemate, en passant","Chess"],
    ["Knockout, uppercut, jab, hook, southpaw","Boxing"],
    ["Butterfly, freestyle, breaststroke","Swimming"],
    ["Half nelson, pin, takedown","Wrestling"],
    ["Bull's eye, dart, throw","Darts and archery"]
   ]},
  {h:"Trophies and cups",
   rows:[
    ["Cricket, domestic India","Ranji Trophy, Duleep Trophy, Irani Cup, Vijay Hazare Trophy, Deodhar Trophy"],
    ["Cricket, international","The Ashes (England–Australia), Border–Gavaskar Trophy (India–Australia), Anthony de Mello Trophy (India–England at home)"],
    ["Hockey","Dhyan Chand Trophy, Agha Khan Cup, Beighton Cup, Rangaswami Cup, Sultan Azlan Shah Cup"],
    ["Football, India","Durand Cup — begun in 1888, the oldest football tournament in Asia — Santosh Trophy, Rovers Cup, Subroto Cup, IFA Shield"],
    ["Badminton","Thomas Cup (men's team), Uber Cup (women's team), Sudirman Cup (mixed team), All England Championship"],
    ["Tennis","Davis Cup (men), Billie Jean King Cup (women, formerly the Fed Cup), and the four Grand Slams"],
    ["Table tennis","Swaythling Cup (men), Corbillon Cup (women)"],
    ["Basketball","Federation Cup, Todd Memorial Trophy"],
    ["Chess","Olympiad, and the World Championship"],
    ["Golf","Ryder Cup, Walker Cup"],
    ["Polo","Ezra Cup, Radha Mohan Cup"]
   ]},
  {h:"Grounds and homes",
   rows:[
    ["Lord's, London","Cricket — the home of cricket, and the MCC"],
    ["Wimbledon","Tennis — the only Grand Slam on grass"],
    ["Wembley","Football"],
    ["Augusta National","Golf — the Masters"],
    ["Brooklands","Motor racing"],
    ["Narendra Modi Stadium, Ahmedabad","The largest cricket stadium in the world by capacity"],
    ["Eden Gardens, Kolkata","India's oldest and best-known cricket ground"]
   ]},
  {h:"Indian Olympic milestones",
   rows:[
    ["First individual medal","K.D. Jadhav — bronze in wrestling at Helsinki, 1952"],
    ["First individual gold","Abhinav Bindra — 10 m air rifle at Beijing, 2008"],
    ["First woman to win an Olympic medal","Karnam Malleswari — bronze in weightlifting at Sydney, 2000"],
    ["Hockey","Eight Olympic golds, including six in a row from 1928 to 1956"],
    ["Neeraj Chopra","Gold in the javelin at Tokyo 2020, held in 2021 — India's first Olympic gold in athletics — and silver at Paris 2024"],
    ["Best medal haul","Seven at Tokyo 2020"]
   ]}
 ]},

/* =================================================================== */
{id:"firsts", n:"First in India", hy:1,
 w:"The office-holders, the achievements and the events that came first.",
 intro:"A list, and there is no clever way through it. The pairs worth watching are the ones where 'first' and 'first woman' are different people, and the ones where 'first Indian' and 'first' are different people.",
 blocks:[
  {h:"Office",
   rows:[
    ["First President","Dr Rajendra Prasad — also the only person elected twice"],
    ["First Vice-President","Dr Sarvepalli Radhakrishnan"],
    ["First Prime Minister","Jawaharlal Nehru"],
    ["First Home Minister","Sardar Vallabhbhai Patel"],
    ["First Law Minister","Dr B.R. Ambedkar"],
    ["First Education Minister","Maulana Abul Kalam Azad"],
    ["First Finance Minister","R.K. Shanmukham Chetty"],
    ["First and last Indian Governor-General","C. Rajagopalachari"],
    ["First Speaker of the Lok Sabha","G.V. Mavalankar"],
    ["First Chief Justice of India","H.J. Kania"],
    ["First Chief Election Commissioner","Sukumar Sen"],
    ["First Comptroller and Auditor General","V. Narahari Rao"],
    ["First Indian Commander-in-Chief","General K.M. Cariappa, 1949"],
    ["First Field Marshal","Sam Manekshaw, 1973. K.M. Cariappa was made one in 1986"],
    ["First Chief of Defence Staff","General Bipin Rawat, 2019"]
   ]},
  {h:"First woman",
   rows:[
    ["President","Pratibha Patil, 2007"],
    ["Prime Minister","Indira Gandhi, 1966"],
    ["Governor","Sarojini Naidu, of the United Provinces, 1947"],
    ["Chief Minister","Sucheta Kripalani, of Uttar Pradesh, 1963"],
    ["Speaker of the Lok Sabha","Meira Kumar, 2009"],
    ["Judge of the Supreme Court","Justice M. Fathima Beevi, 1989"],
    ["Chief Justice of a High Court","Justice Leila Seth, Himachal Pradesh, 1991"],
    ["IAS officer","Anna Rajam Malhotra, 1951"],
    ["IPS officer","Kiran Bedi, 1972"],
    ["Ambassador","Vijaya Lakshmi Pandit, who was also the first woman President of the UN General Assembly, in 1953"],
    ["To climb Everest","Bachendri Pal, 1984"],
    ["Tribal woman President","Droupadi Murmu, 2022"]
   ]},
  {h:"Firsts in science, space and industry",
   rows:[
    ["First Indian in space","Wing Commander Rakesh Sharma, 1984, aboard Soyuz T-11"],
    ["First woman of Indian origin in space","Kalpana Chawla, 1997 — an American citizen"],
    ["First Indian satellite","Aryabhata, 19 April 1975, launched by the Soviet Union"],
    ["First satellite on an Indian launcher","Rohini RS-1, 18 July 1980, on SLV-3"],
    ["First nuclear test","Pokhran, 18 May 1974 — Smiling Buddha"],
    ["First nuclear power station","Tarapur, Maharashtra, 1969"],
    ["First railway line","Bombay to Thane, 16 April 1853, about 34 km"],
    ["First metro","Kolkata, 1984"],
    ["First newspaper","The Bengal Gazette, 1780, by James Augustus Hicky"],
    ["First modern universities","Calcutta, Bombay and Madras — all three in 1857"],
    ["First Indian feature film","Raja Harishchandra, 1913, by Dadasaheb Phalke"],
    ["First Indian talkie","Alam Ara, 1931"],
    ["First national park","Hailey National Park, 1936 — now Jim Corbett"]
   ]}
 ]},

/* =================================================================== */
{id:"superlatives", n:"Largest, longest, highest", hy:1,
 w:"The superlatives of India and the world — with the ones that are genuinely contested marked.",
 intro:"Superlatives look like the safest kind of fact and are among the least safe, because the qualifier is usually doing the work: largest by area or by population, longest overall or longest in India, highest by drop or by total fall. Where the qualifier matters, it is spelled out here.",
 blocks:[
  {h:"India — states and land",
   rows:[
    ["Largest state by area","Rajasthan"],
    ["Largest state by population","Uttar Pradesh"],
    ["Smallest state by area","Goa"],
    ["Smallest state by population","Sikkim"],
    ["Largest union territory by area","Ladakh"],
    ["Smallest union territory by area","Lakshadweep"],
    ["Longest coastline","Gujarat"],
    ["Most neighbouring states","Uttar Pradesh, which touches eight states and Delhi. Assam touches seven states"],
    ["Largest desert","The Thar, in Rajasthan"],
    ["Largest delta","The Sundarbans — the largest delta in the world"],
    ["Largest river island","Majuli, in the Brahmaputra, Assam"],
    ["Highest rainfall","Mawsynram in Meghalaya, with Cherrapunji beside it"],
    ["Highest peak wholly within India","Nanda Devi, 7,816 m. Kangchenjunga at 8,586 m is higher but sits on the border with Nepal"]
   ]},
  {h:"India — built things",
   rows:[
    ["Longest dam","Hirakud, on the Mahanadi in Odisha — the longest earthen dam in the world"],
    ["Highest dam","Tehri, on the Bhagirathi in Uttarakhand"],
    ["Tallest statue","The Statue of Unity — Sardar Patel, 182 m, at Kevadia in Gujarat, unveiled 2018. The tallest statue in the world"],
    ["Longest sea bridge","Atal Setu, the Mumbai Trans Harbour Link, about 21.8 km, opened January 2024"],
    ["Longest river bridge","Dhola–Sadiya, the Bhupen Hazarika Setu, about 9.15 km, over the Lohit in Assam"],
    ["Longest rail-road bridge","Bogibeel, about 4.94 km, in Assam"],
    ["Longest railway platform","Shri Siddharoodha Swamiji station at Hubballi, Karnataka — about 1,507 m, the longest in the world"],
    ["Longest highway tunnel","The Atal Tunnel at Rohtang, about 9.02 km — the longest highway tunnel above 10,000 feet in the world"],
    ["Longest national highway","NH 44, running from Srinagar to Kanyakumari, about 3,745 km"],
    ["Largest dome","Gol Gumbaz at Bijapur, Karnataka"],
    ["Largest mosque","Jama Masjid, Delhi"],
    ["Largest cave temple","The Kailasa temple at Ellora — cut downward from a single rock"]
   ]},
  {h:"The world",
   rows:[
    ["Largest country","Russia. The smallest is Vatican City"],
    ["Largest continent","Asia. The smallest is Australia"],
    ["Largest ocean","Pacific. The smallest is the Arctic"],
    ["Highest mountain","Everest, 8,849 m — the height jointly revised by Nepal and China in 2020"],
    ["Deepest point","The Challenger Deep in the Mariana Trench"],
    ["Largest island","Greenland"],
    ["Largest lake","The Caspian Sea. Lake Superior is the largest freshwater lake by area, Baikal by volume and depth"],
    ["Largest bay","The Bay of Bengal"],
    ["Largest peninsula","Arabia"],
    ["Largest archipelago","Indonesia"],
    ["Highest plateau","Tibet"],
    ["Largest coral reef","The Great Barrier Reef"],
    ["Highest waterfall","Angel Falls, Venezuela"],
    ["Largest desert","Antarctica, if a desert is defined by rainfall. The Sahara is the largest hot desert"],
    ["Longest river","Conventionally the Nile. Several measurements put the Amazon longer, and the question is genuinely open — the Amazon is beyond argument the largest by volume"]
   ]}
 ]},

/* =================================================================== */
{id:"rivers", n:"Rivers, dams and lakes", hy:1,
 w:"Sources, tributaries, which dam sits on which river, and the lakes worth knowing.",
 intro:"Indian rivers split cleanly into two families. Himalayan rivers are snow-fed, perennial, and cut deep gorges. Peninsular rivers are rain-fed, seasonal, and run in shallow valleys — except the Narmada and Tapi, which run west through rift valleys and are the exception every question is built around.",
 blocks:[
  {h:"The Himalayan rivers",
   rows:[
    ["Ganga","Rises at the Gangotri glacier as the Bhagirathi. Becomes the Ganga at Devprayag, where the Alaknanda joins. About 2,525 km — India's longest river"],
    ["Ganga's tributaries","Left bank: Ramganga, Gomti, Ghaghara, Gandak, Kosi. Right bank: Yamuna, Son"],
    ["Yamuna","Rises at the Yamunotri glacier. The longest tributary of the Ganga. Its own tributaries are the Chambal, Betwa, Ken, Sindh and Tons — the Tons being the largest"],
    ["Brahmaputra","Rises in Tibet as the Tsangpo, enters India in Arunachal as the Dihang, becomes the Brahmaputra in Assam, the Jamuna in Bangladesh, and finally the Meghna after joining the Padma"],
    ["Indus","Rises in Tibet near Lake Mansarovar. Its five tributaries are the Jhelum, Chenab, Ravi, Beas and Satluj"],
    ["Indus Waters Treaty, 1960","India has the eastern rivers — Ravi, Beas and Satluj. Pakistan has the western — Indus, Jhelum and Chenab. Brokered by the World Bank"],
    ["The five prayags","Vishnuprayag (Alaknanda + Dhauliganga), Nandaprayag (+ Nandakini), Karnaprayag (+ Pindar), Rudraprayag (+ Mandakini), Devprayag (+ Bhagirathi, where the Ganga begins)"]
   ]},
  {h:"The peninsular rivers",
   rows:[
    ["Godavari","Rises at Trimbakeshwar near Nashik. The longest peninsular river — the Dakshina Ganga, the Ganga of the South"],
    ["Krishna","Rises at Mahabaleshwar. Tributaries: Bhima, Tungabhadra, Koyna"],
    ["Kaveri","Rises at Talakaveri in the Brahmagiri hills, Karnataka. Disputed between Karnataka and Tamil Nadu for more than a century"],
    ["Mahanadi","Rises in Chhattisgarh; Hirakud sits on it"],
    ["Narmada","Rises at Amarkantak and flows WEST through a rift valley into the Gulf of Khambhat. It forms no delta — it has an estuary"],
    ["Tapi","Also west-flowing, from Multai in Betul district, Madhya Pradesh"],
    ["Luni","Rises near Ajmer and disappears into the Rann of Kutch without reaching the sea"],
    ["Damodar","The sorrow of Bengal, until the Damodar Valley Corporation"],
    ["Kosi","The sorrow of Bihar — it shifts its course across the plain"],
    ["Careful","Only three major peninsular rivers flow west: the Narmada, the Tapi and the Mahi. Everything else drains east into the Bay of Bengal"]
   ]},
  {h:"Dams — which river, which state",
   rows:[
    ["Bhakra–Nangal","Satluj — Punjab and Himachal Pradesh. Its reservoir is Gobind Sagar"],
    ["Hirakud","Mahanadi — Odisha"],
    ["Tehri","Bhagirathi — Uttarakhand"],
    ["Sardar Sarovar","Narmada — Gujarat"],
    ["Indira Sagar","Narmada — Madhya Pradesh"],
    ["Nagarjuna Sagar","Krishna — Telangana and Andhra Pradesh"],
    ["Tungabhadra","Tungabhadra — Karnataka"],
    ["Krishna Raja Sagara","Kaveri — Karnataka"],
    ["Mettur","Kaveri — Tamil Nadu"],
    ["Idukki","Periyar — Kerala"],
    ["Rihand","Rihand — Uttar Pradesh. Its reservoir, Govind Ballabh Pant Sagar, is India's largest artificial lake"],
    ["Koyna","Koyna — Maharashtra"],
    ["Ukai","Tapi — Gujarat"],
    ["Farakka Barrage","Ganga — West Bengal"],
    ["Salal and Baglihar","Chenab — Jammu and Kashmir"],
    ["Pong","Beas — Himachal Pradesh"],
    ["Ranjit Sagar (Thein)","Ravi — Punjab"]
   ]},
  {h:"Lakes",
   rows:[
    ["Wular","Jammu and Kashmir — India's largest freshwater lake"],
    ["Chilika","Odisha — the largest brackish-water lagoon in India, and among the largest in Asia"],
    ["Vembanad","Kerala — India's longest lake"],
    ["Sambhar","Rajasthan — India's largest inland saline lake"],
    ["Pulicat","Andhra Pradesh and Tamil Nadu — the second largest brackish lagoon"],
    ["Loktak","Manipur — famous for its phumdis, the floating masses of vegetation, and for Keibul Lamjao, the only floating national park in the world"],
    ["Dal and Nagin","Srinagar, Jammu and Kashmir"],
    ["Pangong Tso","Ladakh — about two-thirds of it lies in Chinese-controlled territory"],
    ["Gurudongmar and Tsomgo","Sikkim"],
    ["Lonar","Maharashtra — a crater lake formed by a meteorite impact"],
    ["Kolleru","Andhra Pradesh"],
    ["Ashtamudi","Kerala — a Ramsar site"]
   ]}
 ]},

/* =================================================================== */
{id:"parks", n:"National parks and wildlife", hy:1,
 w:"Which park, which state, which animal — and the conservation projects.",
 intro:"The pattern to hold on to is animal-to-park rather than park-to-state: a question almost always gives you the species. Corbett is the first national park; Hemis is the largest; Keibul Lamjao is the only floating one.",
 blocks:[
  {h:"Parks by their animal",
   rows:[
    ["One-horned rhinoceros","Kaziranga, Assam — also Manas and Orang"],
    ["Asiatic lion","Gir, Gujarat — the only wild population in the world"],
    ["Royal Bengal tiger, in mangroves","Sundarbans, West Bengal"],
    ["Snow leopard","Hemis, Ladakh — India's largest national park"],
    ["Hangul, the Kashmir stag","Dachigam, Jammu and Kashmir"],
    ["Sangai, the brow-antlered deer","Keibul Lamjao, Manipur — the only floating national park in the world"],
    ["Great Indian bustard","Desert National Park, Rajasthan"],
    ["Nilgiri tahr","Eravikulam, Kerala"],
    ["Saltwater crocodile","Bhitarkanika, Odisha"],
    ["Migratory birds, including the Siberian crane historically","Keoladeo Ghana, Bharatpur, Rajasthan"],
    ["Wild ass","The Little Rann of Kutch, Gujarat"],
    ["Lion-tailed macaque","Silent Valley, Kerala"],
    ["Olive ridley turtles","Gahirmatha, Odisha"]
   ]},
  {h:"Tiger reserves and the well-known parks",
   rows:[
    ["Jim Corbett","Uttarakhand — India's first national park, 1936, originally Hailey National Park"],
    ["Madhya Pradesh","Kanha, Bandhavgarh, Pench, Satpura, Panna — the state with the most tigers"],
    ["Rajasthan","Ranthambore, Sariska"],
    ["Karnataka","Bandipur, Nagarhole, Bhadra"],
    ["Kerala and Tamil Nadu","Periyar, Mudumalai, Anamalai"],
    ["Maharashtra","Tadoba–Andhari, Melghat"],
    ["Odisha","Simlipal"],
    ["Arunachal Pradesh","Namdapha — the northernmost lowland evergreen rainforest in the world"]
   ]},
  {h:"Conservation projects and designations",
   rows:[
    ["Project Tiger","Launched 1 April 1973, with nine reserves including Corbett"],
    ["Project Elephant","1992"],
    ["National Tiger Conservation Authority","Statutory since 2006, under the Wildlife Protection Act 1972"],
    ["Wildlife Protection Act","1972 — the schedules that classify species by the protection they get"],
    ["First biosphere reserve","The Nilgiri Biosphere Reserve, 1986"],
    ["Ramsar Convention","Signed at Ramsar, Iran, 1971. India joined in 1982; Chilika and Keoladeo were the first two Indian sites. India crossed 75 sites in 2022 and has kept adding — the most of any country in Asia"],
    ["Tiger census","Conducted every four years by the NTCA with the Wildlife Institute of India"],
    ["Wildlife Institute of India","Dehradun"]
   ]}
 ]},

/* =================================================================== */
{id:"heritage", n:"World Heritage Sites in India", hy:1,
 w:"The UNESCO list — cultural, natural and mixed — with the year each was inscribed.",
 intro:"India had 44 World Heritage Sites as of 2025 — the Maratha Military Landscapes were added that year. The first four were inscribed together in 1983. Of the total, seven are natural and one, Khangchendzonga, is mixed; everything else is cultural.",
 blocks:[
  {h:"The natural and mixed sites",
   note:"Only eight of the forty-four — worth learning as a complete set.",
   rows:[
    ["Kaziranga National Park","Assam, 1985"],
    ["Manas Wildlife Sanctuary","Assam, 1985"],
    ["Keoladeo National Park","Rajasthan, 1985"],
    ["Sundarbans National Park","West Bengal, 1987"],
    ["Nanda Devi and Valley of Flowers","Uttarakhand, 1988, extended 2005"],
    ["Western Ghats","Across six states, 2012"],
    ["Great Himalayan National Park","Himachal Pradesh, 2014"],
    ["Khangchendzonga National Park","Sikkim, 2016 — India's only mixed site, cultural and natural together"]
   ]},
  {h:"Cultural sites — the older inscriptions",
   rows:[
    ["1983","Ajanta Caves and Ellora Caves, Maharashtra; Agra Fort and the Taj Mahal, Uttar Pradesh"],
    ["1984","Sun Temple at Konark, Odisha; the monuments at Mahabalipuram, Tamil Nadu"],
    ["1986","Churches and convents of Goa; Khajuraho, Madhya Pradesh; Hampi, Karnataka; Fatehpur Sikri, Uttar Pradesh"],
    ["1987","Pattadakal, Karnataka; Elephanta Caves, Maharashtra; the Great Living Chola Temples, Tamil Nadu"],
    ["1989","Buddhist monuments at Sanchi, Madhya Pradesh"],
    ["1993","Humayun's Tomb and the Qutb Minar complex, Delhi"],
    ["1999 onward","The Mountain Railways of India — Darjeeling (1999), Nilgiri (2005) and Kalka–Shimla (2008)"],
    ["2002","Mahabodhi Temple Complex, Bodh Gaya, Bihar"],
    ["2003","Rock shelters of Bhimbetka, Madhya Pradesh"],
    ["2004","Champaner–Pavagadh, Gujarat; Chhatrapati Shivaji Terminus, Mumbai"],
    ["2007","Red Fort Complex, Delhi"]
   ]},
  {h:"Cultural sites — the recent inscriptions",
   rows:[
    ["2010","Jantar Mantar, Jaipur"],
    ["2013","Hill Forts of Rajasthan — six of them"],
    ["2014","Rani-ki-Vav, the stepwell at Patan, Gujarat"],
    ["2016","Nalanda Mahavihara, Bihar; the Capitol Complex at Chandigarh, as part of Le Corbusier's work"],
    ["2017","The historic city of Ahmedabad — India's first World Heritage City"],
    ["2018","Victorian Gothic and Art Deco Ensembles of Mumbai"],
    ["2019","Jaipur City, Rajasthan"],
    ["2021","Ramappa Temple, Telangana; Dholavira, a Harappan city in Gujarat"],
    ["2023","Santiniketan, West Bengal; the Sacred Ensembles of the Hoysalas, Karnataka"],
    ["2024","Moidams — the mound-burial system of the Ahom dynasty, Charaideo, Assam"],
    ["2025","Maratha Military Landscapes of India — twelve forts across Maharashtra and Tamil Nadu"]
   ]}
 ]},

/* =================================================================== */
{id:"monuments", n:"Monuments and who built them", hy:1,
 w:"Builder, place and dynasty for the monuments that get asked.",
 intro:"The reliable trap is the Mughal succession: Akbar, Jahangir and Shah Jahan each built things attributed to the others, and two Moti Masjids and two Red Forts exist. Read the place as carefully as the name.",
 blocks:[
  {h:"Delhi Sultanate",
   rows:[
    ["Qutb Minar","Begun by Qutb-ud-din Aibak, completed by Iltutmish. Delhi"],
    ["Quwwat-ul-Islam Mosque","Qutb-ud-din Aibak — the first mosque built in Delhi"],
    ["Alai Darwaza","Alauddin Khalji"],
    ["Siri Fort","Alauddin Khalji"],
    ["Tughlaqabad Fort","Ghiyasuddin Tughlaq"],
    ["Feroz Shah Kotla","Feroz Shah Tughlaq, who also moved two Ashokan pillars to Delhi"],
    ["Lodi Gardens tombs","The Lodi dynasty"]
   ]},
  {h:"The Mughals",
   rows:[
    ["Humayun's Tomb","Commissioned by Humayun's widow Bega Begum, known as Haji Begum. Architect Mirak Mirza Ghiyas. The first great Mughal garden tomb, and the model for the Taj"],
    ["Fatehpur Sikri, Buland Darwaza, Panch Mahal","Akbar. The Buland Darwaza commemorates his Gujarat victory"],
    ["Agra Fort","Akbar, with later additions by Shah Jahan"],
    ["Itmad-ud-Daulah's Tomb","Built by Nur Jahan for her father — the 'Baby Taj', the first Mughal building faced entirely in marble"],
    ["Taj Mahal","Shah Jahan, for Mumtaz Mahal. Chief architect Ustad Ahmad Lahauri. Agra"],
    ["Red Fort and Jama Masjid, Delhi","Shah Jahan, with Shahjahanabad around them"],
    ["Moti Masjid","Two of them — Shah Jahan's inside Agra Fort, and Aurangzeb's inside the Red Fort at Delhi"],
    ["Bibi ka Maqbara","Azam Shah, for his mother Dilras Banu Begum, at Aurangabad. A smaller copy of the Taj"],
    ["Careful","There are two Red Forts — Shah Jahan's at Delhi and Akbar's earlier fort at Agra, also built in red sandstone"]
   ]},
  {h:"Temples and southern monuments",
   rows:[
    ["Kailasa Temple, Ellora","Krishna I of the Rashtrakutas — carved downward out of a single rock"],
    ["Brihadeeswarar Temple, Thanjavur","Rajaraja Chola I"],
    ["Sun Temple, Konark","Narasimhadeva I of the Eastern Ganga dynasty — built as a chariot with twenty-four wheels"],
    ["Khajuraho temples","The Chandela rulers"],
    ["Shore Temple and the rathas, Mahabalipuram","The Pallavas, under Narasimhavarman"],
    ["Dilwara Temples, Mount Abu","Jain temples of the Solanki period; Vimal Shah built the first"],
    ["Meenakshi Temple, Madurai","Rebuilt under the Nayaks"],
    ["Charminar","Muhammad Quli Qutb Shah, Hyderabad, 1591"],
    ["Gol Gumbaz","Muhammad Adil Shah, Bijapur — the largest dome in India"],
    ["Golden Temple, Amritsar","The city founded by Guru Ram Das; the temple built under Guru Arjan Dev, its foundation laid by Mian Mir"]
   ]},
  {h:"Colonial and modern",
   rows:[
    ["Hawa Mahal, Jaipur","Sawai Pratap Singh"],
    ["Jantar Mantar observatories","Sawai Jai Singh II — five of them, at Jaipur, Delhi, Ujjain, Mathura and Varanasi"],
    ["Victoria Memorial, Kolkata","Built on Lord Curzon's proposal after Queen Victoria's death"],
    ["Gateway of India, Mumbai","Begun for George V's visit in 1911, completed 1924"],
    ["India Gate and Rashtrapati Bhavan","Edwin Lutyens. Herbert Baker designed the Secretariat blocks and the old Parliament House"],
    ["Lotus Temple, Delhi","A Bahá'í House of Worship, completed 1986"],
    ["Statue of Unity","Sardar Patel, at Kevadia, Gujarat, 2018 — the tallest statue in the world"]
   ]}
 ]},

/* =================================================================== */
{id:"days", n:"Important days", hy:1,
 w:"The national and international days, month by month.",
 intro:"Learn these by the reason rather than the date where you can — National Science Day is the day Raman announced his effect, Teachers' Day is Radhakrishnan's birthday, National Mathematics Day is Ramanujan's. The reason is what makes the date stick.",
 blocks:[
  {h:"January to March",
   rows:[
    ["9 January","Pravasi Bharatiya Divas — the day Gandhi returned from South Africa in 1915"],
    ["12 January","National Youth Day — Vivekananda's birthday"],
    ["15 January","Army Day — Cariappa became the first Indian Commander-in-Chief in 1949"],
    ["23 January","Parakram Diwas — Subhas Chandra Bose's birthday"],
    ["25 January","National Voters' Day, and National Tourism Day"],
    ["26 January","Republic Day"],
    ["30 January","Martyrs' Day — Gandhi's assassination"],
    ["2 February","World Wetlands Day"],
    ["21 February","International Mother Language Day"],
    ["28 February","National Science Day — Raman announced the Raman effect in 1928"],
    ["8 March","International Women's Day"],
    ["21 March","International Day of Forests, and World Poetry Day"],
    ["22 March","World Water Day"],
    ["24 March","World Tuberculosis Day"]
   ]},
  {h:"April to June",
   rows:[
    ["5 April","National Maritime Day"],
    ["7 April","World Health Day — the WHO's founding in 1948"],
    ["22 April","Earth Day"],
    ["24 April","National Panchayati Raj Day — the 73rd Amendment came into force in 1993"],
    ["1 May","International Labour Day"],
    ["8 May","World Red Cross Day — Henry Dunant's birthday"],
    ["11 May","National Technology Day — the Pokhran-II tests, 1998"],
    ["21 May","Anti-Terrorism Day"],
    ["31 May","World No Tobacco Day"],
    ["5 June","World Environment Day"],
    ["12 June","World Day Against Child Labour"],
    ["20 June","World Refugee Day"],
    ["21 June","International Day of Yoga"]
   ]},
  {h:"July to September",
   rows:[
    ["1 July","National Doctors' Day — B.C. Roy's birth and death anniversary — and Chartered Accountants' Day"],
    ["11 July","World Population Day"],
    ["26 July","Kargil Vijay Diwas"],
    ["28 July","World Nature Conservation Day"],
    ["6 and 9 August","Hiroshima Day and Nagasaki Day"],
    ["9 August","Quit India Day"],
    ["15 August","Independence Day"],
    ["20 August","Sadbhavana Diwas"],
    ["23 August","National Space Day — Chandrayaan-3 landed in 2023"],
    ["29 August","National Sports Day — Dhyan Chand's birthday"],
    ["5 September","Teachers' Day — Radhakrishnan's birthday"],
    ["8 September","International Literacy Day"],
    ["14 September","Hindi Diwas — Hindi adopted as an official language in 1949"],
    ["16 September","World Ozone Day"],
    ["27 September","World Tourism Day"]
   ]},
  {h:"October to December",
   rows:[
    ["2 October","Gandhi Jayanti, and the International Day of Non-Violence"],
    ["8 October","Indian Air Force Day — the force was raised in 1932"],
    ["10 October","World Mental Health Day"],
    ["16 October","World Food Day"],
    ["24 October","United Nations Day — the Charter came into force in 1945"],
    ["31 October","National Unity Day — Sardar Patel's birthday"],
    ["11 November","National Education Day — Maulana Azad's birthday"],
    ["14 November","Children's Day — Nehru's birthday"],
    ["19 November","World Toilet Day"],
    ["26 November","Constitution Day, and National Law Day — the Constitution was adopted in 1949"],
    ["1 December","World AIDS Day"],
    ["4 December","Navy Day — Operation Trident, 1971"],
    ["7 December","Armed Forces Flag Day"],
    ["10 December","Human Rights Day"],
    ["22 December","National Mathematics Day — Ramanujan's birthday"],
    ["23 December","Kisan Diwas — Charan Singh's birthday"],
    ["25 December","Good Governance Day"]
   ]}
 ]},

/* =================================================================== */
{id:"books", n:"Books and their authors", hy:1,
 w:"Classical works, the writings of the national movement, and the modern prize-winners.",
 intro:"Autobiographies are the most-asked group, because the title rarely names the person. The second group worth learning cold is the classical Sanskrit and court literature, where the author-to-patron chain is itself a question.",
 blocks:[
  {h:"Classical and medieval",
   rows:[
    ["Arthashastra","Kautilya, also called Chanakya"],
    ["Rajatarangini","Kalhana — a history of the kings of Kashmir"],
    ["Abhijnanashakuntalam, Meghadutam, Raghuvamsha","Kalidasa"],
    ["Mudrarakshasa","Vishakhadatta"],
    ["Mrichchhakatika","Shudraka"],
    ["Harshacharita and Kadambari","Banabhatta, in Harsha's court"],
    ["Panchatantra","Vishnu Sharma"],
    ["Kitab-ul-Hind","Al-Biruni"],
    ["Prithviraj Raso","Chand Bardai"],
    ["Padmavat","Malik Muhammad Jayasi"],
    ["Ramcharitmanas","Tulsidas"],
    ["Gita Govinda","Jayadeva"],
    ["Babarnama","Babur. Humayun Nama was written by Gulbadan Begum, and Tuzuk-i-Jahangiri by Jahangir himself"],
    ["Ain-i-Akbari and Akbarnama","Abul Fazl"]
   ]},
  {h:"The national movement",
   rows:[
    ["The Story of My Experiments with Truth","M.K. Gandhi"],
    ["Hind Swaraj","M.K. Gandhi, 1909"],
    ["The Discovery of India, Glimpses of World History, An Autobiography","Jawaharlal Nehru"],
    ["India Wins Freedom","Maulana Abul Kalam Azad"],
    ["The Indian Struggle","Subhas Chandra Bose"],
    ["Poverty and Un-British Rule in India","Dadabhai Naoroji — the drain theory"],
    ["Gita Rahasya","Bal Gangadhar Tilak, written in Mandalay jail"],
    ["Unhappy India","Lala Lajpat Rai"],
    ["A Nation in Making","Surendranath Banerjee"],
    ["Annihilation of Caste, Who Were the Shudras?, The Problem of the Rupee","B.R. Ambedkar"],
    ["Satyarth Prakash","Dayanand Saraswati"],
    ["Anandamath","Bankim Chandra Chattopadhyay — Vande Mataram appears in it"],
    ["Gitanjali, Gora, Ghare Baire","Rabindranath Tagore"],
    ["Godan, Gaban, Nirmala","Munshi Premchand"]
   ]},
  {h:"Modern and prize-winning",
   rows:[
    ["Midnight's Children","Salman Rushdie"],
    ["The God of Small Things","Arundhati Roy"],
    ["The Inheritance of Loss","Kiran Desai"],
    ["The White Tiger","Aravind Adiga"],
    ["A Suitable Boy","Vikram Seth"],
    ["Interpreter of Maladies, The Namesake","Jhumpa Lahiri"],
    ["Train to Pakistan","Khushwant Singh"],
    ["Tomb of Sand","Geetanjali Shree"],
    ["Heart Lamp","Banu Mushtaq"],
    ["Development as Freedom, Poverty and Famines, The Argumentative Indian","Amartya Sen"],
    ["Wings of Fire, India 2020, Ignited Minds","A.P.J. Abdul Kalam"],
    ["An Era of Darkness","Shashi Tharoor"],
    ["Playing It My Way","Sachin Tendulkar"],
    ["Straight from the Heart","Kapil Dev"],
    ["Unbreakable","Mary Kom"],
    ["Ace Against Odds","Sania Mirza"],
    ["My Country My Life","L.K. Advani"]
   ]},
  {h:"Foreign works that get asked",
   rows:[
    ["The Wealth of Nations","Adam Smith"],
    ["Das Kapital and The Communist Manifesto","Karl Marx, the second with Friedrich Engels"],
    ["The Origin of Species","Charles Darwin"],
    ["The Prince","Niccolò Machiavelli"],
    ["Republic","Plato"],
    ["Leviathan","Thomas Hobbes"],
    ["The Social Contract","Jean-Jacques Rousseau"],
    ["War and Peace","Leo Tolstoy"],
    ["Mein Kampf","Adolf Hitler"],
    ["A Brief History of Time","Stephen Hawking"]
   ]}
 ]},

/* =================================================================== */
{id:"hq", n:"Organisations and headquarters", hy:1,
 w:"Where each body sits, and when it was founded.",
 intro:"Geneva and Washington do most of the work here. The exceptions are what get asked: UNEP in Nairobi, Interpol in Lyon, the cricket ICC in Dubai, the Asian Development Bank in Manila.",
 blocks:[
  {h:"The United Nations system",
   rows:[
    ["United Nations","New York — the Charter came into force 24 October 1945"],
    ["UNESCO","Paris, 1946"],
    ["UNICEF","New York, 1946"],
    ["World Health Organization","Geneva, 1948"],
    ["International Labour Organization","Geneva, 1919 — older than the UN, inherited from the League of Nations"],
    ["Food and Agriculture Organization","Rome, 1945"],
    ["UNEP","Nairobi, 1972 — the only major UN body headquartered in Africa"],
    ["UNHCR","Geneva"],
    ["UNIDO","Vienna"],
    ["World Meteorological Organization","Geneva"],
    ["WIPO","Geneva"],
    ["International Court of Justice","The Hague"],
    ["IAEA","Vienna, 1957"],
    ["IMO","London"],
    ["ICAO","Montreal"],
    ["Universal Postal Union","Berne"]
   ]},
  {h:"Financial and trade bodies",
   rows:[
    ["International Monetary Fund","Washington DC"],
    ["World Bank","Washington DC"],
    ["World Trade Organization","Geneva, 1995"],
    ["Asian Development Bank","Manila, 1966"],
    ["Asian Infrastructure Investment Bank","Beijing, 2016"],
    ["New Development Bank","Shanghai — the BRICS bank"],
    ["Bank for International Settlements","Basel"],
    ["OPEC","Vienna, 1960"]
   ]},
  {h:"Other international bodies",
   rows:[
    ["Interpol","Lyon, France"],
    ["Amnesty International","London"],
    ["International Committee of the Red Cross","Geneva"],
    ["WWF","Gland, Switzerland"],
    ["Greenpeace","Amsterdam"],
    ["Transparency International","Berlin"],
    ["NATO","Brussels"],
    ["European Union","Brussels"],
    ["ASEAN","Jakarta, 1967"],
    ["SAARC","Kathmandu, 1985"],
    ["BIMSTEC","Dhaka, 1997"],
    ["Commonwealth Secretariat","London"],
    ["International Olympic Committee","Lausanne"],
    ["FIFA","Zurich"],
    ["International Cricket Council","Dubai"],
    ["OPCW","The Hague"]
   ]},
  {h:"Indian institutions",
   rows:[
    ["Reserve Bank of India, SEBI, NABARD, LIC","Mumbai"],
    ["IRDAI","Hyderabad"],
    ["ISRO","Bengaluru"],
    ["DRDO, CSIR, ICAR, TRAI, NHRC, Election Commission","New Delhi"],
    ["Bhabha Atomic Research Centre","Trombay, Mumbai"],
    ["Survey of India, Forest Survey of India, Wildlife Institute of India, Indian Institute of Remote Sensing","Dehradun"],
    ["Botanical, Zoological and Geological Surveys of India","Kolkata"],
    ["National Institute of Oceanography","Panaji, Goa"],
    ["Lal Bahadur Shastri National Academy of Administration","Mussoorie"],
    ["Sardar Vallabhbhai Patel National Police Academy","Hyderabad"],
    ["National Defence Academy","Khadakwasla, Pune"],
    ["Indian Military Academy","Dehradun"],
    ["Air Force Academy","Dundigal, Hyderabad"],
    ["Indian Naval Academy","Ezhimala, Kerala"],
    ["Vikram Sarabhai Space Centre","Thiruvananthapuram"],
    ["Satish Dhawan Space Centre","Sriharikota, Andhra Pradesh"],
    ["Central Rice Research Institute","Cuttack"],
    ["National Dairy Research Institute","Karnal"],
    ["Physical Research Laboratory","Ahmedabad"]
   ]}
 ]},

/* =================================================================== */
{id:"science", n:"Instruments, units and discoveries", hy:1,
 w:"What each instrument measures, the SI units, and who discovered what.",
 intro:"Instruments are the single most predictable table in general science: the name almost always contains the answer, once you know that -meter measures and -graph records. The exceptions — pyrometer, lactometer, fathometer — are the ones actually asked.",
 blocks:[
  {h:"Instruments and what they measure",
   rows:[
    ["Altimeter","Altitude"],["Ammeter","Electric current"],
    ["Anemometer","Wind speed"],["Audiometer","Intensity of sound"],
    ["Barometer","Atmospheric pressure"],["Calorimeter","Quantity of heat"],
    ["Chronometer","Time, accurately, at sea"],["Fathometer","Depth of the ocean"],
    ["Galvanometer","Small electric currents"],["Hygrometer","Humidity"],
    ["Hydrometer","Relative density of liquids"],["Lactometer","Purity of milk"],
    ["Manometer","Pressure of gases"],["Odometer","Distance travelled by a vehicle"],
    ["Periscope","Viewing objects above the surface — submarines"],
    ["Photometer","Intensity of light"],["Pyrometer","Very high temperatures"],
    ["Refractometer","Refractive index"],["Salinometer","Salinity of a solution"],
    ["Seismograph","Earthquakes"],["Sextant","Angular distance, for navigation"],
    ["Sphygmomanometer","Blood pressure"],["Spherometer","Curvature of a surface"],
    ["Stethoscope","Sounds of the heart and lungs"],["Tachometer","Rotational speed"],
    ["Thermostat","Maintains a constant temperature"],["Venturimeter","Flow rate of a fluid"],
    ["Viscometer","Viscosity"],["Voltmeter","Potential difference"],
    ["Dynamo","Converts mechanical energy to electrical"]
   ]},
  {h:"SI units",
   rows:[
    ["The seven base units","Metre (length), kilogram (mass), second (time), ampere (current), kelvin (temperature), mole (amount of substance), candela (luminous intensity)"],
    ["Force","Newton"],["Pressure","Pascal"],["Energy and work","Joule"],
    ["Power","Watt"],["Electric charge","Coulomb"],["Resistance","Ohm"],
    ["Frequency","Hertz"],["Magnetic flux density","Tesla"],
    ["Radioactivity","Becquerel; the curie is the older unit"],
    ["Absorbed radiation dose","Gray"],["Illuminance","Lux"]
   ]},
  {h:"Discoveries and inventions",
   rows:[
    ["Laws of motion and gravitation","Isaac Newton"],
    ["Theory of relativity","Albert Einstein"],
    ["Periodic table","Dmitri Mendeleev"],
    ["Evolution by natural selection","Charles Darwin"],
    ["Circulation of blood","William Harvey"],
    ["Blood groups","Karl Landsteiner"],
    ["Vaccination against smallpox","Edward Jenner"],
    ["Penicillin","Alexander Fleming"],
    ["X-rays","Wilhelm Roentgen"],
    ["Radioactivity","Henri Becquerel; radium and polonium by Marie and Pierre Curie"],
    ["Electron","J.J. Thomson. The neutron was James Chadwick's"],
    ["Structure of DNA","James Watson and Francis Crick, using Rosalind Franklin's X-ray data"],
    ["Bacteria causing cholera and tuberculosis","Robert Koch"],
    ["Insulin","Frederick Banting and Charles Best"],
    ["Polio vaccine","Jonas Salk"],
    ["Raman effect","C.V. Raman, announced 28 February 1928"],
    ["Telephone","Alexander Graham Bell"],
    ["Electric bulb","Thomas Edison"],
    ["Radio","Guglielmo Marconi, building on work that included J.C. Bose's"],
    ["Dynamite","Alfred Nobel"],
    ["Aeroplane","The Wright brothers"],
    ["Television","John Logie Baird"],
    ["Printing press","Johannes Gutenberg"],
    ["Steam engine","Thomas Newcomen built the first practical one; James Watt made it efficient"]
   ]}
 ]},

/* =================================================================== */
{id:"body", n:"Human body, vitamins and diseases", hy:1,
 w:"The numbers, the deficiency diseases, and which organism causes what.",
 intro:"Two tables carry most of the marks: vitamin to deficiency disease, and pathogen type to disease. Get the second right by remembering that malaria is protozoan, not bacterial or viral — it is the most-asked and most-missed row in the whole subject. This pack is the short revision version. The Biology section has the same ground in full: every pathogen with its scientific name and the organ it attacks, every vitamin with its sources, and every gland with all of its hormones and disorders.",
 blocks:[
  {h:"Vitamins and deficiency",
   note:"Vitamins A, D, E and K are fat-soluble; the B group and C are water-soluble.",
   rows:[
    ["A — retinol","Night blindness, xerophthalmia"],
    ["B1 — thiamine","Beriberi"],
    ["B2 — riboflavin","Cracks at the corners of the mouth, cheilosis"],
    ["B3 — niacin","Pellagra"],
    ["B9 — folic acid","Anaemia, and neural tube defects in a developing foetus"],
    ["B12 — cyanocobalamin","Pernicious anaemia. It is the only vitamin containing a metal — cobalt"],
    ["C — ascorbic acid","Scurvy"],
    ["D — calciferol","Rickets in children, osteomalacia in adults"],
    ["E — tocopherol","Reproductive problems and haemolysis"],
    ["K — phylloquinone","Delayed clotting of blood"],
    ["Iodine","Goitre, and cretinism in children"],
    ["Iron","Anaemia"],
    ["Protein","Kwashiorkor and marasmus"],
    ["Fluoride, in excess","Fluorosis of teeth and bone"]
   ]},
  {h:"The body in numbers",
   rows:[
    ["Bones","206 in an adult; a newborn has about 300, which fuse as it grows"],
    ["Largest bone","Femur. The smallest is the stapes, in the ear"],
    ["Largest organ","Skin. The largest internal organ, and the largest gland, is the liver"],
    ["Largest muscle","Gluteus maximus. The smallest is the stapedius"],
    ["Longest cell","The nerve cell"],
    ["Teeth","32 in an adult; 20 milk teeth"],
    ["Chromosomes","46, in 23 pairs"],
    ["Normal body temperature","About 37°C, or 98.6°F"],
    ["Normal blood pressure","About 120/80 mm of mercury"],
    ["Heart rate","About 72 beats a minute at rest"],
    ["Blood volume","About five to six litres in an adult"],
    ["Life of a red blood cell","About 120 days"],
    ["pH of blood","About 7.4 — slightly alkaline"],
    ["Universal donor and recipient","O negative donates to all; AB positive receives from all"]
   ]},
  {h:"Glands and hormones",
   rows:[
    ["Pituitary","The master gland — it controls the others. Growth hormone"],
    ["Thyroid","Thyroxine. Needs iodine; its absence causes goitre"],
    ["Pancreas","Insulin and glucagon. Insulin deficiency causes diabetes mellitus"],
    ["Adrenal","Adrenaline — the fight-or-flight hormone"],
    ["Parathyroid","Regulates calcium"],
    ["Largest gland","Liver. The largest endocrine gland is the thyroid"]
   ]},
  {h:"What causes which disease",
   rows:[
    ["Bacteria","Tuberculosis, cholera, typhoid, tetanus, plague, leprosy, diphtheria, whooping cough, anthrax"],
    ["Virus","Influenza, AIDS, dengue, chikungunya, rabies, polio, measles, chickenpox, hepatitis, COVID-19"],
    ["Protozoa","Malaria, kala-azar, amoebic dysentery, sleeping sickness"],
    ["Fungus","Ringworm, athlete's foot, candidiasis"],
    ["Worms","Filariasis, ascariasis, tapeworm infection"],
    ["Careful","Malaria is caused by Plasmodium, a protozoan — not a bacterium and not a virus. It is spread by the female Anopheles mosquito"]
   ]},
  {h:"Vectors",
   rows:[
    ["Female Anopheles mosquito","Malaria"],
    ["Aedes aegypti mosquito","Dengue, chikungunya, yellow fever, Zika"],
    ["Culex mosquito","Filariasis, Japanese encephalitis"],
    ["Sandfly","Kala-azar"],
    ["Tsetse fly","Sleeping sickness"],
    ["Housefly","Typhoid, cholera, dysentery"],
    ["Rat flea","Plague"],
    ["Dog bite","Rabies"]
   ]}
 ]},

/* =================================================================== */
{id:"space", n:"Space, nuclear and defence", hy:1,
 w:"ISRO's missions, the nuclear programme, and the armed forces.",
 intro:"Space is the most current-affairs-heavy part of static GK, so the dates here are the ones unlikely to be superseded: firsts, foundings and completed missions.",
 blocks:[
  {h:"ISRO",
   rows:[
    ["Founded","15 August 1969. Its predecessor, INCOSPAR, was set up in 1962 under Vikram Sarabhai"],
    ["Founder","Vikram Sarabhai — the father of the Indian space programme"],
    ["Headquarters","Bengaluru"],
    ["Chairman","V. Narayanan, from January 2025"],
    ["First rocket launch site","Thumba Equatorial Rocket Launching Station, near Thiruvananthapuram — first launch 21 November 1963"],
    ["Main launch site","Satish Dhawan Space Centre, Sriharikota, Andhra Pradesh"],
    ["Launch vehicles","PSLV, GSLV, and LVM3 — formerly GSLV Mk III — the heaviest"],
    ["Record launch","PSLV-C37 put 104 satellites into orbit in a single flight, 15 February 2017"]
   ]},
  {h:"The missions",
   rows:[
    ["Aryabhata","India's first satellite, 19 April 1975, launched by the Soviet Union"],
    ["Rohini RS-1","18 July 1980 — the first satellite placed in orbit by an Indian launch vehicle"],
    ["Chandrayaan-1","2008. Its data established the presence of water molecules on the Moon"],
    ["Chandrayaan-2","2019. The orbiter works; the lander did not survive the descent"],
    ["Chandrayaan-3","Launched 14 July 2023; the Vikram lander touched down on 23 August 2023 near the lunar south pole. India became the fourth country to soft-land on the Moon and the first to land near the south pole. 23 August is now National Space Day"],
    ["Mangalyaan","The Mars Orbiter Mission — launched 5 November 2013, entered Mars orbit 24 September 2014. India was the first country to succeed at Mars on its first attempt"],
    ["Aditya-L1","Launched 2 September 2023 to study the Sun; reached its halo orbit around the L1 point on 6 January 2024"],
    ["Gaganyaan","India's crewed spaceflight programme, under development"],
    ["First Indian in space","Rakesh Sharma, 1984, aboard a Soviet Soyuz"]
   ]},
  {h:"The nuclear programme",
   rows:[
    ["Father of the Indian nuclear programme","Homi J. Bhabha"],
    ["Atomic Energy Commission","1948. The Department of Atomic Energy followed in 1954"],
    ["Pokhran-I","18 May 1974 — Smiling Buddha, described officially as a peaceful nuclear explosion"],
    ["Pokhran-II","11 and 13 May 1998 — Operation Shakti. 11 May is National Technology Day"],
    ["Three-stage programme","Bhabha's design: pressurised heavy water reactors, then fast breeder reactors, then thorium — India has the world's largest thorium reserves and very little uranium"],
    ["Nuclear power stations","Tarapur, Maharashtra (the first, 1969); Rawatbhata, Rajasthan; Kalpakkam, Tamil Nadu; Narora, Uttar Pradesh; Kakrapar, Gujarat; Kaiga, Karnataka; Kudankulam, Tamil Nadu — the largest"]
   ]},
  {h:"Missiles and the armed forces",
   rows:[
    ["Agni","Surface-to-surface ballistic missiles, in several ranges"],
    ["Prithvi","Surface-to-surface, short range"],
    ["Akash","Surface-to-air"],
    ["Nag","Anti-tank"],
    ["BrahMos","Supersonic cruise missile, developed with Russia. The name joins the Brahmaputra and the Moskva"],
    ["Astra","Air-to-air"],
    ["Pinaka","Multi-barrel rocket launcher"],
    ["Missile Man","A.P.J. Abdul Kalam"],
    ["Supreme Commander of the armed forces","The President of India"],
    ["Chief of Defence Staff","Created in 2019; General Bipin Rawat was the first"],
    ["Field Marshals","Sam Manekshaw (1973) and K.M. Cariappa (1986). Arjan Singh was made Marshal of the Indian Air Force in 2002"],
    ["Service days","Army Day 15 January, Navy Day 4 December, Air Force Day 8 October"]
   ]}
 ]},

/* =================================================================== */
{id:"states", n:"States, capitals and borders", hy:1,
 w:"Capitals, formation dates, which state touches which country.",
 intro:"India has 28 states and 8 union territories. The count changed twice recently: Telangana became the 29th state in 2014, and Jammu and Kashmir ceased to be a state in 2019, taking the number back to 28. Daman and Diu merged with Dadra and Nagar Haveli in 2020, taking the union territories from 9 to 8.",
 blocks:[
  {h:"States and capitals",
   rows:[
    ["Andhra Pradesh","Amaravati"],["Arunachal Pradesh","Itanagar"],
    ["Assam","Dispur"],["Bihar","Patna"],["Chhattisgarh","Raipur"],
    ["Goa","Panaji"],["Gujarat","Gandhinagar"],["Haryana","Chandigarh"],
    ["Himachal Pradesh","Shimla, with Dharamshala as the winter capital"],
    ["Jharkhand","Ranchi"],["Karnataka","Bengaluru"],
    ["Kerala","Thiruvananthapuram"],["Madhya Pradesh","Bhopal"],
    ["Maharashtra","Mumbai, with Nagpur as the winter capital"],
    ["Manipur","Imphal"],["Meghalaya","Shillong"],["Mizoram","Aizawl"],
    ["Nagaland","Kohima"],["Odisha","Bhubaneswar"],["Punjab","Chandigarh"],
    ["Rajasthan","Jaipur"],["Sikkim","Gangtok"],["Tamil Nadu","Chennai"],
    ["Telangana","Hyderabad"],["Tripura","Agartala"],
    ["Uttar Pradesh","Lucknow"],["Uttarakhand","Dehradun, with Gairsain as the summer capital"],
    ["West Bengal","Kolkata"]
   ]},
  {h:"Union territories",
   rows:[
    ["Delhi","The National Capital Territory — with a legislature"],
    ["Puducherry","With a legislature"],
    ["Jammu and Kashmir","With a legislature, since 2019"],
    ["Ladakh","Without a legislature, since 2019"],
    ["Chandigarh","Serves as the capital of both Punjab and Haryana"],
    ["Andaman and Nicobar Islands","Capital Port Blair, renamed Sri Vijaya Puram in 2024"],
    ["Lakshadweep","Capital Kavaratti — India's smallest union territory"],
    ["Dadra and Nagar Haveli and Daman and Diu","Merged into one union territory in 2020; capital Daman"]
   ]},
  {h:"When the newer states were formed",
   rows:[
    ["Andhra State, 1953","The first state created on a linguistic basis, after Potti Sriramulu's fast unto death"],
    ["States Reorganisation Act, 1956","Redrew the map along linguistic lines — the biggest single reorganisation"],
    ["Maharashtra and Gujarat, 1960","Bombay State divided"],
    ["Nagaland, 1963; Haryana, 1966; Himachal Pradesh, 1971","—"],
    ["Sikkim, 1975","The 22nd state, by the 36th Amendment"],
    ["Mizoram, Arunachal Pradesh, 1987; Goa, 1987","Goa was the 25th state"],
    ["Chhattisgarh, 1 November 2000","From Madhya Pradesh"],
    ["Uttarakhand, 9 November 2000","From Uttar Pradesh — originally Uttaranchal"],
    ["Jharkhand, 15 November 2000","From Bihar"],
    ["Telangana, 2 June 2014","From Andhra Pradesh — the 29th state at the time"],
    ["Jammu and Kashmir, 31 October 2019","Ceased to be a state; became two union territories"]
   ]},
  {h:"Borders",
   rows:[
    ["Countries India borders on land","Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar and Bangladesh — seven"],
    ["Longest border","With Bangladesh, about 4,096 km. The shortest is with Afghanistan, about 106 km"],
    ["Maritime neighbours","Sri Lanka and the Maldives"],
    ["States touching Pakistan","Gujarat, Rajasthan and Punjab, and the union territories of Jammu and Kashmir and Ladakh"],
    ["Touching China","Ladakh, Himachal Pradesh, Uttarakhand, Sikkim and Arunachal Pradesh"],
    ["Touching Nepal","Uttarakhand, Uttar Pradesh, Bihar, West Bengal and Sikkim"],
    ["Touching Bhutan","Sikkim, West Bengal, Assam and Arunachal Pradesh"],
    ["Touching Myanmar","Arunachal Pradesh, Nagaland, Manipur and Mizoram"],
    ["Touching Bangladesh","West Bengal, Assam, Meghalaya, Tripura and Mizoram"],
    ["The Tropic of Cancer","Passes through eight states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram"],
    ["Coastal states","Nine: Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Odisha and West Bengal"]
   ]},
  {h:"Boundary lines of the world",
   rows:[
    ["Radcliffe Line","India and Pakistan, drawn in 1947"],
    ["McMahon Line","India and China, from the 1914 Simla Convention. China does not accept it"],
    ["Line of Control","India and Pakistan, in Kashmir"],
    ["Durand Line","Pakistan and Afghanistan"],
    ["38th parallel","North and South Korea"],
    ["49th parallel","The United States and Canada"],
    ["17th parallel","Formerly North and South Vietnam"],
    ["Maginot Line","France's fortifications facing Germany"],
    ["Siegfried Line","Germany's, facing France"],
    ["Hindenburg Line","Germany and Poland, from the First World War"],
    ["Oder–Neisse Line","Germany and Poland, since 1945"],
    ["Curzon Line","Poland and Russia"],
    ["Mannerheim Line","Finland's fortifications facing Russia"],
    ["Palk Strait","Separates India from Sri Lanka"]
   ]}
 ]},

/* =================================================================== */
{id:"world", n:"Countries, currencies and parliaments", hy:1,
 w:"Currency by country, the name of each national legislature.",
 intro:"Two matching tables. The currencies with distinctive names — ngultrum, rufiyaa, kyat, taka — are the ones asked; nobody is tested on the dollar.",
 blocks:[
  {h:"Currencies — India's neighbourhood",
   rows:[
    ["Bangladesh","Taka"],["Bhutan","Ngultrum"],["Maldives","Rufiyaa"],
    ["Myanmar","Kyat"],["Nepal","Nepalese rupee"],["Pakistan","Pakistani rupee"],
    ["Sri Lanka","Sri Lankan rupee"],["Afghanistan","Afghani"],["China","Yuan, of the renminbi"]
   ]},
  {h:"Currencies — the rest",
   rows:[
    ["Japan","Yen"],["Russia","Rouble"],["United Kingdom","Pound sterling"],
    ["United States","Dollar"],["Eurozone","Euro"],["Switzerland","Franc"],
    ["Thailand","Baht"],["Vietnam","Dong"],["Indonesia","Rupiah"],
    ["Malaysia","Ringgit"],["South Korea","Won"],["Israel","Shekel"],
    ["Turkey","Lira"],["Iran","Rial"],["Iraq","Dinar"],
    ["Saudi Arabia","Riyal"],["United Arab Emirates","Dirham"],["Kuwait","Dinar"],
    ["Egypt","Egyptian pound"],["South Africa","Rand"],["Nigeria","Naira"],
    ["Kenya","Shilling"],["Brazil","Real"],["Mexico","Peso"],
    ["Sweden","Krona"],["Norway and Denmark","Krone"],["Poland","Zloty"]
   ]},
  {h:"Parliaments by name",
   rows:[
    ["India","Sansad — Lok Sabha and Rajya Sabha"],
    ["United Kingdom","Parliament — House of Commons and House of Lords"],
    ["United States","Congress — House of Representatives and Senate"],
    ["Russia","Federal Assembly — the State Duma and the Federation Council"],
    ["Japan","Diet"],["China","National People's Congress"],
    ["Germany","Bundestag and Bundesrat"],["Israel","Knesset"],
    ["Iran","Majlis"],["Pakistan","Majlis-e-Shoora"],
    ["Bangladesh","Jatiya Sangsad"],["Nepal","Sansad"],
    ["Bhutan","Tshogdu"],["Maldives","Majlis"],
    ["Norway","Storting"],["Sweden","Riksdag"],["Denmark","Folketing"],
    ["Netherlands","States General"],["Spain","Cortes"],["Poland","Sejm"],
    ["Mongolia","Great Hural"],["Turkey","Grand National Assembly"],
    ["Indonesia","People's Consultative Assembly"]
   ]}
 ]}

],

/* ------------------------------------------------------------- confused pairs */

confusions: [

{k:"The eight classical dances — the one people miss",
 rows:[["The seven everyone lists","Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri, Mohiniyattam"],
       ["The eighth","Sattriya, from Assam — recognised as classical only in 2000"],
       ["Not classical","Chhau. It is recognised by UNESCO as intangible heritage and is often called semi-classical, but the Sangeet Natak Akademi's classical list does not include it"]],
 note:"If a question says 'eight classical dances', Sattriya is in and Chhau is out."},

{k:"Kathak or Kathakali",
 rows:[["Kathak","North India. Storytelling through footwork and spins, with Hindu and Mughal court lineages"],
       ["Kathakali","Kerala. Story-play with heavy make-up, enormous costume, and no spoken word from the dancer"],
       ["Mohiniyattam","Also Kerala, but solo, by women, and gentle — the opposite of Kathakali in every respect"]],
 note:"Both names come from katha, story. The one ending in -kali is the Kerala drama."},

{k:"The highest awards, by field",
 rows:[["Civilian","Bharat Ratna"],
       ["Gallantry in war","Param Vir Chakra"],
       ["Gallantry in peace","Ashoka Chakra"],
       ["Literature","Jnanpith Award"],
       ["Cinema","Dadasaheb Phalke Award"],
       ["Sport","Major Dhyan Chand Khel Ratna"],
       ["For coaches","Dronacharya Award"]],
 note:"Ashoka Chakra and Param Vir Chakra are both the highest of their kind — one in peacetime, one in war. Neither outranks the other."},

{k:"Which lake is the largest what",
 rows:[["Wular, Jammu and Kashmir","India's largest freshwater lake"],
       ["Chilika, Odisha","India's largest brackish-water lagoon"],
       ["Sambhar, Rajasthan","India's largest inland saline lake"],
       ["Vembanad, Kerala","India's longest lake"],
       ["Govind Ballabh Pant Sagar, Uttar Pradesh","India's largest artificial lake — the Rihand dam's reservoir"]],
 note:"Four different superlatives, four different lakes. The question always specifies which, and the qualifier is the whole question."},

{k:"West-flowing rivers",
 rows:[["The three that flow west","Narmada, Tapi and Mahi"],
       ["Why it matters","They run through rift valleys and form estuaries, not deltas"],
       ["Everything else","Godavari, Krishna, Kaveri and Mahanadi all drain east into the Bay of Bengal, and all form deltas"]],
 note:"The Luni also flows west, but it never reaches the sea — it dies in the Rann of Kutch."},

{k:"Highest peak in India",
 rows:[["Kangchenjunga, 8,586 m","The highest point in India — but it stands on the border with Nepal"],
       ["Nanda Devi, 7,816 m","The highest peak lying entirely within India"],
       ["K2","In Pakistan-administered Kashmir. Claimed by India, not controlled by it"]],
 note:"The answer depends on whether the question says 'in India' or 'entirely within India'. Both appear."},

{k:"Malaria, dengue and kala-azar",
 rows:[["Malaria","Protozoan — Plasmodium. Female Anopheles mosquito"],
       ["Dengue and chikungunya","Viral. Aedes aegypti mosquito, which bites in the daytime"],
       ["Filariasis and Japanese encephalitis","Culex mosquito"],
       ["Kala-azar","Protozoan — Leishmania. Sandfly, not a mosquito"]],
 note:"Malaria being protozoan rather than bacterial is the single most frequently missed fact in general science."},

{k:"Fat-soluble and water-soluble vitamins",
 rows:[["Fat-soluble","A, D, E and K. Stored in the body, so an excess is possible and can be harmful"],
       ["Water-soluble","The B group and C. Not stored — an excess is excreted, so they need topping up daily"]],
 note:"Remember the fat-soluble four as the letters that are not B or C."},

{k:"Which body publishes it",
 rows:[["Human Development Index","UNDP"],
       ["Global Hunger Index","Concern Worldwide and Welthungerhilfe — not a UN body"],
       ["World Happiness Report","The UN Sustainable Development Solutions Network"],
       ["Global Innovation Index","WIPO"],
       ["Corruption Perceptions Index","Transparency International"],
       ["World Development Report","World Bank"]],
 note:"The trap is always a plausible-sounding UN agency for something published by a charity or a university."},

{k:"National emblem — how many lions",
 rows:[["On the Sarnath capital","Four lions, standing back to back"],
       ["In the state emblem","Only three are visible; the fourth is hidden behind"],
       ["The motto","Satyameva Jayate, from the Mundaka Upanishad — added when the emblem was adopted, not part of the original sculpture"]],
 note:"'How many lions are visible' and 'how many lions are there' have different answers, and both get asked."}

]

};
