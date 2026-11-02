/* The Article Machine - data-coi-maps.js
   The Constitution mind maps: twelve, and an overview whose branches open
   them.

   Nothing here is new. Every line is taken from data-articles.js, the
   plain-English notes, data-artmap.js, data-highyield.js, data-amendments.js,
   data-cases.js and data-assembly.js, which is where the facts are checked and
   where the fuller statement of each one lives. A map is that material cut to
   the words the question turns on.

   Fields:  COI_MAPS                  the overview map
              hub, sub                the centre of the map
              br[]                    branches: h title, to (a map id: the
                                      branch opens that map), lv leaves,
                                      m an optional memory hook
            COI_MAPS.topics[id]       one map per topic, same shape, no `to`

   A leaf is a string, or [key, text]. The key is the PROMPT and stays visible
   when the map is covered for recall; the text is the answer and is what gets
   covered. A key that is an article number is a LINK to that article, because
   these are the Constitution's own maps - which is why a key here is written
   as the bare number and not as "Rule 6" or "Zoji La". ==text== marks the
   words the question turns on.                                            */

window.COI_MAPS = {

hub: "The Constitution",
sub: "Twelve maps, 395 articles to 506",
br: [
  { h: "The frame", to: "frame",
    lv: [["Preamble", "==Sovereign Socialist Secular Democratic Republic=="],
         ["Originally", "==395== articles, ==22== Parts, ==8== Schedules"],
         ["Now", "==506== article numbers, ==25== Parts in force, ==12== Schedules"],
         ["Came into force", "==26 January 1950==, adopted ==26 November 1949=="]] },

  { h: "Fundamental Rights", to: "rights",
    lv: [["12", "to ==35== — Part ==III=="],
         ["14", "equality ==before the law== and ==equal protection=="],
         ["21", "life and ==personal liberty== — ==procedure established by law=="],
         ["32", "the ==heart and soul==, Ambedkar's phrase"]] },

  { h: "Directive Principles and Duties", to: "dpsp",
    lv: [["36", "to ==51== — Part ==IV==, from ==Ireland=="],
         ["37", "==not enforceable== by any court, but ==fundamental to governance=="],
         ["51A", "the ==eleven== Fundamental Duties — Part ==IVA=="]] },

  { h: "The Union executive", to: "union",
    lv: [["52", "==There shall be a President of India=="],
         ["74", "the Council of Ministers to ==aid and advise== — and he ==must act on it=="],
         ["61", "==impeachment== — the ==only== ground is ==violation of the Constitution=="]] },

  { h: "Parliament", to: "parliament",
    lv: [["79", "==President and two Houses== — he is ==part of Parliament=="],
         ["110", "the ==definition of a Money Bill=="],
         ["112", "the ==Annual Financial Statement== — the Budget"],
         ["123", "the President's ==ordinance== power"]] },

  { h: "The courts", to: "judiciary",
    lv: [["124", "the Supreme Court exists — ==CJI and 33==, so ==34== since 2019"],
         ["141", "its law ==binds every court== in India"],
         ["226", "==wider== than 32 — it covers ==any other legal right== too"],
         ["The five writs", "habeas corpus, mandamus, prohibition, certiorari, ==quo warranto=="]] },

  { h: "The States, and the Lists", to: "states",
    lv: [["153", "==a Governor for each State=="],
         ["163", "advice ==unless== he acts in his ==discretion== — the difference from ==74=="],
         ["246", "the ==three Lists==, in the ==Seventh Schedule=="],
         ["280", "the ==Finance Commission==, every ==fifth year=="]] },

  { h: "The emergencies", to: "emergency",
    lv: [["352", "==national== — war, external aggression, ==armed rebellion=="],
         ["356", "==the State== — failure of ==constitutional machinery=="],
         ["360", "==financial== — and ==never used=="]] },

  { h: "Amendment", to: "amendments",
    lv: [["368", "the ==power to amend==, and the ==procedure=="],
         ["Basic structure", "==Kesavananda, 1973== — ==13 judges==, ==7–6=="],
         ["42nd", "the ==Mini-Constitution==, ==1976=="],
         ["44th", "the ==post-emergency correction==, ==1978=="]] },

  { h: "The Schedules", to: "schedules",
    lv: [["Seventh", "the ==three Lists=="],
         ["Eighth", "the ==22 languages==, originally ==14=="],
         ["Tenth", "==anti-defection==, added by the ==52nd=="],
         ["Ninth", "==284== entries now, ==13== to begin with"]] },

  { h: "Citizenship, language, the rest", to: "rest",
    lv: [["1", "to ==4== — the ==Union and its territory==; ==5 to 11== ==citizenship=="],
         ["343", "the ==official language of the Union=="],
         ["300A", "the ==right to property== — a ==constitutional==, not a ==fundamental==, right"],
         ["324", "the ==Election Commission=="],
         ["371A", "to ==371J== — the ==special provisions== for particular States"]] },

  { h: "The landmark cases", to: "cases",
    lv: [["Kesavananda, 1973", "the ==basic structure== doctrine"],
         ["Maneka, 1978", "turned 21 into something close to ==due process=="],
         ["Bommai, 1994", "==356 is reviewable==; the ==floor test=="],
         ["Puttaswamy, 2017", "==privacy== is a fundamental right"]] },

  { h: "The Constituent Assembly", to: "assembly",
    lv: [["First met", "==9 December 1946==, under ==Sachchidananda Sinha=="],
         ["President", "==Rajendra Prasad=="],
         ["Drafting Committee", "==B. R. Ambedkar==, with ==seven== members"],
         ["How long", "==2 years, 11 months and 18 days=="]] }
],

topics: {

/* ===================================================== THE FRAME */
frame: {
hub: "The frame",
sub: "The ranges, the numbers, the Preamble",
br: [
  { h: "The Constitution at a glance",
    lv: [["1", "to ==4== — the ==Union and its territory=="],
         ["5", "to ==11== — ==citizenship=="],
         ["12", "to ==35== — ==Fundamental Rights=="],
         ["36", "to ==51== — ==Directive Principles=="],
         ["52", "to ==78== — the ==Union executive=="],
         ["79", "to ==122== — ==Parliament=="],
         ["124", "to ==147== — the ==Supreme Court=="],
         ["214", "to ==231== — the ==High Courts=="],
         ["352", "to ==360== — the ==emergencies=="]],
    m: "Learn the ranges and any article number can be placed before it is recognised." },

  { h: "The Preamble",
    lv: [["What it declares", "a ==Sovereign Socialist Secular Democratic Republic=="],
         ["What the 42nd added", "==Socialist==, ==Secular== and ==Integrity==, in ==1976=="],
         ["Amended how often", "==once== — the ==42nd==, and only that"],
         ["Part of the Constitution?", "==Berubari (1960)== said no; ==Kesavananda (1973)== said ==yes=="],
         ["The date on it", "==26 November 1949== — the day it was ==adopted=="],
         ["Where authority comes from", "=='We, the People of India'== — ==not the Crown, not the States=="]] },

  { h: "The numbers to hold",
    lv: [["Originally", "==395== articles, ==22== Parts, ==8== Schedules"],
         ["Now", "==506== numbers in the official text — ==471== in force, ==35== repealed"],
         ["Parts", "==26== numbered; ==Part VII repealed== in 1956, so ==25== in force"],
         ["Schedules", "==12== — the ==9th, 10th, 11th and 12th== added by the ==1st, 52nd, 73rd, 74th=="],
         ["Amendments", "==106=="],
         ["Eighth Schedule", "==22== languages, originally ==14=="],
         ["Fundamental Duties", "==11== — ==ten== by the 42nd, the ==eleventh== by the 86th"]] },

  { h: "Dates and durations",
    lv: [["Assembly first met", "==9 December 1946=="],
         ["Adopted", "==26 November 1949== — now ==Constitution Day=="],
         ["In force", "==26 January 1950==, chosen for the ==1930 purna swaraj== declaration"],
         ["Time taken", "==2 years, 11 months and 18 days=="]] },

  { h: "Firsts and onlys",
    lv: [["Only Part repealed", "==Part VII==, by the ==7th== Amendment in ==1956=="],
         ["Only emergency never used", "==financial==, article ==360=="],
         ["Largest bench ever", "==13== judges, in ==Kesavananda=="],
         ["Only President with two full terms", "==Rajendra Prasad=="],
         ["Joint sittings ever held", "==three== — ==1961, 1978, 2002=="],
         ["Still called temporary", "article ==370=="]] },

  { h: "Borrowed features",
    lv: [["United Kingdom", "==parliamentary government==, rule of law, ==single citizenship==, the Speaker"],
         ["United States", "==fundamental rights==, ==judicial review==, impeachment, the ==written preamble=="],
         ["Ireland", "==Directive Principles==, Rajya Sabha ==nominations==, the ==method of electing== the President"],
         ["Canada", "a ==federation with a strong centre==, ==residuary powers== with the centre"],
         ["Australia", "the ==Concurrent List==, freedom of trade, the ==joint sitting=="],
         ["Weimar Germany", "==suspension of fundamental rights== in an emergency"],
         ["Soviet Union", "==Fundamental Duties==, and ==justice== in the Preamble"],
         ["Japan", "=='procedure established by law'=="]] },

  { h: "The bodies the Constitution itself creates",
    lv: [["324", "the ==Election Commission=="],
         ["315", "the ==Public Service Commissions=="],
         ["280", "the ==Finance Commission=="],
         ["148", "the ==Comptroller and Auditor-General=="],
         ["338", "SCs; ==338A== STs; ==338B== ==Backward Classes=="],
         ["279A", "the ==GST Council==; ==263== the ==Inter-State Council=="]] }
]},

/* ======================================== FUNDAMENTAL RIGHTS */
rights: {
hub: "Fundamental Rights",
sub: "Part III, articles 12 to 35",
br: [
  { h: "The frame",
    lv: [["12", "the definition of =='the State'== — ==who the rights run against=="],
         ["13", "laws ==inconsistent== with the rights — the ==textual basis of judicial review=="],
         ["Against whom", "==mostly the State== — but ==17, 23 and 24== bind ==private persons== too"]] },

  { h: "Equality — 14 to 18",
    lv: [["14", "==equality before the law== and ==equal protection of the laws=="],
         ["15", "no discrimination on ==religion, race, caste, sex or place of birth=="],
         ["16", "==equality of opportunity== in ==public employment=="],
         ["17", "==abolition of untouchability=="],
         ["18", "==abolition of titles=="]],
    m: "15 is the citizen in general; 16 is the citizen as a job applicant." },

  { h: "Freedom — 19 to 22",
    lv: [["19", "the ==six freedoms== — speech, assembly, association, movement, residence, profession"],
         ["20", "protection in respect of ==conviction for offences=="],
         ["21", "==life and personal liberty== — the ==most-asked article=="],
         ["21A", "==free and compulsory education==, ages ==six to fourteen=="],
         ["22", "protection against ==arrest and detention=="],
         ["Not suspendable", "==20 and 21==, even in an emergency — the ==44th Amendment's== answer"]] },

  { h: "Exploitation, religion, minorities",
    lv: [["23", "no ==traffic in human beings== or ==forced labour=="],
         ["24", "no child under ==fourteen== in a ==factory, mine or hazardous work=="],
         ["25", "freedom of ==conscience==, and to ==profess, practise and propagate=="],
         ["26", "freedom to ==manage religious affairs=="],
         ["27", "no ==taxation== for promoting a religion; ==28== no religious ==instruction=="],
         ["29", "minorities' ==language, script and culture==; ==30== their ==institutions=="]] },

  { h: "Remedies — 32, and the writs",
    lv: [["32", "the right to move the ==Supreme Court== — and ==itself a fundamental right=="],
         ["What Ambedkar called it", "the ==heart and soul== of the Constitution"],
         ["Habeas corpus", "=='produce the body'== — and it ==lies against private persons== too"],
         ["Mandamus", "=='we command'== — ==not== against a private person, the ==President or a Governor=="],
         ["Prohibition", "stops a court ==exceeding its jurisdiction==, ==while pending=="],
         ["Certiorari", "==quashes== an order ==already made== — now also against ==administrative== bodies"],
         ["Quo warranto", "=='by what authority?'== — ==any interested person== may seek it"]],
    m: "Prohibition prevents, certiorari cures. That is the pair most often confused." }
]},

/* ================================ DIRECTIVE PRINCIPLES AND DUTIES */
dpsp: {
hub: "Principles and Duties",
sub: "Part IV and Part IVA",
br: [
  { h: "What they are",
    lv: [["36", "to ==51== — Part ==IV==, borrowed from ==Ireland=="],
         ["37", "==not enforceable by any court==, yet ==fundamental to governance=="],
         ["39A", "==equal justice and free legal aid==, added by the ==42nd=="],
         ["40", "==village panchayats== — the one that became Part ==IX=="],
         ["44", "a ==uniform civil code=="],
         ["48A", "==environment, forests and wildlife==, added by the ==42nd=="]] },

  { h: "The three Parts compared",
    lv: [["Part III", "==justiciable== — enforceable under ==32 and 226=="],
         ["Part IV", "==not justiciable== (==37==), but fundamental to governance"],
         ["Part IVA", "==not justiciable== — ==eleven== duties"],
         ["Champakam", "==rights prevail== over the principles — and it produced the ==First Amendment=="],
         ["Minerva Mills", "refined it to a ==balance== — the ==two wheels of a chariot=="]] },

  { h: "The Fundamental Duties",
    lv: [["51A", "Part ==IVA==, added by the ==42nd Amendment==, ==1976=="],
         ["How many", "==eleven== — ==ten== in 1976, the ==eleventh== by the ==86th== in 2002"],
         ["The eleventh", "a parent must provide ==education== to a child aged ==six to fourteen=="],
         ["Where from", "the ==Soviet== constitution"],
         ["On whose recommendation", "the ==Swaran Singh Committee=="]] }
]},

/* ============================================= THE UNION EXECUTIVE */
union: {
hub: "The Union executive",
sub: "President, Vice-President, Ministers",
br: [
  { h: "The President",
    lv: [["52", "==There shall be a President of India=="],
         ["53", "the ==executive power of the Union== vests in him"],
         ["54", "elected by an ==electoral college==; ==55== the ==manner== of it"],
         ["56", "==five years==, and ==no limit== on re-election (==57==)"],
         ["58", "==thirty-five==, and ==qualified for the Lok Sabha=="],
         ["61", "==impeachment== — by ==either House==, ==special majority==, ==same session=="],
         ["72", "==pardons, reprieves, respites and remissions=="]] },

  { h: "The Vice-President",
    lv: [["63", "==There shall be a Vice-President of India=="],
         ["64", "==ex officio Chairman== of the ==Rajya Sabha=="],
         ["65", "==acts as President== in a vacancy — done ==twice=="],
         ["67", "removed by a ==Rajya Sabha resolution==, ==agreed to by the Lok Sabha=="],
         ["", "==no ground need be stated== — and he ==cannot be impeached=="]] },

  { h: "The Council of Ministers",
    lv: [["74", "to ==aid and advise== — and after the ==42nd and 44th==, the advice ==binds== him"],
         ["", "he may ==send it back once==; after that he ==must act on it=="],
         ["75", "==collective responsibility== to the ==Lok Sabha=="],
         ["", "capped at ==15 per cent== of the House by the ==91st Amendment=="],
         ["78", "the ==Prime Minister's duty== to keep the President informed"]],
    m: "74 at the centre, 163 in a State. 163 has the discretion clause; 74 does not." }
]},

/* ==================================================== PARLIAMENT */
parliament: {
hub: "Parliament",
sub: "Articles 79 to 123",
br: [
  { h: "The two Houses",
    lv: [["79", "==President and two Houses== — the ==President is part of Parliament=="],
         ["80", "the ==Rajya Sabha== — ==250== maximum, ==238== elected"],
         ["81", "the ==Lok Sabha== — ==550== maximum"],
         ["83", "==five years== for the Lok Sabha; the Rajya Sabha ==never dissolves=="],
         ["84", "==thirty== for the Rajya Sabha, ==twenty-five== for the Lok Sabha"],
         ["85", "==sessions==, prorogation and ==dissolution== — and the ==six-month== rule"]] },

  { h: "Who presides, and who votes",
    lv: [["89", "the ==Chairman== and ==Deputy Chairman== of the Rajya Sabha"],
         ["93", "the ==Speaker== and ==Deputy Speaker== of the Lok Sabha"],
         ["94", "on dissolution the Speaker ==continues== to the ==first meeting== of the new House"],
         ["100", "voting and the ==quorum== — ==one-tenth==, which is ==55== in the Lok Sabha"],
         ["", "the presiding officer has a ==casting vote only==, in a ==tie=="],
         ["105", "==powers, privileges and immunities=="],
         ["108", "the ==joint sitting== — held ==three times=="]] },

  { h: "Money and law-making",
    lv: [["109", "the ==special procedure== for a Money Bill"],
         ["110", "the ==definition== of a Money Bill — the ==Speaker certifies=="],
         ["111", "==assent== to Bills"],
         ["112", "the ==Annual Financial Statement== — the ==Budget=="],
         ["117", "==Financial Bills==, which are ==not== Money Bills"],
         ["123", "the ==ordinance== power, when Parliament is ==not in session=="]],
    m: "110 defines, 112 is the Budget, 123 is the ordinance. Those three are asked most." },

  { h: "Which majority does what",
    lv: [["Simple", "==present and voting== — ordinary laws, ==article 3==, a ==Legislative Council== (169)"],
         ["Special — 368(2)", "==majority of the total membership== AND ==two-thirds present and voting=="],
         ["Special + half the States", "==federal== provisions: the Lists, the ==Seventh Schedule==, ==368== itself"],
         ["Effective", "==total strength less vacancies== — removing the ==Speaker== or the ==Vice-President=="]],
    m: "A State's ratification has no time limit, and cannot be withdrawn once given." }
]},

/* ===================================================== THE COURTS */
judiciary: {
hub: "The courts",
sub: "124 to 147, 214 to 231",
br: [
  { h: "The Supreme Court — the eight that matter",
    lv: [["124", "the ==Supreme Court exists== — ==CJI and 33==, so ==34== since ==2019=="],
         ["129", "a ==court of record==, with the power to ==punish for contempt=="],
         ["131", "==original== jurisdiction — ==Union and States== only"],
         ["136", "==special leave to appeal== — the ==SLP==, from ==any court== except military"],
         ["137", "==review== of its own judgments"],
         ["141", "its law ==binds all courts== within India"],
         ["142", "the power to do ==complete justice=="],
         ["143", "==advisory== jurisdiction, on a ==Presidential reference=="]],
    m: "Court, record, original, SLP, review, binding, complete justice, advisory." },

  { h: "The High Courts",
    lv: [["214", "==a High Court for each State=="],
         ["215", "==courts of record=="],
         ["217", "==appointment== — ==ten years== as judge or advocate, and ==no jurist== category"],
         ["222", "==transfer== of a judge from one High Court to another"],
         ["226", "==writs==, for ==any other purpose== as well"],
         ["227", "==superintendence== over all courts and tribunals below"]] },

  { h: "32 against 226",
    lv: [["32", "the ==Supreme Court==. ==Fundamental Rights only==, and ==itself a right=="],
         ["226", "a ==High Court==. Fundamental Rights ==AND any other legal right=="],
         ["Therefore", "==226 is wider==; ==32 is stronger==, because it ==cannot be refused=="]] },

  { h: "Judges, and the courts below",
    lv: [["Retirement", "==65== in the Supreme Court, ==62== in a High Court"],
         ["Removal", "==either House==, ==special majority==, ==same session== — the ==same as 61=="],
         ["233", "==district judges== — ==Governor with the High Court=="],
         ["235", "==control== over the subordinate courts ==vested in the High Court=="],
         ["NJAC", "the ==99th Amendment struck down==, ==2015== — the ==collegium survives=="]] }
]},

/* ============================= THE STATES, AND CENTRE-STATE */
states: {
hub: "The States and the Lists",
sub: "Part VI, Part XI, local government",
br: [
  { h: "The State executive",
    lv: [["153", "==a Governor for each State=="],
         ["155", "==appointed by the President==; ==156== holds office ==during his pleasure=="],
         ["163", "advice ==unless== he acts in his ==discretion== — the ==difference from 74=="],
         ["164", "the ==Chief Minister== is appointed by the Governor; ministers ==on his advice=="],
         ["167", "the ==Chief Minister's duty== to inform — the ==mirror of 78=="],
         ["161", "the Governor's ==pardon== power — ==no court martial==, and ==no death sentence=="]],
    m: "72 is the President's pardon, 161 the Governor's. The Governor cannot pardon a death sentence." },

  { h: "The State legislature",
    lv: [["168", "to ==212== — and ==169== creates or abolishes a ==Legislative Council=="],
         ["", "by a ==simple majority== of Parliament, on a ==State resolution=="],
         ["213", "the ==Governor's ordinance== power — the ==mirror of 123=="],
         ["200", "assent, or ==reservation for the President=="]] },

  { h: "Who may legislate on what",
    lv: [["246", "the ==three Lists==, in the ==Seventh Schedule=="],
         ["The entries", "Union ==97==, State ==66==, Concurrent ==47=="],
         ["248", "==residuary== power — with ==Parliament=="],
         ["249", "the ==Rajya Sabha== resolves, ==two-thirds==, ==one year== at a time"],
         ["250", "during a ==national emergency=="],
         ["252", "==two or more States== ask; ==253== an ==international agreement=="],
         ["254", "==repugnancy== — the ==Union law prevails==, unless the State's has ==assent=="]] },

  { h: "Local government",
    lv: [["243", "onwards — Part ==IX==, the ==73rd Amendment==, ==1992=="],
         ["", "==three tiers==, ==five-year== terms, ==one-third== seats for women"],
         ["243P", "onwards — Part ==IXA==, the ==74th==, for ==municipalities=="],
         ["Eleventh Schedule", "==29== subjects; the ==Twelfth== has ==18=="],
         ["243K", "the ==State Election Commission==; ==243-I== the ==State Finance Commission=="]] },

  { h: "Finance between them",
    lv: [["280", "the ==Finance Commission==, every ==fifth year==, a ==Chairman and four=="],
         ["266", "the ==Consolidated Fund==; ==267== the ==Contingency Fund=="],
         ["", "nothing leaves the Consolidated Fund without an ==appropriation== (==114==)"],
         ["246A", "==GST==, by the ==101st Amendment==; ==279A== the ==GST Council=="]] }
]},

/* ================================================ THE EMERGENCIES */
emergency: {
hub: "The emergencies",
sub: "352, 356 and 360",
br: [
  { h: "352 — national",
    lv: [["Ground", "==war, external aggression or armed rebellion=="],
         ["", "=='internal disturbance'== became =='armed rebellion'== by the ==44th=="],
         ["How it is proclaimed", "on ==written Cabinet advice== — the 44th's requirement"],
         ["Approval", "==both Houses within one month==, by a ==special majority=="],
         ["Used", "==three times== — ==1962, 1971, 1975=="],
         ["358", "article ==19 suspended==; ==359== ==enforcement== of Part III suspended"],
         ["", "==20 and 21 can never be suspended== — the 44th again"]] },

  { h: "356 — the State",
    lv: [["Ground", "the State's government ==cannot be carried on== under the Constitution"],
         ["Approval", "==within two months==, by a ==simple majority=="],
         ["Used", "==over 130 times=="],
         ["Bommai, 1994", "==reviewable==; the ==floor test==; ==secularism== as basic structure"],
         ["365", "==failure to comply== with a Union direction — the other route in"]] },

  { h: "360 — financial",
    lv: [["Ground", "a threat to the ==financial stability or credit== of India"],
         ["Used", "==never=="],
         ["What it allows", "the ==only== provision letting ==judges' pay== be cut"]] },

  { h: "The three side by side",
    lv: [["Approval period", "==one month== for 352, ==two months== for 356"],
         ["Majority", "==special== for 352, ==simple== for 356"],
         ["355", "the Union's ==duty to protect== a State — the ==peg== 356 hangs on"]],
    m: "Both the period and the majority differ, and both are asked." }
]},

/* ===================================================== AMENDMENT */
amendments: {
hub: "Amendment",
sub: "368, and the ones that matter",
br: [
  { h: "The power, and its limit",
    lv: [["368", "the ==power to amend==, and the ==procedure=="],
         ["Shankari Prasad", "==1951== — an amendment is ==not 'law'== under article ==13=="],
         ["Golak Nath", "==1967== — fundamental rights are ==beyond== the amending power"],
         ["24th", "==overrode Golak Nath==, and made ==assent compulsory=="],
         ["Kesavananda", "==1973== — the ==basic structure== doctrine. ==13 judges==, ==7–6=="],
         ["Minerva Mills", "==1980== — struck down ==368(4) and (5)=="]] },

  { h: "The amendments to know cold",
    lv: [["1st", "==1951== — the ==Ninth Schedule==, ==31A and 31B==, and ==15(4)=="],
         ["7th", "==1956== — States ==reorganised== on ==linguistic== lines; ==Part VII repealed=="],
         ["42nd", "==1976==, the ==Mini-Constitution== — the ==Preamble words== and the ==Duties=="],
         ["44th", "==1978== — ==property out of Part III==; ==20 and 21 made non-suspendable=="],
         ["52nd", "==anti-defection==, and the ==Tenth Schedule=="],
         ["61st", "voting age ==21 to 18=="],
         ["73rd and 74th", "==panchayats== and ==municipalities=="],
         ["86th", "==21A==, the ==right to education=="]] },

  { h: "The recent ones",
    lv: [["91st", "ministers capped at ==15 per cent=="],
         ["101st", "==GST== — ==246A==, ==269A== and ==279A=="],
         ["102nd", "status for the ==Backward Classes Commission== (==338B==)"],
         ["103rd", "==ten per cent EWS==, ==above== the 50 per cent line"],
         ["104th", "SC/ST seats to ==2030==; ==Anglo-Indian== seats ==lapsed=="],
         ["105th", "the ==States'== power to identify their ==own== backward classes"],
         ["106th", "==one-third== of seats for ==women== — ==not yet in force=="]] },

  { h: "Property, the one right that moved",
    lv: [["Originally", "==19(1)(f)== and ==31==, both in Part ==III=="],
         ["44th Amendment", "==took it out== of Part III, ==1978=="],
         ["Now", "article ==300A== — a ==constitutional==, not a ==fundamental==, right"]] }
]},

/* ================================================= THE SCHEDULES */
schedules: {
hub: "The twelve Schedules",
sub: "What each one carries",
br: [
  { h: "First to Fourth",
    lv: [["First", "the ==States and the Union Territories=="],
         ["Second", "==salaries and allowances== of the constitutional authorities"],
         ["Third", "==forms of oath and affirmation=="],
         ["Fourth", "==allocation of seats== in the ==Rajya Sabha=="]] },

  { h: "Fifth to Eighth",
    lv: [["Fifth", "==Scheduled Areas== and Scheduled Tribes — ==the Governor's report=="],
         ["Sixth", "==tribal areas== in ==Assam, Meghalaya, Tripura and Mizoram=="],
         ["Seventh", "the ==Union, State and Concurrent Lists=="],
         ["Eighth", "the ==22 languages==, originally ==14=="]],
    m: "Fifth is areas anywhere else; Sixth is four named north-eastern States." },

  { h: "Ninth to Twelfth — all four added",
    lv: [["Ninth", "==1st Amendment, 1951== — laws beyond ordinary challenge"],
         ["", "==284== entries now, ==13== to begin with — and since ==I. R. Coelho== (2007),"],
         ["", "anything added ==after 24 April 1973== faces the ==basic structure== test"],
         ["Tenth", "==52nd Amendment== — ==anti-defection=="],
         ["Eleventh", "==73rd== — the ==29== subjects of the ==panchayats=="],
         ["Twelfth", "==74th== — the ==18== subjects of the ==municipalities=="]] },

  { h: "The five that carry the marks",
    lv: [["Seventh", "the ==three Lists== — Union ==97==, State ==66==, Concurrent ==47=="],
         ["Eighth", "==languages=="],
         ["Tenth", "==anti-defection=="],
         ["Eleventh", "==panchayats==, ==29=="],
         ["Twelfth", "==municipalities==, ==18=="]] }
]},

/* ==================================================== THE CASES */
cases: {
hub: "The landmark cases",
sub: "What each one settled",
br: [
  { h: "The amending power",
    lv: [["Shankari Prasad, 1951", "an amendment is ==not 'law'== under article 13"],
         ["Golak Nath, 1967", "fundamental rights are ==beyond== the amending power"],
         ["Kesavananda, 1973", "the ==basic structure== doctrine — ==13 judges==, ==68 days==, ==7–6=="],
         ["", "it also ==reversed Berubari== on the ==Preamble=="],
         ["Indira Gandhi election, 1975", "the ==first time== basic structure ==actually struck something down=="],
         ["Minerva Mills, 1980", "==368(4) and (5)== struck down — the ==two wheels of a chariot=="]] },

  { h: "Life and liberty",
    lv: [["Gopalan, 1950", "the ==compartment theory== — each right read ==separately=="],
         ["Maneka Gandhi, 1978", "==procedure established by law== must be ==fair, just and reasonable=="],
         ["ADM Jabalpur, 1976", "the ==habeas corpus== case — ==Khanna J.'s lone dissent=="],
         ["Puttaswamy, 2017", "==privacy== is a fundamental right. ==Nine judges, unanimous=="],
         ["", "and it ==formally buried ADM Jabalpur=="]] },

  { h: "Equality and reservation",
    lv: [["Champakam, 1951", "==rights prevail== over the principles — it produced the ==First Amendment=="],
         ["Indra Sawhney, 1992", "==Mandal== — the ==50 per cent ceiling==, the ==creamy layer=="],
         ["", "==no reservation in promotions== — ==later reversed== by amendment"]] },

  { h: "The Constitution working",
    lv: [["Bommai, 1994", "==356 is reviewable==; the ==floor test==; ==secularism== as basic structure"],
         ["Kihoto Hollohan, 1992", "==anti-defection upheld==, but the ==Speaker's decision is reviewable=="],
         ["I. R. Coelho, 2007", "the ==Ninth Schedule is not an absolute shield== after ==24 April 1973=="],
         ["NJAC, 2015", "the ==99th Amendment struck down==; the ==collegium survives=="],
         ["Vishaka, 1997", "==guidelines from an international convention==, to fill a ==gap in the law=="],
         ["Shreya Singhal, 2015", "==section 66A struck down== — the clearest modern statement on ==free speech=="]] }
]},

/* =============== CITIZENSHIP, LANGUAGE AND WHAT IS LEFT */
rest: {
hub: "Citizenship and the rest",
sub: "Territory, language, services, elections",
br: [
  { h: "Territory and citizenship",
    lv: [["1", "==India, that is Bharat, shall be a Union of States=="],
         ["2", "==admission or establishment== of ==new== States — territory ==not India before=="],
         ["3", "==formation== of new States, and ==alteration== of areas, boundaries or names"],
         ["4", "laws made under ==2 and 3==, and what they may provide for"],
         ["5", "to ==11== — ==citizenship== at commencement, and ==Parliament's power since=="],
         ["How 3 is passed", "by a ==simple majority== — and only on the ==President's recommendation=="]],
    m: "2 brings in what was never India; 3 rearranges what already is." },

  { h: "Language — 343 to 351",
    lv: [["343", "the ==official language of the Union== — ==Hindi in Devanagari==, with ==English=="],
         ["344", "the ==Commission== and the ==Committee of Parliament== on official language"],
         ["345", "the official language ==of a State=="],
         ["348", "the Supreme Court, the High Courts, and all Acts and Bills are in ==English==, until Parliament says otherwise"],
         ["350A", "==instruction in the mother tongue== at the ==primary== stage"],
         ["350B", "the ==Special Officer for Linguistic Minorities=="],
         ["351", "the ==directive for the development of Hindi=="]],
    m: "343 makes Hindi official, 351 tells the Union to develop it, 350B protects the minorities." },

  { h: "Property, services and tribunals",
    lv: [["300A", "the ==right to property== — ==constitutional==, not fundamental, since the ==44th=="],
         ["312", "the ==All-India Services== — created on a ==Rajya Sabha resolution=="],
         ["315", "the ==Public Service Commissions==; ==320== their ==functions=="],
         ["323A", "==administrative tribunals==; ==323B== tribunals for ==other matters=="]] },

  { h: "Elections",
    lv: [["324", "==superintendence, direction and control==, vested in the ==Election Commission=="],
         ["325", "==one general electoral roll== — no exclusion on religion, race, caste or sex"],
         ["326", "==adult suffrage== for the Lok Sabha and the Assemblies — ==18== since the ==61st=="],
         ["327", "==Parliament's== power over elections; ==328== a ==State legislature's=="],
         ["329", "==no court may interfere== in an electoral matter"]] },

  { h: "The special provisions",
    lv: [["371A", "==Nagaland==; ==371B== ==Assam==; ==371C== ==Manipur=="],
         ["371D", "==Andhra Pradesh and Telangana==; ==371F== ==Sikkim=="],
         ["371G", "==Mizoram==; ==371H== ==Arunachal==; ==371-I== ==Goa==; ==371J== ==Karnataka=="],
         ["Which two have a veto", "==371A Nagaland== and ==371G Mizoram== — a ==State legislature's== consent is needed"],
         ["370", "==Jammu and Kashmir== — the only article the Constitution ==still calls temporary=="]],
    m: "A Nagaland, B Assam, C Manipur, D Andhra, F Sikkim, G Mizoram, H Arunachal, I Goa, J Karnataka." }
]},

/* ========================================= THE CONSTITUENT ASSEMBLY */
assembly: {
hub: "The Constituent Assembly",
sub: "Who made it, and how",
br: [
  { h: "How it was constituted",
    lv: [["Under what", "the ==Cabinet Mission Plan==, ==1946=="],
         ["Total seats", "==389== — ==296== British Indian, ==93== princely state"],
         ["After Partition", "==299=="],
         ["First met", "==9 December 1946==; the ==Muslim League boycotted=="],
         ["Temporary chairman", "==Sachchidananda Sinha==, the ==oldest member=="],
         ["President", "==Dr Rajendra Prasad==, its ==first and only=="]] },

  { h: "The numbers",
    lv: [["Sessions", "==11==, over ==165== days of sitting"],
         ["On the draft", "==114== of those ==165== days"],
         ["Total time", "==2 years, 11 months and 18 days=="],
         ["Amendments", "about ==7,635== tabled, about ==2,473== moved"],
         ["Cost", "about ==₹64 lakh=="],
         ["Who signed", "==284== members, on ==24 January 1950=="],
         ["Women members", "usually given as ==15=="]] },

  { h: "The committees",
    lv: [["How many", "usually given as ==22==, of which ==eight== are called ==major=="],
         ["Drafting Committee", "==B. R. Ambedkar==, with ==seven== members"],
         ["Union Powers, Union Constitution", "==Jawaharlal Nehru=="],
         ["Provincial Constitution", "==Sardar Patel==, who also chaired the ==Advisory Committee=="],
         ["Rules of Procedure, Steering", "==Dr Rajendra Prasad=="],
         ["Fundamental Rights sub-committee", "==J. B. Kripalani==, under Patel's Advisory Committee"]] },

  { h: "Firsts and onlys",
    lv: [["Only Muslim woman member", "==Begum Aizaz Rasul=="],
         ["Only Dalit woman member", "==Dakshayani Velayudhan==, also its ==youngest woman=="],
         ["Only Communist member", "==Somnath Lahiri=="],
         ["First Speaker of the Lok Sabha", "==G. V. Mavalankar==, who chaired its ==legislative== sittings"],
         ["Who wrote it out", "==Prem Behari Narain Raizada==, ==by hand==, ==unpaid=="]] },

  { h: "The days that came out of it",
    lv: [["26 November", "==Constitution Day== — the ==adoption==, 1949. Declared so in ==2015=="],
         ["26 January", "==Republic Day== — the ==commencement==, 1950"],
         ["14 September", "==Hindi Diwas== — the Assembly's ==official language== decision, ==1949=="],
         ["22 July 1947", "it adopted the ==national flag==; the ==anthem== on ==24 January 1950=="],
         ["After 26 January 1950", "it continued as the ==Provisional Parliament== until the ==first general election=="]] }
]}

}};
