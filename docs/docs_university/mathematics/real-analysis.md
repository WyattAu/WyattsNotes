---
title: Real Analysis
description:
  "University-level notes on Real Analysis: 1. The Real Number System; 1.1 Field Axioms; 1.2 Order and the Completeness Axiom; 1.3 Supremum and Infimum."
date: 2026-04-23T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: real-analysis
---

## 1. The Real Number System

### 1.1 Field Axioms

The real numbers $\mathbb{R}$ form a **complete ordered field**. The field axioms guarantee closure
under addition, subtraction, multiplication, and division (by non-zero elements), together with the
usual commutative, associative, and distributive laws.

### 1.2 Order and the Completeness Axiom

The order relation $\leq$ on $\mathbb{R}$ satisfies:

1. **Reflexivity**: $a \leq a$
2. **Antisymmetry**: $a \leq b$ and $b \leq a$ implies $a = b$
3. **Transitivity**: $a \leq b$ and $b \leq c$ implies $a \leq c$
4. **Totality**: for all $a, b$, either $a \leq b$ or $b \leq a$
5. **Compatibility with addition**: $a \leq b$ implies $a + c \leq b + c$
6. **Compatibility with multiplication**: $a \leq b$ and $0 \leq c$ implies $ac \leq bc$

The **completeness axiom** (also called the **least upper bound property**) is what distinguishes
$\mathbb{R}$ from $\mathbb{Q}$:

**Axiom (Completeness).** Every non-empty subset of $\mathbb{R}$ that is bounded above has a **least
upper bound** (supremum) in $\mathbb{R}$.

### 1.3 Supremum and Infimum

Let $S \subseteq \mathbb{R}$ be a non-empty set that is bounded above.

**Definition.** The **supremum** (or least upper bound) of $S$, denoted $\sup(S)$, is the real number
$u$ satisfying:

1. $u$ is an upper bound: $s \leq u$ for all $s \in S$.
2. $u$ is the least upper bound: if $v$ is any upper bound of $S$, then $u \leq v$.

Similarly, the **infimum** (or greatest lower bound), $\inf(S)$, is the greatest number $l$ such that
$l \leq s$ for all $s \in S$.

**Proposition 1.1.** $\sup(S)$ exists if and only if $S$ is non-empty and bounded above.

**Proposition 1.2 (Approximation Property).** If $u = \sup(S)$, then for every $\varepsilon > 0$, there
exists $s \in S$ such that $u - \varepsilon \lt{} s \leq u$.

*Proof.* If no such $s$ existed, then $u - \varepsilon$ would be an upper bound of $S$ strictly less
than $u$, contradicting the definition of $\sup(S)$. $\blacksquare$

**Example.** Let $S = \{x \in \mathbb{R} : x^2 \lt{} 2\}$. Then $\sup(S) = \sqrt{2}$. Note that $\sqrt{2}
\notin \mathbb{Q}$, so $\mathbb{Q}$ does not satisfy the completeness axiom.

### 1.4 Archimedean Property

**Theorem 1.1 (Archimedean Property).** For every $x \in \mathbb{R}$, there exists $n \in \mathbb{N}$
such that $n \gt x$.

*Proof.* Suppose, for contradiction, that $\mathbb{N}$ is bounded above. By the completeness axiom,
$s = \sup(\mathbb{N})$ exists in $\mathbb{R}$. Then $s - 1$ is not an upper bound for $\mathbb{N}$,
so there exists $n \in \mathbb{N}$ with $n \gt s - 1$, i.e., $n + 1 \gt s$. But $n + 1 \in \mathbb{N}$,
contradicting that $s$ is an upper bound. $\blacksquare$

**Corollary 1.2.** For every $\varepsilon > 0$, there exists $n \in \mathbb{N}$ such that $1/n \lt{} \varepsilon$.

*Proof.* By the Archimedean property, choose $n \in \mathbb{N}$ with $n \gt 1/\varepsilon$. Then
$1/n \lt{} \varepsilon$. $\blacksquare$

**Corollary 1.3 (Density of $\mathbb{Q}$).** Between any two distinct real numbers $a \lt{} b$, there
exists a rational number $q \in \mathbb{Q}$ with $a \lt{} q \lt{} b$.

*Proof.* Since $b - a > 0$, by Corollary 1.2 there exists $n \in \mathbb{N}$ with $1/n \lt{} b - a$,
so $1 \lt{} n(b - a) = nb - na$. Let $m = \lfloor na \rfloor + 1 \in \mathbb{Z}$. Then $m - 1 \leq na \lt{} m$,
giving $m \leq na + 1 \lt{} na + n(b - a) = nb$. Hence $a \lt{} m/n \lt{} b$, and $m/n \in \mathbb{Q}$.
$\blacksquare$

### 1.5 Properties of Supremum and Infimum

**Proposition 1.4.** If $A$ and $B$ are non-empty bounded subsets of $\mathbb{R}$, then
$\sup(A + B) = \sup(A) + \sup(B)$, where $A + B = \{a + b : a \in A, b \in B\}$.

*Proof.* For all $a \in A$ and $b \in B$: $a \leq \sup(A)$ and $b \leq \sup(B)$, so $a + b \leq \sup(A) + \sup(B)$.
Thus $\sup(A) + \sup(B)$ is an upper bound for $A + B$, so $\sup(A + B) \leq \sup(A) + \sup(B)$.

For the reverse inequality, let $\varepsilon > 0$. By the approximation property, there exist $a \in A$
and $b \in B$ with $a > \sup(A) - \varepsilon/2$ and $b > \sup(B) - \varepsilon/2$. Then
$a + b > \sup(A) + \sup(B) - \varepsilon$, so $\sup(A + B) \geq \sup(A) + \sup(B) - \varepsilon$.
Since $\varepsilon > 0$ is arbitrary, $\sup(A + B) \geq \sup(A) + \sup(B)$. $\blacksquare$

**Proposition 1.5.** For any non-empty bounded set $S \subseteq \mathbb{R}$, $\inf(S) = -\sup(-S)$,
where $-S = \{-s : s \in S\}$.

*Proof.* Let $u = \sup(-S)$. Then $-s \leq u$ for all $s \in S$, so $s \geq -u$ for all $s \in S$,
meaning $-u$ is a lower bound for $S$. If $v$ is any lower bound for $S$, then $-v$ is an upper bound
for $-S$, so $u \leq -v$, i.e., $-u \geq v$. Hence $-u = \inf(S)$. $\blacksquare$

<details>
<summary>Worked Example: Find $\sup$ and $\inf$ of $S = \{(-1)^n + 1/n : n \in \mathbb{N}\}$</summary>

*Solution.* The first few terms are $0, 3/2, -2/3, 5/4, -4/5, 7/6, \ldots$.

For even $n = 2k$: $(-1)^{2k} + 1/(2k) = 1 + 1/(2k)$, which decreases toward $1$ from above.
For odd $n = 2k-1$: $(-1)^{2k-1} + 1/(2k-1) = -1 + 1/(2k-1)$, which increases toward $-1$ from below.

The even terms form the sequence $3/2, 5/4, 7/6, \ldots$ with limit $1$, so $\sup(S) = 3/2$
(the first even term). The odd terms form $0, -2/3, -4/5, \ldots$ with limit $-1$, and since $0$
is an odd-indexed term, $\inf(S) = -1$ (approached but not attained). $\blacksquare$

</details>

### 1.6 Construction of $\mathbb{R}$ via Dedekind Cuts

_Remark._ The following outline shows how $\mathbb{R}$ can be constructed from $\mathbb{Q}$, making
the completeness axiom a theorem rather than an axiom.

**Definition (Dedekind Cut).** A **Dedekind cut** is a subset $\alpha \subseteq \mathbb{Q}$ satisfying:

1. $\alpha \neq \emptyset$ and $\alpha \neq \mathbb{Q}$
2. If $p \in \alpha$ and $q \lt{} p$ (with $q \in \mathbb{Q}$), then $q \in \alpha$ (downward closure)
3. $\alpha$ has no greatest element: for every $p \in \alpha$, there exists $q \in \alpha$ with $p \lt{} q$

**Definition.** The set of real numbers $\mathbb{R}$ is defined as the set of all Dedekind cuts.

The order, addition, and multiplication are defined as follows:

- **Order:** $\alpha \lt{} \beta$ if and only if $\alpha \subsetneq \beta$
- **Addition:** $\alpha + \beta = \{p + q : p \in \alpha, q \in \beta\}$
- **Multiplication:** For $\alpha, \beta \geq 0^*$: $\alpha \cdot \beta = \{p \cdot q : p \in \alpha, q \in \beta, p \geq 0, q \geq 0\} \cup \{r \in \mathbb{Q} : r \lt{} 0\}$

Here $0^* = \{q \in \mathbb{Q} : q \lt{} 0\}$ represents the real number $0$.

**Theorem.** With these definitions, $\mathbb{R}$ is a complete ordered field, and $\mathbb{Q}$ embeds
into $\mathbb{R}$ via $q \mapsto \{r \in \mathbb{Q} : r \lt{} q\}$.

*Proof (sketch).* Verifying the field axioms and order axioms is lengthy but straightforward. The key
step is the completeness axiom: if $\mathcal{A}$ is a non-empty set of Dedekind cuts bounded above,
then $\alpha = \bigcup_{\beta \in \mathcal{A}} \beta$ is itself a Dedekind cut and $\alpha = \sup(\mathcal{A})$.
$\blacksquare$

### 1.7 Equivalences of Completeness

The completeness axiom can be formulated in several equivalent ways. Each implies the others:

1. **Least Upper Bound Property:** Every non-empty set bounded above has a supremum.
2. **Monotone Convergence Theorem:** Every bounded monotone sequence converges.
3. **Nested Interval Property:** Every nested sequence of closed intervals $I_1 \supseteq I_2 \supseteq \cdots$
   with $\mathrm{length}(I_n) \to 0$ has exactly one point in $\bigcap I_n$.
4. **Bolzano-Weierstrass Property:** Every bounded sequence has a convergent subsequence.
5. **Cauchy Completeness:** Every Cauchy sequence converges.

**Proposition 1.6.** In any ordered field, (1) $\iff$ (2) $\iff$ (3) $\iff$ (4) $\iff$ (5).

*Proof (outline).* We have shown $(1) \Rightarrow (2)$ (MCT in Section 2.2), $(2) \Rightarrow (4)$
(via the bisection argument in Bolzano-Weierstrass), $(4) \Rightarrow (5)$ (Cauchy completeness proof
in Section 2.3), and $(5) \Rightarrow (1)$ can be shown by constructing a Cauchy sequence converging
to $\sup S$ from the approximation property. The equivalence $(1) \Rightarrow (3)$ follows from the
nested interval argument, and $(3) \Rightarrow (1)$ follows by constructing nested intervals that
shrink to $\sup S$. $\blacksquare$

_Remark._ The field $\mathbb{Q}$ satisfies none of these properties, which is why it must be
extended to $\mathbb{R}$ for analysis.

:::caution Common Pitfall
The completeness axiom is often misstated as "every bounded set has a supremum." The set must be
non-empty. Also, completeness does not say every set has a maximum; $\sup(S)$ need not belong to $S$.
For example, $\sup\{1/n : n \in \mathbb{N}\} = 1$, which belongs to the set, but
$\sup(0, 1) = 1$, which does not belong to $(0, 1)$.
:::

## 2. Sequences and Limits

### 2.1 Convergence

A sequence $(a_n)_{n=1}^{\infty}$ in $\mathbb{R}$ **converges** to a limit $L \in \mathbb{R}$ if for
every $\varepsilon > 0$, there exists $N \in \mathbb{N}$ such that

$$|a_n - L| \lt{} \varepsilon \quad \mathrm{for\ all\ } n \geq N$$

We write $a_n \to L$ or $\lim_{n \to \infty} a_n = L$. A sequence that does not converge is said to
**diverge**.

**Proposition 2.1 (Uniqueness of Limits).** If $(a_n)$ converges, its limit is unique.

*Proof.* Suppose $a_n \to L$ and $a_n \to M$ with $L \neq M$. Let $\varepsilon = |L - M|/2 > 0$. There
exists $N_1$ such that $|a_n - L| \lt{} \varepsilon$ for $n \geq N_1$, and $N_2$ such that
$|a_n - M| \lt{} \varepsilon$ for $n \geq N_2$. For $n \geq \max(N_1, N_2)$:

$$|L - M| \leq |a_n - L| + |a_n - M| \lt{} 2\varepsilon = |L - M|$$

a contradiction. $\blacksquare$

**Proposition 2.2.** Every convergent sequence is bounded.

*Proof.* Let $a_n \to L$. Taking $\varepsilon = 1$, there exists $N$ such that $|a_n - L| \lt{} 1$ for
all $n \geq N$. Then $|a_n| \leq |L| + 1$ for $n \geq N$. Let $M = \max\{|a_1|, |a_2|, \ldots, |a_{N-1}|, |L| + 1\}$.
Then $|a_n| \leq M$ for all $n$. $\blacksquare$

### 2.2 Convergence Theorems

**Theorem 2.1 (Algebra of Limits).** If $a_n \to L$ and $b_n \to M$, then:

1. $a_n + b_n \to L + M$
2. $a_n b_n \to LM$
3. $a_n / b_n \to L/M$ (provided $M \neq 0$ and $b_n \neq 0$ for all $n$)

**Theorem 2.2 (Squeeze Theorem).** If $a_n \leq b_n \leq c_n$ for all $n$ and $a_n \to L$,
$c_n \to L$, then $b_n \to L$.

**Theorem 2.3 (Monotone Convergence Theorem).** Every bounded monotone sequence in $\mathbb{R}$ converges.
Specifically:

- Every bounded increasing sequence converges to its supremum.
- Every bounded decreasing sequence converges to its infimum.

*Proof.* Let $(a_n)$ be bounded and increasing. By the completeness axiom,
$s = \sup\{a_n : n \in \mathbb{N}\}$ exists. Let $\varepsilon > 0$. By the approximation property,
there exists $N$ such that $s - \varepsilon \lt{} a_N \leq s$. Since $(a_n)$ is increasing,
$a_n \geq a_N > s - \varepsilon$ for all $n \geq N$. Also $a_n \leq s$ for all $n$. Hence
$|a_n - s| \lt{} \varepsilon$ for all $n \geq N$. $\blacksquare$

### 2.3 Cauchy Sequences

A sequence $(a_n)$ is a **Cauchy sequence** if for every $\varepsilon > 0$, there exists $N \in
\mathbb{N}$ such that

$$|a_n - a_m| \lt{} \varepsilon \quad \mathrm{for\ all\ } m, n \geq N$$

**Theorem 2.4.** Every convergent sequence is Cauchy.

*Proof.* Let $a_n \to L$. Given $\varepsilon > 0$, choose $N$ such that $|a_n - L| \lt{} \varepsilon/2$
for all $n \geq N$. Then for $m, n \geq N$:
$|a_n - a_m| \leq |a_n - L| + |a_m - L| \lt{} \varepsilon$. $\blacksquare$

**Theorem 2.5 (Cauchy Completeness of $\mathbb{R}$).** Every Cauchy sequence in $\mathbb{R}$ converges.

*Proof.* Let $(a_n)$ be Cauchy. First, $(a_n)$ is bounded: choose $N$ with $|a_n - a_m| \lt{} 1$ for
$m, n \geq N$. Then $|a_n| \leq |a_N| + 1$ for $n \geq N$. By the Bolzano-Weierstrass theorem
(Theorem 2.6 below), $(a_n)$ has a convergent subsequence $(a_{n_k}) \to L$. We show $a_n \to L$.

