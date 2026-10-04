import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage() {
  const dict = await getDictionary();

  return (
    <>
      <Hero />
      <TrustIndicators />
      <Services />
      {/* Sections not built yet. Each is replaced by its own component in components/sections/. */}
      {dict.plannedSections.map(({ section, title }) => (
        <section
          key={section}
          id={section}
          aria-labelledby={`${section}-title`}
          className="section-y border-t border-line"
        >
          <Container>
            <SectionHeading id={`${section}-title`} title={title} />
            <p className="mt-4 text-sm text-muted">{dict.common.placeholderLabel}</p>
          </Container>
        </section>
      ))}
    </>
  );
}
