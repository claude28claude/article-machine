/* The Article Machine — data-geography.js
   Geography, cut to what SSC asks and stopped there.

   WHY A SEPARATE SUBJECT WHEN STATIC GK ALREADY HAS RIVERS AND STATES. The
   Static GK packs are lists of facts to recognise: which dam is on which
   river, which state has which capital. Geography is the other thing — the
   arrangement that makes those facts hang together, and the one an exam
   tests by asking which range lies between two others, or which pass
   connects which two places. A list cannot answer that. So the rivers pack
   stays where it is as the revision version, and this is the full one.

   THE HIMALAYAS GET A TOPIC OF THEIR OWN AND MOST OF THE SPACE. That is a
   deliberate imbalance, not an accident of writing. Between the ranges, the
   four longitudinal divisions, the peaks, the passes, the glaciers and the
   rivers that rise there, the Himalayas carry more SSC geography questions
   than any other single topic in the subject, and the passes alone come up
   almost every sitting.

   HOW IT IS SOURCED. Standard school and competitive-exam geography —
   NCERT's physical geography of India as the spine, written out rather than
   copied. Three conventions:

   1. HEIGHTS AND LENGTHS VARY BETWEEN SOURCES, so a figure that moves is
      given the way the exam gives it and flagged where the disagreement is
      real. Everest is 8,848.86 m on the 2020 joint Nepal-China survey;
      older keys still carry 8,848 m.
   2. WHERE TWO THINGS ARE CONFUSED, BOTH ARE PRINTED TOGETHER. Highest peak
      IN India and highest peak entirely WITHIN India are two different
      mountains, and that one word is the whole question.
   3. DISPUTED GROUND IS NAMED AS SUCH rather than quietly assigned. K2
      stands in the part of the Kashmir region administered by Pakistan,
      and a question asking for India's highest peak expects K2 while a
      question asking which peak lies wholly inside Indian-administered
      territory does not.                                                  */

