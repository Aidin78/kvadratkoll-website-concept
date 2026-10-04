import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";

export async function TrustIndicators() {
  const { trust } = await getDictionary();
  const hasPlaceholders = trust.items.some((item) => !item.confirmed);

  return (
    <section id="trust" aria-labelledby="trust-title" className="border-b border-line">
      <Container>
        <h2 id="trust-title" className="sr-only">
          {trust.title}
        </h2>
        {/* Vertical rules separate the figures; the first figure in each row sits on the page margin. */}
        <dl className="grid grid-cols-2 gap-y-2 py-6 sm:py-8 lg:grid-cols-4">
          {trust.items.map((item, index) => (
            // dt holds the label so screen readers announce "label: value".
            <div
              key={item.label}
              className={cn(
                "flex flex-col-reverse justify-end gap-3 border-line py-4 pr-4 sm:pr-6",
                // Two columns on phones and tablets, four in one row on desktop
                index % 2 === 1 && "border-l pl-4 sm:pl-6",
                index > 0 && "lg:border-l lg:pl-8",
              )}
            >
              <dt className="max-w-48 text-sm leading-snug text-muted">{item.label}</dt>
              <dd className="font-display text-2xl font-medium tracking-tighter sm:text-4xl xl:text-5xl">
                {item.value}
                {!item.confirmed && (
                  <span aria-hidden="true" className="text-accent">
                    *
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
        {hasPlaceholders && <p className="pb-6 text-xs text-muted">* {trust.placeholderNote}</p>}
      </Container>
    </section>
  );
}
