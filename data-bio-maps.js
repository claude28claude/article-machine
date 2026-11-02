/* The Article Machine - data-bio-maps.js
   The Biology mind maps: one for each of the three topics, and one overview
   whose branches open them.

   Nothing here is new. Every line is taken from the tables in
   data-biology.js, which is where the facts are checked and where the fuller
   statement of each one lives. A map is that material cut to the words the
   question turns on.

   Fields:  BIO_MAPS                  the overview map
              hub, sub                the centre of the map
              br[]                    branches: h title, to (a topic id: the
                                      branch opens that topic's map), lv
                                      leaves, m an optional memory hook
            BIO_MAPS.topics[id]       one map per topic, same shape, no `to`

   A leaf is a string, or [key, text]. The key is the PROMPT - a disease, a
   vitamin, a gland - and it stays visible when the map is covered for recall;
   the text is the answer and is what gets covered. ==text== marks the words
   the question turns on.                                                  */

window.BIO_MAPS = {

hub: "Biology",
sub: "Diseases, nutrients, glands",
br: [
  { h: "Diseases", to: "diseases",
    lv: [["Malaria", "==Plasmodium==, a ==protozoan==, carried by the ==female Anopheles=="],
         ["Dengue", "a ==virus==, carried by ==Aedes aegypti==, which bites ==by day=="],
         ["Tuberculosis", "==Mycobacterium tuberculosis== — ==Koch's bacillus==, vaccine ==BCG=="],
         ["Ringworm", "a ==fungus== — ==no worm in it at all=="],
         ["Smallpox", "the ==only human disease ever eradicated=="]] },

  { h: "Nutrients and nutrition", to: "nutrients",
    lv: [["The energy", "carbohydrate ==4==, protein ==4==, fat ==9== kilocalories a gram"],
         ["Vitamin A", "deficiency causes ==night blindness==, then ==Bitot's spots=="],
         ["Vitamin C", "==scurvy== — richest natural source ==amla==, and it is ==destroyed by heat=="],
         ["Iron and iodine", "iron → ==anaemia==; iodine → ==goitre=="],
         ["Protein deficiency", "==kwashiorkor== and ==marasmus=="]] },

  { h: "Glands and hormones", to: "glands",
    lv: [["The master gland", "the ==pituitary== — and the ==smallest== gland by weight"],
         ["The largest endocrine", "the ==thyroid=="],
         ["Insulin", "from the ==beta cells== of the ==islets of Langerhans=="],
         ["The 3F hormone", "==adrenaline== — ==fight, flight and fright=="],
         ["The two diabetes", "==mellitus== is the ==pancreas==; ==insipidus== is the ==pituitary=="]] }
],

topics: {

/* ================================================== DISEASES */
diseases: {
hub: "Diseases",
sub: "Pathogen, organ, vector",
br: [
  { h: "The kinds of disease",
    lv: [["Communicable", "caused by a ==pathogen== and ==passed from person to person=="],
         ["Congenital", "==present at birth==, inherited ==or caused during development=="],
         ["Hereditary", "==carried in the genes== — haemophilia, colour blindness, thalassaemia"],
         ["Deficiency", "the ==absence of a nutrient== — scurvy, rickets, goitre"],
         ["Endemic", "==always present== in an area; ==epidemic== a sudden spread in ==one area=="],
         ["Pandemic", "an epidemic that ==crosses countries and continents=="],
         ["Zoonotic", "==from animals to humans== — rabies, plague, bird flu"]],
    m: "Congenital is present at birth; hereditary is in the genes. Not the same thing." },

  { h: "Bacterial diseases",
    lv: [["Tuberculosis", "==Mycobacterium tuberculosis== — ==Koch's bacillus==, 1882. Vaccine ==BCG=="],
         ["Cholera", "==Vibrio cholerae==, the ==small intestine== — it kills by ==dehydration=="],
         ["Typhoid", "==Salmonella typhi== — confirmed by the ==Widal test=="],
         ["Tetanus", "==Clostridium tetani==, through a ==wound== — the ==locked jaw=="],
         ["Plague", "==Yersinia pestis==, carried by the ==rat flea== Xenopsylla cheopis"],
         ["Leprosy", "==Mycobacterium leprae== — also ==Hansen's disease=="],
         ["Bacillary dysentery", "==Shigella== — ==not== amoebic dysentery, which is ==protozoan=="]] },

  { h: "Viral diseases",
    lv: [["AIDS", "==HIV==, a ==retrovirus== — it attacks the ==helper T-cells (CD4)=="],
         ["Dengue", "carried by ==Aedes aegypti==, which bites ==by day=="],
         ["", "==break-bone fever==, and the ==platelet count falls=="],
         ["Rabies", "a ==Rhabdovirus==, from a bite — ==hydrophobia==, and ==almost always fatal=="],
         ["Polio", "==destroys motor neurons== in the spinal cord"],
         ["Smallpox", "==Variola== — the ==only human disease ever eradicated=="],
         ["Hepatitis", "==A and E== through ==water and food==; ==B, C and D== through ==blood=="],
         ["Japanese encephalitis", "carried by ==Culex==; ==yellow fever and Zika== by ==Aedes=="]] },

  { h: "Protozoan, fungal and worm",
    lv: [["Malaria", "==Plasmodium== — ==falciparum== the dangerous one, ==vivax== the commonest in India"],
         ["Kala-azar", "==Leishmania donovani==, carried by the ==sandfly=="],
         ["Amoebic dysentery", "==Entamoeba histolytica==, the ==large intestine=="],
         ["Sleeping sickness", "==Trypanosoma==, carried by the ==tsetse fly=="],
         ["Ringworm", "a ==fungus==, Tinea — ==no worm in it at all=="],
         ["Filariasis", "==Wuchereria bancrofti==, a ==roundworm==, carried by ==Culex=="],
         ["Schistosomiasis", "a ==fluke==, from water with infected ==snails== — also ==bilharzia=="]] },

  { h: "Which vector carries what",
    lv: [["Female Anopheles", "==malaria=="],
         ["Aedes aegypti", "==dengue, chikungunya, yellow fever, Zika== — it breeds in ==clean stored water=="],
         ["Culex", "==filariasis, Japanese encephalitis, West Nile=="],
         ["Sandfly", "==kala-azar==; ==tsetse fly== ==sleeping sickness=="],
         ["Rat flea", "==plague=="],
         ["Housefly", "==typhoid, cholera, dysentery== — ==mechanically==, not as a host"],
         ["Careful", "only the ==female== mosquito bites, and only the ==female Anopheles== carries malaria"]] },

  { h: "Sexually transmitted",
    lv: [["AIDS", "a ==VIRUS== — the human immunodeficiency virus"],
         ["Gonorrhoea", "a ==BACTERIUM== — Neisseria gonorrhoeae"],
         ["Syphilis", "a ==BACTERIUM==, and a ==spirochete== — Treponema pallidum"],
         ["Genital herpes", "a ==VIRUS== — herpes simplex"],
         ["Chlamydia", "a ==BACTERIUM== — and the ==same organism== causes ==trachoma of the eye=="]],
    m: "Of the five, two are viral and three bacterial. Which is which is the question." },

  { h: "What each disease attacks",
    lv: [["Lungs", "==tuberculosis, pneumonia, asthma, silicosis=="],
         ["Liver", "==hepatitis, jaundice, cirrhosis=="],
         ["Brain and nerves", "==meningitis, encephalitis, rabies, Alzheimer's, Parkinson's=="],
         ["Kidney", "==nephritis, kidney stones, uraemia=="],
         ["Eye", "==cataract== the lens, ==glaucoma== the pressure, ==trachoma==, ==night blindness=="],
         ["Blood", "==leukaemia, anaemia, haemophilia, thalassaemia=="],
         ["Thyroid", "==goitre, cretinism, myxoedema==; the ==pancreas== ==diabetes mellitus=="],
         ["Bone and joints", "==arthritis, osteoporosis, rickets, gout=="]] },

  { h: "How diseases spread",
    lv: [["Air and droplets", "==tuberculosis, influenza, measles, chickenpox, COVID-19=="],
         ["Water and food", "==cholera, typhoid, hepatitis A and E, dysentery, polio=="],
         ["Direct contact", "==leprosy, ringworm, scabies, conjunctivitis=="],
         ["Blood and body fluids", "==AIDS, hepatitis B and C, syphilis=="],
         ["An insect vector", "==malaria, dengue, filariasis, kala-azar, plague=="],
         ["Mother to child", "==AIDS, syphilis, hepatitis B=="],
         ["Not spread at all", "==diabetes, cancer, arthritis== and ==every deficiency disease=="]] },

  { h: "Genetic, and from work",
    lv: [["Haemophilia", "==blood does not clot==. ==X-linked recessive== — the ==royal disease=="],
         ["Colour blindness", "usually ==red-green==, ==X-linked==, tested with ==Ishihara== plates"],
         ["Down syndrome", "an ==extra chromosome 21== — ==47==, so ==trisomy 21=="],
         ["Turner", "==45==, ==XO==; ==Klinefelter== ==47==, ==XXY=="],
         ["The dusts", "==silicosis== silica, ==asbestosis== asbestos, ==byssinosis== cotton, ==black lung== coal"],
         ["Minamata", "==mercury==; ==itai-itai== ==cadmium=="],
         ["Blue baby", "==nitrate== in drinking water — ==methaemoglobinaemia=="]],
    m: "Night blindness is vitamin A and curable; colour blindness is genetic and is not." },

  { h: "Who found what, and what has gone",
    lv: [["Edward Jenner", "==vaccination, 1796==, with ==cowpox== — vaccine from ==vacca==, Latin for cow"],
         ["Louis Pasteur", "the ==germ theory==, pasteurisation, and the ==rabies vaccine, 1885=="],
         ["Robert Koch", "==tuberculosis 1882==, ==cholera 1883=="],
         ["Ronald Ross", "==1897==, at ==Secunderabad== — the ==mosquito== carries malaria. ==Nobel 1902=="],
         ["Alexander Fleming", "==penicillin, 1928== — the ==first antibiotic=="],
         ["Salk and Sabin", "the ==injected== and the ==oral== polio vaccine"],
         ["Smallpox", "India's last case ==1975==, the world's ==1977==, ==WHO declared it 1980=="],
         ["Polio", "India's last case ==January 2011==; the region certified ==27 March 2014=="]] }
]},

/* ================================================= NUTRIENTS */
nutrients: {
hub: "Nutrients",
sub: "The six classes, the vitamins, the minerals",
br: [
  { h: "The six classes, and the energy",
    lv: [["Carbohydrate", "the ==main source of energy== — about ==4== kilocalories a gram"],
         ["Protein", "==growth and repair== — about ==4== a gram"],
         ["Fat", "==stored energy== — about ==9== a gram, the ==highest== of the three"],
         ["Alcohol", "about ==7== a gram, and ==no nutrient value at all=="],
         ["Roughage", "==cellulose==, ==no energy==, ==not digested== — and the intestine cannot work without it"],
         ["The three jobs", "energy ==carbohydrate and fat==; building ==protein and minerals==; protective ==vitamins=="]] },

  { h: "Carbohydrates",
    lv: [["Sucrose", "==glucose + fructose== — table sugar"],
         ["Lactose", "==glucose + galactose== — the sugar of ==milk=="],
         ["Maltose", "==glucose + glucose=="],
         ["The stores", "==starch== in plants, ==glycogen== in animals, ==cellulose== for plant structure"],
         ["Glycogen", "stored in the ==liver and muscle== — broken down ==first== when blood sugar falls"],
         ["Why we cannot digest cellulose", "we have ==no cellulase== — cattle rely on their ==gut microbes=="],
         ["Fasting blood glucose", "about ==70 to 110== mg a decilitre"]] },

  { h: "Proteins and fats",
    lv: [["Made of", "==amino acids== — ==twenty== build every protein, and ==nine are essential=="],
         ["Complete proteins", "==egg, milk, meat, fish== — ==egg== is the ==standard== others are measured against"],
         ["Best plant source", "==soya bean==, then pulses and groundnut"],
         ["Deficiency", "==kwashiorkor== and ==marasmus== — ==protein-energy malnutrition=="],
         ["Saturated fat", "==solid== at room temperature — ghee, butter, coconut. It raises the ==harmful== cholesterol"],
         ["Unsaturated", "==liquid== — most vegetable oils. ==Better for the heart=="],
         ["Trans fat", "a liquid oil ==hydrogenated== into a solid, as in ==vanaspati== — the ==worst== kind"],
         ["Cholesterol", "==LDL== the harmful form, ==HDL== the protective one"]] },

  { h: "Fat-soluble vitamins",
    lv: [["A — retinol", "==night blindness==, then ==xerophthalmia== and ==Bitot's spots=="],
         ["", "carrot and green leaves; the body makes it from ==carotene=="],
         ["D — calciferol", "==rickets== in children, ==osteomalacia== in adults — the ==sunshine vitamin=="],
         ["", "really a ==hormone==, because the ==body makes its own=="],
         ["E — tocopherol", "an ==antioxidant== — deficiency breaks down ==red cells=="],
         ["K — phylloquinone", "==clotting== — and it is partly made by the ==bacteria in the intestine=="]],
    m: "A, D, E and K are the fat-soluble four, and fat is what carries them." },

  { h: "Water-soluble vitamins",
    lv: [["B1 — thiamine", "==beriberi== — ==polished rice== loses it, which is how it was found"],
         ["B2 — riboflavin", "==cheilosis==, cracks at the ==corners of the mouth=="],
         ["B3 — niacin", "==pellagra== — the ==three Ds==: dermatitis, diarrhoea, dementia"],
         ["B5", "==burning feet== syndrome"],
         ["B9 — folic acid", "==megaloblastic anaemia==, and ==neural tube defects== — hence in ==pregnancy=="],
         ["B12 — cyanocobalamin", "==pernicious anaemia=="],
         ["", "the ==only vitamin with a metal== (==cobalt==), and ==absent from plant food=="],
         ["C — ascorbic acid", "==scurvy== — richest natural source ==amla==, and ==destroyed by heat=="]] },

  { h: "Digestion — which enzyme, where",
    lv: [["Mouth", "==salivary amylase== (ptyalin) on ==starch== — ==no protein or fat== digestion here"],
         ["Oesophagus", "==no digestion at all== — only a passage"],
         ["Stomach", "==pepsin== on ==protein==, and it works ==only in acid=="],
         ["Bile", "it ==emulsifies fat== — and it contains ==no enzyme==, which is the question"],
         ["Pancreas", "==trypsin==, ==amylase== and ==lipase== — it acts on ==all three== nutrients"],
         ["Small intestine", "where digestion is ==completed== and ==almost all absorption== happens, through the ==villi=="],
         ["Large intestine", "==no digestion== — ==water and salts==, and bacteria make some ==vitamin K=="],
         ["The end products", "==glucose==, ==amino acids==, and ==fatty acids with glycerol=="]],
    m: "Bile has no enzyme, and the oesophagus has no digestion. Both are asked as traps." },

  { h: "Balanced diet and malnutrition",
    lv: [["Kwashiorkor", "==protein== deficiency with ==roughly enough calories== — ==swelling== of face and feet"],
         ["Marasmus", "==protein AND energy== together — ==severe wasting==, ==skin over bone=="],
         ["Both together", "==protein-energy malnutrition== — still the ==commonest== in children"],
         ["Hidden hunger", "==enough calories==, ==missing micronutrients== — iron, iodine, vitamin A"],
         ["Body mass index", "==weight in kg ÷ height in metres squared== — ==below 18.5== underweight"],
         ["Fortification", "==iodine in salt==, ==iron and folic acid== in wheat flour"],
         ["The two largest programmes", "the ==Mid-Day Meal== (now ==PM POSHAN==) and ==ICDS=="]],
    m: "Kwashiorkor swells, marasmus wastes." },

  { h: "Minerals",
    lv: [["Calcium", "==bone and teeth== — about ==99 per cent== of the body's calcium is in them"],
         ["Iron", "the core of ==haemoglobin== — deficiency causes ==anaemia==, the ==commonest in India=="],
         ["Iodine", "needed to make ==thyroxine== — ==goitre== in adults, ==cretinism== in children"],
         ["Sodium and potassium", "==nerve impulses== and ==fluid balance==; excess sodium raises ==blood pressure=="],
         ["Fluorine", "strengthens ==enamel== in traces, causes ==fluorosis== in excess"],
         ["Cobalt", "its whole importance is being the metal in ==vitamin B12=="],
         ["Phosphorus", "with calcium in bone, and in every molecule of ==ATP and DNA=="]],
    m: "Iron deficiency is anaemia; iodine deficiency is goitre. They are constantly swapped." }
]},

/* =================================================== GLANDS */
glands: {
hub: "Glands and hormones",
sub: "Which gland, which hormone, which disorder",
br: [
  { h: "Three kinds of gland",
    lv: [["Exocrine", "has a ==duct== — salivary, sweat, sebaceous, tear, gastric, and the ==liver=="],
         ["Endocrine", "==ductless==, straight into the ==blood== — pituitary, thyroid, adrenal, pineal, thymus"],
         ["Mixed", "==both at once== — the ==pancreas==, the ==testis== and the ==ovary=="],
         ["A hormone", "a ==chemical messenger==, carried in the blood, acting ==somewhere else=="],
         ["Hormone or enzyme", "a hormone is ==used up== and acts ==far away==; an enzyme is a ==catalyst=="]] },

  { h: "The pituitary — the master gland",
    lv: [["Where and how big", "at the ==base of the brain== — about ==half a gram==, the ==smallest== gland by weight"],
         ["Growth hormone", "too little in childhood ==dwarfism==, too much ==gigantism=="],
         ["", "too much ==after growth has stopped== — ==acromegaly==, thickened jaw, hands and feet"],
         ["TSH and ACTH", "they drive the ==thyroid== and the ==adrenal cortex=="],
         ["Prolactin", "starts and maintains ==milk== production"],
         ["Oxytocin", "==contraction of the uterus== and the ==release of milk== — the ==birth hormone=="],
         ["Vasopressin (ADH)", "the kidney ==conserves water== — its absence is ==diabetes insipidus=="],
         ["Careful", "oxytocin and vasopressin are ==made in the hypothalamus==, only ==stored== by the pituitary"]] },

  { h: "Thyroid and parathyroid",
    lv: [["The thyroid", "==butterfly-shaped==, in the neck — the ==largest endocrine gland=="],
         ["Thyroxine", "==T4 and T3==; controls the ==basal metabolic rate== — and it ==cannot be made without iodine=="],
         ["Goitre", "==swelling== of the thyroid from ==iodine deficiency=="],
         ["Cretinism", "thyroxine deficiency in a ==child==; ==myxoedema== in an ==adult=="],
         ["Graves' disease", "==too much== thyroxine — ==bulging eyes==, also ==exophthalmic goitre=="],
         ["Calcitonin", "from the thyroid — it ==lowers== blood calcium"],
         ["Parathormone", "from the ==four== parathyroids — it ==raises== it. ==Exact opposites=="],
         ["Tetany", "too ==little== parathormone — calcium falls and muscles go into ==spasm=="]] },

  { h: "The pancreas",
    lv: [["What kind", "==mixed== — the endocrine part is the ==islets of Langerhans=="],
         ["Beta cells", "==insulin==, which ==lowers== blood glucose and stores it as ==glycogen=="],
         ["Alpha cells", "==glucagon==, which ==raises== it — ==insulin's opposite=="],
         ["Delta cells", "==somatostatin==, which ==restrains both=="],
         ["Who found insulin", "==Banting and Best==, ==1921=="]],
    m: "Mellitus is the pancreas, with sugar in the urine; insipidus is the pituitary, with none." },

  { h: "The adrenal glands",
    lv: [["Adrenaline", "from the ==medulla== — the ==emergency== hormone: ==fight, flight and fright=="],
         ["Noradrenaline", "works with it, mainly to ==raise blood pressure=="],
         ["Cortisol", "from the ==cortex== — a ==glucocorticoid==, for ==stress== and ==glucose=="],
         ["Aldosterone", "a ==mineralocorticoid== — the kidney ==holds sodium== and ==loses potassium=="],
         ["Addison's disease", "==too little== from the cortex — weakness, ==darkened skin=="],
         ["Cushing's syndrome", "==too much cortisol== — a ==round face==, fatty upper back, thin limbs"]] },

  { h: "Firsts and labels",
    lv: [["Master gland", "the ==pituitary=="],
         ["Largest endocrine", "the ==thyroid==; the ==smallest==, the ==pineal=="],
         ["Largest gland in the body", "the ==liver== — but it is ==exocrine==, which is the trap"],
         ["Emergency gland", "the ==adrenal=="],
         ["First hormone discovered", "==secretin==, by ==Bayliss and Starling==, ==1902=="],
         ["Who coined 'hormone'", "==Ernest Starling==, ==1905== — from the Greek for ==to set in motion=="],
         ["First hormone isolated", "==adrenaline=="],
         ["The labels", "==pregnancy== progesterone, ==birth== oxytocin, ==sleep== melatonin"]] },

  { h: "Plant hormones",
    lv: [["Auxin", "==cell elongation== — it bends a shoot ==towards light=="],
         ["Gibberellin", "==stem elongation== and ==breaking seed dormancy== — found in a ==fungus=="],
         ["Cytokinin", "==cell division==, and it ==delays the ageing of leaves=="],
         ["Abscisic acid", "the ==stress== hormone — it ==closes the stomata== and ==inhibits=="],
         ["Ethylene", "a ==gas==, the ==only gaseous hormone== — it ==ripens fruit=="]],
    m: "Auxin is the plant's growth hormone, and it is asked in the same question as the animal one." },

  { h: "The other glands",
    lv: [["Thymus", "==thymosin==, which matures the ==T-lymphocytes== — ==largest in childhood=="],
         ["Pineal", "the ==smallest endocrine gland== — ==melatonin== and the ==sleep cycle==; the ==third eye=="],
         ["Hypothalamus", "the ==link== between nerve and hormone — and it controls ==hunger, thirst, temperature=="],
         ["Stomach", "==gastrin==; the ==duodenum== ==secretin== and ==cholecystokinin=="],
         ["Kidney", "==renin==, which ==raises== blood pressure, and ==erythropoietin== for ==red cells=="],
         ["Heart", "==atrial natriuretic factor==, which ==lowers== it — ==renin's opposite=="],
         ["Ovary", "==oestrogen== from the ==Graafian follicle==; ==progesterone== from the ==corpus luteum=="],
         ["Placenta", "==hCG== — what a ==pregnancy test== detects"]] }
]}

}};
