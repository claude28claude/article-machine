/* The Article Machine — data-biology.js
   Biology, the three topics the exam keeps coming back to: diseases,
   nutrients, and the glands and their hormones.

   WHY ONLY THREE TOPICS. This is not a biology course. These three are here
   because between them they account for most of the biology asked in the
   general awareness paper, and because each one is a table-learning job
   rather than a reasoning job — which means it is worth having the tables
   right in one place.

   HOW IT RELATES TO THE STATIC GK PACK. The Static GK section has one short
   pack covering vitamins, glands and pathogens in about forty rows. That is
   the revision version. This is the full version: every pathogen with its
   scientific name and the organ it attacks, every vitamin with its chemical
   name and its sources, every gland with all of its hormones and all of the
   disorders that follow from too much or too little.

   HOW IT IS SOURCED. Standard school and competitive-exam biology, written
   out rather than copied. Two cautions are built in:

   1. WHERE THE POPULAR ANSWER IS WRONG, IT SAYS SO. Ringworm is a fungus,
      not a worm. Malaria is protozoan, not bacterial. Bile contains no
      enzyme. Vitamin D is really a hormone. Those rows are marked.
   2. CURRENT FIGURES CARRY A DATE. Calorie requirements, disease-free
      certifications and BMI cut-offs come from bodies that revise them, so
      each says who set it and when.                                        */

