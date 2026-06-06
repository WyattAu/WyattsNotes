---
title: Data Structures
description:
  'University Computer Science Data Structures notes covering key definitions, core concepts, worked
  examples, and practice questions for effective revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
---

## 1. Arrays and Linked Lists

### 1.1 Arrays

An **array** is a contiguous block of memory storing elements of the same type, accessed by index in
$O(1)$ time.

**Operations:**

| Operation       | Time             |
| --------------- | ---------------- |
| Access by index | $O(1)$           |
| Search          | $O(n)$           |
| Insert at end   | $O(1)$ amortized |
| Insert at front | $O(n)$           |
| Delete at index | $O(n)$           |

**Dynamic arrays** (e.g., Python `list`, C++ `vector`) double capacity when full:

```
INSERT(arr, x):
    if arr.size == arr.capacity:
        new_cap = 2 * arr.capacity
        copy arr to new array of size new_cap
        arr.capacity = new_cap
    arr[arr.size] = x
    arr.size += 1
```

### 1.2 Linked Lists

A **linked list** stores elements in nodes, each containing data and a pointer to the next node.

**Singly Linked List:**

```
NODE = { data, next }

INSERT_HEAD(list, x):
    node = NODE(x, list.head)
    list.head = node

DELETE(list, x):
    prev = null
    curr = list.head
    while curr != null and curr.data != x:
        prev = curr
        curr = curr.next
    if curr != null:
        if prev == null:
            list.head = curr.next
        else:
            prev.next = curr.next
```

**Doubly Linked List:**

```
NODE = { data, prev, next }
```

| Operation       | Array  | Singly LL | Doubly LL |
| --------------- | ------ | --------- | --------- |
| Access by index | $O(1)$ | $O(n)$    | $O(n)$    |
| Insert at head  | $O(n)$ | $O(1)$    | $O(1)$    |
| Delete at node  | $O(n)$ | $O(n)$\*  | $O(1)$    |
| Search          | $O(n)$ | $O(n)$    | $O(n)$    |

\*Requires pointer to predecessor unless node pointer given.

## 2. Stacks and Queues

### 2.1 Stacks

A **stack** follows LIFO (Last In, First Out) order.

```
PUSH(stack, x):
    stack.top += 1
    stack[stack.top] = x

POP(stack):
    if stack.top == -1: error "underflow"
    x = stack[stack.top]
    stack.top -= 1
    return x

PEEK(stack):
    return stack[stack.top]
```

All operations are $O(1)$. Applications: expression evaluation, call stacks, DFS, bracket matching.

### 2.2 Queues

A **queue** follows FIFO (First In, First Out) order.

```
ENQUEUE(queue, x):
    queue.rear = (queue.rear + 1) % queue.capacity
    queue[queue.rear] = x
    queue.size += 1

DEQUEUE(queue):
    if queue.size == 0: error "underflow"
    x = queue[queue.front]
    queue.front = (queue.front + 1) % queue.capacity
    queue.size -= 1
    return x
```

Implemented with a circular array. All operations are $O(1)$.

### 2.3 Priority Queues

A **priority queue** orders elements by priority. Best implemented with a heap (see Section 5).

| Operation   | Unsorted Array | Sorted Array | Heap        |
| ----------- | -------------- | ------------ | ----------- |
| Insert      | $O(1)$         | $O(n)$       | $O(\log n)$ |
| Extract-Min | $O(n)$         | $O(1)$       | $O(\log n)$ |
| Peek        | $O(n)$         | $O(1)$       | $O(1)$      |

### 2.4 Deques

A **deque** (double-ended queue) allows insertion and deletion at both ends, all $O(1)$ with a
circular array.

## 3. Hash Tables

### 3.1 Hash Functions

A **hash function** $h: U \to \{0, 1, \ldots, m-1\}$ maps keys from universe $U$ to table indices.

**Division method:** $h(k) = k \mod m$. Choose $m$ prime, not near a power of 2.

**Multiplication method:** $h(k) = \lfloor m \cdot (k \cdot A \mod 1) \rfloor$, where
$A \in (0, 1)$, ideally $A = \frac{\sqrt{5}-1}{2}$.

**Universal hashing:** Pick $h$ randomly from a family $\mathcal{H}$ such that for any distinct
$x, y$:

$$\Pr_{h \in \mathcal{H}}[h(x) = h(y)] \leq \frac{1}{m}$$

### 3.2 Chaining

Each slot holds a linked list of all elements that hash to that index.

**Expected chain length:** $\alpha = n/m$ (load factor).

