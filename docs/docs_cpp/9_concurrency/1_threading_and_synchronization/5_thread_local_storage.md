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

The `thread_local` keyword [N4950 §6.7.3] specifies that a variable has **thread storage duration**:
a new instance of the variable is created for each thread, and it is destroyed when the thread
exits. The variable is initialized before its first use in each thread.

$$\mathrm{thread\_local } T\, x \implies \forall\, t \in \mathrm{Threads}: \exists!\, x_t$$

Thread-local variables can be declared at namespace scope, at block scope, or as `static` class
members [N4950 §6.7.3]:

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

### Formal Storage Duration Hierarchy

C++ defines four storage durations [N4950 §6.7.3]:

| Storage Duration | Allocation      | Deallocation         | Instance Count |
| :--------------- | :-------------- | :------------------- | :------------- |
| **automatic**    | On block entry  | On block exit        | Per invocation |
| **static**       | Before `main`   | After `main` returns | Exactly one    |
| **thread**       | On thread entry | On thread exit       | Per thread     |
| **dynamic**      | `operator new`  | `operator delete`    | As requested   |

Thread storage duration sits between static and dynamic: like static, the variable persists across
function calls; like dynamic, each thread gets its own independent instance. The standard does not
specify _when_ within a thread's lifetime the storage is allocated, only that it must be available
before the variable's first odr-use [N4950 §6.7.3].

### `thread_local` at Class Scope

When a `static` class member is declared `thread_local`, each thread gets its own copy of that
static member. The member is shared across all instances of the class _within the same thread_:

```cpp
#include <iostream>
#include <thread>

class ThreadCounter {
public:
    static thread_local int count;
    ThreadCounter() { ++count; }
    ~ThreadCounter() { --count; }
};

thread_local int ThreadCounter::count = 0;

void use_counter(int id) {
    ThreadCounter c1;
    ThreadCounter c2;
    std::cout << "Thread " << id << ": count = " << ThreadCounter::count << "\n";
}

int main() {
    std::jthread t1(use_counter, 1);
    std::jthread t2(use_counter, 2);
    use_counter(0);
    return 0;
}
// Each thread prints: count = 2
```

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

### ELF TLS Sections

On ELF platforms (Linux, BSD), `thread_local` variables are stored in special sections of the
executable or shared object:

| Section  | Purpose                                                      |
| :------- | :----------------------------------------------------------- |
| `.tdata` | TLS data for initialized variables (zero-cost: memory image) |
| `.tbss`  | TLS BSS for zero-initialized variables                       |
| `.tbss`  | Thread-local BSS for zero-initialized variables              |

The linker combines `.tdata` and `.tbss` from all participating modules into a **TLS template**
described by the `PT_TLS` program header. Each new thread gets a copy of this template at thread
creation time. The `__tls_get_addr` function is used for dynamically loaded modules where the offset
cannot be computed at load time.

## TLS Performance Characteristics

### Access Cost

| TLS Model           | Access Cost                      | Use Case                              |
| :------------------ | :------------------------------- | :------------------------------------ |
| **Local Exec**      | ~0 cycles (offset from TP known) | `thread_local` in the main executable |
| **Initial Exec**    | ~1 cycle (segment register load) | Executables, startup-linked libraries |
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

:::tip
For performance-critical code accessed in tight loops, consider caching the thread-local
variable's address in a local variable at the start of the function. The compiler may optimize this
automatically, but explicit caching can help in complex functions.
:::

## Initialization Ordering Across Threads

### Proof: When Does `thread_local` Initialization Occur?

We prove that `thread_local` initialization is **eager per thread** and **lazy across threads**.

**Claim:** A `thread_local` variable with dynamic initialization is initialized on first odr-use in
each thread, and not before [N4950 §6.7.3].

**Proof:**

1. [N4950 §6.7.3] states: "A variable with thread storage duration is initialized before its first
   odr-use (6.3)."
2. "Odr-use" is defined in [N4950 §6.3] as any use of a variable's name or reference that requires a
   definition to exist.
3. The standard specifies that the initialization is "performed before its first odr-use" — meaning
   it occurs no later than the first access.
4. The compiler may initialize the variable _earlier_ within the same thread (e.g., at thread
   start), but never in a _different_ thread.
5. Therefore: initialization is guaranteed to occur before the first access in each thread, and no
   cross-thread initialization ordering is guaranteed.

$\square$

### Comparison: `thread_local` vs Function-Local `static`

Function-local `static` variables are initialized exactly once, globally, on first call to the
function. `thread_local` variables are initialized once per thread, on first use in each thread.
This distinction has important consequences:

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <string>

std::string& func_static() {
    static std::string s = "func_static initialized";
    return s;
}

