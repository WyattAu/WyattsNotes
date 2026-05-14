---
title: 'Logarithms -- Diagnostic Tests'
description:
  'Diagnostic tests for DSE Logarithms: log laws, equations, change of base, domain restrictions,
  and common fallacies like log distribution.'
slug: diag-logarithms
hide_table_of_contents: true
---

# Logarithms — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for logarithms.

### UT-1: Log Does Not Distribute Over Addition

**Question:**

Which of the following statements are true? Justify your answer.

$$\text{(i)}\; \log(ab) = \log a + \log b \qquad \text{(ii)}\; \log(a + b) = \log a + \log b$$

**Solution:**

**(i)** True. This is the product law of logarithms: $\log(ab) = \log a + \log b$.

**(ii)** False . Counterexample: let $a = b = 1$ with base 10.

$\log(1 + 1) = \log 2 \approx 0.301$.

$\log 1 + \log 1 = 0 + 0 = 0$.

$0.301 \neq 0$.

The logarithm function does NOT distribute over addition. $\log(a + b) \neq \log a + \log b$.

---

### UT-2: Domain Restrictions

**Question:**

Solve $\log_3(x - 2) + \log_3(x + 1) = 1$.

**Solution:**

Domain: $x - 2 > 0$ and $x + 1 > 0$So $x > 2$.

Using the product law:

$$\log_3[(x-2)(x+1)] = 1$$

$$(x-2)(x+1) = 3$$

$$x^2 - x - 2 = 3$$

$$x^2 - x - 5 = 0$$

$$x = \frac{1 \pm \sqrt{1 + 20}}{2} = \frac{1 \pm \sqrt{21}}{2}$$

$x = \dfrac{1 + \sqrt{21}}{2} \approx 2.79$ (valid since $> 2$).

$x = \dfrac{1 - \sqrt{21}}{2} \approx -1.79$ (rejected: not in domain).

Solution: $x = \dfrac{1 + \sqrt{21}}{2}$.

A common mistake is forgetting to check the domain and accepting both roots.

---

### UT-3: Change of Base Formula

**Question:**

Given that $\log_2 3 = a$ and $\log_2 5 = b$Express $\log_{15} 4$ in terms of $a$ and $b$.

**Solution:**

$$\log_{15} 4 = \frac{\log_2 4}{\log_2 15} = \frac{2}{\log_2(3 \times 5)} = \frac{2}{\log_2 3 + \log_2 5} = \frac{2}{a + b}$$

---

### UT-4: Logarithmic Equation with Hidden Quadratic

**Question:**

Solve $(\log_2 x)^2 - 3\log_2 x - 4 = 0$.

**Solution:**

Let $u = \log_2 x$ (domain: $x > 0$).

$$u^2 - 3u - 4 = 0$$

$$(u - 4)(u + 1) = 0$$

$$u = 4 \quad \text{or} \quad u = -1$$

$\log_2 x = 4 \implies x = 16$.

$\log_2 x = -1 \implies x = \dfrac{1}{2}$.

Both satisfy $x > 0$.

Solution: $x = 16$ or $x = \dfrac{1}{2}$.

---

### UT-5: Logarithm with Different Bases

**Question:**

Solve $2\log_x 4 - \log_4 x = 1$.

**Solution:**

Using change of base: $\log_x 4 = \dfrac{\log_4 4}{\log_4 x} = \dfrac{1}{\log_4 x}$.

Let $u = \log_4 x$ (domain: $x > 0$$x \neq 1$So $u \neq 0$).

$$\frac{2}{u} - u = 1$$

$$2 - u^2 = u$$

$$u^2 + u - 2 = 0$$

$$(u + 2)(u - 1) = 0$$

$u = -2$ or $u = 1$.

$u = -2$: $\log_4 x = -2 \implies x = 4^{-2} = \dfrac{1}{16}$.

$u = 1$: $\log_4 x = 1 \implies x = 4$.

Solution: $x = \dfrac{1}{16}$ or $x = 4$.

---

## Integration Tests

> Tests synthesis of logarithms with other topics.

### IT-1: Logarithms and Exponentials (with Sequences and Series)

**Question:**

Solve $3^{2x} - 4 \cdot 3^x + 3 = 0$.

**Solution:**

Let $u = 3^x$ ($u > 0$).

$$u^2 - 4u + 3 = 0$$

$$(u - 1)(u - 3) = 0$$

$u = 1$ or $u = 3$.

$3^x = 1 \implies x = 0$.

$3^x = 3 \implies x = 1$.

Solution: $x = 0$ or $x = 1$.

---

### IT-2: Logarithms and Inequalities (with Inequalities)

**Question:**

Solve $\log_3(x + 4) > \log_3(8 - x)$.

