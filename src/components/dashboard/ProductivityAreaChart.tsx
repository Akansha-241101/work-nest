import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GreatJobLabel } from "@/components/dashboard/GreatJobLabel";
import type { ProductivityPoint } from "@/types/dashboard";

const AXIS_TICK = { fill: "var(--muted-foreground)", fontSize: 12 };
const TOOLTIP_STYLE = {
  borderRadius: 14,
  border: "none",
  background: "var(--card)",
  boxShadow: "var(--shadow-clay-sm)",
  fontWeight: 700,
};

type ProductivityAreaChartProps = {
  data: ProductivityPoint[];
  bestPoint: ProductivityPoint;
  metricLabel: string;
  unit: string;
  isPercent: boolean;
};

export function ProductivityAreaChart({
  data,
  bestPoint,
  metricLabel,
  unit,
  isPercent,
}: ProductivityAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 40, right: 40, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="productivityFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.3} />
            <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis
          dataKey="label"
          tick={AXIS_TICK}
          axisLine={false}
          tickLine={false}
          dy={8}
        />
        <YAxis
          domain={isPercent ? [0, 100] : [0, "auto"]}
          ticks={isPercent ? [0, 25, 50, 75, 100] : undefined}
          allowDecimals={false}
          tick={AXIS_TICK}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          cursor={{ stroke: "var(--chart-1)", strokeDasharray: "4 4" }}
          formatter={(value) => [`${value}${unit}`, metricLabel]}
        />
        <Area
          type="linear"
          dataKey="value"
          stroke="var(--chart-1)"
          strokeWidth={3}
          fill="url(#productivityFill)"
          dot={{ r: 5, fill: "var(--chart-1)", stroke: "var(--card)", strokeWidth: 2 }}
          activeDot={{ r: 7, stroke: "var(--card)", strokeWidth: 3 }}
        />
        <ReferenceDot
          x={bestPoint.label}
          y={bestPoint.value}
          r={0}
          stroke="none"
          label={<GreatJobLabel />}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