thread_local std::string tls_s = "tls initialized";

void access_both(int id) {
    std::cout << "Thread " << id << ": func_static = " << func_static() << "\n";
    std::cout << "Thread " << id << ": tls_s = " << tls_s << "\n";
}

int main() {
    std::jthread t1(access_both, 1);
    std::jthread t2(access_both, 2);
    access_both(0);
    return 0;
}
```

| Property                       | Function-Local `static`              | `thread_local`                        |
| :----------------------------- | :----------------------------------- | :------------------------------------ |
| Instance count                 | 1 (global)                           | 1 per thread                          |
| Initialization thread          | Whichever thread calls first         | Each thread, independently            |
| Initialization synchronization | Thread-safe (guaranteed by standard) | Thread-safe per thread [N4950 §6.7.3] |
| Destruction                    | After `main` returns                 | When each thread exits                |

The standard guarantees thread-safe initialization for both `static` locals [N4950 §9.8.1] and
`thread_local` variables. The compiler generates a guard variable with atomic operations to ensure
that if two threads race to initialize the same `thread_local` instance (within the same thread's
execution — which cannot happen for `thread_local`), exactly one initialization occurs. For
function-local `static`, this matters because multiple threads can call the function concurrently.

### Dynamic Initialization with `thread_local` and `static` Combined

A `static thread_local` variable combines both storage durations. It is initialized once per thread
but is also shared across all calls within that thread:

```cpp
void example() {
    static thread_local std::vector<int> buffer;
    // Initialized once per thread, persists across calls
    buffer.clear();
    buffer.push_back(42);
}
```

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

## Destruction Ordering and Its Pitfalls

### Destruction Order Guarantee

Thread-local variables are destroyed in the **reverse order of construction** within each thread
[N4950 §6.7.3]. This is analogous to how automatic variables are destroyed in reverse order of
construction when a block scope exits [N4950 §9.3.4].

### Proof: Reverse Destruction Order

**Claim:** If `thread_local` variable `A` is initialized before `thread_local` variable `B` in the
same thread, then `B` is destroyed before `A`.

**Proof:**

1. [N4950 §6.7.3] specifies that thread-local variables with ordered initialization are initialized
   in the order of their definitions.
2. [N4950 §6.7.3] states that destruction of thread-local variables occurs "in the reverse order of
   construction."
3. If `A` is constructed before `B`, then by (2), `B` is destroyed before `A`.

$\square$

### Cross-Translation-Unit Ordering Is Unspecified

The standard does **not** guarantee initialization order of `thread_local` variables across
translation units. This is the same problem as the static initialization order fiasco, but per
thread. If `thread_local` variable `A` in `a.cpp` is initialized before `thread_local` variable `B`
in `b.cpp`, the behavior is unspecified [N4950 §6.7.3]:

```cpp
// a.cpp
thread_local std::string config_key = "default";
// May be initialized before or after logger in b.cpp

// b.cpp
extern thread_local std::string config_key;
thread_local Logger logger;  // Logger constructor may read config_key
```

**Fix:** Use the construct-on-first-use idiom:

```cpp
// a.cpp
thread_local std::string& config_key() {
    static thread_local std::string s = "default";
    return s;
}

// b.cpp
thread_local std::string& config_key();  // declaration
thread_local Logger logger;  // Logger constructor calls config_key()
```

### Interaction with `std::exit()`

When `std::exit()` is called, thread-local variables in threads other than the calling thread are
**not** destroyed [N4950 §6.9.3.4]. Only the calling thread's thread-local variables are destroyed
during the `std::exit()` process. This is because `std::exit()` does not join or terminate other
threads — it simply terminates the process.

## Interaction with Dynamic Loading (`dlopen`)

When a shared library is loaded via `dlopen`, any `thread_local` variables defined in that library
must be initialized for threads that already exist. The implementation uses `__tls_get_addr` for
General Dynamic TLS model to handle this:

```cpp
// mylib.so
thread_local int lib_tls = 42;
```

If `mylib.so` is loaded after threads have been created, those threads will trigger initialization
of `lib_tls` on their first access. The dynamic linker handles this by allocating TLS storage for
the new module and running its initializers lazily.

:::warning
Unloading a shared library (`dlclose`) that contains `thread_local` variables is
dangerous. If any thread still has references to the TLS storage (e.g., via a pointer obtained
before the unload), the behavior is undefined. The standard does not define safe unloading semantics
for TLS [N4950 §6.7.3].
:::

### TLS Slot Exhaustion

POSIX systems limit the number of TLS slots per process via `PTHREAD_KEYS_MAX` (typically 1024).
Each `pthread_key_create` call consumes one slot, and slots are never reclaimed. The C++
`thread_local` keyword does not use `pthread_key_create` (it uses the compiler's TLS mechanism
instead), but libraries that use the POSIX API directly can exhaust the limit.

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
[N4950 §6.7.3]. If a destructor of one `thread_local` variable accesses another `thread_local`
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

### TLS in `constexpr` Contexts

`thread_local` variables cannot be used in `constexpr` functions because `constexpr` evaluation
occurs at compile time, where threads do not exist. A `thread_local` variable is inherently a
runtime construct [N4950 §6.7.3].

### Performance Pitfall: Dynamic Initialization in Hot Paths

If a `thread_local` variable with a non-trivial constructor is accessed for the first time inside a
tight loop, the initialization cost is paid on the first iteration. This is usually fine, but if the
constructor acquires a lock or performs I/O, the cost can be significant:

```cpp
thread_local std::mt19937 rng{std::random_device{}()};

