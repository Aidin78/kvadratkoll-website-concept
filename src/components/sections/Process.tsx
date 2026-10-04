import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionHref } from "@/data/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";

export async function Process() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const { process, nav } = dict;

  const cta = (
    <ButtonLink href={sectionHref(locale, nav.cta.section)} size="lg">
      {nav.cta.label}
      <ArrowRight className="size-4" aria-hidden="true" />
    </ButtonLink>
  );

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="section-y border-t border-line bg-surface"
    >
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading
            id="process-title"
            eyebrow={process.eyebrow}
            title={process.title}
            description={process.description}
          />
          {/* Desktop: CTA beside the heading. Mobile: after the steps. */}
          <div className="hidden shrink-0 lg:block">{cta}</div>
        </div>

        <ol className="mt-12 md:mt-16 lg:grid lg:grid-cols-4 lg:gap-8">
          {process.steps.map((step, index) => (
            <li
              key={step.title}
              className={cn(
                "relative pb-10 pl-16 last:pb-0 lg:pt-16 lg:pb-0 lg:pl-0",
                // Connector: vertical below the marker on mobile, horizontal towards the next step on desktop.
                "before:absolute before:top-12 before:bottom-2 before:left-5 before:w-px before:bg-line-strong last:before:hidden",
                "lg:before:top-5 lg:before:-right-4 lg:before:bottom-auto lg:before:left-14 lg:before:h-px lg:before:w-auto",
              )}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 inline-flex size-10 items-center justify-center rounded-full border border-accent font-display text-sm font-semibold text-accent"
              >
                {index + 1}
              </span>
              <h3 className="pt-2 text-lg font-semibold lg:pt-0">{step.title}</h3>
              <p className="mt-2 max-w-md leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col sm:flex-row lg:hidden">{cta}</div>
      </Container>
    </section>
  );
}
