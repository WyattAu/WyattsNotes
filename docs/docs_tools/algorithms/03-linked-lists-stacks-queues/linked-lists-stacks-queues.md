---
id: linked-lists-stacks-queues
title: Linked Lists, Stacks, and Queues
description:
  Linked list, stack, and queue fundamentals: singly and doubly linked lists,
  array-based queues, insertion, deletion, reversal, and cycle detection
  algorithms.
slug: linked-lists-stacks-queues
---

## Singly Linked Lists

A singly linked list is a sequence of nodes where each node contains a value and a reference to the
next node. The list is accessed through a head pointer; traversal requires following pointers from
the head.

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

### Insertion and Deletion

```python
def insert_at_head(head, val):
    """Insert at the head of the list. O(1)."""
    return ListNode(val, head)

def insert_at_tail(head, val):
    """Insert at the tail. O(n) without tail pointer, O(1) with tail pointer."""
    new_node = ListNode(val)
    if head is None:
        return new_node
    current = head
    while current.next:
        current = current.next
    current.next = new_node
    return head

def delete_node(head, val):
    """Delete the first node with the given value. O(n)."""
    if head is None:
        return None
    if head.val == val:
        return head.next
    current = head
    while current.next:
        if current.next.val == val:
            current.next = current.next.next
            return head
        current = current.next
    return head
```

:::info

The critical advantage of linked lists over arrays is $O(1)$ insertion and deletion at any known
position (given a pointer to the preceding node). The critical disadvantage is $O(n)$ random access
and poor cache locality. In practice, arrays dominate because cache effects matter more than
theoretical complexity for typical data sizes.

:::

### Reversal

```python
def reverse_linked_list(head):
    """
    Reverse a singly linked list iteratively.
    Time: O(n), Space: O(1)
    """
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev
```

```python
def reverse_recursive(head):
    """
    Reverse a singly linked list recursively.
    Time: O(n), Space: O(n) — recursion stack
    """
    if head is None or head.next is None:
        return head
    new_head = reverse_recursive(head.next)
    head.next.next = head
    head.next = None
    return new_head
```

### Cycle Detection (Floyd's Tortoise and Hare)

Floyd's algorithm uses two pointers moving at different speeds. If there is a cycle, the fast
pointer will eventually catch up to the slow pointer.

```python
def has_cycle(head):
    """
    Detect if a linked list has a cycle.
    Time: O(n), Space: O(1)
    """
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

def find_cycle_start(head):
    """
    Find the node where the cycle begins.
    Time: O(n), Space: O(1)
    """
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            # Reset slow to head, move both at speed 1
            slow = head
            while slow != fast:
                slow = slow.next
                fast = fast.next
            return slow
    return None
```

**Why this works:** Let $\mu$ be the distance from head to cycle start, and $\lambda$ be the cycle
length. When slow and fast meet, slow has travelled $\mu + a\lambda$ steps and fast has travelled
$\mu + a\lambda + b\lambda$ steps for some non-negative integers $a, b$. Since fast moves twice as
fast: $2(\mu + a\lambda) = \mu + a\lambda + b\lambda$, which gives $\mu = (b - a)\lambda$. So the
distance from the meeting point to the cycle start (going around the cycle) is exactly $\mu$ — the
same as the distance from head to cycle start.

### Fast and Slow Pointer Technique

Beyond cycle detection, the fast/slow pointer pattern is useful for:

```python
def find_middle(head):
    """
    Find the middle node of a linked list.
    If even length, returns the second middle node.
    Time: O(n), Space: O(1)
    """
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

def is_palindrome(head):
    """
    Check if a linked list is a palindrome.
    Time: O(n), Space: O(1)
    """
    if not head or not head.next:
        return True
    # Find middle
    slow = head
    fast = head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    # Reverse second half
    second_half = reverse_linked_list(slow.next)
    # Compare
    first = head
    second = second_half
    result = True
    while second:
        if first.val != second.val:
            result = False
            break
        first = first.next
        second = second.next
    # Restore (optional, but good practice)
    reverse_linked_list(second_half)
    return result
```

