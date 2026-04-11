---
title: Thread Execution (std::jthread) and Hardware Mapping
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: threads-jthread-hardware-mapping
---

# Thread Execution (`std::jthread`) and Hardware Mapping

This section covers thread creation with `std::thread` and `std::jthread`, hardware concurrency
detection, join/detach semantics, RAII-based thread guards, cooperative cancellation via
`std::stop_token`, and a thread-safe worker pool implementation.

## `std::thread` and `std::jthread`

`std::thread` [N4950 §31.4.4.1] represents an individual thread of execution. When a `std::thread`
object is constructed, it begins executing the provided callable. The thread callable can be a
function pointer, a lambda, a functor, or any movable callable object [N4950 §31.4.4.1.2].

`std::jthread` [N4950 §31.4.4.4] was introduced in C++20 and provides the same functionality as
`std::thread` with two critical enhancements:

1. **Automatic joining**: The destructor calls `join()` if the thread is still joinable, preventing
   accidental detachment or termination.
2. **Cooperative cancellation**: A `std::stop_token` is automatically created and can be passed to
   the thread's callable, enabling request-based cancellation.

```cpp
#include <iostream>
#include <thread>
#include <chrono>

void compute(int id) {
    std::cout << "Thread " << id << " running on hardware\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(100));
    std::cout << "Thread " << id << " done\n";
}

int main() {
    std::thread t1(compute, 1);
    std::thread t2(compute, 2);

    t1.join();
    t2.join();

    std::cout << "All threads joined\n";
    return 0;
}
```

## Hardware Threads vs Software Threads

A **hardware thread** (also called a logical core) is a physical execution unit on the CPU. Modern
CPUs expose multiple hardware threads per core via simultaneous multithreading (SMT, e.g., Intel
Hyper-Threading).

A **software thread** is an OS-level thread managed by the scheduler. The OS maps software threads
onto hardware threads. When the number of software threads exceeds hardware threads, the scheduler
performs context switching.

`std::thread::hardware_concurrency()` [N4950 §31.4.4.1.4] returns the number of concurrent threads
supported by the implementation. This value approximates the number of hardware threads available:

$$N_{\text{optimal}} = \text{std::thread::hardware\_concurrency}()$$

```cpp
#include <iostream>
#include <thread>

int main() {
    unsigned int hw_threads = std::thread::hardware_concurrency();
    std::cout << "Hardware concurrency: " << hw_threads << "\n";
    return 0;
}
```

:::tip
For CPU-bound work, creating $\approx N_{\text{optimal}}$ threads is a reasonable starting
point. For I/O-bound work, you may benefit from more threads since they spend time waiting rather
than computing.
:::

## Joining and Detaching

A `std::thread` object is in one of two states relative to an OS thread [N4950 §31.4.4.1.2]:

- **Joinable**: The thread has not yet been joined or detached.
- **Not joinable**: The thread has been joined, detached, or was default-constructed.

| Operation             | Effect                                                                            | Post-state         |
| --------------------- | --------------------------------------------------------------------------------- | ------------------ |
| `join()`              | Blocks until the thread finishes                                                  | Not joinable       |
| `detach()`            | Separates the thread from the `std::thread` object; the thread runs independently | Not joinable       |
| Destructor (joinable) | Calls `std::terminate()`                                                          | Program terminates |

:::warning
Calling `join()` or `detach()` on a thread that is not joinable results in
`std::system_error`. Destroying a joinable `std::thread` calls `std::terminate()` [N4950
§31.4.4.1.3]. Always ensure a thread is either joined or detached before destruction.
:::

## RAII-Based Thread Guard

Before C++20's `std::jthread`, a common pattern was to write an RAII wrapper that joins in its
destructor:

```cpp
#include <thread>

class thread_guard {
    std::thread& t;
public:
    explicit thread_guard(std::thread& t_) : t(t_) {}

    ~thread_guard() {
        if (t.joinable()) {
            t.join();
        }
    }

    thread_guard(const thread_guard&) = delete;
    thread_guard& operator=(const thread_guard&) = delete;
};

#include <iostream>

void work(int id) {
    std::cout << "Work " << id << "\n";
}

int main() {
    std::thread t(work, 42);
    thread_guard g(t);

    // If an exception is thrown here, ~thread_guard ensures join()
    return 0;
}
```

## `std::jthread` with Cooperative Cancellation via `std::stop_token`

