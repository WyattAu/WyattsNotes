---
title: Continuity
tags:
  - Mathematics
  - University
---

### 4.1 Limits of Functions

Let $f : D \to \mathbb{R}$ where $D \subseteq \mathbb{R}$. We say $\lim_{x \to a} f(x) = L$ if for
Every $\varepsilon > 0$There exists $\delta > 0$ such that

$$0 \lt |x - a| \lt \delta \implies |f(x) - L| \lt \varepsilon$$

### 4.2 Continuity

**Definition.** $f$ is **continuous at $a$** if $\lim_{x \to a} f(x) = f(a)$. In epsilon-delta form:
For every $\varepsilon > 0$There exists $\delta > 0$ such that

$$|x - a| \lt \delta \implies |f(x) - f(a)| \lt \varepsilon$$

_Remark._ A function is continuous on a set $E$ if it is continuous at every point of $E$. A
function is **globally continuous** (or "continuous") if it is continuous on its entire domain.

**Definition.** $f$ is **discontinuous at $a$** if it is not continuous at $a$. Discontinuities are
Classified as:

- **Removable:** $\lim_{x \to a} f(x)$ exists but does not equal $f(a)$ (or $f(a)$ is undefined).
- **Jump:** $\lim_{x \to a^-} f(x)$ and $\lim_{x \to a^+} f(x)$ both exist but are unequal.
- **Essential (or infinite/oscillatory):** At least one one-sided limit does not exist.

**Proposition 4.3.** Polynomials are continuous on $\mathbb{R}$. Rational functions $p(x)/q(x)$ are
Continuous wherever $q(x) \neq 0$. The functions $\sin x$, $\cos x$, $e^x$, $\ln x$ are continuous
On their domains.

**Theorem 4.1 (Algebra of Continuous Functions).** If $f$ and $g$ are continuous at $a$Then $f+g$
$f-g$, $fg$And (where defined) $f/g$ are continuous at $a$.

**Theorem 4.2.** Compositions of continuous functions are continuous: if $f$ is continuous at $a$
and $g$ is continuous at $f(a)$Then $g \circ f$ is continuous at $a$.

### 4.2a Sequential Characterization of Limits and Continuity

The epsilon-delta definitions can be reformulated in terms of sequences, which is often more
Convenient for .../1-number-and-algebra/3_proof-and-logics.

**Proposition 4.2a (Sequential Criterion for Limits).** $\lim_{x \to c} f(x) = L$ if and only if For
every sequence $(x_n)$ with $x_n \to c$ and $x_n \neq c$ for all $n$We have $f(x_n) \to L$.

_Proof._ ($\Rightarrow$) Let $\varepsilon > 0$. Choose $\delta > 0$ from the $\varepsilon$-$\delta$
definition. Since $x_n \to c$There exists $N$ with $|x_n - c| \lt \delta$ for $n \geq N$. Then
$|f(x_n) - L| \lt \varepsilon$ for $n \geq N$.

($\Leftarrow$) Suppose the $\varepsilon$-$\delta$ condition fails. Then there exists
$\varepsilon > 0$ such That for every $n \in \mathbb{N}$There exists $x_n$ with
$0 \lt |x_n - c| \lt 1/n$ but $|f(x_n) - L| \geq \varepsilon$. Then $x_n \to c$ but
$f(x_n) \not\to L$Contradicting the hypothesis. $\blacksquare$

**Corollary 4.2b.** $f$ is continuous at $c$ if and only if for every sequence $(x_n)$ with
$x_n \to c$ We have $f(x_n) \to f(c)$.

This is especially useful for proving that a function is **not** continuous: find one sequence
Converging to $c$ whose image does not converge to $f(c)$.

### 4.3 Intermediate Value Theorem

**Theorem 4.3 (IVT).** If $f : [a,b] \to \mathbb{R}$ is continuous and $f(a) \lt y \lt f(b)$ (or
$f(b) \lt y \lt f(a)$), then there exists $c \in (a,b)$ such that $f(c) = y$.

