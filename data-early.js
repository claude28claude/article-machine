/* The Article Machine - data-early.js
   Ancient and Medieval History: Jainism and its councils, and the Mughals.

   WHY THIS IS A SUBJECT OF ITS OWN. Modern History on this site starts with
   the East India Company's charter in 1600. Jainism is two thousand years
   older than that, and the Mughal empire was founded in 1526, so neither
   fits inside it without stretching the subject's name until it means
   nothing. An exam treats them as different papers too: "ancient",
   "medieval" and "modern" are three separate rows of the SSC syllabus.

   HOW IT IS SOURCED. Written from the standard record (NCERT's Themes in
   Indian History and Our Pasts, and the usual reference works), not
   extracted. Three kinds of statement:

   1. REIGNS, BATTLES, BUILDINGS. Firm, and stated flatly.
   2. ANCIENT DATES. Mahavira's dates and the date of each Jain council come
      from tradition, and the tradition counts from a death date that is
      itself disputed. Where textbooks give two years, both are printed and
      the one SSC uses is named.
   3. LISTS THAT ARE PARTLY LEGEND. Akbar's "nine jewels" is a later
      tradition and its membership varies by book. It is given because it
      is asked, with that said beside it.

   ==Double equals== around a phrase marks it as the highlighted answer in
   the SSC notes; the renderer turns it into a highlight and strips it from
   the search index.                                                        */

