import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionHref } from "@/data/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export async function Process() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const { process, nav } = dict;

  return (
    <section id="process" aria-labelledby="process-title" className="section-y bg-ink text-white">
      <Container>
        <SectionHeading
          id="process-title"
          index="02"
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
          layout="split"
          tone="inverted"
        />

        {/* A measuring ruler runs along the top of the steps on desktop. */}
        <div aria-hidden="true" className="ruler mt-16 hidden text-white/25 md:mt-24 lg:block" />

        <ol className="mt-12 grid gap-x-10 lg:mt-8 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-6 border-t border-white/15 py-8 lg:block lg:border-t-0 lg:py-0"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl font-light tracking-tighter text-accent-light tabular-nums lg:text-7xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-8">
                <h3 className="text-xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-white/65">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col border-t border-white/15 pt-10 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <ButtonLink href={sectionHref(locale, nav.cta.section)} variant="inverse" size="lg">
            {nav.cta.label}
            <ButtonArrow />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
