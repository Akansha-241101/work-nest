import { STAT_ICONS } from "@/constants/assets";
import type { AnalyticsPoint } from "@/types/analytics";
import type { DashboardStat } from "@/types/dashboard";

export const ANALYTICS_STATS: DashboardStat[] = [
  {
    label: "Active projects",
    value: "8",
    note: "this month",
    trend: { direction: "up", value: "2" },
    tone: "lavender",
    icon: STAT_ICONS.flag,
  },
  {
    label: "Tasks closed",
    value: "42",
    note: "vs last week",
    trend: { direction: "up", value: "12%" },
    tone: "mint",
    icon: STAT_ICONS.check,
  },
  {
    label: "Focus hours",
    value: "18",
    note: "this week",
    trend: { direction: "down", value: "4%" },
    tone: "yellow",
    icon: STAT_ICONS.star,
  },
  {
    label: "Meetings",
    value: "6",
    note: "scheduled",
    trend: { direction: "up", value: "1" },
    tone: "blue",
    icon: STAT_ICONS.calendar,
  },
];

export const ANALYTICS_SERIES: AnalyticsPoint[] = [
  { label: "Mon", value: 4 },
  { label: "Tue", value: 7 },
  { label: "Wed", value: 5 },
  { label: "Thu", value: 9 },
  { label: "Fri", value: 6 },
];
