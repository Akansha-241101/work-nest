import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { STATUS_LABELS } from "@/data/projectsIndex";
import { useBoardDnD } from "@/hooks/useBoardDnD";
import { BOARD_COLUMNS } from "@/lib/boardDnD";
import type { Project } from "@/types/project";
import { BoardColumn } from "./BoardColumn";

type ProjectsBoardProps = {
  projects: Project[];
  onBoardUpdate: (next: Project[]) => void;
};

export function ProjectsBoard({ projects, onBoardUpdate }: ProjectsBoardProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
  );
  const {
    activeProject,
    columns,
    onDragStart,
    onDragOver,
    onDragEnd,
    onDragCancel,
  } = useBoardDnD({ projects, onBoardUpdate });

  const byId = new Map(projects.map((project) => [project.id, project]));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragCancel={onDragCancel}
      onDragEnd={onDragEnd}
    >
      <div className="grid w-full grid-cols-1 gap-[0.9rem] sm:grid-cols-2 md:grid-cols-4">
        {BOARD_COLUMNS.map((status) => (
          <BoardColumn
            key={status}
            id={status}
            title={STATUS_LABELS[status]}
            projects={columns[status]
              .map((id) => byId.get(id))
              .filter((project): project is Project => Boolean(project))}
          />
        ))}
      </div>
      <DragOverlay dropAnimation={null}>
        {activeProject ? (
          <ProjectCard project={activeProject} className="rotate-1 shadow-lg" />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
