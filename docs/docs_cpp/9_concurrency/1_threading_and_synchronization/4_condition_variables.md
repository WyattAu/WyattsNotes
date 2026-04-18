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

### How `wait()` Works Internally

When a thread calls `wait(lock)`, the following sequence occurs:

1. The thread atomically releases the mutex and blocks.
2. When notified (or spuriously woken), the thread re-acquires the mutex before returning.
3. The atomicity of "release mutex + block" is critical — without it, a notification sent between
   the mutex release and the block would be lost.

On Linux, `std::condition_variable` is typically implemented using `pthread_cond_t`, which uses the
futex system call. The mutex is released atomically with the futex wait via `pthread_cond_wait`,
which internally calls `futex_wait` with the mutex address as part of the wait queue.

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

### Why Spurious Wakeups Exist

Spurious wakeups are not a bug — they are a deliberate design choice mandated by hardware and OS
constraints:

1. **POSIX allows them**: The POSIX specification for `pthread_cond_wait` explicitly permits
   spurious wakeups, and C++ condition variables are typically built on top of POSIX primitives.
2. **Performance**: On some architectures, it is cheaper to occasionally spuriously wake a thread
   than to guarantee exact wakeup semantics. The futex system call on Linux may spuriously return
   `EINTR` if a signal is delivered to the waiting thread.
3. **Implementations**: On some platforms, condition variables are implemented using shared memory
   and atomic operations, where distinguishing between a genuine notification and a coincidental
   state change is impractical.

### Lost Wakeup Problem

If `notify_one()` is called before `wait()` begins waiting, the notification is lost and the waiting
thread may block forever. The mutex prevents this: the notifying thread must hold the mutex while
modifying the shared state and calling `notify_one()`. The waiting thread checks the predicate while
holding the mutex. If the predicate is already true, it never calls `wait()`:

```cpp
#include <iostream>
#include <mutex>
#include <condition_variable>
#include <thread>

std::mutex mtx;
std::condition_variable cv;
bool ready = false;

void notifier() {
    std::lock_guard<std::mutex> lk(mtx);
    ready = true;
    cv.notify_one();  // If waiter hasn't reached wait() yet...
}

void waiter() {
    std::unique_lock<std::mutex> lk(mtx);
    // ...the predicate is already true, so wait() returns immediately
    cv.wait(lk, [] { return ready; });
    std::cout << "Ready!\n";
}

int main() {
    std::jthread t1(notifier);
    std::jthread t2(waiter);
    return 0;
}
```

## `std::condition_variable_any`

`std::condition_variable_any` [N4950 §31.5.5] is similar to `std::condition_variable` but can work
with any **Lockable** type (not just `std::unique_lock<std::mutex>`). It may be less efficient than
`std::condition_variable` because it cannot use platform-specific optimizations that rely on
`std::mutex`.

### When to Use `condition_variable_any`

Use `condition_variable_any` when you need to use a non-standard lock type, such as a
`std::shared_mutex` for read-write locking:

```cpp
#include <iostream>
#include <shared_mutex>
#include <condition_variable>
#include <queue>
#include <thread>
#include <string>

class SharedState {
    mutable std::shared_mutex rw_mtx_;
    std::condition_variable_any cv_;
    std::queue<std::string> queue_;

public:
    void push(std::string msg) {
        std::unique_lock<std::shared_mutex> lk(rw_mtx_);
        queue_.push(std::move(msg));
        cv_.notify_one();
    }

    std::string pop() {
        std::unique_lock<std::shared_mutex> lk(rw_mtx_);
        cv_.wait(lk, [this] { return !queue_.empty(); });
        auto msg = std::move(queue_.front());
        queue_.pop();
        return msg;
    }

    bool empty() const {
        std::shared_lock<std::shared_mutex> lk(rw_mtx_);
        return queue_.empty();
    }
};

int main() {
    SharedState state;
    std::jthread producer([&state] {
        for (int i = 0; i < 5; ++i) {
            state.push("message " + std::to_string(i));
        }
    });
    std::jthread consumer([&state](std::stop_token st) {
        int count = 0;
        while (count < 5 && !st.stop_requested()) {
            auto msg = state.pop();
            std::cout << "Got: " << msg << "\n";
            ++count;
        }
    });
    return 0;
}
```

