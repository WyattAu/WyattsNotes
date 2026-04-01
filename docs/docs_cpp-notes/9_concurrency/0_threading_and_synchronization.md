---
title: Threading and Synchronization
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: threading-and-synchronization
---

# Threading and Synchronization

Concurrency in C++ is defined by the standard through a memory model [N4950 §6.9] and a thread library [N4950 §31.4]. This chapter covers thread creation, synchronization primitives, and the correctness properties they provide.

## 1. Thread Execution (`std::jthread`) and Hardware Mapping

### `std::thread` and `std::jthread`

`std::thread` [N4950 §31.4.4.1] represents an individual thread of execution. When a `std::thread` object is constructed, it begins executing the provided callable. The thread callable can be a function pointer, a lambda, a functor, or any movable callable object [N4950 §31.4.4.1.2].

`std::jthread` [N4950 §31.4.4.4] was introduced in C++20 and provides the same functionality as `std::thread` with two critical enhancements:

1. **Automatic joining**: The destructor calls `join()` if the thread is still joinable, preventing accidental detachment or termination.
2. **Cooperative cancellation**: A `std::stop_token` is automatically created and can be passed to the thread's callable, enabling request-based cancellation.

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

### Hardware Threads vs Software Threads

A **hardware thread** (also called a logical core) is a physical execution unit on the CPU. Modern CPUs expose multiple hardware threads per core via simultaneous multithreading (SMT, e.g., Intel Hyper-Threading).

A **software thread** is an OS-level thread managed by the scheduler. The OS maps software threads onto hardware threads. When the number of software threads exceeds hardware threads, the scheduler performs context switching.

`std::thread::hardware_concurrency()` [N4950 §31.4.4.1.4] returns the number of concurrent threads supported by the implementation. This value approximates the number of hardware threads available:

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
For CPU-bound work, creating $\approx N_{\text{optimal}}$ threads is a reasonable starting point. For I/O-bound work, you may benefit from more threads since they spend time waiting rather than computing.
:::

### Joining and Detaching

A `std::thread` object is in one of two states relative to an OS thread [N4950 §31.4.4.1.2]:

- **Joinable**: The thread has not yet been joined or detached.
- **Not joinable**: The thread has been joined, detached, or was default-constructed.

| Operation             | Effect                                                                            | Post-state         |
| --------------------- | --------------------------------------------------------------------------------- | ------------------ |
| `join()`              | Blocks until the thread finishes                                                  | Not joinable       |
| `detach()`            | Separates the thread from the `std::thread` object; the thread runs independently | Not joinable       |
| Destructor (joinable) | Calls `std::terminate()`                                                          | Program terminates |

:::warning
Calling `join()` or `detach()` on a thread that is not joinable results in `std::system_error`. Destroying a joinable `std::thread` calls `std::terminate()` [N4950 §31.4.4.1.3]. Always ensure a thread is either joined or detached before destruction.
:::

### RAII-Based Thread Guard

Before C++20's `std::jthread`, a common pattern was to write an RAII wrapper that joins in its destructor:

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

### `std::jthread` with Cooperative Cancellation via `std::stop_token`

`std::stop_token` [N4950 §31.4.4.6] is a non-owning handle to a `std::stop_source`. A thread can periodically check whether a stop has been requested and exit cooperatively.

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
`std::jthread` automatically passes its internal `std::stop_token` as the **first** argument of the callable if the callable accepts a `std::stop_token` as its first parameter [N4950 §31.4.4.4.2].
:::

### Thread-Safe Worker Pool with `jthread` + `stop_token`

The following example implements a simple thread pool using `std::jthread` for automatic lifecycle management and `std::stop_token` for graceful shutdown:

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

---

## 2. Data Races and Critical Sections

### Data Race Definition

A **data race** [N4950 §6.9.4.2] occurs when two or more threads access the same memory location concurrently, at least one of them performs a write, and there is no happens-before relationship between the accesses. Formally, a data race is present when all three conditions hold:

$$\text{Data Race} \iff \exists\, m, t_1, t_2 : \text{access}(t_1, m, w) \wedge \text{access}(t_2, m, r/w) \wedge \neg\text{happens-before}(t_1, t_2) \wedge \neg\text{happens-before}(t_2, t_1)$$