window.BIOLOGY = {

topics: [

/* =================================================================== */
{id:"diseases", n:"Diseases", hy:1,
 w:"What causes each disease, what it attacks, how it spreads, and which mosquito carries which.",
 intro:"Four tables carry most of the marks here: pathogen type to disease, disease to the organ it attacks, vector to disease, and the deficiency and genetic disorders that are not infections at all. The single most-missed row in the whole subject is malaria — it is protozoan, not bacterial and not viral.",
 blocks:[

  {h:"The kinds of disease",
   note:"An exam question often turns on the category rather than the disease, so the definitions are worth having exactly.",
   rows:[
    ["Communicable, or infectious","Caused by a pathogen and passed from one person to another — tuberculosis, cholera, influenza"],
    ["Non-communicable","Not passed on. Diabetes, hypertension, cancer, arthritis"],
    ["Congenital","Present at birth, whether inherited or caused during development — a hole in the heart, cleft palate"],
    ["Hereditary","Carried in the genes and passed to children — haemophilia, colour blindness, thalassaemia"],
    ["Degenerative","Caused by the failure of an organ over time — Alzheimer's, Parkinson's, osteoporosis"],
    ["Deficiency","Caused by the absence of a nutrient — scurvy, rickets, goitre"],
    ["Endemic","Always present in a particular area — malaria in parts of the north-east"],
    ["Epidemic","A sudden spread through a population in one area at one time"],
    ["Pandemic","An epidemic that crosses countries and continents — COVID-19"],
    ["Sporadic","Occurring in scattered single cases, with no pattern"],
    ["Zoonotic","Passed from animals to humans — rabies, plague, bird flu"]
   ]},

  {h:"Bacterial diseases",
   note:"Bacteria are single-celled organisms with no true nucleus. Most bacterial diseases can be treated with antibiotics; no viral disease can.",
   rows:[
    ["Tuberculosis","Mycobacterium tuberculosis. Attacks the lungs, but can reach bone, spine and brain. Identified by Robert Koch in 1882, so it is called Koch's bacillus. Vaccine: BCG"],
    ["Cholera","Vibrio cholerae. Attacks the small intestine; kills by dehydration, which is why ORS matters more than any drug"],
    ["Typhoid","Salmonella typhi. Intestine. Confirmed by the Widal test"],
    ["Tetanus","Clostridium tetani. Enters through a wound and attacks the nervous system — the locked jaw gives it its common name"],
    ["Plague","Yersinia pestis, carried by the rat flea Xenopsylla cheopis"],
    ["Leprosy","Mycobacterium leprae. Skin and nerves. Also called Hansen's disease, after the man who found the bacillus"],
    ["Diphtheria","Corynebacterium diphtheriae. Throat"],
    ["Whooping cough","Bordetella pertussis. Respiratory tract"],
    ["Pneumonia","Usually Streptococcus pneumoniae. The alveoli of the lungs fill with fluid"],
    ["Anthrax","Bacillus anthracis. Skin, lungs or intestine, depending on how it enters"],
    ["Trachoma","Chlamydia trachomatis. Eyes — historically the leading infectious cause of blindness"],
    ["Syphilis","Treponema pallidum, a spirochete. Sexually transmitted"],
    ["Gonorrhoea","Neisseria gonorrhoeae. Sexually transmitted"],
    ["Botulism","Clostridium botulinum, from badly preserved food. Its toxin is among the most poisonous substances known"],
    ["Bacillary dysentery","Shigella. Large intestine \u2014 blood and mucus in the stool. Not to be confused with amoebic dysentery, which is protozoan"],
    ["Pneumonia, the other cause","Klebsiella pneumoniae also causes it, and is the answer when Streptococcus is not among the options"]
   ]},

  {h:"Viral diseases",
   note:"A virus is not a cell. It has no metabolism of its own and multiplies only inside a host cell, which is why antibiotics do nothing to it.",
   rows:[
    ["AIDS","HIV, a retrovirus. Attacks the helper T-cells (CD4) of the immune system, so the patient dies of other infections"],
    ["Dengue","Dengue virus, carried by the Aedes aegypti mosquito, which bites by day. Called break-bone fever; the platelet count falls"],
    ["Chikungunya","Also carried by Aedes. Severe joint pain that can last months"],
    ["Rabies","Rhabdovirus, from the bite of an infected dog or bat. Attacks the brain; the fear of water gives it the name hydrophobia. Almost always fatal once symptoms begin"],
    ["Poliomyelitis","Poliovirus. Destroys motor neurons in the spinal cord, causing paralysis"],
    ["Measles","Rubeola virus. German measles is a different disease, caused by the rubella virus"],
    ["Mumps","Attacks the parotid salivary glands"],
    ["Chickenpox","Varicella zoster virus"],
    ["Smallpox","Variola virus — the only human disease ever eradicated"],
    ["Hepatitis","Attacks the liver. A and E spread through water and food; B, C and D through blood and body fluids. B has a vaccine"],
    ["Influenza and the common cold","Influenza virus; the common cold is usually a rhinovirus"],
    ["Japanese encephalitis","Carried by Culex mosquitoes. Attacks the brain"],
    ["Yellow fever and Zika","Both carried by Aedes"],
    ["COVID-19","SARS-CoV-2, a coronavirus. Respiratory tract"]
   ]},

  {h:"Protozoan, fungal and worm diseases",
   note:"This is the block that decides the pathogen-type question, because the four famous protozoan diseases are routinely offered as bacterial.",
   rows:[
    ["Malaria","Plasmodium — a protozoan. Carried by the female Anopheles mosquito. P. falciparum is the dangerous species; P. vivax the commonest in India"],
    ["Kala-azar","Leishmania donovani, a protozoan, carried by the sandfly. Also called visceral leishmaniasis"],
    ["Amoebic dysentery","Entamoeba histolytica, a protozoan. Large intestine"],
    ["Sleeping sickness","Trypanosoma, a protozoan, carried by the tsetse fly"],
    ["Giardiasis","Giardia lamblia, a protozoan. Small intestine"],
    ["Ringworm","A fungus — Tinea. There is no worm in it at all, which is exactly why it is asked"],
    ["Athlete's foot and candidiasis","Fungal. Skin, and mucous membranes"],
    ["Filariasis, or elephantiasis","Wuchereria bancrofti, a roundworm, carried by the Culex mosquito. It blocks the lymphatic vessels"],
    ["Ascariasis","Ascaris, the roundworm. Small intestine"],
    ["Taeniasis","Taenia, the tapeworm, from undercooked pork or beef"],
    ["Hookworm disease","Ancylostoma. Enters through the skin of the foot and causes anaemia"],
    ["Schistosomiasis","Schistosoma, a fluke or flatworm, picked up from water carrying infected snails. Also called bilharzia"],
    ["Aspergillosis","Aspergillus, a fungus. Mainly the lungs, and mainly in people whose immunity is already low"]
   ]},

  {h:"Which vector carries what",
   note:"Four insects carry almost everything asked. Getting Anopheles, Aedes and Culex the right way round is worth more than any other single fact in this topic.",
   rows:[
    ["Female Anopheles mosquito","Malaria"],
    ["Aedes aegypti mosquito","Dengue, chikungunya, yellow fever, Zika. It breeds in clean stored water and bites during the day"],
    ["Culex mosquito","Filariasis, Japanese encephalitis, West Nile fever"],
    ["Sandfly","Kala-azar"],
    ["Tsetse fly","Sleeping sickness"],
    ["Rat flea","Plague"],
    ["Housefly","Typhoid, cholera and dysentery — it carries the germs mechanically rather than as a host"],
    ["Dog, bat or monkey bite","Rabies"],
    ["Careful","Only the female mosquito bites — the male feeds on plant juice. And only the female Anopheles carries malaria"]
   ]},

  {h:"Sexually transmitted diseases",
   note:"Asked as a set, and the trap is that the group mixes bacteria, viruses and a protozoan.",
   rows:[
    ["AIDS","Human immunodeficiency virus \u2014 a VIRUS"],
    ["Gonorrhoea","Neisseria gonorrhoeae \u2014 a BACTERIUM"],
    ["Syphilis","Treponema pallidum \u2014 a BACTERIUM, and a spirochete"],
    ["Genital herpes","Herpes simplex virus \u2014 a VIRUS"],
    ["Chlamydia","Chlamydia trachomatis \u2014 a BACTERIUM. The same organism causes trachoma of the eye"],
    ["Trichomoniasis","Trichomonas vaginalis \u2014 a PROTOZOAN, and the only one in this group"],
    ["Also spread this way","Hepatitis B and hepatitis C, both viral"]
   ]},

  {h:"What each disease attacks",
   note:"Asked directly as “which organ is affected by”, and it is the easiest block to score in.",
   rows:[
    ["Lungs","Tuberculosis, pneumonia, asthma, bronchitis, silicosis, emphysema"],
    ["Liver","Hepatitis, jaundice, cirrhosis"],
    ["Brain and nerves","Meningitis, encephalitis, rabies, Alzheimer's, Parkinson's, epilepsy"],
    ["Heart and vessels","Angina, myocardial infarction, hypertension, atherosclerosis"],
    ["Kidney","Nephritis, kidney stones, uraemia"],
    ["Eye","Cataract (the lens), glaucoma (pressure), trachoma, conjunctivitis, night blindness"],
    ["Bone and joints","Arthritis, osteoporosis, rickets, gout"],
    ["Blood","Leukaemia, anaemia, haemophilia, thalassaemia"],
    ["Intestine","Cholera, typhoid, dysentery, appendicitis"],
    ["Skin","Eczema, psoriasis, leprosy, ringworm"],
    ["Thyroid","Goitre, cretinism, myxoedema"],
    ["Pancreas","Diabetes mellitus"],
    ["Gums and teeth","Pyorrhoea, dental caries, fluorosis"]
   ]},

  {h:"How diseases spread",
   rows:[
    ["Air and droplets","Tuberculosis, influenza, measles, chickenpox, COVID-19, whooping cough"],
    ["Water and food","Cholera, typhoid, hepatitis A and E, dysentery, polio"],
    ["Direct contact","Leprosy, ringworm, scabies, conjunctivitis"],
    ["Blood and body fluids","AIDS, hepatitis B and C, syphilis, gonorrhoea"],
    ["An insect vector","Malaria, dengue, filariasis, kala-azar, plague"],
    ["From mother to child","AIDS, syphilis, hepatitis B"],
    ["Not spread at all","Diabetes, cancer, arthritis, hypertension and every deficiency disease. Cancer is not communicable, though some viruses raise the risk of it"]
   ]},

  {h:"Non-communicable and occupational diseases",
   note:"The lifestyle group is asked more each year, and the industrial diseases come up in both biology and environment questions.",
   rows:[
    ["Diabetes mellitus","Too little insulin, or the body not responding to it. Type 1 is the failure of the pancreas to produce it; Type 2, far commoner, is resistance to it"],
    ["Hypertension","Persistently raised blood pressure. Normal is about 120/80 mm of mercury"],
    ["Hypotension","Persistently low blood pressure \u2014 the opposite, and it causes dizziness and fainting rather than long-term organ damage"],
    ["Coronary heart disease","Fatty deposits narrowing the arteries that feed the heart"],
    ["Cancer","Uncontrolled cell division. Benign stays put; malignant invades and spreads, which is called metastasis. Its study is oncology"],
    ["Arthritis and osteoporosis","Inflammation of joints; loss of bone density, more common in women after menopause"],
    ["Silicosis","Silica dust — mining and stone-cutting"],
    ["Asbestosis","Asbestos fibres"],
    ["Byssinosis","Cotton dust — textile mills"],
    ["Pneumoconiosis, or black lung","Coal dust"],
    ["Minamata disease","Mercury poisoning, from fish in contaminated water. Named after the bay in Japan"],
    ["Itai-itai disease","Cadmium poisoning — the name means “it hurts, it hurts”"],
    ["Fluorosis","Excess fluoride in drinking water; mottled teeth and deformed bone. The safe limit is about 1.5 mg per litre"],
    ["Blue baby syndrome","Nitrate in drinking water, which stops the blood carrying oxygen. Also called methaemoglobinaemia"],
    ["Arsenicosis","Arsenic in groundwater — a serious problem in parts of West Bengal and Bihar"]
   ]},

  {h:"Genetic and blood disorders",
   note:"These are not infections and cannot be caught. Three of them are sex-linked, which is why they appear far more often in men.",
   rows:[
    ["Haemophilia","Blood does not clot. X-linked recessive, so it appears in men and is carried by women. Called the royal disease, because it ran through Queen Victoria's descendants"],
    ["Colour blindness","Usually red-green. X-linked recessive, and much commoner in men. Tested with Ishihara plates"],
    ["Sickle cell anaemia","Red cells take a sickle shape and block vessels. Carrying one copy gives some protection against malaria"],
    ["Thalassaemia","Faulty haemoglobin production; the patient needs repeated transfusions"],
    ["Down syndrome","An extra copy of chromosome 21, so 47 chromosomes instead of 46. Also called trisomy 21"],
    ["Turner syndrome","45 chromosomes, XO — a female with one X missing"],
    ["Klinefelter syndrome","47 chromosomes, XXY — a male with an extra X"],
    ["Albinism","No melanin pigment. Autosomal recessive"],
    ["Erythroblastosis fetalis","An Rh-negative mother carrying an Rh-positive second child. Prevented by an injection of anti-D"],
    ["Careful","Night blindness is a vitamin A deficiency and can be cured. Colour blindness is genetic and cannot. The two are often offered as alternatives in the same question"]
   ]},

  {h:"Vaccines, drugs and the people who found them",
   rows:[
    ["Edward Jenner","Vaccination, 1796 — he used cowpox to protect against smallpox. The word vaccine comes from vacca, Latin for cow"],
    ["Louis Pasteur","The germ theory of disease, pasteurisation, and the rabies vaccine in 1885"],
    ["Robert Koch","Isolated the tuberculosis bacillus in 1882 and the cholera bacillus in 1883"],
    ["Ronald Ross","Showed in 1897, working in Secunderabad, that the malaria parasite is carried by the mosquito. Nobel Prize 1902"],
    ["Alexander Fleming","Penicillin, in 1928, from the mould Penicillium — the first antibiotic"],
    ["Jonas Salk and Albert Sabin","The injected polio vaccine and the oral polio vaccine respectively"],
    ["BCG","The tuberculosis vaccine, named after Bacillus Calmette-Guérin"],
    ["DPT","One vaccine against diphtheria, pertussis and tetanus"],
    ["ORS","Oral rehydration solution — sugar, salt and water. It saves more lives in diarrhoeal disease than any drug"],
    ["Antibiotics and viruses","An antibiotic works on bacteria only. Taking one for a viral fever does nothing except help bacteria become resistant"]
   ]},

  {h:"Eradication, and where India stands",
   note:"Each of these carries the date it was true as of, because a certification can change and a stale claim reads as wrong.",
   rows:[
    ["Smallpox","The only human disease eradicated worldwide. India's last case was in 1975, the world's last natural case in Somalia in 1977, and the WHO declared eradication in 1980"],
    ["Polio","India's last case was in January 2011, in Howrah. The WHO certified the whole South-East Asia Region polio-free on 27 March 2014. India remains polio-free as of 2026, and the pulse polio rounds continue for that reason"],
    ["Guinea worm","India was certified free of it in 2000"],
    ["Yaws","India was declared free of yaws in 2016"],
    ["Universal Immunisation Programme","Launched in 1985, one of the largest public health programmes in the world"],
    ["Mission Indradhanush","Launched in December 2014 to reach children who had been missed by routine immunisation"]
   ]}

 ]},

/* =================================================================== */
{id:"nutrients", n:"Nutrients and nutrition", hy:1,
 w:"The six classes of nutrient, what each one does, which deficiency causes which disease, and where digestion happens.",
 intro:"Nutrition is asked in four ways: which nutrient gives how much energy, which vitamin's absence causes which disease, which mineral does what, and which enzyme acts where. The vitamin table is the one that appears every year, and the digestion table is the one most people never learn.",
 blocks:[

  {h:"The six classes of nutrient",
   note:"Carbohydrate, protein and fat are the macronutrients, needed in bulk. Vitamins and minerals are micronutrients, needed in milligrams. Water is a nutrient too, and fibre is not a nutrient at all but is essential.",
   rows:[
    ["Carbohydrate","The main source of energy. About 4 kilocalories per gram"],
    ["Protein","Growth and repair — the body-building nutrient. About 4 kilocalories per gram"],
    ["Fat","Stored energy and insulation. About 9 kilocalories per gram, the highest of the three"],
    ["Vitamins","Protective. Needed in tiny amounts; the body cannot make most of them"],
    ["Minerals","Structure and regulation — bone, blood, nerve signals, fluid balance"],
    ["Water","About two-thirds of the body. Every reaction in the body happens in it"],
    ["Roughage, or dietary fibre","Cellulose from plants. It gives no energy and is not digested, but without it the intestine cannot work properly"],
    ["The three jobs","Energy-giving: carbohydrate and fat. Body-building: protein and minerals. Protective: vitamins and minerals"]
   ]},

  {h:"Carbohydrates",
   rows:[
    ["Monosaccharides","The simplest sugars — glucose, fructose (fruit sugar) and galactose"],
    ["Disaccharides","Sucrose is glucose plus fructose — table sugar. Maltose is glucose plus glucose. Lactose, the sugar of milk, is glucose plus galactose"],
    ["Polysaccharides","Starch is the plant store, glycogen the animal store, cellulose the plant structure"],
    ["Glycogen","Stored in the liver and in muscle. It is what the body breaks down first when blood sugar falls"],
    ["Cellulose","Humans cannot digest it — we have no cellulase. Cattle can only because the microbes in their stomachs do it for them"],
    ["Glucose","The sugar the blood carries and the brain runs on. This is why glucose is given for instant energy"],
    ["Normal fasting blood glucose","About 70 to 110 milligrams per decilitre"],
    ["Sources","Rice, wheat, potato, sugar, fruit, milk"]
   ]},

  {h:"Proteins",
   rows:[
    ["What they are made of","Amino acids, joined in chains. Twenty amino acids build every protein in the body"],
    ["Essential amino acids","Nine of the twenty cannot be made by the body and must come from food"],
    ["First-class, or complete, proteins","Contain all the essential amino acids — egg, milk, meat, fish. Egg protein is the standard other proteins are measured against"],
    ["Best plant sources","Soya bean has the highest protein content of any plant food, followed by pulses and groundnut"],
    ["What proteins do","Build and repair tissue, and form enzymes, most hormones, antibodies and haemoglobin"],
    ["Deficiency","Kwashiorkor and marasmus, together called protein-energy malnutrition"],
    ["Energy","About 4 kilocalories per gram, though the body uses protein for energy only when carbohydrate and fat run short"]
   ]},

  {h:"Fats and oils",
   rows:[
    ["What they are made of","Fatty acids and glycerol"],
    ["Saturated","Solid at room temperature — ghee, butter, coconut oil, animal fat. Raises the harmful cholesterol"],
    ["Unsaturated","Liquid at room temperature — most vegetable oils, mustard, groundnut, olive. Better for the heart"],
    ["Essential fatty acids","Linoleic and linolenic acid, which the body cannot make"],
    ["Trans fat","Made by hydrogenating a liquid oil into a solid, as in vanaspati. The worst kind for the heart"],
    ["Cholesterol","Carried as LDL, the harmful form, and HDL, the protective form"],
    ["What fat does besides energy","Carries vitamins A, D, E and K, insulates the body, and cushions the organs"],
    ["Energy","About 9 kilocalories per gram — more than twice carbohydrate or protein"]
   ]},

  {h:"Energy, and how much of it",
   note:"Requirement figures are set by the Indian Council of Medical Research and are revised; these are the standard figures used in general awareness papers and should be quoted as approximate.",
   rows:[
    ["Carbohydrate","About 4 kilocalories per gram"],
    ["Protein","About 4 kilocalories per gram"],
    ["Fat","About 9 kilocalories per gram"],
    ["Alcohol","About 7 kilocalories per gram, and no nutrient value at all"],
    ["A calorie","The heat needed to raise one gram of water by one degree Celsius. Food energy is measured in kilocalories, which is why the label sometimes says Calorie with a capital C"],
    ["Adult man, moderate work","Roughly 2,700 kilocalories a day"],
    ["Adult woman, moderate work","Roughly 2,200 kilocalories a day"],
    ["Basal metabolic rate","The energy the body spends doing nothing at all — breathing, circulation, keeping warm. It is controlled by thyroxine"]
   ]},

  {h:"Fat-soluble vitamins",
   note:"A, D, E and K dissolve in fat, are stored in the body, and can therefore be taken in toxic excess. The water-soluble ones cannot. Remember the four as ADEK.",
   rows:[
    ["Vitamin A — retinol","Deficiency causes night blindness, then xerophthalmia and Bitot's spots. Sources: carrot, green leafy vegetables, liver, milk, egg. The body makes it from the carotene in yellow and orange vegetables"],
    ["Vitamin D — calciferol","Deficiency causes rickets in children and osteomalacia in adults. Made in the skin from sunlight, which is why it is called the sunshine vitamin. It is really a hormone rather than a vitamin, since the body makes its own"],
    ["Vitamin E — tocopherol","An antioxidant. Deficiency causes reproductive problems and the breakdown of red cells. Sources: vegetable oil, nuts, wheatgerm"],
    ["Vitamin K — phylloquinone","Needed for blood to clot; deficiency causes prolonged bleeding. Partly made by the bacteria living in the intestine"]
   ]},

  {h:"Water-soluble vitamins",
   note:"The B group and C. They are not stored, so they are needed daily, and they are lost into cooking water and destroyed by heat.",
   rows:[
    ["B1 — thiamine","Beriberi. Polished rice loses it, which is how the disease was discovered"],
    ["B2 — riboflavin","Cracks at the corners of the mouth, cheilosis, and a sore tongue"],
    ["B3 — niacin","Pellagra, remembered as the three Ds: dermatitis, diarrhoea and dementia"],
    ["B5 — pantothenic acid","Burning feet syndrome"],
    ["B6 — pyridoxine","Anaemia and convulsions"],
    ["B7 — biotin","Skin disease and hair loss"],
    ["B9 — folic acid","Megaloblastic anaemia, and neural tube defects in an unborn child. This is why it is given in pregnancy"],
    ["B12 — cyanocobalamin","Pernicious anaemia. It is the only vitamin containing a metal — cobalt — and the only one absent from plant food altogether"],
    ["C — ascorbic acid","Scurvy: bleeding gums and slow healing. Richest natural source is amla, the Indian gooseberry, ahead of citrus fruit. Destroyed by heat, so cooking removes it"]
   ]},

  {h:"Minerals",
   rows:[
    ["Calcium","Bone and teeth — about 99 per cent of the body's calcium is in them. Also needed for clotting and for muscle contraction. Deficiency: rickets, osteoporosis"],
    ["Phosphorus","With calcium in bone and teeth, and in every molecule of ATP and DNA"],
    ["Iron","The core of haemoglobin, which carries oxygen. Deficiency causes anaemia — the commonest deficiency in India. Sources: green leafy vegetables, jaggery, liver"],
    ["Iodine","Needed to make thyroxine. Deficiency causes goitre in adults and cretinism in children. This is why table salt is iodised"],
    ["Sodium and potassium","Nerve impulses, muscle contraction and fluid balance. Excess sodium raises blood pressure"],
    ["Magnesium","Needed by hundreds of enzymes, and part of chlorophyll in plants"],
    ["Zinc","Wound healing, taste and immunity"],
    ["Fluorine","Strengthens tooth enamel in traces, but causes fluorosis in excess"],
    ["Copper","Needed for iron metabolism and for connective tissue. Deficiency causes anaemia"],
    ["Selenium","Part of the antioxidant enzymes, and needed for thyroid metabolism"],
    ["Sulphur","Part of several amino acids and therefore of protein itself. A specific deficiency disease is not described"],
    ["Cobalt","Its whole importance is that it is the metal at the centre of vitamin B12"],
    ["Chromium","A trace element in glucose metabolism"],
    ["Careful","Iron deficiency causes anaemia. Iodine deficiency causes goitre. The two are constantly swapped in options"]
   ]},

  {h:"The chemical names in one table",
   note:"Asked directly \u2014 \u201cthe chemical name of vitamin B3 is\u201d \u2014 so it is worth having them separated from everything else.",
   rows:[
    ["Vitamin A","Retinol"],
    ["Vitamin B1","Thiamine"],
    ["Vitamin B2","Riboflavin"],
    ["Vitamin B3","Niacin"],
    ["Vitamin B5","Pantothenic acid"],
    ["Vitamin B6","Pyridoxine"],
    ["Vitamin B7","Biotin"],
    ["Vitamin B9","Folic acid"],
    ["Vitamin B12","Cobalamin, or cyanocobalamin"],
    ["Vitamin C","Ascorbic acid"],
    ["Vitamin D","Calciferol"],
    ["Vitamin E","Tocopherol"],
    ["Vitamin K","Phylloquinone"]
   ]},

  {h:"The essential fatty acids, and the antioxidants",
   rows:[
    ["Omega-3","Alpha-linolenic acid. Found in flaxseed, walnut and mustard oil, and as long-chain forms in fish"],
    ["Omega-6","Linoleic acid. Found in most vegetable oils, nuts and seeds"],
    ["Why they are called essential","The body cannot make either of them, so both must come from food"],
    ["The antioxidant vitamins","Vitamin E, vitamin C, and the carotenoids that the body turns into vitamin A"],
    ["What an antioxidant does","It neutralises the free radicals produced by normal metabolism, which would otherwise damage cell membranes and DNA"]
   ]},

  {h:"Digestion — which enzyme acts where",
   note:"The nutrient, the place and the enzyme are asked in every combination. Bile is the row that catches people out.",
   rows:[
    ["Mouth","Salivary amylase, also called ptyalin, begins on starch and turns it into maltose. No protein or fat digestion happens here"],
    ["Oesophagus","No digestion at all — it is only a passage"],
    ["Stomach","Pepsin breaks protein into peptones, and it works only in acid, which is what the hydrochloric acid is for. Rennin curdles milk in infants"],
    ["Liver and bile","Bile emulsifies fat — breaks it into droplets. Bile contains no enzyme, which is the point of the question. It is made by the liver and stored in the gall bladder"],
    ["Pancreas","Trypsin on protein, pancreatic amylase on starch, and lipase on fat. Pancreatic juice acts on all three nutrients, which no other juice does"],
    ["Small intestine","Where digestion is completed and almost all absorption happens, through the villi. Maltase, sucrase, lactase and peptidases finish the job"],
    ["Large intestine","No digestion. Water and salts are absorbed, and the bacteria living there make some vitamin K and B group vitamins"],
    ["End products","Carbohydrate becomes glucose, protein becomes amino acids, fat becomes fatty acids and glycerol"],
    ["Lengths","The small intestine is about six metres long and is the longest part of the alimentary canal. The liver is the largest gland in the body"]
   ]},

  {h:"Balanced diet and malnutrition",
   note:"BMI ranges are the World Health Organization's; India uses lower cut-offs for overweight in some national surveys, so state the source if the option offers both.",
   rows:[
    ["A balanced diet","One containing all six nutrients and fibre in the right proportion for a person's age, sex and work"],
    ["Kwashiorkor","Protein deficiency with roughly enough calories. Swelling of the face and feet, a swollen belly, and changed hair colour. Usually after weaning"],
    ["Marasmus","Deficiency of protein and energy together. Severe wasting, the child looks like skin over bone, and there is no swelling. Usually in the first year"],
    ["Protein-energy malnutrition","The name covering both, and still the commonest form of malnutrition in children"],
    ["Hidden hunger","Enough calories but missing micronutrients — iron, iodine, vitamin A. It is invisible, which is what the name means"],
    ["Body mass index","Weight in kilograms divided by height in metres squared. WHO: below 18.5 underweight, 18.5 to 24.9 normal, 25 to 29.9 overweight, 30 and above obese"],
    ["Fortification","Adding a nutrient that food does not naturally have enough of — iodine in salt, iron and folic acid in wheat flour, vitamins A and D in edible oil"],
    ["Programmes","The Mid-Day Meal scheme, now PM POSHAN, and the Integrated Child Development Services are the two largest nutrition programmes in the country"]
   ]},

  {h:"The rows that are usually got wrong",
   rows:[
    ["Vitamin D is not really a vitamin","A vitamin is by definition something the body cannot make. The body makes vitamin D in the skin from sunlight, so it behaves as a hormone"],
    ["Cellulose gives no energy but is essential","It passes through undigested. It is still needed, because it gives the intestine something to push against"],
    ["Fat gives more energy than sugar","Nine kilocalories a gram against four, so weight for weight fat is the richer fuel — but glucose gives it faster"],
    ["Vitamin C is destroyed by cooking","So a boiled vegetable has far less of it than a raw one, and the water it was boiled in has the rest"],
    ["Scurvy, beriberi, pellagra, rickets","Vitamin C, B1, B3 and D respectively. These four are asked together more often than separately"],
    ["Milk is not a complete food","It lacks iron and vitamin C, which is why an infant on milk alone becomes anaemic"]
   ]}

 ]},

/* =================================================================== */
{id:"glands", n:"Glands and hormones", hy:1,
 w:"Every endocrine gland, the hormones it makes, and the disorder caused by too much or too little.",
 intro:"Three questions come out of this topic: which gland makes which hormone, which disorder follows from which hormone, and which gland is the largest, the smallest or the master. Learn the disorder table and most of the topic falls into place, because each disorder names both a gland and a hormone.",
 blocks:[

  {h:"Three kinds of gland",
   note:"The distinction is the first thing asked, and the mixed glands are the answer to the trick version of it.",
   rows:[
    ["Exocrine","Has a duct, and pours its product onto a surface or into a cavity. Salivary, sweat, sebaceous, mammary, tear and gastric glands, and the liver"],
    ["Endocrine","Ductless. Pours its hormone straight into the blood. Pituitary, thyroid, parathyroid, adrenal, pineal and thymus"],
    ["Mixed, or heterocrine","Both at once. The pancreas makes digestive juice through a duct and insulin into the blood; the testis and the ovary make both cells and hormones"],
    ["What a hormone is","A chemical messenger made in one place, carried in the blood, and acting somewhere else — in extremely small amounts"],
    ["Hormone against enzyme","A hormone is used up and acts far from where it is made. An enzyme is a catalyst, is not used up, and acts where it is made"]
   ]},

  {h:"The pituitary — the master gland",
   note:"It is called the master gland because its hormones control other glands. It is itself controlled by the hypothalamus, which is why the hypothalamus is sometimes called the master of the master gland.",
   rows:[
    ["Where and how big","At the base of the brain, in a bony hollow. About the size of a pea and roughly half a gram — the smallest gland in the body by weight"],
    ["Growth hormone","Controls growth of bone and tissue. Too little in childhood causes dwarfism; too much causes gigantism; too much after growth has stopped causes acromegaly, in which the jaw, hands and feet thicken"],
    ["Thyroid-stimulating hormone","Tells the thyroid to make thyroxine"],
    ["Adrenocorticotropic hormone","Tells the adrenal cortex to make its hormones"],
    ["Follicle-stimulating and luteinising hormone","Control the ovaries and the testes"],
    ["Prolactin","Starts and maintains the production of milk"],
    ["Oxytocin","Causes contraction of the uterus during birth and the release of milk. Called the birth hormone"],
    ["Vasopressin, or ADH","Makes the kidney conserve water. Its absence causes diabetes insipidus — enormous thirst and enormous volumes of dilute urine, with no sugar involved"],
    ["Careful","Oxytocin and vasopressin are made in the hypothalamus and only stored and released by the posterior pituitary"]
   ]},

  {h:"Thyroid and parathyroid",
   rows:[
    ["The thyroid","A butterfly-shaped gland in the neck, and the largest endocrine gland in the body"],
    ["Thyroxine","T4 and T3. Controls the basal metabolic rate, growth and mental development. It cannot be made without iodine"],
    ["Goitre","Swelling of the thyroid from iodine deficiency"],
    ["Cretinism","Thyroxine deficiency in a child — stunted growth and impaired mental development"],
    ["Myxoedema","Thyroxine deficiency in an adult — slowed metabolism, weight gain, puffy skin"],
    ["Graves' disease","Too much thyroxine — weight loss, rapid heart, and bulging eyes. Also called exophthalmic goitre"],
    ["Calcitonin","Also from the thyroid. It lowers blood calcium by putting it back into bone"],
    ["The parathyroids","Four small glands behind the thyroid. Parathormone raises blood calcium — the exact opposite of calcitonin"],
    ["Tetany","Too little parathormone, so blood calcium falls and the muscles go into painful spasm"]
   ]},

  {h:"The pancreas",
   rows:[
    ["What kind of gland","Mixed. Its exocrine part makes pancreatic juice; its endocrine part is the islets of Langerhans"],
    ["Beta cells","Make insulin, which lowers blood glucose by moving it into cells and storing it as glycogen"],
    ["Alpha cells","Make glucagon, which raises blood glucose by breaking glycogen down. It is insulin's opposite"],
    ["Delta cells","Make somatostatin, which restrains both"],
    ["Diabetes mellitus","Too little insulin, or resistance to it. Blood sugar rises and spills into the urine"],
    ["Who found insulin","Frederick Banting and Charles Best, in 1921. Insulin was also the first protein whose amino acid sequence was worked out"],
    ["Careful","Diabetes mellitus is a pancreas disease with sugar in the urine. Diabetes insipidus is a pituitary disease with no sugar at all. The shared word is the whole trap"]
   ]},

  {h:"The adrenal glands",
   note:"One sits on top of each kidney, and each has two parts that behave like two different glands.",
   rows:[
    ["The medulla — adrenaline","The emergency hormone: heart rate up, breathing up, blood sugar up, blood sent to the muscles. Remembered as the hormone of fight, flight and fright"],
    ["The medulla — noradrenaline","Works with adrenaline, mainly to raise blood pressure"],
    ["The cortex — cortisol","A glucocorticoid. Manages stress and the use of glucose, and suppresses inflammation"],
    ["The cortex — aldosterone","A mineralocorticoid. Makes the kidney hold on to sodium and lose potassium, so it controls blood volume and pressure"],
    ["The cortex — sex hormones","Small amounts of androgens"],
    ["Addison's disease","Too little from the cortex — weakness, low blood pressure, darkened skin"],
    ["Cushing's syndrome","Too much cortisol — a round face, a fatty upper back, thin limbs, raised blood sugar"],
    ["A useful label","The adrenal is called the gland of emergency, and the 3F hormone is adrenaline"]
   ]},

  {h:"The sex glands and pregnancy",
   rows:[
    ["Testis — testosterone","Made by the interstitial cells. Produces the male secondary sexual characters: deeper voice, facial hair, muscle"],
    ["Ovary — oestrogen","Made by the Graafian follicle. Produces the female secondary sexual characters and controls the first half of the cycle"],
    ["Ovary — progesterone","Made by the corpus luteum. Prepares and maintains the uterus for pregnancy, which is why it is called the pregnancy hormone"],
    ["Relaxin","Loosens the pelvic ligaments before birth"],
    ["Placenta","Makes human chorionic gonadotropin, along with oestrogen and progesterone. hCG in the urine is what a home pregnancy test detects"]
   ]},

  {h:"The other glands",
   rows:[
    ["Thymus","In the chest. Makes thymosin, which matures the T-lymphocytes of the immune system. It is largest in childhood and shrinks after puberty"],
    ["Pineal","Deep in the brain and the smallest endocrine gland. Makes melatonin, which governs the sleep cycle and the body clock. Sometimes called the third eye"],
    ["Hypothalamus","The link between the nervous system and the endocrine system. It makes the releasing hormones that drive the pituitary, and it also controls hunger, thirst and body temperature"],
    ["Stomach","Gastrin, which triggers the release of gastric juice"],
    ["Duodenum","Secretin and cholecystokinin, which call for pancreatic juice and bile"],
    ["Kidney","Renin, which raises blood pressure, and erythropoietin, which tells the bone marrow to make red cells"],
    ["Heart","Atrial natriuretic factor, which lowers blood pressure — the opposite of renin's effect"]
   ]},

  {h:"Disorder, gland and hormone in one table",
   note:"If one table from this topic is memorised, make it this one: every row names all three.",
   rows:[
    ["Dwarfism","Pituitary — too little growth hormone in childhood"],
    ["Gigantism","Pituitary — too much growth hormone in childhood"],
    ["Acromegaly","Pituitary — too much growth hormone in an adult"],
    ["Diabetes insipidus","Pituitary — too little vasopressin"],
    ["Diabetes mellitus","Pancreas — too little insulin, or resistance to it"],
    ["Goitre","Thyroid — iodine deficiency, so thyroxine cannot be made"],
    ["Cretinism","Thyroid — too little thyroxine in a child"],
    ["Myxoedema","Thyroid — too little thyroxine in an adult"],
    ["Graves' disease","Thyroid — too much thyroxine"],
    ["Tetany","Parathyroid — too little parathormone, so blood calcium falls"],
    ["Addison's disease","Adrenal cortex — too little cortisol and aldosterone"],
    ["Cushing's syndrome","Adrenal cortex — too much cortisol"]
   ]},

  {h:"Firsts and labels",
   rows:[
    ["Master gland","Pituitary"],
    ["Largest endocrine gland","Thyroid"],
    ["Smallest endocrine gland","Pineal"],
    ["Largest gland in the body","Liver — but it is exocrine, not endocrine, which is the trap in the question"],
    ["Emergency gland","Adrenal"],
    ["The first hormone discovered","Secretin, by Bayliss and Starling in 1902"],
    ["Who coined the word hormone","Ernest Starling, in 1905. It comes from a Greek word meaning to set in motion"],
    ["The first hormone isolated","Adrenaline"],
    ["Pregnancy hormone","Progesterone"],
    ["Birth hormone","Oxytocin"],
    ["Sleep hormone","Melatonin"],
    ["Growth hormone in plants","Auxin — the plant equivalent, and it is asked in the same question as often as not"]
   ]},

  {h:"Plant hormones",
   note:"Five of them, and the exam wants the effect rather than the chemistry.",
   rows:[
    ["Auxin","Cell elongation. It causes a shoot to bend towards light, and it is why the tip of a plant suppresses the side branches. Indole acetic acid is the natural one"],
    ["Gibberellin","Stem elongation, breaking seed dormancy and bolting. It was found in a fungus that made rice seedlings grow absurdly tall"],
    ["Cytokinin","Cell division, and it delays the ageing of leaves"],
    ["Abscisic acid","The stress hormone. It closes the stomata in drought and enforces dormancy — it inhibits rather than promotes"],
    ["Ethylene","A gas, and the only gaseous hormone. It ripens fruit, which is why one ripe fruit ripens the others in the basket"]
   ]}

 ]}

],

/* ------------------------------------------------------------ confusions */

confusions: [

{k:"Bacteria, virus, protozoan, fungus",
 rows:[
  ["Bacterial","Tuberculosis, cholera, typhoid, tetanus, plague, leprosy, diphtheria, whooping cough, pneumonia, anthrax"],
  ["Viral","AIDS, dengue, chikungunya, rabies, polio, measles, mumps, chickenpox, hepatitis, influenza, COVID-19"],
  ["Protozoan","Malaria, kala-azar, amoebic dysentery, sleeping sickness, giardiasis"],
  ["Fungal","Ringworm, athlete's foot, candidiasis"]
 ],
 note:"Malaria is the most-missed row in the subject: it is protozoan, not bacterial and not viral. And ringworm is a fungus, not a worm."},

{k:"Anopheles, Aedes, Culex",
 rows:[
  ["Female Anopheles","Malaria"],
  ["Aedes aegypti","Dengue, chikungunya, yellow fever, Zika — and it bites in the daytime"],
  ["Culex","Filariasis, Japanese encephalitis, West Nile fever"]
 ],
 note:"Three mosquitoes, three sets of diseases. Only the female bites at all; the male lives on plant juice."},

{k:"Kwashiorkor and marasmus",
 rows:[
  ["Kwashiorkor","Protein missing, calories roughly enough. Swelling of face and feet, swollen belly, hair colour changes. Usually after weaning"],
  ["Marasmus","Protein and calories both missing. Extreme wasting, no swelling. Usually in the first year of life"]
 ],
 note:"Swelling is the difference to hold on to: kwashiorkor swells, marasmus wastes."},

{k:"Diabetes mellitus and diabetes insipidus",
 rows:[
  ["Diabetes mellitus","Pancreas. Too little insulin. Blood sugar high, sugar in the urine"],
  ["Diabetes insipidus","Pituitary. Too little vasopressin. No sugar involved at all — the kidney simply cannot conserve water"]
 ],
 note:"Mellitus means honey-sweet; insipidus means tasteless. The names themselves carry the answer."},

{k:"Dwarfism, gigantism, acromegaly",
 rows:[
  ["Dwarfism","Too little growth hormone, in childhood"],
  ["Gigantism","Too much growth hormone, in childhood"],
  ["Acromegaly","Too much growth hormone, after growth has stopped — so the bones thicken instead of lengthening"]
 ],
 note:"One hormone, three answers, and the difference is only the age at which it went wrong."},

{k:"Goitre, cretinism, myxoedema",
 rows:[
  ["Goitre","The thyroid swells, from iodine deficiency"],
  ["Cretinism","Too little thyroxine in a child — growth and mental development are affected"],
  ["Myxoedema","Too little thyroxine in an adult — slow metabolism, weight gain, puffy skin"],
  ["Graves' disease","Too much thyroxine — the opposite, with bulging eyes"]
 ],
 note:"All four are the thyroid. Age decides between cretinism and myxoedema."},

{k:"Insulin and glucagon",
 rows:[
  ["Insulin","Beta cells of the islets of Langerhans. Lowers blood glucose"],
  ["Glucagon","Alpha cells. Raises blood glucose"]
 ],
 note:"Two hormones from one gland pulling in opposite directions. Alpha raises, beta lowers."},

{k:"Exocrine, endocrine and mixed glands",
 rows:[
  ["Exocrine","Has a duct — salivary, sweat, tear, mammary, gastric glands, and the liver"],
  ["Endocrine","Ductless, straight into the blood — pituitary, thyroid, parathyroid, adrenal, pineal, thymus"],
  ["Mixed","Both — the pancreas, the testis and the ovary"]
 ],
 note:"The liver is the largest gland in the body but is not an endocrine gland. The thyroid is the largest endocrine one."},

{k:"Scurvy, beriberi, pellagra, rickets",
 rows:[
  ["Scurvy","Vitamin C — bleeding gums"],
  ["Beriberi","Vitamin B1, thiamine"],
  ["Pellagra","Vitamin B3, niacin — dermatitis, diarrhoea, dementia"],
  ["Rickets","Vitamin D, in children; osteomalacia is the same deficiency in adults"]
 ],
 note:"These four appear together in options more often than any other set in nutrition."},

{k:"Night blindness and colour blindness",
 rows:[
  ["Night blindness","Vitamin A deficiency. It can be cured by correcting the diet"],
  ["Colour blindness","A genetic, sex-linked defect. It cannot be cured, and it is far commoner in men"]
 ],
 note:"One is a nutrition question and one is a genetics question, and they are deliberately offered together."},

{k:"Hormone and enzyme",
 rows:[
  ["Hormone","A messenger. Made in one organ, carried by blood, acts on another, and is used up"],
  ["Enzyme","A catalyst. Acts where it is made, speeds a reaction up, and is not used up by it"]
 ],
 note:"Insulin is a hormone; pepsin is an enzyme. Both are proteins, which is why the question works."}

],

/* ----------------------------------------------------------------- facts */

facts: [

{h:"Who discovered what",
 rows:[
  ["Edward Jenner","Vaccination, using cowpox against smallpox, 1796"],
  ["Louis Pasteur","Germ theory, pasteurisation, and the rabies vaccine"],
  ["Robert Koch","The tuberculosis bacillus, 1882, and the cholera bacillus, 1883"],
  ["Ronald Ross","The mosquito's role in spreading malaria, 1897, working in Secunderabad"],
  ["Alexander Fleming","Penicillin, 1928 — the first antibiotic"],
  ["Banting and Best","Insulin, 1921"],
  ["Bayliss and Starling","Secretin, 1902 — the first hormone ever found. Starling coined the word hormone"],
  ["Karl Landsteiner","The ABO blood groups, 1901, and later the Rh factor"],
  ["William Harvey","The circulation of the blood"],
  ["Robert Hooke","The cell, in 1665, looking at cork"],
  ["Anton van Leeuwenhoek","The first living micro-organisms seen under a lens"],
  ["Gregor Mendel","The laws of inheritance — the father of genetics"],
  ["Watson and Crick","The double helix structure of DNA, 1953, using Rosalind Franklin's X-ray images"],
  ["Jonas Salk and Albert Sabin","The injected and the oral polio vaccines"]
 ]},

{h:"The pathogens by name",
 note:"Asked as “the causative organism of”, and the scientific name is what the option gives.",
 rows:[
  ["Tuberculosis","Mycobacterium tuberculosis"],
  ["Leprosy","Mycobacterium leprae"],
  ["Cholera","Vibrio cholerae"],
  ["Typhoid","Salmonella typhi"],
  ["Tetanus","Clostridium tetani"],
  ["Plague","Yersinia pestis"],
  ["Diphtheria","Corynebacterium diphtheriae"],
  ["Whooping cough","Bordetella pertussis"],
  ["Anthrax","Bacillus anthracis"],
  ["Syphilis","Treponema pallidum"],
  ["Malaria","Plasmodium — vivax, falciparum, malariae or ovale"],
  ["Kala-azar","Leishmania donovani"],
  ["Amoebic dysentery","Entamoeba histolytica"],
  ["Sleeping sickness","Trypanosoma"],
  ["Filariasis","Wuchereria bancrofti"],
  ["AIDS","Human immunodeficiency virus"],
  ["Chickenpox","Varicella zoster virus"],
  ["Smallpox","Variola virus"],
  ["COVID-19","SARS-CoV-2"]
 ]},

{h:"One-line answers that keep coming back",
 rows:[
  ["Universal blood donor and recipient","O negative gives to everyone; AB positive receives from everyone"],
  ["Which vitamin the body makes itself","Vitamin D, in the skin, from sunlight. Vitamin K is partly made by intestinal bacteria"],
  ["The only vitamin containing a metal","B12 — it contains cobalt"],
  ["The vitamin absent from all plant food","B12"],
  ["Richest natural source of vitamin C","Amla, the Indian gooseberry"],
  ["Highest-energy nutrient","Fat, at about 9 kilocalories a gram"],
  ["Which juice digests all three nutrients","Pancreatic juice"],
  ["Which digestive secretion has no enzyme","Bile"],
  ["Where most absorption happens","The small intestine, through the villi"],
  ["Which gland controls the basal metabolic rate","The thyroid, through thyroxine"],
  ["Which mineral iodised salt supplies","Iodine, to prevent goitre"],
  ["The commonest deficiency in India","Iron deficiency anaemia"],
  ["Which disease has been eradicated worldwide","Smallpox, declared in 1980"],
  ["The only gaseous plant hormone","Ethylene, which ripens fruit"]
 ]}

]

};
