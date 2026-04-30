---
title: Computer Science
description: "IB Computer Science notes covering computational thinking, system design, data structures, algorithms, networking, databases, and ethical considerations."
slug: computer-science
---


# Prelude

## Objective of the IB computer science program

- Understand the concepts of computational thinking
  - Identifying a problem
  - Accessing the feasibility of solving the problem
    - Understanding the theoretical limitations and practical limitations for computational problems
  - Designing solutions and prototypes
    - Consideration of concurrency
    - Usage and importance of abstraction
    - Consideration of preemptive solution
    - Utilization of experimental and inquiry approach in problem solving
    - Development of algorithms
  - Testing the proposed solution
  - Evaluation of proposed solution
    - Acquisition of knowledge from the evaluation
- Introduction of computational ethics
  - Interactions with society and the impact on societal values
  - Ethical issues raised by innovation or proposed solution

## SL and HL distinction

- Mutually consist of:
  - 4 topics
    - System Fundamentals
    - Computer organization
    - Networks
    - Computational thinking
  - 1 option
    - Databases
    - Modelling Simulation
    - Web science
    - Object-oriented programming
- HL exclusive:
  - 3 extensive topics
    - Abstract data structures
    - Resource management
    - Control
  - Additional content for the option chosen
  - Additional scenario to be studied

## Computational Thinking

Computational thinking is the foundation of computer science. It involves a set of problem-solving
methods that draw on concepts fundamental to computer science.

### Decomposition

Breaking down a complex problem into smaller, more manageable sub-problems.

**Example**: Instead of trying to build "a school management system," decompose it into:

- Student records management
- Timetable scheduling
- Grade tracking
- Attendance monitoring
- Parent communication

Each sub-problem can be developed, tested, and refined independently.

### Pattern Recognition

Identifying similarities or patterns within and between problems. This allows us to apply known
solutions to new problems.

**Example**: If you have written a function to validate email addresses, the same pattern (check for
`@` symbol, check for domain suffix) can be adapted to validate URLs or phone numbers.

```python
def validate_email(email):
    if "@" not in email:
        return False
    parts = email.split("@")
    if len(parts) != 2:
        return False
    if "." not in parts[1]:
        return False
    return True

def validate_url(url):
    if "://" not in url:
        return False
    parts = url.split("://")
    if len(parts) != 2:
        return False
    if "." not in parts[1]:
        return False
    return True
```

Both functions follow the same pattern: check for a separator, split into parts, validate the
structure.

### Worked Example: Applying Computational Thinking

Apply the four pillars of computational thinking to design a smart home temperature control system.

<details>
<summary>Solution</summary>

**Decomposition:** Break the system into sub-problems:
- Temperature sensing (reading from sensors)
- User preference management (desired temperature, schedule)
- Decision making (when to heat/cool)
- Actuator control (turning HVAC on/off)
- Energy monitoring (tracking usage and cost)

**Pattern Recognition:** Recognize that the decision-making module follows the same pattern as a
thermostat: compare current temperature to target, and take action based on the difference. This is
the same pattern used in cruise control, autopilot, and other feedback control systems.

**Abstraction:** Create a `Thermostat` class with methods like `setTarget(temp)`, `getCurrentTemp()`,
and `isActionNeeded()`. The user interacts with the interface (setting a desired temperature) without
needing to know about sensor calibration, HVAC wiring, or control algorithms.

**Algorithm Design:** The control algorithm:
1. Read current temperature from sensor
2. Compare with target temperature
3. If difference exceeds threshold, activate heating or cooling
4. Wait for a set interval
5. Repeat

This algorithm is finite (runs continuously until stopped), defined (each step is precise), has input
(sensor data) and output (HVAC control signals), and is effective (each step can be executed by the
hardware).

</details>

### Abstraction

Removing unnecessary details to focus on the essential features of a problem. Abstraction allows us
to create models that capture what is important while ignoring irrelevant complexity.

**Levels of abstraction** (from low to high):

1. **Hardware level**: Logic gates, registers, memory cells
2. **Machine code level**: Binary instructions executed by the CPU
3. **Assembly language**: Human-readable representations of machine code (e.g., `MOV`, `ADD`)
4. **High-level language**: Python, Java, C++ — closer to human language
5. **Application level**: The software users interact with

