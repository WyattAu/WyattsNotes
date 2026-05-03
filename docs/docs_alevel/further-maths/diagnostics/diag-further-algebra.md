---
title: Further Algebra -- Diagnostic Tests
description: "A-Level Further Maths diagnostic tests for further algebra: roots of polynomials, partial fractions, series summation, mathematical induction."
slug: diag-further-algebra
hide_table_of_contents: true
---

# Further Algebra — Diagnostic Tests

## Unit Tests

### UT-1: Roots of Polynomials
**Question:** The cubic $f(x) = x^3 - 3x^2 + 4x - 2$ has roots $\alpha, \beta, \gamma$ where $\alpha = 1$ is a root. (a) Verify that $\alpha = 1$ is a root and factorise $f(x)$. (b) Find $\beta$ and $\gamma$. (c) Calculate $\alpha^2 + \beta^2 + \gamma^2$ without finding $\beta$ and $\gamma$ individually. (d) Find a cubic with roots $2\alpha, 2\beta, 2\gamma$.

**Solution:**

(a) $f(1) = 1 - 3 + 4 - 2 = 0 \checkmark$. $f(x) = (x-1)(x^2 - 2x + 2)$.

(b) $x^2 - 2x + 2 = 0$. $x = \frac{2 \pm \sqrt{4-8}}{2} = 1 \pm i$. So $\beta = 1+i$, $\gamma = 1-i$.

(c) $\alpha^2 + \beta^2 + \gamma^2 = (\alpha+\beta+\gamma)^2 - 2(\alpha\beta+\alpha\gamma+\beta\gamma)$.
By Vieta's: $\alpha+\beta+\gamma = 3$, $\alpha\beta+\alpha\gamma+\beta\gamma = 4$, $\alpha\beta\gamma = 2$.
$= 9 - 8 = 1$.

(d) If roots are $2\alpha, 2\beta, 2\gamma$: sum $= 2 \times 3 = 6$, sum of products $= 4 \times 4 = 16$, product $= 8 \times 2 = 16$.
$g(x) = x^3 - 6x^2 + 16x - 16$.

### UT-2: Partial Fractions and Series
**Question:** (a) Express $\frac{2x+3}{(x+1)(x-2)^2}$ in partial fractions. (b) Find $\sum_{r=1}^{n} \frac{1}{r(r+1)}$. (c) Find $\sum_{r=1}^{n} r^2$. (d) Use the method of differences to find $\sum_{r=1}^{n} \frac{1}{r(r+2)}$.

**Solution:**

(a) $\frac{2x+3}{(x+1)(x-2)^2} = \frac{A}{x+1} + \frac{B}{x-2} + \frac{C}{(x-2)^2}$.
$2x+3 = A(x-2)^2 + B(x+1)(x-2) + C(x+1)$.
$x = -1$: $1 = 9A$, $A = 1/9$. $x = 2$: $7 = 3C$, $C = 7/3$.
Comparing $x^2$: $0 = A + B = 1/9 + B$, $B = -1/9$.
$= \frac{1}{9(x+1)} - \frac{1}{9(x-2)} + \frac{7}{3(x-2)^2}$.

(b) $\frac{1}{r(r+1)} = \frac{1}{r} - \frac{1}{r+1}$.
$\sum_{r=1}^{n} = (1 - \frac{1}{2}) + (\frac{1}{2} - \frac{1}{3}) + \cdots + (\frac{1}{n} - \frac{1}{n+1}) = 1 - \frac{1}{n+1} = \frac{n}{n+1}$.

(c) $\sum_{r=1}^n r^2 = \frac{n(n+1)(2n+1)}{6}$.

(d) $\frac{1}{r(r+2)} = \frac{1}{2}\left(\frac{1}{r} - \frac{1}{r+2}\right)$.
$\sum_{r=1}^n = \frac{1}{2}\left[(1 - \frac{1}{3}) + (\frac{1}{2} - \frac{1}{4}) + \cdots + (\frac{1}{n} - \frac{1}{n+2})\right]$
$= \frac{1}{2}\left(1 + \frac{1}{2} - \frac{1}{n+1} - \frac{1}{n+2}\right) = \frac{1}{2}\left(\frac{3}{2} - \frac{2n+3}{(n+1)(n+2)}\right)$.

### UT-3: Mathematical Induction
**Question:** Prove by induction that $\sum_{r=1}^{n} r^3 = \frac{n^2(n+1)^2}{4}$ for all positive integers $n$.

**Solution:**

**Base case ($n = 1$):** LHS $= 1^3 = 1$. RHS $= \frac{1 \times 4}{4} = 1$. LHS $=$ RHS $\checkmark$.

