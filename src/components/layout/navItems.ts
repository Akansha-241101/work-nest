import { NAV_ICONS } from "@/constants/assets";

export type NavItem = {
  to: string;
  label: string;
  icon: string;
};

export const NAV_ITEMS: NavItem[] = [
  { to: "/dashboard", label: "Dashboard", icon: NAV_ICONS.home },
  { to: "/tasks", label: "Tasks", icon: NAV_ICONS.tasks },
  { to: "/meetings", label: "Calendar", icon: NAV_ICONS.calendar },
  { to: "/projects", label: "Projects", icon: NAV_ICONS.folder },
  { to: "/messages", label: "Messages", icon: NAV_ICONS.chat },
  { to: "/settings", label: "Settings", icon: NAV_ICONS.settings },
];

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/tasks": "Tasks",
  "/meetings": "Calendar",
  "/projects": "Projects",
  "/analytics": "Analytics",
  "/messages": "Messages",
  "/team": "Team",
  "/settings": "Settings",
};

export function getPageTitle(pathname: string): string {
  return PAGE_TITLES[pathname] ?? "Work Nest";
}
