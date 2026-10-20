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
        {!collapsed && (
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/65">
            Workspace
          </p>
        )}
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem key={item.to} collapsed={collapsed} {...item} />
        ))}
      </nav>
      {/* Sidebar controls */}
      <div className="mt-4 shrink-0 border-t border-sidebar-border/70 pt-3">
        <Button
          type="button"
          variant="ghost"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
          onClick={() => setCollapsed((value) => !value)}
          className={cn(
            "h-10 w-full rounded-lg text-muted-foreground",
            "transition-colors duration-200",
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            collapsed ? "justify-center px-0" : "justify-start gap-3 px-3",
          )}
        >
          <span className="flex size-5 shrink-0 items-center justify-center">
            <PanelLeftClose
              aria-hidden="true"
              className={cn(
                "size-[18px]",
                "transition-transform duration-200 ease-out",
                collapsed && "rotate-180",
              )}
            />
          </span>

          {!collapsed && (
            <span className="truncate text-sm font-medium">
              Collapse sidebar
            </span>
          )}
        </Button>
      </div>
    </aside>
  );
}
