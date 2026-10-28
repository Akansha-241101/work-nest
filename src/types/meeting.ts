import type { ClayTone } from "@/types/clay";

export type Meeting = {
  id: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  attendees: number;
  tone: ClayTone;
};
