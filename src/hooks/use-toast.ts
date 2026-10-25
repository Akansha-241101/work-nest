import { toast as sonnerToast } from "sonner";
import { TOAST_CLASS_BY_TYPE } from "@/hooks/toast-styles";
import type { ToastPayload } from "@/types/toast";

export function useToast() {
  function toast({ icon, title, description, actionType }: ToastPayload) {
    sonnerToast(title, {
      description,
      icon,
      className: TOAST_CLASS_BY_TYPE[actionType],
    });
  }

  return { toast };
}
