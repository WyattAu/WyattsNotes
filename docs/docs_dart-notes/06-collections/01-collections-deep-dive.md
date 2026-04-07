---
title: Collections Deep Dive
date: 2026-04-05T00:00:00.000Z
tags:
  - Dart
categories:
  - Dart
slug: collections-deep-dive
---

## Iterable Interface

`Iterable<T>` is the root of Dart's collection hierarchy. Both `List<T>` and `Set<T>` implement it,
and `Map<K,V>` implements it via its `entries` property. An `Iterable` is a **lazy sequence** — it
describes how to produce elements but does not materialize them until a terminal operation (like
`toList()` or `forEach()`) forces evaluation.

### Core Transformation Methods

#### map()

Returns a new lazy `Iterable` by applying a function to each element. The function is not executed
until the iterable is consumed.

```dart
final names = ['alice', 'bob', 'charlie'];
final uppercased = names.map((n) => n.toUpperCase());
// uppercased is an Iterable<String> — nothing has been executed yet
print(uppercased.toList()); // [ALICE, BOB, CHARLIE] — now the function runs
```

#### where()

Filters elements lazily based on a predicate:

```dart
final evenNumbers = [1, 2, 3, 4, 5, 6].where((n) => n.isEven);
print(evenNumbers.toList()); // [2, 4, 6]
```

#### expand()

Flattens each element into zero or more elements. Equivalent to `flatMap` in other languages:

```dart
final pairs = [
  [1, 2],
  [3, 4],
  [5],
];
final flat = pairs.expand((inner) => inner);
print(flat.toList()); // [1, 2, 3, 4, 5]

// Practical: split strings into characters
final words = ['hello', 'world'];
final chars = words.expand((w) => w.split(''));
print(chars.toList()); // [h, e, l, l, o, w, o, r, l, d]
```

#### reduce() and fold()

`reduce` combines elements using a binary function, starting with the first element. Throws
`StateError` on an empty iterable:

```dart
final sum = [1, 2, 3, 4, 5].reduce((a, b) => a + b); // 15
```

`fold` takes an explicit initial value and never throws on empty:

```dart
final sum = <int>[].fold<int>(0, (a, b) => a + b); // 0 — no exception
final result = [1, 2, 3].fold<String>(
  'Items:',
  (acc, item) => '$acc $item',
); // 'Items: 1 2 3'
```

`fold` is strictly more general than `reduce` — anything `reduce` does, `fold` can do. Use `reduce`
when the initial value is semantically the first element (makes intent clearer). Use `fold` when you
need a different initial value or when the iterable might be empty.

#### any() and every()

Short-circuiting boolean checks:

```dart
final hasNegative = [1, 2, 3].any((n) => n < 0); // false
final allPositive = [1, 2, 3].every((n) => n > 0); // true
```

These stop iterating as soon as the result is determined. `any` returns `true` on the first match;
`every` returns `false` on the first non-match.

#### takeWhile() and skipWhile()

Conditionally take or skip elements from the front of the iterable:

```dart
final nums = [1, 2, 3, 4, 5, 1, 2];
print(nums.takeWhile((n) => n < 4).toList()); // [1, 2, 3] — stops at first failure
print(nums.skipWhile((n) => n < 4).toList()); // [4, 5, 1, 2] — skips until first failure
```

Unlike `where`, these are **not** applied to all elements — they operate from the start and stop at
the first element that fails the condition.

#### firstWhere(), lastWhere(), singleWhere()

Search with a predicate, with configurable defaults:

```dart
final first = [1, 2, 3].firstWhere((n) => n > 1); // 2
final last = [1, 2, 3].lastWhere((n) => n < 3); // 2

// orElse prevents StateError on no match
final found = [1, 2, 3].firstWhere(
  (n) => n > 10,
  orElse: () => -1,
); // -1

// singleWhere throws if zero or multiple elements match
final single = [1, 2, 3].singleWhere((n) => n == 2); // 2
```

