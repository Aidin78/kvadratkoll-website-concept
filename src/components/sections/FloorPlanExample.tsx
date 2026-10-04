import { FileDown } from "lucide-react";
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
  // "56,3 m²" → number and unit styled separately in the large readout
  const [livingNumber, livingUnit] = formatArea(sumArea("boa"), locale).split(" ");

  return (
    <section id="example" aria-labelledby="example-title" className="section-y bg-surface">
      <Container>
        <SectionHeading
          id="example-title"
          index="04"
          eyebrow={example.eyebrow}
          title={example.title}
          description={example.description}
          layout="split"
        />

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-10">
          {/* Drawing sheet: graph paper, the plan, and a title block like a real drawing */}
          <figure className="-mx-5 border-y border-line sm:mx-0 sm:border lg:col-span-8">
            <div className="bg-graph p-3 sm:p-8 lg:p-12">
              <FloorPlanDrawing locale={locale} example={example} />
            </div>
            <figcaption className="grid border-t border-line text-xs sm:grid-cols-3">
              <span className="label-mono border-b border-line px-4 py-3 text-ink sm:border-r sm:border-b-0">
                {site.name}
              </span>
              <span className="border-b border-line px-4 py-3 text-muted sm:border-r sm:border-b-0">
                {example.figureCaption}
              </span>
              <span className="label-mono flex items-center gap-5 px-4 py-3 text-ink">
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

          <div className="flex flex-col lg:col-span-4">
            <h3 className="label-mono text-accent">{example.summaryTitle}</h3>
            <dl className="mt-6">
              <div className="border-b border-ink pb-6">
                <dt className="text-sm text-muted">{example.livingArea}</dt>
                <dd className="mt-2 flex items-baseline gap-2 font-display font-light tracking-tighter text-accent">
                  <span className="text-7xl tabular-nums lg:text-8xl">{livingNumber}</span>
                  <span className="text-3xl">{livingUnit}</span>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                <dt className="text-sm text-muted">{example.secondaryArea}</dt>
                <dd className="font-mono text-sm tabular-nums">{formatArea(sumArea("bia"), locale)}</dd>
              </div>
            </dl>

            <h3 className="label-mono mt-10 text-accent">{example.includesTitle}</h3>
            <ol className="mt-4">
              {example.includes.map((item, index) => (
                <li key={item} className="flex gap-4 border-b border-line py-3 text-sm">
                  <span aria-hidden="true" className="font-mono text-muted tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>

            <a
              href={site.sampleDrawingHref}
              className="group mt-10 inline-flex min-h-11 items-start gap-3 rounded-control font-medium text-accent lg:mt-auto lg:pt-10"
            >
              <FileDown className="mt-0.5 size-5 shrink-0" aria-hidden="true" strokeWidth={1.5} />
              <span>
                <span className="underline decoration-accent/30 underline-offset-8 group-hover:decoration-accent">
                  {example.sampleLink}
                </span>{" "}
                <span className="font-mono text-xs font-normal whitespace-nowrap text-muted">
                  ({example.sampleLinkMeta})
                </span>
              </span>
            </a>
          </div>
        </div>
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
  // Halo behind labels keeps them legible over walls and hatching.
  const labelProps = { textAnchor: "middle", paintOrder: "stroke", strokeWidth: 4 } as const;

  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={example.figureLabel} className="h-auto w-full font-sans">
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
            <tspan className="fill-ink text-sm font-medium sm:text-xs">{example.rooms[room.id]}</tspan>
            <tspan x={room.label.x} dy="1.3em" className="fill-accent font-mono text-sm sm:text-xs">
              {formatArea(room.area, locale)}
            </tspan>
          </text>
        ))}
      </g>

      {/* Outer dimensions, drawn in the accent colour like annotations on a plan */}
      <g className="stroke-accent" strokeWidth="1">
        <path d={`M${outline.x} 8H${right}M${outline.x} 4V12M${right} 4V12`} />
        <path d={`M8 ${outline.y}V${bottom}M4 ${outline.y}H12M4 ${bottom}H12`} />
      </g>
      {/* Wider halo so the dimension line breaks cleanly around the label */}
      <g className="fill-accent stroke-surface font-mono text-sm sm:text-xs" {...labelProps} strokeWidth={10}>
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