Given $\varepsilon > 0$, choose $N_1$ so that $|a_n - a_m| \lt{} \varepsilon/2$ for $m, n \geq N_1$,
and $K$ so that $|a_{n_k} - L| \lt{} \varepsilon/2$ for $k \geq K$. For $n \geq N_1$, choose
$k \geq K$ with $n_k \geq N_1$ (possible since $n_k \to \infty$). Then

$$|a_n - L| \leq |a_n - a_{n_k}| + |a_{n_k} - L| \lt{} \varepsilon/2 + \varepsilon/2 = \varepsilon$$

$\blacksquare$

### 2.4 Subsequences

A **subsequence** of $(a_n)$ is a sequence $(a_{n_k})_{k=1}^{\infty}$ where $n_1 \lt{} n_2 \lt{} n_3 \lt{} \cdots$.

**Proposition 2.3.** If $a_n \to L$, then every subsequence $(a_{n_k}) \to L$.

**Proposition 2.4.** If $(a_n)$ has two subsequences converging to different limits, then $(a_n)$ diverges.

### 2.5 The Bolzano-Weierstrass Theorem

**Theorem 2.6 (Bolzano-Weierstrass).** Every bounded sequence in $\mathbb{R}$ has a convergent subsequence.

*Proof.* Let $(a_n)$ be bounded, so $a_n \in [A, B]$ for all $n$. Set $I_0 = [A, B]$. Bisect $I_0$ into
$[A, (A+B)/2]$ and $[(A+B)/2, B]$. At least one contains infinitely many terms of $(a_n)$; call it
$I_1$. Having constructed $I_k = [l_k, r_k]$, bisect it and select $I_{k+1}$ as the half containing
infinitely many terms of $(a_n)$.

This produces a nested sequence of closed intervals $I_0 \supseteq I_1 \supseteq I_2 \supseteq \cdots$
with $\mathrm{length}(I_k) = (B - A)/2^k \to 0$. By the **Nested Interval Property** (which follows
from completeness), $\bigcap_{k=0}^{\infty} I_k = \{c\}$ for some $c \in [A, B]$.

Construct the subsequence inductively: pick $n_1$ with $a_{n_1} \in I_1$. Having chosen
$n_1 \lt{} n_2 \lt{} \cdots \lt{} n_{k-1}$, pick $n_k > n_{k-1}$ with $a_{n_k} \in I_k$ (possible since
$I_k$ contains infinitely many terms). Then $a_{n_k} \in I_k$ for all $k$, so
$|a_{n_k} - c| \leq \mathrm{length}(I_k) \to 0$. Hence $a_{n_k} \to c$. $\blacksquare$

### 2.6 Limit Superior and Limit Inferior

Let $(a_n)$ be a bounded sequence. Define:

$$\limsup_{n \to \infty} a_n = \inf_{n \geq 1} \sup_{k \geq n} a_k, \qquad \liminf_{n \to \infty} a_n = \sup_{n \geq 1} \inf_{k \geq n} a_k$$

**Proposition 2.5.** For every bounded sequence $(a_n)$:
$$\liminf_{n \to \infty} a_n \leq \limsup_{n \to \infty} a_n$$

*Proof.* For any $n$, $\inf_{k \geq n} a_k \leq a_n \leq \sup_{k \geq n} a_n$. Taking supremum over
$n$ on the left: $\liminf a_n \leq \sup_{k \geq n} a_k$ for every $n$. Taking infimum over $n$ on
the right gives $\liminf a_n \leq \limsup a_n$. $\blacksquare$

**Proposition 2.6.** $(a_n)$ converges if and only if $\liminf a_n = \limsup a_n$, in which case the
common value equals $\lim a_n$.

*Proof.* If $a_n \to L$, then for every $\varepsilon > 0$, there exists $N$ such that
$L - \varepsilon \lt{} a_n \lt{} L + \varepsilon$ for $n \geq N$. Hence $\sup_{k \geq n} a_k \leq L + \varepsilon$
for $n \geq N$, so $\limsup a_n \leq L + \varepsilon$. Since $\varepsilon > 0$ is arbitrary,
$\limsup a_n \leq L$. Similarly $\liminf a_n \geq L$. Combined with Proposition 2.5,
$\liminf a_n = \limsup a_n = L$.

Conversely, if $\liminf a_n = \limsup a_n = L$, then for every $\varepsilon > 0$, there exists $N_1$
with $\sup_{k \geq n} a_k \lt{} L + \varepsilon$ for $n \geq N_1$, and $N_2$ with
$\inf_{k \geq n} a_k > L - \varepsilon$ for $n \geq N_2$. For $n \geq \max(N_1, N_2)$:
$L - \varepsilon \lt{} a_n \lt{} L + \varepsilon$, so $a_n \to L$. $\blacksquare$

**Proposition 2.7.** $\limsup a_n$ is the largest subsequential limit of $(a_n)$, and $\liminf a_n$
is the smallest.

*Proof.* Let $L^* = \limsup a_n = \inf_n \sup_{k \geq n} a_k$. Define $s_n = \sup_{k \geq n} a_k$.
Then $(s_n)$ is decreasing and $s_n \to L^*$. For each $n$, choose $k_n \geq n$ with
$a_{k_n} > s_n - 1/n$. Then $a_{k_n} \to L^*$ (by squeeze), producing a subsequence converging to $L^*$.

If $L > L^*$ were a subsequential limit, choose a subsequence $a_{n_j} \to L$. For large $j$:
$a_{n_j} > (L + L^*)/2 > L^*$. But $a_{n_j} \leq s_{n_j}$ for all $j$, and $s_{n_j} \to L^*$,
so $a_{n_j} \leq s_{n_j} \lt{} (L + L^*)/2$ for large $j$, a contradiction. $\blacksquare$

**Proposition 2.8 (Algebra of $\limsup$/$\liminf$).** If $(a_n)$ and $(b_n)$ are bounded sequences:

1. $\limsup(a_n + b_n) \leq \limsup a_n + \limsup b_n$
2. $\liminf(a_n + b_n) \geq \liminf a_n + \liminf b_n$
3. If $a_n \geq 0$ and $b_n \geq 0$: $\limsup(a_n b_n) \leq (\limsup a_n)(\limsup b_n)$

_Remark._ Equality in (1) does not hold in general. For example, $a_n = (-1)^n$ and $b_n = (-1)^{n+1}$
give $a_n + b_n = 0$, so $\limsup(a_n + b_n) = 0 \lt{} 1 + 1 = \limsup a_n + \limsup b_n$.

**Proposition 2.9.** A sequence $(a_n)$ is convergent if and only if it is Cauchy, if and only if
$\limsup a_n = \liminf a_n$.

<details>
<summary>Worked Example: Compute $\limsup$ and $\liminf$ of $a_n = (-1)^n \cdot \frac{n}{n+1}$</summary>

*Solution.* The sequence is $-1/2, 2/3, -3/4, 4/5, -5/6, \ldots$

The even subsequence is $a_{2k} = \frac{2k}{2k+1} \to 1$.
The odd subsequence is $a_{2k-1} = -\frac{2k-1}{2k} \to -1$.

No subsequence can have a limit greater than $1$ (since $a_n \leq n/(n+1) \lt{} 1$ for even $n$
and $a_n \lt{} 0$ for odd $n$). Similarly, no subsequence can have a limit less than $-1$.

Therefore $\limsup_{n \to \infty} a_n = 1$ and $\liminf_{n \to \infty} a_n = -1$. Since
$\limsup \neq \liminf$, the sequence diverges. $\blacksquare$

</details>

### 2.7 Worked Examples

**Problem.** Prove that $\lim_{n \to \infty} \frac{n}{n+1} = 1$.

*Solution.* Let $\varepsilon > 0$. We need $\left|\frac{n}{n+1} - 1\right| \lt{} \varepsilon$, i.e.,
$\frac{1}{n+1} \lt{} \varepsilon$, i.e., $n > \frac{1}{\varepsilon} - 1$. Choose $N = \lceil \frac{1}{\varepsilon} \rceil$.
Then for $n \geq N$: $n \geq \frac{1}{\varepsilon}$, so $n+1 > \frac{1}{\varepsilon}$, so
$\frac{1}{n+1} \lt{} \varepsilon$. $\blacksquare$

<details>
<summary>Worked Example: $\varepsilon$-$N$ proof for $\lim_{n \to \infty} \frac{3n + 1}{n + 2} = 3$</summary>

*Solution.* Let $\varepsilon > 0$. We compute:

$$\left|\frac{3n+1}{n+2} - 3\right| = \left|\frac{3n+1 - 3(n+2)}{n+2}\right| = \left|\frac{-5}{n+2}\right| = \frac{5}{n+2}$$

We need $\frac{5}{n+2} \lt{} \varepsilon$, i.e., $n + 2 > 5/\varepsilon$, i.e., $n > 5/\varepsilon - 2$.
Choose $N = \lceil 5/\varepsilon \rceil$. Then for $n \geq N$:

$$\left|\frac{3n+1}{n+2} - 3\right| = \frac{5}{n+2} \leq \frac{5}{N+2} \leq \frac{5}{5/\varepsilon} = \varepsilon$$

$\blacksquare$

</details>

<details>
<summary>Worked Example: Show $(a_n)$ with $a_1 = \sqrt{2}$, $a_{n+1} = \sqrt{2 + a_n}$ converges</summary>

*Solution.* **Step 1:** $(a_n)$ is bounded above by $2$. By induction: $a_1 = \sqrt{2} \leq 2$.
If $a_n \leq 2$, then $a_{n+1} = \sqrt{2 + a_n} \leq \sqrt{2 + 2} = 2$.

**Step 2:** $(a_n)$ is increasing. We have $a_1 = \sqrt{2} \approx 1.414$ and $a_2 = \sqrt{2 + \sqrt{2}} \approx 1.848$.
Assume $a_n \leq a_{n+1}$. Then $a_{n+1} = \sqrt{2 + a_n} \leq \sqrt{2 + a_{n+1}} = a_{n+2}$.

**Step 3:** By the Monotone Convergence Theorem, $(a_n)$ converges. Let $L = \lim a_n$. Taking limits
in $a_{n+1} = \sqrt{2 + a_n}$: $L = \sqrt{2 + L}$, so $L^2 = 2 + L$, giving $L^2 - L - 2 = 0$, so
$(L-2)(L+1) = 0$. Since $a_n \geq \sqrt{2} > 0$ for all $n$, $L \geq 0$, so $L = 2$. $\blacksquare$

</details>

:::caution Common Pitfall
When computing $\limsup$ and $\liminf$, do not confuse them with $\sup$ and $\inf$ of the range
$\{a_n : n \in \mathbb{N}\}$. The $\limsup$ depends on the *tail* behavior of the sequence. For
example, $a_n = (-1)^n$ has $\limsup = 1$ and $\liminf = -1$, but $\sup\{a_n\} = 1$ and
$\inf\{a_n\} = -1$ happen to agree in this case. However, for $a_n = 1/n$, $\sup = 1$ but $\limsup = 0$.
:::

## 3. Series

### 3.1 Definitions and Convergence

A **series** $\sum_{n=1}^{\infty} a_n$ converges if the sequence of partial sums $S_N = \sum_{n=1}^{N} a_n$
converges. The limit is the sum of the series.

If $a_n \geq 0$ for all $n$, the series of partial sums is increasing, so by the monotone convergence
theorem, $\sum a_n$ converges if and only if $(S_N)$ is bounded above.

### 3.2 Convergence Tests

**Theorem 3.1 (Comparison Test).** If $0 \leq a_n \leq b_n$ for all $n$, then:

- If $\sum b_n$ converges, then $\sum a_n$ converges.
- If $\sum a_n$ diverges, then $\sum b_n$ diverges.

**Theorem 3.2 (Limit Comparison Test).** If $a_n > 0$, $b_n > 0$, and
$\lim_{n \to \infty} a_n / b_n = L$ where $0 \lt{} L \lt{} \infty$, then $\sum a_n$ converges if and only if
$\sum b_n$ converges.

**Theorem 3.3 (Ratio Test).** If $\lim_{n \to \infty} |a_{n+1}/a_n| = L$, then:

- If $L \lt{} 1$, $\sum a_n$ converges absolutely.
- If $L > 1$, $\sum a_n$ diverges.
- If $L = 1$, the test is inconclusive.

**Theorem 3.4 (Root Test).** If $\limsup_{n \to \infty} \sqrt[n]{|a_n|} = L$, then:

- If $L \lt{} 1$, $\sum a_n$ converges absolutely.
- If $L > 1$, $\sum a_n$ diverges.
- If $L = 1$, the test is inconclusive.

*Proof.* If $L \lt{} 1$, choose $r$ with $L \lt{} r \lt{} 1$. By definition of $\limsup$, there exists
$N$ such that $\sqrt[n]{|a_n|} \lt{} r$ for all $n \geq N$, i.e., $|a_n| \lt{} r^n$. Since
$\sum r^n$ converges (geometric series with $r \lt{} 1$), the comparison test gives absolute convergence.

If $L > 1$, then for infinitely many $n$: $\sqrt[n]{|a_n|} > 1$, so $|a_n| > 1$. Hence $a_n \not\to 0$,
and the series diverges. $\blacksquare$

**Theorem 3.5 (Integral Test).** If $f : [1, \infty) \to [0, \infty)$ is positive, continuous, and
decreasing, then $\sum_{n=1}^{\infty} f(n)$ converges if and only if
$\int_1^{\infty} f(x)\, dx$ converges.

*Proof.* Since $f$ is decreasing, for $k \leq x \leq k+1$: $f(k+1) \leq f(x) \leq f(k)$. Integrating:

$$f(k+1) = \int_k^{k+1} f(k+1)\, dx \leq \int_k^{k+1} f(x)\, dx \leq \int_k^{k+1} f(k)\, dx = f(k)$$

Summing from $k = 1$ to $N - 1$:

$$\sum_{k=2}^{N} f(k) \leq \int_1^N f(x)\, dx \leq \sum_{k=1}^{N-1} f(k)$$

If $\int_1^{\infty} f$ converges, the left inequality shows $\sum f(k)$ is bounded above, hence converges.
If $\int_1^{\infty} f$ diverges, the right inequality shows $\sum f(k)$ is unbounded, hence diverges.
$\blacksquare$

**Theorem 3.6 (Alternating Series Test).** If $a_n > 0$, $a_n$ decreases, and $a_n \to 0$, then
$\sum_{n=1}^{\infty} (-1)^{n+1} a_n$ converges.

*Proof.* The partial sums of the even-indexed subsequence satisfy $S_{2n} = S_{2n-2} - a_{2n-1} + a_{2n}$.
Since $a_{2n-1} \geq a_{2n}$, we have $S_{2n} \leq S_{2n-2}$, so $(S_{2n})$ is decreasing. Similarly,
$(S_{2n+1})$ is increasing. Also $S_{2n+1} = S_{2n} + a_{2n+1} \geq S_{2n}$. Both sequences are bounded
(since $(S_{2n})$ is decreasing and bounded below by $S_1$, and $(S_{2n+1})$ is increasing and bounded
above by $S_2$). Hence both converge. Since $a_{2n+1} \to 0$, their limits coincide. $\blacksquare$

### 3.3 Absolute and Conditional Convergence

A series $\sum a_n$ **converges absolutely** if $\sum |a_n|$ converges. It **converges conditionally**
if $\sum a_n$ converges but $\sum |a_n|$ diverges.

**Theorem 3.7.** If $\sum a_n$ converges absolutely, then $\sum a_n$ converges.

