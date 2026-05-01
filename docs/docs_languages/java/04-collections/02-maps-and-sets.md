---
id: maps-and-sets
title: Maps and Sets
description:
  Maps and Sets — The `Map` Interface; Map Implementations; `HashMap`;
  `LinkedHashMap` with worked examples and exam-style questions.
slug: maps-and-sets
---

## The `Map` Interface

`Map<K,V>` maps keys to values. It is not part of the `Collection` hierarchy — it models a
fundamentally different abstraction. Each key maps to at most one value, and each key can appear
only once.

```java
public interface Map<K, V> {
    V put(K key, V value);
    V get(Object key);
    V remove(Object key);
    boolean containsKey(Object key);
    boolean containsValue(Object value);
    int size();
    boolean isEmpty();
    Set<K> keySet();
    Collection<V> values();
    Set<Map.Entry<K, V>> entrySet();
    void forEach(BiConsumer<? super K, ? super V> action);
    V getOrDefault(Object key, V defaultValue);
    V putIfAbsent(K key, V value);
    boolean replace(K key, V oldValue, V newValue);
    V replace(K key, V value);
    V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction);
    V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction);
    V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction);
    V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction);
}
```

## Map Implementations

### `HashMap`

The default general-purpose map. Uses an array of buckets (linked lists, converted to balanced trees
when a bucket exceeds 8 entries — JDK 8+). Provides O(1) average-case for `put`, `get`, `remove`,
and `containsKey`.

```java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);
scores.put("Charlie", 92);

int score = scores.get("Alice");        // 95
int missing = scores.getOrDefault("Dave", 0); // 0
```

**Internal structure (JDK 8+):** `HashMap` stores entries in a `Node<K,V>[] table`. The index is
`hash(key) & (table.length - 1)`. Each bucket starts as a linked list. When a bucket exceeds
`TREEIFY_THRESHOLD` (default 8) entries, the list is converted to a red-black tree. When the tree
shrinks below `UNTREEIFY_THRESHOLD` (default 6), it reverts to a linked list.

**Load factor:** `DEFAULT_LOAD_FACTOR` is 0.75. When `size / capacity` exceeds the load factor, the
table is resized (doubled). The initial capacity defaults to 16.

```java
// Pre-size to avoid rehashing if you know the expected size
// Formula: capacity = expectedSize / loadFactor + 1
Map<String, Integer> map = new HashMap<>((int) (1000 / 0.75f) + 1);
```

:::warning
`HashMap` allows one `null` key and multiple `null` values. It is not thread-safe. Use
`ConcurrentHashMap` for concurrent access.
:::

### `LinkedHashMap`

Extends `HashMap` and maintains a doubly-linked list running through all entries. Iteration order is
insertion order (by default) or access order (if constructed with `accessOrder=true`).

```java
// Insertion-order iteration
Map<String, Integer> insertionOrder = new LinkedHashMap<>();
insertionOrder.put("C", 3);
insertionOrder.put("A", 1);
insertionOrder.put("B", 2);
// Iteration: C, A, B

// Access-order — useful for LRU caches
Map<String, Integer> lru = new LinkedHashMap<>(16, 0.75f, true);
lru.put("A", 1);
lru.put("B", 2);
lru.put("C", 3);
lru.get("A"); // moves A to the end
// Iteration: B, C, A
```

**LRU Cache implementation:**

```java
public class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int maxEntries;

    public LRUCache(int maxEntries) {
        super(16, 0.75f, true);
        this.maxEntries = maxEntries;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > maxEntries;
    }
}
```

### `TreeMap`

A `NavigableMap` implementation backed by a red-black tree. Keys are sorted by natural order or by a
`Comparator` provided at construction. Provides O(log n) for `put`, `get`, `remove`, and range
operations.

```java
// Natural ordering
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Charlie", 3);
treeMap.put("Alice", 1);
treeMap.put("Bob", 2);
// Iteration: Alice, Bob, Charlie (alphabetical)

// Custom comparator
Map<String, Integer> caseInsensitive = new TreeMap<>(String.CASE_INSENSITIVE_ORDER);
caseInsensitive.put("banana", 2);
caseInsensitive.put("Apple", 1);
// Iteration: Apple, banana (case-insensitive)

// Range operations
NavigableMap<String, Integer> headMap = ((TreeMap<String, Integer>) treeMap).headMap("C");
// Contains only entries with keys less than "C"

NavigableMap<String, Integer> subMap =
    ((TreeMap<String, Integer>) treeMap).subMap("A", true, "C", false);
```

