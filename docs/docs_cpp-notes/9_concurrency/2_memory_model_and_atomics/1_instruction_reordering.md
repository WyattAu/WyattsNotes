---
title: Instruction Reordering and Happens-Before
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: instruction-reordering-happens-before
---

# Instruction Reordering and Happens-Before

This section covers the as-if rule and compiler reordering, CPU-level store buffers and load
buffers, the happens-before and synchronizes-with relationships, sequential consistency vs relaxed
consistency, and a demonstration of reordering effects across architectures.

## The As-If Rule and Compiler Reordering

The **as-if rule** [N4950 §6.9.2.1] allows the compiler to reorder any operations whose reordering
does not change the observable behavior of a single-threaded program. In a multi-threaded context,
this means:

> "The implementation is free to reorder operations unless an ordering constraint is imposed by the
> memory model."

Concretely, the compiler may reorder:

1. **Independent loads**: Two loads from different addresses may be reordered freely.
2. **Store-buffering**: A store followed by a load to a different address may be reordered so the
   load executes first.
3. **Common subexpression elimination**: A load may be hoisted out of a loop, potentially reading
   stale data.

The as-if rule is the root cause of most multi-threading bugs. The compiler does not know about
other threads and is free to optimize as if the current thread were the only one running.

## CPU-Level Reordering

Even if the compiler emits instructions in program order, the CPU may reorder them at runtime.
Different architectures have different memory models:

### Store Buffers

Modern CPUs use store buffers to avoid stalling on write misses. When a core executes a store, the
data is written to the store buffer (fast, local) rather than directly to the cache (slow, may
require coherence traffic). The store buffer is drained to the cache asynchronously.

This means a subsequent load from a different address may execute **before** the previous store
drains to the cache. This is called **store-to-load reordering** (also known as Store Buffering or
the "Store Buffer" phenomenon).

```
Core 0:                  Core 1:
  store x = 1              store y = 1
  load r1 = y  (sees 0)    load r2 = x  (sees 0)
```

Both loads can see 0 simultaneously. This is legal on x86 (which has Total Store Order but allows
store-to-load reordering) and is expected on ARM and POWER (which allow even more reorderings).

### Load Buffers and Speculative Execution

CPUs speculatively execute loads before prior branch conditions are resolved. On weakly ordered
architectures (ARM, POWER), loads may be reordered with respect to other loads and stores:

```
Core 0:                  Core 1:
  load r1 = x              load r2 = y
  store y = 1              store x = 1
```

On ARM, it is possible for both loads to see 0 (Load-Load reordering and Load-Store reordering).

### Store Forwarding

A CPU can forward a store value directly from the store buffer to a subsequent load to the same
address, bypassing the cache. This is called **store forwarding**. While this is an optimization
rather than a reordering, it means a thread can always see its own stores immediately, even if other
threads cannot.

## Data Dependency and Control Dependency Ordering

A **data dependency** exists when the address or value of one memory access depends on the value
read by a prior memory access:

$$\text{data dependency: } a[i] \to b[a[i]]$$

A **control dependency** exists when whether a memory access executes depends on the value read by a
prior access:

$$\text{control dependency: } \text{if } (x) \{ y = 1; \}$$

:::warning Control dependencies do **not** prevent reordering on all architectures. On x86, control
dependencies provide ordering, but on ARM and POWER, the processor may speculatively execute the
dependent load before the controlling branch is resolved. Always use explicit memory ordering
(acquire/release) rather than relying on control dependencies. :::

## Sequenced-Before Relationship

The **sequenced-before** relation [N4950 §6.9.4.1] is the intra-thread ordering. If evaluation A is
sequenced-before evaluation B, then A's side effects are visible to B. Within a single thread, the
sequenced-before relation is determined by the abstract machine's evaluation order:

- In a single expression, the order is determined by operator precedence and sequencing rules.
- Between statements, the order is top-to-bottom.
- Function arguments are **unsequenced** with respect to each other (prior to C++17). In C++17, the
  operands of `=` are indeterminately sequenced.

