import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CLAY_CARD, CLAY_SHINE } from "@/constants/clay";
import { cn } from "@/lib/utils";
import type { AnalyticsPoint } from "@/types/analytics";

const AXIS_TICK = { fill: "var(--muted-foreground)", fontSize: 12 };
const TOOLTIP_STYLE = {
  borderRadius: 14,
  border: "none",
  background: "var(--card)",
  boxShadow: "var(--shadow-clay-sm)",
  fontWeight: 700,
};

type AnalyticsChartProps = {
  data: AnalyticsPoint[];
};

export function AnalyticsChart({ data }: AnalyticsChartProps) {
  return (
    <section
      className={cn(CLAY_CARD, CLAY_SHINE, "bg-card p-7")}
      aria-labelledby="analytics-chart-title"
    >
      <h2 id="analytics-chart-title" className="text-lg font-extrabold">
        Tasks closed this week
      </h2>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="analyticsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis dataKey="label" tick={AXIS_TICK} axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} tick={AXIS_TICK} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={TOOLTIP_STYLE} />
            <Area
              type="linear"
              dataKey="value"
              stroke="var(--chart-1)"
              strokeWidth={3}
              fill="url(#analyticsFill)"
              dot={{ r: 5, fill: "var(--chart-1)", stroke: "var(--card)", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
