---
title: Definitions
description:
  'Definitions — Sets and Relations; Power Set; Disjoint Sets; Equivalence Relation with worked
  examples and exam-style questions.'
date: 2026-01-15T09:31:35.184Z
tags:
  - ML
categories:
  - ML
slug: definitions
---

To understand the basis for probability theory, it is important to fully understand every term used.
Here are the definitions for the terms we will be using, refer back to this page if there are any
confusion on terminology.

## Sets and Relations

### Power Set

A power set $\mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆(S)$ of set $S$ is the set of all subsets of $S$. For example, let
$S = \{1,2,3\}$The power set of $S$ will be
$\mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆(S) = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\}, \{1,2,3\}\}$

### Disjoint Sets

A collection of sets $\{A_i\}_◆LB◆i \in I◆RB◆$ is pairwise disjoint if $A_i \cap A_j = \emptyset$ for all
$i \neq j$.

### Equivalence Relation

A binary relation $\sim$ on a set $S$ is an equivalence relation if it satisfies:

1. Reflexivity: $x \sim x$.
2. Symmetry: $x \sim y \implies y \sim x$.
3. Transitivity: $x \sim y \land y \sim z \implies x \sim z$.

The set of all equivalence classes is denoted $S / \sim$ (the quotient set).

### Quotient Space

Given a set $S$ and an equivalence relation $\sim$The quotient space $S / \sim$ is the set of
equivalence classes $\{ [x] : x \in S \}$Where $[x] = \{ y \in S : x \sim y \}$.

_Context in Probability:_ $L^p$ is the quotient space of $\mathcal◆LB◆◆LB◆'◆RB◆L◆LB◆◆RB◆'◆RB◆^p$ (the space of
measurable functions with finite $p$-**semi-norm**) under the equivalence relation
$f \sim g \iff f=g$ $\mu$-a.e. Formally, $L^p = \mathcal◆LB◆◆LB◆'◆RB◆L◆LB◆◆RB◆'◆RB◆^p / \sim$.

:::warning **Semi-norm vs. Norm:** The functional $\lVert \cdot \rVert_p$ is only a **semi-norm** on
$\mathcal◆LB◆◆LB◆'◆RB◆L◆LB◆◆RB◆'◆RB◆^p$ because $\lVert f \rVert_p = 0 \implies f = 0$ almost everywhere, not
everywhere. It becomes a true **norm** only after quotienting by the equivalence relation to obtain
$L^p$. This distinction ensures $L^p$ is a Banach space by identifying functions that differ only on
null sets. :::

## Topology and Metric Spaces

### Topology

A topology $\tau$ on a set $S$ is a **collection of subsets of $S$** (i.e.,
$\tau \subseteq \mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆(S)$), called open sets, satisfying:

1. Triviality: $\emptyset, S \in \tau$

2. Finite intersection:
   $U_1, \dots, U_n \in \tau \implies \bigcap^n_◆LB◆i=1◆RB◆ U_i \in \tau, n\in \mathbb◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆$

3. Arbitrary union: If $\left\{U_\alpha\right\}_◆LB◆\alpha \in A◆RB◆$ is a collection of sets such that
   $U_\alpha \in \tau$ for all $\alpha \in A$Then $\bigcup_◆LB◆\alpha \in A◆RB◆ U_\alpha \in \tau$.

### Topological Space

A topological space is a pair $(S, \tau)$ where $S$ is a set and $\tau$ is a topology on $S$. The
elements of $\tau$ are definitionally called open sets.

### Metric Space

A Metric space is a set $M$ with a distance function $d: M \times M \to [0, \infty)$ satisfying:

1. Non-negativity: $d(x,y) \geq 0$
2. Identity of Indiscernibles: $d(x,y)=0 \iff x=y$
3. Symmetry: $d(x,y) = d(y,x)$
4. Triangle inequality: $d(x, z) \leq d(x,y)+d(y,z)$

### Neighborhood

A set $N \subseteq S$ is a neighborhood of a point $x \in S$ if there exists an open set
$U \in \tau$ such that $x \in U \subseteq N$. An Open Neighborhood is a neighborhood that is itself
an open set.

### Closed Set

A set $C \subseteq S$ is closed if its complement $C^c = S \setminus C$ is open. In a topological
space, closed sets satisfy:

1. $\emptyset$ and $S$ are closed.
2. Finite unions of closed sets are closed.
3. Arbitrary intersections of closed sets are closed.

### Closure and Interior

Given a set $A \subseteq S$ in a topological space:

- The **closure** $\overline◆LB◆A◆RB◆$ is the smallest closed set containing $A$ (intersection of all
  closed supersets).
- The **interior** $A^\circ$ is the largest open set contained in $A$ (union of all open subsets).
- The **boundary** $\partial A = \overline◆LB◆A◆RB◆ \setminus A^\circ$.

### Lipschitz Continuity

Given metric spaces $(X, d_X)$ and $(Y, d_Y)$A function $f: X \to Y$ is $K$-Lipschitz (with
$K \geq 0$) if: $$ d_Y(f(x_1), f(x_2)) \leq K \cdot d_X(x_1, x_2) \quad \forall x_1, x_2 \in X $$

The **Lipschitz constant** (or Lipschitz semi-norm) is defined as:
$$\lVert f \rVert_◆LB◆\mathrm◆LB◆Lip◆RB◆◆LB◆◆RB◆◆RB◆ = \sup_◆LB◆x \neq y◆RB◆ \frac◆LB◆d_Y(f(x), f(y))◆RB◆◆LB◆d_X(x, y)◆RB◆$$

The set of 1-Lipschitz functions consists of all functions satisfying
$\lVert f \rVert_◆LB◆\mathrm◆LB◆Lip◆RB◆◆LB◆◆RB◆◆RB◆ \leq 1$.

In Wasserstein GANs, the discriminator (critic) must be 1-Lipschitz. This is often enforced via
Gradient Penalty or Spectral Normalization.

### Polish Space

A topological space $(S, \tau)$ is a Polish Space if it is:

1. Separable: Contains a countable dense subset.
2. Completely Metrizable: There exists a metric $d$ inducing $\tau$ such that $(S, d)$ is a complete
   metric space (every Cauchy sequence converges).

_Relevance to ML:_ $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^n$Infinite sequences $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^\infty$And space of
continuous functions $C[0,1]$ are Polish. This property ensures regular conditional probabilities
exist.

### Borel $\sigma$-algebra

Let $(S, \tau)$ be a topological space, the Borel $\sigma$-algebra, denoted $\mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S)$Is
the $\sigma$-algebra generated by topology $\tau$:

$$
\begin◆LB◆equation◆RB◆
 \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S) = \sigma (\tau)
\end◆LB◆equation◆RB◆
$$

### Borel Space

The pair $(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S))$ is called a Borel space.

### Standard Borel Space

