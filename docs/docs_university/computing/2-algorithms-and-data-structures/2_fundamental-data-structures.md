---
title: Fundamental Data Structures
tags:
  - Computing
  - University
---

### 2.1 Arrays and Linked Lists

**Array.** Contiguous memory, $O(1)$ access by index, $O(n)$ insertion/deletion (shift required).

| Operation          | Array  | Singly Linked List | Doubly Linked List |
| ------------------ | ------ | ------------------ | ------------------ |
| Access by index    | $O(1)$ | $O(n)$             | $O(n)$             |
| Search (by value)  | $O(n)$ | $O(n)$             | $O(n)$             |
| Insert at head     | $O(n)$ | $O(1)$             | $O(1)$             |
| Insert at tail     | $O(1)$ | $O(n)$             | $O(1)$\*           |
| Delete at head     | $O(n)$ | $O(1)$             | $O(1)$             |
| Delete at tail     | $O(n)$ | $O(n)$             | $O(1)$\*           |
| Insert at position | $O(n)$ | $O(n)$             | $O(1)$\*           |
| Space overhead     | $0$    | $O(n)$             | $O(n)$             |

\*Given a pointer to the node or its predecessor.

**Linked List.** Each node stores data and a pointer to the next node. $O(1)$ insertion/deletion at
Head (given pointer), $O(n)$ access by position.

**Doubly Linked List.** Each node has pointers to both next and previous nodes. $O(1)$ insertion And
deletion at any position (given pointers to the node and its neighbours).

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

At each iteration, we move one node to the front of the reversed list. After $n$ iterations, all $n$
nodes are reversed.

</details>

### 2.2 Stacks and Queues

**Stack.** Last-in, first-out (LIFO). Operations: push, pop, peek, all $O(1)$.

**Queue.** First-in, first-out (FIFO). Operations: enqueue, dequeue, peek, all $O(1)$.

**Implementation.** Both can be implemented with arrays (with circular buffer) or linked lists.

<details>
<summary>Worked Example: Implementing a Queue with Two Stacks</summary>

A queue can be implemented using two stacks `in_stack` and `out_stack`.

- `enqueue(x)`: push $x$ onto `in_stack`. $O(1)$.
- `dequeue()`: if `out_stack` is empty, pop all elements from `in_stack` and push onto `out_stack`.
  Then pop from `out_stack`.

The `dequeue` operation is $O(1)$ amortised: each element is moved from `in_stack` to `out_stack` at
most once across all operations. Over $n$ operations, the total number of element moves is at most
$n$Giving $O(1)$ amortised per dequeue.

</details>

### 2.3 Hash Tables

A **hash table** maps keys to values using a hash function $h : K \to \\{0, 1, \ldots, m - 1\\}$.

**Collision resolution:**

- **Chaining:** Each bucket is a linked list. Average case: $O(1 + \alpha)$ where $\alpha = n/m$ is
  the load factor.
- **Open addressing (linear probing):** Insert into the next available slot. Average case:
  $O(1/(1-\alpha))$.

**Theorem 2.1 (Uniform Hashing).** Under the assumption of simple uniform hashing, the expected
Length of a chain in a hash table with chaining is $\alpha = n/m$.

_Proof._ Under simple uniform hashing, each of the $n$ keys is equally likely to hash to any of the
$m$ slots. For any given key $k$The expected number of other keys that hash to the same slot as $k$
is $(n - 1)/m < \alpha$. Including $k$ itself, the expected chain length is
$1 + (n-1)/m \leq 1 + \alpha$. $\blacksquare$

**Theorem 2.2 (Successful Search with Chaining).** Under simple uniform hashing, the expected time
for a successful search in a hash table with chaining is $O(1 + \alpha/2)$.

_Proof._ The expected length of the list containing the searched element is $1 + (n - 1)/m$Since
$n - 1$ other elements are distributed uniformly. On average, the searched element is halfway
through its list, giving $(1 + (n-1)/m)/2 + 1/2$ comparisons (we examine elements before the target
plus the target itself). This equals $1 + \alpha/2 - 1/(2m) = O(1 + \alpha)$. $\blacksquare$

**Double Hashing.** Uses two hash functions: $h(k, i) = (h_1(k) + i \cdot h_2(k)) \bmod m$Where
$h_2(k)$ is relatively prime to $m$. This avoids the clustering problems of linear probing.

<details>
<summary>Worked Example: Choosing a Good Hash Function</summary>

For integer keys, a common choice is the multiplication method:
$h(k) = \lfloor m \cdot (k \cdot A \bmod 1) \rfloor$ where $A = (\sqrt{5} - 1)/2 \approx 0.618$ (the
inverse golden ratio).

