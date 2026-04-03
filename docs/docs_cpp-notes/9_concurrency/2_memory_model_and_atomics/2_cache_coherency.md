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

## MESI State Transitions

Each transition is triggered by a specific bus event (read, write, snoop). The complete state
machine:

**Read Hit:** The local cache has the line in M, E, or S. The read proceeds with no state change
(except in S state, the line remains S).

**Write Hit:**

- **M:** Write proceeds, state stays M.
- **E:** Write proceeds, state transitions to M.
- **S:** Invalidates other copies (RFO request). State transitions to M.

**Read Miss:** The cache line is in I state. The CPU issues a read request on the bus.

- If no other cache has the line: loaded from memory, state becomes **E** (Exclusive).
- If another cache has the line in M: that cache writes back to memory, then shares. State becomes
  **S**.
- If another cache has the line in E or S: shared directly. State becomes **S**.

**Write Miss:** The cache line is in I state. The CPU issues a Read-For-Ownership (RFO) on the bus.

- All other caches with the line invalidate their copies (transition to I).
- The line is loaded, state becomes **M**.

**Snoop Events (another core requests the line):**

- **M:** Write-back to memory, then share. State transitions to **S**.
- **E:** Share directly. State transitions to **S**.
- **S:** No change.
- **I:** No action.

$$\text{E} \xrightarrow{\text{write}} \text{M} \quad \text{S} \xrightarrow{\text{write request}} \text{RFO} \to \text{I} \to \text{M}$$

$$\text{M} \xrightarrow{\text{snoop read}} \text{write-back} \to \text{S} \quad \text{I} \xrightarrow{\text{read miss}} \text{load} \to \text{S or E}$$

## Cache Line Structure

A cache line is the minimum unit of cache coherence. On modern x86-64 processors, a cache line is
**64 bytes**. This means:

- Reading any byte within a 64-byte aligned block loads all 64 bytes into the cache.
- Writing any byte invalidates the entire 64-byte line in other caches.

The cache hierarchy on a typical modern CPU:

| Level  | Size          | Latency (cycles) | Associativity |
| :----- | :------------ | :--------------- | :------------ |
| **L1** | 32-64 KB      | 3-4              | 8-way         |
| **L2** | 256 KB - 1 MB | 10-14            | 8-16 way      |
| **L3** | 4-64 MB       | 30-50            | 16-64 way     |

## Write-Back vs. Write-Through Policies

**Write-through:** Every write to cache immediately writes through to main memory. Simple but slow,
as every store incurs main memory latency.

**Write-back:** Writes are buffered in the cache. The modified line is marked M (Modified) but not
written to memory until the line is evicted or another core requests it. This is the policy used by
modern x86 CPUs because it dramatically reduces write traffic to main memory.

Implications of write-back:

- A line in M state may differ from main memory. Reading main memory directly would yield stale
  data.
- The MESI protocol ensures that any read from another core triggers a write-back before sharing.
- Store buffers exist between the CPU core and the L1 cache to hide write latency (see
  [Instruction Reordering](./1_instruction_reordering.md)).

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

### False Sharing Example with Performance Measurement

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

## Padding and Alignment to Prevent False Sharing

The standard technique is to pad variables so that each one occupies its own cache line using
`alignas`:

```cpp
struct per_thread_stats {
    alignas(64) int64_t processed_count = 0;
    alignas(64) int64_t error_count = 0;
    // Each field on its own cache line
};
```

For class members that are accessed by different threads, pad each member:

```cpp
class concurrent_metrics {
    alignas(64) std::atomic<int64_t> requests_{0};
    char padding1[64 - sizeof(std::atomic<int64_t>)];

    alignas(64) std::atomic<int64_t> errors_{0};
    char padding2[64 - sizeof(std::atomic<int64_t>)];

    alignas(64) std::atomic<int64_t> bytes_{0};
};
```

C++17 provides `std::hardware_destructive_interference_size` to query the cache line size at compile
time:

```cpp
#include <new>

struct cache_aligned {
    alignas(std::hardware_destructive_interference_size) int value = 0;
};
```

Note: `std::hardware_destructive_interference_size` is optional and may not be defined on all
platforms. On platforms where it is not available, fall back to `alignas(64)`.

## Cache-Friendly Data Structure Design

Designing data structures for cache efficiency can yield 10-100x performance improvements:

1. **Array of structures (AoS) vs. Structure of arrays (SoA):**

