import { Button } from "@/components/ui/Button";

type TabOption<T extends string> = {
  value: T;
  label: string;
};

type PillTabsProps<T extends string> = {
  value: T;
  options: TabOption<T>[];
  onChange: (value: T) => void;
  label: string;
};

export function PillTabs<T extends string>({
  value,
  options,
  onChange,
  label,
}: PillTabsProps<T>) {
  return (
    <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((tab) => {
        const active = value === tab.value;
        return (
          <Button
            key={tab.value}
            type="button"
            role="tab"
            variant={active ? "default" : "outline"}
            size="sm"
            aria-selected={active}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
}
