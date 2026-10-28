import { Search } from "lucide-react";
import { FilterSelects } from "@/components/projects/FilterSelects";
import { StatusFilterTabs } from "@/components/projects/StatusFilterTabs";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CLAY_CARD, CLAY_SHINE } from "@/constants/clay";
import { cn } from "@/lib/utils";
import type { ProjectFilters } from "@/types/project";

type ProjectsFiltersProps = {
  filters: ProjectFilters;
  onChange: (next: ProjectFilters) => void;
  shown: number;
  total: number;
  onReset: () => void;
};

export function ProjectsFilters({
  filters,
  onChange,
  shown,
  total,
  onReset,
}: ProjectsFiltersProps) {
  return (
    <div className={cn(CLAY_CARD, CLAY_SHINE, "space-y-5 bg-card p-5 sm:p-6")}>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative min-w-0 flex-1">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={filters.query}
            onChange={(e) => onChange({ ...filters, query: e.target.value })}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="rounded-full pl-11"
          />
        </div>
        <FilterSelects filters={filters} onChange={onChange} />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <StatusFilterTabs
          value={filters.status}
          onChange={(status) => onChange({ ...filters, status })}
        />
        <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          Showing {shown} of {total} projects
          <Button
            type="button"
            variant="link"
            onClick={onReset}
            className="h-auto p-0 font-extrabold"
          >
            Reset
          </Button>
        </p>
      </div>
    </div>
  );
}