**Example**: When using a `list` in Python, you do not need to know how memory is allocated, how
pointers work, or how the data is stored physically. The abstraction hides these details and
provides a simple interface: `append()`, `remove()`, `sort()`.

### Algorithm Design

Developing a step-by-step solution to a problem. An algorithm must be:

- **Finite**: It must terminate after a finite number of steps
- **Defined**: Each step must be precisely defined
- **Input**: It has zero or more inputs
- **Output**: It produces at least one output
- **Effective**: Each step must be basic enough to be carried out

**Example**: Linear search algorithm

```python
def linear_search(data, target):
    for i in range(len(data)):
        if data[i] == target:
            return i
    return -1
```

**Example**: Binary search algorithm (requires sorted data)

```python
def binary_search(data, target):
    low = 0
    high = len(data) - 1
    while low &lt;= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] &lt; target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

## Algorithms

### Efficiency

Algorithm efficiency is measured in terms of **time complexity** (how the running time grows with
input size) and **space complexity** (how the memory usage grows with input size).

**Big-O notation** describes the upper bound of an algorithm's growth rate:

| Big-O      | Name        | Example                             |
| ---------- | ----------- | ----------------------------------- |
| O(1)       | Constant    | Accessing an array element by index |
| O(log n)   | Logarithmic | Binary search                       |
| O(n)       | Linear      | Linear search, traversing a list    |
| O(n log n) | Log-linear  | Merge sort, efficient sorting       |
| O(n²)      | Quadratic   | Bubble sort, nested loops           |
| O(2ⁿ)      | Exponential | Recursive Fibonacci (naive)         |

### Sorting Algorithms

**Bubble Sort** — O(n²) time complexity:

```python
def bubble_sort(data):
    n = len(data)
    for i in range(n):
        for j in range(0, n - i - 1):
            if data[j] &gt; data[j + 1]:
                data[j], data[j + 1] = data[j + 1], data[j]
    return data
```

**Selection Sort** — O(n²) time complexity:

```python
def selection_sort(data):
    n = len(data)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if data[j] &lt; data[min_idx]:
                min_idx = j
        data[i], data[min_idx] = data[min_idx], data[i]
    return data
```

**Insertion Sort** — O(n²) time complexity, but efficient for small or nearly sorted datasets:

```python
def insertion_sort(data):
    for i in range(1, len(data)):
        key = data[i]
        j = i - 1
        while j &gt;= 0 and data[j] &gt; key:
            data[j + 1] = data[j]
            j -= 1
        data[j + 1] = key
    return data
