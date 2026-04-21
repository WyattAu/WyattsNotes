---
title: Weak Pointers and Cyclic Reference Breaking
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: weak-pointers-and-cyclic-references
---

# Weak Pointers and Cyclic Reference Breaking

`std::weak_ptr` is a non-owning observer of a `shared_ptr`-managed object. Its primary use case is
breaking reference cycles in graph structures — the most common source of memory leaks in
`shared_ptr`-heavy codebases.

## 4.1 Definition

`std::weak_ptr<T>` is a non-owning observer of a `shared_ptr`-managed object. It does not
participate in the reference count that determines when the object is destroyed. It holds a **weak
count** in the control block [N4950 S20.11.3].

## 4.2 The `lock()` Method

To access the object through a `weak_ptr`, you must call `lock()`, which returns a `shared_ptr`. If
the object has already been destroyed, `lock()` returns an empty `shared_ptr`:

```cpp
#include <memory>
#include <iostream>

void weak_ptr_demo() {
    auto sp = std::make_shared<int>(42);
    std::weak_ptr<int> wp = sp;

    if (auto locked = wp.lock()) {
        std::cout << "value: " << *locked << "\n";  // 42
        std::cout << "use_count: " << locked.use_count() << "\n";  // 2
    }
    // locked destroyed, use_count back to 1

    sp.reset();  // Destroy the int; strong_count reaches 0

    if (wp.lock()) {
        std::cout << "still alive\n";
    } else {
        std::cout << "object was destroyed\n";  // This branch
    }
}
```

### Formal Locking Semantics

The `lock()` method performs the following operations atomically [N4950 S20.11.3.3]:

1. Load the current `strong_count` from the control block.
2. If `strong_count == 0`, return an empty `shared_ptr`.
3. If `strong_count &gt; 0`, atomically increment `strong_count` and return a `shared_ptr` sharing
   the control block.

The atomicity of step 3 is critical: it ensures that between checking the count and incrementing it,
no other thread can destroy the object. This is what makes `lock()` safe for concurrent use, unlike
the `expired()` + raw access pattern.

```cpp
// Conceptual implementation of weak_ptr::lock()
shared_ptr<T> lock() const noexcept {
    auto* cb = control_block_;
    if (!cb) return shared_ptr<T>();  // empty weak_ptr

    // Atomically: check strong_count > 0 and increment if so
    size_t old = cb->strong_count.load(std::memory_order_acquire);
    if (old == 0) return shared_ptr<T>();

    // CAS loop: increment strong_count if it hasn't dropped to zero
    while (!cb->strong_count.compare_exchange_weak(
               old, old + 1,
               std::memory_order_acq_rel,
               std::memory_order_acquire)) {
        if (old == 0) return shared_ptr<T>();
    }

    return shared_ptr<T>(cb, stored_ptr_);
}
```

## 4.3 The `expired()` Method

`expired()` is a lightweight check that returns `true` if the managed object has been destroyed. It
is equivalent to `wp.use_count() == 0` but may be faster because it does not need to return the
actual count:

```cpp
#include <memory>
#include <iostream>

void expired_demo() {
    std::weak_ptr<int> wp;
    {
        auto sp = std::make_shared<int>(99);
        wp = sp;
        std::cout << "expired: " << wp.expired() << "\n";  // false (0)
    }
    // sp destroyed here
    std::cout << "expired: " << wp.expired() << "\n";  // true (1)
}
```

:::warning Never use `expired()` followed by raw access. There is a race condition between checking
`expired()` and using the object — the object could be destroyed by another thread between the check
and the access. Always use `lock()` instead, which atomically checks and returns a `shared_ptr`. :::

### Formal Correctness: `expired()` vs `lock()` in Concurrent Code

**Claim:** `expired()` followed by access through a previously obtained raw pointer is a TOCTOU
(time-of-check-time-of-use) race. `lock()` is the only race-free mechanism.

**Proof by counterexample:**

Consider two threads operating on the same `weak_ptr`:

```
Thread A:                          Thread B:
1. Check wp.expired() → false
2. (Thread A preempted)            1. Last shared_ptr destroyed
                                   2. strong_count → 0
                                   3. Deleter runs, object freed
3. Access *raw_ptr → UB (dangling)
```

With `lock()`:

```
Thread A:                          Thread B:
1. wp.lock() → atomic check + increment
   (either returns empty or valid shared_ptr)
2. If returned non-empty:
   - strong_count was incremented atomically
   - Object cannot be destroyed while this shared_ptr exists
   - Access is safe
```

The key difference: `lock()` atomically checks the strong count **and** increments it if nonzero.
This makes the check-and-access a single atomic operation. `expired()` only checks without
incrementing, leaving a window for another thread to destroy the object.

**Corollary:** In single-threaded code, `expired()` is safe if no code between the check and the
access can trigger a `shared_ptr` destruction (e.g., no function calls that might reset a
`shared_ptr` on the stack). However, this is fragile and error-prone — always prefer `lock()`.

## 4.4 Control Block Reference Counting Details

The control block shared by `shared_ptr` and `weak_ptr` instances maintains two counters [N4950
S20.11.3]:

```
Control Block:
┌─────────────────────────────────────┐
│ strong_count  (std::atomic<size_t>) │  Number of shared_ptr owners
│ weak_count    (std::atomic<size_t>) │  Number of weak_ptr observers + 1 if strong > 0
│ deleter       (function pointer)    │  Called when strong_count reaches 0
│ allocator     (function pointer)    │  Called to deallocate the control block itself
└─────────────────────────────────────┘
```

**Lifecycle:**

1. The managed object is destroyed when `strong_count` reaches 0. At this point, the deleter runs,
   but the control block is **not** deallocated if `weak_count` is nonzero.
2. The control block is deallocated only when **both** `strong_count` and `weak_count` reach 0.
3. If `strong_count` is nonzero, `weak_count` is always at least 1 (the control block itself counts
   as a "weak" reference to keep itself alive while the object exists).

```cpp
#include <memory>
#include <iostream>

void ref_counting_demo() {
    std::weak_ptr<int> wp;
    {
        auto sp1 = std::make_shared<int>(42);
        wp = sp1;
        std::cout << "sp1.use_count: " << sp1.use_count() << "\n";  // 1
        std::cout << "wp.use_count: " << wp.use_count() << "\n";    // 1
        std::cout << "wp.expired: " << wp.expired() << "\n";        // 0

        auto sp2 = wp.lock();
        std::cout << "after lock, sp1.use_count: " << sp1.use_count() << "\n";  // 2

        // weak_count = wp(1) + 1 (implicit) = 2
    }
    // sp1 and sp2 destroyed: strong_count = 0, object destroyed
    // But wp still holds a weak reference, so control block survives

    std::cout << "after scope, wp.expired: " << wp.expired() << "\n";  // 1
    std::cout << "wp.use_count: " << wp.use_count() << "\n";           // 0

    // wp.reset() or wp going out of scope decrements weak_count
    wp.reset();  // Now both counts are 0, control block is deallocated
}
```

### Control Block State Transition Diagram

The control block moves through four distinct states during its lifetime. Each state determines
which operations are valid and what happens when the last reference of each type is released:

```
                    ┌─────────────────────────────────────────────────────┐
                    │                                                     │
                    │    s++              s-- (s > 1)        w++          │
                    │   (new              (shared_ptr       (new          │
                    │   shared_ptr)        destroyed)         weak_ptr)    │
                    │                                                     │
                    v                                                     │
            ┌───────────────┐                                        ┌──────────┐
            │   ACTIVE      │                                        │          │
            │   s > 0       │                                        │          │
            │   w >= 1      │                                        │          │
            │               │                                        │          │
            │ Object alive  │                                        │          │
            │ Control block │                                        │          │
            │ allocated     │                                        │          │
            └───────┬───────┘                                        │          │
                    │                                                 │          │
                    │ s-- (s == 1)                                    │          │
                    │ (last shared_ptr destroyed)                     │          │
                    │                                                 │          │
                    v                                                 │          │
            ┌───────────────┐                                        │          │
            │   EXPIRED     │                                        │          │
            │   s = 0       │──── w++ ───────────────────────────────►          │
            │   w >= 1      │     (new weak_ptr to                        │          │
            │               │      expired control block)                │          │
            │ Object        │                                                     │
            │ destroyed     │                                                     │
            │ Control block │                                                     │
            │ still alive   │                                                     │
            └───────┬───────┘                                                     │
                    │                                                              │
                    │ w-- (w == 1)                                                 │
                    │ (last weak_ptr destroyed)                                    │
                    │                                                              │
                    v                                                              │
            ┌───────────────┐                                                     │
            │   DEAD        │◄────────────────────────────────────────────────────┘
            │   s = 0       │          w-- (w > 1)
            │   w = 0       │          (weak_ptr destroyed)
            │               │
            │ Control block │
            │ freed         │
            └───────────────┘
```

**State invariants:**

| State   | `strong_count` | `weak_count` | Object    | Control Block |
| :------ | :------------- | :----------- | :-------- | :------------ |
| ACTIVE  | $s \gt 0$      | $w \ge 1$    | Alive     | Allocated     |
| EXPIRED | $s = 0$        | $w \ge 1$    | Destroyed | Allocated     |
| DEAD    | $s = 0$        | $w = 0$      | Destroyed | Freed         |

**Transition constraints:**

- ACTIVE $\to$ EXPIRED: triggered by the last `shared_ptr` destruction. The deleter runs atomically
  with the count decrement.
- EXPIRED $\to$ DEAD: triggered by the last `weak_ptr` destruction. The control block is freed via
  the stored allocator.
- ACTIVE $\to$ DEAD: impossible. When `s` reaches 0, `w$ must be $\ge 1$ (the self-reference weak
  count), so the block transitions to EXPIRED first.
- EXPIRED $\to$ ACTIVE: impossible. Once `s` reaches 0, no `lock()` can resurrect the object.

## 4.5 Breaking Cyclic References

The primary use case for `weak_ptr` is breaking reference cycles. Consider a parent-child tree
structure:

```cpp
#include <memory>
#include <iostream>
#include <string>

struct Node;
using NodePtr = std::shared_ptr<Node>;

struct Node {
    std::string name;
    std::weak_ptr<Node> parent;  // weak: avoids cycle
    std::vector<NodePtr> children;

    explicit Node(std::string n) : name(std::move(n)) {}

    void add_child(NodePtr child) {
        child->parent = /* need shared_ptr to this */;
        children.push_back(std::move(child));
    }

    ~Node() {
        std::cout << "~Node(" << name << ")\n";
    }
};
```

The problem: inside `add_child`, we need a `shared_ptr` to `this` to set `child->parent`. But `this`
is a raw pointer. Constructing a `shared_ptr` from `this` would create a **second** control block,
leading to double-free.

The solution is `std::enable_shared_from_this`:

```cpp
#include <memory>
#include <iostream>
#include <string>
#include <vector>

struct Node : std::enable_shared_from_this<Node> {
    std::string name;
    std::weak_ptr<Node> parent;
    std::vector<std::shared_ptr<Node>> children;

    explicit Node(std::string n) : name(std::move(n)) {}

    void add_child(std::shared_ptr<Node> child) {
        child->parent = shared_from_this();  // Safe: returns shared_ptr to *this
        children.push_back(std::move(child));
    }

    void print_tree(int depth = 0) const {
        std::cout << std::string(depth * 2, ' ') << name << "\n";
        for (const auto& child : children) {
            child->print_tree(depth + 1);
        }
    }

    ~Node() {
        std::cout << "~Node(" << name << ")\n";
    }
};

