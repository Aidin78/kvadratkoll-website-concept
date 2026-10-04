import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeHref, sectionHref } from "@/data/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export default async function NotFound() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const { notFound, nav } = dict;

  return (
    <section aria-labelledby="not-found-title" className="section-y">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 font-display text-sm font-medium tracking-wide text-accent">{notFound.eyebrow}</p>
          <h1 id="not-found-title" className="text-4xl leading-display font-semibold sm:text-5xl">
            {notFound.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{notFound.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={homeHref(locale)} size="lg">
              {notFound.homeLink}
            </ButtonLink>
            <ButtonLink href={sectionHref(locale, nav.cta.section)} variant="secondary" size="lg">
              {nav.cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
