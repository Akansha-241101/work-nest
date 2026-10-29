import { ProjectCardBody } from "@/components/projects/ProjectCardBody";
import { CLAY_CARD, claySurface } from "@/constants/clay";
import { CATEGORY_TONE } from "@/data/projectLabels";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={cn(
        CLAY_CARD,
        claySurface(CATEGORY_TONE[project.category]),
        "flex flex-col gap-4 p-5 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none",
      )}
    >
      <ProjectCardBody project={project} />
    </article>
  );
}
