---
title: Problem Set
slug: ordinary-differential-equations-problem-set
tags:
  - Mathematics
  - University
---

### Problem 1 (Classification)

Classify the ODE $y'' + xy' + e^x y = \cos x$ by order, linearity, and homogeneity.

<details>
<summary>Solution</summary>

_Solution._ Second-order (highest derivative is $y''$), linear ($y$, $y'$, $y''$ appear linearly
With coefficient functions of $x$ only), nonhomogeneous ($\cos x \neq 0$). $\blacksquare$

_If you get this wrong, revise:_ Section 1.2 (Classification of ODEs).

</details>

### Problem 2 (Separable Equation)

Solve $\frac{dy}{dx} = \frac{x}{y}$, $y(0) = 2$.

<details>
<summary>Solution</summary>

_Solution._ Separating: $y\, dy = x\, dx$. Integrating: $\frac{y^2}{2} = \frac{x^2}{2} + C$.

$y(0) = 2 \implies C = 2$So $y^2 = x^2 + 4$Giving $y = \sqrt{x^2 + 4}$ (positive branch Since
$y(0) = 2 > 0$). $\blacksquare$

_If you get this wrong, revise:_ Section 2.1 (Separable Equations).

</details>

### Problem 3 (Linear First-Order)

Solve $y' + \frac{y}{x} = x^2$ for $x > 0$, $y(1) = 1$.

<details>
<summary>Solution</summary>

_Solution._ $P(x) = 1/x$, $Q(x) = x^2$.

$\mu(x) = e^{\int 1/x\, dx} = e^{\ln x} = x$.

$y = x^{-1}\left(\int x \cdot x^2\, dx + C\right) = x^{-1}\left(\frac{x^4}{4} + C\right) = \frac{x^3}{4} + \frac{C}{x}$.

$y(1) = 1/4 + C = 1 \implies C = 3/4$.

$y = \frac{x^3}{4} + \frac{3}{4x}$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.2 (Linear First-Order Equations).

</details>

### Problem 4 (Exact Equation)

Solve $(2x + y)\, dx + (x + 2y)\, dy = 0$.

<details>
<summary>Solution</summary>

_Solution._ $M = 2x + y$, $N = x + 2y$. $M_y = 1 = N_x$. Exact.

$\Psi_x = 2x + y \implies \Psi = x^2 + xy + h(y)$.

$\Psi_y = x + h'(y) = x + 2y \implies h'(y) = 2y \implies h(y) = y^2$.

Solution: $x^2 + xy + y^2 = C$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.4 (Exact Equations).

</details>

### Problem 5 (Bernoulli Equation)

Solve $y' - y = xy^2$.

<details>
<summary>Solution</summary>

_Solution._ This is Bernoulli with $n = 2$, $P(x) = -1$, $Q(x) = x$.

Substitution $v = y^{-1}$: $v' = -y^{-2}y'$So $-v' - v = x$I.e., $v' + v = -x$.

Integrating factor: $e^x$. $(ve^x)' = -xe^x$.

$ve^x = -xe^x + e^x + C = e^x(1 - x) + C$.

$v = 1 - x + Ce^{-x}$So $y = \frac{1}{1 - x + Ce^{-x}}$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.7 (Bernoulli Equations).

</details>

### Problem 6 (Homogeneous Substitution)

Solve $y' = \frac{x + y}{x - y}$ using the substitution $y = vx$.

<details>
<summary>Solution</summary>

_Solution._ $y = vx \implies y' = v + xv'$.

$\frac{x + vx}{x - vx} = \frac{1 + v}{1 - v}$.

$v + xv' = \frac{1 + v}{1 - v}$

$xv' = \frac{1 + v}{1 - v} - v = \frac{1 + v - v + v^2}{1 - v} = \frac{1 + v^2}{1 - v}$

$\frac{1 - v}{1 + v^2}\, dv = \frac{dx}{x}$

$\int \frac{1}{1 + v^2}\, dv - \int \frac{v}{1 + v^2}\, dv = \ln|x| + C$

$\arctan v - \frac{1}{2}\ln(1 + v^2) = \ln|x| + C$