**Solution:**

Since $\log_3$ is increasing, we can compare arguments directly:

$$x + 4 > 8 - x$$

$$2x > 4 \implies x > 2$$

Domain: $x + 4 > 0$ and $8 - x > 0$Giving $-4 < x < 8$.

Combining: $2 < x < 8$.

Solution: $x \in (2,\; 8)$.

---

### IT-3: Logarithms and Functions (with Functions)

**Question:**

Let $f(x) = \log_3(2x - 1)$. Find $f^{-1}(x)$ and its domain and range.

**Solution:**

$y = \log_3(2x - 1) \implies 3^y = 2x - 1 \implies x = \dfrac{3^y + 1}{2}$.

$f^{-1}(x) = \dfrac{3^x + 1}{2}$.

Domain of $f$: $2x - 1 > 0 \implies x > \dfrac{1}{2}$.

Range of $f$: $\mathbb{'\{'}R{'\}'}$ (since $3^y > 0$).

Domain of $f^{-1}$ = Range of $f$ = $\mathbb{'\{'}R{'\}'}$.

Range of $f^{-1}$ = Domain of $f$ = $\left(\dfrac{1}{2},\; \infty\right)$.

---

## Worked Examples

### WE-1: Solving Logarithmic Equations with Multiple Logs

**Question:**

Solve $\log_2(x + 4) + \log_2(x - 2) = 3$.

**Solution:**

Domain: $x + 4 > 0$ and $x - 2 > 0$So $x > 2$.

Using the product law:

$$\log_2[(x+4)(x-2)] = 3$$

$$(x+4)(x-2) = 2^3 = 8$$

$$x^2 + 2x - 8 = 8$$

$$x^2 + 2x - 16 = 0$$

$$x = \frac{-2 \pm \sqrt{4 + 64}}{2} = \frac{-2 \pm \sqrt{68}}{2} = -1 \pm \sqrt{17}$$

$x = -1 + \sqrt{17} \approx 3.12$ (valid, $> 2$).

$x = -1 - \sqrt{17} \approx -5.12$ (rejected, not in domain).

Solution: $x = -1 + \sqrt{17}$.

---

### WE-2: Exponential Growth and Decay

**Question:**

A population of bacteria doubles every 3 hours. If the initial population is 500, find:

(a) The population after 12 hours. (b) The time for the population to reach 32000.

**Solution:**

$P(t) = P_0 \cdot 2^{t/3}$ where $P_0 = 500$.

(a) $P(12) = 500 \cdot 2^{12/3} = 500 \cdot 2^4 = 500 \times 16 = 8000$.

(b) $500 \cdot 2^{t/3} = 32000$.

$2^{t/3} = 64 = 2^6$.

$\dfrac{t}{3} = 6 \implies t = 18$ hours.

---

### WE-3: Logarithmic Scale Comparison

**Question:**

An earthquake has a magnitude of 7.2 on the Richter scale. How many times more powerful is it than
an earthquake of magnitude 5.2?

**Solution:**

The Richter scale is logarithmic: each increase of 1 unit represents a 10-fold increase in
amplitude.

Difference in magnitude: $7.2 - 5.2 = 2$.

The earthquake is $10^2 = 100$ times more powerful.

---

### WE-4: Comparing Logarithmic Expressions

**Question:**

Given that $\log_3 2 = a$Express $\log_3 16 - \log_3 4$ in terms of $a$.

**Solution:**

$$\log_3 16 = \log_3 2^4 = 4\log_3 2 = 4a$$

$$\log_3 4 = \log_3 2^2 = 2\log_3 2 = 2a$$

$$\log_3 16 - \log_3 4 = 4a - 2a = 2a$$

Alternatively: $\log_3 16 - \log_3 4 = \log_3 \dfrac{16}{4} = \log_3 4 = 2a$.

---

### WE-5: Logarithmic Inequality with Base Less Than 1

**Question:**

Solve $\log_{0.5}(2x - 1) > \log_{0.5}(x + 2)$.

**Solution:**

Domain: $2x - 1 > 0$ and $x + 2 > 0$Giving $x > \dfrac{1}{2}$ and $x > -2$So $x > \dfrac{1}{2}$.

Since the base $0.5$ is between 0 and 1, the logarithmic function is **decreasing**. Therefore the
inequality **reverses**:

$$2x - 1 < x + 2$$

$$x < 3$$

Combining with the domain: $\dfrac{1}{2} < x < 3$.

Solution: $x \in \left(\dfrac{1}{2},\; 3\right)$.

**DSE Exam Technique:** Always check whether the logarithmic base is greater than or less than 1.
This determines whether the function is increasing or decreasing, which affects the inequality
direction. This is a frequent trap in DSE Paper 2.

---

