---
title: Algorithms and Data Structures
date: 2026-04-14
tags:
  - Computer Science
  - Advanced Highers
categories:
  - Computer Science
slug: algorithms-and-data-structures
---

# Algorithms and Data Structures

:::info

This chapter covers **Advanced Higher** Computing Science content, extending beyond Higher level.

:::

## Algorithm Complexity

### Big O Notation

Big O notation describes the upper bound of an algorithm's time or space complexity as the input
size grows.

| Big O         | Name         | Example                     |
| ------------- | ------------ | --------------------------- |
| $O(1)$        | Constant     | Array access by index       |
| $O(\log n)$   | Logarithmic  | Binary search               |
| $O(n)$        | Linear       | Linear search               |
| $O(n \log n)$ | Linearithmic | Merge sort                  |
| $O(n^2)$      | Quadratic    | Bubble sort, selection sort |
| $O(2^n)$      | Exponential  | Recursive Fibonacci         |
| $O(n!)$       | Factorial    | Generating all permutations |

### Comparing Algorithms

**Example:** How many operations for $n = 1000$?

- $O(n)$: 1000 operations
- $O(n \log n)$: approximately 10000 operations
- $O(n^2)$: 1000000 operations
- $O(2^n)$: $1.07 \times 10^{301}$ operations

### Best, Average, and Worst Case

- **Best case:** Minimum number of operations (e.g., linear search finds target at first position)
- **Average case:** Expected number of operations across all inputs
- **Worst case:** Maximum number of operations (e.g., linear search finds target at last position or
  not at all)

---

## Sorting Algorithms

### Bubble Sort

Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the
wrong order.

**Pseudocode:**

```
PROCEDURE bubble_sort(array)
    n = length(array)
    FOR i FROM 0 TO n - 2
        swapped = false
        FOR j FROM 0 TO n - i - 2
            IF array[j] > array[j + 1] THEN
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                swapped = true
            END IF
        END FOR
        IF NOT swapped THEN
            RETURN
        END IF
    END FOR
END PROCEDURE
```

**Complexity:** Time: $O(n^2)$ worst and average, $O(n)$ best (already sorted). Space: $O(1)$.

**Python implementation:**

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
```

### Insertion Sort

Builds the sorted array one element at a time by inserting each element into its correct position.

**Pseudocode:**

```
PROCEDURE insertion_sort(array)
    FOR i FROM 1 TO length(array) - 1
        key = array[i]
        j = i - 1
        WHILE j >= 0 AND array[j] > key
            array[j + 1] = array[j]
            j = j - 1
        END WHILE
        array[j + 1] = key
    END FOR
END PROCEDURE
```

**Complexity:** Time: $O(n^2)$ worst and average, $O(n)$ best. Space: $O(1)$.

### Merge Sort

A divide-and-conquer algorithm that divides the array in half, recursively sorts each half, then
merges the sorted halves.

**Pseudocode:**

```
PROCEDURE merge_sort(array)
    IF length(array) <= 1 THEN
        RETURN array
    END IF
    mid = length(array) / 2
    left = merge_sort(array[0..mid-1])
    right = merge_sort(array[mid..end])
    RETURN merge(left, right)
END PROCEDURE

PROCEDURE merge(left, right)
    result = empty array
    i = 0, j = 0
    WHILE i < length(left) AND j < length(right)
        IF left[i] <= right[j] THEN
            append left[i] to result
            i = i + 1
        ELSE
            append right[j] to result
            j = j + 1
        END IF
    END WHILE
    append remaining elements of left to result
    append remaining elements of right to result
    RETURN result
END PROCEDURE
```

**Complexity:** Time: $O(n \log n)$ in all cases. Space: $O(n)$.

**Python implementation:**

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
```

### Quick Sort

A divide-and-conquer algorithm that selects a pivot, partitions the array around the pivot, and
recursively sorts the partitions.

**Complexity:** Time: $O(n \log n)$ average, $O(n^2)$ worst (poor pivot choice). Space: $O(\log n)$
average.

**Python implementation:**

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

---

## Searching Algorithms

### Linear Search

Checks each element in sequence until the target is found or the list is exhausted.

**Complexity:** $O(n)$.

```python
def linear_search(arr, target):
    for i, value in enumerate(arr):
        if value == target:
            return i
    return -1
```

