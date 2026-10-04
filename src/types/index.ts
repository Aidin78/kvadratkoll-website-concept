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
  /** False until the figure is confirmed by Kvadratkoll. Rendered with a placeholder marker. */
  confirmed: boolean;
};

export type ServiceIcon = "house" | "building" | "floor-plan";

export type Service = {
  id: string;
  icon: ServiceIcon;
  title: string;
  description: string;
  features: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};
