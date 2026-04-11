---
title: Data Races and Critical Sections
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: data-races-critical-sections
---

# Data Races and Critical Sections

This section covers the formal definition of data races in the C++ memory model, their undefined
behavior consequences, critical sections, the distinction between data races and race conditions,
detection tools, synchronization costs, and practical fixes.

## Data Race Definition

A **data race** [N4950 §6.9.4.2] occurs when two or more threads access the same memory location
concurrently, at least one of them performs a write, and there is no happens-before relationship
between the accesses. Formally, a data race is present when all three conditions hold:

$$\text{Data Race} \iff \exists\, m, t_1, t_2 : \text{access}(t_1, m, w) \wedge \text{access}(t_2, m, r/w) \wedge \neg\text{happens-before}(t_1, t_2) \wedge \neg\text{happens-before}(t_2, t_1)$$

where $m$ is a scalar memory location, $w$ denotes a write, $r$ denotes a read, and happens-before
is the order relation defined in [N4950 §6.9.4.1].

:::warning
If a C++ program contains a data race, it has **undefined behavior** [N4950 §6.9.4.2].
The compiler is free to assume no data races exist and may optimize accordingly, potentially
eliminating loads, stores, or reordering operations in ways that are surprising and
non-deterministic.
:::

## Undefined Behavior of Data Races

The consequences of a data race include but are not limited to [N4950 §6.9.4.2]:

1. **Torn reads/writes**: A read or write of a non-atomic variable may observe or produce a
   partially updated value.
2. **Reordering**: The compiler may reorder non-atomic accesses past synchronization points, since
   data-race-free programs are the only programs the standard guarantees behavior for.
3. **Optimization elimination**: The compiler may cache a value in a register and never re-read from
   memory, or may elide a store entirely.

## Critical Section

A **critical section** is a region of code that accesses shared mutable state. Only one thread
should execute within a critical section at a time to prevent data races. The mutual exclusion of
critical sections is the fundamental goal of synchronization primitives such as mutexes.

## Race Condition vs Data Race

These terms are often confused but have distinct meanings:

| Property                    | Data Race                    | Race Condition       |
| --------------------------- | ---------------------------- | -------------------- |
| Defined by the C++ standard | Yes [N4950 §6.9.4.2]         | No (informal)        |
| Results in UB               | Always                       | Not necessarily      |
| Related to memory model     | Yes                          | No                   |
| Fix mechanism               | Atomic operations or mutexes | Depends on the logic |

A **data race** is a formal term in the C++ memory model. A **race condition** is a broader,
informal term for any situation where the program's outcome depends on the relative timing of
threads. A race condition can occur even with proper synchronization (e.g., two threads both check
`if (queue.empty())` before either pushes an element).

## Demonstrating a Data Race

:::warning
The following program intentionally contains a data race for educational purposes. It
exhibits undefined behavior and may crash, produce incorrect results, or appear to work correctly
depending on the platform and compiler flags. Never write code like this in production.
:::

```cpp
#include <iostream>
#include <thread>
#include <vector>

int counter = 0;

void increment(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        ++counter; // DATA RACE: non-atomic write to shared variable
    }
}

int main() {
    constexpr int num_threads = 10;
    constexpr int iterations = 100'000;

    std::vector<std::jthread> threads;
    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back(increment, iterations);
    }

    // jthreads join automatically in destructor

    std::cout << "Expected: " << num_threads * iterations << "\n";
    std::cout << "Actual:   " << counter << "\n";
    return 0;
}
```

The expected result is $10 \times 100{,}000 = 1{,}000{,}000$, but the actual result will typically
be less because `++counter` is not atomic. The increment operation consists of three machine
instructions:

1. Load `counter` from memory into a register.
2. Increment the register.
3. Store the register back to memory.

Two threads can interleave these steps such that one increment is lost. For example:

| Thread A          | Thread B          |
| ----------------- | ----------------- |
| load counter (0)  |                   |
| increment (1)     | load counter (0)  |
| store counter (1) | increment (1)     |
|                   | store counter (1) |

After both threads complete, `counter` is 1 instead of 2. This is a **lost update**.

## Benign Data Races: A Myth

