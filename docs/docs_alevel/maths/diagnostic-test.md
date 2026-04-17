---
title: A Level Mathematics Diagnostic Test
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: alevel-maths-diagnostic-test
---

## Instructions

This diagnostic test contains **45 questions** spanning all A Level Mathematics topics. Each
question tests a specific concept and requires 2-5 steps. Attempt all questions before checking
solutions.

- **Time:** Allow approximately 90 minutes.
- **Equipment:** Calculator permitted where indicated.
- **Scoring:** Each question is worth 1 mark. Use your results to identify weak areas for revision.

---

## Pure Mathematics

### Algebra and Functions

<details>
<summary>Q1. Simplify $\dfrac{x^2 - 9}{x^2 - x - 6}$.</summary>
$\dfrac{x^2-9}{x^2-x-6} = \dfrac{(x-3)(x+3)}{(x-3)(x+2)} = \dfrac{x+3}{x+2}$, $x \neq 3, -2$.

**If you get this wrong, revise:**
[Algebraic Expressions](/docs/alevel/maths/pure-mathematics/algebraic-expressions)
</details>

<details>
<summary>Q2. Solve $x^2 - 5x + 6 \geq 0$.</summary>
$(x-2)(x-3) \geq 0$. The quadratic opens upward, so $x \leq 2$ or $x \geq 3$.

**If you get this wrong, revise:**
[Equations and Inequalities](/docs/alevel/maths/pure-mathematics/equations-and-inequalities)
</details>

<details>
<summary>Q3. Find the inverse of $f(x) = \dfrac{2x+1}{x-3}$, $x \neq 3$.</summary>
$y = \dfrac{2x+1}{x-3} \implies y(x-3) = 2x+1 \implies yx - 3y = 2x + 1 \implies x(y-2) = 3y+1$.

$f^{-1}(x) = \dfrac{3x+1}{x-2}$, $x \neq 2$.

**If you get this wrong, revise:**
[Functions](/docs/alevel/maths/pure-mathematics/functions)
</details>

<details>
<summary>Q4. Express $\dfrac{3x+5}{(x-1)(x+2)}$ in partial fractions.</summary>
$\dfrac{3x+5}{(x-1)(x+2)} = \dfrac{A}{x-1} + \dfrac{B}{x+2}$.

$3x+5 = A(x+2) + B(x-1)$. $x=1$: $8 = 3A \implies A = 8/3$. $x=-2$: $-1 = -3B \implies B = 1/3$.

$= \dfrac{8/3}{x-1} + \dfrac{1/3}{x+2} = \dfrac{8}{3(x-1)} + \dfrac{1}{3(x+2)}$.

**If you get this wrong, revise:**
[Algebraic Expressions](/docs/alevel/maths/pure-mathematics/algebraic-expressions)
</details>

### Sequences, Series, and Binomial Expansion

<details>
<summary>Q5. Find the sum of the first 50 terms of the arithmetic series $3 + 7 + 11 + \cdots$.</summary>
$a = 3$, $d = 4$. $S_{50} = \dfrac{50}{2}[2(3) + 49(4)] = 25(6 + 196) = 25 \times 202 = 5050$.

**If you get this wrong, revise:**
[Sequences and Series](/docs/alevel/maths/pure-mathematics/sequences-and-series)
</details>

<details>
<summary>Q6. Find the coefficient of $x^3$ in the expansion of $(2-3x)^5$.</summary>
$\binom{5}{3}(2)^2(-3x)^3 = 10 \times 4 \times (-27x^3) = -1080x^3$. Coefficient $= -1080$.

**If you get this wrong, revise:**
[Binomial Expansion](/docs/alevel/maths/pure-mathematics/binomial-expansion)
</details>

<details>
<summary>Q7. Find the sum to infinity of $0.5 + 0.1 + 0.02 + 0.004 + \cdots$.</summary>
$a = 0.5$, $r = 0.2$. $|r| \lt{} 1$. $S_\infty = \dfrac{0.5}{1-0.2} = \dfrac{0.5}{0.8} = 0.625$.

