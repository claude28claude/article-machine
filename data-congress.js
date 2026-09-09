/* THE CONGRESS SESSIONS, 1885–1948.

   Every annual session and every special session, with its place, its
   president, and — kept as its own field rather than buried in a sentence —
   WHY THAT SESSION IS ASKED. Most sessions are asked for exactly one reason:
   a first, a split, a resolution, a song. That reason is the `why`, and the
   site renders it separately from the row so it can be revised on its own.

   VERIFICATION, and where the standard lists disagree.

   Two independent lists were compared row by row: the Wikipedia list of
   presidents of the Indian National Congress, read as a structured table, and
   a widely used exam list. They agree on every president from 1885 to 1929.
   They disagree in four places, and every one of those is printed here with
   both answers rather than a silent choice:

     1930   Some lists show a Karachi session. No annual session was held in
            1930 — the leadership was in jail under Civil Disobedience.
            Nehru continued as president from Lahore 1929.
     1932   One list gives Madan Mohan Malaviya, the other Amrit Ranchhoddas
            Seth. Malaviya was elected and arrested on his way to Delhi;
            Seth presided in his place. Both answers are defensible.
     1935   Some lists show a Lucknow session. None was held; Rajendra Prasad
            continued from Bombay 1934.
     1936   The worst one. Lucknow was the 49th session, April 1936. Faizpur
            was the 50th, 27–28 December 1936. BOTH were in 1936 and both
            were presided over by Nehru. One popular list files Faizpur under
            1937, another files Lucknow under 1937. The venue answers are
            never in doubt — Faizpur is always the first rural session — but
            the year is, and this page says so.

   Where a session is famous for a song or a phrase, the claim has been kept
   to what is actually established: Vande Mataram sung at Calcutta 1896,
   Jana Gana Mana sung at Calcutta 1911.

   SESSION NUMBERS. Neither source numbers the sessions, and counting them by
   hand does not settle it: from 1885 the count makes Faizpur the 51st, while
   the sources that do give a number call it the 50th. The difference is
   whether the banned Delhi session of 1932 is counted at all. So an ordinal
   is printed here ONLY where a source states one - the first session, and
   the 49th and 50th of 1936 - and the rest carry no number rather than a
   guessed one. The ordinal is almost never what an exam asks for; the venue
   and the president are.  */

