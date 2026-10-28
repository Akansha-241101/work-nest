import { CalendarDays } from "lucide-react";
import type { ReactNode } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { TONE_BG, TONE_INK } from "@/constants/clay";
import {
  CATEGORY_TONE,
  PRIORITY_LABELS,
  PRIORITY_TONE,
  STATUS_LABELS,
  STATUS_TONE,
} from "@/data/projectLabels";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectCardBodyProps = {
  project: Project;
  actions: ReactNode;
};

export function ProjectCardBody({ project, actions }: ProjectCardBodyProps) {
  const priorityTone = PRIORITY_TONE[project.priority];

  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            className={cn(
              "text-[0.7rem] font-extrabold tracking-wide uppercase",
              TONE_INK[CATEGORY_TONE[project.category]],
            )}
          >
            {project.category}
          </p>
          <h3 className="mt-0.5 text-base leading-snug font-extrabold text-foreground">
            {project.title}
          </h3>
        </div>
        {actions}
      </div>

      <p className="line-clamp-2 text-sm font-medium text-foreground/60">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        <Badge
          variant="status"
          className={TONE_INK[STATUS_TONE[project.status]]}
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
          {STATUS_LABELS[project.status]}
        </Badge>
        <Badge
          className={cn(
            "shadow-clay-sm",
            TONE_BG[priorityTone],
            TONE_INK[priorityTone],
          )}
        >
          {PRIORITY_LABELS[project.priority]} priority
        </Badge>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs font-bold text-foreground/60">
          <span>Progress</span>
          <span className="tabular-nums text-foreground">{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="mt-1.5" />
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 pt-1">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex shrink-0 -space-x-2">
            {project.members.slice(0, 3).map((member) => (
              <Avatar key={member.id} className="size-7 border-2 border-card">
                <AvatarFallback className="text-[0.6rem]">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="truncate text-xs font-semibold text-foreground/60">
            {project.memberCount} members
          </span>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-card/80 px-2.5 py-1 text-xs font-bold whitespace-nowrap text-foreground/70 shadow-clay-sm">
          <CalendarDays aria-hidden="true" className="size-3.5" />
          {project.dueLabel}
        </span>
      </div>
    </>
  );
}
