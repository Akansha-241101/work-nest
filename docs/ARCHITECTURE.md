# Architecture

## Status and decisions

The frontend scaffold is implemented with React, Vite, TypeScript, Tailwind CSS, shadcn/ui configuration, Lucide React, Recharts, tldraw, date-fns, React Router (`react-router-dom`), and Zustand. The Projects area currently renders list and board layouts from static mock data with local filters and view switching; drag-and-drop belongs to the future project-workspace Kanban. Persistence, authentication, deployment, and API provider remain undecided; do not represent mock/local data as durable shared data.

## Proposed structure

```text
src/
  pages/            Route-level screens (dashboard, projects, team, …)
  components/
    layout/         App shell (sidebar, header, AppLayout)
    ui/             Shared shadcn/ui primitives
    shared/         Cross-feature helpers (PageIntro, placeholders)
    foundation/     Design-token preview screens
    projects/       Projects feature UI (header, filters, cards, board)
  data/             Sample / mock collections
  types/            Shared domain types
  stores/           Zustand client state
  services/         Data-provider boundary (mock initially)
  lib/              Date, formatting, and UI utilities
  styles/           Tailwind entry and global tokens
```

## Domain model (proposed)

- `User`: id, name, email, avatar URL, created/updated timestamps.
- `Team`: id, name, created/updated timestamps.
- `Membership`: id, teamId, userId, role, status.
- `Project`: id, teamId, name, description, status, startDate, dueDate, ownerId, timestamps.
- `Task`: id, projectId, title, description, status, assigneeId, startDate, dueDate, order, timestamps.
- `Meeting`: id, teamId, optional projectId, title, startsAt, endsAt, attendeeIds, drawingDocumentId.
- `DrawingDocument`: id, meetingId, document data/reference, updatedAt.

These are conceptual client types, not a committed database schema. Choose database constraints, indexes, and tenancy boundaries when a backend is selected.

## Data flow

Routes render feature pages. Feature components call typed service functions; a mock provider can power early UI work. Zustand holds transient/shared client state such as selected workspace, filters, and optimistic board interactions. Persisted data must move behind the service boundary. UI state is not an authorization boundary. Keep date serialization explicit and use date-fns for display and calculations.

## Routing

Use React Router with flat page modules under `src/pages/` for `/dashboard`, `/projects`, `/team`, `/meetings`, and `/settings`. Project workspace (`/projects/:projectId`) and timeline routes will be added when those screens are built. Unknown routes render a not-found view.

## Integrations and technical choices

- `@dnd-kit` planned for keyboard-aware Kanban drag and drop in the project workspace; provide non-drag controls as an alternative. Not used on the Projects list/board screen.
- tldraw for meeting-associated drawing. Confirm its current licensing, persistence needs, and collaboration mode before production use.
- Recharts for dashboard visualizations only where charts add useful information.
- shadcn/ui components are owned in-repository and styled with Tailwind tokens.
- No backend API, database, authentication provider, or calendar integration is selected in this V1 document.