A measurable space $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$ is a standard Borel space if there exists a
bimeasurable bijection (a bijection $f$ where both $f$ and $f^◆LB◆-1◆RB◆$ are measurable) between
$(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$ and $(B, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(B))$ where $B$ is a **Borel subset** of a
Polish space $S$.

_Note:_ By Kuratowski's theorem, all uncountable standard Borel spaces are isomorphic to each other
(and to $[0,1]$ with its Borel $\sigma$-algebra). Including Borel subsets (rather than just Polish
spaces) ensures discrete/finite spaces and intervals like $(0,1]$ are covered.

## Multivariate Calculus & Differential Geometry

### Diffeomorphism

A map $\phi: U \to V$ between open sets in $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ is a **$C^k$-diffeomorphism** if it
is a bijection, $k$-times continuously differentiable, and its inverse $\phi^◆LB◆-1◆RB◆$ is also $k$-times
continuously differentiable. In ML contexts, $k=1$ ($C^1$-diffeomorphism) or $k=\infty$
($C^\infty$-diffeomorphism, smooth).

_Crucial for Normalizing Flows/Change of Variables._

### Jacobian Matrix

Let $T: U \to V$ be a differentiable map between open sets in $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$. The **Jacobian
matrix** of $T$ at point $x$Denoted $\mathbf◆LB◆◆LB◆'◆RB◆J◆LB◆◆RB◆'◆RB◆_T(x)$Is the $d \times d$ matrix of all
first-order partial derivatives:

$$
\mathbf◆LB◆◆LB◆'◆RB◆J◆LB◆◆RB◆'◆RB◆_T(x) = \begin◆LB◆pmatrix◆RB◆
\frac◆LB◆\partial T_1◆RB◆◆LB◆\partial x_1◆RB◆(x) & \cdots & \frac◆LB◆\partial T_1◆RB◆◆LB◆\partial x_d◆RB◆(x) \\
\vdots & \ddots & \vdots \\
\frac◆LB◆\partial T_d◆RB◆◆LB◆\partial x_1◆RB◆(x) & \cdots & \frac◆LB◆\partial T_d◆RB◆◆LB◆\partial x_d◆RB◆(x)
\end◆LB◆pmatrix◆RB◆
$$

The **Jacobian determinant** $|\det \mathbf◆LB◆◆LB◆'◆RB◆J◆LB◆◆RB◆'◆RB◆_T(x)|$ measures the local volume distortion
factor of the transformation $T$ at point $x$.

_Relevance:_ Essential for Normalizing Flows, where the log-determinant of the Jacobian must be
tractable to compute the transformed density. Also appears in backpropagation (chain rule) and
neural network optimization.

### Change of Variables (Diffeomorphism)

Let $X$ be a random variable with PDF $p_X$ on an open set $U \subseteq \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$. Let
$T: U \to V$ be a $C^1$-diffeomorphism. Let $Y = T(X)$. The PDF of $Y$ is given by:

$$
P_Y(y) = p_X(T^◆LB◆-1◆RB◆(y)) \cdot \left| \det \mathbf◆LB◆◆LB◆'◆RB◆J◆LB◆◆RB◆'◆RB◆_◆LB◆T^◆LB◆-1◆RB◆◆RB◆(y) \right|
$$

Using the Inverse Function Theorem, this is equivalent to:

$$
P_Y(y) = p_X(T^◆LB◆-1◆RB◆(y)) \cdot | \det \mathbf◆LB◆◆LB◆'◆RB◆J◆LB◆◆RB◆'◆RB◆_T(T^◆LB◆-1◆RB◆(y)) |^◆LB◆-1◆RB◆
$$

Where $\mathbf◆LB◆◆LB◆'◆RB◆J◆LB◆◆RB◆'◆RB◆_◆LB◆T^◆LB◆-1◆RB◆◆RB◆(y)$ is the Jacobian matrix of the inverse transformation evaluated
at $y$.

## Measure Theory Foundations

### $\sigma$-algebra

Given a non-empty set $\Omega$The $\sigma$-algebra $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ is a sub-collection of the
power set $\mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆(\Omega)$ whose elements are called measurable sets, where
$\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ satisfies:

1. Triviality: $\Omega \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$
2. Closure under complement: $A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆ \implies A^c \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$
3. Closure under countable Union:
   $A_1, A_2, \dots \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆ \implies \bigcup^\infty_◆LB◆i=1◆RB◆ A_i \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$

:::info Why condition 3 is necessary: Countable unions are required to handle limits, for example,
when we analyze a sequence of events $\lim_◆LB◆n\to \infty◆RB◆ A_n$Without closure under countable unions,
probabilities cannot be assign to limits of random variables. :::

### Sub-$\sigma$-algebra

Given a measurable space $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$A collection
$\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆\subseteq \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ is a sub-$\sigma$-algebra if $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$ is
itself a $\sigma$-algebra on $\Omega$.

_Intuition:_ A sub-$\sigma$-algebra represents a coarser information structure---it contains fewer
events, corresponding to having less information about the outcome.

### Measurable Space

A measurable space is a tuple $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$ consisting of any non-empty set (sample
space) $\Omega$ and $\sigma$-algebra $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆ \subseteq \mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆(\Omega)$.

### Generated $\sigma$-algebra

Let $\mathcal◆LB◆◆LB◆'◆RB◆C◆LB◆◆RB◆'◆RB◆ \subseteq \mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆(S)$ be any collection of subsets of $S$The
$\sigma$-algebra generated by $\mathcal◆LB◆◆LB◆'◆RB◆C◆LB◆◆RB◆'◆RB◆$Denoted $\sigma(\mathcal◆LB◆◆LB◆'◆RB◆C◆LB◆◆RB◆'◆RB◆)$ is the
intersection of all $\sigma$-algebras containing $\mathcal◆LB◆◆LB◆'◆RB◆C◆LB◆◆RB◆'◆RB◆$Hence the smallest
$\sigma$-algebra containing $\mathcal◆LB◆◆LB◆'◆RB◆C◆LB◆◆RB◆'◆RB◆$. This is denoted:

$$
\begin◆LB◆equation◆RB◆
 \sigma(\mathcal◆LB◆◆LB◆'◆RB◆C◆LB◆◆RB◆'◆RB◆) = \bigcap \left\{\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆:\mathcal◆LB◆◆LB◆'◆RB◆C◆LB◆◆RB◆'◆RB◆ \subseteq \mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆, \mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆ \mathrm◆LB◆ is a $\sigma$-algebra on ◆LB◆◆RB◆S \right\◆RB◆
\end◆LB◆equation◆RB◆
$$

### Measurable Function

Let $(\Omega_1, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1)$ and $(\Omega_2, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2)$ be measurable spaces. A
function $f: \Omega_1 \to \Omega_2$ is **measurable** (or
$\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1/\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2$-measurable) if the pre-image of every measurable set in
the target is a measurable set in the source:

$$
\forall B \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2, \quad f^◆LB◆-1◆RB◆(B) \triangleq \{\omega \in \Omega_1 : f(\omega) \in B\} \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1
$$

_Note:_ This is the foundational definition before introducing Random Elements.

### Measure

In a measurable space $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$A measure is a function
$\mu : \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆ \rightarrow [0,\infty]$Satisfying:

1. Null set: $\mu(\emptyset) = 0$
2. Countable additivity: For any countable collection of pairwise disjoint sets
   $\{A_i\}^\infty_◆LB◆i=1◆RB◆ \subseteq \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$:

$$
\mu \left(\bigcup^\infty_◆LB◆i=1◆RB◆ A_i\right) = \sum^\infty_◆LB◆i=1◆RB◆ \mu (A_i)
$$

### Almost Everywhere and Equivalence

Two functions $f, g$ are equivalent ($f \sim g$) if they are equal almost everywhere, meaning:

$$
\mu(\left\{ x\in \Omega: f(x) \neq g(x)\right\}) = 0
$$

Assuming the set $\{x \in \Omega : f(x) \neq g(x)\}$ is measurable.

:::warning **Rigor Note:** In pure measure theory, the set $\{x \in \Omega : f(x) \neq g(x)\}$ need
not be measurable if the measure space is not complete. The fully rigorous formulation is: There
exists a measurable null set $N \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ such that $\mu(N) = 0$ and
$\{x \in \Omega : f(x) \neq g(x)\} \subseteq N$. This bypasses the need to assume the inner set is
measurable and introduces the concept of measure space completeness (see _Completeness of a Measure
Space_ below). :::

:::info **Terminology Note:** When the measure $\mu$ is a probability measure $P$"almost everywhere"
(a.e.) is conventionally called "almost surely" (a.s.). We write $f = g$ a.s. Or $f = g$ $P$-a.e.
Interchangeably. :::

### Completeness of a Measure Space

A measure space $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, \mu)$ is **complete** if every subset of a null set is
measurable (and hence also a null set). Formally:

$$
\mathrm◆LB◆If◆RB◆ ◆LB◆◆RB◆ N \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆ \mathrm◆LB◆ with ◆LB◆◆RB◆ \mu(N) = 0 \mathrm◆LB◆ and ◆LB◆◆RB◆ A \subseteq N, \mathrm◆LB◆ then ◆LB◆◆RB◆ A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆
$$

_Note:_ The Lebesgue measure on $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ is complete by construction. Any measure space
can be "completed" by adding all subsets of null sets to the $\sigma$-algebra. The completion of a
Borel measure yields the larger $\sigma$-algebra of Lebesgue-measurable sets.

### $\sigma$-finite Measure

A measure $\mu$ on $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$ is $\sigma$-finite if $\Omega$ can be written as a
countable union of measurable sets with finite measures:

$$
\Omega = \bigcup^\infty_◆LB◆n=1◆RB◆ A_n, \quad A_n \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, \quad \mu(A_n) < \infty
$$

### Reference Measure

The reference measure $\lambda$ is a fixed $\sigma$-finite measure on a measurable space
$(S, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$.

### Absolute Continuity of Measures

Given two measures $\nu$ and $\mu$ on the same measurable space $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$We say
$\nu$ is **absolutely continuous** with respect to $\mu$Denoted $\nu \ll \mu$If:

$$
\mu(A) = 0 \implies \nu(A) = 0 \quad \forall A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆
$$

_Intuition:_ If $\nu \ll \mu$Then $\nu$ cannot "create probability out of thin air" where $\mu$ says
there is none. This is the prerequisite for the existence of the Radon-Nikodym derivative.

### Pushforward Measure

Let $T: (\Omega_1, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1) \to (\Omega_2, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2)$ be a **measurable
mapping**. Given a measure $\mu$ on $(\Omega_1, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1)$The **pushforward measure**
$T_\#\mu$ on $(\Omega_2, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2)$ is defined as:

$$
T_\# \mu(B) = \mu(T^◆LB◆-1◆RB◆(B)) \quad \mathrm◆LB◆for◆RB◆ all ◆LB◆◆RB◆ B \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2
$$

_Note:_ This is a pure measure-theoretic concept. When $T$ is a random element and $\mu = P$The
pushforward becomes the law/induced distribution.

_ML Context:_ In Generative Models (GANs/VAEs), the pushforward measure is the foundation of the
**Generator**. If $z \sim \mathcal◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆(0, I)$ is a latent variable and $G_\theta$ is a neural
network, the generated data distribution is exactly the pushforward measure
$◆LB◆G_\theta◆RB◆_\# \mathcal◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆(0, I)$.

### Product Measure

Let $(\Omega_1, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1, \mu_1)$ and $(\Omega_2, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2, \mu_2)$ be two
$\sigma$-finite measure spaces. The product $\sigma$-algebra, denoted
$\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1 \otimes \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2$ is the $\sigma$-algebra generated by measurable
rectangles $A \times B$ where $A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1, B \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2$. There exists a
unique measure $\pi = \mu_1 \otimes \mu_2$ on $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1 \otimes \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2$ such
that for all measurable rectangles:

$$
\begin◆LB◆equation◆RB◆
 \pi(A \times B) = \mu_1(A)\mu_2(B)
\end◆LB◆equation◆RB◆
$$

### Radon-Nikodym Derivative

Let $(\Omega,\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$ be a measurable space equipped with two $\sigma$-finite measures
$\mu$ and $\nu$. If $\nu$ is absolutely continuous with respect to $\mu$ (denoted $\nu \ll \mu$),
meaning that $\forall A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, (\mu(A)=0 \implies \nu(A)=0)$Then there exists a
measurable function $f: \Omega \to [0,\infty)$Unique $\mu$-almost everywhere, such that for every
$A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$:

$$
\nu(A) = \int_A f d\mu
$$

The function $f$ is called the Radon-Nikodym derivative and is denoted $f = \frac◆LB◆d\nu◆RB◆◆LB◆d\mu◆RB◆$.

### Dirac Measure

Let $(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S))$ be a measurable space and $x \in S$ be a fixed point. The Dirac
measure $\delta_x$ is defined as:

$$
\forall A \in \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S), \quad
\delta_x(A) = \begin◆LB◆cases◆RB◆
 1 & \mathrm◆LB◆if◆RB◆ ◆LB◆◆RB◆ x\in A\\
 0 & \mathrm◆LB◆if◆RB◆ ◆LB◆◆RB◆ x\notin A
\end◆LB◆cases◆RB◆
$$

### Empirical Measure

Let $(S, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$ be a measurable space and $x_1, \dots, x_n \in S$ be fixed
observations. The empirical measure $\hat◆LB◆P◆RB◆_n$ is defined as:

$$
\hat◆LB◆P◆RB◆_n(A) = \frac◆LB◆1◆RB◆◆LB◆n◆RB◆ \sum_◆LB◆i=1◆RB◆^n \delta_◆LB◆x_i◆RB◆(A) = \frac◆LB◆ | \{i : x_i \in A\} | ◆RB◆◆LB◆n◆RB◆, \quad \forall A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆
$$

Where $| \cdot |$ denotes the **cardinality** (number of elements) of the set, not absolute value.

:::info In statistical contexts, if $X_1, \dots, X_n$ are random elements, $\hat◆LB◆P◆RB◆_n$ becomes a
RandomMeasure mapping $\omega \mapsto \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum \delta_◆LB◆X_i(\omega)◆RB◆$. :::

### Support of a Measure

Given a Borel probability measure $\mu$ on a topological space $(S, \tau)$The support of
$\mu$Denoted $\mathrm◆LB◆supp◆RB◆◆LB◆◆RB◆(\mu)$Is the set of all points $x \in S$ for which every open
neighborhood of $x$ has positive measure. Equivalently, it is the intersection of all closed sets
with full measure:

$$
\mathrm◆LB◆supp◆RB◆◆LB◆◆RB◆(\mu) = \bigcap \{ C \subseteq S : C \mathrm◆LB◆ is closed and ◆LB◆◆RB◆ \mu(C) = 1 \}
$$

### Probability Measure

A probability measure $P$ is a measure on $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$ such that $P(\Omega) = 1$.
It must satisfy Countable Additivity: For any countable sequence of pairwise disjoint events
$\{A_i\}_◆LB◆i=1◆RB◆^\infty \subseteq \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$:

$$
P\left(\bigcup_◆LB◆i=1◆RB◆^\infty A_i\right) = \sum_◆LB◆i=1◆RB◆^\infty P(A_i)
$$

### Space of Probability Measure

Let $(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S))$ be a measurable space. The space of probability measures
$\mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆_1(S)$ is the set of all probability measures on $(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S))$ such
that $\mu(S) = 1$ for all $\mu \in \mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆_1(S)$.

:::info The notation $\mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆_1$ emphasizes that these are probability measures (total
mass 1), as opposed to general measures with arbitrary mass. :::

### Probability Space

A probability space is a tuple $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$Where $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$
is the measurable space defined previously and $P$ is the probability measure where
$P \in \mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆_1(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$.

### Outcome

Outcome $\omega \in \Omega$ is an element of some space $\Omega$.

### Carathéodory's Extension Theorem

Let $\Omega$ be a set and $\mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ be a Ring of subsets (closed under finite union and
relative complement). Let $\mu_0: \mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆ \to [0, \infty]$ be a pre-measure (countably
additive on $\mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$). **Theorem:** There exists a measure $\mu$ on the $\sigma$-algebra
generated by $\mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$Denoted $\sigma(\mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆)$Such that $\mu(A) = \mu_0(A)$ for
all $A \in \mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$. Furthermore, if $\mu_0$ is $\sigma$-finite, this extension $\mu$ is
unique.

This theorem allows us to define the Lebesgue measure on $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ by defining the length
of intervals, and guarantees a valid probability measure exists on the complex Borel
$\sigma$-algebra.

### Kolmogorov Extension Theorem (Kolmogorov-Bochner)

Let $T$ be an index set ( $T = \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ or $T = \mathbb◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆$ for time). For each
finite subset $J = \{t_1, \dots, t_n\} \subset T$Let $\mu_J$ be a probability measure on
$(\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^J, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^J))$ (a **finite-dimensional distribution**
or FDD).

**Consistency Condition:** The family $\{\mu_J\}$ is **consistent** if for any finite subsets
$J \subseteq K \subset T$The marginal of $\mu_K$ onto coordinates $J$ equals $\mu_J$:

$$
\mu_J(A) = \mu_K(A \times \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^◆LB◆K \setminus J◆RB◆), \quad \forall A \in \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^J)
$$

**Theorem:** If $\{\mu_J\}$ is a consistent family of finite-dimensional distributions, there exists
a unique probability measure $P$ on the product space
$(\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^T, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^T))$ such that for every finite
$J \subset T$The marginal distribution of $P$ on $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^J$ is $\mu_J$.

