---
title: IMO Preparation
description: "Comprehensive preparation guide for the International Mathematical Olympiad (IMO): advanced number theory, combinatorics, algebra, geometry, worked solutions, s"
date: 2026-05-05T00:00:00.000Z
tags:
  - Mathematics
  - University
  - Admissions
categories:
  - Mathematics
slug: imo-preparation
---
## 1. Overview of the IMO

The International Mathematical Olympiad (IMO) is the premier mathematics competition for pre-university
Students, held annually since 1959. Each participating country sends a team of up to six students.

### 1.1 Format

The competition spans two days, each with a 4.5-hour session containing 3 problems. The six problems
Are divided by convention:

| Problem | Typical Topic | Difficulty |
| ------- | ------------- | ---------- |
| 1 | Accessible; often combinatorics or number theory | Easiest |
| 2 | Medium; often algebra or geometry | Medium |
| 3 | Hard; any topic | Hard |
| 4 | Accessible; often geometry or number theory | Easier |
| 5 | Medium; often combinatorics or algebra | Medium-Hard |
| 6 | Very hard; any topic | Hardest |

Each problem is worth 7 marks, for a maximum of 42. A gold medal requires approximately 29+, silver
Approximately 22+, and bronze approximately 16+ (thresholds vary by year).

### 1.2 UK Selection Process

The UK team is selected through a multi-stage process:

1. **Senior Mathematical Challenge (SMC):** Open entry, multiple choice.
2. **BMO Round 1:** Top 1000 SMC scorers; 6 problems in 3.5 hours.
3. **BMO Round 2:** Top 100 BMO 1 scorers; 4 problems in 3.5 hours.
4. **IMO training camp:** Top 20--30 students attend a residential training camp with problem
 sessions, lectures, and selection tests.
5. **Team selection:** The team of 6 is chosen based on camp performance and prior results.

### 1.3 Problem Characteristics

IMO problems require complete, rigorous proofs. The standard of rigour expected is higher than at
BMO level. Key features include:
- Non-standard constructions that do not arise from routine application of formulas.
- Multi-step arguments where each step is non-trivial.
- Problems that resist standard approaches and require genuine insight.
- Full generality is often required: a solution must handle all cases, including degenerate ones.

---

## 2. Advanced Number Theory

### 2.1 Euler's Theorem and the Totient Function

Euler's totient function $\phi(n)$ counts the integers in $\{1, 2, \ldots, n\}$ that are coprime to $n$.
For prime $p$: $\phi(p) = p - 1$. For $n = p_1^{a_1} \cdots p_k^{a_k}$:

$$\phi(n) = n \prod_{p \mid n}\left(1 - \frac{1}{p}\right)$$

**Euler's Theorem.** If $\gcd(a, n) = 1$Then $a^{\phi(n)} \equiv 1 \pmod{n}$.

**Corollary: the order of $a$ modulo $n$.** The smallest positive integer $d$ such that $a^d \equiv 1 \pmod{n}$
Is called the order of $a$ modulo $n$Denoted $\text{ord{}_n(a)$. The order divides $\phi(n)$And more
Generally divides any exponent $k$ for which $a^k \equiv 1 \pmod{n}$.

**Technique: orders in Diophantine equations.** If $a^m \equiv a^n \pmod{p}$ with $\gcd(a, p) = 1$
Then $m \equiv n \pmod{\text{ord{}_p(a)}$. This is often more precise than working modulo $p - 1$.

### 2.2 Chinese Remainder Theorem

**Chinese Remainder Theorem (CRT).** If $m_1, \ldots, m_k$ are pairwise coprime, then the system of
Congruences $x \equiv a_i \pmod{m_i}$ for $i = 1, \ldots, k$ has a unique solution modulo
$M = m_1 \cdots m_k$.

**Proof sketch.** For $k = 2$: let $M_1 = m_2$$M_2 = m_1$. Compute $t_1$ such that $M_1 t_1 \equiv 1 \pmod{m_1}$
(using the extended Euclidean algorithm) and $t_2$ such that $M_2 t_2 \equiv 1 \pmod{m_2}$. Then
$x = a_1 M_1 t_1 + a_2 M_2 t_2$ satisfies both congruences.

**Technique: splitting a problem.** Use CRT to reduce a problem modulo $m$ to problems modulo each
Prime power dividing $m$. For example, to find all solutions to $x^2 \equiv 1 \pmod{m}$Solve
$x^2 \equiv 1 \pmod{p^a}$ for each prime power in the factorisation of $m$ and combine via CRT.

### 2.3 Quadratic Residues

**Definition.** An integer $a$ is a quadratic residue modulo $p$ (prime, $p \nmid a$) if $x^2 \equiv a \pmod{p}$
Has a solution.

**Euler's criterion.** $a$ is a quadratic residue modulo $p$ if and only if $a^{(p-1)/2} \equiv 1 \pmod{p}$.
If $a$ is a non-residue, then $a^{(p-1)/2} \equiv -1 \pmod{p}$.

**Legendre symbol.** $\left(\frac{a}{p}\right) = 1$ if $a$ is a QR, $-1$ if $a$ is a QNR, and $0$ if
$p \mid a$.

**Properties.** The Legendre symbol is multiplicative: $\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right)\left(\frac{b}{p}\right)$.
The number of QRs modulo $p$ is $(p-1)/2$.

**Quadratic reciprocity.** For odd primes $p, q$:

$$\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}$$