where $m$ is a scalar memory location, $w$ denotes a write, $r$ denotes a read, and happens-before is the order relation defined in [N4950 §6.9.4.1].

:::warning
If a C++ program contains a data race, it has **undefined behavior** [N4950 §6.9.4.2]. The compiler is free to assume no data races exist and may optimize accordingly, potentially eliminating loads, stores, or reordering operations in ways that are surprising and non-deterministic.
:::

### Undefined Behavior of Data Races

The consequences of a data race include but are not limited to [N4950 §6.9.4.2]:

1. **Torn reads/writes**: A read or write of a non-atomic variable may observe or produce a partially updated value.
2. **Reordering**: The compiler may reorder non-atomic accesses past synchronization points, since data-race-free programs are the only programs the standard guarantees behavior for.
3. **Optimization elimination**: The compiler may cache a value in a register and never re-read from memory, or may elide a store entirely.

### Critical Section

A **critical section** is a region of code that accesses shared mutable state. Only one thread should execute within a critical section at a time to prevent data races. The mutual exclusion of critical sections is the fundamental goal of synchronization primitives such as mutexes.

### Race Condition vs Data Race

These terms are often confused but have distinct meanings:

| Property                    | Data Race                    | Race Condition       |
| --------------------------- | ---------------------------- | -------------------- |
| Defined by the C++ standard | Yes [N4950 §6.9.4.2]         | No (informal)        |
| Results in UB               | Always                       | Not necessarily      |
| Related to memory model     | Yes                          | No                   |
| Fix mechanism               | Atomic operations or mutexes | Depends on the logic |

A **data race** is a formal term in the C++ memory model. A **race condition** is a broader, informal term for any situation where the program's outcome depends on the relative timing of threads. A race condition can occur even with proper synchronization (e.g., two threads both check `if (queue.empty())` before either pushes an element).

### Demonstrating a Data Race

:::warning
The following program intentionally contains a data race for educational purposes. It exhibits undefined behavior and may crash, produce incorrect results, or appear to work correctly depending on the platform and compiler flags. Never write code like this in production.
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

The expected result is $10 \times 100{,}000 = 1{,}000{,}000$, but the actual result will typically be less because `++counter` is not atomic. The increment operation consists of three machine instructions:

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

---

## 3. Mutexes, Shared Locks, and Deadlock Prevention

### `std::mutex`

`std::mutex` [N4950 §31.4.3.3] provides exclusive ownership semantics. Only one thread can hold the lock at any time. The basic operations are:

| Operation    | Description                                       |
| ------------ | ------------------------------------------------- |
| `lock()`     | Blocks until the lock is acquired                 |
| `try_lock()` | Attempts to acquire the lock; returns immediately |
| `unlock()`   | Releases the lock                                 |

Calling `lock()` on a mutex already held by the current thread results in **undefined behavior** [N4950 §31.4.3.3.2].

### `std::recursive_mutex`

`std::recursive_mutex` [N4950 §31.4.3.3.4] allows the same thread to acquire the lock multiple times. The thread must call `unlock()` the same number of times it called `lock()` for the mutex to be released. The implementation maintains an internal lock count:

$$\text{recursion depth} = n_{\text{lock}} - n_{\text{unlock}}$$

When the recursion depth reaches zero, the mutex is released.

:::tip
Prefer `std::mutex` over `std::recursive_mutex` when possible. `std::recursive_mutex` often indicates a design issue where lock ownership boundaries are unclear. Use it only when interfacing with recursive code structures that you cannot refactor.
:::

### `std::timed_mutex`

`std::timed_mutex` [N4950 §31.4.3.3.3] extends `std::mutex` with two additional methods:

- `try_lock_for(duration)`: Attempts to acquire the lock within a time duration.
- `try_lock_until(time_point)`: Attempts to acquire the lock before a specific time point.

### `std::lock_guard` and `std::scoped_lock`

`std::lock_guard` [N4950 §31.4.4.2] is a lightweight RAII wrapper for a single mutex. It acquires the mutex in its constructor and releases it in its destructor.