int main() {
    auto root = std::make_shared<Node>("root");
    auto left = std::make_shared<Node>("left");
    auto right = std::make_shared<Node>("right");

    root->add_child(left);
    root->add_child(right);

    root->print_tree();
    // root goes out of scope; strong_count reaches 0; entire tree is destroyed.
    // No memory leak because parent links are weak_ptr.
}
```

Output:

```
root
  left
  right
~Node(right)
~Node(left)
~Node(root)
```

:::warning `std::enable_shared_from_this` only works when the object is **originally** managed by a
`shared_ptr`. If the object is stack-allocated or managed by a `unique_ptr`, calling
`shared_from_this()` is undefined behavior. :::

## 4.6 `weak_ptr` as Observer in the Observer Pattern

`weak_ptr` is the standard way to implement the observer (publish-subscribe) pattern without
creating reference cycles between the subject and its observers:

```cpp
#include <memory>
#include <iostream>
#include <vector>
#include <string>
#include <functional>

class EventSource {
    std::string name_;
    // Store weak_ptr to observers so they don't keep observers alive
    std::vector<std::pair<std::weak_ptr<void>, std::function<void()>>> observers_;

public:
    explicit EventSource(std::string name) : name_(std::move(name)) {}

    template <typename T>
    void subscribe(std::shared_ptr<T> observer, std::function<void()> callback) {
        observers_.emplace_back(observer, std::move(callback));
    }

    void notify() {
        std::cout << "[" << name_ << "] notifying observers\n";
        // Remove expired observers and notify live ones
        for (auto it = observers_.begin(); it != observers_.end(); ) {
            if (auto locked = it->first.lock()) {
                it->second();
                ++it;
            } else {
                std::cout << "  (removed expired observer)\n";
                it = observers_.erase(it);
            }
        }
        std::cout << "  remaining observers: " << observers_.size() << "\n";
    }
};

struct Observer {
    std::string name;
    explicit Observer(std::string n) : name(std::move(n)) {}
    ~Observer() { std::cout << "~Observer(" << name << ")\n"; }
};

int main() {
    auto source = std::make_shared<EventSource>("button");
    auto obs1 = std::make_shared<Observer>("handler1");
    auto obs2 = std::make_shared<Observer>("handler2");

    source->subscribe(obs1, [&]() { std::cout << "  " << obs1->name << " reacted\n"; });
    source->subscribe(obs2, [&]() { std::cout << "  " << obs2->name << " reacted\n"; });

    source->notify();
    // [button] notifying observers
    //   handler1 reacted
    //   handler2 reacted
    //   remaining observers: 2

    obs1.reset();  // Destroy observer 1
    std::cout << "--- observer 1 destroyed ---\n";

    source->notify();
    // [button] notifying observers
    //   (removed expired observer)
    //   handler2 reacted
    //   remaining observers: 1
}
```

### Observer Pattern: Thread Safety Considerations

When the observer pattern is used across threads, additional care is required:

```cpp
#include <memory>
#include <vector>
#include <mutex>
#include <functional>

class ThreadSafeEventSource {
    std::vector<std::pair<std::weak_ptr<void>, std::function<void()>>> observers_;
    std::mutex mtx_;

public:
    template <typename T>
    void subscribe(std::shared_ptr<T> observer, std::function<void()> callback) {
        std::lock_guard lock(mtx_);
        observers_.emplace_back(observer, std::move(callback));
    }

    void notify() {
        std::lock_guard lock(mtx_);
        for (auto it = observers_.begin(); it != observers_.end(); ) {
            if (auto locked = it->first.lock()) {
                it->second();
                ++it;
            } else {
                it = observers_.erase(it);
            }
        }
    }
};
```

:::warning The callback in the observer pattern is invoked while holding the mutex. If the callback
attempts to subscribe or unsubscribe, it will deadlock. To avoid this, copy the observer list before
iterating, or use a recursive mutex. Alternatively, collect callbacks into a local vector under the
lock, then invoke them after releasing the lock. :::

## 4.7 `weak_ptr` with `shared_ptr::reset()`

When a `shared_ptr` is reset, the `weak_ptr` does not become invalid immediately — it simply
observes that the object is gone. The `weak_ptr` itself remains valid (it can be copied, compared,
etc.) but `lock()` returns an empty `shared_ptr`:

```cpp
#include <memory>
#include <iostream>

