import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type RefObject } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

gsap.registerPlugin(useGSAP);

type ProjectsListingProps = {
  projects: Project[];
};

export function ProjectsListing({ projects }: ProjectsListingProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // fromTo (not from): interrupted tweens must not bake partial opacity as the end state
      gsap.fromTo(
        ".project-card-item",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.06,
          delay: 0.2,
          clearProps: "transform",
        },
      );
    },
    { scope: rootRef as RefObject<HTMLElement | null>, dependencies: [projects] },
  );

  if (projects.length === 0) {
    return (
      <p className="rounded-[0.9rem] border border-dashed border-border px-[1.125rem] py-[2.7rem] text-center text-[0.7875rem] text-muted-foreground">
        No projects match your filters.
      </p>
    );
  }

  return (
    <div
      ref={rootRef}
      className="grid gap-[0.9rem] sm:grid-cols-2 xl:grid-cols-3"
    >
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="project-card-item block text-inherit no-underline transition-colors hover:[&>article]:border-primary/25"
        >
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
}
