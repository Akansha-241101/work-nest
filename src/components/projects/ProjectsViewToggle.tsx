import { Columns3, List } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { ProjectsView } from "@/types/project";

const OPTIONS = [
  { value: "list", label: "List", Icon: List },
  { value: "board", label: "Board", Icon: Columns3 },
] as const;

type ProjectsViewToggleProps = {
  view: ProjectsView;
  onChange: (view: ProjectsView) => void;
};

export function ProjectsViewToggle({
  view,
  onChange,
}: ProjectsViewToggleProps) {
  return (
    <div
      role="group"
      aria-label="Projects view"
      className="inline-flex gap-1 rounded-full bg-muted/70 p-1 shadow-clay-inset"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = view === value;
        return (
          <Button
            key={value}
            type="button"
            variant="ghost"
            size="sm"
            aria-pressed={active}
            onClick={() => onChange(value)}
            className={cn(
              "h-8 gap-1.5 px-3.5 text-foreground/60 hover:bg-transparent hover:text-foreground",
              active && "bg-card text-foreground shadow-clay-sm hover:bg-card",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
            {label}
          </Button>
        );
      })}
    </div>
  );
}
