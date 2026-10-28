import { ILLUSTRATIONS } from "@/constants/assets";
import { DASHBOARD_USER_NAME } from "@/data/dashboard";

export function SidebarProfile() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="size-28 overflow-hidden rounded-full border-4 border-card/90 bg-linear-to-b from-clay-yellow to-card shadow-clay">
        <img
          src={ILLUSTRATIONS.avatarGirl}
          alt={`${DASHBOARD_USER_NAME}'s avatar`}
          draggable={false}
          className="size-full translate-y-2 scale-110 object-cover object-top"
        />
      </div>
      <p className="mt-4 text-lg font-extrabold text-sidebar-foreground">
        Hi, {DASHBOARD_USER_NAME}! <span aria-hidden="true">👋</span>
      </p>
      <p className="mt-0.5 text-xs font-medium text-sidebar-foreground/65">
        Good to see you again
      </p>
    </div>
  );
}