### Binary Search

Works on sorted arrays. Repeatedly divides the search interval in half.

**Pseudocode:**

```
FUNCTION binary_search(array, target)
    low = 0
    high = length(array) - 1
    WHILE low <= high
        mid = (low + high) / 2
        IF array[mid] = target THEN
            RETURN mid
        ELSE IF array[mid] < target THEN
            low = mid + 1
        ELSE
            high = mid - 1
        END IF
    END WHILE
    RETURN -1
END FUNCTION
```

**Complexity:** $O(\log n)$.

**Python implementation:**

```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

---

## Data Structures

### Linked Lists

A linear data structure where elements (nodes) are connected by pointers. Each node contains data
and a reference to the next node.

**Advantages over arrays:** Dynamic size, efficient insertion and deletion.

**Disadvantages:** No random access, extra memory for pointers.

**Python implementation:**

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

    def delete(self, data):
        if not self.head:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        print(" -> ".join(elements))
```

### Stacks and Queues

**Stack (LIFO):**

```python
class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("Pop from empty stack")
        return self._items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("Peek at empty stack")
        return self._items[-1]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)
```

**Queue (FIFO):**

```python
from collections import deque

class Queue:
    def __init__(self):
        self._items = deque()

    def enqueue(self, item):
        self._items.append(item)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Dequeue from empty queue")
        return self._items.popleft()

    def peek(self):
        if self.is_empty():
            raise IndexError("Peek at empty queue")
        return self._items[0]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)
```

### Binary Trees

A hierarchical data structure where each node has at most two children (left and right).

**Binary Search Tree (BST):** Left subtree contains values less than the node; right subtree
contains values greater than the node.

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, data):
        if not self.root:
            self.root = TreeNode(data)
            return
        self._insert_recursive(self.root, data)

    def _insert_recursive(self, node, data):
        if data < node.data:
            if node.left is None:
                node.left = TreeNode(data)
            else:
                self._insert_recursive(node.left, data)
        elif data > node.data:
            if node.right is None:
                node.right = TreeNode(data)
            else:
                self._insert_recursive(node.right, data)

    def inorder(self):
        result = []
        self._inorder_recursive(self.root, result)
        return result

    def _inorder_recursive(self, node, result):
        if node:
            self._inorder_recursive(node.left, result)
            result.append(node.data)
            self._inorder_recursive(node.right, result)

    def search(self, data):
        return self._search_recursive(self.root, data)

    def _search_recursive(self, node, data):
        if node is None:
            return False
        if data == node.data:
            return True
        elif data < node.data:
            return self._search_recursive(node.left, data)
        else:
            return self._search_recursive(node.right, data)
