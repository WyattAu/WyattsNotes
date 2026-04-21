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

## `std::atomic_ref<T>` (C++20)

`std::atomic_ref<T>` provides atomic access to a non-atomic object through a reference wrapper. This
is useful when you need atomic operations on data that was not declared as `std::atomic`:

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

$$\mathrm{Load}(A) \to \mathrm{Other thread: } A \to B \to A \to \mathrm{CAS}(A, C) \mathrm{ succeeds — incorrectly}$$

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

## Memory Order Arguments and Their Semantics

Every atomic operation accepts a `std::memory_order` argument that constrains how the compiler and
CPU may reorder operations around it [N4950 §31.7.2]. The six memory orders form a hierarchy of
strength:

| Memory Order           | Compiler Reordering | CPU Reordering | Use Case                        |
| :--------------------- | :------------------ | :------------- | :------------------------------ |
| `memory_order_relaxed` | No reorder with     | No reorder     | Simple counters, statistics     |
| `memory_order_consume` | atomic ops          | on atomics     | Data-dependent ordering         |
| `memory_order_acquire` |                     |                | Guard reads of shared data      |
| `memory_order_release` |                     |                | Publish writes to shared data   |
| `memory_order_acq_rel` |                     |                | Read-modify-write with ordering |
| `memory_order_seq_cst` |                     |                | Default; total order            |

```cpp
#include <atomic>
#include <iostream>

void memory_order_overview() {
    std::atomic<int> x{0};
    std::atomic<int> y{0};

    // Relaxed: no ordering guarantees beyond atomicity
    x.store(1, std::memory_order_relaxed);

    // Release: all prior writes (non-atomic and atomic) are visible
    // to threads that acquire this atomic
    x.store(1, std::memory_order_release);

    // Acquire: all subsequent reads see writes from the releasing thread
    int v = x.load(std::memory_order_acquire);

    // Acquire-release (for RMW operations): combines acquire and release
    x.fetch_add(1, std::memory_order_acq_rel);

    // Sequentially consistent: total order across all seq_cst operations
    x.store(1, std::memory_order_seq_cst);  // default for store
    int v2 = x.load(std::memory_order_seq_cst);  // default for load
}
```

:::warning `memory_order_consume` is effectively deprecated in practice. Most compilers (GCC, Clang,
MSVC) treat it as `memory_order_acquire` because implementing true dependency ordering correctly is
extremely complex and was found to have specification issues. Do not use `memory_order_consume` —
use `memory_order_acquire` instead. :::

## `compare_exchange` in Detail

The CAS operation is the foundation of most lock-free algorithms. `compare_exchange_weak` and
`compare_exchange_strong` differ in one key aspect [N4950 §31.7.2]:

- **`compare_exchange_strong`**: Fails **only** if the current value does not equal `expected`.
- **`compare_exchange_weak`**: May fail **spuriously** — returns `false` even when the value equals
  `expected`. This allows the implementation to use LL/SC (Load-Linked/Store-Conditional)
  instructions on architectures that support them (e.g., ARM, PowerPC).

```cpp
#include <atomic>
#include <iostream>
#include <thread>
#include <vector>

void cas_strong_vs_weak() {
    std::atomic<int> counter{0};
    constexpr int iterations = 100'000;

    auto worker_strong = [&] {
        for (int i = 0; i < iterations; ++i) {
            int expected = counter.load(std::memory_order_relaxed);
            while (!counter.compare_exchange_strong(
                expected,
                expected + 1,
                std::memory_order_relaxed,
                std::memory_order_relaxed)) {
                // expected is automatically updated to the current value on failure
            }
        }
    };

    auto worker_weak = [&] {
        for (int i = 0; i < iterations; ++i) {
            int expected = counter.load(std::memory_order_relaxed);
            while (!counter.compare_exchange_weak(
                expected,
                expected + 1,
                std::memory_order_relaxed,
                std::memory_order_relaxed)) {
                // May retry even if expected == counter (spurious failure)
                // But expected is still updated on real failures
            }
        }
    };

    // Both produce the same result; weak may loop more iterations
    // but can be more efficient on LL/SC architectures
}
```

The **success** and **failure** memory orders can differ. This is a critical optimization: on CAS
failure, you do not need acquire semantics (no data was published), so you can use a weaker order:

```cpp
// Optimal pattern: acquire on success, relaxed on failure
if (ptr.compare_exchange_weak(
        expected,
        desired,
        std::memory_order_acquire,    // success: need to see published data
        std::memory_order_relaxed))   // failure: no data to observe
{
    // Successfully replaced expected with desired
    // Acquire ensures we see all writes from the thread that released
}
```

