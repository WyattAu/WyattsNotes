---
title: MAT Preparation
description: "Comprehensive preparation guide for the Mathematics Admissions Test (MAT): multiple choice strategy, algebra, calculus, sequences, logic, worked solutions, and"
date: 2026-05-05T00:00:00.000Z
tags:
  - Mathematics
  - University
  - Admissions
categories:
  - Mathematics
slug: mat-preparation
---
## 1. Overview of MAT

The Mathematics Admissions Test (MAT) is used by the University of Oxford and Imperial College London
As part of their undergraduate admissions process for mathematics and joint degree courses. It is also
Used by the University of Warwick for certain applicants.

### 1.1 Format

The MAT is a 2.5-hour paper. It consists of:

| Section | Format | Questions | Marks |
| ------- | ------ | --------- | ----- |
| A | Multiple choice | Q1 (10 parts) | 40 |
| B--D | Long-form | Q2, Q3, Q4 (choose 2 of 3) | 30 each |

Total: 100 marks. All candidates must attempt Question 1 and choose two of Questions 2--4.

### 1.2 Syllabus

The MAT syllabus is based on the content of A-Level Mathematics. It does not require A-Level Further
Mathematics, though familiarity with Further Mathematics topics can be helpful. Key topics:

- Algebra: quadratics, polynomials, inequalities, partial fractions
- Calculus: differentiation, integration, curve sketching
- Geometry: coordinate geometry, trigonometry
- Sequences and series: arithmetic, geometric, recurrence relations
- Logic and proof: proof by contradiction, induction, counterexamples
- Combinatorics: counting principles, basic probability

### 1.3 Key Differences from A-Level

- Questions require original thinking, not just recall of standard methods.
- Multiple choice options are designed to trap common misconceptions.
- Long-form questions have multiple parts that build in difficulty.
- The exam tests mathematical maturity: the ability to apply known results in unfamiliar settings.

### 1.4 Scoring Context

The average score is around 50--60 out of 100. A competitive Oxford applicant generally
Aims for 65 or above, though the threshold varies by year and by college. The questions are designed
To discriminate at the top end: the final parts of Questions 2--4 are intended to challenge even
The strongest candidates.

---

## 2. Multiple Choice Strategy (Question 1)

Question 1 consists of 10 multiple choice parts, each worth 4 marks. Each part presents a mathematical
Statement or computation with five options (A--E).

### 2.1 General Approach

**Eliminate before you compute.** Read all five options before starting to work. Often two or three
Options can be eliminated immediately by dimensional analysis, symmetry considerations, or testing
Special cases.

**Test specific values.** If a statement claims a property holds for all $x$Test $x = 0$$x = 1$
And $x = -1$. If it fails for any of these, the statement is false.

**Check edge cases.** For statements about functions, consider what happens at the boundaries of the
Domain, at zeros, and at extreme values.

**Use the options against each other.** If two options are contradictory, exactly one must be false.
If options A and B differ only in the sign of a term, determining the sign of that term eliminates
One.

### 2.2 Common Trap Patterns

**The "almost right" answer.** A common error (e.g., forgetting a factor of 2, dropping a sign, or
Missing a case) produces one of the wrong options. If your computation leads to an option, verify the
Steps that are most likely to contain errors.

**The "too specific" answer.** An answer that is correct only for a special case of the problem. For
Example, an answer derived by assuming $n = 1$ when the statement should hold for all $n$.

**The "reverse implication" trap.** Confusing $P \implies Q$ with $Q \implies P$. Many multiple
Choice parts test logical reasoning precisely through this confusion.

---

## 3. Algebra and Functions

### 3.1 Quadratics and Polynomials

The discriminant of $ax^2 + bx + c = 0$ determines the nature of its roots:

| $\Delta = b^2 - 4ac$ | Roots |
| --- | --- |
| $\Delta > 0$ | Two distinct real roots |
| $\Delta = 0$ | One repeated real root |
| $\Delta < 0$ | No real roots |

**Completing the square.** $ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a}$.

This form reveals the vertex, the minimum or maximum value, and the axis of symmetry.

**Polynomial division.** When dividing $P(x)$ by $Q(x)$Write $P(x) = Q(x)D(x) + R(x)$ where
$\deg R < \deg Q$.

