---
title: Condition Variables, Latches, and Barriers
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: condition-variables-latches-barriers
---

# Condition Variables, Latches, and Barriers

This section covers `std::condition_variable` and `std::condition_variable_any`, spurious wakeups,
producer-consumer patterns, and the C++20 synchronization primitives `std::latch` and `std::barrier`
for one-shot and reusable phase synchronization.

## `std::condition_variable`

`std::condition_variable` [N4950 §31.5.4] provides a mechanism for threads to wait until a shared
condition is met. It always works with a `std::unique_lock<std::mutex>`.

Key operations:

| Operation          | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `wait(lock)`       | Releases the lock, blocks the thread, re-acquires the lock on wakeup |
| `wait(lock, pred)` | Equivalent to `while (!pred()) wait(lock);`                          |
| `notify_one()`     | Wakes one waiting thread                                             |
| `notify_all()`     | Wakes all waiting threads                                            |

## Spurious Wakeups and the Predicate Loop

A **spurious wakeup** is an unwarranted wakeup where `wait()` returns even though no `notify_one()`
or `notify_all()` was called. The C++ standard explicitly permits this [N4950 §31.5.4.1]:

> "Calls to functions that unblock the execution of any of the threads blocked on a condition
> variable may unblock zero or more threads that are blocked on that condition variable."

Because of spurious wakeups, the predicate-overloaded version of `wait()` must always be used:

```cpp
// WRONG: vulnerable to spurious wakeups
cv.wait(lock);

// CORRECT: predicate version handles spurious wakeups
cv.wait(lock, [this] { return !queue_.empty(); });
```

The predicate version is equivalent to [N4950 §31.5.4.1]:

```cpp
while (!pred()) {
    wait(lock);
}
```

## `std::condition_variable_any`

`std::condition_variable_any` [N4950 §31.5.5] is similar to `std::condition_variable` but can work
with any **Lockable** type (not just `std::unique_lock<std::mutex>`). It may be less efficient than
`std::condition_variable` because it cannot use platform-specific optimizations that rely on
`std::mutex`.

## Producer-Consumer with Condition Variable

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <queue>
#include <string>
#include <chrono>

template <typename T>
class thread_safe_queue {
    std::queue<T> queue_;
    std::mutex mutex_;
    std::condition_variable cv_not_empty_;
    std::condition_variable cv_not_full_;
    size_t max_size_;

public:
    explicit thread_safe_queue(size_t max_size = 100)
        : max_size_(max_size) {}

    void push(T value) {
        std::unique_lock<std::mutex> lock(mutex_);
        cv_not_full_.wait(lock, [this] {
            return queue_.size() < max_size_;
        });
        queue_.push(std::move(value));
        lock.unlock();
        cv_not_empty_.notify_one();
    }

    T pop() {
        std::unique_lock<std::mutex> lock(mutex_);
        cv_not_empty_.wait(lock, [this] {
            return !queue_.empty();
        });
        T value = std::move(queue_.front());
        queue_.pop();
        lock.unlock();
        cv_not_full_.notify_one();
        return value;
    }

    bool try_pop(T& value, std::chrono::milliseconds timeout) {
        std::unique_lock<std::mutex> lock(mutex_);
        if (!cv_not_empty_.wait_for(lock, timeout, [this] {
            return !queue_.empty();
        })) {
            return false;
        }
        value = std::move(queue_.front());
        queue_.pop();
        lock.unlock();
        cv_not_full_.notify_one();
        return true;
    }
};