window.CONGRESS = {

  lede: 'Every session of the Indian National Congress from its first in 1885 ' +
        'to its first after independence, with its president — and, kept ' +
        'separate, the one reason each is asked.',

  intro: 'The Congress met once a year, in December, in a different city, ' +
    'under a president elected for that session. That is why "the 1916 session" ' +
    'and "the Lucknow session" and "Ambica Charan Mazumdar" are three ways of ' +
    'naming the same thing, and why a question can come at you from any of the ' +
    'three directions. Sixty-odd sessions were held before independence. Fewer ' +
    'than twenty are ever asked about, and they are marked here — but the full ' +
    'list is given because "who presided at Amraoti" is exactly the kind of ' +
    'question a paper uses to separate candidates. Session numbers are shown ' +
    'only where a source actually gives one \u2014 the standard lists do not ' +
    'number the sessions, and counting them by hand does not agree with the ' +
    'numbers that are quoted.',

  /* --------------------------------------------------------- every session */
  sessions: [
    { id: '1885-bombay', n: 1, y: '28 December 1885', place: 'Bombay',
      pres: 'W. C. Bonnerjee', hy: true, tag: 'The first session',
      why: 'The Congress begins. Seventy-two delegates met at the Gokuldas ' +
        'Tejpal Sanskrit College in Bombay, called together by A. O. Hume, a ' +
        'retired ICS officer. Womesh Chandra Bonnerjee, a Calcutta barrister, ' +
        'presided. It had been meant for Poona, and moved to Bombay because of ' +
        'a cholera outbreak. Lord Dufferin was Viceroy.' },

    { id: '1886-calcutta', n: null, y: 'December 1886', place: 'Calcutta',
      pres: 'Dadabhai Naoroji',
      why: 'The first of Naoroji\'s three presidencies, and the session at which ' +
        'the Congress and the National Conference of Surendranath Banerjee ' +
        'merged into one body.' },

    { id: '1887-madras', n: null, y: 'December 1887', place: 'Madras',
      pres: 'Badruddin Tyabji', hy: true, tag: 'First Muslim president',
      why: 'Badruddin Tyabji was the first Muslim to preside over the Congress — ' +
        'the standard answer, and the reason this session is asked at all.' },

    { id: '1888-allahabad', n: null, y: 'December 1888', place: 'Allahabad',
      pres: 'George Yule', hy: true, tag: 'First British president',
      why: 'George Yule, a Scottish businessman, was the first non-Indian to ' +
        'preside. Four Britons held the office in all: Yule, William Wedderburn, ' +
        'Alfred Webb and Henry Cotton.' },

    { id: '1889-bombay', n: null, y: 'December 1889', place: 'Bombay',
      pres: 'Sir William Wedderburn',
      why: 'A retired ICS officer and Hume\'s closest ally. He presided again in ' +
        '1910 — one of the few men to hold the chair twice, twenty-one years ' +
        'apart.' },

    { id: '1890-calcutta', n: null, y: 'December 1890', place: 'Calcutta',
      pres: 'Pherozeshah Mehta',
      why: 'Called the Lion of Bombay, and with Wacha and Telang one of the ' +
        'triumvirate that ran Bombay politics. A Moderate\'s Moderate.' },

    { id: '1891-nagpur', n: null, y: 'December 1891', place: 'Nagpur',
      pres: 'P. Ananda Charlu (Panapakkam Anandacharlu)',
      why: 'Ananda Charlu had been one of the founders in 1885. Nagpur\'s first ' +
        'session; it would host the far more famous one of 1920.' },

    { id: '1892-allahabad', n: null, y: 'December 1892', place: 'Allahabad',
      pres: 'W. C. Bonnerjee',
      why: 'Bonnerjee\'s second term, seven years after the first. The Indian ' +
        'Councils Act of 1892 had just been passed.' },

    { id: '1893-lahore', n: null, y: 'December 1893', place: 'Lahore',
      pres: 'Dadabhai Naoroji', why: 'Naoroji\'s second term. He was at this time ' +
        'a Member of the British Parliament for Central Finsbury — the first ' +
        'Indian to sit in the House of Commons.' },

    { id: '1894-madras', n: null, y: 'December 1894', place: 'Madras',
      pres: 'Alfred Webb',
      why: 'An Irish Quaker and Member of Parliament — the third British ' +
        'president, and the one most often forgotten in the list of four.' },

    { id: '1895-poona', n: null, y: 'December 1895', place: 'Poona',
      pres: 'Surendranath Banerjee',
      why: 'The first of Banerjee\'s two terms. He had founded the Indian ' +
        'Association in 1876 and is called the father of Indian nationalism, and ' +
        'also "Surrender-not Banerjee".' },

    { id: '1896-calcutta', n: null, y: 'December 1896', place: 'Calcutta',
      pres: 'Rahimtulla M. Sayani', hy: true, tag: 'Vande Mataram first sung',
      why: 'VANDE MATARAM was sung in public at a Congress session for the first ' +
        'time here, by Rabindranath Tagore, who had set Bankim Chandra ' +
        'Chatterjee\'s poem to music. The song was written in 1875 and printed in ' +
        'the novel Anandamath in 1882.' },

    { id: '1897-amraoti', n: null, y: 'December 1897', place: 'Amraoti (Amravati)',
      pres: 'C. Sankaran Nair',
      why: 'The only Malayali ever to preside over the Congress. He later resigned ' +
        'from the Viceroy\'s Executive Council in protest at Jallianwala Bagh, and ' +
        'wrote the book that led to a famous libel suit against Michael O\'Dwyer.' },

    { id: '1898-madras', n: null, y: 'December 1898', place: 'Madras',
      pres: 'Ananda Mohan Bose',
      why: 'The first Indian Wrangler at Cambridge, and a founder with Surendranath ' +
        'Banerjee of the Indian Association.' },

    { id: '1899-lucknow', n: null, y: 'December 1899', place: 'Lucknow',
      pres: 'Romesh Chunder Dutt',
      why: 'The economic historian of the drain: his Economic History of India ' +
        'carried the argument Naoroji had made in Poverty and Un-British Rule in ' +
        'India.' },

    { id: '1900-lahore', n: null, y: 'December 1900', place: 'Lahore',
      pres: 'N. G. Chandavarkar',
      why: 'Judge of the Bombay High Court and a social reformer of the Prarthana ' +
        'Samaj.' },

    { id: '1901-calcutta', n: null, y: 'December 1901', place: 'Calcutta',
      pres: 'Dinshaw Edulji Wacha',
      why: 'One of the three founders of the Bombay Presidency Association with ' +
        'Mehta and Telang, and a long-serving general secretary of the Congress.' },

    { id: '1902-ahmedabad', n: null, y: 'December 1902', place: 'Ahmedabad',
      pres: 'Surendranath Banerjee', why: 'His second term.' },

    { id: '1903-madras', n: null, y: 'December 1903', place: 'Madras',
      pres: 'Lalmohan Ghosh',
      why: 'The first Indian to address an English audience as a parliamentary ' +
        'candidate, and the man who moved the Congress\'s first resolution on the ' +
        'ICS examination being held in India.' },

    { id: '1904-bombay', n: null, y: 'December 1904', place: 'Bombay',
      pres: 'Sir Henry Cotton',
      why: 'The fourth and last British president, and a sharp critic of Curzon\'s ' +
        'plan to partition Bengal, which was already in the air.' },

    { id: '1905-benares', n: null, y: 'December 1905', place: 'Benares (Varanasi)',
      pres: 'Gopal Krishna Gokhale', hy: true, tag: 'Partition condemned',
      why: 'Held ten weeks after the Partition of Bengal took effect. The Congress ' +
        'condemned the partition and approved the boycott of British goods for ' +
        'Bengal — the Moderates accepting a tactic the Extremists had forced on ' +
        'them. Gokhale was Gandhi\'s political guru.' },

    { id: '1906-calcutta', n: null, y: 'December 1906', place: 'Calcutta',
      pres: 'Dadabhai Naoroji', hy: true, tag: 'Swaraj declared the goal',
      why: 'SWARAJ was declared the goal of the Congress for the first time. ' +
        'Naoroji, in his third term and eighty-one years old, was chosen precisely ' +
        'because he was the one man both Moderates and Extremists would accept. ' +
        'The four resolutions of this session — swaraj, swadeshi, boycott and ' +
        'national education — are the programme of the whole Swadeshi movement.' },

    { id: '1907-surat', n: null, y: 'December 1907', place: 'Surat',
      pres: 'Rash Behari Ghosh', hy: true, tag: 'The Split',
      why: 'THE SURAT SPLIT. The Congress broke into Moderates and Extremists over ' +
        'the presidency and over the swadeshi and boycott resolutions; the session ' +
        'ended in chairs being thrown and was abandoned. The Extremists — Tilak, ' +
        'Lajpat Rai, Bipin Chandra Pal — were out of the Congress until Lucknow in ' +
        '1916.' },

    { id: '1908-madras', n: null, y: 'December 1908', place: 'Madras',
      pres: 'Rash Behari Ghosh',
      why: 'The Congress adopted a written constitution for the first time, drafted ' +
        'after the Surat split to make sure nothing like it could happen again. ' +
        'Rash Behari Ghosh presided twice running.' },

    { id: '1909-lahore', n: null, y: 'December 1909', place: 'Lahore',
      pres: 'Madan Mohan Malaviya',
      why: 'Held weeks after the Morley-Minto Reforms introduced separate ' +
        'electorates, which the Congress opposed. Malaviya presided again in 1918 ' +
        'and was elected again in 1932.' },

    { id: '1910-allahabad', n: null, y: 'December 1910', place: 'Allahabad',
      pres: 'Sir William Wedderburn', why: 'His second term, twenty-one years after ' +
        'his first — the longest gap between two presidencies.' },

    { id: '1911-calcutta', n: null, y: '27 December 1911', place: 'Calcutta',
      pres: 'Bishan Narayan Dar (also spelt Dhar)', hy: true, tag: 'Jana Gana Mana first sung',
      why: 'JANA GANA MANA was sung in public for the first time, on the second ' +
        'day of this session, by Rabindranath Tagore. It became the national ' +
        'anthem on 24 January 1950. The Delhi Durbar, at which the partition of ' +
        'Bengal was annulled and the capital moved to Delhi, was a fortnight ' +
        'earlier.' },

    { id: '1912-bankipore', n: null, y: 'December 1912', place: 'Bankipore (Patna)',
      pres: 'R. N. Mudholkar', why: 'A quiet Moderate session at Bankipore, near ' +
        'Patna.' },

    { id: '1913-karachi', n: null, y: 'December 1913', place: 'Karachi',
      pres: 'Nawab Syed Muhammad Bahadur (listed as Syed Mohammed)',
      why: 'Listed in some places simply as "Syed Mohammed" — the same man. Karachi ' +
        'would host the far more famous session of 1931.' },

    { id: '1914-madras', n: null, y: 'December 1914', place: 'Madras',
      pres: 'Bhupendra Nath Bose (also spelt Basu)', why: 'The first session of the war years.' },

    { id: '1915-bombay', n: null, y: 'December 1915', place: 'Bombay',
      pres: 'Satyendra Prasanna Sinha', hy: true,
      why: 'S. P. Sinha was the first Indian appointed to the Viceroy\'s Executive ' +
        'Council (1909), the first Indian Governor of a province (Bihar and Orissa, ' +
        '1920) and the only Indian raised to the British peerage as Lord Sinha. ' +
        'Gandhi had returned to India in January 1915 and attended.' },

    { id: '1916-lucknow', n: null, y: 'December 1916', place: 'Lucknow',
      pres: 'Ambica Charan Mazumdar', hy: true, tag: 'The Lucknow Pact',
      why: 'TWO REUNIONS AT ONCE. The Moderates and Extremists came back together ' +
        'after nine years apart, and the Congress and the Muslim League signed the ' +
        'LUCKNOW PACT — the League accepting the demand for self-government and the ' +
        'Congress accepting separate electorates. It is the high point of ' +
        'Congress–League co-operation and the moment Jinnah was called the ' +
        'ambassador of Hindu-Muslim unity.' },

    { id: '1917-calcutta', n: null, y: 'December 1917', place: 'Calcutta',
      pres: 'Annie Besant', hy: true, tag: 'First woman president',
      why: 'ANNIE BESANT was the first woman to preside over the Congress. She had ' +
        'been interned that June for the Home Rule agitation, and released in ' +
        'September; the presidency was the Congress\'s answer to her internment. ' +
        'The Montagu Declaration had come in August.' },

    { id: '1918-bombay', n: null, y: 'August–September 1918', place: 'Bombay',
      special: true, pres: 'Syed Hasan Imam',
      why: 'A SPECIAL SESSION called to reject the Montagu-Chelmsford proposals as ' +
        'inadequate. The Moderates who thought them worth accepting walked out and ' +
        'formed the Indian Liberal Federation — the Congress\'s second split, and ' +
        'the end of the Moderates as a force inside it.' },

    { id: '1918-delhi', n: null, y: 'December 1918', place: 'Delhi',
      pres: 'Madan Mohan Malaviya',
      why: 'The regular annual session of 1918, held separately from the Bombay ' +
        'special session four months earlier. Two sessions in one year, two ' +
        'presidents — a favourite trick question.' },

    { id: '1919-amritsar', n: null, y: 'December 1919', place: 'Amritsar',
      pres: 'Motilal Nehru', hy: true,
      why: 'Held at Amritsar eight months after JALLIANWALA BAGH, deliberately, in ' +
        'the city where it happened. Gandhi attended his first Congress session as ' +
        'a leading figure. Motilal Nehru presided; his son would preside ten years ' +
        'later.' },

    { id: '1920-calcutta', n: null, y: 'September 1920', place: 'Calcutta',
      special: true, pres: 'Lala Lajpat Rai', hy: true,
      tag: 'Non-Cooperation approved',
      why: 'A SPECIAL SESSION that approved Gandhi\'s NON-COOPERATION programme — ' +
        'against the opposition of Das, Jinnah, Malaviya and Annie Besant. This is ' +
        'where Non-Cooperation is adopted; Nagpur three months later only confirms ' +
        'it. Lajpat Rai, the Lion of Punjab, presided.' },

    { id: '1920-nagpur', n: null, y: 'December 1920', place: 'Nagpur',
      pres: 'C. Vijayaraghavachariar', hy: true, tag: 'The Congress reorganised',
      why: 'NON-COOPERATION CONFIRMED, and the Congress rebuilt as a mass ' +
        'organisation: the goal changed from self-government by constitutional ' +
        'means to swaraj by all peaceful and legitimate means, a Working Committee ' +
        'of fifteen was created to run it between sessions, provincial committees ' +
        'were redrawn on LINGUISTIC lines, and the membership fee was cut to four ' +
        'annas so that ordinary people could join. Jinnah left the Congress here.' },

    { id: '1921-ahmedabad', n: null, y: 'December 1921', place: 'Ahmedabad',
      pres: 'Hakim Ajmal Khan',
      why: 'C. R. Das had been elected president but was in jail, so HAKIM AJMAL ' +
        'KHAN presided in his place. A question asking who was ELECTED and a ' +
        'question asking who PRESIDED have different answers here.' },

    { id: '1922-gaya', n: null, y: 'December 1922', place: 'Gaya',
      pres: 'C. R. Das', hy: true,
      why: 'The session after Chauri Chaura and the withdrawal of Non-Cooperation. ' +
        'Das and Motilal Nehru argued for entering the councils and were defeated ' +
        'by the "no-changers"; they resigned their Congress offices and founded the ' +
        'SWARAJ PARTY on 1 January 1923.' },

    { id: '1923-delhi', n: null, y: 'September 1923', place: 'Delhi',
      special: true, pres: 'Abul Kalam Azad', hy: true, tag: 'Youngest president',
      why: 'A SPECIAL SESSION, and Maulana Abul Kalam Azad at thirty-five became ' +
        'the YOUNGEST PRESIDENT in the Congress\'s history — a record that still ' +
        'stands. The session compromised with the Swarajists and allowed Congressmen ' +
        'to contest the council elections.' },

    { id: '1923-kakinada', n: null, y: 'December 1923', place: 'Kakinada (Cocanada)',
      pres: 'Maulana Mohammad Ali',
      why: 'The elder of the Ali brothers of the Khilafat movement. Two sessions ' +
        'again in one year, and two Muslim presidents in the same year.' },

    { id: '1924-belgaum', n: null, y: 'December 1924', place: 'Belgaum',
      pres: 'M. K. Gandhi', hy: true, tag: 'The only session Gandhi presided over',
      why: 'GANDHI\'S ONLY PRESIDENCY — the only time he ever took the chair, in forty ' +
        'years of leading it. He led the Congress without ever wanting its offices; ' +
        'Belgaum is the single exception, and it is asked constantly.' },

    { id: '1925-kanpur', n: null, y: 'December 1925', place: 'Kanpur',
      pres: 'Sarojini Naidu', hy: true, tag: 'First Indian woman president',
      why: 'SAROJINI NAIDU was the first INDIAN woman to preside — Annie Besant, ' +
        'eight years earlier, was the first woman. The pair is the trap: "first ' +
        'woman" is Besant, "first Indian woman" is Naidu. Naidu later became the ' +
        'first woman Governor of an Indian state, at Uttar Pradesh.' },

    { id: '1926-gauhati', n: null, y: 'December 1926', place: 'Gauhati (Guwahati)',
      pres: 'S. Srinivasa Iyengar',
      why: 'The first session held in the north-east. Iyengar led the Swarajists ' +
        'in the Central Legislative Assembly.' },

    { id: '1927-madras', n: null, y: 'December 1927', place: 'Madras',
      pres: 'M. A. Ansari', hy: true, tag: 'First independence resolution',
      why: 'The Congress declared COMPLETE INDEPENDENCE its goal for the first ' +
        'time, on a resolution moved by Jawaharlal Nehru — two years before Lahore ' +
        'made it the working demand. It also resolved to boycott the SIMON ' +
        'COMMISSION, which had been announced a month earlier with no Indian on it.' },

    { id: '1928-calcutta', n: null, y: 'December 1928', place: 'Calcutta',
      pres: 'Motilal Nehru', hy: true,
      why: 'The session that considered the NEHRU REPORT, drafted under Motilal ' +
        'Nehru as India\'s own answer to the challenge to produce a constitution. ' +
        'It asked for Dominion Status; the younger men — Jawaharlal Nehru and ' +
        'Subhas Bose — wanted independence, and the compromise was an ultimatum: ' +
        'Dominion Status within a year, or complete independence and civil ' +
        'disobedience. The year ran out at Lahore.' },

    { id: '1929-lahore', n: null, y: 'December 1929', place: 'Lahore',
      pres: 'Jawaharlal Nehru', hy: true, tag: 'Purna Swaraj',
      why: 'The most important session of them all. PURNA SWARAJ — complete ' +
        'independence — was adopted as the goal on the banks of the Ravi at ' +
        'midnight on 31 December 1929, the tricolour was raised, and 26 JANUARY ' +
        '1930 was fixed as the first Independence Day. That is the date the ' +
        'Constitution was later brought into force on, twenty years afterwards, to ' +
        'honour this session. Nehru was thirty-nine.' },

    { id: '1930-none', n: null, y: '1930', place: 'No session held', none: true,
      pres: 'Jawaharlal Nehru continued', hy: true,
      why: 'NO SESSION IN 1930. The Civil Disobedience Movement had begun ' +
        'with the Dandi March in March and the entire leadership was in jail. Nehru ' +
        'continued as president from Lahore. Some lists print a Karachi session ' +
        'against 1930 — that is the March 1931 session, filed one year early.' },

    { id: '1931-karachi', n: null, y: 'March 1931', place: 'Karachi',
      pres: 'Vallabhbhai Patel', hy: true, tag: 'Fundamental Rights resolution',
      why: 'Held days after BHAGAT SINGH, Sukhdev and Rajguru were hanged on 23 ' +
        'March 1931, and in that atmosphere it endorsed the Gandhi-Irwin Pact and ' +
        'authorised Gandhi to attend the Second Round Table Conference. Its ' +
        'resolution on FUNDAMENTAL RIGHTS and National Economic Policy, drafted by ' +
        'Nehru, is the first statement of what a free India would guarantee its ' +
        'citizens — and the direct ancestor of Parts III and IV of the ' +
        'Constitution.' },

    { id: '1932-delhi', n: null, y: 'April 1932', place: 'Delhi',
      pres: 'Madan Mohan Malaviya (elected); Amrit Ranchhoddas Seth (presided)',
      hy: true, disputed: true,
      why: 'The session was banned and the Congress declared an unlawful ' +
        'association. MALAVIYA was elected president and arrested on his way to ' +
        'Delhi; AMRIT RANCHHODDAS SETH presided in his place. This is the one row ' +
        'where the two standard lists give different names, and both are right — ' +
        'one names the man elected, the other the man who took the chair.' },

    { id: '1933-calcutta', n: null, y: 'April 1933', place: 'Calcutta',
      pres: 'Nellie Sengupta', hy: true, tag: 'Third woman president',
      why: 'NELLIE SENGUPTA, born Edith Ellen Gray in Cambridge, was the third ' +
        'woman and the second foreign-born woman to preside. The three women ' +
        'presidents before independence, in order: Annie Besant (1917), Sarojini ' +
        'Naidu (1925), Nellie Sengupta (1933). This session too was held under ' +
        'ban.' },

    { id: '1934-bombay', n: null, y: 'October 1934', place: 'Bombay',
      pres: 'Rajendra Prasad',
      why: 'Civil Disobedience was formally withdrawn and the Congress returned to ' +
        'the councils. Rajendra Prasad, who would preside over the Constituent ' +
        'Assembly and become the first President of India, held the chair.' },

    { id: '1935-none', n: null, y: '1935', place: 'No session held', none: true,
      pres: 'Rajendra Prasad continued',
      why: 'NO SESSION IN 1935, the year of the Government of India Act. ' +
        'Rajendra Prasad continued from Bombay. Some lists print a Lucknow session ' +
        'against 1935 — that is the April 1936 session.' },

    { id: '1936-lucknow', n: 49, y: 'April 1936', place: 'Lucknow',
      pres: 'Jawaharlal Nehru', hy: true, tag: 'Socialism enters the Congress',
      why: 'Nehru\'s presidential address put SOCIALISM into the Congress\'s ' +
        'vocabulary for the first time, and the session accepted the Congress ' +
        'Socialist Party men — Jayaprakash Narayan, Narendra Deva and Achyut ' +
        'Patwardhan — onto the Working Committee. It also decided to contest the ' +
        '1937 elections under the 1935 Act while continuing to reject the Act ' +
        'itself.' },

    { id: '1936-faizpur', n: 50, y: '27–28 December 1936', place: 'Faizpur',
      pres: 'Jawaharlal Nehru', hy: true, tag: 'First session in a village',
      disputed: true,
      why: 'THE FIRST RURAL SESSION. The Congress met in a village rather than a ' +
        'city — Faizpur, in Jalgaon district of what is now Maharashtra, chosen so that ' +
        'the peasants the Congress claimed to speak for could actually attend. Tens ' +
        'of thousands of them did. An agrarian programme was adopted. NOTE THE ' +
        'YEAR: the session sat on 27–28 December 1936, but many exam lists file it ' +
        'under 1937 because it was the 1937 presidency year, and one popular list ' +
        'has Lucknow and Faizpur the wrong way round. The venue answer — Faizpur ' +
        'for the first rural session — is never in doubt.' },

    { id: '1938-haripura', n: null, y: 'February 1938', place: 'Haripura',
      pres: 'Subhas Chandra Bose', hy: true, tag: 'National Planning Committee',
      why: 'Bose\'s first presidency, at a village in Gujarat. The session set up ' +
        'the NATIONAL PLANNING COMMITTEE under Nehru — the first serious attempt at ' +
        'planning for a free India, and the ancestor of the Planning Commission. ' +
        'Fifty-one bullocks drew the president\'s chariot.' },

    { id: '1939-tripuri', n: null, y: 'March 1939', place: 'Tripuri',
      pres: 'Subhas Chandra Bose (resigned April 1939); Rajendra Prasad took over',
      hy: true, tag: 'Bose defeats Gandhi\'s candidate, then resigns',
      why: 'THE GREAT QUARREL. Bose stood for re-election against Gandhi\'s ' +
        'candidate PATTABHI SITARAMAYYA and won by 1,580 votes to 1,377. Gandhi ' +
        'said "Pattabhi\'s defeat is more my defeat than his". The Working ' +
        'Committee resigned, the Pant resolution required Bose to appoint a ' +
        'committee of Gandhi\'s choosing, and in April 1939 BOSE RESIGNED. Rajendra ' +
        'Prasad replaced him. Bose founded the FORWARD BLOC on 3 May 1939.' },

    { id: '1940-ramgarh', n: null, y: 'March 1940', place: 'Ramgarh',
      pres: 'Abul Kalam Azad', hy: true,
      why: 'THE LAST SESSION for six years. Azad was elected ' +
        'and stayed president through the whole of the war — 1940 to 1946 — the ' +
        'longest tenure any Congress president has had. The Muslim League passed ' +
        'its LAHORE (PAKISTAN) RESOLUTION in the same month, March 1940.' },

    { id: '1941-none', n: null, y: '1941–1945', place: 'No sessions held', none: true,
      pres: 'Abul Kalam Azad continued', hy: true,
      why: 'NO SESSIONS 1941–45. Individual Satyagraha, then Quit India in ' +
        'August 1942, then three years with the entire leadership in jail. Azad ' +
        'remained president for all of it, which is why he is the answer to "who ' +
        'was Congress president during the Quit India Movement" and to "who was ' +
        'Congress president at the time of the Cabinet Mission".' },

    { id: '1946-nehru', n: null, y: 'July 1946', place: 'No session — Nehru elected president',
      none: true, pres: 'Jawaharlal Nehru', hy: true,
      tag: 'The presidency that made him Prime Minister',
      why: 'Not a session, but the most consequential election in the ' +
        'Congress\'s history. NEHRU WAS ELECTED PRESIDENT in mid-1946 at Gandhi\'s ' +
        'urging \u2014 twelve of the fifteen provincial committees had nominated ' +
        'Patel, and none had nominated Nehru, but Gandhi asked Patel to stand ' +
        'down. Because the Viceroy invited the Congress president to form the ' +
        'INTERIM GOVERNMENT that September, that election is what made Nehru the ' +
        'head of the first Indian government and, ten months later, Prime ' +
        'Minister. Kripalani took the chair at Meerut in November.' },

    { id: '1946-meerut', n: null, y: 'November 1946', place: 'Meerut',
      pres: 'J. B. Kripalani', hy: true, tag: 'Last session before independence',
      why: 'THE LAST BEFORE INDEPENDENCE. Acharya Kripalani presided at Meerut, ' +
        'and was therefore Congress president on 15 August 1947 — which is the ' +
        'answer to "who was Congress president at independence". The other 1946 ' +
        'presidency, Nehru\'s, is the row above.' },

    { id: '1948-jaipur', n: null, y: 'December 1948', place: 'Jaipur',
      pres: 'Pattabhi Sitaramayya', hy: true, tag: 'First session after independence',
      why: 'THE FIRST AFTER INDEPENDENCE, and a small piece of justice: ' +
        'PATTABHI SITARAMAYYA, whom Bose had beaten at Tripuri nine years earlier, ' +
        'finally took the chair. Gandhi had been assassinated in January. No annual ' +
        'session was held in 1947; Kripalani resigned in November 1947 and Rajendra ' +
        'Prasad held the presidency until Jaipur.' }
  ],

  /* ------------------------------------------------------ firsts and records */
  firsts: [
    { h: 'The firsts — the questions that are asked every year',
      rows: [
        ['First president', 'W. C. Bonnerjee, Bombay 1885'],
        ['First session', 'Bombay, 28 December 1885, 72 delegates, Gokuldas Tejpal ' +
         'Sanskrit College'],
        ['Founder / the moving spirit', 'A. O. Hume, a retired ICS officer. Called ' +
         'the father of the Indian National Congress'],
        ['First Muslim president', 'Badruddin Tyabji, Madras 1887'],
        ['First British (non-Indian) president', 'George Yule, Allahabad 1888'],
        ['First woman president', 'Annie Besant, Calcutta 1917'],
        ['First INDIAN woman president', 'Sarojini Naidu, Kanpur 1925'],
        ['Third woman president', 'Nellie Sengupta, Calcutta 1933'],
        ['Youngest president', 'Abul Kalam Azad, 35, Delhi special session 1923'],
        ['Longest-serving president', 'Abul Kalam Azad, 1940–1946'],
        ['Only session Gandhi presided over', 'Belgaum, 1924'],
        ['Only Malayali president', 'C. Sankaran Nair, Amraoti 1897'],
        ['First session in a village', 'Faizpur, December 1936'],
        ['First session in the north-east', 'Gauhati, 1926'],
        ['Last session before independence', 'Meerut, November 1946, under ' +
         'J. B. Kripalani'],
        ['First session after independence', 'Jaipur, December 1948, under Pattabhi ' +
         'Sitaramayya'],
        ['Congress president on 15 August 1947', 'J. B. Kripalani']
      ] },

    { h: 'Presidents who held the chair more than once',
      note: 'Repeat terms are a favourite source of "how many times" questions.',
      rows: [
        ['Dadabhai Naoroji', 'Three times — 1886 Calcutta, 1893 Lahore, 1906 ' +
         'Calcutta. The most of anyone before independence.'],
        ['W. C. Bonnerjee', 'Twice — 1885 Bombay, 1892 Allahabad'],
        ['Surendranath Banerjee', 'Twice — 1895 Poona, 1902 Ahmedabad'],
        ['Sir William Wedderburn', 'Twice — 1889 Bombay, 1910 Allahabad'],
        ['Rash Behari Ghosh', 'Twice, consecutively — 1907 Surat, 1908 Madras'],
        ['Madan Mohan Malaviya', 'Twice presiding — 1909 Lahore, 1918 Delhi — and ' +
         'elected a third time in 1932, when he was arrested before he could take ' +
         'the chair'],
        ['Jawaharlal Nehru', 'Before independence: 1929 Lahore, 1936 Lucknow, 1936 ' +
         'Faizpur, and again in 1946'],
        ['Subhas Chandra Bose', 'Twice — 1938 Haripura, 1939 Tripuri, the second ' +
         'ending in his resignation'],
        ['Rajendra Prasad', 'Twice — 1934 Bombay, and 1939 after Bose resigned'],
        ['Abul Kalam Azad', 'Twice — the 1923 Delhi special session, and 1940–46']
      ] },

    { h: 'The sessions by what happened at them',
      rows: [
        ['Swaraj declared the goal', 'Calcutta 1906, under Dadabhai Naoroji'],
        ['The Split', 'Surat 1907, under Rash Behari Ghosh'],
        ['A written constitution adopted', 'Madras 1908'],
        ['Congress and League reunited; the Lucknow Pact', 'Lucknow 1916'],
        ['Moderates walk out and form the Liberal Federation',
         'Bombay special session, 1918'],
        ['Non-Cooperation approved', 'Calcutta special session, September 1920'],
        ['Non-Cooperation confirmed; the Congress reorganised on linguistic lines',
         'Nagpur, December 1920'],
        ['Swaraj Party grows out of the defeat over council entry', 'Gaya 1922'],
        ['Complete independence made the goal for the first time', 'Madras 1927'],
        ['Nehru Report considered; the one-year ultimatum', 'Calcutta 1928'],
        ['Purna Swaraj adopted; 26 January fixed as Independence Day',
         'Lahore 1929'],
        ['Fundamental Rights and National Economic Policy resolution',
         'Karachi 1931'],
        ['Socialism enters the Congress programme', 'Lucknow, April 1936'],
        ['First session in a village; the agrarian programme',
         'Faizpur, December 1936'],
        ['National Planning Committee set up', 'Haripura 1938'],
        ['Bose beats Gandhi\'s candidate and then resigns', 'Tripuri 1939'],
        ['Quit India resolution', 'Bombay, 8 August 1942 — an AICC meeting at ' +
         'Gowalia Tank, not an annual session']
      ],
      note: 'The Quit India resolution is the classic trap: it was passed at a ' +
            'meeting of the All India Congress Committee in Bombay, not at an ' +
            'annual session. There was no annual session between 1940 and 1946.' }
  ],

  /* --------------------------------------------------------- confused pairs */
  confusions: [
    { k: 'First woman president and first Indian woman president',
      rows: [
        ['Annie Besant, Calcutta 1917', 'FIRST WOMAN president. Irish-born, a ' +
         'Theosophist, and the founder of the Home Rule League.'],
        ['Sarojini Naidu, Kanpur 1925', 'First INDIAN woman president. The ' +
         'Nightingale of India.'],
        ['Nellie Sengupta, Calcutta 1933', 'The third woman, born in England.']
      ],
      note: 'The commonest single mistake in this topic. Read whether the question ' +
            'says "woman" or "Indian woman".' },

    { k: 'The two 1920 sessions',
      rows: [
        ['Calcutta, September 1920 — SPECIAL session', 'Lala Lajpat Rai. ' +
         'Non-Cooperation APPROVED here.'],
        ['Nagpur, December 1920 — annual session', 'C. Vijayaraghavachariar. ' +
         'Non-Cooperation CONFIRMED, and the Congress reorganised.']
      ],
      note: 'If the question says "adopted" or "approved", it is Calcutta. If it ' +
            'mentions linguistic provinces, the Working Committee or the four-anna ' +
            'membership, it is Nagpur.' },

    { k: 'Elected president and presiding president',
      rows: [
        ['Ahmedabad 1921', 'C. R. Das was ELECTED; he was in jail, so Hakim Ajmal ' +
         'Khan PRESIDED.'],
        ['Delhi 1932', 'Madan Mohan Malaviya was ELECTED and arrested en route; ' +
         'Amrit Ranchhoddas Seth PRESIDED.']
      ],
      note: 'Two rows where different lists give different names for the same ' +
            'session, because they are answering different questions.' },

    { k: 'Lucknow 1916 and Lucknow 1936',
      rows: [
        ['Lucknow 1916', 'Ambica Charan Mazumdar. The Lucknow Pact, and the ' +
         'Moderates and Extremists reunited.'],
        ['Lucknow, April 1936', 'Jawaharlal Nehru. Socialism, and the decision to ' +
         'contest the 1937 elections.']
      ] },

    { k: 'Karachi 1913 and Karachi 1931',
      rows: [
        ['Karachi 1913', 'Nawab Syed Muhammad Bahadur. Nothing much.'],
        ['Karachi 1931', 'Vallabhbhai Patel. The Fundamental Rights resolution, and ' +
         'the endorsement of the Gandhi-Irwin Pact days after Bhagat Singh was ' +
         'hanged.']
      ] },

    { k: 'Where independence was demanded — three different sessions',
      rows: [
        ['Calcutta 1906', 'SWARAJ declared the goal — self-government within the ' +
         'empire, on the Canadian model.'],
        ['Madras 1927', 'COMPLETE INDEPENDENCE resolved for the first time, on ' +
         'Nehru\'s motion.'],
        ['Lahore 1929', 'PURNA SWARAJ adopted as the working demand, with 26 ' +
         'January 1930 as Independence Day.']
      ],
      note: 'Three sessions, three different strengths of the same word. Lahore is ' +
            'the answer to "Purna Swaraj"; Madras to "first independence ' +
            'resolution"; Calcutta 1906 to "swaraj".' },

    { k: 'The Quit India resolution was not passed at a session',
      rows: [
        ['Bombay, 8 August 1942', 'An All India Congress Committee meeting at ' +
         'Gowalia Tank Maidan. This is where "Quit India" and "Do or die" belong.'],
        ['The last annual session before it', 'Ramgarh, March 1940, under Abul ' +
         'Kalam Azad — who was still president in August 1942.']
      ] },

    { k: 'Who founded the Congress, and who presided over it',
      rows: [
        ['A. O. Hume', 'Founder and first general secretary. Never president.'],
        ['W. C. Bonnerjee', 'First president. Not the founder.'],
        ['Lord Dufferin', 'The Viceroy at the time. Knew of the plan; not a founder.']
      ] }
  ]
};
