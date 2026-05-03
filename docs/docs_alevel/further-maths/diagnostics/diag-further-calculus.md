---
title: "Further Calculus -- Diagnostic Tests"
description: "A-Level Further Maths diagnostic tests for further calculus: improper integrals, volumes of revolution, parametric differentiation, arc length."
slug: diag-further-calculus
hide_table_of_contents: true
---

# Further Calculus — Diagnostic Tests

## Unit Tests

### UT-1: Improper Integrals
**Question:** (a) Evaluate $\int_1^{\infty} \frac{1}{x^2}\,dx$. (b) Determine whether $\int_1^{\infty} \frac{1}{x}\,dx$ converges or diverges. (c) Evaluate $\int_0^1 \frac{1}{\sqrt{x}}\,dx$. (d) Explain the difference between a convergent and divergent improper integral.

**Solution:**

(a) $\int_1^{\infty} \frac{1}{x^2}\,dx = \lim_{b \to \infty}\left[-\frac{1}{x}\right]_1^b = \lim_{b \to \infty}\left(-\frac{1}{b} + 1\right) = 0 + 1 = 1$. Converges to 1.

(b) $\int_1^{\infty} \frac{1}{x}\,dx = \lim_{b \to \infty}[\ln x]_1^b = \lim_{b \to \infty}(\ln b - 0) = \infty$. **Diverges**.

(c) $\int_0^1 \frac{1}{\sqrt{x}}\,dx = \lim_{a \to 0^+}[2\sqrt{x}]_a^1 = \lim_{a \to 0^+}(2 - 2\sqrt{a}) = 2 - 0 = 2$. Converges to 2.

(d) A **convergent** improper integral has a finite value -- the limit exists and equals a real number. A **divergent** improper integral approaches infinity (or does not approach a limit), meaning the area under the curve is infinite.

### UT-2: Volumes of Revolution
**Question:** (a) Find the volume generated when the curve $y = \sqrt{x}$ is rotated $2\pi$ radians about the $x$-axis between $x = 0$ and $x = 4$. (b) Find the volume generated when $x = y^2$ (for $y \ge 0$) is rotated about the $y$-axis between $y = 0$ and $y = 2$. (c) The region bounded by $y = x^2$, $y = 0$, and $x = 1$ is rotated about the $y$-axis. Calculate the volume using the shell method: $V = 2\pi\int_a^b xy\,dx$.

**Solution:**

(a) $V = \pi\int_0^4 y^2\,dx = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = \pi \times 8 = 8\pi$.

(b) $V = \pi\int_0^2 x^2\,dy = \pi\int_0^2 y^4\,dy = \pi\left[\frac{y^5}{5}\right]_0^2 = \pi \times \frac{32}{5} = \frac{32\pi}{5}$.

(c) $V = 2\pi\int_0^1 x \cdot x^2\,dx = 2\pi\int_0^1 x^3\,dx = 2\pi\left[\frac{x^4}{4}\right]_0^1 = 2\pi \times \frac{1}{4} = \frac{\pi}{2}$.

### UT-3: Parametric Differentiation
**Question:** A curve is given parametrically by $x = t^2 + 1$, $y = t^3 - t$. (a) Find $\frac{dy}{dx}$ in terms of $t$. (b) Find the coordinates of the stationary points. (c) Find $\frac{d^2y}{dx^2}$ and determine the nature of each stationary point. (d) Find the equation of the normal to the curve at the point where $t = 2$.

**Solution:**

(a) $\frac{dx}{dt} = 2t$, $\frac{dy}{dt} = 3t^2 - 1$. $\frac{dy}{dx} = \frac{3t^2 - 1}{2t}$.

(b) Stationary points: $\frac{dy}{dx} = 0$, so $3t^2 - 1 = 0$, $t = \pm\frac{1}{\sqrt{3}}$.

$t = \frac{1}{\sqrt{3}}$: $x = \frac{4}{3}$, $y = \frac{1}{3\sqrt{3}} - \frac{1}{\sqrt{3}} = -\frac{2}{3\sqrt{3}}$.
$t = -\frac{1}{\sqrt{3}}$: $x = \frac{4}{3}$, $y = -\frac{1}{3\sqrt{3}} + \frac{1}{\sqrt{3}} = \frac{2}{3\sqrt{3}}$.

