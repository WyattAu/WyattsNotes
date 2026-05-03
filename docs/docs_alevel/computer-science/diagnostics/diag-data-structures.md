---
title: "Data Structures -- Diagnostic Tests"
description: "Diagnostic tests for A-Level CS data structures: arrays vs linked lists, stacks/queues, hash tables, and binary trees."
slug: diag-data-structures
hide_table_of_contents: true
---

# Data Structures — Diagnostic Tests

## Unit Tests

### UT-1: Linked List Operations
**Question:** A singly linked list contains the values: 3 $\to$ 7 $\to$ 1 $\to$ 9 $\to$ 5. (a) Write the steps to insert the value 4 between 1 and 9. (b) Write the steps to delete the node containing 7. (c) What is the time complexity of inserting at the head vs inserting at position $k$? (d) Explain why a doubly linked list is preferred over a singly linked list for implementing a deque.

**Solution:**

(a) Insert 4 between 1 and 9:
1. Create new node with value 4.
2. Traverse the list to find the node containing 1 (current).
3. Set new node's next pointer to current's next (pointing to 9).
4. Set current's next pointer to the new node.

Result: 3 $\to$ 7 $\to$ 1 $\to$ 4 $\to$ 9 $\to$ 5.

(b) Delete node containing 7:
1. Traverse the list to find the node BEFORE 7 (the node containing 3). Let this be `prev`.
2. Set `prev.next` to `prev.next.next` (skipping over the node with 7).
3. The node containing 7 is now dereferenced and will be garbage collected.

Result: 3 $\to$ 1 $\to$ 9 $\to$ 5.

(c) Time complexity:
- Insert at head: $O(1)$ -- just update the head pointer and the new node's next.
- Insert at position $k$: $O(n)$ -- must traverse $k$ nodes to find the insertion point. Even if the insertion itself is $O(1)$, the traversal dominates.

(d) A doubly linked list has both `next` and `prev` pointers. For a deque (double-ended queue), we need to add and remove from both ends efficiently. With a singly linked list, removing from the tail requires $O(n)$ traversal to find the second-to-last node. With a doubly linked list, the tail node's `prev` pointer gives direct access to the second-to-last node, making tail removal $O(1)$. Both head and tail operations become $O(1)$ with a doubly linked list.

---
### UT-2: Hash Table Collision Handling
**Question:** A hash table of size 7 uses the hash function $h(k) = k \mod 7$. Insert the following keys in order: 14, 21, 28, 35, 42, 15, 22. Show the resulting hash table using: (a) separate chaining, (b) linear probing, (c) quadratic probing. Calculate the load factor for each.

**Solution:**

Hash values: $h(14) = 0$, $h(21) = 0$, $h(28) = 0$, $h(35) = 0$, $h(42) = 0$, $h(15) = 1$, $h(22) = 1$.

(a) **Separate chaining:**

| Index | Chain |
|-------|-------|
| 0 | 14 $\to$ 21 $\to$ 28 $\to$ 35 $\to$ 42 |
| 1 | 15 $\to$ 22 |
| 2 | empty |
| 3 | empty |
| 4 | empty |
| 5 | empty |
| 6 | empty |

Load factor: $7/7 = 1.0$.

(b) **Linear probing** ($h(k, i) = (h(k) + i) \mod 7$):

- 14: index 0. Table[0] $= 14$.
- 21: index 0, collision. Try 1. Table[1] $= 21$.
- 28: index 0, collision. Try 1 (full), try 2. Table[2] $= 28$.
- 35: index 0, collision. Try 1, 2 (full), try 3. Table[3] $= 35$.
- 42: index 0, collision. Try 1, 2, 3 (full), try 4. Table[4] $= 42$.
- 15: index 1, collision. Try 2, 3, 4 (full), try 5. Table[5] $= 15$.
- 22: index 1, collision. Try 2, 3, 4, 5 (full), try 6. Table[6] $= 22$.

| Index | Key |
|-------|-----|
| 0 | 14 |
| 1 | 21 |
| 2 | 28 |
| 3 | 35 |
| 4 | 42 |
| 5 | 15 |
| 6 | 22 |

