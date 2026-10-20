import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SIDEBAR_MOTION } from "./sidebarMotion";

type SidebarLabelProps = {
  collapsed: boolean;
  children: ReactNode;
  className?: string;
};

/**
 * Keeps the label on the same flex row as the icon.
 * Animates max-width + opacity (interpolatable) instead of grid/fr hacks.
 */
export function SidebarLabel({
  collapsed,
  children,
  className,
}: SidebarLabelProps) {
  return (
    <span
      aria-hidden={collapsed}
      className={cn(
        "inline-block overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin]",
        SIDEBAR_MOTION,
        collapsed
          ? "pointer-events-none ml-0 max-w-0 opacity-0"
          : "ml-2.5 max-w-[10rem] opacity-100",
        className,
      )}
    >
      {children}
    </span>
  );
}
