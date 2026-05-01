---
title: Algorithms and Data Structures
description:
  University-level notes on Algorithms and Data Structures: 1. Algorithm
  Analysis; 1.1 Asymptotic Notation; 1.2 Common Complexity Classes.
date: 2026-04-23T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: algorithms-and-data-structures
---

## 1. Algorithm Analysis

### 1.1 Asymptotic Notation

**Definition.** $f(n) = O(g(n))$ if there exist constants $c > 0$ and $n_0$ such that
$f(n) \leq c \cdot g(n)$ for all $n \geq n_0$.

**Definition.** $f(n) = \Omega(g(n))$ if there exist constants $c > 0$ and $n_0$ such that
$f(n) \geq c \cdot g(n)$ for all $n \geq n_0$.

**Definition.** $f(n) = \Theta(g(n))$ if $f(n) = O(g(n))$ and $f(n) = \Omega(g(n))$.

**Definition.** $f(n) = o(g(n))$ if $\lim_{n \to \infty} f(n)/g(n) = 0$.

**Definition.** $f(n) = \omega(g(n))$ if $\lim_{n \to \infty} g(n)/f(n) = 0$.

**Theorem 1.1.** $f(n) = O(g(n))$ if and only if $g(n) = \Omega(f(n))$.

*Proof.* Suppose $f(n) = O(g(n))$. Then there exist $c, n_0$ such that $f(n) \leq c \cdot g(n)$ for all $n \geq n_0$, hence $g(n) \geq (1/c) \cdot f(n)$ for all $n \geq n_0$, so $g(n) = \Omega(f(n))$. The converse follows by symmetry. $\blacksquare$

**Theorem 1.2.** $f(n) = \Theta(g(n))$ if and only if there exist constants $c_1, c_2 > 0$ and $n_0$ such that $c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n)$ for all $n \geq n_0$.

*Proof.* By definition, $f(n) = \Theta(g(n))$ means $f(n) = O(g(n))$ and $f(n) = \Omega(g(n))$. The former gives $f(n) \leq c_2 \cdot g(n)$ for some $c_2 > 0$, and the latter gives $f(n) \geq c_1 \cdot g(n)$ for some $c_1 > 0$. Combining yields the stated inequality. $\blacksquare$

**Theorem 1.3 (Limit Rule).** If $\lim_{n \to \infty} f(n)/g(n) = c$ where $0 < c < \infty$, then
$f(n) = \Theta(g(n))$. If $c = 0$, then $f(n) = O(g(n))$. If $c = \infty$, then $g(n) = O(f(n))$.

*Proof.* If $c = 0$, then for any $\varepsilon > 0$, there exists $n_0$ such that $f(n)/g(n) < \varepsilon$ for all $n \geq n_0$, so $f(n) \leq \varepsilon \cdot g(n)$, establishing $f(n) = O(g(n))$. If $0 < c < \infty$, take $\varepsilon = c/2$; then $(c/2) \cdot g(n) \leq f(n) \leq (3c/2) \cdot g(n)$ for sufficiently large $n$, giving $\Theta$. The $c = \infty$ case is symmetric. $\blacksquare$

**Proposition 1.4.** Asymptotic notation is transitive: if $f = O(g)$ and $g = O(h)$, then $f = O(h)$.

*Proof.* There exist $c_1, n_1$ with $f(n) \leq c_1 g(n)$ for $n \geq n_1$, and $c_2, n_2$ with $g(n) \leq c_2 h(n)$ for $n \geq n_2$. Then $f(n) \leq c_1 c_2 h(n)$ for $n \geq \max(n_1, n_2)$. $\blacksquare$

**Proposition 1.5.** $O$-notation is reflexive: $f = O(f)$ for all $f$.

*Proof.* Take $c = 1$ and $n_0 = 1$. Then $f(n) \leq 1 \cdot f(n)$ for all $n \geq 1$. $\blacksquare$

<details>
<summary>Worked Example: Proving $n^2 + 3n + 1 = O(n^2)$</summary>

We must find $c > 0$ and $n_0$ such that $n^2 + 3n + 1 \leq c \cdot n^2$ for all $n \geq n_0$.

Note that $n^2 + 3n + 1 \leq n^2 + 3n^2 + n^2 = 5n^2$ for all $n \geq 1$ (since $n \geq 1$ implies $3n \leq 3n^2$ and $1 \leq n^2$).

So take $c = 5$ and $n_0 = 1$.

To show tightness, note $n^2 + 3n + 1 \geq n^2$ for all $n \geq 0$, so $n^2 + 3n + 1 = \Theta(n^2)$.
</details>

<details>
<summary>Worked Example: Proving $2^n \neq O(n^k)$ for any constant $k$</summary>

By the limit rule: $\lim_{n \to \infty} 2^n / n^k = \infty$ for any fixed $k$ (this follows from repeated application of L'Hôpital's rule, or from the fact that $\log(2^n) = n \log 2$ grows faster than $\log(n^k) = k \log n$). Therefore $2^n = \omega(n^k)$ for all $k$, and in particular $2^n \neq O(n^k)$.
</details>

<details>
<summary>Worked Example: Sum of Harmonic Series and Its Use in Analysis</summary>

The $k$-th harmonic number is $H_k = \sum_{i=1}^{k} 1/i$. We show $H_k = \Theta(\log k)$.

**Upper bound:** $H_k = \sum_{i=1}^{k} 1/i \leq 1 + \int_1^k \frac{1}{x}\, dx = 1 + \ln k = O(\log k)$.

**Lower bound:** $H_k \geq \int_1^{k+1} \frac{1}{x}\, dx = \ln(k+1) = \Omega(\log k)$.

Therefore $H_k = \Theta(\log k)$. This is used extensively in analysing algorithms like binary search on unbounded domains and the expected depth of elements in a random BST.
</details>

<details>
<summary>Worked Example: Analysing a Nested Loop Algorithm</summary>

Consider the algorithm:
```
for i = 1 to n:
    for j = i to n:
        constant-time work
```

The total number of iterations is $\sum_{i=1}^{n}(n - i + 1) = \sum_{k=1}^{n} k = n(n+1)/2 = \Theta(n^2)$.

Now consider:
```
for i = 1 to n:
    j = 1
    while j < n:
        j = j * 2
        constant-time work
```

The inner loop runs $\lfloor \log_2 n \rfloor + 1 = O(\log n)$ times, and the outer loop runs $n$ times. Total: $O(n \log n)$.

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

| Class       | Name               | Example                          |
| ----------- | ------------------ | -------------------------------- |
| $O(1)$      | Constant           | Array access by index            |
| $O(\log n)$ | Logarithmic        | Binary search                    |
| $O(n)$      | Linear             | Linear search                    |
| $O(n \log n)$ | Log-linear       | Merge sort, heap sort            |
| $O(n^2)$    | Quadratic          | Bubble sort, insertion sort      |
| $O(n^3)$    | Cubic              | Naive matrix multiplication      |
| $O(2^n)$    | Exponential        | Naive Fibonacci, subset problems |
| $O(n!)$     | Factorial          | Generating all permutations      |

**Proposition 1.6.** These classes form a strict hierarchy:
$$O(1) \subsetneq O(\log n) \subsetneq O(n) \subsetneq O(n \log n) \subsetneq O(n^2) \subsetneq O(n^3) \subsetneq O(2^n) \subsetneq O(n!)$$

### 1.3 Recurrences and the Master Theorem

Many divide-and-conquer algorithms yield recurrences of the form:

$$T(n) = aT(n/b) + f(n)$$

where $a \geq 1$ is the number of subproblems, $b > 1$ is the factor by which the input is divided, and $f(n)$ is the cost of dividing and combining.

**Theorem 1.7 (Master Theorem).** Let $a \geq 1$ and $b > 1$ be constants, let $f(n)$ be a function, and let $T(n)$ be defined on the nonnegative integers by the recurrence $T(n) = aT(n/b) + f(n)$, where we interpret $n/b$ to mean either $\lfloor n/b \rfloor$ or $\lceil n/b \rceil$. Let $c = \log_b a$. Then:

1. If $f(n) = O(n^{c - \varepsilon})$ for some $\varepsilon > 0$, then $T(n) = \Theta(n^c)$.
2. If $f(n) = \Theta(n^c \log^k n)$ for some $k \geq 0$, then $T(n) = \Theta(n^c \log^{k+1} n)$.
3. If $f(n) = \Omega(n^{c + \varepsilon})$ for some $\varepsilon > 0$, and if $a f(n/b) \leq q f(n)$ for some constant $q < 1$ and all sufficiently large $n$ (the *regularity condition*), then $T(n) = \Theta(f(n))$.

*Proof (Case 1 sketch).* The recursion tree has depth $\log_b n$. At level $i$, there are $a^i$ nodes, each costing $f(n/b^i)$. Since $f(n) = O(n^{c - \varepsilon})$, the cost at level $i$ is $a^i \cdot (n/b^i)^{c - \varepsilon} = n^{c - \varepsilon} \cdot (a / b^{c - \varepsilon})^i$. The total cost is dominated by the leaves (level $\log_b n$), which contribute $a^{\log_b n} = n^c$. The internal levels contribute a geometric series with ratio $a / b^{c - \varepsilon} = b^\varepsilon > 1$, so the leaf level dominates. $\blacksquare$

<details>
<summary>Worked Example: Merge Sort Recurrence</summary>

Merge sort divides into 2 subproblems of size $n/2$ and combines in $O(n)$ time.

$$T(n) = 2T(n/2) + \Theta(n)$$

Here $a = 2$, $b = 2$, so $c = \log_2 2 = 1$. We have $f(n) = \Theta(n) = \Theta(n^c \log^0 n)$, which is Case 2 with $k = 0$.

Therefore $T(n) = \Theta(n^1 \log^1 n) = \Theta(n \log n)$.
</details>

<details>
<summary>Worked Example: Binary Search Recurrence</summary>

$$T(n) = T(n/2) + O(1)$$

Here $a = 1$, $b = 2$, so $c = \log_2 1 = 0$. We have $f(n) = O(1) = O(n^0)$. This matches Case 2 with $k = 0$.

Therefore $T(n) = \Theta(\log n)$.
</details>

<details>
<summary>Worked Example: Strassen's Matrix Multiplication</summary>

Strassen's algorithm divides into 7 subproblems of size $n/2$ and combines in $O(n^2)$ time.

$$T(n) = 7T(n/2) + O(n^2)$$

Here $a = 7$, $b = 2$, so $c = \log_2 7 \approx 2.807$. We have $f(n) = O(n^2) = O(n^{c - \varepsilon})$ with $\varepsilon = c - 2 \approx 0.807$, which is Case 1.

Therefore $T(n) = \Theta(n^{\log_2 7}) = \Theta(n^{2.807})$.
</details>

### 1.4 Amortised Analysis

Amortised analysis gives the average cost per operation over a sequence of operations, even when
individual operations may be expensive.

**Methods:**

1. **Aggregate analysis:** Compute total cost of $n$ operations, divide by $n$.
2. **Accounting method:** Assign an amortised cost to each operation; the sum of amortised costs
   must be an upper bound on the total actual cost.
3. **Potential method:** Define a potential function $\Phi$; the amortised cost of the $i$-th
   operation is $\hat{c}_i = c_i + \Phi(D_i) - \Phi(D_{i-1})$.

**Theorem 1.8 (Potential Method).** If $\Phi(D_i) \geq \Phi(D_0)$ for all $i \geq 1$, then the total amortised cost $\sum_{i=1}^{n} \hat{c}_i$ is an upper bound on the total actual cost $\sum_{i=1}^{n} c_i$.

*Proof.* $\sum_{i=1}^{n} \hat{c}_i = \sum_{i=1}^{n} (c_i + \Phi(D_i) - \Phi(D_{i-1})) = \sum_{i=1}^{n} c_i + \Phi(D_n) - \Phi(D_0) \geq \sum_{i=1}^{n} c_i$. $\blacksquare$

**Example (Dynamic Array).** A dynamic array doubles in size when full. Insertion is $O(1)$
amortised: most insertions cost $O(1)$; occasional resizing costs $O(n)$, but is paid for by the
surplus from previous $O(1)$ insertions.

<details>
<summary>Worked Example: Dynamic Array Amortised Analysis (Accounting Method)</summary>

Assign an amortised cost of 3 per insertion. The actual cost of insertion without resizing is 1. We store the surplus of 2 as "credit" on each element in the array.

When the array of capacity $k$ is full and we must resize to capacity $2k$:
- The resizing cost is $k$ (copy all $k$ elements).
- We have $2k$ credits stored (2 per element).
- We spend $k$ credits on the copy, leaving $k$ credits.
- The new array has $k$ elements, so we need $2k$ more credits, but we already have $k$.
- Subsequent insertions build up credits again.

Since the total credits are always non-negative, the amortised cost of 3 per insertion covers all actual costs.
</details>

<details>
<summary>Worked Example: Dynamic Array Amortised Analysis (Potential Method)</summary>

Define the potential function $\Phi(D) = 2n - m$ where $n$ is the number of elements and $m$ is the capacity. We require $m \geq n$, so $\Phi \geq 0$ (since $2n - n = n \geq 0$).

Case 1: No resize. $\hat{c} = 1 + (2(n+1) - m) - (2n - m) = 1 + 2 = 3$.

Case 2: Resize from $m = n$ to $m = 2n$. $\hat{c} = (1 + n) + (2(n+1) - 2n) - (2n - n) = (n + 1) + 2 - n = 3$.

In both cases, the amortised cost is $O(1)$.
</details>

:::caution Common Pitfall
Amortised analysis gives a guarantee over a *sequence* of operations, not a per-operation worst-case bound. A single operation can still be expensive (e.g., a resize in a dynamic array costs $O(n)$). Amortised bounds are meaningful only when the sequence length is not bounded by a constant.
:::

## 2. Fundamental Data Structures

### 2.1 Arrays and Linked Lists