`std::stop_token` [N4950 §31.4.4.6] is a non-owning handle to a `std::stop_source`. A thread can
periodically check whether a stop has been requested and exit cooperatively.

Key types in the stop-token mechanism [N4950 §31.4.4.6]:

| Type                 | Role                                                |
| -------------------- | --------------------------------------------------- |
| `std::stop_token`    | Query-only handle; passed to worker threads         |
| `std::stop_source`   | Ownership handle; used to request stop              |
| `std::stop_callback` | Registers a callback invoked when stop is requested |

```cpp
#include <iostream>
#include <thread>
#include <chrono>
#include <vector>

void worker(std::stop_token stoken, int id) {
    int count = 0;
    while (!stoken.stop_requested()) {
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
        ++count;
        std::cout << "Worker " << id << ": tick " << count << "\n";
    }
    std::cout << "Worker " << id << ": stopping after " << count << " ticks\n";
}

int main() {
    std::vector<std::jthread> threads;

    for (int i = 0; i < 4; ++i) {
        threads.emplace_back(worker, i);
    }

    std::this_thread::sleep_for(std::chrono::milliseconds(500));

    for (auto& t : threads) {
        t.request_stop();
    }

    // jthread destructor joins automatically
    return 0;
}
```

:::info
`std::jthread` automatically passes its internal `std::stop_token` as the **first** argument
of the callable if the callable accepts a `std::stop_token` as its first parameter [N4950
§31.4.4.4.2].
:::

## Thread-Safe Worker Pool with `jthread` + `stop_token`

The following example implements a simple thread pool using `std::jthread` for automatic lifecycle
management and `std::stop_token` for graceful shutdown:

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <queue>
#include <functional>
#include <vector>

class thread_pool {
public:
    explicit thread_pool(unsigned int num_threads)
        : stop_(false)
    {
        for (unsigned int i = 0; i < num_threads; ++i) {
            workers_.emplace_back([this](std::stop_token stoken) {
                worker_loop(stoken);
            });
        }
    }

    ~thread_pool() {
        for (auto& t : workers_) {
            t.request_stop();
        }
        {
            std::lock_guard<std::mutex> lk(mutex_);
            stop_ = true;
        }
        cv_.notify_all();
    }

    void submit(std::function<void()> task) {
        {
            std::lock_guard<std::mutex> lk(mutex_);
            tasks_.push(std::move(task));
        }
        cv_.notify_one();
    }

private:
    void worker_loop(std::stop_token stoken) {
        while (true) {
            std::function<void()> task;
            {
                std::unique_lock<std::mutex> lk(mutex_);
                cv_.wait(lk, [this, &stoken] {
                    return stoken.stop_requested() || !tasks_.empty();
                });

                if (stoken.stop_requested() && tasks_.empty()) {
                    return;
                }

                task = std::move(tasks_.front());
                tasks_.pop();
            }
            task();
        }
    }

    std::vector<std::jthread> workers_;
    std::queue<std::function<void()>> tasks_;
    std::mutex mutex_;
    std::condition_variable cv_;
    bool stop_;
};

int main() {
    thread_pool pool(4);

    for (int i = 0; i < 10; ++i) {
        pool.submit([i] {
            std::cout << "Task " << i << " on thread "
                      << std::this_thread::get_id() << "\n";
        });
    }

    std::this_thread::sleep_for(std::chrono::seconds(1));
    return 0;
}
```

## See Also

- [Data Races and Critical Sections](./2_data_races.md)
- [Mutexes, Shared Locks, and Deadlock Prevention](./3_mutexes_deadlocks.md)
- [Condition Variables, Latches, and Barriers](./4_condition_variables.md)

## Thread Identifier and Native Handle

Each `std::thread` and `std::jthread` has a unique identifier of type `std::thread::id` and can
expose the underlying OS thread handle for platform-specific operations [N4950 §31.4.4.1.4]:

```cpp
#include <iostream>
#include <thread>

void thread_id_demo() {
    std::cout << "Main thread id: " << std::this_thread::get_id() << "\n";

    std::jthread t([] {
        std::cout << "Worker thread id: " << std::this_thread::get_id() << "\n";
    });

    std::cout << "Worker thread id (from main): " << t.get_id() << "\n";

    t.join();
    std::cout << "After join, id: " << t.get_id() << "\n";
    // After join, id: thread::id of a non-executing thread (default-constructed)
}
```

The `native_handle()` method returns the platform-specific thread handle:

```cpp
#include <iostream>
#include <thread>

