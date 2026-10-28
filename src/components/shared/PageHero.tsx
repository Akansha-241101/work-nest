import type { ReactNode } from "react";
import { CLAY_ICON } from "@/constants/clay";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  icon: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ icon, title, description, actions }: PageHeroProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <img
          src={icon}
          alt=""
          draggable={false}
          className={cn(CLAY_ICON, "size-14 sm:size-16")}
        />
        <div className="min-w-0">
          <h1 className="text-[1.75rem] leading-tight font-extrabold tracking-tight sm:text-[2rem]">
            {title}
          </h1>
          <p className="mt-1 text-sm font-medium text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
      </div>
      {actions && (
        <div className="flex flex-wrap items-center gap-3">{actions}</div>
      )}
    </header>
  );
}
