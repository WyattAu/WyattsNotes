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

### Implementation: POSIX `pthread_mutex_t`

On Linux, `std::mutex` is typically implemented as a thin wrapper around `pthread_mutex_t`. The
default `pthread_mutex_t` uses the **Normal** type (not recursive, not error-checking), which means
re-locking without unlocking is UB — exactly matching the C++ standard's requirement.

```cpp
#include <pthread.h>
#include <stdio.h>

// Simplified view of what std::mutex does under the hood on Linux
struct my_mutex {
    pthread_mutex_t handle;

    my_mutex() { pthread_mutex_init(&handle, NULL); }
    ~my_mutex() { pthread_mutex_destroy(&handle); }
    void lock() { pthread_mutex_lock(&handle); }
    void unlock() { pthread_mutex_unlock(&handle); }
};
```

The Linux `pthread_mutex_t` for the normal type is typically 40 bytes, containing the lock state,
owner thread ID, and a count for robust mutex tracking. In the uncontended case,
`pthread_mutex_lock` compiles to a single atomic `cmpxchg` instruction (futex-based).

### Uncontended vs Contended Lock Performance

In the uncontended case (no other thread holds the lock), acquiring a mutex is essentially the cost
of a single atomic compare-and-swap — approximately 10-20 nanoseconds on x86. In the contended case,
the thread is descheduled via a futex system call (`FUTEX_WAIT`), which costs 1-10 microseconds for
the kernel context switch alone, plus scheduler latency.

## `std::recursive_mutex`

`std::recursive_mutex` [N4950 §31.4.3.3.4] allows the same thread to acquire the lock multiple
times. The thread must call `unlock()` the same number of times it called `lock()` for the mutex to
be released. The implementation maintains an internal lock count:

$$\mathrm{recursion depth} = n_{\mathrm{lock}} - n_{\mathrm{unlock}}$$

When the recursion depth reaches zero, the mutex is released.

### Why `std::recursive_mutex` Exists

`std::recursive_mutex` exists primarily for interfacing with legacy code that was not designed with
explicit lock boundaries. For example, a recursive data structure traversal where functions call
each other and each needs the lock:

```cpp
#include <iostream>
#include <mutex>
#include <vector>

struct TreeNode {
    int value;
    TreeNode* left = nullptr;
    TreeNode* right = nullptr;
};

class RecursiveTreeWalker {
    std::recursive_mutex mtx_;

    void walk_impl(TreeNode* node) {
        if (!node) return;
        std::lock_guard<std::recursive_mutex> lk(mtx_);
        // If walk_impl calls another method that also locks mtx_,
        // recursive_mutex prevents deadlock
        process(node);
        walk_impl(node->left);
        walk_impl(node->right);
    }

    void process(TreeNode* node) {
        std::lock_guard<std::recursive_mutex> lk(mtx_);
        // Safe: recursive_mutex allows re-entry from the same thread
    }

public:
    void walk(TreeNode* root) {
        std::lock_guard<std::recursive_mutex> lk(mtx_);
        walk_impl(root);
    }
};

int main() {
    TreeNode root{1};
    TreeNode left{2};
    TreeNode right{3};
    root.left = &left;
    root.right = &right;
    RecursiveTreeWalker walker;
    walker.walk(&root);
    std::cout << "Walk completed\n";
    return 0;
}
```

The better design is to refactor so that `walk_impl` does not acquire the lock — only the public
`walk()` method acquires it, and `walk_impl` is a private method that assumes the lock is already
held:

```cpp
class BetterTreeWalker {
    std::mutex mtx_;

    void walk_impl(TreeNode* node) {
        if (!node) return;
        // No lock acquisition here — caller must hold mtx_
        process_impl(node);
        walk_impl(node->left);
        walk_impl(node->right);
    }

    void process_impl(TreeNode* node) {
        // No lock acquisition — caller must hold mtx_
    }

public:
    void walk(TreeNode* root) {
        std::lock_guard<std::mutex> lk(mtx_);
        walk_impl(root);
    }
};
```

:::tip
Prefer `std::mutex` over `std::recursive_mutex` when possible. `std::recursive_mutex` often
indicates a design issue where lock ownership boundaries are unclear. Use it only when interfacing
with recursive code structures that you cannot refactor.
:::

