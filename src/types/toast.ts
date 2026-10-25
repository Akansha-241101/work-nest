import type { ReactNode } from "react";

export type ToastActionType = "success" | "error" | "pending";

export type ToastPayload = {
  icon: ReactNode;
  title: string;
  description: string;
  actionType: ToastActionType;
};
