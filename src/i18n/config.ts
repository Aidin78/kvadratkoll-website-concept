export const locales = ["sv", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sv";

/** Native language names, used by the language switcher. */
export const localeNames: Record<Locale, string> = {
  sv: "Svenska",
  en: "English",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
