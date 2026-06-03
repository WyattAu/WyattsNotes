---
title: 'Algebra -- Diagnostic Tests'
description:
  'ILC Maths Algebra -- Diagnostic Tests notes covering key definitions, core concepts, worked
  examples, and practice questions for in-depth revision.'
slug: diag-algebra
hide_table_of_contents: true
---

# Algebra -- Diagnostic Tests

## Unit Tests

### UT-1: Equations and Inequalities

**Question:**

(a) Solve the following equations: (i) $3(2x - 1) + 4(x + 5) = 2(5x - 3)$ (ii)
$\frac{x + 3}{2} - \frac{x - 1}{5} = \frac{2x + 1}{3}$

(b) Solve the quadratic equation $2x^2 - 7x + 3 = 0$ by: (i) factorisation, (ii) the quadratic
formula. Verify that both methods give the same solutions.

(c) Solve the inequality $3x^2 - 11x - 4 \leq 0$.

(d) Solve the simultaneous equations: $2x + 3y = 12$ and $5x - 2y = 11$.

**Solution:**

(a)

(i) $3(2x - 1) + 4(x + 5) = 2(5x - 3)$

$$6x - 3 + 4x + 20 = 10x - 6$$ $$10x + 17 = 10x - 6$$ $$17 = -6$$

This is a contradiction, so there is **no solution**.

(ii) $\frac{x + 3}{2} - \frac{x - 1}{5} = \frac{2x + 1}{3}$

LCM of 2, 5, 3 = 30:

$$15(x + 3) - 6(x - 1) = 10(2x + 1)$$ $$15x + 45 - 6x + 6 = 20x + 10$$ $$9x + 51 = 20x + 10$$
$$41 = 11x$$ $$x = \frac{41}{11}$$

(b)

(i) Factorising $2x^2 - 7x + 3 = 0$: Looking for two numbers that multiply to $2 \times 3 = 6$ and
add to $-7$: $-6$ and $-1$.

$$2x^2 - 6x - x + 3 = 0$$ $$2x(x - 3) - 1(x - 3) = 0$$ $$(2x - 1)(x - 3) = 0$$

$x = \frac{1}{2}$ or $x = 3$.

(ii) Using the quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ with $a = 2$, $b = -7$,
$c = 3$:

$$x = \frac{7 \pm \sqrt{49 - 24}}{4} = \frac{7 \pm \sqrt{25}}{4} = \frac{7 \pm 5}{4}$$

$x = 3$ or $x = \frac{1}{2}$. Both methods agree.

(c) $3x^2 - 11x - 4 \leq 0$. Factorising:
$3x^2 - 12x + x - 4 = 3x(x - 4) + 1(x - 4) = (3x + 1)(x - 4) \leq 0$.

Roots at $x = -\frac{1}{3}$ and $x = 4$. The quadratic opens upward ($a = 3 > 0$), so it is negative
between the roots.

Solution: $-\frac{1}{3} \leq x \leq 4$, or $x \in \left[-\frac{1}{3}, 4\right]$.

(d) $2x + 3y = 12$ ... (1), $5x - 2y = 11$ ... (2)

Multiply (1) by 2: $4x + 6y = 24$ ... (3) Multiply (2) by 3: $15x - 6y = 33$ ... (4)

Add (3) and (4): $19x = 57$, so $x = 3$.

Substitute into (1): $2(3) + 3y = 12$, $6 + 3y = 12$, $y = 2$.

Solution: $x = 3$, $y = 2$.

---

### UT-2: Sequences and Series

**Question:**

(a) An arithmetic sequence has first term $a = 5$ and common difference $d = 3$. Find: (i) the 20th
term, (ii) the sum of the first 20 terms.

(b) A geometric sequence has first term $a = 2$ and common ratio $r = 0.5$. Find: (i) the 8th term,
(ii) the sum to infinity.

(c) The $n$th term of a sequence is given by $u_n = 3n^2 - n$. Find the first four terms and
determine whether this is an arithmetic, geometric, or neither type of sequence.

(d) A ball is dropped from a height of $2\,\text{m}$. Each time it bounces, it reaches $\frac{3}{4}$
of its previous height. Calculate the total vertical distance travelled by the ball before it comes
to rest.

**Solution:**

(a) $a = 5$, $d = 3$.

(i) $u_n = a + (n - 1)d$. $u_{20} = 5 + 19 \times 3 = 5 + 57 = 62$.

(ii) $S_n = \frac{n}{2}(2a + (n - 1)d) = \frac{20}{2}(10 + 57) = 10 \times 67 = 670$.

(b) $a = 2$, $r = 0.5$.

(i) $u_n = ar^{n-1}$.
$u_8 = 2 \times (0.5)^7 = 2 \times \frac{1}{128} = \frac{2}{128} = \frac{1}{64}$.

