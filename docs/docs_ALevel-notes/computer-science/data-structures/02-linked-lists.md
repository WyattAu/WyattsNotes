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

:::info Board-specific

- **AQA** focuses on singly linked lists with pointer-based implementation (using `NULL` / `nil`
  pointers)
- **CIE (9618)** may require both singly and doubly linked lists
- **OCR (A)** links linked lists to stack and queue implementations (dynamic data structures)
- **Edexcel** covers basic singly linked list operations :::

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
[Stacks and Queues](/docs/docs_ALevel-notes/computer-science/data-structures/stacks-and-queues).

</details>

---

## Problems

**Problem 1.** Starting from the singly linked list `head → [2|•] → [7|•] → [4|•] → None`, draw the
list after each of these operations: (a) insert 9 at the head, (b) insert 5 between 7 and 4, (c)
delete the node containing 7.

<details>
<summary>Hint</summary>

Perform each operation step by step, updating one pointer at a time. For insertion between nodes,
you need to modify the `next` pointer of the preceding node.

</details>

<details>
<summary>Answer</summary>

(a) Insert 9 at head:

```
head → [9|•] → [2|•] → [7|•] → [4|•] → None
```

(b) Insert 5 between 7 and 4:

```
head → [9|•] → [2|•] → [7|•] → [5|•] → [4|•] → None
```

(c) Delete the node containing 7:

```
head → [9|•] → [2|•] → [5|•] → [4|•] → None
```

