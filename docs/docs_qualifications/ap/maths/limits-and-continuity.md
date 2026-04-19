---
title: Limits and Continuity
date: 2026-04-14
tags:
  - Mathematics
  - AP
categories:
  - Mathematics
slug: limits-and-continuity
---

## Intuitive Notion of a Limit (CED Unit 1)

The limit of a function $f(x)$ as $x$ approaches $a$ is the value that $f(x)$ approaches, regardless
of whether $f(a)$ is defined:

$$
\lim_{x \to a} f(x) = L
$$

This means that as $x$ gets arbitrarily close to $a$, $f(x)$ gets arbitrarily close to $L$.

### Left-Hand and Right-Hand Limits

A two-sided limit exists if and only if both one-sided limits exist and are equal:

$$
\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L
$$

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{|x|}{x}$.

$$
\lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = -1
$$

$$
\lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = 1
$$

Since the one-sided limits are not equal, the limit does not exist.

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 3} \frac{|x - 3|}{x - 3}$.

For $x \lt 3$: $\frac{|x-3|}{x-3} = \frac{3-x}{x-3} = -1$.

For $x \gt 3$: $\frac{|x-3|}{x-3} = \frac{x-3}{x-3} = 1$.

Left limit $= -1$, right limit $= 1$. The limit does not exist.

:::

### Common Limits

| Limit                                                             | Value |
| ----------------------------------------------------------------- | ----- |
| $\displaystyle\lim_{x \to 0} \frac{\sin x}{x}$                    | $1$   |
| $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x}$                | $0$   |
| $\displaystyle\lim_{x \to \infty} \frac{1}{x}$                    | $0$   |
| $\displaystyle\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x$ | $e$   |
| $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x}$                   | $1$   |
| $\displaystyle\lim_{x \to 0} \frac{\ln(1+x)}{x}$                  | $1$   |

**Proof that $\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = 1$.**

This is typically proved using the squeeze theorem and the geometric inequality
$\sin x \lt x \lt \tan x$ for $0 \lt x \lt \frac{\pi}{2}$, which gives
$\cos x \lt \frac{\sin x}{x} \lt 1$.

As $x \to 0^+$, $\cos x \to 1$, so by the squeeze theorem, $\frac{\sin x}{x} \to 1$. A similar
argument applies from the left. $\blacksquare$

**Proof of the geometric inequality $\sin x \lt x \lt \tan x$ for $0 \lt x \lt \frac{\pi}{2}$.**
Consider a unit circle sector with angle $x$. The area of triangle $OAP$ (with altitude $\sin x$) is
$\frac{1}{2}\sin x$, the area of the sector is $\frac{1}{2}x$, and the area of triangle $OAT$ (with
altitude $\tan x$) is $\frac{1}{2}\tan x$. Since the sector contains the first triangle and is
contained in the second, we get $\frac{1}{2}\sin x \lt \frac{1}{2}x \lt \frac{1}{2}\tan x$, hence
$\sin x \lt x \lt \tan x$. $\blacksquare$

**Proof that $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x} = 1$.**

Let $h = e^x - 1$, so $e^x = 1 + h$ and $x = \ln(1+h)$. As $x \to 0$, $h \to 0$.

$$
\frac{e^x - 1}{x} = \frac{h}{\ln(1+h)} = \frac{1}{\frac{\ln(1+h)}{h}}
$$

Since $\displaystyle\lim_{h \to 0} \frac{\ln(1+h)}{h} = 1$ (which follows from
$\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x} = 1$ and the fact that $\ln$ and $\exp$ are
inverses), we obtain the result. $\blacksquare$

**Proof that $\displaystyle\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1$.**

Let $u = \ln(1+x)$, so $e^u = 1 + x$ and $x = e^u - 1$. As $x \to 0$, $u \to 0$.

$$
\frac{\ln(1+x)}{x} = \frac{u}{e^u - 1} = \frac{1}{\frac{e^u - 1}{u}}
$$

Since $\displaystyle\lim_{u \to 0} \frac{e^u - 1}{u} = 1$, the result follows. $\blacksquare$

## The Squeeze Theorem

If $g(x) \le f(x) \le h(x)$ for all $x$ near $a$ (except possibly at $a$), and:

$$
\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L
$$

then $\displaystyle\lim_{x \to a} f(x) = L$.

**Intuition:** If $f$ is sandwiched between two functions that both approach $L$, then $f$ must also
approach $L$. The squeeze theorem is particularly useful when $f$ oscillates or is otherwise hard to
evaluate directly.

:::info[Example]

Show that $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

