import { Plus } from "lucide-react";
import { MeetingCard } from "@/components/meetings/MeetingCard";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { NAV_ICONS } from "@/constants/assets";
import { CLAY_CARD, claySurface } from "@/constants/clay";
import { MEETINGS } from "@/data/meetings";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function MeetingsPage() {
  const { toast } = useToast();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHero
        icon={NAV_ICONS.calendar}
        title="Calendar"
        description="Upcoming meetings for this workspace."
        actions={
          <Button
            type="button"
            onClick={() =>
              toast({
                icon: <Plus className="size-4" />,
                title: "Schedule coming soon",
                description: "Meeting create will connect to the backend later.",
                actionType: "pending",
              })
            }
          >
            <Plus className="size-4" aria-hidden="true" />
            Schedule
          </Button>
        }
      />

      <section
        className={cn(CLAY_CARD, claySurface("blue"), "p-6")}
        aria-label="Upcoming meetings"
      >
        <h2 className="text-lg font-extrabold text-clay-blue-ink">
          Upcoming
        </h2>
        <p className="mt-1 text-sm font-medium text-muted-foreground">
          {MEETINGS.length} meetings on the board
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {MEETINGS.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      </section>
    </div>
  );
}
