import { useMemo, useState } from "react";
import { ChatPanel } from "@/components/messages/ChatPanel";
import { ThreadList } from "@/components/messages/ThreadList";
import { PageHero } from "@/components/shared/PageHero";
import { NAV_ICONS } from "@/constants/assets";
import { CHAT_MESSAGES, MESSAGE_THREADS } from "@/data/messages";

export function MessagesPage() {
  const [activeId, setActiveId] = useState(MESSAGE_THREADS[0].id);
  const activeThread =
    MESSAGE_THREADS.find((thread) => thread.id === activeId) ??
    MESSAGE_THREADS[0];

  const messages = useMemo(
    () => CHAT_MESSAGES.filter((message) => message.threadId === activeId),
    [activeId],
  );

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <PageHero
        icon={NAV_ICONS.chat}
        title="Messages"
        description="Keep workspace chats short and clear."
      />

      <div className="grid gap-5 lg:grid-cols-[18rem_1fr] xl:grid-cols-[20rem_1fr]">
        <ThreadList
          threads={MESSAGE_THREADS}
          activeId={activeThread.id}
          onSelect={setActiveId}
        />
        <ChatPanel thread={activeThread} messages={messages} />
      </div>
    </div>
  );
}