**If you get this wrong, revise:**
[Sequences and Series](/docs/alevel/maths/pure-mathematics/sequences-and-series)
</details>

### Trigonometry

<details>
<summary>Q8. Solve $\sin 2x = \cos x$ for $0 \leq x \leq 2\pi$.</summary>
$2\sin x\cos x = \cos x \implies \cos x(2\sin x - 1) = 0$.

$\cos x = 0 \implies x = \pi/2, 3\pi/2$.
$2\sin x - 1 = 0 \implies \sin x = 1/2 \implies x = \pi/6, 5\pi/6$.

$x = \pi/6, \pi/2, 5\pi/6, 3\pi/2$.

**If you get this wrong, revise:**
[Trigonometry](/docs/alevel/maths/pure-mathematics/trigonometry)
</details>

<details>
<summary>Q9. Prove that $\dfrac{1-\cos 2x}{1+\cos 2x} = \tan^2 x$.</summary>
$\dfrac{1-\cos 2x}{1+\cos 2x} = \dfrac{2\sin^2 x}{2\cos^2 x} = \tan^2 x$. $\blacksquare$

**If you get this wrong, revise:**
[Trigonometry](/docs/alevel/maths/pure-mathematics/trigonometry)
</details>

### Exponentials and Logarithms

<details>
<summary>Q10. Solve $3^{2x-1} = 7$.</summary>
$(2x-1)\ln 3 = \ln 7 \implies x = \dfrac{\ln 7 + \ln 3}{2\ln 3} = \dfrac{\ln 21}{2\ln 3} \approx 1.771$.

**If you get this wrong, revise:**
[Exponentials and Logarithms](/docs/alevel/maths/pure-mathematics/exponentials-and-logarithms)
</details>

<details>
<summary>Q11. A population grows from 500 to 2000 in 6 hours. Find the doubling time (assume exponential growth).</summary>
$2000 = 500e^{6k} \implies e^{6k} = 4 \implies k = \dfrac{\ln 4}{6} = \dfrac{\ln 2}{3}$.

$T_d = \dfrac{\ln 2}{k} = 3$ hours.

**If you get this wrong, revise:**
[Exponentials and Logarithms](/docs/alevel/maths/pure-mathematics/exponentials-and-logarithms)
</details>

### Differentiation

<details>
<summary>Q12. Find $\dfrac{dy}{dx}$ where $y = \dfrac{x^2 e^x}{\sin x}$.</summary>
$u = x^2e^x$, $v = \sin x$. $u' = e^x(x^2+2x)$, $v' = \cos x$.

$\dfrac{dy}{dx} = \dfrac{e^x(x^2+2x)\sin x - x^2e^x\cos x}{\sin^2 x}$.

**If you get this wrong, revise:**
[Differentiation](/docs/alevel/maths/pure-mathematics/differentiation)
</details>

<details>
<summary>Q13. Find the stationary points of $y = x^3 - 3x + 2$ and classify them.</summary>
$y' = 3x^2 - 3 = 0 \implies x = \pm 1$. $y'' = 6x$.

$x=1$: $y'' = 6 \gt{} 0$, minimum at $(1, 0)$. $x=-1$: $y'' = -6 \lt{} 0$, maximum at $(-1, 4)$.

**If you get this wrong, revise:**
[Differentiation](/docs/alevel/maths/pure-mathematics/differentiation)
</details>

<details>
<summary>Q14. A sphere's radius increases at $3\,\text{cm/s}$. Find $dV/dt$ when $r = 5\,\text{cm}$.</summary>
$V = \dfrac{4}{3}\pi r^3$. $\dfrac{dV}{dt} = 4\pi r^2\dfrac{dr}{dt} = 4\pi(25)(3) = 300\pi\,\text{cm}^3/\text{s}$.

**If you get this wrong, revise:**
[Differentiation](/docs/alevel/maths/pure-mathematics/differentiation)
</details>

### Integration

