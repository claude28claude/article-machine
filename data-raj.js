/* THE ADMINISTRATORS — Governors of Bengal, Governors-General and Viceroys.

   Four different offices, in a line, and mixing them up is where the marks
   go. In order:

     Governor of Bengal              1757–1773   Clive to Hastings
     Governor-General of Bengal      1773–1833   Regulating Act made the post
     Governor-General of India       1833–1858   Charter Act 1833 renamed it
     Viceroy and Governor-General    1858–1947   Crown rule; same man, new title
     Governor-General of the Dominion 1947–1950  Mountbatten, then Rajaji

   The commonest exam traps are all boundary questions. Warren Hastings was
   the first Governor-GENERAL OF BENGAL, not of India. William Bentinck was
   the first Governor-General OF INDIA, and he had already been Governor-
   General of Bengal for five years before the title changed under him.
   Canning was the LAST Governor-General of the Company and the FIRST Viceroy
   — the same man, on either side of 1858. Mountbatten was the LAST Viceroy
   and the FIRST Governor-General of free India. Rajagopalachari was the only
   Indian to hold the office and the last person to hold it at all.

   Acting holders are included and marked, because a list that silently drops
   them is a list whose numbering will not match anyone else's. They are not
   examined, and the pages say so.

   VERIFICATION. Names, terms and events were taken from the Wikipedia lists
   of governors-general of India and of governors of the Bengal Presidency,
   read as structured tables rather than prose, and checked against what the
   site already carried in Modern History. Where a date is commonly given two
   ways — Clive's first governorship, the first census — both are printed and
   the page says which one an answer key is likely to want. The prose is
   written for this site; nothing is copied.  */

