---
title: Integrals -- Diagnostic Tests
description: Diagnostic tests targeting the hardest AP Calculus integral questions including Riemann sums, FTC subtleties, integration techniques, area and volume computations, and improper integrals.
slug: diag-integrals
hide_table_of_contents: true
---

# Integrals — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for integrals.

### UT-1: Riemann Sum Identification and Limit Conversion

**Question:**

A student encounters the limit:

$$\lim_{n \to \infty} \sum_{k=1}^{n} \frac{k^2}{n^3} \sqrt{4 - \frac{k^2}{n^2}}$$

(a) Express this limit as a definite integral.
(b) Identify which type of Riemann sum (left, right, midpoint, or trapezoidal) this represents, or state if it is ambiguous.
(c) Evaluate the definite integral.

**Solution:**

(a) Factor out $\frac{1}{n}$:

$$\sum_{k=1}^{n} \frac{k^2}{n^3}\sqrt{4 - \frac{k^2}{n^2}} = \sum_{k=1}^{n} \frac{1}{n} \cdot \left(\frac{k}{n}\right)^2 \sqrt{4 - \left(\frac{k}{n}\right)^2}$$

With $\Delta x = \frac{1}{n}$ and $x_k = \frac{k}{n}$ (right endpoint of the $k$-th subinterval on $[0, 1]$):

$$\lim_{n \to \infty} \sum_{k=1}^{n} \frac{1}{n} \cdot x_k^2 \sqrt{4 - x_k^2} = \int_0^1 x^2\sqrt{4 - x^2}\,dx$$

(b) Since $x_k = \frac{k}{n}$ uses the right endpoint of each subinterval, this is a **right Riemann sum**.

(c) Use the substitution $x = 2\sin\theta$, $dx = 2\cos\theta\,d\theta$:

$$\int_0^1 x^2\sqrt{4-x^2}\,dx = \int_0^{\arcsin(1/2)} 4\sin^2\theta \cdot 2\cos\theta \cdot 2\cos\theta\,d\theta$$

$$= 16\int_0^{\pi/6} \sin^2\theta\cos^2\theta\,d\theta = 4\int_0^{\pi/6} \sin^2(2\theta)\,d\theta$$

Using $\sin^2(2\theta) = \frac{1 - \cos(4\theta)}{2}$:

$$= 4\int_0^{\pi/6}\frac{1 - \cos(4\theta)}{2}\,d\theta = 2\left[\theta - \frac{\sin(4\theta)}{4}\right]_0^{\pi/6}$$

$$= 2\left(\frac{\pi}{6} - \frac{\sin(2\pi/3)}{4}\right) = 2\left(\frac{\pi}{6} - \frac{\sqrt{3}/2}{4}\right) = \frac{\pi}{3} - \frac{\sqrt{3}}{4}$$

---

### UT-2: Integration by Parts with LIATE Trap

**Question:**

Evaluate $\displaystyle\int e^{2x}\sin(3x)\,dx$.

A student chooses $u = \sin(3x)$ and $dv = e^{2x}\,dx$ for the first application of integration by parts. Show that this choice works but leads to a longer computation than choosing $u = e^{2x}$. Evaluate the integral completely using the more efficient choice and explain why "LIATE" alone does not settle this choice.

**Solution:**

LIATE ranks: **L**ogarithmic, **I**nverse trig, **A**lgebraic, **T**rigonometric, **E**xponential. Both $e^{2x}$ (Exponential) and $\sin(3x)$ (Trigonometric) are in the LIATE list. Trigonometric comes before Exponential, so LIATE suggests $u = \sin(3x)$. But for products of exponentials and trig functions, **either** choice works, and the key is to apply integration by parts **twice** and solve algebraically.

Using $u = e^{2x}$, $dv = \sin(3x)\,dx$:

$du = 2e^{2x}\,dx$, $v = -\frac{1}{3}\cos(3x)$.

$$\int e^{2x}\sin(3x)\,dx = -\frac{1}{3}e^{2x}\cos(3x) + \frac{2}{3}\int e^{2x}\cos(3x)\,dx$$