_Proof._ Assume $f(a) \lt y \lt f(b)$. Let $S = \{x \in [a,b] : f(x) \lt y\}$. Since $a \in S$ $S$
is non-empty and bounded above by $b$. Let $c = \sup(S)$. We show $f(c) = y$.

If $f(c) \lt y$Then by continuity at $c$There exists $\delta > 0$ such that $f(x) \lt y$ for
$x \in (c - \delta, c + \delta)$. But then $c + \delta/2 \in S$Contradicting that $c = \sup(S)$.

If $f(c) > y$Then by continuity, there exists $\delta > 0$ such that $f(x) > y$ for
$x \in (c - \delta, c + \delta)$. But then $c - \delta/2$ is an upper bound for $S$Contradicting
That $c = \sup(S)$.

Therefore $f(c) = y$. $\blacksquare$

_Alternative .../1-number-and-algebra/3_proof-and-logic (bisection)._ Set $a_0 = a$, $b_0 = b$.
Given $[a_n, b_n]$ with $f(a_n) \lt y \lt f(b_n)$ Let $m_n = (a_n + b_n)/2$. If $f(m_n) \geq y$Set
$a_{n+1} = a_n$, $b_{n+1} = m_n$. If $f(m_n) \lt y$ Set $a_{n+1} = m_n$, $b_{n+1} = b_n$. Either
way, $f(a_n) \lt y \leq f(b_n)$ and $b_n - a_n = (b-a)/2^n \to 0$. By the nested interval property,
$a_n \to c$ and $b_n \to c$. By continuity, $f(c) = \lim f(a_n) \leq y$ And
$f(c) = \lim f(b_n) \geq y$So $f(c) = y$. $\blacksquare$

### 4.4 Extreme Value Theorem

**Theorem 4.4 (EVT).** If $f : [a,b] \to \mathbb{R}$ is continuous, then $f$ attains its maximum and
Minimum on $[a,b]$: there exist $c_1, c_2 \in [a,b]$ such that $f(c_1) \leq f(x) \leq f(c_2)$ for
all $x \in [a,b]$.

_Proof._ We first show $f$ is bounded. Suppose not; then for each $n \in \mathbb{N}$There exists
$x_n \in [a,b]$ with $|f(x_n)| > n$. By Bolzano-Weierstrass, $(x_n)$ has a convergent subsequence
$x_{n_k} \to c \in [a,b]$. By continuity, $f(x_{n_k}) \to f(c)$So $(f(x_{n_k}))$ is bounded. But
$|f(x_{n_k})| > n_k \to \infty$A contradiction.

Now we show $f$ attains its supremum. Let $M = \sup\{f(x) : x \in [a,b]\}$. For each $n$Choose
$x_n \in [a,b]$ with $f(x_n) > M - 1/n$. By Bolzano-Weierstrass, $(x_n)$ has a subsequence
$x_{n_k} \to c \in [a,b]$. By continuity, $f(c) = \lim f(x_{n_k})$. Since
$M - 1/n_k \lt f(x_{n_k}) \leq M$ for all $k$The squeeze theorem gives $f(c) = M$. The argument for
the infimum is similar (consider $-f$). $\blacksquare$

### 4.5 Uniform Continuity

**Definition.** $f$ is **uniformly continuous** on $D$ if for every $\varepsilon > 0$There exists
$\delta > 0$ such that for all $x, y \in D$:

$$|x - y| \lt \delta \implies |f(x) - f(y)| \lt \varepsilon$$

The key distinction: for ordinary continuity, $\delta$ may depend on both $\varepsilon$ and the
point $a$; for uniform continuity, $\delta$ depends only on $\varepsilon$.

### 4.6 The Heine-Cantor Theorem

