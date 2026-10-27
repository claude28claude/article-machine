/* The Article Machine - data-jca-judiciary.js
   The JCA section, part one: the judiciary provisions of the Constitution,
   the 15-question section of the Supreme Court JCA 2026 objective test.

   What is extracted and what is written. The official text of every article
   is NOT copied into this file: the JCA pages link to the site's own article
   pages, which print it verbatim from The Constitution of India [As on 1st
   May, 2024] with the plain-English note and the cases, so the two can never
   drift apart. Everything in this file is written for the JCA section: the
   notes, the tables, the confused pairs and the questions, each checked
   against that official text.

   Two kinds of statement. Constitutional text is firm. Current facts (the
   Chief Justice, the strength of the Court, the number of High Courts) carry
   the date they are true as of, so a stale one reads as stale and not wrong.

   Fields:  topics[]  id, t title, w one line, arts [article numbers, in order],
                      notes [one-liners, ==highlight== marks the answer],
                      blocks [{h, note, rows: [[key, value]]}],
                      pairs  [{k, rows: [[label, text]], note}],
                      cases  [ids in ../data-cases.js]
            qs[]      t topic id, q question, o four options, a answer (0 to 3),
                      s solution, r the provision it tests.
   Answer positions are spread evenly across A, B, C and D, so the position
   carries no information.                                                    */

window.JCA = window.JCA || {};