```

> **Exam tip**: For Paper 2, you should be able to trace any sorting algorithm with a small dataset
> (5–6 elements) and determine the number of comparisons and swaps. Also know the best-case,
> average-case, and worst-case time complexities.

### Worked Example: Tracing Bubble Sort

Trace bubble sort on the array `[5, 1, 4, 2, 8]`. Show the array after each pass and count the total
comparisons.

<details>
<summary>Solution</summary>

**Pass 1** (`i = 0`, inner loop runs for `j = 0` to `3`):

| Comparison | Action | Array State |
| ---------- | ------ | ----------- |
| 5 vs 1 | Swap | [1, 5, 4, 2, 8] |
| 5 vs 4 | Swap | [1, 4, 5, 2, 8] |
| 5 vs 2 | Swap | [1, 4, 2, 5, 8] |
| 5 vs 8 | No swap | [1, 4, 2, 5, 8] |

**Pass 2** (`i = 1`, inner loop runs for `j = 0` to `2`):

| Comparison | Action | Array State |
| ---------- | ------ | ----------- |
| 1 vs 4 | No swap | [1, 4, 2, 5, 8] |
| 4 vs 2 | Swap | [1, 2, 4, 5, 8] |
| 4 vs 5 | No swap | [1, 2, 4, 5, 8] |

**Pass 3** (`i = 2`, inner loop runs for `j = 0` to `1`):

| Comparison | Action | Array State |
| ---------- | ------ | ----------- |
| 1 vs 2 | No swap | [1, 2, 4, 5, 8] |
| 2 vs 4 | No swap | [1, 2, 4, 5, 8] |

**Pass 4** (`i = 3`, inner loop runs for `j = 0` to `0`):

| Comparison | Action | Array State |
| ---------- | ------ | ----------- |
| 1 vs 2 | No swap | [1, 2, 4, 5, 8] |

Total comparisons: $4 + 3 + 2 + 1 = 10$ (which is $n(n-1)/2 = 5 \times 4 / 2 = 10$).
Total swaps: 3.

The array is sorted after pass 2, but the algorithm continues for the remaining passes (no early
termination in this implementation). An optimized version would add a flag to stop early if no swaps
occur in a pass.

</details>

### Searching Algorithms

**Linear Search** — O(n): Checks each element sequentially. Works on unsorted data.

**Binary Search** — O(log n): Repeatedly divides the search space in half. Requires sorted data.

**Trace of binary search** — searching for 7 in `[1, 3, 5, 7, 9, 11, 13]`:

| Step | low | high | mid | data[mid] | Action |
| ---- | --- | ---- | --- | --------- | ------ |
| 1    | 0   | 6    | 3   | 7         | Found! |

**Trace of binary search** — searching for 6 in `[1, 3, 5, 7, 9, 11, 13]`:

| Step | low | high | mid | data[mid] | Action                   |
| ---- | --- | ---- | --- | --------- | ------------------------ |
| 1    | 0   | 6    | 3   | 7         | 6 &lt; 7, high = 2       |
| 2    | 0   | 2    | 1   | 3         | 6 &gt; 3, low = 2        |
| 3    | 2   | 2    | 2   | 5         | 6 &gt; 5, low = 3        |
| 4    | 3   | 2    | —   | —         | low &gt; high, not found |

### Worked Example: Comparing Search Algorithms

An array contains 1,000,000 sorted integers. How many comparisons does binary search make in the
worst case to determine that a target value is not present?

<details>
<summary>Solution</summary>

Binary search halves the search space each step. After $k$ comparisons, the remaining search space is
$n / 2^k$. The search ends when the search space is empty ($n / 2^k \lt 1$).

$n / 2^k \lt 1 \Rightarrow 2^k \gt n \Rightarrow k \gt \log_2(n)$

For $n = 1000000$: $k \gt \log_2(1000000) \approx 19.93$

So binary search makes at most **20 comparisons** in the worst case.

By contrast, linear search would make up to **1,000,000 comparisons** in the worst case.

This dramatic difference ($20$ vs $1,000,000$) illustrates why binary search is preferred for
sorted data, and why sorting data once and then searching many times can be more efficient than
repeated linear searches.

</details>

## Data Structures

### Arrays

- Fixed-size, contiguous memory allocation
- O(1) access by index
- O(n) insertion/deletion (elements must be shifted)
- Homogeneous elements (same data type)

```python
data = [10, 20, 30, 40, 50]
print(data[2])  # Output: 30
```

### Worked Example: Array Operations Trace

Given `data = [3, 7, 1, 9, 4]`, trace the following operations:

1. Access `data[2]`
2. Replace `data[1]` with 5
3. Insert 8 at index 2 (elements shift right)
4. Remove the element at index 0 (elements shift left)

<details>
<summary>Solution</summary>

| Operation | Array State | Notes |
| --------- | ----------- | ----- |
| Initial   | [3, 7, 1, 9, 4] | |
| Access `data[2]` | [3, 7, 1, 9, 4] | Returns **1** (O(1)) |
| Replace `data[1] ← 5` | [3, 5, 1, 9, 4] | O(1), no shifting needed |
| Insert 8 at index 2 | [3, 5, 8, 1, 9, 4] | O(n), elements 1,9,4 shift right |
| Remove index 0 | [5, 8, 1, 9, 4] | O(n), elements shift left |

Key insight: access and replacement are O(1) because arrays use contiguous memory with direct
indexing. Insertion and deletion are O(n) because elements must be shifted. This is why arrays are
efficient for lookup but inefficient for frequent insertions/deletions.

</details>

### Stacks

- Last In, First Out (LIFO) structure
- Operations: `push(item)`, `pop()`, `peek()`, `isEmpty()`
- Applications: undo/redo functionality, expression evaluation, function call management (call
  stack)

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.is_empty():
            return None
        return self.items.pop()

    def peek(self):
        if self.is_empty():
            return None
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0
```

