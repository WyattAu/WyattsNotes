---
title: CBSE Mathematics Study Guide
date: 2026-05-31
description:
  'Comprehensive CBSE Class 11-12 Mathematics study guide covering Sets and Functions, Algebra, Calculus,
  Coordinate Geometry, Trigonometry, Probability and Statistics. Includes key formulas, exam tips, and
  common mistakes.'
tags:
  - cbse
  - maths
categories:
  - cbse
slug: maths
---

## Overview

This guide covers the **CBSE Class 11 and 12 Mathematics** syllabus (NCERT). It is structured by
topic with definitions, key results, worked examples, and exam-focused advice.

The CBSE Class 12 board exam carries **80 marks** (theory) + **20 marks** (internal assessment). The
paper consists of objective questions (MCQs), short-answer questions (2-3 marks), and long-answer
questions (5-6 marks).

---

## 1. Sets and Functions

### 1.1 Sets and Set Notation

A **set** is a well-defined collection of distinct objects. Sets are denoted by capital letters
($A, B, C$) and elements by lowercase letters ($a, b, c$).

**Notation.**

- $a \in A$: $a$ is an element of $A$
- $a \notin A$: $a$ is not an element of $A$
- $A \subseteq B$: $A$ is a subset of $B$ (every element of $A$ is also in $B$)
- $A \subset B$: $A$ is a proper subset of $A \neq B$
- $\emptyset$: the empty set
- $|A|$ or $n(A)$: the cardinality (number of elements) of $A$

**Set operations.**

| Operation | Notation | Meaning |
| --- | --- | --- |
| Union | $A \cup B$ | All elements in $A$ or $B$ or both |
| Intersection | $A \cap B$ | All elements in both $A$ and $B$ |
| Complement | $A'$ or $\bar{A}$ | All elements in the universal set $U$ not in $A$ |
| Difference | $A - B$ | Elements in $A$ but not in $B$ |

**Laws.**

- **Commutative:** $A \cup B = B \cup A$; $A \cap B = B \cap A$
- **Associative:** $(A \cup B) \cup C = A \cup (B \cup C)$
- **Distributive:** $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
- **De Morgan:** $(A \cup B)' = A' \cap B'$ and $(A \cap B)' = A' \cup B'$

### 1.2 Venn Diagrams

Venn diagrams represent sets as overlapping circles inside a rectangle (the universal set).

$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

For three sets:

$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(A \cap C) - n(B \cap C) + n(A \cap B \cap C)$$

### 1.3 Relations

A **relation** $R$ from set $A$ to set $B$ is a subset of $A \times B$.

**Types of relations:**

- **Reflexive:** $(a, a) \in R$ for all $a \in A$
- **Symmetric:** $(a, b) \in R \Rightarrow (b, a) \in R$
- **Transitive:** $(a, b) \in R$ and $(b, c) \in R \Rightarrow (a, c) \in R$
- **Equivalence relation:** reflexive, symmetric, and transitive

### 1.4 Functions

A function $f: A \to B$ maps each element of $A$ to exactly one element of $B$.

**Key terms:**

- **Domain:** the set of all valid inputs
- **Codomain:** the set $B$ into which $f$ maps
- **Range:** the set of actual outputs $\{f(a) : a \in A\}$

**Types of functions:**

- **One-one (injective):** $f(a_1) = f(a_2) \Rightarrow a_1 = a_2$
- **Onto (surjective):** range = codomain (every element of $B$ is mapped to)
- **Bijective:** both one-one and onto

**Composition.** If $f: A \to B$ and $g: B \to C$, then $(g \circ f)(x) = g(f(x))$.

**Inverse function.** If $f$ is bijective, then $f^{-1}$ exists and $f^{-1}(f(x)) = x$.

---

## 2. Algebra

### 2.1 Matrices

A matrix is a rectangular array of numbers. An $m \times n$ matrix has $m$ rows and $n$ columns.

**Operations.**

- **Addition:** $A + B$ is defined only when $A$ and $B$ have the same order
- **Scalar multiplication:** $kA$ multiplies each entry by $k$
- **Matrix multiplication:** If $A$ is $m \times p$ and $B$ is $p \times n$, then $AB$ is $m \times n$

