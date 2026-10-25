import type { ToastActionType } from "@/types/toast";

export const TOAST_CLASS_BY_TYPE: Record<ToastActionType, string> = {
  success:
    "!border-chart-2/40 !bg-chart-2/10 !text-foreground [&_[data-description]]:!text-muted-foreground",
  error:
    "!border-destructive/40 !bg-destructive/10 !text-destructive [&_[data-description]]:!text-destructive/80",
  pending:
    "!border-chart-3/50 !bg-chart-3/15 !text-foreground [&_[data-description]]:!text-muted-foreground",
};
