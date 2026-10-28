import { PRODUCTIVITY_SERIES } from "@/data/productivity";
import type {
  ProductivityMetric,
  ProductivityPoint,
  ProductivityRange,
} from "@/types/dashboard";

export function getProductivitySeries(
  range: ProductivityRange,
  metric: ProductivityMetric,
): ProductivityPoint[] {
  return PRODUCTIVITY_SERIES[range][metric];
}

/** The first point with the highest value gets the "Great job!" bubble. */
export function getBestPoint(series: ProductivityPoint[]): ProductivityPoint {
  return series.reduce((best, point) =>
    point.value > best.value ? point : best,
  );
}