_Relevance:_ This theorem is **essential** for rigorously defining stochastic processes. It
guarantees that the Wiener Process (Brownian Motion) and Markov Chains exist as well-defined
probability measures on path space, given only their finite-dimensional distributions.

## Probability Properties

### Event

Given a measurable space $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$An event is a measurable set
$A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ to which a probability $P(A)$ can be assigned.

### Elementary Event

An elementary event is a set containing a single outcome, $\{\omega\} \subset \Omega$. For
singletons in $\Omega$ to be measurable, we must assume the $\sigma$-algebra $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$
contains all singletons, or equivalently, that $\Omega$ is equipped with a topology making it a
Standard Borel space (e.g., $\Omega$ is itself a Polish space).

_Note:_ This is distinct from singletons in the target space $S$. When $S$ is a Polish space
equipped with its Borel $\sigma$-algebra $\mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S)$All singletons $\{s\} \subset S$ are
indeed measurable because Polish spaces are $T_1$ (singletons are closed, hence Borel-measurable).

### Complementary Event

The **complement** of an event $A$ is defined as $A^c = \Omega \setminus A$.

By the additivity axiom of probability measures, this yields the property:

$$
P(A \cup A^c) = P(\Omega) = 1
$$

### Joint Probability

If two events $A, B \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ the probability of their intersection is denoted
$P(A \cap B)$. Using the additivity of measures, the inclusion-exclusion principle is as follows:

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

:::info You are reminded that mutually exclusive events have the property $P(A \cap B) = 0$ :::

### Conditional Probability

For events $A, B \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P(B) > 0$The conditional probability of $A$ given $B$ is
defined as the normalized measure of the intersection:

$$
P(A|B) \triangleq \frac◆LB◆P(A\cap B)◆RB◆◆LB◆P(B)◆RB◆, \quad P(B) \in (0, 1]
$$

### Mutual Independence

A finite collection of events $A_1, \dots, A_n \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ is **mutually independent**
(or independent) if for every subset of indices $I \subseteq \{1, \dots, n\}$:

$$
P\left(\bigcap_◆LB◆i\in I◆RB◆ A_i\right) = \prod_◆LB◆i\in I◆RB◆P(A_i)
$$

:::info **Terminology Note:** The term "marginal independence" is sometimes used to refer to
unconditional independence $X \perp Y$Contrasting with conditional independence $X \perp Y \mid Z$.
For the independence of $n$ events, "mutual independence" is the standard terminology. :::

### Conditional Independence

Given that event $C \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ holds, event $A, B \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ are
conditionally independent if:

$$
P(A\cap B| C) = P(A|C)P(B|C)
$$

This is often denoted as $A \perp B | C$.

## Random Elements and Distributions

### Random Element

The random elements can map to spaces other than the real line, random variable (strictly real
number line) is not enough to measure the full domain of a random source. Therefore, random element
should be strictly defined. Let $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$ be a measurable space (the source of
randomness), and $(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S))$ be a measurable space (the target). A function
$X:\Omega \rightarrow S$ is a random element if it is measurable, i.e., the pre-image of every
measurable set in the target is a measurable set in the source:

$$
\forall B \in \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S), X^◆LB◆-1◆RB◆(B) \triangleq \{\omega \in \Omega : X(\omega) \in B\} \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆
$$

### Random Variable

A random variable is a specific case of random element where the target space is the real line:

$$
(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S)) = (\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆))
$$

### Random Vector

A random vector is a specific case of random element where the target space is the Euclidean space
$\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$:

$$
(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S)) = (\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d))
$$

A random vector $\mathbf◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ = (X_1, \dots, X_d)^\top$ can be viewed as a collection of $d$
real-valued random variables.

### Independence of $\sigma$-algebras

Two $\sigma$-algebras $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆, \mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆ \subseteq \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ are
independent if for all $G \in \mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$ and
$H \in \mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$, $P(G \cap H) = P(G)P(H)$.

### Independence of Random Elements

Random elements $X, Y$ on $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$ are independent if their generated
$\sigma$-algebras $\sigma(X) = \{X^◆LB◆-1◆RB◆(B) : B \in \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S)\}$ and $\sigma(Y)$ are
independent.

### The Law/Induced Distribution

The Law of random element $X$ is the probability measure
$P_X \in \mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆_1(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S))$Defined by the pushforward $X\sim P_X$:

$$
P_X(B) = P(X^◆LB◆-1◆RB◆(B))
$$

### Probability Density Function

If $P_X \ll \lambda$The probability density function would be the Radon-Nikodym derivative
$f=\frac◆LB◆d P_X◆RB◆◆LB◆d \lambda◆RB◆$Satisfying:

$$
\begin◆LB◆equation◆RB◆
 P_X(B) = \int_B f \space d \lambda
\end◆LB◆equation◆RB◆
$$

_Note:_ The PDF $f$ is unique **only up to $\lambda$-null sets**. If $f$ and $g$ differ only on a
set of $\lambda$-measure zero, they define the same probability measure $P_X$.

### Absolutely Continuous Random Element

A random element $X$ is **absolutely continuous** with respect to a reference measure $\lambda$ if
its induced law $P_X$ is absolutely continuous with respect to $\lambda$I.e., $P_X \ll \lambda$.
This means that for all measurable sets $B$ in the target space,
$\lambda(B) = 0 \implies P_X(B) = 0$.

### Marginal Distribution

Let $(X, Y)$ be a pair of random elements with joint distribution $P_◆LB◆XY◆RB◆$ on the product space
$(S \times T, \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆ \otimes \mathcal◆LB◆◆LB◆'◆RB◆T◆LB◆◆RB◆'◆RB◆)$. The **marginal distribution** of $X$ is
the pushforward of $P_◆LB◆XY◆RB◆$ under the projection map $\pi_X: S \times T \to S$Defined as:

$$
P_X(A) = P_◆LB◆XY◆RB◆(A \times T) = (\pi_X)_\# P_◆LB◆XY◆RB◆(A), \quad \forall A \in \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆
$$

Equivalently, $P_X$ is the law of $X$ when treating $X$ as a random element in isolation.

_Note:_ The term "marginal" refers to the fact that in the discrete case, summing the joint
probability table over $Y$ yields the marginal probabilities of $X$ in the margins of the table.

### Independent and Identically Distributed (IID)

Given a sequence of random elements $X_1, \dots, X_n$If their joint law is the product of their
marginal laws:

$$
P_◆LB◆(X_1, \dots, X_n)◆RB◆ = P_◆LB◆X_1◆RB◆ \otimes \dots \otimes P_◆LB◆X_n◆RB◆
$$

And all marginal laws are identical ($P_◆LB◆X_1◆RB◆ = \dots = P_◆LB◆X_n◆RB◆ = P_X$), then the sequence is
**IID**. Equivalently, the random elements are pairwise independent and all share the same
distribution.

_Note:_ This definition requires the concepts of Random Elements, Joint Laws, and Marginal Laws,
which is why it is placed here rather than in the Probability Properties section.

## Integration and Expectation

### Indicator Function ($1_A$)

Indicator function $1_A:\Omega \rightarrow \{1,0\}$ satisfies:

$$
1_A(\omega) =
\begin◆LB◆cases◆RB◆
 1 & \mathrm◆LB◆if◆RB◆ ◆LB◆◆RB◆ \omega \in A\\
 0 & \mathrm◆LB◆else◆RB◆◆LB◆◆RB◆
\end◆LB◆cases◆RB◆
$$

### Simple Function

A function $s: \Omega \rightarrow \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ is a **simple function** if it takes on a finite
number of values. This can be written as a linear combination of indicator functions:

$$
S(\omega) = \sum^n_◆LB◆i=1◆RB◆ \alpha_i 1_◆LB◆A_i◆RB◆ (\omega), \quad \alpha_i \in \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆, \quad A_i \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆
$$

Where $\alpha_i \in \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ are real coefficients and $A_i \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ are
pairwise disjoint measurable sets.

:::info **Non-negative Simple Function:** For the construction of the Lebesgue integral, we
specifically use **non-negative simple functions** where $\alpha_i \in [0, \infty)$ for all $i$.
General simple functions (allowing negative coefficients) are used in the final step of the integral
construction. :::

### Lebesgue Integral

This is an integral constructed from $3$ steps:

1. Simple functions: Given a simple function $s=\sum \alpha_i 1_A$The integral is
   $\int s d\mu = \sum^n_◆LB◆i=1◆RB◆ \alpha_i \mu (A_i)$.
2. Non-negative Measurable Functions: For any $f: \Omega \rightarrow [0, \infty]$Defined as the
   supremum of integrals of simple functions bounded by f:
   $$
   \int f d\mu = \sup \left\{\int s d\mu : 0\leq s \leq f, s \mathrm◆LB◆ is simple◆LB◆◆RB◆\right\◆RB◆
   $$
3. General Measurable Functions: For a **measurable** function
   $f: \Omega \rightarrow \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$Decompose into positive and negative parts
   $f = f^+ - f^-$ (where $f^+ = \max(f, 0)$ and $f^- = \max(-f, 0)$). The integral is defined as:
   $$
   \int f d \mu = \int f^+ d\mu - \int f^- d\mu
   $$

:::warning **Edge Cases:**

- If $\int f^+ < \infty$ and $\int f^- < \infty$: $f$ is **Lebesgue Integrable** ($f \in L^1$).
- If only one of $\int f^+$ or $\int f^-$ is infinite: The integral **exists** (evaluates to
  $\pm\infty$), but $f$ is **not integrable**.
- If both $\int f^+ = \infty$ and $\int f^- = \infty$: The integral is **undefined**.

:::

### Expectation (Real-valued)

For a real-valued random variable $X: \Omega \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$The expectation is the standard
Lebesgue integral with respect to the probability measure $P$:

$$
\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X] = \int_\Omega X(\omega) \, dP(\omega)
$$

If $X$ has a density $f_X$ with respect to Lebesgue measure $\lambda$This becomes:

$$
\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X] = \int_◆LB◆\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆◆RB◆ x \cdot f_X(x) \, d\lambda(x)
$$

### Moments and Variance

For a real-valued random variable $X$ and $k \in \mathbb◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆$:

- The **$k$-th moment** (about the origin) is $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X^k]$Provided
  $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[|X|^k] < \infty$.
- The **$k$-th central moment** is $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[(X - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X])^k]$.

The **variance** of $X$ is the second central moment:

$$
\mathrm◆LB◆Var◆RB◆◆LB◆◆RB◆(X) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[(X - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X])^2] = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X^2] - (\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X])^2
$$

The **standard deviation** is $\sigma_X = \sqrt◆LB◆\mathrm◆LB◆Var◆RB◆◆LB◆◆RB◆(X)◆RB◆$.

_Properties:_

- $\mathrm◆LB◆Var◆RB◆◆LB◆◆RB◆(X) \geq 0$
- $\mathrm◆LB◆Var◆RB◆◆LB◆◆RB◆(aX + b) = a^2 \mathrm◆LB◆Var◆RB◆◆LB◆◆RB◆(X)$ for constants $a, b$
- $\mathrm◆LB◆Var◆RB◆◆LB◆◆RB◆(X) = 0 \iff X = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X]$ almost surely

### Law of the Unconscious Statistician (LOTUS)

Let $X: \Omega \to S$ be a random element with law $P_X$And let $f: S \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ be
measurable. **If $f$ is non-negative, or if $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[|f(X)|] < \infty$**, then the
expectation of $f(X)$ can be computed either in the sample space or the target space:

$$\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[f(X)] = \int_\Omega f(X(\omega)) \, dP(\omega) = \int_S f(x) \, dP_X(x)$$

_Intuition:_ LOTUS justifies computing expectations using the pushforward measure (distribution)
rather than the underlying probability space. In ML, this is why we can compute
$\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[f(X)]$ using the density $p_X(x)$ without knowing $\Omega$ or $P$.

### Covariance

For two random variables $X, Y$ with finite second moments, the covariance is defined as:

$$\mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(X, Y) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[(X - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X])(Y - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[Y])]$$

Equivalently, $\mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(X, Y) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[XY] - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X]\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[Y]$.

_Properties:_