Load factor: $7/7 = 1.0$.

(c) **Quadratic probing** ($h(k, i) = (h(k) + i^2) \mod 7$):

- 14: $(0 + 0) \mod 7 = 0$. Table[0] $= 14$.
- 21: $(0 + 1) \mod 7 = 1$. Table[1] $= 21$.
- 28: $(0 + 4) \mod 7 = 4$. Table[4] $= 28$.
- 35: $(0 + 9) \mod 7 = 2$. Table[2] $= 35$.
- 42: $(0 + 16) \mod 7 = 2$ (collision with 35). $(0 + 25) \mod 7 = 4$ (collision with 28). $(0 + 36) \mod 7 = 1$ (collision with 21). $(0 + 49) \mod 7 = 0$ (collision with 14). Quadratic probing may not find an empty slot.

This demonstrates a limitation of quadratic probing: with certain patterns, it may fail to find empty slots even when the table is not full.

---
### UT-3: Binary Search Tree Operations
**Question:** Construct a binary search tree by inserting the following values in order: 50, 30, 70, 20, 40, 60, 80. (a) Draw the tree. (b) Perform an in-order traversal and state what it produces. (c) Delete the node 30 and redraw the tree. (d) What is the height of the tree before and after deletion?

**Solution:**

(a) BST construction:
```
        50
       /  \
      30   70
     / \   / \
    20 40 60 80
```

(b) In-order traversal (left, root, right): 20, 30, 40, 50, 60, 70, 80.

This produces the values in sorted ascending order -- a fundamental property of BSTs.

(c) Deleting 30 (a node with two children):
Replace 30 with its in-order successor (the smallest value in its right subtree), which is 40. Then delete 40 from the right subtree.

Alternatively, replace with in-order predecessor (20), but 20 is a leaf so we remove it and place its value in the deleted node's position.

Using in-order successor (40):
```
        50
       /  \
      40   70
     /    / \
    20   60 80
```

(d) Height before deletion: 2 (root at level 0, leaves at level 2). Height after deletion: still 2. The height did not change because 40 (the replacement) was at the same depth as 30.

## Integration Tests

### IT-1: Stacks and Expression Evaluation (with Programming Constructs)
**Question:** Write the algorithm to evaluate the postfix expression `5 3 2 * + 4 -` using a stack. Show the stack state after each operation. Then convert the infix expression `(A + B) * (C - D) / E` to postfix using the shunting-yard algorithm, showing the operator stack at each step.

**Solution:**

**Postfix evaluation of `5 3 2 * + 4 -`:**

| Token | Action | Stack (bottom $\to$ top) |
|-------|--------|--------------------------|
| 5 | Push | [5] |
| 3 | Push | [5, 3] |
| 2 | Push | [5, 3, 2] |
| * | Pop 2, 3; push $3 \times 2 = 6$ | [5, 6] |
| + | Pop 6, 5; push $5 + 6 = 11$ | [11] |
| 4 | Push | [11, 4] |
| - | Pop 4, 11; push $11 - 4 = 7$ | [7] |

Result: 7.

**Shunting-yard for `(A + B) * (C - D) / E`:**

