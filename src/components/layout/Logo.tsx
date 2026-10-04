import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  href: string;
  /** Accessible name for the link, e.g. "Kvadratkoll, till startsidan". */
  label: string;
  className?: string;
};

/** Placeholder wordmark for the concept, not the official Kvadratkoll logo. */
export function Logo({ href, label, className }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("inline-flex min-h-11 items-center gap-2.5 rounded-control", className)}
      aria-label={label}
    >
      <span aria-hidden="true" className="relative size-6 rounded-sm border-2 border-ink">
        <span className="absolute right-0.5 bottom-0.5 size-2 rounded-xs bg-accent" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
    </Link>
  );
}
