---
title: Integration
description:
  "A-Level Mathematics notes on Integration: Board Coverage; 1.1 Definition; 2. The Fundamental Theorem of Calculus; 2.1 Sketch proof of Part 2."
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: integration
---

## Board Coverage

| Board      | Paper      | Notes                                                      |
| ---------- | ---------- | ---------------------------------------------------------- |
| AQA        | Paper 1, 2 | Basic integration in P1; by parts, substitution in P2      |
| Edexcel    | P1, P2     | Similar split                                              |
| OCR (A)    | Paper 1, 2 | Includes trapezium rule                                    |
| CIE (9709) | P1, P2, P3 | Basic in P1; by parts/substitution in P2/P3; further in P3 |

:::info The formula booklet provides standard integrals. You must know how to apply integration
techniques and when to use each method.
:::

<hr />

## 1. Integration as Area: Riemann Sums

### 1.1 Definition

**Definition.** The **definite integral** of $f$ from $a$ to $b$ is defined as the limit of Riemann
sums:

$$\int_a^b f(x)\,dx = \lim_{n\to\infty}\sum_{i=1}^{n}f(x_i^*)\,\Delta x$$

where $[a,b]$ is divided into $n$ subintervals of width $\Delta x = \dfrac{b-a}{n}$, and $x_i^*$ is
a sample point in the $i$-th subinterval.

**Geometric picture.** We divide the area under $y = f(x)$ between $x = a$ and $x = b$ into $n$ thin
rectangles. The sum of their areas approximates the total area. As $n \to \infty$ (rectangles become
infinitely thin), the approximation becomes exact.

- If we take the **upper** rectangle height (right endpoint), we get an **upper sum**.
- If we take the **lower** rectangle height (left endpoint), we get a **lower sum**.
- The integral exists when the upper and lower sums converge to the same limit.

**Intuition.** Integration is "accumulation" — adding up infinitely many infinitesimal
contributions. If $f(x)$ is a rate (like velocity), then $\int_a^b f(x)\,dx$ is the total change
(displacement).

<DesmosGraph title="Integration as Area Under a Curve" expressions={["int_{0}^{b} x^2 dx"]}
width={800} height={500} /> Increase the number of rectangles to see how Riemann sums converge to
the exact area under the curve. Compare the upper and lower sums as the partition gets finer.

<hr />

## 2. The Fundamental Theorem of Calculus

**Theorem (FTC).** If $f$ is continuous on $[a,b]$, then

$$(\mathrm{Part 1})\quad \frac{d}{dx}\int_a^x f(t)\,dt = f(x)$$

$$(\mathrm{Part 2})\quad \int_a^b f(x)\,dx = F(b) - F(a)$$

where $F$ is any antiderivative of $f$ (i.e., $F'(x) = f(x)$).

### 2.1 Sketch proof of Part 2

Let $G(x) = \int_a^x f(t)\,dt$. By Part 1, $G'(x) = f(x)$.

If $F$ is any other antiderivative of $f$, then $F'(x) = G'(x) = f(x)$, so $F(x) - G(x) = C$ (a
constant).

$$F(x) = G(x) + C \implies F(b) - F(a) = G(b) - G(a) = \int_a^b f(t)\,dt - 0$$

Hence $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$. $\blacksquare$

:::info The Fundamental Theorem of Calculus is one of the most important results in all of
mathematics. It connects the two seemingly unrelated operations of differentiation (finding rates of
change) and integration (finding areas).
:::

<hr />

## 3. Standard Integrals

Each standard integral can be derived by reversing the corresponding differentiation.

### 3.1 Derivation of key standard integrals

**Power rule.** Since $\dfrac{d}{dx}\left(\dfrac{x^{n+1}}{n+1}\right) = x^n$ for $n \neq -1$:

$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1$$

**Reciprocal.** Since $\dfrac{d}{dx}\ln|x| = \dfrac{1}{x}$:

$$\int \frac{1}{x}\,dx = \ln|x| + C$$

**Exponential.** Since $\dfrac{d}{dx}e^{kx} = ke^{kx}$:

$$\int e^{kx}\,dx = \frac{1}{k}e^{kx} + C$$

**Trigonometric.** Since $\dfrac{d}{dx}\sin x = \cos x$:

$$\int \cos x\,dx = \sin x + C$$

$$\int \sin x\,dx = -\cos x + C$$

$$\int \sec^2 x\,dx = \tan x + C$$

### 3.2 Summary table

| $f(x)$              | $\int f(x)\,dx$            |
| ------------------- | -------------------------- | --- | ---- |
| $x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n+1} + C$ |
| $1/x$               | $\ln                       | x   | + C$ |
| $e^{kx}$            | $\dfrac{1}{k}e^{kx} + C$   |
| $\cos x$            | $\sin x + C$               |
| $\sin x$            | $-\cos x + C$              |
| $\sec^2 x$          | $\tan x + C$               |