**Array.** Contiguous memory, $O(1)$ access by index, $O(n)$ insertion/deletion (shift required).

| Operation         | Array | Singly Linked List | Doubly Linked List |
| ----------------- | ----- | ------------------ | ------------------ |
| Access by index   | $O(1)$ | $O(n)$           | $O(n)$             |
| Search (by value) | $O(n)$ | $O(n)$            | $O(n)$             |
| Insert at head    | $O(n)$ | $O(1)$            | $O(1)$             |
| Insert at tail    | $O(1)$ | $O(n)$            | $O(1)$*            |
| Delete at head    | $O(n)$ | $O(1)$            | $O(1)$             |
| Delete at tail    | $O(n)$ | $O(n)$            | $O(1)$*            |
| Insert at position| $O(n)$ | $O(n)$            | $O(1)$*            |
| Space overhead    | $0$    | $O(n)$            | $O(n)$             |

*Given a pointer to the node or its predecessor.

**Linked List.** Each node stores data and a pointer to the next node. $O(1)$ insertion/deletion at
head (given pointer), $O(n)$ access by position.

**Doubly Linked List.** Each node has pointers to both next and previous nodes. $O(1)$ insertion
and deletion at any position (given pointers to the node and its neighbours).

<details>
<summary>Worked Example: Reversing a Singly Linked List</summary>

To reverse a singly linked list in $O(n)$ time and $O(1)$ space:

```
prev = null
curr = head
while curr != null:
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
head = prev
```

At each iteration, we move one node to the front of the reversed list. After $n$ iterations, all $n$ nodes are reversed.
</details>

### 2.2 Stacks and Queues

**Stack.** Last-in, first-out (LIFO). Operations: push, pop, peek, all $O(1)$.

**Queue.** First-in, first-out (FIFO). Operations: enqueue, dequeue, peek, all $O(1)$.

**Implementation.** Both can be implemented with arrays (with circular buffer) or linked lists.

<details>
<summary>Worked Example: Implementing a Queue with Two Stacks</summary>

A queue can be implemented using two stacks `in_stack` and `out_stack`.

- `enqueue(x)`: push $x$ onto `in_stack`. $O(1)$.
- `dequeue()`: if `out_stack` is empty, pop all elements from `in_stack` and push onto `out_stack`. Then pop from `out_stack`.

The `dequeue` operation is $O(1)$ amortised: each element is moved from `in_stack` to `out_stack` at most once across all operations. Over $n$ operations, the total number of element moves is at most $n$, giving $O(1)$ amortised per dequeue.
</details>

### 2.3 Hash Tables

A **hash table** maps keys to values using a hash function $h : K \to \\{0, 1, \ldots, m - 1\\}$.

**Collision resolution:**
- **Chaining:** Each bucket is a linked list. Average case: $O(1 + \alpha)$ where $\alpha = n/m$
  is the load factor.
- **Open addressing (linear probing):** Insert into the next available slot. Average case: $O(1/(1-\alpha))$.

**Theorem 2.1 (Uniform Hashing).** Under the assumption of simple uniform hashing, the expected
length of a chain in a hash table with chaining is $\alpha = n/m$.

*Proof.* Under simple uniform hashing, each of the $n$ keys is equally likely to hash to any of the $m$ slots. For any given key $k$, the expected number of other keys that hash to the same slot as $k$ is $(n - 1)/m < \alpha$. Including $k$ itself, the expected chain length is $1 + (n-1)/m \leq 1 + \alpha$. $\blacksquare$

**Theorem 2.2 (Successful Search with Chaining).** Under simple uniform hashing, the expected time for a successful search in a hash table with chaining is $O(1 + \alpha/2)$.

*Proof.* The expected length of the list containing the searched element is $1 + (n - 1)/m$, since $n - 1$ other elements are distributed uniformly. On average, the searched element is halfway through its list, giving $(1 + (n-1)/m)/2 + 1/2$ comparisons (we examine elements before the target plus the target itself). This equals $1 + \alpha/2 - 1/(2m) = O(1 + \alpha)$. $\blacksquare$

**Double Hashing.** Uses two hash functions: $h(k, i) = (h_1(k) + i \cdot h_2(k)) \bmod m$, where $h_2(k)$ is relatively prime to $m$. This avoids the clustering problems of linear probing.

<details>
<summary>Worked Example: Choosing a Good Hash Function</summary>

For integer keys, a common choice is the multiplication method: $h(k) = \lfloor m \cdot (k \cdot A \bmod 1) \rfloor$ where $A = (\sqrt{5} - 1)/2 \approx 0.618$ (the inverse golden ratio).

For string keys, the polynomial rolling hash: $h(s) = \left(\sum_{i=0}^{k-1} s[i] \cdot p^{k-1-i}\right) \bmod m$ where $p$ is a prime (e.g., 31 or 127).

Both avoid clustering better than simple modulo hashing when the input distribution is adversarial.
</details>

### 2.4 Trees

**Binary Search Tree (BST).** For each node: left subtree values $\lt{}$ node value, right subtree values
$\gt{}$ node value.

- Search, insert, delete: $O(h)$ where $h$ is the height.
- For a balanced BST, $h = O(\log n)$.

**Theorem 2.3.** The expected height of a randomly built BST with $n$ distinct keys is $O(\log n)$.

*Proof.* Let $X_n$ be the height of a BST built from $n$ random keys. Let $Y_n = 2^{X_n}$. Then $\mathrm{E}[Y_n] \leq \frac{1}{4} \sum_{i=0}^{n-1} \binom{n}{i} \mathrm{E}[Y_i] \mathrm{E}[Y_{n-1-i}] / n$. Using the indicator random variable technique, one can show $\mathrm{E}[Y_n] \leq \frac{c^{n+1}}{n^{3/2}} \sum_{i=0}^{n-1} \frac{i^{3/2}(n-1-i)^{3/2}}{c^i c^{n-1-i}} \leq c \cdot n^{3/2}$ for some constant $c$. Taking logs gives $\mathrm{E}[X_n] = \mathrm{E}[\log Y_n] \leq \log \mathrm{E}[Y_n] = O(\log n)$ by Jensen's inequality. $\blacksquare$

#### 2.4.1 AVL Trees

**Definition.** An AVL tree is a BST where for every node, the heights of its left and right subtrees differ by at most 1. The **balance factor** of a node is the height of its left subtree minus the height of its right subtree; valid balance factors are $\\{-1, 0, 1\\}$.

**Rotations.** After insertion or deletion, the balance factor may become $\pm 2$. This is fixed by rotations:

- **Right rotation (LL case):** Balance factor $+2$ at node $A$, balance factor $+1$ at left child $B$.
  ```
       A           B
      / \         / \
     B   C  →   D   A
    / \             / \
   D   E           E   C
  ```

- **Left rotation (RR case):** Mirror of right rotation.

- **Left-Right rotation (LR case):** Balance factor $+2$ at $A$, balance factor $-1$ at left child $B$. First left-rotate $B$, then right-rotate $A$.

- **Right-Left rotation (RL case):** Mirror of LR case.

**Theorem 2.4.** An AVL tree with $n$ nodes has height $h \leq 1.4404 \cdot \log_2(n + 2) - 1.3277$.

*Proof.* Let $N(h)$ be the minimum number of nodes in an AVL tree of height $h$. We have $N(0) = 1$, $N(1) = 2$, and $N(h) = 1 + N(h-1) + N(h-2)$ for $h \geq 2$. This is the Fibonacci recurrence, giving $N(h) = F_{h+3} - 1$. Using $F_h = \frac{\phi^h - \hat{\phi}^h}{\sqrt{5}}$ where $\phi = \frac{1+\sqrt{5}}{2}$, we get $N(h) > \phi^h / \sqrt{5} - 1$, so $h \lt{} \log_\phi(\sqrt{5}(n + 1)) \approx 1.4404 \log_2(n + 1)$. $\blacksquare$

**Corollary 2.5.** All AVL tree operations (search, insert, delete) run in $O(\log n)$ time.

*Proof.* Each operation visits $O(h) = O(\log n)$ nodes along a root-to-leaf path, and each rotation is $O(1)$. Since at most $O(\log n)$ rotations are needed (at most 2 per level), the total cost is $O(\log n)$. $\blacksquare$

#### 2.4.2 Red-Black Trees

**Definition.** A red-black tree is a BST satisfying:
1. Every node is either red or black.
2. The root is black.
3. Every leaf (NIL sentinel) is black.
4. If a node is red, both its children are black.
5. For every node, all simple paths from the node to descendant leaves contain the same number of black nodes (the **black-height**).

**Theorem 2.6.** A red-black tree with $n$ internal nodes has height $h \leq 2 \log_2(n + 1)$.

*Proof.* Let $r$ be the root. By property 5, at least half the nodes on any root-to-leaf path are black (by property 4, no two reds are adjacent), so the black-height $bh(r) \geq h/2$. Let $S(h, bh)$ be the minimum number of internal nodes in a subtree of height $h$ and black-height $bh$. Then $S(h, bh) \geq 2^{bh} - 1$ (proved by induction on $bh$, using the fact that each child has black-height at least $bh - 1$ and the root is black). Since $bh(r) \geq h/2$ and $n \geq 2^{bh(r)} - 1 \geq 2^{h/2} - 1$, we get $h \leq 2 \log_2(n + 1)$. $\blacksquare$

**Insertion.** Insert as in a standard BST (colour the new node red), then fix violations by recolouring and rotating up to $O(\log n)$ times.

**Deletion.** More complex than insertion. When a black node is removed, we may need to fix the black-height property by recolouring and rotating. The fix-up procedure takes $O(\log n)$ time.

#### 2.4.3 B-Trees

**Definition.** A B-tree of minimum degree $t \geq 2$ is a rooted tree satisfying:
1. Every node has at most $2t - 1$ keys.
2. Every non-root node has at least $t - 1$ keys (hence at least $t$ children).
3. The root has at least 1 key.
4. All leaves appear at the same depth.

**Theorem 2.7.** A B-tree with $n$ keys and minimum degree $t$ has height $h \leq \log_t \frac{n+1}{2}$.

*Proof.* The root has at least 1 key and 2 children. At depth 1, each node has at least $t - 1$ keys and $t$ children. At depth $d \geq 1$, the number of nodes is at least $2t^{d-1}$, each with at least $t - 1$ keys. So the total number of keys is at least $1 + 2(t-1) \sum_{i=0}^{h-1} t^i = 1 + 2(t-1) \cdot \frac{t^h - 1}{t - 1} = 2t^h - 1$. Setting $n \geq 2t^h - 1$ gives $h \leq \log_t((n+1)/2)$. $\blacksquare$

<details>
<summary>Worked Example: Red-Black Tree Insertion Trace</summary>

Insert keys 7, 3, 18, 10, 22, 8, 11, 26 into an initially empty red-black tree.

Insert 7: Root is coloured black. $T = [7(B)]$

Insert 3: Left child of 7, coloured red. $T = [7(B) \leftarrow 3(R)]$. Valid (root is black, no red-red violation).

Insert 18: Right child of 7, coloured red. $T = [3(R) \leftarrow 7(B) \rightarrow 18(R)]$. Valid.

Insert 10: Insert as left child of 18, coloured red. Now 18 has red child 10. Uncle of 10 is 3(R) — **Case 1 (uncle is red)**: recolour uncle 3 black, parent 18 black, grandparent 7 red. Grandparent 7 is root, so recolour 7 black.

Result: $T = [3(B) \leftarrow 7(B) \rightarrow 18(B)]$ with $10(R)$ under $18$.

Insert 22: Right child of 18, coloured red. Uncle of 22 is 10(R) — Case 1 again: recolour 10 black, 22 black, 18 red. Parent 18 is not root, grandparent is 7(B). Now 7 has right child 18(R). Check 7's left child: 3(B). No violation.

Insert 8: Left child of 10, coloured red. Uncle of 8 is 22(R) — Case 1: recolour 8 black, 22 black, 10 red. Now 10(R) is left child of 18(B). Check grandparent 7: right child 18(B) with left child 10(R). No red-red violation.

Insert 11: Right child of 10, coloured red. Now 10(R) has both children red — wait, 10 is red and 11 is red: **violation**. Uncle of 11 is 8(R) — Case 1: recolour 8 black, 11 black, 10 red. Grandparent 18(B): 10(R) is left child, 22(B) is right child. No violation.

Insert 26: Right child of 22, coloured red. Uncle of 26 is 10(R) — Case 1: recolour 10 black, 26 black, 22 red. Now 22(R) is right child of 18(B). Check left child of 18: 10(B). Valid.
</details>

### 2.5 Skip Lists

A **skip list** is a probabilistic data structure that provides $O(\log n)$ expected-time search, insertion, and deletion. It consists of multiple levels of linked lists.

**Structure:**
- Level 0 is a standard linked list containing all elements in sorted order.
- Each element is promoted to level 1 with probability $p$ (typically $p = 1/2$).
- Each level-$i$ element is promoted to level $i+1$ independently with probability $p$.
- A sentinel head node links to the first element at every level.

**Theorem 2.8.** The expected number of levels in a skip list with $n$ elements is $O(\log n)$.

*Proof.* An element reaches level $i$ with probability $p^i$. The expected number of elements at level $i$ is $np^i$. The highest non-empty level is approximately $\log_{1/p} n$. $\blacksquare$

**Theorem 2.9.** Search, insert, and delete in a skip list take $O(\log n)$ expected time.

*Proof.* The search path at each level $i$ moves right to find an element whose successor at level $i$ is greater than the target, then drops to level $i - 1$. At each level, the expected number of rightward steps is at most $1/p$ (a geometric distribution argument). With $O(\log_{1/p} n)$ levels, the total expected work is $O(\log n / p) = O(\log n)$. $\blacksquare$

<details>
<summary>Worked Example: Skip List Search</summary>

Search for key 25 in a skip list containing keys $[3, 7, 12, 19, 25, 31, 42]$ with the following level structure (probability $p = 1/2$):