**Transpose.** $A^T$ is obtained by interchanging rows and columns. $(AB)^T = B^T A^T$.

### 2.2 Determinants

The determinant of a $2 \times 2$ matrix:

$$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

For a $3 \times 3$ matrix, expand by cofactors along any row or column:

$$|A| = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}$$

where $C_{ij} = (-1)^{i+j} M_{ij}$ and $M_{ij}$ is the minor (determinant after removing row $i$, column $j$).

**Properties:**

- $|AB| = |A| \cdot |B|$
- $|A^T| = |A|$
- $|kA| = k^n |A|$ for an $n \times n$ matrix
- If any two rows or columns are identical, $|A| = 0$

### 2.3 Inverse of a Matrix

For a non-singular square matrix $A$ ($|A| \neq 0$):

$$A^{-1} = \frac{1}{|A|} \text{adj}(A)$$

where $\text{adj}(A)$ is the adjoint (transpose of the cofactor matrix).

**Solving systems of linear equations.** For $AX = B$ where $A$ is $n \times n$:

- If $|A| \neq 0$: unique solution $X = A^{-1}B$
- If $|A| = 0$ and $(\text{adj } A)B \neq 0$: no solution (inconsistent)
- If $|A| = 0$ and $(\text{adj } A)B = 0$: infinitely many solutions

### 2.4 Complex Numbers

A complex number is $z = a + bi$ where $a$ is the real part, $b$ is the imaginary part, and $i^2 = -1$.

**Modulus:** $|z| = \sqrt{a^2 + b^2}$

**Conjugate:** $\bar{z} = a - bi$; $z\bar{z} = a^2 + b^2 = |z|^2$

**Polar form:** $z = r(\cos\theta + i\sin\theta)$ where $r = |z|$ and $\theta = \arg(z)$.

### 2.5 Quadratic Equations

The general quadratic $ax^2 + bx + c = 0$ has roots:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Discriminant** $\Delta = b^2 - 4ac$:

- $\Delta > 0$: two distinct real roots
- $\Delta = 0$: one repeated real root
- $\Delta < 0$: two complex conjugate roots

**Relations between roots $\alpha, \beta$:**

- $\alpha + \beta = -b/a$
- $\alpha\beta = c/a$

---

## 3. Calculus

### 3.1 Limits

$$\lim_{x \to a} f(x) = L$$

means $f(x)$ approaches $L$ as $x$ approaches $a$.

**Standard limits:**

$$\lim_{x \to 0} \frac{\sin x}{x} = 1 \qquad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0 \qquad \lim_{x \to \infty}\left(1 + \frac{1}{x}\right)^x = e$$

**L'Hôpital's Rule.** If $\lim_{x \to a}\frac{f(x)}{g(x)}$ is of the form $\frac{0}{0}$ or $\frac{\infty}{\infty}$, then:

$$\lim_{x \to a}\frac{f(x)}{g(x)} = \lim_{x \to a}\frac{f'(x)}{g'(x)}$$

provided the right-hand limit exists.

### 3.2 Derivatives

**From first principles:**

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Standard derivatives:**

| $f(x)$ | $f'(x)$ |
| --- | --- |
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |
| $a^x$ | $a^x \ln a$ |

**Rules:**

- **Sum:** $(f + g)' = f' + g'$
- **Product:** $(fg)' = f'g + fg'$
- **Quotient:** $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$
- **Chain:** $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$

### 3.3 Applications of Derivatives

**Rate of change.** If $y = f(x)$, then $\dfrac{dy}{dx}$ is the instantaneous rate of change.

**Increasing/Decreasing.** $f$ is increasing where $f'(x) > 0$ and decreasing where $f'(x) < 0$.

**Maxima and Minima.** At a critical point $f'(x) = 0$:

- **Second derivative test:** $f''(x) < 0 \Rightarrow$ local max; $f''(x) > 0 \Rightarrow$ local min
- If $f''(x) = 0$, use the first derivative test

**Tangent and Normal.** At a point $(x_0, y_0)$ on $y = f(x)$:

- Tangent gradient: $f'(x_0)$
- Tangent equation: $y - y_0 = f'(x_0)(x - x_0)$
- Normal gradient: $-1/f'(x_0)$

### 3.4 Integration

Integration is the reverse of differentiation.

**Indefinite integrals (antiderivatives):**

$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) \qquad \int \frac{1}{x}\,dx = \ln|x| + C$$

**Methods:**

- **Substitution:** $\int f(g(x))g'(x)\,dx = \int f(u)\,du$ where $u = g(x)$
- **Integration by parts:** $\int u\,dv = uv - \int v\,du$

**Definite integrals:**

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

**Area under a curve:**

$$\text{Area between } f(x) \text{ and } x\text{-axis from } a \text{ to } b = \left|\int_a^b f(x)\,dx\right|$$

---

## 4. Coordinate Geometry

### 4.1 Straight Lines

**Slope-intercept form:** $y = mx + c$

**Point-slope form:** $y - y_1 = m(x - x_1)$

**Two-point form:** $y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$

**Distance formula:** $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

**Distance from a point to a line $Ax + By + C = 0$:**

$$d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$$

**Angle between two lines with slopes $m_1$ and $m_2$:**

$$\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1m_2}\right|$$

### 4.2 Conic Sections

**Circle.** Centre $(h, k)$, radius $r$:

$$(x - h)^2 + (y - k)^2 = r^2$$

General form: $x^2 + y^2 + 2gx + 2fy + c = 0$; centre $(-g, -f)$, radius $\sqrt{g^2 + f^2 - c}$.

**Parabola.** Focus-directrix form $y^2 = 4ax$:

- Focus: $(a, 0)$; Directrix: $x = -a$; Axis: $y = 0$; Latus rectum: $4a$

**Ellipse.** $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ where $a > b$:

- Foci: $(\pm c, 0)$ where $c^2 = a^2 - b^2$
- Eccentricity: $e = c/a < 1$
- Latus rectum length: $2b^2/a$

**Hyperbola.** $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$:

- Foci: $(\pm c, 0)$ where $c^2 = a^2 + b^2$
- Eccentricity: $e = c/a > 1$
- Asymptotes: $y = \pm \dfrac{b}{a}x$
- Latus rectum length: $2b^2/a$

---

## 5. Trigonometry

### 5.1 Identities

**Pythagorean identities:**

$$\sin^2\theta + \cos^2\theta = 1 \qquad 1 + \tan^2\theta = \sec^2\theta \qquad 1 + \cot^2\theta = \csc^2\theta$$

**Compound angle:**

$$\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$$
$$\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$$
$$\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$$

**Double angle:**

$$\sin 2A = 2\sin A\cos A \qquad \cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A$$

### 5.2 Trigonometric Equations

**General solutions:**

- $\sin\theta = \sin\alpha \Rightarrow \theta = n\pi + (-1)^n\alpha$
- $\cos\theta = \cos\alpha \Rightarrow \theta = 2n\pi \pm \alpha$
- $\tan\theta = \tan\alpha \Rightarrow \theta = n\pi + \alpha$

### 5.3 Inverse Trigonometric Functions

| Function | Domain | Range |
| --- | --- | --- |
| $\sin^{-1}x$ | $[-1, 1]$ | $[-\pi/2, \pi/2]$ |
| $\cos^{-1}x$ | $[-1, 1]$ | $[0, \pi]$ |
| $\tan^{-1}x$ | $\mathbb{R}$ | $(-\pi/2, \pi/2)$ |

**Key identities:**

$$\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2} \qquad \tan^{-1}x + \tan^{-1}\frac{1}{x} = \frac{\pi}{2}\text{ for } x > 0$$

### 5.4 Properties of Triangles

**Sine rule:** $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$

**Cosine rule:** $a^2 = b^2 + c^2 - 2bc\cos A$

**Area:** $\Delta = \frac{1}{2}ab\sin C = \sqrt{s(s-a)(s-b)(s-c)}$ where $s = \frac{a+b+c}{2}$

---

## 6. Probability and Statistics

### 6.1 Measures of Central Tendency

**Mean (arithmetic):** $\bar{x} = \dfrac{\sum f_i x_i}{\sum f_i}$