### WE-6: Change of Base with Non-Standard Bases

**Question:**

Given $\log_4 5 = a$Find $\log_8 10$ in terms of $a$.

**Solution:**

$$\log_8 10 = \frac{\log_4 10}{\log_4 8}$$

$\log_4 10 = \log_4(2 \times 5) = \log_4 2 + \log_4 5 = \dfrac{1}{2} + a$.

$\log_4 8 = \log_4(4 \times 2) = 1 + \dfrac{1}{2} = \dfrac{3}{2}$.

$$\log_8 10 = \frac{\frac{1}{2} + a}{\frac{3}{2}} = \frac{1 + 2a}{3}$$

---

### WE-7: Solving System of Logarithmic Equations

**Question:**

Solve the simultaneous equations:

$$\log_2 x + \log_2 y = 5$$ $$\log_2(x - y) = 1$$

**Solution:**

From equation 1: $\log_2(xy) = 5 \implies xy = 32$. ... (1)

From equation 2: $x - y = 2$. ... (2)

From (2): $x = y + 2$. Substituting into (1):

$(y + 2)y = 32 \implies y^2 + 2y - 32 = 0$.

$$y = \frac{-2 \pm \sqrt{4 + 128}}{2} = \frac{-2 \pm \sqrt{132}}{2} = -1 \pm \sqrt{33}$$

Since $y > 0$: $y = -1 + \sqrt{33}$.

$x = y + 2 = 1 + \sqrt{33}$.

Check domain: $x > 0$$y > 0$$x - y > 0$. All satisfied.

---

### WE-8: Exponential Equation with Different Bases

**Question:**

Solve $5^{x+1} = 2^{2x-1}$.

**Solution:**

Take logarithms of both sides (any base, say base 10 or natural log):

$$(x+1)\ln 5 = (2x - 1)\ln 2$$

$$x\ln 5 + \ln 5 = 2x\ln 2 - \ln 2$$

$$x\ln 5 - 2x\ln 2 = -\ln 2 - \ln 5$$

$$x(\ln 5 - 2\ln 2) = -(\ln 2 + \ln 5)$$

$$x = \frac{-(\ln 2 + \ln 5)}{\ln 5 - 2\ln 2} = \frac{-(\ln 10)}{\ln 5 - \ln 4} = \frac{-\ln 10}{\ln(5/4)} = \frac{\ln 10}{\ln(4/5)}$$

$$x = \frac{\ln 10}{\ln(4/5)} \approx \frac{2.303}{-0.223} \approx -10.33$$

---

## Common Pitfalls

1. **Forgetting domain restrictions in logarithmic equations.** The argument of a logarithm must be
   strictly positive. After solving a logarithmic equation, always check that each solution
   satisfies the domain conditions. Solutions that make any log argument zero or negative must be
   rejected.

2. **Not reversing the inequality for bases between 0 and 1.** If $\log_b A > \log_b B$ and
   $0 < b < 1$Then $A < B$ (not $A > B$). This is because the log function is decreasing when the
   base is between 0 and 1.

3. **Incorrectly applying the power law.** $\log(a^b) = b \log a$But $(\log a)^b \neq b \log a$. The
   power law applies to the argument, not to the logarithm itself.

4. **Assuming $\log a + \log b = \log(a + b)$.** This is false. The correct law is
   $\log a + \log b = \log(ab)$. This is one of the most common algebraic errors in logarithms.

5. **Using the wrong base in change of base formula.** The change of base formula is
   $\log_a b = \dfrac{\log_c b}{\log_c a}$ for any valid base $c$. Swapping the numerator and
   denominator is a frequent error.

---

## DSE Exam-Style Questions

### DSE-1

(a) Solve $\log_3(x^2 - 3x + 2) = 1$. (3 marks) (b) Solve $\log_3(x^2 - 3x + 2) = 0$. (2 marks) (c)
Hence solve $\log_3(x^2 - 3x + 2) \leq 1$. (3 marks)

**Solution:**

(a) $x^2 - 3x + 2 = 3^1 = 3$.

$x^2 - 3x - 1 = 0$.

$x = \dfrac{3 \pm \sqrt{9 + 4}}{2} = \dfrac{3 \pm \sqrt{13}}{2}$.

Domain check: $x^2 - 3x + 2 > 0 \implies (x-1)(x-2) > 0 \implies x < 1$ or $x > 2$.

$\dfrac{3 + \sqrt{13}}{2} \approx 3.30 > 2$ (valid). $\dfrac{3 - \sqrt{13}}{2} \approx -0.30 < 1$
(valid).

(b) $x^2 - 3x + 2 = 3^0 = 1$.

$x^2 - 3x + 1 = 0$.

$x = \dfrac{3 \pm \sqrt{5}}{2}$.

