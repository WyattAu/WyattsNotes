# Contribution Guide

## Setup

1. Fork this repo

## Development tools

- Refer to package.json for npx commands
- Refer to tasks.json if you are using VSCode

## Guidelines

### Contribution Related Guidence

- Branch naming: `staging/feat/description`, `staging/fix/description`.
- Test changes locally: `npm run build && npm run serve`.
- Since `staging` branch is periodically reviewed and merged into `main` by admin, you are encourage to start a pull request against the staging branch.
- Use `npm run lint` and `npm run format` before committing.

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
  - Use subfolders: `/img`, `/fonts`, `/pdfs`
    \*\* For images: Prefer WebP format, use `_` for multiword names (`error_404.webp`)

#### Sidebar Ordering

Inorder to be consistent with the ordering of the sidebar, documents and folder containing documents should be prefix with `01-`, where `01` should replaced by the desire index on the sidebar.

#### Documentation Requirements

- Front matter:
  Use required metadata:

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