For string keys, the polynomial rolling hash:
$h(s) = \left(\sum_{i=0}^{k-1} s[i] \cdot p^{k-1-i}\right) \bmod m$ where $p$ is a prime (e.g., 31
or 127).

Both avoid clustering better than simple modulo hashing when the input distribution is adversarial.

</details>

### 2.4 Trees

**Binary Search Tree (BST).** For each node: left subtree values $\lt$ node value, right subtree
values $\gt$ node value.

- Search, insert, delete: $O(h)$ where $h$ is the height.
- For a balanced BST, $h = O(\log n)$.

**Theorem 2.3.** The expected height of a randomly built BST with $n$ distinct keys is $O(\log n)$.

_Proof._ Let $X_n$ be the height of a BST built from $n$ random keys. Let $Y_n = 2^{X_n}$. Then
$\mathrm{E}[Y_n] \leq \frac{1}{4} \sum_{i=0}^{n-1} \binom{n}{i} \mathrm{E}[Y_i] \mathrm{E}[Y_{n-1-i}] / n$.
Using the indicator random variable technique,
$\mathrm{E}[Y_n] \leq \frac{c^{n+1}}{n^{3/2}} \sum_{i=0}^{n-1} \frac{i^{3/2}(n-1-i)^{3/2}}{c^i c^{n-1-i}} \leq c \cdot n^{3/2}$
for some constant $c$. Taking logs gives
$\mathrm{E}[X_n] = \mathrm{E}[\log Y_n] \leq \log \mathrm{E}[Y_n] = O(\log n)$ by Jensen's
inequality. $\blacksquare$

#### 2.4.1 AVL Trees

**Definition.** An AVL tree is a BST where for every node, the heights of its left and right
subtrees differ by at most 1. The **balance factor** of a node is the height of its left subtree
minus the height of its right subtree; valid balance factors are $\\{-1, 0, 1\\}$.

**Rotations.** After insertion or deletion, the balance factor may become $\pm 2$. This is fixed by
rotations:

- **Right rotation (LL case):** Balance factor $+2$ at node $A$Balance factor $+1$ at left child
  $B$.

  ```
       A           B
      / \         / \
     B   C  →   D   A
    / \             / \
   D   E           E   C
  ```

- **Left rotation (RR case):** Mirror of right rotation.

- **Left-Right rotation (LR case):** Balance factor $+2$ at $A$Balance factor $-1$ at left child
  $B$. First left-rotate $B$Then right-rotate $A$.

- **Right-Left rotation (RL case):** Mirror of LR case.

**Theorem 2.4.** An AVL tree with $n$ nodes has height $h \leq 1.4404 \cdot \log_2(n + 2) - 1.3277$.

_Proof._ Let $N(h)$ be the minimum number of nodes in an AVL tree of height $h$. We have $N(0) = 1$,
$N(1) = 2$And $N(h) = 1 + N(h-1) + N(h-2)$ for $h \geq 2$. This is the Fibonacci recurrence, giving
$N(h) = F_{h+3} - 1$. Using $F_h = \frac{\phi^h - \hat{\phi}^h}{\sqrt{5}}$ where
$\phi = \frac{1+\sqrt{5}}{2}$We get $N(h) > \phi^h / \sqrt{5} - 1$So
$h \lt \log_\phi(\sqrt{5}(n + 1)) \approx 1.4404 \log_2(n + 1)$. $\blacksquare$

**Corollary 2.5.** All AVL tree operations (search, insert, delete) run in $O(\log n)$ time.

_Proof._ Each operation visits $O(h) = O(\log n)$ nodes along a root-to-leaf path, and each rotation
is $O(1)$. Since at most $O(\log n)$ rotations are needed (at most 2 per level), the total cost is
$O(\log n)$. $\blacksquare$

#### 2.4.2 Red-Black Trees

**Definition.** A red-black tree is a BST satisfying:

1. Every node is either red or black.
2. The root is black.
3. Every leaf (NIL sentinel) is black.
4. If a node is red, both its children are black.
5. For every node, all simple paths from the node to descendant leaves contain the same number of
   black nodes (the **black-height**).

**Theorem 2.6.** A red-black tree with $n$ internal nodes has height $h \leq 2 \log_2(n + 1)$.

