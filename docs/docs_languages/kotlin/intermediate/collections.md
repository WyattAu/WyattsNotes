---
title: Collections
description: List, Set, Map, Sequence, and collection operations.
slug: collections
date: 2026-04-18
tags:
  - Kotlin
categories:
  - Kotlin
---

## Collection Hierarchy

Kotlin's collection types are split into two hierarchies: **read-only** and **mutable**.

```
Collection (read-only)
  |-- List
  |-- Set
  |-- Map
MutableCollection extends Collection
  |-- MutableList
  |-- MutableSet
  |-- MutableMap
```

Read-only interfaces do not guarantee immutability -- they simply expose no mutation methods. The
underlying collection may still be mutable through a different reference.

## List

```kotlin
// Read-only
val readOnly: List<Int> = listOf(1, 2, 3)

// Mutable
val mutable: MutableList<Int> = mutableListOf(1, 2, 3)
mutable.add(4)
mutable[0] = 10
```

`List` is an ordered collection with index-based access. `listOf()` returns an immutable list
implementation. `mutableListOf()` returns a `MutableList`.

### List Operations

```kotlin
val list = listOf(3, 1, 4, 1, 5, 9)

list[0]               // 3
list.indexOf(1)       // 1 (first occurrence)
list.lastIndexOf(1)   // 3
list.subList(1, 4)    // [1, 4, 1]
list.reversed()       // [9, 5, 1, 4, 1, 3]
list.sorted()         // [1, 1, 3, 4, 5, 9]
list.distinct()       // [3, 1, 4, 5, 9]
list.contains(4)      // true
```

## Set

```kotlin
val readOnly: Set<Int> = setOf(1, 2, 3, 2, 1)  // {1, 2, 3}
val mutable: MutableSet<Int> = mutableSetOf(1, 2, 3)

val linked: LinkedHashSet<Int> = linkedSetOf(3, 1, 2)  // preserves insertion order
val hashed: HashSet<Int> = hashSetOf(3, 1, 2)          // no order guarantee
val sorted: TreeSet<Int> = sortedSetOf(3, 1, 2)        // natural ordering
```

### Set Operations

```kotlin
val a = setOf(1, 2, 3, 4)
val b = setOf(3, 4, 5, 6)

a union b           // {1, 2, 3, 4, 5, 6}
a intersect b       // {3, 4}
a subtract b        // {1, 2}
a - b               // {1, 2}
```

## Map

```kotlin
val readOnly: Map<String, Int> = mapOf("a" to 1, "b" to 2, "c" to 3)
val mutable: MutableMap<String, Int> = mutableMapOf("a" to 1, "b" to 2)
```

### Map Operations

```kotlin
val map = mapOf("x" to 1, "y" to 2, "z" to 3)

map["x"]                     // 1
map.getOrDefault("w", 0)     // 0
map.getOrElse("w") { 42 }    // 42
map.keys                     // Set<String> = {x, y, z}
map.values                   // Collection<Int> = [1, 2, 3]
map.filterKeys { it != "z" } // {x=1, y=2}
map.filterValues { it > 1 }  // {y=2, z=3}
map.mapKeys { it.key.uppercase() } // {X=1, Y=2, Z=3}
map.mapValues { it.value * 2 }     // {x=2, y=4, z=6}
```

### Map Access Patterns

```kotlin
val scores = mutableMapOf("Alice" to 95, "Bob" to 82)

scores.computeIfAbsent("Charlie") { 70 }  // inserts if absent, returns value
scores.computeIfPresent("Alice") { _, v -> if (v > 90) v + 5 else v }  // updates if present

scores.getOrPut("David") { 60 }  // returns existing or inserts and returns
```

## Transformation Operations

### map

Applies a transformation to each element and returns a new collection.

```kotlin
val names = listOf("alice", "bob", "charlie")
val uppercased = names.map { it.uppercase() }  // [ALICE, BOB, CHARLIE]

val users = listOf(User("Alice", 30), User("Bob", 25))
val namesAndAges = users.map { "${it.name} (${it.age})" }
```

`mapIndexed` provides the index alongside the element:

```kotlin
val indexed = names.mapIndexed { index, name -> "$index: $name" }
// [0: alice, 1: bob, 2: charlie]
```

`mapNotNull` filters out null results:

```kotlin
val parsed = listOf("1", "two", "3", "four").mapNotNull { it.toIntOrNull() }
// [1, 3]
```

### filter

Returns elements matching the predicate.

```kotlin
val even = listOf(1, 2, 3, 4, 5).filter { it % 2 == 0 }  // [2, 4]
val nonEmpty = listOf("", "a", "", "bc").filterNot { it.isEmpty() }  // [a, bc]

listOf(1, 2, 3, 4, 5).filterIndexed { index, _ -> index % 2 == 0 }  // [1, 3, 5]
```

### flatMap

Maps each element to a collection, then flattens the result.

