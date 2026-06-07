---
title: Inner Product Spaces
tags:
  - Mathematics
  - University
---

### 7.1 Definition of an Inner Product

An **inner product** on a vector space $V$ over $F$ (where $F = \mathbb{R}$ or $\mathbb{C}$) is a
Function $\langle \cdot, \cdot \rangle : V \times V \to F$ satisfying:

1. **Conjugate symmetry**:
   $\langle \mathbf{u}, \mathbf{v} \rangle = \overline{\langle \mathbf{v}, \mathbf{u} \rangle}$
2. **Linearity in the first argument**:
   $\langle \alpha\mathbf{u} + \beta\mathbf{w}, \mathbf{v} \rangle = \alpha\langle \mathbf{u}, \mathbf{v} \rangle + \beta\langle \mathbf{w}, \mathbf{v} \rangle$
3. **Positive definiteness**: $\langle \mathbf{v}, \mathbf{v} \rangle \geq 0$ with equality iff
   $\mathbf{v} = \mathbf{0}$

A vector space equipped with an inner product is called an **inner product space**.

**Example.** The standard inner product on $\mathbb{R}^n$ is
$\langle \mathbf{x}, \mathbf{y} \rangle = \sum_{i=1}^n x_i y_i$. On $\mathbb{C}^n$
$\langle \mathbf{x}, \mathbf{y} \rangle = \sum_{i=1}^n x_i \overline{y_i}$.

**Example.** On $C[a,b]$The $L^2$ inner product is $\langle f, g \rangle = \int_a^b f(x)g(x)\,dx$.

### 7.2 Norms

Every inner product induces a **norm**:

$$\lVert \mathbf{v} \rVert = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}$$

**Theorem 7.1 (Cauchy--Schwarz Inequality).** For all $\mathbf{u}, \mathbf{v} \in V$

$$\lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert \leq \lVert \mathbf{u} \rVert \, \lVert \mathbf{v} \rVert$$

With equality if and only if $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent.

_Proof._ If $\mathbf{v} = \mathbf{0}$Both sides are 0 and the result holds. Assume
$\mathbf{v} \neq \mathbf{0}$. For any $t \in \mathbb{R}$ (or $\mathbb{C}$), positive definiteness
gives

$$0 \leq \langle \mathbf{u} - t\mathbf{v}, \mathbf{u} - t\mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{u} \rangle - t\langle \mathbf{v}, \mathbf{u} \rangle - \overline{t}\langle \mathbf{u}, \mathbf{v} \rangle + \lvert t \rvert^2 \langle \mathbf{v}, \mathbf{v} \rangle$$

Set $t = \frac{\langle \mathbf{u}, \mathbf{v} \rangle}{\langle \mathbf{v}, \mathbf{v} \rangle}$ (the
value that minimises the right side):

$$0 \leq \lVert \mathbf{u} \rVert^2 - \frac{\lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert^2}{\lVert \mathbf{v} \rVert^2}$$

Rearranging:
$\lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert^2 \leq \lVert \mathbf{u} \rVert^2 \lVert \mathbf{v} \rVert^2$.
Taking square roots gives the result. Equality holds iff $\mathbf{u} - t\mathbf{v} = \mathbf{0}$
I.e., $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent. $\blacksquare$

**Theorem 7.2 (Triangle Inequality).**

$$\lVert \mathbf{u} + \mathbf{v} \rVert \leq \lVert \mathbf{u} \rVert + \lVert \mathbf{v} \rVert$$

_Proof._

$$\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \langle \mathbf{u} + \mathbf{v}, \mathbf{u} + \mathbf{v} \rangle = \lVert \mathbf{u} \rVert^2 + 2\,\mathrm{Re}\langle \mathbf{u}, \mathbf{v} \rangle + \lVert \mathbf{v} \rVert^2$$

By Cauchy--Schwarz,
$\mathrm{Re}\langle \mathbf{u}, \mathbf{v} \rangle \leq \lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert \leq \lVert \mathbf{u} \rVert \lVert \mathbf{v} \rVert$So

$$\lVert \mathbf{u} + \mathbf{v} \rVert^2 \leq \lVert \mathbf{u} \rVert^2 + 2\lVert \mathbf{u} \rVert \lVert \mathbf{v} \rVert + \lVert \mathbf{v} \rVert^2 = (\lVert \mathbf{u} \rVert + \lVert \mathbf{v} \rVert)^2$$