*Proof.* Since $\sum |a_n|$ converges, the partial sums of $\sum |a_n|$ satisfy the Cauchy criterion.
Given $\varepsilon > 0$, there exists $N$ such that for $m > n \geq N$:
$\sum_{k=n+1}^{m} |a_k| \lt{} \varepsilon$. Then
$\left|\sum_{k=n+1}^{m} a_k\right| \leq \sum_{k=n+1}^{m} |a_k| \lt{} \varepsilon$, so $\sum a_n$ satisfies
the Cauchy criterion and converges. $\blacksquare$

### 3.4 The Alternating Series Estimation Theorem

**Theorem 3.8 (Alternating Series Estimation).** If $S = \sum_{n=1}^{\infty} (-1)^{n+1} a_n$ satisfies the
hypotheses of the alternating series test, then the error after $N$ terms satisfies:

$$|S - S_N| \leq a_{N+1}$$

*Proof.* We have $S_{2n} \leq S \leq S_{2n+1} = S_{2n} + a_{2n+1}$ and $S_{2n-1} \geq S \geq S_{2n} = S_{2n-1} - a_{2n}$.
In both cases $|S - S_N| \leq a_{N+1}$. $\blacksquare$

### 3.5 Cauchy Condensation Test

**Theorem 3.8b (Cauchy Condensation Test).** If $(a_n)$ is a non-negative, decreasing sequence, then
$\sum_{n=1}^{\infty} a_n$ converges if and only if $\sum_{k=0}^{\infty} 2^k a_{2^k}$ converges.

*Proof.* Group the terms of $\sum a_n$. For the lower bound, note:

$$a_1 + (a_2 + a_3) + (a_4 + a_5 + a_6 + a_7) + \cdots \geq a_1 + 2a_2 + 4a_4 + 8a_8 + \cdots = \sum_{k=0}^{\infty} 2^k a_{2^k}$$

since each group $(a_{2^k} + \cdots + a_{2^{k+1}-1})$ has $2^k$ terms, each $\geq a_{2^k}$. For the upper
bound:

$$a_1 + a_2 + (a_3 + a_4) + (a_5 + a_6 + a_7 + a_8) + \cdots \leq a_1 + a_2 + 2a_4 + 4a_8 + \cdots \leq a_1 + 2\sum_{k=1}^{\infty} 2^{k-1} a_{2^k}$$

If $\sum 2^k a_{2^k}$ converges, the upper bound shows $\sum a_n$ converges. If $\sum a_n$
converges, the lower bound shows $\sum 2^k a_{2^k}$ converges. $\blacksquare$

_Corollary._ $\sum_{n=1}^{\infty} 1/n^p$ converges if and only if $p > 1$. Apply the condensation
test: $\sum 2^k \cdot 1/(2^k)^p = \sum 2^{k(1-p)}$, a geometric series with ratio $2^{1-p}$,
which converges iff $1 - p \lt{} 0$, i.e., $p > 1$.

### 3.6 Rearrangement of Series

**Theorem 3.9 (Riemann Rearrangement Theorem).** If $\sum a_n$ converges conditionally, then for any
$L \in \mathbb{R}$ (or $\pm\infty$), there exists a rearrangement $\sigma : \mathbb{N} \to \mathbb{N}$ such
that $\sum_{n=1}^{\infty} a_{\sigma(n)} = L$.

*Proof (outline).* Let $P = \{n : a_n > 0\}$ and $N = \{n : a_n \lt{} 0\}$. Since $\sum a_n$ converges
conditionally, both $\sum_{n \in P} a_n = +\infty$ and $\sum_{n \in N} a_n = -\infty$.

To achieve sum $L \in \mathbb{R}$: take positive terms in order until the partial sum exceeds $L$,
then take negative terms until it falls below $L$, then positive terms again, and so on. Since both
the positive and negative subseries diverge, this process can always continue. The terms tend to
zero (since the series converges), so the oscillations around $L$ shrink to zero. $\blacksquare$

_Remark._ By contrast, every rearrangement of an absolutely convergent series converges to the same sum.

### 3.7 Worked Examples

**Problem.** Determine whether $\sum_{n=1}^{\infty} \frac{n}{2^n}$ converges.

*Solution.* Apply the ratio test:

$$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{(n+1)/2^{n+1}}{n/2^n} = \lim_{n \to \infty} \frac{n+1}{2n} = \frac{1}{2} \lt{} 1$$

By the ratio test, the series converges absolutely. $\blacksquare$

<details>
<summary>Worked Example: Determine convergence of $\sum_{n=1}^{\infty} \frac{1}{n^2 + n}$</summary>

*Solution.* Note that $\frac{1}{n^2 + n} = \frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$. This is a
telescoping series. The $N$-th partial sum is:

$$S_N = \sum_{n=1}^{N} \left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{N+1}$$

Therefore $\lim_{N \to \infty} S_N = 1$, and the series converges to $1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Does $\sum_{n=2}^{\infty} \frac{1}{n \ln n}$ converge?</summary>

*Solution.* Apply the integral test with $f(x) = 1/(x \ln x)$ on $[2, \infty)$. The function is positive,
continuous, and decreasing. Compute:

$$\int_2^{\infty} \frac{1}{x \ln x}\, dx = \lim_{b \to \infty} \int_2^{b} \frac{1}{x \ln x}\, dx = \lim_{b \to \infty} \left[\ln(\ln x)\right]_2^b = \lim_{b \to \infty} \ln(\ln b) - \ln(\ln 2) = \infty$$

The integral diverges, so by the integral test, the series diverges. $\blacksquare$

</details>

<details>
<summary>Worked Example: Approximate $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$ to within $0.01$</summary>

*Solution.* This is the alternating harmonic series, with $a_n = 1/n$. By the alternating series
estimation theorem, $|S - S_N| \leq a_{N+1} = 1/(N+1)$. We need $1/(N+1) \leq 0.01$, so
$N + 1 \geq 100$, i.e., $N \geq 99$.

So $S_{99} = \sum_{n=1}^{99} \frac{(-1)^{n+1}}{n}$ approximates $\ln 2$ to within $0.01$.
(The exact sum is $\ln 2 \approx 0.6931$.) $\blacksquare$

</details>

<details>
<summary>Worked Example: Determine convergence of $\sum_{n=1}^{\infty} \frac{1}{n^2 + 1}$</summary>

*Solution.* Since $\frac{1}{n^2 + 1} \leq \frac{1}{n^2}$ for all $n$, and $\sum 1/n^2$ converges
($p$-series with $p = 2 > 1$), the comparison test implies $\sum \frac{1}{n^2 + 1}$ converges. $\blacksquare$

</details>

<details>
<summary>Worked Example: Use the condensation test for $\sum_{n=2}^{\infty} \frac{1}{n (\ln n) (\ln \ln n)}$</summary>

*Solution.* Let $a_n = \frac{1}{n (\ln n)(\ln \ln n)}$ for $n \geq 3$. This is positive and decreasing.
By the condensation test, $\sum a_n$ converges iff $\sum 2^k a_{2^k}$ converges. Compute:

$$2^k a_{2^k} = \frac{2^k}{2^k \cdot k \ln 2 \cdot \ln(k \ln 2)} = \frac{1}{k \ln 2 \cdot \ln(k \ln 2)} \approx \frac{1}{k \ln k}$$

The series $\sum \frac{1}{k \ln k}$ diverges (integral test, analogous to $\sum \frac{1}{n \ln n}$).
Therefore $\sum a_n$ diverges. $\blacksquare$

_If you get this wrong, revise:_ Section 3.5 (Cauchy Condensation Test).

</details>

:::caution Common Pitfall
The ratio and root tests are inconclusive when the limit equals 1. In such cases, try the comparison
test, integral test, or other methods. For example, $\sum 1/n$ diverges (harmonic series) and
$\sum 1/n^2$ converges, but both give a ratio test limit of 1.
:::

## 4. Continuity

### 4.1 Limits of Functions

Let $f : D \to \mathbb{R}$ where $D \subseteq \mathbb{R}$. We say $\lim_{x \to a} f(x) = L$ if for
every $\varepsilon > 0$, there exists $\delta > 0$ such that

$$0 \lt{} |x - a| \lt{} \delta \implies |f(x) - L| \lt{} \varepsilon$$

### 4.2 Continuity

**Definition.** $f$ is **continuous at $a$** if $\lim_{x \to a} f(x) = f(a)$. In epsilon-delta form:
for every $\varepsilon > 0$, there exists $\delta > 0$ such that

$$|x - a| \lt{} \delta \implies |f(x) - f(a)| \lt{} \varepsilon$$

_Remark._ A function is continuous on a set $E$ if it is continuous at every point of $E$.
A function is **globally continuous** (or simply "continuous") if it is continuous on its entire domain.

**Definition.** $f$ is **discontinuous at $a$** if it is not continuous at $a$. Discontinuities are
classified as:

- **Removable:** $\lim_{x \to a} f(x)$ exists but does not equal $f(a)$ (or $f(a)$ is undefined).
- **Jump:** $\lim_{x \to a^-} f(x)$ and $\lim_{x \to a^+} f(x)$ both exist but are unequal.
- **Essential (or infinite/oscillatory):** At least one one-sided limit does not exist.

**Proposition 4.3.** Polynomials are continuous on $\mathbb{R}$. Rational functions $p(x)/q(x)$ are
continuous wherever $q(x) \neq 0$. The functions $\sin x$, $\cos x$, $e^x$, $\ln x$ are continuous
on their domains.

**Theorem 4.1 (Algebra of Continuous Functions).** If $f$ and $g$ are continuous at $a$, then $f+g$,
$f-g$, $fg$, and (where defined) $f/g$ are continuous at $a$.

**Theorem 4.2.** Compositions of continuous functions are continuous: if $f$ is continuous at $a$ and
$g$ is continuous at $f(a)$, then $g \circ f$ is continuous at $a$.

### 4.2a Sequential Characterization of Limits and Continuity

The epsilon-delta definitions can be reformulated in terms of sequences, which is often more
convenient for proofs.

**Proposition 4.2a (Sequential Criterion for Limits).** $\lim_{x \to c} f(x) = L$ if and only if
for every sequence $(x_n)$ with $x_n \to c$ and $x_n \neq c$ for all $n$, we have $f(x_n) \to L$.

*Proof.* ($\Rightarrow$) Let $\varepsilon > 0$. Choose $\delta > 0$ from the $\varepsilon$-$\delta$ definition.
Since $x_n \to c$, there exists $N$ with $|x_n - c| \lt{} \delta$ for $n \geq N$. Then
$|f(x_n) - L| \lt{} \varepsilon$ for $n \geq N$.

($\Leftarrow$) Suppose the $\varepsilon$-$\delta$ condition fails. Then there exists $\varepsilon > 0$ such
that for every $n \in \mathbb{N}$, there exists $x_n$ with $0 \lt{} |x_n - c| \lt{} 1/n$ but
$|f(x_n) - L| \geq \varepsilon$. Then $x_n \to c$ but $f(x_n) \not\to L$, contradicting the hypothesis.
$\blacksquare$

**Corollary 4.2b.** $f$ is continuous at $c$ if and only if for every sequence $(x_n)$ with $x_n \to c$,
we have $f(x_n) \to f(c)$.

This is especially useful for proving that a function is **not** continuous: find one sequence
converging to $c$ whose image does not converge to $f(c)$.

### 4.3 Intermediate Value Theorem

**Theorem 4.3 (IVT).** If $f : [a,b] \to \mathbb{R}$ is continuous and $f(a) \lt{} y \lt{} f(b)$ (or
$f(b) \lt{} y \lt{} f(a)$), then there exists $c \in (a,b)$ such that $f(c) = y$.

*Proof.* Assume $f(a) \lt{} y \lt{} f(b)$. Let $S = \{x \in [a,b] : f(x) \lt{} y\}$. Since $a \in S$,
$S$ is non-empty and bounded above by $b$. Let $c = \sup(S)$. We show $f(c) = y$.

If $f(c) \lt{} y$, then by continuity at $c$, there exists $\delta > 0$ such that $f(x) \lt{} y$ for
$x \in (c - \delta, c + \delta)$. But then $c + \delta/2 \in S$, contradicting that $c = \sup(S)$.

If $f(c) > y$, then by continuity, there exists $\delta > 0$ such that $f(x) > y$ for
$x \in (c - \delta, c + \delta)$. But then $c - \delta/2$ is an upper bound for $S$, contradicting
that $c = \sup(S)$.

Therefore $f(c) = y$. $\blacksquare$

*Alternative proof (bisection).* Set $a_0 = a$, $b_0 = b$. Given $[a_n, b_n]$ with $f(a_n) \lt{} y \lt{} f(b_n)$,
let $m_n = (a_n + b_n)/2$. If $f(m_n) \geq y$, set $a_{n+1} = a_n$, $b_{n+1} = m_n$. If $f(m_n) \lt{} y$,
set $a_{n+1} = m_n$, $b_{n+1} = b_n$. Either way, $f(a_n) \lt{} y \leq f(b_n)$ and $b_n - a_n = (b-a)/2^n \to 0$.
By the nested interval property, $a_n \to c$ and $b_n \to c$. By continuity, $f(c) = \lim f(a_n) \leq y$
and $f(c) = \lim f(b_n) \geq y$, so $f(c) = y$. $\blacksquare$

### 4.4 Extreme Value Theorem

**Theorem 4.4 (EVT).** If $f : [a,b] \to \mathbb{R}$ is continuous, then $f$ attains its maximum and
minimum on $[a,b]$: there exist $c_1, c_2 \in [a,b]$ such that $f(c_1) \leq f(x) \leq f(c_2)$ for all
$x \in [a,b]$.

*Proof.* We first show $f$ is bounded. Suppose not; then for each $n \in \mathbb{N}$, there exists
$x_n \in [a,b]$ with $|f(x_n)| > n$. By Bolzano-Weierstrass, $(x_n)$ has a convergent subsequence
$x_{n_k} \to c \in [a,b]$. By continuity, $f(x_{n_k}) \to f(c)$, so $(f(x_{n_k}))$ is bounded. But
$|f(x_{n_k})| > n_k \to \infty$, a contradiction.

Now we show $f$ attains its supremum. Let $M = \sup\{f(x) : x \in [a,b]\}$. For each $n$, choose
$x_n \in [a,b]$ with $f(x_n) > M - 1/n$. By Bolzano-Weierstrass, $(x_n)$ has a subsequence
$x_{n_k} \to c \in [a,b]$. By continuity, $f(c) = \lim f(x_{n_k})$. Since
$M - 1/n_k \lt{} f(x_{n_k}) \leq M$ for all $k$, the squeeze theorem gives $f(c) = M$.
The argument for the infimum is similar (consider $-f$). $\blacksquare$

### 4.5 Uniform Continuity

**Definition.** $f$ is **uniformly continuous** on $D$ if for every $\varepsilon > 0$, there exists
$\delta > 0$ such that for all $x, y \in D$:

$$|x - y| \lt{} \delta \implies |f(x) - f(y)| \lt{} \varepsilon$$

The key distinction: for ordinary continuity, $\delta$ may depend on both $\varepsilon$ and the point
$a$; for uniform continuity, $\delta$ depends only on $\varepsilon$.

### 4.6 The Heine-Cantor Theorem

**Theorem 4.5 (Heine-Cantor).** If $f : [a,b] \to \mathbb{R}$ is continuous on the closed, bounded
interval $[a,b]$, then $f$ is uniformly continuous on $[a,b]$.

*Proof.* Suppose $f$ is continuous on $[a,b]$ but not uniformly continuous. Then there exists
$\varepsilon > 0$ such that for every $n \in \mathbb{N}$, there exist $x_n, y_n \in [a,b]$ with
$|x_n - y_n| \lt{} 1/n$ but $|f(x_n) - f(y_n)| \geq \varepsilon$.

