import { UserPlus } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { MemberCard } from "@/components/team/MemberCard";
import { Button } from "@/components/ui/Button";
import { HEADER_ICONS } from "@/constants/assets";
import { TEAM_MEMBERS } from "@/data/team";
import { useToast } from "@/hooks/use-toast";

export function TeamPage() {
  const { toast } = useToast();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHero
        icon={HEADER_ICONS.user}
        title="Team"
        description="People in this workspace and what they do."
        actions={
          <Button
            type="button"
            onClick={() =>
              toast({
                icon: <UserPlus className="size-4" />,
                title: "Invite coming soon",
                description: "Invites will connect to auth once it lands.",
                actionType: "pending",
              })
            }
          >
            <UserPlus className="size-4" aria-hidden="true" />
            Invite
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
