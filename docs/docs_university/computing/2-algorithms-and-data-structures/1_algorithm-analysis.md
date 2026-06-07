---
title: Algorithm Analysis
tags:
  - Computing
  - University
---

### 1.1 Asymptotic Notation

**Definition.** $f(n) = O(g(n))$ if there exist constants $c > 0$ and $n_0$ such that
$f(n) \leq c \cdot g(n)$ for all $n \geq n_0$.

**Definition.** $f(n) = \Omega(g(n))$ if there exist constants $c > 0$ and $n_0$ such that
$f(n) \geq c \cdot g(n)$ for all $n \geq n_0$.

**Definition.** $f(n) = \Theta(g(n))$ if $f(n) = O(g(n))$ and $f(n) = \Omega(g(n))$.

**Definition.** $f(n) = o(g(n))$ if $\lim_{n \to \infty} f(n)/g(n) = 0$.

**Definition.** $f(n) = \omega(g(n))$ if $\lim_{n \to \infty} g(n)/f(n) = 0$.

**Theorem 1.1.** $f(n) = O(g(n))$ if and only if $g(n) = \Omega(f(n))$.

_Proof._ Suppose $f(n) = O(g(n))$. Then there exist $c, n_0$ such that $f(n) \leq c \cdot g(n)$ for
all $n \geq n_0$Hence $g(n) \geq (1/c) \cdot f(n)$ for all $n \geq n_0$So $g(n) = \Omega(f(n))$. The
converse follows by symmetry. $\blacksquare$

**Theorem 1.2.** $f(n) = \Theta(g(n))$ if and only if there exist constants $c_1, c_2 > 0$ and $n_0$
such that $c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n)$ for all $n \geq n_0$.

_Proof._ By definition, $f(n) = \Theta(g(n))$ means $f(n) = O(g(n))$ and $f(n) = \Omega(g(n))$. The
former gives $f(n) \leq c_2 \cdot g(n)$ for some $c_2 > 0$And the latter gives
$f(n) \geq c_1 \cdot g(n)$ for some $c_1 > 0$. Combining yields the stated inequality.
$\blacksquare$

**Theorem 1.3 (Limit Rule).** If $\lim_{n \to \infty} f(n)/g(n) = c$ where $0 < c < \infty$Then
$f(n) = \Theta(g(n))$. If $c = 0$Then $f(n) = O(g(n))$. If $c = \infty$Then $g(n) = O(f(n))$.

_Proof._ If $c = 0$Then for any $\varepsilon > 0$There exists $n_0$ such that
$f(n)/g(n) < \varepsilon$ for all $n \geq n_0$So $f(n) \leq \varepsilon \cdot g(n)$Establishing
$f(n) = O(g(n))$. If $0 < c < \infty$Take $\varepsilon = c/2$; then
$(c/2) \cdot g(n) \leq f(n) \leq (3c/2) \cdot g(n)$ for sufficiently large $n$Giving $\Theta$. The
$c = \infty$ case is symmetric. $\blacksquare$

**Proposition 1.4.** Asymptotic notation is transitive: if $f = O(g)$ and $g = O(h)$Then $f = O(h)$.

_Proof._ There exist $c_1, n_1$ with $f(n) \leq c_1 g(n)$ for $n \geq n_1$And $c_2, n_2$ with
$g(n) \leq c_2 h(n)$ for $n \geq n_2$. Then $f(n) \leq c_1 c_2 h(n)$ for $n \geq \max(n_1, n_2)$.
$\blacksquare$

**Proposition 1.5.** $O$-notation is reflexive: $f = O(f)$ for all $f$.

_Proof._ Take $c = 1$ and $n_0 = 1$. Then $f(n) \leq 1 \cdot f(n)$ for all $n \geq 1$.
$\blacksquare$

<details>
<summary>Worked Example: Proving $n^2 + 3n + 1 = O(n^2)$</summary>

We must find $c > 0$ and $n_0$ such that $n^2 + 3n + 1 \leq c \cdot n^2$ for all $n \geq n_0$.

Note that $n^2 + 3n + 1 \leq n^2 + 3n^2 + n^2 = 5n^2$ for all $n \geq 1$ (since $n \geq 1$ implies
$3n \leq 3n^2$ and $1 \leq n^2$).

So take $c = 5$ and $n_0 = 1$.

To show tightness, note $n^2 + 3n + 1 \geq n^2$ for all $n \geq 0$So $n^2 + 3n + 1 = \Theta(n^2)$.

</details>

<details>
<summary>Worked Example: Proving $2^n \neq O(n^k)$ for any constant $k$</summary>

By the limit rule: $\lim_{n \to \infty} 2^n / n^k = \infty$ for any fixed $k$ (this follows from
repeated application of L'Hôpital’s rule, or from the fact that $\log(2^n) = n \log 2$ grows faster
than $\log(n^k) = k \log n$). Therefore $2^n = \omega(n^k)$ for all $k$And in particular
$2^n \neq O(n^k)$.

