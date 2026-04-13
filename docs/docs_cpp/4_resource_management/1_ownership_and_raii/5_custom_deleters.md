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
working with `std::unique_ptr`, `std::shared_ptr`, and raw `new`/`delete`, then dives into custom
deleter patterns and their implications.

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

:::info
Relevance This is a real bug pattern. The C++ standard allows argument evaluation in any
order [N4950 S7.6.1.9]. If `compute_risk()` is evaluated before the `unique_ptr` constructor, and it
throws, the `new Widget()` allocation is leaked. `make_unique` eliminates this class of bug
entirely.
:::

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

:::warning
The aliasing constructor is useful but dangerous. The aliased pointer does not extend the
lifetime of the member it points to — it only extends the lifetime of the **owning** object. If the
owning object is destroyed first, the aliased pointer dangles. Use cases include returning pointers
to members from APIs that need to express shared ownership of the containing object.
:::

## 5.5 Custom Deleters

Smart pointers support **custom deleters** — callable objects invoked instead of `delete` when the
managed object is destroyed. This is essential for resources that are not heap-allocated with `new`,
such as C library handles, memory from custom allocators, or OS file descriptors.

### 5.5.1 Function Pointer Deleters

The simplest custom deleter is a free function pointer:

```cpp
#include <memory>
#include <cstdio>

struct FileCloser {
    void operator()(std::FILE* fp) const noexcept {
        if (fp) std::fclose(fp);
    }
};

using unique_file = std::unique_ptr<std::FILE, FileCloser>;

void write_to_file(const char* path) {
    unique_file fp(std::fopen(path, "w"));
    if (!fp) throw std::runtime_error("cannot open file");

    std::fprintf(fp.get(), "Hello, RAII!\n");
    // ~unique_file calls FileCloser::operator(), which calls fclose.
}
```

#### Proof: Stateless Deleters Add Zero Overhead [N4950 S20.11.1.2.1]

**Claim:** A stateless deleter (empty class) adds zero size overhead to `std::unique_ptr`.

**Argument:** `std::unique_ptr&lt;T, D&gt;` is specified as a class template containing a data
member of type `D` [N4950 S20.11.1.2.1]. When `D` is an empty class (no non-static data members, no
virtual functions, no base classes with non-zero size), the Empty Base Optimization (EBO) allows the
compiler to make `D` a zero-size base class of the internal compressed pair, rather than a member.

**Formal statement from the standard:** The specification requires that
`sizeof(unique_ptr&lt;T, D&gt;)` equals `sizeof(T*)` when `D` is an empty class with a specific
layout. The internal implementation uses `std::tuple&lt;T*, D&gt;` or a compressed pair, which
applies EBO when `D` is empty.

**Verification:**

```cpp
#include <memory>
#include <iostream>
#include <type_traits>

struct EmptyDeleter {
    void operator()(int* p) const noexcept { delete p; }
};

struct PaddedDeleter {
    std::size_t state;
    void operator()(int* p) const noexcept { delete p; }
};

int main() {
    std::cout << sizeof(std::unique_ptr<int>) << "\n";
    std::cout << sizeof(std::unique_ptr<int, EmptyDeleter>) << "\n";
    std::cout << sizeof(std::unique_ptr<int, PaddedDeleter>) << "\n";

    static_assert(sizeof(std::unique_ptr<int, EmptyDeleter>) == sizeof(int*),
                  "stateless deleter must add zero overhead");

    static_assert(sizeof(std::unique_ptr<int, PaddedDeleter>) > sizeof(int*),
                  "stateful deleter must add overhead");
}
```

Output on x86_64:

```
8
8
16
```

The `EmptyDeleter` instance is zero-sized after EBO. The `PaddedDeleter` instance occupies 8 bytes
(the `std::size_t` member), increasing `sizeof(unique_ptr)` from 8 to 16.

