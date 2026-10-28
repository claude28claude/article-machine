/* The Article Machine - data-jca-maps.js
   The JCA mind maps: one for each part of the law paper and one for each
   topic, the whole syllabus reduced to keywords for revision.

   Nothing here is new. Every line is taken from the checked notes, tables and
   pairs in data-jca-judiciary.js, data-jca-scr.js and data-jca-osr.js, and a
   point those files flag as resting on one source is left off the maps, so
   that nothing on a map needs checking before it is learnt. The article
   headings used (144, 147, 329, 363) are the official ones in
   data-articles.js. When a note changes, its line here changes with it.

   Fields:  JCA_MAPS[section id]      the part's overview map
              hub, sub                the centre of the map
              br[]                    branches: h title, to (a topic id: the
                                      branch opens that topic's map), lv
                                      leaves, m an optional memory hook
              topics[topic id]        one map per topic, same shape, no `to`
            A leaf is a string, or [key, text]: the key is printed as a tag
            (an article, an Order, a rule), and on the Constitution maps an
            article key links to its page. ==text== marks the answer.      */

window.JCA_MAPS = {

  /* =============================================================== Constitution */
  c: {
    hub: "Judiciary in the Constitution",
    sub: "15 questions · 7 topics",
    br: [
      { h: "Who sits on the Supreme Court", to: "sc-bench",
        lv: [["124", "CJI and 33 judges: ==34== since 2019"], "Retire: Supreme Court ==65==, High Court ==62==",
             ["124(4)", "Removal: ==each House==, special majority, ==same session=="], "NJAC struck down ==2015==; collegium stays"] },
      { h: "What it can hear", to: "sc-powers",
        lv: [["131", "Original: ==Union and States== only"], ["132", "to 134: appeals, ==Constitution, civil, criminal=="],
             ["136", "Special leave from ==any court== except military"], ["141", "Its law ==binds all courts=="]] },
      { h: "The High Courts", to: "high-courts",
        lv: [["214", "A High Court for each State"], ["217", "==10 years== judge or advocate; ==no jurist=="],
             ["226", "Writs for ==any other purpose== too"], ["227", "==Superintendence== of courts and tribunals"]] },
      { h: "The courts below", to: "subordinate",
        lv: [["233", "District judges: ==Governor + High Court=="], ["233(2)", "==7 years== at the Bar, on HC recommendation"],
             ["235", "Control ==vested in the High Court=="]] },
      { h: "Writs", to: "writs",
        lv: [["32", "A ==fundamental right==: “heart and soul”"], "Five: habeas corpus, mandamus, prohibition, certiorari, quo warranto",
             "Prohibition ==before==, certiorari ==after=="] },
      { h: "The rest of the Constitution", to: "elsewhere",
        lv: [["39A", "==Free legal aid=="], ["50", "Separate ==judiciary from executive=="],
             ["121", "and 211: no debate on a judge's conduct"], ["323A", "and 323B: ==tribunals=="]] },
      { h: "Cases, firsts, numbers", to: "cases-numbers",
        lv: ["Inaugurated ==28 January 1950==", "First CJI ==H. J. Kania==", "Largest bench ==13== (Kesavananda, 1973)"] }
    ],

    topics: {
      "sc-bench": {
        hub: "Who sits on the Supreme Court", sub: "Articles 124 to 128",
        br: [
          { h: "Strength",
            lv: [["124(1)", "A CJI and, as enacted, not more than ==7== other judges"], "Parliament raises the number ==by law==",
                 "Since ==2019==: 33 judges + the CJI = ==34=="] },
          { h: "Appointment",
            lv: ["By the ==President==, by warrant under his hand and seal", "The ==CJI is always consulted==, except for his own post",
                 "Collegium: Second Judges case, ==1993== (9 judges)", "Third Judges case, ==1998==: CJI + ==4== senior-most; ==2== for High Courts"] },
          { h: "Who qualifies", m: "Judge 5, Advocate 10, or a Jurist",
            lv: [["124(3)", "A ==citizen of India== who is:"], "==5 years== a High Court judge, or", "==10 years== a High Court advocate, or",
                 "a ==distinguished jurist==, in the President's opinion", "==No minimum age=="] },
          { h: "Tenure, oath, pay",
            lv: [["124(2)", "In office until ==65==; resigns by writing to the ==President=="], ["124(6)", "Oath before the ==President==, Third Schedule form"],
                 ["125", "Pay fixed by Parliament; never cut, save in a ==Financial Emergency== (360(4)(b))"],
                 "Charged on the ==Consolidated Fund of India== (112(3)(d))", ["124(7)", "After retiring: ==no practice== in any court in India"]] },
          { h: "Removal", m: "Lok Sabha 100, Rajya Sabha 50: the smaller House needs half",
            lv: [["124(4)", "An address by ==each House==, in the ==same session=="], "==Majority of total membership== + ==two-thirds present and voting==",
                 "Grounds: ==proved misbehaviour or incapacity==", "Judges (Inquiry) Act ==1968==: ==100== Lok Sabha or ==50== Rajya Sabha signatures",
                 "A ==three-member== inquiry committee"] },
          { h: "Acting, ad hoc, retired", m: "126, 127, 128: Acting, Ad hoc, Retired",
            lv: [["126", "Acting CJI: appointed by the ==President=="], ["127", "Ad hoc: no quorum; CJI, with the President's ==previous consent=="],
                 ["128", "Retired judges sit again; CJI + President's consent; they must agree"]] },
          { h: "NJAC, 124A to 124C",
            lv: ["==99th Amendment, 2014==", "Struck down ==16 October 2015==, ==4 to 1==, by five judges",
                 "Would have had ==6 members==, chaired by the CJI", "The ==collegium== continues"] }
        ]
      },

      "sc-powers": {
        hub: "What the Supreme Court can hear", sub: "Articles 129 to 147",
        br: [
          { h: "Its standing",
            lv: [["129", "Court of record: punishes ==contempt of itself=="], ["130", "Sits at ==Delhi==, or where the CJI, with the President's approval, decides"],
                 ["141", "The law it declares ==binds all courts=="], ["142", "Any order needed for ==complete justice=="]] },
          { h: "Original, Article 131",
            lv: ["==Union against States==, or ==State against State==", "Must turn on a ==legal right==", "==No private party== can sue under it",
                 "Pre-Constitution treaty disputes are out; the President may refer them under ==143(2)=="] },
          { h: "Appeals from High Courts", m: "132, 133, 134: Constitution, Civil, Criminal, in that order",
            lv: [["132", "A ==constitutional== question"], ["133", "==Civil==: a substantial question of general importance"],
                 ["134", "==Criminal==: as of right if a High Court reverses an acquittal and sentences to ==death=="],
                 ["134A", "The certificate (44th Amendment, ==1978==)"]] },
          { h: "Leave, review, transfer",
            lv: [["136", "Special leave from ==any court or tribunal==, at its discretion; not ==Armed Forces=="], ["137", "Reviews its ==own== judgments"],
                 ["139A", "Pulls in cases on a common question; moves a case between High Courts (42nd Amendment)"],
                 "Curative: ==Rupa Ashok Hurra (2002)==, not in the text"] },
          { h: "Advisory, Article 143", m: "143(1) may, 143(2) shall",
            lv: [["143(1)", "Any question of public importance: the Court ==may== answer"], ["143(2)", "A pre-Constitution treaty dispute: it ==shall=="],
                 "First reference: ==In re Delhi Laws Act (1951)==", "Declined: the ==Ayodhya== reference (1994)"] },
          { h: "Rules, staff, and the rest",
            lv: [["145", "Rules of practice, the President approving: the ==SC Rules, 2013=="], ["145(3)", "At least ==5 judges== for a constitutional question or a 143 reference"],
                 ["145(4)", "Judgments only in ==open court=="], ["146", "Staff: appointed by the ==CJI==; his rules are the ==1961 Rules=="],
                 ["144", "Civil and judicial authorities act ==in aid of== the Court"], ["147", "Interpretation"]] }
        ]
      },

      "high-courts": {
        hub: "The High Courts", sub: "Articles 214 to 231",
        br: [
          { h: "Set-up",
            lv: [["214", "A High Court for ==each State=="], ["231", "One High Court for ==two or more States=="], ["215", "A ==court of record==, like the Supreme Court"],
                 ["216", "Number of judges: the ==President== decides"]] },
          { h: "Appointment", m: "High Court: 10 and 10, and no jurist",
            lv: [["217(1)", "By the ==President==, after consulting the ==CJI==, the ==Governor== and the High Court's Chief Justice"],
                 "==10 years== in judicial office, or ==10 years== a High Court advocate", "==No distinguished-jurist route==",
                 "Retires at ==62==", ["217(3)", "Age dispute: the ==President after consulting the CJI==, final"]] },
          { h: "Oath, transfer, after retiring",
            lv: [["219", "Oath before the ==Governor=="], "Resigns to the ==President==", ["222", "Transfer: President after consulting the CJI; a ==compensatory allowance=="],
                 ["220", "After retiring: may practise in the ==Supreme Court and other High Courts=="]] },
          { h: "Extra judges",
            lv: [["224", "Additional judges for up to ==2 years==; acting judges"], ["224A", "Retired judges: the HC Chief Justice + President's ==previous consent=="]] },
          { h: "Writs and control", m: "226 commands anyone; 227 supervises courts",
            lv: [["226", "Writs for rights ==and any other purpose==: wider than 32"], ["226(2)", "Wherever the ==cause of action arises=="],
                 ["226(3)", "Ex parte interim order lapses if a vacate plea is not decided in ==2 weeks=="],
                 ["227", "Superintendence of every court and tribunal; ==not military=="], ["228", "Withdraws a case that turns on the ==Constitution=="]] },
          { h: "Money", m: "Salary from the State, pension from India",
            lv: ["Salary: ==Consolidated Fund of the State==", "Pension: ==Consolidated Fund of India=="] },
          { h: "In numbers, October 2026",
            lv: ["==25== High Courts", "Oldest: ==Calcutta== (1862)", "Newest: ==Andhra Pradesh==, Amaravati (2019)", "==Gauhati== serves four States",
                 "Delhi has its own (1966)"] }
        ]
      },

      "subordinate": {
        hub: "The courts below", sub: "Articles 233 to 237",
        br: [
          { h: "District judges, 233", m: "233: judges, with the High Court. 234: the rest, with the PSC too",
            lv: ["Appointed by the ==Governor==, in consultation with the ==High Court==", "Eligible: ==7 years== as an advocate or pleader",
                 "Only on the ==High Court's recommendation==", ["233A", "Validated old appointments (20th Amendment, ==1966==), after Chandra Mohan"]] },
          { h: "The judicial service, 234",
            lv: ["Appointed by the ==Governor==", "Under rules made after consulting the ==State PSC and the High Court=="] },
          { h: "Control, 235",
            lv: ["==Vested in the High Court==", "Posting, promotion and leave"] },
          { h: "Who is a district judge, 236",
            lv: ["A ==sessions judge==; a ==city civil court== judge", "A ==chief presidency magistrate==", "The chief judge of a ==small cause court==",
                 "==Not== a judicial magistrate of the first class"] },
          { h: "Around them",
            lv: [["237", "The Governor may apply the Chapter to ==magistrates=="], "Administration of justice: ==Concurrent List 11A== (42nd Amendment)",
                 ["312", "All India Judicial Service: ==nothing below district judge=="], ["247", "Parliament may set up ==additional courts== for Union laws"],
                 ["50", "A directive: separate the ==judiciary from the executive=="]] }
        ]
      },

      "writs": {
        hub: "Writs", sub: "Articles 32 and 226",
        br: [
          { h: "Article 32",
            lv: ["Itself a ==fundamental right==", "Ambedkar: the ==very soul and heart==", "Only for the fundamental rights, in the ==Supreme Court==",
                 ["32(3)", "Parliament may let ==other courts== issue writs"], ["139", "Parliament may add writ power for ==other purposes=="]] },
          { h: "Article 226", m: "226 is wider in scope; 32 is stronger in kind",
            lv: ["For rights ==and any other purpose==", "In each ==High Court==, within its territory", "==Discretionary==",
                 "Reaches wherever the ==cause of action arises=="] },
          { h: "The five writs",
            lv: [["Habeas corpus", "“To have the body”: even against a ==private person=="], ["Mandamus", "“We command”: a public duty; not the ==President or a Governor=="],
                 ["Prohibition", "“To forbid”: ==before== the decision"], ["Certiorari", "“To be certified”: quashes ==after== the decision"],
                 ["Quo warranto", "“By what authority”: a ==public office==; anyone may ask"]], m: "Prohibition prevents, certiorari corrects" },
          { h: "In an Emergency",
            lv: [["359", "The President may suspend the ==enforcement== of rights"], "Never ==Articles 20 and 21== (44th Amendment, 1978)"] },
          { h: "PIL milestones",
            lv: ["First PIL: ==Hussainara Khatoon (1979)==", "Standing relaxed: ==S. P. Gupta (1981)==", "Compensation: ==Rudul Sah (1983)==",
                 "A letter as a petition: ==Bandhua Mukti Morcha (1984)=="] },
          { h: "Cases on Article 32 itself",
            lv: ["==Romesh Thappar (1950)==: the Court as protector and guarantor", "==Daryao (1961)==: ==res judicata== applies",
                 "==L. Chandra Kumar (1997)==: 32 and 226 are basic structure"] }
        ]
      },

      "elsewhere": {
        hub: "The judiciary elsewhere", sub: "From Article 39A to the Schedules",
        br: [
          { h: "Justice for all",
            lv: [["39A", "Equal justice and ==free legal aid== (42nd Amendment, 1976)"], "Legal Services Act in force ==9 November 1995==",
                 "The ==CJI== is Patron-in-Chief of NALSA", "A Lok Adalat award is ==final=="] },
          { h: "Legislatures and judges", m: "Only Parliament removes, so only Parliament may discuss",
            lv: [["121", "Parliament: no debate on a judge's conduct, ==except a removal motion=="], ["211", "A State Legislature: ==never=="]] },
          { h: "Courts kept out",
            lv: [["71", "Presidential and Vice-Presidential elections: the ==Supreme Court== decides"], ["262(2)", "Parliament may bar courts from ==river water== disputes"],
                 ["329", "Bar to courts in ==electoral matters=="], ["361", "The President and Governors are ==not answerable== to courts"],
                 ["363", "Bar on pre-Constitution ==treaty== disputes"]] },
          { h: "Tribunals and services",
            lv: [["323A", "Administrative tribunals: ==Parliament only=="], ["323B", "Other tribunals: ==Parliament or a State=="],
                 ["312", "All India Judicial Service: Rajya Sabha, ==two-thirds== present and voting"]] },
          { h: "Language, 348",
            lv: ["Supreme Court and High Courts: ==English==", "A Governor may allow Hindi in a High Court, ==not for judgments=="] },
          { h: "Lists and Schedules",
            lv: ["Union List ==77==: the Supreme Court", "Union ==78==: the High Courts, not their staff", "State List ==3==: High Court staff",
                 "Concurrent ==11A==: administration of justice", "Oaths: Form ==IV== (Supreme Court), Form ==VIII== (High Court)", "Pay: Second Schedule, ==Part D=="] },
          { h: "In and out", m: "In with the 42nd, out with the 43rd",
            lv: ["32A, 131A, 144A, 226A, 228A: added by the ==42nd==, omitted by the ==43rd== (1977)",
                 ["360(4)(b)", "Financial Emergency: judges' pay ==can be cut=="]] }
        ]
      },

      "cases-numbers": {
        hub: "Cases, firsts, numbers", sub: "What an exam counts",
        br: [
          { h: "Beginnings",
            lv: ["Inaugurated ==28 January 1950==", "Before it: the ==Federal Court==, from ==1 October 1937==", "Its first Chief Justice: ==Sir Maurice Gwyer==",
                 "Present building: ==1958==", "Motto: ==Yato Dharmastato Jayah=="] },
          { h: "People",
            lv: ["First CJI: ==H. J. Kania==", "First woman judge: ==M. Fathima Beevi== (1989)", "First woman HC Chief Justice: ==Leila Seth== (1991)",
                 "First Dalit CJI: ==K. G. Balakrishnan== (2007)", "Now: ==Surya Kant==, the ==53rd==, since 24 November 2025"] },
          { h: "Records",
            lv: ["Largest bench: ==13 judges==, Kesavananda (1973)", "Longest CJI: ==Y. V. Chandrachud== (1978 to 1985)",
                 "Shortest: ==K. N. Singh==, 17 days (1991)"] },
          { h: "Strength", m: "8, 11, 14, 18, 26, 31, 34",
            lv: ["==8== in 1950", "11 (1956), 14 (1960), 18 (1977)", "26 (1986), 31 (2008)", "==34== since 2019"] },
          { h: "Removal attempts",
            lv: ["==Nobody== has ever been removed", "==V. Ramaswami==: failed in the Lok Sabha (1993)", "==Soumitra Sen==: passed the Rajya Sabha, resigned (2011)",
                 "==Dipak Misra==: notice refused (2018)"] },
          { h: "Cases on procedure",
            lv: ["Curative: ==Rupa Ashok Hurra (2002)==", "Review by circulation: ==P. N. Eswara Iyer (1980)==", "Death reviews in open court: ==Mohd. Arif (2014)==",
                 "Rules cannot abridge a right: ==Prem Chand Garg (1962)==", "Senior designation: ==Indira Jaising (2017)=="] }
        ]
      }
    }
  },

  /* =============================================================== SC Rules 2013 */
  r: {
    hub: "Supreme Court Rules, 2013",
    sub: "10 questions · 57 Orders",
    br: [
      { h: "Where it comes from", to: "scr-basics",
        lv: [["145", "Made by the Court, the ==President approving=="], "Notified ==27 May 2014==; in force ==19 August 2014==",
             "Replaced the ==1966 Rules=="] },
      { h: "Every Order", to: "scr-orders",
        lv: ["==57== Orders, then the Forms", "Part I, General: ==I to XV==", "Part II, Appeals: from ==XVI==", "Part III, Original: from ==XXV=="] },
      { h: "Advocates", to: "scr-advocates",
        lv: [["IV", "==Advocates=="], "AoR: ==4 years== on the roll, ==1 year== training, the exam", "A Senior never appears ==without an AoR=="] },
      { h: "Registry and benches", to: "scr-registry",
        lv: [["V", "Registrar in chambers; appeal in ==15 days=="], ["VI", "Bench of ==2==; death cases ==3=="]] },
      { h: "Minors to judgments", to: "scr-general",
        lv: [["VII", "Minors: a ==next friend=="], ["IX", "Affidavits: ==first person=="], ["XII", "Judgments in ==open court=="]] },
      { h: "Appeals and SLPs", to: "scr-appeals",
        lv: ["SLP: ==90 days== (60 after a refused certificate)", ["XXI", "Civil SLP: ==Form No. 28=="], ["XXII", "Criminal: surrender, ==Rule 5=="]] },
      { h: "Suits, writs, PIL", to: "scr-original",
        lv: [["XXV", "to XXXVII: an ==original suit=="], ["XXXVIII", "Article 32; PIL in ==Rule 12=="]] },
      { h: "Transfers to elections", to: "scr-transfer",
        lv: [["XXXIX", "to XLI: ==3 transfers=="], ["XLII", "to XLV: ==4 references=="], ["XLVI", "Election petitions, ==5 judges=="]] },
      { h: "Review and curative", to: "scr-review",
        lv: [["XLVII", "Review: ==30 days=="], ["XLVIII", "Curative: a ==Senior Advocate== certifies"]] },
      { h: "Costs to repeal", to: "scr-tail",
        lv: [["XLIX", "Costs"], ["LV", "==Inherent powers=="], ["LVII", "Repeal"]] }
    ],

    topics: {
      "scr-basics": {
        hub: "The rule book", sub: "Where it comes from",
        br: [
          { h: "Source",
            lv: [["145", "Made by the ==Supreme Court=="], "With the ==President's approval==", "Subject to any law made by ==Parliament=="] },
          { h: "Dates", m: "Notified 27 May, in force 19 August, 2014",
            lv: ["Notified ==27 May 2014== (G.S.R. 368(E))", "In force ==19 August 2014==", "A date the ==CJI== appointed"] },
          { h: "Shape",
            lv: ["==57== Orders, then the Forms", ["Part I", "General: ==I to XV=="], ["Part II", "Appellate: from ==XVI=="], ["Part III", "Original: from ==XXV=="],
                 "==Form No. 28==: the civil SLP"] },
          { h: "The old Rules",
            lv: ["Replaced the ==1966 Rules==", ["LVII", "The last Order is the ==repeal=="], "Numbers moved: review was ==XL==, now ==XLVII=="] },
          { h: "Order I, the words",
            lv: ["AoR: may ==act as well as plead==", "“Chief Justice” includes a Judge under ==Article 126==", "“Registrar” includes an ==Additional Registrar==",
                 "“Judgment”: decree, order, sentence or determination", "“Rules” include the ==Forms==", "Court fees: the ==Third Schedule=="] },
          { h: "Amendments",
            lv: ["==2019==: single Judges for bail and transfers", "==2024==: “summer vacation” became ==partial court working days==",
                 "==2025==: Registry hours, and ==every Saturday== a working day"] },
          { h: "145 or 146", m: "145 for the courtroom, 146 for the staff",
            lv: [["145", "Procedure: the ==Court== makes the rules (2013)"], ["146", "Staff: the ==CJI== makes the rules (1961)"]] }
        ]
      },

      "scr-orders": {
        hub: "57 Orders", sub: "The whole rule book in one map",
        br: [
          { h: "General, I to XV",
            lv: [["I", "Interpretation"], ["II", "Offices, sittings, vacation"], ["III", "Officers of the Court"], ["IV", "==Advocates=="],
                 ["V", "Business in chambers"], ["VI", "Benches; a single Judge"], ["VII", "to XIV: minors to suitors' funds"], ["XV", "Petitions generally"]] },
          { h: "Appeals, XVI to XXIV",
            lv: [["XVI", "Hearing of appeals"], ["XVII", "Miscellaneous"], ["XVIII", "Indigent persons"], ["XIX", "Certificate appeals"],
                 ["XX", "Criminal appeals"], ["XXI", "==SLP, civil=="], ["XXII", "==SLP, criminal=="], ["XXIII", "Advocates Act, s.38"], ["XXIV", "Consumer Act, s.23"]] },
          { h: "Original suits, XXV to XXXVII", m: "13 Orders: a civil trial in miniature",
            lv: [["XXV", "Parties"], ["XXVI", "Plaints"], ["XXVIII", "Written statement"], ["XXXI", "Admissions"], ["XXXVII", "Special case"]] },
          { h: "Writs, XXXVIII",
            lv: [["XXXVIII", "Article 32 petitions; ==PIL in Rule 12=="]] },
          { h: "Transfers, XXXIX to XLI", m: "Three transfers in a row",
            lv: [["XXXIX", "s.406 CrPC"], ["XL", "Article 139A(1)"], ["XLI", "Article 139A(2) and s.25 CPC"]] },
          { h: "References, XLII to XLV", m: "Four references: 143, 317, a statute, income tax",
            lv: [["XLII", "Article 143"], ["XLIII", "Article 317(1)"], ["XLIV", "Statutory"], ["XLV", "Income Tax Act, s.257"]] },
          { h: "Elections, review, curative", m: "46, 47, 48: Election, Review, Curative",
            lv: [["XLVI", "Election petitions"], ["XLVII", "==Review=="], ["XLVIII", "==Curative=="]] },
          { h: "The tail, XLIX to LVII",
            lv: [["XLIX", "Costs"], ["L", "Taxation"], ["LI", "Notice to the law officers"], ["LII", "Forms"], ["LIII", "Service"], ["LIV", "Commissions"],
                 ["LV", "Dispense; ==inherent powers=="], ["LVI", "Destruction of records"], ["LVII", "==Repeal=="]] }
        ]
      },

      "scr-advocates": {
        hub: "Advocates and AoRs", sub: "Order IV",
        br: [
          { h: "Who may appear",
            lv: ["Only the party's ==Advocate-on-Record== appears, pleads, addresses", "Others: if ==instructed by an AoR== or ==allowed by the Court==",
                 "An AoR may ==act as well as plead=="] },
          { h: "Senior Advocates",
            lv: ["Designated by the ==CJI and the Judges==, with ==consent==", "For ability, ==standing at the Bar==, or special knowledge",
                 "Never ==without an AoR== here, or a ==junior== elsewhere", "Takes no instructions to ==draw pleadings or affidavits==",
                 "Guidelines: ==Indira Jaising (2017)=="] },
          { h: "Becoming an AoR", m: "4 years, 1 year, 1 exam; 16 km, 1 month",
            lv: ["==4 years== on a State roll", "==1 year== training with an AoR", "Pass the ==AoR exam==: at most ==5 chances==",
                 "Office within ==16 km== of the Court", "A registered clerk within ==1 month==", ["Rule 4", "Not a Senior; meets ==Rule 5=="]] },
          { h: "Duties",
            lv: [["Rule 7(b)", "Certifies the ==vakalatnama's due execution=="], ["Rule 13", "Clerks are ==registered=="],
                 ["Rule 18", "Made Senior? ==Tell the clients==, report to the Registry"]] },
          { h: "Misconduct, Rule 10",
            lv: ["Name ==removed==, permanently or for a period", "Explanation (a): ==mere name-lending==",
                 "(b) absence when the case is called; (c) no signed appearance slip"] }
        ]
      },

      "scr-registry": {
        hub: "The Registry and the benches", sub: "Orders II, III, V, VI, XV",
        br: [
          { h: "Sittings, Order II",
            lv: ["Registry ==10 a.m. to 5 p.m.==, Monday to Friday", "==Every Saturday==, 10 a.m. to 1 p.m. (since 14 July 2025)",
                 "Summer vacation: now ==partial court working days== (2024)", "Those days and holidays: at most ==95== (was 103)",
                 "The ==CJI== fixes them, and names the Judges for urgent matters"] },
          { h: "Officers, Order III",
            lv: ["The ==Secretary General== keeps the records (1966: the Registrar)", "In his absence: the ==Registrar the CJI nominates==",
                 "He keeps the ==seal==; it goes on only with ==written authority=="] },
          { h: "Chambers, Order V", m: "Registrar, then Judge in Chambers, then the Court",
            lv: ["The ==Registrar== uses the Court's powers in listed matters", "Uncontested applications, discovery, inspection, ==substituted service==",
                 ["Rule 3", "Appeal to the ==Judge in Chambers== in ==15 days=="], "He may refer a matter up to the Judge, and on to the Court"] },
          { h: "Benches, Order VI", m: "Ordinary 2, death 3, a constitutional question 5 (Article 145(3))",
            lv: [["Rule 1", "Not less than ==2 Judges==, nominated by the CJI"], "Single Judge (2019): bail SLPs up to ==7 years==; s.406 CrPC; urgent s.25 CPC",
                 "Death sentence confirmed or awarded: not less than ==3==", "A larger Bench: ==refer to the CJI==", "The CJI appoints the ==Judge in Chambers=="] },
          { h: "Petitions, Order XV", m: "Both appeals 15 days: V to the Judge in Chambers, XV to the Court",
            lv: ["Paragraphs and pages ==numbered consecutively==", "A ==caveat==: notice goes to the caveator",
                 ["Rule 5", "Registrar may ==refuse== a petition; appeal in ==15 days== to the ==Court=="]] }
        ]
      },

      "scr-general": {
        hub: "Minors, papers, affidavits, judgments", sub: "Orders VII to XIV",
        br: [
          { h: "Minors, VII",
            lv: ["Sues through a ==next friend==; defended by a ==guardian==", "No compromise ==without the Court's leave==",
                 "New next friend: affidavit, ==fit and proper==, ==no adverse interest==", "Come of age: an ==affidavit== of age and date"] },
          { h: "Documents, VIII",
            lv: ["Filed in ==English== (Article 348(1))", "Another language: with a ==translation=="] },
          { h: "Affidavits, IX",
            lv: ["==First person==, paragraphs ==numbered==", "Facts of the deponent's ==own knowledge==", "Except ==interlocutory== applications: belief, with grounds",
                 "The deponent may be called for ==cross-examination=="] },
          { h: "Inspection and motions, X and XI",
            lv: [["X", "==Inspection and search== of the records, with leave"], ["XI", "A notice of motion gives ==all the grounds=="]] },
          { h: "Judgments, XII",
            lv: ["Pronounced in ==open court==", "At once, or a later day ==with notice==", "One Judge may ==pronounce another's==",
                 "Never altered, save on ==review== or for a ==clerical slip=="] },
          { h: "Copies and funds, XIII and XIV",
            lv: [["XIII", "Parties as of right; others with an ==affidavit of reasons=="], "Certified by an ==AR or Branch Officer==, and ==sealed==",
                 ["XIV", "Suitors' funds, into and out of Court"]] }
        ]
      },

      "scr-appeals": {
        hub: "Appeals and special leave", sub: "Orders XVI to XXIV",
        br: [
          { h: "Time limits", m: "90 for leave; 60 after a refusal or from a certificate",
            lv: ["SLP: ==90 days== from the judgment", "SLP after a refused certificate: ==60 days==", "Certificate appeal: ==60 days== from the certificate",
                 "Delay excused for ==sufficient cause==, never without ==notice== to the respondent"] },
          { h: "Special leave, XXI and XXII",
            lv: ["Civil SLP: ==Form No. 28== (XXI)", "Questions of law and grounds, ==separately==", "Any ==earlier SLP== disclosed on affidavit",
                 "First heard ==ex parte==, unless a ==caveat==", "Leave granted: the ==petition becomes the appeal=="] },
          { h: "Surrender, XXII Rule 5",
            lv: ["Sentenced to ==imprisonment==? Say if surrendered", "Not yet: an ==exemption== application, listed first",
                 "Proof: certified copy, or the ==jail officer's certificate==", "Only for a ==sentence of imprisonment== (Jasminbhai Kothari, 2025)"] },
          { h: "Other appeals",
            lv: [["XVIII", "Indigent: no court or process fee; ==pays for copies=="], ["XIX", "Certificate appeals, with the ==certificate order=="], ["XX", "Criminal appeals"]] },
          { h: "Statute appeals",
            lv: [["XXIII", "Advocates Act s.38: ==60 days==; aggrieved person, ==AG== or State AG"],
                 ["XXIV", "Consumer Act 1986 s.23: ==30 days==; repealed ==20 July 2020==; now ==s.67== of 2019"]] }
        ]
      },

      "scr-original": {
        hub: "Suits, writs and PIL", sub: "Orders XXV to XXXVIII",
        br: [
          { h: "Original suits, XXV to XXXVII",
            lv: ["An ==Article 131== dispute, run like a civil trial", "Parties, plaint, summons, written statement", "Discovery, admissions, witnesses, adjournments",
                 "Hearing, withdrawal, payment in, ==special case=="] },
          { h: "Article 32, XXXVIII",
            lv: ["Enforcing the ==fundamental rights==", "PIL is ==Rule 12=="] },
          { h: "How a PIL starts",
            lv: ["==Suo motu==", "A ==letter== or representation", "The Court ==treats a petition== as PIL",
                 "A filed petition: details, cause, public injury, ==no personal gain== affidavit"] },
          { h: "Taken up: ten kinds",
            lv: ["Bonded labour; neglected children", "Minimum wages; casual workers", "Jails; the police", "Atrocities on women; SC and ST harassment",
                 "Environment; riot victims; ==family pension=="] },
          { h: "Not taken up", m: "Family pension in; service pension out",
            lv: ["==Landlord and tenant==", "==Service matters==, pension and gratuity included", "College ==admissions==", "==Early hearing== of pending cases",
                 "Complaints outside the ten"] }
        ]
      },

      "scr-transfer": {
        hub: "Transfers, references, elections", sub: "Orders XXXIX to XLVI",
        br: [
          { h: "Three transfers",
            lv: [["XXXIX", "s.406 CrPC (now s.446 BNSS): criminal cases"], ["XL", "Article 139A(1): cases on a ==common question=="],
                 ["XLI", "139A(2) and s.25 CPC: civil, ==State to State=="], "All registered as ==Transfer Petitions=="] },
          { h: "Four references", m: "XLII to XLV: 143, 317, a statute, income tax",
            lv: [["XLII", "Article 143: ==AG== notified; opinion ==reported to the President=="], ["XLIII", "Article 317(1): a ==PSC member's== removal"],
                 ["XLIV", "Statutory: the Centre or tribunals"], ["XLV", "Income Tax Act, ==s.257=="]] },
          { h: "Election petitions, XLVI", m: "20 for the President, 10 for the Vice-President",
            lv: ["The ==1952 Act==: President or Vice-President", "Bench of ==5 Judges==, preliminary hearing too", "A candidate, or ==20== electors (P), ==10== (VP)",
                 "Within ==30 days== of the result", "Security ==₹50,000==", "Dismissed; void; or void and ==another declared elected=="] }
        ]
      },

      "scr-review": {
        hub: "Review and curative", sub: "Orders XLVII and XLVIII",
        br: [
          { h: "Review, XLVII", m: "Review: 30 days, the AoR certifies",
            lv: ["Source: ==Article 137==", "Within ==30 days==", "Civil: the ==CPC Order XLVII Rule 1== grounds", "Criminal: an ==error apparent on the record==",
                 "The ==AoR certifies==: first review, admissible grounds"] },
          { h: "How a review is decided",
            lv: ["By ==circulation==, no oral arguments, unless ordered", "To the ==same Bench==, as far as practicable", "==Written arguments== may be filed",
                 "==No second review==", "Death sentence: ==open court== (Mohd. Arif, 2014)"] },
          { h: "Curative, XLVIII", m: "Curative: a reasonable time, a Senior Advocate certifies",
            lv: ["From ==Rupa Ashok Hurra (2002)==", "Grounds ==taken in the review==; review ==dismissed by circulation==",
                 "A ==Senior Advocate's certificate==", "Within a ==reasonable time=="] },
          { h: "How a curative is decided",
            lv: ["Goes to the ==3 senior-most Judges== and the original Bench", "By ==circulation==, unless ordered", "If most want a hearing: the ==same Bench==",
                 "Vexatious: ==exemplary costs==", "The ==Judges==, not the Registry, decide on a hearing (2024)"] }
        ]
      },

      "scr-tail": {
        hub: "Costs to repeal", sub: "Orders XLIX to LVII",
        br: [
          { h: "Money",
            lv: [["XLIX", "Costs"], ["L", "Taxed by the ==Taxing Officer==; the AoR files a ==certificate of fees=="]] },
          { h: "Notice and paper",
            lv: [["LI", "Notice to the ==Attorney-General== or a State's ==Advocate-General=="], ["LII", "Forms"], ["LIII", "Service of documents"], ["LIV", "Commissions"]] },
          { h: "Powers, LV",
            lv: ["==Dispense==: excuse compliance for ==sufficient cause==; a Judge in Chambers decides",
                 ["Rule 6", "==Inherent powers==: ends of justice, ==abuse of process== (Gagan Banga, 2024)"]] },
          { h: "Records and repeal", m: "LV saves, LVI shreds, LVII repeals",
            lv: [["LVI", "Part I kept ==permanently==; Part II destroyed after a period"], ["LVII", "Repeals the ==1966 Rules=="]] }
        ]
      }
    }
  },

  /* =============================================================== O&S Rules 1961 */
  s: {
    hub: "Officers and Servants Rules, 1961",
    sub: "10 questions · 49 rules",
    br: [
      { h: "Where they come from", to: "osr-basics",
        lv: ["By the ==CJI== under ==Article 146(2)==", "==10 January 1961==, S.O. 142", "==5 Parts==, ==49== rules"] },
      { h: "Recruitment", to: "osr-recruitment",
        lv: ["Promotion, deputation, ==direct==", "Probation: direct ==2==, promoted ==1==", ["4A", "Reservation; OBC added ==2025=="]] },
      { h: "Penalties", to: "osr-penalties",
        lv: [["11", "==Seven== penalties"], "Light three: notice; heavy four: ==inquiry==", "Custody over ==48 hours==: suspended"] },
      { h: "Appeals", to: "osr-appeals",
        lv: ["Registrar's penalty: to the ==CJI==", "CJI's penalty: to ==3 Judges==", "Within ==one month=="] },
      { h: "Conduct", to: "osr-conduct",
        lv: ["Rules ==24 to 46==", "Permission: nearly always the ==Registrar==", "No ==party==, no ==strike=="] },
      { h: "Posts and pay", to: "osr-schedule",
        lv: ["JCA: ==Level 6==, ₹35,400", "Court Master: ==Level 11==", "Secretary General: ==Level 17=="] }
    ],

    topics: {
      "osr-basics": {
        hub: "The 1961 Rules", sub: "Where they come from",
        br: [
          { h: "Making them",
            lv: ["By the ==CJI==, under ==Article 146(2)==", "S.O. 142, dated ==10 January 1961==", "President approves: ==salaries, allowances, leave, pensions==",
                 "Subject to ==Parliament's law==; the CJI may authorise a Judge or officer"] },
          { h: "Five Parts", m: "The Parts end at 2, 9, 23, 46, 49",
            lv: [["I", "General: Rules 1 and 2"], ["II", "Strength, Appointment, Conditions: 3 to 9"], ["III", "==Control and Discipline==: 10 to 23"],
                 ["IV", "==Conduct==: 24 to 46"], ["V", "Miscellaneous: 47 to 49"]] },
          { h: "The words, Rule 2",
            lv: ["Court servant: on the cadre in the ==Schedule==", "==Lending Authority==: lends its servant to the Court",
                 "==Borrowing Authority==: borrows a Court servant", "==Disciplinary Authority==: may impose a penalty",
                 "Undefined words: from the ==SC Rules, 2013=="] },
          { h: "The last three",
            lv: [["47", "==Residuary powers==, the CJI's"], ["48", "Interpretation: the ==CJI, finally=="], ["49", "Repealed the ==1951 Rules==; old orders saved"]] },
          { h: "Who decides",
            lv: ["Makes and amends: the ==CJI==", "Approves the pay rules: the ==President==", "Controls every Court servant: the ==CJI== (Rule 10)",
                 "UPSC consulted: if the ==President== so requires"] },
          { h: "Amendments",
            lv: ["G.S.R. 780(E), ==26 October 2019==", "G.S.R. 376(E), ==8 June 2020==", "2023: Jamadar (Farash) became ==Supervisor (Room)==",
                 "Consolidated to ==6 November 2024==", "==July 2025==: Rule 4A substituted"] }
        ]
      },

      "osr-recruitment": {
        hub: "Recruitment and probation", sub: "Rules 3 to 9",
        br: [
          { h: "Posts, Rules 3 and 4",
            lv: [["3", "Strength and composition: ==Classes I to IV=="], ["4", "==Promotion==, ==transfer or deputation==, ==direct recruitment=="],
                 "The ==Schedule== sets the method, post by post", "The CJI may pick another method and fix ==proportions==",
                 "A JCA post: ==direct recruitment=="] },
          { h: "Reservation, Rule 4A", m: "15, 7.5, 27: SC, ST, OBC",
            lv: ["Substituted ==July 2025==", "Adds ==OBC (non-creamy layer)== to SC and ST", "==200-point==, post-based roster (R. K. Sabharwal, 1995)",
                 "SC ==15%==, ST ==7.5%==; OBC ==27%== (August 2025 roster)", "==No EWS==; Judges not covered",
                 "Disability, ex-servicemen, freedom fighters' dependants: ==GoI orders=="] },
          { h: "Appointing, Rules 5 and 6",
            lv: [["5", "Qualifications"], ["6", "Appointing authority: the ==CJI==, or another by ==general or special order=="]] },
          { h: "Probation, Rule 7", m: "Direct 2, promoted 1",
            lv: ["Direct recruit: ==2 years==", "Promotee: ==1 year==", "An insider who answered an open advertisement: ==direct==",
                 "The Rule 6 authority may ==extend or reduce=="] },
          { h: "Seniority and the fallback",
            lv: [["8", "Seniority"], ["9", "Rules silent? ==Government of India== rules for corresponding posts"]] }
        ]
      },

      "osr-penalties": {
        hub: "Penalties and discipline", sub: "Rules 10 to 17",
        br: [
          { h: "Seven penalties, Rule 11", m: "C-W-R, then R-C-R-D: three light, four heavy",
            lv: ["Light: ==censure==, ==withholding==, ==recovery==", "Heavy: ==reduction==, ==compulsory retirement==, ==removal==, ==dismissal==",
                 "For ==good and sufficient reasons==", "Mildest ==censure==; gravest ==dismissal=="] },
          { h: "Not penalties",
            lv: ["Stopped at the ==efficiency bar==", "Not chosen for a ==selection post==", "Reverted from ==officiating==",
                 "Retired on ==superannuation==", "Increment held for failing a ==departmental exam=="] },
          { h: "Procedure, Rules 13 and 14",
            lv: ["Light: written ==notice== and a ==representation==", "Heavy: a full ==inquiry==; not after a criminal ==conviction==",
                 "A ==copy of the inquiry report==; reasons if the authority disagrees",
                 "Withholding over ==3 years==, cumulative, or hitting pension: ==inquiry=="] },
          { h: "Who punishes, Rule 12",
            lv: ["==CJI==: any penalty on anyone, the Registrar included", "==Registrar==: any penalty, ==except Class I==",
                 "Retirement, removal, dismissal: the ==appointing authority== or higher", "Subject to ==Article 311== and Rule 17"] },
          { h: "Suspension, Rules 15 to 17",
            lv: ["A proceeding ==contemplated or pending==", "Activities against ==State security==", "A criminal case under ==investigation or trial==",
                 "Custody over ==48 hours==: deemed suspended from ==detention==", "Revoked by the same or a ==superior== authority",
                 ["16, 17", "Servants ==lent out== and ==borrowed=="]] },
          { h: "Control and Article 311",
            lv: [["10", "Every Court servant under the ==CJI's control=="], "No dismissal by one ==below the appointing authority==",
                 "An ==inquiry==, charges, a hearing", "Exceptions: ==conviction==, impracticable, ==State security=="] }
        ]
      },

      "osr-appeals": {
        hub: "Appeals", sub: "Rules 18 to 23",
        br: [
          { h: "Who hears", m: "One step up: Registrar to CJI, CJI to three Judges",
            lv: [["18(1)", "Registrar's penalty: to the ==CJI=="], ["18(2)", "CJI's penalty: to a ==Bench of 3 Judges=="],
                 ["19", "Efficiency bar, or a rule read against you: the ==CJI=="]] },
          { h: "How, Rules 20 to 22",
            lv: ["Within ==one month== of receiving the order", "Late: if ==sufficient cause==", "Through the ==Registrar==, ==complete in itself==",
                 "No ==improper language==", "The ==Registrar gives effect== to the order"] },
          { h: "The floor, Rule 23",
            lv: ["The CJI may deal with a case ==as is just==", "Never ==less favourably== than the rules"] }
        ]
      },

      "osr-conduct": {
        hub: "Conduct", sub: "Rules 24 to 46",
        br: [
          { h: "Duty, 24 to 25",
            lv: [["24", "==Integrity== and ==devotion to duty=="], ["24A", "Obey the ==intoxicant== laws where posted"],
                 ["25", "Punctual; absent only with ==prior permission==; sudden illness, send word"]] },
          { h: "Politics and voice, 26 to 29", m: "Every permission is the Registrar's, but evidence to a committee needs the CJI (28)",
            lv: [["26", "No ==political party==; an electoral symbol counts as influence"], ["27", "Press or radio: the ==Registrar=="],
                 ["28", "Evidence to a committee: the ==CJI=="], ["29", "No ==unauthorised communication=="]] },
          { h: "Money, 30 to 36",
            lv: [["30", "Subscriptions: the Registrar"], ["31", "Gifts beyond a trifle: the ==Registrar=="], ["32", "Addresses, testimonials: the Registrar"],
                 ["33", "Private trade: ==previous sanction=="], ["34", "No ==speculation=="], ["35", "Insolvency: tell the ==Registrar=="],
                 ["36", "Property: with ==previous knowledge=="]] },
          { h: "Your own cause, 37 to 40",
            lv: [["37", "==Vindication== in court or press: the Registrar"], ["38", "No ==outside influence== for service matters"],
                 ["39", "Relations with ==Advocates and AoRs=="], ["40", "Grievance: ==Registrar==, or the ==CJI== through him; court first invites action"]] },
          { h: "Together, 41 and 42",
            lv: [["41", "No ==demonstration or strike==: pen-down, go-slow, token, bandh"], ["42", "Only ==recognised associations== (within ==6 months==)"]] },
          { h: "Law and property, 43 to 46",
            lv: [["43", "==Arrested==: report it"], ["44", "Court property out: the Registrar's ==express permission=="],
                 ["45", "Breach involving ==moral turpitude==: serious"], ["46", "Any breach: action under ==Part III=="]] }
        ]
      },

      "osr-schedule": {
        hub: "Posts and pay", sub: "The Schedule",
        br: [
          { h: "The Schedule",
            lv: ["Every post by ==category number==", "With its pay and ==method of recruitment==", "2023: Jamadar (Farash) became ==Supervisor (Room)=="] },
          { h: "The pay ladder", m: "6, 7, 8, then a jump to 11",
            lv: [["Level 6", "==Junior Court Assistant==, ₹35,400"], ["Level 7", "Court Assistant, ₹44,900"], ["Level 8", "Senior Court Assistant, ₹47,600"],
                 ["Level 11", "Court Master, Branch Officer, ₹67,700"], ["Level 12", "Assistant Registrar, ₹78,800"], ["Level 17", "==Secretary General=="]] },
          { h: "Your post",
            lv: ["JCA: ==Group B==, ==non-gazetted==", "Filled by ==direct recruitment==", "Court Master (Shorthand): ==gazetted=="] }
        ]
      }
    }
  }
};