void native_handle_demo() {
    std::jthread t([] {
        std::cout << "Worker running\n";
    });

    auto handle = t.native_handle();
    // POSIX: handle is pthread_t — can use with pthread_setaffinity_np, pthread_setname_np, etc.
    // Windows: handle is HANDLE — can use with SetThreadAffinityMask, SetThreadPriority, etc.

    // Example (POSIX only): set thread name
    // pthread_setname_np(handle, "worker-thread");

    t.join();
}
```

:::warning
`native_handle()` is optional — the C++ standard allows it to return a default value if
the implementation does not support native handles. Always check the documentation for your standard
library implementation. Code using `native_handle()` is inherently non-portable.
:::

## Thread Arguments and Race Conditions

Arguments to `std::thread` are passed by value (moved or copied) into the new thread's stack. This
prevents dangling references to local variables:

```cpp
#include <iostream>
#include <string>
#include <thread>

void race_condition_demo() {
    std::string msg = "hello";

    // SAFE: msg is copied into the thread's argument storage
    std::jthread t1([](std::string s) {
        std::cout << "Thread 1: " << s << "\n";
    }, msg);  // msg is COPIED, not referenced

    // UNSAFE: reference to local variable
    // std::jthread t2([](const std::string& s) {
    //     std::cout << "Thread 2: " << s << "\n";  // may crash if t2 runs after scope exit
    // }, std::cref(msg));  // DANGEROUS: dangling reference if thread outlives scope

    // SAFE with std::ref — but only if you guarantee the scope outlives the thread
    std::jthread t3([](std::string& s) {
        s = "modified by thread";
    }, std::ref(msg));

    t1.join();
    t3.join();

    std::cout << "After thread 3: " << msg << "\n";
    // After thread 3: modified by thread
}
```

:::warning
The default behavior copies arguments into internal storage **before** the thread starts
executing. This means even if the original variable is destroyed before the thread accesses it, the
copy is safe. However, if you explicitly pass `std::ref` or `std::cref`, you bypass this protection
and must ensure the referenced object outlives the thread.
:::

## `std::jthread` with Return Value via `std::promise`

`std::jthread`'s callable does not return a value directly. To get a return value from a thread, use
`std::promise` and `std::future` [N4950 §31.6]:

```cpp
#include <chrono>
#include <future>
#include <iostream>
#include <numeric>
#include <vector>

std::future<int> launch_async_sum(std::vector<int> data) {
    std::promise<int> promise;
    auto future = promise.get_future();

    std::jthread t([data = std::move(data), promise = std::move(promise)]() mutable {
        int sum = std::accumulate(data.begin(), data.end(), 0);
        promise.set_value(sum);
    });

    // Detach the thread — the promise captures all needed state
    // The thread will complete and set the promise value
    t.detach();

    return future;
}

void promise_future_demo() {
    std::vector<int> data(1'000'000);
    std::iota(data.begin(), data.end(), 1);

    auto future = launch_async_sum(std::move(data));

    std::cout << "Waiting for result...\n";
    int result = future.get();
    std::cout << "Sum: " << result << "\n";
    // Sum: 500000500000
}
```

:::info
When a `std::jthread` is detached, it runs independently. The `std::promise` (or
`std::shared_ptr` to captured data) keeps the necessary state alive until the thread completes.
However, detached threads are hard to reason about — you cannot join them, and they may outlive
`main()`, causing undefined behavior. Prefer joining whenever possible.
:::

## `std::stop_callback` — Reactive Cancellation

`std::stop_callback` registers a callback that is invoked when `stop_requested()` becomes true
[N4950 §31.4.4.6]. This is useful for cleaning up resources or signaling other subsystems when a
stop is requested:

```cpp
#include <iostream>
#include <stop_token>
#include <thread>
#include <vector>