Since $-1 \le \sin\!\left(\frac{1}{x}\right) \le 1$, we have
$-x^2 \le x^2 \sin\!\left(\frac{1}{x}\right) \le x^2$.

Both $\displaystyle\lim_{x \to 0}(-x^2) = 0$ and $\displaystyle\lim_{x \to 0} x^2 = 0$.

By the squeeze theorem, $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

:::

:::info[Example]

Show that $\displaystyle\lim_{x \to 0} x\cos\!\left(\frac{1}{x}\right) = 0$.

Since $-1 \le \cos\!\left(\frac{1}{x}\right) \le 1$, we have
$-|x| \le x\cos\!\left(\frac{1}{x}\right) \le |x|$.

Both $\displaystyle\lim_{x \to 0}(-|x|) = 0$ and $\displaystyle\lim_{x \to 0}|x| = 0$.

By the squeeze theorem, the limit is $0$.

:::

:::info[Example]

Show that $\displaystyle\lim_{x \to 0} x^2 e^{\sin(1/x)} = 0$.

Since $-1 \le \sin(1/x) \le 1$, we have $e^{-1} \le e^{\sin(1/x)} \le e^1$.

Therefore:

$$
e^{-1} x^2 \le x^2 e^{\sin(1/x)} \le e \cdot x^2
$$

Both $\displaystyle\lim_{x \to 0} e^{-1} x^2 = 0$ and $\displaystyle\lim_{x \to 0} e \cdot x^2 = 0$.

By the squeeze theorem, the limit is $0$.

:::

## Algebraic Limit Properties

If $\displaystyle\lim_{x \to a} f(x) = L$ and $\displaystyle\lim_{x \to a} g(x) = M$, then:

1. $\displaystyle\lim_{x \to a} [f(x) + g(x)] = L + M$
2. $\displaystyle\lim_{x \to a} [f(x) - g(x)] = L - M$
3. $\displaystyle\lim_{x \to a} [c \cdot f(x)] = cL$
4. $\displaystyle\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M$
5. $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}$, provided $M \ne 0$

**Theorem (Limit of a power).** If $\displaystyle\lim_{x \to a} f(x) = L$ and $n$ is a positive
integer, then $\displaystyle\lim_{x \to a} [f(x)]^n = L^n$.

**Theorem (Limit of a root).** If $\displaystyle\lim_{x \to a} f(x) = L$ and $n$ is a positive
integer, and $L \ge 0$ when $n$ is even, then
$\displaystyle\lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L}$.

**Proof of property 1 (sum rule).** We need to show that for every $\epsilon \gt 0$, there exists
$\delta \gt 0$ such that $|x - a| \lt \delta$ implies $|(f+g)(x) - (L+M)| \lt \epsilon$.

Note that $|(f+g)(x) - (L+M)| = |(f(x) - L) + (g(x) - M)| \le |f(x) - L| + |g(x) - M|$.

Choose $\delta_1$ so that $|x-a| \lt \delta_1$ implies $|f(x)-L| \lt \epsilon/2$. Choose $\delta_2$
so that $|x-a| \lt \delta_2$ implies $|g(x)-M| \lt \epsilon/2$. Let
$\delta = \min(\delta_1, \delta_2)$. Then $|x-a| \lt \delta$ implies both bounds hold, so
$|(f+g)(x) - (L+M)| \lt \epsilon/2 + \epsilon/2 = \epsilon$. $\blacksquare$

## Evaluating Limits

### Direct Substitution

When a function is continuous at $a$, the limit equals the function value:

$$
\lim_{x \to a} f(x) = f(a)
$$

### Limits Involving Infinity

For rational functions $\displaystyle\frac{P(x)}{Q(x)}$ where $P$ and $Q$ are polynomials:

- If $\deg P \lt \deg Q$: $\displaystyle\lim_{x \to \pm\infty} \frac{P(x)}{Q(x)} = 0$
- If $\deg P = \deg Q$:
  $\displaystyle\lim_{x \to \pm\infty} \frac{P(x)}{Q(x)} = \frac{\mathrm{leading coeff of } P}{\mathrm{leading coeff of } Q}$
- If $\deg P \gt \deg Q$: the limit is $\pm\infty$

**Why this works.** For large $x$, the leading term dominates. Dividing numerator and denominator by
the highest power of $x$ in the denominator, all lower-order terms vanish.

:::info[Example]

Find $\displaystyle\lim_{x \to \infty} \frac{3x^2 - 5x + 2}{7x^2 + x - 1}$.

Since both polynomials are degree 2, the limit equals the ratio of leading coefficients:

$$
\lim_{x \infty} \frac{3x^2 - 5x + 2}{7x^2 + x - 1} = \frac{3}{7}
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to \infty} \frac{5x^3 - 2x + 1}{4x^2 + 3x}$.

Since $\deg P = 3 \gt \deg Q = 2$, the limit is $+\infty$.

:::

:::info[Example]

Find $\displaystyle\lim_{x \to -\infty} \frac{2x^3 + x^2 - 5}{5x^3 - 3x + 2}$.

Both polynomials are degree 3. The limit equals the ratio of leading coefficients:

$$
\lim_{x \to -\infty} \frac{2x^3 + x^2 - 5}{5x^3 - 3x + 2} = \frac{2}{5}
$$

This confirms that the same shortcut works for $x \to -\infty$ when the degrees are equal.

:::

### Indeterminate Forms and Factoring

When direct substitution yields $\frac{0}{0}$, algebraic manipulation is required.

:::info[Example]

Find $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.

Factor the numerator:

$$
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2}(x + 2) = 4
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 1} \frac{x^3 - 1}{x - 1}$.

Factor using difference of cubes: $x^3 - 1 = (x - 1)(x^2 + x + 1)$.

$$
\lim_{x \to 1} \frac{(x - 1)(x^2 + x + 1)}{x - 1} = \lim_{x \to 1}(x^2 + x + 1) = 3
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 1} \frac{x^4 - 1}{x^2 - 1}$.

$$
\frac{x^4 - 1}{x^2 - 1} = \frac{(x^2-1)(x^2+1)}{x^2 - 1} = x^2 + 1
$$

for $x \ne \pm 1$. Therefore:

$$
\lim_{x \to 1} \frac{x^4 - 1}{x^2 - 1} = 1 + 1 = 2
$$

:::

### Rationalizing

For expressions involving radicals, multiply by the conjugate.

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}$.

Multiply numerator and denominator by the conjugate $\sqrt{x+4} + 2$:

$$
\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x} \cdot \frac{\sqrt{x+4} + 2}{\sqrt{x+4} + 2} = \lim_{x \to 0} \frac{x + 4 - 4}{x(\sqrt{x+4} + 2)} = \lim_{x \to 0} \frac{x}{x(\sqrt{x+4} + 2)} = \frac{1}{4}
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{\sqrt{1 + x} - \sqrt{1 - x}}{x}$.

Multiply by $\frac{\sqrt{1+x} + \sqrt{1-x}}{\sqrt{1+x} + \sqrt{1-x}}$:

$$
= \lim_{x \to 0} \frac{(1 + x) - (1 - x)}{x(\sqrt{1+x} + \sqrt{1-x})} = \lim_{x \to 0} \frac{2x}{x(\sqrt{1+x} + \sqrt{1-x})} = \frac{2}{1 + 1} = 1
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 5} \frac{\sqrt{x+4} - 3}{x - 5}$.

Multiply by the conjugate $\sqrt{x+4} + 3$:

$$
= \lim_{x \to 5} \frac{x + 4 - 9}{(x-5)(\sqrt{x+4} + 3)} = \lim_{x \to 5} \frac{x - 5}{(x-5)(\sqrt{x+4} + 3)} = \frac{1}{\sqrt{9} + 3} = \frac{1}{6}
$$

:::

### Limits with Trigonometric Functions (CED BC)

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x^2}$.

Using the identity $1 - \cos x = 2\sin^2\frac{x}{2}$:

$$
\frac{1 - \cos x}{x^2} = \frac{2\sin^2(x/2)}{x^2} = \frac{2\sin^2(x/2)}{4(x/2)^2} = \frac{1}{2}\left(\frac{\sin(x/2)}{x/2}\right)^2 \to \frac{1}{2}
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{\tan x}{x}$.

$$
\frac{\tan x}{x} = \frac{\sin x}{x \cos x} = \frac{\sin x}{x} \cdot \frac{1}{\cos x} \to 1 \cdot 1 = 1
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{\sin 3x}{x}$.

Rewrite to use the standard limit:

$$
\frac{\sin 3x}{x} = 3 \cdot \frac{\sin 3x}{3x} \to 3 \cdot 1 = 3
$$

:::

### Limits Involving Complex Fractions

When the limit involves a fraction within a fraction, combine the numerator into a single fraction
first.

:::info[Example]

Find $\displaystyle\lim_{x \to 2} \frac{\frac{1}{x} - \frac{1}{2}}{x - 2}$.

Combine the numerator:

$$
\frac{\frac{1}{x} - \frac{1}{2}}{x - 2} = \frac{\frac{2 - x}{2x}}{x - 2} = \frac{-(x-2)}{2x(x-2)} = -\frac{1}{2x}
$$

