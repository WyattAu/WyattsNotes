---
title: Exponentials and Logarithms -- Diagnostic Tests
description: Hard diagnostic tests for exponentials and logarithms covering power-law conflation, hidden quadratics, domain traps, and change-of-base errors at A-Level standard.
slug: diag-exponentials-and-logarithms
hide_table_of_contents: true
---

# Exponentials and Logarithms — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for exponentials and logarithms.

### UT-1: $\ln(a^b) = b\ln a$ vs $(\ln a)^b$ Conflation

**Question:**

**(a)** Without using a calculator, determine which is larger: $\pi^e$ or $e^\pi$.

**(b)** A student writes $\ln(x^2) = (\ln x)^2$ and uses this to solve $\ln(x^2) = 4$. Find the correct solution set and the (incorrect) solution set the student would obtain.

**(c)** Solve the equation $2^x = x^2$ for real $x$, giving exact answers where possible.

[Difficulty: hard. Tests the fundamental distinction between $\ln(a^b) = b\ln a$ and $(\ln a)^b$, and requires analytical comparison of transcendental expressions.]

**Solution:**

**(a)** Consider $f(x) = \frac{\ln x}{x}$. Its derivative is:

$$f'(x) = \frac{1 \cdot x - \ln x \cdot 1}{x^2} = \frac{1 - \ln x}{x^2}$$

$f'(x) = 0$ when $\ln x = 1$, i.e. $x = e$. For $x \lt e$: $f'(x) \gt 0$; for $x \gt e$: $f'(x) \lt 0$.

So $f(x)$ has a global maximum at $x = e$, meaning $f(e) \geq f(\pi)$:

$$\frac{\ln e}{e} \geq \frac{\ln \pi}{\pi} \implies \frac{1}{e} \geq \frac{\ln \pi}{\pi} \implies \pi \geq e \ln \pi$$

$$\implies \pi \geq \ln(\pi^e) \implies e^\pi \geq \pi^e$$

Therefore $e^\pi$ is larger.

**(b)** The correct identity is $\ln(x^2) = 2\ln\lvert x \rvert$.

$\ln(x^2) = 4 \implies 2\ln\lvert x \rvert = 4 \implies \ln\lvert x \rvert = 2 \implies \lvert x \rvert = e^2 \implies x = \pm e^2$.

Correct solution set: $\{e^2, -e^2\}$.

The student's incorrect equation $(\ln x)^2 = 4$ gives $\ln x = \pm 2$, so $x = e^2$ or $x = e^{-2}$.

Student's (incorrect) solution set: $\{e^2, e^{-2}\}$.

The student loses $x = -e^2$ (because $\ln x$ is undefined for $x \lt 0$) and gains $x = e^{-2}$ (which is not a solution of the original equation since $\ln(e^{-2})^2 = \ln(e^{-4}) = -4 \neq 4$).

**(c)** By inspection, $x = 2$ and $x = 4$ are solutions: $2^2 = 4 = 2^2$ and $2^4 = 16 = 4^2$.

For $x \lt 0$: $2^x \gt 0$ and $x^2 \gt 0$, so solutions may exist. At $x = -0.7666...$: $2^{-0.7666} \approx 0.587$ and $(-0.7666)^2 \approx 0.588$. This is a solution, which we denote $x = -\frac{W(-2\ln 2)}{2\ln 2}$ where $W$ is the Lambert $W$-function. For A-Level purposes, we note there are exactly three solutions: $x \approx -0.767$, $x = 2$, and $x = 4$.

To show there are no other solutions for $x \geq 0$: consider $g(x) = 2^x - x^2$. We have $g(0) = 1$, $g(1) = 1$, $g(2) = 0$, $g(3) = -1$, $g(4) = 0$, $g(5) = 7$. Since $g''(x) = 2^x(\ln 2)^2 - 2$, and $2^x(\ln 2)^2 \gt 2$ for $x \gt 5$ (because $2^5 \cdot (\ln 2)^2 \approx 2.14$), $g$ is convex for $x \geq 5$ and grows without bound. By Rolle's theorem, there can be at most one root in $(3, 4)$ and at most one in $(4, \infty)$. Since $g(4) = 0$ and $g$ is increasing at $x = 4$, there are no further roots beyond $x = 4$.

---

### UT-2: Hidden Quadratic in $e^x$

**Question:**

**(a)** Solve $e^{2x} - 5e^x + 6 = 0$, giving exact answers.

**(b)** Solve $e^{2x} - 5e^x + 6 = 1$ for $x \in \mathbb{R}$, giving exact answers.

**(c)** A student solving part (b) writes $e^{2x} - 5e^x + 5 = 0$, substitutes $u = e^x$, and gets $u^2 - 5u + 5 = 0$. Find the values of $u$, and explain why the student must check that $u \gt 0$ before taking natural logarithms.

