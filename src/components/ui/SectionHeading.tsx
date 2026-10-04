import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "inverted" for use on the dark accent background. */
  tone?: "default" | "inverted";
  /** Id for the heading, so the parent section can reference it with aria-labelledby. */
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-sm font-medium tracking-wide uppercase",
            tone === "inverted" ? "text-accent-soft" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "inverted" ? "text-white/80" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
