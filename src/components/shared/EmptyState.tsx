import { CLAY_CARD, CLAY_ICON, claySurface } from "@/constants/clay";
import { ILLUSTRATIONS } from "@/constants/assets";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div
      className={cn(
        CLAY_CARD,
        claySurface("mint"),
        "flex flex-col items-center gap-2 py-10 text-center",
      )}
    >
      <img
        src={ILLUSTRATIONS.plant}
        alt=""
        draggable={false}
        className={cn(CLAY_ICON, "h-24")}
      />
      <p className="text-base font-extrabold text-foreground">{title}</p>
      <p className="text-sm font-medium text-muted-foreground">{description}</p>
    </div>
  );
}
