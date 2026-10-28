import { CLAY_CARD, CLAY_SHINE } from "@/constants/clay";
import { cn } from "@/lib/utils";
import type { MessageThread } from "@/types/message";

type ThreadListProps = {
  threads: MessageThread[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function ThreadList({ threads, activeId, onSelect }: ThreadListProps) {
  return (
    <aside
      className={cn(CLAY_CARD, CLAY_SHINE, "flex flex-col gap-2 bg-card p-4")}
      aria-label="Conversations"
    >
      {threads.map((thread) => {
        const active = thread.id === activeId;
        return (
          <button
            key={thread.id}
            type="button"
            onClick={() => onSelect(thread.id)}
            className={cn(
              "flex w-full cursor-pointer items-start gap-3 rounded-2xl px-3 py-3 text-left transition-colors",
              active
                ? "bg-primary text-primary-foreground shadow-clay-primary"
                : "hover:bg-muted",
            )}
          >
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-extrabold",
                active ? "bg-white/25" : "bg-clay-lavender text-clay-lavender-ink",
              )}
            >
              {thread.name
                .split(" ")
                .map((part) => part[0]?.toUpperCase() ?? "")
                .join("")
                .slice(0, 2)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-extrabold">
                  {thread.name}
                </span>
                <span
                  className={cn(
                    "shrink-0 text-[0.7rem] font-bold",
                    active ? "text-primary-foreground/70" : "text-muted-foreground",
                  )}
                >
                  {thread.timeLabel}
                </span>
              </span>
              <span
                className={cn(
                  "mt-0.5 block truncate text-xs font-medium",
                  active ? "text-primary-foreground/80" : "text-muted-foreground",
                )}
              >
                {thread.preview}
              </span>
            </span>
            {thread.unread > 0 && !active && (
              <span className="mt-1 rounded-full bg-primary px-2 py-0.5 text-[0.65rem] font-extrabold text-primary-foreground">
                {thread.unread}
              </span>
            )}
          </button>
        );
      })}
    </aside>
  );
}
