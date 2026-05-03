---
title: Polar Coordinates -- Diagnostic Tests
description: "A-Level Further Maths diagnostic tests for polar coordinates: conversion, sketching, area enclosed, tangent at a point."
slug: diag-polar-coordinates
hide_table_of_contents: true
---

# Polar Coordinates — Diagnostic Tests

## Unit Tests

### UT-1: Conversion and Sketching
**Question:** (a) Convert the Cartesian equation $x^2 + y^2 = 4$ to polar form. (b) Convert $r = 2\cos\theta$ to Cartesian form and sketch the curve. (c) Convert $r = \frac{4}{1 + \cos\theta}$ to Cartesian form. (d) Sketch $r = 2(1 + \cos\theta)$ for $0 \le \theta \le 2\pi$.

**Solution:**

(a) $x = r\cos\theta$, $y = r\sin\theta$. $r^2\cos^2\theta + r^2\sin^2\theta = 4$. $r^2 = 4$. $r = 2$ (circle centred at origin, radius 2).

(b) $r = 2\cos\theta \Rightarrow r^2 = 2r\cos\theta \Rightarrow x^2 + y^2 = 2x \Rightarrow (x-1)^2 + y^2 = 1$. This is a circle centred at $(1, 0)$ with radius 1. It passes through the origin and is tangent to the $y$-axis.

(c) $r(1 + \cos\theta) = 4$. $r + r\cos\theta = 4$. $\sqrt{x^2+y^2} + x = 4$. $\sqrt{x^2+y^2} = 4 - x$. Squaring: $x^2 + y^2 = 16 - 8x + x^2$. $y^2 = 16 - 8x$. $x = 2 - y^2/8$.

This is a parabola with vertex at $(2, 0)$, opening to the left. It is the polar form of a conic section with eccentricity 1 (parabola) and directrix $x = 4$.

(d) $r = 2(1 + \cos\theta)$ is a **cardioid**. At $\theta = 0$: $r = 4$. At $\theta = \pi$: $r = 0$. At $\theta = \pi/2$: $r = 2$. It has a cusp at the origin (when $\theta = \pi$) and is symmetric about the $x$-axis.

### UT-2: Area Enclosed by Polar Curves
**Question:** (a) Find the area enclosed by one loop of $r = \sin 2\theta$. (b) Find the area enclosed by $r = 2 + \cos\theta$. (c) Find the area enclosed by the cardioid $r = 1 + \cos\theta$. (d) Find the area inside $r = 3\cos\theta$ and outside $r = 1 + \cos\theta$.

**Solution:**

(a) One loop of $r = \sin 2\theta$ occurs for $0 \le \theta \le \pi/2$.
$A = \frac{1}{2}\int_0^{\pi/2} \sin^2 2\theta\,d\theta = \frac{1}{2}\int_0^{\pi/2} \frac{1 - \cos 4\theta}{2}\,d\theta = \frac{1}{4}\left[\theta - \frac{\sin 4\theta}{4}\right]_0^{\pi/2} = \frac{\pi}{8}$.

(b) $A = \frac{1}{2}\int_0^{2\pi} (2+\cos\theta)^2\,d\theta = \frac{1}{2}\int_0^{2\pi} (4 + 4\cos\theta + \cos^2\theta)\,d\theta$
$= \frac{1}{2}\int_0^{2\pi} \left(4 + 4\cos\theta + \frac{1+\cos 2\theta}{2}\right)\,d\theta = \frac{1}{2}\left[4\theta + 4\sin\theta + \frac{\theta}{2} + \frac{\sin 2\theta}{4}\right]_0^{2\pi}$
$= \frac{1}{2}(8\pi + \pi) = \frac{9\pi}{2}$.

(c) $A = \frac{1}{2}\int_0^{2\pi} (1+\cos\theta)^2\,d\theta = \frac{1}{2}\int_0^{2\pi} (1 + 2\cos\theta + \cos^2\theta)\,d\theta = \frac{1}{2}\int_0^{2\pi}\left(\frac{3}{2} + 2\cos\theta + \frac{\cos 2\theta}{2}\right)\,d\theta$
$= \frac{1}{2}\left[\frac{3\theta}{2} + 2\sin\theta + \frac{\sin 2\theta}{4}\right]_0^{2\pi} = \frac{1}{2} \times 3\pi = \frac{3\pi}{2}$.

