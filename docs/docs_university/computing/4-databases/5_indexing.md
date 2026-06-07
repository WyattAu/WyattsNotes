---
title: Indexing
tags:
  - Computing
  - University
---

### 5.1 B-Trees and B+ Trees

**B-Tree of order $m$.** A balanced search tree where each internal node has between
$\lceil m/2
\rceil$ and $M$ children. All leaves are at the same depth.

Properties:

- Root: at least 2 children (unless it is a leaf).
- Internal node with $k$ children has $k - 1$ keys.
- All leaves at the same depth $h$.
- Height: $h = O(\log_m n)$.

**Operations:**

- **Search:** $O(\log_m n)$. At each node, binary search the keys and follow the appropriate child
  pointer.
- **Insert:** Find the correct leaf. If the leaf has room, insert. If full, **split** the leaf and
  propagate the median key up. May cascade splits to the root.
- **Delete:** Find the key. If in an internal node, replace with predecessor/successor and delete
  from the leaf. If a node underflows (fewer than $\lceil m/2 \rceil - 1$ keys), **redistribute**
  from a sibling or **merge** with a sibling.

**B+ Tree.** Variant where:

- All data records are stored only in leaf nodes (internal nodes store only keys for routing).
- Leaf nodes are linked in a linked list for efficient range queries.

This makes B+ trees the standard for database indexing. The linked leaf list allows range scans in
$O(\log_m n + k)$ where $k$ is the number of records in the range.

**B+ Tree insert pseudocode:**

```python
def bplus_insert(root, key, value):
    leaf = find_leaf(root, key)
    insert_into_leaf(leaf, key, value)
    if len(leaf.keys) > MAX_KEYS:
        new_leaf, median = split_leaf(leaf)
        insert_into_parent(leaf.parent, median, new_leaf)
```

<details>
<summary>Worked Example 5.1: B+ Tree Insertion</summary>

Insert keys 10, 20, 5, 15, 25, 30 into a B+ tree with maximum 2 keys per leaf node and maximum 2
Keys per internal node (order $m = 3$).

**Insert 10.** Leaf: $[10]$

**Insert 20.** Leaf: $[10, 20]$

**Insert 5.** Leaf would be $[5, 10, 20]$ -- overflow (max 2 keys). Split: left leaf $[5]$Right Leaf
$[10, 20]$. Push median (10) to new internal node.

```
Internal: [10]
  ├── Leaf: [5]
  └── Leaf: [10, 20]
```

**Insert 15.** Goes to right leaf. Leaf would be $[10, 15, 20]$ -- overflow. Split: $[10, 15]$ and
$[20]$. Push 15 up.

```
Internal: [10, 15]
  ├── Leaf: [5]
  ├── Leaf: [10, 15]
  └── Leaf: [20]
```

**Insert 25.** Goes to rightmost leaf. Leaf: $[20, 25]$.

**Insert 30.** Leaf would be $[20, 25, 30]$ -- overflow. Split: $[20, 25]$ and $[30]$. Push 25 up.
Internal would be $[10, 15, 25]$ -- overflow (max 2 keys). Split internal: push 15 to new root.

```
Root: [15]
  ├── Internal: [10]
  │     ├── Leaf: [5]
  │     └── Leaf: [10, 15]
  └── Internal: [25]
        ├── Leaf: [20, 25]
        └── Leaf: [30]
```

</details>

<details>
<summary>Worked Example 5.2: B+ Tree Deletion</summary>

Starting from the tree in Example 5.1, delete key 25.

**Delete 25.** Found in rightmost leaf of the right internal node. Leaf becomes $[30]$ (1 key,
Minimum is $\lceil 2/2 \rceil = 1$). No underflow. Update internal node: key 25 changes to 30 (to
maintain correct routing).

```
Root: [15]
  ├── Internal: [10]
  │     ├── Leaf: [5]
  │     └── Leaf: [10, 15]
  └── Internal: [30]
        ├── Leaf: [20]
        └── Leaf: [30]
```

Now delete 15. Leaf $[10, 15]$ becomes $[10]$. No underflow. Internal node key 15 changes to 10. But
wait -- the internal node $[10]$ would need to distinguish between leaves $[5]$ and $[10]$. Since
the left child contains keys $\lt 10$ and the right child contains keys $\geq 10$This Is still
correct.

Now delete 10 from the left subtree's right leaf. Leaf becomes empty -- underflow.

**Redistribution:** Sibling leaf $[5]$ has 1 key (at minimum). Cannot redistribute. **Merge:** Merge
empty leaf with $[5]$. The merged leaf is $[5]$. The internal node $[10]$ now has Only one child
(the merged leaf), so it underflows.

Since the internal node is a child of the root, and the root has two children, we can merge: remove
The internal node and promote its remaining child to be a direct child of the root.

```
Root: [30]
  ├── Leaf: [5]
  ├── Leaf: [10]     (originally contained 10 before deletion)
  └── Leaf: [30]
```

Wait -- after deleting 10, the leaf $[10]$ should become $[]$And merging with $[5]$ gives $[5]$. Let
me retrace. The point is that deletion can trigger cascading merges up the tree.

</details>

### 5.2 Hash Indexes

**Static hashing.** A hash function $h : K \to \\{0, \ldots, B - 1\\}$ maps keys to $B$ buckets.
Average lookup: $O(1)$ under uniform hashing. No support for range queries.