**Why this matters:** The standard's guarantee enables zero-cost abstractions. You can define a
semantically rich deleter type (with a descriptive name, a `noexcept` operator, logging in debug
mode) without paying any runtime cost in release builds, as long as the deleter carries no state.

### 5.5.2 Lambda Deleters

Lambdas are often more convenient than named functors. They capture context and require no separate
type definition:

```cpp
#include <memory>
#include <dlfcn.h>

// Dynamic library handle with RAII cleanup
auto make_lib_handle(const char* path) {
    void* handle = dlopen(path, RTLD_LAZY);
    if (!handle) throw std::runtime_error(dlerror());
    return std::unique_ptr<void, decltype([](void* h) noexcept {
        if (h) dlclose(h);
    })>(handle);
}

void use_dynamic_lib() {
    auto lib = make_lib_handle("./libexample.so");
    // ~unique_ptr calls dlclose via the lambda deleter
}
```

:::info
Each unique lambda type produces a different `std::unique_ptr` type. Two `unique_ptr`s with
different lambda deleters (even lexically identical lambdas) are incompatible types [N4950
S20.11.1.2.1]. Use `decltype` or a named functor if you need a shared type across translation units.
:::

#### Lambda Capture Implications on Deleter Type and Storage

The capture list of a lambda directly determines whether the deleter is stateless (zero-overhead via
EBO) or stateful (adds `sizeof(captures)` to the `unique_ptr`):

```cpp
#include <memory>
#include <iostream>

// Captureless: stateless, sizeof(unique_ptr) == 8
auto make_stateless() {
    return std::unique_ptr<int, decltype([](int* p) noexcept { delete p; })>(
        new int(42));
}

// Capturing by value: stateful, sizeof(unique_ptr) == 8 + sizeof(captures)
auto make_stateful(int log_level) {
    return std::unique_ptr<int, decltype([log_level](int* p) noexcept {
        delete p;
        // Could log with log_level in debug builds
        (void)log_level;
    })>(new int(42));
}

// Capturing by reference: UB if reference outlives unique_ptr
auto make_dangerous(int& ref) {
    return std::unique_ptr<int, decltype([&ref](int* p) noexcept {
        delete p;
        ref = 0;  // dangling reference if ref's scope ended
    })>(new int(42));
}

int main() {
    std::cout << sizeof(decltype(make_stateless()())) << "\n";  // 8
    std::cout << sizeof(decltype(make_stateful(0)())) << "\n";  // 16 (captures int)
}
```

**Rules for lambda deleters:**

| Capture Mode         | Stateless? | `sizeof` Overhead                    | Safe?                                                    |
| :------------------- | :--------- | :----------------------------------- | :------------------------------------------------------- |
| No captures          | Yes        | 0 bytes                              | Yes                                                      |
| Capture by value     | No         | `sizeof(captured values)`            | Yes (copies are owned)                                   |
| Capture by reference | No         | 0 bytes (reference is pointer-sized) | **Dangerous:** dangling reference if referent dies first |

:::warning
Never capture by reference in a lambda deleter unless the referent is guaranteed to
outlive the `unique_ptr`. Since the deleter runs in the `unique_ptr` destructor, which runs when the
`unique_ptr` goes out of scope, any captured reference must refer to an object with equal or greater
scope. This is easy to violate in practice — prefer capturing by value.
:::

### 5.5.3 Functor Deleters with State

A functor deleter can carry state, which is useful when the cleanup requires additional context:

```cpp
#include <memory>
#include <cstdlib>

struct MallocDeleter {
    std::size_t reported_size;

    void operator()(void* ptr) const noexcept {
        if (ptr) {
            // Could log reported_size for diagnostics
            std::free(ptr);
        }
    }
};

using unique_malloc = std::unique_ptr<void, MallocDeleter>;

void process_buffer() {
    constexpr std::size_t buf_size = 4096;
    unique_malloc buf(std::malloc(buf_size), MallocDeleter{buf_size});
    if (!buf) throw std::bad_alloc();
    std::memset(buf.get(), 0, buf_size);
}
```

