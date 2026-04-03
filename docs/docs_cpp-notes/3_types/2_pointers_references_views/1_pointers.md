---
title: Pointers
date: 2026-01-03T01:32:50.298Z
tags:
  - cpp
categories:
  - cpp
slug: pointers
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Pointer Arithmetic, Array Decay, and Nullability

In high-level languages (Java, Python), references are opaque handles. In C++, pointers are direct
abstractions over virtual memory addresses with distinct arithmetic capabilities dependent on the
**Type System**.

This module analyzes how the compiler translates pointer operations into memory offsets, the legacy
mechanism of array decay, and the type-safe definition of nullability.

## 1. Pointer Arithmetic Mechanics

Pointer arithmetic is not integer arithmetic. It is **Typed Offset Calculation**. Adding `1` to a
pointer does not increment the address by one byte; it increments the address by the **stride** of
the underlying type.

### The Arithmetic Formula

Given a pointer `T* ptr`, the operation `ptr + N` resolves to:

$$
\text{Address}_{new} = \text{Address}_{old} + (N \times \text{sizeof}(T))
$$

### Architectural Implications

1. **Instruction Generation:** The compiler compiles `ptr[i]` or `*(ptr + i)` into specific assembly
   instructions like `LEA` (Load Effective Address) on x86_64, utilizing hardware scaling factors
   (1, 2, 4, 8) if the type size matches.
2. **Void Pointer Restriction:** Arithmetic on `void*` is **ill-formed** in ISO C++ because
   `sizeof(void)` is undefined.
   - _GCC/Clang Extension:_ These compilers treat `sizeof(void)` as 1 to allow arithmetic.
   - _Best Practice:_ Disable this extension via `-Wpointer-arith` to ensure portability.
3. **Difference (`ptrdiff_t`):** Subtracting two pointers (`ptrB - ptrA`) returns a signed integer
   of type `std::ptrdiff_t`, representing the number of elements (not bytes) between them.

```cpp
struct Block {
    uint64_t header;
    uint64_t payload;
}; // sizeof(Block) == 16

void arithmetic_demo() {
    Block* base = reinterpret_cast<Block*>(0x1000);

    // 0x1000 + (1 * 16) = 0x1010
    Block* next = base + 1;

    // (0x1010 - 0x1000) / 16 = 1
    std::ptrdiff_t diff = next - base;
}
```

### Concrete Byte-Offset Examples

```cpp
#include <cstddef>
#include <cstdint>
#include <iostream>

void byte_offset_examples() {
    // char is 1 byte
    char chars[5] = {'a', 'b', 'c', 'd', 'e'};
    char* pc = chars;
    // pc + 3 points to 'd' at address base + 3

    // int is 4 bytes (typical)
    int ints[5] = {10, 20, 30, 40, 50};
    int* pi = ints;
    // pi + 3 points to 40 at address base + 12 (3 * sizeof(int) = 12)

    // double is 8 bytes
    double doubles[4] = {1.0, 2.0, 3.0, 4.0};
    double* pd = doubles;
    // pd + 2 points to 3.0 at address base + 16 (2 * sizeof(double) = 16)

    // Pointer difference returns element count, not byte count
    std::ptrdiff_t diff = (pi + 3) - pi;  // 3 (elements), not 12 (bytes)
    std::cout << "diff: " << diff << "\n";  // 3
}
```

### The Commutativity of Indexing

Because `arr[i]` is defined as `*(arr + i)`, and addition is commutative, C++ technically supports
the syntax `i[arr]`.

- `arr + i` $\to$ Address of i-th element.
- `i + arr` $\to$ Address of i-th element.
- **Conclusion:** Never use `i[arr]` in production code, but understand it to grasp the underlying
  arithmetic mechanics.

### Pointer Arithmetic Bounds

Pointer arithmetic is only well-defined within an array object and one past the end. Going beyond
one-past-the-end or before the beginning of the array is undefined behavior, even if the pointer is
not dereferenced:

```cpp
int arr[5] = {};
int* p = arr + 5;    // OK: one past the end (cannot dereference)
int* q = arr + 6;    // UB: beyond one past the end
int* r = arr - 1;    // UB: before the beginning
```

## 2. Array Decay

**Array Decay** is the implicit conversion of an array of type `T[N]` into a pointer of type `T*`.
This is a legacy C behavior that causes the loss of bounds information (the value `N`).

### The Mechanics of Decay

Decay occurs whenever an array is passed by value to a function or assigned to a pointer variable.

```cpp
void process_data(int* ptr) {
    // Size information is LOST.
    // sizeof(ptr) is 8 (on 64-bit systems), not 400.
}

void caller() {
    int buffer[100]; // sizeof(buffer) is 400 bytes
    process_data(buffer); // Implicit Decay: int[100] -> int*
}
```

