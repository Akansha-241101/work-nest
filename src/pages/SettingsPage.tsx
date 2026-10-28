import { Save } from "lucide-react";
import { useState } from "react";
import { PrefsForm } from "@/components/settings/PrefsForm";
import { ProfileForm } from "@/components/settings/ProfileForm";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { NAV_ICONS } from "@/constants/assets";
import { DEFAULT_PREFS, DEFAULT_PROFILE } from "@/data/settings";
import { useToast } from "@/hooks/use-toast";

export function SettingsPage() {
  const { toast } = useToast();
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  function handleSave() {
    toast({
      icon: <Save className="size-4" />,
      title: "Settings saved",
      description: "Local preview only — persistence comes with the backend.",
      actionType: "success",
    });
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHero
        icon={NAV_ICONS.settings}
        title="Settings"
        description="Your profile and workspace preferences."
        actions={
          <Button type="button" onClick={handleSave}>
            <Save className="size-4" aria-hidden="true" />
            Save changes
          </Button>
        }
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <ProfileForm value={profile} onChange={setProfile} />
        <PrefsForm value={prefs} onChange={setPrefs} />
      </div>
    </div>
  );
}
