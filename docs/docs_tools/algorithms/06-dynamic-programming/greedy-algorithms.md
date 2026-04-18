---
id: greedy-algorithms
title: Greedy Algorithms
description:
  Greedy strategies — exchange argument, matroids, scheduling, graph algorithms, and when greedy
  works vs fails.
slug: greedy-algorithms
---

## The Greedy Paradigm

A greedy algorithm makes the locally optimal choice at each step, hoping this leads to a globally
optimal solution. Unlike dynamic programming, greedy algorithms do not consider all possible
subproblems — they commit to a choice and never reconsider.

### When to Consider Greedy

| Signal                                                         | Try Greedy First? |
| -------------------------------------------------------------- | ----------------- |
| Problem has a matroid structure                                | Yes               |
| Activity/resource scheduling with ordering                     | Yes               |
| Huffman-like optimal prefix coding                             | Yes               |
| Fractional version of a knapsack problem                       | Yes               |
| MST or shortest path on non-negative weights                   | Yes               |
| 0/1 knapsack, partition, edit distance                         | No (use DP)       |
| TSP                                                            | No (NP-hard)      |
| Problem requires "try all possibilities" to verify correctness | Probably No       |

## The Exchange Argument

The exchange argument is the primary proof technique for greedy correctness. The idea: assume an
optimal solution differs from the greedy solution, then show we can exchange some element of the
optimal solution with the greedy choice without making the solution worse.

### Structure of an Exchange Argument

1. Let $G$ be the greedy solution and $O$ be an optimal solution
2. Find the first point where $G$ and $O$ differ
3. Show that replacing the optimal's choice with the greedy's choice produces a solution $O'$ that
   is at least as good as $O$
4. Conclude that there exists an optimal solution that agrees with the greedy at this step
5. By induction, the greedy solution is optimal

### Example: Activity Selection

Given $n$ activities with start times $s_i$ and finish times $f_i$, select the maximum number of
non-overlapping activities.

**Greedy**: always pick the activity with the earliest finish time.

```python
def activity_selection(activities):
    """
    Maximum number of non-overlapping activities.
    Greedy: sort by finish time, pick earliest finishing.
    Time: O(n log n) for sorting
    Space: O(1) (excluding input)
    """
    sorted_activities = sorted(activities, key=lambda x: x[1])
    count = 0
    last_finish = float('-inf')

    for start, finish in sorted_activities:
        if start >= last_finish:
            count += 1
            last_finish = finish

    return count
```

**Exchange argument proof:**

Let $G = \{g_1, g_2, \ldots\}$ be the greedy solution and $O = \{o_1, o_2, \ldots\}$ be an optimal
solution, both sorted by finish time. $g_1$ has the earliest finish time of all activities. Since
$o_1$ also finishes before $o_2, o_3, \ldots$, we have $f(g_1) \le f(o_1)$. Replacing $o_1$ with
$g_1$ in $O$ gives a valid solution (since $g_1$ finishes no later than $o_1$, it does not overlap
with $o_2$). The new solution has the same size as $O$ and starts with $g_1$. By induction,
$|G| = |O|$.

:::tip

The earliest finish time is not the only valid greedy criterion for activity selection — earliest
start time and shortest duration do NOT work. The key insight is that picking the activity that
finishes earliest leaves the maximum remaining time for other activities.

:::

## Huffman Coding

Huffman coding constructs an optimal prefix-free code for a set of symbols with given frequencies.
It produces a binary tree where more frequent symbols have shorter codes.

### Algorithm

1. Create a leaf node for each symbol with its frequency
2. Repeatedly merge the two nodes with the smallest frequencies
3. The merged node's frequency is the sum of its children's frequencies
4. Continue until one tree remains

