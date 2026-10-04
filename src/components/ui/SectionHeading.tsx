import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Section number shown before the eyebrow, e.g. "02". */
  index?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  /** "split" puts the description beside the title on large screens. */
  layout?: "stacked" | "split";
  /** "inverted" for dark backgrounds (graphite or accent). */
  tone?: "default" | "inverted";
  /** Id for the heading, so the parent section can reference it with aria-labelledby. */
  id?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  layout = "stacked",
  tone = "default",
  id,
  className,
}: SectionHeadingProps) {
  const inverted = tone === "inverted";

  return (
    <div
      className={cn(
        layout === "split" ? "grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10" : "max-w-3xl",
        className,
      )}
    >
      <div className={cn(layout === "split" && "lg:col-span-7")}>
        {eyebrow && (
          <p
            className={cn(
              "label-mono mb-6 flex items-center gap-3",
              inverted ? "text-accent-light" : "text-accent",
            )}
          >
            {index && <span>{index}</span>}
            {index && (
              <span aria-hidden="true" className={cn("h-px w-8", inverted ? "bg-accent-light" : "bg-accent")} />
            )}
            <span>{eyebrow}</span>
          </p>
        )}
        <h2
          id={id}
          className="text-4xl leading-display font-medium tracking-tighter sm:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed sm:text-lg",
            layout === "split" ? "lg:col-span-5 lg:pb-2" : "mt-6",
            inverted ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
