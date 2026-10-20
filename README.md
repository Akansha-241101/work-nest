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

React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide React, Recharts, `@dnd-kit`, tldraw, date-fns, React Router (`react-router-dom`), and Zustand.

## Setup

Install [Bun](https://bun.sh/) first. The scaffold uses Bun for package management and scripts.

```sh
bun install
bun run dev
```

## Environment variables

No environment variables are currently required. Add an `.env.example` when an actual provider is selected. Vite variables prefixed with `VITE_` are included in the client bundle; never put secrets in them.

## Database configuration

No database or persistence provider is selected. Early UI work may use a mock service provider and sample data. Choose a database, authentication model, migrations, and team access controls before persisting real user data. See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) and [`docs/SECURITY.md`](docs/SECURITY.md).

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