### Multi-Dimensional Array Decay

Multi-dimensional arrays decay only the first dimension. A `T[M][N]` decays to `T(*)[N]` — a pointer
to an array of `N` elements. The inner dimension is preserved:

```cpp
#include <iostream>

// The first dimension decays, but the second is preserved
void print_2d(int matrix[][3], int rows) {
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < 3; ++j) {
            std::cout << matrix[i][j] << " ";
        }
        std::cout << "\n";
    }
}

// Equivalent explicit syntax:
void print_2d_explicit(int (*matrix)[3], int rows) {
    // matrix is a pointer to an array of 3 ints
    // matrix[i] is the i-th row (an array of 3 ints)
}

int main() {
    int m[2][3] = {{1, 2, 3}, {4, 5, 6}};
    print_2d(m, 2);
    // Output:
    // 1 2 3
    // 4 5 6
}
```

**Key insight:** The compiler needs the inner dimension size to compute pointer arithmetic. When the
first dimension decays, `matrix + 1` must advance by `sizeof(int) * 3` bytes (the inner array size),
so the compiler must know `N`.

### Preventing Decay

To preserve size information in C++23 architecture, use one of three strategies:

#### A. Pass by Reference

Accepting a reference to an array prevents decay and preserves dimensions.

```cpp
template<size_t N>
void process_safe(int (&arr)[N]) {
    // N is known at compile time.
    // sizeof(arr) is correct.
}
```

#### B. `std::array` (The Object Wrapper)

`std::array<T, N>` is a zero-overhead wrapper around a C-style array. It follows value semantics
(can be copied) and does not decay unless `data()` is explicitly called.

#### C. `std::span` (The View)

Introduced in C++20, `std::span` is the standard replacement for `ptr + size` interfaces. It
automatically constructs from C-arrays and `std::array` without decay logic losing the size.

```cpp
#include <span>

void process_modern(std::span<int> s) {
    // s.size() is 100
    // s.data() is the pointer
}

void caller() {
    int buffer[100];
    process_modern(buffer); // Automatically deduces size
}
```

## 3. Nullability and `std::nullptr_t`

In C++, pointers are "Nullable References."

### The `nullptr` Keyword (C++11)

Prior to C++11, the macro `NULL` was defined as integer `0`. This caused ambiguity in overload
resolution.

```cpp
void func(int x);
void func(char* p);

func(NULL); // Calls func(int) because NULL is 0.
```

`nullptr` is a keyword literal of type `std::nullptr_t`. It is implicitly convertible to any pointer
type, but **not** to integral types (except `bool`).

```cpp
func(nullptr); // Calls func(char*) unambiguously.
```

### `nullptr` vs `NULL` vs `0`

| Literal   | Type                                         | Convertible to           | Recommended? |
| --------- | -------------------------------------------- | ------------------------ | ------------ |
| `0`       | `int`                                        | Any integral type        | No           |
| `NULL`    | Implementation-defined (usually `0` or `0L`) | Pointers + integral      | No           |
| `nullptr` | `std::nullptr_t`                             | Any pointer type, `bool` | **Yes**      |

`nullptr` is the only null pointer constant that cannot be confused with an integer. Modern C++ code
should always use `nullptr`.

### Undefined Behavior (UB) of Dereference

Dereferencing `nullptr` is **Undefined Behavior**. It is not guaranteed to segfault.

**Compiler Optimization Risk:** If the compiler can deduce that a dereference happens, it is allowed
to assume the pointer is not null for the rest of the execution path, potentially optimizing out
subsequent null checks.

```cpp
void dangerous(int* ptr) {
    int x = *ptr; // If ptr is null, this is UB.

    // Compiler Optimization:
    // Since *ptr was accessed above, the compiler assumes ptr CANNOT be null.
    // This check may be removed as dead code.
    if (!ptr) {
        return;
    }
}
```

### Architectural Best Practice: The Non-Owning Pointer

In modern C++23 design, raw pointers (`T*`) should **only** be used for:

1. **Nullable, Non-Owning Views:** Pointing to an object owned by `unique_ptr` or the stack, where
   the relationship is optional.
2. **Legacy Interfaces:** Interacting with C libraries.

For non-nullable, non-owning views, use `T&` (Reference) or `std::reference_wrapper<T>`.

| Semantics                 | Type                                         |
| :------------------------ | :------------------------------------------- |
| Ownership + Nullable      | `std::unique_ptr<T>`                         |
| Ownership + Non-Nullable  | `std::unique_ptr<T>` (Assert on dereference) |
| Non-Owning + Nullable     | `T*`                                         |
| Non-Owning + Non-Nullable | `T&`                                         |

