import type { PropertyType } from "@/types";

export const propertyTypes: readonly PropertyType[] = ["apartment", "house", "premises"];

export function isPropertyType(value: unknown): value is PropertyType {
  return propertyTypes.includes(value as PropertyType);
}

export type BookingRequest = {
  name: string;
  phone: string;
  email: string;
  address: string;
  propertyType: PropertyType;
  unitNumber?: string;
  doorCode?: string;
  message?: string;
};

const SIMULATED_LATENCY_MS = 600;

/**
 * Placeholder for the booking API. No backend exists yet, so this only simulates a request.
 * Replace the body with the real call (e.g. a fetch to the booking endpoint) once one exists.
 */
export async function submitBookingRequest(
  request: BookingRequest,
): Promise<{ received: BookingRequest }> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));
  return { received: request };
}
