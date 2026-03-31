---
title: The Memory Model and Atomics
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: memory-model-and-atomics
---

# The Memory Model and Atomics

The C++ memory model [N4950 §6.9] defines how threads interact through shared memory. It specifies the guarantees the compiler and hardware must provide, and it is the foundation for understanding atomics, data races, and correct concurrent programs.

## 1. Instruction Reordering and Happens-Before

### The As-If Rule and Compiler Reordering

The **as-if rule** [N4950 §6.9.2.1] allows the compiler to reorder any operations whose reordering does not change the observable behavior of a single-threaded program. In a multi-threaded context, this means:

> "The implementation is free to reorder operations unless an ordering constraint is imposed by the memory model."

Concretely, the compiler may reorder:

1. **Independent loads**: Two loads from different addresses may be reordered freely.
2. **Store-buffering**: A store followed by a load to a different address may be reordered so the load executes first.
3. **Common subexpression elimination**: A load may be hoisted out of a loop, potentially reading stale data.

### Data Dependency and Control Dependency Ordering

A **data dependency** exists when the address or value of one memory access depends on the value read by a prior memory access:

$$\text{data dependency: } a[i] \to b[a[i]]$$

A **control dependency** exists when whether a memory access executes depends on the value read by a prior access:

$$\text{control dependency: } \text{if } (x) \{ y = 1; \}$$

:::warning
Control dependencies do **not** prevent reordering on all architectures. On x86, control dependencies provide ordering, but on ARM and POWER, the processor may speculatively execute the dependent load before the controlling branch is resolved. Always use explicit memory ordering (acquire/release) rather than relying on control dependencies.
:::

### Happens-Before Relationship

The **happens-before** relation [N4950 §6.9.4.1] is a strict partial order ($\prec$) on evaluations within a single execution. If evaluation $A$ happens-before evaluation $B$, then $B$ observes all side effects of $A$.

The happens-before relation is the **transitive closure** of:

1. **Sequenced-before** ($\xrightarrow{\text{seq}}$): Within a single thread, operations are ordered by the abstract machine.
2. **Synchronizes-with**: A release operation on an atomic object $M$ in thread $A$ **synchronizes-with** an acquire operation on $M$ in thread $B$ if $B$ reads a value written (or released) by $A$.
3. **Sequenced-before is transitive**: If $A \xrightarrow{\text{seq}} B$ and $B \xrightarrow{\text{seq}} C$, then $A \xrightarrow{\text{seq}} C$.

$$A \prec B \iff \exists\, C_1, C_2, \ldots, C_n : A \xrightarrow{\text{seq}} C_1 \xrightarrow{\text{sw}} C_2 \xrightarrow{\text{seq}} \ldots \xrightarrow{\text{sw}} C_n \xrightarrow{\text{seq}} B$$

### Synchronizes-With Relationship

A release store to an atomic variable in thread 1 **synchronizes-with** an acquire load of that same variable in thread 2 if the load reads the value stored (or a value written later by a release operation) [N4950 §31.7.5]:

$$\text{store}_{\text{release}}(x, v) \xrightarrow{\text{sw}} \text{load}_{\text{acquire}}(x, v)$$

The synchronizes-with relationship creates a **happens-before** edge between the release store and the acquire load, and by transitivity, all operations sequenced-before the release store happen-before all operations sequenced-after the acquire load.

### Sequential Consistency vs Relaxed Consistency

**Sequential consistency** (SC) [N4950 §31.7.5] is the strongest memory ordering. Under SC, the result of any execution is as if all operations of all threads were executed in some total order consistent with the program order of each individual thread.

**Relaxed consistency** allows more reorderings and is weaker than SC. Under relaxed ordering, there is no inter-thread ordering guarantee unless explicitly established by acquire/release or seq_cst operations.

| Property                           | Sequentially Consistent | Relaxed |
| ---------------------------------- | ----------------------- | ------- |
| Single total order                 | Yes                     | No      |
| Compiler reordering across atomics | Prevented               | Allowed |
| Hardware reordering across atomics | Prevented (fences used) | Allowed |
| Performance cost                   | Highest                 | Lowest  |

### Demonstrating Reordering Effects

