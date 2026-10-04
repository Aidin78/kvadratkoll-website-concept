import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, type Locale } from "./config";

const dictionaries = {
  sv: () => import("./dictionaries/sv").then((module) => module.default),
  en: () => import("./dictionaries/en").then((module) => module.default),
};

/** Resolves the current locale from the `[lang]` root segment. Server-only. */
export async function getLocale(): Promise<Locale> {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

/** Loads the dictionary for the current locale. Server-only. */
export async function getDictionary() {
  return dictionaries[await getLocale()]();
}
