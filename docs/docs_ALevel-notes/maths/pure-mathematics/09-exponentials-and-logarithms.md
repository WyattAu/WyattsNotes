---
title: Exponentials and Logarithms
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: exponentials-and-logarithms
---

## Board Coverage

| Board      | Paper      | Notes                                             |
| ---------- | ---------- | ------------------------------------------------- |
| AQA        | Paper 1, 2 | Exponentials in P1; modelling, natural logs in P2 |
| Edexcel    | P1, P2     | Similar split                                     |
| OCR (A)    | Paper 1, 2 | Includes $e^x$ and $\ln x$ graphs                 |
| CIE (9709) | P1, P2, P3 | Exponentials/logarithms in P1; further in P3      |

:::info
The formula booklet gives the laws of logarithms and the derivatives of $e^x$ and $\ln x$. You must know how to use them and where they come from.
:::

---

## 1. The Number $e$

### 1.1 Definition of $e$

**Definition.** The number $e$ is defined by the limit

$$e = \lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n$$

To see that this limit converges, consider a sequence of values:

| $n$    | $\left(1+\frac{1}{n}\right)^n$ |
| ------ | ------------------------------ |
| 1      | 2                              |
| 2      | 2.25                           |
| 10     | 2.5937...                      |
| 100    | 2.7048...                      |
| 1000   | 2.7169...                      |
| 10000  | 2.7181...                      |
| $10^6$ | 2.71828...                     |

The sequence is increasing and bounded above (by 3, as can be shown via the binomial theorem), so by the Monotone Convergence Theorem it converges. Its value is

$$e \approx 2.718281828459045...$$

### 1.2 Alternative characterisations

The number $e$ can equivalently be characterised as the unique positive real number such that

$$\frac{d}{dx}e^x \bigg|_{x=0} = 1$$

That is, the exponential function with base $e$ is its own derivative — the only exponential function with this property. We prove this rigorously in the next section.

:::tip
When a question asks you to "show that $e \approx 2.718$" or "find the value of $\lim_{n\to\infty}(1+1/n)^n$", substitute a large value of $n$ (e.g., $n=10^6$) and round appropriately.
:::

---

## 2. The Derivative of $e^x$

### 2.1 Proof from the limit definition

**Theorem.** $\dfrac{d}{dx}e^x = e^x$.

**Proof.** By the limit definition of the derivative:

$$\frac{d}{dx}e^x = \lim_{h\to 0}\frac{e^{x+h}-e^x}{h} = \lim_{h\to 0}\frac{e^x(e^h - 1)}{h} = e^x \cdot \lim_{h\to 0}\frac{e^h - 1}{h}$$

So we need to show that $\displaystyle\lim_{h\to 0}\frac{e^h - 1}{h} = 1$.

Let $e^h - 1 = t$, so that $h = \ln(1+t)$. As $h \to 0$, we have $t \to 0$. Then:

$$\lim_{h\to 0}\frac{e^h - 1}{h} = \lim_{t\to 0}\frac{t}{\ln(1+t)} = \lim_{t\to 0}\frac{1}{\frac{\ln(1+t)}{t}}$$

We use the fundamental limit $\displaystyle\lim_{t\to 0}\frac{\ln(1+t)}{t} = 1$ (which follows from the definition of $\ln x$ as the area under $1/u$ from $1$ to $1+t$, plus the squeeze theorem on $1/(1+t) \leq \ln(1+t)/t \leq 1$). Therefore:

$$\lim_{h\to 0}\frac{e^h - 1}{h} = \frac{1}{1} = 1$$

Hence $\dfrac{d}{dx}e^x = e^x \cdot 1 = e^x$. $\blacksquare$

### 2.2 Derivative of $a^x$

For a general base $a > 0$:

$$\frac{d}{dx}a^x = \frac{d}{dx}e^{x\ln a} = (\ln a)\, e^{x\ln a} = a^x \ln a$$

This follows immediately from the chain rule applied to $e^{x\ln a}$.

