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

## Relaxed Ordering

Relaxed atomics guarantee **atomicity only**: the operation is indivisible, but there are no
ordering constraints with respect to other memory operations.

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

:::tip Relaxed ordering is the cheapest atomic operation on most architectures. On x86, `relaxed`
loads and stores compile to plain `mov` instructions. On ARM, `relaxed` loads use `ldar` and stores
use `stlr` (or `ldr`/`str` with `relaxed` semantics depending on the ARM version). :::

## Acquire/Release Ordering

**Acquire** semantics [N4950 §31.7.5] prevent memory operations **after** the atomic operation from
being reordered **before** it:

$$\text{acquire: } \forall\, w \text{ after } \text{load}: w \nrightarrow \text{before load}$$

**Release** semantics prevent memory operations **before** the atomic operation from being reordered
**after** it:

$$\text{release: } \forall\, r \text{ before } \text{store}: r \nrightarrow \text{after store}$$

When a release store synchronizes-with an acquire load, a **synchronizes-with** relationship is
established [N4950 §31.7.5]:

$$\text{store}_{\text{release}}(x) \xrightarrow{\text{sw}} \text{load}_{\text{acquire}}(x)$$

This creates a happens-before edge, and all memory operations sequenced-before the release store are
visible to all operations sequenced-after the acquire load.

## Sequentially Consistent Ordering

`memory_order_seq_cst` [N4950 §31.7.5] provides the strongest guarantee: there exists a total order
$\text{S}$ over all `seq_cst` operations such that:

1. Every `seq_cst` operation in $\text{S}$ is consistent with the happens-before order.
2. Every `seq_cst` load reads either the last preceding `seq_cst` store in $\text{S}$ or a value
   written by a non-`seq_cst` store.

$$\forall\, a, b \in \text{seq\_cst ops}: a \lt_{\text{total}} b \text{ or } b \lt_{\text{total}} a$$

On x86, `seq_cst` stores require a `MFENCE` (or `LOCK XCHG`), and `seq_cst` loads require `LFENCE`
on some implementations. On ARM, `seq_cst` operations use `dmb ish` barriers.

:::info `memory_order_seq_cst` is the **default** for all atomic operations if no memory order is
specified. This ensures maximum safety but may not be necessary in all cases. For
performance-critical code, consider using weaker orderings where appropriate. :::

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

:::info Fences are rarely needed in practice. Prefer acquire/release semantics on atomic loads and
stores directly, as they are more readable and equally efficient. Fences are primarily useful when
interfacing with hardware or when the atomic operation itself is performed by non-standard means.
:::

## See Also

- [Instruction Reordering and Happens-Before](./1_instruction_reordering.md)
- [Atomic Operations and Lock-Free Programming](./3_atomic_operations.md)
- [Compare-and-Swap (CAS) Loops](./5_cas_loops.md)
