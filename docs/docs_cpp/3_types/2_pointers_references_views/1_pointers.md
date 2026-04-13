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

### Pointer Arithmetic Bounds [N4950 §7.6.6]

Pointer arithmetic is only well-defined within an array object and one past the end. Going beyond
one-past-the-end or before the beginning of the array is undefined behavior, even if the pointer is
not dereferenced:

```cpp
int arr[5] = {};
int* p = arr + 5;    // OK: one past the end (cannot dereference)
int* q = arr + 6;    // UB: beyond one past the end
int* r = arr - 1;    // UB: before the beginning
```

### Formal Proof of One-Past-The-End [N4950 §7.6.6.6]

**Claim:** A pointer to one past the last element of an array is well-defined, but dereferencing it
is undefined behavior.

**Proof:**

1. By [N4950 §7.6.6.6], if an expression `e` points to element $x[i]$ of an array object `x` with
   $n$ elements, the expressions `e + j` and `e - j` point to (respectively) element $x[i + j]$ and
   $x[i - j]$, provided $0 \le i + j \le n$.

2. When $i + j = n$, the pointer points "one past the last element." The Standard explicitly permits
   this pointer value. The constraint $0 \le i + j \le n$ (note the inclusive upper bound) is the
   formal statement of the one-past-the-end rule.

3. By [N4950 §7.6.1.1], the indirection operator `*` requires that its operand be a pointer to an
   object. The one-past-the-end pointer does not point to any object — it points to the position
   immediately after the last element.

4. Therefore, `*(arr + n)` is undefined behavior. QED.

### Proof: Computing the Address Without UB

**Claim:** Computing `arr + 6` (two past the end) is undefined behavior even without dereferencing.

**Proof:**

1. By [N4950 §7.6.6.6], pointer addition is well-defined only when the result points to an element
   of the array or one past the last element.
2. `arr + 6` points to two past the last element of `int arr[5]`, which violates the constraint
   $i + j \le n$ (since $0 + 6 = 6 \gt 5$).
3. The Standard states that computing such a pointer value is undefined behavior. QED.

This means you cannot use pointer arithmetic as a general address computation mechanism. Even
forming an out-of-bounds pointer (without dereferencing it) is UB.

### Pointer Subtraction Constraints

Subtracting two pointers is only well-defined when both pointers point into the same array object
[N4950 §7.6.6.6]:

```cpp
int a[5];
int b[5];

std::ptrdiff_t diff = &b[3] - &a[1];  // UB: different array objects
std::ptrdiff_t ok   = &a[3] - &a[1];  // OK: same array, result is 2
```

## 2. Pointer Categories

C++ defines several distinct categories of pointers, each with different semantics and restrictions
[N4950 §7.3.6]:

### Object Pointers

The most common category. Pointers to objects of type `T`:

```cpp
int*        pi;       // pointer to int
const int*  pci;      // pointer to const int
int* const  cpi;      // const pointer to int (the pointer itself is const)
const int* const cpci; // const pointer to const int
```

### Function Pointers

Pointers to functions. The syntax requires parentheses around the pointer name:

```cpp
void (*func_ptr)(int);        // pointer to function taking int, returning void
int  (*math_op)(int, int);    // pointer to function taking two ints, returning int

int add(int a, int b) { return a + b; }
func_ptr = nullptr;
math_op = add;  // function name decays to function pointer

int result = math_op(3, 4);  // 7
```

### Pointer-to-Member (Data and Function)

Pointers to members are distinct from regular pointers. A pointer-to-member is an offset within a
class layout, not a memory address. It cannot be dereferenced without an object instance [N4950
§7.6.5]:

```cpp
struct Widget {
    int x;
    double y;
    void print() const { /* ... */ }
};

int Widget::* pm = &Widget::x;  // pointer-to-data-member
void (Widget::* pmf)() const = &Widget::print;  // pointer-to-member-function

Widget w{42, 3.14};

// Dereferencing requires an object:
int val = w.*pm;       // val = 42
(w.*pmf)();            // calls w.print()

Widget* ptr = &w;
int val2 = ptr->*pm;   // val2 = 42
(ptr->*pmf)();         // calls ptr->print()
```

#### Pointer-to-Member Implementation

A pointer-to-data-member is typically implemented as a byte offset from the base of the object. For
single-inheritance layouts, this is a simple integer. For multiple inheritance, the offset may need
adjustment when the object pointer is cast to a base class:

```cpp
struct Base {
    int a;
};

struct Derived : Base {
    int b;
};

int Derived::* pb = &Derived::b;

// pb is typically the offset of 'b' within Derived, which is sizeof(int) = 4
Derived d{1, 2};
int val = d.*pb;  // accesses d.b
```

For virtual inheritance, the implementation is more complex — the offset may be stored as a pair
(virtual base offset + member offset) and resolved at runtime.

### Void Pointers

`void*` is a generic pointer type that can hold the address of any object. It cannot be dereferenced
or used for arithmetic (without a cast) because the type information needed to determine the size
and alignment of the pointed-to object is absent [N4950 §7.3.7]:

```cpp
int x = 42;
void* vp = &x;       // OK: any object pointer converts to void*
// *vp;               // ERROR: cannot dereference void*
int* pi = static_cast<int*>(vp);  // OK: explicit cast restores type
std::cout << *pi;     // 42
```

### Incomplete Type Pointers

Pointers to incomplete types (forward-declared structs/classes) are valid. You can declare and pass
them, but you cannot dereference them or perform pointer arithmetic until the type is complete:

```cpp
struct Forward;  // incomplete type

Forward* fp = nullptr;  // OK: pointer to incomplete type
// Forward f;            // ERROR: incomplete type — cannot create object
// *fp;                  // ERROR: incomplete type — cannot dereference

void process(Forward* p);  // OK: parameter declaration does not require complete type
```

### Comparison Table of Pointer Types

| Type                    | Arithmetic | Dereference | sizeof       | Implicitly Convertible To   |
| :---------------------- | :--------- | :---------- | :----------- | :-------------------------- |
| `T*` (object pointer)   | Yes        | Yes         | Platform ptr | `void*`, `const void*`      |
| `const T*`              | Yes        | Yes (r/o)   | Platform ptr | `void*`, `const void*`      |
| `void*`                 | No         | No          | Platform ptr | (none)                      |
| `T(*)()` (function ptr) | No         | Yes (call)  | Platform ptr | `void(*)()`                 |
| `T C::*` (member ptr)   | No         | With object | 2x ptr size  | (none — requires object)    |
| `nullptr_t`             | No         | No          | Platform ptr | Any object/function pointer |

Note: On most platforms, `sizeof(T*)` is 8 bytes (64-bit) or 4 bytes (32-bit). Pointer-to-member may
be larger due to the need for virtual base adjustment.

## 3. Array Decay

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

### When Decay Does NOT Occur

Array decay does not occur in the following contexts [N4950 §7.3.3]:

1. As the operand of `sizeof` — `sizeof(arr)` yields the total array size.
2. As the operand of `decltype` — `decltype(arr)` yields the array type.
3. As the operand of `alignof` — `alignof(arr)` yields the array alignment.
4. When bound to a reference — `void f(int (&arr)[N])` preserves the array type.
5. When initializing a reference — `int (&ref)[10] = arr`.

```cpp
int arr[5] = {1, 2, 3, 4, 5};

std::cout << sizeof(arr) << "\n";     // 20 (5 * sizeof(int)) — no decay
std::cout << sizeof(arr + 0) << "\n"; // 8 (pointer size) — decayed

decltype(arr) another = {6, 7, 8, 9, 10};  // another is int[5] — no decay
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

## 4. Nullability and `std::nullptr_t`

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

### `nullptr` and Overload Resolution [N4950 §12.4.3.2.2]

`nullptr` has type `std::nullptr_t`. In overload resolution, the conversion from `std::nullptr_t` to
any pointer type ranks as an **exact match** (null pointer constant conversion), while the
conversion from `std::nullptr_t` to `int` would require a boolean conversion (rank: Conversion).
This ensures `nullptr` always prefers pointer overloads:

```cpp
void f(int);
void f(char*);

f(nullptr);   // f(char*): nullptr_t → char* is exact match (null pointer constant)
               // nullptr_t → int is boolean conversion (rank: Conversion)