$\arctan(y/x) - \frac{1}{2}\ln(1 + y^2/x^2) = \ln|x| + C$

$\arctan(y/x) = \frac{1}{2}\ln(x^2 + y^2) + C$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.10 (Homogeneous Equations).

</details>

### Problem 7 (Complex Roots)

Solve $y'' + 4y' + 13y = 0$, $y(0) = 2$, $y'(0) = -3$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic equation: $r^2 + 4r + 13 = 0$.

$r = \frac{-4 \pm \sqrt{16 - 52}}{2} = \frac{-4 \pm \sqrt{-36}}{2} = -2 \pm 3i$.

$y = e^{-2x}(c_1 \cos 3x + c_2 \sin 3x)$.

$y(0) = c_1 = 2$.

$y' = -2e^{-2x}(2\cos 3x + c_2 \sin 3x) + e^{-2x}(-6\sin 3x + 3c_2 \cos 3x)$.

$y'(0) = -4 + 3c_2 = -3 \implies c_2 = 1/3$.

$y = e^{-2x}\left(2\cos 3x + \frac{1}{3}\sin 3x\right)$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2 (Homogeneous Equations with Constant Coefficients).

</details>

### Problem 8 (Repeated Roots)

Solve $y'' + 4y' + 4y = 0$, $y(0) = 1$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ $r^2 + 4r + 4 = (r + 2)^2 = 0$. Repeated root $r = -2$.

$y = c_1 e^{-2x} + c_2 xe^{-2x}$.

$y(0) = c_1 = 1$.

$y' = -2e^{-2x} + c_2 e^{-2x} - 2c_2 xe^{-2x}$.

$y'(0) = -2 + c_2 = 0 \implies c_2 = 2$.

$y = e^{-2x} + 2xe^{-2x} = e^{-2x}(1 + 2x)$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2, Case 2.

</details>

### Problem 9 (Undetermined Coefficients)

Solve $y'' - 2y' - 3y = 3e^{2x}$, $y(0) = 1$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Homogeneous: $r^2 - 2r - 3 = (r - 3)(r + 1) = 0$. Roots: $3, -1$.

$y_h = c_1 e^{3x} + c_2 e^{-x}$.

Guess $y_p = Ae^{2x}$. $y_p' = 2Ae^{2x}$, $y_p'' = 4Ae^{2x}$.

$4Ae^{2x} - 4Ae^{2x} - 3Ae^{2x} = 3e^{2x} \implies -3A = 3 \implies A = -1$.

$y = c_1 e^{3x} + c_2 e^{-x} - e^{2x}$.

$y(0) = c_1 + c_2 - 1 = 1 \implies c_1 + c_2 = 2$.

$y'(0) = 3c_1 - c_2 - 2 = 0 \implies 3c_1 - c_2 = 2$.

Solving: $4c_1 = 4 \implies c_1 = 1$, $c_2 = 1$.

$y = e^{3x} + e^{-x} - e^{2x}$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.6 (Undetermined Coefficients).

</details>

### Problem 10 (Resonance)

Solve $y'' + 4y = 8\cos(2t)$, $y(0) = 0$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ This is resonant ($\omega_0 = 2 = \omega$).

$y_h = c_1 \cos 2t + c_2 \sin 2t$.

Guess $y_p = At\sin 2t$. $y_p' = A\sin 2t + 2At\cos 2t$.
$y_p'' = 2A\cos 2t + 2A\cos 2t - 4At\sin 2t = 4A\cos 2t - 4At\sin 2t$.

$y_p'' + 4y_p = 4A\cos 2t = 8\cos 2t \implies A = 2$.

$y = c_1 \cos 2t + c_2 \sin 2t + 2t\sin 2t$.

$y(0) = c_1 = 0$. $y'(0) = 2c_2 = 0 \implies c_2 = 0$.

$y = 2t\sin 2t$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.9 (Resonance).

</details>

### Problem 11 (Reduction of Order)

Given that $y_1 = x$ solves $x^2 y'' - xy' + y = 0$ for $x > 0$Find the general solution.

<details>
<summary>Solution</summary>

