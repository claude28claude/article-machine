/* The Article Machine — data-economy.js
   Indian Economy: the Five Year Plans, the 1991 reforms, and the standing
   topics an exam actually draws from.

   HOW THIS SUBJECT IS SOURCED. Like Modern History and unlike the
   Constitution, this is written rather than extracted — there is no single
   government document that contains it. Three kinds of statement are mixed
   here and the difference matters:

   1. DATES AND STRUCTURES — when a plan ran, when a body was set up, what an
      Act did. These are firm and are stated flatly.
   2. GROWTH RATES — target versus achieved for each plan. The targets are
      from the plan documents. The ACHIEVED figures come from the Planning
      Commission's own end-of-plan reviews, and they move by a few tenths of
      a percentage point between sources depending on which GDP base year is
      used. They are the figures examinations use; treat the last decimal as
      soft, not the first.
   3. CURRENT NUMBERS — reserves, tax slabs, poverty ratios. These change.
      Every one carries the date it is true as of, so a stale figure reads as
      stale instead of reading as wrong.

   Where a fact is genuinely contested — the exact size of the 1991 reserves,
   whether the Sixth Plan "began liberalisation" — the entry says so.        */

window.ECONOMY = {

/* ------------------------------------------------------------------ plans

   `kind` is 'plan' for a Five Year Plan and 'gap' for the interruptions —
   the plan holiday and the two sets of annual plans. The gaps are not
   padding: three of the most-asked facts in this subject (the 1966
   devaluation, the Green Revolution, the 1991 crisis) happened inside them.

   `tgt` and `act` are percent per year. `act:null` means no single accepted
   figure exists.                                                            */

plans: [

{id:"first", kind:"plan", no:1, n:"First Five Year Plan", from:1951, to:1956, hy:1,
 theme:"Agriculture, irrigation and power",
 model:"Harrod–Domar model",
 tgt:2.1, act:3.6,
 w:"India in 1951 was short of food, absorbing eight million refugees and running double-digit inflation. The First Plan did not try to be clever: it put money into land, water and electricity and left industry mostly alone. It is the only plan whose growth comfortably beat its own target.",
 key:["Bhakra–Nangal, Hirakud and the Damodar Valley projects begun — the 'temples of modern India'",
      "Community Development Programme launched 2 October 1952; National Extension Service 1953",
      "IIT Kharagpur (1951) and the University Grants Commission (1953) established",
      "Roughly 45% of outlay went to agriculture, irrigation and power together"],
 note:"Based on the Harrod–Domar model, which makes growth a function of how much a country saves and how efficiently it invests. That was the right question for 1951 and the wrong one by 1956."},

{id:"second", kind:"plan", no:2, n:"Second Five Year Plan", from:1956, to:1961, hy:1,
 theme:"Heavy and basic industry",
 model:"Mahalanobis model",
 tgt:4.5, act:4.27,
 w:"The plan that set the shape of the Indian economy for the next thirty-five years. P.C. Mahalanobis argued that a poor country should build the industries that build industries — steel, machine tools, power — and accept slower consumer-goods growth for a generation. India got three steel plants and a foreign exchange crisis.",
 key:["Industrial Policy Resolution 1956 — the state takes the 'commanding heights'; industries split into Schedules A (17, state monopoly), B (12, state-led) and C (the rest)",
      "Three public-sector steel plants: Bhilai (Soviet help), Rourkela (West German), Durgapur (British)",
      "First foreign exchange crisis, 1957–58 — imports of capital goods ran ahead of what India could pay for",
      "Also called the Nehru–Mahalanobis plan"],
 note:"Mahalanobis founded the Indian Statistical Institute and designed the plan there. The model's weakness is the one that showed up: heavy industry employs few people per rupee, so growth did not translate into jobs."},

{id:"third", kind:"plan", no:3, n:"Third Five Year Plan", from:1961, to:1966, hy:1,
 theme:"A self-reliant and self-generating economy",
 tgt:5.6, act:2.4,
 w:"The plan that failed, and failed for reasons largely outside it. Two wars and the worst drought in decades arrived inside five years. It aimed to make the economy self-sustaining; it ended with India importing wheat under PL-480 and devaluing the rupee.",
 key:["Sino-Indian War 1962 and the Indo-Pak War 1965 pulled money to defence",
      "Severe drought 1965–66; foodgrain output fell sharply",
      "Panchayati Raj, inaugurated 2 October 1959 at Nagaur, Rajasthan, spread during this plan",
      "Growth came in at less than half the target — the widest miss of any plan"],
 note:"The failure is why the next three years were given to annual plans instead of a fourth Five Year Plan."},

{id:"holiday", kind:"gap", n:"Plan holiday — three Annual Plans", from:1966, to:1969, hy:1,
 theme:"Devaluation and the Green Revolution",
 w:"Not a plan at all: three one-year plans while the Third Plan's wreckage was cleared. Two things of permanent importance happened in these three years.",
 key:["Rupee devalued on 6 June 1966 by about 36.5% against the dollar — from ₹4.76 to ₹7.50",
      "The New Agricultural Strategy: high-yielding variety seeds, fertiliser and assured irrigation, concentrated in Punjab, Haryana and western Uttar Pradesh — the Green Revolution begins",
      "War with Pakistan (1965), two failed monsoons and heavy dependence on American PL-480 wheat"],
 note:"The devaluation is the single most-asked fact from this period. It was demanded in substance by the World Bank and the IMF as a condition of assistance, and it was politically hated."},

{id:"fourth", kind:"plan", no:4, n:"Fourth Five Year Plan", from:1969, to:1974,
 theme:"Growth with stability and progressive achievement of self-reliance",
 tgt:5.7, act:3.3,
 w:"Written to make India independent of foreign aid, and overtaken by events: the Bangladesh war and ten million refugees, two droughts, and the first oil shock at the end. Its lasting mark is not growth but ownership — fourteen banks were nationalised in its first year.",
 key:["Fourteen major commercial banks nationalised, 19 July 1969",
      "The Gadgil formula adopted for distributing central assistance among states",
      "Bangladesh war, 1971, and the cost of sheltering refugees",
      "Nationalisation of general insurance (1972); the first oil shock, 1973"],
 note:"The Gadgil formula (D.R. Gadgil) weighted population most heavily, and it governed central assistance to states in one revised form or another until the Fourteenth Finance Commission changed the arithmetic in 2015."},

{id:"fifth", kind:"plan", no:5, n:"Fifth Five Year Plan", from:1974, to:1979, hy:1,
 theme:"Removal of poverty (Garibi Hatao) and attainment of self-reliance",
 tgt:4.4, act:4.8,
 w:"The first plan to make poverty itself the target rather than a hoped-for consequence of growth. It was drafted by D.P. Dhar, ran through the Emergency, and was cut short: the Janata government terminated it in 1978, a year early.",
 key:["Minimum Needs Programme (1974–75) — drinking water, primary schooling, rural roads, health",
      "Twenty Point Programme announced in 1975",
      "Pokhran-I, India's first nuclear test, 18 May 1974",
      "Terminated in 1978, one year early, by the incoming Janata government"],
 note:"One of only two plans that beat their growth target — the other is the First. It is also the plan most often mis-dated, because it ended in 1978 and not 1979."},

{id:"rolling", kind:"gap", n:"The Rolling Plan", from:1978, to:1980,
 theme:"A plan rewritten every year",
 w:"The Janata government abandoned the fixed five-year frame for a rolling plan — targets revised annually rather than fixed for five years. The idea is associated with the Swedish economist Gunnar Myrdal; D.T. Lakdawala ran the Planning Commission through it.",
 key:["Janata drafted a Sixth Plan for 1978–83; the Congress government that returned in 1980 scrapped it and started its own",
      "So two documents are both called the Sixth Plan. The one that counts is 1980–85"],
 note:"A favourite trap: 'which plan was a rolling plan' is 1978–80, and it sits between the Fifth and the Sixth."},

{id:"sixth", kind:"plan", no:6, n:"Sixth Five Year Plan", from:1980, to:1985, hy:1,
 theme:"Direct attack on poverty; removal of unemployment",
 tgt:5.2, act:5.7,
 w:"Poverty programmes stopped being a line item and became the plan's organising idea, with money going straight to households rather than through growth. It is also where the state's grip began to loosen — some price and distribution controls went, though calling it the start of liberalisation overstates a change that only became policy in 1991.",
 key:["Integrated Rural Development Programme (IRDP) extended nationwide, 1980",
      "National Rural Employment Programme, 1980; Rural Landless Employment Guarantee Programme, 1983",
      "NABARD established 12 July 1982",
      "Some price controls and distribution restrictions removed"],
 note:"Whether the Sixth Plan 'began liberalisation' is genuinely argued about. What is not argued about is that the direction of policy changed here and accelerated after 1985."},

{id:"seventh", kind:"plan", no:7, n:"Seventh Five Year Plan", from:1985, to:1990, hy:1,
 theme:"Food, Work and Productivity",
 tgt:5.0, act:6.0,
 w:"Three words as the whole objective, and the best growth of any plan up to that point. It also ran up the deficits and the external borrowing that produced the crisis two years after it ended.",
 key:["Jawahar Rozgar Yojana launched 1989, merging the two earlier rural employment programmes",
      "Emphasis on technology, productivity and modernisation rather than new capacity",
      "Growth of about 6% a year — the highest so far",
      "Heavy external commercial borrowing, which came due in 1990–91"],
 note:"The plan met its growth objective and left the balance of payments in the state that produced 1991. Both facts are true at once."},

{id:"annual9092", kind:"gap", n:"Two Annual Plans", from:1990, to:1992, hy:1,
 theme:"Political instability and the balance of payments crisis",
 w:"Four governments in two years and no political basis for a five-year commitment. The Eighth Plan was postponed while the country ran out of foreign exchange.",
 key:["Gulf War 1990: oil prices doubled and remittances from Indian workers in the Gulf stopped",
      "Credit rating cut below investment grade; commercial borrowing dried up",
      "By mid-1991 reserves covered only a few weeks of imports",
      "Gold pledged abroad; an IMF programme taken; the reforms of July 1991 followed"],
 note:"See the 1991 reforms in full — this gap is where that story sits."},

{id:"eighth", kind:"plan", no:8, n:"Eighth Five Year Plan", from:1992, to:1997, hy:1,
 theme:"Human development as the core",
 tgt:5.6, act:6.8,
 w:"The first plan of the liberalised economy, and the first to say plainly that the state would now be a facilitator rather than the main investor. It is the plan with the largest gap between target and achievement, in the right direction.",
 key:["Written after the 1991 reforms — planning shifts from allocating licences to setting direction",
      "Human development named as the core objective: employment, literacy, health, population",
      "73rd and 74th Amendments (1992–93) put money and functions into panchayats and municipalities",
      "India a founder member of the WTO, 1 January 1995"],
 note:"Often labelled the Rao–Manmohan model. That is a description of the politics rather than a formal economic model like Mahalanobis's."},

{id:"ninth", kind:"plan", no:9, n:"Ninth Five Year Plan", from:1997, to:2002,
 theme:"Growth with social justice and equality",
 tgt:6.5, act:5.4,
 w:"Launched in the fiftieth year of independence with the highest target yet, and undone by the East Asian financial crisis, sanctions after the 1998 nuclear tests and two years of poor agricultural growth.",
 key:["Seven Basic Minimum Services identified for priority funding",
      "East Asian crisis (1997) and post-Pokhran-II sanctions (1998) both fell inside the plan",
      "Emphasis on the private sector as the main source of investment"],
 note:"The first plan since the Third to fall more than a full percentage point short of its target."},

{id:"tenth", kind:"plan", no:10, n:"Tenth Five Year Plan", from:2002, to:2007, hy:1,
 theme:"Doubling per capita income in ten years",
 tgt:8.0, act:7.6,
 w:"The first plan to set measurable social targets and publish them as commitments rather than aspirations — literacy, infant mortality, sex ratio, forest cover — and to break the growth target down state by state.",
 key:["Monitorable targets: reduce the poverty ratio by 5 percentage points by 2007",
      "All children in school by 2003; the gender gap in literacy cut by half by 2007",
      "Infant mortality to 45 per 1,000 by 2007; forest cover to 25%",
      "Sarva Shiksha Abhiyan and the National Rural Health Mission (2005) ran through it"],
 note:"The 8% target was the highest ever set and was very nearly met — the closest any plan came to a target above 6%."},

{id:"eleventh", kind:"plan", no:11, n:"Eleventh Five Year Plan", from:2007, to:2012, hy:1,
 theme:"Towards faster and more inclusive growth",
 tgt:9.0, act:8.0,
 w:"'Inclusive growth' entered the vocabulary here and has not left it. The target was set at 9% before the global financial crisis and revised to about 8.1% after it; the achievement of around 8% through a world recession is the plan's real claim.",
 key:["Global financial crisis (2008) fell in the middle of the plan; the target was revised down",
      "MGNREGA extended to all districts, 2008",
      "Right to Education Act 2010; Bharat Nirman for rural infrastructure",
      "27 monitorable targets across income, poverty, education, health, women and children, infrastructure and environment"],
 note:"The 9% headline and the 8.1% revision are both quoted as 'the target' by different sources. Both are correct for different moments in the plan."},

{id:"twelfth", kind:"plan", no:12, n:"Twelfth Five Year Plan", from:2012, to:2017, hy:1,
 theme:"Faster, more inclusive and sustainable growth",
 tgt:8.0, act:null,
 w:"The last Five Year Plan. Its target was cut from 9% to 8% before it even began, and the body that wrote it was abolished two and a half years in — the Planning Commission was replaced by NITI Aayog on 1 January 2015, though the plan itself was allowed to run to 31 March 2017.",
 key:["Sustainability named in the objective for the first time",
      "Planning Commission replaced by NITI Aayog, 1 January 2015 — the plan outlived its author",
      "The Fourteenth Finance Commission (2015) raised the states' share of central taxes to 42%, moving money out of plan transfers",
      "Ended 31 March 2017. Nothing has replaced the five-year cycle; there are now seven-, fifteen- and three-year documents instead"],
 note:"No single achieved growth figure is quoted with confidence for the Twelfth Plan: the GDP series was rebased to 2011-12 during it, so the numbers before and after the rebasing are not comparable. Sources put it around 7%."}

],

/* ------------------------------------------------------------ the 1991 reforms */

reform: {
  title:"1991 — the year the economy changed shape",
  lede:"Two things happened in 1991. India nearly defaulted, and India stopped running an economy by permit. The first is why the second was possible.",

  crisis:{
    h:"How the crisis built",
    w:"Nothing about 1991 was sudden. The Seventh Plan had been financed partly by borrowing abroad on commercial terms, and the bill came due in a year when three separate shocks arrived together.",
    rows:[
      ["The deficit","The central government's gross fiscal deficit had reached about 8.4% of GDP in 1990–91, financed increasingly by borrowing."],
      ["The Gulf War","Iraq invaded Kuwait in August 1990. Oil prices roughly doubled, and remittances from the Indian workers in the Gulf — about 180,000 of whom had to be airlifted home — stopped."],
      ["The rating","India's credit rating was cut below investment grade. Commercial banks stopped rolling over short-term credit, and non-resident Indians began withdrawing deposits."],
      ["The reserves","By June 1991 foreign exchange reserves were down to roughly $1 billion — enough for about two to three weeks of imports. The exact figure and the exact number of weeks vary between accounts; the order of magnitude does not."],
      ["The gold","20 tonnes of confiscated gold were sold to the Union Bank of Switzerland in May 1991 by the Chandra Shekhar government, and 47 tonnes were flown to the Bank of England in July as collateral by the Rao government. 67 tonnes in all, to raise a few hundred million dollars."],
      ["The politics","Rajiv Gandhi was assassinated on 21 May 1991, in the middle of the election. P.V. Narasimha Rao took office in June with a minority government and made Manmohan Singh — an economist, not a politician — Finance Minister."]
    ]
  },

  lpg:[
    {k:"Liberalisation", w:"Ending the licence system — the requirement that a private firm get government permission to start, expand, or change what it made.",
     rows:[
       ["Industrial licensing","Abolished for all but 18 industries by the New Industrial Policy of 24 July 1991. The list is now 4: electronic aerospace and defence equipment, industrial explosives, specified hazardous chemicals, and cigars and cigarettes."],
       ["Public sector reservation","17 industries were reserved for the state before 1991; the 1991 policy cut it to 8, and it now stands at 2 — atomic energy and specified railway operations."],
       ["MRTP","The requirement that large business houses get prior approval to expand — the asset limit was ₹100 crore — was scrapped. The MRTP Act itself was replaced by the Competition Act 2002."],
       ["Small-scale reservation","Hundreds of products were reserved for small-scale industry. That list was emptied over the following two decades and reservation was ended altogether in 2015."],
       ["Interest rates","Administered rates were progressively freed; the statutory liquidity ratio and cash reserve ratio were brought down from crisis levels over the following decade."]
     ]},
    {k:"Privatisation", w:"Reducing the state's ownership of firms — first by selling minority stakes, later by selling control.",
     rows:[
       ["Disinvestment begins","1991–92: minority stakes in public sector firms sold to financial institutions and mutual funds. The Rangarajan Committee set out the framework in 1993."],
       ["Strategic sales","Modern Food Industries in 2000 was the first sale of control; BALCO, VSNL, Hindustan Zinc, IPCL and Maruti followed."],
       ["The department","A Department of Disinvestment (1999) became a full Ministry (2001), and is now DIPAM — the Department of Investment and Public Asset Management, renamed in 2016."],
       ["Air India","Sold to Tata Sons and handed over on 27 January 2022 — the airline returning to the family that founded it in 1932 and lost it to nationalisation in 1953."],
       ["The 2021 policy","A new public sector enterprise policy named four strategic sectors in which a bare minimum state presence would be kept, with exit from the rest."]
     ]},
    {k:"Globalisation", w:"Opening the economy to foreign trade, foreign capital and a market-set exchange rate.",
     rows:[
       ["Devaluation","Two steps, on 1 and 3 July 1991 — about 9% and then 11%, roughly 18–19% in all against the major currencies."],
       ["LERMS","The Liberalised Exchange Rate Management System, March 1992: a dual rate, with 60% of export earnings convertible at the market rate and 40% at the official one. Unified in March 1993 into a managed float."],
       ["Current account convertibility","August 1994 — India accepted the obligations of Article VIII of the IMF's Articles of Agreement. The capital account is still not fully convertible."],
       ["Tariffs","The peak customs duty was above 300% in 1991. It has been in single or low double digits for most of the last two decades."],
       ["FERA to FEMA","The Foreign Exchange Regulation Act 1973, under which holding foreign currency was an offence to be justified, was replaced by the Foreign Exchange Management Act 1999, in force from 1 June 2000. The change from 'regulation' to 'management' is the whole point."],
       ["FDI","Automatic approval for foreign equity up to 51% in 34 industries in 1991, widened since to most sectors under an automatic route with caps."],
       ["WTO","India was a founder member on 1 January 1995, having been a GATT signatory since 1948."]
     ]}
  ],

  committees:[
    ["Narasimham Committee I (1991)","Financial sector. Recommended cutting the SLR and CRR, prudential norms and income recognition, a four-tier banking structure, and letting private banks in."],
    ["Narasimham Committee II (1998)","Banking sector reform — mergers of strong banks, capital adequacy, and reducing government holding."],
    ["Chelliah Committee (1991)","Tax reform. Raja J. Chelliah is called the father of tax reform in India: fewer rates, lower rates, wider base."],
    ["Rangarajan Committee (1993)","The framework for disinvestment of public sector shareholding."],
    ["Malhotra Committee (1993)","Insurance. Led to the opening of insurance to private companies and the creation of IRDA in 1999."],
    ["Kelkar Task Force (2002)","Direct and indirect taxes. The same Vijay Kelkar's 2003 report first proposed a national goods and services tax."]
  ],

  after:[
    ["Growth","Average growth moved from about 3.5% a year across the four decades before 1991 — the 'Hindu rate of growth', Raj Krishna's phrase — to 6% and above."],
    ["Reserves","From roughly $1 billion in 1991 to crossing $700 billion for the first time in September 2024."],
    ["Poverty","Fell substantially on every measure. How much of that is attributable to the reforms as against other causes is argued about, and the argument is not settled."],
    ["What did not follow","Employment. Growth after 1991 was capital- and skill-intensive, and the share of the workforce in agriculture fell far more slowly than agriculture's share of output. 'Jobless growth' is the standard criticism and it is a fair one."],
    ["Agriculture","Largely untouched by the 1991 reforms, which were about industry, trade and finance. This is the most common and most substantive criticism of them."],
    ["Inequality","Rose. Regional divergence rose too — the states that were already better off grew faster."]
  ]
},

/* ------------------------------------------------------------------ topics

   Standing topics. Each is a study page of its own: a short piece of prose
   that says what the thing is, then the tables the questions come from.    */

topics: [

{id:"institutions", n:"Planning bodies and NITI Aayog", hy:1,
 w:"Who planned, under what authority, and what replaced them.",
 intro:"Neither the Planning Commission nor NITI Aayog is mentioned in the Constitution, and neither was created by an Act of Parliament. Both are creatures of a Cabinet resolution — which is why one could be abolished and the other set up overnight, by executive decision, with no legislation at all. That single fact answers a large share of the questions asked about them.",
 blocks:[
  {h:"Planning Commission",
   rows:[
    ["Set up","15 March 1950, by a resolution of the Union Cabinet — not by the Constitution and not by statute"],
    ["Chairman","The Prime Minister, ex officio"],
    ["First Deputy Chairman","Gulzarilal Nanda"],
    ["Function","Assessed resources, formulated the plans, and allocated funds to states and ministries"],
    ["Abolished","1 January 2015. The announcement was made from the Red Fort on 15 August 2014"]
   ]},
  {h:"National Development Council",
   rows:[
    ["Set up","6 August 1952, also by executive resolution"],
    ["Chairman","The Prime Minister"],
    ["Members","All Union Cabinet Ministers, the Chief Ministers of all states, administrators of union territories, and members of the Planning Commission"],
    ["Function","The final approving authority for a Five Year Plan — the Commission drafted, the NDC adopted"],
    ["Now","Never formally abolished, but it last met in December 2012 to approve the Twelfth Plan, and its role has passed to NITI's Governing Council"]
   ]},
  {h:"NITI Aayog",
   note:"National Institution for Transforming India.",
   rows:[
    ["Set up","1 January 2015, by Cabinet resolution — the same instrument that made the Planning Commission"],
    ["Chairperson","The Prime Minister"],
    ["Governing Council","The Prime Minister, the Chief Ministers of all states, the Chief Ministers of Delhi and Puducherry, the Lieutenant Governors of other union territories, and NITI's own members"],
    ["Vice-Chairperson","Appointed by the Prime Minister, with the rank of a Cabinet Minister. Arvind Panagariya was the first, followed by Rajiv Kumar (2017) and Suman Bery (2022)"],
    ["Chief Executive Officer","Appointed by the Prime Minister, with the rank of Secretary to the Government of India"],
    ["The key difference","NITI Aayog does not allocate money. It advises. Funds are allocated by the Ministry of Finance"],
    ["Its programmes","Aspirational Districts Programme (2018), Atal Innovation Mission, Atal Tinkering Labs"],
    ["Its indices","SDG India Index, National Multidimensional Poverty Index, India Innovation Index, Composite Water Management Index, Health Index, Export Preparedness Index"]
   ]},
  {h:"Plans before the plans",
   note:"The proposals that pre-date independence — asked as a matching set.",
   rows:[
    ["Planned Economy for India (1934)","M. Visvesvaraya — the first serious blueprint for Indian planning"],
    ["National Planning Committee (1938)","Set up by the Congress under Subhas Chandra Bose's presidency, chaired by Jawaharlal Nehru"],
    ["Bombay Plan (1944)","Eight industrialists including J.R.D. Tata, G.D. Birla, Purshottamdas Thakurdas, Lala Shri Ram, Kasturbhai Lalbhai, A.D. Shroff, Ardeshir Dalal and John Matthai"],
    ["Gandhian Plan (1944)","S.N. Agarwal — village-centred, decentralised, small-scale"],
    ["People's Plan (1945)","M.N. Roy, drafted for the Indian Federation of Labour — agriculture-first and collectivist"],
    ["Sarvodaya Plan (1950)","Jayaprakash Narayan, drawing on Gandhi and Vinoba Bhave"]
   ]}
 ]},

{id:"banking", n:"Money, banking and the RBI", hy:1,
 w:"The central bank, the rates, the nationalisations and the notes.",
 intro:"The Reserve Bank is older than the Republic. It was set up under an Act of 1934 on the recommendation of the Hilton Young Commission, began work on 1 April 1935 as a shareholders' bank, and was nationalised on 1 January 1949 — a fortnight before India became a Republic. Almost every banking question turns on a date, a rate, or a threshold.",
 blocks:[
  {h:"The Reserve Bank of India",
   rows:[
    ["Recommended by","The Hilton Young Commission — the Royal Commission on Indian Currency and Finance, 1926"],
    ["Established","1 April 1935, under the Reserve Bank of India Act 1934"],
    ["Original head office","Calcutta; moved permanently to Bombay in 1937"],
    ["Nationalised","1 January 1949"],
    ["First Governor","Sir Osborne Smith"],
    ["First Indian Governor","C.D. Deshmukh"],
    ["Appointed by","The Central Government. The Governor is not a constitutional appointment"],
    ["Note issue","The RBI issues every note from ₹2 upward, signed by the Governor. The ₹1 note is issued by the Government of India and signed by the Finance Secretary; so are all coins"]
   ]},
  {h:"The policy rates",
   note:"Set by the Monetary Policy Committee, created by the Finance Act 2016 amending the RBI Act: six members — the Governor as chair, a Deputy Governor, one RBI officer, and three appointed by the Central Government. The inflation target is 4%, with a band of 2% either side.",
   rows:[
    ["Repo rate","The rate at which the RBI lends to banks against government securities. The policy rate"],
    ["Standing Deposit Facility","Since April 2022, the floor of the corridor — banks park surplus funds with the RBI without collateral. It replaced the reverse repo as the operative floor"],
    ["Marginal Standing Facility","The ceiling — emergency overnight borrowing by banks against their own SLR holdings"],
    ["Bank rate","The rate at which the RBI buys or rediscounts bills. Now aligned with the MSF and used mainly for penalties"],
    ["Cash Reserve Ratio","The share of deposits a bank must keep with the RBI in cash. It earns no interest"],
    ["Statutory Liquidity Ratio","The share of deposits a bank must hold in cash, gold or approved securities with itself"],
    ["Open Market Operations","RBI purchases or sales of government securities, to add or drain liquidity"]
   ]},
  {h:"Nationalisation and the big banks",
   rows:[
    ["First round","19 July 1969 — 14 banks with deposits of ₹50 crore or more"],
    ["Second round","15 April 1980 — 6 banks with deposits of ₹200 crore or more"],
    ["Why 19 and not 20","New Bank of India, nationalised in 1980, was merged into Punjab National Bank in 1993"],
    ["State Bank of India","Created 1 July 1955 from the Imperial Bank of India, on the recommendation of the Gorwala Committee — the All India Rural Credit Survey Committee"],
    ["Imperial Bank of India","Itself formed in 1921 by merging the three presidency banks of Bengal, Bombay and Madras"],
    ["First bank in India","Bank of Hindustan, 1770, at Calcutta"],
    ["First bank managed by Indians","Awadh Commercial Bank, 1881 — the first limited-liability bank run by Indians"],
    ["First purely Indian-owned bank","Punjab National Bank, 1894, founded at Lahore. Lala Lajpat Rai was among its founders"]
   ]},
  {h:"Notes, coins and payments",
   rows:[
    ["Printing presses","Nashik (Maharashtra) and Dewas (Madhya Pradesh) under SPMCIL; Mysuru (Karnataka) and Salboni (West Bengal) under BRBNMPL, an RBI subsidiary"],
    ["Mints","Mumbai, Kolkata, Hyderabad and Noida"],
    ["The ₹ symbol","Designed by D. Udaya Kumar and adopted on 15 July 2010"],
    ["Demonetisation","8 November 2016 — ₹500 and ₹1,000 notes ceased to be legal tender"],
    ["₹2,000 note","Withdrawn from circulation from 19 May 2023; it remains legal tender"],
    ["Deposit insurance","DICGC covers deposits up to ₹5 lakh per depositor per bank, raised from ₹1 lakh in 2020"],
    ["NPCI","National Payments Corporation of India, 2008 — runs UPI (2016), RuPay (2012), IMPS (2010), BHIM (2016) and the NACH system"],
    ["Priority sector lending","40% of adjusted net bank credit for commercial banks, of which 18% to agriculture, 12% to weaker sections and 7.5% to micro enterprises"]
   ]}
 ]},

{id:"budget", n:"The Budget, taxes and GST", hy:1,
 w:"Where the money comes from, where it goes, and how GST works.",
 intro:"The Budget is not called the Budget in the Constitution. Article 112 calls it the Annual Financial Statement, and requires the government to lay before Parliament a statement of estimated receipts and expenditure for every financial year. Everything else — the date, the speech, the halwa — is convention.",
 blocks:[
  {h:"The Budget",
   rows:[
    ["Constitutional name","Annual Financial Statement, Article 112"],
    ["Date","Presented on 1 February since 2017. Before that, the last working day of February"],
    ["Railway Budget","Merged into the Union Budget from 2017, ending a separation that had lasted since 1924 on the Acworth Committee's recommendation"],
    ["Financial year","1 April to 31 March"],
    ["First budget of independent India","R.K. Shanmukham Chetty, 26 November 1947"],
    ["First budget of the Republic","John Matthai, 1950–51 — it announced the Planning Commission"],
    ["Most budgets presented","Morarji Desai — ten"],
    ["First woman to present a budget","Indira Gandhi, for 1970–71, while holding the finance portfolio herself. Nirmala Sitharaman is the first full-time woman Finance Minister to present one"],
    ["The three funds","Consolidated Fund of India (Article 266), Contingency Fund (Article 267) and Public Account (Article 266(2))"]
   ]},
  {h:"The deficits",
   note:"Each measures a different thing, and each is asked as a definition.",
   rows:[
    ["Revenue deficit","Revenue expenditure minus revenue receipts. Borrowing to meet running costs"],
    ["Fiscal deficit","Total expenditure minus total receipts excluding borrowings — the government's total borrowing requirement for the year"],
    ["Primary deficit","Fiscal deficit minus interest payments. It shows the borrowing not caused by past borrowing"],
    ["Effective revenue deficit","Revenue deficit minus grants to states for creating capital assets"],
    ["FRBM Act","Fiscal Responsibility and Budget Management Act 2003, in force from 5 July 2004. Reviewed by the N.K. Singh committee, 2017"]
   ]},
  {h:"Goods and Services Tax",
   rows:[
    ["Constitutional basis","The 101st Amendment Act, 2016. It inserted Article 246A (concurrent power to tax goods and services), Article 269A (inter-state supply) and Article 279A (the GST Council)"],
    ["In force","1 July 2017"],
    ["First proposed by","The Kelkar Task Force on indirect taxes, 2003. The design was worked out by the Empowered Committee of State Finance Ministers"],
    ["First state to ratify","Assam"],
    ["The Council","Chaired by the Union Finance Minister, with the Union Minister of State for Finance and one minister nominated by each state"],
    ["Voting","Decisions need a three-fourths majority of members present and voting. The Centre has one-third of the weight, all states together two-thirds. Quorum is one half"],
    ["The four taxes","CGST and SGST on intra-state supply, UTGST in union territories without a legislature, and IGST on inter-state supply and imports"],
    ["Outside GST","Alcohol for human consumption is excluded by the Constitution itself. Petroleum crude, petrol, diesel, aviation turbine fuel and natural gas are within GST's scope but taxed at zero rate until the Council decides otherwise. Electricity and stamp duty on property stay outside"],
    ["The slabs","Four main rates — 5%, 12%, 18% and 28% — from 2017 until 22 September 2025, when the Council moved to two main rates, 5% and 18%, with a 40% rate on a short list of demerit and luxury goods"]
   ]},
  {h:"The Finance Commission",
   rows:[
    ["Article","280. Constituted by the President every fifth year, or earlier"],
    ["Composition","A Chairman and four other members"],
    ["Job","Recommends how the net proceeds of central taxes are divided between the Centre and the states, and among the states; and the principles governing grants-in-aid"],
    ["Fourteenth (Y.V. Reddy)","Raised the states' share of the divisible pool from 32% to 42%"],
    ["Fifteenth (N.K. Singh)","Set it at 41%, the one percentage point reflecting Jammu and Kashmir's reorganisation into union territories"],
    ["Sixteenth","Constituted on 31 December 2023 under Arvind Panagariya, for the five years beginning 1 April 2026"]
   ]}
 ]},

{id:"poverty", n:"Poverty, employment and schemes", hy:1,
 w:"How poverty is measured, and the programmes attached to the answer.",
 intro:"India has never had one poverty line. It has had a sequence of committees, each of which redrew the line and so changed the number of poor people overnight without anyone becoming richer or poorer. Knowing which committee produced which figure is more useful than knowing any single figure.",
 blocks:[
  {h:"Measuring poverty",
   rows:[
    ["Working Group (1962)","The first attempt at a national poverty line, on a minimum consumption basket"],
    ["Alagh Committee (1979)","Defined the line by calorie norms — 2,400 calories a day in rural areas, 2,100 in urban"],
    ["Lakdawala Committee (1993)","Kept the calorie anchor but updated it with state-specific price indices"],
    ["Tendulkar Committee (2009)","Moved away from calories to a basket including health and education. Put poverty at 21.9% in 2011–12. This remains the official series"],
    ["Rangarajan Committee (2014)","Revised the basket upward and put poverty at 29.5% for the same year, 2011–12 — the same country, the same year, eight percentage points apart"],
    ["National Multidimensional Poverty Index","NITI Aayog's measure, built on the Alkire–Foster method: 12 indicators across health, education and standard of living. A NITI discussion paper of January 2024 put the headcount at 11.28% in 2022–23, and said about 24.8 crore people had moved out of multidimensional poverty since 2013–14"]
   ]},
  {h:"Employment programmes, in order",
   rows:[
    ["1978–79","Integrated Rural Development Programme (IRDP) — self-employment assets for the rural poor"],
    ["1979","TRYSEM — Training of Rural Youth for Self-Employment"],
    ["1980","National Rural Employment Programme"],
    ["1983","Rural Landless Employment Guarantee Programme"],
    ["1989","Jawahar Rozgar Yojana — merged the two above"],
    ["1993","Prime Minister's Rozgar Yojana, for educated unemployed youth"],
    ["1999","Swarnajayanti Gram Swarozgar Yojana — merged six earlier self-employment schemes"],
    ["2001","Sampoorna Grameen Rozgar Yojana"],
    ["2005","National Rural Employment Guarantee Act — the change from scheme to legal right"],
    ["2011","National Rural Livelihoods Mission (Aajeevika), later DAY-NRLM"]
   ]},
  {h:"MGNREGA",
   note:"The one employment programme that is a statutory right rather than a scheme, which is why it cannot simply be discontinued.",
   rows:[
    ["The Act","National Rural Employment Guarantee Act, passed 23 August 2005"],
    ["Launched","2 February 2006, at Bandlapalli in Anantapur district, Andhra Pradesh, in 200 districts first"],
    ["Renamed","2 October 2009, as the Mahatma Gandhi NREGA"],
    ["The guarantee","100 days of unskilled manual work in a financial year to every rural household whose adult members volunteer for it"],
    ["If work is not given","An unemployment allowance is payable by the state government"],
    ["Time limit","Work within 15 days of applying, and within 5 km of the village, or an extra wage"],
    ["Women","At least one-third of beneficiaries"],
    ["Accountability","Social audit by the Gram Sabha — the first Indian law to build one in"]
   ]},
  {h:"The big current schemes and their dates",
   rows:[
    ["Make in India","25 September 2014"],
    ["Pradhan Mantri Jan Dhan Yojana","28 August 2014 — financial inclusion, zero-balance accounts"],
    ["Swachh Bharat Mission","2 October 2014"],
    ["Beti Bachao Beti Padhao","22 January 2015, launched at Panipat, Haryana"],
    ["Pradhan Mantri Mudra Yojana","8 April 2015 — Shishu up to ₹50,000, Kishore to ₹5 lakh, Tarun to ₹10 lakh"],
    ["Digital India","1 July 2015"],
    ["Skill India / PMKVY","15 July 2015"],
    ["Startup India","16 January 2016"],
    ["Pradhan Mantri Ujjwala Yojana","1 May 2016, launched at Ballia, Uttar Pradesh — LPG connections to women of poor households"],
    ["Ayushman Bharat PM-JAY","23 September 2018, launched at Ranchi — health cover of ₹5 lakh per family per year"],
    ["PM-KISAN","24 February 2019 — ₹6,000 a year to landholding farmer families, in three instalments"],
    ["Jal Jeevan Mission","15 August 2019 — tap water to every rural household"],
    ["PM Gati Shakti","13 October 2021 — a national master plan for multi-modal infrastructure"],
    ["PM Vishwakarma","17 September 2023 — credit and training for eighteen traditional trades"]
   ]},
  {h:"National Food Security Act 2013",
   rows:[
    ["Coverage","Up to 75% of the rural population and 50% of the urban population"],
    ["Entitlement","5 kg of foodgrain per person per month for priority households; Antyodaya households get 35 kg per household"],
    ["Original prices","₹3 a kg for rice, ₹2 for wheat, ₹1 for coarse grains"],
    ["Now","Distributed free under the extension of the Pradhan Mantri Garib Kalyan Anna Yojana, announced for five years from 1 January 2024"],
    ["Maternity benefit","₹6,000 to every pregnant and lactating mother, as a statutory entitlement"],
    ["The head of the household","The Act makes the eldest woman of the household, aged 18 or above, the head for the purpose of the ration card"]
   ]}
 ]},

{id:"agriculture", n:"Agriculture and the revolutions", hy:1,
 w:"The Green Revolution, the colour-coded ones, and how MSP is fixed.",
 intro:"Agriculture employs far more Indians than it feeds into the national income, and that gap is the country's central economic fact. The Green Revolution closed the food gap in about a decade and left almost every other problem in place.",
 blocks:[
  {h:"The Green Revolution",
   rows:[
    ["When","From 1966–67, under the New Agricultural Strategy adopted after the 1965–66 drought"],
    ["Who","Norman Borlaug developed the dwarf wheat varieties; M.S. Swaminathan led their adaptation and spread in India"],
    ["The package","High-yielding variety seeds, assured irrigation, chemical fertiliser, pesticides and a guaranteed price"],
    ["Where","Punjab, Haryana and western Uttar Pradesh above all — irrigated wheat country"],
    ["Which crop","Wheat first and most. Rice followed later and less evenly; pulses and oilseeds hardly at all"],
    ["The cost","Groundwater depletion, soil degradation, regional inequality, and a narrowing of the crops grown"]
   ]},
  {h:"The revolutions by colour",
   note:"A pure matching exercise, and it is asked as one.",
   rows:[
    ["Green","Foodgrains, especially wheat"],
    ["White","Milk — Operation Flood, 1970, under Verghese Kurien"],
    ["Blue","Fish and aquaculture"],
    ["Yellow","Oilseeds — the Technology Mission on Oilseeds, 1986, associated with Sam Pitroda"],
    ["Golden","Horticulture, fruit and honey"],
    ["Golden Fibre","Jute"],
    ["Silver","Eggs and poultry"],
    ["Silver Fibre","Cotton"],
    ["Pink","Prawn, and also used for onion"],
    ["Red","Tomato and meat"],
    ["Grey","Fertiliser"],
    ["Round","Potato"],
    ["Black","Petroleum"],
    ["Brown","Leather and cocoa"]
   ]},
  {h:"Prices and institutions",
   rows:[
    ["MSP is recommended by","The Commission for Agricultural Costs and Prices — set up in 1965 as the Agricultural Prices Commission, renamed in 1985"],
    ["MSP is announced by","The Cabinet Committee on Economic Affairs. The CACP only advises"],
    ["Crops covered","22 crops, plus a Fair and Remunerative Price for sugarcane fixed separately"],
    ["The Swaminathan formula","MSP at 50% above the comprehensive cost of production, C2. The government's stated benchmark is 50% above A2+FL, a narrower cost"],
    ["ICAR","Indian Council of Agricultural Research, 1929 — set up as the Imperial Council on the Royal Commission on Agriculture's recommendation"],
    ["NABARD","12 July 1982, on the Sivaraman Committee's recommendation — the apex body for rural credit"],
    ["Crop seasons","Kharif sown with the monsoon in June–July and harvested in September–October; rabi sown October–December and harvested April–June; zaid the short summer season between them"]
   ]}
 ]},

{id:"national-income", n:"National income and the data", hy:1,
 w:"GDP, GNP, NNP, and who counts them.",
 intro:"Every one of these terms is a different question about the same economy: produced by whom, where, before or after depreciation, at whose prices. The definitions are asked far more often than the numbers.",
 blocks:[
  {h:"The concepts",
   rows:[
    ["GDP","Gross Domestic Product — the value of all final goods and services produced within the country's borders in a year, whoever produced them"],
    ["GNP","Gross National Product — GDP plus net factor income from abroad. Produced by the country's residents, wherever they are"],
    ["NDP","GDP minus depreciation"],
    ["NNP","GNP minus depreciation. NNP at factor cost is national income proper"],
    ["Per capita income","National income divided by population"],
    ["Market price vs factor cost","Market price includes indirect taxes and excludes subsidies. Factor cost = market price − indirect taxes + subsidies"],
    ["GVA","Gross Value Added — output minus intermediate consumption. GDP = GVA + product taxes − product subsidies. India has headlined GVA alongside GDP since the 2015 rebasing"],
    ["Real vs nominal","Nominal is at current prices; real is at constant prices of a base year, so it strips out inflation"]
   ]},
  {h:"Who counted it first",
   rows:[
    ["Dadabhai Naoroji","The first estimate of Indian national income, in Poverty and Un-British Rule in India — about ₹20 per head for 1867–68, and the drain theory built on it"],
    ["V.K.R.V. Rao","The first scientific estimate, for 1931–32"],
    ["National Income Committee","Appointed 1949 under P.C. Mahalanobis, with V.K.R.V. Rao and D.R. Gadgil. Its first report came in 1951"],
    ["Who publishes now","The National Statistical Office under the Ministry of Statistics and Programme Implementation. The Central Statistical Organisation (1951) and the National Sample Survey Office were merged into the NSO in 2019"],
    ["Base year","2011–12 for the current series. A revision to a 2022–23 base has been announced"]
   ]},
  {h:"Sectors and their share",
   note:"The structural puzzle of the Indian economy in one table.",
   rows:[
    ["Primary","Agriculture, forestry, fishing, mining. Roughly a sixth of output — and still around 45% of the workforce"],
    ["Secondary","Manufacturing, construction, electricity. Its share of output has barely moved in three decades, which is the unusual part of India's story"],
    ["Tertiary","Services — trade, transport, finance, IT, public administration. More than half of output"],
    ["What is unusual","Most countries move labour from agriculture into manufacturing and then into services. India moved output into services while leaving labour in agriculture"]
   ]}
 ]},

{id:"reports", n:"Who publishes which report", hy:1,
 w:"The index-to-organisation matching that gets asked every year.",
 intro:"This is a pure matching table, and it is nearly free marks. The trap is always an organisation that sounds right — the World Bank for the Global Hunger Index, the UN for the World Happiness Report — and is not.",
 blocks:[
  {h:"International",
   rows:[
    ["Human Development Report / HDI","United Nations Development Programme"],
    ["World Development Report","World Bank"],
    ["World Economic Outlook","International Monetary Fund"],
    ["Global Financial Stability Report","International Monetary Fund"],
    ["Global Competitiveness Report","World Economic Forum"],
    ["Global Gender Gap Report","World Economic Forum"],
    ["Global Risks Report","World Economic Forum"],
    ["Global Hunger Index","Concern Worldwide and Welthungerhilfe — not a UN body"],
    ["Global Innovation Index","World Intellectual Property Organization"],
    ["Corruption Perceptions Index","Transparency International"],
    ["World Happiness Report","The UN Sustainable Development Solutions Network"],
    ["Environmental Performance Index","Yale and Columbia universities"],
    ["Global Peace Index","Institute for Economics and Peace"],
    ["World Press Freedom Index","Reporters Without Borders"],
    ["World Investment Report","UN Conference on Trade and Development"],
    ["Trade and Development Report","UN Conference on Trade and Development"],
    ["State of the World's Children","UNICEF"],
    ["State of Food Security and Nutrition in the World","FAO, with IFAD, UNICEF, WFP and WHO"]
   ]},
  {h:"Indian",
   rows:[
    ["Economic Survey","Ministry of Finance, prepared by the Chief Economic Adviser, tabled a day before the Budget"],
    ["Financial Stability Report","Reserve Bank of India"],
    ["Report on Trend and Progress of Banking in India","Reserve Bank of India"],
    ["Periodic Labour Force Survey","National Statistical Office, MoSPI"],
    ["Consumer Price Index","National Statistical Office, MoSPI"],
    ["Wholesale Price Index","Office of the Economic Adviser, Ministry of Commerce and Industry"],
    ["Index of Industrial Production","National Statistical Office, MoSPI"],
    ["SDG India Index","NITI Aayog"],
    ["India State of Forest Report","Forest Survey of India, Dehradun — every two years"],
    ["National Family Health Survey","Ministry of Health and Family Welfare, through IIPS Mumbai"]
   ]}
 ]},

{id:"international", n:"International economic bodies", hy:1,
 w:"Bretton Woods, the WTO, and the groups India belongs to.",
 intro:"The IMF and the World Bank were both agreed at Bretton Woods in July 1944, and both began work in 1945–46. The confusion between what each one does is one of the most reliable question types in the subject.",
 blocks:[
  {h:"The Bretton Woods institutions",
   rows:[
    ["Agreed at","The Bretton Woods Conference, New Hampshire, July 1944"],
    ["IMF","Began operations 1 March 1947. Headquarters Washington DC. Lends to fix short-term balance of payments problems and oversees the international monetary system. Publishes the World Economic Outlook"],
    ["Special Drawing Rights","The IMF's reserve asset, created in 1969. Its value is set by a basket of five currencies — the US dollar, euro, Chinese renminbi, Japanese yen and pound sterling"],
    ["World Bank","The International Bank for Reconstruction and Development, 1945. Headquarters Washington DC. Lends long-term for development projects"],
    ["The World Bank Group","IBRD, IDA (soft loans, 1960), IFC (private sector, 1956), MIGA (guarantees, 1988) and ICSID (disputes, 1966)"],
    ["India and the IMF","A founder member. India has not borrowed from the IMF since the 1991 programme"]
   ]},
  {h:"Trade",
   rows:[
    ["GATT","General Agreement on Tariffs and Trade, 1948. India was a founder signatory"],
    ["WTO","Created by the Uruguay Round's Marrakesh Agreement and in existence from 1 January 1995. Headquarters Geneva. India is a founder member"],
    ["How the WTO decides","By consensus; every member has one vote. It has a binding dispute settlement system, which GATT did not"],
    ["Doha Round","Launched 2001, still unconcluded — agriculture subsidies and food stockholding are the sticking points, and India's public stockholding programme is central to them"]
   ]},
  {h:"Regional and plurilateral groups",
   rows:[
    ["BRICS","Brazil, Russia, India, China and South Africa. The term BRIC was Jim O'Neill's, in 2001; South Africa joined in 2010. The New Development Bank, headquartered in Shanghai, is its bank"],
    ["Asian Development Bank","1966, headquartered in Manila"],
    ["Asian Infrastructure Investment Bank","2016, headquartered in Beijing. India is the second largest shareholder"],
    ["SAARC","1985, headquartered in Kathmandu — eight members"],
    ["BIMSTEC","1997, headquartered in Dhaka — the Bay of Bengal grouping"],
    ["ASEAN","1967, headquartered in Jakarta. India is a dialogue partner, not a member"],
    ["OPEC","1960, headquartered in Vienna"],
    ["G20","India held the presidency in 2023 and hosted the summit in New Delhi, at which the African Union was admitted as a permanent member"]
   ]}
 ]}

],

/* ------------------------------------------------------------ the exam layer */

confusions: [

{k:"Which plan had which objective",
 rows:[["First (1951–56)","Agriculture, irrigation and power. Harrod–Domar. The only early plan to beat its target"],
       ["Second (1956–61)","Heavy industry. Mahalanobis. Industrial Policy Resolution 1956"],
       ["Third (1961–66)","A self-reliant, self-generating economy — and the worst failure"],
       ["Fourth (1969–74)","Growth with stability and self-reliance. Bank nationalisation"],
       ["Fifth (1974–79)","Garibi Hatao. Ended a year early, in 1978"],
       ["Sixth (1980–85)","Direct attack on poverty"],
       ["Seventh (1985–90)","Food, Work and Productivity"],
       ["Eighth (1992–97)","Human development. The first plan after liberalisation"],
       ["Ninth (1997–2002)","Growth with social justice and equality"],
       ["Tenth (2002–07)","Doubling per capita income in ten years"],
       ["Eleventh (2007–12)","Faster and more inclusive growth"],
       ["Twelfth (2012–17)","Faster, more inclusive and sustainable growth"]],
 note:"Fifth and Sixth are the pair most often swapped, because both are about poverty. The Fifth said remove poverty; the Sixth said attack it directly — and actually built the programmes."},

{k:"Which plans beat their target",
 rows:[["Beat it","First (2.1 target, 3.6 achieved), Fifth (4.4 / 4.8), Sixth (5.2 / 5.7), Seventh (5.0 / 6.0), Eighth (5.6 / 6.8)"],
       ["Missed it","Second (marginally), Third (5.6 / 2.4 — the worst), Fourth (5.7 / 3.3), Ninth (6.5 / 5.4), Tenth (8.0 / 7.6), Eleventh (9.0 / 8.0)"],
       ["The biggest miss","The Third Plan — it achieved less than half of what it set out to do"],
       ["The biggest beat","The Eighth Plan — 6.8% against a target of 5.6%"]],
 note:"Achieved figures are the Planning Commission's own end-of-plan estimates and vary by a few tenths across sources. The ranking does not change."},

{k:"Planning Commission vs NITI Aayog",
 rows:[["Both","Created by a Cabinet resolution. Neither is constitutional and neither is statutory. Both chaired by the Prime Minister"],
       ["Planning Commission","Allocated funds to states and ministries. Made the plans. Its Deputy Chairman had Cabinet rank"],
       ["NITI Aayog","Allocates nothing — the Finance Ministry does. Advises, benchmarks and publishes indices. Its Vice-Chairperson has Cabinet rank"],
       ["The relationship with states","The Commission dealt with states largely one way, from Delhi. NITI's Governing Council puts every Chief Minister in the room — 'cooperative federalism' is the stated design"]],
 note:"'Was NITI Aayog created by an Act of Parliament' is the trap. It was not. Neither was the body it replaced."},

{k:"The plan gaps — three different things",
 rows:[["Plan holiday, 1966–69","Three Annual Plans after the Third Plan collapsed. The 1966 devaluation and the start of the Green Revolution"],
       ["Rolling Plan, 1978–80","The Janata government's approach — targets revised every year instead of fixed for five"],
       ["Annual Plans, 1990–92","Political instability and the balance of payments crisis, before the Eighth Plan could begin"]],
 note:"All three are called 'plan holidays' loosely. Strictly the plan holiday is 1966–69."},

{k:"Devaluation — 1966 or 1991",
 rows:[["6 June 1966","About 36.5% against the dollar, from ₹4.76 to ₹7.50. A single step, under Indira Gandhi, pressed for by the World Bank and the IMF"],
       ["1 and 3 July 1991","Two steps of about 9% and 11%, roughly 18–19% in all. Under Narasimha Rao, executed by the RBI, as the opening move of the reforms"]],
 note:"1966 was the bigger devaluation. 1991 was the more consequential one, because of what followed it."},

{k:"Liberalisation, privatisation, globalisation",
 rows:[["Liberalisation","Removing the state's control over what private firms may do — licensing, capacity limits, price controls"],
       ["Privatisation","Reducing the state's ownership of firms — disinvestment and strategic sale"],
       ["Globalisation","Opening the economy to the world — trade, capital, and a market exchange rate"]],
 note:"A question that describes 'abolishing industrial licensing' is liberalisation, not privatisation. Nothing changed hands."},

{k:"Bank nationalisation — the two rounds",
 rows:[["19 July 1969","14 banks, with deposits of ₹50 crore or more"],
       ["15 April 1980","6 banks, with deposits of ₹200 crore or more"],
       ["Why 19 survive as a number","New Bank of India was merged into Punjab National Bank in 1993"]],
 note:"The threshold is asked as often as the date. ₹50 crore in 1969, ₹200 crore in 1980."},

{k:"CRR and SLR",
 rows:[["Cash Reserve Ratio","Held with the Reserve Bank, in cash, earning no interest"],
       ["Statutory Liquidity Ratio","Held by the bank itself, in cash, gold or approved securities — and it does earn a return"],
       ["Effect of raising either","Less money available to lend, so credit tightens"]],
 note:"The distinction is where it is held and whether it earns anything. CRR with the RBI and idle; SLR with the bank and earning."},

{k:"Repo and reverse repo",
 rows:[["Repo","The RBI lends to banks. Raising it makes borrowing costlier and tightens money"],
       ["Reverse repo","Banks lend to the RBI. Since April 2022 the Standing Deposit Facility, which needs no collateral, is the operating floor of the corridor instead"],
       ["The corridor","MSF at the top, repo in the middle, SDF at the bottom"]],
 note:"Remember it from the RBI's side: repo is the RBI giving money out, reverse repo is the RBI taking it in."},

{k:"Tendulkar or Rangarajan",
 rows:[["Tendulkar (2009)","21.9% poverty in 2011–12. Still the official line"],
       ["Rangarajan (2014)","29.5% for the same year. A wider consumption basket"],
       ["NITI's MPI","A different thing altogether — multidimensional, not a consumption line. 11.28% in 2022–23"]],
 note:"Same country, same year, two official-sounding numbers eight points apart. The question is always which committee, not which number."}

],

facts: [

{g:"The plans at a glance",
 note:"Target and achieved growth, percent per year.",
 items:[
  ["First, 1951–56","2.1 target · 3.6 achieved · agriculture · Harrod–Domar"],
  ["Second, 1956–61","4.5 · 4.27 · heavy industry · Mahalanobis"],
  ["Third, 1961–66","5.6 · 2.4 · self-reliance · two wars and a drought"],
  ["Plan holiday, 1966–69","Three annual plans · devaluation · Green Revolution"],
  ["Fourth, 1969–74","5.7 · 3.3 · growth with stability · bank nationalisation"],
  ["Fifth, 1974–79","4.4 · 4.8 · Garibi Hatao · ended early in 1978"],
  ["Rolling Plan, 1978–80","Janata government · targets revised yearly"],
  ["Sixth, 1980–85","5.2 · 5.7 · direct attack on poverty · NABARD"],
  ["Seventh, 1985–90","5.0 · 6.0 · Food, Work, Productivity"],
  ["Annual Plans, 1990–92","Instability and the balance of payments crisis"],
  ["Eighth, 1992–97","5.6 · 6.8 · human development · post-reform"],
  ["Ninth, 1997–2002","6.5 · 5.4 · growth with social justice"],
  ["Tenth, 2002–07","8.0 · 7.6 · double per capita income"],
  ["Eleventh, 2007–12","9.0 · 8.0 · faster and more inclusive"],
  ["Twelfth, 2012–17","8.0 · the last plan · NITI Aayog replaced its author"]
 ]},

{g:"Dates worth knowing cold",
 items:[
  ["15 March 1950","Planning Commission set up"],
  ["6 August 1952","National Development Council set up"],
  ["1 April 1935","Reserve Bank begins operations"],
  ["1 January 1949","Reserve Bank nationalised"],
  ["1 July 1955","State Bank of India created from the Imperial Bank"],
  ["6 June 1966","Rupee devalued about 36.5%"],
  ["19 July 1969","14 banks nationalised"],
  ["15 April 1980","6 more banks nationalised"],
  ["12 July 1982","NABARD established"],
  ["24 July 1991","New Industrial Policy and the reform budget"],
  ["1 January 1995","India a founder member of the WTO"],
  ["23 August 2005","NREGA passed; launched 2 February 2006"],
  ["8 November 2016","Demonetisation of ₹500 and ₹1,000 notes"],
  ["1 July 2017","Goods and Services Tax comes into force"],
  ["1 January 2015","NITI Aayog replaces the Planning Commission"]
 ]},

{g:"Firsts and fathers",
 items:[
  ["First estimate of national income","Dadabhai Naoroji"],
  ["First scientific estimate","V.K.R.V. Rao, for 1931–32"],
  ["Father of Indian planning","M. Visvesvaraya, for Planned Economy for India (1934)"],
  ["Architect of the Second Plan","P.C. Mahalanobis"],
  ["Father of the Green Revolution in India","M.S. Swaminathan"],
  ["Father of the White Revolution","Verghese Kurien"],
  ["Father of tax reform in India","Raja J. Chelliah"],
  ["First Deputy Chairman, Planning Commission","Gulzarilal Nanda"],
  ["First Vice-Chairman, NITI Aayog","Arvind Panagariya"],
  ["First Governor of the RBI","Sir Osborne Smith"],
  ["First Indian Governor of the RBI","C.D. Deshmukh"],
  ["First budget of independent India","R.K. Shanmukham Chetty, 26 November 1947"]
 ]},

{g:"Institutions and the year they were set up",
 items:[
  ["Reserve Bank of India","1935"],
  ["Industrial Finance Corporation of India","1948"],
  ["Planning Commission","1950"],
  ["Central Statistical Organisation","1951"],
  ["State Bank of India","1955"],
  ["Life Insurance Corporation","1956"],
  ["Food Corporation of India","1965"],
  ["Agricultural Prices Commission (now CACP)","1965"],
  ["NABARD","1982"],
  ["SEBI","Set up 1988, given statutory powers by the SEBI Act 1992"],
  ["SIDBI","1990"],
  ["IRDA","1999"],
  ["Competition Commission of India","Under the Competition Act 2002; operational from 2009"],
  ["Insolvency and Bankruptcy Board of India","2016"],
  ["NITI Aayog","2015"]
 ]},

{g:"Terms that are asked as definitions",
 items:[
  ["Inflation","A sustained rise in the general price level. Measured in India by the Consumer Price Index for the policy target"],
  ["Stagflation","High inflation together with stagnant growth and high unemployment"],
  ["Deflation","A sustained fall in the general price level — worse than it sounds, because it postpones spending"],
  ["Disinflation","Inflation falling but still positive. Not the same as deflation"],
  ["Fiscal drag","Inflation pushing incomes into higher tax brackets without any real gain"],
  ["Crowding out","Government borrowing raising interest rates and squeezing out private investment"],
  ["Hindu rate of growth","Raj Krishna's phrase for the roughly 3.5% a year India managed from the 1950s to the 1980s"],
  ["Demographic dividend","The growth available while the working-age population is large relative to dependants. India's window is open now and closes around the middle of the century"],
  ["Repo rate","The rate at which the RBI lends to banks"],
  ["Balance of payments","The record of all economic transactions between residents and the rest of the world — current account plus capital account"],
  ["Current account deficit","Imports of goods and services exceeding exports, after transfers"],
  ["Devaluation vs depreciation","Devaluation is a deliberate official reduction under a fixed rate. Depreciation is the market doing it under a floating one"],
  ["Laffer curve","The proposition that beyond some rate, raising tax rates lowers tax revenue"],
  ["Gini coefficient","A measure of inequality from 0 (perfect equality) to 1 (one person has everything)"],
  ["Lorenz curve","The graph the Gini coefficient is calculated from"]
 ]}
]

};