**Median:** the middle value when data is arranged in order

**Mode:** the most frequently occurring value

For grouped data, the median and mode use interpolation formulas from the cumulative frequency distribution.

### 6.2 Variance and Standard Deviation

**Variance:**

$$\sigma^2 = \frac{\sum f_i(x_i - \bar{x})^2}{\sum f_i} = \frac{\sum f_i x_i^2}{\sum f_i} - \bar{x}^2$$

**Standard deviation:** $\sigma = \sqrt{\text{variance}}$

For combined data from two groups of sizes $n_1, n_2$ with means $\bar{x}_1, \bar{x}_2$ and variances $\sigma_1^2, \sigma_2^2$:

$$\bar{x}_{\text{combined}} = \frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}$$

### 6.3 Probability

**Rules:**

- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- $P(A') = 1 - P(A)$
- $P(A \cap B) = P(A) \cdot P(B|A)$ (multiplication rule)
- **Independent events:** $P(A \cap B) = P(A) \cdot P(B)$

**Conditional probability:** $P(A|B) = \dfrac{P(A \cap B)}{P(B)}$

**Bayes' theorem:** $P(A|B) = \dfrac{P(B|A) \cdot P(A)}{P(B)}$

### 6.4 Binomial Distribution

A binomial experiment has $n$ independent trials, each with probability $p$ of success.

$$P(X = r) = \binom{n}{r} p^r (1-p)^{n-r}$$

**Mean:** $\mu = np$

**Variance:** $\sigma^2 = np(1-p)$

---

## 7. Key Formulas

| Topic | Formula |
| --- | --- |
| Quadratic roots | $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ |
| Distance between points | $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ |
| Sum of AP | $S_n = \frac{n}{2}[2a + (n-1)d]$ |
| Sum of GP | $S_n = \frac{a(r^n - 1)}{r - 1}$ |
| $n$th derivative of $e^{ax}$ | $a^n e^{ax}$ |
| $\int e^{ax}\,dx$ | $\frac{1}{a}e^{ax} + C$ |
| $\int \frac{1}{1+x^2}\,dx$ | $\tan^{-1}x + C$ |
| Binomial coefficient | $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ |
| Circle equation | $(x-h)^2 + (y-k)^2 = r^2$ |
| Euler's formula | $e^{i\theta} = \cos\theta + i\sin\theta$ |

---

## 8. Exam Tips

1. **Show all working.** CBSE awards method marks even if the final answer is wrong. Never skip steps.
2. **Manage time carefully.** The paper is 3 hours; spend roughly 1 minute per mark. Attempt all questions.
3. **Memorise the NCERT formulas.** Most exam questions are directly based on NCERT textbook derivations and formulas.
4. **Draw clean diagrams.** In coordinate geometry and trigonometry, a well-labelled diagram often earns partial marks.
5. **Check the domain of inverse trigonometric functions.** Marks are frequently lost by giving values outside the principal range.
6. **Use step-marking strategy.** For 6-mark questions, write each step on a new line. Examiners look for specific intermediate results.
7. **Practise previous-year papers.** CBSE tends to repeat question patterns. At minimum, solve the last 5 years' papers.

---

## 9. Common Mistakes

1. **Forgetting the constant of integration** $+C$ in indefinite integrals — this is penalised in almost every paper.
2. **Incorrect domain for inverse trig functions.** Remember: $\sin^{-1}$ maps to $[-\pi/2, \pi/2]$; $\cos^{-1}$ maps to $[0, \pi]$.
3. **Confusing range and codomain.** The range is the set of actual outputs, not the entire codomain.
4. **Arithmetic errors in determinants.** Sign errors in cofactor expansion are extremely common — double-check $(-1)^{i+j}$.
5. **Applying L'Hôpital's rule to non-indeterminate forms.** Always verify the limit is $0/0$ or $\infty/\infty$ first.
6. **Missing absolute values** in $\int \frac{1}{x}\,dx = \ln|x| + C$ and in area calculations.
7. **Incorrectly applying the second derivative test.** When $f''(x_0) = 0$, you must use the first derivative test — do not conclude "no max/min".
