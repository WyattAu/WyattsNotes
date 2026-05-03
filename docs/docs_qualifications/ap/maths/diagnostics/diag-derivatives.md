---
title: "Derivatives -- Diagnostic Tests"
description: Diagnostic tests targeting the hardest AP Calculus derivative questions including chain rule compositions, implicit differentiation, related rates, higher-order derivatives, and the mean value theorem.
slug: diag-derivatives
hide_table_of_contents: true
---

# Derivatives — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for derivatives.

### UT-1: Chain Rule with Three Compositions and Implicit Terms

**Question:**

Let $y = \sin^2\!\left(e^{3x^2 + 1}\right)$. Find $\dfrac{d^2y}{dx^2}$ and evaluate it at $x = 0$.

**Solution:**

Let $u = e^{3x^2 + 1}$, then $y = \sin^2(u) = (\sin u)^2$.

$$\frac{dy}{dx} = 2\sin(u) \cdot \cos(u) \cdot \frac{du}{dx} = \sin(2u) \cdot e^{3x^2+1} \cdot 6x$$

$$\frac{dy}{dx} = 6x \, e^{3x^2+1} \sin\!\left(2e^{3x^2+1}\right)$$

For $\dfrac{d^2y}{dx^2}$, apply the product rule to $6x \cdot e^{3x^2+1} \cdot \sin(2e^{3x^2+1})$. Let $A = 6x$, $B = e^{3x^2+1}$, $C = \sin(2e^{3x^2+1})$. Then:

$$\frac{d^2y}{dx^2} = A'BC + AB'C + ABC'$$

$A' = 6$

$B' = e^{3x^2+1} \cdot 6x$

$C' = \cos(2e^{3x^2+1}) \cdot 2 \cdot e^{3x^2+1} \cdot 6x = 12x\,e^{3x^2+1}\cos(2e^{3x^2+1})$

$$\frac{d^2y}{dx^2} = 6e^{3x^2+1}\sin(2e^{3x^2+1}) + 6x \cdot 6x\,e^{3x^2+1}\sin(2e^{3x^2+1}) + 6x\,e^{3x^2+1} \cdot 12x\,e^{3x^2+1}\cos(2e^{3x^2+1})$$

$$= 6e^{3x^2+1}\sin(2e^{3x^2+1}) + 36x^2\,e^{3x^2+1}\sin(2e^{3x^2+1}) + 72x^2\,e^{2(3x^2+1)}\cos(2e^{3x^2+1})$$

At $x = 0$: $3(0)^2 + 1 = 1$, so $e^1 = e$ and $2e^{1} = 2e$.

$$\frac{d^2y}{dx^2}\bigg|_{x=0} = 6e\sin(2e) + 0 + 0 = 6e\sin(2e)$$

The common mistake: students forget the chain rule at the innermost level ($3x^2 + 1$) or mishandle the product rule when computing the second derivative.

---

### UT-2: Implicit Differentiation with Product Rule on Mixed Terms

**Question:**

Given $x^2 y + \sin(xy) = 3$, find $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$.

**Solution:**

Differentiate both sides with respect to $x$ (remembering $y$ is a function of $x$):

$$\frac{d}{dx}[x^2 y] + \frac{d}{dx}[\sin(xy)] = 0$$

$$2xy + x^2 y' + \cos(xy) \cdot (y + xy') = 0$$

$$(x^2 + x\cos(xy))y' = -(2xy + y\cos(xy))$$

$$y' = -\frac{2xy + y\cos(xy)}{x^2 + x\cos(xy)} = -\frac{y(2x + \cos(xy))}{x(x + \cos(xy))}$$

For $y''$, differentiate $y'$ using the quotient rule. Let $u = -y(2x + \cos(xy))$ and $v = x(x + \cos(xy))$.

First, $u' = -y'(2x + \cos(xy)) - y\left(2 - \sin(xy)(y + xy')\right)$.

$v' = (x + \cos(xy)) + x(1 - \sin(xy)(y + xy'))$.

$$y'' = \frac{u'v - uv'}{v^2}$$

