---
title: Stacks and Queues
description:
  A-Level Computer Science notes on Stacks and Queues: 1. Stacks (LIFO);
  Definition; Abstract Data Type; Array-Based Implementation.
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
$O(1)$ time. Pushing at the tail would require traversal.
:::

<hr />

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

:::info Board-specific

- **AQA** requires both array-based and pointer-based (linked list) implementations
- **CIE (9618)** requires understanding of stack and queue operations; may specify pointer-based
  implementations
- **OCR (A)** requires linear and circular queue implementations (array-based), plus linked list
  implementations
- **Edexcel** covers stack and queue ADTs with pseudocode
:::

<hr />

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

<hr />

## 4. Applications of Queues

### 4.1 Breadth-First Search

BFS uses a queue to explore nodes level by level (see
[Graphs](/docs/alevel/computer-science/data-structures/graphs)).

### 4.2 Print Queue / Task Scheduling

Operating systems use queues to manage print jobs, CPU scheduling (round-robin), and event handling.

### 4.3 Buffering

Queues buffer data between producers and consumers operating at different speeds (e.g., keyboard
buffer, network packet buffer).

<hr />

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

<hr />

## 6. Stack vs Queue Comparison

| Property  | Stack                | Queue                      |
| --------- | -------------------- | -------------------------- |
| Principle | LIFO                 | FIFO                       |
| Insert    | push (top)           | enqueue (rear)             |
| Remove    | pop (top)            | dequeue (front)            |
| Peek      | top element          | front element              |
| Use cases | Recursion, undo, RPN | BFS, scheduling, buffering |

<hr />

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
[Complexity Analysis](/docs/alevel/computer-science/algorithms/complexity-analysis).

</details>

<hr />

## Problems

**Problem 1.** A stack is initially empty. Perform the following operations in order and show the
stack contents after each: `push(5)`, `push(12)`, `push(3)`, `pop()`, `push(8)`, `pop()`, `pop()`,
`push(1)`. What are the values returned by each `pop()` operation?

<details>
<summary>Hint</summary>

Remember that a stack is LIFO — the last element pushed is the first one popped. Track the stack as
a list with the top at the right.

</details>

<details>
<summary>Answer</summary>

| Operation | Stack (top on right) | Value returned |
| --------- | -------------------- | -------------- |
| push(5)   | [5]                  | —              |
| push(12)  | [5, 12]              | —              |
| push(3)   | [5, 12, 3]           | —              |
| pop()     | [5, 12]              | 3              |
| push(8)   | [5, 12, 8]           | —              |
| pop()     | [5, 12]              | 8              |
| pop()     | [5]                  | 12             |
| push(1)   | [5, 1]               | —              |

Values returned by `pop()` in order: **3, 8, 12**.

Final stack: `[5, 1]` (1 on top).

</details>

**Problem 2.** A stack initially contains `[2, 7, 1, 9]` (9 on top). After performing `pop()`,
`push(pop() + peek())`, what is on the stack? Show each sub-step.

<details>
<summary>Hint</summary>

Evaluate the expression inside `push()` first. `pop()` removes and returns the top element. `peek()`
returns the top without removing it.

</details>

<details>
<summary>Answer</summary>

Initial: `[2, 7, 1, 9]` (top = 9)

Step 1 — `pop()`: removes 9, stack becomes `[2, 7, 1]`. Returns 9.

Step 2 — evaluate `pop() + peek()`:

- `pop()` removes 1, stack becomes `[2, 7]`. Returns 1.
- `peek()` returns 7 (top of stack, stack unchanged: `[2, 7]`).
- Result: $1 + 7 = 8$.

Step 3 — `push(8)`: stack becomes `[2, 7, 8]`.

Final stack: **`[2, 7, 8]`** (8 on top).

</details>

**Problem 3.** A queue initially contains `[5, 10, 15, 20]` (front = 5). Perform `dequeue()`,
`enqueue(25)`, `dequeue()`, `enqueue(30)`, `dequeue()`. What remains in the queue?

<details>
<summary>Hint</summary>

A queue is FIFO — elements are removed from the front and added at the rear.

</details>

<details>
<summary>Answer</summary>

| Operation   | Queue (front → rear) | Value returned |
| ----------- | -------------------- | -------------- |
| Initial     | [5, 10, 15, 20]      | —              |
| dequeue()   | [10, 15, 20]         | 5              |
| enqueue(25) | [10, 15, 20, 25]     | —              |
| dequeue()   | [15, 20, 25]         | 10             |
| enqueue(30) | [15, 20, 25, 30]     | —              |
| dequeue()   | [20, 25, 30]         | 15             |

Final queue: **`[20, 25, 30]`** (front = 20).

</details>

