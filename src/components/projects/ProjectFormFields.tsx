import type { ProjectFormValues } from "@/components/projects/project-form";
import { ProjectFormSelects } from "@/components/projects/ProjectFormSelects";
import { Input } from "@/components/ui/Input";

const fieldClass = "grid gap-[0.3375rem] text-[0.7875rem]";
const inputClass = "h-9 rounded-[0.675rem] text-[0.7875rem]";

type ProjectFormFieldsProps = {
  form: ProjectFormValues;
  onChange: (next: ProjectFormValues) => void;
};

export function ProjectFormFields({ form, onChange }: ProjectFormFieldsProps) {
  return (
    <>
      <label className={fieldClass}>
        Title
        <Input
          value={form.title}
          onChange={(e) => onChange({ ...form, title: e.target.value })}
          placeholder="Project title"
          required
          className={inputClass}
        />
      </label>

      <label className={fieldClass}>
        Description
        <Input
          value={form.description}
          onChange={(e) => onChange({ ...form, description: e.target.value })}
          placeholder="Short description"
          className={inputClass}
        />
      </label>

      <ProjectFormSelects form={form} onChange={onChange} />

      <div className="grid gap-[0.9rem] sm:grid-cols-2">
        <label className={fieldClass}>
          Progress (%)
          <Input
            type="number"
            min={0}
            max={100}
            value={form.progress}
            onChange={(e) =>
              onChange({ ...form, progress: Number(e.target.value) })
            }
            className={inputClass}
          />
        </label>

        <label className={fieldClass}>
          Member count
          <Input
            type="number"
            min={0}
            value={form.memberCount}
            onChange={(e) =>
              onChange({ ...form, memberCount: Number(e.target.value) })
            }
            className={inputClass}
          />
        </label>
      </div>

      <label className={fieldClass}>
        Member initials
        <Input
          value={form.memberInitials}
          onChange={(e) =>
            onChange({ ...form, memberInitials: e.target.value })
          }
          placeholder="MI, AA"
          className={inputClass}
        />
      </label>
    </>
  );
}
