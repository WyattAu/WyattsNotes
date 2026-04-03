---
title: Common Pitfalls
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: common-pitfalls-smart-pointers
---

# Common Pitfalls

Smart pointers eliminate many classes of resource bugs, but misuse still leads to leaks, undefined
behavior, and performance regressions. This section covers the most common pitfalls encountered when
working with `std::unique_ptr`, `std::shared_ptr`, and raw `new`/`delete`.

## 5.1 Raw `new`/`delete` vs Smart Pointers

Never write raw `delete` in application code. Every `new` should be immediately wrapped in a smart
pointer or managed by a container:

```cpp
// Bad
auto* obj = new Widget();
// ... complex logic ...
delete obj;  // If an exception occurs between new and delete, leak.

// Good
auto obj = std::make_unique<Widget>();
// ... complex logic ...
// Destructor runs automatically, no leak possible.
```

## 5.2 `std::make_unique` vs `new` in Expressions — Exception Safety

Consider a function call where the argument evaluation order matters:

```cpp
void process(std::unique_ptr<Widget> w, int compute_risk());

// Dangerous: if compute_risk() throws after new Widget() succeeds,
// the raw pointer is leaked before unique_ptr can take ownership.
process(std::unique_ptr<Widget>(new Widget), compute_risk());

// Safe: make_unique performs the allocation internally.
// No intermediate raw pointer exists.
process(std::make_unique<Widget>(), compute_risk());
```

:::info Relevance This is a real bug pattern. The C++ standard allows argument evaluation in any
order [N4950 §7.6.1.9]. If `compute_risk()` is evaluated before the `unique_ptr` constructor, and it
throws, the `new Widget()` allocation is leaked. `make_unique` eliminates this class of bug
entirely. :::

## 5.3 `shared_ptr` Overuse and Reference Cycles

`shared_ptr` should not be the default ownership model. Its overhead is substantial and its
reference cycles are insidious leaks that tools like AddressSanitizer may not detect (the memory is
still reachable via the cycle).

**Guidelines:**

- Use `unique_ptr` for single-owner semantics (the vast majority of cases).
- Use `shared_ptr` only when ownership is genuinely shared and the lifetime is non-trivial.
- Use `weak_ptr` to observe `shared_ptr`-managed objects without extending their lifetime.
- For tree structures, prefer `unique_ptr` for children and raw pointers for parent back-references.

## 5.4 Aliasing Constructor of `shared_ptr`

The aliasing constructor of `shared_ptr` creates a `shared_ptr` that shares ownership with another
`shared_ptr` but points to a different object:

```cpp
#include <memory>

struct Person {
    std::string name;
    int age;
};

void aliasing_demo() {
    auto person = std::make_shared<Person>();

    // shares ownership with person, but points to person->age
    std::shared_ptr<int> age_ptr(person, &person->age);

    // Both person and age_ptr share the same control block.
    // The Person object is destroyed when BOTH go out of scope.
    // age_ptr is a dangling pointer after person is destroyed!
}
```

:::warning The aliasing constructor is useful but dangerous. The aliased pointer does not extend the
lifetime of the member it points to — it only extends the lifetime of the **owning** object. If the
owning object is destroyed first, the aliased pointer dangles. Use cases include returning pointers
to members from APIs that need to express shared ownership of the containing object. :::

## Summary

| Ownership Model    | Smart Pointer        | Size (x86_64) | Semantics                   | Thread-Safe Refcount |
| :----------------- | :------------------- | :------------ | :-------------------------- | :------------------- |
| Exclusive          | `std::unique_ptr<T>` | 8 bytes       | Move-only                   | N/A (single owner)   |
| Shared             | `std::shared_ptr<T>` | 16 bytes      | Copyable                    | Yes (atomic)         |
| Non-owning observe | `std::weak_ptr<T>`   | 16 bytes      | Not directly dereferencable | N/A                  |

The hierarchy of preference is clear: `unique_ptr` first, `shared_ptr` when genuinely needed, raw
pointers only for non-owning observation, and `weak_ptr` specifically to break `shared_ptr` cycles.

## See Also

- [Unique Ownership (std::unique_ptr) and EBO](2_unique_ptr.md)
- [Shared Ownership (std::shared_ptr) and Control Block](3_shared_ptr.md)
- [Weak Pointers and Cyclic Reference Breaking](4_weak_ptr.md)
