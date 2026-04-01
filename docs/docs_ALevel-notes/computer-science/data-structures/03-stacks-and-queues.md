---
title: Stacks and Queues
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: stacks-and-queues
---

## 1. Stacks (LIFO)

### Definition

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle: the
most recently added element is the first to be removed.

### Abstract Data Type

| Operation   | Description                             | Time   |
| ----------- | --------------------------------------- | ------ |
| `push(x)`   | Add element $x$ to the top              | $O(1)$ |
| `pop()`     | Remove and return the top element       | $O(1)$ |
| `peek()`    | Return the top element without removing | $O(1)$ |
| `isEmpty()` | Check if the stack is empty             | $O(1)$ |
| `size()`    | Return the number of elements           | $O(1)$ |

### Array-Based Implementation

```python
class ArrayStack:
    def __init__(self, capacity=100):
        self._data = [None] * capacity
        self._top = -1
        self._capacity = capacity

    def push(self, value):
        if self._top == self._capacity - 1:
            raise Exception("Stack overflow")
        self._top += 1
        self._data[self._top] = value

    def pop(self):
        if self._top == -1:
            raise Exception("Stack underflow")
        value = self._data[self._top]
        self._top -= 1
        return value

    def peek(self):
        if self._top == -1:
            raise Exception("Stack is empty")
        return self._data[self._top]

    def is_empty(self):
        return self._top == -1

    def size(self):
        return self._top + 1
```

**Theorem.** All stack operations run in $O(1)$ time with an array-based implementation.

**Proof.** `push` and `pop` each perform one index update and one array access — both $O(1)$.
`peek`, `isEmpty`, and `size` each inspect a single variable. $\square$

### Linked List-Based Implementation

```python
class LinkedListStack:
    def __init__(self):
        self._head = None
        self._size = 0

    def push(self, value):
        new_node = Node(value)
        new_node.next = self._head
        self._head = new_node
        self._size += 1

    def pop(self):
        if self._head is None:
            raise Exception("Stack underflow")
        value = self._head.data
        self._head = self._head.next
        self._size -= 1
        return value

    def peek(self):
        if self._head is None:
            raise Exception("Stack is empty")
        return self._head.data
```

:::tip Exam tip Stack push/pop always operate at the **head** of the linked list (not the tail) for
$O(1)$ time. Pushing at the tail would require traversal. :::

---

## 2. Queues (FIFO)

### Definition

A **queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle:
the earliest added element is the first to be removed.

### Abstract Data Type

| Operation    | Description                               | Time   |
| ------------ | ----------------------------------------- | ------ |
| `enqueue(x)` | Add element $x$ to the rear               | $O(1)$ |
| `dequeue()`  | Remove and return the front element       | $O(1)$ |
| `front()`    | Return the front element without removing | $O(1)$ |
| `isEmpty()`  | Check if the queue is empty               | $O(1)$ |

### Circular Array Implementation

A **circular buffer** avoids the $O(n)$ cost of shifting elements when using a simple array.

```python
class CircularQueue:
    def __init__(self, capacity):
        self._data = [None] * capacity
        self._front = 0
        self._rear = 0
        self._size = 0
        self._capacity = capacity

    def enqueue(self, value):
        if self._size == self._capacity:
            raise Exception("Queue full")
        self._data[self._rear] = value
        self._rear = (self._rear + 1) % self._capacity
        self._size += 1

    def dequeue(self):
        if self._size == 0:
            raise Exception("Queue empty")
        value = self._data[self._front]
        self._front = (self._front + 1) % self._capacity
        self._size -= 1
        return value

    def front(self):
        if self._size == 0:
            raise Exception("Queue empty")
        return self._data[self._front]
```

**Theorem.** Circular array queue operations run in $O(1)$ time.

**Proof.** `enqueue` writes to `_data[_rear]` and updates `_rear` with modular arithmetic — both
$O(1)$. `dequeue` reads from `_data[_front]` and updates `_front` — both $O(1)$. No shifting of
elements is required. $\square$