#### cast()

Returns a lazy view that casts each element on access. Throws at access time, not at cast time:

```dart
final dynamicList = <dynamic>[1, 2, 3];
final intList = dynamicList.cast<int>();
// No exception yet — the cast is lazy
print(intList.first); // 1 — works
```

This is useful when interfacing with legacy APIs that return `List<dynamic>`.

#### toList(), toSet(), join()

Terminal operations that materialize the iterable:

```dart
final result = ['a', 'b', 'c'].map((s) => s.toUpperCase()).toList();
final unique = [1, 2, 2, 3, 3].toSet();
final csv = [1, 2, 3].join(', '); // '1, 2, 3'
```

### Lazy vs Eager Evaluation

This is critical for performance. Methods like `map`, `where`, `expand`, `takeWhile`, `skipWhile`,
`cast`, and `skip`/`take` return **lazy** iterables. No work happens until you consume the iterable.

```dart
// This does NOT iterate immediately
final pipeline = items
    .where((i) => i.isActive)
    .map((i) => i.name)
    .take(10);

// This triggers iteration
final result = pipeline.toList();
```

Chaining lazy operations is effectively free — you are composing functions, not materializing
intermediate collections. This is the same model as Rust's `Iterator`, Java's `Stream`, and C#'s
`IEnumerable`.

```dart
// Lazy — single pass, no intermediate allocations
final result = largeList
    .where((x) => x > 0)
    .map((x) => x * 2)
    .take(100)
    .toList();

// Eager — creates intermediate list at each step
var temp1 = largeList.where((x) => x > 0).toList(); // allocation
var temp2 = temp1.map((x) => x * 2).toList(); // allocation
var result = temp2.take(100).toList(); // allocation
```

## List

`List<T>` is an ordered, indexable collection backed by a growable array. It is Dart's most-used
collection type.

### Constructors

```dart
// Default: empty growable list
final a = <int>[];

// Literal
final b = [1, 2, 3];

// List.filled — creates a list of N copies of a value
final c = List<int>.filled(5, 0); // [0, 0, 0, 0, 0]
final d = List<String>.filled(3, ''); // ['', '', '']

// List.generate — creates from a factory function
final e = List<int>.generate(5, (i) => i * i); // [0, 1, 4, 9, 16]

// List.of — copies from another iterable
final f = List<int>.of([1, 2, 3]); // [1, 2, 3]

// List.unmodifiable — creates a view that cannot be modified
final g = List<int>.unmodifiable([1, 2, 3]);
// g.add(4); // throws UnsupportedError
```

### Growable vs Fixed-Length

```dart
// Growable (default for literals and constructors without explicit type)
final growable = [1, 2, 3];
growable.add(4); // OK

// Fixed-length
final fixed = List<int>.filled(3, 0, growable: false);
// fixed.add(4); // throws UnsupportedError
fixed[0] = 99; // OK — mutation of existing elements is fine

// Unmodifiable — neither add nor mutate
final unmod = List<int>.unmodifiable([1, 2, 3]);
// unmod[0] = 99; // throws UnsupportedError
// unmod.add(4); // throws UnsupportedError
```

The distinction matters at the VM level. Fixed-length lists pre-allocate a backing store of exactly
the right size. Growable lists use amortized doubling (see Performance Considerations below).

### Mutation Operations

```dart
final list = <int>[3, 1, 4, 1, 5];

// Adding
list.add(9);           // [3, 1, 4, 1, 5, 9]
list.addAll([2, 6]);   // [3, 1, 4, 1, 5, 9, 2, 6]
list.insert(0, 0);     // [0, 3, 1, 4, 1, 5, 9, 2, 6]
list.insertAll(1, [-1, -2]); // [0, -1, -2, 3, 1, 4, 1, 5, 9, 2, 6]

// Removing
list.remove(0);          // removes first occurrence of 0
list.removeAt(1);        // removes element at index 1
list.removeWhere((x) => x < 0); // removes all elements matching predicate
list.retainWhere((x) => x > 0); // keeps only elements matching predicate

// After above: [3, 1, 4, 1, 5, 9, 2, 6]
```

