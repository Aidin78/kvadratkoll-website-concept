import { Building2, Check, DraftingCompass, House, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Service, ServiceIcon } from "@/types";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  house: House,
  building: Building2,
  "floor-plan": DraftingCompass,
};

export async function Services() {
  const { services } = await getDictionary();

  return (
    <section id="services" aria-labelledby="services-title" className="section-y">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />
        <ul className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.items.map((service) => (
            <li key={service.id}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    // Horizontal on tablet, where three narrow columns would cramp the copy.
    <article className="flex h-full flex-col gap-6 rounded-card border border-line bg-surface p-6 transition-colors duration-200 hover:border-line-strong sm:flex-row sm:gap-8 md:p-8 lg:flex-col lg:gap-6">
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-control bg-accent-soft text-accent">
        <Icon className="size-6" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
        <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm">
          {service.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