| Token | Action | Operator Stack | Output |
|-------|--------|---------------|--------|
| ( | Push | [(] | |
| A | Output | [(] | A |
| + | Push | [(, +] | A |
| B | Output | [(, +] | A B |
| ) | Pop until ( | [] | A B + |
| * | Push | [*] | A B + |
| ( | Push | [*, (] | A B + |
| C | Output | [*, (] | A B + C |
| - | Push | [*, (, -] | A B + C |
| D | Output | [*, (, -] | A B + C D |
| ) | Pop until ( | [*] | A B + C D - |
| / | Pop * (same precedence, left-assoc), push / | [/] | A B + C D - * |
| E | Output | [/] | A B + C D - * E |
| end | Pop all | [] | A B + C D - * E / |

Postfix: `A B + C D - * E /`

Note: `*` and `/` have the same precedence, so `*` is popped before pushing `/` (left-to-right associativity).

---
### IT-2: Graph Representation and Traversal (with Algorithms)
**Question:** A weighted graph has vertices A, B, C, D, E with edges: A-B(4), A-C(2), B-C(1), B-D(5), C-D(8), C-E(10), D-E(2). (a) Represent this as an adjacency matrix. (b) Perform Dijkstra's algorithm from A to all vertices. (c) State the shortest path from A to E and its total weight.

**Solution:**

(a) **Adjacency matrix:**

| | A | B | C | D | E |
|---|---|---|---|---|---|
| A | 0 | 4 | 2 | $\infty$ | $\infty$ |
| B | 4 | 0 | 1 | 5 | $\infty$ |
| C | 2 | 1 | 0 | 8 | 10 |
| D | $\infty$ | 5 | 8 | 0 | 2 |
| E | $\infty$ | $\infty$ | 10 | 2 | 0 |

(b) **Dijkstra's algorithm from A:**

Initial: dist $= [0, \infty, \infty, \infty, \infty]$, visited $= \{\}$, prev $= [-, -, -, -, -]$.

Visit A (dist $= 0$): update B $= 4$, C $= 2$. dist $= [0, 4, 2, \infty, \infty]$.

Visit C (dist $= 2$): update B $= \min(4, 2+1) = 3$, D $= 2+8 = 10$, E $= 2+10 = 12$. dist $= [0, 3, 2, 10, 12]$.

Visit B (dist $= 3$): update D $= \min(10, 3+5) = 8$. dist $= [0, 3, 2, 8, 12]$.

Visit D (dist $= 8$): update E $= \min(12, 8+2) = 10$. dist $= [0, 3, 2, 8, 10]$.

Visit E (dist $= 10$): no improvements.

Final distances: A$=0$, B$=3$, C$=2$, D$=8$, E$=10$.

(c) Shortest path A to E: trace back using prev array.

A $\to$ C (prev[C] $=$ A), C $\to$ B (prev[B] $=$ C), B $\to$ D (prev[D] $=$ B), D $\to$ E (prev[E] $=$ D).

Path: A $\to$ C $\to$ B $\to$ D $\to$ E. Weight: $2 + 1 + 5 + 2 = 10$.

Alternative path A $\to$ B $\to$ D $\to$ E: weight $4 + 5 + 2 = 11$ (longer).

Alternative path A $\to$ C $\to$ D $\to$ E: weight $2 + 8 + 2 = 12$ (longer).

The shortest path is A $\to$ C $\to$ B $\to$ D $\to$ E with total weight 10.

---
### IT-3: Tree Balancing and Complexity (with Complexity Analysis)
**Question:** A binary search tree has $n$ nodes. (a) What is the worst-case height and best-case height? (b) If values 1, 2, 3, 4, 5, 6, 7 are inserted in sorted order, what is the resulting tree structure and height? (c) State the time complexity of searching in this tree vs a balanced tree. (d) If each comparison takes $1\ \mu\text{s}$, calculate the maximum search time for $n = 1000000$ in a balanced vs unbalanced tree.

**Solution:**

(a) Worst-case height: $n - 1$ (degenerate tree, essentially a linked list). Best-case height: $\lfloor \log_2 n \rfloor$ (perfectly balanced).

(b) Inserting 1, 2, 3, 4, 5, 6, 7 in sorted order produces a right-skewed tree:
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
         \
          6
           \
            7
```
Height $= 6$ ($n - 1 = 7 - 1 = 6$).

(c) Searching in the unbalanced tree: $O(n)$ worst case (traverse all $n$ nodes).
Searching in a balanced tree: $O(\log n)$ worst case.

(d) For $n = 1000000$:

Unbalanced tree: up to $1000000$ comparisons $\times 1\ \mu\text{s} = 1000\ \text{ms} = 1\ \text{second}$.

Balanced tree: $\lceil \log_2 1000000 \rceil = 20$ comparisons $\times 1\ \mu\text{s} = 20\ \mu\text{s}$.

The balanced tree is $50000$ times faster. This demonstrates why tree balancing (e.g., AVL trees, red-black trees) is critical for maintaining efficient search operations.
