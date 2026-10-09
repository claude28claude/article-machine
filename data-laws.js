/* The Article Machine — data-laws.js
   The three criminal laws that replaced the IPC, the CrPC and the Evidence
   Act on 1 July 2024, and the sections of them that are asked by number.

   WHY THIS IS A SUBJECT AND NOT A STATIC GK PACK. Because the questions are
   about numbers. Since 2024 an SSC general awareness paper has asked which
   Sanhita replaced which Code, which section now carries murder, and what
   offence section 152 created in place of sedition. A list of three names
   does not answer any of that, and an answer that still says "IPC 302" is
   simply wrong for anything on or after 1 July 2024.

   HOW FIRM EACH KIND OF STATEMENT IS. Three levels, and the rows say which:

   1. FIRM. The names of the three Acts, what each replaced, the dates of
      passage, assent and commencement, and the rule that the date of the
      OFFENCE decides which law applies. These do not move.
   2. FIRM, BUT WORTH CHECKING ONCE. Section counts and chapter counts. The
      section counts below - BNS 358, BNSS 531, BSA 170, against IPC 511,
      CrPC 484 and Evidence Act 167 - are consistent across the official
      handbooks and the standard commentaries. Chapter counts vary between
      secondary sources more than they should, so where one is given the row
      says it is the commonly cited figure rather than asserting it flatly.
   3. THE SECTION NUMBERS. Every number below is one that the Bureau of
      Police Research and Development handbook, the Delhi Police handbook or
      two or more independent commentaries agree on. Where commentaries
      genuinely disagree - the undertrial bail fraction in BNSS 479 and the
      investigation timelines in BNSS 193 are the two live ones - the row
      gives both readings and says which is which rather than picking one
      quietly.

   WHAT THIS IS NOT. It is not legal advice and it is not a bare act. It is
   the list of provisions an exam asks you to name. The authoritative text of
   all three is on India Code; if you are doing anything other than
   answering a question, read that instead of this.                         */

