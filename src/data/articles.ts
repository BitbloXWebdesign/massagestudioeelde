export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  summaryPoints: {
    term: string;
    description: string;
  }[];
  content: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const articles: Article[] = [
  {
    slug: "nieuwe-website-live-massagestudio-eelde-bitblox",
    title: "Welkom op Onze Nieuwe Website: Meer Rust, Overzicht en Gemak voor U",
    excerpt: "Met veel plezier heet ik u welkom op de vernieuwde website van Massage Studio Eelde. Samen met BitbloX Webdesign hebben we een rustige, heldere plek gecreëerd waar u eenvoudig alle behandelingen, vergoedingen en afspraken kunt vinden.",
    category: "Praktijknieuws",
    date: "17 augustus 2026",
    readTime: "3 min leestijd",
    image: "/images/nieuwe-website-massagestudioeelde.png",
    author: {
      name: "Alianne Zuidhof-Hoiting",
      role: "BATC Complementair Therapeut",
      avatar: "/images/Alianne.webp"
    },
    summaryPoints: [
      { term: "Rust & Eenvoud", description: "Een overzichtelijke website waar u snel en helder de juiste informatie over behandelingen en vergoedingen vindt." },
      { term: "Fijne Hulpmiddelen", description: "Pas de lettergrootte eenvoudig aan, kies voor extra hoog contrast of schakel een speciaal dyslexie-vriendelijk lettertype in." },
      { term: "Persoonlijk Contact", description: "Met één klik direct een WhatsApp-bericht sturen of een terugbelverzoek achterlaten." },
      { term: "Dank aan BitbloX", description: "Met zorg en vakkennis gerealiseerd door <a href='https://bitblox.nl' target='_blank' rel='noopener noreferrer' style='color: #9d467e; font-weight: 700; text-decoration: underline;'>BitbloX Webdesign</a>." }
    ],
    content: [
      {
        heading: "Een warme en overzichtelijke plek voor u",
        paragraphs: [
          "In mijn praktijk in het voormalig kerkje in Eelde staat persoonlijke aandacht, rust en zorgzame begeleiding altijd op de eerste plaats. Ik wilde heel graag dat u ditzelfde vertrouwde gevoel ook ervaart wanneer u mijn website bezoekt.",
          "De website was toe aan een fijne vernieuwing. We hebben gekeken naar wat voor ú als bezoeker echt belangrijk is: duidelijke uitleg over de behandelingen, helderheid over welke consulten vergoed worden door uw zorgverzekering, en vooral het gemak om snel en eenvoudig contact op te nemen."
        ]
      },
      {
        heading: "Handige nieuwe mogelijkheden op de website",
        paragraphs: [
          "Om uw bezoek zo prettig en gemakkelijk mogelijk te maken, zijn er een aantal fijne verbeteringen doorgevoerd:",
          "• Direct contact via WhatsApp: Heeft u een vraag over een behandeling of wilt u een afspraak plannen? U kunt mij nu met één simpele klik direct een WhatsApp-berichtje sturen.\n• Handig terugbelverzoek: Bent u onderweg of belt u liever op een rustig moment? Laat uw naam en nummer achter via de knop 'Bel mij terug' en ik neem persoonlijk contact met u op.\n• Prettig leesbaar voor iedereen: Linksonder in beeld vindt u een handig hulpmiddel (het ronde icoontje). Hiermee kunt u met één klik de lettergrootte aanpassen, de pagina extra contrastrijk maken of kiezen voor een speciaal rustig lettertype dat heel fijn leest bij dyslexie.\n• Alles over de 5 Natuurgerichte Principes & Vergoedingen: U leest precies hoe Shiatsu, Voetreflexologie, de Dorn-methode en Littekenbehandeling werken en hoe deze deels vergoed worden vanuit uw aanvullende verzekering."
        ]
      },
      {
        heading: "Met dank aan BitbloX Webdesign",
        paragraphs: [
          "Ik ben zelf vooral bezig met het welzijn en de gezondheid van mijn cliënten en niet met computers of techniek. Daarom ben ik enorm blij met de fijne hulp van <a href=\"https://bitblox.nl\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #9d467e; font-weight: 700; text-decoration: underline;\">BitbloX Webdesign</a>.",
          "Zij hebben ervoor gezorgd dat alles heel eenvoudig, overzichtelijk en soepel werkt op zowel uw mobiele telefoon, tablet als computer. Zo kan ik mij blijven focussen op wat ik het allerliefste doe: u helpen ontspannen en herstellen in de praktijk.",
          "Ik nodig u van harte uit om rustig een kijkje te nemen op de pagina's. Heeft u een vraag of wilt u langskomen voor een behandeling? Mijn deur staat altijd voor u open!"
        ]
      }
    ]
  },
  {
    slug: "shiatsu-en-de-5-natuurgerichte-principes",
    title: "Shiatsu en de 5 Natuurgerichte Principes: Hoe energie en aanraking uw herstel activeren",
    excerpt: "Ontdek hoe Japanse drukpuntmassage (Shiatsu) en de holistische BATC 5 principes samenwerken om chronische stress, spierspanning en vermoeidheid bij de bron aan te pakken.",
    category: "Natuurgeneeskunde",
    date: "12 augustus 2026",
    readTime: "4 min leestijd",
    image: "/images/DSC_1450.jpg",
    author: {
      name: "Alianne Zuidhof-Hoiting",
      role: "BATC Complementair Therapeut",
      avatar: "/images/Alianne.webp"
    },
    summaryPoints: [
      { term: "Energetische Balans", description: "Shiatsu heft blokkades op in de meridianen en stimuleert de vitale levensenergie (Qi)." },
      { term: "Fundament van BATC", description: "Vormt het eerste principe (Energie) dat noodzakelijk is voordat prikkeloverdracht en drainage optimaal functioneren." },
      { term: "Brede Indicaties", description: "Bewezen effectief bij hoofdpijn, burn-out, rug-/nekklachten en slapeloosheid." },
      { term: "Vergoeding", description: "Individuele therapeutische consulten zijn deels vergoedbaar via de aanvullende zorgverzekering." }
    ],
    content: [
      {
        heading: "Wat is Shiatsu en hoe werkt het?",
        paragraphs: [
          "Shiatsu is een traditionele Japanse geneeswijze die letterlijk vertaald wordt als 'vingerdruk'. Het combineert de oosterse kennis van acupunctuur en het meridiaanstelsel met westerse anatomie en fysiologie. In plaats van naalden gebruikt de therapeut duimen, handpalmen en vingers om gedoseerde, ritmische druk uit te oefenen op specifieke punten van het lichaam.",
          "Volgens de oosterse filosofie stroomt levensenergie (Ki of Qi) door een netwerk van kanalen die meridianen worden genoemd. Wanneer deze energiestroom stagneert door stress, fysieke overbelasting, slechte voeding of emotionele spanningen, ontstaan er klachten zoals stijfheid, hoofdpijn, vermoeidheid of pijn. Shiatsu heft deze blokkades zacht en doeltreffend op."
        ]
      },
      {
        heading: "De link met de 5 Natuurgerichte Principes",
        paragraphs: [
          "Als erkend BATC Complementair Therapeut werk ik vanuit de 5 natuurgerichte principes: 1. Energie, 2. Prikkeloverdracht, 3. Drainage, 4. Voeding en 5. Geestelijk welzijn. Shiatsu speelt met name bij het eerste principe – Energie – een sleutelrol.",
          "Zonder voldoende energie en een vrije doorstroming kan het lichaam zichzelf niet herstellen. Pas wanneer het energieniveau op peil is, kan het zenuwstelsel prikkels juist overdragen (Principe 2) en kunnen de organen afvalstoffen efficiënt afvoeren (Principe 3). Daarom starten we in onze praktijk in Eelde altijd met het harmoniseren van de energiehuishouding."
        ]
      },
      {
        heading: "Voor wie is Shiatsu therapie geschikt?",
        paragraphs: [
          "Shiatsu is geschikt voor vrijwel iedereen die zoekt naar diepe rust of verlichting bij langdurige klachten. Veel geziene indicaties in onze praktijk zijn:",
          "• Chronische nek-, schouder- en rugpijn\n• Spanningshoofdpijn en migraine\n• Vermoeidheid, rusteloosheid en burn-out klachten\n• Spijsverteringsproblemen en maagklachten\n• Ondersteuning bij herstel na een intensief medisch traject",
          "Omdat Shiatsu over de kleding heen wordt gegeven op een comfortabele massagetafel, is de drempel laag en voelt de behandeling vanaf de eerste minuut veilig en rustgevend aan."
        ]
      }
    ]
  },
  {
    slug: "dorn-methode-rug-en-bekkenklachten-zonder-kraken",
    title: "De Dorn-Methode: Zachte correctie van rug- en bekkenklachten zonder forceren of kraken",
    excerpt: "Waarom dynamische beweging veiliger en effectiever is bij bekkenscheefstand, beenlengteverschil en wervelverschuivingen dan forceren of hard kraken.",
    category: "Lichaamscorrectie",
    date: "14 augustus 2026",
    readTime: "5 min leestijd",
    image: "/images/DSC_1502.1.jpg",
    author: {
      name: "Alianne Zuidhof-Hoiting",
      role: "BATC Complementair Therapeut",
      avatar: "/images/Alianne.webp"
    },
    summaryPoints: [
      { term: "Dynamische Correctie", description: "Correctie van gewrichten en wervels vindt altijd plaats tijdens een natuurlijke been- of armzwaai." },
      { term: "Veilig & Pijnloos", description: "Geen harde manipulaties of kraken; spieren spannen zich niet reflexmatig aan." },
      { term: "Beenlengte & Bekken", description: "Herstelt het fundament van het lichaam, waardoor opwaartse wervelkolomcompensaties verdwijnen." },
      { term: "Zelfhulpoefeningen", description: "Cliënten krijgen eenvoudige dagelijkse oefeningen mee om het resultaat langdurig te borgen." }
    ],
    content: [
      {
        heading: "Het fundament van uw wervelkolom: Het bekken",
        paragraphs: [
          "Veel mensen lopen rond met rugpijn, nekklachten of uitstralende pijn naar het been (ischias) zonder te weten dat de werkelijke oorzaak in hun bekken of benen ligt. Ons bekken fungeert als het fundament van een huis: wanneer het fundament scheef staat, moet de rest van het bouwwerk (de wervelkolom) continu compenseren om het hoofd rechtop te houden.",
          "Een bekkenscheefstand ontstaat verrassend vaak door een functioneel beenlengteverschil. Dit wordt meestal niet veroorzaakt door een anatomisch korter bot, maar doordat de heupkop door veelvuldig met de benen over elkaar zitten of eenzijdige belasting iets uit de heupkom is geschoven."
        ]
      },
      {
        heading: "Waarom de Dorn-methode niet kraakt",
        paragraphs: [
          "Traditionele manuele therapie maakt soms gebruik van snelle hefboomtechnieken ('kraken'). Hoewel dit tijdelijk verlichting kan bieden, kan het ook leiden tot reflexmatige spierspanning of overrekking van de gewrichtsbanden.",
          "De Dorn-methode pakt dit fundamenteel anders aan. De correctie vindt altijd plaats terwijl de cliënt een milde, natuurlijke pendelbeweging maakt met het been of de arm. Doordat de spieren in beweging zijn, zijn ze afgeleid en ontspannen. Met zachte duimdruk op de doornuitsteeksels of het heupgewricht schuift het gewricht moeiteloos terug op zijn anatomisch ideale plek."
        ]
      },
      {
        heading: "Duurzaam resultaat met zelfhulp",
        paragraphs: [
          "Een van de krachtigste aspecten van de Dorn-methode is dat u na de behandeling niet afhankelijk blijft van de therapeut. U leert eenvoudige, 1-minuut durende oefeningen die u thuis kunt doen om uw heupgewrichten en bekken stabiel te houden.",
          "In combinatie met Shiatsu of ontspannende massagetherapie vormt dit een complete en duurzame oplossing voor hardnekkige rug- en gewrichtsklachten."
        ]
      }
    ]
  },
  {
    slug: "voetreflexologie-en-drainage-natuurlijke-ontgifting",
    title: "Voetreflexologie en Drainage: Het geheim achter natuurlijke ontgifting en vitaliteit",
    excerpt: "Hoe gerichte reflexzonemassage op de voetzolen uw lymfestelsel, nieren en lever activeert om opgestapelde afvalstoffen effectief af te voeren.",
    category: "Ontspanning & Detox",
    date: "15 augustus 2026",
    readTime: "4 min leestijd",
    image: "/images/DSC_1465.jpg",
    author: {
      name: "Alianne Zuidhof-Hoiting",
      role: "BATC Complementair Therapeut",
      avatar: "/images/Alianne.webp"
    },
    summaryPoints: [
      { term: "Reflexzones", description: "Elke zone op de voet correspondeert via zenuw- en energiebanen met organen en klieren." },
      { term: "Principe 3: Drainage", description: "Ondersteunt lever, nieren, darmen en lymfestelsel bij het uitscheiden van toxines." },
      { term: "Diepe Rust", description: "Brengt het parasympathische zenuwstelsel in de 'rust & herstel'-modus." },
      { term: "Nazorg", description: "Voldoende water drinken na afloop is essentieel om vrijgekomen afvalstoffen uit te spoelen." }
    ],
    content: [
      {
        heading: "Uw voeten als spiegel van het hele lichaam",
        paragraphs: [
          "Op onze voeten bevinden zich duizenden zenuwuiteinden en fijnmazige reflexzones die in directe verbinding staan met alle organen, spieren, klieren en weefsels in het lichaam. Door met duimen en vingers specifieke druk- en massagetechnieken op deze zones toe te passen, ontstaat er een reflexmatige reactie in het corresponderende orgaan.",
          "Wanneer een orgaan of weefsel overbelast is, kan de bijbehorende reflexzone op de voet gevoelig of korrelig aanvoelen. Door deze zone zorgvuldig te behandelen, wordt de lokale doorbloeding en energiestroom hersteld."
        ]
      },
      {
        heading: "De cruciale rol van Drainage (BATC Principe 3)",
        paragraphs: [
          "In onze moderne maatschappij krijgt ons lichaam dagelijks te maken met talloze afvalstoffen: van milieuverontreiniging en bewerkte voeding tot melkzuur door stress en stagnerende lymfestromen.",
          "Normaal gesproken scheidt het lichaam deze toxines af via de uitscheidingsorganen (lever, nieren, darmen, huid en longen). Wanneer deze organen overbelast raken, stapelen afvalstoffen zich op in het bindweefsel. Voetreflextherapie activeert gericht de nieren, lever en het lymfesysteem, waardoor het lichaam weer krachtig kan reinigen en ontgiften."
        ]
      },
      {
        heading: "Wat merkt u na een behandeling?",
        paragraphs: [
          "Direct na een voetreflexsessie ervaren de meeste cliënten een weldadig gevoel van 'lichtheid', warme voeten en diepe innerlijke ontspanning. Omdat het ontgiftingsproces op gang komt, is het raadzaam om na de behandeling extra veel water of kruidenthee te drinken.",
          "Voetreflextherapie is een heerlijke en doeltreffende behandelvorm bij darmproblemen, hormonale schommelingen, vermoeidheid en chronische stressklachten."
        ]
      }
    ]
  }
];
