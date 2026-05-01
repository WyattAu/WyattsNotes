---
title: Maths
tags:
- maths
slug: maths
description: Comprehensive guide to maths for the International Baccalaureate.
---


## IB Mathematics -- Analysis and Approaches (AA) -- Course Overview

This section contains notes and study materials for IB Mathematics: Analysis and Approaches,
available at both Standard Level (SL) and Higher Level (HL). The course emphasises mathematical
rigour, formal proof, and the development of strong analytical and problem-solving skills.

---

## Course Structure

The syllabus is organised into five broad topics. Each topic contains content common to both SL and
HL, with additional material at HL level.

### 1. Number and Algebra

This foundational topic covers the properties of number systems, algebraic manipulation, sequences
and series, and the binomial theorem. It provides the algebraic tools required across all other
topics.

- **SL content:** Arithmetic and geometric sequences and series, sigma notation, the binomial
  theorem for positive integer exponents, logarithms (laws and solving equations), and proof by
  mathematical induction (simple cases).
- **HL extension:** Counting principles and the binomial theorem for rational exponents. Partial
  fractions, complex numbers (Cartesian, polar, and exponential forms, De Moivre's theorem, roots of
  complex numbers), and proof by mathematical induction (extended cases including divisibility and
  inequalities).

> See [Number and Algebra notes](Number-and-algebra/Number-and-algebra.md) and
> [Complex Numbers](Number-and-algebra/Complex.md).

### Worked Example: Geometric Series (SL)

Find the sum of the first 10 terms and the sum to infinity of the series $3 + 1.5 + 0.75 + \cdots$

<details>
<summary>Solution</summary>

- **Identify:** $u_1 = 3$, $r = 1.5/3 = 0.5$. Since $|r| \lt 1$, the sum to infinity converges.
- **Sum of first 10 terms:** $S_{10} = \dfrac{u_1(1 - r^{10})}{1 - r} = \dfrac{3(1 - 0.5^{10})}{1 - 0.5} = \dfrac{3(1 - 0.000977)}{0.5} = 5.994$
- **Sum to infinity:** $S_\infty = \dfrac{u_1}{1 - r} = \dfrac{3}{0.5} = 6$

</details>

### Worked Example: Binomial Theorem (SL)

Find the coefficient of $x^3$ in the expansion of $(2x - 3)^7$.

<details>
<summary>Solution</summary>

- **General term:** $T_{r+1} = \dbinom{7}{r} (2x)^{7-r} (-3)^r$
- **For $x^3$:** need $7 - r = 3$, so $r = 4$.
- $T_5 = \dbinom{7}{4} (2x)^3 (-3)^4 = 35 \times 8x^3 \times 81 = 35 \times 648 x^3 = 22680 x^3$
- **Coefficient:** $22680$

</details>

### Worked Example: Logarithmic Equations (SL)

Solve $\log_2(x + 3) + \log_2(x - 1) = 4$.

<details>
<summary>Solution</summary>

- **Combine using product law:** $\log_2[(x+3)(x-1)] = 4$
- **Rewrite in exponential form:** $(x+3)(x-1) = 2^4 = 16$
- **Expand:** $x^2 + 2x - 3 = 16 \implies x^2 + 2x - 19 = 0$
- **Quadratic formula:** $x = \dfrac{-2 \pm \sqrt{4 + 76}}{2} = \dfrac{-2 \pm \sqrt{80}}{2} = -1 \pm 2\sqrt{5}$
- **Check domain:** $x + 3 \gt 0$ and $x - 1 \gt 0$ means $x \gt 1$.
  - $-1 + 2\sqrt{5} \approx -1 + 4.47 = 3.47 \gt 1$ (valid)
  - $-1 - 2\sqrt{5} \lt 1$ (rejected)
- **Solution:** $x = -1 + 2\sqrt{5}$

</details>

### 2. Functions

This topic develops the concept of a function as a mathematical object. It covers the properties,
transformations, and compositions of functions, as well as the classification of different function
families.

- **SL content:** Domain and range, composite and inverse functions, transformations of graphs
  (translations, reflections, stretches), quadratic functions (factorisation, completing the square,
  the discriminant, the vertex form), and rational functions (asymptotes, sketching). Exponential
  and logarithmic functions are also studied in depth.
- **HL extension:** Polynomial functions (the factor and remainder theorems, synthetic division),
  rational functions (including oblique asymptotes), the concept of limits and continuity, and
  further work on composite and inverse functions. HL students also study the behaviour of functions
  at points of discontinuity and the intermediate value theorem.

### Worked Example: Quadratic Functions (SL)

Find the vertex and the $x$-intercepts of $f(x) = -2x^2 + 8x - 5$.

