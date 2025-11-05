### Birthday Tracker — Project‑specific Development Guidelines

This document captures practical, project‑specific knowledge to help advanced contributors work efficiently on Birthday Tracker. It focuses on non‑obvious setup, build, testing, and development conventions derived from this repository.

---

#### Build and Configuration

- Runtime and tooling
  - Node 20+ recommended; the environment used for verification was Node v24. The project compiles and the Node built‑in test runner works under this runtime.
  - Package manager: pnpm (lockfile present). Use pnpm for all scripts to avoid version drift.
  - Next.js 16 with React 19; Tailwind v4 is used (see `postcss.config.mjs` and the Tailwind CSS file at `src/styles/globals.css`).
  - Path aliasing is configured in `tsconfig.json` with `"~/*": ["./src/*"]`. Prefer aliased imports over deep relative paths.

- Scripts (see `package.json`)
  - `pnpm dev` → Next dev server with Turbopack on http://localhost:3000
  - `pnpm build` → Production build
  - `pnpm start` → Start the production server
  - `pnpm lint` → ESLint with `eslint-config-next`

- Next config
  - `next.config.ts` currently contains no custom options; update here if you add image domains, experimental flags, or headers.

- Components generator (shadcn/ui)
  - `components.json` sets `rsc: true`, enables TSX, and defines aliases (components, ui, utils, lib, hooks). Generated components are intended for server‑compatible usage by default. Do not modify generated code manually; extend via wrappers if customization is needed.

- TypeScript
  - Strict mode is enabled (`"strict": true`, `noEmit`, `moduleResolution: bundler`). Define explicit return types for public functions and avoid `any`.

---

#### Environment and Secrets

- Runtime validation
  - `src/env.ts` validates environment variables at load time using Zod. Missing or malformed values will throw during import, affecting any server entry points that touch env.

- Required variables (see `.env.example` for the full list). Common minimal set:
  - Authentication (Clerk):
    - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
    - `CLERK_SECRET_KEY`
  - Database (Neon / Postgres, Drizzle over `neon-http`):
    - `POSTGRES_URL` (used by `src/lib/db.ts` to create the Neon client)
  - The repository also includes many Neon/PG variants (`DATABASE_URL`, `POSTGRES_URL_NON_POOLING`, etc.) required by `src/env.ts`. Ensure your local `.env.local` (or `.env.development.local`) satisfies the Zod schema; otherwise the server will crash at startup.

- Local setup workflow
  - Copy `.env.example` to `.env.local` (or `.env.development.local`) and fill all keys required by `src/env.ts`. For local dev with Neon, the single `POSTGRES_URL` often suffices for DB access, but the schema enforces additional keys; keep them consistent (you can mirror values across related keys if using a single Neon project).
  - Clerk: create an application in Clerk dashboard and set the two keys above. Publishable key must be prefixed with `NEXT_PUBLIC_` so it is available on the client.

- Server‑only modules
  - Files marked with `import 'server-only';` (e.g., `src/lib/db.ts`, `src/services/birthday.ts`) must not be imported from client components. Keep DB access and server actions in server files only.

---

#### Database Layer (Drizzle + Neon)

- Schema (inline)
  - `src/lib/db.ts` declares the `birthdays` table inline using `pgTable`. There is no migration system checked in. If you introduce migrations, prefer Drizzle Kit and keep the schema collocated in `src/lib/db.ts` or a dedicated schema module.

- Access patterns
  - Use `db` from `src/lib/db.ts` and the exported table `birthdays`. Example service functions live in `src/services/birthday.ts` (`getBirthdays`, `addBirthday`, `deleteBirthday`). These are server‑only and should be called from server components or server actions.

- Multi‑environment Neon URLs
  - The env schema includes both pooling and non‑pooling URLs. If you adjust connection strategy (e.g., switch to non‑pooling on Vercel edge or enable HTTP/2), update `env.ts` and usages accordingly.

---

#### Authentication (Clerk)

- Server usage
  - `@clerk/nextjs/server` is used in RSC routes (e.g., `src/app/birthdays/page.tsx`). Ensure the middleware/config is set per Clerk docs if you add protected routes.

