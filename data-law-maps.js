/* The Article Machine - data-law-maps.js
   The new criminal laws as mind maps: one for each of the five topics, and
   one overview whose branches open them.

   Nothing here is new. Every line is taken from data-laws.js, which is where
   the section numbers are checked and where the fuller statement of each one
   lives. A map is that material cut to the words the question turns on.

   Fields:  LAW_MAPS                  the overview map
              hub, sub                the centre of the map
              br[]                    branches: h title, to (a topic id: the
                                      branch opens that topic's map), lv
                                      leaves, m an optional memory hook
            LAW_MAPS.topics[id]       one map per topic, same shape, no `to`

   A leaf is a string, or [key, text]. The key is the PROMPT - a section, an
   old IPC number, a date - and it stays visible when the map is covered for
   recall; the text is the answer and is what gets covered. A key here is NOT
   linked: "Section 103" on these maps is a section of the BNS, and a link to
   article 103 of the Constitution would be wrong. ==text== marks the words
   the question turns on.                                                  */

window.LAW_MAPS = {

hub: "The new criminal laws",
sub: "BNS, BNSS and BSA, from 1 July 2024",
br: [
  { h: "The three Acts", to: "framework",
    lv: [["BNS", "replaced the ==Indian Penal Code, 1860== — the ==offences=="],
         ["BNSS", "replaced the ==Code of Criminal Procedure, 1973== — the ==procedure=="],
         ["BSA", "replaced the ==Indian Evidence Act, 1872== — the ==evidence=="],
         ["In force", "==1 July 2024==, all three together"]] },

  { h: "The offences — BNS", to: "bns",
    lv: [["Murder", "defined ==101==, punished ==103== — the old ==IPC 302=="],
         ["Section 152", "the ==sedition replacement== — ==endangering sovereignty, unity and integrity=="],
         ["Section 69", "==NEW== — intercourse by ==deceitful means== or a ==false promise to marry=="],
         ["Section 304", "==NEW== — ==snatching=="]] },

  { h: "The procedure — BNSS", to: "bnss",
    lv: [["Section 173", "==FIR== — and it must be registered ==whatever the jurisdiction=="],
         ["Section 176", "==forensics compulsory== where the offence carries ==seven years or more=="],
         ["Section 187", "==police custody== — the ==fifteen days may be taken in parts=="],
         ["Section 356", "==trial in absentia== of a ==proclaimed offender=="]] },

  { h: "The evidence — BSA", to: "bsa",
    lv: [["What changed", "==electronic records are documents==, expressly"],
         ["Section 63", "==replaced the old 65B== — and the certificate is ==stricter=="],
         ["The hash value", "it lets the court test whether the ==file produced is the file seized=="],
         ["What did not change", "==the great bulk of it=="]] },

  { h: "IPC to BNS", to: "mapping",
    lv: [["302", "→ ==103=="],
         ["420", "→ ==318=="],
         ["376", "→ ==64=="],
         ["124A", "→ ==152==, and the ==word sedition is gone=="]] }
],

topics: {

/* ================================================ THE FRAMEWORK */
framework: {
hub: "The three Acts",
sub: "What they replaced, and when",
br: [
  { h: "Which Act replaced which",
    lv: [["Bharatiya Nyaya Sanhita", "the ==Indian Penal Code, 1860== — the ==substantive== law"],
         ["Bharatiya Nagarik Suraksha Sanhita", "the ==CrPC, 1973== — the ==procedural== law"],
         ["Bharatiya Sakshya Adhiniyam", "the ==Indian Evidence Act, 1872== — ==Act 47 of 2023=="],
         ["How to keep them straight", "==Nyaya== is justice, so it names the ==offences=="],
         ["", "==Nagarik Suraksha== is the citizen's protection — the ==procedure=="],
         ["Who drafted the old penal code", "==Macaulay== — enacted ==1860==, in force from ==1862=="]],
    m: "Nyaya the offences, Nagarik Suraksha the procedure, Sakshya the evidence." },

  { h: "The dates",
    lv: [["First introduced", "==11 August 2023==, in the ==Lok Sabha=="],
         ["Passed", "==Lok Sabha 20 December==, ==Rajya Sabha 21 December 2023=="],
         ["Assent", "==25 December 2023==, by President ==Droupadi Murmu=="],
         ["In force", "==1 July 2024==, all three together, by notification"],
         ["The committee", "the ==Standing Committee on Home Affairs==, chaired by ==Brij Lal=="],
         ["The date that decides a case", "the date of the ==OFFENCE== — ==not== the FIR, the charge sheet or the trial"]] },

  { h: "The numbers",
    lv: [["IPC against BNS", "==511== sections against ==358== — the penal code got ==shorter=="],
         ["CrPC against BNSS", "==484== against ==531== — the procedure got ==longer=="],
         ["Evidence Act against BSA", "==167== against ==170== — the ==smallest change== of the three"],
         ["Chapters", "BNS ==20== against ==23==; BNSS ==39== against ==37=="],
         ["Added and dropped", "==20 new offences== added, ==19 IPC provisions== dropped"]],
    m: "Offences shorter, procedure longer, evidence barely moved." },

  { h: "What was added, and what went",
    lv: [["Added", "==community service==, ==organised crime==, ==petty organised crime=="],
         ["", "==terrorism in the general penal code==, and ==mob lynching=="],
         ["Gone", "==sedition by that name==; ==attempting suicide== generally"],
         ["", "==adultery==, and the ==unnatural-offences== section"]] }
]},

/* ======================================================= BNS */
bns: {
hub: "Bharatiya Nyaya Sanhita",
sub: "The offences, by section",
br: [
  { h: "Section 4 — the punishments",
    lv: [["The six", "==death==; ==imprisonment for life==; imprisonment; ==forfeiture==; fine; ==community service=="],
         ["Community service", "clause ==(f)== — the punishment the ==IPC did not have=="],
         ["For how many offences", "==six== — sections ==202, 209, 226, 303(2), 355 and 356(2)=="],
         ["What it is not", "==not defined== in the BNS beyond the name"]] },

  { h: "Against the human body",
    lv: [["100", "==culpable homicide== — the definition. Was ==IPC 299=="],
         ["101", "==murder== — the definition. Was ==IPC 300=="],
         ["103", "==punishment for murder== — this is what ==IPC 302== used to be"],
         ["103(2)", "==mob lynching== — ==five or more== acting together, on a stated ground"],
         ["105", "culpable homicide ==not amounting to murder==. Was ==IPC 304=="],
         ["106", "death by a ==rash or negligent act==. Was ==IPC 304A=="],
         ["106(2)", "==hit and run== — causing death by rash driving and ==escaping without reporting=="],
         ["108", "==abetment of suicide==, up to ==ten years==. Was ==IPC 306=="],
         ["109", "==attempt to murder==. Was ==IPC 307=="]],
    m: "The definition moved to 101 and the punishment to 103. 302 answers nothing now." },

  { h: "Against women and children",
    lv: [["63", "==rape== — the definition. Was ==IPC 375=="],
         ["64", "==punishment== — not less than ==ten years==, to ==imprisonment for life=="],
         ["65", "where the victim is ==under twelve== — not less than ==twenty years=="],
         ["69", "==NEW== — ==deceitful means== or a ==false promise to marry=="],
         ["70", "==gang rape== — not less than ==twenty years==, to the ==remainder of natural life=="],
         ["74", "==outraging modesty== — ==one to five years==. Was ==IPC 354=="],
         ["75 to 78", "==harassment, disrobing, voyeurism, stalking== — were ==IPC 354A to 354D=="],
         ["80", "==dowry death==. Was ==IPC 304B=="]] },

  { h: "Against the State",
    lv: [["147", "==waging war== against the Government of India. Was ==IPC 121=="],
         ["152", "the ==sedition replacement== — ==secession, armed rebellion, subversive activities=="],
         ["Sedition itself", "the ==word== and ==IPC 124A== are ==gone=="],
         ["What changed in substance", "==124A== turned on ==disaffection==; ==152== on ==endangering sovereignty=="]] },

  { h: "Against property",
    lv: [["303", "==theft==. Was ==IPC 378== and ==379=="],
         ["303(2)", "the ==first-time petty-theft proviso==, where the value is small and it is ==returned=="],
         ["304", "==NEW== — ==snatching=="],
         ["309", "==robbery==. Was ==IPC 390== and ==392=="],
         ["310", "==dacoity== — robbery by ==five or more=="],
         ["316", "==criminal breach of trust==. Was ==IPC 405== and ==406=="],
         ["318", "==cheating== — and this is what ==IPC 420== used to be"],
         ["351", "==criminal intimidation==. Was ==IPC 503== and ==506==, now in ==one section=="]] }
]},

/* ====================================================== BNSS */
bnss: {
hub: "Nagarik Suraksha Sanhita",
sub: "FIR to judgment, and the deadlines",
br: [
  { h: "Filing a case",
    lv: [["173", "the ==FIR== — registered ==whatever the territorial jurisdiction== (the ==zero FIR==, in the Act)"],
         ["e-FIR", "information may be given ==electronically==, and then ==signed within three days=="],
         ["Preliminary enquiry", "allowed where the offence carries ==three years or more but less than seven=="],
         ["193", "the ==police report==, the old ==CrPC 173=="],
         ["Progress to the victim", "must be told ==within ninety days==, including ==electronically=="]] },

  { h: "Investigation, custody and bail",
    lv: [["176", "==forensics compulsory== where the offence carries ==seven years or more=="],
         ["105", "search and seizure ==recorded by audio-video== and ==sent to the magistrate=="],
         ["187", "==police custody== — the ==fifteen days may be taken in parts==, not only at the start"],
         ["479", "an undertrial who has served ==half the maximum== must be ==released on bond=="],
         ["", "==one third== for a ==first-time== offender; ==not available== where the offence carries ==death=="],
         ["Handcuffs", "permitted for ==stated categories== only"],
         ["Arrest", "a ==nominated person== must be told, and the details ==displayed at the police station=="]] },

  { h: "Trial, judgment and the clock",
    lv: [["356", "==trial in absentia== — only of a ==declared proclaimed offender=="],
         ["Electronic proceedings", "trials and inquiries may be held by ==audio-video== means"],
         ["A rape survivor's statement", "recorded by a ==woman magistrate==, or by a man ==in a woman's presence=="],
         ["Charges framed", "within ==sixty days== of the first hearing on charge"],
         ["Judgment", "within ==forty-five days== of the end of the trial, and a ==free copy to the victim=="],
         ["Sanction to prosecute", "decided within ==one hundred and twenty days==, or ==deemed granted=="],
         ["Mercy petitions", "==timelines for the first time== — ==thirty days== from the jail's notification"],
         ["Witness protection", "every state must ==notify a scheme=="]],
    m: "Sixty to frame, forty-five to judge, a hundred and twenty to sanction." }
]},

/* ======================================================= BSA */
bsa: {
hub: "Bharatiya Sakshya Adhiniyam",
sub: "What changed, and what did not",
br: [
  { h: "Electronic records",
    lv: [["Document", "now ==expressly includes== electronic and digital records"],
         ["61", "admissibility ==may not be denied merely because== a record is electronic"],
         ["62", "the contents are proved ==in accordance with 63=="],
         ["63", "==replaced the old 65B== — and the certificate is ==stricter=="],
         ["The hash value", "it lets the court test whether the ==file produced is the file seized=="],
         ["Primary evidence widened", "records in ==several files or devices at once== are ==each primary=="]] },

  { h: "Giving evidence",
    lv: [["Oral evidence", "may be given ==electronically== — a witness or victim may ==depose by video=="],
         ["Joint trials", "clarified where an accused ==absconds== or ignores a ==proclamation=="],
         ["Sections", "==170==, against the Evidence Act's ==167== — the ==smallest change== of the three Acts"]] },

  { h: "What did NOT change",
    lv: [["The bulk of it", "==relevancy, admissions, confessions, dying declarations=="],
         ["Confession to the police", "still ==inadmissible=="],
         ["Why that matters", "the ==questions on the old law are still the questions=="]] }
]},

/* =================================================== MAPPING */
mapping: {
hub: "IPC to BNS",
sub: "The conversion that is asked",
br: [
  { h: "The ones to know cold",
    lv: [["302", "→ ==103==; the ==definition== moved from ==300 to 101=="],
         ["304", "→ ==105==; ==304A== → ==106==; ==304B== → ==80=="],
         ["306", "→ ==108==; ==307== → ==109=="],
         ["309", "==gone== as a general offence — only ==226== survives, and only ==to compel a public servant=="],
         ["375 and 376", "→ ==63 and 64=="],
         ["354", "→ ==74==; the ==354A to 354D== family → ==75 to 78=="],
         ["498A", "→ ==85==, with cruelty defined in ==86=="]] },

  { h: "Property and cheating",
    lv: [["378 and 379", "→ ==303=="],
         ["390 and 392", "→ ==309=="],
         ["391 and 395", "→ ==310=="],
         ["405 and 406", "→ ==316=="],
         ["415 and 420", "→ ==318=="],
         ["503 and 506", "→ ==351==, now ==one section=="]],
    m: "420 is the one everyone knows and the one that no longer exists: it is 318." },

  { h: "CrPC to BNSS, Evidence to BSA",
    lv: [["154", "→ ==173=="],
         ["167", "→ ==187=="],
         ["173", "→ ==193=="],
         ["299", "→ ==356==, which goes further and allows the ==trial to be completed=="],
         ["436A", "→ ==479=="],
         ["65B", "→ ==BSA 63=="],
         ["113B", "carried over; the ==offence== itself is ==BNS 80=="]] }
]}

}};
