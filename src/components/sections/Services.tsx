import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceImages } from "@/data/images";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Service } from "@/types";

export async function Services() {
  const { services } = await getDictionary();

  return (
    <section id="services" aria-labelledby="services-title" className="section-y bg-surface">
      <Container>
        <SectionHeading
          id="services-title"
          index="01"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          layout="split"
        />
        <ol className="mt-16 border-b border-line md:mt-24">
          {services.items.map((service, index) => (
            <ServiceRow key={service.id} service={service} number={index + 1} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ServiceRow({ service, number }: { service: Service; number: number }) {
  return (
    <li className="grid gap-6 border-t border-ink py-10 md:grid-cols-12 md:gap-x-10 md:py-14">
      <div className="md:col-span-5 lg:col-span-4">
        <p aria-hidden="true" className="label-mono text-accent">
          {String(number).padStart(2, "0")}
        </p>
        <h3 className="mt-4 text-3xl font-medium tracking-tighter lg:text-4xl">{service.title}</h3>
      </div>

      <div className="md:col-span-7 lg:col-span-4">
        <p className="leading-relaxed text-muted lg:text-lg">{service.description}</p>
        <ul className="mt-6 space-y-3 text-sm">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              {/* Small filled square, echoing the squares in the Kvadratkoll logo */}
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={serviceImages[service.id]}
        alt={service.imageAlt}
        placeholder="blur"
        sizes="(min-width: 64rem) 380px, (min-width: 48rem) 55vw, 100vw"
        className="aspect-3/2 w-full object-cover md:col-span-7 md:col-start-6 lg:col-span-4 lg:col-start-auto lg:aspect-4/3"
      />
    </li>
  );
}
