import {
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import {
  applyBoardColumns,
  buildBoardColumns,
  findBoardContainer,
  type BoardColumns,
} from "@/lib/boardDnD";
import type { Project } from "@/types/project";

type UseBoardDnDArgs = {
  projects: Project[];
  onBoardUpdate: (next: Project[]) => void;
};

export function useBoardDnD({ projects, onBoardUpdate }: UseBoardDnDArgs) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [columns, setColumns] = useState<BoardColumns>(() =>
    buildBoardColumns(projects),
  );

  useEffect(() => {
    if (!activeId) setColumns(buildBoardColumns(projects));
  }, [projects, activeId]);

  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  const onDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeIdStr = String(active.id);
    const overIdStr = String(over.id);
    const from = findBoardContainer(activeIdStr, columns);
    const to = findBoardContainer(overIdStr, columns);
    if (!from || !to || from === to) return;

    setColumns((prev) => {
      const fromItems = [...prev[from]];
      const toItems = [...prev[to]];
      const fromIndex = fromItems.indexOf(activeIdStr);
      if (fromIndex < 0) return prev;
      fromItems.splice(fromIndex, 1);

      const overIndex =
        overIdStr === to ? toItems.length : toItems.indexOf(overIdStr);
      const insertAt = overIndex < 0 ? toItems.length : overIndex;
      toItems.splice(insertAt, 0, activeIdStr);

      return { ...prev, [from]: fromItems, [to]: toItems };
    });
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    if (!over) {
      setColumns(buildBoardColumns(projects));
      return;
    }

    const activeIdStr = String(active.id);
    const overIdStr = String(over.id);
    const container = findBoardContainer(activeIdStr, columns);
    const overContainer = findBoardContainer(overIdStr, columns);
    if (!container || !overContainer) return;

    let nextColumns = columns;
    if (container === overContainer) {
      const items = columns[container];
      const oldIndex = items.indexOf(activeIdStr);
      const newIndex =
        overIdStr === container ? items.length - 1 : items.indexOf(overIdStr);
      if (oldIndex >= 0 && newIndex >= 0 && oldIndex !== newIndex) {
        nextColumns = {
          ...columns,
          [container]: arrayMove(items, oldIndex, newIndex),
        };
        setColumns(nextColumns);
      }
    }

    onBoardUpdate(applyBoardColumns(projects, nextColumns));
  };

  const onDragCancel = () => {
    setActiveId(null);
    setColumns(buildBoardColumns(projects));
  };

  return {
    activeId,
    activeProject,
    columns,
    onDragStart,
    onDragOver,
    onDragEnd,
    onDragCancel,
  };
}
