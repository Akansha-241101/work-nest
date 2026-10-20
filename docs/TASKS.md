# Implementation Tasks

Status: all work below is **Not started**. This document tracks implementation against `PRD.md`; the documents themselves are drafted, but the application has not been implemented.

## Foundation

- [x] Create the Vite React TypeScript app and install the selected stack.
- [x] Configure Tailwind and shadcn/ui; establish global tokens and app shell.
- [x] Add React Router routes and responsive navigation for all seven screens.
- [ ] Define shared domain types, mock service boundary, and initial sample data.

## V1 screens

- [ ] Build Overview Dashboard with project, task, and meeting summaries.
- [x] Build the Projects area with project list, search, status filtering, and list/board views.
- [ ] Add each project's workspace, with its Kanban board and task create/edit/status flows.
- [ ] Add keyboard-accessible drag and drop plus an alternate status control.
- [ ] Build Project Timeline with task dates and milestones.
- [ ] Build Team Management member and role views.
- [ ] Build Meetings calendar, meeting details, and linked tldraw canvas.
- [ ] Build Settings & Profile form and preference states.

## Quality and decisions

- [ ] Implement loading, empty, error, disabled, success, and confirmation states.
- [ ] Review mobile, tablet, desktop, keyboard, contrast, and reduced-motion behavior.
- [ ] Decide authentication, database/persistence, tenancy, and deployment approach.
- [ ] Decide whether meetings need external calendar sync or live collaboration.
- [ ] Update security requirements and architecture once backend decisions are made.
