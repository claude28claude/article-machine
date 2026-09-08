/* The Article Machine — data-treaties.js
   The treaties of modern Indian history, and the post-independence
   agreements, in the form the exam asks them.

   WHY A SEPARATE SECTION. A treaty question is always the same shape:
   which year, between whom, and which war did it end. The timeline already
   carries the wars; this carries the settlements, arranged so that the four
   things a question can ask are on one line.

   TWO DATES THAT MOVE, AND BOTH ARE GIVEN. Sugauli was signed in December
   1815 and ratified in March 1816, so both years appear in answer keys —
   1816 is the usual one. Pondicherry is dated 1754 by some sources and 1755
   by others, because a provisional treaty was signed in December 1754 and
   the definitive one the following year. Where a date moves, the entry says
   so rather than picking one and sounding certain.

   ONE ENTRY IS FLAGGED AS THE WEAKER ASSOCIATION. The Fourth Anglo-Mysore
   War is sometimes tied to a "Treaty of Srirangapatam, 1799". The firm
   association for that name is 1792 and the THIRD war; 1799 ended with
   Tipu's death and a partition of Mysore. Both are set out.               */

window.TREATIES = {

lede: "Twenty treaties, four wars fought four times over, and the six agreements signed since 1947.",

intro: "Every treaty question is one of four things: the year, the two sides, the war it ended, or the single term that mattered. The first table has all four on one line for the sixteen that come up most; the tables after it group them by the enemy, which is how they are actually remembered. Then the chronological drill, and the pairs that are built to be confused.",

/* ------------------------------------------------------------------- main */

main: [

{h:"The sixteen to memorise first",
 note:"Year, parties, and the one fact each treaty is asked for.",
 rows:[
  ["Treaty of Alinagar — 1757","British and Siraj-ud-Daulah. The British regained their trading privileges. Signed months before Plassey, and it settled nothing"],
  ["Treaty of Allahabad — 1765","East India Company and Shah Alam II. The Company got the Diwani — the right to collect revenue — of Bengal, Bihar and Orissa. The single most consequential treaty on this list"],
  ["Treaty of Madras — 1769","British and Hyder Ali. Ended the First Anglo-Mysore War"],
  ["Treaty of Wadgaon — 1779","British and the Marathas. A British defeat in the First Anglo-Maratha War; they had to give up what they had gained"],
  ["Treaty of Salbai — 1782","British and the Marathas. Ended the First Anglo-Maratha War and bought about twenty years of peace"],
  ["Treaty of Mangalore — 1784","British and Tipu Sultan. Ended the Second Anglo-Mysore War, with each side restoring what it had taken"],
  ["Treaty of Seringapatam — 1792","British with the Marathas and the Nizam, against Tipu Sultan. Ended the Third Anglo-Mysore War; Tipu ceded about half his territory and paid an indemnity"],
  ["Treaty of Bassein — 1802","British and Peshwa Baji Rao II. The Peshwa accepted the Subsidiary Alliance — and the other Maratha chiefs refused to accept it, which started the Second Anglo-Maratha War"],
  ["Treaty of Deogaon — 1803","British and Raghuji II Bhonsle. Ended the Bhonsle's resistance in the Second Anglo-Maratha War"],
  ["Treaty of Surji-Anjangaon — 1803","British and Daulat Rao Scindia. Scindia ceded major territories"],
  ["Treaty of Amritsar — 1809","British and Maharaja Ranjit Singh. Fixed the two spheres of influence, with the Sutlej as the line that mattered"],
  ["Treaty of Sugauli — 1816","British and Nepal. Ended the Anglo-Nepalese, or Gurkha, War of 1814–16; Nepal gave up substantial territory"],
  ["Treaty of Lahore — 1846","British and the Sikh Empire. Ended the First Anglo-Sikh War"],
  ["Treaty of Amritsar — 1846","British and Gulab Singh. Kashmir was transferred to him for ₹75 lakh, and he became the ruler of Jammu and Kashmir"],
  ["Treaty of Gandamak — 1879","British and Afghanistan. Ended the Second Anglo-Afghan War"],
  ["Treaty of Rawalpindi — 1919","British and Afghanistan. Ended the Third Anglo-Afghan War; Afghanistan's control of its own foreign affairs was recognised"]
 ]}

],

/* ------------------------------------------------------------------- wars */

wars: [

{h:"The Anglo-Maratha treaties",
 note:"Seven treaties across three wars. Surat started the first war, Salbai ended it, Bassein started the second.",
 rows:[
  ["Treaty of Surat — 1775","British and Raghunath Rao. The British agreed to back his claim to the office of Peshwa, and that promise helped trigger the First Anglo-Maratha War"],
  ["Treaty of Purandar — 1776","British and the Marathas. An attempt to settle the Peshwa succession dispute, and it superseded Surat"],
  ["Treaty of Wadgaon — 1779","A major Maratha victory. The British were forced to surrender the gains of the campaign"],
  ["Treaty of Salbai — 1782","Ended the First Anglo-Maratha War, and established roughly twenty years of peace between the British and the Marathas"],
  ["Treaty of Bassein — 1802","British and Peshwa Baji Rao II. The Peshwa accepted the Subsidiary Alliance; the other Maratha chiefs opposed it, and it became the immediate cause of the Second Anglo-Maratha War"],
  ["Treaty of Deogaon — 1803","British and Raghuji II Bhonsle. The Bhonsle accepted British terms"],
  ["Treaty of Surji-Anjangaon — 1803","British and Daulat Rao Scindia. Scindia surrendered important territories"]
 ]},

{h:"The Anglo-Mysore treaties",
 note:"Four wars, three treaties. The fourth war has no treaty to memorise, and that itself is the answer to one version of the question.",
 rows:[
  ["First Anglo-Mysore War","Ended by the Treaty of Madras, 1769, between the British and Hyder Ali"],
  ["Second Anglo-Mysore War","Ended by the Treaty of Mangalore, 1784, between the British and Tipu Sultan, with a mutual restoration of conquered territory"],
  ["Third Anglo-Mysore War","Ended by the Treaty of Seringapatam, 1792 — the British with the Marathas and the Nizam against Tipu. Tipu surrendered about half his territory and paid an indemnity"],
  ["Fourth Anglo-Mysore War, 1799","No major treaty to memorise. Tipu Sultan was killed, Mysore's territories were divided, and the Wodeyar dynasty was restored under British influence"],
  ["The order, and the years","Madras, then Mangalore, then Seringapatam, then 1799. That is 1769, 1784, 1792, 1799 — and the initials run M, M, S"]
 ]},

{h:"The Anglo-Sikh treaties",
 note:"Two treaties called Amritsar, thirty-seven years apart, with different signatories. This is the classic trap in the whole topic.",
 rows:[
  ["Treaty of Amritsar — 1809","British and Maharaja Ranjit Singh. The British and Sikh spheres of influence were defined around the Sutlej"],
  ["Treaty of Lahore — 1846","British and the Sikh Empire. Ended the First Anglo-Sikh War"],
  ["Treaty of Amritsar — 1846","British and Gulab Singh. Kashmir was transferred to him for ₹75 lakh, and he became ruler of Jammu and Kashmir"],
  ["The trap, stated plainly","1809 Amritsar is Ranjit Singh. 1846 Amritsar is Gulab Singh. The year decides which one the question means"]
 ]},

{h:"The Anglo-Nepalese treaty",
 note:"One treaty, one war, and one name to attach to Nepal.",
 rows:[
  ["Treaty of Sugauli","British and Nepal. It ended the Anglo-Nepalese War of 1814–16 and Nepal surrendered substantial territory"],
  ["The year","Usually given as 1816. It was signed in December 1815 and ratified in March 1816, which is why some sources say 1815 — 1816 is the answer expected"],
  ["The association to hold","Sugauli means Nepal, and nothing else on this list does"]
 ]},

{h:"The Anglo-Afghan treaties",
 note:"Two treaties, two wars, and the wars are numbered two and three — the first has neither on this list.",
 rows:[
  ["Treaty of Gandamak — 1879","Ended the Second Anglo-Afghan War"],
  ["Treaty of Rawalpindi — 1919","Ended the Third Anglo-Afghan War. Afghanistan obtained recognition of its control over its own foreign affairs"],
  ["The pairing","Gandamak goes with the second war, Rawalpindi with the third"]
 ]},

{h:"The other treaties worth knowing",
 rows:[
  ["Treaty of Paris — 1763","Ended the Seven Years' War, and with it the serious phase of Anglo-French rivalry in India"],
  ["Treaty of Pondicherry — 1754","Associated with the end of the Second Carnatic War. Some sources date it 1755, because a provisional treaty was signed in December 1754 and the definitive one followed"],
  ["Treaty of Srirangapatam — 1799","Sometimes attached to the settlement after Tipu's defeat. The firm association for this name is 1792 and the THIRD Anglo-Mysore War, so answer 1792 unless the question itself supplies 1799"]
 ]}

],

/* ------------------------------------------------------------------- post */

post: [

{h:"After independence",
 note:"Six agreements, and every one is asked by year and by the two leaders or the two countries.",
 rows:[
  ["Panchsheel Agreement — 1954","India and China. The Five Principles of Peaceful Coexistence"],
  ["Indus Waters Treaty — 1960","India and Pakistan, mediated by the World Bank"],
  ["Tashkent Agreement — 1966","India and Pakistan, after the 1965 war"],
  ["Shimla Agreement — 1972","India and Pakistan, after the 1971 war"],
  ["India–Sri Lanka Accord — 1987","Rajiv Gandhi and J. R. Jayewardene, on the Sri Lankan Tamil question"],
  ["Lahore Declaration — 1999","India and Pakistan — Vajpayee and Nawaz Sharif"]
 ]}

],

/* ------------------------------------------------------------------ drill */

drill: [

{h:"Twenty treaties in chronological order",
 note:"Learn the sequence and the year questions answer themselves. Two pairs share a year — 1803 twice and 1846 twice.",
 rows:[
  ["1757","Alinagar"],
  ["1763","Paris"],
  ["1765","Allahabad"],
  ["1769","Madras"],
  ["1775","Surat"],
  ["1776","Purandar"],
  ["1779","Wadgaon"],
  ["1782","Salbai"],
  ["1784","Mangalore"],
  ["1792","Seringapatam"],
  ["1802","Bassein"],
  ["1803","Deogaon"],
  ["1803","Surji-Anjangaon"],
  ["1809","Amritsar — Ranjit Singh"],
  ["1816","Sugauli"],
  ["1846","Lahore"],
  ["1846","Amritsar — Gulab Singh"],
  ["1879","Gandamak"],
  ["1919","Rawalpindi"],
  ["1972","Shimla Agreement"]
 ]},

{h:"The ten that come up most",
 note:"If time runs out, these are the ten to be certain of.",
 rows:[
  ["Allahabad 1765","Diwani of Bengal, Bihar and Orissa"],
  ["Madras 1769","First Anglo-Mysore War"],
  ["Salbai 1782","First Anglo-Maratha War"],
  ["Mangalore 1784","Second Anglo-Mysore War"],
  ["Seringapatam 1792","Third Anglo-Mysore War"],
  ["Bassein 1802","The Peshwa accepts the Subsidiary Alliance"],
  ["Amritsar 1809","Ranjit Singh"],
  ["Sugauli 1816","Nepal"],
  ["Lahore 1846","First Anglo-Sikh War"],
  ["Amritsar 1846","Gulab Singh and Kashmir"]
 ]}

],

/* ------------------------------------------------------------ confusions */

confusions: [

{k:"Amritsar 1809 and Amritsar 1846",
 rows:[
  ["1809","With Maharaja Ranjit Singh. Spheres of influence around the Sutlej"],
  ["1846","With Gulab Singh. Kashmir for ₹75 lakh, and he becomes its ruler"]
 ],
 note:"Same city, same name, two different men and two different centuries of consequence. The year is the only thing distinguishing them in an option."},

{k:"Alinagar and Allahabad",
 rows:[
  ["Alinagar, 1757","With Siraj-ud-Daulah. Trading privileges restored, and it held for a matter of months"],
  ["Allahabad, 1765","With Shah Alam II. The Diwani of Bengal, Bihar and Orissa"]
 ],
 note:"Two A-names eight years apart. Alinagar is before Plassey; Allahabad is after Buxar, and it is the one that gave the Company its revenue."},

{k:"Surat, Purandar, Wadgaon, Salbai",
 rows:[
  ["Surat, 1775","Started it — the British back Raghunath Rao"],
  ["Purandar, 1776","An attempt to settle the succession, superseding Surat"],
  ["Wadgaon, 1779","A British defeat; they surrender their gains"],
  ["Salbai, 1782","Ends the First Anglo-Maratha War"]
 ],
 note:"Four treaties in one war. Surat begins it and Salbai ends it; the two in between are the ones dropped in as wrong options."},

{k:"Madras, Mangalore, Seringapatam",
 rows:[
  ["Madras, 1769","First Anglo-Mysore War — with Hyder Ali"],
  ["Mangalore, 1784","Second Anglo-Mysore War — with Tipu Sultan"],
  ["Seringapatam, 1792","Third Anglo-Mysore War — Tipu cedes about half his territory"],
  ["1799","Fourth war. No treaty to name; Tipu is killed and Mysore is divided"]
 ],
 note:"Hyder Ali signs the first; Tipu signs the next two and does not survive the fourth."},

{k:"Salbai and Bassein",
 rows:[
  ["Salbai, 1782","ENDED the First Anglo-Maratha War"],
  ["Bassein, 1802","CAUSED the Second Anglo-Maratha War, by making the Peshwa accept the Subsidiary Alliance"]
 ],
 note:"One closed a war and one opened one. A question that asks which treaty led to a war is almost always asking about Bassein."},

{k:"Lahore 1846 and the Lahore Declaration 1999",
 rows:[
  ["Treaty of Lahore, 1846","British and the Sikh Empire, ending the First Anglo-Sikh War"],
  ["Lahore Declaration, 1999","India and Pakistan — Vajpayee and Nawaz Sharif"]
 ],
 note:"Same city, a century and a half apart, and one is a treaty while the other is a declaration."},

{k:"Gandamak and Rawalpindi",
 rows:[
  ["Gandamak, 1879","Second Anglo-Afghan War"],
  ["Rawalpindi, 1919","Third Anglo-Afghan War, and Afghan control of foreign affairs is recognised"]
 ],
 note:"Two Afghan wars, two treaties, and the later date goes with the later war — which is the only rule needed here."},

{k:"Tashkent and Shimla",
 rows:[
  ["Tashkent Agreement, 1966","After the 1965 war"],
  ["Shimla Agreement, 1972","After the 1971 war"]
 ],
 note:"Both India and Pakistan, six years apart, and each follows the war before it by a year."},

{k:"Panchsheel and the Indus Waters Treaty",
 rows:[
  ["Panchsheel, 1954","India and China — the Five Principles of Peaceful Coexistence"],
  ["Indus Waters Treaty, 1960","India and Pakistan, mediated by the World Bank"]
 ],
 note:"Different neighbour, different decade. Panchsheel is China; the Indus is Pakistan."},

{k:"Deogaon and Surji-Anjangaon",
 rows:[
  ["Deogaon, 1803","With Raghuji II Bhonsle"],
  ["Surji-Anjangaon, 1803","With Daulat Rao Scindia, who ceded major territory"]
 ],
 note:"Same year, same war, two different Maratha chiefs. Bhonsle goes with Deogaon; Scindia with Surji-Anjangaon."}

]

};
