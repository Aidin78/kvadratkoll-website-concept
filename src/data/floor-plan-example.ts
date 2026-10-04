import type { FloorPlanRoomId } from "@/types";

/**
 * Made-up apartment used to illustrate the documentation format. Not a real measurement.
 * Coordinates are SVG units in a 400 × 300 viewBox, at 40 units per metre.
 */
export const floorPlanExample = {
  unitsPerMetre: 40,
  outline: { x: 20, y: 20, width: 360, height: 260 },
  rooms: [
    { id: "living", kind: "boa", area: 18.8, label: { x: 120, y: 95 } },
    { id: "kitchen", kind: "boa", area: 11.0, label: { x: 300, y: 75 } },
    { id: "bedroom", kind: "boa", area: 15.0, label: { x: 300, y: 205 } },
    { id: "hall", kind: "boa", area: 5.3, label: { x: 100, y: 195 } },
    { id: "bathroom", kind: "boa", area: 6.2, label: { x: 178, y: 240 } },
    { id: "storage", kind: "bia", area: 2.3, label: { x: 50, y: 250 } },
  ] satisfies { id: FloorPlanRoomId; kind: "boa" | "bia"; area: number; label: { x: number; y: number } }[],
  /** Hatched secondary-area (BIA) zones. */
  biaZones: [{ x: 20, y: 220, width: 60, height: 60 }],
  /** Interior wall segments; gaps between segments are door openings. */
  walls: [
    "M220 20V50", "M220 110V140", "M220 165V280",
    "M220 130H380",
    "M20 170H50", "M110 170H220",
    "M130 170V190", "M130 220V280",
    "M20 220H80", "M80 220V230", "M80 255V280",
  ],
  /** Door leaf and swing arc for each opening. */
  doors: [
    "M220 140H245A25 25 0 0 1 220 165",
    "M130 190H160A30 30 0 0 1 130 220",
    "M80 230H105A25 25 0 0 1 80 255",
    "M125 280V248A32 32 0 0 0 93 280",
  ],
  /** Gap in the outer wall for the entrance door. */
  entrance: { x: 93, width: 32 },
};
