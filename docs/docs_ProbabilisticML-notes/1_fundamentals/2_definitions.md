---
title: Definitions
date: 2026-01-15T09:31:35.184Z
tags:
  - ML
categories:
  - ML
slug: definitions
---

To understand the basis for probability theory, it is important to fully understand every term used. Here are the definitions for the terms we will be using, refer back to this page if there are any confusion on terminology.

## Sets and Relations

### Power Set

A power set $\mathcal{P}(S)$ of set $S$ is the set of all subsets of $S$. For example, let $S = \{1,2,3\}$, the power set of $S$ will be $\mathcal{P}(S) = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\}, \{1,2,3\}\}$

### Disjoint Sets

A collection of sets $\{A_i\}_{i \in I}$ is pairwise disjoint if $A_i \cap A_j = \emptyset$ for all $i \neq j$.

### Equivalence Relation

A binary relation $\sim$ on a set $S$ is an equivalence relation if it satisfies:

1. Reflexivity: $x \sim x$.
2. Symmetry: $x \sim y \implies y \sim x$.
3. Transitivity: $x \sim y \land y \sim z \implies x \sim z$.

The set of all equivalence classes is denoted $S / \sim$ (the quotient set).

### Quotient Space

Given a set $S$ and an equivalence relation $\sim$, the quotient space $S / \sim$ is the set of equivalence classes $\{ [x] : x \in S \}$, where $[x] = \{ y \in S : x \sim y \}$.

*Context in Probability:* $L^p$ is the quotient space of $\mathcal{L}^p$ (the space of measurable functions with finite $p$-**semi-norm**) under the equivalence relation $f \sim g \iff f=g$ $\mu$-a.e. Formally, $L^p = \mathcal{L}^p / \sim$.

:::warning
**Semi-norm vs. Norm:** The functional $\lVert \cdot \rVert_p$ is only a **semi-norm** on $\mathcal{L}^p$ because $\lVert f \rVert_p = 0 \implies f = 0$ almost everywhere, not everywhere. It becomes a true **norm** only after quotienting by the equivalence relation to obtain $L^p$. This distinction ensures $L^p$ is a Banach space by identifying functions that differ only on null sets.
:::

## Topology and Metric Spaces

### Topology

A topology $\tau$ on a set $S$ is a **collection of subsets of $S$** (i.e., $\tau \subseteq \mathcal{P}(S)$), called open sets, satisfying:

1. Triviality: $\emptyset, S \in \tau$

2. Finite intersection: $U_1, \dots, U_n \in \tau \implies \bigcap^n_{i=1} U_i \in \tau, n\in \mathbb{N}$

3. Arbitrary union: If $\left\{U_\alpha\right\}_{\alpha \in A}$ is a collection of sets such that $U_\alpha \in \tau$ for all $\alpha \in A$, then $\bigcup_{\alpha \in A} U_\alpha \in \tau$.

### Topological Space

A topological space is a pair $(S, \tau)$ where $S$ is a set and $\tau$ is a topology on $S$. The elements of $\tau$ are definitionally called open sets.

### Metric Space

A Metric space is a set $M$ with a distance function $d: M \times M \to [0, \infty)$ satisfying:

1. Non-negativity: $d(x,y) \geq 0$
2. Identity of Indiscernibles: $d(x,y)=0 \iff x=y$
3. Symmetry: $d(x,y) = d(y,x)$
4. Triangle inequality: $d(x, z) \leq d(x,y)+d(y,z)$

### Neighborhood

A set $N \subseteq S$ is a neighborhood of a point $x \in S$ if there exists an open set $U \in \tau$ such that $x \in U \subseteq N$. An Open Neighborhood is a neighborhood that is itself an open set.

### Closed Set

A set $C \subseteq S$ is closed if its complement $C^c = S \setminus C$ is open. In a topological space, closed sets satisfy:

1. $\emptyset$ and $S$ are closed.
2. Finite unions of closed sets are closed.
3. Arbitrary intersections of closed sets are closed.

### Closure and Interior

Given a set $A \subseteq S$ in a topological space:

- The **closure** $\overline{A}$ is the smallest closed set containing $A$ (intersection of all closed supersets).
- The **interior** $A^\circ$ is the largest open set contained in $A$ (union of all open subsets).
- The **boundary** $\partial A = \overline{A} \setminus A^\circ$.

### Lipschitz Continuity

Given metric spaces $(X, d_X)$ and $(Y, d_Y)$, a function $f: X \to Y$ is $K$-Lipschitz (with $K \geq 0$) if:
$$ d_Y(f(x_1), f(x_2)) \leq K \cdot d_X(x_1, x_2) \quad \forall x_1, x_2 \in X $$

The **Lipschitz constant** (or Lipschitz semi-norm) is defined as:
$$\lVert f \rVert_{\text{Lip}} = \sup_{x \neq y} \frac{d_Y(f(x), f(y))}{d_X(x, y)}$$

The set of 1-Lipschitz functions consists of all functions satisfying $\lVert f \rVert_{\text{Lip}} \leq 1$.

In Wasserstein GANs, the discriminator (critic) must be 1-Lipschitz. This is often enforced via Gradient Penalty or Spectral Normalization.

### Polish Space

A topological space $(S, \tau)$ is a Polish Space if it is:

1. Separable: Contains a countable dense subset.
2. Completely Metrizable: There exists a metric $d$ inducing $\tau$ such that $(S, d)$ is a complete metric space (every Cauchy sequence converges).

*Relevance to ML:* $\mathbb{R}^n$, infinite sequences $\mathbb{R}^\infty$, and space of continuous functions $C[0,1]$ are Polish. This property ensures regular conditional probabilities exist.

### Borel $\sigma$-algebra

Let $(S, \tau)$ be a topological space, the Borel $\sigma$-algebra, denoted $\mathcal{B}(S)$, is the $\sigma$-algebra generated by topology $\tau$:

$$
\begin{equation}
  \mathcal{B}(S) = \sigma (\tau)
\end{equation}
$$

### Borel Space

The pair $(S, \mathcal{B}(S))$ is called a Borel space.

### Standard Borel Space

A measurable space $(\Omega, \mathcal{F})$ is a standard Borel space if there exists a bimeasurable bijection (a bijection $f$ where both $f$ and $f^{-1}$ are measurable) between $(\Omega, \mathcal{F})$ and $(B, \mathcal{B}(B))$ where $B$ is a **Borel subset** of a Polish space $S$.

*Note:* By Kuratowski's theorem, all uncountable standard Borel spaces are isomorphic to each other (and to $[0,1]$ with its Borel $\sigma$-algebra). Including Borel subsets (rather than just Polish spaces) ensures discrete/finite spaces and intervals like $(0,1]$ are naturally covered.

## Multivariate Calculus & Differential Geometry

### Diffeomorphism

A map $\phi: U \to V$ between open sets in $\mathbb{R}^d$ is a **$C^k$-diffeomorphism** if it is a bijection, $k$-times continuously differentiable, and its inverse $\phi^{-1}$ is also $k$-times continuously differentiable. In ML contexts, usually $k=1$ ($C^1$-diffeomorphism) or $k=\infty$ ($C^\infty$-diffeomorphism, smooth).

*Crucial for Normalizing Flows/Change of Variables.*

### Jacobian Matrix

Let $T: U \to V$ be a differentiable map between open sets in $\mathbb{R}^d$. The **Jacobian matrix** of $T$ at point $x$, denoted $\mathbf{J}_T(x)$, is the $d \times d$ matrix of all first-order partial derivatives:

$$
\mathbf{J}_T(x) = \begin{pmatrix}
\frac{\partial T_1}{\partial x_1}(x) & \cdots & \frac{\partial T_1}{\partial x_d}(x) \\
\vdots & \ddots & \vdots \\
\frac{\partial T_d}{\partial x_1}(x) & \cdots & \frac{\partial T_d}{\partial x_d}(x)
\end{pmatrix}
$$

The **Jacobian determinant** $|\det \mathbf{J}_T(x)|$ measures the local volume distortion factor of the transformation $T$ at point $x$.

*Relevance:* Essential for Normalizing Flows, where the log-determinant of the Jacobian must be tractable to compute the transformed density. Also appears in backpropagation (chain rule) and neural network optimization.

### Change of Variables (Diffeomorphism)

Let $X$ be a random variable with PDF $p_X$ on an open set $U \subseteq \mathbb{R}^d$. Let $T: U \to V$ be a $C^1$-diffeomorphism. Let $Y = T(X)$. The PDF of $Y$ is given by:
$$
p_Y(y) = p_X(T^{-1}(y)) \cdot \left| \det \mathbf{J}_{T^{-1}}(y) \right|
$$
Using the Inverse Function Theorem, this is equivalent to:
$$
p_Y(y) = p_X(T^{-1}(y)) \cdot | \det \mathbf{J}_T(T^{-1}(y)) |^{-1}
$$

where $\mathbf{J}_{T^{-1}}(y)$ is the Jacobian matrix of the inverse transformation evaluated at $y$.

## Measure Theory Foundations

### $\sigma$-algebra

Given a non-empty set $\Omega$, the $\sigma$-algebra $\mathcal{F}$ is a sub-collection of the power set $\mathcal{P}(\Omega)$ whose elements are called measurable sets, where $\mathcal{F}$ satisfies:

1. Triviality: $\Omega \in \mathcal{F}$
2. Closure under complement: $A \in \mathcal{F} \implies A^c \in \mathcal{F}$
3. Closure under countable Union: $A_1, A_2, \dots \in \mathcal{F} \implies \bigcup^\infty_{i=1} A_i \in \mathcal{F}$

:::info
Why condition 3 is necessary:
Countable unions are required to handle limits, for example, when we analyze a sequence of events $\lim_{n\to \infty} A_n$, without closure under countable unions, probabilities cannot be assign to limits of random variables.
:::

### Sub-$\sigma$-algebra

Given a measurable space $(\Omega, \mathcal{F})$, a collection $\mathcal{G}\subseteq \mathcal{F}$ is a sub-$\sigma$-algebra if $\mathcal{G}$ is itself a $\sigma$-algebra on $\Omega$.

*Intuition:* A sub-$\sigma$-algebra represents a coarser information structure---it contains fewer events, corresponding to having less information about the outcome.

### Measurable Space

A measurable space is a tuple $(\Omega, \mathcal{F})$ consisting of any non-empty set (sample space) $\Omega$ and $\sigma$-algebra $\mathcal{F} \subseteq \mathcal{P}(\Omega)$.

### Generated $\sigma$-algebra

Let $\mathcal{C} \subseteq \mathcal{P}(S)$ be any collection of subsets of $S$, the $\sigma$-algebra generated by $\mathcal{C}$, denoted $\sigma(\mathcal{C})$ is the intersection of all $\sigma$-algebras containing $\mathcal{C}$, hence the smallest $\sigma$-algebra containing $\mathcal{C}$. This is denoted:

$$
\begin{equation}
  \sigma(\mathcal{C}) = \bigcap \left\{\mathcal{G}:\mathcal{C} \subseteq \mathcal{G}, \mathcal{G} \text{ is a $\sigma$-algebra on }S \right\}
