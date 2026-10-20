import { PanelLeftClose } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AppLogo } from "./AppLogo";
import { NAV_ITEMS } from "./navItems";
import {
  SIDEBAR_MOTION,
  SIDEBAR_WIDTH_COLLAPSED,
  SIDEBAR_WIDTH_EXPANDED,
} from "./sidebarMotion";
import { SidebarNavItem } from "./SidebarNavItem";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      data-collapsed={collapsed || undefined}
      className={cn(
        "hidden h-full shrink-0 flex-col overflow-hidden border-r border-sidebar-border bg-sidebar px-3 py-5 md:flex",
        "transition-[width]",
        SIDEBAR_MOTION,
        collapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH_EXPANDED,
      )}
    >
      <AppLogo collapsed={collapsed} />
      <nav
        aria-label="Main navigation"
        className="flex min-h-0 flex-1 flex-col gap-1 overflow-x-hidden overflow-y-auto"
      >
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem key={item.to} collapsed={collapsed} {...item} />
        ))}
      </nav>
      <Button
        type="button"
        variant="ghost"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-expanded={!collapsed}
        className="mt-4 hidden h-10 w-full shrink-0 justify-start gap-0 px-2.5 text-foreground/55 md:inline-flex"
        onClick={() => setCollapsed((value) => !value)}
      >
        <span className="flex size-8 shrink-0 items-center justify-center">
          <PanelLeftClose
            aria-hidden="true"
            className={cn(
              "size-[18px] transition-transform",
              SIDEBAR_MOTION,
              collapsed && "rotate-180",
            )}
          />
        </span>
      </Button>
    </aside>
  );
}
