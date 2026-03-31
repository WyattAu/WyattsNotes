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

A **tree** is a connected, acyclic, undirected graph. Equivalently, a tree is a hierarchical data structure consisting of nodes, where each node has at most one **parent** and zero or more **children**.

**Formal recursive definition:** A tree is either empty, or consists of a **root** node and zero or more subtrees, each of which is itself a tree.

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

**Proof.** By induction on $n$. Base case: $n = 1$ (root only), 0 edges. Inductive step: adding a new node as a child of an existing node adds exactly one edge. So a tree with $n$ nodes has $(n-1) + 1 - 1 = n - 1$ edges. $\square$

---

## 2. Binary Trees

### Definition

A **binary tree** is a tree where each node has at most two children, called the **left child** and **right child**.

### Properties

**Theorem.** A binary tree of height $h$ has at most $2^{h+1} - 1$ nodes.

**Proof.** At depth $d$, there are at most $2^d$ nodes. The total number of nodes is at most:

$$\sum_{d=0}^{h} 2^d = 2^{h+1} - 1$$

$\square$

**Corollary.** The minimum height of a binary tree with $n$ nodes is $\lfloor \log_2 n \rfloor$.

**Proof.** From the above, $n \leq 2^{h+1} - 1 < 2^{h+1}$, so $h + 1 > \log_2 n$, giving $h \geq \lceil \log_2(n+1) \rceil - 1 = \lfloor \log_2 n \rfloor$. $\square$

### Full, Complete, and Perfect Binary Trees

| Type     | Definition                                                                                 |
| -------- | ------------------------------------------------------------------------------------------ |
| Full     | Every node has 0 or 2 children                                                             |
| Complete | All levels except possibly the last are completely filled; last level filled left to right |
| Perfect  | All internal nodes have 2 children; all leaves at the same depth                           |

---

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

**Proof.** At each step, the algorithm descends one level, eliminating half of the remaining subtree (in a balanced tree). The path length is at most $h$, and each step does $O(1)$ work. Total: $O(h)$. $\square$

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

_Base case._ Inserting into an empty tree creates a single-node tree, which trivially satisfies the BST property.

_Inductive step._ Assume `bst_insert(root.left, key)` (or `root.right`) returns a valid BST. If `key < root.key`, the new node is inserted in the left subtree. By the inductive hypothesis, the left subtree is a valid BST, and all its keys are less than `root.key` (by the original BST property and because `key < root.key`). Similarly for the right subtree. The root's key remains between all left and right keys. Hence the full tree is a valid BST. $\square$

**Complexity:** $O(h)$.

### Deletion

Three cases:

1. **Leaf node:** Simply remove it.
2. **Node with one child:** Replace the node with its child.
3. **Node with two children:** Replace with its **in-order successor** (smallest node in right subtree), then delete the successor.

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

**Proof.** Cases 1 and 2 are trivial — removing a leaf or replacing with a single child maintains ordering. For case 3: the in-order successor $s$ is the smallest key in the right subtree, so $s > \text{root.key}$ and all keys in the left subtree are $< \text{root.key} < s$. After replacing root's key with $s$'s key and deleting $s$ from the right subtree (which is case 1 or 2), the BST property holds. $\square$

---

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

**Proof.** By structural induction. For a leaf, the in-order traversal outputs just the leaf's key. For an internal node with key $k$: in-order first traverses the left subtree (all keys $< k$ by BST property), then outputs $k$, then traverses the right subtree (all keys $> k$). By the inductive hypothesis, each subtree's output is sorted. Hence the full output is sorted. $\square$

<details><summary>Example: Traversals of a BST</summary><p>

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

</p></details>

---

## 5. Heaps and Heap Sort

### Binary Heap

A **binary min-heap** is a complete binary tree where every node's key is $\leq$ its children's keys. A **max-heap** requires every node's key $\geq$ its children's keys.

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

**Proof.** In the worst case, `heapify` follows a path from node $i$ to a leaf. The height of a complete binary tree with $n$ nodes is $\lfloor \log_2 n \rfloor$. Each step does $O(1)$ work (comparisons and swap). Total: $O(\log n)$. $\square$

### Building a Heap

```python
def build_heap(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
```

**Theorem.** `build_heap` runs in $O(n)$ time.

**Proof.** The nodes at depth $d$ are at most $\lceil n / 2^{d+1} \rceil$. Each `heapify` at depth $d$ takes at most $O(h - d)$ time, where $h = \lfloor \log_2 n \rfloor$. The total cost is:

$$T(n) = \sum_{d=0}^{h} \left\lceil \frac{n}{2^{d+1}} \right\rceil \cdot O(h - d) \leq \sum_{d=0}^{h} \frac{n}{2^{d+1}} \cdot (h - d)$$

Let $k = h - d$:

$$T(n) \leq n \sum_{k=0}^{h} \frac{k}{2^{h-k+1}} \leq \frac{n}{2} \sum_{k=0}^{\infty} \frac{k}{2^k} = \frac{n}{2} \cdot 2 = O(n)$$

(The sum $\sum_{k=0}^{\infty} k/2^k = 2$ by the standard geometric-series derivative result.) $\square$

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

