# Content Quality Standard

**Version:** 1.0
**Scope:** All documentation content under `docs/docs_*/`
**Audience:** Human contributors, automated tooling, code reviewers

---

## 1. Purpose and Scope

This document is the authoritative reference for all content published on Wyatt's Notes. It
consolidates rules from CONTRIBUTING.md, markdown-constructs.md, `.markdownlint.json`, CI
pipelines, and editorial conventions into a single enforceable standard.

Every rule in this document is either machine-checked (via CI) or requires human review during
code review. Ambiguity between rules is resolved in favour of the stricter interpretation.

---

## 2. Content Depth Tiers

All content pages are assigned a depth tier. The tier determines minimum content requirements.

### Tier 1 -- Landing / Index Pages

- Files: `intro.md`, `_index.md`, and top-level section landing pages
- Minimum body length: 30 lines (excluding frontmatter)
- Required sections: overview, scope, navigation/cross-links
- No worked examples or proofs required
- Example: `docs/docs_university/intro.md`

### Tier 2 -- Standard Topic Pages

- Files: typical subject pages (e.g., `sorting-algorithms.md`, `electrostatics.md`)
- Minimum body length: 80 lines (excluding frontmatter)
- Required sections (see Section 3): at least one of Common Pitfalls, Worked Examples, or
  Summary depending on subject area
- Definitions must be precise; claims must be justified
- Example: a page on linked lists in `docs/docs_university/`

### Tier 3 -- Depth / Expansion Pages

- Files: pages that go beyond syllabus requirements (e.g., advanced derivations, extended
  proofs, supplementary material)
- Minimum body length: 120 lines (excluding frontmatter)
- Required sections: full derivation or proof, Worked Examples (minimum 2), Common Pitfalls
  (minimum 3 items), cross-references to related topics
- Must link back to the Tier 2 page it expands upon

### Tier 4 -- University / Reference Pages

- Files: proof-based undergraduate material (`docs/docs_university/`)
- Minimum body length: 150 lines (excluding frontmatter)
- Required sections: precise definitions, theorems with proofs (or detailed proof sketches),
  Worked Examples (minimum 2), Common Pitfalls (minimum 3 items)
- Every definition must be mathematically precise
- Every theorem must be proved or have its proof sketched with enough detail to complete
- Every claim must be justified from first principles

---

## 3. Mandatory Sections (Tier 2+)

The following section names are canonical. Use these exact headings when present:

| Section Name | Minimum Content | Applies To |
| --- | --- | --- |
| **Common Pitfalls** | 3 items, each with explanation of why it is a pitfall and how to avoid it | Tier 2+ |
| **Worked Examples** | 2 complete examples per major topic; include problem statement, solution, and expected output where applicable | Tier 3+ |
| **Summary** | Concise recap of key results; no new information | Tier 2+ (optional) |
| **Cross-References** | Absolute URLs to equivalent or related content across sites | Tier 2+ (when equivalent content exists on another site) |
| **Relevance** | One-paragraph note connecting the topic to applications (ML, engineering, exam syllabi, etc.) | STEM definitions (from restructure spec) |
| **Complexity Analysis** | Time and space complexity for every algorithm presented | Algorithm pages |
| **Practical Considerations** | Implementation notes, edge cases, platform-specific behaviour | Programming pages |

### Cross-Reference Format

When equivalent content exists on another Wyatt's Notes site, include a dedicated subsection:

```markdown
## Cross-References

| Topic | Site | URL |
| --- | --- | --- |
| Linked Lists | Main Site | https://wyattsnotes.wyattau.com/docs/data-structures/linked-lists |
| Linked Lists | A-Levels | https://alevel.wyattau.com/docs/cs/linked-lists |
```

---

## 4. Heading Hierarchy

| Level | Markdown | Usage |
| --- | --- | --- |
| H1 | `#` | Reserved for frontmatter `title`. Never used in body. |
| H2 | `##` | Major sections: Common Pitfalls, Worked Examples, Definitions, Proofs, etc. |
| H3 | `###` | Subsections within an H2: individual definitions, specific pitfalls, named theorems |
| H4 | `####` | Fine-grained detail within an H3: sub-properties, proof steps, algorithm variants |
| H5+ | `#####` | Rare; use only when H4 nesting is exhausted |

### Rules

- The first heading in the page body must be `##` (Docusaurus generates H1 from frontmatter
  `title`)