**Problem 4.** A circular queue has capacity 4. Trace the following operations, showing `front`,
`rear`, `size`, and the array contents after each step: `enqueue(7)`, `enqueue(3)`, `enqueue(9)`,
`dequeue()`, `dequeue()`, `enqueue(5)`, `enqueue(1)`, `enqueue(8)`. What happens on the last
operation?

<details>
<summary>Hint</summary>

Remember that `rear = (rear + 1) % capacity` and `front = (front + 1) % capacity`. The queue is full
when `size == capacity`.

</details>

<details>
<summary>Answer</summary>

| Operation  | front | rear | size | Array [0, 1, 2, 3] |
| ---------- | ----- | ---- | ---- | ------------------ |
| enqueue(7) | 0     | 1    | 1    | [7, _, _, _]       |
| enqueue(3) | 0     | 2    | 2    | [7, 3, _, _]       |
| enqueue(9) | 0     | 3    | 3    | [7, 3, 9, _]       |
| dequeue()  | 1     | 3    | 2    | [_, 3, 9, _]       |
| dequeue()  | 2     | 3    | 1    | [_, _, 9, _]       |
| enqueue(5) | 2     | 0    | 2    | [5, _, 9, _]       |
| enqueue(1) | 2     | 1    | 3    | [5, 1, 9, _]       |
| enqueue(8) | 2     | 2    | 4    | [5, 1, 9, 8]       |

The last operation (`enqueue(8)`) succeeds. The queue is now **full** (size = capacity = 4). The
`rear` wraps around: $(1 + 1) \% 4 = 2$. Note that `rear` now equals `front`, but the queue is not
empty — we use the `size` variable to distinguish full from empty.

</details>

**Problem 5.** Compare the array-based and linked-list-based implementations of a stack in terms of:
(a) push/pop time complexity, (b) maximum size, (c) memory overhead per element, (d) cache
performance. Give a specific scenario where each implementation is preferable.

<details>
<summary>Hint</summary>

Both implementations have the same asymptotic complexity for push/pop, but they differ in practical
performance and memory characteristics.

</details>

<details>
<summary>Answer</summary>

| Property              | Array-based            | Linked-list-based      |
| --------------------- | ---------------------- | ---------------------- |
| (a) Push/Pop time     | $O(1)$                 | $O(1)$                 |
| (b) Maximum size      | Fixed at creation      | Limited only by memory |
| (c) Memory overhead   | None per element       | One pointer (8 bytes)  |
| (d) Cache performance | Excellent (contiguous) | Poor (scattered nodes) |

**Array-based preferable:** When the maximum stack depth is known in advance (e.g., recursion depth
in a parser with known grammar). The contiguous memory layout gives better cache performance, and
there is no per-element pointer overhead.

