import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav, primaryCta } from "@/data/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    // The blur sits on a pseudo-element: backdrop-filter on the header itself would
    // become the containing block for the fixed mobile menu panel.
    <header className="sticky top-0 z-40 border-b border-line before:absolute before:inset-0 before:-z-10 before:bg-canvas/85 before:backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-18">
        <Logo />

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-control px-3.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          </div>
          <MobileMenu items={mainNav} cta={primaryCta} />
        </div>
      </Container>
    </header>
  );
}
