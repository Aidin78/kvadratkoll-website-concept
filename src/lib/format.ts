import type { Locale } from "@/i18n/config";

const numberLocales: Record<Locale, string> = {
  sv: "sv-SE",
  en: "en-GB",
};

function formatDecimal(value: number, locale: Locale) {
  return new Intl.NumberFormat(numberLocales[locale], {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

/** 56,3 m² (sv) / 56.3 m² (en) */
export function formatArea(value: number, locale: Locale) {
  return `${formatDecimal(value, locale)} m²`;
}

/** 9,0 m (sv) / 9.0 m (en) */
export function formatLength(value: number, locale: Locale) {
  return `${formatDecimal(value, locale)} m`;
}

/** 1 900 kr (sv) / SEK 1,900 (en) */
export function formatPrice(value: number, locale: Locale) {
  return new Intl.NumberFormat(numberLocales[locale], {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(value);
}
