/* The Article Machine - data-daily.js
   Daily study sets: one page per study day, labelled with its date.

   WHY THIS EXISTS. Everything else on the site is static: the answer is the
   same this year as last. Current affairs are not, and Static GK says
   plainly that they are kept out of it, because mixing them in is how a
   study file quietly stops being true. They come here instead, where every
   page carries the date it was written for, so a stale fact reads as old
   rather than as wrong.

   A set has two kinds of part:

   - A FULL part carries its own `notes` and `blocks`. The Booker Prize and
     the current holders of each cup live here and nowhere else.
   - A RECAP part carries `from`, the address of notes that already live on
     a subject page (the 1991 reforms, a GK pack, a Mughal topic). The set
     shows those notes and links to the page. Nothing is copied, so the set
     and the page cannot drift apart.

   Adding tomorrow's set is one more entry at the TOP of `sets`, with its
   own id; it appears in the nav strip, the topic hub, the index and the
   search on its own.

   Sources for the current-affairs parts: the Booker Prize Foundation's
   announcements and the official results of each tournament, checked on
   9 October 2026.                                                          */

window.DAILY = {

sets: [

  /* ------------------------------------------- 4 NOVEMBER */
  {id:"4-november", d:"4 November", y:2026,
 w:"The Sustainable Development Goals in full — the 2030 Agenda, all seventeen goals, and India's own index — Census 2011 with every record and ranking it is asked for, and the Mughal empire in detail: reign by reign, the nobility and the provinces, the Rajput and Deccan policies, the Marathas, and why it came apart.",
 intro:"Two of these three were missing from the site altogether. The Sustainable Development Goals appeared only as the name of a NITI Aayog index, and the census of 2011 not at all — both are asked every sitting. The Mughal empire is on the site in five topics; what is here is the part those topics do not carry: the nobility, the provinces, the economy, the Rajput and Deccan policies, and the decline.",
 parts:[

  /* ================================================== SDGs */
  {id:"sdg", tag:"Economy and environment · new on the site", h:"The Sustainable Development Goals",
   w:"Where they came from, what the 2030 Agenda is, and the numbers behind the goals.",
   notes:[
    "The ==17 Sustainable Development Goals== were ==adopted on 25 September 2015== at the ==UN Sustainable Development Summit== in ==New York==, by ==all 193== member states.",
    "The document is ==Transforming our world: the 2030 Agenda for Sustainable Development==, General Assembly ==resolution 70/1==. It ==came into force on 1 January 2016== and runs to ==2030==.",
    "==17 goals==, ==169 targets==, ==231 unique indicators==. ==Goal 17== is ==partnerships==, the one that is about ==how the other sixteen get done==.",
    "The ==five Ps==: ==People, Planet, Prosperity, Peace and Partnership==. The governing principle is ==leave no one behind==.",
    "They ==replaced the Millennium Development Goals==, which ran ==2000 to 2015== and had ==8 goals, 21 targets and 60 indicators==, out of the ==Millennium Declaration== of ==September 2000==.",
    "The phrase ==sustainable development== was defined by the ==Brundtland Report==, ==Our Common Future==, ==1987==: development that ==meets the needs of the present without compromising the ability of future generations to meet their own==. The commission was the ==World Commission on Environment and Development==, chaired by ==Gro Harlem Brundtland== of Norway.",
    "==Earth Summit, Rio de Janeiro, 1992== produced ==Agenda 21==, the ==UNFCCC== and the ==Convention on Biological Diversity==. ==Rio+20== in ==2012== produced ==The Future We Want==, which ==started the process== that wrote the SDGs, through an ==Open Working Group of thirty== countries.",
    "Progress is reviewed at the ==High-Level Political Forum==, which meets ==every year== under ECOSOC and ==every four years== at head-of-government level. Countries report through ==Voluntary National Reviews==.",
    "The ==Sustainable Development Report==, with its ==SDG Index== ranking countries, is published by the ==Sustainable Development Solutions Network== with ==Bertelsmann Stiftung== — it is ==independent, not an official UN ranking==, which is the distinction a question turns on.",
    "The goals are ==not legally binding==. They are a ==political commitment==, which is why the reporting is ==voluntary== and the indicators matter more than the pledges."
   ],
   blocks:[
    {h:"The seventeen goals, in order",
     note:"The numbers are asked directly: which goal is 5, which is 13, which is the last one.",
     rows:[
      ["1","No Poverty"],
      ["2","Zero Hunger"],
      ["3","Good Health and Well-being"],
      ["4","Quality Education"],
      ["5","Gender Equality"],
      ["6","Clean Water and Sanitation"],
      ["7","Affordable and Clean Energy"],
      ["8","Decent Work and Economic Growth"],
      ["9","Industry, Innovation and Infrastructure"],
      ["10","Reduced Inequalities"],
      ["11","Sustainable Cities and Communities"],
      ["12","Responsible Consumption and Production"],
      ["13","Climate Action"],
      ["14","Life Below Water"],
      ["15","Life on Land"],
      ["16","Peace, Justice and Strong Institutions"],
      ["17","Partnerships for the Goals"]
     ]},
    {h:"The road to 2015",
     rows:[
      ["1972","Stockholm Conference on the Human Environment — the first world conference on the environment, and UNEP came out of it"],
      ["1987","The Brundtland Report, Our Common Future, defines sustainable development"],
      ["1992","Earth Summit at Rio: Agenda 21, the UNFCCC and the Convention on Biological Diversity"],
      ["2000","The Millennium Declaration, and the eight Millennium Development Goals for 2000–15"],
      ["2002","World Summit on Sustainable Development, Johannesburg"],
      ["2012","Rio+20: The Future We Want, and an Open Working Group of thirty to draft the goals"],
      ["25 September 2015","The 2030 Agenda adopted by all 193 member states"],
      ["1 January 2016","The goals come into force"]
     ]},
    {h:"MDGs against SDGs",
     rows:[
      ["How many","8 goals, 21 targets, 60 indicators — against 17 goals, 169 targets, 231 indicators"],
      ["Who they applied to","The MDGs were aimed at developing countries; the SDGs apply to EVERY country, rich and poor alike"],
      ["How they were written","The MDGs were drafted by experts in New York; the SDGs came out of three years of open negotiation among states"],
      ["What they left out","The MDGs had little on inequality, climate, peace, or the means of financing. Goals 10, 13, 16 and 17 are the answer to that"],
      ["The period","2000 to 2015, against 2016 to 2030"]
     ]}
   ],
   links:[["#/economy/maps/sdg","The mind map, with a cover-and-recall drill"],
          ["#/economy/topic/international","The world's economic bodies"],
          ["#/economy/topic/reports","The indices and the reports"]]},

  {id:"sdg-india", tag:"Economy · new on the site", h:"India and the SDGs",
   w:"The nodal body, the index, the reviews, and the schemes each goal is mapped to.",
   notes:[
    "==NITI Aayog== is the ==nodal institution== for the SDGs in India — it coordinates, and it is ==not== the Ministry of Environment, which is the common wrong answer.",
    "==MoSPI== — the Ministry of Statistics and Programme Implementation — maintains the ==National Indicator Framework==, the Indian list of indicators against which progress is measured.",
    "The ==SDG India Index== is NITI Aayog's, first published in ==December 2018==, with editions since. It scores ==every State and Union territory== on each goal and gives a ==composite score out of 100==.",
    "The index's composite score for India has risen with each edition — ==57 in 2018==, ==60 in 2019==, ==66 in 2020–21== and ==71 in 2023–24==. ==Kerala== has led in every edition; in ==2023–24== ==Kerala and Uttarakhand== were level at the top.",
    "India has presented ==Voluntary National Reviews== at the High-Level Political Forum in ==2017== and ==2020==.",
    "The ==global SDG Index== published by the SDSN is a ==separate, independent== ranking: India has sat in the ==110s out of 166== in recent editions, and the number ==moves every year==, so the rank is worth knowing as a range rather than a figure.",
    "==Localising== the goals is the Indian emphasis: the ==Panchayati Raj Ministry== has a ==nine-theme Localisation of SDGs== framework for village panchayats to plan against.",
    "The schemes most often mapped to a goal: ==Poshan Abhiyaan== to ==Goal 2==, ==Ayushman Bharat== to ==Goal 3==, ==Samagra Shiksha== to ==Goal 4==, ==Beti Bachao Beti Padhao== to ==Goal 5==, ==Jal Jeevan Mission== and ==Swachh Bharat== to ==Goal 6==, and the ==National Solar Mission== to ==Goal 7==.",
    "==MGNREGA== is usually mapped to ==Goal 8== (decent work) and ==Goal 1==; ==PM Awas Yojana== to ==Goal 11==; the ==National Action Plan on Climate Change== and its eight missions to ==Goal 13==."
   ],
   blocks:[
    {h:"Who does what in India",
     rows:[
      ["NITI Aayog","The nodal body: coordination, the SDG India Index, and the mapping of schemes to goals"],
      ["MoSPI","The National Indicator Framework, and the progress reports built on it"],
      ["Ministry of Panchayati Raj","Localisation of the SDGs, in nine themes, for village-level planning"],
      ["State governments","Their own SDG cells and vision documents; the index scores them against each other"],
      ["Parliament","A Parliamentary forum on the SDGs; the goals are not justiciable and carry no statutory duty"]
     ]},
    {h:"The confusion worth clearing",
     rows:[
      ["SDG India Index against the global SDG Index","NITI Aayog's index scores Indian States against each other. The SDSN's index ranks countries. Different authors, different method, and only the second one gives India a world rank"],
      ["Goals against targets against indicators","17 goals, 169 targets under them, and 231 unique indicators that measure the targets. A question asking ‘how many’ has to say which"],
      ["Legally binding or not","Not binding. The 2030 Agenda is a political commitment, reported on voluntarily"]
     ]}
   ],
   links:[["#/economy/maps/sdg","The mind map"],
          ["#/economy/topic/institutions","NITI Aayog and the planning bodies"],
          ["#/economy/topic/poverty","Poverty and the schemes"]]},

  /* =============================================== CENSUS 2011 */
  {id:"census", tag:"Static GK · new on the site", h:"Census 2011 — the headline numbers",
   w:"Population, growth, density, sex ratio, literacy and urbanisation — the figures every paper draws on.",
   notes:[
    "Census ==2011== was the ==15th census since 1872== and the ==7th after independence==. The Census Commissioner was ==C. Chandramouli==, and the motto was ==Our Census, Our Future==.",
    "==Population: 1,210,854,977== — about ==121.09 crore==. ==Males 62.37 crore==, ==females 58.65 crore==.",
    "==Decadal growth 2001–11: 17.70 per cent==, against ==21.54== in the decade before — the ==sharpest fall in growth== since independence, and the ==first decade in which the absolute number added was smaller== than the decade before.",
    "==Density: 382== persons a square kilometre, up from ==325== in 2001.",
    "==Sex ratio: 943== women to 1,000 men, up from ==933==. The ==child sex ratio (0–6) fell to 919==, from 927 — the ==lowest since independence==, and the figure that gets asked because it moved the ==wrong way==.",
    "==Literacy: 74.04 per cent== — ==male 82.14==, ==female 65.46==. The ==gap narrowed== because female literacy rose faster, and the ==number of illiterates still fell== for the first time in absolute terms.",
    "==Urban population: 31.16 per cent==. For the ==first time since independence== the ==absolute increase in urban population exceeded the increase in rural population==.",
    "==Scheduled Castes: 16.6 per cent== (==20.14 crore==). ==Scheduled Tribes: 8.6 per cent== (==10.43 crore==).",
    "Religion, released in ==2015==: ==Hindu 79.8==, ==Muslim 14.2==, ==Christian 2.3==, ==Sikh 1.7==, ==Buddhist 0.7==, ==Jain 0.4== per cent.",
    "The census is a ==Union subject== — ==entry 69 of the Union List== — conducted under the ==Census Act, 1948==, by the ==Registrar General and Census Commissioner== under the ==Ministry of Home Affairs==.",
    "The ==2021 census was postponed==. In ==June 2025== the Government announced it for ==two phases==, with reference dates of ==1 October 2026== for the snow-bound areas and ==1 March 2027== for the rest, and that ==caste will be enumerated==."
   ],
   blocks:[
    {h:"The headline figures in one table",
     rows:[
      ["Population","1,210,854,977 — 121.09 crore"],
      ["Males and females","62.37 crore and 58.65 crore"],
      ["Decadal growth","17.70 per cent, against 21.54 in 1991–2001"],
      ["Density","382 per sq km, from 325"],
      ["Sex ratio","943, from 933"],
      ["Child sex ratio, 0–6","919, from 927 — the lowest since independence"],
      ["Literacy","74.04 per cent — male 82.14, female 65.46"],
      ["Urban share","31.16 per cent"],
      ["Scheduled Castes","16.6 per cent; Scheduled Tribes 8.6 per cent"]
     ]},
    {h:"India's share of the world",
     rows:[
      ["Of world population","About 17.5 per cent in 2011, on about 2.4 per cent of the world's land"],
      ["Rank then","Second, behind China — India has since passed it on UN estimates"],
      ["The three most populous states together","Uttar Pradesh, Maharashtra and Bihar hold roughly a third of the country"]
     ]}
   ],
   links:[["#/gk/maps/census","The mind map, with a cover-and-recall drill"],
          ["#/gk/pack/states","The states and their capitals"]]},

  {id:"census-records", tag:"Static GK · new on the site", h:"Census 2011 — the state records",
   w:"Highest and lowest, state by state and union territory by union territory — the form the question almost always takes.",
   notes:[
    "==Most populous state: Uttar Pradesh==, ==19.98 crore==. ==Least populous: Sikkim==, ==6.11 lakh==. Among union territories, ==Delhi== the most and ==Lakshadweep== the least, at ==64,473== — the ==smallest population of any unit==.",
    "==Highest density: Bihar, 1,106==; ==lowest: Arunachal Pradesh, 17==. Among union territories, ==Delhi 11,320== the highest and ==Andaman and Nicobar 46== the lowest.",
    "==Highest sex ratio: Kerala, 1,084== — the ==only state above 1,000==. ==Lowest: Haryana, 879==. Among union territories, ==Puducherry 1,037== the highest and ==Daman and Diu 618== the lowest of any unit.",
    "==Highest literacy: Kerala, 93.91==; ==lowest: Bihar, 63.82==. ==Lowest female literacy: Rajasthan, 52.66==.",
    "==Highest decadal growth: Meghalaya, 27.95 per cent==. ==Nagaland was the only state to record a fall==, at ==−0.58 per cent==.",
    "==Lowest child sex ratio: Haryana, 834==. The highest is given variously as ==Mizoram== or ==Arunachal Pradesh==, both about ==970==, and standard lists differ — the ==lowest== is the safer half of the pair to carry.",
    "==Highest share of Scheduled Castes: Punjab, 31.9 per cent==. ==Highest share of Scheduled Tribes: Mizoram, 94.4 per cent== among states, and ==Lakshadweep== among union territories.",
    "==Most urbanised state: Goa==, about ==62 per cent==; among union territories ==Delhi==, about ==97.5==. ==Least urbanised: Himachal Pradesh==, about ==10 per cent==.",
    "==Largest city: Mumbai==; the ==largest urban agglomeration== is also Mumbai, with Delhi and Kolkata behind it.",
    "==Uttar Pradesh== is the largest on ==population==, ==Rajasthan== on ==area== — and the two are offered against each other constantly."
   ],
   blocks:[
    {h:"Highest and lowest, at a glance",
     note:"Where a union territory holds the record, it is given separately: a question usually says ‘state’ or ‘state and union territory’ and means it.",
     rows:[
      ["Population","Highest Uttar Pradesh; lowest Sikkim. UTs: Delhi highest, Lakshadweep lowest"],
      ["Area","Highest Rajasthan; lowest Goa. UTs: Ladakh highest, Lakshadweep lowest"],
      ["Density","Highest Bihar; lowest Arunachal Pradesh. UTs: Delhi highest, Andaman and Nicobar lowest"],
      ["Sex ratio","Highest Kerala 1,084; lowest Haryana 879. UTs: Puducherry 1,037 highest, Daman and Diu 618 lowest"],
      ["Child sex ratio","Lowest Haryana 834; national 919"],
      ["Literacy","Highest Kerala 93.91; lowest Bihar 63.82"],
      ["Decadal growth","Highest Meghalaya 27.95; lowest, and the only negative, Nagaland −0.58"],
      ["Urbanisation","Highest Goa among states, Delhi among UTs; lowest Himachal Pradesh"],
      ["Scheduled Castes","Highest share Punjab 31.9 per cent"],
      ["Scheduled Tribes","Highest share Mizoram 94.4 per cent among states"]
     ]}
   ],
   cmp:[
    {k:"Sex ratio or child sex ratio",
     rows:[
      ["Sex ratio, all ages","943 in 2011, up from 933. It has been IMPROVING"],
      ["Child sex ratio, 0 to 6","919 in 2011, down from 927. It has been WORSENING, and 2011's is the lowest since independence"]
     ],
     note:"The two moved in opposite directions in the same census, which is exactly why both are asked."},
    {k:"Growth rate or population added",
     rows:[
      ["The rate","17.70 per cent, down from 21.54 — the sharpest decline in the growth rate since independence"],
      ["The number","About 18.1 crore people added in the decade — still an enormous absolute increase, and the first decade in which that number was smaller than the decade before"]
     ]},
    {k:"Kerala or Lakshadweep, Bihar or Jharkhand",
     rows:[
      ["Literacy","Kerala is highest among states; Lakshadweep is the highest union territory. Bihar is lowest among states"],
      ["Density","Bihar is the densest state; Delhi the densest union territory. Arunachal Pradesh the least dense"]
     ]}
   ],
   links:[["#/gk/maps/census","The mind map"],
          ["#/gk/pack/superlatives","Largest, longest, highest"],
          ["#/gk/pack/firsts","Firsts and records"]]},

  {id:"census-history", tag:"Static GK · new on the site", h:"The census itself, 1872 to now",
   w:"Who began it, what makes a census synchronous, and the law it runs under.",
   notes:[
    "The ==first census in India== was taken in ==1872==, under ==Lord Mayo== — but ==not everywhere at once==, which is why it is called ==non-synchronous==.",
    "The ==first synchronous census== was ==1881==, under ==Lord Ripon==, conducted by ==W. C. Plowden==. ==Every census since has been decennial==, unbroken through two world wars and partition — until ==2021==.",
    "==1911–21 is the Great Divide==: the ==only decade since 1872 in which India's population fell==, because of the ==influenza pandemic of 1918==, famine and the war.",
    "==1921 is the Year of the Great Divide== and ==1951 the Year of the Small Divide== — the two phrases are asked as a pair. After 1921 the population grew in every decade; after 1951 the growth itself accelerated.",
    "The census is conducted by the ==Registrar General and Census Commissioner of India==, an office under the ==Ministry of Home Affairs==, created in ==1949==.",
    "It runs under the ==Census Act, 1948==, and the subject is ==entry 69 of the Union List== — so it is ==Parliament's== alone. ==Answers are confidential by law== and ==cannot be used as evidence==.",
    "==Houselisting== comes first and the ==population enumeration== second, with a ==revisional round== after it. The ==reference date== is what the count is fixed to — ==1 March== for most of India, and ==1 October== of the previous year for ==snow-bound== areas.",
    "==2011 counted== for the first time on a large scale the ==number of households with a mobile phone, a computer and a bank account==, which is why it is quoted in financial-inclusion questions.",
    "The ==2021 census did not happen== on time. In ==June 2025== the Government announced the next one in ==two phases==, with reference dates ==1 October 2026== and ==1 March 2027==, and said that ==caste would be enumerated== — the first time since ==1931==."
   ],
   blocks:[
    {h:"The dates to hold",
     rows:[
      ["1872","First census, under Lord Mayo — non-synchronous"],
      ["1881","First synchronous census, under Lord Ripon, by W. C. Plowden"],
      ["1911–21","The only decade of decline — the Great Divide"],
      ["1931","The last census in which caste was enumerated in full"],
      ["1948","The Census Act"],
      ["1949","The office of the Registrar General created"],
      ["1951","The Year of the Small Divide — growth begins to accelerate"],
      ["2011","The 15th census, and the 7th after independence"],
      ["2026–27","The next one, announced in June 2025 for two phases, with caste enumerated"]
     ]}
   ],
   links:[["#/gk/maps/census","The mind map"]]},

  /* ============================================= THE MUGHALS */
  {id:"mughal-reigns", tag:"Medieval history · in detail", h:"The Mughal empire, reign by reign",
   w:"What each emperor actually did with the years he had — the campaigns, the treaties and the turns of policy.",
   notes:[
    "==Babur==, ==1526–30==: won at ==Panipat (1526)==, ==Khanwa (1527)==, ==Chanderi (1528)== and ==Ghaghra (1529)==, and ==died at Agra== with the empire only four years old. He wrote the ==Baburnama== in ==Chagatai Turkish==.",
    "==Humayun==, ==1530–40== and ==1555–56==: ==divided the empire with his brothers==, which is the root of his trouble; lost it to ==Sher Shah== at ==Chausa (1539)== and ==Kannauj (1540)==; recovered it at ==Sirhind (1555)== and ==died within a year==, falling down the stairs of his library.",
    "==Akbar==, ==1556–1605==: crowned at ==thirteen==, with ==Bairam Khan== as regent until ==1560==, then the ==petticoat government== of the harem to ==1564==. From ==1564== he ruled himself.",
    "Akbar's conquests, roughly in order: ==Malwa 1561==, ==Gondwana 1564== (==Rani Durgavati==), ==Chittor 1568==, ==Ranthambore 1569==, ==Gujarat 1572–73== (which the ==Buland Darwaza== marks), ==Bengal 1576==, ==Kabul 1585==, ==Kashmir 1586==, ==Sindh 1591==, ==Kandahar 1595==, and the ==Deccan== from ==1595== — ==Ahmadnagar==, where ==Chand Bibi== resisted, and ==Asirgarh 1601==, his last conquest.",
    "==Jahangir==, ==1605–27==: hung the ==Chain of Justice== (==zanjir-i-adl==) at Agra; put down the revolt of his son ==Khusrau==, whose patron ==Guru Arjan Dev== was executed in ==1606==; made ==peace with Mewar in 1615== on terms ==Akbar never got==; ==lost Kandahar to Persia in 1622==; and from about ==1611== his reign was steered by ==Nur Jahan== and the group around her.",
    "==Shah Jahan==, ==1628–58==: the ==Deccan== brought to terms — ==Ahmadnagar annexed 1636==, with ==Bijapur and Golconda== made tributary; the ==Uzbek campaign== in ==Balkh and Badakhshan== failed expensively; ==Kandahar was lost for good== after ==three failed sieges==; and the ==Portuguese were driven from Hugli== in ==1632==.",
    "==Aurangzeb==, ==1658–1707==: took the throne after ==Dharmat== and ==Samugarh== in ==1658==, imprisoned ==Shah Jahan in Agra Fort== until his death in ==1666==, and had ==Dara Shikoh executed== in ==1659==. He was crowned ==twice==, in 1658 and 1659, with the title ==Alamgir==.",
    "Aurangzeb's reign splits in two: ==the north to about 1681==, then ==twenty-five years in the Deccan== until his death at ==Ahmadnagar== in ==1707==. He ==annexed Bijapur in 1686== and ==Golconda in 1687==, which ended the ==Deccan Sultanates== — and ==removed the buffer== between the Mughals and the Marathas.",
    "He ==reimposed the jizya in 1679==, ==banned music at court==, ended ==jharokha darshan== and the ==Persian new year==, and appointed ==muhtasibs== to enforce morals. The ==Rajput alliance broke== over ==Marwar== in ==1679==, and he faced the ==Jats==, the ==Satnamis==, the ==Sikhs== under ==Guru Tegh Bahadur== (executed ==1675==) and ==Guru Gobind Singh==, and the ==Marathas==."
   ],
   blocks:[
    {h:"The six great Mughals, with the years",
     rows:[
      ["Babur, 1526–30","Founded it, and had four years"],
      ["Humayun, 1530–40 and 1555–56","Lost it and won it back, with fifteen years of exile between"],
      ["Akbar, 1556–1605","Forty-nine years: the conquests, the Rajput alliance, and the system"],
      ["Jahangir, 1605–27","Mewar settled, Kandahar lost, and Nur Jahan ascendant"],
      ["Shah Jahan, 1628–58","The Deccan brought to terms, and the buildings"],
      ["Aurangzeb, 1658–1707","Forty-nine years, the largest extent, and the Deccan that consumed it"]
     ]},
    {h:"Akbar's conquests, in order",
     rows:[
      ["1561","Malwa"],
      ["1564","Gondwana — Rani Durgavati"],
      ["1568","Chittor; 1569 Ranthambore and Kalinjar"],
      ["1572–73","Gujarat — the Buland Darwaza at Fatehpur Sikri marks it"],
      ["1576","Bengal; and Haldighati against Mewar the same year"],
      ["1585–91","Kabul, Kashmir, Sindh"],
      ["1595","Kandahar, and the Deccan campaigns begin"],
      ["1601","Asirgarh — his last conquest"]
     ]},
    {h:"The war of succession, 1657–59",
     rows:[
      ["The four sons","Dara Shikoh, Shuja, Aurangzeb and Murad — Shah Jahan's illness in 1657 set it off"],
      ["Dharmat, April 1658","Aurangzeb and Murad defeat Dara's army under Jaswant Singh"],
      ["Samugarh, May 1658","Near Agra: Aurangzeb and Murad defeat Dara himself. The decisive battle"],
      ["Khajwa, January 1659","Aurangzeb defeats Shuja, who flees to Arakan"],
      ["Deorai, April 1659","The last stand of Dara, near Ajmer. He was executed in August 1659"],
      ["Murad","Imprisoned at Gwalior and executed in 1661"]
     ]}
   ],
   links:[["#/early/maps/emperors","The roll of emperors, as a map"],
          ["#/early/mughals","The emperors, page by page"],
          ["#/early/topic/mughal-battles","The battles in full"]]},

  {id:"mughal-state", tag:"Medieval history · in detail", h:"The nobility, the provinces and the economy",
   w:"Who the mansabdars were, how the empire was divided, and what it lived on.",
   notes:[
    "The ==nobility was deliberately mixed==: ==Turani== (Central Asian), ==Irani== (Persian), ==Afghan==, ==Indian Muslim== and ==Rajput==. No one group could dominate, which is the ==point of the policy==, and under Akbar the ==Rajputs were about a fifth== of the higher mansabdars.",
    "A ==mansab== was a ==rank, not an office==: it fixed pay and precedence, and the holder might be given ==any job at all==. It was ==not hereditary==, and on a noble's death the state ==took his property== to settle his accounts — the practice called ==escheat==.",
    "==Jagirs were transferred every three or four years==, so that no noble struck root. By Aurangzeb's reign there was a ==jagirdari crisis==: ==more mansabdars than there was assignable land==, and the land that was assigned yielded ==less than it was rated at== (==jama== against ==hasil==).",
    "The empire was divided into ==subas== — ==12 under Akbar==, ==15== by the end of his reign, and ==21 or 22 under Aurangzeb== as the Deccan was added.",
    "Under the ==suba== came the ==sarkar==, then the ==pargana==, then the village. The ==Subedar== governed, the ==Diwan== held the purse ==independently of him== and reported to the centre — a ==deliberate split== so that a governor could not also control the money.",
    "Land revenue was the ==state's main income==: the ==zabti== system of ==Todar Mal==, the ==Ain-i-Dahsala== of ==1580==, and a demand of ==one-third== of the average produce, collected ==in cash== where possible.",
    "Other systems ran beside it where measurement was impractical: ==ghallabakshi== or ==batai== (crop-sharing), ==kankut== (estimate from the standing crop) and ==nasaq== (assessment from past records).",
    "The ==peasant== paid; the ==zamindar== collected and kept a share; and the ==madad-i-maash== or ==suyurghal== grants gave revenue-free land to scholars and religious men.",
    "==Trade== was large and the ==balance favoured India==: ==cotton textiles== above all, plus indigo, saltpetre, spices and opium, paid for in ==silver==. ==Surat== was the chief western port, ==Hugli== the eastern, and ==Masulipatnam== served the Coromandel.",
    "==Karkhanas== — imperial workshops — made for the court and the army, under the ==Mir Saman==. The currency was the silver ==rupaya==, the gold ==mohur== and the copper ==dam==, with ==forty dams to the rupee==."
   ],
   blocks:[
    {h:"The provincial machinery",
     rows:[
      ["Subedar (Sipahsalar)","Governor of a suba — the executive and military head"],
      ["Diwan","Revenue, appointed by and reporting to the centre, NOT to the Subedar"],
      ["Bakhshi","Pay and the muster of troops in the province"],
      ["Sadr and Qazi","Religious endowments, and justice"],
      ["Faujdar","Order in a sarkar; the Kotwal in a town"],
      ["Amil or Amalguzar","Revenue in a pargana, with the qanungo keeping the records"]
     ]},
    {h:"Land, revenue and the words for them",
     rows:[
      ["Zabti or bandobast","Todar Mal's: land measured, rates fixed in cash for each crop"],
      ["Ain-i-Dahsala, 1580","Rates on the average produce and prices of the previous ten years"],
      ["Ghallabakshi (batai)","Crop-sharing — the harvest divided in the field"],
      ["Kankut and nasaq","Estimate from the standing crop; assessment from past records"],
      ["Polaj, parauti, chachar, banjar","Land classed by how often it was cultivated — every year, rested one or two, three or four, five or more"],
      ["Jagir, khalisa, madad-i-maash","Assigned to a mansabdar; kept for the emperor; granted revenue-free"],
      ["Jama and hasil","The assessed revenue, and what was actually collected — the gap between them is the jagirdari crisis"]
     ]},
    {h:"Trade and money",
     rows:[
      ["The exports","Cotton textiles above all; also indigo, saltpetre, spices, opium and sugar"],
      ["Paid for in","Silver — the bullion flowed in, which is what European writers complain about"],
      ["The ports","Surat in the west, Hugli in the east, Masulipatnam on the Coromandel"],
      ["The coins","Silver rupaya, gold mohur, copper dam — forty dams to the rupee"],
      ["Karkhanas","Imperial workshops under the Mir Saman, making for court and army"],
      ["The European companies","Portuguese first, then the English (Surat factory 1613), the Dutch and the French"]
     ]}
   ],
   links:[["#/early/maps/mughal-state","The mind map, with a cover-and-recall drill"],
          ["#/early/topic/mughal-admin","Mughal administration and revenue"]]},

  {id:"mughal-rajput-deccan", tag:"Medieval history · in detail", h:"The Rajputs, the Deccan and the Marathas",
   w:"The alliance that held the empire together, the war in the south that pulled it apart, and the power that replaced it.",
   notes:[
    "Akbar's ==Rajput policy== was ==alliance, not conquest where alliance would serve==: ==marriage== into the ruling houses from ==1562==, ==high mansabs== and real commands, ==abolition of the pilgrimage tax (1563) and the jizya (1564)==, and ==no interference== in a chief's own territory.",
    "==Mewar held out==. ==Rana Udai Singh== and then ==Maharana Pratap== refused; ==Haldighati (1576)== was fought by ==Man Singh== for Akbar, and ==Mewar was never fully subdued==. ==Jahangir settled with Rana Amar Singh in 1615== on terms that ==left Mewar's honour intact==.",
    "==Aurangzeb broke the alliance==. On ==Jaswant Singh's death (1678)== he tried to take ==Marwar==; ==Durgadas Rathore== carried the infant heir ==Ajit Singh== to safety, and ==Marwar and Mewar fought the empire together== from ==1679==. His own son ==Akbar== joined the Rajputs and then fled to the Marathas.",
    "==Deccan policy== runs through every reign: ==Akbar== took ==Khandesh and part of Ahmadnagar==; ==Jahangir== fought ==Malik Ambar==, the Abyssinian minister of Ahmadnagar who held him off with ==guerrilla war==; ==Shah Jahan== ==annexed Ahmadnagar (1636)== and made ==Bijapur and Golconda tributary==.",
    "==Aurangzeb annexed Bijapur (1686) and Golconda (1687)==. It looked like completion and was the ==opposite==: the Sultanates had been a ==buffer==, and removing them left the Mughals facing the ==Marathas== directly, across country the Mughal army could not hold.",
    "==Shivaji==, ==1630–1680==: took ==Torna== in ==1646==; killed ==Afzal Khan== of Bijapur in ==1659==; raided ==Surat== in ==1664== and again in ==1670==; signed the ==Treaty of Purandar== with ==Jai Singh== in ==1665==, surrendering ==23 forts==; ==escaped from Agra in 1666==; and was ==crowned at Raigad in 1674== with the title ==Chhatrapati==.",
    "Shivaji's government: the ==Ashta Pradhan==, eight ministers, headed by the ==Peshwa==; land revenue on the ==Malik Ambar== model; and the two levies on neighbours, ==chauth== (==one-fourth==) and ==sardeshmukhi== (==one-tenth==).",
    "After Shivaji: ==Sambhaji== was ==captured and executed by Aurangzeb in 1689==, which ==did not end the war== but turned it into a ==national resistance== under ==Rajaram== and then ==Tarabai==.",
    "Aurangzeb died in ==1707== at ==Ahmadnagar==, after ==twenty-five years== in the Deccan. The ==Deccan ulcer== is the phrase used for it, and the war ==cost the empire its treasury, its army and its nobility's confidence== all at once."
   ],
   blocks:[
    {h:"Rajput policy, emperor by emperor",
     rows:[
      ["Akbar","Marriage alliance from 1562, high mansabs, pilgrimage tax and jizya abolished, no interference in a chief's lands. Mewar excepted"],
      ["Jahangir","Settled with Mewar in 1615 — Rana Amar Singh accepted Mughal suzerainty without personal attendance at court"],
      ["Shah Jahan","Kept the alliance; Rajputs commanded in the Deccan and Central Asia"],
      ["Aurangzeb","Broke it over Marwar in 1679. Durgadas Rathore, Ajit Singh, and thirty years of war with Marwar and Mewar"]
     ]},
    {h:"Shivaji, in dates",
     rows:[
      ["1646","Takes Torna — the beginning"],
      ["1659","Kills Afzal Khan of Bijapur at Pratapgad"],
      ["1664 and 1670","Sacks Surat, twice"],
      ["1665","Treaty of Purandar with Jai Singh: 23 of 35 forts surrendered"],
      ["1666","Taken to Agra, placed under guard, and escapes"],
      ["1674","Crowned at Raigad as Chhatrapati"],
      ["1680","Dies. Sambhaji succeeds and is executed by Aurangzeb in 1689"]
     ]},
    {h:"The Maratha system",
     rows:[
      ["Ashta Pradhan","Eight ministers: Peshwa (chief), Amatya (finance), Sachiv, Mantri, Senapati, Sumant (foreign), Nyayadhish (justice), Panditrao (religion)"],
      ["Chauth","One-fourth of the revenue, levied on territory outside Shivaji's own"],
      ["Sardeshmukhi","A further one-tenth, claimed as the hereditary right of the chief headman"],
      ["The forts","The basis of the state — Raigad the capital, and Torna, Pratapgad, Purandar, Sinhagad among the rest"]
     ]}
   ],
   links:[["#/early/maps/mughal-decline","The mind map"],
          ["#/early/topic/mughal-battles","The battles in full"],
          ["#/early/confusions","Confused pairs"]]},

  {id:"mughal-decline", tag:"Medieval history · in detail", h:"Why the empire came apart",
   w:"The causes an answer is expected to list, and the forty years in which it happened.",
   notes:[
    "==Aurangzeb's Deccan wars== are the cause most often given first: ==twenty-five years==, the ==treasury emptied==, the ==army worn out==, and the ==emperor absent from the north== for a generation.",
    "The ==jagirdari crisis==: too many mansabdars for the land available, and ==jagirs yielding less than their paper rating==. A noble who could not be paid ==squeezed the peasant== or ==looked for a province of his own==.",
    "==Weak successors and wars of succession==: there was ==no law of succession==, so every death produced a war, and after 1707 the throne changed hands repeatedly while nobles made and unmade emperors.",
    "The ==rise of the nobles== into ==factions== — ==Turani against Irani== — and then the ==Sayyid brothers==, the ==king-makers== who raised and killed ==Farrukhsiyar== in ==1719==.",
    "The ==provinces went independent== in all but name: ==Hyderabad== under ==Nizam-ul-Mulk== in ==1724==, ==Bengal== under ==Murshid Quli Khan==, ==Awadh== under ==Saadat Khan==. They still named the emperor in the ==khutba== and on the ==coins==, and sent him ==nothing==.",
    "==Invasions finished it==: ==Nadir Shah== at ==Karnal== in ==1739== took the ==Peacock Throne== and the ==Koh-i-Noor==; ==Ahmad Shah Abdali== came repeatedly and broke the ==Marathas at Panipat in 1761==.",
    "==The Marathas== filled the space and then lost it themselves at Panipat, which left ==no Indian power able to hold the north== — and the ==Company== took the ==Diwani of Bengal in 1765== after ==Buxar==.",
    "==Shah Alam II== lived as a ==British pensioner== from ==1803==; ==Akbar II== sent ==Ram Mohan Roy== to England; and ==Bahadur Shah Zafar== was ==tried and exiled to Rangoon== after ==1857==, where he died in ==1862==.",
    "The ==economic reading== — that the revenue demand was simply too high for the agrarian base to carry — and the ==political reading== — that the structure depended on the emperor's personal competence — are both standard, and an answer that names ==both== is the safe one."
   ],
   blocks:[
    {h:"The causes, as they are usually listed",
     rows:[
      ["Aurangzeb's Deccan wars","Twenty-five years, the treasury emptied, the north left to itself"],
      ["Religious policy","Jizya reimposed in 1679, the Rajput alliance broken, Sikh and Jat and Satnami risings"],
      ["The jagirdari crisis","More claimants than land, and land worth less than its rating"],
      ["No law of succession","A war at every death, and nobles choosing the winner"],
      ["Factions in the nobility","Turani against Irani; then the Sayyid brothers as king-makers"],
      ["Provinces breaking away","Hyderabad 1724, Bengal, Awadh — independent in all but the coinage"],
      ["Invasions","Nadir Shah 1739; Ahmad Shah Abdali, and Panipat 1761"],
      ["The Company","Plassey 1757, Buxar 1764, and the Diwani in 1765"]
     ]},
    {h:"After 1707, in order",
     rows:[
      ["1707","Aurangzeb dies at Ahmadnagar; Bahadur Shah I wins the succession at Jajau"],
      ["1719","The Sayyid brothers depose, blind and kill Farrukhsiyar"],
      ["1724","Nizam-ul-Mulk founds Hyderabad in practice"],
      ["1739","Nadir Shah sacks Delhi after Karnal"],
      ["1757 and 1764","Plassey and Buxar"],
      ["1761","Third Panipat — Abdali breaks the Marathas"],
      ["1765","The Company takes the Diwani of Bengal, Bihar and Orissa"],
      ["1803","The British occupy Delhi; Shah Alam II becomes a pensioner"],
      ["1857–62","Bahadur Shah Zafar exiled to Rangoon, and dies there"]
     ]}
   ],
   links:[["#/early/mughals","The emperors, page by page"],
          ["#/early/maps/emperors","The mind map"],
          ["#/early/topic/mughal-admin","Mughal administration and revenue"]]}

 ],

 quiz:[
 /* ------------------------------------------------------------------ sdg */
 {q:"The Sustainable Development Goals were adopted on",
  o:["20 June 2012", "8 September 2000", "1 January 2016", "25 September 2015"], a:3, p:"sdg",
  s:"25 September 2015, at the UN Sustainable Development Summit in New York, by all 193 member states. 1 January 2016 is when they came into force — the two dates are offered against each other constantly."},
 {q:"How many goals, targets and indicators?",
  o:["17 goals, 169 targets, 231 indicators", "17 goals, 196 targets, 230 indicators", "8 goals, 21 targets, 60 indicators", "16 goals, 169 targets, 241 indicators"],
  a:0, p:"sdg",
  s:"17, 169 and 231 unique indicators. The 8–21–60 option is the Millennium Development Goals, which is the set they replaced."},
 {q:"The 2030 Agenda was adopted as General Assembly resolution",
  o:["71/313", "70/1", "55/2", "66/288"], a:1, p:"sdg",
  s:"Resolution 70/1, titled Transforming our world: the 2030 Agenda for Sustainable Development."},
 {q:"Which goal is Gender Equality?",
  o:["Goal 4", "Goal 5", "Goal 10", "Goal 16"], a:1, p:"sdg",
  s:"Goal 5. Goal 4 is Quality Education, Goal 10 Reduced Inequalities and Goal 16 Peace, Justice and Strong Institutions."},
 {q:"Climate Action, Life Below Water and Life on Land are goals",
  o:["14, 15 and 16", "11, 12 and 13", "12, 13 and 14", "13, 14 and 15"], a:3, p:"sdg",
  s:"13, 14, 15 — climate, water, land, in that order. Then 16 is peace and justice and 17 is partnerships."},
 {q:"Goal 17 is",
  o:["Life on Land", "Reduced Inequalities", "Partnerships for the Goals", "Peace, Justice and Strong Institutions"], a:2, p:"sdg",
  s:"Partnerships for the Goals — the last one, and the one that is about how the other sixteen get done."},
 {q:"The five Ps of the 2030 Agenda are",
  o:["People, Planet, Prosperity, Peace, Partnership", "People, Poverty, Planet, Peace, Progress", "Planet, Production, Peace, People, Policy", "People, Planet, Profit, Peace, Policy"],
  a:0, p:"sdg",
  s:"People, Planet, Prosperity, Peace and Partnership. The governing principle beside them is “leave no one behind”."},
 {q:"Sustainable development was defined as development that meets the needs of the present without compromising future generations, in",
  o:["The Brundtland Report, 1987", "The Stockholm Declaration, 1972", "The Future We Want, 2012", "Agenda 21, 1992"], a:0, p:"sdg",
  s:"Our Common Future, 1987 — the World Commission on Environment and Development, chaired by Gro Harlem Brundtland of Norway."},
 {q:"The Earth Summit at Rio in 1992 produced",
  o:["The 2030 Agenda", "The Millennium Declaration", "Agenda 21, the UNFCCC and the Convention on Biological Diversity", "The Kyoto Protocol"], a:2, p:"sdg",
  s:"All three came out of Rio 1992. The Millennium Declaration is 2000; the 2030 Agenda is 2015."},
 {q:"Which conference launched the process that wrote the SDGs, through an Open Working Group of thirty?",
  o:["Rio+20, 2012", "Paris, 2015", "Stockholm, 1972", "Johannesburg, 2002"], a:0, p:"sdg",
  s:"Rio+20, whose outcome document was The Future We Want. Stockholm 1972 was the first world environment conference and produced UNEP."},
 {q:"The Millennium Development Goals differed from the SDGs in that they",
  o:["Ran from 2005 to 2015", "Were legally binding", "Applied only to developing countries", "Had more targets"], a:2, p:"sdg",
  s:"The MDGs were aimed at developing countries; the SDGs apply to every country. The MDGs ran 2000–15 and had fewer targets — 21 against 169 — and neither set is legally binding."},
 {q:"Progress on the SDGs is reviewed at the High-Level Political Forum, which meets",
  o:["Every year under ECOSOC, and every four years at head-of-government level", "Only every five years", "Every two years in the General Assembly", "Monthly in the Security Council"],
  a:0, p:"sdg",
  s:"Yearly under ECOSOC, and every four years at head-of-government level. Countries report through Voluntary National Reviews."},
 {q:"Are the Sustainable Development Goals legally binding?",
  o:["Yes, on all signatories", "Yes, but only on developed countries", "No — they are a political commitment, reported voluntarily", "Only goals 13 to 15 are binding"],
  a:2, p:"sdg",
  s:"A political commitment, which is why the reporting is voluntary and the indicators matter more than the pledges."},

 /* ------------------------------------------------------------ sdg-india */
 {q:"The nodal institution for the SDGs in India is",
  o:["MoSPI", "The Ministry of External Affairs", "The Ministry of Environment, Forest and Climate Change", "NITI Aayog"], a:3, p:"sdg-india",
  s:"NITI Aayog coordinates. The Environment Ministry is the common wrong answer. MoSPI keeps the indicators, which is a different job."},
 {q:"The National Indicator Framework, against which India measures progress, is maintained by",
  o:["NITI Aayog", "MoSPI", "The Registrar General", "The Planning Commission"], a:1, p:"sdg-india",
  s:"The Ministry of Statistics and Programme Implementation. NITI Aayog is nodal and builds the SDG India Index; MoSPI builds the indicator framework."},
 {q:"The SDG India Index was first published in",
  o:["December 2015", "December 2018", "2020", "2017"], a:1, p:"sdg-india",
  s:"December 2018, with editions since. It scores every State and Union territory and gives a composite score out of 100."},
 {q:"India's composite score on the SDG India Index moved from 57 in 2018 to",
  o:["60 in 2023–24", "65 in 2023–24", "71 in 2023–24", "80 in 2023–24"], a:2, p:"sdg-india",
  s:"57 in 2018, 60 in 2019, 66 in 2020–21 and 71 in 2023–24. 60 is the 2019 figure, which is the near miss."},
 {q:"Which state has led the SDG India Index in every edition?",
  o:["Tamil Nadu", "Kerala", "Himachal Pradesh", "Goa"], a:1, p:"sdg-india",
  s:"Kerala, and in 2023–24 Kerala and Uttarakhand were level at the top."},
 {q:"The Sustainable Development Report, which ranks countries on an SDG Index, is published by",
  o:["The United Nations itself", "The SDSN with Bertelsmann Stiftung", "The World Bank", "NITI Aayog"], a:1, p:"sdg-india",
  s:"The Sustainable Development Solutions Network with Bertelsmann Stiftung — independent, not an official UN ranking. That distinction is what the question turns on."},
 {q:"India has presented Voluntary National Reviews at the High-Level Political Forum in",
  o:["2015 and 2019", "2017 and 2020", "2016 and 2021", "2018 and 2022"], a:1, p:"sdg-india",
  s:"2017 and 2020."},

 /* --------------------------------------------------------------- census */
 {q:"India's population at Census 2011 was",
  o:["1,121,854,977", "1,310,854,977", "1,210,854,977", "1,028,737,436"], a:2, p:"census",
  s:"1,210,854,977 — about 121.09 crore, of whom 62.37 crore were male and 58.65 crore female."},
 {q:"The decadal growth rate 2001–11 was 17.70 per cent, against what in the decade before?",
  o:["23.86", "21.54", "19.95", "24.80"], a:1, p:"census",
  s:"21.54 per cent in 1991–2001. The fall from 21.54 to 17.70 is the sharpest decline in the growth rate since independence."},
 {q:"Population density in 2011 was",
  o:["267 per sq km", "325 per sq km", "382 per sq km", "424 per sq km"], a:2, p:"census",
  s:"382, up from 325 in 2001 — and 325 is the distractor because it is the previous census's figure."},
 {q:"The sex ratio in 2011 was 943. What happened to the child sex ratio?",
  o:["It rose to 943 as well", "It rose to 927", "It fell to 919, the lowest since independence", "It stayed at 933"], a:2, p:"census",
  s:"It fell from 927 to 919. The two moved in OPPOSITE directions in the same census, which is exactly why both are asked."},
 {q:"Literacy in 2011 was 74.04 per cent. The male and female figures were",
  o:["80.89 and 64.64", "85.11 and 62.30", "82.14 and 53.67", "82.14 and 65.46"], a:3, p:"census",
  s:"Male 82.14, female 65.46. The gap narrowed because female literacy rose faster, and the number of illiterates fell in absolute terms for the first time."},
 {q:"The urban share of India's population in 2011 was",
  o:["31.16 per cent", "35.40 per cent", "29.20 per cent", "27.81 per cent"], a:0, p:"census",
  s:"31.16 per cent — and for the first time since independence the absolute increase in urban population exceeded the increase in rural population."},
 {q:"Scheduled Castes and Scheduled Tribes were what share of the population?",
  o:["16.2 and 8.2 per cent", "18.5 and 9.4 per cent", "16.6 and 8.6 per cent", "15.0 and 7.5 per cent"], a:2, p:"census",
  s:"SC 16.6 per cent, about 20.14 crore; ST 8.6 per cent, about 10.43 crore."},
 {q:"The religion figures released in 2015 gave Hindus and Muslims as",
  o:["80.5 and 13.4 per cent", "79.8 and 14.2 per cent", "78.4 and 15.0 per cent", "82.0 and 12.1 per cent"], a:1, p:"census",
  s:"Hindu 79.8, Muslim 14.2, Christian 2.3, Sikh 1.7, Buddhist 0.7 and Jain 0.4 per cent."},

 /* ------------------------------------------------------- census-records */
 {q:"The most and least populous states in 2011 were",
  o:["Uttar Pradesh and Mizoram", "Bihar and Sikkim", "Uttar Pradesh and Sikkim", "Maharashtra and Goa"], a:2, p:"census-records",
  s:"Uttar Pradesh at 19.98 crore and Sikkim at 6.11 lakh. Among union territories Delhi is the most populous and Lakshadweep the least, at 64,473 — the smallest of any unit."},
 {q:"The densest and least dense states were",
  o:["Bihar and Arunachal Pradesh", "Kerala and Sikkim", "Uttar Pradesh and Arunachal Pradesh", "West Bengal and Mizoram"], a:0, p:"census-records",
  s:"Bihar at 1,106 and Arunachal Pradesh at 17. Among union territories Delhi is densest at 11,320 and Andaman and Nicobar the least at 46."},
 {q:"Which is the only state with a sex ratio above 1,000?",
  o:["Chhattisgarh", "Tamil Nadu", "Puducherry", "Kerala"], a:3, p:"census-records",
  s:"Kerala, at 1,084. Puducherry is at 1,037 but is a union territory, not a state — which is the trap. The lowest state is Haryana at 879."},
 {q:"The lowest sex ratio of ANY unit in 2011 was",
  o:["Dadra and Nagar Haveli, 774", "Haryana, 879", "Daman and Diu, 618", "Chandigarh, 818"], a:2, p:"census-records",
  s:"Daman and Diu at 618. Haryana at 879 is the lowest STATE, and a question that says “state” means it."},
 {q:"Highest and lowest literacy among the states:",
  o:["Mizoram 91.33 and Bihar 63.82", "Lakshadweep 92.28 and Bihar 63.82", "Kerala 93.91 and Bihar 63.82", "Kerala 93.91 and Jharkhand 66.41"],
  a:2, p:"census-records",
  s:"Kerala highest and Bihar lowest. Lakshadweep is the highest union territory, not a state. The lowest female literacy is Rajasthan's, at 52.66."},
 {q:"Which state recorded the only FALL in population in 2001–11?",
  o:["Goa", "Sikkim", "Kerala", "Nagaland"], a:3, p:"census-records",
  s:"Nagaland, at −0.58 per cent. The highest growth was Meghalaya's, at 27.95 per cent."},
 {q:"The lowest child sex ratio in 2011 was in",
  o:["Delhi", "Punjab", "Haryana", "Rajasthan"], a:2, p:"census-records",
  s:"Haryana, at 834, against the national 919."},
 {q:"The highest share of Scheduled Castes, and of Scheduled Tribes among the states, were in",
  o:["Punjab and Jharkhand", "Punjab and Mizoram", "West Bengal and Nagaland", "Uttar Pradesh and Chhattisgarh"], a:1, p:"census-records",
  s:"Punjab at 31.9 per cent for SCs; Mizoram at 94.4 per cent for STs among states, with Lakshadweep highest among union territories."},
 {q:"Most and least urbanised states in 2011:",
  o:["Goa and Himachal Pradesh", "Tamil Nadu and Assam", "Kerala and Odisha", "Maharashtra and Bihar"], a:0, p:"census-records",
  s:"Goa, about 62 per cent, and Himachal Pradesh, about 10. Delhi, about 97.5 per cent, is the most urbanised union territory."},
 {q:"Uttar Pradesh is India's largest state by population. Which is largest by area?",
  o:["Uttar Pradesh as well", "Madhya Pradesh", "Rajasthan", "Maharashtra"], a:2, p:"census-records",
  s:"Rajasthan by area, Uttar Pradesh by population — and the two are offered against each other constantly. Goa is the smallest state by area."},

 /* ------------------------------------------------------- census-history */
 {q:"India's first census, in 1872, was taken under",
  o:["Lord Mayo", "Lord Curzon", "Lord Dalhousie", "Lord Ripon"], a:0, p:"census-history",
  s:"Lord Mayo — but not everywhere at once, which is why it is called non-synchronous."},
 {q:"The first SYNCHRONOUS census was in",
  o:["1901, under Curzon", "1872, under Mayo", "1881, under Ripon", "1891, under Lansdowne"], a:2, p:"census-history",
  s:"1881, under Lord Ripon, conducted by W. C. Plowden. Every census since has been decennial, unbroken through two world wars and partition — until 2021."},
 {q:"Which is the only decade since 1872 in which India's population fell?",
  o:["1931–1941", "1941–1951", "1891–1901", "1911–1921"], a:3, p:"census-history",
  s:"1911–21, because of the influenza pandemic of 1918, famine and the war. It is called the Great Divide, and 1921 is the Year of the Great Divide."},
 {q:"1951 is called the Year of the",
  o:["Demographic Transition", "Great Divide", "Small Divide", "Great Depression"], a:2, p:"census-history",
  s:"The Small Divide. After 1921 the population grew in every decade; after 1951 the growth itself accelerated. 1921 is the Great Divide."},
 {q:"The census runs under the Census Act of 1948, and the subject sits at",
  o:["Entry 69 of the Union List", "Entry 45 of the Concurrent List", "Entry 20 of the State List", "Entry 97 of the Union List"], a:0, p:"census-history",
  s:"Entry 69 of the Union List, so it is Parliament's alone. Answers are confidential by law and cannot be used as evidence."},
 {q:"Census 2011 was which census since 1872, and which since independence?",
  o:["The 15th and the 6th", "The 14th and the 6th", "The 15th and the 7th", "The 16th and the 8th"], a:2, p:"census-history",
  s:"The 15th since 1872 and the 7th after independence. The Commissioner was C. Chandramouli and the motto was “Our Census, Our Future”."},
 {q:"Caste was last enumerated in full in the census of",
  o:["1951", "1921", "1931", "1941"], a:2, p:"census-history",
  s:"1931. The count announced in June 2025 for 2026–27, with reference dates of 1 October 2026 and 1 March 2027, will enumerate caste for the first time since."},

 /* -------------------------------------------------------- mughal-reigns */
 {q:"Babur wrote the Baburnama in",
  o:["Persian", "Chagatai Turkish", "Arabic", "Urdu"], a:1, p:"mughal-reigns",
  s:"Chagatai Turkish. He won Panipat in 1526, Khanwa 1527, Chanderi 1528 and Ghaghra 1529, and died at Agra with the empire four years old."},
 {q:"Humayun lost the empire to Sher Shah at which two battles?",
  o:["Chausa and Kannauj", "Sirhind and Chanderi", "Ghaghra and Chausa", "Panipat and Khanwa"], a:0, p:"mughal-reigns",
  s:"Chausa in 1539 and Kannauj in 1540. He recovered it at Sirhind in 1555 and died within a year, falling down the stairs of his library."},
 {q:"Akbar came to the throne at thirteen. Who was regent until 1560?",
  o:["Man Singh", "Todar Mal", "Abul Fazl", "Bairam Khan"], a:3, p:"mughal-reigns",
  s:"Bairam Khan to 1560, then the “petticoat government” of the harem to 1564, after which Akbar ruled himself."},
 {q:"Akbar's last conquest was",
  o:["Kashmir, 1586", "Bengal, 1576", "Kandahar, 1595", "Asirgarh, 1601"], a:3, p:"mughal-reigns",
  s:"Asirgarh in 1601. Gujarat 1572–73 is the one the Buland Darwaza marks; Chand Bibi resisted him at Ahmadnagar."},
 {q:"Jahangir hung the Chain of Justice and made peace with Mewar in 1615. What did he lose in 1622?",
  o:["Kashmir", "Ahmadnagar", "Bengal", "Kandahar, to Persia"], a:3, p:"mughal-reigns",
  s:"Kandahar, to Persia. Shah Jahan then failed to retake it in three sieges and lost it for good."},
 {q:"Shah Jahan annexed Ahmadnagar in 1636. Whom did he drive from Hugli in 1632?",
  o:["The English", "The Portuguese", "The French", "The Dutch"], a:1, p:"mughal-reigns",
  s:"The Portuguese. Bijapur and Golconda were made tributary rather than annexed — Aurangzeb annexed them, in 1686 and 1687."},
 {q:"The decisive battle of the Mughal war of succession, fought near Agra in May 1658, was",
  o:["Dharmat", "Samugarh", "Khajwa", "Deorai"], a:1, p:"mughal-reigns",
  s:"Samugarh, where Aurangzeb and Murad beat Dara himself. Dharmat came first, against Dara's army under Jaswant Singh; Khajwa was against Shuja and Deorai was Dara's last stand."},
 {q:"Aurangzeb imprisoned Shah Jahan in Agra Fort until his death in",
  o:["1659", "1661", "1666", "1707"], a:2, p:"mughal-reigns",
  s:"1666. Dara Shikoh was executed in 1659 and Murad in 1661 — which is why those two years are the distractors."},

 /* --------------------------------------------------------- mughal-state */
 {q:"A Mughal mansab was",
  o:["A provincial governorship", "A hereditary title", "A grant of land held for life", "A rank fixing pay and precedence, not an office"], a:3, p:"mughal-state",
  s:"A rank, not an office: the holder might be given any job at all. It was not hereditary, and on a noble's death the state took his property to settle his accounts — escheat."},
 {q:"Jagirs were transferred every three or four years so that",
  o:["The peasants could change landlord", "The emperor could visit each in turn", "The revenue could be reassessed", "No noble struck root in one place"], a:3, p:"mughal-state",
  s:"So that no noble struck root. Khalisa was the land kept for the emperor himself."},
 {q:"In the jagirdari crisis, jama and hasil mean",
  o:["The summer and winter harvests", "The assessed revenue and what was actually collected", "The land tax and the booty share", "The cash salary and the land assignment"],
  a:1, p:"mughal-state",
  s:"Jama is on paper, hasil is in hand — and the gap between them, with more mansabdars than there was assignable land, is the crisis."},
 {q:"How many subas did the empire have under Akbar, and under Aurangzeb?",
  o:["8 then 15", "12 then 15", "12 then 21 or 22", "15 then 18"], a:2, p:"mughal-state",
  s:"12 under Akbar, 15 by the end of his reign, and 21 or 22 under Aurangzeb as the Deccan was added."},
 {q:"In a Mughal province the Diwan handled revenue and reported to",
  o:["The local Qazi", "The Subedar", "The centre, not the Subedar", "The Bakhshi"], a:2, p:"mughal-state",
  s:"The centre — a deliberate split, so that a governor could not also control the money. The Subedar was the executive and military head."},
 {q:"Todar Mal's zabti system and the Ain-i-Dahsala of 1580 fixed the revenue demand at",
  o:["One-half of the produce", "One-third of the average produce", "One-quarter of the produce", "One-fifth of the produce"], a:1, p:"mughal-state",
  s:"One-third, on the average produce and prices of the previous ten years, collected in cash where possible. One-half is Alauddin Khalji's demand."},
 {q:"Which revenue system divided the harvest in the field?",
  o:["Nasaq", "Zabti", "Kankut", "Ghallabakshi, or batai"], a:3, p:"mughal-state",
  s:"Ghallabakshi is crop-sharing. Zabti measures, kankut estimates from the standing crop, and nasaq assesses from past records."},
 {q:"The Mughal copper coin was the dam. How many to the rupee?",
  o:["Twenty", "Forty", "Sixty-four", "Sixteen"], a:1, p:"mughal-state",
  s:"Forty dams to the rupee. The silver coin was the rupaya and the gold the mohur."},
 {q:"The imperial workshops, the karkhanas, were under the",
  o:["Mir Saman", "Diwan", "Sadr", "Mir Bakhshi"], a:0, p:"mughal-state",
  s:"The Mir Saman. The Bakhshi handled pay and the muster of troops."},
 {q:"Surat was the chief western port. Which served the Coromandel coast?",
  o:["Masulipatnam", "Cambay", "Calicut", "Hugli"], a:0, p:"mughal-state",
  s:"Masulipatnam. Hugli was the eastern port. Cotton textiles were the great export, paid for in silver, and the English opened their Surat factory in 1613."},

 /* -------------------------------------------------- mughal-rajput-deccan */
 {q:"Akbar abolished the pilgrimage tax and the jizya in",
  o:["1563 and 1564", "1564 and 1565", "1561 and 1562", "1562 and 1563"], a:0, p:"mughal-rajput-deccan",
  s:"Pilgrimage tax 1563, jizya 1564. Marriage alliance with the Rajput houses began in 1562, which is the year offered against them."},
 {q:"Haldighati, 1576, was fought against Maharana Pratap by",
  o:["Man Singh, for Akbar", "Bairam Khan", "Todar Mal", "Akbar in person"], a:0, p:"mughal-rajput-deccan",
  s:"Man Singh commanded for Akbar — a Rajput leading the Mughal army against a Rajput, which is why the fact is asked. Mewar was never fully subdued."},
 {q:"Which emperor settled with Mewar, on terms Akbar never got?",
  o:["Shah Jahan, in 1636", "Aurangzeb, in 1679", "Babur, in 1527", "Jahangir, with Rana Amar Singh in 1615"], a:3, p:"mughal-rajput-deccan",
  s:"Jahangir, in 1615. Aurangzeb broke the Rajput alliance in 1679, over Marwar."},
 {q:"The Rajput alliance broke in 1679 over Marwar, on the death of Jaswant Singh. Who carried the infant heir to safety?",
  o:["Man Singh", "Raja Rai Singh", "Jai Singh", "Durgadas Rathore"], a:3, p:"mughal-rajput-deccan",
  s:"Durgadas Rathore saved Ajit Singh. Marwar and Mewar then fought the empire together, and Aurangzeb's own son Akbar joined the Rajputs before fleeing to the Marathas."},
 {q:"Aurangzeb annexed Bijapur in 1686 and Golconda in 1687. Why is this counted a mistake?",
  o:["The campaigns bankrupted Bijapur", "They had been a buffer, and removing them left the Mughals facing the Marathas", "They were never properly garrisoned", "It broke a treaty with Persia"],
  a:1, p:"mughal-rajput-deccan",
  s:"It looked like completion and was the opposite. He spent twenty-five years in the Deccan and died at Ahmadnagar in 1707 — the “Deccan ulcer”."},
 {q:"Who held Jahangir off in the Deccan with guerrilla war?",
  o:["Shivaji", "Shahji Bhonsle", "Chand Bibi", "Malik Ambar"], a:3, p:"mughal-rajput-deccan",
  s:"Malik Ambar, the Abyssinian minister of Ahmadnagar. Chand Bibi resisted Akbar there a reign earlier."},
 {q:"By the Treaty of Purandar, 1665, Shivaji surrendered how many forts, and to whom?",
  o:["23, to Afzal Khan", "12, to Aurangzeb", "23, to Jai Singh", "35, to Jai Singh"], a:2, p:"mughal-rajput-deccan",
  s:"23 of his 35 forts, to Jai Singh. He was taken to Agra in 1666 and escaped, and was crowned at Raigad in 1674 as Chhatrapati."},
 {q:"Chauth and sardeshmukhi were levies of",
  o:["One-fifth and one-tenth", "One-fourth and one-tenth", "One-third and one-fourth", "One-half and one-fifth"], a:1, p:"mughal-rajput-deccan",
  s:"Chauth a fourth, sardeshmukhi a further tenth, claimed as the hereditary right of the chief headman."},
 {q:"The Ashta Pradhan, Shivaji's council of eight, was headed by the",
  o:["Peshwa", "Nyayadhish", "Amatya", "Senapati"], a:0, p:"mughal-rajput-deccan",
  s:"The Peshwa. Amatya held finance, Senapati the army, Nyayadhish justice, Sumant foreign affairs and Panditrao religion."},
 {q:"Sambhaji was captured and executed by Aurangzeb in 1689. What followed?",
  o:["The Marathas accepted Mughal service", "Shivaji's line ended", "The Maratha state collapsed", "The war went on under Rajaram and then Tarabai"], a:3, p:"mughal-rajput-deccan",
  s:"It did not end the war but turned it into a national resistance, under Rajaram and then Tarabai."},

 /* ------------------------------------------------------- mughal-decline */
 {q:"The Sayyid brothers, the king-makers, deposed and killed which emperor in 1719?",
  o:["Jahandar Shah", "Farrukhsiyar", "Muhammad Shah", "Bahadur Shah I"], a:1, p:"mughal-decline",
  s:"Farrukhsiyar. Bahadur Shah I had won the succession at Jajau in 1707; the factions behind the brothers were Turani against Irani."},
 {q:"Hyderabad became independent in practice in 1724 under",
  o:["Saadat Khan", "Nizam-ul-Mulk", "Safdarjung", "Murshid Quli Khan"], a:1, p:"mughal-decline",
  s:"Nizam-ul-Mulk. Murshid Quli Khan did the same in Bengal and Saadat Khan in Awadh — all still naming the emperor in the khutba and on the coins, and sending him nothing."},
 {q:"Nadir Shah sacked Delhi in 1739 after which battle, and took what?",
  o:["Panipat; the Peacock Throne", "Buxar; the Koh-i-Noor", "Khajwa; the imperial treasury", "Karnal; the Peacock Throne and the Koh-i-Noor"], a:3, p:"mughal-decline",
  s:"Karnal, 1739. Ahmad Shah Abdali came later and broke the Marathas at Panipat in 1761."},
 {q:"The Third Battle of Panipat, 1761, was",
  o:["Akbar against Hemu", "Abdali against the Marathas", "The Company against Shuja-ud-Daula", "Babur against Ibrahim Lodi"], a:1, p:"mughal-decline",
  s:"Ahmad Shah Abdali broke the Marathas, which left no Indian power able to hold the north. First Panipat 1526 is Babur against Ibrahim Lodi and the second, 1556, is Akbar's regent against Hemu."},
 {q:"The East India Company took the Diwani of Bengal, Bihar and Orissa in",
  o:["1765", "1772", "1757", "1764"], a:0, p:"mughal-decline",
  s:"1765, after Buxar in 1764. Plassey was 1757. The three are offered against each other in almost every paper."},
 {q:"Bahadur Shah Zafar was exiled after 1857 to Rangoon, where he died in",
  o:["1858", "1862", "1857", "1875"], a:1, p:"mughal-decline",
  s:"1862. Shah Alam II had become a British pensioner from 1803, and Akbar II sent Ram Mohan Roy to England."},
 {q:"Which pair of causes is usually named FIRST for the Mughal decline?",
  o:["Court intrigue and the Sayyid brothers", "Foreign invasion and famine", "Aurangzeb's Deccan wars and the jagirdari crisis", "The loss of Kandahar and the fall of Surat"],
  a:2, p:"mughal-decline",
  s:"The Deccan wars emptied the treasury and left the north alone; the jagirdari crisis meant more mansabdars than land. The safest answer names both the economic and the political reading."}
]
},


{id:"3-november", d:"3 November", y:2026,
 w:"Soil and agriculture in full, and the Delhi Sultanate from Qutb-ud-din Aibak to the First Battle of Panipat — the five dynasties, Alauddin's market control, Muhammad bin Tughlaq's experiments, Firoz Shah's building, the administration, the architecture and the writers.",
 intro:"The Delhi Sultanate was the one gap in Ancient and Medieval History on this site: the subject ran from the Jain councils to the Mughals with the three hundred and twenty years in between left out. It is written here in full. Soil and agriculture are on the site already, in Geography and in Economy; the first two parts are the revision sheets for them, with links to the pages the facts come from.",
 parts:[

  /* ---------------------------------------------------------- soil */
  {id:"soil", tag:"Geography · revision", h:"The soils of India",
   w:"The eight ICAR types, where each one is, what grows on it, and the erosion that takes it away.",
   notes:[
    "==Alluvial==: about ==40 per cent== of the land — the whole ==northern plain== and the deltas. Rich in ==potash and lime==, poor in ==nitrogen and humus==. Split into ==khadar== (new, renewed each year, most fertile) and ==bhangar== (old, above flood level, with ==kankar== lime nodules).",
    "==Black== or ==regur==: the ==Deccan trap== country — Maharashtra, Madhya Pradesh, Gujarat, Telangana. Weathered ==basalt==; it ==swells when wet and cracks when dry==, so it is ==self-ploughing==. Rich in ==iron, lime and magnesia==, poor in ==nitrogen and phosphorus==. ==Cotton== above all.",
    "==Red and yellow==: the ==eastern and southern peninsula==, on ==crystalline igneous== rock where rainfall is low. Red from the ==iron== in it, yellow when ==hydrated==. Millets, groundnut, pulses.",
    "==Laterite==: ==heavy rain and high temperature leach the silica away== and leave iron and aluminium. Karnataka, Kerala, Tamil Nadu, the hills of Odisha and Assam. Poor for most crops but good for ==tea, coffee, cashew and rubber==, and it ==hardens into building brick==.",
    "==Arid== or desert: ==western Rajasthan== — sandy, saline, low in humus. Needs irrigation; ==bajra and jowar==.",
    "==Saline and alkaline== (==usara, reh, kallar==): dry parts of Gujarat, Haryana, Punjab and western Uttar Pradesh. Made worse by ==over-irrigation and poor drainage==, and treated with ==gypsum==.",
    "==Peaty and marshy==: heavy rain and humidity with ==little decomposition== — Kottayam in Kerala, the Sundarbans, coastal Odisha. ==Very high organic== content.",
    "==Forest and mountain==: the hill slopes, ==varying with altitude== — acidic and low in humus high up, fertile in the valleys.",
    "==Gully== erosion carves the ==ravines== of the ==Chambal== badlands; ==sheet== erosion strips the topsoil ==evenly==, which is why it is ==harder to see==. The answers are ==contour ploughing, terracing, strip cropping and shelter belts==.",
    "The classification used is the ==ICAR's==, and the ==Soil Survey of India== (1956) does the mapping. ==Alluvial, black and red== together cover most of the country."
   ],
   blocks:[
    {h:"Which soil, which crop",
     note:"The crop is the quickest way into the question: cotton means black, tea means laterite, wheat and rice mean alluvial.",
     rows:[
      ["Cotton","Black (regur) — it holds moisture"],
      ["Wheat, rice, sugarcane, jute","Alluvial"],
      ["Tea, coffee, cashew, rubber","Laterite"],
      ["Millets, groundnut, pulses","Red and yellow"],
      ["Bajra and jowar","Arid, under irrigation"],
      ["Coconut and spices","Laterite and coastal alluvial"]
     ]},
    {h:"The three that are confused most",
     rows:[
      ["Khadar against bhangar","Khadar is the NEW alluvium of the floodplain, renewed by silt every year, and the most fertile land in India. Bhangar is the OLDER alluvium, lying above the flood level as terraces, carrying kankar"],
      ["Black against laterite","Black is weathered basalt, moisture-retaining, cotton. Laterite is leached by heavy rain, poor in plant food, and it sets hard enough to be cut into bricks"],
      ["Regur against red","Regur is black and comes from basalt. Red soil is red because of iron in crystalline rock, and it is poor in nitrogen, phosphorus and humus"]
     ]}
   ],
   links:[["#/geography/topic/soils","Soils and natural vegetation in full"],
          ["#/geography/maps/soils","The mind map"]]},

  /* --------------------------------------------------- agriculture */
  {id:"agri", tag:"Geography and Economy · revision", h:"Agriculture",
   w:"The three cropping seasons, the leading state for each crop, the revolutions by colour, and how a minimum support price is set.",
   notes:[
    "==Kharif== is sown with the ==monsoon== in June or July and harvested in September or October: ==rice, maize, jowar, bajra, tur, moong, cotton, groundnut, jute, soyabean==.",
    "==Rabi== is sown ==October to December== and harvested in April or May, on the ==winter rain and residual moisture==: ==wheat, barley, peas, gram, mustard, linseed==.",
    "==Zaid== is the ==short summer== season between them, March to June, and it needs ==irrigation==: ==watermelon, muskmelon, cucumber==, fodder and vegetables.",
    "Why wheat is rabi and rice is kharif: wheat wants a ==cool growing season and a warm dry ripening==; rice wants ==standing water and high temperature==, which is what the monsoon supplies.",
    "The ==Green Revolution== ran from ==1966–67== under the ==New Agricultural Strategy==, after the 1965–66 drought. ==Norman Borlaug== bred the dwarf wheat; ==M. S. Swaminathan== adapted and spread it in India. ==Wheat first and most==; pulses and oilseeds ==hardly at all==.",
    "==MSP is recommended by the CACP== — the Commission for Agricultural Costs and Prices, set up in ==1965== as the Agricultural Prices Commission and renamed in ==1985==. It is ==announced by the Cabinet Committee on Economic Affairs==: the CACP only advises.",
    "MSP covers ==22 crops==, with a ==Fair and Remunerative Price== for ==sugarcane== fixed separately.",
    "The ==Swaminathan formula== is MSP at ==50 per cent above C2==, the comprehensive cost. The government's stated benchmark is ==50 per cent above A2+FL==, which is a narrower cost — and that difference is the whole dispute.",
    "==ICAR== dates from ==1929==, set up on the ==Royal Commission on Agriculture's== recommendation. ==NABARD== was set up on ==12 July 1982==, on the ==Sivaraman Committee's==, as the apex body for ==rural credit==.",
    "==Pulses fix nitrogen==, which is why they are grown in rotation to restore the soil. Millets were renamed ==nutri-cereals== in India, and ==2023== was the ==International Year of Millets==, declared on India's proposal."
   ],
   blocks:[
    {h:"The leading state, crop by crop",
     note:"Rankings move a little year to year; where the top two are genuinely close, both are given.",
     rows:[
      ["Rice","West Bengal usually leads, with Uttar Pradesh and Punjab behind"],
      ["Wheat","Uttar Pradesh on production; Punjab leads comfortably on yield per hectare"],
      ["Sugarcane","Uttar Pradesh on production; Maharashtra on recovery and sugar output"],
      ["Cotton","Gujarat and Maharashtra, on the black soil of the Deccan trap"],
      ["Jute","West Bengal, by a wide margin — the golden fibre"],
      ["Tea","Assam, then West Bengal (Darjeeling and the Dooars)"],
      ["Coffee","Karnataka, by a long way; arabica came from Yemen to the Baba Budan hills"],
      ["Rubber","Kerala"],
      ["Groundnut, soyabean, mustard","Gujarat, Madhya Pradesh and Rajasthan respectively"],
      ["Bajra, jowar, ragi","Rajasthan; Maharashtra and Karnataka; Karnataka"]
     ]},
    {h:"The revolutions by colour",
     rows:[
      ["Green","Foodgrains, especially wheat"],
      ["White","Milk — Operation Flood, 1970, under Verghese Kurien, on the Anand cooperative model"],
      ["Blue","Fish and aquaculture"],
      ["Yellow","Oilseeds — the Technology Mission on Oilseeds, 1986"],
      ["Golden","Horticulture, fruit and honey; Golden Fibre is jute"],
      ["Silver","Eggs and poultry; Silver Fibre is cotton"],
      ["Pink","Prawn, and also used for onion"],
      ["Red","Tomato and meat"],
      ["Grey","Fertiliser; Round is potato; Black is petroleum; Brown is leather"]
     ]}
   ],
   links:[["#/geography/topic/agriculture","Agriculture, minerals and industry"],
          ["#/economy/topic/agriculture","Agriculture and the revolutions"],
          ["#/economy/maps/agriculture","The mind map"]]},

  /* ------------------------------------------- the Delhi Sultanate */
  {id:"sultanate", tag:"Medieval history · new on the site", h:"The Delhi Sultanate — the five dynasties",
   w:"1206 to 1526, from Qutb-ud-din Aibak to the First Battle of Panipat: five dynasties, and the rulers each one is asked for.",
   notes:[
    "The Sultanate ran from ==1206 to 1526== — ==320 years==, ==five dynasties==: ==Slave (Mamluk), Khalji, Tughlaq, Sayyid, Lodi==. Only the ==Lodis== were ==Afghan==; the rest were ==Turkish==.",
    "==Qutb-ud-din Aibak==, ==1206–1210==: the ==first Sultan==, a slave of ==Muhammad Ghori==. Capital at ==Lahore==. Called ==Lakh Baksh==, the giver of lakhs. Began the ==Qutb Minar== and built the ==Quwwat-ul-Islam== mosque at Delhi and the ==Adhai Din ka Jhonpra== at Ajmer. Died at Lahore ==falling from a horse while playing chaugan== (polo).",
    "==Iltutmish==, ==1211–1236==: the ==real consolidator==. Moved the capital to ==Delhi==, ==completed the Qutb Minar==, introduced the silver ==tanka== and copper ==jital==, organised the ==iqta== system, and created the ==Chahalgani==, the corps of forty nobles. Took ==investiture from the Caliph in 1229==, which made the Sultanate legally independent of Ghazni.",
    "==Razia==, ==1236–1240==: the ==only woman== ever to sit on the throne of Delhi, nominated by her father ==over his sons==. The nobles would not have it; she married ==Malik Altunia== and was killed in ==1240==.",
    "==Balban==, ==1266–1287==: ==broke the Chahalgani== that had made him. His theory of kingship: the Sultan as ==Zill-i-Ilahi==, the shadow of God, with ==sijda== (prostration) and ==paibos== (kissing the feet) at court. Set up the ==Diwan-i-Arz==, the military department. ==Blood and iron== is the phrase used for his policy.",
    "==Jalal-ud-din Firoz Khalji==, ==1290–1296==, founded the ==Khalji== dynasty at about ==seventy==, and was killed at ==Kara== by his nephew ==Alauddin==.",
    "==Alauddin Khalji==, ==1296–1316==: the ==market control==, the ==first standing army paid in cash==, and the ==largest empire the Sultanate held==. ==Malik Kafur== carried his arms into the ==far south==.",
    "==Ghiyasuddin Tughlaq==, ==1320–1325==, founded the ==Tughlaq== dynasty and built ==Tughlaqabad==. He died when a ==wooden pavilion collapsed== on him at Afghanpur.",
    "==Muhammad bin Tughlaq==, ==1325–1351==, and ==Firoz Shah Tughlaq==, ==1351–1388==: the ==experiments== and then the ==building==. ==Timur sacked Delhi in 1398==, in the reign of ==Nasiruddin Mahmud==, and the dynasty never recovered.",
    "The ==Sayyids==, ==1414–1451==, began with ==Khizr Khan==, Timur's deputy, who ruled in another's name and ==never took the title of Sultan==. The last of them, ==Alam Shah==, ==abdicated==.",
    "The ==Lodis==, ==1451–1526==: ==Bahlol== founded it, ==Sikandar== moved the capital to ==Agra== in ==1504==, and ==Ibrahim== was killed at the ==First Battle of Panipat==, ==21 April 1526==."
   ],
   blocks:[
    {h:"The five dynasties, with their dates",
     rows:[
      ["Slave or Mamluk, 1206–1290","Qutb-ud-din Aibak, Aram Shah, Iltutmish, Razia, Bahram Shah, Masud Shah, Nasiruddin Mahmud, Balban, Kaiqubad"],
      ["Khalji, 1290–1320","Jalal-ud-din Firoz, Alauddin, Qutbuddin Mubarak Shah, Khusrau Khan"],
      ["Tughlaq, 1320–1414","Ghiyasuddin, Muhammad bin Tughlaq, Firoz Shah, and the successors Timur's invasion left behind"],
      ["Sayyid, 1414–1451","Khizr Khan, Mubarak Shah, Muhammad Shah, Alam Shah"],
      ["Lodi, 1451–1526","Bahlol, Sikandar, Ibrahim — the only Afghan dynasty of the Sultanate"]
     ]},
    {h:"The Slave dynasty, ruler by ruler",
     rows:[
      ["Qutb-ud-din Aibak, 1206–10","First Sultan; capital Lahore; Lakh Baksh; began the Qutb Minar; died playing chaugan"],
      ["Iltutmish, 1211–36","Capital to Delhi; tanka and jital; iqta; Chahalgani; the Caliph's investiture, 1229; built the Hauz-i-Shamsi"],
      ["Razia, 1236–40","The only woman on the throne of Delhi; appointed Jamal-ud-din Yaqut; married Altunia; killed 1240"],
      ["Balban, 1266–87","Broke the Chahalgani; Zill-i-Ilahi, sijda and paibos; the Diwan-i-Arz; faced the Mongols on the north-west"],
      ["Who ruled between","Bahram Shah (1240–42), Masud Shah (1242–46) and Nasiruddin Mahmud (1246–66), under whom Balban was the real power as naib"]
     ]},
    {h:"The Lodis, and the end",
     rows:[
      ["Bahlol Lodi, 1451–89","Founded the dynasty; an Afghan, and he treated his nobles as equals rather than subjects"],
      ["Sikandar Lodi, 1489–1517","Founded Agra in 1504 and made it the capital; introduced the gaz-i-Sikandari, a standard yard for measuring land; wrote verse under the pen name Gulrukhi; abolished the duty on grain"],
      ["Ibrahim Lodi, 1517–26","Quarrelled with the Afghan nobility. Daulat Khan Lodi, governor of Punjab, invited Babur in"],
      ["First Panipat, 21 April 1526","Babur against Ibrahim Lodi: field artillery, the carts lashed into a line, and the tulughma flank attack. Ibrahim was killed on the field — the only Delhi Sultan to die in battle"]
     ]}
   ]},

  /* ------------------------------------ Alauddin Khalji's reforms */
  {id:"alauddin", tag:"Medieval history · new on the site", h:"Alauddin Khalji's reforms",
   w:"The market control, the revenue settlement, the army, and the conquests — the most-asked reign of the Sultanate.",
   notes:[
    "==Market control== is the reform he is asked for. Prices were ==fixed for every commodity==, and there were ==separate markets==: grain, cloth and manufactured goods, horses and slaves and cattle, and a general market for everything else.",
    "The officer in charge of the market was the ==Shahna-i-Mandi==, with the ==Diwan-i-Riyasat== over the whole system. ==Every merchant had to register==, and ==underweight selling was punished by cutting flesh from the seller==.",
    "Grain was bought at the fixed price into ==state granaries== and released in a shortage. The purpose was ==not the consumer's welfare but the army's==: cheap prices meant he could pay a ==large standing army in cash== without raising its pay.",
    "==Land revenue was raised to half the produce== — ==50 per cent== — assessed by ==measurement== (==masahat==), on the ==biswa== as the standard unit. He taxed the ==Hindu chiefs and intermediaries== as hard as the peasants, which is what the chronicles complain about.",
    "==Dagh== (==branding the horses==) and ==chehra== (==the descriptive roll of each soldier==) are his, and ==Akbar used both again== three centuries later.",
    "He was the ==first Sultan to pay his soldiers in cash== rather than by assignment of land.",
    "==Four ordinances== against rebellion: confiscate wealth, build an intelligence network, ban liquor and gambling, and ==forbid the nobles to meet socially or to marry among themselves without permission==.",
    "Conquests in the north: ==Gujarat 1299==, ==Ranthambore 1301==, ==Chittor 1303==, ==Malwa 1305==.",
    "Conquests in the south, under ==Malik Kafur==: ==Devagiri== (Yadavas), ==Warangal== (Kakatiyas), ==Dwarasamudra== (Hoysalas) and ==Madurai== (Pandyas). They were ==raids for tribute, not annexations== — the south was left under its own rulers paying him.",
    "He ==repelled the Mongols repeatedly==, which is the reason the standing army existed at all, and he ==refused to recognise the Caliph==, calling himself ==Sikandar-i-Sani==, the second Alexander.",
    "He built ==Siri==, the ==second city of Delhi==, the ==Alai Darwaza== (==1311==) and the ==Hauz Khas== reservoir, and began the ==Alai Minar==, which was ==never finished==.",
    "==Amir Khusrau== was at his court, as he was at several others."
   ],
   blocks:[
    {h:"The market reform in one table",
     rows:[
      ["Why","To keep a large standing army affordable — cheap goods, not generous pay"],
      ["The markets","Grain (mandi); cloth and manufactured goods (Sarai Adl); horses, slaves and cattle; and a general market"],
      ["Who ran it","The Shahna-i-Mandi, under the Diwan-i-Riyasat, with spies reporting separately to the Sultan"],
      ["Supply","Merchants registered; grain bought into state granaries at the fixed rate and released in scarcity"],
      ["Enforcement","Short weight was punished by cutting an equal weight of flesh from the seller — the detail every chronicler records"],
      ["How long it lasted","It ended with him: his successors let the controls lapse"]
     ]},
    {h:"The land revenue settlement",
     rows:[
      ["The share","Half the produce — the highest in the Sultanate"],
      ["How assessed","By measurement, masahat, with the biswa as the unit — not by guess or by crop-sharing"],
      ["Who paid","The cultivator directly; the khuts, muqaddams and chaudharis lost the exemptions they had held"],
      ["Other taxes","Grazing tax (charai) and house tax (ghari)"],
      ["What it funded","The standing army, paid in cash, and the price controls that made the cash go far"]
     ]}
   ]},

  /* -------------------------- Muhammad bin Tughlaq and Firoz Shah */
  {id:"tughlaq", tag:"Medieval history · new on the site", h:"Muhammad bin Tughlaq and Firoz Shah",
   w:"The capital that moved, the coins nobody trusted, and the Sultan who dug canals and moved Ashokan pillars instead.",
   notes:[
    "==Muhammad bin Tughlaq==, ==1325–1351==, is the ==wisest fool==: learned in philosophy, mathematics and medicine, and the author of ==five schemes that each failed==.",
    "==The capital moved to Daulatabad== (==Devagiri==, in Maharashtra), usually dated ==1327== — some books give 1326. The reason was that it lay ==at the centre of the empire==, with the Deccan newly won. The ==whole population of Delhi== was ordered to move, and the order was ==reversed== a few years later.",
    "==Token currency==: ==bronze and copper coins== issued at the value of silver, about ==1330== — the dates ==1329–30 and 1330–32 both appear in standard books==. It failed because ==the mint was not a monopoly==: every household could, and did, forge them, and the treasury had to redeem the forgeries.",
    "==The Khurasan expedition==: an army of ==370,000== raised and paid for a year to invade Khurasan and Iraq, and ==disbanded without marching==.",
    "==The Qarachil expedition== into the ==Kumaon hills== was destroyed by the weather and the terrain.",
    "==Taxation in the Doab== was raised during a ==famine==, which emptied the richest land the Sultanate had and produced a peasant flight the state answered with force.",
    "He created the ==Diwan-i-Kohi==, a ==department of agriculture==, to bring waste land under the plough — the one scheme that was ==sound in principle and badly run in practice==.",
    "==Ibn Battuta== of Morocco reached his court and was made ==qazi of Delhi==, then sent as ==envoy to China==. His ==Rihla== is the eyewitness account of the reign.",
    "He died in ==1351 at Thatta== in Sindh chasing the rebel Taghi. ==Barani's== verdict — that the people were freed of the Sultan and the Sultan of the people — is the line that is quoted.",
    "==Firoz Shah Tughlaq==, ==1351–1388==, did the opposite: ==no conquests==, and a great deal of ==building and repair==.",
    "He dug ==canals==, the longest from the ==Yamuna to Hisar==, and founded ==Firozabad== (Delhi), ==Hisar==, ==Fatehabad== and ==Jaunpur== — named for ==Juna Khan==, which was Muhammad bin Tughlaq's own name.",
    "New departments: ==Diwan-i-Khairat== for charity and the marriage of poor girls, ==Diwan-i-Bandagan== for slaves, and ==Dar-ul-Shafa==, a free hospital.",
    "He ==imposed the jizya on Brahmins==, who had been exempt, and made the ==iqta hereditary== again, which undid Alauddin's work. He ==banned mutilation as a punishment==.",
    "He moved ==two Ashokan pillars== to Delhi — from ==Topra== (Haryana) and ==Meerut== — and ==repaired the Qutb Minar== after lightning struck it. He wrote the ==Futuhat-i-Firozshahi==, his own account of his reign."
   ],
   blocks:[
    {h:"The five schemes, and why each failed",
     rows:[
      ["The capital at Daulatabad","Central to the empire, but 1,500 km from the frontier that mattered and from the army's recruiting ground. Reversed"],
      ["Token currency","Sound economics, no control of the mint. Forgery was universal and redemption bankrupted the treasury"],
      ["The Khurasan expedition","370,000 men raised and paid for a year, then disbanded without marching"],
      ["The Qarachil expedition","Into the Kumaon hills; destroyed by terrain and weather"],
      ["Taxation in the Doab","Raised during a famine; the peasantry fled and the richest province was wrecked"]
     ]},
    {h:"Firoz Shah's building, and his departments",
     rows:[
      ["Canals","Five, the longest from the Yamuna to Hisar — the beginning of canal irrigation under the Sultanate"],
      ["Cities","Firozabad, Hisar, Fatehabad and Jaunpur, named for Juna Khan"],
      ["Diwan-i-Khairat","Charity, and the marriage of poor girls"],
      ["Diwan-i-Bandagan","The department of slaves — he is said to have kept about 180,000"],
      ["Dar-ul-Shafa","A free hospital at Delhi"],
      ["The Ashokan pillars","Brought from Topra and Meerut to Delhi, and set up without knowing what the script said"],
      ["What he undid","Made the iqta hereditary again, and imposed the jizya on Brahmins"]
     ]}
   ]},

  /* ------------------------ administration, economy and society */
  {id:"sultanate-admin", tag:"Medieval history · new on the site", h:"Sultanate administration and economy",
   w:"The departments, the provinces, the land, the taxes and the coins — the machinery every dynasty inherited and changed.",
   notes:[
    "The ==iqta== was the ==assignment of the revenue of a territory== in place of a salary, and the ==iqtadar== or ==muqti== collected it, paid his troops from it and sent the surplus to the centre. ==Iltutmish organised it==; ==Firoz Shah made it hereditary==, which is how the centre lost control of it.",
    "The ==Wazir== headed the ==Diwan-i-Wizarat==, finance. The ==Ariz-i-Mumalik== headed the ==Diwan-i-Arz==, the military, which ==Balban created==. The ==Diwan-i-Insha== was correspondence, the ==Diwan-i-Risalat== religious and foreign affairs.",
    "==Barid-i-Mumalik== ran the ==intelligence== service, and every provincial post had its own ==barid== reporting to the centre, separately from the governor.",
    "==Sadr-us-Sudur== managed religious endowments and charity; the ==Qazi-ul-Quzat== was the ==chief judge==. The two were often the ==same man==.",
    "The provinces were ==iqtas== under a ==muqti== or ==wali==; below them the ==shiq== under a ==shiqdar==, the ==pargana== under an ==amil==, and the village under the ==muqaddam==, with the ==patwari== keeping the accounts.",
    "Land was of three kinds: ==iqta== (assigned), ==khalisa== (kept for the Sultan's own treasury and his army) and ==inam== or ==milk== (granted free to scholars and religious men).",
    "The taxes: ==kharaj==, the land tax, the main one; ==khams==, the ==one-fifth== share of war booty due to the state — ==Alauddin took four-fifths and left one==; ==jizya== on non-Muslims; and ==zakat==, the charity tax on Muslims.",
    "==Iltutmish's silver tanka and copper jital== are the ==basis of the rupee==. ==Muhammad bin Tughlaq== struck the ==largest number of coin types== of any Sultan, which is one reason he is called a numismatist's Sultan.",
    "The ==Sultan was not an absolute ruler in theory==: he was bound by the ==Sharia==, advised by the ==ulema==, and in practice limited by the ==nobility and the army==. There was ==no law of succession==, which is why almost every reign began with a fight.",
    "==Persian== was the language of administration, and ==Delhi== was the capital for most but not all of the period: ==Lahore== under Aibak, ==Daulatabad== briefly, and ==Agra== from 1504."
   ],
   blocks:[
    {h:"The central departments",
     rows:[
      ["Diwan-i-Wizarat","Finance and revenue, under the Wazir"],
      ["Diwan-i-Arz","The military — recruitment, pay and inspection. Created by Balban, under the Ariz-i-Mumalik"],
      ["Diwan-i-Insha","Royal correspondence, under the Dabir-i-Khas"],
      ["Diwan-i-Risalat","Religious matters and foreign affairs"],
      ["Diwan-i-Kohi","Agriculture — Muhammad bin Tughlaq's"],
      ["Diwan-i-Khairat, Diwan-i-Bandagan","Charity and slaves — both Firoz Shah's"],
      ["Barid-i-Mumalik","Intelligence and the post"],
      ["Sadr-us-Sudur, Qazi-ul-Quzat","Religious endowments; the chief judge"]
     ]},
    {h:"The administrative ladder",
     rows:[
      ["Iqta or province","Muqti, also called wali"],
      ["Shiq","Shiqdar"],
      ["Pargana","Amil, with the mushrif as accountant"],
      ["Village","Muqaddam the headman, patwari the accountant, chaudhari over a group of villages"]
     ]},
    {h:"The taxes",
     rows:[
      ["Kharaj","The land tax — the main source of revenue. One-fifth to one-half of the produce depending on the reign; Alauddin took one-half"],
      ["Khams","The state's share of war booty: one-fifth by law, four-fifths under Alauddin"],
      ["Jizya","On non-Muslims. Brahmins were exempt until Firoz Shah"],
      ["Zakat","The charity tax on Muslims, about 2.5 per cent of wealth"],
      ["Charai and ghari","Grazing tax and house tax — Alauddin's additions"]
     ]}
   ]},

  /* ------------------- architecture, writers and the travellers */
  {id:"sultanate-arts", tag:"Medieval history · new on the site", h:"Sultanate architecture and writers",
   w:"The true arch and the dome, the buildings each dynasty left, the chroniclers, and the travellers who wrote it down from outside.",
   notes:[
    "The Sultanate brought the ==arcuate== style — the ==true arch and the true dome== — against the ==trabeate== style of beam and pillar that Indian building had used. The ==Alai Darwaza== (==1311==) is where the ==true arch and dome== are first done properly.",
    "The ==Qutb Minar== was ==begun by Aibak== and ==completed by Iltutmish==; ==Firoz Shah repaired the top storeys== after lightning. It was built in honour of the Sufi ==Qutbuddin Bakhtiyar Kaki==.",
    "The ==Quwwat-ul-Islam== mosque at Delhi and the ==Adhai Din ka Jhonpra== at Ajmer are ==Aibak's==, and both were ==built from the material of demolished temples==, which is visible in the pillars.",
    "The ==seven cities of Delhi==, in order: ==Lal Kot/Qila Rai Pithora== (Rajput), ==Siri== (Alauddin), ==Tughlaqabad== (Ghiyasuddin), ==Jahanpanah== (Muhammad bin Tughlaq), ==Firozabad== (Firoz Shah), ==Dinpanah/Purana Qila== (Humayun and Sher Shah) and ==Shahjahanabad== (Shah Jahan).",
    "==Sikandar Lodi's tomb== (==1517–18==) carries the ==first double dome== in India — the form the Mughals then took to Humayun's Tomb and the Taj.",
    "==Amir Khusrau==, ==1253–1325==, served ==seven Sultans== and is called ==Tuti-i-Hind==, the parrot of India. He wrote the ==Khazain-ul-Futuh== on Alauddin's conquests, the ==Tughlaq Nama==, and the ==Qiran-us-Sadain==; he is a disciple of ==Nizamuddin Auliya== and is buried beside him.",
    "==Zia-ud-din Barani== wrote the ==Tarikh-i-Firozshahi== and the ==Fatwa-i-Jahandari== — the fullest account of the Khaljis and the early Tughlaqs, and ==hostile== where it suits him.",
    "==Minhaj-us-Siraj== wrote the ==Tabaqat-i-Nasiri==, the source for the Slave dynasty; ==Isami== wrote the ==Futuh-us-Salatin==; ==Yahya bin Ahmad Sirhindi== the ==Tarikh-i-Mubarakshahi== on the Sayyids.",
    "==Ibn Battuta== (Morocco) came to ==Muhammad bin Tughlaq==, was made ==qazi of Delhi== and sent as ==envoy to China==; his book is the ==Rihla==. ==Marco Polo== had touched the ==Kakatiya coast== earlier, about ==1292==.",
    "The ==Chishti== order mattered most in this period: ==Moinuddin Chishti== at ==Ajmer==, then ==Qutbuddin Bakhtiyar Kaki==, ==Baba Farid==, ==Nizamuddin Auliya== and ==Nasiruddin Chiragh-i-Delhi==. The ==Suhrawardi== order, under ==Bahauddin Zakariya==, worked in ==Multan== and ==accepted state patronage==, which the Chishtis refused."
   ],
   blocks:[
    {h:"Who built what",
     rows:[
      ["Qutb Minar","Begun by Aibak, completed by Iltutmish, repaired by Firoz Shah. For the Sufi Qutbuddin Bakhtiyar Kaki"],
      ["Quwwat-ul-Islam mosque","Aibak — the first mosque built at Delhi"],
      ["Adhai Din ka Jhonpra","Aibak, at Ajmer"],
      ["Hauz-i-Shamsi","Iltutmish; his own tomb at Delhi is among the first in the Sultanate"],
      ["Siri, Alai Darwaza, Hauz Khas, Alai Minar","Alauddin Khalji — the Alai Minar left unfinished"],
      ["Tughlaqabad","Ghiyasuddin Tughlaq; Jahanpanah is Muhammad bin Tughlaq's"],
      ["Firozabad, Hisar, Fatehabad, Jaunpur","Firoz Shah Tughlaq"],
      ["Lodi Gardens tombs, Moth ki Masjid","The Lodi dynasty; Moth ki Masjid was built by Sikandar Lodi's wazir"],
      ["Sikandar Lodi's tomb","1517–18 — the first double dome in India"]
     ]},
    {h:"The books and who wrote them",
     rows:[
      ["Tabaqat-i-Nasiri","Minhaj-us-Siraj — the Slave dynasty"],
      ["Khazain-ul-Futuh, Tughlaq Nama, Qiran-us-Sadain","Amir Khusrau"],
      ["Tarikh-i-Firozshahi, Fatwa-i-Jahandari","Zia-ud-din Barani"],
      ["Tarikh-i-Firozshahi (the other one)","Shams-i-Siraj Afif — on Firoz Shah. Two different books share the title"],
      ["Futuhat-i-Firozshahi","Firoz Shah Tughlaq himself"],
      ["Futuh-us-Salatin","Isami"],
      ["Tarikh-i-Mubarakshahi","Yahya bin Ahmad Sirhindi — the Sayyids"],
      ["Rihla","Ibn Battuta"]
     ]}
   ],
   cmp:[
    {k:"Aibak or Iltutmish — who did what",
     rows:[
      ["Qutb-ud-din Aibak","First Sultan, 1206–10. Capital at LAHORE. BEGAN the Qutb Minar. Lakh Baksh. Died playing chaugan"],
      ["Iltutmish","1211–36. Capital moved to DELHI. COMPLETED the Qutb Minar. The tanka and the jital, the iqta, the Chahalgani, and the Caliph's investiture in 1229"]
     ],
     note:"Aibak founded it and Iltutmish made it a state. Nearly every ‘first’ of the Sultanate that is not the throne itself is Iltutmish's."},
    {k:"Dagh and chehra — whose?",
     rows:[
      ["Alauddin Khalji","Introduced the branding of horses (dagh) and the descriptive roll of each soldier (chehra), to stop musters being faked"],
      ["Akbar","Used both again from 1573–74, three centuries later, for the same reason — which is why the question can be set either way"]
     ]},
    {k:"The two capital moves",
     rows:[
      ["Iltutmish","Moved the capital from Lahore to Delhi, and it stayed"],
      ["Muhammad bin Tughlaq","Moved it from Delhi to Daulatabad, about 1327, and moved it back. The population was ordered to go with it"],
      ["Sikandar Lodi","Moved it to Agra in 1504, where the Mughals found it"]
     ]},
    {k:"Token currency, 1330 — why it failed",
     rows:[
      ["The idea","Bronze and copper coins circulating at the value of silver: a sound enough idea, and China had done it"],
      ["Why it failed in India","The mint was not a state monopoly. Forged coins were indistinguishable, every household struck them, and the treasury had to redeem them all"]
     ],
     note:"Books date the issue to 1329–30 or to 1330–32. The failure, and the reason for it, are not in dispute."}
   ],
   links:[["#/early","Ancient and Medieval History"],
          ["#/early/mughals","The Mughal emperors, who come next"]]}

 ],

 quiz:[
 /* ---------------------------------------------------------------- soil */
 {q:"Which Indian soil swells when wet and cracks when dry, so that it ploughs itself?",
  o:["Red and yellow", "Khadar alluvium", "Laterite", "Black, or regur"], a:3, p:"soil",
  s:"Black soil is weathered basalt from the Deccan trap. The cracking is what “self-ploughing” means, and the moisture it holds is why cotton grows on it. Laterite does the opposite — it sets hard."},
 {q:"Kankar — the lime nodules in old alluvium — is found in",
  o:["Khadar", "Regur", "Laterite", "Bhangar"], a:3, p:"soil",
  s:"Bhangar is the OLDER alluvium, lying above the flood level as terraces, and it carries kankar. Khadar is the new alluvium of the floodplain, renewed by silt each year and the most fertile land in India."},
 {q:"About 40 per cent of India's land is under which soil?",
  o:["Laterite", "Black", "Red and yellow", "Alluvial"], a:3, p:"soil",
  s:"Alluvial soil covers the whole northern plain and the deltas — about 40 per cent. It is rich in potash and lime and poor in nitrogen and humus."},
 {q:"Laterite soil is formed when",
  o:["River silt is deposited each year", "Over-irrigation brings salts to the surface", "Basalt weathers in situ", "Heavy rain and high temperature leach the silica away"],
  a:3, p:"soil",
  s:"Leaching removes the silica and leaves iron and aluminium behind. Weathered basalt is black soil; annual silt is khadar; salts brought up by over-irrigation give saline soil."},
 {q:"Tea, coffee, cashew and rubber are grown chiefly on",
  o:["Peaty soil", "Laterite soil", "Black soil", "Arid soil"], a:1, p:"soil",
  s:"Laterite is poor for most crops but suits these four, and it hardens enough to be cut into building brick."},
 {q:"Red soil owes its colour to",
  o:["Iron in the crystalline rock", "Lime nodules", "Aluminium left by leaching", "Decayed organic matter"], a:0, p:"soil",
  s:"Iron gives it the red; it turns yellow when hydrated. It forms on crystalline igneous rock where rainfall is low, in the eastern and southern peninsula."},
 {q:"Saline and alkaline soils — usara, reh, kallar — are treated with",
  o:["Potash", "Lime", "Gypsum", "Urea"], a:2, p:"soil",
  s:"Gypsum. They are made worse by over-irrigation and poor drainage, which is the cause a question usually pairs with the cure."},
 {q:"The ravines of the Chambal badlands are the work of",
  o:["Gully erosion", "Leaching", "Sheet erosion", "Wind erosion"], a:0, p:"soil",
  s:"Gully erosion carves ravines. Sheet erosion strips the topsoil evenly, which is exactly why it is harder to see and more dangerous."},
 {q:"The soil classification used in India is the ICAR's, and the mapping is done by the Soil Survey of India, set up in",
  o:["1929", "1956", "1948", "1966"], a:1, p:"soil",
  s:"Soil Survey of India, 1956. ICAR itself dates from 1929, which is the figure offered against it."},
 {q:"Bajra and jowar are the crops of arid soil — on one condition. Which?",
  o:["That pulses are grown first", "That it is terraced", "That it is limed", "That it is irrigated"], a:3, p:"soil",
  s:"Arid soil in western Rajasthan is sandy, saline and low in humus; it carries bajra and jowar only under irrigation."},

 /* ----------------------------------------------------------------- agri */
 {q:"Which cropping season needs irrigation because it falls between the monsoon and the winter rain?",
  o:["All three equally", "Kharif", "Rabi", "Zaid"], a:3, p:"agri",
  s:"Zaid runs March to June — the short summer season — and depends on irrigation. Watermelon, muskmelon, cucumber, fodder and vegetables."},
 {q:"Rabi crops are sown",
  o:["March to June", "September to October", "June to July", "October to December"], a:3, p:"agri",
  s:"Sown October to December and harvested April or May, on the winter rain and residual moisture. June–July is kharif sowing; September–October is kharif harvest."},
 {q:"Wheat is a rabi crop and rice a kharif crop because",
  o:["Wheat needs standing water and rice does not", "Wheat wants a cool growing season and a warm dry ripening; rice wants standing water and heat", "Wheat is grown only on alluvial soil", "Rice cannot be irrigated"],
  a:1, p:"agri",
  s:"The requirement, not the soil, decides the season. Rice wants standing water and high temperature, which is precisely what the monsoon supplies."},
 {q:"The Green Revolution in India began in",
  o:["1980–81", "1951–52", "1966–67", "1970–71"], a:2, p:"agri",
  s:"1966–67, under the New Agricultural Strategy, after the drought of 1965–66. 1970 is Operation Flood, the White Revolution, which is the usual distractor."},
 {q:"Who bred the dwarf wheat that the Green Revolution was built on?",
  o:["B. Sivaraman", "M. S. Swaminathan", "Verghese Kurien", "Norman Borlaug"], a:3, p:"agri",
  s:"Borlaug bred it; Swaminathan adapted and spread it in India. The question is set both ways, so hold both halves."},
 {q:"The minimum support price is recommended by the CACP and announced by",
  o:["The CACP itself", "The Cabinet Committee on Economic Affairs", "NITI Aayog", "The Ministry of Agriculture alone"], a:1, p:"agri",
  s:"The CACP only advises. The announcement is the Cabinet Committee on Economic Affairs'. The Commission was set up in 1965 as the Agricultural Prices Commission and renamed in 1985."},
 {q:"MSP covers how many crops, and which one gets a Fair and Remunerative Price instead?",
  o:["25 crops; sugarcane", "22 crops; sugarcane", "23 crops; cotton", "22 crops; jute"], a:1, p:"agri",
  s:"22 crops, with sugarcane's FRP fixed separately."},
 {q:"The Swaminathan formula sets MSP at 50 per cent above",
  o:["C2", "The market price", "A2", "A2+FL"], a:0, p:"agri",
  s:"C2, the comprehensive cost. The government's stated benchmark is 50 per cent above A2+FL, a narrower cost — and the gap between the two is the whole dispute."},
 {q:"NABARD was set up on 12 July 1982 on the recommendation of",
  o:["The Royal Commission on Agriculture", "The Sivaraman Committee", "The Narasimham Committee", "The Swaminathan Commission"], a:1, p:"agri",
  s:"The Sivaraman Committee, as the apex body for rural credit. The Royal Commission on Agriculture is the one behind ICAR, in 1929."},
 {q:"Operation Flood, 1970, under Verghese Kurien, is which revolution?",
  o:["Silver", "Yellow", "Blue", "White"], a:3, p:"agri",
  s:"White — milk, on the Anand cooperative model. Yellow is oilseeds (1986), blue is fish, silver is eggs and poultry."},
 {q:"The Golden Fibre is jute. What is the Silver Fibre?",
  o:["Cotton", "Silk", "Wool", "Coir"], a:0, p:"agri",
  s:"Cotton. Golden Revolution itself is horticulture, fruit and honey, which is the trap in this pair."},
 {q:"2023 was declared the International Year of Millets on whose proposal?",
  o:["Nigeria's", "Ethiopia's", "India's", "The FAO's own"], a:2, p:"agri",
  s:"India's. Millets were renamed nutri-cereals in India, which is the other half of the same question."},
 {q:"Which state leads India in jute, and which in coffee?",
  o:["West Bengal and Kerala", "Assam and Kerala", "West Bengal and Karnataka", "Bihar and Tamil Nadu"], a:2, p:"agri",
  s:"West Bengal in jute, by a wide margin, and Karnataka in coffee, by a long way. Kerala leads in rubber, which is the near miss here."},

 /* ------------------------------------------------------------ sultanate */
 {q:"The Delhi Sultanate ran from 1206 to 1526. Which of its five dynasties was Afghan?",
  o:["The Sayyids", "The Lodis", "The Khaljis", "The Tughlaqs"], a:1, p:"sultanate",
  s:"Only the Lodis were Afghan; the rest were Turkish. Bahlol, Sikandar and Ibrahim."},
 {q:"Qutb-ud-din Aibak, the first Sultan, kept his capital at",
  o:["Lahore", "Agra", "Ajmer", "Delhi"], a:0, p:"sultanate",
  s:"Lahore. Iltutmish moved it to Delhi, and that is the pairing the question is really testing."},
 {q:"Which Sultan was called Lakh Baksh, the giver of lakhs, and died playing chaugan?",
  o:["Alauddin Khalji", "Iltutmish", "Balban", "Qutb-ud-din Aibak"], a:3, p:"sultanate",
  s:"Aibak, who fell from his horse at Lahore while playing chaugan — polo."},
 {q:"The Qutb Minar was begun by Aibak. Who completed it?",
  o:["Alauddin Khalji", "Iltutmish", "Balban", "Firoz Shah Tughlaq"], a:1, p:"sultanate",
  s:"Iltutmish completed it; Firoz Shah only repaired the top storeys after lightning struck them, which is the distractor that catches people."},
 {q:"Iltutmish took investiture from the Caliph in 1229. What did that achieve?",
  o:["It gave him the right to strike gold coins", "It made him Caliph in India", "It made the Sultanate legally independent of Ghazni", "It abolished the jizya"],
  a:2, p:"sultanate",
  s:"Legal independence from Ghazni. Iltutmish also gave the Sultanate the silver tanka, the copper jital, the iqta system and the Chahalgani."},
 {q:"Who broke the Chahalgani, the corps of forty nobles that had put him in power?",
  o:["Razia", "Balban", "Jalal-ud-din Khalji", "Iltutmish"], a:1, p:"sultanate",
  s:"Balban, 1266–87. Iltutmish created it. Balban's theory of kingship — Zill-i-Ilahi, with sijda and paibos — goes with the same name."},
 {q:"Razia, the only woman to sit on the throne of Delhi, was nominated by",
  o:["Her father, over his sons", "The Caliph", "The army at Delhi", "The Chahalgani"], a:0, p:"sultanate",
  s:"Iltutmish nominated her over his sons. The nobles would not have it; she married Malik Altunia and was killed in 1240."},
 {q:"Which Sultan founded the Tughlaq dynasty and died when a wooden pavilion collapsed on him?",
  o:["Nasiruddin Mahmud", "Muhammad bin Tughlaq", "Ghiyasuddin Tughlaq", "Firoz Shah Tughlaq"], a:2, p:"sultanate",
  s:"Ghiyasuddin Tughlaq, 1320–25, at Afghanpur. He built Tughlaqabad."},
 {q:"Khizr Khan, who founded the Sayyid dynasty in 1414, is remembered because he",
  o:["Moved the capital to Agra", "Abolished the iqta", "Never took the title of Sultan", "Was the first Afghan ruler of Delhi"], a:2, p:"sultanate",
  s:"He was Timur's deputy and ruled in another's name, never taking the title. The last Sayyid, Alam Shah, abdicated."},
 {q:"Sikandar Lodi moved the capital to Agra in",
  o:["1517", "1526", "1489", "1504"], a:3, p:"sultanate",
  s:"1504 — where the Mughals found it. 1489 and 1517 are his accession and death; 1526 is First Panipat."},
 {q:"Ibrahim Lodi holds one distinction among all the Sultans of Delhi. What?",
  o:["The only one crowned twice", "The only Afghan", "The longest reign", "The only one to die in battle"], a:3, p:"sultanate",
  s:"He was killed on the field at First Panipat, 21 April 1526 — the only Delhi Sultan to die in battle. He was not the only Afghan: all three Lodis were."},

 /* ------------------------------------------------------------- alauddin */
 {q:"The officer who ran Alauddin Khalji's markets was the",
  o:["Diwan-i-Riyasat", "Shahna-i-Mandi", "Ariz-i-Mumalik", "Barid-i-Mumalik"], a:1, p:"alauddin",
  s:"The Shahna-i-Mandi ran the market, under the Diwan-i-Riyasat over the whole system. The Ariz is military and the Barid is intelligence."},
 {q:"What was the purpose of Alauddin's price control?",
  o:["To raise customs revenue", "To break the Hindu merchants", "To relieve the consumer in a famine", "To keep a large standing army affordable"], a:3, p:"alauddin",
  s:"Cheap goods, not generous pay: fixed low prices let him pay a large standing army in cash without raising its pay. The consumer's benefit was a by-product."},
 {q:"Alauddin Khalji raised land revenue to",
  o:["One-third of the produce", "Two-fifths of the produce", "Half the produce", "One-fifth of the produce"], a:2, p:"alauddin",
  s:"Half — 50 per cent, the highest in the Sultanate — assessed by measurement, masahat, on the biswa. One-third is Akbar's demand, which is the figure offered against it."},
 {q:"Dagh and chehra were introduced by Alauddin Khalji and used again, three centuries later, by",
  o:["Aurangzeb", "Sher Shah Suri", "Akbar", "Firoz Shah Tughlaq"], a:2, p:"alauddin",
  s:"Akbar, from 1573–74, for the same reason — to stop musters being faked. Dagh is branding the horses, chehra the descriptive roll of each soldier."},
 {q:"Alauddin refused to recognise the Caliph and took which title instead?",
  o:["Zill-i-Ilahi", "Sikandar-i-Sani", "Tuti-i-Hind", "Lakh Baksh"], a:1, p:"alauddin",
  s:"Sikandar-i-Sani, the second Alexander. Zill-i-Ilahi is Balban's, Lakh Baksh is Aibak's, and Tuti-i-Hind is Amir Khusrau."},
 {q:"Malik Kafur's campaigns in the south against the Yadavas, Kakatiyas, Hoysalas and Pandyas were",
  o:["Defensive wars against the Mongols", "Expeditions that all failed", "Annexations that extended the Sultanate", "Raids for tribute, leaving the rulers in place"], a:3, p:"alauddin",
  s:"Raids for tribute. Devagiri, Warangal, Dwarasamudra and Madurai were left under their own rulers paying him, which is why the Sultanate's southern hold was never deep."},
 {q:"Alauddin Khalji built Siri, the Hauz Khas reservoir and the Alai Darwaza. Which of his works was never finished?",
  o:["The Qutb Minar", "Tughlaqabad", "The Quwwat-ul-Islam mosque", "The Alai Minar"], a:3, p:"alauddin",
  s:"The Alai Minar. The Alai Darwaza, 1311, was finished, and it is where the true arch and dome are first done properly in India."},
 {q:"Khams, the state's share of war booty, was one-fifth by law. What did Alauddin take?",
  o:["One-half", "Four-fifths", "The whole of it", "One-fifth, as the law said"], a:1, p:"alauddin",
  s:"Four-fifths, leaving one to the soldiers — the reverse of the legal share. He also added the grazing tax, charai, and the house tax, ghari."},

 /* -------------------------------------------------------------- tughlaq */
 {q:"Muhammad bin Tughlaq moved the capital to Daulatabad, usually dated",
  o:["1330", "1351", "1320", "1327"], a:3, p:"tughlaq",
  s:"1327, though some books give 1326. Daulatabad is Devagiri in Maharashtra, and the reason was that it lay at the centre of the empire. The order was reversed a few years later."},
 {q:"Why did Muhammad bin Tughlaq's token currency fail?",
  o:["The mint was not a state monopoly, so forgery was universal", "The Caliph forbade it", "Nobody would accept copper", "There was not enough bronze"],
  a:0, p:"tughlaq",
  s:"The idea was sound and China had done it. In India every household could strike indistinguishable coins, and the treasury had to redeem the forgeries."},
 {q:"The Khurasan expedition is remembered because the army of 370,000 was",
  o:["Defeated in Iraq", "Destroyed by the Mongols", "Disbanded without marching", "Lost in the Kumaon hills"], a:2, p:"tughlaq",
  s:"Raised, paid for a year, then disbanded without marching. The Kumaon hills belong to the Qarachil expedition, the other failure."},
 {q:"The Diwan-i-Kohi, created by Muhammad bin Tughlaq, was a department of",
  o:["Slaves", "Intelligence", "Agriculture", "Charity"], a:2, p:"tughlaq",
  s:"Agriculture — to bring waste land under the plough. The one scheme sound in principle and badly run in practice. Charity and slaves are Firoz Shah's departments."},
 {q:"Ibn Battuta, who reached Muhammad bin Tughlaq's court, was made",
  o:["Ariz-i-Mumalik", "Governor of Daulatabad", "Wazir", "Qazi of Delhi, then envoy to China"], a:3, p:"tughlaq",
  s:"Qazi of Delhi and then envoy to China. His Rihla is the eyewitness account of the reign."},
 {q:"Firoz Shah Tughlaq founded Jaunpur and named it for",
  o:["His own son", "Juna Khan, which was Muhammad bin Tughlaq's name", "The Caliph", "A Sufi saint"], a:1, p:"tughlaq",
  s:"Juna Khan was Muhammad bin Tughlaq's own name. Firoz Shah also founded Firozabad, Hisar and Fatehabad, and dug canals, the longest from the Yamuna to Hisar."},
 {q:"Which two things did Firoz Shah Tughlaq do that undid earlier work?",
  o:["Made the iqta hereditary and imposed the jizya on Brahmins", "Raised revenue to half and abolished the jizya", "Moved the capital and struck token coins", "Abolished the iqta and banned mutilation"],
  a:0, p:"tughlaq",
  s:"A hereditary iqta is how the centre lost control of it, and the jizya had not fallen on Brahmins before. He did ban mutilation as a punishment, which is the true half of the answer that pairs it with abolishing the iqta."},
 {q:"Firoz Shah moved two Ashokan pillars to Delhi, from",
  o:["Sarnath and Sanchi", "Topra and Meerut", "Lauriya and Rampurva", "Allahabad and Vaishali"], a:1, p:"tughlaq",
  s:"Topra in Haryana and Meerut — and set them up without knowing what the script said. He also wrote the Futuhat-i-Firozshahi, his own account of his reign."},

 /* -------------------------------------------------------- sultanate-admin */
 {q:"The Diwan-i-Arz, the military department, was created by",
  o:["Alauddin Khalji", "Firoz Shah Tughlaq", "Iltutmish", "Balban"], a:3, p:"sultanate-admin",
  s:"Balban, under the Ariz-i-Mumalik. Iltutmish organised the iqta; Muhammad bin Tughlaq created the Diwan-i-Kohi; Firoz Shah the Diwan-i-Khairat and Diwan-i-Bandagan."},
 {q:"The Barid-i-Mumalik was in charge of",
  o:["Intelligence and the post", "Royal correspondence", "Finance", "Religious endowments"], a:0, p:"sultanate-admin",
  s:"Intelligence. Every provincial post had its own barid reporting to the centre separately from the governor — which is the point of the office. Correspondence is the Diwan-i-Insha's."},
 {q:"Land kept for the Sultan's own treasury and his army was called",
  o:["Milk", "Iqta", "Khalisa", "Inam"], a:2, p:"sultanate-admin",
  s:"Khalisa. Iqta was assigned in place of a salary; inam or milk was granted free to scholars and religious men."},
 {q:"The chief judge of the Sultanate was the",
  o:["Dabir-i-Khas", "Mushrif", "Sadr-us-Sudur", "Qazi-ul-Quzat"], a:3, p:"sultanate-admin",
  s:"The Qazi-ul-Quzat. The Sadr-us-Sudur managed religious endowments and charity, and the two offices were often held by the same man."},
 {q:"In the administrative ladder, who was the village headman and who kept its accounts?",
  o:["Chaudhari and mushrif", "Muqti and wali", "Shiqdar and amil", "Muqaddam and patwari"], a:3, p:"sultanate-admin",
  s:"Muqaddam the headman, patwari the accountant. Above them: pargana under an amil, shiq under a shiqdar, and the iqta under a muqti or wali."},

 /* --------------------------------------------------------- sultanate-arts */
 {q:"Where are the true arch and the true dome first done properly in India?",
  o:["Sikandar Lodi's tomb", "The Quwwat-ul-Islam mosque", "The Alai Darwaza, 1311", "Adhai Din ka Jhonpra"], a:2, p:"sultanate-arts",
  s:"The Alai Darwaza. The arcuate style — true arch and dome — is what the Sultanate brought, against the trabeate beam and pillar Indian building had used."},
 {q:"The first double dome in India is on",
  o:["The Taj Mahal", "Iltutmish's tomb", "Humayun's Tomb", "Sikandar Lodi's tomb, 1517–18"], a:3, p:"sultanate-arts",
  s:"Sikandar Lodi's tomb — the form the Mughals then took to Humayun's Tomb and the Taj, which is why those two are the distractors."},
 {q:"Amir Khusrau, called Tuti-i-Hind, served how many Sultans?",
  o:["Nine", "Three", "Five", "Seven"], a:3, p:"sultanate-arts",
  s:"Seven. He wrote the Khazain-ul-Futuh on Alauddin's conquests, the Tughlaq Nama and the Qiran-us-Sadain, and is buried beside Nizamuddin Auliya, whose disciple he was."},
 {q:"The Tabaqat-i-Nasiri, the source for the Slave dynasty, was written by",
  o:["Zia-ud-din Barani", "Minhaj-us-Siraj", "Isami", "Shams-i-Siraj Afif"], a:1, p:"sultanate-arts",
  s:"Minhaj-us-Siraj. Barani wrote the Tarikh-i-Firozshahi and the Fatwa-i-Jahandari; Isami the Futuh-us-Salatin; Afif the OTHER Tarikh-i-Firozshahi, on Firoz Shah."},
 {q:"The Futuhat-i-Firozshahi was written by",
  o:["Firoz Shah Tughlaq himself", "Yahya bin Ahmad Sirhindi", "Barani", "Shams-i-Siraj Afif"], a:0, p:"sultanate-arts",
  s:"Firoz Shah himself — his own account of his reign. Sirhindi wrote the Tarikh-i-Mubarakshahi, on the Sayyids."},
 {q:"Which Sufi order accepted state patronage, which the Chishtis refused?",
  o:["The Suhrawardis, under Bahauddin Zakariya at Multan", "The Qadiris", "The Naqshbandis", "The Firdausis"], a:0, p:"sultanate-arts",
  s:"The Suhrawardis, at Multan. The Chishtis — Moinuddin at Ajmer, Bakhtiyar Kaki, Baba Farid, Nizamuddin Auliya, Nasiruddin Chiragh-i-Delhi — refused it."},
 {q:"Among the seven cities of Delhi, Siri was built by",
  o:["Alauddin Khalji", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Ghiyasuddin Tughlaq"], a:0, p:"sultanate-arts",
  s:"Siri is Alauddin's, the second city. Tughlaqabad is Ghiyasuddin's, Jahanpanah is Muhammad bin Tughlaq's and Firozabad is Firoz Shah's."}
]
},

]

};