- $\mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(X, X) = \mathrm◆LB◆Var◆RB◆◆LB◆◆RB◆(X)$
- $\mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(X, Y) = \mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(Y, X)$ (symmetry)
- $\mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(aX, bY) = ab \cdot \mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(X, Y)$ (bilinearity)
- If $X$ and $Y$ are independent, $\mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(X, Y) = 0$ (but converse is not true)

### Covariance Matrix

For a random vector $\mathbf◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ \in \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ with finite second moments, the
covariance matrix $\Sigma \in \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^◆LB◆d \times d◆RB◆$ is defined as:

$$
\Sigma = \mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(\mathbf◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆\left[(\mathbf◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[\mathbf◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆])(\mathbf◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[\mathbf◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆])^\top\right]
$$

The $(i,j)$-th entry is $\Sigma_◆LB◆ij◆RB◆ = \mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(X_i, X_j)$. The covariance matrix is symmetric
and positive semi-definite.

### Lebesgue $p$-spaces ($\mathcal◆LB◆◆LB◆'◆RB◆L◆LB◆◆RB◆'◆RB◆^p$)

For $p \in [1, \infty)$The space $\mathcal◆LB◆◆LB◆'◆RB◆L◆LB◆◆RB◆'◆RB◆^p(\Omega, \mu)$ consists of all measurable
functions $f: \Omega \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ such that the norm is finite:

$$
\lVert f \rVert_p \triangleq \left( \int_\Omega |f(\omega)|^p \, d\mu(\omega) \right)^◆LB◆1/p◆RB◆ < \infty
$$

The space $L^p$ is the quotient space of $\mathcal◆LB◆◆LB◆'◆RB◆L◆LB◆◆RB◆'◆RB◆^p$ modulo the equivalence relation
$f \sim g \iff f=g$ $\mu$-almost everywhere. $L^p$ is a Banach space under the norm
$\lVert \cdot \rVert_p$.

_Generalization:_ For vector-valued functions, the Bochner space
$\mathcal◆LB◆◆LB◆'◆RB◆L◆LB◆◆RB◆'◆RB◆^p(\Omega, \mu; \mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆)$ consists of strongly measurable functions
$f: \Omega \to \mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$ where
$\lVert f \rVert_p = \left( \int_\Omega \lVert f(\omega) \rVert^p \, d\mu(\omega) \right)^◆LB◆1/p◆RB◆ < \infty$.

### Bochner Integrability (Preview)

For vector-valued functions taking values in a Banach space, the Bochner integral extends the
Lebesgue integral. The formal definition requires concepts from Functional Analysis (Banach spaces,
strong measurability) and is deferred to the _Functional Analysis and Bochner Integration_ section
below.

_Intuition:_ A function $f: \Omega \to \mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$ is Bochner integrable if it is the limit of
simple Banach-valued functions and its norm is Lebesgue integrable:
$\int_\Omega \lVert f(\omega) \rVert \, d\mu(\omega) < \infty$.

:::info **Bochner's Theorem:** A strongly measurable function $X: \Omega \to \mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$ is
Bochner integrable _if and only if_ its norm is Lebesgue integrable:
$$\int_\Omega \lVert X(\omega) \rVert \, d\mu(\omega) < \infty$$ This is the characteristic
criterion for Bochner integrability and is formally stated in the _Bochner Integral_ definition
below. :::

### Fubini-Tonelli Theorem

Let $(\Omega_1, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_1, \mu_1)$ and $(\Omega_2, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_2, \mu_2)$ be
$\sigma$-finite measure spaces. The Fubini-Tonelli Theorem states:

1. Tonelli (non-negative measurable functions): If $f: \Omega_1 \times \Omega_2 \to [0,\infty]$ is
   measurable, then:
   $$
   \int_◆LB◆\Omega_1 \times \Omega_2◆RB◆ f d(\mu_1 \otimes \mu_2) = \int_◆LB◆\Omega_1◆RB◆ \left(\int_◆LB◆\Omega_2◆RB◆ f(x,y) d\mu_2 (y) \right)d\mu_1(x)
   $$
2. Fubini (integrable functions): If $f$ is integrable ($f \in L^1 (\mu_1 \otimes \mu_2)$), then the
   order of integration can be swapped, and the equality holds for the signed integral.

## Inequalities

### Convex Function

A function $f: V \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ on a vector space is convex if
$\forall x, y \in V, \lambda \in [0,1]$:
$$f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)$$ (Crucial for Jensen's inequality
and Optimization).

### Jensen's Inequality

Given a probability space $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$A real-valued random variable
$X: \Omega \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ and a convex function
$\varphi: \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆ \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$:

$$
\varphi(\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X]) \leq \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[\varphi(X)]
$$

### Markov's Inequality

Let $X$ be a non-negative random variable and $a > 0$. Then:

$$
P(X \geq a) \leq \frac◆LB◆\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X]◆RB◆◆LB◆a◆RB◆
$$

### Chebyshev's Inequality

Let $X$ be a random variable with finite mean $\mu$ and finite non-zero variance $\sigma^2$. For any
$k > 0$:

$$
P(|X - \mu| \geq k\sigma) \leq \frac◆LB◆1◆RB◆◆LB◆k^2◆RB◆
$$

## Functional Analysis and Bochner Integration

### Normed Vector Space

A Normed Vector Space is a pair $(V, \lVert \cdot \rVert)$ where $V$ is a vector space over field
$\mathbb◆LB◆◆LB◆'◆RB◆K◆LB◆◆RB◆'◆RB◆$ ( $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ or $\mathbb◆LB◆◆LB◆'◆RB◆C◆LB◆◆RB◆'◆RB◆$) and
$\lVert \cdot \rVert: V \to [0, \infty)$ is a norm satisfying:

1. Positive Definiteness: $\lVert x \rVert = 0 \iff x = 0_V$.
2. Absolute Homogeneity: $\lVert \alpha x \rVert = |\alpha| \lVert x \rVert$ for all scalars
   $\alpha \in \mathbb◆LB◆◆LB◆'◆RB◆K◆LB◆◆RB◆'◆RB◆$.
3. Triangle Inequality: $\lVert x + y \rVert \leq \lVert x \rVert + \lVert y \rVert$.

_Note:_ Every normed space induces a metric $d(x,y) = \lVert x - y \rVert$.

### Euclidean Norm

On $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$The **Euclidean norm** (or $\ell^2$-norm) is defined as:

$$
\lVert x \rVert_2 = \sqrt◆LB◆\sum_◆LB◆i=1◆RB◆^d x_i^2◆RB◆ = \sqrt◆LB◆\langle x, x \rangle◆RB◆
$$

Where $\langle \cdot, \cdot \rangle$ denotes the standard dot product. The Euclidean norm is the
norm induced by the standard inner product on $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$.

_Note:_ While general norms (defined above) apply to any normed vector space, the Euclidean norm is
specific to finite-dimensional real spaces equipped with the standard inner product. All norms on
$\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ are equivalent, but the Euclidean norm has special properties: it is strictly
convex, rotation-invariant, and induces the familiar Euclidean geometry.

### Cauchy Sequence

A sequence $(x_n)_◆LB◆n \in \mathbb◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆◆RB◆$ in a normed vector space $(V, \lVert \cdot \rVert)$ is a
Cauchy sequence if $\forall \epsilon>0, \exists N \in \mathbb◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆$ such that
$\forall n, m \geq N, \lVert x_n - x_m \rVert < \epsilon$.

_Note:_ In a general metric space $(M, d)$The condition is $d(x_n, x_m) < \epsilon$. Since every
normed space induces a metric $d(x,y) = \lVert x - y \rVert$The norm formulation is equivalent but
more natural in the context of Banach spaces.

### Banach Space

A Banach space $(\mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆, \lVert \cdot \rVert)$ is a vector space $\mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$
equipped with a norm $\lVert \cdot \rVert$ that is complete. "Complete" means every Cauchy sequence
in $\mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$ converges to a limit within $\mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$.

$\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ is a Banach space under any norm because in finite dimensions, all norms are
equivalent and complete. When equipped specifically with the Euclidean inner product and its induced
norm, $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ becomes a Hilbert space (a specialized subset of Banach spaces).

### Inner Product Space

An inner product space is a vector space $V$ over a field $\mathbb◆LB◆◆LB◆'◆RB◆K◆LB◆◆RB◆'◆RB◆$ ( $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ or
$\mathbb◆LB◆◆LB◆'◆RB◆C◆LB◆◆RB◆'◆RB◆$) equipped with an inner product
$\langle \cdot, \cdot \rangle: V \times V \to \mathbb◆LB◆◆LB◆'◆RB◆K◆LB◆◆RB◆'◆RB◆$ satisfying:

1. Conjugate Symmetry: $\langle x, y \rangle = \overline◆LB◆\langle y, x \rangle◆RB◆$ (symmetry for real
   spaces: $\langle x, y \rangle = \langle y, x \rangle$).
2. Linearity in first argument:
   $\langle ax + by, z \rangle = a\langle x, z \rangle + b\langle y, z \rangle$.
3. Positive Definiteness: $\langle x, x \rangle \geq 0$ with equality iff $x = 0$.

By conjugate symmetry, the inner product is **conjugate linear** (anti-linear) in the second
argument for complex spaces: $\langle x, ay \rangle = \bar◆LB◆a◆RB◆\langle x, y \rangle$.

The inner product induces a norm: $\lVert x \rVert = \sqrt◆LB◆\langle x, x \rangle◆RB◆$.

### Hilbert Space

A Hilbert space is a real or complex inner product space that is also a complete metric space with
respect to the distance function induced by the inner product.

### Dual Space

Given a normed vector space $V$ over field $\mathbb◆LB◆◆LB◆'◆RB◆K◆LB◆◆RB◆'◆RB◆$The **(topological) dual space** $V^*$
is the space of all continuous linear functionals $f: V \to \mathbb◆LB◆◆LB◆'◆RB◆K◆LB◆◆RB◆'◆RB◆$.

_Key Results:_

- For finite-dimensional spaces, $V^*$ is isomorphic to $V$.
- For Hilbert spaces $\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$The **Riesz Representation Theorem** states that every
  $f \in \mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆^*$ corresponds to a unique $y \in \mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$ such that
  $f(x) = \langle x, y \rangle$.
- For Banach spaces, $V^*$ may be strictly larger than $V$.

_Relevance:_ The characteristic function of a Banach-space-valued random variable uses the dual
space: $\varphi_X(t) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[e^◆LB◆i t(X)◆RB◆]$ where $t \in B^*$.

### Strongly Measurable

Given a Banach space $\mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$A function $X: \Omega \to \mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$ is strongly
measurable if it is the pointwise limit of a sequence of simple functions. Pettis Measurability
Theorem states $X$ is strongly measurable iff $X$ is weakly measurable and has a separable range
(This is essential for Polish spaces).

### Bochner Integral

This is an integral constructed from:

1. Banach valued simple function: $s: \Omega \to \mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$Taking finite values
   $v_1, \dots, v_n$ on disjoint sets $A_i$:
   $$
   \int_\Omega s dP = \sum^n_◆LB◆i=1◆RB◆ v_i P(A_i)
   $$
2. Bochner Integrable: A function $X: \Omega \to \mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$ is Bochner integrable if there
   exists a sequence of simple functions $s_n$ converging to $X$ **pointwise $P$-almost everywhere**
   ($s_n \to X$ $P$-a.e.) such that:
   $$
   \lim_◆LB◆n \to \infty◆RB◆ \int_\Omega \lVert X-s_n\rVert dP = 0
   $$
3. The integral: $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X] = \lim_◆LB◆n \to \infty◆RB◆ \int_\Omega s_n dP$

### Kernel (Reproducing Kernel Hilbert Space context)

Let $\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$ be a Hilbert space of functions $f: \mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$.
$\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$ is an RKHS if the **evaluation functional** $\delta_x: f \mapsto f(x)$ is a
bounded (continuous) linear operator for all $x \in \mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆$. By Riesz Representation
Theorem, there exists a unique function $k(\cdot, x) \in \mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$ such that: $$ f(x) =
\langle f, k(\cdot, x) \rangle*\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆ $$ The function $k(x, y) = \langle k(\cdot, x),
k(\cdot, y) \rangle*\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$ is called the Reproducing Kernel.

