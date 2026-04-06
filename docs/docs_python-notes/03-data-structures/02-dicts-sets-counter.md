---
id: dicts-sets-counter
title: Dicts, Sets, and Collections Deep Dive
description:
  Python collections — dict internals, OrderedDict, defaultdict, Counter, ChainMap, and set
  operations.
slug: dicts-sets-counter
---

## Dict Internals

Python dicts are hash tables. CPython implements them using a combination of a sparse array of
indices and a dense array of entries, a design introduced in Python 3.6 and made mandatory in Python
3.7+.

### Hash Table Structure

Each dict maintains three structures internally:

1. **`ma_keys`** — A combined hash table storing hashes, keys, and values in parallel arrays.
2. **`ma_values`** — Optional separate values array (used for split-table dicts).
3. **`dk_size`** — The size of the hash table (always a power of 2).

The hash table uses **open addressing** with pseudo-random probing. When a collision occurs, CPython
does not follow a linked list (chaining) but instead probes subsequent slots using a perturbation
scheme.

```python
import sys

d = {"a": 1, "b": 2, "c": 3}
print(sys.getsizeof(d))  # Typically 232 bytes on 64-bit CPython 3.12
```

### Hash Computation

Python calls `hash(key)` on every key. The hash must be an integer. Built-in types implement
`__hash__` as follows:

| Type        | Hash Strategy                                                                   |
| ----------- | ------------------------------------------------------------------------------- |
| `int`       | `hash(n) = n` (with `-1` mapped to `-2` to avoid collision with error sentinel) |
| `str`       | SipHash-2-4 (a keyed hash function, randomized per interpreter)                 |
| `tuple`     | XOR of element hashes with per-position perturbation                            |
| `frozenset` | XOR of element hashes with perturbation                                         |
| `bytes`     | Truncated SipHash                                                               |

```python
hash(42)           # 42
hash("hello")      # varies per interpreter session
hash(("a", "b"))   # depends on hash("a") ^ hash("b") with rotation
```

:::info CPython randomizes hash seeds for `str`, `bytes`, and `datetime` objects at interpreter
startup. This is a security measure against hash DoS attacks. Set `PYTHONHASHSEED=0` to disable.
:::

### Collision Resolution: Open Addressing

When two keys hash to the same slot, CPython probes the next slot using a linear probing scheme with
perturbation:

```python
# Simplified probe sequence (actual CPython uses a more complex variant)
i = hash_value & (table_size - 1)  # Initial index
while table[i] is not empty and table[i].key != target_key:
    i = (i * 5 + 1) & (table_size - 1)  # Linear probe with perturbation
```

The probe continues until an empty slot or a matching key is found. The load factor determines how
quickly slots fill up.

### Load Factor and Resizing

The **load factor** is `n / table_size` where `n` is the number of entries. CPython maintains a load
factor of at most `2/3`. When the table exceeds this threshold, it resizes:

1. Allocate a new table 4x the current size (or the next power of 2 that accommodates all entries).
2. Reinsert all entries into the new table (no old pointers are reused).
3. The old table is freed.

This means dict insertion is **amortized O(1)**, but a resize operation is O(n).

```python
import sys

d = {}
for i in range(100):
    d[i] = i
    if i < 6:
        print(f"n={i}, table_size={len(d)}, sizeof={sys.getsizeof(d)}")
# Sizes grow at approximately: 64, 64, 64, 64, 64, 232, 232, ...
# The table grows in discrete jumps
```

### Compact Dict (Python 3.6+)

Before Python 3.6, dicts stored entries in a single sparse array. This wasted memory because most
slots were empty. The compact dict design splits the structure into:

- An **indices array** — a sparse array of `int8`, `int16`, `int32`, or `int64` indices (sized based
  on table size).
- A **dense entries array** — a compact array of `(hash, key, value)` triples.

This saves 20-25% memory for typical dicts and guarantees insertion-order preservation as a side
effect.

## OrderedDict

`collections.OrderedDict` maintains insertion order and provides additional methods beyond `dict`:

