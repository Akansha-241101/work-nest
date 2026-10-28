import { ACTIVITY_ICONS, STAT_ICONS } from "@/constants/assets";
import type { ActivityItem, DashboardStat, TodoItem } from "@/types/dashboard";

export const DASHBOARD_USER_NAME = "Akshu";

export const DASHBOARD_STATS: DashboardStat[] = [
  {
    label: "Tasks Done",
    value: "24",
    trend: { direction: "up", value: "12%" },
    note: "vs yesterday",
    icon: STAT_ICONS.check,
    tone: "lavender",
  },
  {
    label: "In Progress",
    value: "8",
    trend: { direction: "down", value: "5%" },
    note: "across 2 projects",
    icon: STAT_ICONS.calendar,
    tone: "pink",
  },
  {
    label: "Completed",
    value: "56",
    trend: { direction: "up", value: "18%" },
    note: "this month",
    icon: STAT_ICONS.flag,
    tone: "mint",
  },
  {
    label: "Focus Time",
    value: "18",
    unit: "h",
    trend: { direction: "up", value: "28%" },
    note: "vs last week",
    icon: STAT_ICONS.star,
    tone: "yellow",
  },
];

export const TODO_ITEMS: TodoItem[] = [
  { id: "t1", label: "Design landing page 🎨", done: true },
  { id: "t2", label: "Write project proposal 📝", done: false },
  { id: "t3", label: "Team meeting 👥", done: false },
  { id: "t4", label: "Review analytics 📊", done: false },
];

export const RECENT_ACTIVITY: ActivityItem[] = [
  {
    id: "a1",
    label: "Completed “User Research”",
    time: "2h ago",
    icon: ACTIVITY_ICONS.check,
  },
  {
    id: "a2",
    label: "Updated project “Website Redesign”",
    time: "5h ago",
    icon: ACTIVITY_ICONS.folder,
  },
  {
    id: "a3",
    label: "New message from Sarah",
    time: "1d ago",
    icon: ACTIVITY_ICONS.chat,
  },
  {
    id: "a4",
    label: "Uploaded report.pdf",
    time: "2d ago",
    icon: ACTIVITY_ICONS.upload,
  },
];
