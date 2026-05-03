---
title: Numerical Methods — Diagnostic Tests
description: Hard diagnostic tests for numerical methods covering Newton-Raphson divergence, fixed-point iteration convergence, bisection method, trapezium rule accuracy, and error bounds at A-Level standard.
slug: diag-numerical-methods
hide_table_of_contents: true
---

# Numerical Methods — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for numerical methods.

### UT-1: Newton-Raphson Divergence Near a Turning Point

**Question:**

The function $f(x) = x^3 - 2x + 2$ has a root near $x = -1.77$.

**(a)** Show that $f(x) = 0$ has exactly one real root.

**(b)** Apply the Newton-Raphson formula with initial value $x_0 = 0$. Compute $x_1$, $x_2$, and $x_3$. Describe the behaviour of the iteration.

**(c)** Explain why the iteration fails to converge, referring to the value of $f'(x_0)$ and the geometry of the Newton-Raphson method.

**(d)** Find a value of $x_0$ for which the Newton-Raphson method does converge to the root.

[Difficulty: hard. Tests the classic failure case of Newton-Raphson where the initial value is near a point where the derivative is small, causing the tangent to project far from the root.]

**Solution:**

**(a)** $f'(x) = 3x^2 - 2 = 0$ gives $x = \pm\sqrt{2/3} \approx \pm 0.816$.

$f\!\left(-\sqrt{2/3}\right) = -\frac{2\sqrt{6}}{9} + \frac{2\sqrt{6}}{3} + 2 = \frac{4\sqrt{6}}{9} + 2 \approx 3.09$ (local maximum).

$f\!\left(\sqrt{2/3}\right) = \frac{2\sqrt{6}}{9} - \frac{2\sqrt{6}}{3} + 2 = -\frac{4\sqrt{6}}{9} + 2 \approx 0.91$ (local minimum).

Since the local minimum is positive ($\approx 0.91$), the graph crosses the $x$-axis only once (to the left of the local maximum, where $f$ goes from $-\infty$ to the maximum). So there is exactly one real root.

**(b)** $f'(x) = 3x^2 - 2$. Newton-Raphson: $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$.

$x_0 = 0$: $f(0) = 2$, $f'(0) = -2$.

$$x_1 = 0 - \frac{2}{-2} = 1$$

$x_1 = 1$: $f(1) = 1$, $f'(1) = 1$.

$$x_2 = 1 - \frac{1}{1} = 0$$

$x_2 = 0$: $f(0) = 2$, $f'(0) = -2$.

$$x_3 = 0 - \frac{2}{-2} = 1$$

The iteration cycles: $0, 1, 0, 1, 0, 1, \ldots$

**(c)** The iteration fails because at $x_0 = 0$, the tangent to the curve has gradient $f'(0) = -2$, which points towards $x = 1$ rather than towards the root at $x \approx -1.77$. The Newton-Raphson method overshoots dramatically because the tangent at $x = 0$ intersects the $x$-axis at $x = 1$, which is on the opposite side of the local minimum. The iteration then gets trapped in a 2-cycle between $x = 0$ and $x = 1$.

More precisely, the problem is that $f'(0) \neq 0$ but the initial guess is far from the root relative to the curvature of the function. The function has a local minimum at $x \approx 0.816$ with $f \approx 0.91 \gt 0$, creating a barrier that the iteration cannot cross.

