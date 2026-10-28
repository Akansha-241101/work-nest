import { CLAY_CARD, claySurface } from "@/constants/clay";
import { cn } from "@/lib/utils";
import type { WorkspacePrefs } from "@/types/settings";

const PREF_ROWS: {
  key: keyof WorkspacePrefs;
  label: string;
  hint: string;
}[] = [
  {
    key: "emailAlerts",
    label: "Email alerts",
    hint: "Get notified when someone mentions you.",
  },
  {
    key: "weeklyDigest",
    label: "Weekly digest",
    hint: "A short summary every Monday morning.",
  },
  {
    key: "compactCards",
    label: "Compact cards",
    hint: "Tighter spacing on project and task cards.",
  },
];

type PrefsFormProps = {
  value: WorkspacePrefs;
  onChange: (next: WorkspacePrefs) => void;
};

export function PrefsForm({ value, onChange }: PrefsFormProps) {
  return (
    <section
      className={cn(CLAY_CARD, claySurface("lavender"), "grid gap-4 p-6")}
      aria-labelledby="prefs-title"
    >
      <h2 id="prefs-title" className="text-lg font-extrabold">
        Preferences
      </h2>
      {PREF_ROWS.map((row) => (
        <label
          key={row.key}
          className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl bg-card/80 px-4 py-3 shadow-clay-sm"
        >
          <span>
            <span className="block text-sm font-extrabold">{row.label}</span>
            <span className="mt-0.5 block text-xs font-medium text-muted-foreground">
              {row.hint}
            </span>
          </span>
          <input
            type="checkbox"
            checked={value[row.key]}
            onChange={(e) =>
              onChange({ ...value, [row.key]: e.target.checked })
            }
            className="mt-1 size-5 accent-[var(--primary)]"
          />
        </label>
      ))}
    </section>
  );
}
