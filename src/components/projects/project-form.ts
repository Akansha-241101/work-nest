import type {
  Project,
  ProjectCategory,
  ProjectMember,
  ProjectPriority,
  ProjectStatus,
} from "@/types/project";

export type ProjectFormValues = {
  title: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  category: ProjectCategory;
  dueLabel: string;
  progress: number;
  memberCount: number;
  memberInitials: string;
};

export const EMPTY_PROJECT_FORM: ProjectFormValues = {
  title: "",
  description: "",
  status: "todo",
  priority: "medium",
  category: "Product",
  dueLabel: "",
  progress: 0,
  memberCount: 0,
  memberInitials: "",
};

export function parseMemberInitials(value: string): ProjectMember[] {
  return value
    .split(/[,\s]+/)
    .map((part) => part.trim().toUpperCase())
    .filter(Boolean)
    .map((initials, index) => ({
      id: `member-${index}-${initials}`,
      initials: initials.slice(0, 2),
    }));
}

export function formFromProject(project: Project): ProjectFormValues {
  return {
    title: project.title,
    description: project.description,
    status: project.status,
    priority: project.priority,
    category: project.category,
    dueLabel: project.dueLabel,
    progress: project.progress,
    memberCount: project.memberCount,
    memberInitials: project.members.map((m) => m.initials).join(", "),
  };
}

export function projectFieldsFromForm(form: ProjectFormValues) {
  const members = parseMemberInitials(form.memberInitials);
  const progress = Math.min(100, Math.max(0, Number(form.progress) || 0));
  const memberCount = Math.max(0, Number(form.memberCount) || members.length);

  return {
    title: form.title.trim(),
    description: form.description.trim(),
    status: form.status,
    priority: form.priority,
    category: form.category,
    dueLabel: form.dueLabel.trim() || "No due date",
    progress,
    members,
    memberCount,
  };
}
