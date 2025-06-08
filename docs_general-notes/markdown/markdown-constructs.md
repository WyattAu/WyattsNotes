---
title: Markdown Constructs
date: 2025-05-29T19:20:34.906Z
tags:
  - CS
categories:
  - CS
slug: markdown-constructs
---

## Remark Common Plugins

### Remark Grid Table

~~Usage of [root remark-grid-table](https://github.com/zestedesavoir/zmarkdown/tree/HEAD/packages/remark-grid-tables#readme) is discouraged with Docusaurus, use [Adobe remark-gridtables](https://github.com/adobe/remark-gridtables) instead.~~ Remark Grid tables seems to be broken at the moment, the following does not seem to work:

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

```cpp file=./../../static/code/eg_codeSnippet.cpp start=start_here end=end_here

```

### Math

Using remark math with rehype Katex, equations written in LaTeX can be rendered, however LaTeX packages cannot be included.

$$
\frac{\partial \rho}{\partial t} + \frac{\partial(\rho u_{i})}{\partial x_{i}} = 0
$$
