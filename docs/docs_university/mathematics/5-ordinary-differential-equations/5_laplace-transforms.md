---
title: Laplace Transforms
tags:
  - Mathematics
  - University
---

### 5.1 Definition

The **Laplace transform** of $f(t)$ (defined for $t \geq 0$) is

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^{\infty} e^{-st} f(t)\, dt$$

The transform exists when $f$ is piecewise continuous on $[0, \infty)$ and of **exponential order**:
$|f(t)| \leq Me^{at}$ for some $M, a > 0$.

### 5.2 Basic Properties

**Theorem 5.1 (Linearity).** $\mathcal{L}\{af + bg\} = a\mathcal{L}\{f\} + b\mathcal{L}\{g\}$.

**Theorem 5.2 (First Shifting).** $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$.

**Theorem 5.3 (Second Shifting).** $\mathcal{L}\{u_c(t)f(t - c)\} = e^{-cs}F(s)$Where $u_c(t)$ is
The unit step function.

**Theorem 5.4 (Derivative).** $\mathcal{L}\{f'(t)\} = sF(s) - f(0)$.

**Theorem 5.5 (n-th Derivative).**
$\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - s^{n-1}f(0) - \cdots - f^{(n-1)}(0)$.

**Theorem 5.6 (Integration).**
$\mathcal{L}\left\{\int_0^t f(\tau)\, d\tau\right\} = \frac{F(s)}{s}$.

**Theorem 5.7 (Convolution).** $\mathcal{L}\{f * g\} = F(s)G(s)$Where
$(f * g)(t) = \int_0^t f(\tau)g(t - \tau)\, d\tau$.

### 5.3 Proofs of Key Properties

_Proof of Linearity._
$\mathcal{L}\{af + bg\} = \int_0^{\infty} e^{-st}[af(t) + bg(t)]\, dt = a\int_0^{\infty} e^{-st}f(t)\, dt + b\int_0^{\infty} e^{-st}g(t)\, dt = aF(s) + bG(s)$.
$\blacksquare$

_Proof of First Shifting Theorem._
$\mathcal{L}\{e^{at}f(t)\} = \int_0^{\infty} e^{-st} e^{at} f(t)\, dt = \int_0^{\infty} e^{-(s-a)t} f(t)\, dt = F(s - a)$.
$\blacksquare$

_Proof of Derivative Property._ Integrating by parts with $u = e^{-st}$, $dv = f'(t)\, dt$:

$\mathcal{L}\{f'(t)\} = \left[e^{-st}f(t)\right]_0^{\infty} + s\int_0^{\infty} e^{-st}f(t)\, dt = -f(0) + sF(s) = sF(s) - f(0)$.

The boundary term vanishes at $\infty$ because $f$ is of exponential order. $\blacksquare$

_Proof of Integration Property._ Let $g(t) = \int_0^t f(\tau)\, d\tau$. Then $g'(t) = f(t)$ and
$g(0) = 0$.
$\mathcal{L}\{f(t)\} = \mathcal{L}\{g'(t)\} = s\mathcal{L}\{g(t)\} - g(0) = s\mathcal{L}\{g(t)\}$.
Therefore $\mathcal{L}\{g(t)\} = F(s)/s$. $\blacksquare$

### 5.4 Common Laplace Transforms

| $f(t)$           | $F(s) = \mathcal{L}\{f(t)\}$ |
| ---------------- | ---------------------------- |
| $1$              | $1/s$                        |
| $t^n$            | $n!/s^{n+1}$                 |
| $e^{at}$         | $1/(s - a)$                  |
| $t^n e^{at}$     | $n!/(s - a)^{n+1}$           |
| $\sin(bt)$       | $b/(s^2 + b^2)$              |
| $\cos(bt)$       | $s/(s^2 + b^2)$              |
| $e^{at}\sin(bt)$ | $b/((s-a)^2 + b^2)$          |
| $e^{at}\cos(bt)$ | $(s-a)/((s-a)^2 + b^2)$      |
| $u_c(t)$         | $e^{-cs}/s$                  |
| $\delta(t - c)$  | $e^{-cs}$                    |

### 5.5 Solving IVPs with Laplace Transforms

**Procedure:**

1. Take the Laplace transform of both sides of the ODE.
2. Solve the resulting algebraic equation for $Y(s) = \mathcal{L}\{y(t)\}$.
3. Find the inverse Laplace transform to obtain $y(t)$.

### 5.6 Worked Example: Solving an IVP

**Problem.** Solve $y'' + 4y = \sin(2t)$, $y(0) = 0$, $y'(0) = 0$.

_Solution._ Taking Laplace transforms:

$s^2 Y + 4Y = \frac{2}{s^2 + 4}$

$(s^2 + 4)Y = \frac{2}{s^2 + 4}$

$Y = \frac{2}{(s^2 + 4)^2}$

To invert, use the convolution theorem:
$\mathcal{L}^{-1}\left\{\frac{1}{s^2 + 4}\right\} = \frac{1}{2}\sin(2t)$.

$y(t) = \frac{1}{2}\sin(2t) * \frac{1}{2}\sin(2t) = \frac{1}{4}\int_0^t \sin(2\tau)\sin(2(t - \tau))\, d\tau$

Using $\sin A \sin B = \frac{1}{2}(\cos(A - B) - \cos(A + B))$:

$y(t) = \frac{1}{8}\int_0^t [\cos(4\tau - 2t) - \cos(2t)]\, d\tau = \frac{1}{8}\left[\frac{\sin(4\tau - 2t)}{4}\right]_0^t - \frac{t}{8}\cos(2t)$

$= \frac{1}{32}[\sin(2t) - \sin(-2t)] - \frac{t}{8}\cos(2t) = \frac{\sin(2t)}{16} - \frac{t\cos(2t)}{8}$

$y(t) = \frac{\sin(2t) - 2t\cos(2t)}{16}$. $\blacksquare$

### 5.6b Worked Example: Partial Fractions for Inverse Laplace

**Problem.** Find $\mathcal{L}^{-1}\left\{\frac{1}{s(s^2 + 4)}
Ight\}$.

<details>
<summary>Solution</summary>

_Solution._ Partial fractions: $\frac{1}{s(s^2 + 4)} = \frac{A}{s} + \frac{Bs + C}{s^2 + 4}$.

$1 = A(s^2 + 4) + (Bs + C)s = (A + B)s^2 + Cs + 4A$.

$s^2$: $A + B = 0$, $s$: $C = 0$Constant: $4A = 1 \implies A = 1/4$, $B = -1/4$.

$\frac{1}{s(s^2 + 4)} = \frac{1/4}{s} - \frac{s/4}{s^2 + 4}$.

$f(t) = \frac{1}{4} - \frac{1}{4}\cos 2t$. $\blacksquare$

</details>
### 5.7 Convolution Theorem

**Theorem 5.8 (Convolution).** If $F(s) = \mathcal{L}\{f(t)\}$ and $G(s) = \mathcal{L}\{g(t)\}$ Then

$$\mathcal{L}\{f * g\} = F(s)G(s)$$

Where $(f * g)(t) = \int_0^t f(\tau)g(t - \tau)\, d\tau$.

_Proof._
$F(s)G(s) = \int_0^{\infty} e^{-s\tau} f(\tau)\, d\tau \cdot \int_0^{\infty} e^{-su} g(u)\, du$

$= \int_0^{\infty} \int_0^{\infty} e^{-s(\tau+u)} f(\tau) g(u)\, du\, d\tau$

Substitute $t = \tau + u$, $u = t - \tau$. For fixed $\tau$, $u$ ranges from $0$ to $\infty$So $t$
ranges From $\tau$ to $\infty$.

$= \int_0^{\infty} f(\tau)\left[\int_{\tau}^{\infty} e^{-st} g(t - \tau)\, dt\right] d\tau$

Swap the order of integration (Fubini):

$= \int_0^{\infty} e^{-st}\left[\int_0^t f(\tau) g(t - \tau)\, d\tau\right] dt = \mathcal{L}\{(f * g)(t)\}$.
$\blacksquare$

### 5.8 Worked Example: Inverse Laplace Transform

**Problem.** Find $\mathcal{L}^{-1}\left\{\frac{3s + 1}{s^2 + 4s + 13}\right\}$.

<details>
<summary>Solution</summary>

_Solution._ Complete the square: $s^2 + 4s + 13 = (s + 2)^2 + 9$.

$\frac{3s + 1}{s^2 + 4s + 13} = \frac{3(s + 2) - 5}{(s + 2)^2 + 9} = 3 \cdot \frac{s + 2}{(s + 2)^2 + 9} - \frac{5}{3} \cdot \frac{3}{(s + 2)^2 + 9}$

Using the shifting theorem:

$\mathcal{L}^{-1}\left\{\frac{s + 2}{(s + 2)^2 + 9}\right\} = e^{-2t}\cos(3t)$

$\mathcal{L}^{-1}\left\{\frac{3}{(s + 2)^2 + 9}\right\} = e^{-2t}\sin(3t)$

$f(t) = 3e^{-2t}\cos(3t) - \frac{5}{3}e^{-2t}\sin(3t) = e^{-2t}\left(3\cos(3t) - \frac{5}{3}\sin(3t)\right)$.
$\blacksquare$

</details>

### 5.9 Worked Example: IVP with Discontinuous Forcing

**Problem.** Solve $y'' + 3y' + 2y = u_2(t)$, $y(0) = 0$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Take Laplace transforms:

$s^2 Y + 3sY + 2Y = \frac{e^{-2s}}{s}$

$(s^2 + 3s + 2)Y = \frac{e^{-2s}}{s}$

$Y = \frac{e^{-2s}}{s(s+1)(s+2)}$

First find the partial fraction decomposition of $\frac{1}{s(s+1)(s+2)}$:

$\frac{1}{s(s+1)(s+2)} = \frac{A}{s} + \frac{B}{s+1} + \frac{C}{s+2}$

$1 = A(s+1)(s+2) + Bs(s+2) + Cs(s+1)$

$s = 0$: $1 = 2A \implies A = 1/2$ $s = -1$: $1 = -B \implies B = -1$ $s = -2$:
$1 = 2C \implies C = 1/2$

So
$\mathcal{L}^{-1}\left\{\frac{1}{s(s+1)(s+2)}\right\} = \frac{1}{2} - e^{-t} + \frac{1}{2}e^{-2t}$.

By the second shifting theorem:

$y(t) = u_2(t)\left[\frac{1}{2} - e^{-(t-2)} + \frac{1}{2}e^{-2(t-2)}\right]$ for $t \geq 0$.
$\blacksquare$

</details>

### 5.10 The Heaviside Function

The **Heaviside (unit step) function** is defined as

$$u_c(t) = \begin{cases} 0 & t \lt c \\ 1 & t \geq c \end{cases}$$

It models a sudden switch being turned on at time $t = c$. The second shifting theorem states:

$$\mathcal{L}\{u_c(t)f(t - c)\} = e^{-cs}F(s)$$

Conversely, if $Y(s) = e^{-cs}G(s)$Then $y(t) = u_c(t) \cdot g(t - c)$ where
$g = \mathcal{L}^{-1}\{G\}$.

### 5.11 The Dirac Delta Function

The **Dirac delta function** $\delta(t - c)$ satisfies
$\int_0^{\infty} \delta(t - c)f(t)\, dt = f(c)$ for continuous $f$. It models an instantaneous
Impulse.

$\mathcal{L}\{\delta(t - c)\} = e^{-cs}$.

**Properties:**

- $\delta(t - c) = 0$ for $t \neq c$
- $\int_{-\infty}^{\infty} \delta(t - c)\, dt = 1$
- $\int_{-\infty}^{\infty} \delta(t - c)f(t)\, dt = f(c)$ (sifting property)

### 5.12 Worked Example: Impulse Response

**Problem.** An undamped spring-mass system ($m = 1$, $k = 4$) is struck by an impulse at $t = 0$:
$y'' + 4y = \delta(t)$, $y(0) = 0$, $y'(0) = 0$. Find $y(t)$.

<details>
<summary>Solution</summary>

_Solution._ Taking Laplace transforms:

$s^2 Y + 4Y = 1$

$Y = \frac{1}{s^2 + 4}$

$y(t) = \frac{1}{2}\sin(2t)$.

This is the **impulse response** (Green's function) for the operator $D^2 + 4$. $\blacksquare$

</details>

### 5.13 Worked Example: IVP with Laplace

**Problem.** Solve $y'' - 6y' + 9y = 6e^{3t}$, $y(0) = 0$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Taking Laplace transforms:

$s^2 Y - 6sY + 9Y = \frac{6}{s - 3}$

$(s - 3)^2 Y = \frac{6}{s - 3}$

$Y = \frac{6}{(s - 3)^3}$

Using the table: $\mathcal{L}\{t^n e^{at}\} = \frac{n!}{(s-a)^{n+1}}$.

$y(t) = 6 \cdot \frac{t^2 e^{3t}}{2!} = 3t^2 e^{3t}$. $\blacksquare$

</details>

### 5.14 Common Pitfalls for Laplace Transforms

:::caution Common Pitfall The Laplace transform of $y'(t)$ is $sY(s) - y(0)$Not $sY(s)$. The Initial
conditions are built into the transform. Forgetting them leads to incorrect solutions.
:::

:::caution Common Pitfall When using the second shifting theorem, the time-shifted function must Be
written as $u_c(t)f(t - c)$Not $u_c(t)f(t)$. The function $f$ must be shifted by the same Amount as
the step.
:::

### 5.15 Proof Sketch: Picard Iteration

The Picard-Lindelöf theorem can be proved constructively via **Picard iteration**. For the IVP
$y' = f(x, y)$, $y(x_0) = y_0$Define the sequence

$$\phi_0(x) = y_0, \quad \phi_{n+1}(x) = y_0 + \int_{x_0}^x f(t, \phi_n(t))\, dt$$

If $f$ and $\partial f/\partial y$ are continuous, one shows by induction that $(\phi_n)$ is
uniformly Cauchy on some interval $[x_0 - h, x_0 + h]$Hence converges uniformly to a function
$\phi$. Passing to the limit in the integral equation shows $\phi$ satisfies the ODE. Uniqueness
follows From the **Gronwall inequality** applied to the difference of two solutions.