## Doubly Linked Lists

Each node has both a `next` and `prev` pointer.

```python
class DoublyListNode:
    def __init__(self, val=0, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next
```

Doubly linked lists support $O(1)$ deletion given a pointer to the node (no need to find the
predecessor) and reverse traversal. The trade-off is extra memory per node (one pointer) and more
complex insertion/deletion logic.

```python
def delete_doubly_node(node):
    """
    Delete a node from a doubly linked list given the node itself.
    Time: O(1)
    """
    if node.prev:
        node.prev.next = node.next
    if node.next:
        node.next.prev = node.prev
    node.prev = None
    node.next = None
```

## Skip Lists

A skip list is a probabilistic data structure that provides $O(\log n)$ expected-time search,
insertion, and deletion — the same asymptotic complexity as a balanced BST, but with simpler
implementation.

The structure consists of multiple levels of linked lists. The bottom level contains all elements.
Each higher level is a "fast lane" that contains a random subset of elements from the level below.

```python
import random

class SkipListNode:
    def __init__(self, val, levels):
        self.val = val
        self.forward = [None] * levels

class SkipList:
    """
    Probabilistic skip list.
    Expected time: O(log n) for search, insert, delete
    Space: O(n) expected
    """
    MAX_LEVEL = 16
    P = 0.5  # probability of promoting to next level

    def __init__(self):
        self.head = SkipListNode(float('-inf'), self.MAX_LEVEL)
        self.level = 1

    def _random_level(self):
        level = 1
        while random.random() < self.P and level < self.MAX_LEVEL:
            level += 1
        return level

    def search(self, target):
        current = self.head
        for i in range(self.level - 1, -1, -1):
            while current.forward[i] and current.forward[i].val < target:
                current = current.forward[i]
        current = current.forward[0]
        return current is not None and current.val == target

    def insert(self, val):
        update = [None] * self.MAX_LEVEL
        current = self.head
        for i in range(self.level - 1, -1, -1):
            while current.forward[i] and current.forward[i].val < val:
                current = current.forward[i]
            update[i] = current

        new_level = self._random_level()
        if new_level > self.level:
            for i in range(self.level, new_level):
                update[i] = self.head
            self.level = new_level

        new_node = SkipListNode(val, new_level)
        for i in range(new_level):
            new_node.forward[i] = update[i].forward[i]
            update[i].forward[i] = new_node
```

:::info

Skip lists are used in Redis (as the underlying data structure for sorted sets) and in the Linux
kernel (for process address space management). They are preferred over balanced BSTs in these
contexts because they are simpler to implement correctly in concurrent settings — insertion and
deletion only need to lock the nodes being modified, not the entire structure.

:::

## Stacks

A stack is a LIFO (Last In, First Out) data structure with two primary operations: `push` (add to
top) and `pop` (remove from top).

### Implementation

```python
class Stack:
    """
    Stack implemented with a dynamic array.
    All operations: O(1) amortised
    """
    def __init__(self):
        self.data = []

    def push(self, val):
        self.data.append(val)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self.data.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("peek at empty stack")
        return self.data[-1]

    def is_empty(self):
        return len(self.data) == 0

    def size(self):
        return len(self.data)
```

### Applications

**Expression Evaluation (Shunting-Yard Algorithm):**

Dijkstra's shunting-yard algorithm converts infix notation to postfix (Reverse Polish Notation),
which can then be evaluated with a simple stack-based algorithm.

```python
def evaluate_expression(expr):
    """
    Evaluate a simple arithmetic expression with +, -, *, /, (, ).
    Time: O(n), Space: O(n)
    """
    def precedence(op):
        if op in ('+', '-'):
            return 1
        if op in ('*', '/'):
            return 2
        return 0

    def apply_op(a, b, op):
        if op == '+': return a + b
        if op == '-': return a - b
        if op == '*': return a * b
        if op == '/': return a // b  # integer division

    values = []
    ops = []
    i = 0
    while i < len(expr):
        c = expr[i]
        if c == ' ':
            i += 1
            continue
        elif c.isdigit():
            val = 0
            while i < len(expr) and expr[i].isdigit():
                val = val * 10 + int(expr[i])
                i += 1
            values.append(val)
            continue
        elif c == '(':
            ops.append(c)
        elif c == ')':
            while ops and ops[-1] != '(':
                values.append(apply_op(values.pop(), values.pop(), ops.pop()))
            ops.pop()  # remove '('
        else:
            while ops and precedence(ops[-1]) >= precedence(c):
                values.append(apply_op(values.pop(), values.pop(), ops.pop()))
            ops.append(c)
        i += 1

    while ops:
        values.append(apply_op(values.pop(), values.pop(), ops.pop()))

    return values[0]
```

