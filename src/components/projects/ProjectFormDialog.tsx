import { PencilIcon, PlusCircleIcon } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import {
  EMPTY_PROJECT_FORM,
  formFromProject,
  projectFieldsFromForm,
} from "@/components/projects/project-form";
import { ProjectFormFields } from "@/components/projects/ProjectFormFields";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { useToast } from "@/hooks/use-toast";
import { useProjectsStore } from "@/stores/projects-store";
import type { Project } from "@/types/project";

type ProjectFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: Project | null;
};

export function ProjectFormDialog({
  open,
  onOpenChange,
  project = null,
}: ProjectFormDialogProps) {
  const addProject = useProjectsStore((s) => s.addProject);
  const editProject = useProjectsStore((s) => s.editProject);
  const { toast } = useToast();
  const [form, setForm] = useState(EMPTY_PROJECT_FORM);
  const isEdit = Boolean(project);

  useEffect(() => {
    if (open) {
      setForm(project ? formFromProject(project) : EMPTY_PROJECT_FORM);
    }
  }, [open, project]);

  function resetAndClose() {
    setForm(EMPTY_PROJECT_FORM);
    onOpenChange(false);
  }

  function handleSave(e: FormEvent) {
    e.preventDefault();
    if (!form.title.trim()) return;

    const fields = projectFieldsFromForm(form);

    if (project) {
      editProject(project.id, fields);
      toast({
        icon: <PencilIcon className="size-4" />,
        title: "Project updated",
        description: `"${fields.title}" was saved successfully.`,
        actionType: "success",
      });
    } else {
      addProject({ id: crypto.randomUUID(), order: 0, ...fields });
      toast({
        icon: <PlusCircleIcon className="size-4" />,
        title: "Project added",
        description: `"${fields.title}" was created successfully.`,
        actionType: "success",
      });
    }

    resetAndClose();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit project" : "Add project"}</DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Update the project details below."
              : "Create a new project for your workspace."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSave} className="grid gap-4">
          <ProjectFormFields form={form} onChange={setForm} />
          <DialogFooter className="pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={resetAndClose}
              className="min-w-24"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="min-w-24"
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
