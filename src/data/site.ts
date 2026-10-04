import type { FooterLinkGroup, NavItem } from "@/types";

export const site = {
  name: "Kvadratkoll",
  tagline: "Areamätning av bostäder och lokaler",
  description:
    "Professionell areamätning av bostäder och lokaler. Boka en mätning och få ett tydligt underlag för köp, försäljning eller uthyrning.",
  // Unofficial redesign concept. Real contact details are not confirmed.
  isConcept: true,
} as const;

/** Section anchors on the homepage. Shared by the page and the navigation. */
export const sectionIds = {
  services: "tjanster",
  process: "sa-fungerar-det",
  pricing: "priser",
  faq: "vanliga-fragor",
  booking: "boka",
} as const;

export const primaryCta: NavItem = {
  label: "Boka mätning",
  href: `/#${sectionIds.booking}`,
};

export const mainNav: NavItem[] = [
  { label: "Tjänster", href: `/#${sectionIds.services}` },
  { label: "Så fungerar det", href: `/#${sectionIds.process}` },
  { label: "Priser", href: `/#${sectionIds.pricing}` },
  { label: "Vanliga frågor", href: `/#${sectionIds.faq}` },
];

export const footerNav: FooterLinkGroup[] = [
  {
    title: "Tjänster",
    links: [
      { label: "Bostäder", href: `/#${sectionIds.services}` },
      { label: "Lokaler", href: `/#${sectionIds.services}` },
      { label: "Planritningar", href: `/#${sectionIds.services}` },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Så fungerar det", href: `/#${sectionIds.process}` },
      { label: "Priser", href: `/#${sectionIds.pricing}` },
      { label: "Vanliga frågor", href: `/#${sectionIds.faq}` },
    ],
  },
];
