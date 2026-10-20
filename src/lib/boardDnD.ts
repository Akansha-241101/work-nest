import type { Project, ProjectStatus } from "@/types/project";

export const BOARD_COLUMNS: ProjectStatus[] = [
  "todo",
  "in-progress",
  "in-review",
  "done",
];

export type BoardColumns = Record<ProjectStatus, string[]>;

export function emptyBoardColumns(): BoardColumns {
  return { todo: [], "in-progress": [], "in-review": [], done: [] };
}

/** Build column → project-id lists, sorted by `order`. */
export function buildBoardColumns(projects: Project[]): BoardColumns {
  const columns = emptyBoardColumns();
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  for (const project of sorted) columns[project.status].push(project.id);
  return columns;
}

export function findBoardContainer(
  id: string,
  columns: BoardColumns,
): ProjectStatus | undefined {
  if (BOARD_COLUMNS.includes(id as ProjectStatus)) return id as ProjectStatus;
  return BOARD_COLUMNS.find((status) => columns[status].includes(id));
}

/** Apply column membership + sequential `order` back onto projects. */
export function applyBoardColumns(
  projects: Project[],
  columns: BoardColumns,
): Project[] {
  const byId = new Map(projects.map((project) => [project.id, project]));
  const next: Project[] = [];

  for (const status of BOARD_COLUMNS) {
    columns[status].forEach((id, index) => {
      const project = byId.get(id);
      if (project) {
        next.push({ ...project, status, order: index });
        byId.delete(id);
      }
    });
  }

  for (const leftover of byId.values()) next.push(leftover);
  return next;
}
