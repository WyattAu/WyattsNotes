---
title: Liouville's Theorem and the Maximum Modulus Principle
tags:
  - Mathematics
  - University
---

### 11.1 Liouville's Theorem

**Theorem 11.1 (Liouville's Theorem).** Every bounded entire function is constant.

_Proof._ If $|f(z)| \leq M$ for all $z$Then by Cauchy's estimates with $R$ arbitrarily large:
$|f'(z_0)| \leq \frac{M}{R} \to 0$ as $R \to \infty$. So $f'(z) = 0$ for all $z$Meaning $f$ is
Constant. $\blacksquare$

### 11.2 The Fundamental Theorem of Algebra

**Theorem 11.2 (Fundamental Theorem of Algebra).** Every non-constant polynomial
$p(z) \in \mathbb{C}[z]$ has a root in $\mathbb{C}$.

_Proof._ Suppose $p(z)$ has no root. Then $f(z) = 1/p(z)$ is entire. Since $|p(z)| \to \infty$ as
$|z| \to \infty$, $f(z) \to 0$So $f$ is bounded. By Liouville's theorem, $f$ is constant, so $p$ Is
constant, a contradiction. $\blacksquare$

### 11.3 The Maximum Modulus Principle

**Theorem 11.3 (Maximum Modulus Principle).** If $f$ is analytic and non-constant on a domain $D$
Then $|f|$ has no local maximum in $D$.

**Corollary 11.4.** If $f$ is analytic on a bounded domain $D$ and continuous on
$\bar{D} = D \cup \partial D$Then $|f|$ attains its maximum on $\partial D$.

### 11.4 Minimum Modulus Principle

**Theorem 11.5 (Minimum Modulus Principle).** If $f$ is analytic and non-zero on a bounded domain
$D$ And continuous on $\bar{D}$Then $|f|$ attains its minimum on $\partial D$.

_Remark._ If $f$ has zeros in $D$Then $|f|$ attains its minimum of $0$ at those zeros. The minimum
modulus principle requires the non-vanishing hypothesis.

### 11.5 Schwarz Lemma

**Theorem 11.6 (Schwarz Lemma).** If $f : \mathbb{D} \to \mathbb{D}$ is analytic with $f(0) = 0$
Then

$$|f(z)| \leq |z| \quad \mathrm{for\ all\ } z \in \mathbb{D}$$

And $|f'(0)| \leq 1$. Equality in either case implies $f(z) = e^{i\theta} z$ for some real $\theta$.

_Proof._ Define $g(z) = f(z)/z$ for $z \neq 0$ and $g(0) = f'(0)$. Then $g$ is analytic on
$\mathbb{D}$. For $|z| = r \lt 1$: $|g(z)| = |f(z)|/|z| \leq 1/r$. By the maximum modulus Principle,
$|g(z)| \leq 1/r$ for $|z| \leq r$. Letting $r \to 1$: $|g(z)| \leq 1$So $|f(z)| \leq |z|$. Also
$|f'(0)| = |g(0)| \leq 1$. If $|f'(0)| = 1$Then $|g|$ attains its maximum At an interior point, so
$g$ is constant: $g(z) = e^{i\theta}$. $\blacksquare$

