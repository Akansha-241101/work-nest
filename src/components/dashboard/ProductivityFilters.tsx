import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import {
  PRODUCTIVITY_METRIC_OPTIONS,
  PRODUCTIVITY_RANGE_OPTIONS,
} from "@/constants/productivity";
import type { ProductivityMetric, ProductivityRange } from "@/types/dashboard";

const TRIGGER_CLASS = "h-9 w-auto gap-1.5 px-3.5 text-xs";

type ProductivityFiltersProps = {
  range: ProductivityRange;
  metric: ProductivityMetric;
  onRangeChange: (range: ProductivityRange) => void;
  onMetricChange: (metric: ProductivityMetric) => void;
};

export function ProductivityFilters({
  range,
  metric,
  onRangeChange,
  onMetricChange,
}: ProductivityFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select
        value={metric}
        onValueChange={(value) => onMetricChange(value as ProductivityMetric)}
      >
        <SelectTrigger className={TRIGGER_CLASS} aria-label="Chart metric">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="end">
          {PRODUCTIVITY_METRIC_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={range}
        onValueChange={(value) => onRangeChange(value as ProductivityRange)}
      >
        <SelectTrigger className={TRIGGER_CLASS} aria-label="Date range">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="end">
          {PRODUCTIVITY_RANGE_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
