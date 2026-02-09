# Agent Guidelines for Portfolio Project

## Build/Lint/Test Commands
- **Dev server**: `npm run dev` (runs on port 8080)
- **Build**: `npm run build` (production) or `npm run build:dev` (development mode)
- **Lint**: `npm run lint` (ESLint checks)
- **Preview**: `npm run preview` (preview production build)
- **Note**: No test suite currently configured

## Code Style

### Imports
- Use `@/` alias for src imports (e.g., `@/components/ui/button`)
- Group imports: React/external libraries first, then UI components, then assets/utilities

### Components
- Use functional components with arrow functions exported as default
- File names: PascalCase for components (e.g., `Hero.tsx`, `Projects.tsx`)
- Component structure: imports → constants/data → component definition → export

### TypeScript
- Relaxed config: `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedVars: off`
- Type imports: `import type { Config } from "tailwindcss"`
- Prefer explicit types for props and function returns when clarity is needed

### Styling
- Use Tailwind CSS with custom design tokens (navy, teal, coral colors)
- Gradients via CSS variables: `bg-gradient-primary`, `bg-gradient-accent`
- shadcn/ui components from `@/components/ui/`
- Dark mode via `class` strategy with ThemeProvider

### Naming
- React components: PascalCase
- Files: PascalCase for components, camelCase for utilities
- CSS classes: Tailwind utility classes, semantic naming

### State & Routing
- React Router v6 for navigation (`react-router-dom`)
- TanStack Query for data fetching
- Local state with `useState`, effects with `useEffect`

### Error Handling
- No strict error handling patterns enforced
- Unused vars/params allowed per ESLint config