:::warning
The derivative of $a^x$ is $a^x \ln a$, **not** $x a^{x-1}$. The power rule $\frac{d}{dx}x^n = nx^{n-1}$ applies when the variable is in the **base**, not the exponent.
:::

**Intuition.** The function $e^x$ is the unique function whose rate of change at any point equals its value at that point. If a population of bacteria doubles every hour, its growth rate is proportional to its current size — this is precisely the behaviour of $e^{kt}$. This is why $e$ appears everywhere in nature: compound interest, radioactive decay, population dynamics, and cooling are all governed by exponential functions.

---

## 3. Logarithms as Inverses of Exponentials

### 3.1 Definition

**Definition.** For $a > 0$, $a \neq 1$, the **logarithm** $\log_a x$ is the inverse function of $a^x$:

$$y = \log_a x \iff a^y = x$$

The **natural logarithm** is the logarithm with base $e$, written $\ln x = \log_e x$.

### 3.2 Proof that $a^{\log_a x} = x$ and $\log_a(a^x) = x$

**Theorem.** For all $a > 0$, $a \neq 1$, and all $x > 0$:

$$(\text{i})\quad a^{\log_a x} = x \qquad (\text{ii})\quad \log_a(a^x) = x$$

**Proof of (i).** Let $y = \log_a x$. By definition, $a^y = x$. Substituting $y = \log_a x$: $a^{\log_a x} = x$. $\blacksquare$

**Proof of (ii).** Let $y = a^x$. Then $\log_a y = \log_a(a^x)$. By definition of the logarithm as inverse, $\log_a(a^x) = x$. $\blacksquare$

---

## 4. Laws of Logarithms

### 4.1 Product law

**Theorem.** $\log_a(xy) = \log_a x + \log_a y$

**Proof.** Let $p = \log_a x$ and $q = \log_a y$, so $a^p = x$ and $a^q = y$.

$$xy = a^p \cdot a^q = a^{p+q}$$

Therefore $\log_a(xy) = p + q = \log_a x + \log_a y$. $\blacksquare$

### 4.2 Quotient law

**Theorem.** $\log_a\!\left(\dfrac{x}{y}\right) = \log_a x - \log_a y$

**Proof.** Similarly, with $a^p = x$ and $a^q = y$:

$$\frac{x}{y} = \frac{a^p}{a^q} = a^{p-q}$$

Therefore $\log_a(x/y) = p - q = \log_a x - \log_a y$. $\blacksquare$

### 4.3 Power law

**Theorem.** $\log_a(x^n) = n\log_a x$

**Proof.** Let $p = \log_a x$, so $a^p = x$. Then:

$$x^n = (a^p)^n = a^{pn}$$

Therefore $\log_a(x^n) = pn = n\log_a x$. $\blacksquare$

:::warning
Common errors:

- $\log_a(x+y) \neq \log_a x + \log_a y$ (you cannot split a log of a sum)
- $\log_a x + \log_a y \neq \log_a(x+y)$ (same mistake, reversed)
- $(\log_a x)^n \neq n\log_a x$ (the power law applies to the argument, not the log itself)
  :::

---

## 5. Change of Base Formula

**Theorem.** For all $a, b > 0$ with $a, b \neq 1$:

$$\log_a b = \frac{\ln b}{\ln a} = \frac{\log_{10} b}{\log_{10} a}$$

**Proof.** Let $y = \log_a b$. Then $a^y = b$. Taking natural logarithms of both sides:

$$\ln(a^y) = \ln b$$
$$y \ln a = \ln b$$
$$y = \frac{\ln b}{\ln a}$$

Since $y = \log_a b$, we have $\log_a b = \dfrac{\ln b}{\ln a}$. $\blacksquare$

:::tip
Your calculator likely has $\log$ (base 10) and $\ln$ (base $e$) buttons, but not a general $\log_a$ button. Use the change of base formula to compute logarithms in any base.
:::

