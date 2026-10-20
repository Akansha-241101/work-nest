import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { SortableProjectCard } from "./SortableProjectCard";

type BoardColumnProps = {
  id: string;
  title: string;
  projects: Project[];
};

export function BoardColumn({ id, title, projects }: BoardColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: { type: "column", status: id },
  });

  return (
    <section
      aria-label={title}
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-[0.675rem] rounded-[0.9rem] border border-border bg-muted/30 p-[0.675rem]",
        isOver && "border-primary/40 bg-accent/50",
      )}
    >
      <header className="flex items-center justify-between px-[0.225rem]">
        <h3 className="font-serif text-[0.7875rem] font-semibold tracking-wide uppercase">
          {title}
        </h3>
        <span className="text-[0.675rem] text-muted-foreground tabular-nums">
          {projects.length}
        </span>
      </header>
      <SortableContext
        id={id}
        items={projects.map((p) => p.id)}
        strategy={verticalListSortingStrategy}
      >
        <div
          ref={setNodeRef}
          className="flex min-h-[9rem] flex-1 flex-col gap-[0.675rem]"
        >
          {projects.map((project) => (
            <SortableProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SortableContext>
    </section>
  );
}
