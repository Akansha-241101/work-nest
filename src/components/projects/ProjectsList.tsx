import { ProjectCard } from "@/components/projects/ProjectCard";
import { CLAY_CARD, CLAY_ICON, claySurface } from "@/constants/clay";
import { ILLUSTRATIONS } from "@/constants/assets";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectsListProps = {
  projects: Project[];
};

export function ProjectsList({ projects }: ProjectsListProps) {
  if (projects.length === 0) {
    return (
      <div
        className={cn(
          CLAY_CARD,
          claySurface("mint"),
          "flex flex-col items-center gap-2 py-10 text-center",
        )}
      >
        <img
          src={ILLUSTRATIONS.plant}
          alt=""
          draggable={false}
          className={cn(CLAY_ICON, "h-24")}
        />
        <p className="text-base font-extrabold text-foreground">
          No projects match your filters
        </p>
        <p className="text-sm font-medium text-muted-foreground">
          Try another search or reset the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
