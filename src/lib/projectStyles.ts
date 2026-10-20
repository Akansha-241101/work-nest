import type { ProjectPriority, ProjectStatus } from "@/types/project";

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
