import { ProjectsBoard } from "@/components/projects/ProjectsBoard";
import {
  ProjectsFilters,
  type ProjectFiltersState,
} from "@/components/projects/ProjectsFilters";
import { ProjectsListing } from "@/components/projects/ProjectsListing";
import type { Project, ProjectsView } from "@/types/project";

type ProjectsListSectionProps = {
  view: ProjectsView;
  filters: ProjectFiltersState;
  onFiltersChange: (next: ProjectFiltersState) => void;
  onResetFilters: () => void;
  projects: Project[];
  totalCount: number;
  onBoardUpdate: (next: Project[]) => void;
};

export function ProjectsListSection({
  view,
  filters,
  onFiltersChange,
  onResetFilters,
  projects,
  totalCount,
  onBoardUpdate,
}: ProjectsListSectionProps) {
  return (
    <section className="space-y-[1.125rem]" aria-label="Projects list">
      <ProjectsFilters
        filters={filters}
        onChange={onFiltersChange}
        shown={projects.length}
        total={totalCount}
        onReset={onResetFilters}
      />
      {view === "list" ? (
        <ProjectsListing projects={projects} />
      ) : (
        <ProjectsBoard projects={projects} onBoardUpdate={onBoardUpdate} />
      )}
    </section>
  );
}