(c) $\frac{d^2y}{dx^2} = \frac{d}{dt}\left(\frac{3t^2-1}{2t}\right) \Big/ \frac{dx}{dt} = \frac{6t \cdot 2t - (3t^2-1) \cdot 2}{4t^2} \Big/ 2t = \frac{12t^2 - 6t^2 + 2}{4t^2} \cdot \frac{1}{2t} = \frac{6t^2 + 2}{8t^3}$.

At $t = \frac{1}{\sqrt{3}}$: $\frac{d^2y}{dx^2} = \frac{6/3 + 2}{8/(3\sqrt{3})} = \frac{4}{8/(3\sqrt{3})} = \frac{12\sqrt{3}}{8} = \frac{3\sqrt{3}}{2} \gt 0$: **minimum**.

At $t = -\frac{1}{\sqrt{3}}$: $\frac{d^2y}{dx^2} = \frac{6/3 + 2}{8/(-3\sqrt{3})} = -\frac{3\sqrt{3}}{2} \lt 0$: **maximum**.

(d) At $t = 2$: $x = 5$, $y = 6$. $\frac{dy}{dx} = \frac{12-1}{4} = \frac{11}{4}$.

Normal gradient $= -\frac{4}{11}$. Equation: $y - 6 = -\frac{4}{11}(x - 5)$, i.e., $11y - 66 = -4x + 20$, so $4x + 11y = 86$.

---

## Integration Tests

### IT-1: Calculus in Context (with Differential Equations)
**Question:** A population grows according to $\frac{dP}{dt} = kP(1000 - P)$ where $P$ is the population and $k = 0.001$. Initial population $P(0) = 100$. (a) Identify the type of differential equation. (b) Solve by separating variables. (c) Find $P$ when $t = 5$. (d) Describe the long-term behaviour of the population.

**Solution:**

(a) This is a **separable first-order differential equation** and a **logistic growth equation**.

(b) $\frac{dP}{P(1000-P)} = 0.001\,dt$. Using partial fractions: $\frac{1}{P(1000-P)} = \frac{1/1000}{P} + \frac{1/1000}{1000-P}$.

$\frac{1}{1000}\ln\left|\frac{P}{1000-P}\right| = 0.001t + C$. $\ln\left|\frac{P}{1000-P}\right| = t + C'$.

$\frac{P}{1000-P} = Ae^t$. At $t = 0$: $\frac{100}{900} = A$, so $A = 1/9$.

$\frac{P}{1000-P} = \frac{e^t}{9}$. $P = \frac{1000e^t}{9 + e^t}$.

(c) $P(5) = \frac{1000e^5}{9 + e^5} = \frac{1000(148.4)}{157.4} = 942.8$.

(d) As $t \to \infty$: $P \to 1000$. The population approaches the **carrying capacity** of 1000. The growth is initially approximately exponential when $P$ is small, but slows as $P$ approaches 1000.

### IT-2: Integration Techniques (with Maclaurin Series)
**Question:** (a) Evaluate $\int_0^{\pi/2} x\sin x\,dx$ using integration by parts. (b) Use the Maclaurin series for $e^x$ to evaluate $\int_0^{0.1} e^{-x^2}\,dx$ correct to 4 decimal places. (c) Evaluate $\int \frac{1}{x^2 - 9}\,dx$ using partial fractions. (d) Evaluate $\int_0^{\infty} xe^{-x}\,dx$.

**Solution:**

(a) $u = x$, $dv = \sin x\,dx$. $du = dx$, $v = -\cos x$.
$\int_0^{\pi/2} x\sin x\,dx = [-x\cos x]_0^{\pi/2} + \int_0^{\pi/2} \cos x\,dx = 0 + [\sin x]_0^{\pi/2} = 1$.