:::warning
The following program demonstrates how the absence of proper memory ordering can lead to unexpected results. It contains intentional data races and is for educational purposes only. Do not write code like this in production.
:::

```cpp
#include <iostream>
#include <thread>
#include <atomic>

int data = 0;
bool ready = false;

void producer() {
    data = 42;
    ready = true;
}

void consumer() {
    while (!ready) {
        // spin
    }
    std::cout << "data = " << data << "\n";
}

int main() {
    std::thread t1(producer);
    std::thread t2(consumer);
    t1.join();
    t2.join();
    return 0;
}
```

:::warning
This program may print `data = 0` on some architectures (notably ARM and POWER). The compiler may reorder `data = 42` after `ready = true`, or the hardware may reorder the stores due to store buffering. On x86, stores are not reordered with other stores (TSO), so this particular example would likely work on x86 but fail on ARM. This is a common source of subtle cross-platform bugs.
:::

The fix is to use `std::atomic<bool>` with release/acquire ordering:

```cpp
#include <iostream>
#include <thread>
#include <atomic>

int data = 0;
std::atomic<bool> ready{false};

void producer() {
    data = 42;
    ready.store(true, std::memory_order_release);
}

void consumer() {
    while (!ready.load(std::memory_order_acquire)) {
        // spin
    }
    std::cout << "data = " << data << "\n";
}

int main() {
    std::thread t1(producer);
    std::thread t2(consumer);
    t1.join();
    t2.join();
    return 0;
}
```

Now the release store in the producer synchronizes-with the acquire load in the consumer, guaranteeing that `data = 42` is visible when `ready` is observed as `true`.

---

## 2. Cache Coherency (MESI) and False Sharing

### MESI Protocol Overview

The **MESI protocol** is a widely used cache coherence protocol that maintains consistency across CPU caches. Each cache line is in one of four states:

| State             | Description                                                     | Can Read? | Can Write?                                   |
| ----------------- | --------------------------------------------------------------- | --------- | -------------------------------------------- |
| **M** (Modified)  | This cache has the only valid copy; it differs from main memory | Yes       | Yes                                          |
| **E** (Exclusive) | This cache has the only valid copy; it matches main memory      | Yes       | Yes (transitions to M)                       |
| **S** (Shared)    | Multiple caches have valid copies matching main memory          | Yes       | No (must request exclusive)                  |
| **I** (Invalid)   | This cache line is not valid                                    | No        | No (must request from other cache or memory) |

State transitions:

$$\text{E} \xrightarrow{\text{write}} \text{M} \quad \text{S} \xrightarrow{\text{write request}} \text{RFO} \to \text{I} \to \text{M}$$

$$\text{M} \xrightarrow{\text{snoop read}} \text{write-back} \to \text{S} \quad \text{I} \xrightarrow{\text{read miss}} \text{load} \to \text{S or E}$$

### Cache Line Ownership and Coherence Traffic

When a CPU core writes to a cache line in the **Shared** state, it must issue a **Read-For-Ownership** (RFO) request on the bus. This:

1. **Invalidates** all other copies (transitioning them to **I** state).
2. **Waits** for acknowledgment from all other cores that hold the line.
3. Transitions the requesting core's copy to **Modified** state.

This invalidation traffic is the primary source of performance degradation in multi-threaded programs with frequent writes to shared data.

### False Sharing

**False sharing** occurs when two threads write to different variables that happen to reside on the same cache line (typically 64 bytes). Even though the variables are logically independent, the hardware treats them as a single unit for coherence purposes.

$$\text{False Sharing: } \text{var}_1 \in \text{line}_L \wedge \text{var}_2 \in \text{line}_L \wedge \text{thread}_1 \text{ writes } \text{var}_1 \wedge \text{thread}_2 \text{ writes } \text{var}_2$$

Each write by one thread invalidates the cache line for the other thread, causing repeated cache misses and coherence traffic. Performance can degrade by orders of magnitude compared to the uncontended case.

### Padding and Alignment to Prevent False Sharing

The standard technique is to pad variables so that each one occupies its own cache line using `alignas`:

```cpp
#include <iostream>
#include <thread>
#include <vector>
#include <chrono>
#include <numeric>
#include <algorithm>

struct padded_counter {
    alignas(64) int value = 0;
};

struct unpadded_counter {
    int value = 0;
};

void bench_unpadded(int num_threads, int iterations) {
    std::vector<unpadded_counter> counters(num_threads);
    std::vector<std::jthread> threads;

    auto start = std::chrono::high_resolution_clock::now();

    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back([&counters, i, iterations] {
            for (int j = 0; j < iterations; ++j) {
                counters[i].value++;
            }
        });
    }

    auto end = std::chrono::high_resolution_clock::now();
    auto elapsed = std::chrono::duration_cast<std::chrono::microseconds>(end - start);

    int total = 0;
    for (const auto& c : counters) total += c.value;
    std::cout << "Unpadded: " << elapsed.count() << " us, total=" << total << "\n";
}

void bench_padded(int num_threads, int iterations) {
    std::vector<padded_counter> counters(num_threads);
    std::vector<std::jthread> threads;

    auto start = std::chrono::high_resolution_clock::now();

    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back([&counters, i, iterations] {
            for (int j = 0; j < iterations; ++j) {
                counters[i].value++;
            }
        });
    }

    auto end = std::chrono::high_resolution_clock::now();
    auto elapsed = std::chrono::duration_cast<std::chrono::microseconds>(end - start);

    int total = 0;
    for (const auto& c : counters) total += c.value;
    std::cout << "Padded:   " << elapsed.count() << " us, total=" << total << "\n";
}

int main() {
    constexpr int num_threads = 8;
    constexpr int iterations = 10'000'000;

    std::cout << "Running with " << num_threads << " threads, "
              << iterations << " iterations each\n";

    bench_unpadded(num_threads, iterations);
    bench_padded(num_threads, iterations);

    std::cout << "\nsizeof(padded_counter) = " << sizeof(padded_counter) << "\n";
    std::cout << "sizeof(unpadded_counter) = " << sizeof(unpadded_counter) << "\n";
    return 0;
}
```

:::tip
On typical x86-64 systems, `sizeof(padded_counter)` will be 64 (one cache line), while `sizeof(unpadded_counter)` will be 4 (one int). With 8 threads, the unpadded counters occupy only 32 bytes (fitting in a single cache line), while the padded counters occupy 512 bytes (8 cache lines). The padded version will typically be significantly faster due to the elimination of false sharing.
:::

### Performance Implications of Cache Line Size

The typical cache line size on modern x86 processors is 64 bytes. Key implications:

1. **Adjacent data** within 64 bytes shares a cache line and may suffer false sharing.
2. **Prefetching** operates at cache line granularity: reading one byte pulls in 64 bytes.
3. **Alignment** to cache line boundaries can improve or degrade performance depending on access patterns.

---

## 3. Atomic Operations and Lock-Free Programming

### `std::atomic<T>`

`std::atomic<T>` [N4950 §31.7] is a template class that provides atomic access to a value of type `T`. All operations on `std::atomic` are atomic: they are indivisible from the perspective of all threads.

The standard specifies which types `T` may be [N4950 §31.7.1]:

- **Scalar types**: `bool`, `char`, `int`, `float`, `pointer types`, etc.
- **Trivially copyable types**: Any trivially copyable type (C++17 and later), though not all operations may be available.

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

### `std::atomic_ref<T>` (C++26)

`std::atomic_ref<T>` [NPPES p2308] provides atomic access to a non-atomic object through a reference wrapper. This is useful when you need atomic operations on data that was not declared as `std::atomic`:

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

:::warning
`std::atomic_ref` requires that the referenced object's alignment is at least `alignof(std::atomic<T>)`. For many types this is the same as `alignof(T)`, but for types smaller than the platform's native word size, `alignof(std::atomic<T>)` may be larger.
:::

### Atomic Operations

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

### `std::atomic_flag`

`std::atomic_flag` [N4950 §31.7] is the simplest atomic type: a boolean flag guaranteed to be lock-free. It provides only two operations:

- `test_and_set(order)`: Atomically sets the flag to `true` and returns the previous value.
- `clear(order)`: Atomically sets the flag to `false`.

### Lock-Free vs Wait-Free vs Obstruction-Free

