---
title: Trees
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: trees
---

## 1. Tree Fundamentals

### Definition

A **tree** is a connected, acyclic, undirected graph. Equivalently, a tree is a hierarchical data
structure consisting of nodes, where each node has at most one **parent** and zero or more
**children**.

**Formal recursive definition:** A tree is either empty, or consists of a **root** node and zero or
more subtrees, each of which is itself a tree.

### Terminology

| Term          | Definition                                          |
| ------------- | --------------------------------------------------- |
| Root          | The topmost node; has no parent                     |
| Leaf          | A node with no children                             |
| Internal node | A node with at least one child                      |
| Edge          | Connection between parent and child                 |
| Path          | Sequence of edges from one node to another          |
| Depth         | Number of edges from root to a node (root: depth 0) |
| Height        | Maximum depth of any node in the tree               |
| Subtree       | A node and all its descendants                      |
| Degree        | Number of children of a node                        |

**Theorem.** A tree with $n$ nodes has exactly $n - 1$ edges.

**Proof.** By induction on $n$. Base case: $n = 1$ (root only), 0 edges. Inductive step: adding a
new node as a child of an existing node adds exactly one edge. So a tree with $n$ nodes has
$(n-1) + 1 - 1 = n - 1$ edges. $\square$

<hr />

## 2. Binary Trees

### Definition

A **binary tree** is a tree where each node has at most two children, called the **left child** and
**right child**.

### Properties

**Theorem.** A binary tree of height $h$ has at most $2^{h+1} - 1$ nodes.

**Proof.** At depth $d$, there are at most $2^d$ nodes. The total number of nodes is at most:

$$\sum_{d=0}^{h} 2^d = 2^{h+1} - 1$$

$\square$

**Corollary.** The minimum height of a binary tree with $n$ nodes is $\lfloor \log_2 n \rfloor$.

**Proof.** From the above, $n \leq 2^{h+1} - 1 \lt{} 2^{h+1}$, so $h + 1 \gt{} \log_2 n$, giving
$h \geq \lceil \log_2(n+1) \rceil - 1 = \lfloor \log_2 n \rfloor$. $\square$

### Full, Complete, and Perfect Binary Trees

| Type     | Definition                                                                                 |
| -------- | ------------------------------------------------------------------------------------------ |
| Full     | Every node has 0 or 2 children                                                             |
| Complete | All levels except possibly the last are completely filled; last level filled left to right |
| Perfect  | All internal nodes have 2 children; all leaves at the same depth                           |

<hr />

## 3. Binary Search Trees (BST)

### Definition

A **Binary Search Tree** is a binary tree with the **BST property**: for every node $N$:

- All keys in the left subtree of $N$ are **less than** $N$'s key
- All keys in the right subtree of $N$ are **greater than** $N$'s key

### Search

```python
def bst_search(root, key):
    if root is None or root.key == key:
        return root
    if key < root.key:
        return bst_search(root.left, key)
    else:
        return bst_search(root.right, key)
```

**Theorem.** BST search takes $O(h)$ time, where $h$ is the height of the tree.

**Proof.** At each step, the algorithm descends one level, eliminating half of the remaining subtree
(in a balanced tree). The path length is at most $h$, and each step does $O(1)$ work. Total: $O(h)$.
$\square$

### Insertion

```python
def bst_insert(root, key):
    if root is None:
        return TreeNode(key)
    if key < root.key:
        root.left = bst_insert(root.left, key)
    elif key > root.key:
        root.right = bst_insert(root.right, key)
    return root
```

**Correctness proof.** We prove that `bst_insert` maintains the BST property.

_Base case._ Inserting into an empty tree creates a single-node tree, which trivially satisfies the
BST property.

_Inductive step._ Assume `bst_insert(root.left, key)` (or `root.right`) returns a valid BST. If
`key < root.key`, the new node is inserted in the left subtree. By the inductive hypothesis, the
left subtree is a valid BST, and all its keys are less than `root.key` (by the original BST property
and because `key < root.key`). Similarly for the right subtree. The root's key remains between all
left and right keys. Hence the full tree is a valid BST. $\square$

**Complexity:** $O(h)$.

### Deletion

Three cases:

1. **Leaf node:** Simply remove it.
2. **Node with one child:** Replace the node with its child.
3. **Node with two children:** Replace with its **in-order successor** (smallest node in right
   subtree), then delete the successor.