```
Level 3:  [HEAD] -------------------------> [31] ---------->
Level 2:  [HEAD] ---------> [12] -------------------------->
Level 1:  [HEAD] -> [7] -> [12] -> [19] -> [25] -> [31] -> [42]
Level 0:  [HEAD] -> [7] -> [12] -> [19] -> [25] -> [31] -> [42]
```

Search starts at HEAD, level 3:
- Move right to 31. $31 > 25$, drop to level 2.
- At level 2, move right to 12. $12 \leq 25$, move right — next is NIL. Drop to level 1.
- At level 1, move right to 19. $19 \leq 25$, move right to 25. $25 = 25$. Found!

The search examined keys 31, 12, 19, 25 — 4 comparisons across 3 levels.
</details>

<details>
<summary>Worked Example: Skip List Insertion</summary>

Insert key 15 into the skip list above.

1. Search for insertion position: traverse levels 3, 2, 1 to find that 15 goes between 12 and 19.
2. Insert 15 at level 0 (always). Randomly promote: suppose coin flip says promote to level 1. Insert at level 1. Flip again: promote to level 2. Insert at level 2. Flip again: don't promote. Stop.

```
Level 3:  [HEAD] -------------------------> [31] ---------->
Level 2:  [HEAD] ---------> [12] -> [15] ------------------>
Level 1:  [HEAD] -> [7] -> [12] -> [15] -> [19] -> [25] -> [31] -> [42]
Level 0:  [HEAD] -> [7] -> [12] -> [15] -> [19] -> [25] -> [31] -> [42]
```

Insertion takes $O(\log n)$ expected time (search path + insertions at promoted levels).
</details>

### 2.6 Bloom Filters

A **Bloom filter** is a space-efficient probabilistic data structure for set membership testing. It may produce false positives but never false negatives.

**Structure:** A bit array of $m$ bits (initially all 0) and $k$ independent hash functions $h_1, \ldots, h_k$.

**Operations:**
- **Insert** $x$: set bits $h_1(x), h_2(x), \ldots, h_k(x)$ to 1.
- **Query** $x$: return true if all $h_1(x), \ldots, h_k(x)$ are set to 1.

**Theorem 2.10.** After inserting $n$ elements into a Bloom filter of size $m$ with $k$ hash functions, the probability of a false positive is approximately $\left(1 - e^{-kn/m}\right)^k$.

*Proof.* After inserting $n$ elements, each of the $m$ bits is set to 0 with probability $(1 - 1/m)^{kn} \approx e^{-kn/m}$. The probability that all $k$ bits for a query element are set is $(1 - e^{-kn/m})^k$. $\blacksquare$

**Optimal number of hash functions.** The false positive rate is minimised when $k = (m/n) \ln 2$, giving a minimum rate of approximately $(1/2)^k = 0.6185^{m/n}$.

<details>
<summary>Worked Example: Bloom Filter Configuration</summary>

We want to store $n = 10000$ URLs with a false positive rate of at most 1%.

From the formula: $(1 - e^{-kn/m})^k \leq 0.01$.

Optimal $k = (m/n) \ln 2$. At the optimal point, the false positive rate is $(1/2)^k \approx 0.6185^{m/n}$.

We need $0.6185^{m/n} \leq 0.01$, so $m/n \geq \ln(0.01) / \ln(0.6185) \approx 9.585$.

Take $m = 95850$ bits $\approx 11.5$ KB. Then $k = (95850 / 10000) \ln 2 \approx 6.64$, so use $k = 7$ hash functions.

This requires only 11.5 KB of memory versus approximately 600 KB for storing the URLs as 60-byte strings.
</details>

<details>
<summary>Worked Example: Bloom Filter Operations Trace</summary>

A Bloom filter has $m = 10$ bits, $k = 2$ hash functions: $h_1(x) = x \bmod 10$, $h_2(x) = (x \cdot 3) \bmod 10$.

Insert 15: $h_1(15) = 5$, $h_2(15) = 5 \cdot 3 \bmod 10 = 5$. Set bit 5. Bit array: `0000010000`

Insert 22: $h_1(22) = 2$, $h_2(22) = 22 \cdot 3 \bmod 10 = 6$. Set bits 2, 6. Bit array: `0010010100`

Insert 37: $h_1(37) = 7$, $h_2(37) = 37 \cdot 3 \bmod 10 = 1$. Set bits 1, 7. Bit array: `0110010110`

Query 22: $h_1(22) = 2$ (set), $h_2(22) = 6$ (set). Result: **possibly in set** (true positive).

Query 42: $h_1(42) = 2$ (set), $h_2(42) = 42 \cdot 3 \bmod 10 = 6$ (set). Result: **possibly in set** (false positive!).

Query 50: $h_1(50) = 0$ (not set). Result: **definitely not in set** (true negative).
</details>

### 2.7 Heaps

A **binary heap** is a complete binary tree satisfying the heap property:

- **Max-heap:** parent $\geq$ children.
- **Min-heap:** parent $\leq$ children.

Implemented as an array: parent of node $i$ is at $\lfloor(i-1)/2\rfloor$; children at $2i+1$ and $2i+2$.

**Operations:** insert $O(\log n)$, extract-max/min $O(\log n)$, peek $O(1)$.

**Theorem 2.11 (Build-Heap).** `buildHeap` on an array of $n$ elements runs in $O(n)$ time.

*Proof.* `buildHeap` calls `heapify` on each of the $\lfloor n/2 \rfloor$ non-leaf nodes. The cost of `heapify` at a node of height $h$ is $O(h)$. The total cost is $\sum_{h=0}^{\lfloor \log n \rfloor} \lceil n / 2^{h+1} \rceil \cdot O(h) = O\left(n \sum_{h=0}^{\infty} h / 2^h\right) = O(n)$, since $\sum_{h=0}^{\infty} h / 2^h = 2$. $\blacksquare$

<details>
<summary>Worked Example: Build-Heap Step by Step</summary>

Build a max-heap from the array $[4, 10, 3, 5, 1, 8, 2]$.

The array represents the tree:
```
        4
       / \
      10   3
     / \  / \
    5  1 8   2
```

Non-leaf nodes (indices $\lfloor 7/2 \rfloor - 1 = 2$ down to 0): nodes 3, 10, 4.

**Heapify index 2 (value 3):** Children are 8 and 2. Swap 3 with 8. Array: $[4, 10, 8, 5, 1, 3, 2]$.

```
        4
       / \
      10   8
     / \  / \
    5  1 3   2
```

**Heapify index 1 (value 10):** Children are 5 and 1. 10 is largest. No swap.

**Heapify index 0 (value 4):** Children are 10 and 8. Swap with 10. Array: $[10, 4, 8, 5, 1, 3, 2]$.

```
        10
       /  \
      4    8
     / \  / \
    5  1 3   2
```

Now heapify index 1 (value 4): Children are 5 and 1. Swap with 5. Array: $[10, 5, 8, 4, 1, 3, 2]$.

```
        10
       /  \
      5    8
     / \  / \
    4  1 3   2
```

This is a valid max-heap. Total operations: 3 swaps = $O(n)$.
</details>

### 2.8 Union-Find (Disjoint Set Union)

The **Union-Find** data structure maintains a partition of a set into disjoint subsets, supporting:
- **MakeSet**($x$): Create a singleton set $\\{x\\}$.
- **Find**($x$): Return the representative of the set containing $x$.
- **Union**($x, y$): Merge the sets containing $x$ and $y$.

**Implementation with path compression and union by rank:**

- Each set is represented as a rooted tree.
- `Find` follows parent pointers and compresses the path (makes every node on the path point directly to the root).
- `Union` attaches the shorter tree under the root of the taller tree (by rank/size).

**Theorem 2.12.** With both path compression and union by rank, the amortised time per operation is $O(\alpha(n))$, where $\alpha(n)$ is the inverse Ackermann function.

*Proof (outline).* The inverse Ackermann function $\alpha(n)$ grows so slowly that $\alpha(n) \leq 4$ for all practical values of $n$ ($n \leq 2^{2^{2^{65536}}}$). The proof uses a potential function argument on the levels of the tree. Each node is assigned a *level* based on its rank. The key insight is that path compression prevents the number of nodes at high levels from growing. The total number of Find operations that can charge to any level-$\ell$ node is bounded by $O(n \cdot F^{-1}(\ell))$ where $F$ is a fast-growing function. Summing over all levels gives $O(n \alpha(n))$ total, hence $O(\alpha(n))$ amortised per operation. $\blacksquare$

<details>
<summary>Worked Example: Union-Find for Connected Components</summary>

Given an undirected graph with $n$ vertices and $m$ edges, determine the connected components.

```
for each vertex v:
    MakeSet(v)
for each edge (u, v):
    if Find(u) != Find(v):
        Union(u, v)
```

After processing all edges, vertices in the same connected component have the same representative. Total time: $O(n + m \alpha(n)) \approx O(n + m)$.
</details>

### 2.9 Graphs

A graph $G = (V, E)$ can be represented by:

- **Adjacency matrix:** $A_{ij} = 1$ if $(i,j) \in E$. Space: $O(V^2)$. Edge lookup: $O(1)$.
- **Adjacency list:** For each vertex, store a list of neighbours. Space: $O(V + E)$. Iterating
  over neighbours: $O(\mathrm{deg}(v))$.

| Operation              | Adjacency Matrix | Adjacency List |
| ---------------------- | ---------------- | -------------- |
| Space                  | $O(V^2)$         | $O(V + E)$     |
| Check edge $(u,v)$     | $O(1)$           | $O(\mathrm{deg}(u))$ |
| Iterate neighbours     | $O(V)$           | $O(\mathrm{deg}(v))$ |
| Add edge               | $O(1)$           | $O(1)$         |
| Remove edge            | $O(1)$           | $O(\mathrm{deg}(u))$ |

:::caution Common Pitfall
Choosing the wrong graph representation can make an algorithm asymptotically slower. Use adjacency matrices for dense graphs ($E \approx V^2$) and adjacency lists for sparse graphs ($E \ll V^2$). For example, BFS with an adjacency matrix takes $O(V^2)$ but with adjacency lists takes $O(V + E)$.
:::

## 3. Sorting Algorithms

### 3.1 Merge Sort

**Algorithm.** Divide the array in half, recursively sort each half, then merge.

```
MergeSort(A, l, r):
    if l < r:
        m = (l + r) / 2
        MergeSort(A, l, m)
        MergeSort(A, m+1, r)
        Merge(A, l, m, r)
```

**Theorem 3.1.** Merge sort runs in $O(n \log n)$ time in all cases (best, average, worst).

*Proof.* The recurrence is $T(n) = 2T(n/2) + O(n)$. By the Master theorem (case 2):
$a = 2$, $b = 2$, $f(n) = O(n) = O(n^{\log_b a})$, so $T(n) = O(n \log n)$. $\blacksquare$

**Theorem 3.2.** Merge sort is stable and requires $O(n)$ auxiliary space.

*Proof of stability.* In `Merge`, when elements from the left and right halves are equal, we always take from the left half first. This preserves the relative order of equal elements. $\blacksquare$

**Theorem 3.3 (Correctness of Merge).** The `Merge` procedure produces a sorted array from two sorted subarrays.

*Proof.* Let $A[l..m]$ and $A[m+1..r]$ be sorted subarrays. The merge procedure maintains two indices $i$ and $j$ pointing to the next unmerged element in each subarray. At each step, the minimum of $A[i]$ and $A[j]$ is appended to the output. By induction on the number of elements placed: if $k$ elements have been placed and they are the $k$ smallest among the remaining elements, then the $(k+1)$-th element placed is the minimum of the remaining elements. Since each subarray is sorted, the smallest remaining element is $\min(A[i], A[j])$. $\blacksquare$

**Theorem 3.4 (Optimality of Merge Sort).** Merge sort achieves the optimal $O(n \log n)$ comparison-based sorting bound.

*Proof.* By Theorem 3.7, no comparison sort can do better than $\Omega(n \log n)$. Merge sort achieves $O(n \log n)$ in all cases, so it is asymptotically optimal among comparison sorts. $\blacksquare$

<details>
<summary>Worked Example: Merge Sort Trace</summary>

Sort the array $[38, 27, 43, 3, 9, 82, 10]$:

Split: $[38, 27, 43, 3]$ and $[9, 82, 10]$

Split: $[38, 27]$ and $[43, 3]$
Split: $[38]$ and $[27]$ → Merge: $[27, 38]$
Split: $[43]$ and $[3]$ → Merge: $[3, 43]$
Merge: $[3, 27, 38, 43]$

Split: $[9, 82]$ and $[10]$
Split: $[9]$ and $[82]$ → Merge: $[9, 82]$
Merge: $[9, 10, 82]$

Final merge: $[3, 9, 10, 27, 38, 43, 82]$

Total comparisons: 13.
</details>

### 3.2 Quicksort

**Algorithm.** Choose a pivot, partition the array into elements $\leq$ pivot and $>$ pivot, recursively
sort each partition.

```
QuickSort(A, lo, hi):
    if lo < hi:
        p = Partition(A, lo, hi)
        QuickSort(A, lo, p - 1)
        QuickSort(A, p + 1, hi)
```

**Partition (Lomuto):** Select the last element as pivot. Iterate through the array, maintaining that elements $A[\mathrm{lo}..i]$ are $\leq$ pivot and $A[i+1..j-1]$ are $>$ pivot.

**Theorem 3.5.** Quicksort runs in $O(n \log n)$ expected time and $O(n^2)$ worst-case time.

*Proof (expected case).* If the pivot is chosen uniformly at random, the expected number of
comparisons is $O(n \log n)$ by an indicator random variable argument.

Let $X_{ij}$ be the indicator random variable that $z_i$ and $z_j$ are compared, where $z_1, \ldots, z_n$ are the sorted elements. Since elements are compared only if one is an ancestor of the other in the recursion tree, and the pivot is chosen uniformly at random:

$$\mathrm{E}[X_{ij}] = \Pr(z_i \mathrm{~and~} z_j \mathrm{~are~compared}) = \frac{2}{j - i + 1}$$

The total number of comparisons is $X = \sum_{i < j} X_{ij}$, so:

$$\mathrm{E}[X] = \sum_{i=1}^{n-1} \sum_{j=i+1}^{n} \frac{2}{j - i + 1} \leq \sum_{k=1}^{n} n \cdot \frac{2}{k+1} = O(n \log n)$$

Worst case occurs when the pivot is always the smallest or largest element (e.g., already sorted
array with first-element pivot): $T(n) = T(n-1) + O(n) = O(n^2)$. $\blacksquare$

**Theorem 3.6.** Quicksort is not stable in general but uses $O(\log n)$ expected stack space.

<details>
<summary>Worked Example: Quicksort with Median-of-Three Pivot</summary>

Sort $[3, 7, 8, 5, 2, 1, 9, 5, 4]$ using median-of-three (first, middle, last element).

Pivot selection: elements at positions 0, 4, 8 are $3, 2, 4$. Median is $3$.

Partition around $3$: $[2, 1, 3, 8, 5, 7, 9, 5, 4]$

Recurse on $[2, 1]$ (pivot $2$): $[1, 2]$
Recurse on $[8, 5, 7, 9, 5, 4]$ (median of $8, 7, 4$ is $7$): $[4, 5, 5, 7, 9, 8]$

Recurse on $[4, 5, 5]$ (pivot $5$): $[4, 5, 5]$
Recurse on $[9, 8]$ (pivot $9$): $[8, 9]$

Result: $[1, 2, 3, 4, 5, 5, 7, 8, 9]$
</details>

### 3.3 Heapsort

**Algorithm.** Build a max-heap in $O(n)$ time, then repeatedly extract the maximum.

**Theorem 3.7.** Heapsort runs in $O(n \log n)$ time in all cases, uses $O(1)$ auxiliary space, and
is not stable.

*Proof.* Building the heap takes $O(n)$ by Theorem 2.11. Each of the $n$ extract-max operations takes $O(\log n)$, for a total of $O(n \log n)$. Space is $O(1)$ since the heap is stored in-place. $\blacksquare$

### 3.4 Lower Bound on Comparison Sorting

**Theorem 3.8.** Any comparison-based sorting algorithm requires $\Omega(n \log n)$ comparisons in the
worst case.

*Proof.* A comparison-based sort can be modelled as a decision tree. The tree must have at least $n!$
leaves (one for each permutation). A binary tree with $n!$ leaves has height at least $\log_2(n!) \geq \log_2((n/2)^{n/2}) = (n/2)\log_2(n/2) = \Omega(n \log n)$.

More precisely, using Stirling's approximation: $\log_2(n!) = n \log_2 n - n \log_2 e + O(\log n) = \Omega(n \log n)$. $\blacksquare$

### 3.5 Counting Sort

Counting sort sorts integers in $O(n + k)$ time where $k$ is the range of values.

**Algorithm:**
1. Count occurrences: $C[i] =$ number of elements equal to $i$.
2. Compute prefix sums: $C[i] =$ number of elements $\leq i$.
3. Place each element in its correct position (iterating backwards for stability).

**Theorem 3.9.** Counting sort runs in $O(n + k)$ time and $O(n + k)$ space, and is stable.

*Proof.* Step 1 takes $O(n)$ time. Step 2 takes $O(k)$ time. Step 3 takes $O(n)$ time. The output array uses $O(n)$ space and the count array uses $O(k)$ space. Stability follows from iterating backwards in step 3: the last occurrence of each value is placed first, preserving the order of equal elements. $\blacksquare$

### 3.6 Radix Sort

Radix sort processes digits from least significant to most significant (LSD radix sort) using a stable sort (e.g., counting sort) as a subroutine.

**Theorem 3.10.** LSD radix sort sorts $n$ integers with $d$ digits in base $b$ in $O(d(n + b))$ time.

*Proof.* We perform $d$ passes of counting sort, each taking $O(n + b)$ time. After the $i$-th pass, the array is sorted by the $i$ least significant digits. By induction on $i$, after $d$ passes the array is fully sorted. $\blacksquare$

**Corollary 3.11.** For $d$-digit integers where $d = O(1)$ (e.g., 32-bit integers), radix sort runs in $O(n)$ time.

<details>
<summary>Worked Example: Counting Sort Trace</summary>

Sort the array $[4, 2, 2, 8, 3, 3, 1]$ using counting sort.

Range of values: $[1, 8]$, so $k = 8$.

**Step 1 — Count:** $C = [0, 1, 2, 2, 1, 0, 0, 0]$ (indices 1 through 8).

**Step 2 — Prefix sums:** $C = [0, 1, 3, 5, 6, 6, 6, 6]$.

**Step 3 — Place (iterate backwards):**
- $A[6] = 1$: $C[1] = 1$, place at position 0. $C[1] = 0$.
- $A[5] = 3$: $C[3] = 5$, place at position 4. $C[3] = 4$.
- $A[4] = 3$: $C[3] = 4$, place at position 3. $C[3] = 3$.
- $A[3] = 8$: $C[8] = 6$, place at position 5. $C[8] = 5$.
- $A[2] = 2$: $C[2] = 3$, place at position 2. $C[2] = 2$.
- $A[1] = 2$: $C[2] = 2$, place at position 1. $C[2] = 1$.
- $A[0] = 4$: $C[4] = 6$, place at position 5. $C[4] = 5$.

Result: $[1, 2, 2, 3, 3, 4, 8]$.
</details>

<details>
<summary>Worked Example: Radix Sort Trace</summary>

Sort the array $[170, 45, 75, 90, 802, 24, 2, 66]$ using LSD radix sort with base 10.

**Pass 1 (ones digit):** Sort by $0, 5, 5, 0, 2, 4, 2, 6$.
After stable counting sort: $[170, 90, 802, 2, 24, 45, 75, 66]$

**Pass 2 (tens digit):** Sort by $7, 9, 0, 0, 2, 4, 7, 6$.
After stable counting sort: $[802, 2, 24, 45, 66, 170, 75, 90]$

**Pass 3 (hundreds digit):** Sort by $8, 0, 0, 0, 0, 1, 0, 0$.
After stable counting sort: $[2, 24, 45, 66, 75, 90, 170, 802]$

Total: 3 passes, each $O(n + 10) = O(n)$. Total: $O(3n) = O(n)$.
</details>

### 3.7 External Sorting

**Problem.** Sort data that is too large to fit in main memory.

**Algorithm (External Merge Sort):**
1. Read chunks that fit in memory, sort each in memory, write sorted runs to disk.
2. Repeatedly merge runs using a $k$-way merge, reading/writing from disk.

**Theorem 3.12.** External merge sort with $M$ bytes of memory and $N$ bytes of data performs $O\left(\frac{N}{M} \log_{k}\left(\frac{N}{M}\right)\right)$ passes, where $k$ is the merge fan-in.

*Proof.* The initial pass creates $N/M$ sorted runs of size $M$. Each merge pass combines $k$ runs into 1, reducing the number of runs by a factor of $k$. After $\log_k(N/M)$ passes, a single sorted run remains. Each pass reads and writes all $N$ bytes, so total I/O is $O(N \log_k(N/M))$. $\blacksquare$

:::caution Common Pitfall
The $O(n \log n)$ lower bound applies only to **comparison-based** sorting. Non-comparison sorts
like radix sort can achieve $O(n)$ time for integers in a bounded range. However, non-comparison sorts sacrifice generality: they depend on the structure of the keys and cannot sort arbitrary objects.
:::

### 3.8 Comparison of Sorting Algorithms

| Algorithm     | Best      | Average   | Worst     | Space      | Stable |
| ------------- | --------- | --------- | --------- | ---------- | ------ |
| Merge Sort    | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ | Yes |
| Quicksort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$ | $O(\log n)$ | No |
| Heapsort      | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(1)$ | No |
| Counting Sort | $O(n + k)$ | $O(n + k)$ | $O(n + k)$ | $O(n + k)$ | Yes |
| Radix Sort    | $O(d(n+b))$ | $O(d(n+b))$ | $O(d(n+b))$ | $O(n + b)$ | Yes |

## 4. Graph Algorithms

### 4.1 Breadth-First Search (BFS)

BFS explores the graph level by level from a source vertex.

```
BFS(G, s):
    for each v in V:
        d[v] = INF
        pi[v] = NIL
    d[s] = 0
    Q = {s}
    while Q is not empty:
        u = Q.dequeue()
        for each v in G.adj[u]:
            if d[v] == INF:
                d[v] = d[u] + 1
                pi[v] = u
                Q.enqueue(v)
```

**Theorem 4.1.** BFS runs in $O(V + E)$ time and discovers shortest paths (in terms of number of
edges) from the source to all reachable vertices.

*Proof.* **Time:** Each vertex is enqueued at most once and dequeued at most once: $O(V)$. Each edge is examined at most twice (once from each endpoint): $O(E)$. Total: $O(V + E)$.

**Correctness:** We prove by induction on the length of shortest paths. Let $v$ be a vertex discovered via edge $(u, v)$. At the time $v$ is discovered, $d[u]$ equals the shortest-path distance from $s$ to $u$ (induction hypothesis). Since BFS processes vertices in non-decreasing order of distance, $d[v] = d[u] + 1$ is the shortest distance to $v$. Any path to $v$ must go through some vertex at distance at most $d[u]$ (the predecessor on the path), and all such vertices have already been processed. $\blacksquare$

<details>
<summary>Worked Example: BFS on a Weighted Path Problem</summary>

Find the shortest path (fewest edges) from $A$ to all other vertices in the graph with edges: $(A,B), (A,C), (B,D), (C,D), (C,E), (D,F), (E,F)$.

Starting from $A$:
- Level 0: $A$ (distance 0)
- Level 1: $B, C$ (distance 1)
- Level 2: $D, E$ (distance 2)
- Level 3: $F$ (distance 3)

Shortest path from $A$ to $F$: $A \to C \to E \to F$ (or $A \to B \to D \to F$ or $A \to C \to D \to F$), all of length 3.
</details>

### 4.2 Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking.

```
DFS(G):
    for each v in V:
        colour[v] = WHITE
        pi[v] = NIL
    time = 0
    for each v in V:
        if colour[v] == WHITE:
            DFS-Visit(G, v)

DFS-Visit(G, u):
    colour[u] = GREY
    time += 1
    d[u] = time
    for each v in G.adj[u]:
        if colour[v] == WHITE:
            pi[v] = u
            DFS-Visit(G, v)
    colour[u] = BLACK
    time += 1
    f[u] = time
```

**Theorem 4.2.** DFS runs in $O(V + E)$ time and can be used to detect cycles, find connected
components, compute topological orderings, and identify strongly connected components.

*Proof (time).* Each vertex is coloured exactly once (from WHITE to GREY) and finished exactly once (from GREY to BLACK): $O(V)$. Each edge is examined at most twice (once in each direction for undirected, once for directed): $O(E)$. Total: $O(V + E)$. $\blacksquare$

**Theorem 4.3 (Parenthesis Theorem).** In any DFS, for any two vertices $u$ and $v$, exactly one of the following holds: (1) $d[u] \lt{} d[v] \lt{} f[v] \lt{} f[u]$ (interval nesting), (2) $d[v] \lt{} d[u] \lt{} f[u] \lt{} f[v]$ (interval nesting), or (3) the intervals $[d[u], f[u]]$ and $[d[v], f[v]]$ are disjoint.

*Proof.* The DFS call stack forms a nesting of intervals. When we start visiting $v$ from $u$, we must finish $v$ before finishing $u$, giving nesting. If $u$ and $v$ are in different DFS trees, their intervals are disjoint. $\blacksquare$

**Theorem 4.4 (White-Path Theorem).** $v$ is a descendant of $u$ in the DFS forest if and only if, at the time $d[u]$ is discovered, there is a path from $u$ to $v$ consisting entirely of white vertices.

*Proof.* ($\Rightarrow$) By induction on the depth of $v$ in the DFS tree. If $v$ is a child of $u$, then $v$ was white when discovered from $u$. If $v$ is a deeper descendant, the path goes through intermediate white vertices.

($\Leftarrow$) Suppose there is a white path from $u$ to $v$ at time $d[u]$. Let $w$ be the first vertex on this path discovered after $u$. All vertices before $w$ on the path are still white (they can only be discovered after $w$), so $w$ will be discovered from the path. By induction, $v$ is a descendant of $w$, hence of $u$. $\blacksquare$

### 4.3 Topological Sort

A **topological ordering** of a DAG is a linear ordering of vertices such that for every directed edge $(u, v)$, $u$ appears before $v$.

**Algorithm:** Run DFS on the DAG. Output vertices in reverse order of finishing times.

**Theorem 4.5.** The reverse post-order of a DFS on a DAG produces a valid topological ordering.

*Proof.* Suppose there is an edge $(u, v)$ but $u$ appears after $v$ in the ordering (i.e., $f[u] \lt{} f[v]$). Since $(u, v)$ is an edge, when $u$ is being explored (coloured GREY), if $v$ is WHITE, then $v$ is discovered as a descendant of $u$, so $f[v] \lt{} f[u]$, contradiction. If $v$ is GREY, we have a back edge, implying a cycle, contradicting that the graph is acyclic. If $v$ is BLACK, then $f[v] \lt{} d[u] \lt{} f[u]$, contradicting $f[u] \lt{} f[v]$. $\blacksquare$

### 4.4 Strongly Connected Components

Two vertices $u$ and $v$ are **strongly connected** if there is a path from $u$ to $v$ and from $v$ to $u$. A **strongly connected component (SCC)** is a maximal set of strongly connected vertices.