**Key methods on `NavigableMap`:**

| Method                     | Description                             |
| -------------------------- | --------------------------------------- |
| `firstKey()` / `lastKey()` | Lowest / highest key                    |
| `lowerKey(K)`              | Greatest key strictly less than K       |
| `floorKey(K)`              | Greatest key less than or equal to K    |
| `higherKey(K)`             | Smallest key strictly greater than K    |
| `ceilingKey(K)`            | Smallest key greater than or equal to K |
| `descendingMap()`          | Reverse-ordered view                    |
| `subMap(K1, K2)`           | View of keys in range [K1, K2)          |
| `headMap(K)`               | View of keys less than K                |
| `tailMap(K)`               | View of keys greater than or equal to K |

### `ConcurrentHashMap`

Thread-safe map designed for high-concurrency access. Uses fine-grained locking (lock stripping on
buckets) to allow concurrent reads and writes to different segments. JDK 8+ uses CAS operations for
even better concurrency.

```java
ConcurrentHashMap<String, AtomicInteger> counterMap = new ConcurrentHashMap<>();

// Atomic compute operations
counterMap.computeIfAbsent("requests", k -&gt; new AtomicInteger(0)).incrementAndGet();

// merge — atomically combines old and new values
counterMap.merge("requests", 1, (oldVal, newVal) -&gt; {
    // This lambda is called atomically
    return new AtomicInteger(oldVal.get() + newVal);
});
```

### `Hashtable`

Legacy thread-safe map from JDK 1.0. Uses method-level synchronization (the entire map is locked for
every operation). Do not use in new code — `ConcurrentHashMap` provides better concurrency and
`Collections.synchronizedMap` provides the same semantics with less overhead.

```java
// LEGACY — do not use
Hashtable<String, Integer> table = new Hashtable<>();

// MODERN equivalent
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
```

## Map Methods in Depth

### `computeIfAbsent`, `computeIfPresent`, `compute`, `merge`

These methods (added in JDK 8) provide atomic compound operations that eliminate the check-then-act
race condition:

```java
// computeIfAbsent — compute value only if key is absent
Map<String, List<String&gt;&gt; groups = new HashMap<>();
groups.computeIfAbsent("team1", k -&gt; new ArrayList&lt;&gt;()).add("Alice");
groups.computeIfAbsent("team1", k -&gt; new ArrayList&lt;&gt;()).add("Bob");
// groups: {"team1": ["Alice", "Bob"]}

// computeIfPresent — recompute only if key is present
Map<String, Integer> wordCounts = new HashMap<>();
wordCounts.put("hello", 1);
wordCounts.computeIfPresent("hello", (k, v) -&gt; v + 1);
// wordCounts: {"hello": 2}

// compute — compute new value (removes key if result is null)
Map<String, String> config = new HashMap<>();
config.compute("timeout", (k, v) -&gt; v == null ? "30s" : null);
// If "timeout" was absent, it is now "30s"
// If "timeout" was present, it is now removed (result is null)

// merge — combine existing value with new value
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 10);
scores.merge("Alice", 5, Integer::sum); // 15
scores.merge("Bob", 7, Integer::sum);   // 7 (Bob was absent, so 7 is the value)
```

### `forEach`

```java
Map<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);
map.forEach((key, value) -&gt; System.out.println(key + "=" + value));
```

## The `Set` Interface

`Set<E>` is a collection that cannot contain duplicate elements. It models the mathematical set
abstraction. The `Set` interface extends `Collection` and adds no new methods — it only constrains
behavior: `add` returns `false` if the element already exists.

## Set Implementations

### `HashSet`

Backed by a `HashMap` (each `Set` entry is stored as a key in the underlying `HashMap` with a dummy
value). Provides O(1) average-case `add`, `contains`, and `remove`. Does not maintain insertion
order.

```java
Set<String> names = new HashSet<>();
names.add("Alice");
names.add("Bob");
names.add("Alice"); // returns false, no change
System.out.println(names.contains("Alice")); // true
```