### `std::assume` (C++23)

In performance-critical code where a pointer is guaranteed to be non-null by invariants not visible
to the compiler, C++23 provides `[[assume(...)]]` to assist the optimizer.

```cpp
void fast_path(int* ptr) {
    [[assume(ptr != nullptr)]];
    // Compiler can remove null checks and generate direct loads
    int val = *ptr;
}
```

## 4. Pointer Types Safety Hierarchy

C++ provides a layered hierarchy of pointer types with increasing safety guarantees:

```cpp
#include <iostream>
#include <memory>
#include <vector>

void safety_hierarchy() {
    // Level 0: Raw pointer — no lifetime management, no null safety
    int* raw = new int(42);
    delete raw;  // Must manually manage

    // Level 1: std::unique_ptr — exclusive ownership, no runtime overhead
    auto unique = std::make_unique<int>(42);
    // Automatic cleanup when unique goes out of scope

    // Level 2: std::shared_ptr — shared ownership, reference counting overhead
    auto shared = std::make_shared<int>(42);
    // Cleanup when last shared_ptr is destroyed

    // Level 3: Non-owning observers
    int* observer = shared.get();       // Raw observer — must outlive
    std::weak_ptr<int> weak = shared;   // Safe observer — checks lifetime

    // Level 4: std::span (C++20) — bounded view
    std::vector<int> v = {1, 2, 3, 4, 5};
    std::span<int> s = v;  // Bounds-checked in debug builds (MSVC, with sanitizer)
}
```

### Why Raw Pointers Are Still Needed

Raw pointers remain essential in modern C++ for:

1. **Non-owning observation.** When lifetime is guaranteed by design (parent-child, tree
   structures).
2. **C interoperability.** C APIs use raw pointers exclusively.
3. **Performance-critical paths.** When atomic operations from smart pointers are unacceptable.
4. **Custom data structures.** Linked lists, trees, and graphs often use raw pointers internally
   while exposing smart pointer interfaces.

## 5. Common Pitfalls

### Dangling Pointers

A dangling pointer points to memory that has been freed or gone out of scope:

```cpp
#include <iostream>

int* dangling_demo() {
    int local = 42;
    return &local;  // WARNING: returns dangling pointer
}  // local is destroyed here

void dangling_usage() {
    int* p = dangling_demo();
    // p is a dangling pointer — reading *p is UB
    // The memory may be reused by subsequent allocations
}
```

### Buffer Overflows

Pointer arithmetic without bounds checking can read or write beyond the allocated buffer:

```cpp
#include <iostream>

void buffer_overflow() {
    int arr[5] = {1, 2, 3, 4, 5};
    int* p = arr;
    p[10] = 99;  // UB: writes 40 bytes past the end of arr
    // May corrupt stack data, return addresses, or other variables
}
```

**Mitigation:** Use `std::span` (C++20) with bounds checking, or compile with AddressSanitizer
(`-fsanitize=address`) to catch overflows at runtime.

### Misaligned Access

Casting a pointer to a type with stricter alignment requirements can cause misaligned access, which
is undefined behavior on some architectures (notably ARM) and a performance penalty on others (x86):

```cpp
#include <iostream>
#include <cstdint>

void misaligned_access() {
    char buffer[10] = {};
    // buffer may be at any address

    // UB on strict-alignment architectures if buffer is not 4-byte aligned
    int* pi = reinterpret_cast<int*>(buffer);
    *pi = 42;  // Potential misaligned access

    // Safe alternative: use std::aligned_storage or std::align
    alignas(int) char aligned_buf[sizeof(int)];
    int* safe_pi = reinterpret_cast<int*>(aligned_buf);
    *safe_pi = 42;  // OK: guaranteed aligned
}
```

### Double Free and Use-After-Free

```cpp
#include <cstdlib>
#include <iostream>

void double_free() {
    int* p = static_cast<int*>(std::malloc(sizeof(int)));
    *p = 42;
    std::free(p);
    std::free(p);  // UB: double free — may corrupt heap metadata
}

void use_after_free() {
    int* p = static_cast<int*>(std::malloc(sizeof(int)));
    *p = 42;
    std::free(p);
    std::cout << *p << "\n";  // UB: use-after-free
}
```

**Mitigation:** Always use smart pointers. `std::unique_ptr` and `std::shared_ptr` eliminate these
classes of bugs by construction.

## See Also

- [References and Views](./2_references.md)
- [Smart Pointers Overview](../../4_resource_management/1_ownership_and_raii/1_overview.md)
- [The Stack](../1_data_layout/4_stack.md)
- [The Heap](../1_data_layout/5_heap.md)
