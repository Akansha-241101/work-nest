import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MiniCalendar } from "@/components/dashboard/MiniCalendar";
import { MotivationCard } from "@/components/dashboard/MotivationCard";
import { ProductivityChart } from "@/components/dashboard/ProductivityChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { StatCard } from "@/components/dashboard/StatCard";
import { TodoList } from "@/components/dashboard/TodoList";
import { DASHBOARD_STATS } from "@/data/dashboard";

export function DashboardPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <DashboardHeader />

      <section
        aria-label="Weekly statistics"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {DASHBOARD_STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </section>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="flex min-w-0 flex-col gap-5 xl:col-span-2">
          <ProductivityChart />
          <RecentActivity />
        </div>
        <div className="grid content-start gap-5 sm:grid-cols-2 xl:grid-cols-1">
          <TodoList />
          <MiniCalendar />
          <div className="sm:col-span-2 xl:col-span-1">
            <MotivationCard />
          </div>
        </div>
      </div>
    </div>
  );
}