<hr />

## 4. Definite Integration and Areas

### 4.1 Area under a curve

The area between $y = f(x)$, the $x$-axis, $x = a$, and $x = b$ is

$$A = \int_a^b f(x)\,dx$$

provided $f(x) \geq 0$ on $[a,b]$.

### 4.2 Area between a curve and the $x$-axis

If $f(x)$ changes sign on $[a,b]$, we must split the integral at each root:

$$A = \int_a^b |f(x)|\,dx$$

:::warning $\int_a^b f(x)\,dx$ gives the **signed area** (negative below the $x$-axis). To find the
actual geometric area, take the absolute value and integrate separately over regions where $f$ is
positive and negative.
:::

### 4.3 Area between two curves

The area between $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$ (where $f(x) \geq g(x)$) is

$$A = \int_a^b [f(x) - g(x)]\,dx$$

### 4.4 Area under a parametric curve

$$A = \int_{t_1}^{t_2} y\,\frac{dx}{dt}\,dt$$

<hr />

## 5. Integration by Substitution

### 5.1 The method

**Theorem.** $\displaystyle\int f(g(x))g'(x)\,dx = F(g(x)) + C$ where $F' = f$.

### 5.2 Proof via the chain rule

Let $u = g(x)$. By the chain rule,
$\dfrac{d}{dx}F(u) = F'(u)\dfrac{du}{dx} = f(u)\dfrac{du}{dx} = f(g(x))g'(x)$.

Therefore $\int f(g(x))g'(x)\,dx = F(g(x)) + C$. $\blacksquare$

**In practice:**

1. Choose a substitution $u = g(x)$.
2. Compute $du = g'(x)\,dx$.
3. Rewrite the integral entirely in terms of $u$.
4. Integrate, then substitute back.

**Example.** Find $\displaystyle\int 2x\sqrt{x^2+1}\,dx$.

Let $u = x^2 + 1$, $du = 2x\,dx$.

$$\int 2x\sqrt{x^2+1}\,dx = \int \sqrt{u}\,du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2+1)^{3/2} + C$$

:::tip When choosing a substitution, look for a function and its derivative. If you see
$\sqrt{g(x)}$ and $g'(x)$ in the integrand, try $u = g(x)$.
:::

### 5.3 Definite integrals with substitution

For a definite integral, you can either:

- Substitute back to $x$ before evaluating, or
- Change the limits: when $x = a$, $u = g(a)$; when $x = b$, $u = g(b)$.

<hr />

## 6. Integration by Parts

### 6.1 The formula

**Theorem.** $\displaystyle\int u\,dv = uv - \int v\,du$

### 6.2 Proof via the product rule

From the product rule: $\dfrac{d}{dx}(uv) = u\dfrac{dv}{dx} + v\dfrac{du}{dx}$.

Integrating both sides:

$$uv = \int u\frac{dv}{dx}\,dx + \int v\frac{du}{dx}\,dx$$

$$\int u\frac{dv}{dx}\,dx = uv - \int v\frac{du}{dx}\,dx$$

