import { Plus } from "lucide-react";
import { useState } from "react";
import { ProjectFormDialog } from "@/components/projects/ProjectFormDialog";
import { ProjectsBoard } from "@/components/projects/ProjectsBoard";
import { ProjectsFilters } from "@/components/projects/ProjectsFilters";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { ProjectsViewToggle } from "@/components/projects/ProjectsViewToggle";
import { Button } from "@/components/ui/Button";
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
    <div className="mx-auto flex max-w-7xl flex-col gap-[1.8rem]">
      <header className="flex flex-col gap-[0.9rem] sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="font-serif text-[2.025rem] font-semibold tracking-tight uppercase sm:text-[2.7rem]">
            Projects
          </h1>

          <p className="mt-[0.45rem] max-w-[32.4rem] text-[0.7875rem] text-muted-foreground/70">
            Manage and track all your projects in one place.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-[0.45rem] sm:pt-[0.225rem]">
          <ProjectsViewToggle view={view} onChange={setView} />

          <Button
            type="button"
            onClick={() => setAddOpen(true)}
            className="h-9 gap-[0.45rem] rounded-[0.675rem] bg-secondary px-[0.9rem] text-[0.7875rem] text-secondary-foreground hover:bg-secondary/90"
          >
            <Plus className="size-[0.9rem]" aria-hidden="true" />
            Add project
          </Button>
        </div>
      </header>

      <section className="space-y-4.5" aria-label="Projects list">
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