_Solution._ Rewrite as $y'' - \frac{1}{x}y' + \frac{1}{x^2}y = 0$. Here $p(x) = -1/x$.

$e^{-\int p\, dx} = e^{\int 1/x\, dx} = x$.

$y_2 = y_1 \int \frac{x}{y_1^2}\, dx = x \int \frac{x}{x^2}\, dx = x \int \frac{1}{x}\, dx = x \ln x$.

$y = c_1 x + c_2 x \ln x$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.12 (Reduction of Order).

</details>

### Problem 12 (Euler-Cauchy)

Solve $x^2 y'' + 3xy' + y = 0$ for $x > 0$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic: $r(r-1) + 3r + 1 = r^2 + 2r + 1 = (r+1)^2 = 0$.

Repeated root $r = -1$.

$y = c_1 x^{-1} + c_2 x^{-1}\ln x$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.13 (Euler-Cauchy Equations).

</details>

### Problem 13 (2x2 System)

Solve $\mathbf{x}' = \begin{pmatrix} 1 & 4 \\ 1 & -2 \end{pmatrix}\mathbf{x}$.

<details>
<summary>Solution</summary>

_Solution._
$\det(A - \lambda I) = (1 - \lambda)(-2 - \lambda) - 4 = \lambda^2 + \lambda - 6 = (\lambda + 3)(\lambda - 2) = 0$.

$\lambda_1 = 2$:
$(A - 2I)\mathbf{v} = \begin{pmatrix} -1 & 4 \\ 1 & -4 \end{pmatrix}\mathbf{v} = \mathbf{0}$.
$\mathbf{v}_1 = \begin{pmatrix} 4 \\ 1 \end{pmatrix}$.

$\lambda_2 = -3$:
$(A + 3I)\mathbf{v} = \begin{pmatrix} 4 & 4 \\ 1 & 1 \end{pmatrix}\mathbf{v} = \mathbf{0}$.
$\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} 4 \\ 1 \end{pmatrix} e^{2t} + c_2 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^{-3t}$.
$\blacksquare$

_If you get this wrong, revise:_ Section 4.2 (Homogeneous Systems with Constant Coefficients).

</details>

### Problem 14 (System with Complex Eigenvalues)

Solve $\mathbf{x}' = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\mathbf{x}$.

<details>
<summary>Solution</summary>

_Solution._ $\det(A - \lambda I) = \lambda^2 + 1 = 0$. $\lambda = \pm i$.

For $\lambda = i$: $\begin{pmatrix} -i & -1 \\ 1 & -i \end{pmatrix}\mathbf{v} = \mathbf{0}$.
$-iv_1 - v_2 = 0 \implies v_2 = -iv_1$. With $v_1 = 1$:
$\mathbf{v} = \begin{pmatrix} 1 \\ -i \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + i\begin{pmatrix} 0 \\ -1 \end{pmatrix}$.

$\mathbf{a} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$,
$\mathbf{b} = \begin{pmatrix} 0 \\ -1 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} \cos t \\ -\sin t \end{pmatrix} + c_2 \begin{pmatrix} \sin t \\ \cos t \end{pmatrix}$.

Equivalently: $x_1(t) = c_1 \cos t + c_2 \sin t$, $x_2(t) = -c_1 \sin t + c_2 \cos t$.
$\blacksquare$

_If you get this wrong, revise:_ Section 4.2, Case 3.

</details>

### Problem 15 (Laplace Transform)

Compute $\mathcal{L}\{t^2 e^{-3t}\}$.

<details>
<summary>Solution</summary>

_Solution._ Using $\mathcal{L}\{t^n e^{at}\} = \frac{n!}{(s-a)^{n+1}}$ with $n = 2$, $a = -3$:

$\mathcal{L}\{t^2 e^{-3t}\} = \frac{2!}{(s + 3)^3} = \frac{2}{(s+3)^3}$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.2 (Basic Properties) and Section 5.4 (Common Transforms).

</details>

### Problem 16 (IVP with Laplace)

Solve $y'' - y = e^t$, $y(0) = 0$, $y'(0) = 0$ using Laplace transforms.

