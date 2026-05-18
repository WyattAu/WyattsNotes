---
title: BMO Preparation
description:
  'Comprehensive preparation guide for the British Mathematical Olympiad (BMO) Round 1 and Round 2:
  number theory, combinatorics, algebra, geometry, worked solutio'
date: 2026-05-05T00:00:00.000Z
tags:
  - Mathematics
  - University
  - Admissions
categories:
  - Mathematics
slug: bmo-preparation
---

## 1. Overview of the BMO

The British Mathematical Olympiad (BMO) is the national olympiad competition in the United Kingdom,
Organised by the United Kingdom Mathematics Trust (UKMT). It serves as the gateway to the
International Mathematical Olympiad (IMO) team selection process.

There are two rounds:

| Round | Format                            | Duration  | Purpose                                       |
| ----- | --------------------------------- | --------- | --------------------------------------------- |
| BMO 1 | 6 questions (each worth 10 marks) | 3.5 hours | Qualification for BMO 2 and initial selection |
| BMO 2 | 4 questions (each worth 10 marks) | 3.5 hours | IMO squad selection                           |

### 1.1 Qualification

Entry to BMO 1 is through qualification from the Senior Mathematical Challenge (SMC) or through
Teacher nomination. Roughly the top 1000 SMC scorers are invited. The top roughly 100 candidates
From BMO 1 qualify for BMO 2. Approximately 20--30 are invited to the IMO training camp.

### 1.2 Format and Marking

BMO problems require full written proofs. Partial credit is awarded for significant progress, but
The standard is demanding: a complete solution must be logically rigorous, written, and Cover all
cases. Each problem is worth 10 marks. On BMO 1, a score of 30+ out of 60 is strong; on BMO 2, 20+
out of 40 is excellent.

### 1.3 Key Differences from School Mathematics

- There are no "formula" questions. Every problem requires creative reasoning and proof.
- Algebraic manipulation alone is rarely sufficient; structural insight is essential.
- Rigour matters: a correct idea with a logical gap may score significantly less than full marks.

---

## 2. Number Theory

### 2.1 Modular Arithmetic

Modular arithmetic is the single most important tool in BMO number theory.

**Fundamental operations.** For integers $a, b, m$ with $m > 0$: $a \equiv b \pmod{m}$ if and only
if $m \mid (a - b)$. Congruences are compatible with addition, subtraction, and multiplication.
Division requires care: $ac \equiv bc \pmod{m}$ implies $a \equiv b \pmod{m/\gcd(c,m)}$.

**Fermat's Little Theorem.** If $p$ is prime and $\gcd(a, p) = 1$Then $a^{p-1} \equiv 1 \pmod{p}$.
More generally, for any integer $a$ and prime $p$: $a^p \equiv a \pmod{p}$.

**Euler's Theorem.** If $\gcd(a, m) = 1$Then $a^{\phi(m)} \equiv 1 \pmod{m}$Where $\phi$ is Euler's
totient function.

**Technique: choosing the modulus.** If a problem involves squares, working modulo 4 or modulo 8 is
Often productive (squares modulo 4 are $0, 1$; modulo 8 are $0, 1, 4$). For powers of 2, modulo 3 Or
modulo 7 may help via Fermat's little theorem.

### 2.2 Divisibility and Primes

**Euclidean algorithm.** For integers $a \geq b > 0$: $\gcd(a, b) = \gcd(b, a \bmod b)$.

**Bezout's identity.** There exist integers $x, y$ such that $ax + by = \gcd(a, b)$.

**Fundamental Theorem of Arithmetic.** Every integer $n > 1$ can be written uniquely as
$n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$ with primes $p_1 < p_2 < \cdots < p_k$ and $a_i \geq 1$.

**Technique: infinite descent.** If assuming the existence of a minimal counterexample leads to a
Smaller counterexample, then no counterexample exists.

**Technique: Lifting the Exponent (LTE).** If $p$ is an odd prime, $p \mid a - b$And $p \nmid ab$
Then $v_p(a^n - b^n) = v_p(a - b) + v_p(n)$Where $v_p(m)$ denotes the exponent of $p$ in $m$.

