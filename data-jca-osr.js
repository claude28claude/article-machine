/* The Article Machine - data-jca-osr.js
   The JCA section, part three: the Supreme Court Officers and Servants
   (Conditions of Service and Conduct) Rules, 1961, the 10-question section of
   the Supreme Court JCA 2026 objective test, and the rules a Junior Court
   Assistant will serve under.

   How firm this is. The consolidated text on the Supreme Court's website
   (amended up to 6 November 2024) could not be fetched for this section, so
   nothing here is quoted from it. Rule numbers and headings were checked
   against the indexed text of that official PDF and the Court's own amendment
   notices; the 2025 reservation change against the Court's roster documents
   and the reporting of it. Anything resting on one source only is flagged
   `chk: 1`. Rules whose headings could not be confirmed are left out rather
   than guessed.

   Fields: as in data-jca-judiciary.js.                                           */

window.JCA = window.JCA || {};

window.JCA.osr = {
  id: "s",
  name: "SC Officers and Servants Rules, 1961",
  short: "O&S Rules 1961",
  marks: 10,
  lede: "The service rules of the Supreme Court's own staff, made by the Chief Justice under Article 146(2): how posts are filled and reserved, probation, the seven penalties, who hears an appeal, and the conduct rules.",

  topics: [
  {
    id: "osr-basics",
    t: "The rules and where they come from",
    w: "Article 146(2), the President's approval, the definitions, and who interprets the rules.",
    notes: [
      "Full name: the ==Supreme Court Officers and Servants (Conditions of Service and Conduct) Rules, 1961==.",
      "Made by the ==Chief Justice of India== under ==Article 146(2)==, dated ==10 January 1961==.",
      "The rules on ==salaries, allowances, leave and pensions== needed the ==President's approval== (the proviso to Article 146(2)); they sit in ==Part II==.",
      "Words such as “Court”, “Chief Justice”, “Registrar” and “Advocate on Record”, where not defined, take their meaning from the ==Supreme Court Rules, 2013== (Rule 2).",
      "An outside body that lends one of its servants to the Court is the ==Lending Authority==; the authority competent to impose a penalty is the ==Disciplinary Authority==.",
      "Any question about what the rules mean goes to the ==Chief Justice==, whose decision is ==final==.",
      "Amendments are made by the ==Chief Justice under Article 146(2)==. The consolidated text is ==amended up to 6 November 2024==, and ==Rule 4A== was substituted again in ==July 2025=="
    ],
    blocks: [
      { h: "The rules at a glance",
        rows: [
          ["Made by", "The Chief Justice of India"],
          ["Under", "Article 146(2) of the Constitution"],
          ["Dated", "10 January 1961"],
          ["President's approval", "For the rules on salaries, allowances, leave and pensions"],
          ["Part II", "Strength, appointment and conditions of service: recruitment, qualifications, appointing authority, probation, seniority"],
          ["Part III", "Control and penalties: the penalties (Rule 11), the disciplinary authorities (Rule 12), procedure, and appeals (Rules 18 to 22)"],
          ["Conduct", "From Rule 24A on: intoxicants, absence, politics, the press, disclosure, subscriptions, gifts, demonstrations, private trade, investments, insolvency, property"],
          ["The Schedule", "Every post by category number, with its pay and how it is filled"],
          ["Latest text", "Consolidated up to 6 November 2024; Rule 4A substituted in July 2025"]
        ] }
    ],
    pairs: [
      { k: "Who decides what",
        rows: [
          ["Makes and amends the rules", "The ==Chief Justice==, under Article 146(2)"],
          ["Approves the pay, leave and pension rules", "The ==President=="],
          ["Interprets the rules", "The ==Chief Justice==, finally"],
          ["Appoints the staff", "The ==Chief Justice==, or a judge or officer he directs (Article 146(1))"],
          ["May require the UPSC to be consulted", "The ==President==, by rule, for people not already attached to the Court"]
        ] }
    ]
  },

  {
    id: "osr-recruitment",
    t: "Recruitment, reservation and probation",
    w: "Rules 4, 4A, 6, 7 and 8: how a post is filled, the 2025 reservation change, and the probation periods.",
    notes: [
      "Rule 4: a post is filled by ==promotion== from within the Court, by ==transfer or deputation== from outside, or by ==direct recruitment==.",
      "The ==Chief Justice==, by general or special order, may direct a ==different method== from the one in the Schedule, fix the ==proportion== for each method, and say how direct recruitment is run.",
      "Rule 4A is ==reservation==. It was ==substituted in July 2025==, adding ==Other Backward Classes (non-creamy layer)== to the Scheduled Castes and Scheduled Tribes for the first time.",
      "The model roster circulated in June 2025: ==15 per cent== for Scheduled Castes and ==7.5 per cent== for Scheduled Tribes, on a ==200-point, post-based== roster, following ==R. K. Sabharwal (1995)==.",
      "There is ==no EWS== reservation in the Court's staff policy.",
      "Rule 7, probation: ==two years== for a direct recruit, ==one year== for a promotee; the authority competent under ==Rule 6== may extend or reduce it.",
      "A Court servant who competes with outsiders after a ==general advertisement== is treated as a ==direct recruit== for probation.",
      "Rule 8 governs ==seniority==."
    ],
    blocks: [
      { h: "Rule 4A: what changed in 2025",
        rows: [
          ["Before", "Reservation for Scheduled Castes and Scheduled Tribes"],
          ["July 2025", "Rule 4A substituted; Other Backward Classes (non-creamy layer as on 1 July 2025) added; reservation in direct recruitment follows Government of India orders"],
          ["The roster", "200 points, post-based: 15 per cent Scheduled Castes, 7.5 per cent Scheduled Tribes"],
          ["Not covered", "Economically Weaker Sections; and judges, whose appointment is not a staff appointment"],
          ["Power used", "Article 146(2), by the Chief Justice"]
        ] }
    ],
    pairs: [
      { k: "Probation under Rule 7",
        rows: [
          ["Direct recruit", "==Two years=="],
          ["Promotee", "==One year=="],
          ["An insider who answered an open advertisement", "Treated as a ==direct recruit=="],
          ["Who can change the period", "The authority competent under ==Rule 6=="]
        ] }
    ]
  },

  {
    id: "osr-penalties",
    t: "Penalties and the disciplinary chain",
    w: "Rule 11's seven penalties, what is not a penalty, notice against inquiry, who may punish, and deemed suspension.",
    notes: [
      "Rule 11 lists ==seven penalties==, imposed ==for good and sufficient reasons==: censure; withholding of increments or promotion; recovery from pay; reduction to a lower post, time-scale or stage; compulsory retirement; removal; dismissal.",
      "The light end, ==censure, withholding and recovery==, needs ==written notice of the proposal and a chance to make a representation==.",
      "The heavy end, ==reduction, compulsory retirement, removal and dismissal==, needs an ==inquiry==, except in cases such as a conviction on a criminal charge.",
      "Not penalties: stoppage at the ==efficiency bar==, not being picked for a ==selection post==, ==reversion from an officiating post==, ==compulsory retirement under the superannuation rules==, and an increment withheld for ==failing a departmental examination==.",
      "The ==Chief Justice== may impose any penalty on any Court servant, the Registrar included. The ==Registrar== may impose penalties too, subject to ==Article 311(1) and (2)==, Rule 17 and the Chief Justice's special orders.",
      "==Compulsory retirement, removal and dismissal== may be imposed only by the ==appointing authority or one above it==.",
      "A Court servant held in custody for ==more than 48 hours== is ==deemed suspended== from the date of detention."
    ],
    blocks: [
      { h: "The seven penalties, in the order Rule 11 lists them",
        rows: [
          ["Censure", "The mildest: a formal record of disapproval"],
          ["Withholding", "Of increments or of promotion"],
          ["Recovery from pay", "Of the whole or part of a loss caused to the Court by negligence or breach of orders"],
          ["Reduction", "To a lower post or time-scale, or to a lower stage in a time-scale"],
          ["Compulsory retirement", "As a penalty, not the ordinary retirement on superannuation"],
          ["Removal from service", "Ends the service"],
          ["Dismissal from service", "Ends the service; the gravest of the seven"]
        ] }
    ],
    pairs: [
      { k: "Notice or inquiry",
        rows: [
          ["Censure, withholding, recovery", "==Written notice== of the proposal and an opportunity to make a ==representation=="],
          ["Reduction, compulsory retirement, removal, dismissal", "A full ==inquiry==, with exceptions such as a conviction on a criminal charge"]
        ] },
      { k: "Penalty or not",
        rows: [
          ["Penalties", "Censure, withholding, recovery, reduction, compulsory retirement as a penalty, removal, dismissal"],
          ["Not penalties", "An efficiency-bar stoppage, non-selection for a selection post, reversion from officiating, retirement on superannuation, an increment held back for failing a departmental examination"]
        ] }
    ]
  },

  {
    id: "osr-appeals",
    t: "Appeals",
    w: "Rules 18 to 23: who hears an appeal, the one-month limit, and the Chief Justice's residuary power.",
    notes: [
      "Rule 18(1): a penalty imposed by the ==Registrar== is appealed to the ==Chief Justice==.",
      "Rule 18(2): a penalty imposed by the ==Chief Justice== himself, not on appeal, is appealed to a ==Bench of not less than three Judges==.",
      "Rule 19: the Chief Justice also hears appeals against a Registrar's order ==stopping a servant at the efficiency bar==, or ==reading a rule to his disadvantage==.",
      "Time: within ==one month== of receiving the order, and a ==late appeal== may be admitted for sufficient cause.",
      "An appeal to the Chief Justice goes ==through the Registrar==, and the Registrar ==gives effect== to the orders passed on it.",
      "Rule 23: the Chief Justice may deal with any case ==as he thinks just and reasonable==, so long as the servant is ==not treated less favourably== than the rules provide."
    ],
    pairs: [
      { k: "Who hears the appeal",
        rows: [
          ["A penalty by the Registrar", "The ==Chief Justice=="],
          ["A penalty by the Chief Justice", "A ==Bench of at least three Judges=="],
          ["Efficiency bar, or a rule read against you", "The ==Chief Justice=="],
          ["Time limit", "==One month==, with room for sufficient cause"]
        ] }
    ]
  },

  {
    id: "osr-conduct",
    t: "Conduct",
    w: "From Rule 24A: intoxicants, politics, the press, disclosure, gifts, demonstrations, private trade, money and property.",
    notes: [
      "The conduct rules run from ==Rule 24A== (intoxicants) and ==Rule 25== (absence from duty) onwards.",
      "==Rule 26==: no Court servant may be a ==member of a political party==, or help outsiders into the court rooms or the Registry for political purposes.",
      "==Rule 27==: connection with the ==press or radio==. ==Rule 29==: no ==unauthorised communication of information==. ==Rule 30==: ==subscriptions==.",
      "==Rule 31==, gifts: the ==Registrar's previous permission== for anything beyond a trifling value; gifts of reasonable value from ==relatives and personal friends== at ==weddings, anniversaries and funerals== are allowed.",
      "==Rule 32==: no complimentary or valedictory address, testimonial, or meeting or entertainment in your honour without the ==Registrar's previous permission==.",
      "==Rule 33==: no ==private trade or employment== without previous sanction.",
      "==Rule 34==: investments, lending and borrowing. ==Rule 35==: avoid ==habitual indebtedness==, and report any ==insolvency proceedings== to the ==Registrar== at once. ==Rule 36==: ==movable, immovable and valuable property==.",
      "Break the conduct rules and you are liable to ==disciplinary action== under the rules on control and penalties (==Rule 46==)."
    ],
    blocks: [
      { h: "The conduct rules by number",
        note: "Rules 28 and 37 to 45 are left out because their headings could not be checked against the bare text.",
        rows: [
          ["24A", "Intoxicants"],
          ["25", "Absence from duty"],
          ["26", "Taking part in politics"],
          ["27", "Connection with the press or radio"],
          ["29", "Unauthorised communication of information"],
          ["30", "Subscriptions"],
          ["31", "Gifts"],
          ["32", "Public demonstrations in honour of Court servants"],
          ["33", "Private trade or employment"],
          ["34", "Investments, lending and borrowing"],
          ["35", "Insolvency and habitual indebtedness"],
          ["36", "Movable, immovable and valuable property"],
          ["46", "Breach of the conduct rules leads to disciplinary action"]
        ] }
    ]
  },

  {
    id: "osr-schedule",
    t: "The Schedule and the pay",
    w: "Posts by category, the Junior Court Assistant's level, and the 2023 renaming.",
    notes: [
      "The ==Schedule== lists every post by ==category number==, with its pay and its method of recruitment.",
      "A ==Junior Court Assistant== is a ==Group B, non-gazetted== post at ==Level 6== of the pay matrix: initial basic pay ==₹35,400== plus allowances.",
      "A ==Court Master== is at ==Level 11==: ₹67,700.",
      "A ==2023 amendment== renamed the Jamadar posts at categories 56 and 57; ==Jamadar (Farash)== became ==Supervisor (Room)==."
    ],
    blocks: [
      { h: "Posts and pay you may be asked about",
        rows: [
          ["Junior Court Assistant", "Group B, non-gazetted; Level 6; ₹35,400"],
          ["Court Master", "Level 11; ₹67,700"],
          ["Supervisor (Room)", "The 2023 name for Jamadar (Farash)"]
        ] }
    ]
  }
  ],

  qs: [
  /* ---------------------------------------------------- basics */
  { t: "osr-basics", q: "The Supreme Court Officers and Servants (Conditions of Service and Conduct) Rules were made in:",
    o: ["1950", "1966", "1961", "2013"], a: 2,
    s: "1961, dated 10 January. 1966 and 2013 are the two sets of Supreme Court Rules of procedure.", r: "Title" },
  { t: "osr-basics", q: "The 1961 Rules are made under:",
    o: ["Article 145", "Article 146(2)", "Article 229", "Article 309"], a: 1,
    s: "Article 146(2). Article 145 is the procedure rules, 229 the High Court staff, 309 government servants.", r: "Art. 146(2)" },
  { t: "osr-basics", q: "The 1961 Rules are made by:",
    o: ["Parliament", "the President", "the Registrar", "the Chief Justice of India"], a: 3,
    s: "The Chief Justice, with the President's approval for the rules on salaries, allowances, leave and pensions.", r: "Art. 146(2)" },
  { t: "osr-basics", q: "Which provisions of the 1961 Rules needed the President's approval?",
    o: ["Those on salaries, allowances, leave and pensions", "Those on conduct", "Those on appeals", "All of them"], a: 0,
    s: "The proviso to Article 146(2).", r: "Art. 146(2), proviso" },
  { t: "osr-basics", q: "The 1961 Rules are dated:",
    o: ["26 January 1961", "10 January 1961", "15 August 1961", "1 April 1961"], a: 1,
    s: "10 January 1961.", r: "Notification" },
  { t: "osr-basics", q: "Words such as “Court”, “Chief Justice”, “Registrar” and “Advocate on Record”, where the 1961 Rules do not define them, take their meaning from:",
    o: ["the General Clauses Act", "the Constitution only", "the Supreme Court Rules, 2013", "the Advocates Act"], a: 2,
    s: "Rule 2 borrows them from the Supreme Court Rules, 2013.", r: "Rule 2" },
  { t: "osr-basics", q: "In the 1961 Rules, an outside authority that lends the services of one of its servants to the Court is called the:",
    o: ["Lending Authority", "Parent Department", "Borrowing Authority", "Deputing Office"], a: 0,
    s: "Rule 2.", r: "Rule 2" },
  { t: "osr-basics", q: "A question about the interpretation of the 1961 Rules is decided by:",
    o: ["a Bench of three Judges", "the Registrar", "the Chief Justice, whose decision is final", "the Ministry of Law"], a: 2,
    s: "The Chief Justice, finally.", r: "Interpretation" },
  { t: "osr-basics", q: "Appointments to the Supreme Court's staff are made by the Chief Justice under:",
    o: ["Article 145(1)", "Article 124(2)", "Article 229(1)", "Article 146(1)"], a: 3,
    s: "Article 146(1): the Chief Justice, or a judge or officer he directs.", r: "Art. 146(1)" },
  { t: "osr-basics", q: "Who may require, by rule, that the UPSC be consulted before an outsider is appointed to an office connected with the Supreme Court?",
    o: ["The Chief Justice", "Parliament", "The President", "The Registrar"], a: 2,
    s: "The President, under the proviso to Article 146(1).", r: "Art. 146(1), proviso" },

  /* ---------------------------------------------------- recruitment */
  { t: "osr-recruitment", q: "Under Rule 4, which is NOT one of the ways a post may be filled?",
    o: ["Promotion from within the Court", "Transfer or deputation", "Direct recruitment", "Nomination by the Bar Council"], a: 3,
    s: "Promotion, transfer or deputation, and direct recruitment.", r: "Rule 4" },
  { t: "osr-recruitment", q: "Under Rule 4, who may direct that a post be filled by a method other than the one in the Schedule?",
    o: ["The Registrar", "The Chief Justice, by general or special order", "The UPSC", "The President"], a: 1,
    s: "The Chief Justice, who may also fix the share of each method and how direct recruitment is run.", r: "Rule 4" },
  { t: "osr-recruitment", q: "Reservation in the Supreme Court's staff is provided for in:",
    o: ["Rule 4A", "Rule 7", "Rule 11", "Rule 26"], a: 0,
    s: "Rule 4A. Rule 7 is probation, 11 penalties, 26 politics.", r: "Rule 4A" },
  { t: "osr-recruitment", q: "Rule 4A was substituted in July 2025 chiefly to:",
    o: ["abolish reservation", "add reservation for Other Backward Classes (non-creamy layer)", "introduce EWS reservation", "reserve posts for law graduates"], a: 1,
    s: "OBC reservation came to the Court's staff for the first time; Scheduled Castes and Scheduled Tribes were already covered.", r: "Rule 4A" },
  { t: "osr-recruitment", q: "Which category was NOT given reservation in the Supreme Court's 2025 staff policy?",
    o: ["Scheduled Castes", "Scheduled Tribes", "Other Backward Classes (non-creamy layer)", "Economically Weaker Sections"], a: 3,
    s: "The policy has no EWS quota.", r: "Rule 4A" },
  { t: "osr-recruitment", q: "Under the model roster circulated in June 2025, the share reserved for Scheduled Castes is:",
    o: ["7.5 per cent", "27 per cent", "15 per cent", "10 per cent"], a: 2,
    s: "15 per cent, which is 30 points of the 200-point roster.", r: "Roster, 2025" },
  { t: "osr-recruitment", q: "The share reserved for Scheduled Tribes under that roster is:",
    o: ["15 per cent", "5 per cent", "27 per cent", "7.5 per cent"], a: 3,
    s: "7.5 per cent, which is 15 points of the 200.", r: "Roster, 2025" },
  { t: "osr-recruitment", q: "The reservation roster for the Supreme Court's staff is:",
    o: ["vacancy-based, 100 points", "post-based, 200 points", "vacancy-based, 200 points", "post-based, 50 points"], a: 1,
    s: "A 200-point roster with reference to posts, not vacancies.", r: "Roster, 2025" },
  { t: "osr-recruitment", q: "A post-based roster follows which Constitution Bench decision?",
    o: ["Indra Sawhney (1992)", "M. Nagaraj (2006)", "R. K. Sabharwal v. State of Punjab (1995)", "Jarnail Singh (2018)"], a: 2,
    s: "R. K. Sabharwal (1995): the roster operates on posts, not vacancies.", r: "Roster, 2025" },
  { t: "osr-recruitment", q: "Under Rule 7, a direct recruit is on probation for:",
    o: ["one year", "six months", "three years", "two years"], a: 3,
    s: "Two years; a promotee, one.", r: "Rule 7" },
  { t: "osr-recruitment", q: "Under Rule 7, a Court servant appointed by promotion is on probation for:",
    o: ["one year", "two years", "six months", "no probation at all"], a: 0,
    s: "One year; a direct recruit, two.", r: "Rule 7" },
  { t: "osr-recruitment", q: "The period of probation may be extended or reduced by:",
    o: ["the UPSC", "the authority competent to appoint under Rule 6", "the President", "a Bench of three Judges"], a: 1,
    s: "Rule 7, read with Rule 6.", r: "Rule 7" },
  { t: "osr-recruitment", q: "A Court servant who competes with outsiders after a general advertisement is treated, for probation, as:",
    o: ["a promotee", "a deputationist", "a direct recruit", "a temporary servant"], a: 2,
    s: "A direct recruit, so two years.", r: "Rule 7" },

  /* ---------------------------------------------------- penalties */
  { t: "osr-penalties", q: "How many penalties does Rule 11 list?",
    o: ["Five", "Six", "Nine", "Seven"], a: 3,
    s: "Censure, withholding, recovery, reduction, compulsory retirement, removal and dismissal.", r: "Rule 11" },
  { t: "osr-penalties", q: "Which is the mildest penalty in Rule 11?",
    o: ["Censure", "Withholding of increments", "Recovery from pay", "Reduction to a lower stage"], a: 0,
    s: "Censure comes first in the list.", r: "Rule 11" },
  { t: "osr-penalties", q: "Which of these IS a penalty under Rule 11?",
    o: ["Stoppage at the efficiency bar", "Reversion from an officiating post", "Recovery from pay of a loss caused by negligence", "Compulsory retirement under the superannuation rules"], a: 2,
    s: "The other three are expressly declared not to be penalties.", r: "Rule 11" },
  { t: "osr-penalties", q: "Which of these is NOT a penalty under Rule 11?",
    o: ["Withholding of an increment for failing a required departmental examination", "Censure", "Removal from service", "Dismissal from service"], a: 0,
    s: "Withholding an increment for failing a departmental examination is not a penalty.", r: "Rule 11" },
  { t: "osr-penalties", q: "Before reduction, compulsory retirement, removal or dismissal, the rules require:",
    o: ["an inquiry", "only an oral warning", "the President's sanction", "a vote of the full Court"], a: 0,
    s: "An inquiry, except in cases such as a conviction on a criminal charge.", r: "Procedure" },
  { t: "osr-penalties", q: "Before censure, withholding of increments or recovery from pay, the Court servant must be:",
    o: ["suspended", "informed in writing of the proposal and given an opportunity to make a representation", "heard by a Bench", "given three months' notice"], a: 1,
    s: "Notice and a representation; no full inquiry.", r: "Procedure" },
  { t: "osr-penalties", q: "The Registrar's power to impose penalties is subject to clauses (1) and (2) of:",
    o: ["Article 311", "Article 146", "Article 229", "Article 14"], a: 0,
    s: "Article 311(1) and (2), Rule 17 and any special orders of the Chief Justice.", r: "Disciplinary authorities" },
  { t: "osr-penalties", q: "Compulsory retirement, removal or dismissal can be imposed only by:",
    o: ["the Registrar in every case", "the appointing authority or an authority above it", "any gazetted officer", "the Bar Council"], a: 1,
    s: "The rule of Article 311(1), carried into the 1961 Rules.", r: "Disciplinary authorities" },
  { t: "osr-penalties", q: "A Court servant detained in custody for more than ___ is deemed suspended from the date of detention.",
    o: ["24 hours", "72 hours", "one week", "48 hours"], a: 3,
    s: "48 hours.", r: "Suspension" },
  { t: "osr-penalties", q: "Which of these needs a full inquiry before it is imposed?",
    o: ["Censure", "Withholding of increments", "Recovery from pay", "Dismissal from service"], a: 3,
    s: "Dismissal is at the heavy end; the other three need only notice and a representation.", r: "Procedure" },

  /* ---------------------------------------------------- appeals */
  { t: "osr-appeals", q: "An appeal against a penalty imposed by the Registrar lies to:",
    o: ["a Bench of three Judges", "the Chief Justice", "the Secretary General", "the President"], a: 1,
    s: "Rule 18(1).", r: "Rule 18(1)" },
  { t: "osr-appeals", q: "An appeal against a penalty imposed by the Chief Justice, not on appeal, lies to:",
    o: ["the President", "the full Court", "a Bench of not less than three Judges", "a Bench of five Judges"], a: 2,
    s: "Rule 18(2).", r: "Rule 18(2)" },
  { t: "osr-appeals", q: "An appeal under the 1961 Rules must be filed within:",
    o: ["fifteen days", "three months", "six months", "one month of receiving the order"], a: 3,
    s: "One month, with room for a late appeal on sufficient cause.", r: "Rules 18 to 22" },
  { t: "osr-appeals", q: "An appeal to the Chief Justice is submitted:",
    o: ["directly to the Chief Justice", "through the Bar Association", "through the Ministry of Law", "through the Registrar"], a: 3,
    s: "Through the Registrar, who then gives effect to the order passed on it.", r: "Rules 18 to 22" },
  { t: "osr-appeals", q: "Besides penalties, an appeal lies to the Chief Justice against a Registrar's order:",
    o: ["stopping a Court servant at the efficiency bar", "granting casual leave", "transferring a file", "fixing office hours"], a: 0,
    s: "Rule 19, which also covers an order reading a rule to the servant's disadvantage.", r: "Rule 19" },
  { t: "osr-appeals", q: "Under Rule 23, the Chief Justice may deal with a Court servant's case as he thinks just and reasonable, provided the servant is:",
    o: ["not treated less favourably than the rules provide", "heard by a Bench", "given a pay rise", "consulted in writing"], a: 0,
    s: "The residuary power has a floor: the rules themselves.", r: "Rule 23" },

  /* ---------------------------------------------------- conduct */
  { t: "osr-conduct", q: "Under Rule 26, a Court servant may NOT:",
    o: ["vote in elections", "join a recreation club", "be a member of a political party", "write a book"], a: 2,
    s: "Nor help outsiders into the court rooms or the Registry for political purposes.", r: "Rule 26" },
  { t: "osr-conduct", q: "Accepting a gift beyond a trifling value requires the previous permission of:",
    o: ["the Registrar", "the Chief Justice", "the President", "the Secretary of the Bar"], a: 0,
    s: "Rule 31.", r: "Rule 31" },
  { t: "osr-conduct", q: "Gifts of reasonable value may be accepted from relatives and personal friends on occasions such as:",
    o: ["promotions", "the end of a case", "weddings, anniversaries and funerals", "festivals only"], a: 2,
    s: "Rule 31.", r: "Rule 31" },
  { t: "osr-conduct", q: "Receiving a complimentary or valedictory address, or a testimonial, requires the previous permission of:",
    o: ["the Chief Justice", "the Bar Council", "no one", "the Registrar"], a: 3,
    s: "Rule 32, public demonstrations in honour of Court servants.", r: "Rule 32" },
  { t: "osr-conduct", q: "Rule 33 of the 1961 Rules deals with:",
    o: ["gifts", "private trade or employment", "insolvency", "political activity"], a: 1,
    s: "Private trade or employment, only with previous sanction. Gifts are 31, insolvency 35, politics 26.", r: "Rule 33" },
  { t: "osr-conduct", q: "A Court servant who becomes the subject of insolvency proceedings must report the facts at once to:",
    o: ["the Registrar", "the Chief Justice", "the police", "the bank"], a: 0,
    s: "Rule 35.", r: "Rule 35" },
  { t: "osr-conduct", q: "Under Rule 35, a Court servant must manage his private affairs so as to avoid:",
    o: ["habitual indebtedness or insolvency", "foreign travel", "membership of clubs", "owning a vehicle"], a: 0,
    s: "Rule 35, insolvency and habitual indebtedness.", r: "Rule 35" },
  { t: "osr-conduct", q: "Acquiring movable, immovable or valuable property is governed by:",
    o: ["Rule 31", "Rule 33", "Rule 36", "Rule 26"], a: 2,
    s: "Rule 36, which requires the previous knowledge of the authority it names.", r: "Rule 36" },
  { t: "osr-conduct", q: "A Court servant who breaks the conduct rules becomes liable to:",
    o: ["prosecution only", "disciplinary action under the rules on control and penalties", "a fine fixed by the Registrar", "nothing, since the rules are advisory"], a: 1,
    s: "Rule 46.", r: "Rule 46" },
  { t: "osr-conduct", q: "Rule 27 of the 1961 Rules concerns a Court servant's connection with:",
    o: ["political parties", "the press or radio", "trade unions", "the Bar"], a: 1,
    s: "Rule 27. Political parties are Rule 26.", r: "Rule 27" },

  /* ---------------------------------------------------- schedule and pay */
  { t: "osr-schedule", q: "The Junior Court Assistant post sits at which level of the pay matrix?",
    o: ["Level 4", "Level 7", "Level 8", "Level 6"], a: 3,
    s: "Level 6, initial basic pay ₹35,400 plus allowances.", r: "Schedule" },
  { t: "osr-schedule", q: "The initial basic pay of a Junior Court Assistant is:",
    o: ["₹29,200", "₹44,900", "₹35,400", "₹25,500"], a: 2,
    s: "₹35,400 at Level 6.", r: "Schedule" },
  { t: "osr-schedule", q: "A 2023 amendment to the Schedule renamed “Jamadar (Farash)” as:",
    o: ["Supervisor (Room)", "Chamber Attendant", "Court Attendant", "Junior Court Attendant"], a: 0,
    s: "Supervisor (Room).", r: "Schedule, 2023" },
  { t: "osr-schedule", q: "The Junior Court Assistant post is classed as:",
    o: ["Group A, gazetted", "Group B, non-gazetted", "Group C", "Group D"], a: 1,
    s: "Group B, non-gazetted, at Level 6.", r: "Schedule" }
  ]
};