**Kosaraju's Algorithm:**
1. Run DFS on $G$, recording finishing times.
2. Compute $G^T$ (transpose of $G$: reverse all edges).
3. Run DFS on $G^T$ in decreasing order of finishing times. Each DFS tree is an SCC.

**Theorem 4.6.** Kosaraju's algorithm correctly identifies all SCCs in $O(V + E)$ time.

*Proof.* Let $C$ be the SCC containing the vertex $s$ with the highest finishing time in the first DFS. We claim that in $G^T$, no vertex in $C$ can reach a vertex outside $C$ (otherwise $s$ would have a path to and from that vertex, placing it in $C$). In the second DFS, starting from $s$ in $G^T$, we discover exactly the vertices in $C$. Removing $C$ and repeating the argument gives the remaining SCCs. $\blacksquare$

**Tarjan's Algorithm** finds SCCs in a single DFS pass using a stack and low-link values, also in $O(V + E)$ time.

### 4.5 Dijkstra's Algorithm

**Problem.** Find shortest paths from a single source in a weighted graph with non-negative edge
weights.

**Algorithm.** Maintain a priority queue of vertices keyed by their current shortest-path estimate.
Repeatedly extract the vertex with minimum distance and relax its edges.

```
Dijkstra(G, w, s):
    for each v in V:
        d[v] = INF
        pi[v] = NIL
    d[s] = 0
    S = {}  // processed vertices
    Q = V   // priority queue keyed by d[]
    while Q is not empty:
        u = ExtractMin(Q)
        S = S ∪ {u}
        for each v in G.adj[u]:
            if d[v] > d[u] + w(u, v):
                d[v] = d[u] + w(u, v)
                pi[v] = u
                DecreaseKey(Q, v, d[v])
```

**Theorem 4.7.** Dijkstra's algorithm correctly computes shortest paths from the source.

*Proof.* We prove by induction on $|S|$ that when a vertex $u$ is added to $S$, $d[u] = \delta(s, u)$ (the true shortest-path distance).

Base case: $s$ is the first vertex added, and $d[s] = 0 = \delta(s, s)$.

Inductive step: Suppose all vertices in $S$ have correct distances. Let $u$ be the next vertex extracted from $Q$. Suppose for contradiction that $d[u] > \delta(s, u)$. Consider a shortest path $P$ from $s$ to $u$, and let $(x, y)$ be the first edge on $P$ where $x \in S$ and $y \notin S$. Then $\delta(s, y) = \delta(s, x) + w(x, y) = d[x] + w(x, y)$ (by induction). When $x$ was added to $S$, the edge $(x, y)$ was relaxed, so $d[y] \leq d[x] + w(x, y) = \delta(s, y)$. Since edge weights are non-negative, $\delta(s, y) \leq \delta(s, u)$. But $d[y] \leq \delta(s, y) \leq \delta(s, u) \lt{} d[u]$, and $y$ is in $Q$, contradicting that $u$ has the minimum $d$-value in $Q$. $\blacksquare$

**Theorem 4.8.** Dijkstra's algorithm with a binary heap runs in $O((V + E)\log V)$ time. With a
Fibonacci heap: $O(V \log V + E)$.

*Proof.* Each vertex is extracted from the priority queue at most once: $O(V \log V)$. Each edge is
relaxed at most once, and each relaxation may cause a `DecreaseKey`: $O(E \log V)$. Total: $O((V + E)\log V)$. With a Fibonacci heap, `DecreaseKey` is $O(1)$ amortised, giving $O(V \log V + E)$. $\blacksquare$

<details>
<summary>Worked Example: Dijkstra's Algorithm</summary>

Find shortest paths from $A$ in the graph:
- $A \xrightarrow{4} B$, $A \xrightarrow{2} C$
- $B \xrightarrow{3} D$, $B \xrightarrow{1} E$
- $C \xrightarrow{1} B$, $C \xrightarrow{5} D$
- $D \xrightarrow{2} E$

Initial: $d[A]=0$, $d[B]=d[C]=d[D]=d[E]=\infty$

Extract $A$: relax $B \to 4$, $C \to 2$. $Q = \\{C(2), B(4), D(\infty), E(\infty)\\}$

Extract $C$: relax $B \to \min(4, 2+1)=3$, $D \to 2+5=7$. $Q = \\{B(3), D(7), E(\infty)\\}$

Extract $B$: relax $D \to \min(7, 3+3)=6$, $E \to 3+1=4$. $Q = \\{E(4), D(6)\\}$

Extract $E$: relax $D \to \min(6, 4+2)=6$. $Q = \\{D(6)\\}$

Extract $D$: no improvements.

Result: $d[A]=0$, $d[B]=3$, $d[C]=2$, $d[D]=6$, $d[E]=4$
</details>

### 4.6 Bellman-Ford Algorithm

**Problem.** Find shortest paths from a single source, allowing negative edge weights (but no negative
cycles).

```
BellmanFord(G, w, s):
    for each v in V:
        d[v] = INF
        pi[v] = NIL
    d[s] = 0
    for i = 1 to |V| - 1:
        for each edge (u, v) in E:
            if d[v] > d[u] + w(u, v):
                d[v] = d[u] + w(u, v)
                pi[v] = u
    for each edge (u, v) in E:
        if d[v] > d[u] + w(u, v):
            return "negative cycle detected"
```

**Theorem 4.9.** Bellman-Ford runs in $O(VE)$ time. It correctly detects negative-weight cycles.

*Proof.* After $i$ iterations of the relaxation loop, $d[v]$ is at most the weight of the shortest path from $s$ to $v$ using at most $i$ edges. This is proved by induction on $i$.

Base case ($i = 0$): Only $d[s] = 0$ is finite, which is the weight of the empty path.

Inductive step: A shortest path from $s$ to $v$ using at most $i$ edges either uses at most $i-1$ edges (handled by induction) or uses exactly $i$ edges, ending with edge $(u, v)$ where the shortest path to $u$ uses at most $i-1$ edges. The relaxation of $(u, v)$ in iteration $i$ handles this case.

After $V - 1$ iterations, all shortest paths (which have at most $V - 1$ edges) are correct. A $V$-th iteration that updates any distance indicates a path of length $V$ with strictly decreasing weight, which contains a cycle of negative weight. $\blacksquare$

<details>
<summary>Worked Example: Bellman-Ford with Negative Edge Weights</summary>

Find shortest paths from $A$ in the graph:
- $A \xrightarrow{6} B$, $A \xrightarrow{7} C$
- $B \xrightarrow{5} C$, $B \xrightarrow{-4} D$, $B \xrightarrow{8} E$
- $C \xrightarrow{-3} D$, $C \xrightarrow{9} E$
- $D \xrightarrow{2} E$, $D \xrightarrow{7} F$
- $E \xrightarrow{-5} F$

Initial: $d = [\infty, \infty, \infty, \infty, \infty, \infty]$ for $[A, B, C, D, E, F]$.
$d[A] = 0$.

**Iteration 1:** Relax all edges.
- $(A,B)$: $d[B] = 6$. $(A,C)$: $d[C] = 7$.
- $(B,C)$: $\min(7, 6+5)=7$. $(B,D)$: $d[D] = 6+(-4) = 2$. $(B,E)$: $d[E] = 6+8 = 14$.
- $(C,D)$: $\min(2, 7+(-3)) = 2$. $(C,E)$: $\min(14, 7+9) = 14$.
- $(D,E)$: $\min(14, 2+2) = 4$. $(D,F)$: $d[F] = 2+7 = 9$.
- $(E,F)$: $\min(9, 4+(-5)) = -1$.
After iter 1: $d = [0, 6, 7, 2, 4, -1]$.

**Iteration 2:** Relax all edges.
- $(B,D)$: $\min(2, 6+(-4)) = 2$. $(B,E)$: $\min(4, 6+8) = 4$.
- $(D,E)$: $\min(4, 2+2) = 4$. $(D,F)$: $\min(-1, 2+7) = -1$.
- $(E,F)$: $\min(-1, 4+(-5)) = -1$.
No changes: $d = [0, 6, 7, 2, 4, -1]$.

**Iteration 3--5:** No changes. Algorithm terminates.

**Negative cycle check:** No edge can be relaxed. No negative cycle.

Result: $d = [0, 6, 7, 2, 4, -1]$. Shortest path to $F$: $A \to B \to D \to E \to F$, cost $-1$.
</details>

<details>
<summary>Worked Example: Bellman-Ford Negative Cycle Detection</summary>

Graph: $A \xrightarrow{1} B$, $B \xrightarrow{-3} C$, $C \xrightarrow{2} A$. This has a cycle $A \to B \to C \to A$ of weight $1 + (-3) + 2 = 0$. Not negative.

Now add $C \xrightarrow{-1} A$. Cycle weight: $1 + (-3) + (-1) = -3$. Negative cycle.

Initial: $d[A] = 0$, rest $\infty$.

**Iteration 1:** $d[B] = 1$, $d[C] = -2$, $d[A] = \min(0, -2 + (-1)) = -3$.

**Iteration 2:** $d[B] = -2$, $d[C] = -5$, $d[A] = -6$.

**Iteration 3:** $d[B] = -5$, $d[C] = -8$, $d[A] = -9$.

**Iteration 4:** $d[B] = -8$, $d[C] = -11$, $d[A] = -12$.

**Iteration 5:** $d[B] = -11$, $d[C] = -14$, $d[A] = -15$.

**Check (iteration 6):** $(A,B)$: $-15 + 1 = -14 \lt{} -11$, can still relax. **Negative cycle detected!**
</details>

### 4.7 Floyd-Warshall Algorithm

**Problem.** Find all-pairs shortest paths.

**Algorithm.** For $k = 1, \ldots, V$: for each pair $(i, j)$, check if going through vertex $k$
improves the path.

$$d_{ij}^{(k)} = \min(d_{ij}^{(k-1)}, d_{ik}^{(k-1)} + d_{kj}^{(k-1)})$$

**Derivation.** Define $d_{ij}^{(k)}$ as the shortest-path distance from $i$ to $j$ using only intermediate vertices from $\\{1, 2, \ldots, k\\}$. Then:

- $d_{ij}^{(0)} = w(i,j)$ (the weight of edge $(i,j)$, or $\infty$ if no edge).
- For $k \geq 1$: The shortest path from $i$ to $j$ through vertices $\\{1, \ldots, k\\}$ either does not use vertex $k$ (giving $d_{ij}^{(k-1)}$) or uses vertex $k$ (giving $d_{ik}^{(k-1)} + d_{kj}^{(k-1)}$).

**Theorem 4.10.** Floyd-Warshall runs in $O(V^3)$ time and $O(V^2)$ space.

*Proof.* The triple nested loop ($k$, $i$, $j$) executes $V^3$ iterations, each doing $O(1)$ work. The distance matrix requires $V^2$ space. Note that $d_{ij}^{(k)}$ can overwrite $d_{ij}^{(k-1)}$ in place because $d_{ik}^{(k)} = d_{ik}^{(k-1)}$ and $d_{kj}^{(k)} = d_{kj}^{(k-1)}$ (paths from $i$ to $k$ and $k$ to $j$ using vertices up to $k$ cannot be improved by going through $k$ again without a negative cycle). $\blacksquare$

<details>
<summary>Worked Example: Floyd-Warshall on 4 Vertices</summary>

Find all-pairs shortest paths for the graph with vertices $\\{1, 2, 3, 4\\}$ and edges:
$w(1,2) = 3$, $w(1,3) = 8$, $w(1,4) = -4$,
$w(2,1) = 5$, $w(2,3) = 7$, $w(2,4) = 2$,
$w(3,1) = 2$, $w(3,4) = -1$,
$w(4,1) = 6$, $w(4,3) = 9$.

**Initial distance matrix $D^{(0)}$:**
$$D^{(0)} = \begin{pmatrix} 0 & 3 & 8 & -4 \\ 5 & 0 & 7 & 2 \\ 2 & \infty & 0 & -1 \\ 6 & \infty & 9 & 0 \end{pmatrix}$$

**$k = 1$ (through vertex 1):**
$D^{(1)}[2][3] = \min(7, 5 + 8) = 7$.
$D^{(1)}[2][4] = \min(2, 5 + (-4)) = 1$.
$D^{(1)}[3][2] = \min(\infty, 2 + 3) = 5$.
$D^{(1)}[3][4] = \min(-1, 2 + (-4)) = -2$.
$D^{(1)}[4][2] = \min(\infty, 6 + 3) = 9$.
$D^{(1)}[4][3] = \min(9, 6 + 8) = 9$.

$$D^{(1)} = \begin{pmatrix} 0 & 3 & 8 & -4 \\ 5 & 0 & 7 & 1 \\ 2 & 5 & 0 & -2 \\ 6 & 9 & 9 & 0 \end{pmatrix}$$

**$k = 2$ (through vertex 2):**
$D^{(2)}[1][3] = \min(8, 3 + 7) = 8$.
$D^{(2)}[1][4] = \min(-4, 3 + 1) = -4$.
$D^{(2)}[3][1] = \min(2, 5 + 5) = 2$.
$D^{(2)}[3][4] = \min(-2, 5 + 1) = -2$.
$D^{(2)}[4][1] = \min(6, 9 + 5) = 6$.
$D^{(2)}[4][3] = \min(9, 9 + 7) = 9$.

$$D^{(2)} = \begin{pmatrix} 0 & 3 & 8 & -4 \\ 5 & 0 & 7 & 1 \\ 2 & 5 & 0 & -2 \\ 6 & 9 & 9 & 0 \end{pmatrix}$$

**$k = 3$ (through vertex 3):**
$D^{(3)}[1][2] = \min(3, 8 + 5) = 3$.
$D^{(3)}[1][4] = \min(-4, 8 + (-2)) = -4$.
$D^{(3)}[2][1] = \min(5, 7 + 2) = 5$.
$D^{(3)}[2][4] = \min(1, 7 + (-2)) = 1$.
$D^{(3)}[4][1] = \min(6, 9 + 2) = 6$.
$D^{(3)}[4][2] = \min(9, 9 + 5) = 9$.