### Sublist and Range Operations

```dart
final list = [0, 1, 2, 3, 4, 5];

// sublist — creates a NEW list (copy)
final sub = list.sublist(1, 4); // [1, 2, 3]

// getRange — returns an Iterable (lazy view, does NOT copy)
final range = list.getRange(1, 4); // Iterable<int> yielding 1, 2, 3

// setRange — replaces a range with elements from an iterable
list.setRange(1, 4, [10, 20, 30]); // [0, 10, 20, 30, 4, 5]

// replaceRange — removes a range and inserts new elements
list.replaceRange(2, 4, [99]); // [0, 10, 99, 4, 5]
```

`sublist` allocates a new list. `getRange` does not — but the returned iterable holds a reference to
the original list, so mutations to the original are visible through the range view.

### asMap()

Converts a list to a `Map<int, T>`, pairing each element with its index:

```dart
final list = ['a', 'b', 'c'];
for (final entry in list.asMap().entries) {
  print('${entry.key}: ${entry.value}');
}
// 0: a
// 1: b
// 2: c
```

This is the idiomatic way to enumerate a list with indices. Do not use a manual counter variable.

### indexOf() and lastIndexOf()

```dart
final list = [1, 2, 3, 2, 1];
list.indexOf(2);     // 1 — first occurrence
list.lastIndexOf(2); // 3 — last occurrence
list.indexOf(99);    // -1 — not found
```

Both are O(n) linear scans. For frequent lookups, use a `Set` or `Map` instead.

### sort() and shuffle()

```dart
final list = [3, 1, 4, 1, 5, 9];
list.sort(); // [1, 1, 3, 4, 5, 9] — in-place, uses natural ordering

list.shuffle(); // random permutation — in-place
```

`sort()` modifies the list in place and returns `void`. It does not create a new sorted list.

## Set

A `Set<T>` is an unordered collection of unique elements. It is Dart's mathematical set
implementation — it models set operations (union, intersection, difference) directly.

### Constructors

```dart
// Default: empty LinkedHashSet (preserves insertion order)
final a = <int>{};

// Literal
final b = {1, 2, 3};

// Set.from — from any iterable
final c = Set<int>.from([1, 2, 2, 3]); // {1, 2, 3}

// Set.of — typed copy from iterable
final d = Set<String>.of(['a', 'b', 'a']); // {'a', 'b'}

// Set.identity — uses identity (===) instead of equals() for comparison
final e = Set<Object>.identity();
final obj = Object();
e.add(obj);
e.add(obj); // Set still has 1 element — same identity
```

### Mutation Operations

```dart
final set = {1, 2, 3};
set.add(4);          // {1, 2, 3, 4}
set.add(2);          // {1, 2, 3, 4} — no change, already present
set.addAll({5, 6});  // {1, 2, 3, 4, 5, 6}
set.remove(1);       // {2, 3, 4, 5, 6}
set.removeAll({2, 6}); // {3, 4, 5}
set.retainAll({3, 4}); // {3, 4}
```

`add` returns `bool` — `true` if the element was added (not already present), `false` if it was
already in the set. This is useful for deduplication logic:

```dart
if (seen.add(item)) {
  // First time seeing this item
  processNewItem(item);
}
```

### Set Operations

```dart
final a = {1, 2, 3, 4};
final b = {3, 4, 5, 6};

a.union(b);        // {1, 2, 3, 4, 5, 6}
a.intersection(b); // {3, 4}
a.difference(b);   // {1, 2} — elements in a but not in b
b.difference(a);   // {5, 6} — elements in b but not in a
```

### containsAll()

```dart
final superset = {1, 2, 3, 4, 5};
final subset = {2, 4};
superset.containsAll(subset); // true
```

