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
and a demonstration of how data races manifest in practice.

## Data Race Definition

A **data race** [N4950 §6.9.4.2] occurs when two or more threads access the same memory location
concurrently, at least one of them performs a write, and there is no happens-before relationship
between the accesses. Formally, a data race is present when all three conditions hold:

$$\text{Data Race} \iff \exists\, m, t_1, t_2 : \text{access}(t_1, m, w) \wedge \text{access}(t_2, m, r/w) \wedge \neg\text{happens-before}(t_1, t_2) \wedge \neg\text{happens-before}(t_2, t_1)$$

where $m$ is a scalar memory location, $w$ denotes a write, $r$ denotes a read, and happens-before
is the order relation defined in [N4950 §6.9.4.1].

:::warning If a C++ program contains a data race, it has **undefined behavior** [N4950 §6.9.4.2].
The compiler is free to assume no data races exist and may optimize accordingly, potentially
eliminating loads, stores, or reordering operations in ways that are surprising and
non-deterministic. :::

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

:::warning The following program intentionally contains a data race for educational purposes. It
exhibits undefined behavior and may crash, produce incorrect results, or appear to work correctly
depending on the platform and compiler flags. Never write code like this in production. :::

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

## See Also

- [Thread Execution (std::jthread) and Hardware Mapping](./1_threads_jthread.md)
- [Mutexes, Shared Locks, and Deadlock Prevention](./3_mutexes_deadlocks.md)
- [Atomic Operations and Lock-Free Programming](../2_memory_model_and_atomics/3_atomic_operations.md)
