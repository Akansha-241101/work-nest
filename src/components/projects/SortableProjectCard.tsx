import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type SortableProjectCardProps = {
  project: Project;
};

export function SortableProjectCard({ project }: SortableProjectCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id, data: { status: project.status } });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={cn(
        "touch-none outline-none",
        isDragging && "z-10 opacity-30",
      )}
      {...attributes}
      {...listeners}
    >
      <ProjectCard
        project={project}
        className="cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}