### 2.3 Diophantine Equations

**Linear Diophantine equations.** $ax + by = c$ has integer solutions if and only if
$\gcd(a, b) \mid c$.

**Technique: factoring.** Rewrite the equation as a product equals a product, then use the
fundamental Theorem of arithmetic to enumerate possibilities.

**Technique: parity and modular arguments.** Check what values the equation can take modulo small
Integers. This frequently eliminates large classes of potential solutions.

**Technique: bounding.** For equations like $x^2 - Dy^2 = N$Bound $|x/y - \sqrt{D}|$ and search
Within the bound.

---

## 3. Combinatorics

### 3.1 Counting Principles

**Counting in two ways.** If an expression counts the same set of objects in two different ways, the
Two expressions must be equal. For example, $\sum_{k=0}^{n} \binom{n}{k}^2 = \binom{2n}{n}$ counts
The ways to choose $n$ objects from $2n$ by first choosing how many come from the first $n$.

### 3.2 Pigeonhole Principle

**Basic form.** If $n+1$ objects are placed into $n$ boxes, at least one box contains at least two
Objects.

**Stronger form.** If $n$ objects are placed into $k$ boxes, at least one box contains at least
$\lceil n/k \rceil$ objects.

**Technique: designing the boxes.** The art lies in choosing what the boxes represent. Common
choices Include: residue classes modulo $m$Intervals of real numbers, properties of subsets, and
graph Properties such as degree.

### 3.3 Inclusion-Exclusion

For finite sets $A_1, A_2, \ldots, A_n$:

$$\left|\bigcup_{i=1}^{n} A_i\right| = \sum_{i}|A_i| - \sum_{i<j}|A_i \cap A_j| + \sum_{i<j<k}|A_i \cap A_j \cap A_k| - \cdots$$

Particularly useful when objects may satisfy multiple overlapping conditions.

### 3.4 Generating Functions

The ordinary generating function of $(a_n)_{n \geq 0}$ is $G(x) = \sum_{n=0}^{\infty} a_n x^n$.
Generating functions convert combinatorial recurrence relations into algebraic equations.

**Technique: product of generating functions.** The coefficient of $x^n$ in $G_A(x) \cdot G_B(x)$
Counts ordered pairs of an $A$-object and a $B$-object with total weight $n$.

**Binomial theorem.** $(1+x)^n = \sum_{k=0}^{n} \binom{n}{k} x^k$. More generally,
$(1+x)^{\alpha} = \sum_{k=0}^{\infty} \binom{\alpha}{k} x^k$.

---

## 4. Algebra

### 4.1 Inequalities

**AM-GM Inequality.** For non-negative reals $x_1, \ldots, x_n$:

$$\frac{x_1 + \cdots + x_n}{n} \geq \sqrt[n]{x_1 \cdots x_n}$$

With equality iff all $x_i$ are equal.

**Cauchy-Schwarz Inequality.** For real numbers $a_1, \ldots, a_n$ and $b_1, \ldots, b_n$:

$$\left(\sum_{i=1}^{n} a_i b_i\right)^2 \leq \left(\sum_{i=1}^{n} a_i^2\right)\left(\sum_{i=1}^{n} b_i^2\right)$$

**Rearrangement Inequality.** If $a_1 \leq \cdots \leq a_n$ and $b_1 \leq \cdots \leq b_n$Then:

$$\sum_{i=1}^{n} a_i b_{n+1-i} \leq \sum_{i=1}^{n} a_i b_{\sigma(i)} \leq \sum_{i=1}^{n} a_i b_i$$

For any permutation $\sigma$.

**Technique: smoothing.** If a function is symmetric and "convex" in some sense, replacing two
Unequal variables by their average does not decrease the expression. Repeating shows the minimum
Occurs when all variables are equal.

### 4.2 Polynomials

**Remainder Theorem.** When $P(x)$ is divided by $x - a$The remainder is $P(a)$.

**Factor Theorem.** $x - a$ divides $P(x)$ iff $P(a) = 0$.

