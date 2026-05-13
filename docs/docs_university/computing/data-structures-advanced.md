---
title: Data Structures (Advanced)
description: "University-level notes on Advanced Data Structures: 1. Balanced Search Trees; 1.1 Red-Black Trees; 1.2 B-Trees and B+ Trees; 1.3 Tries and Prefix Trees."
date: 2026-05-06T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: data-structures-advanced
---
## 1. Balanced Search Trees

### 1.1 Red-Black Trees

A **red-black tree** is a self-balancing BST satisfying five invariants:

1. Every node is either red or black.
2. The root is black.
3. Every leaf (NIL sentinel) is black.
4. If a node is red, both its children are black (no two consecutive reds on any path).
5. For every node, all simple paths from the node to descendant leaves contain the same number of black nodes. This number is the **black-height** of the node.

**Theorem 1.1.** A red-black tree with $n$ internal nodes has height $h \leq 2 \log_2(n + 1)$.

*Proof.* By invariant 4, on any path from root to leaf, at most half the nodes (rounded up) can be red. So the length of any root-to-leaf path is at most twice the black-height $bh$ of the root. We now bound $bh$ in terms of $n$.

Consider the subtree rooted at any node $x$. If this subtree has height $h_x$, then it contains at least $2^{bh(x)} - 1$ internal nodes (proof by induction on $h_x$: if $x$ is a leaf, it has $0 = 2^0 - 1$ internal nodes; otherwise, each child has black-height at least $bh(x) - 1$ if it is red, or $bh(x)$ if it is black, so each child has at least $2^{bh(x)-1} - 1$ internal nodes, giving at least $2(2^{bh(x)-1} - 1) + 1 = 2^{bh(x)} - 1$ for $x$).