**Intuition.** The change of base formula tells us that logarithms in different bases are just constant multiples of each other. If you think of $\log_a x$ as "how many times do I need to use base $a$ to reach $x$?", then $\log_a b / \log_a c$ tells you the ratio of the "number of steps" in base $a$ to reach $b$ versus $c$. The formula shows this ratio is independent of $a$.

---

## 6. The Natural Logarithm as an Area

### 6.1 Integral definition

**Definition.** The natural logarithm function is defined by:

$$\ln x = \int_1^x \frac{1}{t}\, dt, \quad x > 0$$

This means $\ln x$ is the signed area under the curve $y = 1/t$ from $t = 1$ to $t = x$.

### 6.2 Properties from the definition

From this definition, several properties follow immediately:

- $\ln 1 = 0$ (the integral from 1 to 1 of any function is zero)
- $\ln x < 0$ for $0 < x < 1$ (negative area when integrating backwards)
- $\ln x > 0$ for $x > 1$ (positive area)
- $\ln x$ is strictly increasing (the integrand $1/t > 0$)

### 6.3 Derivative of $\ln x$

$$\frac{d}{dx}\ln x = \frac{1}{x}$$

This follows directly from the Fundamental Theorem of Calculus applied to the integral definition.

:::tip
This integral definition is why $\ln x$ is called the "natural" logarithm — it arises naturally from calculus, whereas $\log_{10}$ is an artefact of our base-10 number system.
:::

**Intuition.** Think of $\ln x$ as measuring "how much area does $1/t$ sweep out from 1 to $x$?". Since $1/t$ decreases as $t$ grows, each additional unit of $x$ contributes less area. This is why $\ln x$ grows so slowly — it takes $e^{10} \approx 22026$ to reach $\ln x = 10$.

---

## 7. Solving Exponential Equations

### 7.1 Equations of the form $a^x = b$

**Method.** Take logarithms of both sides:

$$a^x = b \implies x \ln a = \ln b \implies x = \frac{\ln b}{\ln a}$$

### 7.2 Equations of the form $a^{f(x)} = b^{g(x)}$

Take logarithms of both sides:

$$a^{f(x)} = b^{g(x)} \implies f(x)\ln a = g(x)\ln b$$

This gives an equation in $x$ that can often be solved algebraically.

**Example.** Solve $3^{2x+1} = 5^{x-2}$.

$$
\begin{aligned}
(2x+1)\ln 3 &= (x-2)\ln 5 \\
2x\ln 3 + \ln 3 &= x\ln 5 - 2\ln 5 \\
2x\ln 3 - x\ln 5 &= -2\ln 5 - \ln 3 \\
x(2\ln 3 - \ln 5) &= -(2\ln 5 + \ln 3) \\
x &= \frac{2\ln 5 + \ln 3}{\ln 5 - 2\ln 3}
\end{aligned}
$$

### 7.3 Equations reducible to quadratic form

Sometimes we can use a substitution. For example, $e^{2x} + 3e^x - 4 = 0$.

Let $u = e^x$ (note $u > 0$). Then $u^2 + 3u - 4 = 0$, giving $(u+4)(u-1) = 0$, so $u = 1$ (rejecting $u = -4$). Hence $e^x = 1$, giving $x = 0$.

:::warning
When substituting $u = a^x$ or $u = \ln x$, always check the domain. For $u = a^x$ we have $u > 0$; for $u = \ln x$ we have $x > 0$. Always reject invalid solutions.
:::

---

## 8. Exponential Modelling

### 8.1 Exponential growth

A quantity $N$ grows exponentially when

$$N = N_0 e^{kt}, \quad k > 0$$

where $N_0$ is the initial quantity and $k$ is the growth constant.

The **doubling time** $T_d$ satisfies $N_0 e^{kT_d} = 2N_0$, so:

$$e^{kT_d} = 2 \implies T_d = \frac{\ln 2}{k}$$

### 8.2 Exponential decay

$$N = N_0 e^{-kt}, \quad k > 0$$

The **half-life** $t_{1/2}$ satisfies $N_0 e^{-kt_{1/2}} = \frac{N_0}{2}$, so:

$$e^{-kt_{1/2}} = \frac{1}{2} \implies t_{1/2} = \frac{\ln 2}{k}$$

### 8.3 General exponential model

In many applications, the model $N = A \cdot b^{kt}$ or $N = A \cdot e^{kt}$ appears. Given two data points, we can determine the parameters.

**Example.** A population is 500 at $t=0$ and 2000 at $t=6$ (hours). Assuming exponential growth $N = N_0 e^{kt}$:

$$
\begin{aligned}
N_0 &= 500 \\
2000 &= 500 e^{6k} \\
4 &= e^{6k} \\
6k &= \ln 4 = 2\ln 2 \\
k &= \frac{\ln 2}{3}
\end{aligned}
$$

Doubling time: $T_d = \dfrac{\ln 2}{k} = \dfrac{\ln 2}{\ln 2 / 3} = 3$ hours.

:::tip
In modelling questions, always:

1. Identify the model (growth or decay)
2. Use the initial condition to find one parameter
3. Use a second data point to find the remaining parameter
4. State the complete model before answering the question
   :::

---

## 9. Graphs of Exponential and Logarithmic Functions

### 9.1 Key features of $y = e^x$

- Domain: $(-\infty, \infty)$, Range: $(0, \infty)$
- $y$-intercept: $(0, 1)$
- Horizontal asymptote: $y = 0$ (as $x \to -\infty$)
- Strictly increasing
- Passes through $(1, e)$, $(\ln 2, 2)$

### 9.2 Key features of $y = \ln x$

- Domain: $(0, \infty)$, Range: $(-\infty, \infty)$
- $x$-intercept: $(1, 0)$
- Vertical asymptote: $x = 0$
- Strictly increasing
- Passes through $(e, 1)$, $(2, \ln 2)$

### 9.3 Transformations

The graphs of $y = e^{-x}$ (reflection in $y$-axis), $y = e^{x} + c$ (vertical translation), and $y = \ln(x-a)$ (horizontal translation) follow from standard transformation rules.

**Intuition.** The graphs of $y = e^x$ and $y = \ln x$ are reflections of each other in the line $y = x$, since they are inverse functions.

---

## 10. Logarithmic Differentiation

For functions of the form $y = f(x)^{g(x)}$, take logarithms first:

$$\ln y = g(x) \ln f(x)$$

Then differentiate implicitly:

$$\frac{1}{y}\frac{dy}{dx} = g'(x)\ln f(x) + \frac{g(x) f'(x)}{f(x)}$$

$$\frac{dy}{dx} = f(x)^{g(x)}\left[g'(x)\ln f(x) + \frac{g(x) f'(x)}{f(x)}\right]$$

:::warning
Never try to differentiate $f(x)^{g(x)}$ directly using the power rule or the exponential rule alone — it requires logarithmic differentiation or rewriting as $e^{g(x)\ln f(x)}$.
:::

---

## Problem Set

<details><summary>Problem 1</summary><p>
Evaluate $\displaystyle\lim_{n\to\infty}\left(1+\frac{3}{n}\right)^n$.
</p></details>

<details><summary>Solution 1</summary><p>
Let $m = n/3$, so $n = 3m$. As $n \to \infty$, $m \to \infty$.

$$\left(1+\frac{3}{n}\right)^n = \left(1+\frac{1}{m}\right)^{3m} = \left[\left(1+\frac{1}{m}\right)^m\right]^3 \to e^3$$

