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

This section covers the `thread_local` keyword, TLS implementation mechanisms, performance
characteristics, initialization guarantees, TLS in thread pools, and practical patterns such as
thread-local random number generators.

## `thread_local` Keyword and Storage Duration

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

## TLS Implementation Mechanisms

Different platforms implement TLS differently, which affects access cost and initialization
behavior.

### `__thread` Keyword (GCC/Clang Extension)

The `__thread` keyword is a compiler extension that provides TLS with static initialization only. It
cannot be used with types that require dynamic initialization (non-trivial constructors).

```cpp
__thread int per_thread_counter = 0;  // Static init only
// __thread std::string str;           // ERROR: dynamic init not supported
```

`__thread` generates efficient code: the variable address is computed from the thread pointer
register with a fixed offset, requiring a single load instruction.

### `pthread_key_create` (POSIX API)

The POSIX `pthread_key_create` API provides general-purpose TLS with destructor support:

```cpp
#include <pthread.h>
#include <stdio.h>

static pthread_key_t tls_key;
static pthread_once_t tls_once = PTHREAD_ONCE_INIT;

static void tls_destructor(void* value) {
    printf("TLS destructor called\n");
    free(value);
}

static void tls_init() {
    pthread_key_create(&tls_key, tls_destructor);
}

void set_tls(int value) {
    pthread_once(&tls_once, tls_init);
    int* ptr = malloc(sizeof(int));
    *ptr = value;
    pthread_setspecific(tls_key, ptr);
}

int get_tls() {
    pthread_once(&tls_once, tls_init);
    int* ptr = pthread_getspecific(tls_key);
    return ptr ? *ptr : -1;
}
```

`pthread_key_create` is slower than `__thread` because it involves a function call and a hash table
lookup. However, it supports dynamic initialization and destruction callbacks.

### Segment Registers on x86-64 (Linux/glibc)

On x86-64 Linux, glibc implements `thread_local` using the `fs` segment register (or `gs` on some
systems). The `fs` register points to the `thread_control_block` (TCB), which contains a pointer to
the TLS area:

```
fs:0x00  -> Thread pointer (TCB)
fs:offset -> TLS variable 1
fs:offset+N -> TLS variable 2
```

Access to a `thread_local` variable with static initialization compiles to:

```asm
mov rax, fs:[tls_offset_for_var]
```

This is a single instruction with a fixed offset, making it nearly as fast as accessing a global
variable. The overhead compared to a regular global is typically 1 extra cycle (the segment register
load).

### Initial Exec vs. General Dynamic TLS Models

The TLS access model determines how the TLS offset is resolved:

- **Initial Exec (IE):** The TLS offset is embedded directly in the code (via a GOT entry resolved
  at load time). Fast access, but the executable cannot be loaded via `dlopen` with new TLS
  variables. Used when the TLS variable is defined in the executable or a library loaded at startup.
- **General Dynamic (GD):** The TLS offset is resolved via a function call (`__tls_get_addr`) at
  runtime. Slower (function call + possible allocation), but works with dynamically loaded
  libraries.

The compiler selects the model based on whether the variable is in the executable, a startup
library, or a dynamically loaded library. The `-ftls-model=initial-exec` flag forces the fast model
when you know the library will not be `dlopen`ed.

## TLS Performance Characteristics

### Access Cost

| TLS Model           | Access Cost                      | Use Case                              |
| :------------------ | :------------------------------- | :------------------------------------ |
| **Initial Exec**    | ~1 cycle (segment register load) | Executables, startup-linked libraries |
| **Local Exec**      | ~0 cycles (offset from TP known) | `thread_local` in the main executable |
| **General Dynamic** | ~20-50 cycles (function call)    | Dynamically loaded libraries (`.so`)  |

### Initialization Overhead

The first access to a `thread_local` variable with dynamic initialization triggers a guard check and
possibly a constructor call. The compiler generates code equivalent to:

```cpp
// Conceptual: what the compiler generates for thread_local std::string s;
static char tls_storage[sizeof(std::string)];
static std::atomic<int> init_guard{0};

std::string& get_s() {
    if (init_guard.load(std::memory_order_acquire) == 0) {
        if (init_guard.exchange(1, std::memory_order_acq_rel) == 0) {
            new (tls_storage) std::string();
            init_guard.store(2, std::memory_order_release);
        } else {
            while (init_guard.load(std::memory_order_acquire) != 2) {
                // spin-wait for initialization
            }
        }
    }
    return *reinterpret_cast<std::string*>(tls_storage);
}
```

This means:

- The first access in each thread has a higher cost (guard check + possible initialization).
- Subsequent accesses are cheap (just the guard check, typically branch-predicted).
- If the constructor throws, initialization is retried on the next access.