**Supplementary laws.**

$$\left(\frac{-1}{p}\right) = (-1)^{(p-1)/2}, \quad \left(\frac{2}{p}\right) = (-1)^{(p^2-1)/8}$$

### 2.4 Lifting the Exponent Lemma (LTE)

For an odd prime $p$ and integers $a, b$ with $p \mid a - b$ and $p \nmid ab$:

$$v_p(a^n - b^n) = v_p(a - b) + v_p(n)$$

For $p = 2$ and $a, b$ both odd with $4 \mid a - b$:

$$v_2(a^n - b^n) = v_2(a - b) + v_2(a + b) + v_2(n) - 1$$

**Technique: LTE in Diophantine equations.** LTE is extremely useful for determining the exact power of
A prime dividing an expression. Combined with size bounds, this often forces the only possible solutions.

---

## 3. Advanced Combinatorics

### 3.1 Ramsey Theory

**Ramsey's theorem (finite version).** For any positive integers $r, s$There exists a smallest integer
$R(r, s)$ such that any 2-colouring of the edges of a complete graph on $R(r, s)$ vertices contains
Either a red $K_r$ or a blue $K_s$.

**Known values and bounds.** $R(3, 3) = 6$$R(3, 4) = 9$$R(3, 5) = 14$$R(4, 4) = 18$.
$R(r, s) \leq \binom{r+s-2}{r-1}$.

**Technique: constructive lower bounds.** To show $R(r, s) > n$Exhibit a 2-colouring of $K_n$ with no
Red $K_r$ or blue $K_s$. For $R(3, 3) > 5$: colour the edges of a pentagon red and the diagonals blue.

**Technique: induction in Ramsey theory.** The recurrence $R(r, s) \leq R(r-1, s) + R(r, s-1)$ follows
From considering a single vertex and its red and blue neighbours.

### 3.2 Graph Theory

**Handshaking lemma.** $\sum_{v \in V} \deg(v) = 2|E|$.

**Trees.** A connected graph on $n$ vertices with $n - 1$ edges is a tree. Equivalently, a graph with
No cycles and $n - 1$ edges on $n$ vertices is connected (hence a tree).

**Planarity.** A graph is planar if it can be drawn in the plane without edge crossings. Euler's formula
For connected planar graphs: $V - E + F = 2$Where $F$ is the number of faces.

**Technique: graph invariants.** The chromatic number, independence number, clique number, and
Matching number are powerful tools. The pigeonhole principle applied to degrees often yields results.

**Technique: Tournaments.** A tournament is a complete directed graph. Every tournament has a Hamiltonian
Path. A transitive tournament (where the ordering is consistent) has a unique Hamiltonian path.

### 3.3 The Probabilistic Method

The probabilistic method proves the existence of an object with certain properties by showing that a
Randomly chosen object has a positive probability of having those properties.

**Basic form.** If the expected number of "bad" events is less than 1, then there exists an outcome
With no bad events.

**Lovasz Local Lemma.** If events $A_1, \ldots, A_n$ each have probability at most $p$Each event is
Independent of all but at most $d$ other events, and $ep(d+1) \leq 1$Then there is a nonzero
Probability that none of the events occur.

**Technique: linearity of expectation.** The expected value of a sum equals the sum of expected values,
Regardless of dependence. This is often combined with the probabilistic method to prove existence of
Objects with certain average properties.

**Example application.** In any graph $G$ with $m$ edges, there exists a bipartite subgraph with at
Least $m/2$ edges. Proof: randomly partition the vertices into two sets $A, B$ by assigning each
Vertex independently with probability $1/2$. Each edge crosses the partition with probability $1/2$
So the expected number of crossing edges is $m/2$. Therefore some partition achieves at least $m/2$.

### 3.4 Generating Functions and Recurrences

**Ordinary generating functions (OGF).** $G(x) = \sum_{n=0}^{\infty} a_n x^n$. Used for counting problems
With additive structure.

**Exponential generating functions (EGF).** $G_e(x) = \sum_{n=0}^{\infty} a_n \frac{x^n}{n!}$. Used for
Counting labelled structures.

**Technique: extracting coefficients.** The coefficient of $x^n$ in $(1-x)^{-k}$ is $\binom{n+k-1}{k-1}$.
The coefficient of $x^n$ in $e^{kx}$ is $k^n/n!$.