## `std::atomic_wait` and `std::atomic_notify` (C++20)

C++20 introduced `wait()`, `notify_one()`, and `notify_all()` on `std::atomic` objects [N4950
§31.7.2]. These provide an efficient waiting mechanism that does not spin — the OS puts the thread
to sleep until notification arrives:

```cpp
#include <atomic>
#include <iostream>
#include <thread>
#include <vector>

void atomic_wait_notify_demo() {
    std::atomic<int> ready{0};

    std::jthread producer([&] {
        std::cout << "Producer: doing work...\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(200));
        ready.store(1, std::memory_order_release);
        ready.notify_one();  // Wake one waiting thread
    });

    std::jthread consumer([&] {
        int expected = 0;
        // Wait until ready != expected
        ready.wait(expected, std::memory_order_acquire);
        // After wake: ready.load(acquire) != 0, and all writes before the
        // producer's release store are visible
        std::cout << "Consumer: ready = " << ready.load() << "\n";
    });
}
```

:::info `atomic::wait()` is implemented using `futex(2)` on Linux, `WaitOnAddress` on Windows, and
`ulock` on macOS. These are kernel-assisted waiting mechanisms that avoid busy-waiting. The waiting
thread is descheduled until a notification arrives, consuming zero CPU cycles. This is fundamentally
more efficient than a spinlock for high-contention or long waits. :::

## `std::atomic&lt;void*&gt;` and Pointer Atomics

`std::atomic<T*>` supports pointer arithmetic with `fetch_add` and `fetch_sub`, incrementing or
decrementing the pointer by `n * sizeof(T)` [N4950 §31.7.2]:

```cpp
#include <atomic>
#include <cstddef>
#include <iostream>

void pointer_atomic_demo() {
    int buffer[10] = {};
    std::atomic<int*> ptr{buffer};

    // Advance pointer by 3 elements
    int* old = ptr.fetch_add(3, std::memory_order_relaxed);
    std::cout << "Old: " << (old - buffer) << ", New: " << (ptr.load() - buffer) << "\n";
    // Old: 0, New: 3

    // Retreat by 1
    ptr.fetch_sub(1, std::memory_order_relaxed);
    std::cout << "After sub: " << (ptr.load() - buffer) << "\n";
    // After sub: 2
}
```

## `std::atomic&lt;bool&gt;` as a Flag

`std::atomic&lt;bool&gt;` is the general-purpose atomic boolean. Unlike `std::atomic_flag`, it may
use a lock internally if the platform cannot implement it lock-free:

```cpp
#include <atomic>
#include <iostream>
#include <thread>

void atomic_bool_flag_demo() {
    std::atomic<bool> initialized{false};

    std::jthread initializer([&] {
        // Expensive initialization
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
        initialized.store(true, std::memory_order_release);
    });

    // Spin-wait (for demo; prefer atomic_wait in production)
    while (!initialized.load(std::memory_order_acquire)) {
        std::this_thread::yield();
    }
    std::cout << "Initialized!\n";
}
```

:::warning Use `std::atomic_flag` when you need the lock-free guarantee. `std::atomic&lt;bool&gt;`
is **not** guaranteed to be lock-free on all platforms, though it is on virtually all modern
hardware. Check `std::atomic&lt;bool&gt;::is_always_lock_free` at compile time. :::

## `std::atomic&lt;shared_ptr&gt;` and `std::atomic&lt;weak_ptr&gt;` (C++20)

C++20 provides atomic specializations for `std::shared_ptr` and `std::weak_ptr` [N4950 §31.7.1].
These are **not** lock-free — they use an internal mutex. They exist because reference counting
operations on `shared_ptr` are not atomic, and a data race on the control block is UB:

```cpp
#include <atomic>
#include <iostream>
#include <memory>
#include <thread>
#include <vector>

void shared_ptr_atomic_demo() {
    std::shared_ptr<int> global_ptr = std::make_shared<int>(42);

    std::vector<std::jthread> threads;

    for (int i = 0; i < 4; ++i) {
        threads.emplace_back([&] {
            // Read the shared_ptr atomically
            std::shared_ptr<int> local = std::atomic_load(&global_ptr);
            std::cout << "Thread sees: " << *local << "\n";

            // Update atomically
            auto new_ptr = std::make_shared<int>(*local + 1);
            std::atomic_store(&global_ptr, new_ptr);
        });
    }
}
```

:::warning `std::atomic_load(&shared_ptr)` and friends are standalone functions, not methods. They
operate on `std::shared_ptr*`. These functions use an internal spinlock or mutex, so they are
significantly slower than lock-free atomics. For high-performance shared access, consider
`std::atomic&lt;T*&gt;` with manual reference counting, or redesign to avoid shared mutable state.
:::

