import type { Project } from "@/types/project";

/** Second half of sample projects (kept split for the 120-line file rule). */
export const PROJECTS_MORE: Project[] = [
  {
    id: "7",
    title: "Analytics dashboard",
    description:
      "Add project health charts, workload views, and exportable weekly reports.",
    status: "in-progress",
    priority: "medium",
    order: 2,
    category: "Development",
    progress: 55,
    members: [
      { id: "m3", initials: "RK" },
      { id: "m1", initials: "MI" },
    ],
    memberCount: 7,
    dueLabel: "Due 30 Nov",
  },
  {
    id: "8",
    title: "Customer interviews",
    description:
      "Run discovery sessions with power users and synthesize opportunity themes.",
    status: "in-review",
    priority: "low",
    order: 1,
    category: "Product",
    progress: 80,
    members: [{ id: "m5", initials: "LP" }],
    memberCount: 2,
    dueLabel: "Due 08 Nov",
  },
  {
    id: "9",
    title: "Onboarding emails",
    description:
      "Write and schedule lifecycle emails for new workspace invitations.",
    status: "done",
    priority: "medium",
    order: 1,
    category: "Marketing",
    progress: 100,
    members: [
      { id: "m2", initials: "AA" },
      { id: "m5", initials: "LP" },
    ],
    memberCount: 3,
    dueLabel: "Due 03 Nov",
  },
  {
    id: "10",
    title: "Accessibility audit",
    description:
      "Review keyboard paths, contrast, and screen reader labels across shell.",
    status: "todo",
    priority: "high",
    order: 2,
    category: "Design",
    progress: 15,
    members: [
      { id: "m1", initials: "MI" },
      { id: "m4", initials: "JS" },
    ],
    memberCount: 4,
    dueLabel: "Due 15 Nov",
  },
  {
    id: "11",
    title: "Search improvements",
    description:
      "Tune ranking for projects and tasks, and surface recent work faster.",
    status: "in-progress",
    priority: "low",
    order: 3,
    category: "Development",
    progress: 35,
    members: [{ id: "m3", initials: "RK" }],
    memberCount: 3,
    dueLabel: "Due 25 Nov",
  },
  {
    id: "12",
    title: "Partner portal",
    description:
      "Prototype partner access for shared roadmaps and status reporting.",
    status: "in-review",
    priority: "medium",
    order: 2,
    category: "Product",
    progress: 70,
    members: [
      { id: "m4", initials: "JS" },
      { id: "m1", initials: "MI" },
      { id: "m2", initials: "AA" },
    ],
    memberCount: 6,
    dueLabel: "Due 10 Dec",
  },
];