void reset_demo() {
    auto sp = std::make_shared<int>(100);
    std::weak_ptr<int> wp = sp;

    std::cout << "before reset: expired=" << wp.expired() << "\n";  // 0

    sp.reset();  // Object destroyed

    std::cout << "after reset:  expired=" << wp.expired() << "\n";  // 1

    // wp is still valid as an object itself — you can copy it, assign it, etc.
    std::weak_ptr<int> wp2 = wp;
    std::cout << "wp2.expired=" << wp2.expired() << "\n";  // 1

    // But you cannot access the managed object
    auto locked = wp.lock();
    if (!locked) {
        std::cout << "object is gone\n";  // This branch
    }

    // Resetting wp to point to a new object
    auto sp2 = std::make_shared<int>(200);
    wp = sp2;
    std::cout << "after reassign: expired=" << wp.expired() << "\n";  // 0
    std::cout << "value: " << *wp.lock() << "\n";  // 200
}
```

## 4.8 Comparison: `weak_ptr` vs Raw Observer Pointers

| Aspect                 | `std::weak_ptr`                         | Raw pointer (`T*`)                  |
| :--------------------- | --------------------------------------- | ----------------------------------- |
| Ownership              | Non-owning                              | Non-owning                          |
| Null check             | `expired()` / `lock()`                  | Manual `if (ptr)`                   |
| Thread-safe `lock()`   | Yes (atomic check-and-increment)        | No (race between check and use)     |
| Lifecycle awareness    | Knows if object is alive                | Cannot know (dangling pointer risk) |
| Performance            | Atomic operation on lock, control block | Zero overhead                       |
| Control block required | Yes (must come from `shared_ptr`)       | No                                  |
| Use case               | Shared ownership graphs                 | Known-lifetime relationships        |

### When Raw Pointers Are Preferable

Raw non-owning pointers are the correct choice when the lifetime relationship is statically known.
The classic example is a parent-child tree where the parent owns the children via `unique_ptr` and
the children hold a raw pointer to the parent:

```cpp
#include <memory>
#include <iostream>
#include <string>
#include <vector>

struct TreeNode {
    std::string name;
    TreeNode* parent = nullptr;  // Raw: parent always outlives children
    std::vector<std::unique_ptr<TreeNode>> children;

    explicit TreeNode(std::string n) : name(std::move(n)) {}

    void add_child(std::unique_ptr<TreeNode> child) {
        child->parent = this;  // Safe: this outlives child
        children.push_back(std::move(child));
    }

    ~TreeNode() {
        std::cout << "~TreeNode(" << name << ")\n";
    }
};

int main() {
    auto root = std::make_unique<TreeNode>("root");
    root->add_child(std::make_unique<TreeNode>("child1"));
    root->add_child(std::make_unique<TreeNode>("child2"));
    // root destroyed → children destroyed → no leak, no cycle
}
```

This pattern is zero-overhead and type-safe because the invariant (parent outlives children) is
structurally enforced by the ownership hierarchy. `weak_ptr` would add unnecessary atomic overhead
without providing additional safety in this case.

## 4.9 When NOT to Use `weak_ptr`

1. **When the lifetime relationship is clear.** If a parent owns a child and the child only exists
   while the parent exists, use a raw pointer (or reference) from parent to child. `weak_ptr` adds
   unnecessary overhead.

2. **When you need performance.** `weak_ptr::lock()` involves an atomic operation. In hot loops or
   performance-critical code, raw pointers are faster.

3. **When the object is not managed by `shared_ptr`.** `weak_ptr` can only observe objects owned by
   `shared_ptr`. If the object is stack-allocated or owned by `unique_ptr`, use raw pointers.

4. **As a universal replacement for raw pointers.** `weak_ptr` does not replace all non-owning
   pointer use cases. It is specifically for the "I need to observe an object whose lifetime I don't
   control" scenario.

5. **For caching.** If you need a cache that evicts entries when memory is low, `weak_ptr` alone is
   not sufficient — you need a cache structure that decides when to clear entries. `weak_ptr` just
   tells you if the object is still alive, not whether you _should_ keep it alive.

## 4.10 Thread Safety of `weak_ptr` Operations

`weak_ptr` has specific thread safety guarantees [N4950 S20.11.3.6]:

- **Distinct instances:** All operations on different `weak_ptr` objects observing the same managed
  object are safe to call concurrently, including `lock()`, `reset()`, `expired()`, and copy/move
  operations.
- **`lock()` is atomic:** It atomically checks the strong count and increments it if nonzero. This
  is the only race-free way to access the managed object from multiple threads.
- **`expired()` is NOT atomic with access:** Calling `expired()` and then accessing the object
  through a previously obtained raw pointer has a TOCTOU (time-of-check-time-of-use) race.

```cpp
#include <memory>
#include <thread>
#include <iostream>
#include <vector>

