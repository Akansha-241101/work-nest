import { CLAY_CARD, CLAY_SHINE } from "@/constants/clay";
import { cn } from "@/lib/utils";
import type { ChatMessage, MessageThread } from "@/types/message";

type ChatPanelProps = {
  thread: MessageThread;
  messages: ChatMessage[];
};

export function ChatPanel({ thread, messages }: ChatPanelProps) {
  return (
    <section
      className={cn(
        CLAY_CARD,
        CLAY_SHINE,
        "flex min-h-96 flex-col bg-card p-5",
      )}
      aria-label={`Chat with ${thread.name}`}
    >
      <header className="border-b border-border/60 pb-4">
        <h2 className="text-lg font-extrabold">{thread.name}</h2>
        <p className="text-sm font-medium text-muted-foreground">
          {thread.preview}
        </p>
      </header>

      <div className="mt-4 flex flex-1 flex-col gap-3 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="m-auto text-sm font-medium text-muted-foreground">
            No messages in this thread yet.
          </p>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-clay-sm",
                message.fromMe
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-muted text-foreground",
              )}
            >
              <p>{message.text}</p>
              <p
                className={cn(
                  "mt-1 text-[0.65rem] font-bold",
                  message.fromMe
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground",
                )}
              >
                {message.timeLabel}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