```python
from collections import OrderedDict

od = OrderedDict()
od["first"] = 1
od["second"] = 2
od["third"] = 3

od.move_to_end("first")   # Move "first" to the end
od.move_to_end("third", last=False)  # Move "third" to the beginning
print(list(od.keys()))    # ['third', 'second', 'first']

od.popitem(last=True)     # Remove and return last item: ('first', 1)
od.popitem(last=False)    # Remove and return first item: ('third', 3)
```

Since Python 3.7, regular `dict` also preserves insertion order. The differences are:

| Feature                   | `dict`           | `OrderedDict` |
| ------------------------- | ---------------- | ------------- |
| Insertion order preserved | Yes (3.7+)       | Yes           |
| `move_to_end()`           | No               | Yes           |
| `popitem(last=False)`     | No               | Yes           |
| Equality checks order     | No (Python 3.7+) | Yes           |
| Reversible                | Yes (3.8+)       | Yes           |

:::warning `OrderedDict` equality is **order-sensitive**:
`OrderedDict([(1,2),(3,4)]) != OrderedDict([(3,4),(1,2)])`. Regular `dict` equality in Python 3.7+
is also order-sensitive during comparison, but the `==` operator on regular dicts does not consider
order.
:::

### LRU Cache with OrderedDict

```python
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache: OrderedDict = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key not in self.cache:
            return None
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

cache = LRUCache(3)
cache.put("a", 1)
cache.put("b", 2)
cache.put("c", 3)
cache.put("d", 4)  # Evicts "a"
print(cache.get("b"))  # 2
print(list(cache.cache.keys()))  # ['c', 'd', 'b'] — "b" moved to end
```

`functools.lru_cache` uses the same approach internally.

## defaultdict

`collections.defaultdict` calls a `default_factory` function to provide default values for missing
keys:

```python
from collections import defaultdict

int_dict = defaultdict(int)
int_dict["count"] += 1
int_dict["count"] += 1
print(int_dict)  # defaultdict(<class 'int'>, {'count': 2})

list_dict = defaultdict(list)
list_dict["group_a"].append("item1")
list_dict["group_a"].append("item2")
list_dict["group_b"].append("item3")
print(list_dict)
# defaultdict(<class 'list'>, {'group_a': ['item1', 'item2'], 'group_b': ['item3']})
```

The `default_factory` is called with **no arguments**. This is why `int` (returns 0), `list`
(returns empty list), `set` (returns empty set), and `dict` (returns empty dict) work directly.

### Nested defaultdicts

```python
from collections import defaultdict

def nested_dict():
    return defaultdict(nested_dict)

tree = nested_dict()
tree["servers"]["web1"]["ip"] = "10.0.0.1"
tree["servers"]["web1"]["port"] = 80
tree["servers"]["db1"]["ip"] = "10.0.0.2"
tree["servers"]["db1"]["port"] = 5432
print(tree["servers"]["web1"]["ip"])  # 10.0.0.1
```

:::warning `nested_dict()` above creates an infinite recursion if you try to convert it to a regular
`dict` naively. Use a recursive conversion function:

```python
def to_regular_dict(d):
    if isinstance(d, defaultdict):
        return {k: to_regular_dict(v) for k, v in d.items()}
    return d
```

:::

### Practical Examples

```python
from collections import defaultdict

# Grouping by a key
data = [
    {"name": "alice", "dept": "eng"},
    {"name": "bob", "dept": "eng"},
    {"name": "carol", "dept": "sales"},
]
by_dept = defaultdict(list)
for record in data:
    by_dept[record["dept"]].append(record["name"])
print(by_dept)  # defaultdict(..., {'eng': ['alice', 'bob'], 'sales': ['carol']})

# Counting with defaultdict
word_counts = defaultdict(int)
for word in "the quick brown fox jumps over the lazy dog".split():
    word_counts[word] += 1
print(word_counts["the"])  # 2
```

## Counter

`collections.Counter` is a subclass of `dict` specialized for counting hashable objects:

```python
from collections import Counter

c = Counter("abracadabra")
print(c)  # Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
print(c.most_common(2))  # [('a', 5), ('b', 2)]
print(c["a"])  # 5
print(c["z"])  # 0 — missing keys return 0, not KeyError
```

### Counter Arithmetic