### 5.5.4 Array Deleters

When `std::unique_ptr` manages an array, the default deleter calls `delete[]`. But if the array was
allocated with a custom allocator, you need a custom array deleter:

```cpp
#include <memory>
#include <cstdlib>

struct AlignedDeleter {
    void operator()(void* ptr) const noexcept {
        if (ptr) std::free(ptr);
    }
};

using unique_aligned = std::unique_ptr<void, AlignedDeleter>;

void aligned_allocation() {
    constexpr std::size_t alignment = 64;
    constexpr std::size_t size = 1024;

    void* raw = nullptr;
    if (posix_memalign(&raw, alignment, size) != 0)
        throw std::bad_alloc();

    unique_aligned buf(raw);
    // ~unique_aligned calls std::free, which is correct for posix_memalign
}
```

For `std::shared_ptr`, array semantics are handled differently. The default deleter calls `delete`,
not `delete[]`, so you **must** provide an array-aware deleter when managing arrays:

```cpp
#include <memory>

// Correct: shared_ptr with array deleter
auto arr = std::shared_ptr<int[]>(new int[10], std::default_delete<int[]>());

// WRONG: this calls delete, not delete[] — undefined behavior for arrays
// auto bad = std::shared_ptr<int>(new int[10]);
```

## 5.6 `unique_ptr` with Custom Deleters and Sizeof Implications

`std::unique_ptr` uses zero-overhead storage for stateless deleters thanks to the Empty Base
Optimization (EBO). A stateless functor deleter adds no size overhead:

```cpp
#include <memory>
#include <iostream>

struct StatelessDeleter {
    void operator()(int* p) const noexcept { delete p; }
};

struct StatefulDeleter {
    std::size_t padding;
    void operator()(int* p) const noexcept { delete p; }
};

int main() {
    std::cout << sizeof(std::unique_ptr<int>) << "\n";                     // 8 (x86_64)
    std::cout << sizeof(std::unique_ptr<int, StatelessDeleter>) << "\n";   // 8 (EBO applies)
    std::cout << sizeof(std::unique_ptr<int, StatefulDeleter>) << "\n";    // 16 (deleter stored)
    std::cout << sizeof(std::unique_ptr<int, void(*)(int*)>) << "\n";      // 16 (function pointer)
}
```

| Deleter Type                    | Overhead (x86_64) | Notes                    |
| ------------------------------- | ----------------- | ------------------------ |
| Default (`std::default_delete`) | 0 bytes           | EBO                      |
| Stateless functor               | 0 bytes           | EBO [N4950 S20.11.1.2.1] |
| Stateful functor                | `sizeof(deleter)` | Stored inline            |
| Function pointer                | 8 bytes           | Stored inline            |
| Lambda (no capture)             | 0 bytes           | Stateless, EBO applies   |
| Lambda (captures)               | Size of captures  | Stored inline            |

:::tip
Prefer stateless functor deleters or captureless lambdas to avoid size overhead. If a deleter
must carry state, consider whether `std::shared_ptr` with a capturing lambda is more appropriate,
since `shared_ptr` type-erases the deleter into the control block.
:::

### Compile-Time Analysis of Deleter Storage

The compiler can determine at compile time whether a deleter adds overhead and whether it is
invocable. This enables static analysis and `static_assert` guards:

```cpp
#include <memory>
#include <type_traits>

template<typename T, typename D>
constexpr bool deleter_is_empty_v =
    std::is_empty_v<D> && !std::is_final_v<D>;

template<typename T, typename D>
void verify_deleter_overhead() {
    static_assert(std::is_invocable_v<D, T*>,
                  "deleter must be invocable with T*");
    static_assert(std::is_nothrow_invocable_v<D, T*>,
                  "deleter must be noexcept — throwing in a destructor is UB");

    if constexpr (deleter_is_empty_v<T, D>) {
        static_assert(sizeof(std::unique_ptr<T, D>) == sizeof(T*),
                      "stateless deleter must not increase sizeof(unique_ptr)");
    }
}

struct GoodDeleter {
    void operator()(int* p) const noexcept { delete p; }
};

int main() {
    verify_deleter_overhead<int, GoodDeleter>();  // Passes all checks
}
```