**Bracket Matching:**

```python
def is_valid_parentheses(s):
    """
    Check if brackets are properly matched and nested.
    Time: O(n), Space: O(n)
    """
    stack = []
    matching = {')': '(', ']': '[', '}': '{'}
    for c in s:
        if c in '([{':
            stack.append(c)
        elif c in ')]}':
            if not stack or stack[-1] != matching[c]:
                return False
            stack.pop()
    return len(stack) == 0
```

**Call Stack:**

Every recursive function call is pushed onto the call stack. Deep recursion can cause stack overflow
(the call stack has limited size, typically 1-8 MB). Iterative solutions using an explicit stack
avoid this limit.

## Queues

A queue is a FIFO (First In, First Out) data structure with `enqueue` (add to back) and `dequeue`
(remove from front) operations.

### Circular Buffer Implementation

```python
class CircularQueue:
    """
    Queue implemented as a circular buffer (ring buffer).
    All operations: O(1)
    Space: O(capacity)
    """
    def __init__(self, capacity):
        self.capacity = capacity
        self.data = [None] * capacity
        self.head = 0  # front of queue
        self.tail = 0  # one past the back of queue
        self.count = 0

    def enqueue(self, val):
        if self.count == self.capacity:
            raise IndexError("queue is full")
        self.data[self.tail] = val
        self.tail = (self.tail + 1) % self.capacity
        self.count += 1

    def dequeue(self):
        if self.is_empty():
            raise IndexError("dequeue from empty queue")
        val = self.data[self.head]
        self.head = (self.head + 1) % self.capacity
        self.count -= 1
        return val

    def peek(self):
        if self.is_empty():
            raise IndexError("peek at empty queue")
        return self.data[self.head]

    def is_empty(self):
        return self.count == 0

    def size(self):
        return self.count
```

:::info

Circular buffers are used pervasively in systems programming: ring buffers for network packet
queues, audio playback buffers, log rotation, producer-consumer patterns, and pipe implementations.
The key advantage is that enqueue and dequeue never require memory allocation or copying — they just
advance indices modulo the capacity.

:::

## Deques

A deque (double-ended queue) supports insertion and deletion at both ends in $O(1)$.

```python
from collections import deque

# Python's built-in deque — implemented as a doubly-linked list of fixed-size blocks
d = deque()
d.append(1)        # O(1) — enqueue back
d.appendleft(0)    # O(1) — enqueue front
d.pop()            # O(1) — dequeue back
d.popleft()        # O(1) — dequeue front
d[0]               # O(1) — access by index (slower than list for large deques)
```

## Priority Queues

A priority queue supports insertion of elements with associated priorities and extraction of the
minimum (or maximum) priority element. The standard implementation uses a binary heap.

### Binary Heap

A binary heap is a complete binary tree where every node is less than or equal to its children
(min-heap) or greater than or equal to its children (max-heap). Stored as an array where for node at
index $i$: parent is at $(i-1)/2$, left child is at $2i+1$, right child is at $2i+2$.

