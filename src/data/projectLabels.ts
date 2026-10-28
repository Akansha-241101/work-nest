import type { ClayTone } from "@/types/clay";
import type {
  ProjectCategory,
  ProjectPriority,
  ProjectStatus,
} from "@/types/project";

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

export const STATUS_TONE: Record<ProjectStatus, ClayTone> = {
  todo: "lavender",
  "in-progress": "blue",
  "in-review": "yellow",
  done: "mint",
};

export const PRIORITY_TONE: Record<ProjectPriority, ClayTone> = {
  high: "pink",
  medium: "yellow",
  low: "mint",
};

export const CATEGORY_TONE: Record<ProjectCategory, ClayTone> = {
  Design: "lavender",
  Development: "blue",
  Marketing: "pink",
  Product: "mint",
};
