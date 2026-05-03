---
title: "Differential Equations -- Diagnostic Tests"
description: "A-Level Further Maths diagnostic tests for differential equations: first order, second order, particular solutions, forming DEs."
slug: diag-further-differential-equations
hide_table_of_contents: true
---

# Differential Equations — Diagnostic Tests

## Unit Tests

### UT-1: First Order Separable Equations
**Question:** Solve $\frac{dy}{dx} = \frac{x}{y}$ given that $y = 2$ when $x = 1$. (b) Solve $\frac{dy}{dx} = xy$ given that $y = 1$ when $x = 0$. (c) Solve $\frac{dy}{dx} = \frac{y^2 + 1}{y}$ given that $y = 0$ when $x = 0$. (d) Explain what is meant by a "particular solution" versus a "general solution".

**Solution:**

(a) $y\,dy = x\,dx$. $\frac{y^2}{2} = \frac{x^2}{2} + C$. $y^2 = x^2 + C$. At $(1,2)$: $4 = 1 + C$, $C = 3$. $y^2 = x^2 + 3$, $y = \sqrt{x^2 + 3}$ (taking positive root).

(b) $\frac{dy}{y} = x\,dx$. $\ln|y| = \frac{x^2}{2} + C$. $y = Ae^{x^2/2}$. At $(0,1)$: $1 = A$, so $y = e^{x^2/2}$.

(c) $\frac{y}{y^2 + 1}\,dy = dx$. Integrating: $\frac{1}{2}\ln(y^2 + 1) = x + C$. $\ln(y^2 + 1) = 2x + C$. At $(0,0)$: $\ln 1 = C = 0$. $y^2 + 1 = e^{2x}$, $y = \sqrt{e^{2x} - 1}$.

(d) The **general solution** contains an arbitrary constant $C$ and represents the family of all possible solutions. The **particular solution** is obtained by using an initial/boundary condition to find the value of $C$, giving a single specific solution.

### UT-2: Second Order Linear DEs
**Question:** (a) Solve $\frac{d^2y}{dx^2} - 5\frac{dy}{dx} + 6y = 0$. (b) Solve $\frac{d^2y}{dx^2} + 4y = 0$ given that $y = 1$ and $\frac{dy}{dx} = 0$ when $x = 0$. (c) Solve $\frac{d^2y}{dx^2} + 6\frac{dy}{dx} + 9y = 0$. (d) Explain the significance of the discriminant of the auxiliary equation.

**Solution:**

(a) Auxiliary equation: $m^2 - 5m + 6 = 0$. $(m-2)(m-3) = 0$. $m = 2, 3$.
General solution: $y = Ae^{2x} + Be^{3x}$.

(b) $m^2 + 4 = 0$. $m = \pm 2i$.
General solution: $y = A\cos 2x + B\sin 2x$.
$y(0) = 1$: $A = 1$. $y'(0) = 0$: $2B = 0$, $B = 0$.
Particular solution: $y = \cos 2x$.

(c) $m^2 + 6m + 9 = 0$. $(m+3)^2 = 0$. $m = -3$ (repeated root).
General solution: $y = (A + Bx)e^{-3x}$.

(d) The discriminant $\Delta = b^2 - 4ac$ of the auxiliary equation $am^2 + bm + c = 0$ determines the nature of solutions:
- $\Delta \gt 0$: Two distinct real roots, general solution $y = Ae^{m_1x} + Be^{m_2x}$.
- $\Delta = 0$: One repeated real root, general solution $y = (A + Bx)e^{mx}$.
- $\Delta \lt 0$: Complex conjugate roots $m = \alpha \pm \beta i$, general solution $y = e^{\alpha x}(A\cos\beta x + B\sin\beta x)$.

### UT-3: Second Order DEs with RHS
**Question:** (a) Find the particular integral and general solution of $\frac{d^2y}{dx^2} - 3\frac{dy}{dx} + 2y = 4$. (b) Solve $\frac{d^2y}{dx^2} + y = 10\cos x$. (c) Solve $\frac{d^2y}{dx^2} - 4y = 2e^{3x}$.