_Proof._ Let $r$ be the root. By property 5, at least half the nodes on any root-to-leaf path are
black (by property 4, no two reds are adjacent), so the black-height $bh(r) \geq h/2$. Let
$S(h, bh)$ be the minimum number of internal nodes in a subtree of height $h$ and black-height $bh$.
Then $S(h, bh) \geq 2^{bh} - 1$ (proved by induction on $bh$Using the fact that each child has
black-height at least $bh - 1$ and the root is black). Since $bh(r) \geq h/2$ and
$n \geq 2^{bh(r)} - 1 \geq 2^{h/2} - 1$We get $h \leq 2 \log_2(n + 1)$. $\blacksquare$

**Insertion.** Insert as in a standard BST (colour the new node red), then fix violations by
recolouring and rotating up to $O(\log n)$ times.

**Deletion.** More complex than insertion. When a black node is removed, we may need to fix the
black-height property by recolouring and rotating. The fix-up procedure takes $O(\log n)$ time.

#### 2.4.3 B-Trees

**Definition.** A B-tree of minimum degree $t \geq 2$ is a rooted tree satisfying:

1. Every node has at most $2t - 1$ keys.
2. Every non-root node has at least $t - 1$ keys (hence at least $t$ children).
3. The root has at least 1 key.
4. All leaves appear at the same depth.

**Theorem 2.7.** A B-tree with $n$ keys and minimum degree $t$ has height
$h \leq \log_t \frac{n+1}{2}$.

_Proof._ The root has at least 1 key and 2 children. At depth 1, each node has at least $t - 1$ keys
and $t$ children. At depth $d \geq 1$The number of nodes is at least $2t^{d-1}$Each with at least
$t - 1$ keys. So the total number of keys is at least
$1 + 2(t-1) \sum_{i=0}^{h-1} t^i = 1 + 2(t-1) \cdot \frac{t^h - 1}{t - 1} = 2t^h - 1$. Setting
$n \geq 2t^h - 1$ gives $h \leq \log_t((n+1)/2)$. $\blacksquare$

<details>
<summary>Worked Example: Red-Black Tree Insertion Trace</summary>

Insert keys 7, 3, 18, 10, 22, 8, 11, 26 into an initially empty red-black tree.

Insert 7: Root is coloured black. $T = [7(B)]$

Insert 3: Left child of 7, coloured red. $T = [7(B) \leftarrow 3(R)]$. Valid (root is black, no
red-red violation).

Insert 18: Right child of 7, coloured red. $T = [3(R) \leftarrow 7(B) \rightarrow 18(R)]$. Valid.

Insert 10: Insert as left child of 18, coloured red. Now 18 has red child 10. Uncle of 10 is 3(R) —
**Case 1 (uncle is red)**: recolour uncle 3 black, parent 18 black, grandparent 7 red. Grandparent 7
is root, so recolour 7 black.

Result: $T = [3(B) \leftarrow 7(B) \rightarrow 18(B)]$ with $10(R)$ under $18$.

Insert 22: Right child of 18, coloured red. Uncle of 22 is 10(R) — Case 1 again: recolour 10 black,
22 black, 18 red. Parent 18 is not root, grandparent is 7(B). Now 7 has right child 18(R). Check 7's
left child: 3(B). No violation.

Insert 8: Left child of 10, coloured red. Uncle of 8 is 22(R) — Case 1: recolour 8 black, 22 black,
10 red. Now 10(R) is left child of 18(B). Check grandparent 7: right child 18(B) with left child
10(R). No red-red violation.

Insert 11: Right child of 10, coloured red. Now 10(R) has both children red — wait, 10 is red and 11
is red: **violation**. Uncle of 11 is 8(R) — Case 1: recolour 8 black, 11 black, 10 red. Grandparent
18(B): 10(R) is left child, 22(B) is right child. No violation.

Insert 26: Right child of 22, coloured red. Uncle of 26 is 10(R) — Case 1: recolour 10 black, 26
black, 22 red. Now 22(R) is right child of 18(B). Check left child of 18: 10(B). Valid.

</details>

### 2.5 Skip Lists

A **skip list** is a probabilistic data structure that provides $O(\log n)$ expected-time search,
insertion, and deletion. It consists of multiple levels of linked lists.

**Structure:**

- Level 0 is a standard linked list containing all elements in sorted order.
- Each element is promoted to level 1 with probability $p$ ( $p = 1/2$).
- Each level-$i$ element is promoted to level $i+1$ independently with probability $p$.
- A sentinel head node links to the first element at every level.

**Theorem 2.8.** The expected number of levels in a skip list with $n$ elements is $O(\log n)$.

_Proof._ An element reaches level $i$ with probability $p^i$. The expected number of elements at
level $i$ is $np^i$. The highest non-empty level is approximately $\log_{1/p} n$. $\blacksquare$