window.GEOGRAPHY = {

topics: [

/* ===================================================================
   1. THE HIMALAYAS
   =================================================================== */
{id:"himalayas", n:"The Himalayas", hy:1,
 w:"The three parallel ranges, the four divisions west to east, the peaks, the passes, the glaciers and the rivers that rise in them.",
 intro:"Four questions carry this topic. Which of the three parallel ranges is which, and what lies between them. Which of the four longitudinal divisions a place falls in, counted off by the rivers that separate them. Which pass connects which two places, which is the single most-repeated geography question in the paper. And the difference between the highest peak in India and the highest peak entirely within India, which are two different mountains.",
 figs:[
  {id:"him-section", cap:"The Himalayas in cross-section, south on the left. Four parallel belts: the Shiwaliks of loose sediment, the Lesser Himalaya carrying the hill stations, the Great Himalaya carrying every major peak, and the Trans-Himalayan ranges behind it.",
   svg:"<svg viewBox=\"0 0 340 200\" role=\"img\" aria-label=\"Cross-section through the Himalayan ranges from south to north\"><polygon class=\"sh\" points=\"278,168 318,62 340,168\"/><polyline class=\"dash\" points=\"278,168 318,62 340,168\"/><polygon class=\"sh\" points=\"168,168 236,26 302,168\"/><polyline class=\"hl\" points=\"168,168 236,26 302,168\"/><polygon class=\"sh\" points=\"80,168 134,92 190,168\"/><polyline class=\"ln\" points=\"80,168 134,92 190,168\"/><polygon class=\"sh\" points=\"16,168 52,128 92,168\"/><polyline class=\"ln\" points=\"16,168 52,128 92,168\"/><line class=\"ln\" x1=\"8\" y1=\"168\" x2=\"340\" y2=\"168\"/><text class=\"sm\" x=\"10\" y=\"186\">S</text><text class=\"sm\" x=\"330\" y=\"186\">N</text><text class=\"sm\" x=\"24\" y=\"122\">Shiwalik</text><text class=\"sm\" x=\"100\" y=\"86\">Lesser</text><text class=\"sm\" x=\"204\" y=\"20\">Great Himalaya</text><text class=\"sm\" x=\"286\" y=\"56\">Trans</text></svg>"},
  {id:"him-divisions", cap:"The four longitudinal divisions, counted off west to east by the river at each boundary. Nepal Himalaya is the longest of the four at about 800 km; the whole arc is about 2,400 km.",
   svg:"<svg viewBox=\"0 0 340 150\" role=\"img\" aria-label=\"The four longitudinal divisions of the Himalayas with the river at each boundary\"><rect class=\"fill\" x=\"20\" y=\"58\" width=\"70\" height=\"34\"/><rect class=\"fill2\" x=\"90\" y=\"58\" width=\"40\" height=\"34\"/><rect class=\"fill\" x=\"130\" y=\"58\" width=\"100\" height=\"34\"/><rect class=\"fill2\" x=\"230\" y=\"58\" width=\"90\" height=\"34\"/><rect class=\"sq\" x=\"20\" y=\"58\" width=\"300\" height=\"34\"/><line class=\"hl\" x1=\"20\" y1=\"58\" x2=\"20\" y2=\"44\"/><line class=\"hl\" x1=\"90\" y1=\"58\" x2=\"90\" y2=\"44\"/><line class=\"hl\" x1=\"130\" y1=\"58\" x2=\"130\" y2=\"44\"/><line class=\"hl\" x1=\"230\" y1=\"58\" x2=\"230\" y2=\"44\"/><line class=\"hl\" x1=\"320\" y1=\"58\" x2=\"320\" y2=\"44\"/><text class=\"sm\" x=\"8\" y=\"38\">Indus</text><text class=\"sm\" x=\"74\" y=\"38\">Satluj</text><text class=\"sm\" x=\"122\" y=\"38\">Kali</text><text class=\"sm\" x=\"216\" y=\"38\">Teesta</text><text class=\"sm\" x=\"286\" y=\"38\">Dihang</text><text class=\"sm\" x=\"26\" y=\"80\">Punjab</text><text class=\"sm\" x=\"92\" y=\"80\">Kumaon</text><text class=\"sm\" x=\"156\" y=\"80\">Nepal</text><text class=\"sm\" x=\"252\" y=\"80\">Assam</text><text class=\"sm\" x=\"34\" y=\"112\">560 km</text><text class=\"sm\" x=\"92\" y=\"112\">320 km</text><text class=\"sm\" x=\"156\" y=\"112\">800 km</text><text class=\"sm\" x=\"248\" y=\"112\">720 km</text></svg>"}
 ],
 blocks:[

  {h:"The three parallel ranges, south to north",
   note:"Learn them in order with their heights. A question that names a height band is asking which range, and a question that names a range is usually asking what lies on its southern or northern side.",
   rows:[
    ["Shiwalik (Outer Himalaya)","The southernmost and youngest belt, 900–1,100 m, 10–50 km wide. Built of unconsolidated river sediment washed down from the ranges behind, which is why it slips and erodes. Called Jammu Hills in the west and Dafla, Miri, Abor and Mishmi hills in the east."],
    ["The duns","The flat-floored longitudinal valleys between the Shiwaliks and the Lesser Himalaya. Dehra Dun is the largest; Kotli Dun, Patli Dun, Chaukhamba and Udhampur are the others asked."],
    ["Lesser or Middle Himalaya (Himachal)","3,700–4,500 m, about 50 km wide, highly compressed and folded. Carries almost every hill station, and the Pir Panjal is its longest range."],
    ["The ranges inside the Lesser Himalaya","Pir Panjal (longest), Dhauladhar, Nag Tibba, Mussoorie and the Mahabharat range in Nepal. The Kashmir valley lies between the Pir Panjal and the Great Himalaya."],
    ["Great Himalaya (Himadri)","The innermost, most continuous and highest range, averaging about 6,000 m with a granite core and perennial snow. Every peak above 8,000 m stands on it or just behind it."],
    ["Trans-Himalaya","The ranges north of the Great Himalaya, inside the Tibetan plateau's edge: Karakoram, Ladakh, Zaskar and Kailash. They are older than the Himalayas proper and lie in a rain shadow, which is why Ladakh is a cold desert."],
    ["Which range is the oldest and which the youngest","Trans-Himalayan ranges are the oldest; the Shiwaliks are the youngest. Height does not run with age — the Great Himalaya in the middle is the tallest."],
    ["What the whole system measures","About 2,400 km from the Indus gorge to the Dihang gorge, 400 km wide in Kashmir narrowing to about 150 km in Arunachal. Area roughly 5 lakh sq km."]
   ]},

  {h:"How the Himalayas were made, and the two bends",
   rows:[
    ["How they formed","Young fold mountains, raised by the collision of the northward-moving Indian plate with the Eurasian plate, which crumpled the sediments of the Tethys sea that lay between them. The folding is still going on and the range is still rising, by a few centimetres a year."],
    ["Why earthquakes","The same active collision. The Himalayan belt is one of India's two most seismically active zones, and Kashmir, Himachal, Uttarakhand, Sikkim and Arunachal fall in Zone IV or V."],
    ["Western syntaxial bend","The sharp hairpin the range makes near Nanga Parbat, where the Indus has cut its gorge. The whole system turns south at this point."],
    ["Eastern syntaxial bend","The matching hairpin near Namcha Barwa, where the Tsangpo turns and cuts the Dihang gorge to enter India. The Purvanchal hills run south from here."],
    ["Tethys and the fossils","Marine fossils high in the Great Himalaya are the proof of the Tethys origin — the rock was sea floor. Spiti and Zanskar are where they are found."],
    ["Himalaya means","“Abode of snow”, from hima (snow) and alaya (abode). The Puranic name for the arc is Himavat."]
   ]},

  {h:"The four divisions, west to east",
   note:"Burrard's division, counted off by the river at each boundary. The boundary rivers in order are Indus, Satluj, Kali, Teesta, Dihang — remember the rivers and the four names fall out.",
   rows:[
    ["Punjab or Kashmir Himalaya","Between the Indus and the Satluj, about 560 km. Holds the Karakoram, Ladakh, Zaskar and Pir Panjal ranges, the Kashmir valley, and the karewas."],
    ["Kumaon Himalaya","Between the Satluj and the Kali, about 320 km — the shortest of the four. Nanda Devi, the Gangotri and Yamunotri glaciers and the four dhams are here."],
    ["Nepal Himalaya","Between the Kali and the Teesta, about 800 km — the longest of the four. Everest, Kanchenjunga, Makalu, Annapurna and Dhaulagiri stand in this stretch."],
    ["Assam Himalaya","Between the Teesta and the Dihang, about 720 km. Namcha Barwa and Kangto, and the wettest slopes in the system."],
    ["The boundary rivers in order","Indus, Satluj, Kali, Teesta, Dihang. A question naming any two of these is asking which division lies between them."]
   ]},

  {h:"The regional divisions, and what is only found in each",
   rows:[
    ["Kashmir or North-western Himalayas","Karakoram, Ladakh, Zaskar and Pir Panjal. The Kashmir valley lies between the Pir Panjal and the Great Himalaya. Important for the karewas, Dal and Wular lakes, and the Zoji La and Banihal passes."],
    ["Karewas","Thick deposits of glacial clay and loam on the floor of the Kashmir valley. Saffron (Pampore), almonds and apples are grown on them — the saffron link is what gets asked."],
    ["Himachal and Uttarakhand Himalayas","Drained by the Indus and the Ganga systems. All three Shiwalik, Dhauladhar and Nag Tibba belts are present, and so are the duns. Gangotri, Yamunotri, Kedarnath and Badrinath, and the Bhotiya herders who move up in summer and down in winter."],
    ["Darjeeling and Sikkim Himalayas","Short but very steep. Kanchenjunga, the Teesta, and the duar formations at the foot that carry the tea gardens. The Lepcha are the original inhabitants."],
    ["Arunachal Himalayas","From east of Bhutan to the Diphu pass. Kangto and Namcha Barwa, and the Dihang, Dibang, Lohit, Kameng and Subansiri cutting deep gorges. Monpa, Abor, Mishmi, Nyishi and Nagas."],
    ["Eastern Hills and Mountains (Purvanchal)","The arm that runs south from the eastern bend along India's border with Myanmar: Patkai Bum, Naga Hills, Manipur Hills and the Mizo or Lushai Hills. Made largely of strong sandstone and covered in dense forest."],
    ["Peaks and lakes of the Purvanchal","Saramati (3,826 m) in the Naga Hills is the highest. Loktak lake in Manipur sits in the middle of the Manipur hills, carries the floating phumdis, and holds Keibul Lamjao, the world's only floating national park."],
    ["Phawngpui","The Blue Mountain, 2,157 m, the highest point in Mizoram and of the Lushai hills."]
   ]},

  {h:"The peaks — and the one word the question turns on",
   note:"Highest peak IN India and highest peak lying entirely WITHIN India are two different mountains. So are highest in the Himalayas and highest in India.",
   rows:[
    ["Mount Everest","8,848.86 m, on the Nepal–China border — the world's highest. Sagarmatha in Nepali, Chomolungma in Tibetan. The figure was revised from 8,848 m by the joint Nepal–China survey announced in December 2020."],
    ["K2 (Godwin Austen)","8,611 m, the second highest in the world and the highest peak in India as India claims it. It stands in the Karakoram, in the part of the Kashmir region administered by Pakistan — which is exactly why the next row exists."],
    ["Kanchenjunga","8,586 m, third in the world and the highest peak in India's undisputed territory. It sits on the Sikkim–Nepal border, so it is not entirely inside India either."],
    ["Nanda Devi","7,816 m, the highest peak lying wholly within Indian territory, in Uttarakhand. This is the answer when the question says “entirely within India”."],
    ["Nanga Parbat","8,126 m, the Killer Mountain. It anchors the western end of the Great Himalaya at the western syntaxial bend."],
    ["Namcha Barwa","7,756 m, the eastern anchor, where the Tsangpo turns to become the Dihang."],
    ["The other eight-thousanders of the Nepal Himalaya","Makalu 8,485; Cho Oyu 8,188; Dhaulagiri 8,167; Manaslu 8,163; Annapurna 8,091. Annapurna was the first eight-thousander ever climbed, in 1950."],
    ["Peaks outside the Himalayas that get asked","Anamudi (2,695 m, Kerala) is the highest in South India and in the Western Ghats; Doda Betta (2,637 m) the highest in the Nilgiris; Kalsubai (1,646 m) the highest in Maharashtra; Guru Shikhar (1,722 m, Mount Abu) the highest in the Aravallis; Mahendragiri (1,501 m, Odisha) the highest in the Eastern Ghats."],
    ["Highest peak in peninsular India","Anamudi. The Aravallis are the oldest fold mountains in India and the Western Ghats are higher than the Eastern Ghats throughout."]
   ]},

  {h:"The passes — the most repeated geography question there is",
   note:"Each row is a pass, the state or region it is in, and the two places it joins. The joining is what the question asks, not the height.",
   rows:[
    ["Zoji La","Ladakh region, on the Srinagar–Leh road (NH-1). The Zoji La tunnel is being built to keep it open through winter."],
    ["Banihal","Jammu and Kashmir, through the Pir Panjal on the Jammu–Srinagar road. The Jawahar tunnel runs beneath it."],
    ["Pir Panjal","Jammu and Kashmir, the traditional Jammu–Srinagar route through the Pir Panjal range."],
    ["Khardung La","Ladakh, north of Leh on the road to the Nubra valley and the Siachen glacier — one of the highest motorable passes in the world."],
    ["Chang La and Lanak La","Ladakh. Chang La leads to Pangong Tso; Lanak La connects Ladakh with Tibet."],
    ["Karakoram and Aghil","Ladakh, the highest passes of the system, on the old caravan route from Ladakh into Xinjiang. The Karakoram pass is on the Indian claim line with China."],
    ["Rohtang","Himachal Pradesh, joining the Kullu valley with Lahaul and Spiti. The Atal tunnel beneath it, opened in 2020, keeps Lahaul connected all year."],
    ["Shipki La","Himachal Pradesh, where the Satluj enters India. An India–China trade route."],
    ["Bara Lacha La and Kunzum","Himachal Pradesh, on the Manali–Leh road and the route into Spiti respectively."],
    ["Mana and Niti","Uttarakhand, above Badrinath, leading into Tibet."],
    ["Lipulekh","Uttarakhand, at the India–Nepal–China trijunction. The Kailash–Mansarovar pilgrimage route."],
    ["Nathu La and Jelep La","Sikkim. Nathu La is the India–China trade route reopened in 2006; Jelep La joins Kalimpong with Lhasa."],
    ["Bomdi La","Arunachal Pradesh, joining Tawang with the plains of Assam."],
    ["Diphu, Pangsau, Yonggyap and Hpungan","Arunachal Pradesh, on the Myanmar frontier. Pangsau carries the old Stilwell road from Ledo into Myanmar."],
    ["Tuju","Manipur, connecting Imphal with the Myanmar side."],
    ["Palghat (Palakkad) gap","Not Himalayan, but asked as often: the 30 km break in the Western Ghats between the Nilgiris and the Anaimalai hills, carrying the Coimbatore–Kochi road and rail."],
    ["Thal Ghat and Bhor Ghat","Western Ghats, Maharashtra. Thal Ghat carries the Mumbai–Nashik route and Bhor Ghat the Mumbai–Pune route."],
    ["Senkota and Shencottah","Western Ghats, joining Kollam in Kerala with Madurai in Tamil Nadu."]
   ]},

  {h:"The glaciers",
   rows:[
    ["Siachen","In the eastern Karakoram, about 76 km long — the longest glacier in India and the longest outside the polar regions after a few in the Karakoram itself. The Nubra rises from its snout."],
    ["The other Karakoram giants","Baltoro, Biafo, Hispar and Batura. Biafo and Hispar together make one of the longest ice corridors outside the poles."],
    ["Gangotri","Uttarakhand. The Bhagirathi — the headstream of the Ganga — issues from its snout at Gaumukh."],
    ["Yamunotri","Uttarakhand, the source of the Yamuna."],
    ["Satopanth and Bhagirath Kharak","Uttarakhand, the source of the Alaknanda, the other headstream of the Ganga."],
    ["Pindari and Milam","Uttarakhand, in the Kumaon Himalaya."],
    ["Bara Shigri","Himachal Pradesh, in the Chandra valley of Lahaul — the largest glacier in the state."],
    ["Drang Drung","Zanskar range, Ladakh region, near the Pensi La."],
    ["Zemu","Sikkim, on the eastern side of Kanchenjunga — the largest glacier in the eastern Himalaya."]
   ]},

  {h:"The valleys and the lakes",
   rows:[
    ["Kashmir valley","Between the Pir Panjal and the Great Himalaya, floored with karewas and drained by the Jhelum."],
    ["Kangra and Kullu","Himachal Pradesh. Kangra is a longitudinal trough; Kullu is a transverse valley on the upper Beas."],
    ["Lahaul and Spiti","Himachal Pradesh, beyond the Great Himalaya and therefore in rain shadow — cold, dry and thinly peopled."],
    ["Nubra, Markha and Zanskar","Ladakh region. Nubra lies beyond the Khardung La and carries the Shyok."],
    ["Valley of Flowers","Uttarakhand, a UNESCO World Heritage site, with Nanda Devi National Park alongside it."],
    ["Yumthang and Dzukou","Yumthang is Sikkim's valley of flowers; Dzukou lies on the Nagaland–Manipur border."],
    ["Wular","Jammu and Kashmir — the largest freshwater lake in India, of tectonic origin, fed by the Jhelum."],
    ["Dal","Jammu and Kashmir, the lake of the houseboats and the floating gardens at Srinagar."],
    ["Pangong Tso and Tso Moriri","Ladakh region. Pangong is a long brackish lake running across the Line of Actual Control; Tso Moriri lies to its south."],
    ["Gurudongmar and Tsomgo (Changu)","Sikkim, both at high altitude; Gurudongmar is among the highest lakes in the world."],
    ["Roopkund","Uttarakhand — the skeleton lake, named for the human remains found at its edge."],
    ["Chandratal","Himachal Pradesh, in Spiti, the source area of the Chandra."],
    ["Nainital, Bhimtal and Sattal","Uttarakhand, the Kumaon lake district."],
    ["Loktak","Manipur — the largest freshwater lake in the north-east, covered with floating phumdis, and the site of Keibul Lamjao, the only floating national park in the world."]
   ]},

  {h:"The rivers that rise in the Himalayas",
   note:"Himalayan rivers are snow-fed and therefore perennial; peninsular rivers are rain-fed and seasonal. That single distinction answers a great many questions on its own.",
   rows:[
    ["Indus","Rises near Lake Mansarovar in Tibet, enters India in the Ladakh region, and leaves for Pakistan. About 2,880 km in all, which makes it the longest river of the subcontinent, though only about a third runs through India."],
    ["The five rivers of the Punjab","Jhelum, Chenab, Ravi, Beas and Satluj, all tributaries of the Indus. The Satluj rises in Tibet at Rakas lake, the Beas entirely within India at Beas Kund."],
    ["Indus Waters Treaty, 1960","Brokered by the World Bank. The three eastern rivers — Ravi, Beas and Satluj — to India; the three western — Indus, Jhelum and Chenab — largely to Pakistan."],
    ["Ganga: the two headstreams","Bhagirathi from the Gangotri glacier and Alaknanda from the Satopanth. They meet at Devprayag, and the river is the Ganga from there."],
    ["Panch Prayag","The five confluences on the Alaknanda, in order downstream: Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag and Devprayag."],
    ["Ganga's left-bank tributaries","Ramganga, Gomti, Ghaghara, Gandak and Kosi. The Kosi is the Sorrow of Bihar for the way it shifts its channel."],
    ["Ganga's right-bank tributaries","Yamuna — its longest tributary, rising at the Yamunotri — and the Son. The Chambal, Betwa and Ken join the Yamuna."],
    ["Where the Ganga splits","At Farakka in West Bengal: the Bhagirathi-Hooghly turns south through India, the main channel runs into Bangladesh as the Padma."],
    ["Brahmaputra","Rises in the Chemayungdung glacier near Mansarovar, runs east across Tibet as the Tsangpo, turns at Namcha Barwa and enters Arunachal as the Dihang. The Dibang and the Lohit join it, and from there it is the Brahmaputra."],
    ["Brahmaputra in Assam and beyond","Braided, heavily silted and flood-prone — the Sorrow of Assam. It holds Majuli, the largest river island in the world. In Bangladesh it is the Jamuna, and it joins the Padma before meeting the Meghna."],
    ["Teesta and Manas","Teesta rises in Sikkim and joins the Brahmaputra; Manas rises in Bhutan. Both are Brahmaputra tributaries."],
    ["Which Himalayan river is antecedent","Several — the Indus, the Satluj and the Brahmaputra all cut gorges through ranges that rose after the river was already flowing, which is what antecedent drainage means."]
   ]},

  {h:"What the Himalayas actually do",
   rows:[
    ["The climatic wall","They block the cold, dry winds of Central Asia, which is why northern India is markedly warmer in winter than other places at the same latitude."],
    ["The monsoon barrier","They stand across the path of the summer monsoon and force it to rise and shed its rain. Without them the monsoon would carry on north and most of India would be desert."],
    ["Perennial rivers","Snow and glacier melt keeps the Indus, Ganga and Brahmaputra systems flowing through the dry season, which is the basis of irrigation across the whole northern plain."],
    ["The plains themselves","The northern plain is Himalayan sediment — alluvium brought down and laid out by those same three rivers."],
    ["Rain shadow","Everything beyond the Great Himalaya lies in its rain shadow: Ladakh, Lahaul and Spiti are cold deserts for this reason."],
    ["The strategic frontier","The passes are the only ways through, which is why a list of passes and the two places each joins is worth exam marks and has been worth rather more than that historically."]
   ]}
 ]},

/* ===================================================================
   2. THE PHYSICAL DIVISIONS
   =================================================================== */
{id:"physiography", n:"The physical divisions of India", hy:1,
 w:"The six divisions, the three parts of the northern plain, the plateaus and hill ranges of the peninsula, the two coasts and the two island groups.",
 intro:"Six divisions: the northern mountains, the northern plain, the peninsular plateau, the Indian desert, the coastal plains and the islands. Most questions here are of one shape — name the division a feature belongs to, or name what separates two of them. The three-fold division of the northern plain into bhabar, terai and the two alluviums is the part most often missed.",
 blocks:[

  {h:"The six divisions, and the share each takes",
   rows:[
    ["The six","Northern and north-eastern mountains; the Northern plain; the Peninsular plateau; the Indian desert; the Coastal plains; the Islands."],
    ["How the land is split by relief","Plains about 43 per cent of the area, plateaus about 28 per cent, mountains about 11 per cent and hills about 18 per cent. The plains carry far more than their share of the population."],
    ["Total area and extent","32.87 lakh sq km, seventh largest in the world, 2.4 per cent of the world's land. From 8°4′ N to 37°6′ N and 68°7′ E to 97°25′ E."],
    ["The two extents are not equal","North to south about 3,214 km; east to west about 2,933 km. The longitudinal span is about 30 degrees, which is why the sun rises about two hours earlier in Arunachal than in Gujarat and why 82°30′ E is taken as the standard meridian."],
    ["Indira Point","The southernmost point of the Republic, on Great Nicobar. Kanyakumari is the southernmost point of the mainland."]
   ]},

  {h:"The northern plain, in three belts",
   note:"North to south: bhabar, terai, then the alluvium. Getting the order wrong is the usual error.",
   rows:[
    ["Bhabar","A narrow 8 to 16 km belt of pebbles along the foot of the Shiwaliks. Streams disappear underground into it, so the surface is dry."],
    ["Terai","South of the bhabar, where those streams re-emerge and make a wet, marshy, once heavily forested strip. Much of it has been cleared for farming."],
    ["Bhangar","The older alluvium, lying above the flood level as terraces. It carries kankar — lime nodules — and is less fertile."],
    ["Khadar","The newer alluvium of the floodplains, renewed by silt every year and the most fertile land in the country."],
    ["The three sections of the plain","Punjab plain (built by the Indus system, with doabs between the rivers), Ganga plain (from Ghaggar to Teesta) and Brahmaputra plain (mainly in Assam)."],
    ["Reg, bhur and the rest","Bhur is the windblown sand in the upper Ganga-Yamuna doab. Doab simply means the land between two rivers."],
    ["Why the plain matters","It is 7 lakh sq km of flat, deep, river-laid alluvium, which is what makes it the most densely settled and most intensively farmed region in India."]
   ]},

  {h:"The peninsular plateau",
   rows:[
    ["What it is","The oldest and most stable landmass in India, part of the ancient Gondwana shield, made of igneous and metamorphic rock. It is a tableland, not a mountain system."],
    ["Central Highlands","North of the Narmada: the Malwa plateau, bounded by the Vindhyas to the south and the Aravallis to the north-west. Bundelkhand, Baghelkhand and the Chotanagpur plateau extend it eastwards."],
    ["Deccan Plateau","South of the Narmada, triangular, bounded by the Satpuras in the north and the two Ghats on either side. It tilts east, which is why almost all its rivers flow to the Bay of Bengal."],
    ["Deccan Trap","The thick basalt sheet of north-western Deccan, laid down by volcanic eruptions around the end of the Cretaceous. Black cotton soil (regur) is its weathering product."],
    ["Western Ghats (Sahyadri)","Continuous, crossed only through passes, 900 to 1,600 m and rising southwards. Anamudi, 2,695 m, is the highest point. A UNESCO World Heritage site and one of the world's biodiversity hotspots."],
    ["Eastern Ghats","Discontinuous, broken by the rivers that cut through them, and lower — about 600 m. Mahendragiri, 1,501 m, is the highest. The two Ghats meet at the Nilgiris."],
    ["The Nilgiris and the gaps","The Nilgiris join the two Ghats. South of them the Palghat gap breaks the Western Ghats, and further south come the Anaimalai and the Cardamom hills."],
    ["Aravallis","The oldest fold mountains in India, running north-east from Gujarat through Rajasthan to Delhi, heavily worn down. Guru Shikhar on Mount Abu, 1,722 m, is the highest point."],
    ["Chotanagpur plateau","Jharkhand and parts of Odisha, Chhattisgarh and West Bengal — the richest mineral belt in India, drained by the Damodar. The Damodar valley is India's prime coal field."],
    ["Meghalaya plateau","Garo, Khasi and Jaintia hills — a detached piece of the peninsular block, separated from the main plateau by the Malda gap. Mawsynram and Cherrapunji are on its southern face."]
   ]},

  {h:"The desert, the coasts and the islands",
   rows:[
    ["The Indian or Thar desert","West of the Aravallis in Rajasthan, with barchan dunes and under 150 mm of rain a year. The Luni is its only sizeable river, and it drains into the Rann of Kutch rather than the sea."],
    ["Why the Thar is dry","It lies parallel to the Arabian Sea branch of the monsoon rather than across it, so the winds pass over without being forced to rise and shed rain."],
    ["Western coastal plain","Narrow, and a submerged coast — which is what gives it good natural harbours. From north to south: Kachchh and Kathiawar coast, Konkan, Kanara and the Malabar coast with its backwaters (kayals)."],
    ["Eastern coastal plain","Broad and level, an emergent coast, built of the deltas of the Mahanadi, Godavari, Krishna and Kaveri. The northern part is the Northern Circars and the southern part the Coromandel coast."],
    ["Lakshadweep","Coral islands in the Arabian Sea, 36 of them, formerly Laccadive, Minicoy and Amindivi. Kavaratti is the capital. The Eleventh degree channel separates Amindivi from Kavaratti; the Nine degree channel separates Minicoy from the rest."],
    ["Andaman and Nicobar","An elevated chain in the Bay of Bengal, the continuation of the Arakan Yoma. Port Blair is the capital. The Ten degree channel separates the Andamans from the Nicobars."],
    ["Barren Island","In the Andamans — the only active volcano in India."],
    ["Great Andaman and Great Nicobar","Great Andaman is the largest group; Great Nicobar is the southernmost island and carries Indira Point."]
   ]}
 ]},

/* ===================================================================
   3. DRAINAGE
   =================================================================== */
{id:"drainage", n:"The drainage system", hy:1,
 w:"Himalayan against peninsular, every major peninsular river with its source and mouth, the east-flowing and west-flowing split, and the waterfalls.",
 intro:"The one distinction that answers most of this topic: Himalayan rivers are snow-fed, perennial, antecedent and still cutting their valleys; peninsular rivers are rain-fed, seasonal, and have long since graded themselves. Then two lists — which peninsular rivers flow east and which flow west, and which of them make deltas and which make estuaries.",
 blocks:[

  {h:"Himalayan against peninsular",
   rows:[
    ["Source of water","Himalayan: snow and glacier melt plus rain, so perennial. Peninsular: rain only, so the flow collapses in the dry season."],
    ["Age and valley form","Himalayan rivers are young, cutting deep V-shaped gorges and still eroding downwards. Peninsular rivers are old, with broad shallow valleys and almost no downcutting left."],
    ["Course","Himalayan rivers meander across the plains and shift their channels; peninsular rivers run in fixed, well-adjusted courses over hard rock."],
    ["Drainage pattern","Himalayan rivers are largely antecedent — older than the mountains they cut through. Peninsular drainage is consequent, following the slope of the plateau."],
    ["Catchment","Himalayan basins are very large; peninsular basins are comparatively small."],
    ["The main systems","Himalayan: Indus, Ganga, Brahmaputra. Peninsular: Mahanadi, Godavari, Krishna, Kaveri flowing east; Narmada and Tapi flowing west."]
   ]},

  {h:"The east-flowing peninsular rivers",
   note:"All of them drain into the Bay of Bengal and all of them build deltas, because the plateau tilts east.",
   rows:[
    ["Mahanadi","Rises in Chhattisgarh near Sihawa, flows through Odisha to the Bay of Bengal. The Hirakud dam — one of the longest dams in the world — is on it."],
    ["Godavari","The longest river of the peninsula, about 1,465 km, called the Dakshina Ganga. Rises at Trimbakeshwar in Nashik, Maharashtra; the largest peninsular basin. Tributaries Penganga, Indravati, Pranhita, Manjra."],
    ["Krishna","Rises near Mahabaleshwar, about 1,400 km, the second longest peninsular river. Tributaries Koyna, Tungabhadra, Bhima. The Nagarjuna Sagar dam is on it."],
    ["Kaveri","Rises at Talakaveri in the Brahmagiri hills of Karnataka and reaches the sea in Tamil Nadu. The most dependable peninsular river, because it gets rain from both the south-west monsoon upstream and the north-east monsoon downstream."],
    ["Subarnarekha, Brahmani, Baitarani","Smaller east-flowing rivers through Jharkhand and Odisha."],
    ["Pennar and Vaigai","Further south, in Andhra Pradesh and Tamil Nadu."],
    ["Which rivers make the largest delta","The Ganga-Brahmaputra delta, the Sundarbans, is the largest in the world. Among purely peninsular rivers the Godavari's is the largest."]
   ]},

  {h:"The west-flowing rivers and the rift valleys",
   rows:[
    ["Narmada","Rises at Amarkantak in Madhya Pradesh and flows west through a rift valley between the Vindhyas and the Satpuras into the Gulf of Khambhat. It makes an estuary, not a delta. The Marble Rocks at Jabalpur and the Dhuandhar falls are on it."],
    ["Tapi (Tapti)","Rises in the Betul district of Madhya Pradesh and runs west through a parallel rift valley, also to the Gulf of Khambhat, also an estuary."],
    ["Why these two make estuaries","They flow through narrow rift valleys that carry the sediment straight out to sea instead of letting it settle, and the submerging western coast does the rest."],
    ["Sabarmati, Mahi and Luni","Also west-flowing. The Luni is the only river of consequence in the Thar and ends in the Rann of Kutch rather than the sea."],
    ["Periyar and Bharathappuzha","The main west-flowing rivers of Kerala, draining the Western Ghats into the Arabian Sea."],
    ["The Sharavati","Karnataka — it makes the Jog falls."]
   ]},

  {h:"The waterfalls, and the drainage patterns",
   rows:[
    ["Kunchikal","Karnataka, on the Varahi — the highest waterfall in India at about 455 m."],
    ["Jog (Gersoppa)","Karnataka, on the Sharavati — the best known, and the highest plunge waterfall in India."],
    ["Dudhsagar","On the Goa–Karnataka border, on the Mandovi."],
    ["Athirappilly","Kerala, on the Chalakudy — the widest in India."],
    ["Chitrakote","Chhattisgarh, on the Indravati — the widest fall in India, called the Niagara of India."],
    ["Dhuandhar and Hundru","Dhuandhar on the Narmada at Jabalpur; Hundru on the Subarnarekha in Jharkhand."],
    ["Nohkalikai","Meghalaya, near Cherrapunji — the tallest plunge waterfall in the country by some measures."],
    ["Dendritic pattern","A tree and its branches, formed where the rock is uniform — the Ganga system in the plains."],
    ["Trellis pattern","Tributaries joining the main stream at right angles, formed in folded country where hard and soft rock alternate."],
    ["Radial pattern","Streams running outwards from a central high — the rivers off the Amarkantak plateau."],
    ["Centripetal pattern","Streams running inwards into a basin — Loktak lake in Manipur."]
   ]}
 ]},

/* ===================================================================
   4. CLIMATE
   =================================================================== */
{id:"climate", n:"Climate and the monsoon", hy:1,
 w:"What drives the monsoon, the four seasons and what happens in each, the rainfall pattern, the local winds and the cyclones.",
 intro:"India has a tropical monsoon climate, and “monsoon” means a seasonal reversal of the wind. The questions come in three shapes: what causes the reversal, which season brings what to which region, and which local wind belongs to which state. The onset and withdrawal dates are worth knowing exactly.",
 blocks:[

  {h:"What drives the monsoon",
   rows:[
    ["The word","From the Arabic mausim, meaning season. A monsoon is a wind system that reverses direction between summer and winter."],
    ["The differential heating explanation","Land heats faster than sea. In summer a low-pressure trough forms over north-west India and draws moist air in off the ocean; in winter the land cools, pressure rises, and the wind blows the other way."],
    ["The ITCZ","The Inter Tropical Convergence Zone shifts north in summer to lie over the Ganga plain, which pulls the south-east trades across the equator. Deflected right by the Coriolis force, they arrive as the south-west monsoon."],
    ["The Tibetan plateau","Heats strongly in summer and sets up a high-level anticyclone, which helps drive the easterly jet stream and strengthens the monsoon."],
    ["The jet streams","The westerly jet stream sits south of the Himalayas in winter and brings in western disturbances; its withdrawal north in summer is the signal for the monsoon's burst. The tropical easterly jet then forms over the peninsula."],
    ["El Niño and the Southern Oscillation","A warm El Niño in the eastern Pacific is associated with a weak Indian monsoon; La Niña with a strong one. The pressure see-saw between Tahiti and Darwin is the Southern Oscillation, and the two together are ENSO."],
    ["The Indian Ocean Dipole","A separate see-saw between the western and eastern Indian Ocean. A positive dipole can offset an El Niño and keep the monsoon near normal."]
   ]},

  {h:"The four seasons",
   rows:[
    ["Cold weather season","Mid-November to February. Clear skies, low temperature and low humidity. North-east trades blow off the land, so most of India stays dry — but they pick up moisture over the Bay of Bengal and give Tamil Nadu its rain."],
    ["Western disturbances","Low-pressure systems that travel in from the Mediterranean over Iran and Pakistan in winter and bring the rain and snow that the Punjab and Himachal rabi crop depends on. Called mahawat in the north-west."],
    ["Hot weather season","March to May. The temperature peaks, and the heat low deepens over the north-west. This is the season of loo, dust storms and the local thunderstorms."],
    ["South-west monsoon","June to September — about 75 per cent of India's annual rainfall. It bursts over Kerala around 1 June, reaches Mumbai around 10 June and Delhi around 29 June, and covers the whole country by mid-July."],
    ["The two branches","The Arabian Sea branch strikes the Western Ghats and drenches the windward side while leaving the Deccan in rain shadow. The Bay of Bengal branch is deflected by the Arakan Yoma, moves up the Ganga plain and is turned west by the Himalayas."],
    ["Break in the monsoon","Dry spells of a week or more within the rainy season, caused by the monsoon trough shifting. They matter more to a crop than the seasonal total does."],
    ["Retreating monsoon","October and November. The low-pressure trough weakens, the wind reverses, and the humid, oppressive weather of this period is October heat. The north-east monsoon now gives Tamil Nadu and the Coromandel coast their main rain."],
    ["Why Tamil Nadu is the exception","It lies in the rain shadow of the Western Ghats during the south-west monsoon and gets its rain instead from the retreating monsoon in October and November."]
   ]},

  {h:"Rainfall, local winds and cyclones",
   rows:[
    ["Wettest place","Mawsynram in Meghalaya, with Cherrapunji (Sohra) next to it. Both sit on the funnel-shaped southern face of the Khasi hills, which forces the Bay branch to rise sharply."],
    ["Driest place","Jaisalmer in Rajasthan; the Thar generally receives under 150 mm a year. Leh is dry too, but because it is in rain shadow rather than desert heat."],
    ["Loo","The hot, dry, searing wind of the northern plains in May and June."],
    ["Mango shower","Pre-monsoon thunderstorm rain in Kerala and coastal Karnataka that helps the mango ripen. Called cherry blossom shower in Karnataka's coffee districts."],
    ["Kalbaisakhi and Bardoli chheerha","Violent evening thunderstorms in West Bengal and Assam in April and May. In Assam they are the Bardoli chheerha; the Bengal name means the calamity of Baisakh."],
    ["Norwesters and Andhi","Norwesters are the Bengal thunderstorms; andhi is the Rajasthan dust storm."],
    ["Cyclones","Far more form in the Bay of Bengal than in the Arabian Sea, and October-November and April-May are the two seasons. The Odisha and Andhra coasts take the most."],
    ["Koeppen's classification for India","Six main types, of which the most extensive is Aw — tropical savanna with dry winters — over most of the peninsula. Amw is the monsoon type with a short dry season on the Malabar coast, BWhw the hot desert of western Rajasthan."],
    ["Why rainfall matters more than its total","Because its distribution is so uneven: from over 1,000 cm at Mawsynram to under 15 cm in western Rajasthan, and because the whole year's supply arrives in four months."]
   ]}
 ]},

/* ===================================================================
   5. SOILS, VEGETATION AND WILDLIFE
   =================================================================== */
{id:"soils", n:"Soils and natural vegetation", hy:1,
 w:"The eight ICAR soil types with where they are and what grows on them, the forest types by rainfall, and the conservation categories.",
 intro:"Two lists and one rule. The soils are asked as a match — soil to region, or soil to crop — and black soil with cotton and laterite with the heavy-rain uplands are the two matches that come up most. Forest types are asked by rainfall band, which is the rule: the type follows the rain.",
 blocks:[

  {h:"The soils",
   note:"The ICAR classification recognises eight major types. Alluvial and black between them cover more than half the country.",
   rows:[
    ["Alluvial","About 40 per cent of the land — the whole northern plain and the deltas. Rich in potash and lime, poor in nitrogen and humus. Divided into khadar (new) and bhangar (old). Wheat, rice, sugarcane, jute."],
    ["Black (regur)","The Deccan trap country of Maharashtra, Madhya Pradesh, Gujarat, Telangana. Formed from weathered basalt, holds moisture well, swells when wet and cracks when dry so it is self-ploughing. Rich in iron, lime and magnesia, poor in nitrogen and phosphorus. Cotton above all."],
    ["Red and yellow","The eastern and southern peninsula, on crystalline igneous rock, where rainfall is low. Red from the iron in it; yellow when hydrated. Poor in nitrogen, phosphorus and humus. Millets, groundnut, pulses."],
    ["Laterite","Heavy rain and high temperature leach away the silica and leave iron and aluminium behind. Karnataka, Kerala, Tamil Nadu, Madhya Pradesh, the hills of Odisha and Assam. Poor for most crops but good for tea, coffee, cashew and rubber, and it hardens into building brick."],
    ["Arid or desert","Western Rajasthan, sandy and saline, low in humus and moisture, high in salt. Needs irrigation; drought-resistant crops such as bajra and jowar."],
    ["Saline and alkaline (usara, reh, kallar)","Dry parts of Gujarat, Haryana, Punjab and western Uttar Pradesh, made worse by over-irrigation and poor drainage. Treated with gypsum."],
    ["Peaty and marshy","Heavy rainfall and high humidity with little decomposition — Kottayam in Kerala, the Sundarbans, coastal Odisha and Tamil Nadu. Very high organic content, and often alkaline."],
    ["Forest and mountain soil","The hill slopes, varying with altitude; acidic and low in humus on the higher slopes, fertile in the valleys."],
    ["The two kinds of erosion","Gully erosion carves the ravines of the Chambal badlands; sheet erosion strips the topsoil evenly and is harder to see. Contour ploughing, terracing, strip cropping and shelter belts are the standard answers."]
   ]},

  {h:"Natural vegetation",
   note:"The type follows the rainfall, so learn the bands and the type falls out.",
   rows:[
    ["Tropical evergreen","Over 200 cm of rain — the Western Ghats, the Andamans, and the north-east. No definite season for shedding leaves, so they are always green. Rosewood, mahogany, ebony."],
    ["Tropical deciduous (monsoon forest)","The most widespread type in India, 70 to 200 cm. Moist deciduous where rain is 100 to 200 cm (teak, sal, shisham), dry deciduous where it is 70 to 100 cm."],
    ["Thorn forest and scrub","Under 70 cm — north-west India, Rajasthan, Gujarat, parts of the Deccan. Acacia, kikar, khair, cactus, with long roots and small thick leaves."],
    ["Montane forest","Changing with altitude: deciduous low down, then pine and deodar between about 1,500 and 3,000 m, then silver fir and birch, then alpine grassland and finally tundra."],
    ["Mangrove or tidal forest","The deltas and the coast, where fresh and salt water meet. Sundari trees give the Sundarbans its name. Ganga-Brahmaputra, Mahanadi, Godavari and Krishna deltas."],
    ["Forest cover","About 21 to 22 per cent of the geographical area by the latest Forest Survey of India report, against the 33 per cent target set by the National Forest Policy. Madhya Pradesh has the largest forest area; Mizoram the largest percentage of its own area."],
    ["Biosphere reserves","Eighteen in India; Nilgiri (1986) was the first. Nanda Devi, Sundarbans, Gulf of Mannar, Nokrek, Great Nicobar, Manas, Simlipal, Pachmarhi, Achanakmar-Amarkantak, Agasthyamalai and others are on the UNESCO world network."],
    ["Project Tiger and Project Elephant","Project Tiger began in 1973 and Project Elephant in 1992. There are over fifty tiger reserves; Jim Corbett in Uttarakhand was the first national park in India, established in 1936 as Hailey National Park."],
    ["Ramsar sites","Wetlands of international importance. India has well over seventy; Chilika in Odisha and Keoladeo in Rajasthan were among the first two, both designated in 1981."]
   ]}
 ]},

/* ===================================================================
   6. AGRICULTURE, MINERALS AND INDUSTRY
   =================================================================== */
{id:"agriculture", n:"Agriculture, minerals and industry", hy:1,
 w:"The three cropping seasons, the leading state for each major crop, the revolutions, the mineral belts and where the big industries sit.",
 intro:"This topic is a set of lists, and the lists are asked as matches: crop to leading state, mineral to belt, revolution to product. Two cautions. Leading-producer rankings move between years, so each row says what it is as of and where the ranking is genuinely close. And largest producer and largest area under the crop are not always the same state.",
 blocks:[

  {h:"The cropping seasons",
   rows:[
    ["Kharif","Sown with the onset of the monsoon in June or July and harvested in September or October. Rice, maize, jowar, bajra, tur, moong, cotton, groundnut, jute, soyabean."],
    ["Rabi","Sown in October to December and harvested in April or May, on the winter rain and the residual moisture. Wheat, barley, peas, gram, mustard, linseed."],
    ["Zaid","The short summer season between rabi and kharif, March to June, needing irrigation. Watermelon, muskmelon, cucumber, fodder and vegetables."],
    ["Why wheat is a rabi crop and rice is kharif","Wheat needs a cool growing season and a warm dry ripening period; rice needs standing water and high temperature, which is what the monsoon supplies."]
   ]},

  {h:"The crops and their leading states",
   note:"Rankings shift year to year between the top two or three. Where it is close the row says so.",
   rows:[
    ["Rice","West Bengal usually leads, with Uttar Pradesh and Punjab close behind. Needs over 100 cm of rain or assured irrigation. Punjab and Haryana grow it entirely on irrigation."],
    ["Wheat","Uttar Pradesh leads on production, with Madhya Pradesh and Punjab next; Punjab leads comfortably on yield per hectare."],
    ["Sugarcane","Uttar Pradesh leads on production, Maharashtra on recovery and on sugar output. A tropical and subtropical crop needing 75 to 100 cm of rain."],
    ["Cotton","Gujarat and Maharashtra lead, on the black soil of the Deccan trap. Needs 210 frost-free days and high sunshine."],
    ["Jute","West Bengal, by a wide margin, on the Ganga delta — the golden fibre."],
    ["Tea","Assam leads, with West Bengal (Darjeeling and the Dooars) next, then Tamil Nadu and Kerala in the Nilgiris. Needs well-drained loamy soil on slopes and no standing water."],
    ["Coffee","Karnataka produces the great bulk of it, with Kerala and Tamil Nadu next. Arabica came from Yemen to the Baba Budan hills."],
    ["Rubber","Kerala, by a long way; also Tamil Nadu, Karnataka and the Andamans."],
    ["Groundnut, soyabean and mustard","Gujarat for groundnut, Madhya Pradesh for soyabean, Rajasthan for mustard."],
    ["Pulses","Madhya Pradesh and Rajasthan lead. Pulses fix nitrogen, so they are grown in rotation to restore soil fertility."],
    ["Millets","Bajra: Rajasthan. Jowar: Maharashtra and Karnataka. Ragi: Karnataka. Called coarse grains or, since 2023, nutri-cereals."],
    ["Spices","Kerala for black pepper and cardamom; Gujarat and Rajasthan for cumin and coriander; Andhra Pradesh for chilli and turmeric."]
   ]},

  {h:"The revolutions",
   rows:[
    ["Green Revolution","Foodgrains, chiefly wheat and then rice, from the mid-1960s. High-yielding varieties, fertiliser, assured irrigation. M. S. Swaminathan in India; Norman Borlaug globally. Punjab, Haryana and western Uttar Pradesh gained most."],
    ["White Revolution","Milk — Operation Flood from 1970, under Verghese Kurien and the National Dairy Development Board, built on the Anand cooperative model. India is the world's largest milk producer."],
    ["Blue Revolution","Fish and aquaculture. Yellow for oilseeds, Golden for horticulture and honey, Silver for eggs and poultry, Pink for prawn and onion, Grey for fertiliser, Black for petroleum, Round for potato, Red for meat and tomato."],
    ["Second Green Revolution","Aimed at the eastern states and at pulses, oilseeds and nutrition rather than at wheat and rice alone."]
   ]},

  {h:"Minerals, power and industry",
   rows:[
    ["The mineral belts","North-eastern plateau (Chotanagpur, Odisha, Jharkhand, West Bengal, Chhattisgarh) — the richest. South-western plateau (Karnataka, Goa, Tamil Nadu uplands). North-western (Rajasthan and Gujarat, with non-metallic minerals and petroleum)."],
    ["Iron ore","Odisha and Chhattisgarh lead, then Karnataka and Jharkhand. Hematite and magnetite; magnetite has the higher iron content."],
    ["Coal","Jharkhand and Odisha lead, then Chhattisgarh and West Bengal. Jharia, Bokaro, Raniganj and Korba are the big fields. Gondwana coal is the bulk of it; tertiary coal is found in the north-east."],
    ["Bauxite and manganese","Odisha leads both. Bauxite is the ore of aluminium."],
    ["Mica","Andhra Pradesh and Rajasthan, with the Koderma belt in Jharkhand historically the most famous."],
    ["Copper and gold","Copper from Khetri in Rajasthan and Singhbhum in Jharkhand. Gold from the Kolar and Hutti fields in Karnataka."],
    ["Petroleum","Mumbai High is the largest field; then Gujarat (Ankleshwar, Kalol) and Assam (Digboi, Naharkatiya, Moran). Digboi is the oldest oil field in India."],
    ["Atomic minerals","Monazite sands of Kerala for thorium, uranium from Jaduguda in Jharkhand. India has one of the world's largest thorium reserves, which is the basis of the three-stage nuclear programme."],
    ["Iron and steel plants, and who helped build them","Bhilai (Chhattisgarh) and Bokaro (Jharkhand) with Soviet help; Rourkela (Odisha) with German; Durgapur (West Bengal) with British. TISCO at Jamshedpur was the first, privately built in 1907."],
    ["Why the steel plants sit where they do","All of them are on or beside the Chotanagpur belt, where coal, iron ore and manganese lie close together and transport costs are therefore least."],
    ["Cotton textiles and the exception","Historically concentrated in Maharashtra and Gujarat — Mumbai was Cotton-opolis — because of the black soil, the humid climate, the port and the capital. Tamil Nadu now has the largest number of mills, Coimbatore most of all."]
   ]}
 ]},

/* ===================================================================
   7. THE EARTH AND THE WORLD
   =================================================================== */
{id:"world", n:"The Earth and world geography", hy:1,
 w:"The solar system, latitude and longitude, the layers of the atmosphere, and the continents, oceans and boundary lines that get asked.",
 intro:"The part of geography that is not about India. SSC keeps to a narrow band of it: the solar system and the earth's motions, the grid of latitude and longitude and what the standard meridian is for, the layers of the atmosphere in order, and a short list of straits, canals and boundary lines.",
 blocks:[

  {h:"The Earth and the solar system",
   rows:[
    ["The planets in order","Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Pluto was reclassified a dwarf planet in 2006. Mercury is the smallest and Jupiter the largest."],
    ["The ones with names worth knowing","Venus is the hottest planet and the Earth's twin in size; Mars is the red planet; Jupiter the largest; Saturn the least dense, less dense than water; Uranus rotates on its side; Venus and Uranus rotate east to west."],
    ["Earth's two motions","Rotation on its axis, once in about 23 hours 56 minutes, giving day and night. Revolution round the sun in 365 days 6 hours, giving the year and, with the 23.5° tilt, the seasons."],
    ["Why there are seasons","The axial tilt of 23.5°, not the distance from the sun. The Earth is in fact nearest the sun in early January (perihelion) and farthest in early July (aphelion)."],
    ["Solstices and equinoxes","21 June: summer solstice, sun vertical over the Tropic of Cancer. 22 December: winter solstice, over the Tropic of Capricorn. 21 March and 23 September: equinoxes, sun over the equator and day equal to night everywhere."],
    ["The moon","Takes about 27.3 days to go round the Earth and the same time to rotate, which is why the same face is always turned towards us. Moonlight takes about 1.3 seconds to reach us; sunlight about 8 minutes 20 seconds."],
    ["The eclipses","A solar eclipse needs the moon between the sun and the Earth, on a new moon. A lunar eclipse needs the Earth between them, on a full moon."],
    ["The Earth's interior","Crust, mantle, outer core and inner core. The outer core is liquid and the inner core solid; the core is mainly iron and nickel, which is why it is called NiFe. Mohorovicic discontinuity between crust and mantle; Gutenberg between mantle and core."]
   ]},

  {h:"Latitude, longitude and time",
   rows:[
    ["Latitude","Parallels, running east-west, measured north and south of the equator from 0° to 90°. They are of unequal length — the equator is the longest."],
    ["Longitude","Meridians, running north-south from pole to pole, measured east and west of the Prime Meridian at Greenwich from 0° to 180°. All of them are the same length."],
    ["The important parallels","Equator 0°; Tropic of Cancer 23.5° N; Tropic of Capricorn 23.5° S; Arctic Circle 66.5° N; Antarctic Circle 66.5° S."],
    ["The Tropic of Cancer in India","It passes through eight states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram. It divides India into roughly the tropical south and the subtropical north."],
    ["The standard meridian","82°30′ E, passing through Mirzapur in Uttar Pradesh, giving Indian Standard Time at 5 hours 30 minutes ahead of GMT. A whole longitude is 4 minutes of time, so India's 30° span would otherwise mean two hours between its ends."],
    ["The International Date Line","Roughly along 180°, bent to avoid land. Crossing it westwards you lose a day; eastwards you gain one."],
    ["The great circle","Any circle whose plane passes through the centre of the Earth. The equator is the only parallel that is one; every meridian pair makes one. The shortest route between two points follows a great circle."]
   ]},

  {h:"The atmosphere",
   rows:[
    ["The layers in order","Troposphere, stratosphere, mesosphere, thermosphere (with the ionosphere in it), exosphere."],
    ["Troposphere","The lowest, about 8 km at the poles and 18 km at the equator. All weather happens here, and temperature falls with height at about 6.5°C per kilometre."],
    ["Stratosphere","Up to about 50 km, with the ozone layer in it absorbing ultraviolet. Temperature rises with height here, which makes it stable — and which is why aircraft fly in it."],
    ["Mesosphere","Up to about 80 km. The coldest layer, and where meteors burn up."],
    ["Thermosphere and ionosphere","Temperature rises very steeply. The ionised layers reflect radio waves back to Earth, which is what makes long-distance radio possible. Aurorae occur here."],
    ["Composition of dry air","Nitrogen about 78 per cent, oxygen about 21 per cent, argon about 0.93 per cent, carbon dioxide about 0.04 per cent."]
   ]},

  {h:"Continents, oceans and the lines that get asked",
   rows:[
    ["The continents by size","Asia, Africa, North America, South America, Antarctica, Europe, Australia. Asia is about 30 per cent of the land."],
    ["The oceans by size","Pacific, Atlantic, Indian, Southern, Arctic. The Mariana Trench in the Pacific is the deepest point on Earth."],
    ["Durand Line","India (historically) and now Pakistan with Afghanistan, drawn in 1893."],
    ["Radcliffe Line","India and Pakistan, drawn in 1947 by Cyril Radcliffe."],
    ["McMahon Line","India and China, from the Simla Convention of 1914; China does not accept it."],
    ["38th parallel, 49th parallel and the Line of Control","North and South Korea; the United States and Canada; India and Pakistan in Jammu and Kashmir since the Simla Agreement of 1972."],
    ["Maginot, Siegfried, Oder-Neisse and Hindenburg","France–Germany; Germany–France (the German side); Germany–Poland; Germany–Poland after the First World War."],
    ["The straits","Palk Strait between India and Sri Lanka; Strait of Hormuz at the mouth of the Persian Gulf; Bab-el-Mandeb between the Red Sea and the Gulf of Aden; Malacca between Malaysia and Sumatra; Bering between Asia and North America; Gibraltar between Europe and Africa."],
    ["The canals","Suez joins the Mediterranean to the Red Sea, with no locks, opened 1869 and nationalised 1956. Panama joins the Atlantic to the Pacific, with locks, opened 1914."],
    ["Local winds elsewhere","Chinook: warm, Rockies — the snow-eater. Foehn: warm, Alps. Mistral: cold, from France to the Mediterranean. Sirocco: hot and dusty, Sahara to southern Europe. Harmattan: dry, West Africa — the doctor. Khamsin: Egypt. Bora: cold, Adriatic."],
    ["Grasslands by name","Prairies (North America), Pampas (South America), Steppes (Eurasia), Veld (South Africa), Downs (Australia), Canterbury (New Zealand), Savanna (tropical Africa), Llanos and Campos (South America), Selvas (the Amazon forest, not grassland)."]
   ]}
 ]}

],

/* ===================================================================
   CONFUSED PAIRS
   =================================================================== */
confusions: [
 {k:"Highest peak in India against highest peak entirely within India",
  rows:[
   ["Highest in India","K2 or Godwin Austen, 8,611 m, in the Karakoram — standing in the part of the Kashmir region administered by Pakistan."],
   ["Highest in India's undisputed territory","Kanchenjunga, 8,586 m, but it sits on the Sikkim–Nepal border."],
   ["Highest lying wholly within India","Nanda Devi, 7,816 m, in Uttarakhand."]],
  note:"Three different mountains for three different wordings. Read which one the question actually asks for."},

 {k:"Greater, Lesser and Outer Himalaya",
  rows:[
   ["Greater Himalaya (Himadri)","Innermost and highest, about 6,000 m, continuous, granite core, all the big peaks."],
   ["Lesser Himalaya (Himachal)","3,700 to 4,500 m, the hill stations, Pir Panjal and Dhauladhar."],
   ["Shiwalik (Outer)","900 to 1,100 m, loose sediment, duns on its inner side."]],
  note:"If the question gives a height band it is asking which range; if it gives a range it usually wants what is on either side."},

 {k:"Bhabar, terai, bhangar and khadar",
  rows:[
   ["Bhabar","Pebble belt at the foot of the Shiwaliks; streams sink into it."],
   ["Terai","Marshy belt just south of the bhabar, where those streams come back up."],
   ["Bhangar","Older alluvium, above flood level, with kankar nodules, less fertile."],
   ["Khadar","Newer alluvium of the floodplain, silted every year, most fertile."]],
  note:"The first two are a north-south pair in the sub-Himalaya; the last two are old against new alluvium anywhere in the plain."},

 {k:"Western Ghats against Eastern Ghats",
  rows:[
   ["Western Ghats","Continuous, higher (900 to 1,600 m), crossed only at passes, source of the peninsular rivers, a biodiversity hotspot. Anamudi, 2,695 m."],
   ["Eastern Ghats","Discontinuous, lower (about 600 m), broken by the rivers crossing them. Mahendragiri, 1,501 m."]],
  note:"They meet at the Nilgiris. The Western Ghats are higher everywhere, which also decides which side is the rain shadow."},

 {k:"Narmada and Tapi against the east-flowing rivers",
  rows:[
   ["Narmada and Tapi","Flow west through rift valleys into the Arabian Sea and make ESTUARIES."],
   ["Mahanadi, Godavari, Krishna, Kaveri","Flow east down the tilt of the plateau into the Bay of Bengal and make DELTAS."]],
  note:"Rift valley plus submerging coast equals estuary. Everything else about the peninsula follows the eastward tilt."},

 {k:"South-west monsoon against the retreating monsoon",
  rows:[
   ["South-west monsoon","June to September, onshore, about 75 per cent of the annual rain, wets almost the whole country."],
   ["Retreating or north-east monsoon","October to December, offshore, but picks up moisture over the Bay and gives Tamil Nadu and the Coromandel coast their main rain."]],
  note:"Tamil Nadu is the exception that this pair exists to explain: it is in rain shadow during the first and depends on the second."},

 {k:"Black soil against laterite soil",
  rows:[
   ["Black (regur)","From weathered basalt on the Deccan trap. Holds moisture, self-ploughing, rich in iron and lime, poor in nitrogen. Cotton."],
   ["Laterite","From heavy leaching in high rain and heat. Poor in nutrients, hardens into brick. Tea, coffee, cashew, rubber."]],
  note:"Black soil is made by what the parent rock is; laterite by what the climate takes away."},

 {k:"El Niño against La Niña",
  rows:[
   ["El Niño","Warming of the eastern equatorial Pacific off Peru. Associated with a WEAK Indian monsoon."],
   ["La Niña","The cold phase of the same cycle. Associated with a STRONG Indian monsoon."]],
  note:"El Niño means the child, for its appearance around Christmas. The pressure see-saw that goes with it is the Southern Oscillation."},

 {k:"Ten Degree, Nine Degree and Eleven Degree channels",
  rows:[
   ["Ten Degree Channel","Separates the Andaman group from the Nicobar group."],
   ["Nine Degree Channel","Separates Minicoy from the rest of Lakshadweep."],
   ["Eight Degree Channel","Separates Minicoy from the Maldives."],
   ["Eleven Degree Channel","Separates the Amindivi islands from Kavaratti."]],
  note:"All four are in the news often enough to be asked, and the numbers are the latitudes they run along."},

 {k:"Which pass is in which state",
  rows:[
   ["Ladakh region","Zoji La, Khardung La, Chang La, Karakoram, Aghil, Lanak La."],
   ["Himachal Pradesh","Rohtang, Shipki La, Bara Lacha La, Kunzum."],
   ["Uttarakhand","Mana, Niti, Lipulekh."],
   ["Sikkim","Nathu La, Jelep La."],
   ["Arunachal Pradesh","Bomdi La, Diphu, Pangsau, Yonggyap."]],
  note:"The question is nearly always which two places a pass joins, so learn each with its road rather than with its height."}
]

};