void concurrent_weak_access_demo() {
    auto sp = std::make_shared<int>(42);
    std::weak_ptr<int> wp = sp;

    {
        std::vector<std::jthread> threads;
        for (int i = 0; i < 4; ++i) {
            threads.emplace_back([&wp] {
                for (int j = 0; j < 100000; ++j) {
                    if (auto locked = wp.lock()) {
                        (void)*locked;
                    }
                }
            });
        }
    }

    sp.reset();
    std::cout << "after reset: expired=" << wp.expired() << "\n";
}

void bad_expired_check(std::weak_ptr<int> wp) {
    if (!wp.expired()) {
        // WRONG: object could be destroyed here by another thread
    }

    if (auto locked = wp.lock()) {
        // CORRECT: lock() atomically checks and increments strong count
    }
}
```

## 4.11 `owner_before` and Associative Containers

`weak_ptr` provides `owner_before()` and the `std::owner_less` functor for use as keys in ordered
associative containers. The comparison is based on the **identity of the control block**, not the
pointed-to value:

```cpp
#include <memory>
#include <set>
#include <iostream>

int main() {
    auto a = std::make_shared<int>(1);
    auto b = std::make_shared<int>(2);

    std::set<std::weak_ptr<int>,
             std::owner_less<std::weak_ptr<int>>> observers;
    observers.insert(a);
    observers.insert(b);

    a.reset();
    // 'a' is expired but still in the set (weak count keeps control block alive)

    for (auto it = observers.begin(); it != observers.end(); ) {
        if (it->expired()) {
            it = observers.erase(it);
        } else {
            ++it;
        }
    }
}
```

`std::owner_less` also enables heterogeneous comparison between `weak_ptr` and `shared_ptr`, so you
can look up a `shared_ptr` key in a `set` of `weak_ptr` entries (or vice versa) without converting.
This is useful for registration/unregistration patterns where the subject holds `weak_ptr` observers
but lookups are done with `shared_ptr`.

## 4.12 `weak_ptr` in Caches and Memoization

`weak_ptr` can be used to implement caches where entries are evicted automatically when the original
producer releases them. The pattern is called a **weak cache**:

```cpp
#include <memory>
#include <unordered_map>
#include <string>
#include <iostream>
#include <functional>

template<typename Key, typename Value>
class WeakCache {
    std::unordered_map<Key, std::weak_ptr<Value>> cache_;

public:
    // Try to retrieve a cached value. Returns empty shared_ptr if evicted.
    std::shared_ptr<Value> get(const Key& key) {
        if (auto it = cache_.find(key); it != cache_.end()) {
            if (auto sp = it->second.lock()) {
                return sp;
            }
            cache_.erase(it);  // Clean up expired entry
        }
        return nullptr;
    }

    // Insert a value into the cache.
    void put(const Key& key, std::shared_ptr<Value> value) {
        cache_[key] = value;
    }