### lookup()

Returns the element in the set that is equal to the argument, or `null` if not found. This is useful
when you have a canonical version of an object and want to retrieve it:

```dart
final users = {User(id: 1, name: 'Alice'), User(id: 2, name: 'Bob')};
final query = User(id: 1, name: 'Alice');
final found = users.lookup(query); // Returns the actual object in the set
// found is identical to users.first (assuming proper == and hashCode)
```

`lookup` is O(1) for hash sets, making it more efficient than `firstWhere` (which is O(n)).

### HashSet vs LinkedHashSet vs SplayTreeSet

The default `Set()` constructor returns a `LinkedHashSet`, which preserves insertion order and
provides O(1) amortized operations.

```dart
import 'package:collection/collection.dart';

// LinkedHashSet — default, preserves insertion order, O(1)
final linked = LinkedHashSet<int>();
linked.add(3);
linked.add(1);
linked.add(2);
print(linked.toList()); // [3, 1, 2]

// HashSet — no order guarantee, slightly faster than LinkedHashSet
final hash = HashSet<int>();
// Same API, but iteration order is unspecified

// SplayTreeSet — sorted order, O(log n) operations
final splay = SplayTreeSet<int>();
splay.add(3);
splay.add(1);
splay.add(2);
print(splay.toList()); // [1, 2, 3] — always sorted
```

| Type            | Order                 | add/contains/remove | Use Case                                        |
| --------------- | --------------------- | ------------------- | ----------------------------------------------- |
| `LinkedHashSet` | Insertion             | O(1) amortized      | Default choice, predictable iteration           |
| `HashSet`       | Unspecified           | O(1) amortized      | When order does not matter                      |
| `SplayTreeSet`  | Sorted (`Comparable`) | O(log n)            | When you need sorted iteration or range queries |

### Custom Equality via operator== and hashCode

For custom objects in a `Set`, you **must** override both `operator==` and `hashCode`. The contract:
if `a == b`, then `a.hashCode == b.hashCode`. The reverse is not required (hash collisions are
allowed).

```dart
class UserId {
  final String value;
  const UserId(this.value);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is UserId && runtimeType == other.runtimeType && value == other.value;

  @override
  int get hashCode => value.hashCode;
}

final set = <UserId>{UserId('abc'), UserId('def')};
print(set.contains(UserId('abc'))); // true — custom equality works
```

If you only override `==` without `hashCode`, the set will use the default `Object.hashCode`
(identity-based), and `contains` will fail to find logically equal objects.

## Map

A `Map<K, V>` maps keys to values. The default implementation is `LinkedHashMap`, which preserves
insertion order.

### Constructors

```dart
// Default: empty LinkedHashMap
final a = <String, int>{};

// Literal
final b = {'a': 1, 'b': 2, 'c': 3};

// Map.from — from another map (creates a new map)
final c = Map<String, int>.from({'x': 10, 'y': 20});

// Map.of — typed copy
final d = Map<String, int>.of({'a': 1, 'b': 2});

// Map.fromEntries — from an iterable of MapEntry
final e = Map<String, int>.fromEntries([
  MapEntry('a', 1),
  MapEntry('b', 2),
]);

// Map.unmodifiable — read-only view
final f = Map<String, int>.unmodifiable({'a': 1});
// f['b'] = 2; // throws UnsupportedError
```

### Operators and Core Operations

```dart
final map = {'a': 1, 'b': 2, 'c': 3};

// Read
map['a'];           // 1
map['missing'];     // null — returns null for absent keys (no exception)

// Write
map['d'] = 4;       // adds or updates
map['a'] = 99;      // updates existing key

// putIfAbsent — only inserts if key is absent
map.putIfAbsent('e', () => 5); // {'a': 99, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
map.putIfAbsent('a', () => 999); // no change — 'a' already exists

// update — modify an existing value, or insert/remove
map.update('a', (value) => value + 1); // 99 -> 100
map.update('missing', (value) => value, ifAbsent: () => 42); // inserts 42

// updateAll — batch update
map.updateAll((key, value) => value * 2); // all values doubled

// remove
map.remove('b'); // removes 'b' and returns its value (2)

// removeWhere — remove entries matching predicate
map.removeWhere((key, value) => value > 50);

// Query
map.containsKey('a');  // true
map.containsValue(2);  // false (was removed)
```

