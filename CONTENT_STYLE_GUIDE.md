# Content Style Guide

A reference for contributors writing documentation content for Wyatt's Notes. This guide covers
formatting, notation, and writing conventions. For content depth requirements and CI enforcement
rules, see [CONTENT_STANDARD.md](./CONTENT_STANDARD.md).

---

## 1. File Naming Convention

All content files use lowercase, hyphenated names that describe the topic:

| Type | Convention | Correct | Incorrect |
| :--- | :--- | :--- | :--- |
| Folders | lowercase-kebab | `data-structures/` | `DataStructures/` |
| Markdown files | lowercase-kebab | `binary-search.md` | `BinarySearch.md` |
| Images | `tag_identifier.ext` | `diagram_carnot-cycle.svg` | `Carnot Cycle Diagram.webp` |

- Prefix files and folders with `01-`, `02-` etc. for sidebar ordering only. The `slug` frontmatter
  field should omit the prefix.
- Name files by topic, not by section title: `rate-limiting.md` not `api-rate-limits.md`.
- Maximum nesting depth under `docs/docs_*/` is 5 levels.

---

## 2. Frontmatter Requirements

### Required Fields

```yaml
---
title: Page Title
slug: slug-name
date: 2026-05-30T00:00:00.000Z
tags:
  - tag-name
categories:
  - category-name
description: A unique meta description of at least 120 characters that summarises the content in a rigorous tone. No emojis or trailing ellipses.
---
```

### Field Rules

