import { Columns3, List } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { ProjectsView } from "@/types/project";

type ProjectsViewToggleProps = {
  view: ProjectsView;
  onChange: (view: ProjectsView) => void;
};

export function ProjectsViewToggle({ view, onChange }: ProjectsViewToggleProps) {
  return (
    <div
      role="group"
      aria-label="Projects view"
      className="inline-flex rounded-[0.675rem] border border-border bg-background p-[0.225rem]"
    >
      <Button
        type="button"
        variant="ghost"
        size="sm"
        aria-pressed={view === "list"}
        onClick={() => onChange("list")}
        className={cn(
          "h-8 gap-[0.3375rem] rounded-[0.45rem] px-[0.675rem] text-[0.7875rem]",
          view === "list" &&
            "bg-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
        )}
      >
        <List className="size-[0.9rem]" aria-hidden="true" />
        List
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        aria-pressed={view === "board"}
        onClick={() => onChange("board")}
        className={cn(
          "h-8 gap-[0.3375rem] rounded-[0.45rem] px-[0.675rem] text-[0.7875rem]",
          view === "board" &&
            "bg-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
        )}
      >
        <Columns3 className="size-[0.9rem]" aria-hidden="true" />
        Board
      </Button>
    </div>
  );
}