### Queues

- First In, First Out (FIFO) structure
- Operations: `enqueue(item)`, `dequeue()`, `front()`, `isEmpty()`
- Applications: print spooling, task scheduling, breadth-first search

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if self.is_empty():
            return None
        return self.items.pop(0)

    def front(self):
        if self.is_empty():
            return None
        return self.items[0]

    def is_empty(self):
        return len(self.items) == 0
```

### Linked Lists (HL)

- Dynamic size, non-contiguous memory
- Each node contains data and a reference to the next node
- O(1) insertion/deletion at head; O(n) access by position

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        return " -&gt; ".join(elements)
```

### Trees (HL)

- Hierarchical data structure
- Binary tree: each node has at most two children
- Binary Search Tree (BST): left child &lt; parent, right child &gt; parent

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def insert(root, data):
    if root is None:
        return TreeNode(data)
    if data &lt; root.data:
        root.left = insert(root.left, data)
    else:
        root.right = insert(root.right, data)
    return root

def inorder(root):
    if root:
        inorder(root.left)
        print(root.data, end=" ")
        inorder(root.right)
```

## Ethics and Social Impact

### Key ethical considerations

The IB CS syllabus emphasizes the ethical implications of computing:

| Issue                 | Description                                                  | Example                                                |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| Privacy               | Collection, storage, and use of personal data                | Social media data harvesting, surveillance systems     |
| Security              | Protecting systems and data from unauthorized access         | Encryption, firewalls, two-factor authentication       |
| Intellectual property | Ownership and rights over digital content                    | Software licensing, piracy, open-source vs proprietary |
| Digital divide        | Inequality in access to technology                           | Urban vs. rural internet access, developing nations    |
| Environmental impact  | Energy consumption and e-waste from computing                | Data center energy use, electronic waste disposal      |
| AI and bias           | Algorithmic discrimination and fairness in automated systems | Hiring algorithms, facial recognition bias             |
| Censorship            | Control of information by governments or corporations        | Internet filtering, content moderation                 |

### Privacy

- **Data protection laws**: GDPR (EU), CCPA (California) regulate how organizations collect, store,
  and process personal data.
- **Data minimization**: Only collect data that is necessary for the stated purpose.
- **Consent**: Users must be informed about and consent to data collection.
- **Right to be forgotten**: Individuals can request deletion of their personal data.

### Worked example: Ethical analysis

**Scenario**: A school implements a facial recognition attendance system that scans students' faces
as they enter the building.

**Ethical considerations**:

1. **Privacy**: Students' biometric data is collected and stored. Who has access? How long is it
   retained?
2. **Consent**: Have students and parents given informed consent? Can students opt out?
3. **Accuracy**: What happens if the system misidentifies a student? False positives/negatives have
   consequences.
4. **Security**: How is the biometric data protected against breaches?
5. **Alternative solutions**: Could a less invasive system (e.g., ID cards) achieve the same goal?

> **Exam tip**: When analyzing ethical scenarios, use the framework: identify the stakeholders,
> consider multiple perspectives, reference specific ethical principles, and evaluate trade-offs.
> The IB rewards balanced analysis over one-sided arguments.

### Worked Example: Ethical Analysis of a Social Media Algorithm

**Scenario:** A social media company uses an algorithm that prioritizes posts with strong emotional
reactions (anger, outrage) because these generate more engagement and ad revenue.

<details>
<summary>Solution</summary>

**Stakeholders:**
- Users (whose emotional well-being and worldview are affected)
- Advertisers (who benefit from increased engagement)
- Society (which may experience increased polarization)
- The company (which profits from engagement)

**Ethical considerations:**

1. **Algorithmic bias:** The algorithm systematically favors emotionally charged content over
   neutral or positive content. This is a form of bias -- not based on protected characteristics, but
   on emotional valence, which distorts users' perception of reality.

2. **Transparency:** Users are not informed that their feed is curated to maximize emotional
   engagement rather than to provide accurate or balanced information. This violates the principle of
   informed consent.

3. **Privacy:** The algorithm requires extensive data collection (tracking which posts users react to,
   how long they linger, what they share) to optimize for engagement. Users may not be aware of the
   extent of this surveillance.

4. **Social impact:** Research has shown that outrage-driven algorithms can contribute to political
   polarization, the spread of misinformation, and mental health issues (especially in teenagers).

5. **Balancing interests:** The company has a legitimate business interest in generating revenue, but
   this must be weighed against the societal harm. A possible compromise: add transparency labels, give
   users control over their feed algorithm, or incorporate content quality metrics alongside engagement.

**IB exam strategy:** Use specific terminology (algorithmic bias, data minimization, transparency),
reference multiple stakeholders, and present a balanced argument with a reasoned conclusion.

</details>

## Exam Tips for IB Computer Science

### General strategies

- **Past papers**: Practice is essential. Complete at least 5 years of past papers under timed
  conditions before the exam.
- **Command terms**: Learn the exact meaning of each command term (define, describe, explain,
  discuss, evaluate, compare, justify, outline, analyze, to what extent).
- **Time management**: Allocate time proportionally to marks. Do not spend too long on any single
  question.
- **Show your working**: For algorithm tracing questions, show every step of your trace table.
  Examiners award method marks even if the final answer is wrong.

### Paper 1 tips

- Memorize key definitions exactly (e.g., "An algorithm is a finite sequence of well-defined
  instructions for solving a problem").
- For extended-response questions, use clear paragraph structure with topic sentences.
- Include specific examples to support your answers.

### Paper 2 tips

- Read the entire scenario carefully before attempting any questions.
- For algorithm writing, use pseudocode or Python — whichever you are more comfortable with.
- Test your algorithms mentally with sample data before writing your final answer.
- For trace questions, set up a neat trace table and work through it systematically.

### IA tips

- Choose a project with a real client and a genuine problem.
- Document everything: planning, design decisions, testing, user feedback.
- Use meaningful variable names and add comments that explain _why_, not _what_.
- Test thoroughly: normal cases, boundary cases, and invalid input.

## Problem Set

**Problem 1:** Apply decomposition to design a "smart parking system" that detects available parking
spaces, guides drivers to the nearest spot, and accepts payment. Identify at least 5 sub-problems.

<details>
<summary>Solution</summary>

1. **Space detection:** Sensors in each parking spot detect whether a vehicle is present (occupied) or
   absent (available).
2. **Data aggregation:** Collect sensor data from all spots and maintain a real-time map of available
   spaces.
3. **Navigation algorithm:** Calculate the shortest path from the entrance to the nearest available
   spot (using graph-based pathfinding).
4. **Payment processing:** Handle different payment methods (card, mobile app, cash) and validate
   transactions.
5. **User interface:** Display availability on entrance signs and a mobile app; show navigation
   instructions.
6. **Session management:** Track when a vehicle enters, which spot it occupies, and when it leaves to
   calculate parking duration and fee.

</details>

If you get this wrong, revise: [Decomposition](#decomposition)

---

**Problem 2:** Trace binary search for the value **4** in the sorted array `[1, 3, 4, 6, 8, 10, 12]`.

<details>
<summary>Solution</summary>

| Step | low | high | mid | data[mid] | Action                 |
| ---- | --- | ---- | --- | --------- | ---------------------- |
| 1    | 0   | 6    | 3   | 6         | 4 &lt; 6, high = 2     |
| 2    | 0   | 2    | 1   | 3         | 4 &gt; 3, low = 2      |
| 3    | 2   | 2    | 2   | 4         | Found! Returns index 2 |

Result: **Found at index 2**, after 3 comparisons.

</details>

If you get this wrong, revise: [Binary Search](#algorithms)

---

**Problem 3:** An algorithm processes an array of $n$ elements. For each element, it scans the entire
array to find duplicates. What is the time complexity? How many operations are performed when $n = 100$?

<details>
<summary>Solution</summary>

For each of $n$ elements, the algorithm scans all $n$ elements. Total operations: $n \times n = n^2$.

Time complexity: $O(n^2)$.

For $n = 100$: $100^2 = 10000$ operations.

This is characteristic of nested loops where the inner loop depends on the outer loop. A more
efficient approach would use a hash set: insert each element into the set (O(1) per insertion) and
check for duplicates as you go, giving $O(n)$ total time.

</details>

If you get this wrong, revise: [Efficiency](#efficiency)

---

**Problem 4:** Trace selection sort on `[64, 25, 12, 22, 11]`. Show the array after each pass.

<details>
<summary>Solution</summary>

**Pass 1:** Find minimum in `[64, 25, 12, 22, 11]` → 11 at index 4. Swap with index 0.
Array: `[11, 25, 12, 22, 64]`

**Pass 2:** Find minimum in `[25, 12, 22, 64]` (indices 1-4) → 12 at index 2. Swap with index 1.
Array: `[11, 12, 25, 22, 64]`

**Pass 3:** Find minimum in `[25, 22, 64]` (indices 2-4) → 22 at index 3. Swap with index 2.
Array: `[11, 12, 22, 25, 64]`

**Pass 4:** Find minimum in `[25, 64]` (indices 3-4) → 25 at index 3. Swap with index 3 (no change).
Array: `[11, 12, 22, 25, 64]`

Sorted! Total comparisons: $4 + 3 + 2 + 1 = 10$. Total swaps: 3.

</details>

If you get this wrong, revise: [Selection Sort](#sorting-algorithms)

---

**Problem 5:** A stack has the following operations performed on it in order: `push(3)`, `push(7)`,
`push(1)`, `pop()`, `push(9)`, `push(4)`, `pop()`, `pop()`, `peek()`. What values are returned by
each `pop()` and `peek()` call, and what is the final state of the stack?

<details>
<summary>Solution</summary>

| Operation  | Stack (top on right) | Returned |
| ---------- | -------------------- | -------- |
| push(3)    | [3]                  | --       |
| push(7)    | [3, 7]               | --       |
| push(1)    | [3, 7, 1]            | --       |
| pop()      | [3, 7]               | 1        |
| push(9)    | [3, 7, 9]            | --       |
| push(4)    | [3, 7, 9, 4]         | --       |
| pop()      | [3, 7, 9]            | 4        |
| pop()      | [3, 7]               | 9        |
| peek()     | [3, 7]               | 7        |

`pop()` returns: 1, 4, 9. `peek()` returns 7. Final stack: `[3, 7]`, top = 7.

</details>

If you get this wrong, revise: [Stacks](#stacks)

---

**Problem 6:** A queue has the following operations: `enqueue("red")`, `enqueue("blue")`,
`enqueue("green")`, `dequeue()`, `enqueue("yellow")`, `dequeue()`, `enqueue("purple")`. What does
the queue contain after all operations?

<details>
<summary>Solution</summary>

| Operation        | Queue (front on left) | Dequeued |
| ---------------- | --------------------- | -------- |
| enqueue("red")   | [red]                 | --       |
| enqueue("blue")  | [red, blue]           | --       |
| enqueue("green") | [red, blue, green]    | --       |
| dequeue()        | [blue, green]         | red      |
| enqueue("yellow")| [blue, green, yellow] | --       |
| dequeue()        | [green, yellow]       | blue     |
| enqueue("purple")| [green, yellow, purple]| --     |

Final queue: `[green, yellow, purple]`, front = green.

</details>

If you get this wrong, revise: [Queues](#queues)

---

**Problem 7:** Explain the difference between a **stack** and a **queue**. Give one real-world example
of each.

<details>
<summary>Solution</summary>

A **stack** is LIFO (Last In, First Out): the most recently added element is removed first. Example:
a browser's back button -- the most recently visited page is the first one you return to.

A **queue** is FIFO (First In, First Out): the earliest added element is removed first. Example:
a print queue -- documents are printed in the order they were submitted.

The key difference is the removal policy: stacks remove from the same end where elements are added
(top), while queues remove from the opposite end (front vs. rear).

</details>

If you get this wrong, revise: [Stacks](#stacks) and [Queues](#queues)

---

**Problem 8:** Insert the values 8, 3, 10, 1, 6 into an initially empty Binary Search Tree (BST). Draw
the resulting tree and state the in-order traversal.

<details>
<summary>Solution</summary>

```
        8
       / \
      3   10
     / \
    1   6
