---
title: Thread-Local Storage (TLS)
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: thread-local-storage
---

# Thread-Local Storage (TLS)

This section covers the `thread_local` keyword, thread identification with
`std::this_thread::get_id()`, performance implications of TLS access, initialization guarantees, and
practical patterns such as thread-local random number generators.

## `thread_local` Keyword

The `thread_local` keyword [N4950 §6.8] specifies that a variable has **thread storage duration**: a
new instance of the variable is created for each thread, and it is destroyed when the thread exits.
The variable is initialized before its first use in each thread.

$$\text{thread\_local } T\, x \implies \forall\, t \in \text{Threads}: \exists!\, x_t$$

Thread-local variables can be declared at namespace scope, at block scope, or as `static` class
members [N4950 §6.8]:

```cpp
#include <iostream>
#include <thread>

thread_local int thread_id_value = 0;

void print_id() {
    thread_id_value = 42;
    std::cout << "thread_id_value = " << thread_id_value
              << " (thread " << std::this_thread::get_id() << ")\n";
}

int main() {
    std::jthread t1(print_id);
    std::jthread t2(print_id);
    print_id();
    return 0;
}
```

Each thread sees its own independent copy of `thread_id_value`. The output of the main thread's
`print_id()` call depends on whether it runs before or after the worker threads' calls, but each
thread always sees the value `42` after its own assignment.

## `std::this_thread::get_id()`

`std::this_thread::get_id()` [N4950 §31.4.4.1.6] returns a unique identifier for the current thread.
The return type is `std::thread::id`, which is a lightweight, copyable, and comparable type [N4950
§31.4.4.1.5].

```cpp
#include <iostream>
#include <thread>
#include <unordered_map>

thread_local int local_counter = 0;

void work() {
    ++local_counter;
    std::cout << "Thread " << std::this_thread::get_id()
              << " local_counter = " << local_counter << "\n";
}

int main() {
    std::cout << "Main thread id: " << std::this_thread::get_id() << "\n";

    std::jthread t1([&] {
        work();
        work();
        work();
    });

    std::jthread t2([&] {
        work();
        work();
    });

    return 0;
}
```

## Performance Implications of TLS Access

Thread-local storage access typically involves an extra level of indirection compared to regular
static storage:

1. **On Linux (glibc)**: `thread_local` variables are accessed via the `fs` (or `gs`) segment
   register, which points to the thread's TLS block. Access is typically a single additional memory
   load: `mov rax, fs:[offset]`.

2. **On macOS (Apple platforms)**: Access uses `__builtin_thread_pointer()` and an offset, which is
   similarly efficient.

3. **Initialization cost**: The first access to a `thread_local` variable in each thread triggers
   initialization. The initialization is guarded by a per-thread flag, which adds a branch on each
   access (though the branch is typically well-predicted after the first access).

:::tip For performance-critical code accessed in tight loops, consider caching the thread-local
variable's address in a local variable at the start of the function. The compiler may optimize this
automatically, but explicit caching can help in complex functions. :::

## Initialization Guarantees

Thread-local variables with static initialization are initialized before any function in the same
translation unit is called. Thread-local variables with dynamic initialization (e.g., non-constant
constructors) are initialized on first use in each thread [N4950 §6.8]:

- Initialization is **thread-safe**: the implementation guarantees that exactly one initialization
  occurs per thread, even if multiple threads attempt first access simultaneously.
- If initialization throws an exception, the variable is considered not-initialized and
  initialization will be retried on the next access.

:::warning The order of destruction of thread-local variables is the **reverse of their construction
order** within each thread [N4950 §6.8]. However, if a thread-local variable's destructor accesses
another thread-local variable that has already been destroyed, the behavior is undefined. :::

## Thread-Local Random Number Generator

```cpp
#include <iostream>
#include <thread>
#include <random>
#include <vector>
#include <algorithm>
#include <numeric>

thread_local std::mt19937 rng{std::random_device{}()};

int random_int(int min, int max) {
    std::uniform_int_distribution<int> dist(min, max);
    return dist(rng);
}

int main() {
    constexpr int num_threads = 8;
    constexpr int samples_per_thread = 100'000;

    std::vector<std::pair<long long, long long>> results(num_threads);

    std::vector<std::jthread> threads;
    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back([&results, i] {
            long long sum = 0;
            long long count = 0;
            for (int j = 0; j < samples_per_thread; ++j) {
                sum += random_int(1, 100);
                ++count;
            }
            results[i] = {sum, count};
        });
    }

    long long total_sum = 0;
    long long total_count = 0;
    for (const auto& [s, c] : results) {
        total_sum += s;
        total_count += c;
    }

    double mean = static_cast<double>(total_sum) / total_count;
    std::cout << "Overall mean: " << mean << "\n";
    std::cout << "Expected mean: 50.5\n";
    return 0;
}
```

Each thread has its own `std::mt19937` instance, so there is no contention for the random number
generator. This is both **faster** (no lock contention) and **more correct** (the generator state is
not shared, so the random sequence quality is preserved).

:::tip `thread_local` random number generators are the standard pattern for parallel Monte Carlo
simulations and other embarrassingly parallel stochastic computations. Each thread's generator is
independent, so there are no synchronization overheads or sequence quality concerns. :::

## Summary of Synchronization Primitives

| Primitive                 | C++ Standard      | Use Case                 | Reusable |
| ------------------------- | ----------------- | ------------------------ | -------- |
| `std::mutex`              | C++11 [§31.4.3.3] | Mutual exclusion         | Yes      |
| `std::shared_mutex`       | C++17 [§31.4.3.4] | Reader-writer locking    | Yes      |
| `std::condition_variable` | C++11 [§31.5.4]   | Waiting on conditions    | Yes      |
| `std::latch`              | C++20 [§31.4.4.3] | One-shot barrier         | No       |
| `std::barrier`            | C++20 [§31.4.4.5] | Reusable phase barrier   | Yes      |
| `std::jthread`            | C++20 [§31.4.4.4] | Auto-join + cancellation | N/A      |
| `thread_local`            | C++11 [§6.8]      | Per-thread data          | N/A      |

## See Also

- [Thread Execution (std::jthread) and Hardware Mapping](./1_threads_jthread.md)
- [Data Races and Critical Sections](./2_data_races.md)
- [Mutexes, Shared Locks, and Deadlock Prevention](./3_mutexes_deadlocks.md)