**Solution:**

(a) CFE: $m^2 - 3m + 2 = 0$, $m = 1, 2$. CF: $y_c = Ae^x + Be^{2x}$.
PI: try $y_p = k$. $0 - 0 + 2k = 4$, $k = 2$.
GS: $y = Ae^x + Be^{2x} + 2$.

(b) CFE: $m^2 + 1 = 0$, $m = \pm i$. CF: $y_c = A\cos x + B\sin x$.
PI: since $\cos x$ is in the CF, try $y_p = x(C\cos x + D\sin x)$.
$y_p' = C\cos x + D\sin x + x(-C\sin x + D\cos x)$.
$y_p'' = -C\sin x + D\cos x - C\sin x + D\cos x + x(-C\cos x - D\sin x) = -2C\sin x + 2D\cos x - x(C\cos x + D\sin x)$.
$y_p'' + y_p = -2C\sin x + 2D\cos x = 10\cos x$.
$2D = 10 \Rightarrow D = 5$, $-2C = 0 \Rightarrow C = 0$.
PI: $y_p = 5x\sin x$. GS: $y = A\cos x + B\sin x + 5x\sin x$.

(c) CFE: $m^2 - 4 = 0$, $m = \pm 2$. CF: $y_c = Ae^{2x} + Be^{-2x}$.
PI: try $y_p = ce^{3x}$. $9ce^{3x} - 4ce^{3x} = 2e^{3x}$. $5c = 2$, $c = 2/5$.
GS: $y = Ae^{2x} + Be^{-2x} + \frac{2}{5}e^{3x}$.

---

## Integration Tests

### IT-1: Modelling with DEs (with Mechanics)
**Question:** A particle of mass $m$ falls under gravity with air resistance proportional to velocity: $m\frac{dv}{dt} = mg - kv$. (a) Solve the DE given $v = 0$ when $t = 0$. (b) Find the terminal velocity. (c) Calculate $v$ when $t = m/k$ as a fraction of terminal velocity. (d) Sketch the velocity-time graph.

**Solution:**

(a) $\frac{dv}{dt} = g - \frac{k}{m}v$. Let $\alpha = k/m$: $\frac{dv}{dt} + \alpha v = g$.
Integrating factor: $e^{\alpha t}$. $\frac{d}{dt}(ve^{\alpha t}) = ge^{\alpha t}$.
$ve^{\alpha t} = \frac{g}{\alpha}e^{\alpha t} + C$. $v = \frac{g}{\alpha} + Ce^{-\alpha t} = \frac{mg}{k} + Ce^{-kt/m}$.
At $t = 0$: $0 = mg/k + C$, $C = -mg/k$.
$v = \frac{mg}{k}(1 - e^{-kt/m})$.

(b) Terminal velocity: as $t \to \infty$, $e^{-kt/m} \to 0$, so $v_{\text{term}} = \frac{mg}{k}$.

(c) At $t = m/k$: $v = \frac{mg}{k}(1 - e^{-1}) = \frac{mg}{k}(1 - 0.368) = 0.632 v_{\text{term}}$.
The particle reaches approximately 63.2% of terminal velocity.

(d) The graph starts at $v = 0$ with steep gradient $g$, curves concavely, and asymptotically approaches $v = mg/k$. It is a typical exponential approach curve.

### IT-2: Coupled DEs (with Matrices)
**Question:** Solve the system: $\frac{dx}{dt} = 2x + y$, $\frac{dy}{dt} = x + 2y$, with $x(0) = 1$, $y(0) = 0$. (a) Write in matrix form. (b) Find eigenvalues and eigenvectors of the coefficient matrix. (c) Solve the system. (d) Calculate $x(1)$ and $y(1)$.

**Solution:**

(a) $\frac{d}{dt}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix}$.

