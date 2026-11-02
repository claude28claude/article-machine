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

 ]},


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

 ]},

{id:"10-october", d:"10 October", y:2026,
 w:"The Booker Prize of the last four years, books and authors with the 2026 Nobel, who holds each cup now, Paris 2024, international organisations, and the SSC notes on the 1991 reforms, the Five Year Plans, sports and their cups, the Jain councils, ISRO's missions and the Mughals.",
 intro:"Two parts here are current affairs and live only on this page: the Booker Prize and the current holders of each cup. The rest are revision sheets for topics that were added or deepened on the site today; each gives the highlighted notes and a link to the full page.",
 parts:[

  /* ---------------------------------------------------------- full part */
  {id:"booker", tag:"Current affairs · books", h:"The Booker Prize, 2022 to 2025",
   w:"The last four winners, the four International Booker winners alongside them, the Indian connection, and the 2026 shortlist with its winner still to come.",
   notes:[
    "==2025==: ==David Szalay==, ==Flesh==. The first ==Hungarian-British== winner. Announced 10 November 2025; jury chaired by Roddy Doyle.",
    "==2024==: ==Samantha Harvey== (Britain), ==Orbital==. The first winner ==set in space==: six astronauts on the International Space Station over one day.",
    "==2023==: ==Paul Lynch== (Ireland), ==Prophet Song==. Ireland sliding into tyranny; the ==fifth Irish== winner.",
    "==2022==: ==Shehan Karunatilaka== (Sri Lanka), ==The Seven Moons of Maali Almeida==. The ==second Sri Lankan-born== winner, after Michael Ondaatje in 1992.",
    "The prize: ==£50,000==, since ==1969==, for a novel written in ==English== and published in the UK or Ireland; open to writers of ==any nationality== since 2014.",
    "International Booker, for a book ==translated== into English; the money is ==split== between author and translator.",
    "International Booker ==2022==: ==Geetanjali Shree==, ==Tomb of Sand== (Hindi, translated by ==Daisy Rockwell==): the ==first from an Indian language==.",
    "International Booker ==2025==: ==Banu Mushtaq==, ==Heart Lamp== (Kannada, translated by ==Deepa Bhasthi==): the ==first short-story collection== to win.",
    "International Booker ==2026==: ==Yang Shuang-zi==, ==Taiwan Travelogue== (translated by Lin King): the ==first from Mandarin==.",
    "Booker 2026: shortlist of six announced ==22 September 2026==, jury chaired by ==Mary Beard==; the winner is due on ==9 November 2026==.",
    "Indian winners: ==Salman Rushdie== (1981), ==Arundhati Roy== (1997), ==Kiran Desai== (2006), ==Aravind Adiga== (2008). Kiran Desai was ==shortlisted again in 2025==."
   ],
   blocks:[
    {h:"The winners, 2022 to 2025",
     rows:[
      ["2025: David Szalay, Flesh","==Hungarian-British==: born in Canada, raised in London, lives in Vienna. A spare novel that follows one Hungarian man from adolescence to old age. The first Hungarian-British winner. Announced 10 November 2025 at Old Billingsgate, London; chair of judges ==Roddy Doyle==, the 1993 winner. Szalay had been shortlisted before, for All That Man Is (2016)"],
      ["2024: Samantha Harvey, Orbital","==British==. Six astronauts aboard the ==International Space Station== across a single day of sixteen orbits. The ==first Booker winner set in space==, and the second-shortest winner ever. Announced 12 November 2024; chair Edmund de Waal. The 19th woman to win"],
      ["2023: Paul Lynch, Prophet Song","==Irish==. A mother of four in Dublin as the country slides into tyranny and her husband, a trade unionist, is taken by a new secret police. The fifth Irish winner, after Iris Murdoch, John Banville, Roddy Doyle and Anne Enright. Announced 26 November 2023; chair Esi Edugyan"],
      ["2022: Shehan Karunatilaka, The Seven Moons of Maali Almeida","==Sri Lankan==. A war photographer wakes up dead in 1990, in the middle of the civil war, with seven moons to find out who killed him. The second Sri Lankan-born winner after Michael Ondaatje (The English Patient, 1992). Announced 17 October 2022; chair Neil MacGregor"]
     ]},
    {h:"The International Booker, 2022 to 2026",
     note:"For fiction translated into English. £50,000, split equally between author and translator.",
     rows:[
      ["2026: Yang Shuang-zi, Taiwan Travelogue","Translated from ==Mandarin== by Lin King. A novel framed as a rediscovered travel memoir from 1930s Japanese-ruled Taiwan. The ==first winner from Mandarin Chinese==. Announced 19 May 2026"],
      ["2025: Banu Mushtaq, Heart Lamp","Translated from ==Kannada== by ==Deepa Bhasthi==. Twelve stories of women's lives in Karnataka. The first Kannada book, the ==first short-story collection==, and Bhasthi the first Indian translator to win"],
      ["2024: Jenny Erpenbeck, Kairos","Translated from ==German== by Michael Hofmann. A love affair in East Berlin in the years before the Wall fell. The first German-language writer to win, and Hofmann the first male translator to win"],
      ["2023: Georgi Gospodinov, Time Shelter","Translated from ==Bulgarian== by Angela Rodel. Clinics that recreate past decades for people losing their memory. The first Bulgarian winner"],
      ["2022: Geetanjali Shree, Tomb of Sand","Translated from ==Hindi== (Ret Samadhi) by ==Daisy Rockwell==. An eighty-year-old widow who travels to Pakistan to face the Partition she survived. The ==first winner from any Indian language=="]
     ]},
    {h:"The prize itself",
     rows:[
      ["Founded","==1969==. The first winner was P.H. Newby, Something to Answer For"],
      ["Prize","==£50,000==; each shortlisted author also receives £2,500"],
      ["Who can win","A novel written in English and published in the UK or Ireland. Until 2014 only writers from the Commonwealth, Ireland and Zimbabwe were eligible; since then, any nationality"],
      ["The names","The Booker Prize (1969-2001); the Man Booker Prize (2002-2019, sponsored by the Man Group); the Booker Prize again since 2019, funded by Crankstart"],
      ["The International Booker","Began in 2005 as a prize every two years for a writer's whole body of work; since 2016, an annual prize for one translated book"],
      ["Two-time winners","J.M. Coetzee (1983, 1999), Peter Carey (1988, 2001), Hilary Mantel (2009, 2012) and Margaret Atwood (2000, and 2019 jointly with Bernardine Evaristo)"],
      ["The winners of winners","Midnight's Children won the Booker of Bookers (1993) and the Best of the Booker (2008); The English Patient won the Golden Man Booker (2018)"]
     ]},
    {h:"The Indian connection",
     rows:[
      ["1971: V.S. Naipaul, In a Free State","Trinidad-born, of Indian descent"],
      ["1981: Salman Rushdie, Midnight's Children","Born in Bombay"],
      ["1997: Arundhati Roy, The God of Small Things","The first Indian woman to win; her debut novel"],
      ["2006: Kiran Desai, The Inheritance of Loss","Then the youngest woman to win. Her mother, Anita Desai, was shortlisted three times and never won. Kiran Desai was shortlisted again in 2025 for The Loneliness of Sonia and Sunny"],
      ["2008: Aravind Adiga, The White Tiger","A debut novel"],
      ["International Booker","Geetanjali Shree (2022, Hindi) and Banu Mushtaq (2025, Kannada)"]
     ]},
    {h:"The Booker 2026: the shortlist",
     note:"Announced 22 September 2026 from 163 submissions and a longlist of 13. Chair of judges: Mary Beard. The winner is due on 9 November 2026, so this row will change.",
     rows:[
      ["Black Bag","Luke Kennard"],
      ["The Disappearers","Marlon James, who won in 2015 with A Brief History of Seven Killings"],
      ["The End of Everything","M. John Harrison, who would be the oldest winner"],
      ["May We Feed the King","Rebecca Perry"],
      ["John of John","Douglas Stuart, who won in 2020 with Shuggie Bain"],
      ["The Things We Never Say","Elizabeth Strout"]
     ]}
   ],
   cmp:[
    {k:"Booker or International Booker",
     rows:[
      ["The Booker Prize","A novel ==written in English==. The money goes to the author. Autumn: 2025 David Szalay"],
      ["The International Booker","A book ==translated into English==. The money is ==split with the translator==. Spring: 2025 Banu Mushtaq"]],
     note:"If the question names a translator, it is the International Booker. Geetanjali Shree and Banu Mushtaq won the International, not the Booker."},
    {k:"Kiran Desai or Anita Desai",
     rows:[
      ["Kiran Desai","==Won== in 2006, The Inheritance of Loss; shortlisted again in 2025"],
      ["Anita Desai","Her mother: ==shortlisted three times==, never won"]]}
   ]},

  /* --------------------------------------------------------- recap part */
  {id:"books", tag:"Static GK \u00b7 books", h:"Books and authors", from:"gk.books",
   w:"The autobiographies, the books of the national movement, the pen names, and the prizes with their latest winners: Anne Carson took the Nobel two days before this set, and R. Vairamuthu the 60th Jnanpith.",
   links:[["#/gk/pack/books","Every book and author"],["#/gk/pack/awards","Awards and honours"]]},

  /* ---------------------------------------------------------- full part */
  {id:"cups-now", tag:"Current affairs · sports", h:"Who holds the cup now",
   w:"The latest winner of every cup SSC asks about, as of 10 October 2026. Which cup belongs to which sport is in Static GK; who won it this year is here.",
   notes:[
    "==India== won the ==T20 World Cup 2026==, beating ==New Zealand== by 96 runs at Ahmedabad on 8 March 2026: the ==first side with three titles== and the first to defend it.",
    "==India women== won their ==first ODI World Cup== in ==2025==, beating South Africa at Navi Mumbai.",
    "==India== won the ==Champions Trophy 2025== (beat New Zealand, Dubai) and the ==Asia Cup 2025== (beat Pakistan, Dubai; a ninth title).",
    "==South Africa== won the ==World Test Championship== final in 2025, against Australia at Lord's.",
    "==RCB== won the ==IPL== in ==2025 and 2026==.",
    "==Spain== won the ==FIFA World Cup 2026==: 1-0 against Argentina after extra time, New Jersey, 19 July 2026.",
    "Hockey World Cup 2026: ==Germany== (men, 1-0 against Spain) and ==Argentina== (women, on penalties against the Netherlands).",
    "==East Bengal== won the ==Durand Cup 2026==: their 17th, level with Mohun Bagan.",
    "Thomas Cup 2026 ==China==; Uber Cup 2026 ==South Korea==; Davis Cup 2025 ==Italy== (third in a row).",
    "Asian Games 2026, Aichi-Nagoya: India ==fourth==, ==85 medals== (21 gold). Commonwealth Games 2026, Glasgow: India ==fourth==, ==39 medals== (13 gold).",
    "Chess: ==Divya Deshmukh== won the Women's World Cup 2025; ==Javokhir Sindarov== won the World Cup in ==Goa==, 2025."
   ],
   blocks:[
    {h:"Cricket",
     rows:[
      ["ICC Men's T20 World Cup 2026","==India==, beat New Zealand by 96 runs, Narendra Modi Stadium, Ahmedabad, 8 March 2026. Captain Suryakumar Yadav. India's third title (2007, 2024, 2026). Co-hosted by India and Sri Lanka"],
      ["ICC Women's T20 World Cup 2026","==Australia==, beat England by seven wickets at Lord's, 5 July 2026: their seventh title"],
      ["ICC Champions Trophy 2025","==India==, beat New Zealand by four wickets, Dubai, 9 March 2025. Unbeaten through the tournament; Rohit Sharma player of the final"],
      ["ICC Women's Cricket World Cup 2025","==India==, beat South Africa by 52 runs at the DY Patil Stadium, Navi Mumbai, 2 November 2025. Captain Harmanpreet Kaur; India's first title"],
      ["World Test Championship 2023-25","==South Africa==, beat Australia by five wickets at Lord's, June 2025. Aiden Markram 136; South Africa's first ICC title since 1998"],
      ["Asia Cup 2025","==India==, beat Pakistan by five wickets, Dubai, 28 September 2025. A T20 tournament; India's ninth title"],
      ["IPL 2026","==Royal Challengers Bengaluru==, beat Gujarat Titans, Ahmedabad, 31 May 2026. Back-to-back titles after their first in 2025"],
      ["Anderson-Tendulkar Trophy 2025","India's Test tour of England, the first for this trophy: ==drawn 2-2=="]
     ]},
    {h:"Football and hockey",
     rows:[
      ["FIFA World Cup 2026","==Spain==, beat Argentina 1-0 after extra time, MetLife Stadium, New Jersey, 19 July 2026. Spain's second title (2010). The first 48-team World Cup, co-hosted by the USA, Canada and Mexico"],
      ["Durand Cup 2026","==East Bengal==, beat Mohun Bagan Super Giant 4-1, Kolkata, 23 August 2026. The 135th edition"],
      ["FIH Men's Hockey World Cup 2026","==Germany==, beat Spain 1-0, Wavre, Belgium, 30 August 2026. Germany's fourth title, level with Pakistan"],
      ["FIH Women's Hockey World Cup 2026","==Argentina==, beat the Netherlands on penalties after 1-1, Amstelveen, 29 August 2026"],
      ["Men's Hockey Asia Cup 2025","==India==, at Rajgir, Bihar. The win qualified India for the 2026 World Cup"]
     ]},
    {h:"Badminton, tennis and chess",
     rows:[
      ["Thomas Cup 2026","==China==, beat France 3-1 at Horsens, Denmark, 3 May 2026: China's 12th title, and France's first final"],
      ["Uber Cup 2026","==South Korea==, beat China 3-1 at Horsens: Korea's third title"],
      ["Davis Cup 2025","==Italy==, beat Spain in Bologna, November 2025: a third title in a row"],
      ["FIDE World Cup 2025","==Javokhir Sindarov== (Uzbekistan), at 19 the youngest winner, in ==Goa=="],
      ["FIDE Women's World Cup 2025","==Divya Deshmukh==, beating Koneru Humpy in an all-Indian final at Batumi, Georgia. She became a Grandmaster by winning it"],
      ["World Chess Champion","==D. Gukesh==, who won the title in Singapore in December 2024"]
     ]},
    {h:"The multi-sport games",
     rows:[
      ["Asian Games 2026, Aichi-Nagoya","19 September to 4 October 2026. India ==fourth==, with ==85 medals==: 21 gold, 27 silver, 37 bronze"],
      ["Commonwealth Games 2026, Glasgow","23 July to 2 August 2026. India ==fourth==, with ==39 medals==: 13 gold, 17 silver, 9 bronze"],
      ["Next","Commonwealth Games 2030 in ==Ahmedabad==, the centenary Games; Asian Games 2030 in Doha; Olympics 2028 in Los Angeles"]
     ]}
   ]},

  /* --------------------------------------------------------- recap parts */
  {id:"olympics", tag:"Static GK \u00b7 sports", h:"Paris 2024", from:"gk.paris-2024",
   w:"India's six Olympic medals and six fourth places, Vinesh Phogat's disqualification, the Games' firsts, and the record 29 Paralympic medals.",
   links:[["#/gk/pack/paris-2024","Paris 2024 in full"],["#/gk/pack/sports","India's earlier Olympic milestones"]]},

  {id:"orgs", tag:"Static GK \u00b7 world", h:"International organisations", from:"gk.orgs",
   w:"The UN and its organs, every specialised agency with its headquarters and year, the groupings India is and is not in, and who heads what.",
   links:[["#/gk/pack/orgs","International organisations in full"],["#/gk/pack/hq","The one-line headquarters list"]]},

  {id:"reforms", tag:"Indian Economy", h:"The 1991 reforms", from:"econ.reform",
   w:"The crisis, the gold, the devaluation, 24 July 1991, and the committees. The full page now carries the dates in order and the words the questions use.",
   links:[["#/economy/reforms","The 1991 reforms in full"]]},

  {id:"plans", tag:"Indian Economy", h:"The Five Year Plans", from:"econ.plans",
   w:"All fifteen, now with SSC notes on every plan, a one-line-each table, and which scheme fell in which plan.",
   links:[["#/economy","All the plans, with the at-a-glance table"],["#/economy/plan/first","Start with the First Plan"]]},

  {id:"cups", tag:"Static GK", h:"Sports and their cups", from:"gk.cups",
   w:"Every cup filed under its sport, with when it began and who it is named after.",
   links:[["#/gk/pack/cups","Every cup, sport by sport"],["#/gk/pack/sports","Players, terms and Olympic milestones"]]},

  {id:"jain", tag:"Ancient History", h:"Jainism and the Jain councils", from:"early.jainism",
   w:"The two councils, Mahavira's three places and a river, the two sects, and the councils they get confused with.",
   links:[["#/early/topic/jainism","The full page"],["#/early/confusions","Jain or Buddhist council?"]]},

  {id:"isro", tag:"Static GK", h:"ISRO's space missions", from:"gk.isro",
   w:"Every mission in order from 1963, the centres, the rockets and what is coming. World Space Week ends today.",
   links:[["#/gk/pack/isro","Every mission, in order"],["#/gk/pack/space","Nuclear programme and defence"]]},

  {id:"mughals", tag:"Medieval History", h:"The Mughals", from:"early.mughals",
   w:"Babur to Bahadur Shah Zafar, with a page for each great Mughal and topic pages for the battles, the administration, the buildings and the books.",
   links:[["#/early/mughals","The emperors"],["#/early/topic/mughal-battles","Battles"],
          ["#/early/topic/mughal-admin","Administration"],["#/early/topic/mughal-architecture","Architecture"],
          ["#/early/topic/mughal-books","Books and travellers"]]}
 ]}

]

};