| Field | Rules |
| :--- | :--- |
| `title` | Plain text, no KaTeX, no HTML |
| `slug` | lowercase-kebab. Omit sidebar prefixes. Differentiate collisions with descriptive suffixes (`sorting-bubble`, `sorting-merge`) |
| `date` | ISO 8601 format (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM:SS.sssZ`) |
| `tags` | lowercase, hyphen-separated (`machine-learning`, not `Machine Learning`) |
| `categories` | lowercase, hyphen-separated |
| `description` | 120-160 characters. Unique across the site. Rigorous, deterministic tone. No trailing ellipsis or vague qualifiers |

### Optional but Recommended Fields

```yaml
---
sidebar_position: 1
sidebar_label: Short Name
image: /img/thumbnail.png
hide_table_of_contents: false
toc_max_heading_level: 4
draft: true
---
```

Use the VSCode plugin `eliostruyf.vscode-front-matter` to manage frontmatter easily.

---

## 3. Heading Structure

| Level | Markdown | Usage |
| :--- | :--- | :--- |
| H1 | `#` | Reserved for frontmatter `title`. Never used in body. |
| H2 | `##` | Major sections: Common Pitfalls, Worked Examples, Definitions |
| H3 | `###` | Subsections within an H2: individual definitions, specific pitfalls |
| H4 | `####` | Fine-grained detail within an H3: proof steps, algorithm variants |
| H5+ | `#####` | Rare; use only when H4 nesting is exhausted |

### Rules

- The first heading in the page body must be `##`.
- Never skip heading levels.
- Use ATX-style headings only: `## Heading`, not `Heading\n====`.
- Start headings with a number or an action word. No trailing punctuation.
- Duplicate headings are allowed between different parent sections but not within the same section.
- When a heading contains KaTeX math, keep it concise.

### Canonical Section Names

Use these exact strings for recurring sections:

- `## Common Pitfalls`
- `## Worked Examples`
- `## Summary`
- `## Cross-References`
- `## Key Distinctions`
- `## Complexity Analysis`
- `## Practical Considerations`
- `## Notation Conventions`

---

## 4. Math Notation

### Syntax

- Inline math: `$...$`
- Display math: `$$...$$` on its own line

### Escaping Braces

Always use `\{` and `\}` for literal braces. Diamond escaping (`<{` and `}>`) is handled
automatically by the build pipeline.

### Display Math Rules

- Never use `\text{}` inside display math. Use `\mathrm{}` instead.
- Use `\mathrm{Var}(X)`, `\mathrm{Cov}(X,Y)` instead of `\text{Var}(X)`, `\text{Cov}(X,Y)`.

### Notation Conventions

| Item | Correct | Incorrect |
| :--- | :--- | :--- |
| Comparison operators | `\lt{}`, `\gt{}`, `\le{}`, `\ge{}` | `<`, `>`, `<=`, `>=` |
| Degree symbol | `90^\circ` | `90°` |
| Absolute value | `\lvert x \rvert` | `\|x\|` (use `\lVert` for norms) |
| Norm | `\lVert x \rVert` | `||x||` |
| Sets | `\{ x \in \mathbb{R} : x > 0 \}` | `{x in R \| x > 0}` |
| Units | `$5\,\mathrm{kg}$` | `$5kg$` |
| Uncertainty | `$9.81 \pm 0.02\,\mathrm{m/s^2}$` | `$9.81 +/- 0.02 m/s^2$` |

---

## 5. Code Blocks

Always specify the language after the opening fence:

````
```python title="bubble_sort.py"
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
```
````

### Rules

- Code must be compile-ready or clearly marked as pseudocode.
- Include type annotations in TypeScript examples.
- Provide runnable examples where possible.
- Include expected output where applicable (use `title="Expected Output"` or a comment).
- Use line highlighting for key lines: `// highlight-next-line` or `// highlight-line`.

### Pseudocode

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

## 6. Tables

Use markdown tables for comparisons. Always include a header row. Use colons for alignment:

| Column | Alignment Specifier | Result |
| :--- | :--- | :--- |
| Left-aligned | `:---` | Left |
| Centred | `:---:` | Centre |
| Right-aligned | `---:` | Right |

### Rules

- Column counts must match the header row in every data row.
- Escape angle brackets in cells: `std::vector&lt;T&gt;` not `std::vector<T>`.
- Keep cells to inline code, math, or short text. No code blocks or lists inside cells.
- For complex cell content, use the `.grid-table` CSS class with div-based structure or an MDX
  component.

---

## 7. Common Pitfalls Format

Use a numbered list under the `## Common Pitfalls` heading. Each item should have the problem in
bold, an explanation of why it is a pitfall, and a correct code block or statement.

```markdown
## Common Pitfalls

1. **Forgetting to anchor the regex**
   Using `split("pattern")` without anchoring can produce unexpected results when the pattern
   appears multiple times. Anchor with `^` and `$` or use word boundaries.

   ```python
   re.split(r'\bcomma\b', text)  # correct: word boundary
   re.split('comma', text)        # incorrect: matches substrings
   ```

2. **Mutating the input array in-place**
   ...
```

- Minimum 3 items for Tier 2+ content.
- Each item must explain why it is a pitfall and how to avoid it.

---

## 8. Images

- Use WebP where possible. SVG is acceptable for diagrams.
- All images must have descriptive alt text.
- Place images in `static/img/` with a subdirectory matching the subject (e.g.,
  `static/img/physics/thermodynamics/`).
- Use the `tag_identifier.ext` naming convention: `diagram_carnot-cycle.svg`.
- External image links are discouraged; prefer local assets.
- Image syntax: `![Alt text describing the image](/img/subject/diagram_name.webp)`

---

## 9. Links

### Internal Links

Use relative links without the `.md` extension:

| Scenario | Format | Example |
| :--- | :--- | :--- |
| Same directory | `./slug-name` or `./slug-name#anchor` | `./sorting-algorithms#bubble-sort` |
| Parent directory | `../parent-dir/slug-name` | `../maths/linear-algebra` |
| Subdirectory | `./sub-dir/slug-name` | `./calculus/derivatives` |

### External Links

- Use absolute URLs for cross-site references: `https://alevel.wyattau.com/docs/cs/linked-lists`.
- Always use `https://`.
- When linking to a file with a numeric prefix (e.g., `01-basics.md`), link to the slug (`./basics`)
  not the filename (`./01-basics`).

### Link Checking

All links are checked in CI via `check-links.py` (internal) and `lychee` (external). Ensure all
links resolve before submitting a PR.

---

## 10. British English

All content must use British English spelling:

| British | American |
| :--- | :--- |
| colour | color |
| behaviour | behavior |
| centre | center |
| organise | organize |
| analyse | analyze |
| programme | program |
| modelling | modeling |
| favour | favor |
| labour | labor |
| defence | defense |

This applies to prose only. Code identifiers, API names, and technical keywords should use the
spelling defined by the language or specification.

---

## 11. Prohibited Content

### Emojis

No emojis anywhere in prose, headings, or frontmatter. This is enforced by `validate-mdx.py` in CI.

### Handwave Phrases

Do not use phrases that substitute for actual reasoning:

- "obviously"
- "clearly"
- "it's easy to see"
- "intuitively"
- "it can be shown that"

Show it, prove it, or state it precisely.

### TODO Comments

No `TODO`, `FIXME`, or `HACK` comments in published content. Either complete the work or create a
GitHub issue.

### AI-Generated Attribution

Do not include attributions such as "generated by ChatGPT" or "written with AI assistance". All
content is reviewed on its own merits regardless of origin.

### Other Prohibited Items

- No hedging language without specificity ("in some cases" must specify which cases).
- No forward references (define terms before using them).
- No unproven claims in STEM content (every formula must be justified from first principles).
- No vague qualifiers as conclusions.

---

## Quick Reference Checklist

Before submitting a PR, verify:

- [ ] File names are lowercase-kebab
- [ ] Frontmatter has all required fields with a 120+ character description
- [ ] First body heading is `##`
- [ ] All code blocks specify a language
- [ ] Math uses `\mathrm{}` not `\text{}` in display blocks
- [ ] Braces are escaped with `\{` and `\}`
- [ ] Images use WebP, have alt text, and live in `static/img/`
- [ ] Internal links are relative without `.md` extension
- [ ] Content uses British English spelling
- [ ] No emojis, handwave phrases, TODO comments, or AI attributions
