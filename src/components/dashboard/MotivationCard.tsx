import { CLAY_CARD, CLAY_ICON, claySurface } from "@/constants/clay";
import { ILLUSTRATIONS } from "@/constants/assets";
import { cn } from "@/lib/utils";

export function MotivationCard() {
  return (
    <section
      aria-label="Encouragement"
      className={cn(
        CLAY_CARD,
        claySurface("lavender"),
        "relative flex min-h-36 items-center overflow-hidden p-7",
      )}
    >
      <div className="relative z-10 max-w-[58%]">
        <p className="text-xl leading-tight font-extrabold text-clay-lavender-ink">
          You&apos;re doing amazing!
        </p>
        <p className="mt-2 text-sm font-semibold text-foreground/70">
          Keep up the good work <span aria-hidden="true">✨</span>
        </p>
      </div>
      <img
        src={ILLUSTRATIONS.rabbit}
        alt=""
        draggable={false}
        className={cn(CLAY_ICON, "absolute right-2 bottom-1 h-34 w-auto")}
      />
    </section>
  );
}