To delete 7: traverse to the node before 7 (which is the node containing 2), then set
`node.next = node.next.next` (i.e., point 2's `next` directly to 5).

</details>

**Problem 2.** Draw the state of a doubly linked list after deleting the node containing value 6.
The initial list is:

```
None ← [3|•|•] ↔ [8|•|•] ↔ [6|•|•] ↔ [1|•|•] → None
         head                      tail
```

Show the pointer changes required.

<details>
<summary>Hint</summary>

In a doubly linked list, deleting a node requires updating four pointers: the `next` of the previous
node and the `prev` of the next node.

</details>

<details>
<summary>Answer</summary>

To delete the node containing 6 (let's call it `D`):

- `D.prev.next = D.next` → node 8's `next` points to node 1
- `D.next.prev = D.prev` → node 1's `prev` points to node 8

Result:

```
None ← [3|•|•] ↔ [8|•|•] ↔ [1|•|•] → None
         head                      tail
```

The pointers of the deleted node (6) are set to `None` to avoid dangling references.

</details>

**Problem 3.** Trace the following operations on a singly linked list, showing the head pointer and
list contents after each step. Start with an empty list.

1. `insert_head(head, 10)` → head
2. `insert_head(head, 20)` → head
3. `insert_tail(head, 30)` → head
4. `insert_at(head, 15, 1)` → head (insert 15 at position 1)
5. `delete_value(head, 20)` → head

<details>
<summary>Hint</summary>

Go through each operation one at a time. For `insert_at`, position 1 means the second element
(0-indexed).

</details>

<details>
<summary>Answer</summary>

1. After `insert_head(10)`: `head → [10|•] → None`
2. After `insert_head(20)`: `head → [20|•] → [10|•] → None`
3. After `insert_tail(30)`: `head → [20|•] → [10|•] → [30|•] → None`
4. After `insert_at(15, 1)`: Traverse to position 0 (value 20), insert after it:
   `head → [20|•] → [15|•] → [10|•] → [30|•] → None`
5. After `delete_value(20)`: Head contains 20, so return `head.next`:
   `head → [15|•] → [10|•] → [30|•] → None`

Final list: 15, 10, 30.

</details>

**Problem 4.** Given the singly linked list `head → [5|•] → [12|•] → [3|•] → [8|•] → None`, trace
the `search` function looking for the value 3. How many nodes are visited? Repeat for searching for
value 9.

<details>
<summary>Hint</summary>

The search function starts at the head and visits each node sequentially, comparing the data field.

</details>

<details>
<summary>Answer</summary>

**Searching for 3:**

- Visit node 1: data = 5, 5 ≠ 3, move to next
- Visit node 2: data = 12, 12 ≠ 3, move to next
- Visit node 3: data = 3, 3 = 3 → found at index 2

Nodes visited: **3**. Best case would be 1 (value at head), worst case is 4 (value at tail or
absent).

**Searching for 9:**

- Visit node 1: data = 5, 5 ≠ 9
- Visit node 2: data = 12, 12 ≠ 9
- Visit node 3: data = 3, 3 ≠ 9
- Visit node 4: data = 8, 8 ≠ 9
- `current.next` is None → not found, return -1

Nodes visited: **4** (all nodes). This is the worst case for a list of 4 elements — $O(n)$.

</details>

**Problem 5.** Compare singly linked lists and doubly linked lists in terms of: (a) memory per node,
(b) time to insert at the tail (without a tail pointer), (c) time to insert before a given node, (d)
time to delete a given node (when you have a reference to it). Use Big-O notation.

<details>
<summary>Hint</summary>

Consider how many pointers each node stores and how that affects navigation. For (c), think about
whether you can go backwards in a singly linked list.

</details>

<details>
<summary>Answer</summary>

| Operation                            | Singly                                          | Doubly                                   |
| ------------------------------------ | ----------------------------------------------- | ---------------------------------------- |
| (a) Memory per node                  | $O(d + p)$ (1 pointer)                          | $O(d + 2p)$ (2 pointers)                 |
| (b) Insert at tail (no tail pointer) | $O(n)$ — traverse to end                        | $O(n)$ — must still traverse from head   |
| (c) Insert before a given node       | $O(n)$ — traverse from head to find predecessor | $O(1)$ — use `node.prev`                 |
| (d) Delete a given node (reference)  | $O(n)$ — need predecessor to update its `next`  | $O(1)$ — use `node.prev` and `node.next` |

Where $d$ is data size and $p$ is pointer size. The doubly linked list uses more memory per node (an
extra pointer) but provides $O(1)$ insertion before and deletion of a known node.

</details>

**Problem 6.** A programmer is implementing a music playlist. Songs can be added to the end, removed
from the beginning (when played), and the user can skip forward or backward one song at a time.
Should they use a singly or doubly linked list? Justify your answer.

<details>
<summary>Hint</summary>

The "skip backward" requirement is the key factor. Consider what operations each list type supports
efficiently.

</details>

<details>
<summary>Answer</summary>

A **doubly linked list** is the better choice.

The "skip backward" operation requires moving from the current song to the previous song. In a
singly linked list, there is no `prev` pointer, so going backward would require traversing from the
head — $O(n)$ per backward skip. In a doubly linked list, `current.prev` gives the previous song in
$O(1)$.

Other operations:

- Add to end: $O(1)$ with a tail pointer (both types)
- Remove from beginning: $O(1)$ (both types)
- Skip forward: $O(1)$ via `next` (both types)

The doubly linked list matches all requirements with $O(1)$ operations, while the singly linked list
would make backward skipping $O(n)$.

</details>

**Problem 7.** Each node in a singly linked list contains a 4-byte integer and one pointer (8 bytes
on a 64-bit system). What is the total memory used by a list of 50 nodes? What percentage of the
memory is used for data versus pointers? Compare this to a static array of 50 integers.

<details>
<summary>Hint</summary>

Calculate the size of one node (data + pointer), then multiply by 50. For the array, only the data
is stored.

</details>

<details>
<summary>Answer</summary>

Node size: $4 \text{ (data)} + 8 \text{ (pointer)} = 12$ bytes.

Total memory for 50 nodes: $50 \times 12 = 600$ bytes.

- Data memory: $50 \times 4 = 200$ bytes (33.3%)
- Pointer memory: $50 \times 8 = 400$ bytes (66.7%)

Static array of 50 integers: $50 \times 4 = 200$ bytes.

The linked list uses $600 / 200 = 3\times$ more memory than the array. Only one-third of the linked
list's memory stores actual data; the remaining two-thirds is pointer overhead.

</details>

**Problem 8.** Explain why dynamically allocating memory for each linked list node individually can
lead to memory fragmentation. How does this differ from array memory allocation?

<details>
<summary>Hint</summary>

Consider where each node is placed in memory relative to other nodes. Think about what happens after
many insertions and deletions.

</details>

<details>
<summary>Answer</summary>

Each linked list node is allocated individually on the heap using `malloc`/`new`. The memory
allocator places each node wherever free space is available, which may be scattered throughout the
heap. After many insertions and deletions, the heap becomes fragmented: small blocks of free memory
are interspersed with allocated blocks. Even if total free memory is sufficient, no single
contiguous block may be large enough for a new allocation.

Arrays, by contrast, are stored in a single contiguous block. A static array is allocated once and
stays in place. A dynamic array allocates a new contiguous block when resizing and frees the old
one. This means array access benefits from spatial locality (cache-friendly), while linked list
access causes cache misses because nodes are scattered.

In practice, this fragmentation and cache performance difference is why arrays outperform linked
lists for traversal-heavy workloads, despite having the same asymptotic complexity.

</details>

**Problem 9.** Write pseudocode for inserting a new node with value `V` at the **tail** of a singly
linked list that has a `tail` pointer. The algorithm must work correctly when the list is empty.

<details>
<summary>Hint</summary>

Handle the empty list as a special case (head and tail both become the new node). For a non-empty
list, update the current tail's `next` pointer and then update the tail pointer.

</details>

<details>
<summary>Answer</summary>

```
PROCEDURE InsertTail(head, tail, V)
    newNode = new Node(V)
    newNode.next = NULL
    IF head = NULL THEN
        head = newNode
        tail = newNode
    ELSE
        tail.next = newNode
        tail = newNode
    ENDIF
ENDPROCEDURE
```

**Correctness:**

- Empty list case: both `head` and `tail` point to the new node. The list has one element. ✓
- Non-empty case: the old tail's `next` now points to the new node (linking it in). The `tail`
  pointer is updated to the new node. The list grows by one element at the end. ✓

Time complexity: $O(1)$ — no traversal needed because the tail pointer is available.

</details>

**Problem 10.** (Exam-style) A hospital's A&E department needs a data structure to manage patient
records. Patients arrive and are added to the end of the queue. Patients are seen by a doctor and
removed from the front. Occasionally, a patient's condition deteriorates and they must be moved to
the front of the queue immediately. Evaluate whether a singly linked list or a dynamic array would
be more appropriate. Discuss the time complexity of each required operation for both data
structures.

<details>
<summary>Hint</summary>

Focus on the three key operations: add to end, remove from front, and move to front. Consider which
data structure supports each operation most efficiently.

</details>

<details>
<summary>Answer</summary>

Required operations and their complexities:

| Operation         | Dynamic Array                                     | Singly Linked List                           |
| ----------------- | ------------------------------------------------- | -------------------------------------------- |
| Add to end        | $O(1)$ amortised                                  | $O(1)$ with tail pointer                     |
| Remove from front | $O(n)$ — shift all elements                       | $O(1)$ — update head pointer                 |
| Move to front     | $O(n)$ — remove from middle + shift + insert at 0 | $O(n)$ — find node, remove, reinsert at head |

**Analysis:**

The singly linked list is the better choice. The critical operation is **remove from front**, which
the linked list handles in $O(1)$ (simply set `head = head.next`), while the dynamic array requires
shifting all remaining elements — $O(n)$ where $n$ could be hundreds of patients.

Both structures require $O(n)$ for "move to front" (must find the patient first), but the linked
list's removal step is simpler (just pointer updates, no shifting). The linked list also handles
"add to end" in $O(1)$ with a tail pointer.

The dynamic array's advantage of $O(1)$ random access is irrelevant here — patients are always
processed in queue order. The linked list's lack of contiguous memory is not a concern since we are
not doing traversal-heavy work.

**Conclusion:** A singly linked list (with head and tail pointers) is the most appropriate data
structure, as its $O(1)$ dequeue operation is essential for the high-frequency "remove from front"
operation in a busy A&E department.

</details>