```

Insertion order:
1. Insert 8 → root
2. Insert 3 → 3 &lt; 8, goes left
3. Insert 10 → 10 &gt; 8, goes right
4. Insert 1 → 1 &lt; 8, go left to 3, 1 &lt; 3, goes left
5. Insert 6 → 6 &lt; 8, go left to 3, 6 &gt; 3, goes right

In-order traversal (left, root, right): **1, 3, 6, 8, 10**

The in-order traversal of a BST always produces elements in sorted order. This is a key property of
BSTs.

</details>

If you get this wrong, revise: [Trees](#trees-hl)

---

**Problem 9:** A linked list contains the values `10 → 20 → 30 → 40`. Describe what happens when a
new node with value 25 is inserted between 20 and 30.

<details>
<summary>Solution</summary>

1. Create a new node with `data = 25` and `next = NIL`
2. Traverse the list to find the node with value 20 (the node before the insertion point)
3. Set `newNode.next = node20.next` (newNode now points to 30)
4. Set `node20.next = newNode` (20 now points to 25)

Result: `10 → 20 → 25 → 30 → 40`

Only two pointer assignments are needed (steps 3 and 4). No elements need to be shifted, unlike an
array. This is why linked list insertion at a known position is O(1) (after the position is found),
while array insertion is O(n).

</details>

If you get this wrong, revise: [Linked Lists](#linked-lists-hl)

---

**Problem 10:** A school is implementing an AI system that automatically grades student essays. Analyze
two ethical concerns and suggest mitigations for each.

<details>
<summary>Solution</summary>

**Concern 1: Algorithmic bias.** The AI may be trained on essays from specific demographics, leading to
systematic disadvantages for students from underrepresented backgrounds (e.g., non-native English
speakers, different cultural writing styles). **Mitigation:** Regularly audit the AI's grading
decisions across demographic groups. Use diverse training data. Ensure human teachers can override AI
grades.

**Concern 2: Privacy and data ownership.** Student essays contain personal thoughts, experiences, and
potentially sensitive information. Storing and processing this data raises privacy concerns. Who owns
the essays? Can the data be used to train future AI models? **Mitigation:** Obtain informed consent
from students and parents. Anonymize data before processing. Allow students to opt out. Comply with
data protection regulations (GDPR, CCPA).

Other valid concerns: transparency of grading criteria, impact on teacher-student relationships,
over-reliance on technology, access inequality (schools that cannot afford the system).

</details>

If you get this wrong, revise: [Ethics and Social Impact](#ethics-and-social-impact)

---

**Problem 11:** Explain why binary search cannot be used on an unsorted array. What would happen if you
tried?

<details>
<summary>Solution</summary>

Binary search relies on the property that if the target is less than the middle element, it must be in
the left half, and if greater, it must be in the right half. This property only holds for sorted
arrays.

On an unsorted array, this assumption is invalid. For example, searching for 3 in `[5, 1, 4, 2, 3]`:

| Step | low | high | mid | data[mid] | Action               |
| ---- | --- | ---- | --- | --------- | -------------------- |
| 1    | 0   | 4    | 2   | 4         | 3 &lt; 4, high = 1   |
| 2    | 0   | 1    | 0   | 5         | 3 &lt; 5, high = -1  |
| 3    | 0   | -1   | --  | --        | low &gt; high, not found |

Binary search reports "not found" even though 3 is in the array at index 4. The algorithm
incorrectly eliminated the right half because the array is not sorted.

</details>

If you get this wrong, revise: [Binary Search](#algorithms)

---

**Problem 12:** For the following code, determine the output and the time complexity:

```python
def mystery(n):
    count = 0
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            count += 1
    return count
```

<details>
<summary>Solution</summary>

The inner loop runs `i` times for each value of `i` from 1 to `n`.

Total iterations: $1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$

For `mystery(4)`: $1 + 2 + 3 + 4 = 10$. Output: **10**
For `mystery(5)`: $1 + 2 + 3 + 4 + 5 = 15$. Output: **15**

Time complexity: $O(n^2)$ (the dominant term is $n^2/2$, constants are dropped in Big-O).

The nested loop pattern where the inner loop bound depends on the outer loop variable produces the
triangular number series. This is a common pattern in IB exam questions.

</details>

If you get this wrong, revise: [Efficiency](#efficiency) and [Nested Loops](#algorithms)