## `std::timed_mutex`

`std::timed_mutex` [N4950 §31.4.3.3.3] extends `std::mutex` with two additional methods:

- `try_lock_for(duration)`: Attempts to acquire the lock within a time duration.
- `try_lock_until(time_point)`: Attempts to acquire the lock before a specific time point.

Timed mutexes are useful for implementing timeout-based locking policies, especially in distributed
systems or when interfacing with external resources that may hang:

```cpp
#include <iostream>
#include <mutex>
#include <chrono>

std::timed_mutex tmtx;

void try_with_timeout() {
    auto deadline = std::chrono::steady_clock::now() + std::chrono::milliseconds(100);

    if (tmtx.try_lock_until(deadline)) {
        std::cout << "Lock acquired\n";
        tmtx.unlock();
    } else {
        std::cout << "Lock acquisition timed out\n";
    }
}

int main() {
    tmtx.lock();
    try_with_timeout();
    tmtx.unlock();
    return 0;
}
// Output: Lock acquisition timed out
```

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

### `std::unique_lock`: Deferred and Timed Locking

`std::unique_lock` [N4950 §31.4.4.3] provides more flexibility than `std::lock_guard`:

- **Deferred locking:** Construct without acquiring the lock (`std::defer_lock`).
- **Timed locking:** `try_lock_for()`, `try_lock_until()`.
- **Manual unlock/lock:** Can be unlocked and re-locked during its lifetime.
- **Movable:** Can be returned from functions (unlike `std::lock_guard` in C++14).

```cpp
#include <iostream>
#include <mutex>
#include <vector>
#include <thread>
#include <chrono>

class DeferredLockExample {
    std::mutex mtx_;
    std::vector<int> data_;

public:
    void add_if_not_contains(int value) {
        std::unique_lock<std::mutex> lk(mtx_, std::defer_lock);
        // Lock is NOT acquired yet

        lk.lock();  // Acquire the lock
        bool found = false;
        for (int v : data_) {
            if (v == value) { found = true; break; }
        }
        if (!found) {
            data_.push_back(value);
        }
        lk.unlock();  // Explicitly release

        // Lock is not held here — safe to do non-critical work
    }
};

int main() {
    DeferredLockExample ex;
    ex.add_if_not_contains(42);
    ex.add_if_not_contains(42);
    std::cout << "Done\n";
    return 0;
}
```

### `std::scoped_lock` Algorithm Details

The deadlock-avoidance algorithm used by `std::scoped_lock` (and `std::lock`) works as follows
[N4950 §31.4.4.2.2]:

1. Start with all mutexes in an "unlocked" set.
2. Try to lock the first mutex. If successful, move it to the "locked" set.
3. Try to lock the next mutex. If successful, continue.
4. If any lock attempt fails (returns `false` from `try_lock`), unlock all previously acquired
   mutexes in **reverse order**, then retry from the beginning.
5. Repeat until all mutexes are acquired.

This algorithm guarantees that threads acquire the same set of mutexes in the same order, preventing
circular wait. The retry loop has no upper bound on iterations, but in practice contention is rare
and the loop terminates quickly.

## `std::shared_mutex` (Reader-Writer Lock)

`std::shared_mutex` [N4950 §31.4.3.4] allows multiple threads to hold a **shared** (read) lock
simultaneously, but only one thread can hold an **exclusive** (write) lock at a time. This is useful
when reads are frequent and writes are infrequent.

| Lock type                      | Concurrent access | Exclusive access |
| ------------------------------ | ----------------- | ---------------- |
| `std::shared_lock` (shared)    | Multiple readers  | No writers       |
| `std::unique_lock` (exclusive) | No other threads  | One writer       |

### Writer Starvation

A naive reader-writer lock implementation can suffer from **writer starvation**: if readers
continuously acquire shared locks, a waiting writer may never get exclusive access. The C++ standard
does not mandate a specific policy for `std::shared_mutex`, but POSIX `pthread_rwlock_t`
implementations typically implement a "writer-preferring" policy on modern Linux kernels (glibc
2.26+).

