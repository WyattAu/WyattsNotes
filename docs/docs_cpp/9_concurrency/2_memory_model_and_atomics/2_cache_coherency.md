---
title: Cache Coherency (MESI) and False Sharing
description:
  C++: Cache Coherency (MESI) and False Sharing — MESI Protocol Overview; MESI
  State Transitions; Formal State Transition Table; Cache Line Structure.
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

The MESI protocol is a **write-invalidate** protocol: when a core wants to write to a shared line,
it first invalidates all other copies rather than updating them. This is simpler than a write-update
protocol and matches the dominant access pattern (a single writer per cache line).

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

$$\mathrm{E} \xrightarrow{\mathrm{write}} \mathrm{M} \quad \mathrm{S} \xrightarrow{\mathrm{write request}} \mathrm{RFO} \to \mathrm{I} \to \mathrm{M}$$

$$\mathrm{M} \xrightarrow{\mathrm{snoop read}} \mathrm{write-back} \to \mathrm{S} \quad \mathrm{I} \xrightarrow{\mathrm{read miss}} \mathrm{load} \to \mathrm{S or E}$$

### Formal State Transition Table

| Current State | Event       | Action                                | New State |
| :------------ | :---------- | :------------------------------------ | :-------- |
| M             | Local Read  | None                                  | M         |
| M             | Local Write | None                                  | M         |
| M             | Snoop Read  | Write-back, share                     | S         |
| M             | Snoop Write | Write-back, invalidate                | I         |
| E             | Local Read  | None                                  | E         |
| E             | Local Write | None                                  | M         |
| E             | Snoop Read  | Share                                 | S         |
| E             | Snoop Write | Invalidate                            | I         |
| S             | Local Read  | None                                  | S         |
| S             | Local Write | Invalidate others, read for ownership | M         |
| S             | Snoop Read  | None                                  | S         |
| S             | Snoop Write | Invalidate                            | I         |
| I             | Local Read  | Bus read (E or S)                     | E or S    |
| I             | Local Write | Bus RFO, invalidate others            | M         |
| I             | Snoop Read  | None                                  | I         |
| I             | Snoop Write | None                                  | I         |

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

### Cache Line Addressing

A memory address is decomposed into three fields for cache lookup:

```
|  Tag  |   Set Index   | Block Offset |
|-------|---------------|--------------|
|       |  (index bits) | (6 bits for  |
|       |               |  64-byte line)|
```

The set index selects which cache set to probe, the tag identifies which memory block is stored in
that set, and the block offset selects the byte within the cache line. Two addresses that differ
only in the tag but share the same set index map to the same cache set (and may evict each other in
a direct-mapped or low-associativity cache).

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

### Coherence Traffic Cost Model

The cost of an invalidation depends on the cache hierarchy level at which the line resides:

| Scenario                          | Coherence Traffic         | Latency (approximate) |
| :-------------------------------- | :------------------------ | :-------------------- |
| Same core, different hyperthreads | None (shared L1)          | ~4 cycles             |
| Same socket, different cores      | L3 snoop + invalidation   | ~40 cycles            |
| Different sockets (NUMA)          | Inter-socket interconnect | ~100-200 cycles       |

## False Sharing

**False sharing** occurs when two threads write to different variables that happen to reside on the
same cache line (typically 64 bytes). Even though the variables are logically independent, the
hardware treats them as a single unit for coherence purposes.

$$\mathrm{False Sharing: } \mathrm{var}_1 \in \mathrm{line}_L \wedge \mathrm{var}_2 \in \mathrm{line}_L \wedge \mathrm{thread}_1 \mathrm{ writes } \mathrm{var}_1 \wedge \mathrm{thread}_2 \mathrm{ writes } \mathrm{var}_2$$

Each write by one thread invalidates the cache line for the other thread, causing repeated cache
misses and coherence traffic. Performance can degrade by orders of magnitude compared to the
uncontended case.

