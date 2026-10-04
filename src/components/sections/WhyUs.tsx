import { BadgeCheck, CalendarCheck, FileText, Ruler, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/get-dictionary";
import type { BenefitIcon } from "@/types";

const benefitIcons: Record<BenefitIcon, LucideIcon> = {
  precision: Ruler,
  document: FileText,
  booking: CalendarCheck,
  certified: BadgeCheck,
};

export async function WhyUs() {
  const { why } = await getDictionary();

  return (
    <section id="why" aria-labelledby="why-title" className="section-y border-t border-line">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Heading stays in view while the benefit list scrolls past on desktop. */}
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHeading
            id="why-title"
            eyebrow={why.eyebrow}
            title={why.title}
            description={why.description}
          />
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1">
          {why.items.map((item) => {
            const Icon = benefitIcons[item.icon];
            return (
              <li key={item.title} className="flex gap-5 border-t border-line py-8 lg:gap-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-control bg-accent-soft text-accent">
                  <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