```kotlin
val sentences = listOf("hello world", "kotlin language")
val words = sentences.flatMap { it.split(" ") }  // [hello, world, kotlin, language]
```

### fold and reduce

`fold` takes an initial accumulator value. `reduce` uses the first element as the initial value.

```kotlin
val sum = listOf(1, 2, 3, 4, 5).fold(0) { acc, n -> acc + n }  // 15
val product = listOf(1, 2, 3, 4, 5).reduce { acc, n -> acc * n }  // 120

val result = listOf("a", "b", "c").fold(StringBuilder()) { sb, s ->
    sb.append(s)
}.toString()  // "abc"
```

`reduce` throws `NoSuchElementException` on empty collections. Use `reduceOrNull` for safe handling.

```kotlin
val empty: Int? = emptyList<Int>().reduceOrNull { a, b -> a + b }  // null
```

### groupBy

Groups elements by a key and returns a `Map<K, List<V>>`.

```kotlin
data class Person(val name: String, val city: String, val age: Int)

val people = listOf(
    Person("Alice", "NYC", 30),
    Person("Bob", "NYC", 25),
    Person("Charlie", "LA", 35)
)

val byCity = people.groupBy { it.city }
// {NYC=[Person(Alice, NYC, 30), Person(Bob, NYC, 25)], LA=[Person(Charlie, LA, 35)]}

val avgAgeByCity = people.groupBy(
    keySelector = { it.city },
    valueTransform = { it.age }
).mapValues { (_, ages) -> ages.average() }
// {NYC=27.5, LA=35.0}
```

### partition

Splits a collection into two lists based on a predicate.

```kotlin
val (pass, fail) = listOf(85, 42, 91, 67, 55, 98).partition { it >= 60 }
// pass = [85, 91, 67, 98], fail = [42, 55]
```

### zip

Pairs elements from two collections.

```kotlin
val keys = listOf("a", "b", "c")
val values = listOf(1, 2, 3)
val pairs = keys zip values  // [(a, 1), (b, 2), (c, 3)]
val map = keys.zip(values).toMap()  // {a=1, b=2, c=3}
```

### chunked and windowed

```kotlin
val data = listOf(1, 2, 3, 4, 5, 6, 7, 8)
data.chunked(3)      // [[1, 2, 3], [4, 5, 6], [7, 8]]
data.windowed(3)     // [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 8]]
data.windowed(3, 3)  // [[1, 2, 3], [4, 5, 6], [7, 8]]  -- step size 3
```

### associate

```kotlin
val users = listOf(User("Alice", 30), User("Bob", 25))
val byName = users.associate { it.name to it }
val byNameV2 = users.associateBy { it.name }
val byNameV3 = users.associateBy(keySelector = { it.name }, valueTransform = { it.age })
// byNameV3 = {Alice=30, Bob=25}
```

## Sequence

Sequences are lazy -- transformations are not executed until a terminal operation is invoked. For
large collections or chains of operations, sequences avoid creating intermediate collections.

```kotlin
val result = (1..1_000_000)
    .asSequence()
    .filter { it % 2 == 0 }
    .map { it * it }
    .take(5)
    .toList()
// [4, 16, 36, 64, 100]
```

With a list, each intermediate operation creates a new list:

```kotlin
list.filter { ... }.map { ... }.take(5)
// Creates: filtered list -> mapped list -> then takes 5
```

With a sequence, each element flows through the entire pipeline before the next element is
processed:

```kotlin
list.asSequence().filter { ... }.map { ... }.take(5)
// Processes: element 1 (filter -> map), element 2, ... until 5 collected
```

### When to Use Sequences

- \*\* Use sequences when the collection is large and you have multiple chained operations.
- \*\* Use sequences when you need only a subset of the result (e.g., `first`, `take`).
- \*\* Use lists when the collection is small or you need to transform the entire collection.

### Sequence Creation

```kotlin
val seq1 = listOf(1, 2, 3).asSequence()
val seq2 = sequenceOf(1, 2, 3)
val seq3 = generateSequence(1) { it * 2 }  // 1, 2, 4, 8, 16, ... (lazy, infinite)
val seq4 = generateSequence(seed = 0) { if (it < 100) it + 1 else null }  // 0..99
```

## Common Pitfalls

- \*\* Chaining multiple operations on large lists without using sequences. This creates
  intermediate collections at each step, increasing memory pressure and GC overhead.
- \*\* Using `associateBy` when keys are not unique. Only the last value for each key is retained.
  Use `groupBy` when you need to keep all values.
- \*\* Modifying a mutable collection while iterating over it. This throws
  `ConcurrentModificationException`. Use `toList()` to create a snapshot or `removeIf` for
  conditional removal.
- \*\* Assuming read-only collections are immutable. `List<Int>` is a read-only interface; the
  underlying implementation may be mutable. Use `toList()` or `toImmutableList()` (Kotlinx
  Collections) for defensive copies.