```python
import heapq

def huffman(frequencies):
    """
    Build Huffman codes from symbol frequencies.
    Time: O(n log n) where n = number of symbols
    Space: O(n)
    Returns: dict mapping symbol -> code string
    """
    heap = [(freq, i, sym) for i, (sym, freq) in enumerate(frequencies.items())]
    heapq.heapify(heap)

    children = {}
    counter = len(heap)

    while len(heap) > 1:
        f1, _, n1 = heapq.heappop(heap)
        f2, _, n2 = heapq.heappop(heap)
        merged = f1 + f2
        children[(merged, counter)] = (n1, n2)
        heapq.heappush(heap, (merged, counter, (merged, counter)))
        counter += 1

    codes = {}
    def assign_codes(node, code):
        if isinstance(node, str):
            codes[node] = code if code else '0'
            return
        left, right = children[node]
        assign_codes(left, code + '0')
        assign_codes(right, code + '1')

    if heap:
        _, _, root = heap[0]
        if isinstance(root, str):
            codes[root] = '0'
        else:
            assign_codes(root, '')

    return codes
```

### Optimality Proof (Exchange Argument)

**Claim**: Huffman's algorithm produces a prefix code with minimum expected length.

**Proof sketch**:

1. **Lemma 1**: In an optimal prefix code, the two least frequent symbols are siblings at the
   deepest level. If they were not, swapping a more frequent symbol deeper would not increase the
   expected length.

2. **Lemma 2**: The Huffman merge step preserves optimality. If we have an optimal code for $n-1$
   symbols (where the two least frequent symbols are merged), we can expand the merged symbol back
   into two siblings to get an optimal code for $n$ symbols.

3. **By induction**: The algorithm produces optimal codes at every step.

### Expected Code Length

$$L = \sum_{i=1}^{n} f_i \cdot \mathrm{len}(c_i)$$

For a source with entropy $H = -\sum f_i \log_2 f_i$, Huffman coding satisfies $H \le L \lt H + 1$
(one bit per symbol worse than the theoretical minimum).

## Fractional Knapsack

Unlike 0/1 knapsack, the fractional version allows taking fractions of items. Greedy works: sort by
value-to-weight ratio and take as much as possible of the highest-ratio items.

```python
def fractional_knapsack(weights, values, capacity):
    """
    Fractional knapsack — can take fractions of items.
    Time: O(n log n)
    Space: O(n)
    """
    items = sorted(
        zip(values, weights),
        key=lambda x: x[0] / x[1],
        reverse=True
    )

    total_value = 0.0
    remaining = capacity

    for v, w in items:
        if remaining <= 0:
            break
        take = min(w, remaining)
        total_value += take * (v / w)
        remaining -= take

    return total_value
```

### Why Greedy Fails for 0/1 Knapsack

Consider items with (value, weight): `(60, 10)`, `(100, 20)`, `(120, 30)` with capacity 50.

- Greedy by ratio: take item 1 (60/10 = 6), item 2 (100/20 = 5), item 3 (120/30 = 4). Total: 60 +
  100 = 160, weight 30. Cannot add item 3 (weight 30 > remaining 20).
- Optimal: items 2 and 3. Total: 100 + 120 = 220, weight 50.

The greedy choice of the highest-ratio item excludes the optimal combination. This is because 0/1
knapsack lacks the matroid structure that fractional knapsack has.

## Interval Scheduling Variants

### Weighted Interval Scheduling

When each interval has a weight and we want to maximise total weight (not count), greedy by earliest
finish time does not work. Use DP instead.

```python
def weighted_interval_scheduling(intervals):
    """
    Maximum weight set of non-overlapping intervals.
    Time: O(n log n)
    Space: O(n)
    """
    intervals.sort(key=lambda x: x[1])
    n = len(intervals)
    starts = [iv[0] for iv in intervals]
    import bisect

    def latest_non_overlapping(j):
        i = bisect.bisect_right(starts, intervals[j][0]) - 1
        return i

    dp = [0] * (n + 1)
    for j in range(1, n + 1):
        include = intervals[j - 1][2] + dp[latest_non_overlapping(j - 1) + 1]
        exclude = dp[j - 1]
        dp[j] = max(include, exclude)

    return dp[n]
```

