import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryCta, sectionIds } from "@/data/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-12 pb-20 md:pt-20 md:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="mb-5 text-sm font-medium tracking-wide text-accent uppercase">
            Areamätning av bostäder och lokaler
          </p>
          <h1
            id="hero-title"
            className="text-4xl leading-display font-semibold sm:text-5xl lg:text-6xl"
          >
            Exakt area. Tydligt underlag.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Vi mäter din bostad eller lokal och tar fram ett underlag som går att använda vid köp,
            försäljning eller uthyrning.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={`/#${sectionIds.pricing}`} variant="secondary" size="lg">
              Se priser
            </ButtonLink>
          </div>
        </div>

        {/* Placeholder until architectural photography is sourced */}
        <div className="lg:col-span-6">
          <div className="flex aspect-4/3 items-end sm:aspect-video lg:aspect-4/3 rounded-card border border-line bg-sand p-6">
            <p className="text-sm text-muted">Bild: bostad / arkitektur (platshållare)</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
