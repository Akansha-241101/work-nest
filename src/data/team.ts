import type { TeamMember } from "@/types/team";

/** Lean seed set — maps cleanly to a future members table. */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "u1",
    name: "Akshu",
    role: "Workspace owner",
    status: "active",
    initials: "EM",
    tone: "lavender",
  },
  {
    id: "u2",
    name: "Sarah Chen",
    role: "Designer",
    status: "active",
    initials: "SC",
    tone: "pink",
  },
  {
    id: "u3",
    name: "Alex Rivera",
    role: "Engineer",
    status: "away",
    initials: "AR",
    tone: "blue",
  },
  {
    id: "u4",
    name: "Maya Patel",
    role: "Product",
    status: "active",
    initials: "MP",
    tone: "mint",
  },
  {
    id: "u5",
    name: "Jordan Lee",
    role: "Marketing",
    status: "active",
    initials: "JL",
    tone: "yellow",
  },
];
