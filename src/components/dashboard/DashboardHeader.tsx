import { DASHBOARD_USER_NAME } from "@/data/dashboard";

export function DashboardHeader() {
  return (
    <header className="min-w-0">
      <h1 className="text-[1.75rem] leading-tight font-extrabold tracking-tight text-foreground sm:text-[2rem]">
        Good morning, {DASHBOARD_USER_NAME}!{" "}
        <span aria-hidden="true">☁️</span>
      </h1>
      <p className="mt-1 text-sm font-medium text-muted-foreground sm:text-base">
        Here&apos;s what&apos;s happening today.
      </p>
    </header>
  );
}
