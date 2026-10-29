# Team Project Workspace

A team workspace scaffold for managing projects, tasks, timelines, team members, meetings, and shared discussion drawings. V1 scope is defined in [`docs/PRD.md`](docs/PRD.md); feature screens are currently placeholders.

## V1 screens

1. Overview Dashboard
2. Projects directory
3. Project Workspace / Kanban Board (the selected project's detail view within Projects)
4. Project Timeline
5. Team Management
6. Meetings Calendar and tldraw drawing/discussion surface
7. Settings & Profile

## Technology stack

React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide React, Recharts, tldraw, date-fns, React Router (`react-router-dom`), and Zustand. `@dnd-kit` is planned for the project-workspace Kanban.

## Setup

Install [Bun](https://bun.sh/) first. The scaffold uses Bun for package management and scripts.

```sh
bun install
bun run dev
```

## Neon database

The Projects page reads `public.projects` directly from Neon with Neon's serverless driver. Create a dedicated read-only database role using [`database/grant_project_read_access.sql`](database/grant_project_read_access.sql), then copy `.env.example` to `.env.local` and set `VITE_NEON_DATABASE_URL` to that role's connection string. Restart the Vite dev server after changing the environment file.

Vite includes `VITE_` variables in browser code. Use only the dedicated `worknest_reader` role, which is granted `SELECT` on `public.projects`; never use an owner/admin connection string. The Projects page is read-only. The existing API server is not needed for loading projects.

## Development commands

Available commands:

```sh
bun run dev
bun run typecheck
bun run build
bun run preview
```

## Project structure

```text
docs/                 Product and implementation documentation
src/main.tsx          React entry point and RouterProvider
src/router.tsx        Data router configuration and V1 route definitions
src/components/        Shared shell, placeholders, and shadcn/ui components
src/styles/            Tailwind import and design tokens
src/lib/               Shared utilities
```

Feature screens are placeholders. Add feature modules and services as V1 functionality is built.

## Documentation

- [Product requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Design system](docs/DESIGN.md)
- [Project memory](docs/MEMORY.md)
- [Agent rules](docs/RULES.md)
- [Implementation tasks](docs/TASKS.md)
- [Security requirements](docs/SECURITY.md)