<details>
<summary>Solution</summary>

- **Vertex:** Complete the square or use $x = -b/(2a)$:
  - $x = \dfrac{-8}{2(-2)} = 2$
  - $f(2) = -2(4) + 8(2) - 5 = -8 + 16 - 5 = 3$
  - Vertex at $(2, 3)$
- **$x$-intercepts:** Set $f(x) = 0$:
  - $-2x^2 + 8x - 5 = 0 \implies 2x^2 - 8x + 5 = 0$
  - $x = \dfrac{8 \pm \sqrt{64 - 40}}{4} = \dfrac{8 \pm \sqrt{24}}{4} = \dfrac{8 \pm 2\sqrt{6}}{4} = 2 \pm \dfrac{\sqrt{6}}{2}$

</details>

### Worked Example: Composite and Inverse Functions (SL)

Let $f(x) = 2x + 1$ and $g(x) = x^2 - 3$. Find $(f \circ g)(x)$ and $f^{-1}(x)$.

<details>
<summary>Solution</summary>

- **$(f \circ g)(x) = f(g(x)) = f(x^2 - 3) = 2(x^2 - 3) + 1 = 2x^2 - 5$
- **$f^{-1}(x)$:** Set $y = 2x + 1$, swap $x$ and $y$: $x = 2y + 1$.
  - $y = \dfrac{x - 1}{2}$, so $f^{-1}(x) = \dfrac{x - 1}{2}$

</details>

### Worked Example: Factor and Remainder Theorems (HL)

Given $f(x) = 2x^3 - 5x^2 + x + 2$, show that $(x - 2)$ is a factor and hence factorise $f(x)$
completely.

<details>
<summary>Solution</summary>

- **Factor theorem:** $f(2) = 2(8) - 5(4) + 2 + 2 = 16 - 20 + 2 + 2 = 0$. Confirmed.
- **Divide by $(x - 2)$** using synthetic or long division to get the quotient $2x^2 - x - 1$.
- **Factorise the quotient:** $2x^2 - x - 1 = (2x + 1)(x - 1)$
- **Complete factorisation:** $f(x) = (x - 2)(2x + 1)(x - 1)$

</details>

### 3. Geometry and Trigonometry

This topic covers Euclidean geometry in two and three dimensions, trigonometric functions and
identities, and an introduction to vector geometry.

- **SL content:** Right-angled triangle trigonometry, the sine and cosine rules, area of a triangle
  using trigonometry, the unit circle and radian measure, trigonometric identities (Pythagorean,
  double angle), solving trigonometric equations, and vectors in two dimensions (magnitude,
  direction, scalar and vector products of two vectors).
- **HL extension:** Vectors in three dimensions, the vector equation of a line and a plane,
  intersections of lines and planes, the scalar (dot) product and vector (cross) product in three
  dimensions, and further trigonometric identities. HL students also study the reciprocal
  trigonometric functions and the inverse trigonometric functions in greater depth.

> See [Vectors notes](geometry-and-trigonometry/vectors.md) and
> [Trigonometry notes](geometry-and-trigonometry/trigonometry.md).

### Worked Example: Sine and Cosine Rules (SL)

In triangle $ABC$, $a = 8$ cm, $b = 5$ cm, and $A = 60$ degrees. Find angle $B$.

<details>
<summary>Solution</summary>

- **Sine rule:** $\dfrac{a}{\sin A} = \dfrac{b}{\sin B}$
- $\dfrac{8}{\sin 60^\circ} = \dfrac{5}{\sin B}$
- $\sin B = \dfrac{5 \sin 60^\circ}{8} = \dfrac{5 \times 0.8660}{8} = 0.5413$
- $B = \arcsin(0.5413) = 32.8$ degrees
- **Check for ambiguous case:** Since $A = 60$ degrees $\lt 90$ and $b = 5 \lt 8 = a$, there is only
  one solution.

</details>

### Worked Example: Trigonometric Identities (SL)

Solve $\sin 2x = \cos x$ for $0 \le x \le 2\pi$.

<details>
<summary>Solution</summary>

- **Use double angle identity:** $\sin 2x = 2\sin x \cos x$
- $2\sin x \cos x = \cos x$
- $\cos x(2\sin x - 1) = 0$
- **Case 1:** $\cos x = 0 \implies x = \dfrac{\pi}{2}, \dfrac{3\pi}{2}$
- **Case 2:** $2\sin x - 1 = 0 \implies \sin x = \dfrac{1}{2} \implies x = \dfrac{\pi}{6}, \dfrac{5\pi}{6}$
- **Solutions:** $x = \dfrac{\pi}{6}, \dfrac{\pi}{2}, \dfrac{5\pi}{6}, \dfrac{3\pi}{2}$

