import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

type ProjectsListProps = {
  projects: Project[];
};

export function ProjectsList({ projects }: ProjectsListProps) {
  if (projects.length === 0) {
    return (
      <p className="rounded-[0.9rem] border border-dashed border-border px-px-4.5 py-[2.7rem] text-center text-[0.7875rem] text-muted-foreground">
        No projects match your filters.
      </p>
    );
  }

  return (
    <div className="grid gap-[0.9rem] sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