<b>If you get this wrong, revise:</b> [The Number $e$](#1-the-number-e) — Section 1.1.

</p></details>

<details><summary>Problem 2</summary><p>
Prove that $\dfrac{d}{dx}(e^{3x^2}) = 6x\, e^{3x^2}$ using the chain rule.
</p></details>

<details><summary>Solution 2</summary><p>
Let $u = 3x^2$, so $y = e^u$ and $\dfrac{dy}{du} = e^u$, $\dfrac{du}{dx} = 6x$.

By the chain rule: $\dfrac{dy}{dx} = \dfrac{dy}{du} \cdot \dfrac{du}{dx} = e^u \cdot 6x = 6x\, e^{3x^2}$. $\blacksquare$

<b>If you get this wrong, revise:</b> [The Derivative of $e^x$](#2-the-derivative-of-ex) — Section 2.

</p></details>

<details><summary>Problem 3</summary><p>
Solve $\log_2(x+3) + \log_2(x-1) = 4$.
</p></details>

<details><summary>Solution 3</summary><p>
$$\log_2[(x+3)(x-1)] = 4 \implies (x+3)(x-1) = 16$$
$$x^2 + 2x - 3 = 16 \implies x^2 + 2x - 19 = 0$$
$$x = \frac{-2 \pm \sqrt{4+76}}{2} = \frac{-2 \pm \sqrt{80}}{2} = -1 \pm 2\sqrt{5}$$

Domain: $x > 1$, so $x = -1 + 2\sqrt{5}$.

<b>If you get this wrong, revise:</b> [Laws of Logarithms](#4-laws-of-logarithms) — Section 4.

</p></details>

<details><summary>Problem 4</summary><p>
Given $\log_a 2 = 0.301$ and $\log_a 5 = 0.699$, find $\log_a 200$.
</p></details>

<details><summary>Solution 4</summary><p>
$$\log_a 200 = \log_a(2 \times 100) = \log_a 2 + \log_a 100 = \log_a 2 + \log_a(4 \times 25)$$
$$= \log_a 2 + 2\log_a 2 + 2\log_a 5 = 3(0.301) + 2(0.699) = 0.903 + 1.398 = 2.301$$

<b>If you get this wrong, revise:</b> [Laws of Logarithms](#4-laws-of-logarithms) — Section 4.

</p></details>

<details><summary>Problem 5</summary><p>
Solve $5^{2x} - 6 \cdot 5^x + 5 = 0$.
</p></details>

<details><summary>Solution 5</summary><p>
Let $u = 5^x$ ($u > 0$). Then $u^2 - 6u + 5 = 0$, so $(u-1)(u-5) = 0$.

$u = 1$: $5^x = 1 \implies x = 0$.
$u = 5$: $5^x = 5 \implies x = 1$.

<b>If you get this wrong, revise:</b> [Solving Exponential Equations](#7-solving-exponential-equations) — Section 7.3.

</p></details>

<details><summary>Problem 6</summary><p>
A radioactive substance decays with half-life 8 days. If initially there are 200g, find the mass after 25 days.
</p></details>

<details><summary>Solution 6</summary><p>
Model: $N = N_0 e^{-kt}$ where $N_0 = 200$.

Half-life: $t_{1/2} = \dfrac{\ln 2}{k} = 8 \implies k = \dfrac{\ln 2}{8}$.

$$N = 200 \cdot e^{-25\ln 2/8} = 200 \cdot 2^{-25/8} \approx 200 \cdot 0.2315 \approx 46.3 \text{ g}$$

<b>If you get this wrong, revise:</b> [Exponential Modelling](#8-exponential-modelling) — Section 8.2.

</p></details>

<details><summary>Problem 7</summary><p>
Differentiate $y = x^x$ using logarithmic differentiation.
</p></details>

<details><summary>Solution 7</summary><p>
$\ln y = x \ln x$. Differentiating: $\dfrac{1}{y}\dfrac{dy}{dx} = \ln x + x \cdot \dfrac{1}{x} = \ln x + 1$.

$$\frac{dy}{dx} = x^x(\ln x + 1)$$

<b>If you get this wrong, revise:</b> [Logarithmic Differentiation](#10-logarithmic-differentiation) — Section 10.

</p></details>

<details><summary>Problem 8</summary><p>
Solve $\ln(3x-1) = \ln(x+2) + \ln 4$.
</p></details>

<details><summary>Solution 8</summary><p>
$$\ln(3x-1) = \ln[4(x+2)] \implies 3x - 1 = 4x + 8 \implies x = -9$$

Check domain: $3(-9)-1 = -28 < 0$ and $-9+2 = -7 < 0$. Both logarithms undefined. **No solution.**

<b>If you get this wrong, revise:</b> [Solving Exponential Equations](#7-solving-exponential-equations) — Section 7.1, and always check the domain.

</p></details>

<details><summary>Problem 9</summary><p>
Prove that $\log_a b \cdot \log_b a = 1$ for all $a, b > 0$, $a, b \neq 1$.
</p></details>

<details><summary>Solution 9</summary><p>
By the change of base formula:

$$\log_a b = \frac{\ln b}{\ln a}, \qquad \log_b a = \frac{\ln a}{\ln b}$$

$$\log_a b \cdot \log_b a = \frac{\ln b}{\ln a} \cdot \frac{\ln a}{\ln b} = 1 \quad \blacksquare$$

<b>If you get this wrong, revise:</b> [Change of Base Formula](#5-change-of-base-formula) — Section 5.

</p></details>

<details><summary>Problem 10</summary><p>
The temperature $T$ of a cooling object follows $T = T_s + (T_0 - T_s)e^{-kt}$. A cup of tea at $90°$C is placed in a room at $20°$C. After 10 minutes it is $60°$C. Find $k$ and determine when the tea reaches $35°$C.
</p></details>

<details><summary>Solution 10</summary><p>
$T_s = 20$, $T_0 = 90$. Model: $T = 20 + 70e^{-kt}$.

At $t = 10$: $60 = 20 + 70e^{-10k} \implies 40 = 70e^{-10k} \implies e^{-10k} = 4/7$.

$$-10k = \ln(4/7) \implies k = \frac{\ln(7/4)}{10} \approx 0.0560$$

For $T = 35$: $35 = 20 + 70e^{-kt} \implies 15 = 70e^{-kt} \implies e^{-kt} = 3/14$.

$$-kt = \ln(3/14) \implies t = \frac{\ln(14/3)}{k} = \frac{10\ln(14/3)}{\ln(7/4)} \approx 28.3 \text{ minutes}$$

<b>If you get this wrong, revise:</b> [Exponential Modelling](#8-exponential-modelling) — Section 8.

</p></details>

<details><summary>Problem 11</summary><p>
Express $y = e^{2x} + 3e^{-2x}$ in the form $y = 2\cosh(2x) + \cosh(2x)$ is not correct. Instead: Find the minimum value of $y = e^{2x} + 3e^{-2x}$.
</p></details>

<details><summary>Solution 11</summary><p>
$\dfrac{dy}{dx} = 2e^{2x} - 6e^{-2x} = 0 \implies 2e^{2x} = 6e^{-2x} \implies e^{4x} = 3 \implies x = \dfrac{\ln 3}{4}$.

At $x = \dfrac{\ln 3}{4}$: $e^{2x} = e^{\ln 3 / 2} = \sqrt{3}$, $e^{-2x} = 1/\sqrt{3}$.

$$y_{\min} = \sqrt{3} + \frac{3}{\sqrt{3}} = \sqrt{3} + \sqrt{3} = 2\sqrt{3}$$

<b>If you get this wrong, revise:</b> [Solving Exponential Equations](#7-solving-exponential-equations) and Section 2.2.

</p></details>

<details><summary>Problem 12</summary><p>
Given $\ln(x^2 + 1) = 2\ln x + \ln 5$, solve for $x$.
</p></details>

<details><summary>Solution 12</summary><p>
$$\ln(x^2+1) = \ln(x^2) + \ln 5 = \ln(5x^2)$$
$$x^2 + 1 = 5x^2 \implies 4x^2 = 1 \implies x^2 = \frac{1}{4} \implies x = \frac{1}{2}$$

Reject $x = -1/2$ since $\ln x$ requires $x > 0$.

<b>If you get this wrong, revise:</b> [Laws of Logarithms](#4-laws-of-logarithms) — Section 4 and domain restrictions.

</p></details>
