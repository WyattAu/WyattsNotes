---
title: Logarithms
date: 2025-06-03T16:19:00.000Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: logarithms
---

Logarithms are the inverse operation of exponentiation and play a central role in the DSE
Mathematics compulsory syllabus. They arise naturally when solving exponential equations, modelling
growth and decay, and simplifying multiplicative structures into additive ones. This topic builds
directly on the properties of [exponential functions](./functions.md#exponential-functions) and
connects to [geometric sequences and series](./sequences-and-series.md) in applications involving
compound growth.

## Definition of Logarithms

### Logarithmic Notation

For $a \gt{} 0$, $a \neq 1$, and $x \gt{} 0$, the logarithmic statement

$$
\log_a x = y
$$

is defined to be equivalent to the exponential statement

$$
a^y = x.
$$

In words: "$\log_a x$" is the power to which $a$ must be raised to obtain $x$. The number $a$ is
called the **base** of the logarithm, and $x$ is the **argument**.

The two conditions on the base arise because:

- If $a = 1$, then $1^y = 1$ for all $y$, so no unique logarithm exists.
- If $a \leq 0$, then $a^y$ is not defined for all real $y$ (e.g. $(-2)^{1/2}$ is not real).

The condition $x \gt{} 0$ follows from the fact that $a^y \gt{} 0$ for all real $y$ when
$a \gt{} 0$, so the logarithm is only defined for positive arguments.

### Special Cases

Several special values follow immediately from the definition:

$$
\log_a 1 = 0 \quad \mathrm{since } a^0 = 1
$$

$$
\log_a a = 1 \quad \mathrm{since } a^1 = a
$$

$$
\log_a a^k = k \quad \mathrm{since } a^k = a^k
$$

Additionally, for any base $a \gt{} 0$ with $a \neq 1$:

$$
a^{\log_a x} = x \quad (x \gt{} 0)
$$

$$
\log_a(a^y) = y \quad (y \in \mathbb{R})
$$

These two identities express the fact that the logarithmic and exponential functions are
[inverses](./functions.md#inverse-functions) of each other.

<details>
<summary>Examples</summary>

- $\log_2 8 = 3$ since $2^3 = 8$.
- $\log_3 81 = 4$ since $3^4 = 81$.
- $\log_5 1 = 0$ since $5^0 = 1$.
- $\log_7 7 = 1$ since $7^1 = 7$.
- $\log_{10} 1000 = 3$ since $10^3 = 1000$.
- $\log_2 \frac{1}{8} = -3$ since $2^{-3} = \frac{1}{8}$.
</details>

---

## Laws of Logarithms

The following laws are essential for manipulating logarithmic expressions. In all cases,
$a \gt{} 0$, $a \neq 1$, and the arguments of all logarithms are positive.

### Product Rule

$$
\log_a(xy) = \log_a x + \log_a y
$$

**Derivation.** Let $m = \log_a x$ and $n = \log_a y$, so that $a^m = x$ and $a^n = y$. Then:

$$
xy = a^m \cdot a^n = a^{m+n}
$$

By the definition of logarithms, $\log_a(xy) = m + n = \log_a x + \log_a y$.

### Quotient Rule

$$
\log_a \frac{x}{y} = \log_a x - \log_a y
$$

**Derivation.** Similarly, let $m = \log_a x$ and $n = \log_a y$:

$$
\frac{x}{y} = \frac{a^m}{a^n} = a^{m-n}
$$

Therefore $\log_a \dfrac{x}{y} = m - n = \log_a x - \log_a y$.

### Power Rule

$$
\log_a(x^n) = n \log_a x
$$

**Derivation.** Let $m = \log_a x$, so that $a^m = x$. Then:

$$
x^n = (a^m)^n = a^{mn}
$$

Therefore $\log_a(x^n) = mn = n \log_a x$.

### Change of Base Formula

For any positive $c \neq 1$:

$$
\log_a b = \frac{\log_c b}{\log_c a}
$$

**Derivation.** Let $y = \log_a b$, so that $a^y = b$. Taking logarithms base $c$ of both sides:

$$
\log_c(a^y) = \log_c b
$$

By the power rule, $y \log_c a = \log_c b$, hence:

$$
y = \frac{\log_c b}{\log_c a}
$$

A commonly used special case is the change to base 10:

$$
\log_a b = \frac{\log_{10} b}{\log_{10} a}
$$

<details>
<summary>Examples</summary>

- $\log_2 6 + \log_2 3 = \log_2(6 \times 3) = \log_2 18$.
- $\log_3 54 - \log_3 2 = \log_3 \dfrac{54}{2} = \log_3 27 = 3$.
- $3\log_5 2 = \log_5(2^3) = \log_5 8$.
- $\log_4 9 = \dfrac{\log_{10} 9}{\log_{10} 4} = \dfrac{2\log_{10} 3}{2\log_{10} 2} = \dfrac{\log_{10} 3}{\log_{10} 2}$.
</details>

### A Note on Invalid Manipulations

A common error is to distribute a logarithm over addition or subtraction:

$$
\log_a(x + y) \neq \log_a x + \log_a y
$$

$$
\log_a(x - y) \neq \log_a x - \log_a y
$$

The product and quotient rules only apply to products and quotients **inside** the logarithm, not to
sums or differences.

---

## Common and Natural Logarithms

### Common Logarithm (Base 10)

The **common logarithm** of $x$, written $\log_{10} x$ (or simply $\log x$ in many DSE contexts), is
the logarithm with base 10. It is the default logarithm on most calculators and is widely used in
scientific measurement scales.

### Natural Logarithm (Base $e$)

The **natural logarithm** of $x$, written $\ln x = \log_e x$, uses the base $e \approx 2.71828$. The
number $e$ is defined as:

$$
e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n
$$

The natural logarithm arises naturally in calculus and in continuous growth models. Its importance
stems from the fact that the derivative of $\ln x$ is $\frac{1}{x}$, making it the unique logarithm
with this property.

### Relationship to Exponential Functions

The exponential and logarithmic functions are [inverse functions](./functions.md#inverse-functions)
of each other. This means their graphs are reflections of each other across the line $y = x$.

| Property      | $y = a^x$ (exponential)              | $y = \log_a x$ (logarithmic)         |
| ------------- | ------------------------------------ | ------------------------------------ |
| Domain        | $\mathbb{R}$                         | $(0, \infty)$                        |
| Range         | $(0, \infty)$                        | $\mathbb{R}$                         |
| $x$-intercept | $(0, 1)$ (since $a^0 = 1$)           | $(1, 0)$ (since $\log_a 1 = 0$)      |
| Asymptote     | Horizontal: $y = 0$                  | Vertical: $x = 0$                    |
| Monotonicity  | Strictly increasing when $a \gt{} 1$ | Strictly increasing when $a \gt{} 1$ |

When $0 \lt{} a \lt{} 1$, both functions are strictly decreasing.

<details>
<summary>Examples</summary>

- $\log 1000 = 3$ since $10^3 = 1000$.
- $\log 0.01 = -2$ since $10^{-2} = 0.01$.
- $\ln e^5 = 5$ by the special case $\log_a a^k = k$.
- $\ln 1 = 0$ since $e^0 = 1$.
- $e^{\ln 7} = 7$ by the inverse property.
</details>

---

## Solving Logarithmic Equations

### General Strategy

To solve equations involving logarithms:

1. Combine logarithmic terms using the laws of logarithms where possible.
2. Rewrite the equation in the form $\log_a(\mathrm{expression}) = k$.
3. Convert to exponential form: $\mathrm{expression} = a^k$.
4. Solve the resulting algebraic equation.
5. **Check all solutions against the domain restriction**: every argument of a logarithm must be
   positive.

### Domain Restrictions

Before solving, always identify the domain. For an equation containing $\log_a f(x)$, we require
$f(x) \gt{} 0$. Solutions that violate this condition are **extraneous** and must be discarded.

### Common Mistakes

- Forgetting to check that arguments are positive.
- Applying logarithm laws to sums (e.g., writing $\log(x + 3)$ as $\log x + \log 3$).
- Dropping the base or confusing bases during a multi-step solution.
- Squaring both sides of an equation and introducing extraneous solutions.

<details>
<summary>Examples</summary>

**Example 1.** Solve $\log_3(x + 2) + \log_3(x - 6) = 3$.

- Domain: $x + 2 \gt{} 0$ and $x - 6 \gt{} 0$, so $x \gt{} 6$.
- Combine: $\log_3[(x+2)(x-6)] = 3$.
- Convert: $(x+2)(x-6) = 3^3 = 27$.
- Expand: $x^2 - 4x - 12 = 27$, so $x^2 - 4x - 39 = 0$.
- Quadratic formula:
  $x = \dfrac{4 \pm \sqrt{16 + 156}}{2} = \dfrac{4 \pm \sqrt{172}}{2} = 2 \pm \sqrt{43}$.
- Since $x \gt{} 6$, only $x = 2 + \sqrt{43}$ is accepted.

**Example 2.** Solve $\log_2(x) - \log_2(x - 2) = 3$.

- Domain: $x \gt{} 0$ and $x \gt{} 2$, so $x \gt{} 2$.
- Quotient rule: $\log_2 \dfrac{x}{x-2} = 3$.
- Convert: $\dfrac{x}{x-2} = 2^3 = 8$.
- Solve: $x = 8x - 16$, so $7x = 16$, hence $x = \dfrac{16}{7}$.
- Check: $\dfrac{16}{7} \gt{} 2$ is satisfied.
</details>

---

## Solving Exponential Equations

### Taking Logarithms of Both Sides

When an equation involves terms of the form $a^{f(x)}$, taking logarithms of both sides can convert
the equation from exponential to algebraic form. The choice of base is flexible; in the DSE, base 10
is most common since calculators provide direct access to $\log_{10}$.

### Using the Change of Base Formula

When the equation involves different bases, rewrite all terms using the same base or apply the
change of base formula to bring all logarithms to a common base.

### General Strategy

1. Isolate the exponential term if possible.
2. Take logarithms of both sides.
3. Use the power rule to bring down exponents.
4. Solve the resulting linear (or polynomial) equation.

<details>
<summary>Examples</summary>

**Example 1.** Solve $3^{2x+1} = 7$.

- Take $\log$ of both sides: $\log(3^{2x+1}) = \log 7$.
- Power rule: $(2x+1)\log 3 = \log 7$.
- Solve: $2x + 1 = \dfrac{\log 7}{\log 3}$, so
  $x = \dfrac{1}{2}\left(\dfrac{\log 7}{\log 3} - 1\right)$.

**Example 2.** Solve $5^{x} = 2^{x+3}$.

- Take $\log$ of both sides: $\log(5^x) = \log(2^{x+3})$.
- Power rule: $x\log 5 = (x+3)\log 2$.
- Expand: $x\log 5 = x\log 2 + 3\log 2$.
- Collect: $x(\log 5 - \log 2) = 3\log 2$.
- Solve: $x = \dfrac{3\log 2}{\log 5 - \log 2} = \dfrac{3\log 2}{\log \frac{5}{2}}$.

**Example 3.** Solve $4^{x} - 2^{x+1} - 3 = 0$.

- Note $4^x = (2^2)^x = 2^{2x}$. Let $u = 2^x$ ($u \gt{} 0$).
- Substitute: $u^2 - 2u - 3 = 0$.
- Factor: $(u - 3)(u + 1) = 0$, so $u = 3$ or $u = -1$.
- Since $u \gt{} 0$, only $u = 3$, giving $2^x = 3$.
- Take $\log$: $x\log 2 = \log 3$, so $x = \dfrac{\log 3}{\log 2}$.
</details>

---

## Applications

### pH Scale

The pH of a solution is defined as:

$$
\mathrm{pH} = -\log_{10}[\mathrm{H}^+]
$$

where $[\mathrm{H}^+]$ is the concentration of hydrogen ions (in mol/L). A lower pH means a higher
concentration of hydrogen ions and therefore a more acidic solution.

- A neutral solution (pure water) has $[\mathrm{H}^+] = 10^{-7}$ mol/L, giving $\mathrm{pH} = 7$.
- Acidic solutions have $\mathrm{pH} \lt{} 7$; alkaline solutions have $\mathrm{pH} \gt{} 7$.
- The scale is logarithmic: a decrease of 1 in pH corresponds to a tenfold increase in
  $[\mathrm{H}^+]$.

<details>
<summary>Example</summary>

A solution has $[\mathrm{H}^+] = 2.5 \times 10^{-4}$ mol/L. Find its pH.

$$
\mathrm{pH} = -\log(2.5 \times 10^{-4}) = -\left(\log 2.5 + \log 10^{-4}\right) = -(\log 2.5 - 4) = 4 - \log 2.5 \approx 3.60
$$

</details>

### Richter Scale

The Richter magnitude $M$ of an earthquake is defined as:

$$
M = \log_{10} \frac{I}{I_0}
$$

where $I$ is the amplitude of seismic waves and $I_0$ is a reference amplitude (the amplitude of a
"standard" earthquake).

Because the scale is logarithmic base 10, an earthquake of magnitude 6 is ten times more powerful
than one of magnitude 5, and one hundred times more powerful than one of magnitude 4.

<details>
<summary>Example</summary>

An earthquake has amplitude $5000$ times the reference. Its magnitude is:

$$
M = \log_{10} 5000 = \log_{10}(5 \times 10^3) = 3 + \log_{10} 5 \approx 3.70
$$

</details>

### Compound Interest

The compound interest formula is closely related to logarithms and
[geometric sequences](./sequences-and-series.md). If a principal $P$ is invested at an annual rate
$r\%$ compounded $n$ times per year for $t$ years, the accumulated amount $A$ is:

$$
A = P\left(1 + \frac{r}{100n}\right)^{nt}
$$

To find the time $t$ required to reach a target amount $A$, take logarithms of both sides:

$$
\begin{aligned}
A &= P\left(1 + \frac{r}{100n}\right)^{nt} \\
\log A &= \log P + nt \cdot \log\left(1 + \frac{r}{100n}\right) \\
t &= \frac{\log A - \log P}{n \cdot \log\left(1 + \frac{r}{100n}\right)}
\end{aligned}
$$

<details>
<summary>Example</summary>

$\$10,000$ is invested at $5\%$ per annum, compounded annually. How long does it take for the
investment to double?

- Set $A = 2P = 20,000$, $P = 10,000$, $r = 5$, $n = 1$.
- $20000 = 10000(1.05)^t$, so $2 = (1.05)^t$.
- Take $\log$: $\log 2 = t \log 1.05$.
- $t = \dfrac{\log 2}{\log 1.05} \approx 14.2$ years.
</details>

### Exponential Growth and Decay

Many natural processes follow exponential models:

- **Growth:** $N(t) = N_0 \cdot a^t$ where $a \gt{} 1$ (e.g., population growth, bacterial
  reproduction).
- **Decay:** $N(t) = N_0 \cdot a^t$ where $0 \lt{} a \lt{} 1$ (e.g., radioactive decay, cooling).

The **half-life** $T$ of a decaying quantity is the time for the quantity to reduce to half its
initial value. For $N(t) = N_0 \cdot a^t$:

$$
\frac{1}{2} = a^T \implies T = \frac{\log(1/2)}{\log a} = -\frac{\log 2}{\log a}
$$

For continuous decay with rate $k$: $N(t) = N_0 e^{-kt}$, and the half-life is:

$$
T = \frac{\ln 2}{k}
$$

<details>
<summary>Example</summary>

A radioactive substance decays such that its mass after $t$ years is given by
$M(t) = 500 \cdot (0.92)^t$ grams. Find the half-life.

- Set $M(T) = 250$: $250 = 500 \cdot (0.92)^T$.
- $0.5 = (0.92)^T$.
- $T = \dfrac{\log 0.5}{\log 0.92} = \dfrac{-0.3010}{-0.0362} \approx 8.31$ years.
</details>

---

## Logarithmic and Exponential Inequalities

Inequalities involving logarithms require careful attention to the behaviour of the logarithmic
function, which depends on whether the base is greater than or less than 1.

### Case 1: Base $a \gt{} 1$

When $a > 1$, $\log_a x$ is strictly increasing, so the inequality sign is **preserved**:

$$
\log_a x \gt{} \log_a y \iff x \gt{} y
$$

### Case 2: Base $0 \lt{} a \lt{} 1$

When $0 < a < 1$, $\log_a x$ is strictly decreasing, so the inequality sign is **reversed**:

$$
\log_a x \gt{} \log_a y \iff x \lt{} y
$$

<details>
<summary>Examples</summary>

**Example 1.** Solve $\log_2(3x - 1) < 4$.

- Since the base $2 > 1$, the inequality sign is preserved: $3x - 1 < 2^4 = 16$.
- $3x < 17$, so $x < \dfrac{17}{3}$.
- Domain: $3x - 1 > 0 \implies x > \dfrac{1}{3}$.
- Solution: $\dfrac{1}{3} < x < \dfrac{17}{3}$.

**Example 2.** Solve $\log_{1/2}(x + 3) \geq 1$.

- Since the base $\frac{1}{2} < 1$, the inequality sign is reversed:
  $x + 3 \leq \left(\frac{1}{2}\right)^1 = \frac{1}{2}$.
- $x \leq -\dfrac{5}{2}$.
- Domain: $x + 3 > 0 \implies x > -3$.
- Solution: $-3 < x \leq -\dfrac{5}{2}$.
</details>

---

## Graphical Properties of $y = \log_a x$

The graph of $y = \log_a x$ has the following characteristics:

- Passes through the point $(1, 0)$ since $\log_a 1 = 0$.
- Passes through the point $(a, 1)$ since $\log_a a = 1$.
- Has a vertical asymptote at $x = 0$.
- When $a > 1$, the function is strictly increasing and concave down.
- When $0 < a < 1$, the function is strictly decreasing and concave up.
- The function is defined only for $x > 0$.

{/_ TODO: replace with verified Desmos graph URL _/} <DesmosGraph title="Logarithmic Functions"
expressions={["\log_{a}(x)", "rac{\ln(x)}{\ln(a)}"]} width={800} height={500} />

Adjust the base $a$ to see how the shape of the logarithmic curve changes between $a > 1$ and
$0 < a < 1$.

### Transformations

The standard transformations apply, following the same principles as for other
[functions](./functions.md):

| Transformation      | Effect                                              |
| ------------------- | --------------------------------------------------- |
| $y = \log_a x + c$  | Vertical shift by $c$ units                         |
| $y = \log_a(x - h)$ | Horizontal shift by $h$ units                       |
| $y = -\log_a x$     | Reflection in the $x$-axis                          |
| $y = \log_a(-x)$    | Reflection in the $y$-axis (domain becomes $x < 0$) |
| $y = k\log_a x$     | Vertical stretch by factor $k$                      |

<details>
<summary>Example</summary>

Sketch $y = \log_2(x - 3) + 1$.

- Start from $y = \log_2 x$.
- Shift right by 3 units: the vertical asymptote moves from $x = 0$ to $x = 3$.
- Shift up by 1 unit: the $x$-intercept moves from $(1, 0)$ to $(1+3, 0+1) = (4, 1)$.
- The new $x$-intercept satisfies $\log_2(x - 3) + 1 = 0$, i.e. $\log_2(x-3) = -1$, giving
  $x - 3 = \frac{1}{2}$, so $x = 3.5$.
- Domain: $x > 3$.
</details>

---

### Wrap-up Questions

**Question 1.** Solve $\log_3(x^2 - 4) - \log_3(x + 2) = 1$.

<details>
<summary>Answer</summary>

- Domain: $x^2 - 4 > 0$ and $x + 2 > 0$, so $x > 2$.
- Quotient rule: $\log_3 \dfrac{x^2 - 4}{x + 2} = 1$.
- Factor numerator: $\dfrac{(x-2)(x+2)}{x+2} = x - 2$ (valid since $x \neq -2$).
- Convert: $x - 2 = 3^1 = 3$, so $x = 5$.
- Check: $5 > 2$ is satisfied. Solution: $x = 5$.
</details>

**Question 2.** Solve $2^{3x-1} = 5^{x+1}$. Give your answer in terms of logarithms.

<details>
<summary>Answer</summary>

- Take $\log$ of both sides: $\log(2^{3x-1}) = \log(5^{x+1})$.
- Power rule: $(3x - 1)\log 2 = (x + 1)\log 5$.
- Expand: $3x\log 2 - \log 2 = x\log 5 + \log 5$.
- Collect $x$ terms: $x(3\log 2 - \log 5) = \log 5 + \log 2$.
- $x = \dfrac{\log 5 + \log 2}{3\log 2 - \log 5} = \dfrac{\log 10}{3\log 2 - \log 5} = \dfrac{1}{3\log 2 - \log 5}$.
</details>

**Question 3.** Simplify $\dfrac{\log_8 27}{\log_8 9}$ without using a calculator.

<details>
<summary>Answer</summary>

- Let the expression equal $y$. By the change of base formula, $y = \log_9 27$.
- Write bases and argument as powers of 3: $y = \dfrac{\log_3 27}{\log_3 9} = \dfrac{3}{2}$.
- Alternatively: $\log_8 27 = \dfrac{\log 27}{\log 8} = \dfrac{3\log 3}{3\log 2}$ and
$\log_8 9 = \dfrac{2\log 3}{3\log 2}$, so the ratio is
$\dfrac{3\log 3 / (3\log 2)}{2\log 3 / (3\log 2)} = \dfrac{3}{2}$.
</details>

**Question 4.** The population of a bacteria culture grows exponentially. At 12:00, the population
is $10,000$. At 14:00, the population is $40,000$. Find the population at 17:00.

<details>
<summary>Answer</summary>

- Model: $P(t) = P_0 \cdot a^t$ where $t$ is in hours from 12:00.
- At $t = 0$: $P_0 = 10,000$.
- At $t = 2$: $40,000 = 10,000 \cdot a^2$, so $a^2 = 4$, giving $a = 2$.
- At $t = 5$ (17:00): $P(5) = 10,000 \cdot 2^5 = 320,000$.
</details>

**Question 5.** Solve $9^x - 6 \cdot 3^x - 27 = 0$.

<details>
<summary>Answer</summary>

- Note $9^x = (3^2)^x = 3^{2x} = (3^x)^2$. Let $u = 3^x$ ($u > 0$).
- Substitute: $u^2 - 6u - 27 = 0$.
- Factor: $(u - 9)(u + 3) = 0$, so $u = 9$ or $u = -3$.
- Since $u > 0$, only $u = 9$, giving $3^x = 9 = 3^2$, so $x = 2$.
</details>

**Question 6.** A substance has a half-life of 8 years. How long does it take for 90% of the
substance to decay?

<details>
<summary>Answer</summary>

- Model: $M(t) = M_0 \cdot a^t$ where $a = 2^{-1/8}$ (since $M(8) = \frac{1}{2}M_0$).
- 90% decay means $M(t) = 0.1M_0$.
- $0.1 = a^t = \left(2^{-1/8}\right)^t = 2^{-t/8}$.
- Take $\log$: $\log 0.1 = -\dfrac{t}{8} \log 2$.
- $t = \dfrac{-8 \log 0.1}{\log 2} = \dfrac{8}{\log 2} \approx 26.6$ years.
</details>

**Question 7.** If $\log_2 3 = a$ and $\log_2 5 = b$, express $\log_2 7.5$ in terms of $a$ and $b$.

<details>
<summary>Answer</summary>

- $7.5 = \dfrac{15}{2} = \dfrac{3 \times 5}{2}$.
- $\log_2 7.5 = \log_2 3 + \log_2 5 - \log_2 2 = a + b - 1$.
</details>

**Question 8.** Solve the inequality $\log_{0.5}(2x + 1) > \log_{0.5}(x + 4)$.

<details>
<summary>Answer</summary>

- Domain: $2x + 1 > 0 \implies x > -\dfrac{1}{2}$, and $x + 4 > 0 \implies x > -4$. Combined:
  $x > -\dfrac{1}{2}$.
- Since the base $0.5 < 1$, the logarithmic function is strictly decreasing, so the inequality sign
  reverses: $2x + 1 < x + 4$.
- $x < 3$.
- Combined with the domain: $-\dfrac{1}{2} < x < 3$.
</details>

**Question 9.** Express $2\log x - \log(x^2 - 4) + \log(x + 2)$ as a single logarithm, stating any
restrictions on $x$.

<details>
<summary>Answer</summary>

- Restrictions: $x > 0$, $x^2 - 4 > 0 \implies x > 2$ or $x < -2$, and $x + 2 > 0 \implies x > -2$.
  Combined: $x > 2$.
- Combine: $2\log x + \log(x + 2) - \log(x^2 - 4) = \log(x^2) + \log(x+2) - \log(x^2 - 4)$.
- $= \log\dfrac{x^2(x+2)}{x^2 - 4} = \log\dfrac{x^2(x+2)}{(x-2)(x+2)} = \log\dfrac{x^2}{x-2}$.
- Note: the factor $(x+2)$ cancels since $x + 2 \neq 0$ under the domain $x > 2$.
</details>

**Question 10.** An investor deposits $\$5,000$ into an account earning $4\%$ interest compounded
quarterly. How long (to the nearest quarter) does it take for the balance to reach $\$10,000$?

<details>
<summary>Answer</summary>

- $A = P\left(1 + \dfrac{r}{100n}\right)^{nt}$ with $P = 5000$, $r = 4$, $n = 4$, $A = 10000$.
- $10000 = 5000\left(1 + \dfrac{4}{400}\right)^{4t} = 5000(1.01)^{4t}$.
- $2 = (1.01)^{4t}$.
- Take $\log$: $\log 2 = 4t \cdot \log 1.01$.
- $t = \dfrac{\log 2}{4\log 1.01} \approx \dfrac{0.3010}{4 \times 0.00432} \approx 17.42$ years.
- To the nearest quarter: approximately 17 years and 2 quarters (17.5 years).
</details>
