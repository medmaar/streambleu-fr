// Single source of truth for Stream Bleu prices (EUR).
// Index order: [1 Mois, 3 Mois, 6 Mois, 12 Mois]
export const PRICES: Record<number, [number, number, number, number]> = {
  1:  [9,   29,  39,  49],
  2:  [18,  50,  69,  89],
  3:  [27,  75,  105, 135],
  4:  [36,  99,  140, 180],
  5:  [45,  120, 175, 225],
  6:  [54,  144, 210, 270],
  7:  [63,  168, 245, 315],
  8:  [72,  192, 280, 360],
  9:  [81,  216, 315, 405],
  10: [90,  240, 350, 450],
};

export const DURATIONS = ["1 Mois", "3 Mois", "6 Mois", "12 Mois"] as const;

export function getPrice(devices: number, duration: string): number | undefined {
  const i = DURATIONS.indexOf(duration as (typeof DURATIONS)[number]);
  return i === -1 ? undefined : PRICES[devices]?.[i];
}
