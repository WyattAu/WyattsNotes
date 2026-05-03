---
title: "Integration -- Diagnostic Tests"
description: Hard diagnostic tests for integration covering integration by parts selection, substitution limit errors, absolute value traps, and area calculation pitfalls at A-Level standard.
slug: diag-integration
hide_table_of_contents: true
---

# Integration — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for integration.

### UT-1: Integration by Parts — Choosing $u$ and $\frac{dv}{dx}$ Correctly

**Question:**

**(a)** Find $\int x^3 \ln x\, dx$.

**(b)** A student chooses $u = x^3$ and $\frac{dv}{dx} = \ln x$ for integration by parts. Explain why this choice is problematic, and show what happens if the student persists with it.

**(c)** Using your result from part (a), evaluate $\int_1^e x^3 \ln x\, dx$ exactly.

[Difficulty: hard. Tests the LIATE priority rule for integration by parts, and the consequences of choosing the wrong assignment.]

**Solution:**

**(a)** By LIATE (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential), $\ln x$ is prioritised for $u$.

Set $u = \ln x$, $\frac{dv}{dx} = x^3$.

$du = \frac{1}{x}\, dx$, $v = \frac{x^4}{4}$.

$$\int x^3 \ln x\, dx = \frac{x^4}{4}\ln x - \int \frac{x^4}{4} \cdot \frac{1}{x}\, dx$$

$$= \frac{x^4}{4}\ln x - \frac{1}{4}\int x^3\, dx$$

$$= \frac{x^4}{4}\ln x - \frac{x^4}{16} + C$$

$$= \frac{x^4}{16}(4\ln x - 1) + C$$

**(b)** If the student chooses $u = x^3$ and $\frac{dv}{dx} = \ln x$:

$du = 3x^2\, dx$, but $v = \int \ln x\, dx = x\ln x - x$ (which itself requires integration by parts to find).

Then:

$$\int x^3 \ln x\, dx = x^3(x\ln x - x) - \int 3x^2(x\ln x - x)\, dx$$

$$= x^4\ln x - x^4 - 3\int x^3\ln x\, dx + 3\int x^3\, dx$$

$$= x^4\ln x - x^4 - 3\int x^3\ln x\, dx + \frac{3x^4}{4}$$

This produces an equation involving the original integral:

$$\int x^3\ln x\, dx = x^4\ln x - \frac{x^4}{4} - 3\int x^3\ln x\, dx$$

$$4\int x^3\ln x\, dx = x^4\ln x - \frac{x^4}{4}$$

$$\int x^3\ln x\, dx = \frac{x^4}{4}\ln x - \frac{x^4}{16}$$

This eventually works but requires more steps and an additional integration by parts just to find $v$. The LIATE choice is more efficient.

**(c)** $\int_1^e x^3\ln x\, dx = \left[\frac{x^4}{16}(4\ln x - 1)\right]_1^e$

At $x = e$: $\frac{e^4}{16}(4 - 1) = \frac{3e^4}{16}$

At $x = 1$: $\frac{1}{16}(0 - 1) = -\frac{1}{16}$

$$= \frac{3e^4}{16} - \left(-\frac{1}{16}\right) = \frac{3e^4 + 1}{16}$$

---

### UT-2: Forgetting to Change Limits in Definite Integration by Substitution

**Question:**

**(a)** Evaluate $\int_0^1 x\sqrt{1 + x^2}\, dx$ using the substitution $u = 1 + x^2$.

**(b)** A student uses the substitution $u = 1 + x^2$ but forgets to change the limits. The student computes the indefinite integral, then substitutes $x = 0$ and $x = 1$ back into the $x$-expression. Show that this approach gives the correct answer, and explain why this works in this particular case.

**(c)** A second student evaluates $\int_0^{\frac{\pi}{2}} x\cos x\, dx$ by integration by parts and obtains $x\sin x + \cos x + C$. They then write $\int_0^{\frac{\pi}{2}} x\cos x\, dx = \left[\frac{\pi}{2}\sin\frac{\pi}{2} + \cos\frac{\pi}{2}\right] - [0 + \cos 0] = \frac{\pi}{2} - 1$. A third student forgets to evaluate the lower limit and writes only $\frac{\pi}{2} + 0 = \frac{\pi}{2}$. What percentage error does the third student make?

