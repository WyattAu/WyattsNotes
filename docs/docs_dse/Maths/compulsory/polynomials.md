---
title: Polynomials
description: "DSE Mathematics polynomial notes covering polynomial division, factor theorem, remainder theorem, roots of equations, and polynomial graphs."
date: 2025-06-03T13:29:40.310Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: polynomials
---

A polynomial in one variable $x$ is an expression of the form
$a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$, where $n \in \mathbb{N}_0$,
$a_n, a_{n-1}, \ldots, a_0 \in \mathbb{R}$, and $a_n \neq 0$. Polynomials and their manipulation
form a core part of the DSE compulsory mathematics syllabus, with applications ranging from
algebraic identities to combinatorial coefficient extraction.

## Polynomial Basics

### Definition and Terminology

A polynomial $f(x)$ of degree $n$ is written in **standard form** (descending powers of $x$):

$$
f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0, \quad a_n \neq 0
$$

- $a_n$ is the **leading coefficient**.
- $a_0$ is the **constant term**.
- The **degree** of $f(x)$ is the highest power of $x$ with a non-zero coefficient.
- A polynomial of degree 0 is a non-zero constant; the zero polynomial has undefined degree.

### Polynomial Identities

A polynomial identity is an equality that holds for all values of the variable. Two polynomials
$f(x)$ and $g(x)$ are identical (written $f(x) \equiv g(x)$) if and only if the coefficients of
corresponding powers of $x$ are equal.

<details>
<summary>Key identities at DSE level</summary>
- $(a+b)^2 = a^2 + 2ab + b^2$
- $(a-b)^2 = a^2 - 2ab + b^2$
- $(a+b)(a-b) = a^2 - b^2$
- $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$
- $(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$
- $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$
- $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$
- $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2 + b^2 + c^2 - ab - bc - ca)$
</details>

<details>
<summary>Example: Using the method of undetermined coefficients</summary>
Find constants $A$, $B$, $C$ such that $x^2 + 4x + 6 \equiv A(x-1)^2 + B(x-1) + C$.

Expanding the right-hand side:

$$
A(x^2 - 2x + 1) + Bx - B + C = Ax^2 + (-2A + B)x + (A - B + C)
$$

Equating coefficients:

- $x^2$: $A = 1$
- $x$: $-2A + B = 4 \implies B = 6$
- constant: $A - B + C = 6 \implies 1 - 6 + C = 6 \implies C = 11$

Therefore $x^2 + 4x + 6 \equiv (x-1)^2 + 6(x-1) + 11$.

</details>

---

## Binomial Theorem

### Statement

For any positive integer $n$,

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
$$

where the **binomial coefficient** is

$$
\binom{n}{k} = {}_n C_k = \frac{n!}{k!(n-k)!}
$$