**Factor theorem applications.** If $P(a) = 0$Then $(x - a)$ divides $P(x)$. This is frequently
Used to find roots of polynomials that arise from algebraic manipulation.

### 3.2 Functions and Transformations

**Function composition.** $(f \circ g)(x) = f(g(x))$. Note that composition is not commutative:
$f \circ g \neq g \circ f$ .

**Inverse functions.** $f^{-1}$ exists if and only if $f$ is bijective. To find $f^{-1}$Set
$y = f(x)$ and solve for $x$ in terms of $y$.

**Transformations.** The graph of $y = af(bx + c) + d$ is obtained from $y = f(x)$ by:
- Horizontal translation by $-c/b$
- Horizontal stretch by factor $1/|b|$ (reflection in $y$-axis if $b < 0$)
- Vertical stretch by factor $|a|$ (reflection in $x$-axis if $a < 0$)
- Vertical translation by $d$

### 3.3 Inequalities

**Technique: squaring both sides.** If $a, b \geq 0$Then $a \geq b \iff a^2 \geq b^2$. If the
Signs are unknown, squaring is not valid.

**Technique: considering cases.** For absolute value inequalities, split into cases based on the sign
Of the expression inside the absolute value.

**Technique: using known inequalities.** AM-GM, Cauchy-Schwarz, and the triangle inequality are
Powerful tools that frequently appear on MAT.

---

## 4. Calculus

### 4.1 Differentiation

**Standard derivatives.**

| $f(x)$ | $f'(x)$ |
| --- | --- |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\arcsin x$ | $1/\sqrt{1 - x^2}$ |
| $\arctan x$ | $1/(1 + x^2)$ |

**Chain rule.** $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$.

**Product rule.** $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$.

**Quotient rule.** $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{g(x)^2}$.

**Implicit differentiation.** When $y$ is defined implicitly by $F(x, y) = 0$Differentiate both
Sides with respect to $x$Treating $y$ as a function of $x$:

$$\frac{d}{dx}[F(x, y)] = \frac{\partial F}{\partial x} + \frac{\partial F}{\partial y}\frac{dy}{dx} = 0$$

### 4.2 Integration

**Standard integrals.**

| $\int f(x)\,dx$ | Result |
| --- | --- |
| $\int x^n\,dx$ | $\frac{x^{n+1}}{n+1} + C$ ($n \neq -1$) |
| $\int \frac{1}{x}\,dx$ | $\ln|x| + C$ |
| $\int e^x\,dx$ | $e^x + C$ |
| $\int \sin x\,dx$ | $-\cos x + C$ |
| $\int \cos x\,dx$ | $\sin x + C$ |
| $\int \sec^2 x\,dx$ | $\tan x + C$ |
| $\int \frac{1}{1+x^2}\,dx$ | $\arctan x + C$ |

**Techniques.** Substitution, integration by parts, partial fractions, and trigonometric identities
Are the core techniques. MAT questions require one or two applications of these, combined
With algebraic manipulation.

**Definite integrals.** $\int_a^b f(x)\,dx = F(b) - F(a)$. Properties:
- $\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$
- $\int_a^b [f(x) + g(x)]\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx$
- If $f(x) \geq 0$ on $[a, b]$Then $\int_a^b f(x)\,dx \geq 0$

### 4.3 Geometry of Curves

**Stationary points.** Set $f'(x) = 0$. Classify using the second derivative:
- $f''(x) > 0$: local minimum
- $f''(x) < 0$: local maximum
- $f''(x) = 0$: test fails; use first derivative test or higher derivatives

**Points of inflection.** Where $f''(x) = 0$ and $f''(x)$ changes sign.

**Asymptotes.** Vertical asymptotes at values where $f$ is undefined. Horizontal asymptotes from
$\lim_{x \to \pm\infty} f(x)$. Oblique asymptotes when the degree of the numerator is one more than
The denominator: divide to find $f(x) = mx + c + \frac{r(x)}{s(x)}$.

**Curve sketching procedure.**
1. Domain and range
2. Symmetry (even/odd, periodic)
3. Intercepts (x-axis and y-axis)
4. Asymptotes
5. Stationary points and their nature
6. Behaviour at extremes of the domain
7. Sketch, labelling key features