    // Remove expired entries (call periodically).
    std::size_t cleanup() {
        std::size_t removed = 0;
        for (auto it = cache_.begin(); it != cache_.end(); ) {
            if (it->second.expired()) {
                it = cache_.erase(it);
                ++removed;
            } else {
                ++it;
            }
        }
        return removed;
    }

    std::size_t size() const { return cache_.size(); }
};

struct ExpensiveResource {
    std::string data;
    explicit ExpensiveResource(std::string d) : data(std::move(d)) {
        std::cout << "  ExpensiveResource(" << data << ") constructed\n";
    }
    ~ExpensiveResource() {
        std::cout << "  ExpensiveResource(" << data << ") destroyed\n";
    }
};

int main() {
    WeakCache<std::string, ExpensiveResource> cache;

    {
        auto resource = std::make_shared<ExpensiveResource>("big-data");
        cache.put("key1", resource);
        std::cout << "cache size: " << cache.size() << "\n";  // 1

        auto cached = cache.get("key1");
        std::cout << "cache hit: " << (cached != nullptr) << "\n";  // 1
    }
    // resource goes out of scope, ExpensiveResource destroyed
    // but cache still holds a weak_ptr to the (now dead) control block

    auto cached = cache.get("key1");
    std::cout << "after owner died, cache hit: " << (cached != nullptr) << "\n";  // 0

    std::cout << "cache size before cleanup: " << cache.size() << "\n";  // 1
    std::cout << "cleaned up: " << cache.cleanup() << "\n";  // 1
    std::cout << "cache size after cleanup: " << cache.size() << "\n";  // 0
}
```

Output:

```
  ExpensiveResource(big-data) constructed
cache size: 1
cache hit: 1
  ExpensiveResource(big-data) destroyed
after owner died, cache hit: 0
cache size before cleanup: 1
cleaned up: 1
cache size after cleanup: 0
```

**Limitations of the weak cache pattern:**

1. **No eviction policy.** The cache only evicts entries when the original owner releases them. If
   the original owner never releases, the cache grows without bound.
2. **Stale entries accumulate.** Expired `weak_ptr` entries remain in the map until `cleanup()` is
   called or `get()` encounters them. This wastes memory proportional to the number of expired
   entries.
3. **Not a replacement for LRU/LFU caches.** A proper cache needs an eviction policy (least recently
   used, least frequently used, time-based expiration). `weak_ptr` only provides automatic cleanup
   when the producer releases the value.

:::info Relevance The weak cache pattern is most useful when the cache is a secondary store — the
primary owner (e.g., a data loader) produces `shared_ptr` values, and the cache holds `weak_ptr`
references to avoid extending their lifetime. This is common in image loaders, texture caches in
game engines, and database connection pools. :::

## 4.13 Proof: `weak_ptr` Does Not Extend Object Lifetime

**Claim:** Creating or destroying a `weak_ptr` never affects whether the managed object is alive.

**Argument from the standard [N4950 S20.11.3.5]:**

1. The managed object is destroyed when `strong_count` reaches 0 [N4950 S20.11.3.5]. This is the
   sole condition for object destruction.

2. `weak_ptr` operations modify only `weak_count`, never `strong_count`:
   - `weak_ptr` constructor from `shared_ptr`: increments `weak_count` only.
   - `weak_ptr` destructor: decrements `weak_count` only.
   - `weak_ptr::lock()`: reads `strong_count` and conditionally increments it (returning a
     `shared_ptr`), but the `weak_ptr` itself does not increment `strong_count`.
   - `weak_ptr::reset()`: decrements `weak_count` only.

3. Since `weak_ptr` never increments `strong_count`, and `strong_count` is the sole determinant of
   object lifetime, `weak_ptr` cannot extend the object's lifetime.

**Formal restatement:** For any sequence of operations on `shared_ptr` and `weak_ptr` instances
sharing the same control block, the time at which `strong_count` reaches 0 (and the object is
destroyed) depends only on the sequence of `shared_ptr` copies, moves, and destructions. Adding or
removing `weak_ptr` instances to this sequence does not change the destruction time.

**Corollary:** `weak_ptr::lock()` can _temporarily_ extend the lifetime (because it returns a
`shared_ptr`, which increments `strong_count`), but the `weak_ptr` itself does not. The caller
controls whether the returned `shared_ptr` is kept alive.

## 4.14 `weak_ptr` and `enable_shared_from_this` Interaction

When a class inherits from `std::enable_shared_from_this&lt;T&gt;`, the internal mechanism stores a
`weak_ptr` in the base class. This has subtle implications:

```cpp
#include <memory>
#include <iostream>