**(d)** Any $x_0 \lt -\sqrt{2/3} \approx -0.816$ will converge, since on this interval $f$ is strictly decreasing (and hence $f$ and $f'$ have useful properties for convergence).

For example, $x_0 = -2$: $f(-2) = -2$, $f'(-2) = 10$.

$$x_1 = -2 - \frac{-2}{10} = -2 + 0.2 = -1.8$$

$$x_2 = -1.8 - \frac{-1.8^3 + 3.6 + 2}{3(3.24)-2} = -1.8 - \frac{-5.832 + 5.6}{7.72} = -1.8 + \frac{0.232}{7.72} \approx -1.770$$

This converges rapidly to the root.

---

### UT-2: Fixed-Point Iteration Convergence Criterion

**Question:**

The equation $x = g(x)$ is to be solved by fixed-point iteration $x_{n+1} = g(x_n)$, where $g(x) = \frac{1}{2}(x + \frac{3}{x})$.

**(a)** Show that the equation $x = g(x)$ is equivalent to $x^2 = 3$, and hence state the positive root $\alpha$.

**(b)** Compute $x_1$, $x_2$, $x_3$ starting from $x_0 = 2$.

**(c)** Verify the convergence criterion $\lvert g'(\alpha) \rvert \lt 1$ at the root.

**(d)** A student proposes the rearrangement $x = x^2 - 3 + x$ (i.e. $g(x) = x^2 - 3 + x$) to solve $x^2 = 3$. Show that this iteration diverges when $x_0 = 2$, and explain why by evaluating $\lvert g'(\sqrt{3}) \rvert$.

[Difficulty: hard. Tests the fixed-point iteration convergence theorem and the dependence of convergence on the choice of rearrangement.]

**Solution:**

**(a)** $x = \frac{1}{2}(x + \frac{3}{x}) \implies 2x = x + \frac{3}{x} \implies x = \frac{3}{x} \implies x^2 = 3$.

Positive root: $\alpha = \sqrt{3}$.

**(b)** $x_0 = 2$:

$$x_1 = \frac{1}{2}\left(2 + \frac{3}{2}\right) = \frac{7}{4} = 1.75$$

$$x_2 = \frac{1}{2}\left(\frac{7}{4} + \frac{3 \times 4}{7}\right) = \frac{1}{2}\left(\frac{7}{4} + \frac{12}{7}\right) = \frac{1}{2} \cdot \frac{49 + 48}{28} = \frac{97}{56} \approx 1.73214$$

$$x_3 = \frac{1}{2}\left(\frac{97}{56} + \frac{3 \times 56}{97}\right) = \frac{1}{2}\left(\frac{97}{56} + \frac{168}{97}\right) = \frac{1}{2} \cdot \frac{9409 + 9408}{5432} = \frac{18817}{10864} \approx 1.73205$$

The iteration converges rapidly to $\sqrt{3} \approx 1.73205$.

**(c)** $g'(x) = \frac{1}{2}\left(1 - \frac{3}{x^2}\right)$.

At $x = \alpha = \sqrt{3}$: $g'(\sqrt{3}) = \frac{1}{2}(1 - 1) = 0$.

Since $\lvert g'(\sqrt{3}) \rvert = 0 \lt 1$, the fixed-point iteration converges (with quadratic convergence, since $g'(\alpha) = 0$).

**(d)** $g(x) = x^2 - 3 + x$. $g'(x) = 2x + 1$.

At $x = \sqrt{3}$: $g'(\sqrt{3}) = 2\sqrt{3} + 1 \approx 4.464$.

Since $\lvert g'(\sqrt{3}) \rvert \approx 4.464 \gt 1$, the fixed-point theorem tells us this iteration diverges near the root.

Verification with $x_0 = 2$:

$$x_1 = 4 - 3 + 2 = 3$$

$$x_2 = 9 - 3 + 3 = 9$$

$$x_3 = 81 - 3 + 9 = 87$$

Clearly diverging.

---

### UT-3: Trapezium Rule — Overestimate vs Underestimate

**Question:**

**(a)** Use the trapezium rule with 4 strips to estimate $\int_0^2 \sqrt{x}\, dx$, giving your answer to 4 decimal places.

**(b)** Determine whether your estimate is an overestimate or underestimate, justifying your answer by examining the concavity of $f(x) = \sqrt{x}$.

**(c)** The exact value of the integral is $\frac{4\sqrt{2}}{3}$. Calculate the percentage error of the trapezium rule estimate.

