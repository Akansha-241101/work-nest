import { CalendarDays } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import type { ProjectFilters } from "@/types/project";

const triggerClass =
  "h-9 shrink-0 rounded-[0.675rem] text-[0.7875rem] [&_svg]:size-[0.9rem]";

type FilterSelectsProps = {
  filters: ProjectFilters;
  onChange: (next: ProjectFilters) => void;
};

export function FilterSelects({ filters, onChange }: FilterSelectsProps) {
  return (
    <div className="flex flex-wrap items-center gap-[0.45rem]">
      <Select
        value={filters.priority}
        onValueChange={(value) =>
          onChange({
            ...filters,
            priority: value as ProjectFilters["priority"],
          })
        }
      >
        <SelectTrigger
          className={`${triggerClass} w-[135px]`}
          aria-label="Priority"
        >
          <SelectValue placeholder="All priorities" />
        </SelectTrigger>
        <SelectContent className="rounded-[0.675rem] text-[0.7875rem]">
          <SelectItem value="all">All priorities</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.category}
        onValueChange={(value) =>
          onChange({
            ...filters,
            category: value as ProjectFilters["category"],
          })
        }
      >
        <SelectTrigger
          className={`${triggerClass} w-[135px]`}
          aria-label="Category"
        >
          <SelectValue placeholder="All categories" />
        </SelectTrigger>
        <SelectContent className="rounded-[0.675rem] text-[0.7875rem]">
          <SelectItem value="all">All categories</SelectItem>
          <SelectItem value="Design">Design</SelectItem>
          <SelectItem value="Development">Development</SelectItem>
          <SelectItem value="Marketing">Marketing</SelectItem>
          <SelectItem value="Product">Product</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.due}
        onValueChange={(value) =>
          onChange({ ...filters, due: value as ProjectFilters["due"] })
        }
      >
        <SelectTrigger
          className={`${triggerClass} w-[171px] gap-[0.45rem]`}
          aria-label="Due date range"
        >
          <CalendarDays
            className="size-[0.9rem] shrink-0 opacity-50"
            aria-hidden="true"
          />
          <SelectValue placeholder="Due date range" />
        </SelectTrigger>
        <SelectContent className="rounded-[0.675rem] text-[0.7875rem]">
          <SelectItem value="all">Due date range</SelectItem>
          <SelectItem value="this-week">This week</SelectItem>
          <SelectItem value="this-month">This month</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