**Inductive hypothesis:** Assume $\sum_{r=1}^{k} r^3 = \frac{k^2(k+1)^2}{4}$ for some $k \ge 1$.

**Inductive step:** Show for $n = k + 1$:
$\sum_{r=1}^{k+1} r^3 = \sum_{r=1}^{k} r^3 + (k+1)^3 = \frac{k^2(k+1)^2}{4} + (k+1)^3$
$= (k+1)^2\left[\frac{k^2}{4} + (k+1)\right] = \frac{(k+1)^2}{4}[k^2 + 4k + 4] = \frac{(k+1)^2(k+2)^2}{4}$.

This is the formula with $n = k+1$. By induction, the result holds for all $n \ge 1$.

---

## Integration Tests

### IT-1: Polynomial Identities (with Complex Numbers)
**Question:** If $\alpha, \beta, \gamma$ are the roots of $x^3 + px + q = 0$: (a) express $\alpha^3 + \beta^3 + \gamma^3$ in terms of $p$ and $q$. (b) express $\alpha^2\beta + \alpha\beta^2 + \alpha^2\gamma + \alpha\gamma^2 + \beta^2\gamma + \beta\gamma^2$ in terms of $p$ and $q$. (c) If $q = -8$ and $\alpha^3 + \beta^3 + \gamma^3 = 0$, find $p$. (d) Explain the relationship between these identities and symmetric functions.

**Solution:**

(a) $\alpha^3 + \beta^3 + \gamma^3 = (\alpha+\beta+\gamma)^3 - 3(\alpha+\beta+\gamma)(\alpha\beta+\alpha\gamma+\beta\gamma) + 3\alpha\beta\gamma$.
By Vieta's (since $x^3 + px + q = 0$): $\alpha+\beta+\gamma = 0$, $\alpha\beta+\alpha\gamma+\beta\gamma = p$, $\alpha\beta\gamma = -q$.
$= 0 - 0 + 3(-q) = -3q$.

(b) $\alpha^2\beta + \alpha\beta^2 + \alpha^2\gamma + \alpha\gamma^2 + \beta^2\gamma + \beta\gamma^2 = (\alpha+\beta+\gamma)(\alpha\beta+\alpha\gamma+\beta\gamma) - 3\alpha\beta\gamma = 0 \cdot p - 3(-q) = 3q$.

(c) If $q = -8$: $\alpha^3 + \beta^3 + \gamma^3 = -3(-8) = 24$. If this equals 0, then $24 = 0$, which is impossible. So no such $p$ exists. The conditions are inconsistent.

(d) These are Newton's identities connecting power sums $s_k = \sum \alpha_i^k$ with elementary symmetric polynomials $e_k$. For a cubic with zero $x^2$ term: $s_1 = e_1 = 0$, $s_2 = e_1^2 - 2e_2 = -2p$, $s_3 = e_1^3 - 3e_1e_2 + 3e_3 = -3q$. These identities generalize to polynomials of any degree.

### IT-2: Series and Induction Combined (with Calculus)
**Question:** (a) Prove by induction that $\sum_{r=1}^{n} \frac{1}{r(r+1)(r+2)} = \frac{n(n+3)}{4(n+1)(n+2)}$. (b) Hence find $\sum_{r=1}^{\infty} \frac{1}{r(r+1)(r+2)}$. (c) Use the standard expansion of $\frac{1}{1-x}$ to find the Maclaurin series of $\frac{1}{(1-x)^3}$. (d) Verify the result by differentiating the series for $\frac{1}{(1-x)^2}$.

**Solution:**

(a) **Base case ($n=1$):** LHS $= \frac{1}{1 \cdot 2 \cdot 3} = \frac{1}{6}$. RHS $= \frac{1 \cdot 4}{4 \cdot 2 \cdot 3} = \frac{1}{6}$. $\checkmark$.

**Hypothesis:** Assume true for $n = k$.

**Step:** For $n = k+1$:
$\sum_{r=1}^{k+1} \frac{1}{r(r+1)(r+2)} = \frac{k(k+3)}{4(k+1)(k+2)} + \frac{1}{(k+1)(k+2)(k+3)}$
$= \frac{k(k+3)^2 + 4}{4(k+1)(k+2)(k+3)} = \frac{k^3 + 6k^2 + 9k + 4}{4(k+1)(k+2)(k+3)} = \frac{(k+1)^2(k+4)}{4(k+1)(k+2)(k+3)} = \frac{(k+1)(k+4)}{4(k+2)(k+3)}$.

This equals $\frac{(k+1)((k+1)+3)}{4((k+1)+1)((k+1)+2)}$, which is the formula with $n = k+1$. Proven.

