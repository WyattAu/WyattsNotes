---
id: intro
title: Intro
description: Test description
slug: intro
sidebar_position: 1
date: 2025-05-15T22:45:51.828Z
tags:
  - general
categories:
  - general
---

## Abstract

This resource is created not based on any curriculum, but simply a amalgamation of whatever I drop
notes of.

## What This Section Covers

The General Notes section is a catch-all for topics that do not fit neatly into the structured
language-specific or academic sections of this knowledge base. Broadly, it covers:

- **Testing & Integration Patterns**: Notes on embedding external tools and services (e.g., iframes
  for Compiler Explorer, Dartpad) and the quirks involved.
- **Markdown & Docusaurus Reference**: How this site is authored, including MDX features,
  frontmatter conventions, and custom styling.
- **Examples & Life Notes**: Practical guides and recipes (e.g., alleviating back pain, crafting
  ghee) that serve as personal reference material.

There is no strict topical boundary. If something does not belong under Java, C++, Python, Dart,
Git, or A-Level notes, it probably lands here.

## How to Use These Notes

These notes are written for personal reference first and public readability second. A few principles
to keep in mind:

- **Search, do not browse linearly.** The general section is intentionally flat. Use the search bar
  or tags to find what you need rather than reading top-to-bottom.
- **Tags and categories are the primary navigation.** Each page has frontmatter with `tags` and
  `categories`. Use them to filter related content.
- **Examples are concrete.** When a note includes a code snippet, table, or procedure, it is
  intended to be copy-pasteable or directly actionable.

## Organization Philosophy

The rest of this knowledge base follows a curriculum-like structure: each language has numbered
chapters, each chapter has ordered pages. The General section intentionally breaks from that pattern
because its content is heterogeneous.

### Directory Layout

```
docs_general-notes/
  intro.md              <- this file
  markdown-constructs.md <- MDX / markdown reference for this site
  testing/
    iframe-integration.md <- iframe embedding patterns
  examples/
    alleviating-back-pain.md
    crafting-ghee.md
```

### Naming Conventions

- File names use `kebab-case.md`.
- Frontmatter `slug` values override the URL path when the default derived slug is undesirable.
- `sidebar_position` controls ordering; negative values push items to the top or hide them from the
  main flow.
- `tags` are flat strings (no hierarchy); `categories` mirror the top-level directory names where
  applicable.

### Writing Conventions

| Convention                 | Detail                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------ |
| No inline comments         | Code blocks are self-documenting; comments added only when the intent is non-obvious |
| Frontmatter required       | Every page must have at least `title` and `date`                                     |
| Admonitions over bold      | Use Docusaurus `:::note` / `:::warning` instead of **Note:**                         |
| Tables for structured data | Prefer tables over bulleted lists when comparing attributes                          |
| KaTeX for math             | Inline with `$...$`, block with `$$...$$`                                            |

### Adding a New Page

1. Create the `.md` or `.mdx` file in the appropriate subdirectory.
2. Add frontmatter with at minimum `title`, `date`, and `slug`.
3. Assign relevant `tags` and `categories`.
4. Set `sidebar_position` to control placement relative to siblings.
5. Run `npm run build` locally to verify there are no build errors before committing.

## Site Stack

These notes are rendered by Docusaurus 3, which means every `.md` file is processed as MDX. This
unlocks React components, interactive tabs, and custom JSX — but also imposes constraints:

- Raw HTML tags like `<p>` are not allowed in MDX; use Docusaurus components or markdown instead.
- Angle brackets in prose (e.g., `std::vector<int>`) must be escaped as `&lt;` and `&gt;` outside of
  code blocks.
- Nested `<details>` elements inside other `<details>` are not supported.
- Frontmatter is parsed at build time and drives sidebar ordering, page metadata, and search
  indexing.

Refer to `markdown-constructs.md` in this section for the full MDX feature reference.
