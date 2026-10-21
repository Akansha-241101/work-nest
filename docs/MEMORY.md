# Project Memory

## Product context

- V1 consists of seven screens: Overview Dashboard; Projects; Project Workspace / Kanban Board; Project Timeline; Team Management; Meetings calendar and tldraw for drawings/discussions; Settings & Profile.
- The Kanban board is inside the Projects area, in the selected project's workspace; it is not a separate top-level section.
- Selected stack: React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide React, Recharts, tldraw, date-fns, React Router (`react-router-dom`), Zustand. `@dnd-kit` remains planned for the project-workspace Kanban when that screen is built.
- Project name, brand assets, user research, target deployment, backend, database, and authentication provider have not been specified.

## Constraints

- Keep product requirements and implementation status aligned across docs.
- Treat backend-dependent features as proposals until their infrastructure is selected and implemented.
- Favor simple, readable, beginner-friendly code and accessible responsive UI.

## Decision log

| Date | Decision | Reason |
|---|---|---|
| 2026-10-20 | Document V1 around the seven screens supplied by the owner. | Establish an agreed scope before implementation. |
| 2026-10-20 | Leave database, authentication, and external integrations undecided. | No provider or backend was specified. |
| 2026-10-21 | Keep the Projects list/board UI-only (filters + view toggle; no GSAP or board DnD/mutations). | Simplify the Projects screen while deferring interactive Kanban to the project workspace. |

Update this file when durable product or technical decisions are made. Do not record secrets or personal data here.