Therefore $n \geq 2^{bh(\mathrm{root{})} - 1$, giving $bh(\mathrm{root{}) \leq \log_2(n+1)$. Since $h \leq 2 \cdot bh(\mathrm{root{})$, we have $h \leq 2\log_2(n+1)$. $\blacksquare$

**Corollary.** Search, insert, and delete in a red-black tree take $O(\log n)$ time.

#### 1.1.1 Insertion

Insertion follows the standard BST insert, then colours the new node red. This may violate invariant 4 (two consecutive reds). Fix-up uses at most three rotations and recolouring.

**Cases after insertion** (let $z$ be the newly inserted red node, $p$ its parent, $u$ its uncle, and $g$ its grandparent):

| Case | Uncle colour | Configuration | Fix |
|------|-------------|---------------|-----|
| 1 | Red | Any | Recolour $p$ and $u$ black, $g$ red; push problem up to $g$ |
| 2 | Black | $z$ and $p$ same direction (left-left or right-right) | Single rotation at $g$; recolour $p$ black, $g$ red |
| 3 | Black | $z$ and $p$ opposite directions (left-right or right-left) | Double rotation: first at $p$, then at $g$; recolour $z$ black, $g$ red |

**Theorem 1.2.** Insertion into a red-black tree with $n$ nodes takes $O(\log n)$ time and performs at most 2 rotations.

*Proof.* The BST insert takes $O(\log n)$ time. The fix-up loop ascends the tree. Each iteration either terminates (cases 2 and 3 perform one or two rotations and terminate) or moves the problem two levels up (case 1 recolours and continues with $g$). Since the tree height is $O(\log n)$, the loop runs $O(\log n)$ times, but only cases 2 and 3 involve rotations, and at most one of these is reached. $\blacksquare$

<details>
<summary>Worked Example: Red-Black Tree Insertion</summary>

Insert keys 7, 3, 18, 10, 22, 8, 11, 26, 2, 6 into an initially empty red-black tree.

*Insert 7:* Tree is empty. 7 becomes the root, coloured black.

```
7(B)
```

*Insert 3:* BST insert left of 7, colour red. Parent 7 is black -- no violation.

```
    7(B)
   /
  3(R)
```

*Insert 18:* BST insert right of 7, colour red. Parent 7 is black -- no violation.

```
    7(B)
   /    \
  3(R)  18(R)
```

*Insert 10:* BST insert left of 18, colour red. Parent 18 is red -- **violation**. Uncle 3 is red (case 1). Recolour: 3 and 18 become black, 7 becomes red. Now 7 is the root, so colour it black.

```
      7(B)
    /      \
   3(B)    18(B)
          /
        10(R)
```

*Insert 22:* BST insert right of 18, colour red. Parent 18 is black -- no violation.

```
      7(B)
    /      \
   3(B)    18(B)
          /    \
        10(R)  22(R)
```

*Insert 8:* BST insert left of 10, colour red. Parent 10 is red -- violation. Uncle 22 is red (case 1). Recolour: 10 and 22 black, 18 red. Now 18's parent 7 is black -- no further violation.

```
        7(B)
      /      \
    3(B)     18(R)
            /     \
         10(B)   22(B)
         /
       8(R)
```

*Insert 11:* BST insert right of 10, colour red. Parent 10 is black -- no violation.

```
        7(B)
      /      \
    3(B)     18(R)
            /     \
         10(B)   22(B)
         /   \
       8(R)  11(R)
```

*Insert 26:* BST insert right of 22, colour red. Parent 22 is black -- no violation.

*Insert 2:* BST insert left of 3, colour red. Parent 3 is black -- no violation.

*Insert 6:* BST insert right of 3, colour red. Parent 3 is red -- violation. Uncle 18 is red (case 1). Recolour: 3 and 18 black, 7 red. Root must be black.

Final tree:
```
          7(B)
       /        \
     3(B)      18(B)
    /   \      /    \
  2(R)  6(R) 10(R)  22(B)
          /   \       \
        8(B) 11(B)   26(R)
```

Verify: every root-to-leaf path has exactly 2 black internal nodes (plus the black NIL). No two consecutive reds. Root is black.
</details>

#### 1.1.2 Deletion

Deletion is more complex than insertion. The key difficulty arises when removing a black node, which changes the black-height of paths.

**Algorithm outline:**

1. Perform standard BST deletion. If the removed node $y$ is black, let $x$ be the node that replaces $y$ in its position. The "extra black" is pushed onto $x$.
2. If $x$ is red-black (red with an extra black), simply colour it black.
3. Otherwise, fix the "double-black" violation at $x$ using the fix-up procedure.

**Fix-up cases** (let $w$ be the sibling of $x$):

| Case | Sibling $w$ | $w$'s children | Fix |
|------|------------|---------------|-----|
| 1 | Red | Any | Left-rotate at parent, recolour; reduces to cases 2--4 |
| 2 | Black | Both black | Recolour $w$ red; push double-black up to parent |
| 3 | Black | Left child red, right child black | Right-rotate at $w$, recolour children; reduces to case 4 |
| 4 | Black | Right child red | Left-rotate at parent, recolour $w$ and parent's parent; terminate |

**Theorem 1.3.** Deletion from a red-black tree with $n$ nodes takes $O(\log n)$ time and performs at most 3 rotations.

*Proof.* BST deletion is $O(\log n)$. The fix-up loop either terminates (cases 1, 3, and 4 involve rotations and terminate or move to case 4 which terminates) or moves the problem one level up (case 2). At most $O(\log n)$ iterations, but at most 3 rotations total (case 1 does one, then case 3 does one, then case 4 does one). $\blacksquare$

<details>
<summary>Worked Example: Red-Black Tree Deletion</summary>

Starting from the tree built in the previous example, delete key 18.

```
          7(B)
       /        \
     3(B)      18(B)
    /   \      /    \
  2(R)  6(R) 10(R)  22(B)
          /   \       \
        8(B) 11(B)   26(R)
```

The node 18 has two children, so we find its successor (22) and replace 18 with 22, then delete the original 22 node. The successor 22 has only a right child (26). Since 22 is black, removing it creates a double-black at 26.

Double-black at 26 (x = 26). Sibling $w$ is NIL (black). This is case 2 with NIL sibling.

Actually, let me reconsider. When we replace 18 with 22, the structure becomes:

```
          7(B)
       /        \
     3(B)      22(B)
    /   \      /
  2(R)  6(R) 10(R)
          /   \
        8(B) 11(B)
              \
             26(R)
```

Wait -- we need to handle this more carefully. Let us replace 18's key with 22's key and remove the original 22 node. Node 22 had one right child (26, red). We replace 22 with 26 and colour 26 black (since 22 was black). No double-black violation arises because 26 was red and is simply recoloured to black.

```
          7(B)
       /        \
     3(B)      22(B)
    /   \      /
  2(R)  6(R) 10(R)
          /   \
        8(B) 11(B)
```

Node 26 is now detached. The tree is still a valid red-black tree. Deletion complete with 0 rotations.
</details>

:::caution Common Pitfall
The most common error in red-black tree deletion is forgetting to handle the case where the node to be deleted has two children. In this case, one must find the successor (or predecessor), copy its key/value to the node being deleted, and then delete the successor node from its original position. The successor always has at most one child, simplifying the actual removal.
:::

### 1.2 B-Trees and B+ Trees

#### 1.2.1 B-Trees

A **B-tree of minimum degree $t$** (where $t \geq 2$) is a rooted tree satisfying:

1. Every node other than the root has at least $t - 1$ keys. The root has at least 1 key.
2. Every node has at most $2t - 1$ keys.
3. Every internal node with $k$ keys has exactly $k + 1$ children.
4. All leaves appear at the same depth.

**Theorem 1.4.** A B-tree of height $h$ with minimum degree $t \geq 2$ has at least $2t^{h-1}$ leaves (for $h \geq 1$) and stores at least $n \geq 2t^{h-1} - 1$ keys.

*Proof.* The root has at least 2 children (since it has at least 1 key). Every internal node at depth $\geq 1$ has at least $t$ children. Therefore the number of nodes at depth $d$ is at least $2t^{d-1}$ for $d \geq 1$. The number of leaves (at depth $h$) is at least $2t^{h-1}$. Each leaf has at least $t - 1$ keys, so $n \geq 2t^{h-1}(t-1) \geq 2t^{h-1} - 1$ (for $t \geq 2$). $\blacksquare$

**Corollary.** The height of a B-tree storing $n$ keys is $h \leq \log_t \frac{n+1}{2} = O(\log_t n)$.

For example, with $t = 1001$ and $n = 10^9$, $h \leq \log_{1001}(5 \times 10^8) \approx 2.8$, so at most 3 disk accesses.

#### 1.2.2 B-Tree Operations

**Search.** Starting at the root, scan the keys in the current node for the target. If found, return. Otherwise, determine which child pointer to follow and recurse. Takes $O(\log_t n)$ node accesses.

**Insertion.** Insert the key into the appropriate leaf. If the leaf overflows (has $2t$ keys), split it: promote the median key to the parent, and create two new nodes each with $t - 1$ keys. If the parent overflows, split it recursively. If the root splits, create a new root with one key and two children.

**Split cost.** Splitting a node costs $O(t)$ time (copying keys and children) but occurs infrequently. The amortised cost of insertion is $O(\log_t n + t)$.

<details>
<summary>Worked Example: B-Tree Insertion ($t = 2$)</summary>

A B-tree with minimum degree $t = 2$ allows 1--3 keys per node (and 2--4 children per internal node).

Insert keys: 10, 20, 5, 6, 12, 30, 7, 17.

*Insert 10:* Root = [10]. (1 key, valid)

*Insert 20:* Root = [10, 20]. (2 keys, valid)

*Insert 5:* Root = [5, 10, 20]. (3 keys, valid)

*Insert 6:* Root = [5, 6, 10, 20]. (4 keys = $2t$, overflow!) Split: promote 6, create [5] and [10, 20].

```
      [6]
     /    \
  [5]    [10, 20]
```

*Insert 12:* Insert into [10, 20]: [10, 12, 20]. (3 keys, valid)

*Insert 30:* Insert into [10, 12, 20]: [10, 12, 20, 30]. (4 keys, overflow!) Split: promote 20, create [10, 12] and [30].

```
        [6, 20]
       /   |    \
    [5]  [10,12] [30]
```

*Insert 7:* Insert into [5]: [5, 7]. (2 keys, valid)

*Insert 17:* Insert into [10, 12]: [10, 12, 17]. (3 keys, valid)

Final B-tree:
```
        [6, 20]
       /   |    \
    [5,7] [10,12,17] [30]
```
</details>

**Deletion.** Deletion from a B-tree is more complex. The key cases are:

1. **Key in a leaf with excess keys** ($> t - 1$): simply remove.
2. **Key in a leaf with minimum keys** ($t - 1$): try to borrow from an immediate sibling (if the sibling has $> t - 1$ keys, rotate through the parent). If no sibling can lend, merge with a sibling (this reduces the parent's key count by 1, which may cascade upward).
3. **Key in an internal node**: replace with the predecessor (or successor), then delete the predecessor from its leaf position (which reduces to cases 1 or 2).

**Theorem 1.5.** Deletion from a B-tree takes $O(t \log_t n)$ time in the worst case.

<details>
<summary>Worked Example: B-Tree Deletion ($t = 2$)</summary>

Starting from the B-tree:
```
        [6, 20]
       /   |    \
    [5,7] [10,12,17] [30]
```

Delete key 12. Key 12 is in an internal node. Find predecessor: 10 (in the same node, left of 12). Replace 12 with 10, then delete 10 from its position.

Wait -- actually in this B-tree, 12 is in an internal node [10, 12, 17] which is also a leaf (it has no children). So case 1 applies: [10, 12, 17] has 3 keys > $t - 1 = 1$, so simply remove 12.

```
        [6, 20]
       /   |    \
    [5,7] [10,17] [30]
```

Now delete key 20. Key 20 is in the root [6, 20]. Replace with successor: 30 (from [30]). Delete 30 from its leaf: [30] has 1 key = $t - 1$, so we need to handle carefully.

Actually, we replace 20 with 30, and the leaf [30] becomes []. Since [30] is now empty and its sibling [10, 17] has 2 keys > $t - 1$, we can borrow. But [10, 17] is not an immediate sibling of [30] in terms of being a child of the same parent.

Let me reconsider. The parent of [30] is the root [6, 20]. [30]'s siblings are [5, 7] and [10, 17]. The right sibling does not exist; the left sibling is [10, 17].

Borrow from [10, 17]: move 17 up to replace 20 in the root, move 20 down to [30].

```
        [6, 17]
       /   |    \
    [5,7] [10] [20, 30]
```

Valid B-tree: all nodes have 1--3 keys, all leaves at the same depth.
</details>

#### 1.2.3 B+ Trees

A **B+ tree** is a variant of the B-tree where:

1. All data records (key-value pairs) are stored in leaf nodes only.
2. Internal nodes store only keys for routing.
3. Leaf nodes are linked together in a linked list (in sorted order).

**Advantages over B-trees:**

- Range queries are efficient: find the start of the range, then follow leaf pointers.
- Internal nodes have higher fan-out (they store only keys, not values), reducing tree height.
- All leaves are at the same depth, ensuring uniform access time.

**Theorem 1.6.** A B+ tree of order $d$ (maximum $d$ keys per internal node) with $n$ records has height $h \leq \lceil \log_d(n) \rceil + 1$.

#### 1.2.4 B+ Tree vs B-Tree Comparison

| Property | B-Tree | B+ Tree |
|----------|--------|---------|
| Data storage | All nodes | Leaf nodes only |
| Internal node content | Keys + data | Keys only |
| Leaf linking | No | Yes (linked list) |
| Range query | Multiple tree traversals | Single traversal + leaf scan |
| Fan-out | Lower | Higher |
| Height | Higher | Lower |
| Use case | General-purpose | Databases, file systems |

:::caution Common Pitfall
Students often confuse the minimum degree $t$ of a B-tree with its order. A B-tree of order $m$ has maximum $m$ children per internal node, which means $t = \lceil m/2 \rceil$. A B-tree of minimum degree $t$ has maximum $2t - 1$ keys per node. Always verify which convention the question or textbook uses.
:::

### 1.3 Tries and Prefix Trees

A **trie** (from "retrieval") is a tree data structure for storing strings. Each node represents a prefix, and edges are labelled with characters.

**Definition.** A trie for a set of strings over alphabet $\Sigma$ is a rooted tree where:

1. Each edge is labelled with a character from $\Sigma$.
2. Each node represents the string formed by the concatenation of edge labels from the root to that node.
3. A node is marked as a "terminal" node if the string it represents is in the stored set.

**Operations:**

| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| Insert | $O(L)$ | $L$ = length of string |
| Search | $O(L)$ | Exact match |
| Prefix search | $O(L + k)$ | $k$ = number of matches |
| Delete | $O(L)$ | May need to prune empty nodes |

**Space.** A trie storing $n$ strings of total length $N$ uses $O(N)$ nodes. Each node has up to $|\Sigma|$ children pointers.

**Theorem 1.7.** A trie storing $n$ distinct strings over alphabet $\Sigma$ has at most $n \cdot L_{\max}$ nodes, where $L_{\max}$ is the maximum string length.

#### 1.3.1 Compressed Tries (Radix Trees)

A **compressed trie** (or radix tree or Patricia trie) eliminates chains of single-child nodes by compressing the edge labels. Each edge stores a substring rather than a single character.

**Space savings.** If the strings share long common prefixes, compression significantly reduces the number of nodes.

<details>
<summary>Worked Example: Trie Construction</summary>

Insert the strings: "apple", "app", "application", "apt", "bat", "bar".

Standard trie (only showing non-null paths):
```
(root)
├── a
│   ├── p
│   │   ├── p [terminal: "app"]
│   │   │   ├── l
│   │   │   │   └── e [terminal: "apple"]
│   │   │   └── l
│   │   │       └── i
│   │   │           └── c
│   │   │               └── a
│   │   │                   └── t
│   │   │                       └── i
│   │   │                           └── o
│   │   │                               └── n [terminal: "application"]
│   │   └── t [terminal: "apt"]
│   └── ...
├── b
│   ├── a
│   │   ├── t [terminal: "bat"]
│   │   └── r [terminal: "bar"]
│   └── ...
```

Compressed trie:
```
(root)
├── "app" [terminal]
│   ├── "le" [terminal: "apple"]
│   └── "lication" [terminal: "application"]
├── "apt" [terminal]
├── "bat" [terminal]
└── "bar" [terminal]
```

The compressed trie has only 7 nodes instead of 21+ nodes in the standard trie.
</details>

#### 1.3.2 Ternary Search Trees

A **ternary search tree (TST)** is a hybrid between a trie and a BST. Each node stores a single character and has three children: left (smaller character), middle (equal character, continue), and right (larger character).

**Properties:**

- Space: $O(N)$ where $N$ is the total length of all strings.
- Search: $O(L + \log |\Sigma|)$ per string (BST search at each character position).
- More space-efficient than a standard trie for sparse datasets.

### 1.4 Splay Trees

A **splay tree** is a self-adjusting BST with no explicit balance information. After every access (search, insert, or delete), the accessed node is moved to the root using a sequence of rotations called **splaying**.

**Splay operations:**

1. **Zig** (node is child of root): single rotation.
2. **Zig-zig** (node and parent are both left or both right children): rotate parent first, then node.
3. **Zig-zag** (node is left child of right child or vice versa): rotate node, then rotate node again.

**Theorem 1.8 (Static Optimality).** The total time for a sequence of accesses in a splay tree is $O\left(\sum_{i} \left(1 + \log \frac{W}{w_i}\right)\right)$ where $W = \sum_i w_i$ is the total access count and $w_i$ is the number of accesses of the $i$-th element.

This means splay trees are asymptotically as fast as a static optimal binary search tree for any access sequence.

**Theorem 1.9 (Static Finger).** The total access time is $O\left(n \log n + n \log \min_{j} |\mathrm{key{}_i - \mathrm{key{}_j|\right)$ where $j$ is a fixed "finger" position.

**Theorem 1.10 (Working Set).** The access time for element $i$ is $O(\log(t_i))$ where $t_i$ is the number of distinct elements accessed since the last access to element $i$.

<details>
<summary>Worked Example: Splay Tree Operations</summary>

Build a splay tree by inserting 1, 2, 3, 4, 5 in order, then access 1.

*Insert 1:* Root = 1.

*Insert 2:* Insert 2 as right child of 1. Splay 2: zig at 1.

```
  2
 /
1
```

*Insert 3:* Insert 3 as right child of 2. Splay 3: zig-zig (3 is right child of 2, 2 is right child of root).

First rotate 2:
```
    2
   /
  1
```
becomes
```
  2
   \
    3
```
Then rotate 2 again (now parent of root... wait, let me redo).

Initial:
```
  2
 / \
1   3
```

Splay 3: zig (3 is right child of root 2).
Rotate 2 left:
```
  3
 /
2
```

Wait, this should be:
```
  3
 /
2
 \
  1
```

Hmm, let me be more careful.

Starting state after inserting 1 and splaying 2:
```
  2
 /
1
```

Insert 3: 3 > 2, so insert as right child.
```
  2
 / \
1   3
```

Splay 3: parent of 3 is 2, and 2 is the root. This is a **zig** case (node is child of root). Rotate 2 left around 3.

Result:
```
    3
   /
  2
 /
1
```

*Insert 4:* Insert as right child of 3. Splay 4: zig (4 is right child of root 3).

```
      4
     /
    3
   /
  2
 /
1
```

*Insert 5:* Insert as right child of 4. Splay 5: zig.

```
        5
       /
      4
     /
    3
   /
  2
 /
1
```

*Access 1:* Search for 1 (traverse left 4 times). Splay 1: this is a zig-zig-zig-zig (all left children). Apply zig-zig repeatedly.

Zig-zig on 1-2-3: rotate 2 left, then rotate 1 left.
```
  2
 / \
1   3
     \
      4
       \
        5
```

Wait, zig-zig means: node and parent are both left children. Rotate parent first, then rotate node.

Step 1: 1 is left of 2, 2 is left of 3. Rotate 2 (zig on 2): 3 becomes parent of 2, 2 goes right.

```
      3
     /
    2
   / \
  1   4
       \
        5
```

Step 2: Now 2 is left of 3, 3 is left of 4. Rotate 3 (zig on 3): 4 becomes parent of 3.

```
        4
       /
      3
     /
    2
   / \
  1   5
```

Step 3: 2 is left of 3, 3 is left of 4. Rotate 3.

```
      4
     /
    3
   /
  2
 / \
1   5
```

Hmm, I need to be more systematic. Let me use the standard zig-zig rule.

Zig-zig (left-left): let the chain be g -> p -> x (all left children). First rotate p to the right of g (making p the new root of this subtree, with g as right child). Then rotate x to the right of p.

Starting:
```
        4
       /
      3
     /
    2
   /
  1
   \
    5 (was under 4, now let's ignore 5 for simplicity)
```

Actually, 5 is the right child of 4. Let me include it properly.

```
        4
       / \
      3   5
     /
    2
   /
  1
```

Zig-zig on chain 4-3-2: rotate 3 (right of 4), then rotate 2 (right of 3).

Rotate 3 right: 3 becomes root, 4 goes to 3's right. 4's left was 3, so 4's left becomes 3's right (which was 2). So:
```
      3
     / \
    2   4
   /     \
  1       5
```

Now zig-zig on chain 3-2-1: rotate 2 (right of 3), then rotate 1 (right of 2).

Rotate 2 right: 2 becomes root, 3 goes to 2's right. 3's left becomes 2's right (which is NIL... wait, 2's right subtree was the subtree between 2 and 3, which is empty). Actually, 2's right child in the tree above is NIL (2 only has left child 1). So after rotating 2 right of 3:

```
    2
   / \
  1   3
       \
        4
       / \
          5
```

Wait, 3's right was 4, and 4 has left NIL and right 5. So:
```
    2
   / \
  1   3
       \
        4
         \
          5
```

Now 1 is left of 2, and 2 is the root. This is a **zig** case. Rotate 1 right of 2:

```
  1
   \
    2
     \
      3
       \
        4
         \
          5
```

The tree is now right-skewed again! This is because zig-zig followed by zig on a completely skewed tree simply reverses the direction of skew. The amortised analysis guarantees good performance over a sequence, but individual operations can be $O(n)$.
</details>

## 2. Advanced Priority Queues

### 2.1 Binomial Heaps

A **binomial heap** is a collection of binomial trees satisfying the heap property. It supports merge in $O(\log n)$ and insert, extract-min, and decrease-key in $O(\log n)$.

**Binomial tree $B_k$.** Defined recursively: $B_0$ is a single node. $B_k$ is formed by linking two $B_{k-1}$ trees, making one the leftmost child of the other's root.

**Properties of $B_k$:**

| Property | Value |
|----------|-------|
| Number of nodes | $2^k$ |
| Height | $k$ |
| Number of children of root | $k$ |
| Minimum number of nodes at depth $d$ | $\binom{k}{d}$ |

**Theorem 2.1.** A binomial heap with $n$ nodes contains at most $\lfloor \log_2 n \rfloor + 1$ binomial trees.

*Proof.* The binary representation of $n$ determines which binomial trees are present. If $n = \sum_{i} 2^{b_i}$ (binary decomposition), then the heap contains exactly the trees $B_{b_1}, B_{b_2}, \ldots$. The number of terms is at most $\lfloor \log_2 n \rfloor + 1$. $\blacksquare$

**Operations:**

- **Merge:** Analogous to binary addition. Combine trees of the same degree by linking. $O(\log n)$.
- **Insert:** Create a single-node heap and merge. $O(\log n)$.
- **Extract-min:** Remove the root with minimum key, merge its children into a new heap, merge with the remaining heap. $O(\log n)$.
- **Decrease-key:** Bubble the decreased key up to the root. $O(\log n)$.

<details>
<summary>Worked Example: Binomial Heap Operations</summary>

Create two binomial heaps and merge them.

Heap $H_1$: insert 3, 7, 1.
- Insert 3: $H_1 = \{B_0: 3\}$
- Insert 7: $H_1 = \{B_0: 3\} \cup \{B_0: 7\}$. Link: $H_1 = \{B_1: \text{root {} 3, \text{child {} 7\}$
- Insert 1: $H_1 = \{B_1: (3,7)\} \cup \{B_0: 1\}$. No linking (different degrees). $H_1 = \{B_0: 1, B_1: (3,7)\}$

Heap $H_2$: insert 5, 2.
- Insert 5: $H_2 = \{B_0: 5\}$
- Insert 2: $H_2 = \{B_0: 5\} \cup \{B_0: 2\}$. Link: $H_2 = \{B_1: \text{root {} 2, \text{child {} 5\}$

Merge $H_1$ and $H_2$: $\{B_0: 1, B_1: (3,7)\} \cup \{B_1: (2,5)\}$.

Both have $B_1$ trees. Link them (root 2 < root 3, so 3 becomes child of 2):
$B_2$: root 2, children: 3 (with child 7), 5.

Final merged heap: $\{B_0: 1, B_2: \text{root {} 2, \text{children {} [3, 5], \text{3's child {} 7\}$

Minimum element: 1 (root of $B_0$).

Extract-min: remove $B_0: 1$. Remaining: $\{B_2: 2, \ldots\}$. Minimum is now 2.
</details>

### 2.2 Fibonacci Heaps

A **Fibonacci heap** is a collection of min-heap-ordered trees supporting:

| Operation | Amortised Cost | Note |
|-----------|---------------|------|
| Insert | $O(1)$ | Add tree to root list |
| Find-min | $O(1)$ | Pointer to min root |
| Extract-min | $O(\log n)$ | Consolidate trees |
| Decrease-key | $O(1)$ | Cut and cascade |
| Delete | $O(\log n)$ | Decrease-key to $-\infty$, then extract-min |
| Union | $O(1)$ | Concatenate root lists |

**Key difference from binomial heaps:** Fibonacci heaps allow trees to have any structure (not just binomial trees). Trees are only restructured during extract-min (consolidation). Decrease-key may cut a subtree from its parent and add it to the root list ("cascading cut").

**Lazy merging.** Two heaps are merged by concatenating their root lists in $O(1)$ time.

**Consolidation.** During extract-min, all roots are combined by degree using an array. Trees of the same degree are linked.

**Theorem 2.2.** The amortised cost of extract-min is $O(D(n))$ where $D(n)$ is the maximum degree of any node in the Fibonacci heap.

**Theorem 2.3.** $D(n) = O(\log_\phi n)$ where $\phi = (1 + \sqrt{5})/2$ is the golden ratio.

*Proof (outline).* Define the potential $\Phi = t(H) + 2m(H)$ where $t(H)$ is the number of trees and $m(H)$ is the number of marked nodes. Show that each operation's amortised cost is bounded. For decrease-key, the actual cost is $O(c)$ where $c$ is the number of cascading cuts. The change in potential is at most $c + 2 - 2m'(H) \cdot (\text{terms cancel{})$, giving $O(1)$ amortised. $\blacksquare$

:::caution Common Pitfall
Fibonacci heaps have excellent amortised bounds but poor constant factors in practice due to the overhead of maintaining the root list, marking nodes, and consolidation. For this reason, binary heaps (or pairing heaps) are often preferred in practice despite worse theoretical amortised bounds for decrease-key.
:::

### 2.3 Pairing Heaps

A **pairing heap** is a simplified alternative to Fibonacci heaps. It is a single min-heap-ordered multi-way tree.

**Operations:**

- **Find-min:** $O(1)$ (return root).
- **Insert:** $O(1)$ (add as leftmost child of root).
- **Merge:** $O(1)$ (make the larger root a child of the smaller root).
- **Delete-min:** Two-pass merging of all children: first pass pairs adjacent children, second pass merges the resulting trees left to right.
- **Decrease-key:** $O(1)$ (cut the node and merge with root).

**Theorem 2.4.** Insert, find-min, merge, and decrease-key take $O(1)$ amortised time. Delete-min takes $O(\log n)$ amortised time.

*Proof sketch.* The potential function is $\Phi = \log n$ per subtree (where $n$ is the subtree size). The key insight is that the two-pass merge of delete-min reduces the potential by at least $\log n$, absorbing the $O(n)$ work of merging. $\blacksquare$

**Note.** Whether pairing heaps achieve $O(\log n)$ amortised delete-min was an open problem for many years. It was resolved by Iacono and Ozturk (2018) who proved $O(\log n)$ for a variant called the "original pairing heap" and gave a $\Omega(\log \log n)$ lower bound for a simpler variant.

## 3. Advanced Graph Representations

### 3.1 Incidence Matrix

The **incidence matrix** $M$ of an undirected graph $G = (V, E)$ with $n$ vertices and $m$ edges is an $n \times m$ matrix where:

$$M_{v,e} = \begin{cases} 1 & \text{if vertex {} v \text{ is incident to edge {} e \\ 0 & \text{otherwise{} \end{cases}$$

For directed graphs, $M_{v,e} = 1$ if $v$ is the tail of $e$, $M_{v,e} = -1$ if $v$ is the head of $e$, and $0$ otherwise.

**Properties:**

- Space: $O(nm)$.
- The rank of $M$ over $\mathbb{'\{'}R{'\}'}$ is $n - c$ where $c$ is the number of connected components.
- The number of spanning trees of $G$ equals any cofactor of $MM^T$ (Kirchhoff's matrix tree theorem).

### 3.2 Implicit Graphs

Many graphs are not stored explicitly but defined by a rule or function. Examples:

- **State space graphs:** Each vertex is a configuration; edges are valid transitions. Example: the 15-puzzle has $16!/2 \approx 10^{13}$ states.
- **Geometric graphs:** Vertices are points in $\mathbb{'\{'}R{'\}'}^d$; edges connect nearby points. Example: Delaunay triangulation.
- **Social networks:** Vertices are users; edges are friendships.

**Implicit graph traversal** requires a successor function that generates neighbours on-the-fly, rather than storing them.

### 3.3 Compressed Graph Representations

For massive graphs that do not fit in memory:

- **CSR (Compressed Sparse Row):** Two arrays: `offsets` (size $|V|+1$) and `neighbours` (size $2|E|$). `offsets[i]` to `offsets[i+1]-1` gives the range of neighbours for vertex $i$. Space: $O(V + E)$, cache-friendly.
- **WebGraph framework:** Compresses web graphs using gap encoding, reference chains, and interval encoding. Achieves 2--3 bits per edge for typical web graphs.

<details>
<summary>Worked Example: CSR Construction</summary>

Graph: vertices 0, 1, 2, 3 with edges: 0-1, 0-2, 1-2, 2-0, 2-3, 3-3.

Neighbour lists (sorted):
- Vertex 0: [1, 2]
- Vertex 1: [2]
- Vertex 2: [0, 3]
- Vertex 3: [3]

Offsets array: [0, 2, 3, 5, 6]
Neighbours array: [1, 2, 2, 0, 3, 3]

To find neighbours of vertex 2: `neighbours[offsets[2]..offsets[3]-1] = neighbours[3..4] = [0, 3]`.

Total space: $(|V|+1) + 2|E| = 5 + 12 = 17$ integers.
</details>

## 4. Disjoint Set Union -- Advanced Analysis

### 4.1 The Inverse Ackermann Function

The **inverse Ackermann function** $\alpha(n)$ is defined in terms of a rapidly growing function $A_k(j)$:

$$A_k(j) = \begin{cases} 2j & \text{if {} k = 0 \\ 0 & \text{if {} j = 0 \text{ and {} k \geq 1 \\ A_{k-1}(A_k(j-1)) & \text{if {} j \geq 1 \text{ and {} k \geq 1 \end{cases}$$

$$\alpha(n) = \min\{k : A_k(1) \geq n\}$$

**Key values:** $\alpha(1) = 0$, $\alpha(2) = 1$, $\alpha(4) = 2$, $\alpha(16) = 3$, $\alpha(2^{65536}) = 4$.

For all practical purposes, $\alpha(n) \leq 4$.

### 4.2 Detailed Analysis of Union-Find

**Theorem 4.1.** A sequence of $m$ MakeSet, Union, and Find operations on $n$ elements, using union by rank with path compression, takes $O(m \alpha(n))$ time.

*Proof (high-level outline).*

Define the "level" of a node based on its rank. The key idea is to partition the nodes into groups and bound the total charges.

Let $A_k(j)$ be as defined above. Node $x$ has **level** $\ell$ if $\text{rank{}(x) \in [A_\ell(\lfloor \log_2 n \rfloor), A_{\ell+1}(\lfloor \log_2 n \rfloor))$.

For a Find operation along a path $x_1, x_2, \ldots, x_k$, path compression makes all nodes point to the root. We charge the cost of the Find as follows:

- For each node $x_i$ that is not the root, if $x_i$'s parent changes, charge $O(1)$ to $x_i$.
- We need to show each node is charged $O(\alpha(n))$ times total.

The proof proceeds by showing that a node at level $\ell$ can be charged at most a constant number of times before it moves to a higher level or its parent's level is too high for further charges. The total charges sum to $O(n \alpha(n) + m)$. $\blacksquare$

### 4.3 Union-Find with Partial Persistence

A **persistent** data structure preserves all previous versions. Partial persistence allows queries on any previous version but modifications only on the latest version.

**Persistent Union-Find** (Bender et al., 2002): Supports $m$ operations on $n$ elements with $O(\log \log n)$ amortised time per operation and $O(m \alpha(n))$ total space.

## 5. Interval Trees and Segment Trees

### 5.1 Interval Trees

An **interval tree** stores a set of intervals $[l_i, r_i]$ and supports:

- Insert an interval: $O(\log n)$.
- Delete an interval: $O(\log n)$.
- Query: find all intervals overlapping a given point $q$ (or interval). $O(\log n + k)$ where $k$ is the number of reported intervals.

**Structure.** An augmented BST where:
- In-order traversal of keys gives the intervals sorted by their left endpoint (or by midpoint).
- Each node stores a key $x_{\mathrm{mid{}}$ (the median endpoint) and a max-endpoint for the subtree.

**Query algorithm:** Starting at the root, compare $q$ with $x_{\mathrm{mid{}}$:
1. If $q < x_{\mathrm{mid{}}$: report all intervals in the left subtree that overlap $q$ (check max-endpoint), then recurse into the left subtree. Also check if any interval stored at the current node overlaps $q$.
2. If $q \geq x_{\mathrm{mid{}}$: similar for the right subtree.

**Theorem 5.1.** Query in an interval tree takes $O(\log n + k)$ time where $k$ is the number of reported intervals.

### 5.2 Segment Trees

A **segment tree** stores an array $A[1..n]$ and supports:

- Point update: set $A[i] = v$. $O(\log n)$.
- Range query: compute $\mathrm{combine{}(A[l], A[l+1], \ldots, A[r])$ for any associative operation (sum, min, max, gcd). $O(\log n)$.

**Structure.** A binary tree where:
- The root represents the range $[1, n]$.
- Each internal node represents a sub-range, split in half between its children.
- Leaves represent individual elements.

**Space.** $O(n)$ (at most $4n$ nodes in the array representation).

**Theorem 5.2.** A segment tree on $n$ elements uses $O(n)$ space and supports point update and range query in $O(\log n)$ time each.

*Proof.* The segment tree is a complete binary tree of height $\lceil \log_2 n \rceil$. The number of nodes is at most $2 \cdot 2^{\lceil \log_2 n \rceil + 1} \leq 4n$. Each update or query visits at most $2 \log_2 n$ nodes (one per level, on each side). $\blacksquare$

<details>
<summary>Worked Example: Segment Tree Range Sum</summary>

Array $A = [3, 1, 4, 1, 5, 9, 2, 6]$, $n = 8$.

Build the segment tree for range sum queries:

```
              [0,7]: sum=31
             /                \
       [0,3]: sum=9       [4,7]: sum=22
       /         \         /         \
  [0,1]: sum=4  [2,3]:5  [4,5]:14  [6,7]:8
   /      \     /    \   /    \     /    \
[0]:3   [1]:1 [2]:4 [3]:1 [4]:5 [5]:9 [6]:2 [7]:6
```

Query: sum of $A[2..5]$.

1. Start at root [0,7]. Need [2,5]. This is contained in [0,7] but not equal. Split: go left [0,3] and right [4,7].
2. [0,3] vs [2,5]: overlap is [2,3]. Split [0,3]: go right to [2,3].
3. [2,3] vs [2,5]: [2,3] is contained in [2,5]. Add sum = 5.
4. [4,7] vs [2,5]: overlap is [4,5]. Split [4,7]: go left to [4,5].
5. [4,5] vs [2,5]: [4,5] is contained in [2,5]. Add sum = 14.

Total: $5 + 14 = 19$. Verify: $A[2] + A[3] + A[4] + A[5] = 4 + 1 + 5 + 9 = 19$. Correct.

Update: set $A[3] = 10$.

1. Start at root [0,7]. Go left to [0,3], then right to [2,3], then right to [3].
2. Set leaf [3] = 10.
3. Update [2,3]: $4 + 10 = 14$.
4. Update [0,3]: $4 + 14 = 18$.
5. Update [0,7]: $18 + 22 = 40$.

All updates take $O(\log n) = O(3)$ steps.
</details>

### 5.3 Fenwick Trees (Binary Indexed Trees)

A **Fenwick tree** (BIT) is a space-efficient alternative to the segment tree for prefix sum queries and point updates.

**Structure.** An array `BIT[1..n]` where `BIT[i]` stores the sum of a specific range ending at index $i$. The range is determined by the lowest set bit of $i$: if $\mathrm{lsb{}(i) = 2^k$, then `BIT[i]` stores the sum of $A[i - 2^k + 1..i]$.

**Operations:**

- **Prefix sum** $\sum_{j=1}^{i} A[j]$: Traverse `BIT` by removing lowest set bits. $O(\log n)$.
- **Point update** $A[i] += \delta$: Traverse `BIT` by adding lowest set bits. $O(\log n)$.
- **Range sum** $A[l..r]$: $\mathrm{prefix{}(r) - \mathrm{prefix{}(l-1)$. $O(\log n)$.

**Advantages over segment trees:** Simpler to implement, lower constant factor, $O(n)$ space (exactly $n+1$).

**Limitations:** Only supports prefix queries (not arbitrary range combinations unless the operation has an inverse, like sum or XOR).

**Theorem 5.3.** A Fenwick tree on $n$ elements supports prefix query and point update in $O(\log n)$ time and uses $O(n)$ space.

<details>
<summary>Worked Example: Fenwick Tree Construction</summary>

Array $A = [3, 1, 4, 1, 5, 9, 2, 6]$, $n = 8$.

Binary representations: 1=001, 2=010, 3=011, 4=100, 5=101, 6=110, 7=111, 8=1000.

`BIT[i]` stores sum of $A[i - 2^k + 1..i]$ where $k = \mathrm{lsb{}(i)$.

- BIT[1] = $A[1]$ = 3 (lsb=1, range [1,1])
- BIT[2] = $A[1] + A[2]$ = 4 (lsb=2, range [1,2])
- BIT[3] = $A[3]$ = 4 (lsb=1, range [3,3])
- BIT[4] = $A[1] + A[2] + A[3] + A[4]$ = 9 (lsb=4, range [1,4])
- BIT[5] = $A[5]$ = 5 (lsb=1, range [5,5])
- BIT[6] = $A[5] + A[6]$ = 14 (lsb=2, range [5,6])
- BIT[7] = $A[7]$ = 2 (lsb=1, range [7,7])
- BIT[8] = $A[1] + \cdots + A[8]$ = 31 (lsb=8, range [1,8])

Query prefix sum up to 6: BIT[6] + BIT[4] = 14 + 9 = 23.
Verify: $3 + 1 + 4 + 1 + 5 + 9 = 23$. Correct.

Query prefix sum up to 5: BIT[5] + BIT[4] = 5 + 9 = 14.
Verify: $3 + 1 + 4 + 1 + 5 = 14$. Correct.

Range sum $A[3..6]$: prefix(6) - prefix(2) = 23 - 4 = 19.
Verify: $4 + 1 + 5 + 9 = 19$. Correct.

Update $A[3] += 5$: Update BIT[3] += 5 (BIT[3] = 9). Then BIT[4] += 5 (BIT[4] = 14). Then BIT[8] += 5 (BIT[8] = 36).
</details>

## 6. String Data Structures

### 6.1 Suffix Arrays

A **suffix array** $\mathrm{SA{}$ of a string $S$ of length $n$ is a permutation of $\{0, 1, \ldots, n-1\}$ such that $S[\mathrm{SA{}[0]..] < S[\mathrm{SA{}[1]..] < \cdots < S[\mathrm{SA{}[n-1]..]$ (lexicographic order of suffixes).

**Construction:** The most efficient algorithm (SA-IS) constructs the suffix array in $O(n)$ time. A simpler approach uses radix sort on prefixes of length $1, 2, 4, 8, \ldots$ in $O(n \log^2 n)$ time.

**Theorem 6.1.** The suffix array of a string of length $n$ can be constructed in $O(n)$ time (SA-IS algorithm) or $O(n \log n)$ time (using the doubling algorithm with radix sort).

### 6.2 Suffix Trees

A **suffix tree** for a string $S$ of length $n$ is a compressed trie of all $n$ suffixes of $S$ (plus a unique terminator $\$$).

**Theorem 6.2 (Ukkonen).** A suffix tree can be constructed in $O(n)$ time online.

**Theorem 6.3.** A suffix tree for a string of length $n$ has at most $2n$ nodes and at most $2n - 1$ edges.

**Applications:**

| Problem | Suffix tree solution | Time |
|---------|---------------------|------|
| Exact pattern matching | Traverse from root | $O(m + k)$ |
| Longest repeated substring | Find deepest internal node | $O(n)$ |
| Longest common substring | Generalised suffix tree | $O(n + m)$ |
| Longest palindrome | Suffix tree of $S$ + reverse($S$) | $O(n)$ |

### 6.3 LCP Arrays

The **LCP (Longest Common Prefix) array** stores $\mathrm{LCP{}[i] =$ the length of the longest common prefix of suffixes $\mathrm{SA{}[i]$ and $\mathrm{SA{}[i-1]$.

**Theorem 6.4 (Kasai).** The LCP array can be computed from the suffix array in $O(n)$ time.

**Kasai's algorithm.** Uses the inverse suffix array $\mathrm{SA{}^{-1}[\mathrm{SA{}[i]] = i$ and processes suffixes in text order. When computing $\mathrm{LCP{}[\mathrm{SA{}^{-1}[j]]$, the result is at least $\mathrm{LCP{}[\mathrm{SA{}^{-1}[j-1]] - 1$.

<details>
<summary>Worked Example: Suffix Array and LCP Array</summary>

String $S = \text{banana\${}$, $n = 7$.

All suffixes:
0: banana$
1: anana$
2: nana$
3: ana$
4: na$
5: a$
6: $

Sorted suffixes:
6: $
5: a$
3: ana$
1: anana$
0: banana$
4: na$
2: nana$

Suffix array: $\mathrm{SA{} = [6, 5, 3, 1, 0, 4, 2]$

LCP array (LCP with previous suffix):
$\mathrm{LCP{}[0] = 0$ (undefined for first)
$\mathrm{LCP{}[1] = 0$ (LCP("$", "a$") = 0)
$\mathrm{LCP{}[2] = 1$ (LCP("a$", "ana$") = 1)
$\mathrm{LCP{}[3] = 3$ (LCP("ana$", "anana$") = 3)
$\mathrm{LCP{}[4] = 0$ (LCP("anana$", "banana$") = 0)
$\mathrm{LCP{}[5] = 0$ (LCP("banana$", "na$") = 0)
$\mathrm{LCP{}[6] = 2$ (LCP("na$", "nana$") = 2)

LCP array: $[0, 0, 1, 3, 0, 0, 2]$

Longest repeated substring: The maximum LCP value is 3, between "ana$" and "anana$", giving "ana".
</details>

## 7. Amortised Analysis -- Detailed Framework

### 7.1 The Three Methods Compared

| Method | Key idea | When to use |
|--------|----------|-------------|
| Aggregate | Total cost / number of operations | Simple cases where total cost is easy to compute |
| Accounting | Assign amortised cost, accumulate credit | When you can identify a "credit" scheme |
| Potential | Define potential function $\Phi$ | Most general; works when credit is hard to localise |

**Equivalence.** All three methods give the same amortised bounds when applied correctly. The accounting method is a special case of the potential method where $\Phi$ is the total credit.

### 7.2 Choosing a Potential Function

A good potential function satisfies:

1. $\Phi(D_0) = 0$ (initial potential is 0).
2. $\Phi(D_i) \geq 0$ for all $i$ (potential is never negative).
3. $\Phi$ increases before expensive operations and decreases during them.

**Common potential functions:**

| Data structure | Potential function $\Phi$ |
|---------------|--------------------------|
| Dynamic array | $\Phi = 2 \cdot \mathrm{num{} - \mathrm{size{}$ (credit per element) |
| Binary counter | $\Phi =$ number of 1-bits |
| Stack | $\Phi =$ number of elements |
| Splay tree | $\Phi = \sum_x \log(\mathrm{size{}(x))$ |
| Union-Find | $\Phi$ based on node levels |

### 7.3 Limitations of Amortised Analysis

:::caution Common Pitfall
Amortised bounds do **not** guarantee worst-case performance for individual operations. In real-time systems, an $O(n)$ operation (even if amortised $O(1)$) may violate timing constraints. For real-time applications, use data structures with worst-case bounds (e.g., balanced BSTs instead of splay trees, or dynamic arrays with geometric resizing only when safe).
:::

**Theorem 7.1.** There exist sequences of operations where any data structure supporting dynamic array operations must pay $\Omega(\log n)$ per operation in the worst case (cell-probe model lower bound).

## 8. Balanced BST Variants

### 8.1 Treaps (Tree + Heap)

A **treap** is a BST where each node has a key (BST property) and a **priority** (min-heap or max-heap property). The priorities are assigned randomly at insertion time.

**Property:** Expected height is $O(\log n)$ (by the same argument as random BSTs).

**Rotations.** If the heap property is violated, perform rotations to restore it:

- If a node's priority is less than its parent's (min-heap treap), rotate the node up.
- This is equivalent to inserting the node and then rotating it up to its correct heap position.

**Split and merge operations:**

- **Split**$(T, k)$: Split treap $T$ into two treaps $L$ and $R$ where all keys in $L$ are $\leq k$ and all keys in $R$ are $> k$. $O(\log n)$.
- **Merge**$(L, R)$: Merge two treaps where all keys in $L$ are less than all keys in $R$. $O(\log n)$.

**Theorem 8.1.** Split and merge in a treap take $O(\log n)$ expected time.

*Proof.* Split traverses a root-to-leaf path, performing rotations. The expected depth of any node is $O(\log n)$, so the expected path length is $O(\log n)$. Merge follows a single path from the root of one treap downward. $\blacksquare$

<details>
<summary>Worked Example: Treap Insertion</summary>

Insert keys 5, 3, 7, 1, 4 with random priorities (min-heap):

Insert 5 (priority 0.7): Root = (5, 0.7).
```
(5, 0.7)
```

Insert 3 (priority 0.2): 3 goes left of 5. Priority 0.2 < 0.7, so rotate 3 up.
```
  (3, 0.2)
    \
  (5, 0.7)
```

Insert 7 (priority 0.9): 7 goes right of 5. Priority 0.9 > 0.7, no rotation needed.
```
  (3, 0.2)
    \
  (5, 0.7)
      \
    (7, 0.9)
```

Insert 1 (priority 0.5): 1 goes left of 3. Priority 0.5 > 0.2, no rotation needed.
```
    (3, 0.2)
   /       \
(1, 0.5) (5, 0.7)
              \
            (7, 0.9)
```

Insert 4 (priority 0.1): 4 goes left of 5 (since 4 < 5). Priority 0.1 < 0.7, rotate 4 up past 5.
```
    (3, 0.2)
   /       \
(1, 0.5) (4, 0.1)
            /   \
          (5, 0.7)
              \
            (7, 0.9)
```

Now check: 4's priority (0.1) < parent 3's priority (0.2). Rotate 4 up past 3.
```
        (4, 0.1)
       /       \
  (3, 0.2)   (5, 0.7)
   /               \
(1, 0.5)         (7, 0.9)
```

Verify: BST property holds (1 < 3 < 4 < 5 < 7). Min-heap property holds (0.1 < 0.2, 0.1 < 0.7; 0.2 > 0.5... wait, 0.5 > 0.2, so the min-heap property is violated between 3 and 1).

Hmm, priority 0.5 > 0.2 (parent). This violates the min-heap. So 1 should rotate up past 3.

```
        (4, 0.1)
       /       \
  (1, 0.5)   (5, 0.7)
      \           \
   (3, 0.2)    (7, 0.9)
```

Now 1's priority 0.5 > 4's priority 0.1. No violation (min-heap: parent has lower priority). But BST: 3 > 1 and is right child, OK. 5 > 4 and is right child, OK.

This is a valid treap.
</details>

### 8.2 Weight-Balanced Trees

A **weight-balanced tree** (also known as BB[$\alpha$] tree or Adelson-Velsky-Landis tree) maintains the balance condition:

$$\frac{1}{2 - \alpha} \leq \frac{|T_L|}{|T|} \leq \frac{1}{2}$$

for some fixed $\alpha \in (1/4, 1 - \sqrt{2}/2)$, where $|T_L|$ is the size of the left subtree and $|T|$ is the total size.

**Theorem 8.2.** A weight-balanced tree with $n$ nodes has height $O(\log n)$.

*Proof.* At each level, the subtree size decreases by a factor of at least $\alpha$. After $h$ levels, the minimum size is $\alpha^h n \geq 1$, giving $h \leq \log_{1/\alpha} n = O(\log n)$. $\blacksquare$

### 8.3 scapegoat Trees

A **scapegoat tree** is a BST where no rebalancing is done during insertion (only during deletion if needed). When an insertion causes the height to exceed $\log_{3/2} n$, the algorithm finds a "scapegoat" ancestor whose subtree is unbalanced and rebuilds it.

**Height bound.** A scapegoat tree with $n$ nodes has height at most $\log_{3/2} n$ (the "scapegoat bound").

**Theorem 8.3.** Insertion into a scapegoat tree takes $O(\log n)$ amortised time.

*Proof.* The key insight is that the number of insertions between rebuilds is at least proportional to the size of the rebuilt subtree. Each rebuild of a subtree of size $s$ costs $O(s)$. Since each element is charged $O(1)$ per rebuild, and each element participates in at most $O(\log n)$ rebuilds, the amortised cost is $O(\log n)$. $\blacksquare$

## 9. Graph Decomposition Structures

### 9.1 Heavy-Light Decomposition

**Heavy-light decomposition (HLD)** partitions a tree into paths, enabling efficient path queries (sum, max, min) and updates on trees.

**Definitions.** For each node $u$, the child $v$ with the largest subtree is the **heavy child**. All other children are **light children**.

**Property.** Every root-to-leaf path has at most $O(\log n)$ light edges.

*Proof.* When traversing a light edge from $u$ to its parent $p$, the subtree size at least doubles: $|\text{subtree{}(p)| \geq 2 \cdot |\text{subtree{}(u)|$. Since the tree has $n$ nodes, there can be at most $\log_2 n$ light edges on any root-to-leaf path. $\blacksquare$

**Algorithm:**

1. Root the tree and identify heavy/light children.
2. Decompose into heavy paths (maximal chains of heavy edges).
3. Each heavy path is stored in a segment tree (or Fenwick tree) for efficient queries.
4. A path query between two nodes is decomposed into $O(\log n)$ heavy path segments.

**Theorem 9.1.** HLD supports path queries and updates on a tree in $O(\log^2 n)$ time.

*Proof.* A path between two nodes is decomposed into $O(\log n)$ heavy path segments (due to $O(\log n)$ light edges). Each segment query on the segment tree takes $O(\log n)$. Total: $O(\log^2 n)$. $\blacksquare$

<details>
<summary>Worked Example: Heavy-Light Decomposition</summary>

Tree:
```
      1
     /|\
    2  3  4
   /|     |
  5  6    7
  |
  8
```

Subtree sizes: 1:8, 2:5, 3:1, 4:2, 5:2, 6:1, 7:1, 8:1.

Heavy children (largest subtree):
- Node 1: children have sizes 5, 1, 2. Heavy child: 2.
- Node 2: children have sizes 2, 1. Heavy child: 5.
- Node 4: child has size 1. Heavy child: 7.
- Nodes 3, 5, 6, 7, 8: no children (leaves).

Heavy paths:
- Path 1: 1 -- 2 -- 5 -- 8
- Path 2: 3
- Path 3: 4 -- 7
- Path 4: 6

Path query from 6 to 8:
1. LCA(6, 8) = 1.
2. From 6 to 1: 6 -- 2 (light edge). Then 2 -- 1 (light edge, since 2 is heavy child of 1, going up).
   Actually: 6 is a light child of 2. So we jump from 6 to the top of 6's heavy path (just 6), then from 2's heavy path.
   Segments: [6], then [5, 2, 1] (reversed: 1, 2, 5) then [8] (but 8 is under 5).
   
   Let me be more precise. From 6 upward:
   - 6 is in heavy path {6}. Top = 6, parent = 2. Move to 2.
   - 2 is in heavy path {1, 2, 5, 8}. Top = 1. Segment: [2, 5, 8]... wait, the segment from 2 to the top of the heavy path (1) is just [2] (the part from 2 up to 1).
   
   Actually the segment tree stores each heavy path. To go from 6 to 8:
   - 6 to LCA = 1: segments on the path from 6 to 1.
   - 8 to LCA = 1: segments on the path from 8 to 1.

This example is simplified. In practice, HLD requires careful implementation of the `decompose`, `query`, and `update` functions.
</details>

### 9.2 Centroid Decomposition

**Centroid decomposition** recursively decomposes a tree by finding the **centroid** (node whose removal leaves no subtree with more than $n/2$ nodes) and recursing on each resulting component.

**Theorem 9.2.** Every tree has a centroid.

*Proof.* Start at any node and move toward the heaviest subtree. The subtree size strictly decreases (since we always move away from the heaviest child). When we reach a node where no subtree exceeds $n/2$, that node is the centroid. $\blacksquare$

**Theorem 9.3.** Centroid decomposition has depth $O(\log n)$.

*Proof.* At each level, every component has at most $n/2$ nodes. After $k$ levels, the largest component has at most $n/2^k$ nodes. When $n/2^k < 1$, the decomposition is complete, giving depth $O(\log n)$. $\blacksquare$

**Applications:**

- Finding the shortest path between all pairs of nodes passing through each centroid.
- Distance queries on trees.
- Dynamic connectivity on trees.

## 10. Persistent and Functional Data Structures

### 10.1 Persistent Data Structures

A **persistent data structure** preserves previous versions. **Fully persistent** structures allow queries and updates on any version. **Partially persistent** structures allow queries on any version but updates only on the latest version.

### 10.2 Persistent Segment Trees

A **persistent segment tree** creates $O(\log n)$ new nodes per update (only the path from the root to the modified leaf is copied).

**Space.** After $m$ updates, the persistent segment tree has $O(n + m \log n)$ nodes.

**Theorem 10.1.** A persistent segment tree supports point update and range query on any version in $O(\log n)$ time and $O(n + m \log n)$ space after $m$ updates.

<details>
<summary>Worked Example: Persistent Segment Tree</summary>

Array: $A = [3, 1, 4, 1]$.

Version 0: Build segment tree for [3, 1, 4, 1].

```
       [0,3]: sum=9
       /          \
  [0,1]: sum=4  [2,3]: sum=5
    /     \       /     \
[0]:3  [1]:1  [2]:4  [3]:1
```

Version 1: Update $A[2] = 10$. Create new nodes on path root -> [0,1]... wait, we need [2,3] -> [2].

New path: root -> [2,3] -> [2]. Create new versions of these nodes.

```
Version 0:              Version 1:
       [0,3]:9               [0,3]:15
       /      \              /       \
  [0,1]:4  [2,3]:5    [0,1]:4   [2,3]:11
    /   \    /   \      /   \     /    \
 [0]:3 [1]:1 [2]:4 [3]:1 [0]:3 [1]:1 [2]:10 [3]:1
```

Shared nodes: [0]:3, [1]:1, [3]:1, [0,1]:4. New nodes: root, [2,3], [2]. Total new nodes per update: $O(\log n) = O(2)$ (for $n = 4$).

Query version 0, range [0,2]: $3 + 1 + 4 = 8$.
Query version 1, range [0,2]: $3 + 1 + 10 = 14$.
</details>

### 10.3 Functional Queues (Batched)

A **functional queue** supports enqueue and dequeue in $O(1)$ amortised time using two stacks (a technique due to Okasaki).

**Structure:** Two lists: `front` (for dequeue) and `rear` (for enqueue).

- **enqueue:** Add to `rear`. $O(1)$.
- **dequeue:** If `front` is empty, reverse `rear` and set `front` = reversed `rear`, clear `rear`. Then pop from `front`. $O(1)$ amortised.

**Theorem 10.2.** The batched functional queue supports enqueue and dequeue in $O(1)$ amortised time per operation.

*Proof.* Each element is pushed onto `rear` once ($O(1)$), reversed (when `front` is empty, $O(k)$ for $k$ elements), and popped from `front` once ($O(1)$). The reversal cost is amortised over the $k$ dequeue operations that follow. $\blacksquare$

## 11. Problem Set

### 8.1 Balanced Trees (Problems 1--4)

**Problem 1.** Prove that the number of rotations performed during insertion into a red-black tree is at most 2. Give a concrete sequence of insertions that achieves exactly 2 rotations.

**Problem 2.** Show the result of inserting keys 1, 2, 3, 4, 5, 6, 7, 8 into an initially empty B-tree with minimum degree $t = 3$. Show every split.

**Problem 3.** Prove that in a B+ tree, the number of leaf nodes is at least $\lceil n / d \rceil$ where $n$ is the number of records and $d$ is the maximum number of keys per leaf.

**Problem 4.** Given the following strings, construct a compressed trie: "abracadabra", "abracad", "ab", "abra", "cad".

### 8.2 Priority Queues (Problems 5--7)

**Problem 5.** Show the state of a binomial heap after inserting 4, 8, 2, 15, 7, 3, 1 (in that order). Show the tree structure after each insert.

**Problem 6.** Explain why Fibonacci heaps are not widely used in practice despite their superior amortised bounds for decrease-key. Discuss at least three practical disadvantages.

**Problem 7.** Perform delete-min on a pairing heap with root 3 and children (in left-to-right order): 5, 1, 8, 4. Show the two-pass merge process step by step.

### 8.3 Advanced Structures (Problems 8--11)

**Problem 8.** Given an array $A = [7, 2, 5, 1, 8, 3, 6, 4]$, build a segment tree for range minimum queries. Then query $\min(A[2..5])$, update $A[3] = 0$, and query $\min(A[1..6])$.

**Problem 9.** Build a Fenwick tree for the array $A = [5, 3, 7, 1, 4, 6, 2]$. Compute the prefix sum up to index 5, the range sum $A[2..6]$, and show the effect of adding 10 to $A[4]$.

**Problem 10.** Compute the suffix array and LCP array for the string "mississippi$". Use the result to find the longest repeated substring.

**Problem 11.** Prove that the LCP array satisfies $\sum_{i=1}^{n} \mathrm{LCP{}[i] = O(n^2)$ in the worst case, and construct a string that achieves this bound (up to constants).

### 8.4 Analysis (Problems 12--15)

**Problem 12.** Using the potential method, prove that the amortised cost of insert into a dynamic array that doubles when full and halves when less than 1/4 full is $O(1)$. Define the potential function and verify both conditions.

**Problem 13.** A deque (double-ended queue) supports push-front, push-back, pop-front, pop-back, all in $O(1)$ amortised time. Design such a deque using three stacks and prove the amortised bounds using the potential method.

**Problem 14.** Prove that a Fibonacci heap with $n$ nodes has at most $O(\log_\phi n)$ children of the minimum node after consolidation.

**Problem 15.** Show that the interval tree query algorithm is correct: prove that it visits at most $O(\log n)$ nodes plus the $k$ nodes that overlap the query point.

<details>
<summary>Solution to Problem 1</summary>

**Two rotations during insertion.** Consider inserting into an empty red-black tree: 1, 2, 3, 4, 5.

After inserting 1, 2, 3: The tree is a chain 1(B) - 2(R) - 3(R). Inserting 3 requires fixing: parent 2 is red, uncle NIL (black). Case 3 (right-right): double rotation at 1. Result: 2(B) with children 1(R) and 3(R).

Now insert 4: Insert as right child of 3, colour red. Parent 3 is red, uncle 1 is red. Case 1: recolour 1, 3 black, 2 red. But 2 is the root, so colour it black. Result: 2(B), 1(B), 3(B), 4(R).

Insert 5: Insert as right child of 4, colour red. Parent 4 is red, uncle NIL (black). Case 3 (right-right): double rotation at 3. Left-rotate 4, then left-rotate 3. This performs exactly 2 rotations.

If you get this wrong, revise: Section 1.1.1.
</details>

<details>
<summary>Solution to Problem 8</summary>

Array: $A = [7, 2, 5, 1, 8, 3, 6, 4]$ (1-indexed).

Segment tree for range minimum:
```
              [1,8]: min=1
            /              \
     [1,4]: min=1      [5,8]: min=3
     /         \        /         \
[1,2]:min=2 [3,4]:min=1 [5,6]:min=3 [7,8]:min=4
  /     \     /    \     /    \      /    \
[1]:7  [2]:2 [3]:5 [4]:1 [5]:8 [6]:3 [7]:6 [8]:4
```

Query $\min(A[2..5])$:
- Root [1,8]: need [2,5]. Split.
- Left [1,4]: need [2,4]. Split.
  - [1,2]: need [2,2]. Split. -> [2]:2.
  - [3,4]: contained in [2,4]. -> min=1.
  - min so far: min(2, 1) = 1.
- Right [5,8]: need [5,5]. Split.
  - [5,6]: need [5,5]. Split. -> [5]:8.
  - min so far: min(1, 8) = 1.

Result: $\min(A[2..5]) = 1$. Verify: $\min(2, 5, 1, 8) = 1$. Correct.

Update $A[3] = 0$: Update leaf [3] to 0. Then [3,4]: $\min(0, 1) = 0$. Then [1,4]: $\min(2, 0) = 0$. Then [1,8]: $\min(0, 3) = 0$.

Query $\min(A[1..6])$:
- Root [1,8]: need [1,6]. Split.
- Left [1,4]: contained in [1,6]. -> min=0.
- Right [5,8]: need [5,6]. Split. -> [5,6]: min=3.
- min(0, 3) = 0.

Result: $\min(A[1..6]) = 0$.

If you get this wrong, revise: Section 5.2.
</details>

<details>
<summary>Solution to Problem 10</summary>

String: "mississippi$" ($n = 12$).

All suffixes (with starting index):
0:  mississippi$
1:  ississippi$
2:  ssissippi$
3:  sissippi$
4:  issippi$
5:  ssippi$
6:  sippi$
7:  ippi$
8:  ppi$
9:  pi$
10: i$
11: $

Sorted suffixes:
11: $
10: i$
7:  ippi$
4:  issippi$
1:  ississippi$
9:  pi$
8:  ppi$
6:  sippi$
3:  sissippi$
5:  ssippi$
2:  ssissippi$
0:  mississippi$

SA = [11, 10, 7, 4, 1, 9, 8, 6, 3, 5, 2, 0]

LCP array:
LCP[0] = 0
LCP[1] = 0  (LCP("$", "i$"))
LCP[2] = 1  (LCP("i$", "ippi$"))
LCP[3] = 1  (LCP("ippi$", "issippi$"))
LCP[4] = 4  (LCP("issippi$", "ississippi$"))
LCP[5] = 0  (LCP("ississippi$", "pi$"))
LCP[6] = 0  (LCP("pi$", "ppi$"))
LCP[7] = 0  (LCP("ppi$", "sippi$"))
LCP[8] = 2  (LCP("sippi$", "sissippi$"))
LCP[9] = 2  (LCP("sissippi$", "ssippi$"))
LCP[10] = 4 (LCP("ssippi$", "ssissippi$"))
LCP[11] = 1 (LCP("ssissippi$", "mississippi$"))

Maximum LCP = 4 (at index 4, between "issippi$" and "ississippi$", giving "issi"; and at index 10, between "ssippi$" and "ssissippi$", giving "ssip").

Longest repeated substring: "issi" (length 4) or "ssip" (length 4). Both are valid answers.

If you get this wrong, revise: Section 6.3.
</details>
