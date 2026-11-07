/* Tricks to remember: memory hooks for the two rule books of the JCA law
   paper, the Supreme Court Officers and Servants Rules, 1961 (s) and the
   Supreme Court Rules, 2013 (r).

   A trick is written over facts the site already holds and has checked: the
   notes and tables in data-jca-osr.js and data-jca-scr.js. Nothing in a
   trick's rows is new; a hook may add an image to hang a fact on (1857,
   a T20 match, the seven times table), and that image is never the fact.

     id     unique, and stable: practice sets and links use it
     t      the topic it belongs to, or "numbers" for the closing card
     k      the rules or Orders it covers, shown above the title
     h      what it helps you remember
     hook   the trick itself, in English; ==marks== set the key words
     hi     the same trick in one line of Hinglish
     short  one line, shown under an answered question
     rows   the facts it unlocks, [key, value]; covered in recall mode
     orders [first, last] instead of rows: that stretch of the 2013 Rules'
            own list of Orders, so the headings are never copied twice
     refs   the question references it answers ("Rule 11" takes
            "Rule 11(iii)", never "Rule 110")
     kw     where several tricks share a rule: words one of which the
            question or its answer must contain
     pri    a small bonus that settles a tie between two tricks          */

window.JCA_TRICKS = {

  /* ================================================ O&S Rules, 1961 */
  s: [

  /* ---------------------------------------------- the frame */
  { id: "osr-birth", t: "osr-basics", k: "Article 146(2), S.O. 142",
    h: "Who made the rules, under what, and when",
    hook: "Take ==Article 146(2)==, drop the 6, and you are left with the notification number, ==S.O. 142==. The ==Chief Justice of India== signed it on ==10 January 1961==; the Gazette printed it on ==4 August 1961==. It replaced the Rules of ==1951==, ten years older, and came into force ==at once==.",
    hi: "146(2) mein se 6 hatao, bacha 142: S.O. 142. Chief Justice ne 10 January 1961 ko banaye, Gazette mein 4 August 1961 ko chhape; 1951 waale rules ki jagah, turant laagu.",
    short: "Article 146(2), drop the 6: S.O. 142. Signed 10 January 1961, in the Gazette 4 August 1961.",
    rows: [
      ["Made by", "The Chief Justice of India"],
      ["Under", "Article 146(2) of the Constitution"],
      ["Notification", "S.O. 142, dated 10 January 1961"],
      ["Published", "In the Gazette of India, 4 August 1961"],
      ["Replaced", "The Supreme Court (Conditions of Service of Staff) Rules, 1951 (Rule 49)"],
      ["Rule 1", "They apply to all officers and servants of the Court, and came into force at once"]
    ],
    refs: ["Title", "Notification", "Art. 146(2)", "Rule 1", "Rule 1(2)"] },

  { id: "osr-145-146", t: "osr-basics", k: "Articles 145 and 146",
    h: "Five for Filing, Six for Staff",
    hook: "==Five for Filing==: Article 1==45== gives the Court its rules of practice and procedure, the ==2013 Rules==, made by the ==Court== with the President's approval. ==Six for Staff==: Article 1==46== gives the staff theirs, the ==1961 Rules==, made by the ==Chief Justice==. Inside 146, clause ==(1) hires== and clause ==(2) rules==, and the rules yield to ==any law Parliament makes==.",
    hi: "Five se Filing: 145, 2013 Rules, Court banata hai. Six se Staff: 146, 1961 Rules, Chief Justice banate hain. 146(1) bharti, 146(2) sharten; upar Parliament ka kaanoon.",
    short: "Five for Filing (Article 145, the 2013 Rules); Six for Staff (Article 146, the 1961 Rules).",
    rows: [
      ["Article 145", "Rules of practice and procedure, made by the Court with the President's approval: the 2013 Rules"],
      ["Article 146(1)", "Appointments to the staff: by the Chief Justice, or a Judge or officer he directs"],
      ["Article 146(2)", "Conditions of service: rules made by the Chief Justice, the 1961 Rules"],
      ["Subject to", "Any law made by Parliament"],
      ["Handed down", "The Chief Justice may authorise another Judge or officer of the Court to make the rules"],
      ["UPSC", "The President may require, by rule, that it be consulted before an outsider is appointed"]
    ],
    refs: ["Art. 146(1)", "Art. 146(2)"], kw: ["appointments", "upsc", "parliament", "besides the chief justice"] },

  { id: "osr-pals", t: "osr-basics", k: "Article 146(2), Rules 9, 47 and 48",
    h: "When the President must approve",
    hook: "The ==Chief Justice== makes, reads and fills in these rules alone, except where money and time off come in. The President guards only his ==PALS==: ==P==ensions, ==A==llowances, ==L==eave and ==S==alaries. The same four words return in the proviso to ==Article 146(2)==, in ==Rule 9== (changing the central rules), ==Rule 47== (residuary orders) and ==Rule 48== (interpretation).",
    hi: "President sirf apne PALS dekhte hain: Pension, Allowances, Leave, Salary. Baaki sab Chief Justice ka. Yahi chaar shabd 146(2), Rule 9, 47 aur 48 mein lautte hain.",
    short: "The President approves only his PALS: Pensions, Allowances, Leave, Salaries.",
    rows: [
      ["Article 146(2), proviso", "Rules on salaries, allowances, leave or pensions need the President's approval"],
      ["Rule 9, proviso", "Modifying the central rules on salaries, allowances, leave or pensions needs the President's approval"],
      ["Rule 47", "A residuary order on salaries, allowances, leave or pensions needs the President's approval"],
      ["Rule 48", "A question on a Part II rule about salaries, allowances, leave or pensions is decided with the President's approval"],
      ["Everything else", "The Chief Justice decides alone"]
    ],
    refs: ["Art. 146(2), proviso", "Rule 48, proviso", "Rule 9, proviso"] },

  { id: "osr-five-parts", t: "osr-basics", k: "Parts I to V",
    h: "The five Parts, and the rule each begins at",
    hook: "==G==ood ==S==ervants ==C==an't ==C==heat ==M==uch: ==G==eneral, ==S==trength, appointment and conditions of service, ==C==ontrol and discipline, ==C==onduct, ==M==iscellaneous. They begin at Rules ==1, 3, 10, 24 and 47==: discipline starts at a perfect ==10==, conduct at ==24== because it is a ==24-hour== duty, and the last three begin at ==47==.",
    hi: "Good Servants Can't Cheat Much: General, Service, Control, Conduct, Misc. Discipline perfect 10 se, conduct 24 ghante waala (Rule 24 se), aakhri teen 47 se.",
    short: "Good Servants Can't Cheat Much: the Parts begin at Rules 1, 3, 10, 24 and 47.",
    rows: [
      ["Part I, General", "Rules 1 and 2"],
      ["Part II, Strength, Appointment and Conditions of Service", "Rules 3 to 9"],
      ["Part III, Control and Discipline", "Rules 10 to 23"],
      ["Part IV, Conduct", "Rules 24 to 46"],
      ["Part V, Miscellaneous", "Rules 47 to 49"]
    ],
    refs: ["Arrangement", "Part III", "Part IV", "Part V"] },

  { id: "osr-borrowed", t: "osr-basics", k: "Rule 2",
    h: "Borrowed words, and the words defined at home",
    hook: "==Courtroom words are borrowed== from the courtroom's rule book; ==office words are defined at home==. Seven are borrowed from the ==Supreme Court Rules, 2013==: two C's (==Constitution, Court==), two judges (==Chief Justice, Judge==), one ==Registrar==, two advocates (==Advocate, Advocate on Record==). Court servant, post, deputation, Disciplinary Authority and family are the 1961 Rules' own.",
    hi: "Courtroom ke 7 shabd 2013 se udhaar: 2 C, 2 judge, 1 Registrar, 2 advocate. Office ke shabd (Court servant, post, deputation, family) 1961 ke apne.",
    short: "The seven courtroom words come from the 2013 Rules; the office words are defined in Rule 2 itself.",
    rows: [
      ["Rule 2(a), borrowed", "Constitution, Court, Chief Justice, Judge, Registrar, Advocate and Advocate on Record: as in the Supreme Court Rules, 2013"],
      ["Rule 2(b), Court servant", "Appointed to or borne on the cadre of the Court's staff shown in the Schedule"],
      ["Rule 2(c), post", "A post in Class I, II, III or IV, as the Schedule classes it"],
      ["Rule 2(f), Disciplinary Authority", "The authority competent under the rules to impose that penalty on that servant"]
    ],
    refs: ["Rule 2", "Rule 2(a)", "Rule 2(c)"] },

  { id: "osr-lend-borrow", t: "osr-basics", k: "Rule 2(d)",
    h: "Lending or Borrowing Authority",
    hook: "Both names belong to the ==outsider==; the Court is never called either. Ask what the outsider does with a servant: ==lends its own== to the Court, it is the ==Lending Authority==; ==borrows the Court's==, it is the ==Borrowing Authority==. Either way the loan is ==deputation==, and it is always ==temporary==.",
    hi: "Dono naam bahar waale ke: apna aadmi Court ko de to Lending, Court ka aadmi le to Borrowing. Deputation hamesha temporary.",
    short: "Both are outsiders: the one that lends its servant is the Lending Authority, the one that borrows the Court's is the Borrowing Authority.",
    rows: [
      ["Lending Authority", "An outside authority that lends one of its own servants to the Court"],
      ["Borrowing Authority", "An outside authority that borrows a Court servant"],
      ["Deputation, Rule 2(d)", "A temporary loan of a servant's services, either way"]
    ],
    refs: ["Rule 2", "Rule 2(d)"], kw: ["lending authority", "borrowing authority", "lends", "deputation"] },

  { id: "osr-family", t: "osr-basics", k: "Rule 2(g)",
    h: "Who counts as family",
    hook: "A ==wife, child or step child== is family ==wherever they live==. A woman servant's ==husband== passes only on ==two tests==: he ==lives with her== and ==depends on her==. Three are out, each lost a different way: the wife lost to ==legal separation==, the child lost to ==independence==, the child lost in ==custody== by law.",
    hi: "Biwi aur bachche hamesha family, saath rahein ya nahi. Pati sirf tab, jab saath rahe aur nirbhar ho. Bahar: alag hui biwi, apne pairon par khada baccha, custody mein haara baccha.",
    short: "Wife and children wherever they live; a husband only if he lives with her and depends on her.",
    rows: [
      ["Always family", "Wife, child or step child, living with him or not"],
      ["A woman servant's husband", "Only if he lives with her and depends on her"],
      ["Not family", "A legally separated wife; a child no longer dependent, or whose custody he has lost by law"]
    ],
    refs: ["Rule 2(g)"] },

  { id: "osr-47-49", t: "osr-basics", k: "Rules 47, 48 and 49",
    h: "The last three rules: Re, Re, Re",
    hook: "Part V is ==Re, Re, Re==: ==Re==siduary powers (==47==) fill the gaps, ==Re==ading the rules, that is interpretation (==48==), settles the doubts, and ==Re==peal (==49==) ends the 1951 Rules. In 47 and 48 the ==Chief Justice== decides, and in 48 his word is ==final==.",
    hi: "Aakhri teen Re, Re, Re: Residuary (47), REad yaani interpretation (48), REpeal (49). 47 aur 48 mein Chief Justice ka faisla; 48 mein final.",
    short: "Re, Re, Re: Residuary powers (47), Reading the rules (48), Repeal (49).",
    rows: [
      ["Rule 47, residuary powers", "The Chief Justice's orders on matters incidental or ancillary that the rules do not provide for, or not sufficiently"],
      ["Rule 48, interpretation", "Every question goes to the Chief Justice, whose decision is final"],
      ["Rule 49, repeal and savings", "The 1951 Rules repealed; orders made under them continue as made under these; pending proceedings carry on"]
    ],
    refs: ["Rule 47", "Rule 48", "Rule 49"] },

  { id: "osr-a-rules", t: "osr-basics", k: "Rules 4A, 14(1-A), 15(1)(aa) and 24A",
    h: "Every rule with an A came later",
    hook: "A number with an ==A== was squeezed in afterwards. Keep two apart: ==4A== is ==A==arakshan, reservation, inserted in ==2007== and substituted in ==July 2025==; ==24A== is ==A==lcohol, drinks and drugs, inserted in ==1985==. The older two: ==15(1)(aa)==, suspension for the ==security of the State==, 1968; ==14(1-A)==, an inquiry before a long withholding of ==increments==, 1971.",
    hi: "A waale rules baad mein jude: 4A = Aarakshan (2007, phir July 2025), 24A = Alcohol (1985), 15(1)(aa) = desh ki suraksha (1968), 14(1-A) = increments (1971).",
    short: "4A is Aarakshan (2007, again in 2025); 24A is Alcohol (1985).",
    rows: [
      ["15(1)(aa), 1968", "Suspension for activities prejudicial to the security of the State"],
      ["14(1-A), 1971", "An inquiry before withholding increments for long, cumulatively, or so as to hurt the pension"],
      ["24A, 1985", "Consumption of intoxicating drinks and drugs"],
      ["4A, 2007", "Reservation in direct recruitment, inserted"],
      ["4A, July 2025", "Substituted, adding Other Backward Classes (non-creamy layer)"]
    ],
    refs: ["Rule 4A", "Rule 24A"], kw: ["inserted", "substituted", "deals with", "provided for in"] },

  /* ---------------------------------------------- Part II */
  { id: "osr-part2", t: "osr-recruitment", k: "Rules 3 to 9",
    h: "Part II in order: a train booking",
    hook: "==P==lease ==M==ake ==R==eservations ==Q==uickly, ==A==ll ==P==assengers ==S==it ==C==omfortably: ==P==osts (3), ==M==ethod of recruitment (4), ==R==eservation (4A), ==Q==ualifications (5), ==A==ppointing authority (6), ==P==robation (7), ==S==eniority (8), ==C==onditions of service (9).",
    hi: "Train ki booking yaad karo: Please Make Reservations Quickly, All Passengers Sit Comfortably. 3 Post, 4 Method, 4A Reservation, 5 Qualification, 6 Appointing, 7 Probation, 8 Seniority, 9 Conditions.",
    short: "Please Make Reservations Quickly, All Passengers Sit Comfortably: Rules 3, 4, 4A, 5, 6, 7, 8, 9.",
    rows: [
      ["Rule 3", "Strength and composition of the staff"],
      ["Rule 4", "Method of recruitment"],
      ["Rule 4A", "Reservation in direct recruitment"],
      ["Rule 5", "Qualifications for appointment"],
      ["Rule 6", "Appointing authority"],
      ["Rule 7", "Probation"],
      ["Rule 8", "Seniority"],
      ["Rule 9", "Conditions of service"]
    ],
    refs: ["Rule 3", "Rule 4A", "Rule 5", "Rule 6", "Rule 8", "Rule 9"], kw: ["deals with", "governed by", "provided for in"] },

  { id: "osr-columns", t: "osr-recruitment", k: "The Schedule, columns 2 to 4",
    h: "What each column of the Schedule tells you",
    hook: "Read the columns as three questions: column ==2== asks ==what== (the post), column ==3== asks ==who can== (its qualifications, Rule 5), column ==4== asks ==how== (its method of recruitment, Rule 4). And ==4 goes with 4==: column 4 and Rule 4 are both the method. The Chief Justice may override ==3 and 4== by general or special order.",
    hi: "Column 2 kya (post), column 3 kaun (qualification), column 4 kaise (method). 4 ke saath 4: column 4 aur Rule 4 dono method.",
    short: "Column 2 what, column 3 who can, column 4 how; column 4 goes with Rule 4.",
    rows: [
      ["Column 2", "The post or class of posts"],
      ["Column 3", "Its qualifications (Rule 5)"],
      ["Column 4", "Its method of recruitment (Rule 4)"],
      ["Override", "The Chief Justice may set columns 3 and 4 aside by general or special order"]
    ],
    refs: ["Rule 5", "Rule 4(2)"], kw: ["column"] },

  { id: "osr-posts", t: "osr-recruitment", k: "Rule 3",
    h: "How freely the Chief Justice can create posts",
    hook: "The lower the class, the freer his hand. ==Class IV==: permanent posts ==in full==. ==Class III==: only where the scale tops out at ==Rs. 700== (set in ==1975==: both carry a 7). ==Temporary== posts in any class: for ==no more than two years==. And all of it under ==Rule 10 of the Book of Financial Powers==.",
    hi: "Class IV poora, Class III sirf Rs. 700 tak (1975 se, dono mein 7), temporary post 2 saal tak; sab Book of Financial Powers ke Rule 10 ke neeche.",
    short: "Class IV in full, Class III up to Rs. 700, temporary posts up to two years.",
    rows: [
      ["Decides and varies", "The number of permanent and temporary posts in Classes I to IV"],
      ["Permanent, Class IV", "May be created in full"],
      ["Permanent, Class III", "Only where the pay scale's maximum does not exceed Rs. 700"],
      ["Temporary, any class", "For a specified period not exceeding two years"],
      ["Always subject to", "Rule 10 of the Book of Financial Powers"]
    ],
    refs: ["Rule 3", "Rule 3(2), proviso"] },

  { id: "osr-methods", t: "osr-recruitment", k: "Rule 4",
    h: "The three ways into a post",
    hook: "Three doors: ==up from inside== (promotion), ==sideways from government== (transfer or deputation of someone serving the ==Union or a State==), and ==straight in from outside== (direct recruitment). A ==Junior Court Assistant== walks in through the third. Rule ==4(2)== lets the ==Chief Justice== choose another door, share the vacancies among the doors, and say how direct recruitment is done.",
    hi: "Teen darwaze: andar se upar (promotion), sarkar se side se (transfer ya deputation), bahar se seedha (direct). JCA seedha bahar se aata hai.",
    short: "Promotion from inside, transfer or deputation from government, direct recruitment from outside: a JCA comes in directly.",
    rows: [
      ["Promotion", "Of a person already employed in the Court"],
      ["Transfer or deputation", "Of a person serving outside the Court on the affairs of the Union or of a State"],
      ["Direct recruitment", "From outside; how a Junior Court Assistant post is filled"],
      ["Rule 4(2)", "The Chief Justice, by general or special order, may direct another method, fix each method's share of vacancies, and say how direct recruitment is made"]
    ],
    refs: ["Rule 4(1)", "Rule 4(2)"] },

  { id: "osr-reservation", t: "osr-recruitment", k: "Rule 4A",
    h: "Reservation: the numbers that are asked",
    hook: "==SC 15==, ==ST half of that, 7.5==, ==OBC 27==: together ==49.5==, just under half. They sit on a ==200-point, post-based== roster, as ==R. K. Sabharwal (1995)== requires. There is ==no EWS==, and Judges are outside it altogether. The 2007 list had five groups: ==S==ome ==S==oldiers ==P==rotect ==E==very ==F==rontier, for ==S==Cs, ==S==Ts, the ==P==hysically challenged, ==E==x-servicemen and the dependants of ==F==reedom fighters.",
    hi: "SC 15, ST uska aadha 7.5, OBC 27: jod 49.5, aadhe se kam. 200-point roster, Sabharwal (1995). EWS nahi, Judges bahar. 2007 ki list: Some Soldiers Protect Every Frontier.",
    short: "SC 15, ST 7.5, OBC 27 on a 200-point, post-based roster; no EWS.",
    rows: [
      ["2007 text", "Scheduled Castes, Scheduled Tribes, the physically challenged, ex-servicemen and dependants of freedom fighters, as Government of India orders provide"],
      ["July 2025", "Rule 4A substituted, adding Other Backward Classes (non-creamy layer)"],
      ["June 2025 roster", "15 per cent Scheduled Castes, 7.5 per cent Scheduled Tribes; 200 points, post-based"],
      ["August 2025 roster", "Adds 27 per cent for Other Backward Classes"],
      ["Why post-based", "R. K. Sabharwal (1995)"],
      ["Not covered", "Economically Weaker Sections; and Judges, whose appointment is not a staff appointment"]
    ],
    refs: ["Rule 4A", "Roster, 2025"] },

  { id: "osr-probation", t: "osr-recruitment", k: "Rule 7",
    h: "Probation: do saal, or one",
    hook: "==Direct== recruit: ==do saal==, two years. ==Promotee==: ==one== year, because the Court already knows him. An insider who ==competes with outsiders== after an open advertisement is judged as an outsider: ==two years==. And ==6 controls 7==: the appointing authority under Rule 6 may ==extend or reduce== the period.",
    hi: "Direct = DO saal. Promotion = ek saal (pehle se jaante hain). Bahar waalon se compete kiya to direct, do saal. Rule 6 waala ghata ya badha sakta hai.",
    short: "Direct recruit: do saal, two years; promotee: one year.",
    rows: [
      ["Direct recruit", "Two years"],
      ["Promotee", "One year"],
      ["An insider who answered an open advertisement", "Treated as a direct recruit: two years"],
      ["Who may extend or reduce it", "The authority competent to appoint under Rule 6"]
    ],
    refs: ["Rule 7"] },

  { id: "osr-appoints", t: "osr-recruitment", k: "Rules 6 and 8",
    h: "Who appoints, and who sets seniority",
    hook: "Every appointment is the ==Chief Justice's==, in his ==absolute discretion== (Rule 6). He may pass the power on, by a ==general or special order==, to another person ==Article 146(1)== names. Seniority (Rule 8) is ==his provision== too. In Part II, when the question is ==who==, the answer is nearly always the Chief Justice.",
    hi: "Har appointment Chief Justice ki, absolute discretion se; general ya special order se Article 146(1) waale kisi aur ko de sakte hain. Seniority bhi unke banaye niyam se.",
    short: "All appointments: the Chief Justice, in his absolute discretion.",
    rows: [
      ["Rule 6", "All appointments: the Chief Justice, in his absolute discretion"],
      ["Rule 6, proviso", "By general or special order he may direct another person named in Article 146(1) to appoint"],
      ["Rule 8", "Seniority: by the provisions the Chief Justice makes by general or special order"]
    ],
    refs: ["Rule 6", "Rule 8"] },

  { id: "osr-rule9", t: "osr-recruitment", k: "Rule 9",
    h: "Where the 1961 Rules are silent",
    hook: "Rule ==9==, the last of Part II, is the ==safety net==. No provision, or not enough? Use the ==Government of India's rules for the corresponding post==, with the Chief Justice's changes. Two strings: a change that touches the ==PALS== (pensions, allowances, leave, salaries) needs the ==President==, and the powers those rules give the President are used here by the ==Chief Justice==.",
    hi: "Rule 9 = safety net: 1961 chup ho to Government of India ke rules, barabar ki post ke. PALS badalne ke liye President; President waali shaktiyan yahan Chief Justice chalaate hain.",
    short: "Rule 9: where these rules are silent, the Government of India's rules for the corresponding post apply.",
    rows: [
      ["Rule 9", "No provision, or not enough: the Government of India's rules and orders for corresponding posts, with the Chief Justice's changes"],
      ["First proviso", "A change on salaries, allowances, leave or pensions needs the President's approval"],
      ["Second proviso", "Powers those rules give the President, or an authority under him, are used by the Chief Justice or a person he directs"]
    ],
    refs: ["Rule 9"] },

  /* ---------------------------------------------- the Schedule */
  { id: "osr-pay", t: "osr-schedule", k: "The Schedule and the pay matrix",
    h: "The pay ladder from JCA up",
    hook: "The ladder climbs ==6, 7, 8==: Junior Court Assistant, Court Assistant, Senior Court Assistant. Then it jumps to ==11== for the twins, ==Court Master and Branch Officer==, ==12== for the Assistant Registrar, and ==17== for the ==Secretary General==. The JCA's pay is easy: a ==35==-mark law paper for ==₹35,400==. Higher up, read ₹67,700 as ==6, then 77==, and ₹78,800 as ==7, then 88==.",
    hi: "6-7-8, phir seedha 11 (Court Master aur Branch Officer judwa), 12 Assistant Registrar, 17 Secretary General. JCA: 35 marks ka law paper, ₹35,400 tankhwah.",
    short: "JCA at Level 6 (₹35,400), then Levels 7, 8, 11, 12, and the Secretary General at 17.",
    rows: [
      ["Junior Court Assistant", "Level 6, ₹35,400; Group B, non-gazetted; direct recruitment"],
      ["Court Assistant", "Level 7, ₹44,900"],
      ["Senior Court Assistant", "Level 8, ₹47,600"],
      ["Court Master, Branch Officer", "Level 11, ₹67,700"],
      ["Assistant Registrar", "Level 12, ₹78,800"],
      ["Secretary General", "Level 17"],
      ["Gazetted", "A Court Master (Shorthand) is; a Junior Court Assistant is not"]
    ],
    refs: ["Schedule", "Pay matrix"] },

  { id: "osr-farash", t: "osr-schedule", k: "The Schedule, 2023",
    h: "The 2023 renaming",
    hook: "A ==farash== is the one who spreads the floor coverings, so the new name keeps the place and drops the floor: ==Jamadar (Farash)== became ==Supervisor (Room)== in ==2023==.",
    hi: "Farsh se Room: Jamadar (Farash) ab Supervisor (Room), 2023 mein.",
    short: "Jamadar (Farash) became Supervisor (Room) in 2023.",
    rows: [
      ["2023 amendment", "Jamadar (Farash) renamed Supervisor (Room)"],
      ["Where", "The Jamadar posts at categories 56 and 57 of the Schedule"]
    ],
    refs: ["Schedule, 2023"] },

  /* ---------------------------------------------- penalties */
  { id: "osr-seven", t: "osr-penalties", k: "Rule 11",
    h: "The seven penalties, in order",
    hook: "Minor three: “==Can We Recover?==” ==C==ensure, ==W==ithholding (of increments or promotion), ==R==ecovery from pay; yes, the career recovers. Major four go on your “==ReCoRD==”: ==Re==duction in rank, ==Co==mpulsory retirement, ==R==emoval, ==D==ismissal. Mildest first, ==censure==; gravest last, ==dismissal==: ==3 minor and 4 major make 7==.",
    hi: "Chhoti teen: Can We Recover? (Censure, Withholding, Recovery). Badi chaar: ReCoRD kharab (Reduction, Compulsory retirement, Removal, Dismissal).",
    short: "Minor: Can We Recover? Major: it goes on your ReCoRD.",
    rows: [
      ["(i) Censure", "Minor; the mildest"],
      ["(ii) Withholding", "Minor; of increments or of promotion"],
      ["(iii) Recovery from pay", "Minor; of a pecuniary loss caused to the Registry by negligence or breach of orders"],
      ["(iv) Reduction in rank", "Major; to a lower post or time scale, or a lower stage in the time scale"],
      ["(v) Compulsory retirement", "Major; as a penalty"],
      ["(vi) Removal from service", "Major"],
      ["(vii) Dismissal from service", "Major; the gravest"],
      ["Imposed", "For good and sufficient reasons"]
    ],
    refs: ["Rule 11", "Rule 11(iii)", "Rules 11 and 14"] },

  { id: "osr-removal", t: "osr-penalties", k: "Rule 11 (vi) and (vii), Rule 12",
    h: "Removal or dismissal",
    hook: "==Re==moval: ==Re==-employable, no bar to a future job. ==Dis==missal: ==Dis==qualified, ordinarily a bar. Either one comes only from the ==appointing authority or above==: whoever brought you in, or someone higher, shows you out.",
    hi: "REmoval = REmployable, phir naukri mil sakti hai. DISmissal = DISqualified, aam taur par nahi. Nikaal wahi sakta hai jisne rakha, ya usse upar.",
    short: "Removal: re-employable. Dismissal: ordinarily disqualified.",
    rows: [
      ["(vi) Removal from service", "Not a disqualification for future employment"],
      ["(vii) Dismissal from service", "Ordinarily a disqualification for future employment"],
      ["Compulsory retirement, removal, dismissal", "Never by an authority lower than the appointing authority (Rule 12, proviso)"]
    ],
    refs: ["Rule 11(vi)", "Rule 11(vii)", "Rule 12, proviso"] },

  { id: "osr-not-penalty", t: "osr-penalties", k: "Rule 11, Explanations",
    h: "What is not a penalty",
    hook: "A penalty needs a fault. If it could happen to anyone, it is ==not a penalty==. ==3 Ends==: the end of ==probation==, of a ==temporary== term, of a ==loan== (sent back to the lender). ==3 E's==: stopped at the ==Efficiency bar==, a failed departmental ==Exam==, not s==E==lected for a selection post. ==2 R's==: ==Reversion== from an officiating post, ==Retirement== on superannuation.",
    hi: "Galti nahi to saza nahi. 3 End (probation, temporary, loan wapas), 3 E (Efficiency bar, Exam fail, sElection nahi), 2 R (Reversion, Retirement).",
    short: "Not penalties: 3 Ends, 3 E's and 2 R's.",
    rows: [
      ["Explanation 1", "Ending or reverting a probationer; ending a temporary term by its terms; sending a borrowed servant back"],
      ["Explanation 2", "Stopped at the efficiency bar as unfit to cross it"],
      ["Explanation 3", "Not promoted to a selection post, after due consideration"],
      ["Explanation 4", "Reverted from an officiating post, after a trial or for administrative reasons"],
      ["Explanation 5", "Compulsory retirement under the superannuation or retirement provisions"],
      ["Explanation 6", "Increments withheld for failing a departmental examination"]
    ],
    refs: ["Rule 11"], kw: ["not a penalty", "explanation", "no reduction", "does not amount"] },

  { id: "osr-who-punishes", t: "osr-penalties", k: "Rules 10 and 12",
    h: "Who can punish whom",
    hook: "The ==Chief Justice== controls everyone (Rule 10) and may impose ==any penalty on anyone==, the Registrar included. The ==Registrar== may punish ==everyone but Class I==. Being lower, the Registrar carries ==more chains==: Article 311 clauses ==(1) and (2)==, Rule 17, and the Chief Justice's ==special orders==; the Chief Justice carries only ==311(2)== and Rule 17.",
    hi: "Chief Justice sab ko saza de sakte hain, Registrar ko bhi. Registrar sab ko, Class I chhod kar. Registrar par zyada bandish: 311(1) aur (2), Rule 17, CJ ke special orders.",
    short: "The Chief Justice may punish anyone; the Registrar anyone outside Class I.",
    rows: [
      ["Rule 10", "Every Court servant is under the superintendence and control of the Chief Justice"],
      ["Rule 12(1), the Chief Justice", "Any penalty on anyone, the Registrar included; subject to Article 311(2) and Rule 17"],
      ["Rule 12(2), the Registrar", "Any penalty on anyone outside Class I; subject to Article 311(1) and (2), Rule 17 and the Chief Justice's special orders"]
    ],
    refs: ["Rule 10", "Rule 12"] },

  { id: "osr-311", t: "osr-penalties", k: "Article 311",
    h: "Article 311: who, how, and when not",
    hook: "Clause ==(1) is who==: no dismissal or removal by an authority ==below the one that appointed==. Clause ==(2) is how==: the ==charges==, and a ==reasonable opportunity of being heard==. The inquiry may be skipped three times, ==C, P, S==: a criminal ==Conviction==, an inquiry not reasonably ==Practicable== (reasons recorded), or the ==Security of the State==.",
    hi: "311(1) = kaun (appoint karne waale se neeche nahi). 311(2) = kaise (charge aur sunwai). Inquiry ke bina: Conviction, Practicable nahi, State ki Security.",
    short: "311(1) who, 311(2) how; skip the inquiry for Conviction, not Practicable, Security.",
    rows: [
      ["311(1)", "No dismissal or removal by an authority subordinate to the one that appointed"],
      ["311(2)", "An inquiry: told the charges, with a reasonable opportunity of being heard"],
      ["No inquiry", "A criminal conviction; not reasonably practicable, reasons recorded; the security of the State"]
    ],
    refs: ["Art. 311(1)", "Art. 311(2)"] },

  /* ---------------------------------------------- procedure */
  { id: "osr-13-14", t: "osr-procedure", k: "Rules 13 and 14",
    h: "Major is 13, minor is 14",
    hook: "==Unlucky 13== is the big trouble: a ==major== penalty, (iv) to (vii), only after a ==full inquiry==. ==14== is the small one: a ==minor== penalty needs a ==written notice== of the proposal and the allegations, and a ==representation== that is considered. One minor acts major: withholding increments ==for over three years==, ==cumulatively==, or so as to ==hurt the pension== needs the Rule 13 inquiry (==14(1-A)==, 1971).",
    hi: "13 manhoos number = badi saza, poori inquiry. 14 = chhoti saza, likhit notice aur jawab. Par 3 saal se zyada, cumulative, ya pension par asar: 14 bhi 13 ban jaata hai.",
    short: "Unlucky 13: a major penalty, a full inquiry. 14: a minor penalty, notice and a representation.",
    rows: [
      ["Rule 13, major", "Reduction, compulsory retirement, removal, dismissal, (iv) to (vii): only after an inquiry"],
      ["Rule 14, minor", "Censure, withholding, recovery: told in writing of the proposal and allegations; a representation, considered"],
      ["Rule 14(1-A), 1971", "Increments withheld for over three years, cumulatively, or so as to hurt the pension: an inquiry under Rule 13(2) to (12)"],
      ["Rule 14(2), the record", "The intimation, the statement of allegations, the representation, the orders with reasons"]
    ],
    refs: ["Rule 13", "Rule 13(1)", "Rule 14", "Rules 11 and 14"] },

  { id: "osr-inquiry", t: "osr-procedure", k: "Rule 13(2) to (12)",
    h: "The inquiry is a fair fight",
    hook: "Picture a fair fight: the ==charge== sheet (definite charges and a statement of allegations), the ==defence== (in writing, and heard in person if he wishes), the ==papers== (inspect the records, unless refused for recorded reasons), the ==referee== (the Disciplinary Authority itself, a ==Board of Inquiry== or an ==Inquiring Officer==), the ==seconds== (a ==colleague== the authority approves; a ==lawyer only if the other side has one==, or with permission), the ==witnesses== (cross-examined), the ==verdict== (findings on ==each charge==, with reasons), then ==show cause==: a copy of the report, notice of the proposed penalty, and a representation.",
    hi: "Inquiry ek imaandar kushti: charge, jawab, kaagaz, referee (khud authority, Board ya Inquiring Officer), madadgaar saathi (lawyer tabhi jab saamne waala bhi lawyer ho), gawah, faisla, phir show cause.",
    short: "A fair fight: a colleague may help; a lawyer only if the presenter is one, or with permission.",
    rows: [
      ["Charges, (2)", "Definite charges and a statement of allegations, in writing"],
      ["Defence, (2)", "A written statement within the time fixed; heard in person if he wishes"],
      ["Records, (3)", "Inspection and extracts, unless refused for reasons recorded: not relevant, or against the public interest"],
      ["Who inquires, (4)", "The Disciplinary Authority itself, a Board of Inquiry or an Inquiring Officer"],
      ["Help, (5)", "Another Court servant the Disciplinary Authority approves; a lawyer only if the presenter is one, or with permission"],
      ["Witnesses, (6)", "Cross-examination; reasons recorded for refusing a witness as irrelevant"],
      ["Report, (7)", "Findings on each charge, with reasons; a charge not framed only if he admitted the facts or could defend himself"],
      ["Show cause, (10)", "A copy of the report, reasons for any disagreement, notice of the proposed action, a representation"],
      ["Order, (12)", "Communicated to him with the report"]
    ],
    refs: ["Rule 13(2)", "Rule 13(3)", "Rule 13(4)", "Rule 13(5)", "Rule 13(6)", "Rule 13(7)", "Rule 13(10)"] },

  { id: "osr-conviction", t: "osr-procedure", k: "Rules 13(11) and 45",
    h: "A conviction speaks for itself",
    hook: "A ==conviction speaks for itself==. Rule ==13(11)== lets the procedure be ==waived== for conduct that led to a ==conviction on a criminal charge==, or where a chance to show cause is ==not reasonably practicable==, with ==reasons in writing==. Rule ==45== goes further: after a conviction in a court of law he may be punished ==on that conviction alone==.",
    hi: "Conviction khud bolta hai: Rule 13(11) mein inquiry chhod sakte hain (conviction, ya practicable nahi, likhit kaaran ke saath). Rule 45: sirf conviction par saza.",
    short: "A conviction speaks for itself: Rule 13(11) waives the inquiry; Rule 45 punishes on the conviction alone.",
    rows: [
      ["Rule 13(11)", "Waived for conduct that led to a conviction on a criminal charge, or where showing cause is not reasonably practicable; reasons in writing"],
      ["Rule 45", "After a conviction in a court of law, punishment on that conviction alone, without a departmental inquiry"]
    ],
    refs: ["Rule 13(11)"] },

  { id: "osr-suspension", t: "osr-procedure", k: "Rule 15",
    h: "Suspension: three cases and 48 hours",
    hook: "Suspend for one of ==three cases==: a case at the ==office== (a disciplinary proceeding contemplated or pending), a case against the ==country== (activities against the ==security of the State==), a case in ==court== (a criminal case under investigation or trial). ==More than 48 hours== in custody, two whole days, suspends him ==automatically==, from the ==date of detention==, by the ==Chief Justice's== order.",
    hi: "Suspension ke teen case: office ka (disciplinary), desh ka (State ki suraksha), court ka (criminal). 48 ghante se zyada hawalaat = apne aap suspended, detention ki taarikh se, Chief Justice ke order se.",
    short: "Three cases: office, country, court. More than 48 hours in custody: deemed suspended from the date of detention.",
    rows: [
      ["15(1)(a)", "A disciplinary proceeding contemplated or pending"],
      ["15(1)(aa)", "Activities prejudicial to the security of the State"],
      ["15(1)(b)", "A criminal case under investigation or trial"],
      ["15(2), deemed", "In custody more than 48 hours: suspended from the date of detention, by the Chief Justice's order"],
      ["15(3) and (4)", "A dismissal, removal or compulsory retirement set aside, with the case remitted or a further inquiry: suspended from the original order"],
      ["15(5)", "Revocable by the authority that made it, or any authority it is subordinate to"],
      ["On deputation", "Lent out: the Borrowing Authority is asked to suspend him. Lent in: the Registrar informs the Lending Authority"]
    ],
    refs: ["Rule 15"] },

  { id: "osr-loan", t: "osr-procedure", k: "Rules 16 and 17",
    h: "Servants on loan: 16 out, 17 in",
    hook: "==16 goes out, 17 comes in==: Rule 16 is the Court's servant ==lent out==, Rule 17 an outsider's servant ==lent in==. One rule serves both: a ==minor== penalty is decided where he works, ==after consulting the owner==, and if they ==disagree==, he goes ==back home==. A ==major== penalty is never decided away: he is ==sent back== with the record.",
    hi: "16 bahar gaya (Court ka aadmi), 17 andar aaya (bahar ka aadmi). Chhoti saza: jahan kaam kar raha wahan faisla, maalik se pooch kar; jhagda ho to ghar wapas. Badi saza: seedha ghar wapas.",
    short: "16 out, 17 in: a minor penalty where he works, after consulting the owner; a major one, sent back.",
    rows: [
      ["Rule 16, lent out, minor", "The Borrowing Authority decides, in consultation with the Court"],
      ["Rule 16, lent out, major", "Sent back to the Court with the record; the Court's Disciplinary Authority decides"],
      ["Rule 17, lent in, minor", "The Court's Disciplinary Authority decides, after consulting the Lending Authority"],
      ["Rule 17, lent in, major", "Sent back to the Lending Authority with the record, for it to act"],
      ["A disagreement on a minor penalty", "He goes back to the body that lent him"]
    ],
    refs: ["Rules 16 and 17", "Rule 16", "Rule 17"] },

  /* ---------------------------------------------- appeals */
  { id: "osr-appeals", t: "osr-appeals", k: "Rules 18 to 23",
    h: "Appeals: one step up, and the T20 rule",
    hook: "An appeal climbs ==one step up==: a penalty from the ==Registrar== goes to the ==Chief Justice==; one from the ==Chief Justice== himself goes to a ==Bench of at least three Judges==. Rule ==20== is the ==T20== rule, the short format: ==one month== from receiving the order, later only for ==sufficient cause==. ==Addressed== up to the Chief Justice, ==handed in== to the Registrar (21), and ==carried out== by the Registrar (22).",
    hi: "Appeal ek seedhi upar: Registrar ki saza par CJ, CJ ki saza par 3 Judges ki Bench. Rule 20 = T20, chhota format: ek mahina. Address CJ ko, jama Registrar ko, amal bhi Registrar karta hai.",
    short: "One step up: Registrar to Chief Justice, Chief Justice to three Judges; Rule 20, the T20 rule: one month.",
    rows: [
      ["Rule 18(1)", "A penalty by the Registrar: appeal to the Chief Justice"],
      ["Rule 18(2)", "A penalty by the Chief Justice, not on appeal: a Bench of not less than three Judges"],
      ["Rule 19", "Also to the Chief Justice: a Registrar's order stopping him at the efficiency bar, or reading a rule to his disadvantage"],
      ["Rule 20", "One month from receiving the order; later if there was sufficient cause"],
      ["Rule 21", "Addressed to the Chief Justice, submitted to the Registrar; complete in itself, without improper language"],
      ["Rule 22", "The Registrar gives effect to the orders in appeals under Rule 18"],
      ["Rule 23", "The Chief Justice may deal with a case as just and reasonable, never less favourably than the rules"]
    ],
    refs: ["Rule 18", "Rule 19", "Rule 20", "Rule 21", "Rule 22", "Rule 23"] },

  /* ---------------------------------------------- conduct, 24 to 33 */
  { id: "osr-24-33", t: "osr-conduct", k: "Rules 24 to 33",
    h: "Rules 24 to 33 by their numbers",
    hook: "Hang each number on something you know. ==24==: integrity ==24 hours== a day. ==24A==: ==A==lcohol. ==25==: ==Christmas==, a day off, so absence. ==26==: ==26 January==, so politics and elections. ==27, 28 and 29== are the speaking rules: 27 ==writes== (press, radio, books), 28 ==testifies== (committees), 29 ==leaks== (29 February, the leap day: the leak day). ==30==: ==chanda==, subscriptions. ==31==: ==31 December==, gifts. ==32==: the ==farewell== after the gift, honours. ==33==: two 3's side by side, ==two jobs==, private trade.",
    hi: "24 ghante imaandaari, 24A Alcohol, 25 Christmas ki chhutti (absence), 26 January (rajneeti, chunav), 27 likhna (press), 28 gawahi (committee), 29 leak (29 February), 30 chanda, 31 December ke gift, 32 vidaai aur samman, 33 do naukri (side business).",
    short: "24 round the clock, 25 Christmas absence, 26 January politics, 29 the leak day, 31 December gifts.",
    rows: [
      ["24", "General: absolute integrity and devotion to duty at all times"],
      ["24A", "Consumption of intoxicating drinks and drugs"],
      ["25", "Absence from duty"],
      ["26", "Taking part in politics and elections"],
      ["27", "Connection with press or radio"],
      ["28", "Evidence before committees"],
      ["29", "Unauthorised communication of information"],
      ["30", "Collecting subscriptions for public causes"],
      ["31", "Gifts"],
      ["32", "Public demonstrations in honour of Court servants"],
      ["33", "Private trade or employment"]
    ],
    refs: ["Rule 24", "Rule 24A", "Rule 25", "Rule 26", "Rule 27", "Rule 28", "Rule 29", "Rule 30", "Rule 31", "Rule 32", "Rule 33"],
    kw: ["deals with", "dealt with in", "concerns", "governs", "forbids:", "which rule"] },

  { id: "osr-permission", t: "osr-conduct", k: "Whose permission",
    h: "Whose permission: the Registrar, nearly always",
    hook: "Default answer: the ==Registrar==. Only ==two== go to the ==Chief Justice==: ==evidence before a public committee== (28), and anything the ==Registrar himself== needs (46). Three odd words: ==previous knowledge== for land and houses (36), the ==competent authority's previous sanction== for a barred money dealing (34), and the Registrar's ==express== permission for the two physical things, ==a home shared with an Advocate== (39) and ==Court property taken out== (44).",
    hi: "Permission = Registrar. Sirf do jagah Chief Justice: committee ke aage gawahi (28) aur Registrar ki apni permission (46). Advocate ke saath ek ghar (39) aur Court ka saamaan bahar (44): express permission.",
    short: "The Registrar gives nearly every permission; the Chief Justice only for committees (28) and the Registrar's own (46).",
    rows: [
      ["The Registrar's previous permission", "Press or radio (27), gifts (31), honours (32), trade or employment (33), going to court or the press over an official act (37)"],
      ["The Registrar's permission", "Subscriptions for public causes (30); taking a grievance to the Chief Justice (40)"],
      ["The Registrar's express permission", "Sharing a home with an Advocate (39); taking Court property out (44)"],
      ["The Chief Justice's previous permission", "Evidence before a public committee (28); whatever the Registrar himself needs under Part IV (46)"],
      ["The competent authority's previous sanction", "A money dealing Rule 34(4) would otherwise bar"],
      ["Previous knowledge", "Acquiring or disposing of immovable property (36(1))"]
    ],
    refs: ["Rule 27", "Rule 28", "Rule 30", "Rule 31", "Rule 32", "Rule 33", "Rule 37", "Rule 39", "Rule 40", "Rule 44", "Rule 46"],
    kw: ["permission", "previous sanction", "previous knowledge"] },

  { id: "osr-free", t: "osr-conduct", k: "Rules 26 to 33",
    h: "What needs no permission",
    hook: "Each rule leaves a small ==free zone==. ==26==: you may ==vote==, showing nothing, and do ==election duty==. ==27==: a book through a ==publisher==, or anything ==purely literary, artistic or scientific== (==LAS==). ==28==: a committee that can ==compel attendance==, or a ==judicial or departmental inquiry==. ==31==: reasonable gifts from relations and friends at ==weddings, anniversaries, funerals and religious functions==. ==32==: a ==private, informal farewell== on retirement or transfer. ==33==: ==honorary social or charitable== work, and occasional ==LAS== work with ==educational and cultural== added.",
    hi: "Free zone: chup-chaap vote aur election duty; publisher se kitaab, ya LAS (literary, artistic, scientific); 4 S mauke par rishtedaar aur dost ke gift (Shaadi, Saalgirah, Shok, Shubh avsar); retirement ya transfer par ghar jaisi vidaai; seva ka kaam.",
    short: "Free: a silent vote, LAS writing, wedding and funeral gifts, a private farewell, honorary work.",
    rows: [
      ["26", "Voting, with no sign of how; election duty imposed by law"],
      ["27", "A book through a publisher; a purely literary, artistic or scientific contribution, broadcast or writing"],
      ["28", "Evidence before a committee that can compel attendance, or at a judicial or departmental inquiry"],
      ["31", "Gifts of reasonable value from or to relations and personal friends at weddings, anniversaries, funerals and religious functions"],
      ["32", "A private, informal farewell on retirement or transfer; simple, inexpensive entertainments by public bodies"],
      ["33", "Honorary social or charitable work; occasional literary, artistic, scientific, educational or cultural work, if duties do not suffer"]
    ],
    refs: ["Rule 26, proviso", "Rule 27", "Rule 28(2)", "Rule 31", "Rule 32, proviso", "Rule 33, proviso"],
    kw: ["no permission", "without permission", "may vote", "does not breach", "may be accepted"], pri: 5 },

  { id: "osr-sober", t: "osr-conduct", k: "Rules 24, 24A and 25",
    h: "Be honest, sober and present",
    hook: "==24==: absolute ==integrity and devotion== at all times, nothing against ==discipline and good order in the Registry==. ==24A==: obey the drink laws ==wherever he happens to be==; never ==under the influence on duty==, never ==drinking in a public place==, never ==seen there drunk==, never to ==excess==; a bus or a taxi is a public place too, ==paid for or not==. ==25==: be ==punctual==; ==sudden illness==? send word ==without delay==; sick leave over ==three days== needs a ==registered medical practitioner's certificate==.",
    hi: "24: hamesha imaandaari aur lagan. 24A: jahan bhi ho wahan ka kaanoon; duty par nasha nahi, public mein peena nahi; bus aur taxi bhi public place. 25: samay par aao; 3 din se zyada beemari ki chhutti = doctor ka certificate.",
    short: "24A: sober on duty and in public, a paid conveyance included. 25: sick leave over three days needs a certificate.",
    rows: [
      ["24", "Absolute integrity and devotion to duty; nothing prejudicial to discipline and good order in the Registry"],
      ["24A, the law", "Obey the laws on drinks and drugs in force wherever he happens to be"],
      ["24A, the bars", "Never under their influence on duty; no drinking in a public place; never there intoxicated; never to excess"],
      ["24A, public place", "Any place or premises, a conveyance included, the public may enter, on payment or otherwise"],
      ["25", "Punctual; no absence without previous permission, except sudden illness or the unforeseen, reported without delay"],
      ["25(3)", "Sick leave of more than three days: a certificate from a registered medical practitioner"]
    ],
    refs: ["Rule 24", "Rule 24A", "Rule 25"] },

  { id: "osr-politics", t: "osr-conduct", k: "Rules 26 and 29",
    h: "Vote, say nothing; only the Registrar meets the Press",
    hook: "Rule ==26==: ==vote with your finger, not your flag==. He may vote but give ==no sign== of how; no party ==membership== or association; no ==canvassing== in an election to ==any legislature or local authority==; and an ==electoral symbol== on his person, vehicle or home counts as ==using influence==. Rule ==29==: only the ==Registrar meets the Press== (or an officer the Chief Justice authorises) and sends the Chief Justice the ==gist==; handing out ==judgments== is exempt; ==quoting a file== you may not see is a leak.",
    hi: "26: ungli se vote do, jhanda mat uthao. Party member nahi, chunav prachaar nahi; chunav chinh lagaya to prabhav daalna. 29: Press se sirf Registrar milenge; judgment dena chhoot; chhupi file quote karna leak hai.",
    short: "26: vote with your finger, not your flag. 29: only the Registrar meets the Press.",
    rows: [
      ["26(1)", "No membership of, or association with, a political party; no help to any political movement"],
      ["26(2)", "No canvassing, interference or influence in an election to any legislature or local authority"],
      ["26, proviso", "May vote, giving no sign how; election duty imposed by law is no breach"],
      ["26, the symbol", "Displaying an electoral symbol on his person, vehicle or residence is using influence"],
      ["29", "No official document or information to anyone, except by order or in good-faith duty"],
      ["29, proviso", "Only the Registrar meets the Press, unless the Chief Justice authorises another; the gist goes to the Chief Justice; judgments are exempt"],
      ["29, Explanation", "Quoting, in a representation, a file one may not see is unauthorised communication"]
    ],
    refs: ["Rule 26", "Rule 29"] },

  { id: "osr-30-33", t: "osr-conduct", k: "Rules 30 to 33",
    h: "Chanda, gifts, honours and side jobs",
    hook: "==30==: no ==chanda== for public causes without the Registrar, and no ==outsider brought into a Court room or the Registry== for it. ==31==: nothing beyond ==trifling value==, to him or his ==family==, without the Registrar's previous permission. ==32==: no ==address, testimonial, meeting or party== in his honour without it. ==33==: no ==trade, business or employment== without it, and canvassing for an ==insurance agency== his ==wife== runs is a breach.",
    hi: "30 chanda nahi, 31 trifling se zyada gift nahi (family ko bhi nahi), 32 samman aur party nahi, 33 side business nahi; biwi ki insurance agency ke liye prachaar bhi nahi. Sab mein Registrar ki permission.",
    short: "30 chanda, 31 gifts, 32 honours, 33 side jobs: each needs the Registrar.",
    rows: [
      ["30", "No subscriptions for public causes without the Registrar's permission; no outsider brought into a Court room or the Registry for it"],
      ["31", "No gift beyond trifling value, to him or his family, without the Registrar's previous permission"],
      ["32", "No complimentary or valedictory address, testimonial, meeting or entertainment in his honour without the Registrar's previous permission"],
      ["33", "No trade, business or employment without the Registrar's previous permission; the Registrar may stop allowed work"],
      ["33, Explanation", "Canvassing for an insurance or commission agency run by his wife or family is a breach"]
    ],
    refs: ["Rule 30", "Rule 31", "Rule 32", "Rule 33"] },

  /* ---------------------------------------------- conduct, 34 to 46 */
  { id: "osr-34-46", t: "osr-conduct-2", k: "Rules 34 to 46",
    h: "Rules 34 to 46 by their numbers",
    hook: "==34, 35 and 36== are the ==three I's== of money: ==I==nvestments, ==I==nsolvency, ==I==mmovable and other property. ==37 to 40== are ==your own cause==: clear your ==name== (37), no ==sifarish== (38), keep off ==Advocates== (39), take your ==grievance== to the Registrar (40). ==41 and 42== are the group: 41 is ==all for one==, the strike; 42 is the association, recognised within ==4 + 2 = 6 months==. ==43 to 46== are the law: 43 ==arrest==, 44 the Court's ==four walls== (property), 45 ==conviction==, 46 the ==breach== that leads to Part III.",
    hi: "34-35-36 teen I: Investment, Insolvency, Immovable property. 37-40 apna maamla: naam saaf (37), sifarish nahi (38), Advocate se doori (39), shikayat Registrar ko (40). 41 hadtaal, 42 union (4+2 = 6 mahine). 43 giraftaari, 44 Court ki chaar deewarein, 45 saza, 46 todne par Part III.",
    short: "34, 35, 36 the three I's; 41 the strike; 42 = 4 + 2 = 6 months; 44 the four walls.",
    rows: [
      ["34", "Investments, lending and borrowing"],
      ["35", "Insolvency and habitual indebtedness"],
      ["36", "Movable, immovable and valuable property"],
      ["37", "Vindication of acts and character of Court servants"],
      ["38", "Canvassing of non-official or other outside influence"],
      ["39", "Relations with Advocates or Advocates on Record"],
      ["40", "Seeking of redress from Court in respect of service matters"],
      ["41", "Demonstrations and strikes"],
      ["42", "Joining of associations by Court servants"],
      ["43", "Arrests on a criminal charge"],
      ["44", "Court property"],
      ["45", "Contravention of laws and conviction by a Court of Law"],
      ["46", "Contravention of the rules"]
    ],
    refs: ["Rule 34", "Rule 35", "Rule 36", "Rule 37", "Rule 38", "Rule 39", "Rule 40", "Rule 41", "Rule 42", "Rule 43", "Rule 44", "Rule 45", "Rule 46"],
    kw: ["governed by", "deals with", "dealt with in", "concerns", "barred by", "becomes liable to"] },

  { id: "osr-money", t: "osr-conduct-2", k: "Rules 34 and 35",
    h: "Money: a saver, not a trader",
    hook: "Invest like a ==saver==, not a ==trader==: ==occasional== buys through a ==licensed broker== are fine; ==frequent== buying and selling ==is speculation==. Shares from a ==Director's quota== embarrass him, and the ==competent authority== decides, finally. Four money dealings stay open: a ==bank== or public limited company, a small ==interest-free loan== with a relative or friend, a ==tradesman's credit==, an ==advance of pay== to his own employee; anything else needs the ==competent authority's previous sanction==. Rule ==35==: no habitual debt; facing ==insolvency==? the ==full facts to the Registrar, forthwith==.",
    hi: "Saver bano, trader nahi: kabhi-kabhi broker se khareedna theek, baar-baar khareed-bech satta hai. Chalega: bank, rishtedaar ya dost se chhota bina byaaj ka udhaar, dukaandaar ka khaata, apne naukar ko advance. Diwaliya case: Registrar ko turant poori baat.",
    short: "Occasional investment is fine, frequent trading is speculation; insolvency goes to the Registrar at once.",
    rows: [
      ["34(1)", "No speculation; occasional investments through licensed brokers allowed; frequent buying and selling is speculation"],
      ["34(2)", "No investment likely to embarrass him; shares from a Director's quota count as embarrassing"],
      ["34(3)", "The competent authority decides what is speculation or embarrassing, finally"],
      ["34(4), barred", "Lending, borrowing or depositing with anyone in his local limits or with official dealings; lending money at interest"],
      ["34(4), allowed", "A bank or public limited company; a small, temporary, interest-free loan with a relative or friend; credit with a bona fide tradesman; an advance of pay to his own private employee"],
      ["Anything else", "Only with the competent authority's previous sanction"],
      ["35", "Avoid habitual indebtedness or insolvency; insolvency proceedings reported to the Registrar, forthwith"]
    ],
    refs: ["Rule 34", "Rule 35"] },

  { id: "osr-property", t: "osr-conduct-2", k: "Rule 36",
    h: "Property: three clocks",
    hook: "Three clocks. ==Land and houses==: tell ==before==, with the named authority's ==previous knowledge==, even in his wife's name. ==Movable things== worth more than the central limit (fixed under ==Rule 18(3) of the CCS (Conduct) Rules==): report ==within one month==, the Registrar and Class I to the ==Chief Justice==, everyone else to the ==Registrar==. ==Class I==: a ==return== of immovable property on ==first appointment==, then ==every twelve months==. And the Chief Justice may ask for ==everything==, with its ==means or source==.",
    hi: "Zameen aur makaan: pehle batao (previous knowledge), biwi ke naam par bhi. Saamaan limit se upar: ek mahine mein (Registrar aur Class I, CJ ko; baaki Registrar ko). Class I: pehli naukri par aur har 12 mahine return.",
    short: "Land: tell before. Movables over the limit: within one month. Class I: a return every twelve months.",
    rows: [
      ["36(1), immovable", "Acquired or disposed of, in his or a family member's name, only with the previous knowledge of the authority named"],
      ["36(2), movable", "A deal above the limit under Rule 18(3) of the CCS (Conduct) Rules, reported within one month: to the Chief Justice by the Registrar and Class I, to the Registrar by the rest"],
      ["36(3), annual return", "Class I and others named: immovable property, on first appointment and every twelve months"],
      ["36(4), full statement", "Whenever the Chief Justice requires it, with the means or source"]
    ],
    refs: ["Rule 36"] },

  { id: "osr-own-cause", t: "osr-conduct-2", k: "Rules 37 to 40",
    h: "Your own cause: name, influence, Advocates, grievance",
    hook: "==37==: to defend an ==official== act in ==court or the press==, the Registrar's ==previous permission== first, and he decides ==who pays==; your ==private== character is your own. ==38==: no ==sifarish==, political or outside, for your service interests. ==39==: with Advocates, ==party yes, partnership no==: no business dealings ==even with a relative==, no ==shared home== without the Registrar's ==express== permission; a ==marriage party or social gathering== is fine. ==40==: grievances go ==inside first==, to the Registrar (or the Chief Justice with his permission); a ==court of law== before the remedies are ==exhausted== invites ==Part III==.",
    hi: "37: official kaam ka naam saaf karne court ya press jaana ho to pehle Registrar; private izzat apni. 38: sifarish nahi. 39: Advocate ke saath party haan, dhandha nahi (rishtedaar ho tab bhi), ek ghar nahi bina express permission. 40: shikayat pehle andar, court baad mein.",
    short: "Advocates: party yes, partnership no. Grievances: inside first, court last.",
    rows: [
      ["37", "Court or press over an official act or character: the Registrar's previous permission; he decides the costs; private character untouched"],
      ["38", "No political or outside influence on a superior authority for his service interests"],
      ["39", "No business dealings with Advocates, even relatives; no shared home without the Registrar's express permission; a marriage party or social gathering is fine"],
      ["40", "A grievance goes to the Registrar, or to the Chief Justice with the Registrar's permission"],
      ["40, the trap", "A court of law before exhausting the service remedies invites disciplinary action under Part III"]
    ],
    refs: ["Rule 37", "Rule 38", "Rule 39", "Rule 40"] },

  { id: "osr-strike", t: "osr-conduct-2", k: "Rules 41 and 42",
    h: "Every down and every slow is a strike",
    hook: "A strike is a ==group acting in combination== to ==refuse, stop or slow down== work. Every ==down== and every ==slow== counts: ==pen-down, sit-down, go-slow==, and ==stay-in, token, sympathetic== too; so do ==mass casual leave==, refusing ==overtime needed in the public interest==, and staying away for a ==bandh==. The list is ==illustrative, not exhaustive==. Then ==42 = 4 + 2 = 6==: only an association the Chief Justice ==recognised within six months==.",
    hi: "Group mein kaam band, dheema ya mana: sab strike. Pen-down, sit-down, go-slow, stay-in, token, sympathetic, mass CL, bandh, zaroori overtime se inkaar. List sirf misaal hai. 42 = 4+2 = 6 mahine mein CJ ki manzoori.",
    short: "Every down and every slow is a strike; 42 = 4 + 2 = 6 months to recognise an association.",
    rows: [
      ["41, the definition", "Refusal to work, or stoppage or slowing down of work, by a group of employees acting in combination"],
      ["Mass casual leave", "Mass abstention from work without permission"],
      ["Overtime", "Refusing overtime necessary in the public interest"],
      ["Named forms", "Go-slow, sit-down, pen-down, stay-in, token, sympathetic"],
      ["Bandh", "Absence from work to take part in a bandh or a similar movement"],
      ["The list", "Illustrative, not exhaustive"],
      ["42", "Only an association recognised by the Chief Justice within six months of the rules or of its formation"]
    ],
    refs: ["Rule 41", "Rule 42"] },

  { id: "osr-43-46", t: "osr-conduct-2", k: "Rules 43 to 46",
    h: "Arrest, Court property, conviction, breach",
    hook: "==43==: arrested? Tell the ==Registrar, promptly, in writing, even if bailed==; silence is ==suppression of material information==, punishable on that alone. ==44==: the Court's ==four walls==; no Court property goes ==outside the Court House== without the Registrar's ==express== permission. ==45==: ==moral turpitude== is a serious matter, and a ==conviction alone== can punish. ==46==: break any conduct rule and ==Part III== follows; the ==Chief Justice== disciplines the Registrar and grants ==the Registrar's own== permissions.",
    hi: "43: giraftaari par Registrar ko turant likh kar batao, bail ho tab bhi; chhupaya to wahi saza ka kaaran. 44: Court ka saamaan chaar deewaron se bahar nahi. 45: moral turpitude gambhir, conviction kaafi. 46: koi conduct rule toda to Part III.",
    short: "43: report an arrest in writing, even if bailed. 44: nothing leaves the four walls.",
    rows: [
      ["43", "Arrested in a case that may embarrass him or involves moral turpitude: tell the Registrar promptly, in writing, even if bailed"],
      ["43, silence", "Suppression of material information, punishable on that ground alone"],
      ["44", "No Court property outside the Court House or premises without the Registrar's express permission"],
      ["45", "A breach of law involving moral turpitude is serious; after a conviction, punishment on that alone"],
      ["46", "A breach of Part IV brings action under Part III; the Chief Justice acts against the Registrar and grants him any permission Part IV requires"]
    ],
    refs: ["Rule 43", "Rule 44", "Rule 45", "Rule 46"] },

  /* ---------------------------------------------- every number */
  { id: "osr-numbers", t: "numbers", k: "The whole rule book",
    h: "Every number in the 1961 Rules, with its hook",
    hook: "Say each number with its hook until the number alone brings the hook back. These are the figures the questions turn on.",
    hi: "Har number apne hook ke saath bolo, jab tak sirf number sunte hi hook yaad na aa jaaye.",
    short: "Every number in the 1961 Rules, each with its hook.",
    rows: [
      ["5 Parts", "Good Servants Can't Cheat Much"],
      ["7 borrowed words", "Rule 2(a): the courtroom words come from the 2013 Rules"],
      ["Rs. 700", "The cap on Class III posts the Chief Justice may create (Rule 3), set in 1975"],
      ["Two years", "A temporary post (Rule 3); a direct recruit's probation, do saal (Rule 7)"],
      ["One year", "A promotee's probation (Rule 7)"],
      ["15, 7.5 and 27 per cent", "Scheduled Castes, Scheduled Tribes, Other Backward Classes, on a 200-point roster; no EWS"],
      ["Level 6, ₹35,400", "The Junior Court Assistant"],
      ["Seven penalties", "Three minor, Can We Recover; four major, ReCoRD"],
      ["Over three years", "Withholding increments this long needs an inquiry (Rule 14(1-A))"],
      ["More than 48 hours", "In custody: deemed suspended (Rule 15(2))"],
      ["Three Judges", "Hear an appeal against the Chief Justice's own penalty (Rule 18(2))"],
      ["One month", "To appeal (Rule 20); to report a movable property deal (Rule 36(2))"],
      ["More than three days", "Sick leave that needs a medical certificate (Rule 25(3))"],
      ["Twelve months", "Class I's return of immovable property (Rule 36(3))"],
      ["Six months", "For the Chief Justice to recognise an association (Rule 42)"]
    ],
    refs: [] }
  ],

  /* ================================================ SC Rules, 2013 */
  r: [

  /* ---------------------------------------------- the rule book */
  { id: "scr-birth", t: "scr-basics", k: "Article 145, 2014",
    h: "A 2013 name with a 2014 birthday",
    hook: "Made by the ==Court== under ==Article 145==, with the ==President's approval==. Named 2013, born ==2014==: notified on ==27 May 2014==, in force from ==19 August 2014==, four days after Independence Day, a date the ==Chief Justice of India== appointed. They ended the ==1966 Rules==, and the very last Order, ==LVII==, does it: ==57==, like ==1857==, the year an old order fell.",
    hi: "Naam 2013, janm 2014: 27 May 2014 ko notify, 19 August 2014 (15 August ke 4 din baad) se laagu. 1966 waale khatam, aakhri Order 57 se (1857 ki tarah purana raaj khatam).",
    short: "Article 145; notified 27 May 2014, in force 19 August 2014; Order LVII repeals the 1966 Rules.",
    rows: [
      ["Made under", "Article 145 of the Constitution"],
      ["Made by", "The Supreme Court, with the approval of the President"],
      ["Notified", "27 May 2014, G.S.R. 368(E)"],
      ["In force", "19 August 2014, a date the Chief Justice of India appointed"],
      ["Replaced", "The Supreme Court Rules, 1966, repealed by Order LVII"],
      ["Size", "57 Orders, then the Forms"]
    ],
    refs: ["Art. 145", "Notification", "Order LVII", "Arrangement of Orders", "Art. 145(1)"],
    kw: ["which article", "into force", "replaced", "repeals", "how many orders", "approval of", "appointed the date"] },

  { id: "scr-145-146", t: "scr-basics", k: "Articles 145 and 146",
    h: "Five for Filing, Six for Staff",
    hook: "==Five for Filing==: Article 1==45== gives the Court its rules of practice and procedure, ==these 2013 Rules==, made by the ==Court== with the President's approval. ==Six for Staff==: Article 1==46== covers the Court's officers and servants, the ==1961 Rules==, made by the ==Chief Justice==. A JCA is governed by the second and works with the first.",
    hi: "Five se Filing: 145, yeh 2013 Rules (Court banata hai). Six se Staff: 146, 1961 Rules (Chief Justice banate hain). JCA par 1961 laagu, kaam 2013 ke saath.",
    short: "Five for Filing (Article 145, these Rules); Six for Staff (Article 146, the 1961 Rules).",
    rows: [
      ["Article 145", "Rules of practice and procedure, made by the Court with the President's approval: the 2013 Rules"],
      ["Article 146", "Rules on the staff's conditions of service, made by the Chief Justice, with the President's approval for pay, allowances, leave and pensions: the 1961 Rules"]
    ],
    refs: ["Art. 146"] },

  { id: "scr-parts", t: "scr-basics", k: "Parts I to III",
    h: "Three Parts: I, XVI and XXV",
    hook: "==General== from Order ==I==, ==Appeals== from ==XVI (16)==, ==Original== jurisdiction from ==XXV (25)==. Picture a lawyer: the ==general== rules from day one, ==sweet sixteen== when you start ==appealing==, and at ==25== you are ==original==. Inside Part III, Orders ==XXV to XXXVII== run a civil suit in miniature, for an ==Article 131== dispute.",
    hi: "1 se General, 16 se Appeal (sweet sixteen), 25 se Original. 25 se 37 tak Article 131 waala civil muqadma.",
    short: "General from I, Appeals from XVI, Original from XXV.",
    rows: [
      ["Part I, General", "Orders I to XV"],
      ["Part II, Appellate Jurisdiction", "Opens at Order XVI"],
      ["Part III, Original Jurisdiction", "Opens with original suits at Order XXV"],
      ["Orders XXV to XXXVII", "An original suit, an Article 131 dispute, run like a civil trial"]
    ],
    refs: ["Arrangement of Orders", "Orders XXV to XXXVII"], kw: ["part", "begins", "original"] },

  { id: "scr-order-one", t: "scr-basics", k: "Order I",
    h: "Order I: every word stretches a little",
    hook: "In Order I each word ==includes one more==: the ==Chief Justice== includes a Judge acting under ==Article 126==; the ==Registrar== includes an ==Additional Registrar==; the ==rules== include the ==Forms==; a ==judgment== includes a ==decree, order, sentence or determination== of any Court, Tribunal, Judge or Judicial Officer. An ==Advocate-on-Record== both ==acts and pleads==. ==Court fees== sit in the ==Third Schedule==.",
    hi: "Order I mein har shabd thoda bada: CJ mein acting CJ (Article 126), Registrar mein Additional Registrar, Rules mein Forms, judgment mein decree, order, sentence. AoR = act + plead. Court fee = Third Schedule.",
    short: "The Chief Justice includes an acting one (Article 126); the Registrar includes an Additional Registrar; the rules include the Forms.",
    rows: [
      ["Advocate-on-Record", "Entitled under these Rules to act as well as to plead for a party"],
      ["Chief Justice", "Includes a Judge appointed under Article 126 to act as Chief Justice"],
      ["Registrar", "Includes an Additional Registrar"],
      ["Rules", "Include the Forms"],
      ["Judgment", "Includes a decree, order, sentence or determination of any Court, Tribunal, Judge or Judicial Officer"],
      ["Court fees", "Those set out in the Third Schedule"]
    ],
    refs: ["Order I", "Third Schedule"] },

  /* ---------------------------------------------- the 57 Orders */
  { id: "scr-landmarks", t: "scr-orders", k: "Twelve landmark Orders",
    h: "Learn twelve landmarks first",
    hook: "Fix ==twelve landmarks== and the other Orders fall between them. ==IV== Advocates (an AoR needs ==four== years on the roll). ==V== chambers. ==VI== benches (==Six, Sit==: who sits). ==XV== petitions. ==XXI and XXII== the two SLPs, civil then criminal. ==XXXVIII== Article 32. ==XLII== Article 143. ==XLVI== election petitions. ==XLVII== review, ==XLVIII== curative. ==LV== inherent powers. ==LVII== repeal.",
    hi: "12 landmark: 4 Advocates, 5 chamber, 6 bench (Six = Sit), 15 petition, 21-22 SLP, 38 Article 32, 42 Article 143, 46 chunav, 47 review, 48 curative, 55 inherent power, 57 repeal.",
    short: "IV Advocates, VI benches, XXI and XXII SLPs, XXXVIII Article 32, XLVII review, XLVIII curative, LVII repeal.",
    rows: [
      ["IV", "Advocates"],
      ["V", "Business in chambers"],
      ["VI", "Constitution of Division Courts and powers of a single Judge"],
      ["XV", "Petitions generally"],
      ["XXI and XXII", "Special leave petitions: civil, then criminal"],
      ["XXXVIII", "Applications for enforcement of fundamental rights (Article 32)"],
      ["XLII", "Special reference under Article 143"],
      ["XLVI", "Election petitions"],
      ["XLVII", "Review"],
      ["XLVIII", "Curative petition"],
      ["LV", "Power to dispense and inherent powers"],
      ["LVII", "Repeal"]
    ],
    refs: [] },

  { id: "scr-1-15", t: "scr-orders", k: "Orders I to XV",
    h: "Part I: walk into the building",
    hook: "Walk into the Court and meet Part I in order: the ==words== (I), the ==offices and hours== (II), the ==officers== (III), the ==Advocates== (IV), the Registrar's ==chambers== (V), the ==Bench== (VI). Then the people and papers: ==minors== (VII, a child of seven), ==documents== (VIII), ==affidavits== (IX: ==I== for first person, ==X== for cross-examination), ==inspection== (X marks the spot), ==notices of motion== (XI), ==judgments== (XII, a jury of twelve), ==copies== (XIII), ==suitors' funds== (XIV), ==petitions== (XV).",
    hi: "Building mein ghuso: shabd (1), daftar aur samay (2), afsar (3), vakeel (4), chamber (5), bench (6); phir naabaalig (7, saat saal ka baccha), kaagaz (8), halafnama (9: I = main, X = jirah), inspection (10), motion (11), faisla (12), nakal (13), paisa (14), arzi (15).",
    short: "VII minors (a child of seven), IX affidavits (I for first person, X for cross-examination), XII judgments (twelve jurors).",
    orders: ["I", "XV"],
    refs: ["Order I", "Order II", "Order III", "Order IV", "Order V", "Order VI", "Order VII", "Order VIII", "Order IX", "Order X", "Order XI", "Order XII", "Order XIII", "Order XIV", "Order XV"],
    kw: ["which order", "deals with", "dealt with in", "governed by", "is headed", "is about", "subject of", "falls under", "fall under", "concerns", "” is:"] },

  { id: "scr-16-24", t: "scr-orders", k: "Orders XVI to XXIV",
    h: "The appeal Orders",
    hook: "==XVI== hears the appeal, ==one advocate a side==. ==XVII== is miscellaneous. ==XVIII== is the ==indigent== person. ==XIX== is the High Court's ==certificate==. ==XX== is ==criminal== appeals: ==XX==, two crossed swords. ==XXI== SLP ==civil==, ==XXII== SLP ==criminal==: C before Cr. Then the two Acts in A, C order: ==XXIII Advocates Act==, ==XXIV Consumer Protection Act==.",
    hi: "16 sunwai (ek taraf ek vakeel), 17 misc, 18 gareeb, 19 certificate, 20 criminal (XX = do talwarein), 21 civil SLP, 22 criminal SLP, 23 Advocates Act, 24 Consumer Act (A phir C).",
    short: "XX criminal (two crossed swords); XXI civil SLP, XXII criminal SLP; XXIII Advocates Act, XXIV Consumer Protection.",
    orders: ["XVI", "XXIV"],
    refs: ["Order XVI", "Order XVII", "Order XVIII", "Order XIX", "Order XX", "Order XXI", "Order XXII", "Order XXIII", "Order XXIV"],
    kw: ["which order", "deals with", "dealt with in", "governed by", "is headed", "is about", "subject of", "falls under", "fall under", "concerns", "” is:"] },

  { id: "scr-25-37", t: "scr-orders", k: "Orders XXV to XXXVII",
    h: "An original suit, start to finish",
    hook: "Tell the story of a suit and the Orders keep step: the ==parties== (XXV), the ==plaint== (XXVI), the ==summons== (XXVII), the defendant's ==written statement== (XXVIII), ==pleadings== in general (XXIX), ==discovery== (XXX), ==admissions== (XXXI), the ==witnesses== (XXXII), then ==tareekh pe tareekh==, the ==adjournments== (XXXIII), the ==hearing== (XXXIV), ==withdrawal or settlement== (XXXV), ==payment into Court== (XXXVI), and the ==special case== (XXXVII).",
    hi: "Muqadme ki kahani: parties (25), plaint (26), summon (27), jawab (28), pleadings (29), discovery (30), sweekar (31), gawah (32), tareekh pe tareekh (33), sunwai (34), wapsi ya samjhauta (35), paisa jama (36), special case (37).",
    short: "XXXII witnesses, XXXIII tareekh pe tareekh (adjournments), XXXIV the hearing.",
    orders: ["XXV", "XXXVII"],
    refs: ["Order XXV", "Order XXVI", "Order XXVII", "Order XXVIII", "Order XXIX", "Order XXX", "Order XXXI", "Order XXXII", "Order XXXIII", "Order XXXIV", "Order XXXV", "Order XXXVI", "Order XXXVII"],
    kw: ["which order", "deals with", "dealt with in", "governed by", "is headed", "is about", "subject of", "falls under", "fall under", "concerns", "” is:"] },

  { id: "scr-38-46", t: "scr-orders", k: "Orders XXXVIII to XLVI",
    h: "Writs, transfers, references, elections",
    hook: "==XXXVIII== is Article 32: the ==3== of 32, and an ==8== like the ==handcuffs== a habeas corpus opens; PIL is its ==Rule 12==. Then ==three transfers==: ==XXXIX== criminal (Section ==406== CrPC), ==XL== Article 139A==(1)==, ==XLI== Article 139A==(2)== with Section ==25== CPC; add 1 to the last digit of 40 and 41 and you have the clause. Then ==four references, four P's==: the ==President's== question, Article 143 (==XLII==); a ==PSC== member, Article 317(1) (==XLIII==); ==Parliament's== statutes, referred by the Central Government or tribunals (==XLIV==); ==paisa==, the Income Tax Act (==XLV==). ==XLVI==: election petitions.",
    hi: "38 = Article 32 (handcuff jaisa 8), PIL Rule 12. Teen transfer: 39 criminal (406 CrPC), 40 = 139A(1), 41 = 139A(2) aur 25 CPC. Chaar reference, chaar P: President (42), PSC (43), Parliament ke kaanoon (44), Paisa yaani income tax (45). 46 chunav.",
    short: "XXXIX to XLI the three transfers; XLII to XLV the four references: President, PSC, Parliament's statutes, paisa.",
    orders: ["XXXVIII", "XLVI"],
    refs: ["Order XXXVIII", "Order XXXIX", "Order XL", "Order XLI", "Order XLII", "Order XLIII", "Order XLIV", "Order XLV", "Order XLVI"],
    kw: ["which order", "deals with", "dealt with in", "governed by", "is headed", "is about", "subject of", "falls under", "fall under", "concerns", "” is:"] },

  { id: "scr-47-57", t: "scr-orders", k: "Orders XLVII to LVII",
    h: "From review to repeal",
    hook: "==XLVII== review, ==XLVIII== curative: first look back, then cure. Then the paperwork after a case, in the order you would do it: count the ==costs== (XLIX), ==tax== them (L), give ==notice to the Attorney-General== (LI), fill the ==forms== (LII), ==serve== them (LIII), send ==commissions== (LIV); where the rules run out, the Court's own ==inherent power== (LV, two hands of five); then ==destroy== the old records (LVI) and ==repeal== the old rules (LVII).",
    hi: "47 review, 48 curative. Phir case ke baad ka kaam: kharcha (49), uska hisaab (50), Attorney-General ko notice (51), form (52), serve (53), commission (54), inherent power (55), purane record nasht (56), purane rules khatam (57).",
    short: "XLIX costs, L taxation, LI notice to the Attorney-General, LV inherent powers, LVI destruction of records, LVII repeal.",
    orders: ["XLVII", "LVII"],
    refs: ["Order XLVII", "Order XLVIII", "Order XLIX", "Order L", "Order LI", "Order LII", "Order LIII", "Order LIV", "Order LV", "Order LVI", "Order LVII"],
    kw: ["which order", "deals with", "dealt with in", "governed by", "is headed", "is about", "subject of", "falls under", "fall under", "concerns", "” is:"] },

  /* ---------------------------------------------- advocates */
  { id: "scr-aor", t: "scr-advocates", k: "Order IV",
    h: "Advocate-on-Record: 4 + 1 = 5",
    hook: "==4 + 1 = 5==: ==four years== on a State Bar Council roll, ==one year's training== with an AoR, then the Court's ==AoR examination==, in at most ==five chances==. Then a distance and a deadline: an office in Delhi within ==16 km== of the Court House (the old rules said ==ten miles==) and a registered ==clerk within one month==. ==Mere name-lending== is misconduct, and the register can drop him ==permanently or for a period==.",
    hi: "4 saal roll + 1 saal training = 5 chance exam ke. Office 16 km ke andar (purana 10 mile), clerk 1 mahine mein. Sirf naam udhaar dena misconduct; register se naam hamesha ke liye ya kuch samay ke liye.",
    short: "Four years on the roll and one year's training; five chances at the AoR examination; an office within 16 km.",
    rows: [
      ["Roll", "Four years on a State Bar Council roll by the day training starts"],
      ["Training", "One year with an Advocate-on-Record"],
      ["Examination", "Conducted by the Court; no more than five chances"],
      ["Rule 5", "An office in Delhi within 16 km of the Court House; a registered clerk within one month"],
      ["Rule 4", "An advocate not designated a Senior Advocate, who meets Rule 5"],
      ["Rule 7(b)", "Filing a vakalatnama, he certifies its due execution"],
      ["Misconduct, as listed", "Mere name-lending; absence without justifiable cause when the case is called; no signed appearance slip"],
      ["Rule 10", "Removal from the register, permanently or for a period"],
      ["Rule 18", "An AoR designated Senior tells his clients and reports to the Registry"]
    ],
    refs: ["Order IV", "AoR examination"] },

  { id: "scr-senior", t: "scr-advocates", k: "Order IV, Rules 1 and 2",
    h: "A Senior Advocate never walks alone",
    hook: "Designated by the ==Chief Justice and the Judges==, with his ==consent==, for ==ability, standing at the Bar, or special knowledge or experience in law==. Then two ==nevers==: he ==never walks alone== (no appearance ==without an AoR== in the Supreme Court, or ==without a junior== elsewhere), and he ==never drafts== (no instructions to draw ==pleadings or affidavits==; he may settle them with a junior). And only the ==AoR== appears for a party, unless he ==instructs== another or the ==Court permits==.",
    hi: "Senior: CJ aur Judges banate hain, uski marzi se. Do kabhi nahi: akela nahi chalta (Supreme Court mein AoR ke bina nahi, baaki jagah junior ke bina nahi) aur draft nahi karta.",
    short: "A Senior never walks alone (always with an AoR) and never drafts pleadings.",
    rows: [
      ["Designated by", "The Chief Justice and the Judges, with the advocate's consent"],
      ["For", "Ability, standing at the Bar, or special knowledge or experience in law"],
      ["Never alone", "Not without an Advocate-on-Record in the Supreme Court, or without a junior in any other court"],
      ["Never drafts", "May not accept instructions to draw pleadings or affidavits; may settle them with a junior"],
      ["Rule 1(b)", "Only the Advocate-on-Record appears for a party, unless he instructs another or the Court permits"]
    ],
    refs: ["Order IV, Rule 2", "Order IV, Rule 1(b)"] },

  /* ---------------------------------------------- the Registry and benches */
  { id: "scr-benches", t: "scr-registry", k: "Order VI",
    h: "How many Judges: 2, 3, 5 and 1",
    hook: "==2== for an ordinary case, nominated by the ==Chief Justice==. ==3== when a life is at stake: a High Court ==death sentence==. ==5== for the ==President's chair==: an election petition. ==1== for small bail: since ==2019== a single Judge hears SLPs from bail orders under Sections ==437, 438 and 439== CrPC in offences punishable up to ==seven years==, transfers under Section ==406== CrPC, and urgent ones under Section ==25== CPC. A bigger Bench? The Bench ==refers it to the Chief Justice==.",
    hi: "Aam case 2 Judge, maut ki saza 3, President ka chunav 5, chhoti bail (7 saal tak) 1. Badi bench chahiye to Chief Justice ko refer.",
    short: "Two Judges ordinarily, three for a death sentence, five for an election petition, one for bail up to seven years.",
    rows: [
      ["Ordinary Bench", "Not less than two Judges, nominated by the Chief Justice"],
      ["Death sentence", "Not less than three Judges, where a High Court confirmed or awarded it"],
      ["Election petition", "Not less than five Judges (Order XLVI)"],
      ["A single Judge, 2019", "Bail SLPs under Sections 437, 438 and 439 CrPC in offences up to seven years; Section 406 CrPC transfers; urgent Section 25 CPC transfers"],
      ["Its root", "Article 145(2)"],
      ["A larger Bench", "On a reference to the Chief Justice, who constitutes it"],
      ["Judge in Chambers", "Appointed by the Chief Justice"]
    ],
    refs: ["Order VI"] },

  { id: "scr-registrar", t: "scr-registry", k: "Orders V and XV",
    h: "Against the Registrar: 15 days",
    hook: "Every appeal against the ==Registrar== gets ==15 days==. ==Five goes to one Judge, fifteen to the full Court==: an order in ==chambers== business (Order ==V==) goes to the ==Judge in Chambers==; a ==refusal to receive a petition== (Order ==XV==, Rule 5) goes to the ==Court==. The bigger number goes to the bigger forum.",
    hi: "Registrar ke khilaaf appeal 15 din. Order 5 ek Judge ke paas (chamber), Order 15 poore Court ke paas. Bada number, bada forum.",
    short: "15 days against the Registrar: Order V to the Judge in Chambers, Order XV to the Court.",
    rows: [
      ["Order V, chambers", "The Registrar uses the Court's powers in listed matters: uncontested formal interlocutory applications, discovery, inspection, substituted service, time to plead"],
      ["Order V, Rule 3", "Appeal to the Judge in Chambers within fifteen days"],
      ["Referral", "The Registrar may refer a matter to the Judge in Chambers, who may refer it to the Court"],
      ["Order XV, Rule 5", "Refusal to receive a petition with no reasonable cause, frivolous or scandalous: appeal within fifteen days, to the Court"],
      ["Order XV, caveat", "Once a caveat is lodged, notice of the petition goes to the caveator"]
    ],
    refs: ["Order V", "Order XV"] },

  { id: "scr-calendar", t: "scr-registry", k: "Orders II and III",
    h: "The calendar, the clock and the seal",
    hook: "Three amendments in a row: ==2019 one Judge==, ==2024 no vacation==, ==2025 the clock==. In 2024 the summer vacation became ==partial court working days==, capped with the holidays at ==95 days, Sundays excluded== (it had been ==103==). From ==14 July 2025== the Registry opens ==10 to 5== on weekdays and ==10 to 1 on every Saturday==. And ==S.G.== stands for ==Seal and General records==: the ==Secretary General== keeps both (under the 1966 Rules the records were the ==Registrar's==).",
    hi: "2019 ek Judge, 2024 vacation khatam (95 din, Sunday chhod kar; pehle 103), 2025 ghadi: hafte mein 10 se 5, har Saturday 10 se 1. S.G. = Seal aur General records: Secretary General.",
    short: "2024: 95 days, Sundays excluded. 2025: 10 to 5, Saturdays 10 to 1. The Secretary General keeps the records and the seal.",
    rows: [
      ["2024", "Summer vacation renamed partial court working days; with holidays, at most 95 days excluding Sundays (it had been 103); fixed by the Chief Justice"],
      ["2025, from 14 July", "Registry open 10 a.m. to 5 p.m. Monday to Friday, and 10 a.m. to 1 p.m. on every Saturday"],
      ["Vacation Judge", "Now just Judge, named by the Chief Justice for urgent matters"],
      ["Order III", "The Secretary General has custody of the records (the Registrar had it under the 1966 Rules)"],
      ["The seal", "Kept by the Secretary General; affixed only under authority in writing"]
    ],
    refs: ["Order II", "Order III"] },

  /* ---------------------------------------------- minors, papers, judgments */
  { id: "scr-general", t: "scr-general", k: "Orders VII, IX, XII and XIII",
    h: "Minors, affidavits, judgments, copies",
    hook: "Order ==VII==: a minor ==attacks with a Friend, defends with a Guardian==: the ==next friend== sues, the ==guardian== defends, and there is ==no compromise without the Court's leave==. Order ==IX==: ==I== for the ==first person==, ==X== for ==cross-examination==, and facts from ==his own knowledge== (belief only in an ==interlocutory application==). Order ==XII==: pronounced in ==open court==; ==one Judge may pronounce another's==; never altered but on ==review== or for a ==clerical or arithmetical slip==. Order ==XIII==: a ==party== gets copies as of right, an outsider with an ==affidavit of reasons==; certified by an ==Assistant Registrar or Branch Officer==.",
    hi: "Order 7: naabaalig dost (next friend) ke saath ladta hai, guardian ke saath bachta hai; samjhauta Court ki izaazat se. Order 9: I = main (first person), X = jirah. Order 12: khule court mein faisla, ek Judge doosre ka padh sakta hai. Order 13: party ko nakal haq se, baahri ko affidavit se.",
    short: "VII: the Friend attacks, the Guardian defends. IX: I for first person, X for cross-examination.",
    rows: [
      ["VII, minors", "The next friend sues or appeals, the guardian defends; no compromise without the Court's leave"],
      ["VII, a new next friend", "On an affidavit that he is fit and proper with no interest adverse to the minor"],
      ["VIII, documents", "In English, the Court's language under Article 348(1), or with a translation"],
      ["IX, affidavits", "First person, numbered paragraphs, own knowledge; belief allowed in an interlocutory application"],
      ["IX, evidence", "The Court may order the deponent to attend for cross-examination"],
      ["XII, judgments", "Pronounced in open court; one Judge may pronounce another's; altered only on review or for a clerical or arithmetical slip"],
      ["XIII, copies", "A party as of right; a non-party on an affidavit of reasons; certified by an Assistant Registrar or Branch Officer"]
    ],
    refs: ["Order VII", "Order VIII", "Order IX", "Order XII", "Order XIII"] },

  /* ---------------------------------------------- appeals */
  { id: "scr-time", t: "scr-appeals", k: "Time limits",
    h: "The time ladder: 15, 30, 60, 90",
    hook: "Four rungs: ==15== days against the ==Registrar== (Orders V and XV); ==30== days for a ==review==, a ==consumer== appeal and an ==election petition==; ==60== days for the ==certificate== appeals (granted or refused) and the ==Advocates Act== appeal; ==90== days for an ==SLP== from the judgment. A ==curative== petition has no number, only a ==reasonable time==. Late? Delay can be ==condoned for sufficient cause==.",
    hi: "15-30-60-90: Registrar ke khilaaf 15 din; review, consumer, chunav 30; certificate (mila ya mana hua) aur Advocates Act 60; SLP 90. Curative: reasonable time.",
    short: "15 the Registrar; 30 review, consumer, election; 60 certificates and the Advocates Act; 90 an SLP.",
    rows: [
      ["15 days", "Appeal against the Registrar: in chambers (Order V) or refusing a petition (Order XV)"],
      ["30 days", "Review (XLVII); appeal from the National Commission (XXIV); an election petition, from the declaration (XLVI)"],
      ["60 days", "Appeal on a certificate (XIX); SLP after a certificate is refused (XXI); Advocates Act appeal, from communication (XXIII)"],
      ["90 days", "SLP from the judgment or order (XXI)"],
      ["Reasonable time", "Curative petition, after the order in the review (XLVIII)"],
      ["Late", "Delay can be condoned for sufficient cause"]
    ],
    refs: ["Order V, Rule 3", "Order XV, Rule 5", "Order XLVII, Rule 2", "Order XXIV", "Order XLVI", "Order XIX", "Order XXI", "Order XXIII", "Order XLVIII, Rule 3"],
    kw: ["within", "late", "how many days"] },

  { id: "scr-slp", t: "scr-appeals", k: "Orders XXI and XXII",
    h: "SLP: 21 civil, 22 criminal, and hands up",
    hook: "==21 Civil, 22 Criminal==: C before Cr, 1 before 2. The civil SLP is ==Form No. 28==: ==21 and 28== sit side by side in the ==seven times table==. It sets out the ==questions of law== and the ==grounds== separately, and says on affidavit whether an ==earlier SLP== was filed. No ==caveat==? It is heard ==ex parte== first; once leave is granted, ==the petition becomes the appeal==. A criminal SLP with a prison sentence? ==Hands up, five fingers==: ==Order XXII, Rule 5==, surrender, or apply for ==exemption from surrendering==; the proof is a ==certified copy== of the order recording it or a ==jail officer's certificate==.",
    hi: "21 civil, 22 criminal. Civil SLP = Form 28 (21 aur 28 saat ka pahada). Caveat nahi to pehli sunwai ex parte; leave mili to arzi hi appeal. Criminal mein jail ki saza: haath upar (Rule 5), surrender ya exemption.",
    short: "XXI civil, XXII criminal; Form No. 28; surrender is Order XXII, Rule 5: hands up, five fingers.",
    rows: [
      ["Order XXI", "SLP in civil proceedings, in Form No. 28"],
      ["Order XXII", "SLP in criminal proceedings"],
      ["The petition", "Questions of law and grounds set out separately; an affidavit on any earlier SLP against the same judgment"],
      ["No caveat", "Heard ex parte first; delay not condoned without notice to the respondent"],
      ["Leave granted", "The petition itself is treated as the appeal"],
      ["Order XXII, Rule 5", "A petitioner sentenced to imprisonment says whether he has surrendered; if not, an application for exemption from surrendering"],
      ["Proof of surrender", "A certified copy of the order recording it, or a certificate from the jail officer"]
    ],
    refs: ["Order XXI", "Order XXII"] },

  { id: "scr-acts", t: "scr-appeals", k: "Orders XVI, XVIII, XIX, XXIII and XXIV",
    h: "One advocate, the indigent, certificates, lawyers, consumers",
    hook: "==XVI==: at the hearing, ==one advocate a side==. ==XVIII==, the ==indigent==: free entry, pay for the ==copies== (no court fee and no process fee). ==XIX==, the High Court's ==certificate==: within ==60 days==, with the judgment and the ==order granting the certificate==. ==Lawyers get double the consumer's time==: ==XXIII==, Section ==38== of the Advocates Act, ==60 days== from communication, by the person aggrieved, the ==Attorney-General== or the State's ==Advocate-General==; ==XXIV==, Section ==23== of the Consumer Protection Act, 1986, ==30 days== (that Act was repealed on ==20 July 2020==; such appeals now lie under Section ==67== of the 2019 Act).",
    hi: "16: ek taraf ek vakeel. 18 gareeb: fees maaf, nakal ka paisa do. 19 certificate: 60 din. Vakeel ko consumer se double samay: Advocates Act 60 din, Consumer 30 din (1986 Act 20 July 2020 ko gaya, ab Section 67).",
    short: "An Advocates Act appeal gets 60 days, a consumer appeal 30: lawyers get double.",
    rows: [
      ["XVI", "Not more than one advocate for the appellants, and one for each respondent or set of respondents, unless the Court directs otherwise"],
      ["XVIII", "An indigent person pays no court fee on the papers and no process fee, but pays for copies"],
      ["XIX", "Appeal on a High Court certificate, within 60 days, with the judgment and the order granting the certificate"],
      ["XXIII", "Section 38, Advocates Act, 1961: against the Bar Council of India's disciplinary orders; 60 days from communication; the person aggrieved, the Attorney-General or the Advocate-General"],
      ["XXIV", "Section 23, Consumer Protection Act, 1986: from the National Commission, 30 days; the Act repealed on 20 July 2020; now Section 67 of the 2019 Act"]
    ],
    refs: ["Order XVI", "Order XVIII", "Order XIX", "Order XXIII", "Order XXIV"] },

  /* ---------------------------------------------- suits, writs and PIL */
  { id: "scr-pil", t: "scr-original", k: "Order XXXVIII, Rule 12",
    h: "PIL: count down 4, 3, 2, 1",
    hook: "PIL lives at ==Order XXXVIII, Rule 12==. The ten kinds of letter-petition it takes up count down ==4, 3, 2, 1==: ==4 weak workers and families== (bonded labour, neglected children, minimum wages and casual workers, family pension); ==3 hurt by power== (jails, police, riot victims); ==2 hurt by society== (atrocities on women, harassment of Scheduled Caste and Scheduled Tribe villagers); ==1 for nature== (the environment, with ecology, drugs, food adulteration, heritage, forests and wildlife). ==Family pension is in, service pension is out==: that pair is the trap.",
    hi: "PIL = Order 38, Rule 12. Dus category ulti ginti 4-3-2-1: 4 kamzor (bandhua mazdoor, upekshit bachche, nyuntam mazdoori, family pension), 3 taakat ke shikaar (jail, police, dange), 2 samaaj ke shikaar (mahilayein, SC aur ST), 1 prakriti. Family pension andar, service pension bahar.",
    short: "PIL is Order XXXVIII, Rule 12; family pension is in, service pension is out.",
    rows: [
      ["Where", "Order XXXVIII, Rule 12"],
      ["Begins", "Suo motu; on a letter or representation; by treating a petition as a PIL; or by filing one"],
      ["Filed directly", "With the petitioner's details, the cause of action, the public injury, and an affidavit of no personal gain, private motive or oblique reason"],
      ["Taken up", "Bonded labour; neglected children; minimum wages; jails; police; atrocities on women; harassment of Scheduled Caste and Scheduled Tribe villagers; the environment; riot victims; family pension"],
      ["Not taken up", "Landlord and tenant; service matters, pension and gratuity included; college admissions; early hearing of pending cases; complaints outside the ten"],
      ["Article 32 in a criminal matter", "Registered as a Writ Petition (Criminal)"]
    ],
    refs: ["Order XXXVIII", "PIL guidelines"] },

  /* ---------------------------------------------- transfers and elections */
  { id: "scr-elections", t: "scr-transfer", k: "Order XLVI",
    h: "Election petitions in round numbers",
    hook: "Count the President's election in round numbers: a Bench of ==5== Judges, for the preliminary hearing too; a candidate may petition, or ==20== electors together against a President, ==10== against a Vice-President; ==30== days from the declaration; ==₹50,000== as security. Three endings: ==dismissed==, ==void==, or void with ==the petitioner or another candidate declared elected==.",
    hi: "Chunav yachika: 5 Judge, President ke liye 20 voter, Vice-President ke liye 10, 30 din, ₹50,000 zamaanat. Ant teen: khaarij, void, ya kisi aur ko vijayi ghoshit.",
    short: "5 Judges; 20 or 10 electors; 30 days; ₹50,000.",
    rows: [
      ["Bench", "Not less than five Judges, for the preliminary hearing too"],
      ["Who may file", "A candidate; or 20 or more electors (President), 10 or more (Vice-President)"],
      ["Time", "Within 30 days of the publication of the declaration of the result"],
      ["Security", "₹50,000, deposited with the petition"],
      ["Outcome", "Dismissed; the election void; or void, with the petitioner or another candidate declared elected"]
    ],
    refs: ["Order XLVI"] },

  { id: "scr-references", t: "scr-transfer", k: "Orders XXXIX to XLIII",
    h: "Who is told on a reference, and where transfers go",
    hook: "On an Article ==143== reference the ==Registrar tells the Attorney-General==, and the Court ==reports its opinion to the President==: the President asks, the AG is told, the President is answered. On Article ==317(1)==, a ==PSC member's== removal, notice goes to the ==person concerned== and to the Attorney-General or the ==Advocate-General==. And the two transfer statutes: Section ==406 CrPC== moves a ==criminal== case ==between High Courts== (its successor is Section ==446== of the ==BNSS==); Section ==25 CPC== moves a ==civil== case ==from one State to another==.",
    hi: "Article 143: Registrar Attorney-General ko batata hai, Court apni raay President ko deta hai. Article 317(1) (PSC member): notice us vyakti aur AG ya Advocate-General ko. 406 CrPC criminal case High Courts ke beech (ab BNSS 446); 25 CPC civil case ek State se doosre.",
    short: "Article 143: the AG is told, the President is answered. 406 CrPC: criminal, between High Courts; 25 CPC: civil, between States.",
    rows: [
      ["Article 143 (XLII)", "The Registrar gives notice to the Attorney-General; the opinion is reported to the President"],
      ["Article 317(1) (XLIII)", "Notice to the person concerned and to the Attorney-General or the State's Advocate-General"],
      ["Section 406 CrPC", "A criminal case between High Courts, or courts under them; now Section 446 of the BNSS, 2023"],
      ["Section 25 CPC", "A civil case from a court in one State to a court in another"],
      ["Registered as", "Transfer applications: Transfer Petitions; a case withdrawn under Article 139A(1): a Transferred Case"]
    ],
    refs: ["Order XLII", "Order XLIII", "Order XXXIX", "Order XL", "Order XLI", "Orders XL and XLI", "Art. 317(1)"] },

  /* ---------------------------------------------- review and curative */
  { id: "scr-review", t: "scr-review", k: "Orders XLVII and XLVIII",
    h: "Review is 47 twice; curative is the cure after it",
    hook: "==Review is 47 twice==: Order ==XLVII== of these Rules, and Order XLVII, Rule 1 of the ==CPC== for its civil grounds. In a ==criminal== case, only an ==error apparent on the face of the record==. ==30 days==; the ==AoR== certifies it is the ==first== review; decided ==by circulation==, by the ==same Bench==; and ==no second review==. ==Curative is 48==, the cure after review, from ==Rupa Ashok Hurra (2002)==: the grounds were ==taken in the review==, the review was ==dismissed by circulation==, a ==Senior Advocate== certifies (a bigger signature for a bigger ask), it comes in a ==reasonable time==, and the ==three senior-most Judges== see it first, with the Bench that decided.",
    hi: "Review do jagah 47: SC Rules aur CPC. Criminal mein sirf error apparent on the face of the record. 30 din, AoR ka certificate, circulation, wahi Bench, doosra review nahi. Curative 48: Rupa Ashok Hurra (2002), Senior Advocate ka certificate, reasonable time, 3 sabse senior Judges.",
    short: "Review is 47 twice (these Rules and the CPC), 30 days, the AoR certifies; curative is 48, a Senior Advocate certifies.",
    rows: [
      ["Review, Order XLVII", "Within 30 days of the judgment or order"],
      ["Grounds", "Civil: Order XLVII Rule 1 of the CPC. Criminal: an error apparent on the face of the record"],
      ["Certificate", "The Advocate-on-Record: the first review, on admissible grounds"],
      ["Heard", "By circulation without oral arguments, unless the Court orders otherwise; the same Bench as far as practicable; written arguments may be filed"],
      ["After it", "No further review in the same matter"],
      ["Curative, Order XLVIII", "Rupa Ashok Hurra (2002); grounds taken in the review, the review dismissed by circulation; a Senior Advocate's certificate"],
      ["Curative, when and to whom", "A reasonable time after the review; first to the three senior-most Judges and the Judges who passed the judgment"],
      ["Vexatious", "Exemplary costs"]
    ],
    refs: ["Order XLVII", "Order XLVIII"] },

  /* ---------------------------------------------- the closing Orders */
  { id: "scr-tail", t: "scr-tail", k: "Orders L, LV and LVI",
    h: "Costs, inherent powers, and which records survive",
    hook: "==L==: costs are taxed by the ==Taxing Officer==, on the ==AoR's certificate of fees==. ==LV==: the Court's ==inherent powers== stay whole, for the ==ends of justice== or to ==prevent abuse of its process== (Rule 6); and for ==sufficient cause== it may ==excuse a party== from any requirement of the Rules (that application goes to a ==Judge in Chambers==). ==LVI==: ==Part One is kept for good==; ==Part Two is to be destroyed== after the period fixed.",
    hi: "50: Taxing Officer, AoR ka fees certificate. 55: inherent power (nyay ke liye, process ka durupyog rokne). 56: Part I hamesha, Part II to be destroyed.",
    short: "LVI: Part One kept for good, Part Two to be destroyed.",
    rows: [
      ["L, taxation", "By the Taxing Officer, on the Advocate-on-Record's certificate of fees"],
      ["LI, notice", "To the Attorney-General for India or a State's Advocate-General"],
      ["LV, Rule 6", "Inherent powers untouched: orders for the ends of justice or to prevent abuse of the process"],
      ["LV, to dispense", "For sufficient cause, a party excused from a requirement of the Rules; the application goes to a Judge in Chambers"],
      ["LVI, records", "Part I kept permanently; Part II destroyed after the period fixed"]
    ],
    refs: ["Order L", "Order LI", "Order LV", "Order LVI"] },

  /* ---------------------------------------------- every number */
  { id: "scr-numbers", t: "numbers", k: "The whole rule book",
    h: "Every number in the 2013 Rules, with its hook",
    hook: "Say each number with its hook until the number alone brings the hook back. These are the figures the questions turn on.",
    hi: "Har number apne hook ke saath bolo, jab tak sirf number sunte hi hook yaad na aa jaaye.",
    short: "Every number in the 2013 Rules, each with its hook.",
    rows: [
      ["57 Orders", "The last, LVII, repeals the 1966 Rules"],
      ["27 May 2014", "Notified"],
      ["19 August 2014", "In force: four days after Independence Day"],
      ["I, XVI, XXV", "Where Parts I, II and III begin"],
      ["Four years, one year, five chances", "To become an Advocate-on-Record: 4 + 1 = 5"],
      ["16 km, one month", "The AoR's office from the Court House; registering his clerk"],
      ["2, 3, 5 and 1 Judges", "An ordinary Bench; a death sentence; an election petition; small bail"],
      ["Seven years", "Bail SLPs a single Judge may hear: offences punishable up to this"],
      ["15, 30, 60, 90 days", "The Registrar; review, consumer, election; certificates, Advocates Act; SLP"],
      ["Form No. 28", "The SLP (civil)"],
      ["95 days", "Partial court working days and holidays, Sundays excluded (2024; it had been 103)"],
      ["10 to 5, 10 to 1", "Registry hours on weekdays, and on every Saturday (from 14 July 2025)"],
      ["20, 10 and ₹50,000", "Electors against a President, against a Vice-President; the security"],
      ["Rule 12", "Public interest litigation, in Order XXXVIII"],
      ["Three", "The senior-most Judges who first see a curative petition"]
    ],
    refs: [] }
  ]
};