### Iteration

```dart
final map = {'a': 1, 'b': 2, 'c': 3};

// Iterate entries
for (final entry in map.entries) {
  print('${entry.key}: ${entry.value}');
}

// Iterate keys
for (final key in map.keys) {
  print(key);
}

// Iterate values
for (final value in map.values) {
  print(value);
}

// forEach
map.forEach((key, value) {
  print('$key=$value');
});
```

### map() on Map

`Map.map()` transforms both keys and values, returning a new map:

```dart
final original = {'a': 1, 'b': 2, 'c': 3};
final transformed = original.map(
  (key, value) => MapEntry(key.toUpperCase(), value * 10),
);
// {'A': 10, 'B': 20, 'C': 30}
```

Note: this returns a lazy `Map` — the transformation is applied on access.

### Iteration Order

The default `Map()` and `{}` literal create a `LinkedHashMap`, which guarantees insertion order for
iteration. This is a language guarantee, not an implementation detail.

```dart
final map = <String, int>{};
map['z'] = 1;
map['a'] = 2;
map['m'] = 3;
print(map.keys.toList()); // [z, a, m] — insertion order preserved
```

If you need sorted iteration, wrap the keys: `map.keys.toList()..sort()` or use `SplayTreeMap` from
`package:collection`.

### Custom Key Types

Like `Set`, `Map` keys rely on `operator==` and `hashCode`. The same contract applies: equal keys
must have equal hash codes.

```dart
class CaseInsensitiveString {
  final String value;
  const CaseInsensitiveString(this.value);

  @override
  bool operator ==(Object other) =>
      other is CaseInsensitiveString &&
      other.value.toLowerCase() == value.toLowerCase();

  @override
  int get hashCode => value.toLowerCase().hashCode;
}

final map = <CaseInsensitiveString, int>{
  CaseInsensitiveString('Hello'): 1,
};
print(map[CaseInsensitiveString('HELLO')]); // 1 — case-insensitive lookup
```

## Collection-if and Collection-for

### Collection-if

Conditionally include elements in a collection literal:

```dart
final includeAdmin = true;
final roles = [
  'user',
  'editor',
  if (includeAdmin) 'admin',
  if (isModerator) 'moderator',
];
```

### Collection-for

Generate elements from an iterable inside a literal:

```dart
final inputs = [1, 2, 3];
final doubled = [
  for (final n in inputs)
    if (n > 1) n * 2,
];
// [4, 6]
```

### Spreads

The `...` spread operator inserts all elements from an iterable into a collection literal:

```dart
final base = [1, 2, 3];
final extended = [...base, 4, 5]; // [1, 2, 3, 4, 5]

final setA = {1, 2, 3};
final setB = {3, 4, 5};
final union = {...setA, ...setB}; // {1, 2, 3, 4, 5}

final defaults = {'theme': 'light', 'lang': 'en'};
final userPrefs = {'theme': 'dark'};
final config = {...defaults, ...userPrefs}; // {'theme': 'dark', 'lang': 'en'}
```

### Null-Aware Spreads

The `...?` operator spreads only if the expression is non-null. If null, it inserts nothing:

```dart
List<int>? maybeList = someCondition ? [1, 2, 3] : null;
final result = [0, ...?maybeList, 4]; // [0, 1, 2, 3, 4] or [0, 4]
```

Without `...?`, a null spread throws at runtime. Always use `...?` when the spread source might be
null.

### Combining if, for, and Spreads

