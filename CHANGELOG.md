# Changelog

All notable changes to Wyatt's Notes will be documented in this file.

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
- CI pipeline: separate `test` job, expanded `content-validation` job (depth tiers,
  descriptions, hand-waves)

### Fixed

- Pre-commit hook now includes typecheck + MDX validation + link checking + depth tier checking
  + description quality (previously only lint-staged)

### Changed

- CI pipeline restructured: lint/typecheck, test, security, content-validation, links as
  parallel jobs
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