The `!std::is_final_v&lt;D&gt;` check is necessary because EBO requires the empty class to be used
as a base class, and `final` classes cannot be bases. A `final` empty deleter would occupy storage
despite having no members.

## 5.7 `shared_ptr` with Custom Deleters and Control Block Layout

Unlike `std::unique_ptr`, `std::shared_ptr` **type-erases** its deleter. The deleter is stored in
the control block, not in the `shared_ptr` object itself. This means:

- `sizeof(std::shared_ptr<T>)` is always 16 bytes on x86_64 (two pointers), regardless of the
  deleter.
- The deleter is allocated alongside the control block, adding a small heap allocation overhead.
- The deleter can be changed at runtime (via the aliasing constructor or `reset` with a new
  deleter).

```cpp
#include <memory>
#include <cstdio>

void shared_with_custom_deleter() {
    auto deleter = [](std::FILE* fp) noexcept {
        if (fp) std::fclose(fp);
    };

    std::shared_ptr<std::FILE> fp(std::fopen("output.txt", "w"), deleter);

    // sizeof(fp) is 16 bytes regardless of deleter
    // The control block stores: strong count, weak count, deleter, allocator

    std::fprintf(fp.get(), "Hello via shared_ptr!\n");
    // ~shared_ptr invokes the lambda deleter
}
```

When using `std::make_shared`, the control block and the managed object are allocated in a single
heap allocation (one `new` call). When providing a custom deleter, the compiler cannot use
`make_shared` — it must perform a separate allocation for the control block and the managed object:

```cpp
// Single allocation: control block + object (no custom deleter)
auto p1 = std::make_shared<int>(42);

// Two allocations: one for int, one for control block + deleter
auto p2 = std::shared_ptr<int>(new int(42), [](int* p) { delete p; });
```

## 5.8 Incomplete Types and Custom Deleters

`std::unique_ptr` requires the deleter to be callable at the point where the destructor is
generated. For a forward-declared type, the default deleter (`std::default_delete`) will fail to
compile if the destructor is implicitly generated at a point where the type is incomplete:

```cpp
// ---- widget.h ----
struct Widget;  // forward declaration

class Controller {
    std::unique_ptr<Widget> impl_;  // OK: unique_ptr with incomplete type
public:
    Controller();
    ~Controller();  // MUST be declared (not defaulted) in the header
};

// ---- widget.cpp ----
#include "widget.h"
#include "widget_impl.h"  // full definition of Widget

Controller::Controller() : impl_(std::make_unique<Widget>()) {}

Controller::~Controller() = default;  // destructor defined where Widget is complete
```

With a custom deleter, the same rule applies: the deleter must be invocable where the destructor
runs. If the deleter is a lambda defined in the `.cpp` file, the type is complete there, so there is
no issue:

```cpp
// ---- widget.cpp ----
#include "widget.h"
#include "widget_impl.h"

struct WidgetDeleter {
    void operator()(Widget* p) const noexcept { /* Widget is complete here */ }
};

Controller::Controller()
    : impl_(std::unique_ptr<Widget, WidgetDeleter>(new Widget())) {}

Controller::~Controller() = default;
```

## 5.9 Allocator-Aware Containers

The C++ standard library containers are **allocator-aware**: they accept an allocator type as a
template parameter and propagate it through construction, copy, and move operations [N4950 S23.2.1].
Custom allocators interact with smart pointer custom deleters in important ways.