```dart
final Widget buildList({
  required List<Item> items,
  required Item? selectedItem,
  required bool showHeader,
}) {
  return [
    if (showHeader) HeaderWidget(),
    for (final item in items)
      ItemWidget(
        item: item,
        isSelected: item == selectedItem,
      ),
    if (items.isEmpty) EmptyStateWidget(),
    ...?_buildFooterItems(context),
  ];
}
```

## Unmodifiable Views

### List.unmodifiable(), Set.unmodifiable(), Map.unmodifiable()

These create **wrappers** around an existing collection that throw `UnsupportedError` on mutation:

```dart
final source = [1, 2, 3];
final unmod = List.unmodifiable(source);
source.add(4);
print(unmod); // [1, 2, 3, 4] — the view reflects changes to the source!
// unmod.add(5); // throws UnsupportedError
```

The key point: `List.unmodifiable()` creates a **view**, not a copy. Mutations to the underlying
collection are visible through the view. If you need true immutability (detached from the source),
use `List.of(source)` (which copies) or spread into a `const` list.

### const Collections

`const` collections are deeply immutable, canonicalized at compile time, and shared across the
entire isolate:

```dart
const config = {'host': 'localhost', 'port': 8080};
// config['debug'] = true; // compile-time error
```

`const` is the strongest immutability guarantee in Dart — it is enforced by the compiler, not at
runtime. Use it for configuration, lookup tables, and any data that is truly constant.

### When to Use Which

| Mechanism             | Copies?            | Mutability                  | Compile-time | Use Case                                                  |
| --------------------- | ------------------ | --------------------------- | ------------ | --------------------------------------------------------- |
| `const`               | No (canonicalized) | Immutable (compile-time)    | Yes          | True constants, config                                    |
| `List.unmodifiable()` | No (view)          | Read-only (runtime)         | No           | API return values, defensive copies of internal state     |
| `List.of()`           | Yes (copy)         | Mutable                     | No           | When you need a snapshot                                  |
| `final list = [...]`  | No                 | Mutable, reference is final | No           | Local mutable collections with non-reassignable reference |

## Sorting and Custom Comparators

### List.sort()

The default `sort()` uses the natural ordering defined by `Comparable`:

```dart
final names = ['charlie', 'alice', 'bob'];
names.sort(); // ['alice', 'bob', 'charlie']
```

### Custom Comparators

```dart
final people = [
  Person(name: 'Charlie', age: 30),
  Person(name: 'Alice', age: 25),
  Person(name: 'Bob', age: 30),
];

// Sort by age ascending
people.sort((a, b) => a.age.compareTo(b.age));
// Alice (25), Charlie (30), Bob (30)

// Sort by age, then by name for ties
people.sort((a, b) {
  final ageCompare = a.age.compareTo(b.age);
  if (ageCompare != 0) return ageCompare;
  return a.name.compareTo(b.name);
});
// Alice (25), Bob (30), Charlie (30)
```

### Comparable Interface

Implement `Comparable<T>` to define natural ordering for your types:

```dart
class Version implements Comparable<Version> {
  final int major;
  final int minor;
  final int patch;

  const Version(this.major, this.minor, this.patch);

  @override
  int compareTo(Version other) {
    if (major != other.major) return major.compareTo(other.major);
    if (minor != other.minor) return minor.compareTo(other.minor);
    return patch.compareTo(other.patch);
  }
}
```

### Cascading Comparators

The `compareAsciiLowerCaseNatural` function from `package:collection` and the `thenCompare`
extension make multi-field sorting cleaner:

```dart
import 'package:collection/collection.dart';

people.sort((a, b) => Comparator<String>.by((p) => p.name)
    .thenCompare(Comparator<int>.by((p) => p.age))
    .compare(a, b));
```

Alternatively, use the `compare` functions from `package:collection`:

```dart
import 'package:collection/collection.dart';

// Compare two lists element-by-element
final listCompare = ListEquality().equals;
listCompare([1, 2, 3], [1, 2, 3]); // true
```

## Performance Considerations

### List — Growable Array

Dart's growable `List` is backed by a contiguous array that doubles in capacity when full. This
gives:

| Operation                   | Complexity                       |
| --------------------------- | -------------------------------- |
| `add()` (append)            | O(1) amortized                   |
| `add()` at capacity         | O(n) (copy to new backing store) |
| `operator[]` (index access) | O(1)                             |
| `insert(0, x)`              | O(n) (shift all elements)        |
| `removeAt(i)`               | O(n) (shift elements left)       |
| `indexOf(x)`                | O(n) (linear scan)               |
| `sort()`                    | O(n log n)                       |

The amortized O(1) for `add()` is the critical insight: individual appends are cheap, but
occasionally a resize occurs that copies the entire array. For large lists where you know the final
size upfront, use `List(growable: true)` with a pre-allocated capacity, or use `List.filled()` with
`growable: true` and then overwrite elements.

### Set — Hash Table

Dart's default `LinkedHashSet` is a hash table with open addressing:

| Operation        | Complexity           |
| ---------------- | -------------------- |
| `add(x)`         | O(1) amortized       |
| `contains(x)`    | O(1) amortized       |
| `remove(x)`      | O(1) amortized       |
| `intersection()` | O(min(\|A\|, \|B\|)) |
| `union()`        | O(\|A\| + \|B\|)     |

Hash collisions degrade to O(n) in the worst case, but this is rare with a good hash function. If
your custom `hashCode` implementation is poor (e.g., always returns the same value), you get a
degenerate linked list and O(n) for everything.

### Map — Hash Table

Same characteristics as `Set`:

| Operation       | Complexity     |
| --------------- | -------------- |
| `operator[]`    | O(1) amortized |
| `operator[]=`   | O(1) amortized |
| `containsKey()` | O(1) amortized |
| `remove()`      | O(1) amortized |

### Choosing the Right Collection

- **Need ordered, indexed access?** `List`
- **Need uniqueness + fast membership checks?** `Set`
- **Need key-value lookups?** `Map`
- **Need sorted order?** `SplayTreeSet` or `SplayTreeMap` from `package:collection`
- **Need to deduplicate while preserving order?** `Set` then `toList()`, or iterate and use a
  seen-set
- **Need frequency counts?** `Map<T, int>` with `update(value, (v) => v + 1, ifAbsent: () => 1)`

```dart
// Frequency count pattern
final frequencies = <String, int>{};
for (final word in words) {
  frequencies.update(word, (count) => count + 1, ifAbsent: () => 1);
}
```

### Memory Overhead

- `List` stores elements contiguously — minimal overhead per element (one pointer/reference).
- `LinkedHashSet` has per-entry overhead for the hash table buckets and the doubly-linked list that
  preserves insertion order.
- `LinkedHashMap` has the most overhead per entry: two references (key and value) plus hash table
  and linked list overhead.

For very large datasets where memory is a concern, `List` is the most compact option. Use `Set` and
`Map` when their O(1) lookup characteristics justify the memory overhead.

## Common Pitfalls

### 1. Mutating a List While Iterating

```dart
// WRONG — ConcurrentModificationError
final list = [1, 2, 3, 4, 5];
for (final item in list) {
  if (item == 3) list.remove(item);
}

// CORRECT — collect indices, then remove
final toRemove = list.where((x) => x == 3).toList();
for (final item in toRemove) {
  list.remove(item);
}

// CORRECT — use removeWhere
list.removeWhere((x) => x == 3);
```

### 2. Using == on Lists and Maps

```dart
final a = [1, 2, 3];
final b = [1, 2, 3];
print(a == b); // false — == checks identity for List, not structural equality

// Use ListEquality from package:collection
import 'package:collection/collection.dart';
print(ListEquality().equals(a, b)); // true

// Or compare manually
print(a.length == b.length &&
    Iterable<int>.generate(a.length).every((i) => a[i] == b[i])); // true
```

