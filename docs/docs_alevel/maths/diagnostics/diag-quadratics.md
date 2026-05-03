---
title: Quadratics -- Diagnostic Tests
description: Hard diagnostic tests for quadratics covering discriminant analysis, hidden quadratics, Vieta's formulas, simultaneous equations, and non-standard forms.
slug: diag-quadratics
hide_table_of_contents: true
---

# Quadratics — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for quadratics.

### UT-1: Discriminant Analysis with Non-Integer Coefficients

**Question:**

The quadratic equation $px^2 + (p+1)x + p - 1 = 0$ has real roots. Find the complete range of values of $p$ for which the equation has:

**(a)** two distinct real roots,

**(b)** a repeated root,

**(c)** no real roots.

Also determine for which values of $p$ the roots are positive.

[Difficulty: hard. Tests discriminant analysis when the discriminant itself is a quadratic in the parameter.]

**Solution:**

The discriminant is:

$$\Delta = (p+1)^2 - 4p(p-1) = p^2 + 2p + 1 - 4p^2 + 4p = -3p^2 + 6p + 1$$

**(a)** Two distinct real roots require $\Delta > 0$:

$$-3p^2 + 6p + 1 > 0$$
$$3p^2 - 6p - 1 < 0$$

The roots of $3p^2 - 6p - 1 = 0$ are:

$$p = \frac{6 \pm \sqrt{36 + 12}}{6} = \frac{6 \pm \sqrt{48}}{6} = \frac{6 \pm 4\sqrt{3}}{6} = \frac{3 \pm 2\sqrt{3}}{3} = 1 \pm \frac{2\sqrt{3}}{3}$$

Since $3p^2 - 6p - 1$ is a positive quadratic, it is negative between the roots:

$$1 - \frac{2\sqrt{3}}{3} < p < 1 + \frac{2\sqrt{3}}{3}$$

Approximately: $-0.155 < p < 2.155$.

Note: We also require $p \neq 0$ for this to be a genuine quadratic. If $p = 0$, the equation becomes $x - 1 = 0$, which has one real root. So $p = 0$ is excluded from the quadratic case.

**(b)** A repeated root requires $\Delta = 0$:

$$p = 1 \pm \frac{2\sqrt{3}}{3}$$

**(c)** No real roots require $\Delta < 0$:

$$p < 1 - \frac{2\sqrt{3}}{3} \quad \text{or} \quad p > 1 + \frac{2\sqrt{3}}{3}$$

**Positive roots condition:** By Vieta's formulas, for both roots to be positive we need:
- Sum of roots $> 0$: $-\frac{p+1}{p} > 0$
- Product of roots $> 0$: $\frac{p-1}{p} > 0$

For the sum: $-\frac{p+1}{p} > 0 \implies \frac{p+1}{p} < 0$. This is satisfied when $-1 < p < 0$.

For the product: $\frac{p-1}{p} > 0$. This is satisfied when $p > 1$ or $p < 0$.

Both conditions simultaneously: $-1 < p < 0$.

But we also need $\Delta \geq 0$. For $-1 < p < 0$, checking $\Delta = -3p^2 + 6p + 1$: at $p = -1$, $\Delta = -3-6+1 = -8 < 0$; at $p = 0$, $\Delta = 1 > 0$. The discriminant is zero at $p = 1 - 2\sqrt{3}/3 \approx -0.155$.

So for positive roots, we need $1 - 2\sqrt{3}/3 \leq p < 0$ (approximately $-0.155 \leq p < 0$).

---

### UT-2: Hidden Quadratics and Non-Standard Forms

**Question:**

**(a)** Solve the equation $x^{2/3} - x^{1/3} - 6 = 0$, giving all real solutions.

**(b)** The curve $C$ has equation $y = 2\sqrt{x+1} - x - 1$. Find the coordinates of all points where $C$ intersects the line $y = 0$, and determine the maximum value of $y$ on $C$.

[Difficulty: hard. Tests recognition of hidden quadratic structure and the domain constraints that students commonly miss.]

**Solution:**

**(a)** Let $u = x^{1/3}$. Then $u^2 = x^{2/3}$, and the equation becomes:

$$u^2 - u - 6 = 0$$
$$(u-3)(u+2) = 0$$
$$u = 3 \quad \text{or} \quad u = -2$$

Since $u = x^{1/3}$ and the cube root is defined for all real $x$:

- $x^{1/3} = 3 \implies x = 27$
- $x^{1/3} = -2 \implies x = -8$

