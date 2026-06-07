---
title: Resource Management and Move Semantics
description:
  'C++ Programming Resource Management and Move Semantics notes covering key definitions, core
  concepts, worked examples, and practice questions for revision.'
date: 2026-03-31T00:00:00.000Z
tags:
  - cpp
categories:
  - cpp
slug: resource-management-intro
---

Part 4 addresses the central problem in systems programming: **who is responsible for releasing a
Resource, and when does that release occur?**

In garbage-collected languages, the runtime answers this question for you. In C++, the programmer
Must establish explicit ownership contracts. When these contracts are violated, the result is a
Resource leak, a double-free, or use-after-free — all of which are undefined behavior.

This part covers four tightly coupled topics:

1. **Ownership and RAII (Module 10):** The idiomatic C++ mechanism that binds resource lifetime to
   scope. Covers `std::unique_ptr``std::shared_ptr``std::weak_ptr`And custom deleters.

2. **Value Categories and Move Semantics (Module 11):** The type system machinery that enables
   efficient transfer of resources between scopes without copying. Covers lvalues, rvalues, move
   constructors, RVO, and perfect forwarding.

3. **Function Architecture (Module 12):** How ownership interacts with function boundaries —
   parameter passing, return values, lambdas, and C FFI.

4. **Error Handling (Module 13):** Exception safety guarantees, `noexcept`And the modern algebraic
   alternatives (`std::expected``std::variant`).

:::info Prerequisite Reading This part assumes familiarity with stack frames (Module 3.4), heap
Allocation (Module 3.5), pointers (Module 3.6), and class basics (Module 9). Exception mechanics are
Covered in detail in Module 13.

## Common Pitfalls

1. Ignoring feedback from marked work and failing to address recurring weaknesses.

2. Memorising content without understanding the underlying principles — this leads to poor
   application in unfamiliar contexts.

3. Not making connections between different topics within the subject to build a coherent
   understanding.

4. Not practising with past papers or exercises under timed conditions.

### Module Roadmap

**Module 10 — RAII and Smart Pointers** covers the ownership model that distinguishes C++ from
garbage-collected languages. You will learn:

- The RAII pattern: constructors acquire, destructors release
- `std::unique_ptr`: exclusive ownership with zero overhead
- `std::shared_ptr`: shared ownership via reference counting
- `std::weak_ptr`: non-owning observer that breaks cycles
- Custom deleters for non-memory resources (file handles, sockets, locks)

**Module 11 — Move Semantics and Value Categories** explains the type system machinery that makes
efficient transfer possible:

- lvalue, rvalue, xvalue, prvalue, glvalue classifications
- Move constructors and move assignment operators
- Return value optimisation (RVO) and named RVO (NRVO)
- Perfect forwarding with `std::forward`
- When the compiler elides moves entirely

**Module 12 — Function Architecture** addresses ownership at function boundaries:

- Parameter passing guidelines: by value, by reference, by smart pointer
- Return value optimisation and returning large objects
- Lambda captures and their interaction with ownership
- C FFI and passing ownership across language boundaries

**Module 13 — Error Handling and Exception Safety** covers:

- The four exception safety guarantees (no guarantee, basic, strong, nothrow)
- `noexcept` specifications and their performance implications
- `std::expected<T, E>` as an algebraic alternative to exceptions
- `std::variant` for type-safe error channels without heap allocation

### Prerequisites

Before starting this part, ensure you understand:

1. Stack frames and the call stack (Module 3.4)
2. Heap allocation and `new`/`delete` (Module 3.5)
3. Pointers and references (Module 3.6)
4. Class definitions, constructors, and destructors (Module 9)

### Key Concepts

**RAII (Resource Acquisition Is Initialisation)** is the central C++ idiom for resource management.
Every resource — heap memory, file descriptors, mutex locks, database connections — should be
wrapped in a class whose constructor acquires the resource and whose destructor releases it. When
the object goes out of scope, the destructor is guaranteed to run, even if an exception is thrown.

**Smart pointers** automate RAII for heap memory:

- `std::unique_ptr<T>` represents exclusive ownership. It is non-copyable but movable. The deleter
  runs when the `unique_ptr` is destroyed. Zero overhead compared to a raw pointer in release
  builds.
- `std::shared_ptr<T>` represents shared ownership via an atomic reference count. The last
  `shared_ptr` to an object triggers deletion. Useful for graph structures, caches, and observer
  patterns.
- `std::weak_ptr<T>` is a non-owning reference to an object managed by `shared_ptr`. It prevents
  reference cycles in linked data structures.

**Move semantics** (C++11) enable efficient transfer of resources:

- An rvalue reference (`T&&`) binds to temporary objects that are about to expire.
- The move constructor "steals" resources from the source rather than copying them.
- `std::move` casts an lvalue to an rvalue reference, signalling that the object may be moved from.
- The compiler often eliminates move operations entirely via copy/move elision (RVO).

**Exception safety** describes the guarantees a function provides when exceptions are thrown:

- **Nothrow guarantee**: the operation cannot throw (`noexcept`). Destructors, deallocation, and
  swap operations must be nothrow.
- **Strong guarantee**: if an exception is thrown, the program state rolls back to before the
  operation. Achieved by performing all work that might throw before modifying state.
- **Basic guarantee**: if an exception is thrown, the program is in a valid state (no leaks, no
  dangling pointers, invariants hold).
- **No guarantee**: anything might happen. Legacy code and C interoperability.

These four modules build on each other. RAII provides the foundation, move semantics make RAII
efficient for transfers, function architecture applies ownership at API boundaries, and error
handling completes the picture with robust failure modes.

### Common Ownership Patterns

| Pattern              | Smart Pointer                      | Use Case                                        |
| -------------------- | ---------------------------------- | ----------------------------------------------- |
| Exclusive ownership  | `unique_ptr`                       | Default for heap objects, factory return values |
| Shared ownership     | `shared_ptr`                       | Graphs, caches, observer lists                  |
| Non-owning reference | Raw pointer or `reference_wrapper` | Callbacks, iteration, parameter passing         |
| Weak observation     | `weak_ptr`                         | Breaking `shared_ptr` cycles                    |

### Move vs Copy Decision Tree

1. Is the type cheap to copy (e.g., `int`, `span`)? → Copy by value.
2. Is ownership being transferred? → `std::move` into a `unique_ptr`.
3. Is the argument only read? → Pass by `const&`.
4. Is the argument stored? → Pass by value and move internally (`T param` then
   `member = std::move(param)`).

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

