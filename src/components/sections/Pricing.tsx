import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
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
    <section id="pricing" aria-labelledby="pricing-title" className="section-y">
      <Container>
        <SectionHeading
          id="pricing-title"
          index="05"
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
          layout="split"
        />

        <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-2 lg:gap-10">
          {priceTables.map((table) => (
            <PriceSheet key={table.id} table={table} pricing={pricing} locale={locale} />
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink pt-10 lg:grid-cols-12">
          <ol className="grid gap-x-10 gap-y-4 text-sm text-muted sm:grid-cols-2 lg:col-span-8">
            {pricing.notes.map((note, index) => (
              <li key={note} className="flex gap-3">
                <span aria-hidden="true" className="font-mono text-accent">
                  ({index + 1})
                </span>
                {note}
              </li>
            ))}
          </ol>
          <div className="flex flex-col sm:flex-row sm:items-start lg:col-span-4 lg:justify-end">
            <ButtonLink href={sectionHref(locale, nav.cta.section)} size="lg">
              {nav.cta.label}
              <ButtonArrow />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

type PriceSheetProps = {
  table: PriceTable;
  pricing: Dictionary["pricing"];
  locale: Locale;
};

function PriceSheet({ table, pricing, locale }: PriceSheetProps) {
  const labels = pricing.tables[table.id];
  const titleId = `price-${table.id}`;

  return (
    <article aria-labelledby={titleId} className="border-t-2 border-ink">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-5">
        <h3 id={titleId} className="text-2xl font-medium tracking-tight">
          {labels.title}
        </h3>
        <p className="label-mono text-muted">{labels.scope}</p>
      </header>

      <table aria-labelledby={titleId} className="w-full text-left">
        <thead>
          <tr className="label-mono border-y border-line text-muted">
            <th scope="col" className="py-3 font-medium">
              {pricing.areaColumn}
            </th>
            <th scope="col" className="py-3 text-right font-medium">
              {pricing.priceColumn}
            </th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.minArea} className="border-b border-line">
              <th scope="row" className="py-4 font-mono text-sm font-normal tabular-nums">
                {formatAreaRange(row)}
              </th>
              <td className="py-4 text-right font-display text-lg font-medium tabular-nums">
                {row.price === null ? (
                  <span className="text-accent">{pricing.onRequest}</span>
                ) : (
                  formatPrice(row.price, locale)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="label-mono mt-10 text-accent">{pricing.surchargesTitle}</h4>
      <dl className="mt-4 space-y-3 text-sm">
        {table.surcharges.map((id) => {
          const amount = surchargeAmounts[id];
          return (
            // Dotted leader between label and amount, as on a printed price list
            <div key={id} className="flex items-baseline gap-3">
              <dt className="text-muted">{pricing.surcharges[id]}</dt>
              <span aria-hidden="true" className="min-w-4 flex-1 border-b border-dotted border-line-strong" />
              {/* Amounts never wrap; the longer "by agreement" text may on small screens. */}
              <dd className={cn("text-right font-mono tabular-nums", amount === null ? "max-w-1/2" : "shrink-0")}>
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
