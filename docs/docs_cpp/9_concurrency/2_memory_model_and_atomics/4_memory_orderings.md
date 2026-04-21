---
title: Memory Orderings
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: memory-orderings
---

# Memory Orderings: Relaxed, Acquire/Release, Sequentially Consistent

This section covers the `std::memory_order` enum values, relaxed ordering, acquire/release
semantics, sequentially consistent ordering, a producer-consumer example with acquire/release, a
cross-architecture comparison table, and fence operations.

## `memory_order` Enum

The `std::memory_order` enum [N4950 §31.7.5] defines six values:

| Value                  | Constant               | Ordering Guarantee                            |
| ---------------------- | ---------------------- | --------------------------------------------- |
| `memory_order_relaxed` | $\emptyset$            | No ordering                                   |
| `memory_order_consume` | dependency-ordered     | Data dependency on loaded value               |
| `memory_order_acquire` | acquire                | No reads/writes after can be reordered before |
| `memory_order_release` | release                | No reads/writes before can be reordered after |
| `memory_order_acq_rel` | acquire + release      | Both acquire and release                      |
| `memory_order_seq_cst` | sequential consistency | Total order across all seq_cst operations     |

### The Memory Model Hierarchy

Memory orderings form a strict hierarchy from weakest to strongest:

$$
\mathrm{relaxed} \subset \mathrm{consume} \subset \mathrm{acquire} \subset \mathrm{acq\_rel} \subset \mathrm{seq\_cst}
$$

$$
\mathrm{relaxed} \subset \mathrm{release} \subset \mathrm{acq\_rel} \subset \mathrm{seq\_cst}
$$

Using a stronger ordering than necessary is always safe but may incur performance penalties. Using a
weaker ordering than required results in undefined behavior.

## Relaxed Ordering

Relaxed atomics guarantee **atomicity only**: the operation is indivisible, but there are no
ordering constraints with respect to other memory operations.

$$\mathrm{relaxed: } \mathrm{atomicity} \wedge \neg\mathrm{ordering}$$

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

:::tip Relaxed ordering is the cheapest atomic operation on most architectures. On x86, `relaxed`
loads and stores compile to plain `mov` instructions. On ARM, `relaxed` loads use `ldar` and stores
use `stlr` (or `ldr`/`str` with `relaxed` semantics depending on the ARM version). :::

### When Relaxed Is Insufficient: The Message Passing Idiom

Relaxed atomics are insufficient when one thread writes data and another thread reads it based on a
flag. Without ordering constraints, the reader may see the flag set but read stale data:

```cpp
#include <atomic>
#include <iostream>

std::atomic<bool> flag{false};
int data = 0;

void writer() {
    data = 42;
    flag.store(true, std::memory_order_relaxed);
    // RISK: compiler or CPU may reorder the store to flag before the store to data
}

void reader() {
    while (!flag.load(std::memory_order_relaxed)) {}
    // RISK: data may still be 0 here — the store to data may not be visible
    std::cout << "data = " << data << "\n";
}
// This code has a data race on non-atomic 'data' and is undefined behavior.
```

## Acquire/Release Ordering

**Acquire** semantics [N4950 §31.7.5] prevent memory operations **after** the atomic operation from
being reordered **before** it:

$$\mathrm{acquire: } \forall\, w \mathrm{ after } \mathrm{load}: w \nrightarrow \mathrm{before load}$$

**Release** semantics prevent memory operations **before** the atomic operation from being reordered
**after** it:

$$\mathrm{release: } \forall\, r \mathrm{ before } \mathrm{store}: r \nrightarrow \mathrm{after store}$$

When a release store synchronizes-with an acquire load, a **synchronizes-with** relationship is
established [N4950 §31.7.5]:

$$\mathrm{store}_{\mathrm{release}}(x) \xrightarrow{\mathrm{sw}} \mathrm{load}_{\mathrm{acquire}}(x)$$

This creates a happens-before edge, and all memory operations sequenced-before the release store are
visible to all operations sequenced-after the acquire load.

### Correct Message Passing with Acquire/Release

```cpp
#include <atomic>
#include <iostream>
#include <thread>

std::atomic<bool> flag{false};
int data = 0;

void writer() {
    data = 42;  // Non-atomic write, sequenced before release
    flag.store(true, std::memory_order_release);
    // Release prevents reordering: data=42 is guaranteed visible before flag=true
}

void reader() {
    while (!flag.load(std::memory_order_acquire)) {}
    // Acquire prevents reordering: data read happens after flag read
    // Synchronizes-with the release store, so data=42 is visible
    std::cout << "data = " << data << "\n";
}

int main() {
    std::jthread t1(reader);
    writer();
    return 0;
}
// Output: data = 42 (guaranteed)
```

### The Synchronizes-With Relationship

The synchronizes-with relationship is the fundamental building block of the C++ memory model. It
establishes a happens-before edge between threads, which in turn guarantees that all memory
operations sequenced-before the release store are visible to operations sequenced-after the acquire
load.

