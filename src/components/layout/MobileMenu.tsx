"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types";

type MobileMenuProps = {
  items: NavItem[];
  cta: NavItem;
  labels: { nav: string; open: string; close: string };
};

export function MobileMenu({ items, cta, labels }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    // Close if the viewport grows past the breakpoint where the desktop nav appears.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        className="inline-flex size-11 items-center justify-center rounded-control text-ink transition-colors hover:bg-sand"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-canvas",
          "flex flex-col px-5 pt-6 pb-8 sm:px-8",
        )}
      >
        <nav aria-label={labels.nav}>
          <ul className="border-t border-line">
            {items.map((item, index) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex min-h-16 items-baseline gap-4 font-display text-3xl font-medium tracking-tighter"
                >
                  <span aria-hidden="true" className="label-mono text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href={cta.href} onClick={close} size="lg" className="mt-auto w-full">
          {cta.label}
          <ButtonArrow />
        </ButtonLink>
      </div>
    </div>
  );
}
