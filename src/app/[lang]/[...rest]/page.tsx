import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";

// not-found.tsx can't export metadata, so the 404 title is set here.
export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.notFound.metaTitle };
}

// Sends every unknown path under a locale (e.g. /sv/foo) to the localized [lang]/not-found page.
export default function CatchAll() {
  notFound();
}
