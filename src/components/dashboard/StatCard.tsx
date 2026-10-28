import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { CLAY_CARD, CLAY_ICON, claySurface } from "@/constants/clay";
import { cn } from "@/lib/utils";
import type { DashboardStat, StatTrend } from "@/types/dashboard";

function TrendBadge({ trend }: { trend: StatTrend }) {
  const isUp = trend.direction === "up";
  const Icon = isUp ? ArrowUpRight : ArrowDownRight;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[0.7rem] font-extrabold shadow-clay-inset",
        isUp ? "bg-chart-2/20 text-clay-mint-ink" : "bg-destructive/12 text-destructive",
      )}
    >
      <Icon aria-hidden="true" strokeWidth={3} className="size-3" />
      <span className="sr-only">{isUp ? "Up" : "Down"}</span>
      {trend.value}
    </span>
  );
}

type StatCardProps = {
  stat: DashboardStat;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <article
      className={cn(
        CLAY_CARD,
        claySurface(stat.tone),
        "flex items-center gap-4 p-5",
      )}
    >
      <img
        src={stat.icon}
        alt=""
        draggable={false}
        className={cn(CLAY_ICON, "size-16")}
      />
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-sm font-bold text-foreground/70">
          {stat.label}
        </h2>
        <div className="flex flex-wrap items-center gap-x-2">
          <p className="text-[2rem] leading-tight font-extrabold text-foreground tabular-nums">
            {stat.value}
            {stat.unit && <span className="text-xl font-bold">{stat.unit}</span>}
          </p>
          <TrendBadge trend={stat.trend} />
        </div>
        <p className="truncate text-xs font-semibold text-muted-foreground">
          {stat.note}
        </p>
      </div>
    </article>
  );
}
