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

### Formal Definition of the As-If Rule

**Definition [N4950 §6.9.2.1]:** Conforming implementations are required to emulate (only) the
observable behavior of the abstract machine. The as-if rule states that any transformation that
preserves the observable behavior of a single-threaded execution is legal.

**Corollary for multi-threading:** Any reordering that does not affect single-threaded behavior but
does affect multi-threaded behavior is legal. The compiler has no obligation to consider other
threads.

### Common Compiler Reordering Transformations

**Register promotion:** A value loaded from memory may be cached in a register across multiple
reads:

```cpp
// Source code
int flag = 0;
while (flag == 0) { /* spin */ }

// Compiler may transform to:
int reg = flag;
if (reg == 0) {
    while (true) { /* infinite loop — flag is never re-read */ }
}
```

This is a legal single-threaded optimization. If `flag` is not `volatile` or `std::atomic`, the
compiler assumes no other agent modifies it.

**Speculative hoisting:** Loads may be hoisted above branches:

```cpp
if (condition) {
    use(x);  // x loaded here
}
// Compiler may move the load above the branch:
auto tmp = x;  // speculative load
if (condition) {
    use(tmp);
}
```

**Store coalescing:** Multiple stores to the same location may be merged:

```cpp
data[0] = 1;
data[0] = 2;
data[0] = 3;
// Compiler may emit only: store data[0] = 3
```

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

### Interleaving Diagram: Store Buffering Litmus Test

The following diagram shows the temporal relationship between stores and loads across two cores:

```
Time →

Core 0:
  ┌──────────┐          ┌──────────┐
  │ store x=1│          │ load  r1 │
  │ (buffer) │          │  from y  │
  └────┬─────┘          └────┬─────┘
       │                     │
       ▼                     │
  ┌──────────┐              │
  │ draining │              │
  │ to cache │              │
  └──────────┘              │
                            │

Core 1:
          ┌──────────┐     ┌──────────┐
          │ store y=1│     │ load  r2 │
          │ (buffer) │     │  from x  │
          └────┬─────┘     └────┬─────┘
               │                │
               ▼                │
          ┌──────────┐         │
          │ draining │         │
          │ to cache │         │
          └──────────┘         │
```

Both loads execute before the other core's store drains from its store buffer, so both `r1 = 0` and
`r2 = 0` is a valid outcome.

## Data Dependency and Control Dependency Ordering

A **data dependency** exists when the address or value of one memory access depends on the value
read by a prior memory access:

$$\mathrm{data dependency: } a[i] \to b[a[i]]$$

A **control dependency** exists when whether a memory access executes depends on the value read by a
prior access:

$$\mathrm{control dependency: } \mathrm{if } (x) \{ y = 1; \}$$

:::warning Control dependencies do **not** prevent reordering on all architectures. On x86, control
dependencies provide ordering, but on ARM and POWER, the processor may speculatively execute the
dependent load before the controlling branch is resolved. Always use explicit memory ordering
(acquire/release) rather than relying on control dependencies. :::

### Data Dependencies as Ordering

On most architectures, a true data dependency (RAW — Read After Write) prevents reordering because
the consumer instruction cannot execute until the producer has produced the value. This is a
hardware dependency, not a memory ordering guarantee:

```cpp
// Data dependency prevents reordering of the load of b[i]
int idx = a[0];  // load a[0]
int val = b[idx]; // load b[a[0]] — cannot execute until idx is known
```

However, **address dependencies** (where only the _address_ depends on a prior load, not the value)
are weaker. On ARM and POWER, address dependencies provide ordering, but on some architectures even
this is not guaranteed. Always use explicit atomics for correctness.

## Sequenced-Before Relationship

The **sequenced-before** relation [N4950 §6.9.4.1] is the intra-thread ordering. If evaluation A is
sequenced-before evaluation B, then A's side effects are visible to B. Within a single thread, the
sequenced-before relation is determined by the abstract machine's evaluation order:

- In a single expression, the order is determined by operator precedence and sequencing rules.
- Between statements, the order is top-to-bottom.
- Function arguments are **unsequenced** with respect to each other (prior to C++17). In C++17, the
  operands of `=` are indeterminately sequenced.