$$D^{(3)} = \begin{pmatrix} 0 & 3 & 8 & -4 \\ 5 & 0 & 7 & 1 \\ 2 & 5 & 0 & -2 \\ 6 & 9 & 9 & 0 \end{pmatrix}$$

**$k = 4$ (through vertex 4):**
$D^{(4)}[1][2] = \min(3, -4 + 9) = 3$.
$D^{(4)}[1][3] = \min(8, -4 + 9) = 5$.
$D^{(4)}[2][1] = \min(5, 1 + 6) = 5$.
$D^{(4)}[2][3] = \min(7, 1 + 9) = 7$.
$D^{(4)}[3][1] = \min(2, -2 + 6) = 2$.
$D^{(4)}[3][2] = \min(5, -2 + 9) = 5$.

$$D^{(4)} = \begin{pmatrix} 0 & 3 & 5 & -4 \\ 5 & 0 & 7 & 1 \\ 2 & 5 & 0 & -2 \\ 6 & 9 & 9 & 0 \end{pmatrix}$$
</details>

### 4.8 Minimum Spanning Tree

**Kruskal's Algorithm.** Sort edges by weight, add edges to the MST as long as they don't create a
cycle (using Union-Find). $O(E \log E)$.

**Prim's Algorithm.** Start from any vertex, repeatedly add the minimum-weight edge connecting the
tree to a non-tree vertex (using a priority queue). $O((V + E)\log V)$.

**Theorem 4.11 (Cut Property).** For any cut of the graph, the minimum-weight edge crossing the cut
belongs to some MST.

*Proof.* Let $(S, V \setminus S)$ be a cut and $e = (u, v)$ be the minimum-weight crossing edge with $u \in S$, $v \notin S$. Let $T$ be an MST. If $e \in T$, we are done. Otherwise, adding $e$ to $T$ creates a cycle. This cycle must cross the cut at least once more (it goes from $u$ to $v$ via some other path). Let $e'$ be another crossing edge on this cycle. Since $e$ is the minimum-weight crossing edge, $w(e) \leq w(e')$. Replacing $e'$ with $e$ in $T$ gives a spanning tree of weight no greater than $T$, hence an MST containing $e$. $\blacksquare$

**Theorem 4.12 (Cycle Property).** For any cycle, the maximum-weight edge on the cycle does not belong
to any MST.

