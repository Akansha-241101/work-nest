import { useMemo, useState } from "react";
import type { ProjectFiltersState } from "@/components/projects/ProjectsFilters";
import { ProjectsListSection } from "@/components/projects/ProjectsListSection";
import { ProjectsPageHeader } from "@/components/projects/ProjectsPageHeader";
import { ALL_PROJECTS } from "@/data/projectsIndex";
import type { Project, ProjectsView } from "@/types/project";

const INITIAL_FILTERS: ProjectFiltersState = {
  query: "",
  priority: "all",
  category: "all",
  due: "all",
  status: "all",
};

export function ProjectsPage() {
  const [view, setView] = useState<ProjectsView>("list");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [projects, setProjects] = useState<Project[]>(ALL_PROJECTS);

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return projects
      .filter((project) => {
        if (
          q &&
          !`${project.title} ${project.description}`.toLowerCase().includes(q)
        ) {
          return false;
        }
        if (filters.priority !== "all" && project.priority !== filters.priority) {
          return false;
        }
        if (filters.category !== "all" && project.category !== filters.category) {
          return false;
        }
        if (filters.status !== "all" && project.status !== filters.status) {
          return false;
        }
        return true;
      })
      .sort((a, b) => a.order - b.order);
  }, [filters, projects]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-[1.8rem]">
      <ProjectsPageHeader view={view} onViewChange={setView} />
      <ProjectsListSection
        view={view}
        filters={filters}
        onFiltersChange={setFilters}
        onResetFilters={() => setFilters(INITIAL_FILTERS)}
        projects={filtered}
        totalCount={projects.length}
        onBoardUpdate={(moved) => {
          setProjects((prev) => {
            const updates = new Map(moved.map((p) => [p.id, p]));
            return prev.map((p) => updates.get(p.id) ?? p);
          });
        }}
      />
    </div>
  );
}