</details>

### Worked Example: Vectors -- Scalar Product (SL)

Find the angle between $\mathbf{a} = \begin{pmatrix} 2 \\ 3 \\ -1 \end{pmatrix}$ and
$\mathbf{b} = \begin{pmatrix} 4 \\ -1 \\ 2 \end{pmatrix}$.

<details>
<summary>Solution</summary>

- **Dot product:** $\mathbf{a} \cdot \mathbf{b} = (2)(4) + (3)(-1) + (-1)(2) = 8 - 3 - 2 = 3$
- **Magnitudes:** $\lvert \mathbf{a} \rvert = \sqrt{4 + 9 + 1} = \sqrt{14}$, $\lvert \mathbf{b} \rvert = \sqrt{16 + 1 + 4} = \sqrt{21}$
- **Angle:** $\cos \theta = \dfrac{\mathbf{a} \cdot \mathbf{b}}{\lvert \mathbf{a} \rvert \lvert \mathbf{b} \rvert} = \dfrac{3}{\sqrt{14} \cdot \sqrt{21}} = \dfrac{3}{\sqrt{294}} = \dfrac{3}{17.15} = 0.1749$
- $\theta = \arccos(0.1749) = 79.9$ degrees

</details>

### 4. Statistics and Probability

This topic covers descriptive statistics, probability theory, and statistical inference. It develops
the ability to collect, analyse, and interpret data.

- **SL content:** Collection and organisation of data, measures of central tendency and dispersion,
  grouped data, cumulative frequency diagrams, box plots, probability (sample space, mutually
  exclusive and independent events, conditional probability), discrete probability distributions
  (binomial), the normal distribution, and linear correlation (Pearson's product-moment correlation
  coefficient, least squares regression line).
- **HL extension:** Bayes' theorem, continuous probability distributions, the $t$-distribution,
  confidence intervals for the mean, hypothesis testing (null and alternative hypotheses,
  $p$-values, type I and type II errors), and the $\chi^2$ goodness-of-fit test and test for
  independence.

### Worked Example: Binomial Distribution (SL)

A fair die is rolled 8 times. Find the probability of getting exactly 5 sixes.

<details>
<summary>Solution</summary>

- **$X \sim B(8, 1/6)$** where $p = 1/6$.
- $P(X = 5) = \dbinom{8}{5} \left(\dfrac{1}{6}\right)^5 \left(\dfrac{5}{6}\right)^3$
- $= 56 \times \dfrac{1}{7776} \times \dfrac{125}{216} = 56 \times \dfrac{125}{1679616} = \dfrac{7000}{1679616} = 0.00417$

</details>

### Worked Example: Normal Distribution (SL)

The masses of bags of flour are normally distributed with mean $500$ g and standard deviation $10$ g.
Find the probability that a randomly selected bag has mass greater than $515$ g.

<details>
<summary>Solution</summary>

- **Standardise:** $Z = \dfrac{X - \mu}{\sigma} = \dfrac{515 - 500}{10} = 1.5$
- $P(X \gt 515) = P(Z \gt 1.5) = 1 - \Phi(1.5) = 1 - 0.9332 = 0.0668$

</details>

### Worked Example: Conditional Probability (SL)

In a class of 40 students, 25 play football, 18 play basketball, and 10 play both. A student is
chosen at random. Given that they play basketball, find the probability they also play football.

<details>
<summary>Solution</summary>

- **Define:** $F$ = plays football, $B$ = plays basketball.
- $P(F \cap B) = 10/40 = 0.25$, $P(B) = 18/40 = 0.45$
- **Conditional probability:** $P(F \mid B) = \dfrac{P(F \cap B)}{P(B)} = \dfrac{0.25}{0.45} = \dfrac{5}{9}$

</details>

### 5. Calculus

This topic introduces the fundamental concepts of differential and integral calculus. It is the most
heavily weighted topic in the examination and forms the basis for much of the HL extension work.

- **SL content:** Limits and continuity (informal), differentiation of polynomial, exponential,
  logarithmic, and trigonometric functions, the chain, product, and quotient rules, applications of
  differentiation (tangents and normals, stationary points, optimisation, kinematics), indefinite
  and definite integration, integration by substitution and by parts, and applications of
  integration (area under and between curves, volumes of revolution about the $x$-axis).
