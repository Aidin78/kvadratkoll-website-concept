import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/data/images";
import { sectionHref } from "@/data/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export async function Hero() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const { hero, nav } = dict;

  return (
    <section aria-labelledby="hero-title" className="pt-12 pb-20 md:pt-20 md:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="mb-5 text-sm font-medium tracking-wide text-accent uppercase">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="text-4xl leading-display font-semibold sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={sectionHref(locale, nav.cta.section)} size="lg">
              {nav.cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={sectionHref(locale, hero.secondaryCta.section)}
              variant="secondary"
              size="lg"
            >
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-line pt-6">
            <Image src={images.sisBadge} alt={hero.badgeAlt} className="h-14 w-auto shrink-0" sizes="96px" />
            <p className="max-w-xs text-sm leading-snug text-muted">{hero.badgeCaption}</p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <Image
            src={images.hero}
            alt={hero.imageAlt}
            preload
            placeholder="blur"
            sizes="(min-width: 75rem) 560px, (min-width: 64rem) 46vw, 100vw"
            className="aspect-4/3 w-full rounded-card object-cover sm:aspect-video lg:aspect-4/3"
          />
        </div>
      </Container>
    </section>
  );
}
