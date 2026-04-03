---
title: Unique Ownership (std::unique_ptr) and EBO
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: unique-ownership-and-ebo
---

# Unique Ownership (std::unique_ptr) and EBO

`std::unique_ptr` is the default smart pointer for exclusive ownership of heap-allocated objects. It
is zero-overhead relative to a raw pointer, supports custom deleters with Empty Base Optimization,
and enforces move-only semantics that make ownership transfers explicit at the call site.

## 2.1 Definition

`std::unique_ptr<T>` is a smart pointer that holds a heap-allocated object via exclusive ownership.
Exactly one `unique_ptr` owns the pointed-to object at any time. When the `unique_ptr` is destroyed,
the object is deleted [N4950 §20.11.1].

```
Layout (default deleter, no EBO savings):
┌──────────────────┐
│ T* ptr_          │  (1 pointer, 8 bytes on x86_64)
└──────────────────┘
sizeof(std::unique_ptr<T>) == sizeof(T*)
```

## 2.2 Construction: `std::make_unique`

Always prefer `std::make_unique<T>(args...)` over `new T(args...)` [N4950 §20.11.3]. The reasons
are:

1. **Exception safety:** `make_unique` performs a single allocation. Expressions like
   `f(unique_ptr<T>(new T), may_throw())` can leak if evaluation order causes `new T` to succeed but
   `may_throw()` throws before the `unique_ptr` is constructed.
2. **No裸 `new` exposure:** The `new` expression is hidden inside the factory, preventing accidental
   raw pointer use.

```cpp
#include <memory>
#include <string>

struct Widget {
    std::string name;
    int value;
    Widget(std::string n, int v) : name(std::move(n)), value(v) {}
};

std::unique_ptr<Widget> create_widget() {
    return std::make_unique<Widget>("sensor", 42);
}

void use_widget() {
    auto w = create_widget();
    // w owns the Widget. When w goes out of scope, the Widget is deleted.
}
```

## 2.3 Move-Only Semantics

`unique_ptr` deletes its copy constructor and copy assignment operator. Ownership can only be
transferred via move:

```cpp
#include <memory>

void sink(std::unique_ptr<int> p) {
    // sink now owns the int
}

void transfer_demo() {
    auto p = std::make_unique<int>(10);

    // auto q = p;                  // ERROR: copy is deleted
    auto q = std::move(p);         // OK: p is now nullptr, q owns the int

    sink(std::move(q));            // OK: q is now nullptr, sink owns the int

    // *p;                          // UB: p is nullptr
}
```

:::info Relevance Move-only semantics are the foundation of C++ ownership discipline. If a function
takes a `unique_ptr` by value, the caller **must** explicitly transfer ownership with `std::move`.
This makes the ownership transfer visible at the call site. :::

## 2.4 Custom Deleters

`std::unique_ptr<T, D>` accepts a second template parameter: the **deleter type** `D`. The deleter
is a callable invoked instead of `delete` when the `unique_ptr` is destroyed [N4950 §20.11.1.2].

When the deleter is stateless (empty class, no captured data), the compiler applies **Empty Base
Optimization (EBO)** and the deleter consumes zero bytes:

```cpp
#include <memory>
#include <cstdio>

struct FileDeleter {
    void operator()(std::FILE* fp) const {
        if (fp) std::fclose(fp);
    }
};

using UniqueFile = std::unique_ptr<std::FILE, FileDeleter>;

void custom_deleter_demo() {
    // sizeof(UniqueFile) == 8 (just the pointer; FileDeleter is empty, EBO applies)
    UniqueFile fp(std::fopen("data.bin", "rb"));
    if (!fp) return;
    // fp is automatically closed when it goes out of scope
}
```

When the deleter captures state (a lambda with captures), its size is added:

```cpp
#include <memory>

void stateful_deleter_demo() {
    // This lambda captures nothing -> EBO applies, sizeof == 8
    auto deleter1 = [](int* p) { delete[] p; };
    std::unique_ptr<int, decltype(deleter1)> p1(new int[10], deleter1);

    // This lambda captures a value -> sizeof == 8 (pointer) + 4 (int capture)
    int log_id = 42;
    auto deleter2 = [log_id](int* p) {
        // Log the deletion (for demonstration; std::println in C++23)
        delete[] p;
    };
    std::unique_ptr<int, decltype(deleter2)> p2(new int[10], deleter2);
    // sizeof(p2) == 16 on most platforms
}
```

## 2.5 Array Specialization

`std::unique_ptr<T[]>` manages arrays. It calls `delete[]` instead of `delete` and provides
`operator[]` instead of `operator*` and `operator->`:

```cpp
#include <memory>
#include <cstddef>

void array_demo() {
    auto arr = std::make_unique<int[]>(100);
    arr[0] = 42;
    // ~unique_ptr<int[]>() calls delete[] arr
}
```

:::warning `std::make_unique` with arrays initializes elements to value-initialization (zero for
built-in types). If you need non-zero initialization, use `std::vector` or construct manually. :::

## See Also

- [RAII Patterns](1_raii_patterns.md)
- [Shared Ownership (std::shared_ptr) and Control Block](3_shared_ptr.md)
- [Common Pitfalls](5_custom_deleters.md)