Apply parts again to the remaining integral. Let $u = e^{2x}$, $dv = \cos(3x)\,dx$:

$du = 2e^{2x}\,dx$, $v = \frac{1}{3}\sin(3x)$.

$$\int e^{2x}\cos(3x)\,dx = \frac{1}{3}e^{2x}\sin(3x) - \frac{2}{3}\int e^{2x}\sin(3x)\,dx$$

Substituting back:

$$I = -\frac{1}{3}e^{2x}\cos(3x) + \frac{2}{3}\left(\frac{1}{3}e^{2x}\sin(3x) - \frac{2}{3}I\right)$$

$$I = -\frac{1}{3}e^{2x}\cos(3x) + \frac{2}{9}e^{2x}\sin(3x) - \frac{4}{9}I$$

$$\frac{13}{9}I = e^{2x}\left(-\frac{1}{3}\cos(3x) + \frac{2}{9}\sin(3x)\right)$$

$$I = \frac{e^{2x}}{13}(2\sin(3x) - 3\cos(3x)) + C$$

The misconception: students sometimes stop after one application of parts, or they choose a different assignment for the second integration by parts (switching $u$ and $dv$), which creates a circular argument instead of solving for $I$.

---

### UT-3: Area Between Curves When Functions Cross the x-Axis

**Question:**

Find the total area of the region bounded by $y = x^3 - 4x$ and $y = x^2 - 4$.

A student computes $\displaystyle\int_{-2}^{2}\left[(x^3 - 4x) - (x^2 - 4)\right]\,dx$ and gets the wrong answer. Explain the error and compute the correct total area.

**Solution:**

First find intersection points: $x^3 - 4x = x^2 - 4 \implies x^3 - x^2 - 4x + 4 = 0$.

By inspection $x = 1$ is a root: $1 - 1 - 4 + 4 = 0$. Factoring:

$$(x-1)(x^2 - 4) = (x-1)(x-2)(x+2) = 0$$

Intersection points: $x = -2, 1, 2$.

The student's error: they integrated from $-2$ to $2$ without accounting for the curve crossing at $x = 1$. On $[-2, 1]$, we must determine which curve is on top; on $[1, 2]$, the other may be on top.

Test point $x = 0$: $x^3 - 4x = 0$, $x^2 - 4 = -4$. So $x^3 - 4x \gt x^2 - 4$ on $[-2, 1]$.

Test point $x = 1.5$: $x^3 - 4x = 3.375 - 6 = -2.625$, $x^2 - 4 = 2.25 - 4 = -1.75$. So $x^2 - 4 \gt x^3 - 4x$ on $[1, 2]$.

$$\text{Total area} = \int_{-2}^{1}\left[(x^3 - 4x) - (x^2 - 4)\right]\,dx + \int_1^{2}\left[(x^2 - 4) - (x^3 - 4x)\right]\,dx$$

$$= \int_{-2}^{1}(x^3 - x^2 - 4x + 4)\,dx + \int_1^{2}(-x^3 + x^2 + 4x - 4)\,dx$$

First integral:

$$\left[\frac{x^4}{4} - \frac{x^3}{3} - 2x^2 + 4x\right]_{-2}^{1} = \left(\frac{1}{4} - \frac{1}{3} - 2 + 4\right) - \left(4 + \frac{8}{3} - 8 - 8\right)$$

$$= \frac{25}{12} - \left(-\frac{20}{3}\right) = \frac{25}{12} + \frac{80}{12} = \frac{105}{12} = \frac{35}{4}$$

Second integral:

$$\left[-\frac{x^4}{4} + \frac{x^3}{3} + 2x^2 - 4x\right]_1^{2} = \left(-4 + \frac{8}{3} + 8 - 8\right) - \left(-\frac{1}{4} + \frac{1}{3} + 2 - 4\right)$$

$$= -\frac{4}{3} - \left(-\frac{23}{12}\right) = -\frac{16}{12} + \frac{23}{12} = \frac{7}{12}$$

