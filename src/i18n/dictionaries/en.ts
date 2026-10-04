import type { Dictionary } from "../types";

// Facts and prices are taken from kvadratkoll.se (fetched October 2026). The copy is rewritten for the concept.
const en: Dictionary = {
  meta: {
    title: "Kvadratkoll | Area measurement in Stockholm",
    description:
      "Certified area measurers in Stockholm. We measure apartments, houses and commercial premises according to SS 21054:2020 and deliver a measurement certificate, often the same day.",
  },
  common: {
    skipToContent: "Skip to content",
    homeLinkLabel: "Kvadratkoll, go to homepage",
    conceptNotice: "Unofficial design concept, not the official Kvadratkoll website.",
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
    eyebrow: "Area measurement in Stockholm",
    title: "Exact area. Clear certificate.",
    description:
      "We measure apartments, houses and commercial premises according to SS 21054:2020. You get a measurement certificate to use when selling, buying or leasing, often the same day.",
    secondaryCta: { label: "View pricing", section: "pricing" },
    imagePlaceholder: "Image: home / architecture (placeholder)",
  },
  trust: {
    title: "Kvadratkoll at a glance",
    items: [
      { value: "7,000+", label: "area measurements completed", confirmed: true },
      { value: "SIS", label: "certified area measurers", confirmed: true },
      { value: "SS 21054:2020", label: "current Swedish standard for area measurement", confirmed: true },
      { value: "Same day", label: "certificate as PDF in most cases", confirmed: true },
    ],
    placeholderNote: "These figures are placeholders and will be replaced with confirmed data.",
  },
  services: {
    eyebrow: "Services",
    title: "Measurement of homes and premises",
    description:
      "Mainly in the Stockholm area, with larger assignments across Sweden. Many homes and premises have a stated area that is wrong because of outdated records.",
    items: [
      {
        id: "residential",
        icon: "house",
        title: "Homes",
        description:
          "Area measurement of apartments and houses before a sale or purchase. Most homes are compared on price per square metre, so the area has to be right.",
        features: [
          "Living area (BOA) and secondary area (BIA)",
          "Certificate according to SS 21054:2020",
          "Apartments and houses",
        ],
      },
      {
        id: "commercial",
        icon: "building",
        title: "Commercial premises",
        description: "Correct area figures benefit both tenant and landlord when the rent is set.",
        features: ["Offices, shops and other premises", "Basis for setting rent", "Quote for larger properties"],
      },
      {
        id: "floor-plans",
        icon: "floor-plan",
        title: "Floor plans",
        description:
          "New scaled floor plans made with a laser measurer and AutoCAD, for example when old drawings no longer match or for a building notification.",
        features: [
          "Scaled floor plans and as-built drawings",
          "PDF by email and printed A4 by post",
          "Price on quotation",
        ],
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "From booking to certificate",
    description:
      "No preparation is needed. Furniture is rarely in the way and can be moved while we are there.",
    steps: [
      {
        title: "Book a measurement",
        description:
          "Email or call us. The measurement can often be done the same day or the next, and we are flexible with times.",
      },
      {
        title: "On-site measurement",
        description:
          "We measure with a laser measurer and draw every dimension in CAD. It takes 20 minutes to 2 hours. You don't need to be there; we can collect the keys.",
      },
      {
        title: "Area calculation",
        description: "The final area calculation is done at our office from the CAD sketch.",
      },
      {
        title: "Certificate",
        description:
          "You get the result verbally and as a PDF, usually the same day. The original is sent by post and payment is by invoice.",
      },
    ],
  },
  why: {
    eyebrow: "Why Kvadratkoll",
    title: "A certificate you can rely on",
    description:
      "When selling, the seller is personally liable for the stated area. Without a certificate from a certified area measurer, the figure is unreliable.",
    items: [
      {
        icon: "certified",
        title: "Certified by SIS",
        description:
          "SIS issued the standard for how homes are measured and certifies area measurers after an exam.",
      },
      {
        icon: "precision",
        title: "Laser and CAD",
        description:
          "Every dimension is taken with a laser measurer and drawn in CAD software for the highest possible accuracy.",
      },
      {
        icon: "document",
        title: "Legal certificate",
        description:
          "The certificate can be used when selling and remains valid until SIS issues a new standard.",
      },
      {
        icon: "booking",
        title: "Flexible times",
        description:
          "Measurements are often done the same day or the next. Short on time? Call or text us.",
      },
    ],
  },
  example: {
    eyebrow: "Certificate",
    title: "What the certificate shows",
    description:
      "The certificate states the property's area and how it splits between living area and secondary area. The illustration shows the format.",
    includesTitle: "The certificate includes",
    includes: [
      "Property, address and client",
      "Property designation or apartment number",
      "The standard used and how the measurement was done",
      "Total size and split between living and secondary area",
    ],
    summaryTitle: "Summary",
    livingArea: "Living area (BOA)",
    secondaryArea: "Secondary area (BIA)",
    figureLabel: "Example floor plan of an apartment with the area of each room",
    figureCaption: "Illustrative example. The measurements are made up and only show the format.",
    rooms: {
      living: "Living room",
      kitchen: "Kitchen",
      bedroom: "Bedroom",
      hall: "Hall",
      bathroom: "Bathroom",
      storage: "Storage",
    },
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Fixed prices by size",
    description: "All prices include VAT and are based on the property's total area.",
    areaColumn: "Total area",
    priceColumn: "Price incl. VAT",
    onRequest: "Quote",
    byAgreement: "By agreement",
    surchargesTitle: "Surcharges",
    tables: {
      apartment: { title: "Apartment or premises", scope: "Stockholm inner city" },
      house: { title: "House", scope: "Inner suburbs" },
    },
    surcharges: {
      "inner-suburb": "Travel surcharge, inner suburbs (outside the toll zone)",
      "outer-suburb-apartment": "Travel surcharge, outer suburbs",
      "sloped-ceiling": "Apartment with sloped ceilings or on several floors",
      cancellation: "Cancellation within 24 hours or no-show",
      outbuilding: "Outbuilding up to 25 m², per building",
      "outer-suburb-house": "Travel surcharge, outer suburbs",
      express: "Express surcharge for very urgent cases",
    },
    notes: [
      "Payment is by invoice once the assignment is complete.",
      "The cost of an area measurement is deductible in the capital gains calculation when selling a home.",
      "For larger properties, whole housing associations or several apartments at once, we provide a quote.",
      "Floor plans and as-built drawings are priced on separate quotation.",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Good to know",
    description: "Can't find the answer? Email or call us.",
    items: [
      {
        question: "Why should I measure my home or premises?",
        answer:
          "Homes are often compared on price per square metre, so every square metre is valuable. Older area figures are often wrong: renovations, converted attics and extensions may have been added, and the measuring rules have changed over time. A correct area reduces the risk of disputes when ownership changes.",
      },
      {
        question: "What is a measurement certificate?",
        answer:
          "A legal document stating the property, address, client, property designation or apartment number, the standard used, how the measurement was done, and the size and split between living and secondary area. It can be used when selling and stays valid until SIS issues a new standard.",
      },
      {
        question: "Which standard do you follow?",
        answer:
          "Swedish Standard SS 21054:2020, set by SIS. The same rules are used by, among others, the Swedish Tax Agency, the Consumer Agency, Boverket, the Tenants' Association and the Swedish Association of Real Estate Agents.",
      },
      {
        question: "How long does a measurement take?",
        answer: "From 20 minutes up to 2 hours, depending on the size and layout of the property.",
      },
      {
        question: "Do I need to prepare anything or be there?",
        answer:
          "No. No preparation is needed and furniture is rarely in the way. If it is hard for you to be there, we can collect the keys.",
      },
      {
        question: "When do I get the result?",
        answer:
          "A verbal result and the certificate as a PDF can usually be delivered the same day as the measurement. The original certificate is sent by post.",
      },
      {
        question: "Can't I measure it myself?",
        answer:
          "It works for a rough idea, but there are many rules to keep track of. When selling, you become personally liable for the stated area, which with bad luck can be very expensive.",
      },
      {
        question: "Where do you work?",
        answer: "Mainly in the Stockholm area, but we also take on larger assignments across Sweden.",
      },
    ],
  },
  booking: {
    eyebrow: "Book a measurement",
    title: "Book an area measurement",
    description:
      "The easiest way to book is by email or phone. If we don't answer, we may be out on a job. Leave a message or send a text and we will call you back.",
    emailLabel: "Email us",
    phoneLabel: "Call or text",
    phoneNote: "We call back as soon as we can.",
    checklistTitle: "What we need from you",
    checklist: [
      "A phone number where we can reach you",
      "The property address",
      "The name on the door",
      "Apartment number, or property designation for a house",
      "Door code",
    ],
    form: {
      title: "Send a booking request",
      name: "Name",
      phone: "Phone",
      email: "Email",
      address: "Property address",
      propertyType: "Property type",
      propertyTypes: {
        apartment: "Apartment",
        house: "House",
        premises: "Commercial premises",
      },
      unitNumber: "Apartment number or property designation",
      unitNumberHint: "Property designation applies to houses.",
      doorCode: "Door code",
      message: "Message",
      optional: "optional",
      submit: "Send request",
      submitting: "Sending…",
      successTitle: "Thank you for your request",
      successText: "In the real service, Kvadratkoll would get in touch to confirm a time.",
      errorText: "Something went wrong. Please try again or email us directly.",
      demoNotice: "Concept version: the form does not send any data. Email or call to book for real.",
    },
  },
  footer: {
    tagline: "Certified area measurers in Stockholm.",
    contactTitle: "Contact",
    orgNumberLabel: "Reg. no.",
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
