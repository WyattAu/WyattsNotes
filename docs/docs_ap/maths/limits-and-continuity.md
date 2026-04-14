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

### Common Limits

| Limit                                                             | Value |
| ----------------------------------------------------------------- | ----- |
| $\displaystyle\lim_{x \to 0} \frac{\sin x}{x}$                    | $1$   |
| $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x}$                | $0$   |
| $\displaystyle\lim_{x \to \infty} \frac{1}{x}$                    | $0$   |
| $\displaystyle\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x$ | $e$   |
| $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x}$                   | $1$   |
| $\displaystyle\lim_{x \to 0} \frac{\ln(1+x)}{x}$                  | $1$   |

## The Squeeze Theorem

If $g(x) \le f(x) \le h(x)$ for all $x$ near $a$ (except possibly at $a$), and:

$$
\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L
$$

then $\displaystyle\lim_{x \to a} f(x) = L$.

:::info[Example]

Show that $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

Since $-1 \le \sin\!\left(\frac{1}{x}\right) \le 1$, we have
$-x^2 \le x^2 \sin\!\left(\frac{1}{x}\right) \le x^2$.

Both $\displaystyle\lim_{x \to 0}(-x^2) = 0$ and $\displaystyle\lim_{x \to 0} x^2 = 0$.

By the squeeze theorem, $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

:::

## Algebraic Limit Properties

If $\displaystyle\lim_{x \to a} f(x) = L$ and $\displaystyle\lim_{x \to a} g(x) = M$, then:

1. $\displaystyle\lim_{x \to a} [f(x) + g(x)] = L + M$
2. $\displaystyle\lim_{x \to a} [f(x) - g(x)] = L - M$
3. $\displaystyle\lim_{x \to a} [c \cdot f(x)] = cL$
4. $\displaystyle\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M$
5. $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}$, provided $M \ne 0$

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
  $\displaystyle\lim_{x \to \pm\infty} \frac{P(x)}{Q(x)} = \frac{\text{leading coeff of } P}{\text{leading coeff of } Q}$
- If $\deg P \gt \deg Q$: the limit is $\pm\infty$

:::info[Example]

Find $\displaystyle\lim_{x \to \infty} \frac{3x^2 - 5x + 2}{7x^2 + x - 1}$.

Since both polynomials are degree 2, the limit equals the ratio of leading coefficients:

$$
\lim_{x \to \infty} \frac{3x^2 - 5x + 2}{7x^2 + x - 1} = \frac{3}{7}
$$

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

### Rationalizing

For expressions involving radicals, multiply by the conjugate.

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}$.

Multiply numerator and denominator by the conjugate $\sqrt{x+4} + 2$:

$$
\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x} \cdot \frac{\sqrt{x+4} + 2}{\sqrt{x+4} + 2} = \lim_{x \to 0} \frac{x + 4 - 4}{x(\sqrt{x+4} + 2)} = \lim_{x \to 0} \frac{x}{x(\sqrt{x+4} + 2)} = \frac{1}{4}
$$

:::

## Formal Definition of a Limit (Epsilon-Delta)

The precise definition: $\displaystyle\lim_{x \to a} f(x) = L$ means that for every
$\epsilon \gt 0$, there exists a $\delta \gt 0$ such that:

$$
0 \lt |x - a| \lt \delta \implies |f(x) - L| \lt \epsilon
$$

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

## Continuity (CED Unit 1)

A function $f$ is **continuous at $a$** if all three conditions hold:

1. $f(a)$ is defined
2. $\displaystyle\lim_{x \to a} f(x)$ exists
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

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

### Extreme Value Theorem

If $f$ is continuous on a closed interval $[a, b]$, then $f$ attains both an absolute maximum and an
absolute minimum on $[a, b]$.

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

## L'Hopital's Rule (CED BC and AB Unit 1.15)

If $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)}$ produces the indeterminate form $\frac{0}{0}$ or
$\frac{\pm\infty}{\pm\infty}$, and $f$ and $g$ are differentiable near $a$ with $g'(x) \ne 0$ near
$a$, then:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

provided the limit on the right exists.

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
6. **Using thousands separators in math mode.** Write $1,000,000$ as $1000000$ in math expressions.
7. **Using angle brackets in math mode.** Use $\lt$ and $\gt$ commands instead of `<` and `>`.

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
