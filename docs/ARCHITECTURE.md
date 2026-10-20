# Architecture

## Status and decisions

The frontend scaffold is implemented with React, Vite, TypeScript, Tailwind CSS, shadcn/ui configuration, Lucide React, Recharts, `@dnd-kit`, tldraw, date-fns, React Router (`react-router-dom`), and Zustand. The route placeholders and shared app shell are in place. Persistence, authentication, deployment, and API provider remain undecided; do not represent mock/local data as durable shared data.

## Proposed structure

```text
src/
  app/              App entry, router, providers
  components/       Shared layout and UI components
  features/
    dashboard/      Dashboard sections and charts
    projects/       Project list, workspace, tasks, timeline
    team/           Team directory and membership flows
    meetings/       Calendar, meeting details, drawing surface
    settings/       Profile and preferences
  stores/           Zustand client state
  services/         Data-provider boundary (mock initially)
  types/            Shared domain types
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

Use React Router with routes for `/dashboard`, `/projects`, `/projects/:projectId` (the project workspace and Kanban board), `/projects/:projectId/timeline`, `/team`, `/meetings`, and `/settings`. The Kanban board belongs to the Projects area and is not a separate top-level destination. Unknown routes render a not-found view. Project/task/meeting selection should remain linkable where practical.

## Integrations and technical choices

- `@dnd-kit` for keyboard-aware Kanban drag and drop; provide non-drag controls as an alternative.
- tldraw for meeting-associated drawing. Confirm its current licensing, persistence needs, and collaboration mode before production use.
- Recharts for dashboard visualizations only where charts add useful information.
- shadcn/ui components are owned in-repository and styled with Tailwind tokens.
- No backend API, database, authentication provider, or calendar integration is selected in this V1 document.