---

## 5. Sequences and Series

### 5.1 Arithmetic Sequences

The $n$-th term: $a_n = a_1 + (n-1)d$Where $d$ is the common difference.

Sum of the first $n$ terms: $S_n = \frac{n}{2}(2a_1 + (n-1)d) = \frac{n}{2}(a_1 + a_n)$.

### 5.2 Geometric Sequences

The $n$-th term: $a_n = a_1 r^{n-1}$Where $r$ is the common ratio.

Sum of the first $n$ terms: $S_n = \frac{a_1(1 - r^n)}{1 - r}$ for $r \neq 1$.

Sum to infinity: $S_\infty = \frac{a_1}{1 - r}$Convergent for $|r| < 1$.

### 5.3 Recurrence Relations

A recurrence relation defines $a_n$ in terms of previous terms. A first-order linear recurrence:

$$a_{n+1} = ra_n + c$$

Has the general solution:

$$a_n = A r^{n-1} + \frac{c}{1 - r}$$

For $r \neq 1$Where $A$ is determined by the initial condition.

### 5.4 Series Manipulation

**Telescoping series.** Terms cancel in pairs. For example:

$$\sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n} \left(\frac{1}{k} - \frac{1}{k+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}$$

**Method of differences.** If $a_k = f(k) - f(k-1)$Then $\sum_{k=1}^{n} a_k = f(n) - f(0)$.
The key is finding $f$ given $a_k$Often by partial fraction decomposition.

**Binomial expansion.** For $|x| < 1$ and $\alpha \in \mathbb{'\{'}R{'\}'}$:

$$(1 + x)^\alpha = \sum_{k=0}^{\infty} \binom{\alpha}{k} x^k$$

Where $\binom{\alpha}{k} = \frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!}$.

---

## 6. Logic and Proof

### 6.1 Logical Connectives

| Statement | Meaning |
| --- | --- |
| $P \implies Q$ | If $P$ is true, then $Q$ is true |
| $P \iff Q$ | $P$ is true if and only if $Q$ is true |
| $\neg P$ | $P$ is false |
| $P \land Q$ | Both $P$ and $Q$ are true |
| $P \lor Q$ | At least one of $P$ or $Q$ is true |
| $P \implies Q$ | $\neg P \lor Q$ (equivalent form) |
| $\neg(P \implies Q)$ | $P \land \neg Q$ |

### 6.2 Quantifiers

- $\forall x \, P(x)$: $P(x)$ holds for all $x$ in the domain.
- $\exists x \, P(x)$: there exists an $x$ in the domain such that $P(x)$ holds.

**Negation:**

$$\neg(\forall x \, P(x)) \equiv \exists x \, \neg P(x)$$

$$\neg(\exists x \, P(x)) \equiv \forall x \, \neg P(x)$$

### 6.3 Proof Techniques

**Direct proof.** Assume $P$Derive $Q$ through a sequence of logical steps.

**Proof by contradiction.** Assume $\neg Q$ and derive a contradiction. This proves $Q$.

**Proof by contrapositive.** To prove $P \implies Q$Prove $\neg Q \implies \neg P$ instead.

**Counterexample.** To disprove a universal statement $\forall x \, P(x)$Find a specific $x$ for
Which $P(x)$ is false.

**Mathematical induction.** To prove a statement for all $n \geq n_0$:
1. Base case: verify the statement for $n = n_0$.
2. Inductive step: assume the statement for $n = k$ (inductive hypothesis), and prove it for $n = k + 1$.
3. Conclusion: by the principle of mathematical induction, the statement holds for all $n \geq n_0$.

### 6.4 Common Proof Patterns on MAT

- Showing a function is injective: assume $f(a) = f(b)$ and prove $a = b$.
- Showing a function is surjective: for every $y$ in the codomain, find $x$ with $f(x) = y$.
- Proving an inequality by induction or by algebraic manipulation.
- Determining whether a statement is "always", "sometimes", or "never" true, with justification.

---

## 7. Worked Questions

### Question 1 (Multiple Choice Style)

