import { Check, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { BookingForm } from "./BookingForm";

// Links on the dark background need a light focus ring instead of the default accent one.
const contactLinkStyles =
  "group flex items-start gap-4 rounded-card border border-white/15 p-5 transition-colors hover:border-white/40 focus-visible:outline-white";

export async function Booking() {
  const { booking } = await getDictionary();

  return (
    <section id="booking" aria-labelledby="booking-title" className="section-y bg-accent text-white">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="booking-title"
            tone="inverted"
            eyebrow={booking.eyebrow}
            title={booking.title}
            description={booking.description}
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a href={`mailto:${site.email}`} className={contactLinkStyles}>
              <Mail className="mt-0.5 size-5 shrink-0 text-accent-soft" aria-hidden="true" />
              <span>
                <span className="block text-sm text-white/70">{booking.emailLabel}</span>
                <span className="block text-lg font-semibold break-all">{site.email}</span>
              </span>
            </a>
            <a href={site.phoneHref} className={contactLinkStyles}>
              <Phone className="mt-0.5 size-5 shrink-0 text-accent-soft" aria-hidden="true" />
              <span>
                <span className="block text-sm text-white/70">{booking.phoneLabel}</span>
                <span className="block text-lg font-semibold">{site.phone}</span>
                <span className="block text-sm text-white/70">{booking.phoneNote}</span>
              </span>
            </a>
          </div>

          <h3 className="mt-10 text-sm font-semibold">{booking.checklistTitle}</h3>
          <ul className="mt-4 space-y-2.5 text-white/80">
            {booking.checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-accent-soft" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-card bg-surface p-6 text-ink shadow-soft sm:p-8 lg:col-span-7 lg:p-10">
          <BookingForm labels={booking.form} />
        </div>
      </Container>
    </section>
  );
}
