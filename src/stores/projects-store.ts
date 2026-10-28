import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ALL_PROJECTS } from "@/data/projects";
import type { Project } from "@/types/project";

type ProjectsState = {
  projects: Project[];
  addProject: (project: Project) => void;
  removeProject: (id: string) => void;
  editProject: (id: string, updates: Partial<Omit<Project, "id">>) => void;
};

export const useProjectsStore = create<ProjectsState>()(
  persist(
    (set) => ({
      projects: ALL_PROJECTS,

      addProject: (project) =>
        set((state) => ({ projects: [...state.projects, project] })),

      removeProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
        })),

      editProject: (id, updates) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id ? { ...project, ...updates } : project,
          ),
        })),
    }),
    { name: "work-nest-projects-v2" },
  ),
);
