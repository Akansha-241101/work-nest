import type { ClayTone } from "@/types/clay";

/** Light comes from the top, so every raised surface gets a soft top shine. */
export const CLAY_SHINE =
  "bg-linear-to-b from-white/60 via-white/15 to-white/0 dark:from-white/8 dark:via-white/2";

export const CLAY_CARD = "rounded-[1.75rem] p-6 shadow-clay";

export const CLAY_ICON =
  "shrink-0 select-none object-contain drop-shadow-[0_6px_8px_rgb(90_70_120/0.18)]";

export const CLAY_PILL =
  "rounded-full border-0 bg-card shadow-clay-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-px motion-reduce:transition-none";

export const TONE_BG: Record<ClayTone, string> = {
  lavender: "bg-clay-lavender",
  pink: "bg-clay-pink",
  mint: "bg-clay-mint",
  yellow: "bg-clay-yellow",
  blue: "bg-clay-blue",
  peach: "bg-clay-peach",
};

export const TONE_INK: Record<ClayTone, string> = {
  lavender: "text-clay-lavender-ink",
  pink: "text-clay-pink-ink",
  mint: "text-clay-mint-ink",
  yellow: "text-clay-yellow-ink",
  blue: "text-clay-blue-ink",
  peach: "text-clay-yellow-ink",
};

export function claySurface(tone: ClayTone) {
  return `${TONE_BG[tone]} ${CLAY_SHINE}`;
}