> Let $f(x) = x^3 - 3x + 1$. How many stationary points does the graph of $y = f(f(x))$ have?

**Solution.** By the chain rule:

$$\frac{d}{dx}[f(f(x))] = f'(f(x)) \cdot f'(x)$$

Stationary points occur where $f'(f(x)) \cdot f'(x) = 0$I.e., where $f'(x) = 0$ or $f'(f(x)) = 0$.

First, $f'(x) = 3x^2 - 3 = 3(x+1)(x-1) = 0$ gives $x = -1$ or $x = 1$. These are 2 stationary points.

Second, $f'(f(x)) = 0$ means $f(x) = -1$ or $f(x) = 1$.

For $f(x) = -1$: $x^3 - 3x + 1 = -1$I.e., $x^3 - 3x + 2 = 0$. Since $x = 1$ is a root:
$(x-1)(x^2 + x - 2) = (x-1)^2(x+2) = 0$. Roots: $x = 1$ (double), $x = -2$. The root $x = 1$ was
Already counted, so this gives one new stationary point at $x = -2$.

For $f(x) = 1$: $x^3 - 3x + 1 = 1$I.e., $x^3 - 3x = 0$I.e., $x(x^2 - 3) = 0$. Roots:
$x = 0, x = \sqrt{3}, x = -\sqrt{3}$. These are all new stationary points.

Total: $2 + 1 + 3 = 6$ stationary points.

---

### Question 2 (Algebra and Proof)

> (i) Show that if $n$ is a positive integer, then $n^5 - n$ is divisible by 5.
>
> (ii) Hence, or otherwise, show that $n^5 - n$ is divisible by 30 for all positive integers $n$.

**Solution.**

**(i)** By Fermat's little theorem, for any integer $n$ not divisible by 5, $n^4 \equiv 1 \pmod{5}$
So $n^5 \equiv n \pmod{5}$Giving $n^5 - n \equiv 0 \pmod{5}$.

Alternatively, by factorisation:

$$n^5 - n = n(n^4 - 1) = n(n^2 - 1)(n^2 + 1) = n(n-1)(n+1)(n^2 + 1)$$

Among any 5 consecutive integers, one is divisible by 5. The product $n(n-1)(n+1)$ gives three
Consecutive integers. If none of these is divisible by 5, then $n \equiv 2 \pmod{5}$ or
$n \equiv 3 \pmod{5}$. In the first case $n^2 \equiv 4 \pmod{5}$So $n^2 + 1 \equiv 0 \pmod{5}$.
In the second case $n^2 \equiv 9 \equiv 4 \pmod{5}$So $n^2 + 1 \equiv 0 \pmod{5}$. Either way,
The product is divisible by 5.

**(ii)** We have $n^5 - n = (n-1)n(n+1)(n^2 + 1)$.

Divisibility by 2: $(n-1)n(n+1)$ is the product of three consecutive integers, so at least one is
Even. Therefore $n^5 - n$ is divisible by 2.

Divisibility by 3: $(n-1)n(n+1)$ is the product of three consecutive integers, so one is divisible
By 3. Therefore $n^5 - n$ is divisible by 3.

Divisibility by 5: established in part (i).

Since 2, 3, and 5 are pairwise coprime and $n^5 - n$ is divisible by all three, it is divisible by
$2 \times 3 \times 5 = 30$.

---

### Question 3 (Calculus)

> The curve $C$ has equation $y = \frac{x^2}{x - 1}$.
>
> (i) Find the coordinates of the stationary points and determine their nature.
> (ii) Find the equations of any asymptotes.
> (iii) Sketch the curve, indicating all key features.

**Solution.**

**(i)** Using the quotient rule:

$$\frac{dy}{dx} = \frac{(2x)(x-1) - x^2(1)}{(x-1)^2} = \frac{2x^2 - 2x - x^2}{(x-1)^2} = \frac{x^2 - 2x}{(x-1)^2} = \frac{x(x-2)}{(x-1)^2}$$

Setting $\frac{dy}{dx} = 0$: $x(x - 2) = 0$So $x = 0$ or $x = 2$.

At $x = 0$: $y = 0$. The second derivative:

$$\frac{d^2y}{dx^2} = \frac{d}{dx}\left[\frac{x^2 - 2x}{(x-1)^2}\right]$$

At $x = 0$The numerator $x^2 - 2x$ changes from positive (for $x < 0$) to negative (for $0 < x < 1$),
So $\frac{dy}{dx}$ changes from positive to negative. Hence $(0, 0)$ is a local maximum.

At $x = 2$: $y = \frac{4}{1} = 4$. The derivative changes from negative to positive, so $(2, 4)$ is a
Local minimum.

**(ii)** Vertical asymptote at $x = 1$. For the horizontal/oblique asymptote, divide:

$$\frac{x^2}{x - 1} = x + 1 + \frac{1}{x - 1}$$

As $x \to \pm\infty$$\frac{1}{x-1} \to 0$So $y \approx x + 1$. The oblique asymptote is $y = x + 1$.

**(iii)** Key features for the sketch:
- Domain: $x \neq 1$
- Intercepts: $(0, 0)$
- Stationary points: local maximum at $(0, 0)$Local minimum at $(2, 4)$
- Vertical asymptote: $x = 1$
- Oblique asymptote: $y = x + 1$
- As $x \to 1^+$$y \to +\infty$; as $x \to 1^-$$y \to -\infty$

---

### Question 4 (Sequences and Series)

> Let $S_n = \sum_{k=1}^{n} \frac{k}{2^k}$.
>
> (i) Find $S_1, S_2, S_3$.
> (ii) Find an expression for $S_n$ in terms of $n$.
> (iii) Find $\sum_{k=1}^{\infty} \frac{k}{2^k}$.

**Solution.**

**(i)** $S_1 = \frac{1}{2}$$S_2 = \frac{1}{2} + \frac{2}{4} = 1$$S_3 = 1 + \frac{3}{8} = \frac{11}{8}$.

**(ii)** Write:

$$S_n = \sum_{k=1}^{n} \frac{k}{2^k}$$

Multiply by $\frac{1}{2}$:

$$\frac{1}{2}S_n = \sum_{k=1}^{n} \frac{k}{2^{k+1}} = \sum_{k=2}^{n+1} \frac{k-1}{2^k}$$

Subtract:

$$S_n - \frac{1}{2}S_n = \frac{1}{2} + \sum_{k=2}^{n} \frac{k - (k-1)}{2^k} - \frac{n}{2^{n+1}}$$

$$\frac{1}{2}S_n = \frac{1}{2} + \sum_{k=2}^{n} \frac{1}{2^k} - \frac{n}{2^{n+1}}$$

$$\frac{1}{2}S_n = \sum_{k=1}^{n} \frac{1}{2^k} - \frac{n}{2^{n+1}}$$

The geometric sum $\sum_{k=1}^{n} \frac{1}{2^k} = \frac{\frac{1}{2}(1 - \frac{1}{2^n})}{1 - \frac{1}{2}} = 1 - \frac{1}{2^n}$.

Therefore:

$$\frac{1}{2}S_n = 1 - \frac{1}{2^n} - \frac{n}{2^{n+1}} = 1 - \frac{2 + n}{2^{n+1}}$$

$$S_n = 2 - \frac{n + 2}{2^n}$$

**(iii)** $\sum_{k=1}^{\infty} \frac{k}{2^k} = \lim_{n \to \infty} S_n = \lim_{n \to \infty} \left(2 - \frac{n+2}{2^n}\right) = 2 - 0 = 2$.

---

### Question 5 (Logic)

> A function $f: \mathbb{'\{'}R{'\}'} \to \mathbb{'\{'}R{'\}'}$ satisfies $f(x+y) = f(x) + f(y)$ for all $x, y \in \mathbb{'\{'}R{'\}'}$
> and $f(xy) = f(x)f(y)$ for all $x, y \in \mathbb{'\{'}R{'\}'}$.
>
> (i) Find $f(0)$ and $f(1)$.
> (ii) Show that $f(n) = n f(1)$ for all $n \in \mathbb{'\{'}Z{'\}'}$.
> (iii) Show that either $f(x) = x$ for all $x \in \mathbb{'\{'}R{'\}'}$Or $f(x) = 0$ for all $x \in \mathbb{'\{'}R{'\}'}$.