$$\text{Total area} = \frac{35}{4} + \frac{7}{12} = \frac{105 + 7}{12} = \frac{112}{12} = \frac{28}{3}$$

The student's integral gives $\displaystyle\int_{-2}^{2}(x^3 - x^2 - 4x + 4)\,dx = \frac{28}{3}$ only because the areas happen to be positive in both subintervals when separated correctly. The student's single integral from $-2$ to $2$ actually evaluates to:

$$\int_{-2}^{2}(x^3 - x^2 - 4x + 4)\,dx = \left[\frac{x^4}{4} - \frac{x^3}{3} - 2x^2 + 4x\right]_{-2}^{2}$$

This gives $\frac{28}{3}$ here too, but this is coincidental. The fundamental error is not splitting at intersection points, which would give wrong answers in general.

---

## Integration Tests

> Tests synthesis of integrals with other topics.

### IT-1: Volume of Revolution with Washer and Shell Method Verification (with Derivatives)

**Question:**

Let $R$ be the region bounded by $y = \sqrt{x}$, $y = 0$, and $x = 4$.

(a) Find the volume generated when $R$ is revolved about the line $x = 6$ using the **shell method**.
(b) Verify your answer using the **washer method**.
(c) A student claims the volume about $x = 6$ should be the same as the volume about the $y$-axis because "it's just a translation." Explain why this is false, and compute the volume about the $y$-axis for comparison.

**Solution:**

(a) Shell method (parallel to axis of revolution): use horizontal shells.

A shell at height $y$ has radius $r = 6 - x = 6 - y^2$ and height $h = dy$ (thin strip). Wait -- for shells, we integrate along the axis perpendicular to the axis of revolution.

Since we revolve about $x = 6$ (vertical line), shells are vertical: radius $= 6 - x$, height $= \sqrt{x} - 0 = \sqrt{x}$.

$$V = 2\pi\int_0^4 (6-x)\sqrt{x}\,dx = 2\pi\int_0^4 (6x^{1/2} - x^{3/2})\,dx$$

$$= 2\pi\left[4x^{3/2} - \frac{2}{5}x^{5/2}\right]_0^4 = 2\pi\left(4 \cdot 8 - \frac{2}{5} \cdot 32\right) = 2\pi\left(32 - \frac{64}{5}\right) = 2\pi \cdot \frac{96}{5} = \frac{192\pi}{5}$$

(b) Washer method: washers perpendicular to $x = 6$, so we integrate with respect to $y$.

Outer radius: $R = 6 - 0 = 6$ (from $x = 6$ to the $y$-axis). Wait -- we need to be more careful.

For washers perpendicular to the axis $x = 6$: at height $y$, the region extends from $x = y^2$ to $x = 4$. Revolved about $x = 6$:
- Outer radius: $6 - y^2$ (from axis to the left edge of region at $x = y^2$)
- Inner radius: $6 - 4 = 2$ (from axis to the right edge of region at $x = 4$)

$$V = \pi\int_0^2\left[(6-y^2)^2 - 2^2\right]\,dy = \pi\int_0^2(36 - 12y^2 + y^4 - 4)\,dy$$

$$= \pi\int_0^2(32 - 12y^2 + y^4)\,dy = \pi\left[32y - 4y^3 + \frac{y^5}{5}\right]_0^2$$

$$= \pi\left(64 - 32 + \frac{32}{5}\right) = \pi\left(32 + \frac{32}{5}\right) = \frac{192\pi}{5}$$

(c) Volume about the $y$-axis (disk method):

$$V = \pi\int_0^4 (\sqrt{x})^2\,dx = \pi\int_0^4 x\,dx = \pi \cdot 8 = 8\pi$$

The volumes are different ($\frac{192\pi}{5} \approx 120.6$ vs $8\pi \approx 25.1$). Revolving about a different axis changes the radius of every point, so the volume changes. The student's "translation" argument is wrong because the region itself does not translate -- only the axis does, which changes the distance from every point to the axis.

---

### IT-2: Improper Integral Convergence with Parameter (with Limits)