(ii) Since $|r| < 1$, the sum to infinity exists:
$S_\infty = \frac{a}{1 - r} = \frac{2}{1 - 0.5} = \frac{2}{0.5} = 4$.

(c) $u_n = 3n^2 - n$.

$u_1 = 3 - 1 = 2$ $u_2 = 12 - 2 = 10$ $u_3 = 27 - 3 = 24$ $u_4 = 48 - 4 = 44$

This is **neither** arithmetic nor geometric. The differences are $10 - 2 = 8$, $24 - 10 = 14$,
$44 - 24 = 20$ (not constant, so not arithmetic). The ratios $10/2 = 5$, $24/10 = 2.4$,
$44/24 \approx 1.83$ are not constant either, so not geometric. It is a quadratic sequence.

(d) The ball drops $2\,\text{m}$ (down), bounces to $\frac{3}{4} \times 2 = 1.5\,\text{m}$ (up),
drops $1.5\,\text{m}$ (down), bounces to $1.5 \times \frac{3}{4} = 1.125\,\text{m}$ (up), and so on.

The total distance = initial drop + total of all up-and-down bounces.

Total distance $= 2 + 2 \times \left(1.5 + 1.125 + 0.84375 + \ldots\right)$

The bounce heights form a geometric series: $a = 1.5$, $r = \frac{3}{4}$.

Sum to infinity of bounce heights: $S_\infty = \frac{1.5}{1 - 0.75} = \frac{1.5}{0.25} = 6$.

Total distance $= 2 + 2 \times 6 = 14\,\text{m}$.

---

### UT-3: Algebraic Fractions and Proofs

**Question:**

(a) Simplify the algebraic fraction $\frac{x^2 - 9}{x^2 + 5x + 6} \div \frac{x + 3}{x + 2}$.

(b) Solve the equation $\frac{2}{x - 1} + \frac{3}{x + 2} = 1$. Identify any values of $x$ that are
excluded from the solution.

(c) Prove that the sum of any three consecutive integers is always a multiple of 3.

(d) Prove that for any even integer $n$, $n^2$ is always a multiple of 4.

**Solution:**

(a)
$\frac{x^2 - 9}{x^2 + 5x + 6} \div \frac{x + 3}{x + 2} = \frac{x^2 - 9}{x^2 + 5x + 6} \times \frac{x + 2}{x + 3}$

Factorising: $x^2 - 9 = (x - 3)(x + 3)$, $x^2 + 5x + 6 = (x + 2)(x + 3)$.

$$= \frac{(x - 3)(x + 3)}{(x + 2)(x + 3)} \times \frac{x + 2}{x + 3} = \frac{(x - 3)(x + 2)}{(x + 3)^2}$$

(b) $\frac{2}{x - 1} + \frac{3}{x + 2} = 1$

Multiply through by $(x - 1)(x + 2)$:

$$2(x + 2) + 3(x - 1) = (x - 1)(x + 2)$$ $$2x + 4 + 3x - 3 = x^2 + x - 2$$ $$5x + 1 = x^2 + x - 2$$
$$x^2 - 4x - 3 = 0$$

$$x = \frac{4 \pm \sqrt{16 + 12}}{2} = \frac{4 \pm \sqrt{28}}{2} = \frac{4 \pm 2\sqrt{7}}{2} = 2 \pm \sqrt{7}$$

Excluded values: $x \neq 1$ and $x \neq -2$ (these make denominators zero). Since
$2 + \sqrt{7} \approx 4.65$ and $2 - \sqrt{7} \approx -0.65$, neither is excluded.

Solutions: $x = 2 + \sqrt{7}$ and $x = 2 - \sqrt{7}$.

(c) Let three consecutive integers be $n$, $n + 1$, and $n + 2$.

Sum $= n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)$.

Since $n + 1$ is an integer, $3(n + 1)$ is a multiple of 3. Therefore, the sum of any three
consecutive integers is always a multiple of 3.

(d) Let $n$ be any even integer. Then $n = 2k$ for some integer $k$.

$$n^2 = (2k)^2 = 4k^2$$

Since $k^2$ is an integer, $4k^2$ is a multiple of 4. Therefore, the square of any even integer is
always a multiple of 4.

---

## Integration Tests

### IT-1: Applied Sequences and Equations

**Question:**

(a) A company's profits increase by $\pounds 5000$ each year. In the first year, profits are
$\pounds 20000$. In which year will the profits first exceed $\pounds 100000$?

(b) The half-life of a radioactive substance is 8 days. If a sample initially contains
$640\,\text{mg}$, calculate the amount remaining after 40 days.

(c) A geometric sequence has first term 3 and common ratio $r$. The sum of the first 4 terms is 255.
Find the value of $r$.

(d) The equation $x^2 + px + q = 0$ has roots $\alpha$ and $\beta$. Express the following in terms
of $p$ and $q$: (i) $\alpha^2 + \beta^2$, (ii) $\frac{1}{\alpha} + \frac{1}{\beta}$.