- Authorization
  - `getBirthdays` is already scoped by `userId`. Maintain this pattern for all new data access — pass `userId` explicitly or derive it server‑side.

---

#### Testing

- Approach
  - The repository does not include Jest/Vitest. Use Node’s built‑in test runner for fast unit tests without extra deps.

- Running tests
  - Command: `node --test` (Node 20+). You can also target files: `node --test path/to/file.test.ts`.
  - ESM: The project uses modern ESM/TS settings. For `.js` tests with `import` syntax, Node may warn if `package.json` lacks `"type": "module"`. This is harmless, but you can avoid the warning by naming test files `.mjs` or adding `"type": "module"` to `package.json` (consider impact on Next before changing type).

- File locations and naming
  - Co‑locate tests next to the code under `src/` using `*.test.ts` or `*.test.tsx` for utilities and pure functions. Avoid importing `server-only` modules from tests that run in a Node environment unless they are explicitly server code without Next client constraints.

- Minimal working example (verified)
  - The following example was executed successfully in this repository using Node’s runner:
    ```js
    // example.mjs
    import test from 'node:test'
    import assert from 'node:assert/strict'

    test('math sanity check', () => {
      assert.equal(2 + 2, 4)
    })
    ```
  - Run it with: `node --test example.mjs`
  - For TypeScript tests, run with ts-node/register or a build step if required. Given Next’s toolchain and no dedicated test config in this repo, prefer `.mjs` or transpiled `.js` for quick utility tests.

- Adding new tests
  - Prefer unit tests for pure helpers like `src/lib/utils.ts` (e.g., `formatBirthday`). Example skeleton:
    ```js
    // src/lib/utils.formatBirthday.test.mjs
    import test from 'node:test'
    import assert from 'node:assert/strict'
    import { formatBirthday } from '../../src/lib/utils.js'

    test('formats YYYY-MM-DD as local date', () => {
      assert.equal(formatBirthday('2024-01-31'), 'January 31, 2024')
    })
    ```
  - Note: importing TS directly from `.mjs` will not work without transpilation. Either:
    - Build the small module to JS before testing, or
    - Create a thin JS wrapper for the specific pure function you want to test, or
    - Introduce a test toolchain (e.g., Vitest) if broader coverage is required.

---

#### React/Next Conventions

- RSC first
  - The app uses React Server Components by default. Keep data fetching in server components or `app/` server actions. Client components should be annotated with `'use client'` and avoid importing server‑only modules.

- Suspense and loading states
  - Pages like `src/app/birthdays/page.tsx` wrap lists in `Suspense` with a custom spinner at `src/components/ui/spinner.tsx`. Follow this pattern for new async data UI.

- UI utilities
  - Use `cn` from `src/lib/utils.ts` for class merging; prefer it over manual conditionals.

- Import hygiene
  - Follow the alias map and group/alpha‑sort imports per repository style. Keep files under 500 LOC and avoid deep JSX nesting beyond ~5 levels.

---

#### Linting and Style

- ESLint
  - Run `pnpm lint` before committing. The project uses `eslint-config-next` and TypeScript type‑aware rules.

- Formatting & code style
  - Two‑space indentation, 100 char line max, single quotes (double in JSX), trailing commas, and semicolons. Keep parentheses around arrow params. Use PascalCase for components, camelCase for vars/props, and UPPER_SNAKE_CASE for constants.

---

#### Deployment Notes

- Vercel
  - The presence of `.env.production.local` and a Vercel OIDC token suggests Vercel deployment. Ensure all env keys required by `src/env.ts` are defined in Vercel project settings. If using edge/runtime changes, revisit the Drizzle/Neon client configuration.

- Post‑deploy checks
  - After deployments, validate Clerk auth flows and DB connectivity by hitting `/birthdays` while authenticated.

---

#### Troubleshooting Cheatsheet

- Crash on import with Zod error
  - Ensure every variable in `src/env.ts` exists and, where typed as URL, is a valid URL.

- Client import error for server‑only module
  - Move the import to a server component or server action and pass data via props.

- Neon connection failures locally
  - Confirm `POSTGRES_URL` matches your Neon project and that SSL mode is set appropriately (`sslmode=require`). If you change the key names you use, mirror values across all URL envs required by the schema to satisfy validation.
