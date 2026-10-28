import type { ChatMessage, MessageThread } from "@/types/message";

/** Lean seed set — threads + a few messages for the active chat. */
export const MESSAGE_THREADS: MessageThread[] = [
  {
    id: "th1",
    name: "Sarah Chen",
    preview: "Can you review the hero copy?",
    timeLabel: "2m",
    unread: 2,
  },
  {
    id: "th2",
    name: "Design crew",
    preview: "Tokens look great on mobile.",
    timeLabel: "1h",
    unread: 0,
  },
  {
    id: "th3",
    name: "Alex Rivera",
    preview: "Board update is ready.",
    timeLabel: "Yesterday",
    unread: 1,
  },
  {
    id: "th4",
    name: "Product chat",
    preview: "Let's keep the scope lean.",
    timeLabel: "Mon",
    unread: 0,
  },
];

export const CHAT_MESSAGES: ChatMessage[] = [
  {
    id: "c1",
    threadId: "th1",
    fromMe: false,
    text: "Hey! Can you review the hero copy before we ship?",
    timeLabel: "10:12",
  },
  {
    id: "c2",
    threadId: "th1",
    fromMe: true,
    text: "Sure — send the latest draft and I'll take a look.",
    timeLabel: "10:14",
  },
  {
    id: "c3",
    threadId: "th1",
    fromMe: false,
    text: "Shared in the project folder. Thanks!",
    timeLabel: "10:15",
  },
];
