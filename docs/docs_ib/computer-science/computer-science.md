---
title: Computer Science
description: intro
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