### Reader-Writer Lock Overhead

A shared lock acquisition is more expensive than a plain mutex: it requires atomic operations on
both a reader count and a writer flag. On x86, a `std::shared_mutex` shared lock is approximately
2-3x slower than an uncontended `std::mutex`. Only use `std::shared_mutex` when the read-to-write
ratio is high enough (typically &gt;10:1) to justify the overhead.

## Deadlock Conditions

A deadlock occurs when two or more threads are blocked forever, each waiting for a resource held by
the other. The four necessary conditions (Coffman conditions) are:

1. **Mutual exclusion**: At least one resource is held in a non-shareable mode.
2. **Hold and wait**: A thread holds at least one resource and is waiting for additional resources.
3. **No preemption**: Resources cannot be forcibly taken from a thread.
4. **Circular wait**: There exists a circular chain of threads, each waiting for a resource held by
   the next.

$$\mathrm{Deadlock} \iff \mathrm{Mutual Exclusion} \wedge \mathrm{Hold-and-Wait} \wedge \mathrm{No Preemption} \wedge \mathrm{Circular Wait}$$

### Deadlock in Practice: The Classic Dining Philosophers

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <chrono>
#include <vector>

constexpr int NUM_PHILOSOPHERS = 5;
std::mutex forks[NUM_PHILOSOPHERS];

void philosopher_deadlock(int id) {
    int left = id;
    int right = (id + 1) % NUM_PHILOSOPHERS;

    // DEADLOCK: All philosophers pick up left fork first, then wait for right
    forks[left].lock();
    std::cout << "Philosopher " << id << " picked up fork " << left << "\n";

    std::this_thread::sleep_for(std::chrono::milliseconds(10));

    forks[right].lock();  // May block forever
    std::cout << "Philosopher " << id << " picked up fork " << right << "\n";

    forks[right].unlock();
    forks[left].unlock();
}

void philosopher_safe(int id) {
    int left = id;
    int right = (id + 1) % NUM_PHILOSOPHERS;

    // SAFE: Always pick up the lower-numbered fork first
    int first = std::min(left, right);
    int second = std::max(left, right);

    forks[first].lock();
    forks[second].lock();

    std::cout << "Philosopher " << id << " is eating\n";

    forks[second].unlock();
    forks[first].unlock();
}

int main() {
    // Demonstrate the safe version
    std::vector<std::jthread> threads;
    for (int i = 0; i < NUM_PHILOSOPHERS; ++i) {
        threads.emplace_back(philosopher_safe, i);
    }
    return 0;
}
```

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

### Strategy: Hierarchical Locking with `std::strict_lock` (C++17)

A compile-time deadlock prevention technique is to assign each mutex a **level** and enforce that
locks are always acquired in increasing level order:

```cpp
#include <mutex>
#include <iostream>
#include <cassert>

template <int Level>
struct LevelMutex {
    static constexpr int level = Level;
    std::mutex mtx;

    void lock() { mtx.lock(); }
    void unlock() { mtx.unlock(); }
    bool try_lock() { return mtx.try_lock(); }
};

template <typename... Mutexes>
class HierarchicalLock {
    // Verify that levels are strictly increasing at compile time
    static constexpr bool levels_ok = []() constexpr {
        int prev = -1;
        return ((Mutexes::level > prev ? (prev = Mutexes::level, true) : false) && ...);
    }();
    static_assert(levels_ok, "Mutexes must be acquired in increasing level order");

public:
    HierarchicalLock(Mutexes&... mutexes) : lock_(mutexes.mtx...) {}

private:
    std::scoped_lock<decltype(Mutexes::mtx)&...> lock_;
};

LevelMutex<0> low_mutex;
LevelMutex<1> mid_mutex;
LevelMutex<2> high_mutex;

void safe_operation() {
    HierarchicalLock lock(low_mutex, mid_mutex, high_mutex);
    // Guaranteed deadlock-free by construction
}