```

**BST operations complexity:**

- Average: $O(\log n)$
- Worst (unbalanced): $O(n)$

### Hash Tables

A data structure that maps keys to values using a hash function for $O(1)$ average-case lookup.

```python
class HashTable:
    def __init__(self, size=100):
        self.size = size
        self.table = [[] for _ in range(size)]

    def _hash(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return
        self.table[index].append((key, value))

    def get(self, key):
        index = self._hash(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        raise KeyError(key)

    def remove(self, key):
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return
        raise KeyError(key)
```

---

## Graph Algorithms

### Graph Representation

**Adjacency matrix:** 2D array where `matrix[i][j]` represents the weight of the edge from vertex
$i$ to vertex $j$.

**Adjacency list:** A list of lists where each vertex has a list of its neighbours.

### Breadth-First Search (BFS)

Explores all neighbours at the current depth before moving to the next level. Uses a queue.

**Complexity:** Time: $O(V + E)$, Space: $O(V)$.

```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    result = []
    while queue:
        vertex = queue.popleft()
        result.append(vertex)
        for neighbour in graph[vertex]:
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(neighbour)
    return result
```

### Depth-First Search (DFS)

Explores as far as possible along each branch before backtracking. Uses a stack (or recursion).

**Complexity:** Time: $O(V + E)$, Space: $O(V)$.

```python
def dfs(graph, start):
    visited = set()
    result = []
    def dfs_recursive(vertex):
        visited.add(vertex)
        result.append(vertex)
        for neighbour in graph[vertex]:
            if neighbour not in visited:
                dfs_recursive(neighbour)
    dfs_recursive(start)
    return result
```

### Dijkstra's Algorithm

Finds the shortest path from a single source to all other vertices in a weighted graph with
non-negative weights.

**Complexity:** $O((V + E) \log V)$ with a priority queue.

```python
import heapq

def dijkstra(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    pq = [(0, start)]

    while pq:
        current_distance, current_vertex = heapq.heappop(pq)
        if current_distance > distances[current_vertex]:
            continue
        for neighbour, weight in graph[current_vertex].items():
            distance = current_distance + weight
            if distance < distances[neighbour]:
                distances[neighbour] = distance
                heapq.heappush(pq, (distance, neighbour))

    return distances
```

---

## Functional Programming (Advanced Higher)

### Recursion

A function that calls itself. Every recursive function needs a base case and a recursive case.

**Example:** Fibonacci sequence.

```haskell
fib :: Int -> Int
fib 0 = 0
fib 1 = 1
fib n = fib (n - 1) + fib (n - 2)
```

This naive implementation has $O(2^n)$ complexity. An efficient version with memoisation:

```haskell
fib :: Int -> Int
fib n = fibs !! n
  where fibs = 0 : 1 : zipWith (+) fibs (tail fibs)
```

### Higher-Order Functions

**Map:** Apply a function to every element of a list.

```haskell
map' :: (a -> b) -> [a] -> [b]
map' _ []     = []
map' f (x:xs) = f x : map' f xs
```

**Filter:** Keep elements that satisfy a predicate.

```haskell
filter' :: (a -> Bool) -> [a] -> [a]
filter' _ [] = []
filter' p (x:xs)
    | p x       = x : filter' p xs
    | otherwise = filter' p xs
```

**Fold (Reduce):** Combine elements using an accumulator.

```haskell
foldl' :: (a -> b -> a) -> a -> [b] -> a
foldl' _ acc []     = acc
foldl' f acc (x:xs) = foldl' f (f acc x) xs

sum' :: [Int] -> Int
sum' = foldl' (+) 0
```

**List comprehension:**

```haskell
pythagoreanTriples :: [(Int, Int, Int)]
pythagoreanTriples = [(a, b, c) |
    a <- [1..20],
    b <- [a..20],
    c <- [b..20],
    a^2 + b^2 == c^2]
```

### Pattern Matching

```haskell
describeList :: [a] -> String
describeList [] = "empty"
describeList [_] = "singleton"
describeList (_:_) = "longer"
```

### Algebraic Data Types

```haskell
data Shape = Circle Double
           | Rectangle Double Double
           | Triangle Double Double Double
           deriving (Show)

area :: Shape -> Double
area (Circle r) = pi * r * r
area (Rectangle w h) = w * h
area (Triangle a b c) = let s = (a + b + c) / 2
                        in sqrt (s * (s-a) * (s-b) * (s-c))
```

---

## Common Pitfalls

1. **Binary search on unsorted data:** Binary search requires a sorted array. Always sort first or
   verify the array is sorted.

2. **Off-by-one errors:** Be careful with array indices and loop boundaries. Python uses 0-based
   indexing.

3. **Infinite recursion:** Always ensure a base case is reached. Forgetting the base case causes a
   stack overflow.

4. **Quick sort worst case:** Choosing the first or last element as pivot on an already-sorted array
   gives $O(n^2)$. Use the middle element or random pivot.

5. **Hash collisions:** Different keys may hash to the same index. Use separate chaining or open
   addressing to handle collisions.

---

## Practice Questions

1. Sort the list [38, 27, 43, 3, 9, 82, 10] using bubble sort. Show the array after each pass.

2. Implement a function that checks whether a binary tree is a valid BST.

3. Trace Dijkstra's algorithm on the following graph to find the shortest path from A to all other
   vertices: A-B: 4, A-C: 2, B-C: 1, B-D: 5, C-D: 8, C-E: 10, D-E: 2.

4. Write a Haskell function `quickSort :: [Int] -> [Int]` that implements quicksort.

5. Explain the difference between BFS and DFS, and give a scenario where each would be more
   appropriate.

6. Implement a hash table with separate chaining for collision resolution in Python.

7. What is the time complexity of merge sort? Explain why it is $O(n \log n)$.

8. Write a Haskell function that takes a list of integers and returns the list sorted in descending
   order, using `sortBy` from `Data.List`.
