import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { cn } from "@/lib/cn";

type LogoProps = {
  href: string;
  /** Accessible name for the link, e.g. "Kvadratkoll, till startsidan". */
  label: string;
  /** Load immediately instead of lazily; use for the header logo, which is always above the fold. */
  eager?: boolean;
  /** White logo for dark backgrounds. */
  inverted?: boolean;
  className?: string;
};

export function Logo({ href, label, eager = false, inverted = false, className }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn("inline-flex min-h-11 items-center rounded-control", className)}
    >
      {/* Smaller on phones so the logo, language switch and menu button fit at 320px. */}
      <Image
        src={images.logo}
        alt=""
        loading={eager ? "eager" : "lazy"}
        className={cn("h-5 w-auto sm:h-6", inverted && "invert")}
        sizes="220px"
      />
    </Link>
  );
}