[Difficulty: hard. Tests the boundary between when forgetting to change limits produces errors versus when back-substitution rescues the answer, and lower-limit negligence.]

**Solution:**

**(a)** $u = 1 + x^2$, $du = 2x\, dx$, so $x\, dx = \frac{1}{2}\, du$.

When $x = 0$: $u = 1$. When $x = 1$: $u = 2$.

$$\int_0^1 x\sqrt{1+x^2}\, dx = \int_1^2 \sqrt{u} \cdot \frac{1}{2}\, du = \frac{1}{2}\int_1^2 u^{1/2}\, du$$

$$= \frac{1}{2}\left[\frac{2}{3}u^{3/2}\right]_1^2 = \frac{1}{3}(2^{3/2} - 1) = \frac{1}{3}(2\sqrt{2} - 1)$$

**(b)** The indefinite integral (back-substituted) is:

$$\frac{1}{3}(1+x^2)^{3/2} + C$$

Evaluating from $x = 0$ to $x = 1$:

$$\frac{1}{3}(2^{3/2}) - \frac{1}{3}(1^{3/2}) = \frac{2\sqrt{2} - 1}{3}$$

This gives the same answer as part (a). Back-substitution always works because it restores the original variable, and the Fundamental Theorem of Calculus applies regardless of which variable is used. The error of forgetting limits occurs only when the student evaluates in $u$-space with the original $x$-limits (e.g., evaluating $\frac{1}{3}u^{3/2}$ from $u = 0$ to $u = 1$, which is wrong).

**(c)** Correct answer: $\frac{\pi}{2} - 1 \approx 0.5708$.

Third student's answer: $\frac{\pi}{2} \approx 1.5708$.

$$\text{Percentage error} = \frac{\lvert\frac{\pi}{2} - (\frac{\pi}{2} - 1)\rvert}{\lvert\frac{\pi}{2} - 1\rvert} \times 100\% = \frac{1}{\frac{\pi}{2} - 1} \times 100\% \approx 175.2\%$$

The third student's answer is $175.2\%$ too large — a catastrophic error from omitting a single term.

---

### UT-3: Absolute Value in $\int \frac{1}{x}\, dx = \ln\lvert x \rvert$

**Question:**

**(a)** Evaluate $\int_{-2}^{-1} \frac{2}{x}\, dx$.

**(b)** A student writes $\int_{-2}^{-1} \frac{2}{x}\, dx = [2\ln x]_{-2}^{-1}$ and concludes the integral is undefined. Explain the error and find the correct value.

**(c)** Evaluate $\int_{-3}^{3} \frac{x}{x^2 + 1}\, dx$.

**(d)** Evaluate $\int_{-1}^{1} \frac{1}{x}\, dx$ or show that it does not exist.

[Difficulty: hard. Tests the absolute value in the antiderivative of $\frac{1}{x}$, and the improper integral when the integrand has a singularity within the interval.]

**Solution:**

**(a)** $\int_{-2}^{-1} \frac{2}{x}\, dx = 2\int_{-2}^{-1} \frac{1}{x}\, dx = 2[\ln\lvert x \rvert]_{-2}^{-1} = 2(\ln 1 - \ln 2) = -2\ln 2$.

The result is negative because the integrand $\frac{2}{x}$ is negative on $[-2, -1]$ (since $x \lt 0$).

**(b)** The student writes $\ln x$ instead of $\ln\lvert x \rvert$. Since $x$ is negative in this interval, $\ln x$ is undefined. The correct antiderivative is $\ln\lvert x \rvert$, which is defined for $x \neq 0$.

The correct answer is $-2\ln 2$, as computed in part (a).

**(c)** Note that $f(x) = \frac{x}{x^2+1}$ is an odd function: $f(-x) = \frac{-x}{x^2+1} = -f(x)$.

Since the integral of an odd function over $[-a, a]$ is zero:

$$\int_{-3}^{3} \frac{x}{x^2+1}\, dx = 0$$

Verification: $\int \frac{x}{x^2+1}\, dx = \frac{1}{2}\ln(x^2+1) + C$. Evaluating from $-3$ to $3$:

$$\frac{1}{2}(\ln 10 - \ln 10) = 0$$

**(d)** $\int_{-1}^{1} \frac{1}{x}\, dx$ has a singularity at $x = 0$. We must split:

$$\int_{-1}^{1} \frac{1}{x}\, dx = \lim_{a \to 0^-}\int_{-1}^{a}\frac{1}{x}\, dx + \lim_{b \to 0^+}\int_{b}^{1}\frac{1}{x}\, dx$$

$$= \lim_{a \to 0^-}[\ln\lvert x \rvert]_{-1}^{a} + \lim_{b \to 0^+}[\ln\lvert x \rvert]_{b}^{1}$$

$$= \lim_{a \to 0^-}(\ln\lvert a \rvert - \ln 1) + \lim_{b \to 0^+}(\ln 1 - \ln\lvert b \rvert)$$

$$= \lim_{a \to 0^-}\ln\lvert a \rvert + \lim_{b \to 0^+}(-\ln\lvert b \rvert)$$

$$= -\infty + \infty$$

This is an indeterminate form. The integral does not converge; it is an improper integral that diverges. The answer is that $\int_{-1}^{1} \frac{1}{x}\, dx$ does not exist.

A student who writes $[\ln\lvert x \rvert]_{-1}^1 = 0 - 0 = 0$ is making a serious error by applying the Fundamental Theorem of Calculus across a singularity.

---

## Integration Tests

> Tests synthesis of integration with other topics. Requires combining concepts from multiple units.

### IT-1: Velocity Vector Integration for Displacement and Distance (with Vectors)

**Question:**

A particle moves in a plane with velocity vector $\mathbf{v} = (t^2 - 2t)\mathbf{i} + 2t\,\mathbf{j}$ m/s, where $t \geq 0$.

**(a)** Find the displacement of the particle from $t = 0$ to $t = 3$.

**(b)** Find the total distance travelled by the particle from $t = 0$ to $t = 3$.

[Difficulty: hard. Requires integrating a velocity vector component-by-component for displacement, and recognising that distance requires integrating the magnitude of velocity (not the velocity components).]

**Solution:**

**(a)** Displacement $= \int_0^3 \mathbf{v}\, dt$.

$$\int_0^3 (t^2 - 2t)\, dt = \left[\frac{t^3}{3} - t^2\right]_0^3 = 9 - 9 - 0 = 0$$

$$\int_0^3 2t\, dt = [t^2]_0^3 = 9$$

Displacement $= 0\mathbf{i} + 9\mathbf{j} = 9\mathbf{j}$ metres.

**(b)** Distance travelled $= \int_0^3 \lvert\mathbf{v}\rvert\, dt = \int_0^3 \sqrt{(t^2-2t)^2 + (2t)^2}\, dt$

$$= \int_0^3 \sqrt{t^4 - 4t^3 + 4t^2 + 4t^2}\, dt = \int_0^3 \sqrt{t^4 - 4t^3 + 8t^2}\, dt$$

$$= \int_0^3 t\sqrt{t^2 - 4t + 8}\, dt$$

Completing the square: $t^2 - 4t + 8 = (t-2)^2 + 4$.

Use the substitution $u = t^2 - 4t + 8$, $du = (2t - 4)\, dt$.

Then $t\, dt = \frac{du + 4\, dt}{2}$, which is not directly useful. Instead, write:

$$\int_0^3 t\sqrt{(t-2)^2 + 4}\, dt$$

Let $w = t - 2$, so $t = w + 2$, $dt = dw$. When $t = 0$: $w = -2$. When $t = 3$: $w = 1$.

$$= \int_{-2}^{1} (w+2)\sqrt{w^2 + 4}\, dw = \int_{-2}^{1} w\sqrt{w^2+4}\, dw + 2\int_{-2}^{1}\sqrt{w^2+4}\, dw$$

First integral: substitute $u = w^2 + 4$, $du = 2w\, dw$.

$$\int_{-2}^{1} w\sqrt{w^2+4}\, dw = \frac{1}{2}\int_{8}^{5}\sqrt{u}\, du = \frac{1}{2}\left[\frac{2}{3}u^{3/2}\right]_8^5 = \frac{1}{3}(5\sqrt{5} - 16\sqrt{2})$$

Second integral: $\int\sqrt{w^2 + 4}\, dw$. Using the standard formula $\int\sqrt{w^2+a^2}\, dw = \frac{w}{2}\sqrt{w^2+a^2} + \frac{a^2}{2}\ln(w+\sqrt{w^2+a^2}) + C$ with $a = 2$:

$$= \left[\frac{w}{2}\sqrt{w^2+4} + 2\ln(w + \sqrt{w^2+4})\right]_{-2}^{1}$$

At $w = 1$: $\frac{1}{2}\sqrt{5} + 2\ln(1+\sqrt{5})$

At $w = -2$: $0 + 2\ln(-2+\sqrt{8}) = 2\ln(2\sqrt{2}-2)$

$$2\left[\frac{\sqrt{5}}{2} + 2\ln(1+\sqrt{5}) - 2\ln(2\sqrt{2}-2)\right] = \sqrt{5} + 4\ln\!\left(\frac{1+\sqrt{5}}{2\sqrt{2}-2}\right)$$

Total distance $= \frac{1}{3}(5\sqrt{5} - 16\sqrt{2}) + \sqrt{5} + 4\ln\!\left(\frac{1+\sqrt{5}}{2\sqrt{2}-2}\right)$

$$= \frac{8\sqrt{5}}{3} - \frac{16\sqrt{2}}{3} + 4\ln\!\left(\frac{1+\sqrt{5}}{2\sqrt{2}-2}\right)$$

---

### IT-2: Integrating $\sin^2 x$ Using the Double Angle Identity (with Trigonometry)

**Question:**

**(a)** Find $\int \sin^2 x\, dx$ using the double angle identity.

**(b)** Hence evaluate $\int_0^{\pi} \sin^2 x\, dx$ and interpret the result geometrically.

**(c)** Evaluate $\int_0^{\frac{\pi}{4}} \sin^2 x\cos^2 x\, dx$ using appropriate identities.

