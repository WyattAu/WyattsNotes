---
title: Linked Lists
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: linked-lists
---

## 1. Introduction

### Definition

A **linked list** is a linear data structure where each element (called a **node**) contains data
and a reference (pointer) to the next node. Unlike arrays, elements are **not** stored contiguously
in memory.

### Node Structure

Each node contains:

1. **Data field(s)** — the stored value
2. **Pointer field(s)** — reference(s) to adjacent node(s)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

---

## 2. Singly Linked List

### Structure

Each node points to the next node. The list is accessed via a **head** pointer. The last node's
`next` is `None`.

```
head → [3|•] → [7|•] → [1|•] → [9|•] → None
```

### Insertion

#### Insert at Head

```python
def insert_head(head, value):
    new_node = Node(value)
    new_node.next = head
    return new_node
```

**Complexity:** $O(1)$ — only pointer reassignment.

**Correctness.** The new node's `next` points to the old head, so no elements are lost. The new node
becomes the new head, which is correct by definition of insertion at head. $\square$

#### Insert at Tail

```python
def insert_tail(head, value):
    new_node = Node(value)
    if head is None:
        return new_node
    current = head
    while current.next is not None:
        current = current.next
    current.next = new_node
    return head
```

**Complexity:** $O(n)$ — must traverse to the last node.

#### Insert at Position $k$

```python
def insert_at(head, value, k):
    if k == 0:
        return insert_head(head, value)
    new_node = Node(value)
    current = head
    for _ in range(k - 1):
        if current is None:
            raise IndexError("Position out of range")
        current = current.next
    new_node.next = current.next
    current.next = new_node
    return head
```

**Complexity:** $O(k)$ — traverse $k$ nodes to find the insertion point.

### Deletion

#### Delete Head

```python
def delete_head(head):
    if head is None:
        return None
    return head.next
```

**Complexity:** $O(1)$.

#### Delete by Value

```python
def delete_value(head, value):
    if head is None:
        return None
    if head.data == value:
        return head.next
    current = head
    while current.next is not None and current.next.data != value:
        current = current.next
    if current.next is not None:
        current.next = current.next.next
    return head
```

**Complexity:** $O(n)$ — worst case, traverse the entire list.

### Search

```python
def search(head, value):
    current = head
    index = 0
    while current is not None:
        if current.data == value:
            return index
        current = current.next
        index += 1
    return -1
```

**Complexity:** $O(n)$ worst case, $O(1)$ best case (element at head).

**Theorem.** Searching a singly linked list of $n$ elements requires $O(n)$ time.

**Proof.** In the worst case, the target is at the tail or absent. The algorithm visits every node
exactly once, performing $O(1)$ work per node. Total: $O(n)$. $\square$

---

## 3. Doubly Linked List

### Structure

Each node has two pointers: `next` and `prev`. The list is accessed via both `head` and `tail`
pointers.

```
None ← [3|•|•] ↔ [7|•|•] ↔ [1|•|•] ↔ [9|•|•] → None
         head                      tail
```

```python
class DNode:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None
```

### Insertion

```python
def dll_insert_after(node, value):
    new_node = DNode(value)
    new_node.next = node.next
    new_node.prev = node
    if node.next is not None:
        node.next.prev = new_node
    node.next = new_node
    return new_node
```

**Complexity:** $O(1)$ when the insertion node is known.

### Deletion

```python
def dll_delete(node):
    if node.prev is not None:
        node.prev.next = node.next
    if node.next is not None:
        node.next.prev = node.prev
    node.prev = None
    node.next = None
```

**Complexity:** $O(1)$ when the node to delete is known.

### Operations Summary

| Operation                    | Singly | Doubly |
| ---------------------------- | ------ | ------ |
| Insert at head               | $O(1)$ | $O(1)$ |
| Insert at tail (given tail)  | $O(1)$ | $O(1)$ |
| Insert at tail (no tail ptr) | $O(n)$ | $O(n)$ |
| Insert after node            | $O(1)$ | $O(1)$ |
| Insert before node           | $O(n)$ | $O(1)$ |
| Delete head                  | $O(1)$ | $O(1)$ |
| Delete tail (given tail)     | $O(n)$ | $O(1)$ |
| Delete given node            | $O(n)$ | $O(1)$ |
| Search by value              | $O(n)$ | $O(n)$ |
| Access by index              | $O(n)$ | $O(n)$ |

