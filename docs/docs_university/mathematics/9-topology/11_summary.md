---
title: Summary
tags:
  - University Maths
---

| Concept                       | Key Idea                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| Topological space             | Set + open sets satisfying the three axioms                                                          |
| Closed sets                   | Complements of open sets; finite unions, arbitrary intersections                                     |
| Closure / interior / boundary | $\overline{A}$, $\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$ |
| Continuity                    | $f^{-1}(\text{open})$ is open                                                                        |
| Homeomorphism                 | Bijective continuous map with continuous inverse                                                     |
| Compactness                   | Every open cover has a finite subcover                                                               |
| Heine–Borel                   | In $\mathbb{R}^n$: compact $\Leftrightarrow$ closed and bounded                                      |
| Connectedness                 | No separation into two disjoint nonempty open sets                                                   |
| Path-connectedness            | Any two points joined by a continuous path                                                           |
| Metric space                  | Set + distance function satisfying the three axioms                                                  |
| Completeness                  | Every Cauchy sequence converges                                                                      |
| Banach fixed point            | Contractions on complete metric spaces have unique fixed points                                      |
| $T_0$–$T_4$                   | Increasingly strong separation axioms                                                                |
| Fundamental group $\pi_1$     | Homotopy classes of loops; a topological invariant                                                   |
| Euler characteristic $\chi$   | $V - E + F$; classifies compact surfaces                                                             |

## Worked Examples

### Example 1: Determining if a Collection is a Topology

**Problem:** Is the collection $\tau = \{\emptyset, \{a\}, \{b\}, \{a,b,c\}\}$ a topology on
$X = \{a,b,c\}$? **Solution:** Check axioms: (1) $\emptyset$ and $X$ are in $\tau$. (2) Finite
unions: $\{a\} \cup \{b\} = \{a,b\}$, which is NOT in $\tau$. Therefore $\tau$ is not a topology. To
fix it, we would need to include $\{a,b\}$.

### Example 2: Continuous Function Proof

**Problem:** Show that the function $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = x^2$ is
continuous with respect to the standard topology. **Solution:** Let $U$ be an open set in
$\mathbb{R}$. $f^{-1}(U) = \{x : x^2 \in U\}$. For any open interval $(a, b)$ with $a \geq 0$, the
preimage is $(-\sqrt{b}, -\sqrt{a}) \cup (\sqrt{a}, \sqrt{b})$, which is a union of open intervals
(open). For negative intervals, the preimage is empty or $\mathbb{R}$. Since the preimage of any
basis element is open, $f$ is continuous.

## Cross-References

| Topic            | Link                                                  |
| ---------------- | ----------------------------------------------------- |
| Abstract Algebra | [View](/docs/university/mathematics/abstract-algebra) |