### Interval Partitioning (Minimum Meeting Rooms)

Given $n$ intervals, find the minimum number of rooms needed to schedule all meetings without
overlap.

```python
def min_meeting_rooms(intervals):
    """
    Minimum number of rooms for all meetings.
    Greedy: sort start times, use min-heap for end times.
    Time: O(n log n)
    Space: O(n)
    """
    import heapq
    intervals.sort(key=lambda x: x[0])
    heap = []

    for start, end in intervals:
        if heap and heap[0] <= start:
            heapq.heappop(heap)
        heapq.heappush(heap, end)

    return len(heap)
```

## Greedy on Graphs

### Kruskal's Algorithm

Repeatedly add the cheapest edge that does not create a cycle. This produces a minimum spanning
tree.

```python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return False
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        return True

def kruskal(n, edges):
    """
    Minimum spanning tree using Kruskal's algorithm.
    Time: O(E log E) for sorting
    Space: O(V + E)
    """
    edges.sort(key=lambda x: x[2])
    uf = UnionFind(n)
    mst = []
    total_weight = 0

    for u, v, w in edges:
        if uf.union(u, v):
            mst.append((u, v, w))
            total_weight += w
            if len(mst) == n - 1:
                break

    return mst, total_weight
```

### Prim's Algorithm

Grow the MST from an arbitrary vertex, always adding the cheapest edge connecting the tree to a
non-tree vertex.

```python
import heapq

def prim(n, graph):
    """
    Minimum spanning tree using Prim's algorithm.
    Time: O((V + E) log V) with binary heap
    Space: O(V + E)
    """
    visited = [False] * n
    min_heap = [(0, 0, -1)]
    mst = []
    total_weight = 0

    while min_heap:
        weight, u, parent = heapq.heappop(min_heap)
        if visited[u]:
            continue
        visited[u] = True
        total_weight += weight
        if parent != -1:
            mst.append((parent, u, weight))
        for v, w in graph[u]:
            if not visited[v]:
                heapq.heappush(min_heap, (w, v, u))

    return mst, total_weight
```

### Dijkstra's Algorithm

Dijkstra's algorithm is greedy: it always processes the vertex with the smallest tentative distance.
The greedy choice is safe because with non-negative weights, the shortest path to any vertex through
already-processed vertices cannot be improved by going through unprocessed vertices.

```python
import heapq

def dijkstra(n, graph, source):
    """
    Shortest paths from source using Dijkstra.
    Requires non-negative edge weights.
    Time: O((V + E) log V)
    Space: O(V)
    """
    dist = [float('inf')] * n
    dist[source] = 0
    pq = [(0, source)]

    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))

    return dist
```

:::warning

Dijkstra's greedy choice fails with negative edge weights because a shorter path through an
unprocessed vertex may exist. Use Bellman-Ford ($O(VE)$) for graphs with negative weights but no
negative cycles.

:::

## Matroid Theory

A matroid is a combinatorial structure that captures the notion of "independence." Greedy algorithms
are optimal on matroids.

### Definition

A matroid $M = (S, \mathcal{I})$ consists of a finite set $S$ and a collection $\mathcal{I}$ of
independent subsets of $S$ satisfying:

1. **Hereditary property**: if $A \in \mathcal{I}$ and $B \subseteq A$, then $B \in \mathcal{I}$
2. **Exchange property**: if $A, B \in \mathcal{I}$ and $|A| \lt |B|$, then there exists
   $x \in B \setminus A$ such that $A \cup \{x\} \in \mathcal{I}$

### Matroid Greedy Theorem

**Theorem**: The greedy algorithm (sort elements by weight, add each element if the result remains
independent) finds the maximum-weight independent set in any matroid.

### Examples of Matroids

