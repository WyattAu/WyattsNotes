---
title: Analytic Continuation
tags:
  - Mathematics
  - University
---

### 13.1 Definition

**Definition.** If $f_1$ is analytic on $D_1$ and $f_2$ is analytic on $D_2$ with
$D_1 \cap D_2 \neq \emptyset$ and $f_1 = f_2$ on $D_1 \cap D_2$Then $f_2$ is an **analytic
Continuation** of $f_1$.

### 13.2 Identity Theorem

**Theorem 13.1 (Identity Theorem).** If $f$ and $g$ are analytic on a domain $D$ and agree on a set
With a limit point in $D$Then $f = g$ on all of $D$.

_Proof._ Let $E = \{z \in D : f^{(n)}(z) = g^{(n)}(z) \mathrm{\ for\ all\ } n \geq 0\}$. $E$ is
Non-empty (it contains the limit point by continuity of derivatives). $E$ is closed (by continuity).
If $z_0 \in E$The Taylor series of $f$ and $g$ at $z_0$ coincide, so $f = g$ in a neighbourhood of
$z_0$Giving $E$ open. Since $D$ is connected, $E = D$. $\blacksquare$