int main() {
    safe_operation();
    std::cout << "Hierarchical locking works\n";
    return 0;
}
```

:::info
`std::scoped_lock` with multiple mutexes uses an algorithm that attempts to lock each mutex
in turn. If any lock attempt fails, it unlocks all previously acquired mutexes and retries. This
guarantees that all threads acquire the set of mutexes in the same order, preventing circular wait
[N4950 §31.4.4.2.2].
:::

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

### Upgradable Lock: `std::shared_mutex` with Promotion

A common pattern is to acquire a shared lock for reading, then upgrade to exclusive for writing if a
condition is met. `std::shared_mutex` does not directly support lock promotion. The safe approach is
to release the shared lock and acquire an exclusive lock:

```cpp
#include <iostream>
#include <shared_mutex>
#include <unordered_map>

template <typename K, typename V>
class cache_with_insert {
    std::unordered_map<K, V> data_;
    mutable std::shared_mutex mtx_;

public:
    V get_or_insert(const K& key, V default_val) {
        {
            std::shared_lock<std::shared_mutex> read_lock(mtx_);
            auto it = data_.find(key);
            if (it != data_.end()) {
                return it->second;
            }
        }
        // Release shared lock, then acquire exclusive
        std::unique_lock<std::shared_mutex> write_lock(mtx_);
        // Double-check after acquiring exclusive lock (another thread may have inserted)
        auto [it, inserted] = data_.try_emplace(key, std::move(default_val));
        return it->second;
    }
};

int main() {
    cache_with_insert<std::string, int> cache;
    std::cout << cache.get_or_insert("key", 42) << "\n";
    std::cout << cache.get_or_insert("key", 99) << "\n";
    return 0;
}
// Output:
//   42
//   42
```

The double-check pattern is essential: between releasing the shared lock and acquiring the exclusive
lock, another thread may have already inserted the key. Without the second check, `try_emplace`
would silently discard the existing value.

:::tip
`std::shared_mutex` in C++17 (and `std::shared_timed_mutex` in C++14) provides read-write
locking. Prefer `std::shared_lock` for read-only access and `std::unique_lock` for write access. On
POSIX systems, this typically maps to `pthread_rwlock_t`.
:::

## Common Pitfalls

### Pitfall 1: Locking and Unlocking on Different Threads

The C++ standard requires that a mutex be unlocked by the same thread that locked it. Unlocking on a
different thread is undefined behavior:

```cpp
#include <iostream>
#include <mutex>
#include <thread>

std::mutex mtx;

void bad_unlock() {
    mtx.lock();    // Thread 1 locks
    // Hand off the mutex to thread 2 somehow
    // Thread 2: mtx.unlock();  // UB!
}
```

### Pitfall 2: Forgetting `mutable` on Mutex Members

If a `const` member function needs to acquire a mutex, the mutex must be `mutable`:

```cpp
class Safe {
    mutable std::mutex mtx_;  // Required for const member functions
    int value_ = 0;

public:
    int get() const {
        std::lock_guard<std::mutex> lk(mtx_);  // OK: mtx_ is mutable
        return value_;
    }
};
```

### Pitfall 3: RAII Wrapper Scope

Be careful with the scope of RAII lock wrappers. A lock is released when the wrapper is destroyed,
which happens at the end of the enclosing block:

```cpp
void bug() {
    std::lock_guard<std::mutex> lk(mtx_);
    // Critical section
    {
        std::lock_guard<std::mutex> lk2(mtx2_);
        // Nested critical section
    }
    // mtx2_ is released here, mtx_ is still held
    // If you intended to release mtx_ earlier, use a nested scope
}
```

### Pitfall 4: `std::call_once` as an Alternative to Mutex

For one-time initialization, `std::call_once` with `std::once_flag` is more efficient than a mutex:

```cpp
#include <iostream>
#include <mutex>

std::once_flag init_flag;
int expensive_value = 0;

int get_expensive() {
    std::call_once(init_flag, [] {
        expensive_value = 42;  // Computed exactly once, thread-safe
    });
    return expensive_value;
}

int main() {
    std::cout << get_expensive() << "\n";
    return 0;
}
```

`std::call_once` guarantees that the callable is invoked exactly once, even if multiple threads call
`get_expensive()` concurrently. Internally, it uses a combination of atomic flags and a mutex, but
the fast path (already initialized) is a single atomic load.

:::

:::

:::
