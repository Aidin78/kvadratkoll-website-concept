import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionIds } from "@/data/site";

/**
 * Homepage sections not built yet. Each entry is replaced by its own
 * component in `components/sections/` as the design progresses.
 */
const plannedSections = [
  { id: "fortroende", title: "Förtroende", note: "Trust indicators. Needs confirmed figures." },
  { id: sectionIds.services, title: "Tjänster", note: "Services" },
  { id: sectionIds.process, title: "Så fungerar det", note: "How it works" },
  { id: "varfor-kvadratkoll", title: "Varför Kvadratkoll", note: "Why Kvadratkoll" },
  { id: "exempel", title: "Exempel på planritning", note: "Measurement / floor plan example" },
  { id: sectionIds.pricing, title: "Priser", note: "Pricing preview. Needs confirmed prices." },
  { id: sectionIds.faq, title: "Vanliga frågor", note: "FAQ" },
  { id: sectionIds.booking, title: "Boka mätning", note: "Final booking CTA" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      {plannedSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className={index % 2 === 0 ? "section-y border-t border-line" : "section-y bg-surface"}
        >
          <Container>
            <SectionHeading id={`${section.id}-title`} title={section.title} />
            <p className="mt-4 text-sm text-muted">Platshållare: {section.note}</p>
          </Container>
        </section>
      ))}
    </>
  );
}