void stop_callback_demo() {
    std::jthread worker([](std::stop_token stoken) {
        // Register a callback that fires when stop is requested
        std::stop_callback cb(stoken, [] {
            std::cout << "[callback] Stop requested! Cleaning up...\n";
        });

        int count = 0;
        while (!stoken.stop_requested()) {
            std::this_thread::sleep_for(std::chrono::milliseconds(50));
            ++count;
        }
        std::cout << "Worker stopped after " << count << " ticks\n";
    });

    std::this_thread::sleep_for(std::chrono::milliseconds(200));
    worker.request_stop();
    // jthread destructor joins automatically, ensuring the callback runs
}
```

:::warning
`std::stop_callback`'s destructor deregisters the callback. If the `stop_callback` object
is destroyed before the stop is requested, the callback will never fire. Ensure the `stop_callback`
object outlives the expected stop request. The callback itself is invoked synchronously from the
thread that calls `request_stop()`, not from the worker thread.
:::

## Thread Stack Size

Each OS thread has a stack with a default size that varies by platform:

| Platform      | Default Stack Size              | Configuration Method                       |
| :------------ | :------------------------------ | :----------------------------------------- |
| Linux (glibc) | 8 MB                            | `pthread_attr_setstacksize` or `ulimit -s` |
| macOS         | 8 MB (main), 512 KB (secondary) | `pthread_attr_setstacksize`                |
| Windows       | 1 MB                            | `/STACK:` linker flag or `CreateThread`    |

For applications that create many threads (e.g., thread pools with hundreds of workers), the default
stack size can exhaust virtual memory. On Linux, you can check and adjust the stack size:

```cpp
#include <iostream>
#include <pthread.h>
#include <thread>

void stack_size_info() {
    pthread_attr_t attr;
    pthread_attr_init(&attr);
    pthread_getattr_np(pthread_self(), &attr);

    std::size_t stack_size;
    void* stack_addr;
    pthread_attr_getstack(&attr, &stack_addr, &stack_size);

    std::cout << "Stack size: " << stack_size / 1024 << " KB\n";
    pthread_attr_destroy(&attr);
}
```

:::warning
If a thread exceeds its stack size, the result is a stack overflow — typically a
`SIGSEGV` on POSIX or an access violation on Windows. This is especially common with deep recursion
or large local variables in thread functions. Use heap allocation for large buffers, not stack
allocation.
:::

## `std::jthread` Constructor Variants

`std::jthread` supports several constructor forms [N4950 §31.4.4.4.1]:

```cpp
#include <iostream>
#include <thread>

void constructor_variants() {
    // Default constructor: no associated thread
    std::jthread empty;
    std::cout << "Joinable: " << empty.joinable() << "\n";  // false

    // With callable and arguments
    std::jthread t1([](int a, double b) {
        std::cout << "Args: " << a << ", " << b << "\n";
    }, 42, 3.14);

    // Move construction
    std::jthread t2 = std::move(t1);
    std::cout << "t1 joinable: " << t1.joinable() << "\n";  // false (moved)
    std::cout << "t2 joinable: " << t2.joinable() << "\n";  // true

    // t2.join() called automatically by destructor
}
```

## Common Pitfalls

1. **Destroying a joinable `std::thread`:** This calls `std::terminate()`. Always join or detach
   before destruction. This is the primary motivation for using `std::jthread`, which joins
   automatically.

2. **Detaching threads with references to locals:** A detached thread that references local
   variables from the creating scope will access dangling memory after the scope exits. Either join
   the thread, or ensure all referenced data outlives the thread (e.g., via `shared_ptr`).

3. **Calling `request_stop()` after `jthread` is joined:** `request_stop()` is safe to call at any
   time — it is a no-op if the stop has already been requested. The `jthread` destructor calls
   `request_stop()` followed by `join()`, so the stop is always requested before joining.

4. **`stop_token` is not a cancellation mechanism:** `stop_token` implements cooperative
   cancellation — the worker must periodically check `stop_requested()`. If the worker blocks
   indefinitely (e.g., on I/O or a mutex), `request_stop()` alone cannot interrupt it. Use condition
   variables with timeouts or OS-specific cancellation for truly interruptible waits.

5. **`hardware_concurrency()` returns 0 when unknown:** On some embedded systems, this function
   returns 0 (meaning the implementation cannot determine the value). Always handle this case:
   `auto n = std::thread::hardware_concurrency(); if (n == 0) n = 4; /* fallback */`

6. **Thread function exceptions:** If an exception escapes the thread's callable, `std::terminate()`
   is called. Use `std::promise` to transport exceptions to the joining thread, or catch all
   exceptions inside the thread function and store them.

:::

:::

:::

:::

:::

:::

:::

:::