### Proof: Why False Sharing Causes Performance Degradation

**Claim:** If two threads concurrently write to variables on the same cache line, each write causes
an L1 cache miss on the other thread, resulting in $\mathcal{O}(n)$ coherence round-trips for $n$
writes per thread.

**Proof:**

1. Let `var_a` and `var_b` reside on the same cache line $L$, and let thread $T_1$ write to `var_a`
   while thread $T_2$ writes to `var_b`.
2. Initially, both threads may hold $L$ in **Shared** state (after the first read).
3. When $T_1$ writes to `var_a`, the cache controller issues an RFO for $L$, invalidating $T_2$'s
   copy. $T_1$'s line transitions to **Modified**.
4. When $T_2$ writes to `var_b`, its copy is **Invalid** (due to step 3), so it incurs an L1 miss.
   $T_2$ issues an RFO, invalidating $T_1$'s copy. $T_2$'s line transitions to **Modified**.
5. Step 3 and step 4 alternate for every write, producing a **ping-pong** pattern.
6. Each ping-pong costs ~40-100ns (inter-core coherence latency), versus ~1-4ns for an L1 hit.
7. For $n$ writes per thread, total coherence cost is
   $\Theta(n \times \mathrm{coherence\_latency})$, versus $\Theta(n \times \mathrm{L1\_latency})$
   without false sharing.
8. The speedup from eliminating false sharing is
   $\frac{\mathrm{coherence\_latency}}{\mathrm{L1\_latency}} \approx 10\mathrm{x}\mathrm{--}100\mathrm{x}$.

$\square$

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

### Alignment-Based Fix: Programmatic Verification

You can verify that two variables are on different cache lines at runtime:

```cpp
#include <cstdint>
#include <cstddef>
#include <iostream>

constexpr std::size_t CACHE_LINE = 64;

bool same_cache_line(const void* a, const void* b) {
    std::uintptr_t pa = reinterpret_cast<std::uintptr_t>(a);
    std::uintptr_t pb = reinterpret_cast<std::uintptr_t>(b);
    return (pa / CACHE_LINE) == (pb / CACHE_LINE);
}

struct AlignedPair {
    alignas(CACHE_LINE) int a = 0;
    alignas(CACHE_LINE) int b = 0;
};

struct UnalignedPair {
    int a = 0;
    int b = 0;
};

int main() {
    AlignedPair ap;
    UnalignedPair up;

    std::cout << "Aligned: same line? " << same_cache_line(&ap.a, &ap.b) << "\n";
    std::cout << "Unaligned: same line? " << same_cache_line(&up.a, &up.b) << "\n";
}
// Output:
//   Aligned: same line? 0
//   Unaligned: same line? 1
```

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
hardware prefetcher is often better than manual prefetching for simple patterns.
:::

## Write Propagation and Visibility

When a core writes to a cache line in Modified state, other cores do not immediately see the new
value. The write is visible only when:

1. The modified line is **evicted** from the writer's cache (write-back to memory), and the reader
   loads the updated line from memory.
2. Another core issues a **read** for that line, causing the writer to supply the data directly
   (cache-to-cache transfer on MESI/MOESI).
3. The writer issues an **explicit fence** (e.g., `mfence` on x86, `DMB` on ARM) that drains the
   store buffer, making the write visible to cores that subsequently read from memory.

The C++ memory model abstracts this into memory ordering constraints:

- `memory_order_release` ensures that prior stores are visible to cores that subsequently perform
  `memory_order_acquire` on the same atomic variable.
- `memory_order_seq_cst` ensures a single total order over all seq_cst operations.

### Cache Coherence vs. Memory Model

**Cache coherence** is a hardware property: it ensures that all cores eventually see a consistent
view of memory. The MESI protocol guarantees that, given sufficient time, all writes propagate to
all caches.