Counters support arithmetic operations that return new Counter objects (negative and zero counts are
removed):

```python
from collections import Counter

c1 = Counter(a=3, b=1, c=5)
c2 = Counter(a=1, b=2, d=3)

print(c1 + c2)    # Counter({'c': 5, 'a': 4, 'b': 3, 'd': 3})
print(c1 - c2)    # Counter({'a': 2, 'c': 5}) — negative counts dropped
print(c1 & c2)    # Counter({'a': 1, 'b': 1}) — min of each
print(c1 | c2)    # Counter({'c': 5, 'a': 3, 'b': 2, 'd': 3}) — max of each

# Unary operations
print(+Counter(a=3, b=-1))  # Counter({'a': 3}) — removes zero/negative
print(-Counter(a=3, b=-1))  # Counter({'b': 1}) — negates, removes zero/negative
```

### Frequency Analysis

```python
from collections import Counter
import re

text = """
The sysadmin deployed the server at 3AM. The server was the third server
deployed that week. The sysadmin also deployed monitoring at 4AM.
"""

words = re.findall(r"\b\w+\b", text.lower())
word_freq = Counter(words)

print("Top 5 words:", word_freq.most_common(5))
# Top 5 words: [('the', 6), ('server', 4), ('deployed', 3), ('at', 2), ('sysadmin', 2)]

# Elements with positive counts
print(list(word_freq.elements()))  # Repeats each word by its count
```

### Counter Methods

```python
from collections import Counter

c = Counter(a=3, b=1)

c.update(["a", "a", "c", "c", "c"])  # Add counts
print(c)  # Counter({'a': 5, 'c': 3, 'b': 1})

c.subtract(["a", "b"])  # Subtract counts (allows negatives)
print(c)  # Counter({'a': 4, 'c': 3, 'b': 0})
```

:::info `Counter` does not raise `KeyError` for missing keys — it returns 0. This is implemented via
`__missing__`:

```python
class Counter(dict):
    def __missing__(self, key):
        return 0
```

:::

## ChainMap

`collections.ChainMap` groups multiple dicts into a single view. Lookups search each mapping in
order:

```python
from collections import ChainMap

defaults = {"timeout": 30, "retries": 3, "debug": False}
env_config = {"timeout": 60, "debug": True}
cli_args = {"retries": 5}

config = ChainMap(cli_args, env_config, defaults)

print(config["timeout"])  # 60 (from env_config)
print(config["retries"])  # 5 (from cli_args)
print(config["debug"])    # True (from env_config)
print(config["port"])     # KeyError — not in any mapping
```

### ChainMap with Context Managers

```python
from collections import ChainMap

config = ChainMap({"timeout": 30})

# Temporarily override a value
config.maps.insert(0, {"timeout": 60})
print(config["timeout"])  # 60

# Remove the override
config.maps.pop(0)
print(config["timeout"])  # 30
```

ChainMap is ideal for layered configuration systems: defaults, environment variables, CLI args, and
per-request overrides.

:::warning Writes to a ChainMap affect **only the first mapping**. If you need to modify a specific
layer, access it via `config.maps[0]`, `config.maps[1]`, etc.
:::

```python
config = ChainMap({"timeout": 30}, {"timeout": 60})
config["timeout"] = 10
print(config)  # ChainMap({'timeout': 10}, {'timeout': 60})
# Only the first dict was modified
```

## Set Internals

Python sets are implemented using the same compact hash table design as dicts, but without values. A
`set` is essentially a dict with only keys.

### Hash Set

```python
s = {1, 2, 3, 4, 5}
print(s.add(6))    # None — adds 6
print(s.discard(6)) # None — removes 6 if present
print(s.remove(6))  # KeyError — raises if not present
```

Set operations have the following average-case complexities:

| Operation                      | Average Case           | Worst Case          |
| ------------------------------ | ---------------------- | ------------------- |
| `x in s`                       | O(1)                   | O(n)                |
| `s.add(x)`                     | O(1)                   | O(n)                |
| `s.discard(x)`                 | O(1)                   | O(n)                |
| `s \| t` (union)               | O(len(s) + len(t))     | O(len(s) \* len(t)) |
| `s & t` (intersection)         | O(min(len(s), len(t))) | O(len(s) \* len(t)) |
| `s - t` (difference)           | O(len(s))              | O(len(s) \* len(t)) |
| `s ^ t` (symmetric difference) | O(len(s) + len(t))     | O(len(s) \* len(t)) |

