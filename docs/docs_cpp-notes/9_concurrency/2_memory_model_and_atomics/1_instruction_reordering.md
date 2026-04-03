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

This section covers the as-if rule and compiler reordering, data and control dependencies, the
happens-before and synchronizes-with relationships, sequential consistency vs relaxed consistency,
and a demonstration of reordering effects across architectures.

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

## Demonstrating Reordering Effects

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

The fix is to use `std::atomic<bool>` with release/acquire ordering:

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

## See Also

- [Cache Coherency (MESI) and False Sharing](./2_cache_coherency.md)
- [Memory Orderings](./4_memory_orderings.md)
- [Atomic Operations and Lock-Free Programming](./3_atomic_operations.md)
