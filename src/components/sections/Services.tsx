import { Check } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceImages } from "@/data/images";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Service } from "@/types";

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
  return (
    // Image beside the text on tablet, where three narrow columns would cramp the copy.
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors duration-200 hover:border-line-strong sm:flex-row lg:flex-col">
      <Image
        src={serviceImages[service.id]}
        alt={service.imageAlt}
        placeholder="blur"
        sizes="(min-width: 64rem) 380px, (min-width: 40rem) 40vw, 100vw"
        className="aspect-3/2 w-full object-cover sm:aspect-auto sm:w-2/5 lg:aspect-3/2 lg:w-full"
      />
      <div className="flex flex-1 flex-col p-6 md:p-8">
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
