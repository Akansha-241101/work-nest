import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { PageHero } from "@/components/shared/PageHero";
import { NAV_ICONS } from "@/constants/assets";
import { ANALYTICS_SERIES, ANALYTICS_STATS } from "@/data/analytics";

export function AnalyticsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHero
        icon={NAV_ICONS.chart}
        title="Analytics"
        description="A light snapshot of workspace progress."
      />

      <section
        aria-label="Analytics stats"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {ANALYTICS_STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </section>

      <AnalyticsChart data={ANALYTICS_SERIES} />
    </div>
  );
}
