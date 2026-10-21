import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import {
  PRIORITY_DOT,
  PRIORITY_LABELS,
  STATUS_DOT,
  STATUS_LABELS,
} from "@/data/projectLabels";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

const badgeClass =
  "gap-[0.3375rem] rounded-[0.45rem] px-[0.675rem] py-[0.2rem] text-[0.675rem]";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-[0.675rem] rounded-[0.9rem] border border-border bg-card p-[1.125rem]">
      <div className="flex items-start justify-between gap-[0.675rem]">
        <h3 className="min-w-0 text-[0.9rem] font-semibold text-foreground">
          {project.title}
        </h3>
        <Badge variant="status" className={cn("shrink-0", badgeClass)}>
          <span
            className={cn(
              "size-[0.3375rem] rounded-full",
              STATUS_DOT[project.status],
            )}
          />
          {STATUS_LABELS[project.status]}
        </Badge>
      </div>

      <p className="line-clamp-2 text-[0.7875rem] text-muted-foreground/70">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-[0.45rem]">
        <Badge variant="outline" className={badgeClass}>
          <span
            className={cn(
              "size-[0.3375rem] rounded-full",
              PRIORITY_DOT[project.priority],
            )}
          />
          {PRIORITY_LABELS[project.priority]}
        </Badge>
        <Badge variant="outline" className={badgeClass}>
          {project.category}
        </Badge>
      </div>

      <div className="flex items-center gap-[0.675rem]">
        <Progress value={project.progress} className="h-[0.3375rem] flex-1" />
        <span className="shrink-0 tabular-nums text-[0.675rem] text-muted-foreground">
          {project.progress}%
        </span>
      </div>

      <div className="mt-auto flex flex-nowrap items-center justify-between gap-[0.45rem] pt-[0.225rem]">
        <div className="flex min-w-0 items-center gap-[0.45rem]">
          <div className="flex shrink-0 -space-x-[0.45rem]">
            {project.members.slice(0, 3).map((member) => (
              <Avatar
                key={member.id}
                className="size-[1.575rem] border-2 border-background"
              >
                <AvatarFallback className="text-[9px]">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="truncate text-[0.675rem] text-muted-foreground/70">
            {project.memberCount} members
          </span>
        </div>
        <span className="shrink-0 whitespace-nowrap text-[0.675rem] text-muted-foreground/70">
          {project.dueLabel}
        </span>
      </div>
    </article>
  );
}
