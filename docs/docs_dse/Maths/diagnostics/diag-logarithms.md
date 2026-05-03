---
title: Logarithms — Diagnostic Tests
description: "Diagnostic tests for DSE Logarithms: log laws, equations, change of base, domain restrictions, and common fallacies like log distribution."
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

**(ii)** False in general. Counterexample: let $a = b = 1$ with base 10.

$\log(1 + 1) = \log 2 \approx 0.301$.

$\log 1 + \log 1 = 0 + 0 = 0$.

$0.301 \neq 0$.

The logarithm function does NOT distribute over addition. $\log(a + b) \neq \log a + \log b$.

---

### UT-2: Domain Restrictions

**Question:**

Solve $\log_3(x - 2) + \log_3(x + 1) = 1$.

**Solution:**

Domain: $x - 2 > 0$ and $x + 1 > 0$, so $x > 2$.

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

Given that $\log_2 3 = a$ and $\log_2 5 = b$, express $\log_{15} 4$ in terms of $a$ and $b$.

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

Let $u = \log_4 x$ (domain: $x > 0$, $x \neq 1$, so $u \neq 0$).

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

Domain: $x + 4 > 0$ and $8 - x > 0$, giving $-4 < x < 8$.

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

Range of $f$: $\mathbb{R}$ (since $3^y > 0$).

Domain of $f^{-1}$ = Range of $f$ = $\mathbb{R}$.

Range of $f^{-1}$ = Domain of $f$ = $\left(\dfrac{1}{2},\; \infty\right)$.
