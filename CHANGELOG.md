# Changelog

All notable changes to Wyatt's Notes will be documented in this file.

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
