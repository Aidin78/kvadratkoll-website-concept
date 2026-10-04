import type {
  Benefit,
  FaqItem,
  FloorPlanRoomId,
  FooterLinkGroup,
  PriceTableId,
  ProcessStep,
  PropertyType,
  SectionLink,
  Service,
  SurchargeId,
  TrustIndicator,
} from "@/types";

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
    imageAlt: string;
    badgeAlt: string;
    badgeCaption: string;
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
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    items: Benefit[];
  };
  example: {
    eyebrow: string;
    title: string;
    description: string;
    includesTitle: string;
    includes: string[];
    summaryTitle: string;
    livingArea: string;
    secondaryArea: string;
    figureLabel: string;
    figureCaption: string;
    sampleLink: string;
    sampleLinkMeta: string;
    rooms: Record<FloorPlanRoomId, string>;
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    areaColumn: string;
    priceColumn: string;
    onRequest: string;
    byAgreement: string;
    surchargesTitle: string;
    tables: Record<PriceTableId, { title: string; scope: string }>;
    surcharges: Record<SurchargeId, string>;
    notes: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    phoneNote: string;
    checklistTitle: string;
    checklist: string[];
    form: {
      title: string;
      name: string;
      phone: string;
      email: string;
      address: string;
      propertyType: string;
      propertyTypes: Record<PropertyType, string>;
      unitNumber: string;
      unitNumberHint: string;
      doorCode: string;
      message: string;
      optional: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successText: string;
      errorText: string;
      demoNotice: string;
    };
  };
  notFound: {
    metaTitle: string;
    eyebrow: string;
    title: string;
    description: string;
    homeLink: string;
  };
  footer: {
    tagline: string;
    contactTitle: string;
    orgNumberLabel: string;
    groups: FooterLinkGroup[];
  };
};
