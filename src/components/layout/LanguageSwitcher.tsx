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
      className="label-mono inline-flex size-11 items-center justify-center rounded-control text-muted transition-colors hover:text-ink"
    >
      {target}
    </Link>
  );
}
