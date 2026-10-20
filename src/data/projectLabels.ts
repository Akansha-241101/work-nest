import type { Project } from "@/types/project";

export const STATUS_LABELS: Record<Project["status"], string> = {
  todo: "To do",
  "in-progress": "In progress",
  "in-review": "In review",
  done: "Done",
};

export const PRIORITY_LABELS: Record<Project["priority"], string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
};
