---
title: Summary of Key Results
tags:
  - Mathematics
  - University
---

| Theorem                | Conditions                                | Conclusion                               |
| ---------------------- | ----------------------------------------- | ---------------------------------------- | --------------- | ------------------------ |
| Monotone Convergence   | $0 \leq f_n \nearrow f$                   | $\lim \int f_n = \int f$                 |
| Fatou's Lemma          | $f_n \geq 0$                              | $\int \liminf f_n \leq \liminf \int f_n$ |
| Dominated Convergence  | $f_n \to f$, $                            | f_n                                      | \leq g \in L^1$ | $\lim \int f_n = \int f$ |
| Holder's Inequality    | $f \in L^p$, $g \in L^q$, $1/p + 1/q = 1$ | $\|fg\|_1 \leq \|f\|_p \|g\|_q$          |
| Minkowski's Inequality | $f, g \in L^p$                            | $\|f + g\|_p \leq \|f\|_p + \|g\|_p$     |
| Fubini                 | $f \in L^1(\mu \times \nu)$               | Iterated integrals equal double integral |
| Radon-Nikodym          | $\nu \ll \mu$, $\sigma$-finite            | $d\nu/d\mu$ exists and is unique a.e.    |

:::caution Common Pitfall When applying the dominated convergence theorem, the dominating function
$g$ must be integrable ($g \in L^1$), not just bounded. A bounded function on a space of infinite
measure need not be integrable.
:::

