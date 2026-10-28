import type { ClayTone } from "@/types/clay";

export type StatTrend = {
  direction: "up" | "down";
  value: string;
};

export type DashboardStat = {
  label: string;
  value: string;
  unit?: string;
  trend: StatTrend;
  note: string;
  icon: string;
  tone: ClayTone;
};

export type ProductivityRange = "this-week" | "last-week" | "this-month";
export type ProductivityMetric = "productivity" | "tasks" | "focus";

export type ProductivityPoint = {
  label: string;
  value: number;
};

export type TodoItem = {
  id: string;
  label: string;
  done: boolean;
};

export type ActivityItem = {
  id: string;
  label: string;
  time: string;
  icon: string;
};