### `TreeSet`

A `NavigableSet` backed by a `TreeMap`. Maintains elements in sorted order (natural or
`Comparator`). O(log n) for `add`, `contains`, and `remove`.

```java
Set<Integer> numbers = new TreeSet<>();
numbers.add(5);
numbers.add(1);
numbers.add(10);
numbers.add(3);
// Iteration: 1, 3, 5, 10

// Range operations
NavigableSet<Integer> headSet = ((TreeSet<Integer>) numbers).headSet(5);
// [1, 3]

int lower = ((TreeSet<Integer>) numbers).lower(5);  // 3
int floor = ((TreeSet<Integer>) numbers).floor(5);   // 5
int higher = ((TreeSet<Integer>) numbers).higher(5); // 10
```

### `LinkedHashSet`

Extends `HashSet` and maintains a linked list through all entries, preserving insertion order.
Slightly more expensive than `HashSet` (due to the linked list overhead) but provides predictable
iteration order.

```java
Set<String> ordered = new LinkedHashSet<>();
ordered.add("C");
ordered.add("A");
ordered.add("B");
// Iteration: C, A, B (insertion order)
```

### `EnumSet`

A specialized `Set` implementation for enum types. Backed by a bit vector. Extremely fast (O(1) for
all operations) and memory-efficient. The iterator traverses elements in their natural enum
declaration order.

```java
public enum Day { MON, TUE, WED, THU, FRI, SAT, SUN }

Set<Day> weekdays = EnumSet.range(Day.MON, Day.FRI);
Set<Day> weekend = EnumSet.of(Day.SAT, Day.SUN);
Set<Day> allDays = EnumSet.allOf(Day.class);
Set<Day> none = EnumSet.noneOf(Day.class);

// Set operations
Set<Day> workPlusWeekend = EnumSet.copyOf(weekdays);
workPlusWeekend.addAll(weekend);
```

:::info
`EnumSet` is the fastest `Set` implementation for enums. Its internal representation is a
single `long` (for enums with up to 64 values) or a `long[]` (for larger enums). All operations are
simple bit manipulations.
:::

## Set Operations

Java does not provide built-in union, intersection, or difference operators on sets, but the methods
are straightforward:

```java
Set<Integer> a = new HashSet<>(Set.of(1, 2, 3, 4, 5));
Set<Integer> b = new HashSet<>(Set.of(3, 4, 5, 6, 7));

// Union
Set<Integer> union = new HashSet<>(a);
union.addAll(b); // [1, 2, 3, 4, 5, 6, 7]

// Intersection
Set<Integer> intersection = new HashSet<>(a);
intersection.retainAll(b); // [3, 4, 5]

// Difference (a - b)
Set<Integer> difference = new HashSet<>(a);
difference.removeAll(b); // [1, 2]

// Symmetric difference
Set<Integer> symmetricDiff = new HashSet<>(a);
symmetricDiff.addAll(b);
Set<Integer> temp = new HashSet<>(a);
temp.retainAll(b);
symmetricDiff.removeAll(temp); // [1, 2, 6, 7]
```

## `equals` and `hashCode` Contract

The contract between `equals` and `hashCode` is critical for `HashSet`, `HashMap`, and `Hashtable`.
The contract (from `Object.hashCode()` Javadoc):

1. If two objects are equal according to `equals`, they **must** have the same hash code.
2. If two objects have the same hash code, they are **not required** to be equal.
3. If `equals` is called multiple times on the same object, it must consistently return the same
   result (unless the object is modified).
4. `hashCode` must be consistent with `equals`.

### Why Both Must Be Overridden Together

`HashMap` uses `hashCode` to find the bucket and `equals` to compare within the bucket. If you
override `equals` without overriding `hashCode`, two equal objects may end up in different buckets,
and `get` will fail to find the object.

```java
public class Person {
    private final String name;
    private final int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person p)) return false;
        return age == p.age && Objects.equals(name, p.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
```

:::warning
Never use `Map&lt;List&lt;String&gt;, ...&gt;` or `Set&lt;List&lt;String&gt;&gt;` —
`List.equals` compares element-by-element and `List.hashCode` depends on all elements. If you modify
a list after using it as a key, the map will no longer find it. Use immutable collections as keys.
:::