```cpp
// AoS: Good for accessing all fields of one entity
struct Particle {
    float x, y, z;
    float vx, vy, vz;
    float mass;
};
std::vector<Particle> particles;

// SoA: Good for bulk processing one field across all entities
struct Particles {
    std::vector<float> x, y, z;
    std::vector<float> vx, vy, vz;
    std::vector<float> mass;
};
```

Use SoA when you process one field at a time (e.g., updating all positions). Use AoS when you access
all fields of individual entities (e.g., collision detection).

2. **Compact data types:** Use `float` instead of `double` when precision allows. Use `int32_t`
   instead of `int64_t`. Smaller types mean more elements per cache line.

3. **Avoid pointer chasing:** Linked lists, trees with heap-allocated nodes, and `std::map` cause
   cache misses on every traversal. Prefer contiguous containers (`std::vector`, `std::deque`) and
   flat data structures.

4. **Hot/cold splitting:** Separate frequently accessed fields from rarely accessed fields:

```cpp
struct NodeHot {
    int value;
    Node* next;
};

struct NodeCold {
    std::string description;
    std::chrono::system_clock::time_point created_at;
    // Cold data stored separately
};
```

## Prefetching

Hardware prefetchers automatically detect sequential and stride access patterns and fetch cache
lines ahead of time. You can also issue explicit prefetch hints using `__builtin_prefetch`
(GCC/Clang):

```cpp
// Prefetch data that will be needed soon
for (int i = 0; i < n; ++i) {
    __builtin_prefetch(&data[i + 8], 0, 3);  // Read prefetch, high locality
    process(data[i]);
}
```

Parameters:

- **Address:** The address to prefetch.
- **RW:** 0 for read, 1 for write.
- **Locality:** 0-3 (3 = keep in cache as long as possible).

:::warning `__builtin_prefetch` is a hint, not a guarantee. Incorrect prefetching can degrade
performance by evicting useful cache lines. Always benchmark with and without prefetching. The
hardware prefetcher is often better than manual prefetching for simple patterns. :::

## NUMA Considerations

On multi-socket systems, memory is not uniform. Each CPU socket has its own local memory, and
accessing remote memory (attached to another socket) has higher latency.

**NUMA effects on cache coherency:**

- A cache line may be "near" (local memory) or "far" (remote memory). Remote access adds ~20-40ns of
  latency compared to local access.
- Thread migration between sockets causes all cache lines to become remote, dramatically degrading
  performance.
- For NUMA-aware allocation, use `numa_alloc_onnode()` or `mbind()` on Linux.

```cpp
// Linux: bind memory allocation to a specific NUMA node
#include <numaif.h>
#include <numa.h>

void* numa_allocate(size_t size, int node) {
    void* ptr = nullptr;
    posix_memalign(&ptr, 64, size);
    unsigned long nodemask = 1UL << node;
    mbind(ptr, size, MPOL_BIND, &nodemask, 32, 0);
    return ptr;
}
```

For thread pools, pin threads to specific NUMA nodes using `pthread_setaffinity_np` or
`sched_setaffinity` to prevent migration and ensure memory locality.

## Performance Implications of Cache Line Size

The typical cache line size on modern x86 processors is 64 bytes. Key implications:

1. **Adjacent data** within 64 bytes shares a cache line and may suffer false sharing.
2. **Prefetching** operates at cache line granularity: reading one byte pulls in 64 bytes.
3. **Alignment** to cache line boundaries can improve or degrade performance depending on access
   patterns.

## Common Pitfalls

- **False sharing with `std::atomic`:** Atomic variables on the same cache line cause coherence
  traffic even with `memory_order_relaxed`. Always pad atomics used by different threads.
- **Over-padding:** Padding every variable wastes memory and reduces the effective cache capacity.
  Only pad variables that are written concurrently by different threads.
- **Ignoring NUMA on multi-socket servers:** On servers with more than one CPU socket, memory
  locality matters. Thread migration between sockets causes all cached data to become remote.
- **Trusting `hardware_destructive_interference_size`:** This constant may not reflect the actual
  cache line size on all platforms. Always verify with `sysconf(_SC_LEVEL1_DCACHE_LINESIZE)` on
  Linux.

## See Also

- [Instruction Reordering and Happens-Before](./1_instruction_reordering.md)
- [Atomic Operations and Lock-Free Programming](./3_atomic_operations.md)
- [Memory Orderings](./4_memory_orderings.md)
