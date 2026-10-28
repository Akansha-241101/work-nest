import { Button } from "@/components/ui/Button";
import type { ProjectStatus } from "@/types/project";

const TABS: { value: "all" | ProjectStatus; label: string }[] = [
  { value: "all", label: "All" },
  { value: "todo", label: "To do" },
  { value: "in-progress", label: "In progress" },
  { value: "in-review", label: "In review" },
  { value: "done", label: "Done" },
];

type StatusFilterTabsProps = {
  value: "all" | ProjectStatus;
  onChange: (value: "all" | ProjectStatus) => void;
};

export function StatusFilterTabs({ value, onChange }: StatusFilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter by status"
      className="flex flex-wrap gap-2"
    >
      {TABS.map((tab) => {
        const active = value === tab.value;
        return (
          <Button
            key={tab.value}
            type="button"
            role="tab"
            variant={active ? "default" : "outline"}
            size="sm"
            aria-selected={active}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
}
