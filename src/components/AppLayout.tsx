import {
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
  CalendarDays,
} from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/team", label: "Team", icon: Users },
  { to: "/meetings", label: "Meetings", icon: CalendarDays },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function AppLayout() {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[240px_1fr]">
      <aside className="border-b bg-white p-4 md:min-h-screen md:border-b-0 md:border-r">
        <Link className="mb-6 block text-lg font-semibold" to="/dashboard">
          Work Nest
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex gap-2 overflow-x-auto md:flex-col"
        >
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              <Icon aria-hidden="true" size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="p-5 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
