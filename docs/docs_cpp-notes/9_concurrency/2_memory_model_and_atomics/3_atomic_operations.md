---
title: Atomic Operations and Lock-Free Programming
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: atomic-operations-lock-free-programming
---

# Atomic Operations and Lock-Free Programming

This section covers `std::atomic<T>`, `std::atomic_ref<T>`, the full set of atomic operations,
`std::atomic_flag`, the lock-free/wait-free/obstruction-free progress guarantees, the ABA problem, a
lock-free stack implementation, and a spinlock using `std::atomic_flag`.

## `std::atomic<T>`

`std::atomic<T>` [N4950 §31.7] is a template class that provides atomic access to a value of type
`T`. All operations on `std::atomic` are atomic: they are indivisible from the perspective of all
threads.

The standard specifies which types `T` may be [N4950 §31.7.1]:

- **Scalar types**: `bool`, `char`, `int`, `float`, `pointer types`, etc.
- **Trivially copyable types**: Any trivially copyable type (C++17 and later), though not all
  operations may be available.

```cpp
#include <iostream>
#include <atomic>
#include <thread>
#include <vector>

int main() {
    std::atomic<int> counter{0};
    constexpr int num_threads = 10;
    constexpr int iterations = 100'000;

    std::vector<std::jthread> threads;
    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back([&counter, iterations] {
            for (int j = 0; j < iterations; ++j) {
                counter.fetch_add(1, std::memory_order_relaxed);
            }
        });
    }

    std::cout << "Counter: " << counter.load() << "\n";
    std::cout << "Expected: " << num_threads * iterations << "\n";
    return 0;
}
```

## `std::atomic_ref<T>` (C++26)

`std::atomic_ref<T>` [NPPES p2308] provides atomic access to a non-atomic object through a reference
wrapper. This is useful when you need atomic operations on data that was not declared as
`std::atomic`:

```cpp
#include <atomic>
#include <iostream>

int main() {
    int value = 0;
    std::atomic_ref<int> ref(value);

    ref.store(42, std::memory_order_relaxed);
    std::cout << "value = " << value << "\n";

    int old = ref.exchange(99, std::memory_order_relaxed);
    std::cout << "old = " << old << ", value = " << value << "\n";
    return 0;
}
```

:::warning `std::atomic_ref` requires that the referenced object's alignment is at least
`alignof(std::atomic<T>)`. For many types this is the same as `alignof(T)`, but for types smaller
than the platform's native word size, `alignof(std::atomic<T>)` may be larger. :::

## Atomic Operations

The full set of atomic operations defined in [N4950 §31.7.2]:

| Operation                                                                  | Description                                             |
| -------------------------------------------------------------------------- | ------------------------------------------------------- |
| `load(order)`                                                              | Atomically reads the current value                      |
| `store(val, order)`                                                        | Atomically writes a value                               |
| `exchange(val, order)`                                                     | Atomically replaces the value and returns the old value |
| `compare_exchange_weak(expected, desired, success_order, failure_order)`   | CAS with possible spurious failure                      |
| `compare_exchange_strong(expected, desired, success_order, failure_order)` | CAS without spurious failure                            |
| `fetch_add(val, order)`                                                    | Atomically adds and returns the old value               |
| `fetch_sub(val, order)`                                                    | Atomically subtracts and returns the old value          |
| `fetch_and(val, order)`                                                    | Atomically performs bitwise AND and returns old value   |
| `fetch_or(val, order)`                                                     | Atomically performs bitwise OR and returns old value    |
| `fetch_xor(val, order)`                                                    | Atomically performs bitwise XOR and returns old value   |

## `std::atomic_flag`

`std::atomic_flag` [N4950 §31.7] is the simplest atomic type: a boolean flag guaranteed to be
lock-free. It provides only two operations:

- `test_and_set(order)`: Atomically sets the flag to `true` and returns the previous value.
- `clear(order)`: Atomically sets the flag to `false`.

## Lock-Free vs Wait-Free vs Obstruction-Free

| Guarantee            | Definition                                                          | Blocking?        |
| -------------------- | ------------------------------------------------------------------- | ---------------- |
| **Obstruction-free** | Progress guaranteed if all other threads are paused                 | No (if alone)    |
| **Lock-free**        | At least one thread makes progress within a bounded number of steps | No (system-wide) |
| **Wait-free**        | Every thread makes progress within a bounded number of steps        | No (per-thread)  |

These form a hierarchy: wait-free $\implies$ lock-free $\implies$ obstruction-free.

You can query the progress guarantee using `std::atomic<T>::is_always_lock_free` (compile-time)
[N4950 §31.7.7] and `a.is_lock_free()` (runtime) [N4950 §31.7.2]:

```cpp
#include <iostream>
#include <atomic>

int main() {
    std::cout << "atomic<int> lock-free: "
              << std::atomic<int>::is_always_lock_free << "\n";
    std::cout << "atomic<bool> lock-free: "
              << std::atomic<bool>::is_always_lock_free << "\n";

    std::atomic<long long> big_atomic;
    std::cout << "atomic<long long> lock-free (runtime): "
              << big_atomic.is_lock_free() << "\n";
    return 0;
}
```

## ABA Problem and CAS

The **ABA problem** occurs in lock-free algorithms when a value changes from $A$ to $B$ and back to
$A$ between a thread's load and its CAS. The CAS succeeds because the value is still $A$, but the
intermediate change may have invalidated invariants:

$$\text{Load}(A) \to \text{Other thread: } A \to B \to A \to \text{CAS}(A, C) \text{ succeeds — incorrectly}$$

`compare_exchange_weak` may fail spuriously (return `false` even when the expected value matches),
which can help in some ABA scenarios but does not fully solve the problem. Full solutions include:

1. **Tagged pointers**: Append a monotonically increasing counter to the value.
2. **Hazard pointers**: Track which objects are currently being accessed.
3. **Epoch-based reclamation**: Defer reclamation to epoch boundaries.

## Lock-Free Stack with `compare_exchange_weak`

```cpp
#include <iostream>
#include <atomic>
#include <memory>

template <typename T>
class lock_free_stack {
    struct node {
        T data;
        node* next;
        explicit node(T val) : data(std::move(val)), next(nullptr) {}
    };

    std::atomic<node*> head_{nullptr};

public:
    void push(T value) {
        node* new_node = new node(std::move(value));
        new_node->next = head_.load(std::memory_order_relaxed);

        while (!head_.compare_exchange_weak(
            new_node->next,
            new_node,
            std::memory_order_release,
            std::memory_order_relaxed
        )) {
            // new_node->next is updated to the current head on failure
        }
    }

    bool pop(T& result) {
        node* old_head = head_.load(std::memory_order_acquire);
        while (old_head) {
            node* next = old_head->next;
            if (head_.compare_exchange_weak(
                old_head,
                next,
                std::memory_order_acquire,
                std::memory_order_acquire
            )) {
                result = std::move(old_head->data);
                delete old_head;
                return true;
            }
        }
        return false;
    }

    ~lock_free_stack() {
        node* current = head_.load(std::memory_order_relaxed);
        while (current) {
            node* next = current->next;
            delete current;
            current = next;
        }
    }
};

int main() {
    lock_free_stack<int> stack;

    for (int i = 0; i < 100; ++i) {
        stack.push(i);
    }

    int value;
    int count = 0;
    while (stack.pop(value)) {
        ++count;
    }

    std::cout << "Popped " << count << " elements\n";
    return 0;
}
```

:::warning This lock-free stack has a known ABA problem in `pop()`: if between the `load` and the
`compare_exchange_weak`, another thread pops `old_head`, pushes new nodes, and then pushes
`old_head` back, the CAS will succeed but `next` will be stale. In production code, use hazard
pointers or tagged pointers to prevent ABA. :::

## Spinlock Using `std::atomic_flag`

```cpp
#include <iostream>
#include <atomic>
#include <thread>
#include <vector>

class spinlock {
    std::atomic_flag flag_ = ATOMIC_FLAG_INIT;

public:
    void lock() {
        while (flag_.test_and_set(std::memory_order_acquire)) {
            // spin: yield the CPU to reduce contention
            std::this_thread::yield();
        }
    }

    void unlock() {
        flag_.clear(std::memory_order_release);
    }
};

int main() {
    spinlock mtx;
    int counter = 0;
    constexpr int num_threads = 8;
    constexpr int iterations = 100'000;

    std::vector<std::jthread> threads;
    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back([&mtx, &counter, iterations] {
            for (int j = 0; j < iterations; ++j) {
                mtx.lock();
                ++counter;
                mtx.unlock();
            }
        });
    }

    std::cout << "Counter: " << counter << "\n";
    std::cout << "Expected: " << num_threads * iterations << "\n";
    return 0;
}
```

:::info A spinlock is lock-free by the above definition: at least one thread (the one currently
holding the lock) makes progress. However, spinlocks waste CPU cycles while spinning. They are
appropriate only when the critical section is very short and contention is expected to be low. For
longer critical sections, prefer `std::mutex` which blocks the thread and yields the CPU. :::

## See Also

- [Memory Orderings](./4_memory_orderings.md)
- [Compare-and-Swap (CAS) Loops](./5_cas_loops.md)
- [Cache Coherency (MESI) and False Sharing](./2_cache_coherency.md)