Therefore:

$$
\lim_{x \to 2} \frac{\frac{1}{x} - \frac{1}{2}}{x - 2} = -\frac{1}{4}
$$

:::

## Formal Definition of a Limit (Epsilon-Delta)

The precise definition: $\displaystyle\lim_{x \to a} f(x) = L$ means that for every
$\epsilon \gt 0$, there exists a $\delta \gt 0$ such that:

$$
0 \lt |x - a| \lt \delta \implies |f(x) - L| \lt \epsilon
$$

**Intuition.** Think of it as a game. Your opponent picks $\epsilon$ (how close $f(x)$ must be to
$L$). You must respond with $\delta$ (how close $x$ must be to $a$). If you can always win this
game, the limit exists.

### Proving a Limit with Epsilon-Delta

:::info[Example]

Prove that $\displaystyle\lim_{x \to 3} (2x - 1) = 5$.

We need to show that for every $\epsilon \gt 0$, there exists $\delta \gt 0$ such that
$0 \lt |x - 3| \lt \delta \implies |(2x-1) - 5| \lt \epsilon$.

Working backwards: $|(2x-1) - 5| = |2x - 6| = 2|x - 3|$.

We want $2|x - 3| \lt \epsilon$, so choose $\delta = \frac{\epsilon}{2}$.

**Proof.** Let $\epsilon \gt 0$. Choose $\delta = \frac{\epsilon}{2}$. Then:

$$
0 \lt |x - 3| \lt \delta \implies |x - 3| \lt \frac{\epsilon}{2} \implies 2|x - 3| \lt \epsilon \implies |(2x - 1) - 5| \lt \epsilon
$$

Therefore, $\displaystyle\lim_{x \to 3} (2x - 1) = 5$. $\blacksquare$

:::

:::info[Example]

Prove that $\displaystyle\lim_{x \to 2} x^2 = 4$.

We need $|x^2 - 4| \lt \epsilon$ whenever $0 \lt |x - 2| \lt \delta$.

Note that $|x^2 - 4| = |x - 2| \cdot |x + 2|$.

If we restrict $\delta \le 1$, then $|x - 2| \lt 1$, so $1 \lt x \lt 3$ and $|x + 2| \lt 5$.

Thus $|x^2 - 4| = |x - 2| \cdot |x + 2| \lt 5|x - 2|$.

Choose $\delta = \min\!\left(1, \frac{\epsilon}{5}\right)$.

**Proof.** Let $\epsilon \gt 0$. Choose $\delta = \min\!\left(1, \frac{\epsilon}{5}\right)$. If
$0 \lt |x - 2| \lt \delta$, then:

$$
|x^2 - 4| = |x - 2| \cdot |x + 2| \lt \delta \cdot 5 \le \frac{\epsilon}{5} \cdot 5 = \epsilon
$$

Therefore, $\displaystyle\lim_{x \to 2} x^2 = 4$. $\blacksquare$

:::

:::info[Example]

Prove that $\displaystyle\lim_{x \to a} \sqrt{x} = \sqrt{a}$ for $a \gt 0$.

We need $|\sqrt{x} - \sqrt{a}| \lt \epsilon$ whenever $0 \lt |x - a| \lt \delta$.

Rationalise:
$|\sqrt{x} - \sqrt{a}| = \frac{|x - a|}{\sqrt{x} + \sqrt{a}} \le \frac{|x - a|}{\sqrt{a}}$.

We want $\frac{|x - a|}{\sqrt{a}} \lt \epsilon$, so $|x - a| \lt \epsilon\sqrt{a}$.

Choose $\delta = \min(a, \epsilon\sqrt{a})$. The condition $\delta \le a$ ensures $x \gt 0$ so that
$\sqrt{x}$ is defined.

**Proof.** Let $\epsilon \gt 0$. Choose $\delta = \min(a, \epsilon\sqrt{a})$. If
$0 \lt |x - a| \lt \delta$, then $x \gt 0$ and:

$$
|\sqrt{x} - \sqrt{a}| = \frac{|x - a|}{\sqrt{x} + \sqrt{a}} \le \frac{|x - a|}{\sqrt{a}} \lt \frac{\epsilon\sqrt{a}}{\sqrt{a}} = \epsilon
$$

Therefore, $\displaystyle\lim_{x \to a} \sqrt{x} = \sqrt{a}$. $\blacksquare$

:::

### Strategy for Epsilon-Delta Proofs

The general approach is:

1. Start with $|f(x) - L|$ and try to bound it in terms of $|x - a|$.
2. If $f$ involves products, use the "restrict delta" technique: bound each factor separately.
3. If $f$ involves roots, rationalise and use the fact that $\sqrt{x} + \sqrt{a} \ge \sqrt{a}$.
4. Choose $\delta = \min(\mathrm{bound}, \epsilon / \mathrm{constant})$ to handle both the restriction
   and the $\epsilon$ requirement.

## Continuity (CED Unit 1)

A function $f$ is **continuous at $a$** if all three conditions hold:

1. $f(a)$ is defined
2. $\displaystyle\lim_{x \to a} f(x)$ exists
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

**Theorem.** Every polynomial function is continuous everywhere. Every rational function is
continuous on its domain.

**Theorem (Continuity of compositions).** If $g$ is continuous at $a$ and $f$ is continuous at
$g(a)$, then $f \circ g$ is continuous at $a$.

This theorem justifies statements like "$\sqrt{x^2 + 1}$ is continuous everywhere" -- $x^2 + 1$ is a
polynomial (continuous everywhere) and $\sqrt{x}$ is continuous at all positive values (and
$x^2 + 1 \ge 1 \gt 0$).

### Types of Discontinuities

| Type                     | Description                                                            | Example                                          |
| ------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------ |
| Removable                | Limit exists but $f(a)$ is undefined or $f(a) \ne \lim_{x \to a} f(x)$ | $f(x) = \frac{x^2 - 1}{x - 1}$ at $x=1$          |
| Jump (Non-removable)     | One-sided limits exist but are not equal                               | $f(x) = \lfloor x \rfloor$                       |
| Infinite (Non-removable) | Function approaches $\pm\infty$                                        | $f(x) = \frac{1}{x}$ at $x = 0$                  |
| Oscillating              | Function oscillates without approaching a single value                 | $f(x) = \sin\!\left(\frac{1}{x}\right)$ at $x=0$ |

### Intermediate Value Theorem (IVT)

If $f$ is continuous on $[a, b]$ and $k$ is any number between $f(a)$ and $f(b)$, then there exists
at least one $c \in (a, b)$ such that $f(c) = k$.

:::info[Example]

Show that $f(x) = x^3 + x - 1$ has a root in $(0, 1)$.

$f(0) = -1 \lt 0$ and $f(1) = 1 \gt 0$.

Since $f$ is continuous on $[0, 1]$ and $0$ is between $f(0)$ and $f(1)$, by the IVT there exists
$c \in (0, 1)$ such that $f(c) = 0$.

:::

**Application of IVT to bisection.** The IVT motivates the bisection method for root-finding: if
$f(a)$ and $f(b)$ have opposite signs, a root exists in $(a, b)$. Halving the interval and checking
signs converges to the root.

:::info[Example]

Show that $f(x) = e^x - 3 - x$ has at least one root in $(1, 2)$.

$f(1) = e - 4 \approx -1.282 \lt 0$ and $f(2) = e^2 - 5 \approx 2.389 \gt 0$.

Since $f$ is continuous (as a sum of continuous functions) on $[1, 2]$, by the IVT there exists
$c \in (1, 2)$ such that $f(c) = 0$. $\blacksquare$

:::

**Corollary of the IVT.** If $f$ is continuous on $[a, b]$ and $f(a) \cdot f(b) \lt 0$, then $f$ has
at least one zero in $(a, b)$.

### Extreme Value Theorem

If $f$ is continuous on a closed interval $[a, b]$, then $f$ attains both an absolute maximum and an
absolute minimum on $[a, b]$.

:::warning
The EVT requires continuity on a **closed** interval. The function $f(x) = \frac{1}{x}$
on $(0, 1)$ has no maximum, despite being continuous.
:::

### Boundedness Theorem

If $f$ is continuous on a closed interval $[a, b]$, then $f$ is bounded on $[a, b]$ -- that is,
there exist real numbers $m$ and $M$ such that $m \le f(x) \le M$ for all $x \in [a, b]$.

This follows directly from the EVT: the absolute minimum and maximum serve as the bounds.

## Asymptotes and Limits at Infinity

### Vertical Asymptotes

If $\displaystyle\lim_{x \to a^+} f(x) = \pm\infty$ or
$\displaystyle\lim_{x \to a^-} f(x) = \pm\infty$, then $x = a$ is a vertical asymptote.

For rational functions $\frac{P(x)}{Q(x)}$, vertical asymptotes occur at zeros of $Q(x)$ that are
not also zeros of $P(x)$ (after cancellation).

### Horizontal Asymptotes

