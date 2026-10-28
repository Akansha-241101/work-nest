import { Menu } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "@/components/layout/navItems";
import { SidebarNavItem } from "@/components/layout/SidebarNavItem";
import { SidebarProfile } from "@/components/layout/SidebarProfile";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          className="size-10 shrink-0 rounded-full bg-card shadow-clay-sm md:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[18rem] gap-6 overflow-y-auto bg-linear-to-b from-sidebar to-sidebar-accent/70 p-4 pt-8"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Main navigation</SheetTitle>
        </SheetHeader>
        <SidebarProfile />
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1.5">
          {NAV_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.to}
              {...item}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
