/* The Article Machine - data-geo-maps.js
   The Geography mind maps: one for each of the seven topics, and one
   overview of the whole subject whose branches open those seven.

   Nothing here is new. Every line is taken from the tables in
   data-geography.js, which is where the facts are checked and where the
   fuller statement of each one lives. A map is the same material reduced to
   keywords, so that a topic can be revised in two minutes rather than twenty.

   Fields:  GEO_MAPS                  the overview map
              hub, sub                the centre of the map
              br[]                    branches: h title, to (a topic id: the
                                      branch opens that topic's map), lv
                                      leaves, m an optional memory hook
            GEO_MAPS.topics[id]       one map per topic, same shape, no `to`

   A leaf is a string, or [key, text]. The key is the PROMPT - a pass, a soil,
   a river - and it stays visible when the map is covered for recall; the text
   is the answer and is what gets covered. ==text== marks the words the
   question turns on.                                                      */

window.GEO_MAPS = {

hub: "Geography",
sub: "7 topics · the whole subject",
br: [
  { h: "The Himalayas", to: "himalayas",
    lv: [["3 ranges", "Shiwalik, Lesser, Great — ==south to north==, youngest to tallest"],
         ["4 divisions", "Punjab, Kumaon, Nepal, Assam — counted off ==five rivers=="],
         ["Highest in India", "==K2== as claimed; ==Nanda Devi== entirely within India"],
         ["Passes", "==Zoji La==, Rohtang, Shipki La, Nathu La — the pass question"],
         ["Siachen", "==longest glacier== in India, about 76 km"]] },

  { h: "The physical divisions", to: "physiography",
    lv: [["Six", "mountains, plain, plateau, desert, coasts, ==islands=="],
         ["The plain", "bhabar, terai, bhangar, ==khadar== — the four belts"],
         ["The plateau", "==oldest== land in India, Gondwana shield, tilts ==east=="],
         ["The two Ghats", "Western ==continuous== and higher; Eastern ==broken== by rivers"],
         ["Indira Point", "southernmost point of the ==Republic==, on Great Nicobar"]] },

  { h: "The drainage system", to: "drainage",
    lv: [["The split", "Himalayan ==snow-fed, perennial==; peninsular ==rain-fed, seasonal=="],
         ["Godavari", "==longest== peninsular river, the Dakshina Ganga"],
         ["Narmada, Tapi", "west through ==rift valleys==, and so ==estuaries, not deltas=="],
         ["Kunchikal", "==highest== waterfall; Nohkalikai the tallest ==plunge=="]] },

  { h: "Climate and the monsoon", to: "climate",
    lv: [["Monsoon", "from mausim, ==season== — a wind that ==reverses=="],
         ["The burst", "Kerala ==1 June==, Delhi ==29 June==, all India by ==mid-July=="],
         ["Two branches", "==Arabian Sea== over the Ghats; ==Bay== up the Ganga plain"],
         ["Tamil Nadu", "rain from the ==retreating== monsoon, October–November"],
         ["El Niño", "warm Pacific, ==weak== monsoon; La Niña ==strong=="]] },

  { h: "Soils and vegetation", to: "soils",
    lv: [["Alluvial", "about ==40 per cent== of the land; rich in ==potash==, poor in ==nitrogen=="],
         ["Black (regur)", "weathered ==basalt==, self-ploughing, ==cotton=="],
         ["Laterite", "leached by heavy rain; ==tea, coffee, cashew, rubber=="],
         ["Forest cover", "about ==21–22 per cent==, against the ==33 per cent== target"]] },

  { h: "Agriculture and industry", to: "agriculture",
    lv: [["Kharif, rabi, zaid", "monsoon-sown, winter-sown, ==short summer=="],
         ["Green Revolution", "==wheat== first, mid-1960s — ==Swaminathan==, Borlaug"],
         ["Iron and coal", "both lead by ==Odisha== and the ==Chotanagpur== belt"],
         ["The steel plants", "Bhilai, Bokaro ==Soviet==; Rourkela ==German==; Durgapur ==British=="]] },

  { h: "The Earth and the world", to: "world",
    lv: [["The tilt", "==23.5°== gives the seasons — ==not== the distance from the sun"],
         ["IST", "==82°30′ E== at Mirzapur, ==5½ hours== ahead of GMT"],
         ["Troposphere", "==all weather==; lapse rate ==6.5°C== a kilometre"],
         ["The lines", "Durand ==1893==, Radcliffe ==1947==, McMahon ==1914=="]] }
],

topics: {

/* ===================================================== THE HIMALAYAS */
himalayas: {
hub: "The Himalayas",
sub: "Three ranges, four divisions, the peaks and the passes",
br: [
  { h: "The three ranges, south to north",
    lv: [["Shiwalik", "==southernmost and youngest==, 900–1,100 m, loose river sediment"],
         ["The duns", "flat valleys between Shiwalik and Lesser — ==Dehra Dun== the largest"],
         ["Lesser (Himachal)", "3,700–4,500 m; ==every hill station==; ==Pir Panjal== the longest range"],
         ["Great (Himadri)", "innermost, ==most continuous==, about 6,000 m, perennial snow"],
         ["Trans-Himalaya", "Karakoram, Ladakh, Zaskar, Kailash — ==the oldest==, in rain shadow"],
         ["The whole arc", "about ==2,400 km==, 400 km wide in Kashmir, 150 km in Arunachal"]],
    m: "Oldest at the back, youngest at the front — and the tallest in the middle." },

  { h: "How they were made, and the two bends",
    lv: [["How", "==Indian plate== into Eurasian; the ==Tethys== sea floor crumpled up"],
         ["Still rising", "a few ==centimetres a year== — and the same collision makes the earthquakes"],
         ["Western bend", "at ==Nanga Parbat==, where the Indus cuts its gorge"],
         ["Eastern bend", "at ==Namcha Barwa==, where the Tsangpo becomes the ==Dihang=="],
         ["The proof", "==marine fossils== high in the range — Spiti and Zanskar"],
         ["The name", "==hima== snow + ==alaya== abode"]] },

  { h: "The four divisions, west to east",
    lv: [["The boundaries", "==Indus, Satluj, Kali, Teesta, Dihang== — five rivers, four divisions"],
         ["Punjab/Kashmir", "Indus to Satluj, about ==560 km== — Karakoram, Zaskar, the Kashmir valley"],
         ["Kumaon", "Satluj to Kali, about ==320 km== — the ==shortest==. Nanda Devi, the four dhams"],
         ["Nepal", "Kali to Teesta, about ==800 km== — the ==longest==. Everest, Kanchenjunga"],
         ["Assam", "Teesta to Dihang, about ==720 km== — Namcha Barwa, the ==wettest slopes=="],
         ["Purvanchal", "the arm running ==south== from the eastern bend: Patkai, Naga, Mizo hills"]],
    m: "Name the two rivers and the division between them falls out." },

  { h: "The peaks — and the one word",
    lv: [["Everest", "==8,848.86 m==, Nepal–China. Revised by the joint survey in ==2020=="],
         ["K2", "8,611 m — highest ==in India== as India claims it, in the Karakoram"],
         ["Kanchenjunga", "8,586 m — highest in India's ==undisputed== territory, on the Sikkim border"],
         ["Nanda Devi", "7,816 m — highest lying ==entirely within== India. Uttarakhand"],
         ["Nanga Parbat", "8,126 m, the ==Killer Mountain==, at the western bend"],
         ["Anamudi", "2,695 m — highest in ==South India== and in the Western Ghats"]],
    m: "In India is K2; entirely within India is Nanda Devi. Two mountains, one word apart." },

  { h: "The passes — what joins what",
    lv: [["Zoji La", "Ladakh, on the ==Srinagar–Leh== road"],
         ["Banihal", "through the Pir Panjal, ==Jammu–Srinagar== — the ==Jawahar== tunnel"],
         ["Khardung La", "north of Leh to the ==Nubra== valley and Siachen"],
         ["Rohtang", "Himachal, ==Kullu to Lahaul== — the ==Atal== tunnel under it, 2020"],
         ["Shipki La", "Himachal, where the ==Satluj enters India=="],
         ["Nathu La", "Sikkim, the ==India–China== trade route, reopened ==2006=="],
         ["Bomdi La", "Arunachal, joining ==Tawang== with the Assam plains"],
         ["Palghat gap", "not Himalayan — the ==30 km== break carrying ==Coimbatore–Kochi=="]] },

  { h: "Glaciers, valleys and lakes",
    lv: [["Siachen", "eastern Karakoram, about ==76 km== — the ==longest in India==; the Nubra rises from it"],
         ["Gangotri", "the ==Bhagirathi== issues from its snout at ==Gaumukh=="],
         ["Bara Shigri", "Lahaul — the ==largest glacier in Himachal=="],
         ["Wular", "==largest freshwater lake== in India, ==tectonic==, fed by the Jhelum"],
         ["Pangong Tso", "Ladakh — long and ==brackish==, lying across the ==Line of Actual Control=="],
         ["Loktak", "Manipur — floating ==phumdis==, and ==Keibul Lamjao==, the only floating park"],
         ["Karewas", "glacial clay on the Kashmir valley floor — ==saffron== at Pampore"]] },

  { h: "What the Himalayas actually do",
    lv: [["The wall", "they block the ==cold dry winds== of Central Asia"],
         ["The monsoon", "they force it to ==rise and shed its rain== — without them, desert"],
         ["Perennial rivers", "==snowmelt== keeps Indus, Ganga and Brahmaputra flowing in the dry season"],
         ["The plain", "the northern plain ==is their sediment=="],
         ["Rain shadow", "==Ladakh, Lahaul and Spiti== are cold deserts behind them"]] }
]},

/* ========================================== THE PHYSICAL DIVISIONS */
physiography: {
hub: "The physical divisions",
sub: "Six divisions, three belts, two Ghats, two coasts",
br: [
  { h: "The six, and the shares",
    lv: [["The six", "northern mountains, the ==plain==, the ==plateau==, the desert, the coasts, the islands"],
         ["By relief", "plains ==43%==, plateaus ==28%==, hills 18%, mountains ==11%=="],
         ["Area", "==32.87 lakh sq km== — ==seventh== largest, ==2.4%== of the world's land"],
         ["Extent", "==8°4′ N to 37°6′ N==, ==68°7′ E to 97°25′ E=="],
         ["Not equal", "north–south ==3,214 km==, east–west ==2,933 km=="],
         ["Indira Point", "southernmost of the ==Republic==; ==Kanyakumari== of the mainland"]] },

  { h: "The northern plain, in three belts",
    lv: [["Bhabar", "8–16 km of ==pebbles== at the foot — streams ==go underground=="],
         ["Terai", "where they ==re-emerge== — wet, marshy, once heavy forest"],
         ["Bhangar", "the ==older== alluvium, above flood level, with ==kankar== lime nodules"],
         ["Khadar", "the ==newer== alluvium, renewed each year — the ==most fertile== land"],
         ["Three sections", "==Punjab== (with doabs), ==Ganga==, ==Brahmaputra=="],
         ["Why it matters", "==7 lakh sq km== of deep flat alluvium — the most densely settled region"]],
    m: "Down the slope in order: bhabar, terai, bhangar, khadar." },

  { h: "The peninsular plateau",
    lv: [["What it is", "the ==oldest and most stable== land, the ==Gondwana== shield — a ==tableland=="],
         ["Central Highlands", "==north of the Narmada== — Malwa, with Vindhyas south and ==Aravallis== north-west"],
         ["Deccan", "south of the Narmada, ==tilts east== — which is why its rivers go to the ==Bay=="],
         ["Deccan trap", "==basalt== poured out about the end of the Cretaceous → ==black cotton soil=="],
         ["Chotanagpur", "the ==richest mineral belt==, drained by the ==Damodar=="],
         ["Meghalaya plateau", "Garo, Khasi, Jaintia — ==detached== from the block by the ==Malda gap=="]] },

  { h: "The two Ghats",
    lv: [["Western (Sahyadri)", "==continuous==, crossed only by passes, 900–1,600 m, ==rising southwards=="],
         ["Eastern", "==discontinuous==, ==broken by the rivers==, lower — about 600 m"],
         ["The highest of each", "==Anamudi== 2,695 m; ==Mahendragiri== 1,501 m"],
         ["Where they meet", "the ==Nilgiris=="],
         ["Palghat gap", "the ==30 km== break south of the Nilgiris"],
         ["Aravallis", "the ==oldest fold mountains== in India — ==Guru Shikhar== 1,722 m"]] },

  { h: "The desert, the coasts, the islands",
    lv: [["Thar", "west of the Aravallis, under ==150 mm==; the ==Luni== ends in the ==Rann=="],
         ["Why it is dry", "it lies ==parallel to== the Arabian Sea branch, not across it"],
         ["Western coast", "narrow and ==submerged== — which gives it ==natural harbours==; Malabar ==kayals=="],
         ["Eastern coast", "broad and ==emergent==, built of ==deltas== — Northern Circars, Coromandel"],
         ["Lakshadweep", "==coral==, ==36== islands, capital ==Kavaratti=="],
         ["Andaman & Nicobar", "==elevated==, capital ==Port Blair==; ==Barren Island== the only active volcano"],
         ["The channels", "==Ten Degree== Andaman–Nicobar; ==Nine Degree== Minicoy; ==Eleven Degree== Amindivi"]] }
]},

/* ===================================================== THE DRAINAGE */
drainage: {
hub: "The drainage system",
sub: "Himalayan against peninsular, east against west",
br: [
  { h: "Himalayan against peninsular",
    lv: [["Water", "==snow and glacier== melt, so ==perennial== — against ==rain only==, so seasonal"],
         ["Age and valley", "==young==, deep ==V-shaped gorges== — against ==old==, broad shallow valleys"],
         ["Course", "==meandering and shifting== — against ==fixed==, over hard rock"],
         ["Pattern", "==antecedent==, older than the mountains — against ==consequent==, following the slope"],
         ["The systems", "Indus, Ganga, Brahmaputra — against ==Mahanadi, Godavari, Krishna, Kaveri=="]],
    m: "One difference — snow or rain — answers most of the questions here." },

  { h: "The east-flowing rivers",
    lv: [["Mahanadi", "Chhattisgarh into Odisha — the ==Hirakud== dam"],
         ["Godavari", "==longest peninsular river==, ~1,465 km, the ==Dakshina Ganga==; rises ==Trimbakeshwar=="],
         ["Krishna", "~1,400 km, ==second longest==; rises near ==Mahabaleshwar==; Nagarjuna Sagar"],
         ["Kaveri", "rises at ==Talakaveri==; the ==most dependable== — fed by ==both== monsoons"],
         ["The largest delta", "==Ganga–Brahmaputra==, the Sundarbans — largest in the world"]] },

  { h: "The west-flowing rivers",
    lv: [["Narmada", "from ==Amarkantak==, a ==rift valley== between Vindhya and Satpura"],
         ["Tapi", "from ==Betul==, a ==parallel rift==, also to the Gulf of Khambhat"],
         ["Why estuaries", "a ==narrow rift== carries the silt ==straight out to sea== — so no delta"],
         ["Luni", "the only river of the ==Thar==, ending in the ==Rann of Kutch=="],
         ["Sharavati", "Karnataka — it makes the ==Jog== falls"]] },

  { h: "The waterfalls",
    lv: [["Kunchikal", "Karnataka, on the Varahi — the ==highest in India==, about 455 m"],
         ["Nohkalikai", "Meghalaya — the tallest ==plunge== fall, one ==unbroken drop==, about 340 m"],
         ["Jog (Gersoppa)", "on the ==Sharavati==, 253 m in ==four leaps== — ==not== the highest"],
         ["Chitrakote", "on the ==Indravati== — the ==widest==, the Niagara of India"],
         ["Dhuandhar", "on the ==Narmada== at Jabalpur, by the Marble Rocks"]],
    m: "Kunchikal is higher in total; Nohkalikai falls furthest in one go. Both superlatives are true." },

  { h: "The drainage patterns",
    lv: [["Dendritic", "a ==tree and its branches==, where rock is uniform — the Ganga plain"],
         ["Trellis", "tributaries at ==right angles==, in folded country"],
         ["Radial", "==outwards from a high== — the rivers off ==Amarkantak=="],
         ["Centripetal", "==inwards into a basin== — ==Loktak== in Manipur"]] }
]},

/* ============================================ CLIMATE AND MONSOON */
climate: {
hub: "Climate and the monsoon",
sub: "What drives it, the four seasons, the rain",
br: [
  { h: "What drives the monsoon",
    lv: [["The word", "from ==mausim==, season — a wind that ==reverses== between summer and winter"],
         ["Differential heating", "==land heats faster==; a ==low== forms over north-west India and draws air in"],
         ["ITCZ", "shifts ==north== in summer over the Ganga plain and pulls the ==south-east trades== across"],
         ["Coriolis", "deflects them ==right==, so they arrive as the ==south-west== monsoon"],
         ["Tibetan plateau", "heats strongly → high-level ==anticyclone== → the ==easterly jet=="],
         ["The jet streams", "the ==westerly jet's withdrawal== north is the signal for the ==burst=="]] },

  { h: "El Niño and the rest",
    lv: [["El Niño", "warm ==eastern Pacific== → a ==weak== Indian monsoon"],
         ["La Niña", "the opposite → a ==strong== monsoon"],
         ["Southern Oscillation", "the pressure see-saw between ==Tahiti and Darwin=="],
         ["ENSO", "the ==two together=="],
         ["Indian Ocean Dipole", "a ==positive== dipole can ==offset== an El Niño"]] },

  { h: "The four seasons",
    lv: [["Cold", "mid-==November to February==; north-east trades are ==dry== — except over ==Tamil Nadu=="],
         ["Western disturbances", "in from the ==Mediterranean== — the rain the ==rabi== crop lives on (==mahawat==)"],
         ["Hot", "==March to May== — the ==loo==, dust storms, local thunderstorms"],
         ["South-west monsoon", "==June to September== — about ==75 per cent== of the year's rain"],
         ["Retreating", "==October–November== — ==October heat==, and Tamil Nadu's ==main rain=="]] },

  { h: "The burst, and the two branches",
    lv: [["The dates", "Kerala ==1 June==, Mumbai ==10 June==, Delhi ==29 June==, all India by ==mid-July=="],
         ["Arabian Sea branch", "strikes the ==Western Ghats== — the ==Deccan== left in ==rain shadow=="],
         ["Bay of Bengal branch", "deflected by the ==Arakan Yoma==, up the Ganga plain, turned ==west=="],
         ["Break in the monsoon", "==dry spells inside the season==, as the trough shifts — worse for a crop than the total"],
         ["Tamil Nadu", "rain-shadowed in summer, so it waits for the ==retreating== monsoon"]] },

  { h: "Rainfall, local winds, cyclones",
    lv: [["Wettest", "==Mawsynram==, with Cherrapunji beside it — the ==funnel== of the Khasi hills"],
         ["Driest", "==Jaisalmer==; the Thar under ==150 mm== a year"],
         ["Loo", "the hot dry wind of the ==northern plains== in May and June"],
         ["Mango shower", "pre-monsoon rain in ==Kerala== and coastal Karnataka"],
         ["Kalbaisakhi", "the violent ==Bengal== evening thunderstorm; ==Bardoli chheerha== in Assam"],
         ["Cyclones", "far more in the ==Bay== than the Arabian Sea; ==Oct–Nov== and ==Apr–May=="],
         ["Koeppen", "==Aw==, tropical savanna, covers most of the peninsula"]] }
]},

/* ========================================== SOILS AND VEGETATION */
soils: {
hub: "Soils and vegetation",
sub: "Eight soils, five forest types",
br: [
  { h: "The three big soils",
    lv: [["Alluvial", "about ==40 per cent== of the land; rich in ==potash and lime==, poor in ==nitrogen=="],
         ["", "divided into ==khadar== (new) and ==bhangar== (old) — wheat, rice, sugarcane, jute"],
         ["Black (regur)", "weathered ==basalt== of the Deccan trap; ==self-ploughing==; ==cotton== above all"],
         ["", "rich in ==iron, lime, magnesia==, poor in ==nitrogen and phosphorus=="],
         ["Red and yellow", "on ==crystalline== rock where rain is low; red from its ==iron=="]] },

  { h: "The other five",
    lv: [["Laterite", "heavy rain ==leaches the silica== away — ==tea, coffee, cashew, rubber==; hardens to ==brick=="],
         ["Arid", "western Rajasthan, sandy and saline — ==bajra and jowar== under irrigation"],
         ["Saline/alkaline", "usara, reh, kallar — made worse by ==over-irrigation==; treated with ==gypsum=="],
         ["Peaty and marshy", "high rain and humidity, little decomposition — ==very high organic== content"],
         ["Forest and mountain", "varies with ==altitude==; acidic high up, fertile in the valleys"]] },

  { h: "Erosion, and the answers",
    lv: [["Gully", "carves the ==ravines== — the ==Chambal== badlands"],
         ["Sheet", "strips the topsoil ==evenly==, and so is ==harder to see=="],
         ["The remedies", "==contour ploughing, terracing, strip cropping, shelter belts=="]] },

  { h: "Vegetation, by rainfall",
    lv: [["Evergreen", "over ==200 cm== — Western Ghats, Andamans, north-east. ==Rosewood, mahogany, ebony=="],
         ["Deciduous", "==70–200 cm== — the ==most widespread== type. ==Teak, sal, shisham=="],
         ["Thorn and scrub", "under ==70 cm== — Rajasthan, Gujarat. ==Acacia, kikar, khair=="],
         ["Montane", "by altitude: deciduous, ==pine and deodar==, silver fir, alpine grass, tundra"],
         ["Mangrove", "where ==fresh and salt water meet== — the ==sundari== tree names the Sundarbans"]] },

  { h: "Cover, and what protects it",
    lv: [["Forest cover", "about ==21–22 per cent==, against the ==33 per cent== policy target"],
         ["Most forest", "==Madhya Pradesh== by area; ==Mizoram== by share of its own area"],
         ["Biosphere reserves", "==eighteen==; ==Nilgiri (1986)== was the first"],
         ["Project Tiger", "==1973==; Project Elephant ==1992=="],
         ["First national park", "==Jim Corbett==, ==1936==, as Hailey National Park"],
         ["Ramsar", "==Chilika== and ==Keoladeo==, both ==1981==, were the first two"]] }
]},

/* ================================= AGRICULTURE, MINERALS, INDUSTRY */
agriculture: {
hub: "Agriculture and industry",
sub: "Three seasons, the leading states, the belts",
br: [
  { h: "The three cropping seasons",
    lv: [["Kharif", "sown with the ==monsoon==, June–July; harvested Sept–Oct. ==Rice, cotton, jute=="],
         ["Rabi", "sown ==Oct–Dec==, harvested Apr–May. ==Wheat, gram, mustard, barley=="],
         ["Zaid", "the ==short summer== season, March–June, on ==irrigation==. ==Melons==, vegetables"],
         ["Why", "wheat wants a ==cool growing season==; rice wants ==standing water and heat=="]] },

  { h: "The crops and their states",
    lv: [["Rice", "==West Bengal== usually leads"],
         ["Wheat", "==Uttar Pradesh== on production; ==Punjab== on ==yield== per hectare"],
         ["Sugarcane", "==Uttar Pradesh== on production; ==Maharashtra== on ==recovery=="],
         ["Cotton", "==Gujarat== and Maharashtra, on the ==black soil=="],
         ["Jute", "==West Bengal==, by a wide margin — the ==golden fibre=="],
         ["Tea and coffee", "tea ==Assam==; coffee ==Karnataka== — arabica came to the ==Baba Budan== hills"],
         ["Rubber", "==Kerala==, by a long way"],
         ["Millets", "bajra ==Rajasthan==, jowar ==Maharashtra==, ragi ==Karnataka=="]] },

  { h: "The revolutions",
    lv: [["Green", "==wheat== then rice, from the ==mid-1960s== — ==Swaminathan==, Borlaug"],
         ["White", "milk — ==Operation Flood, 1970==, ==Kurien==, the ==Anand== model"],
         ["The colours", "Blue ==fish==, Yellow ==oilseeds==, Golden ==horticulture==, Silver ==eggs==, Pink ==prawn=="],
         ["Second Green", "aimed ==east==, and at ==pulses and oilseeds== rather than wheat"]] },

  { h: "Minerals and power",
    lv: [["The richest belt", "the ==north-eastern plateau== — Chotanagpur, Odisha, Jharkhand, Chhattisgarh"],
         ["Iron ore", "==Odisha== and Chhattisgarh. ==Magnetite== has ==more iron== than hematite"],
         ["Coal", "==Jharkhand== and Odisha — ==Jharia, Bokaro, Raniganj, Korba=="],
         ["Bauxite, manganese", "==Odisha== leads both; bauxite is the ore of ==aluminium=="],
         ["Copper and gold", "==Khetri== and Singhbhum; ==Kolar== and Hutti"],
         ["Petroleum", "==Mumbai High== the largest field; ==Digboi== the ==oldest=="],
         ["Atomic", "==monazite== sands of Kerala for ==thorium==; ==Jaduguda== for uranium"]] },

  { h: "Steel and textiles",
    lv: [["Who helped build", "Bhilai and Bokaro ==Soviet==, Rourkela ==German==, Durgapur ==British=="],
         ["The first", "==TISCO== at Jamshedpur, ==1907==, privately built"],
         ["Why there", "all on the ==Chotanagpur== belt — ==coal, iron ore and manganese together=="],
         ["Cotton mills", "historically ==Maharashtra and Gujarat==; ==Tamil Nadu== now has the most, at ==Coimbatore=="]] }
]},

/* ===================================================== MINERALS */
minerals: {
hub: "Minerals and power",
sub: "The classes, the belts, mineral by mineral, and the fuels",
br: [
  { h: "How a mineral is classed",
    lv: [["Metallic, ferrous", "==iron ore==, ==manganese==, ==chromite==, ==nickel==, ==cobalt=="],
         ["Metallic, non-ferrous", "==copper==, ==bauxite==, ==lead==, ==zinc==, ==gold==, ==silver=="],
         ["Non-metallic", "==mica==, ==limestone==, ==dolomite==, ==gypsum==, ==phosphate=="],
         ["Fuel or energy", "==coal==, ==petroleum==, ==natural gas==, ==uranium==, ==thorium=="],
         ["Metallic sits in", "==igneous and metamorphic== rock, as ==veins and lodes=="],
         ["Non-metallic sits in", "==sedimentary== rock, as ==beds and layers==. ==Coal and oil are sedimentary=="],
         ["The oldest rocks", "the ==Dharwar system== holds most of India's ==metallic== wealth"]],
    m: "Metal in hard rock as a vein; everything else in soft rock as a layer." },

  { h: "The three mineral belts",
    lv: [["North-eastern plateau", "==Jharkhand==, ==Odisha==, ==Chhattisgarh==, ==West Bengal== — the ==richest=="],
         ["", "==iron, coal, manganese, bauxite, mica== — everything ==steel== needs, close together"],
         ["South-western plateau", "==Karnataka==, ==Goa==, ==Tamil Nadu==, ==Kerala=="],
         ["", "==iron, manganese, limestone==, and the ==gold==. ==No coal== but ==Neyveli lignite=="],
         ["North-western", "==Rajasthan== and ==Gujarat==, along the ==Aravalli=="],
         ["", "==copper, zinc, lead==, the ==building stones==, and the ==petroleum=="],
         ["Why the plain has none", "the ==peninsular plateau== is the old rock; the ==northern plain is alluvium=="]] },

  { h: "Iron ore, by grade",
    lv: [["Magnetite", "about ==70 per cent== iron. ==Black==, ==magnetic== — the ==best=="],
         ["Hematite", "==60 to 70==. ==Red== — ==most used==, and ==most of India's reserve=="],
         ["Limonite", "==40 to 60==. ==Yellow=="],
         ["Siderite", "==under 40==. ==Brown==, much impurity"],
         ["Who leads", "==Odisha==, about ==half== the country; then ==Chhattisgarh, Karnataka, Jharkhand=="],
         ["Bailadila", "==Chhattisgarh==, ==NMDC== — ==exported to Japan== through ==Visakhapatnam=="],
         ["Kudremukh", "==Karnataka== — sent as ==slurry by pipeline== to ==Mangaluru=="],
         ["Noamundi, Joda, Barbil", "==Jharkhand== and ==Odisha=="]],
    m: "Magnetite is the better ore; hematite is the one India actually has." },

  { h: "Which state leads",
    lv: [["Iron ore", "==Odisha=="],
         ["Manganese", "==Odisha==; then ==Madhya Pradesh, Maharashtra, Karnataka=="],
         ["Bauxite", "==Odisha== — ==Panchpatmali== in ==Koraput=="],
         ["Chromite", "==Odisha== — the ==Sukinda valley==, almost all of it"],
         ["Mica", "==Andhra Pradesh== on output; the ==Koderma== belt in ==Jharkhand== is the famous one"],
         ["Copper", "==Malanjkhand==, ==Madhya Pradesh==, the ==largest single deposit==; then ==Khetri== and ==Singhbhum=="],
         ["Gold", "==Karnataka== — ==Hutti==; ==Kolar closed in 2001=="],
         ["Lead and zinc", "==Rajasthan== — ==Zawar==, and ==Rampura Agucha== for zinc"],
         ["Diamond", "==Panna==, ==Madhya Pradesh=="],
         ["Gypsum, tungsten", "==Rajasthan== — ==Degana== for tungsten"]],
    m: "Odisha leads iron, manganese, bauxite and chromite. When a metal is asked and Odisha is an option, start there." },

  { h: "Coal",
    lv: [["Anthracite", "==80 to 95 per cent== carbon — the ==best==; in India ==only in Jammu and Kashmir=="],
         ["Bituminous", "==60 to 80== — the ==most used==, and the ==coking== coal"],
         ["Lignite", "==40 to 55== — ==brown coal==; ==Neyveli==, Tamil Nadu"],
         ["Peat", "==under 40== — barely a fuel"],
         ["Gondwana coal", "about ==250 million years==; ==96 to 98 per cent== of reserves; ==Damodar, Son, Mahanadi, Godavari=="],
         ["Tertiary coal", "about ==55 million years==; ==Assam, Meghalaya, Arunachal, Nagaland==; ==more sulphur=="],
         ["Jharia", "==Jharkhand== — the ==largest== field, and the best ==coking== coal"],
         ["Raniganj", "==West Bengal== — the ==oldest worked=="],
         ["Reserves or output", "==Jharkhand== the largest ==reserves==; ==Chhattisgarh and Odisha== have led ==production=="]],
    m: "Anthracite, bituminous, lignite, peat - best to worst, and the carbon falls at every step." },

  { h: "Petroleum, gas and the atom",
    lv: [["Mumbai High", "the ==largest field==, ==offshore==; found ==1974==, producing ==1976==, rig ==Sagar Samrat=="],
         ["Assam", "==Digboi==, ==Naharkatiya==, ==Moran== — the ==oldest== oil region"],
         ["Gujarat", "==Ankleshwar==, ==Kalol==, ==Mehsana=="],
         ["Newer basins", "==Krishna-Godavari==, ==Cauvery==, and ==Barmer== in ==Rajasthan=="],
         ["Digboi refinery", "==1901== — the ==oldest in India== and in ==Asia=="],
         ["Jamnagar", "the ==largest refinery in the world=="],
         ["HVJ pipeline", "==Hazira== to ==Vijaipur== to ==Jagdishpur== — the ==gas== trunk line"],
         ["Uranium", "==Jaduguda==, ==Jharkhand== — the ==first== mine; ==largest reserves== at ==Tummalapalle==, ==Andhra Pradesh=="],
         ["Thorium", "==monazite sands== of ==Kerala== — among the ==world's largest== reserves"]] },

  { h: "Power, steel and the rules",
    lv: [["First nuclear plant", "==Tarapur==, ==Maharashtra==, ==1969=="],
         ["The others", "==Rawatbhata==, ==Kalpakkam==, ==Narora==, ==Kakrapar==, ==Kaiga==, ==Kudankulam== the ==largest=="],
         ["Solar and wind", "solar ==Rajasthan and Gujarat==; wind ==Tamil Nadu, Gujarat, Karnataka=="],
         ["Geothermal, tidal", "==Manikaran== and ==Puga==; ==Gulf of Khambhat== and ==Gulf of Kachchh=="],
         ["First steel plant", "==TISCO==, ==Jamshedpur==, ==1907== — ==private=="],
         ["Soviet help", "==Bhilai== and ==Bokaro=="],
         ["German, British", "==Rourkela== West German; ==Durgapur== British"],
         ["The port plant", "==Visakhapatnam== — the ==only== one on a port"],
         ["GSI", "==1851==, ==Kolkata==. ==IBM== ==1948==, ==Nagpur==. ==NMDC== ==1958==, ==Hyderabad=="],
         ["The law", "the ==Mines and Minerals (Development and Regulation) Act, 1957=="]],
    m: "Every steel plant sits on the Chotanagpur belt except Visakhapatnam, which sits on a port." }
]},

/* ================================= THE EARTH AND WORLD GEOGRAPHY */
world: {
hub: "The Earth and the world",
sub: "The solar system, the lines, the atmosphere",
br: [
  { h: "The solar system",
    lv: [["In order", "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune"],
         ["Pluto", "==reclassified== a dwarf planet in ==2006=="],
         ["The named ones", "==Venus== hottest and Earth's twin; ==Jupiter== largest; ==Saturn== less dense than ==water=="],
         ["Backwards", "==Venus and Uranus== rotate ==east to west==; Uranus lies ==on its side=="],
         ["The moon", "==27.3 days== to orbit ==and== to rotate — which is why one ==face== is always turned to us"],
         ["Light", "sunlight ==8 min 20 s==; moonlight ==1.3 seconds=="]] },

  { h: "The Earth's motions",
    lv: [["Rotation", "==23 h 56 m== — day and night"],
         ["Revolution", "==365 days 6 hours== — the year"],
         ["Why seasons", "the ==23.5° tilt== — ==not== the distance from the sun"],
         ["Nearest and farthest", "==perihelion early January==, ==aphelion early July=="],
         ["Solstices", "==21 June== over ==Cancer==; ==22 December== over ==Capricorn=="],
         ["Equinoxes", "==21 March== and ==23 September== — over the ==equator==, day equal to night"]] },

  { h: "Inside the Earth",
    lv: [["The layers", "crust, mantle, ==outer core (liquid)==, ==inner core (solid)=="],
         ["NiFe", "the core is mainly ==nickel and iron=="],
         ["Mohorovicic", "between ==crust and mantle=="],
         ["Gutenberg", "between ==mantle and core=="]] },

  { h: "Latitude, longitude, time",
    lv: [["Parallels", "run ==east–west==, ==unequal== in length — the ==equator== is the longest"],
         ["Meridians", "run ==pole to pole==, and are ==all the same length=="],
         ["The key parallels", "Cancer ==23.5° N==, Capricorn ==23.5° S==, Arctic ==66.5° N=="],
         ["Tropic of Cancer", "crosses ==eight states==: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram"],
         ["IST", "==82°30′ E== at ==Mirzapur==, ==5½ hours== ahead of GMT"],
         ["One degree", "==4 minutes== of time — so India's 30° span would mean ==two hours=="],
         ["Date Line", "about ==180°==, bent to avoid land. West ==lose== a day, east ==gain== one"]] },

  { h: "The atmosphere",
    lv: [["Troposphere", "==8 km== at the poles, ==18 km== at the equator — ==all weather==; ==6.5°C== a km"],
         ["Stratosphere", "to ==50 km==, holds the ==ozone==; temperature ==rises==, so it is ==stable== — aircraft"],
         ["Mesosphere", "to ==80 km== — the ==coldest== layer, where ==meteors burn up=="],
         ["Ionosphere", "==reflects radio waves== back to Earth; the ==aurorae== are here"],
         ["Dry air", "nitrogen ==78%==, oxygen ==21%==, argon ==0.93%==, carbon dioxide ==0.04%=="]] },

  { h: "Lines, straits and winds",
    lv: [["Durand", "==1893== — now ==Pakistan–Afghanistan=="],
         ["Radcliffe", "==1947== — India–Pakistan, drawn by ==Cyril Radcliffe=="],
         ["McMahon", "==1914==, from the ==Simla Convention== — India–China; ==China does not accept it=="],
         ["The parallels", "==38th== Korea; ==49th== United States–Canada"],
         ["The straits", "==Palk== India–Sri Lanka; ==Hormuz==; ==Malacca==; ==Bering==; ==Gibraltar=="],
         ["The canals", "==Suez 1869==, ==no locks==; ==Panama 1914==, ==with locks=="],
         ["Local winds", "==Chinook== the snow-eater; ==Mistral== cold; ==Sirocco== hot; ==Harmattan== the doctor"],
         ["Grasslands", "==Prairies==, ==Pampas==, ==Steppes==, ==Veld==, ==Downs==, ==Savanna=="]] }
]}

}};