**Technique: Catalan numbers.** $C_n = \frac{1}{n+1}\binom{2n}{n}$ counts triangulations of a convex
$(n+2)$-gon, valid parenthesis expressions with $n$ pairs, and many other combinatorial structures.
The generating function $C(x) = \sum C_n x^n$ satisfies $C(x) = 1 + xC(x)^2$.

---

## 4. Advanced Algebra

### 4.1 Classical Inequalities

**Cauchy-Schwarz (Engel form).** For positive reals and real weights:

$$\frac{a_1^2}{b_1} + \frac{a_2^2}{b_2} + \cdots + \frac{a_n^2}{b_n} \geq \frac{(a_1 + a_2 + \cdots + a_n)^2}{b_1 + b_2 + \cdots + b_n}$$

This form is particularly useful for olympiad problems because it directly produces the desired
Bound without an intermediate step.

**Holder's Inequality.** For $a_{ij} > 0$ and $p_1, p_2, \ldots, p_k > 1$ with
$1/p_1 + \cdots + 1/p_k = 1$:

$$\sum_{i=1}^{n}\prod_{j=1}^{k} a_{ij} \leq \prod_{j=1}^{k}\left(\sum_{i=1}^{n} a_{ij}^{p_j}\right)^{1/p_j}$$

**Muirhead's Inequality.** A symmetric sum $\sum_{\text{sym{}} x_1^{a_1} x_2^{a_2} \cdots x_n^{a_n}$
Is denoted $[a_1, a_2, \ldots, a_n]$. We say $(a_1, \ldots, a_n)$ majorises $(b_1, \ldots, b_n)$
If the sum of the $k$ largest $a_i$ is at least the sum of the $k$ largest $b_i$ for all $k$With
Equality when $k = n$. Muirhead's inequality states that if $(a)$ majorises $(b)$ and
$x_1, \ldots, x_n > 0$Then $[a] \geq [b]$.

**Schur's Inequality.** For $r \geq 0$ and $x, y, z \geq 0$:

$$x^r(x-y)(x-z) + y^r(y-z)(y-x) + z^r(z-x)(z-y) \geq 0$$

For $r = 1$: $x^3 + y^3 + z^3 + 3xyz \geq x^2y + x^2z + y^2x + y^2z + z^2x + z^2y$.

### 4.2 Advanced Polynomial Techniques

**Resultant.** The resultant of polynomials $P$ and $Q$ is zero if and only if $P$ and $Q$ share a
Common root. For $P(x) = a\prod(x - \alpha_i)$ and $Q(x) = b\prod(x - \beta_j)$:

$$\text{Res{}(P, Q) = a^m b^n \prod_{i,j}(\alpha_i - \beta_j) = a^m \prod_i Q(\alpha_i) = b^n \prod_j P(\beta_j)$$

Where $m = \deg P$ and $n = \deg Q$.

**Technique: irreducibility.** Eisenstein's criterion: if $f(x) = a_n x^n + \cdots + a_0 \in \mathbb{'\{'}Z{'\}'}[x]$
And there exists a prime $p$ such that $p \nmid a_n$$p \mid a_i$ for $i < n$And $p^2 \nmid a_0$
Then $f$ is irreducible over $\mathbb{'\{'}Q{'\}'}$.

**Technique: roots of unity.** The $n$-th roots of unity are $\zeta_n^k = e^{2\pi i k/n}$ for $k = 0, 1, \ldots, n-1$.
The cyclotomic polynomial $\Phi_n(x) = \prod_{\substack{1 \leq k \leq n \\ \gcd(k,n)=1}}(x - \zeta_n^k)$
Is irreducible over $\mathbb{'\{'}Q{'\}'}$ and has degree $\phi(n)$.

### 4.3 Advanced Functional Equations

**Technique: injectivity and surjectivity.** Prove that the function is injective (if $f(a) = f(b)$ then
$a = b$) or surjective (every value in the codomain is achieved). These properties are often easier to
Establish first and then used to unlock further progress.

**Technique: iteration.** If the equation relates $f(f(x))$ to $f(x)$ or $x$Iterating can produce
A chain of relations: $f^n(x) = f(f^{n-1}(x))$.

**Cauchy's equation over rationals.** $f(x + y) = f(x) + f(y)$ for all rational $x, y$. Setting $x = y = 0$
Gives $f(0) = 0$. Setting $y = -x$ gives $f(-x) = -f(x)$. By induction, $f(nx) = nf(x)$ for integers
$n$. Setting $x = 1$ and $y = m/n$: $f(m/n) = m \cdot f(1/n)$ and $f(1) = n \cdot f(1/n)$So
$f(m/n) = (m/n) \cdot f(1)$.

### 4.4 Vieta Jumping

**Vieta jumping** is a technique for solving Diophantine equations of the form
$P(x, y) = 0$ where $P$ is symmetric. Given a solution $(x, y)$ with $x \geq y$One can often
Construct a new solution $(x', y)$ with $x' < x$ using Vieta's formulas, then descend to a minimal
Solution and analyse it.

**Standard setup.** Suppose $x^2 + y^2 + 1 = kxy$ for some fixed positive integer $k$ and positive
Integers $x, y$. View this as a quadratic in $x$: $x^2 - (ky)x + (y^2 + 1) = 0$. If $(x, y)$ is a
Solution, then by Vieta's formulas, the other root is $x' = ky - x$. Since $x + x' = ky$ and
$xx' = y^2 + 1$We have $x' = (y^2 + 1)/x$Which is a positive integer. If $x > y$Then
$x' = (y^2 + 1)/x < (x^2 + 1)/x = x + 1/x < x + 1$So $x' \leq x$. If $x > y$Then
$x' < x$Giving a descent.

---

## 5. Advanced Geometry

### 5.1 Inversion

**Inversion about a circle.** Given a circle $\omega$ with centre $O$ and radius $r$The inversion of a
Point $P \neq O$ is the point $P'$ on ray $OP$ such that $OP \cdot OP' = r^2$. Points on $\omega$ are
Fixed.

**Properties.**
- Inversion preserves angles (it is a conformal map).
- A line not through $O$ inverts to a circle through $O$And vice versa.
- A circle not through $O$ inverts to another circle not through $O$.
- The image of a circle through $O$ is a line not through $O$ (perpendicular to the line through
 $O$ and the centre of the original circle).

**Technique: inverting a configuration.** When a problem involves several circles passing through a
Common point, inverting about that point often simplifies the configuration by turning circles into
Lines. For problems with two tangent circles, inverting about the point of tangency turns both
Circles into parallel lines.

**Technique: preserving tangency and intersection.** If two curves are tangent at a point (other
Than $O$), their images are also tangent at the image point. If two curves intersect, their images
Also intersect.

### 5.2 Projective Geometry

**Projective transformations** preserve collinearity and cross-ratios. Any four points 
Position (no three collinear) can be mapped to any other four points position by a unique
Projective transformation.

**Cross-ratio.** For four collinear points $A, B, C, D$:

$$(A, B; C, D) = \frac{AC \cdot BD}{AD \cdot BC}$$

This is invariant under projective transformations.

**Technique: sending points to infinity.** A projective transformation can send any line to the
Line at infinity. This turns a configuration involving parallel lines or ratios into a simpler one.

**Harmonic division.** Four collinear points $A, B, C, D$ form a harmonic range if $(A,B;C,D) = -1$.
This occurs, for instance, when $C$ and $D$ are the intersections of a line with a complete quadrilateral.

### 5.3 Complex Numbers in Geometry

**Setup.** Place the circumcircle of $\triangle ABC$ on the unit circle in $\mathbb{'\{'}C{'\}'}$. Then the
Vertices correspond to complex numbers $a, b, c$ with $|a| = |b| = |c| = 1$.

**Key formulas.** With $a, b, c$ on the unit circle ($\bar{a} = 1/a$Etc.):

- **Centroid:** $g = (a + b + c)/3$
- **Orthocentre:** $h = a + b + c$
- **Circumcentre:** $o = 0$
- **Nine-point centre:** $n = (a + b + c)/2$

**Collinearity.** Points $p, q, r$ are collinear if and only if $\frac{p - q}{p - r} \in \mathbb{'\{'}R{'\}'}$.

**Perpendicularity.** Lines $PQ$ and $RS$ are perpendicular if and only if $\frac{p - q}{r - s} \in i\mathbb{'\{'}R{'\}'}$.

**Technique: the foot of the perpendicular.** The foot of the perpendicular from $P$ to line $AB$
(where $a, b$ are on the unit circle) is:

$$f = \frac{a + b + p - ab\bar{p}}{2}$$

### 5.4 Barycentric Coordinates

**Setup.** For a reference triangle $ABC$Any point $P$ has barycentric coordinates $(x : y : z)$
Where $x + y + z \neq 0$ and $P$ is the weighted average $P = \frac{xA + yB + zC}{x + y + z}$.

**Key points.**

- $A = (1:0:0)$$B = (0:1:0)$$C = (0:0:1)$
- Centroid $G = (1:1:1)$
- Incentre $I = (a:b:c)$ where $a, b, c$ are side lengths
- Circumcentre $O = (a^2(b^2 + c^2 - a^2) : b^2(c^2 + a^2 - b^2) : c^2(a^2 + b^2 - c^2))$

**Collinearity.** Three points $(x_1:y_1:z_1)$$(x_2:y_2:z_2)$$(x_3:y_3:z_3)$ are collinear if
And only if:

$$\begin{vmatrix} x_1 & y_1 & z_1 \\ x_2 & y_2 & z_2 \\ x_3 & y_3 & z_3 \end{vmatrix} = 0$$

**Concyclicity.** A point $P = (x:y:z)$ lies on the circumcircle of $ABC$ if and only if
$a^2yz + b^2zx + c^2xy = 0$.

---

## 6. Worked Questions

### Question 1 (Number Theory: IMO 1988 Problem 6)

> Let $a$ and $b$ be positive integers such that $ab + 1$ divides $a^2 + b^2$. Prove that
> $\frac{a^2 + b^2}{ab + 1}$ is a perfect square.

**Solution.** Let $k = \frac{a^2 + b^2}{ab + 1}$. We need to show $k$ is a perfect square. Note that
$k$ is a positive integer. Suppose for contradiction that $k$ is not a perfect square.

Without loss of generality, assume $a \geq b > 0$. Consider all pairs $(a, b)$ of positive integers
With $a \geq b$ such that $\frac{a^2 + b^2}{ab + 1} = k$ (the same $k$). Among all such pairs,
Choose one with $a + b$ minimal.

From $a^2 + b^2 = k(ab + 1)$View this as a quadratic in $a$: $a^2 - kba + (b^2 - k) = 0$. By
Vieta's formulas, if $a$ is one root, the other root is $a' = kb - a$ with $aa' = b^2 - k$.

Since $a \geq b > 0$ and $k \geq 1$We have $a' = kb - a$. Also, $a' = (b^2 - k)/a$.

**Claim:** $a' \geq 0$ and $(a', b)$ is also a valid pair with the same $k$.

First, if $a' < 0$ then $b^2 < k$. But then $k = (a^2 + b^2)/(ab+1) < (a^2 + k)/(ab+1)$Giving
$kab < a^2$So $kb < a$. But $a' = kb - a < 0$ is consistent with this. In this case, we have
$b^2 < k$ and $a > kb$. Since $a$ is the larger root of the quadratic, $a = (kb + \sqrt{D})/2 > kb/2$.
If $kb < a$Then $a' = kb - a < 0$.

If $a' = 0$: then $b^2 = k$So $k$ is a perfect square, contradicting our assumption.

If $a' > 0$: then $(a', b)$ is a valid pair (by Vieta, $a'^2 + b^2 = k(a'b + 1)$) with
$a' + b < a + b$ (since $a' = kb - a < a$ because $a = (kb + \sqrt{D})/2 > kb/2$ implies
$kb - a < kb - kb/2 = kb/2 < a$). This contradicts the minimality of $a + b$.