### `Objects.hash` and `Arrays.hashCode`

```java
// Good — uses Objects.hash for null-safe hashing
@Override
public int hashCode() {
    return Objects.hash(name, age, email);
}

// For arrays — Arrays.hashCode handles the iteration
@Override
public int hashCode() {
    return Objects.hash(name, Arrays.hashCode(tags));
}
```

## `Comparable` vs `Comparator`

### `Comparable<T>`

Defines the **natural ordering** of a class. Implemented by the class itself.

```java
public record Employee(String name, int salary) implements Comparable<Employee> {
    @Override
    public int compareTo(Employee other) {
        return Integer.compare(this.salary, other.salary);
        // Ascending by salary. Negate for descending.
    }
}

List<Employee> employees = List.of(
    new Employee("Alice", 90000),
    new Employee("Bob", 75000),
    new Employee("Charlie", 85000)
);

// Natural ordering — sorted by salary
employees.stream().sorted().forEach(System.out::println);
```

### `Comparator<T>`

Defines an **external ordering**. Does not require modifying the class.

```java
// Sort by name
Comparator<Employee> byName = Comparator.comparing(Employee::name);

// Sort by salary descending
Comparator<Employee> bySalaryDesc = Comparator.comparingInt(Employee::salary).reversed();

// Chained comparator — sort by department, then by salary descending
Comparator<Employee> byDeptThenSalary = Comparator
    .comparing(Employee::department)
    .thenComparing(Comparator.comparingInt(Employee::salary).reversed());

// Null-safe comparator
Comparator<String> nullSafe = Comparator.nullsFirst(Comparator.naturalOrder());

// Reverse
Comparator<String> reverse = Comparator.reverseOrder();
```

### Sorting Collections

```java
List<String> names = new ArrayList<>(List.of("Charlie", "Alice", "Bob"));

// Collections.sort (mutates the list)
Collections.sort(names);

// List.sort (JDK 8+)
names.sort(Comparator.naturalOrder());

// Sorted copy (without mutating)
List<String> sorted = names.stream()
    .sorted()
    .collect(Collectors.toList());
```

## Immutable Collections

JDK 9+ provides factory methods for compact, immutable collections. These are more memory-efficient
than `Collections.unmodifiableList(wrap(Arrays.asList(...)))`:

```java
// JDK 9+ immutable collections
List<String> list = List.of("A", "B", "C");
Set<String> set = Set.of("A", "B", "C");
Map<String, Integer> map = Map.of("A", 1, "B", 2, "C", 3);

// Map.ofEntries for larger maps
Map<String, Integer> largeMap = Map.ofEntries(
    Map.entry("A", 1),
    Map.entry("B", 2),
    Map.entry("C", 3)
);

// Copy of mutable collection
List<String> immutableCopy = List.copyOf(mutableList);
Set<String> immutableSet = Set.copyOf(mutableSet);
```

:::warning
Immutable collections do not allow `null` elements or keys. `List.of(1, null)` throws
`NullPointerException`. This is by design — nulls in collections are a common source of bugs, and
the immutable factories enforce non-null.
:::

### Unmodifiable Wrappers

JDK 8 and earlier provide unmodifiable wrappers via `Collections`:

```java
List<String> mutable = new ArrayList<>(List.of("A", "B"));
List<String> unmodifiable = Collections.unmodifiableList(mutable);
// unmodifiable.add("C"); // UnsupportedOperationException

// WARNING: the underlying mutable list can still be modified
mutable.add("C"); // This affects unmodifiable too!
System.out.println(unmodifiable); // [A, B, C]
```

## The `Collections` Utility Class

`Collections` provides static methods for operating on collections:

```java
// Singleton and empty collections
List<String> singleton = Collections.singletonList("only");
Set<String> emptySet = Collections.emptySet();
List<String> emptyList = Collections.emptyList();
Map<String, Integer> emptyMap = Collections.emptyMap();

// These are immutable and serializable

// Frequency and disjoint
int freq = Collections.frequency(list, "hello"); // count of "hello" in list
boolean disjoint = Collections.disjoint(list1, list2); // true if no common elements

// Sorting and shuffling
Collections.sort(list);
Collections.sort(list, comparator);
Collections.shuffle(list); // randomize order
Collections.shuffle(list, random); // seeded random

// Reversing and rotating
Collections.reverse(list);
Collections.rotate(list, 3); // rotate right by 3 positions

// Search (list must be sorted)
int index = Collections.binarySearch(sortedList, target);
int index2 = Collections.binarySearch(sortedList, target, comparator);

// Min/max
String max = Collections.max(list);
String min = Collections.min(list, comparator);

// Unmodifiable and synchronized wrappers
List<String> syncList = Collections.synchronizedList(mutableList);
```

:::info
`Collections.synchronizedList` returns a list where each method is synchronized. However,
iteration requires external synchronization:
`synchronized (syncList) { for (String s : syncList) { ... } }`. For better concurrency, use
`CopyOnWriteArrayList`.
:::

## Collection Design Patterns

### Multimap (Map of Lists)

Java does not have a built-in `Multimap`. Use `Map<K, List<V>>` with `computeIfAbsent`:

```java
// Group employees by department
Map<String, List<Employee>> byDepartment = new HashMap<>();

void addEmployee(Employee emp) {
    byDepartment.computeIfAbsent(emp.getDepartment(), k -&gt; new ArrayList&lt;&gt;())
                .add(emp);
}

// Remove an employee
void removeEmployee(Employee emp) {
    byDepartment.computeIfPresent(emp.getDepartment(), (dept, emps) -&gt; {
        emps.remove(emp);
        return emps.isEmpty() ? null : emps;
    });
}
```

### Bidirectional Map

A bidirectional map maintains a mapping from K to V and from V to K. Implement with two maps:

```java
public class BidirectionalMap<K, V> {
    private final Map<K, V> forward = new HashMap<>();
    private final Map<V, K> backward = new HashMap<>();

    public void put(K key, V value) {
        V existing = forward.put(key, value);
        if (existing != null) {
            backward.remove(existing);
        }
        backward.put(value, key);
    }

    public V getForward(K key) { return forward.get(key); }
    public K getBackward(V value) { return backward.get(value); }
    public boolean containsKey(K key) { return forward.containsKey(key); }
    public boolean containsValue(V value) { return backward.containsKey(value); }
}
```

### Cache

```java
public class TimedCache<K, V> {
    private final ConcurrentHashMap<K, CacheEntry<V>> cache = new ConcurrentHashMap<>();
    private final long ttlNanos;
    private final ScheduledExecutorService cleaner;

    public TimedCache(long ttlMillis) {
        this.ttlNanos = TimeUnit.MILLISECONDS.toNanos(ttlMillis);
        this.cleaner = Executors.newSingleThreadScheduledExecutor();
        this.cleaner.scheduleAtFixedRate(this::evictExpired, ttlMillis, ttlMillis / 2, TimeUnit.MILLISECONDS);
    }

    public void put(K key, V value) {
        cache.put(key, new CacheEntry<>(value, System.nanoTime() + ttlNanos));
    }

    public V get(K key) {
        CacheEntry<V> entry = cache.get(key);
        if (entry == null) return null;
        if (System.nanoTime() > entry.expiryNanos) {
            cache.remove(key);
            return null;
        }
        return entry.value;
    }

    private void evictExpired() {
        long now = System.nanoTime();
        cache.entrySet().removeIf(e -&gt; now > e.getValue().expiryNanos);
    }

    private record CacheEntry<V>(V value, long expiryNanos) {}
}
```

## Common Pitfalls

### Modifying a Map While Iterating

```java
// BUG — ConcurrentModificationException
Map<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);
for (String key : map.keySet()) {
    if (key.equals("A")) {
        map.remove(key); // CME!
    }
}

// FIX — use Iterator.remove()
Iterator<String> it = map.keySet().iterator();
while (it.hasNext()) {
    String key = it.next();
    if (key.equals("A")) {
        it.remove(); // safe
    }
}

// FIX — use removeIf (JDK 8+)
map.keySet().removeIf(key -&gt; key.equals("A"));
```

### Using a Mutable Object as a Map Key