int main() {
    thread_safe_queue<int> q(10);

    std::jthread producer([&q] {
        for (int i = 0; i < 20; ++i) {
            q.push(i);
            std::cout << "Produced: " << i << "\n";
            std::this_thread::sleep_for(std::chrono::milliseconds(50));
        }
    });

    std::jthread consumer([&q](std::stop_token stoken) {
        int count = 0;
        while (!stoken.stop_requested() || count < 20) {
            int value;
            if (q.try_pop(value, std::chrono::milliseconds(200))) {
                std::cout << "Consumed: " << value << "\n";
                ++count;
            }
        }
    });

    std::this_thread::sleep_for(std::chrono::seconds(3));
    return 0;
}
```

## `std::latch` (C++20)

`std::latch` [N4950 §31.4.4.3] is a one-shot synchronization primitive. It is initialized with a
count and threads decrement the count. When the count reaches zero, all threads waiting on the latch
are unblocked.

| Operation            | Description                           |
| -------------------- | ------------------------------------- |
| `count_down(n)`      | Decrements the counter by `n`         |
| `wait()`             | Blocks until the counter reaches zero |
| `arrive_and_wait(n)` | Decrements by `n` and then waits      |
| `try_wait()`         | Returns `true` if the counter is zero |

A latch is useful for **one-time barriers** such as waiting for all worker threads to finish
initialization before proceeding.

## `std::barrier` (C++20)

`std::barrier` [N4950 §31.4.4.5] is a reusable synchronization point. Unlike `std::latch`, a barrier
resets its counter after all threads arrive, allowing it to be reused across multiple phases.

| Operation           | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `arrive(arrival)`   | Decrements the expected count                         |
| `wait()`            | Blocks until all threads have arrived                 |
| `arrive_and_wait()` | Arrives and then waits                                |
| `arrive_and_drop()` | Arrives and permanently decrements the expected count |

The barrier can accept a **completion function** that is executed once when all threads arrive,
before any waiting thread is released:

$$\text{Phase } k \to \text{completion function} \to \text{Phase } k+1$$

## Barrier Synchronization for Parallel Computation

```cpp
#include <iostream>
#include <thread>
#include <barrier>
#include <vector>
#include <numeric>
#include <chrono>

int main() {
    constexpr int num_threads = 4;
    constexpr int num_phases = 5;

    std::vector<int> partial_sums(num_threads, 0);
    std::barrier sync_point(num_threads, [&partial_sums] noexcept {
        int total = std::accumulate(partial_sums.begin(), partial_sums.end(), 0);
        std::cout << "Phase total: " << total << "\n";
        std::fill(partial_sums.begin(), partial_sums.end(), 0);
    });

    auto worker = [&](int id, std::stop_token stoken) {
        for (int phase = 0; phase < num_phases && !stoken.stop_requested(); ++phase) {
            int work = (id + 1) * (phase + 1) * 10;
            partial_sums[id] = work;
            std::cout << "  Thread " << id << " phase " << phase
                      << " contributed " << work << "\n";
            sync_point.arrive_and_wait();
        }
    };

    std::vector<std::jthread> threads;
    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back(worker, i);
    }

    return 0;
}
```

## `std::latch` Example: Startup Synchronization

```cpp
#include <iostream>
#include <thread>
#include <latch>
#include <vector>
#include <chrono>
#include <syncstream>

int main() {
    constexpr int num_workers = 4;
    std::latch startup_latch(num_workers + 1);
    std::latch done_latch(num_workers);

    std::vector<std::jthread> workers;
    for (int i = 0; i < num_workers; ++i) {
        workers.emplace_back([&startup_latch, &done_latch, i] {
            std::osyncstream(std::cout) << "Worker " << i << " initializing\n";
            std::this_thread::sleep_for(std::chrono::milliseconds(100 * (i + 1)));
            std::osyncstream(std::cout) << "Worker " << i << " ready\n";
            startup_latch.count_down();

            startup_latch.wait();

            std::osyncstream(std::cout) << "Worker " << i << " processing\n";
            std::this_thread::sleep_for(std::chrono::milliseconds(50));
            done_latch.count_down();
        });
    }

    startup_latch.wait();
    std::cout << "All workers initialized. Starting work.\n";

    done_latch.wait();
    std::cout << "All workers finished.\n";
    return 0;
}
```

:::info `std::latch` is single-use: once the count reaches zero, it cannot be reset. Use
`std::barrier` when you need reusable phase synchronization. `std::latch` is ideal for
startup/shutdown patterns and fork-join parallelism [N4950 §31.4.4.3]. :::

## See Also

- [Mutexes, Shared Locks, and Deadlock Prevention](./3_mutexes_deadlocks.md)
- [Thread-Local Storage (TLS)](./5_thread_local_storage.md)
- [Thread Execution (std::jthread) and Hardware Mapping](./1_threads_jthread.md)
