# WyattsNotes

[![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
[![License: AGPL v3](https://img.shields.io/badge/license-AGPL%20v3-blue.svg)](./LICENSE.md)

A free and open-source academic reference site covering IB, A-Level, DSE, and university-level
mathematics, physics, chemistry, computer science, and more. Built with Docusaurus 3, React 19, and
TypeScript 5.9, deployed as 9 independent sub-sites on Cloudflare Pages.

## Architecture

Docusaurus 3 monorepo with 9 independently deployed sub-sites. Each sub-site is built from a
dedicated config file and deployed to Cloudflare Pages via separate GitHub Actions workflows. A
shared config (`docusaurus.shared.config.ts`) provides common presets, theme configuration, Markdown
plugins, and Mermaid rendering.

### Sub-site Matrix

| Sub-site                | Config File                                 | Docs Path                                       | Production URL                             |
| ----------------------- | ------------------------------------------- | ----------------------------------------------- | ------------------------------------------ |
| Main (Landing)          | `docusaurus.config.ts`                      | `docs/docs_infrastructure/`, `docs/docs_tools/` | `https://wyattsnotes.wyattau.com`          |
| Academics (redirect)    | `docusaurus.academics.config.ts`            | Redirects to IB                                 | `https://academics.wyattau.com`            |
| A-Levels                | `docusaurus.alevel.config.ts`               | `docs/docs_alevel/`                             | `https://alevel.wyattau.com`               |
| A-Level Maths & Physics | `docusaurus.alevel-maths-physics.config.ts` | `docs/docs_alevel/` (filtered)                  | `https://alevel-maths-physics.wyattau.com` |
| A-Level Sciences        | `docusaurus.alevel-sciences.config.ts`      | `docs/docs_alevel/` (filtered)                  | `https://alevel-sciences.wyattau.com`      |
| DSE                     | `docusaurus.dse.config.ts`                  | `docs/docs_dse/`                                | `https://dse.wyattau.com`                  |
| IB                      | `docusaurus.ib.config.ts`                   | `docs/docs_ib/`                                 | `https://ib.wyattau.com`                   |
| Programming             | `docusaurus.programming.config.ts`          | `docs/docs_cpp/`, `docs/docs_languages/`        | `https://programming.wyattau.com`          |
| Qualifications          | `docusaurus.qualifications.config.ts`       | `docs/docs_qualifications/`                     | `https://qualifications.wyattau.com`       |
| University              | `docusaurus.university.config.ts`           | `docs/docs_university/`                         | `https://university.wyattau.com`           |

### Key Dependencies

- **Docusaurus 3.10** (core, presets, themes, plugins)
- **React 19.1** / **React DOM 19.1**
- **TypeScript 5.9**
- **Node.js 22** / **pnpm 10**
- **Tailwind CSS 4.1**
- **KaTeX 0.16** (LaTeX rendering via remark-math / rehype-katex)
- **Mermaid** (diagrams)
- **Algolia** (cross-site search)

## Quality Gates

| Gate                 | Target                    | Status  |
| -------------------- | ------------------------- | ------- |
| TypeScript           | 0 errors (`tsc --noEmit`) | Passing |
| ESLint               | 0 errors, 0 warnings      | Passing |
| Unit Tests (Vitest)  | 288 pass                  | Passing |
| Link Verification    | 3,016 links, 0 broken     | Passing |
| MDX Validation       | 0 violations              | Passing |
| Description Quality  | 120-160 chars, unique     | Passing |
| Frontmatter Coverage | All docs files            | Passing |

## Development

### Prerequisites

- Node.js 22 (see `.nvmrc`)
- pnpm 10+ (see `package.json` engines field)

### Commands

```bash
pnpm install                 # Install dependencies
pnpm start                   # Start dev server (all sub-sites)
pnpm start -- --port 3001    # Dev server on custom port
pnpm build                   # Build all sub-sites
pnpm build --config docusaurus.ib.config.ts   # Build single sub-site
pnpm serve                   # Serve built output at localhost:3000
pnpm test                    # Run unit tests (vitest)
pnpm test:watch              # Run tests in watch mode
pnpm test:coverage           # Run tests with coverage report
pnpm lint                    # ESLint (js, jsx, ts, tsx)
pnpm format                  # Prettier (all formats)
pnpm typecheck               # TypeScript type checking
pnpm validate:all            # Run all content validators
```

## CI/CD Pipeline

### CI (`ci.yml`)

Triggered on push to `main`/`staging`, pull requests (filtered by path), and weekly schedule (Sunday
03:00 UTC).

| Job                          | Scope                                                                                            | Blocking                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| **Detect Change Type**       | Classifies changes as `content`, `dependency`, `code`, or `none`                                 | Controls downstream jobs                      |
| **Dependabot Quick Check**   | Typecheck + lint only                                                                            | Bot-only fast path                            |
| **Lint & Typecheck & Build** | ESLint, `tsc --noEmit`, Docusaurus build, bundle size check                                      | Yes                                           |
| **Unit Tests**               | Vitest (288 tests)                                                                               | Yes                                           |
| **Security Audit**           | `pnpm audit --audit-level=critical`                                                              | Yes (dependency changes only)                 |
| **Content Validation**       | MDX, relative links, depth tiers, descriptions, hand-wave phrases, forward refs, search coverage | Partial (MDX + links + descriptions blocking) |
| **External Links**           | lychee link checker across all docs                                                              | Yes (PRs only)                                |
| **Lighthouse CI**            | Performance audits via LHCI                                                                      | Yes (PRs only, after build)                   |
| **E2E Tests**                | Playwright (Chromium + Firefox)                                                                  | Yes (PRs only)                                |
| **Algolia Index**            | Reindex changed sites                                                                            | Post-merge on main only                       |

### Deployment

Each sub-site has a dedicated deploy workflow (`deploy-*.yml`) that triggers on push to `main` when
relevant paths change. All sites deploy to Cloudflare Pages.

### Scheduled Workflows

| Workflow            | Schedule                | Purpose                        |
| ------------------- | ----------------------- | ------------------------------ |
| CI                  | Weekly Sunday 03:00 UTC | Full regression                |
| Algolia Index       | Daily 06:00 UTC         | Full reindex all sites         |
| Uptime Monitor      | Every 30 minutes        | HTTP 200 check all sites       |
| Vulnerability Alert | Weekly Monday 09:00 UTC | `pnpm audit`, auto-file issues |
| Lighthouse CI       | On deploy completion    | Performance regression         |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup instructions, branch conventions, commit format,
and code review requirements.

## License

[AGPLv3](./LICENSE.md)