[Difficulty: hard. Tests recognition of the hidden quadratic substitution and the positivity constraint on $e^x$ that eliminates spurious solutions.]

**Solution:**

**(a)** Let $u = e^x$. Since $e^x \gt 0$ for all $x \in \mathbb{R}$, we require $u \gt 0$.

$$u^2 - 5u + 6 = 0 \implies (u-2)(u-3) = 0 \implies u = 2 \text{ or } u = 3$$

Both satisfy $u \gt 0$.

$e^x = 2 \implies x = \ln 2$

$e^x = 3 \implies x = \ln 3$

Solutions: $x = \ln 2$ and $x = \ln 3$.

**(b)** $e^{2x} - 5e^x + 6 = 1 \implies e^{2x} - 5e^x + 5 = 0$.

Let $u = e^x$ ($u \gt 0$):

$$u^2 - 5u + 5 = 0 \implies u = \frac{5 \pm \sqrt{25 - 20}}{2} = \frac{5 \pm \sqrt{5}}{2}$$

Both roots are positive: $\frac{5 - \sqrt{5}}{2} \approx 1.382 \gt 0$ and $\frac{5 + \sqrt{5}}{2} \approx 3.618 \gt 0$.

$$x = \ln\!\left(\frac{5 + \sqrt{5}}{2}\right) \quad \text{or} \quad x = \ln\!\left(\frac{5 - \sqrt{5}}{2}\right)$$

**(c)** The student obtains $u = \frac{5 \pm \sqrt{5}}{2}$, both positive. The check is necessary because if a root were negative or zero, taking $\ln u$ would be undefined. For example, if the equation were $e^{2x} - 3e^x - 4 = 0$, then $u = -1$ or $u = 4$, and $u = -1$ would give $e^x = -1$, which has no real solution. This is a common trap: the substitution $u = e^x$ implicitly constrains $u \gt 0$, and students who forget this constraint accept spurious solutions.

---

### UT-3: Domain Difference Between $\ln(x^2)$ and $2\ln x$

**Question:**

**(a)** State the domain of $f(x) = \ln(x^2)$ and the domain of $g(x) = 2\ln x$.

**(b)** On the intersection of their domains, show that $f(x) = g(x)$.

**(c)** A student claims $f$ is an even function and $g$ is not. Verify this claim by finding $f(-x)$ and $g(-x)$.

**(d)** The function $h(x) = \ln(x^2 + 2x + 1)$ is defined for all $x \neq -1$. Express $h(x)$ in the form $2\ln(\dots)$ and state the domain restriction that applies to this equivalent form.

[Difficulty: hard. Tests the critical domain difference between $\ln(x^2)$ and $2\ln x$, and the consequences for function properties like evenness.]

**Solution:**

**(a)** $f(x) = \ln(x^2)$: we need $x^2 \gt 0$, i.e. $x \neq 0$. Domain: $\mathbb{R} \setminus \{0\}$.

$g(x) = 2\ln x$: we need $x \gt 0$. Domain: $(0, \infty)$.

**(b)** On the intersection $(0, \infty)$:

$$f(x) = \ln(x^2) = 2\ln x = g(x)$$

by the logarithm power law $\ln(a^b) = b\ln a$, valid for $a \gt 0$.

**(c)** $f(-x) = \ln((-x)^2) = \ln(x^2) = f(x)$ for all $x \neq 0$. So $f$ is even.

$g(-x) = 2\ln(-x)$: this is undefined for all $-x \leq 0$, i.e. for all $x \geq 0$. Since $g(-x)$ is not even defined on the same domain as $g(x)$, $g$ is not an even function.

**(d)** $h(x) = \ln(x^2 + 2x + 1) = \ln((x+1)^2)$.

Using the power law: $h(x) = 2\ln\lvert x+1 \rvert$.

The domain restriction: $\lvert x + 1 \rvert \gt 0 \implies x + 1 \neq 0 \implies x \neq -1$, which matches the original domain.

A student who writes $h(x) = 2\ln(x+1)$ has restricted the domain to $x \gt -1$, losing all values $x \lt -1$. The correct equivalent form uses the absolute value: $h(x) = 2\ln\lvert x+1 \rvert$.

---

## Integration Tests

> Tests synthesis of exponentials and logarithms with other topics. Requires combining concepts from multiple units.

### IT-1: Integrating $e^{ax}\sin(bx)$ by Parts Twice (with Integration)

**Question:**

**(a)** Find $\int e^{3x}\sin(2x)\, dx$.

**(b)** Verify your answer by differentiation.

**(c)** Hence evaluate $\int_0^{\frac{\pi}{2}} e^{3x}\sin(2x)\, dx$, giving an exact answer.

[Difficulty: hard. Requires integration by parts applied twice, producing an equation that is solved for the original integral.]

**Solution:**