**Theorem 4.5 (Heine-Cantor).** If $f : [a,b] \to \mathbb{R}$ is continuous on the closed, bounded
Interval $[a,b]$Then $f$ is uniformly continuous on $[a,b]$.

_Proof._ Suppose $f$ is continuous on $[a,b]$ but not uniformly continuous. Then there exists
$\varepsilon > 0$ such that for every $n \in \mathbb{N}$There exist $x_n, y_n \in [a,b]$ with
$|x_n - y_n| \lt 1/n$ but $|f(x_n) - f(y_n)| \geq \varepsilon$.

By the Bolzano-Weierstrass theorem, $(x_n)$ has a convergent subsequence $x_{n_k} \to c \in [a,b]$.
Since $|x_{n_k} - y_{n_k}| \lt 1/n_k \to 0$We have $y_{n_k} \to c$ as well.

By continuity of $f$ at $c$: there exists $\delta > 0$ such that $|x - c| \lt \delta$ implies
$|f(x) - f(c)| \lt \varepsilon/2$. For $k$ sufficiently large, $|x_{n_k} - c| \lt \delta$ and
$|y_{n_k} - c| \lt \delta$So:

$$|f(x_{n_k}) - f(y_{n_k})| \leq |f(x_{n_k}) - f(c)| + |f(y_{n_k}) - f(c)| \lt \varepsilon/2 + \varepsilon/2 = \varepsilon$$

Contradicting $|f(x_{n_k}) - f(y_{n_k})| \geq \varepsilon$. $\blacksquare$

### 4.7 Worked Examples

**Problem.** Prove that $f(x) = \sqrt{x}$ is uniformly continuous on $[0, \infty)$.

_Solution._ For $x, y \geq 0$:
$|\sqrt{x} - \sqrt{y}| = \frac{|x - y|}{\sqrt{x} + \sqrt{y}} \leq |x - y|^{1/2}$.

Given $\varepsilon > 0$Choose $\delta = \varepsilon^2$. Then $|x - y| \lt \delta$ implies
$|\sqrt{x} - \sqrt{y}| \leq \sqrt{|x-y|} \lt \sqrt{\delta} = \varepsilon$. Since $\delta$ depends
Only on $\varepsilon$The continuity is uniform. $\blacksquare$

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ .../1-number-and-algebra/3_proof-and-logic that $f(x) = 3x - 1$ is continuous at $x = 2$</summary>

_Solution._ We have $f(2) = 5$. Let $\varepsilon > 0$. We need to find $\delta > 0$ such that
$|x - 2| \lt \delta$ implies $|f(x) - 5| \lt \varepsilon$.

Compute: $|f(x) - 5| = |(3x - 1) - 5| = |3x - 6| = 3|x - 2|$.

Choose $\delta = \varepsilon/3$. Then $|x - 2| \lt \delta$ implies
$|f(x) - 5| = 3|x - 2| \lt 3 \cdot \varepsilon/3 = \varepsilon$. $\blacksquare$

</details>

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ .../1-number-and-algebra/3_proof-and-logic that $f(x) = x^2$ is continuous at $x = 3$</summary>

_Solution._ We have $f(3) = 9$. Let $\varepsilon > 0$. Compute:

$$|f(x) - 9| = |x^2 - 9| = |x + 3| \cdot |x - 3|$$

Restrict to $\delta \leq 1$So $|x - 3| \lt 1$ means $2 \lt x \lt 4$Giving $|x + 3| \lt 7$.

Choose $\delta = \min(1, \varepsilon/7)$. Then $|x - 3| \lt \delta$ implies:

$$|x^2 - 9| = |x + 3| \cdot |x - 3| \lt 7 \cdot \frac{\varepsilon}{7} = \varepsilon$$

$\blacksquare$

</details>

<details>
<summary>Worked Example: Show $f(x) = 1/x$ is NOT uniformly continuous on $(0, 1)$</summary>