i.e., $\displaystyle\int u\,dv = uv - \int v\,du$. $\blacksquare$

### 6.3 Choosing $u$ and $dv$

Use the mnemonic **LIATE** (Logarithmic, Inverse trig, Algebraic, Trig, Exponential). Choose $u$
from the leftmost category that appears.

:::warning A common mistake is choosing the wrong assignment. If the integral gets more complicated
after applying the formula, swap $u$ and $dv$.
:::

**Example.** Find $\displaystyle\int x e^x\,dx$.

Let $u = x$, $dv = e^x\,dx$. Then $du = dx$, $v = e^x$.

$$\int x e^x\,dx = x e^x - \int e^x\,dx = x e^x - e^x + C = e^x(x-1) + C$$

### 6.4 Reduction formulas

Integration by parts can produce **reduction formulas** relating $I_n$ to $I_{n-1}$.

**Example.** Find a reduction formula for $I_n = \displaystyle\int x^n e^x\,dx$.

Let $u = x^n$, $dv = e^x\,dx$. Then $du = nx^{n-1}\,dx$, $v = e^x$.

$$I_n = x^n e^x - n\int x^{n-1} e^x\,dx = x^n e^x - nI_{n-1}$$

This gives $I_n = x^n e^x - nI_{n-1}$, allowing us to reduce any $I_n$ to $I_0 = e^x + C$.

<hr />

## 7. The Trapezium Rule

### 7.1 Formula

To approximate $\displaystyle\int_a^b f(x)\,dx$, divide $[a,b]$ into $n$ equal strips of width
$h = \dfrac{b-a}{n}$:

$$\int_a^b f(x)\,dx \approx \frac{h}{2}\left[y_0 + 2y_1 + 2y_2 + \cdots + 2y_{n-1} + y_n\right]$$

where $y_i = f(a + ih)$.

### 7.2 Derivation

Each strip is approximated by a trapezium. The area of the $i$-th trapezium is:

$$A_i = \frac{h}{2}(y_{i-1} + y_i)$$

Summing all trapezia:

$$
\begin{aligned}
\mathrm{Total} &= \frac{h}{2}(y_0+y_1) + \frac{h}{2}(y_1+y_2) + \cdots + \frac{h}{2}(y_{n-1}+y_n) \\
&= \frac{h}{2}\left[y_0 + 2y_1 + 2y_2 + \cdots + 2y_{n-1} + y_n\right]
\end{aligned}
$$

### 7.3 Error bound

If $f''$ is continuous on $[a,b]$ and $|f''(x)| \leq M$ for all $x \in [a,b]$, then the error $E$
satisfies

$$|E| \leq \frac{(b-a)^3}{12n^2}M$$

**Proof (sketch).** For a single strip of width $h$, the trapezium rule gives area
$\dfrac{h}{2}[f(a) + f(a+h)]$, while the true area is $\int_a^{a+h}f(x)\,dx$. By Taylor's theorem,
the error per strip is $-\dfrac{h^3}{12}f''(\xi)$ for some $\xi \in (a, a+h)$. Summing $n$ strips
and using the bound $|f''| \leq M$:

$$|E| \leq n \cdot \frac{h^3}{12} M = n \cdot \frac{(b-a)^3}{12n^3}M = \frac{(b-a)^3}{12n^2}M \quad \blacksquare$$

**Intuition.** The error decreases as $1/n^2$ — doubling the number of strips quarters the error.
The error also depends on how curved the function is (via $f''$). For a straight line ($f'' = 0$),
the trapezium rule is exact.

:::tip In exams, more strips means better accuracy. The trapezium rule always underestimates for
concave-down functions and overestimates for concave-up functions.
:::

<hr />

## 8. Further Techniques

### 8.1 Integrating $\dfrac{f'(x)}{f(x)}$