$$A \xrightarrow{\mathrm{seq}} B \implies B \mathrm{ observes } A \mathrm{'s side effects within the same thread}$$

## Happens-Before Relationship

The **happens-before** relation [N4950 §6.9.4.1] is a strict partial order ($\prec$) on evaluations
within a single execution. If evaluation $A$ happens-before evaluation $B$, then $B$ observes all
side effects of $A$.

The happens-before relation is the **transitive closure** of:

1. **Sequenced-before** ($\xrightarrow{\mathrm{seq}}$): Within a single thread, operations are
   ordered by the abstract machine.
2. **Synchronizes-with**: A release operation on an atomic object $M$ in thread $A$
   **synchronizes-with** an acquire operation on $M$ in thread $B$ if $B$ reads a value written (or
   released) by $A$.
3. **Sequenced-before is transitive**: If $A \xrightarrow{\mathrm{seq}} B$ and
   $B \xrightarrow{\mathrm{seq}} C$, then $A \xrightarrow{\mathrm{seq}} C$.

$$A \prec B \iff \exists\, C_1, C_2, \ldots, C_n : A \xrightarrow{\mathrm{seq}} C_1 \xrightarrow{\mathrm{sw}} C_2 \xrightarrow{\mathrm{seq}} \ldots \xrightarrow{\mathrm{sw}} C_n \xrightarrow{\mathrm{seq}} B$$

**Formal definition:** $A$ happens-before $B$ ($A \prec B$) if and only if there exists a chain of
sequenced-before and synchronizes-with edges connecting $A$ to $B$. The relation is irreflexive (no
element happens-before itself), asymmetric, and transitive.

If $A \prec B$ and both $A$ and $B$ access the same memory location, and at least one is a write,
then $B$ observes the side effects of $A$ (there is no data race).

### Proof: Happens-Before Prevents Data Races

**Claim:** If two evaluations $A$ and $B$ access the same memory location $M$, and at least one is a
write, and $A \prec B$, then there is no data race [N4950 §6.9.4.1].

**Proof:**

1. By definition of happens-before, there exists a chain of sequenced-before and synchronizes-with
   edges from $A$ to $B$.
2. Sequenced-before guarantees that within a single thread, the second evaluation observes all side
   effects of the first.
3. Synchronizes-with guarantees that an acquire operation in thread 2 observes all side effects
   sequenced-before the matching release operation in thread 1.
4. By transitivity, $B$ observes all side effects of $A$.
5. Therefore, $A$ and $B$ are ordered, and no data race exists.

$\square$

## Synchronizes-With Relationship

A release store to an atomic variable in thread 1 **synchronizes-with** an acquire load of that same
variable in thread 2 if the load reads the value stored (or a value written later by a release
operation) [N4950 §31.7.5]:

$$\mathrm{store}_{\mathrm{release}}(x, v) \xrightarrow{\mathrm{sw}} \mathrm{load}_{\mathrm{acquire}}(x, v)$$

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

### Formal Definition of Sequential Consistency

A set of operations is sequentially consistent if there exists a total order $T$ over all operations
such that [N4950 §31.7.5]:

1. $T$ is consistent with the program order of each thread (if $op_1$ is sequenced-before $op_2$ in
   the same thread, then $op_1$ appears before $op_2$ in $T$).
2. $T$ respects the read-after-write coherence: every read of location $x$ returns the value of the
   last write to $x$ in $T$.

The C++ memory model guarantees that all `memory_order_seq_cst` operations participate in a single
total order $S$, called the **modification order**, which is consistent with all happens-before
relationships.

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

### x86-TSO Memory Model

x86 implements **Total Store Order** (TSO), which provides the following guarantees [Intel SDM, Vol.
3, §8.2]:

1. **Stores are not reordered with other stores.** All stores appear in program order to all
   processors.
2. **Loads are not reordered with other loads.** All loads appear in program order.
3. **Loads are not reordered with older stores to the same location.** (Store forwarding.)
4. **Stores may be reordered with older loads.** This is the **only** reordering allowed by TSO.
5. **A processor may read its own stores before they become visible to other processors.**

TSO can be modeled as a per-core FIFO **store buffer** between the CPU and the L1 cache. Stores
enter the buffer in program order and drain to the cache in program order, but loads may bypass
pending stores to _different_ addresses.

### ARMv8 Memory Model

ARMv8 provides a **weakly ordered** model with optional barrier instructions:

| Instruction | Barrier Type                        | Effect                                                                      |
| :---------- | :---------------------------------- | :-------------------------------------------------------------------------- |
| `DMB`       | Full Data Memory Barrier            | All memory accesses before the barrier complete before any after it         |
| `DSB`       | Data Synchronization Barrier        | All memory accesses complete, no subsequent instructions execute until done |
| `ISB`       | Instruction Synchronization Barrier | Flushes the pipeline, fetches instructions from new point                   |
| `LDAR`      | Load-Acquire                        | Acquire semantics on the load                                               |
| `STLR`      | Store-Release                       | Release semantics on the store                                              |

### C++ Memory Order to Hardware Instruction Mapping

| C++ Memory Order | x86-64 Instruction                                             | ARMv8 Instruction     |
| :--------------- | :------------------------------------------------------------- | :-------------------- |
| `relaxed`        | `mov` (plain load/store)                                       | `ldr` / `str` (plain) |
| `acquire`        | `mov` (no fence needed)                                        | `ldar`                |
| `release`        | `mov` (no fence needed)                                        | `stlr`                |
| `acq_rel`        | `mov` (no fence for load; `mfence` before store is not needed) | `ldar` + `stlr` pair  |
| `seq_cst`        | `lock` prefix or `mfence`                                      | `dmb ish`             |

This means that code relying on "it works on x86" without proper atomics will break when ported to
ARM (Apple Silicon, Android) or RISC-V (embedded).

## MESI Cache Protocol Overview

The MESI (Modified-Exclusive-Shared-Invalid) cache coherence protocol governs how cache lines
interact across cores. While this is a hardware mechanism (not part of the C++ memory model), it
provides essential intuition for understanding memory ordering:

| State             | Description                                                     |
| :---------------- | :-------------------------------------------------------------- |
| **M** (Modified)  | This cache has the only valid copy; it differs from main memory |
| **E** (Exclusive) | This cache has the only valid copy; it matches main memory      |
| **S** (Shared)    | Multiple caches have valid copies matching main memory          |
| **I** (Invalid)   | This cache line is not valid                                    |

When a core writes to a cache line in **Shared** state, it must issue an **RFO
(Read-For-Ownership)** request that invalidates all other copies. This invalidation traffic is the
root cause of the performance cost of atomics with stronger memory ordering. The store buffer exists
to decouple the core from this invalidation latency.

The relationship between MESI and memory ordering is:

- **Store buffers** allow store-to-load reordering (the core reads from cache while the store waits
  for invalidation acknowledgments).
- **Invalidation latency** is why release/acquire on x86 is free (stores are already ordered) but
  costs instructions on ARM (explicit barriers are needed to ensure invalidation completes).

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

### Formal Fence Semantics

A release fence $F_r$ **synchronizes-with** an acquire fence $F_a$ if [N4950 §31.7.7]:

1. There exists an atomic operation $X$ such that $F_r$ is sequenced-before $X$ and $X$ is
   sequenced-before $F_a$.
2. $X$ reads a value written by (or releases-after) an atomic operation $Y$ that is sequenced-after
   $F_r$.

This means fences create ordering without modifying the atomic operations themselves — they add
ordering constraints to the _surrounding_ code.

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
- **Mixing relaxed and non-relaxed atomics on the same variable:** While legal, this is error-prone.
  If any thread uses `memory_order_seq_cst` on a variable, all accesses to that variable should
  typically use the same ordering unless you have a specific reason to relax.

## Store Buffering: The Litmus Test

The store-buffering phenomenon (also called "Store Buffering" or "4-store SB") is the canonical
litmus test for memory model correctness. It demonstrates that even when each core's stores appear
in order locally, the global order may differ:

```
Initial state: x = 0, y = 0

Core 0:                  Core 1:
  store x = 1              store y = 1
  load r1 = y              load r2 = x

Question: Can r1 = 0 AND r2 = 0?
```

**x86 answer: Yes.** x86 TSO allows store-to-load reordering. The store to `x` sits in Core 0's
store buffer while the load from `y` executes, reading the stale value. The same happens on Core 1.

**ARM/POWER answer: Yes.** Weakly ordered architectures allow even more reorderings. The stores may
be observed in any order by the other core.

**Sequentially consistent answer: No.** Under `memory_order_seq_cst`, at least one load must see the
other core's store.

```cpp
#include <atomic>
#include <thread>
#include <iostream>

std::atomic<int> x{0}, y{0};
int r1 = 0, r2 = 0;

void thread0() {
    x.store(1, std::memory_order_relaxed);
    r1 = y.load(std::memory_order_relaxed);
}

void thread1() {
    y.store(1, std::memory_order_relaxed);
    r2 = x.load(std::memory_order_relaxed);
}

int main() {
    int observed_both_zero = 0;
    constexpr int iterations = 1000000;

    for (int i = 0; i < iterations; ++i) {
        x.store(0, std::memory_order_relaxed);
        y.store(0, std::memory_order_relaxed);
        r1 = r2 = 0;

        std::thread t0(thread0);
        std::thread t1(thread1);
        t0.join();
        t1.join();

        if (r1 == 0 && r2 == 0) ++observed_both_zero;
    }

    std::cout << "r1=0 && r2=0 observed " << observed_both_zero
              << " / " << iterations << " times\n";
}
```

On x86, this will observe `r1=0 && r2=0` approximately 0-5% of the time (due to store buffer drain
latency). On ARM, the percentage can be significantly higher. With `memory_order_seq_cst`, the count
drops to exactly zero.

## Proof: Data Races Are Undefined Behavior

**Claim:** If two conflicting evaluations (at least one is a write) on the same memory location are
not ordered by happens-before, the behavior is undefined [N4950 §6.9.4.1].

**Proof:**

1. [N4950 §6.9.4.1] defines a **data race** as two conflicting evaluations that are not
   sequenced-before / happens-before each other.
2. [N4950 §6.9.4.1] states: "If there are two conflicting evaluations, at least one of which is
   atomic, and neither happens before the other, the behavior is undefined."
3. For non-atomic accesses, the standard is even stricter: any concurrent conflicting access is UB,
   regardless of atomicity.
4. The rationale: the compiler is free to optimize as-if the program is single-threaded. A data race
   violates the as-if rule's assumptions, so all guarantees are void.

$\square$

**Practical consequence:** The compiler may:

- Hoist loads out of loops (reading stale data).
- Eliminate stores (assuming no other thread observes them).
- Split or merge memory operations.
- Generate arbitrary code for the data-racing region.

## Compiler Barrier Semantics

The distinction between `std::atomic_thread_fence` and `std::atomic_signal_fence` is subtle but
critical for systems programming:

**`std::atomic_thread_fence`** [N4950 §31.7.7] generates both a **compiler barrier** (preventing the
compiler from reordering loads/stores across the fence) and a **hardware fence** (CPU instructions
like `mfence` on x86, `DMB` on ARM). It is the correct tool for inter-thread synchronization.

**`std::atomic_signal_fence`** [N4950 §31.7.7] generates only a **compiler barrier**. It emits zero
CPU instructions. It is designed for synchronization between a thread and a signal handler running
on the **same thread**, where hardware fences are unnecessary because the signal handler runs on the
same core and sees all prior stores.

```cpp
#include <atomic>
#include <csignal>
#include <iostream>

volatile sig_atomic_t signal_flag = 0;

void signal_handler(int) {
    signal_flag = 1;
    std::atomic_signal_fence(std::memory_order_release);
}

int main() {
    std::signal(SIGUSR1, signal_handler);

    while (true) {
        std::atomic_signal_fence(std::memory_order_acquire);
        if (signal_flag) {
            std::cout << "Signal received\n";
            break;
        }
    }
}
```

The `atomic_signal_fence` pair ensures the compiler does not hoist the `signal_flag` read before the
loop or cache it in a register, without emitting any CPU barrier instructions.

## See Also

- [Cache Coherency (MESI) and False Sharing](./2_cache_coherency.md)
- [Memory Orderings](./4_memory_orderings.md)
- [Atomic Operations and Lock-Free Programming](./3_atomic_operations.md)