(d) Find intersection: $3\cos\theta = 1 + \cos\theta$, $2\cos\theta = 1$, $\theta = \pm\pi/3$.

$A = \frac{1}{2}\int_{-\pi/3}^{\pi/3} [(3\cos\theta)^2 - (1+\cos\theta)^2]\,d\theta$
$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (9\cos^2\theta - 1 - 2\cos\theta - \cos^2\theta)\,d\theta$
$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (8\cos^2\theta - 2\cos\theta - 1)\,d\theta$
$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (4 + 4\cos 2\theta - 2\cos\theta - 1)\,d\theta = \frac{1}{2}\int_{-\pi/3}^{\pi/3} (3 + 4\cos 2\theta - 2\cos\theta)\,d\theta$
$= \frac{1}{2}\left[3\theta + 2\sin 2\theta - 2\sin\theta\right]_{-\pi/3}^{\pi/3} = \frac{1}{2}(2\pi + 0 - 0) = \pi$.

### UT-3: Tangents and Intersections
**Question:** (a) Find the equation of the tangent to $r = 2(1 - \cos\theta)$ at $\theta = \pi/2$. (b) Find the points where $r = 2$ and $r = 4\cos\theta$ intersect. (c) Find the angle between the tangent and the radius vector at $\theta = \pi/4$ for $r = e^\theta$. (d) Convert $r = \sec\theta$ to Cartesian form.

**Solution:**

(a) $r = 2(1-\cos\theta)$. $x = r\cos\theta = 2\cos\theta - 2\cos^2\theta$. $y = r\sin\theta = 2\sin\theta - 2\sin\theta\cos\theta$.

$\frac{dx}{d\theta} = -2\sin\theta + 4\cos\theta\sin\theta$. At $\theta = \pi/2$: $x = 0$, $y = 2$, $\frac{dx}{d\theta} = -2 + 0 = -2$.
$\frac{dy}{d\theta} = 2\cos\theta - 2(\cos^2\theta - \sin^2\theta)$. At $\theta = \pi/2$: $\frac{dy}{d\theta} = 0 - 2(-1) = 2$.

$\frac{dy}{dx} = \frac{2}{-2} = -1$. Tangent: $y - 2 = -1(x - 0)$, i.e., $x + y = 2$.

(b) $2 = 4\cos\theta$, $\cos\theta = 1/2$, $\theta = \pm\pi/3$.
Points: $(2\cos(\pi/3), 2\sin(\pi/3)) = (1, \sqrt{3})$ and $(1, -\sqrt{3})$.

(c) $r = e^\theta$. $\tan\psi = \frac{r}{dr/d\theta} = \frac{e^\theta}{e^\theta} = 1$. $\psi = \pi/4$ at all points. The tangent makes $45^\circ$ with the radius vector everywhere.

(d) $r = \sec\theta \Rightarrow r\cos\theta = 1 \Rightarrow x = 1$. A vertical line.

---

## Integration Tests

### IT-1: Polar Curves and Calculus (with Further Calculus)
**Question:** The curve $r = a\theta$ (Archimedean spiral) for $0 \le \theta \le 2\pi$. (a) Find the arc length. (b) Find the area enclosed. (c) Find the Cartesian equation of the tangent at $\theta = \pi$. (d) Find the area between the spiral and the line $\theta = \pi$.

**Solution:**

(a) $s = \int_0^{2\pi} \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta = \int_0^{2\pi} \sqrt{a^2\theta^2 + a^2}\,d\theta = a\int_0^{2\pi} \sqrt{\theta^2 + 1}\,d\theta$.

This requires the substitution $\theta = \sinh u$: $d\theta = \cosh u\,du$, $\sqrt{\theta^2+1} = \cosh u$.
$s = a\int_0^{\text{arcsinh}(2\pi)} \cosh^2 u\,du = \frac{a}{2}\int_0^{\text{arcsinh}(2\pi)} (1 + \cosh 2u)\,du = \frac{a}{2}\left[u + \frac{\sinh 2u}{2}\right]$.

