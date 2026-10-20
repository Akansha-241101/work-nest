import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";
import { HEADER_CONTROL } from "./headerChrome";

export function HeaderUser() {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 py-0.5 pr-3 pl-1",
        HEADER_CONTROL,
      )}
    >
      <Avatar className="size-8">
        <AvatarFallback className="text-xs">AS</AvatarFallback>
      </Avatar>
      <div className="hidden leading-tight sm:block">
        <p className="font-serif text-sm font-semibold text-foreground">
          Akansha A.
        </p>
        <p className="font-serif text-[10px] text-foreground/50">Team manager</p>
      </div>
    </div>
  );
}