### frozenset

`frozenset` is an immutable, hashable set. It can be used as a dict key or element of another set:

```python
fs = frozenset([1, 2, 3])
d = {fs: "found"}           # Valid — frozenset is hashable
s = {fs, frozenset([4, 5])} # Valid

# Regular sets cannot be dict keys
# s2 = {1, 2, 3}
# d2 = {s2: "found"}  # TypeError: unhashable type: 'set'
```

### Set Operations

```python
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(a | b)   # {1, 2, 3, 4, 5, 6, 7, 8} — union
print(a & b)   # {4, 5} — intersection
print(a - b)   # {1, 2, 3} — difference
print(a ^ b)   # {1, 2, 3, 6, 7, 8} — symmetric difference
print(a <= b)  # False — a is not a subset of b
print(a >= b)  # False — a is not a superset of b
print(a < a)   # False — a is not a proper subset of itself
```

Set comprehensions are often more readable than set operations:

```python
# Instead of:
result = a & b

# Consider:
result = {x for x in a if x in b}
```

The comprehension form is preferred when you need filtering with a condition beyond simple
membership.

## Mapping Types: ABC

The `collections.abc` module defines abstract base classes for container types:

```python
from collections.abc import Mapping, MutableMapping

# Mapping ABC requires: __getitem__, __iter__, __len__
# MutableMapping ABC requires: __getitem__, __setitem__, __delitem__, __iter__, __len__

class CaseInsensitiveDict(MutableMapping):
    def __init__(self, data=None):
        self._store = {}
        if data:
            if isinstance(data, Mapping):
                for key, value in data.items():
                    self[key] = value
            else:
                for key, value in data:
                    self[key] = value

    def _normalize_key(self, key):
        return key.lower() if isinstance(key, str) else key

    def __getitem__(self, key):
        return self._store[self._normalize_key(key)][1]

    def __setitem__(self, key, value):
        self._store[self._normalize_key(key)] = (key, value)

    def __delitem__(self, key):
        del self._store[self._normalize_key(key)]

    def __iter__(self):
        return (original_key for original_key, _ in self._store.values())

    def __len__(self):
        return len(self._store)

d = CaseInsensitiveDict({"Content-Type": "application/json"})
print(d["content-type"])  # application/json
print(d["CONTENT-TYPE"])  # application/json
print(list(d.keys()))      # ['Content-Type']
```

By inheriting from `MutableMapping`, we get `get`, `keys`, `values`, `items`, `pop`, `clear`,
`update`, `setdefault`, and `__contains__` for free.

## UserDict, UserList, UserString

The `collections` module provides wrapper classes that allow subclassing without directly inheriting
from built-in types:

```python
from collections import UserDict

class InstrumentedDict(UserDict):
    def __setitem__(self, key, value):
        print(f"Setting {key!r} = {value!r}")
        super().__setitem__(key, value)

    def __delitem__(self, key):
        print(f"Deleting {key!r}")
        super().__delitem__(key)

d = InstrumentedDict()
d["host"] = "localhost"   # Setting 'host' = 'localhost'
d["port"] = 8080          # Setting 'port' = 8080
del d["port"]             # Deleting 'port'
```

:::warning Prefer `UserDict` over subclassing `dict` directly. When you subclass `dict`, some
C-level methods bypass your Python-level overrides. `UserDict` stores data in an internal `dict`
attribute (`self.data`), so all access goes through your Python methods.
:::

```python
from collections import UserList

class LogList(UserList):
    def append(self, item):
        print(f"Appending: {item}")
        super().append(item)

    def pop(self, index=-1):
        item = super().pop(index)
        print(f"Popped: {item}")
        return item

ll = LogList([1, 2, 3])
ll.append(4)   # Appending: 4
ll.pop()       # Popped: 4
```

## namedtuple vs dataclass vs TypedDict

### namedtuple

