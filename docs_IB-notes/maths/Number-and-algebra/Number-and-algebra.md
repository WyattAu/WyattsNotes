---
title: Number and Algebra
date: 2025-05-10T15:41:14.714Z
tags:
  - maths
categories:
  - maths
slug: number-algebra
---

## Set

A set is a collection of elements.

### Elements

An element of a set is a unique value

### Notations

- $\empty$
  - A set with no elements
- $x \in X$
  - An element $x$ belongs to the set $X$
- $x \notin X$
  - The element $x$ does not belongs the set $X$
- $A \subseteq B$
  - $A$ is a subset of $B$
  - $\forall a \in A, \quad \exists a \in B$

## Function

A function ($f$) is an assignment from an element of domain ($X$, the set of input accepted by the function) to a codomain ($Y$, a set that all mappings of $f$ is restricted to, regardless of range), such that:

- Every element in $X$ is mapped to an element in $Y$
  - $\forall x \in X, \quad f(x) \in Y$
- No element in $X$ is mapped to more than one element in $Y$
  - $\forall x \in X, \quad f(x) = y_1, y_2, \quad y_1 = y_2$

### Notation

A function $f$ with domain $X$ and codomain $Y$:

$$
\begin{aligned}
    f: X \to Y
\end{aligned}
$$

:::info[Examples]

<details>
    <summary>Expand </summary>
    <p>
      - Not unique
        - $f_1: \mathbb{R}^+ \to \mathbb{R}, \quad f(x) = \pm \sqrt{x}$
        - Since $x$ can be mapped to two elements ($y$ or $-y$), $f_1$ is not unique
      - $f_2: \mathbb{R} \to \mathbb{R}, f_2(x) = \frac{1}{x}$
        - At $x = 0$, $f_2(0)$ is not defined, therefore not every element in domain $X$ is mapped to domain $Y$
        - Redefine $f_2: \mathbb{R} \backslash \{0\} \to \mathbb{R}$
      - $f_3: \empty \to Y$
        - Since no elements are in the domain, uniqueness is satisfy hence a valid function
    </p>
</details>
:::

### Range

The range ($A$) of a function ($f$) is a subset of the codomain ($Y$) that consist of all the values produced by $f$:

$$
\begin{aligned}
    f: X \to Y, A = {\forall x \in X, f(x) \in Y}, A \subseteq Y
\end{aligned}
$$

### Classes of Function

- Surjective (onto)
  - Every element in the codomain $Y$ is mapped by at least one element of the domain $X$
  - $\forall y \in Y, \quad \exists x \in X, y = f(x)$
- Injective (one-to-one)
  - $\forall x_1, x_2 \in X, \quad f(x_1) = f(x_2) \implies x_1 = x_2$
- Bijective
  - Functions that are both surjective and injective
- Odd
  - $f(x) = -f(-x), x \in \mathbb{R}$
- Even
  - $f(x) = f(-x), x \in \mathbb{R}$

:::info[Examples]

<details>
    <summary>Expand </summary>
    <p>
      - Non-injective
        - $f:\mathbb{R} \to \mathbb{R}, f(x) = x^2$
          - Even function 
            - f(x) = f(-x)
            - Distinct inputs map to same output
    </p>
</details>
:::

## Operations on Scientific Notation

### Scientific Notation

A number in scientific notation is a number ($a$) that satisfy:

$$
\begin{aligned}
    a = b \times 10 ^k, b\in \mathbb{R}, 1\le |b| <10, k \in \mathbb{Z}\\
\end{aligned}
$$

### Binary Operations

#### Multiplication

let $a_1,a_2$ be a number in scientific notation,

$$
\begin{aligned}
    a_1 \cdot a_2 = b_1 \cdot b_2 \times 10^{k_1 + k_2}
\end{aligned}
$$

if $1 \le b_1 \cdot b_2 <10$ is not satisfy, convert back to scientific notation by multiplying by power of ten.

## Sequence

A sequence is a function ($f$) with a domain of natural numbers ($\mathbb{N}$) and a codomain of a specified set $X$. A sequence ($u_n$) is:

$$
\begin{aligned}
    f: \mathbb{N} \to X, \quad u_n = f(n), n \in \mathbb{N}
