# Contribution Guide

## Prerequisites

- Node.js 22 (see [.nvmrc](./.nvmrc))
- pnpm 10+ (see `package.json` `engines` field)

## Setup

1. Fork this repo
2. `pnpm install`
3. `pnpm start`

## Build and Preview

```
pnpm build --config docusaurus.ib.config.ts && pnpm serve
```

## Pre-commit Checks

Enforced via `lint-staged` on staged files:

- TypeScript typecheck (`tsc --noEmit`)
- ESLint
- Unit tests (`vitest`)
- MDX validation
- Link checking (3,016 links, 0 broken)
- Depth tier validation
- Description validation

## Guidelines

### Contribution Related Guidance

- Branch naming: `staging/feat/description`, `staging/fix/description`.
- Since `staging` branch is periodically reviewed and merged into `main` by admin, you are
  encouraged to start a pull request against the staging branch.
- Use `pnpm lint` and `pnpm format` before committing.

### CI Pipeline

All pull requests run through the following checks:

- Lint + Typecheck + Build
- Unit tests (`vitest`)
- Security audit
- Content validation (MDX, links, depth tiers, descriptions)
- External link checking

### Code Review

All CI checks must pass before merge.

### Formatting and Structure

#### Naming Conventions

| Type                 | Convention                                                    | Examples                                        |
| -------------------- | ------------------------------------------------------------- | ----------------------------------------------- |
| **Folders**          | lowercase-kebab                                               | `api-reference/`, `data-models/`                |
| **Markdown Files**   | lowercase-kebab                                               | `getting-started.md`, `api-v3.md`               |
| **React Components** | camelCase                                                     | `themeToggle.tsx`, `codeBlock.js`               |
| **Utility Files**    | camelCase                                                     | `formatDate.js`, `stringUtils.ts`               |
| **Assets/Images**    | lowercase_snake for tags, lowercase-kebab for each identifier | `Logo_ib-logo.webp`, `diagram_carnot-cycle.svg` |
| **Config Files**     | camelCase                                                     | `sidebarItems.js`, `footerLinks.js`             |
| **Variables**        | camelCase                                                     | `currentUser`, `pageMetadata`                   |
| **Constants**        | UPPER_SNAKE_CASE                                              | `API_ENDPOINT`, `MAX_ITEMS`                     |

#### File Structure Principles

- **Documentation Content** (`docs/docs_*/`):
  - Ensure nesting is less than 5 levels.
  - Group related topics in folders (e.g., `maths/calculus/`)
  - Name files by topic, not section titles (e.g., `rate-limiting.md` vs `api-rate-limits.md`)
  -
- **Custom Code** (`src/`):
  - Separate components by:

    ```
    src/
    ├── layout/
    ├── hooks/
    ├── context/
    └── theme/
    ```

- **Static Assets** (`static/`):
  - Use subfolders: `/img`, `/fonts`, `/pdfs` \*\* For images: Prefer WebP format, use `_` for
    multiword names (`error_404.webp`)

#### Sidebar Ordering

Inorder to be consistent with the ordering of the sidebar, documents and folder containing documents
should be prefix with `01-`, where `01` should replaced by the desire index on the sidebar.

#### Content Quality

- All content must comply with the standards defined in
  [CONTENT_STANDARD.md](./CONTENT_STANDARD.md).
- Write for a technical audience: rigorous, deterministic, proof-based.
- Include Common Pitfalls sections where applicable.
- Every claim must be verifiable; cite sources where appropriate.

#### Documentation Requirements

- Front matter: Use required metadata:

  ```yaml
  ---
  title: Combinatorics
  date: 2025-06-03T11:59:39.630Z
  tags:
    - Maths
    - DSE
  categories:
    - Maths
  slug: combinatorics
  ---
  ```

  This can be easily managed using VSCode plugin `eliostruyf.vscode-front-matter`