**Proof.** Building the heap: $O(n)$. Then $n - 1$ iterations of swap + heapify. Each heapify on a heap of size $i$ takes $O(\log i)$ time. Total:

$$T(n) = O(n) + \sum_{i=2}^{n} O(\log i) = O(n) + O\left(\sum_{i=1}^{n} \log i\right) \leq O(n) + O(n \log n) = O(n \log n)$$

**Space:** $O(1)$ — in-place. **Stability:** Not stable (swaps can change relative order of equal elements). $\square$

---

## 6. Balanced BSTs (Overview)

**Theorem.** In a BST of height $h$, search, insert, and delete take $O(h)$ time. In the worst case (degenerate tree), $h = n$, giving $O(n)$.

To guarantee $O(\log n)$ operations, we need **balanced** BSTs:

| Structure | Height bound            | Notes                          |
| --------- | ----------------------- | ------------------------------ |
| AVL tree  | $\leq 1.44 \log_2(n+2)$ | Strict balance                 |
| Red-black | $\leq 2 \log_2(n+1)$    | Weaker balance, faster inserts |
| B-tree    | $O(\log_b n)$           | Used in databases              |

:::info Board-specific
A Level exams typically only require understanding of basic BSTs and heaps. AVL trees and red-black trees are mentioned for context but not examined in detail.
:::

---

## Problem Set

**Problem 1.** Draw the BST that results from inserting the keys 50, 30, 70, 20, 40, 60, 80 in that order.

<details><summary>Answer</summary><p>

```
        50
       /  \
      30   70
     / \   / \
    20 40 60 80
```

Each key is inserted at the correct position to maintain the BST property.

</p></details>

**Problem 2.** What is the in-order, pre-order, and post-order traversal of the BST from Problem 1?

<details><summary>Answer</summary><p>

- In-order: 20, 30, 40, 50, 60, 70, 80
- Pre-order: 50, 30, 20, 40, 70, 60, 80
- Post-order: 20, 40, 30, 60, 80, 70, 50

</p></details>

**Problem 3.** What is the worst-case height of a BST with $n$ nodes? Give an example insertion order that produces this worst case.

<details><summary>Answer</summary><p>

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

</p></details>

**Problem 4.** Delete the node with key 30 from the BST in Problem 1. Show the resulting tree.

<details><summary>Answer</summary><p>

Node 30 has two children (20 and 40). Replace with in-order successor = 40 (smallest in right subtree). Delete the original 40 node (leaf).

```
        50
       /  \
      40   70
     /    / \
    20  60  80
```

</p></details>

**Problem 5.** Build a max-heap from the array `[4, 10, 3, 5, 1]`. Show the array after each heapify call.

<details><summary>Answer</summary><p>

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

</p></details>

**Problem 6.** Trace heap sort on the array `[3, 1, 4, 1, 5]`. Show the array after each extraction step.

<details><summary>Answer</summary><p>

Build heap: `[5, 3, 4, 1, 1]`

| Step | Swap with end | Heap before heapify | After heapify | Sorted portion |
| ---- | ------------- | ------------------- | ------------- | -------------- |
| 1    | 5 ↔ 1        | [1, 3, 4, 1, 5]     | [4, 3, 1, 1]  | [5]            |
| 2    | 4 ↔ 1        | [1, 3, 1, 4, 5]     | [3, 1, 1]     | [4, 5]         |
| 3    | 3 ↔ 1        | [1, 1, 3, 4, 5]     | [1, 1]        | [3, 4, 5]      |
| 4    | 1 ↔ 1        | [1, 1, 3, 4, 5]     | [1]           | [1, 3, 4, 5]   |

Final: `[1, 1, 3, 4, 5]`

</p></details>

**Problem 7.** Prove that the in-order successor of a node in a BST (if it exists) is the leftmost node in its right subtree, assuming the node has a right child.

<details><summary>Answer</summary><p>

**Proof.** Let node $N$ have key $k$ and a right child $R$. By the BST property, all keys in $R$'s subtree are $> k$. The in-order successor is the smallest key greater than $k$. In $R$'s subtree, the smallest key is found by always going left (since left children have smaller keys). Therefore, the in-order successor is the leftmost node in the right subtree. $\square$

</p></details>

**Problem 8.** A complete binary tree has 100 nodes. What is its height? How many leaves does it have?

<details><summary>Answer</summary><p>

Height: $h = \lfloor \log_2 100 \rfloor = 6$.

Number of leaves: For a complete binary tree with $n$ nodes, the number of leaves is $\lceil n/2 \rceil = 50$.

More precisely: at depth $h = 6$, there are $100 - (2^6 - 1) = 100 - 63 = 37$ leaves. At depth $h - 1 = 5$, there are $2^5 = 32$ nodes. Nodes at depth 5 that are not leaves have children at depth 6, so internal nodes at depth 5 = 37 (one per leaf at depth 6), and leaves at depth 5 = $32 - 37$... Let me recalculate.