void hot_path() {
    // First call triggers construction of rng + random_device
    // Subsequent calls are cheap
    int v = std::uniform_int_distribution<int>{0, 100}(rng);
}
```

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

:::tip
`thread_local` random number generators are the standard pattern for parallel Monte Carlo
simulations and other embarrassingly parallel stochastic computations. Each thread's generator is
independent, so there are no synchronization overheads or sequence quality concerns.
:::

## Thread-Local Memory Pool (Advanced Pattern)

A common performance pattern is to use `thread_local` to implement a per-thread memory pool,
avoiding contention on a global allocator:

```cpp
#include <iostream>
#include <thread>
#include <vector>
#include <new>

class ThreadLocalPool {
    static constexpr std::size_t BLOCK_SIZE = 4096;
    struct Block {
        alignas(std::max_align_t) char data[BLOCK_SIZE];
        Block* next = nullptr;
    };

    static thread_local Block* head;
    static thread_local char* current;
    static thread_local char* end;

public:
    static void* allocate(std::size_t n) {
        n = (n + alignof(std::max_align_t) - 1) & ~(alignof(std::max_align_t) - 1);
        if (current + n > end) {
            Block* block = new Block();
            block->next = head;
            head = block;
            current = block->data;
            end = current + BLOCK_SIZE;
        }
        void* ptr = current;
        current += n;
        return ptr;
    }

    static void deallocate_all() {
        while (head) {
            Block* next = head->next;
            delete head;
            head = next;
        }
        current = nullptr;
        end = nullptr;
    }
};

thread_local ThreadLocalPool::Block* ThreadLocalPool::head = nullptr;
thread_local char* ThreadLocalPool::current = nullptr;
thread_local char* ThreadLocalPool::end = nullptr;

struct PooledObject {
    int data[16];
    static void* operator new(std::size_t n) {
        return ThreadLocalPool::allocate(n);
    }
};

void pooled_work(int count) {
    std::vector<PooledObject*> objs;
    objs.reserve(count);
    for (int i = 0; i < count; ++i) {
        objs.push_back(new PooledObject{});
    }
    for (auto* p : objs) delete p;
    ThreadLocalPool::deallocate_all();
}

int main() {
    constexpr int count = 10000;
    std::vector<std::jthread> threads;
    for (int i = 0; i < 4; ++i) {
        threads.emplace_back(pooled_work, count);
    }
    return 0;
}
```

This pattern provides fast bump-pointer allocation within each thread, completely eliminating
allocator contention. The trade-off is that individual deallocations are not supported — only bulk
deallocation of the entire pool.

## Summary of Synchronization Primitives

| Primitive                 | C++ Standard      | Use Case                 | Reusable |
| ------------------------- | ----------------- | ------------------------ | -------- |
| `std::mutex`              | C++11 [§31.4.3.3] | Mutual exclusion         | Yes      |
| `std::shared_mutex`       | C++17 [§31.4.3.4] | Reader-writer locking    | Yes      |
| `std::condition_variable` | C++11 [§31.5.4]   | Waiting on conditions    | Yes      |
| `std::latch`              | C++20 [§31.4.4.3] | One-shot barrier         | No       |
| `std::barrier`            | C++20 [§31.4.4.5] | Reusable phase barrier   | Yes      |
| `std::jthread`            | C++20 [§31.4.4.4] | Auto-join + cancellation | N/A      |
| `thread_local`            | C++11 [§6.7.3]    | Per-thread data          | N/A      |

## See Also

- [Thread Execution (std::jthread) and Hardware Mapping](./1_threads_jthread.md)
- [Data Races and Critical Sections](./2_data_races.md)
- [Mutexes, Shared Locks, and Deadlock Prevention](./3_mutexes_deadlocks.md)