\end{aligned}
$$

By defining sequence as a function with domain of natural numbers, every sequence is ordered.

### Series

A series ($S$) is the sum of all the terms in a sequence ($u_n$):

$$
\begin{aligned}
    S = \sum_{n=1}^\infty u_n
\end{aligned}
$$

### Partial Sum

A partial sum ($S_k$) is the series of a sequence ($u_n$) with restricted domain ($n \le k$):

$$
\begin{aligned}
    &u_n = f_1(n), n \in \mathbb{N}\\
    &f_2 : \{n \in \mathbb{N} | n \le k \} \to X\\
    &S_k = \sum_{n= 1}^k f_2(n)
\end{aligned}
$$

### Arithmetic Sequence

An arithmetic sequence ($a_n$) is a sequence with a common difference ($d$) between any two consecutive

$$
\begin{aligned}
    a_n = a_{n-1} + d = a_1 + (n-1)d
\end{aligned}
$$

#### Arithmetic Series

An arithmetic series ($S_k$) is a term with ambiguity, although called a series, it is a partial sum of a arithmetic sequence ($a_n$)

$$
\begin{aligned}
    S_k &= \sum_{n = 1}^k a_1 + (n-1)d = k(a_1) + d\left(\sum_{n=1}^k n-1 \right) = k(a_1)+d\left(\frac{k(k+1)}{2}-k \right)\\
    s_k &= \frac{k}{2}\left(2a_1 + d(k-1) \right) = \frac{k}{2}\left(a_1 + a_{k-1}+d \right) = \frac{k}{2}\left(a_1 + a_k \right)
\end{aligned}
$$

:::warning
This is written in the formula booklet as:

$$
\begin{aligned}
    s_n = \frac{n}{2}\left(2u_1 + d(n-1) \right) = \frac{n}{2}\left(u_1 + u_n \right)
\end{aligned}
$$

:::

### Geometric Sequence

A geometric sequence ($u_n$) is a sequence with a common ratio ($r$) between any two consecutive terms:

$$
\begin{aligned}
    u_n = u_{n-1} \cdot r = u_1 \cdot r^{n-1}
\end{aligned}
$$

#### Geometric Series

A geometric series ($S_{\infty}$) is the sum of infinite geometric sequence.

$$
\begin{aligned}
    S_{\infty} = \sum_{n = 1}^\infty u_1 \cdot r^{n-1} =  u_1 \sum_{n = 1}^\infty r^{n-1}\\

\end{aligned}
$$

Geometric series with ($|r|>1$) diverge to infinity, a partial sum ($S_k$) of a geometric sequence is:

$$
\begin{aligned}
    S_k &= u_1 \sum_{n = 1}^k r^{n-1}, \quad    r \cdot S_{k} = r \cdot u_1 \sum_{n = 1}^k r^{n-1}\\

    S_{k} - r S_{k} &= u_1 \sum_{n = 1}^k r^{n-1} - r \cdot u_1 \sum_{n = 1}^k r^{n-1}\\

    S_k(1-r) &= u_1 \left( \sum_{n = 1}^k r^{n-1} - \sum_{n = 1}^k r^{n} \right) = u_1 (1-r^n)\\

    S_k &= \frac{u_1(1-r^n)}{1-r}

\end{aligned}
$$

Geometric series with ($|r|<1$) converge to a value:

$$
\begin{aligned}
    S_{\infty} = \lim_{n\to \infty} \frac{u_1(1-r^n)}{1-r} = \frac{u_1(1-0)}{1-r} = \frac{u_1}{1-r}
\end{aligned}
$$

## Logarithms

A logarithm is the inverse function of a power function $f(x) = b^x$:

$$
\begin{aligned}
    \log_b\left(b^x\right) = x, \quad b, b^x \in \left\{ r \in \mathbb{R} | r>0 \right\}
\end{aligned}
$$

### Operations

$$
\begin{aligned}
    &\log_a{x \cdot y} = \log_a{x} + \log_a{y}\\
    &\log_a{\frac{x}{y}} = \log_a{x} - \log_a{y}\\
    &\log_a{x^m} = m\log_a{x}\\
    &\log_a{x} = \frac{\log_b x}{\log_b a}
\end{aligned}
$$
