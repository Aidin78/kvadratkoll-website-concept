import { ArrowRight, Info } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { priceTables, surchargeAmounts } from "@/data/pricing";
import { sectionHref } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import type { Dictionary } from "@/i18n/types";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";
import type { PriceRow, PriceTable } from "@/types";

export async function Pricing() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const { pricing, nav } = dict;

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section-y border-t border-line">
      <Container>
        <SectionHeading
          id="pricing-title"
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />

        <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-2 lg:gap-6">
          {priceTables.map((table) => (
            <PriceCard key={table.id} table={table} pricing={pricing} locale={locale} />
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <ul className="grid gap-x-10 gap-y-4 text-sm text-muted sm:grid-cols-2 lg:col-span-8">
            {pricing.notes.map((note) => (
              <li key={note} className="flex gap-3">
                <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {note}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-start lg:col-span-4 lg:justify-end">
            <ButtonLink href={sectionHref(locale, nav.cta.section)} size="lg">
              {nav.cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

type PriceCardProps = {
  table: PriceTable;
  pricing: Dictionary["pricing"];
  locale: Locale;
};

function PriceCard({ table, pricing, locale }: PriceCardProps) {
  const labels = pricing.tables[table.id];
  const titleId = `price-${table.id}`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex flex-col rounded-card border border-line bg-surface p-6 md:p-8"
    >
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 id={titleId} className="text-xl font-semibold">
          {labels.title}
        </h3>
        <p className="text-sm text-muted">{labels.scope}</p>
      </header>

      <table aria-labelledby={titleId} className="mt-6 w-full text-left">
        <thead>
          <tr className="text-xs tracking-wide text-muted uppercase">
            <th scope="col" className="pb-3 font-medium">
              {pricing.areaColumn}
            </th>
            <th scope="col" className="pb-3 text-right font-medium">
              {pricing.priceColumn}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line border-y border-line">
          {table.rows.map((row) => (
            <tr key={row.minArea}>
              <th scope="row" className="py-3 font-normal tabular-nums">
                {formatAreaRange(row)}
              </th>
              <td className="py-3 text-right font-display font-semibold tabular-nums">
                {row.price === null ? pricing.onRequest : formatPrice(row.price, locale)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-8 text-sm font-semibold">{pricing.surchargesTitle}</h4>
      <dl className="mt-3 space-y-2 text-sm">
        {table.surcharges.map((id) => {
          const amount = surchargeAmounts[id];
          return (
            <div key={id} className="flex justify-between gap-4">
              <dt className="min-w-0 flex-1 text-muted">{pricing.surcharges[id]}</dt>
              {/* Amounts never wrap; the longer "by agreement" text may. */}
              <dd className={cn("text-right tabular-nums", amount === null ? "max-w-1/2" : "shrink-0")}>
                {amount === null ? pricing.byAgreement : `+${formatPrice(amount, locale)}`}
              </dd>
            </div>
          );
        })}
      </dl>
    </article>
  );
}

function formatAreaRange({ minArea, maxArea }: PriceRow) {
  return maxArea === null ? `${minArea}+ m²` : `${minArea}–${maxArea} m²`;
}
