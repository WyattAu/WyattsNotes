# Patterns and Lessons Learned

> Captured from the WyattsNotes Docusaurus monorepo audit (May 2026).

---

## Patterns (Proven Approaches)

### PAT-001: Monorepo Multi-Site with Shared Config

**Context:** 8 Docusaurus sites sharing one codebase.
**Pattern:** Extract shared config into `docusaurus.shared.config.ts` with a `sharedConfig()` factory.
**Benefit:** Eliminates ~2000 lines of duplication. Single source of truth for plugins, themes, markdown config.

### PAT-002: Tiered Build Resources

**Context:** Sites range from 34 to 286 content files.
**Pattern:** Three-tier heap sizing (7GB/11GB/14GB) in deploy workflows based on doc count.
**Benefit:** Small sites don't waste resources, large sites don't OOM.

### PAT-003: Path-Filtered Deploy Triggers

**Context:** 9 deploy workflows pushing to Cloudflare Pages.
**Pattern:** Each workflow only triggers when its relevant paths change.
**Benefit:** A docs_ib change doesn't trigger a programming.wyattau.com rebuild.

### PAT-004: Static Redirect Sites

**Context:** academics.wyattau.com redirects to ib.wyattau.com.
**Pattern:** Static HTML with `<meta http-equiv="refresh">` + JS `window.location.replace()`.
**Benefit:** No Docusaurus build needed. Deploy takes 10 seconds instead of 5 minutes.

### PAT-005: Content Validation Pipeline

**Context:** 1,370 markdown files need consistent quality.
**Pattern:** Pre-commit hook runs Python scripts: MDX validation, link checking, depth tiers, handwave detection.
**Benefit:** Catches content errors before they reach production.

### PAT-006: Vitest for Docusaurus Component Testing

**Context:** Testing React components in a Docusaurus monorepo.
**Pattern:** Test standalone components (interactive widgets, utilities) with vitest + jsdom. Skip components that import Docusaurus webpack aliases.
**Benefit:** 109 tests with 61% coverage. Docusaurus-internal components (Layout, theme wrappers) cannot be tested outside the Docusaurus build system.

### PAT-007: Property-Based Testing for Pure Functions

**Context:** URL construction, reading time, progress calculations.
**Pattern:** Use fast-check to generate random inputs and verify mathematical properties (monotonicity, bounds, idempotency).
**Benefit:** Catches edge cases that example-based tests miss (e.g., unbalanced braces, empty strings).

### PAT-008: Security Headers via Cloudflare

**Context:** All sites on Cloudflare Pages.
**Pattern:** CSP, HSTS, X-Frame-Options, COEP/COOP/CORP, Permissions-Policy, Referrer-Policy.
**Benefit:** 9/9 security headers pass on all sites.

---

## Anti-Patterns (Avoid)

### APT-001: Testing Docusaurus Internals with Vitest

**Context:** Tried to render-test components that import `@docusaurus/*` modules.
**Problem:** These are webpack aliases, not npm packages. Vitest's `resolve.alias`, `vi.mock()`, and `server.deps.inline` all failed on CI.
**Resolution:** Only test standalone components. For Docusaurus-dependent components, use E2E tests (Playwright) against the running site.
**Tried:** 5 approaches over 6 CI cycles. All failed.

### APT-002: Counting Empty Frontmatter Fields Incorrectly

**Context:** Reported "1,279 files with empty descriptions."
**Problem:** The counting script checked for `description:` line presence, not whether the description was actually empty. 81 files used non-standard frontmatter (no `---` delimiters).
**Resolution:** Always validate counts with multiple methods (Python regex + Node.js parser + manual spot-check).

### APT-003: Excessive Heap Allocation

**Context:** Typecheck set to 8GB heap (`--max-old-space-size=8192`).
**Problem:** Actual usage was 274MB. Excessive allocation wastes CI resources and can cause scheduling delays.
**Resolution:** Profile with `--extendedDiagnostics` before setting heap sizes. Use 4x safety margin (274MB * 4 = ~1GB, rounded to 2GB).

### APT-004: Over-Committing to ESLint Formatting

**Context:** Writing test files that look fine locally but fail CI ESLint.
**Problem:** Local editor may not enforce `padding-line-between-statements`, `curly` (require braces for if), or exact Prettier formatting.
**Resolution:** Always run `npx prettier --write` and `npx eslint --fix` before pushing test files.

---

## Lessons Learned

### LES-001: Docusaurus Webpack Aliases Are Not npm Packages

`@docusaurus/Link`, `@docusaurus/ExecutionEnvironment`, `@theme/Layout`, `@theme-original/*` are resolved by Docusaurus's webpack config at build time. They do NOT exist as npm packages. Any test that imports source files using these modules will fail outside the Docusaurus build.

### LES-002: CI is Not Local

Vitest aliases work locally (Node 26, whatever vite version) but may not work on CI (Node 22, different vite resolution behavior). Always verify on CI before assuming something works.

### LES-003: Path-Based Deploy Filtering Saves Time and Money

With 9 deploy workflows, filtering by path prevents unnecessary builds. A typical push only triggers 1-2 deploys instead of all 9.

### LES-004: Service Worker Precache Needs Cleanup

Without `cleanupOutdatedCaches: true`, old precache entries accumulate across deployments, consuming storage and potentially causing stale content issues.

### LES-005: Hardcoded Stats Drift Fast

Landing page stats (file counts, line counts, subject counts) become stale quickly as content is added/removed. Better to compute dynamically at build time or update regularly.
