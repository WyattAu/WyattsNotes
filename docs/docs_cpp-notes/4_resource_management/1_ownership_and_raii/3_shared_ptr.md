---
title: Shared Ownership (std::shared_ptr) and Control Block
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: shared-ownership-and-control-block
---

# Shared Ownership (std::shared_ptr) and Control Block

`std::shared_ptr` enables multiple owners to share a single heap-allocated object via a
reference-counted control block. While powerful, it carries significant overhead — atomic reference
counting, a separate heap allocation, and the risk of reference cycles — and should only be used
when shared ownership is genuinely required.

## 3.1 Definition

`std::shared_ptr<T>` is a smart pointer that allows multiple owners to share a single heap-allocated
object. The object is destroyed when the last `shared_ptr` pointing to it is destroyed or reset
[N4950 §20.11.3].

## 3.2 Control Block Layout

Every group of `shared_ptr` instances that refer to the same object share a **control block**
allocated on the heap:

```
Control Block (separate allocation from the object):
┌─────────────────────────────────────┐
│ strong_count  (std::atomic<size_t>) │  Number of shared_ptr owners
│ weak_count    (std::atomic<size_t>) │  Number of weak_ptr observers + 1 if strong > 0
│ deleter       (function pointer)    │  Called when strong_count reaches 0
│ allocator     (function pointer)    │  Called to deallocate the control block itself
└─────────────────────────────────────┘

std::shared_ptr<T> object layout:
┌──────────────────┐
│ T* ptr_          │  (pointer to the managed object)
│ ControlBlock* cb_│  (pointer to the control block)
└──────────────────┘
sizeof(std::shared_ptr<T>) == 16 (two pointers on x86_64)
```

The control block is typically allocated separately from the managed object, unless
`std::make_shared` is used.

## 3.3 `std::make_shared` vs Direct Construction

```cpp
#include <memory>
#include <iostream>

struct Sensor {
    int id;
    Sensor(int i) : id(i) {
        std::cout << "Sensor(" << id << ") constructed\n";
    }
    ~Sensor() {
        std::cout << "Sensor(" << id << ") destroyed\n";
    }
};

void make_shared_demo() {
    // Single allocation: object + control block in one block
    auto p1 = std::make_shared<Sensor>(1);

    // Two allocations: object via new, control block separately
    std::shared_ptr<Sensor> p2(new Sensor(2));
}

void reference_counting_demo() {
    auto a = std::make_shared<Sensor>(3);
    std::cout << "use_count: " << a.use_count() << "\n";  // 1

    {
        auto b = a;  // Copy: increments strong_count
        std::cout << "use_count: " << a.use_count() << "\n";  // 2
    }
    // b destroyed, strong_count decremented

    std::cout << "use_count: " << a.use_count() << "\n";  // 1
}
// a destroyed, strong_count reaches 0, Sensor destroyed
```

Output:

```
Sensor(1) constructed
Sensor(2) constructed
Sensor(3) constructed
use_count: 1
use_count: 2
use_count: 1
Sensor(2) destroyed
Sensor(3) destroyed
Sensor(1) destroyed
```

:::info Relevance `std::make_shared` performs a single allocation (better cache locality, fewer
syscalls). However, the control block and object share the same memory block, so the memory for the
control block cannot be freed until **all** `weak_ptr` references are also gone. For very large
objects with long-lived `weak_ptr` observers, this can delay deallocation. :::

## 3.4 Thread Safety Model

`shared_ptr` provides a subtle and often misunderstood thread safety guarantee:

| Operation                                             | Thread-Safe?                                       |
| :---------------------------------------------------- | :------------------------------------------------- |
| Copying a `shared_ptr` (incrementing `strong_count`)  | Yes — atomic                                       |
| Destroying/resetting a `shared_ptr`                   | Yes — atomic                                       |
| Accessing the **pointed-to object** via `*p` or `p->` | **No** — you must provide your own synchronization |

The control block's reference counts are modified using `std::atomic` operations [N4950 §20.11.3.6].
This means you can safely copy `shared_ptr` instances between threads. But the **object itself** is
not protected — concurrent writes to `*p` without external synchronization is a data race and
undefined behavior.

```cpp
#include <memory>
#include <thread>
#include <mutex>
#include <iostream>

struct Counter {
    int value = 0;
    std::mutex mtx;
};

void thread_safe_shared_ptr() {
    auto c = std::make_shared<Counter>();

    auto increment = [&c] {
        // This is safe: copying shared_ptr is atomic
        auto local = c;

        // This is safe: we lock the mutex before accessing the object
        std::lock_guard lock(local->mtx);
        local->value++;
    };

    std::thread t1(increment);
    std::thread t2(increment);
    t1.join();
    t2.join();

    std::cout << "value: " << c->value << "\n";  // 2
}
```

## 3.5 Performance Warning

`shared_ptr` has significant overhead compared to `unique_ptr`:

1. **Size:** 16 bytes (two pointers) vs 8 bytes.
2. **Allocation:** Always allocates a control block on the heap.
3. **Reference counting:** Every copy and destruction involves an atomic increment/decrement. These
   are ** sequentially consistent** by default and act as memory barriers, inhibiting compiler and
   CPU reordering.
4. **Cache pressure:** The control block is a separate allocation, causing an additional cache miss
   on every `shared_ptr` copy or destruction.

:::warning Do not use `shared_ptr` by default. Use `unique_ptr` as your default smart pointer. Only
reach for `shared_ptr` when you genuinely need shared ownership. Premature use of `shared_ptr` is a
common source of performance bugs in C++ codebases. :::

## See Also

- [Unique Ownership (std::unique_ptr) and EBO](2_unique_ptr.md)
- [Weak Pointers and Cyclic Reference Breaking](4_weak_ptr.md)
- [Common Pitfalls](5_custom_deleters.md)
