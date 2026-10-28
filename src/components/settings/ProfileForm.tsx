import { Input } from "@/components/ui/Input";
import { CLAY_CARD, CLAY_SHINE } from "@/constants/clay";
import { cn } from "@/lib/utils";
import type { ProfileForm as ProfileFormValues } from "@/types/settings";

type ProfileFormProps = {
  value: ProfileFormValues;
  onChange: (next: ProfileFormValues) => void;
};

export function ProfileForm({ value, onChange }: ProfileFormProps) {
  return (
    <section
      className={cn(CLAY_CARD, CLAY_SHINE, "grid gap-4 bg-card p-6")}
      aria-labelledby="profile-title"
    >
      <h2 id="profile-title" className="text-lg font-extrabold">
        Profile
      </h2>
      <label className="grid gap-2 text-sm font-bold">
        Name
        <Input
          value={value.name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
        />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Email
        <Input
          type="email"
          value={value.email}
          onChange={(e) => onChange({ ...value, email: e.target.value })}
        />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Role
        <Input
          value={value.role}
          onChange={(e) => onChange({ ...value, role: e.target.value })}
        />
      </label>
    </section>
  );
}
