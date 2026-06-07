---
title: Weak and Weak\* Convergence
tags:
  - Mathematics
  - University
---

### 6.1 Weak Convergence

A sequence $\{x_n\}$ in a normed space $X$ **converges weakly** to $x$ (written
$x_n \rightharpoonup x$) if $\varphi(x_n) \to \varphi(x)$ for every $\varphi \in X^*$.

**Proposition 6.1.** If $x_n \to x$ in norm, then $x_n \rightharpoonup x$ (strong convergence
implies weak convergence).

**Proposition 6.2.** If $x_n \rightharpoonup x$ is weakly convergent, then
$\sup_n \|x_n\| < \infty$.

**Theorem 6.3.** In a Hilbert space $H$, $x_n \rightharpoonup x$ if and only if
$\langle x_n, y\rangle \to \langle x, y\rangle$ for every $y \in H$.

### 6.2 Weak\* Convergence

A sequence $\{\varphi_n\} \subseteq X^*$ **converges weak\*** to $\varphi$ (written
$\varphi_n \overset{w^*}{\to} \varphi$) if $\varphi_n(x) \to \varphi(x)$ for every $x \in X$.

**Theorem 6.4 (Banach-Alaoglu).** The closed unit ball of $X^*$ is weak\*-compact.

### 6.3 Weak Convergence in Specific Spaces

**Theorem 6.5.** In $\ell^p$ ($1 < p < \infty$), $x_n \rightharpoonup x$ if and only if $x_n$ is
bounded and $x_n(i) \to x(i)$ for each coordinate $i$.

**Example.** In $\ell^2$, the standard basis vectors $e_n$ converge weakly to $0$ but not in norm:
$\|e_n\| = 1$ for all $n$, but $\langle e_n, y\rangle = y_n \to 0$ for every $y \in \ell^2$.