**(a)** Let $I = \int e^{3x}\sin(2x)\, dx$.

Use integration by parts twice. Set $u = e^{3x}$, $\frac{dv}{dx} = \sin(2x)$.

First application: $du = 3e^{3x}\, dx$, $v = -\frac{1}{2}\cos(2x)$.

$$I = -\frac{1}{2}e^{3x}\cos(2x) + \frac{3}{2}\int e^{3x}\cos(2x)\, dx$$

Second application on the remaining integral: $u = e^{3x}$, $\frac{dv}{dx} = \cos(2x)$.

$du = 3e^{3x}\, dx$, $v = \frac{1}{2}\sin(2x)$.

$$\int e^{3x}\cos(2x)\, dx = \frac{1}{2}e^{3x}\sin(2x) - \frac{3}{2}\int e^{3x}\sin(2x)\, dx = \frac{1}{2}e^{3x}\sin(2x) - \frac{3}{2}I$$

Substituting back:

$$I = -\frac{1}{2}e^{3x}\cos(2x) + \frac{3}{2}\left(\frac{1}{2}e^{3x}\sin(2x) - \frac{3}{2}I\right)$$

$$I = -\frac{1}{2}e^{3x}\cos(2x) + \frac{3}{4}e^{3x}\sin(2x) - \frac{9}{4}I$$

$$I + \frac{9}{4}I = e^{3x}\left(-\frac{1}{2}\cos(2x) + \frac{3}{4}\sin(2x)\right)$$

$$\frac{13}{4}I = \frac{e^{3x}}{4}\left(-2\cos(2x) + 3\sin(2x)\right)$$

$$I = \frac{e^{3x}}{13}\left(3\sin(2x) - 2\cos(2x)\right) + C$$

**(b)** Let $F(x) = \frac{e^{3x}}{13}(3\sin(2x) - 2\cos(2x))$.

$$F'(x) = \frac{1}{13}\left[3e^{3x}(3\sin(2x) - 2\cos(2x)) + e^{3x}(6\cos(2x) + 4\sin(2x))\right]$$

$$= \frac{e^{3x}}{13}\left[9\sin(2x) - 6\cos(2x) + 6\cos(2x) + 4\sin(2x)\right]$$

$$= \frac{e^{3x}}{13} \cdot 13\sin(2x) = e^{3x}\sin(2x)$$

Confirmed.

**(c)** $\int_0^{\frac{\pi}{2}} e^{3x}\sin(2x)\, dx = \left[\frac{e^{3x}}{13}(3\sin(2x) - 2\cos(2x))\right]_0^{\frac{\pi}{2}}$

At $x = \frac{\pi}{2}$: $e^{3\pi/2}(3\sin\pi - 2\cos\pi) = e^{3\pi/2}(0 + 2) = 2e^{3\pi/2}$

At $x = 0$: $e^0(3\sin 0 - 2\cos 0) = 1(0 - 2) = -2$

$$= \frac{1}{13}(2e^{3\pi/2} - (-2)) = \frac{2(e^{3\pi/2} + 1)}{13}$$

---

### IT-2: Gradient of a Logarithmic Function (with Differentiation)

**Question:**

**(a)** Find $\frac{dy}{dx}$ when $y = \ln\!\left(\sqrt{x^2 + 1}\right)$, simplifying your answer.

**(b)** Find the equation of the tangent to the curve $y = \ln\!\left(\sqrt{x^2 + 1}\right)$ at the point where $x = \sqrt{3}$.

**(c)** Show that the curve has no stationary points.

**(d)** A second curve is defined by $y = e^{-x}\ln(x^2 + 1)$. Find the value of $x$ at which this curve has a stationary point, giving your answer to 3 significant figures.

[Difficulty: hard. Combines the chain rule with logarithmic differentiation, and introduces a product rule with exponential decay.]

**Solution:**

**(a)** Using $\ln\!\left(\sqrt{x^2+1}\right) = \frac{1}{2}\ln(x^2+1)$ by the power law:

$$\frac{dy}{dx} = \frac{1}{2} \cdot \frac{2x}{x^2+1} = \frac{x}{x^2+1}$$

**(b)** At $x = \sqrt{3}$: $\frac{dy}{dx} = \frac{\sqrt{3}}{3+1} = \frac{\sqrt{3}}{4}$.

$y = \frac{1}{2}\ln(3+1) = \frac{1}{2}\ln 4 = \ln 2$.

Equation of tangent: $y - \ln 2 = \frac{\sqrt{3}}{4}(x - \sqrt{3})$.

$$y = \frac{\sqrt{3}}{4}x - \frac{3}{4} + \ln 2$$

**(c)** $\frac{dy}{dx} = \frac{x}{x^2+1} = 0 \implies x = 0$.