This is known as the **Binomial Theorem**. See also
[combinatorial notation](./combinatorics#combinations).

### Pascal's Triangle

The binomial coefficients $\binom{n}{k}$ for successive values of $n$ form Pascal's triangle:

$$
\begin{array}{c@{\hspace{12pt}}c@{\hspace{12pt}}c@{\hspace{12pt}}c@{\hspace{12pt}}c@{\hspace{12pt}}c}
 &  &  &  & 1 &  \\
 &  &  & 1 &  & 1 \\
 &  & 1 &  & 2 &  & 1 \\
 & 1 &  & 3 &  & 3 &  & 1 \\
1 &  & 4 &  & 6 &  & 4 &  & 1
\end{array}
$$

Each entry is the sum of the two entries directly above it, reflecting the recurrence relation
$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$.

### Properties of Binomial Coefficients

1. **Symmetry**: $\displaystyle \binom{n}{k} = \binom{n}{n-k}$

2. **Recurrence (Pascal's identity)**:
   $\displaystyle \binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$

3. **Sum of coefficients**: Setting $a = b = 1$ in the binomial theorem,

$$
\sum_{k=0}^{n} \binom{n}{k} = 2^n
$$

4. **Alternating sum**: Setting $a = 1, b = -1$,

$$
\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0
$$

### Expanding $(1+x)^n$

The expansion of $(1+x)^n$ is a frequently tested form:

$$
(1 + x)^n = \binom{n}{0} + \binom{n}{1}x + \binom{n}{2}x^2 + \cdots + \binom{n}{n}x^n
$$

The **general term** (the $(r+1)$-th term) is:

$$
T_{r+1} = \binom{n}{r} x^r, \quad r = 0, 1, 2, \ldots, n
$$

### Expanding $(a + bx)^n$

For $(a + bx)^n$, the general term is:

$$
T_{r+1} = \binom{n}{r} a^{n-r} (bx)^r = \binom{n}{r} a^{n-r} b^r x^r
$$

To find the coefficient of $x^k$, set $r = k$ and evaluate:

$$
[\mathrm{coefficient of } x^k] = \binom{n}{k} a^{n-k} b^k
$$

<details>
<summary>Example: Finding a specific coefficient</summary>
Find the coefficient of $x^3$ in the expansion of $(2 - 3x)^7$.

The general term is $T_{r+1} = \binom{7}{r} 2^{7-r}(-3x)^r$.

For the $x^3$ term, set $r = 3$:

$$
\binom{7}{3} \cdot 2^4 \cdot (-3)^3 = 35 \cdot 16 \cdot (-27) = -15\,120
$$

The coefficient of $x^3$ is $-15\,120$.

</details>

<details>
<summary>Example: Finding the constant term</summary>
Find the constant term in the expansion of $\left(x + \dfrac{2}{x}\right)^6$.

The general term is
$T_{r+1} = \binom{6}{r} x^{6-r} \left(\dfrac{2}{x}\right)^r = \binom{6}{r} \cdot 2^r \cdot x^{6-2r}$.

For the constant term, $6 - 2r = 0 \implies r = 3$:

$$
\binom{6}{3} \cdot 2^3 = 20 \cdot 8 = 160
$$

The constant term is $160$.

</details>

<details>
<summary>Example: Finding the middle term</summary>
Find the middle term in the expansion of $\left(1 + \dfrac{x}{2}\right)^{10}$.

Since $n = 10$ (even), there is one middle term at position $\dfrac{n}{2} + 1 = 6$, i.e. $r = 5$:

$$
T_6 = \binom{10}{5} \left(\frac{x}{2}\right)^5 = 252 \cdot \frac{x^5}{32} = \frac{63}{8} x^5
$$

</details>

---

## Polynomial Division

### Long Division

Given two polynomials $f(x)$ (dividend) and $g(x)$ (divisor) with $\deg g(x) \geq 1$, polynomial
long division yields a quotient $q(x)$ and a remainder $r(x)$ such that

$$
f(x) = g(x) \cdot q(x) + r(x)
$$

where $\deg r(x) < \deg g(x)$ or $r(x) = 0$.

<details>
<summary>Example: Long division</summary>
Divide $f(x) = 2x^3 + 3x^2 - 5x + 7$ by $g(x) = x^2 - x + 2$.

$$
\begin{array}{r|l}
x^2 - x + 2 & 2x^3 + 3x^2 - 5x + 7 \\
\hline
            & 2x \\
            & 2x^3 - 2x^2 + 4x \\
            \cline{2-2}
            & \phantom{2x^3{}} 5x^2 - 9x + 7 \\
            & \phantom{2x^3{}} 5x^2 - 5x + 10 \\
            & \cline{2-2}
            & \phantom{2x^3{}} \phantom{5x^2{}} -4x - 3
\end{array}
$$

Quotient: $q(x) = 2x + 5$, Remainder: $r(x) = -4x - 3$.

Verification: $(x^2 - x + 2)(2x + 5) + (-4x - 3) = 2x^3 + 3x^2 - 5x + 7$.

</details>

### Remainder Theorem

When a polynomial $f(x)$ is divided by $(x - c)$, the remainder is $f(c)$.

**Proof.** By the division algorithm, $f(x) = (x-c) \cdot q(x) + r$ where $r$ is a constant (since
$\deg r < \deg(x-c) = 1$). Substituting $x = c$: $f(c) = 0 \cdot q(c) + r = r$.

For a divisor of the form $(ax - b)$, set $x = \dfrac{b}{a}$ to obtain the remainder
$f\!\left(\dfrac{b}{a}\right)$.

<details>
<summary>Example: Remainder theorem</summary>
Find the remainder when $f(x) = 3x^4 - 2x^3 + x - 5$ is divided by $(x - 2)$.

By the Remainder Theorem, the remainder is $f(2)$:

$$
f(2) = 3(16) - 2(8) + 2 - 5 = 48 - 16 + 2 - 5 = 29
$$

</details>

<details>
<summary>Example: Remainder with a non-monic linear divisor</summary>
Find the remainder when $f(x) = 2x^3 - 5x + 3$ is divided by $(2x + 1)$.

Set $2x + 1 = 0 \implies x = -\dfrac{1}{2}$. The remainder is:

$$
f\!\left(-\frac{1}{2}\right) = 2\left(-\frac{1}{2}\right)^3 - 5\left(-\frac{1}{2}\right) + 3 = -\frac{1}{4} + \frac{5}{2} + 3 = \frac{21}{4}
$$

</details>

### Factor Theorem

$(x - c)$ is a factor of $f(x)$ if and only if $f(c) = 0$.

This follows directly from the Remainder Theorem: if the remainder $f(c) = 0$, then
$f(x) = (x-c) \cdot q(x)$, so $(x-c)$ divides $f(x)$ exactly.

**Corollary.** $(ax - b)$ is a factor of $f(x)$ if and only if $f\!\left(\dfrac{b}{a}\right) = 0$.

<details>
<summary>Example: Factor theorem</summary>
Show that $(x - 3)$ is a factor of $f(x) = x^3 - 4x^2 + x + 6$ and hence factorize $f(x)$ completely.

$f(3) = 27 - 36 + 3 + 6 = 0$, so $(x - 3)$ is a factor.

By division (or by comparing coefficients), $f(x) = (x - 3)(x^2 - x - 2) = (x-3)(x-2)(x+1)$.

</details>

<details>
<summary>Example: Finding an unknown constant</summary>
If $(x + 2)$ is a factor of $f(x) = x^3 + ax^2 - 3x + 10$, find $a$.

By the Factor Theorem, $f(-2) = 0$:

$$
(-2)^3 + a(-2)^2 - 3(-2) + 10 = 0 \implies -8 + 4a + 6 + 10 = 0 \implies 4a + 8 = 0 \implies a = -2
$$

</details>

---

## Factorization of Polynomials

### Common Techniques

<details>
<summary>HCF (highest common factor)</summary>
Factor out the greatest common factor from all terms.

$$
6x^3 - 9x^2 + 12x = 3x(2x^2 - 3x + 4)
$$

</details>

<details>
<summary>Grouping</summary>
$$
x^3 + 2x^2 - 3x - 6 = x^2(x+2) - 3(x+2) = (x^2 - 3)(x+2)
$$
</details>

<details>
<summary>Difference of squares</summary>
$$
a^2 - b^2 = (a+b)(a-b)
$$

$$
4x^2 - 25 = (2x+5)(2x-5)
$$

$$
9x^4 - 16y^2 = (3x^2 + 4y)(3x^2 - 4y)
$$

</details>

<details>
<summary>Sum and difference of cubes</summary>
$$
a^3 + b^3 = (a+b)(a^2 - ab + b^2)
$$

$$
a^3 - b^3 = (a-b)(a^2 + ab + b^2)
$$

$$
8x^3 + 27 = (2x+3)(4x^2 - 6x + 9)
$$

$$
125x^3 - 8 = (5x-2)(25x^2 + 10x + 4)
$$

</details>

<details>
<summary>Quadratic trinomials</summary>
For $ax^2 + bx + c$, find two numbers $p$ and $q$ such that $pq = ac$ and $p + q = b$.

$$
6x^2 - 7x + 2 = 6x^2 - 4x - 3x + 2 = 2x(3x - 2) - 1(3x - 2) = (2x - 1)(3x - 2)
$$

If the discriminant $\Delta = b^2 - 4ac < 0$, the quadratic cannot be factorized over $\mathbb{R}$.

</details>

### Factorization by the Factor Theorem

For polynomials of degree 3 or higher, use the Factor Theorem to find linear factors by testing
integer roots (factors of the constant term), then factorize the resulting quotient.

<details>
<summary>Example: Complete factorization</summary>
Factorize $f(x) = 2x^3 + x^2 - 13x + 6$ completely.

Test integer factors of $6$: try $x = 1$.

$f(1) = 2 + 1 - 13 + 6 = -4 \neq 0$

Try $x = 2$:

$f(2) = 16 + 4 - 26 + 6 = 0$, so $(x-2)$ is a factor.

Dividing: $f(x) = (x-2)(2x^2 + 5x - 3) = (x-2)(2x-1)(x+3)$.

</details>

---

## Equations

### Solving Polynomial Equations

To solve $f(x) = 0$:

1. Factorize $f(x)$ into linear (and possibly irreducible quadratic) factors.
2. Set each factor equal to zero and solve.

<details>
<summary>Example</summary>
Solve $x^3 - 3x^2 - 4x + 12 = 0$.

Factorizing by grouping: $x^2(x-3) - 4(x-3) = (x^2 - 4)(x-3) = (x-2)(x+2)(x-3) = 0$.

Solutions: $x = 2, -2, 3$.

</details>

### Vieta's Formulas (Quadratic)

For a quadratic equation $ax^2 + bx + c = 0$ with roots $\alpha$ and $\beta$:

$$
\alpha + \beta = -\frac{b}{a}, \qquad \alpha\beta = \frac{c}{a}
$$

These relationships between roots and coefficients are essential for DSE problems involving root
manipulation.

<details>
<summary>Example: Finding a new equation from roots</summary>
If $\alpha$ and $\beta$ are roots of $2x^2 - 5x + 1 = 0$, find the equation whose roots are $\alpha^2$ and $\beta^2$.

From Vieta: $\alpha + \beta = \dfrac{5}{2}$, $\alpha\beta = \dfrac{1}{2}$.

Sum of new roots:

$$
\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \frac{25}{4} - 1 = \frac{21}{4}
$$

Product of new roots:

$$
\alpha^2 \beta^2 = (\alpha\beta)^2 = \frac{1}{4}
$$

The required equation is $x^2 - \dfrac{21}{4}x + \dfrac{1}{4} = 0$, or equivalently
$4x^2 - 21x + 1 = 0$.

</details>

<details>
<summary>Example: Symmetric expressions in roots</summary>
If $\alpha$ and $\beta$ are roots of $x^2 - 6x + 4 = 0$, find the value of $\dfrac{1}{\alpha} + \dfrac{1}{\beta}$.

$$
\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{6}{4} = \frac{3}{2}
$$

</details>

<details>
<summary>Extension: Vieta's formulas for cubic equations</summary>
For $ax^3 + bx^2 + cx + d = 0$ with roots $\alpha, \beta, \gamma$:

$$
\alpha + \beta + \gamma = -\frac{b}{a}, \quad \alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a}, \quad \alpha\beta\gamma = -\frac{d}{a}
$$

</details>

---

<details>
<summary>Wrap-up Questions</summary>
1. **Question:** Expand $(1 + 2x)^6$ and find the coefficient of $x^4$.
<details>
<summary>Answer</summary>
Using the binomial theorem:

$$
(1 + 2x)^6 = \sum_{k=0}^{6} \binom{6}{k}(2x)^k
$$

The coefficient of $x^4$ corresponds to $k = 4$:

$$
\binom{6}{4} \cdot 2^4 = 15 \cdot 16 = 240
$$

The full expansion is $1 + 12x + 60x^2 + 160x^3 + 240x^4 + 192x^5 + 64x^6$.

</details>

2. **Question:** Find the constant term in the expansion of $\left(x^2 + \dfrac{1}{x}\right)^9$.
<details>
<summary>Answer</summary>
The general term is $T_{r+1} = \binom{9}{r} (x^2)^{9-r} \cdot \left(\dfrac{1}{x}\right)^r = \binom{9}{r} x^{18 - 3r}$.

For the constant term: $18 - 3r = 0 \implies r = 6$.

$$
\binom{9}{6} = \binom{9}{3} = 84
$$

The constant term is $84$.

</details>

3. **Question:** When $f(x) = 2x^3 + ax^2 + bx - 6$ is divided by $(x-1)$, the remainder is $-4$.
When divided by $(x+2)$, the remainder is $30$. Find $a$ and $b$.
<details>
<summary>Answer</summary>
By the Remainder Theorem:

- $f(1) = 2 + a + b - 6 = -4 \implies a + b = 0 \quad \mathrm{(i)}$
- $f(-2) = -16 + 4a - 2b - 6 = 30 \implies 4a - 2b = 52 \implies 2a - b = 26 \quad \mathrm{(ii)}$

Adding (i) and (ii): $3a = 26 \implies a = \dfrac{26}{3}$.

From (i): $b = -\dfrac{26}{3}$.

</details>

4. **Question:** Given that $(x - 3)$ and $(x + 1)$ are factors of $f(x) = x^3 + ax^2 + bx + c$,
find $a$, $b$, and $c$. Hence factorize $f(x)$ completely.
<details>
<summary>Answer</summary>
By the Factor Theorem:

- $f(3) = 27 + 9a + 3b + c = 0 \quad \mathrm{(i)}$
- $f(-1) = -1 + a - b + c = 0 \quad \mathrm{(ii)}$

Since $(x-3)(x+1) = x^2 - 2x - 3$ is a factor, write $f(x) = (x^2 - 2x - 3)(x - d)$ for some
constant $d$.

Expanding: $f(x) = x^3 - (d+2)x^2 + (2d - 3)x + 3d$.

Comparing with $f(x) = x^3 + ax^2 + bx + c$:

- $a = -(d+2)$
- $b = 2d - 3$
- $c = 3d$

Also $f(3) = 0$ gives $27 + 9a + 3b + c = 0$.

Using $f(-1) = 0$: $-1 + a - b + c = 0$.

Subtracting (ii) from (i): $28 + 8a + 4b = 0 \implies 7 + 2a + b = 0 \quad \mathrm{(iii)}$.

From (ii): $a - b + c = 1$.

Substituting $a = -(d+2)$, $b = 2d-3$, $c = 3d$ into (i):

$$
27 + 9(-d-2) + 3(2d-3) + 3d = 27 - 9d - 18 + 6d - 9 + 3d = 0
$$

This simplifies to $0 = 0$, which is consistent. From (ii):

$$
-1 - d - 2 + 3 - 2d + 3d = 0 \implies 0 = 0
$$

We need one more condition. Since the leading coefficient is $1$ and $f(x) = (x-3)(x+1)(x - d)$, we
must have the constant term $c = 3d$. But $f(x)$ has constant term $c$. Comparing: $c = 3d$. We have
one free parameter, so let us use $f(0) = c = 3d$, but we need another constraint.

Let us equate the $x^2$ coefficient: $a = -(d+2)$. The $x$ coefficient: $b = 2d - 3$. Substituting
into (iii): $7 + 2(-d-2) + (2d-3) = 7 - 2d - 4 + 2d - 3 = 0$. Again automatically satisfied.

Without additional information, $d$ is undetermined. However, since $(x-3)$ and $(x+1)$ are the
_only_ stated factors, and the problem asks us to factorize completely, we observe that a cubic with
two known linear factors has a third linear factor. By Vieta, $\alpha + \beta + \gamma = -a$, and
$\alpha\beta\gamma = -c$. With $\alpha = 3, \beta = -1$:

$$
3 + (-1) + \gamma = -a \implies 2 + \gamma = -a
$$

$$
3 \cdot (-1) \cdot \gamma = -c \implies -3\gamma = -c \implies c = 3\gamma
$$

There are infinitely many cubics with $(x-3)$ and $(x+1)$ as factors. Assuming the problem intends a
monic cubic (which it is, with leading coefficient $1$), we write $f(x) = (x-3)(x+1)(x - d)$ where
$d$ is the third root. Since no further condition is given, the general answer is:

$a = -(d+2)$, $b = 2d - 3$, $c = 3d$, and $f(x) = (x-3)(x+1)(x-d)$ for any real $d$.

</details>

5. **Question:** Factorize $x^4 - 5x^2 + 4$ completely.
<details>
<summary>Answer</summary>
Let $u = x^2$:

$$
u^2 - 5u + 4 = (u-1)(u-4) = (x^2 - 1)(x^2 - 4) = (x-1)(x+1)(x-2)(x+2)
$$

</details>

6. **Question:** If $\alpha$ and $\beta$ are roots of $3x^2 - 8x + 2 = 0$, find the value of
$\alpha^3 + \beta^3$ without solving the equation.
<details>
<summary>Answer</summary>
From Vieta: $\alpha + \beta = \dfrac{8}{3}$, $\alpha\beta = \dfrac{2}{3}$.

$$
\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = \left(\frac{8}{3}\right)^3 - 3 \cdot \frac{2}{3} \cdot \frac{8}{3}
$$

$$
= \frac{512}{27} - \frac{48}{9} = \frac{512}{27} - \frac{144}{27} = \frac{368}{27}
$$

</details>

7. **Question:** Expand $(1 - 3x)^5$ in ascending powers of $x$ up to and including the term in
$x^3$. Use the expansion to find an approximate value of $(0.97)^5$.
<details>
<summary>Answer</summary>
$$
(1-3x)^5 = \binom{5}{0} + \binom{5}{1}(-3x) + \binom{5}{2}(-3x)^2 + \binom{5}{3}(-3x)^3 + \cdots
$$

$$
= 1 - 15x + 90x^2 - 270x^3 + \cdots
$$

Set $1 - 3x = 0.97 \implies x = 0.01$:

$$
(0.97)^5 \approx 1 - 15(0.01) + 90(0.0001) - 270(0.000001) = 1 - 0.15 + 0.009 - 0.00027 = 0.85873
$$

</details>

8. **Question:** The remainder when $f(x) = x^3 + px^2 + qx + 6$ is divided by $(x-1)$ is $12$. The
remainder when $f(x)$ is divided by $(x+1)$ is $18$. Find $p$ and $q$.
<details>
<summary>Answer</summary>

- $f(1) = 1 + p + q + 6 = 12 \implies p + q = 5 \quad \mathrm{(i)}$
- $f(-1) = -1 + p - q + 6 = 18 \implies p - q = 13 \quad \mathrm{(ii)}$

Adding: $2p = 18 \implies p = 9$.

From (i): $q = -4$.

</details>

9. **Question:** Prove that $\binom{n}{r} = \binom{n}{n-r}$ using the definition of binomial
coefficients.
<details>
<summary>Answer</summary>
$$
\binom{n}{n-r} = \frac{n!}{(n-r)!\,[n-(n-r)]!} = \frac{n!}{(n-r)!\,r!} = \binom{n}{r}
$$
</details>

10. **Question:** Find the coefficient of $x^5$ in the expansion of $(1 + x)^8(1 - x)^6$.
<details>
<summary>Answer</summary>
Expand each factor using the binomial theorem and collect the $x^5$ terms.

From $(1+x)^8$, the terms contributing to $x^5$ are $x^k$ where $k \leq 5$; from $(1-x)^6$, the term
$(-x)^{5-k}$.

The coefficient of $x^5$ is:

$$
\sum_{k=0}^{5} \binom{8}{k}(-1)^{5-k}\binom{6}{5-k}
$$

Evaluating each term:

- $k=0$: $\binom{8}{0}(-1)^5\binom{6}{5} = 1 \cdot (-1) \cdot 6 = -6$
- $k=1$: $\binom{8}{1}(-1)^4\binom{6}{4} = 8 \cdot 1 \cdot 15 = 120$
- $k=2$: $\binom{8}{2}(-1)^3\binom{6}{3} = 28 \cdot (-1) \cdot 20 = -560$
- $k=3$: $\binom{8}{3}(-1)^2\binom{6}{2} = 56 \cdot 1 \cdot 15 = 840$
- $k=4$: $\binom{8}{4}(-1)^1\binom{6}{1} = 70 \cdot (-1) \cdot 6 = -420$
- $k=5$: $\binom{8}{5}(-1)^0\binom{6}{0} = 56 \cdot 1 \cdot 1 = 56$

Sum: $-6 + 120 - 560 + 840 - 420 + 56 = 30$.

The coefficient of $x^5$ is $30$.

</details>

11. **Question:** Let $\alpha$ and $\beta$ be the roots of $x^2 - 7x + 3 = 0$. Form a quadratic
equation whose roots are $\dfrac{1}{\alpha}$ and $\dfrac{1}{\beta}$.
<details>
<summary>Answer</summary>
From Vieta: $\alpha + \beta = 7$, $\alpha\beta = 3$.

Sum of new roots:
$\dfrac{1}{\alpha} + \dfrac{1}{\beta} = \dfrac{\alpha + \beta}{\alpha\beta} = \dfrac{7}{3}$.

Product of new roots: $\dfrac{1}{\alpha} \cdot \dfrac{1}{\beta} = \dfrac{1}{3}$.

The equation is $x^2 - \dfrac{7}{3}x + \dfrac{1}{3} = 0$, or $3x^2 - 7x + 1 = 0$.

</details>

12. **Question:** Factorize $f(x) = x^3 - 3x^2 + 4$ completely.
<details>
<summary>Answer</summary>
Test integer factors of $4$: try $x = -1$.

$f(-1) = -1 - 3 + 4 = 0$, so $(x+1)$ is a factor.

Dividing: $f(x) = (x+1)(x^2 - 4x + 4) = (x+1)(x-2)^2$.

</details>
</details>

