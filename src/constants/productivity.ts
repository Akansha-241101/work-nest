import type { ProductivityMetric, ProductivityRange } from "@/types/dashboard";

export const PRODUCTIVITY_RANGE_OPTIONS: {
  value: ProductivityRange;
  label: string;
}[] = [
  { value: "this-week", label: "This Week" },
  { value: "last-week", label: "Last Week" },
  { value: "this-month", label: "This Month" },
];

export const PRODUCTIVITY_METRIC_OPTIONS: {
  value: ProductivityMetric;
  label: string;
  unit: string;
}[] = [
  { value: "productivity", label: "Productivity", unit: "%" },
  { value: "tasks", label: "Tasks done", unit: " tasks" },
  { value: "focus", label: "Focus hours", unit: "h" },
];
