---
title: Common Pitfalls
slug: complex-analysis-common-pitfalls
tags:
  - Mathematics
  - University
---

:::caution Common Pitfall The Cauchy-Riemann equations are necessary but not sufficient for
Differentiability. The partial derivatives must also be continuous. For example,
$f(z) = \exp(-1/z^4)$ extended by $f(0) = 0$ satisfies the Cauchy-Riemann equations at the origin
But is not differentiable there.
:::

:::caution Common Pitfall Cauchy's theorem requires a connected domain. On a multiply Connected
domain, the integral of an analytic function around a closed contour may be non-zero. The Classic
example is $\oint_{|z|=1} dz/z = 2\pi i$.
:::

:::caution Common Pitfall When computing residues at poles of order $m \geq 2$The formula involves
Differentiation. A common error is forgetting the $(m-1)!$ in the denominator or differentiating
$(z - z_0)^m f(z)$ the wrong number of times.
:::

:::caution Common Pitfall The residue at infinity is
$\mathrm{Res}(f, \infty) = -\mathrm{Res}(1/z^2 \cdot f(1/z), 0)$. It is NOT $f(\infty)$. For A
function that is analytic everywhere in the finite plane except for finitely many singularities, The
sum of all residues (including the residue at infinity) is zero.
:::

:::caution Common Pitfall A conformal mapping preserves angles but not necessarily distances. The
Mapping $w = z^2$ is conformal at every $z \neq 0$But it doubles the angle between curves at each
Point. At $z = 0$It is not conformal because $f'(0) = 0$.
:::

:::caution Common Pitfall The maximum modulus principle says that $|f|$ has no local maximum in the
Interior, but the minimum can occur in the interior (e.g., $f(z) = z$ on the unit disk has minimum
$|f| = 0$ at $z = 0$). For the minimum principle, one needs the additional hypothesis that $f$ has
No zeros in the domain.
:::

:::caution Common Pitfall The complex logarithm is multi-valued. When a problem asks for "logarithm"
without specifying a branch, you must either compute all values or explicitly state which Branch you
are using. The principal branch $\mathrm{Log}\, z$ has a branch cut along $(-\infty, 0]$ And is
undefined on this cut.

:::caution Common Pitfall When applying the ML inequality, make sure $M$ is a valid upper bound for
$|f(z)|$ on the entire contour. A common error is bounding $|f|$ on only part of the contour. Also,
$L$ must be the arc length of the contour, not a diameter or radius.