| Matroid             | Set $S$          | Independent Sets $\mathcal{I}$     | Greedy Problem     |
| ------------------- | ---------------- | ---------------------------------- | ------------------ |
| Graphic matroid     | Edges of a graph | Acyclic subsets (forests)          | MST (Kruskal)      |
| Partition matroid   | Elements         | At most one from each partition    | Assignment         |
| Linear matroid      | Vectors          | Linearly independent sets          | Max weight basis   |
| Uniform matroid     | Elements         | Subsets of size $\le k$            | Top-k selection    |
| Transversal matroid | Elements         | System of distinct representatives | Bipartite matching |

```mermaid
graph TD
    MATROID["Matroid M = (S, I)"]
    MATROID --> H["Hereditary: subset of independent is independent"]
    MATROID --> E["Exchange: can extend smaller independent set from larger"]
    MATROID --> G["Greedy is optimal: max-weight independent set"]
```

### Why 0/1 Knapsack Is Not a Matroid

The independent sets of the 0/1 knapsack (sets whose total weight does not exceed capacity) do not
satisfy the exchange property. Consider capacity 10, items of weights {6, 6, 5}. Sets {6} and {5}
are independent, but neither can be extended by the other to remain within capacity 10. This is why
greedy fails for 0/1 knapsack.

## Job Scheduling

### Shortest Processing Time (SPT)

Minimise average completion time by processing jobs in order of increasing processing time.

```python
def spt_scheduling(jobs):
    """
    Shortest Processing Time scheduling.
    Minimises mean completion time.
    Time: O(n log n)
    """
    jobs.sort()
    completion_time = 0
    total_completion = 0
    for job in jobs:
        completion_time += job
        total_completion += completion_time
    return total_completion / len(jobs)
```

### Earliest Deadline First (EDF)

Schedule jobs with deadlines to maximise the number of on-time completions.

```python
def earliest_deadline_first(jobs):
    """
    Schedule jobs to maximise number completed before deadline.
    Greedy: sort by deadline, process in order.
    Time: O(n log n)
    """
    jobs.sort(key=lambda x: x[1])
    current_time = 0
    completed = 0
    for duration, deadline in jobs:
        current_time += duration
        if current_time <= deadline:
            completed += 1
    return completed
```

### Weighted Scheduling with Deadlines

```python
def weighted_job_scheduling(jobs):
    """
    Maximise profit with deadlines (each job takes 1 unit).
    Greedy: sort by profit descending, schedule at latest available slot.
    Time: O(n log n) with union-find optimisation
    Space: O(n)
    """
    jobs.sort(key=lambda x: x[1], reverse=True)
    max_deadline = max(j[2] for j in jobs) if jobs else 0
    slots = [-1] * (max_deadline + 1)

    def find_slot(deadline):
        if deadline == 0:
            return -1
        if slots[deadline] == -1:
            return deadline
        slots[deadline] = find_slot(slots[deadline] - 1)
        return slots[deadline]

    total_profit = 0
    for profit, _, deadline in jobs:
        slot = find_slot(deadline)
        if slot != -1:
            slots[slot] = slot
            total_profit += profit

    return total_profit
```

## Coin Change (When Greedy Works)

### Canonical Coin Systems

Greedy coin change (always take the largest coin possible) works for certain coin systems called
**canonical systems**.

```python
def greedy_coin_change(amount, coins):
    """
    Greedy coin change — optimal for canonical coin systems.
    Time: O(amount / min_coin) = O(amount)
    Space: O(1)
    """
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        if amount >= coin:
            num = amount // coin
            count += num
            amount -= num * coin
        if amount == 0:
            break
    return count if amount == 0 else -1
```

### When Greedy Fails for Coin Change

Coins `{1, 3, 4}`, amount 6:

- Greedy: 4 + 1 + 1 = 3 coins
- Optimal: 3 + 3 = 2 coins

The coin system `{1, 3, 4}` is not canonical. For non-canonical systems, use DP.

