export type ProjectStatus = "todo" | "in-progress" | "in-review" | "done";
export type ProjectPriority = "high" | "medium" | "low";
export type ProjectCategory =
  | "Design"
  | "Development"
  | "Marketing"
  | "Product";

export type ProjectMember = {
  id: string;
  initials: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  /** High / medium / low urgency badge. */
  priority: ProjectPriority;
  /** Sort position within a status column (lower = higher in the list). */
  order: number;
  category: ProjectCategory;
  progress: number;
  members: ProjectMember[];
  memberCount: number;
  dueLabel: string;
};

export type ProjectsView = "list" | "board";