window.RAJ = {

  lede: 'Fifty men held India between Plassey and the Republic, under four ' +
        'different titles. Here is every one of them, in order, with what ' +
        'each actually did.',

  intro: 'The office changed its name three times, and almost every exam ' +
    'question about it is really a question about which name was in use when. ' +
    'The Regulating Act of 1773 turned the Governor of Bengal into the ' +
    'Governor-General of Bengal. The Charter Act of 1833 turned him into the ' +
    'Governor-General of India. The Government of India Act of 1858 added the ' +
    'title of Viceroy, so that the same man was Governor-General when he acted ' +
    'for the government in British India and Viceroy when he acted for the ' +
    'Crown towards the princely states. In 1947 the Viceroyalty ended and the ' +
    'Governor-Generalship survived alone for two and a half years, until the ' +
    'Constitution replaced it with a President on 26 January 1950.',

  /* -------------------------------------------------- the offices, in order */
  offices: [
    { h: 'The four offices, and where each one begins',
      note: 'Every "who was the first" question comes out of this table. Read ' +
            'the boundaries, not the names.',
      rows: [
        ['Governor of Bengal, 1757–1773',
         'The Company\'s man in Bengal after Plassey. Robert Clive first, Warren ' +
         'Hastings last. Bombay and Madras had their own governors, answerable ' +
         'to London, not to Bengal.'],
        ['Governor-General of Bengal, 1773–1833',
         'Created by the Regulating Act of 1773. Warren Hastings was the first. ' +
         'Bombay and Madras were now subordinate to him, but only in war and ' +
         'diplomacy — the Act gave him no casting authority over their revenue.'],
        ['Governor-General of India, 1833–1858',
         'Created by the Charter Act of 1833, which gave him authority over all ' +
         'British India. William Bentinck was the first. Lord Canning was the ' +
         'last under the Company.'],
        ['Viceroy and Governor-General, 1858–1947',
         'The Government of India Act of 1858 transferred India to the Crown and ' +
         'added the title of Viceroy. Canning was the first Viceroy, Mountbatten ' +
         'the last. Twenty men held it in eighty-nine years.'],
        ['Governor-General of the Dominion, 1947–1950',
         'The Viceroyalty ended with the Indian Independence Act. Mountbatten ' +
         'stayed on as the first Governor-General of free India; C. Rajagopalachari ' +
         'succeeded him and was the last. The office died with the Constitution.']
      ] },

    { h: 'The boundary answers, in one place',
      rows: [
        ['First Governor of Bengal', 'Robert Clive'],
        ['Last Governor of Bengal', 'Warren Hastings — who then became the first Governor-General'],
        ['First Governor-General of Bengal', 'Warren Hastings, 1774. NOT of India.'],
        ['Last Governor-General of Bengal', 'Lord William Bentinck — the title changed under him in 1833'],
        ['First Governor-General of India', 'Lord William Bentinck, 1833'],
        ['Last Governor-General of the Company', 'Lord Canning'],
        ['First Viceroy of India', 'Lord Canning — the same man, after 1858'],
        ['Last Viceroy of India', 'Lord Mountbatten'],
        ['First Governor-General of free India', 'Lord Mountbatten — again the same man'],
        ['Last Governor-General of India', 'C. Rajagopalachari, the only Indian to hold it'],
        ['Only Governor-General to be impeached', 'Warren Hastings — impeached 1788, acquitted 1795'],
        ['Only Viceroy assassinated in office', 'Lord Mayo, at Port Blair in the Andamans, 1872'],
        ['Only Governor-General to die in office in India', 'Lord Cornwallis, at Ghazipur, 1805, in his second term']
      ] }
  ],

  /* ------------------------------------------------- Governors of Bengal */
  bengal: [
    { id: 'clive', n: 'Robert Clive', t: 'Governor of Bengal', from: 1758, to: 1760,
      also: 'and again 1765–1767', hy: true,
      w: 'The man who made the Company a territorial power. Clive won Plassey in ' +
         '1757 and Bengal passed under Company control in everything but name; on ' +
         'his second governorship he took the Diwani and made that control legal.',
      pol: [
        ['Battle of Plassey, 23 June 1757',
         'Fought and won before his governorship began, by a conspiracy with Mir ' +
         'Jafar rather than by force of arms. It gave the Company the power to ' +
         'appoint the Nawab of Bengal.'],
        ['Diwani of Bengal, Bihar and Orissa, 1765',
         'Granted by the Mughal emperor Shah Alam II under the Treaty of Allahabad ' +
         'after Buxar. The Company now had the legal right to collect the revenue ' +
         'of the richest province in India.'],
        ['The Dual Government, 1765–1772',
         'Clive\'s own device: the Company held the Diwani (revenue) and the Nawab ' +
         'held the Nizamat (justice and policing). The Company had the money and ' +
         'the Nawab had the responsibility — which is why it produced the famine ' +
         'of 1770 and was abolished by Warren Hastings.'],
        ['The Society of Trade, and the dastak',
         'Clive tried to curb private trade by the Company\'s own servants, and ' +
         'failed. The abuse of the dastak — the duty-free pass — was one of the ' +
         'causes of the war with Mir Kasim that ended at Buxar.']
      ],
      note: 'Lists differ on the start of his first term: 1757 if you date it from ' +
            'Plassey, 1758 if you date it from the formal appointment. An answer ' +
            'key will usually want 1757–60.' },

    { id: 'vansittart', n: 'Henry Vansittart', t: 'Governor of Bengal', from: 1760, to: 1764,
      w: 'Governor through the quarrel that led to Buxar. He replaced Mir Jafar ' +
         'with Mir Kasim, who then tried to govern independently, abolished inland ' +
         'duties to destroy the Company\'s trading advantage, and was defeated.',
      pol: [
        ['Mir Kasim made Nawab, 1760', 'In exchange for the districts of Burdwan, ' +
         'Midnapore and Chittagong. He moved his capital to Munger and built an ' +
         'army — the opposite of what the Company wanted from a puppet.'],
        ['Battle of Buxar, 22 October 1764',
         'Fought under his governorship by Hector Munro against the combined armies ' +
         'of Mir Kasim, Shuja-ud-Daula of Awadh and Shah Alam II. More decisive than ' +
         'Plassey: Plassey won Bengal by intrigue, Buxar won northern India by arms.']
      ] },

    { id: 'verelst', n: 'Harry Verelst', t: 'Governor of Bengal', from: 1767, to: 1769,
      w: 'Held the office through the first two years of the Dual Government and ' +
         'the First Anglo-Mysore War, which ended with Haidar Ali at the gates of ' +
         'Madras and a treaty on his terms.', pol: [] },

    { id: 'cartier', n: 'John Cartier', t: 'Governor of Bengal', from: 1769, to: 1772,
      hy: true,
      w: 'Governor during the Great Bengal Famine of 1770, in which by the ' +
         'Company\'s own later estimate about a third of the population of Bengal ' +
         'died. Revenue collection was not relaxed, and in some districts was ' +
         'raised. The famine is the standard indictment of the Dual Government.',
      pol: [
        ['The Bengal Famine of 1770', 'Roughly ten million dead. The Company held ' +
         'the revenue power and the Nawab held the relief duty, so neither did the ' +
         'other\'s work — which is the argument Warren Hastings used to abolish the ' +
         'system two years later.']
      ] },

    { id: 'hastings-gov', n: 'Warren Hastings', t: 'Governor of Bengal', from: 1772, to: 1773,
      hy: true,
      w: 'His first eighteen months, before the Regulating Act renamed the post. ' +
         'He abolished the Dual Government, moved the treasury from Murshidabad to ' +
         'Calcutta, and ended the dastak — the three acts that turned a trading ' +
         'company into an administration.',
      pol: [
        ['Abolition of the Dual Government, 1772',
         'The Company took the Nizamat as well as the Diwani and governed directly. ' +
         'This is what "the Company stood forth as Diwan" means.'],
        ['Treasury moved to Calcutta, 1772', 'Calcutta became the real capital of ' +
         'Bengal, not Murshidabad.'],
        ['District collectors appointed, 1772',
         'An English collector in each district — the ancestor of the office that ' +
         'still runs an Indian district.']
      ] }
  ],

  /* ------------------------------------ Governors-General of Bengal, 1773–1833 */
  ggBengal: [
    { id: 'hastings', n: 'Warren Hastings', t: 'Governor-General of Bengal',
      from: 1774, to: 1785, hy: true,
      w: 'The first Governor-General of Bengal — not of India, which is the trap. ' +
         'He built the machinery of civil administration, fought the First Maratha ' +
         'and Second Mysore wars to a standstill, and was impeached in England for ' +
         'the way he had paid for them.',
      pol: [
        ['Regulating Act, 1773', 'Made the post. Gave him a Council of four, in ' +
         'which he could be and was outvoted, and created the Supreme Court at ' +
         'Calcutta in 1774.'],
        ['Judicial reorganisation, 1772–1774',
         'A civil court (Diwani Adalat) and a criminal court (Faujdari Adalat) in ' +
         'each district, with appeal courts at Calcutta. Hindu law for Hindus and ' +
         'Muslim law for Muslims in personal matters.'],
        ['Asiatic Society of Bengal, 1784',
         'Founded by Sir William Jones under his patronage — the beginning of ' +
         'European Indology.'],
        ['Calcutta Madrasa, 1781', 'Founded by Hastings himself.'],
        ['Bengal Gazette, 1780', 'James Augustus Hicky\'s paper, the first ' +
         'newspaper printed in India — and suppressed for attacking Hastings.'],
        ['Charles Wilkins\'s Bhagavad Gita, 1785',
         'The first direct translation of a Sanskrit work into English, with a ' +
         'preface by Hastings.'],
        ['Pitt\'s India Act, 1784', 'Passed near the end of his term. Created the ' +
         'Board of Control and began the dual government of India from London.'],
        ['Impeachment, 1788–1795', 'Moved by Edmund Burke over the Rohilla War, the ' +
         'Chait Singh affair and the Begums of Awadh. Seven years of trial; ' +
         'acquitted. The only Governor-General ever impeached.']
      ] },

    { id: 'macpherson', n: 'Sir John Macpherson', t: 'Governor-General (acting)',
      from: 1785, to: 1786, acting: true,
      w: 'A caretaker between Hastings and Cornwallis. Not examined.', pol: [] },

    { id: 'cornwallis', n: 'Lord Cornwallis', t: 'Governor-General of Bengal',
      from: 1786, to: 1793, hy: true,
      w: 'The administrator, where Hastings had been the improviser. Cornwallis ' +
         'settled the land revenue of Bengal for ever, separated revenue from ' +
         'justice, and built a civil service that was honest and entirely European. ' +
         'He is called the father of civil services in India — and, just as fairly, ' +
         'the man who shut Indians out of their own administration.',
      pol: [
        ['Permanent Settlement, 1793',
         'The zamindars of Bengal, Bihar and Orissa were made proprietors of the ' +
         'land in exchange for a revenue demand fixed in perpetuity. The state\'s ' +
         'income stopped growing, the zamindar\'s rose, and the tenant had no ' +
         'protection at all. Also called the Zamindari system.'],
        ['Cornwallis Code, 1793',
         'Separated revenue administration from justice; the collector lost his ' +
         'judicial powers. The principle of the separation of powers enters Indian ' +
         'administration here.'],
        ['Europeanisation of the services',
         'Indians were excluded from every post worth more than £500 a year. ' +
         'Salaries were raised and private trade forbidden, which did end ' +
         'corruption — at the price of a colour bar.'],
        ['Third Anglo-Mysore War, 1790–1792',
         'Ended by the Treaty of Seringapatam: Tipu Sultan gave up half his ' +
         'territory and sent two sons as hostages.'],
        ['Died in office, 1805',
         'He returned for a second term as Governor-General and died at Ghazipur ' +
         'within three months.']
      ] },

    { id: 'shore', n: 'Sir John Shore', t: 'Governor-General of Bengal',
      from: 1793, to: 1798,
      w: 'A policy of non-intervention, which is his only examinable fact — and ' +
         'the thing Wellesley then reversed completely. He had been the main ' +
         'architect of the Permanent Settlement under Cornwallis.',
      pol: [
        ['Policy of non-intervention', 'Refusal to interfere in the affairs of ' +
         'Indian states. He stood aside at the Battle of Kharda in 1795, when the ' +
         'Marathas defeated the Nizam, and was criticised for it.'],
        ['Charter Act, 1793', 'Renewed the Company\'s monopoly for twenty years.']
      ] },

    { id: 'clarke', n: 'Sir Alured Clarke', t: 'Governor-General (acting)',
      from: 1798, to: 1798, acting: true, w: 'Two months. Not examined.', pol: [] },

    { id: 'wellesley', n: 'Lord Wellesley', t: 'Governor-General of Bengal',
      from: 1798, to: 1805, hy: true,
      w: 'The empire-builder. Wellesley called himself a "Bengal tiger" and doubled ' +
         'the Company\'s territory in seven years, mostly without fighting for it: ' +
         'the Subsidiary Alliance made Indian rulers pay for the army that ' +
         'controlled them.',
      pol: [
        ['Subsidiary Alliance, from 1798',
         'The state accepted a British force on its soil and paid for it, took a ' +
         'British Resident, conducted no diplomacy without permission, and employed ' +
         'no European without approval. In return the Company guaranteed its ruler ' +
         'against enemies — including his own subjects. Hyderabad accepted first, ' +
         'in 1798; then Mysore, Tanjore, Awadh, the Peshwa, Bhonsle and Scindia.'],
        ['Fourth Anglo-Mysore War, 1799',
         'Tipu Sultan was killed at Seringapatam. Mysore was reduced and handed ' +
         'back to the Wodeyars under a Subsidiary Alliance.'],
        ['Treaty of Bassein, 1802',
         'The Peshwa Baji Rao II accepted a Subsidiary Alliance, which the other ' +
         'Maratha chiefs refused to recognise — and so began the Second Anglo-' +
         'Maratha War of 1803–05.'],
        ['Fort William College, 1800',
         'Founded at Calcutta to train the Company\'s civil servants in Indian ' +
         'languages. The Court of Directors disapproved of the expense and ordered ' +
         'it cut back.'],
        ['Censorship of Press Act, 1799', 'Every newspaper to be submitted to a ' +
         'government censor before printing.']
      ] },

    { id: 'cornwallis2', n: 'Lord Cornwallis (second term)',
      t: 'Governor-General of Bengal', from: 1805, to: 1805,
      w: 'Sent back to undo Wellesley\'s expansion, and died at Ghazipur after ' +
         'less than three months.', pol: [] },

    { id: 'barlow', n: 'Sir George Barlow', t: 'Governor-General (acting)',
      from: 1805, to: 1807, acting: true, hy: true,
      w: 'An acting Governor-General, but he owns one examined event: the Vellore ' +
         'Mutiny of 1806, the first serious sepoy rising, set off by new dress ' +
         'regulations that forbade caste marks and beards.',
      pol: [
        ['Vellore Mutiny, 1806', 'Fifty years before 1857, and for the same kind of ' +
         'reason — an order that looked like an attack on religion.']
      ] },

    { id: 'minto1', n: 'Lord Minto I', t: 'Governor-General of Bengal',
      from: 1807, to: 1813,
      w: 'Remembered for one treaty and one Act. The Treaty of Amritsar fixed the ' +
         'Sutlej as the limit of Ranjit Singh\'s expansion, and the Charter Act of ' +
         '1813 opened India to missionaries and to trade.',
      pol: [
        ['Treaty of Amritsar, 1809',
         'With Ranjit Singh. He kept Punjab north of the Sutlej and gave up any ' +
         'claim to the Cis-Sutlej states. Not to be confused with the Treaty of ' +
         'Amritsar of 1846, which sold Kashmir to Gulab Singh.'],
        ['Charter Act, 1813',
         'Ended the Company\'s monopoly of Indian trade (tea and China excepted), ' +
         'admitted missionaries, and set aside one lakh rupees a year for education ' +
         '— the first time a colonial government accepted responsibility for it.']
      ] },

    { id: 'hastings-f', n: 'Lord Hastings (Francis Rawdon-Hastings)',
      t: 'Governor-General of Bengal', from: 1813, to: 1823, hy: true,
      w: 'Ended the policy of non-intervention for good. In ten years he beat ' +
         'Nepal, destroyed the Pindaris and broke the Marathas, leaving no ' +
         'independent power in India — and he is not the same person as Warren ' +
         'Hastings, which is the trap.',
      pol: [
        ['Anglo-Nepalese War, 1814–1816',
         'Ended by the Treaty of Sugauli: Nepal gave up Sikkim, Kumaon and Garhwal ' +
         'and accepted a Resident. Gurkha recruitment into the Company\'s army ' +
         'begins here.'],
        ['Third Anglo-Maratha War, 1817–1818',
         'The Peshwa was deposed and pensioned to Bithur, and the Peshwaship ' +
         'abolished. Maratha power ends.'],
        ['Pindari War, 1817–1818', 'The irregular horsemen who had lived off Maratha ' +
         'warfare were hunted down and destroyed.'],
        ['Ryotwari settlement in Madras, 1820',
         'Introduced by Thomas Munro as Governor of Madras: revenue settled directly ' +
         'with the cultivator, not a zamindar, and revised every twenty to thirty ' +
         'years.'],
        ['Mahalwari settlement, 1822',
         'Holt Mackenzie\'s system for the North-Western Provinces: revenue settled ' +
         'with the village or mahal as a whole.'],
        ['Hindu College, Calcutta, 1817',
         'Founded with Ram Mohan Roy and David Hare — later Presidency College.']
      ],
      note: 'Warren Hastings (1774–85) and Lord Hastings (1813–23) are two ' +
            'different men, forty years apart. Warren was impeached; Lord Hastings ' +
            'fought the Marathas.' },

    { id: 'adam', n: 'John Adam', t: 'Governor-General (acting)',
      from: 1823, to: 1823, acting: true,
      w: 'Acting for seven months, and the man who deported James Silk Buckingham ' +
         'and passed the Licensing Regulations of 1823, which put the press under ' +
         'licence. Metcalfe repealed them in 1835.', pol: [] },

    { id: 'amherst', n: 'Lord Amherst', t: 'Governor-General of Bengal',
      from: 1823, to: 1828,
      w: 'The First Anglo-Burmese War and the Barrackpore mutiny — a rising of ' +
         'sepoys in 1824 who refused to go to Burma by sea, and were shot down.',
      pol: [
        ['First Anglo-Burmese War, 1824–1826',
         'Ended by the Treaty of Yandabo, 1826: Assam, Manipur, Arakan and ' +
         'Tenasserim ceded, and an indemnity of one crore rupees.'],
        ['Barrackpore mutiny, 1824',
         'Sepoys of the 47th refused embarkation for Burma — crossing the sea meant ' +
         'loss of caste. The regiment was disbanded and fired on.']
      ] },

    { id: 'bayley', n: 'William Butterworth Bayley', t: 'Governor-General (acting)',
      from: 1828, to: 1828, acting: true, w: 'Four months. Not examined.', pol: [] }
  ],

  /* ---------------------------------- Governors-General of India, 1833–1858 */
  ggIndia: [
    { id: 'bentinck', n: 'Lord William Bentinck', t: 'First Governor-General of India',
      from: 1828, to: 1835, hy: true,
      w: 'Governor-General of Bengal from 1828 and the first Governor-General of ' +
         'INDIA when the Charter Act of 1833 changed the title. The great social ' +
         'reformer of the Company period: sati abolished, thuggee suppressed, ' +
         'English made the medium of higher education.',
      pol: [
        ['Bengal Sati Regulation, 1829',
         'Regulation XVII of 4 December 1829, declaring sati illegal and punishable ' +
         'as culpable homicide. Applied first to Bengal, then to Bombay and Madras ' +
         'in 1830. Ram Mohan Roy\'s campaign is the reason it could be done.'],
        ['Suppression of thuggee, 1830s',
         'Carried out by William Sleeman. Roughly two thousand thugs were convicted ' +
         'over a decade.'],
        ['Charter Act, 1833',
         'Made him Governor-General of India, ended the Company\'s trade ' +
         'altogether, made it a purely administrative body, added a Law Member to ' +
         'the Council — Macaulay was the first — and declared that no Indian should ' +
         'be barred from office by religion, birth, descent or colour. The ' +
         'declaration was ignored in practice for decades.'],
        ['English Education Act, 1835',
         'Following Macaulay\'s Minute of February 1835, government funds for ' +
         'education went to English-language teaching. The Orientalist–Anglicist ' +
         'controversy is decided here.'],
        ['Abolition of female infanticide and human sacrifice',
         'Attacked in the same period; completed under Dalhousie.'],
        ['Annexations of Mysore (1831), Coorg (1834) and Cachar (1834)',
         'Bentinck was a reformer, not an abstainer.']
      ],
      note: 'Both answers are true of him at different dates: last Governor-General ' +
            'of Bengal AND first Governor-General of India. If a question gives ' +
            '1833 as the date it wants "of India".' },

    { id: 'metcalfe', n: 'Sir Charles Metcalfe', t: 'Governor-General of India (acting)',
      from: 1835, to: 1836, acting: true, hy: true,
      w: 'Acting for a year, and known for one thing: he repealed the Licensing ' +
         'Regulations of 1823 and freed the press. He is called the Liberator of ' +
         'the Indian Press.',
      pol: [
        ['Press Act of 1835', 'Repealed John Adam\'s licensing rules. The press ' +
         'stayed comparatively free until Lytton\'s Vernacular Press Act of 1878.']
      ] },

    { id: 'auckland', n: 'Lord Auckland', t: 'Governor-General of India',
      from: 1836, to: 1842,
      w: 'The First Anglo-Afghan War, and the worst military disaster the Company ' +
         'ever suffered: an army of some sixteen thousand destroyed in the retreat ' +
         'from Kabul in January 1842.',
      pol: [
        ['Tripartite Treaty, 1838',
         'Between the Company, Ranjit Singh and Shah Shuja, to put Shah Shuja back ' +
         'on the Afghan throne.'],
        ['First Anglo-Afghan War, 1839–1842',
         'Kabul taken, then lost. Auckland was recalled.']
      ] },

    { id: 'ellenborough', n: 'Lord Ellenborough', t: 'Governor-General of India',
      from: 1842, to: 1844,
      w: 'Ended the Afghan war and annexed Sindh — a conquest Charles Napier ' +
         'carried out on a pretext so thin that even the Company censured it.',
      pol: [
        ['Annexation of Sindh, 1843', 'By Charles Napier, against the Amirs of ' +
         'Sindh, who had given no cause.'],
        ['Indian Slavery Act, 1843', 'Abolished the legal status of slavery in ' +
         'Company territory.']
      ] },

    { id: 'bird', n: 'William Wilberforce Bird', t: 'Governor-General (acting)',
      from: 1844, to: 1844, acting: true, w: 'Two months. Not examined.', pol: [] },

    { id: 'hardinge1', n: 'Lord Hardinge I', t: 'Governor-General of India',
      from: 1844, to: 1848,
      w: 'The First Anglo-Sikh War, and the Treaty of Lahore that took Kashmir ' +
         'from the Sikhs and sold it to Gulab Singh.',
      pol: [
        ['First Anglo-Sikh War, 1845–1846', 'Ended by the Treaty of Lahore.'],
        ['Treaty of Amritsar, 1846',
         'Kashmir sold to Gulab Singh of Jammu for seventy-five lakh rupees. Not ' +
         'the Treaty of Amritsar of 1809 with Ranjit Singh.'],
        ['Roorkee engineering college, 1847', 'The first in India.']
      ] },

    { id: 'dalhousie', n: 'Lord Dalhousie', t: 'Governor-General of India',
      from: 1848, to: 1856, hy: true,
      w: 'The great annexer and the great moderniser, and the two are the same ' +
         'policy. In eight years he added Punjab, Awadh, Satara, Jhansi, Nagpur and ' +
         'Lower Burma, and gave India its railways, its telegraph and its postal ' +
         'system. Almost every cause of 1857 can be traced to something he did.',
      pol: [
        ['Doctrine of Lapse',
         'A Hindu ruler without a natural heir could not adopt one without the ' +
         'Company\'s consent; failing that the state lapsed. Satara (1848), Jaitpur ' +
         'and Sambalpur (1849), Baghat (1850), Udaipur (1852), Jhansi (1853) and ' +
         'Nagpur (1854) were taken this way.'],
        ['Annexation of Awadh, 1856',
         'NOT under the Doctrine of Lapse — the Nawab had heirs. It was taken on ' +
         'the ground of misgovernment, and it is the annexation that turned the ' +
         'Bengal Army, recruited heavily from Awadh, against the Company.'],
        ['First railway, 1853',
         'Bombay to Thane, 16 April 1853, thirty-four kilometres. The first ' +
         'passenger line in India.'],
        ['First telegraph line, 1851–1854',
         'Calcutta to Diamond Harbour first, then Calcutta to Agra, Bombay and ' +
         'Madras — four thousand miles of it by 1854.'],
        ['Post Office Act, 1854',
         'A uniform half-anna rate for the whole country, and the first postage ' +
         'stamps.'],
        ['Wood\'s Despatch, 1854',
         'Called the Magna Carta of English education in India: a department of ' +
         'public instruction in each province, universities at Calcutta, Bombay and ' +
         'Madras, grants-in-aid, and vernacular primary schools.'],
        ['Public Works Department, 1854',
         'Separated from the military board — roads, canals and the Ganges Canal.'],
        ['Second Anglo-Sikh War, 1848–1849', 'Punjab annexed.'],
        ['Second Anglo-Burmese War, 1852', 'Lower Burma and Pegu annexed.'],
        ['Hindu Widows\' Remarriage Act', 'Drafted under him; passed in 1856 under ' +
         'Canning. Vidyasagar\'s campaign is behind it.']
      ] },

    { id: 'canning', n: 'Lord Canning',
      t: 'Last Governor-General of the Company',
      from: 1856, to: 1858, hy: true,
      w: 'The hinge of the whole period. He was Governor-General when the revolt ' +
         'broke out in 1857 and Viceroy when it was over, because the Act of 1858 ' +
         'changed the title under him. He was nicknamed "Clemency Canning" — as an ' +
         'insult, by Englishmen who wanted harsher reprisals.',
      pol: [
        ['The Revolt of 1857', 'Began at Meerut on 10 May 1857 and was not fully ' +
         'suppressed until mid-1858.'],
        ['Government of India Act, 1858',
         'Ended Company rule. India passed to the Crown; the Board of Control and ' +
         'Court of Directors were replaced by a Secretary of State for India with a ' +
         'Council of fifteen. Canning became the first Viceroy.'],
        ['Queen Victoria\'s Proclamation, 1 November 1858',
         'Read out at Allahabad. Promised no further annexation, respect for ' +
         'treaties and for religion, and equal treatment in the public service. ' +
         'Called the Magna Carta of the Indian people.'],
        ['Doctrine of Lapse withdrawn', 'And the right of adoption conceded to the ' +
         'princes.'],
        ['Indian Councils Act, 1861',
         'Added Indian non-official members to the Governor-General\'s Council for ' +
         'legislation — the beginning of representative institutions — and restored ' +
         'legislative power to Bombay and Madras.'],
        ['Indian High Courts Act, 1861',
         'High Courts at Calcutta, Bombay and Madras, replacing the Supreme Courts ' +
         'and the Sadar Adalats. They were actually established in 1862.'],
        ['Indian Penal Code',
         'Drafted by Macaulay\'s Law Commission under Bentinck in 1834–37, passed ' +
         'in 1860, in force from 1 January 1862. Four dates, one code — read the ' +
         'question carefully.'],
        ['Universities of Calcutta, Bombay and Madras, 1857',
         'Established under Wood\'s Despatch, in the year of the revolt.']
      ] }
  ],

  /* -------------------------------------------- Viceroys of India, 1858–1947 */
  viceroys: [
    { id: 'v-canning', n: 'Lord Canning', t: 'Viceroy', from: 1858, to: 1862, hy: true,
      w: 'The same man, on the other side of 1858 — see his entry as the last ' +
         'Governor-General of the Company. First Viceroy of India.',
      pol: [['See the Governor-General entry', 'The Act of 1858, the Proclamation, ' +
             'the Councils Act of 1861 and the High Courts Act of 1861 all belong ' +
             'to his Viceroyalty.']] },

    { id: 'elgin1', n: 'Lord Elgin I', t: 'Viceroy', from: 1862, to: 1863,
      w: 'Died in office at Dharamshala after a year. The Wahhabi movement in the ' +
         'north-west was suppressed under him.', pol: [] },

    { id: 'napier-r', n: 'Sir Robert Napier', t: 'Viceroy (acting)',
      from: 1863, to: 1863, acting: true,
      w: 'Held the office for a few weeks after Elgin died. Not examined.', pol: [] },

    { id: 'denison', n: 'Sir William Denison', t: 'Viceroy (acting)',
      from: 1863, to: 1864, acting: true,
      w: 'Governor of Madras, acting until Lawrence arrived. Not examined.', pol: [] },

    { id: 'lawrence', n: 'Sir John Lawrence', t: 'Viceroy', from: 1864, to: 1869,
      w: 'A policy of "masterly inactivity" towards Afghanistan, and the Orissa ' +
         'famine of 1866, which killed about a million people and produced the ' +
         'first serious official inquiry into famine.',
      pol: [
        ['Orissa famine, 1866', 'And the Famine Commission under Sir George Campbell ' +
         'that followed it.'],
        ['High Courts opened, 1865', 'At Calcutta, Bombay and Madras.'],
        ['Bhutan War, 1864–65', 'Ended by the Treaty of Sinchula.']
      ] },

    { id: 'mayo', n: 'Lord Mayo', t: 'Viceroy', from: 1869, to: 1872, hy: true,
      w: 'The only Viceroy murdered in office — stabbed at Port Blair in the ' +
         'Andamans in February 1872 by a convict, Sher Ali. He began financial ' +
         'decentralisation and took the first census.',
      pol: [
        ['Financial decentralisation, 1870',
         'Provinces given fixed grants and made responsible for their own spending ' +
         'on police, jails, education and roads. The beginning of provincial ' +
         'finance.'],
        ['First census, 1872',
         'Non-synchronous, taken across several years. The first SYNCHRONOUS ' +
         'decennial census was 1881 under Ripon — the pair is asked constantly.'],
        ['Department of Agriculture and Commerce, 1871', 'Established under him.'],
        ['Rajkot College and Mayo College, Ajmer', 'Founded for the sons of princes.'],
        ['Assassinated, 8 February 1872', 'At Port Blair, on a visit to the penal ' +
         'settlement.']
      ] },

    { id: 'strachey', n: 'Sir John Strachey', t: 'Viceroy (acting)',
      from: 1872, to: 1872, acting: true,
      w: 'Took charge in the days after Mayo was assassinated at Port Blair. ' +
         'Not examined.', pol: [] },

    { id: 'napier-f', n: 'Lord Napier', t: 'Viceroy (acting)',
      from: 1872, to: 1872, acting: true,
      w: 'Governor of Madras, acting until Northbrook arrived. Not examined, and ' +
         'not the same man as Sir Robert Napier, who acted in 1863.', pol: [] },

    { id: 'northbrook', n: 'Lord Northbrook', t: 'Viceroy', from: 1872, to: 1876,
      w: 'Resigned over the government\'s Afghan policy. The Bihar famine of 1873–74 ' +
         'was handled well enough that almost nobody died, and he was criticised in ' +
         'London for spending too much on it.',
      pol: [
        ['Bihar famine, 1873–74', 'Relief on a scale not attempted before.'],
        ['Kuka (Namdhari) revolt suppressed, 1872', 'In Punjab.'],
        ['Prince of Wales\'s visit, 1875', '']
      ] },

    { id: 'lytton', n: 'Lord Lytton', t: 'Viceroy', from: 1876, to: 1880, hy: true,
      w: 'The reactionary. He held the Delhi Durbar of 1877 to proclaim Victoria ' +
         'Empress while a famine killed millions in the south, gagged the Indian-' +
         'language press, disarmed Indians, and lowered the ICS age limit to make ' +
         'the examination harder for them to reach.',
      pol: [
        ['Royal Titles Act, 1876', 'Victoria proclaimed Kaiser-i-Hind, Empress of ' +
         'India.'],
        ['Delhi Durbar, 1 January 1877',
         'Held during the Great Famine of 1876–78, in which five to ten million ' +
         'died. The contrast is the point of the question.'],
        ['Vernacular Press Act, 1878',
         'Applied to Indian-language papers only, not to English ones. Called the ' +
         '"gagging Act". Repealed by Ripon in 1882. The Amrita Bazar Patrika turned ' +
         'itself into an English paper overnight to escape it.'],
        ['Indian Arms Act, 1878', 'No Indian could keep a weapon without a licence; ' +
         'Europeans were exempt.'],
        ['ICS age limit lowered from 21 to 19, 1876',
         'The examination was held in England only, so a lower age made it nearly ' +
         'impossible for Indians. Satyendranath Tagore had become the first Indian ' +
         'in the ICS in 1863.'],
        ['Second Anglo-Afghan War, 1878–1880', 'Ended under Ripon.'],
        ['Statutory Civil Service, 1878–79', 'A separate, inferior service for ' +
         'Indians. It failed and was abolished.']
      ] },

    { id: 'ripon', n: 'Lord Ripon', t: 'Viceroy', from: 1880, to: 1884, hy: true,
      w: 'The liberal, and the most popular Viceroy with Indians. He repealed the ' +
         'Vernacular Press Act, gave India elected local government, and tried to ' +
         'let Indian judges try Europeans — which produced a white revolt so fierce ' +
         'that it taught the next generation of Indians what agitation could do.',
      pol: [
        ['Repeal of the Vernacular Press Act, 1882', ''],
        ['Local Self-Government Resolution, 1882',
         'Elected local boards for districts and municipalities, with Indian ' +
         'chairmen. Ripon is called the father of local self-government in India.'],
        ['Ilbert Bill, 1883',
         'Would have let Indian judges try Europeans in the mofussil. The European ' +
         'community agitated until it was withdrawn in amended form in 1884. Indians ' +
         'drew the lesson and founded the Congress the next year.'],
        ['First Factory Act, 1881',
         'Children under seven not to be employed; a twelve-hour limit for children ' +
         'under twelve. No protection for adults at all.'],
        ['Hunter Commission on education, 1882', 'Under William Hunter.'],
        ['First synchronous census, 1881', 'The decennial census begins properly ' +
         'here.']
      ] },

    { id: 'dufferin', n: 'Lord Dufferin', t: 'Viceroy', from: 1884, to: 1888, hy: true,
      w: 'The Indian National Congress was founded in his Viceroyalty, in December ' +
         '1885 — which is his one guaranteed exam fact. He dismissed it publicly as ' +
         'representing "a microscopic minority".',
      pol: [
        ['Indian National Congress founded, 1885',
         'By A. O. Hume, a retired ICS officer, with Dufferin\'s knowledge. First ' +
         'session at Bombay, 28 December 1885.'],
        ['Third Anglo-Burmese War, 1885–86', 'Upper Burma annexed to India in 1886.'],
        ['Bengal Tenancy Act, 1885',
         'Gave occupancy rights to tenants who had held land twelve years.']
      ] },

    { id: 'lansdowne', n: 'Lord Lansdowne', t: 'Viceroy', from: 1888, to: 1894,
      w: 'Two Acts and a line on a map: the Age of Consent Act, the Indian Councils ' +
         'Act of 1892, and the Durand Line between India and Afghanistan.',
      pol: [
        ['Age of Consent Act, 1891',
         'Raised the age of consent for girls from ten to twelve. Opposed by Tilak, ' +
         'not on the merits but because a foreign government was legislating on ' +
         'Hindu society.'],
        ['Indian Councils Act, 1892',
         'Enlarged the legislative councils and introduced an indirect, ' +
         'recommendatory element of election — the word "election" was carefully ' +
         'avoided. Members got the right to discuss the budget but not to vote on it.'],
        ['Durand Line, 1893', 'Agreed with Amir Abdur Rahman; still the ' +
         'Pakistan–Afghanistan border.'],
        ['Factory Act, 1891', 'A weekly holiday and an eleven-hour day for women.']
      ] },

    { id: 'elgin2', n: 'Lord Elgin II', t: 'Viceroy', from: 1894, to: 1899,
      w: 'Plague and famine. The bubonic plague reached Bombay in 1896 and the ' +
         'famine of 1896–97 covered much of India; the Chapekar brothers ' +
         'assassinated the Poona plague commissioner Rand in 1897, the first ' +
         'political assassination of the national movement.',
      pol: [
        ['Bombay plague, 1896', 'And the Epidemic Diseases Act of 1897.'],
        ['Famine of 1896–97', 'And the Famine Commission of 1898 under Lyall.'],
        ['Rand murdered, 1897',
         'By Damodar and Balkrishna Chapekar. Tilak was tried for sedition over his ' +
         'writing about it and jailed for eighteen months.']
      ] },

    { id: 'curzon', n: 'Lord Curzon', t: 'Viceroy', from: 1899, to: 1905, hy: true,
      w: 'The most consequential Viceroy of them all, and the most disliked. He ' +
         'reorganised everything he touched — police, universities, monuments, the ' +
         'frontier — and then partitioned Bengal, which produced the Swadeshi ' +
         'movement and turned a debating society into a mass agitation.',
      pol: [
        ['Partition of Bengal, announced July 1905, effective 16 October 1905',
         'Bengal split into a western half and an eastern half with Assam. ' +
         'Officially administrative convenience; in practice a division of Hindu ' +
         'and Muslim Bengal. The Swadeshi and Boycott movement began the same day. ' +
         'Annulled in 1911.'],
        ['Indian Universities Act, 1904',
         'Tightened government control over the universities and over affiliated ' +
         'colleges. Gokhale called it retrograde.'],
        ['Ancient Monuments Preservation Act, 1904',
         'And the reorganisation of the Archaeological Survey of India under John ' +
         'Marshall. Curzon\'s one lasting popular legacy.'],
        ['Police Commission, 1902',
         'Under Andrew Fraser; produced the Criminal Investigation Department.'],
        ['North-West Frontier Province created, 1901', 'Separated from Punjab.'],
        ['Famine Commission, 1900', 'Under Anthony MacDonnell.'],
        ['Calcutta Corporation Act, 1899', 'Cut the elected Indian element in the ' +
         'city government.'],
        ['Resigned, 1905', 'Over a quarrel with Kitchener about control of the army, ' +
         'not over the partition.']
      ] },

    { id: 'minto2', n: 'Lord Minto II', t: 'Viceroy', from: 1905, to: 1910, hy: true,
      w: 'The Morley-Minto Reforms, and with them separate electorates — the ' +
         'single most consequential constitutional decision of the Raj, and the ' +
         'root of the two-nation argument.',
      pol: [
        ['Indian Councils Act, 1909 (Morley-Minto Reforms)',
         'Enlarged the legislative councils, allowed a non-official majority in the ' +
         'provincial councils but not at the centre, and admitted Indians to the ' +
         'executive councils — S. P. Sinha was the first. Members could ask ' +
         'supplementary questions and move resolutions on the budget.'],
        ['Separate electorates for Muslims, 1909',
         'Muslim voters voting for Muslim seats. Minto is called the father of ' +
         'communal electorates.'],
        ['Muslim League founded, 1906',
         'At Dhaka, by Aga Khan III, Nawab Salimullah and others. Not a government ' +
         'act, but it happened in his Viceroyalty.'],
        ['Surat split, 1907', 'Congress broke into Moderates and Extremists.'],
        ['Newspapers (Incitement to Offences) Act 1908 and Indian Press Act 1910',
         'The response to revolutionary terrorism.']
      ] },

    { id: 'hardinge2', n: 'Lord Hardinge II', t: 'Viceroy', from: 1910, to: 1916, hy: true,
      w: 'Annulled the Partition of Bengal and moved the capital from Calcutta to ' +
         'Delhi, both announced at the Delhi Durbar of 1911. A bomb was thrown at ' +
         'him during his state entry into Delhi in 1912; he survived.',
      pol: [
        ['Delhi Durbar, 12 December 1911',
         'The only one attended by a reigning sovereign, George V. Partition of ' +
         'Bengal annulled; capital moved to Delhi. Bihar and Orissa separated from ' +
         'Bengal, and Assam made a chief commissioner\'s province again.'],
        ['Delhi Conspiracy bomb, 23 December 1912',
         'Thrown by Rash Behari Bose\'s group as Hardinge entered Delhi on an ' +
         'elephant.'],
        ['Komagata Maru, 1914', 'The ship turned away from Canada; the passengers ' +
         'were fired on at Budge Budge near Calcutta.'],
        ['Gandhi returns to India, 1915', ''],
        ['Hindu Mahasabha founded, 1915', 'By Madan Mohan Malaviya and others.'],
        ['Banaras Hindu University, 1916', 'Founded by Malaviya; the Act was 1915.']
      ] },

    { id: 'chelmsford', n: 'Lord Chelmsford', t: 'Viceroy', from: 1916, to: 1921, hy: true,
      w: 'The worst five years of the Raj\'s reputation. The Montagu-Chelmsford ' +
         'Reforms promised responsible government; the Rowlatt Act and Jallianwala ' +
         'Bagh delivered the opposite, and Gandhi launched Non-Cooperation.',
      pol: [
        ['Montagu Declaration, 20 August 1917',
         'The first official statement that the goal was "responsible government" ' +
         'in India as part of the empire.'],
        ['Montagu-Chelmsford Reforms and the Government of India Act, 1919',
         'Dyarchy in the provinces: subjects split into "transferred" (given to ' +
         'Indian ministers responsible to the legislature) and "reserved" (kept by ' +
         'the Governor). A bicameral legislature at the centre, and a High ' +
         'Commissioner for India in London. Direct election for the first time.'],
        ['Rowlatt Act, March 1919',
         'Trial without jury and detention without trial. Passed over the ' +
         'unanimous opposition of every Indian member — which is why Jinnah ' +
         'resigned from the council.'],
        ['Jallianwala Bagh, 13 April 1919',
         'General Dyer fired on an enclosed crowd at Amritsar. Official figure ' +
         '379 dead; the Congress inquiry put it above a thousand. The Hunter ' +
         'Commission censured Dyer; the House of Lords applauded him. Tagore ' +
         'returned his knighthood.'],
        ['Non-Cooperation Movement, 1920–22', 'Launched at the Calcutta special ' +
         'session of September 1920 and confirmed at Nagpur in December.'],
        ['Khilafat Movement, 1919–1924', 'Under the Ali brothers, with Gandhi\'s ' +
         'support.'],
        ['Sadler (Calcutta University) Commission, 1917', 'On university education.'],
        ['Women\'s University at Poona, 1916', 'Founded by D. K. Karve.']
      ] },

    { id: 'reading', n: 'Lord Reading', t: 'Viceroy', from: 1921, to: 1926,
      w: 'The only Jewish Viceroy, and a former Lord Chief Justice. Non-Cooperation ' +
         'was called off under him after Chauri Chaura, and the Swaraj Party was ' +
         'formed to fight elections from inside the councils.',
      pol: [
        ['Chauri Chaura, 5 February 1922',
         'A crowd burned a police station in Gorakhpur district, killing twenty-two ' +
         'policemen. Gandhi withdrew Non-Cooperation on 12 February.'],
        ['Moplah rebellion, 1921', 'In Malabar.'],
        ['Repeal of the Press Act of 1910 and the Rowlatt Act, 1922', ''],
        ['Swaraj Party, 1923',
         'Founded by C. R. Das and Motilal Nehru to contest the council elections.'],
        ['Kakori conspiracy, 1925',
         'The train robbery by Ram Prasad Bismil and Ashfaqulla Khan of the ' +
         'Hindustan Republican Association.'],
        ['Communist Party of India, 1925', 'Founded at Kanpur.'],
        ['Prince of Wales\'s visit, 1921', 'Met by a hartal.']
      ] },

    { id: 'irwin', n: 'Lord Irwin', t: 'Viceroy', from: 1926, to: 1931, hy: true,
      w: 'The Viceroy of Civil Disobedience. The Simon Commission arrived under him ' +
         'and was boycotted, the Congress declared Purna Swaraj, Gandhi walked to ' +
         'Dandi, and Irwin then negotiated with him as an equal — the first Viceroy ' +
         'to do so.',
      pol: [
        ['Simon Commission, 1928',
         'Seven members, all British, no Indian. Boycotted with "Simon, go back". ' +
         'Lala Lajpat Rai was injured in a lathi charge at Lahore and died weeks ' +
         'later.'],
        ['Nehru Report, 1928',
         'The Indian answer to the challenge to produce a constitution, drafted ' +
         'under Motilal Nehru.'],
        ['Deepavali Declaration, October 1929',
         'Irwin\'s statement that Dominion Status was the natural outcome of India\'s ' +
         'constitutional progress. It satisfied nobody.'],
        ['Lahore session and Purna Swaraj, December 1929',
         'Complete independence adopted as the goal; 26 January 1930 observed as ' +
         'Independence Day.'],
        ['Dandi March, 12 March – 6 April 1930',
         'Two hundred and forty miles from Sabarmati to Dandi; Gandhi broke the ' +
         'salt law on 6 April and Civil Disobedience began.'],
        ['First Round Table Conference, November 1930',
         'Boycotted by the Congress.'],
        ['Gandhi-Irwin Pact, 5 March 1931',
         'Civil Disobedience suspended, political prisoners released, salt-making ' +
         'allowed on the coast; the Congress to attend the Second Round Table ' +
         'Conference. Bhagat Singh was hanged three weeks later, on 23 March 1931.']
      ] },

    { id: 'goschen', n: 'Lord Goschen', t: 'Viceroy (acting)',
      from: 1929, to: 1929, acting: true,
      w: 'Governor of Madras, acting for a few months in 1929 while Irwin was in ' +
         'England — the visit on which the Deepavali Declaration was settled. ' +
         'Not examined.', pol: [] },

    { id: 'willingdon', n: 'Lord Willingdon', t: 'Viceroy', from: 1931, to: 1936, hy: true,
      w: 'Repression and the Communal Award. Civil Disobedience was resumed and ' +
         'crushed under him, Ramsay MacDonald gave separate electorates to the ' +
         'Depressed Classes, Gandhi fasted, and the Poona Pact replaced them with ' +
         'reserved seats.',
      pol: [
        ['Second Round Table Conference, September–December 1931',
         'Gandhi attended as the sole Congress representative, and it failed on the ' +
         'communal question.'],
        ['Communal Award, 16 August 1932',
         'Announced by Ramsay MacDonald. Separate electorates for Muslims, Sikhs, ' +
         'Indian Christians, Anglo-Indians, Europeans AND the Depressed Classes.'],
        ['Poona Pact, 24 September 1932',
         'After Gandhi\'s fast unto death in Yerwada jail. Ambedkar gave up separate ' +
         'electorates for the Depressed Classes in exchange for reserved seats in a ' +
         'joint electorate — 148 instead of the 71 the Award had given.'],
        ['Third Round Table Conference, 1932', 'Congress absent.'],
        ['Government of India Act, 1935',
         'The longest Act the British Parliament had then passed. An All-India ' +
         'Federation that never came into being, provincial autonomy that did, ' +
         'dyarchy moved to the centre, a Federal Court, and separate electorates ' +
         'extended. Burma separated from India.'],
        ['Reserve Bank of India, 1935', 'Established under the RBI Act 1934, began ' +
         'operations 1 April 1935.'],
        ['Congress Socialist Party, 1934', 'Founded by Jayaprakash Narayan and ' +
         'Acharya Narendra Deva.']
      ] },

    { id: 'linlithgow', n: 'Lord Linlithgow', t: 'Viceroy', from: 1936, to: 1943, hy: true,
      w: 'The longest-serving Viceroy, and the one who declared India at war with ' +
         'Germany without consulting a single Indian. Everything that followed — the ' +
         'resignation of the Congress ministries, the August Offer, Cripps, Quit ' +
         'India — flows from that.',
      pol: [
        ['Provincial elections, 1937',
         'The first under the 1935 Act. Congress won and formed ministries in seven ' +
         'or eight of eleven provinces.'],
        ['India declared at war, 3 September 1939',
         'Without consulting the legislature. The Congress ministries resigned in ' +
         'October–November 1939; the Muslim League observed a "Day of Deliverance" ' +
         'on 22 December.'],
        ['August Offer, 8 August 1940',
         'Dominion status as the goal, an expanded executive council, a war advisory ' +
         'council, and a promise that no future constitution would be adopted ' +
         'without minority agreement — a veto in all but name. Rejected.'],
        ['Individual Satyagraha, 1940–41',
         'Vinoba Bhave was the first satyagrahi, Nehru the second.'],
        ['Cripps Mission, March 1942',
         'Offered Dominion status after the war with the right of provinces to opt ' +
         'out. Gandhi called it "a post-dated cheque".'],
        ['Quit India Movement, from 8 August 1942',
         'The Bombay session passed the Quit India resolution; the entire leadership ' +
         'was arrested by dawn on 9 August. "Do or die."'],
        ['Bengal famine, 1943',
         'Between two and three million dead. Relief was refused and grain exports ' +
         'continued.']
      ] },

    { id: 'wavell', n: 'Lord Wavell', t: 'Viceroy', from: 1943, to: 1947, hy: true,
      w: 'The soldier who inherited the wreckage and tried to negotiate a way out. ' +
         'His plan failed at Simla, the Cabinet Mission failed after it, and India ' +
         'slid into the killings of 1946.',
      pol: [
        ['C. R. Formula, 1944', 'Rajagopalachari\'s proposal for a plebiscite in ' +
         'Muslim-majority areas. Rejected by Jinnah.'],
        ['Wavell Plan and the Simla Conference, June–July 1945',
         'An executive council of Indians with equal Hindu and Muslim representation. ' +
         'It broke down on Jinnah\'s insistence that only the League could nominate ' +
         'Muslims.'],
        ['INA trials, from November 1945',
         'At the Red Fort. Three officers — Shah Nawaz Khan, Prem Sahgal and Gurbaksh ' +
         'Singh Dhillon, deliberately one Muslim, one Hindu and one Sikh. Defended ' +
         'by Bhulabhai Desai and Nehru. Convicted, then released.'],
        ['Royal Indian Navy mutiny, February 1946', 'At Bombay; it spread to ' +
         'seventy-odd ships.'],
        ['Cabinet Mission, March–June 1946',
         'Pethick-Lawrence, Cripps and A. V. Alexander. Rejected Pakistan, proposed ' +
         'a three-tier federation with grouping of provinces, and a Constituent ' +
         'Assembly. Both sides accepted and then interpreted the grouping clause ' +
         'differently.'],
        ['Direct Action Day, 16 August 1946',
         'Called by the League. Four days of killing in Calcutta.'],
        ['Interim Government, 2 September 1946',
         'Under Nehru as Vice-President of the Executive Council; the League joined ' +
         'in October and obstructed it from inside.'],
        ['Constituent Assembly first met, 9 December 1946',
         'The League stayed away.']
      ] },

    { id: 'mountbatten', n: 'Lord Mountbatten', t: 'Last Viceroy', from: 1947, to: 1947,
      hy: true,
      w: 'Sent to wind up the Raj by June 1948, he brought the date forward to ' +
         'August 1947 — a decision that saved the British an unwinnable year and ' +
         'cost an enormous number of Indian and Pakistani lives, because the ' +
         'boundary was not published until after independence.',
      pol: [
        ['3 June Plan, 1947',
         'Partition accepted. Bengal and Punjab to vote on division, a referendum ' +
         'in Sylhet and the NWFP, and a boundary commission.'],
        ['Indian Independence Act, 18 July 1947',
         'Two dominions from 15 August 1947, the Crown\'s suzerainty over the princely ' +
         'states lapsing, and each dominion\'s Constituent Assembly made sovereign.'],
        ['Radcliffe Line',
         'Cyril Radcliffe, who had never been to India, drew both boundaries in ' +
         'about five weeks. The awards were published on 17 August, two days AFTER ' +
         'independence.'],
        ['First Governor-General of free India, 1947–48',
         'He stayed on at Nehru\'s request. Pakistan chose Jinnah instead.']
      ] }
  ],

  /* --------------------------- Governors-General of the Dominion, 1947–1950 */
  free: [
    { id: 'gg-mountbatten', n: 'Lord Mountbatten',
      t: 'First Governor-General of the Dominion of India', from: 1947, to: 1948, hy: true,
      w: 'The same man again, in his third capacity. He presided over the ' +
         'integration of the princely states with Patel and V. P. Menon, and over ' +
         'the first Kashmir war.',
      pol: [
        ['Integration of the princely states, 1947–48',
         'Five hundred and sixty-odd states brought in by the Instrument of ' +
         'Accession. Junagadh by plebiscite, Hyderabad by Operation Polo in ' +
         'September 1948, Kashmir by accession on 26 October 1947.']
      ] },

    { id: 'rajaji', n: 'C. Rajagopalachari',
      t: 'Last Governor-General of India', from: 1948, to: 1950, hy: true,
      w: 'The only Indian ever to hold the office, and the last person to hold it ' +
         'at all. He took over in June 1948 and the post was abolished on 26 ' +
         'January 1950, when Rajendra Prasad became President.',
      pol: [
        ['Only Indian Governor-General', 'And the last. The office ended with the ' +
         'Constitution.'],
        ['Also', 'The first Indian Governor of West Bengal (1947), and later the ' +
         'founder of the Swatantra Party in 1959.']
      ] }
  ],

  /* --------------------------------------------------------- confused pairs */
  confusions: [
    { k: 'Warren Hastings and Lord Hastings',
      rows: [
        ['Warren Hastings, 1774–85',
         'First Governor-General of Bengal. Regulating Act, Asiatic Society, ' +
         'Rohilla War, impeached and acquitted.'],
        ['Lord Hastings, 1813–23',
         'Francis Rawdon-Hastings. Ended non-intervention: Nepal, the Pindaris, the ' +
         'Third Maratha War and the end of the Peshwaship.']
      ],
      note: 'Forty years and no relation. If the question mentions impeachment it ' +
            'is Warren; if it mentions the Marathas it is Lord Hastings.' },

    { k: 'First Governor-General of Bengal and of India',
      rows: [
        ['Warren Hastings, 1774', 'First Governor-General OF BENGAL, under the ' +
         'Regulating Act.'],
        ['Lord William Bentinck, 1833', 'First Governor-General OF INDIA, under the ' +
         'Charter Act.']
      ],
      note: 'The most frequently asked pair in this whole topic. Hastings is never ' +
            'the answer to "first Governor-General of India".' },

    { k: 'The two Treaties of Amritsar',
      rows: [
        ['1809, under Lord Minto I', 'With Ranjit Singh. The Sutlej fixed as the ' +
         'limit of Sikh expansion southward.'],
        ['1846, under Lord Hardinge I', 'Kashmir sold to Gulab Singh for seventy-five ' +
         'lakh rupees after the First Anglo-Sikh War.']
      ] },

    { k: 'The two censuses',
      rows: [
        ['1872, under Lord Mayo', 'The FIRST census — but non-synchronous, taken ' +
         'over several years and not everywhere.'],
        ['1881, under Lord Ripon', 'The first SYNCHRONOUS census, and the start of ' +
         'the regular decennial series.']
      ],
      note: 'Read whether the question says "first census" or "first synchronous / ' +
            'regular census".' },

    { k: 'Doctrine of Lapse and the annexation of Awadh',
      rows: [
        ['Doctrine of Lapse', 'Satara, Jaitpur, Sambalpur, Baghat, Udaipur, Jhansi, ' +
         'Nagpur — states whose rulers died without a natural heir.'],
        ['Awadh, 1856', 'Annexed for MISGOVERNMENT, not lapse. The Nawab had heirs.']
      ],
      note: 'Awadh is the standard wrong answer to "which state was annexed under ' +
            'the Doctrine of Lapse".' },

    { k: 'Vernacular Press Act: who passed it and who repealed it',
      rows: [
        ['Lord Lytton, 1878', 'Passed it. Indian-language papers only; English ' +
         'papers exempt.'],
        ['Lord Ripon, 1882', 'Repealed it.']
      ] },

    { k: 'The two Lord Minto Viceroys and the two Lord Elgins',
      rows: [
        ['Minto I, 1807–13', 'Governor-General. Treaty of Amritsar 1809, Charter ' +
         'Act 1813.'],
        ['Minto II, 1905–10', 'Viceroy. Morley-Minto Reforms and separate ' +
         'electorates, 1909.'],
        ['Elgin I, 1862–63', 'Died in office at Dharamshala.'],
        ['Elgin II, 1894–99', 'Plague and famine; the Chapekar brothers.']
      ] },

    { k: 'Who was Viceroy when the Congress was founded, and when it was split',
      rows: [
        ['Founded, 1885', 'Lord Dufferin.'],
        ['Split at Surat, 1907', 'Lord Minto II.'],
        ['Partition of Bengal, 1905', 'Lord Curzon.'],
        ['Partition annulled, 1911', 'Lord Hardinge II.']
      ] },

    { k: 'Canning and Mountbatten — the men who held two titles',
      rows: [
        ['Lord Canning', 'Last Governor-General of the Company AND first Viceroy. ' +
         'The Act of 1858 changed the title under him.'],
        ['Lord Mountbatten', 'Last Viceroy AND first Governor-General of free ' +
         'India. The Independence Act changed the title under him.']
      ],
      note: 'Both men are the correct answer to a "first" question and a "last" ' +
            'question at the same time.' }
  ],

  /* ------------------------------------------------------------ drill tables */
  facts: [
    { h: 'Who was in charge when — the events most often asked',
      rows: [
        ['Battle of Plassey, 1757', 'Robert Clive (before the governorship)'],
        ['Battle of Buxar, 1764', 'Henry Vansittart'],
        ['Bengal famine, 1770', 'John Cartier'],
        ['Regulating Act, 1773', 'Warren Hastings'],
        ['Pitt\'s India Act, 1784', 'Warren Hastings'],
        ['Permanent Settlement, 1793', 'Lord Cornwallis'],
        ['Subsidiary Alliance, 1798', 'Lord Wellesley'],
        ['Death of Tipu Sultan, 1799', 'Lord Wellesley'],
        ['Vellore Mutiny, 1806', 'Sir George Barlow'],
        ['Charter Act, 1813', 'Lord Minto I'],
        ['Treaty of Sugauli, 1816', 'Lord Hastings'],
        ['Abolition of sati, 1829', 'Lord William Bentinck'],
        ['Charter Act, 1833', 'Lord William Bentinck'],
        ['Macaulay\'s Minute and English Education Act, 1835', 'Lord William Bentinck'],
        ['Press freed, 1835', 'Sir Charles Metcalfe'],
        ['Annexation of Sindh, 1843', 'Lord Ellenborough'],
        ['Doctrine of Lapse, from 1848', 'Lord Dalhousie'],
        ['First railway, 1853', 'Lord Dalhousie'],
        ['Wood\'s Despatch, 1854', 'Lord Dalhousie'],
        ['Annexation of Awadh, 1856', 'Lord Dalhousie'],
        ['Revolt of 1857', 'Lord Canning'],
        ['Government of India Act, 1858', 'Lord Canning'],
        ['Indian Councils Act, 1861', 'Lord Canning'],
        ['First census, 1872', 'Lord Mayo'],
        ['Vernacular Press Act and Arms Act, 1878', 'Lord Lytton'],
        ['First Factory Act, 1881', 'Lord Ripon'],
        ['Local self-government resolution, 1882', 'Lord Ripon'],
        ['Ilbert Bill, 1883', 'Lord Ripon'],
        ['Congress founded, 1885', 'Lord Dufferin'],
        ['Indian Councils Act, 1892', 'Lord Lansdowne'],
        ['Durand Line, 1893', 'Lord Lansdowne'],
        ['Partition of Bengal, 1905', 'Lord Curzon'],
        ['Morley-Minto Reforms, 1909', 'Lord Minto II'],
        ['Capital moved to Delhi, 1911', 'Lord Hardinge II'],
        ['Rowlatt Act and Jallianwala Bagh, 1919', 'Lord Chelmsford'],
        ['Government of India Act, 1919', 'Lord Chelmsford'],
        ['Chauri Chaura, 1922', 'Lord Reading'],
        ['Simon Commission, 1928', 'Lord Irwin'],
        ['Dandi March, 1930', 'Lord Irwin'],
        ['Gandhi-Irwin Pact, 1931', 'Lord Irwin'],
        ['Communal Award and Poona Pact, 1932', 'Lord Willingdon'],
        ['Government of India Act, 1935', 'Lord Willingdon'],
        ['Quit India, 1942', 'Lord Linlithgow'],
        ['Bengal famine, 1943', 'Lord Linlithgow'],
        ['Cabinet Mission, 1946', 'Lord Wavell'],
        ['Partition and independence, 1947', 'Lord Mountbatten']
      ] },

    { h: 'The nicknames and labels',
      rows: [
        ['Father of civil services in India', 'Lord Cornwallis'],
        ['Father of local self-government in India', 'Lord Ripon'],
        ['Father of communal electorates', 'Lord Minto II'],
        ['Liberator of the Indian Press', 'Sir Charles Metcalfe'],
        ['Clemency Canning', 'Lord Canning — meant as an insult'],
        ['The maker of modern India (in British eyes)', 'Lord Dalhousie'],
        ['The most hated and the most consequential Viceroy', 'Lord Curzon'],
        ['The only Viceroy assassinated', 'Lord Mayo'],
        ['The only Governor-General impeached', 'Warren Hastings'],
        ['The only Indian Governor-General', 'C. Rajagopalachari'],
        ['The longest-serving Viceroy', 'Lord Linlithgow, seven years'],
        ['The shortest-serving Viceroy', 'Lord Mountbatten, about five months as ' +
         'Viceroy']
      ] }
  ]
};
