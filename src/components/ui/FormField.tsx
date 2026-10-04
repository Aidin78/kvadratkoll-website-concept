import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Shared styles for text inputs, selects and textareas. 16px text prevents iOS zoom on focus. */
export const fieldStyles =
  "block min-h-12 w-full rounded-control border border-line-strong bg-surface px-3.5 py-2.5 text-base text-ink transition-colors hover:border-ink focus:border-ink";

type FormFieldProps = {
  id: string;
  label: string;
  /** Shown after the label for non-required fields, e.g. "valfritt". */
  optionalLabel?: string;
  /** Helper text. The control should reference `${id}-hint` via aria-describedby. */
  hint?: string;
  className?: string;
  children: ReactNode;
};

export function FormField({ id, label, optionalLabel, hint, className, children }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {optionalLabel && <span className="font-normal text-muted"> ({optionalLabel})</span>}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      )}
    </div>
  );
}