### Positive Definite Kernel

A function $k: \mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ \times \mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ is a **positive
definite kernel** if:

1. Symmetry: $k(x, y) = k(y, x)$ for all $x, y \in \mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆$
2. Positive semi-definiteness: For any $n \in \mathbb◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆$Any
   $x_1, \dots, x_n \in \mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆$And any $c_1, \dots, c_n \in \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$:
   $$\sum_◆LB◆i=1◆RB◆^n \sum_◆LB◆j=1◆RB◆^n c_i c_j k(x_i, x_j) \geq 0$$

### Moore-Aronszajn Theorem

For every positive definite kernel $k$There exists a unique RKHS $\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆_k$ for which $k$
is the reproducing kernel.

_Relevance:_ This theorem guarantees that we can work with kernels directly (e.g., RBF, polynomial)
without explicitly constructing the RKHS.

### Expectation (Vector-valued / Bochner)

For vector-valued random elements, expectations are defined over Banach spaces via the Bochner
integral. Given a probability space $(\Omega,\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$And a Banach space
$(\mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆, \lVert \cdot \rVert)$For a random element
$X: \Omega \rightarrow \mathbb◆LB◆◆LB◆'◆RB◆V◆LB◆◆RB◆'◆RB◆$The expectation (expected value) is the Bochner integral of
$X$ with respect to probability measure $P$ denoted as $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X]$. This exists if $X$ is
strongly measurable and $\int_\Omega \lVert X(\omega) \rVert dP(\omega) < \infty$ and is denoted as:

$$
\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X] = \int_\Omega X(\omega)dP(\omega), \quad \omega \in \Omega
$$

## Convergence

### Convergence Almost Surely

A sequence of random variables $X_n$ converges almost surely to $X$ if the event where they differ
has a probability $0$:

$$
P\left(\left\{\omega \in \Omega: \lim_◆LB◆n\rightarrow \infty◆RB◆ X_n (\omega) = X(\omega)\right\}\right)= 1
$$

### Convergence In Probability

Let $X_n$ and $X$ be random elements defined on the **same probability space**
$(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$Taking values in a metric space $(S, d)$. We say $X_n$ converges in
probability to $X$Denoted $X_n \xrightarrow◆LB◆P◆RB◆ X$If for every $\epsilon > 0$:

$$
\lim_◆LB◆n\rightarrow \infty◆RB◆ P\left(d(X_n(\omega), X(\omega)) > \epsilon \right) = 0
$$

:::warning **Crucial Distinction from Weak Convergence:** Convergence in probability requires $X_n$
and $X$ to be defined on the **same** probability space. In contrast, weak convergence (convergence
in distribution) allows random variables to exist on entirely different probability spaces as long
as they map to the same target metric space. :::

### Weak Convergence

Let $X_n, X$ be random elements in a metric space $S$. $X_n$ converges weakly to $X$Denoted
$X_n \xrightarrow◆LB◆d◆RB◆ X$If for every bounded continuous function $f: S \rightarrow \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$:

$$
\lim_◆LB◆n \rightarrow \infty◆RB◆ \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[f(X_n)] = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[f(X)]
$$

### Monotone Convergence Theorem (MCT)

If $\{f_n\}$ is a sequence of non-negative measurable functions such that $f_n \uparrow f$
pointwise, then:

$$
\lim_◆LB◆n \to \infty◆RB◆ \int f_n \, d\mu = \int f \, d\mu
$$

(This is a prerequisite for proving Fatou's Lemma and DCT).

### Fatou's Lemma

Let $\{f_n\}$ be a sequence of non-negative measurable functions. Then:

$$
\int \liminf_◆LB◆n \to \infty◆RB◆ f_n \, d\mu \leq \liminf_◆LB◆n \to \infty◆RB◆ \int f_n \, d\mu
$$

_Intuition:_ Fatou's Lemma provides a **one-sided bound** for the integral of a limit. The
inequality can be strict---mass can "escape to infinity" in the limit, causing the integral of the
limit to be less than the limit of integrals.

_Relevance:_ One of the "Big Three" convergence theorems (alongside MCT and DCT). Heavily used in
risk minimization proofs, establishing lower bounds in variational inference, and proving the
existence of minimizers in optimization problems.

### Dominated Convergence Theorem (DCT)

Let $(f_n)$ be a sequence of measurable functions on $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, \mu)$ such that
$f_n(\omega) \to f(\omega)$ pointwise almost everywhere. **Theorem:** If there exists a measurable
function $g \in L^1(\mu)$ (the "dominating function") such that $|f_n(\omega)| \leq g(\omega)$
almost everywhere for all $n$Then $f$ is integrable and:

$$
\lim_◆LB◆n \to \infty◆RB◆ \int_\Omega f_n \, d\mu = \int_\Omega f \, d\mu
$$

Justifies swapping limits and expectations. Essential for proving convergence of Stochastic Gradient
Descent (SGD) and differentiating under the integral sign (common in Variational Inference).

### Portmanteau Theorem

For random elements $X_n, X$ in a metric space $S$The following are equivalent definitions of weak
convergence ($X_n \xrightarrow◆LB◆d◆RB◆ X$):

1. $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[f(X_n)] \to \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[f(X)]$ for all bounded continuous $f$.
2. $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[f(X_n)] \to \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[f(X)]$ for all bounded Lipschitz $f$.
3. $\limsup P(X_n \in C) \leq P(X \in C)$ for all closed sets $C$.
4. $\liminf P(X_n \in U) \geq P(X \in U)$ for all open sets $U$.
5. $P(X_n \in A) \to P(X \in A)$ for all **continuity sets** $A \in \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S)$ (i.e.,
   Borel sets where $P(X \in \partial A) = 0$With $\partial A = \overline◆LB◆A◆RB◆ \setminus A^\circ$
   denoting the boundary).

### Characteristic Function

For a random variable $X$ taking values in an inner product space ( $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ or a
Hilbert space $\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$), the characteristic function is defined as: $$ \varphi_X(t) =
\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆\left[ e^◆LB◆i \langle t, X \rangle◆RB◆ \right], \quad t \in \mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆

$$
Where $\langle \cdot, \cdot \rangle$ denotes the inner product. For $\mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$This
reduces to $\varphi_X(t) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆\left[ e^◆LB◆i t^\top X◆RB◆ \right]$ with
$t \in \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$.

:::info **Generalization to Banach Spaces:** For a random variable $X$ taking values in a Banach
space $B$ (which may lack an inner product), $t$ belongs to the _dual space_ $B^*$And the
characteristic function is defined as $\varphi_X(t) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆\left[ e^◆LB◆i t(X)◆RB◆ \right]$
where $t: B \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ is a continuous linear functional. For Hilbert spaces, the
Riesz Representation Theorem identifies $B^*$ with $B$Recovering the inner product formulation. :::

### Levy's Continuity Theorem

Let $X_n$ be random variables with characteristic functions $\varphi_n(t)$.

1. If $X_n \xrightarrow◆LB◆d◆RB◆ X$Then $\varphi_n(t) \to \varphi_X(t)$ pointwise.
2. If $\varphi_n(t)$ converges pointwise to a function $\varphi(t)$ which is continuous at $t=0$Then
   $\varphi$ is the characteristic function of some random variable $X$And $X_n \xrightarrow◆LB◆d◆RB◆ X$.

### Law of Large Numbers (LLN)

Let $X_1, X_2, \dots$ be i.i.d. Random variables with $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X_1] = \mu$.

**Weak Law of Large Numbers (WLLN):** $\bar◆LB◆X◆RB◆_n = \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum_◆LB◆i=1◆RB◆^n X_i \xrightarrow◆LB◆P◆RB◆ \mu$

**Strong Law of Large Numbers (SLLN):**
$\bar◆LB◆X◆RB◆_n = \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum_◆LB◆i=1◆RB◆^n X_i \xrightarrow◆LB◆a.s.◆RB◆ \mu$

:::warning **Important Distinction for ERM:** The standard LLN only guarantees that the empirical
risk of a _single, fixed_ hypothesis converges to its true risk. To justify Empirical Risk
Minimization (ERM) where we search for the _minimum_ across a hypothesis class
$\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$We need the **Uniform Law of Large Numbers (ULLN)** to prevent overfitting.
See Glivenko-Cantelli theorem. :::

### Central Limit Theorem (CLT)

Let $X_1, X_2, \dots$ be i.i.d. Random variables with mean $\mu$ and finite covariance $\Sigma$.
Then:

$$\sqrt◆LB◆n◆RB◆(\bar◆LB◆X◆RB◆_n - \mu) \xrightarrow◆LB◆d◆RB◆ \mathcal◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆(0, \Sigma)$$

Where $\bar◆LB◆X◆RB◆_n = \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum_◆LB◆i=1◆RB◆^n X_i$.

_Relevance:_ Foundation of asymptotic normality, Fisher Information properties, and explains why
neural network weights are often initialized with Gaussian distributions.

## Statistical Learning Theory

### Uniform Law of Large Numbers (ULLN) / Glivenko-Cantelli

Let $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ be a class of measurable functions. The empirical measure $\hat◆LB◆P◆RB◆_n$
satisfies the ULLN if:


$$

\sup_◆LB◆f \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆◆RB◆ \left| \int f \, d\hat◆LB◆P◆RB◆_n - \int f \, dP \right| \xrightarrow◆LB◆a.s.◆RB◆
0

$$

A function class $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ is called **Glivenko-Cantelli** if this holds. This is the
actual theoretical backbone of Statistical Learning Theory and ERM, ensuring uniform convergence
across the entire hypothesis class.

### True Risk and Empirical Risk

Let $\ell: \mathcal◆LB◆◆LB◆'◆RB◆Y◆LB◆◆RB◆'◆RB◆ \times \mathcal◆LB◆◆LB◆'◆RB◆Y◆LB◆◆RB◆'◆RB◆ \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ be a loss
function and $f: \mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ \to \mathcal◆LB◆◆LB◆'◆RB◆Y◆LB◆◆RB◆'◆RB◆$ be a hypothesis (predictor).

The **True Risk** (or expected risk) is the expected loss under the true data distribution:


$$

\mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆(f) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆(X,Y) \sim P◆RB◆[\ell(f(X), Y)]

$$

The **Empirical Risk** is the average loss over the observed training samples:


$$

\hat◆LB◆\mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆◆RB◆*n(f) = \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum*◆LB◆i=1◆RB◆^n \ell(f(x_i), y_i)

$$

_Connection to LLN:_ The Law of Large Numbers guarantees
$\hat◆LB◆\mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆◆RB◆_n(f) \to \mathcal◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆(f)$ for a _fixed_ $f$. The ULLN extends
this to uniform convergence over a hypothesis class $\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$.

### Concentration Inequalities

**Hoeffding's Inequality:** Let $X_1, \dots, X_n$ be independent random variables bounded such that
$a_i \leq X_i \leq b_i$. Then for any $t > 0$:


$$

P\left( \left| \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum*◆LB◆i=1◆RB◆^n X_i - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆\left[\frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum*◆LB◆i=1◆RB◆^n
X\*i\right] \right| \geq t \right) \leq 2\exp\left(-\frac◆LB◆2n^2t^2◆RB◆◆LB◆\sum_◆LB◆i=1◆RB◆^n(b_i - a_i)^2◆RB◆\right)

$$

_Relevance:_ Provides high-probability bounds for bounded random variables; foundational for
generalization bounds in SLT.

**McDiarmid's Inequality (Bounded Differences):** Let $X_1, \dots, X_n$ be independent random
variables. If $f: \mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆^n \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ satisfies the bounded
differences condition:


$$

\sup*◆LB◆x_1, \dots, x_n, x_i'◆RB◆ |f(x_1, \dots, x_n) - f(x_1, \dots, x*◆LB◆i-1◆RB◆, x\*i', x_◆LB◆i+1◆RB◆, \dots,
x_n)| \leq c_i

$$

Then for any $t > 0$:


$$

P(|f(X\*1, \dots, X*n) - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[f(X_1, \dots, X_n)]| \geq t) \leq
2\exp\left(-\frac◆LB◆2t^2◆RB◆◆LB◆\sum*◆LB◆i=1◆RB◆^n c_i^2◆RB◆\right)

