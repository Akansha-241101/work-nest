import { Plus } from "lucide-react";
import { PageIntro } from "@/components/shared/PageIntro";
import { Button } from "@/components/ui/Button";
import type { ProjectsView } from "@/types/project";
import { ProjectsViewToggle } from "./ProjectsViewToggle";
import { memo } from "react";

type ProjectsPageHeaderProps = {
  view: ProjectsView;
  onViewChange: (view: ProjectsView) => void;
};

export const ProjectsPageHeader = memo(
  ({ view, onViewChange }: ProjectsPageHeaderProps) => {
    console.log("hi Akshu");
    return (
      <header className="flex flex-col gap-[0.9rem] sm:flex-row sm:items-start sm:justify-between">
        <PageIntro
          title="Projects"
          description="Manage and track all your projects in one place."
        />
        <div className="flex flex-wrap items-center gap-[0.45rem] sm:pt-[0.225rem]">
          <ProjectsViewToggle view={view} onChange={onViewChange} />
          <Button
            type="button"
            className="h-9 gap-[0.45rem] rounded-[0.675rem] px-[0.9rem] text-[0.7875rem] bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <Plus className="size-[0.9rem]" aria-hidden="true" />
            Add project
          </Button>
        </div>
      </header>
    );
  },
);
