# WyattsNotes

[![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

This repository aims to be a FOSS resource acting as a course companion with additional resources
related to software development.

## Contribution

If you want to contribute to this project, please read [CONTRIBUTING.md](./CONTRIBUTING.md) before
making a pull request.

## Architecture

Docusaurus monorepo with 9 sub-sites, each built from a dedicated config:

| Sub-site                | URL                                        |
| ----------------------- | ------------------------------------------ |
| Academics               | <https://academics.wyattau.com>            |
| A-Levels                | <https://alevel.wyattau.com>               |
| A-Level Maths & Physics | <https://alevel-maths-physics.wyattau.com> |
| A-Level Sciences        | <https://alevel-sciences.wyattau.com>      |
| DSE                     | <https://dse.wyattau.com>                  |
| IB                      | <https://ib.wyattau.com>                   |
| Programming             | <https://programming.wyattau.com>          |
| Qualifications          | <https://qualifications.wyattau.com>       |
| University              | <https://university.wyattau.com>           |

## Quick Start

```
pnpm install && pnpm start
```

## Build

Build individual sub-sites using their respective Docusaurus config:

```
pnpm build --config docusaurus.<site>.config.ts
pnpm build --config docusaurus.ib.config.ts && pnpm serve
```

## Quality Gates

- TypeScript: 0 errors
- ESLint: 0 errors
- Links: 3,016 links, 0 broken

## License

AGPLv3. See [LICENSE](./LICENSE).

Contribute: [CONTRIBUTING.md](./CONTRIBUTING.md)
