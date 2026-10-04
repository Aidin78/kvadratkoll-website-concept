import Image from "next/image";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/data/images";
import { sectionHref, site } from "@/data/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export async function Hero() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const { hero, nav } = dict;

  return (
    <section aria-labelledby="hero-title" className="border-b border-line">
      <Container className="grid gap-12 pt-12 pb-16 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-20">
        <div className="flex flex-col lg:col-span-7 lg:pr-8">
          <p className="label-mono flex flex-wrap items-center gap-3 text-accent">
            <span>{hero.eyebrow}</span>
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            <span>{site.standard}</span>
          </p>
          <h1
            id="hero-title"
            className="mt-8 text-5xl leading-display font-medium tracking-tighter sm:text-7xl xl:text-8xl"
          >
            {hero.title}
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">{hero.description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink href={sectionHref(locale, nav.cta.section)} size="lg">
              {nav.cta.label}
              <ButtonArrow />
            </ButtonLink>
            <ButtonLink href={sectionHref(locale, hero.secondaryCta.section)} variant="link" size="lg">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="mt-12 flex items-center gap-5 lg:mt-auto lg:pt-16">
            <Image src={images.sisBadge} alt={hero.badgeAlt} className="h-16 w-auto shrink-0" sizes="110px" />
            <p className="max-w-xs text-sm leading-snug text-muted">{hero.badgeCaption}</p>
          </div>
        </div>

        {/* Photo bleeds to the screen edge on phones; dimension lines mark it up like a drawing. */}
        <div className="relative -mx-5 sm:mx-0 lg:col-span-5">
          <Image
            src={images.hero}
            alt={hero.imageAlt}
            preload
            placeholder="blur"
            sizes="(min-width: 80rem) 480px, (min-width: 64rem) 40vw, 100vw"
            className="aspect-4/3 w-full object-cover sm:aspect-3/2 lg:aspect-auto lg:h-full lg:min-h-136"
          />
          <MeasurementMarks />
        </div>
      </Container>
    </section>
  );
}

/** Decorative dimension lines over the hero photo. Hidden from assistive technology. */
function MeasurementMarks() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-accent">
      {/* Width */}
      <div className="absolute inset-x-5 top-5 flex items-center sm:inset-x-6 sm:top-6">
        <span className="h-3 w-px bg-current" />
        <span className="h-px flex-1 bg-current" />
        <span className="label-mono bg-canvas px-2 py-1 text-ink">5 240 mm</span>
        <span className="h-px flex-1 bg-current" />
        <span className="h-3 w-px bg-current" />
      </div>
      {/* Height */}
      <div className="absolute inset-y-14 left-5 flex flex-col items-center sm:left-6">
        <span className="h-px w-3 bg-current" />
        <span className="w-px flex-1 bg-current" />
        <span className="label-mono bg-canvas px-1 py-2 text-ink text-vertical">3 490 mm</span>
        <span className="w-px flex-1 bg-current" />
        <span className="h-px w-3 bg-current" />
      </div>
      {/* Corner registration mark */}
      <span className="absolute right-5 bottom-5 size-5 border-r border-b border-current sm:right-6 sm:bottom-6" />
    </div>
  );
}