```python
class MinHeap:
    """
    Min-heap implementation.
    insert: O(log n), extract_min: O(log n), peek: O(1)
    Space: O(n)
    """
    def __init__(self):
        self.data = []

    def _parent(self, i):
        return (i - 1) // 2

    def _left(self, i):
        return 2 * i + 1

    def _right(self, i):
        return 2 * i + 2

    def _sift_up(self, i):
        while i > 0 and self.data[self._parent(i)] > self.data[i]:
            self.data[self._parent(i)], self.data[i] = self.data[i], self.data[self._parent(i)]
            i = self._parent(i)

    def _sift_down(self, i):
        n = len(self.data)
        while True:
            smallest = i
            left = self._left(i)
            right = self._right(i)
            if left < n and self.data[left] < self.data[smallest]:
                smallest = left
            if right < n and self.data[right] < self.data[smallest]:
                smallest = right
            if smallest == i:
                break
            self.data[i], self.data[smallest] = self.data[smallest], self.data[i]
            i = smallest

    def insert(self, val):
        self.data.append(val)
        self._sift_up(len(self.data) - 1)

    def extract_min(self):
        if not self.data:
            raise IndexError("extract from empty heap")
        min_val = self.data[0]
        self.data[0] = self.data[-1]
        self.data.pop()
        if self.data:
            self._sift_down(0)
        return min_val

    def peek(self):
        if not self.data:
            raise IndexError("peek at empty heap")
        return self.data[0]

    def heapify(self, arr):
        """Build a heap from an array. O(n)."""
        self.data = arr[:]
        for i in range(len(self.data) // 2 - 1, -1, -1):
            self._sift_down(i)
```

| Operation        | Binary Heap | Sorted Array  | Unsorted Array |
| ---------------- | ----------- | ------------- | -------------- |
| Insert           | $O(\log n)$ | $O(n)$        | $O(1)$         |
| Extract min      | $O(\log n)$ | $O(1)$        | $O(n)$         |
| Peek             | $O(1)$      | $O(1)$        | $O(n)$         |
| Build from array | $O(n)$      | $O(n \log n)$ | $O(1)$         |

## Monotonic Stack

A monotonic stack maintains elements in either strictly increasing or strictly decreasing order. It
is used to find the next greater/lesser element, previous greater/lesser element, and similar
patterns.

### Next Greater Element

```python
def next_greater_element(arr):
    """
    Find the next greater element for each element in the array.
    If no greater element exists, result is -1.
    Time: O(n), Space: O(n)
    """
    n = len(arr)
    result = [-1] * n
    stack = []  # stores indices; values are monotonically decreasing

    for i in range(n):
        while stack and arr[stack[-1]] < arr[i]:
            idx = stack.pop()
            result[idx] = arr[i]
        stack.append(i)

    return result
```

### Largest Rectangle in Histogram

```python
def largest_rectangle_histogram(heights):
    """
    Find the area of the largest rectangle in a histogram.
    Time: O(n), Space: O(n)
    """
    stack = []  # indices of bars in increasing height order
    max_area = 0
    n = len(heights)

    for i in range(n + 1):
        # Use height 0 as sentinel for remaining bars
        current_height = heights[i] if i < n else 0
        while stack and heights[stack[-1]] > current_height:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)

    return max_area
```

## Monotonic Queue

A monotonic queue (deque) maintains elements in monotonic order and is used for sliding window
maximum/minimum problems.

### Sliding Window Maximum

```python
from collections import deque

def sliding_window_maximum(arr, k):
    """
    Find the maximum in each sliding window of size k.
    Time: O(n), Space: O(k)
    """
    result = []
    dq = deque()  # stores indices; values are monotonically decreasing

    for i in range(len(arr)):
        # Remove elements outside the window
        while dq and dq[0] <= i - k:
            dq.popleft()

        # Remove elements smaller than current (they can never be the maximum)
        while dq and arr[dq[-1]] < arr[i]:
            dq.pop()

        dq.append(i)

        if i >= k - 1:
            result.append(arr[dq[0]])

    return result
```

:::info

The key insight is that elements smaller than the current element and to its left can never be the
maximum of any future window that includes the current element. Removing them from the deque
maintains the invariant that the deque contains a decreasing sequence of values, and the maximum is
always at the front.

:::

## Union-Find (Disjoint Set Union)

Union-Find is a data structure that tracks a partition of elements into disjoint sets, supporting
two operations: `find` (which set does an element belong to?) and `union` (merge two sets).

