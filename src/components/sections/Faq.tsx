import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Faq() {
  const { faq } = await getDictionary();

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y border-t border-line bg-surface">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading
            id="faq-title"
            eyebrow={faq.eyebrow}
            title={faq.title}
            description={faq.description}
          />
          <p className="mt-6 flex flex-col gap-1 text-sm">
            <a href={`mailto:${site.email}`} className="w-fit font-medium underline-offset-4 hover:underline">
              {site.email}
            </a>
            <a href={site.phoneHref} className="w-fit font-medium underline-offset-4 hover:underline">
              {site.phone}
            </a>
          </p>
        </div>

        {/* Native details/summary: keyboard accessible and works without JavaScript. */}
        <div className="divide-y divide-line border-y border-line lg:col-span-8">
          {faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-6 py-5 font-display text-lg font-semibold tracking-tight">
                {item.question}
                <Plus
                  className="size-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