| Guarantee            | Definition                                                          | Blocking?        |
| -------------------- | ------------------------------------------------------------------- | ---------------- |
| **Obstruction-free** | Progress guaranteed if all other threads are paused                 | No (if alone)    |
| **Lock-free**        | At least one thread makes progress within a bounded number of steps | No (system-wide) |
| **Wait-free**        | Every thread makes progress within a bounded number of steps        | No (per-thread)  |

These form a hierarchy: wait-free $\implies$ lock-free $\implies$ obstruction-free.

You can query the progress guarantee using `std::atomic<T>::is_always_lock_free` (compile-time) [N4950 §31.7.7] and `a.is_lock_free()` (runtime) [N4950 §31.7.2]:

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

### ABA Problem and CAS

The **ABA problem** occurs in lock-free algorithms when a value changes from $A$ to $B$ and back to $A$ between a thread's load and its CAS. The CAS succeeds because the value is still $A$, but the intermediate change may have invalidated invariants:

$$\text{Load}(A) \to \text{Other thread: } A \to B \to A \to \text{CAS}(A, C) \text{ succeeds — incorrectly}$$

`compare_exchange_weak` may fail spuriously (return `false` even when the expected value matches), which can help in some ABA scenarios but does not fully solve the problem. Full solutions include:

1. **Tagged pointers**: Append a monotonically increasing counter to the value.
2. **Hazard pointers**: Track which objects are currently being accessed.
3. **Epoch-based reclamation**: Defer reclamation to epoch boundaries.

### Lock-Free Stack with `compare_exchange_weak`

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

:::warning
This lock-free stack has a known ABA problem in `pop()`: if between the `load` and the `compare_exchange_weak`, another thread pops `old_head`, pushes new nodes, and then pushes `old_head` back, the CAS will succeed but `next` will be stale. In production code, use hazard pointers or tagged pointers to prevent ABA.
:::

### Spinlock Using `std::atomic_flag`

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

:::info
A spinlock is lock-free by the above definition: at least one thread (the one currently holding the lock) makes progress. However, spinlocks waste CPU cycles while spinning. They are appropriate only when the critical section is very short and contention is expected to be low. For longer critical sections, prefer `std::mutex` which blocks the thread and yields the CPU.
:::

---

## 4. Memory Orderings: Relaxed, Acquire/Release, Sequentially Consistent

### `memory_order` Enum

The `std::memory_order` enum [N4950 §31.7.5] defines six values:

| Value                  | Constant               | Ordering Guarantee                            |
| ---------------------- | ---------------------- | --------------------------------------------- |
| `memory_order_relaxed` | $\emptyset$            | No ordering                                   |
| `memory_order_consume` | dependency-ordered     | Data dependency on loaded value               |
| `memory_order_acquire` | acquire                | No reads/writes after can be reordered before |
| `memory_order_release` | release                | No reads/writes before can be reordered after |
| `memory_order_acq_rel` | acquire + release      | Both acquire and release                      |
| `memory_order_seq_cst` | sequential consistency | Total order across all seq_cst operations     |

### Relaxed Ordering

Relaxed atomics guarantee **atomicity only**: the operation is indivisible, but there are no ordering constraints with respect to other memory operations.

$$\text{relaxed: } \text{atomicity} \wedge \neg\text{ordering}$$

Use cases:

- **Counters and statistics** where the exact order of increments doesn't matter.
- **Progress indicators** where approximate values are acceptable.

```cpp
#include <iostream>
#include <atomic>
#include <thread>
#include <vector>

int main() {
    std::atomic<int> relaxed_counter{0};

    std::vector<std::jthread> threads;
    for (int i = 0; i < 4; ++i) {
        threads.emplace_back([&relaxed_counter] {
            for (int j = 0; j < 1'000'000; ++j) {
                relaxed_counter.fetch_add(1, std::memory_order_relaxed);
            }
        });
    }

    std::cout << "Relaxed counter: " << relaxed_counter.load(std::memory_order_relaxed) << "\n";
    return 0;
}
```

:::tip
Relaxed ordering is the cheapest atomic operation on most architectures. On x86, `relaxed` loads and stores compile to plain `mov` instructions. On ARM, `relaxed` loads use `ldar` and stores use `stlr` (or `ldr`/`str` with `relaxed` semantics depending on the ARM version).
:::

### Acquire/Release Ordering

