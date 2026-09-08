/* The Article Machine — data-artmap.js
   The article map: the exam's own index of the Constitution.

   WHY THIS EXISTS ALONGSIDE THE ARTICLE PAGES. The site already holds all
   506 articles with their official headings and plain-English notes, in
   numerical order. That is the right shape for reading one article and the
   wrong shape for revision, because an exam does not ask "what is article
   243-I" — it asks which article covers the State Finance Commission. This
   file is the reverse index: subject first, number second, grouped the way
   a syllabus groups them.

   THE HYPHENATED NUMBERS ARE REAL. The Constitution writes 243-I, 243-O,
   371-I and 243Z-I with a hyphen, so that the letter I is not read as the
   numeral 1. Written without it they do not match anything, which is
   exactly what happened on the first pass here.

   EVERY NUMBER HERE IS A LINK. The article numbers are rendered through the
   same linker the confused pairs use, so any row is one tap from the
   official text and the plain-English note.

   ONE ADDITION WORTH FLAGGING. Lists of the article 371 series usually run
   371A, B, C, D, then F — because 371E is less asked, not because it does
   not exist. It does: it provides for a Central University in Andhra
   Pradesh, and it is included here so the sequence has no silent hole.   */

window.ARTMAP = {

lede: "The Constitution indexed by subject rather than by number — every article an exam asks for, grouped, with each number a link to the text.",

intro: "Three ways in. The framework gives the ranges, so an unfamiliar number can be placed within seconds. The grouped list is the working index, subject by subject. The final list at the end is the shortlist to be certain of if time runs out.",

/* ------------------------------------------------------------- framework */

framework: [

{h:"The Constitution at a glance",
 note:"Learn these ranges and any article number can be placed roughly before it is even recognised.",
 rows:[
  ["Articles 1 to 4","The Union and its territory"],
  ["Articles 5 to 11","Citizenship"],
  ["Articles 12 to 35","Fundamental Rights"],
  ["Articles 36 to 51","Directive Principles of State Policy"],
  ["Article 51A","Fundamental Duties"],
  ["Articles 52 to 78","The Union Executive — President, Vice-President, Council of Ministers"],
  ["Articles 79 to 122","Parliament"],
  ["Article 123","The President's ordinance power"],
  ["Articles 124 to 147","The Supreme Court"],
  ["Article 148","The Comptroller and Auditor General"],
  ["Articles 153 to 167","The State Executive"],
  ["Articles 168 to 212","The State Legislature"],
  ["Article 213","The Governor's ordinance power"],
  ["Articles 214 to 231","The High Courts"],
  ["Article 243 onwards","Local government — Panchayats and Municipalities"],
  ["Article 280","The Finance Commission"],
  ["Article 300A","The right to property"],
  ["Article 324","Elections"],
  ["Articles 352 to 360","The emergencies"],
  ["Article 368","Amendment of the Constitution"]
 ]},

{h:"The twelve Schedules",
 note:"Each Schedule has its own page on this site with the full contents; this is the one-line version for recall.",
 rows:[
  ["First Schedule","The States and the Union Territories"],
  ["Second Schedule","Salaries and allowances of the constitutional authorities"],
  ["Third Schedule","Forms of oath and affirmation"],
  ["Fourth Schedule","Allocation of seats in the Rajya Sabha"],
  ["Fifth Schedule","Administration of Scheduled Areas and Scheduled Tribes"],
  ["Sixth Schedule","Tribal areas in Assam, Meghalaya, Tripura and Mizoram"],
  ["Seventh Schedule","The Union, State and Concurrent Lists"],
  ["Eighth Schedule","The 22 languages"],
  ["Ninth Schedule","Certain laws placed beyond ordinary challenge — subject, since 2007, to the basic structure test"],
  ["Tenth Schedule","Anti-defection"],
  ["Eleventh Schedule","The 29 subjects of the Panchayats"],
  ["Twelfth Schedule","The 18 subjects of the Municipalities"]
 ]},

{h:"The five Schedules that carry the marks",
 rows:[
  ["Seventh","The three Lists"],
  ["Eighth","Languages"],
  ["Tenth","Anti-defection"],
  ["Eleventh","Panchayats, 29 subjects"],
  ["Twelfth","Municipalities, 18 subjects"]
 ]}

],

/* ---------------------------------------------------------------- groups */

groups: [

{h:"Territory and citizenship",
 rows:[
  ["Article 1","India, that is Bharat, shall be a Union of States"],
  ["Article 2","Admission or establishment of new States"],
  ["Article 3","Formation of new States, and alteration of areas, boundaries or names"],
  ["Article 4","Laws made under articles 2 and 3, and what they may provide for"],
  ["Articles 5 to 11","Citizenship — who was a citizen at commencement, and Parliament's power to regulate it since"]
 ]},

{h:"Fundamental Rights — the frame",
 rows:[
  ["Article 12","Definition of “the State” — who the Fundamental Rights can be enforced against"],
  ["Article 13","Laws inconsistent with or in derogation of the Fundamental Rights. This is the textual basis of judicial review"]
 ]},

{h:"Right to Equality — 14 to 18",
 rows:[
  ["Article 14","Equality before the law and equal protection of the laws"],
  ["Article 15","Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth"],
  ["Article 16","Equality of opportunity in matters of public employment"],
  ["Article 17","Abolition of untouchability"],
  ["Article 18","Abolition of titles"]
 ]},

{h:"Right to Freedom — 19 to 22",
 rows:[
  ["Article 19","The six freedoms — speech and expression, assembly, association, movement, residence, and profession"],
  ["Article 20","Protection in respect of conviction for offences"],
  ["Article 21","Protection of life and personal liberty"],
  ["Article 21A","Right to education for children aged six to fourteen"],
  ["Article 22","Protection against arrest and detention in certain cases"]
 ]},

{h:"Right against Exploitation — 23 and 24",
 rows:[
  ["Article 23","Prohibition of traffic in human beings and forced labour"],
  ["Article 24","Prohibition of the employment of children in factories, mines and other hazardous work"]
 ]},

{h:"Right to Freedom of Religion — 25 to 28",
 rows:[
  ["Article 25","Freedom of conscience, and the free profession, practice and propagation of religion"],
  ["Article 26","Freedom to manage religious affairs"],
  ["Article 27","Freedom from taxation for the promotion of any particular religion"],
  ["Article 28","Freedom from religious instruction in certain educational institutions"]
 ]},

{h:"Cultural and Educational Rights — 29 and 30",
 rows:[
  ["Article 29","Protection of the interests of minorities — language, script and culture"],
  ["Article 30","The right of minorities to establish and administer educational institutions"]
 ]},

{h:"Right to Constitutional Remedies — 32",
 rows:[
  ["Article 32","The right to move the Supreme Court for the enforcement of the Fundamental Rights"],
  ["What Ambedkar called it","The heart and soul of the Constitution — said in the Constituent Assembly, and quoted ever since"],
  ["Compare","Article 226 gives the High Courts a wider writ power, because it covers other legal rights as well as Fundamental Rights"]
 ]},

{h:"Directive Principles — 36 to 51",
 note:"Not enforceable by any court, and that is stated in the Constitution itself, at article 37.",
 rows:[
  ["Article 36","Definition of “the State” for this Part"],
  ["Article 37","The Directive Principles are not enforceable by any court, but are fundamental in the governance of the country"],
  ["Article 38","The State to secure a social order for the promotion of the welfare of the people"],
  ["Article 39","Certain principles of policy — the socio-economic principles"],
  ["Article 39A","Equal justice and free legal aid"],
  ["Article 40","Organisation of village panchayats"],
  ["Article 41","Right to work, to education and to public assistance in certain cases"],
  ["Article 42","Just and humane conditions of work, and maternity relief"],
  ["Article 43","Living wage for workers"],
  ["Article 43A","Participation of workers in the management of industries"],
  ["Article 44","Uniform civil code for the citizens"],
  ["Article 45","Early childhood care and education for children below the age of six"],
  ["Article 46","Promotion of the educational and economic interests of the Scheduled Castes, Scheduled Tribes and other weaker sections"],
  ["Article 47","Nutrition, the standard of living, and public health"],
  ["Article 48","Organisation of agriculture and animal husbandry"],
  ["Article 48A","Protection and improvement of the environment, and safeguarding of forests and wildlife"],
  ["Article 49","Protection of monuments and places and objects of national importance"],
  ["Article 50","Separation of the judiciary from the executive"],
  ["Article 51","Promotion of international peace and security"],
  ["The five to hold","40 is panchayats, 44 is the uniform civil code, 48A is the environment, 50 is judiciary and executive, 51 is international peace"]
 ]},

{h:"Fundamental Duties",
 rows:[
  ["Article 51A","The Fundamental Duties — added by the 42nd Amendment in 1976, on the recommendation of the Swaran Singh Committee"]
 ]},

{h:"The President — 52 to 62, 72 to 78",
 rows:[
  ["Article 52","There shall be a President of India"],
  ["Article 53","The executive power of the Union"],
  ["Article 54","Election of the President"],
  ["Article 55","The manner of that election"],
  ["Article 56","Term of office"],
  ["Article 57","Eligibility for re-election"],
  ["Article 58","Qualifications for election"],
  ["Article 59","Conditions of the President's office"],
  ["Article 60","Oath or affirmation by the President"],
  ["Article 61","Procedure for impeachment"],
  ["Article 62","Time of holding an election to fill a vacancy"],
  ["Article 72","Power to grant pardons, reprieves, respites and remissions"],
  ["Article 74","The Council of Ministers to aid and advise the President"],
  ["Article 75","Other provisions as to Ministers, including collective responsibility"],
  ["Article 78","Duties of the Prime Minister towards the President"]
 ]},

{h:"The Vice-President — 63 to 71",
 rows:[
  ["Article 63","There shall be a Vice-President of India"],
  ["Article 64","The Vice-President is ex-officio Chairman of the Council of States"],
  ["Article 65","The Vice-President acts as President in a vacancy"],
  ["Article 66","Election of the Vice-President"],
  ["Article 67","Term of office"],
  ["Article 68","Time of holding an election to fill a vacancy"],
  ["Article 69","Oath or affirmation by the Vice-President"],
  ["Article 71","Matters relating to the election of a President or Vice-President"]
 ]},

{h:"Parliament — 79 to 123",
 rows:[
  ["Article 79","Constitution of Parliament"],
  ["Article 80","Composition of the Council of States, the Rajya Sabha"],
  ["Article 81","Composition of the House of the People, the Lok Sabha"],
  ["Article 83","Duration of the Houses of Parliament"],
  ["Article 84","Qualification for membership of Parliament"],
  ["Article 85","Sessions of Parliament, prorogation and dissolution"],
  ["Article 89","The Chairman and Deputy Chairman of the Council of States"],
  ["Article 93","The Speaker and Deputy Speaker of the House of the People"],
  ["Article 99","Oath or affirmation by members"],
  ["Article 100","Voting in the Houses, and the quorum"],
  ["Article 101","Vacation of seats"],
  ["Article 102","Disqualifications for membership"],
  ["Article 105","Powers, privileges and immunities of the Houses and their members"],
  ["Article 108","Joint sitting of both Houses"],
  ["Article 109","Special procedure in respect of Money Bills"],
  ["Article 110","Definition of a Money Bill"],
  ["Article 111","Assent to Bills by the President"],
  ["Article 112","The Annual Financial Statement — the Budget"],
  ["Article 117","Special provisions as to Financial Bills"],
  ["Article 118","Rules of procedure"],
  ["Article 123","Power of the President to promulgate ordinances when Parliament is not in session"],
  ["The three asked most","110 is the definition of a Money Bill, 112 is the Budget, 123 is the ordinance power"]
 ]},

{h:"The Governor and the State government — 153 to 213",
 rows:[
  ["Article 153","There shall be a Governor for each State"],
  ["Article 154","The executive power of the State"],
  ["Article 155","Appointment of the Governor"],
  ["Article 156","Term of office"],
  ["Article 157","Qualifications for appointment"],
  ["Article 158","Conditions of the Governor's office"],
  ["Article 161","Power to grant pardons and to suspend, remit or commute sentences"],
  ["Article 163","The Council of Ministers to aid and advise the Governor"],
  ["Article 164","Other provisions as to Ministers of the State"],
  ["Article 165","The Advocate General for the State"],
  ["Article 168","Constitution of the Legislatures in the States"],
  ["Article 169","Abolition or creation of Legislative Councils"],
  ["Article 170","Composition of the Legislative Assemblies"],
  ["Article 171","Composition of the Legislative Councils"],
  ["Article 172","Duration of the State Legislatures"],
  ["Article 174","Sessions of the State Legislature, prorogation and dissolution"],
  ["Article 178","The Speaker and Deputy Speaker of the Legislative Assembly"],
  ["Article 200","Assent to Bills by the Governor"],
  ["Article 201","Bills reserved for the consideration of the President"],
  ["Article 213","Power of the Governor to promulgate ordinances"]
 ]},

{h:"Panchayats — the 73rd Amendment",
 rows:[
  ["Article 243","Definitions"],
  ["Article 243A","The Gram Sabha"],
  ["Article 243B","Constitution of Panchayats"],
  ["Article 243D","Reservation of seats"],
  ["Article 243G","Powers, authority and responsibilities of Panchayats"],
  ["Article 243-I","Constitution of the State Finance Commission"],
  ["Article 243K","Elections, and the State Election Commission"]
 ]},

{h:"Municipalities — the 74th Amendment",
 note:"The Municipalities run from article 243P to 243ZG.",
 rows:[
  ["Article 243P","Definitions"],
  ["Article 243Q","Constitution of Municipalities"],
  ["Article 243T","Reservation of seats"],
  ["Article 243W","Powers, authority and responsibilities of Municipalities"],
  ["Article 243X","Power to impose taxes, and the funds of the Municipalities"],
  ["Article 243ZA","Elections to the Municipalities"]
 ]},

{h:"The constitutional bodies",
 note:"Eight numbers, and each one is a whole question on its own.",
 rows:[
  ["Article 76","The Attorney General of India"],
  ["Article 148","The Comptroller and Auditor General of India"],
  ["Article 165","The Advocate General for a State"],
  ["Article 280","The Finance Commission"],
  ["Article 315","Public Service Commissions for the Union and the States"],
  ["Article 320","Functions of the Public Service Commissions"],
  ["Article 324","The Election Commission"],
  ["Article 338","The National Commission for Scheduled Castes"],
  ["Article 338A","The National Commission for Scheduled Tribes"],
  ["Article 338B","The National Commission for Backward Classes"],
  ["Article 344","The Commission and Committee of Parliament on official language"],
  ["Article 350B","The Special Officer for Linguistic Minorities"]
 ]},

{h:"Emergency — 352 to 360",
 rows:[
  ["Article 352","Proclamation of a National Emergency"],
  ["Article 353","Effect of a Proclamation of Emergency"],
  ["Article 354","Application of provisions relating to the distribution of revenues"],
  ["Article 355","Duty of the Union to protect States against external aggression and internal disturbance"],
  ["Article 356","Provisions in case of failure of constitutional machinery in a State — President's Rule"],
  ["Article 357","Exercise of legislative powers under a Proclamation issued under article 356"],
  ["Article 358","Suspension of the provisions of article 19 during an emergency"],
  ["Article 359","Suspension of the enforcement of the rights conferred by Part III"],
  ["Article 360","Provisions as to a Financial Emergency"],
  ["Article 365","Effect of failure to comply with directions given by the Union"],
  ["The three to hold","352 is national, 356 is the State, 360 is financial"]
 ]},

{h:"Special provisions for particular States — 371 onwards",
 note:"Lists of this series usually run A, B, C, D, then jump to F. 371E is not missing from the Constitution, only from the lists — it is included here.",
 rows:[
  ["Article 371","Maharashtra and Gujarat"],
  ["Article 371A","Nagaland"],
  ["Article 371B","Assam"],
  ["Article 371C","Manipur"],
  ["Article 371D","Andhra Pradesh and Telangana"],
  ["Article 371E","Establishment of a Central University in Andhra Pradesh"],
  ["Article 371F","Sikkim"],
  ["Article 371G","Mizoram"],
  ["Article 371H","Arunachal Pradesh"],
  ["Article 371-I","Goa"],
  ["Article 371J","Karnataka — the Hyderabad-Karnataka region"],
  ["The sequence","A Nagaland, B Assam, C Manipur, D Andhra and Telangana, F Sikkim, G Mizoram, H Arunachal, I Goa, J Karnataka"]
 ]},

{h:"Language — 343 to 351",
 rows:[
  ["Article 343","The official language of the Union"],
  ["Article 344","The Commission and the Committee of Parliament on official language"],
  ["Article 345","The official language or languages of a State"],
  ["Article 346","The official language for communication between States, and between a State and the Union"],
  ["Article 347","Special provision relating to the language spoken by a section of the population of a State"],
  ["Article 348","Language to be used in the Supreme Court and the High Courts, and for Acts and Bills"],
  ["Article 350","Language in which a representation for redress of grievance may be submitted"],
  ["Article 350A","Instruction in the mother tongue at the primary stage"],
  ["Article 350B","The Special Officer for Linguistic Minorities"],
  ["Article 351","Directive for the development of Hindi"]
 ]},

{h:"Property, services, tribunals and elections",
 rows:[
  ["Article 300A","The right to property — a constitutional right, and no longer a Fundamental Right since the 44th Amendment in 1978"],
  ["Article 312","All-India Services"],
  ["Article 315","Public Service Commissions for the Union and the States"],
  ["Article 320","Functions of the Public Service Commissions"],
  ["Article 323A","Administrative tribunals"],
  ["Article 323B","Tribunals for other matters"],
  ["Article 324","Superintendence, direction and control of elections, vested in the Election Commission"],
  ["Article 325","No person to be ineligible for inclusion in, or to claim inclusion in a special, electoral roll on grounds of religion, race, caste or sex"],
  ["Article 326","Elections to the House of the People and to the Legislative Assemblies on the basis of adult suffrage"],
  ["Article 327","Power of Parliament to make provision with respect to elections"],
  ["Article 328","Power of the State Legislature to make provision with respect to elections"],
  ["Article 329","Bar to interference by courts in electoral matters"]
 ]},

{h:"Amendment, and the special provisions",
 rows:[
  ["Article 368","Power of Parliament to amend the Constitution, and the procedure for it"],
  ["Article 369","Temporary power of Parliament to make laws with respect to certain matters in the State List"],
  ["Article 370","Temporary provisions with respect to Jammu and Kashmir — substantially altered in August 2019"],
  ["Articles 371 to 371J","Special provisions for certain States"]
 ]},

{h:"The final list — the articles to be certain of",
 note:"If revision time runs out, this is the shortlist. Every number in it appears above with its subject.",
 rows:[
  ["Territory and citizenship","1, 3, 5 to 11"],
  ["Fundamental Rights","12, 13, 14, 15, 16, 17, 18, 19, 21, 21A, 22, 32"],
  ["Directives and duties","36 to 51, and 51A"],
  ["The Union executive","52, 54, 61, 63, 66, 72, 74, 75, 76"],
  ["Parliament","79, 80, 81, 83, 85, 93, 105, 108, 110, 112, 123"],
  ["The courts","124, 131, 136, 137, 141, 143, 214, 226"],
  ["Audit and the States","148, 153, 155, 156, 161, 163, 164, 169, 170, 171, 174, 200, 213"],
  ["Local government","243, 243A, 243D, 243G, 243-I, 243K"],
  ["Finance, services and elections","280, 300A, 312, 315, 320, 324, 326"],
  ["Commissions and language","338, 338A, 338B, 343, 350A, 351"],
  ["Emergency and amendment","352, 356, 360, 365, 368"]
 ]}

],

/* ---------------------------------------------------------------- courts */

courts: [

{h:"The Supreme Court — 124 to 147",
 note:"The whole range, in order. Eight of them do most of the work and are listed again below.",
 rows:[
  ["Article 124","Establishment and constitution of the Supreme Court"],
  ["Article 125","Salaries of the judges"],
  ["Article 126","Appointment of an acting Chief Justice"],
  ["Article 127","Appointment of ad hoc judges"],
  ["Article 128","Attendance of retired judges at sittings of the Supreme Court"],
  ["Article 129","The Supreme Court is a court of record, with the power to punish for contempt"],
  ["Article 130","Seat of the Supreme Court"],
  ["Article 131","Original jurisdiction — disputes between the Union and States, or between States"],
  ["Article 132","Appellate jurisdiction in appeals from High Courts in constitutional cases"],
  ["Article 133","Appellate jurisdiction in civil matters"],
  ["Article 134","Appellate jurisdiction in criminal matters"],
  ["Article 134A","Certificate for appeal to the Supreme Court"],
  ["Article 135","Jurisdiction and powers of the Federal Court under existing law"],
  ["Article 136","Special leave to appeal — the SLP"],
  ["Article 137","Review of its own judgments and orders"],
  ["Article 138","Enlargement of the jurisdiction of the Supreme Court"],
  ["Article 139","Conferment on the Supreme Court of powers to issue certain writs"],
  ["Article 139A","Transfer of certain cases"],
  ["Article 140","Ancillary powers of the Supreme Court"],
  ["Article 141","Law declared by the Supreme Court to be binding on all courts within India"],
  ["Article 142","Enforcement of decrees and orders, and the power to do complete justice"],
  ["Article 143","Power of the President to consult the Supreme Court — its advisory jurisdiction"],
  ["Article 144","All authorities, civil and judicial, to act in aid of the Supreme Court"],
  ["Article 145","Rules of court"],
  ["Article 146","Officers and servants, and the expenses of the Supreme Court"],
  ["Article 147","Interpretation"]
 ]},

{h:"The eight that matter most",
 note:"In order, and the order itself is the memory aid.",
 rows:[
  ["Article 124","The Supreme Court exists"],
  ["Article 129","Court of record"],
  ["Article 131","Original jurisdiction"],
  ["Article 136","Special leave to appeal"],
  ["Article 137","Review"],
  ["Article 141","Its law binds every court"],
  ["Article 142","Complete justice"],
  ["Article 143","Advisory jurisdiction"],
  ["The sequence","Court, record, original, SLP, review, binding, complete justice, advisory"]
 ]},

{h:"The High Courts — 214 to 231",
 rows:[
  ["Article 214","There shall be a High Court for each State"],
  ["Article 215","The High Courts are courts of record"],
  ["Article 216","Constitution of the High Courts"],
  ["Article 217","Appointment and conditions of the office of a High Court judge"],
  ["Article 218","Application of certain provisions relating to the Supreme Court to the High Courts"],
  ["Article 219","Oath or affirmation by the judges"],
  ["Article 220","Restriction on practice after being a permanent judge"],
  ["Article 221","Salaries of the judges"],
  ["Article 222","Transfer of a judge from one High Court to another"],
  ["Article 223","Appointment of an acting Chief Justice"],
  ["Article 224","Appointment of additional and acting judges"],
  ["Article 224A","Appointment of retired judges at sittings of High Courts"],
  ["Article 225","Jurisdiction of the existing High Courts"],
  ["Article 226","Power of the High Courts to issue certain writs"],
  ["Article 227","Power of superintendence over all courts by the High Court"],
  ["Article 228","Transfer of certain cases to the High Court"],
  ["Article 229","Officers and servants, and the expenses of the High Courts"],
  ["Article 230","Extension of the jurisdiction of High Courts to Union Territories"],
  ["Article 231","Establishment of a common High Court for two or more States"],
  ["The sequence","214 High Court, 215 record, 217 judges, 222 transfer, 226 writs, 227 superintendence"]
 ]},

{h:"Why article 226 is wider than article 32",
 note:"The single most asked comparison in the judiciary topic.",
 rows:[
  ["Article 32","The Supreme Court. Writs for the enforcement of Fundamental Rights only — and article 32 is itself a Fundamental Right"],
  ["Article 226","A High Court. Writs for Fundamental Rights AND for any other legal right"],
  ["Therefore","Article 226 is wider in scope than article 32. Article 32 is the stronger right, because it cannot be refused; article 226 is the broader power"]
 ]},

{h:"Subordinate courts — 233 to 237",
 rows:[
  ["Article 233","Appointment of district judges"],
  ["Article 234","Recruitment of persons other than district judges to the judicial service"],
  ["Article 235","Control over subordinate courts, vested in the High Court"],
  ["Article 236","Interpretation"],
  ["Article 237","Application of the provisions of this Chapter to certain classes of magistrates"],
  ["The three to hold","233 district judges, 234 recruitment, 235 control"]
 ]},

{h:"The five writs",
 note:"Both the Supreme Court under article 32 and the High Courts under article 226 issue all five.",
 rows:[
  ["Habeas corpus","“Produce the body.” The court orders a detained person to be brought before it, and releases them if the detention is unlawful"],
  ["Mandamus","“We command.” It orders a public authority to perform a public duty it has refused to perform"],
  ["Prohibition","It stops a lower court or tribunal from proceeding beyond its jurisdiction — while the proceeding is still going on"],
  ["Certiorari","It quashes an order already passed by a lower court or tribunal"],
  ["Quo warranto","“By what authority?” It challenges a person's right to hold a public office"],
  ["Prohibition against certiorari","Prohibition PREVENTS an ongoing proceeding. Certiorari QUASHES a decision already made. That timing is the whole difference"]
 ]},

{h:"Judicial review — the articles it rests on",
 rows:[
  ["Article 13","Laws inconsistent with the Fundamental Rights are void — the textual foundation"],
  ["Article 32","The Supreme Court's writ jurisdiction"],
  ["Article 131","The Supreme Court's original jurisdiction"],
  ["Article 136","Special leave to appeal"],
  ["Article 137","Review of its own judgments"],
  ["Article 141","Binding precedent"],
  ["Article 142","Complete justice"],
  ["Article 143","Advisory jurisdiction"],
  ["Article 226","The High Courts' writ jurisdiction"],
  ["Article 227","The High Courts' power of superintendence"],
  ["Article 228","Transfer to the High Court of a case involving a substantial question of constitutional law"],
  ["Articles 245 and 246","Legislative competence — who may make which law"],
  ["Article 254","Repugnancy between a Central law and a State law"],
  ["Article 368","Amendment — and the basic structure doctrine that limits it"]
 ]},

{h:"Tribunals",
 rows:[
  ["Article 323A","Administrative tribunals — added by the 42nd Amendment"],
  ["Article 323B","Tribunals for other matters — taxation, land reform, elections and more"],
  ["The difference","323A allows tribunals only for public service matters and only by Parliament. 323B covers a listed range of other subjects and may be used by State legislatures as well"]
 ]},

{h:"The twenty court articles to be certain of",
 rows:[
  ["Article 13","The foundation of judicial review"],
  ["Article 32","Supreme Court writs"],
  ["Article 124","The Supreme Court"],
  ["Article 129","Supreme Court as a court of record"],
  ["Article 131","Original jurisdiction"],
  ["Article 136","Special leave to appeal"],
  ["Article 137","Review"],
  ["Article 141","Binding law"],
  ["Article 142","Complete justice"],
  ["Article 143","Advisory jurisdiction"],
  ["Article 214","The High Courts"],
  ["Article 215","High Court as a court of record"],
  ["Article 217","High Court judges"],
  ["Article 222","Transfer of High Court judges"],
  ["Article 226","High Court writs"],
  ["Article 227","Superintendence"],
  ["Article 233","District judges"],
  ["Article 235","Control over subordinate courts"],
  ["Article 323A","Administrative tribunals"],
  ["Article 323B","Other tribunals"]
 ]}

]

};
