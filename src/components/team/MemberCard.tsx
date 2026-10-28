import { Badge } from "@/components/ui/Badge";
import { CLAY_CARD, claySurface } from "@/constants/clay";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types/team";

type MemberCardProps = {
  member: TeamMember;
};

export function MemberCard({ member }: MemberCardProps) {
  return (
    <article
      className={cn(
        CLAY_CARD,
        claySurface(member.tone),
        "flex items-center gap-4 p-5",
      )}
    >
      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-card text-sm font-extrabold shadow-clay-sm">
        {member.initials}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-extrabold">{member.name}</h3>
        <p className="truncate text-sm font-medium text-foreground/65">
          {member.role}
        </p>
        <Badge
          variant="status"
          className="mt-2"
        >
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full",
              member.status === "active" ? "bg-chart-2" : "bg-chart-3",
            )}
          />
          {member.status === "active" ? "Active" : "Away"}
        </Badge>
      </div>
    </article>
  );
}