Domain check: both values satisfy the domain. $\dfrac{3+\sqrt{5}}{2} \approx 2.62 > 2$ and
$\dfrac{3-\sqrt{5}}{2} \approx 0.38 < 1$.

(c) $\log_3(x^2 - 3x + 2) \leq 1 \implies 0 < x^2 - 3x + 2 \leq 3$.

$x^2 - 3x + 2 > 0$: $x < 1$ or $x > 2$.

$x^2 - 3x + 2 \leq 3 \implies x^2 - 3x - 1 \leq 0$:
$\dfrac{3-\sqrt{13}}{2} \leq x \leq \dfrac{3+\sqrt{13}}{2}$.

Combining: $\dfrac{3-\sqrt{13}}{2} \leq x < 1$ or $2 < x \leq \dfrac{3+\sqrt{13}}{2}$.

---

### DSE-2

Let $f(x) = 2\log_3(x - 1) - \log_3(x^2 - 1)$.

(a) Find the domain of $f$. (2 marks) (b) Simplify $f(x)$. (3 marks) (c) Solve $f(x) = 1$. (3 marks)

**Solution:**

(a) $x - 1 > 0$ and $x^2 - 1 > 0$: $x > 1$.

(b)
$f(x) = \log_3(x - 1)^2 - \log_3(x^2 - 1) = \log_3 \dfrac{(x-1)^2}{(x-1)(x+1)} = \log_3 \dfrac{x - 1}{x + 1}$
(for $x > 1$).

(c)
$\log_3 \dfrac{x - 1}{x + 1} = 1 \implies \dfrac{x - 1}{x + 1} = 3 \implies x - 1 = 3x + 3 \implies -2x = 4 \implies x = -2$.

But $x > 1$So $x = -2$ is rejected. No solution.

---

### DSE-3

The number of bacteria in a culture is given by $N = 1000 \times 2^{0.1t}$Where $t$ is the time in
hours.

(a) Find the initial number of bacteria. (1 mark) (b) Find the number of bacteria after 10 hours,
giving your answer in exact form. (2 marks) (c) Find the time when the number of bacteria first
exceeds 50000. (3 marks)

**Solution:**

(a) $t = 0$: $N = 1000 \times 2^0 = 1000$.

(b) $t = 10$: $N = 1000 \times 2^1 = 2000$.

(c) $1000 \times 2^{0.1t} > 50000$.

$2^{0.1t} > 50$.

$0.1t \log 2 > \log 50$.

$t > \dfrac{\log 50}{0.1 \log 2} = \dfrac{10 \log 50}{\log 2} = \dfrac{10(\log 100 - \log 2)}{\log 2} = \dfrac{10(2 - \log 2)}{\log 2} \approx \dfrac{10 \times 1.699}{0.301} \approx 56.4$
hours.

---

### DSE-4

If $\log_a 2 = p$ and $\log_a 5 = q$Express the following in terms of $p$ and $q$:

(a) $\log_a 10$ (1 mark) (b) $\log_a 0.04$ (2 marks) (c) $\log_a 250$ (2 marks) (d) $\log_2 a$ (2
marks)

**Solution:**

(a) $\log_a 10 = \log_a(2 \times 5) = \log_a 2 + \log_a 5 = p + q$.

(b)
$\log_a 0.04 = \log_a\left(\dfrac{4}{100}\right) = \log_a 4 - \log_a 100 = 2\log_a 2 - 2\log_a 10 = 2p - 2(p + q) = -2q$.

(c) $\log_a 250 = \log_a(125 \times 2) = \log_a 125 + \log_a 2 = 3\log_a 5 + p = 3q + p$.

(d) $\log_2 a = \dfrac{1}{\log_a 2} = \dfrac{1}{p}$.

---

### DSE-5

Solve the inequality $\log_2(x + 3) + \log_2(x - 1) \leq 3$.

**Solution:**

Domain: $x + 3 > 0$ and $x - 1 > 0$So $x > 1$.

$$\log_2[(x+3)(x-1)] \leq 3$$

$$(x+3)(x-1) \leq 8$$

$$x^2 + 2x - 3 \leq 8$$

$$x^2 + 2x - 11 \leq 0$$

$$x = \frac{-2 \pm \sqrt{4 + 44}}{2} = \frac{-2 \pm \sqrt{48}}{2} = -1 \pm 2\sqrt{3}$$

Solution of quadratic: $-1 - 2\sqrt{3} \leq x \leq -1 + 2\sqrt{3}$.

Since $-1 + 2\sqrt{3} \approx 2.46$ and we need $x > 1$:

$1 < x \leq -1 + 2\sqrt{3}$I.e. $x \in (1,\; -1 + 2\sqrt{3}]$.