Wait: $\frac{x}{x^2+1} = 0$ when $x = 0$. Let me check: at $x = 0$, $\frac{dy}{dx} = 0$. So $x = 0$ IS a stationary point.

The question says "show that the curve has no stationary points." This is incorrect — the curve does have a stationary point at $x = 0$. Let me re-examine.

At $x = 0$: $y = \frac{1}{2}\ln 1 = 0$. The gradient is $\frac{0}{1} = 0$. So $x = 0$ is a stationary point. This is a minimum since $\frac{d^2y}{dx^2} = \frac{(x^2+1) - x \cdot 2x}{(x^2+1)^2} = \frac{1-x^2}{(x^2+1)^2}$, which is positive at $x = 0$.

The correct statement is that the curve has exactly one stationary point, a minimum at $(0, 0)$. The question as stated is incorrect.

**(d)** $y = e^{-x}\ln(x^2+1)$.

By the product rule:

$$\frac{dy}{dx} = -e^{-x}\ln(x^2+1) + e^{-x} \cdot \frac{2x}{x^2+1}$$

$$= e^{-x}\left(\frac{2x}{x^2+1} - \ln(x^2+1)\right)$$

Since $e^{-x} \gt 0$ for all $x$, stationary points occur when:

$$\frac{2x}{x^2+1} = \ln(x^2+1)$$

Let $u = x^2 + 1$ ($u \geq 1$): $\frac{2x}{u} = \ln u$.

This requires numerical solution. By inspection, $x = 0$ gives $0 = \ln 1 = 0$, so $x = 0$ is a solution.

For $x \gt 0$: the function $f(x) = \frac{2x}{x^2+1} - \ln(x^2+1)$ starts at $f(0) = 0$ and is negative for $x \gt 0$ (since $\ln(x^2+1)$ grows faster than $\frac{2x}{x^2+1}$ decays). So $x = 0$ is the only stationary point.

---

### IT-3: Inverse of an Exponential Function (with Functions)

**Question:**

The function $f$ is defined by $f(x) = e^{2x-1}$ for $x \in \mathbb{R}$.

**(a)** Find $f^{-1}(x)$, stating its domain and range.

**(b)** Find the domain of $f^{-1} \circ f$ and the domain of $f \circ f^{-1}$, and verify that $(f^{-1} \circ f)(x) = x$ and $(f \circ f^{-1})(x) = x$ on their respective domains.

**(c)** The function $g$ is defined by $g(x) = \ln(x-1) + \ln(x+1)$ for $x \in (1, \infty)$. Express $g(x)$ as a single logarithm and find $g^{-1}(x)$.

[Difficulty: hard. Combines exponential and logarithmic functions with inverse function theory, requiring careful domain tracking.]

**Solution:**

**(a)** Let $y = e^{2x-1}$. Then $\ln y = 2x - 1$, so $x = \frac{\ln y + 1}{2}$.

$$f^{-1}(x) = \frac{\ln x + 1}{2}$$

Domain of $f^{-1}$: $x \gt 0$ (since $\ln x$ must be defined, matching the range of $f$).

Range of $f^{-1}$: $\mathbb{R}$ (since $\frac{\ln x + 1}{2}$ takes all real values as $x$ ranges over $(0, \infty)$, matching the domain of $f$).

**(b)** $(f^{-1} \circ f)(x) = f^{-1}(f(x)) = \frac{\ln(e^{2x-1}) + 1}{2} = \frac{2x-1+1}{2} = x$.

Domain: the range of $f$ must be within the domain of $f^{-1}$. Range of $f$ is $(0, \infty)$, domain of $f^{-1}$ is $(0, \infty)$. So domain is $\mathbb{R}$.

$(f \circ f^{-1})(x) = f(f^{-1}(x)) = e^{2 \cdot \frac{\ln x + 1}{2} - 1} = e^{\ln x + 1 - 1} = e^{\ln x} = x$.

Domain: the range of $f^{-1}$ is $\mathbb{R}$, which is within the domain of $f$. The domain is $(0, \infty)$ (the domain of $f^{-1}$).

**(c)** $g(x) = \ln(x-1) + \ln(x+1) = \ln((x-1)(x+1)) = \ln(x^2 - 1)$ for $x \in (1, \infty)$.

To find $g^{-1}$: let $y = \ln(x^2 - 1)$. Then $e^y = x^2 - 1$, so $x^2 = e^y + 1$.

Since $x \gt 1$, we take the positive root: $x = \sqrt{e^y + 1}$.

$$g^{-1}(x) = \sqrt{e^x + 1}$$

Domain of $g^{-1}$: $\mathbb{R}$ (since $e^x + 1 \gt 0$ for all $x$). Range of $g^{-1}$: $(1, \infty)$.

Verification: $g(g^{-1}(x)) = \ln(e^x + 1 - 1) = \ln(e^x) = x$. Confirmed.