**Acquire** semantics [N4950 §31.7.5] prevent memory operations **after** the atomic operation from being reordered **before** it:

$$\text{acquire: } \forall\, w \text{ after } \text{load}: w \nrightarrow \text{before load}$$

**Release** semantics prevent memory operations **before** the atomic operation from being reordered **after** it:

$$\text{release: } \forall\, r \text{ before } \text{store}: r \nrightarrow \text{after store}$$

When a release store synchronizes-with an acquire load, a **synchronizes-with** relationship is established [N4950 §31.7.5]:

$$\text{store}_{\text{release}}(x) \xrightarrow{\text{sw}} \text{load}_{\text{acquire}}(x)$$

This creates a happens-before edge, and all memory operations sequenced-before the release store are visible to all operations sequenced-after the acquire load.

### Sequentially Consistent Ordering

`memory_order_seq_cst` [N4950 §31.7.5] provides the strongest guarantee: there exists a total order $\text{S}$ over all `seq_cst` operations such that:

1. Every `seq_cst` operation in $\text{S}$ is consistent with the happens-before order.
2. Every `seq_cst` load reads either the last preceding `seq_cst` store in $\text{S}$ or a value written by a non-`seq_cst` store.

$$\forall\, a, b \in \text{seq\_cst ops}: a <_{\text{total}} b \text{ or } b <_{\text{total}} a$$

On x86, `seq_cst` stores require a `MFENCE` (or `LOCK XCHG`), and `seq_cst` loads require `LFENCE` on some implementations. On ARM, `seq_cst` operations use `dmb ish` barriers.

:::info
`memory_order_seq_cst` is the **default** for all atomic operations if no memory order is specified. This ensures maximum safety but may not be necessary in all cases. For performance-critical code, consider using weaker orderings where appropriate.
:::

### Producer-Consumer with Acquire/Release

```cpp
#include <iostream>
#include <atomic>
#include <thread>
#include <vector>
#include <chrono>

struct message {
    int payload;
};

constexpr int BUFFER_SIZE = 16;

class spsc_queue {
    alignas(64) std::atomic<int> write_idx_{0};
    alignas(64) std::atomic<int> read_idx_{0};
    message buffer_[BUFFER_SIZE];

public:
    bool try_push(message msg) {
        int write = write_idx_.load(std::memory_order_relaxed);
        int next = (write + 1) % BUFFER_SIZE;
        int read = read_idx_.load(std::memory_order_acquire);

        if (next == read) {
            return false;
        }

        buffer_[write] = std::move(msg);
        write_idx_.store(next, std::memory_order_release);
        return true;
    }

    bool try_pop(message& msg) {
        int read = read_idx_.load(std::memory_order_relaxed);
        int write = write_idx_.load(std::memory_order_acquire);

        if (read == write) {
            return false;
        }

        msg = std::move(buffer_[read]);
        read_idx_.store((read + 1) % BUFFER_SIZE, std::memory_order_release);
        return true;
    }
};

int main() {
    spsc_queue queue;

    std::jthread producer([&queue] {
        for (int i = 0; i < 100; ++i) {
            while (!queue.try_push({i})) {
                std::this_thread::yield();
            }
        }
    });

    std::jthread consumer([&queue](std::stop_token stoken) {
        int received = 0;
        while (received < 100 && !stoken.stop_requested()) {
            message msg;
            if (queue.try_pop(msg)) {
                if (msg.payload != received) {
                    std::cout << "ERROR: expected " << received
                              << " got " << msg.payload << "\n";
                }
                ++received;
            }
        }
        std::cout << "Received " << received << " messages\n";
    });

    return 0;
}
```

### Memory Ordering Comparison Table

| Operation       | x86                  | ARMv8            | POWER8                    | Compiler Barrier Only |
| --------------- | -------------------- | ---------------- | ------------------------- | --------------------- |
| `relaxed` load  | `mov`                | `ldar`           | `ld`                      | No                    |
| `relaxed` store | `mov`                | `stlr`           | `st`                      | No                    |
| `acquire` load  | `mov`                | `ldar`           | `ld + sync`               | No                    |
| `release` store | `mov`                | `stlr`           | `lwsync + st`             | No                    |
| `seq_cst` load  | `mov`                | `ldar`           | `ld + sync`               | No                    |
| `seq_cst` store | `MFENCE` (or `XCHG`) | `stlr + dmb ish` | `lwsync + st + sync`      | No                    |
| `acq_rel` RMW   | `LOCK XADD`          | `ldaxr+stlxr`    | `sync + ldar + st + sync` | No                    |