</details>

<details>
<summary>Worked Example: Sum of Harmonic Series and Its Use in Analysis</summary>

The $k$-th harmonic number is $H_k = \sum_{i=1}^{k} 1/i$. We show $H_k = \Theta(\log k)$.

**Upper bound:**
$H_k = \sum_{i=1}^{k} 1/i \leq 1 + \int_1^k \frac{1}{x}\, dx = 1 + \ln k = O(\log k)$.

**Lower bound:** $H_k \geq \int_1^{k+1} \frac{1}{x}\, dx = \ln(k+1) = \Omega(\log k)$.

Therefore $H_k = \Theta(\log k)$. This is used extensively in analysing algorithms like binary
search on unbounded domains and the expected depth of elements in a random BST.

</details>

<details>
<summary>Worked Example: Analysing a Nested Loop Algorithm</summary>

Consider the algorithm:

```
for i = 1 to n:
    for j = i to n:
        constant-time work
```

The total number of iterations is
$\sum_{i=1}^{n}(n - i + 1) = \sum_{k=1}^{n} k = n(n+1)/2 = \Theta(n^2)$.

Now consider:

```
for i = 1 to n:
    j = 1
    while j < n:
        j = j * 2
        constant-time work
```

The inner loop runs $\lfloor \log_2 n \rfloor + 1 = O(\log n)$ times, and the outer loop runs $n$
times. Total: $O(n \log n)$.

Now consider the triple loop:

```
for i = 1 to n:
    for j = 1 to i:
        for k = 1 to j:
            constant-time work
```

Total iterations: $\sum_{i=1}^{n} \sum_{j=1}^{i} j = \sum_{i=1}^{n} \frac{i(i+1)}{2} = \Theta(n^3)$.

</details>

### 1.2 Common Complexity Classes

| Class         | Name        | Example                          |
| ------------- | ----------- | -------------------------------- |
| $O(1)$        | Constant    | Array access by index            |
| $O(\log n)$   | Logarithmic | Binary search                    |
| $O(n)$        | Linear      | Linear search                    |
| $O(n \log n)$ | Log-linear  | Merge sort, heap sort            |
| $O(n^2)$      | Quadratic   | Bubble sort, insertion sort      |
| $O(n^3)$      | Cubic       | Naive matrix multiplication      |
| $O(2^n)$      | Exponential | Naive Fibonacci, subset problems |
| $O(n!)$       | Factorial   | Generating all permutations      |

**Proposition 1.6.** These classes form a strict hierarchy:
$$O(1) \subsetneq O(\log n) \subsetneq O(n) \subsetneq O(n \log n) \subsetneq O(n^2) \subsetneq O(n^3) \subsetneq O(2^n) \subsetneq O(n!)$$

### 1.3 Recurrences and the Master Theorem

Many divide-and-conquer algorithms yield recurrences of the form:

$$T(n) = aT(n/b) + f(n)$$

Where $a \geq 1$ is the number of subproblems, $b > 1$ is the factor by which the input is divided,
and $f(n)$ is the cost of dividing and combining.

**Theorem 1.7 (Master Theorem).** Let $a \geq 1$ and $b > 1$ be constants, let $f(n)$ be a function,
and let $T(n)$ be defined on the nonnegative integers by the recurrence $T(n) = aT(n/b) + f(n)$Where
we interpret $n/b$ to mean either $\lfloor n/b \rfloor$ or $\lceil n/b \rceil$. Let $c = \log_b a$.
Then:

1. If $f(n) = O(n^{c - \varepsilon})$ for some $\varepsilon > 0$Then $T(n) = \Theta(n^c)$.
2. If $f(n) = \Theta(n^c \log^k n)$ for some $k \geq 0$Then $T(n) = \Theta(n^c \log^{k+1} n)$.
3. If $f(n) = \Omega(n^{c + \varepsilon})$ for some $\varepsilon > 0$And if $a f(n/b) \leq q f(n)$
   for some constant $q < 1$ and all sufficiently large $n$ (the _regularity condition_), then
   $T(n) = \Theta(f(n))$.

_Proof (Case 1 sketch)._ The recursion tree has depth $\log_b n$. At level $i$There are $a^i$ nodes,
each costing $f(n/b^i)$. Since $f(n) = O(n^{c - \varepsilon})$The cost at level $i$ is
$a^i \cdot (n/b^i)^{c - \varepsilon} = n^{c - \varepsilon} \cdot (a / b^{c - \varepsilon})^i$. The
total cost is dominated by the leaves (level $\log_b n$), which contribute $a^{\log_b n} = n^c$. The
internal levels contribute a geometric series with ratio
$a / b^{c - \varepsilon} = b^\varepsilon > 1$So the leaf level dominates. $\blacksquare$

