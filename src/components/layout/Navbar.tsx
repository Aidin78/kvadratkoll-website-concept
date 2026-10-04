import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { homeHref, sectionHref } from "@/data/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export async function Navbar() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const items = dict.nav.items.map((item) => ({
    label: item.label,
    href: sectionHref(locale, item.section),
  }));
  const cta = { label: dict.nav.cta.label, href: sectionHref(locale, dict.nav.cta.section) };

  return (
    // The blur sits on a pseudo-element: backdrop-filter on the header itself would
    // become the containing block for the fixed mobile menu panel.
    <header className="sticky top-0 z-40 border-b border-line before:absolute before:inset-0 before:-z-10 before:bg-canvas/85 before:backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-18">
        <Logo href={homeHref(locale)} label={dict.common.homeLinkLabel} eager />

        <nav aria-label={dict.nav.mainLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-control px-3.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher current={locale} />
          <div className="hidden sm:block">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          </div>
          <MobileMenu
            items={items}
            cta={cta}
            labels={{
              nav: dict.nav.mobileLabel,
              open: dict.nav.openMenu,
              close: dict.nav.closeMenu,
            }}
          />
        </div>
      </Container>
    </header>
  );
}