- If $\displaystyle\lim_{x \to \pm\infty} f(x) = L$, then $y = L$ is a horizontal asymptote.
- A function can have at most two horizontal asymptotes (one as $x \to \infty$, one as
  $x \to -\infty$).

### Oblique (Slant) Asymptotes

If $\deg P = \deg Q + 1$ in a rational function, perform polynomial long division. The quotient
(excluding remainder) gives the slant asymptote.

:::info[Example]

Find the asymptotes of $\displaystyle f(x) = \frac{2x^2 + 3x - 1}{x + 1}$.

**Vertical asymptote:** Set denominator to zero: $x + 1 = 0 \implies x = -1$.

**Slant asymptote:** Perform long division:

$$
\frac{2x^2 + 3x - 1}{x + 1} = 2x + 1 - \frac{2}{x + 1}
$$

The slant asymptote is $y = 2x + 1$.

:::

:::info[Example]

Find the horizontal asymptotes of $\displaystyle f(x) = \frac{3e^x}{e^x + 1}$.

As $x \to \infty$: Divide numerator and denominator by $e^x$:

$$
\frac{3}{1 + e^{-x}} \to \frac{3}{1 + 0} = 3
$$

As $x \to -\infty$: Divide numerator and denominator by $e^x$:

$$
\frac{3e^x}{e^x + 1} \to \frac{0}{0 + 1} = 0
$$

Horizontal asymptotes: $y = 3$ (as $x \to \infty$) and $y = 0$ (as $x \to -\infty$).

:::

## L'Hopital's Rule (CED BC and AB Unit 1.15)

If $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)}$ produces the indeterminate form $\frac{0}{0}$ or
$\frac{\pm\infty}{\pm\infty}$, and $f$ and $g$ are differentiable near $a$ with $g'(x) \ne 0$ near
$a$, then:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

provided the limit on the right exists.

**When to use L'Hopital's Rule.** It applies ONLY to $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$
forms. Using it on a determinate form (e.g., $\frac{3}{5}$) is an error.

**When L'Hopital's Rule fails.** If the limit $\displaystyle\lim_{x \to a} \frac{f'(x)}{g'(x)}$ does
not exist, this does NOT mean the original limit does not exist. L'Hopital's Rule only gives a
conclusion when the right-hand limit exists (or is $\pm\infty$).

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x}$.

Direct substitution gives $\frac{0}{0}$. Apply L'Hopital's Rule:

$$
\lim_{x \to 0} \frac{e^x - 1}{x} = \lim_{x \to 0} \frac{e^x}{1} = 1
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x^2}$.

Direct substitution gives $\frac{0}{0}$:

$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{\sin x}{2x} = \lim_{x \to 0} \frac{\cos x}{2} = \frac{1}{2}
$$

Note that we applied L'Hopital's Rule twice, since the second attempt still gave $\frac{0}{0}$.

:::

:::info[Example]

Find $\displaystyle\lim_{x \to \infty} \frac{\ln x}{\sqrt{x}}$.

This is $\frac{\infty}{\infty}$. Apply L'Hopital's Rule:

$$
\lim_{x \to \infty} \frac{1/x}{1/(2\sqrt{x})} = \lim_{x \to \infty} \frac{2\sqrt{x}}{x} = \lim_{x \to \infty} \frac{2}{\sqrt{x}} = 0
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{x - \sin x}{x^3}$.

Direct substitution gives $\frac{0}{0}$. Apply L'Hopital's Rule three times:

$$
\lim_{x \to 0} \frac{x - \sin x}{x^3} = \lim_{x \to 0} \frac{1 - \cos x}{3x^2} = \lim_{x \to 0} \frac{\sin x}{6x} = \lim_{x \to 0} \frac{\cos x}{6} = \frac{1}{6}
$$

:::

:::info[Example]

Find $\displaystyle\lim_{x \to 0^+} x \ln x$.

This has the form $0 \cdot (-\infty)$, which is indeterminate. Rewrite as a quotient:

$$
x \ln x = \frac{\ln x}{1/x}
$$

Now it is $\frac{-\infty}{\infty}$. Apply L'Hopital's Rule:

$$
\lim_{x \to 0^+} \frac{\ln x}{1/x} = \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0
$$

:::

## Limits of Piecewise Functions

:::info[Example]

Let $f(x) = \begin{cases} x^2 + 1 & x \lt 2 \\ 3x - 1 & x \ge 2 \end{cases}$.

Find $\displaystyle\lim_{x \to 2} f(x)$ and determine if $f$ is continuous at $x = 2$.

Left-hand limit: $\displaystyle\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x^2 + 1) = 5$.