Taking square roots gives the result. $\blacksquare$

### 7.3 Orthogonality

Two vectors $\mathbf{u}, \mathbf{v}$ are **orthogonal** if
$\langle \mathbf{u}, \mathbf{v} \rangle = 0$. We write $\mathbf{u} \perp \mathbf{v}$.

An **orthonormal set** $\{e_1, \ldots, e_k\}$ satisfies $\langle e_i, e_j \rangle = \delta_{ij}$.

**Theorem 7.3 (Pythagorean Theorem).** If $\mathbf{u} \perp \mathbf{v}$Then

$$\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + \lVert \mathbf{v} \rVert^2$$

_Proof._
$\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + 2\langle \mathbf{u}, \mathbf{v} \rangle + \lVert \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + \lVert \mathbf{v} \rVert^2$.
$\blacksquare$

**Proposition 7.4.** Every orthonormal set is linearly independent.

_Proof._ If $\sum_{i=1}^k \alpha_i e_i = \mathbf{0}$Then taking the inner product with $e_j$:
$\alpha_j = \langle \sum \alpha_i e_i, e_j \rangle = \langle \mathbf{0}, e_j \rangle = 0$ for each
$j$. $\blacksquare$

### 7.4 Gram--Schmidt Process

The **Gram--Schmidt process** converts a linearly independent set
$\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ into an orthonormal set $\{e_1, \ldots, e_n\}$:

$$\mathbf{u}_1 = \mathbf{v}_1, \quad e_1 = \frac{\mathbf{u}_1}{\lVert \mathbf{u}_1 \rVert}$$

$$\mathbf{u}_k = \mathbf{v}_k - \sum_{i=1}^{k-1} \langle \mathbf{v}_k, e_i \rangle e_i, \quad e_k = \frac{\mathbf{u}_k}{\lVert \mathbf{u}_k \rVert}$$

