import type { Locale } from "@/i18n/config";
import type { SectionId } from "@/types";

/** Locale-independent site settings. Translatable copy lives in `src/i18n/dictionaries`. */
export const site = {
  name: "Kvadratkoll",
  // Unofficial redesign concept. Real contact details are not confirmed.
  isConcept: true,
} as const;

export function homeHref(locale: Locale) {
  return `/${locale}`;
}

export function sectionHref(locale: Locale, section: SectionId) {
  return `/${locale}#${section}`;
}