Right-hand limit: $\displaystyle\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (3x - 1) = 5$.

Since both one-sided limits equal 5: $\displaystyle\lim_{x \to 2} f(x) = 5$.

Check continuity: $f(2) = 3(2) - 1 = 5 = \lim_{x \to 2} f(x)$.

Therefore, $f$ is continuous at $x = 2$.

:::

:::info[Example]

Let $g(x) = \begin{cases} \frac{x^2 - 4}{x - 2} & x \neq 2 \\ k & x = 2 \end{cases}$.

Find $k$ such that $g$ is continuous at $x = 2$.

$\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = 4$.

For continuity: $k = g(2) = 4$.

:::

:::info[Example]

Let $h(x) = \begin{cases} x^2 + bx + 1 & x \le 0 \\ 2x + 3 & x \gt 0 \end{cases}$.

Find $b$ such that $h$ is continuous at $x = 0$.

Left-hand limit: $\displaystyle\lim_{x \to 0^-} h(x) = 0 + 0 + 1 = 1$.

Right-hand limit: $\displaystyle\lim_{x \to 0^+} h(x) = 3$.

For continuity: $1 = 3$, which is impossible. No value of $b$ makes $h$ continuous at $x = 0$.

This example demonstrates that continuity at a junction point of a piecewise function is not always
achievable -- it depends on whether the one-sided limits can be made to agree.

:::

## Common Pitfalls

1. **Confusing the value of a function at a point with its limit.** The limit at $a$ does not depend
   on $f(a)$ at all. A function can have a limit at a point where it is undefined.
2. **Assuming
   $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)}$
   when the denominator limit is zero.** This is invalid when the denominator limit is zero.
3. **Forgetting to check both one-sided limits** for piecewise functions and absolute values.
4. **Misapplying L'Hopital's Rule** when the limit is not in indeterminate form. Always verify
   $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$ before applying.
5. **Claiming a limit exists when only one-sided limits are checked.** Both must agree.
6. **Using thousands separators in math mode.** Write $1000000$ in math expressions, not
   $1,000,000$.
7. **Using angle brackets in math mode.** Use $\lt$ and $\gt$ commands instead of `<` and `>`.
8. **Forgetting the EVT requires a closed interval.** Open intervals do not guarantee maxima/minima.
9. **Assuming L'Hopital's Rule always works.** If $\displaystyle\lim \frac{f'(x)}{g'(x)}$ does not
   exist, you cannot conclude anything about the original limit. Try algebraic methods instead.
10. **Applying the product rule for limits to indeterminate products.** The limit
    $\displaystyle\lim_{x \to 0^+} x \ln x$ is not $0 \cdot (-\infty) = 0$; it requires rewriting as
    a quotient and applying L'Hopital's Rule.
11. **Forgetting the "restrict delta" step** in epsilon-delta proofs for nonlinear functions. You
    must bound $|x - a|$ before bounding the other factors.

## Practice Questions

1. Find $\displaystyle\lim_{x \to 1} \frac{x^3 - 1}{x - 1}$ by factoring.

2. Prove using the epsilon-delta definition that $\displaystyle\lim_{x \to 4} \sqrt{x} = 2$.

3. Determine all points of discontinuity for $f(x) = \frac{x^2 + x - 6}{x^2 - 9}$ and classify each.

4. Find the horizontal and vertical asymptotes of
   $\displaystyle f(x) = \frac{3x^2 - 2x + 1}{x^2 - 4}$.

5. Use L'Hopital's Rule to find $\displaystyle\lim_{x \to \infty} \frac{\ln x}{\sqrt{x}}$.

6. Let $f(x) = \begin{cases} \frac{x^2 - 9}{x - 3} & x \ne 3 \\ k & x = 3 \end{cases}$. Find the
   value of $k$ that makes $f$ continuous at $x = 3$.

7. Use the squeeze theorem to find $\displaystyle\lim_{x \to 0} x \cos\!\left(\frac{1}{x}\right)$.

8. Given $f(x) = x^3 - 3x + 1$, use the IVT to show there is at least one root in the interval
   $(1, 2)$.

9. Find $\displaystyle\lim_{x \to 0} \frac{\tan x}{x}$.

10. Find $\displaystyle\lim_{x \to 1} \frac{\sqrt{x} - 1}{\sqrt[3]{x} - 1}$.

11. Classify each discontinuity of $\displaystyle f(x) = \frac{x^2 - x}{x^2 - 1}$.

12. Use the IVT to prove that $f(x) = e^x - 3 - x$ has at least one root in the interval $(1, 2)$.