## Tagged Pointers for ABA Prevention

A practical approach to solving the ABA problem is to use a tagged pointer — combine the pointer
with a monotonically increasing counter in a single 64-bit atomic:

```cpp
#include <atomic>
#include <cstdint>
#include <iostream>
#include <new>

struct tagged_ptr {
    std::uintptr_t ptr : 48;
    std::uintptr_t tag : 16;
};

static_assert(sizeof(tagged_ptr) == sizeof(std::uintptr_t),
    "tagged_ptr must fit in a single machine word");

class tagged_stack {
    struct node {
        int data;
        node* next;
        explicit node(int v) : data(v), next(nullptr) {}
    };

    // Pack pointer and tag into a single 64-bit atomic
    std::atomic<std::uintptr_t> head_{0};

    static constexpr std::uintptr_t TAG_MASK = 0xFFFF'0000'0000'0000ULL;
    static constexpr std::uintptr_t PTR_MASK = 0x0000'FFFF'FFFF'FFFFULL;
    static constexpr std::uintptr_t TAG_INC  = 0x0001'0000'0000'0000ULL;

    static tagged_ptr unpack(std::uintptr_t val) {
        tagged_ptr tp;
        tp.ptr = val & PTR_MASK;
        tp.tag = val & TAG_MASK;
        return tp;
    }

    static std::uintptr_t pack(node* ptr, std::uintptr_t tag) {
        return reinterpret_cast<std::uintptr_t>(ptr) | tag;
    }

public:
    void push(int value) {
        node* new_node = new node(value);
        std::uintptr_t old_val = head_.load(std::memory_order_relaxed);
        tagged_ptr old = unpack(old_val);

        new_node->next = reinterpret_cast<node*>(old.ptr);

        tagged_ptr desired;
        desired.ptr = reinterpret_cast<std::uintptr_t>(new_node);
        desired.tag = old.tag + TAG_INC;

        while (!head_.compare_exchange_weak(
            old_val,
            pack(new_node, desired.tag),
            std::memory_order_release,
            std::memory_order_relaxed)) {
            old = unpack(old_val);
            new_node->next = reinterpret_cast<node*>(old.ptr);
            desired.tag = old.tag + TAG_INC;
        }
    }

    ~tagged_stack() {
        std::uintptr_t val = head_.load(std::memory_order_relaxed);
        tagged_ptr tp = unpack(val);
        node* current = reinterpret_cast<node*>(tp.ptr);
        while (current) {
            node* next = current->next;
            delete current;
            current = next;
        }
    }
};
```

:::warning The 48/16 split assumes x86-64's current 48-bit virtual address space. On AArch64, the
address space may use more bits in the future (LVA support). This tagged pointer approach is
platform-specific. For a portable solution, use a separate `std::atomic&lt;uint64_t&gt;` tag
alongside the pointer, or use hazard pointers. :::

## Common Pitfalls

1. **Using `memory_order_relaxed` where ordering is needed:** A relaxed store-release pair provides
   NO synchronization. If thread A stores data then sets a flag with `relaxed`, thread B may see the
   flag but not the data (due to CPU store buffering and compiler reordering). Use
   `release`/`acquire` pairs for flag-based synchronization.

2. **Forgetting that `compare_exchange_weak` can fail spuriously:** Always use
   `compare_exchange_weak` inside a loop. The spurious failure is not an error — it is an
   implementation artifact of LL/SC instructions on some architectures. Never assume a single
   `compare_exchange_weak` succeeds.

3. **`std::atomic&lt;T&gt;` is neither copyable nor movable:** This is intentional — copying an
   atomic would be a race condition (the copy would not be atomic with respect to other threads).
   Use `load()` and `store()` explicitly.

4. **Lock-free does not mean wait-free:** A lock-free algorithm guarantees system-wide progress (at
   least one thread advances), but individual threads may starve. A spinlock is lock-free but a
   thread waiting for the lock may spin forever under high contention.

5. **`std::atomic_flag` initialization:** Prior to C++20, `std::atomic_flag` had to be initialized
   with `ATOMIC_FLAG_INIT`. In C++20, it has a default constructor that initializes to clear. The
   `ATOMIC_FLAG_INIT` macro is deprecated in C++20.

6. **False sharing with adjacent atomics:** Two `std::atomic&lt;int&gt;` objects placed next to each
   other in memory share a cache line (typically 64 bytes). Contention on one causes cache
   invalidation for the other, even if they are logically independent. Pad atomics to cache line
   boundaries to prevent this.

:::

:::

:::

:::

:::

:::

:::
