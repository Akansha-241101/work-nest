# Implementation Tasks

Status tracks implementation against `PRD.md` and `DESIGN.md`.

## Foundation

- [x] Create the Vite React TypeScript app and install the selected stack.
- [x] Configure Tailwind and shadcn/ui; establish global tokens and app shell.
- [x] Add React Router routes and responsive navigation for all seven screens.
- [ ] Define shared domain types, mock service boundary, and initial sample data.
- [x] **Theme revamp:** retarget `:root` / `.dark` tokens for the playful clay palette (`src/styles/theme-tokens.css`, `clay-*` colors, `shadow-clay`); reference `public/revamp-design.png`.
- [x] Load rounded friendly font (Nunito) for the revamp.
- [x] Redesign shared sidebar and mobile nav with 3D icons, profile, and break card (Dashboard, Tasks, Calendar, Projects, Messages, Settings; Analytics route kept but hidden from nav so the break card fits).

## V1 screens

- [x] **Rebuild Overview Dashboard** to match `revamp-design.png` with static data (greeting header, pastel stats, productivity chart, recent activity, to-do, mini calendar, motivation card).
- [x] Build Tasks, Analytics, Messages, Team, Meetings (Calendar), and Settings screens with clay UI and lean seed data.
- [x] Build the Projects area with project list, search, status filtering, and list/board views.
- [x] Add stat trend pills and real Productivity Overview filters (metric + date range via `services/productivity-service.ts`).
- [x] Restyle Projects (header, filters, cards, board, dialogs) and the shared app header to the clay tokens.
- [x] Show theme toggle, notifications, and user chrome on every page via `AppHeader`.
- [ ] Add each project's workspace, with its Kanban board and task create/edit/status flows.
- [ ] Add keyboard-accessible drag and drop plus an alternate status control.
- [ ] Build Project Timeline with task dates and milestones.
- [ ] Build Team Management member and role views.
- [ ] Build Meetings calendar, meeting details, and linked tldraw canvas.
- [ ] Build Settings & Profile form and preference states.

## Quality and decisions

- [ ] Implement loading, empty, error, disabled, success, and confirmation states.
- [ ] Review mobile, tablet, desktop, keyboard, contrast, and reduced-motion behavior (especially on pastel surfaces).
- [ ] Decide authentication, database/persistence, tenancy, and deployment approach.
- [ ] Decide whether meetings need external calendar sync or live collaboration.
- [ ] Update security requirements and architecture once backend decisions are made.