\end{equation}
$$

### Measurable Function

Let $(\Omega_1, \mathcal{F}_1)$ and $(\Omega_2, \mathcal{F}_2)$ be measurable spaces. A function $f: \Omega_1 \to \Omega_2$ is **measurable** (or $\mathcal{F}_1/\mathcal{F}_2$-measurable) if the pre-image of every measurable set in the target is a measurable set in the source:

$$
\forall B \in \mathcal{F}_2, \quad f^{-1}(B) \triangleq \{\omega \in \Omega_1 : f(\omega) \in B\} \in \mathcal{F}_1
$$

*Note:* This is the foundational definition before introducing Random Elements.

### Measure

In a measurable space $(\Omega, \mathcal{F})$, a measure is a function $\mu : \mathcal{F} \rightarrow [0,\infty]$, satisfying:

1. Null set: $\mu(\emptyset) = 0$
2. Countable additivity: For any countable collection of pairwise disjoint sets $\{A_i\}^\infty_{i=1} \subseteq \mathcal{F}$:

$$
\mu \left(\bigcup^\infty_{i=1} A_i\right) = \sum^\infty_{i=1} \mu (A_i)
$$

### Almost Everywhere and Equivalence

Two functions $f, g$ are equivalent ($f \sim g$) if they are equal almost everywhere, meaning:

$$
\mu(\left\{ x\in \Omega: f(x) \neq g(x)\right\}) = 0
$$

assuming the set $\{x \in \Omega : f(x) \neq g(x)\}$ is measurable.

:::warning
**Rigor Note:** In pure measure theory, the set $\{x \in \Omega : f(x) \neq g(x)\}$ need not be measurable if the measure space is not complete. The fully rigorous formulation is: There exists a measurable null set $N \in \mathcal{F}$ such that $\mu(N) = 0$ and $\{x \in \Omega : f(x) \neq g(x)\} \subseteq N$. This bypasses the need to assume the inner set is measurable and naturally introduces the concept of measure space completeness (see *Completeness of a Measure Space* below).
:::

:::info
**Terminology Note:** When the measure $\mu$ is a probability measure $P$, "almost everywhere" (a.e.) is conventionally called "almost surely" (a.s.). We write $f = g$ a.s. or $f = g$ $P$-a.e. interchangeably.
:::

### Completeness of a Measure Space

A measure space $(\Omega, \mathcal{F}, \mu)$ is **complete** if every subset of a null set is measurable (and hence also a null set). Formally:

$$
\text{If } N \in \mathcal{F} \text{ with } \mu(N) = 0 \text{ and } A \subseteq N, \text{ then } A \in \mathcal{F}
$$

*Note:* The Lebesgue measure on $\mathbb{R}^d$ is complete by construction. Any measure space can be "completed" by adding all subsets of null sets to the $\sigma$-algebra. The completion of a Borel measure yields the larger $\sigma$-algebra of Lebesgue-measurable sets.

### $\sigma$-finite Measure

A measure $\mu$ on $(\Omega, \mathcal{F})$ is $\sigma$-finite if $\Omega$ can be written as a countable union of measurable sets with finite measures:

$$
\Omega = \bigcup^\infty_{n=1} A_n, \quad A_n \in \mathcal{F}, \quad \mu(A_n) < \infty
$$

### Reference Measure

The reference measure $\lambda$ is a fixed $\sigma$-finite measure on a measurable space $(S, \mathcal{F})$.

### Absolute Continuity of Measures

Given two measures $\nu$ and $\mu$ on the same measurable space $(\Omega, \mathcal{F})$, we say $\nu$ is **absolutely continuous** with respect to $\mu$, denoted $\nu \ll \mu$, if:
$$
\mu(A) = 0 \implies \nu(A) = 0 \quad \forall A \in \mathcal{F}
$$

*Intuition:* If $\nu \ll \mu$, then $\nu$ cannot "create probability out of thin air" where $\mu$ says there is none. This is the prerequisite for the existence of the Radon-Nikodym derivative.

### Pushforward Measure

Let $T: (\Omega_1, \mathcal{F}_1) \to (\Omega_2, \mathcal{F}_2)$ be a **measurable mapping**. Given a measure $\mu$ on $(\Omega_1, \mathcal{F}_1)$, the **pushforward measure** $T_\#\mu$ on $(\Omega_2, \mathcal{F}_2)$ is defined as:

$$
T_\# \mu(B) = \mu(T^{-1}(B)) \quad \text{for all } B \in \mathcal{F}_2
$$

*Note:* This is a pure measure-theoretic concept. When $T$ is a random element and $\mu = P$, the pushforward becomes the law/induced distribution.

*ML Context:* In Generative Models (GANs/VAEs), the pushforward measure is the foundation of the **Generator**. If $z \sim \mathcal{N}(0, I)$ is a latent variable and $G_\theta$ is a neural network, the generated data distribution is exactly the pushforward measure ${G_\theta}_\# \mathcal{N}(0, I)$.

### Product Measure

Let $(\Omega_1, \mathcal{F}_1, \mu_1)$ and $(\Omega_2, \mathcal{F}_2, \mu_2)$ be two $\sigma$-finite measure spaces. The product $\sigma$-algebra, denoted $\mathcal{F}_1 \otimes \mathcal{F}_2$ is the $\sigma$-algebra generated by measurable rectangles $A \times B$ where $A \in \mathcal{F}_1, B \in \mathcal{F}_2$. There exists a unique measure $\pi = \mu_1 \otimes \mu_2$ on $\mathcal{F}_1 \otimes \mathcal{F}_2$ such that for all measurable rectangles:

$$
\begin{equation}
  \pi(A \times B) = \mu_1(A)\mu_2(B)
\end{equation}
$$

### Radon-Nikodym Derivative

Let $(\Omega,\mathcal{F})$ be a measurable space equipped with two $\sigma$-finite measures $\mu$ and $\nu$. If $\nu$ is absolutely continuous with respect to $\mu$ (denoted $\nu \ll \mu$), meaning that $\forall A \in \mathcal{F}, (\mu(A)=0 \implies \nu(A)=0)$, then there exists a measurable function $f: \Omega \to [0,\infty)$, unique $\mu$-almost everywhere, such that for every $A \in \mathcal{F}$:

$$
\nu(A) = \int_A f d\mu
$$

The function $f$ is called the Radon-Nikodym derivative and is denoted $f = \frac{d\nu}{d\mu}$.

### Dirac Measure

Let $(S, \mathcal{B}(S))$ be a measurable space and $x \in S$ be a fixed point. The Dirac measure $\delta_x$ is defined as:

$$
\forall A \in \mathcal{B}(S), \quad
\delta_x(A) = \begin{cases}
  1 & \text{if } x\in A\\
  0 & \text{if } x\notin A
\end{cases}
$$

### Empirical Measure

Let $(S, \mathcal{F})$ be a measurable space and $x_1, \dots, x_n \in S$ be fixed observations. The empirical measure $\hat{P}_n$ is defined as:
$$
\hat{P}_n(A) = \frac{1}{n} \sum_{i=1}^n \delta_{x_i}(A) = \frac{ | \{i : x_i \in A\} | }{n}, \quad \forall A \in \mathcal{F}
$$

where $| \cdot |$ denotes the **cardinality** (number of elements) of the set, not absolute value.

:::info
In statistical contexts, if $X_1, \dots, X_n$ are random elements, $\hat{P}_n$ becomes a RandomMeasure mapping $\omega \mapsto \frac{1}{n}\sum \delta_{X_i(\omega)}$.
:::

### Support of a Measure

Given a Borel probability measure $\mu$ on a topological space $(S, \tau)$, the support of $\mu$, denoted $\text{supp}(\mu)$, is the set of all points $x \in S$ for which every open neighborhood of $x$ has positive measure. Equivalently, it is the intersection of all closed sets with full measure:

$$
\text{supp}(\mu) = \bigcap \{ C \subseteq S : C \text{ is closed and } \mu(C) = 1 \}
$$

### Probability Measure

A probability measure $P$ is a measure on $(\Omega, \mathcal{F})$ such that $P(\Omega) = 1$. It must satisfy Countable Additivity:
For any countable sequence of pairwise disjoint events $\{A_i\}_{i=1}^\infty \subseteq \mathcal{F}$:
$$
P\left(\bigcup_{i=1}^\infty A_i\right) = \sum_{i=1}^\infty P(A_i)
$$

### Space of Probability Measure

Let $(S, \mathcal{B}(S))$ be a measurable space. The space of probability measures $\mathcal{M}_1(S)$ is the set of all probability measures on $(S, \mathcal{B}(S))$ such that $\mu(S) = 1$ for all $\mu \in \mathcal{M}_1(S)$.

:::info
The notation $\mathcal{M}_1$ emphasizes that these are probability measures (total mass 1), as opposed to general measures with arbitrary mass.
:::

### Probability Space

A probability space is a tuple $(\Omega, \mathcal{F}, P)$, where $(\Omega, \mathcal{F})$ is the measurable space defined previously and $P$ is the probability measure where $P \in \mathcal{M}_1(\Omega, \mathcal{F})$.

### Outcome

Outcome $\omega \in \Omega$ is an element of some space $\Omega$.

### Carathéodory's Extension Theorem

Let $\Omega$ be a set and $\mathcal{R}$ be a Ring of subsets (closed under finite union and relative complement). Let $\mu_0: \mathcal{R} \to [0, \infty]$ be a pre-measure (countably additive on $\mathcal{R}$).
**Theorem:** There exists a measure $\mu$ on the $\sigma$-algebra generated by $\mathcal{R}$, denoted $\sigma(\mathcal{R})$, such that $\mu(A) = \mu_0(A)$ for all $A \in \mathcal{R}$.
Furthermore, if $\mu_0$ is $\sigma$-finite, this extension $\mu$ is unique.

This theorem allows us to define the Lebesgue measure on $\mathbb{R}$ simply by defining the length of intervals, and guarantees a valid probability measure exists on the complex Borel $\sigma$-algebra.

### Kolmogorov Extension Theorem (Kolmogorov-Bochner)

Let $T$ be an index set (typically $T = \mathbb{R}$ or $T = \mathbb{N}$ for time). For each finite subset $J = \{t_1, \dots, t_n\} \subset T$, let $\mu_J$ be a probability measure on $(\mathbb{R}^J, \mathcal{B}(\mathbb{R}^J))$ (a **finite-dimensional distribution** or FDD).

**Consistency Condition:** The family $\{\mu_J\}$ is **consistent** if for any finite subsets $J \subseteq K \subset T$, the marginal of $\mu_K$ onto coordinates $J$ equals $\mu_J$:
$$
\mu_J(A) = \mu_K(A \times \mathbb{R}^{K \setminus J}), \quad \forall A \in \mathcal{B}(\mathbb{R}^J)
$$

