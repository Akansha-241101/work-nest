import { CLAY_CARD, CLAY_ICON, claySurface } from "@/constants/clay";
import { RECENT_ACTIVITY } from "@/data/dashboard";
import { cn } from "@/lib/utils";

export function RecentActivity() {
  return (
    <section
      aria-labelledby="activity-title"
      className={cn(CLAY_CARD, claySurface("peach"), "p-7")}
    >
      <h2 id="activity-title" className="text-lg font-bold">
        Recent Activity
      </h2>

      <ul className="mt-3 flex flex-col">
        {RECENT_ACTIVITY.map((activity) => (
          <li
            key={activity.id}
            className="flex items-center gap-3 border-b border-border/70 py-2.5 last:border-b-0"
          >
            <img
              src={activity.icon}
              alt=""
              draggable={false}
              className={cn(CLAY_ICON, "size-8")}
            />
            <span className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground/85">
              {activity.label}
            </span>
            <span className="shrink-0 text-xs font-semibold text-muted-foreground">
              {activity.time}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