window.LAWS = {

topics: [

/* ===================================================================
   1. THE THREE ACTS
   =================================================================== */
{id:"framework", n:"The three Acts, and what they replaced", hy:1,
 w:"The names, the laws each one replaced, the dates, the section counts, and the rule that decides which law applies to a given case.",
 intro:"Three Acts, passed together in December 2023 and brought into force together on 1 July 2024. The first thing to get right is which replaced which, because the names do not line up with the old ones in the order you would expect: the Nyaya Sanhita is the penal code, the Nagarik Suraksha Sanhita is the procedure code, and the Sakshya Adhiniyam is the evidence law.",
 blocks:[

  {h:"Which Act replaced which",
   note:"The commonest mistake is pairing Nagarik Suraksha Sanhita with the penal code because “suraksha” sounds like it should be about crime. It is the procedure code.",
   rows:[
    ["Bharatiya Nyaya Sanhita, 2023 (BNS)","Replaced the Indian Penal Code, 1860. The substantive law — what counts as a crime and what the punishment for it is. Act 45 of 2023."],
    ["Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)","Replaced the Code of Criminal Procedure, 1973. The procedural law — FIR, arrest, investigation, custody, trial, bail, judgment and appeal. Act 46 of 2023."],
    ["Bharatiya Sakshya Adhiniyam, 2023 (BSA)","Replaced the Indian Evidence Act, 1872. What may be proved, by what, and how. Act 47 of 2023."],
    ["How to keep the three straight","Nyaya means justice, so the Nyaya Sanhita says what is unjust — the offences. Nagarik Suraksha is the citizen's protection, so it is the procedure. Sakshya means evidence."],
    ["Who drafted the old three, and when","Macaulay drafted the Indian Penal Code, enacted in 1860 and in force from 1862. The Evidence Act of 1872 was drafted by James Fitzjames Stephen. The CrPC in force until 2024 was the 1973 version, which had itself replaced the 1898 code."]
   ]},

  {h:"The dates — all of them get asked",
   rows:[
    ["First introduced","11 August 2023, in the Lok Sabha, by the Home Minister. Those first bills were withdrawn and reintroduced in revised form on 12 December 2023."],
    ["Passed by Parliament","December 2023 — the Lok Sabha on 20 December and the Rajya Sabha on 21 December 2023."],
    ["Presidential assent","25 December 2023, by President Droupadi Murmu."],
    ["Brought into force","1 July 2024, for all three together, by notification."],
    ["Which committee examined them","The Parliamentary Standing Committee on Home Affairs, chaired by Brij Lal."],
    ["The one date that decides a case","The date of the OFFENCE, not the date of the FIR, the charge sheet or the trial. An offence committed before 1 July 2024 is still tried under the IPC, the CrPC and the Evidence Act; one committed on or after that date falls under the new three."],
    ["Why the old codes are not dead yet","Because of that rule, cases registered under the IPC will go on moving through the courts for years. Both sets of numbers therefore stay examinable."]
   ]},

  {h:"The numbers",
   note:"These counts are the most asked single fact about the three laws. The sections went DOWN for the penal code and UP for the other two.",
   rows:[
    ["Indian Penal Code against BNS","IPC 511 sections; BNS 358 sections. The penal code got shorter, by consolidating related offences into single sections with sub-sections."],
    ["CrPC against BNSS","CrPC 484 sections; BNSS 531 sections. The procedure code got longer, mainly through timelines, electronic procedure and forensic requirements."],
    ["Indian Evidence Act against BSA","Evidence Act 167 sections; BSA 170 sections — the smallest change of the three."],
    ["Chapters","BNS is commonly cited as having 20 chapters against the IPC's 23; BNSS as 39 against the CrPC's 37; BSA as 12 against the Evidence Act's 11. Secondary sources vary on these more than they should, so treat the chapter counts as the commonly cited figures and the section counts as the firm ones."],
    ["What was added and what went","20 new offences were added to the BNS and 19 provisions of the IPC were dropped. Punishments were raised: imprisonment increased for 33 offences, fines for 83, and a mandatory minimum introduced for 23."],
    ["The headline additions","Community service as a punishment; organised crime; petty organised crime; terrorism in the general penal code; mob lynching as a named aggravated form of murder; snatching; and sexual intercourse by deceitful means."],
    ["The headline deletions","Sedition by that name; the offence of attempting suicide generally; adultery and the unnatural-offences section, both already struck down by the Supreme Court before 2023 and simply not carried over."]
   ]}
 ]},

/* ===================================================================
   2. BNS
   =================================================================== */
{id:"bns", n:"Bharatiya Nyaya Sanhita — the sections", hy:1,
 w:"The punishments including community service, the new offences, and every section number an exam has reason to ask for.",
 intro:"The BNS is asked by section number, so the numbers are the content. Four groups carry almost all of it: the six punishments in section 4, the offences against the body around 100 to 120, the offences against women and children from 63, and the property offences from 303. The three genuinely new sections — 111 organised crime, 113 terrorist act and 152 in place of sedition — are asked more than any of them.",
 blocks:[

  {h:"Section 4 — the punishments",
   note:"Six kinds, and the sixth is the new one. A question asking which punishment the BNS introduced is asking for community service.",
   rows:[
    ["The six punishments","Death; imprisonment for life; imprisonment, either rigorous or simple; forfeiture of property; fine; and community service."],
    ["Community service","Clause (f) of section 4 — the punishment the IPC did not have. It is not available for every offence; only six sections carry it."],
    ["The six offences that carry community service","Sections 202, 209, 226, 303(2), 355 and 356(2) — a public servant unlawfully engaging in trade; non-appearance after a proclamation; attempting suicide to compel a public servant; petty theft by a first-time offender; misconduct in public by a drunken person; and defamation."],
    ["What community service is not","It is not defined in the BNS beyond the name; the BNSS leaves the form of it to the court. That gap is itself a standing criticism of the Act."]
   ]},

  {h:"Offences against the human body",
   rows:[
    ["Section 100","Culpable homicide — the definition. Was IPC 299."],
    ["Section 101","Murder — the definition. Was IPC 300. The old IPC 302 was the punishment, not the definition, and both numbers have changed."],
    ["Section 103","Punishment for murder — death or imprisonment for life, and fine. This is what IPC 302 used to be. An FIR filed after 1 July 2024 that says “302” is wrong."],
    ["Section 103(2) — mob lynching","Where five or more persons acting together murder on the ground of race, caste or community, sex, place of birth, language, personal belief or any similar ground, each of them is punishable with death or imprisonment for life, and fine. A named offence for the first time."],
    ["Section 105","Punishment for culpable homicide not amounting to murder. Was IPC 304."],
    ["Section 106","Causing death by a rash or negligent act. Was IPC 304A."],
    ["Section 106(2) — hit and run","Causing death by rash or negligent driving and then escaping without reporting it to a police officer or a magistrate — up to ten years and fine. This is the sub-section whose commencement was held back after the transporters' protest in January 2024."],
    ["Section 108","Abetment of suicide — up to ten years and fine. Was IPC 306."],
    ["Section 109","Attempt to murder. Was IPC 307."],
    ["Section 111 — organised crime","NEW. Continuing unlawful activity by a member of an organised crime syndicate, or on its behalf, using violence, threat, intimidation, coercion or other unlawful means for a material or financial benefit. It also punishes membership of a syndicate, harbouring an offender and holding the proceeds."],
    ["Section 112 — petty organised crime","NEW. Theft of a vehicle or from a vehicle, pickpocketing, card skimming, selling examination papers and similar organised petty crime causing general feelings of insecurity."],
    ["Section 113 — terrorist act","NEW. Terrorism enters the general penal code for the first time; it had lived only in the special law, the UAPA. The definition is drawn on UAPA lines."],
    ["Section 115","Voluntarily causing hurt."],
    ["Section 117","Voluntarily causing grievous hurt. Section 117(2) carries the aggravated form where the injury causes permanent disability or a persistent vegetative state; 117(4) covers grievous hurt by a group of five or more on a ground of identity."]
   ]},

  {h:"Offences against women and children — Chapter V",
   note:"The chapter was gathered together deliberately: offences that were scattered through the IPC now sit in one block from section 63.",
   rows:[
    ["Section 63","Rape — the definition. Was IPC 375. The age below which a married woman's consent is immaterial was raised from 15 to 18."],
    ["Section 64","Punishment for rape — rigorous imprisonment not less than ten years, extendable to imprisonment for life, and fine. Was IPC 376. Section 64(2) carries the aggravated categories."],
    ["Section 65","Rape of a woman under a stated age. For a victim under twelve: rigorous imprisonment not less than twenty years, extendable to imprisonment for the remainder of natural life, with fine or with death."],
    ["Section 66","Punishment where the rape causes the victim's death or leaves her in a persistent vegetative state — not less than twenty years, extendable to the remainder of natural life, or death."],
    ["Section 69 — deceitful means","NEW, and asked often because it is new. Sexual intercourse obtained by deceitful means or on a false promise to marry, where it does not amount to rape — up to ten years and fine. The explanation covers a false promise of employment or promotion and marrying by suppressing identity."],
    ["Section 70 — gang rape","Rigorous imprisonment not less than twenty years, extendable to the remainder of natural life, and fine. Section 70(2): where the victim is under eighteen, imprisonment for the remainder of natural life, or death."],
    ["Section 74","Assault or criminal force to a woman with intent to outrage her modesty — one to five years and fine. Was IPC 354."],
    ["Sections 75 to 78","Sexual harassment (75), disrobing (76), voyeurism (77) and stalking (78). These were IPC 354A to 354D. Stalking is up to three years on a first conviction and up to five on a second."],
    ["Section 79","Word, gesture or act intended to insult the modesty of a woman — simple imprisonment up to three years and fine. Was IPC 509."],
    ["Section 80","Dowry death. Was IPC 304B. The presumption that goes with it now sits in the BSA."],
    ["Section 85","Cruelty by a husband or his relative — up to three years and fine. Was IPC 498A, carried over substantially unchanged."],
    ["Section 86","What cruelty means for section 85 — wilful conduct likely to drive the woman to suicide or to cause grave injury or danger to life, limb or health, whether mental or physical, and harassment to coerce a dowry demand. The IPC kept this inside 498A; the BNS gives it a section of its own."]
   ]},

  {h:"Against the State, and the section that replaced sedition",
   rows:[
    ["Section 147","Waging, attempting to wage, or abetting the waging of war against the Government of India. Was IPC 121."],
    ["Section 152 — the sedition replacement","Acts endangering the sovereignty, unity and integrity of India: exciting secession, armed rebellion, subversive activities, or encouraging separatist feelings, by words, signs, visible representation, electronic communication, financial means or otherwise. Imprisonment for life, or up to seven years, and fine."],
    ["Sedition itself","The word, and IPC section 124A, are gone. The Government's position is that sedition has been repealed; the standing criticism is that section 152 is wider in reach than 124A was, and that its key phrases are left undefined."],
    ["What changed in substance","124A turned on disaffection towards the Government. 152 turns on endangering the sovereignty, unity and integrity of India — so the object protected moved from the government of the day to the State itself."]
   ]},

  {h:"Offences against property",
   rows:[
    ["Section 303","Theft. Was IPC 378 for the definition and 379 for the punishment."],
    ["Section 303(2)","The punishment, with the first-time petty-theft proviso: where the value is small and the property is returned or restored, a first-time offender may be given community service."],
    ["Section 304 — snatching","NEW. Theft committed by suddenly or quickly or forcibly seizing, securing, grabbing or taking away movable property from a person or from his possession — up to three years and fine. Snatching had no section of its own in the IPC."],
    ["Section 309","Robbery. Was IPC 390 for the definition and 392 for the punishment."],
    ["Section 310","Dacoity — robbery by five or more persons. Was IPC 391 and 395."],
    ["Section 316","Criminal breach of trust. Was IPC 405 and 406, with the heavier punishment for a public servant, banker, merchant or agent carried over."],
    ["Section 318","Cheating. Was IPC 415 for the definition and 420 for cheating and dishonestly inducing delivery of property — so “420”, the most famous number in Indian criminal law, is now 318."],
    ["Section 319","Cheating by personation. Was IPC 416 and 419."],
    ["Section 351","Criminal intimidation. Was IPC 503 for the definition and 506 for the punishment, now in one section."],
    ["Section 356","Defamation. Was IPC 499 and 500. Up to two years, or fine, or both, or community service — the community-service option is in 356(2)."],
    ["Section 226","NEW. Attempting to commit suicide with intent to compel or restrain a public servant from discharging his duty — simple imprisonment up to one year, or fine, or both, or community service. Apart from this, attempting suicide is no longer an offence at all."]
   ]}
 ]},

/* ===================================================================
   3. BNSS
   =================================================================== */
{id:"bnss", n:"Bharatiya Nagarik Suraksha Sanhita — the procedure", hy:1,
 w:"Zero FIR and e-FIR, mandatory forensics, the custody and bail changes, trial in absentia, and the timelines the Act now puts on the courts.",
 intro:"The BNSS is where the visible changes are, because procedure is what a person actually meets. Five themes carry it: filing a complaint anywhere and electronically; forensic evidence made compulsory for serious crime; custody and bail recast; trial able to proceed without an absconding accused; and statutory deadlines on steps that previously had none.",
 blocks:[

  {h:"Filing a case",
   rows:[
    ["Section 173 — FIR, with no jurisdiction bar","An FIR for a cognizable offence must be registered whatever the territorial jurisdiction of the police station. Zero FIR, which until now rested on judicial decisions and circulars, has a statutory home."],
    ["e-FIR","Section 173 allows information to be given by electronic communication. Where it is, the person giving it must sign it within three days for it to be entered in the book."],
    ["Preliminary enquiry","For an offence punishable with three years or more but less than seven, the officer may, with a superior's permission, make a preliminary enquiry within fourteen days to see whether a prima facie case exists."],
    ["Section 193 — the police report","Replaces CrPC 173. The charge sheet must be filed within the prescribed period, and further investigation after it needs the court's permission. Commentaries differ on the exact figures quoted for the investigation deadlines, so read section 193 itself before quoting a number; what is not in doubt is that investigation into offences against women and children carries its own shorter deadline of two months from the recording of the information."],
    ["Progress told to the victim","The informant or victim must be told the progress of the investigation, including by electronic means, within ninety days."]
   ]},

  {h:"Investigation, custody and bail",
   rows:[
    ["Section 176 — forensics made compulsory","For any offence punishable with seven years or more, a forensic expert must visit the scene and collect evidence, and the process must be recorded on audio-video. States without the facility may use another state's for the time being."],
    ["Section 105 — search and seizure recorded","Search and seizure must be recorded by audio-video electronic means, and the recording sent to the magistrate without delay."],
    ["Section 187 — police custody","The CrPC 167 equivalent. The fifteen days of police custody may now be sought in parts, at any point in the first forty days of a sixty-day case or the first sixty of a ninety-day case, instead of only in the first fifteen days after arrest. This is among the most criticised changes, because a court may refuse bail while the police still hold custody time in reserve."],
    ["Section 479 — undertrial release","Replaces CrPC 436A. An undertrial who has served half the maximum sentence for the offence must be released on bond. For a FIRST-TIME offender — never convicted before — the threshold is one third instead of half. Commentaries quoting only “half” or only “one third” are each giving one limb of the same section."],
    ["Who may not use section 479","It does not apply where the offence is punishable with death, and the relief is narrowed where the person is facing more than one case."],
    ["Handcuffs","The BNSS permits handcuffing for stated categories — a habitual or repeat offender who escaped custody, and those accused of organised crime, terrorist acts, drug offences, offences against the State, rape, acid attack, counterfeit currency and similar — which the CrPC did not spell out."],
    ["Arrest told to the family","The police must inform a person nominated by the arrested person, and details of the arrest must be displayed prominently at every police station and district headquarters."]
   ]},

  {h:"Trial, judgment and the deadlines",
   rows:[
    ["Section 356 — trial in absentia","NEW in substance. A proclaimed offender who absconds and continues to stay away may now be tried and sentenced in absence. CrPC 299 allowed only the recording of evidence; it did not let the trial finish."],
    ["When it can be used","Only after the person has been declared a proclaimed offender under the BNSS and remains absent — not simply because an accused failed to appear."],
    ["Electronic proceedings","Trials, inquiries and proceedings may be held by audio-video electronic means, and the Act defines “electronic communication” and “audio-video electronic means” for the purpose. Summonses, warrants, documents, statements and depositions may be served and recorded electronically."],
    ["Statement of a rape survivor","Must be recorded by a woman magistrate, or in her absence by a male magistrate in the presence of a woman, and may be recorded by audio-video means."],
    ["Charges to be framed","Within sixty days of the first hearing on charge."],
    ["Judgment","To be delivered within forty-five days of the conclusion of the trial, and a copy supplied free to the victim as well as the accused."],
    ["Sanction to prosecute a public servant","To be decided within one hundred and twenty days of the request, failing which it is deemed to have been granted."],
    ["Mercy petitions","Timelines are put on a convict's mercy petition for the first time — thirty days from the date the jail notifies the disposal of the final appeal, and no appeal lies against the President's order."],
    ["Witness protection","Every state government is required to prepare and notify a witness protection scheme."],
    ["Summary trial","Made mandatory for petty offences — theft, receiving stolen property and similar where the value is small, and offences punishable with up to three years."],
    ["The classes of magistrate","The separate class of Metropolitan Magistrate is gone; the Act works with Judicial Magistrates of the first and second class and Chief Judicial Magistrates throughout."]
   ]}
 ]},

/* ===================================================================
   4. BSA
   =================================================================== */
{id:"bsa", n:"Bharatiya Sakshya Adhiniyam — the evidence", hy:1,
 w:"Electronic records as documents and as primary evidence, the certificate that replaced section 65B, and what otherwise carried over unchanged.",
 intro:"The BSA is the least changed of the three, and almost everything asked about it is about electronic evidence. The Evidence Act of 1872 treated a computer output as a special case needing a certificate under section 65B; the BSA brings electronic records inside the ordinary definition of a document and then keeps — and tightens — the certificate for computer output.",
 blocks:[

  {h:"What changed",
   rows:[
    ["Electronic records are documents","The definition of “document” now expressly includes electronic and digital records — emails, server logs, messages on a device, locational evidence and voice mail. Under the 1872 Act they were admitted through a separate route."],
    ["Section 61 — no refusal merely for being electronic","An electronic or digital record may not be denied admissibility only because it is electronic; it has the same legal effect as paper, subject to section 63."],
    ["Section 62","The contents of an electronic record are proved in accordance with section 63."],
    ["Section 63 — the certificate, and what replaced 65B","Computer output is admissible on the section 65B-style conditions, but the certificate is stricter: it is in two parts, signed both by the person in charge of the device or management of the relevant activities and by an expert, and it must state the hash value of the record. The form is prescribed in the Schedule to the Act."],
    ["Why the hash value matters","It is what lets a court test later whether the file produced is the file seized. The old certificate had no equivalent requirement, which is what made tampering arguments so common."],
    ["Primary evidence widened","Electronic records stored or created simultaneously in several files, devices or storage media are treated as primary evidence rather than as copies. The Act's explanations to the primary-evidence section carry this; commentaries differ on whether to cite that section or section 62's explanation, so cite the provision you have actually read."],
    ["Oral evidence electronically","Oral evidence may be given electronically, so a witness, an accused or a victim may depose by audio-video electronic means from somewhere else."],
    ["Joint trials","The Act clarifies that where an accused absconds or does not comply with a proclamation, the trial of the others is deemed to be a joint trial."],
    ["What did NOT change","The great bulk of it. Relevancy, admissions, confessions to the police being inadmissible, dying declarations, expert opinion, estoppel, burden of proof and the presumptions all carry over in substance; the section numbers moved but the law did not."]
   ]}
 ]},

/* ===================================================================
   5. THE MAPPING
   =================================================================== */
{id:"mapping", n:"IPC to BNS — the conversion that is asked", hy:1,
 w:"The old number against the new one for the sections a question is actually built around.",
 intro:"The single most likely form of the question is a match: give the IPC section and ask for the BNS one, or the other way round. This is that table, limited to the sections that are famous enough to be asked. Nothing is gained by trying to learn all 358.",
 blocks:[

  {h:"The ones worth knowing cold",
   note:"Left column is the IPC number a person will have grown up hearing; right column is what it is now.",
   rows:[
    ["IPC 302 — punishment for murder","BNS 103. The definition moved from IPC 300 to BNS 101."],
    ["IPC 304 — culpable homicide not amounting to murder","BNS 105."],
    ["IPC 304A — death by negligence","BNS 106."],
    ["IPC 304B — dowry death","BNS 80."],
    ["IPC 306 — abetment of suicide","BNS 108."],
    ["IPC 307 — attempt to murder","BNS 109."],
    ["IPC 309 — attempt to commit suicide","Gone as a general offence. Only BNS 226 survives, and only where the attempt is meant to compel a public servant."],
    ["IPC 375 and 376 — rape, definition and punishment","BNS 63 and 64."],
    ["IPC 354 — outraging modesty","BNS 74. The 354A to 354D family is BNS 75 to 78."],
    ["IPC 498A — cruelty by husband or relative","BNS 85, with the definition of cruelty split out into BNS 86."],
    ["IPC 509 — insulting a woman's modesty","BNS 79."],
    ["IPC 121 — waging war against the Government","BNS 147."],
    ["IPC 124A — sedition","Repealed. BNS 152 covers acts endangering the sovereignty, unity and integrity of India, which is not the same offence."],
    ["IPC 153A — promoting enmity between groups","BNS 196."],
    ["IPC 379 — theft","BNS 303."],
    ["IPC 392 — robbery","BNS 309."],
    ["IPC 395 — dacoity","BNS 310."],
    ["IPC 406 — criminal breach of trust","BNS 316."],
    ["IPC 420 — cheating","BNS 318."],
    ["IPC 506 — criminal intimidation","BNS 351."],
    ["IPC 499 and 500 — defamation","BNS 356."],
    ["No IPC equivalent at all","BNS 111 organised crime, 112 petty organised crime, 113 terrorist act, 69 sex by deceitful means, 304 snatching, and 103(2) mob lynching as a named offence."]
   ]},

  {h:"CrPC to BNSS, and Evidence Act to BSA",
   rows:[
    ["CrPC 154 — FIR","BNSS 173."],
    ["CrPC 167 — custody during investigation","BNSS 187."],
    ["CrPC 173 — police report","BNSS 193."],
    ["CrPC 299 — evidence against an absconder","BNSS 356, which goes further and allows the trial itself to be completed."],
    ["CrPC 436A — release of an undertrial","BNSS 479."],
    ["Evidence Act 65B — electronic records certificate","BSA 63."],
    ["Evidence Act 113B — presumption as to dowry death","Carried over into the BSA; the offence itself is BNS 80."]
   ]}
 ]}

],

/* =================================================================== */
confusions: [
 {k:"Which Sanhita replaced which old law",
  rows:[
   ["Bharatiya Nyaya Sanhita (BNS)","Indian Penal Code, 1860 — the OFFENCES."],
   ["Bharatiya Nagarik Suraksha Sanhita (BNSS)","Code of Criminal Procedure, 1973 — the PROCEDURE."],
   ["Bharatiya Sakshya Adhiniyam (BSA)","Indian Evidence Act, 1872 — the EVIDENCE."]],
  note:"Nagarik Suraksha sounds as though it should be the crime law and is not. Nyaya is the penal code."},

 {k:"Murder: which number now",
  rows:[
   ["Definition of murder","BNS 101, which was IPC 300."],
   ["Punishment for murder","BNS 103, which was IPC 302."],
   ["Mob lynching","BNS 103(2) — five or more, on a ground of identity."]],
  note:"“302” is the number everyone knows and it is the wrong answer for any offence on or after 1 July 2024."},

 {k:"Sedition against section 152",
  rows:[
   ["IPC 124A, sedition","Disaffection towards the Government established by law. Repealed, not renumbered."],
   ["BNS 152","Exciting secession, armed rebellion or subversive activity, or endangering the sovereignty, unity and integrity of India. Life, or up to seven years, and fine."]],
  note:"If a question says sedition has been abolished, that is right. If it says sedition is now section 152, that is the loose version — the protected object changed from the government to the State."},

 {k:"The section counts, which way each moved",
  rows:[
   ["Penal code","IPC 511 → BNS 358. DOWN."],
   ["Procedure code","CrPC 484 → BNSS 531. UP."],
   ["Evidence law","Evidence Act 167 → BSA 170. UP, slightly."]],
  note:"Only the penal code got shorter. The options in this question are always the three numbers in the wrong order."},

 {k:"Which date applies to a case",
  rows:[
   ["Offence before 1 July 2024","IPC, CrPC and Evidence Act, however late the FIR or the trial."],
   ["Offence on or after 1 July 2024","BNS, BNSS and BSA."]],
  note:"The date of the OFFENCE governs — not the FIR, not the charge sheet, not the trial."},

 {k:"BNSS 479: half or one third",
  rows:[
   ["An undertrial generally","Released on bond after serving HALF the maximum sentence for the offence."],
   ["A first-time offender, never convicted","Released on bond after serving ONE THIRD."]],
  note:"Both figures are in the same section. A source quoting only one of them is giving one limb, not contradicting the other."},

 {k:"Community service: which offences",
  rows:[
   ["The six sections","BNS 202, 209, 226, 303(2), 355 and 356(2)."],
   ["In plain terms","A public servant trading unlawfully; not appearing after a proclamation; attempting suicide to compel a public servant; petty theft by a first-timer; drunken misconduct in public; and defamation."]],
  note:"Community service is the new punishment in section 4(f), and it is available for these six only — not as a general alternative to a fine."}
]

};
