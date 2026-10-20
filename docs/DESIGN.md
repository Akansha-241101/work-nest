# Design System

## Direction

Create a calm, focused project workspace that makes status and next actions easy to scan. Use a persistent navigation shell on wide screens and a compact, accessible navigation pattern on small screens. Avoid inventing a brand identity before one is supplied.

## Tokens

Use the supplied semantic OKLCH CSS variables for shadcn/ui and Tailwind, with light and dark token sets in `src/styles/`. The palette includes primary, muted, accent, destructive, chart, and sidebar tokens. Verify contrast for text and controls when adding screens; apply the `.dark` class to enable the dark theme.

Typography: use Cinzel for headings and Merriweather for paragraphs, labels, and small text. Keep a clear page title, section heading, body, and compact metadata scale. Use tabular numerals for dates and metrics when helpful.

Spacing and shape: use a consistent 4px-based spacing scale, restrained borders, rounded cards and controls, and clear separation between page regions. Dense board and calendar layouts may use tighter spacing while preserving readable targets.

## Screen patterns

- Shared app shell: navigation, workspace identity, page content, and account access.
- Dashboard: compact metric cards, project progress, priority work, and upcoming meetings.
- Projects: responsive cards or table with search, status filter, and prominent create action. Selecting a project opens its workspace.
- Project workspace/Kanban: the board is a view within Projects, with horizontally organized status columns, task cards with title/assignee/date, and visible drop feedback.
- Timeline: date scale, task bars and milestones, readable labels, and clear today/overdue markers.
- Team: member rows/cards with role and status labels.
- Meetings: calendar navigation, event details, and drawing area associated with a meeting.
- Settings: grouped profile and preference forms with clear save feedback.

## Interaction and accessibility

Use visible focus rings, semantic headings, labelled inputs, accessible dialogs, and keyboard-operable menus. Preserve a non-drag way to change task status. Use confirmation for destructive actions and inline feedback for save/error states. Respect `prefers-reduced-motion`; use short transitions only for state changes that benefit from feedback. Ensure calendar and timeline information has a usable non-visual or list representation.

## Responsive behavior

Design mobile-first. Stack dashboard sections and project details on narrow screens; allow board columns to scroll horizontally with clear cues; provide a compact calendar agenda/list mode; keep primary actions reachable. At larger widths, use available space for multi-column dashboard, board, and calendar layouts without stretching text excessively.
