# Contribution Guide

## Prerequisites

| Tool    | Version | Reference                    |
| ------- | ------- | ---------------------------- |
| Node.js | 22.x    | `.nvmrc`                     |
| pnpm    | 10.x    | `package.json` engines field |

```bash
nvm install 22
nvm use 22
npm install -g pnpm@10
```

## Development Setup

1. Fork the repository
2. Clone the fork locally:

   ```bash
   git clone https://github.com/<username>/WyattsNotes.git
   cd WyattsNotes
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the dev server:

   ```bash
   pnpm start
   ```

5. Build and preview a single sub-site:

   ```bash
   pnpm build --config docusaurus.ib.config.ts && pnpm serve
   ```

## Pre-commit Checks

Enforced via Husky (`.husky/pre-commit`) and lint-staged on every commit.

### Blocking (commit fails if any of these fail)

| Check                           | Command                     | Scope             |
| ------------------------------- | --------------------------- | ----------------- |
| Lint-staged (ESLint + Prettier) | `lint-staged`               | Staged files only |
| TypeScript typecheck            | `tsc --noEmit`              | Entire project    |
| Unit tests                      | `vitest run` (120s timeout) | Entire test suite |
| MDX validation                  | `validate-mdx.py`           | All docs          |
| Relative link check             | `check-links.py`            | All docs          |

### Informational (warns but does not block)

| Check                      | Command                          |
| -------------------------- | -------------------------------- |
| Content depth tiers        | `check-depth-tiers.py`           |
| Description quality        | `check-descriptions.py`          |
| Forward references         | `check-forward-refs.py`          |
| Hand-wave phrase detection | `check-handwaves.py`             |
| Search index coverage      | `check-search-index-coverage.py` |

To bypass all checks in an emergency (not recommended for normal use):

```bash
SKIP_PRECHECK=1 git commit -m "message"
```

## Branch Naming Convention

Prefix branches with `staging/` followed by the type and description:

```
staging/feat/add-periodic-table-component
staging/fix/resolve-broken-anchor-links
staging/refactor/extract-shared-config
staging/docs/update-contributing-guide
```

All PRs target the `staging` branch. The `staging` branch is periodically reviewed and merged into
`main` by the maintainer.

## Commit Message Format

[Conventional Commits](https://www.conventionalcommits.org/) are required.

```
<type>(<scope>): <description>

[optional body]
```

| Type       | Purpose                                    |
| ---------- | ------------------------------------------ |
| `feat`     | New feature                                |
| `fix`      | Bug fix                                    |
| `refactor` | Code restructuring without behavior change |
| `docs`     | Documentation changes                      |
| `test`     | Adding or updating tests                   |
| `chore`    | Maintenance, tooling, config               |
| `perf`     | Performance improvement                    |
| `style`    | Formatting, whitespace (no logic change)   |
| `ci`       | CI/CD configuration                        |
| `build`    | Build system or dependencies               |

Examples:

```
feat(interactive): add periodic table element data module
fix(search): resolve localStorage JSON.parse crash in TOCSidebar
refactor(core): extract shared Docusaurus config into shared module
```

## CI Pipeline Stages

All PRs run through the CI workflow. Jobs are conditionally executed based on the detected change
type (`content`, `code`, `dependency`, or `none`).

### Required to Pass (blocks merge)

| Stage              | Jobs                                                     |
| ------------------ | -------------------------------------------------------- |
| Static Analysis    | Lint, Typecheck                                          |
| Build              | Docusaurus build (all 9 sub-sites), bundle size check    |
| Unit Tests         | Vitest (288 tests)                                       |
| Content Validation | MDX validation, relative link check, description quality |
| External Links     | lychee link checker (PRs only)                           |

### Conditional

| Stage                  | Condition                       |
| ---------------------- | ------------------------------- |
| Security Audit         | Dependency changes only         |
| Lighthouse CI          | PRs only (after build succeeds) |
| E2E Tests (Playwright) | PRs only                        |
| Algolia Reindex        | Post-merge on `main` only       |

## Code Review Requirements

1. All CI checks must pass before merge
2. At least one approval is required
3. Automated dependabot patch updates are auto-approved and auto-merged

## Content Quality Standards

All documentation content must comply with the standards defined in
[CONTENT_STANDARD.md](./CONTENT_STANDARD.md). Key requirements:

- Write for a technical audience: rigorous, deterministic, proof-based
- Include "Common Pitfalls" sections where applicable
- Every claim must be verifiable; cite sources where appropriate
- Avoid vague qualifiers ("obviously", "clearly", "intuitively")

## Frontmatter Requirements

Every documentation file must include frontmatter with the following fields:

```yaml
---
title: Topic Title
date: 2026-06-02T00:00:00.000Z
tags:
  - SubjectTag
  - ExamLevel
categories:
  - CategoryName
slug: topic-slug
description: A concise 120-160 character description of the page content.
---
```

| Field         | Required | Constraint                                  |
| ------------- | -------- | ------------------------------------------- |
| `title`       | Yes      | Human-readable page title                   |
| `date`        | Yes      | ISO 8601 datetime                           |
| `tags`        | Yes      | Subject and level tags                      |
| `categories`  | Yes      | Categorization                              |
| `slug`        | Yes      | URL-safe identifier                         |
| `description` | Yes      | 120-160 characters, unique across all files |

Frontmatter can be managed using the VS Code plugin `eliostruyf.vscode-front-matter`.

## Formatting Conventions

| Type             | Convention                        | Example                          |
| ---------------- | --------------------------------- | -------------------------------- |
| Folders          | `lowercase-kebab`                 | `api-reference/`, `data-models/` |
| Markdown files   | `lowercase-kebab`                 | `getting-started.md`             |
| React components | `camelCase`                       | `themeToggle.tsx`                |
| Utility files    | `camelCase`                       | `formatDate.ts`                  |
| Assets (images)  | `lowercase_snake` with tag prefix | `Logo_ib-logo.webp`              |
| Config files     | `camelCase`                       | `sidebarItems.js`                |
| Variables        | `camelCase`                       | `currentUser`                    |
| Constants        | `UPPER_SNAKE_CASE`                | `API_ENDPOINT`                   |

### Sidebar Ordering

Documents and folders must be prefixed with a numeric index for consistent sidebar ordering:

```
01-introduction/
  01-overview.md
  02-prerequisites.md
02-core-concepts/
  01-definitions.md
```
