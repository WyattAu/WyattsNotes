---
title: Common Pitfalls
slug: ordinary-differential-equations-common-pitfalls
tags:
  - Mathematics
  - University
---

:::caution Common Pitfall When using undetermined coefficients, always check whether your guess
Overlaps with the homogeneous solution. For $y'' - 4y = e^{2x}$Guessing $y_p = Ae^{2x}$ fails
Because $e^{2x}$ satisfies the homogeneous equation. You must use $y_p = Axe^{2x}$ instead.
:::

:::caution Common Pitfall The Laplace transform of $y'(t)$ is $sY(s) - y(0)$Not $sY(s)$. The Initial
conditions are built into the transform. Forgetting them leads to incorrect solutions.
:::

:::caution Common Pitfall Separation of variables can miss solutions. When dividing by $h(y)$ to
Separate, check whether $h(y) = 0$ gives any valid solutions. For example, solving $y' = y^2$ by
Separating gives $y = -1/(x + C)$But misses the solution $y = 0$.
:::

:::caution Common Pitfall The Fourier series of a function converges to the function only at points
Of continuity. At jump discontinuities, it converges to the midpoint of the jump. The Gibbs
Phenomenon causes overshoots near jumps that do not vanish as more terms are added.
:::

:::caution Common Pitfall When solving PDEs by separation of variables, the boundary conditions
Determine the eigenvalues. Using the wrong boundary conditions (e.g., Neumann instead of Dirichlet)
Leads to a completely different set of eigenfunctions and eigenvalues.
:::

:::caution Common Pitfall Not every first-order ODE can be solved analytically. Equations like
$y' = x^2 + y^2$ have no closed-form solution in terms of elementary functions. Numerical methods
(Euler, Runge-Kutta) may be necessary.
:::

:::caution Common Pitfall The linearization of a nonlinear system near a critical point is only
Valid for hyperbolic critical points (no eigenvalues on the imaginary axis). If eigenvalues lie on
The imaginary axis, the nonlinear system can behave very differently from its linearization.
:::

:::caution Common Pitfall When computing the inverse Laplace transform, always check that the
Partial fraction decomposition is correct before inverting term-by-term. A common error is
Forgetting to include all powers of irreducible quadratic factors.
:::

:::caution Common Pitfall For the Euler-Cauchy equation $x^2 y'' + axy' + by = 0$Remember that $x^r$
with complex $r = \alpha \pm i\beta$ gives solutions involving $\cos(\beta \ln x)$ and
$\sin(\beta \ln x)$Not $\cos(\beta x)$ and $\sin(\beta x)$.
:::

:::caution Common Pitfall The Wronskian $W(y_1, y_2)$ being zero at a single point does not
Necessarily mean the solutions are linearly dependent. For linear ODEs with continuous coefficients,
$W \equiv 0$ everywhere or $W \neq 0$ everywhere. Check Abel's identity.
:::

### 9.9 Worked Example: Lyapunov Function

**Problem.** Show that $(0, 0)$ is asymptotically stable for the system $x' = -x - y^3$,
$y' = x^3 - y$.

<details>
<summary>Solution</summary>

_Solution._ Critical point: $-x - y^3 = 0$ and $x^3 - y = 0$ gives $x = 0, y = 0$.

Choose the Lyapunov function $V(x, y) = \frac{x^2}{2} + \frac{y^2}{2}$. $V(0,0) = 0$ and $V > 0$ for
$(x, y) \neq (0, 0)$.

$\dot{V} = \frac{\partial V}{\partial x}x' + \frac{\partial V}{\partial y}y' = x(-x - y^3) + y(x^3 - y)$

$= -x^2 - xy^3 + x^3 y - y^2 = -x^2 - y^2 + xy(x^2 - y^2)$

This is not negative definite. Let us try $V(x, y) = \frac{x^4}{4} + \frac{y^4}{4}$:

$\dot{V} = x^3(-x - y^3) + y^3(x^3 - y) = -x^4 - x^3 y^3 + x^3 y^3 - y^4 = -(x^4 + y^4)$.

Since $\dot{V} = -(x^4 + y^4) \lt 0$ for $(x, y) \neq (0, 0)$The origin is asymptotically Stable by
Lyapunov's theorem. $\blacksquare$

</details>

### 9.10 Worked Example: Van der Pol Oscillator

**Problem.** Show that the Van der Pol equation $x'' + \mu(x^2 - 1)x' + x = 0$ with $\mu > 0$ Has a
unique limit cycle.

<details>
<summary>Solution</summary>

\_Solution.\* Write as a system: $x' = y$, $y' = -x - \mu(x^2 - 1)y$.

The only critical point is $(0, 0)$. The Jacobian at the origin is
$J = \begin{pmatrix} 0 & 1 \\ -1 & \mu \end{pmatrix}$.

$\mathrm{tr}(J) = \mu > 0$, $\det(J) = 1 > 0$, $\tau^2 - 4\Delta = \mu^2 - 4$.

For $0 \lt \mu \lt 2$: complex eigenvalues with positive real part (**unstable spiral**). For
$\mu \geq 2$: two positive real eigenvalues (**unstable node**).

The origin is always unstable. To show existence of a limit cycle, we use a **Liénard's theorem** Or
construct a trapping region. Define

$L(x) = x^3/3 - x$ and write the system as $x' = y$, $y' = -x - \mu L'(x) y$.

The function $L(x)$ has zeros at $x = \pm 1$. For $\mu > 0$The damping is negative for
$\lvert x \rvert \lt 1$ (energy input) and positive for $\lvert x \rvert > 1$ (energy Dissipation).
This creates a unique stable limit cycle that passes through $x = \pm 1$.

A detailed .../1-number-and-algebra/3_proof-and-logic requires constructing an annular region and
applying the Poincaré-Bendixson Theorem (the inner boundary encloses the unstable origin; the outer
boundary is chosen so that Trajectories point inward). $\blacksquare$

</details>