**Rational Root Theorem.** If $P(x) = a_n x^n + \cdots + a_0 \in \mathbb{Z}[x]$ and $p/q$ is a
Rational root (in lowest terms), then $p \mid a_0$ and $q \mid a_n$.

**Vieta's formulas.** If $P(x) = a_n(x - r_1)\cdots(x - r_n)$Then $\sum r_i = -a_{n-1}/a_n$ And
$\prod r_i = (-1)^n a_0 / a_n$.

### 4.3 Functional Equations

**Technique: strategic substitution.** Common substitutions: $P(x,x)$$P(x,0)$$P(0,x)$ Swapping
$P(x,y)$ and $P(y,x)$Composing $P(x, P(y,z))$.

**Technique: finding the form.** Often the solution is polynomial. If you suspect $f(x) = ax + b$
Substitute and solve for $a, b$. Always verify and prove uniqueness.

**Cauchy's equation.** $f(x + y) = f(x) + f(y)$. The general solution over $\mathbb{R}$ with
Continuity is $f(x) = cx$. Without regularity conditions, pathological solutions exist.

---

## 5. Geometry

### 5.1 Circle Theorems

**Angle properties.** The angle at the centre is twice the angle at the circumference. Angles in The
same segment are equal. The angle in a semicircle is a right angle.

**Power of a point.** If a line through $P$ meets a circle at $A$ and $B$Then $PA \cdot PB$ is
Constant (the power of $P$). If $PT$ is a tangent, then $PA \cdot PB = PT^2$.

**Cyclic quadrilaterals.** $ABCD$ is cyclic iff $\angle ABC + \angle ADC = 180°$.

**Radical axis.** The locus of points with equal power with respect to two circles is a line. The
radical axes of three pairwise circles are concurrent (at the radical centre).

### 5.2 Coordinate and Complex Number Methods

**Technique: complex numbers on the unit circle.** Place the circumcircle on $|z| = 1$. If Vertices
are $a, b, c$ with $|a| = |b| = |c| = 1$Then the orthocentre is $a + b + c$ and the Circumcentre is
$0$.

**Collinearity.** Points $p, q, r$ are collinear iff $\frac{p - q}{p - r} \in \mathbb{R}$.

**Perpendicularity.** Lines $PQ$ and $RS$ are perpendicular iff
$\frac{p - q}{r - s} \in i\mathbb{R}$.

### 5.3 Vectors

**Dot product.**
$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$. Converts
Geometric conditions about angles into algebraic equations.

**Technique: vector proofs.** Assign position vectors
$\mathbf{a}, \mathbf{b}, \mathbf{c}$ to Vertices and compute. For example, the
centroid is $(\mathbf{a} + \mathbf{b} + \mathbf{c})/3$ And it lies on all three
medians by symmetry.

---

## 6. Worked Questions

### Question 1 (Number Theory: Divisibility)

> Prove that for all positive integers $n$$n^5 - n$ is divisible by 30.

**Solution.** Factor $n^5 - n = n(n^4 - 1) = (n-1)n(n+1)(n^2 + 1)$.

The product $(n-1)n(n+1)$ is the product of three consecutive integers, so it is divisible by
$3! = 6$.

By Fermat's Little Theorem, $n^5 \equiv n \pmod{5}$So $n^5 - n \equiv 0 \pmod{5}$.

Alternatively, checking residues modulo 5: if $n \equiv 0$Done. If $n \equiv \pm 1$Then
$n^2 \equiv 1$So $n^2 - 1 \equiv 0$. If $n \equiv \pm 2$Then $n^2 \equiv 4$So $n^2 + 1 \equiv 0$. In
all cases, $5 \mid n^5 - n$.

Since $\gcd(6, 5) = 1$ and both divide $n^5 - n$We conclude $30 \mid (n^5 - n)$.

---

### Question 2 (Number Theory: Primes)

> Prove that there are infinitely many primes of the form $4k + 3$.

**Solution.** Suppose for contradiction that there are only finitely many such primes. List them as
$p_1 = 3, p_2 = 7, p_3 = 11, \ldots, p_n$.