_Solution._ We show the negation of uniform continuity. Take $\varepsilon = 1$. For any $\delta > 0$
Choose $n \in \mathbb{N}$ with $1/n \lt \delta$. Set $x = 1/n$ and $y = 1/(2n)$. Then
$|x - y| = 1/(2n) \lt 1/n \lt \delta$But:

$$|f(x) - f(y)| = \left|\frac{1}{1/n} - \frac{1}{1/(2n)}\right| = |n - 2n| = n \geq 1 = \varepsilon$$

So no single $\delta$ works for all $x, y \in (0,1)$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Use the sequential criterion to show $f(x) = \sin(1/x)$ has no limit as $x \to 0$</summary>

_Solution._ Consider the sequences $x_n = 1/(2n\pi)$ and $y_n = 1/(2n\pi + \pi/2)$. Both converge to
$0$. But $f(x_n) = \sin(2n\pi) = 0$ and $f(y_n) = \sin(2n\pi + \pi/2) = 1$ for all $n$.

So $f(x_n) \to 0$ and $f(y_n) \to 1$. By the sequential criterion, if $\lim_{x \to 0} f(x)$ existed,
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
<summary>Worked Example: $\varepsilon$-$\delta$ .../1-number-and-algebra/3_proof-and-logic that $f(x) = \sin x$ is continuous at every $a \in \mathbb{R}$</summary>

_Solution._ We use the identity $|\sin u - \sin v| \leq |u - v|$ for all $u, v \in \mathbb{R}$.
(Proof: $|\sin u - \sin v| = 2|\cos((u+v)/2)\sin((u-v)/2)| \leq 2|\sin((u-v)/2)| \leq |u - v|$ Using
$|\sin t| \leq |t|$ and $|\cos| \leq 1$.)

Let $\varepsilon > 0$ and $a \in \mathbb{R}$. Choose $\delta = \varepsilon$. For
$|x - a| \lt \delta$:

$$|\sin x - \sin a| \leq |x - a| \lt \delta = \varepsilon$$

Since $\delta = \varepsilon$ works independently of $a$, $\sin x$ is actually **uniformly
continuous** On $\mathbb{R}$. The same argument works for $\cos x$. $\blacksquare$

</details>

<details>
<summary>Worked Example: $\varepsilon$-$\delta$ .../1-number-and-algebra/3_proof-and-logic that $f(x) = e^x$ is continuous at every $a \in \mathbb{R}$</summary>

_Solution._ We use the inequality $|e^u - e^v| \leq e^{\max(u,v)} |u - v|$Which follows from the
Mean Value Theorem applied to $e^t$: $e^u - e^v = e^\xi (u - v)$ for some $\xi$ between $u$ and $v$
So $|e^u - e^v| = e^\xi |u - v| \leq e^{\max(u,v)} |u - v|$.

Let $\varepsilon > 0$ and $a \in \mathbb{R}$. Restrict to $|x - a| \lt 1$So $x \lt a + 1$ and
$e^{\max(x,a)} \leq e^{a+1}$. Choose $\delta = \min(1, \varepsilon / e^{a+1})$. For
$|x - a| \lt \delta$:

$$|e^x - e^a| \leq e^{a+1} |x - a| \lt e^{a+1} \cdot \frac{\varepsilon}{e^{a+1}} = \varepsilon$$

$\blacksquare$

_If you get this wrong, revise:_ Section 4.2 (Continuity), Section 5.3 (Mean Value Theorem).

</details>

:::caution Common Pitfall Continuity on $(a, b)$ does not imply uniform continuity. The function
$f(x) = 1/x$ on $(0, 1)$ is Continuous but not uniformly continuous. The Heine-Cantor theorem
requires a **closed and bounded** Interval. Also, a function can be uniformly continuous on an
unbounded domain (e.g., $f(x) = \sqrt{x}$ On $[0, \infty)$) --- boundedness of the domain is
sufficient but not necessary.