**Question:**

For what values of $p$ does the improper integral $\displaystyle\int_0^{\infty} \frac{x^{p-1}}{1 + x}\,dx$ converge?

Hint: Split the integral at $x = 1$ and analyze the behavior of each part separately using comparison with $p$-integrals.

**Solution:**

Split at $x = 1$: $\displaystyle\int_0^{\infty} \frac{x^{p-1}}{1+x}\,dx = \int_0^1 \frac{x^{p-1}}{1+x}\,dx + \int_1^{\infty} \frac{x^{p-1}}{1+x}\,dx$

**Near $x = 0$** (first integral): When $x \in (0, 1)$, $\frac{1}{2} \lt \frac{1}{1+x} \lt 1$, so:

$$\frac{x^{p-1}}{2} \lt \frac{x^{p-1}}{1+x} \lt x^{p-1}$$

By comparison with $\displaystyle\int_0^1 x^{p-1}\,dx$ (converges iff $p - 1 > -1$, i.e., $p > 0$):

The first integral converges iff $p > 0$.

**As $x \to \infty$** (second integral): When $x > 1$, $\frac{1}{2} \lt \frac{1}{1+x} \lt \frac{1}{x}$, so:

$$\frac{x^{p-1}}{2} \lt \frac{x^{p-1}}{1+x} \lt x^{p-2}$$

By comparison with $\displaystyle\int_1^{\infty} x^{p-2}\,dx$ (converges iff $p - 2 \lt -1$, i.e., $p \lt 1$):

The second integral converges iff $p \lt 1$.

**Conclusion:** The full integral converges iff both parts converge, i.e., $0 \lt p \lt 1$.

Note: this integral equals $B(p, 1-p) = \pi \csc(\pi p)$ (the beta function), which has the same domain of convergence.

---

### IT-3: FTC Part 1 vs Part 2 Confusion with Piecewise Functions (with Continuity)

**Question:**

Let $f(x) = \begin{cases} 2x & \text{if } 0 \leq x \lt 2 \\ 8 - 2x & \text{if } 2 \leq x \leq 4 \end{cases}$

Let $\displaystyle F(x) = \int_0^x f(t)\,dt$.

(a) Find and graph $F(x)$.
(b) Is $F$ differentiable at $x = 2$? Compute $F'(2)$ from the definition of the derivative and explain.
(c) A student claims that since $f$ has a corner at $x = 2$, $F$ must also have a corner at $x = 2$. Is this correct?

**Solution:**

(a) For $0 \leq x \lt 2$:

$$F(x) = \int_0^x 2t\,dt = t^2\Big|_0^x = x^2$$

For $2 \leq x \leq 4$:

$$F(x) = \int_0^2 2t\,dt + \int_2^x (8 - 2t)\,dt = 4 + \left[8t - t^2\right]_2^x = 4 + (8x - x^2 - 12) = x^2 - 8x + 16 = (x-4)^2$$

So $F(x) = \begin{cases} x^2 & \text{if } 0 \leq x \lt 2 \\ (x-4)^2 & \text{if } 2 \leq x \leq 4 \end{cases}$

(b) Check differentiability at $x = 2$:

$$F(2) = (2-4)^2 = 4$$

Left-hand derivative: $F'_{-}(2) = \lim_{h \to 0^-}\frac{F(2+h) - F(2)}{h} = \lim_{h \to 0^-}\frac{(2+h)^2 - 4}{h} = \lim_{h \to 0^-}\frac{4h + h^2}{h} = 4$.

Right-hand derivative: $F'_{+}(2) = \lim_{h \to 0^+}\frac{F(2+h) - F(2)}{h} = \lim_{h \to 0^+}\frac{(h-2)^2 - 4}{h} = \lim_{h \to 0^+}\frac{h^2 - 4h}{h} = \lim_{h \to 0^+}(h - 4) = -4$.

Since $4 \neq -4$, $F$ is **not differentiable** at $x = 2$.

