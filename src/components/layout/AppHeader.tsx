import { Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { HEADER_CONTROL } from "./headerChrome";
import { getPageTitle } from "./navItems";
import { HeaderUser } from "./HeaderUser";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function AppHeader() {
  const { pathname } = useLocation();
  const pageTitle = getPageTitle(pathname);
  const { toast } = useToast();

  return (
    <header className="shrink-0">
      <div className="flex items-center justify-between gap-4 px-5 pt-5 pb-1 font-bold md:px-8 md:pt-6">
        <div className="flex min-w-0 items-center gap-2">
          <MobileNav />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/dashboard" className="text-foreground/45">
                    Work Nest
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Notifications, 3 unread"
            className={cn("relative size-10 hover:bg-card", HEADER_CONTROL)}
            onClick={() =>
              toast({
                icon: <Bell className="size-4" />,
                title: "Notifications coming soon",
                description: "Alerts will land here once the backend is ready.",
                actionType: "pending",
              })
            }
          >
            <Bell aria-hidden="true" className="size-4" />
            <span className="absolute top-2 right-2 size-1.5 rounded-full bg-primary" />
          </Button>
          <HeaderUser />
        </div>
      </div>
    </header>
  );
}
