# Kvadratkoll: website redesign

A frontend redesign proposal for [Kvadratkoll](https://www.kvadratkoll.se), a Stockholm company that does certified area measurement of homes and commercial premises. It's built with Next.js, TypeScript and Tailwind CSS.

> **Status:** design proposal, not the live website. Pages are `noindex` until the client approves the redesign.

**Live demo:** _add link after deploying_ · Swedish at `/sv`, English at `/en`

---

## Goals

The current site spreads its content over nine separate pages, and its strongest trust signals are buried in body text: more than 7,000 measurements, SIS certification and the SS 21054:2020 standard. The redesign:

- **One page, ordered for the customer:** services → process → why us → certificate → pricing → FAQ → booking.
- **Trust up front:** the SIS badge sits in the hero, with a trust band of figures right below it.
- **Readable pricing:** the full price list becomes clear tables, laid out like a quote sheet.
- **Bilingual:** Swedish (primary) and English.
- **Mobile-first:** layouts are designed for small screens, not just stacked.

## Design direction: the architectural drawing

The visual language comes from what the company actually delivers, which is measurements and floor plans.

- **Palette:** cool stone paper, graphite ink and a single deep Scandinavian blue accent, like annotations on a construction drawing.
- **Typography:** large, tight display headings (Inter Tight), Inter for body text, and IBM Plex Mono for technical annotations: section numbers, dimensions, m².
- **Brand details:** dimension lines over the hero photo, graph paper behind the floor plan, a measuring-ruler motif, and small squares that echo the logo.
- **Restraint:** no shadows, gradients or large radii. Images have square corners.
- **Section rhythm:** stone → white → graphite → stone → white → stone → white → blue → graphite.

The memorable "brand moment" is the certificate section. It presents an illustrative floor plan as a drawing sheet, with a title block, room areas and a large total-area readout.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components by default, statically generated)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with design tokens in `@theme`
- [lucide-react](https://lucide.dev) icons
- `next/font` (self-hosted Google Fonts) and `next/image`

There's no backend. The booking form is UI only and uses a typed placeholder, `submitBookingRequest()`, ready to connect to a real API.

## Features

- **i18n routing** with `app/[lang]`. `/` redirects to `/sv`, and the language switcher keeps the current path.
- **Typed dictionaries:** Swedish and English share one `Dictionary` type, so a missing translation fails the type check.
- **Locale-aware formatting** for areas, lengths and prices (`56,3 m²` / `56.3 m²`, `1 900 kr` / `SEK 1,900`).
- **Localized 404 pages,** plus a global 404 for URLs without a valid locale.
- **Accessible components:** semantic landmarks, skip link, native `<details>` FAQ, labelled form fields with focus management, visible focus rings and reduced-motion support.
- **Minimal client JavaScript:** only the mobile menu, language switcher and booking form are client components.

## Quality

Measured locally on a production build:

| Check | Result |
| --- | --- |
| axe-core (WCAG 2.1 AA + best practices) | 0 violations, both locales, desktop and mobile |
| Lighthouse desktop | Performance 100 · Accessibility 100 · Best Practices 100 |
| Cumulative Layout Shift | 0 |

SEO scores lower on purpose, because pages are `noindex` while the site is a proposal.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /sv
```

| Command             | Description                                |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Start the dev server                       |
| `npm run build`     | Production build                           |
| `npm run start`     | Serve the production build                 |
| `npm run lint`      | ESLint                                     |
| `npm run typecheck` | Generate route types and run `tsc`         |

## Project structure

```
src/
  app/
    [lang]/            # root layout, homepage, localized 404 and catch-all
    global-not-found.tsx
    globals.css        # design tokens and utilities (Tailwind v4 @theme)
  components/
    layout/            # Navbar, MobileMenu, LanguageSwitcher, Footer, Logo
    sections/          # Hero, TrustIndicators, Services, Process, WhyUs,
                       # FloorPlanExample, Pricing, Faq, Booking, BookingForm
    ui/                # Button, Container, SectionHeading, FormField
  data/                # locale-independent data: site info, pricing, images, floor plan geometry
  i18n/                # locale config, typed sv/en dictionaries, getDictionary()
  lib/                 # formatting, booking placeholder, class helper
  assets/images/       # client logo, SIS badge and photos
```

[`CLAUDE.md`](CLAUDE.md) documents the architecture, design system and conventions in more detail.

## Deployment

Import the repository on [Vercel](https://vercel.com). The framework is detected automatically, and no environment variables are needed. Every push to `main` deploys.

## Content and credits

- **Facts and contact details:** business facts, prices and contact details come from [kvadratkoll.se](https://www.kvadratkoll.se) (October 2026). No claims are invented.
- **Client assets:** the logo, SIS badge, photos and example drawing belong to Kvadratkoll i Stockholm AB and are used for this proposal.
- **Illustration:** the floor plan in the certificate section is an illustration with made-up measurements, and is labelled as such.
