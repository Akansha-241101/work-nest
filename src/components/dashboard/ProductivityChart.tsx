import { useState } from "react";
import { ProductivityAreaChart } from "@/components/dashboard/ProductivityAreaChart";
import { ProductivityFilters } from "@/components/dashboard/ProductivityFilters";
import { CLAY_CARD, CLAY_SHINE } from "@/constants/clay";
import { PRODUCTIVITY_METRIC_OPTIONS } from "@/constants/productivity";
import { cn } from "@/lib/utils";
import {
  getBestPoint,
  getProductivitySeries,
} from "@/services/productivity-service";
import type { ProductivityMetric, ProductivityRange } from "@/types/dashboard";

export function ProductivityChart() {
  const [range, setRange] = useState<ProductivityRange>("this-week");
  const [metric, setMetric] = useState<ProductivityMetric>("productivity");

  const series = getProductivitySeries(range, metric);
  const metricOption =
    PRODUCTIVITY_METRIC_OPTIONS.find((option) => option.value === metric) ??
    PRODUCTIVITY_METRIC_OPTIONS[0];

  return (
    <section
      aria-labelledby="productivity-title"
      className={cn(
        CLAY_CARD,
        CLAY_SHINE,
        "flex flex-col bg-card p-7 xl:flex-1",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="productivity-title" className="text-lg font-bold">
          Productivity Overview
        </h2>
        <ProductivityFilters
          range={range}
          metric={metric}
          onRangeChange={setRange}
          onMetricChange={setMetric}
        />
      </div>

      <div className="mt-4 h-60 xl:h-auto xl:min-h-60 xl:flex-1">
        <ProductivityAreaChart
          data={series}
          bestPoint={getBestPoint(series)}
          metricLabel={metricOption.label}
          unit={metricOption.unit}
          isPercent={metric === "productivity"}
        />
      </div>
    </section>
  );
}
