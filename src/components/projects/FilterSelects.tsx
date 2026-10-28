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
  "shrink-0 [&_svg]:size-4";

type FilterSelectsProps = {
  filters: ProjectFilters;
  onChange: (next: ProjectFilters) => void;
};

export function FilterSelects({ filters, onChange }: FilterSelectsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
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
          className={`${triggerClass} w-full sm:w-40`}
          aria-label="Priority"
        >
          <SelectValue placeholder="All priorities" />
        </SelectTrigger>
        <SelectContent>
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
          className={`${triggerClass} w-full sm:w-40`}
          aria-label="Category"
        >
          <SelectValue placeholder="All categories" />
        </SelectTrigger>
        <SelectContent>
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
          className={`${triggerClass} col-span-2 w-full gap-2 sm:w-48`}
          aria-label="Due date range"
        >
          <CalendarDays
            className="shrink-0 opacity-60"
            aria-hidden="true"
          />
          <SelectValue placeholder="Due date range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Due date range</SelectItem>
          <SelectItem value="this-week">This week</SelectItem>
          <SelectItem value="this-month">This month</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
