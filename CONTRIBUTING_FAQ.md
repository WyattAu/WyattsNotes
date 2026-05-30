# Contributing FAQ

Frequently asked questions for contributors to Wyatt's Notes. For setup instructions and branch
naming conventions, see [CONTRIBUTING.md](./CONTRIBUTING.md). For formatting and writing rules, see
[CONTENT_STYLE_GUIDE.md](./CONTENT_STYLE_GUIDE.md). For content depth requirements, see
[CONTENT_STANDARD.md](./CONTENT_STANDARD.md).

---

## 1. What subjects can I contribute to?

Wyatt's Notes covers STEM subjects across multiple qualification levels and university-level
computer science:

- **Qualifications sites:** IB, A-Level, GCSE, DSE, AP, Scottish Highers, Irish Leaving
  Certificate. Subjects include mathematics, physics, chemistry, biology, computer science,
  economics, psychology, geography, history, and English.
- **University site:** Undergraduate computer science topics (data structures, algorithms,
  operating systems, databases, networking, etc.).
- **Programming site:** Language guides, frameworks, and software engineering topics.

Humanities subjects (literature, history, philosophy) are out of scope unless they are
exam-aligned content within a qualifications site. Check [ROADMAP.md](./ROADMAP.md) for planned
topics and current priorities.

---

## 2. How should I structure my content?

Every page starts with frontmatter (see [Content Style Guide](./CONTENT_STYLE_GUIDE.md#2-frontmatter-requirements)),
then uses `##` for the first heading (H1 is reserved for the page title).

Pages are assigned a depth tier that determines minimum content requirements:

| Tier | Type | Min Lines | Required Sections |
| :--- | :--- | :--- | :--- |
| 1 | Landing / Index | 30 | Overview, scope, cross-links |
| 2 | Standard topic | 80 | At least one of: Common Pitfalls, Worked Examples, Summary |
| 3 | Depth / Expansion | 120 | Full derivation or proof, 2+ Worked Examples, 3+ Common Pitfalls |
| 4 | University / Reference | 150 | Precise definitions, proved theorems, 2+ Worked Examples, 3+ Common Pitfalls |

Group related topics in folders. Prefix files with `01-`, `02-` etc. for sidebar ordering. Keep
nesting under 5 levels.

---

## 3. Do I need to know LaTeX?

Basic LaTeX is required for mathematical content. You need to know:

- Inline math: `$E = mc^2$`
- Display math: `$$\int_0^1 f(x)\,dx$$`
- Escaping braces: `\{ x : x > 0 \}`
- Common commands: `\frac`, `\sum`, `\prod`, `\partial`, `\mathbb{R}`, `\mathrm{}`

For the full list of supported functions, refer to the
[KaTeX supported functions](https://katex.org/docs/supported.html) reference. The
[Content Style Guide](./CONTENT_STYLE_GUIDE.md#4-math-notation) has a table of notation
conventions with correct and incorrect examples.

---

## 4. What's the review process?

1. Open a pull request against the `staging` branch.
2. CI runs automatically: lint, typecheck, unit tests, MDX validation, link checking, depth tier
   validation, and description validation.
3. A maintainer reviews content for mathematical correctness, proof rigour, tone consistency,
   and adherence to the style guide.
4. All CI checks must pass before merge. Address review feedback and push updates to the same
   branch.

See the [new content PR template](./.github/PULL_REQUEST_TEMPLATE/new-content.md) for the full
checklist.

---

## 5. How do I preview my changes locally?

Install dependencies and start the dev server:

```bash
pnpm install
pnpm start
```

This opens a local Docusaurus site with hot-reload. To build and serve a production preview:

```bash
pnpm build --config docusaurus.ib.config.ts && pnpm serve
```

Replace `docusaurus.ib.config.ts` with the relevant config file for the site you are editing
(e.g., `docusaurus.alevel.config.ts`, `docusaurus.university.config.ts`). Available configs are
listed in the repository root.

---

## 6. What if I find an error?

- **Typographical or formatting errors:** Open a PR with the fix. Branch naming:
  `staging/fix/brief-description`.
- **Mathematical or factual errors:** Open an issue describing the error, the correct result, and
  a reference or proof if applicable. Fix PRs are welcome.
- **Broken links:** CI catches broken links automatically. If you find one that CI misses, open
  an issue or PR.

---

## 7. Can I translate existing content?

Translations are not currently in scope. The site is published in English only. If you are
interested in adding translations for a specific qualification, open a discussion issue to gauge
interest and determine the approach before starting work.

---

## 8. How are qualifications structured?

Each qualification has its own Docusaurus config and content directory under `docs/docs_*/`:

| Qualification | Directory | Config File |
| :--- | :--- | :--- |
| IB | `docs/docs_ib/` | `docusaurus.ib.config.ts` |
| A-Level | `docs/docs_alevel/` | `docusaurus.alevel.config.ts` |
| GCSE | (within A-Level) | `docusaurus.alevel.config.ts` |
| DSE | `docs/docs_dse/` | `docusaurus.dse.config.ts` |
| AP | (within qualifications) | `docusaurus.qualifications.config.ts` |
| University | `docs/docs_university/` | `docusaurus.university.config.ts` |
| Programming | `docs/docs_languages/` | `docusaurus.programming.config.ts` |

Content within each qualification directory mirrors the subject structure (e.g.,
`docs/docs_ib/maths/`, `docs/docs_ib/physics/`). Sidebar definitions are in the `sidebars/`
directory. Use the appropriate config file when previewing locally.
