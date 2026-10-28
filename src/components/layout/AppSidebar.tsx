import { NAV_ITEMS } from "./navItems";
import { SidebarBreakCard } from "./SidebarBreakCard";
import { SidebarNavItem } from "./SidebarNavItem";
import { SidebarProfile } from "./SidebarProfile";

export function AppSidebar() {
  return (
    <aside className="m-3 mr-0 hidden w-60 shrink-0 flex-col gap-6 overflow-y-auto rounded-[2rem] bg-linear-to-b from-sidebar to-sidebar-accent/70 px-4 pt-6 pb-4 shadow-clay md:flex">
      <SidebarProfile />
      <nav aria-label="Main navigation" className="flex flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem key={item.to} {...item} />
        ))}
      </nav>
      <div className="mt-auto">
        <SidebarBreakCard />
      </div>
    </aside>
  );
}
