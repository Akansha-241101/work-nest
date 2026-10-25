import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { cn } from "@/lib/utils";
import { SidebarLabel } from "./SidebarLabel";

type SidebarNavItemProps = {
  to: string;
  label: string;
  icon: LucideIcon;
  collapsed: boolean;
};

/** Same row chrome as AppLogo — icons never recenter on collapse. */
const navClassName = cn(
  "flex w-full min-w-0 flex-row flex-nowrap items-center overflow-hidden rounded-2xl px-2.5 py-1.5 text-sm text-foreground/55 no-underline",
  "transition-colors duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
  "hover:bg-muted hover:text-muted-foreground",
  "aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium aria-[current=page]:text-sidebar-accent-foreground",
);

export function SidebarNavItem({
  to,
  label,
  icon: Icon,
  collapsed,
}: SidebarNavItemProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <NavLink to={to} aria-label={label} className={navClassName}>
          <span className="flex size-8 shrink-0 items-center justify-center">
            <Icon
              aria-hidden="true"
              className="size-[18px]"
              strokeWidth={1.75}
            />
          </span>
          <SidebarLabel collapsed={collapsed}>{label}</SidebarLabel>
        </NavLink>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        sideOffset={4}
        hidden={!collapsed}
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
