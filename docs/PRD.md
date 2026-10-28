# Product Requirements — Team Project Workspace

## Product summary

A responsive workspace for small teams to plan projects, coordinate work, visualize progress, hold meetings, and collaborate on drawings. V1 is organized around the seven screens selected by the product owner.

**Visual product direction:** a playful, children-focused clay/neumorphic UI (soft pastels, large radii, floating cards, friendly icons). Canonical mock: `public/revamp-design.png`. Design tokens and Overview Dashboard patterns are specified in `DESIGN.md`; implementation of the revamp is tracked in `TASKS.md`.

## Goals

- Give each team a clear overview of active work, deadlines, and upcoming meetings.
- Make project planning actionable through project details, a Kanban board, and a timeline.
- Keep team membership and meeting information discoverable in one workspace.
- Support visual collaboration through a drawing canvas associated with meetings/discussions.
- Provide a coherent, accessible experience across desktop, tablet, and mobile.

## Users and stories

- As a team member, I can see project health, my work, and upcoming events on the Overview Dashboard.
- As a team member, I can browse, search, and create projects from Projects.
- As a project contributor, I can inspect a project and move tasks between Kanban statuses.
- As a project contributor, I can see scheduled work and milestones on a Project Timeline.
- As a team manager, I can review team members and their roles in Team Management.
- As a participant, I can find meetings on a calendar and use a shared tldraw canvas for discussion.
- As a user, I can update my profile and workspace preferences in Settings & Profile.

## V1 screens and requirements

1. **Overview Dashboard:** summary metrics, project progress, tasks needing attention, and upcoming meetings; links to underlying project and meeting details.
2. **Projects:** the Projects area includes the project list/grid, search and status filtering, project creation, and each project's workspace. The Kanban board is part of the selected project's workspace, not a separate top-level area.
3. **Project Workspace / Kanban Board (within Projects):** project summary and task board with configurable status columns; task create/edit and drag-and-drop between columns; task assignment and due date where available.
4. **Project Timeline:** project tasks and milestones displayed against dates; clear overdue and upcoming states; navigation back to project workspace.
5. **Team Management:** member list, role/status visibility, and member invitation or add flow. Permission enforcement depends on the authentication/backend implementation.
6. **Meetings Calendar and tldraw:** calendar views for scheduled meetings, meeting details, and an associated drawing canvas for discussion. Clarify external calendar sync and real-time multiplayer before implementation; V1 does not assume either.
7. **Settings & Profile:** edit personal profile and workspace preferences supported by the implemented identity model.

## Scope

**In scope:** these seven screens; project and task workflows; basic team and meeting records; drawing canvas; responsive navigation; empty/loading/error/confirmation states; accessible interactions.

**Out of scope until explicitly prioritized:** billing, chat, external calendar synchronization, video conferencing, advanced reporting, complex enterprise permissions, offline-first sync, and real-time multi-user canvas collaboration.

## Acceptance criteria

- All seven screens are reachable through clear navigation and work at mobile, tablet, and desktop widths.
- A user can navigate from dashboard project summaries to a project, board, and timeline.
- Task changes made through the board are reflected in the project workspace state and show clear feedback.
- Calendar entries expose meeting details and the relevant drawing/discussion surface.
- Forms provide validation and visible success/error feedback; empty and loading states are handled.
- Keyboard users can navigate primary flows, operate controls, and see focus indicators; drag interactions have an accessible alternative.
- No UI claims persistent multi-user behavior until a persistence and synchronization service is implemented.

## Success measures

For initial V1 evaluation, measure completion of core flows: create project, add and move task, find a meeting, and update profile. Set numeric targets after user testing establishes a baseline.