$$A \xrightarrow{\text{seq}} B \implies B \text{ observes } A \text{'s side effects within the same thread}$$

## Happens-Before Relationship

The **happens-before** relation [N4950 §6.9.4.1] is a strict partial order ($\prec$) on evaluations
within a single execution. If evaluation $A$ happens-before evaluation $B$, then $B$ observes all
side effects of $A$.

The happens-before relation is the **transitive closure** of:

1. **Sequenced-before** ($\xrightarrow{\text{seq}}$): Within a single thread, operations are ordered
   by the abstract machine.
2. **Synchronizes-with**: A release operation on an atomic object $M$ in thread $A$
   **synchronizes-with** an acquire operation on $M$ in thread $B$ if $B$ reads a value written (or
   released) by $A$.
3. **Sequenced-before is transitive**: If $A \xrightarrow{\text{seq}} B$ and
   $B \xrightarrow{\text{seq}} C$, then $A \xrightarrow{\text{seq}} C$.

$$A \prec B \iff \exists\, C_1, C_2, \ldots, C_n : A \xrightarrow{\text{seq}} C_1 \xrightarrow{\text{sw}} C_2 \xrightarrow{\text{seq}} \ldots \xrightarrow{\text{sw}} C_n \xrightarrow{\text{seq}} B$$

**Formal definition:** $A$ happens-before $B$ ($A \prec B$) if and only if there exists a chain of
sequenced-before and synchronizes-with edges connecting $A$ to $B$. The relation is irreflexive (no
element happens-before itself), asymmetric, and transitive.

If $A \prec B$ and both $A$ and $B$ access the same memory location, and at least one is a write,
then $B$ observes the side effects of $A$ (there is no data race).

## Synchronizes-With Relationship

A release store to an atomic variable in thread 1 **synchronizes-with** an acquire load of that same
variable in thread 2 if the load reads the value stored (or a value written later by a release
operation) [N4950 §31.7.5]:

$$\text{store}_{\text{release}}(x, v) \xrightarrow{\text{sw}} \text{load}_{\text{acquire}}(x, v)$$

The synchronizes-with relationship creates a **happens-before** edge between the release store and
the acquire load, and by transitivity, all operations sequenced-before the release store
happen-before all operations sequenced-after the acquire load.

## Sequential Consistency vs Relaxed Consistency

**Sequential consistency** (SC) [N4950 §31.7.5] is the strongest memory ordering. Under SC, the
result of any execution is as if all operations of all threads were executed in some total order
consistent with the program order of each individual thread.

**Relaxed consistency** allows more reorderings and is weaker than SC. Under relaxed ordering, there
is no inter-thread ordering guarantee unless explicitly established by acquire/release or seq_cst
operations.

| Property                           | Sequentially Consistent | Relaxed |
| ---------------------------------- | ----------------------- | ------- |
| Single total order                 | Yes                     | No      |
| Compiler reordering across atomics | Prevented               | Allowed |
| Hardware reordering across atomics | Prevented (fences used) | Allowed |
| Performance cost                   | Highest                 | Lowest  |

## Concrete Example: Reordering Bug

:::warning The following program demonstrates how the absence of proper memory ordering can lead to
unexpected results. It contains intentional data races and is for educational purposes only. Do not
write code like this in production. :::

```cpp
#include <iostream>
#include <thread>
#include <atomic>

int data = 0;
bool ready = false;

void producer() {
    data = 42;
    ready = true;
}

void consumer() {
    while (!ready) {
        // spin
    }
    std::cout << "data = " << data << "\n";
}

int main() {
    std::thread t1(producer);
    std::thread t2(consumer);
    t1.join();
    t2.join();
    return 0;
}
```

:::warning This program may print `data = 0` on some architectures (notably ARM and POWER). The
compiler may reorder `data = 42` after `ready = true`, or the hardware may reorder the stores due to
store buffering. On x86, stores are not reordered with other stores (TSO), so this particular
example would likely work on x86 but fail on ARM. This is a common source of subtle cross-platform
bugs. :::

The fix is to use `std::atomic&lt;bool&gt;` with release/acquire ordering:

```cpp
#include <iostream>
#include <thread>
#include <atomic>

int data = 0;
std::atomic<bool> ready{false};

void producer() {
    data = 42;
    ready.store(true, std::memory_order_release);
}

void consumer() {
    while (!ready.load(std::memory_order_acquire)) {
        // spin
    }
    std::cout << "data = " << data << "\n";
}

int main() {
    std::thread t1(producer);
    std::thread t2(consumer);
    t1.join();
    t2.join();
    return 0;
}
```

Now the release store in the producer synchronizes-with the acquire load in the consumer,
guaranteeing that `data = 42` is visible when `ready` is observed as `true`.

## `volatile` vs. `atomic` vs. `mutex`

A common source of confusion is the relationship between `volatile`, `std::atomic`, and
`std::mutex`:

| Feature                 | `volatile`                         | `std::atomic`                         | `std::mutex`                    |
| :---------------------- | :--------------------------------- | :------------------------------------ | :------------------------------ |
| **Compiler reordering** | Prevents some optimizations        | Prevents (based on memory order)      | Prevents (acquire/release)      |
| **CPU reordering**      | No effect                          | Prevents (based on memory order)      | Prevents (mfence/lock prefix)   |
| **Atomicity**           | No                                 | Yes                                   | Yes                             |
| **Thread safety**       | No                                 | Yes (for individual variables)        | Yes (for arbitrary scopes)      |
| **Performance**         | Low overhead (but incorrect)       | Low-medium (hardware instructions)    | High (syscall on contention)    |
| **Use case**            | Signal handlers, memory-mapped I/O | Lock-free algorithms, flags, counters | General-purpose synchronization |

**`volatile` does NOT provide thread safety.** It prevents the compiler from optimizing away reads
or writes, but it provides no atomicity and no memory ordering guarantees. On x86, `volatile` stores
compile to plain `mov` instructions without `mfence` or `lock` prefix. On ARM, `volatile` compiles
to plain `str`/`ldr` without barriers.

**`std::atomic` is the correct tool** for variables shared between threads. It provides both
atomicity and configurable memory ordering.

**`std::mutex` is the safest tool.** It provides the strongest guarantees (sequentially consistent
acquire/release semantics) at the cost of potential kernel-level contention.

## Architecture-Specific Memory Models

Different CPU architectures provide different hardware-level memory ordering guarantees. This
affects which C++ memory orders are necessary and which are free (compile to no extra instructions).

| Architecture   | Memory Model            | Store-Store   | Store-Load  | Load-Load     | Load-Store    |
| :------------- | :---------------------- | :------------ | :---------- | :------------ | :------------ |
| **x86/x86-64** | TSO (Total Store Order) | No reordering | **Allowed** | No reordering | No reordering |
| **ARMv8**      | Weakly Ordered          | Allowed       | Allowed     | Allowed       | Allowed       |
| **RISC-V**     | Weakly Ordered (RVWMO)  | Allowed       | Allowed     | Allowed       | Allowed       |
| **POWER**      | Weakly Ordered          | Allowed       | Allowed     | Allowed       | Allowed       |

**x86 TSO implications:**

- `memory_order_acquire` on x86 compiles to a plain load (no fence needed).
- `memory_order_release` on x86 compiles to a plain store (no fence needed).
- `memory_order_seq_cst` on x86 requires an `mfence` or locked instruction only for stores.
- Store-to-load reordering is the only CPU-level reordering on x86.

**ARM implications:**

- `memory_order_acquire` requires `LDAR` (Load-Acquire) instruction.
- `memory_order_release` requires `STLR` (Store-Release) instruction.
- `memory_order_seq_cst` requires `DMB` (Data Memory Barrier).
- All four reorderings are possible without explicit barriers.

This means that code relying on "it works on x86" without proper atomics will break when ported to
ARM (Apple Silicon, Android) or RISC-V (embedded).

## Compiler Fence: `std::atomic_signal_fence` and `std::atomic_thread_fence`

C++ provides explicit fence operations in addition to atomic load/store:

```cpp
#include <atomic>

// Hardware fence: prevents both compiler and CPU reordering
std::atomic_thread_fence(std::memory_order_release);

// Compiler fence only: prevents compiler reordering but generates no CPU instructions
std::atomic_signal_fence(std::memory_order_release);
```

**When to use fences vs. atomic operations:**

- Prefer atomic load/store with explicit memory order. They are clearer and more portable.
- Fences are useful when you need to order non-atomic accesses relative to atomic accesses.
- `atomic_signal_fence` is useful in signal handlers where CPU fences may not be safe.

```cpp
// Example: publish data using a fence instead of atomic store
int data = 0;
std::atomic<bool> ready{false};

void producer() {
    data = 42;
    std::atomic_thread_fence(std::memory_order_release);
    ready.store(true, std::memory_order_relaxed);
}

void consumer() {
    while (!ready.load(std::memory_order_relaxed)) {
        // spin
    }
    std::atomic_thread_fence(std::memory_order_acquire);
    std::cout << "data = " << data << "\n";  // Guaranteed to see 42
}
```

## Common Pitfalls

- **Relying on x86 TSO for correctness:** Code that works on x86 due to its strong memory model may
  fail on ARM or RISC-V. Always use explicit atomics, even on x86.
- **Using `volatile` for thread communication:** `volatile` does not prevent CPU reordering and does
  not provide atomicity. Use `std::atomic` instead.
- **Forgetting that sequenced-before is not happens-before:** Within a single thread,
  sequenced-before provides ordering. But cross-thread ordering requires synchronizes-with (atomics,
  mutexes, condition variables).
- **Data races cause undefined behavior:** Any unsynchronized concurrent access to a non-atomic
  variable is a data race, which makes the entire program's behavior undefined [N4950 §6.9.4.1].
  This is not just a correctness issue; the compiler is allowed to generate arbitrary code.
- **Double-checked locking without atomics:** The classic "check, lock, check" pattern requires
  `std::atomic` or `std::call_once`. A plain bool flag with `volatile` is insufficient because the
  compiler and CPU may reorder the initialization after the flag write.

## See Also

- [Cache Coherency (MESI) and False Sharing](./2_cache_coherency.md)
- [Memory Orderings](./4_memory_orderings.md)
- [Atomic Operations and Lock-Free Programming](./3_atomic_operations.md)