```python
def bst_delete(root, key):
    if root is None:
        return None
    if key < root.key:
        root.left = bst_delete(root.left, key)
    elif key > root.key:
        root.right = bst_delete(root.right, key)
    else:
        if root.left is None:
            return root.right
        if root.right is None:
            return root.left
        successor = bst_min(root.right)
        root.key = successor.key
        root.right = bst_delete(root.right, successor.key)
    return root

def bst_min(node):
    while node.left is not None:
        node = node.left
    return node
```

**Theorem.** `bst_delete` preserves the BST property.

**Proof.** Cases 1 and 2 are trivial — removing a leaf or replacing with a single child maintains
ordering. For case 3: the in-order successor $s$ is the smallest key in the right subtree, so
$s \gt{} \mathrm{root.key}$ and all keys in the left subtree are $\lt{} \mathrm{root.key} \lt{} s$.
After replacing root's key with $s$'s key and deleting $s$ from the right subtree (which is case 1
or 2), the BST property holds. $\square$

<hr />

## 4. Tree Traversals

| Traversal   | Order                | Use case             |
| ----------- | -------------------- | -------------------- |
| In-order    | Left, Root, Right    | Sorted output (BST)  |
| Pre-order   | Root, Left, Right    | Copy tree, prefix    |
| Post-order  | Left, Right, Root    | Delete tree, postfix |
| Level-order | Level by level (BFS) | Breadth processing   |

```python
def inorder(node):
    if node is not None:
        inorder(node.left)
        print(node.key, end=' ')
        inorder(node.right)

def preorder(node):
    if node is not None:
        print(node.key, end=' ')
        preorder(node.left)
        preorder(node.right)

def postorder(node):
    if node is not None:
        postorder(node.left)
        postorder(node.right)
        print(node.key, end=' ')

from collections import deque
def levelorder(root):
    if root is None:
        return
    queue = deque([root])
    while queue:
        node = queue.popleft()
        print(node.key, end=' ')
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
```

**Theorem.** In-order traversal of a BST produces keys in ascending order.

**Proof.** By structural induction. For a leaf, the in-order traversal outputs just the leaf's key.
For an internal node with key $k$: in-order first traverses the left subtree (all keys $\lt{} k$ by
BST property), then outputs $k$, then traverses the right subtree (all keys $\gt{} k$). By the
inductive hypothesis, each subtree's output is sorted. Hence the full output is sorted. $\square$

<details>
<summary>Example: Traversals of a BST</summary>

```
        8
       / \
      3   10
     / \    \
    1   6    14
       / \   /
      4   7 13
```

- In-order: 1, 3, 4, 6, 7, 8, 10, 13, 14
- Pre-order: 8, 3, 1, 6, 4, 7, 10, 14, 13
- Post-order: 1, 4, 7, 6, 3, 13, 14, 10, 8
- Level-order: 8, 3, 10, 1, 6, 14, 4, 7, 13
</details>

<hr />

## 5. Heaps and Heap Sort

### Binary Heap

A **binary min-heap** is a complete binary tree where every node's key is $\leq$ its children's
keys. A **max-heap** requires every node's key $\geq$ its children's keys.

### Array Representation

Since a heap is a complete binary tree, it can be stored in an array without pointers:

- Parent of node $i$: $\lfloor (i-1)/2 \rfloor$
- Left child of node $i$: $2i + 1$
- Right child of node $i$: $2i + 2$

### Heapify (Sift Down)

```python
def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
```

**Theorem.** `heapify(arr, n, i)` takes $O(\log n)$ time.

**Proof.** In the worst case, `heapify` follows a path from node $i$ to a leaf. The height of a
complete binary tree with $n$ nodes is $\lfloor \log_2 n \rfloor$. Each step does $O(1)$ work
(comparisons and swap). Total: $O(\log n)$. $\square$

### Building a Heap

```python
def build_heap(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
```

**Theorem.** `build_heap` runs in $O(n)$ time.

**Proof.** The nodes at depth $d$ are at most $\lceil n / 2^{d+1} \rceil$. Each `heapify` at depth
$d$ takes at most $O(h - d)$ time, where $h = \lfloor \log_2 n \rfloor$. The total cost is:

$$T(n) = \sum_{d=0}^{h} \left\lceil \frac{n}{2^{d+1}} \right\rceil \cdot O(h - d) \leq \sum_{d=0}^{h} \frac{n}{2^{d+1}} \cdot (h - d)$$

Let $k = h - d$:

$$T(n) \leq n \sum_{k=0}^{h} \frac{k}{2^{h-k+1}} \leq \frac{n}{2} \sum_{k=0}^{\infty} \frac{k}{2^k} = \frac{n}{2} \cdot 2 = O(n)$$

(The sum $\sum_{k=0}^{\infty} k/2^k = 2$ by the standard geometric-series derivative result.)
$\square$

### Heap Sort

```python
def heap_sort(arr):
    n = len(arr)
    build_heap(arr)
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
```

**Theorem.** Heap sort runs in $O(n \log n)$ time.

**Proof.** Building the heap: $O(n)$. Then $n - 1$ iterations of swap + heapify. Each heapify on a
heap of size $i$ takes $O(\log i)$ time. Total:

$$T(n) = O(n) + \sum_{i=2}^{n} O(\log i) = O(n) + O\left(\sum_{i=1}^{n} \log i\right) \leq O(n) + O(n \log n) = O(n \log n)$$

**Space:** $O(1)$ — in-place. **Stability:** Not stable (swaps can change relative order of equal
elements). $\square$

<hr />

## 6. Balanced BSTs (Overview)

**Theorem.** In a BST of height $h$, search, insert, and delete take $O(h)$ time. In the worst case
(degenerate tree), $h = n$, giving $O(n)$.

To guarantee $O(\log n)$ operations, we need **balanced** BSTs:

| Structure | Height bound            | Notes                          |
| --------- | ----------------------- | ------------------------------ |
| AVL tree  | $\leq 1.44 \log_2(n+2)$ | Strict balance                 |
| Red-black | $\leq 2 \log_2(n+1)$    | Weaker balance, faster inserts |
| B-tree    | $O(\log_b n)$           | Used in databases              |

:::info Board-specific A Level exams typically only require understanding of basic BSTs and heaps.
AVL trees and red-black trees are mentioned for context but not examined in detail. :::

<hr />

## Problem Set

**Problem 1.** Draw the BST that results from inserting the keys 50, 30, 70, 20, 40, 60, 80 in that
order.

<details>
<summary>Answer</summary>

```
        50
       /  \
      30   70
     / \   / \
    20 40 60 80
```

Each key is inserted at the correct position to maintain the BST property.

</details>

**Problem 2.** What is the in-order, pre-order, and post-order traversal of the BST from Problem 1?

<details>
<summary>Answer</summary>

- In-order: 20, 30, 40, 50, 60, 70, 80
- Pre-order: 50, 30, 20, 40, 70, 60, 80
- Post-order: 20, 40, 30, 60, 80, 70, 50
</details>

**Problem 3.** What is the worst-case height of a BST with $n$ nodes? Give an example insertion
order that produces this worst case.

<details>
<summary>Answer</summary>

Worst-case height: $n - 1$ (essentially a linked list).

Example: inserting keys in sorted order (1, 2, 3, 4, 5) produces a degenerate tree:

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

Height = 4 = $n - 1$.

</details>

**Problem 4.** Delete the node with key 30 from the BST in Problem 1. Show the resulting tree.

<details>
<summary>Answer</summary>

Node 30 has two children (20 and 40). Replace with in-order successor = 40 (smallest in right
subtree). Delete the original 40 node (leaf).

```
        50
       /  \
      40   70
     /    / \
    20  60  80
```

</details>

**Problem 5.** Build a max-heap from the array `[4, 10, 3, 5, 1]`. Show the array after each heapify
call.

<details>
<summary>Answer</summary>

Start: `[4, 10, 3, 5, 1]`, $n = 5$

Call heapify from index $n/2 - 1 = 1$ down to 0.

**heapify(arr, 5, 1):** Node 10, children 5 and 1. 10 is largest. No swap.

Array: `[4, 10, 3, 5, 1]`

**heapify(arr, 5, 0):** Node 4, children 10 and 3. Largest = 10 (index 1). Swap 4 and 10.

Array: `[10, 4, 3, 5, 1]`

Now heapify(arr, 5, 1): Node 4, children 5 and 1. Largest = 5 (index 3). Swap 4 and 5.

Array: `[10, 5, 3, 4, 1]`

