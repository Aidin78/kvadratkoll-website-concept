import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/i18n/get-dictionary";

export async function TrustIndicators() {
  const { trust } = await getDictionary();
  const hasPlaceholders = trust.items.some((item) => !item.confirmed);

  return (
    <section
      id="trust"
      aria-labelledby="trust-title"
      className="border-y border-line bg-surface py-12 md:py-16"
    >
      <Container>
        <h2 id="trust-title" className="sr-only">
          {trust.title}
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {trust.items.map((item) => (
            // dt holds the label so screen readers announce "label: value".
            <div key={item.label} className="flex flex-col-reverse gap-2 border-l-2 border-accent pl-4 md:pl-5">
              <dt className="text-sm leading-snug text-muted">{item.label}</dt>
              <dd className="font-display text-xl font-semibold tracking-tight sm:text-3xl">
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
        {hasPlaceholders && <p className="mt-10 text-xs text-muted">* {trust.placeholderNote}</p>}
      </Container>
    </section>
  );
}