Formally [N4950 §6.9.2.2]:

$$
A \xrightarrow{\mathrm{sb}} B \implies A \xrightarrow{\mathrm{hb}} B
$$

$$
A \xrightarrow{\mathrm{sw}} B \implies A \xrightarrow{\mathrm{hb}} B
$$

$$
A \xrightarrow{\mathrm{hb}} B \implies \mathrm{all side effects of } A \mathrm{ visible to } B
$$

## Sequentially Consistent Ordering

`memory_order_seq_cst` [N4950 §31.7.5] provides the strongest guarantee: there exists a total order
$\mathrm{S}$ over all `seq_cst` operations such that:

1. Every `seq_cst` operation in $\mathrm{S}$ is consistent with the happens-before order.
2. Every `seq_cst` load reads either the last preceding `seq_cst` store in $\mathrm{S}$ or a value
   written by a non-`seq_cst` store.

$$\forall\, a, b \in \mathrm{seq\_cst ops}: a \lt_{\mathrm{total}} b \mathrm{ or } b \lt_{\mathrm{total}} a$$

On x86, `seq_cst` stores require a `MFENCE` (or `LOCK XCHG`), and `seq_cst` loads require `LFENCE`
on some implementations. On ARM, `seq_cst` operations use `dmb ish` barriers.

:::info `memory_order_seq_cst` is the **default** for all atomic operations if no memory order is
specified. This ensures maximum safety but may not be necessary in all cases. For
performance-critical code, consider using weaker orderings where appropriate. :::

### The Store Buffering Problem (Why seq_cst Is Needed)

Even with acquire/release, the following scenario can produce unexpected results:

```cpp
#include <atomic>
#include <iostream>
#include <thread>

std::atomic<int> x{0};
std::atomic<int> y{0};
int r1 = 0;
int r2 = 0;

// Thread 1: stores x=1 (release), then loads y (acquire)
void thread1() {
    x.store(1, std::memory_order_release);
    r1 = y.load(std::memory_order_acquire);
}

// Thread 2: stores y=1 (release), then loads x (acquire)
void thread2() {
    y.store(1, std::memory_order_release);
    r2 = x.load(std::memory_order_acquire);
}

int main() {
    std::jthread t1(thread1);
    std::jthread t2(thread2);
    // With acquire/release, it is possible that r1==0 && r2==0
    // This is because acquire/release only creates ordering between
    // the store and load on the SAME atomic variable, not across variables.
    std::cout << "r1=" << r1 << ", r2=" << r2 << "\n";
    return 0;
}
// Possible output: r1=0, r2=0 (surprising but valid with acquire/release)
```

With `memory_order_seq_cst`, the outcome `r1==0 && r2==0` is impossible because the total order on
`seq_cst` operations prevents it. The seq_cst total order ensures that either Thread 1's store to
`x` happens before Thread 2's store to `y`, or vice versa, and in either case, the other thread's
load sees the store.

## Producer-Consumer with Acquire/Release

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

### Why `alignas(64)` Matters

The `alignas(64)` on the indices places them on separate cache lines (64 bytes is the typical cache
line size on x86). Without this, both indices might share a cache line, causing **false sharing**:
every write to `write_idx_` invalidates the cache line containing `read_idx_` (and vice versa),
forcing the other core to re-fetch from main memory. False sharing can reduce throughput by 5-10x on
multi-core systems.

## Memory Ordering Comparison Table

| Operation       | x86                  | ARMv8            | POWER8                    | Compiler Barrier Only |
| --------------- | -------------------- | ---------------- | ------------------------- | --------------------- |
| `relaxed` load  | `mov`                | `ldar`           | `ld`                      | No                    |
| `relaxed` store | `mov`                | `stlr`           | `st`                      | No                    |
| `acquire` load  | `mov`                | `ldar`           | `ld + sync`               | No                    |
| `release` store | `mov`                | `stlr`           | `lwsync + st`             | No                    |
| `seq_cst` load  | `mov`                | `ldar`           | `ld + sync`               | No                    |
| `seq_cst` store | `MFENCE` (or `XCHG`) | `stlr + dmb ish` | `lwsync + st + sync`      | No                    |
| `acq_rel` RMW   | `LOCK XADD`          | `ldaxr+stlxr`    | `sync + ldar + st + sync` | No                    |

:::tip On x86 (TSO model), acquire loads and release stores are "free" because the hardware already
provides those ordering guarantees. The only extra cost is for `seq_cst` stores (which require
`MFENCE`). On ARM and POWER, acquire and release require explicit barrier instructions, so the
performance difference between relaxed and acquire/release is significant on those architectures.
:::

### Hardware Memory Models

Understanding why the ordering costs differ requires understanding the underlying hardware memory
models:

**x86 (Total Store Order — TSO):**