**Expected search time:** $O(1 + \alpha)$.

### 3.3 Open Addressing

All elements stored in the table itself. On collision, **probe** for the next empty slot.

**Probing strategies:**

- **Linear probing:** $h(k, i) = (h'(k) + i) \mod m$. Suffers from primary clustering.
- **Quadratic probing:** $h(k, i) = (h'(k) + c_1 i + c_2 i^2) \mod m$. Secondary clustering.
- **Double hashing:** $h(k, i) = (h_1(k) + i \cdot h_2(k)) \mod m$. Best distribution.

**Insert:**

```
HASH_INSERT(T, k):
    i = 0
    while true:
        j = h(k, i)
        if T[j] == NIL:
            T[j] = k
            return j
        i += 1
        if i == m: error "table full"
```

### 3.4 Load Factor and Resizing

**Load factor:** $\alpha = n/m$.

- Chaining: $\alpha$ can exceed 1. Expected lookup $O(1 + \alpha)$.
- Open addressing: $\alpha < 1$. Expected lookup $O(1 / (1 - \alpha))$.

**Resizing:** When $\alpha$ exceeds threshold (e.g., 0.7 for open addressing, 0.75 for chaining),
allocate a larger table and rehash all entries.

### 3.5 Comparison

| Aspect            | Chaining               | Open Addressing    |
| ----------------- | ---------------------- | ------------------ |
| Load factor       | $\alpha > 1$ OK        | $\alpha < 1$       |
| Memory            | Extra for pointers     | Compact            |
| Cache performance | Poor (pointer chasing) | Good (contiguous)  |
| Deletion          | Simple                 | Requires tombstone |

## 4. Trees

### 4.1 Binary Search Trees (BST)

**BST Property:** For every node $x$, all keys in the left subtree $< x.key$ and all keys in the
right subtree $> x.key$.

```
BST_INSERT(T, z):
    y = NIL
    x = T.root
    while x != NIL:
        y = x
        if z.key < x.key: x = x.left
        else: x = x.right
    z.parent = y
    if y == NIL: T.root = z
    elif z.key < y.key: y.left = z
    else: y.right = z

BST_SEARCH(x, k):
    while x != NIL and k != x.key:
        if k < x.key: x = x.left
        else: x = x.right
    return x
```

**Worst case:** $O(h)$ where $h = n$ for a degenerate tree.

**Expected height** (random insertions): $O(\log n)$.

### 4.2 Tree Traversals

```
INORDER(x):
    if x != NIL:
        INORDER(x.left)
        visit(x)
        INORDER(x.right)       // produces sorted order for BST

PREORDER(x):
    if x != NIL:
        visit(x)
        PREORDER(x.left)
        PREORDER(x.right)

POSTORDER(x):
    if x != NIL:
        POSTORDER(x.left)
        POSTORDER(x.right)
        visit(x)
```

### 4.3 AVL Trees

An **AVL tree** is a self-balancing BST where for every node, the heights of left and right subtrees
differ by at most 1.

**Balance factor:** $\text{bf}(v) = h(v.\text{left}) - h(v.\text{right}) \in \{-1, 0, 1\}$.

**Rotations:**

```
LEFT_ROTATE(x):
    y = x.right
    T2 = y.left
    y.left = x
    x.right = T2
    update heights(x, y)
    return y

RIGHT_ROTATE(y):
    x = y.left
    T2 = x.right
    x.right = y
    y.left = T2
    update heights(y, x)
    return x
```

| Case        | Balance Factor                | Fix                             |
| ----------- | ----------------------------- | ------------------------------- |
| Left-Left   | bf(node) = +2, bf(left) = +1  | Right rotate                    |
| Right-Right | bf(node) = -2, bf(right) = -1 | Left rotate                     |
| Left-Right  | bf(node) = +2, bf(left) = -1  | Left rotate left, right rotate  |
| Right-Left  | bf(node) = -2, bf(right) = +1 | Right rotate right, left rotate |

**Height:** $h \leq 1.44 \log_2(n+2) - 0.328$, so all operations are $O(\log n)$.

### 4.4 Red-Black Trees

A **red-black tree** satisfies:

1. Every node is red or black.
2. Root is black.
3. Leaves (NIL) are black.
4. Red nodes have black children (no two consecutive reds).
5. Every path from root to leaf has the same number of black nodes (**black-height**).

**Height:** $h \leq 2 \log_2(n+1)$.

```
RB_INSERT(T, z):
    BST_INSERT(T, z)
    z.color = RED
    RB_INSERT_FIXUP(T, z)

RB_INSERT_FIXUP(T, z):
    while z.parent.color == RED:
        if z.parent == z.parent.parent.left:
            y = z.parent.parent.right  // uncle
            if y.color == RED:         // Case 1: recolor
                z.parent.color = BLACK
                y.color = BLACK
                z.parent.parent.color = RED
                z = z.parent.parent
            else:
                if z == z.parent.right: // Case 2: left rotate
                    z = z.parent
                    LEFT_ROTATE(T, z)
                z.parent.color = BLACK  // Case 3: right rotate
                z.parent.parent.color = RED
                RIGHT_ROTATE(T, z.parent.parent)
        else: // symmetric cases
            ...
    T.root.color = BLACK
```

### 4.5 B-Trees

A **B-tree** of order $t$ satisfies:

1. Every node (except root) has at least $t-1$ keys.
2. Every node has at most $2t-1$ keys.
3. Every internal node with $k$ keys has $k+1$ children.
4. All leaves are at the same depth.

**Height:** $h \leq \log_t \frac{n+1}{2}$.

**Search, insert, delete:** $O(\log_t n)$, but with disk-friendly I/O: $O(\log_t n)$ disk accesses.

Designed for disk-based storage. Each node in most cases occupies a disk block.

**Split operation (insert):**

```
B_TREE_SPLIT_CHILD(T, x, i):
    y = x.child[i]  // full node with 2t-1 keys
    z = new node
    z.leaf = y.leaf
    z.n = t - 1
    z.keys[1..t-1] = y.keys[t..2t-1]
    if not y.leaf:
        z.children[1..t] = y.children[t+1..2t]
    y.n = t - 1
    shift x.keys and x.children right at position i
    x.keys[i] = y.keys[t]   // median key moves up
    x.children[i+1] = z
    x.n += 1
```

## 5. Heaps

### 5.1 Binary Heaps

A **binary heap** is a complete binary tree satisfying the **heap property**:

- **Max-heap:** $A[\text{parent}(i)] \geq A[i]$
- **Min-heap:** $A[\text{parent}(i)] \leq A[i]$

**Array representation:** For index $i$ (1-based):

- Parent: $\lfloor i/2 \rfloor$
- Left child: $2i$
- Right child: $2i + 1$

```
MAX_HEAPIFY(A, i, n):
    l = 2*i
    r = 2*i + 1
    largest = i
    if l <= n and A[l] > A[largest]: largest = l
    if r <= n and A[r] > A[largest]: largest = r
    if largest != i:
        swap A[i], A[largest]
        MAX_HEAPIFY(A, largest, n)

BUILD_MAX_HEAP(A, n):
    for i = floor(n/2) downto 1:
        MAX_HEAPIFY(A, i, n)

HEAPSORT(A):
    BUILD_MAX_HEAP(A, A.length)
    for i = A.length downto 2:
        swap A[1], A[i]
        MAX_HEAPIFY(A, 1, i-1)
```

**Priority queue operations:**

| Operation       | Time        |
| --------------- | ----------- |
| Build-Heap      | $O(n)$      |
| Insert          | $O(\log n)$ |
| Extract-Max/Min | $O(\log n)$ |
| Peek            | $O(1)$      |
| Increase-Key    | $O(\log n)$ |

### 5.2 Binomial Heaps

A **binomial heap** is a collection of binomial trees $B_0, B_1, \ldots, B_k$ where each $B_k$ has
$2^k$ nodes.

**Binomial tree $B_k$:** Two $B_{k-1}$ trees linked, one as leftmost child of the other's root.

| Operation   | Time                 |
| ----------- | -------------------- |
| Make-Heap   | $O(1)$               |
| Insert      | $O(\log n)$amortized |
| Find-Min    | $O(\log n)$          |
| Extract-Min | $O(\log n)$          |
| Union       | $O(\log n)$          |

### 5.3 Fibonacci Heaps

A **Fibonacci heap** is a collection of trees (not necessarily binomial) supporting lazy operations.

| Operation    | Amortized   | Worst Case  |
| ------------ | ----------- | ----------- |
| Insert       | $O(1)$      | $O(1)$      |
| Find-Min     | $O(1)$      | $O(1)$      |
| Extract-Min  | $O(\log n)$ | $O(n)$      |
| Decrease-Key | $O(1)$\*    | $O(\log n)$ |
| Delete       | $O(\log n)$ | $O(n)$      |

\*$O(1)$ amortized, $O(\log n)$ worst case.

**Key insight:** Decrease-key is $O(1)$ amortized, making Dijkstra $O(m + n \log n)$.

## 6. Graphs

### 6.1 Representations

**Adjacency Matrix:** $A[i][j] = 1$ if edge $(i,j)$ exists.

- Space: $O(V^2)$
- Edge lookup: $O(1)$
- Iterate neighbors: $O(V)$

**Adjacency List:** Array of linked lists, one per vertex.

- Space: $O(V + E)$
- Edge lookup: $O(\deg(v))$ (or $O(V)$ worst case)
- Iterate neighbors: $O(\deg(v))$

**When to use which:**

| Factor        | Adjacency Matrix | Adjacency List |
| ------------- | ---------------- | -------------- |
| Dense graphs  | Better           |                |
| Sparse graphs |                  | Better         |
| Edge queries  | $O(1)$           | $O(V)$         |
| Space         | $O(V^2)$         | $O(V+E)$       |

### 6.2 Graph Traversals

```
BFS(G, s):
    for each v in G.V: v.color = WHITE, v.dist = INF, v.parent = NIL
    s.color = GRAY, s.dist = 0, s.parent = NIL
    Q = ENQUEUE({s})
    while Q is not empty:
        u = DEQUEUE(Q)
        for each v in G.Adj[u]:
            if v.color == WHITE:
                v.color = GRAY, v.dist = u.dist + 1, v.parent = u
                ENQUEUE(Q, v)
        u.color = BLACK

DFS(G):
    for each u in G.V: u.color = WHITE, u.parent = NIL
    time = 0
    for each u in G.V:
        if u.color == WHITE:
            DFS_VISIT(G, u)

DFS_VISIT(G, u):
    time += 1; u.d = time; u.color = GRAY
    for each v in G.Adj[u]:
        if v.color == WHITE:
            v.parent = u; DFS_VISIT(G, v)
    time += 1; u.f = time; u.color = BLACK
```

## 7. Tries

A **trie** (prefix tree) stores strings character by character from root to leaf.

```
TRIE_NODE = { children: MAP<char, TRIE_NODE>, is_end: bool }

TRIE_INSERT(root, word):
    node = root
    for each char c in word:
        if c not in node.children:
            node.children[c] = new TRIE_NODE
        node = node.children[c]
    node.is_end = true

TRIE_SEARCH(root, word):
    node = root
    for each char c in word:
        if c not in node.children: return false
        node = node.children[c]
    return node.is_end

TRIE_PREFIX(root, prefix):
    node = root
    for each char c in prefix:
        if c not in node.children: return false
        node = node.children[c]
    return true
```

| Operation     | Trie                       | Hash Table      | BST/Map         |
| ------------- | -------------------------- | --------------- | --------------- |
| Insert        | $O(m)$                     | $O(m)$ avg      | $O(m \log n)$   |
| Search        | $O(m)$                     | $O(m)$ avg      | $O(m \log n)$   |
| Prefix search | $O(m)$                     | Not supported   | Not supported   |
| Space         | $O(alphabet \times depth)$ | $O(n \times m)$ | $O(n \times m)$ |

Where $m$ = string length, $n$ = number of strings.

## 8. Amortized Analysis

### 8.1 Aggregate Method

Total cost of $n$ operations divided by $n$.

**Example: Dynamic array.** $n$ insertions cost at most $\sum_{k=0}^{\log n - 1} 2^k = 2n - 1$.
Amortized cost per insert: $O(1)$.

### 8.2 Accounting (Banker's) Method

Assign each operation an **amortized cost**. Maintain a **credit balance**. The credit must never go
negative.

**Example: Dynamic array.** Charge $\$3$ per insert:

- $\$1$ pays for the insert itself.
- $\$2$ is saved as credit for future copying.

When we double and copy $k$ elements, the $k$ elements already paid $\$2$ each in credit, totaling
$\$2k \geq k$ to pay for copying.

### 8.3 Potential (Physicist's) Method

Define a **potential function** $\Phi$ on the data structure. Amortized cost of operation $i$:

$$\hat{c}_i = c_i + \Phi(D_i) - \Phi(D_{i-1})$$

**Requirements:** $\Phi(D_0) = 0$ and $\Phi(D_i) \geq 0$ for all $i$.

**Example: Dynamic array.** Let $\Phi = 2n - m$ where $n$ = elements, $m$ = capacity.

- **Insert (no resize):** $c = 1$, $\Delta\Phi = 2$. $\hat{c} = 3$.
- **Insert (resize):** $c = n + 1$, $\Delta\Phi = 2(n+1) - 2n - (2n - 2n) = 2$. $\hat{c} = n + 3$,
  but amortized over $\Theta(n)$ operations since potential drops: after resize,
  $\Phi = 2(n+1) - 2n = 2$, so $\Delta\Phi = 2 - (2n - n) = 2 - n$, making
  $\hat{c} = (n+1) + (2 - n) = 3$.

Amortized cost: $O(1)$ per insert.

### 8.4 Common Amortized Bounds

| Data Structure | Operations             | Amortized Cost |
| -------------- | ---------------------- | -------------- |
| Dynamic array  | Append, Pop            | $O(1)$         |
| Splay tree     | Access, Insert, Delete | $O(\log n)$    |
| Fibonacci heap | Insert, Decrease-Key   | $O(1)$, $O(1)$ |

## 9. Common Pitfalls

1. **Confusing worst-case and amortized complexity.** Amortized $O(1)$ does not guarantee $O(1)$ per
   operation. A single operation can be $O(n)$, but averaged over a sequence, each is $O(1)$.

2. **Forgetting to rebalance BSTs after insertion/deletion.** A BST without rebalancing can
   degenerate to a linked list, making all operations $O(n)$. Always use AVL, red-black, or another
   self-balancing variant.

3. **Choosing the wrong hash table collision resolution.** Open addressing is cache-friendly but
   degrades quickly at high load factors. Chaining handles high load factors better but uses more
   memory and has poor cache locality.

4. **Using adjacency matrices for sparse graphs.** An adjacency matrix uses $O(V^2)$ space
   regardless of edge count. For sparse graphs ($E \ll V^2$), always use adjacency lists.

5. **Implementing a trie with fixed-size arrays per node.** Using a 256-element array per node
   wastes enormous memory. Use hash maps or arrays sized to the actual alphabet for space
   efficiency.

6. **Ignoring the potential function's non-negativity requirement.** In amortized analysis, if
   $\Phi(D_i)$ can be negative, the bound is invalid. Always verify that $\Phi(D_i) \geq 0$ for all
   reachable states.

7. **Misunderstanding B-tree parameter $t$.** The minimum degree $t$ determines the range of keys
   per node ($t-1$ to $2t-1$). Setting $t$ too small yields tall trees; setting it too large wastes
   memory per node. Choose $t$ based on disk block size.

## Worked Examples

### Example 1: Building a Binary Search Tree

**Problem:** Insert the sequence 5, 3, 7, 1, 4, 6, 8 into an initially empty BST. What is the height
and the inorder traversal? **Solution:** Root=5. 3 goes left, 7 goes right. 1 goes left of 3, 4 goes
right of 3. 6 goes left of 7, 8 goes right of 7. Height = 3 (levels 0-3). Inorder traversal: 1, 3,
4, 5, 6, 7, 8 (sorted order). The BST is balanced in this case.

### Example 2: Hash Table Collision Resolution

**Problem:** Insert keys 10, 22, 31, 4, 15, 28, 17 into a hash table of size 7 using chaining with
h(k) = k mod 7. **Solution:** h(10)=3, h(22)=1, h(31)=3, h(4)=4, h(15)=1, h(28)=0, h(17)=3. Slot 0:
[28]. Slot 1: [22, 15]. Slot 3: [10, 31, 17]. Slot 4: [4]. Slots 2, 5, 6: empty. Load factor = 7/7
= 1. Average search time with chaining = O(1 + alpha) = O(2).

## Summary

- **Arrays** give $O(1)$ random access; **linked lists** give $O(1)$ insert/delete at known
  positions.
- **Stacks** (LIFO) and **queues** (FIFO) are fundamental ADTs with $O(1)$ operations.
- **Hash tables** achieve $O(1)$ average-case operations via good hash functions and collision
  resolution.
- **BSTs** (AVL, red-black) guarantee $O(\log n)$ operations; **B-trees** optimize for disk I/O.
- **Heaps** (binary, binomial, Fibonacci) implement priority queues; Fibonacci heaps give $O(1)$
  amortized decrease-key.
- **Graphs** are represented via adjacency lists (sparse) or matrices (dense).
- **Tries** enable efficient prefix search in $O(m)$ time.
- **Amortized analysis** (aggregate, accounting, potential) bounds total cost of a sequence, not
  individual operations.

## Cross-References

| Topic             | Link                                                        |
| ----------------- | ----------------------------------------------------------- |
| Algorithm Design  | [View](/docs/university/computer-science/algorithm-design)  |
| Graph Algorithms  | [View](/docs/university/computer-science/graph-algorithms)  |
| Complexity Theory | [View](/docs/university/computer-science/complexity-theory) |
