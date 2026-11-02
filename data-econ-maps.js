/* The Article Machine - data-econ-maps.js
   The Indian Economy mind maps: seven, and an overview whose branches open
   them.

   Nothing here is new. Every line is taken from data-economy.js - the plans,
   the 1991 reforms, the eight standing topics, the confused pairs and the
   quick-fact tables - which is where the facts are checked and where the
   fuller statement of each one lives. A map is that material cut to the words
   the question turns on.

   Fields:  ECON_MAPS                 the overview map
              hub, sub                the centre of the map
              br[]                    branches: h title, to (a map id: the
                                      branch opens that map), lv leaves,
                                      m an optional memory hook
            ECON_MAPS.topics[id]      one map per topic, same shape, no `to`

   A leaf is a string, or [key, text]. The key is the PROMPT - a plan, a rate,
   a date - and it stays visible when the map is covered for recall; the text
   is the answer and is what gets covered. ==text== marks the words the
   question turns on.                                                      */

window.ECON_MAPS = {

hub: "The Indian Economy",
sub: "Seven maps: the plans to the Budget",
br: [
  { h: "The Five Year Plans", to: "plans",
    lv: [["First, 1951–56", "==agriculture==, on the ==Harrod–Domar== model — target ==2.1==, achieved ==3.6=="],
         ["Second, 1956–61", "==heavy industry==, the ==Mahalanobis== model"],
         ["Fifth, 1974–79", "==Garibi Hatao== — and it ==ended early==, in 1978"],
         ["Twelfth, 2012–17", "the ==last== plan — ==NITI Aayog== replaced its author"]] },

  { h: "Planning bodies", to: "institutions",
    lv: [["Planning Commission", "==15 March 1950==, by a ==Cabinet resolution== — ==not== a constitutional body"],
         ["NDC", "==6 August 1952=="],
         ["NITI Aayog", "==1 January 2015=="],
         ["Father of Indian planning", "==M. Visvesvaraya==, for ==Planned Economy for India== (1934)"]] },

  { h: "The RBI and the rates", to: "banking",
    lv: [["Established", "==1 April 1935==, on the ==Hilton Young== Commission"],
         ["Nationalised", "==1 January 1949=="],
         ["Repo", "the ==policy rate== — the RBI ==lends== to banks against ==government securities=="],
         ["Nationalisation", "==14 banks, 1969==; ==6 more, 1980=="]] },

  { h: "The Budget, taxes and GST", to: "budget",
    lv: [["Article 112", "the ==Annual Financial Statement=="],
         ["Presented", "on ==1 February== since ==2017=="],
         ["Fiscal deficit", "total expenditure ==minus receipts excluding borrowings=="],
         ["GST", "the ==101st Amendment==, in force ==1 July 2017=="]] },

  { h: "1991", to: "reform",
    lv: [["The reserves", "about ==$1 billion== by June 1991 — ==two to three weeks== of imports"],
         ["The gold", "==67 tonnes== in all — ==20== sold, ==47== flown to the ==Bank of England=="],
         ["Who", "==P. V. Narasimha Rao==, with ==Manmohan Singh== as Finance Minister"],
         ["The policy", "the ==New Industrial Policy==, ==24 July 1991=="]] },

  { h: "Poverty and the schemes", to: "poverty",
    lv: [["Tendulkar, 2009", "==21.9%== in 2011–12 — the ==official== series"],
         ["Rangarajan, 2014", "==29.5%== for the ==same year== — ==eight points== apart"],
         ["MGNREGA", "passed ==23 August 2005==, launched ==2 February 2006=="],
         ["The guarantee", "==100 days== of unskilled manual work a year, per ==household=="]] },

  { h: "The dates to know cold", to: "dates",
    lv: [["6 June 1966", "the rupee ==devalued== about ==36.5%=="],
         ["19 July 1969", "==14 banks== nationalised"],
         ["8 November 2016", "==demonetisation== of ==₹500 and ₹1,000=="],
         ["1 July 2017", "==GST== comes into force"]] }
],

topics: {

/* ================================================== THE PLANS */
plans: {
hub: "The Five Year Plans",
sub: "1951 to 2017, and the gaps",
br: [
  { h: "The first three",
    lv: [["First, 1951–56", "==agriculture, irrigation and power==; ==Harrod–Domar=="],
         ["", "target ==2.1==, achieved ==3.6== — it ==beat its target=="],
         ["Second, 1956–61", "==heavy and basic industry==; the ==Mahalanobis== model"],
         ["", "target ==4.5==, achieved ==4.27=="],
         ["Third, 1961–66", "==self-reliance== — target ==5.6==, achieved ==2.4=="],
         ["", "wrecked by ==two wars and a drought=="]],
    m: "First agriculture, Second industry, Third self-reliance — and the Third failed." },

  { h: "The three gaps",
    lv: [["Plan holiday, 1966–69", "==three annual plans== — ==devaluation== and the ==Green Revolution=="],
         ["Rolling Plan, 1978–80", "the ==Janata== government — targets ==revised yearly=="],
         ["Annual Plans, 1990–92", "==instability== and the ==balance of payments crisis=="]],
    m: "Three gaps, three different reasons: war, a change of government, a crisis." },

  { h: "Fourth to Seventh",
    lv: [["Fourth, 1969–74", "==growth with stability== — ==5.7== against ==3.3==; ==bank nationalisation=="],
         ["Fifth, 1974–79", "==Garibi Hatao== — ==4.4== against ==4.8==; ==ended early==, in 1978"],
         ["Sixth, 1980–85", "==direct attack on poverty== — ==5.2== against ==5.7==; ==NABARD=="],
         ["Seventh, 1985–90", "==Food, Work and Productivity== — ==5.0== against ==6.0=="]] },

  { h: "Eighth to Twelfth",
    lv: [["Eighth, 1992–97", "==human development== — ==5.6== against ==6.8==, the ==first post-reform== plan"],
         ["Ninth, 1997–2002", "==growth with social justice== — ==6.5== against ==5.4=="],
         ["Tenth, 2002–07", "==double per capita income== — ==8.0== against ==7.6=="],
         ["Eleventh, 2007–12", "==faster and more inclusive== — ==9.0== against ==8.0=="],
         ["Twelfth, 2012–17", "==faster, more inclusive, sustainable== — and the ==last plan=="]] },

  { h: "Which plans beat their target",
    lv: [["They did", "==First, Fifth, Sixth, Seventh, Eighth=="],
         ["They did not", "the ==Second marginally==, the ==Third== badly, and the ==Fourth, Ninth, Tenth, Eleventh=="],
         ["The biggest beat", "the ==First== — ==3.6== against ==2.1=="],
         ["The biggest miss", "the ==Third== — ==less than half== of what it set out to do"]],
    m: "The ones that beat their target cluster at the start and in the eighties." }
]},

/* ====================================== PLANNING INSTITUTIONS */
institutions: {
hub: "Planning bodies",
sub: "Commission, Council, NITI Aayog",
br: [
  { h: "The Planning Commission",
    lv: [["Set up", "==15 March 1950==, by a ==Cabinet resolution=="],
         ["Its standing", "==neither constitutional nor statutory== — an ==extra-constitutional== body"],
         ["Chairman", "the ==Prime Minister==, ex officio"],
         ["First Deputy Chairman", "==Gulzarilal Nanda=="],
         ["Wound up", "replaced on ==1 January 2015=="]] },

  { h: "The National Development Council",
    lv: [["Set up", "==6 August 1952==, also by a ==resolution=="],
         ["Who sits on it", "the PM, ==all Union Cabinet Ministers==, ==all Chief Ministers==, and the ==Commission's members=="],
         ["Its job", "the ==final approving authority== — the ==Commission drafted==, the ==NDC adopted=="],
         ["Now", "==never formally abolished==, but it ==last met in December 2012=="]] },

  { h: "NITI Aayog",
    lv: [["From", "==1 January 2015=="],
         ["What it is", "a ==think tank== — it ==does not allocate funds=="],
         ["Chairperson", "the ==Prime Minister==; a ==Vice-Chairman== runs it"],
         ["First Vice-Chairman", "==Arvind Panagariya=="],
         ["Its poverty measure", "the ==National Multidimensional Poverty Index==, on the ==Alkire–Foster== method"]],
    m: "The Commission allocated money; the Aayog advises. That is the whole difference." },

  { h: "The plans before the plans",
    lv: [["1934", "==Planned Economy for India== — ==M. Visvesvaraya=="],
         ["1938", "the ==National Planning Committee== — set up under ==Bose's== presidency, chaired by ==Nehru=="],
         ["1944", "the ==Bombay Plan== — ==eight industrialists==, including ==J. R. D. Tata== and ==G. D. Birla=="],
         ["1944", "the ==Gandhian Plan== — ==S. N. Agarwal==, village-centred"],
         ["1945", "the ==People's Plan== — ==M. N. Roy==, agriculture-first"],
         ["1950", "the ==Sarvodaya Plan== — ==Jayaprakash Narayan=="]],
    m: "1944 produced two plans facing opposite ways: the industrialists' and Gandhi's." },

  { h: "Before the plans, and the fathers",
    lv: [["Father of Indian planning", "==M. Visvesvaraya==, ==Planned Economy for India==, ==1934=="],
         ["Architect of the Second Plan", "==P. C. Mahalanobis=="],
         ["First national income estimate", "==Dadabhai Naoroji=="],
         ["First scientific estimate", "==V. K. R. V. Rao==, for ==1931–32=="],
         ["Father of tax reform", "==Raja J. Chelliah=="]] }
]},

/* ==================================== MONEY, BANKING AND THE RBI */
banking: {
hub: "The RBI and the banks",
sub: "The rates, the rounds, the notes",
br: [
  { h: "The Reserve Bank",
    lv: [["Recommended by", "the ==Hilton Young== Commission, ==1926=="],
         ["Established", "==1 April 1935==, under the ==RBI Act 1934=="],
         ["First head office", "==Calcutta== — moved to ==Bombay== in ==1937=="],
         ["Nationalised", "==1 January 1949=="],
         ["First Governor", "==Sir Osborne Smith==; first ==Indian==, ==C. D. Deshmukh=="],
         ["The ₹1 note", "issued by the ==Government==, signed by the ==Finance Secretary== — ==so are all coins=="]] },

  { h: "The policy rates",
    lv: [["Repo", "the RBI ==lends== to banks against ==government securities== — the ==policy rate=="],
         ["SDF", "since ==April 2022== the ==floor== — ==no collateral==; it replaced the ==reverse repo=="],
         ["MSF", "the ==ceiling== — emergency overnight borrowing against ==their own SLR=="],
         ["CRR", "kept ==with the RBI==, in ==cash==, and it earns ==no interest=="],
         ["SLR", "kept ==with itself==, in ==cash, gold or approved securities=="],
         ["OMO", "the RBI ==buys or sells== government securities, to ==add or drain liquidity=="]],
    m: "CRR sits with the RBI and pays nothing; SLR stays with the bank and earns." },

  { h: "Nationalisation, and the firsts",
    lv: [["First round", "==19 July 1969== — ==14== banks, deposits of ==₹50 crore== or more"],
         ["Second round", "==15 April 1980== — ==6== banks, deposits of ==₹200 crore== or more"],
         ["Why 19 and not 20", "==New Bank of India== was ==merged into PNB== in ==1993=="],
         ["State Bank of India", "==1 July 1955==, from the ==Imperial Bank==, on the ==Gorwala== Committee"],
         ["First bank in India", "==Bank of Hindustan==, ==1770==, at Calcutta"],
         ["First purely Indian-owned", "==Punjab National Bank==, ==1894==, at ==Lahore=="]] },

  { h: "Notes, coins and payments",
    lv: [["Presses", "==Nashik== and ==Dewas== (SPMCIL); ==Mysuru== and ==Salboni== (BRBNMPL)"],
         ["Mints", "==Mumbai, Kolkata, Hyderabad, Noida=="],
         ["The ₹ symbol", "==D. Udaya Kumar==, adopted ==15 July 2010=="],
         ["Demonetisation", "==8 November 2016== — ==₹500 and ₹1,000=="],
         ["₹2,000 note", "withdrawn from ==19 May 2023== — it ==remains legal tender=="],
         ["Deposit insurance", "==DICGC==, ==₹5 lakh== per depositor per bank, raised from ==₹1 lakh== in ==2020=="],
         ["NPCI", "==2008== — ==UPI (2016)==, RuPay (2012), IMPS (2010)"]] }
]},

/* ============================== THE BUDGET, TAXES AND GST */
budget: {
hub: "The Budget and GST",
sub: "Article 112 to the GST Council",
br: [
  { h: "The Budget",
    lv: [["Its constitutional name", "the ==Annual Financial Statement==, article ==112=="],
         ["Presented", "on ==1 February== since ==2017== — before that, ==the last working day of February=="],
         ["Railway Budget", "==merged== into it from ==2017==, ending a split since ==1924== (==Acworth==)"],
         ["Financial year", "==1 April to 31 March=="],
         ["First of independent India", "==R. K. Shanmukham Chetty==, ==26 November 1947=="],
         ["Most budgets", "==Morarji Desai== — ==ten=="],
         ["First woman to present one", "==Indira Gandhi==, for ==1970–71=="]] },

  { h: "The deficits",
    lv: [["Revenue deficit", "revenue ==expenditure minus revenue receipts== — ==borrowing for running costs=="],
         ["Fiscal deficit", "total expenditure ==minus receipts excluding borrowings=="],
         ["", "the government's ==total borrowing requirement== for the year"],
         ["Primary deficit", "fiscal deficit ==minus interest payments=="],
         ["FRBM", "==2003==, in force ==5 July 2004==; reviewed by the ==N. K. Singh== committee, ==2017=="]],
    m: "Primary deficit strips out the cost of yesterday's borrowing." },

  { h: "Goods and Services Tax",
    lv: [["Constitutional basis", "the ==101st Amendment, 2016== — ==246A==, ==269A==, ==279A=="],
         ["In force", "==1 July 2017=="],
         ["First proposed by", "the ==Kelkar== Task Force, ==2003=="],
         ["First state to ratify", "==Assam=="],
         ["The Council", "chaired by the ==Union Finance Minister==, one minister from ==each state=="],
         ["Voting", "==three-fourths== of those present — Centre ==one-third==, states ==two-thirds=="],
         ["The four taxes", "==CGST and SGST== intra-state, ==UTGST==, ==IGST== inter-state and on imports"],
         ["Outside it", "==alcohol==, by the Constitution itself; ==electricity== and ==stamp duty=="]] },

  { h: "The Finance Commission",
    lv: [["Article", "==280== — constituted every ==fifth year==, or earlier"],
         ["Composition", "a ==Chairman and four== other members"],
         ["Its job", "how ==central taxes are divided== with the states, and ==grants-in-aid=="],
         ["Fourteenth", "==Y. V. Reddy== — the states' share ==32% to 42%=="],
         ["Fifteenth", "==N. K. Singh== — ==41%==, the one point for ==Jammu and Kashmir's== reorganisation"],
         ["Sixteenth", "==Arvind Panagariya==, for the five years from ==1 April 2026=="]] }
]},

/* ======================================================= 1991 */
reform: {
hub: "1991",
sub: "The crisis, and what followed",
br: [
  { h: "How the crisis built",
    lv: [["The deficit", "about ==8.4% of GDP== in ==1990–91==, financed by ==borrowing=="],
         ["The Gulf War", "==Iraq invaded Kuwait==, August 1990 — ==oil doubled==, ==remittances stopped=="],
         ["The rating", "cut ==below investment grade== — banks ==stopped rolling over== short-term credit"],
         ["The reserves", "about ==$1 billion== by June 1991 — ==two to three weeks== of imports"],
         ["The gold", "==20 tonnes== sold to ==UBS==, ==47== flown to the ==Bank of England== — ==67== in all"],
         ["The politics", "==Rajiv Gandhi assassinated 21 May 1991==; ==Rao== took office with a ==minority== government"]] },

  { h: "Liberalisation",
    lv: [["The policy", "the ==New Industrial Policy==, ==24 July 1991=="],
         ["Licensing", "abolished for all but ==18== industries — the list is now ==4=="],
         ["Public sector reservation", "==17 industries== before 1991, cut to ==8==, now ==2=="],
         ["", "==atomic energy== and ==specified railway operations=="],
         ["MRTP", "the ==₹100 crore== asset limit scrapped; replaced by the ==Competition Act 2002=="],
         ["Small-scale reservation", "emptied over two decades, ==ended altogether in 2015=="]] },

  { h: "Privatisation and globalisation",
    lv: [["Disinvestment begins", "==1991–92== — ==minority stakes==; the ==Rangarajan== framework, ==1993=="],
         ["First sale of control", "==Modern Food Industries==, ==2000== — then BALCO, VSNL, Maruti"],
         ["WTO", "India a ==founder member==, ==1 January 1995=="],
         ["Devaluation", "==1 and 3 July 1991== — ==two steps==, about ==18–19%== in all"]],
    m: "1966 was one devaluation of 36.5%; 1991 was two steps in three days." },

  { h: "Who did what",
    lv: [["Prime Minister", "==P. V. Narasimha Rao=="],
         ["Finance Minister", "==Manmohan Singh== — ==an economist, not a politician=="],
         ["Tax reform", "the ==Chelliah== Committee"],
         ["Banking reform", "the ==Narasimham== Committee"],
         ["Disinvestment", "the ==Rangarajan== Committee"]] }
]},

/* ======================================== POVERTY AND SCHEMES */
poverty: {
hub: "Poverty and the schemes",
sub: "How it is measured, and what is spent",
br: [
  { h: "Measuring poverty",
    lv: [["Working Group", "==1962== — the ==first== national poverty line"],
         ["Alagh", "==1979== — ==calorie norms==: ==2,400== rural, ==2,100== urban"],
         ["Lakdawala", "==1993== — the calorie anchor plus ==state price indices=="],
         ["Tendulkar", "==2009== — away from calories; ==21.9%== in 2011–12, the ==official== series"],
         ["Rangarajan", "==2014== — ==29.5%== for the ==same year=="],
         ["NITI's MPI", "the ==Alkire–Foster== method, ==12 indicators==, ==11.28%== in 2022–23"]],
    m: "Tendulkar and Rangarajan read the same year eight percentage points apart." },

  { h: "Employment programmes, in order",
    lv: [["1978–79", "==IRDP== — self-employment assets for the rural poor"],
         ["1979", "==TRYSEM=="],
         ["1989", "==Jawahar Rozgar Yojana==, merging the two before it"],
         ["1999", "==Swarnajayanti Gram Swarozgar Yojana==, merging ==six== schemes"],
         ["2005", "==NREGA== — from ==scheme to legal right=="],
         ["2011", "==National Rural Livelihoods Mission==, later ==DAY-NRLM=="]] },

  { h: "MGNREGA",
    lv: [["The Act", "passed ==23 August 2005=="],
         ["Launched", "==2 February 2006==, at ==Bandlapalli==, Anantapur — in ==200== districts first"],
         ["Renamed", "==2 October 2009=="],
         ["The guarantee", "==100 days== of unskilled manual work a year, per ==household=="],
         ["If work is not given", "an ==unemployment allowance==, paid by the ==state=="],
         ["The limits", "work within ==15 days==, within ==5 km== — or an ==extra wage=="],
         ["Women", "at least ==one-third== of beneficiaries"],
         ["Accountability", "==social audit== by the ==Gram Sabha== — the ==first Indian law== to build one in"]] },

  { h: "The schemes and their dates",
    lv: [["2014", "==Make in India== (25 Sept), ==Jan Dhan== (28 Aug), ==Swachh Bharat== (2 Oct)"],
         ["2015", "==Beti Bachao== (22 Jan, ==Panipat==), ==Mudra== (8 Apr), ==Digital India== (1 Jul)"],
         ["Mudra", "==Shishu ₹50,000==, ==Kishore ₹5 lakh==, ==Tarun ₹10 lakh=="],
         ["2016", "==Startup India== (16 Jan), ==Ujjwala== (1 May, ==Ballia==)"],
         ["2018", "==Ayushman Bharat PM-JAY== — ==₹5 lakh== per family a year"],
         ["2019", "==PM-KISAN== — ==₹6,000== a year in ==three== instalments"]] },

  { h: "The Food Security Act, 2013",
    lv: [["Coverage", "up to ==75%== rural and ==50%== urban"],
         ["Entitlement", "==5 kg== a person a month; ==Antyodaya== households ==35 kg== a household"],
         ["Original prices", "==₹3== rice, ==₹2== wheat, ==₹1== coarse grains"],
         ["Maternity benefit", "==₹6,000==, as a ==statutory entitlement=="],
         ["Head of the household", "the ==eldest woman==, aged ==18 or above==, for the ration card"]] }
]},

/* ================================================== THE DATES */
dates: {
hub: "The dates",
sub: "The ones asked as they stand",
br: [
  { h: "Planning",
    lv: [["15 March 1950", "the ==Planning Commission== set up"],
         ["6 August 1952", "the ==National Development Council=="],
         ["1 January 2015", "==NITI Aayog== replaces the Commission"]] },

  { h: "Banking",
    lv: [["1 April 1935", "the ==Reserve Bank== begins operations"],
         ["1 January 1949", "the ==RBI nationalised=="],
         ["1 July 1955", "==State Bank of India== created from the ==Imperial Bank=="],
         ["19 July 1969", "==14 banks== nationalised"],
         ["15 April 1980", "==6 more== nationalised"],
         ["12 July 1982", "==NABARD== established"]] },

  { h: "Crisis and reform",
    lv: [["6 June 1966", "the rupee ==devalued== about ==36.5%=="],
         ["24 July 1991", "the ==New Industrial Policy== and the ==reform budget=="],
         ["1 January 1995", "India a ==founder member of the WTO=="]] },

  { h: "Recent",
    lv: [["23 August 2005", "==NREGA== passed — ==launched 2 February 2006=="],
         ["8 November 2016", "==demonetisation== of ==₹500 and ₹1,000=="],
         ["1 July 2017", "==GST== comes into force"]] },

  { h: "Institutions, and the year each began",
    lv: [["1948", "==IFCI==; ==1951== the ==Central Statistical Organisation=="],
         ["1956", "==Life Insurance Corporation=="],
         ["1965", "==Food Corporation of India== and the ==Agricultural Prices Commission=="],
         ["1988", "==SEBI== set up — ==statutory== by the ==SEBI Act 1992=="],
         ["1990", "==SIDBI==; ==1999== the ==IRDA=="],
         ["2002", "the ==Competition Act== — the Commission ==operational from 2009=="]] }
]}

}};