Dart's `List.==` and `Map.==` use identity comparison (`identical()`), not structural equality. This
is by design — structural equality on large collections is expensive, and the language avoids
implicit O(n) operations.

### 3. Unmodifiable Views Are Not Copies

```dart
final source = [1, 2, 3];
final view = List.unmodifiable(source);
source.add(4);
print(view.length); // 4 — the view reflects the mutation
```

`List.unmodifiable()` creates a wrapper that prevents mutation through the view, but does not
protect against mutation of the underlying collection. If you need an independent immutable
snapshot, spread into a new list: `[...source]`.

### 4. Forgetting hashCode When Overriding ==

```dart
class BadKey {
  final int id;
  BadKey(this.id);

  @override
  bool operator ==(Object other) => other is BadKey && other.id == id;

  // NO hashCode override — this breaks Set and Map!
}

final set = <BadKey>{BadKey(1)};
print(set.contains(BadKey(1))); // likely false — different hashCode, different bucket
```

Always override both `operator==` and `hashCode` together. The simplest correct approach for value
types is to derive both from the same fields:

```dart
@override
int get hashCode => id.hashCode;
```

### 5. List.filled() with a Mutable Default Value

```dart
// WRONG — all elements share the SAME list object
final rows = List<List<int>>.filled(3, <int>[]);
rows[0].add(1);
print(rows); // [[1], [1], [1]] — all three rows are the same list!

// CORRECT — generate a new list for each element
final rows = List<List<int>>.generate(3, (_) => <int>[]);
rows[0].add(1);
print(rows); // [[1], [], []]
```

`List.filled(n, value)` inserts the **same object** `n` times. For mutable objects, this means all
slots share a reference to a single instance. Use `List.generate()` when each element must be
independent.

### 6. Removing from a List While Using indexOf

```dart
// WRONG — shifting indices after each removal
final list = [1, 2, 3, 2, 4, 2];
while (list.indexOf(2) != -1) {
  list.removeAt(list.indexOf(2)); // Each removal shifts subsequent indices
}

// CORRECT — removeWhere
list.removeWhere((x) => x == 2);
```

### 7. Assuming Set Iteration Order for HashSet

```dart
import 'dart:collection';

// WRONG — HashSet iteration order is unspecified
final set = HashSet<int>();
set.addAll([3, 1, 2]);
// Do not assume print(set.toList()) produces [3, 1, 2]

// CORRECT — use LinkedHashSet if order matters
final ordered = LinkedHashSet<int>();
ordered.addAll([3, 1, 2]);
print(ordered.toList()); // [3, 1, 2] — guaranteed insertion order
```

### 8. Excessive Intermediate Lists from Lazy-to-Eager Conversion

```dart
// WRONG — creates 3 intermediate lists
final result = items
    .where((x) => x.isActive)
    .map((x) => x.name)
    .where((x) => x.isNotEmpty)
    .toList();

// This is fine — the chain is lazy until toList()
// But if you insert .toList() between steps:
final step1 = items.where((x) => x.isActive).toList(); // allocation
final step2 = step1.map((x) => x.name).toList(); // allocation
final step3 = step2.where((x) => x.isNotEmpty).toList(); // allocation
```

Avoid inserting `toList()` in the middle of a transformation chain. Keep the chain lazy and only
materialize at the end.

### 9. Null Values in Maps and Null Keys

```dart
final map = <String, int?>{};
map['missing'] = null;
print(map['missing']); // null — but is the key absent or present with null value?

// Use containsKey to distinguish
map.containsKey('missing'); // true — the key exists with a null value
map.containsKey('nonexistent'); // false — the key does not exist
```

This ambiguity is inherent to any map type that allows null values. Always use `containsKey()` when
you need to distinguish between "key absent" and "key present with null value."