$$

_Relevance:_ Generalizes Hoeffding to functions of random variables; used to prove generalization
bounds for arbitrary learning algorithms.

### Rademacher Complexity

Let $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ be a class of functions
$f: \mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$ and let $S = \{x_1, \dots, x_n\}$ be a fixed
sample. The **empirical Rademacher complexity** of $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ with respect to $S$ is:


$$

\hat◆LB◆\mathfrak◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆◆RB◆*S(\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆*\sigma\left[ \sup_◆LB◆f \in
\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum_◆LB◆i=1◆RB◆^n \sigma_i f(x_i) \right]

$$

Where $\sigma_1, \dots, \sigma_n$ are i.i.d. Rademacher random variables
($P(\sigma_i = +1) = P(\sigma_i = -1) = 1/2$).

The **Rademacher complexity** of $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ is
$\mathfrak◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆_n(\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_S[\hat◆LB◆\mathfrak◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆◆RB◆_S(\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)]$.

_Intuition:_ Measures the capacity of a function class to fit random noise. Higher complexity
implies greater risk of overfitting.

_Relevance:_ Provides tight generalization bounds; the complexity of neural networks can be bounded
via Rademacher complexity of their weight matrices.

### VC Dimension

The **Vapnik-Chervonenkis (VC) dimension** of a hypothesis class $\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$ is the
largest number of points that can be shattered by $\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$. A set
$\{x_1, \dots, x_d\}$ is shattered by $\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$ if for every binary labeling
$(y_1, \dots, y_d) \in \{0, 1\}^d$There exists $h \in \mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$ such that
$h(x_i) = y_i$ for all $i$.

_Relevance:_ A finite VC dimension implies the class is Glivenko-Cantelli. VC theory provides the
classical foundation for structural risk minimization.

## Stochastic Processes and Conditioning

### Stochastic Process

A **stochastic process** is a collection of random elements $\{X_t\}_◆LB◆t \in T◆RB◆$ indexed by a set $T$
( time, discrete or continuous), all defined on the same probability space
$(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$ and taking values in a measurable space
$(S, \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆)$.

### Wiener Process (Brownian Motion)

A stochastic process $\{W_t\}_◆LB◆t \geq 0◆RB◆$ is a **Wiener process** (or standard Brownian motion) if:

1. $W_0 = 0$ almost surely
2. $W_t$ has independent increments: $W_t - W_s \perp W_u - W_v$ for disjoint intervals
3. $W_t - W_s \sim \mathcal◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆(0, t-s)$ for $t > s$
4. $t \mapsto W_t$ is continuous almost surely

_Relevance:_ The foundational continuous-time martingale; essential for diffusion models.

### Stochastic Differential Equation (SDE)

An SDE describes the evolution of a stochastic process: $$dX_t = f(X_t, t)dt + g(X_t, t)dW_t$$

Where $f$ is the drift function, $g$ is the diffusion coefficient, and $W_t$ is a Wiener process.

_Relevance:_ Score-based generative models and diffusion models are formulated as SDEs, where the
Stein score $\nabla_x \log p_t(x)$ appears in the reverse-time SDE.

### Filtration

A **filtration** $\{\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_t\}_◆LB◆t \geq 0◆RB◆$ is an increasing family of
$\sigma$-algebras indexed by time (discrete or continuous):


$$

\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_s \subseteq \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_t \subseteq \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆ \quad \mathrm◆LB◆for◆RB◆ all
◆LB◆◆RB◆ s \leq t

$$

_Intuition:_ $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_t$ represents the information available at time $t$. As time
progresses, we gain more information (the $\sigma$-algebra grows).

_Relevance:_ Essential for Diffusion Models (SDEs), Reinforcement Learning (partially observable
Markov decision processes), and sequential decision making.

### Adapted Process

A stochastic process $\{X_t\}_◆LB◆t \geq 0◆RB◆$ is **adapted** to a filtration
$\{\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_t\}$ if $X_t$ is $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_t$-measurable for every $t$.
Equivalently, the value of $X_t$ is fully determined by the information available at time $t$.

_Intuition:_ An adapted process cannot "see into the future." At each time $t$, $X_t$ depends only on
information in $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_t$.

### Martingale

A stochastic process $\{X_t\}_◆LB◆t \geq 0◆RB◆$ adapted to a filtration $\{\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_t\}$ is a
**martingale** if:


$$

\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X_t | \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_s] = X_s \quad \mathrm◆LB◆for◆RB◆ all ◆LB◆◆RB◆ s \leq t

$$

_Variants:_

- **Sub-martingale:** $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X_t | \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_s] \geq X_s$
- **Super-martingale:** $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X_t | \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆_s] \leq X_s$

_Relevance:_ Martingales appear in the analysis of stochastic gradient descent, diffusion processes,
and optimal stopping problems.

### Markov/Transition Kernel

Let $(S, \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆)$ and $(T, \mathcal◆LB◆◆LB◆'◆RB◆T◆LB◆◆RB◆'◆RB◆)$ be measurable spaces. A function
$\kappa: S \times \mathcal◆LB◆◆LB◆'◆RB◆T◆LB◆◆RB◆'◆RB◆ \to [0, 1]$ is a Markov Kernel (or probability kernel) if:

1. For every fixed $B \in \mathcal◆LB◆◆LB◆'◆RB◆T◆LB◆◆RB◆'◆RB◆$The map $s \mapsto \kappa(s, B)$ is
   $\mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆$-measurable.
2. For every fixed $s \in S$The map $B \mapsto \kappa(s, B)$ is a probability measure on
   $(T, \mathcal◆LB◆◆LB◆'◆RB◆T◆LB◆◆RB◆'◆RB◆)$.

### Markov Chain

A sequence of random variables $X_0, X_1, X_2, \dots$ taking values in a measurable space
$(S, \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆)$ is a **Markov Chain** if it satisfies the Markov property:


$$

P(X*◆LB◆n+1◆RB◆ \in B | X_0, \dots, X_n) = P(X*◆LB◆n+1◆RB◆ \in B | X_n) = \kappa(X_n, B)

$$

Where $\kappa$ is the transition kernel.

### Stationary Distribution

A probability measure $\pi$ on $(S, \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆)$ is a **stationary distribution** (or
invariant measure) for a Markov kernel $\kappa$ if:


$$

\pi(B) = \int_S \kappa(x, B) \, d\pi(x) \quad \forall B \in \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆

$$

_Relevance:_ Required for MCMC algorithms. The chain converges to $\pi$ under appropriate
conditions.

### Regular Conditional Probability

Let $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$ be a probability space and let
$\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆ \subseteq \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ be a sub-$\sigma$-algebra. A **Regular
Conditional Probability** (RCP) is a kernel $\kappa: \Omega \times \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆ \to [0, 1]$
such that:

1. For $P$-almost all $\omega$, $\kappa(\omega, \cdot)$ is a probability measure on
   $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$.
2. For every $A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$, $\omega \mapsto \kappa(\omega, A)$ is
   $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$-measurable and is a version of the conditional expectation:
   $\kappa(\cdot, A) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[1_A | \mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆]$.
3. **Disintegration Property:** For any $A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ and
   $G \in \mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$: $$ P(A \cap G) = \int_G \kappa(\omega, A) \, dP(\omega) $$

_Critical Note:_ An RCP evaluates events in the **source** $\sigma$-algebra $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$.
The existence of RCP is guaranteed when $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$ is a Standard Borel space.

### Disintegration Theorem

Let $(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S))$ and $(T, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(T))$ be Standard Borel spaces.
Let $\mu$ be a probability measure on the product space $S \times T$And let $\nu$ be the marginal
distribution of $\mu$ on $S$ (defined by $\nu(A) = \mu(A \times T)$).

There exists a family of probability measures $\{\mu_x\}_◆LB◆x \in S◆RB◆$ on $T$Unique $\nu$-almost
everywhere, such that for every bounded measurable function
$f: S \times T \to \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆$:


$$

\int_◆LB◆S \times T◆RB◆ f(x, y) \, d\mu(x, y) = \int_S \left( \int_T f(x, y) \, d\mu_x(y) \right) d\nu(x)

$$

The measures $\mu_x$ are called the conditional probabilities of $Y$ given $X=x$Formally justifying
the notation $P(Y \in B | X=x)$.

### Regular Conditional Distribution

Instead of asking "What is the expected value of $X$ given $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$?", we ask "What
is the full distribution of $X$ given $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$?". Let
$(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$ be a probability space, let $(S, \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆)$ be a
measurable space (the target space of our random element), and let $X: \Omega \to S$ be a Random
Element. Let $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆ \subseteq \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ be a sub-$\sigma$-algebra.

A Regular Conditional Distribution (or Conditional Kernel) of $X$ given $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$ is a
function $\kappa: \Omega \times \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆ \to [0, 1]$ such that:

1. Measure: For almost every fixed $\omega \in \Omega$The map $B \mapsto \kappa(\omega, B)$ is a
   probability measure on $(S, \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆)$.
2. Measurability: For every fixed set $B \in \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆$The map
   $\omega \mapsto \kappa(\omega, B)$ is $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$-measurable.
3. Consistency: For every $B \in \mathcal◆LB◆◆LB◆'◆RB◆S◆LB◆◆RB◆'◆RB◆$ and $G \in \mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$:
$$

\int_G \kappa(\omega, B) \, dP(\omega) = P(X^◆LB◆-1◆RB◆(B) \cap G)

$$

**Key Distinction from Regular Conditional Probability:**

- **Regular Conditional Probability** evaluates the probability of target sets given a
sub-$\sigma$-algebra $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$.
- **Regular Conditional Distribution** is specifically the conditional law of a Random Element $X$
given $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$.

### Conditional Expectation

Let $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$ be a probability space and let
$X \in L^1(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆, P)$ be an integrable random variable. Let
$\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆ \subseteq \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$ be a sub-$\sigma$-algebra. The conditional
expectation of $X$ given $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$Denoted
$\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X|\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆]$Is the unique (up to almost sure equivalence) random
variable $Z$ satisfying:

1. Measurability: $Z$ is $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$-measurable.
2. Integral Invariance: For all $G \in \mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$:
$$

\int_G Z \, dP = \int_G X \, dP

$$

Note that $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X|\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆]$ is the orthogonal projection of $X$ onto
the subspace of $\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆$-measurable functions if $X \in L^2$.

If regular conditional distribution $\kappa$ exists, then:


$$

\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆[X|\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆] (\omega) = \int_S s \, \kappa(\omega, ds)

$$

### Conditional Fréchet Mean

If $S$ is a metric space $(S, d)$The Conditional Fréchet Mean is the minimizer of the conditional
Fréchet variance. Given the Regular Conditional Distribution $\kappa(\omega, \cdot)$ defined above:


$$

\mu_◆LB◆\mathcal◆LB◆◆LB◆'◆RB◆G◆LB◆◆RB◆'◆RB◆◆RB◆(\omega) = \underset◆LB◆y \in S◆RB◆◆LB◆\arg\min◆RB◆ \int_S d^2(y, s) \, \kappa(\omega,
ds)

$$

:::warning **Rigor Note:** For the integral $\int_S s \, \kappa(\omega, ds)$ in the context of
conditional expectation (and for the Fréchet mean to be well-defined via Bochner integration), $S$
cannot be an arbitrary metric space. It must be a subset of a vector space (specifically, a Banach
space) where addition and scalar multiplication are defined, enabling the Bochner integral. For
general metric spaces, the Fréchet mean is defined via the minimization formulation above, which
does not require linear structure. :::

## Statistical Models and Information Geometry

### Parameter Space

A parameter space is a measurable space $(\Theta, \mathcal◆LB◆◆LB◆'◆RB◆A◆LB◆◆RB◆'◆RB◆)$.

### Parametrization

A parametrization $\psi$ is a mapping
$\psi: \Theta \rightarrow \mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆_1(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S))$ that assigns a
probability measure on each parameter $\Theta$. We denote the measure $P_\theta = \psi(\theta)$.

### Parameter

A parameter is an element $\theta \in \Theta$ used as an argument for $\psi$.

### Statistical Model

