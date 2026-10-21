import type { ProjectPriority, ProjectStatus } from "@/types/project";

export const BOARD_STATUSES: ProjectStatus[] = [
  "todo",
  "in-progress",
  "in-review",
  "done",
];

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  todo: "To do",
  "in-progress": "In progress",
  "in-review": "In review",
  done: "Done",
};

export const PRIORITY_LABELS: Record<ProjectPriority, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

export const STATUS_DOT: Record<ProjectStatus, string> = {
  todo: "bg-foreground/70",
  "in-progress": "bg-primary",
  "in-review": "bg-chart-3",
  done: "bg-chart-2",
};

export const PRIORITY_DOT: Record<ProjectPriority, string> = {
  high: "bg-destructive",
  medium: "bg-chart-3",
  low: "bg-chart-2",
};
