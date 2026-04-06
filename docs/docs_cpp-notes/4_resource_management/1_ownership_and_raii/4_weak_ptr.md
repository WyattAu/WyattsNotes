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
count** in the control block [N4950 §20.11.3].

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

## 4.4 Control Block Reference Counting Details

The control block shared by `shared_ptr` and `weak_ptr` instances maintains two counters [N4950
§20.11.3]:

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
| ---------------------- | --------------------------------------- | ----------------------------------- |
| Ownership              | Non-owning                              | Non-owning                          |
| Null check             | `expired()` / `lock()`                  | Manual `if (ptr)`                   |
| Thread-safe `lock()`   | Yes (atomic check-and-increment)        | No (race between check and use)     |
| Lifecycle awareness    | Knows if object is alive                | Cannot know (dangling pointer risk) |
| Performance            | Atomic operation on lock, control block | Zero overhead                       |
| Control block required | Yes (must come from `shared_ptr`)       | No                                  |
| Use case               | Shared ownership graphs                 | Known-lifetime relationships        |

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

`weak_ptr` has specific thread safety guarantees [N4950 §20.11.3.6]:

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

## See Also

- [Shared Ownership (std::shared_ptr) and Control Block](3_shared_ptr.md)
- [Common Pitfalls](5_custom_deleters.md)
- [Unique Ownership (std::unique_ptr) and EBO](2_unique_ptr.md)

:::

:::