## `wait_for` and `wait_until`: Timed Waits

Condition variables support timed waiting, which is essential for implementing timeouts and
polling-based patterns:

```cpp
#include <iostream>
#include <mutex>
#include <condition_variable>
#include <chrono>

std::mutex mtx;
std::condition_variable cv;
bool data_ready = false;

int main() {
    std::unique_lock<std::mutex> lk(mtx);

    if (cv.wait_for(lk, std::chrono::seconds(2), [] { return data_ready; })) {
        std::cout << "Data ready within timeout\n";
    } else {
        std::cout << "Timeout expired\n";
    }
    return 0;
}
// Output: Timeout expired
```

The predicate version of `wait_for` returns `true` if the predicate became `true` before the
timeout, and `false` if the timeout expired (regardless of whether the predicate is true at that
point). Without the predicate, `wait_for` returns `cv_status::no_timeout` if notified or
`cv_status::timeout` if the timeout expired — spurious wakeups return `no_timeout`, which is another
reason to always use the predicate version.

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

### Notify Outside the Lock: Why It Matters

In the producer-consumer example above, `notify_one()` is called after `lock.unlock()`. This is a
deliberate optimization: if the notification is sent while the lock is held, the woken thread
immediately tries to re-acquire the lock and blocks again, causing an unnecessary context switch. By
notifying after unlocking, the woken thread can acquire the lock immediately.

This pattern is sometimes called "unlock-then-notify":

```cpp
// Pattern: unlock then notify
{
    std::lock_guard<std::mutex> lk(mtx_);
    // modify shared state
}
cv_.notify_one();  // Notify after lock is released
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

### Implementation Details

`std::latch` is typically implemented using an atomic counter and an internal condition variable or
futex. The key invariant is that `count_down` is thread-safe and `wait` blocks until the counter
reaches zero. Once zero, the latch is "done" and all subsequent `wait()` calls return immediately.

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

$$
\mathrm{Phase } k \to \mathrm{completion function} \to \mathrm{Phase } k+1
$$

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

### Completion Function Execution

The completion function in `std::barrier` is executed **exactly once** per phase, by the **last
thread to arrive** at the barrier. This is important: the completion function runs while other
threads are still blocked. The completion function must not block (doing so would prevent other
threads from being released), and it must not throw.

### `arrive_and_drop`: Dynamic Thread Count

`arrive_and_drop()` allows a thread to permanently reduce the expected thread count. This is useful
when worker threads finish early and the remaining threads should synchronize with a smaller group:

```cpp
#include <iostream>
#include <thread>
#include <barrier>
#include <vector>

