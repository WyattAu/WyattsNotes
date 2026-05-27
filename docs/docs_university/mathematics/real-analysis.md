---
title: Real Analysis
description:
  'University-level notes on Real Analysis: 1. The Real Number System; 1.1 Field Axioms; 1.2 Order
  and the Completeness Axiom; 1.3 Supremum and Infimum.'
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

The real numbers $\mathbb◆LB◆R◆RB◆$ form a **complete ordered field**. The field axioms guarantee closure
Under addition, subtraction, multiplication, and division (by non-zero elements), together with the
Usual commutative, associative, and distributive laws.

### 1.2 Order and the Completeness Axiom

The order relation $\leq$ on $\mathbb◆LB◆R◆RB◆$ satisfies:

1. **Reflexivity**: $a \leq a$
2. **Antisymmetry**: $a \leq b$ and $b \leq a$ implies $a = b$
3. **Transitivity**: $a \leq b$ and $b \leq c$ implies $a \leq c$
4. **Totality**: for all $a, b$Either $a \leq b$ or $b \leq a$
5. **Compatibility with addition**: $a \leq b$ implies $a + c \leq b + c$
6. **Compatibility with multiplication**: $a \leq b$ and $0 \leq c$ implies $ac \leq bc$

The **completeness axiom** (also called the **least upper bound property**) is what distinguishes
$\mathbb◆LB◆R◆RB◆$ from $\mathbb◆LB◆Q◆RB◆$:

**Axiom (Completeness).** Every non-empty subset of $\mathbb◆LB◆R◆RB◆$ that is bounded above has a **least
Upper bound** (supremum) in $\mathbb◆LB◆R◆RB◆$.

### 1.3 Supremum and Infimum

Let $S \subseteq \mathbb◆LB◆R◆RB◆$ be a non-empty set that is bounded above.

**Definition.** The **supremum** (or least upper bound) of $S$Denoted $\sup(S)$Is the real number
$u$ satisfying:

1. $u$ is an upper bound: $s \leq u$ for all $s \in S$.
2. $u$ is the least upper bound: if $v$ is any upper bound of $S$Then $u \leq v$.

Similarly, the **infimum** (or greatest lower bound), $\inf(S)$Is the greatest number $l$ such that
$l \leq s$ for all $s \in S$.

**Proposition 1.1.** $\sup(S)$ exists if and only if $S$ is non-empty and bounded above.

**Proposition 1.2 (Approximation Property).** If $u = \sup(S)$Then for every $\varepsilon > 0$There
Exists $s \in S$ such that $u - \varepsilon \lt s \leq u$.

_Proof._ If no such $s$ existed, then $u - \varepsilon$ would be an upper bound of $S$ strictly less
Than $u$Contradicting the definition of $\sup(S)$. $\blacksquare$

**Example.** Let $S = \{x \in \mathbb◆LB◆R◆RB◆ : x^2 \lt 2\}$. Then $\sup(S) = \sqrt◆LB◆2◆RB◆$. Note that
$\sqrt◆LB◆2◆RB◆
\notin \mathbb◆LB◆Q◆RB◆$, so $\mathbb◆LB◆Q◆RB◆$ does not satisfy the completeness axiom.

### 1.4 Archimedean Property

**Theorem 1.1 (Archimedean Property).** For every $x \in \mathbb◆LB◆R◆RB◆$There exists $n \in \mathbb◆LB◆N◆RB◆$
Such that $n \gt x$.

_Proof._ Suppose, for contradiction, that $\mathbb◆LB◆N◆RB◆$ is bounded above. By the completeness axiom,
$s = \sup(\mathbb◆LB◆N◆RB◆)$ exists in $\mathbb◆LB◆R◆RB◆$. Then $s - 1$ is not an upper bound for $\mathbb◆LB◆N◆RB◆$
So there exists $n \in \mathbb◆LB◆N◆RB◆$ with $n \gt s - 1$I.e., $n + 1 \gt s$. But $n + 1 \in \mathbb◆LB◆N◆RB◆$
Contradicting that $s$ is an upper bound. $\blacksquare$

**Corollary 1.2.** For every $\varepsilon > 0$There exists $n \in \mathbb◆LB◆N◆RB◆$ such that
$1/n \lt \varepsilon$.

_Proof._ By the Archimedean property, choose $n \in \mathbb◆LB◆N◆RB◆$ with $n \gt 1/\varepsilon$. Then
$1/n \lt \varepsilon$. $\blacksquare$

**Corollary 1.3 (Density of $\mathbb◆LB◆Q◆RB◆$).** Between any two distinct real numbers $a \lt b$There
Exists a rational number $q \in \mathbb◆LB◆Q◆RB◆$ with $a \lt q \lt b$.

_Proof._ Since $b - a > 0$By Corollary 1.2 there exists $n \in \mathbb◆LB◆N◆RB◆$ with $1/n \lt b - a$ So
$1 \lt n(b - a) = nb - na$. Let $m = \lfloor na \rfloor + 1 \in \mathbb◆LB◆Z◆RB◆$. Then
$m - 1 \leq na \lt m$ Giving $m \leq na + 1 \lt na + n(b - a) = nb$. Hence $a \lt m/n \lt b$And
$m/n \in \mathbb◆LB◆Q◆RB◆$. $\blacksquare$

### 1.5 Properties of Supremum and Infimum

**Proposition 1.4.** If $A$ and $B$ are non-empty bounded subsets of $\mathbb◆LB◆R◆RB◆$Then
$\sup(A + B) = \sup(A) + \sup(B)$Where $A + B = \{a + b : a \in A, b \in B\}$.

_Proof._ For all $a \in A$ and $b \in B$: $a \leq \sup(A)$ and $b \leq \sup(B)$So
$a + b \leq \sup(A) + \sup(B)$. Thus $\sup(A) + \sup(B)$ is an upper bound for $A + B$So
$\sup(A + B) \leq \sup(A) + \sup(B)$.

For the reverse inequality, let $\varepsilon > 0$. By the approximation property, there exist
$a \in A$ And $b \in B$ with $a > \sup(A) - \varepsilon/2$ and $b > \sup(B) - \varepsilon/2$. Then
$a + b > \sup(A) + \sup(B) - \varepsilon$So $\sup(A + B) \geq \sup(A) + \sup(B) - \varepsilon$.
Since $\varepsilon > 0$ is arbitrary, $\sup(A + B) \geq \sup(A) + \sup(B)$. $\blacksquare$

**Proposition 1.5.** For any non-empty bounded set $S \subseteq \mathbb◆LB◆R◆RB◆$, $\inf(S) = -\sup(-S)$
Where $-S = \{-s : s \in S\}$.

_Proof._ Let $u = \sup(-S)$. Then $-s \leq u$ for all $s \in S$So $s \geq -u$ for all $s \in S$
Meaning $-u$ is a lower bound for $S$. If $v$ is any lower bound for $S$Then $-v$ is an upper bound
For $-S$So $u \leq -v$I.e., $-u \geq v$. Hence $-u = \inf(S)$. $\blacksquare$

<details>
<summary>Worked Example: Find $\sup$ and $\inf$ of $S = \{(-1)^n + 1/n : n \in \mathbb◆LB◆N◆RB◆\}$</summary>

_Solution._ The first few terms are $0, 3/2, -2/3, 5/4, -4/5, 7/6, \ldots$.

For even $n = 2k$: $(-1)^◆LB◆2k◆RB◆ + 1/(2k) = 1 + 1/(2k)$Which decreases toward $1$ from above. For odd
$n = 2k-1$: $(-1)^◆LB◆2k-1◆RB◆ + 1/(2k-1) = -1 + 1/(2k-1)$Which increases toward $-1$ from below.

The even terms form the sequence $3/2, 5/4, 7/6, \ldots$ with limit $1$So $\sup(S) = 3/2$ (the first
even term). The odd terms form $0, -2/3, -4/5, \ldots$ with limit $-1$And since $0$ Is an
odd-indexed term, $\inf(S) = -1$ (approached but not attained). $\blacksquare$

</details>

### 1.6 Construction of $\mathbb◆LB◆R◆RB◆$ via Dedekind Cuts

_Remark._ The following outline shows how $\mathbb◆LB◆R◆RB◆$ can be constructed from $\mathbb◆LB◆Q◆RB◆$Making
The completeness axiom a theorem rather than an axiom.

**Definition (Dedekind Cut).** A **Dedekind cut** is a subset $\alpha \subseteq \mathbb◆LB◆Q◆RB◆$
satisfying:

1. $\alpha \neq \emptyset$ and $\alpha \neq \mathbb◆LB◆Q◆RB◆$
2. If $p \in \alpha$ and $q \lt p$ (with $q \in \mathbb◆LB◆Q◆RB◆$), then $q \in \alpha$ (downward closure)
3. $\alpha$ has no greatest element: for every $p \in \alpha$There exists $q \in \alpha$ with
   $p \lt q$

**Definition.** The set of real numbers $\mathbb◆LB◆R◆RB◆$ is defined as the set of all Dedekind cuts.

The order, addition, and multiplication are defined as follows:

- **Order:** $\alpha \lt \beta$ if and only if $\alpha \subsetneq \beta$
- **Addition:** $\alpha + \beta = \{p + q : p \in \alpha, q \in \beta\}$
- **Multiplication:** For $\alpha, \beta \geq 0^*$:
  $\alpha \cdot \beta = \{p \cdot q : p \in \alpha, q \in \beta, p \geq 0, q \geq 0\} \cup \{r \in \mathbb◆LB◆Q◆RB◆ : r \lt 0\}$

Here $0^* = \{q \in \mathbb◆LB◆Q◆RB◆ : q \lt 0\}$ represents the real number $0$.

**Theorem.** With these definitions, $\mathbb◆LB◆R◆RB◆$ is a complete ordered field, and $\mathbb◆LB◆Q◆RB◆$
embeds Into $\mathbb◆LB◆R◆RB◆$ via $q \mapsto \{r \in \mathbb◆LB◆Q◆RB◆ : r \lt q\}$.

_Proof (sketch)._ Verifying the field axioms and order axioms is lengthy but straightforward. The
key Step is the completeness axiom: if $\mathcal◆LB◆A◆RB◆$ is a non-empty set of Dedekind cuts bounded
above, Then $\alpha = \bigcup_◆LB◆\beta \in \mathcal◆LB◆A◆RB◆◆RB◆ \beta$ is itself a Dedekind cut and
$\alpha = \sup(\mathcal◆LB◆A◆RB◆)$. $\blacksquare$

### 1.7 Equivalences of Completeness

The completeness axiom can be formulated in several equivalent ways. Each implies the others:

1. **Least Upper Bound Property:** Every non-empty set bounded above has a supremum.
2. **Monotone Convergence Theorem:** Every bounded monotone sequence converges.
3. **Nested Interval Property:** Every nested sequence of closed intervals
   $I_1 \supseteq I_2 \supseteq \cdots$ with $\mathrm◆LB◆length(I_n) \to 0$ has exactly one point in
   $\bigcap I_n$.
4. **Bolzano-Weierstrass Property:** Every bounded sequence has a convergent subsequence.
5. **Cauchy Completeness:** Every Cauchy sequence converges.

**Proposition 1.6.** In any ordered field, (1) $\iff$ (2) $\iff$ (3) $\iff$ (4) $\iff$ (5).

_Proof (outline)._ We have shown $(1) \Rightarrow (2)$ (MCT in Section 2.2), $(2) \Rightarrow (4)$
(via the bisection argument in Bolzano-Weierstrass), $(4) \Rightarrow (5)$ (Cauchy completeness
proof In Section 2.3), and $(5) \Rightarrow (1)$ can be shown by constructing a Cauchy sequence
converging To $\sup S$ from the approximation property. The equivalence $(1) \Rightarrow (3)$
follows from the Nested interval argument, and $(3) \Rightarrow (1)$ follows by constructing nested
intervals that Shrink to $\sup S$. $\blacksquare$

_Remark._ The field $\mathbb◆LB◆Q◆RB◆$ satisfies none of these properties, which is why it must be
Extended to $\mathbb◆LB◆R◆RB◆$ for analysis.

:::caution Common Pitfall The completeness axiom is often misstated as "every bounded set has a
supremum." The set must be Non-empty. Also, completeness does not say every set has a maximum;
$\sup(S)$ need not belong to $S$. For example, $\sup\{1/n : n \in \mathbb◆LB◆N◆RB◆\} = 1$Which belongs to
the set, but $\sup(0, 1) = 1$Which does not belong to $(0, 1)$. :::

## 2. Sequences and Limits

### 2.1 Convergence

A sequence $(a_n)_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆$ in $\mathbb◆LB◆R◆RB◆$ **converges** to a limit $L \in \mathbb◆LB◆R◆RB◆$ if for
Every $\varepsilon > 0$There exists $N \in \mathbb◆LB◆N◆RB◆$ such that

$$|a_n - L| \lt \varepsilon \quad \mathrm◆LB◆for\ all\  n \geq N$$

We write $a_n \to L$ or $\lim_◆LB◆n \to \infty◆RB◆ a_n = L$. A sequence that does not converge is said to
**diverge**.

**Proposition 2.1 (Uniqueness of Limits).** If $(a_n)$ converges, its limit is unique.

_Proof._ Suppose $a_n \to L$ and $a_n \to M$ with $L \neq M$. Let $\varepsilon = |L - M|/2 > 0$.
There Exists $N_1$ such that $|a_n - L| \lt \varepsilon$ for $n \geq N_1$And $N_2$ such that
$|a_n - M| \lt \varepsilon$ for $n \geq N_2$. For $n \geq \max(N_1, N_2)$:

$$|L - M| \leq |a_n - L| + |a_n - M| \lt 2\varepsilon = |L - M|$$

A contradiction. $\blacksquare$

**Proposition 2.2.** Every convergent sequence is bounded.

_Proof._ Let $a_n \to L$. Taking $\varepsilon = 1$There exists $N$ such that $|a_n - L| \lt 1$ for
All $n \geq N$. Then $|a_n| \leq |L| + 1$ for $n \geq N$. Let
$M = \max\{|a_1|, |a_2|, \ldots, |a_◆LB◆N-1◆RB◆|, |L| + 1\}$. Then $|a_n| \leq M$ for all $n$.
$\blacksquare$

### 2.2 Convergence Theorems

**Theorem 2.1 (Algebra of Limits).** If $a_n \to L$ and $b_n \to M$Then:

1. $a_n + b_n \to L + M$
2. $a_n b_n \to LM$
3. $a_n / b_n \to L/M$ (provided $M \neq 0$ and $b_n \neq 0$ for all $n$)

**Theorem 2.2 (Squeeze Theorem).** If $a_n \leq b_n \leq c_n$ for all $n$ and $a_n \to L$
$c_n \to L$Then $b_n \to L$.

**Theorem 2.3 (Monotone Convergence Theorem).** Every bounded monotone sequence in $\mathbb◆LB◆R◆RB◆$
converges. Specifically:

- Every bounded increasing sequence converges to its supremum.
- Every bounded decreasing sequence converges to its infimum.

_Proof._ Let $(a_n)$ be bounded and increasing. By the completeness axiom,
$s = \sup\{a_n : n \in \mathbb◆LB◆N◆RB◆\}$ exists. Let $\varepsilon > 0$. By the approximation property,
There exists $N$ such that $s - \varepsilon \lt a_N \leq s$. Since $(a_n)$ is increasing,
$a_n \geq a_N > s - \varepsilon$ for all $n \geq N$. Also $a_n \leq s$ for all $n$. Hence
$|a_n - s| \lt \varepsilon$ for all $n \geq N$. $\blacksquare$

### 2.3 Cauchy Sequences

A sequence $(a_n)$ is a **Cauchy sequence** if for every $\varepsilon > 0$There exists
$N \in
\mathbb◆LB◆N◆RB◆$ such that

$$|a_n - a_m| \lt \varepsilon \quad \mathrm◆LB◆for\ all\  m, n \geq N$$

**Theorem 2.4.** Every convergent sequence is Cauchy.

_Proof._ Let $a_n \to L$. Given $\varepsilon > 0$Choose $N$ such that $|a_n - L| \lt \varepsilon/2$
For all $n \geq N$. Then for $m, n \geq N$:
$|a_n - a_m| \leq |a_n - L| + |a_m - L| \lt \varepsilon$. $\blacksquare$

**Theorem 2.5 (Cauchy Completeness of $\mathbb◆LB◆R◆RB◆$).** Every Cauchy sequence in $\mathbb◆LB◆R◆RB◆$
converges.

_Proof._ Let $(a_n)$ be Cauchy. First, $(a_n)$ is bounded: choose $N$ with $|a_n - a_m| \lt 1$ for
$m, n \geq N$. Then $|a_n| \leq |a_N| + 1$ for $n \geq N$. By the Bolzano-Weierstrass theorem
(Theorem 2.6 below), $(a_n)$ has a convergent subsequence $(a_◆LB◆n_k◆RB◆) \to L$. We show $a_n \to L$.

Given $\varepsilon > 0$Choose $N_1$ so that $|a_n - a_m| \lt \varepsilon/2$ for $m, n \geq N_1$ And
$K$ so that $|a_◆LB◆n_k◆RB◆ - L| \lt \varepsilon/2$ for $k \geq K$. For $n \geq N_1$Choose $k \geq K$ with
$n_k \geq N_1$ (possible since $n_k \to \infty$). Then

$$|a_n - L| \leq |a_n - a_◆LB◆n_k◆RB◆| + |a_◆LB◆n_k◆RB◆ - L| \lt \varepsilon/2 + \varepsilon/2 = \varepsilon$$

$\blacksquare$

### 2.4 Subsequences

A **subsequence** of $(a_n)$ is a sequence $(a_◆LB◆n_k◆RB◆)_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆$ where
$n_1 \lt n_2 \lt n_3 \lt \cdots$.

**Proposition 2.3.** If $a_n \to L$Then every subsequence $(a_◆LB◆n_k◆RB◆) \to L$.

**Proposition 2.4.** If $(a_n)$ has two subsequences converging to different limits, then $(a_n)$
diverges.

### 2.5 The Bolzano-Weierstrass Theorem

**Theorem 2.6 (Bolzano-Weierstrass).** Every bounded sequence in $\mathbb◆LB◆R◆RB◆$ has a convergent
subsequence.

_Proof._ Let $(a_n)$ be bounded, so $a_n \in [A, B]$ for all $n$. Set $I_0 = [A, B]$. Bisect $I_0$
into $[A, (A+B)/2]$ and $[(A+B)/2, B]$. At least one contains infinitely many terms of $(a_n)$; call
it $I_1$. Having constructed $I_k = [l_k, r_k]$Bisect it and select $I_◆LB◆k+1◆RB◆$ as the half containing
Infinitely many terms of $(a_n)$.

