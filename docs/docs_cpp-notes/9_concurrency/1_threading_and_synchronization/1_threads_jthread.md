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

:::tip For CPU-bound work, creating $\approx N_{\text{optimal}}$ threads is a reasonable starting
point. For I/O-bound work, you may benefit from more threads since they spend time waiting rather
than computing. :::

## Joining and Detaching

A `std::thread` object is in one of two states relative to an OS thread [N4950 §31.4.4.1.2]:

- **Joinable**: The thread has not yet been joined or detached.
- **Not joinable**: The thread has been joined, detached, or was default-constructed.

| Operation             | Effect                                                                            | Post-state         |
| --------------------- | --------------------------------------------------------------------------------- | ------------------ |
| `join()`              | Blocks until the thread finishes                                                  | Not joinable       |
| `detach()`            | Separates the thread from the `std::thread` object; the thread runs independently | Not joinable       |
| Destructor (joinable) | Calls `std::terminate()`                                                          | Program terminates |

:::warning Calling `join()` or `detach()` on a thread that is not joinable results in
`std::system_error`. Destroying a joinable `std::thread` calls `std::terminate()` [N4950
§31.4.4.1.3]. Always ensure a thread is either joined or detached before destruction. :::

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

:::info `std::jthread` automatically passes its internal `std::stop_token` as the **first** argument
of the callable if the callable accepts a `std::stop_token` as its first parameter [N4950
§31.4.4.4.2]. :::

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
