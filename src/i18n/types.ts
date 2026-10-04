import type { FooterLinkGroup, SectionId, SectionLink, Service, TrustIndicator } from "@/types";

/** Shape every locale dictionary must implement. */
export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  common: {
    skipToContent: string;
    homeLinkLabel: string;
    conceptNotice: string;
    placeholderLabel: string;
  };
  nav: {
    mainLabel: string;
    mobileLabel: string;
    openMenu: string;
    closeMenu: string;
    items: SectionLink[];
    cta: SectionLink;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    secondaryCta: SectionLink;
    imagePlaceholder: string;
  };
  trust: {
    /** Visually hidden heading for the trust strip. */
    title: string;
    items: TrustIndicator[];
    placeholderNote: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Service[];
  };
  /** Titles for homepage sections that are not built yet. */
  plannedSections: { section: SectionId; title: string }[];
  footer: {
    tagline: string;
    groups: FooterLinkGroup[];
  };
};