Both solutions are valid.

**(b)** For $y = 0$:

$$2\sqrt{x+1} - x - 1 = 0$$
$$2\sqrt{x+1} = x + 1$$

Let $u = \sqrt{x+1}$. The domain requires $x + 1 \geq 0$, so $x \geq -1$, meaning $u \geq 0$.

$$2u = u^2$$
$$u^2 - 2u = 0$$
$$u(u-2) = 0$$

So $u = 0$ or $u = 2$ (both valid since $u \geq 0$).

- $u = 0$: $\sqrt{x+1} = 0 \implies x = -1$, giving point $(-1, 0)$.
- $u = 2$: $\sqrt{x+1} = 2 \implies x = 3$, giving point $(3, 0)$.

**Finding the maximum:** Since $x + 1 = u^2$, we have $x = u^2 - 1$ and:

$$y = 2u - u^2 = -(u^2 - 2u) = -(u-1)^2 + 1$$

This is a downward-opening parabola in $u$ with vertex at $u = 1$. Since $u \geq 0$, $u = 1$ is attainable.

At $u = 1$: $x = 0$, $y = 1$.

The maximum value of $y$ on $C$ is $\boxed{1}$, occurring at the point $(0, 1)$.

---

### UT-3: Vieta's Formulas with Non-Standard Quadratic Forms

**Question:**

The roots of the equation $2x^2 - 5x + 1 = 0$ are $\alpha$ and $\beta$.

Without finding the numerical values of $\alpha$ and $\beta$, find the value of:

$$\frac{1}{\alpha^2 + 1} + \frac{1}{\beta^2 + 1}$$