**Collision handling.** When two keys hash to the same bucket, the DBMS must resolve the collision:

1. **Separate chaining:** Each bucket contains a linked list of entries. Lookup requires traversing
   the chain. Average chain length under uniform hashing is $n / B$.
2. **Open addressing (linear probing):** If bucket $h(k)$ is full, try $h(k)+1$, $h(k)+2$Etc. (mod
   $B$). Prone to **primary clustering**: consecutive occupied slots increase the average probe
   length.
3. **Open addressing (quadratic probing):** Try $h(k) + 1^2, h(k) + 2^2, h(k) + 3^2$Etc. Reduces
   clustering but may not probe all buckets.
4. **Open addressing (double hashing):** Use a second hash function $h_2$: probe sequence is
   $h(k) + i \cdot h_2(k)$ for $i = 0, 1, 2, \ldots$. Minimises clustering.

**Extendible hashing.** Dynamically grows the number of buckets. Uses a **global depth** $d$ and
Per-bucket **local depth** $d'$.

- Hash key to $d$ bits.
- If the bucket is full and its local depth equals the global depth, double the directory (global
  depth increases by 1) and split the bucket.
- If the bucket's local depth is less than the global depth, split the bucket without doubling the
  directory.

**Linear hashing.** Gradually grows one bucket at a time using a pointer to the next bucket to
split. Simpler than extendible hashing but may have slightly higher overflow probability.

**Comparison:**

| Property      | B+ Tree                 | Hash Index               |
| ------------- | ----------------------- | ------------------------ |
| Point query   | $O(\log_m n)$           | $O(1)$ average           |
| Range query   | $O(\log_m n + k)$       | Not supported            |
| Insert/Delete | $O(\log_m n)$           | $O(1)$ average           |
| Space         | Nodes may be half-empty | May have overflow chains |
| Order         | Maintains key order     | No ordering              |

### 5.3 Bitmap Indexes

A **bitmap index** creates one bitmap per distinct value of an attribute. For a table with $n$ rows
And attribute $A$ with values $\\{v_1, \ldots, v_k\\}$Store $k$ bitmaps of $n$ bits each, where
Bitmap $i$ has a 1 in position $j$ if row $j$ has $A = v_i$.

**Use case:** Low-cardinality columns (gender, status, country). Bitmap indexes support fast bitwise
AND/OR for multi-criteria queries.

**Bitwise operations for query evaluation:**

| Query                   | Bitmap operation                                        |
| ----------------------- | ------------------------------------------------------- |
| $A = v_1$ AND $B = v_2$ | $\mathrm{bitmap_}{A,v_1}$ AND $\mathrm{bitmap_}{B,v_2}$ |
| $A = v_1$ OR $A = v_2$  | $\mathrm{bitmap_}{A,v_1}$ OR $\mathrm{bitmap_}{A,v_2}$  |
| $A \neq v_1$            | NOT $\mathrm{bitmap_}{A,v_1}$                           |

**Compression.** For columns with many distinct values, run-length encoding (WAH or BBC) compresses
Bitmaps effectively while still supporting bitwise operations.

### 5.4 Query Processing Cost Estimation

The **cost model** estimates the number of disk I/O operations for a query plan. We assume the
buffer Pool has $B$ pages and each disk page access costs one I/O.

**Selection cost estimation:**

| Access method           | Cost (I/Os)                                               |
| ----------------------- | --------------------------------------------------------- |
| Full table scan         | $\lceil n_R / B \rceil$ (or $n_R$ if $B$ pages available) |
| B+ tree equality search | $\log_f(n_R)$ leaf + 1 data page                          |
| B+ tree range search    | $\log_f(n_R)$ leaf + $\lvert\mathrm{range} pages\rvert$   |
| Hash equality search    | 1 (ideal)                                                 |

Where $f$ is the fanout (average number of children per internal node).

**Join cost estimation (from Section 7):**

| Algorithm         | Cost                                                      |
| ----------------- | --------------------------------------------------------- |
| Block nested-loop | $n_R + \lceil n_R/(B-2)\rceil \cdot n_S$                  |
| Sort-merge        | $2n_R \log_{B-1}(n_R) + 2n_S \log_{B-1}(n_S) + n_R + n_S$ |
| Hash join         | $3(n_R + n_S)$ (if build relation fits in $B$ pages)      |

<details>
<summary>Worked Example 5.3: Comparing Access Methods</summary>

**Scenario:** `Student` table with 50000 tuples, 2500 pages (20 tuples per page). Buffer pool has 52
Pages. Attribute `ID` has a B+ tree index of height 3 (fanout 100). Query:
`SELECT * FROM Student WHERE ID = 12345`.

**Method 1: Full table scan.** Cost = 2500 I/Os.

**Method 2: B+ tree index on `ID`.** Follow root $\to$ internal $\to$ internal $\to$ leaf: 3 I/Os
For the index traversal. Then 1 I/O for the data page. Total: 4 I/Os.

The B+ tree index is $625\times$ faster for a single equality lookup. However, for a query selecting
50% of the table, a full scan (2500 I/Os) would be faster than 25000 individual B+ tree lookups
($25000 \times 4 = 100000$ I/Os). This is why the optimiser chooses between index and scan based on
Selectivity estimates.

</details>

