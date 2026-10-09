/* The Article Machine - data-daily.js
   Daily study sets: one page per study day, labelled with its date.

   WHY THIS EXISTS. Everything else on the site is static: the answer is the
   same this year as last. Current affairs are not, and Static GK says
   plainly that they are kept out of it, because mixing them in is how a
   study file quietly stops being true. They come here instead, where every
   page carries the date it was written for, so a stale fact reads as old
   rather than as wrong.

   A set has two kinds of part:

   - A FULL part carries its own `notes` and `blocks`. The Booker Prize and
     the current holders of each cup live here and nowhere else.
   - A RECAP part carries `from`, the address of notes that already live on
     a subject page (the 1991 reforms, a GK pack, a Mughal topic). The set
     shows those notes and links to the page. Nothing is copied, so the set
     and the page cannot drift apart.

   Adding tomorrow's set is one more entry at the TOP of `sets`, with its
   own id; it appears in the nav strip, the topic hub, the index and the
   search on its own.

   Sources for the current-affairs parts: the Booker Prize Foundation's
   announcements and the official results of each tournament, checked on
   9 October 2026.                                                          */

window.DAILY = {

sets: [

{id:"10-october", d:"10 October", y:2026,
 w:"The Booker Prize of the last four years, books and authors with the 2026 Nobel, who holds each cup now, Paris 2024, international organisations, and the SSC notes on the 1991 reforms, the Five Year Plans, sports and their cups, the Jain councils, ISRO's missions and the Mughals.",
 intro:"Two parts here are current affairs and live only on this page: the Booker Prize and the current holders of each cup. The rest are revision sheets for topics that were added or deepened on the site today; each gives the highlighted notes and a link to the full page.",
 parts:[

  /* ---------------------------------------------------------- full part */
  {id:"booker", tag:"Current affairs · books", h:"The Booker Prize, 2022 to 2025",
   w:"The last four winners, the four International Booker winners alongside them, the Indian connection, and the 2026 shortlist with its winner still to come.",
   notes:[
    "==2025==: ==David Szalay==, ==Flesh==. The first ==Hungarian-British== winner. Announced 10 November 2025; jury chaired by Roddy Doyle.",
    "==2024==: ==Samantha Harvey== (Britain), ==Orbital==. The first winner ==set in space==: six astronauts on the International Space Station over one day.",
    "==2023==: ==Paul Lynch== (Ireland), ==Prophet Song==. Ireland sliding into tyranny; the ==fifth Irish== winner.",
    "==2022==: ==Shehan Karunatilaka== (Sri Lanka), ==The Seven Moons of Maali Almeida==. The ==second Sri Lankan-born== winner, after Michael Ondaatje in 1992.",
    "The prize: ==£50,000==, since ==1969==, for a novel written in ==English== and published in the UK or Ireland; open to writers of ==any nationality== since 2014.",
    "International Booker, for a book ==translated== into English; the money is ==split== between author and translator.",
    "International Booker ==2022==: ==Geetanjali Shree==, ==Tomb of Sand== (Hindi, translated by ==Daisy Rockwell==): the ==first from an Indian language==.",
    "International Booker ==2025==: ==Banu Mushtaq==, ==Heart Lamp== (Kannada, translated by ==Deepa Bhasthi==): the ==first short-story collection== to win.",
    "International Booker ==2026==: ==Yang Shuang-zi==, ==Taiwan Travelogue== (translated by Lin King): the ==first from Mandarin==.",
    "Booker 2026: shortlist of six announced ==22 September 2026==, jury chaired by ==Mary Beard==; the winner is due on ==9 November 2026==.",
    "Indian winners: ==Salman Rushdie== (1981), ==Arundhati Roy== (1997), ==Kiran Desai== (2006), ==Aravind Adiga== (2008). Kiran Desai was ==shortlisted again in 2025==."
   ],
   blocks:[
    {h:"The winners, 2022 to 2025",
     rows:[
      ["2025: David Szalay, Flesh","==Hungarian-British==: born in Canada, raised in London, lives in Vienna. A spare novel that follows one Hungarian man from adolescence to old age. The first Hungarian-British winner. Announced 10 November 2025 at Old Billingsgate, London; chair of judges ==Roddy Doyle==, the 1993 winner. Szalay had been shortlisted before, for All That Man Is (2016)"],
      ["2024: Samantha Harvey, Orbital","==British==. Six astronauts aboard the ==International Space Station== across a single day of sixteen orbits. The ==first Booker winner set in space==, and the second-shortest winner ever. Announced 12 November 2024; chair Edmund de Waal. The 19th woman to win"],
      ["2023: Paul Lynch, Prophet Song","==Irish==. A mother of four in Dublin as the country slides into tyranny and her husband, a trade unionist, is taken by a new secret police. The fifth Irish winner, after Iris Murdoch, John Banville, Roddy Doyle and Anne Enright. Announced 26 November 2023; chair Esi Edugyan"],
      ["2022: Shehan Karunatilaka, The Seven Moons of Maali Almeida","==Sri Lankan==. A war photographer wakes up dead in 1990, in the middle of the civil war, with seven moons to find out who killed him. The second Sri Lankan-born winner after Michael Ondaatje (The English Patient, 1992). Announced 17 October 2022; chair Neil MacGregor"]
     ]},
    {h:"The International Booker, 2022 to 2026",
     note:"For fiction translated into English. £50,000, split equally between author and translator.",
     rows:[
      ["2026: Yang Shuang-zi, Taiwan Travelogue","Translated from ==Mandarin== by Lin King. A novel framed as a rediscovered travel memoir from 1930s Japanese-ruled Taiwan. The ==first winner from Mandarin Chinese==. Announced 19 May 2026"],
      ["2025: Banu Mushtaq, Heart Lamp","Translated from ==Kannada== by ==Deepa Bhasthi==. Twelve stories of women's lives in Karnataka. The first Kannada book, the ==first short-story collection==, and Bhasthi the first Indian translator to win"],
      ["2024: Jenny Erpenbeck, Kairos","Translated from ==German== by Michael Hofmann. A love affair in East Berlin in the years before the Wall fell. The first German-language writer to win, and Hofmann the first male translator to win"],
      ["2023: Georgi Gospodinov, Time Shelter","Translated from ==Bulgarian== by Angela Rodel. Clinics that recreate past decades for people losing their memory. The first Bulgarian winner"],
      ["2022: Geetanjali Shree, Tomb of Sand","Translated from ==Hindi== (Ret Samadhi) by ==Daisy Rockwell==. An eighty-year-old widow who travels to Pakistan to face the Partition she survived. The ==first winner from any Indian language=="]
     ]},
    {h:"The prize itself",
     rows:[
      ["Founded","==1969==. The first winner was P.H. Newby, Something to Answer For"],
      ["Prize","==£50,000==; each shortlisted author also receives £2,500"],
      ["Who can win","A novel written in English and published in the UK or Ireland. Until 2014 only writers from the Commonwealth, Ireland and Zimbabwe were eligible; since then, any nationality"],
      ["The names","The Booker Prize (1969-2001); the Man Booker Prize (2002-2019, sponsored by the Man Group); the Booker Prize again since 2019, funded by Crankstart"],
      ["The International Booker","Began in 2005 as a prize every two years for a writer's whole body of work; since 2016, an annual prize for one translated book"],
      ["Two-time winners","J.M. Coetzee (1983, 1999), Peter Carey (1988, 2001), Hilary Mantel (2009, 2012) and Margaret Atwood (2000, and 2019 jointly with Bernardine Evaristo)"],
      ["The winners of winners","Midnight's Children won the Booker of Bookers (1993) and the Best of the Booker (2008); The English Patient won the Golden Man Booker (2018)"]
     ]},
    {h:"The Indian connection",
     rows:[
      ["1971: V.S. Naipaul, In a Free State","Trinidad-born, of Indian descent"],
      ["1981: Salman Rushdie, Midnight's Children","Born in Bombay"],
      ["1997: Arundhati Roy, The God of Small Things","The first Indian woman to win; her debut novel"],
      ["2006: Kiran Desai, The Inheritance of Loss","Then the youngest woman to win. Her mother, Anita Desai, was shortlisted three times and never won. Kiran Desai was shortlisted again in 2025 for The Loneliness of Sonia and Sunny"],
      ["2008: Aravind Adiga, The White Tiger","A debut novel"],
      ["International Booker","Geetanjali Shree (2022, Hindi) and Banu Mushtaq (2025, Kannada)"]
     ]},
    {h:"The Booker 2026: the shortlist",
     note:"Announced 22 September 2026 from 163 submissions and a longlist of 13. Chair of judges: Mary Beard. The winner is due on 9 November 2026, so this row will change.",
     rows:[
      ["Black Bag","Luke Kennard"],
      ["The Disappearers","Marlon James, who won in 2015 with A Brief History of Seven Killings"],
      ["The End of Everything","M. John Harrison, who would be the oldest winner"],
      ["May We Feed the King","Rebecca Perry"],
      ["John of John","Douglas Stuart, who won in 2020 with Shuggie Bain"],
      ["The Things We Never Say","Elizabeth Strout"]
     ]}
   ],
   cmp:[
    {k:"Booker or International Booker",
     rows:[
      ["The Booker Prize","A novel ==written in English==. The money goes to the author. Autumn: 2025 David Szalay"],
      ["The International Booker","A book ==translated into English==. The money is ==split with the translator==. Spring: 2025 Banu Mushtaq"]],
     note:"If the question names a translator, it is the International Booker. Geetanjali Shree and Banu Mushtaq won the International, not the Booker."},
    {k:"Kiran Desai or Anita Desai",
     rows:[
      ["Kiran Desai","==Won== in 2006, The Inheritance of Loss; shortlisted again in 2025"],
      ["Anita Desai","Her mother: ==shortlisted three times==, never won"]]}
   ]},

  /* --------------------------------------------------------- recap part */
  {id:"books", tag:"Static GK \u00b7 books", h:"Books and authors", from:"gk.books",
   w:"The autobiographies, the books of the national movement, the pen names, and the prizes with their latest winners: Anne Carson took the Nobel two days before this set, and R. Vairamuthu the 60th Jnanpith.",
   links:[["#/gk/pack/books","Every book and author"],["#/gk/pack/awards","Awards and honours"]]},

  /* ---------------------------------------------------------- full part */
  {id:"cups-now", tag:"Current affairs · sports", h:"Who holds the cup now",
   w:"The latest winner of every cup SSC asks about, as of 10 October 2026. Which cup belongs to which sport is in Static GK; who won it this year is here.",
   notes:[
    "==India== won the ==T20 World Cup 2026==, beating ==New Zealand== by 96 runs at Ahmedabad on 8 March 2026: the ==first side with three titles== and the first to defend it.",
    "==India women== won their ==first ODI World Cup== in ==2025==, beating South Africa at Navi Mumbai.",
    "==India== won the ==Champions Trophy 2025== (beat New Zealand, Dubai) and the ==Asia Cup 2025== (beat Pakistan, Dubai; a ninth title).",
    "==South Africa== won the ==World Test Championship== final in 2025, against Australia at Lord's.",
    "==RCB== won the ==IPL== in ==2025 and 2026==.",
    "==Spain== won the ==FIFA World Cup 2026==: 1-0 against Argentina after extra time, New Jersey, 19 July 2026.",
    "Hockey World Cup 2026: ==Germany== (men, 1-0 against Spain) and ==Argentina== (women, on penalties against the Netherlands).",
    "==East Bengal== won the ==Durand Cup 2026==: their 17th, level with Mohun Bagan.",
    "Thomas Cup 2026 ==China==; Uber Cup 2026 ==South Korea==; Davis Cup 2025 ==Italy== (third in a row).",
    "Asian Games 2026, Aichi-Nagoya: India ==fourth==, ==85 medals== (21 gold). Commonwealth Games 2026, Glasgow: India ==fourth==, ==39 medals== (13 gold).",
    "Chess: ==Divya Deshmukh== won the Women's World Cup 2025; ==Javokhir Sindarov== won the World Cup in ==Goa==, 2025."
   ],
   blocks:[
    {h:"Cricket",
     rows:[
      ["ICC Men's T20 World Cup 2026","==India==, beat New Zealand by 96 runs, Narendra Modi Stadium, Ahmedabad, 8 March 2026. Captain Suryakumar Yadav. India's third title (2007, 2024, 2026). Co-hosted by India and Sri Lanka"],
      ["ICC Women's T20 World Cup 2026","==Australia==, beat England by seven wickets at Lord's, 5 July 2026: their seventh title"],
      ["ICC Champions Trophy 2025","==India==, beat New Zealand by four wickets, Dubai, 9 March 2025. Unbeaten through the tournament; Rohit Sharma player of the final"],
      ["ICC Women's Cricket World Cup 2025","==India==, beat South Africa by 52 runs at the DY Patil Stadium, Navi Mumbai, 2 November 2025. Captain Harmanpreet Kaur; India's first title"],
      ["World Test Championship 2023-25","==South Africa==, beat Australia by five wickets at Lord's, June 2025. Aiden Markram 136; South Africa's first ICC title since 1998"],
      ["Asia Cup 2025","==India==, beat Pakistan by five wickets, Dubai, 28 September 2025. A T20 tournament; India's ninth title"],
      ["IPL 2026","==Royal Challengers Bengaluru==, beat Gujarat Titans, Ahmedabad, 31 May 2026. Back-to-back titles after their first in 2025"],
      ["Anderson-Tendulkar Trophy 2025","India's Test tour of England, the first for this trophy: ==drawn 2-2=="]
     ]},
    {h:"Football and hockey",
     rows:[
      ["FIFA World Cup 2026","==Spain==, beat Argentina 1-0 after extra time, MetLife Stadium, New Jersey, 19 July 2026. Spain's second title (2010). The first 48-team World Cup, co-hosted by the USA, Canada and Mexico"],
      ["Durand Cup 2026","==East Bengal==, beat Mohun Bagan Super Giant 4-1, Kolkata, 23 August 2026. The 135th edition"],
      ["FIH Men's Hockey World Cup 2026","==Germany==, beat Spain 1-0, Wavre, Belgium, 30 August 2026. Germany's fourth title, level with Pakistan"],
      ["FIH Women's Hockey World Cup 2026","==Argentina==, beat the Netherlands on penalties after 1-1, Amstelveen, 29 August 2026"],
      ["Men's Hockey Asia Cup 2025","==India==, at Rajgir, Bihar. The win qualified India for the 2026 World Cup"]
     ]},
    {h:"Badminton, tennis and chess",
     rows:[
      ["Thomas Cup 2026","==China==, beat France 3-1 at Horsens, Denmark, 3 May 2026: China's 12th title, and France's first final"],
      ["Uber Cup 2026","==South Korea==, beat China 3-1 at Horsens: Korea's third title"],
      ["Davis Cup 2025","==Italy==, beat Spain in Bologna, November 2025: a third title in a row"],
      ["FIDE World Cup 2025","==Javokhir Sindarov== (Uzbekistan), at 19 the youngest winner, in ==Goa=="],
      ["FIDE Women's World Cup 2025","==Divya Deshmukh==, beating Koneru Humpy in an all-Indian final at Batumi, Georgia. She became a Grandmaster by winning it"],
      ["World Chess Champion","==D. Gukesh==, who won the title in Singapore in December 2024"]
     ]},
    {h:"The multi-sport games",
     rows:[
      ["Asian Games 2026, Aichi-Nagoya","19 September to 4 October 2026. India ==fourth==, with ==85 medals==: 21 gold, 27 silver, 37 bronze"],
      ["Commonwealth Games 2026, Glasgow","23 July to 2 August 2026. India ==fourth==, with ==39 medals==: 13 gold, 17 silver, 9 bronze"],
      ["Next","Commonwealth Games 2030 in ==Ahmedabad==, the centenary Games; Asian Games 2030 in Doha; Olympics 2028 in Los Angeles"]
     ]}
   ]},

  /* --------------------------------------------------------- recap parts */
  {id:"olympics", tag:"Static GK \u00b7 sports", h:"Paris 2024", from:"gk.paris-2024",
   w:"India's six Olympic medals and six fourth places, Vinesh Phogat's disqualification, the Games' firsts, and the record 29 Paralympic medals.",
   links:[["#/gk/pack/paris-2024","Paris 2024 in full"],["#/gk/pack/sports","India's earlier Olympic milestones"]]},

  {id:"orgs", tag:"Static GK \u00b7 world", h:"International organisations", from:"gk.orgs",
   w:"The UN and its organs, every specialised agency with its headquarters and year, the groupings India is and is not in, and who heads what.",
   links:[["#/gk/pack/orgs","International organisations in full"],["#/gk/pack/hq","The one-line headquarters list"]]},

  {id:"reforms", tag:"Indian Economy", h:"The 1991 reforms", from:"econ.reform",
   w:"The crisis, the gold, the devaluation, 24 July 1991, and the committees. The full page now carries the dates in order and the words the questions use.",
   links:[["#/economy/reforms","The 1991 reforms in full"]]},

  {id:"plans", tag:"Indian Economy", h:"The Five Year Plans", from:"econ.plans",
   w:"All fifteen, now with SSC notes on every plan, a one-line-each table, and which scheme fell in which plan.",
   links:[["#/economy","All the plans, with the at-a-glance table"],["#/economy/plan/first","Start with the First Plan"]]},

  {id:"cups", tag:"Static GK", h:"Sports and their cups", from:"gk.cups",
   w:"Every cup filed under its sport, with when it began and who it is named after.",
   links:[["#/gk/pack/cups","Every cup, sport by sport"],["#/gk/pack/sports","Players, terms and Olympic milestones"]]},

  {id:"jain", tag:"Ancient History", h:"Jainism and the Jain councils", from:"early.jainism",
   w:"The two councils, Mahavira's three places and a river, the two sects, and the councils they get confused with.",
   links:[["#/early/topic/jainism","The full page"],["#/early/confusions","Jain or Buddhist council?"]]},

  {id:"isro", tag:"Static GK", h:"ISRO's space missions", from:"gk.isro",
   w:"Every mission in order from 1963, the centres, the rockets and what is coming. World Space Week ends today.",
   links:[["#/gk/pack/isro","Every mission, in order"],["#/gk/pack/space","Nuclear programme and defence"]]},

  {id:"mughals", tag:"Medieval History", h:"The Mughals", from:"early.mughals",
   w:"Babur to Bahadur Shah Zafar, with a page for each great Mughal and topic pages for the battles, the administration, the buildings and the books.",
   links:[["#/early/mughals","The emperors"],["#/early/topic/mughal-battles","Battles"],
          ["#/early/topic/mughal-admin","Administration"],["#/early/topic/mughal-architecture","Architecture"],
          ["#/early/topic/mughal-books","Books and travellers"]]}
 ]}

]

};