This is extremely tedious but tests whether students correctly apply the product rule to the $xy$ term inside $\sin(xy)$, a common error point. The key misconception: students often write $\frac{d}{dx}[\sin(xy)] = \cos(xy)$ instead of $\cos(xy) \cdot \frac{d}{dx}[xy] = \cos(xy)(y + xy')$.

---

### UT-3: Mean Value Theorem and Differentiability Implies Continuity

**Question:**

Let $f(x) = \sqrt[3]{x} = x^{1/3}$.

(a) Show that $f$ is continuous on $[-1, 8]$.
(b) Show that $f$ satisfies the conclusion of the Mean Value Theorem on $[-1, 8]$ by finding all values $c$ in $(-1, 8)$ such that $\displaystyle f'(c) = \frac{f(8) - f(-1)}{8 - (-1)}$.
(c) Identify the point where $f$ is not differentiable and explain why this does not contradict the MVT.

**Solution:**

(a) $f(x) = x^{1/3}$ is a root function, continuous on all of $\mathbb{R}$, so it is continuous on $[-1, 8]$.

(b) $\dfrac{f(8) - f(-1)}{8 - (-1)} = \dfrac{2 - (-1)}{9} = \dfrac{3}{9} = \dfrac{1}{3}$.

$$f'(x) = \frac{1}{3}x^{-2/3} = \frac{1}{3\sqrt[3]{x^2}}$$

Set $f'(c) = \frac{1}{3}$:

$$\frac{1}{3\sqrt[3]{c^2}} = \frac{1}{3} \implies \sqrt[3]{c^2} = 1 \implies c^2 = 1 \implies c = \pm 1$$

Since we need $c \in (-1, 8)$: $c = -1$ is not in the open interval, and $c = 1$ is. So $c = 1$.

Wait -- $c = -1$ is an endpoint, not in $(-1, 8)$. So the only solution is $c = 1$.

(c) $f'(x) = \dfrac{1}{3\sqrt[3]{x^2}}$ is undefined at $x = 0$ (the denominator is zero). So $f$ is **not differentiable** at $x = 0$.

This does not contradict the MVT because the MVT requires differentiability on the **open** interval $(-1, 8)$ and continuity on the **closed** interval $[-1, 8]$. Since $0 \in (-1, 8)$, the hypothesis of the MVT is actually **not satisfied**.

The fact that we found $c = 1$ is a coincidence -- the MVT conclusion happened to hold even though the hypothesis was not met. This is the key trap: the MVT gives a sufficient condition, not a necessary one. Students often incorrectly believe that finding such a $c$ proves the function satisfies the MVT hypotheses.

---

## Integration Tests

> Tests synthesis of derivatives with other topics.

### IT-1: Related Rates with Geometric and Trigonometric Constraints (with Integrals)

**Question:**

A 13-foot ladder leans against a vertical wall. The bottom of the ladder slides away from the wall at 2 ft/s. A point $P$ is located 5 feet from the top of the ladder (measured along the ladder).

(a) How fast is the top of the ladder sliding down the wall when the bottom is 5 feet from the wall?
(b) Find the rate of change of the area of the triangle formed by the ladder, wall, and ground at the same instant.
(c) The point $P$ traces a curve (a "ladder curve"). Set up (but do not evaluate) an integral for the arc length of this curve from the moment the ladder starts sliding (bottom at the wall) until the bottom is 5 feet from the wall.

**Solution:**

(a) Let $x$ = distance from wall to base, $y$ = height on wall. By Pythagoras: $x^2 + y^2 = 169$.

Differentiating: $2x\dfrac{dx}{dt} + 2y\dfrac{dy}{dt} = 0$.

When $x = 5$: $y = \sqrt{169 - 25} = 12$. Given $\dfrac{dx}{dt} = 2$:

$$2(5)(2) + 2(12)\frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{10}{24} = -\frac{5}{12} \text{ ft/s}$$

The negative sign confirms the top moves downward.

(b) Area $A = \dfrac{1}{2}xy$. Differentiating:

$$\frac{dA}{dt} = \frac{1}{2}\left(x\frac{dy}{dt} + y\frac{dx}{dt}\right) = \frac{1}{2}\left(5 \cdot \left(-\frac{5}{12}\right) + 12 \cdot 2\right) = \frac{1}{2}\left(-\frac{25}{12} + 24\right) = \frac{1}{2} \cdot \frac{263}{12} = \frac{263}{24} \text{ ft}^2\text{/s}$$

(c) The point $P$ has coordinates. The bottom of the ladder is at $(x, 0)$ and the top at $(0, y)$ where $y = \sqrt{169 - x^2}$. The point $P$ is 5 feet from the top, so measured from the bottom it is $13 - 5 = 8$ feet along the ladder.

$$P_x = x - \frac{8x}{13} = \frac{5x}{13}, \quad P_y = \frac{8y}{13} = \frac{8\sqrt{169-x^2}}{13}$$

The curve starts when $x = 0$ (bottom at wall) and ends at $x = 5$.

$$\text{Arc length} = \int_0^5 \sqrt{\left(\frac{dP_x}{dx}\right)^2 + \left(\frac{dP_y}{dx}\right)^2} \, dx$$

$$\frac{dP_x}{dx} = \frac{5}{13}, \quad \frac{dP_y}{dx} = \frac{8}{13} \cdot \frac{-x}{\sqrt{169-x^2}}$$

$$\text{Arc length} = \int_0^5 \sqrt{\frac{25}{169} + \frac{64x^2}{169(169-x^2)}} \, dx = \frac{1}{13}\int_0^5 \sqrt{\frac{25(169-x^2) + 64x^2}{169-x^2}} \, dx$$

$$= \frac{1}{13}\int_0^5 \sqrt{\frac{4225 - 25x^2 + 64x^2}{169-x^2}} \, dx = \frac{1}{13}\int_0^5 \sqrt{\frac{4225 + 39x^2}{169 - x^2}} \, dx$$

---

### IT-2: Optimization with Constraint Verification (with Integrals)

**Question:**

Find the rectangle of maximum area that can be inscribed in the region bounded by $y = 4 - x^2$ and $y = 0$, with one side on the $x$-axis. Verify your answer is a maximum using the second derivative test, and then compute the area between the curve and the rectangle that is not covered by the rectangle.

**Solution:**

The parabola $y = 4 - x^2$ intersects the $x$-axis at $x = \pm 2$. A rectangle with base from $-a$ to $a$ (symmetry) on the $x$-axis has height $4 - a^2$.

Area: $A(a) = 2a(4 - a^2) = 8a - 2a^3$ for $0 \lt a \lt 2$.

$$A'(a) = 8 - 6a^2 = 0 \implies a^2 = \frac{4}{3} \implies a = \frac{2\sqrt{3}}{3}$$

$$A''(a) = -12a \lt 0 \text{ for } a > 0$$

Since $A''\!\left(\frac{2\sqrt{3}}{3}\right) = -12 \cdot \frac{2\sqrt{3}}{3} = -8\sqrt{3} \lt 0$, this is a local maximum (and by endpoints, the global maximum on $[0, 2]$).

Maximum area: $A\!\left(\frac{2\sqrt{3}}{3}\right) = 2 \cdot \frac{2\sqrt{3}}{3}\left(4 - \frac{4}{3}\right) = \frac{4\sqrt{3}}{3} \cdot \frac{8}{3} = \frac{32\sqrt{3}}{9}$.

The area between the curve and the rectangle (the two "caps"):

$$\text{Uncovered area} = 2\int_{\frac{2\sqrt{3}}{3}}^{2}(4 - x^2)\,dx = 2\left[4x - \frac{x^3}{3}\right]_{\frac{2\sqrt{3}}{3}}^{2}$$

$$= 2\left(\left(8 - \frac{8}{3}\right) - \left(\frac{8\sqrt{3}}{3} - \frac{8 \cdot 3\sqrt{3}}{81}\right)\right) = 2\left(\frac{16}{3} - \frac{8\sqrt{3}}{3} + \frac{8\sqrt{3}}{27}\right)$$

$$= 2\left(\frac{16}{3} - \frac{72\sqrt{3} - 8\sqrt{3}}{27}\right) = 2\left(\frac{16}{3} - \frac{64\sqrt{3}}{27}\right) = \frac{32}{3} - \frac{128\sqrt{3}}{27}$$

---

### IT-3: Derivative of an Integral with Moving Bounds (with Integrals)

**Question:**

Let $\displaystyle F(x) = \int_{x^2}^{x^3} \frac{t}{1 + \sin^2 t} \, dt$. Find $F'(1)$.

A student reasons: "By the Fundamental Theorem of Calculus, $F'(x) = \dfrac{x^3}{1 + \sin^2(x^3)} - \dfrac{x^2}{1 + \sin^2(x^2)}$, so $F'(1) = \dfrac{1}{1 + \sin^2 1} - \dfrac{1}{1 + \sin^2 1} = 0$."

Identify the error in the student's reasoning and compute the correct value.

**Solution:**

The student forgot the chain rule. By the FTC with moving bounds:

$$F'(x) = \frac{d}{dx}\left[x^3\right] \cdot \frac{x^3}{1 + \sin^2(x^3)} - \frac{d}{dx}\left[x^2\right] \cdot \frac{x^2}{1 + \sin^2(x^2)}$$

$$= 3x^2 \cdot \frac{x^3}{1 + \sin^2(x^3)} - 2x \cdot \frac{x^2}{1 + \sin^2(x^2)}$$

$$= \frac{3x^5}{1 + \sin^2(x^3)} - \frac{2x^3}{1 + \sin^2(x^2)}$$

At $x = 1$:

$$F'(1) = \frac{3}{1 + \sin^2 1} - \frac{2}{1 + \sin^2 1} = \frac{1}{1 + \sin^2 1}$$

The common misconception: students apply FTC part 1 without the chain rule when the bounds are functions of $x$ rather than $x$ itself. The correct formula is:

$$\frac{d}{dx}\int_{a(x)}^{b(x)} f(t)\,dt = f(b(x)) \cdot b'(x) - f(a(x)) \cdot a'(x)$$