`std::scoped_lock` [N4950 §31.4.4.2.2] (C++17) generalizes this to zero or more mutexes. When multiple mutexes are provided, it uses a deadlock-avoidance algorithm (similar to `std::lock`) to acquire them without risk of deadlock:

```cpp
#include <iostream>
#include <mutex>
#include <string>

class bank_account {
    double balance_;
    std::mutex mtx_;
public:
    explicit bank_account(double balance) : balance_(balance) {}

    void deposit(double amount) {
        std::lock_guard<std::mutex> lk(mtx_);
        balance_ += amount;
    }

    double balance() const { return balance_; }

    friend void transfer(bank_account& from, bank_account& to, double amount);
};

void transfer(bank_account& from, bank_account& to, double amount) {
    // scoped_lock acquires both mutexes using deadlock-avoidance algorithm
    std::scoped_lock lock(from.mtx_, to.mtx_);

    if (from.balance_ >= amount) {
        from.balance_ -= amount;
        to.balance_ += amount;
        std::cout << "Transferred " << amount << "\n";
    } else {
        std::cout << "Insufficient funds\n";
    }
}

int main() {
    bank_account a(1000.0);
    bank_account b(500.0);

    transfer(a, b, 200.0);

    std::cout << "A: " << a.balance() << "\n";
    std::cout << "B: " << b.balance() << "\n";
    return 0;
}
```

### `std::shared_mutex` (Reader-Writer Lock)

`std::shared_mutex` [N4950 §31.4.3.4] allows multiple threads to hold a **shared** (read) lock simultaneously, but only one thread can hold an **exclusive** (write) lock at a time. This is useful when reads are frequent and writes are infrequent.

| Lock type                      | Concurrent access | Exclusive access |
| ------------------------------ | ----------------- | ---------------- |
| `std::shared_lock` (shared)    | Multiple readers  | No writers       |
| `std::unique_lock` (exclusive) | No other threads  | One writer       |

### Deadlock Conditions

A deadlock occurs when two or more threads are blocked forever, each waiting for a resource held by the other. The four necessary conditions (Coffman conditions) are:

1. **Mutual exclusion**: At least one resource is held in a non-shareable mode.
2. **Hold and wait**: A thread holds at least one resource and is waiting for additional resources.
3. **No preemption**: Resources cannot be forcibly taken from a thread.
4. **Circular wait**: There exists a circular chain of threads, each waiting for a resource held by the next.

$$\text{Deadlock} \iff \text{Mutual Exclusion} \wedge \text{Hold-and-Wait} \wedge \text{No Preemption} \wedge \text{Circular Wait}$$

### Deadlock Prevention Strategies

**Lock ordering**: Always acquire locks in a consistent global order. If every thread acquires mutexes in the same order, circular wait cannot occur.

**`std::scoped_lock`**: When acquiring multiple mutexes, `std::scoped_lock` uses an algorithm similar to `std::lock` [N4950 §31.4.4.2.2] that tries locks in a try-and-back-off fashion, preventing deadlock by avoiding a consistent hold-and-wait pattern:

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <chrono>

std::mutex mtx_a;
std::mutex mtx_b;

void task1() {
    std::scoped_lock lock(mtx_a, mtx_b); // deadlock-safe acquisition
    std::cout << "Task1 acquired both locks\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(100));
}

void task2() {
    std::scoped_lock lock(mtx_a, mtx_b); // same acquisition, no deadlock
    std::cout << "Task2 acquired both locks\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(100));
}

int main() {
    std::jthread t1(task1);
    std::jthread t2(task2);
    return 0;
}
```

:::info
`std::scoped_lock` with multiple mutexes uses an algorithm that attempts to lock each mutex in turn. If any lock attempt fails, it unlocks all previously acquired mutexes and retries. This guarantees that all threads acquire the set of mutexes in the same order, preventing circular wait [N4950 §31.4.4.2.2].
:::

### Reader-Writer Lock for a Thread-Safe Cache

```cpp
#include <iostream>
#include <shared_mutex>
#include <string>
#include <unordered_map>