---

## 4. Linked Lists vs Arrays

### Formal Comparison

| Property          | Array                | Linked List         |
| ----------------- | -------------------- | ------------------- |
| Memory layout     | Contiguous           | Scattered           |
| Access by index   | $O(1)$               | $O(n)$              |
| Insert at head    | $O(n)$               | $O(1)$              |
| Insert at tail    | $O(1)$ amortised     | $O(1)$ with tail    |
| Insert at middle  | $O(n)$               | $O(1)$ given node   |
| Delete at head    | $O(n)$               | $O(1)$              |
| Delete at middle  | $O(n)$               | $O(1)$ given node   |
| Search            | $O(n)$ / $O(\log n)$ | $O(n)$              |
| Memory overhead   | None                 | Pointer(s) per node |
| Cache performance | Excellent            | Poor                |
| Memory allocation | Pre-allocated        | Per-node dynamic    |

### Cache Performance Analysis

**Theorem.** Array traversal is faster than linked list traversal due to spatial locality.

**Proof.** Array elements are stored contiguously, so accessing `A[i]` loads a cache line containing
`A[i]` through `A[i + k]` (where $k$ depends on cache line size and element size). Subsequent
accesses hit the cache.

Linked list nodes are scattered in memory, so each `next` pointer dereference is likely a **cache
miss** (probability approaches 1 as list size exceeds cache capacity). Each cache miss costs ~100
cycles vs ~1 cycle for a cache hit. $\square$

:::tip Exam tip When asked "when would you use a linked list instead of an array?", focus on:

- Frequent insertions/deletions at known positions
- Unknown or highly variable size
- When random access is not needed :::

---

## 5. Circular Linked List

### Definition

A **circular linked list** is a linked list where the last node points back to the first node
(instead of `None`).

```
head → [3|•] → [7|•] → [1|•] → [9|•] ↩
                ↑_______________________|
```

**Use cases:** Round-robin scheduling, circular buffers, implementation of queues.

**Traversal termination:** Must track the starting node explicitly, since there is no `None`
sentinel.

---

## 6. Sentinel Nodes

A **sentinel node** (dummy node) is a node placed at the head or tail of the list that does not
contain meaningful data. It eliminates edge cases (empty list, single element).

```python
def insert_sorted_with_sentinel(sentinel, value):
    new_node = Node(value)
    current = sentinel
    while current.next is not None and current.next.data < value:
        current = current.next
    new_node.next = current.next
    current.next = new_node
```

**Advantage:** No special case for inserting into an empty list — the sentinel always exists, and
its `next` points to the first real node (or `None` if the list is empty).

---

## Problem Set

**Problem 1.** Draw the singly linked list after inserting 5 at the head, then 3 at the head, then 8
at the tail, starting from an empty list.

<details>
<summary>Answer</summary>

Insert 5 at head: `head → [5|•] → None`

Insert 3 at head: `head → [3|•] → [5|•] → None`

Insert 8 at tail: `head → [3|•] → [5|•] → [8|•] → None`

</details>

**Problem 2.** Write a function to reverse a singly linked list in $O(n)$ time and $O(1)$ space.

<details>
<summary>Answer</summary>

```python
def reverse(head):
    prev = None
    current = head
    while current is not None:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev
```

**Correctness proof (invariant):** At the start of each iteration, `prev` points to the reversed
portion of the list, and `current` points to the remaining unprocessed portion. The loop processes
each node exactly once, redirecting its `next` to point to the previously processed node. After
processing all $n$ nodes, `prev` points to the head of the fully reversed list. $\square$

</details>

**Problem 3.** Explain why deleting the last node of a singly linked list takes $O(n)$ time, but
deleting the last node of a doubly linked list (with a tail pointer) takes $O(1)$ time.

<details>
<summary>Answer</summary>

In a singly linked list, to delete the last node you need to modify the `next` pointer of the
**second-to-last** node. But you cannot go backwards — you must traverse from the head to find it,
which takes $O(n)$.

In a doubly linked list with a tail pointer, the last node has a `prev` pointer directly to the
second-to-last node. You can access it in $O(1)$ and update both pointers.

</details>

**Problem 4.** A doubly linked list has nodes with 8 bytes of data and two 8-byte pointers. What is
the total memory used by a list of 100 nodes? Compare this to a dynamic array of 100 elements.