```python
def dp_coin_change(amount, coins):
    """
    DP coin change — works for any coin system.
    Time: O(amount * len(coins))
    Space: O(amount)
    """
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for coin in coins:
            if coin <= a:
                dp[a] = min(dp[a], dp[a - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1
```

## Set Cover (Greedy Approximation)

Given a universe $U$ and a collection of subsets $S_1, S_2, \ldots, S_m$, find the minimum number of
subsets whose union is $U$. This is NP-hard, but a greedy algorithm gives a
$(\ln n + 1)$-approximation.

```python
def greedy_set_cover(universe, subsets):
    """
    Greedy set cover — (ln n + 1)-approximation.
    Time: O(|U| * m^2) naive, O(|U| * m) with efficient tracking
    Space: O(|U| + m)
    """
    uncovered = set(universe)
    cover = []

    while uncovered:
        best_subset = max(subsets, key=lambda s: len(s & uncovered))
        cover.append(best_subset)
        uncovered -= best_subset
        subsets.remove(best_subset)

    return cover
```

:::info

The greedy set cover algorithm is essentially optimal in terms of approximation ratio for
polynomial-time algorithms (assuming P != NP). The $(\ln n + 1)$ bound is tight — there exist
instances where greedy achieves no better than this ratio.

:::

## Egyptian Fractions

Express a fraction $a/b$ as a sum of distinct unit fractions (fractions with numerator 1). The
greedy algorithm always works for Egyptian fractions.

```python
def egyptian_fraction(a, b):
    """
    Greedy Egyptian fraction decomposition.
    Always terminates (Fibonacci-Sylvester algorithm).
    Time: O(log b) iterations
    """
    result = []
    while a != 0:
        x = (b + a - 1) // a
        result.append(x)
        a = a * x - b
        b = b * x
    return result
```

## Greedy vs DP Decision Framework

When you encounter a problem that could be solved by either greedy or DP:

### Step 1: Check for Matroid Structure

If the independent sets form a matroid, greedy is optimal. Check the hereditary and exchange
properties.

### Step 2: Try an Exchange Argument

Assume greedy is not optimal. Can you construct a counterexample? If you cannot construct one after
trying several cases, try to prove it with an exchange argument. If the proof works, greedy is
correct.

### Step 3: Check Known Patterns

| Greedy works                   | Greedy fails (use DP)           |
| ------------------------------ | ------------------------------- |
| Fractional knapsack            | 0/1 knapsack                    |
| Activity selection (max count) | Weighted activity selection     |
| Huffman coding                 | Optimal BST                     |
| MST (Kruskal/Prim)             | Steiner tree                    |
| Dijkstra (non-negative)        | Bellman-Ford (negative weights) |
| Earliest deadline first        | Weighted interval scheduling    |
| Canonical coin change          | General coin change             |
| Set cover approximation        | Exact set cover                 |

### Step 4: Verify with Small Examples

Test your greedy solution on small inputs and compare with brute force. If they disagree, greedy is
wrong. If they agree on many small inputs, greedy is likely correct (but not proven).

## Common Pitfalls

### 1. Assuming Greedy Works Without Proof

The most dangerous pitfall: writing a greedy solution that looks correct but produces wrong answers
on some inputs. Always either prove correctness with an exchange argument or test against brute
force on small inputs. Greedy solutions that are not provably correct are essentially guesses.

### 2. Wrong Sorting Criterion

Activity selection by earliest start time is wrong. Shortest job first for weighted completion time
is wrong. The greedy criterion must be chosen carefully and justified. When unsure, try all
reasonable sorting criteria on small examples.

### 3. Not Checking All Greedy Variants

Sometimes greedy works but with a different criterion. For activity selection, earliest finish time
works but earliest start time and shortest duration do not. For coin change, largest-first works for
canonical systems. Always consider multiple greedy strategies before concluding that greedy does not
apply.

### 4. Confusing Fractional and 0/1 Knapsack

