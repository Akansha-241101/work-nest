import { CLAY_ICON } from "@/constants/clay";
import { ILLUSTRATIONS } from "@/constants/assets";
import { cn } from "@/lib/utils";

export function SidebarBreakCard() {
  return (
    <div className="flex flex-col items-center gap-2 rounded-[1.5rem] bg-linear-to-b from-card to-clay-peach px-4 pt-4 pb-5 text-center shadow-clay">
      <img
        src={ILLUSTRATIONS.plant}
        alt=""
        draggable={false}
        className={cn(CLAY_ICON, "h-16 w-auto")}
      />
      <p className="text-sm leading-snug font-semibold text-sidebar-foreground/85">
        Take breaks,
        <br />
        stay positive <span aria-hidden="true">🌸</span>
      </p>
    </div>
  );
}