struct Widget : std::enable_shared_from_this<Widget> {
    int id;
    explicit Widget(int i) : id(i) {
        std::cout << "Widget(" << id << ") constructed\n";
    }
    ~Widget() {
        std::cout << "Widget(" << id << ") destroyed\n";
    }

    std::weak_ptr<Widget> get_weak_self() {
        // This returns the internal weak_ptr from enable_shared_from_this
        // It does NOT increment strong_count
        return weak_from_this();
    }
};

int main() {
    auto w = std::make_shared<Widget>(1);
    auto wp = w->get_weak_self();

    std::cout << "strong_count: " << w.use_count() << "\n";  // 1
    // get_weak_self() did NOT increment strong_count

    auto w2 = wp.lock();
    std::cout << "after lock, strong_count: " << w.use_count() << "\n";  // 2
}
```

The `weak_from_this()` member function (added in C++17 [N4950 S20.11.3.6]) returns the internal
`weak_ptr` directly, without creating an intermediate `shared_ptr`. This is more efficient than
calling `shared_from_this()` when you only need to observe the object:

| Method               | Returns               | Increments `strong_count`? | Use case                       |
| :------------------- | :-------------------- | :------------------------- | :----------------------------- |
| `shared_from_this()` | `shared_ptr&lt;T&gt;` | Yes                        | Need to extend lifetime        |
| `weak_from_this()`   | `weak_ptr&lt;T&gt;`   | No                         | Need to observe without owning |

## Common Pitfalls

1. **Using `expired()` instead of `lock()` in multithreaded code.** Between checking `expired()` and
   accessing the object, another thread may destroy it. Always use `lock()`.

2. **Holding `shared_ptr` from `lock()` too long.** Every `shared_ptr` returned by `lock()`
   temporarily extends the lifetime of the object. If you store it in a long-lived container, you
   may inadvertently prevent destruction.

3. **Forgetting `enable_shared_from_this`.** If a class needs to produce `shared_ptr` from `this`,
   it must inherit from `std::enable_shared_from_this`. Constructing a `shared_ptr` directly from
   `this` creates a second control block and causes double-free.

4. **Using `weak_ptr` for optional ownership.** `weak_ptr` is for _observation_, not optional
   ownership. If you sometimes want to own an object, use `shared_ptr` or `unique_ptr` directly.

5. **Not cleaning up expired `weak_ptr` entries.** In caches, observer lists, and other containers
   of `weak_ptr`, expired entries accumulate over time. Call `cleanup()` periodically or clean up
   during iteration to prevent unbounded memory growth.

6. **Using `weak_ptr` with stack-allocated or `unique_ptr`-managed objects.** `weak_ptr` can only
   observe objects managed by `shared_ptr`. Constructing a `weak_ptr` from a non-`shared_ptr` source
   is a compile error.

7. **Calling `lock()` in a loop without backoff.** If the object is being destroyed and recreated
   rapidly, a tight `lock()` loop can spin. Use appropriate synchronization or backoff strategies.

## See Also

- [Shared Ownership (std::shared_ptr) and Control Block](3_shared_ptr.md)
- [Common Pitfalls](5_custom_deleters.md)
- [Unique Ownership (std::unique_ptr) and EBO](2_unique_ptr.md)
- [RAII Patterns](1_raii_patterns.md)