(b) From the matrix diagnostics: eigenvalues $\lambda_1 = 3$ (eigenvector $\begin{pmatrix}1\\1\end{pmatrix}$) and $\lambda_2 = 1$ (eigenvector $\begin{pmatrix}1\\-1\end{pmatrix}$).

(c) $\begin{pmatrix}x\\y\end{pmatrix} = c_1 e^{3t}\begin{pmatrix}1\\1\end{pmatrix} + c_2 e^{t}\begin{pmatrix}1\\-1\end{pmatrix}$.

$\begin{pmatrix}1\\0\end{pmatrix} = c_1\begin{pmatrix}1\\1\end{pmatrix} + c_2\begin{pmatrix}1\\-1\end{pmatrix}$. $c_1 + c_2 = 1$ and $c_1 - c_2 = 0$, so $c_1 = c_2 = 1/2$.

$x = \frac{e^{3t} + e^t}{2}$, $y = \frac{e^{3t} - e^t}{2}$.

(d) $x(1) = \frac{e^3 + e}{2} = \frac{20.086 + 2.718}{2} = 11.40$. $y(1) = \frac{e^3 - e}{2} = \frac{20.086 - 2.718}{2} = 8.68$.

### IT-3: Forming DEs from Context (with Complex Numbers)
**Question:** The current $I(t)$ in an RL circuit with inductance $L$ and resistance $R$ satisfies $L\frac{dI}{dt} + RI = V_0\cos(\omega t)$. (a) Solve this DE given $I(0) = 0$. (b) Identify the transient and steady-state components. (c) Find the amplitude of the steady-state current. (d) Explain what happens when $\omega \to 0$.

**Solution:**

(a) $\frac{dI}{dt} + \frac{R}{L}I = \frac{V_0}{L}\cos(\omega t)$. Let $\alpha = R/L$.

IF: $e^{\alpha t}$. $\frac{d}{dt}(Ie^{\alpha t}) = \frac{V_0}{L}e^{\alpha t}\cos(\omega t)$.

The PI requires $I_p = A\cos(\omega t) + B\sin(\omega t)$.
$I_p' = -A\omega\sin(\omega t) + B\omega\cos(\omega t)$.
$\alpha I_p + I_p' = \alpha A\cos + \alpha B\sin - A\omega\sin + B\omega\cos = \frac{V_0}{L}\cos(\omega t)$.

$\alpha A + B\omega = V_0/L$ and $\alpha B - A\omega = 0$, so $B = A\omega/\alpha$.

$A\alpha + A\omega^2/\alpha = V_0/L$. $A = \frac{V_0\alpha}{L(\alpha^2 + \omega^2)} = \frac{V_0 R}{L^2(\omega^2 + R^2/L^2)} = \frac{V_0 R}{R^2 + \omega^2 L^2}$.

$I = Ce^{-Rt/L} + \frac{V_0}{R^2 + \omega^2 L^2}[R\cos(\omega t) + \omega L\sin(\omega t)]$.

At $t = 0$: $0 = C + \frac{V_0 R}{R^2 + \omega^2 L^2}$, so $C = -\frac{V_0 R}{R^2 + \omega^2 L^2}$.

(b) **Transient:** $Ce^{-Rt/L}$ (decays to zero as $t \to \infty$). **Steady-state:** $\frac{V_0}{R^2 + \omega^2 L^2}[R\cos(\omega t) + \omega L\sin(\omega t)]$.

(c) Amplitude $= \frac{V_0}{R^2 + \omega^2 L^2}\sqrt{R^2 + \omega^2 L^2} = \frac{V_0}{\sqrt{R^2 + \omega^2 L^2}}$.

(d) When $\omega \to 0$ (DC circuit): amplitude $\to \frac{V_0}{R} = I_0$. The current approaches $V_0/R$ with time constant $L/R$. This is the classic RL circuit charging: the inductor initially opposes current flow, but as the magnetic field builds, the current asymptotically approaches $V_0/R$.