13. Find $\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.

14. Prove that $\displaystyle\lim_{x \to 3} \frac{1}{x} = \frac{1}{3}$ using the epsilon-delta
    definition.

15. Find the value of $c$ such that
    $f(x) = \begin{cases} cx^2 + 2x & x \lt 1 \\ 3x - 1 & x \ge 1 \end{cases}$ is continuous at
    $x = 1$.

16. Evaluate $\displaystyle\lim_{x \to 0} \frac{\sin^2 x}{x^2}$.

17. Find $\displaystyle\lim_{x \to \infty} \left(\sqrt{x^2 + x} - x\right)$.

18. Determine whether $\displaystyle\lim_{x \to 0} \frac{1}{x^2}\sin\!\left(\frac{1}{x}\right)$
    exists.

## Practice Problems

<details>
<summary>Question 1: Epsilon-delta proof</summary>

Using the epsilon-delta definition, prove that $\displaystyle\lim_{x \to 2} (3x - 1) = 5$.

</details>

<details>
<summary>Answer</summary>

We need to show: for every $\epsilon \gt 0$, there exists a $\delta \gt 0$ such that if $0 \lt |x - 2| \lt \delta$, then $|(3x - 1) - 5| \lt \epsilon$.

$|(3x - 1) - 5| = |3x - 6| = 3|x - 2|$.

We need $3|x - 2| \lt \epsilon$, so $|x - 2| \lt \epsilon/3$.

Choose $\delta = \epsilon/3$. Then if $0 \lt |x - 2| \lt \delta$:

$|(3x - 1) - 5| = 3|x - 2| \lt 3\delta = 3(\epsilon/3) = \epsilon$.

Therefore, $\displaystyle\lim_{x \to 2} (3x - 1) = 5$.

</details>

<details>
<summary>Question 2: Limits involving trigonometric functions</summary>

Evaluate $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x \sin x}$.

</details>

<details>
<summary>Answer</summary>

Multiply numerator and denominator by $1 + \cos x$:

$\displaystyle\lim_{x \to 0} \frac{(1 - \cos x)(1 + \cos x)}{x \sin x(1 + \cos x)} = \lim_{x \to 0} \frac{\sin^2 x}{x \sin x(1 + \cos x)}$

$= \lim_{x \to 0} \frac{\sin x}{x(1 + \cos x)} = \lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{1}{1 + \cos x} = 1 \cdot \frac{1}{1 + 1} = \frac{1}{2}$.

</details>

<details>
<summary>Question 3: Continuity of a piecewise function</summary>

Determine whether the following function is continuous at $x = 1$:

$$f(x) = \begin{cases} \frac{x^2 - 1}{x - 1} & \text{if } x \ne 1 \\ 4 & \text{if } x = 1 \end{cases}$$

</details>

<details>
<summary>Answer</summary>

Check three conditions:

1. $f(1) = 4$ (defined).
2. $\displaystyle\lim_{x \to 1} f(x) = \lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} \frac{(x-1)(x+1)}{x-1} = \lim_{x \to 1} (x + 1) = 2$.
3. $\lim_{x \to 1} f(x) = 2 \ne f(1) = 4$.

Since the limit does not equal the function value, $f$ is NOT continuous at $x = 1$. To make it continuous, $f(1)$ should be redefined as $2$.

</details>

<details>
<summary>Question 4: Intermediate Value Theorem application</summary>

Prove that the equation $x^5 - 5x + 1 = 0$ has at least one root in the interval $(0, 1)$.

</details>

<details>
<summary>Answer</summary>

Let $f(x) = x^5 - 5x + 1$. This is a polynomial, so it is continuous everywhere.

$f(0) = 0 - 0 + 1 = 1 \gt 0$.

$f(1) = 1 - 5 + 1 = -3 \lt 0$.

Since $f$ is continuous on $[0, 1]$ and $f(0) \gt 0$ and $f(1) \lt 0$, by the Intermediate Value Theorem, there exists at least one $c \in (0, 1)$ such that $f(c) = 0$.

</details>

<details>
<summary>Question 5: Squeeze theorem</summary>

Evaluate $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right)$.

</details>

<details>
<summary>Answer</summary>

Since $-1 \le \sin\!\left(\frac{1}{x}\right) \le 1$ for all $x \ne 0$:

$-x^2 \le x^2 \sin\!\left(\frac{1}{x}\right) \le x^2$.

$\displaystyle\lim_{x \to 0} (-x^2) = 0$ and $\displaystyle\lim_{x \to 0} x^2 = 0$.

By the Squeeze Theorem: $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

</details>