Since $\sinh(\text{arcsinh}(2\pi)) = 2\pi$ and $\cosh(\text{arcsinh}(2\pi)) = \sqrt{1 + 4\pi^2}$:
$\sinh(2\text{arcsinh}(2\pi)) = 2 \times 2\pi \times \sqrt{1+4\pi^2} = 4\pi\sqrt{1+4\pi^2}$.
$s = \frac{a}{2}\left(\text{arcsinh}(2\pi) + 2\pi\sqrt{1+4\pi^2}\right)$.

(b) $A = \frac{1}{2}\int_0^{2\pi} a^2\theta^2\,d\theta = \frac{a^2}{2}\left[\frac{\theta^3}{3}\right]_0^{2\pi} = \frac{a^2}{2} \cdot \frac{8\pi^3}{3} = \frac{4\pi^3 a^2}{3}$.

(c) At $\theta = \pi$: $r = a\pi$. $x = a\pi\cos\pi = -a\pi$, $y = a\pi\sin\pi = 0$.
$\frac{dx}{d\theta} = a(\cos\theta - \theta\sin\theta)$, $\frac{dy}{d\theta} = a(\sin\theta + \theta\cos\theta)$.
At $\theta = \pi$: $\frac{dx}{d\theta} = a(-1 - 0) = -a$, $\frac{dy}{d\theta} = a(0 - \pi) = -a\pi$.
$\frac{dy}{dx} = \pi$. Tangent at $(-a\pi, 0)$: $y = \pi(x + a\pi)$.

(d) Area between spiral and $\theta = \pi$: This is the area swept from $\theta = 0$ to $\theta = \pi$:
$A = \frac{1}{2}\int_0^{\pi} a^2\theta^2\,d\theta = \frac{a^2\pi^3}{6}$.

### IT-2: Conics in Polar Form (with Complex Numbers)
**Question:** The conic $r = \frac{6}{2 + \cos\theta}$ has eccentricity $e$ and semi-latus rectum $l$. (a) Find $e$ and $l$. (b) Identify the type of conic. (c) Find the Cartesian equation. (d) Find the directrices in Cartesian form.

**Solution:**

(a) Standard form: $r = \frac{l}{1 + e\cos\theta}$. Given: $r = \frac{6}{2+\cos\theta} = \frac{3}{1 + \frac{1}{2}\cos\theta}$.
So $l = 3$ and $e = 1/2$.

(b) Since $e = 1/2 \lt 1$, the conic is an **ellipse**.

(c) $r(2+\cos\theta) = 6$. $2r + r\cos\theta = 6$. $2\sqrt{x^2+y^2} + x = 6$. $\sqrt{x^2+y^2} = 3 - x/2$.
Squaring: $x^2 + y^2 = 9 - 3x + x^2/4$. $y^2 + 3x^2/4 - 3x + 9 = 0$.
$4y^2 + 3x^2 - 12x + 36 = 0$. $4y^2 + 3(x^2 - 4x + 4) + 36 - 12 = 0$. $4y^2 + 3(x-2)^2 + 24 = 0$.

Wait, that gives $4y^2 + 3(x-2)^2 = -24$, which is impossible. Let me recheck.

$y^2 + \frac{3}{4}x^2 - 3x + 9 = 0$. $\frac{3}{4}(x^2 - 4x) + y^2 + 9 = 0$. $\frac{3}{4}((x-2)^2 - 4) + y^2 + 9 = 0$.
$\frac{3}{4}(x-2)^2 - 3 + y^2 + 9 = 0$. $\frac{3}{4}(x-2)^2 + y^2 = -6$.

This is impossible -- I must have an error. Let me redo: $r = \frac{6}{2+\cos\theta}$. $r + \frac{r\cos\theta}{2} = 3$.

Hmm, $\frac{6}{2+\cos\theta} = \frac{6}{2}\cdot\frac{1}{1 + \frac{1}{2}\cos\theta}$... wait, no. $\frac{6}{2+\cos\theta} = \frac{3}{1+\cos\theta/2}$. So $l = 3$ and $e = 1/2$.

$r = \frac{l}{1+e\cos\theta}$. $r(1+e\cos\theta) = l$. $r + er\cos\theta = l$. $r + \frac{1}{2}x = 3$.
$\sqrt{x^2+y^2} = 3 - x/2$. Squaring: $x^2 + y^2 = 9 - 3x + x^2/4$. $\frac{3}{4}x^2 - 3x + y^2 + 9 = 0$.