window.JCA.judiciary = {
  id: "c",
  name: "Judiciary in the Constitution",
  short: "Constitution",
  marks: 15,
  lede: "Articles 124 to 147 for the Supreme Court, 214 to 231 for the High Courts, 233 to 237 for the courts below them, the two writ articles, and the handful of provisions elsewhere that an exam picks out.",

  topics: [
  {
    id: "sc-bench",
    t: "The Supreme Court: who sits on it",
    w: "Composition, appointment, qualifications, oath, removal, and the acting, ad hoc and retired judges.",
    arts: ["124", "124A", "125", "126", "127", "128"],
    notes: [
      "The Supreme Court exists because ==Article 124== says so: a ==Chief Justice of India== and, as enacted, ==not more than seven== other judges until Parliament prescribes more.",
      "Parliament raises the number by law. Since the ==2019 amendment== to the Supreme Court (Number of Judges) Act it is ==33 judges plus the CJI, 34 in all==.",
      "Every judge is appointed by the ==President by warrant under his hand and seal==, and the ==CJI is always consulted== for any appointment other than his own.",
      "A Supreme Court judge holds office until ==65==; a High Court judge until ==62==.",
      "Three routes in: ==5 years a High Court judge==, ==10 years a High Court advocate==, or a ==distinguished jurist== in the President's opinion. There is ==no minimum age==.",
      "Removal: an address by ==each House==, passed by a ==majority of its total membership and two-thirds of those present and voting==, in the ==same session==, for ==proved misbehaviour or incapacity==.",
      "The procedure sits in the ==Judges (Inquiry) Act, 1968==, made under Article 124(5).",
      "Oath before the ==President== in the form in the ==Third Schedule==; resignation by writing ==addressed to the President==.",
      "A retired Supreme Court judge may ==not plead or act in any court or before any authority in India== (Article 124(7)).",
      "Acting CJI: ==Article 126==. Ad hoc judges: ==Article 127==. Retired judges sitting again: ==Article 128==.",
      "The ==99th Amendment (2014)== put a National Judicial Appointments Commission into Articles 124A to 124C. The Court struck it down on ==16 October 2015==, 4 to 1, and the ==collegium== continues."
    ],
    blocks: [
      { h: "Article 124, clause by clause",
        note: "The printed text of clause (2) still carries the NJAC words. Since the 2015 judgment the earlier wording operates: appointment after consultation with such judges of the Supreme Court and the High Courts as the President thinks necessary, the CJI always consulted.",
        rows: [
          ["124(1)", "There shall be a Supreme Court: the CJI and, until Parliament prescribes more, not more than seven other judges"],
          ["124(2)", "Appointed by the President by warrant under his hand and seal; holds office until 65; may resign by writing to the President; removable only under clause (4)"],
          ["124(2A)", "The age of a judge is decided by such authority and in such manner as Parliament provides by law (15th Amendment, 1963)"],
          ["124(3)", "A citizen of India who has been 5 years a High Court judge, or 10 years a High Court advocate, or is a distinguished jurist in the President's opinion"],
          ["124(4)", "Removal by order of the President after an address by each House, with the special majority, in the same session, for proved misbehaviour or incapacity"],
          ["124(5)", "Parliament may regulate the procedure for the address and for investigating and proving misbehaviour or incapacity"],
          ["124(6)", "Oath or affirmation before the President or a person he appoints, in the Third Schedule form"],
          ["124(7)", "After retirement, no pleading or acting in any court or before any authority in India"]
        ] },
      { h: "Acting, ad hoc, retired, and the pay",
        rows: [
          ["Article 126 · acting CJI", "When the office of CJI is vacant, or the CJI is absent or unable to act, the President appoints one of the other judges to perform the duties"],
          ["Article 127 · ad hoc judges", "When there is no quorum of permanent judges, the CJI, with the previous consent of the President and after consulting the Chief Justice of the High Court concerned, asks a High Court judge qualified for the Supreme Court to sit"],
          ["Article 128 · retired judges", "The CJI, with the previous consent of the President, may ask a retired Supreme Court judge, or a retired High Court judge qualified for the Supreme Court, to sit and act; the person must agree"],
          ["Article 125 · pay", "Salaries are fixed by Parliament by law (until then, the Second Schedule); privileges, allowances, leave and pension cannot be varied to a judge's disadvantage after appointment"],
          ["Where the money comes from", "Salaries, allowances and pensions of Supreme Court judges are charged on the Consolidated Fund of India (Article 112(3)(d)), so Parliament does not vote on them"]
        ] }
    ],
    pairs: [
      { k: "Supreme Court judge against High Court judge",
        rows: [
          ["Retires at", "Supreme Court ==65== (124(2)); High Court ==62== (217(1))"],
          ["Qualifies by", "Supreme Court: 5 years a High Court judge, 10 years a High Court advocate, or a distinguished jurist. High Court: 10 years in judicial office, or 10 years a High Court advocate. ==No jurist route for a High Court=="],
          ["Oath before", "Supreme Court: the ==President==. High Court: the ==Governor== (Article 219)"],
          ["Age dispute", "Supreme Court: the authority Parliament provides by law (124(2A)). High Court: the ==President after consulting the CJI==, and that is final (217(3))"],
          ["After retiring", "Supreme Court: ==no practice anywhere in India== (124(7)). High Court: may practise in the ==Supreme Court and other High Courts== (Article 220)"],
          ["Removed by", "The ==same procedure==: Article 124(4) applies to High Court judges through Article 218"]
        ],
        note: "Pay is the one place they share a source but not a fund. Parliament fixes both, but a High Court judge's salary is charged on the Consolidated Fund of the State and his pension on the Consolidated Fund of India." },
      { k: "The four Judges cases",
        rows: [
          ["First, 1981", "S. P. Gupta: “consultation” is ==not concurrence==, so the executive has the last word"],
          ["Second, 1993", "SC Advocates-on-Record Association: consultation means ==concurrence==, and the ==collegium== is born"],
          ["Third, 1998", "In re Special Reference 1 of 1998: the CJI consults the ==four senior-most judges== for the Supreme Court, ==two== for High Court appointments"],
          ["Fourth, 2015", "The NJAC case: the ==99th Amendment struck down==, 4 to 1, on 16 October 2015"]
        ],
        note: "The Third Judges case reached the Court as a presidential reference under Article 143, which is why it is “In re Special Reference” and not one party against another." }
    ],
    cases: ["first-judges", "second-judges", "third-judges", "njac"]
  },

  {
    id: "sc-powers",
    t: "The Supreme Court: what it can hear",
    w: "Court of record, original, appellate, special leave, review, transfer, advisory, rules of court and its own staff.",
    arts: ["129", "130", "131", "132", "133", "134", "134A", "135", "136", "137", "138", "139", "139A", "140", "141", "142", "143", "144", "145", "146", "147"],
    notes: [
      "==Article 129==: a court of record, with the power to ==punish for contempt of itself==. Each High Court gets the same under ==Article 215==.",
      "Its seat is ==Delhi==, or anywhere else the ==CJI, with the approval of the President==, appoints (Article 130).",
      "Original jurisdiction, ==Article 131==: disputes between the ==Union and States== or ==between States== that turn on a legal right. A private party ==cannot== bring a 131 suit.",
      "Disputes from a ==pre-Constitution treaty, covenant or sanad== are outside Article 131; the President may refer one under ==Article 143(2)==.",
      "Appeals from a High Court: constitutional (==132==), civil (==133==) and criminal (==134==), each on a ==certificate== granted under ==Article 134A== (44th Amendment, 1978).",
      "A criminal appeal lies ==as of right== where a High Court ==reverses an acquittal and sentences to death==, or withdraws a case, tries it and sentences to death (134(1)).",
      "==Article 136==: special leave to appeal from ==any court or tribunal== in India, at the Court's ==discretion==, except those under the ==Armed Forces== laws (136(2)).",
      "==Article 137==: the Court may ==review its own judgments==, subject to Parliament's law and the rules under Article 145.",
      "==Article 139A== (42nd Amendment): the Court may ==withdraw to itself== cases on the same question pending in different courts, and ==transfer== a case from one High Court to another.",
      "==Article 141==: the law it declares ==binds all courts in India==. ==Article 142==: it may make any order needed for ==complete justice==.",
      "==Article 143(1)==: the Court ==may== give its opinion. ==143(2)==: on a pre-Constitution treaty dispute it ==shall==.",
      "==Article 145(3)==: at least ==five judges== to decide a substantial question of interpretation of the Constitution, or to hear an Article 143 reference.",
      "==Article 146==: the staff are appointed by the ==CJI==, and their service conditions are set by rules the CJI makes, with the ==President's approval== for salaries, allowances, leave and pensions. That is where the ==1961 Rules== come from."
    ],
    blocks: [
      { h: "Every way into the Supreme Court",
        rows: [
          ["Original · 131", "Union against States, or States against each other, over a legal right"],
          ["Writ · 32", "Enforcing the fundamental rights; the right to move the Court is itself a fundamental right"],
          ["Constitutional appeal · 132", "The High Court certifies a substantial question of law as to the interpretation of the Constitution"],
          ["Civil appeal · 133", "The High Court certifies a substantial question of law of general importance that needs deciding by the Supreme Court"],
          ["Criminal appeal · 134", "As of right where a High Court reversed an acquittal, or tried a withdrawn case, and sentenced to death; otherwise on certificate"],
          ["Special leave · 136", "From any court or tribunal except a military one, at the Court's discretion"],
          ["Review · 137", "Of its own judgment or order"],
          ["Transfer · 139A", "Pull in cases on a common question, or move a case between High Courts"],
          ["Advisory · 143", "The President refers a question; the Court reports its opinion"],
          ["Curative", "Not in the text at all: created by the Court in ==Rupa Ashok Hurra (2002)== for use after a review fails"]
        ] },
      { h: "Article 145: the rule-making article",
        rows: [
          ["Who makes the rules", "The Supreme Court, with the approval of the President, to regulate its practice and procedure. The current set is the ==Supreme Court Rules, 2013=="],
          ["What they may cover", "Who may practise before it, appeals, proceedings under Part III, Article 139A, review, costs and fees, bail, stay, frivolous appeals, and the Article 317 inquiry"],
          ["Clause (3)", "At least ==five judges== for a substantial question of interpretation of the Constitution and for an Article 143 reference"],
          ["Clause (4)", "Judgments are delivered only in ==open court==, and an Article 143 report only in line with an opinion delivered in open court"],
          ["Clause (5)", "Decided by the ==majority== of the judges at the hearing; a judge who does not agree may deliver a ==dissent=="]
        ] }
    ],
    pairs: [
      { k: "Article 141 against Article 142",
        rows: [
          ["141", "What the Court ==declares== is law, binding on ==every court in India=="],
          ["142", "What the Court ==orders== to do ==complete justice== in a case before it, enforceable throughout India"]
        ],
        note: "Union Carbide (1991): Article 142 is very wide, but it cannot override an express statutory prohibition." },
      { k: "143(1) against 143(2)",
        rows: [
          ["143(1)", "Any question of law or fact of public importance; the Court ==may== report its opinion, and it has declined (the Ayodhya reference, 1994)"],
          ["143(2)", "A dispute of the kind cut out of Article 131 (a pre-Constitution treaty, covenant or sanad); the Court ==shall== report"]
        ],
        note: "Either way the opinion is advice to the President, not a decree between parties." },
      { k: "Review against curative",
        rows: [
          ["Review", "In the Constitution (==Article 137==); filed within ==30 days== under Order XLVII of the 2013 Rules; decided by circulation"],
          ["Curative", "Not in the Constitution; created in ==Rupa Ashok Hurra (2002)==; only after a review is ==dismissed==; needs a ==Senior Advocate's certificate== (Order XLVIII)"]
        ] },
      { k: "Article 146 against Article 229: who runs the staff",
        rows: [
          ["Appoints", "Supreme Court: the ==CJI==, or a judge or officer he directs. High Court: the ==Chief Justice of that High Court=="],
          ["Commission", "Supreme Court: the ==UPSC==, if the President so requires by rule, for someone not already attached to the Court. High Court: the ==State PSC==, if the Governor so requires"],
          ["Service rules", "Made by the Chief Justice; ==salaries, allowances, leave and pensions need the President's approval== (the Governor's, for a High Court)"],
          ["Expenses", "Charged on the ==Consolidated Fund of India== (of the State, for a High Court); fees the court takes go into that Fund"]
        ] }
    ],
    cases: ["pritam-singh", "union-carbide"]
  },

  {
    id: "high-courts",
    t: "The High Courts",
    w: "Articles 214 to 231: appointment, qualifications, transfer, additional and retired judges, writs and superintendence.",
    arts: ["214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "224", "224A", "225", "226", "227", "228", "229", "230", "231"],
    notes: [
      "==Article 214==: a High Court for each State. ==Article 231==: Parliament may set up ==one High Court for two or more States==.",
      "The Constitution fixes no number of judges: the ==President== decides how many each High Court needs (Article 216).",
      "Appointment by the ==President== after consulting the ==CJI==, the ==Governor==, and, for a puisne judge, the ==Chief Justice of that High Court== (217(1)).",
      "Qualifications: ==10 years in judicial office== or ==10 years as a High Court advocate==, and ==no distinguished-jurist route==.",
      "A High Court judge retires at ==62==; a dispute about his age is decided by the ==President after consulting the CJI==, and the decision is ==final== (217(3)).",
      "Transfer from one High Court to another: the ==President after consulting the CJI== (Article 222).",
      "Additional judges for up to ==two years== to clear arrears (224); retired judges may be asked back by the ==Chief Justice of the High Court with the President's previous consent== (224A).",
      "==Article 226==: writs for the fundamental rights ==and for any other purpose==, which makes a High Court's writ power ==wider== than Article 32.",
      "==Article 227==: superintendence over ==every court and tribunal== in its territory, except those under the ==Armed Forces== laws.",
      "==Article 228==: a High Court may ==withdraw a case== from a subordinate court if it turns on a substantial question of interpretation of the Constitution.",
      "Pay: a High Court judge's salary is charged on the ==Consolidated Fund of the State==, his pension on the ==Consolidated Fund of India==."
    ],
    blocks: [
      { h: "Article 226, clause by clause",
        rows: [
          ["226(1)", "Writs, orders and directions to any person or authority, including a government, for the fundamental rights and for any other purpose"],
          ["226(2)", "May issue wherever the ==cause of action arises==, wholly or in part, in its territory, even if the authority sits elsewhere (15th Amendment)"],
          ["226(3)", "An ex parte interim order: if an application to vacate it is not disposed of within ==two weeks==, the order stands vacated"],
          ["226(4)", "Does not cut down the Supreme Court's power under Article 32(2)"]
        ] },
      { h: "The High Courts in numbers",
        note: "True as on 27 October 2026.",
        rows: [
          ["How many", "==25== High Courts"],
          ["Oldest", "==Calcutta== (1862), chartered with Bombay and Madras under the Indian High Courts Act, 1861"],
          ["Newest", "==Andhra Pradesh==, at Amaravati (1 January 2019)"],
          ["Shared by four States", "==Gauhati==: Assam, Arunachal Pradesh, Mizoram and Nagaland"],
          ["Covering a Union territory too", "Bombay (Goa, Dadra and Nagar Haveli and Daman and Diu), Calcutta (Andaman and Nicobar), Madras (Puducherry), Kerala (Lakshadweep), Punjab and Haryana (Chandigarh)"],
          ["Two Union territories, one court", "The High Court of ==Jammu and Kashmir and Ladakh=="],
          ["A Union territory with its own", "==Delhi== (1966)"]
        ] }
    ],
    pairs: [
      { k: "Article 226 against Article 227",
        rows: [
          ["226", "Writ jurisdiction: commands to ==any person or authority==, for rights and any other purpose"],
          ["227", "==Superintendence== over the courts and tribunals in its territory; supervisory, not appellate; military tribunals excluded"]
        ],
        note: "L. Chandra Kumar (1997): both belong to the basic structure, so no tribunal can shut a High Court out." },
      { k: "Additional, acting and retired",
        rows: [
          ["224 · additional", "Appointed by the President for up to ==two years== when business grows or arrears pile up"],
          ["224 · acting", "Appointed by the President when a judge other than the Chief Justice is absent, unable to act, or acting as Chief Justice"],
          ["224A · retired", "The ==Chief Justice of the High Court==, with the ==President's previous consent==, asks a retired judge to sit"]
        ],
        note: "Like Articles 124, 127, 128, 217 and 222, the printed text of 224 and 224A still carries the struck-down NJAC wording; the pre-2014 wording is what operates." }
    ],
    cases: ["l-chandra-kumar"]
  },

  {
    id: "subordinate",
    t: "The subordinate courts",
    w: "Articles 233 to 237: district judges, the judicial service, and the High Court's control over both.",
    arts: ["233", "233A", "234", "235", "236", "237"],
    notes: [
      "District judges are appointed by the ==Governor in consultation with the High Court== (Article 233).",
      "A lawyer becomes eligible after ==seven years as an advocate or pleader==, and only on the ==High Court's recommendation== (233(2)).",
      "The rest of the judicial service is appointed by the ==Governor under rules made after consulting the State PSC and the High Court== (234).",
      "==Control== over the district courts and the courts below them is ==vested in the High Court== (235): posting, promotion and leave.",
      "“District judge” (236) includes a ==sessions judge==, a ==chief presidency magistrate==, a judge of a ==city civil court== and the chief judge of a ==small cause court==.",
      "==Article 237==: the Governor may, by public notification, apply this Chapter to ==magistrates==.",
      "Administration of justice and every court below the High Courts: ==Concurrent List entry 11A==, moved there from the State List by the ==42nd Amendment==.",
      "An ==All India Judicial Service== may be created under ==Article 312==, but it cannot include any post ==inferior to a district judge==."
    ],
    blocks: [
      { h: "Who counts as a district judge (Article 236)",
        rows: [
          ["Included", "Judge of a city civil court; additional, joint and assistant district judges; chief judge of a small cause court; chief presidency magistrate and additional chief presidency magistrate; sessions, additional sessions and assistant sessions judges"],
          ["Judicial service", "A service made up only of people meant to fill the post of district judge and the civil judicial posts below it"],
          ["Not in the list", "A judicial magistrate of the first class is not a district judge for this Chapter"]
        ] }
    ],
    pairs: [
      { k: "Article 233 against Article 234",
        rows: [
          ["233", "District judges: the Governor, ==in consultation with the High Court=="],
          ["234", "Everyone else in the judicial service: the Governor, under rules made after consulting the ==State PSC and the High Court=="]
        ] },
      { k: "Article 50 against Article 235",
        rows: [
          ["50", "A ==directive principle==: the State shall take steps to separate the judiciary from the executive"],
          ["235", "An ==operative rule==: the High Court controls the subordinate courts"]
        ] }
    ]
  },

  {
    id: "writs",
    t: "Writs: Articles 32 and 226",
    w: "The five writs, the two writ courts, and the cases that opened the door to public interest litigation.",
    arts: ["32", "226", "139", "359"],
    notes: [
      "==Article 32== is itself a ==fundamental right==; Ambedkar called it the ==very soul and heart== of the Constitution.",
      "The five writs: ==habeas corpus==, ==mandamus==, ==prohibition==, ==certiorari== and ==quo warranto==.",
      "==Habeas corpus== (“to have the body”) lies even against a ==private person== holding someone.",
      "==Mandamus== (“we command”) orders a public authority to do its duty; it does not lie against the ==President or a Governor== or a private person.",
      "==Prohibition== stops a lower court or tribunal ==before== it decides; ==certiorari== quashes what it has ==already decided==.",
      "==Quo warranto== (“by what authority”) tests a claim to a ==public office==, and anyone may ask for it.",
      "Parliament may let ==other courts== issue writs within local limits (32(3)), and may give the Supreme Court writ power for ==other purposes== (Article 139).",
      "During an Emergency the President may suspend the enforcement of rights (Article 359), but never ==Articles 20 and 21== (44th Amendment, 1978)."
    ],
    blocks: [
      { h: "The five writs",
        rows: [
          ["Habeas corpus", "“To have the body”: produce the detained person and justify the detention; against public authorities and private persons alike"],
          ["Mandamus", "“We command”: perform a public duty; not against the President, a Governor, a private person, or a chief justice acting judicially"],
          ["Prohibition", "“To forbid”: stops a lower court or tribunal from exceeding its jurisdiction; judicial and quasi-judicial bodies only"],
          ["Certiorari", "“To be certified”: quashes an order a lower court or tribunal has already made; now also against administrative action that affects rights"],
          ["Quo warranto", "“By what authority”: against someone holding a substantive public office created by law without the right to it"]
        ] },
      { h: "Public interest litigation, from the cases",
        rows: [
          ["The first reported PIL", "==Hussainara Khatoon v. State of Bihar (1979)==: undertrials, speedy trial, free legal aid"],
          ["Standing relaxed", "==S. P. Gupta (1981)==: any member of the public acting in good faith"],
          ["A letter as a petition", "==Bandhua Mukti Morcha (1984)=="],
          ["Compensation under Article 32", "==Rudul Sah (1983)==: ₹35,000 for fourteen years held after acquittal"],
          ["Judicial review as basic structure", "==L. Chandra Kumar (1997)==: Articles 32 and 226"]
        ] }
    ],
    pairs: [
      { k: "Article 32 against Article 226",
        rows: [
          ["32", "A ==fundamental right==, only for the fundamental rights, in the Supreme Court; suspended only under Article 359"],
          ["226", "A constitutional power, for the fundamental rights ==and any other purpose==, in each High Court within its territory; discretionary"]
        ],
        note: "So Article 226 is wider in scope, and Article 32 is stronger in kind." },
      { k: "Prohibition against certiorari",
        rows: [
          ["Prohibition", "==Preventive==: issued while the proceeding is still pending"],
          ["Certiorari", "==Corrective==: issued after the order has been made"]
        ] }
    ],
    cases: ["hussainara", "bandhua-mukti", "rudul-sah"]
  },

  {
    id: "elsewhere",
    t: "The judiciary in the rest of the Constitution",
    w: "Legal aid, separation of powers, the bar on debating judges, tribunals, the judicial service, and the Schedules.",
    arts: ["39A", "50", "121", "211", "312", "323A", "323B", "361"],
    notes: [
      "==Article 39A== (42nd Amendment, 1976): equal justice and ==free legal aid==, delivered through the Legal Services Authorities Act, 1987.",
      "==Article 50==: separate the ==judiciary from the executive==; a directive principle.",
      "==Article 121==: Parliament may not discuss a judge's conduct in the discharge of his duties ==except on a motion for removal==. ==Article 211==: a State Legislature may not discuss it ==at all==.",
      "==Article 312==: an All India Judicial Service needs a Rajya Sabha resolution backed by ==two-thirds of those present and voting==.",
      "==Articles 323A and 323B== (Part XIVA, ==42nd Amendment==): administrative tribunals, and tribunals for other matters.",
      "==Article 361==: the President and the Governors are ==not answerable to any court== for the exercise of their powers.",
      "Union List ==entry 77==: the Supreme Court's constitution, organisation, jurisdiction, powers and contempt. ==Entry 78==: the High Courts' constitution and organisation, ==except their officers and servants==.",
      "State List ==entry 3==: the ==officers and servants of the High Court==. Concurrent List ==entry 11A==: administration of justice and every court except the Supreme Court and the High Courts.",
      "Oaths: the ==Third Schedule==, Form ==IV== for Supreme Court judges (shared with the CAG) and Form ==VIII== for High Court judges. Pay: the ==Second Schedule, Part D=="
    ],
    blocks: [
      { h: "The courts in the Seventh Schedule",
        note: "Entry texts verbatim from the official edition.",
        rows: [
          ["Union List 77", "Constitution, organisation, jurisdiction and powers of the Supreme Court (including contempt of such Court), and the fees taken therein; persons entitled to practise before the Supreme Court"],
          ["Union List 78", "Constitution and organisation (including vacations) of the High Courts except provisions as to officers and servants of High Courts; persons entitled to practise before the High Courts"],
          ["Union List 79", "Extension of the jurisdiction of a High Court to, and exclusion of the jurisdiction of a High Court from, any Union territory"],
          ["Union List 95", "Jurisdiction and powers of all courts, except the Supreme Court, with respect to any of the matters in this List; admiralty jurisdiction"],
          ["State List 3", "Officers and servants of the High Court; procedure in rent and revenue courts; fees taken in all courts except the Supreme Court"],
          ["Concurrent List 11A", "Administration of Justice; constitution and organisation of all courts, except the Supreme Court and the High Courts"]
        ] }
    ],
    pairs: [
      { k: "Article 121 against Article 211",
        rows: [
          ["121 · Parliament", "No discussion of a judge's conduct ==except on a motion for his removal=="],
          ["211 · State Legislature", "No discussion of the conduct of a Supreme Court or High Court judge ==at all=="]
        ],
        note: "The difference follows from who removes judges: only Parliament can, so only Parliament gets the exception." },
      { k: "Article 323A against Article 323B",
        rows: [
          ["323A", "==Administrative tribunals== for public service disputes; ==Parliament only=="],
          ["323B", "Tribunals for ==other matters== (tax, land reform, rent, elections and more); ==Parliament or a State Legislature=="]
        ] }
    ]
  },

  {
    id: "cases-numbers",
    t: "Cases, firsts and numbers",
    w: "The judgments that shaped the Court's own powers, and the figures an exam asks for.",
    arts: [],
    notes: [
      "The Supreme Court was inaugurated on ==28 January 1950==, two days after the Constitution came into force, and succeeded the ==Federal Court of India== (1937 to 1950).",
      "First Chief Justice: ==H. J. Kania==. First woman judge: ==M. Fathima Beevi== (1989).",
      "The present Chief Justice is ==Surya Kant==, the ==53rd==, in office since ==24 November 2025== until 9 February 2027.",
      "No judge of the Supreme Court or a High Court has ever been removed. The motion against ==V. Ramaswami== failed in the Lok Sabha in ==1993==.",
      "The curative petition comes from ==Rupa Ashok Hurra (2002)==; open-court hearing of death-sentence reviews from ==Mohd. Arif (2014)=="
    ],
    blocks: [
      { h: "Judgments on the Court's own procedure",
        rows: [
          ["Rupa Ashok Hurra v. Ashok Hurra (2002)", "Created the ==curative petition==, a last remedy after a review is dismissed, to cure a gross miscarriage of justice"],
          ["P. N. Eswara Iyer v. Registrar (1980)", "Upheld deciding ==review petitions by circulation==, without an oral hearing"],
          ["Mohd. Arif v. Registrar (2014)", "Review petitions in ==death-sentence== cases are heard ==orally in open court==, by at least three judges"],
          ["Prem Chand Garg (1962)", "Struck down a rule demanding security for costs in an Article 32 petition: rules under Article 145 cannot ==abridge a fundamental right=="],
          ["Supreme Court Bar Association (1998)", "Article 142 cannot be used to ==suspend an advocate's licence==; that power belongs to the Bar Council"],
          ["In re Delhi Laws Act (1951)", "The ==first reference== under Article 143"],
          ["Ismail Faruqui (1994)", "The Court ==declined to answer== the Ayodhya reference under Article 143"],
          ["Indira Jaising v. Supreme Court (2017)", "Laid down guidelines for ==designating Senior Advocates=="]
        ] },
      { h: "Numbers and firsts",
        note: "True as on 27 October 2026.",
        rows: [
          ["Inaugurated", "==28 January 1950==, first sitting in the Chamber of Princes in Parliament House; the present building from 1958"],
          ["Before it", "The ==Federal Court of India==, 1937 to 1950"],
          ["First CJI", "==H. J. Kania=="],
          ["Present CJI", "==Surya Kant==, the ==53rd==, since 24 November 2025; retires 9 February 2027. His predecessor was B. R. Gavai, the 52nd"],
          ["Strength", "==34== including the CJI, since 2019; ==8== in 1950"],
          ["First woman judge", "==M. Fathima Beevi==, 1989"],
          ["Removal", "Nobody has been removed. ==V. Ramaswami== (1993): the motion failed in the Lok Sabha. ==Soumitra Sen== (Calcutta High Court, 2011): passed in the Rajya Sabha; he resigned before the Lok Sabha voted"]
        ] }
    ],
    cases: ["kesavananda", "pritam-singh", "union-carbide", "l-chandra-kumar"]
  }
  ],

  qs: [
  /* ---------------------------------------------------- the bench */
  { t: "sc-bench", q: "Which article establishes the Supreme Court of India?",
    o: ["Article 129", "Article 124", "Article 131", "Article 214"], a: 1,
    s: "Article 124(1): “There shall be a Supreme Court of India...”. Article 129 makes it a court of record, 131 is its original jurisdiction and 214 creates the High Courts.", r: "Art. 124(1)" },
  { t: "sc-bench", q: "As enacted, Article 124(1) provided for the Chief Justice and not more than how many other judges?",
    o: ["Five", "Ten", "Seven", "Thirteen"], a: 2,
    s: "Seven, “until Parliament by law prescribes a larger number”. Parliament has since raised it several times by the Supreme Court (Number of Judges) Act.", r: "Art. 124(1)" },
  { t: "sc-bench", q: "What is the sanctioned strength of the Supreme Court today, including the Chief Justice?",
    o: ["31", "33", "34", "26"], a: 2,
    s: "The Supreme Court (Number of Judges) Amendment Act, 2019 raised the other judges from 30 to 33, so 34 with the CJI.", r: "Art. 124(1); 2019 Act" },
  { t: "sc-bench", q: "Up to what age does a judge of the Supreme Court hold office?",
    o: ["60", "62", "70", "65"], a: 3,
    s: "65, under Article 124(2). A High Court judge retires at 62 under Article 217(1).", r: "Art. 124(2)" },
  { t: "sc-bench", q: "Under Article 124(2A), the age of a Supreme Court judge is determined by:",
    o: ["the President, after consulting the Chief Justice", "the Chief Justice of India", "a bench of five judges", "such authority and in such manner as Parliament may by law provide"], a: 3,
    s: "Clause (2A), added by the 15th Amendment (1963), leaves it to Parliament. For a High Court judge, Article 217(3) gives the question to the President after consulting the CJI.", r: "Art. 124(2A)" },
  { t: "sc-bench", q: "Which of these is NOT a route to appointment as a Supreme Court judge under Article 124(3)?",
    o: ["Five years as a High Court judge", "Ten years as a High Court advocate", "A distinguished jurist in the opinion of the President", "Ten years in judicial office as a district judge"], a: 3,
    s: "Ten years of judicial office is a High Court qualification (Article 217(2)(a)). The Supreme Court routes are 5 years a High Court judge, 10 years a High Court advocate, or a distinguished jurist.", r: "Art. 124(3)" },
  { t: "sc-bench", q: "The ground for removing a Supreme Court judge under Article 124(4) is:",
    o: ["violation of the Constitution", "proved misbehaviour or incapacity", "loss of confidence of the Lok Sabha", "conviction for any offence"], a: 1,
    s: "Proved misbehaviour or incapacity. “Violation of the Constitution” is the ground for impeaching the President, under Article 61.", r: "Art. 124(4)" },
  { t: "sc-bench", q: "The address for removing a judge must be supported in each House by:",
    o: ["a majority of the members present and voting", "two-thirds of the total membership", "a majority of the total membership and two-thirds of those present and voting", "three-fourths of those present and voting"], a: 2,
    s: "Both conditions together, in each House, in the same session, before the President makes the order.", r: "Art. 124(4)" },
  { t: "sc-bench", q: "The procedure for investigating and proving the misbehaviour of a judge is laid down in the:",
    o: ["Judges (Inquiry) Act, 1968", "Contempt of Courts Act, 1971", "Judges (Protection) Act, 1985", "Supreme Court (Number of Judges) Act, 1956"], a: 0,
    s: "Article 124(5) lets Parliament regulate the procedure, and it did so in the Judges (Inquiry) Act, 1968.", r: "Art. 124(5)" },
  { t: "sc-bench", q: "A Supreme Court judge who wishes to resign writes to:",
    o: ["the Chief Justice of India", "the Vice-President", "the Prime Minister", "the President"], a: 3,
    s: "Article 124(2)(a): “by writing under his hand addressed to the President”.", r: "Art. 124(2)(a)" },
  { t: "sc-bench", q: "Before whom does a Supreme Court judge take the oath of office?",
    o: ["The Chief Justice of India", "The President, or a person appointed by him", "The Speaker of the Lok Sabha", "The Attorney-General"], a: 1,
    s: "Article 124(6), in the form set out in the Third Schedule. A High Court judge takes the oath before the Governor (Article 219).", r: "Art. 124(6)" },
  { t: "sc-bench", q: "After retirement, a Supreme Court judge may:",
    o: ["practise only in the Supreme Court", "practise in any High Court except his own", "not plead or act in any court or before any authority in India", "practise after a cooling-off period of two years"], a: 2,
    s: "Article 124(7) is a complete bar. A retired permanent High Court judge may practise in the Supreme Court and the other High Courts (Article 220).", r: "Art. 124(7)" },
  { t: "sc-bench", q: "Which article provides for an acting Chief Justice of India?",
    o: ["Article 126", "Article 127", "Article 128", "Article 223"], a: 0,
    s: "Article 126: the President appoints one of the other judges. Article 223 is the acting Chief Justice of a High Court.", r: "Art. 126" },
  { t: "sc-bench", q: "Ad hoc judges are appointed to the Supreme Court under Article 127 when:",
    o: ["a judge goes on leave", "arrears cross a fixed number", "the Chief Justice is abroad", "there is no quorum of permanent judges to hold or continue a session"], a: 3,
    s: "Quorum is the trigger. The CJI acts with the previous consent of the President and after consulting the Chief Justice of the High Court concerned, and asks a High Court judge qualified for the Supreme Court.", r: "Art. 127" },
  { t: "sc-bench", q: "Under Article 128, who may be requested to sit and act as a Supreme Court judge?",
    o: ["A retired district judge", "A sitting Attorney-General", "A member of the Bar Council of India", "A retired Supreme Court judge, or a retired High Court judge qualified for the Supreme Court"], a: 3,
    s: "The CJI asks, with the previous consent of the President, and the person must agree to sit.", r: "Art. 128" },
  { t: "sc-bench", q: "The salaries of Supreme Court judges are:",
    o: ["charged on the Consolidated Fund of India", "voted every year by the Lok Sabha", "paid from the Contingency Fund", "fixed by the Chief Justice"], a: 0,
    s: "Charged expenditure under Article 112(3)(d). The amount is fixed by Parliament by law (Article 125), and allowances, leave and pension cannot be varied to a judge's disadvantage after appointment.", r: "Art. 125; Art. 112(3)(d)" },
  { t: "sc-bench", q: "The 99th Amendment (2014) tried to replace the collegium with the:",
    o: ["National Judicial Council", "Judicial Standards and Accountability Commission", "National Judicial Appointments Commission", "All India Judicial Service Commission"], a: 2,
    s: "Articles 124A to 124C. Struck down on 16 October 2015, 4 to 1, in the Fourth Judges (NJAC) case.", r: "Arts. 124A to 124C" },
  { t: "sc-bench", q: "For Supreme Court appointments, the Chief Justice of India consults:",
    o: ["the two senior-most judges", "the four senior-most judges", "the Law Minister and two judges", "every judge of the Court"], a: 1,
    s: "The Third Judges case (1998): four senior-most judges for the Supreme Court, two for High Court appointments.", r: "Third Judges case" },
  { t: "sc-bench", q: "Which case held that “consultation” with the Chief Justice did not mean “concurrence”?",
    o: ["S. P. Gupta v. Union of India (1981)", "SC Advocates-on-Record Association (1993)", "In re Special Reference 1 of 1998", "SC Advocates-on-Record Association (2015)"], a: 0,
    s: "The First Judges case. The Second (1993) reversed it and created the collegium.", r: "First Judges case" },

  /* ---------------------------------------------------- the powers */
  { t: "sc-powers", q: "The Supreme Court is a court of record under:",
    o: ["Article 124", "Article 141", "Article 129", "Article 215"], a: 2,
    s: "Article 129, with the power to punish for contempt of itself. Article 215 does the same for each High Court.", r: "Art. 129" },
  { t: "sc-powers", q: "The seat of the Supreme Court may be moved from Delhi by:",
    o: ["Parliament by law", "a resolution of both Houses", "the President on the advice of the Prime Minister", "the Chief Justice, with the approval of the President"], a: 3,
    s: "Article 130: at Delhi, or such other place or places as the Chief Justice of India may, with the approval of the President, appoint.", r: "Art. 130" },
  { t: "sc-powers", q: "A dispute between two States over a legal right reaches the Supreme Court under its:",
    o: ["writ jurisdiction, Article 32", "advisory jurisdiction, Article 143", "original jurisdiction, Article 131", "special leave jurisdiction, Article 136"], a: 2,
    s: "Article 131: disputes between the Union and States, or between States, on which a legal right depends. It is exclusive: no other court may hear it.", r: "Art. 131" },
  { t: "sc-powers", q: "Which of these can NOT be a party to a suit under Article 131?",
    o: ["The Government of India", "A State", "Two or more States", "A private company"], a: 3,
    s: "Article 131 is for governments only: the Union against States, or States against each other.", r: "Art. 131" },
  { t: "sc-powers", q: "A dispute arising out of a pre-Constitution treaty or sanad, kept out of Article 131, may reach the Supreme Court through:",
    o: ["a reference by the President under Article 143(2)", "an appeal under Article 132", "a writ under Article 32", "a transfer under Article 139A"], a: 0,
    s: "The proviso to Article 131 excludes such disputes; Article 143(2) lets the President refer them, and the Court “shall” report its opinion.", r: "Art. 131 proviso; Art. 143(2)" },
  { t: "sc-powers", q: "An appeal lies under Article 132 when the High Court certifies that the case involves:",
    o: ["a question of fact of public importance", "a substantial question of law as to the interpretation of the Constitution", "a sentence of death", "a sum above twenty thousand rupees"], a: 1,
    s: "Article 132, with the certificate under Article 134A. The rupee figure was the old test for civil appeals under Article 133, removed by the 30th Amendment (1972).", r: "Art. 132" },
  { t: "sc-powers", q: "An appeal lies to the Supreme Court as of right in a criminal case where the High Court:",
    o: ["confirmed a death sentence passed by a sessions court", "reduced a sentence of life imprisonment", "reversed an order of acquittal on appeal and sentenced the accused to death", "granted bail in a murder case"], a: 2,
    s: "Article 134(1)(a). The other automatic case is 134(1)(b): the High Court withdrew a case, tried it and sentenced to death. Confirming a death sentence does not by itself give an appeal as of right.", r: "Art. 134(1)" },
  { t: "sc-powers", q: "Article 134A, the certificate for appeal to the Supreme Court, was inserted by the:",
    o: ["42nd Amendment", "44th Amendment", "30th Amendment", "15th Amendment"], a: 1,
    s: "The 44th Amendment (1978). The High Court may grant it on its own motion or on an oral application made immediately after the judgment.", r: "Art. 134A" },
  { t: "sc-powers", q: "Special leave to appeal under Article 136 can NOT be granted against a judgment of:",
    o: ["a High Court", "a tax tribunal", "a district court", "a court or tribunal constituted under a law relating to the Armed Forces"], a: 3,
    s: "Article 136(2) excludes the military courts and tribunals. Every other court or tribunal in India is within reach, at the Court's discretion.", r: "Art. 136(2)" },
  { t: "sc-powers", q: "Which article empowers the Supreme Court to review its own judgments?",
    o: ["Article 137", "Article 136", "Article 141", "Article 145"], a: 0,
    s: "Article 137, subject to Parliament's law and the rules under Article 145. The procedure is Order XLVII of the Supreme Court Rules, 2013.", r: "Art. 137" },
  { t: "sc-powers", q: "Article 139A, which lets the Supreme Court transfer cases, was inserted by the:",
    o: ["44th Amendment", "24th Amendment", "42nd Amendment", "73rd Amendment"], a: 2,
    s: "The 42nd Amendment (1976). The Court can withdraw cases on a common question, on its own motion or on an application by the Attorney-General or a party, and can move a case from one High Court to another.", r: "Art. 139A" },
  { t: "sc-powers", q: "“The law declared by the Supreme Court shall be binding on all courts within the territory of India.” This is:",
    o: ["Article 142", "Article 144", "Article 129", "Article 141"], a: 3,
    s: "Article 141. Article 142 is complete justice, 144 makes every authority act in aid of the Court, and 129 is the court of record.", r: "Art. 141" },
  { t: "sc-powers", q: "The power to pass any decree or order “necessary for doing complete justice” is in:",
    o: ["Article 142", "Article 141", "Article 137", "Article 32"], a: 0,
    s: "Article 142(1). Union Carbide (1991): wide, but it cannot override an express statutory prohibition.", r: "Art. 142" },
  { t: "sc-powers", q: "Under Article 143(1), when the President refers a question of law or fact of public importance, the Supreme Court:",
    o: ["must give its opinion", "may report its opinion after such hearing as it thinks fit", "must decide it as a suit", "must refer it to Parliament"], a: 1,
    s: "“May”. Under 143(2), on a pre-Constitution treaty dispute, it “shall”. The Court declined to answer the Ayodhya reference in 1994.", r: "Art. 143(1)" },
  { t: "sc-powers", q: "The first reference to the Supreme Court under Article 143 was:",
    o: ["In re Kerala Education Bill", "In re Berubari Union", "In re Delhi Laws Act", "In re Special Courts Bill"], a: 2,
    s: "In re Delhi Laws Act (1951), on delegated legislation. Kerala Education Bill was 1958, Berubari 1960 and Special Courts Bill 1978.", r: "Art. 143" },
  { t: "sc-powers", q: "Under Article 145(3), the minimum number of judges to decide a substantial question of law as to the interpretation of the Constitution is:",
    o: ["three", "seven", "two", "five"], a: 3,
    s: "Five, and the same for hearing a reference under Article 143.", r: "Art. 145(3)" },
  { t: "sc-powers", q: "Under Article 145(4), the Supreme Court delivers its judgments:",
    o: ["in open court", "in chambers", "by circulation", "only after the President's approval"], a: 0,
    s: "“No judgment shall be delivered by the Supreme Court save in open Court.” Review petitions are decided by circulation, but a judgment itself is delivered in open court.", r: "Art. 145(4)" },
  { t: "sc-powers", q: "The Supreme Court's rules of practice and procedure under Article 145 are made by:",
    o: ["Parliament", "the Supreme Court, with the approval of the President", "the President, after consulting the Court", "the Bar Council of India"], a: 1,
    s: "Article 145(1). The current set is the Supreme Court Rules, 2013.", r: "Art. 145(1)" },
  { t: "sc-powers", q: "Appointments of officers and servants of the Supreme Court are made by:",
    o: ["the UPSC", "the President", "the Chief Justice, or a judge or officer he directs", "the Ministry of Law and Justice"], a: 2,
    s: "Article 146(1). The President may by rule require the UPSC to be consulted before someone not already attached to the Court is appointed.", r: "Art. 146(1)" },
  { t: "sc-powers", q: "Rules on the salaries, allowances, leave and pensions of the Supreme Court's staff need the approval of:",
    o: ["the President", "Parliament", "the UPSC", "the Finance Ministry"], a: 0,
    s: "The proviso to Article 146(2). The Chief Justice makes the rules; on these four subjects the President must approve. Hence the 1961 Rules.", r: "Art. 146(2)" },
  { t: "sc-powers", q: "The administrative expenses of the Supreme Court, including its staff's salaries, are:",
    o: ["voted by the Lok Sabha", "charged on the Consolidated Fund of India", "met from court fees", "charged on the Public Account"], a: 1,
    s: "Article 146(3); and any fees or moneys the Court takes form part of the Consolidated Fund of India.", r: "Art. 146(3)" },
  { t: "sc-powers", q: "Under Article 147, “interpretation of this Constitution” also includes the interpretation of:",
    o: ["the Government of India Act, 1935 and the Indian Independence Act, 1947", "the Indian Penal Code", "the Regulating Act, 1773", "the Constituent Assembly debates"], a: 0,
    s: "And any Order in Council made under them.", r: "Art. 147" },
  { t: "sc-powers", q: "Which article lets Parliament give the Supreme Court power to issue writs for purposes other than enforcing fundamental rights?",
    o: ["Article 32(3)", "Article 138", "Article 139", "Article 140"], a: 2,
    s: "Article 139. Article 32(3) runs the other way: Parliament may let other courts exercise the Supreme Court's writ power within local limits.", r: "Art. 139" },
  { t: "sc-powers", q: "Article 144 requires all authorities, civil and judicial, in India to:",
    o: ["act in aid of the Supreme Court", "report every case to the Chief Justice", "follow the Attorney-General's advice", "obtain the Court's approval for their rules"], a: 0,
    s: "Article 144.", r: "Art. 144" },
  { t: "sc-powers", q: "Under Article 138(2), the Supreme Court's jurisdiction on any matter may be enlarged by:",
    o: ["an ordinance of the President", "a special agreement between the Government of India and a State Government, if Parliament by law provides", "a resolution of the Rajya Sabha", "an order of the Chief Justice"], a: 1,
    s: "Article 138(2). Clause (1) lets Parliament enlarge it on Union List matters by law.", r: "Art. 138" },

  /* ---------------------------------------------------- the High Courts */
  { t: "high-courts", q: "Which article provides that there shall be a High Court for each State?",
    o: ["Article 213", "Article 231", "Article 216", "Article 214"], a: 3,
    s: "Article 214. Article 231 allows a common High Court; 216 is its constitution; 213 is the Governor's ordinance power.", r: "Art. 214" },
  { t: "high-courts", q: "A common High Court for two or more States may be established by:",
    o: ["the President by order", "the Chief Justice of India", "Parliament by law", "the Governors of the States jointly"], a: 2,
    s: "Article 231: Parliament by law, for two or more States, or two or more States and a Union territory.", r: "Art. 231" },
  { t: "high-courts", q: "The number of judges of a High Court is fixed by:",
    o: ["the Constitution", "the President, as he deems necessary", "the Governor", "the Chief Justice of the High Court"], a: 1,
    s: "Article 216. The Constitution fixes no number for any High Court.", r: "Art. 216" },
  { t: "high-courts", q: "In appointing a High Court judge other than the Chief Justice, the President consults:",
    o: ["the CJI, the Governor and the Chief Justice of that High Court", "the Governor and the Chief Minister", "the CJI only", "the State Public Service Commission"], a: 0,
    s: "Article 217(1).", r: "Art. 217(1)" },
  { t: "high-courts", q: "A High Court judge holds office until the age of:",
    o: ["60", "65", "58", "62"], a: 3,
    s: "62, under Article 217(1). The Supreme Court is 65.", r: "Art. 217(1)" },
  { t: "high-courts", q: "Which of these qualifies a person for appointment as a High Court judge?",
    o: ["Being a distinguished jurist in the opinion of the President", "Ten years as an advocate of a High Court", "Five years as a district judge", "Seven years as an advocate"], a: 1,
    s: "Article 217(2): 10 years in judicial office or 10 years as a High Court advocate. There is no jurist route for a High Court, and seven years is the district-judge figure (Article 233).", r: "Art. 217(2)" },
  { t: "high-courts", q: "A question about the age of a High Court judge is decided by:",
    o: ["the Chief Justice of the High Court", "Parliament", "the President, after consulting the CJI, and the decision is final", "the Supreme Court on a writ"], a: 2,
    s: "Article 217(3), added by the 15th Amendment.", r: "Art. 217(3)" },
  { t: "high-courts", q: "A High Court judge takes the oath before:",
    o: ["the Governor of the State, or a person appointed by him", "the President", "the Chief Justice of India", "the Chief Justice of the High Court"], a: 0,
    s: "Article 219, in the form in the Third Schedule.", r: "Art. 219" },
  { t: "high-courts", q: "After retirement, a permanent High Court judge may plead:",
    o: ["nowhere in India", "only in the High Court where he served", "in the Supreme Court and the other High Courts", "only in district courts"], a: 2,
    s: "Article 220: not before any court or authority in India except the Supreme Court and the other High Courts.", r: "Art. 220" },
  { t: "high-courts", q: "A High Court judge is transferred to another High Court by:",
    o: ["the Chief Justice of India", "the President, after consulting the CJI", "the Governor", "the Union Law Minister"], a: 1,
    s: "Article 222, with a compensatory allowance fixed by Parliament.", r: "Art. 222" },
  { t: "high-courts", q: "Additional judges of a High Court are appointed under Article 224 for a period not exceeding:",
    o: ["two years", "one year", "three years", "five years"], a: 0,
    s: "Two years, when business grows or arrears pile up.", r: "Art. 224(1)" },
  { t: "high-courts", q: "Under Article 224A, a retired judge may be asked to sit in a High Court by:",
    o: ["the President", "the Governor", "the Chief Justice of India", "the Chief Justice of the High Court, with the previous consent of the President"], a: 3,
    s: "Article 224A, added by the 15th Amendment (1963).", r: "Art. 224A" },
  { t: "high-courts", q: "Why is a High Court's writ jurisdiction said to be wider than the Supreme Court's?",
    o: ["It covers Union territories too", "Article 226 covers the fundamental rights “and any other purpose”", "Its writs cannot be appealed", "It can issue writs against the President"], a: 1,
    s: "Article 32 is only for the fundamental rights. Article 226 adds “for any other purpose”.", r: "Art. 226(1)" },
  { t: "high-courts", q: "Under Article 226(3), if an application to vacate an ex parte interim order is not disposed of within ___, the order stands vacated.",
    o: ["one week", "thirty days", "two weeks", "sixty days"], a: 2,
    s: "Two weeks, from receipt of the application or of its copy by the other side, whichever is later.", r: "Art. 226(3)" },
  { t: "high-courts", q: "A High Court's superintendence over all courts and tribunals in its territory comes from:",
    o: ["Article 226", "Article 228", "Article 235", "Article 227"], a: 3,
    s: "Article 227. It does not extend to courts or tribunals under the Armed Forces laws (227(4)).", r: "Art. 227" },
  { t: "high-courts", q: "Under Article 228, a High Court may withdraw a case from a subordinate court when it involves:",
    o: ["a substantial question of law as to the interpretation of the Constitution", "a sum above one crore rupees", "a death sentence", "a dispute with the Union"], a: 0,
    s: "Article 228. It may decide the whole case, or decide the constitutional question and send the case back.", r: "Art. 228" },
  { t: "high-courts", q: "The salaries of High Court judges are charged on:",
    o: ["the Consolidated Fund of India", "the Consolidated Fund of the State", "the Contingency Fund of the State", "the Public Account of India"], a: 1,
    s: "Article 202(3)(d). Their pensions, though, are charged on the Consolidated Fund of India (Article 112(3)(d)(iii)).", r: "Art. 202(3)(d)" },
  { t: "high-courts", q: "Which is the oldest High Court in India?",
    o: ["Bombay", "Madras", "Allahabad", "Calcutta"], a: 3,
    s: "Calcutta, 1862, followed the same year by Bombay and Madras, all under the Indian High Courts Act, 1861.", r: "High Courts" },
  { t: "high-courts", q: "Which High Court serves four States?",
    o: ["Gauhati", "Bombay", "Punjab and Haryana", "Calcutta"], a: 0,
    s: "Gauhati: Assam, Arunachal Pradesh, Mizoram and Nagaland.", r: "High Courts" },
  { t: "high-courts", q: "Appointments of officers and servants of a High Court are made by its Chief Justice under:",
    o: ["Article 146", "Article 229", "Article 234", "Article 235"], a: 1,
    s: "Article 229, the High Court twin of Article 146: the State PSC instead of the UPSC, the Governor instead of the President, the State's Consolidated Fund instead of India's.", r: "Art. 229" },

  /* ---------------------------------------------------- subordinate courts */
  { t: "subordinate", q: "District judges are appointed by:",
    o: ["the Chief Justice of the High Court", "the State Public Service Commission", "the Governor, in consultation with the High Court", "the President"], a: 2,
    s: "Article 233(1), which also covers their posting and promotion.", r: "Art. 233(1)" },
  { t: "subordinate", q: "To be appointed a district judge directly from the Bar, a person must have been an advocate or pleader for at least:",
    o: ["five years", "ten years", "three years", "seven years"], a: 3,
    s: "Article 233(2), and he must be recommended by the High Court.", r: "Art. 233(2)" },
  { t: "subordinate", q: "People other than district judges are appointed to a State's judicial service by the Governor under rules made after consulting:",
    o: ["the State PSC and the High Court", "the Chief Justice of India", "the Union PSC", "the Bar Council"], a: 0,
    s: "Article 234.", r: "Art. 234" },
  { t: "subordinate", q: "Control over district courts and the courts subordinate to them is vested in:",
    o: ["the Governor", "the High Court", "the State Law Department", "the Supreme Court"], a: 1,
    s: "Article 235: posting, promotion and leave of judicial officers below the rank of district judge.", r: "Art. 235" },
  { t: "subordinate", q: "Which of these is NOT included in “district judge” by Article 236?",
    o: ["Sessions judge", "Chief presidency magistrate", "Chief judge of a small cause court", "Judicial magistrate of the first class"], a: 3,
    s: "The list in Article 236(a) covers city civil court judges, additional, joint and assistant district judges, the chief judge of a small cause court, the chief and additional chief presidency magistrate, and sessions, additional and assistant sessions judges.", r: "Art. 236" },
  { t: "subordinate", q: "“Administration of justice; constitution and organisation of all courts, except the Supreme Court and the High Courts” is an entry in the:",
    o: ["Union List", "State List", "Concurrent List", "Third Schedule"], a: 2,
    s: "Concurrent List entry 11A, moved there from the State List by the 42nd Amendment (1976).", r: "Seventh Schedule" },
  { t: "subordinate", q: "An All India Judicial Service under Article 312 may NOT include any post:",
    o: ["inferior to that of a district judge", "of a High Court judge", "of a sessions judge", "in a Union territory"], a: 0,
    s: "Article 312(3).", r: "Art. 312(3)" },
  { t: "subordinate", q: "Separation of the judiciary from the executive is directed by:",
    o: ["Article 39A", "Article 50", "Article 235", "Article 13"], a: 1,
    s: "Article 50, a directive principle.", r: "Art. 50" },

  /* ---------------------------------------------------- writs */
  { t: "writs", q: "Who called Article 32 “the very soul of the Constitution and the very heart of it”?",
    o: ["Jawaharlal Nehru", "B. N. Rau", "B. R. Ambedkar", "Alladi Krishnaswami Ayyar"], a: 2,
    s: "Ambedkar, in the Constituent Assembly.", r: "Art. 32" },
  { t: "writs", q: "Which writ literally means “we command”?",
    o: ["Mandamus", "Certiorari", "Quo warranto", "Prohibition"], a: 0,
    s: "Mandamus. Certiorari is “to be certified”, quo warranto “by what authority”.", r: "Writs" },
  { t: "writs", q: "Which writ can be issued against a private person who is unlawfully detaining someone?",
    o: ["Mandamus", "Habeas corpus", "Prohibition", "Quo warranto"], a: 1,
    s: "Habeas corpus lies against public authorities and private persons alike.", r: "Writs" },
  { t: "writs", q: "Which writ stops a lower court from continuing a proceeding beyond its jurisdiction?",
    o: ["Certiorari", "Mandamus", "Quo warranto", "Prohibition"], a: 3,
    s: "Prohibition is preventive and comes while the matter is pending; certiorari is corrective and comes after the order.", r: "Writs" },
  { t: "writs", q: "Quo warranto is issued to:",
    o: ["quash an order already passed", "produce a detained person", "inquire into the legality of a claim to a public office", "compel a public duty"], a: 2,
    s: "“By what authority” do you hold this office? Anyone may ask; standing is not limited to the aggrieved.", r: "Writs" },
  { t: "writs", q: "Mandamus can NOT be issued against:",
    o: ["a public corporation", "the President or a Governor", "a government department", "a statutory body"], a: 1,
    s: "Article 361 protects the President and the Governors; mandamus does not lie against a private person either.", r: "Art. 361" },
  { t: "writs", q: "Under Article 32(3), Parliament may by law empower:",
    o: ["any other court to exercise the Supreme Court's writ powers within its local limits", "the High Courts to hear appeals from the Supreme Court", "tribunals to strike down laws", "the President to suspend Article 32"], a: 0,
    s: "Article 32(3). No such law has been made.", r: "Art. 32(3)" },
  { t: "writs", q: "During an Emergency, the enforcement of which articles can NOT be suspended?",
    o: ["Articles 14 and 19", "Articles 20 and 21", "Articles 32 and 226", "Articles 25 and 26"], a: 1,
    s: "The 44th Amendment (1978) changed Article 359 so that Articles 20 and 21 stay enforceable.", r: "Art. 359" },
  { t: "writs", q: "In which case did the Supreme Court award compensation under Article 32 for a violation of Article 21?",
    o: ["Rudul Sah v. State of Bihar", "Pritam Singh v. State", "Minerva Mills v. Union of India", "Kesavananda Bharati v. State of Kerala"], a: 0,
    s: "Rudul Sah (1983): ₹35,000 for being held fourteen years after his acquittal.", r: "Art. 32" },
  { t: "writs", q: "Which case held that the High Courts' power under Articles 226 and 227 is part of the basic structure, so tribunals cannot exclude it?",
    o: ["S. P. Gupta (1981)", "I. R. Coelho (2007)", "L. Chandra Kumar (1997)", "Union Carbide (1991)"], a: 2,
    s: "L. Chandra Kumar (1997), on Articles 323A and 323B.", r: "Arts. 226, 227" },
  { t: "writs", q: "India's first reported public interest litigation is usually traced to:",
    o: ["PUDR v. Union of India (1982)", "Bandhua Mukti Morcha (1984)", "M. C. Mehta (1986)", "Hussainara Khatoon v. State of Bihar (1979)"], a: 3,
    s: "Hussainara Khatoon (1979): undertrials in Bihar held longer than the maximum sentence for their alleged offences.", r: "Art. 32" },
  { t: "writs", q: "Which is true of Article 226 but NOT of Article 32?",
    o: ["It is itself a fundamental right", "It can be used for “any other purpose” besides the fundamental rights", "It is exercised only by the Supreme Court", "Its enforcement cannot be suspended in an Emergency"], a: 1,
    s: "Article 32 is the fundamental right; Article 226 is the wider power.", r: "Arts. 32, 226" },

  /* ---------------------------------------------------- elsewhere */
  { t: "elsewhere", q: "Equal justice and free legal aid were put into the Constitution as Article 39A by the:",
    o: ["44th Amendment", "86th Amendment", "42nd Amendment", "1st Amendment"], a: 2,
    s: "The 42nd Amendment (1976). The Legal Services Authorities Act, 1987 delivers it.", r: "Art. 39A" },
  { t: "elsewhere", q: "Under Article 121, Parliament may discuss the conduct of a judge in the discharge of his duties:",
    o: ["never", "only in a secret sitting", "only with the Chief Justice's permission", "only on a motion for presenting an address for his removal"], a: 3,
    s: "Article 121. Article 211 bars a State Legislature from discussing it at all.", r: "Art. 121" },
  { t: "elsewhere", q: "Under Article 211, a State Legislature may discuss the conduct of a High Court judge in the discharge of his duties:",
    o: ["not at all", "only on a removal motion", "with the Governor's permission", "only after he retires"], a: 0,
    s: "Only Parliament can remove a judge, so only Parliament has the exception (Article 121).", r: "Art. 211" },
  { t: "elsewhere", q: "Administrative tribunals for disputes about public service are provided for by:",
    o: ["Article 323B", "Article 323A", "Article 312", "Article 227"], a: 1,
    s: "Article 323A, by Parliament only. Article 323B covers tribunals for other matters, which Parliament or a State Legislature may create. Both came with the 42nd Amendment (Part XIVA).", r: "Art. 323A" },
  { t: "elsewhere", q: "“Constitution, organisation, jurisdiction and powers of the Supreme Court (including contempt of such Court)” is entry ___ of the Union List.",
    o: ["77", "78", "79", "95"], a: 0,
    s: "Entry 77. Entry 78 is the High Courts, 79 extends a High Court's jurisdiction to a Union territory, and 95 is the jurisdiction of courts other than the Supreme Court on Union List matters.", r: "Seventh Schedule" },
  { t: "elsewhere", q: "Under the Seventh Schedule, the officers and servants of a High Court fall in the:",
    o: ["Union List", "Concurrent List", "State List", "Third Schedule"], a: 2,
    s: "State List entry 3. Union List entry 78 gives Parliament the High Courts' constitution and organisation “except provisions as to officers and servants of High Courts”.", r: "Seventh Schedule" },
  { t: "elsewhere", q: "The forms of oath for judges of the Supreme Court and the High Courts are in the:",
    o: ["Second Schedule", "Fourth Schedule", "Sixth Schedule", "Third Schedule"], a: 3,
    s: "Third Schedule: Form IV for Supreme Court judges and the CAG, Form VIII for High Court judges.", r: "Third Schedule" },
  { t: "elsewhere", q: "The provisions on the judges of the Supreme Court and the High Courts are in which Part of the Second Schedule?",
    o: ["Part A", "Part B", "Part D", "Part E"], a: 2,
    s: "Part D. Part A is the President and Governors, Part C the presiding officers, Part E the CAG.", r: "Second Schedule" },
  { t: "elsewhere", q: "An All India Judicial Service can be created after the Rajya Sabha passes a resolution supported by:",
    o: ["two-thirds of the members present and voting", "a simple majority", "a majority of the total membership", "three-fourths of the States"], a: 0,
    s: "Article 312(1); Parliament then creates the service by law.", r: "Art. 312(1)" },

  /* ---------------------------------------------------- cases and numbers */
  { t: "cases-numbers", q: "Who was the first Chief Justice of India?",
    o: ["M. Patanjali Sastri", "H. J. Kania", "Mehr Chand Mahajan", "B. K. Mukherjea"], a: 1,
    s: "H. J. Kania, 1950 to 1951. Patanjali Sastri was the second.", r: "Numbers" },
  { t: "cases-numbers", q: "When was the Supreme Court of India inaugurated?",
    o: ["26 January 1950", "15 August 1947", "26 November 1949", "28 January 1950"], a: 3,
    s: "28 January 1950, two days after the Constitution came into force.", r: "Numbers" },
  { t: "cases-numbers", q: "Who is the 53rd Chief Justice of India, in office since 24 November 2025?",
    o: ["B. R. Gavai", "Sanjiv Khanna", "Surya Kant", "D. Y. Chandrachud"], a: 2,
    s: "Surya Kant, until 9 February 2027. B. R. Gavai was the 52nd. True as on 27 October 2026.", r: "Numbers" },
  { t: "cases-numbers", q: "Who was the first woman judge of the Supreme Court?",
    o: ["Leila Seth", "Sujata Manohar", "Ruma Pal", "M. Fathima Beevi"], a: 3,
    s: "M. Fathima Beevi, 1989. Leila Seth was the first woman Chief Justice of a High Court (Himachal Pradesh).", r: "Numbers" },
  { t: "cases-numbers", q: "The curative petition was created by the Supreme Court in:",
    o: ["Rupa Ashok Hurra v. Ashok Hurra (2002)", "P. N. Eswara Iyer (1980)", "Prem Chand Garg (1962)", "Mohd. Arif (2014)"], a: 0,
    s: "Rupa Ashok Hurra (2002); it is now Order XLVIII of the Supreme Court Rules, 2013.", r: "Cases" },
  { t: "cases-numbers", q: "In Mohd. Arif (2014), the Supreme Court held that review petitions in death-sentence cases must be:",
    o: ["decided by circulation", "heard orally in open court", "decided by a single judge", "referred to the President"], a: 1,
    s: "Heard orally, in open court, by at least three judges. Other reviews are still decided by circulation.", r: "Cases" },
  { t: "cases-numbers", q: "The removal motion against which judge failed in the Lok Sabha in 1993?",
    o: ["Soumitra Sen", "P. D. Dinakaran", "V. Ramaswami", "C. S. Karnan"], a: 2,
    s: "V. Ramaswami. Soumitra Sen (2011) resigned after the Rajya Sabha passed the motion against him.", r: "Art. 124(4)" },
  { t: "cases-numbers", q: "Which court did the Supreme Court succeed in 1950?",
    o: ["The Sadr Diwani Adalat", "The Calcutta High Court", "The Imperial Legislative Council", "The Federal Court of India"], a: 3,
    s: "The Federal Court of India, 1937 to 1950. Appeals to the Privy Council ended too.", r: "Numbers" },
  { t: "cases-numbers", q: "Which case said special leave under Article 136 should be granted sparingly, in exceptional cases?",
    o: ["Pritam Singh v. State (1950)", "Union Carbide (1991)", "Kesavananda Bharati (1973)", "ADM Jabalpur (1976)"], a: 0,
    s: "Pritam Singh (1950). In practice most of the Court's docket now arrives under Article 136.", r: "Art. 136" }
  ]
};
