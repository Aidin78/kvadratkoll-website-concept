import type { Dictionary } from "../types";

// Copy is concept placeholder text. Figures and service scope must be confirmed by Kvadratkoll.
const sv: Dictionary = {
  meta: {
    title: "Kvadratkoll | Areamätning av bostäder och lokaler",
    description:
      "Professionell areamätning av bostäder och lokaler. Boka en mätning och få ett tydligt underlag för köp, försäljning eller uthyrning.",
  },
  common: {
    skipToContent: "Hoppa till innehållet",
    homeLinkLabel: "Kvadratkoll, till startsidan",
    conceptNotice: "Inofficiellt designkoncept, inte Kvadratkolls officiella webbplats.",
    placeholderLabel: "Platshållare",
  },
  nav: {
    mainLabel: "Huvudmeny",
    mobileLabel: "Mobilmeny",
    openMenu: "Öppna meny",
    closeMenu: "Stäng meny",
    items: [
      { label: "Tjänster", section: "services" },
      { label: "Så fungerar det", section: "process" },
      { label: "Priser", section: "pricing" },
      { label: "Vanliga frågor", section: "faq" },
    ],
    cta: { label: "Boka mätning", section: "booking" },
  },
  hero: {
    eyebrow: "Areamätning av bostäder och lokaler",
    title: "Exakt area. Tydligt underlag.",
    description:
      "Vi mäter din bostad eller lokal och tar fram ett underlag som går att använda vid köp, försäljning eller uthyrning.",
    secondaryCta: { label: "Se priser", section: "pricing" },
    imagePlaceholder: "Bild: bostad / arkitektur (platshållare)",
  },
  trust: {
    title: "Kvadratkoll i korthet",
    items: [
      { value: "[antal]", label: "genomförda mätningar", confirmed: false },
      { value: "[antal] år", label: "erfarenhet av areamätning", confirmed: false },
      { value: "SS 21054", label: "svensk standard för areamätning", confirmed: false },
      { value: "[område]", label: "där vi utför mätningar", confirmed: false },
    ],
    placeholderNote: "Uppgifterna är platshållare och ersätts med bekräftade siffror.",
  },
  services: {
    eyebrow: "Tjänster",
    title: "Mätning för bostäder och lokaler",
    description:
      "Oavsett om du ska sälja, köpa eller hyra ut får du ett mätunderlag som är lätt att förstå och använda.",
    items: [
      {
        id: "residential",
        icon: "house",
        title: "Bostäder",
        description:
          "Areamätning av villor, radhus, fritidshus och lägenheter, till exempel inför försäljning eller köp.",
        features: [
          "Boarea (BOA) och biarea (BIA)",
          "Småhus och lägenheter",
          "Underlag inför köp och försäljning",
        ],
      },
      {
        id: "commercial",
        icon: "building",
        title: "Lokaler",
        description:
          "Mätning av kontor, butiker och andra lokaler som underlag för uthyrning och förvaltning.",
        features: ["Lokalarea (LOA)", "Kontor, butik och lager", "Underlag för hyresavtal"],
      },
      {
        id: "floor-plans",
        icon: "floor-plan",
        title: "Planritningar",
        description:
          "Tydliga planritningar baserade på mätningen, för annonser, renovering eller egen dokumentation.",
        features: [
          "Baserade på uppmätta mått",
          "För annons och renovering",
          "Digitalt format",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Så fungerar det",
    title: "Från bokning till färdigt underlag",
    description: "Ett enkelt förlopp i fyra steg. Du vet hela tiden vad som händer härnäst.",
    steps: [
      {
        title: "Skicka en förfrågan",
        description:
          "Ange adress och typ av bostad eller lokal. Vi återkommer och bekräftar en tid som passar.",
      },
      {
        title: "Mätning på plats",
        description: "Vi besöker objektet och mäter upp alla utrymmen.",
      },
      {
        title: "Beräkning och ritning",
        description: "Måtten sammanställs och arean beräknas. Vid behov tas en planritning fram.",
      },
      {
        title: "Du får underlaget",
        description: "Mätresultatet, och planritningen om du beställt en, levereras digitalt.",
      },
    ],
  },
  why: {
    eyebrow: "Varför Kvadratkoll",
    title: "Ett underlag du kan lita på",
    description:
      "Arean påverkar både pris och hyra. Därför ska mätningen vara noggrann och resultatet lätt att förstå.",
    items: [
      {
        icon: "precision",
        title: "Noggranna mått",
        description: "Varje utrymme mäts upp på plats och arean beräknas enligt gällande mätregler.",
      },
      {
        icon: "document",
        title: "Tydligt underlag",
        description:
          "Resultatet presenteras så att det är lätt att förstå för köpare, säljare och mäklare.",
      },
      {
        icon: "booking",
        title: "Enkel bokning",
        description: "Skicka en förfrågan på några minuter. Vi återkommer och bekräftar en tid.",
      },
      {
        icon: "support",
        title: "Hjälp att välja rätt",
        description: "Osäker på vad du behöver? Vi hjälper dig att välja rätt mätning för ditt ärende.",
      },
    ],
  },
  example: {
    eyebrow: "Exempel",
    title: "Så kan ett mätunderlag se ut",
    description:
      "Planritningen visar arean för varje rum, med boarea och biarea redovisade var för sig.",
    includesTitle: "Underlaget kan innehålla",
    includes: [
      "Area per rum",
      "Boarea (BOA) och biarea (BIA) redovisade separat",
      "Skalenlig planritning med yttermått",
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
  plannedSections: [
    { section: "pricing", title: "Priser" },
    { section: "faq", title: "Vanliga frågor" },
    { section: "booking", title: "Boka mätning" },
  ],
  footer: {
    tagline: "Areamätning av bostäder och lokaler.",
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
          { label: "Så fungerar det", section: "process" },
          { label: "Priser", section: "pricing" },
          { label: "Vanliga frågor", section: "faq" },
        ],
      },
    ],
  },
};

export default sv;
