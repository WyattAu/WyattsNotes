---
title: Common Pitfalls
tags:
  - University Maths
---

1. **"Arbitrary intersections of open sets are open."** False. Only finite intersections are
   guaranteed. Counterexample: in $\mathbb{R}$, $\bigcap_{n=1}^\infty (-1/n, 1/n) = \{0\}$, which is
   not open.

2. **"Closed = not open."** False. A set can be both (clopen), neither, or exactly one. In
   $\mathbb{R}$, $\emptyset$ and $\mathbb{R}$ are clopen; $[0, 1)$ is neither.

3. **"Compact implies closed and bounded in every topological space."** False. This is specific to
   $\mathbb{R}^n$ (Heine–Borel). In the cofinite topology on an infinite set, every subset is
   compact but not every subset is closed.

4. **"Connected implies path-connected."** False. The topologist's sine curve is connected but not
   path-connected.

5. **"Continuous bijections are homeomorphisms."** False. The bijection $f : [0, 2\pi) \to S^1$
   given by $f(t) = (\cos t, \sin t)$ is continuous and bijective, but its inverse is not continuous
   — $[0, 2\pi)$ is not compact but $S^1$ is.

6. **"Every metric space is complete."** False. $\mathbb{Q}$ with the usual metric is not complete.

7. **"The closure of the interior equals the interior of the closure."** False as a general
   principle. In $\mathbb{R}$ with $A = \mathbb{Q} \cap (0, 1)$:
   $\operatorname{int}(\overline{A}) = (0, 1)$ but $\overline{\operatorname{int}(A)} = \emptyset$.