```python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(1, 2)
print(p.x, p.y)       # 1 2
print(p[0], p[1])     # 1 2
print(p._asdict())    # {'x': 1, 'y': 2}
print(p._replace(x=10))  # Point(x=10, y=2)
```

`namedtuple` is memory-efficient (similar to a regular tuple) and immutable.

### dataclass

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float
    z: float = 0.0  # Default value

p = Point(1.0, 2.0)
print(p)  # Point(x=1.0, y=2.0, z=0.0)
p.x = 10  # Mutable by default
```

### Comparison

| Feature        | `namedtuple`                   | `dataclass`            | `TypedDict`       |
| -------------- | ------------------------------ | ---------------------- | ----------------- |
| Immutable      | Yes                            | Opt-in (`frozen=True`) | N/A               |
| Type hints     | No                             | Yes                    | Yes               |
| Default values | Yes (via `defaults`)           | Yes                    | Yes               |
| Methods        | `_asdict`, `_replace`, `_make` | Custom methods         | None              |
| Inheritance    | No                             | Yes                    | Yes               |
| Memory         | Tuple-sized                    | Class overhead         | Dict              |
| Use case       | Lightweight records            | Rich objects           | Typed dict shapes |
| `__slots__`    | Yes (built-in)                 | Opt-in                 | N/A               |

```python
from typing import TypedDict

class ServerConfig(TypedDict):
    host: str
    port: int
    debug: bool

config: ServerConfig = {"host": "0.0.0.0", "port": 8080, "debug": False}
# Type checkers validate the shape
```

## bisect Module

The `bisect` module provides binary search algorithms for sorted sequences. This is essential for
maintaining sorted insertions without resorting:

```python
import bisect

data = [10, 20, 30, 40, 50]

# bisect_right (alias: bisect) — insertion point after existing entries
pos = bisect.bisect_right(data, 30)
print(pos)  # 3 — would insert after the existing 30
bisect.insort_right(data, 30)
print(data)  # [10, 20, 30, 30, 40, 50]

# bisect_left — insertion point before existing entries
pos = bisect.bisect_left(data, 30)
print(pos)  # 2 — would insert before the first 30
bisect.insort_left(data, 25)
print(data)  # [10, 20, 25, 30, 30, 40, 50]
```

### Use Case: Maintaining a Sorted List of Timestamps

```python
import bisect
from datetime import datetime

events = [
    (datetime(2025, 1, 1), "deploy v1"),
    (datetime(2025, 1, 15), "deploy v2"),
    (datetime(2025, 2, 1), "incident"),
]

timestamps = [e[0] for e in events]

new_event = (datetime(2025, 1, 10), "hotfix")
pos = bisect.bisect_left(timestamps, new_event[0])
bisect.insort_left(timestamps, new_event[0])
events.insert(pos, new_event)

print([e[1] for e in events])
# ['deploy v1', 'hotfix', 'deploy v2', 'incident']
```

:::tip `bisect` operations are O(log n) for search and O(n) for insertion (because the list must
shift elements). For frequent insertions, consider `heapq` or a balanced tree structure.
:::

## heapq Module

`heapq` provides a min-heap implementation using a regular Python list. The heap invariant is:
`heap[k] <= heap[2*k+1]` and `heap[k] <= heap[2*k+2]` for all valid `k`.

```python
import heapq

data = [5, 3, 8, 1, 9, 2]
heapq.heapify(data)  # In-place, O(n)
print(data)           # [1, 3, 2, 5, 9, 8]

print(heapq.heappop(data))  # 1 (smallest)
print(heapq.heappop(data))  # 2
print(data)                  # [3, 5, 8, 9]

heapq.heappush(data, 0)
print(data)  # [0, 3, 8, 9, 5]
```

### nlargest and nsmallest

```python
import heapq
import random

data = random.sample(range(1000000), 100000)

top5 = heapq.nlargest(5, data)
bottom5 = heapq.nsmallest(5, data)

print(top5)    # [999998, 999995, 999993, 999990, 999989] (varies)
print(bottom5) # [0, 1, 2, 3, 4] (varies)
```

`nlargest(n, data)` is O(n log k) where `k = n`, making it efficient for small `n` relative to the
data size. It uses a min-heap of size `k` internally.

### Max-Heap Pattern

`heapq` only provides min-heap semantics. For a max-heap, negate the values:

```python
import heapq

