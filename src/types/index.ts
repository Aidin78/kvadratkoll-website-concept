/** Anchor ids of the homepage sections. Shared across locales. */
export type SectionId =
  | "trust"
  | "services"
  | "process"
  | "why"
  | "example"
  | "pricing"
  | "faq"
  | "booking";

export type NavItem = {
  label: string;
  href: string;
};

/** A link to a homepage section, as stored in the dictionaries. */
export type SectionLink = {
  label: string;
  section: SectionId;
};

export type FooterLinkGroup = {
  title: string;
  links: SectionLink[];
};

export type TrustIndicator = {
  value: string;
  label: string;
  /** False until the figure is confirmed. Rendered with a placeholder marker. */
  confirmed: boolean;
};

export type ServiceId = "residential" | "commercial" | "floor-plans";

export type Service = {
  id: ServiceId;
  title: string;
  imageAlt: string;
  description: string;
  features: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type BenefitIcon = "precision" | "document" | "booking" | "certified";

export type Benefit = {
  icon: BenefitIcon;
  title: string;
  description: string;
};

export type FloorPlanRoomId = "living" | "kitchen" | "bedroom" | "hall" | "bathroom" | "storage";

export type PriceTableId = "apartment" | "house";

export type SurchargeId =
  | "inner-suburb"
  | "outer-suburb-apartment"
  | "sloped-ceiling"
  | "cancellation"
  | "outbuilding"
  | "outer-suburb-house"
  | "express";

export type PriceRow = {
  minArea: number;
  /** Null for the open-ended top bracket, e.g. "300+ m²". */
  maxArea: number | null;
  /** Price in SEK including VAT. Null means price on request (offert). */
  price: number | null;
};

export type PriceTable = {
  id: PriceTableId;
  rows: PriceRow[];
  surcharges: SurchargeId[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PropertyType = "apartment" | "house" | "premises";