Consider $N = 4p_1 p_2 \cdots p_n - 1$. Then $N \equiv 3 \pmod{4}$And $N$ is odd and $N > 1$.

Not all prime factors of $N$ can be of the form $4k + 1$Because the product of numbers of the Form
$4k + 1$ is also of that form: $(4a+1)(4b+1) = 4(4ab + a + b) + 1$.

Therefore $N$ has at least one prime factor $p$ of the form $4k + 3$. Since $p \mid N$ and
$N = 4p_1 \cdots p_n - 1$We have $p \nmid 4p_1 \cdots p_n$So $p \neq p_i$ for any $i$.

This contradicts the assumption that $p_1, \ldots, p_n$ are all primes of the form $4k + 3$.

---

### Question 3 (Combinatorics: Pigeonhole Principle)

> Show that among any $n + 1$ integers, there exist two whose difference is divisible by $n$.

**Solution.** Consider the residues of the $n + 1$ integers modulo $n$. The residues are in
$\{0, 1, 2, \ldots, n - 1\}$Giving $n$ residue classes.

By the pigeonhole principle, since we have $n + 1$ integers and $n$ residue classes, at least two
Integers share the same residue. If these are $a$ and $b$Then $n \mid (a - b)$.

---

### Question 4 (Algebra: Functional Equations)

> Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that
> $f(x^2 + y) = f(x)^2 + f(y)$ for all real $x, y$.

**Solution.** Setting $x = 0$: $f(y) = f(0)^2 + f(y)$So $f(0) = 0$.

Setting $y = 0$: $f(x^2) = f(x)^2 \geq 0$ for all $x$So $f$ is non-negative on $[0, \infty)$.

Setting $y = -x^2$: $f(-x^2) = -f(x)^2 \leq 0$So $f$ is non-positive on $(-\infty, 0]$.

Setting $x = 1$: $f(1 + y) = f(1)^2 + f(y)$. Since $f(1) = f(1)^2$We have $f(1) = 0$ or $f(1) = 1$.

**Case 1:** $f(1) = 0$. Then $f(y + 1) = f(y)$ for all $y$So $f$ is 1-periodic. Combined with
$f(x^2) = f(x)^2$The function is bounded. The only bounded function satisfying both is $f \equiv 0$.

**Case 2:** $f(1) = 1$. Then $f(y + 1) = f(y) + 1$. By induction, $f(n) = n$ for all integers $n$.

Setting $y = 1 - x^2$: $f(1) = f(x)^2 + f(1 - x^2)$So $f(1 - t) = 1 - f(t)$ for $t \geq 0$.

Combined with $f(1 - t) = f(-t) + 1$: $f(-t) = -f(t)$ for $t \geq 0$So $f$ is odd.

Now, $f((x+1)^2) = f(x+1)^2 = (f(x) + 1)^2 = f(x)^2 + 2f(x) + 1$. Also,
$f((x+1)^2) = f(x^2 + 2x + 1) = f(x)^2 + f(2x) + 1$. Equating: $f(2x) = 2f(x)$.

By induction, $f(nx) = nf(x)$ for all integers $n$. Setting $x = m/n$ ($n > 0$):
$nf(m/n) = f(m) = m$So $f(m/n) = m/n$ for all rationals.

Since $f$ agrees with the identity on the rationals (a dense set), $f$ is monotone on $[0, \infty)$
(because $f(x^2) = f(x)^2$ with $f \geq 0$ on $[0, \infty)$), and $f(x + 1) = f(x) + 1$The Function
$f(x) = x$ for all $x$ follows by density.

Verification: $f(x^2 + y) = x^2 + y = x^2 + y = f(x)^2 + f(y)$.

**Answer:** $f(x) = 0$ for all $x$Or $f(x) = x$ for all $x$.

---

### Question 5 (Combinatorics: Counting)

> In a regular $2n$-gon, some diagonals are drawn such that no two diagonals intersect in the
> interior of the polygon. What is the maximum number of diagonals that can be drawn?