**Theorem 2.9.** Search, insert, and delete in a skip list take $O(\log n)$ expected time.

_Proof._ The search path at each level $i$ moves right to find an element whose successor at level
$i$ is greater than the target, then drops to level $i - 1$. At each level, the expected number of
rightward steps is at most $1/p$ (a geometric distribution argument). With $O(\log_{1/p} n)$ levels,
the total expected work is $O(\log n / p) = O(\log n)$. $\blacksquare$

<details>
<summary>Worked Example: Skip List Search</summary>

Search for key 25 in a skip list containing keys $[3, 7, 12, 19, 25, 31, 42]$ with the following
level structure (probability $p = 1/2$):

```
Level 3:  [HEAD] -------------------------> [31] ---------->
Level 2:  [HEAD] ---------> [12] -------------------------->
Level 1:  [HEAD] -> [7] -> [12] -> [19] -> [25] -> [31] -> [42]
Level 0:  [HEAD] -> [7] -> [12] -> [19] -> [25] -> [31] -> [42]
```

Search starts at HEAD, level 3:

- Move right to 31. $31 > 25$Drop to level 2.
- At level 2, move right to 12. $12 \leq 25$Move right — next is NIL. Drop to level 1.
- At level 1, move right to 19. $19 \leq 25$Move right to 25. $25 = 25$. Found!

The search examined keys 31, 12, 19, 25 — 4 comparisons across 3 levels.

</details>

<details>
<summary>Worked Example: Skip List Insertion</summary>

Insert key 15 into the skip list above.

1. Search for insertion position: traverse levels 3, 2, 1 to find that 15 goes between 12 and 19.
2. Insert 15 at level 0 (always). Randomly promote: suppose coin flip says promote to level 1.
   Insert at level 1. Flip again: promote to level 2. Insert at level 2. Flip again: don't promote.
   Stop.

```
Level 3:  [HEAD] -------------------------> [31] ---------->
Level 2:  [HEAD] ---------> [12] -> [15] ------------------>
Level 1:  [HEAD] -> [7] -> [12] -> [15] -> [19] -> [25] -> [31] -> [42]
Level 0:  [HEAD] -> [7] -> [12] -> [15] -> [19] -> [25] -> [31] -> [42]
```

Insertion takes $O(\log n)$ expected time (search path + insertions at promoted levels).

</details>

### 2.6 Bloom Filters

A **Bloom filter** is a space-efficient probabilistic data structure for set membership testing. It
may produce false positives but never false negatives.

**Structure:** A bit array of $m$ bits (initially all 0) and $k$ independent hash functions
$h_1, \ldots, h_k$.

**Operations:**

- **Insert** $x$: set bits $h_1(x), h_2(x), \ldots, h_k(x)$ to 1.
- **Query** $x$: return true if all $h_1(x), \ldots, h_k(x)$ are set to 1.

**Theorem 2.10.** After inserting $n$ elements into a Bloom filter of size $m$ with $k$ hash
functions, the probability of a false positive is approximately $\left(1 - e^{-kn/m}\right)^k$.

_Proof._ After inserting $n$ elements, each of the $m$ bits is set to 0 with probability
$(1 - 1/m)^{kn} \approx e^{-kn/m}$. The probability that all $k$ bits for a query element are set is
$(1 - e^{-kn/m})^k$. $\blacksquare$

**Optimal number of hash functions.** The false positive rate is minimised when
$k = (m/n) \ln 2$Giving a minimum rate of approximately $(1/2)^k = 0.6185^{m/n}$.

<details>
<summary>Worked Example: Bloom Filter Configuration</summary>

We want to store $n = 10000$ URLs with a false positive rate of at most 1%.

From the formula: $(1 - e^{-kn/m})^k \leq 0.01$.

Optimal $k = (m/n) \ln 2$. At the optimal point, the false positive rate is
$(1/2)^k \approx 0.6185^{m/n}$.

We need $0.6185^{m/n} \leq 0.01$So $m/n \geq \ln(0.01) / \ln(0.6185) \approx 9.585$.

Take $m = 95850$ bits $\approx 11.5$ KB. Then $k = (95850 / 10000) \ln 2 \approx 6.64$So use $k = 7$
hash functions.

This requires only 11.5 KB of memory versus approximately 600 KB for storing the URLs as 60-byte
strings.

</details>

<details>
<summary>Worked Example: Bloom Filter Operations Trace</summary>

A Bloom filter has $m = 10$ bits, $k = 2$ hash functions: $h_1(x) = x \bmod 10$,
$h_2(x) = (x \cdot 3) \bmod 10$.