This produces a nested sequence of closed intervals
$I_0 \supseteq I_1 \supseteq I_2 \supseteq \cdots$ With $\mathrm◆LB◆length(I_k) = (B - A)/2^k \to 0$.
By the **Nested Interval Property** (which follows From completeness),
$\bigcap_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ I_k = \{c\}$ for some $c \in [A, B]$.

Construct the subsequence inductively: pick $n_1$ with $a_◆LB◆n_1◆RB◆ \in I_1$. Having chosen
$n_1 \lt n_2 \lt \cdots \lt n_◆LB◆k-1◆RB◆$Pick $n_k > n_◆LB◆k-1◆RB◆$ with $a_◆LB◆n_k◆RB◆ \in I_k$ (possible since
$I_k$ contains infinitely many terms). Then $a_◆LB◆n_k◆RB◆ \in I_k$ for all $k$So
$|a_◆LB◆n_k◆RB◆ - c| \leq \mathrm◆LB◆length(I_k) \to 0$. Hence $a_◆LB◆n_k◆RB◆ \to c$. $\blacksquare$

### 2.6 Limit Superior and Limit Inferior

Let $(a_n)$ be a bounded sequence. Define:

$$\limsup_◆LB◆n \to \infty◆RB◆ a_n = \inf_◆LB◆n \geq 1◆RB◆ \sup_◆LB◆k \geq n◆RB◆ a_k, \qquad \liminf_◆LB◆n \to \infty◆RB◆ a_n = \sup_◆LB◆n \geq 1◆RB◆ \inf_◆LB◆k \geq n◆RB◆ a_k$$

**Proposition 2.5.** For every bounded sequence $(a_n)$:
$$\liminf_◆LB◆n \to \infty◆RB◆ a_n \leq \limsup_◆LB◆n \to \infty◆RB◆ a_n$$

_Proof._ For any $n$, $\inf_◆LB◆k \geq n◆RB◆ a_k \leq a_n \leq \sup_◆LB◆k \geq n◆RB◆ a_n$. Taking supremum over
$n$ on the left: $\liminf a_n \leq \sup_◆LB◆k \geq n◆RB◆ a_k$ for every $n$. Taking infimum over $n$ on
The right gives $\liminf a_n \leq \limsup a_n$. $\blacksquare$

**Proposition 2.6.** $(a_n)$ converges if and only if $\liminf a_n = \limsup a_n$In which case the
Common value equals $\lim a_n$.

_Proof._ If $a_n \to L$Then for every $\varepsilon > 0$There exists $N$ such that
$L - \varepsilon \lt a_n \lt L + \varepsilon$ for $n \geq N$. Hence
$\sup_◆LB◆k \geq n◆RB◆ a_k \leq L + \varepsilon$ For $n \geq N$So $\limsup a_n \leq L + \varepsilon$.
Since $\varepsilon > 0$ is arbitrary, $\limsup a_n \leq L$. Similarly $\liminf a_n \geq L$. Combined
with Proposition 2.5, $\liminf a_n = \limsup a_n = L$.

Conversely, if $\liminf a_n = \limsup a_n = L$Then for every $\varepsilon > 0$There exists $N_1$
With $\sup_◆LB◆k \geq n◆RB◆ a_k \lt L + \varepsilon$ for $n \geq N_1$And $N_2$ with
$\inf_◆LB◆k \geq n◆RB◆ a_k > L - \varepsilon$ for $n \geq N_2$. For $n \geq \max(N_1, N_2)$:
$L - \varepsilon \lt a_n \lt L + \varepsilon$So $a_n \to L$. $\blacksquare$

**Proposition 2.7.** $\limsup a_n$ is the largest subsequential limit of $(a_n)$And $\liminf a_n$ Is
the smallest.

_Proof._ Let $L^* = \limsup a_n = \inf_n \sup_◆LB◆k \geq n◆RB◆ a_k$. Define $s_n = \sup_◆LB◆k \geq n◆RB◆ a_k$.
Then $(s_n)$ is decreasing and $s_n \to L^*$. For each $n$Choose $k_n \geq n$ with
$a_◆LB◆k_n◆RB◆ > s_n - 1/n$. Then $a_◆LB◆k_n◆RB◆ \to L^*$ (by squeeze), producing a subsequence converging to
$L^*$.

If $L > L^*$ were a subsequential limit, choose a subsequence $a_◆LB◆n_j◆RB◆ \to L$. For large $j$:
$a_◆LB◆n_j◆RB◆ > (L + L^*)/2 > L^*$. But $a_◆LB◆n_j◆RB◆ \leq s_◆LB◆n_j◆RB◆$ for all $j$And $s_◆LB◆n_j◆RB◆ \to L^*$ So
$a_◆LB◆n_j◆RB◆ \leq s_◆LB◆n_j◆RB◆ \lt (L + L^*)/2$ for large $j$A contradiction. $\blacksquare$

**Proposition 2.8 (Algebra of $\limsup$/$\liminf$).** If $(a_n)$ and $(b_n)$ are bounded sequences:

1. $\limsup(a_n + b_n) \leq \limsup a_n + \limsup b_n$
2. $\liminf(a_n + b_n) \geq \liminf a_n + \liminf b_n$
3. If $a_n \geq 0$ and $b_n \geq 0$: $\limsup(a_n b_n) \leq (\limsup a_n)(\limsup b_n)$

_Remark._ Equality in (1) does not hold . For example, $a_n = (-1)^n$ and $b_n = (-1)^◆LB◆n+1◆RB◆$ Give
$a_n + b_n = 0$So $\limsup(a_n + b_n) = 0 \lt 1 + 1 = \limsup a_n + \limsup b_n$.

**Proposition 2.9.** A sequence $(a_n)$ is convergent if and only if it is Cauchy, if and only if
$\limsup a_n = \liminf a_n$.

<details>
<summary>Worked Example: Compute $\limsup$ and $\liminf$ of $a_n = (-1)^n \cdot \frac◆LB◆n◆RB◆◆LB◆n+1◆RB◆$</summary>

_Solution._ The sequence is $-1/2, 2/3, -3/4, 4/5, -5/6, \ldots$

The even subsequence is $a_◆LB◆2k◆RB◆ = \frac◆LB◆2k◆RB◆◆LB◆2k+1◆RB◆ \to 1$. The odd subsequence is
$a_◆LB◆2k-1◆RB◆ = -\frac◆LB◆2k-1◆RB◆◆LB◆2k◆RB◆ \to -1$.

No subsequence can have a limit greater than $1$ (since $a_n \leq n/(n+1) \lt 1$ for even $n$ And
$a_n \lt 0$ for odd $n$). Similarly, no subsequence can have a limit less than $-1$.

Therefore $\limsup_◆LB◆n \to \infty◆RB◆ a_n = 1$ and $\liminf_◆LB◆n \to \infty◆RB◆ a_n = -1$. Since
$\limsup \neq \liminf$The sequence diverges. $\blacksquare$

</details>

### 2.7 Worked Examples

**Problem.** Prove that $\lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆n◆RB◆◆LB◆n+1◆RB◆ = 1$.

_Solution._ Let $\varepsilon > 0$. We need $\left|\frac◆LB◆n◆RB◆◆LB◆n+1◆RB◆ - 1\right| \lt \varepsilon$I.e.,
$\frac◆LB◆1◆RB◆◆LB◆n+1◆RB◆ \lt \varepsilon$I.e., $n > \frac◆LB◆1◆RB◆◆LB◆\varepsilon◆RB◆ - 1$. Choose
$N = \lceil \frac◆LB◆1◆RB◆◆LB◆\varepsilon◆RB◆ \rceil$. Then for $n \geq N$: $n \geq \frac◆LB◆1◆RB◆◆LB◆\varepsilon◆RB◆$So
$n+1 > \frac◆LB◆1◆RB◆◆LB◆\varepsilon◆RB◆$So $\frac◆LB◆1◆RB◆◆LB◆n+1◆RB◆ \lt \varepsilon$. $\blacksquare$

<details>
<summary>Worked Example: $\varepsilon$-$N$ proof for $\lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆3n + 1◆RB◆◆LB◆n + 2◆RB◆ = 3$</summary>

_Solution._ Let $\varepsilon > 0$. We compute:

$$\left|\frac◆LB◆3n+1◆RB◆◆LB◆n+2◆RB◆ - 3\right| = \left|\frac◆LB◆3n+1 - 3(n+2)◆RB◆◆LB◆n+2◆RB◆\right| = \left|\frac◆LB◆-5◆RB◆◆LB◆n+2◆RB◆\right| = \frac◆LB◆5◆RB◆◆LB◆n+2◆RB◆$$

We need $\frac◆LB◆5◆RB◆◆LB◆n+2◆RB◆ \lt \varepsilon$I.e., $n + 2 > 5/\varepsilon$I.e., $n > 5/\varepsilon - 2$.
Choose $N = \lceil 5/\varepsilon \rceil$. Then for $n \geq N$:

$$\left|\frac◆LB◆3n+1◆RB◆◆LB◆n+2◆RB◆ - 3\right| = \frac◆LB◆5◆RB◆◆LB◆n+2◆RB◆ \leq \frac◆LB◆5◆RB◆◆LB◆N+2◆RB◆ \leq \frac◆LB◆5◆RB◆◆LB◆5/\varepsilon◆RB◆ = \varepsilon$$

$\blacksquare$

</details>

<details>
<summary>Worked Example: Show $(a_n)$ with $a_1 = \sqrt◆LB◆2◆RB◆$, $a_◆LB◆n+1◆RB◆ = \sqrt◆LB◆2 + a_n◆RB◆$ converges</summary>

_Solution._ **Step 1:** $(a_n)$ is bounded above by $2$. By induction: $a_1 = \sqrt◆LB◆2◆RB◆ \leq 2$. If
$a_n \leq 2$Then $a_◆LB◆n+1◆RB◆ = \sqrt◆LB◆2 + a_n◆RB◆ \leq \sqrt◆LB◆2 + 2◆RB◆ = 2$.

**Step 2:** $(a_n)$ is increasing. We have $a_1 = \sqrt◆LB◆2◆RB◆ \approx 1.414$ and
$a_2 = \sqrt◆LB◆2 + \sqrt◆LB◆2◆RB◆◆RB◆ \approx 1.848$. Assume $a_n \leq a_◆LB◆n+1◆RB◆$. Then
$a_◆LB◆n+1◆RB◆ = \sqrt◆LB◆2 + a_n◆RB◆ \leq \sqrt◆LB◆2 + a_◆LB◆n+1◆RB◆◆RB◆ = a_◆LB◆n+2◆RB◆$.

**Step 3:** By the Monotone Convergence Theorem, $(a_n)$ converges. Let $L = \lim a_n$. Taking
limits In $a_◆LB◆n+1◆RB◆ = \sqrt◆LB◆2 + a_n◆RB◆$: $L = \sqrt◆LB◆2 + L◆RB◆$So $L^2 = 2 + L$Giving $L^2 - L - 2 = 0$So
$(L-2)(L+1) = 0$. Since $a_n \geq \sqrt◆LB◆2◆RB◆ > 0$ for all $n$, $L \geq 0$So $L = 2$. $\blacksquare$

</details>

:::caution Common Pitfall When computing $\limsup$ and $\liminf$Do not confuse them with $\sup$ and
$\inf$ of the range $\{a_n : n \in \mathbb◆LB◆N◆RB◆\}$. The $\limsup$ depends on the _tail_ behavior of
the sequence. For Example, $a_n = (-1)^n$ has $\limsup = 1$ and $\liminf = -1$But $\sup\{a_n\} = 1$
and $\inf\{a_n\} = -1$ happen to agree in this case. However, for $a_n = 1/n$, $\sup = 1$ but
$\limsup = 0$. :::

## 3. Series

### 3.1 Definitions and Convergence

A **series** $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ a_n$ converges if the sequence of partial sums
$S_N = \sum_◆LB◆n=1◆RB◆^◆LB◆N◆RB◆ a_n$ Converges. The limit is the sum of the series.

If $a_n \geq 0$ for all $n$The series of partial sums is increasing, so by the monotone convergence
Theorem, $\sum a_n$ converges if and only if $(S_N)$ is bounded above.

### 3.2 Convergence Tests

**Theorem 3.1 (Comparison Test).** If $0 \leq a_n \leq b_n$ for all $n$Then:

- If $\sum b_n$ converges, then $\sum a_n$ converges.
- If $\sum a_n$ diverges, then $\sum b_n$ diverges.

**Theorem 3.2 (Limit Comparison Test).** If $a_n > 0$, $b_n > 0$And
$\lim_◆LB◆n \to \infty◆RB◆ a_n / b_n = L$ where $0 \lt L \lt \infty$Then $\sum a_n$ converges if and only
if $\sum b_n$ converges.

**Theorem 3.3 (Ratio Test).** If $\lim_◆LB◆n \to \infty◆RB◆ |a_◆LB◆n+1◆RB◆/a_n| = L$Then:

- If $L \lt 1$, $\sum a_n$ converges absolutely.
- If $L > 1$, $\sum a_n$ diverges.
- If $L = 1$The test is inconclusive.

**Theorem 3.4 (Root Test).** If $\limsup_◆LB◆n \to \infty◆RB◆ \sqrt[n]◆LB◆|a_n|◆RB◆ = L$Then:

- If $L \lt 1$, $\sum a_n$ converges absolutely.
- If $L > 1$, $\sum a_n$ diverges.
- If $L = 1$The test is inconclusive.

_Proof._ If $L \lt 1$Choose $r$ with $L \lt r \lt 1$. By definition of $\limsup$There exists $N$
such that $\sqrt[n]◆LB◆|a_n|◆RB◆ \lt r$ for all $n \geq N$I.e., $|a_n| \lt r^n$. Since $\sum r^n$
converges (geometric series with $r \lt 1$), the comparison test gives absolute convergence.

If $L > 1$Then for infinitely many $n$: $\sqrt[n]◆LB◆|a_n|◆RB◆ > 1$So $|a_n| > 1$. Hence $a_n \not\to 0$
And the series diverges. $\blacksquare$

**Theorem 3.5 (Integral Test).** If $f : [1, \infty) \to [0, \infty)$ is positive, continuous, and
Decreasing, then $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ f(n)$ converges if and only if $\int_1^◆LB◆\infty◆RB◆ f(x)\, dx$
converges.

_Proof._ Since $f$ is decreasing, for $k \leq x \leq k+1$: $f(k+1) \leq f(x) \leq f(k)$.
Integrating:

$$f(k+1) = \int_k^◆LB◆k+1◆RB◆ f(k+1)\, dx \leq \int_k^◆LB◆k+1◆RB◆ f(x)\, dx \leq \int_k^◆LB◆k+1◆RB◆ f(k)\, dx = f(k)$$

Summing from $k = 1$ to $N - 1$:

$$\sum_◆LB◆k=2◆RB◆^◆LB◆N◆RB◆ f(k) \leq \int_1^N f(x)\, dx \leq \sum_◆LB◆k=1◆RB◆^◆LB◆N-1◆RB◆ f(k)$$

If $\int_1^◆LB◆\infty◆RB◆ f$ converges, the left inequality shows $\sum f(k)$ is bounded above, hence
converges. If $\int_1^◆LB◆\infty◆RB◆ f$ diverges, the right inequality shows $\sum f(k)$ is unbounded,
hence diverges. $\blacksquare$

**Theorem 3.6 (Alternating Series Test).** If $a_n > 0$, $a_n$ decreases, and $a_n \to 0$Then
$\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ (-1)^◆LB◆n+1◆RB◆ a_n$ converges.

_Proof._ The partial sums of the even-indexed subsequence satisfy
$S_◆LB◆2n◆RB◆ = S_◆LB◆2n-2◆RB◆ - a_◆LB◆2n-1◆RB◆ + a_◆LB◆2n◆RB◆$. Since $a_◆LB◆2n-1◆RB◆ \geq a_◆LB◆2n◆RB◆$We have
$S_◆LB◆2n◆RB◆ \leq S_◆LB◆2n-2◆RB◆$So $(S_◆LB◆2n◆RB◆)$ is decreasing. Similarly, $(S_◆LB◆2n+1◆RB◆)$ is increasing. Also
$S_◆LB◆2n+1◆RB◆ = S_◆LB◆2n◆RB◆ + a_◆LB◆2n+1◆RB◆ \geq S_◆LB◆2n◆RB◆$. Both sequences are bounded (since $(S_◆LB◆2n◆RB◆)$ is
decreasing and bounded below by $S_1$And $(S_◆LB◆2n+1◆RB◆)$ is increasing and bounded Above by $S_2$).
Hence both converge. Since $a_◆LB◆2n+1◆RB◆ \to 0$Their limits coincide. $\blacksquare$

### 3.3 Absolute and Conditional Convergence

A series $\sum a_n$ **converges absolutely** if $\sum |a_n|$ converges. It **converges
conditionally** If $\sum a_n$ converges but $\sum |a_n|$ diverges.

**Theorem 3.7.** If $\sum a_n$ converges absolutely, then $\sum a_n$ converges.

_Proof._ Since $\sum |a_n|$ converges, the partial sums of $\sum |a_n|$ satisfy the Cauchy
criterion. Given $\varepsilon > 0$There exists $N$ such that for $m > n \geq N$:
$\sum_◆LB◆k=n+1◆RB◆^◆LB◆m◆RB◆ |a_k| \lt \varepsilon$. Then
$\left|\sum_◆LB◆k=n+1◆RB◆^◆LB◆m◆RB◆ a_k\right| \leq \sum_◆LB◆k=n+1◆RB◆^◆LB◆m◆RB◆ |a_k| \lt \varepsilon$So $\sum a_n$
satisfies The Cauchy criterion and converges. $\blacksquare$

### 3.4 The Alternating Series Estimation Theorem

**Theorem 3.8 (Alternating Series Estimation).** If $S = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ (-1)^◆LB◆n+1◆RB◆ a_n$
satisfies the Hypotheses of the alternating series test, then the error after $N$ terms satisfies:

$$|S - S_N| \leq a_◆LB◆N+1◆RB◆$$

_Proof._ We have $S_◆LB◆2n◆RB◆ \leq S \leq S_◆LB◆2n+1◆RB◆ = S_◆LB◆2n◆RB◆ + a_◆LB◆2n+1◆RB◆$ and
$S_◆LB◆2n-1◆RB◆ \geq S \geq S_◆LB◆2n◆RB◆ = S_◆LB◆2n-1◆RB◆ - a_◆LB◆2n◆RB◆$. In both cases $|S - S_N| \leq a_◆LB◆N+1◆RB◆$.
$\blacksquare$

### 3.5 Cauchy Condensation Test

**Theorem 3.8b (Cauchy Condensation Test).** If $(a_n)$ is a non-negative, decreasing sequence, then
$\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ a_n$ converges if and only if $\sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ 2^k a_◆LB◆2^k◆RB◆$ converges.

_Proof._ Group the terms of $\sum a_n$. For the lower bound, note:

$$a_1 + (a_2 + a_3) + (a_4 + a_5 + a_6 + a_7) + \cdots \geq a_1 + 2a_2 + 4a_4 + 8a_8 + \cdots = \sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ 2^k a_◆LB◆2^k◆RB◆$$

Since each group $(a_◆LB◆2^k◆RB◆ + \cdots + a_◆LB◆2^◆LB◆k+1◆RB◆-1◆RB◆)$ has $2^k$ terms, each $\geq a_◆LB◆2^k◆RB◆$. For the
upper Bound:

$$a_1 + a_2 + (a_3 + a_4) + (a_5 + a_6 + a_7 + a_8) + \cdots \leq a_1 + a_2 + 2a_4 + 4a_8 + \cdots \leq a_1 + 2\sum_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆ 2^◆LB◆k-1◆RB◆ a_◆LB◆2^k◆RB◆$$

If $\sum 2^k a_◆LB◆2^k◆RB◆$ converges, the upper bound shows $\sum a_n$ converges. If $\sum a_n$
Converges, the lower bound shows $\sum 2^k a_◆LB◆2^k◆RB◆$ converges. $\blacksquare$

_Corollary._ $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ 1/n^p$ converges if and only if $p > 1$. Apply the condensation
Test: $\sum 2^k \cdot 1/(2^k)^p = \sum 2^◆LB◆k(1-p)◆RB◆$A geometric series with ratio $2^◆LB◆1-p◆RB◆$ Which
converges iff $1 - p \lt 0$I.e., $p > 1$.

### 3.6 Rearrangement of Series

**Theorem 3.9 (Riemann Rearrangement Theorem).** If $\sum a_n$ converges conditionally, then for any
$L \in \mathbb◆LB◆R◆RB◆$ (or $\pm\infty$), there exists a rearrangement
$\sigma : \mathbb◆LB◆N◆RB◆ \to \mathbb◆LB◆N◆RB◆$ such That $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ a_◆LB◆\sigma(n)◆RB◆ = L$.

_Proof (outline)._ Let $P = \{n : a_n > 0\}$ and $N = \{n : a_n \lt 0\}$. Since $\sum a_n$ converges
Conditionally, both $\sum_◆LB◆n \in P◆RB◆ a_n = +\infty$ and $\sum_◆LB◆n \in N◆RB◆ a_n = -\infty$.

To achieve sum $L \in \mathbb◆LB◆R◆RB◆$: take positive terms in order until the partial sum exceeds $L$
Then take negative terms until it falls below $L$Then positive terms again, and so on. Since both
The positive and negative subseries diverge, this process can always continue. The terms tend to
Zero (since the series converges), so the oscillations around $L$ shrink to zero. $\blacksquare$

_Remark._ By contrast, every rearrangement of an absolutely convergent series converges to the same
sum.

### 3.7 Worked Examples

**Problem.** Determine whether $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆n◆RB◆◆LB◆2^n◆RB◆$ converges.

_Solution._ Apply the ratio test:

$$\lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆a_◆LB◆n+1◆RB◆◆RB◆◆LB◆a_n◆RB◆ = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆(n+1)/2^◆LB◆n+1◆RB◆◆RB◆◆LB◆n/2^n◆RB◆ = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆n+1◆RB◆◆LB◆2n◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \lt 1$$

By the ratio test, the series converges absolutely. $\blacksquare$

<details>
<summary>Worked Example: Determine convergence of $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n^2 + n◆RB◆$</summary>

_Solution._ Note that $\frac◆LB◆1◆RB◆◆LB◆n^2 + n◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆n(n+1)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆n◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆n+1◆RB◆$. This is
a Telescoping series. The $N$-th partial sum is:

$$S_N = \sum_◆LB◆n=1◆RB◆^◆LB◆N◆RB◆ \left(\frac◆LB◆1◆RB◆◆LB◆n◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆n+1◆RB◆\right) = 1 - \frac◆LB◆1◆RB◆◆LB◆N+1◆RB◆$$

Therefore $\lim_◆LB◆N \to \infty◆RB◆ S_N = 1$And the series converges to $1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Does $\sum_◆LB◆n=2◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n \ln n◆RB◆$ converge?</summary>

_Solution._ Apply the integral test with $f(x) = 1/(x \ln x)$ on $[2, \infty)$. The function is
positive, Continuous, and decreasing. Compute:

$$\int_2^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆x \ln x◆RB◆\, dx = \lim_◆LB◆b \to \infty◆RB◆ \int_2^◆LB◆b◆RB◆ \frac◆LB◆1◆RB◆◆LB◆x \ln x◆RB◆\, dx = \lim_◆LB◆b \to \infty◆RB◆ \left[\ln(\ln x)\right]_2^b = \lim_◆LB◆b \to \infty◆RB◆ \ln(\ln b) - \ln(\ln 2) = \infty$$

The integral diverges, so by the integral test, the series diverges. $\blacksquare$

</details>

<details>
<summary>Worked Example: Approximate $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^◆LB◆n+1◆RB◆◆RB◆◆LB◆n◆RB◆$ to within $0.01$</summary>

_Solution._ This is the alternating harmonic series, with $a_n = 1/n$. By the alternating series
Estimation theorem, $|S - S_N| \leq a_◆LB◆N+1◆RB◆ = 1/(N+1)$. We need $1/(N+1) \leq 0.01$So
$N + 1 \geq 100$I.e., $N \geq 99$.

So $S_◆LB◆99◆RB◆ = \sum_◆LB◆n=1◆RB◆^◆LB◆99◆RB◆ \frac◆LB◆(-1)^◆LB◆n+1◆RB◆◆RB◆◆LB◆n◆RB◆$ approximates $\ln 2$ to within $0.01$. (The exact
sum is $\ln 2 \approx 0.6931$.) $\blacksquare$

</details>

<details>
<summary>Worked Example: Determine convergence of $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n^2 + 1◆RB◆$</summary>

_Solution._ Since $\frac◆LB◆1◆RB◆◆LB◆n^2 + 1◆RB◆ \leq \frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆$ for all $n$And $\sum 1/n^2$ converges
($p$-series with $p = 2 > 1$), the comparison test implies $\sum \frac◆LB◆1◆RB◆◆LB◆n^2 + 1◆RB◆$ converges.
$\blacksquare$

</details>

<details>
<summary>Worked Example: Use the condensation test for $\sum_◆LB◆n=2◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n (\ln n) (\ln \ln n)◆RB◆$</summary>

_Solution._ Let $a_n = \frac◆LB◆1◆RB◆◆LB◆n (\ln n)(\ln \ln n)◆RB◆$ for $n \geq 3$. This is positive and
decreasing. By the condensation test, $\sum a_n$ converges iff $\sum 2^k a_◆LB◆2^k◆RB◆$ converges.
Compute:

$$2^k a_◆LB◆2^k◆RB◆ = \frac◆LB◆2^k◆RB◆◆LB◆2^k \cdot k \ln 2 \cdot \ln(k \ln 2)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆k \ln 2 \cdot \ln(k \ln 2)◆RB◆ \approx \frac◆LB◆1◆RB◆◆LB◆k \ln k◆RB◆$$

The series $\sum \frac◆LB◆1◆RB◆◆LB◆k \ln k◆RB◆$ diverges (integral test, analogous to $\sum \frac◆LB◆1◆RB◆◆LB◆n \ln n◆RB◆$).
Therefore $\sum a_n$ diverges. $\blacksquare$

_If you get this wrong, revise:_ Section 3.5 (Cauchy Condensation Test).

</details>

:::caution Common Pitfall The ratio and root tests are inconclusive when the limit equals 1. In such
cases, try the comparison Test, integral test, or other methods. For example, $\sum 1/n$ diverges
(harmonic series) and $\sum 1/n^2$ converges, but both give a ratio test limit of 1. :::

## 4. Continuity

### 4.1 Limits of Functions

Let $f : D \to \mathbb◆LB◆R◆RB◆$ where $D \subseteq \mathbb◆LB◆R◆RB◆$. We say $\lim_◆LB◆x \to a◆RB◆ f(x) = L$ if for
Every $\varepsilon > 0$There exists $\delta > 0$ such that

$$0 \lt |x - a| \lt \delta \implies |f(x) - L| \lt \varepsilon$$

### 4.2 Continuity

**Definition.** $f$ is **continuous at $a$** if $\lim_◆LB◆x \to a◆RB◆ f(x) = f(a)$. In epsilon-delta form:
For every $\varepsilon > 0$There exists $\delta > 0$ such that

$$|x - a| \lt \delta \implies |f(x) - f(a)| \lt \varepsilon$$

_Remark._ A function is continuous on a set $E$ if it is continuous at every point of $E$. A
function is **globally continuous** (or "continuous") if it is continuous on its entire domain.

**Definition.** $f$ is **discontinuous at $a$** if it is not continuous at $a$. Discontinuities are
Classified as:

- **Removable:** $\lim_◆LB◆x \to a◆RB◆ f(x)$ exists but does not equal $f(a)$ (or $f(a)$ is undefined).
- **Jump:** $\lim_◆LB◆x \to a^-◆RB◆ f(x)$ and $\lim_◆LB◆x \to a^+◆RB◆ f(x)$ both exist but are unequal.
- **Essential (or infinite/oscillatory):** At least one one-sided limit does not exist.

**Proposition 4.3.** Polynomials are continuous on $\mathbb◆LB◆R◆RB◆$. Rational functions $p(x)/q(x)$ are
Continuous wherever $q(x) \neq 0$. The functions $\sin x$, $\cos x$, $e^x$, $\ln x$ are continuous On
their domains.

**Theorem 4.1 (Algebra of Continuous Functions).** If $f$ and $g$ are continuous at $a$Then $f+g$
$f-g$, $fg$And (where defined) $f/g$ are continuous at $a$.

**Theorem 4.2.** Compositions of continuous functions are continuous: if $f$ is continuous at $a$
and $g$ is continuous at $f(a)$Then $g \circ f$ is continuous at $a$.

### 4.2a Sequential Characterization of Limits and Continuity

The epsilon-delta definitions can be reformulated in terms of sequences, which is often more
Convenient for proofs.

**Proposition 4.2a (Sequential Criterion for Limits).** $\lim_◆LB◆x \to c◆RB◆ f(x) = L$ if and only if For
every sequence $(x_n)$ with $x_n \to c$ and $x_n \neq c$ for all $n$We have $f(x_n) \to L$.

_Proof._ ($\Rightarrow$) Let $\varepsilon > 0$. Choose $\delta > 0$ from the $\varepsilon$-$\delta$
definition. Since $x_n \to c$There exists $N$ with $|x_n - c| \lt \delta$ for $n \geq N$. Then
$|f(x_n) - L| \lt \varepsilon$ for $n \geq N$.

($\Leftarrow$) Suppose the $\varepsilon$-$\delta$ condition fails. Then there exists
$\varepsilon > 0$ such That for every $n \in \mathbb◆LB◆N◆RB◆$There exists $x_n$ with
$0 \lt |x_n - c| \lt 1/n$ but $|f(x_n) - L| \geq \varepsilon$. Then $x_n \to c$ but
$f(x_n) \not\to L$Contradicting the hypothesis. $\blacksquare$

**Corollary 4.2b.** $f$ is continuous at $c$ if and only if for every sequence $(x_n)$ with
$x_n \to c$ We have $f(x_n) \to f(c)$.

This is especially useful for proving that a function is **not** continuous: find one sequence
Converging to $c$ whose image does not converge to $f(c)$.

### 4.3 Intermediate Value Theorem

**Theorem 4.3 (IVT).** If $f : [a,b] \to \mathbb◆LB◆R◆RB◆$ is continuous and $f(a) \lt y \lt f(b)$ (or
$f(b) \lt y \lt f(a)$), then there exists $c \in (a,b)$ such that $f(c) = y$.

_Proof._ Assume $f(a) \lt y \lt f(b)$. Let $S = \{x \in [a,b] : f(x) \lt y\}$. Since $a \in S$ $S$
is non-empty and bounded above by $b$. Let $c = \sup(S)$. We show $f(c) = y$.

If $f(c) \lt y$Then by continuity at $c$There exists $\delta > 0$ such that $f(x) \lt y$ for
$x \in (c - \delta, c + \delta)$. But then $c + \delta/2 \in S$Contradicting that $c = \sup(S)$.

If $f(c) > y$Then by continuity, there exists $\delta > 0$ such that $f(x) > y$ for
$x \in (c - \delta, c + \delta)$. But then $c - \delta/2$ is an upper bound for $S$Contradicting
That $c = \sup(S)$.

Therefore $f(c) = y$. $\blacksquare$

_Alternative proof (bisection)._ Set $a_0 = a$, $b_0 = b$. Given $[a_n, b_n]$ with
$f(a_n) \lt y \lt f(b_n)$ Let $m_n = (a_n + b_n)/2$. If $f(m_n) \geq y$Set
$a_◆LB◆n+1◆RB◆ = a_n$, $b_◆LB◆n+1◆RB◆ = m_n$. If $f(m_n) \lt y$ Set $a_◆LB◆n+1◆RB◆ = m_n$, $b_◆LB◆n+1◆RB◆ = b_n$. Either way,
$f(a_n) \lt y \leq f(b_n)$ and $b_n - a_n = (b-a)/2^n \to 0$. By the nested interval property,
$a_n \to c$ and $b_n \to c$. By continuity, $f(c) = \lim f(a_n) \leq y$ And
$f(c) = \lim f(b_n) \geq y$So $f(c) = y$. $\blacksquare$

### 4.4 Extreme Value Theorem

**Theorem 4.4 (EVT).** If $f : [a,b] \to \mathbb◆LB◆R◆RB◆$ is continuous, then $f$ attains its maximum and
Minimum on $[a,b]$: there exist $c_1, c_2 \in [a,b]$ such that $f(c_1) \leq f(x) \leq f(c_2)$ for
all $x \in [a,b]$.

_Proof._ We first show $f$ is bounded. Suppose not; then for each $n \in \mathbb◆LB◆N◆RB◆$There exists
$x_n \in [a,b]$ with $|f(x_n)| > n$. By Bolzano-Weierstrass, $(x_n)$ has a convergent subsequence
$x_◆LB◆n_k◆RB◆ \to c \in [a,b]$. By continuity, $f(x_◆LB◆n_k◆RB◆) \to f(c)$So $(f(x_◆LB◆n_k◆RB◆))$ is bounded. But
$|f(x_◆LB◆n_k◆RB◆)| > n_k \to \infty$A contradiction.

Now we show $f$ attains its supremum. Let $M = \sup\{f(x) : x \in [a,b]\}$. For each $n$Choose
$x_n \in [a,b]$ with $f(x_n) > M - 1/n$. By Bolzano-Weierstrass, $(x_n)$ has a subsequence
$x_◆LB◆n_k◆RB◆ \to c \in [a,b]$. By continuity, $f(c) = \lim f(x_◆LB◆n_k◆RB◆)$. Since
$M - 1/n_k \lt f(x_◆LB◆n_k◆RB◆) \leq M$ for all $k$The squeeze theorem gives $f(c) = M$. The argument for
the infimum is similar (consider $-f$). $\blacksquare$

### 4.5 Uniform Continuity

**Definition.** $f$ is **uniformly continuous** on $D$ if for every $\varepsilon > 0$There exists
$\delta > 0$ such that for all $x, y \in D$:

$$|x - y| \lt \delta \implies |f(x) - f(y)| \lt \varepsilon$$

The key distinction: for ordinary continuity, $\delta$ may depend on both $\varepsilon$ and the
point $a$; for uniform continuity, $\delta$ depends only on $\varepsilon$.

### 4.6 The Heine-Cantor Theorem

**Theorem 4.5 (Heine-Cantor).** If $f : [a,b] \to \mathbb◆LB◆R◆RB◆$ is continuous on the closed, bounded
Interval $[a,b]$Then $f$ is uniformly continuous on $[a,b]$.

_Proof._ Suppose $f$ is continuous on $[a,b]$ but not uniformly continuous. Then there exists
$\varepsilon > 0$ such that for every $n \in \mathbb◆LB◆N◆RB◆$There exist $x_n, y_n \in [a,b]$ with
$|x_n - y_n| \lt 1/n$ but $|f(x_n) - f(y_n)| \geq \varepsilon$.

By the Bolzano-Weierstrass theorem, $(x_n)$ has a convergent subsequence $x_◆LB◆n_k◆RB◆ \to c \in [a,b]$.
Since $|x_◆LB◆n_k◆RB◆ - y_◆LB◆n_k◆RB◆| \lt 1/n_k \to 0$We have $y_◆LB◆n_k◆RB◆ \to c$ as well.

By continuity of $f$ at $c$: there exists $\delta > 0$ such that $|x - c| \lt \delta$ implies
$|f(x) - f(c)| \lt \varepsilon/2$. For $k$ sufficiently large, $|x_◆LB◆n_k◆RB◆ - c| \lt \delta$ and
$|y_◆LB◆n_k◆RB◆ - c| \lt \delta$So:

$$|f(x_◆LB◆n_k◆RB◆) - f(y_◆LB◆n_k◆RB◆)| \leq |f(x_◆LB◆n_k◆RB◆) - f(c)| + |f(y_◆LB◆n_k◆RB◆) - f(c)| \lt \varepsilon/2 + \varepsilon/2 = \varepsilon$$

Contradicting $|f(x_◆LB◆n_k◆RB◆) - f(y_◆LB◆n_k◆RB◆)| \geq \varepsilon$. $\blacksquare$

### 4.7 Worked Examples

**Problem.** Prove that $f(x) = \sqrt◆LB◆x◆RB◆$ is uniformly continuous on $[0, \infty)$.

_Solution._ For $x, y \geq 0$:
$|\sqrt◆LB◆x◆RB◆ - \sqrt◆LB◆y◆RB◆| = \frac◆LB◆|x - y|◆RB◆◆LB◆\sqrt◆LB◆x◆RB◆ + \sqrt◆LB◆y◆RB◆◆RB◆ \leq |x - y|^◆LB◆1/2◆RB◆$.

Given $\varepsilon > 0$Choose $\delta = \varepsilon^2$. Then $|x - y| \lt \delta$ implies
$|\sqrt◆LB◆x◆RB◆ - \sqrt◆LB◆y◆RB◆| \leq \sqrt◆LB◆|x-y|◆RB◆ \lt \sqrt◆LB◆\delta◆RB◆ = \varepsilon$. Since $\delta$ depends
Only on $\varepsilon$The continuity is uniform. $\blacksquare$

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ proof that $f(x) = 3x - 1$ is continuous at $x = 2$</summary>

_Solution._ We have $f(2) = 5$. Let $\varepsilon > 0$. We need to find $\delta > 0$ such that
$|x - 2| \lt \delta$ implies $|f(x) - 5| \lt \varepsilon$.

