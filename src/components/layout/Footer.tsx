import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { homeHref, sectionHref, site } from "@/data/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { Logo } from "./Logo";

const footerLinkStyles =
  "inline-flex min-h-10 items-center text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-white";

export async function Footer() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const { footer } = dict;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <Container className="pt-16 pb-10 md:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-12 lg:col-span-4">
            <Logo href={homeHref(locale)} label={dict.common.homeLinkLabel} inverted className="focus-visible:outline-white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">{footer.tagline}</p>
          </div>

          {footer.groups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="md:col-span-4 lg:col-span-2">
              <h2 className="label-mono text-accent-light">{group.title}</h2>
              <ul className="mt-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={sectionHref(locale, link.section)} className={footerLinkStyles}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 md:col-span-4">
            <h2 className="label-mono text-accent-light">{footer.contactTitle}</h2>
            <address className="mt-4 flex flex-col not-italic">
              <a href={`mailto:${site.email}`} className={footerLinkStyles}>
                {site.email}
              </a>
              <a href={site.phoneHref} className={footerLinkStyles}>
                {site.phone}
              </a>
              <span className="mt-3 text-sm text-white/65">{site.company}</span>
              <span className="font-mono text-xs text-white/50">
                {footer.orgNumberLabel} {site.orgNumber}
              </span>
            </address>
          </div>
        </div>

        <div aria-hidden="true" className="ruler mt-16 text-white/20" />
        <div className="mt-6 flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          {site.isConcept && <p>{dict.common.conceptNotice}</p>}
        </div>
      </Container>
    </footer>
  );
}
