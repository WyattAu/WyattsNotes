---
title: "Trigonometry -- Diagnostic Tests"
description: Hardest IB Mathematics diagnostic tests for trigonometry covering periodicity, identity proofs, double angle traps, and harmonic form.
slug: diag-trigonometry
hide_table_of_contents: true
---

# Trigonometry — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for trigonometry.

### UT-1: Solving Trigonometric Equations — Missing Solutions from Periodicity

**Question:**

Solve $\sin 2x = \cos x$ for $x \in [0, 2\pi]$.

A student writes: "$\sin 2x = \cos x \implies 2\sin x \cos x = \cos x \implies \cos x(2\sin x - 1) = 0$. So $\cos x = 0$ or $\sin x = \frac{1}{2}$."

**(a)** Complete the student's working and verify that all solutions are found.

**(b)** Another student cancels $\cos x$ from both sides at the start, writing $\sin 2x = \cos x \implies 2\sin x = 1$. Explain what is lost.

[Difficulty: hard. Tests the common error of dividing by a factor that could be zero, and ensuring all solutions are found.]

**Solution:**

**(a)** From $\cos x(2\sin x - 1) = 0$:

Case 1: $\cos x = 0$ in $[0, 2\pi]$: $x = \frac{\pi}{2}, \frac{3\pi}{2}$.

Case 2: $2\sin x - 1 = 0 \implies \sin x = \frac{1}{2}$ in $[0, 2\pi]$: $x = \frac{\pi}{6}, \frac{5\pi}{6}$.

All four solutions: $x = \frac{\pi}{6}, \frac{\pi}{2}, \frac{5\pi}{6}, \frac{3\pi}{2}$.

**(b)** By cancelling $\cos x$, the student loses all solutions where $\cos x = 0$, namely $x = \frac{\pi}{2}$ and $x = \frac{3\pi}{2}$. The student would find only two solutions instead of four. Dividing by a quantity that can be zero is only valid if that quantity is confirmed to be non-zero.

---

### UT-2: Double Angle Identity Trap

**Question:**

**(a)** Prove that $\sin^2 x = \dfrac{1 - \cos 2x}{2}$.

**(b)** A student writes $\sin(2x) = 2\sin^2 x$. Find the correct expression and identify the error.

**(c)** Find the exact value of $\cos^4\!\left(\dfrac{\pi}{8}\right)$.

[Difficulty: hard. Tests the common confusion between $\sin(2x)$ and $\sin^2 x$, and applies double angle identities.]

**Solution:**

**(a)** Using $\cos 2x = 1 - 2\sin^2 x$:

$$2\sin^2 x = 1 - \cos 2x \implies \sin^2 x = \frac{1 - \cos 2x}{2}$$

**(b)** The correct expression is $\sin(2x) = 2\sin x \cos x$, not $2\sin^2 x$. The student confused the double angle formula for sine with $\sin^2 x$. These are fundamentally different: $\sin(2x)$ is the sine of double the angle, while $\sin^2 x$ is the square of the sine.

**(c)** Using the identity $\sin^2 x = \frac{1 - \cos 2x}{2}$:

$$\cos^4\!\left(\frac{\pi}{8}\right) = \left(\cos^2\!\left(\frac{\pi}{8}\right)\right)^2$$

Using $\cos^2 x = \frac{1 + \cos 2x}{2}$:

$$\cos^2\!\left(\frac{\pi}{8}\right) = \frac{1 + \cos\frac{\pi}{4}}{2} = \frac{1 + \frac{\sqrt{2}}{2}}{2} = \frac{2 + \sqrt{2}}{4}$$

$$\cos^4\!\left(\frac{\pi}{8}\right) = \left(\frac{2 + \sqrt{2}}{4}\right)^2 = \frac{4 + 4\sqrt{2} + 2}{16} = \frac{6 + 4\sqrt{2}}{16} = \frac{3 + 2\sqrt{2}}{8}$$

---

### UT-3: Harmonic Form and Maximum/Minimum

**Question:**

Express $3\sin x - 4\cos x$ in the form $R\sin(x - \alpha)$, and hence find the maximum value of $\dfrac{1}{3\sin x - 4\cos x + 5}$.

[Difficulty: hard. Combines harmonic form with function analysis to find the minimum of a reciprocal.]

**Solution:**

$$R = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

For $3\sin x - 4\cos x = R\sin(x - \alpha)$, we need $\tan\alpha = \frac{4}{3}$ (note: the coefficient of $\cos x$ is $-4$, and $\sin(x - \alpha) = \sin x\cos\alpha - \cos x\sin\alpha$, so $R\cos\alpha = 3$ and $R\sin\alpha = 4$).

$$\alpha = \arctan\!\left(\frac{4}{3}\right)$$