*Proof.* Let $C$ be a cycle and $e$ be the maximum-weight edge on $C$. Let $T$ be an MST. If $e \notin T$, we are done. Otherwise, removing $e$ from $T$ disconnects it into two components. The rest of cycle $C$ must contain an edge $e' \neq e$ crossing this cut. Since $w(e') \lt{} w(e)$ (if $w(e') = w(e)$, we can replace either), replacing $e$ with $e'$ gives a spanning tree of strictly smaller weight, contradicting the optimality of $T$. $\blacksquare$

**Theorem 4.13.** Kruskal's algorithm produces a minimum spanning tree.

*Proof.* We prove by induction on the number of edges added. At each step, the algorithm adds the minimum-weight edge that does not create a cycle. Consider the cut formed by the two connected components that the new edge connects. By the cut property, this minimum-weight crossing edge belongs to some MST. Since all previously added edges are in every MST (by induction), the edge set maintained by the algorithm is always a subset of some MST. $\blacksquare$

**Theorem 4.14.** Prim's algorithm produces a minimum spanning tree.

*Proof.* By induction on the size of the tree. At each step, Prim's adds the minimum-weight edge connecting the current tree $T$ to a vertex outside $T$. Consider the cut $(T, V \setminus T)$. By the cut property, the minimum-weight crossing edge belongs to some MST. $\blacksquare$

<details>
<summary>Worked Example: Kruskal's Algorithm</summary>

Find the MST of the graph with edges (sorted by weight):
$(D, E, 2)$, $(C, E, 3)$, $(A, B, 4)$, $(B, C, 5)$, $(B, E, 6)$, $(A, E, 7)$, $(A, D, 8)$, $(C, D, 9)$.

Vertices: $\\{A, B, C, D, E\\}$.

Sorted edges: $(D,E,2)$, $(C,E,3)$, $(A,B,4)$, $(B,C,5)$, $(B,E,6)$, $(A,E,7)$, $(A,D,8)$, $(C,D,9)$.

Process each edge:
1. $(D, E, 2)$: Add. Forest: $\\{D-E\\}$. Cost: 2.
2. $(C, E, 3)$: Add. Forest: $\\{C-D-E\\}$. Cost: 5.
3. $(A, B, 4)$: Add. Forest: $\\{A-B\\}$, $\\{C-D-E\\}$. Cost: 9.
4. $(B, C, 5)$: Add (connects two components). Forest: $\\{A-B-C-D-E\\}$. Cost: 14.
5. $(B, E, 6)$: Skip (creates cycle $B-C-D-E-B$).
6. $(A, E, 7)$: Skip (creates cycle).
7. $(A, D, 8)$: Skip (creates cycle).
8. $(C, D, 9)$: Skip (creates cycle).

**MST:** $(D,E,2)$, $(C,E,3)$, $(A,B,4)$, $(B,C,5)$. Total weight: 14.
</details>

<details>
<summary>Worked Example: Prim's Algorithm</summary>

Find the MST of the same graph starting from vertex $A$.

Edges from $A$: $(A,B,4)$, $(A,E,7)$, $(A,D,8)$. Minimum: $(A,B,4)$.
Tree: $\\{A, B\\}$. Cost: 4.

Edges crossing cut: $(B,C,5)$, $(B,E,6)$, $(A,E,7)$, $(A,D,8)$. Minimum: $(B,C,5)$.
Tree: $\\{A, B, C\\}$. Cost: 9.

Edges crossing cut: $(C,E,3)$, $(C,D,9)$, $(B,E,6)$, $(A,E,7)$, $(A,D,8)$. Minimum: $(C,E,3)$.
Tree: $\\{A, B, C, E\\}$. Cost: 12.

Edges crossing cut: $(D,E,2)$, $(C,D,9)$, $(A,D,8)$. Minimum: $(D,E,2)$.
Tree: $\\{A, B, C, D, E\\}$. Cost: 14.

**MST:** $(A,B,4)$, $(B,C,5)$, $(C,E,3)$, $(D,E,2)$. Total weight: 14 (same as Kruskal's).
</details>

## 5. Dynamic Programming

### 5.1 Principles

Dynamic programming (DP) solves problems by:

1. **Overlapping subproblems:** The same subproblems are solved repeatedly.
2. **Optimal substructure:** The optimal solution contains optimal solutions to subproblems.

**Approaches:**
- **Top-down (memoisation):** Recursive with caching.
- **Bottom-up (tabulation):** Fill a table iteratively from small subproblems to large.

### 5.2 Memoisation vs. Tabulation

| Aspect          | Memoisation (Top-Down) | Tabulation (Bottom-Up) |
| --------------- | ---------------------- | ---------------------- |
| Approach        | Recursive with cache   | Iterative table fill   |
| Order           | Natural recursion order | Dependency order       |
| Space           | $O(n)$ stack + $O(n)$ table | $O(n)$ table only   |
| Overhead        | Function call overhead | Minimal                |
| Subproblems     | Computes only needed   | Computes all           |
| Best for        | When not all subproblems needed | When all needed |

**When to use which:**
- Use **memoisation** when the subproblem space is sparse (not all subproblems are needed).
- Use **tabulation** when most subproblems are needed (avoids recursion overhead and stack overflow).
- Both achieve the same asymptotic time complexity.

### 5.3 Optimal Substructure Proof Technique

To prove that a problem has optimal substructure:

1. Show that an optimal solution to the problem includes an optimal solution to a subproblem.
2. Typically proved by contradiction: if the optimal solution contained a suboptimal sub-solution, replacing it with an optimal one would improve the overall solution.

**Example (Shortest Path).** If $p$ is a shortest path from $u$ to $v$ and $w$ is an intermediate vertex on $p$, then the subpath of $p$ from $u$ to $w$ is a shortest path from $u$ to $w$.

*Proof.* If not, there exists a shorter path $p'$ from $u$ to $w$. Then $p'$ concatenated with the subpath of $p$ from $w$ to $v$ would be shorter than $p$, contradicting that $p$ is a shortest path. $\blacksquare$

:::caution Common Pitfall
Not all problems have optimal substructure. For example, the *longest simple path* problem does not: the longest simple path from $u$ to $v$ may not contain the longest simple path from $u$ to an intermediate vertex $w$, because the subpath might share vertices with the rest of the path, creating a non-simple path.
:::

### 5.4 Common Patterns

**1D DP.** $dp[i]$ depends on $dp[j]$ for $j < i$. Example: Fibonacci, longest increasing subsequence.

**2D DP.** $dp[i][j]$ depends on $dp[i'][j']$ for $(i', j')$ in some set. Example: edit distance,
matrix chain multiplication, longest common subsequence.

**Interval DP.** $dp[i][j]$ depends on $dp[i'][j']$ where $i \leq i' \leq j' \leq j$. Example:
optimal BST, matrix chain multiplication.

### 5.5 Worked Example: 0/1 Knapsack

**Problem.** Given $n$ items with weights $w_1, \ldots, w_n$ and values $v_1, \ldots, v_n$, and a knapsack of capacity $W$, maximise the total value without exceeding the capacity.

**Recurrence:**

$$dp[i][c] = \begin{cases} 0 & \mathrm{if } i = 0 \mathrm{ or } c = 0 \\ dp[i-1][c] & \mathrm{if } w_i > c \\ \max(dp[i-1][c], dp[i-1][c - w_i] + v_i) & \mathrm{if } w_i \leq c \end{cases}$$

**Time:** $O(nW)$. **Space:** $O(nW)$ (can be reduced to $O(W)$ with 1D array).

*Proof of correctness.* For each item $i$, either we don't include it (value $dp[i-1][c]$) or we include it (value $v_i + dp[i-1][c - w_i]$). The optimal choice is the maximum. The base cases are trivially correct. $\blacksquare$

<details>
<summary>Worked Example: 0/1 Knapsack</summary>

Items: $\\{(w=1, v=1), (w=3, v=4), (w=4, v=5), (w=5, v=7)\\}$, capacity $W = 7$.

Building the DP table (items as rows, capacities 0-7 as columns):

```
       c: 0  1  2  3  4  5  6  7
i=0:      0  0  0  0  0  0  0  0
i=1:      0  1  1  1  1  1  1  1
i=2:      0  1  1  4  5  5  5  5
i=3:      0  1  1  4  5  6  6  9
i=4:      0  1  1  4  5  7  8  9
```

Maximum value: $dp[4][7] = 9$ (items 2 and 4: $w = 3 + 5 = 7$, $v = 4 + 7 = 11$ — let me recalculate).

Correct: items 2 and 3 ($w=3+4=7$, $v=4+5=9$), or items 1, 2, 4 ($w=1+3+5=9 > 7$, not valid).
Items 1, 3 ($w=1+4=5$, $v=1+5=6$), items 2, 4 ($w=3+5=8 > 7$).
Optimal: items 2 and 3 ($w=3+4=7$, $v=4+5=9$).
</details>

### 5.6 Worked Example: Edit Distance (Levenshtein Distance)

**Problem.** Given strings $s$ of length $m$ and $t$ of length $n$, find the minimum number of insertions, deletions, and substitutions to transform $s$ into $t$.

**Recurrence:**

$$dp[i][j] = \begin{cases} j & \mathrm{if } i = 0 \\ i & \mathrm{if } j = 0 \\ dp[i-1][j-1] & \mathrm{if } s[i] = t[j] \\ 1 + \min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) & \mathrm{if } s[i] \neq t[j] \end{cases}$$

where the three cases in the minimum are: delete from $s$, insert into $s$, substitute in $s$.

**Time:** $O(mn)$. **Space:** $O(mn)$ (can be reduced to $O(\min(m,n))$).

<details>
<summary>Worked Example: Edit Distance</summary>

Compute the edit distance between "kitten" and "sitting".

Building the DP table:

```
       ""  s  i  t  t  i  n  g
""       0  1  2  3  4  5  6  7
k        1  1  2  3  4  5  6  7
i        2  2  1  2  3  4  5  6
t        3  3  2  1  2  3  4  5
t        4  4  3  2  1  2  3  4
e        5  5  4  3  2  2  3  4
n        6  6  5  4  3  3  2  3
```

Edit distance: $dp[6][7] = 3$.

Transform: kitten → sitten (substitute k→s) → sittin (substitute e→i) → sitting (insert g).
</details>

### 5.7 Worked Example: Matrix Chain Multiplication

**Problem.** Given matrices $A_1, A_2, \ldots, A_n$ where $A_i$ has dimensions $p_{i-1} \times p_i$, find the parenthesisation that minimises the total number of scalar multiplications.

**Recurrence:**

$$dp[i][j] = \begin{cases} 0 & \mathrm{if } i = j \\ \min_{i \leq k < j} (dp[i][k] + dp[k+1][j] + p_{i-1} p_k p_j) & \mathrm{if } i < j \end{cases}$$

**Time:** $O(n^3)$. **Space:** $O(n^2)$.

*Proof of correctness.* The optimal parenthesisation of $A_i \cdots A_j$ splits at some position $k$: $(A_i \cdots A_k)(A_{k+1} \cdots A_j)$. The cost is the cost of the left subproduct plus the cost of the right subproduct plus the cost of multiplying the resulting matrices ($p_{i-1} \cdot p_k \cdot p_j$ scalar multiplications). The optimal $k$ minimises this total. $\blacksquare$

<details>
<summary>Worked Example: Matrix Chain Multiplication</summary>

Matrices: $A_1$ ($10 \times 30$), $A_2$ ($30 \times 5$), $A_3$ ($5 \times 60$). Dimensions: $p = [10, 30, 5, 60]$.

$dp[1][1] = dp[2][2] = dp[3][3] = 0$.

$dp[1][2] = p_0 p_1 p_2 = 10 \times 30 \times 5 = 1500$. Split at $k=1$: $(A_1 A_2)$.

$dp[2][3] = p_1 p_2 p_3 = 30 \times 5 \times 60 = 9000$. Split at $k=2$: $(A_2 A_3)$.

$dp[1][3]$: Try $k=1$: $dp[1][1] + dp[2][3] + 10 \times 30 \times 60 = 0 + 9000 + 18000 = 27000$.
Try $k=2$: $dp[1][2] + dp[3][3] + 10 \times 5 \times 60 = 1500 + 0 + 3000 = 4500$.

Minimum: $dp[1][3] = 4500$, split at $k=2$: $(A_1(A_2 A_3))$.
</details>

### 5.8 Worked Example: Longest Common Subsequence

**Problem.** Given sequences $X = (x_1, \ldots, x_m)$ and $Y = (y_1, \ldots, y_n)$, find the LCS.

**Recurrence:**

$$dp[i][j] = \begin{cases} 0 & \mathrm{if } i = 0 \mathrm{ or } j = 0 \\ dp[i-1][j-1] + 1 & \mathrm{if } x_i = y_j \\ \max(dp[i-1][j], dp[i][j-1]) & \mathrm{if } x_i \neq y_j \end{cases}$$

**Time:** $O(mn)$. **Space:** $O(mn)$ (can be reduced to $O(\min(m,n))$ for the length only).

*Proof of correctness.* If $x_i = y_j$, any LCS of $X[1..i]$ and $Y[1..j]$ must include $x_i$,
so $\mathrm{LCS} = 1 + \mathrm{LCS}(X[1..i-1], Y[1..j-1])$. If $x_i \neq y_j$, the LCS either
excludes $x_i$ or excludes $y_j$, giving the max of the two subproblems. $\blacksquare$

### 5.9 Worked Example: Coin Change

**Problem.** Given coin denominations $d_1, \ldots, d_n$ and a target amount $M$, find the minimum number of coins needed.

**Recurrence:**

$$dp[c] = \begin{cases} 0 & \mathrm{if } c = 0 \\ \min_{i: d_i \leq c}(dp[c - d_i] + 1) & \mathrm{if } c > 0 \end{cases}$$

**Time:** $O(nM)$. **Space:** $O(M)$.

*Proof of correctness.* To make change for amount $c > 0$, the last coin used must be some $d_i \leq c$. The remaining amount is $c - d_i$, and the optimal solution for $c$ uses $1 + dp[c - d_i]$ coins. Taking the minimum over all valid $d_i$ gives the optimal solution. $\blacksquare$

<details>
<summary>Worked Example: Coin Change</summary>

Denominations: $\\{1, 5, 10, 25\\}$. Target: $M = 63$.

Bottom-up computation:
- $dp[0] = 0$
- $dp[1..4] = dp[c - 1] + 1 = c$ (use pennies)
- $dp[5] = \min(dp[4]+1, dp[0]+1) = 1$ (use a nickel)
- $dp[10] = \min(dp[9]+1, dp[5]+1, dp[0]+1) = 1$ (use a dime)
- ...
- $dp[25] = 1$ (use a quarter)
- $dp[50] = 2$ (use two quarters)
- $dp[63] = \min(dp[62]+1, dp[58]+1, dp[53]+1, dp[38]+1)$

Working backwards: $dp[63] = dp[38] + 1 = dp[13] + 2 = dp[3] + 3 = 6$.

Solution: 2 quarters + 1 dime + 3 pennies = $25 + 25 + 10 + 1 + 1 + 1 = 63$. 6 coins.
</details>

### 5.10 Worked Example: Longest Increasing Subsequence

**Problem.** Given a sequence $a_1, \ldots, a_n$, find the length of the longest strictly increasing subsequence (not necessarily contiguous).

**Recurrence:** $dp[i] = 1 + \max\\{dp[j] : j \lt{} i \mathrm{~and~} a_j \lt{} a_i\\}$, with $dp[i] = 1$ if no such $j$ exists.

**Time:** $O(n^2)$. **Space:** $O(n)$.

<details>
<summary>Worked Example: Longest Increasing Subsequence</summary>

Find the LIS of $[10, 22, 9, 33, 21, 50, 41, 60, 80]$.

$dp[0] = 1$ (just 10)
$dp[1] = dp[0] + 1 = 2$ (10, 22)
$dp[2] = 1$ (just 9)
$dp[3] = dp[1] + 1 = 3$ (10, 22, 33)
$dp[4] = dp[0] + 1 = 2$ (10, 21)
$dp[5] = dp[3] + 1 = 4$ (10, 22, 33, 50)
$dp[6] = dp[4] + 1 = 3$ (10, 21, 41)
$dp[7] = dp[5] + 1 = 5$ (10, 22, 33, 50, 60)
$dp[8] = dp[7] + 1 = 6$ (10, 22, 33, 50, 60, 80)

LIS length: 6.

**Patience sorting approach ($O(n \log n)$):** Maintain piles. For each card, place on the leftmost pile whose top card is $\geq$ the current card, or start a new pile on the right if no such pile exists. The number of piles equals the LIS length.
</details>

## 6. Advanced Topics

### 6.1 NP-Completeness

#### 6.1.1 P, NP, and NP-Completeness

**P:** The class of decision problems solvable in polynomial time by a deterministic Turing machine.

**NP:** The class of decision problems solvable in polynomial time by a **non-deterministic** Turing
machine. Equivalently, problems whose "yes" instances have polynomial-time verifiable certificates.

**NP-hard:** A problem $A$ is NP-hard if every problem in NP can be reduced to $A$ in polynomial
time.

**NP-complete:** A problem is NP-complete if it is in NP and NP-hard.

**Theorem 6.1.** If any NP-complete problem is in P, then P = NP.

#### 6.1.2 Polynomial-Time Reductions

A **polynomial-time reduction** from problem $A$ to problem $B$ is a polynomial-time algorithm that
transforms instances of $A$ into instances of $B$, preserving the answer.

**Lemma 6.1.** If $A \leq_p B$ and $B \in P$, then $A \in P$.

**Lemma 6.2.** If $A \leq_p B$ and $A$ is NP-hard, then $B$ is NP-hard.

#### 6.1.3 The Cook-Levin Theorem

**Theorem 6.2 (Cook-Levin, 1971).** SAT is NP-complete.

*Proof sketch.* We show that every problem in NP reduces to SAT. Let $L \in \mathrm{NP}$. There exists a polynomial-time non-deterministic Turing machine $M$ that decides $L$, running in time $p(n)$ on inputs of length $n$. For an input $x$, we construct a Boolean formula $\phi_x$ that is satisfiable if and only if $M$ accepts $x$.

The formula encodes:
1. **Tableau variables:** $T[i, j, \sigma] = 1$ iff cell $(i, j)$ of the computation tableau contains symbol $\sigma$. The tableau has $p(n) + 1$ rows and $p(n)$ columns.
2. **Initial configuration:** Row 0 encodes the initial state of $M$ on input $x$.
3. **Transition constraints:** Each $2 \times 3$ window of the tableau corresponds to a valid transition of $M$.
4. **Accepting configuration:** Some cell in the last row contains the accept state.

Each of these constraints can be expressed as a polynomial-size CNF formula. The total formula $\phi_x$ has size polynomial in $n$ and is satisfiable iff $M$ accepts $x$. $\blacksquare$

#### 6.1.4 Classic NP-Complete Problems

**SAT.** Given a Boolean formula in CNF, is there a satisfying assignment?

**3-SAT.** SAT restricted to clauses with exactly 3 literals.

**Vertex Cover.** Given a graph $G = (V, E)$ and integer $k$, is there a vertex cover of size $\leq k$?

**Travelling Salesman Problem (decision version).** Given a weighted graph and bound $B$, is there a
tour of total weight $\leq B$?

**Subset Sum.** Given a set of integers and a target $T$, is there a subset summing to $T$?

**Clique.** Given a graph $G$ and integer $k$, does $G$ contain a clique of size $k$?

#### 6.1.5 Proof Strategy for NP-Completeness

To prove a problem $B$ is NP-complete:

1. Show $B \in \mathrm{NP}$ (polynomial-time verifiable certificate).
2. Show a known NP-complete problem $A$ reduces to $B$: $A \leq_p B$.

**Example.** 3-SAT $\leq_p$ Vertex Cover: construct a graph from the 3-SAT formula where each
variable and each clause become vertices, and edges enforce the constraint that a satisfying
assignment corresponds to a vertex cover.

<details>
<summary>Worked Example: 3-SAT $\leq_p$ Vertex Cover Reduction</summary>

Reduce 3-SAT formula $\phi = (x_1 \vee \bar{x}_2 \vee x_3) \wedge (\bar{x}_1 \vee x_2 \vee x_3) \wedge (x_1 \vee x_2 \vee \bar{x}_3)$ to a vertex cover instance.

For each variable $x_i$, create two vertices $x_i$ and $\bar{x}_i$ connected by an edge (the "literal edge").

For each clause $C_j$, create a triangle of 3 vertices $c_{j1}, c_{j2}, c_{j3}$.

For each clause vertex $c_{jk}$, connect it to the literal vertex corresponding to the $k$-th literal of clause $j$.

**Claim:** $\phi$ is satisfiable iff the graph has a vertex cover of size $k + 2m$ where $k$ is the number of variables and $m$ is the number of clauses.

($\Rightarrow$) If $\phi$ is satisfiable, include in the cover: for each variable, the literal vertex matching the truth assignment (e.g., $x_1$ if $x_1 = \mathrm{true}$, $\bar{x}_1$ if $x_1 = \mathrm{false}$). This covers all literal edges ($k$ vertices). For each clause triangle, at least one literal in the clause is true, so the corresponding literal vertex covers one of the three edges from the triangle. Include the other two vertices of the triangle ($2m$ vertices total).

($\Leftarrow$) A vertex cover of size $k + 2m$ must include exactly one endpoint of each literal edge (otherwise the triangle requires 3 vertices). Set each variable according to which literal vertex is in the cover. Each clause triangle has exactly one uncovered vertex, whose edge to a literal vertex is covered by that literal vertex, meaning the clause is satisfied.

The reduction takes polynomial time (number of vertices and edges is polynomial in the formula size).
</details>

:::caution Common Pitfall
NP-hardness does not mean the problem is unsolvable. It means there is no known polynomial-time
algorithm. Many NP-complete problems have efficient approximation algorithms or can be solved
exactly for practical input sizes using branch-and-bound or SAT solvers.
:::

### 6.2 Approximation Algorithms

When exact solutions are intractable, we seek approximation algorithms with provable guarantees.

**Definition.** A $\rho$-approximation algorithm for a minimisation problem produces a solution of cost at most $\rho$ times the optimal cost. For a maximisation problem, the solution has value at least $(1/\rho)$ times the optimal value.

**Theorem 6.3.** Greedy vertex cover (repeatedly pick an edge, add both endpoints) is a 2-approximation.

*Proof.* The algorithm selects a set $C$ of vertices. Each edge in the matching used by the algorithm contributes 2 vertices to $C$. Let $M^*$ be a maximum matching. Then $|C| = 2|M^*| \leq 2 \cdot |\mathrm{OPT}|$, since OPT must contain at least one endpoint of every edge in $M^*$ (and $M^*$ is maximum, so $|M^*| \geq$ the size of any matching). Therefore the approximation ratio is at most 2. $\blacksquare$

**Theorem 6.4 (Metric TSP).** The Christofides algorithm is a $3/2$-approximation for TSP with the triangle inequality.

*Proof.* The algorithm computes an MST ($\leq \mathrm{OPT}$), finds a minimum-weight perfect matching $M$ on the odd-degree vertices of the MST ($\lvert M \rvert \leq \mathrm{OPT}/2$), and combines them into an Eulerian tour which is shortcut to a Hamiltonian cycle. The total weight is at most $\mathrm{MST} + \lvert M \rvert \leq \mathrm{OPT} + \mathrm{OPT}/2 = \frac{3}{2}\mathrm{OPT}$. $\blacksquare$

**Theorem 6.5 (Inapproximability).** Unless P = NP, TSP (general, without triangle inequality) has no polynomial-time approximation algorithm with any constant ratio.

*Proof sketch.* If a $c$-approximation existed for TSP, we could use it to solve the Hamiltonian cycle problem (which is NP-complete): given a graph $G$, construct a TSP instance with edge weight 1 for existing edges and weight $cn + 1$ for non-edges. If the approximation returns a tour of weight $n$, then $G$ has a Hamiltonian cycle. Otherwise, the tour weight is at least $n - 1 + cn + 1 \gt{} cn$, so the approximation ratio would exceed $c$, contradiction. $\blacksquare$

**Theorem 6.6 (SET COVER).** The greedy algorithm for SET COVER is a $(\ln n + O(1))$-approximation, where $n$ is the size of the universe.

*Proof sketch.* At each step, the greedy algorithm picks the set covering the most uncovered elements. Let $c_i$ be the cost of the $i$-th set picked, and let $n_i$ be the number of newly covered elements. Then $c_i / n_i \leq \mathrm{OPT} / (n - \sum_{j \lt{} i} n_j)$ (otherwise OPT could not cover the remaining elements at lower cost). Summing gives the $\ln n + O(1)$ bound. $\blacksquare$

<details>
<summary>Worked Example: Greedy Set Cover</summary>

Universe $U = \\{1, 2, 3, 4, 5, 6\\}$. Sets: $S_1 = \\{1, 2, 3\\}$, $S_2 = \\{2, 4\\}$, $S_3 = \\{3, 5, 6\\}$, $S_4 = \\{4, 5\\}$, $S_5 = \\{1, 4, 6\\}$. All sets have equal cost 1.

**Greedy:**
1. Pick $S_1$ (covers 3 elements, tied with $S_3$). Covered: $\\{1, 2, 3\\}$.
2. Remaining: $\\{4, 5, 6\\}$. $S_3$ covers $\\{5, 6\\}$ (2 new), $S_4$ covers $\\{4, 5\\}$ (2 new), $S_5$ covers $\\{4, 6\\}$ (2 new). Pick $S_3$. Covered: $\\{1, 2, 3, 5, 6\\}$.
3. Remaining: $\\{4\\}$. Pick $S_2$ (or $S_4$ or $S_5$). Covered: $\\{1, 2, 3, 4, 5, 6\\}$.

**Greedy solution:** $\\{S_1, S_3, S_2\\}$, size 3. **Optimal:** $\\{S_1, S_5, S_4\\}$ or $\\{S_3, S_5, S_2\\}$, size 3. Here greedy is optimal, but in general it is a $\ln n$-approximation.
</details>

### 6.3 Randomised Algorithms

#### 6.3.1 Las Vegas vs. Monte Carlo

**Las Vegas algorithms** always produce the correct answer but have randomised running time.

**Monte Carlo algorithms** always run in polynomial time but may produce incorrect answers with some probability.

| Property          | Las Vegas       | Monte Carlo         |
| ----------------- | --------------- | ------------------- |
| Correctness       | Always correct  | Bounded error prob  |
| Running time      | Randomised      | Bounded             |
| Example           | Randomised Quicksort | Miller-Rabin primality |

**Theorem 6.6.** A Monte Carlo algorithm with error probability $\epsilon$ can be amplified to error probability $\epsilon^k$ by running it $k$ times and taking the majority vote (for decision problems with one-sided error) or the most frequent answer (for two-sided error).

*Proof.* For one-sided error: $\Pr[\mathrm{all~} k \mathrm{~runs~fail}] = \epsilon^k$. For two-sided error with majority vote: by the Chernoff bound, the probability that the majority is wrong decreases exponentially in $k$. $\blacksquare$

#### 6.3.2 Randomised Select (Quickselect)

**Problem.** Find the $k$-th smallest element in an unsorted array.

**Algorithm (Randomised Select):** Like quicksort, but recurse only into the partition containing the $k$-th element.

**Theorem 6.7.** Randomised select has expected running time $O(n)$.

*Proof.* The expected number of comparisons satisfies $T(n) \leq n + \frac{1}{n}\sum_{i=1}^{n}(T(\max(i-1, n-i)))$. This can be shown to satisfy $T(n) = O(n)$ by induction. $\blacksquare$

<details>
<summary>Worked Example: Randomised Select</summary>

Find the 3rd smallest element in $[7, 2, 1, 6, 8, 5, 3, 4]$.

Pivot = randomly chosen. Suppose pivot = 5 (index 5).

Partition: $[7, 2, 1, 6, 8, 5, 3, 4] \to [2, 1, 3, 4, 5, 6, 8, 7]$.

Pivot 5 is at index 4 (0-indexed). We want rank 3 (0-indexed rank 2). $4 > 2$, so recurse on left: $[2, 1, 3, 4]$.

Pivot = randomly chosen. Suppose pivot = 3.

Partition: $[2, 1, 3, 4] \to [2, 1, 3, 4]$.

Pivot 3 is at index 2. We want rank 2. $2 = 2$, so return 3.

The 3rd smallest element is 3.
</details>

<details>
<summary>Worked Example: Miller-Rabin Primality Test</summary>

Test whether $n = 561$ is prime (it is not; $561 = 3 \times 11 \times 17$, a Carmichael number).

Write $n - 1 = 560 = 2^4 \times 35$, so $s = 4$, $d = 35$.

Choose random base $a = 2$.

Compute $a^d \bmod n = 2^{35} \bmod 561$.

$2^5 = 32$, $2^{10} = 1024 \bmod 561 = 463$, $2^{20} = 463^2 \bmod 561 = 67$, $2^{35} = 2^{20} \cdot 2^{10} \cdot 2^5 \bmod 561 = 67 \cdot 463 \cdot 32 \bmod 561$.

$67 \times 463 = 31021 \bmod 561 = 31021 - 55 \times 561 = 31021 - 30855 = 166$.
$166 \times 32 = 5312 \bmod 561 = 5312 - 9 \times 561 = 5312 - 5049 = 263$.

$a^d \bmod n = 263 \neq 1$ and $\neq n - 1 = 560$.

Now square: $263^2 \bmod 561 = 69169 \bmod 561 = 69169 - 123 \times 561 = 69169 - 69003 = 166 \neq 560$.

Square: $166^2 \bmod 561 = 27556 \bmod 561 = 27556 - 49 \times 561 = 27556 - 27489 = 67 \neq 560$.

Square: $67^2 \bmod 561 = 4489 \bmod 561 = 4489 - 8 \times 561 = 4489 - 4488 = 1$.

We got 1 on the last squaring, but the previous result was $67 \neq 1, 560$. So $a = 2$ is a **witness** that 561 is composite. Output: COMPOSITE.

The error probability of Miller-Rabin is at most $1/4$ per random base, so $k$ iterations give error $\leq 4^{-k}$.
</details>

#### 6.3.3 Hashing with Universal Hash Functions

**Definition.** A family $\mathcal{H}$ of hash functions from $U$ to $\\{0, \ldots, m - 1\\}$ is **universal** if for any distinct $x, y \in U$, $\Pr_{h \in \mathcal{H}}[h(x) = h(y)] \leq 1/m$.

**Theorem 6.8.** With a universal hash family and chaining, the expected number of collisions for any element is at most $n/m$.

*Proof.* For a fixed element $x$, let $X_{iy}$ be the indicator that $h(x) = h(y_i)$ where $y_1, \ldots, y_n$ are the other $n-1$ elements. Then $\mathrm{E}[X_{iy}] = \Pr[h(x) = h(y_i)] \leq 1/m$ by universality. By linearity of expectation, the expected number of collisions is $\sum_i \mathrm{E}[X_{iy}] \leq (n-1)/m$. $\blacksquare$

### 6.4 Amortised Analysis (Detailed)

#### 6.4.1 Aggregate Analysis

**Example: Multi-pop Stack.** A stack supports push ($O(1)$) and multi-pop($k$) (pop $k$ elements, cost $\min(k, s)$ where $s$ is the stack size). Although a single multi-pop can cost $O(n)$, a sequence of $n$ push/multi-pop operations costs $O(n)$ total: each element is pushed once and popped at most once.

**Theorem 6.9.** The amortised cost per operation for a multi-pop stack is $O(1)$.

*Proof.* In a sequence of $n$ operations, each element is pushed at most once and popped at most once. The total cost is at most $2n = O(n)$, so the amortised cost per operation is $O(n)/n = O(1)$. $\blacksquare$

#### 6.4.2 Accounting Method

Each operation is charged an **amortised cost**. The difference between the amortised cost and the actual cost is stored as **credit**. The credit must always be non-negative.

**Example: Binary Counter.** A $k$-bit binary counter supports increment (flip bits from the right until a 0 is found).

Assign amortised cost of 2 per increment: 1 to pay for flipping a 0 to 1, 1 stored as credit. When a 1 is flipped back to 0, the credit from when it was set pays for the flip.

**Theorem 6.10.** The amortised cost per increment of a binary counter is $O(1)$.

*Proof.* Each bit flips from 0 to 1 at most once between consecutive resets to 0. The credit stored on a 1 bit pays for the subsequent flip back to 0. The total credit is always non-negative. $\blacksquare$

#### 6.4.3 Potential Method

The **potential function** $\Phi$ maps data structure states to non-negative real numbers. The amortised cost of the $i$-th operation is $\hat{c}_i = c_i + \Phi(D_i) - \Phi(D_{i-1})$.

**Theorem 6.11.** If $\Phi(D_i) \geq 0$ for all $i$, then $\sum_{i=1}^{n} \hat{c}_i \geq \sum_{i=1}^{n} c_i$.

<details>
<summary>Worked Example: Binary Counter with Potential Method</summary>

Define $\Phi(D_i) =$ number of 1-bits in the counter after $i$ operations.

For increment $i$: let $t_i$ be the number of trailing 1s flipped. The actual cost is $t_i + 1$ (flipping $t_i$ ones and one zero). The number of 1-bits changes by $1 - t_i$.

$$\hat{c}_i = (t_i + 1) + \Phi(D_i) - \Phi(D_{i-1}) = (t_i + 1) + (1 - t_i) = 2$$

The amortised cost per increment is exactly 2, i.e., $O(1)$.
</details>

<details>
<summary>Worked Example: Splay Tree Amortised Analysis</summary>

A splay tree is a BST where every access is followed by a **splay** operation that moves the accessed node to the root using rotations. Three types of rotations are used: zig (single rotation when parent is root), zig-zig (two rotations in the same direction), and zig-zag (two rotations in alternating directions).

**Access Lemma.** The amortised cost of splaying a node $x$ in a splay tree with $n$ nodes is $O(\log n)$.

*Proof sketch.* Define the potential as $\Phi(T) = \sum_{x \in T} \log \mathrm{size}(x)$, where $\mathrm{size}(x)$ is the number of nodes in the subtree rooted at $x$ (including $x$). Define the **rank** $r(x) = \log \mathrm{size}(x)$.

The amortised cost of a splay step at node $x$ with parent $p$ and grandparent $g$ is $\hat{c} = 1 + r'(x) - r(x)$, where primes denote ranks after the step.

- **Zig:** $\hat{c} = 1 + r'(x) - r(x) \leq 1 + 3(r'(x) - r(x))$.
- **Zig-zig:** $\hat{c} = 2 + r'(x) - r(x) \leq 3(r'(x) - r(x))$.
- **Zig-zag:** $\hat{c} = 2 + r'(x) - r(x) \leq 3(r'(x) - r(x))$.