window.EARLY = {

/* ------------------------------------------------------------------ topics

   Each topic is a study page: a short intro, the SSC notes, then the
   tables. `era` decides which group it is listed under on the subject's
   front page.                                                              */

topics: [

/* =================================================================== */
{id:"jainism", era:"ancient", n:"Jainism and the Jain councils", hy:1,
 w:"The two councils, Mahavira's life, the twenty-four Tirthankaras, the split into Digambara and Shvetambara, the texts, the patrons and the temples.",
 intro:"Jainism is asked in four shapes: the councils (where, when, who presided), Mahavira's life (three places and a river), the doctrine (three jewels and five vows), and the monuments (Shravanabelagola, Dilwara, Ranakpur). The councils are the part most often confused, because Pataliputra hosted both the first Jain council and the third Buddhist one, so the two lists are printed side by side at the end.",
 notes:[
  "First Jain council: ==Pataliputra==, c. ==300 BCE==, presided over by ==Sthulabhadra==, in the reign of Chandragupta Maurya. The ==12 Angas== were compiled there.",
  "Second Jain council: ==Vallabhi== in Gujarat, ==512 CE==, presided over by ==Devardhi Kshamashramana==. The canon was ==written down== for the first time. Some books give 453 or 454 CE.",
  "The famine in Magadha caused the split: ==Bhadrabahu== led a group south to Shravanabelagola and became the ==Digambaras== (sky-clad); those who stayed with ==Sthulabhadra== became the ==Shvetambaras== (white-clad).",
  "Mahavira is the ==24th== Tirthankara, ==Parshvanath== the 23rd and ==Rishabhadeva== (Adinath) the first.",
  "Mahavira: born at ==Kundagrama== near Vaishali, Kaivalya at ==Jrimbhikagrama== on the ==Rijupalika== river under a sal tree, nirvana at ==Pavapuri==.",
  "Triratna: right faith, right knowledge, right conduct. Of the five vows, Mahavira added ==brahmacharya== to Parshvanath's four.",
  "Jain texts are in ==Ardhamagadhi Prakrit==; the ==Bhagavati Sutra== has its own list of the sixteen Mahajanapadas.",
  "Gommateshwara (Bahubali) at ==Shravanabelagola==, Karnataka, c. 983 CE, commissioned by ==Chamundaraya==, on ==Vindhyagiri== hill; the Mahamastakabhisheka is held every ==12 years==.",
  "Dilwara temples, ==Mount Abu==: Vimal Vasahi (1031) by ==Vimal Shah==; Luna Vasahi (1230) by the brothers ==Vastupala and Tejapala==.",
  "Kharavela of Kalinga, Jain patron: ==Hathigumpha inscription==, Udayagiri hills near Bhubaneswar."
 ],
 blocks:[
  {h:"The Jain councils",
   note:"Asked as: where, when, who presided, and what was compiled. The Digambaras do not accept the canon fixed at either council.",
   rows:[
    ["First council","==Pataliputra==, c. 300 BCE (also written as the early 3rd century BCE). Presided over by ==Sthulabhadra==. Called after a twelve-year famine in Magadha, in the reign of Chandragupta Maurya. The 12 Angas were compiled to replace the lost 14 Purvas"],
    ["Second council","==Vallabhi==, Gujarat, ==512 CE==. Presided over by ==Devardhi Kshamashramana==. The Shvetambara canon, the 12 Angas and 12 Upangas, was compiled and written down for the first time. Some textbooks give 453 or 454 CE: tradition dates it 980 or 993 years after Mahavira's death, and which base year is used moves it"],
    ["The recitations of c. 300-313 CE","Held at the same time at Mathura, under Skandila, and at Vallabhi, under Nagarjuna. Rarely asked. Listed because a few books count them and then call the 512 CE council the third"],
    ["What came out of the first council","The split. Bhadrabahu's followers, back from the south, refused the Angas compiled in their absence and the white robes worn in Magadha"],
    ["Who rejects both","The Digambaras, who hold that the original canon was lost entirely"]
   ]},
  {h:"Mahavira",
   rows:[
    ["Born","540 BCE, the date most textbooks use; Jain tradition puts it at 599 BCE. At ==Kundagrama== near Vaishali, Bihar"],
    ["Clan and parents","The Jnatrika clan. Father Siddhartha, a clan chief; mother Trishala, a Lichchhavi princess and sister of Chetaka, ruler of Vaishali"],
    ["Family","Wife Yashoda and daughter Anojja (Priyadarshana), in the Shvetambara account. The Digambaras hold that he never married. His son-in-law Jamali led the first schism"],
    ["Renunciation","At 30. Twelve years of asceticism followed"],
    ["Kaivalya","At 42, at ==Jrimbhikagrama== on the bank of the ==Rijupalika==, under a sal tree"],
    ["Titles","Jina (the conqueror, hence Jaina), Mahavira (the great hero), Kevalin, Nirgrantha (free from bonds)"],
    ["Died","468 BCE, at 72, at ==Pavapuri== near Rajgir. Jain tradition puts it at 527 BCE"],
    ["Language","Taught in Ardhamagadhi, a Prakrit, the language of ordinary people"],
    ["Contemporaries","The Buddha; and the Haryanka kings Bimbisara and Ajatashatru, whom both religions claim as patrons"]
   ]},
  {h:"The Tirthankaras worth knowing",
   note:"Twenty-four in all. A Tirthankara is a ford-maker, one who shows the crossing over the river of rebirth. Each has a symbol (lanchhana), and the symbols are asked.",
   rows:[
    ["1st: Rishabhanatha (Adinatha)","Symbol the ==bull==. Traditionally the founder. Attained nirvana at Ashtapada (Kailash). Bahubali was his son"],
    ["22nd: Neminatha (Arishtanemi)","Symbol the ==conch==. Linked with Girnar in Gujarat; in tradition a cousin of Krishna"],
    ["23rd: Parshvanatha","Symbol the ==serpent==. A prince of Varanasi, about 250 years before Mahavira. Taught four vows (chaturyama). Nirvana at Sammed Shikhar, Jharkhand"],
    ["24th: Mahavira","Symbol the ==lion=="],
    ["19th: Mallinatha","A woman, in the Shvetambara tradition; a man, in the Digambara"],
    ["Sammed Shikhar (Shikharji)","Parasnath hill, Giridih, Jharkhand: twenty of the twenty-four attained nirvana here, by tradition. It is also the highest point in Jharkhand"]
   ]},
  {h:"What Jainism teaches",
   rows:[
    ["Triratna, the three jewels","Samyak darshana (right faith), samyak jnana (right knowledge), samyak charitra (right conduct)"],
    ["The five vows","Ahimsa (non-violence), satya (truth), asteya (not stealing), aparigraha (non-possession), and ==brahmacharya== (celibacy), the fifth, added by Mahavira"],
    ["Mahavrata and anuvrata","Monks keep the five as great vows; lay followers keep them in a lighter form, as small vows"],
    ["Anekantavada","Reality has many sides, and no single view captures all of it"],
    ["Syadvada","The logic that follows: every statement is true only 'in some respect' (syat). Also called the sevenfold predication, saptabhangi"],
    ["Jiva and ajiva","Soul and non-soul. Karma is a fine matter that sticks to the soul; freeing the soul from it is moksha"],
    ["God and the Vedas","No creator god, and no authority for the Vedas or for sacrifice"],
    ["Sallekhana","Voluntary fasting to death at the end of life. Chandragupta Maurya is said to have died this way at Shravanabelagola"]
   ]},
  {h:"The two sects",
   rows:[
    ["Digambara (sky-clad)","Monks go naked. Followers of Bhadrabahu. Women cannot attain moksha without rebirth as a man. Mahavira never married. Strong in Karnataka and Maharashtra"],
    ["Shvetambara (white-clad)","Monks and nuns wear white. Followers of Sthulabhadra. Women can attain moksha, and Mallinatha was a woman. Accept the Agamas fixed at Vallabhi. Strong in Gujarat and Rajasthan"],
    ["Later sub-sects","Sthanakvasi and Terapanthi among the Shvetambaras, both rejecting image worship; Bisapanthi and Terapanthi among the Digambaras"]
   ]},
  {h:"The texts",
   rows:[
    ["Agamas","The canon: 12 Angas, of which the Acharanga Sutra, the rules of conduct for monks, is the first. In Ardhamagadhi Prakrit"],
    ["Bhagavati Sutra","One of the Angas. Gives a list of the sixteen Mahajanapadas, different from the Buddhist Anguttara Nikaya's"],
    ["Kalpasutra","Lives of the Tirthankaras, attributed to Bhadrabahu"],
    ["Tattvartha Sutra","Umaswati. The one text both sects accept"],
    ["Parishishtaparvan","Hemachandra, 12th century, in the court of Kumarapala of Gujarat. The source for Chandragupta Maurya's conversion"],
    ["Adipurana","Jinasena in Sanskrit, 9th century, in the Rashtrakuta court; and Pampa's Kannada Adipurana of 941 CE"],
    ["The three gems of Kannada","Pampa, Ponna and Ranna, all Jain poets"],
    ["Classical language status","==Prakrit==, the language of the Jain Agamas, was made a classical language on ==3 October 2024==, with Pali (the language of the Buddhist canon), Marathi, Assamese and Bengali: eleven classical languages in all"]
   ]},
  {h:"The patrons",
   rows:[
    ["Chandragupta Maurya","Became a Jain, by the Jain account, and went south with Bhadrabahu. Died by sallekhana on Chandragiri hill, Shravanabelagola"],
    ["Samprati","Ashoka's grandson, remembered in Jain tradition as a great patron"],
    ["Kharavela of Kalinga","1st century BCE, Mahameghavahana (Chedi) dynasty. The ==Hathigumpha inscription== at Udayagiri records his reign and the return of a Jina image the Nandas had carried off"],
    ["Amoghavarsha I","Rashtrakuta king, 9th century. Credited with the Kannada Kavirajamarga, patron of Jinasena"],
    ["The Western Gangas","Their minister Chamundaraya commissioned the Gommateshwara statue"],
    ["Kumarapala","Chalukya (Solanki) king of Gujarat, 12th century, patron of Hemachandra"]
   ]},
  {h:"Temples, caves and places",
   rows:[
    ["Shravanabelagola, Hassan, Karnataka","Gommateshwara (Bahubali), a monolith about 17 metres (57 ft) high, c. 983 CE, commissioned by ==Chamundaraya==. Mahamastakabhisheka every 12 years; last held in 2018"],
    ["Shravanabelagola's two hills","The statue stands on ==Vindhyagiri== (Indragiri). ==Chandragiri==, the hill facing it, holds the Chandragupta Basadi and the Bhadrabahu cave, where Chandragupta Maurya is said to have died"],
    ["Dilwara temples, Mount Abu, Rajasthan","White marble. ==Vimal Vasahi== (1031), built by Vimal Shah, minister of the Solanki king Bhima I, for Adinatha; ==Luna Vasahi== (1230), built by Vastupala and Tejapala, for Neminatha"],
    ["Ranakpur, Pali, Rajasthan","The Chaumukha temple to Adinatha, begun 1437 by the merchant Dharna Shah under Rana Kumbha; 1,444 carved pillars, no two alike"],
    ["Palitana, Gujarat","Over 800 temples on Shatrunjaya hill"],
    ["Statue of Ahimsa, Mangi-Tungi, Nashik, Maharashtra","A 108 ft (33 m) image of Rishabhanatha carved from the hill, consecrated in 2016. Guinness lists it as the ==tallest Jain idol==, above the 57 ft Gommateshwara"],
    ["Udayagiri and Khandagiri, Odisha","Rock-cut cells for Jain monks near Bhubaneswar, from Kharavela's time; the Hathigumpha (elephant cave) inscription"],
    ["Ellora, Maharashtra","Caves 30 to 34 are Jain (Digambara), including the Indra Sabha"],
    ["Sittanavasal, Tamil Nadu","A Jain cave temple with paintings, near Pudukkottai"],
    ["Pavapuri, Bihar","Jal Mandir, the temple in a lake, where Mahavira died"],
    ["Girnar, Gujarat","Temples to Neminatha"]
   ]},
  {h:"Beside the Buddhist councils",
   note:"The table that stops the mix-up. Pataliputra appears in both lists; nothing else does.",
   rows:[
    ["1st Buddhist, 483 BCE","Rajagriha (Saptaparni cave). King ==Ajatashatru==; presided by ==Mahakassapa==. Sutta Pitaka (recited by Ananda) and Vinaya Pitaka (by Upali)"],
    ["2nd Buddhist, 383 BCE","Vaishali. King ==Kalashoka==; presided by ==Sabakami==. Split into Sthaviravadins and Mahasanghikas"],
    ["3rd Buddhist, c. 250 BCE","==Pataliputra==. King ==Ashoka==; presided by ==Moggaliputta Tissa==. Abhidhamma Pitaka; missionaries sent abroad"],
    ["4th Buddhist, 1st century CE","Kundalvana, Kashmir. King ==Kanishka==; presided by ==Vasumitra==, with Ashvaghosha as deputy. Split into Hinayana and Mahayana"],
    ["1st Jain, c. 300 BCE","==Pataliputra==. Chandragupta Maurya's reign; presided by ==Sthulabhadra=="],
    ["2nd Jain, 512 CE","==Vallabhi==. Presided by ==Devardhi Kshamashramana=="]
   ]}
 ]},

/* =================================================================== */
{id:"mughal-battles", era:"medieval", n:"Mughal battles, 1526 to 1761", hy:1,
 w:"Panipat three times, Babur's four battles, Humayun's two defeats, Haldighati, Samugarh and Karnal, each with who fought whom and what it settled.",
 intro:"A battle question gives you one of three things, the place, the year or the two sides, and asks for another. So each row carries all three, and the confused set, the three battles of Panipat, has its own pair on the confused-pairs page.",
 notes:[
  "First Panipat, ==21 April 1526==: ==Babur== defeats ==Ibrahim Lodi==. Founds the Mughal empire; field artillery and the ==tulughma== flanking tactic.",
  "Khanwa, ==1527==: Babur defeats ==Rana Sanga== of Mewar and takes the title ==Ghazi==.",
  "Chanderi ==1528== (Medini Rai) and Ghaghra ==1529== (the Afghans): Babur's last two battles.",
  "Chausa ==1539== and Kannauj ==1540==: ==Sher Shah== defeats Humayun, who goes into exile for fifteen years.",
  "Second Panipat, ==5 November 1556==: ==Bairam Khan==, for Akbar, defeats ==Hemu==.",
  "Haldighati, ==18 June 1576==: ==Man Singh==, for Akbar, against ==Maharana Pratap==.",
  "Samugarh, ==1658==: Aurangzeb defeats ==Dara Shikoh== in the war of succession.",
  "Karnal, ==1739==: ==Nadir Shah== defeats Muhammad Shah and carries off the Peacock Throne and the Koh-i-Noor.",
  "Third Panipat, ==14 January 1761==: ==Ahmad Shah Abdali== defeats the ==Marathas==. The Mughal emperor of the day (Shah Alam II) was not a party."
 ],
 blocks:[
  {h:"Babur's battles",
   rows:[
    ["First Battle of Panipat, 21 April 1526","Babur against ==Ibrahim Lodi==, the last Delhi Sultan. Babur's gunners Ustad Ali and Mustafa, carts lashed into a line (araba), and the tulughma flank attack. Ends the Delhi Sultanate"],
    ["Battle of Khanwa, 17 March 1527","Babur against ==Rana Sanga== of Mewar, near Fatehpur Sikri. Babur declared it a jihad, gave up wine and took the title Ghazi"],
    ["Battle of Chanderi, 1528","Babur against ==Medini Rai==, a Rajput ally of Rana Sanga"],
    ["Battle of Ghaghra, 1529","Babur against the Afghans of Bihar and Bengal under ==Mahmud Lodi== and Nusrat Shah. Fought on land and on the river"]
   ]},
  {h:"Humayun and Sher Shah",
   rows:[
    ["Battle of Chausa, 26 June 1539","==Sher Khan== defeats Humayun near Buxar, and crowns himself Sher Shah"],
    ["Battle of Kannauj (Bilgram), 17 May 1540","Sher Shah defeats Humayun again. Humayun flees, and spends fifteen years in exile: first in Sindh and Rajputana, then in Persia under Shah Tahmasp (1544-45), whose troops helped him retake Kandahar (1545). He took Kabul the same year and ruled from there until he returned to India in 1555"],
    ["Battle of Sirhind, 1555","Humayun defeats ==Sikandar Shah Suri== and recovers Delhi"]
   ]},
  {h:"Akbar to Aurangzeb",
   rows:[
    ["Second Battle of Panipat, 5 November 1556","Akbar's army under the regent ==Bairam Khan== against ==Hemu== (Hem Chandra Vikramaditya), general of Adil Shah Suri, who had taken Delhi. Hemu was hit in the eye by an arrow, captured and killed"],
    ["Battle of Haldighati, 18 June 1576","Akbar's army under Raja ==Man Singh== of Amber against ==Maharana Pratap== of Mewar. Pratap escaped on his horse Chetak; Mewar was never fully subdued"],
    ["Battles of Dharmat and Samugarh, 1658","The war of succession among Shah Jahan's sons. At Samugarh, near Agra, Aurangzeb and Murad defeated ==Dara Shikoh=="],
    ["Battle of Saraighat, 1671","The ==Ahoms== under ==Lachit Borphukan== defeat Aurangzeb's army under Raja Ram Singh of Amber, on the Brahmaputra at Guwahati. Lachit Divas is marked on 24 November"]
   ]},
  {h:"After Aurangzeb",
   rows:[
    ["Battle of Karnal, 24 February 1739","==Nadir Shah== of Persia defeats Muhammad Shah 'Rangila'. Delhi is sacked; the Peacock Throne and the Koh-i-Noor go to Persia"],
    ["Battle of Plassey, 1757","Fought in the reign of Alamgir II, but between the East India Company and the Nawab of Bengal. See Modern History"],
    ["Third Battle of Panipat, 14 January 1761","==Ahmad Shah Abdali== (Durrani) against the ==Marathas== under Sadashivrao Bhau. The Peshwa, ==Balaji Baji Rao== (Nana Saheb), was not on the field; his son and heir Vishwasrao was killed with Bhau. The Maratha defeat left the field open for the Company"],
    ["Battle of Buxar, 22 October 1764","The Company defeats ==Shah Alam II==, Shuja-ud-Daula of Awadh and Mir Qasim together. Followed by the grant of the Diwani in 1765"]
   ]},
  {h:"Not Mughal, but asked alongside",
   rows:[
    ["Battle of Talikota, 23 January 1565","The Deccan Sultanates destroy ==Vijayanagara==. Akbar was emperor, but the Mughals were not involved"],
    ["Battle of Tarain, 1191 and 1192","Prithviraj Chauhan against Muhammad Ghori: the beginning of Turkish rule, three centuries before Panipat"]
   ]}
 ]},

/* =================================================================== */
{id:"mughal-admin", era:"medieval", n:"Mughal administration and revenue", hy:1,
 w:"The mansabdari system, zat and sawar, the jagirs, Todar Mal's revenue settlement, the officers at the centre and in the provinces, and Sher Shah's reforms that Akbar built on.",
 intro:"The Mughal state was a military hierarchy that paid itself out of land revenue. Every officer held a rank (mansab) that fixed both his pay and the troops he had to keep, and was usually paid by being assigned the revenue of a piece of land (a jagir) rather than in cash. Learn the two numbers in a mansab and the three steps of the revenue system, and most questions answer themselves.",
 notes:[
  "==Mansabdari== was introduced by ==Akbar== in the 1570s; from about ==1595== every rank had two numbers, ==zat== (personal rank and pay) and ==sawar== (cavalry to be maintained).",
  "Jahangir added the ==du-aspa sih-aspa== rank: troopers with two or three horses each.",
  "A ==jagir== was the right to collect revenue from an area, given in place of salary, and it was transferable. Land kept for the emperor's own treasury was ==khalisa==.",
  "Land revenue: ==Raja Todar Mal=='s ==zabti== system and the ==Ain-i-Dahsala== of ==1580==, an average of ten years' produce and prices.",
  "The state's share was ==one-third== of the produce.",
  "Land by how often it was farmed: ==polaj== (every year), ==parauti== (rested a year or two), ==chachar== (three or four years), ==banjar== (five years or more).",
  "At the centre: ==Mir Bakshi== ran the military and the mansabdars; the ==Diwan== ran revenue; the ==Mir Saman== the household; the ==Sadr-us-Sudur== religious grants.",
  "Province ==suba== (Subedar), district ==sarkar== (Faujdar), sub-district ==pargana== (Shiqdar, Amil), town ==Kotwal==.",
  "==Sher Shah== came first: the silver ==rupiya==, the copper ==dam==, the ==Grand Trunk Road== (Sadak-e-Azam), sarais and the dak horse-post."
 ],
 blocks:[
  {h:"The mansabdari system",
   rows:[
    ["Introduced","By Akbar, in the 1570s (usually dated 1573-75). The decimal ranks came from Central Asian practice"],
    ["Zat","The personal rank. It fixed the holder's salary and his place in the hierarchy"],
    ["Sawar","The number of cavalrymen, with horses, the holder had to maintain"],
    ["The range","From 10 to 5,000 for nobles under Akbar; 7,000 for a few, such as Raja Man Singh and Mirza Aziz Koka, and higher for princes"],
    ["Du-aspa sih-aspa","Jahangir's addition: a part of the sawar rank counted at two or three horses per trooper"],
    ["How a mansabdar was paid","In cash (naqdi), or more often by a jagir, the revenue of a territory"],
    ["Not hereditary","A mansab was not inherited, and a jagir was moved every few years so that no noble could put down roots"],
    ["Two numbers","At first a mansab was a single number. Zat and sawar were stated separately from about 1595-96, Akbar's fortieth regnal year"],
    ["Dagh and chehra","Akbar's checks on the cavalry a mansabdar kept, from 1573-74: ==dagh==, the branding of horses, and ==chehra==, the descriptive roll of each trooper. Alauddin Khalji had used both before him"]
   ]},
  {h:"Land revenue",
   rows:[
    ["Zabti (bandobast)","Raja ==Todar Mal=='s system: land measured, crops assessed in cash by rates fixed for each crop. Todar Mal had served Sher Shah first"],
    ["Ain-i-Dahsala, 1580","The rates fixed on the average produce and average prices of the previous ten years"],
    ["The state's share","One-third of the average produce"],
    ["Ghallabakshi (batai)","Crop-sharing: the harvest itself divided between state and cultivator"],
    ["Nasaq and kankut","Assessment by estimate, from past records or from the standing crop"],
    ["The land classes","Polaj, parauti, chachar, banjar, by how often the field was cultivated"],
    ["Who collected","The amalguzar in the sarkar; the qanungo kept records, the patwari kept the village accounts, the muqaddam was the village headman"],
    ["Jagir and khalisa","Revenue assigned to a mansabdar was jagir; revenue kept for the emperor was khalisa"],
    ["Ilahi gaz","Akbar's standard measure for land, about 41 digits (roughly 33 inches), in place of the Sikandari gaz used under Sher Shah. The rope (tanab) was replaced by bamboo lengths joined with iron rings"]
   ]},
  {h:"The officers",
   rows:[
    ["Vakil","The chief minister. Bairam Khan held it as Vakil-us-Sultanat; Akbar reduced the office after him"],
    ["Wazir or Diwan (Diwan-i-Kul)","Revenue and finance"],
    ["Mir Bakshi","The military department: appointments, pay and inspection of the mansabdars, and intelligence"],
    ["Mir Saman (Khan-i-Saman)","The royal household and the imperial workshops (karkhanas)"],
    ["Sadr-us-Sudur","Religious endowments and charity"],
    ["Qazi-ul-Quzat","The chief judge"],
    ["Muhtasib","The censor of public morals; Aurangzeb gave the office weight"],
    ["Subedar (Sipahsalar)","Governor of a suba. Akbar had 12 subas, later 15"],
    ["Faujdar","Military officer and keeper of order in a sarkar"],
    ["Shiqdar and Amil","Order and revenue in a pargana"],
    ["Kotwal","Police chief of a town"]
   ]},
  {h:"Sher Shah's reforms, 1540-45",
   note:"Asked as Sher Shah's own, and as the base that Akbar's system was built on.",
   rows:[
    ["Coinage","The silver ==rupiya== of 178 grains and the copper ==dam==. The rupee is named from it"],
    ["Roads","The ==Grand Trunk Road== (Sadak-e-Azam) restored and extended from Sonargaon in Bengal to the north-west frontier"],
    ["Sarais","About 1,700 rest houses on the roads, which doubled as stages for the dak (horse post)"],
    ["Land","Land measured; the patta (title deed) and qabuliyat (deed of agreement) between state and cultivator"],
    ["Buildings","Purana Qila in Delhi completed on the site of Humayun's Din-panah; the Qila-i-Kuhna mosque; Rohtas Fort in Pakistan; his own tomb at ==Sasaram==, Bihar, in an artificial lake"],
    ["Death","22 May 1545, in a gunpowder explosion while besieging Kalinjar fort"]
   ]},
  {h:"Coins",
   rows:[
    ["Rupiya and dam","Sher Shah"],
    ["Mohur","The gold coin"],
    ["Ilahi","Akbar's gold coin, from his Ilahi era of 1584"],
    ["Zodiac coins","Jahangir, who also struck coins in Nur Jahan's name"]
   ]}
 ]},

/* =================================================================== */
{id:"mughal-religion", era:"medieval", n:"Akbar's religious policy", hy:1,
 w:"Sulh-i-kul, the Ibadat Khana, the Mahzar and the Din-i-Ilahi, in the order they came, and the taxes he abolished.",
 intro:"Four names and four dates, and they are asked in sequence. Akbar first removed the taxes that fell on Hindus (1563, 1564), then opened a hall for religious debate (1575), then claimed the right to decide disputes in religious law (1579), and finally gathered a small circle of disciples around a set of his own ideas (1582). Aurangzeb reversed the taxes a century later.",
 notes:[
  "Pilgrimage tax abolished ==1563==; ==jizya== abolished ==1564==.",
  "==Ibadat Khana== (house of worship) at ==Fatehpur Sikri==, ==1575==: first for Muslim scholars, from 1578 open to all faiths.",
  "==Mahzar==, ==1579==: the 'infallibility decree', drafted by ==Shaikh Mubarak==, letting Akbar decide between scholars of Islamic law.",
  "==Din-i-Ilahi== (Tauhid-i-Ilahi), ==1582==: a circle of disciples, not a religion; ==Birbal== was the only prominent Hindu to join.",
  "==Sulh-i-kul==: 'peace with all', the principle behind the whole policy, set out by ==Abul Fazl==.",
  "==Aurangzeb== reimposed jizya in ==1679==."
 ],
 blocks:[
  {h:"In order",
   rows:[
    ["1562","Marriage to the daughter of Raja Bharmal of Amber, the first of the Rajput alliances"],
    ["1563","The pilgrimage tax abolished"],
    ["1564","The jizya, the tax on non-Muslims, abolished"],
    ["1575","The Ibadat Khana built at Fatehpur Sikri"],
    ["1578","The Ibadat Khana opened to Hindus, Jains, Zoroastrians and Christians (Jesuits from Goa came in 1580)"],
    ["1579","The Mahzar, drafted by Shaikh Mubarak, father of Abul Fazl and Faizi"],
    ["1582","The Din-i-Ilahi"],
    ["1584","The Ilahi era, a new solar calendar"]
   ]},
  {h:"Who came to the Ibadat Khana",
   rows:[
    ["Jain","Hiravijaya Suri, who was given the title Jagatguru"],
    ["Zoroastrian","Dastur Meherji Rana"],
    ["Christian","The first Jesuit mission from Goa, 1580, with Father Antonio Monserrate and Rudolf Acquaviva"],
    ["Hindu","Purushottam and Devi"]
   ]},
  {h:"Akbar's nine jewels (Navaratna)",
   note:"A later tradition rather than a court institution, and the list varies by book. These are the nine most lists agree on.",
   rows:[
    ["Abul Fazl","Historian: Akbarnama and Ain-i-Akbari. Killed in 1602 by Bir Singh Deo Bundela, at the instigation of Prince Salim (Jahangir)"],
    ["Faizi","Poet laureate, Abul Fazl's brother; translated the Lilavati"],
    ["Birbal","Wit and courtier, born Mahesh Das, a Brahmin; given the title Raja Birbal by Akbar. Killed fighting the Yusufzais in 1586"],
    ["Tansen","Musician from Gwalior, a disciple of Swami Haridas"],
    ["Raja Todar Mal","Finance and land revenue"],
    ["Raja Man Singh","General, of Amber; commanded at Haldighati"],
    ["Abdul Rahim Khan-i-Khanan","Bairam Khan's son; poet; translated the Baburnama into Persian"],
    ["Faqir Aziao-Din","Adviser"],
    ["Mulla Do-Piyaza","Adviser; very probably legendary"]
   ]}
 ]},

/* =================================================================== */
{id:"mughal-architecture", era:"medieval", n:"Mughal architecture and painting", hy:1,
 w:"Who built what: from Babur's garden at Agra to the Taj and the Red Fort, Bibi ka Maqbara and Safdarjung's tomb, plus the painters and the music.",
 intro:"The question is nearly always 'who built it'. The trap is that several famous buildings were built by someone other than the emperor whose name is attached: Humayun's Tomb by his widow, Itimad-ud-Daulah's tomb by his daughter Nur Jahan, Akbar's tomb finished by his son, and Bibi ka Maqbara by Aurangzeb's son.",
 notes:[
  "==Humayun's Tomb==, Delhi (1565-72): built by his widow ==Bega Begum==, designed by ==Mirak Mirza Ghiyas==; the ==first garden tomb== in India and the model for the Taj.",
  "==Fatehpur Sikri== (from 1571), Akbar's capital till 1585, built in honour of ==Shaikh Salim Chishti==; ==Buland Darwaza== marks the conquest of ==Gujarat== (1573).",
  "==Itimad-ud-Daulah==, Agra: built by ==Nur Jahan== for her father; the first Mughal tomb in white marble with ==pietra dura==, the 'Baby Taj'.",
  "==Taj Mahal== (1632-53): ==Shah Jahan== for ==Mumtaz Mahal==; chief architect ==Ustad Ahmad Lahauri==; Makrana marble.",
  "==Red Fort== (1638-48) and ==Jama Masjid==, Delhi: Shah Jahan, for his new city ==Shahjahanabad==.",
  "==Bibi ka Maqbara==, Aurangabad: built by Aurangzeb's son ==Azam Shah== for his mother; the 'Taj of the Deccan'.",
  "==Moti Masjid== in the Red Fort, Delhi, is Aurangzeb's; the Moti Masjid in ==Agra Fort== is Shah Jahan's.",
  "Painting: ==Mir Sayyid Ali== and ==Abdus Samad==, brought from Persia by Humayun; the ==Hamzanama== under Akbar; ==Ustad Mansur== (birds and animals) under Jahangir."
 ],
 blocks:[
  {h:"Who built what",
   rows:[
    ["Aram Bagh, Agra","Babur. The earliest Mughal garden, laid out as a charbagh (four-part garden). Babur was first buried here"],
    ["Din-panah, Delhi (1533)","Humayun. Sher Shah completed it as the Purana Qila"],
    ["Humayun's Tomb, Delhi (1565-72)","Built by his widow ==Bega Begum== (Haji Begum); architect Mirak Mirza Ghiyas. Red sandstone and white marble, double dome, charbagh. UNESCO World Heritage Site, 1993"],
    ["Agra Fort (from 1565)","Akbar, in red sandstone. UNESCO, 1983"],
    ["Fatehpur Sikri (from 1571)","Akbar. Buland Darwaza, Panch Mahal, Diwan-i-Khas, Jodha Bai's palace, the tomb of Shaikh Salim Chishti. Abandoned as capital in 1585. UNESCO, 1986"],
    ["Buland Darwaza","Akbar, to mark the conquest of Gujarat in 1573; built about 1575, though its inscription is dated 1601. Often called the highest gateway in the world"],
    ["Akbar's tomb, Sikandra","Begun by Akbar, completed by ==Jahangir== in 1613"],
    ["Itimad-ud-Daulah's tomb, Agra (1622-28)","Built by ==Nur Jahan== for her father. First Mughal building faced in white marble with pietra dura inlay"],
    ["Shalimar Bagh, Srinagar (1619)","Jahangir, for Nur Jahan. Nishat Bagh nearby is by her brother Asaf Khan"],
    ["Jahangir's tomb, Shahdara, Lahore","Built after his death in 1627, under Nur Jahan and Shah Jahan"],
    ["Taj Mahal, Agra (1632-53)","Shah Jahan, for Mumtaz Mahal. Chief architect ==Ustad Ahmad Lahauri==; white Makrana marble; pietra dura. UNESCO, 1983"],
    ["Red Fort, Delhi (1638-48)","Shah Jahan; architect ==Ustad Ahmad Lahauri==, also the chief architect of the Taj. Diwan-i-Aam, Diwan-i-Khas, Rang Mahal. UNESCO, 2007"],
    ["Jama Masjid, Delhi (1650-56)","Shah Jahan. Often called the largest mosque in India, though the Taj-ul-Masajid at Bhopal is bigger"],
    ["Moti Masjid, Agra Fort","Shah Jahan"],
    ["Shalimar Gardens, Lahore (1641)","Shah Jahan"],
    ["Moti Masjid, Red Fort, Delhi","Aurangzeb, for his own use"],
    ["Badshahi Mosque, Lahore (1673)","Aurangzeb"],
    ["Bibi ka Maqbara, Aurangabad","Built by Aurangzeb's son ==Azam Shah== for his mother Dilras Banu Begum. Architect Ata-ullah, son of Ustad Ahmad Lahauri, with the engineer Hanspat Rai, both named on the main gate. The 'Taj of the Deccan'"],
    ["Safdarjung's Tomb, Delhi (1754)","For Safdarjung, Nawab of Awadh and Mughal wazir. The last great Mughal garden tomb"]
   ]},
  {h:"The vocabulary",
   rows:[
    ["Charbagh","A garden in four parts, divided by water channels"],
    ["Pietra dura (parchin kari)","Inlay of coloured stones in marble"],
    ["Double dome","An inner dome for the ceiling and a taller outer one for the skyline. Seen in its mature Persian form first at Humayun's Tomb; an earlier double dome is at Sikandar Lodi's tomb (1517-18)"],
    ["Jharokha","A projecting balcony; Akbar's jharokha darshan, showing himself to the public each morning, was ended by Aurangzeb"]
   ]},
  {h:"Painting and music",
   rows:[
    ["Mir Sayyid Ali and Abdus Samad","Persian masters Humayun brought back from exile. The beginning of Mughal painting"],
    ["Hamzanama","The great illustrated manuscript of Akbar's workshop, about 1,400 large paintings"],
    ["Daswanth and Basawan","Akbar's painters"],
    ["Ustad Mansur","Jahangir's painter of birds and animals; title Nadir-ul-Asr"],
    ["Abul Hasan","Jahangir's portraitist; title Nadir-uz-Zaman"],
    ["Bishandas","Portraits, sent with Jahangir's embassy to Persia"],
    ["Tansen","Akbar's court musician"],
    ["Aurangzeb and music","He ended music at court, yet more books on classical music were written in Persian in his reign than before"]
   ]}
 ]},

/* =================================================================== */
{id:"mughal-books", era:"medieval", n:"Mughal books, writers and travellers", hy:1,
 w:"Who wrote which chronicle and in which language, Dara Shikoh's translations, and the Europeans who came to court, matched to the emperor they met.",
 intro:"Two matching lists: book to author, and traveller to emperor. The autobiographies are the easiest marks, because two emperors wrote their own: Babur in Turkish and Jahangir in Persian.",
 notes:[
  "==Baburnama== (Tuzuk-i-Baburi): Babur's own memoir, in ==Chagatai Turkish==; translated into Persian by ==Abdur Rahim Khan-i-Khanan==.",
  "==Humayun-nama==: ==Gulbadan Begum==, Babur's daughter, Humayun's half-sister.",
  "==Akbarnama== and ==Ain-i-Akbari== (its third volume): ==Abul Fazl==.",
  "==Muntakhab-ut-Tawarikh==: ==Badauni==, the critic of Akbar's religious policy.",
  "==Tuzuk-i-Jahangiri==: Jahangir's own memoir, in Persian.",
  "==Padshahnama==: ==Abdul Hamid Lahori==, on Shah Jahan.",
  "==Sirr-i-Akbar==: ==Dara Shikoh=='s Persian translation of ==fifty Upanishads==; his ==Majma-ul-Bahrain== compares Sufism and Vedanta.",
  "==William Hawkins== (1608) and ==Sir Thomas Roe== (1615-19) came to ==Jahangir==; Roe won wider rights to trade and set up factories in the empire (the Surat factory dated from 1613).",
  "==Bernier== (physician) and ==Tavernier== (jeweller), both French, saw Shah Jahan's and Aurangzeb's courts."
 ],
 blocks:[
  {h:"The chronicles",
   rows:[
    ["Tuzuk-i-Baburi (Baburnama)","Babur, in Chagatai Turkish. Persian translation by Abdur Rahim Khan-i-Khanan in Akbar's reign"],
    ["Humayun-nama","Gulbadan Begum, in Persian"],
    ["Qanun-i-Humayuni","Khwandamir, on Humayun's institutions"],
    ["Tarikh-i-Sher Shahi","Abbas Khan Sarwani, on Sher Shah"],
    ["Akbarnama","Abul Fazl, in three volumes; the third is the Ain-i-Akbari, an account of the empire's administration"],
    ["Muntakhab-ut-Tawarikh","Abdul Qadir Badauni, critical of Akbar"],
    ["Tabaqat-i-Akbari","Nizamuddin Ahmad"],
    ["Tuzuk-i-Jahangiri","Jahangir, in Persian"],
    ["Padshahnama","Abdul Hamid Lahori, the official history of Shah Jahan's reign"],
    ["Shahjahannama","Inayat Khan"],
    ["Alamgirnama","Mirza Muhammad Kazim, on the first ten years of Aurangzeb"],
    ["Muntakhab-ul-Lubab","Khafi Khan, written secretly because Aurangzeb had banned histories of his reign"],
    ["Fatawa-i-Alamgiri","A digest of Islamic law compiled under Aurangzeb"]
   ]},
  {h:"Translation and the meeting of ideas",
   rows:[
    ["Razmnama","The Mahabharata in Persian, from Akbar's translation bureau (Maktab Khana) at Fatehpur Sikri"],
    ["The Persian Ramayana","Translated for Akbar by Badauni; the Atharvaveda by Haji Ibrahim Sirhindi"],
    ["Sirr-i-Akbar (The Great Secret)","Dara Shikoh's Persian translation of fifty Upanishads, 1657"],
    ["Majma-ul-Bahrain (The Mingling of Two Oceans)","Dara Shikoh: Sufism and Vedanta compared"],
    ["Ramcharitmanas","Tulsidas, written in Akbar's reign, though not at his court"]
   ]},
  {h:"Europeans at the court",
   rows:[
    ["Ralph Fitch","English merchant; reached Akbar's Fatehpur Sikri in 1585"],
    ["Antonio Monserrate","Jesuit, on the first mission to Akbar, 1580"],
    ["William Hawkins","Captain of the Hector; reached Surat in 1608 and Jahangir's court at Agra in 1609, with a letter from James I. Given a mansab, but no trading rights"],
    ["Sir Thomas Roe","Ambassador of James I to Jahangir, 1615-19. Secured wider rights to trade and set up factories in the Mughal empire; the Surat factory itself dated from 1613"],
    ["Peter Mundy","English traveller under Shah Jahan"],
    ["Jean-Baptiste Tavernier","French jeweller; six voyages between 1630 and 1668; described the Peacock Throne"],
    ["Francois Bernier","French physician to Dara Shikoh; Travels in the Mogul Empire"],
    ["Niccolao Manucci","Venetian; served Dara Shikoh; Storia do Mogor"]
   ]}
 ]}

],

/* --------------------------------------------------------------- emperors

   The Mughal emperors in order, with the Sur interlude where it falls.
   `kind` is 'great' for the six whose reigns are asked in detail, 'sur'
   for the Sur dynasty, 'later' for the emperors after 1707.               */

mughalNotes: [
 "==Babur== founded the empire at ==First Panipat, 1526==; ==Bahadur Shah Zafar==, the last emperor, was exiled to ==Rangoon== after 1857.",
 "The six great Mughals, ==1526-1707==: ==Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb==, with the ==Sur== interlude of 1540-55 in the middle.",
 "Capitals: ==Agra==, then ==Fatehpur Sikri== (1571-85), Lahore, Agra again, and ==Shahjahanabad==, Delhi, from ==1648==.",
 "==Akbar== built the system: mansabdari, Todar Mal's revenue settlement, the Rajput alliances and sulh-i-kul.",
 "==Shah Jahan== built the monuments; ==Aurangzeb== took the empire to its ==largest extent== and to its breaking point.",
 "Two emperors wrote their own memoirs: ==Babur== (in Turkish) and ==Jahangir== (in Persian).",
 "After 1707 the provinces broke away: ==Hyderabad== (1724), ==Awadh== and ==Bengal==."
],

emperors: [

{id:"babur", kind:"great", n:"Babur", full:"Zahir-ud-din Muhammad Babur", from:1526, to:1530,
 born:"14 February 1483, Andijan, Fergana valley (now Uzbekistan)",
 died:"26 December 1530, Agra", tomb:"Bagh-e-Babur, Kabul (first buried at Aram Bagh, Agra)",
 w:"A Timurid prince who won and lost Samarkand more than once, took Kabul in 1504 and came into India as a raider before staying as a king. Descended from Timur on his father's side and from Genghis Khan on his mother's.",
 key:["Invited, by his own account, by Daulat Khan Lodi, governor of Punjab, and by Rana Sanga",
      "First Battle of Panipat, 21 April 1526: defeated Ibrahim Lodi and ended the Delhi Sultanate",
      "Khanwa 1527 against Rana Sanga; took the title Ghazi",
      "Chanderi 1528 against Medini Rai; Ghaghra 1529 against the Afghans",
      "Wrote his memoir, the Tuzuk-i-Baburi, in Chagatai Turkish",
      "Laid out the Aram Bagh at Agra, the first Mughal garden",
      "Became ruler of Fergana in June 1494 on his father Umar Shaikh Mirza's death, aged 11 (NCERT and most guidebooks say 12)"],
 notes:["Founder of the Mughal empire after ==First Panipat, 1526==.",
        "Used ==field artillery== and the ==tulughma== tactic.",
        "Memoir: ==Baburnama==, in ==Turkish==."]},

{id:"humayun", kind:"great", n:"Humayun", full:"Nasir-ud-din Muhammad Humayun", from:1530, to:1556,
 born:"6 March 1508, Kabul", died:"January 1556, Delhi, after falling down the stairs of his library",
 tomb:"Humayun's Tomb, Delhi",
 w:"Reigned twice, 1530-40 and 1555-56, with fifteen years of exile between. He divided the empire with his brothers, lost it to Sher Shah, and won it back a year before his death.",
 key:["Built Din-panah in Delhi, 1533",
      "Defeated by Sher Shah at Chausa (1539) and Kannauj (1540)",
      "Exile: wandered in Sindh and Rajputana (Akbar born on the way, at Amarkot, 1542), then at the Safavid court of Shah Tahmasp of Persia (1544); with Persian help took Kandahar and Kabul (1545) and held Kabul until he marched back into India, 1554-55",
      "Recovered Delhi in 1555 after defeating Sikandar Shah Suri at Sirhind",
      "Died after a fall from the stairs of the Sher Mandal, his library in the Purana Qila",
      "Brought the painters Mir Sayyid Ali and Abdus Samad from Persia"],
 notes:["Lost to ==Sher Shah== at ==Chausa 1539== and ==Kannauj 1540==.",
        "Biography: ==Humayun-nama== by his half-sister ==Gulbadan Begum==.",
        "His tomb was built by his widow ==Bega Begum==."]},

{id:"sher-shah", kind:"sur", n:"Sher Shah Suri", full:"Farid Khan, Sher Shah Suri", from:1540, to:1545,
 born:"1472 or 1486 (sources differ), Sasaram, Bihar", died:"22 May 1545, at the siege of Kalinjar",
 tomb:"Sasaram, Bihar",
 w:"An Afghan of the Sur clan who rose from managing his father's jagir to defeating Humayun twice. Ruled five years, and in that time set up the revenue, currency and road system the Mughals inherited.",
 key:["Took the name Sher Khan after killing a tiger; Sher Shah after Chausa, 1539",
      "Introduced the silver rupiya and the copper dam",
      "Restored and extended the Grand Trunk Road (Sadak-e-Azam); built sarais and the dak horse-post",
      "Land measured; patta and qabuliyat between state and cultivator",
      "Completed the Purana Qila; built Rohtas Fort",
      "Killed by an explosion of gunpowder at Kalinjar"],
 notes:["Introduced the ==rupiya== (silver) and the ==dam== (copper).",
        "==Grand Trunk Road==, sarais and the ==dak== post.",
        "Tomb at ==Sasaram==, Bihar."]},

{id:"akbar", kind:"great", n:"Akbar", full:"Jalal-ud-din Muhammad Akbar", from:1556, to:1605,
 born:"15 October 1542, Amarkot (Umerkot), Sindh", died:"27 October 1605, Agra",
 tomb:"Sikandra, near Agra (completed by Jahangir, 1613)",
 w:"Crowned at thirteen, and in fifty years turned a contested foothold into an empire from Kabul to the Deccan, held together by Rajput alliances, a single rank system for every officer, a measured revenue, and a policy of 'peace with all'.",
 key:["Crowned at Kalanaur, Punjab, 14 February 1556; Bairam Khan regent until 1560",
      "Second Battle of Panipat, 5 November 1556, against Hemu",
      "Abolished the pilgrimage tax (1563) and the jizya (1564)",
      "Conquests: Chittor 1568, Ranthambore 1569, Gujarat 1573, Bengal 1576, Kashmir 1586, Sindh 1591, Kandahar 1595, Ahmednagar 1600, Asirgarh 1601",
      "Haldighati, 1576, against Maharana Pratap",
      "Fatehpur Sikri (from 1571); Ibadat Khana 1575; Mahzar 1579; Din-i-Ilahi 1582",
      "The mansabdari system; Todar Mal's Ain-i-Dahsala, 1580"],
 notes:["Crowned at ==Kalanaur==, 1556; regent ==Bairam Khan==.",
        "==Mansabdari== and the ==Ain-i-Dahsala== (Todar Mal, 1580).",
        "==Ibadat Khana 1575==, ==Mahzar 1579==, ==Din-i-Ilahi 1582==.",
        "Abolished ==jizya== in ==1564==."]},

{id:"jahangir", kind:"great", n:"Jahangir", full:"Nur-ud-din Muhammad Salim", from:1605, to:1627,
 born:"31 August 1569, Fatehpur Sikri", died:"28 October 1627, on the road from Kashmir",
 tomb:"Shahdara, Lahore",
 w:"Salim, named for the Sufi Shaikh Salim Chishti whose blessing Akbar had sought for a son. A connoisseur of painting and nature whose reign was steered in its second half by his wife Nur Jahan and her family.",
 key:["Executed Guru Arjan Dev, the fifth Sikh Guru, in 1606, for supporting his rebel son Khusrau",
      "The golden chain of justice (zanjir-i-adl) at Agra Fort",
      "Married Mehr-un-Nisa in 1611 and titled her Nur Mahal; she was Nur Jahan from 1616",
      "Received William Hawkins (1608) and Sir Thomas Roe (1615-19)",
      "Lost Kandahar to Persia, 1622",
      "Wrote the Tuzuk-i-Jahangiri; Mughal painting at its height (Ustad Mansur, Abul Hasan)"],
 notes:["The ==chain of justice== (zanjir-i-adl).",
        "Executed ==Guru Arjan Dev== in ==1606==.",
        "==Sir Thomas Roe== at his court, 1615-19.",
        "Memoir: ==Tuzuk-i-Jahangiri==."]},

{id:"shah-jahan", kind:"great", n:"Shah Jahan", full:"Shihab-ud-din Muhammad Khurram", from:1628, to:1658,
 born:"5 January 1592, Lahore", died:"22 January 1666, Agra Fort, a prisoner",
 tomb:"The Taj Mahal, beside Mumtaz Mahal",
 w:"The builder. His reign is the high point of Mughal architecture and of the court's splendour, and ended with his sons fighting for the throne while he was still alive.",
 key:["Taj Mahal (1632-53) for Mumtaz Mahal, who died in 1631 at Burhanpur",
      "Moved the capital from Agra to Shahjahanabad, Delhi, 1648; the Red Fort and the Jama Masjid",
      "The Peacock Throne (Takht-i-Taus)",
      "Annexed Ahmednagar, 1633; drove the Portuguese from Hooghly, 1632",
      "Lost Kandahar for good, 1649",
      "War of succession, 1657-58; imprisoned by Aurangzeb in Agra Fort until his death"],
 notes:["The ==golden age of Mughal architecture==: ==Taj Mahal==, ==Red Fort==, ==Jama Masjid==.",
        "Made the ==Peacock Throne==, later taken by Nadir Shah (1739).",
        "Imprisoned in ==Agra Fort== by ==Aurangzeb==, 1658."]},

{id:"aurangzeb", kind:"great", n:"Aurangzeb", full:"Muhi-ud-din Muhammad Aurangzeb, Alamgir", from:1658, to:1707,
 born:"3 November 1618, Dahod, Gujarat", died:"3 March 1707, Ahmednagar",
 tomb:"An open grave at Khuldabad, near Aurangabad",
 w:"Took the throne by force, reigned forty-nine years and spent the last twenty-five of them fighting in the Deccan. The empire reached its largest extent under him and began to come apart before he died.",
 key:["Executed Dara Shikoh, 1659",
      "Reimposed the jizya, 1679; ended jharokha darshan and court music",
      "Executed Guru Tegh Bahadur, the ninth Sikh Guru, in 1675",
      "Revolts of the Jats, Satnamis, Bundelas, Sikhs and Rajputs (Durgadas Rathore in Marwar)",
      "Shivaji at the Agra court and his escape, 1666; Sambhaji executed, 1689",
      "Annexed Bijapur (1686) and Golconda (1687)"],
 notes:["Title ==Alamgir==; called ==Zinda Pir==.",
        "Reimposed ==jizya== in ==1679==.",
        "Annexed ==Bijapur 1686== and ==Golconda 1687==: the empire's ==largest extent==.",
        "Executed ==Guru Tegh Bahadur==, ==1675=="]},

{id:"bahadur-shah-1", kind:"later", n:"Bahadur Shah I", from:1707, to:1712,
 w:"Muazzam, also called Shah Alam I. Won the succession war after Aurangzeb, defeating Azam Shah at Jajau (1707). Shahu, the Maratha heir, had been released by Azam in May 1707 (some guidebooks credit Bahadur Shah I), which split the Marathas."},
{id:"jahandar-shah", kind:"later", n:"Jahandar Shah", from:1712, to:1713,
 w:"The first emperor raised by a noble, Zulfiqar Khan. Abolished the jizya."},
{id:"farrukhsiyar", kind:"later", n:"Farrukhsiyar", from:1713, to:1719,
 w:"Put on the throne by the Sayyid brothers, the 'king makers' (Abdullah Khan, wazir, and Husain Ali Khan, mir bakhshi), who deposed, blinded and killed him in 1719 and then raised Rafi-ud-Darajat, Rafi-ud-Daulah and Muhammad Shah. His farman of 1717 gave the East India Company duty-free trade in Bengal for 3,000 rupees a year, the 'Magna Carta of the Company'."},
{id:"muhammad-shah", kind:"later", n:"Muhammad Shah 'Rangila'", from:1719, to:1748,
 w:"The provinces broke away in his reign: Hyderabad under Nizam-ul-Mulk (1724), Awadh under Saadat Khan, Bengal under Murshid Quli Khan. Nadir Shah defeated him at Karnal in 1739 and sacked Delhi."},
{id:"ahmad-shah", kind:"later", n:"Ahmad Shah Bahadur", from:1748, to:1754,
 w:"Ahmad Shah Abdali's first invasion (1748) was beaten back at Manupur just before his accession; Abdali invaded again during his reign."},
{id:"alamgir-2", kind:"later", n:"Alamgir II", from:1754, to:1759,
 w:"The Battle of Plassey, 1757, was fought in his reign."},
{id:"shah-alam-2", kind:"later", n:"Shah Alam II", from:1759, to:1806,
 w:"Lost at Buxar (1764) and granted the Company the Diwani of Bengal, Bihar and Orissa by the Treaty of Allahabad (1765). The Third Battle of Panipat (1761) was fought in his reign. A British pensioner after 1803: 'the empire of Shah Alam runs from Delhi to Palam'."},
{id:"akbar-2", kind:"later", n:"Akbar II", from:1806, to:1837,
 w:"Gave Ram Mohan Roy the title 'Raja' and sent him to England, 1830."},
{id:"bahadur-shah-2", kind:"later", n:"Bahadur Shah II 'Zafar'", from:1837, to:1857,
 w:"The last Mughal emperor, and an Urdu poet. Proclaimed leader by the rebels of 1857; tried and exiled to Rangoon, where he died on 7 November 1862."}

],

/* ---------------------------------------------------------- confused pairs */

confusions: [
 {k:"The two councils at Pataliputra",
  rows:[
   ["1st Jain council","c. 300 BCE, under ==Chandragupta Maurya==, presided by ==Sthulabhadra=="],
   ["3rd Buddhist council","c. 250 BCE, under ==Ashoka==, presided by ==Moggaliputta Tissa=="]],
  note:"Same city, fifty years apart, two religions. If the question names Ashoka, it is Buddhist."},
 {k:"Digambara or Shvetambara",
  rows:[
   ["Digambara","Sky-clad. Followers of ==Bhadrabahu==, who went south. Women cannot reach moksha directly; Mahavira never married"],
   ["Shvetambara","White-clad. Followers of ==Sthulabhadra==, who stayed. Women can reach moksha; accept the Vallabhi canon"]]},
 {k:"Mahavira or the Buddha",
  rows:[
   ["Mahavira","Born ==Kundagrama==; Kaivalya at ==Jrimbhikagrama== on the Rijupalika; died at ==Pavapuri=="],
   ["The Buddha","Born ==Lumbini==; enlightenment at ==Bodh Gaya== on the Niranjana; first sermon at ==Sarnath==; died at ==Kushinagar=="]]},
 {k:"The three battles of Panipat",
  rows:[
   ["First, 1526","==Babur== defeats ==Ibrahim Lodi=="],
   ["Second, 1556","==Akbar== (Bairam Khan) defeats ==Hemu=="],
   ["Third, 1761","==Ahmad Shah Abdali== defeats the ==Marathas=="]],
  note:"The gaps are thirty years and then two centuries. Only the first two are Mughal victories; in the third the Mughal emperor was a bystander."},
 {k:"Babur's four battles",
  rows:[
   ["Panipat 1526","Ibrahim Lodi"],["Khanwa 1527","Rana Sanga"],
   ["Chanderi 1528","Medini Rai"],["Ghaghra 1529","The Afghans (Mahmud Lodi)"]],
  note:"One a year from 1526 to 1529, in the order P, K, C, G: Panipat, Khanwa, Chanderi, Ghaghra."},
 {k:"Ibadat Khana, Mahzar or Din-i-Ilahi",
  rows:[
   ["Ibadat Khana, 1575","A hall for religious debate at Fatehpur Sikri"],
   ["Mahzar, 1579","A decree letting Akbar decide disputes in Islamic law"],
   ["Din-i-Ilahi, 1582","A circle of disciples around Akbar's own ideas"]],
  note:"Hall, then decree, then circle: 75, 79, 82."},
 {k:"Four tombs, four builders",
  rows:[
   ["Humayun's Tomb","His widow, ==Bega Begum=="],
   ["Itimad-ud-Daulah","His daughter, ==Nur Jahan=="],
   ["Taj Mahal","Her husband, ==Shah Jahan=="],
   ["Bibi ka Maqbara","Her son, ==Azam Shah=="]],
  note:"Not one of the four was built by the person buried in it."},
 {k:"Akbarnama, Ain-i-Akbari or Muntakhab-ut-Tawarikh",
  rows:[
   ["Akbarnama","==Abul Fazl==: the official history"],
   ["Ain-i-Akbari","Also ==Abul Fazl==: the third volume of the Akbarnama, on administration"],
   ["Muntakhab-ut-Tawarikh","==Badauni==: the critical, unofficial history"]]},
 {k:"Zat or sawar",
  rows:[
   ["Zat","Personal rank: ==pay== and status"],
   ["Sawar","The ==cavalry== the holder had to keep"]]},
 {k:"Hawkins or Roe",
  rows:[
   ["William Hawkins, 1608","A sea captain; got a mansab, ==no trading rights=="],
   ["Sir Thomas Roe, 1615-19","An ambassador of James I; ==won wider trading rights== and factories beyond Surat (the Surat factory dated from 1613)"]],
  note:"Both came to Jahangir. The one who succeeded is Roe."},
 {k:"Haldighati or Talikota",
  rows:[
   ["Haldighati, 1576","==Mughal==: Man Singh for Akbar against Maharana Pratap"],
   ["Talikota, 1565","==Not Mughal==: the Deccan Sultanates destroy Vijayanagara"]]}
]

};
