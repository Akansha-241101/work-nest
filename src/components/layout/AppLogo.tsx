import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarLabel } from "./SidebarLabel";

type AppLogoProps = {
  collapsed?: boolean;
};

export function AppLogo({ collapsed = false }: AppLogoProps) {
  return (
    <Link
      to="/dashboard"
      aria-label="Worknest"
      className="mb-8 flex min-w-0 flex-row flex-nowrap items-center overflow-hidden px-2.5 text-foreground no-underline"
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Home aria-hidden="true" className="size-4" strokeWidth={2.25} />
      </span>
      <SidebarLabel
        collapsed={collapsed}
        className="font-serif text-lg font-semibold tracking-wide uppercase"
      >
        Worknest
      </SidebarLabel>
    </Link>
  );
}
