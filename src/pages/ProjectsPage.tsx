import { Plus } from "lucide-react";
import { useState } from "react";
import { ProjectFormDialog } from "@/components/projects/ProjectFormDialog";
import { ProjectsBoard } from "@/components/projects/ProjectsBoard";
import { ProjectsFilters } from "@/components/projects/ProjectsFilters";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { ProjectsViewToggle } from "@/components/projects/ProjectsViewToggle";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { NAV_ICONS } from "@/constants/assets";
import { useProjectsStore } from "@/stores/projects-store";
import type { ProjectFilters, ProjectsView } from "@/types/project";

const INITIAL_FILTERS: ProjectFilters = {
  query: "",
  priority: "all",
  category: "all",
  due: "all",
  status: "all",
};

export function ProjectsPage() {
  const projects = useProjectsStore((s) => s.projects);
  const [view, setView] = useState<ProjectsView>("list");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [addOpen, setAddOpen] = useState(false);

  const query = filters.query.trim().toLowerCase();

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch = `${project.title} ${project.description}`
        .toLowerCase()
        .includes(query);

      const matchesPriority =
        filters.priority === "all" || project.priority === filters.priority;

      const matchesCategory =
        filters.category === "all" || project.category === filters.category;

      const matchesStatus =
        filters.status === "all" || project.status === filters.status;

      return (
        (!query || matchesSearch) &&
        matchesPriority &&
        matchesCategory &&
        matchesStatus
      );
    })
    .sort((a, b) => a.order - b.order);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHero
        icon={NAV_ICONS.folder}
        title="Projects"
        description="Manage and track all your projects in one place."
        actions={
          <>
            <ProjectsViewToggle view={view} onChange={setView} />
            <Button type="button" onClick={() => setAddOpen(true)}>
              <Plus className="size-4" aria-hidden="true" />
              Add project
            </Button>
          </>
        }
      />

      <section className="space-y-6" aria-label="Projects list">
        <ProjectsFilters
          filters={filters}
          onChange={setFilters}
          shown={filteredProjects.length}
          total={projects.length}
          onReset={() => setFilters(INITIAL_FILTERS)}
        />

        {view === "list" ? (
          <ProjectsList projects={filteredProjects} />
        ) : (
          <ProjectsBoard projects={filteredProjects} />
        )}
      </section>

      <ProjectFormDialog open={addOpen} onOpenChange={setAddOpen} />
    </div>
  );
}