Compute: $|f(x) - 5| = |(3x - 1) - 5| = |3x - 6| = 3|x - 2|$.

Choose $\delta = \varepsilon/3$. Then $|x - 2| \lt \delta$ implies
$|f(x) - 5| = 3|x - 2| \lt 3 \cdot \varepsilon/3 = \varepsilon$. $\blacksquare$

</details>

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ proof that $f(x) = x^2$ is continuous at $x = 3$</summary>

_Solution._ We have $f(3) = 9$. Let $\varepsilon > 0$. Compute:

$$|f(x) - 9| = |x^2 - 9| = |x + 3| \cdot |x - 3|$$

Restrict to $\delta \leq 1$So $|x - 3| \lt 1$ means $2 \lt x \lt 4$Giving $|x + 3| \lt 7$.

Choose $\delta = \min(1, \varepsilon/7)$. Then $|x - 3| \lt \delta$ implies:

$$|x^2 - 9| = |x + 3| \cdot |x - 3| \lt 7 \cdot \frac◆LB◆\varepsilon◆RB◆◆LB◆7◆RB◆ = \varepsilon$$

$\blacksquare$

</details>

<details>
<summary>Worked Example: Show $f(x) = 1/x$ is NOT uniformly continuous on $(0, 1)$</summary>

_Solution._ We show the negation of uniform continuity. Take $\varepsilon = 1$. For any $\delta > 0$
Choose $n \in \mathbb◆LB◆N◆RB◆$ with $1/n \lt \delta$. Set $x = 1/n$ and $y = 1/(2n)$. Then
$|x - y| = 1/(2n) \lt 1/n \lt \delta$But:

$$|f(x) - f(y)| = \left|\frac◆LB◆1◆RB◆◆LB◆1/n◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆1/(2n)◆RB◆\right| = |n - 2n| = n \geq 1 = \varepsilon$$

So no single $\delta$ works for all $x, y \in (0,1)$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Use the sequential criterion to show $f(x) = \sin(1/x)$ has no limit as $x \to 0$</summary>

_Solution._ Consider the sequences $x_n = 1/(2n\pi)$ and $y_n = 1/(2n\pi + \pi/2)$. Both converge to
$0$. But $f(x_n) = \sin(2n\pi) = 0$ and $f(y_n) = \sin(2n\pi + \pi/2) = 1$ for all $n$.

So $f(x_n) \to 0$ and $f(y_n) \to 1$. By the sequential criterion, if $\lim_◆LB◆x \to 0◆RB◆ f(x)$ existed,
Both subsequences would converge to the same limit. Since they don't, the limit does not exist.
$\blacksquare$

</details>

<details>
<summary>Worked Example: Prove $f(x) = x \sin(1/x)$ (with $f(0) = 0$) is continuous everywhere</summary>

_Solution._ For $x \neq 0$, $f$ is a product of continuous functions, hence continuous.

At $x = 0$: let $\varepsilon > 0$. Choose $\delta = \varepsilon$. For $|x - 0| = |x| \lt \delta$:

$$|f(x) - f(0)| = |x \sin(1/x)| \leq |x| \lt \delta = \varepsilon$$

So $f$ is continuous at $0$. Since $f$ extends continuously from $(0, 1]$ to $[0, 1]$The
Heine-Cantor Theorem implies $f$ is uniformly continuous on $[0, 1]$. $\blacksquare$

</details>

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ proof that $f(x) = \sin x$ is continuous at every $a \in \mathbb◆LB◆R◆RB◆$</summary>

_Solution._ We use the identity $|\sin u - \sin v| \leq |u - v|$ for all $u, v \in \mathbb◆LB◆R◆RB◆$.
(Proof: $|\sin u - \sin v| = 2|\cos((u+v)/2)\sin((u-v)/2)| \leq 2|\sin((u-v)/2)| \leq |u - v|$ Using
$|\sin t| \leq |t|$ and $|\cos| \leq 1$.)

Let $\varepsilon > 0$ and $a \in \mathbb◆LB◆R◆RB◆$. Choose $\delta = \varepsilon$. For
$|x - a| \lt \delta$:

$$|\sin x - \sin a| \leq |x - a| \lt \delta = \varepsilon$$

Since $\delta = \varepsilon$ works independently of $a$, $\sin x$ is actually **uniformly continuous**
On $\mathbb◆LB◆R◆RB◆$. The same argument works for $\cos x$. $\blacksquare$

</details>

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ proof that $f(x) = e^x$ is continuous at every $a \in \mathbb◆LB◆R◆RB◆$</summary>

_Solution._ We use the inequality $|e^u - e^v| \leq e^◆LB◆\max(u,v)◆RB◆ |u - v|$Which follows from the
Mean Value Theorem applied to $e^t$: $e^u - e^v = e^\xi (u - v)$ for some $\xi$ between $u$ and $v$
So $|e^u - e^v| = e^\xi |u - v| \leq e^◆LB◆\max(u,v)◆RB◆ |u - v|$.

Let $\varepsilon > 0$ and $a \in \mathbb◆LB◆R◆RB◆$. Restrict to $|x - a| \lt 1$So $x \lt a + 1$ and
$e^◆LB◆\max(x,a)◆RB◆ \leq e^◆LB◆a+1◆RB◆$. Choose $\delta = \min(1, \varepsilon / e^◆LB◆a+1◆RB◆)$. For
$|x - a| \lt \delta$:

$$|e^x - e^a| \leq e^◆LB◆a+1◆RB◆ |x - a| \lt e^◆LB◆a+1◆RB◆ \cdot \frac◆LB◆\varepsilon◆RB◆◆LB◆e^◆LB◆a+1◆RB◆◆RB◆ = \varepsilon$$

$\blacksquare$

_If you get this wrong, revise:_ Section 4.2 (Continuity), Section 5.3 (Mean Value Theorem).

</details>

:::caution Common Pitfall Continuity on $(a, b)$ does not imply uniform continuity. The function
$f(x) = 1/x$ on $(0, 1)$ is Continuous but not uniformly continuous. The Heine-Cantor theorem
requires a **closed and bounded** Interval. Also, a function can be uniformly continuous on an
unbounded domain (e.g., $f(x) = \sqrt◆LB◆x◆RB◆$ On $[0, \infty)$) --- boundedness of the domain is
sufficient but not necessary. :::

## 5. Differentiability

### 5.1 The Derivative

**Definition.** $f : (a,b) \to \mathbb◆LB◆R◆RB◆$ is **differentiable at** $c \in (a,b)$ if the limit

$$f'(c) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆f(c+h) - f(c)◆RB◆◆LB◆h◆RB◆$$

Exists (as a finite real number).

**Proposition 5.1.** If $f$ is differentiable at $c$Then $f$ is continuous at $c$.

_Proof._
$\lim_◆LB◆x \to c◆RB◆ (f(x) - f(c)) = \lim_◆LB◆x \to c◆RB◆ \frac◆LB◆f(x) - f(c)◆RB◆◆LB◆x - c◆RB◆ \cdot (x - c) = f'(c) \cdot 0 = 0$.
$\blacksquare$

The converse is false: $f(x) = |x|$ is continuous at $0$ but not differentiable at $0$.

### 5.2 Differentiation Rules

**Theorem 5.1.** If $f$ and $g$ are differentiable at $c$Then:

1. $(f + g)'(c) = f'(c) + g'(c)$
2. $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$
3. $(f/g)'(c) = \frac◆LB◆f'(c)g(c) - f(c)g'(c)◆RB◆◆LB◆g(c)^2◆RB◆$ (if $g(c) \neq 0$)
4. $(f \circ g)'(c) = f'(g(c)) \cdot g'(c)$ (Chain Rule)

### 5.3 Mean Value Theorem