Insert 15: $h_1(15) = 5$, $h_2(15) = 5 \cdot 3 \bmod 10 = 5$. Set bit 5. Bit array: `0000010000`

Insert 22: $h_1(22) = 2$, $h_2(22) = 22 \cdot 3 \bmod 10 = 6$. Set bits 2, 6. Bit array:
`0010010100`

Insert 37: $h_1(37) = 7$, $h_2(37) = 37 \cdot 3 \bmod 10 = 1$. Set bits 1, 7. Bit array:
`0110010110`

Query 22: $h_1(22) = 2$ (set), $h_2(22) = 6$ (set). Result: **possibly in set** (true positive).

Query 42: $h_1(42) = 2$ (set), $h_2(42) = 42 \cdot 3 \bmod 10 = 6$ (set). Result: **possibly in
set** (false positive!).

Query 50: $h_1(50) = 0$ (not set). Result: **definitely not in set** (true negative).

</details>

### 2.7 Heaps

A **binary heap** is a complete binary tree satisfying the heap property:

- **Max-heap:** parent $\geq$ children.
- **Min-heap:** parent $\leq$ children.

Implemented as an array: parent of node $i$ is at $\lfloor(i-1)/2\rfloor$; children at $2i+1$ and
$2i+2$.

**Operations:** insert $O(\log n)$Extract-max/min $O(\log n)$Peek $O(1)$.

**Theorem 2.11 (Build-Heap).** `buildHeap` on an array of $n$ elements runs in $O(n)$ time.

_Proof._ `buildHeap` calls `heapify` on each of the $\lfloor n/2 \rfloor$ non-leaf nodes. The cost
of `heapify` at a node of height $h$ is $O(h)$. The total cost is
$\sum_{h=0}^{\lfloor \log n \rfloor} \lceil n / 2^{h+1} \rceil \cdot O(h) = O\left(n \sum_{h=0}^{\infty} h / 2^h\right) = O(n)$Since
$\sum_{h=0}^{\infty} h / 2^h = 2$. $\blacksquare$

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
- `Find` follows parent pointers and compresses the path (makes every node on the path point
  directly to the root).
- `Union` attaches the shorter tree under the root of the taller tree (by rank/size).

**Theorem 2.12.** With both path compression and union by rank, the amortised time per operation is
$O(\alpha(n))$Where $\alpha(n)$ is the inverse Ackermann function.

_Proof (outline)._ The inverse Ackermann function $\alpha(n)$ grows so slowly that
$\alpha(n) \leq 4$ for all practical values of $n$ ($n \leq 2^{2^{2^{65536}}}$). The
.../1-number-and-algebra/3*proof-and-logic uses a potential function argument on the levels of the
tree. Each node is assigned a \_level* based on its rank. The key insight is that path compression
prevents the number of nodes at high levels from growing. The total number of Find operations that
can charge to any level-$\ell$ node is bounded by $O(n \cdot F^{-1}(\ell))$ where $F$ is a
fast-growing function. Summing over all levels gives $O(n \alpha(n))$ total, hence $O(\alpha(n))$
amortised per operation. $\blacksquare$

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

After processing all edges, vertices in the same connected component have the same representative.
Total time: $O(n + m \alpha(n)) \approx O(n + m)$.

</details>

### 2.9 Graphs

A graph $G = (V, E)$ can be represented by:

- **Adjacency matrix:** $A_{ij} = 1$ if $(i,j) \in E$. Space: $O(V^2)$. Edge lookup: $O(1)$.
- **Adjacency list:** For each vertex, store a list of neighbours. Space: $O(V + E)$. Iterating over
  neighbours: $O(\mathrm{deg}(v))$.

| Operation          | Adjacency Matrix | Adjacency List       |
| ------------------ | ---------------- | -------------------- |
| Space              | $O(V^2)$         | $O(V + E)$           |
| Check edge $(u,v)$ | $O(1)$           | $O(\mathrm{deg}(u))$ |
| Iterate neighbours | $O(V)$           | $O(\mathrm{deg}(v))$ |
| Add edge           | $O(1)$           | $O(1)$               |
| Remove edge        | $O(1)$           | $O(\mathrm{deg}(u))$ |

:::caution Common Pitfall Choosing the wrong graph representation can make an algorithm
asymptotically slower. Use adjacency matrices for dense graphs ($E \approx V^2$) and adjacency lists
for sparse graphs ($E \ll V^2$). For example, BFS with an adjacency matrix takes $O(V^2)$ but with
adjacency lists takes $O(V + E)$.



:::