### Linked List Implementation

```python
class LinkedListQueue:
    def __init__(self):
        self._head = None
        self._tail = None
        self._size = 0

    def enqueue(self, value):
        new_node = Node(value)
        if self._tail is None:
            self._head = self._tail = new_node
        else:
            self._tail.next = new_node
            self._tail = new_node
        self._size += 1

    def dequeue(self):
        if self._head is None:
            raise Exception("Queue empty")
        value = self._head.data
        self._head = self._head.next
        if self._head is None:
            self._tail = None
        self._size -= 1
        return value
```

---

## 3. Applications of Stacks

### 3.1 Function Call Stack

When a function is called, a **stack frame** is pushed containing:

- Return address
- Local variables
- Parameters
- Saved registers

When the function returns, the frame is popped. This implements recursion naturally.

### 3.2 Expression Evaluation: Reverse Polish Notation (RPN)

**Definition.** **Reverse Polish Notation (RPN)** (postfix notation) places operators after their
operands. No parentheses are needed because the order of operations is unambiguous.

Examples: `3 4 +` (= 7), `5 1 2 + 4 * + 3 -` (= 14)

#### RPN Evaluation Algorithm

**Algorithm.** Given a list of RPN tokens:

1. Create an empty stack
2. For each token $t$:
   - If $t$ is an operand: `push(t)`
   - If $t$ is an operator $\oplus$: pop $b$, pop $a$, compute $a \oplus b$, `push(result)`
3. The result is the single value remaining on the stack

```python
def evaluate_rpn(tokens):
    stack = []
    for token in tokens:
        if token in '+-*/':
            b = stack.pop()
            a = stack.pop()
            if token == '+':
                stack.append(a + b)
            elif token == '-':
                stack.append(a - b)
            elif token == '*':
                stack.append(a * b)
            elif token == '/':
                stack.append(a / b)
        else:
            stack.append(float(token))
    return stack[0]
```

**Correctness proof.** We prove by induction on the number of tokens processed.

_Invariant._ After processing $k$ tokens, the stack contains the values of all sub-expressions that
have been fully read but whose results have not yet been consumed by a parent operator. The stack
bottom corresponds to the leftmost unprocessed sub-expression.

_Base case._ $k = 0$: stack is empty. The invariant holds trivially.

_Inductive step._ Assume the invariant holds after $k$ tokens.

- If token $k+1$ is an operand $v$: it starts a new sub-expression. Pushing $v$ adds it as an
  unprocessed sub-expression. The invariant holds.
- If token $k+1$ is an operator $\oplus$: by the definition of valid RPN, the top two stack entries
  are the operands $a$ and $b$ for this operator (this follows from the well-formedness of RPN
  expressions). Popping them, computing $a \oplus b$, and pushing the result replaces the two
  sub-expressions with their combined result. The invariant holds.

_Termination._ After processing all $n$ tokens of a valid RPN expression, exactly one value remains
— the value of the entire expression. $\square$

**Complexity.** Each token is processed once: $O(n)$ time, $O(n)$ space (stack depth).

<details>
<summary>Example: Evaluate `5 1 2 + 4 * + 3 -`</summary>

| Token | Stack (bottom → top) | Action                      |
| ----- | -------------------- | --------------------------- |
| 5     | [5]                  | Push 5                      |
| 1     | [5, 1]               | Push 1                      |
| 2     | [5, 1, 2]            | Push 2                      |
| +     | [5, 3]               | Pop 2, 1; push 1 + 2 = 3    |
| 4     | [5, 3, 4]            | Push 4                      |
| \*    | [5, 12]              | Pop 4, 3; push 3 × 4 = 12   |
| +     | [17]                 | Pop 12, 5; push 5 + 12 = 17 |
| 3     | [17, 3]              | Push 3                      |
| -     | [14]                 | Pop 3, 17; push 17 - 3 = 14 |

Result: 14 ✓

Verification: $5 + ((1 + 2) \times 4) - 3 = 5 + 12 - 3 = 14$ ✓

</details>

