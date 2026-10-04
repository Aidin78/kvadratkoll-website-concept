import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

/** Placeholder wordmark for the concept, not the official Kvadratkoll logo. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex min-h-11 items-center gap-2.5 rounded-control", className)}
      aria-label={`${site.name}, till startsidan`}
    >
      <span aria-hidden="true" className="relative size-6 rounded-sm border-2 border-ink">
        <span className="absolute right-0.5 bottom-0.5 size-2 rounded-xs bg-accent" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
    </Link>
  );
}