- **HL extension:** Further techniques of integration (including partial fractions), limits
  involving L'Hopital's rule, the second derivative and points of inflection, implicit
  differentiation, related rates of change, differential equations (separable first-order equations,
  Euler's method), Maclaurin series, and Taylor series. HL students also study kinematics using
  calculus in greater depth.

> See [Integration notes](calculus/integration-depth).

### Worked Example: Differentiation -- Chain Rule (SL)

Find the equation of the tangent to $y = (x^2 + 1)^3$ at the point where $x = 1$.

<details>
<summary>Solution</summary>

- **Differentiate using the chain rule:** $\dfrac{dy}{dx} = 3(x^2 + 1)^2 \cdot 2x = 6x(x^2 + 1)^2$
- **At $x = 1$:**
  - $y = (1 + 1)^3 = 8$, so the point is $(1, 8)$
  - $\dfrac{dy}{dx} = 6(1)(1 + 1)^2 = 6 \times 4 = 24$
- **Tangent line:** $y - 8 = 24(x - 1) \implies y = 24x - 16$

</details>

### Worked Example: Optimisation (SL)

A rectangular box with a square base has a volume of $256$ cm$^3$. Find the dimensions that
minimise the total surface area.

<details>
<summary>Solution</summary>

- **Let the base side be $x$ and the height be $h$.** Volume: $x^2 h = 256 \implies h = 256/x^2$.
- **Surface area:** $A = x^2 + 4xh = x^2 + \dfrac{1024}{x}$
- **Differentiate:** $\dfrac{dA}{dx} = 2x - \dfrac{1024}{x^2}$
- **Set to zero:** $2x = \dfrac{1024}{x^2} \implies 2x^3 = 1024 \implies x^3 = 512 \implies x = 8$
- **Find $h$:** $h = 256/64 = 4$
- **Verify minimum:** $\dfrac{d^2A}{dx^2} = 2 + \dfrac{2048}{x^3}$, at $x = 8$: $2 + 4 = 6 \gt 0$ (minimum confirmed)
- **Dimensions:** $8$ cm $\times$ $8$ cm $\times$ $4$ cm

</details>

### Worked Example: Definite Integration (SL)

Evaluate $\displaystyle\int_0^2 (3x^2 - 2x + 1)\,dx$.

<details>
<summary>Solution</summary>

- **Antiderivative:** $x^3 - x^2 + x$
- **Apply limits:** $[x^3 - x^2 + x]_0^2 = (8 - 4 + 2) - (0 - 0 + 0) = 6$

</details>

### Worked Example: Integration by Parts (HL)

Evaluate $\displaystyle\int x e^{2x}\,dx$.

<details>
<summary>Solution</summary>

- **Let $u = x$, $dv = e^{2x}\,dx$.** Then $du = dx$, $v = \tfrac{1}{2}e^{2x}$.
- **Integration by parts:** $\displaystyle\int u\,dv = uv - \int v\,du$
- $= x \cdot \tfrac{1}{2}e^{2x} - \int \tfrac{1}{2}e^{2x}\,dx$
- $= \tfrac{1}{2}xe^{2x} - \tfrac{1}{4}e^{2x} + C$
- $= \tfrac{1}{4}e^{2x}(2x - 1) + C$

</details>

### Discrete Mathematics (HL Extension)

This additional topic is studied at HL level only. It covers logic, set theory, graph theory, and
algorithms.

- **Content:** Propositional and predicate logic, truth tables, logical equivalence, implications
  and contrapositives, set operations, Venn and Euler diagrams, and an introduction to graph theory
  including adjacency matrices, walks, paths, circuits, trees, and algorithms (Kruskal's and Prim's
  algorithms for minimum spanning trees, Dijkstra's algorithm for shortest path).

> See [Logic notes](Discrete-maths/logic.md).

---

## Assessment Overview

| Component   | Description                                                                                                                                           | Weighting          |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| **Paper 1** | Non-calculator paper. Short-response and extended-response questions covering the full syllabus. Duration: 1.5h (SL), 2h (HL).                        | 40% (SL), 30% (HL) |
| **Paper 2** | Graphical display calculator (GDC) required. Short-response and extended-response questions covering the full syllabus. Duration: 1.5h (SL), 2h (HL). | 40% (SL), 30% (HL) |
| **Paper 3** | HL only. Extended-response problem-solving questions focusing on the HL extension material. Duration: 1h.                                             | 20% (HL)           |
| **IA**      | Internal Assessment -- a mathematical exploration on a topic of the student's choosing, up to 12--20 pages.                                           | 20% (SL), 20% (HL) |

---

## Key Formulae and Identities

Below is a quick reference for some of the most frequently used results across the course.

**Quadratic formula:** $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

**Binomial theorem (positive integer $n$):**
$(a + b)^n = \displaystyle\sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$

**Euler's formula:** $e^{i\theta} = \cos\theta + i\sin\theta$

**Fundamental theorem of calculus:** If $F'(x) = f(x)$, then
$\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$

**Derivative of $\sin x$:** $\dfrac{d}{dx}(\sin x) = \cos x$

**Derivative of $e^x$:** $\dfrac{d}{dx}(e^x) = e^x$

**Integration by parts:** $\displaystyle\int u\,dv = uv - \int v\,du$

---

## Approaches to Problem-Solving

IB Mathematics AA rewards clear, logical reasoning. The following strategies are applicable across
all topics:

- **Show all working:** Examination marks are awarded for method as well as for the final answer. An
  unexplained result receives no credit, even if numerically correct.
- **Use precise notation:** Mathematical rigour is central to the AA course. Distinguish between
  equations and expressions, use appropriate symbols ($=$, $\approx$, $>$, $<$, $\in$, $\subseteq$,
  etc.), and state any assumptions or conditions (e.g. domain restrictions, non-zero denominators).
- **Verify solutions:** Where possible, substitute answers back into the original equation or check
  against expected behaviour. This is particularly important in trigonometric equations and calculus
  problems where extraneous solutions may arise.
- **Connect topics:** Many examination questions require the synthesis of material from multiple
  topics. For example, a question on probability may involve combinatorics (Number and Algebra), or
  a calculus problem may require knowledge of logarithmic functions (Functions).
- **Practise without a GDC:** Paper 1 is a non-calculator examination. Students must be proficient
  in algebraic manipulation, exact trigonometric values, and analytical techniques without reliance
  on technology.

---

## How to Use These Notes

- Begin with the **Syllabus** page for a detailed breakdown of the topics and sub-topics.
- Navigate to the relevant topic section for focused notes on specific areas.
- Use the **Discrete Mathematics** section if studying at HL level.
- When revising for examinations, ensure familiarity with both non-calculator and GDC methods, as
  both are assessed separately.
- Refer to the formulae section above as a quick-reference guide, but note that it is not exhaustive
  -- the full formula booklet provided in examinations should be consulted for the complete list of
  permitted results.

---

## Detailed Topic Breakdown

### Number and Algebra -- Key Results

**Arithmetic sequences:** $u_n = u_1 + (n-1)d$,
$S_n = \frac{n}{2}(2u_1 + (n-1)d) = \frac{n}{2}(u_1 + u_n)$

**Geometric sequences:** $u_n = u_1 r^{n-1}$, $S_n = \frac{u_1(r^n - 1)}{r - 1}$ for $r \neq 1$

**Sum to infinity (when $|r| \lt 1$):** $S_\infty = \frac{u_1}{1 - r}$

**Binomial theorem:** $(a+b)^n = \displaystyle\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k$

**Logarithm laws:**

- $\log_a(xy) = \log_a x + \log_a y$
- $\log_a(x/y) = \log_a x - \log_a y$
- $\log_a(x^n) = n\log_a x$
- $\log_a a = 1$, $\log_a 1 = 0$

### Functions -- Key Results

**Discriminant:** $\Delta = b^2 - 4ac$

- $\Delta \gt 0$: Two distinct real roots
- $\Delta = 0$: One repeated real root
- $\Delta \lt 0$: No real roots (two complex conjugate roots)

**Vertex form:** $f(x) = a(x - h)^2 + k$, where $(h, k)$ is the vertex.

**Finding inverse:** Replace $f(x)$ with $y$, swap $x$ and $y$, solve for $y$, then write
$f^{-1}(x)$.

### Calculus -- Key Results

**Differentiation rules:**

- $\dfrac{d}{dx}(x^n) = nx^{n-1}$
- $\dfrac{d}{dx}(e^x) = e^x$
- $\dfrac{d}{dx}(\ln x) = \dfrac{1}{x}$
- $\dfrac{d}{dx}(\sin x) = \cos x$
- $\dfrac{d}{dx}(\cos x) = -\sin x$
- Product rule: $(uv)' = u'v + uv'$
- Quotient rule: $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$
- Chain rule: $\dfrac{dy}{dx} = \dfrac{dy}{du} \cdot \dfrac{du}{dx}$

**Integration rules:**

- $\displaystyle\int x^n \,dx = \frac{x^{n+1}}{n+1} + C$ for $n \neq -1$
- $\displaystyle\int \frac{1}{x}\,dx = \ln|x| + C$
- $\displaystyle\int e^x \,dx = e^x + C$
- $\displaystyle\int \cos x \,dx = \sin x + C$
- $\displaystyle\int \sin x \,dx = -\cos x + C$

---

## Calculator Tips (GDC)

### What Your GDC Can Do

- Solve equations numerically (solve, zeros, intersection)
- Calculate definite integrals
- Find derivatives numerically at a point
- Plot functions and find key features (intercepts, maxima, minima)
- Perform statistical calculations (regression, hypothesis tests)
- Work with matrices and vectors
- Handle complex numbers

### Common Mistakes with the GDC

1. **Wrong mode (radians vs degrees).** Most IB questions assume radians unless stated otherwise.
   Check your calculator mode before every exam.
2. **Missing brackets.** $\dfrac{1}{2x}$ on a calculator requires `1/(2x)`, not `1/2x` (which the
   calculator reads as $\dfrac{1}{2} \cdot x$).
3. **Not using exact values when required.** If a question asks for an exact answer, do not use the
   GDC to give a decimal approximation.
4. **Rounding too early.** Carry full calculator precision through intermediate steps, and round
   only the final answer.

---

## Exam Strategy

### Paper 1 (Non-Calculator)

This paper tests your algebraic fluency and conceptual understanding. Key strategies:

- **Memorise exact values:** $\sin 30^{\circ} = 1/2$, $\cos 60^{\circ} = 1/2$, $\tan 45^{\circ} = 1$, $\sin 0 = 0$,
  $\cos 0 = 1$, etc.
- **Practise algebraic manipulation:** Partial fractions, simplifying expressions, solving equations
  without a calculator.
- **Know your identities:** Double angle formulas, Pythagorean identities, and log laws should be at
  your fingertips.
- **Show all steps:** Since you cannot verify with a calculator, clear working is essential for
  method marks.

### Paper 2 (GDC Required)

This paper tests your ability to use technology alongside mathematical reasoning. Key strategies:

- **Sketch graphs first.** Before using the GDC, sketch a rough graph to check your answer makes
  sense.
- **Use the GDC efficiently.** Know the shortcut keys for your calculator model (e.g. TI-84 or
  TI-Nspire).
- **Check GDC answers.** Verify that your calculator's answer is reasonable (correct order of
  magnitude, correct sign, correct number of solutions).

### Paper 3 (HL Only)

This paper tests problem-solving and mathematical reasoning on HL extension material.

- **Read the entire question before starting.** Paper 3 questions often have multiple parts that
  build on each other. Understanding the whole question helps you see where each part is heading.
- **Do not be afraid to use previous parts.** If part (a) asks you to prove a result, use that
  result in later parts even if you could not complete the proof.
- **Explain your reasoning.** Paper 3 rewards clear mathematical argument, not just correct answers.

---

## Common Mistakes to Avoid

### Algebra

| Mistake                                        | Correction                                        |
| :--------------------------------------------- | :------------------------------------------------ |
| $\sqrt{a^2 + b^2} = a + b$                     | $\sqrt{a^2 + b^2} \neq a + b$ in general          |
| $\dfrac{1}{a+b} = \dfrac{1}{a} + \dfrac{1}{b}$ | $\dfrac{1}{a+b} \neq \dfrac{1}{a} + \dfrac{1}{b}$ |
| $(a+b)^2 = a^2 + b^2$                          | $(a+b)^2 = a^2 + 2ab + b^2$                       |
| $\ln(a+b) = \ln a + \ln b$                     | $\ln(ab) = \ln a + \ln b$ (product, not sum)      |
| Forgetting $+C$ in indefinite integrals        | Always include the constant of integration        |

### Calculus

| Mistake                                                       | Correction                                                |
| :------------------------------------------------------------ | :-------------------------------------------------------- |
| Forgetting the chain rule                                     | Always check for composite functions                      |
| Wrong sign in quotient rule                                   | $\dfrac{u'v - uv'}{v^2}$ (not $uv' - u'v$)                |
| $\int \frac{1}{x}\,dx = \ln x$                                | $\int \frac{1}{x}\,dx = \ln\|x\| + C$ (absolute value)    |
| Confusing $\dfrac{d}{dx}(\sin x)$ and $\dfrac{d}{dx}(\cos x)$ | $\sin x \to \cos x$; $\cos x \to -\sin x$                 |
| Definite integral sign errors                                 | $\displaystyle\int_a^b = F(b) - F(a)$ (upper minus lower) |

### Trigonometry

| Mistake                        | Correction                                                          |
| :----------------------------- | :------------------------------------------------------------------ |
| $\sin 2x = 2\sin x$            | $\sin 2x = 2\sin x \cos x$                                          |
| Forgetting domain restrictions | $\sin x = 0.5$ has infinitely many solutions; state the range asked |
| Radians vs degrees             | Check what the question specifies; default to radians               |

### Probability and Statistics

| Mistake                                    | Correction                                                                      |
| :----------------------------------------- | :------------------------------------------------------------------------------ |
| $P(A \mathrm{ or } B) = P(A) + P(B)$       | Only if mutually exclusive; otherwise $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| $P(A \mathrm{ and } B) = P(A) \times P(B)$ | Only if independent; otherwise use conditional probability                      |
| Confusing $\mu$ and $\bar{x}$              | $\mu$ is the population mean; $\bar{x}$ is the sample mean                      |

---

## Internal Assessment (IA) Tips

The mathematical exploration is worth 20% of your final grade. It is an opportunity to explore a
topic of personal interest in depth.

### Choosing a Topic

- Choose a topic you are genuinely interested in — motivation shows in the quality of work.
- Ensure the topic has sufficient mathematical depth (calculus, statistics, or algebra beyond the
  syllabus).
- Topics that connect mathematics to real-world applications tend to score well (e.g. modelling
  population growth, analysing projectile motion, investigating the maths behind musical harmonics).

### Structure

1. **Introduction:** Introduce the topic, state the aim, and explain why it is interesting.
2. **Background:** Define key terms and introduce relevant mathematical concepts.
3. **Exploration:** Present calculations, derivations, and analysis. Show your working clearly.
4. **Conclusion:** Summarize findings, discuss limitations, and suggest extensions.
5. **Bibliography:** Cite all sources.

### Scoring Criteria

- **Presentation:** Well-organised, coherent, and concise.
- **Mathematical Communication:** Correct notation, clear explanations, appropriate use of
  technology.
- **Personal Engagement:** Evidence of independent thinking and personal interest.
- **Reflection:** Critical evaluation of methods and results.
- **Use of Mathematics:** Sophistication, rigour, and breadth of mathematical techniques.

---

## Problem Set

### Number and Algebra

1. The third term of an arithmetic sequence is 14 and the seventh term is 30. Find the first term
   and the common difference.

<details>
<summary>Solution</summary>

- $u_3 = u_1 + 2d = 14$ and $u_7 = u_1 + 6d = 30$
- Subtracting: $4d = 16 \implies d = 4$
- $u_1 + 8 = 14 \implies u_1 = 6$

If you get this wrong, revise: Arithmetic sequence formulas $u_n = u_1 + (n-1)d$ (Topic 1).

</details>

2. Find the sum of all integers from 1 to 200 that are divisible by 3.

<details>
<summary>Solution</summary>

- The sequence is $3, 6, 9, \ldots, 198$.
- Number of terms: $198 = u_1 + (n-1)d \implies 198 = 3 + (n-1)(3) \implies n = 66$
- $S_{66} = \dfrac{66}{2}(3 + 198) = 33 \times 201 = 6633$

If you get this wrong, revise: Arithmetic series formula $S_n = n(u_1 + u_n)/2$ (Topic 1).

</details>

### Functions

3. Find the range of $f(x) = \dfrac{2x + 1}{x - 3}$.

<details>
<summary>Solution</summary>

- Let $y = \dfrac{2x + 1}{x - 3}$. Rearranging: $y(x - 3) = 2x + 1 \implies yx - 3y = 2x + 1$
- $x(y - 2) = 3y + 1 \implies x = \dfrac{3y + 1}{y - 2}$
- For $x$ to be real, $y \neq 2$. Therefore $\mathrm{range} = \mathbb{R} \setminus \\{2\\}$.

If you get this wrong, revise: Finding range of rational functions by rearranging (Topic 2).

</details>

4. The function $f(x) = x^3 - 3x^2 + 4$ has a stationary point at $x = 2$. Determine its nature
   and find the other stationary point.

<details>
<summary>Solution</summary>

- $f'(x) = 3x^2 - 6x = 3x(x - 2)$
- Stationary points at $x = 0$ and $x = 2$.
- $f''(x) = 6x - 6$
- At $x = 2$: $f''(2) = 6 \gt 0$ (local minimum). $f(2) = 8 - 12 + 4 = 0$.
- At $x = 0$: $f''(0) = -6 \lt 0$ (local maximum). $f(0) = 4$.

If you get this wrong, revise: First and second derivative tests for stationary points (Topic 5).

</details>

### Trigonometry

5. Solve $2\cos^2 x - \cos x - 1 = 0$ for $0 \le x \le 2\pi$.

<details>
<summary>Solution</summary>

- Let $u = \cos x$: $2u^2 - u - 1 = 0 \implies (2u + 1)(u - 1) = 0$
- $u = -1/2$ or $u = 1$
- $\cos x = -1/2 \implies x = 2\pi/3, 4\pi/3$
- $\cos x = 1 \implies x = 0$
- **Solutions:** $x = 0, 2\pi/3, 4\pi/3$

If you get this wrong, revise: Solving trigonometric equations by substitution (Topic 3).

</details>

6. In triangle $ABC$, $a = 7$, $b = 10$, $C = 120$ degrees. Find the length of side $c$.

<details>
<summary>Solution</summary>

- **Cosine rule:** $c^2 = a^2 + b^2 - 2ab\cos C$
- $c^2 = 49 + 100 - 2(7)(10)\cos 120^\circ = 149 - 140(-0.5) = 149 + 70 = 219$
- $c = \sqrt{219} \approx 14.8$

If you get this wrong, revise: Cosine rule for finding a side (Topic 3).

</details>

### Probability and Statistics

7. Two events $A$ and $B$ are such that $P(A) = 0.6$, $P(B) = 0.4$, and $P(A \mid B) = 0.5$. Find
   $P(A \cap B)$ and determine whether $A$ and $B$ are independent.

<details>
<summary>Solution</summary>

- $P(A \cap B) = P(A \mid B) \cdot P(B) = 0.5 \times 0.4 = 0.20$
- For independence: $P(A)P(B) = 0.6 \times 0.4 = 0.24 \neq 0.20$
- Therefore $A$ and $B$ are **not independent**.

If you get this wrong, revise: Conditional probability and independence (Topic 4).

</details>

8. A random variable $X \sim N(\mu, 9)$. Given $P(X \lt 22) = 0.8413$, find $\mu$.

<details>
<summary>Solution</summary>

- Standardise: $P(Z \lt (22 - \mu)/3) = 0.8413$
- From tables, $P(Z \lt 1.00) = 0.8413$, so $(22 - \mu)/3 = 1$
- $22 - \mu = 3 \implies \mu = 19$

If you get this wrong, revise: Standardisation $Z = (X - \mu)/\sigma$ and inverse normal (Topic 4).

</details>

### Calculus

9. Find $\displaystyle\int_0^1 x\sqrt{1 + x^2}\,dx$.

<details>
<summary>Solution</summary>

- **Substitution:** Let $u = 1 + x^2$, $du = 2x\,dx$, so $x\,dx = du/2$.
- When $x = 0$, $u = 1$; when $x = 1$, $u = 2$.
- $\displaystyle\int_1^2 \sqrt{u} \cdot \dfrac{du}{2} = \dfrac{1}{2}\left[\dfrac{2}{3}u^{3/2}\right]_1^2 = \dfrac{1}{3}(2\sqrt{2} - 1)$

If you get this wrong, revise: Integration by substitution, changing limits (Topic 5).

</details>

10. A curve is defined implicitly by $x^2 + y^2 + 3xy = 10$. Find $\dfrac{dy}{dx}$ at the point
    $(1, 2)$.

<details>
<summary>Solution</summary>

- **Differentiate implicitly:** $2x + 2y\dfrac{dy}{dx} + 3y + 3x\dfrac{dy}{dx} = 0$
- $(2y + 3x)\dfrac{dy}{dx} = -2x - 3y$
- $\dfrac{dy}{dx} = \dfrac{-2x - 3y}{2y + 3x}$
- At $(1, 2)$: $\dfrac{dy}{dx} = \dfrac{-2 - 6}{4 + 3} = \dfrac{-8}{7}$

If you get this wrong, revise: Implicit differentiation (HL, Topic 5).

</details>

11. Find the area enclosed between the curves $y = x^2$ and $y = 2x$.

<details>
<summary>Solution</summary>

- **Find intersections:** $x^2 = 2x \implies x^2 - 2x = 0 \implies x(x - 2) = 0$, so $x = 0$ and $x = 2$.
- **On $[0, 2]$, $2x \ge x^2$.**
- **Area:** $\displaystyle\int_0^2 (2x - x^2)\,dx = \left[x^2 - \dfrac{x^3}{3}\right]_0^2 = \left(4 - \dfrac{8}{3}\right) - 0 = \dfrac{4}{3}$

If you get this wrong, revise: Area between two curves (Topic 5).

</details>

12. A population grows at a rate proportional to its size. If the population doubles in 5 hours, find
    the continuous growth rate $k$ and the time it takes for the population to triple.

<details>
<summary>Solution</summary>

- **Model:** $P(t) = P_0 e^{kt}$
- **Doubling:** $2P_0 = P_0 e^{5k} \implies e^{5k} = 2 \implies 5k = \ln 2 \implies k = \dfrac{\ln 2}{5} = 0.1386$ per hour
- **Tripling:** $3P_0 = P_0 e^{kt} \implies kt = \ln 3 \implies t = \dfrac{\ln 3}{k} = \dfrac{5\ln 3}{\ln 2} = \dfrac{5(1.0986)}{0.6931} = 7.92$ hours

If you get this wrong, revise: Exponential growth and separable differential equations (Topic 5).

</details>
