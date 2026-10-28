import type { Meeting } from "@/types/meeting";

/** Lean seed set — maps cleanly to a future meetings table. */
export const MEETINGS: Meeting[] = [
  {
    id: "m1",
    title: "Sprint planning",
    dateLabel: "Today",
    timeLabel: "10:00 – 11:00",
    attendees: 6,
    tone: "lavender",
  },
  {
    id: "m2",
    title: "Design critique",
    dateLabel: "Tomorrow",
    timeLabel: "14:00 – 14:45",
    attendees: 4,
    tone: "pink",
  },
  {
    id: "m3",
    title: "Partner sync",
    dateLabel: "Fri, 31 Oct",
    timeLabel: "09:30 – 10:00",
    attendees: 3,
    tone: "blue",
  },
  {
    id: "m4",
    title: "Retro",
    dateLabel: "Mon, 3 Nov",
    timeLabel: "16:00 – 16:45",
    attendees: 8,
    tone: "mint",
  },
];
