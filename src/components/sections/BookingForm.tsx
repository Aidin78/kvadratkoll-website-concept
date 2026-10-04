"use client";

import { CircleCheck } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button, ButtonArrow } from "@/components/ui/Button";
import { FormField, fieldStyles } from "@/components/ui/FormField";
import type { Dictionary } from "@/i18n/types";
import { isPropertyType, propertyTypes, submitBookingRequest } from "@/lib/booking";

type Status = "idle" | "submitting" | "success" | "error";

type BookingFormProps = {
  labels: Dictionary["booking"]["form"];
};

export function BookingForm({ labels }: BookingFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so screen reader and keyboard users land on it.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = (key: string) => String(data.get(key) ?? "").trim();
    const propertyType = data.get("propertyType");
    if (!isPropertyType(propertyType)) return;

    setStatus("submitting");
    try {
      await submitBookingRequest({
        name: text("name"),
        phone: text("phone"),
        email: text("email"),
        address: text("address"),
        propertyType,
        unitNumber: text("unitNumber") || undefined,
        doorCode: text("doorCode") || undefined,
        message: text("message") || undefined,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="flex flex-col items-start gap-4 py-8">
        <CircleCheck className="size-10 text-accent" aria-hidden="true" strokeWidth={1.5} />
        <h3 className="text-3xl font-medium tracking-tight">{labels.successTitle}</h3>
        <p className="text-muted">{labels.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <h3 className="mb-2 text-2xl font-medium tracking-tight sm:col-span-2">{labels.title}</h3>

      <FormField id="booking-name" label={labels.name}>
        <input id="booking-name" name="name" required autoComplete="name" className={fieldStyles} />
      </FormField>
      <FormField id="booking-phone" label={labels.phone}>
        <input id="booking-phone" name="phone" type="tel" required autoComplete="tel" className={fieldStyles} />
      </FormField>
      <FormField id="booking-email" label={labels.email} className="sm:col-span-2">
        <input id="booking-email" name="email" type="email" required autoComplete="email" className={fieldStyles} />
      </FormField>
      <FormField id="booking-address" label={labels.address} className="sm:col-span-2">
        <input
          id="booking-address"
          name="address"
          required
          autoComplete="street-address"
          className={fieldStyles}
        />
      </FormField>
      <FormField id="booking-type" label={labels.propertyType}>
        <select id="booking-type" name="propertyType" required defaultValue="apartment" className={fieldStyles}>
          {propertyTypes.map((type) => (
            <option key={type} value={type}>
              {labels.propertyTypes[type]}
            </option>
          ))}
        </select>
      </FormField>
      <FormField id="booking-door-code" label={labels.doorCode} optionalLabel={labels.optional}>
        <input id="booking-door-code" name="doorCode" autoComplete="off" className={fieldStyles} />
      </FormField>
      <FormField
        id="booking-unit"
        label={labels.unitNumber}
        optionalLabel={labels.optional}
        hint={labels.unitNumberHint}
        className="sm:col-span-2"
      >
        <input id="booking-unit" name="unitNumber" aria-describedby="booking-unit-hint" className={fieldStyles} />
      </FormField>
      <FormField id="booking-message" label={labels.message} optionalLabel={labels.optional} className="sm:col-span-2">
        <textarea id="booking-message" name="message" rows={4} className={fieldStyles} />
      </FormField>

      <div className="flex flex-col gap-4 sm:col-span-2">
        <p aria-live="polite" className="text-sm text-danger empty:hidden">
          {status === "error" ? labels.errorText : ""}
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto sm:self-start">
          {status === "submitting" ? labels.submitting : labels.submit}
          {status !== "submitting" && <ButtonArrow />}
        </Button>
        <p className="text-xs text-muted">{labels.demoNotice}</p>
      </div>
    </form>
  );
}
