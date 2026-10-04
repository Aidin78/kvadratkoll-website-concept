import type { PriceTable, SurchargeId } from "@/types";

/**
 * Price list from kvadratkoll.se/priser (fetched October 2026). Prices in SEK including VAT.
 * The source lists the second-to-last apartment bracket as "249–300"; it is shown as 250–300 here.
 */
export const priceTables: PriceTable[] = [
  {
    id: "apartment",
    rows: [
      { minArea: 1, maxArea: 39, price: 1900 },
      { minArea: 40, maxArea: 64, price: 2200 },
      { minArea: 65, maxArea: 99, price: 2600 },
      { minArea: 100, maxArea: 149, price: 3300 },
      { minArea: 150, maxArea: 199, price: 3800 },
      { minArea: 200, maxArea: 249, price: 4500 },
      { minArea: 250, maxArea: 300, price: 5100 },
      { minArea: 300, maxArea: null, price: null },
    ],
    surcharges: ["inner-suburb", "outer-suburb-apartment", "sloped-ceiling", "express", "cancellation"],
  },
  {
    id: "house",
    rows: [
      { minArea: 1, maxArea: 149, price: 3500 },
      { minArea: 150, maxArea: 249, price: 4000 },
      { minArea: 250, maxArea: 349, price: 4500 },
      { minArea: 350, maxArea: 449, price: 5500 },
      { minArea: 450, maxArea: null, price: null },
    ],
    surcharges: ["outbuilding", "outer-suburb-house", "express"],
  },
];

/** Surcharge amounts in SEK including VAT. Null means by agreement. */
export const surchargeAmounts: Record<SurchargeId, number | null> = {
  "inner-suburb": 300,
  "outer-suburb-apartment": 600,
  "sloped-ceiling": 800,
  cancellation: 1500,
  outbuilding: 500,
  "outer-suburb-house": 300,
  express: null,
};
