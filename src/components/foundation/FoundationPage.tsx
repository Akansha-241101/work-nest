import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TokenSwatches } from "./TokenSwatches";

const coreTokens = [
  "background", "foreground", "card", "card-foreground", "popover", "primary",
  "primary-foreground", "secondary", "secondary-foreground", "muted",
  "muted-foreground", "accent", "accent-foreground", "destructive",
  "destructive-foreground", "border", "input", "ring",
];
const chartTokens = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"];
const sidebarTokens = [
  "sidebar", "sidebar-foreground", "sidebar-primary",
  "sidebar-primary-foreground", "sidebar-accent", "sidebar-accent-foreground",
  "sidebar-border", "sidebar-ring",
];

export function FoundationPage() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-background px-5 py-8 text-foreground sm:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-medium text-primary">
                WORK NEST · DESIGN FOUNDATION
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Type & color tokens
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                A quick visual check of the supplied theme before building screens.
              </p>
            </div>
            <Button variant="outline" onClick={() => setDark(!dark)}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              {dark ? "Light mode" : "Dark mode"}
            </Button>
          </header>
          <TypographySpecimens />
          <ComponentPreview />
          <div className="space-y-8">
            <TokenSwatches title="Core colors" tokens={coreTokens} />
            <TokenSwatches title="Charts" tokens={chartTokens} />
            <TokenSwatches title="Sidebar" tokens={sidebarTokens} />
          </div>
        </div>
      </main>
    </div>
  );
}

function TypographySpecimens() {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="rounded-2xl border bg-card p-6">
        <p className="mb-5 text-sm font-medium text-muted-foreground">FONT FAMILIES</p>
        <p className="font-sans text-2xl font-semibold">Merriweather · Paragraphs</p>
        <p className="mt-4 font-serif text-2xl">Cinzel · Headings</p>
        <p className="mt-4 font-mono text-sm">Fira Code · Mono</p>
      </article>
      <article className="rounded-2xl border bg-card p-6">
        <p className="mb-5 text-sm font-medium text-muted-foreground">TYPE SCALE</p>
        <h2 className="text-3xl font-semibold tracking-tight">Page heading</h2>
        <h3 className="mt-3 text-xl font-semibold">Section heading</h3>
        <p className="mt-3">Body text for project details.</p>
        <p className="mt-2 text-sm text-muted-foreground">Supporting text</p>
      </article>
    </section>
  );
}

function ComponentPreview() {
  return (
    <section className="rounded-2xl border bg-card p-6">
      <p className="mb-4 text-sm font-medium text-muted-foreground">COMPONENT PREVIEW</p>
      <div className="flex flex-wrap items-center gap-3">
        <Button>Create project</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <span className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
          In progress
        </span>
      </div>
    </section>
  );
}
