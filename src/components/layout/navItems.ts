import {
  CalendarDays,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/team", label: "Team", icon: Users },
  { to: "/meetings", label: "Meetings", icon: CalendarDays },
  { to: "/settings", label: "Settings", icon: Settings },
];

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Overview",
  "/projects": "Projects",
  "/team": "Team",
  "/meetings": "Meetings",
  "/settings": "Settings",
};

export function getPageTitle(pathname: string): string {
  return PAGE_TITLES[pathname] ?? "Work Nest";
}