- Loads are never reordered with other loads.
- Stores are never reordered with other stores.
- Loads are never reordered with older stores to the same address.
- **Stores may be reordered after loads** (this is the only relaxation vs. sequential consistency).
- Result: acquire loads and release stores are free; only `seq_cst` stores need `MFENCE`.

**ARMv8 (Weakly Ordered):**

- No reordering guarantees by default.
- All ordering must be explicitly requested via `LDAR`, `STLR`, or `DMB` instructions.
- `LDAR` provides load-acquire semantics.
- `STLR` provides store-release semantics.
- `DMB ISH` provides a full barrier.

**POWER8 (Relaxed):**

- Even weaker than ARMv8.
- Requires explicit `SYNC` (full barrier) and `LWSYNC` (lightweight sync) instructions.
- `LWSYNC` provides release semantics but is not a full acquire.
- A full acquire requires `SYNC`.

## Fence Operations

`std::atomic_thread_fence` [N4950 §31.7.8] inserts a memory fence without an associated atomic
operation:

- `std::atomic_thread_fence(std::memory_order_release)`: Prevents preceding memory operations from
  being reordered past the fence.
- `std::atomic_thread_fence(std::memory_order_acquire)`: Prevents subsequent memory operations from
  being reordered before the fence.
- `std::atomic_thread_fence(std::memory_order_seq_cst)`: Both acquire and release, plus participates
  in the total seq_cst order.

`std::atomic_signal_fence` [N4950 §31.7.8] is a lighter-weight fence that prevents reordering
between a signal handler and the code interrupted by the signal. It generates only a compiler
barrier (no hardware instructions).

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

### Fence Synchronizes-With Rules

A release fence `F` synchronizes-with an acquire fence `G` if:

1. There exists an atomic store `A` sequenced-before `F`.
2. There exists an atomic load `B` sequenced-after `G`.
3. `A` stores to the same atomic variable `X` that `B` loads from.
4. `B` reads the value written by `A` or a value written after `A` in the modification order of `X`.

This is more complex than direct acquire/release on atomic operations and is why fences are
discouraged in favor of direct memory ordering on atomic loads and stores.

:::info Fences are rarely needed in practice. Prefer acquire/release semantics on atomic loads and
stores directly, as they are more readable and equally efficient. Fences are primarily useful when
interfacing with hardware or when the atomic operation itself is performed by non-standard means.
:::

## `memory_order_consume`: The Problematic Ordering

`memory_order_consume` was intended to optimize cases where data dependency ordering is sufficient
(carries-a-dependency-to). However, it is effectively deprecated because no major compiler
implements it correctly — they all promote it to `memory_order_acquire` to avoid the complexity of
tracking data dependencies through the compiler's intermediate representation.

```cpp
#include <atomic>
#include <iostream>

struct Node {
    int data;
    std::atomic<Node*> next{nullptr};
};

std::atomic<Node*> head{nullptr};

void producer() {
    static Node n3{30, nullptr};
    static Node n2{20, &n3};
    static Node n1{10, &n2};
    head.store(&n1, std::memory_order_release);
}

void consumer() {
    Node* p = head.load(std::memory_order_consume);
    // In theory, consume only guarantees that p->next and p->data
    // are visible (data dependency). Other memory is not guaranteed.
    // In practice, compilers treat this as acquire.
    if (p) {
        std::cout << p->data << "\n";
        if (p->next) {
            std::cout << p->next->data << "\n";
        }
    }
}

int main() {
    producer();
    consumer();
    return 0;
}
```

The C++26 proposal P0371R3 formalizes the deprecation by recommending that compilers treat
`memory_order_consume` as `memory_order_acquire`.

## Common Pitfalls

### Pitfall 1: Mixing Memory Orders on the Same Variable

Using different memory orders on the same atomic variable for load and store is valid but requires
careful reasoning. A release store paired with a relaxed load does NOT establish synchronizes-with:

```cpp
// WRONG: relaxed load does not synchronize with release store
// producer: data = 42; flag.store(true, memory_order_release);
// consumer: while (!flag.load(memory_order_relaxed)); cout << data;
// UB: no synchronizes-with relationship, data may be stale
```

### Pitfall 2: Forgetting That Non-Atomic Accesses Are Still UB

Even with correct memory ordering on the flag, non-atomic accesses to shared data without a
happens-before relationship constitute data races and are undefined behavior. Acquire/release must
be used on both the flag AND the data must be sequenced-before the release / after the acquire.

### Pitfall 3: seq_cst Does Not Prevent All Surprises

`memory_order_seq_cst` prevents the store-buffering problem but does not prevent other concurrency
issues like lost updates. A `seq_cst` `fetch_add` is still needed for atomic increments; a plain
`seq_cst` load-modify-store sequence is not atomic:

```cpp
// WRONG: load-modify-store is not atomic even with seq_cst
// int old = counter.load(memory_order_seq_cst);
// counter.store(old + 1, memory_order_seq_cst);
// CORRECT: atomic RMW
// counter.fetch_add(1, memory_order_seq_cst);
```

:::

:::