(b) $\lim_{n \to \infty} \frac{n(n+3)}{4(n+1)(n+2)} = \frac{1}{4}$. So $\sum_{r=1}^{\infty} \frac{1}{r(r+1)(r+2)} = \frac{1}{4}$.

(c) $\frac{1}{(1-x)^3} = \frac{1}{2}\frac{d^2}{dx^2}\left(\frac{1}{1-x}\right) = \frac{1}{2}\frac{d^2}{dx^2}\left(\sum_{n=0}^{\infty} x^n\right) = \frac{1}{2}\sum_{n=2}^{\infty} n(n-1)x^{n-2} = \frac{1}{2}\sum_{n=0}^{\infty} (n+2)(n+1)x^n$.

So $\frac{1}{(1-x)^3} = \sum_{n=0}^{\infty}\frac{(n+1)(n+2)}{2}x^n = 1 + 3x + 6x^2 + 10x^3 + \cdots$

(d) $\frac{1}{(1-x)^2} = \sum_{n=0}^{\infty}(n+1)x^n$. Differentiating: $\frac{2}{(1-x)^3} = \sum_{n=1}^{\infty}n(n+1)x^{n-1} = \sum_{n=0}^{\infty}(n+1)(n+2)x^n$.
$\frac{1}{(1-x)^3} = \sum_{n=0}^{\infty}\frac{(n+1)(n+2)}{2}x^n$. Verified.

### IT-3: Algebraic Manipulation (with Matrices)
**Question:** (a) If $M = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ satisfies $M^2 = \mathbf{I}$, show that $a^2 + bc = 1$. (b) Find all $2 \times 2$ matrices with integer entries satisfying $M^2 = \mathbf{I}$. (c) The trace of $M$ is $\text{tr}(M) = a + d$. What relationship must the trace satisfy for $M^2 = \mathbf{I}$? (d) How many such matrices exist with entries in $\{0, 1, -1\}$?

**Solution:**

(a) $M^2 = \begin{pmatrix} a^2+bc & ab+bd \\ ac+cd & bc+d^2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.
So $a^2 + bc = 1$, $b(a+d) = 0$, $c(a+d) = 0$, $bc + d^2 = 1$.

(b) From $a^2 + bc = 1$ and $d^2 + bc = 1$: $a^2 = d^2$, so $d = \pm a$.

Case 1: $d = a$. Then $b(a+a) = 2ab = 0$ and $c(a+a) = 2ac = 0$. So either $a = 0$ or $b = c = 0$.
- If $a = 0$: $bc = 1$, so $(b, c) = (1, 1)$ or $(-1, -1)$. Matrices: $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$.
- If $a \ne 0$: $b = c = 0$, $a^2 = 1$, $a = \pm 1$. Matrices: $\pm\mathbf{I}$.

Case 2: $d = -a$. Then $b(a-a) = 0$ and $c(a-a) = 0$ (always satisfied). Need $a^2 + bc = 1$.
With integer entries and $|a|, |b|, |c| \le 1$: if $a = 0$: $bc = 1$, same as above. If $a = 1$: $bc = 0$. If $a = -1$: $bc = 0$.
- $a = 1, d = -1, bc = 0$: $(b,c) = (0,0), (1,0), (-1,0), (0,1), (0,-1)$. But $b$ and $c$ must be in $\{-1, 0, 1\}$.
  Matrices: $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $\begin{pmatrix}1&1\\0&-1\end{pmatrix}$, $\begin{pmatrix}1&-1\\0&-1\end{pmatrix}$, $\begin{pmatrix}1&0\\1&-1\end{pmatrix}$, $\begin{pmatrix}1&0\\-1&-1\end{pmatrix}$.
- $a = -1, d = 1$: similarly, 5 matrices with $(-1, 1)$ diagonal.

(c) From $M^2 = \mathbf{I}$: $\det(M)^2 = 1$, so $\det(M) = \pm 1$. Also $\text{tr}(M) = a + d$. From $d = \pm a$: $\text{tr} = 2a$ or $\text{tr} = 0$.
If $d = a$: $\text{tr} = 2a \in \{-2, 0, 2\}$. If $d = -a$: $\text{tr} = 0$.
So $\text{tr}(M) \in \{-2, 0, 2\}$.

(d) From case 1 (d = a): $2\mathbf{I}$, $-2\mathbf{I}$, $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$. That is 4 matrices.
From case 2 (d = -a): For $a = 1$: 5 matrices. For $a = -1$: 5 matrices. For $a = 0$: same 2 matrices (already counted).
Total: $4 + 5 + 5 = 14$ matrices with entries in $\{0, 1, -1\}$.
