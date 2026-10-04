import { BadgeCheck, CalendarCheck, FileText, Ruler, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
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
    <section id="why" aria-labelledby="why-title" className="section-y">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* The instrument itself: the laser measurer used on every job */}
        <figure className="relative -mx-5 sm:mx-0 lg:col-span-5 lg:row-span-2">
          <Image
            src={images.laserMeasurer}
            alt={why.imageAlt}
            placeholder="blur"
            sizes="(min-width: 64rem) 460px, 100vw"
            className="aspect-4/3 w-full object-cover sm:aspect-video lg:aspect-auto lg:h-full lg:max-h-176"
          />
          <figcaption
            aria-hidden="true"
            className="label-mono absolute bottom-0 left-0 bg-canvas px-4 py-3 text-ink"
          >
            Leica DISTO D8
          </figcaption>
        </figure>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading id="why-title" index="03" eyebrow={why.eyebrow} title={why.title} description={why.description} />
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:self-end">
          {why.items.map((item) => {
            const Icon = benefitIcons[item.icon];
            return (
              <li key={item.title} className="border-t border-ink py-8">
                <Icon className="size-6 text-accent" aria-hidden="true" strokeWidth={1.25} />
                <h3 className="mt-5 text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
