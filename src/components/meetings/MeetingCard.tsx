import { CalendarDays, Users } from "lucide-react";
import { CLAY_CARD, claySurface } from "@/constants/clay";
import { cn } from "@/lib/utils";
import type { Meeting } from "@/types/meeting";

type MeetingCardProps = {
  meeting: Meeting;
};

export function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article
      className={cn(
        CLAY_CARD,
        claySurface(meeting.tone),
        "flex flex-col gap-3 p-5",
      )}
    >
      <h3 className="text-base font-extrabold text-foreground">
        {meeting.title}
      </h3>
      <div className="flex flex-wrap gap-2 text-xs font-bold text-foreground/70">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-card/85 px-2.5 py-1 shadow-clay-sm">
          <CalendarDays aria-hidden="true" className="size-3.5" />
          {meeting.dateLabel}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-card/85 px-2.5 py-1 shadow-clay-sm">
          {meeting.timeLabel}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-card/85 px-2.5 py-1 shadow-clay-sm">
          <Users aria-hidden="true" className="size-3.5" />
          {meeting.attendees}
        </span>
      </div>
    </article>
  );
}
