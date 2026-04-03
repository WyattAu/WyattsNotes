---
title: Cache Coherency (MESI) and False Sharing
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: cache-coherency-mesi-false-sharing
---

# Cache Coherency (MESI) and False Sharing

This section covers the MESI cache coherence protocol, cache line ownership and coherence traffic,
false sharing, and padding/alignment techniques to prevent false sharing in multi-threaded programs.

## MESI Protocol Overview

The **MESI protocol** is a widely used cache coherence protocol that maintains consistency across
CPU caches. Each cache line is in one of four states:

| State             | Description                                                     | Can Read? | Can Write?                                   |
| ----------------- | --------------------------------------------------------------- | --------- | -------------------------------------------- |
| **M** (Modified)  | This cache has the only valid copy; it differs from main memory | Yes       | Yes                                          |
| **E** (Exclusive) | This cache has the only valid copy; it matches main memory      | Yes       | Yes (transitions to M)                       |
| **S** (Shared)    | Multiple caches have valid copies matching main memory          | Yes       | No (must request exclusive)                  |
| **I** (Invalid)   | This cache line is not valid                                    | No        | No (must request from other cache or memory) |

State transitions:

$$\text{E} \xrightarrow{\text{write}} \text{M} \quad \text{S} \xrightarrow{\text{write request}} \text{RFO} \to \text{I} \to \text{M}$$

$$\text{M} \xrightarrow{\text{snoop read}} \text{write-back} \to \text{S} \quad \text{I} \xrightarrow{\text{read miss}} \text{load} \to \text{S or E}$$

## Cache Line Ownership and Coherence Traffic

When a CPU core writes to a cache line in the **Shared** state, it must issue a
**Read-For-Ownership** (RFO) request on the bus. This:

1. **Invalidates** all other copies (transitioning them to **I** state).
2. **Waits** for acknowledgment from all other cores that hold the line.
3. Transitions the requesting core's copy to **Modified** state.

This invalidation traffic is the primary source of performance degradation in multi-threaded
programs with frequent writes to shared data.

## False Sharing

**False sharing** occurs when two threads write to different variables that happen to reside on the
same cache line (typically 64 bytes). Even though the variables are logically independent, the
hardware treats them as a single unit for coherence purposes.

$$\text{False Sharing: } \text{var}_1 \in \text{line}_L \wedge \text{var}_2 \in \text{line}_L \wedge \text{thread}_1 \text{ writes } \text{var}_1 \wedge \text{thread}_2 \text{ writes } \text{var}_2$$

Each write by one thread invalidates the cache line for the other thread, causing repeated cache
misses and coherence traffic. Performance can degrade by orders of magnitude compared to the
uncontended case.

## Padding and Alignment to Prevent False Sharing

The standard technique is to pad variables so that each one occupies its own cache line using
`alignas`:

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

:::tip On typical x86-64 systems, `sizeof(padded_counter)` will be 64 (one cache line), while
`sizeof(unpadded_counter)` will be 4 (one int). With 8 threads, the unpadded counters occupy only 32
bytes (fitting in a single cache line), while the padded counters occupy 512 bytes (8 cache lines).
The padded version will typically be significantly faster due to the elimination of false sharing.
:::

## Performance Implications of Cache Line Size

The typical cache line size on modern x86 processors is 64 bytes. Key implications:

1. **Adjacent data** within 64 bytes shares a cache line and may suffer false sharing.
2. **Prefetching** operates at cache line granularity: reading one byte pulls in 64 bytes.
3. **Alignment** to cache line boundaries can improve or degrade performance depending on access
   patterns.

## See Also

- [Instruction Reordering and Happens-Before](./1_instruction_reordering.md)
- [Atomic Operations and Lock-Free Programming](./3_atomic_operations.md)
- [Memory Orderings](./4_memory_orderings.md)