**Memory model** is a software contract: it defines which values a read may return and what ordering
guarantees exist. The C++ memory model [N4950 §6.9.2.2] is weaker than hardware cache coherence — it
allows certain reorderings that cache coherence alone would prevent.

The distinction matters because:

- Cache coherence does not prevent **store-to-load reordering** (the store buffer allows a load to
  bypass a pending store to a different address).
- Cache coherence does not prevent **compiler reordering** (the compiler may reorder independent
  memory operations).
- The memory model adds ordering constraints on top of cache coherence.

## Hardware-Specific Coherence Behaviors

### x86/x86-64

Intel and AMD processors implement a variant of MESI (Intel uses MESI with a snoop filter; AMD uses
MOESI). Key characteristics:

- **Store-to-load reordering** is the only CPU-level reordering allowed.
- **Cache-to-cache transfer** is supported: when core A reads a line held in Modified state by core
  B, the data is transferred directly between L1 caches without going through main memory.
- **Invalidation acknowledgment latency** is typically 20-40ns on the same socket.

### ARMv8

ARMv8 processors implement a weaker memory model with optional hardware barriers:

- All four reorderings (store-store, store-load, load-load, load-store) are possible.
- `LDAR` (Load-Acquire) and `STLR` (Store-Release) provide acquire/release semantics.
- `DMB` (Data Memory Barrier) provides full ordering.
- Cache coherence is still maintained by a MESI-like protocol, but the ordering of when coherence
  effects become visible to the core is weaker.

### RISC-V

RISC-V defines the **RVWMO** (RISC-V Weak Memory Ordering) model:

- All four reorderings are allowed.
- `fence rw, rw` provides full acquire/release semantics.
- `fence.i` synchronizes instruction fetches (used after writing code to memory).

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

## Store Buffers and Write Serialization

Modern CPUs use **store buffers** between the execution unit and the L1 cache to avoid stalling on
cache misses during writes. When a CPU writes to a cache line in Shared state, the write is placed
in the store buffer and the CPU continues executing. The RFO (Read-For-Ownership) request is issued
on the bus asynchronously.

This creates a subtle ordering problem: the CPU can read its own subsequent loads from the store
buffer (store forwarding) before the write is visible to other cores. This is one reason why memory
barriers exist — they force the store buffer to drain before subsequent loads can proceed.

For C++ atomics, `memory_order_release` ensures all prior stores are visible before the release
operation. On x86, the Total Store Order (TSO) model already guarantees that stores are visible to
all cores in program order, so `memory_order_release` compiles to a no-op (or compiler barrier
only). On ARM/AArch64, it emits a `DMB ISH` instruction to ensure store buffer drain.

## The MOESI Protocol

AMD processors use a five-state extension of MESI called **MOESI**, adding an **Owned** state:

| State | Description                                                                                                                                                    |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **M** | Modified — differs from memory, no other copies exist                                                                                                          |
| **O** | Owned — differs from memory, but Shared copies may exist in other caches. On read miss, the Owned cache supplies data directly without writing back to memory. |
| **E** | Exclusive — matches memory, no other copies exist                                                                                                              |
| **S** | Shared — matches memory, copies may exist in other caches                                                                                                      |
| **I** | Invalid — not cached                                                                                                                                           |

The Owned state eliminates the write-back-to-memory step when a Modified line is read by another
core: the data is transferred cache-to-cache, reducing main memory traffic. This is particularly
beneficial on multi-socket systems where main memory access latency is higher.

Intel processors do not use MOESI; they implement MESI with a snoop filter that achieves similar
cache-to-cache transfer efficiency through different microarchitectural means. The key difference is
that Intel's MESI still requires the Modified cache to write back to memory before sharing, while
MOESI's Owned state allows direct cache-to-cache transfer.

## Detecting False Sharing with `perf`

On Linux, hardware performance counters can directly measure cache coherence events:

```bash
# Count last-level cache misses (proxy for false sharing)
perf stat -e cache-misses,cache-references,instructions ./my_program

# Use perf c2c to detect false sharing specifically
perf c2c record ./my_program
perf c2c report
```