<details>
<summary>Q15. Evaluate $\displaystyle\int_0^1 x e^x\,dx$.</summary>
By parts: $u=x$, $dv=e^x\,dx$. $I = [xe^x]_0^1 - \int_0^1 e^x\,dx = e - (e-1) = 1$.

**If you get this wrong, revise:**
[Integration](/docs/alevel/maths/pure-mathematics/integration)
</details>

<details>
<summary>Q16. Find the area enclosed between $y = x^2$ and $y = x$.</summary>
Intersection: $x^2 = x \implies x = 0, 1$.

$A = \int_0^1 (x - x^2)\,dx = \left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_0^1 = \dfrac{1}{2} - \dfrac{1}{3} = \dfrac{1}{6}$.

**If you get this wrong, revise:**
[Integration](/docs/alevel/maths/pure-mathematics/integration)
</details>

### Vectors

<details>
<summary>Q17. Find the angle between $\mathbf{a} = \begin{pmatrix}1\\2\\-1\end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix}3\\-1\\2\end{pmatrix}$.</summary>
$\mathbf{a}\cdot\mathbf{b} = 3-2-2 = -1$. $|\mathbf{a}| = \sqrt{6}$, $|\mathbf{b}| = \sqrt{14}$.

$\cos\theta = \dfrac{-1}{\sqrt{84}} \implies \theta \approx 96.3°$.

**If you get this wrong, revise:** [Vectors](/docs/alevel/maths/pure-mathematics/vectors)
</details>