**Solution:**

(a) This is an arithmetic sequence with $a = 20000$ and $d = 5000$. We need $u_n > 100000$.

$$a + (n - 1)d > 100000$$ $$20000 + (n - 1)(5000) > 100000$$ $$(n - 1)(5000) > 80000$$
$$n - 1 > 16$$ $$n > 17$$

Profits first exceed $\pounds 100000$ in **year 18**.

(b) After 40 days, the number of half-lives elapsed $= 40 / 8 = 5$.

Remaining amount
$= 640 \times \left(\frac{1}{2}\right)^5 = 640 \times \frac{1}{32} = 20\,\text{mg}$.

(c) $S_4 = \frac{a(r^4 - 1)}{r - 1} = 255$. With $a = 3$:

$$\frac{3(r^4 - 1)}{r - 1} = 255$$

Since $r^4 - 1 = (r^2 - 1)(r^2 + 1) = (r - 1)(r + 1)(r^2 + 1)$:

$$\frac{3(r - 1)(r + 1)(r^2 + 1)}{r - 1} = 255$$ $$3(r + 1)(r^2 + 1) = 255$$
$$(r + 1)(r^2 + 1) = 85$$

Since 85 = $5 \times 17$, try $r + 1 = 5$: $r = 4$. Then $r^2 + 1 = 17$. So $5 \times 17 = 85$. This
works.

Therefore $r = 4$.

(d) By Vieta's formulas: $\alpha + \beta = -p$ and $\alpha\beta = q$.

(i) $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = (-p)^2 - 2q = p^2 - 2q$.

(ii) $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{-p}{q}$.

---

### IT-2: Advanced Algebra and Problem Solving

**Question:**

(a) Find the values of $k$ for which the quadratic equation $x^2 + 2kx + k^2 + 8 = 0$ has: (i) two
distinct real roots, (ii) one repeated root, (iii) no real roots.

(b) Prove algebraically that the product of two consecutive even numbers is always even.

(c) The first three terms of a geometric sequence are $x$, $x + 4$, and $x + 12$. Find the value of
$x$ and the common ratio.

(d) A rectangle has length $(x + 5)\,\text{cm}$ and width $(x - 3)\,\text{cm}$. The area is
$75\,\text{cm}^2$. Find $x$ and hence the perimeter of the rectangle.

**Solution:**

(a) Discriminant $\Delta = b^2 - 4ac = (2k)^2 - 4(1)(k^2 + 8) = 4k^2 - 4k^2 - 32 = -32$.

Since $\Delta = -32 < 0$ for all values of $k$, the equation **always has no real roots** regardless
of the value of $k$.

(i) No value of $k$ gives two distinct real roots. (ii) No value of $k$ gives one repeated root.
(iii) All values of $k$ give no real roots.

(b) Let two consecutive even numbers be $2n$ and $2(n + 1)$, where $n$ is an integer.

Product $= 2n \times 2(n + 1) = 4n(n + 1)$.

Since $n$ and $n + 1$ are consecutive integers, one of them is always even, so $n(n + 1)$ is even.
Let $n(n + 1) = 2m$ for some integer $m$.

Product $= 4 \times 2m = 8m$, which is a multiple of 2 (even). Therefore, the product of two
consecutive even numbers is always even.

(c) For a geometric sequence, $\frac{u_2}{u_1} = \frac{u_3}{u_2}$:

$$\frac{x + 4}{x} = \frac{x + 12}{x + 4}$$

$$(x + 4)^2 = x(x + 12)$$ $$x^2 + 8x + 16 = x^2 + 12x$$ $$16 = 4x$$ $$x = 4$$

The terms are: $4, 8, 16$. Common ratio $r = 8/4 = 2$.

(d) Area $= (x + 5)(x - 3) = 75$

$$x^2 + 2x - 15 = 75$$ $$x^2 + 2x - 90 = 0$$ $$(x + 10)(x - 8) = 0$$

$x = 8$ (rejecting $x = -10$ since dimensions cannot be negative).

Length $= 8 + 5 = 13\,\text{cm}$. Width $= 8 - 3 = 5\,\text{cm}$.

Perimeter $= 2(13 + 5) = 2(18) = 36\,\text{cm}$.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Forgetting to check excluded values when solving equations with algebraic fractions (values that
  make denominators zero).
- Sign errors when expanding brackets with negative terms, particularly double negatives.
- Confusing the formula for arithmetic series sum ($S_n = \frac{n}{2}[2a + (n-1)d]$) with the
  geometric series sum.
- Applying the sum to infinity formula when $|r| \geq 1$ -- the sum to infinity only exists when
  $|r| < 1$.
- In proof questions, failing to define the variable (e.g., "let $n$ be an integer") at the start of
  the proof.
