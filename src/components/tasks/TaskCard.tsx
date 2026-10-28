import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CLAY_CARD, CLAY_SHINE, TONE_BG, TONE_INK } from "@/constants/clay";
import { PRIORITY_LABELS, PRIORITY_TONE } from "@/data/projectLabels";
import { cn } from "@/lib/utils";
import type { Task } from "@/types/task";

const STATUS_LABEL = {
  todo: "To do",
  "in-progress": "In progress",
  done: "Done",
} as const;

type TaskCardProps = {
  task: Task;
  onToggle: (id: string) => void;
};

export function TaskCard({ task, onToggle }: TaskCardProps) {
  const done = task.status === "done";
  const priorityTone = PRIORITY_TONE[task.priority];

  return (
    <article
      className={cn(
        CLAY_CARD,
        CLAY_SHINE,
        "flex items-start gap-4 bg-card p-5",
      )}
    >
      <button
        type="button"
        aria-pressed={done}
        aria-label={done ? "Mark incomplete" : "Mark complete"}
        onClick={() => onToggle(task.id)}
        className={cn(
          "mt-0.5 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full shadow-clay-sm transition-colors",
          done ? "bg-chart-2 text-white" : "bg-muted text-transparent",
        )}
      >
        <Check aria-hidden="true" className="size-4" strokeWidth={3} />
      </button>

      <div className="min-w-0 flex-1">
        <h3
          className={cn(
            "text-base font-extrabold",
            done && "text-muted-foreground line-through",
          )}
        >
          {task.title}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-muted-foreground">
          {task.projectTitle} · {task.dueLabel}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="status">{STATUS_LABEL[task.status]}</Badge>
          <Badge
            className={cn(
              "shadow-clay-sm",
              TONE_BG[priorityTone],
              TONE_INK[priorityTone],
            )}
          >
            {PRIORITY_LABELS[task.priority]}
          </Badge>
        </div>
      </div>
    </article>
  );
}
