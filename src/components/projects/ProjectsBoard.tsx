import { ProjectCard } from "@/components/projects/ProjectCard";
import { BOARD_STATUSES, STATUS_LABELS } from "@/data/projectLabels";
import type { Project } from "@/types/project";

type ProjectsBoardProps = {
  projects: Project[];
};

export function ProjectsBoard({ projects }: ProjectsBoardProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-[0.9rem] sm:grid-cols-2 md:grid-cols-4">
      {BOARD_STATUSES.map((status) => {
        const columnProjects = projects.filter(
          (project) => project.status === status,
        );
        const title = STATUS_LABELS[status];

        return (
          <section
            key={status}
            aria-label={title}
            className="flex min-w-0 flex-1 flex-col gap-[0.675rem] rounded-[0.9rem] border border-border bg-muted/30 p-[0.675rem]"
          >
            <header className="flex items-center justify-between px-[0.225rem]">
              <h3 className="font-serif text-[0.7875rem] font-semibold tracking-wide uppercase">
                {title}
              </h3>
              <span className="text-[0.675rem] text-muted-foreground tabular-nums">
                {columnProjects.length}
              </span>
            </header>
            <div className="flex min-h-[9rem] flex-1 flex-col gap-[0.675rem]">
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