**Proposition 7.5.** At each step,
$\mathrm{span}\{e_1, \ldots, e_k\} = \mathrm{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$.

_Proof._ By construction, $\mathbf{u}_k$ is $\mathbf{v}_k$ minus its projection onto
$\mathrm{span}\{e_1, \ldots, e_{k-1}\} = \mathrm{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_{k-1}\}$.
So $\mathbf{u}_k \in \mathrm{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ and
$\mathbf{v}_k = \mathbf{u}_k + \sum_{i=1}^{k-1}\langle \mathbf{v}_k, e_i \rangle e_i \in \mathrm{span}\{\mathbf{u}_1, \ldots, \mathbf{u}_k\}$.
Since each $e_i$ is a scalar multiple of $\mathbf{u}_i$The spans coincide. $\blacksquare$

### 7.5 Orthogonal Projection

The **orthogonal projection** of $\mathbf{v}$ onto a subspace $W$ with orthonormal basis
$\{e_1, \ldots, e_k\}$ is

$$\mathrm{proj_W}(\mathbf{v}) = \sum_{i=1}^k \langle \mathbf{v}, e_i \rangle e_i$$

**Theorem 7.6 (Best Approximation).** Among all vectors in $W$The orthogonal projection
$\mathrm{proj_W}(\mathbf{v})$ minimises the distance to $\mathbf{v}$:

$$\lVert \mathbf{v} - \mathrm{proj_W}(\mathbf{v}) \rVert \leq \lVert \mathbf{v} - \mathbf{w} \rVert \quad \mathrm{for}~all~ \mathbf{w} \in W$$

_Proof._ For any $\mathbf{w} \in W$Write
$\mathbf{v} - \mathbf{w} = (\mathbf{v} - \mathrm{proj_W}(\mathbf{v})) + (\mathrm{proj_W}(\mathbf{v}) - \mathbf{w})$.
The first term is orthogonal to $W$ (hence to the second term, which lies in $W$), so by the
Pythagorean theorem:

$$\lVert \mathbf{v} - \mathbf{w} \rVert^2 = \lVert \mathbf{v} - \mathrm{proj_W}(\mathbf{v}) \rVert^2 + \lVert \mathrm{proj_W}(\mathbf{v}) - \mathbf{w} \rVert^2 \geq \lVert \mathbf{v} - \mathrm{proj_W}(\mathbf{v}) \rVert^2$$

With equality iff $\mathbf{w} = \mathrm{proj_W}(\mathbf{v})$. $\blacksquare$

### 7.6 Least Squares Approximation

A fundamental application of orthogonal projection is fitting functions to data. Given a subspace
$W$ of an inner product space $V$ and a target $\mathbf{v} \in V$The best approximation in $W$ Is
the orthogonal projection $\mathrm{proj_W}(\mathbf{v})$.

### 7.7 Worked Example: Gram--Schmidt

**Problem.** Apply the Gram--Schmidt process to $\mathbf{v}_1 = (1, 1, 0)$
$\mathbf{v}_2 = (1, 0, 1)$, $\mathbf{v}_3 = (0, 1, 1)$ in $\mathbb{R}^3$ with the standard inner
Product.

<details>
<summary>Solution</summary>

$\mathbf{u}_1 = \mathbf{v}_1 = (1, 1, 0)$, $\lVert \mathbf{u}_1 \rVert = \sqrt{2}$,
$e_1 = \frac{1}{\sqrt{2}}(1, 1, 0)$.

$\mathbf{u}_2 = \mathbf{v}_2 - \langle \mathbf{v}_2, e_1 \rangle e_1 = (1, 0, 1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 1, 0) = (1, 0, 1) - \frac{1}{2}(1, 1, 0) = (\frac{1}{2}, -\frac{1}{2}, 1)$

$\lVert \mathbf{u}_2 \rVert = \sqrt{1/4 + 1/4 + 1} = \sqrt{3/2}$,
$e_2 = \frac{1}{\sqrt{3/2}}(\frac{1}{2}, -\frac{1}{2}, 1) = \frac{1}{\sqrt{6}}(1, -1, 2)$.

$\mathbf{u}_3 = \mathbf{v}_3 - \langle \mathbf{v}_3, e_1 \rangle e_1 - \langle \mathbf{v}_3, e_2 \rangle e_2$

$\langle \mathbf{v}_3, e_1 \rangle = \frac{1}{\sqrt{2}}(0 + 1 + 0) = \frac{1}{\sqrt{2}}$

$\langle \mathbf{v}_3, e_2 \rangle = \frac{1}{\sqrt{6}}(0 - 1 + 2) = \frac{1}{\sqrt{6}}$

$\mathbf{u}_3 = (0, 1, 1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 1, 0) - \frac{1}{\sqrt{6}} \cdot \frac{1}{\sqrt{6}}(1, -1, 2) = (0, 1, 1) - \frac{1}{2}(1, 1, 0) - \frac{1}{6}(1, -1, 2)$

$= (-\frac{1}{2} - \frac{1}{6}, 1 - \frac{1}{2} + \frac{1}{6}, 1 - \frac{1}{3}) = (-\frac{2}{3}, \frac{2}{3}, \frac{2}{3})$

$\lVert \mathbf{u}_3 \rVert = \sqrt{4/9 + 4/9 + 4/9} = \sqrt{4/3} = 2/\sqrt{3}$,
$e_3 = \frac{\sqrt{3}}{2}(-\frac{2}{3}, \frac{2}{3}, \frac{2}{3}) = \frac{1}{\sqrt{3}}(-1, 1, 1)$.

**Verification:** $\langle e_1, e_2 \rangle = \frac{1}{\sqrt{12}}(1 - 1 + 0) = 0$. $\checkmark$
$\langle e_1, e_3 \rangle = \frac{1}{\sqrt{6}}(-1 + 1 + 0) = 0$. $\checkmark$
$\langle e_2, e_3 \rangle = \frac{1}{\sqrt{18}}(-1 - 1 + 2) = 0$. $\checkmark$

The orthonormal basis is
$\left\{\frac{1}{\sqrt{2}}(1,1,0),\ \frac{1}{\sqrt{6}}(1,-1,2),\ \frac{1}{\sqrt{3}}(-1,1,1)\right\}$.
$\blacksquare$

</details>

:::caution Common Pitfall The Gram--Schmidt process requires a linearly independent starting set. If
the input vectors are Linearly dependent, one of the $\mathbf{u}_k$ will be the zero vector, and the
process will fail (attempting to divide by zero in the normalisation step).

### 7.8 Worked Example: Orthogonal Projection onto a Plane

**Problem.** Find the orthogonal projection of $\mathbf{v} = (3, -1, 2)$ onto the plane $W$ spanned
by $(1, 0, 1)$ and $(0, 1, 1)$ in $\mathbb{R}^3$ with the standard inner product. Also find the
distance from $\mathbf{v}$ to $W$.

<details>
<summary>Solution</summary>

First, apply Gram--Schmidt to obtain an orthonormal basis for $W$.

$\mathbf{u}_1 = (1, 0, 1)$, $\lVert \mathbf{u}_1 \rVert = \sqrt{2}$,
$e_1 = \frac{1}{\sqrt{2}}(1, 0, 1)$.

$\mathbf{u}_2 = (0, 1, 1) - \langle (0,1,1), e_1 \rangle e_1 = (0, 1, 1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 0, 1) = (0, 1, 1) - \frac{1}{2}(1, 0, 1) = (-\frac{1}{2}, 1, \frac{1}{2})$.

$\lVert \mathbf{u}_2 \rVert = \sqrt{1/4 + 1 + 1/4} = \sqrt{3/2}$,
$e_2 = \frac{1}{\sqrt{6}}(-1, 2, 1)$.

Now compute the projection:

$\langle \mathbf{v}, e_1 \rangle = \frac{1}{\sqrt{2}}(3 + 0 + 2) = \frac{5}{\sqrt{2}}$

$\langle \mathbf{v}, e_2 \rangle = \frac{1}{\sqrt{6}}(-3 - 2 + 2) = \frac{-3}{\sqrt{6}}$

$\mathrm{proj_W}(\mathbf{v}) = \frac{5}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 0, 1) + \frac{-3}{\sqrt{6}} \cdot \frac{1}{\sqrt{6}}(-1, 2, 1)$

$= \frac{5}{2}(1, 0, 1) + \frac{-3}{6}(-1, 2, 1) = (\frac{5}{2}, 0, \frac{5}{2}) + (\frac{1}{2}, -1, -\frac{1}{2}) = (3, -1, 2)$

The residual is $\mathbf{v} - \mathrm{proj_W}(\mathbf{v}) = (0, 0, 0)$So the distance is 0. This
means $\mathbf{v} \in W$ itself. Indeed,
$\mathbf{v} = 3(1, 0, 1) - (0, 1, 1) \in \mathrm{span}\{(1,0,1), (0,1,1)\}$. $\blacksquare$

</details>

### 7.9 Worked Example: $L^2$ Least Squares Approximation

**Problem.** Find the constant function $c$ (i.e., the best approximation by a degree-0 polynomial)
That minimises $\int_0^1 (e^x - c)^2\,dx$.

<details>
<summary>Solution</summary>

We want the orthogonal projection of $f(x) = e^x$ onto the subspace $W = \mathrm{span}\{1\}$ in the
$L^2[0,1]$ inner product space. The orthonormal basis for $W$ is $e_1 = 1$ (since
$\lVert 1 \rVert^2 = \int_0^1 1\,dx = 1$).

$\mathrm{proj_W}(f) = \langle f, 1 \rangle \cdot 1 = \left(\int_0^1 e^x\,dx\right) \cdot 1 = (e - 1) \cdot 1$

So the best constant approximation is $c = e - 1 \approx 1.718$.

**Verification:** The error is $e^x - (e-1)$. Expanding $e^x$ as a Taylor series around $x = 1/2$:
The constant term is $e^{1/2} \approx 1.649$But our answer $e - 1 \approx 1.718$ is the
$L^2$-optimal constant, not the Taylor approximation. The two optimisation criteria differ.
$\blacksquare$

</details>

### 7.10 Common Pitfalls

- **The Cauchy--Schwarz inequality is not the triangle inequality.** Cauchy--Schwarz bounds the
  inner product by the product of norms; the triangle inequality bounds the norm of a sum by the sum
  of norms. They are related (the triangle inequality follows from Cauchy--Schwarz) but distinct.
- **Gram--Schmidt is numerically unstable.** For floating-point computation, modified Gram--Schmidt
  or Householder reflections are preferred.
- **Orthogonal projection decomposes $\mathbf{v}$ uniquely.**
  $\mathbf{v} = \mathrm{proj_W}(\mathbf{v}) + \mathbf{v}^\perp$ where
  $\mathbf{v}^\perp \in W^\perp$. This decomposition is unique and is called the **orthogonal
  decomposition**.

---



:::
