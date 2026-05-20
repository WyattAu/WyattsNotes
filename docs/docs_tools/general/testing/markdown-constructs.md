---
title: Markdown Constructs
description:
  'Markdown Constructs — Remark Common Plugins; Remark Grid Table; Code Snippets; Math including key
  definitions, derivations, and problem-solving techniques.'
date: 2025-05-29T19:20:34.906Z
tags:
  - CS
categories:
  - CS
slug: markdown-constructs
sidebar_position: 1
---

## Remark Common Plugins

### Remark Grid Table

~~Usage of
[root remark-grid-table](https://github.com/zestedesavoir/zmarkdown/tree/HEAD/packages/remark-grid-tables#readme)
Is discouraged with Docusaurus, use
[Adobe remark-gridtables](https://github.com/adobe/remark-gridtables) instead.~~ Remark Grid tables
Seems to be broken at the moment, the following does not seem to work:

````
+----+----+
| A  | B  |
+----+----+
| 1  | 2  |
+----+----+


+-------------------+------+
| Table Headings    | Here |
+--------+----------+------+
| Sub    | Headings | Too  |
+========+=================+
| cell   | column spanning |
| spans  +---------:+------+
| rows   |   normal | cell |
+---v----+:---------------:+
|        | cells can be    |
|        | *formatted*     |
|        | **paragraphs**  |
|        | ```             |
| multi  | and contain     |
| line   | blocks          |
| cells  | ```             |
+========+=========:+======+
| footer |    cells |      |
+--------+----------+------+
````

### Code Snippets

```cpp file=../../../../static/code/eg_codeSnippet.cpp start=start_here end=end_here

```

### Math

Using remark math with rehype Katex, equations written in LaTeX can be rendered, however LaTeX
Packages cannot be included.

$$
\frac{\partial \rho}{\partial t} + \frac{\partial(\rho u_{i})}{\partial x_{i}} = 0
$$

## Common Pitfalls

1. Memorising content without understanding the underlying principles — this leads to poor
   application in unfamiliar contexts.

2. Focusing only on content knowledge without developing exam technique and question-answering
   skills.

3. Not practising with past papers or exercises under timed conditions.

4. Ignoring feedback from marked work and failing to address recurring weaknesses.
