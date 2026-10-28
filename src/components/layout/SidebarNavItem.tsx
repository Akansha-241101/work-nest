import { NavLink } from "react-router-dom";
import { CLAY_ICON } from "@/constants/clay";
import { cn } from "@/lib/utils";

type SidebarNavItemProps = {
  to: string;
  label: string;
  icon: string;
  onNavigate?: () => void;
};

const navClassName = cn(
  "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-[0.95rem] font-semibold text-sidebar-foreground/85 no-underline",
  "transition-[background-color,color,box-shadow,transform] duration-200 motion-reduce:transition-none",
  "hover:bg-sidebar-accent/70 hover:text-sidebar-foreground",
  "aria-[current=page]:bg-sidebar-primary aria-[current=page]:bg-linear-to-b aria-[current=page]:from-white/35 aria-[current=page]:via-white/10 aria-[current=page]:to-white/0",
  "aria-[current=page]:-translate-y-px aria-[current=page]:font-bold aria-[current=page]:text-sidebar-primary-foreground aria-[current=page]:shadow-clay-primary",
);

export function SidebarNavItem({
  to,
  label,
  icon,
  onNavigate,
}: SidebarNavItemProps) {
  return (
    <NavLink to={to} onClick={onNavigate} className={navClassName}>
      <img
        src={icon}
        alt=""
        draggable={false}
        className={cn(CLAY_ICON, "size-7")}
      />
      <span className="truncate">{label}</span>
    </NavLink>
  );
}