Now heapify(arr, 5, 3): Node 4, no children. Stop.

Final heap: `[10, 5, 3, 4, 1]`

Verify: 10 > 5 and 10 > 3; 5 > 4 and 5 > 1. ✓

</details>

**Problem 6.** Trace heap sort on the array `[3, 1, 4, 1, 5]`. Show the array after each extraction
step.

<details>
<summary>Answer</summary>

Build heap: `[5, 3, 4, 1, 1]`

| Step | Swap with end | Heap before heapify | After heapify | Sorted portion |
| ---- | ------------- | ------------------- | ------------- | -------------- |
| 1    | 5 ↔ 1        | [1, 3, 4, 1, 5]     | [4, 3, 1, 1]  | [5]            |
| 2    | 4 ↔ 1        | [1, 3, 1, 4, 5]     | [3, 1, 1]     | [4, 5]         |
| 3    | 3 ↔ 1        | [1, 1, 3, 4, 5]     | [1, 1]        | [3, 4, 5]      |
| 4    | 1 ↔ 1        | [1, 1, 3, 4, 5]     | [1]           | [1, 3, 4, 5]   |

Final: `[1, 1, 3, 4, 5]`

</details>

**Problem 7.** Prove that the in-order successor of a node in a BST (if it exists) is the leftmost
node in its right subtree, assuming the node has a right child.

<details>
<summary>Answer</summary>

**Proof.** Let node $N$ have key $k$ and a right child $R$. By the BST property, all keys in $R$'s
subtree are $\gt{} k$. The in-order successor is the smallest key greater than $k$. In $R$'s
subtree, the smallest key is found by always going left (since left children have smaller keys).
Therefore, the in-order successor is the leftmost node in the right subtree. $\square$

</details>

**Problem 8.** A complete binary tree has 100 nodes. What is its height? How many leaves does it
have?

<details>
<summary>Answer</summary>

Height: $h = \lfloor \log_2 100 \rfloor = 6$.

Number of leaves: For a complete binary tree with $n$ nodes, the number of leaves is
$\lceil n/2 \rceil = 50$.

More precisely: at depth $h = 6$, there are $100 - (2^6 - 1) = 100 - 63 = 37$ leaves. At depth
$h - 1 = 5$, there are $2^5 = 32$ nodes. Nodes at depth 5 that are not leaves have children at depth
6, so internal nodes at depth 5 = 37 (one per leaf at depth 6), and leaves at depth 5 = $32 - 37$...
Let me recalculate.

Actually: nodes at depths 0 through 5 = $2^6 - 1 = 63$. Nodes at depth 6 = $100 - 63 = 37$. The 37
nodes at depth 6 are all leaves. Of the 32 nodes at depth 5, those that have children at depth 6 are
internal (37 of them, but we only have 32). Actually all 32 nodes at depth 5 are internal (they each
have children at depth 6, filling left to right). Wait, 37 nodes at depth 6 and 32 at depth 5 means
each of the 32 nodes at depth 5 has at least one child. The first 5 have two children
($5 \times 2 = 10$), the remaining 27 have one child each. So $32 - 37$... that doesn't work.