```python
class UnionFind:
    """
    Union-Find with path compression and union by rank.
    find: O(alpha(n)) amortised (inverse Ackermann, effectively O(1))
    union: O(alpha(n)) amortised
    Space: O(n)
    """
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.count = n  # number of disjoint sets

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # path compression
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x == root_y:
            return False
        # Union by rank
        if self.rank[root_x] < self.rank[root_y]:
            root_x, root_y = root_y, root_x
        self.parent[root_y] = root_x
        if self.rank[root_x] == self.rank[root_y]:
            self.rank[root_x] += 1
        self.count -= 1
        return True

    def connected(self, x, y):
        return self.find(x) == self.find(y)
```

### Time Complexity

The amortised time complexity of both `find` and `union` is $O(\alpha(n))$, where $\alpha$ is the
inverse Ackermann function. For all practical values of $n$ (up to $2^{2^{2^{65536}}}$),
$\alpha(n) \le 4$. This is effectively constant time.

The two optimisations work together:

- **Path compression**: During `find`, make every node on the path point directly to the root
- **Union by rank**: During `union`, attach the shorter tree under the root of the taller tree

Without either optimisation, `find` is $O(\log n)$ and `union` is $O(\log n)$. Without both, worst
case is $O(n)$.

### Applications

```python
def count_connected_components(n, edges):
    """
    Count connected components in an undirected graph.
    Time: O(n + m * alpha(n)), Space: O(n)
    where m = number of edges
    """
    uf = UnionFind(n)
    for u, v in edges:
        uf.union(u, v)
    return uf.count

def detect_cycle_undirected(n, edges):
    """
    Detect if an undirected graph has a cycle using Union-Find.
    Time: O(n + m * alpha(n)), Space: O(n)
    """
    uf = UnionFind(n)
    for u, v in edges:
        if uf.connected(u, v):
            return True
        uf.union(u, v)
    return False
```

## Common Pitfalls

### 1. Losing the Head Pointer

The most common linked list bug is modifying the head pointer (e.g., during insertion at head or
reversal) and losing the reference to the entire list. Always use a dummy head node or return the
new head explicitly. For operations that might modify the head, use:

```python
dummy = ListNode(0, head)
# ... operate on dummy.next ...
return dummy.next
```

### 2. Null Pointer Dereference in Linked List Operations

Always check for `None` before accessing `.next` or `.val`. The pattern
`while current and current.next` is safer than `while current` when you need to access
`current.next.val`. Edge cases: empty list, single-node list, and the last node of the list.

### 3. Using a Stack When a Queue Is Needed (or Vice Versa)

Stacks are LIFO, queues are FIFO. Using the wrong one produces incorrect results for
ordering-sensitive problems. BFS requires a queue; DFS can use either a stack or recursion.
Level-order traversal requires a queue. Expression evaluation uses a stack.

### 4. Forgetting to Handle the Sentinel in Monotonic Stack/Queue

Monotonic stack and queue algorithms often use a sentinel value (e.g., `0` for histogram heights,
`-infinity` for next greater element) to flush remaining elements from the data structure.
Forgetting the sentinel means elements at the end of the array are never processed.

### 5. Union-Find Without Path Compression

Without path compression, Union-Find degrades to $O(\log n)$ per operation. Without union by rank,
it degrades to $O(n)$ worst case. Always use both optimisations. The code overhead is minimal (3
extra lines) and the performance difference is enormous for large inputs.

### 6. Stack Overflow from Recursion Depth

Python's default recursion limit is 1000. For linked lists with more than 1000 nodes, recursive
solutions (recursive reversal, recursive palindrome check) will crash with `RecursionError`. Use
iterative solutions for production code, or increase the limit with `sys.setrecursionlimit()` if you
are certain the input size is bounded.

### 7. Priority Queue Inefficiency for Update Operations

Standard binary heaps do not support efficient decrease-key operations (common in Dijkstra's
algorithm). The workaround — insert a new entry and ignore stale entries — works but increases the
heap size. For algorithms that require frequent decrease-key, a Fibonacci heap provides $O(1)$
amortised decrease-key, but has large constant factors and is rarely used in practice.