```java
// BUG — modifying a key after insertion breaks the map
List<String> key = new ArrayList<>(List.of("A", "B"));
Map<List<String>, String> map = new HashMap<>();
map.put(key, "value");
key.add("C"); // changes hashCode — now the key is lost
map.get(key); // null — cannot find the key!
map.get(new ArrayList<>(List.of("A", "B"))); // also null!

// FIX — use immutable keys
Map<List<String>, String> map2 = new HashMap<>();
map2.put(List.of("A", "B"), "value"); // List.of returns immutable list
```

### `HashMap` and `null`

```java
HashMap<String, Integer> map = new HashMap<>();
map.put(null, 1);     // OK — null key allowed
map.put("key", null);  // OK — null value allowed
map.get(null);         // 1

// ConcurrentHashMap does NOT allow null
ConcurrentHashMap<String, Integer> cmap = new ConcurrentHashMap<>();
// cmap.put(null, 1);  // NullPointerException
// cmap.put("key", null); // NullPointerException
```

### `Set.of` Rejects Duplicates

```java
// BUG — throws IllegalArgumentException
Set<Integer> set = Set.of(1, 2, 3, 2); // duplicate 2
```

### `equals`/`hashCode` Inconsistency with `HashSet`

```java
public class BadKey {
    private int id;

    public BadKey(int id) { this.id = id; }

    @Override
    public boolean equals(Object o) {
        return o instanceof BadKey bk && id == bk.id;
    }

    // BUG — no hashCode override! Uses Object.hashCode() (identity-based)
    // Two equal BadKey objects may have different hash codes
    // HashSet will not find them
}

Set<BadKey> set = new HashSet<>();
set.add(new BadKey(1));
set.contains(new BadKey(1)); // false! Different hash codes
```

### Forgetting to Pre-size `HashMap`

```java
// BAD — default capacity 16, will resize multiple times
Map<String, String> map = new HashMap<>();
for (int i = 0; i &lt; 10000; i++) {
    map.put("key" + i, "value" + i);
}
// Resizes: 16 -> 32 -> 64 -> 128 -> 256 -> 512 -> 1024 -> 2048 -> 4096 -> 8192 -> 16384

// GOOD — pre-size to avoid rehashing
Map<String, String> map2 = new HashMap<>(10000);
```

### `TreeMap` Requires `Comparable` Keys

```java
// BUG — ClassCastException if keys don't implement Comparable
TreeMap<List<String>, String> treeMap = new TreeMap<>();
treeMap.put(List.of("A"), "value"); // ClassCastException: List is not Comparable

// FIX — provide a Comparator
TreeMap<List<String>, String> treeMap2 = new TreeMap<>(
    Comparator.comparing(Object::toString)
);
```

## Advanced Collection Patterns

### Composite Key with Records

When you need a compound key for a `HashMap`, use a record (or a properly implemented class with
`equals` and `hashCode`):

```java
public record CompositeKey(String department, String role) {}

Map<CompositeKey, List<Employee>> orgChart = new HashMap<>();

orgChart.computeIfAbsent(new CompositeKey("Engineering", "Senior"),
    k -> new ArrayList<>()).add(alice);
```

Records automatically generate correct `equals` and `hashCode` based on all components, making them
ideal for use as map keys and set elements.

### `IdentityHashMap`

`IdentityHashMap` uses `==` (reference equality) instead of `equals()` for key comparison. This is
useful for implementing object graphs, serialization frameworks, or proxy-based caching where you
want distinct objects to remain distinct even if they are logically equal.

```java
// Regular HashMap — two equal Integer objects map to the same entry
Map<Integer, String> regular = new HashMap<>();
regular.put(Integer.valueOf(1), "one");
regular.put(Integer.valueOf(1), "uno");
System.out.println(regular.size()); // 1

// IdentityHashMap — two distinct Integer objects (cached -128..127) map to different entries
// Note: Integer.valueOf(1) returns the same cached object for small values
Map<Integer, String> identity = new IdentityHashMap<>();
identity.put(new Integer(1), "one");
identity.put(new Integer(1), "uno");
System.out.println(identity.size()); // 2 — different object references
```

### `EnumMap`

`EnumMap` is a specialized map for enum keys. It is backed by an array indexed by the enum's ordinal
values. All operations are O(1) with minimal overhead.

