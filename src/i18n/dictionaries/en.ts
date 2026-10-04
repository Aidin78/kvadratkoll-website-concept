import type { Dictionary } from "../types";

// Copy is concept placeholder text. Figures and service scope must be confirmed by Kvadratkoll.
const en: Dictionary = {
  meta: {
    title: "Kvadratkoll | Area measurement for homes and commercial premises",
    description:
      "Professional area measurement for homes and commercial premises. Book a measurement and get clear documentation for buying, selling or leasing.",
  },
  common: {
    skipToContent: "Skip to content",
    homeLinkLabel: "Kvadratkoll, go to homepage",
    conceptNotice: "Unofficial design concept, not the official Kvadratkoll website.",
    placeholderLabel: "Placeholder",
  },
  nav: {
    mainLabel: "Main menu",
    mobileLabel: "Mobile menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    items: [
      { label: "Services", section: "services" },
      { label: "How it works", section: "process" },
      { label: "Pricing", section: "pricing" },
      { label: "FAQ", section: "faq" },
    ],
    cta: { label: "Book a measurement", section: "booking" },
  },
  hero: {
    eyebrow: "Area measurement for homes and premises",
    title: "Exact area. Clear documentation.",
    description:
      "We measure your home or commercial premises and prepare documentation you can use when buying, selling or leasing.",
    secondaryCta: { label: "View pricing", section: "pricing" },
    imagePlaceholder: "Image: home / architecture (placeholder)",
  },
  trust: {
    title: "Kvadratkoll at a glance",
    items: [
      { value: "[number]", label: "completed measurements", confirmed: false },
      { value: "[number] years", label: "of measurement experience", confirmed: false },
      { value: "SS 21054", label: "Swedish standard for area measurement", confirmed: false },
      { value: "[region]", label: "where we carry out measurements", confirmed: false },
    ],
    placeholderNote: "These figures are placeholders and will be replaced with confirmed data.",
  },
  services: {
    eyebrow: "Services",
    title: "Measurement for homes and premises",
    description:
      "Whether you are selling, buying or leasing, you get measurement documentation that is easy to understand and use.",
    items: [
      {
        id: "residential",
        icon: "house",
        title: "Homes",
        description:
          "Area measurement of houses, townhouses, holiday homes and apartments, for example before a sale or purchase.",
        features: [
          "Living area (BOA) and secondary area (BIA)",
          "Houses and apartments",
          "Documentation for buying and selling",
        ],
      },
      {
        id: "commercial",
        icon: "building",
        title: "Commercial premises",
        description:
          "Measurement of offices, shops and other premises as a basis for leasing and property management.",
        features: [
          "Leasable area (LOA)",
          "Offices, retail and storage",
          "Documentation for lease agreements",
        ],
      },
      {
        id: "floor-plans",
        icon: "floor-plan",
        title: "Floor plans",
        description:
          "Clear floor plans based on the measurement, for listings, renovation or your own records.",
        features: ["Based on measured dimensions", "For listings and renovation", "Digital format"],
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "From booking to finished documentation",
    description: "A simple four-step process. You always know what happens next.",
    steps: [
      {
        title: "Send a request",
        description:
          "Tell us the address and type of property. We get back to you to confirm a suitable time.",
      },
      {
        title: "On-site measurement",
        description: "We visit the property and measure every space.",
      },
      {
        title: "Calculation and drawing",
        description:
          "The measurements are compiled and the area is calculated. A floor plan is drawn if needed.",
      },
      {
        title: "Receive your documentation",
        description: "The measurement results, and the floor plan if ordered, are delivered digitally.",
      },
    ],
  },
  why: {
    eyebrow: "Why Kvadratkoll",
    title: "Documentation you can rely on",
    description:
      "Area affects both price and rent. That is why the measurement should be precise and the result easy to understand.",
    items: [
      {
        icon: "precision",
        title: "Precise measurements",
        description:
          "Every space is measured on site and the area is calculated according to applicable rules.",
      },
      {
        icon: "document",
        title: "Clear documentation",
        description:
          "Results are presented so they are easy to understand for buyers, sellers and estate agents.",
      },
      {
        icon: "booking",
        title: "Easy booking",
        description: "Send a request in a few minutes. We get back to you to confirm a time.",
      },
      {
        icon: "support",
        title: "Help choosing",
        description:
          "Not sure what you need? We help you choose the right measurement for your situation.",
      },
    ],
  },
  plannedSections: [
    { section: "example", title: "Floor plan example" },
    { section: "pricing", title: "Pricing" },
    { section: "faq", title: "Frequently asked questions" },
    { section: "booking", title: "Book a measurement" },
  ],
  footer: {
    tagline: "Area measurement for homes and commercial premises.",
    groups: [
      {
        title: "Services",
        links: [
          { label: "Homes", section: "services" },
          { label: "Commercial premises", section: "services" },
          { label: "Floor plans", section: "services" },
        ],
      },
      {
        title: "Information",
        links: [
          { label: "How it works", section: "process" },
          { label: "Pricing", section: "pricing" },
          { label: "FAQ", section: "faq" },
        ],
      },
    ],
  },
};

export default en;