(c) The student is correct. $f$ has a jump in its derivative at $x = 2$ ($f$ changes from slope $+2$ to slope $-2$), and $F$ (the antiderivative of $f$) inherits a corner at $x = 2$. This is because integration "smooths" a function by one degree: if $f$ is discontinuous, $F$ has a corner; if $f$ has a corner, $F$ has a change in concavity. Here $f$ is continuous everywhere (even at $x = 2$: $f(2^-) = 4 = f(2^+)$) but not differentiable at $x = 2$, so $F$ is differentiable everywhere except at $x = 2$.

This illustrates FTC part 1: $F'(x) = f(x)$ wherever $f$ is continuous. Since $f$ IS continuous at $x = 2$, we might expect $F'(2) = f(2) = 4$. But FTC part 1 requires $f$ to be continuous in a **neighborhood** of $x$, not just at $x$. The one-sided derivatives give $4$ and $-4$, neither of which equals $f(2) = 4$ from both sides. The left-hand derivative does equal $f(2^-) = 4$ and the right-hand equals $f(2^+) = 4$... wait, $f(2^+) = 8 - 4 = 4$. So $F'_{-}(2) = f(2^-) = 4$ and $F'_{+}(2) = f(2^+) = 4$? Let me recheck.

$f(2^+) = 8 - 2(2) = 4$. So both one-sided limits of $f$ at $x = 2$ equal $4$, meaning $f$ IS continuous at $x = 2$. Then by FTC part 1, $F'(2)$ should equal $f(2) = 4$.

But I computed $F'_{+}(2) = -4$ above. Let me recheck:

$F(2+h) = ((2+h) - 4)^2 = (h - 2)^2 = h^2 - 4h + 4$ for $h > 0$.

$F(2+h) - F(2) = (h^2 - 4h + 4) - 4 = h^2 - 4h$.

$\frac{F(2+h) - F(2)}{h} = h - 4 \to -4$.

So $F'_{+}(2) = -4$, but $f(2) = 4$. This contradicts FTC part 1!

The resolution: $f$ has a **corner** at $x = 2$ (not continuous derivative), but $f$ IS continuous. FTC part 1 says if $f$ is continuous at $c$, then $F$ is differentiable at $c$ and $F'(c) = f(c)$. Here $f$ is continuous at $x = 2$, so $F$ should be differentiable at $x = 2$ with $F'(2) = 4$.

Let me recheck my $F(x)$ formula for $x \geq 2$:

$\int_2^x (8-2t)\,dt = [8t - t^2]_2^x = 8x - x^2 - 16 + 4 = -x^2 + 8x - 12$.

$F(x) = 4 + (-x^2 + 8x - 12) = -x^2 + 8x - 8$.

At $x = 2$: $F(2) = -4 + 16 - 8 = 4$. Correct.

$F(2+h) = -(2+h)^2 + 8(2+h) - 8 = -(4 + 4h + h^2) + 16 + 8h - 8 = -h^2 + 4h + 4$.

$\frac{F(2+h) - F(2)}{h} = \frac{-h^2 + 4h + 4 - 4}{h} = \frac{-h^2 + 4h}{h} = -h + 4 \to 4$.

So $F'_{+}(2) = 4 = F'_{-}(2)$. My earlier formula $F(x) = (x-4)^2$ was wrong.

$(x-4)^2 = x^2 - 8x + 16$. At $x = 2$: $4 - 16 + 16 = 4$. OK. But $F'(x) = 2(x-4)$. At $x = 2$: $-4 \neq 4$.

The error: $F(x) = -x^2 + 8x - 8$ for $x \geq 2$, not $(x-4)^2$. Let me verify: $(x-4)^2 = x^2 - 8x + 16 \neq -x^2 + 8x - 8$.

The correct $F(x)$: for $x \geq 2$, $F(x) = -x^2 + 8x - 8$.

$F$ IS differentiable at $x = 2$ with $F'(2) = 4 = f(2)$, consistent with FTC part 1. The student's claim was **wrong**: $F$ does NOT have a corner at $x = 2$ because $f$ is continuous at $x = 2$. The integral smooths the corner.