**Solution.**

**(i)** Setting $x = y = 0$: $f(0) = f(0) + f(0) = 2f(0)$So $f(0) = 0$.

Setting $y = 1$: $f(x) = f(x) + f(1)$So $f(1) = 0$.

Wait: $f(x \cdot 1) = f(x)f(1)$. Since $f(x \cdot 1) = f(x)$We have $f(x) = f(x)f(1)$ for all $x$.
This means $f(x)(1 - f(1)) = 0$ for all $x$.

Case 1: $f(1) \neq 1$. Then $f(x) = 0$ for all $x$Which satisfies both conditions.

Case 2: $f(1) = 1$. Then from $f(1) = 1$Setting $x = y = 0$ in the additive property gives $f(0) = 0$.

**(ii)** In Case 2 ($f(1) = 1$):

By induction on $n \geq 1$: $f(n) = f(n-1 + 1) = f(n-1) + f(1) = f(n-1) + 1$. Since $f(1) = 1$
$f(n) = n$ for all $n \in \mathbb{'\{'}N{'\}'}$.

For $n = 0$: $f(0) = 0 = 0 \cdot f(1)$.

For negative integers: $0 = f(0) = f(n + (-n)) = f(n) + f(-n)$So $f(-n) = -f(n) = -n$.

Therefore $f(n) = n$ for all $n \in \mathbb{'\{'}Z{'\}'}$.

**(iii)** We have established that either $f(x) = 0$ for all $x$ (Case 1) or $f(1) = 1$ (Case 2).

In Case 2: For any rational $p/q$ (with $q \neq 0$):

$$f\left(\frac{p}{q}\right) = f\left(\frac{p}{q}\right)$$

Since $f(q \cdot \frac{p}{q}) = f(q)f(\frac{p}{q})$ and $f(p) = p$We get $p = q \cdot f(\frac{p}{q})$
So $f(\frac{p}{q}) = \frac{p}{q}$.

For $x > 0$: $f(x) = f(\sqrt{x} \cdot \sqrt{x}) = f(\sqrt{x})^2 \geq 0$.

If $x > y$: $f(x) - f(y) = f(x - y) \geq 0$ (since $x - y > 0$ and $f$ of a positive number is
Non-negative). Wait, we need to be more careful.

Actually, since $f(x) = x$ for all rationals and $f$ is additive, for any real $x$ and rational $r$:
If $r < x$ then $f(x) - r = f(x) - f(r) = f(x - r)$. Since $x - r > 0$ and we have shown $f$ of a
Positive number is non-negative, $f(x) \geq r$ for all rationals $r < x$. Hence $f(x) \geq x$.

Similarly, if $r > x$ then $f(r) - f(x) = f(r - x) \geq 0$ (since $r - x > 0$), so $f(x) \leq r$ for
All rationals $r > x$. Hence $f(x) \leq x$.

Combining: $f(x) = x$ for all $x \in \mathbb{'\{'}R{'\}'}$.

Therefore the only solutions are $f(x) = x$ and $f(x) = 0$.

---

## 8. Common Pitfalls

**Not reading the question carefully.** MAT questions often have specific conditions or constraints that
Are easy to miss on a first reading. Re-read the question before writing your solution.

**Over-complicating multiple choice.** Question 1 parts are designed to be solvable in 3--5 minutes.
If you are spending more than 5 minutes on a single part, you are likely missing a shortcut.

**Algebraic errors in long-form questions.** A sign error in the middle of a derivation can invalidate
The rest of the solution. Check your algebra at each step, especially when expanding or factorising.

**Incorrect use of logical connectives.** Confusing "if" with "if and only if", or "for all" with
"there exists", is a common source of error in proof questions.

**Not checking answers.** For computation questions, substitute your answer back into the original
Problem. For proof questions, verify that your argument holds for specific cases.

**Leaving blanks.** On multiple choice, guess if you are unsure: there is no negative marking. On
Long-form questions, write down whatever partial progress you have made.

**Mismanaging time.** Do not spend excessive time on Question 1 at the expense of Questions 2--4, which
Carry more marks per minute.

## Worked Examples

<!-- TODO: Add worked examples for this topic -->