```java
public enum Day { MON, TUE, WED, THU, FRI, SAT, SUN }

EnumMap<Day, String> schedule = new EnumMap<>(Day.class);
schedule.put(Day.MON, "Team standup");
schedule.put(Day.WED, "Sprint review");
schedule.put(Day.FRI, "Demo");

// Iteration in enum declaration order
for (Map.Entry<Day, String> entry : schedule.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
// Output in enum order: MON, WED, FRI
```

`EnumMap` is faster and more memory-efficient than `HashMap` with enum keys. The internal array size
is exactly the number of enum constants, and there is no hashing overhead. Always prefer `EnumMap`
over `HashMap` when keys are enum values.

### `WeakHashMap`

`WeakHashMap` uses weak references for keys. When a key is no longer strongly reachable from the
application, the entry is eligible for GC. This is useful for metadata caches, where you want
entries to be automatically cleaned up when the key object is no longer in use.

```java
WeakHashMap<Object, String> metadata = new WeakHashMap<>();

Object key = new Object();
metadata.put(key, "metadata for key");
System.out.println(metadata.size()); // 1

key = null; // remove strong reference to key
System.gc(); // suggest GC — the entry may be removed
System.out.println(metadata.size()); // possibly 0
```

:::warning
`WeakHashMap` is not suitable for caching in general. Entries are collected aggressively
— as soon as the GC discovers that a key is weakly reachable. If you need size-bounded caching, use
`LinkedHashMap` with `removeEldestEntry` or a dedicated cache library like Caffeine.
:::

### Sorted Collection Views

`Collections` provides unmodifiable sorted views:

```java
List<Integer> numbers = new ArrayList<>(List.of(5, 3, 1, 4, 2));

// Sorted list (new list, original unchanged)
List<Integer> sorted = numbers.stream().sorted().collect(Collectors.toList());

// Unmodifiable sorted view
List<Integer> unmodifiable = Collections.unmodifiableList(sorted);
```

### Frequency Counting with `Map.merge`

```java
List<String> words = List.of("the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog");

Map<String, Long> wordCounts = new HashMap<>();
for (String word : words) {
    wordCounts.merge(word, 1L, Long::sum);
}
// {the=2, quick=1, brown=1, fox=1, jumps=1, over=1, lazy=1, dog=1}

// Grouping and counting with streams
Map<String, Long> streamCounts = words.stream()
    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
```

### `NavigableSet` Range Queries

```java
TreeSet<Integer> numbers = new TreeSet<>();
for (int i = 0; i &lt; 100; i++) {
    numbers.add(i);
}

// Range query: elements between 25 and 75
NavigableSet<Integer> range = numbers.subSet(25, true, 75, false);
System.out.println(range.size()); // 50 (25..74)

// Head and tail sets
NavigableSet<Integer> below50 = numbers.headSet(50, false); // 0..49
NavigableSet<Integer> atOrAbove50 = numbers.tailSet(50, true); // 50..99

// Closest elements
int floor = numbers.floor(42);   // 42
int lower = numbers.lower(42);   // 41
int ceiling = numbers.ceiling(42); // 42
int higher = numbers.higher(42);   // 43
```

### `Collectors.toMap` Pitfalls

```java
List<Person> people = List.of(
    new Person("Alice", "Engineering"),
    new Person("Bob", "Engineering"),
    new Person("Charlie", "Sales")
);

// BUG — duplicate keys throw IllegalStateException
Map<String, Person> byDept = people.stream()
    .collect(Collectors.toMap(Person::department, Function.identity()));
// IllegalStateException: Duplicate key Engineering

// FIX — provide a merge function
Map<String, Person> byDept2 = people.stream()
    .collect(Collectors.toMap(
        Person::department,
        Function.identity(),
        (existing, replacement) -> existing // keep first
    ));

// For multivalued maps, use groupingBy
Map<String, List<Person>> grouped = people.stream()
    .collect(Collectors.groupingBy(Person::department));
// {Engineering=[Alice, Bob], Sales=[Charlie]}
```

### `Map.Entry` Iteration

```java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);

// Iterate entries (most efficient when you need both key and value)
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Stream entries
scores.entrySet().stream()
    .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
    .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));
// Bob: 87, Alice: 95
```

