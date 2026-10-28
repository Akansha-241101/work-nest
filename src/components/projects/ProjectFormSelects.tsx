import type { ProjectFormValues } from "@/components/projects/project-form";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import {
  BOARD_STATUSES,
  PRIORITY_LABELS,
  STATUS_LABELS,
} from "@/data/projectLabels";
import type {
  ProjectCategory,
  ProjectPriority,
  ProjectStatus,
} from "@/types/project";

const CATEGORIES: ProjectCategory[] = [
  "Design",
  "Development",
  "Marketing",
  "Product",
];
const PRIORITIES: ProjectPriority[] = ["high", "medium", "low"];
const fieldClass = "grid gap-2 text-sm font-bold";
const controlClass = "w-full";

type ProjectFormSelectsProps = {
  form: ProjectFormValues;
  onChange: (next: ProjectFormValues) => void;
};

export function ProjectFormSelects({ form, onChange }: ProjectFormSelectsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className={fieldClass}>
        Status
        <Select
          value={form.status}
          onValueChange={(value) =>
            onChange({ ...form, status: value as ProjectStatus })
          }
        >
          <SelectTrigger className={controlClass} aria-label="Status">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {BOARD_STATUSES.map((status) => (
              <SelectItem key={status} value={status}>
                {STATUS_LABELS[status]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>

      <label className={fieldClass}>
        Priority
        <Select
          value={form.priority}
          onValueChange={(value) =>
            onChange({ ...form, priority: value as ProjectPriority })
          }
        >
          <SelectTrigger className={controlClass} aria-label="Priority">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {PRIORITIES.map((priority) => (
              <SelectItem key={priority} value={priority}>
                {PRIORITY_LABELS[priority]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>

      <label className={fieldClass}>
        Category
        <Select
          value={form.category}
          onValueChange={(value) =>
            onChange({ ...form, category: value as ProjectCategory })
          }
        >
          <SelectTrigger className={controlClass} aria-label="Category">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>

      <label className={fieldClass}>
        Due
        <Input
          value={form.dueLabel}
          onChange={(e) => onChange({ ...form, dueLabel: e.target.value })}
          placeholder="Due 12 Nov"
          className={controlClass}
        />
      </label>
    </div>
  );
}
