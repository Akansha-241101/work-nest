import type { ClayTone } from "@/types/clay";

export type MemberStatus = "active" | "away";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  status: MemberStatus;
  initials: string;
  tone: ClayTone;
};
