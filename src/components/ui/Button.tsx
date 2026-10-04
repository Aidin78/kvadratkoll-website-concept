import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "inverse" | "link";
type ButtonSize = "md" | "lg";

type ButtonStyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-white",
  // For dark sections (graphite or accent backgrounds)
  inverse: "bg-white text-ink hover:bg-sand",
  // Text action with an underline that darkens on hover
  link: "px-0! text-ink underline decoration-line-strong decoration-1 underline-offset-8 hover:decoration-ink",
};

// Both sizes keep a minimum 44px touch target.
const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-7 text-base",
};

export function buttonStyles({ variant = "primary", size = "md" }: ButtonStyleProps = {}) {
  return cn(
    "group inline-flex items-center justify-center gap-3 rounded-control font-medium whitespace-nowrap",
    "transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
  );
}

/** Arrow that nudges right when its button is hovered. */
export function ButtonArrow() {
  return (
    <ArrowRight
      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    />
  );
}

type ButtonProps = ButtonStyleProps & ComponentPropsWithoutRef<"button">;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonStyles({ variant, size }), className)} {...props} />
  );
}

type ButtonLinkProps = ButtonStyleProps & ComponentPropsWithoutRef<typeof Link>;

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}