The `perf c2c` tool is specifically designed for cache-to-cache transfer analysis and directly
identifies false sharing by correlating cache miss addresses with data structure offsets. On Intel
CPUs, the `offcore_response` PMU events distinguish between local and remote cache accesses — remote
DRAM accesses suggest NUMA effects, while high cache-to-cache transfer counts suggest false sharing.

## Cache Coherency in Lock-Free Algorithms

Lock-free algorithms are particularly sensitive to cache coherence behavior because they rely on
atomic operations rather than locks to coordinate access. The cache line state of the atomic
variable directly affects performance:

```cpp
#include <atomic>
#include <thread>
#include <vector>
#include <iostream>
#include <chrono>

struct Spinlock {
    std::atomic<bool> locked{false};

    void lock() {
        while (locked.exchange(true, std::memory_order_acquire)) {
            // spin — each iteration issues an atomic RMW on the cache line
            // If the line is in Modified state on another core,
            // this causes cache-to-cache transfer
        }
    }

    void unlock() {
        locked.store(false, std::memory_order_release);
    }
};

Spinlock lock;
int shared_counter = 0;

void increment(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        lock.lock();
        ++shared_counter;
        lock.unlock();
    }
}

int main() {
    constexpr int threads = 8;
    constexpr int iters = 100'000;
    std::vector<std::jthread> pool;

    auto start = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < threads; ++i) {
        pool.emplace_back(increment, iters);
    }
    for (auto& t : pool) t.join();
    auto end = std::chrono::high_resolution_clock::now();

    auto us = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
    std::cout << "counter=" << shared_counter
              << " time=" << us.count() << " us\n";
}
```

Under heavy contention, the spinlock's cache line ping-pongs between cores in Modified state. Each
`exchange` operation requires an RFO, invalidating all other copies. This is the fundamental reason
why spinlocks scale poorly beyond a few threads — the coherence traffic grows linearly with thread
count.

### Backoff Strategies

Exponential backoff reduces coherence traffic by inserting delays between spin attempts:

```cpp
void lock_with_backoff() {
    int delay = 1;
    while (locked.exchange(true, std::memory_order_acquire)) {
        for (int i = 0; i < delay; ++i) {
            // spin locally — no coherence traffic
        }
        if (delay < 1024) delay *= 2;
        // After max delay, optionally yield the thread
        std::this_thread::yield();
    }
}
```

The backoff reduces the rate of atomic RMW operations, allowing the lock holder's cache line to
remain in Modified state longer and complete the critical section before being invalidated.

## False Sharing with `std::atomic` in Practice

A particularly insidious form of false sharing occurs when adjacent `std::atomic` variables are
accessed by different threads. Even `memory_order_relaxed` operations cause invalidation:

```cpp
#include <atomic>
#include <thread>
#include <vector>
#include <iostream>
#include <chrono>

struct UnpaddedAtomics {
    std::atomic<int> a{0};
    std::atomic<int> b{0};
    std::atomic<int> c{0};
    std::atomic<int> d{0};
};

struct PaddedAtomics {
    alignas(64) std::atomic<int> a{0};
    alignas(64) std::atomic<int> b{0};
    alignas(64) std::atomic<int> c{0};
    alignas(64) std::atomic<int> d{0};
};

template<typename T>
void bench(const char* label, int iterations) {
    T counters;
    std::vector<std::jthread> threads;
    auto start = std::chrono::high_resolution_clock::now();

    for (int i = 0; i < 4; ++i) {
        threads.emplace_back([&counters, i, iterations] {
            for (int j = 0; j < iterations; ++j) {
                switch (i) {
                    case 0: counters.a.fetch_add(1, std::memory_order_relaxed); break;
                    case 1: counters.b.fetch_add(1, std::memory_order_relaxed); break;
                    case 2: counters.c.fetch_add(1, std::memory_order_relaxed); break;
                    case 3: counters.d.fetch_add(1, std::memory_order_relaxed); break;
                }
            }
        });
    }

    for (auto& t : threads) t.join();
    auto end = std::chrono::high_resolution_clock::now();
    auto us = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
    std::cout << label << ": " << us.count() << " us\n";
}

int main() {
    constexpr int iters = 10'000'000;
    bench<UnpaddedAtomics>("Unpadded atomics ", iters);
    bench<PaddedAtomics>("Padded atomics   ", iters);
    return 0;
}
```