f(0);         // f(int): 0 is an int literal, exact match
f(NULL);      // f(int): NULL is typically 0, which is an int literal
```

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

## 5. Pointer Types Safety Hierarchy

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

## 6. Strict Aliasing and Pointers [N4950 §6.8.4]

The strict aliasing rule prohibits accessing an object through a pointer of a different type (with a
few exceptions). Violating this rule is undefined behavior, even if the access appears to work.

### The Rule

A program shall not access the stored value of an object through a glvalue of a type that is not
similar to one of the following [N4950 §6.8.4.4]:

1. The dynamic type of the object.
2. A cv-qualified version of the dynamic type.
3. A type that is the signed or unsigned variant of the dynamic type.
4. A type that is `char`, `unsigned char`, or `std::byte` (byte access is always allowed).
5. An aggregate or union type that contains one of the above types among its members.

### Violation Example

```cpp
#include <iostream>

float pun_to_int(float f) {
    int* ip = reinterpret_cast<int*>(&f);  // UB: violates strict aliasing
    return static_cast<float>(*ip);
}
```

The compiler may assume that a write through `float*` does not affect a read through `int*` at the
same address, and may reorder or eliminate either operation.

### Compliant Alternatives

```cpp
#include <iostream>
#include <cstring>
#include <bit>

float safe_pun(float f) {
    int result;
    std::memcpy(&result, &f, sizeof(result));  // OK: memcpy accesses through char type
    return std::bit_cast<float>(result);       // C++20: guaranteed type punning
}
```

By [N4950 §6.8.4.4], `memcpy` is exempt from strict aliasing because it accesses objects through
`char*` (or `unsigned char*`), which is always permitted. `std::bit_cast` [N4950 §19.5.3] provides a
compile-time type punning facility that is guaranteed correct.

## 7. Alignment and Pointers

Every type `T` has an alignment requirement, `alignof(T)`, which is a power-of-two integer. A
pointer `T*` is guaranteed to point to an address that is a multiple of `alignof(T)` [N4950 §7.7.2].

### Alignment Requirements by Type

| Type                      | Typical Alignment | Notes                           |
| :------------------------ | :---------------- | :------------------------------ |
| `char`, `int8_t`          | 1                 | Any address                     |
| `int16_t`, `short`        | 2                 | Even address                    |
| `int32_t`, `int`, `float` | 4                 | 4-byte aligned                  |
| `int64_t`, `double`       | 8                 | 8-byte aligned                  |
| `__int128`                | 16                | 16-byte aligned                 |
| `__m128`                  | 16                | SSE requirement                 |
| `__m256`                  | 32                | AVX requirement                 |
| `max_align_t`             | 16 (typical)      | Maximum fundamental alignment   |
| `std::max_align_t`        | Implementation    | Alignment of the largest scalar |

### `std::aligned_alloc` for Custom Alignment

When allocating memory with alignment requirements exceeding `alignof(std::max_align_t)` (over-
aligned types), use `std::aligned_alloc`:

```cpp
#include <cstdlib>
#include <cstdint>
#include <new>

void* allocate_aligned(size_t size, size_t alignment) {
    // alignment must be a power of two supported by the implementation
    void* ptr = std::aligned_alloc(alignment, size);
    if (!ptr) {
        throw std::bad_alloc();
    }
    return ptr;
}

// C++17: use operator new with alignment
void* ptr = ::operator new(256, std::align_val_t{32});
// Frees with aligned deallocation
::operator delete(ptr, std::align_val_t{32});
```

### `alignas` for Stack Alignment

```cpp
#include <immintrin.h>

void simd_function() {
    alignas(32) float data[8];  // guaranteed 32-byte aligned for AVX
    __m256 vec = _mm256_load_ps(data);  // requires 32-byte alignment
}
```

## 8. Common Pitfalls

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

### Comparing Pointers from Different Arrays

Comparing relational operators (`&lt;`, `&gt;`, `&lt;=`, `&gt;=`) on pointers that do not point into
the same array is undefined behavior [N4950 §7.6.9]. Equality operators (`==`, `!=`) are always
well-defined:

```cpp
int a[5];
int b[5];

if (&a[0] < &b[0]) {  // UB: different arrays
    // ...
}

if (&a[0] == &b[0]) {  // OK: always well-defined (false here)
    // ...
}
```

### Null Pointer Arithmetic

Adding an integer to a null pointer is undefined behavior:

```cpp
int* p = nullptr;
int* q = p + 1;  // UB: arithmetic on null pointer
```

## See Also

- [The Stack](../1_data_layout/4_stack.md)
- [The Heap](../1_data_layout/5_heap.md)
- [Reference Lifetime](2_reference_lifetime.md)
- [Type Punning](3_type_punning.md)