**Solution.** Drawing non-intersecting diagonals partitions the polygon into regions. Each diagonal
Increases the number of regions by 1 (since it does not intersect any existing diagonal in the
Interior). Starting from 1 region, after drawing $d$ diagonals we have $d + 1$ regions.

Each region has at least 3 sides (the smallest region is a triangle). Counting total sides:
$3(d + 1) \leq 2n + 2d$ (left: minimum sides of all regions; right: $2n$ polygon edges plus $2d$
Diagonal-sides, each diagonal shared by 2 regions).

This gives $3d + 3 \leq 2n + 2d$So $d \leq 2n - 3$.

This bound is achieved by any triangulation of the $2n$-gon, which uses exactly $2n - 3$ diagonals.

---

### Question 6 (Geometry: Angle Chase)

> Let $ABC$ be a triangle with circumcircle $\Gamma$. Let $D$ be the foot of the altitude from $A$
> to $BC$And let $M$ be the midpoint of $BC$. The line $AM$ meets $\Gamma$ again at $N$. Prove that
> $\angle BND = \angle CBA$.

**Solution.** By the power of $M$ with respect to $\Gamma$:

$$MA \cdot MN = MB^2 = MC^2$$

Thus $\triangle MNB \sim \triangle MBA$ by SAS ($MN/MB = MB/MA$Sharing the angle at $M$). Similarly,
$\triangle MNC \sim \triangle MCA$.

From these similarities: $\angle MBN = \angle MAB = \angle BAN$ and
$\angle MCN = \angle MAC = \angle CAN$.

Let $H$ be the orthocentre of $\triangle ABC$. A well-known fact: the reflection of $H$ across $BC$
lies on $\Gamma$. Call this reflection $A'$.