<details>
<summary>Q18. Write the equation of the line through $(1,2,-1)$ in direction $\begin{pmatrix}2\\-1\\3\end{pmatrix}$.</summary>
$\mathbf{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + t\begin{pmatrix}2\\-1\\3\end{pmatrix}$.

**If you get this wrong, revise:** [Vectors](/docs/alevel/maths/pure-mathematics/vectors)
</details>

### Proof

<details>
<summary>Q19. Prove by contradiction that $\sqrt{5}$ is irrational.</summary>
Suppose $\sqrt{5} = a/b$ in lowest terms. $5b^2 = a^2$, so $5 \mid a^2 \implies 5 \mid a$. Write $a = 5k$: $5b^2 = 25k^2 \implies b^2 = 5k^2$, so $5 \mid b$. Contradicts $\gcd(a,b)=1$. $\blacksquare$

**If you get this wrong, revise:** [Proof](/docs/alevel/maths/pure-mathematics/proof)
</details>

<details>
<summary>Q20. Prove by induction that $\displaystyle\sum_{r=1}^{n} r^2 = \dfrac{n(n+1)(2n+1)}{6}$.</summary>
*Base ($n=1$):* $1 = 1(2)(3)/6 = 1$. ✓
*Step:* $\dfrac{k(k+1)(2k+1)}{6} + (k+1)^2 = \dfrac{(k+1)[k(2k+1)+6(k+1)]}{6} = \dfrac{(k+1)(2k^2+7k+6)}{6} = \dfrac{(k+1)(k+2)(2k+3)}{6}$. ✓

**If you get this wrong, revise:** [Proof](/docs/alevel/maths/pure-mathematics/proof)
</details>

### Numerical Methods

<details>
<summary>Q21. Show $x^3 - x - 2 = 0$ has a root in $[1, 2]$.</summary>
$f(1) = -2 \lt{} 0$, $f(2) = 4 \gt{} 0$. Sign change, continuous function $\implies$ root in $(1,2)$.

**If you get this wrong, revise:**
[Numerical Methods](/docs/alevel/maths/pure-mathematics/numerical-methods)
</details>

<details>
<summary>Q22. Use Newton-Raphson with $x_0=1.5$ to find $x_1$ for $f(x)=x^3-x-2=0$.</summary>
$f'(x)=3x^2-1$. $f(1.5)=3.375-1.5-2=-0.125$. $f'(1.5)=6.75-1=5.75$.

$x_1 = 1.5-(-0.125/5.75) = 1.5+0.0217 = 1.5217$.

**If you get this wrong, revise:**
[Numerical Methods](/docs/alevel/maths/pure-mathematics/numerical-methods)
</details>

---

## Statistics

### Data Representation

<details>
<summary>Q23. Find the mean and standard deviation of $\{4, 8, 6, 2, 10\}$.</summary>
$\bar{x} = 30/5 = 6$. $\sum x^2 = 16+64+36+4+100 = 220$. $\sigma^2 = 220/5 - 36 = 44-36 = 8$. $\sigma = 2\sqrt{2} \approx 2.83$.

**If you get this wrong, revise:**
[Data Representation](/docs/alevel/maths/statistics/data-representation)
</details>

<details>
<summary>Q24. Data coded as $y = (x-50)/10$ has $\bar{y}=3$ and $\sigma_y=2$. Find the original mean and SD.</summary>
$\bar{x} = 10(3)+50 = 80$. $\sigma_x = 10(2) = 20$.

**If you get this wrong, revise:**
[Data Representation](/docs/alevel/maths/statistics/data-representation)
</details>

### Correlation and Regression

<details>
<summary>Q25. Given $S_{xx}=40$, $S_{xy}=24$, $S_{yy}=25$, $\bar{x}=5$, $\bar{y}=7$, find $r$ and the regression line of $y$ on $x$.</summary>
$r = \dfrac{24}{\sqrt{40 \times 25}} = \dfrac{24}{\sqrt{1000}} = \dfrac{24}{31.62} \approx 0.759$.

$b = 24/40 = 0.6$, $a = 7 - 0.6(5) = 4$. Line: $y = 4 + 0.6x$.

**If you get this wrong, revise:**
[Correlation and Regression](/docs/alevel/maths/statistics/correlation-and-regression)
</details>

### Probability

<details>
<summary>Q26. $P(A)=0.6$, $P(B)=0.5$, $P(A \cap B)=0.3$. Find $P(A|B)$ and $P(A \cup B)$.</summary>
$P(A|B) = 0.3/0.5 = 0.6$. $P(A \cup B) = 0.6+0.5-0.3 = 0.8$.

**If you get this wrong, revise:**
[Probability](/docs/alevel/maths/statistics/probability)
</details>

<details>
<summary>Q27. A bag has 5 red and 3 blue balls. Two are drawn without replacement. Find $P(\text{both red})$.</summary>
$P = \dfrac{5}{8} \times \dfrac{4}{7} = \dfrac{20}{56} = \dfrac{5}{14}$.

**If you get this wrong, revise:**
[Probability](/docs/alevel/maths/statistics/probability)
</details>

<details>
<summary>Q28. A disease affects 2% of the population. A test is 95% accurate. Find $P(\text{disease} \mid \text{positive})$.</summary>
$P(T^+|D) = 0.95$, $P(T^+|D') = 0.05$. $P(T^+) = 0.95(0.02) + 0.05(0.98) = 0.019 + 0.049 = 0.068$.

$P(D|T^+) = 0.019/0.068 = 19/68 \approx 0.279$.

**If you get this wrong, revise:**
[Probability](/docs/alevel/maths/statistics/probability)
</details>

### Statistical Distributions

<details>
<summary>Q29. $X \sim B(12, 0.3)$. Find $P(X = 4)$.</summary>
$P(X=4) = \binom{12}{4}(0.3)^4(0.7)^8 = 495 \times 0.0081 \times 0.0576 \approx 0.2311$.

**If you get this wrong, revise:**
[Statistical Distributions](/docs/alevel/maths/statistics/statistical-distributions)
</details>

<details>
<summary>Q30. $X \sim N(100, 64)$. Find $P(X \gt{} 108)$.</summary>
$P(X \gt{} 108) = P(Z \gt{} 8/8) = P(Z \gt{} 1) = 1 - 0.8413 = 0.1587$.

**If you get this wrong, revise:**
[Statistical Distributions](/docs/alevel/maths/statistics/statistical-distributions)
</details>

<details>
<summary>Q31. $X \sim \text{Po}(5)$. Find $P(X \leq 3)$.</summary>
$P(X \leq 3) = e^{-5}\left(1+5+\dfrac{25}{2}+\dfrac{125}{6}\right) = e^{-5}(1+5+12.5+20.833) = 39.333 \times 0.00674 \approx 0.2650$.

**If you get this wrong, revise:**
[Statistical Distributions](/docs/alevel/maths/statistics/statistical-distributions)
</details>

### Hypothesis Testing

<details>
<summary>Q32. A coin is tossed 20 times, landing heads 15 times. Test at 5% if biased towards heads.</summary>
$H_0: p=0.5$, $H_1: p>0.5$. Under $H_0$: $X \sim B(20,0.5)$.

$P(X \geq 15) = 1-P(X \leq 14) \approx 0.0207 \lt{} 0.05$. **Reject** $H_0$: evidence of bias.

**If you get this wrong, revise:**
[Hypothesis Testing](/docs/alevel/maths/statistics/hypothesis-testing)
</details>

<details>
<summary>Q33. Define Type I and Type II errors.</summary>
Type I: Rejecting $H_0$ when $H_0$ is true (false positive).
Type II: Failing to reject $H_0$ when $H_0$ is false (false negative).

**If you get this wrong, revise:**
[Hypothesis Testing](/docs/alevel/maths/statistics/hypothesis-testing)
</details>

---

## Mechanics

### Kinematics

<details>
<summary>Q34. A car accelerates from $15\,\text{m/s}$ to $35\,\text{m/s}$ over $200\,\text{m}$. Find the acceleration.</summary>
$v^2 = u^2 + 2as \implies 1225 = 225 + 400a \implies a = 1000/400 = 2.5\,\text{m/s}^2$.

**If you get this wrong, revise:** [Kinematics](/docs/alevel/maths/mechanics/kinematics)
</details>

<details>
<summary>Q35. A projectile is launched at $25\,\text{m/s}$ at $50°$ above horizontal. Find the maximum height.</summary>
$H = \dfrac{(25\sin 50°)^2}{2(9.8)} = \dfrac{(19.15)^2}{19.6} = \dfrac{366.7}{19.6} \approx 18.71\,\text{m}$.

**If you get this wrong, revise:** [Kinematics](/docs/alevel/maths/mechanics/kinematics)
</details>

<details>
<summary>Q36. A particle has velocity $v = 4t - t^2$ m/s. Find the total distance travelled from $t=0$ to $t=4$.</summary>
$v=0$ at $t=0,4$. For $0<t<4$: $v>0$. $s = \int_0^4(4t-t^2)\,dt = [2t^2-t^3/3]_0^4 = 32-64/3 = 32/3 \approx 10.67\,\text{m}$.

**If you get this wrong, revise:** [Kinematics](/docs/alevel/maths/mechanics/kinematics)
</details>

### Forces and Newton's Laws

<details>
<summary>Q37. A $5\,\text{kg}$ block on a rough surface ($\mu=0.4$) is pushed by $30\,\text{N}$ horizontally. Find the acceleration.</summary>
$R = 49\,\text{N}$. $F_{\max} = 19.6\,\text{N}$. $a = (30-19.6)/5 = 10.4/5 = 2.08\,\text{m/s}^2$.

**If you get this wrong, revise:**
[Forces and Newton's Laws](/docs/alevel/maths/mechanics/forces-and-newtons-laws)
</details>

<details>
<summary>Q38. Masses $8\,\text{kg}$ and $5\,\text{kg}$ hang over a smooth pulley. Find the acceleration and tension.</summary>
$8g-T=8a$, $T-5g=5a$. Adding: $3g=13a \implies a = 3g/13 \approx 2.26\,\text{m/s}^2$.

$T = 5(g+a) = 5(9.8+2.26) = 60.3\,\text{N}$.

**If you get this wrong, revise:**
[Forces and Newton's Laws](/docs/alevel/maths/mechanics/forces-and-newtons-laws)
</details>

### Moments

<details>
<summary>Q39. A uniform beam of length $6\,\text{m}$ and weight $300\,\text{N}$ is supported at both ends. A $200\,\text{N}$ load is $2\,\text{m}$ from the left end. Find the reactions.</summary>
Moments about left end: $R_R \times 6 = 300 \times 3 + 200 \times 2 = 1300 \implies R_R = 216.7\,\text{N}$.

$R_L = 500 - 216.7 = 283.3\,\text{N}$.

**If you get this wrong, revise:** [Moments](/docs/alevel/maths/mechanics/moments)
</details>

<details>
<summary>Q40. Find the centre of mass of masses $3\,\text{kg}$, $4\,\text{kg}$, $5\,\text{kg}$ at $(0,0)$, $(6,0)$, $(3,4)$.</summary>
$\bar{x} = \dfrac{0+24+15}{12} = 39/12 = 3.25$. $\bar{y} = \dfrac{0+0+20}{12} = 5/3 \approx 1.67$.

**If you get this wrong, revise:** [Moments](/docs/alevel/maths/mechanics/moments)
</details>

### Energy and Work

<details>
<summary>Q41. A car of mass $1000\,\text{kg}$ has engine power $40\,\text{kW}$. Find the maximum speed against a resistance of $500\,\text{N}$.</summary>
$P = Fv \implies 40000 = 500v \implies v = 80\,\text{m/s}$.

**If you get this wrong, revise:**
[Energy and Work](/docs/alevel/maths/mechanics/energy-and-work)
</details>

<details>
<summary>Q42. A $2\,\text{kg}$ ball is dropped from $15\,\text{m}$. Find its speed just before impact using energy conservation.</summary>
$mgh = \tfrac{1}{2}mv^2 \implies v = \sqrt{2(9.8)(15)} = \sqrt{294} \approx 17.1\,\text{m/s}$.

**If you get this wrong, revise:**
[Energy and Work](/docs/alevel/maths/mechanics/energy-and-work)
</details>

### Momentum

<details>
<summary>Q43. A $4\,\text{kg}$ body moving at $6\,\text{m/s}$ collides with a $2\,\text{kg}$ body at rest. They stick together. Find the common velocity.</summary>
$4(6) + 2(0) = 6v \implies v = 4\,\text{m/s}$.

**If you get this wrong, revise:** [Momentum](/docs/alevel/maths/mechanics/momentum)
</details>

<details>
<summary>Q44. A ball hits a wall at $10\,\text{m/s}$ and rebounds at $7\,\text{m/s}$. If its mass is $0.15\,\text{kg}$, find the impulse.</summary>
$J = m(v-u) = 0.15(-7-10) = 0.15(-17) = -2.55\,\text{Ns}$. Magnitude: $2.55\,\text{Ns}$.

**If you get this wrong, revise:** [Momentum](/docs/alevel/maths/mechanics/momentum)
</details>

<details>
<summary>Q45. Two bodies ($3\,\text{kg}$ at $5\,\text{m/s}$, $2\,\text{kg}$ at $-3\,\text{m/s}$) collide with $e=0.5$. Find the velocities after collision.</summary>
Momentum: $15-6 = 3v_1+2v_2 \implies 3v_1+2v_2 = 9$.
Restitution: $v_2-v_1 = 0.5(5-(-3)) = 4 \implies v_2 = v_1+4$.

$3v_1+2(v_1+4) = 9 \implies 5v_1 = 1 \implies v_1 = 0.2\,\text{m/s}$, $v_2 = 4.2\,\text{m/s}$.

**If you get this wrong, revise:** [Momentum](/docs/alevel/maths/mechanics/momentum)
</details>

---

## Scoring and Revision Guide

| Score    | Action                              |
| -------- | ----------------------------------- |
| 40–45    | Excellent — focus on exam technique |
| 30–39    | Good — revise weak topics           |
| 20–29    | Fair — systematic revision needed   |
| Below 20 | Significant revision required       |

Use the revision links under each question to jump directly to the relevant topic notes.
