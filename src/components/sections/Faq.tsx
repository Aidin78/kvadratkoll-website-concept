import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Faq() {
  const { faq } = await getDictionary();

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y bg-surface">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading id="faq-title" index="06" eyebrow={faq.eyebrow} title={faq.title} description={faq.description} />
          <p className="mt-8 flex flex-col gap-1 font-mono text-sm">
            <a href={`mailto:${site.email}`} className="w-fit underline-offset-8 hover:underline">
              {site.email}
            </a>
            <a href={site.phoneHref} className="w-fit underline-offset-8 hover:underline">
              {site.phone}
            </a>
          </p>
        </div>

        {/* Native details/summary: keyboard accessible and works without JavaScript. */}
        <div className="border-b border-line lg:col-span-7 lg:col-start-6">
          {faq.items.map((item, index) => (
            <details key={item.question} className="group border-t border-line first:border-ink">
              <summary className="flex min-h-11 cursor-pointer items-baseline gap-5 py-6 sm:gap-8">
                <span aria-hidden="true" className="label-mono w-6 shrink-0 text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-lg font-medium tracking-tight sm:text-xl">
                  {item.question}
                </span>
                <Plus
                  className="size-5 shrink-0 self-center text-ink transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </summary>
              <p className="max-w-2xl pb-8 pl-11 leading-relaxed text-muted sm:pl-14">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