<details>
<summary>Answer</summary>

Linked list: Each node = 8 (data) + 8 (next) + 8 (prev) = 24 bytes. Total: $100 \times 24 = 2400$
bytes.

Dynamic array (assuming capacity ≈ 128, next power of 2): $128 \times 8 = 1024$ bytes (just data, no
per-element overhead).

The linked list uses $2400/1024 \approx 2.34\times$ more memory due to pointer overhead.

</details>

**Problem 5.** Prove that inserting a node after a given node in a doubly linked list takes $O(1)$
time.

<details>
<summary>Answer</summary>

The insertion requires exactly four pointer assignments:

1. `new_node.next = node.next`
2. `new_node.prev = node`
3. If `node.next` is not `None`: `node.next.prev = new_node`
4. `node.next = new_node`

Each assignment is $O(1)$. No traversal is needed. Total: $O(1)$. $\square$

</details>

**Problem 6.** Write a function to find the middle element of a singly linked list in a single pass.

<details>
<summary>Answer</summary>

```python
def find_middle(head):
    slow = head
    fast = head
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
    return slow.data if slow is not None else None
```

Uses the **two-pointer technique**: `slow` moves one step at a time, `fast` moves two. When `fast`
reaches the end, `slow` is at the middle. Time: $O(n)$, Space: $O(1)$.

</details>

**Problem 7.** A singly linked list may contain a cycle. Write a function to detect whether a cycle
exists.

<details>
<summary>Answer</summary>

```python
def has_cycle(head):
    slow = head
    fast = head
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False
```

**Floyd's Tortoise and Hare algorithm.** `slow` advances by 1, `fast` by 2. If a cycle exists, both
pointers eventually enter the cycle, and `fast` gains on `slow` by 1 per step. Since the cycle has
finite length, `fast` must eventually equal `slow`. Time: $O(n)$, Space: $O(1)$.

</details>

**Problem 8.** Explain the advantage of using a sentinel node in a linked list implementation.

<details>
<summary>Answer</summary>

A sentinel node eliminates special-case handling for:

- Inserting into an empty list (the sentinel's `next` is always valid)
- Deleting the head node (the sentinel's `next` always points to the first real node)
- Edge cases in sorted insertion

Without a sentinel, every insertion and deletion function must check if the list is empty or if the
operation affects the head. The sentinel ensures that the "node before" always exists, simplifying
the code and reducing bug potential.

</details>

**Problem 9.** Trace the reversal of the linked list `head → [1] → [2] → [3] → [4] → None` using the
iterative reverse algorithm. Show the state after each iteration.

<details>
<summary>Answer</summary>

Initial: `prev = None`, `current = [1] → [2] → [3] → [4] → None`

| Iteration | prev            | current         | next_node |
| --------- | --------------- | --------------- | --------- |
| 1         | None            | [1] → [2] → ... | [2] → ... |
| (after 1) | [1]             | [2] → [3] → ... | [3] → ... |
| (after 2) | [2]→[1]         | [3] → [4] → ... | [4] → ... |
| (after 3) | [3]→[2]→[1]     | [4] → None      | None      |
| (after 4) | [4]→[3]→[2]→[1] | None            | None      |

Result: `[4] → [3] → [2] → [1] → None`

</details>

**Problem 10.** A circular buffer can be implemented using either a fixed-size array or a circular
linked list. Compare the two approaches in terms of time complexity for enqueue and dequeue
operations, and memory usage.

<details>
<summary>Answer</summary>

| Property   | Array-based circular buffer    | Circular linked list             |
| ---------- | ------------------------------ | -------------------------------- |
| Enqueue    | $O(1)$                         | $O(1)$                           |
| Dequeue    | $O(1)$                         | $O(1)$                           |
| Memory     | Fixed, no per-element overhead | 1 pointer per node               |
| Max size   | Fixed at creation              | Dynamic (until memory exhausted) |
| Cache perf | Excellent (contiguous)         | Poor (scattered)                 |
| Overflow   | Possible (fixed size)          | Not possible                     |

The array implementation is preferred when the maximum size is known and memory efficiency matters.
The linked list is preferred when the size is highly variable.

For revision on queues, see
[Stacks and Queues](/docs/docs_ALevel-notes/computer-science/data-structures/03-stacks-and-queues).

</details>
