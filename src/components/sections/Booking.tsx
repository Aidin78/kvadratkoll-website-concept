import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { BookingForm } from "./BookingForm";

// Links on the dark background need a light focus ring instead of the default accent one.
const contactLinkStyles =
  "group block border-t border-white/20 py-6 transition-colors hover:border-white focus-visible:outline-white";

export async function Booking() {
  const { booking } = await getDictionary();

  return (
    <section id="booking" aria-labelledby="booking-title" className="section-y bg-accent text-white">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            id="booking-title"
            index="07"
            tone="inverted"
            eyebrow={booking.eyebrow}
            title={booking.title}
            description={booking.description}
          />

          <div className="mt-12">
            <a href={site.phoneHref} className={contactLinkStyles}>
              <span className="label-mono block text-accent-light">{booking.phoneLabel}</span>
              <span className="mt-2 block font-display text-3xl font-medium tracking-tighter sm:text-4xl">
                {site.phone}
              </span>
              <span className="mt-1 block text-sm text-white/65">{booking.phoneNote}</span>
            </a>
            <a href={`mailto:${site.email}`} className={contactLinkStyles}>
              <span className="label-mono block text-accent-light">{booking.emailLabel}</span>
              <span className="mt-2 block font-display text-2xl font-medium tracking-tight break-all sm:text-3xl">
                {site.email}
              </span>
            </a>
          </div>

          <h3 className="label-mono mt-10 text-accent-light">{booking.checklistTitle}</h3>
          <ol className="mt-4 text-white/80">
            {booking.checklist.map((item, index) => (
              <li key={item} className="flex gap-4 border-b border-white/15 py-3 text-sm">
                <span aria-hidden="true" className="font-mono text-accent-light tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-surface p-6 text-ink sm:p-10 lg:col-span-6 lg:col-start-7 lg:self-start lg:p-12">
          <BookingForm labels={booking.form} />
        </div>
      </Container>
    </section>
  );
}
