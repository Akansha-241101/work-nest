import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
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
      className="flex flex-wrap gap-[0.45rem]"
    >
      {TABS.map((tab) => {
        const active = value === tab.value;
        return (
          <Button
            key={tab.value}
            type="button"
            role="tab"
            variant="outline"
            size="sm"
            aria-selected={active}
            onClick={() => onChange(tab.value)}
            className={cn(
              "h-auto rounded-full px-[0.7875rem] py-[0.3375rem] text-[0.7875rem]",
              active
                ? "border-primary/30 bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                : "border-border bg-background text-foreground/60",
            )}
          >
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
}
