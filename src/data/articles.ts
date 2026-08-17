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
    title: "Onze Nieuwe Website is Live: Sneller, Toegankelijker en Volledig Vernieuwd door BitbloX",
    excerpt: "Met trots presenteren wij de geheel vernieuwde website van Massage Studio Eelde. Ontwikkeld door BitbloX Webdesign met focus op ultieme snelheid, modern design, toegankelijkheid (A11y) en een optimale mobiele ervaring.",
    category: "Praktijknieuws",
    date: "17 augustus 2026",
    readTime: "3 min leestijd",
    image: "/images/DSC_1480.jpg",
    author: {
      name: "Alianne Zuidhof-Hoiting",
      role: "BATC Complementair Therapeut",
      avatar: "/images/Alianne.webp"
    },
    summaryPoints: [
      { term: "Volledig Vernieuwd", description: "Een modern, rustgevend en overzichtelijk design dat perfect aansluit bij onze holistische wellnesspraktijk in Eelde." },
      { term: "Ontwikkeld door BitbloX", description: "Gerealiseerd door <a href='https://bitblox.nl' target='_blank' rel='noopener noreferrer' style='color: #9d467e; font-weight: 700; text-decoration: underline;'>BitbloX Webdesign</a> op basis van de nieuwste Astro & Cloudflare Pages technologie." },
      { term: "Toegankelijkheid (A11y)", description: "Voorzien van slimme opties voor hoog contrast, tekstvergroting en een wetenschappelijk onderbouwd dyslexie-lettertype." },
      { term: "Eenvoudig Contact", description: "Direct afspraken maken en vragen stellen via WhatsApp, e-mail of het handige terugbelverzoek." }
    ],
    content: [
      {
        heading: "Een frisse digitale start voor Massage Studio Eelde",
        paragraphs: [
          "In de afgelopen jaren is Massage Studio Eelde uitgegroeid tot een vertrouwde plek voor therapeutische behandelingen, ontspanning en natuurlijk herstel. Om onze cliënten online dezelfde rust, helderheid en persoonlijke aandacht te bieden als in de praktijk, was het tijd voor een complete metamorfose van onze website.",
          "Met trots presenteren we vandaag ons nieuwe digitale thuis! De website is van de grond af aan opnieuw ontworpen en gebouwd om u nog beter te informeren over onze behandelvormen zoals Shiatsu, de Dorn-methode, Voetreflexologie, Littekenbehandeling en de 5 natuurgerichte principes van de BATC."
        ]
      },
      {
        heading: "Ontwikkeld in samenwerking met BitbloX Webdesign",
        paragraphs: [
          "Voor het ontwerp en de technische realisatie hebben we gekozen voor de expertise van <a href=\"https://bitblox.nl\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #9d467e; font-weight: 700; text-decoration: underline;\">BitbloX Webdesign</a>. Het team van BitbloX is gespecialiseerd in het bouwen van ultrasnelle, veilige en toekomstbestendige websites op het moderne Astro-framework en Cloudflare netwerk.",
          "Dankzij deze samenwerking laadt de website razendsnel op zowel smartphones, tablets als computers. Pagina's openen zonder enige vertraging, wat zorgt voor een ontspannen en soepele gebruikerservaring. Daarnaast is de website geoptimaliseerd voor lokale vindbaarheid (GEO en SEO) in de regio Eelde, Paterswolde, Haren, Groningen en Noord-Drenthe."
        ]
      },
      {
        heading: "Innovatieve functies voor optimaal gebruiksgemak",
        paragraphs: [
          "Bij het ontwikkelen van de nieuwe website stonden gebruiksgemak en toegankelijkheid centraal. Enkele highlights die u direct kunt uitproberen:",
          "• Toegankelijkheidstoolbar (A11y): Linksonder vindt u een handig menu waarmee u de tekst kunt vergroten, hoog contrast kunt inschakelen of kunt schakelen naar een wetenschappelijk dyslexie-vriendelijk lettertype.\n• Direct contact via WhatsApp: Met één klik op de knop start u een WhatsApp-gesprek voor het plannen van een afspraak of het stellen van een vraag.\n• Uitgebreide Kennisbank: In onze nieuwe blogsectie delen we regelmatig waardevolle artikelen over gezondheid, zelfhelend vermogen en natuurlijke therapieën.\n• Duidelijke vergoedingen en tarieven: In één oogopslag ziet u welke natuurgeneeskundige consulten in aanmerking komen voor vergoeding via uw aanvullende zorgverzekering.",
          "We nodigen u van harte uit om op uw gemak rond te kijken op onze nieuwe website. Heeft u vragen, opmerkingen of wilt u een afspraak maken? Neem gerust contact met ons op!"
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