template <typename Key, typename Value>
class thread_safe_cache {
    std::unordered_map<Key, Value> cache_;
    mutable std::shared_mutex rw_mutex_;

public:
    bool get(const Key& key, Value& out) const {
        std::shared_lock<std::shared_mutex> lock(rw_mutex_);
        auto it = cache_.find(key);
        if (it != cache_.end()) {
            out = it->second;
            return true;
        }
        return false;
    }

    void put(const Key& key, const Value& value) {
        std::unique_lock<std::shared_mutex> lock(rw_mutex_);
        cache_[key] = value;
    }

    bool remove(const Key& key) {
        std::unique_lock<std::shared_mutex> lock(rw_mutex_);
        return cache_.erase(key) > 0;
    }

    size_t size() const {
        std::shared_lock<std::shared_mutex> lock(rw_mutex_);
        return cache_.size();
    }
};

int main() {
    thread_safe_cache<std::string, int> cache;

    cache.put("alpha", 1);
    cache.put("beta", 2);
    cache.put("gamma", 3);

    int value = 0;
    if (cache.get("beta", value)) {
        std::cout << "Found beta = " << value << "\n";
    }

    std::cout << "Cache size: " << cache.size() << "\n";
    cache.remove("alpha");
    std::cout << "After remove, size: " << cache.size() << "\n";
    return 0;
}
```

:::tip
`std::shared_mutex` in C++17 (and `std::shared_timed_mutex` in C++14) provides read-write locking. Prefer `std::shared_lock` for read-only access and `std::unique_lock` for write access. On POSIX systems, this typically maps to `pthread_rwlock_t`.
:::

---

## 4. Condition Variables, Latches, and Barriers

### `std::condition_variable`

`std::condition_variable` [N4950 §31.5.4] provides a mechanism for threads to wait until a shared condition is met. It always works with a `std::unique_lock<std::mutex>`.

Key operations:

| Operation          | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `wait(lock)`       | Releases the lock, blocks the thread, re-acquires the lock on wakeup |
| `wait(lock, pred)` | Equivalent to `while (!pred()) wait(lock);`                          |
| `notify_one()`     | Wakes one waiting thread                                             |
| `notify_all()`     | Wakes all waiting threads                                            |

### Spurious Wakeups and the Predicate Loop

A **spurious wakeup** is an unwarranted wakeup where `wait()` returns even though no `notify_one()` or `notify_all()` was called. The C++ standard explicitly permits this [N4950 §31.5.4.1]:

> "Calls to functions that unblock the execution of any of the threads blocked on a condition variable may unblock zero or more threads that are blocked on that condition variable."

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

### `std::condition_variable_any`

`std::condition_variable_any` [N4950 §31.5.5] is similar to `std::condition_variable` but can work with any **Lockable** type (not just `std::unique_lock<std::mutex>`). It may be less efficient than `std::condition_variable` because it cannot use platform-specific optimizations that rely on `std::mutex`.

### Producer-Consumer with Condition Variable

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

### `std::latch` (C++20)

`std::latch` [N4950 §31.4.4.3] is a one-shot synchronization primitive. It is initialized with a count and threads decrement the count. When the count reaches zero, all threads waiting on the latch are unblocked.

| Operation            | Description                           |
| -------------------- | ------------------------------------- |
| `count_down(n)`      | Decrements the counter by `n`         |
| `wait()`             | Blocks until the counter reaches zero |
| `arrive_and_wait(n)` | Decrements by `n` and then waits      |
| `try_wait()`         | Returns `true` if the counter is zero |

A latch is useful for **one-time barriers** such as waiting for all worker threads to finish initialization before proceeding.

### `std::barrier` (C++20)

`std::barrier` [N4950 §31.4.4.5] is a reusable synchronization point. Unlike `std::latch`, a barrier resets its counter after all threads arrive, allowing it to be reused across multiple phases.

| Operation           | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `arrive(arrival)`   | Decrements the expected count                         |
| `wait()`            | Blocks until all threads have arrived                 |
| `arrive_and_wait()` | Arrives and then waits                                |
| `arrive_and_drop()` | Arrives and permanently decrements the expected count |

The barrier can accept a **completion function** that is executed once when all threads arrive, before any waiting thread is released:

$$\text{Phase } k \to \text{completion function} \to \text{Phase } k+1$$

### Barrier Synchronization for Parallel Computation

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

### `std::latch` Example: Startup Synchronization

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
`std::latch` is single-use: once the count reaches zero, it cannot be reset. Use `std::barrier` when you need reusable phase synchronization. `std::latch` is ideal for startup/shutdown patterns and fork-join parallelism [N4950 §31.4.4.3].
:::

---

## 5. Thread-Local Storage (TLS)

### `thread_local` Keyword

The `thread_local` keyword [N4950 §6.8] specifies that a variable has **thread storage duration**: a new instance of the variable is created for each thread, and it is destroyed when the thread exits. The variable is initialized before its first use in each thread.

$$\text{thread\_local } T\, x \implies \forall\, t \in \text{Threads}: \exists!\, x_t$$

Thread-local variables can be declared at namespace scope, at block scope, or as `static` class members [N4950 §6.8]:

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

Each thread sees its own independent copy of `thread_id_value`. The output of the main thread's `print_id()` call depends on whether it runs before or after the worker threads' calls, but each thread always sees the value `42` after its own assignment.

### `std::this_thread::get_id()`

`std::this_thread::get_id()` [N4950 §31.4.4.1.6] returns a unique identifier for the current thread. The return type is `std::thread::id`, which is a lightweight, copyable, and comparable type [N4950 §31.4.4.1.5].

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

### Performance Implications of TLS Access

Thread-local storage access typically involves an extra level of indirection compared to regular static storage:

1. **On Linux (glibc)**: `thread_local` variables are accessed via the `fs` (or `gs`) segment register, which points to the thread's TLS block. Access is typically a single additional memory load: `mov rax, fs:[offset]`.

2. **On macOS (Apple platforms)**: Access uses `__builtin_thread_pointer()` and an offset, which is similarly efficient.

3. **Initialization cost**: The first access to a `thread_local` variable in each thread triggers initialization. The initialization is guarded by a per-thread flag, which adds a branch on each access (though the branch is typically well-predicted after the first access).

:::tip
For performance-critical code accessed in tight loops, consider caching the thread-local variable's address in a local variable at the start of the function. The compiler may optimize this automatically, but explicit caching can help in complex functions.
:::

### Initialization Guarantees

Thread-local variables with static initialization are initialized before any function in the same translation unit is called. Thread-local variables with dynamic initialization (e.g., non-constant constructors) are initialized on first use in each thread [N4950 §6.8]:

- Initialization is **thread-safe**: the implementation guarantees that exactly one initialization occurs per thread, even if multiple threads attempt first access simultaneously.
- If initialization throws an exception, the variable is considered not-initialized and initialization will be retried on the next access.

:::warning
The order of destruction of thread-local variables is the **reverse of their construction order** within each thread [N4950 §6.8]. However, if a thread-local variable's destructor accesses another thread-local variable that has already been destroyed, the behavior is undefined.
:::

### Thread-Local Random Number Generator

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

Each thread has its own `std::mt19937` instance, so there is no contention for the random number generator. This is both **faster** (no lock contention) and **more correct** (the generator state is not shared, so the random sequence quality is preserved).

:::tip
`thread_local` random number generators are the standard pattern for parallel Monte Carlo simulations and other embarrassingly parallel stochastic computations. Each thread's generator is independent, so there are no synchronization overheads or sequence quality concerns.
:::

### Summary of Synchronization Primitives

| Primitive                 | C++ Standard      | Use Case                 | Reusable |
| ------------------------- | ----------------- | ------------------------ | -------- |
| `std::mutex`              | C++11 [§31.4.3.3] | Mutual exclusion         | Yes      |
| `std::shared_mutex`       | C++17 [§31.4.3.4] | Reader-writer locking    | Yes      |
| `std::condition_variable` | C++11 [§31.5.4]   | Waiting on conditions    | Yes      |
| `std::latch`              | C++20 [§31.4.4.3] | One-shot barrier         | No       |
| `std::barrier`            | C++20 [§31.4.4.5] | Reusable phase barrier   | Yes      |
| `std::jthread`            | C++20 [§31.4.4.4] | Auto-join + cancellation | N/A      |
| `thread_local`            | C++11 [§6.8]      | Per-thread data          | N/A      |