The concept of a "benign data race" was discussed in academic literature (e.g., Boehm 2012, "Benign
Data Races: What Could Possibly Go Wrong?") and the conclusion is clear: **there is no such thing as
a benign data race in C++**.

Even data races that appear harmless in practice can cause problems because:

1. **Compiler optimizations.** The compiler may assume no data races and optimize accordingly. A
   value loaded from memory may be cached in a register, causing subsequent loads to return stale
   data. A store may be elided if the compiler proves the value is overwritten later. These
   optimizations are valid under the "as-if" rule [N4950 §6.9.1] because a data race makes the
   program's behavior undefined.

2. **Architecture effects.** On x86, the hardware memory model is relatively strong (total store
   order), so many data races appear benign. On ARM, POWER, or RISC-V, the hardware may reorder
   loads and stores, making torn reads and stale values far more likely.

3. **Future-proofing.** Code that "works" today with benign data races may break when compiled with
   a different optimization level, a different compiler version, or a different CPU architecture.

:::warning
Never rely on benign data races. If two threads access the same variable and at least one
writes, use a mutex or `std::atomic` [N4950 §6.9.4.2].
:::

## Detecting Data Races with ThreadSanitizer

**ThreadSanitizer** (TSan) is a compile-time instrumentation tool that detects data races at
runtime. It is available in GCC and Clang:

```bash
# Compile with ThreadSanitizer
g++ -std=c++23 -fsanitize=thread -g -O1 data_race_demo.cpp -o data_race_demo
./data_race_demo
```

TSan reports data races with precise source locations and stack traces:

```
==================
WARNING: ThreadSanitizer: data race (pid=12345)
  Write of size 4 at 0x7f8a0c000010 by thread T2:
    #0 increment(int) data_race_demo.cpp:8
    #1 std::thread::_State_impl<...>::_M_run() ...

  Previous write of size 4 at 0x7f8a0c000010 by thread T1:
    #0 increment(int) data_race_demo.cpp:8
    #1 std::thread::_State_impl<...>::_M_run() ...

  Location is global 'counter' of size 4 at 0x7f8a0c000010
==================
```

**How TSan works:** TSan instruments every memory access at compile time, maintaining a shadow
memory state machine that tracks happens-before relationships between threads. When it detects a
conflicting access without a happens-before edge, it reports a data race.

**Limitations of TSan:**

- **Runtime detection only.** TSan cannot detect data races that do not occur during the specific
  execution being analyzed. A data race that requires a particular interleaving may go undetected.
- **Performance overhead.** TSan typically adds 5–15x runtime overhead and 5–10x memory overhead.
  Not suitable for production deployments.
- **False positives (rare).** TSan can report benign data races in correctly synchronized code if
  the synchronization mechanism is not recognized (e.g., custom spinlocks using `std::atomic_flag`).
- **No guarantee of completeness.** TSan is sound but not complete — it may miss races that require
  specific interleavings.

**Other tools:**

| Tool                         | Method                         | Strengths                                  |
| ---------------------------- | ------------------------------ | ------------------------------------------ |
| ThreadSanitizer (TSan)       | Compile-time instrumentation   | Precise, low false-positive rate           |
| Helgrind (Valgrind)          | Dynamic binary instrumentation | No recompilation needed, works on binaries |
| Intel Inspector              | Hardware-based sampling        | Low overhead, production-capable           |
| Clang Thread Safety Analysis | Static analysis (annotations)  | Catches races at compile time              |

## The Cost of Synchronization

Synchronization is not free. Understanding the performance costs helps you make informed decisions
about when and how to synchronize.

### Cache Line Bouncing

Modern CPUs use a cache coherence protocol (MESI or variant) to keep cached copies of the same
memory line consistent across cores. When a mutex is contended, the cache line containing the mutex
bounces between cores, causing:

1. **Invalidation traffic.** Core A acquires the mutex, invalidating Core B's cached copy. Core B
   later tries to acquire the mutex, invalidating Core A's copy. Each invalidation costs ~40–100
   cycles on modern x86.
2. **Bus traffic.** Cache line invalidation and fetch generate traffic on the inter-core bus,
   consuming bandwidth that other cores could use for useful work.
3. **Pipeline stalls.** While waiting for a cache line to arrive from another core, the CPU pipeline
   stalls.

### False Sharing

**False sharing** occurs when two independent variables reside on the same cache line (typically 64
bytes) and are accessed by different threads. Even though the variables are logically independent,
the hardware treats them as a single unit:

```cpp
#include <thread>
#include <vector>
#include <iostream>

struct Counters {
    int a;
    int b;
    // a and b are 4 bytes apart — same cache line (64 bytes)
};

Counters counters{};

void increment_a(int iterations) {
    for (int i = 0; i < iterations; ++i) ++counters.a;
}

void increment_b(int iterations) {
    for (int i = 0; i < iterations; ++i) ++counters.b;
}

int main() {
    constexpr int iters = 10'000'000;
    auto t1 = std::jthread(increment_a, iters);
    auto t2 = std::jthread(increment_b, iters);
    // Performance degraded by cache line bouncing on 'counters'
    std::cout << counters.a << " " << counters.b << "\n";
}
```

**Fix: Pad the variables to separate cache lines:**

```cpp
struct alignas(64) PaddedCounterA {
    int value;
    char padding[60];  // fill the rest of the 64-byte cache line
};

struct alignas(64) PaddedCounterB {
    int value;
    char padding[60];
};

PaddedCounterA counter_a{};
PaddedCounterB counter_b{};

void increment_a(int iterations) {
    for (int i = 0; i < iterations; ++i) ++counter_a.value;
}

void increment_b(int iterations) {
    for (int i = 0; i < iterations; ++i) ++counter_b.value;
}
```

:::tip
`alignas(64)` ensures each counter starts at the beginning of a cache line. The padding
prevents the next counter from sharing the same line. On systems with 128-byte cache lines, use
`alignas(128)` and adjust the padding accordingly.
:::

### Contended vs Uncontended Locks

An **uncontended** lock (no thread is waiting) costs ~25–50 cycles on x86. A **contended** lock
requires a kernel context switch, costing ~1,000–10,000 cycles depending on the OS and scheduler.
The difference is two orders of magnitude.

**Guideline:** Minimize critical section duration. Move as much work as possible outside the lock.
Prefer lock-free data structures for high-contention scenarios.

## Relaxed Memory Ordering

`std::atomic` supports multiple memory orderings [N4950 §6.9.4.2]. The default is
`memory_order_seq_cst`, which provides the strongest guarantees but also the highest overhead.
Weaker orderings can be used when full sequential consistency is not required.

### `memory_order_relaxed`

Relaxed atomics guarantee atomicity (no torn reads/writes) but provide **no ordering guarantees**
with respect to other memory operations. They are sufficient for simple counters and statistics
where the exact order of updates does not matter:

```cpp
#include <atomic>
#include <thread>
#include <vector>
#include <iostream>

std::atomic<int> relaxed_counter{0};

void increment_relaxed(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        relaxed_counter.fetch_add(1, std::memory_order_relaxed);
    }
}

int main() {
    constexpr int num_threads = 10;
    constexpr int iterations = 1'000'000;

    std::vector<std::jthread> threads;
    for (int i = 0; i < num_threads; ++i)
        threads.emplace_back(increment_relaxed, iterations);

    // No data race: all accesses are atomic
    // The final value is guaranteed to be correct (10,000,000)
    std::cout << "Counter: " << relaxed_counter.load(std::memory_order_relaxed) << "\n";
}
```

**When `memory_order_relaxed` is sufficient:**

- Simple counters and statistics where you only need the final value.
- Progress indicators and metrics that are read occasionally.
- Bit flags that are set independently by different threads.

**When `memory_order_relaxed` is NOT sufficient:**

- Producer-consumer patterns where the consumer must see the data written before the flag is set.
- Reference counting (must use `memory_order_acq_rel` to prevent use-after-free).
- Any pattern where one thread's write must be visible to another thread before a flag is checked.

| Memory Order           | Guarantees                                | Overhead (x86)                  | Use Case                      |
| ---------------------- | ----------------------------------------- | ------------------------------- | ----------------------------- |
| `memory_order_relaxed` | Atomicity only                            | Minimal (no fence)              | Simple counters, statistics   |
| `memory_order_acquire` | No reads/writes reordered before the load | Minimal (compiler fence on x86) | Guard reads, flag checks      |
| `memory_order_release` | No reads/writes reordered after the store | Minimal (compiler fence on x86) | Guard writes, publishing data |
| `memory_order_acq_rel` | Both acquire and release                  | Moderate                        | Reference counting            |
| `memory_order_seq_cst` | Total order across all threads            | Full memory fence               | Default, when in doubt        |

:::warning
On x86, the hardware memory model (TSO) is strong enough that `memory_order_acquire` and
`memory_order_release` are effectively free (the hardware provides the ordering). On ARM, POWER, and
RISC-V, these orderings emit explicit memory barrier instructions and have real cost. Always measure
before optimizing memory orderings — `memory_order_seq_cst` is the safest default.
:::

## Practical Data Race Bug and Fix

Consider a real-world pattern: a lazily-initialized singleton accessed from multiple threads.

### The Bug

```cpp
#include <string>

class Config {
    static Config* instance_;
    std::string db_host_;
    int port_;

    Config() : db_host_("localhost"), port_(5432) {}
public:
    static Config* get() {
        if (!instance_) {              // RACE: read of instance_
            instance_ = new Config();  // RACE: write of instance_
        }
        return instance_;
    }

    const std::string& db_host() const { return db_host_; }
    int port() const { return port_; }
};

Config* Config::instance_ = nullptr;
```

Two threads calling `Config::get()` simultaneously can both see `instance_ == nullptr`, both
allocate a `Config`, and both write to `instance_`. This is a data race on `instance_` and also
causes a memory leak (one of the two allocations is overwritten and never freed).

### The Fix: `std::call_once`

```cpp
#include <string>
#include <mutex>

class Config {
    static Config* instance_;
    static std::once_flag init_flag_;
    std::string db_host_;
    int port_;

    Config() : db_host_("localhost"), port_(5432) {}
public:
    static Config* get() {
        std::call_once(init_flag_, [] {
            instance_ = new Config();
        });
        return instance_;
    }

    const std::string& db_host() const { return db_host_; }
    int port() const { return port_; }
};

Config* Config::instance_ = nullptr;
std::once_flag Config::init_flag_;
```

`std::call_once` guarantees that the callable is invoked exactly once, even if multiple threads call
it concurrently [N4950 §33.4.4]. The internal synchronization is handled by the `std::once_flag`.

### The Fix: Meyer's Singleton (C++11 and later)

```cpp
class Config {
    std::string db_host_;
    int port_;

    Config() : db_host_("localhost"), port_(5432) {}
public:
    static Config& get() {
        static Config instance;  // Thread-safe since C++11 [N4950 §6.9.2.2]
        return instance;
    }

    const std::string& db_host() const { return db_host_; }
    int port() const { return port_; }
};
```

Since C++11, the initialization of function-local static variables is guaranteed to be thread-safe
[N4950 §6.9.2.2]. The compiler emits guard variables and implicit synchronization to ensure that
exactly one thread performs the initialization, and all other threads wait until it completes. This
is the preferred idiom in modern C++.

## Common Pitfalls

**Assuming `volatile` prevents data races.** `volatile` in C++ tells the compiler not to optimize
away accesses to a variable. It does **not** provide atomicity, ordering, or thread safety. A
`volatile int` accessed by two threads without synchronization is still a data race with undefined
behavior. `volatile` is for memory-mapped I/O and signal handlers, not concurrency [N4950 §6.9.1].

**Using `bool` flags instead of atomics.** A plain `bool` used as a signal between threads is a data
race. Even on architectures where `bool` loads and stores are naturally atomic (x86), the compiler
may cache the value in a register or reorder accesses. Use `std::atomic<bool>`:

```cpp
// Bad: data race
bool ready = false;
// Thread 1: ready = true;
// Thread 2: while (!ready) {}

// Good: no data race
std::atomic<bool> ready{false};
// Thread 1: ready.store(true, std::memory_order_release);
// Thread 2: while (!ready.load(std::memory_order_acquire)) {}
```

**Locking the wrong granularity.** A single global mutex for all shared state is correct but creates
unnecessary contention. A per-object mutex reduces contention but increases the risk of deadlock if
locks are acquired in inconsistent order. Choose the granularity based on your access patterns and
measure.

**Forgetting that `const` does not imply thread safety.** A `const` member function promises not to
modify the object's logically const state, but it does not provide synchronization. If a `const`
member function reads shared mutable state (e.g., `mutable` members), it can still participate in a
data race:

```cpp
class ThreadUnsafeCache {
    mutable std::string cache_;  // mutable to allow modification in const methods
    mutable std::mutex mtx_;
public:
    std::string get() const {
        // Without mtx_.lock(), reading cache_ is a data race
        // if another thread calls set() concurrently.
        std::lock_guard<std::mutex> lock(mtx_);
        return cache_;
    }

    void set(const std::string& val) const {
        std::lock_guard<std::mutex> lock(mtx_);
        cache_ = val;
    }
};
```

## See Also

- [Thread Execution (std::jthread) and Hardware Mapping](./1_threads_jthread.md)
- [Mutexes, Shared Locks, and Deadlock Prevention](./3_mutexes_deadlocks.md)
- [Atomic Operations and Lock-Free Programming](../2_memory_model_and_atomics/3_atomic_operations.md)

:::

:::

:::

:::

:::
