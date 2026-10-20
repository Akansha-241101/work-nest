import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Website redesign",
    description:
      "Refresh marketing site layout, typography, and conversion paths for Q4 launch.",
    status: "in-progress",
    priority: "high",
    order: 0,
    category: "Design",
    progress: 75,
    members: [
      { id: "m1", initials: "MI" },
      { id: "m2", initials: "AA" },
    ],
    memberCount: 6,
    dueLabel: "Due 12 Nov",
  },
  {
    id: "2",
    title: "Mobile app MVP",
    description:
      "Ship core flows for onboarding, projects list, and task updates on iOS.",
    status: "todo",
    priority: "high",
    order: 0,
    category: "Development",
    progress: 20,
    members: [
      { id: "m3", initials: "RK" },
      { id: "m4", initials: "JS" },
    ],
    memberCount: 8,
    dueLabel: "Due 28 Nov",
  },
  {
    id: "3",
    title: "Brand campaign",
    description:
      "Plan creative assets and channel mix for the winter product campaign.",
    status: "in-review",
    priority: "medium",
    order: 0,
    category: "Marketing",
    progress: 60,
    members: [
      { id: "m5", initials: "LP" },
      { id: "m2", initials: "AA" },
    ],
    memberCount: 4,
    dueLabel: "Due 05 Dec",
  },
  {
    id: "4",
    title: "API documentation",
    description:
      "Document public endpoints, auth, and examples for partner integrations.",
    status: "done",
    priority: "low",
    order: 0,
    category: "Product",
    progress: 100,
    members: [{ id: "m3", initials: "RK" }],
    memberCount: 3,
    dueLabel: "Due 01 Nov",
  },
  {
    id: "5",
    title: "Design system kit",
    description:
      "Expand tokens, components, and usage guidelines for cross-team consistency.",
    status: "in-progress",
    priority: "medium",
    order: 1,
    category: "Design",
    progress: 45,
    members: [
      { id: "m1", initials: "MI" },
      { id: "m5", initials: "LP" },
    ],
    memberCount: 5,
    dueLabel: "Due 18 Nov",
  },
  {
    id: "6",
    title: "Billing redesign",
    description:
      "Simplify plan selection, invoices, and upgrade messaging in settings.",
    status: "todo",
    priority: "high",
    order: 1,
    category: "Product",
    progress: 10,
    members: [
      { id: "m4", initials: "JS" },
      { id: "m2", initials: "AA" },
    ],
    memberCount: 5,
    dueLabel: "Due 22 Nov",
  },
];
