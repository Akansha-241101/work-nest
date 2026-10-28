# Design System

## Direction

Adopt a playful, children-focused, clay/neumorphic visual language: soft pastels, large rounded shapes, floating cards with gentle shadows, and friendly 3D-style icons. The product should feel warm, encouraging, and tactile—not corporate or dense.

**Canonical reference:** [`/revamp-design.png`](../public/revamp-design.png) (also served at `/revamp-design.png` in the Vite app). Match layout mood, color temperature, card radii, and widget density to this image when rebuilding screens—starting with the Overview Dashboard.

## Tokens

Retarget `:root` and `.dark` semantic CSS variables in `src/styles/` so shadcn/ui and Tailwind reflect this palette. Prefer soft OKLCH (or hex-aligned OKLCH) values with readable contrast for text and controls.

### Light palette (from reference)

| Role | Intent | Approx. value |
|---|---|---|
| Background | Warm cream / off-white canvas | `#FAF7F2` |
| Surface / card | Soft white with float shadow | `#FFFFFF` |
| Primary / accent | Soft lavender (active nav, chart line, highlights) | `#B8A7E0` |
| Success | Mint green | `#A5D6A7` |
| Warning / soft alert | Muted yellow | `#FFE082` |
| Soft info / tint | Peach / pink tints for widgets | `#FFD8D8` |
| Foreground | Dark charcoal for headings | near `#2F2F2F` |
| Muted foreground | Lighter grey for secondary labels | soft grey |

Map these into existing semantic tokens: `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--chart-*`, and `--sidebar-*`. Keep destructive readable; do not force every accent into primary.

### Dark mode

Provide a `.dark` set that preserves the playful character (lavender accent, soft pastels on deep warm neutrals) rather than a flat high-contrast corporate dark theme. Surfaces should still feel rounded and soft; avoid harsh pure black.

### Typography

Use a rounded, friendly sans-serif stack (e.g. Quicksand, Nunito, or equivalent loaded fonts)—not Cinzel/Merriweather for this revamp. Keep a clear hierarchy: greeting/page title, section title, body, compact metadata. Prefer rounded numerals where they stay legible.

### Spacing and shape

- Large radii (~`24px`–`32px`) on cards, sidebar panels, and major widgets.
- Soft, blurred drop shadows for a floating / clay feel; restrained borders.
- Circular or pill-like header controls (search, notifications, avatar).
- Generous padding; avoid dense “dashboard tables” aesthetics.
- **Clay lighting rule:** raised surfaces are lit from the top. Use a solid tone plus a white top shine (`claySurface()` / `CLAY_SHINE` in `src/constants/clay.ts`) with `shadow-clay`. Never fade a tint toward the bottom-right into white—it reads as concave. Recessed areas (inputs, tracks, board columns, segmented toggles) use `shadow-clay-inset`; primary/active controls use `shadow-clay-primary`.

## Screen patterns

### Overview Dashboard (revamp target)

Rebuild to match the reference composition:

- **Left sidebar:** soft lavender (or tinted) rounded panel; profile avatar; 3D-style nav icons; active item with stronger lavender fill and light label; optional bottom encouragement card (“Take breaks”).
- **Header:** friendly greeting (“Good morning, …”), soft circular action buttons, notification badge.
- **Stat row:** pastel metric cards (e.g. Tasks Done, In Progress) each with a distinct tint and playful icon.
- **Center:** large white “Productivity Overview” chart card (lavender line, circular points, optional speech-bubble callout); “Recent Activity” list with colorful icons.
- **Right column:** tinted To-Do card, soft calendar widget with highlighted day, motivation / encouragement card.

### Other screens

**Projects** follows the clay system: cards tinted by category (Design lavender, Development blue, Marketing pink, Product mint), pastel status/priority pills, recessed board columns, pill filters, and primary-clay actions. Team, Meetings, and Settings should eventually inherit the same tokens, radii, shadows, and friendly type—without inventing a second brand. Prefer playful empty states and soft feedback over stark alerts.

## Interaction and accessibility

Use visible focus rings, semantic headings, labelled inputs, accessible dialogs, and keyboard-operable menus. Soft “pop” / spring motion is welcome for hover and modal entry; still respect `prefers-reduced-motion`. Keep contrast acceptable on pastel backgrounds (darken text or tint surfaces as needed). Confirmation for destructive actions; toast/inline feedback for success and errors.

## Responsive behavior

Design mobile-first. Stack dashboard columns on narrow screens; keep the playful sidebar as a sheet/drawer on small widths; preserve reachable primary actions. At larger widths, allow the three-zone dashboard (sidebar / main / right widgets) without stretching text excessively.