<details>
<summary>Solution</summary>

_Solution._ ${\mathcal{L}\{y'} - \mathcal{L}\{y\} = \mathcal{L}\{e^t\}$:

$s^2 Y - Y = \frac{1}{s - 1}$

$(s^2 - 1)Y = \frac{1}{s-1}$

$(s-1)(s+1)Y = \frac{1}{s-1}$

$Y = \frac{1}{(s-1)^2(s+1)}$

Partial fractions: $\frac{1}{(s-1)^2(s+1)} = \frac{A}{s-1} + \frac{B}{(s-1)^2} + \frac{C}{s+1}$.

$1 = A(s-1)(s+1) + B(s+1) + C(s-1)^2$

$s = 1$: $1 = 2B \implies B = 1/2$. $s = -1$: $1 = 4C \implies C = 1/4$. $s = 0$:
$1 = -A + B + C = -A + 3/4 \implies A = -1/4$.

$Y = -\frac{1/4}{s-1} + \frac{1/2}{(s-1)^2} + \frac{1/4}{s+1}$

$y(t) = -\frac{1}{4}e^t + \frac{1}{2}te^t + \frac{1}{4}e^{-t}$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.5 (Solving IVPs with Laplace Transforms).

</details>

### Problem 17 (Inverse Laplace)

Find $\mathcal{L}^{-1}\left\{\frac{2s + 3}{s^2 + 2s + 5}\right\}$.

<details>
<summary>Solution</summary>

_Solution._ Complete the square: $s^2 + 2s + 5 = (s + 1)^2 + 4$.

$\frac{2s + 3}{(s+1)^2 + 4} = \frac{2(s+1) + 1}{(s+1)^2 + 4} = 2 \cdot \frac{s+1}{(s+1)^2 + 4} + \frac{1}{2} \cdot \frac{2}{(s+1)^2 + 4}$

$f(t) = 2e^{-t}\cos 2t + \frac{1}{2}e^{-t}\sin 2t = e^{-t}\left(2\cos 2t + \frac{1}{2}\sin 2t\right)$.
$\blacksquare$

_If you get this wrong, revise:_ Section 5.8 (Worked Example: Inverse Laplace Transform).

</details>

### Problem 18 (Fourier Series)

Find the Fourier series of
$f(x) = \begin{cases} 1 & 0 \lt x \lt \pi \\ -1 & -\pi \lt x \lt 0 \end{cases}$ Extended
$2\pi$-periodically (the square wave).

<details>
<summary>Solution</summary>

_Solution._ $f$ is odd, so $a_n = 0$ for all $n$.

$b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin(nx)\, dx = \frac{1}{\pi}\left[\int_{-\pi}^{0}(-1)\sin(nx)\, dx + \int_0^{\pi}(1)\sin(nx)\, dx\right]$

$= \frac{1}{\pi}\left[\frac{\cos(nx)}{n}\Big|_{-\pi}^0 - \frac{\cos(nx)}{n}\Big|_0^{\pi}\right]$

$= \frac{1}{\pi}\left[\frac{1 - \cos(n\pi)}{n} - \frac{\cos(n\pi) - 1}{n}\right] = \frac{1}{\pi}\left[\frac{2 - 2\cos(n\pi)}{n}\right] = \frac{2(1 - (-1)^n)}{n\pi}$

For even $n$: $b_n = 0$. For odd $n = 2k + 1$: $b_n = \frac{4}{n\pi}$.

$f(x) \sim \frac{4}{\pi}\sum_{k=0}^{\infty} \frac{\sin((2k+1)x)}{2k+1}$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.1 and 7.6 (Fourier Series).

</details>

### Problem 19 (Heat Equation)

Solve $u_t = 4u_{xx}$ for $0 \lt x \lt \pi$, $t > 0$With $u(0, t) = u(\pi, t) = 0$ and
$u(x, 0) = \sin x$.

<details>
<summary>Solution</summary>

_Solution._ Here $\alpha = 2$ and $L = \pi$.

$\lambda_n = (n\pi/\pi)^2 = n^2$, $X_n = \sin(nx)$, $T_n = e^{-4n^2 t}$.

The initial condition $\sin x$ is already the first sine mode.

$u(x, t) = e^{-4t}\sin x$. $\blacksquare$

_If you get this wrong, revise:_ Section 8.4 (Solving the Heat Equation by Separation of Variables).

</details>

### Problem 20 (Stability Classification)

Find and classify the critical points of $x' = y - x^2$, $y' = x - y^2$.

<details>
<summary>Solution</summary>

_Solution._ Set $y - x^2 = 0$ and $x - y^2 = 0$. From the first equation $y = x^2$Substituting Into
the second: $x - x^4 = 0$So $x(1 - x^3) = 0$.

$x = 0 \implies y = 0$. Critical point: $(0, 0)$. $x = 1 \implies y = 1$. Critical point: $(1, 1)$.

Jacobian: $J = \begin{pmatrix} -2x & 1 \\ 1 & -2y \end{pmatrix}$.

At $(0, 0)$: $J = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. $\mathrm{tr}(J) = 0$,
$\det(J) = -1 \lt 0$. **Saddle point** (unstable).

At $(1, 1)$: $J = \begin{pmatrix} -2 & 1 \\ 1 & -2 \end{pmatrix}$. $\mathrm{tr}(J) = -4 \lt 0$,
$\det(J) = 3 > 0$. $\tau^2 - 4\Delta = 16 - 12 = 4 > 0$. Two distinct negative real eigenvalues.
**Stable node** (asymptotically stable). $\blacksquare$

_If you get this wrong, revise:_ Section 9.2 (Linearization and Stability) and Section 4.9 (Phase
Portrait Analysis).

</details>

## Worked Examples

### Example 1: Second-order linear ODE

**Problem.** Solve $y'' - 5y' + 6y = 0$.

**Solution.** Characteristic equation: $r^2 - 5r + 6 = (r-2)(r-3) = 0$. Roots: $r = 2, 3$.

General solution: $y = Ae^{2x} + Be^{3x}$.

$\blacksquare$

### Example 2: Non-homogeneous ODE

**Problem.** Solve $y'' - 5y' + 6y = e^x$.

**Solution.** Complementary function (from above): $y_c = Ae^{2x} + Be^{3x}$.

Particular integral: try $y_p = Ce^x$. Substituting:
$Ce^x - 5Ce^x + 6Ce^x = 2Ce^x = e^x \implies C = 1/2$.

General solution: $y = Ae^{2x} + Be^{3x} + \frac{1}{2}e^x$.

$\blacksquare$

## Common Pitfalls

- **Confusing homogeneous and non-homogeneous ODEs.** Homogeneous: $f(x, y, y') = 0$ with no forcing
  term. Non-homogeneous: has a forcing function. **Fix:** For non-homogeneous linear ODEs: general
  solution = complementary function + particular integral.
- **Wrong particular integral guess.** The guess for the particular integral must not overlap with
  the complementary function. **Fix:** If the guess overlaps, multiply by $x$ (or $x^2$ for double
  roots).
- **Confusing order and degree.** Order: highest derivative present. Degree: power of the highest
  derivative after removing radicals and fractions. **Fix:** $y'' + 3y' + 2y = 0$: order 2,
  degree 1.

## Summary

- First-order separable: $\frac{dy}{dx} = f(x)g(y) \implies \int \frac{dy}{g(y)} = \int f(x)\, dx$.
- Second-order linear homogeneous: characteristic equation $ar^2 + br + c = 0$.
- Non-homogeneous: $y = y_c + y_p$ (complementary + particular integral).
- Initial/boundary conditions determine the arbitrary constants.

## Cross-References

| Topic                    | Site       | Link                                                                                                                  |
| ------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------- |
| [Differential Equations] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/further-maths/pure-mathematics/07-differential-equations) |
| [Differential Equations] | IB         | [View](https://ib.wyattau.com/docs/ib/maths/5-calculus/5_differential-equations)                                      |
| [Differential Equations] | University | [View](https://university.wyattau.com/docs/mathematics/4-ordinary-differential-equations/1_differential-equations)    |

