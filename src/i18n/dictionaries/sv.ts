import type { Dictionary } from "../types";

// Facts and prices are taken from kvadratkoll.se (fetched October 2026). The copy is rewritten for the redesign.
const sv: Dictionary = {
  meta: {
    title: "Kvadratkoll | Areamätare i Stockholm",
    description:
      "Diplomerade areamätare i Stockholm. Vi mäter lägenheter, hus och lokaler enligt SS 21054:2020 och levererar mätbevis, ofta samma dag.",
  },
  common: {
    skipToContent: "Hoppa till innehållet",
    homeLinkLabel: "Kvadratkoll, till startsidan",
    conceptNotice: "Designförslag för Kvadratkoll. Inte den publicerade webbplatsen.",
  },
  nav: {
    mainLabel: "Huvudmeny",
    mobileLabel: "Mobilmeny",
    openMenu: "Öppna meny",
    closeMenu: "Stäng meny",
    items: [
      { label: "Tjänster", section: "services" },
      { label: "Så går det till", section: "process" },
      { label: "Priser", section: "pricing" },
      { label: "Vanliga frågor", section: "faq" },
    ],
    cta: { label: "Boka mätning", section: "booking" },
  },
  hero: {
    eyebrow: "Areamätare i Stockholm",
    title: "Exakt area. Tydligt mätbevis.",
    description:
      "Vi mäter lägenheter, hus och lokaler enligt SS 21054:2020. Du får ett mätbevis att använda vid försäljning, köp eller uthyrning, ofta samma dag.",
    secondaryCta: { label: "Se priser", section: "pricing" },
    imageAlt: "Ljust skandinaviskt matrum med stora spröjsade fönster och fiskbensparkett",
    badgeAlt: "SIS Swedish Standards Institute, diplomerad areamätare",
    badgeCaption: "Diplomerade areamätare. Alla mätningar görs enligt SS 21054:2020.",
  },
  trust: {
    title: "Kvadratkoll i korthet",
    items: [
      { value: "7 000+", label: "utförda areamätningar", confirmed: true },
      { value: "SIS", label: "diplomerade areamätare", confirmed: true },
      { value: "SS 21054:2020", label: "aktuell svensk standard för areamätning", confirmed: true },
      { value: "Samma dag", label: "mätbevis som PDF i de flesta fall", confirmed: true },
    ],
    placeholderNote: "Uppgifterna är platshållare och ersätts med bekräftade siffror.",
  },
  services: {
    eyebrow: "Tjänster",
    title: "Mätning av bostäder och lokaler",
    description:
      "Främst i Stockholms närområde, och större uppdrag i hela Sverige. Många bostäder och lokaler har en angiven area som inte stämmer på grund av gamla uppgifter.",
    items: [
      {
        id: "residential",
        imageAlt: "Ljust vardagsrum med matbord och soffa i en lägenhet",
        title: "Bostäder",
        description:
          "Areamätning av lägenheter, hus och villor inför försäljning eller köp. De flesta bostäder jämförs på pris per kvadratmeter, så arean måste stämma.",
        features: [
          "Boarea (BOA) och biarea (BIA)",
          "Mätbevis enligt SS 21054:2020",
          "Bostadsrätter, hus och villor",
        ],
      },
      {
        id: "commercial",
        imageAlt: "Arbetsplats med skrivbord och lampa i en kontorslokal",
        title: "Lokaler",
        description:
          "Korrekta areauppgifter är till nytta för både hyresgäst och hyresvärd när hyran ska sättas.",
        features: [
          "Kontor, butiker och andra lokaler",
          "Underlag för hyressättning",
          "Offert för större objekt",
        ],
      },
      {
        id: "floor-plans",
        imageAlt: "Planritning i 3D ovanpå ritningar med måttsättning",
        title: "Planritningar",
        description:
          "Nya skalenliga planritningar framtagna med lasermätare och AutoCAD, till exempel när gamla ritningar inte längre stämmer eller inför en bygganmälan.",
        features: [
          "Skalenliga planritningar och relationsritningar",
          "PDF per mejl och utskrift i A4 per post",
          "Pris enligt offert",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Så går det till",
    title: "Från bokning till mätbevis",
    description:
      "Ingen förberedelse krävs. Möbler och inredning är sällan i vägen och kan flyttas när vi är på plats.",
    steps: [
      {
        title: "Boka mätning",
        description:
          "Mejla eller ring. Mätningen kan ofta göras samma dag eller dagen därpå, och vi är flexibla med tider.",
      },
      {
        title: "Mätning på plats",
        description:
          "Vi mäter med lasermätare och ritar in alla mått i CAD. Det tar 20 minuter till 2 timmar. Du behöver inte vara där, vi kan hämta nycklar.",
      },
      {
        title: "Areaberäkning",
        description: "På kontoret görs den slutliga areaberäkningen utifrån CAD-skissen.",
      },
      {
        title: "Mätbevis",
        description:
          "Resultatet lämnas muntligt och som PDF, oftast samma dag. Originalet skickas med posten och betalning sker via faktura.",
      },
    ],
  },
  why: {
    eyebrow: "Varför Kvadratkoll",
    title: "Ett mätbevis du kan lita på",
    description:
      "Vid en försäljning är säljaren personligt ansvarig för areauppgiften. Utan mätbevis från en diplomerad areamätare är uppgiften opålitlig.",
    imageAlt: "Leica DISTO D8 lasermätare i handen som visar ett uppmätt avstånd",
    items: [
      {
        icon: "certified",
        title: "Diplomerade av SIS",
        description:
          "SIS har utfärdat standarden för hur bostäder mäts och diplomerar areamätare efter ett kunskapsprov.",
      },
      {
        icon: "precision",
        title: "Laser och CAD",
        description:
          "Alla mått tas med lasermätare och ritas in i CAD-program för högsta möjliga noggrannhet.",
      },
      {
        icon: "document",
        title: "Juridiskt mätbevis",
        description:
          "Mätbeviset kan användas vid försäljning och gäller tills SIS utfärdar en ny standard.",
      },
      {
        icon: "booking",
        title: "Flexibla tider",
        description:
          "Mätning sker ofta samma dag eller dagen därpå. Har du ont om tid ringer eller sms:ar du oss.",
      },
    ],
  },
  example: {
    eyebrow: "Mätbevis",
    title: "Vad mätbeviset visar",
    description:
      "Mätbeviset redovisar objektets area och hur den fördelar sig mellan boarea och biarea. Illustrationen visar formatet.",
    includesTitle: "Mätbeviset innehåller",
    includes: [
      "Objekt, adress och beställare",
      "Fastighetsbeteckning eller lägenhetsnummer",
      "Vilken standard som använts och hur mätningen utförts",
      "Objektets storlek och fördelning av boarea och biarea",
    ],
    summaryTitle: "Summering",
    livingArea: "Boarea (BOA)",
    secondaryArea: "Biarea (BIA)",
    figureLabel: "Exempel på planritning av en lägenhet med area per rum",
    figureCaption: "Illustrativt exempel. Måtten är påhittade och visar endast formatet.",
    rooms: {
      living: "Vardagsrum",
      kitchen: "Kök",
      bedroom: "Sovrum",
      hall: "Hall",
      bathroom: "Badrum",
      storage: "Förråd",
    },
  },
  pricing: {
    eyebrow: "Priser",
    title: "Fasta priser efter storlek",
    description: "Alla priser är inklusive moms och baseras på objektets totalarea.",
    areaColumn: "Totalarea",
    priceColumn: "Pris inkl. moms",
    onRequest: "Offert",
    byAgreement: "Enligt överenskommelse",
    surchargesTitle: "Tillägg",
    tables: {
      apartment: { title: "Lägenhet eller lokal", scope: "Stockholms innerstad" },
      house: { title: "Hus eller villa", scope: "Närförort" },
    },
    surcharges: {
      "inner-suburb": "Resetillägg närförort (utanför tullarna)",
      "outer-suburb-apartment": "Resetillägg ytterförort",
      "sloped-ceiling": "Lägenhet med snedtak eller i etage",
      cancellation: "Avbokning inom 24 timmar eller utebliven närvaro",
      outbuilding: "Komplementbyggnad upp till 25 m², per byggnad",
      "outer-suburb-house": "Resetillägg ytterförort",
      express: "Expresstillägg vid mycket brådskande ärenden",
    },
    notes: [
      "Betalning sker via faktura efter slutfört uppdrag.",
      "Kostnaden för en areamätning är avdragsgill i reavinstberäkningen vid försäljning av bostadsrätt eller villa.",
      "För större objekt, hela föreningar eller flera lägenheter vid samma tillfälle lämnar vi offert.",
      "Ritningar och relationsritningar prissätts via separat offert.",
    ],
  },
  faq: {
    eyebrow: "Vanliga frågor",
    title: "Bra att veta",
    description: "Hittar du inte svaret? Mejla eller ring oss.",
    items: [
      {
        question: "Varför bör man mäta sin bostad eller lokal?",
        answer:
          "Bostäder jämförs ofta på kvadratmeterpris, så varje kvadratmeter är värd mycket. Tidigare areauppgifter stämmer ofta inte: ombyggnader, inredda vindar och tillbyggnader kan ha tillkommit, och mätreglerna har ändrats över tid. En korrekt area minskar risken för tvister vid ägarbyten.",
      },
      {
        question: "Vad är ett mätbevis?",
        answer:
          "Ett juridiskt dokument som visar objekt, adress, beställare, fastighetsbeteckning eller lägenhetsnummer, vilken standard som använts, hur mätningen gjorts samt storlek och fördelning av boarea och biarea. Det kan användas vid försäljning och gäller tills SIS utfärdar en ny standard.",
      },
      {
        question: "Vilken standard mäter ni efter?",
        answer:
          "Svensk Standard SS 21054:2020, fastställd av SIS. Samma regler används av bland andra Skatteverket, Konsumentverket, Boverket, Hyresgästföreningen och Mäklarsamfundet.",
      },
      {
        question: "Hur lång tid tar en mätning?",
        answer:
          "Från 20 minuter upp till 2 timmar, beroende på objektets storlek och utformning.",
      },
      {
        question: "Behöver jag förbereda något eller vara på plats?",
        answer:
          "Nej. Ingen förberedelse krävs och möbler är sällan i vägen. Har du svårt att vara på plats kan vi hämta nycklar.",
      },
      {
        question: "När får jag resultatet?",
        answer:
          "Ett muntligt besked och mätbeviset som PDF kan oftast levereras samma dag som mätningen. Mätbeviset i original skickas med posten.",
      },
      {
        question: "Kan jag inte mäta själv?",
        answer:
          "För att få ett hum om arean går det bra, men det finns många regler att hålla reda på. Vid en försäljning blir du personligt ansvarig för areauppgiften, vilket med otur kan bli en dyr affär.",
      },
      {
        question: "Var utför ni mätningar?",
        answer:
          "Främst i Stockholms närområde, men vi utför även större uppdrag i hela Sverige.",
      },
    ],
  },
  booking: {
    eyebrow: "Boka mätning",
    title: "Boka en areamätning",
    description:
      "Enklast bokar du via mejl eller telefon. Svarar vi inte kan vi vara ute på jobb. Lämna ett meddelande eller skicka ett sms så ringer vi upp.",
    emailLabel: "Mejla oss",
    phoneLabel: "Ring eller sms:a",
    phoneNote: "Vi ringer upp så snart vi kan.",
    checklistTitle: "Det här behöver vi från dig",
    checklist: [
      "Telefonnummer där vi kan nå dig",
      "Objektets adress",
      "Namn på dörren",
      "Lägenhetsnummer, eller fastighetsbeteckning för villa",
      "Portkod",
    ],
    form: {
      title: "Skicka en bokningsförfrågan",
      name: "Namn",
      phone: "Telefon",
      email: "E-post",
      address: "Objektets adress",
      propertyType: "Typ av objekt",
      propertyTypes: {
        apartment: "Lägenhet",
        house: "Hus eller villa",
        premises: "Lokal",
      },
      unitNumber: "Lägenhetsnummer eller fastighetsbeteckning",
      unitNumberHint: "Fastighetsbeteckning gäller för villor.",
      doorCode: "Portkod",
      message: "Meddelande",
      optional: "valfritt",
      submit: "Skicka förfrågan",
      submitting: "Skickar…",
      successTitle: "Tack för din förfrågan",
      successText: "I den riktiga tjänsten skulle Kvadratkoll höra av sig för att bekräfta en tid.",
      errorText: "Något gick fel. Försök igen eller mejla oss direkt.",
      demoNotice:
        "Konceptversion: formuläret skickar inga uppgifter. Mejla eller ring för att boka på riktigt.",
    },
  },
  footer: {
    tagline: "Diplomerade areamätare i Stockholm.",
    contactTitle: "Kontakt",
    orgNumberLabel: "Org.nr",
    groups: [
      {
        title: "Tjänster",
        links: [
          { label: "Bostäder", section: "services" },
          { label: "Lokaler", section: "services" },
          { label: "Planritningar", section: "services" },
        ],
      },
      {
        title: "Information",
        links: [
          { label: "Så går det till", section: "process" },
          { label: "Priser", section: "pricing" },
          { label: "Vanliga frågor", section: "faq" },
        ],
      },
    ],
  },
};

export default sv;
