import { ILLUSTRATIONS } from "@/constants/assets";
import { DASHBOARD_USER_NAME } from "@/data/dashboard";
import { cn } from "@/lib/utils";
import { HEADER_CONTROL } from "./headerChrome";

export function HeaderUser() {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 py-1 pr-4 pl-1",
        HEADER_CONTROL,
      )}
    >
      <img
        src={ILLUSTRATIONS.avatarGirl}
        alt=""
        draggable={false}
        className="size-8 rounded-full bg-clay-yellow object-cover object-top"
      />
      <div className="hidden leading-tight sm:block">
        <p className="text-sm font-extrabold text-foreground">
          {DASHBOARD_USER_NAME}
        </p>
        <p className="text-[0.7rem] font-semibold text-foreground/55">
          Little explorer
        </p>
      </div>
    </div>
  );
}
