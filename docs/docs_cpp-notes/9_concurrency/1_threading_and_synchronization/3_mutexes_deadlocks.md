---
title: Mutexes, Shared Locks, and Deadlock Prevention
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: mutexes-shared-locks-deadlock-prevention
---

# Mutexes, Shared Locks, and Deadlock Prevention

This section covers `std::mutex`, `std::recursive_mutex`, `std::timed_mutex`, RAII lock wrappers
(`std::lock_guard`, `std::scoped_lock`), reader-writer locks (`std::shared_mutex`), the four Coffman
deadlock conditions, and deadlock prevention strategies.

## `std::mutex`

`std::mutex` [N4950 §31.4.3.3] provides exclusive ownership semantics. Only one thread can hold the
lock at any time. The basic operations are:

| Operation    | Description                                       |
| ------------ | ------------------------------------------------- |
| `lock()`     | Blocks until the lock is acquired                 |
| `try_lock()` | Attempts to acquire the lock; returns immediately |
| `unlock()`   | Releases the lock                                 |

Calling `lock()` on a mutex already held by the current thread results in **undefined behavior**
[N4950 §31.4.3.3.2].

## `std::recursive_mutex`

`std::recursive_mutex` [N4950 §31.4.3.3.4] allows the same thread to acquire the lock multiple
times. The thread must call `unlock()` the same number of times it called `lock()` for the mutex to
be released. The implementation maintains an internal lock count:

$$\text{recursion depth} = n_{\text{lock}} - n_{\text{unlock}}$$

When the recursion depth reaches zero, the mutex is released.

:::tip Prefer `std::mutex` over `std::recursive_mutex` when possible. `std::recursive_mutex` often
indicates a design issue where lock ownership boundaries are unclear. Use it only when interfacing
with recursive code structures that you cannot refactor. :::

## `std::timed_mutex`

`std::timed_mutex` [N4950 §31.4.3.3.3] extends `std::mutex` with two additional methods:

- `try_lock_for(duration)`: Attempts to acquire the lock within a time duration.
- `try_lock_until(time_point)`: Attempts to acquire the lock before a specific time point.

## `std::lock_guard` and `std::scoped_lock`

`std::lock_guard` [N4950 §31.4.4.2] is a lightweight RAII wrapper for a single mutex. It acquires
the mutex in its constructor and releases it in its destructor.

`std::scoped_lock` [N4950 §31.4.4.2.2] (C++17) generalizes this to zero or more mutexes. When
multiple mutexes are provided, it uses a deadlock-avoidance algorithm (similar to `std::lock`) to
acquire them without risk of deadlock:

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

## `std::shared_mutex` (Reader-Writer Lock)

`std::shared_mutex` [N4950 §31.4.3.4] allows multiple threads to hold a **shared** (read) lock
simultaneously, but only one thread can hold an **exclusive** (write) lock at a time. This is useful
when reads are frequent and writes are infrequent.

| Lock type                      | Concurrent access | Exclusive access |
| ------------------------------ | ----------------- | ---------------- |
| `std::shared_lock` (shared)    | Multiple readers  | No writers       |
| `std::unique_lock` (exclusive) | No other threads  | One writer       |

## Deadlock Conditions

A deadlock occurs when two or more threads are blocked forever, each waiting for a resource held by
the other. The four necessary conditions (Coffman conditions) are:

1. **Mutual exclusion**: At least one resource is held in a non-shareable mode.
2. **Hold and wait**: A thread holds at least one resource and is waiting for additional resources.
3. **No preemption**: Resources cannot be forcibly taken from a thread.
4. **Circular wait**: There exists a circular chain of threads, each waiting for a resource held by
   the next.

$$\text{Deadlock} \iff \text{Mutual Exclusion} \wedge \text{Hold-and-Wait} \wedge \text{No Preemption} \wedge \text{Circular Wait}$$

## Deadlock Prevention Strategies

**Lock ordering**: Always acquire locks in a consistent global order. If every thread acquires
mutexes in the same order, circular wait cannot occur.

**`std::scoped_lock`**: When acquiring multiple mutexes, `std::scoped_lock` uses an algorithm
similar to `std::lock` [N4950 §31.4.4.2.2] that tries locks in a try-and-back-off fashion,
preventing deadlock by avoiding a consistent hold-and-wait pattern:

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

:::info `std::scoped_lock` with multiple mutexes uses an algorithm that attempts to lock each mutex
in turn. If any lock attempt fails, it unlocks all previously acquired mutexes and retries. This
guarantees that all threads acquire the set of mutexes in the same order, preventing circular wait
[N4950 §31.4.4.2.2]. :::

## Reader-Writer Lock for a Thread-Safe Cache

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

:::tip `std::shared_mutex` in C++17 (and `std::shared_timed_mutex` in C++14) provides read-write
locking. Prefer `std::shared_lock` for read-only access and `std::unique_lock` for write access. On
POSIX systems, this typically maps to `pthread_rwlock_t`. :::

## See Also

- [Data Races and Critical Sections](./2_data_races.md)
- [Condition Variables, Latches, and Barriers](./4_condition_variables.md)
- [Atomic Operations and Lock-Free Programming](../2_memory_model_and_atomics/3_atomic_operations.md)