:::tip
On x86 (TSO model), acquire loads and release stores are "free" because the hardware already provides those ordering guarantees. The only extra cost is for `seq_cst` stores (which require `MFENCE`). On ARM and POWER, acquire and release require explicit barrier instructions, so the performance difference between relaxed and acquire/release is significant on those architectures.
:::

### Fence Operations

`std::atomic_thread_fence` [N4950 §31.7.8] inserts a memory fence without an associated atomic operation:

- `std::atomic_thread_fence(std::memory_order_release)`: Prevents preceding memory operations from being reordered past the fence.
- `std::atomic_thread_fence(std::memory_order_acquire)`: Prevents subsequent memory operations from being reordered before the fence.
- `std::atomic_thread_fence(std::memory_order_seq_cst)`: Both acquire and release, plus participates in the total seq_cst order.

`std::atomic_signal_fence` [N4950 §31.7.8] is a lighter-weight fence that prevents reordering between a signal handler and the code interrupted by the signal. It generates only a compiler barrier (no hardware instructions).

```cpp
#include <atomic>
#include <iostream>

int main() {
    int data = 0;
    std::atomic<bool> flag{false};

    // Producer side (in another thread):
    // data = 42;
    // std::atomic_thread_fence(std::memory_order_release);
    // flag.store(true, std::memory_order_relaxed);

    // Consumer side:
    if (flag.load(std::memory_order_relaxed)) {
        std::atomic_thread_fence(std::memory_order_acquire);
        std::cout << "data = " << data << "\n";
    }
    return 0;
}
```

:::info
Fences are rarely needed in practice. Prefer acquire/release semantics on atomic loads and stores directly, as they are more readable and equally efficient. Fences are primarily useful when interfacing with hardware or when the atomic operation itself is performed by non-standard means.
:::

---

## 5. Compare-and-Swap (CAS) Loops

### CAS Loop Pattern

The compare-and-swap (CAS) loop is the fundamental building block of lock-free algorithms. The pattern is:

$$\text{loop: } \text{old} = \text{load}(x); \quad \text{new} = f(\text{old}); \quad \text{if CAS}(x, \text{old}, \text{new}) \text{ then break}$$

In C++, this translates to:

```cpp
T expected = atomic_var.load(order);
T desired = compute(expected);
while (!atomic_var.compare_exchange_weak(expected, desired, order_success, order_failure)) {
    desired = compute(expected); // recompute based on updated expected
}
```

### `compare_exchange_weak` vs `compare_exchange_strong`

| Property         | `compare_exchange_weak`               | `compare_exchange_strong` |
| ---------------- | ------------------------------------- | ------------------------- |
| Spurious failure | Possible                              | Never                     |
| Performance      | May be faster on some architectures   | May be slower             |
| Use case         | CAS loops (failure is retried anyway) | Single-attempt operations |

The `compare_exchange` functions have the following signature [N4950 §31.7.2]:

```cpp
bool compare_exchange_weak(T& expected, T desired,
    memory_order success, memory_order failure);

bool compare_exchange_strong(T& expected, T desired,
    memory_order success, memory_order failure);
```

On failure, `expected` is updated to the current value of the atomic variable, allowing the caller to recompute `desired` and retry.

:::tip
Use `compare_exchange_weak` inside CAS loops because spurious failures are harmless (the loop retries). Use `compare_exchange_strong` when you need to know whether the CAS actually failed due to a value mismatch (e.g., when you want to take a different action on real failure vs spurious failure).
:::

### When Weak CAS Is Preferable

On some architectures (notably ARMv8 using LL/SC — Load-Linked/Store-Conditional), `compare_exchange_weak` maps directly to the hardware instruction and can be implemented without a retry loop in the runtime library. `compare_exchange_strong` may require the implementation to insert a retry loop, making it slightly more expensive.

For CAS loops that already retry on failure, `compare_exchange_weak` avoids double-retrying:

```cpp
// Prefer this with weak CAS:
while (!atomic_var.compare_exchange_weak(expected, desired,
    std::memory_order_release, std::memory_order_relaxed)) {
    desired = compute(expected);
}

// Strong CAS would retry internally on spurious failure, then the loop
// retries again — wasted work.
```

### Linearizability of CAS-Based Data Structures

A concurrent data structure is **linearizable** [Herlihy & Wing, 1990] if every operation appears to take effect instantaneously at some point between its invocation and its response. CAS-based data structures can achieve linearizability because CAS is itself a linearizable operation:

$$\text{CAS}(x, \text{old}, \text{new}) \text{ appears to execute atomically at the point where the store conditional succeeds}$$

This means that any data structure built entirely from CAS operations is linearizable, provided the CAS loop correctly handles the expected/desired values.

### Lock-Free Reference Counting with CAS

```cpp
#include <iostream>
#include <atomic>
#include <thread>
#include <vector>
#include <cassert>

class ref_counted {
    struct control_block {
        std::atomic<int> strong_count;
        std::atomic<int> weak_count;
        int value;

        explicit control_block(int v)
            : strong_count(1), weak_count(0), value(v) {}
    };

    control_block* ctrl_;

public:
    explicit ref_counted(int value)
        : ctrl_(new control_block(value)) {}

    ref_counted(const ref_counted& other)
        : ctrl_(other.ctrl_)
    {
        ctrl_->strong_count.fetch_add(1, std::memory_order_relaxed);
    }

    ref_counted& operator=(const ref_counted& other) {
        if (this != &other) {
            release();
            ctrl_ = other.ctrl_;
            ctrl_->strong_count.fetch_add(1, std::memory_order_relaxed);
        }
        return *this;
    }

    ~ref_counted() {
        release();
    }

    int get() const {
        return ctrl_->value;
    }

private:
    void release() {
        if (ctrl_->strong_count.fetch_sub(1, std::memory_order_acq_rel) == 1) {
            // Last strong reference: destroy the object
            int old_weak = ctrl_->weak_count.load(std::memory_order_acquire);
            if (old_weak == 0) {
                delete ctrl_;
            } else {
                // Weak references exist; transfer to weak count
                ctrl_->weak_count.fetch_sub(1, std::memory_order_release);
            }
        }
    }
};

void concurrent_refcount_test() {
    constexpr int num_threads = 8;
    constexpr int copies_per_thread = 1000;

    ref_counted original(42);
    std::vector<std::jthread> threads;

    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back([&original, copies_per_thread] {
            std::vector<ref_counted> copies;
            copies.reserve(copies_per_thread);
            for (int j = 0; j < copies_per_thread; ++j) {
                copies.push_back(original);
                assert(copies.back().get() == 42);
            }
            // copies go out of scope, decrementing ref counts
        });
    }

    std::cout << "Final value: " << original.get() << "\n";
    std::cout << "Test passed: no crashes or assertion failures\n";
}

int main() {
    concurrent_refcount_test();
    return 0;
}
```

:::info
This reference counting example uses `fetch_sub` with `memory_order_acq_rel` for the release operation. The acquire semantics ensure that all accesses to the object (sequenced-before the release) are visible to the thread that performs the destruction. The release semantics ensure that the destruction itself is visible to other threads. The `fetch_sub` return value is checked against 1 (not 0) because `fetch_sub` returns the **old** value [N4950 §31.7.2].
:::

### CAS Loop Idioms Summary

| Pattern                    | Description                            | Use Case                       |
| -------------------------- | -------------------------------------- | ------------------------------ |
| **Read-modify-write**      | Load, compute, CAS                     | Counter increment, flag toggle |
| **Insert into list**       | Load head, set new->next, CAS head     | Lock-free stack push           |
| **Remove from list**       | Load head, read next, CAS head to next | Lock-free stack pop            |
| **Update with validation** | Load, validate invariants, CAS         | Lock-free queue (ABA-safe)     |

:::tip
When writing CAS loops, always update `desired` based on the new `expected` value after a failed CAS. The `compare_exchange_weak` function automatically updates `expected` to the current value on failure, so you can use it directly in the next iteration's computation.
:::
