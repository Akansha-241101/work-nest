import { Plus } from "lucide-react";
import { useState } from "react";
import { ProjectsBoard } from "@/components/projects/ProjectsBoard";
import { ProjectsFilters } from "@/components/projects/ProjectsFilters";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { ProjectsViewToggle } from "@/components/projects/ProjectsViewToggle";
import { Button } from "@/components/ui/Button";
import { ALL_PROJECTS } from "@/data/projects";
import type { ProjectFilters, ProjectsView } from "@/types/project";

const INITIAL_FILTERS: ProjectFilters = {
  query: "",
  priority: "all",
  category: "all",
  due: "all",
  status: "all",
};

export function ProjectsPage() {
  const [view, setView] = useState<ProjectsView>("list");
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const q = filters.query.trim().toLowerCase();
  const filtered = ALL_PROJECTS.filter((project) => {
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
  }).sort((a, b) => a.order - b.order);

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
            className="h-9 gap-[0.45rem] rounded-[0.675rem] px-[0.9rem] text-[0.7875rem] bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <Plus className="size-[0.9rem]" aria-hidden="true" />
            Add project
          </Button>
        </div>
      </header>

      <section className="space-y-[1.125rem]" aria-label="Projects list">
        <ProjectsFilters
          filters={filters}
          onChange={setFilters}
          shown={filtered.length}
          total={ALL_PROJECTS.length}
          onReset={() => setFilters(INITIAL_FILTERS)}
        />
        {view === "list" ? (
          <ProjectsList projects={filtered} />
        ) : (
          <ProjectsBoard projects={filtered} />
        )}
      </section>
    </div>
  );
}