A statistical model is the image of parametrization:
$\mathcal◆LB◆◆LB◆'◆RB◆Q◆LB◆◆RB◆'◆RB◆= \{P_\theta \in \mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆_1(S, \mathcal◆LB◆◆LB◆'◆RB◆B◆LB◆◆RB◆'◆RB◆(S)) : P_\theta = \psi(\theta), \theta \in \Theta\}$

### Exponential Family

A parametric family of distributions $\{P_\theta : \theta \in \Theta\}$ with densities $p(x|\theta)$
belongs to the **exponential family** if it can be written in the form:


$$

P(x|\theta) = h(x) \exp\left(\langle \eta(\theta), T(x) \rangle - A(\theta)\right)

$$

Where:

- $h(x) \geq 0$ is the **base measure** (does not depend on $\theta$)
- $\eta(\theta) \in \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ is the **natural parameter**
- $T(x) \in \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ is the **sufficient statistic**
- $A(\theta) = \log \int h(x) \exp(\langle \eta(\theta), T(x) \rangle) \, dx$ is the **log-partition
  function** (normalization constant)

_Canonical Form:_ When $\eta(\theta) = \theta$The family is in canonical form:
$p(x|\eta) = h(x) \exp(\langle \eta, T(x) \rangle - A(\eta))$.

_Examples:_ Gaussian, Bernoulli, Poisson, Gamma, Beta, Dirichlet, Categorical (with fixed support
size), Wishart.

_Relevance:_ Exponential families have closed-form conjugate priors, tractable M-projections, and
Fisher Information equal to the Hessian of $A(\theta)$. They are foundational in Variational
Inference, Generalized Linear Models, and natural gradient methods.

### Dominated Statistical Model

The model $\mathcal◆LB◆◆LB◆'◆RB◆Q◆LB◆◆RB◆'◆RB◆_\theta : \theta \in \Theta$ is called dominated if there exists a
$\sigma$-finite reference measure $\lambda$ such that
$\forall \theta \in \Theta, P_\theta \ll \lambda$.

### Likelihood Function

Given a dominated model with reference measure $\lambda$The density
$f_\theta = \frac◆LB◆dP_\theta◆RB◆◆LB◆d\lambda◆RB◆$ exists. For a fixed observation $s \in S$The likelihood
function $L_s: \Theta \rightarrow [0, \infty)$ is defined by:


$$

\begin◆LB◆equation◆RB◆ L*s(\theta) = f*\theta(s), \quad \mathrm◆LB◆where◆RB◆ ◆LB◆◆RB◆ f*\theta =
\frac◆LB◆dP*\theta◆RB◆◆LB◆d\lambda◆RB◆ \end◆LB◆equation◆RB◆

$$

### Bayes' Theorem (Measure-Theoretic)

Let $(\Theta, \mathcal◆LB◆◆LB◆'◆RB◆A◆LB◆◆RB◆'◆RB◆)$ be a parameter space equipped with a prior probability measure
$\Pi$. Let $P_\theta$ be the likelihood (data distribution) for each $\theta \in \Theta$. Given an
observation $x$The **posterior distribution** $\Pi(\cdot | x)$ is defined via the Radon-Nikodym
derivative:


$$