**Linked-list-based preferable:** When the maximum stack depth is unpredictable and could be very
large (e.g., a web browser's back-navigation stack that grows with user browsing). No need to
pre-allocate a large array, and no risk of stack overflow from a fixed capacity.

</details>

**Problem 6.** A queue is implemented using a simple (non-circular) array where `enqueue` adds at
`rear` and `dequeue` removes from `front`, shifting all remaining elements left by one. What is the
time complexity of `enqueue` and `dequeue`? Explain why this implementation is inefficient for large
queues.

<details>
<summary>Hint</summary>

Consider how many elements need to be moved when dequeuing from the front of a non-circular array.

</details>

<details>
<summary>Answer</summary>

- `enqueue`: $O(1)$ — add element at index `rear`, increment `rear`.
- `dequeue`: $O(n)$ — remove element at index `front`, then shift elements `front+1` through
  `rear-1` one position left.

**Why inefficient:** After dequeuing, every remaining element must be shifted. For a queue of $n$
elements, dequeue performs $n-1$ assignments. If $n$ is large (e.g., a print queue with 10,000
jobs), each dequeue is expensive. Over $m$ operations, the total cost is $O(m \cdot n)$ in the worst
case.

A circular array eliminates this by using modular arithmetic: `front = (front + 1) % capacity`,
making both enqueue and dequeue $O(1)$ without any shifting.

</details>

**Problem 7.** Evaluate the RPN expression `6 2 3 + * 4 -`. Show the stack after each token is
processed.

<details>
<summary>Hint</summary>

Process each token left to right. Operands are pushed; operators pop two operands, compute, and push
the result.

</details>

<details>
<summary>Answer</summary>

| Token | Stack (bottom → top) | Action                      |
| ----- | -------------------- | --------------------------- |
| 6     | [6]                  | Push 6                      |
| 2     | [6, 2]               | Push 2                      |
| 3     | [6, 2, 3]            | Push 3                      |
| +     | [6, 5]               | Pop 3, 2; push 2 + 3 = 5    |
| \*    | [30]                 | Pop 5, 6; push 6 × 5 = 30   |
| 4     | [30, 4]              | Push 4                      |
| -     | [26]                 | Pop 4, 30; push 30 - 4 = 26 |

Result: **26**.

Verification: $(6 \times (2 + 3)) - 4 = 30 - 4 = 26$. ✓

</details>

**Problem 8.** Use a stack to check whether the following expression has balanced brackets:
`{[()()]}`. Then check `[{(})]`. Show the stack contents at each step.

<details>
<summary>Hint</summary>

Push opening brackets onto the stack. For each closing bracket, pop and check that it matches the
corresponding opening bracket.

</details>

<details>
<summary>Answer</summary>

**Checking `{[()()]}`:**

| Char | Stack (top on right) | Action                  |
| ---- | -------------------- | ----------------------- |
| `{`  | `[{]`                | Push `{`                |
| `[`  | `[{, []`             | Push `[`                |
| `(`  | `[{, [, (]`          | Push `(`                |
| `)`  | `[{, []`             | Pop `(` — matches `)` ✓ |
| `(`  | `[{, [, (]`          | Push `(`                |
| `)`  | `[{, []`             | Pop `(` — matches `)` ✓ |
| `]`  | `[{]`                | Pop `[` — matches `]` ✓ |
| `}`  | `[]`                 | Pop `{` — matches `}` ✓ |

Stack is empty → **balanced**. ✓

**Checking `[{(})]`:**

| Char | Stack (top on right) | Action                               |
| ---- | -------------------- | ------------------------------------ |
| `[`  | `[[]`                | Push `[`                             |
| `{`  | `[{, {}`             | Push `{`                             |
| `(`  | `[{, {, (]`          | Push `(`                             |
| `}`  | `[{, (]`             | Pop `(` — expected `}` but got `(` ✗ |

Stack top is `(` but closing bracket is `}` — **mismatch** → **not balanced**. ✗

</details>

**Problem 9.** Write pseudocode for the `dequeue` operation of a circular array queue. The queue has
variables `_data[]`, `_front`, `_size`, and `_capacity`. Include error handling for an empty queue.

<details>
<summary>Hint</summary>

Check if the queue is empty first. If not, read the element at `_front`, update `_front` using
modular arithmetic, and decrement `_size`.

</details>

<details>
<summary>Answer</summary>

```
FUNCTION Dequeue()
    IF _size = 0 THEN
        RETURN "Queue is empty"  // or raise an error
    ENDIF
    value = _data[_front]
    _data[_front] = NULL  // optional: clear the slot
    _front = (_front + 1) MOD _capacity
    _size = _size - 1
    RETURN value
ENDFUNCTION
```

**Explanation:**

- `_size = 0` check prevents underflow (dequeuing from an empty queue)
- The value at `_data[_front]` is saved before updating `_front`
- `_front = (_front + 1) MOD _capacity` wraps around to the start of the array when the end is
  reached
- Setting `_data[_front] = NULL` is optional but helps with debugging
- `_size` is decremented to reflect the removal
- Time complexity: $O(1)$ — constant number of operations regardless of queue size
</details>

**Problem 10.** (Exam-style) A software company is building two features: (A) a web browser's
back/forward navigation system, and (B) a customer support ticket system where tickets are answered
in the order they are received. For each feature, recommend whether a stack or a queue is the most
appropriate data structure. Justify your answer by explaining why the chosen structure's ordering
principle matches the feature's requirements, and explain why the alternative structure would be
incorrect. Include a discussion of how each structure would be implemented (array-based or
linked-list-based) and justify your choice.

<details>
<summary>Hint</summary>

Think about the ordering requirement for each feature: does the most recent item need to be accessed
first (LIFO) or the oldest item (FIFO)?

</details>

<details>
<summary>Answer</summary>

**(A) Browser back/forward navigation — Stack**

The back button must return to the **most recently visited** page, not the first page visited. This
is LIFO behaviour — a stack.

Implementation: **Linked-list-based stack**. The number of pages visited is unpredictable and could
be very large. A linked list avoids pre-allocating a fixed capacity and eliminates the risk of
overflow. Push (visit a page) and pop (go back) are both $O(1)$. Two stacks are used: one for the
back history and one for the forward history.

Why a queue would be wrong: A queue would return the user to the **first** page visited, not the
most recent. This would make the back button navigate to the homepage every time, which is clearly
incorrect.

**(B) Customer support tickets — Queue**

Tickets must be answered in the **order they are received** (first come, first served). This is FIFO
behaviour — a queue.

Implementation: **Circular array queue**. The volume of support tickets can be estimated (allowing
capacity planning), and the contiguous memory gives better performance. Both enqueue (new ticket)
and dequeue (next ticket to answer) are $O(1)$. If the volume is highly variable, a
linked-list-based queue would be more flexible.

Why a stack would be wrong: A stack would process the **most recently submitted** ticket first. This
means a customer who submitted a ticket hours ago would wait indefinitely while new tickets are
handled — unfair and violating the FIFO service guarantee.

</details>

:::

:::
