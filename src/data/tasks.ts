import type { Task } from "@/types/task";

/** Lean seed set — maps cleanly to a future tasks table. */
export const TASKS: Task[] = [
  {
    id: "t1",
    title: "Design landing page",
    status: "done",
    priority: "high",
    dueLabel: "Due yesterday",
    projectTitle: "Website redesign",
  },
  {
    id: "t2",
    title: "Write project proposal",
    status: "in-progress",
    priority: "high",
    dueLabel: "Due today",
    projectTitle: "Brand campaign",
  },
  {
    id: "t3",
    title: "Review analytics draft",
    status: "todo",
    priority: "medium",
    dueLabel: "Due Fri",
    projectTitle: "Analytics dashboard",
  },
  {
    id: "t4",
    title: "Ship onboarding emails",
    status: "todo",
    priority: "low",
    dueLabel: "Due next week",
    projectTitle: "Onboarding emails",
  },
  {
    id: "t5",
    title: "Fix search ranking",
    status: "in-progress",
    priority: "medium",
    dueLabel: "Due Mon",
    projectTitle: "Search improvements",
  },
  {
    id: "t6",
    title: "Accessibility pass",
    status: "todo",
    priority: "high",
    dueLabel: "Due Wed",
    projectTitle: "Accessibility audit",
  },
];
