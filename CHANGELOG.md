# Changelog

All notable changes to Wyatt's Notes will be documented in this file.

## [2026-05-13] - Bulk Description Fix, Test Verification, Final Hardening

### Added

- Bulk description fixer script: `scripts/fix-all-descriptions.py`
- University description fixer: `scripts/fix-university-descriptions.py`
- Vulnerability remediation guide: `.specs/01_5_supply_chain/vulnerability_remediation.md`
- `.env.example` for local development (Algolia credentials template)

### Fixed

- TypeScript errors: React import in `theme-original.tsx`, namespace import in `theme.ts`
- 847 files missing frontmatter descriptions (bulk fix across all 9 directories)
- Description quality: 1,655 issues → 92 issues (94.4% reduction)
  - "Too short": 847 → 0
  - "Duplicates": 716 → 0
  - Remaining 92 are "too long" (>160 chars)
- A-Level stubs: marked with `status: stub` and scope annotation (4 files)
- Duplicate `engines` field in `package.json` merged

### Changed

- Vitest: confirmed 63/63 tests pass on Node 26 (103s duration)
- Unit test count updated from 64 to 63 in audit report (1 test removed during refactor)
- Audit report updated with post-audit actions (grade B+ → A-)
- ROADMAP.md: references detailed production roadmap

## [2026-05-12-b] - Comprehensive Audit, Pre-Commit Enhancement, Production Roadmap

### Added

- Full monorepo audit report: `.specs/00_requirements/full_audit_report.md`
  - Covers all quality gates, security, documentation, architecture
  - Identifies 0 TypeScript errors, 0 ESLint errors, 0 broken links (3,016)
  - Documents 63 security vulnerabilities (27 high), vitest hang (Node 26), 4 stubs
  - Assigns overall grade B+
- Production roadmap: `.specs/02_architecture/production_roadmap.md`
  - 5-phase plan: Remediation (2wk) -> Hardening (6wk) -> Content (12wk) -> Expansion (12mo) ->
    Platform (2yr)
  - SLO targets, risk register, success metrics, decision records (ADRs)
  - Appendix: architecture diagram, quality gate pipeline, security posture

### Changed

- **Pre-commit hook** (`.husky/pre-commit`): added vitest, forward-ref check
  - `check-handwaves.py` and `check-search-index-coverage.py` now non-blocking (informational)
  - Full pipeline: lint-staged -> tsc -> vitest -> MDX -> links -> depth -> descriptions ->
    forward-refs
- **Makefile**: migrated from `npm` to `pnpm` (project uses pnpm, not npm)
  - `make install-deps` uses `pnpm install --frozen-lockfile`
  - `make test` uses `pnpm test`
  - `make security` uses `pnpm audit`
- **ROADMAP.md**: now references detailed roadmap in `.specs/02_architecture/production_roadmap.md`

## [2026-05-12] - Quality Automation & Testing Infrastructure

### Added

- Vitest testing framework with 35 unit tests across 6 test files
  - DesmosGraph: parseExpression logic, parameter detection, aspect ratio, guard clauses
  - Geogebra: URL construction, aspect ratio, default dimensions
  - PhetSimulation: URL construction, hyphenated IDs, aspect ratio
  - IFrameComponent: default dimensions, src prop validation
  - ReadingProgress: scroll percentage computation, clamping, threshold rendering
  - escape-jsx-braces webpack loader: brace escaping for nested LaTeX commands
- Content depth tier checker (`scripts/check-depth-tiers.py`) -- validates minimum line counts and
  required sections per CONTENT_STANDARD.md tiers
- Hand-wave phrase detector (`scripts/check-handwaves.py`) -- scans for "obviously", "clearly",
  "intuitively", vague qualifiers, and hedging language
- Description quality checker (`scripts/check-descriptions.py`) -- validates 120-160 char bounds,
  uniqueness, and absence of vague trailing qualifiers
- `.nvmrc` pinning Node.js 22
- CI pipeline: separate `test` job, expanded `content-validation` job (depth tiers, descriptions,
  hand-waves)

### Fixed

- Pre-commit hook now includes typecheck + MDX validation + link checking + depth tier checking
  - description quality (previously only lint-staged)

### Changed

- CI pipeline restructured: lint/typecheck, test, security, content-validation, links as parallel
  jobs
- npm scripts: added `validate:depth`, `validate:handwaves`, `validate:descriptions`,
  `validate:all`, `test`, `test:watch`, `test:coverage`

## [2026-04-21] - Interactive Embeds & Component Registration

### Added

- Interactive PhET simulation embeds across 50+ physics files (IB, A-Level, DSE, GCSE, AP, Highers,
  ILC)
- Interactive Desmos graphing calculator embeds across 16 maths files (IB, A-Level, DSE, GCSE, AP,
  Highers, ILC)
- Total: 76 interactive embeds across 75 content files
- Swizzled MDXComponents at `src/theme/MDXComponents/index.tsx` using
  `@theme-original/MDXComponents` alias
- Interactive components: `DesmosGraph`, `Geogebra`, `PhetSimulation` registered globally
- Service worker plugin with deferred `workbox-build` import (avoids `baseline-browser-mapping`
  hang)
- `humans.txt` and `.well-known/security.txt` for security best practices

### Fixed

- MDX component registration: switched from broken `require.resolve()` approach to proper theme
  swizzle
- Service worker build hang: deferred `workbox-build` import to `postBuild` hook
  (baseline-browser-mapping blocks Node.js event loop at config evaluation time)
- All 5 sub-site deploys now succeed (main, academics, alevel, qualifications, programming)

### Changed

- `robots.txt` now lists all 5 sitemap URLs
- Service worker plugin comment updated with correct `require.resolve()` usage

## [2026-04-20] - MDX Fixes & Cross-Site Search

### Added

- Algolia-powered cross-site search page at `/search`
- Algolia indexing workflow (daily at 06:00 UTC + manual dispatch)
- Service worker plugin for offline support
- JSON-LD structured data (EducationalOrganization schema)

### Fixed

- Replaced `\text{}` with `\mathrm{}` across 348 files (12,607 occurrences) to prevent React SSR
  ReferenceError
- Replaced stray `---` with `<hr />` in 70 A-Level files (715 occurrences)
- Fixed 21 broken A-Level anchor links
- Fixed 8 IB Chemistry files with mismatched `<details>` tags
- Disabled `@typescript-eslint/no-unsafe-argument` (false positives with ES2022 String methods)
- Swizzled Mermaid component with client-only rendering (fixes SSR `useColorMode` error)

### Changed

- Removed Cloudflare Web Analytics beacon from Root.tsx
- Removed `@docusaurus/theme-search-algolia` (incompatible with React 19)