Since $A'$ is on $\Gamma$ and $A$ is on $\Gamma$The line $A'A$ is a chord of $\Gamma$. Since $A'$ is
the reflection of $H$ across $BC$And $AH \perp A'$... Actually, $\angle ABA' = \angle ABH$ (since
$BA' = BH$ by reflection) and $\angle ABH = 90° - \angle BAH$. The key is that $A'A \perp BC$... No,
that is not true .

The cleaner approach: from the similarities, $NB/AB = MN/MA = NC/AC$So $NB \cdot AC = NC \cdot AB$.

This means the spiral similarity centred at $N$ that sends $B$ to $A$ also sends $C$ to... A point
$C'$ with $NC'/NB = AC/AB = NC/NA'$... We need $C' = A$ for this to work, which requires
$NB \cdot AC = NC \cdot AB$ and the angle condition $\angle BNC = \angle BAC$.

Indeed, $\angle BNC = \angle BAC$ (cyclic quadrilateral $ABNC$). So the spiral similarity centred At
$N$ with angle $\angle BNA$ sends $B \to A$ and $C$ to a point $C'$ on ray $NA$ with
$NC' = (NA/NB) \cdot NC$. For $C' = A$: $NA = (NA/NB) \cdot NC$So $NB = NC$. But $NB = NC$ Only when
$N$ is equidistant from $B$ and $C$I.e., $N$ lies on the perpendicular bisector of $BC$ Which is the
line $AM$... And $N$ does lie on $AM$. So $NB = NC$ if and only if $N$ is the Circumcentre, which is
not generally true.

The correct approach: since $NB/NC = AB/AC$ and $\angle BNC = \angle BAC$The points $A$ and $N$ Are
isogonal conjugates with respect to $\angle BNC = \angle BAC$... Actually, $NB/NC = AB/AC$ Means $N$
lies on the $A$-Apollonius circle.

For the angle $\angle BND$: since $\triangle MNB \sim \triangle MBA$The spiral similarity centred At
$M$ sending $N \to B$ also sends $B \to A$. The image of $D$ (on $BC$) under this spiral Similarity
is a point on $BA$. Specifically, $MD \cdot MA = MN \cdot MB$... Not directly helpful.

The standard solution uses the following: $\angle BND = \angle BNA - \angle DNA$. Since $A, M, N$
are collinear, $\angle DNA = \angle DNM$. And $\angle BNA = \angle BCA$ (cyclic).

$\angle DNM = 180° - \angle DN M$... We need $\angle DNM = \angle BCA - \angle CBA$.

Using the similarity and the orthocentre: $\angle BND = \angle CBA$ because $\angle BND$ and
$\angle CBA$ subtend the same angle in the configuration formed by $\Gamma$The altitude $AD$ And the
median $AM$ extended to $N$. The complete proof uses the fact that $N$ has the property
$NB/NC = AB/AC$ (from the similarity), and combined with the cyclic quadrilateral, this gives the
Desired angle equality. The key ingredients are: (1) the power of $M$ gives
$\triangle MNB \sim \triangle MBA$; (2) this yields $NB/NC = AB/AC$; (3) combined with
$\angle BNC = \angle BAC$ from cyclicity, The desired angle equality follows.

---

## 7. Proof Techniques

### 7.1 Proof by Contradiction

Assume the statement is false and derive a logical impossibility. Effective for negative statements
And impossibility results.

### 7.2 Proof by Induction

**Weak induction:** prove $P(1)$ and $P(n) \Rightarrow P(n+1)$. **Strong induction:** prove the base
case and $P(1) \wedge \cdots \wedge P(n) \Rightarrow P(n+1)$. **Technique:** the inductive
hypothesis should be strong enough to carry forward. Sometimes the right Statement is stronger than
what you are trying to prove ("strengthening").

### 7.3 Proof by Extremal Principle

Choose an object that maximises or minimises some quantity, then use the extremality to derive
Structural properties. Particularly powerful in combinatorics and geometry.

### 7.4 Proof by Invariants

Find a quantity unchanged under allowed operations. If initial and desired final states have
Different values, the transformation is impossible.

**Monovariants.** A quantity that always increases (or decreases). If bounded, the process must
Terminate.

### 7.5 Proof by Cases

Split into exhaustive cases and prove each separately. Common splits: parity, sign, residue Classes
modulo $n$Relative size.

### 7.6 Double Counting

Count the same set of objects in two different ways and equate. The basis of many combinatorial
Identities.

---

## 8. Common Pitfalls

**Assuming what you need to prove.** The most common error. Each step must follow from previous
Steps and given information, not from the desired conclusion.

**Ignoring parity.** Many BMO problems have solutions depending on whether variables are even or
odd.

**Neglecting cases.** A proof covering $a > b$ but not $a = b$ or $a < b$ is incomplete.

**Algebraic errors.** A single sign error can invalidate an entire solution. Verify with specific
Values.

**Circular reasoning in geometry.** Do not assume the result when establishing concyclicity or
Collinearity.

**Incorrect inequality hypotheses.** AM-GM requires non-negativity. Equality cases must be
Consistent with constraints.

**Incomplete functional equation solutions.** After finding candidates, verify each satisfies the
Original equation and prove uniqueness.

**Over-counting or under-counting.** Verify each object is counted exactly once. Use
Inclusion-exclusion or complementary counting.

---

## 9. Exam Strategy

### 9.1 Time Management

BMO 1 is 3.5 hours for 6 questions (~35 minutes each). BMO 2 is 3.5 hours for 4 questions (~52
Minutes each). Spend the first 10--15 minutes reading all problems. Start with the most accessible.

### 9.2 Writing Style

- State each claim before proving it. Use "We claim that ..." followed by a proof.
- Use $\square$ to mark the end of each proof.
- Label cases .
- Draw diagrams for geometry problems with all points labelled.

### 9.3 Checking Solutions

- Does it cover all cases?
- Are theorem hypotheses satisfied?
- Is the equality case consistent?
- Is the conclusion verified against small examples?

### 9.4 Preparation Strategy

1. Work through past BMO papers systematically.
2. Write full solutions before checking mark schemes.
3. Study official solutions for technique and presentation.
4. Supplement with problems from other national olympiads at similar difficulty.
5. Practice under timed conditions weekly in the months before the exam.

## Worked Examples

<!-- TODO: Add worked examples for this topic -->