- Never skip heading levels (enforced by MD001 in markdownlint)
- Use ATX-style headings only (enforced by MD003): `## Heading`, not `Heading\n====`
- Duplicate headings are allowed between different parent sections (MD024 `siblings_only`)
- When a heading contains KaTeX math, keep it concise. Docusaurus generates anchor slugs by
  stripping math and LaTeX commands

### Canonical Section Names

Use these exact strings for recurring sections to maintain consistency across the site:

- `## Common Pitfalls`
- `## Worked Examples`
- `## Summary`
- `## Cross-References`
- `## Key Distinctions`
- `## Complexity Analysis`
- `## Practical Considerations`
- `## Notation Conventions`

---

## 5. Frontmatter Requirements

### Required Fields

```yaml
---
title: Page Title
date: 2026-01-15T00:00:00.000Z
tags:
  - tag-name
categories:
  - category-name
slug: slug-name
---
```

### Optional but Recommended Fields

```yaml
---
description: 120-160 character unique meta description in rigorous tone.
sidebar_position: 1
sidebar_label: Short Name
image: /img/thumbnail.png
hide_table_of_contents: false
toc_max_heading_level: 4
draft: true
---
```

### Rules

- `title`: plain text, no KaTeX, no HTML
- `date`: ISO 8601 format (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM:SS.sssZ`)
- `tags` and `categories`: lowercase, hyphen-separated (`machine-learning`, not `Machine Learning`)
- `slug`:
  - When omitted, Docusaurus derives the URL from the file path
  - When set to a relative value (e.g., `slug: combinatorics`), it replaces the filename segment
  - When set to an absolute path (e.g., `slug: /custom/path`), it bypasses the docs prefix
  - Use custom slugs when the filename is a poor URL (e.g., file `01-basics.md` with
    `slug: basics` to avoid numeric prefixes in URLs)
  - Collision resolution: if two files would produce the same slug, differentiate via
    descriptive suffixes (`sorting-bubble`, `sorting-merge`)
- `description`:
  - 120-160 characters
  - Must be unique across the site
  - Must use rigorous, deterministic tone
  - Must not end with a trailing ellipsis or vague qualifier
- Quoting: if a field value contains special characters (colons, quotes), wrap in double quotes

---

## 6. Writing Style

### Tone

- Concise, rigorous, deterministic
- No hedging language ("it can be shown that" -- show it)
- No vague qualifiers ("in some cases", "it depends") without specifying exactly which cases
- No hand-wave phrases in STEM content (e.g., "intuitively", "obviously", "clearly" without
  subsequent justification)

### Voice

- Systems-engineer-to-systems-engineer
- Second person ("you") is acceptable for instructions; third person for definitions and theorems
- Active voice preferred; passive voice acceptable in mathematical writing ("is defined as")

### Prose Rules

| Rule | Correct | Incorrect |
| --- | --- | --- |
| No emojis in prose | "See the warning below" | "See the warning below" |
| No hand-waving | "By the triangle inequality, $\lvert a+b \rvert \le \lvert a \rvert + \lvert b \rvert$" | "Obviously $\lvert a+b \rvert$ is bounded" |
| No vague qualifiers | "This holds when $n > \log_2 k$" | "This holds in some cases" |
| No forward references | Define $X$ before using $X$ | Use $X$ on line 10, define on line 200 |
| Justify all claims | State theorem, then proof | State theorem with no justification |

### Terminology Consistency

- Once a term is defined, use it consistently. Do not switch between synonyms within the same
  page.
- When a page redefines a term that differs from common usage, state the distinction explicitly
  in a `## Key Distinctions` section.

---

## 7. Mathematical Notation

### KaTeX Rules

- Inline math: `$...$`
- Display math: `$$...$$` on its own line
- Supported functions: refer to [KaTeX supported functions](https://katex.org/docs/supported.html)

### Notation Conventions

| Rule | Correct | Incorrect |
| --- | --- | --- |
| Upright text in math | `\mathrm{Var}(X)`, `\mathrm{Cov}(X,Y)` | `\text{Var}(X)`, `\text{Cov}(X,Y)` |
| Comparison operators in math | `\lt{}`, `\gt{}`, `\le{}`, `\ge{}` | `<`, `>`, `<=`, `>=` (ambiguous in MDX) |
| Degree symbol | `90^\circ` | `90°` |
| Absolute value | `\lvert x \rvert` | `\|x\|` (use `\lVert` for norms) |
| Norm | `\lVert x \rVert` | `||x||` |
| Escaped currency in math | Wrap in backticks within math context | Bare currency symbols |
| Units | Attach with thin space: `$5\,\mathrm{kg}$` | `$5kg$` |
| Uncertainty | `$9.81 \pm 0.02\,\mathrm{m/s^2}$` | `$9.81 +/- 0.02 m/s^2$` |
| Sets | `\{ x \in \mathbb{R} : x > 0 \}` | `{x in R | x > 0}` |

### Proof Standards (Tier 4)

- State the theorem/lemma/proposition precisely before proving it
- Label each: **Theorem**, **Lemma**, **Proposition**, **Corollary**
- Use Docusaurus admonitions for definitions and theorems where appropriate
- A proof sketch must contain enough detail for the reader to complete the argument without
  external references
- Reference prior results by name or section heading, not by line number

---

## 8. Linking Rules

### Relative Links (same site)

| Scenario | Format | Example |
| --- | --- | --- |
| Same directory | `./slug-name` or `./slug-name#anchor` | `./sorting-algorithms#bubble-sort` |
| Parent directory | `../parent-dir/slug-name` | `../maths/linear-algebra` |
| Subdirectory | `./sub-dir/slug-name` | `./calculus/derivatives` |
| Cross-site | Absolute URL | `https://alevel.wyattau.com/docs/cs/linked-lists` |

### Rules

- Never use `.md` extension in link targets: `[text](./page)`, not `[text](./page.md)`
- Never use filename-based paths when the slug differs from the filename. Use the slug
  instead. If `01-basics.md` has `slug: basics`, link to `./basics`, not `./01-basics`
- Directory links must resolve to an `index.md` or `_index.md` file within that directory
- Anchor links use `#` followed by the heading slug (lowercase, hyphenated, math stripped)

### External Links

- Use full absolute URLs for cross-site references within the Wyatt's Notes family
- Use `https://` for all external links
- Image links to external sources are discouraged; prefer local assets in `static/img/`

---

## 9. Code Examples

### Rules

- Always specify the language after the opening fence (enforced by CI)
- Code must be compile-ready or clearly marked as pseudocode
- Include expected output where applicable (use `title="Expected Output"` or a comment)
- Use line highlighting for key lines: `# highlight-next-line` or `# highlight-line`

```python title="bubble_sort.py"
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:  # highlight-next-line
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
```

### Pseudocode Convention

When presenting pseudocode, use no language tag or `text`:

````md
```text
BUBBLE-SORT(A)
  for i = 1 to A.length - 1
    for j = A.length downto i + 1
      if A[j] < A[j-1]
        exchange A[j] with A[j-1]
```
````

---

## 10. Tables

### Rules

| Rule | Correct | Incorrect |
| --- | --- | --- |
| Column counts match header | 3 columns in header, 3 in every row | Mismatched columns |
| Angle brackets in cells | `std::vector&lt;T&gt;` | `std::vector<T>` |
| Absolute value in math cells | `$\lvert x \rvert$` | `$\|x\|$` |
| Alignment with colons | `\| :--- \| :----: \| ----: \|` | No alignment specifiers |
| No complex content in cells | Keep cells to inline code, math, short text | Code blocks or lists inside cells |

### Tables Requiring Complex Content

When a table cell needs code blocks, lists, or multi-line content, use the custom `.grid-table`
CSS class with div-based structure, or use an MDX component instead of standard markdown tables.

---

## 11. Admonitions and Details Blocks

### Admonition Types

| Type | Usage |
| --- | --- |
| `:::note` | Supplementary information, asides |
| `:::tip` | Practical advice, shortcuts |
| `:::info` | Reference information |
| `:::caution` | Potential issues to be aware of |
| `:::warning` | Important warnings that could cause errors |
| `:::danger` | Critical issues, data loss risk |

### Admonition Rules

- Opening directive must be on its own line with no content after the type:
  - Correct: `:::note` followed by content on the next line
  - Incorrect: `:::note This renders inline`
- Closing `:::` must be on its own line with no preceding text
- Admonitions support optional titles: `:::tip[Custom Title]`
- Collapsible admonitions (Docusaurus 3): `:::note[Click to expand]` on a single line
- Unclosed admonitions are caught by `validate-mdx.py`

### Details / Summary Blocks

```mdx
<details>
<summary>Click to expand</summary>

Hidden content here.

</details>
```

- Never nest `<details>` inside another `<details>` (causes rendering issues in Docusaurus)
- Never nest admonitions inside `<details>`
- Use `<details>` for supplementary material that would clutter the main flow

---

## 12. Subject-Specific Rules

### STEM Content (Mathematics, Physics, Computer Science)

- Every definition must have mathematical precision
- Every theorem must be proved or sketched with enough detail to complete
- Every formula must be justified from first principles
- No forward references: concepts must be defined before they are used
- No concept scattering: related concepts must be grouped in the same page or section
- Definitions must include "Relevance" notes connecting to applications
- No conflicting definitions across files: if a term is defined in multiple places, the
  definitions must be consistent or the distinction must be explicitly stated

### Qualifications Sites (GCSE, A-Level, IB, DSE, AP, Scottish Highers, Irish LC)

- Content must be aligned to the relevant syllabus/specification
- When exam boards diverge on a topic, annotate the differences explicitly
- Rigour standard matches undergraduate textbooks, targeted at the relevant level
- Every definition is precise, every result is derived, and every formula is justified from
  first principles

### Programming Content

- Code examples must compile (or be clearly marked pseudocode)
- Include complexity analysis for all algorithms
- Include a "Common Pitfalls" section covering language-specific gotchas
- Note platform/compiler differences where applicable

### Prohibited Subjects

- Humanities subjects (literature, history, philosophy as standalone topics) are not in scope
- Exception: exam-aligned humanities content within qualifications sites (e.g., GCSE English
  Literature exam techniques)

---

## 13. CI Enforcement

### Automated Checks

| Tool | What It Checks | Config File |
| --- | --- | --- |
| `validate-mdx.py` | Emoji usage, admonition formatting (no content on opening line, no unclosed blocks), raw HTML `<p>` tags, trailing blank lines | `scripts/validate-mdx.py` |
| `check-links.py` | Relative links resolve to existing files, directory links resolve to index pages, anchor links reference existing headings, slug-aware fallback resolution | `scripts/check-links.py` |
| `lychee` | External URL validity (HTTP 200), markdown link syntax | `.lycheeignore` |
| `markdownlint` | MD001 (heading increment), MD003 (ATX style), MD004 (dash unordered lists), MD007 (2-space nested indent), MD024 (duplicate headings, siblings only), MD046 (fenced code blocks) | `.markdownlint.json` |
| `cspell` | Spelling across all content files | `.cspell.json` |
| `eslint` | JavaScript/TypeScript in `src/` | ESLint config |
| `pnpm typecheck` | TypeScript type correctness | `tsconfig.json` |

### What Is NOT Automated (Requires Human Review)

- Content depth tier compliance (line counts, section completeness)
- Mathematical correctness and proof rigour
- Definition precision and absence of forward references
- Concept scattering (related concepts grouped)
- Description uniqueness and character count (120-160)
- Hand-wave phrase detection ("obviously", "clearly", "intuitively")
- Vague qualifier detection ("it depends", "in some cases" without context)
- Tone and voice consistency
- Conflicting definitions across files
- Code example correctness (compilation, expected output)
- Table column count matching
- Angle bracket escaping in prose and tables (`&lt;` / `&gt;`)

---

## 14. File and Directory Conventions

### Naming

| Type | Convention | Example |
| --- | --- | --- |
| Folders | lowercase-kebab | `data-structures/`, `linear-algebra/` |
| Markdown files | lowercase-kebab | `sorting-algorithms.md` |
| React components | camelCase | `themeToggle.tsx` |
| Assets (images) | `tag_identifier.ext` | `diagram_carnot-cycle.svg` |
| Config files | camelCase | `sidebarItems.js` |

### Structure

- Maximum nesting depth: 5 levels under `docs/docs_*/`
- Name files by topic, not by section title (`rate-limiting.md`, not `api-rate-limits.md`)
- Group related topics in folders
- Sidebar ordering: prefix folders and files with `01-`, `02-`, etc. The prefix is for
  ordering only; the `slug` field should omit it

### Branch Naming

- Features: `staging/feat/description`
- Fixes: `staging/fix/description`

---

## 15. Revision History

| Version | Date | Changes |
| --- | --- | --- |
| 1.0 | 2026-05-02 | Initial standard: consolidated from CONTRIBUTING.md, markdown-constructs.md, `.markdownlint.json`, CI pipelines, `.spec/` specifications, and editorial conventions |