Let me reconsider: 32 nodes at depth 5 can have up to 64 children. We have 37 children at depth 6.
So $37 - 32 = 5$ nodes have two children, and $32 - 5 = 27$ nodes have exactly one child. The
remaining nodes at depths 0–4 that have no children are internal (by definition they have children
since they're not at the bottom). So leaves = nodes at depth 6 that have no children = 37. Wait,
nodes at depth 6 are always leaves in a complete binary tree. So leaves = 37. Internal nodes =
$100 - 37 = 63$.

Hmm, but also leaves = $\lceil 100/2 \rceil = 50$... that formula is for a different notion. Let me
just state: leaves = 37 (at depth 6), internal = 63.

Actually the formula $\lceil n/2 \rceil$ for leaves applies to **perfect** binary trees and doesn't
hold for all complete binary trees. For this complete tree: leaves = $n - (2^h - 1) = 100 - 63 = 37$
at the bottom level, plus any nodes at the second-to-last level that have no children. All 32 nodes
at level 5 have at least one child (since we fill left to right and have 37 children). So leaves
= 37.

Wait, I need to reconsider. The 32 nodes at level 5 need 37 children. The first $37$ "slots" at
level 6 are filled. Each node at level 5 has 2 child slots. So the first $\lfloor 37/2 \rfloor = 18$
nodes have 2 children each, and the 19th node has 1 child. The remaining $32 - 19 = 13$ nodes at
level 5 have **no children** and are therefore leaves.

Total leaves = 37 (level 6) + 13 (level 5) = 50 = $\lceil 100/2 \rceil$. ✓

</details>

**Problem 9.** Explain why heap sort is not a stable sorting algorithm. Give a concrete example
where stability is violated.

<details>
<summary>Answer</summary>

Heap sort is not stable because the `heapify` operation swaps elements that may be far apart in the
array, changing the relative order of equal elements.

Example: Array `[(3, a), (3, b), (2, c)]` (pairs with key and identity).

After build_heap (max-heap): `[(3, a), (3, b), (2, c)]` — already a max-heap.

Swap root with last: `[(2, c), (3, b), (3, a)]`. Heapify on size 2: no change.

Swap root with second-to-last: `[(3, b), (2, c), (3, a)]`.

Result: `[(3, b), (2, c), (3, a)]`. The relative order of `(3, a)` and `(3, b)` has been reversed.
Not stable.

</details>

**Problem 10.** Show that the pre-order traversal of a BST uniquely determines the BST if all keys
are distinct.

<details>
<summary>Answer</summary>

**Proof.** The first element of a pre-order traversal is the root. All subsequent elements before
the first element greater than the root belong to the left subtree, and all elements from that point
onward belong to the right subtree. This recursively partitions the traversal, uniquely determining
the tree structure. $\square$

<details>
<summary>Detailed example</summary>

Pre-order: `[8, 3, 1, 6, 4, 7, 10, 14, 13]`

- Root = 8
- Left subtree: elements < 8 = `[3, 1, 6, 4, 7]`
- Right subtree: elements > 8 = `[10, 14, 13]`

Recurse on left `[3, 1, 6, 4, 7]`: root = 3, left = `[1]`, right = `[6, 4, 7]` Recurse on right
`[10, 14, 13]`: root = 10, left = `[]`, right = `[14, 13]`

This uniquely reconstructs the tree.

</details>

</details>

**Problem 11.** Write a function to compute the height of a binary tree. Prove its correctness.

<details>
<summary>Answer</summary>

```python
def tree_height(node):
    if node is None:
        return -1
    return 1 + max(tree_height(node.left), tree_height(node.right))
```

**Correctness.** By structural induction. Base case: empty tree has height $-1$ (convention).
Inductive step: if the left subtree has height $h_L$ and right subtree has height $h_R$ (by
inductive hypothesis), then the height of the current node is $1 + \max(h_L, h_R)$, which is the
length of the longest root-to-leaf path. $\square$

</details>

**Problem 12.** Given an array representation of a min-heap `[1, 3, 2, 7, 5, 4, 8]`, what are the
children of node 3? What is the parent of node 5?

<details>
<summary>Answer</summary>

Array: `[1, 3, 2, 7, 5, 4, 8]` (0-indexed)

Children of node 3 (index 1): left = index $2(1)+1 = 3$ → value 7; right = index $2(1)+2 = 4$ →
value 5.

Parent of node 5 (index 4): parent index = $\lfloor(4-1)/2\rfloor = 1$ → value 3.

</details>

For revision on sorting, see
[Sorting Algorithms](/docs/alevel/computer-science/algorithms/sorting-algorithms).

<hr />

## Problems

**Problem 1.** Given the following binary tree, write the in-order traversal sequence.

```
       20
      /  \
    10    30
   /  \     \
  5   15    40
     /
    12
```

<details>
<summary>Hint</summary>

In-order traversal visits nodes in the order: Left subtree, Root, Right subtree. Apply this rule
recursively starting from the root.

</details>

<details>
<summary>Answer</summary>

In-order: 5, 10, 12, 15, 20, 30, 40

Step-by-step trace:

1. Start at root 20 → go left to 10
2. At 10 → go left to 5
3. At 5 → no left child → visit **5** → no right child
4. Return to 10 → visit **10** → go right to 15
5. At 15 → go left to 12
6. At 12 → no left child → visit **12** → no right child
7. Return to 15 → visit **15** → no right child
8. Return to 20 → visit **20** → go right to 30
9. At 30 → no left child → visit **30** → go right to 40
10. At 40 → no left child → visit **40** → no right child
</details>

**Problem 2.** For the same tree in Problem 1, write the pre-order and post-order traversal
sequences.

<details>
<summary>Hint</summary>

Pre-order: Root, Left, Right. Post-order: Left, Right, Root. Apply each rule recursively.

</details>

<details>
<summary>Answer</summary>

Pre-order: 20, 10, 5, 15, 12, 30, 40

Step-by-step trace:

1. Visit **20** → go left to 10
2. Visit **10** → go left to 5
3. Visit **5** → no left, no right
4. Return to 10 → go right to 15
5. Visit **15** → go left to 12
6. Visit **12** → no left, no right
7. Return to 15 → no right
8. Return to 20 → go right to 30
9. Visit **30** → no left → go right to 40
10. Visit **40** → no left, no right

Post-order: 5, 12, 15, 10, 40, 30, 20

Step-by-step trace:

1. At 20 → go left to 10 → go left to 5
2. At 5 → no left, no right → visit **5**
3. Return to 10 → go right to 15 → go left to 12
4. At 12 → no left, no right → visit **12**
5. Return to 15 → no right → visit **15**
6. Return to 10 → visit **10**
7. Return to 20 → go right to 30 → go right to 40
8. At 40 → no left, no right → visit **40**
9. Return to 30 → visit **30**
10. Return to 20 → visit **20**
</details>

**Problem 3.** Construct a BST by inserting the following keys in order: 45, 25, 65, 15, 35, 55,
75, 30. Draw the resulting tree.

<details>
<summary>Hint</summary>

Insert each key by comparing with nodes starting at the root. Go left if the key is smaller, right
if larger, until you find an empty position.

</details>

<details>
<summary>Answer</summary>

```
          45
        /    \
      25      65
     /  \    /  \
   15   35  55   75
       /
      30
```

Insertion trace:

1. Insert 45 → root
2. Insert 25 → 25 < 45, go left → insert as left child of 45
3. Insert 65 → 65 > 45, go right → insert as right child of 45
4. Insert 15 → 15 < 45, go left → 15 < 25, go left → insert as left child of 25
5. Insert 35 → 35 < 45, go left → 35 > 25, go right → insert as right child of 25
6. Insert 55 → 55 > 45, go right → 55 < 65, go left → insert as left child of 65
7. Insert 75 → 75 > 45, go right → 75 > 65, go right → insert as right child of 65
8. Insert 30 → 30 < 45, go left → 30 > 25, go right → 30 < 35, go left → insert as left child of 35
</details>

**Problem 4.** Delete key 25 from the BST in Problem 3. Show the resulting tree.

<details>
<summary>Hint</summary>

Node 25 has two children (15 and 35). Find the in-order successor (smallest value in the right
subtree) and replace 25 with it, then delete the successor node.

</details>

<details>
<summary>Answer</summary>

Node 25 has two children. The in-order successor is the smallest node in the right subtree of 25,
which is 30 (leftmost node in the subtree rooted at 35).

Replace 25 with 30, then delete the original node 30 (which is a leaf).

```
          45
        /    \
      30      65
     /  \    /  \
   15   35  55   75
```

Verification of BST property:

- All values in left subtree of 30 (15) < 30 ✓
- All values in right subtree of 30 (35) > 30 ✓
- All values in left subtree of 45 (30, 15, 35) < 45 ✓
- All values in right subtree of 45 (65, 55, 75) > 45 ✓
</details>

**Problem 5.** A min-heap is represented by the array `[2, 5, 3, 10, 8, 4, 7]`. Insert the value 1
into the heap and show the resulting array. Show each swap step.

<details>
<summary>Hint</summary>

When inserting into a min-heap, add the new element at the end of the array (next available
position), then "sift up" by swapping with its parent while it is smaller than its parent.

</details>

<details>
<summary>Answer</summary>

Initial heap: `[2, 5, 3, 10, 8, 4, 7]`

Step 1: Add 1 at the end of the array (index 7):

`[2, 5, 3, 10, 8, 4, 7, 1]`

Step 2: Sift up. Parent of index 7 is index ⌊(7−1)/2⌋ = 3. Value at index 3 is 10.

1 < 10, so swap:

`[2, 5, 3, 1, 8, 4, 7, 10]`

Step 3: Parent of index 3 is index ⌊(3−1)/2⌋ = 1. Value at index 1 is 5.

1 < 5, so swap:

`[2, 1, 3, 5, 8, 4, 7, 10]`

Step 4: Parent of index 1 is index ⌊(1−1)/2⌋ = 0. Value at index 0 is 2.

1 < 2, so swap:

`[1, 2, 3, 5, 8, 4, 7, 10]`

Step 5: Index 0 is the root. Stop.

Final heap: `[1, 2, 3, 5, 8, 4, 7, 10]`

Verification: 1 ≤ 2 and 1 ≤ 3; 2 ≤ 5 and 2 ≤ 8; 3 ≤ 4 and 3 ≤ 7; 5 ≤ 10. ✓

</details>

**Problem 6.** A max-heap is represented by the array `[20, 15, 18, 10, 8, 12, 16]`. Perform an
extract-max operation (remove the root) and show the resulting array after each step.

<details>
<summary>Hint</summary>

Extract-max: swap root with last element, remove last element, then sift the new root down by
swapping with the larger child while the root is smaller than that child.

</details>

<details>
<summary>Answer</summary>

Initial heap: `[20, 15, 18, 10, 8, 12, 16]`

Step 1: Swap root (20) with last element (16):

`[16, 15, 18, 10, 8, 12, 20]`

Step 2: Remove last element (20 is the extracted max). Heap size is now 6:

`[16, 15, 18, 10, 8, 12]`

Step 3: Sift down from index 0. Children of index 0: left = index 1 (value 15), right = index 2
(value 18). Larger child = 18.

16 < 18, so swap:

`[18, 15, 16, 10, 8, 12]`

Step 4: Sift down from index 2. Children of index 2: left = index 5 (value 12). No right child
(index 6 ≥ size 6).

16 > 12, so no swap. Stop.

Final heap: `[18, 15, 16, 10, 8, 12]`

Verification: 18 ≥ 15 and 18 ≥ 16; 15 ≥ 10 and 15 ≥ 8; 16 ≥ 12. ✓

</details>

**Problem 7.** For the following binary tree, calculate the depth of each node and the height of the
tree.

```
        A
       / \
      B   C
     /   / \
    D   E   F
       /
      G
```

<details>
<summary>Hint</summary>

Depth is the number of edges from the root to the node (root has depth 0). Height of the tree is the
maximum depth of any node.

</details>

<details>
<summary>Answer</summary>

Depths:

- A: depth 0
- B: depth 1
- C: depth 1
- D: depth 2
- E: depth 2
- F: depth 2
- G: depth 3

Heights of individual nodes:

- G: height 0 (leaf)
- D: height 0 (leaf)
- F: height 0 (leaf)
- E: height 1 (longest path from E to a leaf: E→G = 1 edge)
- B: height 1 (longest path: B→D = 1 edge)
- C: height 2 (longest path: C→E→G = 2 edges)
- A: height 3 (longest path: A→C→E→G = 3 edges)

Height of the tree = height of root = 3

</details>

**Problem 8.** Convert the following complete binary tree to an array representation (0-indexed),
and then verify the parent-child relationships using the array formulas.

```
       4
      / \
     2   6
    / \ / \
   1  3 5  7
```

<details>
<summary>Hint</summary>

For a 0-indexed array: parent of node at index $i$ is $\lfloor (i-1)/2 \rfloor$, left child is
$2i+1$, right child is $2i+2$. Fill the array using level-order traversal.

</details>

<details>
<summary>Answer</summary>

Level-order traversal: 4, 2, 6, 1, 3, 5, 7

Array: `[4, 2, 6, 1, 3, 5, 7]`

```
Index:  0  1  2  3  4  5  6
Value:  4  2  6  1  3  5  7
```

Verification of parent-child formulas:

| Node | Index | Left child (2i+1) | Right child (2i+2) |
| ---- | ----- | ----------------- | ------------------ |
| 4    | 0     | 2(0)+1 = 1 → 2    | 2(0)+2 = 2 → 6     |
| 2    | 1     | 2(1)+1 = 3 → 1    | 2(1)+2 = 4 → 3     |
| 6    | 2     | 2(2)+1 = 5 → 5    | 2(2)+2 = 6 → 7     |
| 1    | 3     | 2(3)+1 = 7 (none) | 2(3)+2 = 8 (none)  |

Parent verification:

| Node | Index | Parent ⌊(i-1)/2⌋ |
| ---- | ----- | ---------------- |
| 2    | 1     | ⌊0/2⌋ = 0 → 4    |
| 6    | 2     | ⌊1/2⌋ = 0 → 4    |
| 1    | 3     | ⌊2/2⌋ = 1 → 2    |
| 3    | 4     | ⌊3/2⌋ = 1 → 2    |
| 5    | 5     | ⌊4/2⌋ = 2 → 6    |
| 7    | 6     | ⌊5/2⌋ = 2 → 6    |

All relationships match. ✓

</details>

**Problem 9.** Two BSTs each contain $n$ keys. BST A has height $n-1$ (degenerate) and BST B has
height $\lfloor \log_2 n \rfloor$ (balanced). Compare the number of comparisons required to search
for a key that exists in both trees, expressing your answers in terms of $n$.

<details>
<summary>Hint</summary>

In a BST, each comparison eliminates one subtree. In the worst case, the number of comparisons
equals the height of the tree. For a successful search, the expected number of comparisons is
approximately half the height.

</details>

<details>
<summary>Answer</summary>

**BST A (degenerate, height $n-1$):**

- Worst-case comparisons: $n$ (traverse every node, e.g., searching for the deepest leaf)
- Best-case comparisons: 1 (the key is at the root)
- Average-case comparisons: $\approx n/2$ (the key is equally likely to be at any depth)

**BST B (balanced, height $\lfloor \log_2 n \rfloor$):**

- Worst-case comparisons: $\lfloor \log_2 n \rfloor + 1$
- Best-case comparisons: 1 (the key is at the root)
- Average-case comparisons: $\approx \lfloor \log_2 n \rfloor / 2$

**Comparison for $n = 1024$:**

- BST A worst case: 1024 comparisons
- BST B worst case: $\lfloor \log_2 1024 \rfloor + 1 = 10 + 1 = 11$ comparisons

BST B is approximately $n / \log_2 n$ times faster. For large $n$, this difference is enormous,
which is why balanced BSTs (AVL, red-black trees) are preferred in practice.

</details>

**Problem 10.** (Exam-style multi-step question) A sequence of integers is read from a data stream:
38, 27, 43, 15, 50, 10, 33, 48.

(a) Construct a BST by inserting these values in the given order. Draw the final tree. (b) State the
in-order traversal of the BST. What property of BSTs does this demonstrate? (c) Delete the value 27
from the tree (it has two children). Draw the resulting tree and explain each step of the deletion.
(d) What is the height of the tree after the deletion?

<details>
<summary>Hint</summary>

For part (a), insert each value comparing with existing nodes. For part (c), use the in-order
successor method: find the smallest value in the right subtree of 27 and replace 27 with it.

</details>

<details>
<summary>Answer</summary>

**(a) BST construction:**

```
          38
        /    \
      27      43
     /  \       \
   15   33      50
   /           /
  10         48
```

Insertion trace:

1. 38 → root
2. 27 → 27 < 38, left child of 38
3. 43 → 43 > 38, right child of 38
4. 15 → 15 < 38 → 15 < 27, left child of 27
5. 50 → 50 > 38 → 50 > 43, right child of 43
6. 10 → 10 < 38 → 10 < 27 → 10 < 15, left child of 15
7. 33 → 33 < 38 → 33 > 27, right child of 27
8. 48 → 48 > 38 → 48 > 43 → 48 < 50, left child of 50

**(b) In-order traversal:** 10, 15, 27, 33, 38, 43, 48, 50

This demonstrates that **in-order traversal of a BST always produces keys in ascending sorted
order**.

**(c) Deletion of 27:**

Node 27 has two children (15 and 33). Find the in-order successor: the smallest value in the right
subtree of 27. Go right to 33, then go left as far as possible. 33 has no left child, so the
in-order successor is **33**.

Replace 27's value with 33, then delete the original 33 node (leaf removal).

```
          38
        /    \
      33      43
     /  \       \
   15   [33]    50
   /           /
  10         48
```

After deletion:

```
          38
        /    \
      33      43
     /          \
   15           50
   /           /
  10         48
```

**(d) Height calculation:**

Longest root-to-leaf path: 38 → 33 → 15 → 10 = 3 edges, OR 38 → 43 → 50 → 48 = 3 edges.

Height of the tree = **3**.

</details>

:::
