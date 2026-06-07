---
title: Summary of Key Theorems
tags:
  - Mathematics
  - University
---

| Theorem              | Statement                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| Hahn-Banach          | Bounded functionals extend preserving norm                                                          |
| Open Mapping         | Surjective bounded operator between Banach spaces is open                                           |
| Closed Graph         | A linear operator between Banach spaces is bounded iff its graph is closed                          |
| Uniform Boundedness  | Pointwise-bounded family of operators is uniformly bounded                                          |
| Riesz Representation | Every functional on a Hilbert space is given by inner product                                       |
| Spectral Theorem     | Compact self-adjoint operators have orthonormal eigenbasis                                          |
| Fredholm Alternative | For compact $T$ and $\lambda \neq 0$: either $\lambda I - T$ is invertible or has nontrivial kernel |
| Banach-Alaoglu       | Closed unit ball of $X^*$ is weak\*-compact                                                         |

:::caution Common Pitfall The Closed Graph Theorem requires both the domain and codomain to be
Banach spaces. A linear operator $T : C[0,1] \to C[0,1]$ defined by $Tf = f'$ (where defined) has a
closed graph in $C[0,1] \times C[0,1]$, but $C^1[0,1]$ is not complete under the $C[0,1]$ norm. The
theorem does not apply, and $T$ is indeed unbounded.