When a container uses a custom allocator, elements are allocated and deallocated through that
allocator. If you extract a raw pointer from a container element and wrap it in a smart pointer, the
default deleter will call `delete`, which bypasses the allocator — a mismatch that causes undefined
behavior:

```cpp
#include <memory>
#include <vector>

struct TrackingAllocator {
    using value_type = int;
    TrackingAllocator() = default;
    template <typename U>
    TrackingAllocator(const TrackingAllocator<U>&) {}

    int* allocate(std::size_t n) {
        std::cout << "allocate(" << n << ")\n";
        return static_cast<int*>(::operator new(n * sizeof(int)));
    }

    void deallocate(int* p, std::size_t) noexcept {
        std::cout << "deallocate\n";
        ::operator delete(p);
    }
};

void allocator_mismatch_example() {
    std::vector<int, TrackingAllocator> v{1, 2, 3};

    // WRONG: extracting a pointer and using default deleter
    // int* raw = &v[0];
    // std::unique_ptr<int> bad(raw);  // ~unique_ptr calls delete, not allocator::deallocate

    // If you must extract, use the allocator's deallocate in the deleter
    auto alloc = v.get_allocator();
    // The correct approach: don't extract pointers from allocator-aware containers
}
```

:::warning
Never extract a raw pointer from an allocator-aware container and manage it with a
default-deleter smart pointer. The allocation and deallocation mechanisms must match. If you need to
transfer ownership out of a container, use `std::move`, extract via `release()` on allocator-aware
wrappers, or use `std::pmr` resources [N4950 S23.12].
:::

## 5.10 Type Erasure: How `shared_ptr` Stores Deleters

`std::shared_ptr` uses type erasure to store the deleter in the control block, decoupling the
deleter type from the `shared_ptr` type. This is fundamentally different from `unique_ptr`, where
the deleter is a template parameter.

### Implementation Sketch

The control block uses a virtual function table (or equivalent) to dispatch the deleter call:

```cpp
#include <memory>
#include <iostream>

// Simplified internal structure of shared_ptr's control block
struct ControlBlockBase {
    std::atomic<std::size_t> strong_count{1};
    std::atomic<std::size_t> weak_count{1};

    virtual void destroy_object() = 0;
    virtual void destroy_block() = 0;
    virtual ~ControlBlockBase() = default;
};

template<typename T, typename D, typename Alloc>
struct ControlBlockImpl : ControlBlockBase {
    T* object;
    D deleter;
    Alloc allocator;

    void destroy_object() override {
        deleter(object);  // Type-erased invocation
        object = nullptr;
    }

    void destroy_block() override {
        using BlockAlloc = typename std::allocator_traits<Alloc>::
            template rebind_alloc<ControlBlockImpl>;
        BlockAlloc block_alloc(allocator);
        this->~ControlBlockImpl();
        std::allocator_traits<BlockAlloc>::deallocate(block_alloc, this, 1);
    }
};
```

**Consequences of type erasure:**

1. **Uniform `shared_ptr` type:** `shared_ptr&lt;int&gt;` is the same type regardless of whether it
   uses `delete`, `free`, or a custom lambda as its deleter. Two `shared_ptr` instances with
   different deleters can share ownership.

2. **Virtual dispatch overhead:** The deleter invocation goes through a virtual function call. This
   costs one indirect branch (typically ~5 cycles, with potential branch misprediction).

3. **No compile-time deleter check:** If you pass the wrong deleter (e.g., one that calls `free` on
   a `new`-allocated object), the compiler cannot catch it. The error manifests at runtime as heap
   corruption.

4. **Heap allocation for the deleter:** The deleter (and its captured state) are allocated in the
   control block on the heap. This adds allocation overhead compared to `unique_ptr`, which stores
   the deleter inline.

## 5.11 Custom Deleters: `unique_ptr` vs `shared_ptr` Trade-offs

