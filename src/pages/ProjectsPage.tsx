import { LoaderCircle, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ProjectsBoard } from "@/components/projects/ProjectsBoard";
import { ProjectsFilters } from "@/components/projects/ProjectsFilters";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { ProjectsViewToggle } from "@/components/projects/ProjectsViewToggle";
import { PageHero } from "@/components/shared/PageHero";
import { NAV_ICONS } from "@/constants/assets";
import { fetchNeonProjects } from "@/lib/neon-projects";
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
  const setProjects = useProjectsStore((s) => s.setProjects);
  const [view, setView] = useState<ProjectsView>("list");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadProjects = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      setProjects(await fetchNeonProjects());
    } catch (error) {
      setLoadError(
        error instanceof Error ? error.message : "Unable to load projects from Neon.",
      );
    } finally {
      setLoading(false);
    }
  }, [setProjects]);

  useEffect(() => {
    void loadProjects();
  }, [loadProjects]);

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
        description="Projects loaded directly from your Neon database."
        actions={<ProjectsViewToggle view={view} onChange={setView} />}
      />

      <section className="space-y-6" aria-label="Projects list">
        <ProjectsFilters
          filters={filters}
          onChange={setFilters}
          shown={filteredProjects.length}
          total={projects.length}
          onReset={() => setFilters(INITIAL_FILTERS)}
        />

        {loadError ? (
          <div role="alert" className="rounded-3xl bg-card p-6 text-center shadow-clay-sm">
            <p className="font-bold">Could not load projects from Neon</p>
            <p className="mt-2 text-sm text-muted-foreground">{loadError}</p>
            <button
              type="button"
              onClick={() => void loadProjects()}
              className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-primary hover:bg-primary/10"
            >
              <RefreshCw className="size-4" aria-hidden="true" />
              Try again
            </button>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground" role="status">
            <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
            Loading projects from Neon…
          </div>
        ) : view === "list" ? (
          <ProjectsList projects={filteredProjects} />
        ) : (
          <ProjectsBoard projects={filteredProjects} />
        )}
      </section>

    </div>
  );
}
