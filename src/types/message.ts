export type MessageThread = {
  id: string;
  name: string;
  preview: string;
  timeLabel: string;
  unread: number;
};

export type ChatMessage = {
  id: string;
  threadId: string;
  fromMe: boolean;
  text: string;
  timeLabel: string;
};
