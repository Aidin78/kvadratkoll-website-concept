import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { homeHref, sectionHref, site } from "@/data/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { Logo } from "./Logo";

export async function Footer() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Logo href={homeHref(locale)} label={dict.common.homeLinkLabel} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{dict.footer.tagline}</p>
          </div>

          {dict.footer.groups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="md:col-span-3 lg:col-span-2">
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={sectionHref(locale, link.section)}
                      className="inline-flex min-h-10 items-center text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          {site.isConcept && <p>{dict.common.conceptNotice}</p>}
        </div>
      </Container>
    </footer>
  );
}