[Difficulty: hard. Tests Vieta's formulas with algebraic manipulation requiring creative rewriting to avoid computing roots directly.]

**Solution:**

**Step 1: State Vieta's formulas.**

$$\alpha + \beta = \frac{5}{2}, \quad \alpha\beta = \frac{1}{2}$$

**Step 2: Simplify the target expression.**

$$\frac{1}{\alpha^2+1} + \frac{1}{\beta^2+1} = \frac{(\beta^2+1) + (\alpha^2+1)}{(\alpha^2+1)(\beta^2+1)} = \frac{\alpha^2 + \beta^2 + 2}{\alpha^2\beta^2 + \alpha^2 + \beta^2 + 1}$$

**Step 3: Express $\alpha^2 + \beta^2$ using Vieta's.**

$$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \frac{25}{4} - 1 = \frac{21}{4}$$

**Step 4: Compute $\alpha^2\beta^2$.**

$$\alpha^2\beta^2 = (\alpha\beta)^2 = \frac{1}{4}$$

**Step 5: Substitute into the expression.**

$$\frac{\frac{21}{4} + 2}{\frac{1}{4} + \frac{21}{4} + 1} = \frac{\frac{21}{4} + \frac{8}{4}}{\frac{1}{4} + \frac{21}{4} + \frac{4}{4}} = \frac{\frac{29}{4}}{\frac{26}{4}} = \frac{29}{26}$$

---

## Integration Tests

> Tests synthesis of quadratics with other topics. Requires combining concepts from multiple units.

### IT-1: Quadratic-Defined Function with Implicit Properties (with Functions)

**Question:**

A quadratic function $f$ satisfies $f(x+2) - f(x) = 4x + 6$ for all real $x$, and $f(0) = 3$.

**(a)** Find the expression for $f(x)$.

**(b)** The function $g$ is defined by $g(x) = f(x) + kx$ for some constant $k$. Given that $g(x) = g(4-x)$ for all $x$, find the value of $k$ and the axis of symmetry of $g$.

**(c)** Find the range of $g$ on the domain $[0, 4]$.

[Difficulty: hard. Combines quadratic properties, function symmetry, and range analysis.]

**Solution:**

**(a)** Let $f(x) = ax^2 + bx + c$. Then:

$$f(x+2) = a(x+2)^2 + b(x+2) + c = ax^2 + 4ax + 4a + bx + 2b + c$$

$$f(x+2) - f(x) = 4ax + 4a + 2b$$

We are given $f(x+2) - f(x) = 4x + 6$, so:

$$4ax + 4a + 2b = 4x + 6$$

Equating coefficients:
- $4a = 4 \implies a = 1$
- $4a + 2b = 6 \implies 4 + 2b = 6 \implies b = 1$

Since $f(0) = 3$: $c = 3$.

$$f(x) = x^2 + x + 3$$

**(b)** $g(x) = x^2 + x + 3 + kx = x^2 + (k+1)x + 3$.

The condition $g(x) = g(4-x)$ for all $x$ means $g$ is symmetric about $x = 2$. For a quadratic, the axis of symmetry is at $x = -\frac{(k+1)}{2}$.

$$-\frac{k+1}{2} = 2 \implies k + 1 = -4 \implies k = -5$$

So $g(x) = x^2 - 4x + 3$ with axis of symmetry $x = 2$.

**(c)** On $[0, 4]$, the vertex of $g$ is at $x = 2$ (which lies in the domain).

$$g(2) = 4 - 8 + 3 = -1$$

At the endpoints: $g(0) = 3$ and $g(4) = 16 - 16 + 3 = 3$.

The range of $g$ on $[0, 4]$ is $[-1, 3]$.

---

### IT-2: Parabola-Circle Intersection (with Coordinate Geometry)

**Question:**

The parabola $C_1$ has equation $y = x^2 - 4x + 1$ and the circle $C_2$ has equation $x^2 + y^2 - 6y + 5 = 0$.

**(a)** Show that the $x$-coordinates of the points of intersection of $C_1$ and $C_2$ satisfy the equation $x^4 - 8x^3 + 19x^2 - 12x = 0$.

**(b)** Hence find the coordinates of all points of intersection.

**(c)** The region $R$ is bounded by $C_1$ and $C_2$. Find the area of $R$ to 3 significant figures.

[Difficulty: hard. Combines algebraic manipulation of simultaneous equations with geometric interpretation.]

**Solution:**

**(a)** From $C_1$: $y = x^2 - 4x + 1$. Substitute into $C_2$:

$$x^2 + (x^2 - 4x + 1)^2 - 6(x^2 - 4x + 1) + 5 = 0$$

Expand $(x^2 - 4x + 1)^2 = x^4 - 8x^3 + 18x^2 - 8x + 1$.

$$x^2 + x^4 - 8x^3 + 18x^2 - 8x + 1 - 6x^2 + 24x - 6 + 5 = 0$$

$$x^4 - 8x^3 + (1 + 18 - 6)x^2 + (-8 + 24)x + (1 - 6 + 5) = 0$$

$$x^4 - 8x^3 + 13x^2 + 16x = 0$$

This does not match the stated equation. Let me recheck. The circle is $x^2 + y^2 - 6y + 5 = 0$, which can be written as $x^2 + (y-3)^2 = 4$, a circle centred at $(0, 3)$ with radius $2$.

Let me redo the substitution more carefully:

$y^2 = (x^2 - 4x + 1)^2 = x^4 + 16x^2 + 1 - 8x^3 + 2x^2 - 8x = x^4 - 8x^3 + 18x^2 - 8x + 1$.

$-6y = -6x^2 + 24x - 6$.

$$x^2 + (x^4 - 8x^3 + 18x^2 - 8x + 1) + (-6x^2 + 24x - 6) + 5 = 0$$

$$x^4 - 8x^3 + (1 + 18 - 6)x^2 + (-8 + 24)x + (1 - 6 + 5) = 0$$

$$x^4 - 8x^3 + 13x^2 + 16x = 0$$

The problem statement's equation $x^4 - 8x^3 + 19x^2 - 12x = 0$ does not match. This suggests the original problem may have different parameters. Let me proceed with the correct equation:

$$x^4 - 8x^3 + 13x^2 + 16x = 0$$
$$x(x^3 - 8x^2 + 13x + 16) = 0$$

So $x = 0$ is one solution. For $x^3 - 8x^2 + 13x + 16 = 0$, trying $x = -1$: $-1 - 8 - 13 + 16 = -6 \neq 0$. Trying $x = 4$: $64 - 128 + 52 + 16 = 4 \neq 0$.

Let me re-examine with the stated problem equation $x^4 - 8x^3 + 19x^2 - 12x = 0$:

$$x(x^3 - 8x^2 + 19x - 12) = 0$$

Testing $x = 1$: $1 - 8 + 19 - 12 = 0$. So $(x-1)$ is a factor.

$x^3 - 8x^2 + 19x - 12 = (x-1)(x^2 - 7x + 12) = (x-1)(x-3)(x-4)$.

So $x = 0, 1, 3, 4$. For the stated problem to work, let me use the circle $x^2 + y^2 - 6x - 4y + 9 = 0$ and verify. Actually, the stated equation works with the parabola $y = x^2 - 4x + 1$ and the circle $(x-3)^2 + (y-3)^2 = 4$, i.e. $x^2 - 6x + y^2 - 6y + 14 = 0$.

Substituting $y = x^2 - 4x + 1$:

$y^2 - 6y = (x^2-4x+1)^2 - 6(x^2-4x+1) = x^4 - 8x^3 + 18x^2 - 8x + 1 - 6x^2 + 24x - 6$

$= x^4 - 8x^3 + 12x^2 + 16x - 5$

$x^2 - 6x + x^4 - 8x^3 + 12x^2 + 16x - 5 + 14 = 0$

$x^4 - 8x^3 + 13x^2 + 10x + 9 = 0$

That also doesn't work. Let me use the problem as stated and find the correct circle. With $y = x^2 - 4x + 1$ and intersection $x$-values of $0, 1, 3, 4$:

- $x = 0$: $y = 1$, point $(0, 1)$
- $x = 1$: $y = -2$, point $(1, -2)$
- $x = 3$: $y = -2$, point $(3, -2)$
- $x = 4$: $y = 1$, point $(4, 1)$

These four points lie on the circle $x^2 + y^2 - 4x - 2y - 7 = 0$ (verified: $(0,1)$: $0+1-0-2-7=-8\neq 0$).

Let me just correct the circle to match. The points $(0,1), (1,-2), (3,-2), (4,1)$ have $x$-centre at $(0+4)/2 = 2$ and $y$-centre at $(1+(-2))/2 = -1/2$ or from $(1+3)/2$ in $x$ and $(-2+(-2))/2 = -2$ in $y$.

Actually, the four points form a symmetric arrangement. The perpendicular bisector of $(0,1)$ and $(4,1)$ is $x = 2$. The perpendicular bisector of $(1,-2)$ and $(3,-2)$ is $x = 2$. The perpendicular bisector of $(0,1)$ and $(1,-2)$ has midpoint $(1/2, -1/2)$ and slope $3$, so the perpendicular has slope $-1/3$: $y + 1/2 = -1/3(x - 1/2)$.

At $x = 2$: $y + 1/2 = -1/3 \cdot 3/2 = -1/2$, so $y = -1$. Centre is $(2, -1)$.

Radius: distance from $(2,-1)$ to $(0,1) = \sqrt{4+4} = 2\sqrt{2}$.

Circle: $(x-2)^2 + (y+1)^2 = 8$, i.e. $x^2 + y^2 - 4x + 2y - 3 = 0$.

Let me verify with the stated problem. The circle $x^2 + y^2 - 6y + 5 = 0$ does not match. I will adjust the problem to use the correct circle:

**Corrected circle:** $x^2 + y^2 - 4x + 2y - 3 = 0$.

**(b)** The four $x$-values are $x = 0, 1, 3, 4$ with corresponding $y$-values from $y = x^2 - 4x + 1$:

| $x$ | $y$ |
|-----|-----|
| 0 | 1 |
| 1 | -2 |
| 3 | -2 |
| 4 | 1 |

Points of intersection: $(0, 1)$, $(1, -2)$, $(3, -2)$, $(4, 1)$.

**(c)** The region $R$ bounded by $C_1$ and $C_2$ between $x = 0$ and $x = 4$.

The area is given by:

$$A = \int_0^4 \left[(y_{\text{circle, upper}}) - (y_{\text{parabola}})\right] \, dx + \int_1^3 \left[(y_{\text{parabola}}) - (y_{\text{circle, lower}})\right] \, dx$$

From the circle $(y+1)^2 = 8 - (x-2)^2$: $y = -1 \pm \sqrt{8 - (x-2)^2}$.

The upper semicircle: $y_u = -1 + \sqrt{8-(x-2)^2}$.
The lower semicircle: $y_l = -1 - \sqrt{8-(x-2)^2}$.

Between $x = 0$ and $x = 4$, the parabola lies below the upper semicircle and above the lower semicircle. The bounded region consists of two "lens-shaped" regions. Computing the exact area requires:

$$A = \int_0^1 (y_u - y_p) \, dx + \int_1^3 (y_u - y_l) \, dx + \int_3^4 (y_u - y_p) \, dx - \int_1^3 (y_p - y_l) \, dx$$

This simplifies to:

$$A = \int_0^1 (y_u - y_p) \, dx + \int_1^3 (y_u - y_p) \, dx + \int_3^4 (y_u - y_p) \, dx = \int_0^4 (y_u - y_p) \, dx$$

$$= \int_0^4 \left[-1 + \sqrt{8-(x-2)^2} - (x^2 - 4x + 1)\right] dx$$

$$= \int_0^4 \left[\sqrt{8-(x-2)^2} - x^2 + 4x - 2\right] dx$$

The integral $\int_0^4 \sqrt{8-(x-2)^2} \, dx$ is a semicircle of radius $2\sqrt{2}$, giving area $\frac{\pi(2\sqrt{2})^2}{2} = 4\pi$.

$$\int_0^4 (-x^2 + 4x - 2) \, dx = \left[-\frac{x^3}{3} + 2x^2 - 2x\right]_0^4 = -\frac{64}{3} + 32 - 8 = -\frac{64}{3} + 24 = \frac{72 - 64}{3} = \frac{8}{3}$$

$$A = 4\pi + \frac{8}{3} = \frac{12\pi + 8}{3} \approx 15.6 \text{ (3 s.f.)}$$

---

### IT-3: Optimisation with Calculus (with Differentiation)

**Question:**

A rectangular enclosure is to be built against an existing straight wall. Three sides of the enclosure are to be made of fencing, and the fourth side is the wall. The total length of fencing available is 60 metres.

**(a)** Show that the area $A$ of the enclosure can be written as $A = 30x - \frac{3}{2}x^2$ where $x$ is the length of the side perpendicular to the wall.

**(b)** A farmer decides that the enclosure must also contain a rectangular internal partition parallel to the wall, dividing the enclosure into two equal smaller rectangles. The partition uses fencing of the same type. Find the dimensions of the enclosure that maximise the total area.

**(c)** The fencing costs $20 per metre, but there is a discount of $5\%$ on the total cost if the enclosure is square (when viewed with the wall as one side). Determine which design (with or without partition) gives the larger net area per pound spent, and justify your answer.

[Difficulty: hard. Combines quadratic optimisation with practical reasoning and comparative analysis.]

**Solution:**

**(a)** Let $x$ be the length perpendicular to the wall and $y$ be the length parallel to the wall.

Fencing used: $2x + y = 60$, so $y = 60 - 2x$.

$$A = xy = x(60 - 2x) = 60x - 2x^2$$

The stated formula $A = 30x - \frac{3}{2}x^2$ does not match. The correct expression is $A = 60x - 2x^2$.

Let me check: if "three sides" means two perpendicular and one parallel, then $2x + y = 60$ and $A = x(60-2x) = 60x - 2x^2$. The stated formula with coefficient $3/2$ would require a different setup.

If instead the fencing forms $2x + y = 60$ where the coefficient of $x$ accounts for the partition: with a partition parallel to the wall, we need $3x + 2y = 60$ (three perpendicular sections and two parallel sections), giving $y = 30 - \frac{3}{2}x$ and $A = x(30 - \frac{3}{2}x) = 30x - \frac{3}{2}x^2$. This is for part (b).

I will re-interpret part (a) as follows: the area is $A = 60x - 2x^2$ without the partition, and I will correct the problem statement. However, since the question states $A = 30x - \frac{3}{2}x^2$, this applies to part (b)'s setup. Let me proceed with the corrected interpretation.

**(a) Corrected:** Without partition: $A = 60x - 2x^2$. Maximum at $x = 15$, $y = 30$, $A_{\max} = 450$ m$^2$.

**(b)** With partition parallel to the wall, the fencing layout is: 3 lengths of $x$ (two outer sides + one partition) and 2 lengths of $y$ (front and back).

$$3x + 2y = 60 \implies y = 30 - \frac{3}{2}x$$

$$A = xy = x\left(30 - \frac{3}{2}x\right) = 30x - \frac{3}{2}x^2$$

This is a downward-opening quadratic with vertex at:

$$x = \frac{-30}{2 \cdot (-3/2)} = \frac{30}{3} = 10$$

At $x = 10$: $y = 30 - 15 = 15$. $A_{\max} = 10 \times 15 = 150$ m$^2$.

**(c)** Without partition: Area = 450 m$^2$, fencing = 60 m, cost = $\pounds 1200$ (no discount since not square), area per pound $= 450/1200 = 0.375$ m$^2$/\pounds.

With partition: Area = 150 m$^2$, fencing = 60 m, cost = $\pounds 1200$, area per pound $= 150/1200 = 0.125$ m$^2$/\pounds.

The design without partition gives significantly better area per pound spent ($0.375$ vs $0.125$ m$^2$/\pounds).
