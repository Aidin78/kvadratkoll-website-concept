import { Check, FileDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { floorPlanExample as plan } from "@/data/floor-plan-example";
import { site } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import type { Dictionary } from "@/i18n/types";
import { formatArea, formatLength } from "@/lib/format";

export async function FloorPlanExample() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const { example } = dict;

  const sumArea = (kind: "boa" | "bia") =>
    plan.rooms.filter((room) => room.kind === kind).reduce((total, room) => total + room.area, 0);

  return (
    <section
      id="example"
      aria-labelledby="example-title"
      className="section-y border-t border-line bg-surface"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:order-2 lg:col-span-5">
          <SectionHeading
            id="example-title"
            eyebrow={example.eyebrow}
            title={example.title}
            description={example.description}
          />

          <h3 className="mt-10 text-sm font-semibold">{example.includesTitle}</h3>
          <ul className="mt-4 space-y-3">
            {example.includes.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-sm font-semibold">{example.summaryTitle}</h3>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {[
              { label: example.livingArea, value: sumArea("boa") },
              { label: example.secondaryArea, value: sumArea("bia") },
            ].map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-muted">{row.label}</dt>
                <dd className="font-display text-lg font-semibold tabular-nums">
                  {formatArea(row.value, locale)}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={site.sampleDrawingHref}
            className="group mt-8 inline-flex min-h-11 items-start gap-3 rounded-control font-medium text-accent"
          >
            <FileDown className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span>
              <span className="underline-offset-4 group-hover:underline">{example.sampleLink}</span>{" "}
              <span className="text-sm font-normal whitespace-nowrap text-muted">({example.sampleLinkMeta})</span>
            </span>
          </a>
        </div>

        {/* Full-bleed on mobile so the drawing's labels stay legible. */}
        <figure className="-mx-5 border-y border-line bg-canvas p-3 sm:mx-0 sm:rounded-card sm:border sm:p-8 lg:order-1 lg:col-span-7">
          <FloorPlanDrawing locale={locale} example={example} />
          <figcaption className="mt-4 flex flex-col gap-3 px-2 text-xs text-muted sm:px-0 sm:flex-row sm:items-center sm:justify-between">
            <span>{example.figureCaption}</span>
            <span className="flex shrink-0 gap-4">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="size-3 border border-ink bg-surface" />
                BOA
              </span>
              <span className="inline-flex items-center gap-2">
                <svg aria-hidden="true" viewBox="0 0 12 12" className="size-3 stroke-ink">
                  <path d="M0 8L8 0M4 12L12 4" className="stroke-line-strong" strokeWidth="1.5" />
                  <rect x="0.5" y="0.5" width="11" height="11" fill="none" />
                </svg>
                BIA
              </span>
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

type FloorPlanDrawingProps = {
  locale: Locale;
  example: Dictionary["example"];
};

function FloorPlanDrawing({ locale, example }: FloorPlanDrawingProps) {
  const { outline, unitsPerMetre } = plan;
  const right = outline.x + outline.width;
  const bottom = outline.y + outline.height;
  // White halo behind labels keeps them legible over walls and hatching.
  const labelProps = { textAnchor: "middle", paintOrder: "stroke", strokeWidth: 4 } as const;

  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={example.figureLabel}
      className="h-auto w-full font-sans"
    >
      <defs>
        <pattern id="bia-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" className="stroke-line-strong" strokeWidth="1.5" />
        </pattern>
      </defs>

      <rect {...outline} className="fill-surface" />
      {plan.biaZones.map((zone) => (
        <rect key={`${zone.x}-${zone.y}`} {...zone} fill="url(#bia-hatch)" />
      ))}

      <g className="fill-none stroke-ink" strokeLinecap="square">
        {plan.walls.map((d) => (
          <path key={d} d={d} strokeWidth="3" />
        ))}
        <rect {...outline} strokeWidth="6" />
      </g>
      {/* Entrance opening cut out of the outer wall */}
      <rect x={plan.entrance.x} y={bottom - 4} width={plan.entrance.width} height="8" className="fill-surface" />
      <g className="fill-none stroke-muted" strokeWidth="1">
        {plan.doors.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      <g className="stroke-surface">
        {plan.rooms.map((room) => (
          <text key={room.id} x={room.label.x} y={room.label.y} {...labelProps}>
            {/* Larger type on mobile, where the drawing is scaled down. */}
            <tspan className="fill-ink text-sm font-semibold sm:text-xs">
              {example.rooms[room.id]}
            </tspan>
            <tspan x={room.label.x} dy="1.25em" className="fill-muted text-sm sm:text-xs">
              {formatArea(room.area, locale)}
            </tspan>
          </text>
        ))}
      </g>

      {/* Outer dimensions */}
      <g className="stroke-muted" strokeWidth="1">
        <path d={`M${outline.x} 8H${right}M${outline.x} 4V12M${right} 4V12`} />
        <path d={`M8 ${outline.y}V${bottom}M4 ${outline.y}H12M4 ${bottom}H12`} />
      </g>
      <g className="fill-muted stroke-surface" fontSize="10" {...labelProps}>
        <text x={outline.x + outline.width / 2} y="11.5">
          {formatLength(outline.width / unitsPerMetre, locale)}
        </text>
        <text
          x="11.5"
          y={outline.y + outline.height / 2}
          transform={`rotate(-90 11.5 ${outline.y + outline.height / 2})`}
        >
          {formatLength(outline.height / unitsPerMetre, locale)}
        </text>
      </g>
    </svg>
  );
}
