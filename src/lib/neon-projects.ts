import { neon } from "@neondatabase/serverless";
import type { Project } from "@/types/project";

type NeonProjectRow = {
  id: string;
  title: string;
  description: string;
  status: Project["status"];
  priority: Project["priority"];
  project_order: number;
  category: Project["category"];
  progress: number;
  members: Project["members"];
  member_count: number;
  due_label: string;
};

export async function fetchNeonProjects(): Promise<Project[]> {
  const connectionString = import.meta.env.VITE_NEON_DATABASE_URL;
  if (!connectionString) {
    throw new Error("VITE_NEON_DATABASE_URL is not configured.");
  }

  const sql = neon(connectionString);
  const rows = await sql<NeonProjectRow[]>`
    SELECT
      id,
      title,
      description,
      status,
      priority,
      "order" AS project_order,
      category,
      progress,
      members,
      member_count,
      due_label
    FROM public.projects
    ORDER BY "order", id
  `;

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    status: row.status,
    priority: row.priority,
    order: row.project_order,
    category: row.category,
    progress: row.progress,
    members: row.members,
    memberCount: row.member_count,
    dueLabel: row.due_label,
  }));
}