:::tip For performance-critical code accessed in tight loops, consider caching the thread-local
variable's address in a local variable at the start of the function. The compiler may optimize this
automatically, but explicit caching can help in complex functions. :::

## `thread_local` with Dynamic Initialization

```cpp
#include <iostream>
#include <thread>
#include <mutex>

struct ExpensiveResource {
    ExpensiveResource() {
        std::cout << "Constructing resource for thread "
                  << std::this_thread::get_id() << "\n";
    }
    ~ExpensiveResource() {
        std::cout << "Destroying resource for thread "
                  << std::this_thread::get_id() << "\n";
    }
    void use() { }
};

thread_local ExpensiveResource resource;

void worker(int id) {
    std::cout << "Thread " << id << " starting\n";
    resource.use();
    std::cout << "Thread " << id << " done\n";
}

int main() {
    std::jthread t1(worker, 1);
    std::jthread t2(worker, 2);
    worker(0);
    return 0;
}
// Output:
// Thread 0 starting
// Constructing resource for thread <main>
// Thread 0 done
// Thread 1 starting
// Constructing resource for thread <t1>
// Thread 1 done
// Thread 2 starting
// Constructing resource for thread <t2>
// Thread 2 done
// Destroying resource for thread <t2>
// Destroying resource for thread <t1>
// Destroying resource for thread <main>
```

Each thread constructs its own `ExpensiveResource` on first use and destroys it when the thread
exits.

## TLS in Thread Pools

Thread pools complicate TLS usage because threads are reused across tasks. A `thread_local` variable
initialized by one task persists into the next task on the same thread:

```cpp
#include <iostream>
#include <thread>
#include <vector>

thread_local int task_context = 0;

void run_task(int task_id) {
    task_context = task_id;
    std::cout << "Task " << task_id << " running on thread "
              << std::this_thread::get_id()
              << " context=" << task_context << "\n";
}

int main() {
    // Simple thread pool with 2 threads
    std::vector<std::jthread> pool(2);

    // Run multiple tasks on each thread
    for (int i = 0; i < 4; ++i) {
        // In a real pool, this would be dispatched to the next available thread
    }
    return 0;
}
```

**Problem:** If task A sets `task_context = 1` and task B runs on the same thread later,
`task_context` still has the value 1 from task A. If task B forgets to reset it, it reads stale
data.

**Solutions:**

1. **Always reset at task start:** Each task explicitly reinitializes TLS at the beginning.
2. **Use RAII wrappers:** Wrap the TLS variable in a scoped guard that resets it on destruction.
3. **Avoid TLS for task-scoped data:** Use a `thread_local` map keyed by task ID instead.

```cpp
// RAII TLS reset guard
template<typename T>
class tls_guard {
    T& var_;
    T old_value_;
public:
    tls_guard(T& var, T new_value) : var_(var), old_value_(var) {
        var_ = new_value;
    }
    ~tls_guard() { var_ = old_value_; }
};

void run_task_safely(int task_id) {
    tls_guard<int> guard(task_context, task_id);
    // task_context is set to task_id here
    // and restored to old value when guard is destroyed
}
```

## Common Pitfalls

### TLS with `std::call_once`

`std::call_once` operates on a shared `std::once_flag`. Combining it with `thread_local` can cause
confusion because the `once_flag` is shared across threads but the `thread_local` variable is not:

```cpp
std::once_flag flag;
thread_local std::vector<int> data;

void init() {
    std::call_once(flag, [] {
        // This runs exactly once globally
        // But which thread's 'data' does it populate?
        data.push_back(42);  // Only the calling thread's data is modified
    });
}
```

The `std::call_once` body runs exactly once, but the `thread_local` variable is per-thread. Other
threads will see an empty `data` vector. Use a regular `static` variable inside `call_once` instead.

### Destruction Order

Thread-local variables are destroyed in the **reverse order of construction** within each thread
[N4950 §6.8]. If a destructor of one `thread_local` variable accesses another `thread_local`
variable that has already been destroyed, the behavior is undefined.

```cpp
thread_local std::string logger_prefix = "INFO";
thread_local Logger logger;  // Destructor may use logger_prefix

// If logger_prefix is destroyed before logger, the destructor
// of logger accessing logger_prefix is UB.
```

**Fix:** Ensure destruction order by declaring variables in the desired destruction order (later
declarations are destroyed first).

### `thread_local` and Detached Threads

If a thread with `thread_local` variables is detached, the variables remain alive until the thread
exits. If the process exits before detached threads complete, the destructors may not run at all.

### TLS and `fork()`

After `fork()`, only the calling thread survives. `thread_local` variables in other threads are not
copied to the child process. The child process has only the forking thread's TLS state. Accessing
TLS variables that were initialized by other threads (before `fork`) may lead to stale or
inconsistent state.

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

:::

:::
