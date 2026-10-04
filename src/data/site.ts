import type { Locale } from "@/i18n/config";
import type { SectionId } from "@/types";

/**
 * Locale-independent site settings. Business details are from kvadratkoll.se (fetched October 2026).
 * Translatable copy lives in `src/i18n/dictionaries`.
 */
export const site = {
  name: "Kvadratkoll",
  company: "Kvadratkoll i Stockholm AB",
  orgNumber: "559000-1268",
  email: "info@kvadratkoll.se",
  phone: "070 353 96 39",
  phoneHref: "tel:+46703539639",
  // Unofficial redesign concept, not the official website.
  isConcept: true,
} as const;

export function homeHref(locale: Locale) {
  return `/${locale}`;
}

export function sectionHref(locale: Locale, section: SectionId) {
  return `/${locale}#${section}`;
}