Fractional knapsack admits a greedy solution (sort by ratio), but 0/1 knapsack does not. The
difference is that in the fractional version, you can take a fraction of an item, which preserves
the matroid structure. Read the problem statement carefully to determine which version applies.

### 5. Dijkstra with Negative Weights

Dijkstra's greedy choice (process the vertex with the smallest distance) is safe only with
non-negative weights. With negative weights, a shorter path through an unprocessed vertex may exist.
Use Bellman-Ford ($O(VE)$) instead, or add a constant to all weights (which does NOT work — it
changes relative path costs).

### 6. Set Cover Approximation Ratio

The greedy set cover algorithm has an approximation ratio of $\ln n + O(1)$, not 2. A common mistake
is to think greedy gives a constant-factor approximation. For some inputs, greedy is off by a factor
of $\ln n$.

### 7. Ignoring Ties in Greedy Selection

When two elements have the same greedy value (e.g., same finish time), the tie-breaking rule can
matter. In activity selection, ties can be broken arbitrarily. In Huffman coding, ties in frequency
should be broken consistently. In MST algorithms, ties in edge weight should be handled carefully to
avoid creating cycles.

### 8. Greedy for Online Problems

Online problems (where decisions must be made without knowledge of future inputs) often have no
optimal greedy strategy. For example, the online paging problem has a competitive ratio of $k$ for
LRU (greedy by recency), while the optimal offline algorithm (Belady's) is $k/(k-h+1)$ competitive.
Distinguish between online and offline versions of problems.

## Additional Greedy Problems and Techniques

### Minimum Spanning Tree Variants

#### Minimum Bottleneck Spanning Tree

The minimum bottleneck spanning tree minimises the maximum edge weight in the tree. Any MST is also
an MBST, so Kruskal's or Prim's algorithm directly solves this problem.

```python
def min_bottleneck_spanning_tree(n, edges):
    """
    Find the minimum bottleneck spanning tree.
    Any MST is also an MBST.
    Time: O(E log E) via Kruskal
    """
    mst, _ = kruskal(n, edges)
    bottleneck = max(w for _, _, w in mst)
    return bottleneck
```

#### Degree-Constrained Spanning Tree

Find an MST where no vertex has degree exceeding $d$. This is NP-hard in general, but a greedy
approach works well as a heuristic: run Kruskal but skip any edge that would cause a vertex to
exceed degree $d$.

### Greedy String Algorithms

#### Minimum Window Substring

Given strings $s$ and $t$, find the minimum window in $s$ that contains all characters of $t$.

```python
from collections import Counter

def min_window_substring(s, t):
    """
    Minimum window in s containing all characters of t.
    Time: O(|s| + |t|)
    Space: O(|t|)
    """
    need = Counter(t)
    missing = len(t)
    left = 0
    result = (0, float('inf'))

    for right, ch in enumerate(s):
        if need[ch] > 0:
            missing -= 1
        need[ch] -= 1

        while missing == 0:
            if right - left < result[1] - result[0]:
                result = (left, right)
            need[s[left]] += 1
            if need[s[left]] > 0:
                missing += 1
            left += 1

    return "" if result[1] == float('inf') else s[result[0]:result[1] + 1]
```

#### Reorganise String

Rearrange characters so that no two adjacent characters are the same.

```python
import heapq

def reorganise_string(s):
    """
    Rearrange string so no two adjacent chars are the same.
    Greedy: always place the most frequent remaining character.
    Time: O(n log ALPHABET_SIZE) = O(n)
    Space: O(ALPHABET_SIZE)
    """
    freq = Counter(s)
    max_freq = max(freq.values())
    if max_freq > (len(s) + 1) // 2:
        return ""

    heap = [(-count, ch) for ch, count in freq.items()]
    heapq.heapify(heap)

    result = []
    prev_count, prev_ch = 0, ''

    while heap:
        count, ch = heapq.heappop(heap)
        result.append(ch)
        count += 1

        if prev_count < 0:
            heapq.heappush(heap, (prev_count, prev_ch))

        prev_count, prev_ch = count, ch

    return ''.join(result)
```

### Greedy on Arrays

#### Jump Game II

Find the minimum number of jumps to reach the last index of an array where `arr[i]` is the maximum
jump length from position $i$.

```python
def jump_game_ii(nums):
    """
    Minimum jumps to reach the last index.
    Greedy: at each step, jump to the position that maximises reach.
    Time: O(n)
    Space: O(1)
    """
    jumps = 0
    current_end = 0
    farthest = 0

    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == current_end:
            jumps += 1
            current_end = farthest

    return jumps
```

#### Gas Station

Find the starting gas station index from which you can travel around the circuit once.

```python
def gas_station(gas, cost):
    """
    Find starting gas station to complete circuit.
    Greedy: if total gas >= total cost, a solution exists.
    The starting point is where the running sum is minimum.
    Time: O(n)
    Space: O(1)
    """
    total_tank = 0
    curr_tank = 0
    start = 0

    for i in range(len(gas)):
        total_tank += gas[i] - cost[i]
        curr_tank += gas[i] - cost[i]
        if curr_tank < 0:
            start = i + 1
            curr_tank = 0

    return start if total_tank >= 0 else -1
```

### Huffman Coding Variants

#### Optimal Merge Pattern

Given $n$ sorted files of sizes $s_1, s_2, \ldots, s_n$, merge them into one sorted file with
minimum total comparisons. This is identical to Huffman coding.

```python
import heapq

def optimal_merge(files):
    """
    Minimum total comparisons to merge sorted files.
    Same as Huffman coding — merge two smallest each time.
    Time: O(n log n)
    """
    heapq.heapify(files)
    total = 0
    while len(files) > 1:
        a = heapq.heappop(files)
        b = heapq.heappop(files)
        merged = a + b
        total += merged
        heapq.heappush(files, merged)
    return total
```

### Greedy for Geometric Problems

#### Convex Hull (Graham Scan)

```python
def convex_hull(points):
    """
    Graham scan for convex hull.
    Time: O(n log n)
    Space: O(n)
    """
    def cross(o, a, b):
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])

    points = sorted(set(points))
    if len(points) <= 1:
        return points

    lower = []
    for p in points:
        while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
            lower.pop()
        lower.append(p)

    upper = []
    for p in reversed(points):
        while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
            upper.pop()
        upper.append(p)

    return lower[:-1] + upper[:-1]
```

#### Activity Selection with Resources (Interval Colouring)

Assign the minimum number of resources (colours) to intervals so that overlapping intervals have
different colours. This is the interval graph colouring problem.

```python
def interval_colouring(intervals):
    """
    Minimum colours for interval graph (chromatic number).
    Greedy: sort by start time, assign smallest available colour.
    Time: O(n log n)
    Space: O(n)
    """
    intervals = sorted(intervals, key=lambda x: x[0])
    import heapq
    end_times = []
    colours = {}

    for i, (start, end) in enumerate(intervals):
        if end_times and end_times[0] <= start:
            colour = heapq.heappop(end_times)
        else:
            colour = len(end_times) + 1
        colours[i] = colour
        heapq.heappush(end_times, (end, colour))

    return colours, len(end_times)
```

### Proof Techniques Summary

| Technique            | When to Use                        | Key Idea                                      |
| -------------------- | ---------------------------------- | --------------------------------------------- |
| Exchange argument    | Scheduling, MST, Huffman, matroids | Swap optimal's choice with greedy's           |
| Greedy stays ahead   | Simple greedy with clear ordering  | Show greedy's partial solution is never worse |
| Cut-and-paste        | Partitioning problems              | Cut one solution, paste into another          |
| Induction            | Any greedy with natural ordering   | Prove step $k$ implies step $k+1$             |
| Matroid theorem      | When problem has matroid structure | Greedy is optimal on matroids                 |
| Lower bound matching | Approximation algorithms           | Show greedy achieves a known lower bound      |