int main() {
    auto on_phase_complete = [] noexcept {
        std::cout << "Phase complete\n";
    };

    std::barrier b(4, on_phase_complete);

    auto worker = [&](int id) {
        if (id < 2) {
            for (int phase = 0; phase < 3; ++phase) {
                std::cout << "Thread " << id << " phase " << phase << "\n";
                b.arrive_and_wait();
            }
            b.arrive_and_drop();  // Permanently remove this thread from the barrier
        } else {
            for (int phase = 0; phase < 2; ++phase) {
                std::cout << "Thread " << id << " phase " << phase << "\n";
                b.arrive_and_wait();
            }
        }
    };

    std::vector<std::jthread> threads;
    for (int i = 0; i < 4; ++i) {
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

:::info
`std::latch` is single-use: once the count reaches zero, it cannot be reset. Use
`std::barrier` when you need reusable phase synchronization. `std::latch` is ideal for
startup/shutdown patterns and fork-join parallelism [N4950 §31.4.4.3].
:::

## `std::flex_barrier` (C++20 Alternative)

C++20's `std::barrier` with a completion function that returns the next phase's expected count
effectively creates a "flex barrier." The completion function can return a new thread count:

```cpp
#include <iostream>
#include <thread>
#include <barrier>
#include <vector>

int main() {
    // Completion function returns the next phase's thread count
    std::barrier b(4, [] noexcept -> std::ptrdiff_t {
        std::cout << "Phase done. Next phase expects 2 threads.\n";
        return 2;  // Reduce expected threads for next phase
    });

    auto worker = [&](int id) {
        std::cout << "Thread " << id << " arriving at phase 1\n";
        b.arrive_and_wait();
        if (id < 2) {
            std::cout << "Thread " << id << " arriving at phase 2\n";
            b.arrive_and_wait();
        }
    };

    std::vector<std::jthread> threads;
    for (int i = 0; i < 4; ++i) {
        threads.emplace_back(worker, i);
    }
    return 0;
}
```

## Choosing Between Synchronization Primitives

| Requirement                         | Primitive                              | Rationale                       |
| ----------------------------------- | -------------------------------------- | ------------------------------- |
| One-time wait for N events          | `std::latch`                           | Single-use, no reset needed     |
| Reusable phase synchronization      | `std::barrier`                         | Resets automatically per phase  |
| Wait for a condition to become true | `std::condition_variable`              | Flexible, works with predicates |
| Wait for a single event (flag)      | `std::atomic<bool>` + `wait()` (C++20) | No mutex overhead               |
| One-time initialization             | `std::call_once`                       | Guaranteed single execution     |

## Common Pitfalls

### Pitfall 1: Forgetting the Predicate Loop

The single most common bug with condition variables is using `wait(lock)` without a predicate:

```cpp
// BUG: May wake up spuriously before the condition is actually met
cv.wait(lock);
process_data();

// FIX: Always use the predicate version
cv.wait(lock, [] { return data_ready; });
process_data();
```

Without the predicate, a spurious wakeup causes `process_data()` to run with invalid state. This is
a race condition that is extremely difficult to reproduce because it depends on timing.

### Pitfall 2: Notify Without Holding the Lock

While it is correct to notify after releasing the lock (for performance), you must ensure the shared
state modification is protected by the lock:

```cpp
// WRONG: modifying state without lock
ready = true;
cv.notify_one();

// CORRECT: modify under lock, notify outside
{
    std::lock_guard<std::mutex> lk(mtx_);
    ready = true;
}
cv.notify_one();
```

### Pitfall 3: Using `notify_all` When `notify_one` Suffices

`notify_all` wakes every waiting thread, which causes a "thundering herd" problem: all threads wake
up, contend for the mutex, and all but one go back to sleep. Use `notify_one` when only one waiting
thread can make progress:

```cpp
// Producer-consumer: only one consumer should wake per item
cv_.notify_one();  // Correct

// State change that enables multiple waiters to proceed
cv_.notify_all();  // Correct: all waiters can now proceed
```

### Pitfall 4: `std::latch` Count Underflow

Calling `count_down()` more times than the initial count is undefined behavior. The count is
typically an unsigned integer and wraps around, causing `wait()` to never return:

```cpp
std::latch l(2);
l.count_down();
l.count_down();  // Count is now 0
// l.count_down();  // UB: count underflows, latch may never reach zero
l.wait();  // Returns immediately (count is already 0)
```

### Pitfall 5: `std::barrier` with Unequal Thread Counts

If fewer threads arrive at a barrier than the expected count, the waiting threads block forever.
This is a common bug when worker threads exit early (e.g., due to exceptions):

```cpp
std::barrier b(4);

auto worker = [&b, id = 0](int id) mutable {
    if (id == 3) return;  // BUG: one thread doesn't arrive
    b.arrive_and_wait();  // Other threads block forever
};

// Fix: use arrive_and_drop() for early-exiting threads
auto worker_safe = [&b](int id) {
    if (id == 3) {
        b.arrive_and_drop();
        return;
    }
    b.arrive_and_wait();
};
```

:::
