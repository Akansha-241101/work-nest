# Agent Rules & Development Guidelines

Short, binding rules for this project. Read `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, and `MEMORY.md` before changing established decisions.

## Core principles

- Write clear, pragmatic, beginner-friendly code with one responsibility per module.
- Prefer simple explicit logic. Avoid premature abstractions, redundant wrappers, and unrelated refactoring.
- Follow existing conventions and keep docs consistent with actual implementation.
- **No source code file may exceed 120 lines**, including imports, blank lines, and comments. Split cohesive functionality into meaningful modules before reaching the limit.

## Naming and structure

- Components and component files: `PascalCase`; variables/functions/hooks: `camelCase`; constants: `SCREAMING_SNAKE_CASE`; route segments: `kebab-case`.
- Use the Vite/React structure in `ARCHITECTURE.md`, grouping feature-specific code together.
- Keep UI, business rules, persistence, and shared utilities separated where this improves clarity.

## UI and accessibility

- Follow `DESIGN.md`; use shared tokens and shadcn/ui primitives consistently.
- Build responsive interfaces and include meaningful loading, empty, error, success, and disabled states.
- Use semantic HTML, labels, keyboard support, visible focus, and reduced-motion preferences.
- Interactive controls must do what their labels promise. Drag-and-drop needs an accessible alternative.

## React and TypeScript

- Use strict TypeScript and explicit domain types. Avoid `any` and unnecessary assertions.
- Follow React hook rules; avoid derived state and effects when direct computation or event handling is clearer.
- Put external data operations behind typed services. Keep secrets and server-only configuration out of browser code.

## Security and scope

- Do not claim mock data is persistent, private, synchronized, or authorized.
- Enforce authentication and authorization at a trusted server boundary once a backend is selected; client-side checks alone are insufficient.
- Never commit real credentials or expose secrets through `VITE_` variables.
- Do not add out-of-scope integrations or features without an explicit product decision.
- Review destructive changes for impact and avoid deleting user data without an explicit workflow.

## Definition of done

- Acceptance criteria relevant to the change are met and verified.
- Source files stay within 120 lines; accessibility and responsive behavior are addressed.
- No feature is documented as complete unless implemented and verified.
- Update `TASKS.md` and relevant architecture/design/security docs when status or decisions change.
