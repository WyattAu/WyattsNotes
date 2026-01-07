---
title: Pointers
date: 2026-01-03T01:32:50.298Z
tags:
  - cpp
categories:
  - cpp
slug: pointers
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pointer Arithmetic, Array Decay, and Nullability

In high-level languages (Java, Python), references are opaque handles. In C++, pointers are direct abstractions over virtual memory addresses with distinct arithmetic capabilities dependent on the **Type System**.

This module analyzes how the compiler translates pointer operations into memory offsets, the legacy mechanism of array decay, and the type-safe definition of nullability.

## 1. Pointer Arithmetic Mechanics

Pointer arithmetic is not integer arithmetic. It is **Typed Offset Calculation**. Adding `1` to a pointer does not increment the address by one byte; it increments the address by the **stride** of the underlying type.

### The Arithmetic Formula

Given a pointer `T* ptr`, the operation `ptr + N` resolves to:

$$
\text{Address}_{new} = \text{Address}_{old} + (N \times \text{sizeof}(T))
$$

### Architectural Implications

1. **Instruction Generation:** The compiler compiles `ptr[i]` or `*(ptr + i)` into specific assembly instructions like `LEA` (Load Effective Address) on x86_64, utilizing hardware scaling factors (1, 2, 4, 8) if the type size matches.
2. **Void Pointer Restriction:** Arithmetic on `void*` is **ill-formed** in ISO C++ because `sizeof(void)` is undefined.
   - _GCC/Clang Extension:_ These compilers treat `sizeof(void)` as 1 to allow arithmetic.
   - _Best Practice:_ Disable this extension via `-Wpointer-arith` to ensure portability.
3. **Difference (`ptrdiff_t`):** Subtracting two pointers (`ptrB - ptrA`) returns a signed integer of type `std::ptrdiff_t`, representing the number of elements (not bytes) between them.

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

### The Commutativity of Indexing

Because `arr[i]` is defined as `*(arr + i)`, and addition is commutative, C++ technically supports the syntax `i[arr]`.

- `arr + i` $\to$ Address of i-th element.
- `i + arr` $\to$ Address of i-th element.
- **Conclusion:** Never use `i[arr]` in production code, but understand it to grasp the underlying arithmetic mechanics.

## 2. Array Decay

**Array Decay** is the implicit conversion of an array of type `T[N]` into a pointer of type `T*`. This is a legacy C behavior that causes the loss of bounds information (the value `N`).

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

`std::array<T, N>` is a zero-overhead wrapper around a C-style array. It follows value semantics (can be copied) and does not decay unless `data()` is explicitly called.

#### C. `std::span` (The View)

Introduced in C++20, `std::span` is the standard replacement for `ptr + size` interfaces. It automatically constructs from C-arrays and `std::array` without decay logic losing the size.

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

Prior to C++11, the macro `NULL` was defined as integer `0`. This caused ambiguity in overload resolution.

```cpp
void func(int x);
void func(char* p);

func(NULL); // Calls func(int) because NULL is 0.
```

`nullptr` is a keyword literal of type `std::nullptr_t`. It is implicitly convertible to any pointer type, but **not** to integral types (except `bool`).

```cpp
func(nullptr); // Calls func(char*) unambiguously.
```

### Undefined Behavior (UB) of Dereference

Dereferencing `nullptr` is **Undefined Behavior**. It is not guaranteed to segfault.

**Compiler Optimization Risk:**
If the compiler can deduce that a dereference happens, it is allowed to assume the pointer is not null for the rest of the execution path, potentially optimizing out subsequent null checks.

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

1. **Nullable, Non-Owning Views:** Pointing to an object owned by `unique_ptr` or the stack, where the relationship is optional.
2. **Legacy Interfaces:** Interacting with C libraries.

For non-nullable, non-owning views, use `T&` (Reference) or `std::reference_wrapper<T>`.

| Semantics                 | Type                                         |
| :------------------------ | :------------------------------------------- |
| Ownership + Nullable      | `std::unique_ptr<T>`                         |
| Ownership + Non-Nullable  | `std::unique_ptr<T>` (Assert on dereference) |
| Non-Owning + Nullable     | `T*`                                         |
| Non-Owning + Non-Nullable | `T&`                                         |

### `std::assume` (C++23)

In performance-critical code where a pointer is guaranteed to be non-null by invariants not visible to the compiler, C++23 provides `[[assume(...)]]` to assist the optimizer.

```cpp
void fast_path(int* ptr) {
    [[assume(ptr != nullptr)]];
    // Compiler can remove null checks and generate direct loads
    int val = *ptr;
}
```