**Theorem:** If $\{\mu_J\}$ is a consistent family of finite-dimensional distributions, there exists a unique probability measure $P$ on the product space $(\mathbb{R}^T, \mathcal{B}(\mathbb{R}^T))$ such that for every finite $J \subset T$, the marginal distribution of $P$ on $\mathbb{R}^J$ is $\mu_J$.

*Relevance:* This theorem is **essential** for rigorously defining stochastic processes. It guarantees that the Wiener Process (Brownian Motion) and Markov Chains exist as well-defined probability measures on path space, given only their finite-dimensional distributions.

## Probability Properties

### Event

Given a measurable space $(\Omega, \mathcal{F})$, an event is a measurable set $A \in \mathcal{F}$ to which a probability $P(A)$ can be assigned.

### Elementary Event

An elementary event is a set containing a single outcome, $\{\omega\} \subset \Omega$. For singletons in $\Omega$ to be measurable, we must assume the $\sigma$-algebra $\mathcal{F}$ contains all singletons, or equivalently, that $\Omega$ is equipped with a topology making it a Standard Borel space (e.g., $\Omega$ is itself a Polish space).

*Note:* This is distinct from singletons in the target space $S$. When $S$ is a Polish space equipped with its Borel $\sigma$-algebra $\mathcal{B}(S)$, all singletons $\{s\} \subset S$ are indeed measurable because Polish spaces are $T_1$ (singletons are closed, hence Borel-measurable).

### Complementary Event

The **complement** of an event $A$ is defined as $A^c = \Omega \setminus A$.

By the additivity axiom of probability measures, this yields the property:
$$
P(A \cup A^c) = P(\Omega) = 1
$$

### Joint Probability

If two events $A, B \in \mathcal{F}$ the probability of their intersection is denoted $P(A \cap B)$. Using the additivity of measures, the inclusion-exclusion principle is as follows:

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

:::info
You are reminded that mutually exclusive events have the property $P(A \cap B) = 0$
:::

### Conditional Probability

For events $A, B \in \mathcal{F}, P(B) > 0$, the conditional probability of $A$ given $B$ is defined as the normalized measure of the intersection:

$$
P(A|B) \triangleq \frac{P(A\cap B)}{P(B)}, \quad P(B) \in (0, 1]
$$

### Mutual Independence

A finite collection of events $A_1, \dots, A_n \in \mathcal{F}$ is **mutually independent** (or simply independent) if for every subset of indices $I \subseteq \{1, \dots, n\}$:

$$
P\left(\bigcap_{i\in I} A_i\right) = \prod_{i\in I}P(A_i)
$$

:::info
**Terminology Note:** The term "marginal independence" is sometimes used to refer to unconditional independence $X \perp Y$, contrasting with conditional independence $X \perp Y \mid Z$. For the independence of $n$ events, "mutual independence" is the standard terminology.
:::

### Conditional Independence

Given that event $C \in \mathcal{F}$ holds, event $A, B \in \mathcal{F}$ are conditionally independent if:

$$
P(A\cap B| C) = P(A|C)P(B|C)
$$

This is often denoted as $A \perp B | C$.

## Random Elements and Distributions

### Random Element

The random elements can map to spaces other than the real line, random variable (strictly real number line) is not enough to measure the full domain of a random source. Therefore, random element should be strictly defined. Let $(\Omega, \mathcal{F})$ be a measurable space (the source of randomness), and $(S, \mathcal{B}(S))$ be a measurable space (the target). A function $X:\Omega \rightarrow S$ is a random element if it is measurable, i.e., the pre-image of every measurable set in the target is a measurable set in the source:

$$
\forall B \in \mathcal{B}(S), X^{-1}(B) \triangleq \{\omega \in \Omega : X(\omega) \in B\} \in \mathcal{F}
$$

### Random Variable

A random variable is a specific case of random element where the target space is the real line:

$$
(S, \mathcal{B}(S)) = (\mathbb{R}, \mathcal{B}(\mathbb{R}))
$$

### Random Vector

A random vector is a specific case of random element where the target space is the Euclidean space $\mathbb{R}^d$:

$$
(S, \mathcal{B}(S)) = (\mathbb{R}^d, \mathcal{B}(\mathbb{R}^d))
$$

A random vector $\mathbf{X} = (X_1, \dots, X_d)^\top$ can be viewed as a collection of $d$ real-valued random variables.

### Independence of $\sigma$-algebras

Two $\sigma$-algebras $\mathcal{G}, \mathcal{H} \subseteq \mathcal{F}$ are independent if for all $G \in \mathcal{G}$ and $H \in \mathcal{H}$, $P(G \cap H) = P(G)P(H)$.

### Independence of Random Elements

Random elements $X, Y$ on $(\Omega, \mathcal{F}, P)$ are independent if their generated $\sigma$-algebras $\sigma(X) = \{X^{-1}(B) : B \in \mathcal{B}(S)\}$ and $\sigma(Y)$ are independent.

### The Law/Induced Distribution

The Law of random element $X$ is the probability measure $P_X \in \mathcal{M}_1(S, \mathcal{B}(S))$, defined by the pushforward $X\sim P_X$:

$$
P_X(B) = P(X^{-1}(B))
$$

### Probability Density Function

If $P_X \ll \lambda$, the probability density function would be the Radon-Nikodym derivative $f=\frac{d P_X}{d \lambda}$, satisfying:

$$
\begin{equation}
  P_X(B) = \int_B f \space d \lambda
\end{equation}
$$

*Note:* The PDF $f$ is unique **only up to $\lambda$-null sets**. If $f$ and $g$ differ only on a set of $\lambda$-measure zero, they define the same probability measure $P_X$.

### Absolutely Continuous Random Element

$X$ is absolutely continuous with respect to a reference measure $\lambda$ if its induced law $P_X$ is absolutely continuous with respect to $\lambda$, i.e., $P_X \ll \lambda$.

### Marginal Distribution

Let $(X, Y)$ be a pair of random elements with joint distribution $P_{XY}$ on the product space $(S \times T, \mathcal{S} \otimes \mathcal{T})$. The **marginal distribution** of $X$ is the pushforward of $P_{XY}$ under the projection map $\pi_X: S \times T \to S$, defined as:

$$
P_X(A) = P_{XY}(A \times T) = (\pi_X)_\# P_{XY}(A), \quad \forall A \in \mathcal{S}
$$

Equivalently, $P_X$ is the law of $X$ when treating $X$ as a random element in isolation.

*Note:* The term "marginal" refers to the fact that in the discrete case, summing the joint probability table over $Y$ yields the marginal probabilities of $X$ in the margins of the table.

### Independent and Identically Distributed (IID)

Given a sequence of random elements $X_1, \dots, X_n$, if their joint law is the product of their marginal laws:

$$
P_{(X_1, \dots, X_n)} = P_{X_1} \otimes \dots \otimes P_{X_n}
$$

and all marginal laws are identical ($P_{X_1} = \dots = P_{X_n} = P_X$), then the sequence is **IID**. Equivalently, the random elements are pairwise independent and all share the same distribution.

*Note:* This definition requires the concepts of Random Elements, Joint Laws, and Marginal Laws, which is why it is placed here rather than in the Probability Properties section.

## Integration and Expectation

### Indicator Function ($1_A$)

Indicator function $1_A:\Omega \rightarrow \{1,0\}$ satisfies:

$$
1_A(\omega) =
\begin{cases}
  1 & \text{if } \omega \in A\\
  0 & \text{else}
\end{cases}
$$

### Simple Function

A function $s: \Omega \rightarrow \mathbb{R}$ is a **simple function** if it takes on a finite number of values. This can be written as a linear combination of indicator functions:

$$
s(\omega) = \sum^n_{i=1} \alpha_i 1_{A_i} (\omega), \quad \alpha_i \in \mathbb{R}, \quad A_i \in \mathcal{F}
$$

where $\alpha_i \in \mathbb{R}$ are real coefficients and $A_i \in \mathcal{F}$ are pairwise disjoint measurable sets.

:::info
**Non-negative Simple Function:** For the construction of the Lebesgue integral, we specifically use **non-negative simple functions** where $\alpha_i \in [0, \infty)$ for all $i$. General simple functions (allowing negative coefficients) are used in the final step of the integral construction.
:::

### Lebesgue Integral

This is an integral constructed from $3$ steps:

1. Simple functions: Given a simple function $s=\sum \alpha_i 1_A$, the integral is $\int s d\mu = \sum^n_{i=1} \alpha_i \mu (A_i)$.
2. Non-negative Measurable Functions: For any $f: \Omega \rightarrow [0, \infty]$, defined as the supremum of integrals of simple functions bounded by f:
   $$
   \int f d\mu = \sup \left\{\int s d\mu : 0\leq s \leq f, s \text{ is simple}\right\}
   $$
3. General Measurable Functions: For a **measurable** function $f: \Omega \rightarrow \mathbb{R}$, decompose into positive and negative parts $f = f^+ - f^-$ (where $f^+ = \max(f, 0)$ and $f^- = \max(-f, 0)$). The integral is defined as:
   $$
   \int f d \mu = \int f^+ d\mu - \int f^- d\mu
   $$

:::warning
**Edge Cases:**

- If $\int f^+ < \infty$ and $\int f^- < \infty$: $f$ is **Lebesgue Integrable** ($f \in L^1$).
- If only one of $\int f^+$ or $\int f^-$ is infinite: The integral **exists** (evaluates to $\pm\infty$), but $f$ is **not integrable**.
- If both $\int f^+ = \infty$ and $\int f^- = \infty$: The integral is **undefined**.

:::

### Expectation (Real-valued)

For a real-valued random variable $X: \Omega \to \mathbb{R}$, the expectation is the standard Lebesgue integral with respect to the probability measure $P$:

$$
\mathbb{E}[X] = \int_\Omega X(\omega) \, dP(\omega)
$$

If $X$ has a density $f_X$ with respect to Lebesgue measure $\lambda$, this becomes:

$$
\mathbb{E}[X] = \int_{\mathbb{R}} x \cdot f_X(x) \, d\lambda(x)
$$

### Moments and Variance

For a real-valued random variable $X$ and $k \in \mathbb{N}$:

- The **$k$-th moment** (about the origin) is $\mathbb{E}[X^k]$, provided $\mathbb{E}[|X|^k] < \infty$.
- The **$k$-th central moment** is $\mathbb{E}[(X - \mathbb{E}[X])^k]$.

The **variance** of $X$ is the second central moment:

$$
\text{Var}(X) = \mathbb{E}[(X - \mathbb{E}[X])^2] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
$$

The **standard deviation** is $\sigma_X = \sqrt{\text{Var}(X)}$.

*Properties:*

- $\text{Var}(X) \geq 0$
- $\text{Var}(aX + b) = a^2 \text{Var}(X)$ for constants $a, b$
- $\text{Var}(X) = 0 \iff X = \mathbb{E}[X]$ almost surely

### Law of the Unconscious Statistician (LOTUS)

Let $X: \Omega \to S$ be a random element with law $P_X$, and let $f: S \to \mathbb{R}$ be measurable. **If $f$ is non-negative, or if $\mathbb{E}[|f(X)|] < \infty$**, then the expectation of $f(X)$ can be computed either in the sample space or the target space:

$$\mathbb{E}[f(X)] = \int_\Omega f(X(\omega)) \, dP(\omega) = \int_S f(x) \, dP_X(x)$$

*Intuition:* LOTUS justifies computing expectations using the pushforward measure (distribution) rather than the underlying probability space. In ML, this is why we can compute $\mathbb{E}[f(X)]$ using the density $p_X(x)$ without knowing $\Omega$ or $P$.

### Covariance

For two random variables $X, Y$ with finite second moments, the covariance is defined as:

$$\text{Cov}(X, Y) = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])]$$

Equivalently, $\text{Cov}(X, Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$.

*Properties:*

- $\text{Cov}(X, X) = \text{Var}(X)$
- $\text{Cov}(X, Y) = \text{Cov}(Y, X)$ (symmetry)
- $\text{Cov}(aX, bY) = ab \cdot \text{Cov}(X, Y)$ (bilinearity)
- If $X$ and $Y$ are independent, $\text{Cov}(X, Y) = 0$ (but converse is not true)

### Covariance Matrix

For a random vector $\mathbf{X} \in \mathbb{R}^d$ with finite second moments, the covariance matrix $\Sigma \in \mathbb{R}^{d \times d}$ is defined as:

$$
\Sigma = \text{Cov}(\mathbf{X}) = \mathbb{E}\left[(\mathbf{X} - \mathbb{E}[\mathbf{X}])(\mathbf{X} - \mathbb{E}[\mathbf{X}])^\top\right]
$$

The $(i,j)$-th entry is $\Sigma_{ij} = \text{Cov}(X_i, X_j)$. The covariance matrix is symmetric and positive semi-definite.

### Lebesgue $p$-spaces ($\mathcal{L}^p$)

For $p \in [1, \infty)$, the space $\mathcal{L}^p(\Omega, \mu)$ consists of all measurable functions $f: \Omega \to \mathbb{R}$ such that the norm is finite:

$$
\lVert f \rVert_p \triangleq \left( \int_\Omega |f(\omega)|^p \, d\mu(\omega) \right)^{1/p} < \infty
$$

The space $L^p$ is the quotient space of $\mathcal{L}^p$ modulo the equivalence relation $f \sim g \iff f=g$ $\mu$-almost everywhere. $L^p$ is a Banach space under the norm $\lVert \cdot \rVert_p$.

*Generalization:* For vector-valued functions, the Bochner space $\mathcal{L}^p(\Omega, \mu; \mathbb{V})$ consists of strongly measurable functions $f: \Omega \to \mathbb{V}$ where $\lVert f \rVert_p = \left( \int_\Omega \lVert f(\omega) \rVert^p \, d\mu(\omega) \right)^{1/p} < \infty$.

### Bochner Integrability (Preview)

For vector-valued functions taking values in a Banach space, the Bochner integral extends the Lebesgue integral. The formal definition requires concepts from Functional Analysis (Banach spaces, strong measurability) and is deferred to the *Functional Analysis and Bochner Integration* section below.

*Intuition:* A function $f: \Omega \to \mathbb{V}$ is Bochner integrable if it is the limit of simple Banach-valued functions and its norm is Lebesgue integrable: $\int_\Omega \lVert f(\omega) \rVert \, d\mu(\omega) < \infty$.

:::info
**Bochner's Theorem:** A strongly measurable function $X: \Omega \to \mathbb{V}$ is Bochner integrable *if and only if* its norm is Lebesgue integrable:
$$\int_\Omega \lVert X(\omega) \rVert \, d\mu(\omega) < \infty$$
This is the characteristic criterion for Bochner integrability and is formally stated in the *Bochner Integral* definition below.
:::

### Fubini-Tonelli Theorem

Let $(\Omega_1, \mathcal{F}_1, \mu_1)$ and $(\Omega_2, \mathcal{F}_2, \mu_2)$ be $\sigma$-finite measure spaces. The Fubini-Tonelli Theorem states:

1. Tonelli (non-negative measurable functions): If $f: \Omega_1 \times \Omega_2 \to [0,\infty]$ is measurable, then:
   $$
   \int_{\Omega_1 \times \Omega_2} f d(\mu_1 \otimes \mu_2) = \int_{\Omega_1} \left(\int_{\Omega_2} f(x,y) d\mu_2 (y) \right)d\mu_1(x)
   $$
2. Fubini (integrable functions): If $f$ is integrable ($f \in L^1 (\mu_1 \otimes \mu_2)$), then the order of integration can be swapped, and the equality holds for the signed integral.

## Inequalities

### Convex Function

A function $f: V \to \mathbb{R}$ on a vector space is convex if $\forall x, y \in V, \lambda \in [0,1]$:
$$f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)$$
(Crucial for Jensen's inequality and Optimization).

### Jensen's Inequality

Given a probability space $(\Omega, \mathcal{F}, P)$, a real-valued random variable $X: \Omega \to \mathbb{R}$ and a convex function $\varphi: \mathbb{R} \to \mathbb{R}$:

$$
\varphi(\mathbb{E}[X]) \leq \mathbb{E}[\varphi(X)]
$$

### Markov's Inequality

Let $X$ be a non-negative random variable and $a > 0$. Then:
$$
P(X \geq a) \leq \frac{\mathbb{E}[X]}{a}
$$

### Chebyshev's Inequality

Let $X$ be a random variable with finite mean $\mu$ and finite non-zero variance $\sigma^2$. For any $k > 0$:
$$
P(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2}
$$

## Functional Analysis and Bochner Integration

### Normed Vector Space

A Normed Vector Space is a pair $(V, \lVert \cdot \rVert)$ where $V$ is a vector space over field $\mathbb{K}$ (usually $\mathbb{R}$ or $\mathbb{C}$) and $\lVert \cdot \rVert: V \to [0, \infty)$ is a norm satisfying:

1. Positive Definiteness: $\lVert x \rVert = 0 \iff x = 0_V$.
2. Absolute Homogeneity: $\lVert \alpha x \rVert = |\alpha| \lVert x \rVert$ for all scalars $\alpha \in \mathbb{K}$.
3. Triangle Inequality: $\lVert x + y \rVert \leq \lVert x \rVert + \lVert y \rVert$.

*Note:* Every normed space induces a metric $d(x,y) = \lVert x - y \rVert$.

### Euclidean Norm

On $\mathbb{R}^d$, the **Euclidean norm** (or $\ell^2$-norm) is defined as:

$$
\lVert x \rVert_2 = \sqrt{\sum_{i=1}^d x_i^2} = \sqrt{\langle x, x \rangle}
$$

where $\langle \cdot, \cdot \rangle$ denotes the standard dot product. The Euclidean norm is the norm induced by the standard inner product on $\mathbb{R}^d$.

*Note:* While general norms (defined above) apply to any normed vector space, the Euclidean norm is specific to finite-dimensional real spaces equipped with the standard inner product. All norms on $\mathbb{R}^d$ are equivalent, but the Euclidean norm has special properties: it is strictly convex, rotation-invariant, and induces the familiar Euclidean geometry.

### Cauchy Sequence

A sequence $(x_n)_{n \in \mathbb{N}}$ in a normed vector space $(V, \lVert \cdot \rVert)$ is a Cauchy sequence if $\forall \epsilon>0, \exists N \in \mathbb{N}$ such that $\forall n, m \geq N, \lVert x_n - x_m \rVert < \epsilon$.

*Note:* In a general metric space $(M, d)$, the condition is $d(x_n, x_m) < \epsilon$. Since every normed space induces a metric $d(x,y) = \lVert x - y \rVert$, the norm formulation is equivalent but more natural in the context of Banach spaces.

### Banach Space

A Banach space $(\mathbb{V}, \lVert \cdot \rVert)$ is a vector space $\mathbb{V}$ equipped with a norm $\lVert \cdot \rVert$ that is complete. "Complete" means every Cauchy sequence in $\mathbb{V}$ converges to a limit within $\mathbb{V}$.

$\mathbb{R}^d$ is a Banach space under any norm because in finite dimensions, all norms are equivalent and complete. When equipped specifically with the Euclidean inner product and its induced norm, $\mathbb{R}^d$ becomes a Hilbert space (a specialized subset of Banach spaces).

### Inner Product Space

An inner product space is a vector space $V$ over a field $\mathbb{K}$ (usually $\mathbb{R}$ or $\mathbb{C}$) equipped with an inner product $\langle \cdot, \cdot \rangle: V \times V \to \mathbb{K}$ satisfying:

1. Conjugate Symmetry: $\langle x, y \rangle = \overline{\langle y, x \rangle}$ (symmetry for real spaces: $\langle x, y \rangle = \langle y, x \rangle$).
2. Linearity in first argument: $\langle ax + by, z \rangle = a\langle x, z \rangle + b\langle y, z \rangle$.
3. Positive Definiteness: $\langle x, x \rangle \geq 0$ with equality iff $x = 0$.

By conjugate symmetry, the inner product is **conjugate linear** (anti-linear) in the second argument for complex spaces: $\langle x, ay \rangle = \bar{a}\langle x, y \rangle$.

The inner product induces a norm: $\lVert x \rVert = \sqrt{\langle x, x \rangle}$.

### Hilbert Space

A Hilbert space is a real or complex inner product space that is also a complete metric space with respect to the distance function induced by the inner product.

### Dual Space

Given a normed vector space $V$ over field $\mathbb{K}$, the **(topological) dual space** $V^*$ is the space of all continuous linear functionals $f: V \to \mathbb{K}$.

*Key Results:*

- For finite-dimensional spaces, $V^*$ is isomorphic to $V$.
- For Hilbert spaces $\mathcal{H}$, the **Riesz Representation Theorem** states that every $f \in \mathcal{H}^*$ corresponds to a unique $y \in \mathcal{H}$ such that $f(x) = \langle x, y \rangle$.
- For Banach spaces, $V^*$ may be strictly larger than $V$.

*Relevance:* The characteristic function of a Banach-space-valued random variable uses the dual space: $\varphi_X(t) = \mathbb{E}[e^{i t(X)}]$ where $t \in B^*$.

### Strongly Measurable

Given a Banach space $\mathbb{V}$, a function $X: \Omega \to \mathbb{V}$ is strongly measurable if it is the pointwise limit of a sequence of simple functions. Pettis Measurability Theorem states $X$ is strongly measurable iff $X$ is weakly measurable and has a separable range (This is essential for Polish spaces).

### Bochner Integral

This is an integral constructed from:

1. Banach valued simple function: $s: \Omega \to \mathbb{V}$, taking finite values $v_1, \dots, v_n$ on disjoint sets $A_i$:
   $$
   \int_\Omega s dP = \sum^n_{i=1} v_i P(A_i)
   $$
2. Bochner Integrable: A function $X: \Omega \to \mathbb{V}$ is Bochner integrable if there exists a sequence of simple functions $s_n$ converging to $X$ **pointwise $P$-almost everywhere** ($s_n \to X$ $P$-a.e.) such that:
   $$
   \lim_{n \to \infty} \int_\Omega \lVert X-s_n\rVert dP = 0
   $$
3. The integral: $\mathbb{E}[X] = \lim_{n \to \infty} \int_\Omega s_n dP$

### Kernel (Reproducing Kernel Hilbert Space context)

Let $\mathcal{H}$ be a Hilbert space of functions $f: \mathcal{X} \to \mathbb{R}$.
$\mathcal{H}$ is an RKHS if the **evaluation functional** $\delta_x: f \mapsto f(x)$ is a bounded (continuous) linear operator for all $x \in \mathcal{X}$.
By Riesz Representation Theorem, there exists a unique function $k(\cdot, x) \in \mathcal{H}$ such that:
$$ f(x) = \langle f, k(\cdot, x) \rangle_\mathcal{H} $$
The function $k(x, y) = \langle k(\cdot, x), k(\cdot, y) \rangle_\mathcal{H}$ is called the Reproducing Kernel.

### Positive Definite Kernel

A function $k: \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ is a **positive definite kernel** if:

1. Symmetry: $k(x, y) = k(y, x)$ for all $x, y \in \mathcal{X}$
2. Positive semi-definiteness: For any $n \in \mathbb{N}$, any $x_1, \dots, x_n \in \mathcal{X}$, and any $c_1, \dots, c_n \in \mathbb{R}$:
   $$\sum_{i=1}^n \sum_{j=1}^n c_i c_j k(x_i, x_j) \geq 0$$

### Moore-Aronszajn Theorem

For every positive definite kernel $k$, there exists a unique RKHS $\mathcal{H}_k$ for which $k$ is the reproducing kernel.

*Relevance:* This theorem guarantees that we can work with kernels directly (e.g., RBF, polynomial) without explicitly constructing the RKHS.

### Expectation (Vector-valued / Bochner)

For vector-valued random elements, expectations are typically defined over Banach spaces via the Bochner integral. Given a probability space $(\Omega,\mathcal{F}, P)$, and a Banach space $(\mathbb{V}, \lVert \cdot \rVert)$, for a random element $X: \Omega \rightarrow \mathbb{V}$, the expectation (expected value) is the Bochner integral of $X$ with respect to probability measure $P$ denoted as $\mathbb{E}[X]$. This exists if $X$ is strongly measurable and $\int_\Omega \lVert X(\omega) \rVert dP(\omega) < \infty$ and is denoted as:

$$
\mathbb{E}[X] = \int_\Omega X(\omega)dP(\omega), \quad \omega \in \Omega
$$

## Convergence

### Convergence Almost Surely

A sequence of random variables $X_n$ converges almost surely to $X$ if the event where they differ has a probability $0$:

$$
P\left(\left\{\omega \in \Omega: \lim_{n\rightarrow \infty} X_n (\omega) = X(\omega)\right\}\right)= 1
$$

### Convergence In Probability

Let $X_n$ and $X$ be random elements defined on the **same probability space** $(\Omega, \mathcal{F}, P)$, taking values in a metric space $(S, d)$. We say $X_n$ converges in probability to $X$, denoted $X_n \xrightarrow{P} X$, if for every $\epsilon > 0$:

$$
\lim_{n\rightarrow \infty} P\left(d(X_n(\omega), X(\omega)) > \epsilon \right) = 0
$$

:::warning
**Crucial Distinction from Weak Convergence:** Convergence in probability requires $X_n$ and $X$ to be defined on the **same** probability space. In contrast, weak convergence (convergence in distribution) allows random variables to exist on entirely different probability spaces as long as they map to the same target metric space.
:::

### Weak Convergence

Let $X_n, X$ be random elements in a metric space $S$. $X_n$ converges weakly to $X$, denoted $X_n \xrightarrow{d} X$, if for every bounded continuous function $f: S \rightarrow \mathbb{R}$:

$$
\lim_{n \rightarrow \infty} \mathbb{E}[f(X_n)] = \mathbb{E}[f(X)]
$$

### Monotone Convergence Theorem (MCT)

If $\{f_n\}$ is a sequence of non-negative measurable functions such that $f_n \uparrow f$ pointwise, then:
$$
\lim_{n \to \infty} \int f_n \, d\mu = \int f \, d\mu
$$
(This is a prerequisite for proving Fatou's Lemma and DCT).

### Fatou's Lemma

Let $\{f_n\}$ be a sequence of non-negative measurable functions. Then:
$$
\int \liminf_{n \to \infty} f_n \, d\mu \leq \liminf_{n \to \infty} \int f_n \, d\mu
$$

*Intuition:* Fatou's Lemma provides a **one-sided bound** for the integral of a limit. The inequality can be strict---mass can "escape to infinity" in the limit, causing the integral of the limit to be less than the limit of integrals.

*Relevance:* One of the "Big Three" convergence theorems (alongside MCT and DCT). Heavily used in risk minimization proofs, establishing lower bounds in variational inference, and proving the existence of minimizers in optimization problems.

### Dominated Convergence Theorem (DCT)

Let $(f_n)$ be a sequence of measurable functions on $(\Omega, \mathcal{F}, \mu)$ such that $f_n(\omega) \to f(\omega)$ pointwise almost everywhere.
**Theorem:** If there exists a measurable function $g \in L^1(\mu)$ (the "dominating function") such that $|f_n(\omega)| \leq g(\omega)$ almost everywhere for all $n$, then $f$ is integrable and:
$$
\lim_{n \to \infty} \int_\Omega f_n \, d\mu = \int_\Omega f \, d\mu
$$
Justifies swapping limits and expectations. Essential for proving convergence of Stochastic Gradient Descent (SGD) and differentiating under the integral sign (common in Variational Inference).

### Portmanteau Theorem

For random elements $X_n, X$ in a metric space $S$, the following are equivalent definitions of weak convergence ($X_n \xrightarrow{d} X$):

1. $\mathbb{E}[f(X_n)] \to \mathbb{E}[f(X)]$ for all bounded continuous $f$.
2. $\mathbb{E}[f(X_n)] \to \mathbb{E}[f(X)]$ for all bounded Lipschitz $f$.
3. $\limsup P(X_n \in C) \leq P(X \in C)$ for all closed sets $C$.
4. $\liminf P(X_n \in U) \geq P(X \in U)$ for all open sets $U$.
5. $P(X_n \in A) \to P(X \in A)$ for all **continuity sets** $A \in \mathcal{B}(S)$ (i.e., Borel sets where $P(X \in \partial A) = 0$, with $\partial A = \overline{A} \setminus A^\circ$ denoting the boundary).

### Characteristic Function

For a random variable $X$ taking values in an inner product space (typically $\mathbb{R}^d$ or a Hilbert space $\mathcal{H}$), the characteristic function is defined as:
$$ \varphi_X(t) = \mathbb{E}\left[ e^{i \langle t, X \rangle} \right], \quad t \in \mathcal{H} $$
where $\langle \cdot, \cdot \rangle$ denotes the inner product. For $\mathbb{R}^d$, this reduces to $\varphi_X(t) = \mathbb{E}\left[ e^{i t^\top X} \right]$ with $t \in \mathbb{R}^d$.

:::info
**Generalization to Banach Spaces:** For a random variable $X$ taking values in a Banach space $B$ (which may lack an inner product), $t$ belongs to the *dual space* $B^*$, and the characteristic function is defined as $\varphi_X(t) = \mathbb{E}\left[ e^{i t(X)} \right]$ where $t: B \to \mathbb{R}$ is a continuous linear functional. For Hilbert spaces, the Riesz Representation Theorem identifies $B^*$ with $B$, recovering the inner product formulation.
:::

### Levy's Continuity Theorem

Let $X_n$ be random variables with characteristic functions $\varphi_n(t)$.

1. If $X_n \xrightarrow{d} X$, then $\varphi_n(t) \to \varphi_X(t)$ pointwise.
2. If $\varphi_n(t)$ converges pointwise to a function $\varphi(t)$ which is continuous at $t=0$, then $\varphi$ is the characteristic function of some random variable $X$, and $X_n \xrightarrow{d} X$.

### Law of Large Numbers (LLN)

Let $X_1, X_2, \dots$ be i.i.d. random variables with $\mathbb{E}[X_1] = \mu$.

**Weak Law of Large Numbers (WLLN):** $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{P} \mu$

**Strong Law of Large Numbers (SLLN):** $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{a.s.} \mu$

:::warning
**Important Distinction for ERM:** The standard LLN only guarantees that the empirical risk of a *single, fixed* hypothesis converges to its true risk. To justify Empirical Risk Minimization (ERM) where we search for the *minimum* across a hypothesis class $\mathcal{H}$, we need the **Uniform Law of Large Numbers (ULLN)** to prevent overfitting. See Glivenko-Cantelli theorem.
:::

### Central Limit Theorem (CLT)

Let $X_1, X_2, \dots$ be i.i.d. random variables with mean $\mu$ and finite covariance $\Sigma$. Then:

$$\sqrt{n}(\bar{X}_n - \mu) \xrightarrow{d} \mathcal{N}(0, \Sigma)$$

where $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i$.

*Relevance:* Foundation of asymptotic normality, Fisher Information properties, and explains why neural network weights are often initialized with Gaussian distributions.

## Statistical Learning Theory

### Uniform Law of Large Numbers (ULLN) / Glivenko-Cantelli

Let $\mathcal{F}$ be a class of measurable functions. The empirical measure $\hat{P}_n$ satisfies the ULLN if:
$$
\sup_{f \in \mathcal{F}} \left| \int f \, d\hat{P}_n - \int f \, dP \right| \xrightarrow{a.s.} 0
$$

A function class $\mathcal{F}$ is called **Glivenko-Cantelli** if this holds. This is the actual theoretical backbone of Statistical Learning Theory and ERM, ensuring uniform convergence across the entire hypothesis class.

### True Risk and Empirical Risk

Let $\ell: \mathcal{Y} \times \mathcal{Y} \to \mathbb{R}$ be a loss function and $f: \mathcal{X} \to \mathcal{Y}$ be a hypothesis (predictor).

The **True Risk** (or expected risk) is the expected loss under the true data distribution:
$$
\mathcal{R}(f) = \mathbb{E}_{(X,Y) \sim P}[\ell(f(X), Y)]
$$

The **Empirical Risk** is the average loss over the observed training samples:
$$
\hat{\mathcal{R}}_n(f) = \frac{1}{n}\sum_{i=1}^n \ell(f(x_i), y_i)
$$

*Connection to LLN:* The Law of Large Numbers guarantees $\hat{\mathcal{R}}_n(f) \to \mathcal{R}(f)$ for a *fixed* $f$. The ULLN extends this to uniform convergence over a hypothesis class $\mathcal{H}$.

### Concentration Inequalities

**Hoeffding's Inequality:** Let $X_1, \dots, X_n$ be independent random variables bounded such that $a_i \leq X_i \leq b_i$. Then for any $t > 0$:
$$
P\left( \left| \frac{1}{n}\sum_{i=1}^n X_i - \mathbb{E}\left[\frac{1}{n}\sum_{i=1}^n X_i\right] \right| \geq t \right) \leq 2\exp\left(-\frac{2n^2t^2}{\sum_{i=1}^n(b_i - a_i)^2}\right)
$$

*Relevance:* Provides high-probability bounds for bounded random variables; foundational for generalization bounds in SLT.

**McDiarmid's Inequality (Bounded Differences):** Let $X_1, \dots, X_n$ be independent random variables. If $f: \mathcal{X}^n \to \mathbb{R}$ satisfies the bounded differences condition:
$$
\sup_{x_1, \dots, x_n, x_i'} |f(x_1, \dots, x_n) - f(x_1, \dots, x_{i-1}, x_i', x_{i+1}, \dots, x_n)| \leq c_i
$$
then for any $t > 0$:
$$
P(|f(X_1, \dots, X_n) - \mathbb{E}[f(X_1, \dots, X_n)]| \geq t) \leq 2\exp\left(-\frac{2t^2}{\sum_{i=1}^n c_i^2}\right)
$$

*Relevance:* Generalizes Hoeffding to functions of random variables; used to prove generalization bounds for arbitrary learning algorithms.

### Rademacher Complexity

Let $\mathcal{F}$ be a class of functions $f: \mathcal{X} \to \mathbb{R}$ and let $S = \{x_1, \dots, x_n\}$ be a fixed sample. The **empirical Rademacher complexity** of $\mathcal{F}$ with respect to $S$ is:
$$
\hat{\mathfrak{R}}_S(\mathcal{F}) = \mathbb{E}_\sigma\left[ \sup_{f \in \mathcal{F}} \frac{1}{n}\sum_{i=1}^n \sigma_i f(x_i) \right]
$$
where $\sigma_1, \dots, \sigma_n$ are i.i.d. Rademacher random variables ($P(\sigma_i = +1) = P(\sigma_i = -1) = 1/2$).

The **Rademacher complexity** of $\mathcal{F}$ is $\mathfrak{R}_n(\mathcal{F}) = \mathbb{E}_S[\hat{\mathfrak{R}}_S(\mathcal{F})]$.

*Intuition:* Measures the capacity of a function class to fit random noise. Higher complexity implies greater risk of overfitting.

*Relevance:* Provides tight generalization bounds; the complexity of neural networks can be bounded via Rademacher complexity of their weight matrices.

### VC Dimension

The **Vapnik-Chervonenkis (VC) dimension** of a hypothesis class $\mathcal{H}$ is the largest number of points that can be shattered by $\mathcal{H}$. A set $\{x_1, \dots, x_d\}$ is shattered by $\mathcal{H}$ if for every binary labeling $(y_1, \dots, y_d) \in \{0, 1\}^d$, there exists $h \in \mathcal{H}$ such that $h(x_i) = y_i$ for all $i$.

*Relevance:* A finite VC dimension implies the class is Glivenko-Cantelli. VC theory provides the classical foundation for structural risk minimization.

## Stochastic Processes and Conditioning

### Stochastic Process

A **stochastic process** is a collection of random elements $\{X_t\}_{t \in T}$ indexed by a set $T$ (typically time, discrete or continuous), all defined on the same probability space $(\Omega, \mathcal{F}, P)$ and taking values in a measurable space $(S, \mathcal{S})$.

### Wiener Process (Brownian Motion)

A stochastic process $\{W_t\}_{t \geq 0}$ is a **Wiener process** (or standard Brownian motion) if:

1. $W_0 = 0$ almost surely
2. $W_t$ has independent increments: $W_t - W_s \perp W_u - W_v$ for disjoint intervals
3. $W_t - W_s \sim \mathcal{N}(0, t-s)$ for $t > s$
4. $t \mapsto W_t$ is continuous almost surely

*Relevance:* The foundational continuous-time martingale; essential for diffusion models.

### Stochastic Differential Equation (SDE)

An SDE describes the evolution of a stochastic process:
$$dX_t = f(X_t, t)dt + g(X_t, t)dW_t$$

where $f$ is the drift function, $g$ is the diffusion coefficient, and $W_t$ is a Wiener process.

*Relevance:* Score-based generative models and diffusion models are formulated as SDEs, where the Stein score $\nabla_x \log p_t(x)$ appears in the reverse-time SDE.

### Filtration

A **filtration** $\{\mathcal{F}_t\}_{t \geq 0}$ is an increasing family of $\sigma$-algebras indexed by time (discrete or continuous):
$$
\mathcal{F}_s \subseteq \mathcal{F}_t \subseteq \mathcal{F} \quad \text{for all } s \leq t
$$

*Intuition:* $\mathcal{F}_t$ represents the information available at time $t$. As time progresses, we gain more information (the $\sigma$-algebra grows).

*Relevance:* Essential for Diffusion Models (SDEs), Reinforcement Learning (partially observable Markov decision processes), and sequential decision making.

### Adapted Process

A stochastic process $\{X_t\}_{t \geq 0}$ is **adapted** to a filtration $\{\mathcal{F}_t\}$ if $X_t$ is $\mathcal{F}_t$-measurable for every $t$. Equivalently, the value of $X_t$ is fully determined by the information available at time $t$.

*Intuition:* An adapted process cannot "see into the future." At each time $t$, $X_t$ depends only on information in $\mathcal{F}_t$.

### Martingale

A stochastic process $\{X_t\}_{t \geq 0}$ adapted to a filtration $\{\mathcal{F}_t\}$ is a **martingale** if:
$$
\mathbb{E}[X_t | \mathcal{F}_s] = X_s \quad \text{for all } s \leq t
$$

*Variants:*

- **Sub-martingale:** $\mathbb{E}[X_t | \mathcal{F}_s] \geq X_s$
- **Super-martingale:** $\mathbb{E}[X_t | \mathcal{F}_s] \leq X_s$

*Relevance:* Martingales appear in the analysis of stochastic gradient descent, diffusion processes, and optimal stopping problems.

### Markov/Transition Kernel

Let $(S, \mathcal{S})$ and $(T, \mathcal{T})$ be measurable spaces. A function $\kappa: S \times \mathcal{T} \to [0, 1]$ is a Markov Kernel (or probability kernel) if:

1. For every fixed $B \in \mathcal{T}$, the map $s \mapsto \kappa(s, B)$ is $\mathcal{S}$-measurable.
2. For every fixed $s \in S$, the map $B \mapsto \kappa(s, B)$ is a probability measure on $(T, \mathcal{T})$.

### Markov Chain

A sequence of random variables $X_0, X_1, X_2, \dots$ taking values in a measurable space $(S, \mathcal{S})$ is a **Markov Chain** if it satisfies the Markov property:
$$
P(X_{n+1} \in B | X_0, \dots, X_n) = P(X_{n+1} \in B | X_n) = \kappa(X_n, B)
$$
where $\kappa$ is the transition kernel.

### Stationary Distribution

A probability measure $\pi$ on $(S, \mathcal{S})$ is a **stationary distribution** (or invariant measure) for a Markov kernel $\kappa$ if:
$$
\pi(B) = \int_S \kappa(x, B) \, d\pi(x) \quad \forall B \in \mathcal{S}
$$
*Relevance:* Required for MCMC algorithms. The chain converges to $\pi$ under appropriate conditions.

### Regular Conditional Probability

Let $(\Omega, \mathcal{F}, P)$ be a probability space and let $\mathcal{G} \subseteq \mathcal{F}$ be a sub-$\sigma$-algebra.
A **Regular Conditional Probability** (RCP) is a kernel $\kappa: \Omega \times \mathcal{F} \to [0, 1]$ such that:

1. For $P$-almost all $\omega$, $\kappa(\omega, \cdot)$ is a probability measure on $(\Omega, \mathcal{F})$.
2. For every $A \in \mathcal{F}$, $\omega \mapsto \kappa(\omega, A)$ is $\mathcal{G}$-measurable and is a version of the conditional expectation: $\kappa(\cdot, A) = \mathbb{E}[1_A | \mathcal{G}]$.
3. **Disintegration Property:** For any $A \in \mathcal{F}$ and $G \in \mathcal{G}$:
    $$ P(A \cap G) = \int_G \kappa(\omega, A) \, dP(\omega) $$

*Critical Note:* An RCP evaluates events in the **source** $\sigma$-algebra $\mathcal{F}$. The existence of RCP is guaranteed when $(\Omega, \mathcal{F})$ is a Standard Borel space.

### Disintegration Theorem

Let $(S, \mathcal{B}(S))$ and $(T, \mathcal{B}(T))$ be Standard Borel spaces. Let $\mu$ be a probability measure on the product space $S \times T$, and let $\nu$ be the marginal distribution of $\mu$ on $S$ (defined by $\nu(A) = \mu(A \times T)$).

There exists a family of probability measures $\{\mu_x\}_{x \in S}$ on $T$, unique $\nu$-almost everywhere, such that for every bounded measurable function $f: S \times T \to \mathbb{R}$:

$$
\int_{S \times T} f(x, y) \, d\mu(x, y) = \int_S \left( \int_T f(x, y) \, d\mu_x(y) \right) d\nu(x)
$$

The measures $\mu_x$ are called the conditional probabilities of $Y$ given $X=x$, formally justifying the notation $P(Y \in B | X=x)$.

### Regular Conditional Distribution

Instead of asking "What is the expected value of $X$ given $\mathcal{G}$?", we ask "What is the full distribution of $X$ given $\mathcal{G}$?". Let $(\Omega, \mathcal{F}, P)$ be a probability space, let $(S, \mathcal{S})$ be a measurable space (the target space of our random element), and let $X: \Omega \to S$ be a Random Element. Let $\mathcal{G} \subseteq \mathcal{F}$ be a sub-$\sigma$-algebra.

A Regular Conditional Distribution (or Conditional Kernel) of $X$ given $\mathcal{G}$ is a function $\kappa: \Omega \times \mathcal{S} \to [0, 1]$ such that:

1. Measure: For almost every fixed $\omega \in \Omega$, the map $B \mapsto \kappa(\omega, B)$ is a probability measure on $(S, \mathcal{S})$.
2. Measurability: For every fixed set $B \in \mathcal{S}$, the map $\omega \mapsto \kappa(\omega, B)$ is $\mathcal{G}$-measurable.
3. Consistency: For every $B \in \mathcal{S}$ and $G \in \mathcal{G}$:
   $$
   \int_G \kappa(\omega, B) \, dP(\omega) = P(X^{-1}(B) \cap G)
   $$

**Key Distinction from Regular Conditional Probability:**

- **Regular Conditional Probability** evaluates the probability of target sets given a sub-$\sigma$-algebra $\mathcal{G}$.
- **Regular Conditional Distribution** is specifically the conditional law of a Random Element $X$ given $\mathcal{G}$.

### Conditional Expectation

Let $(\Omega, \mathcal{F}, P)$ be a probability space and let $X \in L^1(\Omega, \mathcal{F}, P)$ be an integrable random variable. Let $\mathcal{G} \subseteq \mathcal{F}$ be a sub-$\sigma$-algebra. The conditional expectation of $X$ given $\mathcal{G}$, denoted $\mathbb{E}[X|\mathcal{G}]$, is the unique (up to almost sure equivalence) random variable $Z$ satisfying:

1. Measurability: $Z$ is $\mathcal{G}$-measurable.
2. Integral Invariance: For all $G \in \mathcal{G}$:
    $$
    \int_G Z \, dP = \int_G X \, dP
    $$

Note that $\mathbb{E}[X|\mathcal{G}]$ is the orthogonal projection of $X$ onto the subspace of $\mathcal{G}$-measurable functions if $X \in L^2$.

If regular conditional distribution $\kappa$ exists, then:

$$
\mathbb{E}[X|\mathcal{G}](\omega) = \int_S s \, \kappa(\omega, ds)
$$

### Conditional Fréchet Mean

If $S$ is a metric space $(S, d)$, the Conditional Fréchet Mean is the minimizer of the conditional Fréchet variance.
Given the Regular Conditional Distribution $\kappa(\omega, \cdot)$ defined above:

$$
\mu_{\mathcal{G}}(\omega) = \underset{y \in S}{\arg\min} \int_S d^2(y, s) \, \kappa(\omega, ds)
$$

:::warning
**Rigor Note:** For the integral $\int_S s \, \kappa(\omega, ds)$ in the context of conditional expectation (and for the Fréchet mean to be well-defined via Bochner integration), $S$ cannot be an arbitrary metric space. It must be a subset of a vector space (specifically, a Banach space) where addition and scalar multiplication are defined, enabling the Bochner integral. For general metric spaces, the Fréchet mean is defined via the minimization formulation above, which does not require linear structure.
:::

## Statistical Models and Information Geometry

### Parameter Space

A parameter space is simply a measurable space $(\Theta, \mathcal{A})$.

### Parametrization

A parametrization $\psi$ is a mapping $\psi: \Theta \rightarrow \mathcal{M}_1(S, \mathcal{B}(S))$ that assigns a probability measure on each parameter $\Theta$. We denote the measure $P_\theta = \psi(\theta)$.

### Parameter

A parameter is an element $\theta \in \Theta$ used as an argument for $\psi$.

### Statistical Model

A statistical model is the image of parametrization: $\mathcal{Q}= \{P_\theta \in \mathcal{M}_1(S, \mathcal{B}(S)) : P_\theta = \psi(\theta), \theta \in \Theta\}$

### Exponential Family

A parametric family of distributions $\{P_\theta : \theta \in \Theta\}$ with densities $p(x|\theta)$ belongs to the **exponential family** if it can be written in the form:

$$
p(x|\theta) = h(x) \exp\left(\langle \eta(\theta), T(x) \rangle - A(\theta)\right)
$$

where:

- $h(x) \geq 0$ is the **base measure** (does not depend on $\theta$)
- $\eta(\theta) \in \mathbb{R}^d$ is the **natural parameter**
- $T(x) \in \mathbb{R}^d$ is the **sufficient statistic**
- $A(\theta) = \log \int h(x) \exp(\langle \eta(\theta), T(x) \rangle) \, dx$ is the **log-partition function** (normalization constant)

*Canonical Form:* When $\eta(\theta) = \theta$, the family is in canonical form: $p(x|\eta) = h(x) \exp(\langle \eta, T(x) \rangle - A(\eta))$.

*Examples:* Gaussian, Bernoulli, Poisson, Gamma, Beta, Dirichlet, Categorical (with fixed support size), Wishart.

*Relevance:* Exponential families have closed-form conjugate priors, tractable M-projections, and Fisher Information equal to the Hessian of $A(\theta)$. They are foundational in Variational Inference, Generalized Linear Models, and natural gradient methods.

### Dominated Statistical Model

The model $\mathcal{Q}_\theta : \theta \in \Theta$ is called dominated if there exists a $\sigma$-finite reference measure $\lambda$ such that $\forall \theta \in \Theta, P_\theta \ll \lambda$.

### Likelihood Function

Given a dominated model with reference measure $\lambda$, the density $f_\theta = \frac{dP_\theta}{d\lambda}$ exists. For a fixed observation $s \in S$, the likelihood function $L_s: \Theta \rightarrow [0, \infty)$ is defined by:

$$
\begin{equation}
 L_s(\theta) = f_\theta(s), \quad \text{where } f_\theta = \frac{dP_\theta}{d\lambda}
\end{equation}
$$

### Bayes' Theorem (Measure-Theoretic)

Let $(\Theta, \mathcal{A})$ be a parameter space equipped with a prior probability measure $\Pi$. Let $P_\theta$ be the likelihood (data distribution) for each $\theta \in \Theta$. Given an observation $x$, the **posterior distribution** $\Pi(\cdot | x)$ is defined via the Radon-Nikodym derivative:

$$
\frac{d\Pi(\cdot | x)}{d\Pi}(\theta) = \frac{p(x | \theta)}{\int_\Theta p(x | \theta') \, d\Pi(\theta')}
$$

Equivalently, in measure notation:
$$
\Pi(d\theta | x) = \frac{p(x | \theta)}{\int_\Theta p(x | \theta') \, \Pi(d\theta')} \Pi(d\theta)
$$

where $p(x | \theta) = \frac{dP_\theta}{d\lambda}(x)$ is the likelihood density with respect to a reference measure $\lambda$.

*Requirements:* The denominator (marginal likelihood / evidence) must be finite and non-zero for the posterior to be well-defined.

*Relevance:* This is the rigorous foundation of Bayesian ML, Variational Autoencoders (VAEs), and posterior inference. The measure-theoretic formulation handles both continuous and discrete parameter spaces uniformly.

### Score Function (Fisher Score)

Let $\{P_\theta : \theta \in \Theta\}$ be a parametric model with densities $f(x; \theta)$. The **Fisher score function** is the gradient of the log-likelihood with respect to parameters:
$$
s(x; \theta) = \nabla_\theta \log f(x; \theta)
$$

*Properties:*

- $\mathbb{E}_{x \sim P_\theta}[s(x; \theta)] = 0$ (under regularity conditions)
- $\text{Cov}(s(x; \theta)) = \mathcal{I}(\theta)$ (Fisher Information Matrix)

*Relevance:* Essential for the REINFORCE algorithm in Reinforcement Learning and Fisher Information analysis.

### Stein Score (Data Score)

In modern ML, particularly Score-Based Generative Models and Diffusion Models, the "score" refers to the **Stein score** (or data score):
$$
s(x) = \nabla_x \log p(x)
$$

This is the gradient of the log-density with respect to the **data** $x$, not the parameters $\theta$. The Stein score points in the direction of steepest increase in log-probability within the data space.

*Key Distinction:*

- **Fisher Score** $\nabla_\theta \log p(x; \theta)$: Gradient in parameter space; used in classical statistics and RL.
- **Stein Score** $\nabla_x \log p(x)$: Gradient in data space; used in Langevin Dynamics, Score Matching, and Diffusion Models.

### Total Variation Distance

For two probability measures $P$ and $Q$ on $(\Omega, \mathcal{F})$:
$$
\delta(P, Q) = \sup_{A \in \mathcal{F}} |P(A) - Q(A)|
$$
If measures possess densities $p$ and $q$ w.r.t a reference measure $\mu$:
$$
\delta(P, Q) = \frac{1}{2} \int_\Omega |p(x) - q(x)| \, d\mu(x)
$$

### Fisher Information (Matrix)

Let $\{P_\theta : \theta \in \Theta\}$ be a parametric model with densities $f(x; \theta)$. Under regularity conditions (twice differentiability), the Fisher Information Matrix $\mathcal{I}(\theta)$ is:
$$
\mathcal{I}(\theta)_{ij} = \mathbb{E}_{x \sim P_\theta} \left[ \frac{\partial}{\partial \theta_i} \log f(x; \theta) \cdot \frac{\partial}{\partial \theta_j} \log f(x; \theta) \right]
$$
It represents the curvature of the KL-divergence near $\theta$.

### Kullback-Leibler Divergence

Let $P$ and $Q$ be two probability measures on $(S, \mathcal{F})$.
If $P \ll Q$, the Kullback-Leibler Divergence is defined as the expectation of the log-likelihood ratio with respect to $P$:
$$
D_{KL}(P \| Q) = \int_S \log \left( \frac{dP}{dQ} \right) \, dP = \mathbb{E}_{x \sim P} \left[ \log \frac{dP}{dQ}(x) \right]
$$
If $P \not\ll Q$, then $D_{KL}(P \| Q) = +\infty$.

:::warning
**KL Divergence is NOT a Metric:**

Despite its widespread use, KL divergence fails to satisfy the axioms of a metric:

1. **Asymmetry:** $D_{KL}(P \| Q) \neq D_{KL}(Q \| P)$ in general. This is why I-Projection and M-Projection yield different results.
2. **Triangle inequality violation:** $D_{KL}(P \| R) \not\leq D_{KL}(P \| Q) + D_{KL}(Q \| R)$ in general.

This motivates the use of alternative divergences that **are** proper metrics:

- **Wasserstein Metric:** A true metric with meaningful gradients even for disjoint supports.
- **Jensen-Shannon Divergence:** Symmetric and bounded; $\sqrt{D_{JS}}$ is a true metric.

:::

### Jensen-Shannon Divergence

The Jensen-Shannon Divergence (JSD) is a symmetrized and smoothed version of KL divergence:
$$D_{JS}(P \| Q) = \frac{1}{2} D_{KL}(P \| M) + \frac{1}{2} D_{KL}(Q \| M)$$
where $M = \frac{1}{2}(P + Q)$.

*Properties:*

- Symmetric: $D_{JS}(P \| Q) = D_{JS}(Q \| P)$
- Bounded: $0 \leq D_{JS}(P \| Q) \leq \log 2$
- $D_{JS}(P \| Q) = 0 \iff P = Q$

*Relevance:* The original GAN objective minimizes JSD between the data distribution and generated distribution.

### Chain Rule for KL Divergence

Let $X, Y$ be random variables with joint distributions $P_{XY}$ and $Q_{XY}$. Assuming the joint distributions factorize as $P_{XY} = P_X P_{Y|X}$ and $Q_{XY} = Q_X Q_{Y|X}$, then:
$$ D_{KL}(P_{XY} \| Q_{XY}) = D_{KL}(P_X \| Q_X) + \mathbb{E}_{x \sim P_X} [D_{KL}(P_{Y|X=x} \| Q_{Y|X=x})] $$

### Mutual Information

Let $X$ and $Y$ be random variables with joint distribution $P_{XY}$ and marginals $P_X$, $P_Y$. The **Mutual Information** $I(X; Y)$ is the KL divergence between the joint and the product of marginals:
$$
I(X; Y) = D_{KL}(P_{XY} \| P_X \otimes P_Y) = \mathbb{E}_{P_{XY}}\left[\log \frac{p(x,y)}{p(x)p(y)}\right]
$$

*Properties:*

- $I(X; Y) = I(Y; X)$ (symmetry)
- $I(X; Y) = 0 \iff X \perp Y$
- $I(X; Y) = H(X) - H(X|Y) = H(Y) - H(Y|X)$

*Relevance:* Essential for InfoGAN, Contrastive Learning (InfoNCE), and representation learning.

### Entropy (Shannon and Differential)

For a probability measure $P$ with density $p = dP/d\lambda$ with respect to a reference measure $\lambda$:

- **Differential Entropy** (continuous case): $H(P) = -\mathbb{E}_P[\log p(X)] = -\int p(x) \log p(x) \, d\lambda(x)$
- **Shannon Entropy** (discrete case): $H(P) = -\sum_{x} p(x) \log p(x)$

Note: Differential entropy can be negative (unlike Shannon entropy which is non-negative). Entropy measures the average uncertainty or "surprise" in a distribution.

### Cross-entropy

The cross-entropy $H(P, Q)$ is **fundamentally defined** as the expected negative log-likelihood under $P$:
$$
H(P, Q) \triangleq -\mathbb{E}_{x \sim P}[\log q(x)] = -\int p(x) \log q(x) \, d\lambda(x)
$$

This decomposes into:
$$
H(P, Q) = H(P) + D_{KL}(P \Vert Q)
$$

*Intuition:* $D_{KL}$ measures the "extra" bits needed to encode data from $P$ using a code optimized for $Q$, while Cross-Entropy $H(P, Q)$ measures the "total" bits. Minimizing cross-entropy is equivalent to minimizing KL divergence since $H(P)$ is constant with respect to $Q$.

:::warning
**Caveats for Continuous Distributions:**

1. This decomposition requires $P \ll Q$ (absolute continuity) and the integrals to be absolutely convergent.
2. For differential entropy (continuous case), $H(P)$ can be **negative**, unlike Shannon entropy which is always non-negative.
3. In ML, cross-entropy is typically computed directly as $-\log q(x)$ without explicitly computing $H(P)$.

:::

### Information Projection (I-Projection) vs. Moment Projection (M-Projection)

Given a distribution $P$ and a family of distributions $\mathcal{Q}$:

**M-Projection (Moment Projection / Forward KL):**
$$
Q^*_{M} = \arg\min_{Q \in \mathcal{Q}} D_{KL}(P \| Q)
$$

- **Mass-covering behavior**: Since $P$ is in the numerator, wherever $P(x) > 0$, $Q(x)$ must also be $> 0$ to avoid infinite penalty. This forces $Q$ to spread out and cover all modes of $P$.
- Used in Maximum Likelihood Estimation (MLE) and Expectation Propagation
- Tends to overestimate variance

**I-Projection (Information Projection / Reverse KL):**
$$
Q^*_{I} = \arg\min_{Q \in \mathcal{Q}} D_{KL}(Q \| P)
$$

- **Mode-seeking behavior**: Since $Q$ is in the numerator, wherever $P(x) \approx 0$, $Q(x)$ must also be $\approx 0$ to avoid penalizing the objective. This causes $Q$ to collapse onto a single mode of $P$.
- Used in Variational Inference (VI)
- Tends to underestimate variance

### Evidence Lower Bound (ELBO)

For a latent variable model with observed data $x$, latent variables $z$, and approximate posterior $q_\phi(z|x)$:
$$
\log p(x) \geq \mathbb{E}_{q_\phi(z|x)}[\log p(x,z)] - \mathbb{E}_{q_\phi(z|x)}[\log q_\phi(z|x)] = \mathcal{L}(\phi)
$$

Equivalently:
$$
\mathcal{L}(\phi) = \mathbb{E}_{q_\phi(z|x)}[\log p(x|z)] - D_{KL}(q_\phi(z|x) \| p(z))
$$

*Relevance:* Foundation of Variational Autoencoders (VAEs) and Variational Inference.

## Probability Metrics and Generative Foundations

### Reparameterization Trick

To compute gradients of expectations $\nabla_\phi \mathbb{E}_{z \sim q_\phi}[f(z)]$, we cannot directly push the gradient through the distribution. The reparameterization trick rewrites the sampling process using a deterministic transformation:

If $z = T_\phi(\epsilon)$ where $\epsilon \sim p(\epsilon)$ (a fixed, parameter-free distribution) and $T_\phi$ is a diffeomorphism, then by LOTUS:

$$\nabla_\phi \mathbb{E}_{z \sim q_\phi}[f(z)] = \nabla_\phi \mathbb{E}_{\epsilon \sim p}[f(T_\phi(\epsilon))] = \mathbb{E}_{\epsilon \sim p}[\nabla_\phi f(T_\phi(\epsilon))]$$

*Relevance:* Foundation of VAE training and differentiable Monte Carlo estimation.

### Wasserstein Metric (Kantorovich-Rubinstein)

Let $\mu, \nu \in \mathcal{P}(S)$ where $(S, d)$ is a Polish space. The $p$-Wasserstein distance is:
$$W_p(\mu, \nu) = \left( \inf_{\gamma \in \Pi(\mu, \nu)} \int_{S \times S} d(x, y)^p \, d\gamma(x, y) \right)^{1/p}$$
where $\Pi(\mu, \nu)$ is the set of joint distributions (couplings) with marginals $\mu$ and $\nu$.

*Duality (for $p=1$):* Via Kantorovich-Rubinstein, $W_1(\mu, \nu) = \sup \{ \mathbb{E}_\mu[f] - \mathbb{E}_\nu[f] : \lVert f \rVert_{\text{Lip}} \leq 1 \}$.

*Relevance:* Foundation of Wasserstein GANs; provides meaningful gradients even when distributions have disjoint support.

### Maximum Mean Discrepancy (MMD)

A metric on the space of probability measures derived from an RKHS. Let $P, Q$ be probability measures and $\mathcal{H}$ be an RKHS with unit ball $\mathcal{F}$.
$$
\text{MMD}(P, Q) = \sup_{f \in \mathcal{F}} \left( \mathbb{E}_{x \sim P}[f(x)] - \mathbb{E}_{y \sim Q}[f(y)] \right)
$$

*Relevance:* Used in Generative Moment Matching Networks (GMMN) and as a critic in GANs. Can be computed efficiently via kernel tricks without explicit density estimation.

### Fisher Divergence

The **Fisher Divergence** (or Score Matching objective) measures the discrepancy between score functions of two distributions. For data distribution $p_{\text{data}}$ and model distribution $p_\theta$:

$$
J(\theta) = \mathbb{E}_{p_{\text{data}}}\left[ \lVert \nabla_x \log p_{\text{data}}(x) - \nabla_x \log p_\theta(x) \rVert^2 \right]
$$

*Key Property:* Minimizing the Fisher divergence is equivalent to Score Matching. Unlike KL divergence, it does not require computing the normalizing constant of $p_\theta$.

*Relevance:* Foundation of Score-Based Generative Modeling and denoising score matching.

### Pinsker's Inequality

Pinsker's Inequality bounds the Total Variation distance using KL divergence:

$$
\delta(P, Q) \leq \sqrt{\frac{1}{2} D_{KL}(P \| Q)}
$$

where $\delta(P, Q)$ is the Total Variation distance and $D_{KL}(P \| Q)$ is the KL divergence.

*Relevance:* Provides a bridge between information-theoretic bounds and probabilistic bounds. Frequently used in generative modeling proofs to convert KL bounds into TV bounds.

### Tightness and Prokhorov's Theorem

**Tightness:** A family of probability measures $\mathcal{P}$ on a Polish space $(S, d)$ is **tight** if for every $\epsilon > 0$, there exists a compact set $K_\epsilon \subseteq S$ such that:
$$
\sup_{\mu \in \mathcal{P}} \mu(S \setminus K_\epsilon) < \epsilon
$$

*Intuition:* Tightness prevents probability mass from "escaping to infinity."

**Prokhorov's Theorem:** Let $(S, d)$ be a Polish space. A family of probability measures $\mathcal{P}$ is **relatively compact** (every sequence has a weakly convergent subsequence) if and only if $\mathcal{P}$ is tight.

*Relevance:* Provides the theoretical foundation for why Wasserstein spaces are well-behaved. Essential for proving existence of limiting distributions in generative model training.

### Langevin Dynamics

Langevin Dynamics is an SDE that samples from a target distribution $p(x)$ using its Stein score:

$$
dX_t = \nabla_x \log p(X_t) \, dt + \sqrt{2} \, dW_t
$$

where $W_t$ is a Wiener process and $\nabla_x \log p(x)$ is the Stein score.

*Discretization (Unadjusted Langevin Algorithm):*
$$
x_{t+1} = x_t + \eta \nabla_x \log p(x_t) + \sqrt{2\eta} \, \epsilon_t, \quad \epsilon_t \sim \mathcal{N}(0, I)
$$

*Relevance:* Under appropriate conditions, the stationary distribution of Langevin Dynamics is exactly $p(x)$. This is the foundation of Score-Based Generative Models: the reverse-time SDE in diffusion models uses the Stein score to guide sampling.

## Philosophy

### Probability

All mathematical axioms above are accepted by all schools, but there is a divide on the interpretation of probability measure $P$ and the nature of parameter $\theta$. This divide is based on the Frequentist and Bayesian interpretations.

#### Frequentist

Frequentist view probability as an expected fraction of frequency of event occurring as the number of repetition approaches infinity. This leads to the following viewpoints:

The measure $P(A)$ represent the limit of relative frequency of event $A$ in an infinite sequence of identical, independent repetition of the experiment.

The parameter $\theta$ is fixed, non-random element of the set $\Theta$, an unknown constant of nature. A probability measure on $\Theta$ will therefore be undefined.

#### Bayesian

Bayesian interpretation views probability as the degree of belief of an event occurring. With the viewpoints:

The measure $P(A)$ represent a degree of belief of event $A$ given the current state of information.

The parameter $\theta$ itself is treated as a random element mapping from an underlying probability space $\Omega$ to the parameter space $\Theta$.

:::info
In practice, we often work directly with a prior probability measure defined on the parameter space $\Theta$
:::

### Uncertainty

#### Epistemic/Model Uncertainty

The uncertainty led by ignorance of underlying causes or mechanism generating data.

#### Aleatoric/Data Uncertainty

Intrinsic variability that cannot be reduced even with a larger data set. For example, a coin toss has a probability of $p = 0.5$, there is no epistemic uncertainty here but the outcome is unpredictable because of data uncertainty.

### Manifold Hypothesis

Let $\mathcal{X} = \mathbb{R}^d$ be the ambient data space. The Manifold Hypothesis states that the probability mass of the data distribution $P_{data}$ is supported on (or concentrated near) a topological manifold $\mathcal{M} \subseteq \mathbb{R}^d$ where $\dim(\mathcal{M}) \ll d$.
Formally, $\text{supp}(P_{data}) \subseteq \mathcal{M}$.
Explains why high-dimensional generative models (GANs, VAEs) work: they map a low-dimensional latent space $\mathcal{Z} \subseteq \mathbb{R}^k$ to $\mathcal{M}$.
