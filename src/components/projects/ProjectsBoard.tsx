import { ProjectCard } from "@/components/projects/ProjectCard";
import { TONE_BG, TONE_INK } from "@/constants/clay";
import {
  BOARD_STATUSES,
  STATUS_LABELS,
  STATUS_TONE,
} from "@/data/projectLabels";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectsBoardProps = {
  projects: Project[];
};

export function ProjectsBoard({ projects }: ProjectsBoardProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {BOARD_STATUSES.map((status) => {
        const columnProjects = projects.filter(
          (project) => project.status === status,
        );
        const title = STATUS_LABELS[status];
        const tone = STATUS_TONE[status];

        return (
          <section
            key={status}
            aria-label={title}
            className="flex min-w-0 flex-col gap-4 rounded-[2rem] bg-muted/50 p-3 shadow-clay-inset"
          >
            <header className="flex items-center justify-between px-2 pt-1">
              <h3
                className={cn(
                  "flex items-center gap-2 text-sm font-extrabold",
                  TONE_INK[tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn("size-3 rounded-full shadow-clay-sm", TONE_BG[tone])}
                />
                {title}
              </h3>
              <span className="rounded-full bg-card px-2.5 py-0.5 text-xs font-extrabold text-foreground/70 tabular-nums shadow-clay-sm">
                {columnProjects.length}
              </span>
            </header>
            <div className="flex min-h-36 flex-1 flex-col gap-4">
              {columnProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