\frac◆LB◆d\Pi(\cdot | x)◆RB◆◆LB◆d\Pi◆RB◆(\theta) = \frac◆LB◆p(x | \theta)◆RB◆◆LB◆\int\_\Theta p(x | \theta') \,
d\Pi(\theta')◆RB◆

$$

Equivalently, in measure notation:


$$

\Pi(d\theta | x) = \frac◆LB◆p(x | \theta)◆RB◆◆LB◆\int\_\Theta p(x | \theta') \, \Pi(d\theta')◆RB◆ \Pi(d\theta)

$$

Where $p(x | \theta) = \frac◆LB◆dP_\theta◆RB◆◆LB◆d\lambda◆RB◆(x)$ is the likelihood density with respect to a
reference measure $\lambda$.

_Requirements:_ The denominator (marginal likelihood / evidence) must be finite and non-zero for the
posterior to be well-defined.

_Relevance:_ This is the rigorous foundation of Bayesian ML, Variational Autoencoders (VAEs), and
posterior inference. The measure-theoretic formulation handles both continuous and discrete
parameter spaces uniformly.

### Score Function (Fisher Score)

Let $\{P_\theta : \theta \in \Theta\}$ be a parametric model with densities $f(x; \theta)$. The
**Fisher score function** is the gradient of the log-likelihood with respect to parameters:


$$

S(x; \theta) = \nabla\_\theta \log f(x; \theta)

$$

_Properties:_

- $\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆x \sim P_\theta◆RB◆[s(x; \theta)] = 0$ (under regularity conditions)
- $\mathrm◆LB◆Cov◆RB◆◆LB◆◆RB◆(s(x; \theta)) = \mathcal◆LB◆◆LB◆'◆RB◆I◆LB◆◆RB◆'◆RB◆(\theta)$ (Fisher Information Matrix)

_Relevance:_ Essential for the REINFORCE algorithm in Reinforcement Learning and Fisher Information
analysis.

### Stein Score (Data Score)

In modern ML, particularly Score-Based Generative Models and Diffusion Models, the "score" refers to
the **Stein score** (or data score):


$$

S(x) = \nabla_x \log p(x)

$$

This is the gradient of the log-density with respect to the **data** $x$Not the parameters $\theta$.
The Stein score points in the direction of steepest increase in log-probability within the data
space.

_Key Distinction:_

- **Fisher Score** $\nabla_\theta \log p(x; \theta)$: Gradient in parameter space; used in classical
  statistics and RL.
- **Stein Score** $\nabla_x \log p(x)$: Gradient in data space; used in Langevin Dynamics, Score
  Matching, and Diffusion Models.

### Total Variation Distance

For two probability measures $P$ and $Q$ on $(\Omega, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$:


$$

\delta(P, Q) = \sup_◆LB◆A \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆◆RB◆ |P(A) - Q(A)|

$$

If measures possess densities $p$ and $q$ w.r.t a reference measure $\mu$:


$$

\delta(P, Q) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \int\_\Omega |p(x) - q(x)| \, d\mu(x)

$$

### Fisher Information (Matrix)

Let $\{P_\theta : \theta \in \Theta\}$ be a parametric model with densities $f(x; \theta)$. Under
regularity conditions (twice differentiability), the Fisher Information Matrix
$\mathcal◆LB◆◆LB◆'◆RB◆I◆LB◆◆RB◆'◆RB◆(\theta)$ is:


$$

\mathcal◆LB◆◆LB◆'◆RB◆I◆LB◆◆RB◆'◆RB◆(\theta)*◆LB◆ij◆RB◆ = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆*◆LB◆x \sim P\_\theta◆RB◆ \left[ \frac◆LB◆\partial◆RB◆◆LB◆\partial
\theta_i◆RB◆ \log f(x; \theta) \cdot \frac◆LB◆\partial◆RB◆◆LB◆\partial \theta_j◆RB◆ \log f(x; \theta) \right]

$$

It represents the curvature of the KL-divergence near $\theta$.

### Kullback-Leibler Divergence

Let $P$ and $Q$ be two probability measures on $(S, \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆)$. If $P \ll Q$The
Kullback-Leibler Divergence is defined as the expectation of the log-likelihood ratio with respect
to $P$:


$$

D*◆LB◆KL◆RB◆(P \| Q) = \int_S \log \left( \frac◆LB◆dP◆RB◆◆LB◆dQ◆RB◆ \right) \, dP = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆*◆LB◆x \sim P◆RB◆ \left[
\log \frac◆LB◆dP◆RB◆◆LB◆dQ◆RB◆(x) \right]

$$

If $P \not\ll Q$Then $D_◆LB◆KL◆RB◆(P \| Q) = +\infty$.

:::warning **KL Divergence is NOT a Metric:**

Despite its widespread use, KL divergence fails to satisfy the axioms of a metric:

1. **Asymmetry:** $D_◆LB◆KL◆RB◆(P \| Q) \neq D_◆LB◆KL◆RB◆(Q \| P)$ . This is why I-Projection and M-Projection
   yield different results.
2. **Triangle inequality violation:** $D_◆LB◆KL◆RB◆(P \| R) \not\leq D_◆LB◆KL◆RB◆(P \| Q) + D_◆LB◆KL◆RB◆(Q \| R)$ .

This motivates the use of alternative divergences that **are** proper metrics:

- **Wasserstein Metric:** A true metric with meaningful gradients even for disjoint supports.
- **Jensen-Shannon Divergence:** Symmetric and bounded; $\sqrt◆LB◆D_◆LB◆JS◆RB◆◆RB◆$ is a true metric.

:::

### Jensen-Shannon Divergence

The Jensen-Shannon Divergence (JSD) is a symmetrized and smoothed version of KL divergence:
$$D_◆LB◆JS◆RB◆(P \| Q) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ D_◆LB◆KL◆RB◆(P \| M) + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ D_◆LB◆KL◆RB◆(Q \| M)$$ Where
$M = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(P + Q)$.

_Properties:_

- Symmetric: $D_◆LB◆JS◆RB◆(P \| Q) = D_◆LB◆JS◆RB◆(Q \| P)$
- Bounded: $0 \leq D_◆LB◆JS◆RB◆(P \| Q) \leq \log 2$
- $D_◆LB◆JS◆RB◆(P \| Q) = 0 \iff P = Q$

_Relevance:_ The original GAN objective minimizes JSD between the data distribution and generated
distribution.

### Chain Rule for KL Divergence

Let $X, Y$ be random variables with joint distributions $P_◆LB◆XY◆RB◆$ and $Q_◆LB◆XY◆RB◆$. Assuming the joint
distributions factorize as $P_◆LB◆XY◆RB◆ = P_X P_◆LB◆Y|X◆RB◆$ and $Q_◆LB◆XY◆RB◆ = Q_X Q_◆LB◆Y|X◆RB◆$Then: $$ D_◆LB◆KL◆RB◆(P_◆LB◆XY◆RB◆
\| Q_◆LB◆XY◆RB◆) = D_◆LB◆KL◆RB◆(P_X \| Q_X) + \mathbb◆LB◆E◆RB◆_◆LB◆x \sim P_X◆RB◆ [D_◆LB◆KL◆RB◆(P_◆LB◆Y|X=x◆RB◆ \| Q_◆LB◆Y|X=x◆RB◆)]
$$

### Mutual Information

Let $X$ and $Y$ be random variables with joint distribution $P_◆LB◆XY◆RB◆$ and marginals $P_X$, $P_Y$. The
**Mutual Information** $I(X; Y)$ is the KL divergence between the joint and the product of
marginals:

$$
I(X; Y) = D_◆LB◆KL◆RB◆(P_◆LB◆XY◆RB◆ \| P_X \otimes P_Y) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆P_◆LB◆XY◆RB◆◆RB◆\left[\log \frac◆LB◆p(x,y)◆RB◆◆LB◆p(x)p(y)◆RB◆\right]
$$

_Properties:_

- $I(X; Y) = I(Y; X)$ (symmetry)
- $I(X; Y) = 0 \iff X \perp Y$
- $I(X; Y) = H(X) - H(X|Y) = H(Y) - H(Y|X)$

_Relevance:_ Essential for InfoGAN, Contrastive Learning (InfoNCE), and representation learning.

### Entropy (Shannon and Differential)

For a probability measure $P$ with density $p = dP/d\lambda$ with respect to a reference measure
$\lambda$:

- **Differential Entropy** (continuous case):
  $H(P) = -\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_P[\log p(X)] = -\int p(x) \log p(x) \, d\lambda(x)$
- **Shannon Entropy** (discrete case): $H(P) = -\sum_◆LB◆x◆RB◆ p(x) \log p(x)$

Note: Differential entropy can be negative (unlike Shannon entropy which is non-negative). Entropy
measures the average uncertainty or "surprise" in a distribution.

### Cross-entropy

The cross-entropy $H(P, Q)$ is **fundamentally defined** as the expected negative log-likelihood
under $P$:

$$
H(P, Q) \triangleq -\mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆x \sim P◆RB◆[\log q(x)] = -\int p(x) \log q(x) \, d\lambda(x)
$$

This decomposes into:

$$
H(P, Q) = H(P) + D_◆LB◆KL◆RB◆(P \Vert Q)
$$

_Intuition:_ $D_◆LB◆KL◆RB◆$ measures the "extra" bits needed to encode data from $P$ using a code
optimized for $Q$While Cross-Entropy $H(P, Q)$ measures the "total" bits. Minimizing cross-entropy
is equivalent to minimizing KL divergence since $H(P)$ is constant with respect to $Q$.

:::warning **Caveats for Continuous Distributions:**

1. This decomposition requires $P \ll Q$ (absolute continuity) and the integrals to be absolutely
   convergent.
2. For differential entropy (continuous case), $H(P)$ can be **negative**, unlike Shannon entropy
   which is always non-negative.
3. In ML, cross-entropy is computed directly as $-\log q(x)$ without explicitly computing $H(P)$.

:::

### Information Projection (I-Projection) vs. Moment Projection (M-Projection)

Given a distribution $P$ and a family of distributions $\mathcal◆LB◆◆LB◆'◆RB◆Q◆LB◆◆RB◆'◆RB◆$:

**M-Projection (Moment Projection / Forward KL):**

$$
Q^*_◆LB◆M◆RB◆ = \arg\min_◆LB◆Q \in \mathcal◆LB◆◆LB◆'◆RB◆Q◆LB◆◆RB◆'◆RB◆◆RB◆ D_◆LB◆KL◆RB◆(P \| Q)
$$

- **Mass-covering behavior**: Since $P$ is in the numerator, wherever $P(x) > 0$, $Q(x)$ must also be
  $> 0$ to avoid infinite penalty. This forces $Q$ to spread out and cover all modes of $P$.
- Used in Maximum Likelihood Estimation (MLE) and Expectation Propagation
- Tends to overestimate variance

**I-Projection (Information Projection / Reverse KL):**

$$
Q^*_◆LB◆I◆RB◆ = \arg\min_◆LB◆Q \in \mathcal◆LB◆◆LB◆'◆RB◆Q◆LB◆◆RB◆'◆RB◆◆RB◆ D_◆LB◆KL◆RB◆(Q \| P)
$$

- **Mode-seeking behavior**: Since $Q$ is in the numerator, wherever $P(x) \approx 0$, $Q(x)$ must
  also be $\approx 0$ to avoid penalizing the objective. This causes $Q$ to collapse onto a single
  mode of $P$.
- Used in Variational Inference (VI)
- Tends to underestimate variance

### Evidence Lower Bound (ELBO)

For a latent variable model with observed data $x$Latent variables $z$And approximate posterior
$q_\phi(z|x)$:

$$
\log p(x) \geq \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆q_\phi(z|x)◆RB◆[\log p(x,z)] - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆q_\phi(z|x)◆RB◆[\log q_\phi(z|x)] = \mathcal◆LB◆◆LB◆'◆RB◆L◆LB◆◆RB◆'◆RB◆(\phi)
$$

Equivalently:

$$
\mathcal◆LB◆◆LB◆'◆RB◆L◆LB◆◆RB◆'◆RB◆(\phi) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆q_\phi(z|x)◆RB◆[\log p(x|z)] - D_◆LB◆KL◆RB◆(q_\phi(z|x) \| p(z))
$$

_Relevance:_ Foundation of Variational Autoencoders (VAEs) and Variational Inference.

## Probability Metrics and Generative Foundations

### Reparameterization Trick

To compute gradients of expectations $\nabla_\phi \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆z \sim q_\phi◆RB◆[f(z)]$We cannot
directly push the gradient through the distribution. The reparameterization trick rewrites the
sampling process using a deterministic transformation:

If $z = T_\phi(\epsilon)$ where $\epsilon \sim p(\epsilon)$ (a fixed, parameter-free distribution)
and $T_\phi$ is a diffeomorphism, then by LOTUS:

$$\nabla_\phi \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆z \sim q_\phi◆RB◆[f(z)] = \nabla_\phi \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆\epsilon \sim p◆RB◆[f(T_\phi(\epsilon))] = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆\epsilon \sim p◆RB◆[\nabla_\phi f(T_\phi(\epsilon))]$$

_Relevance:_ Foundation of VAE training and differentiable Monte Carlo estimation.

### Wasserstein Metric (Kantorovich-Rubinstein)

Let $\mu, \nu \in \mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆(S)$ where $(S, d)$ is a Polish space. The $p$-Wasserstein
distance is:
$$W_p(\mu, \nu) = \left( \inf_◆LB◆\gamma \in \Pi(\mu, \nu)◆RB◆ \int_◆LB◆S \times S◆RB◆ d(x, y)^p \, d\gamma(x, y) \right)^◆LB◆1/p◆RB◆$$
Where $\Pi(\mu, \nu)$ is the set of joint distributions (couplings) with marginals $\mu$ and $\nu$.

_Duality (for $p=1$):_ Via Kantorovich-Rubinstein,
$W_1(\mu, \nu) = \sup \{ \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_\mu[f] - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_\nu[f] : \lVert f \rVert_◆LB◆\mathrm◆LB◆Lip◆RB◆◆LB◆◆RB◆◆RB◆ \leq 1 \◆RB◆$.

_Relevance:_ Foundation of Wasserstein GANs; provides meaningful gradients even when distributions
have disjoint support.

### Maximum Mean Discrepancy (MMD)

A metric on the space of probability measures derived from an RKHS. Let $P, Q$ be probability
measures and $\mathcal◆LB◆◆LB◆'◆RB◆H◆LB◆◆RB◆'◆RB◆$ be an RKHS with unit ball $\mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆$.

$$
\mathrm◆LB◆MMD◆RB◆◆LB◆◆RB◆(P, Q) = \sup_◆LB◆f \in \mathcal◆LB◆◆LB◆'◆RB◆F◆LB◆◆RB◆'◆RB◆◆RB◆ \left( \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆x \sim P◆RB◆[f(x)] - \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆y \sim Q◆RB◆[f(y)] \right)
$$

_Relevance:_ Used in Generative Moment Matching Networks (GMMN) and as a critic in GANs. Can be
computed efficiently via kernel tricks without explicit density estimation.

### Fisher Divergence

The **Fisher Divergence** (or Score Matching objective) measures the discrepancy between score
functions of two distributions. For data distribution $p_◆LB◆\mathrm◆LB◆data◆RB◆◆LB◆◆RB◆◆RB◆$ and model distribution
$p_\theta$:

$$
J(\theta) = \mathbb◆LB◆◆LB◆'◆RB◆E◆LB◆◆RB◆'◆RB◆_◆LB◆p_◆LB◆\mathrm◆LB◆data◆RB◆◆LB◆◆RB◆◆RB◆◆RB◆\left[ \lVert \nabla_x \log p_◆LB◆\mathrm◆LB◆data◆RB◆◆LB◆◆RB◆◆RB◆(x) - \nabla_x \log p_\theta(x) \rVert^2 \right]
$$

_Key Property:_ Minimizing the Fisher divergence is equivalent to Score Matching. Unlike KL
divergence, it does not require computing the normalizing constant of $p_\theta$.

_Relevance:_ Foundation of Score-Based Generative Modeling and denoising score matching.

### Pinsker's Inequality

Pinsker's Inequality bounds the Total Variation distance using KL divergence:

$$
\delta(P, Q) \leq \sqrt◆LB◆\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ D_◆LB◆KL◆RB◆(P \| Q)◆RB◆
$$

Where $\delta(P, Q)$ is the Total Variation distance and $D_◆LB◆KL◆RB◆(P \| Q)$ is the KL divergence.

_Relevance:_ Provides a bridge between information-theoretic bounds and probabilistic bounds.
Frequently used in generative modeling proofs to convert KL bounds into TV bounds.

### Tightness and Prokhorov's Theorem

**Tightness:** A family of probability measures $\mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆$ on a Polish space $(S, d)$ is
**tight** if for every $\epsilon > 0$There exists a compact set $K_\epsilon \subseteq S$ such that:

$$
\sup_◆LB◆\mu \in \mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆◆RB◆ \mu(S \setminus K_\epsilon) < \epsilon
$$

_Intuition:_ Tightness prevents probability mass from "escaping to infinity."

**Prokhorov's Theorem:** Let $(S, d)$ be a Polish space. A family of probability measures
$\mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆$ is **relatively compact** (every sequence has a weakly convergent subsequence)
if and only if $\mathcal◆LB◆◆LB◆'◆RB◆P◆LB◆◆RB◆'◆RB◆$ is tight.

_Relevance:_ Provides the theoretical foundation for why Wasserstein spaces are well-behaved.
Essential for proving existence of limiting distributions in generative model training.

### Langevin Dynamics

Langevin Dynamics is an SDE that samples from a target distribution $p(x)$ using its Stein score:

$$
DX_t = \nabla_x \log p(X_t) \, dt + \sqrt◆LB◆2◆RB◆ \, dW_t
$$

Where $W_t$ is a Wiener process and $\nabla_x \log p(x)$ is the Stein score.

_Discretization (Unadjusted Langevin Algorithm):_

$$
X_◆LB◆t+1◆RB◆ = x_t + \eta \nabla_x \log p(x_t) + \sqrt◆LB◆2\eta◆RB◆ \, \epsilon_t, \quad \epsilon_t \sim \mathcal◆LB◆◆LB◆'◆RB◆N◆LB◆◆RB◆'◆RB◆(0, I)
$$

_Relevance:_ Under appropriate conditions, the stationary distribution of Langevin Dynamics is
exactly $p(x)$. This is the foundation of Score-Based Generative Models: the reverse-time SDE in
diffusion models uses the Stein score to guide sampling.

## Philosophy

### Probability

All mathematical axioms above are accepted by all schools, but there is a divide on the
interpretation of probability measure $P$ and the nature of parameter $\theta$. This divide is based
on the Frequentist and Bayesian interpretations.

#### Frequentist

Frequentist view probability as an expected fraction of frequency of event occurring as the number
of repetition approaches infinity. This leads to the following viewpoints:

The measure $P(A)$ represent the limit of relative frequency of event $A$ in an infinite sequence of
identical, independent repetition of the experiment.

The parameter $\theta$ is fixed, non-random element of the set $\Theta$An unknown constant of
nature. A probability measure on $\Theta$ will therefore be undefined.

#### Bayesian

Bayesian interpretation views probability as the degree of belief of an event occurring. With the
viewpoints:

The measure $P(A)$ represent a degree of belief of event $A$ given the current state of information.

The parameter $\theta$ itself is treated as a random element mapping from an underlying probability
space $\Omega$ to the parameter space $\Theta$.

:::info In practice, we often work directly with a prior probability measure defined on the
parameter space $\Theta$ :::

### Uncertainty

#### Epistemic/Model Uncertainty

The uncertainty led by ignorance of underlying causes or mechanism generating data.

#### Aleatoric/Data Uncertainty

Intrinsic variability that cannot be reduced even with a larger data set. For example, a coin toss
has a probability of $p = 0.5$There is no epistemic uncertainty here but the outcome is
unpredictable because of data uncertainty.

### Manifold Hypothesis

Let $\mathcal◆LB◆◆LB◆'◆RB◆X◆LB◆◆RB◆'◆RB◆ = \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ be the ambient data space. The Manifold Hypothesis
states that the probability mass of the data distribution $P_◆LB◆data◆RB◆$ is supported on (or
concentrated near) a topological manifold $\mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆ \subseteq \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^d$ where
$\dim(\mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆) \ll d$. Formally, $\mathrm◆LB◆supp◆RB◆◆LB◆◆RB◆(P_◆LB◆data◆RB◆) \subseteq \mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆$.
Explains why high-dimensional generative models (GANs, VAEs) work: they map a low-dimensional latent
space $\mathcal◆LB◆◆LB◆'◆RB◆Z◆LB◆◆RB◆'◆RB◆ \subseteq \mathbb◆LB◆◆LB◆'◆RB◆R◆LB◆◆RB◆'◆RB◆^k$ to $\mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆$.

## Common Pitfalls

1. Not making connections between different topics within the subject to build a coherent
   understanding.

2. Ignoring feedback from marked work and failing to address recurring weaknesses.

3. Focusing only on content knowledge without developing exam technique and question-answering
   skills.

4. Memorising content without understanding the underlying principles — this leads to poor
   application in unfamiliar contexts.
