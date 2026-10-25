import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { ProjectCardBody } from "@/components/projects/ProjectCardBody";
import { ProjectCardMenu } from "@/components/projects/ProjectCardMenu";
import { ProjectFormDialog } from "@/components/projects/ProjectFormDialog";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";
import { useToast } from "@/hooks/use-toast";
import { useProjectsStore } from "@/stores/projects-store";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const removeProject = useProjectsStore((s) => s.removeProject);
  const { toast } = useToast();
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  function handleDelete() {
    removeProject(project.id);
    toast({
      icon: <Trash2Icon className="size-4" />,
      title: "Project deleted",
      description: `"${project.title}" was removed successfully.`,
      actionType: "success",
    });
  }

  return (
    <article className="flex flex-col gap-[0.675rem] rounded-[0.9rem] border border-border bg-card p-[1.125rem]">
      <ProjectCardBody
        project={project}
        actions={
          <ProjectCardMenu
            onEdit={() => setEditOpen(true)}
            onDelete={() => setDeleteOpen(true)}
          />
        }
      />

      <ProjectFormDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        project={project}
      />
      <ConfirmationModal
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="Delete project?"
        description="Are you sure you want to delete this project? This action cannot be undone."
        onConfirm={handleDelete}
      />
    </article>
  );
}