| Aspect                     | `unique_ptr&lt;T, D&gt;`                               | `shared_ptr&lt;T&gt;`              |
| :------------------------- | :----------------------------------------------------- | :--------------------------------- |
| Deleter storage            | Inline (part of the type)                              | Type-erased in control block       |
| Deleter type mismatch      | Compile error                                          | Runtime bug (heap corruption)      |
| Stateless deleter overhead | 0 bytes (EBO)                                          | Virtual dispatch + heap storage    |
| Stateful deleter overhead  | `sizeof(D)` inline                                     | Heap allocation in control block   |
| Can share ownership        | No                                                     | Yes                                |
| Deleter swappable          | No (type is fixed)                                     | Yes (via `reset` with new deleter) |
| Type identity              | `unique_ptr&lt;T, D1&gt;` != `unique_ptr&lt;T, D2&gt;` | Same `shared_ptr&lt;T&gt;` type    |

**Guidelines:**

- Use `unique_ptr` with a custom deleter when the deleter type is known at compile time and
  ownership is exclusive. The compiler will verify deleter correctness at the type level.
- Use `shared_ptr` with a custom deleter when ownership must be shared. Accept the type erasure
  overhead in exchange for the uniform type.
- Never use `shared_ptr` when `unique_ptr` suffices. The type erasure overhead (virtual dispatch,
  heap allocation for the control block, atomic reference counting) is substantial.

```cpp
#include <memory>
#include <cstdio>

// unique_ptr: deleter is part of the type, checked at compile time
using unique_file_ptr = std::unique_ptr<std::FILE, decltype([](std::FILE* f) noexcept {
    if (f) std::fclose(f);
})>;

// shared_ptr: deleter is type-erased, same type regardless of deleter
void process_with_shared(std::shared_ptr<std::FILE> fp) {
    // fp's deleter could be anything — no compile-time check
    std::fprintf(fp.get(), "writing data\n");
}

int main() {
    unique_file_ptr f1(std::fopen("/dev/null", "r"));

    // Compile error if wrong deleter type:
    // std::unique_ptr<std::FILE, decltype([](std::FILE* f) noexcept { free(f); })> f2 = f1;
    // Error: different types

    // shared_ptr: no type check, same type
    std::shared_ptr<std::FILE> f2(std::fopen("/dev/null", "r"),
                                   [](std::FILE* f) noexcept { if (f) std::fclose(f); });
    std::shared_ptr<std::FILE> f3(std::fopen("/dev/null", "r"),
                                   [](std::FILE* f) noexcept { if (f) std::fclose(f); });
    // f2 and f3 are the same type, can be stored in the same container
}
```

## 5.12 `default_delete` Specializations and Array Support

`std::default_delete` is the default deleter for `unique_ptr`. It has two partial specializations
[N4950 S20.11.1.2]:

| Specialization              | Behavior             |
| :-------------------------- | :------------------- |
| `default_delete&lt;T&gt;`   | Calls `delete ptr`   |
| `default_delete&lt;T[]&gt;` | Calls `delete[] ptr` |

The array specialization is automatically selected when `unique_ptr` is instantiated with an array
type:

```cpp
#include <memory>
#include <iostream>

int main() {
    // Single object: default_delete<int> calls delete
    std::unique_ptr<int> single(new int(42));

    // Array: default_delete<int[]> calls delete[]
    std::unique_ptr<int[]> arr(new int[10]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9});

    // Access elements via operator[]
    for (int i = 0; i < 10; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << "\n";

    // Conversion between array and single-object unique_ptr is forbidden
    // std::unique_ptr<int> bad = std::move(arr);  // ERROR: no conversion
}
```

**Important:** `std::unique_ptr&lt;T[]&gt;` does not support `operator*` or `operator-&gt;`. It only
provides `operator[]` and `get()`. This is a deliberate type-safety feature: it prevents accidental
use of array pointers as object pointers.

