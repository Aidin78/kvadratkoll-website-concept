"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/i18n/config";

/** Links to the current page in the other locale. */
export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const target = locales.find((locale) => locale !== current) ?? current;
  // Swap the leading locale segment: /sv/foo → /en/foo
  const href = pathname.replace(new RegExp(`^/${current}(?=/|$)`), `/${target}`);

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={localeNames[target]}
      className="inline-flex size-11 items-center justify-center rounded-control text-sm font-medium text-muted uppercase transition-colors hover:bg-sand hover:text-ink"
    >
      {target}
    </Link>
  );
}