So $3\sin x - 4\cos x = 5\sin\!\left(x - \arctan\!\frac{4}{3}\right)$.

The range of $5\sin(x - \alpha)$ is $[-5, 5]$.

For $\dfrac{1}{3\sin x - 4\cos x + 5}$: the denominator is $5\sin(x - \alpha) + 5 = 5(\sin(x - \alpha) + 1)$.

Since $\sin(x - \alpha) + 1 \in [0, 2]$, the denominator $\in [0, 10]$.

The maximum value of the reciprocal occurs when the denominator is at its minimum:

$$\text{Maximum} = \frac{1}{0}$$

Wait — when $\sin(x - \alpha) = -1$, the denominator is $0$, which is undefined. The range of the denominator is $(0, 10]$, so:

$$\frac{1}{3\sin x - 4\cos x + 5} \in \left[\frac{1}{10}, \infty\right)$$

The maximum does not exist (unbounded). The minimum is $\dfrac{1}{10}$, occurring when $\sin(x - \alpha) = 1$, i.e., $x = \alpha + \frac{\pi}{2} + 2n\pi$.

---

## Integration Tests

> Tests synthesis of trigonometry with other topics.

### IT-1: Trigonometric Integration with Exact Values (with Integration)

**Question:**

**(a)** Find the exact value of $\displaystyle\int_0^{\pi/2} \sin^2 x\cos^2 x\,dx$.

**(b)** A student uses the substitution $u = \sin x$ and obtains $\displaystyle\int_0^1 u^2(1 - u^2)\,du$. Complete this calculation.

[Difficulty: hard. Combines trigonometric identities with integration techniques.]

**Solution:**

**(a)** Using $\sin^2 x\cos^2 x = \dfrac{\sin^2 2x}{4}$:

$$\int_0^{\pi/2} \frac{\sin^2 2x}{4}\,dx = \frac{1}{4}\int_0^{\pi/2} \sin^2 2x\,dx$$

Using $\sin^2 2x = \dfrac{1 - \cos 4x}{2}$:

$$= \frac{1}{8}\int_0^{\pi/2}(1 - \cos 4x)\,dx = \frac{1}{8}\left[x - \frac{\sin 4x}{4}\right]_0^{\pi/2} = \frac{1}{8} \cdot \frac{\pi}{2} = \frac{\pi}{16}$$

**(b)** With $u = \sin x$, $du = \cos x\,dx$, when $x = 0$: $u = 0$, when $x = \frac{\pi}{2}$: $u = 1$:

$$\int_0^{\pi/2} \sin^2 x\cos^2 x\,dx = \int_0^1 u^2(1 - u^2)\,du = \int_0^1 (u^2 - u^4)\,du$$

$$= \left[\frac{u^3}{3} - \frac{u^5}{5}\right]_0^1 = \frac{1}{3} - \frac{1}{5} = \frac{2}{15}$$

Note: this does NOT equal $\frac{\pi}{16}$. The student's substitution $du = \cos x\,dx$ loses the sign information when $\cos x$ changes sign. The substitution $u = \sin x$ is only valid on intervals where $\cos x \geq 0$, which $[0, \frac{\pi}{2}]$ satisfies. However, the student substituted $\cos^2 x = 1 - u^2$ but the differential gives $du = \cos x\,dx$, not $du = |\cos x|\,dx$. Since $\cos x \geq 0$ on $[0, \frac{\pi}{2}]$, this substitution is actually valid, but the computation $\frac{2}{15} \neq \frac{\pi}{16}$ reveals an error: the identity $\sin^2 x \cos^2 x = u^2(1-u^2)$ is correct, but $\int_0^{\pi/2} \sin^2 x\cos^2 x\,dx$ via $u$-substitution should use $du = \cos x\,dx$, giving $\int_0^1 u^2\cos x\,dx$, not $\int_0^1 u^2\,du$. The student incorrectly replaced $\cos x\,dx$ with $du$ while also replacing $\cos^2 x$ with $1-u^2$. This is only correct if we use $du = \cos x\,dx$, but then we can't also replace the remaining $\cos x$ with $\sqrt{1-u^2}$ unless we are careful about signs.

The correct $u$-substitution: $du = \cos x\,dx$, so:

$$\int_0^{\pi/2} \sin^2 x \cos^2 x\,dx = \int_0^1 u^2 \cos x\,du$$

But $\cos x = \sqrt{1 - u^2}$ on this interval, so:

$$= \int_0^1 u^2\sqrt{1-u^2}\,du$$

This is an elliptic integral and does not have an elementary closed form. The correct answer $\frac{\pi}{16}$ comes from the double-angle identity approach, not from this substitution. The student's error was applying two substitutions simultaneously without accounting for both $\cos x$ factors.