Summing over all splay steps: $\hat{c}_{\mathrm{total}} \leq 1 + 3(r_{\mathrm{final}}(x) - r_{\mathrm{initial}}(x)) \leq 1 + 3 \log n = O(\log n)$. $\blacksquare$

**Corollary.** A sequence of $m$ splay tree operations takes $O(m \log n)$ amortised time.
</details>

## 7. Problem Set

### 7.1 Analysis (Problems 1--3)

**Problem 1.** Prove that $n^3 / 1000 - 100n^2 - 100n + 3 = \Theta(n^3)$.

**Problem 2.** Use the Master Theorem to solve the recurrence $T(n) = 3T(n/4) + n \log n$. If the Master Theorem does not apply, explain why.

**Problem 3.** Prove that $\log(n!) = \Theta(n \log n)$ using Stirling's approximation: $n! \approx \sqrt{2\pi n}(n/e)^n$.

### 7.2 Data Structures (Problems 4--8)

**Problem 4.** Show the result of inserting the keys $15, 5, 20, 10, 25, 3, 7, 30$ into an initially empty AVL tree. Show all rotations.

**Problem 5.** Prove that deleting a node from a red-black tree with $n$ internal nodes takes $O(\log n)$ time.

**Problem 6.** Design a hash table for $n = 1000$ strings using chaining. Choose the table size $m$, a hash function, and compute the expected number of comparisons for a successful search.

**Problem 7.** A skip list uses $p = 1/4$. What is the expected maximum level for $n = 10000$ elements? What is the expected time for search?

**Problem 8.** Prove that the union-by-rank heuristic alone (without path compression) gives $O(\log n)$ amortised time per Union-Find operation.

### 7.3 Sorting (Problems 9--11)

**Problem 9.** Prove that heapsort is not stable by giving a concrete counterexample.

**Problem 10.** Given an array of $n$ integers in the range $[0, n^2 - 1]$, design an $O(n)$ sorting algorithm using radix sort. Justify the choice of base and number of passes.

**Problem 11.** Prove that the best-case number of comparisons for comparison-based sorting is $\Omega(n \log n)$ (not just the worst case).

### 7.4 Graph Algorithms (Problems 12--15)

**Problem 12.** Run Dijkstra's algorithm on the following graph from source $A$. Show the state of the priority queue after each extraction. Edge weights: $A \xrightarrow{10} B$, $A \xrightarrow{3} C$, $C \xrightarrow{4} B$, $C \xrightarrow{8} D$, $C \xrightarrow{2} E$, $B \xrightarrow{7} D$, $E \xrightarrow{5} D$, $D \xrightarrow{6} B$.

**Problem 13.** Prove that if a graph has a negative-weight cycle reachable from the source, then Bellman-Ford will detect it.

**Problem 14.** Use the cut property to prove that the minimum spanning tree is unique when all edge weights are distinct.

**Problem 15.** Find the strongly connected components of the graph with edges: $(A, B), (B, C), (C, A), (B, D), (D, E), (E, F), (F, D), (F, G)$. Use Kosaraju's algorithm and show all steps.

### 7.5 Dynamic Programming (Problems 16--17)

**Problem 16.** You are given $n$ types of coin denominations $d_1, d_2, \ldots, d_n$ and a target amount $M$. Find the minimum number of coins needed to make exact change for $M$ (or report that it is impossible). Give a recurrence, prove correctness, and state the time and space complexity.

**Problem 17.** Given a sequence of matrices $A_1 (2 \times 10)$, $A_2 (10 \times 50)$, $A_3 (50 \times 20)$, $A_4 (20 \times 5)$, $A_5 (5 \times 80)$, find the optimal parenthesisation using the matrix chain multiplication DP. Show the full DP table.

### 7.6 Advanced Topics (Problems 18--20)

**Problem 18.** Prove that CLIQUE is NP-complete by reducing from 3-SAT.

**Problem 19.** Design a 2-approximation algorithm for the metric TSP using the MST shortcutting technique. Prove the approximation ratio.

**Problem 20.** A randomised algorithm for MINIMUM CUT works by repeatedly contracting random edges until two vertices remain. Prove that the probability that any specific minimum cut survives is at least $2 / (n(n-1))$, and hence that $O(n^2 \log n)$ repetitions suffice to find a minimum cut with high probability (Karger's algorithm).
