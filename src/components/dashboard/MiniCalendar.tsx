import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isWeekend,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CLAY_CARD, claySurface } from "@/constants/clay";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];
const HIGHLIGHTED_DAY = new Date(2024, 4, 15);
const WEEK_OPTIONS = { weekStartsOn: 1 } as const;

export function MiniCalendar() {
  const [month, setMonth] = useState(startOfMonth(HIGHLIGHTED_DAY));

  const days = eachDayOfInterval({
    start: startOfWeek(month, WEEK_OPTIONS),
    end: endOfWeek(endOfMonth(month), WEEK_OPTIONS),
  });

  function dayClassName(day: Date) {
    if (isSameDay(day, HIGHLIGHTED_DAY)) {
      return "bg-primary text-primary-foreground shadow-clay-sm";
    }
    if (!isSameMonth(day, month)) return "text-muted-foreground/45";
    if (isWeekend(day)) return "text-clay-pink-ink";
    return "text-foreground/85";
  }

  return (
    <section
      aria-labelledby="calendar-title"
      className={cn(CLAY_CARD, claySurface("blue"))}
    >
      <div className="flex items-center justify-between px-1.5">
        <h2 id="calendar-title" className="text-lg font-bold text-clay-blue-ink">
          Calendar
        </h2>
        <Link
          to="/meetings"
          className="rounded-full bg-card px-3 py-1 text-xs font-bold text-clay-blue-ink no-underline shadow-clay-sm"
        >
          View all
        </Link>
      </div>

      <div className="mt-3 flex items-center justify-between px-0.5 text-sm font-bold">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => setMonth((value) => addMonths(value, -1))}
          className="cursor-pointer rounded-full p-1 text-clay-blue-ink hover:bg-card"
        >
          <ChevronLeft aria-hidden="true" className="size-4" />
        </button>
        <span>{format(month, "MMMM yyyy")}</span>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setMonth((value) => addMonths(value, 1))}
          className="cursor-pointer rounded-full p-1 text-clay-blue-ink hover:bg-card"
        >
          <ChevronRight aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div className="mt-2 grid grid-cols-7 gap-y-1 text-center text-xs font-semibold tabular-nums">
        {WEEKDAYS.map((weekday, index) => (
          <span
            key={`${weekday}-${index}`}
            className={cn(
              "py-1 font-bold",
              index > 4 ? "text-clay-pink-ink" : "text-foreground/70",
            )}
          >
            {weekday}
          </span>
        ))}
        {days.map((day) => (
          <span
            key={day.toISOString()}
            className={cn(
              "mx-auto flex size-7 items-center justify-center rounded-full",
              dayClassName(day),
            )}
          >
            {format(day, "d")}
          </span>
        ))}
      </div>
    </section>
  );
}