<details>
<summary>Worked Example: Merge Sort Recurrence</summary>

Merge sort divides into 2 subproblems of size $n/2$ and combines in $O(n)$ time.

$$T(n) = 2T(n/2) + \Theta(n)$$

Here $a = 2$, $b = 2$So $c = \log_2 2 = 1$. We have $f(n) = \Theta(n) = \Theta(n^c \log^0 n)$Which
is Case 2 with $k = 0$.

Therefore $T(n) = \Theta(n^1 \log^1 n) = \Theta(n \log n)$.

</details>

<details>
<summary>Worked Example: Binary Search Recurrence</summary>

$$T(n) = T(n/2) + O(1)$$

Here $a = 1$, $b = 2$So $c = \log_2 1 = 0$. We have $f(n) = O(1) = O(n^0)$. This matches Case 2 with
$k = 0$.

Therefore $T(n) = \Theta(\log n)$.

</details>

<details>
<summary>Worked Example: Strassen's Matrix Multiplication</summary>

Strassen's algorithm divides into 7 subproblems of size $n/2$ and combines in $O(n^2)$ time.

$$T(n) = 7T(n/2) + O(n^2)$$

Here $a = 7$, $b = 2$So $c = \log_2 7 \approx 2.807$. We have
$f(n) = O(n^2) = O(n^{c - \varepsilon})$ with $\varepsilon = c - 2 \approx 0.807$Which is Case 1.

Therefore $T(n) = \Theta(n^{\log_2 7}) = \Theta(n^{2.807})$.

</details>

### 1.4 Amortised Analysis

Amortised analysis gives the average cost per operation over a sequence of operations, even when
Individual operations may be expensive.

**Methods:**

1. **Aggregate analysis:** Compute total cost of $n$ operations, divide by $n$.
2. **Accounting method:** Assign an amortised cost to each operation; the sum of amortised costs
   must be an upper bound on the total actual cost.
3. **Potential method:** Define a potential function $\Phi$; the amortised cost of the $i$-th
   operation is $\hat{c}_i = c_i + \Phi(D_i) - \Phi(D_{i-1})$.

**Theorem 1.8 (Potential Method).** If $\Phi(D_i) \geq \Phi(D_0)$ for all $i \geq 1$Then the total
amortised cost $\sum_{i=1}^{n} \hat{c}_i$ is an upper bound on the total actual cost
$\sum_{i=1}^{n} c_i$.

_Proof._
$\sum_{i=1}^{n} \hat{c}_i = \sum_{i=1}^{n} (c_i + \Phi(D_i) - \Phi(D_{i-1})) = \sum_{i=1}^{n} c_i + \Phi(D_n) - \Phi(D_0) \geq \sum_{i=1}^{n} c_i$.
$\blacksquare$

**Example (Dynamic Array).** A dynamic array doubles in size when full. Insertion is $O(1)$
Amortised: most insertions cost $O(1)$; occasional resizing costs $O(n)$But is paid for by the
Surplus from previous $O(1)$ insertions.

<details>
<summary>Worked Example: Dynamic Array Amortised Analysis (Accounting Method)</summary>

Assign an amortised cost of 3 per insertion. The actual cost of insertion without resizing is 1. We
store the surplus of 2 as "credit" on each element in the array.

When the array of capacity $k$ is full and we must resize to capacity $2k$:

- The resizing cost is $k$ (copy all $k$ elements).
- We have $2k$ credits stored (2 per element).
- We spend $k$ credits on the copy, leaving $k$ credits.
- The new array has $k$ elements, so we need $2k$ more credits, but we already have $k$.
- Subsequent insertions build up credits again.

Since the total credits are always non-negative, the amortised cost of 3 per insertion covers all
actual costs.

</details>

<details>
<summary>Worked Example: Dynamic Array Amortised Analysis (Potential Method)</summary>

Define the potential function $\Phi(D) = 2n - m$ where $n$ is the number of elements and $m$ is the
capacity. We require $m \geq n$So $\Phi \geq 0$ (since $2n - n = n \geq 0$).

Case 1: No resize. $\hat{c} = 1 + (2(n+1) - m) - (2n - m) = 1 + 2 = 3$.

Case 2: Resize from $m = n$ to $m = 2n$.
$\hat{c} = (1 + n) + (2(n+1) - 2n) - (2n - n) = (n + 1) + 2 - n = 3$.

In both cases, the amortised cost is $O(1)$.

</details>

:::caution Common Pitfall Amortised analysis gives a guarantee over a _sequence_ of operations, not
a per-operation worst-case bound. A single operation can still be expensive (e.g., a resize in a
dynamic array costs $O(n)$). Amortised bounds are meaningful only when the sequence length is not
bounded by a constant.



:::