By the Bolzano-Weierstrass theorem, $(x_n)$ has a convergent subsequence $x_{n_k} \to c \in [a,b]$.
Since $|x_{n_k} - y_{n_k}| \lt{} 1/n_k \to 0$, we have $y_{n_k} \to c$ as well.

By continuity of $f$ at $c$: there exists $\delta > 0$ such that $|x - c| \lt{} \delta$ implies
$|f(x) - f(c)| \lt{} \varepsilon/2$. For $k$ sufficiently large, $|x_{n_k} - c| \lt{} \delta$ and
$|y_{n_k} - c| \lt{} \delta$, so:

$$|f(x_{n_k}) - f(y_{n_k})| \leq |f(x_{n_k}) - f(c)| + |f(y_{n_k}) - f(c)| \lt{} \varepsilon/2 + \varepsilon/2 = \varepsilon$$

contradicting $|f(x_{n_k}) - f(y_{n_k})| \geq \varepsilon$. $\blacksquare$

### 4.7 Worked Examples

**Problem.** Prove that $f(x) = \sqrt{x}$ is uniformly continuous on $[0, \infty)$.

*Solution.* For $x, y \geq 0$: $|\sqrt{x} - \sqrt{y}| = \frac{|x - y|}{\sqrt{x} + \sqrt{y}} \leq |x - y|^{1/2}$.

Given $\varepsilon > 0$, choose $\delta = \varepsilon^2$. Then $|x - y| \lt{} \delta$ implies
$|\sqrt{x} - \sqrt{y}| \leq \sqrt{|x-y|} \lt{} \sqrt{\delta} = \varepsilon$. Since $\delta$ depends
only on $\varepsilon$, the continuity is uniform. $\blacksquare$

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ proof that $f(x) = 3x - 1$ is continuous at $x = 2$</summary>

*Solution.* We have $f(2) = 5$. Let $\varepsilon > 0$. We need to find $\delta > 0$ such that
$|x - 2| \lt{} \delta$ implies $|f(x) - 5| \lt{} \varepsilon$.

Compute: $|f(x) - 5| = |(3x - 1) - 5| = |3x - 6| = 3|x - 2|$.

Choose $\delta = \varepsilon/3$. Then $|x - 2| \lt{} \delta$ implies
$|f(x) - 5| = 3|x - 2| \lt{} 3 \cdot \varepsilon/3 = \varepsilon$. $\blacksquare$

</details>

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ proof that $f(x) = x^2$ is continuous at $x = 3$</summary>

*Solution.* We have $f(3) = 9$. Let $\varepsilon > 0$. Compute:

$$|f(x) - 9| = |x^2 - 9| = |x + 3| \cdot |x - 3|$$

Restrict to $\delta \leq 1$, so $|x - 3| \lt{} 1$ means $2 \lt{} x \lt{} 4$, giving $|x + 3| \lt{} 7$.

Choose $\delta = \min(1, \varepsilon/7)$. Then $|x - 3| \lt{} \delta$ implies:

$$|x^2 - 9| = |x + 3| \cdot |x - 3| \lt{} 7 \cdot \frac{\varepsilon}{7} = \varepsilon$$

$\blacksquare$

</details>

<details>
<summary>Worked Example: Show $f(x) = 1/x$ is NOT uniformly continuous on $(0, 1)$</summary>

*Solution.* We show the negation of uniform continuity. Take $\varepsilon = 1$. For any $\delta > 0$,
choose $n \in \mathbb{N}$ with $1/n \lt{} \delta$. Set $x = 1/n$ and $y = 1/(2n)$. Then
$|x - y| = 1/(2n) \lt{} 1/n \lt{} \delta$, but:

$$|f(x) - f(y)| = \left|\frac{1}{1/n} - \frac{1}{1/(2n)}\right| = |n - 2n| = n \geq 1 = \varepsilon$$

So no single $\delta$ works for all $x, y \in (0,1)$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Use the sequential criterion to show $f(x) = \sin(1/x)$ has no limit as $x \to 0$</summary>

*Solution.* Consider the sequences $x_n = 1/(2n\pi)$ and $y_n = 1/(2n\pi + \pi/2)$. Both converge to $0$.
But $f(x_n) = \sin(2n\pi) = 0$ and $f(y_n) = \sin(2n\pi + \pi/2) = 1$ for all $n$.

So $f(x_n) \to 0$ and $f(y_n) \to 1$. By the sequential criterion, if $\lim_{x \to 0} f(x)$ existed,
both subsequences would converge to the same limit. Since they don't, the limit does not exist. $\blacksquare$

</details>

<details>
<summary>Worked Example: Prove $f(x) = x \sin(1/x)$ (with $f(0) = 0$) is continuous everywhere</summary>

*Solution.* For $x \neq 0$, $f$ is a product of continuous functions, hence continuous.

At $x = 0$: let $\varepsilon > 0$. Choose $\delta = \varepsilon$. For $|x - 0| = |x| \lt{} \delta$:

$$|f(x) - f(0)| = |x \sin(1/x)| \leq |x| \lt{} \delta = \varepsilon$$

So $f$ is continuous at $0$. Since $f$ extends continuously from $(0, 1]$ to $[0, 1]$, the Heine-Cantor
theorem implies $f$ is uniformly continuous on $[0, 1]$. $\blacksquare$

</details>

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ proof that $f(x) = \sin x$ is continuous at every $a \in \mathbb{R}$</summary>

*Solution.* We use the identity $|\sin u - \sin v| \leq |u - v|$ for all $u, v \in \mathbb{R}$.
(Proof: $|\sin u - \sin v| = 2|\cos((u+v)/2)\sin((u-v)/2)| \leq 2|\sin((u-v)/2)| \leq |u - v|$,
using $|\sin t| \leq |t|$ and $|\cos| \leq 1$.)

Let $\varepsilon > 0$ and $a \in \mathbb{R}$. Choose $\delta = \varepsilon$. For $|x - a| \lt{} \delta$:

$$|\sin x - \sin a| \leq |x - a| \lt{} \delta = \varepsilon$$

Since $\delta = \varepsilon$ works independently of $a$, $\sin x$ is actually **uniformly continuous**
on $\mathbb{R}$. The same argument works for $\cos x$. $\blacksquare$

</details>

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ proof that $f(x) = e^x$ is continuous at every $a \in \mathbb{R}$</summary>

*Solution.* We use the inequality $|e^u - e^v| \leq e^{\max(u,v)} |u - v|$, which follows from the
Mean Value Theorem applied to $e^t$: $e^u - e^v = e^\xi (u - v)$ for some $\xi$ between $u$ and $v$,
so $|e^u - e^v| = e^\xi |u - v| \leq e^{\max(u,v)} |u - v|$.

Let $\varepsilon > 0$ and $a \in \mathbb{R}$. Restrict to $|x - a| \lt{} 1$, so $x \lt{} a + 1$ and
$e^{\max(x,a)} \leq e^{a+1}$. Choose $\delta = \min(1, \varepsilon / e^{a+1})$. For $|x - a| \lt{} \delta$:

$$|e^x - e^a| \leq e^{a+1} |x - a| \lt{} e^{a+1} \cdot \frac{\varepsilon}{e^{a+1}} = \varepsilon$$

$\blacksquare$

_If you get this wrong, revise:_ Section 4.2 (Continuity), Section 5.3 (Mean Value Theorem).

</details>

:::caution Common Pitfall
Continuity on $(a, b)$ does not imply uniform continuity. The function $f(x) = 1/x$ on $(0, 1)$ is
continuous but not uniformly continuous. The Heine-Cantor theorem requires a **closed and bounded**
interval. Also, a function can be uniformly continuous on an unbounded domain (e.g., $f(x) = \sqrt{x}$
on $[0, \infty)$) --- boundedness of the domain is sufficient but not necessary.
:::

## 5. Differentiability

### 5.1 The Derivative

**Definition.** $f : (a,b) \to \mathbb{R}$ is **differentiable at** $c \in (a,b)$ if the limit

$$f'(c) = \lim_{h \to 0} \frac{f(c+h) - f(c)}{h}$$

exists (as a finite real number).

**Proposition 5.1.** If $f$ is differentiable at $c$, then $f$ is continuous at $c$.

*Proof.* $\lim_{x \to c} (f(x) - f(c)) = \lim_{x \to c} \frac{f(x) - f(c)}{x - c} \cdot (x - c) = f'(c) \cdot 0 = 0$.
$\blacksquare$

The converse is false: $f(x) = |x|$ is continuous at $0$ but not differentiable at $0$.

### 5.2 Differentiation Rules

**Theorem 5.1.** If $f$ and $g$ are differentiable at $c$, then:

1. $(f + g)'(c) = f'(c) + g'(c)$
2. $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$
3. $(f/g)'(c) = \frac{f'(c)g(c) - f(c)g'(c)}{g(c)^2}$ (if $g(c) \neq 0$)
4. $(f \circ g)'(c) = f'(g(c)) \cdot g'(c)$ (Chain Rule)

### 5.3 Mean Value Theorem

**Theorem 5.2 (Rolle's Theorem).** If $f : [a,b] \to \mathbb{R}$ is continuous on $[a,b]$, differentiable
on $(a,b)$, and $f(a) = f(b)$, then there exists $c \in (a,b)$ such that $f'(c) = 0$.

*Proof.* By the Extreme Value Theorem, $f$ attains its maximum $M$ and minimum $m$ on $[a,b]$.
If $M = m$, then $f$ is constant and $f'(c) = 0$ for all $c \in (a,b)$. Otherwise, at least one
of $M$ or $m$ is attained at some $c \in (a,b)$ (since $f(a) = f(b)$). By Fermat's theorem,
$f'(c) = 0$. $\blacksquare$

**Theorem 5.3 (Mean Value Theorem).** If $f : [a,b] \to \mathbb{R}$ is continuous on $[a,b]$ and
differentiable on $(a,b)$, then there exists $c \in (a,b)$ such that

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

*Proof.* Define $g(x) = f(x) - \frac{f(b)-f(a)}{b-a}(x - a)$. Then $g(a) = g(b)$ and $g$ satisfies the
hypotheses of Rolle's theorem. So $g'(c) = 0$ for some $c \in (a,b)$, which gives the result. $\blacksquare$

**Corollary 5.4.** If $f'(x) = 0$ for all $x \in (a,b)$, then $f$ is constant on $[a,b]$.

**Corollary 5.5.** If $f'(x) > 0$ for all $x \in (a,b)$, then $f$ is strictly increasing on $[a,b]$.

**Theorem 5.3a (Cauchy's Mean Value Theorem).** If $f, g : [a,b] \to \mathbb{R}$ are continuous on
$[a,b]$ and differentiable on $(a,b)$, then there exists $c \in (a,b)$ such that

$$(f(b) - f(a))g'(c) = (g(b) - g(a))f'(c)$$

*Proof.* Define $h(x) = (f(b) - f(a))g(x) - (g(b) - g(a))f(x)$. Then $h(a) = h(b)$, so by Rolle's
theorem, $h'(c) = 0$ for some $c \in (a,b)$, which gives the result. $\blacksquare$

_Remark._ When $g(x) = x$, Cauchy's MVT reduces to the standard MVT. Cauchy's MVT is the key
ingredient in the proof of L'Hôpital's rule.

**Corollary 5.6.** If $f$ is differentiable on $(a,b)$ and $|f'(x)| \leq M$ for all $x \in (a,b)$,
then $f$ is Lipschitz continuous with constant $M$: $|f(x) - f(y)| \leq M|x - y|$ for all $x, y \in (a,b)$.

*Proof.* Apply the MVT to $f$ on the interval between $x$ and $y$. $\blacksquare$

### 5.4 Taylor's Theorem

**Theorem 5.6 (Taylor's Theorem with Lagrange Remainder).** If $f$ is $(n+1)$-times differentiable on
an open interval containing $a$, then for each $x$ in that interval:

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k + R_n(x)$$

where the remainder is

$$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - a)^{n+1}$$

for some $\xi$ between $a$ and $x$.

*Proof.* Fix $x \neq a$ and define

$$g(t) = f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(t)}{k!}(x - t)^k$$

Then $g(a) = R_n(x)$ and $g(x) = 0$. By the generalized Rolle's theorem (or direct computation
using the Cauchy mean value theorem), there exists $\xi$ between $a$ and $x$ with
$g'( \xi ) = 0$. Computing:

$$g'(t) = -\frac{f^{(n+1)}(t)}{n!}(x - t)^n$$

Setting $g'(\xi) = 0$ yields the result after comparing $g(a) = R_n(x)$ with the integral form. A
cleaner approach uses the standard MVT applied to $g$ on $[a, x]$. $\blacksquare$

### 5.5 L'Hôpital's Rule

**Theorem 5.7 (L'Hôpital's Rule, $\frac{0}{0}$ case).** Suppose $f$ and $g$ are differentiable on
an open interval containing $c$ (except possibly at $c$ itself), $g'(x) \neq 0$ near $c$, and
$\lim_{x \to c} f(x) = \lim_{x \to c} g(x) = 0$. If $\lim_{x \to c} f'(x)/g'(x) = L$ exists (as a finite
number or $\pm\infty$), then $\lim_{x \to c} f(x)/g(x) = L$.

*Proof.* Extend $f$ and $g$ continuously to $c$ by setting $f(c) = g(c) = 0$. For $x \neq c$, by
Cauchy's Mean Value Theorem, there exists $\xi$ strictly between $c$ and $x$ such that

$$\frac{f(x) - f(c)}{g(x) - g(c)} = \frac{f'(\xi)}{g'(\xi)}$$

i.e., $\frac{f(x)}{g(x)} = \frac{f'(\xi)}{g'(\xi)}$. As $x \to c$, we have $\xi \to c$ (since
$\xi$ is trapped between $c$ and $x$). Therefore $\lim_{x \to c} f(x)/g(x) = \lim_{\xi \to c} f'(\xi)/g'(\xi) = L$.
$\blacksquare$

**Theorem 5.7b (L'Hôpital's Rule, $\frac{\infty}{\infty}$ case).** Suppose $f$ and $g$ are
differentiable on $(a, b)$ (except possibly at $c$), $g'(x) \neq 0$ near $c$, and
$\lim_{x \to c} |f(x)| = \lim_{x \to c} |g(x)| = \infty$. If $\lim_{x \to c} f'(x)/g'(x) = L$ exists,
then $\lim_{x \to c} f(x)/g(x) = L$.

*Proof (sketch).* Fix $\varepsilon > 0$. For $x, y$ near $c$ with $x \neq y$, by Cauchy's MVT:

$$\frac{f(x) - f(y)}{g(x) - g(y)} = \frac{f'(\xi)}{g'(\xi)}$$

for some $\xi$ between $x$ and $y$. Since $f'(\xi)/g'(\xi) \approx L$ for $\xi$ near $c$, we have:

$$\frac{f(x)}{g(x)} = \frac{f(x) - f(y)}{g(x) - g(y)} \cdot \frac{1 - f(y)/f(x)}{1 - g(y)/g(x)}$$

Since $f(x), g(x) \to \infty$, by fixing $y$ and letting $x \to c$, the fractions $f(y)/f(x)$ and
$g(y)/g(x)$ tend to $0$, so the second factor tends to $1$. The first factor tends to $L$ by
Cauchy's MVT. Hence $f(x)/g(x) \to L$. $\blacksquare$

<details>
<summary>Worked Example: Compute $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$</summary>

*Solution.* Both numerator and denominator approach $0$ as $x \to 0$. Applying L'Hôpital's rule:

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^x - 1}{2x}$$

This is still $\frac{0}{0}$, so apply L'Hôpital again:

$$= \lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}$$

$\blacksquare$

</details>

### 5.6 Darboux's Theorem

**Theorem 5.8 (Darboux's Theorem).** If $f$ is differentiable on $[a, b]$, then $f'$ has the
intermediate value property: for any $y$ between $f'(a)$ and $f'(b)$, there exists $c \in (a, b)$
with $f'(c) = y$.

_Remark._ This means derivatives satisfy the intermediate value property even though they need not
be continuous. For example, $f(x) = x^2 \sin(1/x)$ (with $f(0) = 0$) is differentiable everywhere,
but $f'$ is not continuous at $0$.

*Proof.* Assume without loss of generality that $f'(a) \lt{} y \lt{} f'(b)$. Define
$g(x) = f(x) - yx$. Then $g$ is differentiable on $[a, b]$ with

$$g'(a) = f'(a) - y \lt{} 0 \quad \mathrm{and} \quad g'(b) = f'(b) - y > 0$$

Since $g'(a) \lt{} 0$, there exists $x_1 > a$ with $g(x_1) \lt{} g(a)$ (otherwise $g(x) \geq g(a)$
for $x$ near $a$, contradicting $g'(a) \lt{} 0$). Similarly, since $g'(b) > 0$, there exists
$x_2 \lt{} b$ with $g(x_2) \lt{} g(b)$.

Therefore $g$ attains its minimum at some $c \in (a, b)$. By Fermat's theorem on interior extrema,
$g'(c) = 0$, so $f'(c) = y$. $\blacksquare$

<details>
<summary>Worked Example: Apply Darboux's theorem to $f(x) = x^2 \sin(1/x)$ ($f(0) = 0$)</summary>

*Solution.* For $x \neq 0$: $f'(x) = 2x \sin(1/x) - \cos(1/x)$. At $x = 0$:
$f'(0) = \lim_{h \to 0} \frac{h^2 \sin(1/h)}{h} = \lim_{h \to 0} h \sin(1/h) = 0$.

So $f'(0) = 0$. For any $\delta > 0$, the term $-\cos(1/x)$ oscillates between $-1$ and $1$ on
$(0, \delta)$, so $f'$ takes all values in $[-1, 1]$ infinitely often on $(0, \delta)$.

But Darboux's theorem says $f'$ has the intermediate value property. Indeed, $f'$ is not continuous
at $0$ (it oscillates wildly), yet it still satisfies the IVP. This shows that derivatives can be
highly discontinuous while retaining the intermediate value property. $\blacksquare$

</details>

### 5.7 Worked Examples

**Worked Example.** Compute the third-order Taylor polynomial of $f(x) = e^x$ about $a = 0$.

$f(0) = 1$, $f'(0) = 1$, $f''(0) = 1$, $f'''(0) = 1$. So

$$T_3(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}$$

The remainder is $R_3(x) = \frac{e^\xi}{24} x^4$ for some $\xi$ between $0$ and $x$.

<details>
<summary>Worked Example: Approximate $\sin(0.1)$ with error less than $10^{-10}$</summary>

*Solution.* For $f(x) = \sin x$ about $a = 0$: $f^{(k)}(0) \in \{0, 1, -1\}$ and the Taylor
polynomial of degree $n$ has the form $T_n(x) = x - x^3/3! + x^5/5! - \cdots$ (odd terms only).

The Lagrange remainder is $|R_n(x)| = \frac{|f^{(n+1)}(\xi)|}{(n+1)!} |x|^{n+1} \leq \frac{|x|^{n+1}}{(n+1)!}$
(since $|f^{(k)}| \leq 1$ for all $k$).

We need $\frac{(0.1)^{n+1}}{(n+1)!} \lt{} 10^{-10}$. Testing: for $n = 5$,
$\frac{(0.1)^6}{6!} = \frac{10^{-6}}{720} \approx 1.39 \times 10^{-9} \gt{} 10^{-10}$.
For $n = 7$: $\frac{(0.1)^8}{8!} = \frac{10^{-8}}{40320} \approx 2.48 \times 10^{-13} \lt{} 10^{-10}$.

So $T_7(0.1) = 0.1 - \frac{(0.1)^3}{6} + \frac{(0.1)^5}{120} - \frac{(0.1)^7}{5040}$
$= 0.1 - 0.00016667 + 0.00000083 - 0.00000000 \approx 0.09983342$.

The error is at most $2.48 \times 10^{-13} \lt{} 10^{-10}$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Find the Maclaurin series for $\ln(1 + x)$ and its radius of convergence</summary>

*Solution.* For $f(x) = \ln(1+x)$: $f(0) = 0$, $f'(x) = 1/(1+x)$, $f''(x) = -1/(1+x)^2$,
$f^{(k)}(x) = (-1)^{k-1}(k-1)!/(1+x)^k$ for $k \geq 1$. So $f^{(k)}(0) = (-1)^{k-1}(k-1)!$.

$$\ln(1+x) = \sum_{k=1}^{\infty} \frac{(-1)^{k-1}(k-1)!}{k!} x^k = \sum_{k=1}^{\infty} \frac{(-1)^{k-1}}{k} x^k$$

By the ratio test: $\lim_{k \to \infty} |a_{k+1}/a_k| = \lim_{k \to \infty} \frac{k}{k+1} |x| = |x|$.
The series converges for $|x| \lt{} 1$ and diverges for $|x| > 1$. At $x = 1$ we get the alternating
harmonic series (converges to $\ln 2$). At $x = -1$ we get the negative harmonic series (diverges).

The radius of convergence is $R = 1$ and the interval of convergence is $(-1, 1]$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Compute the Taylor expansion of $\cos x$ about $a = \pi/3$ with remainder bound</summary>

*Solution.* Compute derivatives: $f(x) = \cos x$, $f'(x) = -\sin x$, $f''(x) = -\cos x$, $f'''(x) = \sin x$,
$f^{(4)}(x) = \cos x$. Evaluated at $a = \pi/3$:

$f(\pi/3) = 1/2$, $f'(\pi/3) = -\sqrt{3}/2$, $f''(\pi/3) = -1/2$, $f'''(\pi/3) = \sqrt{3}/2$.

The third-degree Taylor polynomial is:

$$T_3(x) = \frac{1}{2} - \frac{\sqrt{3}}{2}\left(x - \frac{\pi}{3}\right) - \frac{1}{4}\left(x - \frac{\pi}{3}\right)^2 + \frac{\sqrt{3}}{12}\left(x - \frac{\pi}{3}\right)^3$$

The remainder satisfies $|R_3(x)| \leq \frac{|x - \pi/3|^4}{24}$ (since $|f^{(4)}(\xi)| = |\cos \xi| \leq 1$).

For example, at $x = 1$: $|R_3(1)| \leq \frac{|1 - \pi/3|^4}{24} \approx \frac{0.0472^4}{24} \approx 2.1 \times 10^{-7}$. $\blacksquare$

</details>

:::caution Common Pitfall
L'Hôpital's rule only applies to indeterminate forms $\frac{0}{0}$ and $\frac{\infty}{\infty}$.
Applying it to forms like $\frac{1}{0}$ or $\frac{\infty}{1}$ will give incorrect results. Always
verify the indeterminate form before applying the rule. Also, L'Hôpital's rule requires that the
limit of the quotient of derivatives exists; if it does not exist (oscillates), the original limit
may still exist.
:::

## 6. Riemann Integration

### 6.1 Definition

Let $f : [a,b] \to \mathbb{R}$ be bounded. A **partition** of $[a,b]$ is a finite set
$P = \{x_0, x_1, \ldots, x_n\}$ with $a = x_0 \lt{} x_1 \lt{} \cdots \lt{} x_n = b$.

The **upper sum** and **lower sum** of $f$ with respect to $P$ are:

$$U(f, P) = \sum_{i=1}^{n} M_i \Delta x_i, \quad L(f, P) = \sum_{i=1}^{n} m_i \Delta x_i$$

where $M_i = \sup\{f(x) : x \in [x_{i-1}, x_i]\}$, $m_i = \inf\{f(x) : x \in [x_{i-1}, x_i]\}$, and
$\Delta x_i = x_i - x_{i-1}$.

The **mesh** of $P$ is $\|P\| = \max_{1 \leq i \leq n} \Delta x_i$.

**Definition.** $f$ is **Riemann integrable** on $[a,b]$ if the upper and lower integrals are equal:

$$\overline{\int_a^b} f(x)\, dx = \underline{\int_a^b} f(x)\, dx$$

where $\overline{\int_a^b} f = \inf\{U(f,P) : P \mathrm{\ is\ a\ partition}\}$ and
$\underline{\int_a^b} f = \sup\{L(f,P) : P \mathrm{\ is\ a\ partition}\}$.

The common value is denoted $\int_a^b f(x)\, dx$.

### 6.2 Integrability Criteria

**Theorem 6.1 (Riemann Integrability Criterion).** A bounded function $f : [a,b] \to \mathbb{R}$ is
Riemann integrable if and only if for every $\varepsilon > 0$, there exists a partition $P$ such that

$$U(f,P) - L(f,P) \lt{} \varepsilon$$

**Theorem 6.2.** Every continuous function on $[a,b]$ is Riemann integrable.

*Proof.* Let $f$ be continuous on $[a,b]$. By the Heine-Cantor theorem, $f$ is uniformly continuous.
Given $\varepsilon > 0$, choose $\delta > 0$ such that $|x - y| \lt{} \delta$ implies
$|f(x) - f(y)| \lt{} \varepsilon/(b-a)$.

Let $P$ be any partition with $\|P\| \lt{} \delta$. On each subinterval $[x_{i-1}, x_i]$, by the
Extreme Value Theorem, $f$ attains its maximum $M_i$ and minimum $m_i$. By uniform continuity:
$M_i - m_i \lt{} \varepsilon/(b-a)$. Therefore:

$$U(f,P) - L(f,P) = \sum_{i=1}^{n}(M_i - m_i)\Delta x_i \lt{} \frac{\varepsilon}{b-a} \sum_{i=1}^{n} \Delta x_i = \varepsilon$$

By the Riemann integrability criterion, $f$ is integrable. $\blacksquare$

**Theorem 6.3.** Every monotone function on $[a,b]$ is Riemann integrable.

*Proof.* Assume $f$ is increasing (the decreasing case is analogous). Given $\varepsilon > 0$, let
$P_n$ be the uniform partition with $n$ subintervals of length $(b-a)/n$. On $[x_{i-1}, x_i]$:
$M_i = f(x_i)$ and $m_i = f(x_{i-1})$. Then:

$$U(f, P_n) - L(f, P_n) = \sum_{i=1}^{n} [f(x_i) - f(x_{i-1})] \cdot \frac{b-a}{n} = [f(b) - f(a)] \cdot \frac{b-a}{n}$$

Choose $n$ large enough that $[f(b) - f(a)](b-a)/n \lt{} \varepsilon$. $\blacksquare$

**Theorem 6.4.** A bounded function with finitely many discontinuities on $[a,b]$ is Riemann integrable.

*Proof (sketch).* Let $f$ have discontinuities at $d_1, \ldots, d_m \in [a,b]$. Given $\varepsilon > 0$,
enclose each $d_j$ in a small interval $I_j$ of total length $\varepsilon/(2M)$, where
$M = \sup_{[a,b]} |f|$. On the remaining set (a finite union of closed intervals), $f$ is continuous,
hence uniformly continuous. Choose a partition fine enough that the oscillation of $f$ on each
subinterval outside the $I_j$ is less than $\varepsilon/(2(b-a))$. Then:

$$U(f, P) - L(f, P) \leq \frac{\varepsilon}{2(b-a)} \cdot (b - a) + 2M \cdot \frac{\varepsilon}{2M} = \varepsilon$$

$\blacksquare$

**Proposition 6.4a.** The set of Riemann integrable functions on $[a,b]$ forms a vector space, and
if $f$ and $g$ are integrable, then so are $|f|$, $f^2$, and $\max(f, g)$.

**Theorem 6.4b (Lebesgue's Criterion for Riemann Integrability).** A bounded function $f : [a,b] \to \mathbb{R}$
is Riemann integrable if and only if the set of its discontinuities has (Lebesgue) measure zero.

_Remark._ A set has measure zero if it can be covered by countably many intervals of arbitrarily
small total length. In particular, every countable set has measure zero. This means:

- Every continuous function is integrable (empty set of discontinuities).
- Every function with countably many discontinuities is integrable (Theorem 6.4 is a special case).
- The Dirichlet function $f(x) = 1$ for $x \in \mathbb{Q}$ and $f(x) = 0$ for $x \notin \mathbb{Q}$
  is discontinuous everywhere (set of discontinuities = $[a,b]$, measure $> 0$), hence not integrable.
- Thomae's function $f(x) = 1/q$ if $x = p/q$ in lowest terms, and $f(x) = 0$ if $x$ is irrational,
  is continuous at every irrational and discontinuous at every rational. Since $\mathbb{Q}$ is
  countable (measure zero), Thomae's function is Riemann integrable, with $\int_0^1 f = 0$.

### 6.3 Properties of the Integral

**Theorem 6.5 (Linearity).** If $f$ and $g$ are integrable on $[a,b]$ and $\alpha, \beta \in \mathbb{R}$:

$$\int_a^b (\alpha f + \beta g) = \alpha \int_a^b f + \beta \int_a^b g$$

**Theorem 6.6 (Monotonicity).** If $f(x) \leq g(x)$ for all $x \in [a,b]$, then
$\int_a^b f \leq \int_a^b g$.

**Theorem 6.7 (Triangle Inequality).** $\left|\int_a^b f\right| \leq \int_a^b |f|$.

### 6.4 The Fundamental Theorem of Calculus

**Theorem 6.8 (FTC Part 1).** If $f$ is continuous on $[a,b]$, then the function

$$F(x) = \int_a^x f(t)\, dt$$

is differentiable on $(a,b)$ and $F'(x) = f(x)$.

*Proof.* Let $h > 0$ (the case $h \lt{} 0$ is similar). By the Mean Value Theorem for Integrals
(which follows from the EVT), there exists $\xi \in [x, x+h]$ such that

$$\frac{F(x+h) - F(x)}{h} = \frac{1}{h}\int_x^{x+h} f(t)\, dt = f(\xi)$$

As $h \to 0^+$, we have $\xi \to x^+$ (since $\xi \in [x, x+h]$). By continuity of $f$,
$f(\xi) \to f(x)$. Hence $F'_+(x) = f(x)$. A similar argument gives $F'_-(x) = f(x)$. $\blacksquare$

**Theorem 6.9 (FTC Part 2).** If $F$ is differentiable on $[a,b]$ with $F' = f$ (and $f$ is integrable),
then

$$\int_a^b f(x)\, dx = F(b) - F(a)$$

*Proof.* Let $P = \{x_0, \ldots, x_n\}$ be any partition of $[a,b]$. By the Mean Value Theorem,
for each $i$ there exists $\xi_i \in [x_{i-1}, x_i]$ with $F(x_i) - F(x_{i-1}) = f(\xi_i)\Delta x_i$.
Summing:

$$F(b) - F(a) = \sum_{i=1}^{n} [F(x_i) - F(x_{i-1})] = \sum_{i=1}^{n} f(\xi_i) \Delta x_i$$

The right-hand side is a Riemann sum for $\int_a^b f$. As $\|P\| \to 0$, this converges to the
integral. Hence $F(b) - F(a) = \int_a^b f(x)\, dx$. $\blacksquare$

### 6.5 Worked Examples

**Problem.** Compute $\int_0^1 x^2\, dx$ from the definition.

*Solution.* Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[x_{i-1}, x_i] = [(i-1)/n, i/n]$, $f(x) = x^2$
has $M_i = (i/n)^2$ and $m_i = ((i-1)/n)^2$.

$$U(f, P_n) = \sum_{i=1}^{n} \frac{i^2}{n^2} \cdot \frac{1}{n} = \frac{1}{n^3} \sum_{i=1}^{n} i^2 = \frac{1}{n^3} \cdot \frac{n(n+1)(2n+1)}{6}$$

As $n \to \infty$: $\lim_{n \to \infty} U(f, P_n) = \lim_{n \to \infty} \frac{(n+1)(2n+1)}{6n^2} = \frac{2}{6} = \frac{1}{3}$.

Similarly, $L(f, P_n) \to 1/3$. So $\int_0^1 x^2\, dx = 1/3$. $\blacksquare$

<details>
<summary>Worked Example: Compute $\int_0^1 \sqrt{x}\, dx$ from the definition</summary>

*Solution.* Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[(i-1)/n, i/n]$, $f(x) = \sqrt{x}$ has
$M_i = \sqrt{i/n}$ and $m_i = \sqrt{(i-1)/n}$.

$$U(f, P_n) = \sum_{i=1}^{n} \sqrt{\frac{i}{n}} \cdot \frac{1}{n} = \frac{1}{n^{3/2}} \sum_{i=1}^{n} \sqrt{i}$$

Using $\sum_{i=1}^{n} \sqrt{i} = \frac{2}{3} n^{3/2} + O(n^{1/2})$ (obtained from comparing with
$\int_0^n \sqrt{x}\, dx$):

$$\lim_{n \to \infty} U(f, P_n) = \lim_{n \to \infty} \frac{1}{n^{3/2}} \cdot \frac{2}{3}n^{3/2} = \frac{2}{3}$$

Similarly $L(f, P_n) \to 2/3$, confirming $\int_0^1 \sqrt{x}\, dx = 2/3$. $\blacksquare$

</details>

### 6.6 Improper Integrals

**Definition.** An **improper integral** is a Riemann integral where either the interval of integration
is unbounded or the integrand is unbounded.

**Type I (Infinite Intervals).** If $f$ is Riemann integrable on $[a, b]$ for every $b > a$, define:

$$\int_a^{\infty} f(x)\, dx = \lim_{b \to \infty} \int_a^b f(x)\, dx$$

The integral **converges** if this limit exists as a finite number; otherwise it **diverges**.

**Type II (Unbounded Integrands).** If $f$ is unbounded near $a$ but integrable on $[c, b]$ for every
$c \in (a, b]$:

$$\int_a^b f(x)\, dx = \lim_{c \to a^+} \int_c^b f(x)\, dx$$

**Theorem 6.10 (Comparison Test for Improper Integrals).** If $0 \leq f(x) \leq g(x)$ for $x \geq a$:

- If $\int_a^{\infty} g$ converges, then $\int_a^{\infty} f$ converges.
- If $\int_a^{\infty} f$ diverges, then $\int_a^{\infty} g$ diverges.

**Theorem 6.11 (Absolute Convergence).** If $\int_a^{\infty} |f(x)|\, dx$ converges, then
$\int_a^{\infty} f(x)\, dx$ converges.

**Theorem 6.12 ($p$-Test for Improper Integrals).**

- **Type I:** $\int_1^{\infty} \frac{1}{x^p}\, dx$ converges if and only if $p > 1$.
- **Type II:** $\int_0^1 \frac{1}{x^p}\, dx$ converges if and only if $p < 1$.

*Proof.* For Type I with $p \neq 1$:

$$\int_1^{\infty} x^{-p}\, dx = \lim_{b \to \infty} \left[\frac{x^{1-p}}{1-p}\right]_1^b = \lim_{b \to \infty} \frac{b^{1-p} - 1}{1-p}$$

This converges when $1 - p < 0$, i.e., $p > 1$. For $p = 1$: $\int_1^{\infty} 1/x\, dx = \lim_{b \to \infty} \ln b = \infty$.

For Type II: $\int_0^1 x^{-p}\, dx = \lim_{c \to 0^+} \frac{1 - c^{1-p}}{1-p}$. This converges when
$1 - p > 0$, i.e., $p < 1$. $\blacksquare$

_Remark._ The $p$-test for Type I integrals mirrors the $p$-series test: $\sum 1/n^p$ converges
iff $p > 1$. This is not a coincidence --- the integral test establishes the connection.

<details>
<summary>Worked Example: Evaluate $\int_0^{\infty} e^{-x}\, dx$</summary>

*Solution.* This is a Type I improper integral:

$$\int_0^{\infty} e^{-x}\, dx = \lim_{b \to \infty} \int_0^b e^{-x}\, dx = \lim_{b \to \infty} \left[-e^{-x}\right]_0^b = \lim_{b \to \infty} (-e^{-b} + 1) = 1$$

So the integral converges to $1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Does $\int_1^{\infty} \frac{\sin x}{x}\, dx$ converge?</summary>

*Solution.* The integral $\int_1^{\infty} \left|\frac{\sin x}{x}\right|\, dx$ diverges (compare with
$\int_1^{\infty} \frac{|\sin x|}{x}\, dx \geq \sum_{k=1}^{\infty} \int_{k\pi}^{(k+1)\pi} \frac{|\sin x|}{x}\, dx \geq
\sum_{k=1}^{\infty} \frac{2}{(k+1)\pi}$, which diverges by comparison with the harmonic series).

However, $\int_1^{\infty} \frac{\sin x}{x}\, dx$ converges by **Dirichlet's test for integrals**. Let
$F(b) = \int_1^b \sin x\, dx = \cos 1 - \cos b$, which is bounded by $|\cos 1 - \cos b| \leq 2$.
Since $1/x$ decreases to $0$, by integration by parts:

$$\int_1^b \frac{\sin x}{x}\, dx = \frac{-\cos x}{x}\bigg|_1^b - \int_1^b \frac{\cos x}{x^2}\, dx$$

As $b \to \infty$, the boundary term $\cos b / b \to 0$ and $\int_1^{\infty} \frac{|\cos x|}{x^2}\, dx \leq
\int_1^{\infty} \frac{1}{x^2}\, dx = 1$, so the improper integral converges (conditionally). $\blacksquare$

</details>

<details>
<summary>Worked Example: Evaluate $\int_0^1 \frac{1}{\sqrt{x}}\, dx$ (Type II improper integral)</summary>

*Solution.* The integrand $f(x) = 1/\sqrt{x}$ is unbounded as $x \to 0^+$. Compute:

$$\int_0^1 \frac{1}{\sqrt{x}}\, dx = \lim_{c \to 0^+} \int_c^1 x^{-1/2}\, dx = \lim_{c \to 0^+} \left[2\sqrt{x}\right]_c^1 = \lim_{c \to 0^+} (2 - 2\sqrt{c}) = 2$$

The improper integral converges to $2$. Note that $\int_0^1 x^{-p}\, dx$ converges for $p \lt{} 1$ and
diverges for $p \geq 1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Determine convergence of $\int_1^{\infty} \frac{1}{x^p}\, dx$ for various $p$</summary>

*Solution.* By the $p$-test (Theorem 6.12): $\int_1^{\infty} x^{-p}\, dx$ converges iff $p > 1$.

Specifically:
- $p = 2$: $\int_1^{\infty} 1/x^2\, dx = \lim_{b \to \infty} [-1/x]_1^b = 0 - (-1) = 1$. Converges.
- $p = 1$: $\int_1^{\infty} 1/x\, dx = \lim_{b \to \infty} \ln b = \infty$. Diverges.
- $p = 1/2$: $\int_1^{\infty} 1/\sqrt{x}\, dx = \lim_{b \to \infty} [2\sqrt{x}]_1^b = \infty$. Diverges.

This mirrors the $p$-series test: $\sum 1/n^p$ converges iff $p > 1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Evaluate $\int_0^{\infty} x e^{-x}\, dx$</summary>

*Solution.* This integral requires both a Type I and Type II limit:

$$\int_0^{\infty} x e^{-x}\, dx = \lim_{a \to 0^+} \lim_{b \to \infty} \int_a^b x e^{-x}\, dx$$

Integrate by parts with $u = x$, $dv = e^{-x}\, dx$, so $du = dx$, $v = -e^{-x}$:

$$\int x e^{-x}\, dx = -xe^{-x} + \int e^{-x}\, dx = -xe^{-x} - e^{-x} = -(x+1)e^{-x}$$

Evaluating: $\lim_{b \to \infty} [-(b+1)e^{-b}] - \lim_{a \to 0^+} [-(a+1)e^{-a}] = 0 - (-1) = 1$.

So $\int_0^{\infty} x e^{-x}\, dx = 1$. This equals $\Gamma(2) = 1! = 1$. $\blacksquare$

</details>

:::caution Common Pitfall
The Riemann integral is defined for bounded functions on closed, bounded intervals. For unbounded
functions or infinite intervals, one must use the improper Riemann integral. A common error is
applying the FTC directly to improper integrals without taking the limit. Also, conditional
convergence of improper integrals behaves differently from absolute convergence: rearranging the
"terms" (subintervals) of a conditionally convergent improper integral can change its value.
:::

## 7. Sequences and Series of Functions

### 7.1 Pointwise Convergence

Let $(f_n)$ be a sequence of functions defined on a set $E \subseteq \mathbb{R}$.

**Definition.** $(f_n)$ **converges pointwise** to $f$ on $E$ if for every $x \in E$ and every
$\varepsilon > 0$, there exists $N \in \mathbb{N}$ (depending on both $x$ and $\varepsilon$) such that
$|f_n(x) - f(x)| \lt{} \varepsilon$ for all $n \geq N$.

**Example.** Let $f_n(x) = x^n$ on $E = [0, 1]$. For each $x \in [0, 1)$, $f_n(x) = x^n \to 0$, and
$f_n(1) = 1$ for all $n$. So $f_n$ converges pointwise to

$$f(x) = \begin{cases} 0 & \mathrm{if\ } 0 \leq x \lt{} 1 \\ 1 & \mathrm{if\ } x = 1 \end{cases}$$

Note that each $f_n$ is continuous, but the pointwise limit $f$ is not continuous at $x = 1$.

### 7.2 Uniform Convergence

**Definition.** $(f_n)$ **converges uniformly** to $f$ on $E$ if for every $\varepsilon > 0$, there
exists $N \in \mathbb{N}$ (depending only on $\varepsilon$, not on $x$) such that for all $x \in E$:

$$|f_n(x) - f(x)| \lt{} \varepsilon \quad \mathrm{for\ all\ } n \geq N$$

Equivalently, $\sup_{x \in E} |f_n(x) - f(x)| \to 0$ as $n \to \infty$.

**Proposition 7.1.** Uniform convergence implies pointwise convergence. The converse is false.

**Example (continued).** $f_n(x) = x^n$ on $[0, 1]$ converges pointwise but not uniformly. We have
$\sup_{x \in [0,1]} |f_n(x) - f(x)| = \sup_{x \in [0,1)} x^n = 1$ for all $n$ (since the supremum is
approached as $x \to 1^-$). This does not tend to $0$.

However, on $[0, r]$ for any $r \lt{} 1$: $\sup_{x \in [0,r]} |x^n| = r^n \to 0$, so the convergence
is uniform on $[0, r]$.

### 7.3 The Weierstrass M-Test

**Theorem 7.1 (Weierstrass M-Test).** Let $(f_n)$ be a sequence of functions on $E$. If there exists a
sequence $(M_n)$ of non-negative real numbers such that $|f_n(x)| \leq M_n$ for all $x \in E$ and all
$n$, and $\sum_{n=1}^{\infty} M_n \lt{} \infty$, then $\sum_{n=1}^{\infty} f_n$ converges uniformly on $E$.

*Proof.* Let $S_n(x) = \sum_{k=1}^{n} f_k(x)$ and $T_n = \sum_{k=1}^{n} M_k$. Since $\sum M_k$ converges,
$(T_n)$ is a Cauchy sequence. Given $\varepsilon > 0$, there exists $N$ such that for $m > n \geq N$:

$$T_m - T_n = \sum_{k=n+1}^{m} M_k \lt{} \varepsilon$$

Then for all $x \in E$ and $m > n \geq N$:

$$|S_m(x) - S_n(x)| = \left|\sum_{k=n+1}^{m} f_k(x)\right| \leq \sum_{k=n+1}^{m} |f_k(x)| \leq \sum_{k=n+1}^{m} M_k \lt{} \varepsilon$$

So the partial sums $(S_n)$ satisfy the uniform Cauchy criterion on $E$, hence converge uniformly. $\blacksquare$

### 7.4 Uniform Convergence and Continuity

**Theorem 7.2.** If $(f_n)$ is a sequence of continuous functions on $E$ converging uniformly to $f$
on $E$, then $f$ is continuous on $E$.

*Proof.* Let $c \in E$ and $\varepsilon > 0$. Since $f_n \to f$ uniformly, choose $N$ such that
$|f_N(x) - f(x)| \lt{} \varepsilon/3$ for all $x \in E$. Since $f_N$ is continuous at $c$, choose
$\delta > 0$ such that $|x - c| \lt{} \delta$ implies $|f_N(x) - f_N(c)| \lt{} \varepsilon/3$. Then:

$$|f(x) - f(c)| \leq |f(x) - f_N(x)| + |f_N(x) - f_N(c)| + |f_N(c) - f(c)| \lt{} \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon$$

$\blacksquare$

### 7.5 Uniform Convergence and Integration

**Theorem 7.3.** If $(f_n)$ is a sequence of Riemann integrable functions on $[a, b]$ converging
uniformly to $f$ on $[a, b]$, then $f$ is Riemann integrable and

$$\lim_{n \to \infty} \int_a^b f_n(x)\, dx = \int_a^b f(x)\, dx$$

*Proof.* Since $(f_n)$ converges uniformly, $f$ is the uniform limit of integrable functions. Given
$\varepsilon > 0$, choose $N$ with $\sup |f_N(x) - f(x)| \lt{} \varepsilon/(2(b-a))$ for all $x \in [a, b]$.
Then $f_N - \varepsilon/(2(b-a)) \leq f(x) \leq f_N(x) + \varepsilon/(2(b-a))$ for all $x$, and by
integrability of $f_N$:

$$\int_a^b f_N - \frac{\varepsilon}{2} \leq \underline{\int_a^b} f \leq \overline{\int_a^b} f \leq \int_a^b f_N + \frac{\varepsilon}{2}$$

So $\overline{\int} f - \underline{\int} f \leq \varepsilon$, proving $f$ is integrable. For the limit:

$$\left|\int_a^b f_n - \int_a^b f\right| \leq \int_a^b |f_n - f| \leq (b-a) \cdot \sup_{[a,b]} |f_n - f| \to 0$$

$\blacksquare$

### 7.6 Uniform Convergence and Differentiation

Uniform convergence of functions does **not** guarantee convergence of derivatives. A stronger
hypothesis is needed.

**Theorem 7.4.** Suppose $(f_n)$ is a sequence of differentiable functions on $[a, b]$ such that:

1. $(f_n(c))$ converges for some $c \in [a, b]$
2. $(f_n')$ converges uniformly on $[a, b]$

Then $(f_n)$ converges uniformly to a differentiable function $f$ on $[a, b]$, and $f'(x) = \lim_{n \to \infty} f_n'(x)$.

*Proof.* Let $g = \lim f_n'$ (uniform limit). Define $f(x) = \lim_{n \to \infty} \left[f_n(c) + \int_c^x f_n'(t)\, dt\right]$.
By Theorem 7.3, $\int_c^x f_n'(t)\, dt \to \int_c^x g(t)\, dt$, so $f(x) = f(c) + \int_c^x g(t)\, dt$.
By FTC Part 1, $f$ is differentiable and $f'(x) = g(x)$. Uniform convergence of $f_n$ to $f$ follows
from the estimate $|f_n(x) - f(x)| \leq |f_n(c) - f(c)| + \int_a^b |f_n'(t) - g(t)|\, dt$. $\blacksquare$

### 7.7 Power Series

A **power series** centered at $a$ is a series of the form $\sum_{n=0}^{\infty} c_n (x - a)^n$.

**Theorem 7.5 (Radius of Convergence).** Every power series $\sum c_n (x - a)^n$ has a **radius of
convergence** $R \in [0, \infty]$ such that:

- The series converges absolutely for $|x - a| \lt{} R$
- The series diverges for $|x - a| > R$
- The behavior at $|x - a| = R$ must be checked separately

The radius is given by $1/R = \limsup_{n \to \infty} \sqrt[n]{|c_n|}$ (Cauchy-Hadamard formula), or
when the limit exists, $R = \lim_{n \to \infty} |c_n/c_{n+1}|$.

*Proof.* Apply the root test to $\sum |c_n (x-a)^n|$: $\limsup \sqrt[n]{|c_n|} |x-a| = |x-a|/R$
(where $1/R = \limsup \sqrt[n]{|c_n|}$). The root test gives convergence when $|x-a|/R \lt{} 1$
and divergence when $|x-a|/R > 1$. $\blacksquare$

**Theorem 7.6.** A power series converges uniformly on every compact subset of its open disk of
convergence.

**Theorem 7.6a (Differentiation and Integration of Power Series).** If $f(x) = \sum_{n=0}^{\infty} c_n (x-a)^n$
has radius of convergence $R > 0$, then:

1. $f$ is differentiable on $(a - R, a + R)$ and $f'(x) = \sum_{n=1}^{\infty} n c_n (x - a)^{n-1}$ (same $R$).
2. $f$ is infinitely differentiable on $(a - R, a + R)$, and $f^{(k)}(x) = \sum_{n=k}^{\infty} \frac{n!}{(n-k)!} c_n (x - a)^{n-k}$.
3. $\int_a^x f(t)\, dt = \sum_{n=0}^{\infty} \frac{c_n}{n+1}(x - a)^{n+1}$ for $|x - a| \lt{} R$.
4. $c_n = f^{(n)}(a)/n!$ (uniqueness of power series coefficients).

*Proof.* The differentiated series $\sum n c_n (x-a)^{n-1}$ has the same radius of convergence as
the original (by the Cauchy-Hadamard formula, since $\sqrt[n]{n} \to 1$). By Theorem 7.4, the
derivative of the sum equals the sum of the derivatives. Parts (2), (3), and (4) follow by
induction and the FTC. $\blacksquare$

**Theorem 7.6b (Abel's Theorem).** If $\sum_{n=0}^{\infty} c_n$ converges to $L$, then

$$\lim_{x \to 1^-} \sum_{n=0}^{\infty} c_n x^n = L$$

That is, the power series is continuous from the left at the endpoint $x = 1$.

*Proof (sketch).* Let $s_n = \sum_{k=0}^{n} c_k$ and $s_n \to L$. Write the partial sum
$\sum_{k=0}^{n} c_k x^k = \sum_{k=0}^{n}(s_k - s_{k-1})x^k$ (with $s_{-1} = 0$) and use summation by
parts to express this as $s_n x^n + \sum_{k=0}^{n-1} s_k(x^k - x^{k+1})$. Letting $n \to \infty$ and using
that $s_n \to L$ and $x^n \to 0$ for $|x| \lt{} 1$, one shows the expression tends to $L$ as $x \to 1^-$. $\blacksquare$

_Example._ Since $\sum_{k=1}^{\infty} (-1)^{k+1}/k = \ln 2$, Abel's theorem gives
$\lim_{x \to 1^-} \sum_{k=1}^{\infty} (-1)^{k+1} x^k/k = \ln 2$, i.e., $\ln 2$ is the left-hand limit
of $-\ln(1 - x)$ at $x = 1$.

### 7.8 Taylor Series Convergence

The **Taylor series** of $f$ at $a$ is $\sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$.

**Definition.** A function $f$ is **analytic** at $a$ if its Taylor series at $a$ converges to $f(x)$
in some neighborhood of $a$.

Not every $C^{\infty}$ function is analytic. The standard counterexample is:

$$f(x) = \begin{cases} e^{-1/x^2} & x \neq 0 \\ 0 & x = 0 \end{cases}$$

One can show $f^{(n)}(0) = 0$ for all $n$, so the Taylor series at $0$ is identically zero, which
converges only to $0$, not to $f(x)$ for $x \neq 0$.

### 7.9 Worked Examples

<details>
<summary>Worked Example: Show $\sum_{n=1}^{\infty} \frac{x^n}{n^2}$ converges uniformly on $[-1, 1]$</summary>

*Solution.* For $x \in [-1, 1]$: $\left|\frac{x^n}{n^2}\right| \leq \frac{1}{n^2}$. Since
$\sum_{n=1}^{\infty} \frac{1}{n^2}$ converges (it is a $p$-series with $p = 2 > 1$), the Weierstrass
M-Test with $M_n = 1/n^2$ implies the series converges uniformly on $[-1, 1]$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Find the radius of convergence of $\sum_{n=0}^{\infty} \frac{x^n}{n!}$</summary>

*Solution.* Apply the ratio test to the coefficients: $\lim_{n \to \infty} \left|\frac{c_{n+1}}{c_n}\right|
= \lim_{n \to \infty} \frac{n!}{(n+1)!} = \lim_{n \to \infty} \frac{1}{n+1} = 0$.

So $R = \infty$ and the series converges for all $x \in \mathbb{R}$. This is the power series for
$e^x$. By Theorem 7.4, the derivative of the sum equals $\sum_{n=1}^{\infty} \frac{n x^{n-1}}{n!}
= \sum_{n=1}^{\infty} \frac{x^{n-1}}{(n-1)!} = \sum_{k=0}^{\infty} \frac{x^k}{k!} = e^x$, confirming
that $e^x$ is its own derivative. $\blacksquare$

</details>

<details>
<summary>Worked Example: Find the radius of convergence of $\sum_{n=1}^{\infty} n! \, x^n$</summary>

*Solution.* Apply the ratio test to the coefficients:

$$\lim_{n \to \infty} \left|\frac{c_{n+1}}{c_n}\right| = \lim_{n \to \infty} \frac{(n+1)!}{n!} = \lim_{n \to \infty} (n+1) = \infty$$

So $R = 0$, meaning the series converges only at $x = 0$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Show $f_n(x) = \frac{x}{1 + nx}$ converges uniformly on $[1, \infty)$</summary>

*Solution.* **Pointwise limit:** For $x \geq 1$: $\lim_{n \to \infty} \frac{x}{1 + nx} = \lim_{n \to \infty} \frac{1}{1/x + n} = 0$.

**Uniform convergence:** $\sup_{x \in [1, \infty)} \left|\frac{x}{1 + nx} - 0\right| = \sup_{x \geq 1} \frac{x}{1 + nx}$.
To find the maximum, differentiate with respect to $x$: $\frac{d}{dx}\left(\frac{x}{1+nx}\right) = \frac{1}{(1+nx)^2} > 0$.
So the function is increasing in $x$ on $[1, \infty)$, and:

$$\sup_{x \geq 1} \frac{x}{1 + nx} = \lim_{x \to \infty} \frac{x}{1 + nx} = \frac{1}{n}$$

Since $\sup |f_n| = 1/n \to 0$, the convergence is uniform on $[1, \infty)$. $\blacksquare$

</details>

:::caution Common Pitfall
Pointwise convergence does not preserve continuity, differentiability, or integrability. Uniform
convergence preserves continuity and allows interchange of limit and integral, but not limit and
derivative. For derivatives, uniform convergence of the *sequence of derivatives* (not the original
sequence) is required, as stated in Theorem 7.4. Also, the Weierstrass M-Test applies only to series
of functions, not sequences; for sequences, one must verify the uniform Cauchy criterion directly.
:::

## 8. Problem Set

**Problem 1.** Let $A, B \subseteq \mathbb{R}$ be non-empty and bounded above. Prove that
$\sup(A \cup B) = \max(\sup A, \sup B)$.

<details>
<summary>Solution</summary>

*Solution.* Let $M = \max(\sup A, \sup B)$. Without loss, assume $\sup A \geq \sup B$, so $M = \sup A$.
For all $x \in A \cup B$: either $x \in A$, so $x \leq \sup A = M$; or $x \in B$, so
$x \leq \sup B \leq M$. Thus $M$ is an upper bound for $A \cup B$.

For the least property: since $M = \sup A$ and $A \subseteq A \cup B$, every upper bound of $A \cup B$
is an upper bound of $A$, hence $\geq \sup A = M$. Therefore $\sup(A \cup B) = M$. $\blacksquare$

_If you get this wrong, revise:_ Section 1.3 (Supremum and Infimum), Section 1.5 (Properties).

</details>

**Problem 2.** Prove that $\inf A = -\sup(-A)$ for any non-empty bounded set $A \subseteq \mathbb{R}$.

<details>
<summary>Solution</summary>

*Solution.* Let $u = \sup(-A)$. For all $a \in A$: $-a \in -A$, so $-a \leq u$, giving $a \geq -u$.
Thus $-u$ is a lower bound for $A$. If $v$ is any lower bound for $A$, then $-v$ is an upper bound for
$-A$, so $u \leq -v$, i.e., $-u \geq v$. Hence $-u$ is the greatest lower bound, so $\inf A = -u = -\sup(-A)$.
$\blacksquare$

_If you get this wrong, revise:_ Section 1.5 (Properties of Supremum and Infimum).

</details>

**Problem 3.** Using the $\varepsilon$-$N$ definition, prove that $\lim_{n \to \infty} \frac{n^2 + 3n}{2n^2 + 1} = \frac{1}{2}$.

<details>
<summary>Solution</summary>

*Solution.* Let $\varepsilon > 0$. Compute:

$$\left|\frac{n^2 + 3n}{2n^2 + 1} - \frac{1}{2}\right| = \left|\frac{2(n^2 + 3n) - (2n^2 + 1)}{2(2n^2 + 1)}\right| = \left|\frac{6n - 1}{2(2n^2 + 1)}\right|$$

For $n \geq 1$: $6n - 1 \lt{} 6n$ and $2n^2 + 1 > 2n^2$, so

$$\frac{6n - 1}{2(2n^2 + 1)} \lt{} \frac{6n}{4n^2} = \frac{3}{2n}$$

We need $\frac{3}{2n} \lt{} \varepsilon$, i.e., $n > 3/(2\varepsilon)$. Choose $N = \lceil 3/(2\varepsilon) \rceil$.
For $n \geq N$: the expression is $\lt{} \varepsilon$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.1 (Convergence), Section 2.7 (Worked Examples).

</details>

**Problem 4.** Let $a_1 = 1$ and $a_{n+1} = \frac{1}{2}\left(a_n + \frac{2}{a_n}\right)$. Prove $(a_n)$ converges
and find its limit.

<details>
<summary>Solution</summary>

*Solution.* **Step 1:** $(a_n)$ is bounded below by $\sqrt{2}$. By AM-GM: $a_{n+1} = \frac{1}{2}(a_n + 2/a_n) \geq \sqrt{a_n \cdot 2/a_n} = \sqrt{2}$.

**Step 2:** $(a_n)$ is decreasing for $n \geq 2$. Note $a_1 = 1$, $a_2 = 3/2$.
$a_{n+1} - a_n = \frac{1}{2}(a_n + 2/a_n) - a_n = \frac{1}{2}(2/a_n - a_n) = \frac{2 - a_n^2}{2a_n}$.
Since $a_n \geq \sqrt{2}$ for $n \geq 2$, $a_n^2 \geq 2$, so $a_{n+1} - a_n \leq 0$.

**Step 3:** By the Monotone Convergence Theorem, $L = \lim a_n$ exists. Taking limits:
$L = \frac{1}{2}(L + 2/L)$, giving $2L = L + 2/L$, so $L = 2/L$, hence $L^2 = 2$.
Since $a_n \geq \sqrt{2}$ for $n \geq 2$, $L \geq 0$, so $L = \sqrt{2}$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.2 (Monotone Convergence Theorem), Section 2.7 (recursive sequences).

</details>

**Problem 5.** Compute $\limsup_{n \to \infty} a_n$ and $\liminf_{n \to \infty} a_n$ for $a_n = 2 + (-1)^n \frac{n}{n+1}$.

<details>
<summary>Solution</summary>

*Solution.* Write $a_n = 2 + (-1)^n \cdot \frac{n}{n+1}$.

For even $n = 2k$: $a_{2k} = 2 + \frac{2k}{2k+1} \to 2 + 1 = 3$.
For odd $n = 2k - 1$: $a_{2k-1} = 2 - \frac{2k-1}{2k} \to 2 - 1 = 1$.

Since these are the only two subsequential limits: $\limsup a_n = 3$ and $\liminf a_n = 1$.
The sequence diverges since $\limsup \neq \liminf$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.6 (Limit Superior and Limit Inferior).

</details>

**Problem 6.** Determine whether $\sum_{n=2}^{\infty} \frac{1}{n(\ln n)^2}$ converges.

<details>
<summary>Solution</summary>

*Solution.* Apply the integral test with $f(x) = 1/(x(\ln x)^2)$ on $[2, \infty)$. The function is
positive, continuous, and decreasing. Compute via $u = \ln x$, $du = dx/x$:

$$\int_2^{\infty} \frac{1}{x(\ln x)^2}\, dx = \int_{\ln 2}^{\infty} \frac{1}{u^2}\, du = \left[-\frac{1}{u}\right]_{\ln 2}^{\infty} = \frac{1}{\ln 2} \lt{} \infty$$

The integral converges, so by the integral test, the series converges. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2 (Integral Test), Section 3.6 (Worked Examples).

</details>

**Problem 7.** Does $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^{1/3}}$ converge absolutely, conditionally, or diverge?

<details>
<summary>Solution</summary>

*Solution.* The absolute series is $\sum 1/n^{1/3}$, which is a $p$-series with $p = 1/3 \lt{} 1$,
so it diverges. Hence the series does not converge absolutely.

For conditional convergence, apply the alternating series test: $a_n = 1/n^{1/3}$ is positive,
decreasing, and $a_n \to 0$. Therefore $\sum (-1)^{n+1}/n^{1/3}$ converges.

Since it converges but not absolutely, it converges **conditionally**. $\blacksquare$

_If you get this wrong, revise:_ Section 3.3 (Absolute and Conditional Convergence), Section 3.6 (Alternating Series Test).

</details>

**Problem 8.** Find the sum of $\sum_{n=1}^{\infty} \frac{1}{n(n+2)}$.

<details>
<summary>Solution</summary>

*Solution.* Use partial fractions: $\frac{1}{n(n+2)} = \frac{1}{2}\left(\frac{1}{n} - \frac{1}{n+2}\right)$.
The $N$-th partial sum telescopes:

$$S_N = \frac{1}{2}\left[\left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \cdots + \left(\frac{1}{N} - \frac{1}{N+2}\right)\right]$$

Most terms cancel. The surviving terms are:

$$S_N = \frac{1}{2}\left(1 + \frac{1}{2} - \frac{1}{N+1} - \frac{1}{N+2}\right)$$

As $N \to \infty$: $S_N \to \frac{1}{2}(1 + 1/2) = \frac{3}{4}$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.1 (Definitions and Convergence), telescoping series.

</details>

**Problem 9.** Give an explicit rearrangement of $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$ whose sum is $0$.

<details>
<summary>Solution</summary>

*Solution.* By the Riemann Rearrangement Theorem, such a rearrangement exists. We construct it
explicitly. The positive terms are $1, 1/3, 1/5, \ldots$ and the negative terms are $-1/2, -1/4, -1/6, \ldots$.

Start: $S_1 = 1$. Then add negative terms until we go below $0$:
$S_2 = 1 - 1/2 = 1/2 > 0$. $S_3 = 1 - 1/2 - 1/4 = 1/4 > 0$. $S_4 = 1 - 1/2 - 1/4 - 1/6 = -1/12 \lt{} 0$.

Then add positive terms until we exceed $0$:
$S_5 = -1/12 + 1/3 = 1/4 > 0$.

Then add negative terms until below $0$:
$S_6 = 1/4 - 1/8 = 1/8 > 0$. $S_7 = 1/8 - 1/10 = 1/40 > 0$. $S_8 = 1/40 - 1/12 = -7/120 \lt{} 0$.

Continue this process. Since $\sum 1/(2k-1) = \infty$ and $\sum 1/(2k) = \infty$, we can always
continue. Since $1/n \to 0$, the oscillations shrink to $0$. The resulting rearrangement converges to $0$.
$\blacksquare$

_If you get this wrong, revise:_ Section 3.5 (Rearrangement of Series).

</details>

**Problem 10.** Prove using $\varepsilon$-$\delta$ that $f(x) = x^3$ is continuous at every $a \in \mathbb{R}$.

<details>
<summary>Solution</summary>

*Solution.* Let $a \in \mathbb{R}$ and $\varepsilon > 0$. Compute:

$$|f(x) - f(a)| = |x^3 - a^3| = |x - a| \cdot |x^2 + ax + a^2|$$

Restrict to $|x - a| \lt{} 1$, so $|x| \lt{} |a| + 1$, giving
$|x^2 + ax + a^2| \leq (|a|+1)^2 + |a|(|a|+1) + a^2 = 3a^2 + 3|a| + 1$. Let $M = 3a^2 + 3|a| + 1$.

Choose $\delta = \min(1, \varepsilon/M)$. Then $|x - a| \lt{} \delta$ implies:

$$|x^3 - a^3| \leq |x - a| \cdot M \lt{} \frac{\varepsilon}{M} \cdot M = \varepsilon$$

$\blacksquare$

_If you get this wrong, revise:_ Section 4.2 (Continuity), Section 4.7 (Worked Examples).

</details>

**Problem 11.** Prove that $f(x) = x \sin(1/x)$ (with $f(0) = 0$) is continuous on $\mathbb{R}$ but not
uniformly continuous on $(0, 1)$. (Trick question --- see solution.)

<details>
<summary>Solution</summary>

*Solution.* **Continuity at $0$:** Given $\varepsilon > 0$, choose $\delta = \varepsilon$. For
$|x - 0| = |x| \lt{} \delta$: $|f(x) - f(0)| = |x \sin(1/x)| \leq |x| \lt{} \delta = \varepsilon$.
So $f$ is continuous at $0$. For $x \neq 0$, $f$ is a product of continuous functions, hence continuous.

**On uniform continuity:** Actually, $f(x) = x\sin(1/x)$ **is** uniformly continuous on $(0, 1)$!
Here is why: $f$ extends continuously to $[0, 1]$ (define $f(0) = 0$). By the Heine-Cantor theorem
(Theorem 4.5), $f$ is uniformly continuous on $[0, 1]$, and hence on the subset $(0, 1)$.

The function that is **not** uniformly continuous on $(0, 1)$ is $g(x) = \sin(1/x)$, which does not
extend continuously to $0$. Or $h(x) = 1/x$, which is unbounded. But $f(x) = x\sin(1/x)$ is bounded
and has a continuous extension, so it is uniformly continuous. $\blacksquare$

_If you get this wrong, revise:_ Section 4.5 (Uniform Continuity), Section 4.6 (Heine-Cantor).

</details>

**Problem 12.** Prove that if $f'(x) = g'(x)$ for all $x \in (a, b)$, then $f(x) = g(x) + C$ for some
constant $C$.

<details>
<summary>Solution</summary>

*Solution.* Let $h(x) = f(x) - g(x)$. Then $h'(x) = f'(x) - g'(x) = 0$ for all $x \in (a, b)$.
By Corollary 5.4 (a consequence of the Mean Value Theorem), $h$ is constant on $(a, b)$.
So $f(x) - g(x) = C$ for some $C \in \mathbb{R}$, i.e., $f(x) = g(x) + C$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.3 (Mean Value Theorem, Corollary 5.4).

</details>

**Problem 13.** Use Taylor's theorem with remainder to bound the error in approximating $e^{0.2}$
using the fourth-degree Maclaurin polynomial.

<details>
<summary>Solution</summary>

*Solution.* The fourth-degree Maclaurin polynomial of $e^x$ is:

$$T_4(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24}$$

By Taylor's theorem, $R_4(x) = \frac{e^{\xi}}{5!} x^5$ for some $\xi$ between $0$ and $x$.
For $x = 0.2$: $\xi \in (0, 0.2)$, so $e^{\xi} \lt{} e^{0.2} \lt{} e^{1/4} \lt{} 1.3$.

$$|R_4(0.2)| = \frac{e^{\xi}}{120} (0.2)^5 \lt{} \frac{1.3}{120} \cdot 0.00032 = \frac{1.3 \times 0.00032}{120} \approx 3.47 \times 10^{-6}$$

So $T_4(0.2) = 1 + 0.2 + 0.02 + 0.001333 + 0.000067 = 1.221400$ approximates $e^{0.2}$ with
error less than $3.5 \times 10^{-6}$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.4 (Taylor's Theorem), Section 5.7 (Worked Examples).

</details>

**Problem 14.** Compute $\int_0^1 x^3\, dx$ from the definition using upper and lower Riemann sums.

<details>
<summary>Solution</summary>

*Solution.* Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[(i-1)/n, i/n]$, $f(x) = x^3$ has
$M_i = (i/n)^3$ and $m_i = ((i-1)/n)^3$.

$$U(f, P_n) = \sum_{i=1}^{n} \frac{i^3}{n^3} \cdot \frac{1}{n} = \frac{1}{n^4} \sum_{i=1}^{n} i^3 = \frac{1}{n^4} \cdot \frac{n^2(n+1)^2}{4}$$

As $n \to \infty$:

$$\lim_{n \to \infty} U(f, P_n) = \lim_{n \to \infty} \frac{(n+1)^2}{4n^2} = \frac{1}{4}$$

Similarly, $L(f, P_n) \to 1/4$. So $\int_0^1 x^3\, dx = 1/4$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.1 (Definition), Section 6.5 (Worked Examples).

</details>

**Problem 14b.** Show that the Dirichlet function $f(x) = \begin{cases} 1 & x \in \mathbb{Q} \\ 0 & x \notin \mathbb{Q} \end{cases}$ is not Riemann integrable on $[0, 1]$.

<details>
<summary>Solution</summary>

*Solution.* Every non-empty subinterval $[x_{i-1}, x_i]$ of any partition contains both rational and
irrational numbers (by density of $\mathbb{Q}$ and density of $\mathbb{R} \setminus \mathbb{Q}$). So
$M_i = \sup f = 1$ and $m_i = \inf f = 0$ for every subinterval.

For any partition $P$: $U(f, P) = \sum 1 \cdot \Delta x_i = 1$ and $L(f, P) = \sum 0 \cdot \Delta x_i = 0$.
Hence $\overline{\int_0^1} f = 1 \neq 0 = \underline{\int_0^1} f$, so $f$ is not Riemann integrable.

This also follows from Lebesgue's criterion: $f$ is discontinuous everywhere, and $[0,1]$ does not
have measure zero. $\blacksquare$

_If you get this wrong, revise:_ Section 6.2 (Integrability Criteria), Theorem 6.4b.

</details>

**Problem 15.** Evaluate $\int_0^1 \frac{x}{\sqrt{1 - x^2}}\, dx$ as an improper integral.

<details>
<summary>Solution</summary>

*Solution.* The integrand $f(x) = x/\sqrt{1 - x^2}$ is unbounded as $x \to 1^-$. This is a Type II
improper integral.

$$\int_0^1 \frac{x}{\sqrt{1 - x^2}}\, dx = \lim_{b \to 1^-} \int_0^b \frac{x}{\sqrt{1 - x^2}}\, dx$$

Compute via substitution $u = 1 - x^2$, $du = -2x\, dx$:

$$= \lim_{b \to 1^-} \left[-\sqrt{1 - x^2}\right]_0^b = \lim_{b \to 1^-} \left(-\sqrt{1 - b^2} + 1\right) = 0 + 1 = 1$$

The improper integral converges to $1$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.6 (Improper Integrals).

</details>

**Problem 16.** Let $f_n(x) = \frac{nx}{1 + n^2 x^2}$ on $(0, \infty)$. Find the pointwise limit and
determine whether the convergence is uniform on $(0, \infty)$.

<details>
<summary>Solution</summary>

*Solution.* **Pointwise limit:** For fixed $x > 0$: $\lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} \frac{nx}{1 + n^2 x^2} = \lim_{n \to \infty} \frac{x/n}{1/n^2 + x^2} = 0$.

So $f_n \to 0$ pointwise on $(0, \infty)$.

**Uniform convergence?** We check $\sup_{x > 0} |f_n(x) - 0| = \sup_{x > 0} \frac{nx}{1 + n^2 x^2}$.
To maximize, differentiate with respect to $x$ (treating $n$ as fixed):

$$\frac{d}{dx}\left(\frac{nx}{1 + n^2 x^2}\right) = \frac{n(1 + n^2 x^2) - nx \cdot 2n^2 x}{(1 + n^2 x^2)^2} = \frac{n - n^3 x^2}{(1 + n^2 x^2)^2}$$

Setting to zero: $n - n^3 x^2 = 0$, so $x = 1/n$. The maximum value is $f_n(1/n) = \frac{n \cdot 1/n}{1 + n^2/n^2} = \frac{1}{2}$.

Since $\sup_{x > 0} |f_n(x)| = 1/2$ for all $n$, this does not tend to $0$. Therefore the convergence
is **not uniform** on $(0, \infty)$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.2 (Uniform Convergence), Section 7.1 (Pointwise Convergence).

</details>

**Problem 17.** Find the radius of convergence of $\sum_{n=1}^{\infty} \frac{(2n)!}{(n!)^2} x^n$.

<details>
<summary>Solution</summary>

*Solution.* Apply the ratio test to the terms:

$$\left|\frac{a_{n+1}}{a_n}\right| = \frac{(2(n+1))!}{((n+1)!)^2} \cdot \frac{(n!)^2}{(2n)!} \cdot |x| = \frac{(2n+2)(2n+1)}{(n+1)^2} \cdot |x|$$

$$= \frac{2(2n+1)}{n+1} \cdot |x| = \frac{4n + 2}{n + 1} \cdot |x| \to 4|x| \quad \mathrm{as\ } n \to \infty$$

The series converges when $4|x| \lt{} 1$, i.e., $|x| \lt{} 1/4$, and diverges when $4|x| > 1$.
The radius of convergence is $R = 1/4$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.7 (Power Series), Section 3.2 (Ratio Test).

</details>

**Problem 18.** Let $f_n(x) = x^n/n$ on $[0, 1]$. Show that $f_n \to 0$ uniformly, but
$f_n'(x) = x^{n-1}$ does not converge uniformly on $(0, 1)$.

<details>
<summary>Solution</summary>

*Solution.* **Uniform convergence of $f_n$:** $\sup_{x \in [0,1]} |x^n/n| = 1/n \to 0$ as
$n \to \infty$. So $f_n \to 0$ uniformly on $[0, 1]$.

**Non-uniform convergence of $f_n'$:** $f_n'(x) = x^{n-1}$. The pointwise limit is $g(x) = 0$ for
$0 \leq x \lt{} 1$ and $g(1) = 1$. So $\sup_{x \in [0,1]} |f_n'(x) - g(x)| \geq |f_n'(1) - g(1)| = |1 - 1| = 0$.

Actually, check $\sup_{x \in [0,1)} |x^{n-1}| = 1$ (approached as $x \to 1^-$). But
$g(x) = 0$ on $[0, 1)$, so $\sup_{x \in [0,1)} |x^{n-1} - 0| = 1$ for all $n$. This does not
tend to $0$, so $f_n'$ does not converge uniformly on $[0, 1)$.

This illustrates that uniform convergence of functions does not imply uniform convergence of
derivatives, which is why Theorem 7.4 requires the stronger hypothesis of uniform convergence of
$(f_n')$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.2 (Uniform Convergence), Section 7.6 (Uniform Convergence and Differentiation).

</details>

**Problem 19.** Let $f_n(x) = \frac{x}{1 + nx^2}$ on $[0, \infty)$. Find the pointwise limit and determine
whether the convergence is uniform.

<details>
<summary>Solution</summary>

*Solution.* **Pointwise limit:** For $x = 0$: $f_n(0) = 0$ for all $n$. For $x > 0$:
$\lim_{n \to \infty} \frac{x}{1 + nx^2} = \lim_{n \to \infty} \frac{1}{1/x + nx} = 0$. So $f_n \to 0$ pointwise.

**Uniform convergence on $[0, \infty)$?** We check $\sup_{x \geq 0} |f_n(x)|$. Differentiate:
$\frac{d}{dx}\left(\frac{x}{1 + nx^2}\right) = \frac{1 - nx^2}{(1 + nx^2)^2}$. Setting to zero: $x = 1/\sqrt{n}$.
The maximum value is $f_n(1/\sqrt{n}) = \frac{1/\sqrt{n}}{1 + n/n} = \frac{1}{2\sqrt{n}}$.

Since $\sup_{x \geq 0} |f_n(x)| = \frac{1}{2\sqrt{n}} \to 0$ as $n \to \infty$, the convergence **is**
uniform on $[0, \infty)$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.2 (Uniform Convergence).

</details>

**Problem 20.** Prove that the series $\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} x^{2n+1}$ converges uniformly on
$[-1, 1]$ and identify its sum.

<details>
<summary>Solution</summary>

*Solution.* For $|x| \leq 1$: $\left|\frac{(-1)^n x^{2n+1}}{2n+1}\right| \leq \frac{1}{2n+1}$.
The series $\sum \frac{1}{2n+1}$ diverges (it dominates half the harmonic series), so the Weierstrass
M-test does not apply directly with these bounds.

However, by the alternating series test, the series converges pointwise for every $|x| \leq 1$
(since $\frac{|x|^{2n+1}}{2n+1}$ decreases to $0$ for $|x| \leq 1$). The sum is $\arctan x$,
which is the Taylor series of $\arctan$ about $0$.

For uniform convergence, we use **Abel's test for uniform convergence of series**: if
$\sum f_n(x)$ has uniformly bounded partial sums and $g_n(x)$ decreases uniformly to $0$, then
$\sum f_n(x) g_n(x)$ converges uniformly. Here $f_n(x) = (-1)^n x^{2n+1}$ and $g_n(x) = 1/(2n+1)$
is independent of $x$.

The partial sums $\left|\sum_{k=0}^{n} (-1)^k x^{2k+1}\right| \leq \frac{|x|}{1 + x^2} \leq \frac{1}{2}$ for
$|x| \leq 1$ (geometric series bound). And $1/(2n+1) \to 0$ uniformly. By Abel's test, the
convergence is uniform on $[-1, 1]$.

Setting $x = 1$: $\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} = \arctan 1 = \pi/4$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.3 (Weierstrass M-Test), Section 7.7 (Power Series), Abel's theorem.

</details>