# Max-heap by negating
data = [5, 3, 8, 1, 9]
max_heap = [-x for x in data]
heapq.heapify(max_heap)

print(-heapq.heappop(max_heap))  # 9 (largest)
print(-heapq.heappop(max_heap))  # 8
```

### Priority Queue with heapq

```python
import heapq

class PriorityQueue:
    def __init__(self):
        self._heap = []
        self._counter = 0

    def push(self, priority, item):
        # counter breaks ties for items with equal priority
        heapq.heappush(self._heap, (priority, self._counter, item))
        self._counter += 1

    def pop(self):
        return heapq.heappop(self._heap)[2]

    def __len__(self):
        return len(self._heap)

pq = PriorityQueue()
pq.push(3, "low priority task")
pq.push(1, "critical task")
pq.push(2, "normal task")

print(pq.pop())  # critical task
print(pq.pop())  # normal task
print(pq.pop())  # low priority task
```

:::warning Never store mutable objects directly in a heap and then modify them externally — the heap
invariant may be violated. Either use immutable data or call `heapq.heapify()` after modifications.
:::

## Common Pitfalls

### 1. Mutating a Dict While Iterating

```python
d = {"a": 1, "b": 2, "c": 3}
for k in d:
    if k == "b":
        del d[k]  # RuntimeError: dictionary changed size during iteration

# Fix: iterate over a copy of keys
for k in list(d.keys()):
    if k == "b":
        del d[k]
```

### 2. Using Mutable Default Values

```python
# WRONG
def append_to(element, target=[]):
    target.append(element)
    return target

print(append_to(1))  # [1]
print(append_to(2))  # [1, 2] — the same list persists across calls

# CORRECT
def append_to(element, target=None):
    if target is None:
        target = []
    target.append(element)
    return target
```

### 3. Unhashable Types as Dict Keys or Set Members

```python
d = {}
d[(1, 2)] = "ok"        # Works — tuples of immutables are hashable
d[[1, 2]] = "fail"      # TypeError: unhashable type: 'list'
d[{1, 2}] = "fail"      # TypeError: unhashable type: 'set'
d[frozenset({1, 2})] = "ok"  # Works
```

### 4. Counter Arithmetic Drops Negative Counts

```python
from collections import Counter

c = Counter(a=5)
c.subtract({"a": 10})
print(c)  # Counter({'a': -5})
print(c["a"])  # -5 — negative count is accessible

# But arithmetic operations drop negatives
c2 = Counter(a=5) - Counter(a=10)
print(c2)   # Counter() — empty! negative counts removed
print(c2["a"])  # 0
```

### 5. ChainMap Writes Only Affect the First Mapping

```python
from collections import ChainMap

defaults = {"timeout": 30}
config = ChainMap({}, defaults)
config["timeout"] = 60
print(defaults["timeout"])  # 30 — unchanged
print(config.maps[0])       # {'timeout': 60} — only first dict modified
```

### 6. Set Operations Return New Sets

```python
a = {1, 2, 3}
b = {2, 3, 4}

a &= b  # In-place — modifies a
print(a)  # {2, 3}

# But:
a = {1, 2, 3}
c = a & b  # Returns new set, a unchanged
print(a)  # {1, 2, 3}
print(c)  # {2, 3}
```

Use the augmented assignment operators (`|=`, `&=`, `-=`, `^=`) for in-place modifications to avoid
unnecessary allocations.

### 7. defaultdict Can Hide Bugs

```python
from collections import defaultdict

d = defaultdict(list)

# Typo in key name — silently creates empty list instead of erroring
if d["usrname"]:
    print("has username")
print(d)  # defaultdict(..., {'usrname': []}) — typo created a key

# With regular dict, you get a clear KeyError
d2 = {}
# if d2["usrname"]:  # KeyError: 'usrname' — catches the typo
```

Use `defaultdict` when you intentionally want default values. For configuration or structured data
access, prefer regular dicts to catch typos early.
