import { Search } from "lucide-react";
import { FilterSelects } from "@/components/projects/FilterSelects";
import { StatusFilterTabs } from "@/components/projects/StatusFilterTabs";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
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
    <div className="space-y-[0.9rem]">
      <div className="flex flex-col gap-[0.675rem] lg:flex-row">
        <div className="relative min-w-0 flex-1">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-[0.675rem] size-[0.9rem] -translate-y-1/2 text-muted-foreground/50"
          />
          <Input
            value={filters.query}
            onChange={(e) => onChange({ ...filters, query: e.target.value })}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="h-9 rounded-[0.675rem] pl-[2.025rem] text-[0.7875rem]"
          />
        </div>
        <FilterSelects filters={filters} onChange={onChange} />
      </div>
      <div className="flex flex-col gap-[0.675rem] sm:flex-row sm:items-center sm:justify-between">
        <StatusFilterTabs
          value={filters.status}
          onChange={(status) => onChange({ ...filters, status })}
        />
        <p className="text-[0.7875rem] text-muted-foreground/70">
          Showing {shown} of {total} projects{" "}
          <Button
            type="button"
            variant="link"
            onClick={onReset}
            className="h-auto p-0 text-[0.7875rem] font-semibold text-foreground"
          >
            Reset filters
          </Button>
        </p>
      </div>
    </div>
  );
}