### 3.3 Infix to Postfix Conversion (Shunting-Yard Algorithm)

**Algorithm (Dijkstra's Shunting-Yard):**

1. Create an output queue and an operator stack
2. For each token $t$:
   - If $t$ is an operand: enqueue to output
   - If $t$ is `(`: push to stack
   - If $t$ is `)`: pop from stack to output until `(` is found; discard `(`
   - If $t$ is an operator $\oplus$: while stack is non-empty and top of stack is an operator $\psi$
     with precedence($\psi$) $\geq$ precedence($\oplus$), pop $\psi$ to output. Then push $\oplus$.
3. Pop all remaining operators to output

<details>
<summary>Example: Convert `(3 + 4) * 5` to RPN</summary>

| Token | Output Queue   | Operator Stack | Action                        |
| ----- | -------------- | -------------- | ----------------------------- |
| (     |                | (              | Push (                        |
| 3     | 3              | (              | Enqueue 3                     |
| +     | 3              | (, +           | Push + (precedence, ( blocks) |
| 4     | 3, 4           | (, +           | Enqueue 4                     |
| )     | 3, 4, +        |                | Pop until (                   |
| \*    | 3, 4, +        | \*             | Push \*                       |
| 5     | 3, 4, +, 5     | \*             | Enqueue 5                     |
| end   | 3, 4, +, 5, \* |                | Pop remaining                 |

Result: `3 4 + 5 *` ✓

</details>

---

## 4. Applications of Queues

### 4.1 Breadth-First Search

BFS uses a queue to explore nodes level by level (see
[Graphs](/docs/docs_ALevel-notes/computer-science/data-structures/graphs)).

### 4.2 Print Queue / Task Scheduling

Operating systems use queues to manage print jobs, CPU scheduling (round-robin), and event handling.

### 4.3 Buffering

Queues buffer data between producers and consumers operating at different speeds (e.g., keyboard
buffer, network packet buffer).

---

## 5. Priority Queues

### Definition

A **priority queue** is a queue where each element has an associated priority, and elements are
dequeued in priority order (highest first, or lowest first).

### Implementation Options

| Implementation | Insert           | Extract-Max      | Notes                       |
| -------------- | ---------------- | ---------------- | --------------------------- |
| Unsorted array | $O(1)$           | $O(n)$           | Insert at end, scan for max |
| Sorted array   | $O(n)$           | $O(1)$           | Maintain sorted order       |
| Linked list    | $O(1)$ or $O(n)$ | $O(1)$ or $O(n)$ | Depends on approach         |
| Binary heap    | $O(\log n)$      | $O(\log n)$      | Optimal for general use     |

---

## 6. Stack vs Queue Comparison

| Property  | Stack                | Queue                      |
| --------- | -------------------- | -------------------------- |
| Principle | LIFO                 | FIFO                       |
| Insert    | push (top)           | enqueue (rear)             |
| Remove    | pop (top)            | dequeue (front)            |
| Peek      | top element          | front element              |
| Use cases | Recursion, undo, RPN | BFS, scheduling, buffering |

---

## Problem Set

**Problem 1.** A stack initially contains `[10, 20, 30]` (30 on top). After the operations
`push(40)`, `pop()`, `push(50)`, `pop()`, `pop()`, what is on the stack?

<details>
<summary>Answer</summary>

Initial: `[10, 20, 30]` (top = 30)

- `push(40)`: `[10, 20, 30, 40]`
- `pop()` → 40: `[10, 20, 30]`
- `push(50)`: `[10, 20, 30, 50]`
- `pop()` → 50: `[10, 20, 30]`
- `pop()` → 30: `[10, 20]`

Stack: `[10, 20]` (20 on top)

</details>

**Problem 2.** A queue initially contains `[10, 20, 30]` (front = 10). After `enqueue(40)`,
`dequeue()`, `enqueue(50)`, `dequeue()`, what remains?

<details>
<summary>Answer</summary>

Initial: front → [10, 20, 30] → rear

- `enqueue(40)`: [10, 20, 30, 40]
- `dequeue()` → 10: [20, 30, 40]
- `enqueue(50)`: [20, 30, 40, 50]
- `dequeue()` → 20: [30, 40, 50]

Queue: [30, 40, 50] (front = 30)

</details>

**Problem 3.** Evaluate the RPN expression: `2 3 1 * + 9 -`

<details>
<summary>Answer</summary>

| Token | Stack     | Action                    |
| ----- | --------- | ------------------------- |
| 2     | [2]       | Push 2                    |
| 3     | [2, 3]    | Push 3                    |
| 1     | [2, 3, 1] | Push 1                    |
| \*    | [2, 3]    | Pop 1, 3; push 3 × 1 = 3  |
| +     | [5]       | Pop 3, 2; push 2 + 3 = 5  |
| 9     | [5, 9]    | Push 9                    |
| -     | [-4]      | Pop 9, 5; push 5 - 9 = -4 |

Result: -4 ✓

Check: $2 + (3 \times 1) - 9 = 2 + 3 - 9 = -4$ ✓

</details>

**Problem 4.** Convert the infix expression `A + B * C - D` to RPN using the shunting-yard
algorithm.

<details>
<summary>Answer</summary>

Precedence: `*` > `+`, `-`

| Token | Output            | Stack | Action                                  |
| ----- | ----------------- | ----- | --------------------------------------- |
| A     | A                 |       | Enqueue A                               |
| +     | A                 | +     | Push +                                  |
| B     | A, B              | +     | Enqueue B                               |
| \*    | A, B              | +, \* | Push \* (higher precedence)             |
| C     | A, B, C           | +, \* | Enqueue C                               |
| -     | A, B, C, \*       | -     | Pop \* (≥ prec), pop + (≥ prec), push - |
| D     | A, B, C, \*, D    | -     | Enqueue D                               |
| end   | A, B, C, \*, D, - |       | Pop remaining                           |

Result: `A B C * + D -` ✓

Check: $(A + (B \times C)) - D$

</details>

**Problem 5.** Prove that a stack can be used to check for balanced parentheses in a string in
$O(n)$ time.

<details>
<summary>Answer</summary>

**Algorithm:** Push `(` onto the stack; for each `)`, pop and check that the stack is non-empty. At
the end, the stack must be empty.

**Correctness proof.** We prove that the algorithm returns "balanced" if and only if the parentheses
are balanced.

(_If_) Suppose the parentheses are balanced. Then every `)` matches a previous `(`. By the
well-formedness of balanced parentheses, when we encounter a `)`, there is always a matching `(` on
the stack (otherwise the prefix would have more `)` than `(`, contradicting balance). At the end,
all `(` have been matched, so the stack is empty.

(_Only if_) Suppose the algorithm returns "balanced" (stack empty at end, no underflow). No
underflow means every `)` matched a previous `(`. Empty stack means every `(` was matched. Hence the
string is balanced. $\square$

Time: $O(n)$ — one pass through the string. Space: $O(n)$ — stack depth.

</details>

**Problem 6.** Implement a queue using two stacks. Show that `enqueue` is $O(1)$ and `dequeue` is
amortised $O(1)$.

<details>
<summary>Answer</summary>

```python
class StackQueue:
    def __init__(self):
        self._in_stack = []
        self._out_stack = []

    def enqueue(self, value):
        self._in_stack.append(value)

    def dequeue(self):
        if not self._out_stack:
            while self._in_stack:
                self._out_stack.append(self._in_stack.pop())
        return self._out_stack.pop()
```

`enqueue`: $O(1)$ — push onto `in_stack`.

`dequeue`: If `out_stack` is non-empty, $O(1)$. If empty, transfer all $n$ elements from `in_stack`
to `out_stack` ($O(n)$), then pop ($O(1)$). Each element is transferred at most once per
`enqueue`/`dequeue` pair, so the amortised cost per `dequeue` is $O(1)$.

**Amortised proof.** Over a sequence of $n$ operations, each element is pushed to `in_stack` once
($O(1)$), transferred to `out_stack` at most once ($O(1)$ amortised), and popped from `out_stack`
once ($O(1)$). Total: $O(n)$ for $n$ operations → $O(1)$ amortised per operation. $\square$

</details>

**Problem 7.** Explain why a stack is the appropriate data structure for undo functionality in a
text editor.

<details>
<summary>Answer</summary>

Each action in the editor (typing, deleting, formatting) can be represented as a state change. When
the user performs "undo", we need to reverse the **most recent** action — this is exactly LIFO
behaviour. Pushing each action onto a stack and popping on undo naturally reverses actions in the
correct order. A queue would undo the **oldest** action first, which is not the desired behaviour.

</details>

**Problem 8.** A circular queue has capacity 5. Show the state of the queue (front, rear, size, and
array contents) after each operation: `enqueue(1)`, `enqueue(2)`, `dequeue()`, `enqueue(3)`,
`enqueue(4)`, `enqueue(5)`, `dequeue()`, `enqueue(6)`.

<details>
<summary>Answer</summary>

| Operation  | front | rear | size | Array contents (indices 0-4) |
| ---------- | ----- | ---- | ---- | ---------------------------- |
| Initial    | 0     | 0    | 0    | [_, _, _, _, _]              |
| enqueue(1) | 0     | 1    | 1    | [1, _, _, _, _]              |
| enqueue(2) | 0     | 2    | 2    | [1, 2, _, _, _]              |
| dequeue()  | 1     | 2    | 1    | [_, 2, _, _, _]              |
| enqueue(3) | 1     | 3    | 2    | [_, 2, 3, _, _]              |
| enqueue(4) | 1     | 4    | 3    | [_, 2, 3, 4, _]              |
| enqueue(5) | 1     | 0    | 4    | [5, 2, 3, 4, _]              |
| dequeue()  | 2     | 0    | 3    | [5, _, 3, 4, _]              |
| enqueue(6) | 2     | 1    | 4    | [5, 6, 3, 4, _]              |

Note: rear wraps around using `(rear + 1) % capacity`.

</details>

**Problem 9.** Write a function that uses a stack to reverse the order of elements in a queue.

<details>
<summary>Answer</summary>

```python
def reverse_queue(queue):
    stack = []
    while not queue.is_empty():
        stack.append(queue.dequeue())
    while stack:
        queue.enqueue(stack.pop())
```

**Correctness.** Dequeuing all elements and pushing them onto a stack reverses the order (LIFO).
Then popping all elements and enqueuing them places them in the queue in the reversed order. Time:
$O(n)$, Space: $O(n)$.

</details>

**Problem 10.** Prove that any valid RPN expression with $n$ operands and $n-1$ binary operators
evaluates to exactly one value (the stack has exactly one element at the end).

<details>
<summary>Answer</summary>

**Proof by induction on $n$ (number of operands).**

_Base case._ $n = 1$: The expression is a single operand. After processing, the stack has one
element. ✓

_Inductive step._ Assume the claim holds for all expressions with $k$ operands ($k \geq 1$).
Consider an expression with $k + 1$ operands. In a valid RPN expression, there exists a first
operator $\oplus$ that, when processed, reduces the stack by one (pops 2, pushes 1). Before this
operator, some prefix of the expression has evaluated to a stack with at least 2 elements. The
prefix before $\oplus$ is a valid sub-expression with $m$ operands and $m - 1$ operators (for some
$m \geq 2$), and by the inductive hypothesis evaluates to exactly $m$ values — but we need exactly 2
values before $\oplus$.

More cleanly: let $f(n)$ be the net change in stack size after processing $n$ operands and $n - 1$
operators. Each operand adds 1, each operator subtracts 1 (pops 2, pushes 1). Net:
$n - (n - 1) = 1$. Starting from an empty stack, the final stack size is $0 + 1 = 1$. $\square$

For revision on complexity analysis, see
[Complexity Analysis](/docs/docs_ALevel-notes/computer-science/algorithms/complexity-analysis).

</details>