$$\int \frac{f'(x)}{f(x)}\,dx = \ln|f(x)| + C$$

This follows from the substitution $u = f(x)$.

### 8.2 Partial fractions

Rational functions can be integrated by first decomposing into partial fractions.

**Example.**
$\displaystyle\int \frac{1}{x^2-1}\,dx = \int \frac{1}{2}\left(\frac{1}{x-1} - \frac{1}{x+1}\right)dx = \frac{1}{2}\ln\left|\frac{x-1}{x+1}\right| + C$.

### 8.3 $\int \tan x\,dx$ and related

$$\int \tan x\,dx = \int \frac{\sin x}{\cos x}\,dx = -\ln|\cos x| + C = \ln|\sec x| + C$$

<hr />

## Problem Set

<details>
<summary>Problem 1</summary>
Evaluate $\displaystyle\int_0^2 (3x^2 - 4x + 1)\,dx$.
</details>

<details>
<summary>Solution 1</summary>
$$\int_0^2 (3x^2 - 4x + 1)\,dx = \left[x^3 - 2x^2 + x\right]_0^2 = (8 - 8 + 2) - 0 = 2$$

**If you get this wrong, revise:** [Standard Integrals](#3-standard-integrals) — Section 3.

</details>

<details>
<summary>Problem 2</summary>
Find the area enclosed between $y = x^2$ and $y = 2x$.
</details>

<details>
<summary>Solution 2</summary>
Intersection: $x^2 = 2x \implies x(x-2) = 0 \implies x = 0, 2$.

On $[0,2]$: $2x \geq x^2$ (since $2x - x^2 = x(2-x) \geq 0$).

$$A = \int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$$

**If you get this wrong, revise:**
[Definite Integration and Areas](#4-definite-integration-and-areas) — Section 4.3.

</details>

<details>
<summary>Problem 3</summary>
Find $\displaystyle\int \frac{2x}{x^2+3}\,dx$.
</details>

<details>
<summary>Solution 3</summary>
Let $u = x^2 + 3$, $du = 2x\,dx$.

$$\int \frac{2x}{x^2+3}\,dx = \int \frac{1}{u}\,du = \ln|u| + C = \ln(x^2+3) + C$$

(Since $x^2+3 \gt{} 0$, no absolute value needed.)

**If you get this wrong, revise:** [Integration by Substitution](#5-integration-by-substitution) —
Section 5.

</details>

<details>
<summary>Problem 4</summary>
Evaluate $\displaystyle\int_0^{\pi/2} x\sin x\,dx$.
</details>

<details>
<summary>Solution 4</summary>
Integration by parts: $u = x$, $dv = \sin x\,dx$. Then $du = dx$, $v = -\cos x$.

$$\int x\sin x\,dx = -x\cos x + \int \cos x\,dx = -x\cos x + \sin x + C$$

$$\left[-x\cos x + \sin x\right]_0^{\pi/2} = \left(0 + 1\right) - \left(0 + 0\right) = 1$$

**If you get this wrong, revise:** [Integration by Parts](#6-integration-by-parts) — Section 6.

</details>

<details>
<summary>Problem 5</summary>
Use the trapezium rule with 4 strips to approximate $\displaystyle\int_0^2 \frac{1}{1+x^2}\,dx$, and give an error bound given $|f''(x)| \leq 2$ on $[0,2]$.
</details>

<details>
<summary>Solution 5</summary>
$h = \dfrac{2-0}{4} = 0.5$. Values: $y_0 = 1$, $y_1 = 1/(1+0.25) = 0.8$, $y_2 = 1/(1+1) = 0.5$, $y_3 = 1/(1+2.25) \approx 0.3077$, $y_4 = 1/5 = 0.2$.

$$\mathrm{Approx} = \frac{0.5}{2}\left[1 + 2(0.8) + 2(0.5) + 2(0.3077) + 0.2\right] = 0.25[1 + 1.6 + 1.0 + 0.6154 + 0.2] = 0.25 \times 4.4154 \approx 1.104$$

Error bound:
$|E| \leq \dfrac{2^3}{12 \times 16} \times 2 = \dfrac{8}{192} \times 2 = \dfrac{1}{12} \approx 0.0833$.

**If you get this wrong, revise:** [The Trapezium Rule](#7-the-trapezium-rule) — Section 7.

</details>

<details>
<summary>Problem 6</summary>
Find $\displaystyle\int \frac{x}{\sqrt{x+1}}\,dx$.
</details>

<details>
<summary>Solution 6</summary>
Let $u = x+1$, so $x = u-1$ and $dx = du$.

$$\int \frac{u-1}{\sqrt{u}}\,du = \int(u^{1/2} - u^{-1/2})\,du = \frac{2}{3}u^{3/2} - 2u^{1/2} + C = \frac{2}{3}(x+1)^{3/2} - 2(x+1)^{1/2} + C$$

**If you get this wrong, revise:** [Integration by Substitution](#5-integration-by-substitution) —
Section 5.

</details>

<details>
<summary>Problem 7</summary>
Find a reduction formula for $I_n = \displaystyle\int_0^{\pi/2} \sin^n x\,dx$ for $n \geq 2$.
</details>

<details>
<summary>Solution 7</summary>
$I_n = \int_0^{\pi/2}\sin^{n-1}x \cdot \sin x\,dx$.

Let $u = \sin^{n-1}x$, $dv = \sin x\,dx$. $du = (n-1)\sin^{n-2}x\cos x\,dx$, $v = -\cos x$.

$$I_n = \left[-\sin^{n-1}x\cos x\right]_0^{\pi/2} + (n-1)\int_0^{\pi/2}\sin^{n-2}x\cos^2 x\,dx$$

The boundary term vanishes (since $\cos(\pi/2) = 0$ and $\sin 0 = 0$). Using
$\cos^2 x = 1 - \sin^2 x$:

$$I_n = (n-1)\int_0^{\pi/2}\sin^{n-2}x(1-\sin^2 x)\,dx = (n-1)(I_{n-2} - I_n)$$

$$I_n = (n-1)I_{n-2} - (n-1)I_n$$ $$nI_n = (n-1)I_{n-2}$$ $$I_n = \frac{n-1}{n}I_{n-2}$$

**If you get this wrong, revise:** [Reduction Formulas](#64-reduction-formulas) — Section 6.4.

</details>

<details>
<summary>Problem 8</summary>
Find the total area between $y = x(x-2)(x+1)$ and the $x$-axis.
</details>

<details>
<summary>Solution 8</summary>
$y = x(x-2)(x+1) = x^3 - x^2 - 2x$. Roots at $x = -1, 0, 2$.

$$\int_{-1}^0 (x^3-x^2-2x)\,dx = \left[\frac{x^4}{4}-\frac{x^3}{3}-x^2\right]_{-1}^0 = 0 - \left(\frac{1}{4}+\frac{1}{3}-1\right) = -\left(\frac{3+4-12}{12}\right) = \frac{5}{12}$$

$$\int_0^2 (x^3-x^2-2x)\,dx = \left[\frac{x^4}{4}-\frac{x^3}{3}-x^2\right]_0^2 = \left(4-\frac{8}{3}-4\right) - 0 = -\frac{8}{3}$$

Total area = $\dfrac{5}{12} + \dfrac{8}{3} = \dfrac{5+32}{12} = \dfrac{37}{12}$.

**If you get this wrong, revise:**
[Definite Integration and Areas](#4-definite-integration-and-areas) — Section 4.2.

</details>

<details>
<summary>Problem 9</summary>
Find $\displaystyle\int e^{2x}\cos x\,dx$.
</details>

<details>
<summary>Solution 9</summary>
Apply integration by parts twice. Let $I = \int e^{2x}\cos x\,dx$.

First: $u = e^{2x}$, $dv = \cos x\,dx$. $du = 2e^{2x}\,dx$, $v = \sin x$.

$I = e^{2x}\sin x - 2\int e^{2x}\sin x\,dx$.

Second: $u = e^{2x}$, $dv = \sin x\,dx$. $du = 2e^{2x}\,dx$, $v = -\cos x$.

$\int e^{2x}\sin x\,dx = -e^{2x}\cos x + 2\int e^{2x}\cos x\,dx = -e^{2x}\cos x + 2I$.

$I = e^{2x}\sin x - 2(-e^{2x}\cos x + 2I) = e^{2x}\sin x + 2e^{2x}\cos x - 4I$.

$5I = e^{2x}(\sin x + 2\cos x)$.

$$I = \frac{e^{2x}(\sin x + 2\cos x)}{5} + C$$

**If you get this wrong, revise:** [Integration by Parts](#6-integration-by-parts) — Section 6.

</details>

<details>
<summary>Problem 10</summary>
Evaluate $\displaystyle\int_1^e \frac{\ln x}{x}\,dx$.
</details>

<details>
<summary>Solution 10</summary>
Let $u = \ln x$, $du = \dfrac{1}{x}\,dx$.

$$\int \frac{\ln x}{x}\,dx = \int u\,du = \frac{u^2}{2} + C = \frac{(\ln x)^2}{2} + C$$

$$\left[\frac{(\ln x)^2}{2}\right]_1^e = \frac{1}{2} - 0 = \frac{1}{2}$$

**If you get this wrong, revise:** [Integration by Substitution](#5-integration-by-substitution) —
Section 5.

</details>

<details>
<summary>Problem 11</summary>
The curve $C$ has parametric equations $x = t^2$, $y = 2t$ for $0 \leq t \leq 3$. Find the area under $C$.
</details>

<details>
<summary>Solution 11</summary>
$$A = \int_{t=0}^{t=3} y\,\frac{dx}{dt}\,dt = \int_0^3 2t \cdot 2t\,dt = \int_0^3 4t^2\,dt = \left[\frac{4t^3}{3}\right]_0^3 = \frac{4 \times 27}{3} = 36$$

**If you get this wrong, revise:**
[Definite Integration and Areas](#4-definite-integration-and-areas) — Section 4.4.

</details>

<details>
<summary>Problem 12</summary>
Find $\displaystyle\int \frac{3x+5}{x^2+4x+3}\,dx$.
</details>

<details>
<summary>Solution 12</summary>
$x^2 + 4x + 3 = (x+1)(x+3)$.

$$\frac{3x+5}{(x+1)(x+3)} = \frac{A}{x+1} + \frac{B}{x+3}$$

$3x + 5 = A(x+3) + B(x+1)$.

$x = -1$: $2 = 2A \implies A = 1$. $x = -3$: $-4 = -2B \implies B = 2$.

$$\int \frac{1}{x+1} + \frac{2}{x+3}\,dx = \ln|x+1| + 2\ln|x+3| + C$$

**If you get this wrong, revise:** [Partial Fractions](#82-partial-fractions) — Section 8.2.

</details>

<details>
<summary>Problem 13</summary>
Sketch proof: explain why $\displaystyle\int_{-a}^a f(x)\,dx = 0$ when $f$ is an odd function.
</details>

<details>
<summary>Solution 13</summary>
If $f$ is odd, then $f(-x) = -f(x)$.

$$\int_{-a}^a f(x)\,dx = \int_{-a}^0 f(x)\,dx + \int_0^a f(x)\,dx$$

Let $u = -x$ in the first integral:

$$\int_{-a}^0 f(x)\,dx = \int_a^0 f(-u)(-du) = \int_0^a -f(u)\,du = -\int_0^a f(u)\,du$$

Therefore $\displaystyle\int_{-a}^a f(x)\,dx = -\int_0^a f(x)\,dx + \int_0^a f(x)\,dx = 0$.
$\blacksquare$

**If you get this wrong, revise:**
[Definite Integration and Areas](#4-definite-integration-and-areas) — Section 4.

</details>

:::

:::

:::

:::

:::

:::