$\frac{3}{4}(x^2 - 4x + 4) + y^2 + 9 - 3 = 0$. $\frac{3}{4}(x-2)^2 + y^2 + 6 = 0$.

This is still impossible. The error is in the sign: $r + x/2 = 3$ requires $r = 3 - x/2$. For $r \ge 0$, we need $x \le 6$. But squaring introduces extraneous solutions. The equation should be written as $4y^2 + 3(x-2)^2 = 6$, giving an ellipse. Let me verify: $y^2 + 6 = -\frac{3}{4}(x-2)^2$. That gives negative. I've made a sign error somewhere.

Actually: $r = 3 - x/2$ gives $r^2 = (3-x/2)^2 = 9 - 3x + x^2/4$. And $r^2 = x^2 + y^2$. So $x^2 + y^2 = 9 - 3x + x^2/4$. $\frac{3}{4}x^2 + 3x + y^2 - 9 = 0$. (Sign of $3x$ was wrong.)

$\frac{3}{4}(x^2 + 4x + 4) + y^2 - 9 - 3 = 0$. $\frac{3}{4}(x+2)^2 + y^2 = 12$. This is an ellipse centred at $(-2, 0)$ with semi-axes $a = 4$ and $b = 2\sqrt{3}$.

(d) The directrix is $x = l/e = 3/(1/2) = 6$, i.e., $x = 6$ in Cartesian form.

### IT-3: Polar Integration Applications (with Matrices)
**Question:** A region is bounded by $r = 1 + \cos\theta$ (cardioid) and $r = 3\cos\theta$ (circle). (a) Find the intersection angles. (b) Calculate the area of the region inside the circle but outside the cardioid. (c) Calculate the area of the region inside the cardioid but outside the circle. (d) Verify that the total area equals the area of the circle.

**Solution:**

(a) $1 + \cos\theta = 3\cos\theta$. $1 = 2\cos\theta$. $\cos\theta = 1/2$. $\theta = \pm\pi/3$.

(b) Area inside circle, outside cardioid (in the region $\theta \in [-\pi/3, \pi/3]$):
$A = \frac{1}{2}\int_{-\pi/3}^{\pi/3} [(3\cos\theta)^2 - (1+\cos\theta)^2]\,d\theta$
$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (9\cos^2\theta - 1 - 2\cos\theta - \cos^2\theta)\,d\theta$
$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (8\cos^2\theta - 2\cos\theta - 1)\,d\theta$
$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (4 + 4\cos 2\theta - 2\cos\theta - 1)\,d\theta = \frac{1}{2}\int_{-\pi/3}^{\pi/3} (3 + 4\cos 2\theta - 2\cos\theta)\,d\theta$
$= \frac{1}{2}\left[3\theta + 2\sin 2\theta - 2\sin\theta\right]_{-\pi/3}^{\pi/3} = \frac{1}{2}(2\pi) = \pi$.

(c) Area inside cardioid but outside circle (the remaining part of the circle, $\theta \in [\pi/3, 5\pi/3]$ -- but the cardioid only goes to $\pi$, and for $\theta \in [\pi/3, \pi]$, the circle is $r = 3\cos\theta$ which can be negative).

Actually, the area inside the cardioid minus the overlap with the circle:
Total cardioid area $= 3\pi/2$. Total circle area $= 9\pi/4$ (from $r = 3\cos\theta$, area $= \pi(3/2)^2/2 = 9\pi/8$... wait, area of circle $r = a\cos\theta$: $A = \frac{1}{2}\int_{-\pi/2}^{\pi/2} a^2\cos^2\theta\,d\theta = \frac{\pi a^2}{4}$).

For $a = 3$: circle area $= 9\pi/4$.

Area inside cardioid, outside circle: $3\pi/2 - \pi = \pi/2$.

(d) Total: overlap ($\pi$) + inside cardioid outside circle ($\pi/2$) $= 3\pi/2$ (cardioid area). The circle area is $9\pi/4 = 2.25\pi$ and cardioid area is $1.5\pi$. The circle area exceeds the cardioid area, so the overlap plus outside-cardioid-in-circle should equal $9\pi/4$. Outside cardioid, inside circle $= 9\pi/4 - \pi = 5\pi/4$.