(b) $e^{-x^2} = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \cdots$
$\int_0^{0.1} e^{-x^2}\,dx = \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42}\right]_0^{0.1}$
$= 0.1 - \frac{0.001}{3} + \frac{0.00001}{10} - \frac{0.0000001}{42}$
$= 0.1 - 0.000333 + 0.000001 - 0.0000000024 = 0.099668 \approx 0.0997$.

(c) $\frac{1}{x^2 - 9} = \frac{1}{(x-3)(x+3)} = \frac{1/6}{x-3} - \frac{1/6}{x+3}$.
$\int = \frac{1}{6}\ln|x-3| - \frac{1}{6}\ln|x+3| + C = \frac{1}{6}\ln\left|\frac{x-3}{x+3}\right| + C$.

(d) Integration by parts: $u = x$, $dv = e^{-x}\,dx$. $du = dx$, $v = -e^{-x}$.
$\int_0^{\infty} xe^{-x}\,dx = [-xe^{-x}]_0^{\infty} + \int_0^{\infty} e^{-x}\,dx = 0 + [-e^{-x}]_0^{\infty} = 0 + 1 = 1$.

(This is the gamma function $\Gamma(2) = 1! = 1$.)

### IT-3: Arc Length and Surface Area (with Geometry)
**Question:** (a) Find the arc length of the curve $y = \frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 3$. (b) Find the surface area generated when this curve is rotated about the $x$-axis. (c) A curve is given by $x = 2\cos\theta$, $y = 2\sin\theta$. Find the arc length for one complete revolution ($0 \le \theta \le 2\pi$). (d) Explain why the arc length formula involves $\sqrt{1 + \left(\frac{dy}{dx}\right)^2}$.

**Solution:**

(a) Arc length $s = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$. $\frac{dy}{dx} = x^{1/2}$.
$s = \int_0^3 \sqrt{1 + x}\,dx = \left[\frac{2}{3}(1+x)^{3/2}\right]_0^3 = \frac{2}{3}(8 - 1) = \frac{14}{3}$.

(b) Surface area $= 2\pi\int_0^3 y\sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx = 2\pi\int_0^3 \frac{2}{3}x^{3/2}\sqrt{1+x}\,dx$.

Let $u = 1 + x$, $du = dx$, $x = u - 1$: $= \frac{4\pi}{3}\int_1^4 (u-1)^{3/2}u^{1/2}\,du$.

This integral requires expanding $(u-1)^{3/2} = u^{3/2} - 3u^{1/2} + 3u^{-1/2} - u^{-3/2}$, then multiplying by $u^{1/2}$ and integrating term by term.

$= \frac{4\pi}{3}\int_1^4 (u^2 - 3u + 3 - u^{-1})\,du = \frac{4\pi}{3}\left[\frac{u^3}{3} - \frac{3u^2}{2} + 3u - \ln u\right]_1^4$

$= \frac{4\pi}{3}\left[\left(\frac{64}{3} - 24 + 12 - \ln 4\right) - \left(\frac{1}{3} - \frac{3}{2} + 3 - 0\right)\right] = \frac{4\pi}{3}\left(\frac{63}{3} - 12 + 9 - \frac{3}{2} - \ln 4\right)$

$= \frac{4\pi}{3}(21 - 12 + 9 - 1.5 - 1.386) = \frac{4\pi}{3}(15.114) = 63.3$.

(c) $\frac{dx}{d\theta} = -2\sin\theta$, $\frac{dy}{d\theta} = 2\cos\theta$. $\sqrt{(-2\sin\theta)^2 + (2\cos\theta)^2} = \sqrt{4} = 2$.
$s = \int_0^{2\pi} 2\,d\theta = 4\pi$. This is a circle of radius 2, so circumference $= 2\pi(2) = 4\pi$.

(d) The formula comes from approximating the curve by many small line segments of length $\Delta s = \sqrt{(\Delta x)^2 + (\Delta y)^2}$. Dividing by $\Delta x$: $\Delta s = \sqrt{1 + \left(\frac{\Delta y}{\Delta x}\right)^2}\Delta x$. In the limit as $\Delta x \to 0$: $ds = \sqrt{1 + (dy/dx)^2}\,dx$. Integrating gives the total arc length.