**(d)** How many strips would be needed to guarantee that the trapezium rule estimate of $\int_0^2 \sqrt{x}\, dx$ is within $0.001$ of the exact value? (The error bound for the trapezium rule with $n$ strips on $[a, b]$ is $\frac{(b-a)^3}{12n^2}\max_{[a,b]}\lvert f''(x) \rvert$.)

[Difficulty: hard. Tests the trapezium rule with concavity analysis for error direction, and the error bound formula for determining required strip count.]

**Solution:**

**(a)** $n = 4$ strips, width $h = \frac{2-0}{4} = 0.5$.

| $x$ | 0 | 0.5 | 1 | 1.5 | 2 |
|-----|---|-----|---|-----|---|
| $y = \sqrt{x}$ | 0 | $\frac{1}{\sqrt{2}} \approx 0.7071$ | 1 | $\sqrt{1.5} \approx 1.2247$ | $\sqrt{2} \approx 1.4142$ |

$$T_4 = \frac{0.5}{2}\left[0 + 2(0.7071 + 1 + 1.2247) + 1.4142\right]$$

$$= 0.25[0 + 5.8636 + 1.4142] = 0.25 \times 7.2778 = 1.8194$$

**(b)** $f(x) = x^{1/2}$. $f'(x) = \frac{1}{2}x^{-1/2}$. $f''(x) = -\frac{1}{4}x^{-3/2}$.

For $x \in (0, 2]$: $f''(x) = -\frac{1}{4}x^{-3/2} \lt 0$.

Since $f''(x) \lt 0$ on $(0, 2]$, the curve is concave down. The trapezium rule **overestimates** when the curve is concave down (the trapezia lie above the curve).

**(c)** Exact value: $\frac{4\sqrt{2}}{3} \approx 1.8856$.

$$\text{Percentage error} = \frac{\lvert 1.8194 - 1.8856 \rvert}{1.8856} \times 100\% \approx 3.51\%$$

**(d)** The error bound: $\lvert E \rvert \leq \frac{(b-a)^3}{12n^2}\max_{[a,b]}\lvert f''(x) \rvert$.

$f''(x) = -\frac{1}{4}x^{-3/2}$. On $(0, 2]$, $f''(x)$ is unbounded as $x \to 0^+$.

The maximum of $\lvert f''(x) \rvert$ on $[0, 2]$ does not exist (it diverges). The error bound formula is not directly applicable because $f''$ is unbounded at $x = 0$.

However, on the subinterval $[\epsilon, 2]$ for any $\epsilon \gt 0$: $\max \lvert f''(x) \rvert = \frac{1}{4}\epsilon^{-3/2}$.

This illustrates a limitation of the trapezium rule error bound: it requires the second derivative to be bounded, which is not the case here. For functions with singularities at endpoints, alternative methods or a change of variable are needed.

Practically, using $n = 8$ strips gives $h = 0.25$:

$T_8 = \frac{0.25}{2}[0 + 2(\sqrt{0.25} + \sqrt{0.5} + \sqrt{0.75} + 1 + \sqrt{1.25} + \sqrt{1.5} + \sqrt{1.75}) + \sqrt{2}]$

$\approx 0.125[0 + 2(0.5 + 0.7071 + 0.8660 + 1 + 1.1180 + 1.2247 + 1.3229) + 1.4142]$

$= 0.125[0 + 2 \times 6.7387 + 1.4142] = 0.125 \times 14.8916 = 1.8615$

Error: $\lvert 1.8615 - 1.8856 \rvert = 0.0241$. Still greater than $0.001$.

For practical purposes, approximately $n = 100$ strips would be needed to achieve accuracy within $0.001$ for this integral.

---

## Integration Tests

> Tests synthesis of numerical methods with other topics. Requires combining concepts from multiple units.

### IT-1: Newton-Raphson Applied to $f'(x) = 0$ (with Differentiation)

**Question:**

The function $f(x) = x^4 - 4x^3 + 8x^2 - 8x + 3$.

**(a)** Find $f'(x)$ and $f''(x)$.

