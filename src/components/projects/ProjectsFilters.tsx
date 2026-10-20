import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Search } from "lucide-react";
import { useRef, type RefObject } from "react";
import { FilterSelects } from "@/components/projects/FilterSelects";
import { StatusFilterTabs } from "@/components/projects/StatusFilterTabs";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import type { ProjectCategory, ProjectPriority, ProjectStatus } from "@/types/project";

gsap.registerPlugin(useGSAP);

export type ProjectFiltersState = {
  query: string;
  priority: "all" | ProjectPriority;
  category: "all" | ProjectCategory;
  due: "all" | "this-week" | "this-month";
  status: "all" | ProjectStatus;
};

type ProjectsFiltersProps = {
  filters: ProjectFiltersState;
  onChange: (next: ProjectFiltersState) => void;
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
  const rootRef = useRef<HTMLDivElement>(null);
  const set = <K extends keyof ProjectFiltersState>(
    key: K,
    value: ProjectFiltersState[K],
  ) => onChange({ ...filters, [key]: value });

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".filters-anim-item", {
        y: 18,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.28,
      });
    },
    { scope: rootRef as RefObject<HTMLElement | null> },
  );

  return (
    <div ref={rootRef} className="space-y-[0.9rem]">
      <div className="filters-anim-item flex flex-col gap-[0.675rem] lg:flex-row">
        <div className="relative min-w-0 flex-1">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-[0.675rem] size-[0.9rem] -translate-y-1/2 text-muted-foreground/50"
          />
          <Input
            value={filters.query}
            onChange={(e) => set("query", e.target.value)}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="h-9 rounded-[0.675rem] pl-[2.025rem] text-[0.7875rem]"
          />
        </div>
        <FilterSelects filters={filters} onChange={set} />
      </div>
      <div className="filters-anim-item flex flex-col gap-[0.675rem] sm:flex-row sm:items-center sm:justify-between">
        <StatusFilterTabs
          value={filters.status}
          onChange={(status) => set("status", status)}
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