Even with `memory_order_relaxed`, the `fetch_add` issues a read-modify-write on the cache line,
triggering MESI invalidation traffic. The padded version eliminates this by placing each atomic on
its own cache line.

## Cache Coherence and Lock-Free Data Structures

Lock-free data structures (queues, stacks, hash tables) rely heavily on atomic CAS
(compare-and-swap) operations. Each CAS operation on a shared cache line follows this MESI sequence:

1. The core reads the current value (cache line transitions from I to S or E).
2. The core attempts the CAS. On success, the line transitions to M.
3. On failure (another core modified the line), the line is invalidated and the core retries.

The key insight is that a CAS loop under contention generates a stream of I -> S/E -> M -> I
transitions, each costing ~40-100ns in inter-core coherence traffic. Lock-free algorithms must
minimize contention on shared cache lines to scale.

### Example: Cache-Aware Lock-Free Counter

```cpp
#include <atomic>
#include <thread>
#include <vector>
#include <iostream>

template<int N>
class ShardedCounter {
    alignas(64) std::atomic<int64_t> counts[N]{};

public:
    void increment() {
        // Thread ID hashes to a shard, eliminating false sharing
        auto tid = std::hash<std::thread::id>{}(std::this_thread::get_id());
        counts[tid % N].fetch_add(1, std::memory_order_relaxed);
    }

    int64_t total() const {
        int64_t sum = 0;
        for (int i = 0; i < N; ++i) {
            sum += counts[i].load(std::memory_order_relaxed);
        }
        return sum;
    }
};

int main() {
    ShardedCounter<8> counter;
    constexpr int threads = 8;
    constexpr int iters = 1'000'000;

    std::vector<std::jthread> pool;
    for (int i = 0; i < threads; ++i) {
        pool.emplace_back([&] {
            for (int j = 0; j < iters; ++j) counter.increment();
        });
    }
    for (auto& t : pool) t.join();

    std::cout << "total: " << counter.total() << "\n";
    std::cout << "expected: " << threads * iters << "\n";
}
```

By sharding the counter across multiple cache lines, each thread accesses a different line,
eliminating false sharing entirely. The total is computed by summing all shards.

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
- **False sharing with read-mostly data:** Even if one thread writes and others only read, the
  writer's invalidations cause cache misses on readers. Consider using `std::atomic` with
  `memory_order_relaxed` for read-only counters or epoch-based reclamation for read-heavy workloads.
- **Assuming all platforms have 64-byte cache lines:** Some embedded ARM platforms use 32-byte cache
  lines. Some older x86 CPUs use 128-byte cache lines (sector-based). Always verify the target
  platform's cache line size.
- **Ignoring cache behavior in lock-free algorithms:** A CAS loop under contention generates
  repeated MESI state transitions (I -> S/E -> M -> I), each costing 40-100ns. Minimize contention
  by sharding, padding, or using backoff strategies.
- **False sharing across dynamically allocated arrays:** Elements of a `std::vector` or `new[]`
  array may share cache lines. If different threads access adjacent elements, false sharing occurs.
  Use `alignas` on the element type or allocate with stride padding.

## See Also

- [Instruction Reordering and Happens-Before](./1_instruction_reordering.md)
- [Atomic Operations and Lock-Free Programming](./3_atomic_operations.md)
- [Memory Orderings](./4_memory_orderings.md)
