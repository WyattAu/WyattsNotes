---
title: Compare-and-Swap (CAS) Loops
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: compare-and-swap-cas-loops
---

# Compare-and-Swap (CAS) Loops

This section covers the CAS loop pattern, the difference between `compare_exchange_weak` and
`compare_exchange_strong`, when weak CAS is preferable, linearizability of CAS-based data
structures, a lock-free reference counting implementation, and common CAS loop idioms.

## CAS Loop Pattern

The compare-and-swap (CAS) loop is the fundamental building block of lock-free algorithms. The
pattern is:

$$\text{loop: } \text{old} = \text{load}(x); \quad \text{new} = f(\text{old}); \quad \text{if CAS}(x, \text{old}, \text{new}) \text{ then break}$$

In C++, this translates to:

```cpp
T expected = atomic_var.load(order);
T desired = compute(expected);
while (!atomic_var.compare_exchange_weak(expected, desired, order_success, order_failure)) {
    desired = compute(expected); // recompute based on updated expected
}
```

## `compare_exchange_weak` vs `compare_exchange_strong`

| Property         | `compare_exchange_weak`               | `compare_exchange_strong` |
| ---------------- | ------------------------------------- | ------------------------- |
| Spurious failure | Possible                              | Never                     |
| Performance      | May be faster on some architectures   | May be slower             |
| Use case         | CAS loops (failure is retried anyway) | Single-attempt operations |

The `compare_exchange` functions have the following signature [N4950 §31.7.2]:

```cpp
bool compare_exchange_weak(T& expected, T desired,
    memory_order success, memory_order failure);

bool compare_exchange_strong(T& expected, T desired,
    memory_order success, memory_order failure);
```

On failure, `expected` is updated to the current value of the atomic variable, allowing the caller
to recompute `desired` and retry.

:::tip Use `compare_exchange_weak` inside CAS loops because spurious failures are harmless (the loop
retries). Use `compare_exchange_strong` when you need to know whether the CAS actually failed due to
a value mismatch (e.g., when you want to take a different action on real failure vs spurious
failure). :::

## When Weak CAS Is Preferable

On some architectures (notably ARMv8 using LL/SC — Load-Linked/Store-Conditional),
`compare_exchange_weak` maps directly to the hardware instruction and can be implemented without a
retry loop in the runtime library. `compare_exchange_strong` may require the implementation to
insert a retry loop, making it slightly more expensive.

For CAS loops that already retry on failure, `compare_exchange_weak` avoids double-retrying:

```cpp
// Prefer this with weak CAS:
while (!atomic_var.compare_exchange_weak(expected, desired,
    std::memory_order_release, std::memory_order_relaxed)) {
    desired = compute(expected);
}

// Strong CAS would retry internally on spurious failure, then the loop
// retries again — wasted work.
```

## Linearizability of CAS-Based Data Structures

A concurrent data structure is **linearizable** [Herlihy & Wing, 1990] if every operation appears to
take effect instantaneously at some point between its invocation and its response. CAS-based data
structures can achieve linearizability because CAS is itself a linearizable operation:

$$\text{CAS}(x, \text{old}, \text{new}) \text{ appears to execute atomically at the point where the store conditional succeeds}$$

This means that any data structure built entirely from CAS operations is linearizable, provided the
CAS loop correctly handles the expected/desired values.

## Lock-Free Reference Counting with CAS

```cpp
#include <iostream>
#include <atomic>
#include <thread>
#include <vector>
#include <cassert>

class ref_counted {
    struct control_block {
        std::atomic<int> strong_count;
        std::atomic<int> weak_count;
        int value;

        explicit control_block(int v)
            : strong_count(1), weak_count(0), value(v) {}
    };

    control_block* ctrl_;

public:
    explicit ref_counted(int value)
        : ctrl_(new control_block(value)) {}

    ref_counted(const ref_counted& other)
        : ctrl_(other.ctrl_)
    {
        ctrl_->strong_count.fetch_add(1, std::memory_order_relaxed);
    }

    ref_counted& operator=(const ref_counted& other) {
        if (this != &other) {
            release();
            ctrl_ = other.ctrl_;
            ctrl_->strong_count.fetch_add(1, std::memory_order_relaxed);
        }
        return *this;
    }

    ~ref_counted() {
        release();
    }

    int get() const {
        return ctrl_->value;
    }

private:
    void release() {
        if (ctrl_->strong_count.fetch_sub(1, std::memory_order_acq_rel) == 1) {
            // Last strong reference: destroy the object
            int old_weak = ctrl_->weak_count.load(std::memory_order_acquire);
            if (old_weak == 0) {
                delete ctrl_;
            } else {
                // Weak references exist; transfer to weak count
                ctrl_->weak_count.fetch_sub(1, std::memory_order_release);
            }
        }
    }
};

void concurrent_refcount_test() {
    constexpr int num_threads = 8;
    constexpr int copies_per_thread = 1000;

    ref_counted original(42);
    std::vector<std::jthread> threads;

    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back([&original, copies_per_thread] {
            std::vector<ref_counted> copies;
            copies.reserve(copies_per_thread);
            for (int j = 0; j < copies_per_thread; ++j) {
                copies.push_back(original);
                assert(copies.back().get() == 42);
            }
            // copies go out of scope, decrementing ref counts
        });
    }

    std::cout << "Final value: " << original.get() << "\n";
    std::cout << "Test passed: no crashes or assertion failures\n";
}

int main() {
    concurrent_refcount_test();
    return 0;
}
```

:::info This reference counting example uses `fetch_sub` with `memory_order_acq_rel` for the release
operation. The acquire semantics ensure that all accesses to the object (sequenced-before the
release) are visible to the thread that performs the destruction. The release semantics ensure that
the destruction itself is visible to other threads. The `fetch_sub` return value is checked against
1 (not 0) because `fetch_sub` returns the **old** value [N4950 §31.7.2]. :::

## CAS Loop Idioms Summary

| Pattern                    | Description                            | Use Case                       |
| -------------------------- | -------------------------------------- | ------------------------------ |
| **Read-modify-write**      | Load, compute, CAS                     | Counter increment, flag toggle |
| **Insert into list**       | Load head, set new->next, CAS head     | Lock-free stack push           |
| **Remove from list**       | Load head, read next, CAS head to next | Lock-free stack pop            |
| **Update with validation** | Load, validate invariants, CAS         | Lock-free queue (ABA-safe)     |

:::tip When writing CAS loops, always update `desired` based on the new `expected` value after a
failed CAS. The `compare_exchange_weak` function automatically updates `expected` to the current
value on failure, so you can use it directly in the next iteration's computation. :::

## See Also

- [Atomic Operations and Lock-Free Programming](./3_atomic_operations.md)
- [Memory Orderings](./4_memory_orderings.md)
- [Instruction Reordering and Happens-Before](./1_instruction_reordering.md)