Actually: nodes at depths 0 through 5 = $2^6 - 1 = 63$. Nodes at depth 6 = $100 - 63 = 37$. The 37 nodes at depth 6 are all leaves. Of the 32 nodes at depth 5, those that have children at depth 6 are internal (37 of them, but we only have 32). Actually all 32 nodes at depth 5 are internal (they each have children at depth 6, filling left to right). Wait, 37 nodes at depth 6 and 32 at depth 5 means each of the 32 nodes at depth 5 has at least one child. The first 5 have two children ($5 \times 2 = 10$), the remaining 27 have one child each. So $32 - 37$... that doesn't work.

Let me reconsider: 32 nodes at depth 5 can have up to 64 children. We have 37 children at depth 6. So $37 - 32 = 5$ nodes have two children, and $32 - 5 = 27$ nodes have exactly one child. The remaining nodes at depths 0–4 that have no children are internal (by definition they have children since they're not at the bottom). So leaves = nodes at depth 6 that have no children = 37. Wait, nodes at depth 6 are always leaves in a complete binary tree. So leaves = 37. Internal nodes = $100 - 37 = 63$.

Hmm, but also leaves = $\lceil 100/2 \rceil = 50$... that formula is for a different notion. Let me just state: leaves = 37 (at depth 6), internal = 63.

Actually the formula $\lceil n/2 \rceil$ for leaves applies to **perfect** binary trees and doesn't hold for all complete binary trees. For this complete tree: leaves = $n - (2^h - 1) = 100 - 63 = 37$ at the bottom level, plus any nodes at the second-to-last level that have no children. All 32 nodes at level 5 have at least one child (since we fill left to right and have 37 children). So leaves = 37.

Wait, I need to reconsider. The 32 nodes at level 5 need 37 children. The first $37$ "slots" at level 6 are filled. Each node at level 5 has 2 child slots. So the first $\lfloor 37/2 \rfloor = 18$ nodes have 2 children each, and the 19th node has 1 child. The remaining $32 - 19 = 13$ nodes at level 5 have **no children** and are therefore leaves.

Total leaves = 37 (level 6) + 13 (level 5) = 50 = $\lceil 100/2 \rceil$. ✓

</p></details>

**Problem 9.** Explain why heap sort is not a stable sorting algorithm. Give a concrete example where stability is violated.

<details><summary>Answer</summary><p>

Heap sort is not stable because the `heapify` operation swaps elements that may be far apart in the array, changing the relative order of equal elements.

Example: Array `[(3, a), (3, b), (2, c)]` (pairs with key and identity).

After build_heap (max-heap): `[(3, a), (3, b), (2, c)]` — already a max-heap.

Swap root with last: `[(2, c), (3, b), (3, a)]`. Heapify on size 2: no change.

Swap root with second-to-last: `[(3, b), (2, c), (3, a)]`.

Result: `[(3, b), (2, c), (3, a)]`. The relative order of `(3, a)` and `(3, b)` has been reversed. Not stable.

</p></details>

**Problem 10.** Show that the pre-order traversal of a BST uniquely determines the BST if all keys are distinct.

<details><summary>Answer</summary><p>

**Proof.** The first element of a pre-order traversal is the root. All subsequent elements before the first element greater than the root belong to the left subtree, and all elements from that point onward belong to the right subtree. This recursively partitions the traversal, uniquely determining the tree structure. $\square$

<details><summary>Detailed example</summary><p>

Pre-order: `[8, 3, 1, 6, 4, 7, 10, 14, 13]`

- Root = 8
- Left subtree: elements < 8 = `[3, 1, 6, 4, 7]`
- Right subtree: elements > 8 = `[10, 14, 13]`

Recurse on left `[3, 1, 6, 4, 7]`: root = 3, left = `[1]`, right = `[6, 4, 7]`
Recurse on right `[10, 14, 13]`: root = 10, left = `[]`, right = `[14, 13]`

This uniquely reconstructs the tree.

</p></details>

</p></details>

**Problem 11.** Write a function to compute the height of a binary tree. Prove its correctness.

<details><summary>Answer</summary><p>

```python
def tree_height(node):
    if node is None:
        return -1
    return 1 + max(tree_height(node.left), tree_height(node.right))
```

**Correctness.** By structural induction. Base case: empty tree has height $-1$ (convention). Inductive step: if the left subtree has height $h_L$ and right subtree has height $h_R$ (by inductive hypothesis), then the height of the current node is $1 + \max(h_L, h_R)$, which is the length of the longest root-to-leaf path. $\square$

</p></details>

**Problem 12.** Given an array representation of a min-heap `[1, 3, 2, 7, 5, 4, 8]`, what are the children of node 3? What is the parent of node 5?

<details><summary>Answer</summary><p>

Array: `[1, 3, 2, 7, 5, 4, 8]` (0-indexed)

Children of node 3 (index 1): left = index $2(1)+1 = 3$ → value 7; right = index $2(1)+2 = 4$ → value 5.

Parent of node 5 (index 4): parent index = $\lfloor(4-1)/2\rfloor = 1$ → value 3.

</p></details>

For revision on sorting, see [Sorting Algorithms](/docs/docs_ALevel-notes/computer-science/algorithms/02-sorting-algorithms).