**(d)** Given that $\int_0^{\frac{\pi}{2}} \sin^n x\, dx = \frac{n-1}{n} \int_0^{\frac{\pi}{2}} \sin^{n-2} x\, dx$ for $n \geq 2$ (Wallis' reduction formula), find $\int_0^{\frac{\pi}{2}} \sin^6 x\, dx$.

[Difficulty: hard. Combines trigonometric identities with integration, culminating in the Wallis reduction formula.]

**Solution:**

**(a)** Using $\sin^2 x = \frac{1 - \cos 2x}{2}$:

$$\int \sin^2 x\, dx = \int \frac{1 - \cos 2x}{2}\, dx = \frac{1}{2}x - \frac{1}{4}\sin 2x + C$$

**(b)** $\int_0^{\pi} \sin^2 x\, dx = \left[\frac{1}{2}x - \frac{1}{4}\sin 2x\right]_0^{\pi} = \frac{\pi}{2} - 0 = \frac{\pi}{2}$.

Geometrically, this is the area between the curve $y = \sin^2 x$ and the $x$-axis from $x = 0$ to $x = \pi$. Since $\sin^2 x \geq 0$, the area equals the integral. The result $\frac{\pi}{2}$ equals the area of a semicircle of radius 1, which is a coincidence related to the fact that $\sin^2 x$ and $\cos^2 x$ each average to $\frac{1}{2}$ over a full period.

**(c)** $\sin^2 x\cos^2 x = \frac{1}{4}\sin^2 2x = \frac{1}{4} \cdot \frac{1 - \cos 4x}{2} = \frac{1}{8}(1 - \cos 4x)$.

$$\int_0^{\frac{\pi}{4}} \sin^2 x\cos^2 x\, dx = \int_0^{\frac{\pi}{4}} \frac{1}{8}(1 - \cos 4x)\, dx = \frac{1}{8}\left[x - \frac{1}{4}\sin 4x\right]_0^{\frac{\pi}{4}}$$

$$= \frac{1}{8}\left(\frac{\pi}{4} - 0\right) = \frac{\pi}{32}$$

**(d)** Applying Wallis' reduction formula repeatedly:

$$\int_0^{\frac{\pi}{2}} \sin^6 x\, dx = \frac{5}{6}\int_0^{\frac{\pi}{2}} \sin^4 x\, dx = \frac{5}{6} \cdot \frac{3}{4}\int_0^{\frac{\pi}{2}} \sin^2 x\, dx = \frac{5}{6} \cdot \frac{3}{4} \cdot \frac{1}{2}\int_0^{\frac{\pi}{2}} 1\, dx$$

$$= \frac{5}{6} \cdot \frac{3}{4} \cdot \frac{1}{2} \cdot \frac{\pi}{2} = \frac{15\pi}{96} = \frac{5\pi}{32}$$

---

### IT-3: Verifying an Integration Result by Differentiation (with Differentiation)

**Question:**

A student claims that $\int \frac{x}{\sqrt{x+1}}\, dx = \frac{2}{3}(x-2)\sqrt{x+1} + C$.

**(a)** Verify this result by differentiation.

**(b)** Find the integral $\int \frac{x}{\sqrt{x+1}}\, dx$ using the substitution $u = \sqrt{x+1}$, and confirm the student's answer.

**(c)** Hence evaluate $\int_0^3 \frac{x}{\sqrt{x+1}}\, dx$ exactly.

**(d)** A different student claims $\int \frac{1}{\sqrt{x+1}}\, dx = 2\sqrt{x+1} + C$. Use differentiation to verify, then use this result together with part (b) to find $\int_0^3 \frac{x+1}{\sqrt{x+1}}\, dx$ without further integration.

[Difficulty: hard. Tests verification by differentiation, substitution technique, and decomposition of integrals using known results.]

**Solution:**

**(a)** Let $F(x) = \frac{2}{3}(x-2)\sqrt{x+1} = \frac{2}{3}(x-2)(x+1)^{1/2}$.

By the product rule:

$$F'(x) = \frac{2}{3}\left[(x+1)^{1/2} \cdot 1 + (x-2) \cdot \frac{1}{2}(x+1)^{-1/2}\right]$$

$$= \frac{2}{3}\left[(x+1)^{1/2} + \frac{x-2}{2(x+1)^{1/2}}\right]$$

$$= \frac{2}{3} \cdot \frac{2(x+1) + (x-2)}{2(x+1)^{1/2}} = \frac{2}{3} \cdot \frac{3x}{2(x+1)^{1/2}} = \frac{x}{(x+1)^{1/2}} = \frac{x}{\sqrt{x+1}}$$

Confirmed.

**(b)** $u = \sqrt{x+1}$, so $u^2 = x + 1$, giving $x = u^2 - 1$ and $dx = 2u\, du$.

$$\int \frac{x}{\sqrt{x+1}}\, dx = \int \frac{u^2-1}{u} \cdot 2u\, du = 2\int(u^2 - 1)\, du$$

$$= 2\left(\frac{u^3}{3} - u\right) + C = \frac{2u^3}{3} - 2u + C$$

Substituting back $u = \sqrt{x+1}$:

$$= \frac{2}{3}(x+1)^{3/2} - 2(x+1)^{1/2} + C = \frac{2}{3}(x+1)^{1/2}[(x+1) - 3] + C = \frac{2}{3}(x-2)\sqrt{x+1} + C$$

Confirmed.

**(c)** $\int_0^3 \frac{x}{\sqrt{x+1}}\, dx = \left[\frac{2}{3}(x-2)\sqrt{x+1}\right]_0^3$

At $x = 3$: $\frac{2}{3}(1)(2) = \frac{4}{3}$

At $x = 0$: $\frac{2}{3}(-2)(1) = -\frac{4}{3}$

$$= \frac{4}{3} - \left(-\frac{4}{3}\right) = \frac{8}{3}$$

**(d)** Verification: $\frac{d}{dx}[2(x+1)^{1/2}] = 2 \cdot \frac{1}{2}(x+1)^{-1/2} = \frac{1}{\sqrt{x+1}}$. Confirmed.

Decomposition: $\frac{x+1}{\sqrt{x+1}} = \sqrt{x+1} = (x+1)^{1/2}$.

So $\int_0^3 \frac{x+1}{\sqrt{x+1}}\, dx = \int_0^3 (x+1)^{1/2}\, dx = \left[\frac{2}{3}(x+1)^{3/2}\right]_0^3 = \frac{2}{3}(8 - 1) = \frac{14}{3}$.

Alternatively, using linearity: $\int_0^3 \frac{x+1}{\sqrt{x+1}}\, dx = \int_0^3 \frac{x}{\sqrt{x+1}}\, dx + \int_0^3 \frac{1}{\sqrt{x+1}}\, dx = \frac{8}{3} + [2\sqrt{x+1}]_0^3 = \frac{8}{3} + 2(2-1) = \frac{8}{3} + 2 = \frac{14}{3}$. Confirmed.