**(b)** Use the Newton-Raphson method with $x_0 = 1$ to find a stationary point of $f$ to 4 decimal places. (Apply Newton-Raphson to $f'(x) = 0$.)

**(c)** Classify the stationary point you found in part (b).

**(d)** Show that $f(x) = (x-1)^4$ and hence explain why the Newton-Raphson method converges rapidly in this case.

[Difficulty: hard. Applies Newton-Raphson to the derivative function to locate stationary points, combining numerical methods with differentiation.]

**Solution:**

**(a)** $f(x) = x^4 - 4x^3 + 8x^2 - 8x + 3$.

$$f'(x) = 4x^3 - 12x^2 + 16x - 8$$

$$f''(x) = 12x^2 - 24x + 16$$

**(b)** We apply Newton-Raphson to $g(x) = f'(x) = 4x^3 - 12x^2 + 16x - 8$:

$g'(x) = f''(x) = 12x^2 - 24x + 16$.

$x_0 = 1$: $g(1) = 4 - 12 + 16 - 8 = 0$.

Since $g(1) = 0$, the Newton-Raphson formula gives $x_1 = 1 - \frac{0}{g'(1)} = 1$. The iteration has already converged.

The stationary point is at $x = 1$.

Let me check with $x_0 = 1.5$ instead:

$g(1.5) = 4(3.375) - 12(2.25) + 16(1.5) - 8 = 13.5 - 27 + 24 - 8 = 2.5$.

$g'(1.5) = 12(2.25) - 24(1.5) + 16 = 27 - 36 + 16 = 7$.

$x_1 = 1.5 - \frac{2.5}{7} \approx 1.5 - 0.357 = 1.143$.

$g(1.143) \approx 4(1.493) - 12(1.306) + 16(1.143) - 8 = 5.972 - 15.672 + 18.288 - 8 = 0.588$.

$g'(1.143) \approx 12(1.306) - 24(1.143) + 16 = 15.672 - 27.432 + 16 = 4.240$.

$x_2 = 1.143 - \frac{0.588}{4.240} \approx 1.004$.

$x_3 \approx 1.000$. Converges to $x = 1$.

**(c)** $f''(1) = 12 - 24 + 16 = 4 \gt 0$, so $x = 1$ is a local minimum.

$f(1) = 1 - 4 + 8 - 8 + 3 = 0$.

The point $(1, 0)$ is a local minimum.

**(d)** $f(x) = (x-1)^4 = x^4 - 4x^3 + 6x^2 - 4x + 1$.

But $f(x) = x^4 - 4x^3 + 8x^2 - 8x + 3 \neq (x-1)^4$.

Let me check: $(x-1)^4 = x^4 - 4x^3 + 6x^2 - 4x + 1$, while $f(x) = x^4 - 4x^3 + 8x^2 - 8x + 3$.

These are different. The question's claim is incorrect.

The actual stationary point structure: $f'(x) = 4x^3 - 12x^2 + 16x - 8 = 4(x^3 - 3x^2 + 4x - 2) = 4(x-1)(x^2 - 2x + 2)$.

$x^2 - 2x + 2 = (x-1)^2 + 1 \gt 0$ for all real $x$, so $x = 1$ is the only stationary point.

The Newton-Raphson method converges rapidly because $f'(x) = 4(x-1)((x-1)^2+1)$ has a simple root at $x = 1$ (multiplicity 1), so $g'(1) = f''(1) = 4 \neq 0$, ensuring quadratic convergence near the root.

---

### IT-2: Solving $\cos x = x$ Numerically (with Trigonometry)

**Question:**

**(a)** Show that the equation $\cos x = x$ has exactly one real root in the interval $[0, \frac{\pi}{2}]$.

**(b)** Use the fixed-point iteration $x_{n+1} = \cos x_n$ with $x_0 = 0.5$ to find the root to 5 decimal places.

**(c)** Explain why this iteration converges by examining $\lvert g'(x) \rvert$ where $g(x) = \cos x$.

**(d)** Use the Newton-Raphson method with $x_0 = 0.5$ to find the root to 5 decimal places. Compare the number of iterations required with the fixed-point method.

[Difficulty: hard. Combines the intermediate value theorem with two numerical methods, comparing their convergence rates.]

**Solution:**

**(a)** Let $h(x) = \cos x - x$. We need $h(x) = 0$.

$h(0) = 1 - 0 = 1 \gt 0$.

$h\!\left(\frac{\pi}{2}\right) = 0 - \frac{\pi}{2} \lt 0$.

By the intermediate value theorem, there is at least one root in $[0, \frac{\pi}{2}]$.

$h'(x) = -\sin x - 1 \lt 0$ for all $x$ (since $\sin x \geq 0$ on $[0, \frac{\pi}{2}]$).

Since $h$ is strictly decreasing, there is at most one root. Combined with existence, there is exactly one root.

**(b)** $x_0 = 0.5$:

$$x_1 = \cos(0.5) \approx 0.87758$$

$$x_2 = \cos(0.87758) \approx 0.63901$$

$$x_3 = \cos(0.63901) \approx 0.80269$$

$$x_4 = \cos(0.80269) \approx 0.69478$$

$$x_5 = \cos(0.69478) \approx 0.76820$$

$$x_6 = \cos(0.76820) \approx 0.71917$$

$$x_7 = \cos(0.71917) \approx 0.75236$$

$$x_8 = \cos(0.75236) \approx 0.73012$$

$$x_9 = \cos(0.73012) \approx 0.74512$$

$$x_{10} = \cos(0.74512) \approx 0.73501$$

This converges slowly (oscillating above and below the root). After approximately 25-30 iterations, $x_n \approx 0.73909$.

To 5 decimal places: $\alpha \approx 0.73909$.

**(c)** $g(x) = \cos x$, $g'(x) = -\sin x$.

At the root $\alpha \approx 0.739$: $\lvert g'(\alpha) \rvert = \lvert -\sin(0.739) \rvert \approx \sin(0.739) \approx 0.674$.

Since $\lvert g'(\alpha) \rvert \approx 0.674 \lt 1$, the fixed-point iteration converges (linearly, since $0 \lt \lvert g'(\alpha) \rvert \lt 1$).

**(d)** Newton-Raphson: $f(x) = \cos x - x$, $f'(x) = -\sin x - 1$.

$x_0 = 0.5$: $f(0.5) = \cos 0.5 - 0.5 \approx 0.37758$, $f'(0.5) = -\sin 0.5 - 1 \approx -1.47943$.

$$x_1 = 0.5 - \frac{0.37758}{-1.47943} \approx 0.5 + 0.25521 = 0.75521$$

$$x_2 = 0.75521 - \frac{\cos 0.75521 - 0.75521}{-\sin 0.75521 - 1} \approx 0.75521 - \frac{-0.02760}{-1.68560} \approx 0.75521 - 0.01637 = 0.73884$$

$$x_3 \approx 0.73884 - \frac{\cos 0.73884 - 0.73884}{-\sin 0.73884 - 1} \approx 0.73884 - \frac{0.00004}{-1.67378} \approx 0.73909$$

Newton-Raphson converges in 3 iterations to 5 decimal places, compared to approximately 25-30 iterations for fixed-point iteration. Newton-Raphson has quadratic convergence while fixed-point has linear convergence in this case.

---

### IT-3: Estimating $\int_0^1 e^{-x^2}\, dx$ Using the Trapezium Rule (with Integration)

**Question:**

The integral $\int_0^1 e^{-x^2}\, dx$ cannot be evaluated in terms of elementary functions.

**(a)** Use the trapezium rule with 4 strips to estimate $\int_0^1 e^{-x^2}\, dx$, giving your answer to 5 decimal places.

**(b)** Use the trapezium rule with 8 strips and compare. Determine whether doubling the number of strips approximately quarters the error (as predicted by the error bound).

**(c)** Determine whether the trapezium rule overestimates or underestimates this integral, by examining the concavity of $f(x) = e^{-x^2}$.

**(d)** The Maclaurin series for $e^{-x^2}$ is $1 - x^2 + \frac{x^4}{2!} - \frac{x^6}{3!} + \cdots$. Use the first four terms to estimate the integral, and compare with your trapezium rule estimate.

[Difficulty: hard. Combines the trapezium rule with series expansion to estimate a non-elementary integral, and error analysis via concavity.]

**Solution:**

**(a)** $n = 4$, $h = 0.25$.

| $x$ | 0 | 0.25 | 0.5 | 0.75 | 1 |
|-----|---|------|-----|------|---|
| $e^{-x^2}$ | 1 | $e^{-0.0625} \approx 0.93941$ | $e^{-0.25} \approx 0.77880$ | $e^{-0.5625} \approx 0.56978$ | $e^{-1} \approx 0.36788$ |

$$T_4 = \frac{0.25}{2}[1 + 2(0.93941 + 0.77880 + 0.56978) + 0.36788]$$

$$= 0.125[1 + 4.57598 + 0.36788] = 0.125 \times 5.94386 = 0.74298$$

**(b)** $n = 8$, $h = 0.125$.

| $x$ | 0 | 0.125 | 0.25 | 0.375 | 0.5 | 0.625 | 0.75 | 0.875 | 1 |
|-----|---|-------|------|-------|-----|-------|------|-------|---|
| $e^{-x^2}$ | 1 | 0.98450 | 0.93941 | 0.86936 | 0.77880 | 0.67706 | 0.56978 | 0.46353 | 0.36788 |

$$T_8 = \frac{0.125}{2}[1 + 2(0.98450 + 0.93941 + 0.86936 + 0.77880 + 0.67706 + 0.56978 + 0.46353) + 0.36788]$$

$$= 0.0625[1 + 2 \times 5.28244 + 0.36788] = 0.0625[1 + 10.56488 + 0.36788] = 0.0625 \times 11.93276 = 0.74580$$

The exact value (to 5 d.p.) is $\int_0^1 e^{-x^2}\, dx \approx 0.74682$.

Error with $T_4$: $\lvert 0.74298 - 0.74682 \rvert = 0.00384$.

Error with $T_8$: $\lvert 0.74580 - 0.74682 \rvert = 0.00102$.

Ratio: $0.00384 / 0.00102 \approx 3.76 \approx 4$. This confirms that doubling the strips approximately quarters the error.

**(c)** $f(x) = e^{-x^2}$.

$f'(x) = -2xe^{-x^2}$.

$f''(x) = -2e^{-x^2} + 4x^2 e^{-x^2} = e^{-x^2}(4x^2 - 2)$.

$f''(x) = 0$ when $4x^2 = 2$, i.e. $x = \frac{1}{\sqrt{2}} \approx 0.707$.

For $0 \leq x \lt \frac{1}{\sqrt{2}}$: $4x^2 - 2 \lt 0$, so $f''(x) \lt 0$ (concave down).

For $\frac{1}{\sqrt{2}} \lt x \leq 1$: $4x^2 - 2 \gt 0$, so $f''(x) \gt 0$ (concave up).

Since the concavity changes within the interval, the trapezium rule will overestimate on the concave-down portion and underestimate on the concave-up portion. The net effect depends on the relative magnitudes. In this case, the trapezium rule underestimates overall (both $T_4$ and $T_8$ are below the exact value).

**(d)** Using the first four terms of the Maclaurin series:

$$\int_0^1 \left(1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6}\right) dx = \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42}\right]_0^1$$

$$= 1 - \frac{1}{3} + \frac{1}{10} - \frac{1}{42} = \frac{210 - 70 + 21 - 5}{210} = \frac{156}{210} = \frac{26}{35} \approx 0.74286$$

Comparison:
- Series estimate (4 terms): $0.74286$
- Trapezium rule ($T_4$): $0.74298$
- Exact: $0.74682$

The series estimate and $T_4$ are very close, both underestimating by approximately $0.004$.