**Theorem 5.2 (Rolle's Theorem).** If $f : [a,b] \to \mathbb◆LB◆R◆RB◆$ is continuous on
$[a,b]$Differentiable On $(a,b)$And $f(a) = f(b)$Then there exists $c \in (a,b)$ such that
$f'(c) = 0$.

_Proof._ By the Extreme Value Theorem, $f$ attains its maximum $M$ and minimum $m$ on $[a,b]$. If
$M = m$Then $f$ is constant and $f'(c) = 0$ for all $c \in (a,b)$. Otherwise, at least one Of $M$ or
$m$ is attained at some $c \in (a,b)$ (since $f(a) = f(b)$). By Fermat's theorem, $f'(c) = 0$.
$\blacksquare$

**Theorem 5.3 (Mean Value Theorem).** If $f : [a,b] \to \mathbb◆LB◆R◆RB◆$ is continuous on $[a,b]$ and
Differentiable on $(a,b)$Then there exists $c \in (a,b)$ such that

$$f'(c) = \frac◆LB◆f(b) - f(a)◆RB◆◆LB◆b - a◆RB◆$$

_Proof._ Define $g(x) = f(x) - \frac◆LB◆f(b)-f(a)◆RB◆◆LB◆b-a◆RB◆(x - a)$. Then $g(a) = g(b)$ and $g$ satisfies
the Hypotheses of Rolle's theorem. So $g'(c) = 0$ for some $c \in (a,b)$Which gives the result.
$\blacksquare$

**Corollary 5.4.** If $f'(x) = 0$ for all $x \in (a,b)$Then $f$ is constant on $[a,b]$.

**Corollary 5.5.** If $f'(x) > 0$ for all $x \in (a,b)$Then $f$ is strictly increasing on $[a,b]$.

**Theorem 5.3a (Cauchy's Mean Value Theorem).** If $f, g : [a,b] \to \mathbb◆LB◆R◆RB◆$ are continuous on
$[a,b]$ and differentiable on $(a,b)$Then there exists $c \in (a,b)$ such that

$$(f(b) - f(a))g'(c) = (g(b) - g(a))f'(c)$$

_Proof._ Define $h(x) = (f(b) - f(a))g(x) - (g(b) - g(a))f(x)$. Then $h(a) = h(b)$So by Rolle's
Theorem, $h'(c) = 0$ for some $c \in (a,b)$Which gives the result. $\blacksquare$

_Remark._ When $g(x) = x$Cauchy's MVT reduces to the standard MVT. Cauchy's MVT is the key
Ingredient in the proof of L'Hôpital's rule.

**Corollary 5.6.** If $f$ is differentiable on $(a,b)$ and $|f'(x)| \leq M$ for all $x \in (a,b)$
Then $f$ is Lipschitz continuous with constant $M$: $|f(x) - f(y)| \leq M|x - y|$ for all
$x, y \in (a,b)$.

_Proof._ Apply the MVT to $f$ on the interval between $x$ and $y$. $\blacksquare$

### 5.4 Taylor's Theorem

**Theorem 5.6 (Taylor's Theorem with Lagrange Remainder).** If $f$ is $(n+1)$-times differentiable
on An open interval containing $a$Then for each $x$ in that interval:

$$f(x) = \sum_◆LB◆k=0◆RB◆^◆LB◆n◆RB◆ \frac◆LB◆f^◆LB◆(k)◆RB◆(a)◆RB◆◆LB◆k!◆RB◆(x - a)^k + R_n(x)$$

Where the remainder is

$$R_n(x) = \frac◆LB◆f^◆LB◆(n+1)◆RB◆(\xi)◆RB◆◆LB◆(n+1)!◆RB◆(x - a)^◆LB◆n+1◆RB◆$$

For some $\xi$ between $a$ and $x$.

_Proof._ Fix $x \neq a$ and define

$$g(t) = f(x) - \sum_◆LB◆k=0◆RB◆^◆LB◆n◆RB◆ \frac◆LB◆f^◆LB◆(k)◆RB◆(t)◆RB◆◆LB◆k!◆RB◆(x - t)^k$$

Then $g(a) = R_n(x)$ and $g(x) = 0$. By the generalized Rolle's theorem (or direct computation Using
the Cauchy mean value theorem), there exists $\xi$ between $a$ and $x$ with $g'( \xi ) = 0$.
Computing:

$$g'(t) = -\frac◆LB◆f^◆LB◆(n+1)◆RB◆(t)◆RB◆◆LB◆n!◆RB◆(x - t)^n$$

Setting $g'(\xi) = 0$ yields the result after comparing $g(a) = R_n(x)$ with the integral form. A
Cleaner approach uses the standard MVT applied to $g$ on $[a, x]$. $\blacksquare$

### 5.5 L'Hôpital's Rule

**Theorem 5.7 (L'Hôpital's Rule, $\frac◆LB◆0◆RB◆◆LB◆0◆RB◆$ case).** Suppose $f$ and $g$ are differentiable on An
open interval containing $c$ (except possibly at $c$ itself), $g'(x) \neq 0$ near $c$And
$\lim_◆LB◆x \to c◆RB◆ f(x) = \lim_◆LB◆x \to c◆RB◆ g(x) = 0$. If $\lim_◆LB◆x \to c◆RB◆ f'(x)/g'(x) = L$ exists (as a
finite Number or $\pm\infty$), then $\lim_◆LB◆x \to c◆RB◆ f(x)/g(x) = L$.

_Proof._ Extend $f$ and $g$ continuously to $c$ by setting $f(c) = g(c) = 0$. For $x \neq c$By
Cauchy's Mean Value Theorem, there exists $\xi$ strictly between $c$ and $x$ such that

$$\frac◆LB◆f(x) - f(c)◆RB◆◆LB◆g(x) - g(c)◆RB◆ = \frac◆LB◆f'(\xi)◆RB◆◆LB◆g'(\xi)◆RB◆$$

I.e., $\frac◆LB◆f(x)◆RB◆◆LB◆g(x)◆RB◆ = \frac◆LB◆f'(\xi)◆RB◆◆LB◆g'(\xi)◆RB◆$. As $x \to c$We have $\xi \to c$ (since $\xi$ is
trapped between $c$ and $x$). Therefore
$\lim_◆LB◆x \to c◆RB◆ f(x)/g(x) = \lim_◆LB◆\xi \to c◆RB◆ f'(\xi)/g'(\xi) = L$. $\blacksquare$

**Theorem 5.7b (L'Hôpital's Rule, $\frac◆LB◆\infty◆RB◆◆LB◆\infty◆RB◆$ case).** Suppose $f$ and $g$ are
Differentiable on $(a, b)$ (except possibly at $c$), $g'(x) \neq 0$ near $c$And
$\lim_◆LB◆x \to c◆RB◆ |f(x)| = \lim_◆LB◆x \to c◆RB◆ |g(x)| = \infty$. If $\lim_◆LB◆x \to c◆RB◆ f'(x)/g'(x) = L$
exists, Then $\lim_◆LB◆x \to c◆RB◆ f(x)/g(x) = L$.

_Proof (sketch)._ Fix $\varepsilon > 0$. For $x, y$ near $c$ with $x \neq y$By Cauchy's MVT:

$$\frac◆LB◆f(x) - f(y)◆RB◆◆LB◆g(x) - g(y)◆RB◆ = \frac◆LB◆f'(\xi)◆RB◆◆LB◆g'(\xi)◆RB◆$$

For some $\xi$ between $x$ and $y$. Since $f'(\xi)/g'(\xi) \approx L$ for $\xi$ near $c$We have:

$$\frac◆LB◆f(x)◆RB◆◆LB◆g(x)◆RB◆ = \frac◆LB◆f(x) - f(y)◆RB◆◆LB◆g(x) - g(y)◆RB◆ \cdot \frac◆LB◆1 - f(y)/f(x)◆RB◆◆LB◆1 - g(y)/g(x)◆RB◆$$

Since $f(x), g(x) \to \infty$By fixing $y$ and letting $x \to c$The fractions $f(y)/f(x)$ and
$g(y)/g(x)$ tend to $0$So the second factor tends to $1$. The first factor tends to $L$ by Cauchy's
MVT. Hence $f(x)/g(x) \to L$. $\blacksquare$

<details>
<summary>Worked Example: Compute $\lim_◆LB◆x \to 0◆RB◆ \frac◆LB◆e^x - 1 - x◆RB◆◆LB◆x^2◆RB◆$</summary>

_Solution._ Both numerator and denominator approach $0$ as $x \to 0$. Applying L'Hôpital's rule:

$$\lim_◆LB◆x \to 0◆RB◆ \frac◆LB◆e^x - 1 - x◆RB◆◆LB◆x^2◆RB◆ = \lim_◆LB◆x \to 0◆RB◆ \frac◆LB◆e^x - 1◆RB◆◆LB◆2x◆RB◆$$

This is still $\frac◆LB◆0◆RB◆◆LB◆0◆RB◆$So apply L'Hôpital again:

$$= \lim_◆LB◆x \to 0◆RB◆ \frac◆LB◆e^x◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$$

$\blacksquare$

</details>

### 5.6 Darboux's Theorem

**Theorem 5.8 (Darboux's Theorem).** If $f$ is differentiable on $[a, b]$Then $f'$ has the
Intermediate value property: for any $y$ between $f'(a)$ and $f'(b)$There exists $c \in (a, b)$ With
$f'(c) = y$.

_Remark._ This means derivatives satisfy the intermediate value property even though they need not
Be continuous. For example, $f(x) = x^2 \sin(1/x)$ (with $f(0) = 0$) is differentiable everywhere,
But $f'$ is not continuous at $0$.

_Proof._ Assume without loss of generality that $f'(a) \lt y \lt f'(b)$. Define $g(x) = f(x) - yx$.
Then $g$ is differentiable on $[a, b]$ with

$$g'(a) = f'(a) - y \lt 0 \quad \mathrm◆LB◆and \quad g'(b) = f'(b) - y > 0$$

Since $g'(a) \lt 0$There exists $x_1 > a$ with $g(x_1) \lt g(a)$ (otherwise $g(x) \geq g(a)$ For $x$
near $a$Contradicting $g'(a) \lt 0$). Similarly, since $g'(b) > 0$There exists $x_2 \lt b$ with
$g(x_2) \lt g(b)$.

Therefore $g$ attains its minimum at some $c \in (a, b)$. By Fermat's theorem on interior extrema,
$g'(c) = 0$So $f'(c) = y$. $\blacksquare$

<details>
<summary>Worked Example: Apply Darboux's theorem to $f(x) = x^2 \sin(1/x)$ ($f(0) = 0$)</summary>

_Solution._ For $x \neq 0$: $f'(x) = 2x \sin(1/x) - \cos(1/x)$. At $x = 0$:
$f'(0) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆h^2 \sin(1/h)◆RB◆◆LB◆h◆RB◆ = \lim_◆LB◆h \to 0◆RB◆ h \sin(1/h) = 0$.

So $f'(0) = 0$. For any $\delta > 0$The term $-\cos(1/x)$ oscillates between $-1$ and $1$ on
$(0, \delta)$So $f'$ takes all values in $[-1, 1]$ infinitely often on $(0, \delta)$.

But Darboux's theorem says $f'$ has the intermediate value property. Indeed, $f'$ is not continuous
At $0$ (it oscillates wildly), yet it still satisfies the IVP. This shows that derivatives can be
Highly discontinuous while retaining the intermediate value property. $\blacksquare$

</details>

### 5.7 Worked Examples

**Worked Example.** Compute the third-order Taylor polynomial of $f(x) = e^x$ about $a = 0$.

$f(0) = 1$, $f'(0) = 1$, $f''(0) = 1$, $f'''(0) = 1$. So

$$T_3(x) = 1 + x + \frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆x^3◆RB◆◆LB◆6◆RB◆$$

The remainder is $R_3(x) = \frac◆LB◆e^\xi◆RB◆◆LB◆24◆RB◆ x^4$ for some $\xi$ between $0$ and $x$.

<details>
<summary>Worked Example: Approximate $\sin(0.1)$ with error less than $10^◆LB◆-10◆RB◆$</summary>

_Solution._ For $f(x) = \sin x$ about $a = 0$: $f^◆LB◆(k)◆RB◆(0) \in \{0, 1, -1\}$ and the Taylor
Polynomial of degree $n$ has the form $T_n(x) = x - x^3/3! + x^5/5! - \cdots$ (odd terms only).

The Lagrange remainder is
$|R_n(x)| = \frac◆LB◆|f^◆LB◆(n+1)◆RB◆(\xi)|◆RB◆◆LB◆(n+1)!◆RB◆ |x|^◆LB◆n+1◆RB◆ \leq \frac◆LB◆|x|^◆LB◆n+1◆RB◆◆RB◆◆LB◆(n+1)!◆RB◆$ (since
$|f^◆LB◆(k)◆RB◆| \leq 1$ for all $k$).

We need $\frac◆LB◆(0.1)^◆LB◆n+1◆RB◆◆RB◆◆LB◆(n+1)!◆RB◆ \lt 10^◆LB◆-10◆RB◆$. Testing: for $n = 5$
$\frac◆LB◆(0.1)^6◆RB◆◆LB◆6!◆RB◆ = \frac◆LB◆10^◆LB◆-6◆RB◆◆RB◆◆LB◆720◆RB◆ \approx 1.39 \times 10^◆LB◆-9◆RB◆ \gt 10^◆LB◆-10◆RB◆$. For $n = 7$:
$\frac◆LB◆(0.1)^8◆RB◆◆LB◆8!◆RB◆ = \frac◆LB◆10^◆LB◆-8◆RB◆◆RB◆◆LB◆40320◆RB◆ \approx 2.48 \times 10^◆LB◆-13◆RB◆ \lt 10^◆LB◆-10◆RB◆$.

So $T_7(0.1) = 0.1 - \frac◆LB◆(0.1)^3◆RB◆◆LB◆6◆RB◆ + \frac◆LB◆(0.1)^5◆RB◆◆LB◆120◆RB◆ - \frac◆LB◆(0.1)^7◆RB◆◆LB◆5040◆RB◆$
$= 0.1 - 0.00016667 + 0.00000083 - 0.00000000 \approx 0.09983342$.

The error is at most $2.48 \times 10^◆LB◆-13◆RB◆ \lt 10^◆LB◆-10◆RB◆$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Find the Maclaurin series for $\ln(1 + x)$ and its radius of convergence</summary>

_Solution._ For $f(x) = \ln(1+x)$: $f(0) = 0$, $f'(x) = 1/(1+x)$, $f''(x) = -1/(1+x)^2$
$f^◆LB◆(k)◆RB◆(x) = (-1)^◆LB◆k-1◆RB◆(k-1)!/(1+x)^k$ for $k \geq 1$. So $f^◆LB◆(k)◆RB◆(0) = (-1)^◆LB◆k-1◆RB◆(k-1)!$.

$$\ln(1+x) = \sum_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^◆LB◆k-1◆RB◆(k-1)!◆RB◆◆LB◆k!◆RB◆ x^k = \sum_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^◆LB◆k-1◆RB◆◆RB◆◆LB◆k◆RB◆ x^k$$

By the ratio test:
$\lim_◆LB◆k \to \infty◆RB◆ |a_◆LB◆k+1◆RB◆/a_k| = \lim_◆LB◆k \to \infty◆RB◆ \frac◆LB◆k◆RB◆◆LB◆k+1◆RB◆ |x| = |x|$. The series
converges for $|x| \lt 1$ and diverges for $|x| > 1$. At $x = 1$ we get the alternating Harmonic
series (converges to $\ln 2$). At $x = -1$ we get the negative harmonic series (diverges).

The radius of convergence is $R = 1$ and the interval of convergence is $(-1, 1]$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Compute the Taylor expansion of $\cos x$ about $a = \pi/3$ with remainder bound</summary>

_Solution._ Compute derivatives:
$f(x) = \cos x$, $f'(x) = -\sin x$, $f''(x) = -\cos x$, $f'''(x) = \sin x$ $f^◆LB◆(4)◆RB◆(x) = \cos x$.
Evaluated at $a = \pi/3$:

$f(\pi/3) = 1/2$, $f'(\pi/3) = -\sqrt◆LB◆3◆RB◆/2$, $f''(\pi/3) = -1/2$, $f'''(\pi/3) = \sqrt◆LB◆3◆RB◆/2$.

The third-degree Taylor polynomial is:

$$T_3(x) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆◆LB◆2◆RB◆\left(x - \frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆\right) - \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\left(x - \frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆\right)^2 + \frac◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆◆LB◆12◆RB◆\left(x - \frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆\right)^3$$

The remainder satisfies $|R_3(x)| \leq \frac◆LB◆|x - \pi/3|^4◆RB◆◆LB◆24◆RB◆$ (since
$|f^◆LB◆(4)◆RB◆(\xi)| = |\cos \xi| \leq 1$).

For example, at $x = 1$:
$|R_3(1)| \leq \frac◆LB◆|1 - \pi/3|^4◆RB◆◆LB◆24◆RB◆ \approx \frac◆LB◆0.0472^4◆RB◆◆LB◆24◆RB◆ \approx 2.1 \times 10^◆LB◆-7◆RB◆$.
$\blacksquare$

</details>

:::caution Common Pitfall L'Hôpital's rule only applies to indeterminate forms $\frac◆LB◆0◆RB◆◆LB◆0◆RB◆$ and
$\frac◆LB◆\infty◆RB◆◆LB◆\infty◆RB◆$. Applying it to forms like $\frac◆LB◆1◆RB◆◆LB◆0◆RB◆$ or $\frac◆LB◆\infty◆RB◆◆LB◆1◆RB◆$ will give
incorrect results. Always Verify the indeterminate form before applying the rule. Also, L'Hôpital's
rule requires that the Limit of the quotient of derivatives exists; if it does not exist
(oscillates), the original limit May still exist. :::

## 6. Riemann Integration

### 6.1 Definition

Let $f : [a,b] \to \mathbb◆LB◆R◆RB◆$ be bounded. A **partition** of $[a,b]$ is a finite set
$P = \{x_0, x_1, \ldots, x_n\}$ with $a = x_0 \lt x_1 \lt \cdots \lt x_n = b$.

The **upper sum** and **lower sum** of $f$ with respect to $P$ are:

$$U(f, P) = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ M_i \Delta x_i, \quad L(f, P) = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ m_i \Delta x_i$$

Where $M_i = \sup\{f(x) : x \in [x_◆LB◆i-1◆RB◆, x_i]\}$, $m_i = \inf\{f(x) : x \in [x_◆LB◆i-1◆RB◆, x_i]\}$And
$\Delta x_i = x_i - x_◆LB◆i-1◆RB◆$.

The **mesh** of $P$ is $\|P\| = \max_◆LB◆1 \leq i \leq n◆RB◆ \Delta x_i$.

**Definition.** $f$ is **Riemann integrable** on $[a,b]$ if the upper and lower integrals are equal:

$$\overline◆LB◆\int_a^b◆RB◆ f(x)\, dx = \underline◆LB◆\int_a^b◆RB◆ f(x)\, dx$$

Where $\overline◆LB◆\int_a^b◆RB◆ f = \inf\{U(f,P) : P \mathrm◆LB◆\ is\ a\ partition\}$ and
$\underline◆LB◆\int_a^b◆RB◆ f = \sup\{L(f,P) : P \mathrm◆LB◆\ is\ a\ partition\}$.

The common value is denoted $\int_a^b f(x)\, dx$.

### 6.2 Integrability Criteria

**Theorem 6.1 (Riemann Integrability Criterion).** A bounded function $f : [a,b] \to \mathbb◆LB◆R◆RB◆$ is
Riemann integrable if and only if for every $\varepsilon > 0$There exists a partition $P$ such that

$$U(f,P) - L(f,P) \lt \varepsilon$$

**Theorem 6.2.** Every continuous function on $[a,b]$ is Riemann integrable.

_Proof._ Let $f$ be continuous on $[a,b]$. By the Heine-Cantor theorem, $f$ is uniformly continuous.
Given $\varepsilon > 0$Choose $\delta > 0$ such that $|x - y| \lt \delta$ implies
$|f(x) - f(y)| \lt \varepsilon/(b-a)$.

Let $P$ be any partition with $\|P\| \lt \delta$. On each subinterval $[x_◆LB◆i-1◆RB◆, x_i]$By the Extreme
Value Theorem, $f$ attains its maximum $M_i$ and minimum $m_i$. By uniform continuity:
$M_i - m_i \lt \varepsilon/(b-a)$. Therefore:

$$U(f,P) - L(f,P) = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆(M_i - m_i)\Delta x_i \lt \frac◆LB◆\varepsilon◆RB◆◆LB◆b-a◆RB◆ \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ \Delta x_i = \varepsilon$$

By the Riemann integrability criterion, $f$ is integrable. $\blacksquare$

**Theorem 6.3.** Every monotone function on $[a,b]$ is Riemann integrable.

_Proof._ Assume $f$ is increasing (the decreasing case is analogous). Given $\varepsilon > 0$Let
$P_n$ be the uniform partition with $n$ subintervals of length $(b-a)/n$. On $[x_◆LB◆i-1◆RB◆, x_i]$:
$M_i = f(x_i)$ and $m_i = f(x_◆LB◆i-1◆RB◆)$. Then:

$$U(f, P_n) - L(f, P_n) = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ [f(x_i) - f(x_◆LB◆i-1◆RB◆)] \cdot \frac◆LB◆b-a◆RB◆◆LB◆n◆RB◆ = [f(b) - f(a)] \cdot \frac◆LB◆b-a◆RB◆◆LB◆n◆RB◆$$

Choose $n$ large enough that $[f(b) - f(a)](b-a)/n \lt \varepsilon$. $\blacksquare$

**Theorem 6.4.** A bounded function with finitely many discontinuities on $[a,b]$ is Riemann
integrable.

_Proof (sketch)._ Let $f$ have discontinuities at $d_1, \ldots, d_m \in [a,b]$. Given
$\varepsilon > 0$ Enclose each $d_j$ in a small interval $I_j$ of total length
$\varepsilon/(2M)$Where $M = \sup_◆LB◆[a,b]◆RB◆ |f|$. On the remaining set (a finite union of closed
intervals), $f$ is continuous, Hence uniformly continuous. Choose a partition fine enough that the
oscillation of $f$ on each Subinterval outside the $I_j$ is less than $\varepsilon/(2(b-a))$. Then:

$$U(f, P) - L(f, P) \leq \frac◆LB◆\varepsilon◆RB◆◆LB◆2(b-a)◆RB◆ \cdot (b - a) + 2M \cdot \frac◆LB◆\varepsilon◆RB◆◆LB◆2M◆RB◆ = \varepsilon$$

$\blacksquare$

**Proposition 6.4a.** The set of Riemann integrable functions on $[a,b]$ forms a vector space, and
If $f$ and $g$ are integrable, then so are $|f|$, $f^2$And $\max(f, g)$.

**Theorem 6.4b (Lebesgue's Criterion for Riemann Integrability).** A bounded function
$f : [a,b] \to \mathbb◆LB◆R◆RB◆$ Is Riemann integrable if and only if the set of its discontinuities has
(Lebesgue) measure zero.

_Remark._ A set has measure zero if it can be covered by countably many intervals of arbitrarily
Small total length. In particular, every countable set has measure zero. This means:

- Every continuous function is integrable (empty set of discontinuities).
- Every function with countably many discontinuities is integrable (Theorem 6.4 is a special case).
- The Dirichlet function $f(x) = 1$ for $x \in \mathbb◆LB◆Q◆RB◆$ and $f(x) = 0$ for $x \notin \mathbb◆LB◆Q◆RB◆$
  is discontinuous everywhere (set of discontinuities = $[a,b]$Measure $> 0$), hence not integrable.
- Thomae's function $f(x) = 1/q$ if $x = p/q$ in lowest terms, and $f(x) = 0$ if $x$ is irrational,
  is continuous at every irrational and discontinuous at every rational. Since $\mathbb◆LB◆Q◆RB◆$ is
  countable (measure zero), Thomae's function is Riemann integrable, with $\int_0^1 f = 0$.

### 6.3 Properties of the Integral

**Theorem 6.5 (Linearity).** If $f$ and $g$ are integrable on $[a,b]$ and
$\alpha, \beta \in \mathbb◆LB◆R◆RB◆$:

$$\int_a^b (\alpha f + \beta g) = \alpha \int_a^b f + \beta \int_a^b g$$

**Theorem 6.6 (Monotonicity).** If $f(x) \leq g(x)$ for all $x \in [a,b]$Then
$\int_a^b f \leq \int_a^b g$.

**Theorem 6.7 (Triangle Inequality).** $\left|\int_a^b f\right| \leq \int_a^b |f|$.

### 6.4 The Fundamental Theorem of Calculus

**Theorem 6.8 (FTC Part 1).** If $f$ is continuous on $[a,b]$Then the function

$$F(x) = \int_a^x f(t)\, dt$$

Is differentiable on $(a,b)$ and $F'(x) = f(x)$.

_Proof._ Let $h > 0$ (the case $h \lt 0$ is similar). By the Mean Value Theorem for Integrals (which
follows from the EVT), there exists $\xi \in [x, x+h]$ such that

$$\frac◆LB◆F(x+h) - F(x)◆RB◆◆LB◆h◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆h◆RB◆\int_x^◆LB◆x+h◆RB◆ f(t)\, dt = f(\xi)$$

As $h \to 0^+$We have $\xi \to x^+$ (since $\xi \in [x, x+h]$). By continuity of $f$
$f(\xi) \to f(x)$. Hence $F'_+(x) = f(x)$. A similar argument gives $F'_-(x) = f(x)$. $\blacksquare$

**Theorem 6.9 (FTC Part 2).** If $F$ is differentiable on $[a,b]$ with $F' = f$ (and $f$ is
integrable), Then

$$\int_a^b f(x)\, dx = F(b) - F(a)$$

_Proof._ Let $P = \{x_0, \ldots, x_n\}$ be any partition of $[a,b]$. By the Mean Value Theorem, For
each $i$ there exists $\xi_i \in [x_◆LB◆i-1◆RB◆, x_i]$ with $F(x_i) - F(x_◆LB◆i-1◆RB◆) = f(\xi_i)\Delta x_i$.
Summing:

$$F(b) - F(a) = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ [F(x_i) - F(x_◆LB◆i-1◆RB◆)] = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ f(\xi_i) \Delta x_i$$

The right-hand side is a Riemann sum for $\int_a^b f$. As $\|P\| \to 0$This converges to the
Integral. Hence $F(b) - F(a) = \int_a^b f(x)\, dx$. $\blacksquare$

### 6.5 Worked Examples

**Problem.** Compute $\int_0^1 x^2\, dx$ from the definition.

_Solution._ Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[x_◆LB◆i-1◆RB◆, x_i] = [(i-1)/n, i/n]$, $f(x) = x^2$
Has $M_i = (i/n)^2$ and $m_i = ((i-1)/n)^2$.

$$U(f, P_n) = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ \frac◆LB◆i^2◆RB◆◆LB◆n^2◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆n◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆n^3◆RB◆ \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ i^2 = \frac◆LB◆1◆RB◆◆LB◆n^3◆RB◆ \cdot \frac◆LB◆n(n+1)(2n+1)◆RB◆◆LB◆6◆RB◆$$

As $n \to \infty$:
$\lim_◆LB◆n \to \infty◆RB◆ U(f, P_n) = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆(n+1)(2n+1)◆RB◆◆LB◆6n^2◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆6◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆$.

Similarly, $L(f, P_n) \to 1/3$. So $\int_0^1 x^2\, dx = 1/3$. $\blacksquare$

<details>
<summary>Worked Example: Compute $\int_0^1 \sqrt◆LB◆x◆RB◆\, dx$ from the definition</summary>

_Solution._ Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[(i-1)/n, i/n]$, $f(x) = \sqrt◆LB◆x◆RB◆$ has
$M_i = \sqrt◆LB◆i/n◆RB◆$ and $m_i = \sqrt◆LB◆(i-1)/n◆RB◆$.

$$U(f, P_n) = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ \sqrt◆LB◆\frac◆LB◆i◆RB◆◆LB◆n◆RB◆◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆n◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆n^◆LB◆3/2◆RB◆◆RB◆ \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ \sqrt◆LB◆i◆RB◆$$

Using $\sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ \sqrt◆LB◆i◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆3◆RB◆ n^◆LB◆3/2◆RB◆ + O(n^◆LB◆1/2◆RB◆)$ (obtained from comparing with
$\int_0^n \sqrt◆LB◆x◆RB◆\, dx$):

$$\lim_◆LB◆n \to \infty◆RB◆ U(f, P_n) = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n^◆LB◆3/2◆RB◆◆RB◆ \cdot \frac◆LB◆2◆RB◆◆LB◆3◆RB◆n^◆LB◆3/2◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆3◆RB◆$$

Similarly $L(f, P_n) \to 2/3$Confirming $\int_0^1 \sqrt◆LB◆x◆RB◆\, dx = 2/3$. $\blacksquare$

</details>

### 6.6 Improper Integrals

**Definition.** An **improper integral** is a Riemann integral where either the interval of
integration Is unbounded or the integrand is unbounded.

**Type I (Infinite Intervals).** If $f$ is Riemann integrable on $[a, b]$ for every $b > a$Define:

$$\int_a^◆LB◆\infty◆RB◆ f(x)\, dx = \lim_◆LB◆b \to \infty◆RB◆ \int_a^b f(x)\, dx$$

The integral **converges** if this limit exists as a finite number; otherwise it **diverges**.

**Type II (Unbounded Integrands).** If $f$ is unbounded near $a$ but integrable on $[c, b]$ for
every $c \in (a, b]$:

$$\int_a^b f(x)\, dx = \lim_◆LB◆c \to a^+◆RB◆ \int_c^b f(x)\, dx$$

**Theorem 6.10 (Comparison Test for Improper Integrals).** If $0 \leq f(x) \leq g(x)$ for
$x \geq a$:

- If $\int_a^◆LB◆\infty◆RB◆ g$ converges, then $\int_a^◆LB◆\infty◆RB◆ f$ converges.
- If $\int_a^◆LB◆\infty◆RB◆ f$ diverges, then $\int_a^◆LB◆\infty◆RB◆ g$ diverges.

**Theorem 6.11 (Absolute Convergence).** If $\int_a^◆LB◆\infty◆RB◆ |f(x)|\, dx$ converges, then
$\int_a^◆LB◆\infty◆RB◆ f(x)\, dx$ converges.

**Theorem 6.12 ($p$-Test for Improper Integrals).**

- **Type I:** $\int_1^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆x^p◆RB◆\, dx$ converges if and only if $p > 1$.
- **Type II:** $\int_0^1 \frac◆LB◆1◆RB◆◆LB◆x^p◆RB◆\, dx$ converges if and only if $p < 1$.

_Proof._ For Type I with $p \neq 1$:

$$\int_1^◆LB◆\infty◆RB◆ x^◆LB◆-p◆RB◆\, dx = \lim_◆LB◆b \to \infty◆RB◆ \left[\frac◆LB◆x^◆LB◆1-p◆RB◆◆RB◆◆LB◆1-p◆RB◆\right]_1^b = \lim_◆LB◆b \to \infty◆RB◆ \frac◆LB◆b^◆LB◆1-p◆RB◆ - 1◆RB◆◆LB◆1-p◆RB◆$$

This converges when $1 - p < 0$I.e., $p > 1$. For $p = 1$:
$\int_1^◆LB◆\infty◆RB◆ 1/x\, dx = \lim_◆LB◆b \to \infty◆RB◆ \ln b = \infty$.

For Type II: $\int_0^1 x^◆LB◆-p◆RB◆\, dx = \lim_◆LB◆c \to 0^+◆RB◆ \frac◆LB◆1 - c^◆LB◆1-p◆RB◆◆RB◆◆LB◆1-p◆RB◆$. This converges when
$1 - p > 0$I.e., $p < 1$. $\blacksquare$

_Remark._ The $p$-test for Type I integrals mirrors the $p$-series test: $\sum 1/n^p$ converges Iff
$p > 1$. This is not a coincidence --- the integral test establishes the connection.

<details>
<summary>Worked Example: Evaluate $\int_0^◆LB◆\infty◆RB◆ e^◆LB◆-x◆RB◆\, dx$</summary>

_Solution._ This is a Type I improper integral:

$$\int_0^◆LB◆\infty◆RB◆ e^◆LB◆-x◆RB◆\, dx = \lim_◆LB◆b \to \infty◆RB◆ \int_0^b e^◆LB◆-x◆RB◆\, dx = \lim_◆LB◆b \to \infty◆RB◆ \left[-e^◆LB◆-x◆RB◆\right]_0^b = \lim_◆LB◆b \to \infty◆RB◆ (-e^◆LB◆-b◆RB◆ + 1) = 1$$

So the integral converges to $1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Does $\int_1^◆LB◆\infty◆RB◆ \frac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆\, dx$ converge?</summary>

_Solution._ The integral $\int_1^◆LB◆\infty◆RB◆ \left|\frac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆\right|\, dx$ diverges (compare with
$\int_1^◆LB◆\infty◆RB◆ \frac◆LB◆|\sin x|◆RB◆◆LB◆x◆RB◆\, dx \geq \sum_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆ \int_◆LB◆k\pi◆RB◆^◆LB◆(k+1)\pi◆RB◆ \frac◆LB◆|\sin x|◆RB◆◆LB◆x◆RB◆\, dx \geq
\sum_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆2◆RB◆◆LB◆(k+1)\pi◆RB◆$,
which diverges by comparison with the harmonic series).

However, $\int_1^◆LB◆\infty◆RB◆ \frac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆\, dx$ converges by **Dirichlet's test for integrals**.
Let $F(b) = \int_1^b \sin x\, dx = \cos 1 - \cos b$Which is bounded by $|\cos 1 - \cos b| \leq 2$.
Since $1/x$ decreases to $0$By integration by parts:

$$\int_1^b \frac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆\, dx = \frac◆LB◆-\cos x◆RB◆◆LB◆x◆RB◆\bigg|_1^b - \int_1^b \frac◆LB◆\cos x◆RB◆◆LB◆x^2◆RB◆\, dx$$

As $b \to \infty$The boundary term $\cos b / b \to 0$ and
$\int_1^◆LB◆\infty◆RB◆ \frac◆LB◆|\cos x|◆RB◆◆LB◆x^2◆RB◆\, dx \leq
\int_1^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆x^2◆RB◆\, dx = 1$, so the
improper integral converges (conditionally). $\blacksquare$

</details>

<details>
<summary>Worked Example: Evaluate $\int_0^1 \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆x◆RB◆◆RB◆\, dx$ (Type II improper integral)</summary>

_Solution._ The integrand $f(x) = 1/\sqrt◆LB◆x◆RB◆$ is unbounded as $x \to 0^+$. Compute:

$$\int_0^1 \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆x◆RB◆◆RB◆\, dx = \lim_◆LB◆c \to 0^+◆RB◆ \int_c^1 x^◆LB◆-1/2◆RB◆\, dx = \lim_◆LB◆c \to 0^+◆RB◆ \left[2\sqrt◆LB◆x◆RB◆\right]_c^1 = \lim_◆LB◆c \to 0^+◆RB◆ (2 - 2\sqrt◆LB◆c◆RB◆) = 2$$

The improper integral converges to $2$. Note that $\int_0^1 x^◆LB◆-p◆RB◆\, dx$ converges for $p \lt 1$ and
Diverges for $p \geq 1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Determine convergence of $\int_1^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆x^p◆RB◆\, dx$ for various $p$</summary>

_Solution._ By the $p$-test (Theorem 6.12): $\int_1^◆LB◆\infty◆RB◆ x^◆LB◆-p◆RB◆\, dx$ converges iff $p > 1$.

Specifically:

- $p = 2$: $\int_1^◆LB◆\infty◆RB◆ 1/x^2\, dx = \lim_◆LB◆b \to \infty◆RB◆ [-1/x]_1^b = 0 - (-1) = 1$. Converges.
- $p = 1$: $\int_1^◆LB◆\infty◆RB◆ 1/x\, dx = \lim_◆LB◆b \to \infty◆RB◆ \ln b = \infty$. Diverges.
- $p = 1/2$: $\int_1^◆LB◆\infty◆RB◆ 1/\sqrt◆LB◆x◆RB◆\, dx = \lim_◆LB◆b \to \infty◆RB◆ [2\sqrt◆LB◆x◆RB◆]_1^b = \infty$.
  Diverges.

This mirrors the $p$-series test: $\sum 1/n^p$ converges iff $p > 1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Evaluate $\int_0^◆LB◆\infty◆RB◆ x e^◆LB◆-x◆RB◆\, dx$</summary>

_Solution._ This integral requires both a Type I and Type II limit:

$$\int_0^◆LB◆\infty◆RB◆ x e^◆LB◆-x◆RB◆\, dx = \lim_◆LB◆a \to 0^+◆RB◆ \lim_◆LB◆b \to \infty◆RB◆ \int_a^b x e^◆LB◆-x◆RB◆\, dx$$

Integrate by parts with $u = x$, $dv = e^◆LB◆-x◆RB◆\, dx$So $du = dx$, $v = -e^◆LB◆-x◆RB◆$:

$$\int x e^◆LB◆-x◆RB◆\, dx = -xe^◆LB◆-x◆RB◆ + \int e^◆LB◆-x◆RB◆\, dx = -xe^◆LB◆-x◆RB◆ - e^◆LB◆-x◆RB◆ = -(x+1)e^◆LB◆-x◆RB◆$$

Evaluating: $\lim_◆LB◆b \to \infty◆RB◆ [-(b+1)e^◆LB◆-b◆RB◆] - \lim_◆LB◆a \to 0^+◆RB◆ [-(a+1)e^◆LB◆-a◆RB◆] = 0 - (-1) = 1$.

So $\int_0^◆LB◆\infty◆RB◆ x e^◆LB◆-x◆RB◆\, dx = 1$. This equals $\Gamma(2) = 1! = 1$. $\blacksquare$

</details>

:::caution Common Pitfall The Riemann integral is defined for bounded functions on closed, bounded
intervals. For unbounded Functions or infinite intervals, one must use the improper Riemann
integral. A common error is Applying the FTC directly to improper integrals without taking the
limit. Also, conditional Convergence of improper integrals behaves differently from absolute
convergence: rearranging the "terms" (subintervals) of a conditionally convergent improper integral
can change its value. :::

## 7. Sequences and Series of Functions

### 7.1 Pointwise Convergence

Let $(f_n)$ be a sequence of functions defined on a set $E \subseteq \mathbb◆LB◆R◆RB◆$.

**Definition.** $(f_n)$ **converges pointwise** to $f$ on $E$ if for every $x \in E$ and every
$\varepsilon > 0$There exists $N \in \mathbb◆LB◆N◆RB◆$ (depending on both $x$ and $\varepsilon$) such that
$|f_n(x) - f(x)| \lt \varepsilon$ for all $n \geq N$.

**Example.** Let $f_n(x) = x^n$ on $E = [0, 1]$. For each $x \in [0, 1)$, $f_n(x) = x^n \to 0$And
$f_n(1) = 1$ for all $n$. So $f_n$ converges pointwise to

$$f(x) = \begin◆LB◆cases◆RB◆ 0 & \mathrm◆LB◆if\  0 \leq x \lt 1 \\ 1 & \mathrm◆LB◆if\  x = 1 \end◆LB◆cases◆RB◆$$

Note that each $f_n$ is continuous, but the pointwise limit $f$ is not continuous at $x = 1$.

### 7.2 Uniform Convergence

**Definition.** $(f_n)$ **converges uniformly** to $f$ on $E$ if for every $\varepsilon > 0$There
Exists $N \in \mathbb◆LB◆N◆RB◆$ (depending only on $\varepsilon$Not on $x$) such that for all $x \in E$:

$$|f_n(x) - f(x)| \lt \varepsilon \quad \mathrm◆LB◆for\ all\  n \geq N$$

Equivalently, $\sup_◆LB◆x \in E◆RB◆ |f_n(x) - f(x)| \to 0$ as $n \to \infty$.

**Proposition 7.1.** Uniform convergence implies pointwise convergence. The converse is false.

**Example (continued).** $f_n(x) = x^n$ on $[0, 1]$ converges pointwise but not uniformly. We have
$\sup_◆LB◆x \in [0,1]◆RB◆ |f_n(x) - f(x)| = \sup_◆LB◆x \in [0,1)◆RB◆ x^n = 1$ for all $n$ (since the supremum is
Approached as $x \to 1^-$). This does not tend to $0$.

However, on $[0, r]$ for any $r \lt 1$: $\sup_◆LB◆x \in [0,r]◆RB◆ |x^n| = r^n \to 0$So the convergence Is
uniform on $[0, r]$.

### 7.3 The Weierstrass M-Test

**Theorem 7.1 (Weierstrass M-Test).** Let $(f_n)$ be a sequence of functions on $E$. If there exists
a Sequence $(M_n)$ of non-negative real numbers such that $|f_n(x)| \leq M_n$ for all $x \in E$ and
all $n$And $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ M_n \lt \infty$Then $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ f_n$ converges uniformly on
$E$.

_Proof._ Let $S_n(x) = \sum_◆LB◆k=1◆RB◆^◆LB◆n◆RB◆ f_k(x)$ and $T_n = \sum_◆LB◆k=1◆RB◆^◆LB◆n◆RB◆ M_k$. Since $\sum M_k$
converges, $(T_n)$ is a Cauchy sequence. Given $\varepsilon > 0$There exists $N$ such that for
$m > n \geq N$:

$$T_m - T_n = \sum_◆LB◆k=n+1◆RB◆^◆LB◆m◆RB◆ M_k \lt \varepsilon$$

Then for all $x \in E$ and $m > n \geq N$:

$$|S_m(x) - S_n(x)| = \left|\sum_◆LB◆k=n+1◆RB◆^◆LB◆m◆RB◆ f_k(x)\right| \leq \sum_◆LB◆k=n+1◆RB◆^◆LB◆m◆RB◆ |f_k(x)| \leq \sum_◆LB◆k=n+1◆RB◆^◆LB◆m◆RB◆ M_k \lt \varepsilon$$

So the partial sums $(S_n)$ satisfy the uniform Cauchy criterion on $E$Hence converge uniformly.
$\blacksquare$

### 7.4 Uniform Convergence and Continuity

**Theorem 7.2.** If $(f_n)$ is a sequence of continuous functions on $E$ converging uniformly to $f$
On $E$Then $f$ is continuous on $E$.

_Proof._ Let $c \in E$ and $\varepsilon > 0$. Since $f_n \to f$ uniformly, choose $N$ such that
$|f_N(x) - f(x)| \lt \varepsilon/3$ for all $x \in E$. Since $f_N$ is continuous at $c$Choose
$\delta > 0$ such that $|x - c| \lt \delta$ implies $|f_N(x) - f_N(c)| \lt \varepsilon/3$. Then:

$$|f(x) - f(c)| \leq |f(x) - f_N(x)| + |f_N(x) - f_N(c)| + |f_N(c) - f(c)| \lt \frac◆LB◆\varepsilon◆RB◆◆LB◆3◆RB◆ + \frac◆LB◆\varepsilon◆RB◆◆LB◆3◆RB◆ + \frac◆LB◆\varepsilon◆RB◆◆LB◆3◆RB◆ = \varepsilon$$

$\blacksquare$

### 7.5 Uniform Convergence and Integration

**Theorem 7.3.** If $(f_n)$ is a sequence of Riemann integrable functions on $[a, b]$ converging
Uniformly to $f$ on $[a, b]$Then $f$ is Riemann integrable and

$$\lim_◆LB◆n \to \infty◆RB◆ \int_a^b f_n(x)\, dx = \int_a^b f(x)\, dx$$

_Proof._ Since $(f_n)$ converges uniformly, $f$ is the uniform limit of integrable functions. Given
$\varepsilon > 0$Choose $N$ with $\sup |f_N(x) - f(x)| \lt \varepsilon/(2(b-a))$ for all
$x \in [a, b]$. Then $f_N - \varepsilon/(2(b-a)) \leq f(x) \leq f_N(x) + \varepsilon/(2(b-a))$ for
all $x$And by Integrability of $f_N$:

$$\int_a^b f_N - \frac◆LB◆\varepsilon◆RB◆◆LB◆2◆RB◆ \leq \underline◆LB◆\int_a^b◆RB◆ f \leq \overline◆LB◆\int_a^b◆RB◆ f \leq \int_a^b f_N + \frac◆LB◆\varepsilon◆RB◆◆LB◆2◆RB◆$$

So $\overline◆LB◆\int◆RB◆ f - \underline◆LB◆\int◆RB◆ f \leq \varepsilon$Proving $f$ is integrable. For the
limit:

$$\left|\int_a^b f_n - \int_a^b f\right| \leq \int_a^b |f_n - f| \leq (b-a) \cdot \sup_◆LB◆[a,b]◆RB◆ |f_n - f| \to 0$$

$\blacksquare$

### 7.6 Uniform Convergence and Differentiation

Uniform convergence of functions does **not** guarantee convergence of derivatives. A stronger
Hypothesis is needed.

**Theorem 7.4.** Suppose $(f_n)$ is a sequence of differentiable functions on $[a, b]$ such that:

1. $(f_n(c))$ converges for some $c \in [a, b]$
2. $(f_n')$ converges uniformly on $[a, b]$

Then $(f_n)$ converges uniformly to a differentiable function $f$ on $[a, b]$And
$f'(x) = \lim_◆LB◆n \to \infty◆RB◆ f_n'(x)$.

_Proof._ Let $g = \lim f_n'$ (uniform limit). Define
$f(x) = \lim_◆LB◆n \to \infty◆RB◆ \left[f_n(c) + \int_c^x f_n'(t)\, dt\right]$. By Theorem 7.3,
$\int_c^x f_n'(t)\, dt \to \int_c^x g(t)\, dt$So $f(x) = f(c) + \int_c^x g(t)\, dt$. By FTC Part 1,
$f$ is differentiable and $f'(x) = g(x)$. Uniform convergence of $f_n$ to $f$ follows From the
estimate $|f_n(x) - f(x)| \leq |f_n(c) - f(c)| + \int_a^b |f_n'(t) - g(t)|\, dt$. $\blacksquare$

### 7.7 Power Series

A **power series** centered at $a$ is a series of the form $\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ c_n (x - a)^n$.

**Theorem 7.5 (Radius of Convergence).** Every power series $\sum c_n (x - a)^n$ has a **radius of
Convergence** $R \in [0, \infty]$ such that:

- The series converges absolutely for $|x - a| \lt R$
- The series diverges for $|x - a| > R$
- The behavior at $|x - a| = R$ must be checked separately

The radius is given by $1/R = \limsup_◆LB◆n \to \infty◆RB◆ \sqrt[n]◆LB◆|c_n|◆RB◆$ (Cauchy-Hadamard formula), or
When the limit exists, $R = \lim_◆LB◆n \to \infty◆RB◆ |c_n/c_◆LB◆n+1◆RB◆|$.

_Proof._ Apply the root test to $\sum |c_n (x-a)^n|$: $\limsup \sqrt[n]◆LB◆|c_n|◆RB◆ |x-a| = |x-a|/R$
(where $1/R = \limsup \sqrt[n]◆LB◆|c_n|◆RB◆$). The root test gives convergence when $|x-a|/R \lt 1$ And
divergence when $|x-a|/R > 1$. $\blacksquare$

**Theorem 7.6.** A power series converges uniformly on every compact subset of its open disk of
Convergence.

**Theorem 7.6a (Differentiation and Integration of Power Series).** If
$f(x) = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ c_n (x-a)^n$ Has radius of convergence $R > 0$Then:

1. $f$ is differentiable on $(a - R, a + R)$ and $f'(x) = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ n c_n (x - a)^◆LB◆n-1◆RB◆$
   (same $R$).
2. $f$ is infinitely differentiable on $(a - R, a + R)$And
   $f^◆LB◆(k)◆RB◆(x) = \sum_◆LB◆n=k◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆n!◆RB◆◆LB◆(n-k)!◆RB◆ c_n (x - a)^◆LB◆n-k◆RB◆$.
3. $\int_a^x f(t)\, dt = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆c_n◆RB◆◆LB◆n+1◆RB◆(x - a)^◆LB◆n+1◆RB◆$ for $|x - a| \lt R$.
4. $c_n = f^◆LB◆(n)◆RB◆(a)/n!$ (uniqueness of power series coefficients).

_Proof._ The differentiated series $\sum n c_n (x-a)^◆LB◆n-1◆RB◆$ has the same radius of convergence as
The original (by the Cauchy-Hadamard formula, since $\sqrt[n]◆LB◆n◆RB◆ \to 1$). By Theorem 7.4, the
Derivative of the sum equals the sum of the derivatives. Parts (2), (3), and (4) follow by Induction
and the FTC. $\blacksquare$

**Theorem 7.6b (Abel's Theorem).** If $\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ c_n$ converges to $L$Then

$$\lim_◆LB◆x \to 1^-◆RB◆ \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ c_n x^n = L$$

That is, the power series is continuous from the left at the endpoint $x = 1$.

_Proof (sketch)._ Let $s_n = \sum_◆LB◆k=0◆RB◆^◆LB◆n◆RB◆ c_k$ and $s_n \to L$. Write the partial sum
$\sum_◆LB◆k=0◆RB◆^◆LB◆n◆RB◆ c_k x^k = \sum_◆LB◆k=0◆RB◆^◆LB◆n◆RB◆(s_k - s_◆LB◆k-1◆RB◆)x^k$ (with $s_◆LB◆-1◆RB◆ = 0$) and use summation by
Parts to express this as $s_n x^n + \sum_◆LB◆k=0◆RB◆^◆LB◆n-1◆RB◆ s_k(x^k - x^◆LB◆k+1◆RB◆)$. Letting $n \to \infty$ and
using That $s_n \to L$ and $x^n \to 0$ for $|x| \lt 1$One shows the expression tends to $L$ as
$x \to 1^-$. $\blacksquare$

_Example._ Since $\sum_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆ (-1)^◆LB◆k+1◆RB◆/k = \ln 2$Abel's theorem gives
$\lim_◆LB◆x \to 1^-◆RB◆ \sum_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆ (-1)^◆LB◆k+1◆RB◆ x^k/k = \ln 2$I.e., $\ln 2$ is the left-hand limit
Of $-\ln(1 - x)$ at $x = 1$.

### 7.8 Taylor Series Convergence

The **Taylor series** of $f$ at $a$ is $\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆f^◆LB◆(n)◆RB◆(a)◆RB◆◆LB◆n!◆RB◆(x - a)^n$.

**Definition.** A function $f$ is **analytic** at $a$ if its Taylor series at $a$ converges to
$f(x)$ In some neighborhood of $a$.

Not every $C^◆LB◆\infty◆RB◆$ function is analytic. The standard counterexample is:

$$f(x) = \begin◆LB◆cases◆RB◆ e^◆LB◆-1/x^2◆RB◆ & x \neq 0 \\ 0 & x = 0 \end◆LB◆cases◆RB◆$$

$f^◆LB◆(n)◆RB◆(0) = 0$ for all $n$So the Taylor series at $0$ is identically zero, which Converges only to
$0$Not to $f(x)$ for $x \neq 0$.

### 7.9 Worked Examples

<details>
<summary>Worked Example: Show $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆x^n◆RB◆◆LB◆n^2◆RB◆$ converges uniformly on $[-1, 1]$</summary>

_Solution._ For $x \in [-1, 1]$: $\left|\frac◆LB◆x^n◆RB◆◆LB◆n^2◆RB◆\right| \leq \frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆$. Since
$\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆$ converges (it is a $p$-series with $p = 2 > 1$), the Weierstrass
M-Test with $M_n = 1/n^2$ implies the series converges uniformly on $[-1, 1]$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Find the radius of convergence of $\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆x^n◆RB◆◆LB◆n!◆RB◆$</summary>

_Solution._ Apply the ratio test to the coefficients:
$\lim_◆LB◆n \to \infty◆RB◆ \left|\frac◆LB◆c_◆LB◆n+1◆RB◆◆RB◆◆LB◆c_n◆RB◆\right|
= \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆n!◆RB◆◆LB◆(n+1)!◆RB◆ = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n+1◆RB◆ = 0$.

So $R = \infty$ and the series converges for all $x \in \mathbb◆LB◆R◆RB◆$. This is the power series for
$e^x$. By Theorem 7.4, the derivative of the sum equals
$\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆n x^◆LB◆n-1◆RB◆◆RB◆◆LB◆n!◆RB◆
= \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆x^◆LB◆n-1◆RB◆◆RB◆◆LB◆(n-1)!◆RB◆ = \sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆x^k◆RB◆◆LB◆k!◆RB◆ = e^x$,
confirming That $e^x$ is its own derivative. $\blacksquare$

</details>

<details>
<summary>Worked Example: Find the radius of convergence of $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ n! \, x^n$</summary>

_Solution._ Apply the ratio test to the coefficients:

$$\lim_◆LB◆n \to \infty◆RB◆ \left|\frac◆LB◆c_◆LB◆n+1◆RB◆◆RB◆◆LB◆c_n◆RB◆\right| = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆(n+1)!◆RB◆◆LB◆n!◆RB◆ = \lim_◆LB◆n \to \infty◆RB◆ (n+1) = \infty$$

So $R = 0$Meaning the series converges only at $x = 0$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Show $f_n(x) = \frac◆LB◆x◆RB◆◆LB◆1 + nx◆RB◆$ converges uniformly on $[1, \infty)$</summary>

_Solution._ **Pointwise limit:** For $x \geq 1$:
$\lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆x◆RB◆◆LB◆1 + nx◆RB◆ = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆1/x + n◆RB◆ = 0$.

**Uniform convergence:**
$\sup_◆LB◆x \in [1, \infty)◆RB◆ \left|\frac◆LB◆x◆RB◆◆LB◆1 + nx◆RB◆ - 0\right| = \sup_◆LB◆x \geq 1◆RB◆ \frac◆LB◆x◆RB◆◆LB◆1 + nx◆RB◆$. To
find the maximum, differentiate with respect to $x$:
$\frac◆LB◆d◆RB◆◆LB◆dx◆RB◆\left(\frac◆LB◆x◆RB◆◆LB◆1+nx◆RB◆\right) = \frac◆LB◆1◆RB◆◆LB◆(1+nx)^2◆RB◆ > 0$. So the function is increasing in
$x$ on $[1, \infty)$And:

$$\sup_◆LB◆x \geq 1◆RB◆ \frac◆LB◆x◆RB◆◆LB◆1 + nx◆RB◆ = \lim_◆LB◆x \to \infty◆RB◆ \frac◆LB◆x◆RB◆◆LB◆1 + nx◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆n◆RB◆$$

Since $\sup |f_n| = 1/n \to 0$The convergence is uniform on $[1, \infty)$. $\blacksquare$

</details>

:::caution Common Pitfall Pointwise convergence does not preserve continuity, differentiability, or
integrability. Uniform Convergence preserves continuity and allows interchange of limit and
integral, but not limit and Derivative. For derivatives, uniform convergence of the _sequence of
derivatives_ (not the original Sequence) is required, as stated in Theorem 7.4. Also, the
Weierstrass M-Test applies only to series Of functions, not sequences; for sequences, one must
verify the uniform Cauchy criterion directly. :::

## 8. Problem Set

**Problem 1.** Let $A, B \subseteq \mathbb◆LB◆R◆RB◆$ be non-empty and bounded above. Prove that
$\sup(A \cup B) = \max(\sup A, \sup B)$.

<details>
<summary>Solution</summary>

_Solution._ Let $M = \max(\sup A, \sup B)$. Without loss, assume $\sup A \geq \sup B$So
$M = \sup A$. For all $x \in A \cup B$: either $x \in A$So $x \leq \sup A = M$; or $x \in B$So
$x \leq \sup B \leq M$. Thus $M$ is an upper bound for $A \cup B$.

For the least property: since $M = \sup A$ and $A \subseteq A \cup B$Every upper bound of $A \cup B$
Is an upper bound of $A$Hence $\geq \sup A = M$. Therefore $\sup(A \cup B) = M$. $\blacksquare$

_If you get this wrong, revise:_ Section 1.3 (Supremum and Infimum), Section 1.5 (Properties).

</details>

**Problem 2.** Prove that $\inf A = -\sup(-A)$ for any non-empty bounded set
$A \subseteq \mathbb◆LB◆R◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ Let $u = \sup(-A)$. For all $a \in A$: $-a \in -A$So $-a \leq u$Giving $a \geq -u$. Thus
$-u$ is a lower bound for $A$. If $v$ is any lower bound for $A$Then $-v$ is an upper bound for
$-A$So $u \leq -v$I.e., $-u \geq v$. Hence $-u$ is the greatest lower bound, so
$\inf A = -u = -\sup(-A)$. $\blacksquare$

_If you get this wrong, revise:_ Section 1.5 (Properties of Supremum and Infimum).

</details>

**Problem 3.** Using the $\varepsilon$-$N$ definition, prove that
$\lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆n^2 + 3n◆RB◆◆LB◆2n^2 + 1◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ Let $\varepsilon > 0$. Compute:

$$\left|\frac◆LB◆n^2 + 3n◆RB◆◆LB◆2n^2 + 1◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right| = \left|\frac◆LB◆2(n^2 + 3n) - (2n^2 + 1)◆RB◆◆LB◆2(2n^2 + 1)◆RB◆\right| = \left|\frac◆LB◆6n - 1◆RB◆◆LB◆2(2n^2 + 1)◆RB◆\right|$$

For $n \geq 1$: $6n - 1 \lt 6n$ and $2n^2 + 1 > 2n^2$So

$$\frac◆LB◆6n - 1◆RB◆◆LB◆2(2n^2 + 1)◆RB◆ \lt \frac◆LB◆6n◆RB◆◆LB◆4n^2◆RB◆ = \frac◆LB◆3◆RB◆◆LB◆2n◆RB◆$$

We need $\frac◆LB◆3◆RB◆◆LB◆2n◆RB◆ \lt \varepsilon$I.e., $n > 3/(2\varepsilon)$. Choose
$N = \lceil 3/(2\varepsilon) \rceil$. For $n \geq N$: the expression is $\lt \varepsilon$.
$\blacksquare$

_If you get this wrong, revise:_ Section 2.1 (Convergence), Section 2.7 (Worked Examples).

</details>

**Problem 4.** Let $a_1 = 1$ and $a_◆LB◆n+1◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left(a_n + \frac◆LB◆2◆RB◆◆LB◆a_n◆RB◆\right)$. Prove
$(a_n)$ converges And find its limit.

<details>
<summary>Solution</summary>

_Solution._ **Step 1:** $(a_n)$ is bounded below by $\sqrt◆LB◆2◆RB◆$. By AM-GM:
$a_◆LB◆n+1◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(a_n + 2/a_n) \geq \sqrt◆LB◆a_n \cdot 2/a_n◆RB◆ = \sqrt◆LB◆2◆RB◆$.

**Step 2:** $(a_n)$ is decreasing for $n \geq 2$. Note $a_1 = 1$, $a_2 = 3/2$.
$a_◆LB◆n+1◆RB◆ - a_n = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(a_n + 2/a_n) - a_n = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(2/a_n - a_n) = \frac◆LB◆2 - a_n^2◆RB◆◆LB◆2a_n◆RB◆$.
Since $a_n \geq \sqrt◆LB◆2◆RB◆$ for $n \geq 2$, $a_n^2 \geq 2$So $a_◆LB◆n+1◆RB◆ - a_n \leq 0$.

**Step 3:** By the Monotone Convergence Theorem, $L = \lim a_n$ exists. Taking limits:
$L = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(L + 2/L)$Giving $2L = L + 2/L$So $L = 2/L$Hence $L^2 = 2$. Since
$a_n \geq \sqrt◆LB◆2◆RB◆$ for $n \geq 2$, $L \geq 0$So $L = \sqrt◆LB◆2◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.2 (Monotone Convergence Theorem), Section 2.7 (recursive
sequences).

</details>

**Problem 5.** Compute $\limsup_◆LB◆n \to \infty◆RB◆ a_n$ and $\liminf_◆LB◆n \to \infty◆RB◆ a_n$ for
$a_n = 2 + (-1)^n \frac◆LB◆n◆RB◆◆LB◆n+1◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ Write $a_n = 2 + (-1)^n \cdot \frac◆LB◆n◆RB◆◆LB◆n+1◆RB◆$.

For even $n = 2k$: $a_◆LB◆2k◆RB◆ = 2 + \frac◆LB◆2k◆RB◆◆LB◆2k+1◆RB◆ \to 2 + 1 = 3$. For odd $n = 2k - 1$:
$a_◆LB◆2k-1◆RB◆ = 2 - \frac◆LB◆2k-1◆RB◆◆LB◆2k◆RB◆ \to 2 - 1 = 1$.

Since these are the only two subsequential limits: $\limsup a_n = 3$ and $\liminf a_n = 1$. The
sequence diverges since $\limsup \neq \liminf$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.6 (Limit Superior and Limit Inferior).

</details>

**Problem 6.** Determine whether $\sum_◆LB◆n=2◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n(\ln n)^2◆RB◆$ converges.

<details>
<summary>Solution</summary>

_Solution._ Apply the integral test with $f(x) = 1/(x(\ln x)^2)$ on $[2, \infty)$. The function is
Positive, continuous, and decreasing. Compute via $u = \ln x$, $du = dx/x$:

$$\int_2^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆x(\ln x)^2◆RB◆\, dx = \int_◆LB◆\ln 2◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆u^2◆RB◆\, du = \left[-\frac◆LB◆1◆RB◆◆LB◆u◆RB◆\right]_◆LB◆\ln 2◆RB◆^◆LB◆\infty◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\ln 2◆RB◆ \lt \infty$$

The integral converges, so by the integral test, the series converges. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2 (Integral Test), Section 3.6 (Worked Examples).

</details>

**Problem 7.** Does $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^◆LB◆n+1◆RB◆◆RB◆◆LB◆n^◆LB◆1/3◆RB◆◆RB◆$ converge absolutely,
conditionally, or diverge?

<details>
<summary>Solution</summary>

_Solution._ The absolute series is $\sum 1/n^◆LB◆1/3◆RB◆$Which is a $p$-series with $p = 1/3 \lt 1$ So it
diverges. Hence the series does not converge absolutely.

For conditional convergence, apply the alternating series test: $a_n = 1/n^◆LB◆1/3◆RB◆$ is positive,
Decreasing, and $a_n \to 0$. Therefore $\sum (-1)^◆LB◆n+1◆RB◆/n^◆LB◆1/3◆RB◆$ converges.

Since it converges but not absolutely, it converges **conditionally**. $\blacksquare$

_If you get this wrong, revise:_ Section 3.3 (Absolute and Conditional Convergence), Section 3.6
(Alternating Series Test).

</details>

**Problem 8.** Find the sum of $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n(n+2)◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ Use partial fractions:
$\frac◆LB◆1◆RB◆◆LB◆n(n+2)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆n◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆n+2◆RB◆\right)$. The $N$-th partial sum
telescopes:

$$S_N = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left[\left(\frac◆LB◆1◆RB◆◆LB◆1◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\right) + \left(\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\right) + \left(\frac◆LB◆1◆RB◆◆LB◆3◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆5◆RB◆\right) + \cdots + \left(\frac◆LB◆1◆RB◆◆LB◆N◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆N+2◆RB◆\right)\right]$$

Most terms cancel. The surviving terms are:

$$S_N = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left(1 + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆N+1◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆N+2◆RB◆\right)$$

As $N \to \infty$: $S_N \to \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(1 + 1/2) = \frac◆LB◆3◆RB◆◆LB◆4◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.1 (Definitions and Convergence), telescoping series.

</details>

**Problem 9.** Give an explicit rearrangement of $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^◆LB◆n+1◆RB◆◆RB◆◆LB◆n◆RB◆$ whose
sum is $0$.

<details>
<summary>Solution</summary>

_Solution._ By the Riemann Rearrangement Theorem, such a rearrangement exists. We construct it
Explicitly. The positive terms are $1, 1/3, 1/5, \ldots$ and the negative terms are
$-1/2, -1/4, -1/6, \ldots$.

Start: $S_1 = 1$. Then add negative terms until we go below $0$: $S_2 = 1 - 1/2 = 1/2 > 0$.
$S_3 = 1 - 1/2 - 1/4 = 1/4 > 0$. $S_4 = 1 - 1/2 - 1/4 - 1/6 = -1/12 \lt 0$.

Then add positive terms until we exceed $0$: $S_5 = -1/12 + 1/3 = 1/4 > 0$.

Then add negative terms until below $0$: $S_6 = 1/4 - 1/8 = 1/8 > 0$. $S_7 = 1/8 - 1/10 = 1/40 > 0$.
$S_8 = 1/40 - 1/12 = -7/120 \lt 0$.

Continue this process. Since $\sum 1/(2k-1) = \infty$ and $\sum 1/(2k) = \infty$We can always
Continue. Since $1/n \to 0$The oscillations shrink to $0$. The resulting rearrangement converges to
$0$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.5 (Rearrangement of Series).

</details>

**Problem 10.** Prove using $\varepsilon$-$\delta$ that $f(x) = x^3$ is continuous at every
$a \in \mathbb◆LB◆R◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ Let $a \in \mathbb◆LB◆R◆RB◆$ and $\varepsilon > 0$. Compute:

$$|f(x) - f(a)| = |x^3 - a^3| = |x - a| \cdot |x^2 + ax + a^2|$$

Restrict to $|x - a| \lt 1$So $|x| \lt |a| + 1$Giving
$|x^2 + ax + a^2| \leq (|a|+1)^2 + |a|(|a|+1) + a^2 = 3a^2 + 3|a| + 1$. Let $M = 3a^2 + 3|a| + 1$.

Choose $\delta = \min(1, \varepsilon/M)$. Then $|x - a| \lt \delta$ implies:

$$|x^3 - a^3| \leq |x - a| \cdot M \lt \frac◆LB◆\varepsilon◆RB◆◆LB◆M◆RB◆ \cdot M = \varepsilon$$

$\blacksquare$

_If you get this wrong, revise:_ Section 4.2 (Continuity), Section 4.7 (Worked Examples).

</details>

**Problem 11.** Prove that $f(x) = x \sin(1/x)$ (with $f(0) = 0$) is continuous on $\mathbb◆LB◆R◆RB◆$ but
not Uniformly continuous on $(0, 1)$. (Trick question --- see solution.)

<details>
<summary>Solution</summary>

_Solution._ **Continuity at $0$:** Given $\varepsilon > 0$Choose $\delta = \varepsilon$. For
$|x - 0| = |x| \lt \delta$: $|f(x) - f(0)| = |x \sin(1/x)| \leq |x| \lt \delta = \varepsilon$. So
$f$ is continuous at $0$. For $x \neq 0$, $f$ is a product of continuous functions, hence continuous.

**On uniform continuity:** Actually, $f(x) = x\sin(1/x)$ **is** uniformly continuous on $(0, 1)$!
Here is why: $f$ extends continuously to $[0, 1]$ (define $f(0) = 0$). By the Heine-Cantor theorem
(Theorem 4.5), $f$ is uniformly continuous on $[0, 1]$And hence on the subset $(0, 1)$.

The function that is **not** uniformly continuous on $(0, 1)$ is $g(x) = \sin(1/x)$Which does not
Extend continuously to $0$. Or $h(x) = 1/x$Which is unbounded. But $f(x) = x\sin(1/x)$ is bounded
And has a continuous extension, so it is uniformly continuous. $\blacksquare$

_If you get this wrong, revise:_ Section 4.5 (Uniform Continuity), Section 4.6 (Heine-Cantor).

</details>

**Problem 12.** Prove that if $f'(x) = g'(x)$ for all $x \in (a, b)$Then $f(x) = g(x) + C$ for some
Constant $C$.

<details>
<summary>Solution</summary>

_Solution._ Let $h(x) = f(x) - g(x)$. Then $h'(x) = f'(x) - g'(x) = 0$ for all $x \in (a, b)$. By
Corollary 5.4 (a consequence of the Mean Value Theorem), $h$ is constant on $(a, b)$. So
$f(x) - g(x) = C$ for some $C \in \mathbb◆LB◆R◆RB◆$I.e., $f(x) = g(x) + C$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.3 (Mean Value Theorem, Corollary 5.4).

</details>

**Problem 13.** Use Taylor's theorem with remainder to bound the error in approximating $e^◆LB◆0.2◆RB◆$
Using the fourth-degree Maclaurin polynomial.

<details>
<summary>Solution</summary>

_Solution._ The fourth-degree Maclaurin polynomial of $e^x$ is:

$$T_4(x) = 1 + x + \frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆x^3◆RB◆◆LB◆6◆RB◆ + \frac◆LB◆x^4◆RB◆◆LB◆24◆RB◆$$

By Taylor's theorem, $R_4(x) = \frac◆LB◆e^◆LB◆\xi◆RB◆◆RB◆◆LB◆5!◆RB◆ x^5$ for some $\xi$ between $0$ and $x$. For
$x = 0.2$: $\xi \in (0, 0.2)$So $e^◆LB◆\xi◆RB◆ \lt e^◆LB◆0.2◆RB◆ \lt e^◆LB◆1/4◆RB◆ \lt 1.3$.

$$|R_4(0.2)| = \frac◆LB◆e^◆LB◆\xi◆RB◆◆RB◆◆LB◆120◆RB◆ (0.2)^5 \lt \frac◆LB◆1.3◆RB◆◆LB◆120◆RB◆ \cdot 0.00032 = \frac◆LB◆1.3 \times 0.00032◆RB◆◆LB◆120◆RB◆ \approx 3.47 \times 10^◆LB◆-6◆RB◆$$

So $T_4(0.2) = 1 + 0.2 + 0.02 + 0.001333 + 0.000067 = 1.221400$ approximates $e^◆LB◆0.2◆RB◆$ with Error
less than $3.5 \times 10^◆LB◆-6◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.4 (Taylor's Theorem), Section 5.7 (Worked Examples).

</details>

**Problem 14.** Compute $\int_0^1 x^3\, dx$ from the definition using upper and lower Riemann sums.

<details>
<summary>Solution</summary>

_Solution._ Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[(i-1)/n, i/n]$, $f(x) = x^3$ has
$M_i = (i/n)^3$ and $m_i = ((i-1)/n)^3$.

$$U(f, P_n) = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ \frac◆LB◆i^3◆RB◆◆LB◆n^3◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆n◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆n^4◆RB◆ \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ i^3 = \frac◆LB◆1◆RB◆◆LB◆n^4◆RB◆ \cdot \frac◆LB◆n^2(n+1)^2◆RB◆◆LB◆4◆RB◆$$

As $n \to \infty$:

$$\lim_◆LB◆n \to \infty◆RB◆ U(f, P_n) = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆(n+1)^2◆RB◆◆LB◆4n^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆$$

Similarly, $L(f, P_n) \to 1/4$. So $\int_0^1 x^3\, dx = 1/4$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.1 (Definition), Section 6.5 (Worked Examples).

</details>

**Problem 14b.** Show that the Dirichlet function
$f(x) = \begin◆LB◆cases◆RB◆ 1 & x \in \mathbb◆LB◆Q◆RB◆ \\ 0 & x \notin \mathbb◆LB◆Q◆RB◆ \end◆LB◆cases◆RB◆$ is not Riemann
integrable on $[0, 1]$.

<details>
<summary>Solution</summary>

_Solution._ Every non-empty subinterval $[x_◆LB◆i-1◆RB◆, x_i]$ of any partition contains both rational and
Irrational numbers (by density of $\mathbb◆LB◆Q◆RB◆$ and density of $\mathbb◆LB◆R◆RB◆ \setminus \mathbb◆LB◆Q◆RB◆$). So
$M_i = \sup f = 1$ and $m_i = \inf f = 0$ for every subinterval.

For any partition $P$: $U(f, P) = \sum 1 \cdot \Delta x_i = 1$ and
$L(f, P) = \sum 0 \cdot \Delta x_i = 0$. Hence
$\overline◆LB◆\int_0^1◆RB◆ f = 1 \neq 0 = \underline◆LB◆\int_0^1◆RB◆ f$So $f$ is not Riemann integrable.

This also follows from Lebesgue's criterion: $f$ is discontinuous everywhere, and $[0,1]$ does not
Have measure zero. $\blacksquare$

_If you get this wrong, revise:_ Section 6.2 (Integrability Criteria), Theorem 6.4b.

</details>

**Problem 15.** Evaluate $\int_0^1 \frac◆LB◆x◆RB◆◆LB◆\sqrt◆LB◆1 - x^2◆RB◆◆RB◆\, dx$ as an improper integral.

<details>
<summary>Solution</summary>

_Solution._ The integrand $f(x) = x/\sqrt◆LB◆1 - x^2◆RB◆$ is unbounded as $x \to 1^-$. This is a Type II
Improper integral.

$$\int_0^1 \frac◆LB◆x◆RB◆◆LB◆\sqrt◆LB◆1 - x^2◆RB◆◆RB◆\, dx = \lim_◆LB◆b \to 1^-◆RB◆ \int_0^b \frac◆LB◆x◆RB◆◆LB◆\sqrt◆LB◆1 - x^2◆RB◆◆RB◆\, dx$$

Compute via substitution $u = 1 - x^2$, $du = -2x\, dx$:

$$= \lim_◆LB◆b \to 1^-◆RB◆ \left[-\sqrt◆LB◆1 - x^2◆RB◆\right]_0^b = \lim_◆LB◆b \to 1^-◆RB◆ \left(-\sqrt◆LB◆1 - b^2◆RB◆ + 1\right) = 0 + 1 = 1$$

The improper integral converges to $1$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.6 (Improper Integrals).

</details>

**Problem 16.** Let $f_n(x) = \frac◆LB◆nx◆RB◆◆LB◆1 + n^2 x^2◆RB◆$ on $(0, \infty)$. Find the pointwise limit and
Determine whether the convergence is uniform on $(0, \infty)$.

<details>
<summary>Solution</summary>

_Solution._ **Pointwise limit:** For fixed $x > 0$:
$\lim_◆LB◆n \to \infty◆RB◆ f_n(x) = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆nx◆RB◆◆LB◆1 + n^2 x^2◆RB◆ = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆x/n◆RB◆◆LB◆1/n^2 + x^2◆RB◆ = 0$.

So $f_n \to 0$ pointwise on $(0, \infty)$.

**Uniform convergence?** We check $\sup_◆LB◆x > 0◆RB◆ |f_n(x) - 0| = \sup_◆LB◆x > 0◆RB◆ \frac◆LB◆nx◆RB◆◆LB◆1 + n^2 x^2◆RB◆$.
To maximize, differentiate with respect to $x$ (treating $n$ as fixed):

$$\frac◆LB◆d◆RB◆◆LB◆dx◆RB◆\left(\frac◆LB◆nx◆RB◆◆LB◆1 + n^2 x^2◆RB◆\right) = \frac◆LB◆n(1 + n^2 x^2) - nx \cdot 2n^2 x◆RB◆◆LB◆(1 + n^2 x^2)^2◆RB◆ = \frac◆LB◆n - n^3 x^2◆RB◆◆LB◆(1 + n^2 x^2)^2◆RB◆$$

Setting to zero: $n - n^3 x^2 = 0$So $x = 1/n$. The maximum value is
$f_n(1/n) = \frac◆LB◆n \cdot 1/n◆RB◆◆LB◆1 + n^2/n^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$.

Since $\sup_◆LB◆x > 0◆RB◆ |f_n(x)| = 1/2$ for all $n$This does not tend to $0$. Therefore the convergence
Is **not uniform** on $(0, \infty)$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.2 (Uniform Convergence), Section 7.1 (Pointwise
Convergence).

</details>

**Problem 17.** Find the radius of convergence of $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(2n)!◆RB◆◆LB◆(n!)^2◆RB◆ x^n$.

<details>
<summary>Solution</summary>

_Solution._ Apply the ratio test to the terms:

$$\left|\frac◆LB◆a_◆LB◆n+1◆RB◆◆RB◆◆LB◆a_n◆RB◆\right| = \frac◆LB◆(2(n+1))!◆RB◆◆LB◆((n+1)!)^2◆RB◆ \cdot \frac◆LB◆(n!)^2◆RB◆◆LB◆(2n)!◆RB◆ \cdot |x| = \frac◆LB◆(2n+2)(2n+1)◆RB◆◆LB◆(n+1)^2◆RB◆ \cdot |x|$$

$$= \frac◆LB◆2(2n+1)◆RB◆◆LB◆n+1◆RB◆ \cdot |x| = \frac◆LB◆4n + 2◆RB◆◆LB◆n + 1◆RB◆ \cdot |x| \to 4|x| \quad \mathrm◆LB◆as\  n \to \infty$$

The series converges when $4|x| \lt 1$I.e., $|x| \lt 1/4$And diverges when $4|x| > 1$. The radius of
convergence is $R = 1/4$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.7 (Power Series), Section 3.2 (Ratio Test).

</details>

**Problem 18.** Let $f_n(x) = x^n/n$ on $[0, 1]$. Show that $f_n \to 0$ uniformly, but
$f_n'(x) = x^◆LB◆n-1◆RB◆$ does not converge uniformly on $(0, 1)$.

<details>
<summary>Solution</summary>

_Solution._ **Uniform convergence of $f_n$:** $\sup_◆LB◆x \in [0,1]◆RB◆ |x^n/n| = 1/n \to 0$ as
$n \to \infty$. So $f_n \to 0$ uniformly on $[0, 1]$.

**Non-uniform convergence of $f_n'$:** $f_n'(x) = x^◆LB◆n-1◆RB◆$. The pointwise limit is $g(x) = 0$ for
$0 \leq x \lt 1$ and $g(1) = 1$. So
$\sup_◆LB◆x \in [0,1]◆RB◆ |f_n'(x) - g(x)| \geq |f_n'(1) - g(1)| = |1 - 1| = 0$.

Actually, check $\sup_◆LB◆x \in [0,1)◆RB◆ |x^◆LB◆n-1◆RB◆| = 1$ (approached as $x \to 1^-$). But $g(x) = 0$ on
$[0, 1)$So $\sup_◆LB◆x \in [0,1)◆RB◆ |x^◆LB◆n-1◆RB◆ - 0| = 1$ for all $n$. This does not Tend to $0$So $f_n'$
does not converge uniformly on $[0, 1)$.

This illustrates that uniform convergence of functions does not imply uniform convergence of
Derivatives, which is why Theorem 7.4 requires the stronger hypothesis of uniform convergence of
$(f_n')$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.2 (Uniform Convergence), Section 7.6 (Uniform Convergence
and Differentiation).

</details>

**Problem 19.** Let $f_n(x) = \frac◆LB◆x◆RB◆◆LB◆1 + nx^2◆RB◆$ on $[0, \infty)$. Find the pointwise limit and
determine Whether the convergence is uniform.

<details>
<summary>Solution</summary>

_Solution._ **Pointwise limit:** For $x = 0$: $f_n(0) = 0$ for all $n$. For $x > 0$:
$\lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆x◆RB◆◆LB◆1 + nx^2◆RB◆ = \lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆1/x + nx◆RB◆ = 0$. So
$f_n \to 0$ pointwise.

**Uniform convergence on $[0, \infty)$?** We check $\sup_◆LB◆x \geq 0◆RB◆ |f_n(x)|$. Differentiate:
$\frac◆LB◆d◆RB◆◆LB◆dx◆RB◆\left(\frac◆LB◆x◆RB◆◆LB◆1 + nx^2◆RB◆\right) = \frac◆LB◆1 - nx^2◆RB◆◆LB◆(1 + nx^2)^2◆RB◆$. Setting to zero:
$x = 1/\sqrt◆LB◆n◆RB◆$. The maximum value is
$f_n(1/\sqrt◆LB◆n◆RB◆) = \frac◆LB◆1/\sqrt◆LB◆n◆RB◆◆RB◆◆LB◆1 + n/n◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2\sqrt◆LB◆n◆RB◆◆RB◆$.

Since $\sup_◆LB◆x \geq 0◆RB◆ |f_n(x)| = \frac◆LB◆1◆RB◆◆LB◆2\sqrt◆LB◆n◆RB◆◆RB◆ \to 0$ as $n \to \infty$The convergence **is**
Uniform on $[0, \infty)$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.2 (Uniform Convergence).

</details>

**Problem 20.** Prove that the series $\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^n◆RB◆◆LB◆2n+1◆RB◆ x^◆LB◆2n+1◆RB◆$ converges
uniformly on $[-1, 1]$ and identify its sum.

<details>
<summary>Solution</summary>

_Solution._ For $|x| \leq 1$: $\left|\frac◆LB◆(-1)^n x^◆LB◆2n+1◆RB◆◆RB◆◆LB◆2n+1◆RB◆\right| \leq \frac◆LB◆1◆RB◆◆LB◆2n+1◆RB◆$. The
series $\sum \frac◆LB◆1◆RB◆◆LB◆2n+1◆RB◆$ diverges (it dominates half the harmonic series), so the Weierstrass
M-test does not apply directly with these bounds.

However, by the alternating series test, the series converges pointwise for every $|x| \leq 1$
(since $\frac◆LB◆|x|^◆LB◆2n+1◆RB◆◆RB◆◆LB◆2n+1◆RB◆$ decreases to $0$ for $|x| \leq 1$). The sum is $\arctan x$ Which is
the Taylor series of $\arctan$ about $0$.

For uniform convergence, we use **Abel's test for uniform convergence of series**: if $\sum f_n(x)$
has uniformly bounded partial sums and $g_n(x)$ decreases uniformly to $0$Then $\sum f_n(x) g_n(x)$
converges uniformly. Here $f_n(x) = (-1)^n x^◆LB◆2n+1◆RB◆$ and $g_n(x) = 1/(2n+1)$ Is independent of $x$.

The partial sums
$\left|\sum_◆LB◆k=0◆RB◆^◆LB◆n◆RB◆ (-1)^k x^◆LB◆2k+1◆RB◆\right| \leq \frac◆LB◆|x|◆RB◆◆LB◆1 + x^2◆RB◆ \leq \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$ for
$|x| \leq 1$ (geometric series bound). And $1/(2n+1) \to 0$ uniformly. By Abel's test, the
Convergence is uniform on $[-1, 1]$.

Setting $x = 1$: $\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^n◆RB◆◆LB◆2n+1◆RB◆ = \arctan 1 = \pi/4$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.3 (Weierstrass M-Test), Section 7.7 (Power Series),
Abel's theorem.

</details>

## Common Pitfalls

1. Confusing the domain and range of functions, or not considering restrictions (e.g., denominator
   cannot be zero).

2. Misreading the question, particularly with 'hence' vs 'hence or otherwise' — the former requires
   using previous work.

3. Confusing pointwise and uniform convergence — pointwise convergence does not guarantee uniform
   convergence.

## Worked Examples

### Example 1: Epsilon-Delta Proof of Continuity

**Problem.** Prove that $f(x) = 3x + 1$ is continuous at $x = 2$ using the $\varepsilon$-$\delta$
definition.

**Solution.** Let $\varepsilon > 0$. Choose $\delta = \varepsilon / 3$.

If $0 < |x - 2| < \delta$, then:

$$|f(x) - f(2)| = |3x + 1 - 7| = 3|x - 2| < 3 \cdot \frac◆LB◆\varepsilon◆RB◆◆LB◆3◆RB◆ = \varepsilon$$

Since for every $\varepsilon > 0$ we found $\delta > 0$ satisfying the condition, $f$ is continuous
at $x = 2$.

$\blacksquare$

### Example 2: Convergence of a Sequence

**Problem.** Prove that $a_n = \frac◆LB◆2n+1◆RB◆◆LB◆n+3◆RB◆$ converges and find its limit.

**Solution.** Claim: $a_n \to 2$.

$|a_n - 2| = \left|\frac◆LB◆2n+1◆RB◆◆LB◆n+3◆RB◆ - 2\right| = \left|\frac◆LB◆2n+1 - 2n - 6◆RB◆◆LB◆n+3◆RB◆\right| = \frac◆LB◆5◆RB◆◆LB◆n+3◆RB◆$.

For any $\varepsilon > 0$, choose $N > \frac◆LB◆5◆RB◆◆LB◆\varepsilon◆RB◆ - 3$.

For $n > N$: $|a_n - 2| = \frac◆LB◆5◆RB◆◆LB◆n+3◆RB◆ < \frac◆LB◆5◆RB◆◆LB◆N+3◆RB◆ < \varepsilon$.

Therefore $a_n \to 2$ by definition.

$\blacksquare$

## Summary

- Completeness of $\mathbb◆LB◆R◆RB◆$: every non-empty bounded-above set has a supremum; equivalent to the
  monotone convergence theorem and Bolzano-Weierstrass.
- Limits and continuity: $\varepsilon$-$\delta$ definition; sequential characterisation;
  intermediate value theorem and extreme value theorem.
- Differentiability: $f'(a) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆f(a+h) - f(a)◆RB◆◆LB◆h◆RB◆$; mean value theorem; Taylor's
  theorem with remainder.
- Riemann integration: defined via upper and lower sums; fundamental theorem of calculus connects
  integration and differentiation.
- Sequences and series: tests for convergence (comparison, ratio, root, integral); absolute vs
  conditional convergence; power series and radius of convergence.

## Cross-References

| Topic                      | Site        | Link                                                                 |
| -------------------------- | ----------- | -------------------------------------------------------------------- |
| Complex Analysis           | WyattsNotes | [View](/docs/university/mathematics/complex-analysis)                |
| Linear Algebra             | WyattsNotes | [View](/docs/university/mathematics/linear-algebra)                  |
| Multivariable Calculus     | WyattsNotes | [View](/docs/university/mathematics/multivariable-calculus)          |
| Real Analysis — MIT 18.100 | MIT OCW     | [View](https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/) |
