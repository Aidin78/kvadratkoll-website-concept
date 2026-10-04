import type { StaticImageData } from "next/image";
import floorPlanDrawings from "@/assets/images/floor-plan-drawings.jpg";
import interiorDining from "@/assets/images/interior-dining.jpg";
import interiorLiving from "@/assets/images/interior-living.jpg";
import interiorWorkspace from "@/assets/images/interior-workspace.jpg";
import laserMeasurer from "@/assets/images/laser-measurer.jpg";
import logo from "@/assets/images/kvadratkoll-logo.png";
import sisBadge from "@/assets/images/sis-diplomerad-areamatare.png";
import type { ServiceId } from "@/types";

/**
 * Brand assets and photos from kvadratkoll.se, converted to sRGB. The logo and SIS badge
 * were made transparent so they sit on any light background. Alt texts live in the dictionaries.
 */
export const images = {
  logo,
  sisBadge,
  hero: interiorDining,
  laserMeasurer,
} satisfies Record<string, StaticImageData>;

export const serviceImages: Record<ServiceId, StaticImageData> = {
  residential: interiorLiving,
  commercial: interiorWorkspace,
  "floor-plans": floorPlanDrawings,
};