For `shared_ptr`, the default deleter always calls `delete`, never `delete[]`. You must explicitly
pass `std::default_delete&lt;T[]&gt;()` for arrays:

```cpp
#include <memory>

// Correct: explicit array deleter
auto arr = std::shared_ptr<int[]>(new int[10], std::default_delete<int[]>());

// Alternative: use a lambda that calls delete[]
auto arr2 = std::shared_ptr<int>(new int[10], [](int* p) { delete[] p; });
```

:::warning
`std::shared_ptr&lt;T[]&gt;` (the partial specialization for arrays) was added in C++17
[N4950 S20.11.3.7]. It provides `operator[]` but still requires an explicit array deleter. Before
C++17, managing arrays with `shared_ptr` required manually passing `default_delete&lt;T[]&gt;` or a
lambda.
:::

## Summary

| Ownership Model    | Smart Pointer        | Size (x86_64) | Semantics                   | Thread-Safe Refcount |
| :----------------- | :------------------- | :------------ | :-------------------------- | :------------------- |
| Exclusive          | `std::unique_ptr<T>` | 8 bytes       | Move-only                   | N/A (single owner)   |
| Shared             | `std::shared_ptr<T>` | 16 bytes      | Copyable                    | Yes (atomic)         |
| Non-owning observe | `std::weak_ptr<T>`   | 16 bytes      | Not directly dereferencable | N/A                  |

The hierarchy of preference is clear: `unique_ptr` first, `shared_ptr` when genuinely needed, raw
pointers only for non-owning observation, and `weak_ptr` specifically to break `shared_ptr` cycles.

## Common Pitfalls

**Using `delete` instead of `delete[]` for arrays.** The default `std::shared_ptr` deleter calls
`delete`, not `delete[]`. If you construct `std::shared_ptr<T>(new T[n])`, the deleter invokes
undefined behavior. Always pass `std::default_delete<T[]>()` as the deleter, or use
`std::unique_ptr<T[]>` which has the correct default.

**Custom deleter exceptions.** If a custom deleter throws, the behavior depends on the smart pointer
type. For `unique_ptr`, throwing in the deleter causes `std::terminate` during stack unwinding (if
the destructor is called during exception handling) or direct propagation (if called normally). For
`shared_ptr`, the behavior is similarly dangerous. **Custom deleters must be `noexcept`.**

**Function pointer deleter overhead.** A function pointer deleter adds 8 bytes to `unique_ptr` on
x86_64. If the deleter is stateless, prefer a functor (zero overhead via EBO) or a captureless
lambda.

**Type erasure hiding bugs.** `std::shared_ptr`'s type-erased deleter means the compiler cannot
verify deleter correctness at the call site. If you accidentally pass the wrong deleter (e.g., one
that calls `free` on a `new`-allocated object), the error manifests at runtime as heap corruption.
Prefer `std::unique_ptr` where possible — its deleter is part of the type and checked at compile
time.

**`final` on empty deleter classes.** Marking an empty deleter class as `final` prevents EBO from
applying, increasing `sizeof(unique_ptr)`. If the deleter must be `final` for other reasons, accept
the size overhead or use a lambda instead.

**Capturing by reference in lambda deleters.** If the captured reference outlives the object it
refers to, the deleter will dereference a dangling reference when it runs. Always capture by value
or use a stateless lambda.

**Mixing allocation/deallocation mechanisms.** If an object is allocated with `malloc`, the deleter
must call `free`, not `delete`. If allocated with a custom allocator, the deleter must use the same
allocator's deallocation function. Mismatches cause undefined behavior and are notoriously difficult
to debug.

## See Also

- [Unique Ownership (std::unique_ptr) and EBO](2_unique_ptr.md)
- [Shared Ownership (std::shared_ptr) and Control Block](3_shared_ptr.md)
- [Weak Pointers and Cyclic Reference Breaking](4_weak_ptr.md)
- [RAII Patterns](1_raii_patterns.md)
