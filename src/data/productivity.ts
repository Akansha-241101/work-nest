import type {
  ProductivityMetric,
  ProductivityPoint,
  ProductivityRange,
} from "@/types/dashboard";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEKS = ["Week 1", "Week 2", "Week 3", "Week 4"];

function toPoints(labels: string[], values: number[]): ProductivityPoint[] {
  return labels.map((label, index) => ({ label, value: values[index] }));
}

export const PRODUCTIVITY_SERIES: Record<
  ProductivityRange,
  Record<ProductivityMetric, ProductivityPoint[]>
> = {
  "this-week": {
    productivity: toPoints(DAYS, [25, 50, 72, 59, 78, 78, 78]),
    tasks: toPoints(DAYS, [3, 5, 7, 4, 6, 2, 1]),
    focus: toPoints(DAYS, [1.5, 3, 4, 2.5, 3.5, 2, 1.5]),
  },
  "last-week": {
    productivity: toPoints(DAYS, [40, 45, 52, 66, 61, 48, 55]),
    tasks: toPoints(DAYS, [4, 4, 5, 6, 5, 1, 2]),
    focus: toPoints(DAYS, [2, 2.5, 3, 3.5, 2, 1, 1.5]),
  },
  "this-month": {
    productivity: toPoints(WEEKS, [48, 61, 57, 74]),
    tasks: toPoints(WEEKS, [18, 22, 20, 28]),
    focus: toPoints(WEEKS, [11, 14, 13, 18]),
  },
};
