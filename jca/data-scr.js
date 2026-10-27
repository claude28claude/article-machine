/* The Rule Book - data-scr.js
   The Supreme Court Rules, 2013: the 10-question section of the Supreme Court
   JCA 2026 objective test.

   How firm this is. The bare text of the Rules could not be fetched for this
   site, so nothing here is quoted from it. Every Order heading and every rule
   used in a question was checked against at least two independent copies or
   reports of the 2013 text (the Supreme Court's own pages, LiveLaw, SCC Online,
   and the published mirrors of the Rules), and any statement resting on one
   source only is flagged `chk: 1` and shown with a "check the bare text" mark.
   The 1966 Rules number many things differently, and older guides mix the two;
   everything here is the 2013 numbering.

   Fields:  orders[]  [roman numeral, heading, group]
            topics[]  as in data-judiciary.js, plus `special: "orders"` for the
                      page that prints the whole Order map
            qs[]      as in data-judiciary.js                                 */

window.JCA = window.JCA || {};

window.JCA.scr = {
  id: "r",
  name: "Supreme Court Rules, 2013",
  short: "SC Rules 2013",
  marks: 10,
  lede: "The Court's own rule book, made under Article 145: fifty-seven Orders on who may appear, how a petition is filed and listed, how appeals, writs, transfers, references, reviews and curative petitions run, and what the Registry does.",

  orders: [
    ["I", "Interpretation, etc.", "General"],
    ["II", "Offices of the Court; sittings and vacation, etc.", "General"],
    ["III", "Officers of the Court, etc.", "General"],
    ["IV", "Advocates", "General"],
    ["V", "Business in chambers", "General"],
    ["VI", "Constitution of Division Courts and powers of a single Judge", "General"],
    ["VII", "Proceedings by or against minors or persons of unsound mind", "General"],
    ["VIII", "Documents", "General"],
    ["IX", "Affidavits", "General"],
    ["X", "Inspection, search, etc.", "General"],
    ["XI", "Notices of motion", "General"],
    ["XII", "Judgments, decrees and orders", "General"],
    ["XIII", "Copying", "General"],
    ["XIV", "Payment into and out of Court of suitors' funds", "General"],
    ["XV", "Petitions generally", "General"],
    ["XVI", "Hearing of appeals", "Appeals"],
    ["XVII", "Miscellaneous", "Appeals"],
    ["XVIII", "Appeals and applications by indigent person", "Appeals"],
    ["XIX", "Appeals on certificate by High Court", "Appeals"],
    ["XX", "Criminal appeals", "Appeals"],
    ["XXI", "Special leave petitions in civil proceedings", "Appeals"],
    ["XXII", "Special leave petitions in criminal proceedings", "Appeals"],
    ["XXIII", "Appeals under Section 38 of the Advocates Act, 1961", "Appeals"],
    ["XXIV", "Appeals under Section 23 of the Consumer Protection Act, 1986", "Appeals"],
    ["XXV", "Parties to suits", "Original suits"],
    ["XXVI", "Plaints", "Original suits"],
    ["XXVII", "Issue and service of summons", "Original suits"],
    ["XXVIII", "Written statement, set-off and counter-claim", "Original suits"],
    ["XXIX", "Pleadings generally", "Original suits"],
    ["XXX", "Discovery and inspection", "Original suits"],
    ["XXXI", "Admissions", "Original suits"],
    ["XXXII", "Summoning and attendance of witnesses", "Original suits"],
    ["XXXIII", "Adjournments", "Original suits"],
    ["XXXIV", "Hearing of the suit", "Original suits"],
    ["XXXV", "Withdrawal and adjustment of suits", "Original suits"],
    ["XXXVI", "Payment into Court", "Original suits"],
    ["XXXVII", "Special case", "Original suits"],
    ["XXXVIII", "Applications for enforcement of fundamental rights (Article 32)", "Writs"],
    ["XXXIX", "Transfer of criminal proceedings under Section 406 CrPC, 1973 and Section 11 of the Terrorist Affected Areas (Special Courts) Act, 1984", "Transfers"],
    ["XL", "Applications for transfer under Article 139A(1)", "Transfers"],
    ["XLI", "Applications for transfer under Article 139A(2) and Section 25 of the CPC, 1908", "Transfers"],
    ["XLII", "Special reference under Article 143", "References"],
    ["XLIII", "Reference by the President under Article 317(1) or any statute, or by a Governor under any statute", "References"],
    ["XLIV", "Reference by the Central Government or statutory tribunals under statutes", "References"],
    ["XLV", "Reference under Section 257 of the Income Tax Act, 1961", "References"],
    ["XLVI", "Election petitions under Part III of the Presidential and Vice-Presidential Elections Act, 1952", "Election petitions"],
    ["XLVII", "Review", "Review and curative"],
    ["XLVIII", "Curative petition", "Review and curative"],
    ["XLIX", "Costs", "The tail"],
    ["L", "Taxation", "The tail"],
    ["LI", "Notice of proceedings to the Attorney-General for India or the Advocates-General of States", "The tail"],
    ["LII", "Forms to be used", "The tail"],
    ["LIII", "Service of documents", "The tail"],
    ["LIV", "Commissions", "The tail"],
    ["LV", "Power to dispense and inherent powers", "The tail"],
    ["LVI", "Destruction of records", "The tail"],
    ["LVII", "Repeal", "The tail"]
  ],

  topics: [
  {
    id: "scr-basics",
    t: "The rule book: where it comes from",
    w: "Article 145, the dates, the repeal of the 1966 Rules, and how the fifty-seven Orders are laid out.",
    notes: [
      "The Rules are made by the ==Supreme Court under Article 145==, with the ==approval of the President==.",
      "Published by notification dated ==27 May 2014== (G.S.R. 368(E)), and in force from ==19 August 2014==.",
      "They ==repealed the Supreme Court Rules, 1966==; the repeal is the last Order, ==Order LVII==.",
      "==57 Orders== in all, from Order I (interpretation) to Order LVII (repeal), with the Forms after them. ==Form No. 28== is the special leave petition (civil).",
      "Part I is ==General== (Orders I to XV); Part II, ==Appellate Jurisdiction==, opens at ==Order XVI==; Part III, ==Original Jurisdiction==, opens with original suits at ==Order XXV==.",
      "Two amendments worth knowing: ==2019==, single Judges for bail matters and transfers (Order VI); ==2024==, “summer vacation” renamed ==partial court working days== (Order II).",
      "The ==1966 numbering is different==. Review was Order XL then and is ==Order XLVII== now; Article 32 petitions are ==Order XXXVIII== now. Old guides mix the two."
    ],
    blocks: [
      { h: "The Rules at a glance",
        rows: [
          ["Made under", "Article 145 of the Constitution"],
          ["Made by", "The Supreme Court, with the approval of the President"],
          ["Notified", "27 May 2014, G.S.R. 368(E)"],
          ["In force", "19 August 2014"],
          ["Replaced", "The Supreme Court Rules, 1966 (repealed by Order LVII)"],
          ["Size", "57 Orders, then the Forms"],
          ["Parts", "I General (Orders I to XV) · II Appellate Jurisdiction (from XVI) · III Original Jurisdiction (from XXV)"],
          ["Staff rules are separate", "The officers and servants of the Court are governed by the 1961 Rules, made under Article 146, not by these"]
        ] }
    ],
    pairs: [
      { k: "Article 145 against Article 146",
        rows: [
          ["145", "Rules of ==practice and procedure==, made by the ==Court== with the President's approval: the 2013 Rules"],
          ["146", "Rules on the ==staff's conditions of service==, made by the ==Chief Justice==, with the President's approval for pay, allowances, leave and pensions: the 1961 Rules"]
        ],
        note: "One builds the courtroom's procedure, the other governs the people who work in the Registry. A JCA is governed by the second and works with the first." }
    ]
  },

  {
    id: "scr-orders",
    special: "orders",
    t: "Every Order, in one table",
    w: "All fifty-seven headings in order, grouped by what they deal with. The group names are this site's, not the Rules'.",
    notes: [
      "Fix the ==landmarks== first, then fill in between: ==IV== advocates, ==V== chambers, ==VI== benches, ==XV== petitions, ==XXI and XXII== special leave, ==XXXVIII== Article 32, ==XLII== Article 143, ==XLVI== election petitions, ==XLVII== review, ==XLVIII== curative, ==LV== inherent powers, ==LVII== repeal.",
      "Orders ==XXV to XXXVII== are a civil trial in miniature, for an original suit under Article 131.",
      "Three transfers in a row: ==XXXIX== (Section 406 CrPC), ==XL== (139A(1)), ==XLI== (139A(2) and Section 25 CPC).",
      "Four references in a row: ==XLII== (Article 143), ==XLIII== (Article 317(1)), ==XLIV== (statutory), ==XLV== (Income Tax Act)."
    ]
  },

  {
    id: "scr-advocates",
    t: "Advocates and Advocates-on-Record",
    w: "Order IV: who may appear, how a Senior Advocate is designated, and what it takes to become an AoR.",
    notes: [
      "Order IV is ==Advocates==: who may appear, Senior Advocates, and Advocates-on-Record.",
      "Only the ==Advocate-on-Record== for a party may appear, plead and address the Court, unless another advocate is ==instructed by the AoR== or ==permitted by the Court== (Rule 1(b)).",
      "Senior Advocates are designated by the ==Chief Justice and the Judges==, with the ==advocate's consent==, for ability, standing at the Bar, or special knowledge or experience in law (Rule 2(a)).",
      "A Senior Advocate may ==not appear without an Advocate-on-Record== in the Supreme Court, or without a junior in any other court (Rule 2(b)).",
      "A Senior Advocate may ==not accept instructions to draw pleadings or affidavits==, though he may settle them with a junior.",
      "To register as an AoR: ==four years== on a State Bar Council roll by the day training starts, ==one year's training== with an AoR, then the ==AoR examination== the Court conducts.",
      "Misconduct by an AoR includes ==mere name-lending==, absence without justifiable cause when the case is called, and not filing a signed appearance slip.",
      "An AoR who is designated Senior must ==tell his clients== and report to the Registry, or he cannot appear (Rule 18)."
    ],
    blocks: [
      { h: "Three kinds of advocate in the Supreme Court",
        rows: [
          ["Advocate-on-Record", "Registered after training and the AoR examination; the only one who may file and act for a party"],
          ["Senior Advocate", "Designated by the Chief Justice and the Judges; argues, but never without an AoR, and drafts no pleadings"],
          ["Any other advocate", "On a State Bar Council roll; may appear and argue only if instructed by an AoR or allowed by the Court"]
        ] }
    ],
    pairs: [
      { k: "Senior Advocate against Advocate-on-Record",
        rows: [
          ["Becomes one by", "Senior: ==designation== by the Chief Justice and the Judges. AoR: ==training and examination=="],
          ["Files a case", "Senior: ==no==. AoR: ==yes==, and is the only one who can"],
          ["Appears alone", "Senior: ==no==, needs an AoR. AoR: ==yes=="],
          ["Drafts pleadings", "Senior: may not accept instructions to. AoR: does"]
        ] }
    ]
  },

  {
    id: "scr-registry",
    t: "The Registry, the Registrar and the benches",
    w: "Orders II, III, V, VI and XV: sittings and vacations, the Registrar's powers, appeals from them, and who sits on a bench.",
    notes: [
      "Order II is ==Offices of the Court; sittings and vacation==. Order III is ==Officers of the Court==; the Secretary General keeps the Court's records.",
      "Order V, ==Business in chambers==: the ==Registrar== may exercise the Court's powers in listed matters, such as uncontested formal interlocutory applications, discovery and inspection, and time to plead.",
      "An order of the Registrar under Order V may be appealed to the ==Judge in Chambers within fifteen days== (Rule 3).",
      "Order XV, Rule 5: the Registrar may ==refuse to receive a petition== that discloses no reasonable cause, is frivolous or contains scandalous matter. The petitioner may appeal ==within fifteen days==, and that appeal goes to the ==Court==.",
      "Order VI, Rule 1: every cause, appeal or matter is heard by a Bench of ==not less than two Judges nominated by the Chief Justice==.",
      "The ==2019 amendment== lets a ==single Judge== hear bail and anticipatory-bail SLPs in offences punishable with ==up to seven years==, and transfer petitions.",
      "The ==2024 amendment== renamed the summer vacation ==partial court working days==, and capped those days and the holidays together at ==95, excluding Sundays== (it had been 103).",
      "“Vacation Judge” is now just ==Judge==: the Chief Justice names the Judges who take urgent matters during partial court working days."
    ],
    pairs: [
      { k: "Order V Rule 3 against Order XV Rule 5",
        rows: [
          ["V, Rule 3", "An order the Registrar makes in ==chambers business==: appeal to the ==Judge in Chambers== within ==15 days=="],
          ["XV, Rule 5", "The Registrar ==refuses to receive== a petition at all: appeal within ==15 days==, to the ==Court=="]
        ],
        note: "A 2024 ruling also settled that the Registry cannot decide whether a curative petition deserves a hearing; that is for the Judges." }
    ]
  },

  {
    id: "scr-appeals",
    t: "Appeals and special leave",
    w: "Orders XVI to XXIV: indigent appeals, certificate appeals, criminal appeals, both kinds of SLP, and the two statutory appeals.",
    notes: [
      "Part II, ==Appellate Jurisdiction==, runs from Order XVI (hearing of appeals) to Order XXIV.",
      "Order XVIII: appeals and applications by an ==indigent person==, without court fees.",
      "Order XIX: appeals on a ==certificate by the High Court== (Articles 132 to 134A). Order XX: ==criminal appeals==.",
      "Order XXI: ==special leave petitions in civil proceedings==, drawn up in ==Form No. 28==. Order XXII: ==special leave petitions in criminal proceedings==.",
      "A petitioner ==sentenced to imprisonment== must say whether he has surrendered. If he has not, the petition is not taken in without an ==application for exemption from surrendering==, which is listed first.",
      "Proof of surrender is a ==certified copy of the order recording it== or a ==certificate from the jail officer==; a jail attestation on the vakalatnama is not proof.",
      "The surrender rule applies only where there is a ==sentence of imprisonment== (Jasminbhai Kothari, 2025).",
      "Order XXIII: appeals under ==Section 38 of the Advocates Act, 1961==. Order XXIV: appeals under ==Section 23 of the Consumer Protection Act, 1986==."
    ],
    blocks: [
      { h: "The appeal Orders",
        rows: [
          ["XVI", "Hearing of appeals"],
          ["XVII", "Miscellaneous"],
          ["XVIII", "Appeals and applications by an indigent person"],
          ["XIX", "Appeals on certificate by High Court (Articles 132, 133, 134 with 134A)"],
          ["XX", "Criminal appeals"],
          ["XXI", "SLP (civil): Form No. 28, under Rule 3(1)(a)"],
          ["XXII", "SLP (criminal): the surrender requirement"],
          ["XXIII", "Appeals under Section 38, Advocates Act, 1961: against Bar Council of India disciplinary orders"],
          ["XXIV", "Appeals under Section 23, Consumer Protection Act, 1986: from the National Commission"]
        ] }
    ]
  },

  {
    id: "scr-original",
    t: "Suits, writs and PIL",
    w: "Orders XXV to XXXVIII: the original suit under Article 131, and petitions under Article 32 including public interest litigation.",
    notes: [
      "Orders ==XXV to XXXVII== run an ==original suit== (an Article 131 dispute) like a civil trial: parties, plaint, summons, written statement, discovery, admissions, witnesses, adjournments, hearing, withdrawal, payment into court, and the special case.",
      "Order XXXVIII: ==applications for enforcement of fundamental rights under Article 32==.",
      "PIL sits in ==Order XXXVIII, Rule 12==. It can begin ==suo motu==, on a ==letter or representation==, by the Court ==treating a petition as a PIL==, or by ==filing a petition==.",
      "A PIL filed directly must disclose the petitioner's details, the cause of action and the public injury, and carry an ==affidavit of no personal gain, private motive or oblique reason==."
    ],
    blocks: [
      { h: "An original suit, Order by Order",
        rows: [
          ["XXV", "Parties to suits"],
          ["XXVI", "Plaints"],
          ["XXVII", "Issue and service of summons"],
          ["XXVIII", "Written statement, set-off and counter-claim"],
          ["XXIX", "Pleadings generally"],
          ["XXX", "Discovery and inspection"],
          ["XXXI", "Admissions"],
          ["XXXII", "Summoning and attendance of witnesses"],
          ["XXXIII", "Adjournments"],
          ["XXXIV", "Hearing of the suit"],
          ["XXXV", "Withdrawal and adjustment of suits"],
          ["XXXVI", "Payment into Court"],
          ["XXXVII", "Special case"]
        ] },
      { h: "Article 32 petitions, from one source only",
        chk: 1,
        note: "These two points come from a single published copy of the Rules. Check them against the bare text before relying on them.",
        rows: [
          ["Court fee", "No court fee on habeas corpus petitions or other Article 32 petitions arising out of criminal proceedings"],
          ["Bench", "Order XXXVIII, Rule 1 provides a Division Court of five Judges, with a smaller bench where no substantial question of interpretation of the Constitution arises"]
        ] }
    ]
  },

  {
    id: "scr-transfer",
    t: "Transfers, references and election petitions",
    w: "Orders XXXIX to XLVI: the three transfer Orders, the four reference Orders, and presidential election petitions.",
    notes: [
      "Three transfer Orders: ==XXXIX== (criminal cases, Section 406 CrPC), ==XL== (Article 139A(1)), ==XLI== (Article 139A(2) and Section 25 CPC).",
      "Four reference Orders: ==XLII== (Article 143), ==XLIII== (Article 317(1), or a statute), ==XLIV== (statutory references by the Central Government or tribunals), ==XLV== (Section 257, Income Tax Act).",
      "Order XLVI: election petitions under the ==Presidential and Vice-Presidential Elections Act, 1952==, heard by a Bench of ==not less than five Judges==, which also takes the preliminary hearing."
    ],
    blocks: [
      { h: "Transfers and references",
        rows: [
          ["XXXIX", "Transfer of criminal proceedings: Section 406 CrPC, 1973, and Section 11 of the Terrorist Affected Areas (Special Courts) Act, 1984"],
          ["XL", "Transfer under Article 139A(1): the Court withdraws cases on a common question to itself"],
          ["XLI", "Transfer under Article 139A(2) and Section 25 CPC: from one High Court, or civil court, to another"],
          ["XLII", "Special reference under Article 143: the President asks for the Court's opinion"],
          ["XLIII", "Reference by the President under Article 317(1) (removal of a PSC member) or a statute, or by a Governor under a statute"],
          ["XLIV", "Reference by the Central Government or a statutory tribunal under a statute"],
          ["XLV", "Reference under Section 257 of the Income Tax Act, 1961"]
        ] },
      { h: "Election petitions, from one source only",
        chk: 1,
        note: "From a single published copy of Order XLVI; check the figures against the bare text.",
        rows: [
          ["Security", "₹50,000 deposited with the Registrar on presentation"],
          ["Time", "Within 30 days of the publication of the declaration of the result"],
          ["Certificate", "A Senior Advocate certifies that the petition raises substantial questions"]
        ] }
    ]
  },

  {
    id: "scr-review",
    t: "Review and curative petitions",
    w: "Orders XLVII and XLVIII: the time limits, the grounds, the certificates, and who sees the papers first.",
    notes: [
      "Order XLVII, ==Review==: filed within ==30 days== of the judgment or order, setting out the grounds clearly.",
      "Grounds: in a ==civil== case only those in ==Order XLVII Rule 1 of the CPC==; in a ==criminal== case only an ==error apparent on the face of the record==.",
      "The ==Advocate-on-Record certifies== that it is the ==first application for review== and rests on admissible grounds.",
      "Decided ==by circulation, without oral arguments==, unless the Court orders otherwise, and sent as far as practicable to the ==same Bench== that decided the case.",
      "Once a review is disposed of, ==no further review== is entertained in the same matter.",
      "Order XLVIII, the ==curative petition==, is governed by ==Rupa Ashok Hurra (2002)==.",
      "It must say its grounds were ==taken in the review==, and that the review was ==dismissed by circulation==, and carry a ==Senior Advocate's certificate==.",
      "Filed within a ==reasonable time== of the order in the review; first circulated to the ==three senior-most Judges== and the Judges who passed the judgment, if available.",
      "Disposed of ==by circulation== unless the Court orders otherwise. Rupa Ashok Hurra also allows ==exemplary costs== on a petition found vexatious."
    ],
    pairs: [
      { k: "Review against curative",
        rows: [
          ["Source", "Review: ==Article 137== and Order XLVII. Curative: ==Rupa Ashok Hurra (2002)== and Order XLVIII"],
          ["Time", "Review: ==30 days==. Curative: a ==reasonable time== after the review is decided"],
          ["Certificate", "Review: the ==Advocate-on-Record== (first review, admissible grounds). Curative: a ==Senior Advocate=="],
          ["First goes to", "Review: the ==same Bench==, as far as practicable. Curative: the ==three senior-most Judges== and the original Bench"],
          ["Heard how", "Both by ==circulation== unless ordered otherwise; death-sentence reviews are heard orally (Mohd. Arif, 2014)"]
        ] }
    ]
  },

  {
    id: "scr-tail",
    t: "Costs to repeal",
    w: "Orders XLIX to LVII: costs, taxation, notice to the law officers, forms, service, commissions, inherent powers, records and repeal.",
    notes: [
      "Order XLIX ==Costs==; Order L ==Taxation== of costs.",
      "Order LI: notice of proceedings to the ==Attorney-General for India== or the ==Advocate-General== of a State.",
      "Order LII ==Forms==; Order LIII ==Service of documents==; Order LIV ==Commissions==.",
      "Order LV: ==power to dispense and inherent powers==. Order LVI: ==destruction of records==. Order LVII: ==repeal== of the 1966 Rules."
    ]
  }
  ],

  qs: [
  /* ---------------------------------------------------- basics */
  { t: "scr-basics", q: "The Supreme Court Rules, 2013 were made under which article of the Constitution?",
    o: ["Article 146", "Article 145", "Article 137", "Article 142"], a: 1,
    s: "Article 145, by the Supreme Court with the approval of the President. Article 146 is the source of the 1961 staff rules.", r: "Art. 145" },
  { t: "scr-basics", q: "From which date did the Supreme Court Rules, 2013 come into force?",
    o: ["27 May 2014", "26 January 2014", "19 August 2014", "1 January 2013"], a: 2,
    s: "19 August 2014. They were published by notification dated 27 May 2014 (G.S.R. 368(E)).", r: "Notification" },
  { t: "scr-basics", q: "The Supreme Court Rules, 2013 replaced the:",
    o: ["Supreme Court Rules, 1950", "Federal Court Rules, 1942", "Supreme Court Rules, 1978", "Supreme Court Rules, 1966"], a: 3,
    s: "The 1966 Rules, repealed by Order LVII.", r: "Order LVII" },
  { t: "scr-basics", q: "How many Orders do the Supreme Court Rules, 2013 contain?",
    o: ["55", "47", "61", "57"], a: 3,
    s: "From Order I (interpretation) to Order LVII (repeal).", r: "Arrangement of Orders" },
  { t: "scr-basics", q: "Which Order of the 2013 Rules repeals the Supreme Court Rules, 1966?",
    o: ["Order LV", "Order I", "Order LVII", "Order LVI"], a: 2,
    s: "Order LVII, the last. Order LV is inherent powers and LVI the destruction of records.", r: "Order LVII" },
  { t: "scr-basics", q: "Order I of the Supreme Court Rules, 2013 deals with:",
    o: ["Advocates", "Interpretation", "Review", "Costs"], a: 1,
    s: "Interpretation: the definitions. Advocates are Order IV, review XLVII, costs XLIX.", r: "Order I" },

  /* ---------------------------------------------------- the Order map */
  { t: "scr-orders", q: "Order VII of the 2013 Rules deals with proceedings by or against:",
    o: ["the Union of India", "advocates-on-record", "minors or persons of unsound mind", "foreign States"], a: 2,
    s: "Order VII: proceedings by or against minors or persons of unsound mind.", r: "Order VII" },
  { t: "scr-orders", q: "Order IX of the 2013 Rules is about:",
    o: ["Affidavits", "Documents", "Copying", "Notices of motion"], a: 0,
    s: "Order IX, affidavits. Documents are VIII, notices of motion XI, copying XIII.", r: "Order IX" },
  { t: "scr-orders", q: "Order XII of the 2013 Rules is headed:",
    o: ["Copying", "Petitions generally", "Judgments, decrees and orders", "Hearing of appeals"], a: 2,
    s: "Order XII. Copying is XIII, petitions generally XV, hearing of appeals XVI.", r: "Order XII" },
  { t: "scr-orders", q: "Order XIII of the 2013 Rules deals with:",
    o: ["Costs", "Copying", "Commissions", "Inspection"], a: 1,
    s: "Copying. Inspection is Order X, costs XLIX, commissions LIV.", r: "Order XIII" },
  { t: "scr-orders", q: "Order VIII of the 2013 Rules, which requires documents not in English to be translated, is headed:",
    o: ["Affidavits", "Copying", "Documents", "Inspection, search, etc."], a: 2,
    s: "Order VIII, documents.", r: "Order VIII" },
  { t: "scr-orders", q: "Order XIV of the 2013 Rules deals with:",
    o: ["notices of motion", "commissions", "service of documents", "payment into and out of Court of suitors' funds"], a: 3,
    s: "Order XIV. Notices of motion are XI, service of documents LIII, commissions LIV.", r: "Order XIV" },

  /* ---------------------------------------------------- advocates */
  { t: "scr-advocates", q: "Which Order of the 2013 Rules deals with Advocates?",
    o: ["Order II", "Order VI", "Order XV", "Order IV"], a: 3,
    s: "Order IV: who may appear, Senior Advocates and Advocates-on-Record.", r: "Order IV" },
  { t: "scr-advocates", q: "Under Order IV, who may designate an advocate as a Senior Advocate?",
    o: ["The Bar Council of India", "The Attorney-General", "The Chief Justice and the Judges, with the advocate's consent", "The Supreme Court Bar Association"], a: 2,
    s: "Order IV Rule 2(a), on ability, standing at the Bar, or special knowledge or experience in law.", r: "Order IV, Rule 2(a)" },
  { t: "scr-advocates", q: "A Senior Advocate may NOT appear in the Supreme Court:",
    o: ["without an Advocate-on-Record", "in a criminal matter", "before a Constitution Bench", "during partial court working days"], a: 0,
    s: "Order IV Rule 2(b): never without an AoR in the Supreme Court, never without a junior in any other court.", r: "Order IV, Rule 2(b)" },
  { t: "scr-advocates", q: "A Senior Advocate may not accept instructions to:",
    o: ["argue a case", "draw pleadings or affidavits", "appear for the Union", "appear in a review"], a: 1,
    s: "He may still settle pleadings in consultation with a junior.", r: "Order IV, Rule 2(b)" },
  { t: "scr-advocates", q: "To be registered as an Advocate-on-Record, an advocate's name must have been on a State Bar Council roll for at least ___ on the date his training starts.",
    o: ["two years", "four years", "five years", "seven years"], a: 1,
    s: "Four years; then a year's training with an AoR and the examination. About five years from enrolment in all.", r: "Order IV" },
  { t: "scr-advocates", q: "Before sitting the Advocate-on-Record examination, an advocate must train:",
    o: ["for one year with an Advocate-on-Record", "for six months with a Senior Advocate", "for two years in the Registry", "for one year in a High Court"], a: 0,
    s: "One year with an AoR, after four years on a State roll.", r: "Order IV" },
  { t: "scr-advocates", q: "Which is listed as misconduct, or conduct unbecoming, of an Advocate-on-Record?",
    o: ["Appearing for a State government", "Filing a review petition", "Practising in a High Court", "Mere name-lending"], a: 3,
    s: "Also absence without justifiable cause when the case is called, and not filing a signed appearance slip.", r: "Order IV" },
  { t: "scr-advocates", q: "Unless instructed by an Advocate-on-Record or permitted by the Court, who may appear, plead and address the Court for a party?",
    o: ["Any advocate on a State roll", "Any Senior Advocate", "Only the Advocate-on-Record for that party", "A relative of the party"], a: 2,
    s: "Order IV Rule 1(b).", r: "Order IV, Rule 1(b)" },

  /* ---------------------------------------------------- registry and benches */
  { t: "scr-registry", q: "“Business in chambers” is the subject of:",
    o: ["Order V", "Order III", "Order IX", "Order XI"], a: 0,
    s: "Order V: the Registrar's and the Judge in Chambers' business.", r: "Order V" },
  { t: "scr-registry", q: "“Constitution of Division Courts and powers of a single Judge” is:",
    o: ["Order IV", "Order V", "Order VI", "Order VII"], a: 2,
    s: "Order VI.", r: "Order VI" },
  { t: "scr-registry", q: "Under Order VI Rule 1, every cause, appeal or matter is ordinarily heard by a Bench of not less than:",
    o: ["three Judges", "five Judges", "one Judge", "two Judges nominated by the Chief Justice"], a: 3,
    s: "Two, nominated by the Chief Justice. The 2019 proviso carved out matters a single Judge may take.", r: "Order VI, Rule 1" },
  { t: "scr-registry", q: "Since the 2019 amendment, a single Judge may hear special leave petitions from bail or anticipatory-bail orders in offences punishable with imprisonment of up to:",
    o: ["three years", "ten years", "life", "seven years"], a: 3,
    s: "Seven years, along with transfer petitions.", r: "Order VI, Rule 1, proviso" },
  { t: "scr-registry", q: "Order XV of the 2013 Rules is headed:",
    o: ["Hearing of appeals", "Notices of motion", "Affidavits", "Petitions generally"], a: 3,
    s: "Order XV, petitions generally, including the Registrar's power to refuse a petition (Rule 5).", r: "Order XV" },
  { t: "scr-registry", q: "Under Order XV Rule 5, the Registrar may refuse to receive a petition that:",
    o: ["discloses no reasonable cause", "is frivolous", "contains scandalous matter", "does any of these"], a: 3,
    s: "All three are grounds. The petitioner can appeal against the refusal within fifteen days.", r: "Order XV, Rule 5" },
  { t: "scr-registry", q: "A petitioner aggrieved by the Registrar's refusal under Order XV Rule 5 may appeal within:",
    o: ["seven days", "fifteen days", "thirty days", "ninety days"], a: 1,
    s: "Fifteen days, and the appeal goes to the Court.", r: "Order XV, Rule 5" },
  { t: "scr-registry", q: "Under Order V, an appeal against an order of the Registrar lies to the Judge in Chambers within:",
    o: ["fifteen days", "seven days", "thirty days", "sixty days"], a: 0,
    s: "Order V Rule 3. The route covers orders the Registrar makes under Order V Rule 1.", r: "Order V, Rule 3" },
  { t: "scr-registry", q: "The 2024 amendment to the 2013 Rules renamed the Court's “summer vacation” as:",
    o: ["partial court working days", "the long recess", "the summer term", "vacation benches"], a: 0,
    s: "The Supreme Court (Second Amendment) Rules, 2024. “Vacation Judge” became simply “Judge”.", r: "Order II" },
  { t: "scr-registry", q: "After the 2024 amendment, the partial court working days and the holidays together may not exceed ___ days, excluding Sundays.",
    o: ["103", "90", "120", "95"], a: 3,
    s: "Ninety-five; the earlier limit was 103.", r: "Order II" },
  { t: "scr-registry", q: "Order II of the 2013 Rules deals with:",
    o: ["Offices of the Court; sittings and vacation", "Advocates", "Affidavits", "Documents"], a: 0,
    s: "Order II. Order III is the officers of the Court.", r: "Order II" },

  /* ---------------------------------------------------- appeals */
  { t: "scr-appeals", q: "Order XVIII of the 2013 Rules concerns appeals and applications by:",
    o: ["the Union of India", "advocates-on-record", "an indigent person", "foreign litigants"], a: 2,
    s: "An indigent person, who may be exempted from court fees and given an advocate.", r: "Order XVIII" },
  { t: "scr-appeals", q: "Appeals on a certificate granted by a High Court are dealt with in:",
    o: ["Order XIX", "Order XXI", "Order XXIII", "Order XXV"], a: 0,
    s: "Order XIX, the procedure for Articles 132 to 134A.", r: "Order XIX" },
  { t: "scr-appeals", q: "Order XX of the 2013 Rules deals with:",
    o: ["civil appeals", "criminal appeals", "election petitions", "transfer petitions"], a: 1,
    s: "Criminal appeals. Civil special leave is Order XXI.", r: "Order XX" },
  { t: "scr-appeals", q: "Special leave petitions in civil proceedings are governed by:",
    o: ["Order XXI", "Order XXII", "Order XX", "Order XIX"], a: 0,
    s: "Order XXI. Criminal SLPs are Order XXII.", r: "Order XXI" },
  { t: "scr-appeals", q: "Special leave petitions in criminal proceedings are governed by:",
    o: ["Order XXI", "Order XX", "Order XXIII", "Order XXII"], a: 3,
    s: "Order XXII, which carries the surrender requirement.", r: "Order XXII" },
  { t: "scr-appeals", q: "A special leave petition (civil) is drawn up in:",
    o: ["Form No. 1", "Form No. 32", "Form No. 28", "Form No. 10"], a: 2,
    s: "Form No. 28, under Order XXI Rule 3(1)(a).", r: "Order XXI; Form 28" },
  { t: "scr-appeals", q: "A petitioner sentenced to imprisonment who has not surrendered must file, with the special leave petition:",
    o: ["a bank guarantee", "an application for exemption from surrendering", "a certificate from the trial judge", "a caveat"], a: 1,
    s: "Without it the petition is not taken in; the exemption application is listed first.", r: "Order XXII" },
  { t: "scr-appeals", q: "Proof of surrender may be given by:",
    o: ["a certified copy of the order recording the surrender, or a certificate from the jail officer", "an attestation of the vakalatnama by the jail authorities", "an affidavit of the advocate", "a newspaper report of the arrest"], a: 0,
    s: "A jail attestation on the vakalatnama is expressly not enough.", r: "Order XXII" },
  { t: "scr-appeals", q: "Appeals under Section 38 of the Advocates Act, 1961 are dealt with in:",
    o: ["Order IV", "Order XXIV", "Order XXIII", "Order XLIX"], a: 2,
    s: "Order XXIII: appeals against the Bar Council of India's disciplinary orders.", r: "Order XXIII" },
  { t: "scr-appeals", q: "Order XXIV deals with appeals under Section 23 of the:",
    o: ["Arbitration and Conciliation Act, 1996", "Advocates Act, 1961", "Income Tax Act, 1961", "Consumer Protection Act, 1986"], a: 3,
    s: "The Consumer Protection Act, 1986: appeals from the National Commission.", r: "Order XXIV" },

  /* ---------------------------------------------------- original side */
  { t: "scr-original", q: "Orders XXV to XXXVII of the 2013 Rules (parties, plaints, summons, written statement, discovery and the rest) govern:",
    o: ["special leave petitions", "suits in the Court's original jurisdiction", "election petitions", "review petitions"], a: 1,
    s: "Original suits, which in practice means Article 131 disputes.", r: "Orders XXV to XXXVII" },
  { t: "scr-original", q: "Applications for enforcement of fundamental rights under Article 32 are dealt with in:",
    o: ["Order XL", "Order XLII", "Order XXXII", "Order XXXVIII"], a: 3,
    s: "Order XXXVIII in the 2013 Rules.", r: "Order XXXVIII" },
  { t: "scr-original", q: "Under the 2013 Rules, a public interest litigation may begin:",
    o: ["on a petition filed in the Court", "on a letter or representation", "suo motu", "in any of these ways"], a: 3,
    s: "Order XXXVIII Rule 12 also allows the Court to treat a petition as a PIL by order.", r: "Order XXXVIII, Rule 12" },
  { t: "scr-original", q: "A petitioner who files a PIL directly must, among other things, file an affidavit that:",
    o: ["he is a lawyer", "he has no personal gain, private motive or oblique reason in filing it", "he has approached the High Court first", "he will pay the respondents' costs"], a: 1,
    s: "With his details, the cause of action, and the public injury involved.", r: "Order XXXVIII, Rule 12" },

  /* ---------------------------------------------------- transfers, references, elections */
  { t: "scr-transfer", q: "Applications to transfer criminal proceedings under Section 406 of the CrPC are dealt with in:",
    o: ["Order XXXIX", "Order XL", "Order XLI", "Order XLVI"], a: 0,
    s: "Order XXXIX, which also covers Section 11 of the Terrorist Affected Areas (Special Courts) Act, 1984.", r: "Order XXXIX" },
  { t: "scr-transfer", q: "Order XL deals with applications for transfer under:",
    o: ["Section 25 of the CPC", "Article 139A(1)", "Article 139A(2)", "Section 406 of the CrPC"], a: 1,
    s: "Article 139A(1): the Court withdrawing to itself cases on a common question.", r: "Order XL" },
  { t: "scr-transfer", q: "Applications for transfer under Article 139A(2) and Section 25 of the CPC fall under:",
    o: ["Order XXXIX", "Order XL", "Order XLI", "Order XLIII"], a: 2,
    s: "Order XLI.", r: "Order XLI" },
  { t: "scr-transfer", q: "A special reference by the President under Article 143 is dealt with in:",
    o: ["Order XLII", "Order XLV", "Order XXXVIII", "Order XLVII"], a: 0,
    s: "Order XLII.", r: "Order XLII" },
  { t: "scr-transfer", q: "Order XLIII deals with a reference made by the President under:",
    o: ["Article 143", "Article 317(1)", "Article 356", "Article 72"], a: 1,
    s: "Article 317(1), the inquiry before removing a member of a Public Service Commission, or under any statute.", r: "Order XLIII" },
  { t: "scr-transfer", q: "A reference under Section 257 of the Income Tax Act, 1961 is dealt with in:",
    o: ["Order XLIV", "Order XLIII", "Order XLIX", "Order XLV"], a: 3,
    s: "Order XLV. Order XLIV covers other statutory references.", r: "Order XLV" },
  { t: "scr-transfer", q: "Election petitions under the Presidential and Vice-Presidential Elections Act, 1952 are dealt with in:",
    o: ["Order XXXIX", "Order XLVI", "Order XLII", "Order LI"], a: 1,
    s: "Order XLVI.", r: "Order XLVI" },
  { t: "scr-transfer", q: "A petition challenging the election of the President is heard by a Bench of not less than:",
    o: ["three Judges", "seven Judges", "five Judges", "two Judges"], a: 2,
    s: "Five, which also takes the preliminary hearing.", r: "Order XLVI" },

  /* ---------------------------------------------------- review and curative */
  { t: "scr-review", q: "Review of a judgment or order of the Supreme Court is governed by:",
    o: ["Order XLVIII", "Order XLVI", "Order XLVII", "Order LV"], a: 2,
    s: "Order XLVII. Curative is XLVIII.", r: "Order XLVII" },
  { t: "scr-review", q: "An application for review must be filed within:",
    o: ["thirty days of the judgment or order", "sixty days", "ninety days", "a reasonable time"], a: 0,
    s: "Thirty days. “A reasonable time” is the curative petition's limit.", r: "Order XLVII, Rule 2" },
  { t: "scr-review", q: "In a civil proceeding, review is allowed only on the grounds in:",
    o: ["Section 114 of the Evidence Act", "Order XLVII Rule 1 of the Code of Civil Procedure", "Article 142", "Section 151 of the CPC"], a: 1,
    s: "Order XLVII Rule 1 of the CPC; in a criminal case, only an error apparent on the face of the record.", r: "Order XLVII, Rule 1" },
  { t: "scr-review", q: "In a criminal proceeding, the Supreme Court will entertain a review only on the ground of:",
    o: ["fresh evidence", "a change of counsel", "a later judgment of a larger bench", "an error apparent on the face of the record"], a: 3,
    s: "Order XLVII Rule 1.", r: "Order XLVII, Rule 1" },
  { t: "scr-review", q: "Unless the Court orders otherwise, a review petition is decided:",
    o: ["in open court after oral arguments", "by a Constitution Bench", "by circulation, without oral arguments", "by the Registrar"], a: 2,
    s: "By circulation, though the petitioner may add written arguments. Upheld in P. N. Eswara Iyer (1980) and again in 2023.", r: "Order XLVII, Rule 3" },
  { t: "scr-review", q: "A review petition is circulated, as far as practicable, to:",
    o: ["the same Judge or Bench that delivered the judgment", "the Chief Justice alone", "a larger Bench", "the three senior-most Judges"], a: 0,
    s: "The same Bench. The three senior-most Judges are the curative petition's first stop.", r: "Order XLVII, Rule 3" },
  { t: "scr-review", q: "After an application for review has been made and disposed of:",
    o: ["a second review may be filed within thirty days", "no further application for review is entertained in the same matter", "the matter goes to a larger Bench automatically", "the Registrar may reopen it"], a: 1,
    s: "Order XLVII Rule 5. What remains is the curative petition.", r: "Order XLVII, Rule 5" },
  { t: "scr-review", q: "The certificate that a review petition is the first one and rests on admissible grounds is given by:",
    o: ["a Senior Advocate", "the Registrar", "the Advocate-on-Record", "the trial court"], a: 2,
    s: "The AoR. A curative petition needs a Senior Advocate's certificate instead.", r: "Order XLVII" },
  { t: "scr-review", q: "Curative petitions are governed by:",
    o: ["Order XLVIII", "Order XLVII", "Order XLIX", "Order LV"], a: 0,
    s: "Order XLVIII, which follows Rupa Ashok Hurra (2002).", r: "Order XLVIII" },
  { t: "scr-review", q: "A curative petition must state that its grounds were taken in the review petition and that the review was:",
    o: ["heard in open court", "dismissed by circulation", "withdrawn", "allowed in part"], a: 1,
    s: "Order XLVIII Rule 2.", r: "Order XLVIII, Rule 2" },
  { t: "scr-review", q: "A curative petition is first circulated to:",
    o: ["the Chief Justice alone", "a Bench of five Judges", "the three senior-most Judges and the Judges who passed the judgment, if available", "the Judges who passed the judgment only"], a: 2,
    s: "Order XLVIII Rule 4. If most of them think it needs a hearing, it is listed, as far as possible, before the same Bench.", r: "Order XLVIII, Rule 4" },
  { t: "scr-review", q: "Within what time must a curative petition be filed?",
    o: ["Within a reasonable time of the order in the review petition", "Thirty days of the review order", "Ninety days of the judgment", "One year of the judgment"], a: 0,
    s: "Order XLVIII Rule 3 fixes no number of days.", r: "Order XLVIII, Rule 3" },
  { t: "scr-review", q: "The certificate that a curative petition meets the requirements is given by:",
    o: ["the Attorney-General", "a Senior Advocate", "the Registrar", "two Advocates-on-Record"], a: 1,
    s: "A Senior Advocate, as Rupa Ashok Hurra required.", r: "Order XLVIII, Rule 2" },

  /* ---------------------------------------------------- the tail */
  { t: "scr-tail", q: "Order XLIX of the 2013 Rules deals with:",
    o: ["Commissions", "Taxation", "Forms", "Costs"], a: 3,
    s: "Costs. Taxation is Order L, forms LII, commissions LIV.", r: "Order XLIX" },
  { t: "scr-tail", q: "Notice of proceedings to the Attorney-General for India or the Advocate-General of a State is dealt with in:",
    o: ["Order LI", "Order LIII", "Order XLII", "Order IV"], a: 0,
    s: "Order LI.", r: "Order LI" },
  { t: "scr-tail", q: "Order LV of the 2013 Rules is headed:",
    o: ["Destruction of records", "Repeal", "Power to dispense and inherent powers", "Service of documents"], a: 2,
    s: "Order LV. Destruction of records is LVI, repeal LVII, service of documents LIII.", r: "Order LV" },
  { t: "scr-tail", q: "Order LVI of the 2013 Rules is about:",
    o: ["Repeal", "Destruction of records", "Costs", "Commissions"], a: 1,
    s: "Destruction of records.", r: "Order LVI" }
  ]
};