The only remaining possibility is that no valid pair exists with $k$ not a perfect square, which
Means $k$ must be a perfect square.

---

### Question 2 (Combinatorics: Mantel's Theorem)

> A graph $G$ on $n$ vertices has no cycles of length 3 (i.e., $G$ is triangle-free). Prove that $G$
> has at most $\lfloor n^2/4 \rfloor$ edges.

**Solution.** Let $d_v$ denote the degree of vertex $v$And let $m = |E|$ be the number of edges.

For any edge $uv$Since $G$ is triangle-free, no neighbour of $u$ is adjacent to $v$. Therefore
$d_u + d_v \leq n$ (the $d_u$ neighbours of $u$ and $d_v$ neighbours of $v$ are all distinct, plus
$u$ and $v$ themselves give at most $n$ vertices).

Summing over all edges:

$$\sum_{uv \in E}(d_u + d_v) \leq mn$$

The left side equals $\sum_{v \in V} d_v^2$ (each vertex $v$ contributes $d_v$ to each of its
$d_v$ incident edges).

By Cauchy-Schwarz:

$$\sum_v d_v^2 \geq \frac{\left(\sum_v d_v\right)^2}{n} = \frac{(2m)^2}{n} = \frac{4m^2}{n}$$

Combining: $4m^2/n \leq mn$So $4m \leq n^2$Giving $m \leq n^2/4$.

Since $m$ is an integer, $m \leq \lfloor n^2/4 \rfloor$.

Equality holds when all $d_v = n/2$ (from Cauchy-Schwarz equality) and $d_u + d_v = n$ for every edge.
This is achieved by the complete bipartite graph $K_{\lfloor n/2 \rfloor, \lceil n/2 \rceil}$.

---

### Question 3 (Algebra: Inequalities)

> Prove that for all positive real numbers $a, b, c$:
>
> $$\frac{a^3}{b^2 - bc + c^2} + \frac{b^3}{c^2 - ca + a^2} + \frac{c^3}{a^2 - ab + b^2} \geq a + b + c$$

**Solution.** By Titu's lemma (the Engel form of Cauchy-Schwarz):

$$\sum \frac{a^3}{b^2 - bc + c^2} = \sum \frac{a^4}{a(b^2 - bc + c^2)} \geq \frac{(a^2 + b^2 + c^2)^2}{\sum a(b^2 - bc + c^2)}$$

The denominator expands as:

$$\sum a(b^2 - bc + c^2) = \sum_{\text{sym{}} a^2 b - 3abc$$

Where $\sum_{\text{sym{}} a^2 b = a^2b + a^2c + ab^2 + ac^2 + b^2c + bc^2$.

We need to show:

$$\frac{(a^2 + b^2 + c^2)^2}{\sum_{\text{sym{}} a^2 b - 3abc} \geq a + b + c$$

I.e., $(a^2 + b^2 + c^2)^2 \geq (a + b + c)\left(\sum_{\text{sym{}} a^2 b - 3abc\right)$.

Let $S = a + b + c$$Q = ab + bc + ca$$P = abc$. Then $\sum_{\text{sym{}} a^2 b = SQ - 3P$.

The right side becomes $(a+b+c)(SQ - 6P) = S^2 Q - 6SP$.

Expanding the left side: $(a^2 + b^2 + c^2)^2 = (S^2 - 2Q)^2 = S^4 - 4S^2Q + 4Q^2$.

We need $S^4 - 4S^2 Q + 4Q^2 \geq S^2 Q - 6SP$I.e., $S^4 - 5S^2 Q + 4Q^2 + 6SP \geq 0$.

Rather than expanding in symmetric polynomials, we proceed directly. The inequality is equivalent to:

$$\sum a^4 + 2\sum a^2 b^2 \geq \sum_{\text{sym{}} a^3 b - \sum a^2 bc$$

Which simplifies to:

$$\sum a^4 + \sum a^2 bc \geq \sum_{\text{sym{}} a^3 b$$

But this is precisely Schur's inequality with $r = 1$:

$$\sum a(a-b)(a-c) = \sum a^4 + abc(a+b+c) - \sum_{\text{sym{}} a^3 b \geq 0$$

I.e., $\sum a^4 + \sum a^2 bc \geq \sum_{\text{sym{}} a^3 b$.

Equality holds when $a = b = c$.

---

### Question 4 (Geometry: Inversion)

> Two circles $\omega_1$ and $\omega_2$ intersect at $P$ and $Q$. A variable line through $P$ meets
> $\omega_1$ at $A$ and $\omega_2$ at $B$. Prove that the circumcircle of $\triangle QAB$ passes
> through a fixed point as the line varies.

**Solution.** Perform an inversion about $P$ with arbitrary radius $r$.

Under inversion, $\omega_1$ (passing through $P$) maps to a line $\ell_1$And $\omega_2$ maps to a
Line $\ell_2$. The point $Q$ maps to $Q'$Which lies on both $\ell_1$ and $\ell_2$So $\ell_1$ and
$\ell_2$ intersect at $Q'$.

The variable line through $P$ maps to itself. The points $A$ and $B$ map to $A'$ on $\ell_1$ and $B'$
On $\ell_2$With $P, A', B'$ collinear.

The circumcircle of $\triangle QAB$ passes through $P$ (since $A, B$ are on the line through $P$
And $Q$ is fixed). Under inversion, this circumcircle (passing through $P$) maps to a line. Since it
Passes through $Q$The image line passes through $Q'$. Since it passes through $A$ and $B$The image
Line passes through $A'$ and $B'$.

Therefore, the image of the circumcircle of $\triangle QAB$ is the line $A'B'Q'$. Since $A'$ and $B'$
Lie on the fixed lines $\ell_1$ and $\ell_2$ respectively, and $Q'$ is fixed, the line $A'B'Q'$ passes
Through $Q'$ and varies with $A'$ and $B'$.

The inverse of this line is the circumcircle of $\triangle QAB$. Since the line $A'B'Q'$ always passes
Through $Q'$The circumcircle of $\triangle QAB$ always passes through the inverse of $Q'$Which is
$Q$ (). This only shows it passes through $Q$ and $P$Which we already knew.

We need a different approach. Consider the circumcircle of $\triangle QAB$. It passes through $Q$ and
Intersects the line $PAB$ at $A$ and $B$. The third intersection of this circumcircle with the line
Through $P$ is determined by the condition that $Q, A, B$ are on the circle.

The circle through $Q$ and $A$ and $B$ also passes through a fixed second point (other than $Q$) by
The following argument. The power of $P$ with respect to the circumcircle of $\triangle QAB$ is
$PA \cdot PB$. This varies with the line. However, consider the circle $\omega_3$ through $P$ and $Q$
That is orthogonal to both $\omega_1$ and $\omega_2$. The key claim is that $\omega_3$ always passes
Through the circumcircle of $\triangle QAB$ at $P$ and a fixed point.

Instead, we use the following classical fact: the circumcircle of $\triangle QAB$ is the image of the
Line $A'B'$ (in our inversion) under the inverse map. The line $A'B'$ always passes through $Q'$
So the circumcircle always passes through $Q$ and $P$ and one additional fixed point.

The fixed point is the inverse of the reflection of $Q'$ across the angle bisector of $\ell_1$ and
$\ell_2$. More concretely: let $R'$ be the reflection of $Q'$ across the angle bisector of $\angle(\ell_1, \ell_2)$
At $Q'$. Then the line $A'B'$ is the polar of $R'$ with respect to the pencil of lines through $P$.
The inverse of $R'$ is a fixed point $R$ such that every circumcircle of $\triangle QAB$ passes
Through $R$.

A cleaner characterisation: the point $R$ is the Miquel point of the complete quadrilateral formed
By $\omega_1$$\omega_2$And the line $PQ$. By the Miquel theorem, the circumcircles of the four
Triangles formed by any three of these four lines/circles concur at $R$.

In particular, the circumcircle of $\triangle QAB$ (formed by $\omega_1$$\omega_2$And the line
Through $P$) always passes through the Miquel point $R$Which is fixed.

---

### Question 5 (Combinatorics: Graph Theory over $\mathbb{'\{'}F{'\}'}_2$)

> A social network has $n$ users (where $n$ is odd). Some pairs of users are friends (symmetric).
> Prove that there exists a non-empty set $S$ of users such that every user in the network has an
> even number of friends in $S$.

**Solution.** We work over the field $\mathbb{'\{'}F{'\}'}_2$. Label the users $1, 2, \ldots, n$. For each
User $i$Let $\mathbf{'\{'}v{'\}'}_i \in \mathbb{'\{'}F{'\}'}_2^n$ be the vector whose $j$-th coordinate is $1$ if
Users $i$ and $j$ are friends, and $0$ otherwise (with $v_{ii} = 0$).

A set $S$ corresponds to a vector $\mathbf{'\{'}s{'\}'} \in \mathbb{'\{'}F{'\}'}_2^n$ where $s_j = 1$ iff $j \in S$.
The number of friends user $i$ has in $S$ (mod 2) is $\mathbf{'\{'}v{'\}'}_i \cdot \mathbf{'\{'}s{'\}'}$.

We need $\mathbf{'\{'}v{'\}'}_i \cdot \mathbf{'\{'}s{'\}'} = 0$ for all $i$. Let $A$ be the $n \times n$ adjacency
Matrix (the $i$-th row is $\mathbf{'\{'}v{'\}'}_i$). The system is $A\mathbf{'\{'}s{'\}'} = \mathbf{'\{'}0{'\}'}$.

$A$ is symmetric with zero diagonal. The quadratic form $q(\mathbf{'\{'}x{'\}'}) = \mathbf{'\{'}x{'\}'}^T A \mathbf{'\{'}x{'\}'}$
Satisfies:

$$q(\mathbf{'\{'}x{'\}'}) = \sum_{i,j} A_{ij} x_i x_j = 2\sum_{i < j} A_{ij} x_i x_j + \sum_i A_{ii} x_i^2 = 0$$

Since $2 = 0$ in $\mathbb{'\{'}F{'\}'}_2$ and $A_{ii} = 0$. So $q(\mathbf{'\{'}x{'\}'}) = 0$ for all $\mathbf{'\{'}x{'\}'}$.

For a non-singular symmetric matrix over $\mathbb{'\{'}F{'\}'}_2$ of odd dimension $n$The associated
Quadratic form cannot be identically zero (a non-degenerate quadratic form in odd dimension over
$\mathbb{'\{'}F{'\}'}_2$ must take non-zero values). Therefore $A$ is singular, meaning $\det(A) = 0$ in
$\mathbb{'\{'}F{'\}'}_2$.

The system $A\mathbf{'\{'}s{'\}'} = \mathbf{'\{'}0{'\}'}$ therefore has a non-trivial solution, corresponding to a
Non-empty set $S$ with the desired property.

---

### Question 6 (Geometry: Complex Numbers)

> Let $ABC$ be a triangle with circumcircle $\Gamma$. A point $P$ lies in the interior of
> $\triangle ABC$. The lines $AP$$BP$$CP$ meet $\Gamma$ again at $D$$E$$F$ respectively.
> Prove that $\frac{PD}{AD} + \frac{PE}{BE} + \frac{PF}{CF} = 1$.

**Solution.** We use barycentric coordinates with respect to $\triangle ABC$. Let $P$ have
Barycentric coordinates $(\alpha : \beta : \gamma)$ with $\alpha, \beta, \gamma > 0$ and
$\alpha + \beta + \gamma = 1$.

**Lemma.** $\frac{PD}{AD} = \frac{[PBC]}{[ABC]}$Where $[X]$ denotes the area of $X$.

**Proof.** Triangles $PBD$ and $ABD$ share the altitude from $B$ to $AD$So $\frac{[PBD]}{[ABD]} = \frac{PD}{AD}$.
Similarly, $\frac{[PCD]}{[ACD]} = \frac{PD}{AD}$. Therefore:

$$\frac{PD}{AD} = \frac{[PBD]}{[ABD]} = \frac{[PCD]}{[ACD]} = \frac{[PBD] + [PCD]}{[ABD] + [ACD]} = \frac{[PBC]}{[ABC]}$$

Similarly, $\frac{PE}{BE} = \frac{[PCA]}{[ABC]}$ and $\frac{PF}{CF} = \frac{[PAB]}{[ABC]}$.

Therefore:

$$\frac{PD}{AD} + \frac{PE}{BE} + \frac{PF}{CF} = \frac{[PBC] + [PCA] + [PAB]}{[ABC]} = \frac{[ABC]}{[ABC]} = 1$$

The last equality holds because $P$ lies in the interior of $\triangle ABC$So the three triangles
$PBC$$PCA$$PAB$ partition $\triangle ABC$ without overlap.

---

## 7. Common Pitfalls

**Insufficient rigour in number theory.** Modular arithmetic arguments must specify the modulus at
Every step. When applying LTE, verify all hypotheses (e.g., $p \nmid ab$$p$ odd or the $p = 2$
Variant). When using quadratic reciprocity, handle $p = 2$ separately.

**Ignoring degenerate cases.** In geometry problems, degenerate configurations (collinear points,
Coincident points, right angles) often require separate treatment. A solution that assumes a
"generic" configuration may miss critical cases.

**Incorrect inequality application.** AM-GM requires non-negativity. Cauchy-Schwarz requires the
Right pairing of sequences. Muirhead requires the exponent vectors to be sorted and the majorisation
Condition to hold. Holder requires the correct exponents summing to 1. Always verify hypotheses.

**Incomplete functional equation analysis.** After finding candidate functions, verify each satisfies
The original equation. Prove uniqueness by showing the function is determined by its values on a
Dense set (e.g., the rationals). Do not assume continuity without justification.

**Flawed induction.** The base case must be verified. The inductive step must use the correct
Hypothesis. Strengthening the inductive hypothesis is a common technique, but the strengthened
Statement must actually be provable.

**Graph theory terminology errors.** Distinguish between walks, trails, paths, and cycles. A tree
Has exactly $n - 1$ edges on $n$ vertices; a forest has at most $n - 1$ edges. Planarity and
Non-planarity are distinct from bipartiteness.

**Computational errors in long algebraic manipulations.** IMO problems often require sustained
Computation. A single sign error can invalidate an entire proof. Verify with specific numerical
Examples.

**Confusing necessary and sufficient conditions in geometry.** Showing that a point lies on a
Circle because it satisfies one angle condition does not suffice; you must verify the full set
Of conditions for concyclicity.

---

## 8. Strategy and Exam Technique

### 8.1 Problem Selection

With 3 problems per day and 4.5 hours, you have 90 minutes per problem. Read all three problems
Carefully in the first 15 minutes. Start with the problem where you have the clearest idea of a
Complete solution path.

Do not fixate on one problem. If you have made no progress after 30 minutes, move to another
Problem and return later. A partial solution (3--4 marks) on two problems is worth more than a
Full solution (7 marks) on one, given the difficulty of achieving full marks.

### 8.2 The Structure of an IMO Proof

A complete IMO solution has the following structure:

1. **Setup.** Define notation and restate the problem in your own terms.
2. **Key observation.** State the central idea of the proof.
3. **Logical chain.** Each claim must follow from previous claims, given information, or
 well-known results. Label lemmas and claims.
4. **Case analysis.** If cases are needed, enumerate them explicitly and handle each.
5. **Conclusion.** State the final result and verify edge cases.

### 8.3 Presentation Standards

- Write legibly. Markers must be able to read your solution.
- State theorems by name when using them (e.g., "By the Cauchy-Schwarz inequality, ...").
- Box or underline the final answer.
- If a diagram is helpful, draw it large and label all points.
- Number equations and refer to them by number when needed.

### 8.4 Time Management Strategy

| Time | Activity |
| ---- | -------- |
| 0--15 min | Read all problems, identify the most accessible |
| 15--105 min | Work on Problem 1 (most accessible) |
| 105--120 min | Re-read Problems 2 and 3, plan approaches |
| 120--210 min | Work on Problem 2 |
| 210--240 min | Return to Problem 3 or polish Problems 1 and 2 |
| 240--270 min | Final review of all solutions |

### 8.5 Advanced Preparation

1. **Solve past IMO problems chronologically.** Start from the 1990s and work forward. Early
 problems are more accessible and build foundational techniques.
2. **Study the IMO Compendium.** This resource contains all IMO problems with official solutions.
 Analyse the solution structure, not just the mathematical content.
3. **Read "104 Number Theory Problems" by Andreescu, Andrica, and Zuming for number theory
 depth.**
4. **Read "Problems from the Book" by Andreescu and Dospinescu for advanced techniques.**
5. **Participate in mock IMO conditions.** Practice full papers under timed conditions at least
 once per week in the three months before the competition.
6. **Build a personal theorem bank.** Maintain a list of lemmas and techniques you have used,
 organised by topic. Review this list regularly.
7. **Collaborate with peers.** Discuss problems with other serious competitors. Explaining a
 solution to someone else reveals gaps in understanding.

## Worked Examples

<!-- TODO: Add worked examples for this topic -->
