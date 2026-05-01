---
title: Type Punning and the Strict Aliasing Rule
description:
  "C++: Type Punning and the Strict Aliasing Rule — 1. What Is Type Punning?; 2. The Strict Aliasing Rule for thorough revision and examination preparation."
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
  - ALevel
categories:
  - Cpp
slug: type-punning-strict-aliasing
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Type Punning and the Strict Aliasing Rule

Type punning is the act of accessing the object representation of one type through a pointer or
reference of a different type. It is one of the most dangerous and misunderstood areas of C++
because the compiler's optimizer relies on the **Strict Aliasing Rule** to perform load/store
elimination and reordering.

This module covers the formal rules, the permitted escape hatches, and the real-world patterns where
type punning is necessary.

## 1. What Is Type Punning?

Type punning is treating the raw bytes of an object of type `T` as if they represented an object of
type `U`. Common motivations:

1. **Network packet parsing:** Reinterpreting a byte buffer as a structured header.
2. **Serialization/Deserialization:** Converting between wire format and in-memory representation.
3. **Floating-point bit manipulation:** Accessing the IEEE 754 representation of a `float` via
   integer operations.
4. **Hardware register access:** Mapping memory-mapped I/O registers onto typed overlays.

The naive approach uses `reinterpret_cast`:

```cpp
float f = 3.14f;
uint32_t bits = *reinterpret_cast<uint32_t*>(&f);
```

This compiles. It may even appear to work. **It is Undefined Behavior.**

## 2. The Strict Aliasing Rule

The Strict Aliasing Rule is defined in [N4950 S6.9.2.1]/11 (C++23, formerly [basic.lval]/11 in
C++17). Informally:

> If a program attempts to access the stored value of an object through a glvalue of other than one
> of the following types, the behavior is undefined:
>
> - the dynamic type of the object,
> - a cv-qualified version of the dynamic type,
> - a type that is the signed or unsigned variant of the dynamic type,
> - a type that is the signed or unsigned variant of the cv-qualified dynamic type,
> - an aggregate or union type that includes one of the aforementioned types among its elements or
>   non-static data members (including, recursively, an element or non-static data member of a
>   subaggregate or contained union),
> - a type that is a (possibly cv-qualified) base class type of the dynamic type,
> - a `char`, `unsigned char`, or `std::byte` type.

### Formal Statement and Proof That `reinterpret_cast` Punning Is UB

[N4950 S6.9.2.1]/11 provides an exhaustive list of types through which an object's stored value may
be accessed. Any access through a glvalue of a type **not** in this list is undefined behavior.

**Claim:** `*reinterpret_cast<U*>(&t)` (where `t` is an object of type `T` and `U` is not in the
aliasing list for `T`) is undefined behavior.

**Proof:**

1. The expression `reinterpret_cast<U*>(&t)` produces a value of type `U*` that points to the
   storage of `t` [N4950 S7.6.2.9]. The pointer value is well-defined (it points to the beginning of
   `t`'s storage).
2. The expression `*reinterpret_cast<U*>(&t)` is a glvalue of type `U` that designates the same
   storage as `t`.
3. When this glvalue is used to read `t`'s stored value, the program "attempts to access the stored
   value of an object through a glvalue" of type `U` [N4950 S6.9.2.1]/11.
4. `U` is not in the permitted aliasing list for `T` (by assumption: `U` is neither `T`, nor a
   cv-qualified variant, nor a signed/unsigned variant, nor an aggregate containing `T`, nor a base
   class of `T`, nor `char`/`unsigned char`/`std::byte`).
5. Therefore, the access is undefined behavior per [N4950 S6.9.2.1]/11. QED.

The critical point is that the UB occurs at the **read**, not at the `reinterpret_cast`. The cast
itself is well-defined — it produces a pointer. The UB occurs when you dereference that pointer to
read the object's value.

### Why the Compiler Cares

The rule exists to enable **Type-Based Alias Analysis (TBAA)**. Consider:

```cpp
void transform(float* pf, int* pi) {
    *pf = 1.0f;
    *pi = 0x3F800000;
    float result = *pf;
    // Is result 1.0f or some other value?
}
```

Under strict aliasing, the compiler assumes `pf` and `pi` cannot alias the same memory. It is
therefore free to:

1. Eliminate the second load of `*pf` and reuse the value `1.0f` it just stored.
2. Reorder the stores if beneficial.

If `pf` and `pi` actually point to the same memory (the programmer's intent when type punning), the
optimizer produces **incorrect results**. This is not a compiler bug. The programmer violated the
contract.

### TBAA in Practice: What the Optimizer Actually Does

Modern compilers (GCC, Clang, MSVC) use TBAA to:

1. **Eliminate redundant loads.** If `*pf` was stored and no `float*` store has occurred since, the
   compiler reuses the stored value without reloading from memory.
2. **Reorder loads and stores.** If `*pi` and `*pf` are known not to alias, the compiler can reorder
   their accesses for better instruction scheduling.
3. **Hoist loads out of loops.** If a load through a `float*` is inside a loop and no `float*` store
   occurs in the loop, the compiler moves the load before the loop.

These optimizations are valid **only** because the Strict Aliasing Rule guarantees that a load
through a `float*` cannot observe a store through an `int*`.

### Demonstrating the Effect of TBAA

```cpp
#include <cstdio>
#include <cstdint>

int test_tbaa() {
    int x = 0;
    int* pi = &x;
    float* pf = reinterpret_cast<float*>(pi);

    *pi = 42;
    *pf = 3.14f;
    return *pi;  // Under TBAA: returns 42 (optimizer reuses the int store)
                  // Without TBAA: returns the bit pattern of 3.14f as an int
}

int main() {
    int result = test_tbaa();
    std::printf("result = %d\n", result);
    // At -O2 with TBAA: result = 42
    // At -O2 with -fno-strict-aliasing: result = 1078523331 (bit pattern of 3.14f)
}
```

Compile and observe the difference:

```bash
g++ -O2 tbaa_test.cpp && ./a.out        # result = 42 (TBAA active)
g++ -O2 -fno-strict-aliasing tbaa_test.cpp && ./a.out  # result = 1078523331 (TBAA disabled)
```

### The `-fno-strict-aliasing` Escape Hatch

GCC and Clang provide `-fno-strict-aliasing` to disable TBAA. This makes the naive
`reinterpret_cast` approach "work" in practice, but at the cost of significant optimization
opportunities across the entire translation unit.

```bash
g++ -O2 -fno-strict-aliasing program.cpp
```

**Do not use this flag.** It is a global sledgehammer that degrades performance for all code, not
just the type-punning sites.

## 3. Permitted Type Punning Techniques

### 3.1 `memcpy` — The Portable Baseline

Since C++14, `memcpy` is the Standard-blessed mechanism for type punning. [N4950 S6.9]/2 states that
copying an object's representation via `memcpy` into an array of `unsigned char` (or `std::byte`)
and back preserves the original value. The reverse direction (copying bytes into a new object) also
constructs a valid object.

```cpp
#include <cstring>
#include <cstdint>

uint32_t float_to_bits(float f) {
    uint32_t bits;
    std::memcpy(&bits, &f, sizeof(bits));
    return bits;
}

float bits_to_float(uint32_t bits) {
    float f;
    std::memcpy(&f, &bits, sizeof(f));
    return f;
}
```

**Why this works:** `memcpy` operates on `void*` / `const void*`, which are explicitly excluded from
the aliasing restrictions. Furthermore, every major optimizer at `-O2` and above recognizes the
`memcpy` pattern for small, known-size copies and emits a single register move — **zero runtime
overhead**.

```cpp
// Compiler output for float_to_bits at -O2 (x86_64):
//   vmovd  eax, xmm0
//   ret
```

### Proof That `memcpy`-Based Punning Is the Only Portable Method

**Claim:** `memcpy` is the only type-punning method that is (a) well-defined per the Standard, (b)
works on all platforms, and (c) produces zero-overhead code at `-O2`.

**Proof:**

1. **Well-defined per the Standard:** [N4950 S6.9]/2 states that copying an object's object
   representation via `memcpy` into an array of `unsigned char` or `std::byte` produces a value
   that, when copied back via `memcpy`, compares equal to the original. This is a direct guarantee
   in the Standard. `reinterpret_cast`-based punning has no such guarantee — it is explicitly UB.

2. **Works on all platforms:** `memcpy` handles alignment correctly on all architectures, including
   those that trap on misaligned access (e.g., some ARM variants). `reinterpret_cast`-based punning
   can produce misaligned accesses, which is UB on its own regardless of the aliasing rule.

3. **Zero-overhead at `-O2`:** All major compilers (GCC, Clang, MSVC, ICC) recognize small `memcpy`
   calls with compile-time-known sizes and inline them as register moves or load/store instructions.
   The generated code is identical to what a hand-written `reinterpret_cast` would produce on
   x86_64, but it is well-defined.

4. **No alternative is portable:**
   - `reinterpret_cast` punning: UB per [N4950 S6.9.2.1]/11.
   - Union-based punning: Well-defined in C++ (see Section 3.3), but not `constexpr`, and some
     compilers issue warnings. The lifetime rules for non-active union members are subtle.
   - `std::bit_cast`: Well-defined and `constexpr`, but requires C++20. Not available in C++14/17.

Therefore, for C++14/17 code, `memcpy` is the unique method that satisfies all three criteria. For
C++20 code, `std::bit_cast` is equally portable and adds `constexpr` support. QED.

### 3.2 `std::bit_cast` — The C++20 Solution

`std::bit_cast<T>(U)` in `<bit>` performs a bitwise copy from an object of type `U` to an object of
type `T`, returning the result by value. It is a `constexpr` function.

```cpp
#include <bit>
#include <cstdint>

constexpr uint32_t float_to_bits(float f) {
    return std::bit_cast<uint32_t>(f);
}

constexpr float bits_to_float(uint32_t bits) {
    return std::bit_cast<float>(bits);
}

static_assert(float_to_bits(1.0f) == 0x3F800000);
```

**Constraints:**

1. Both `T` and `U` must be the same size: `sizeof(T) == sizeof(U)`.
2. Both types must be trivially copyable.
3. The destination type must be implicitly lifetime-constructible from the bit pattern.

**Why `std::bit_cast` is preferred over `memcpy` in C++20:**

1. `constexpr` support enables compile-time punning (e.g., in `static_assert`).
2. The interface is cleaner — no manual buffer management.
3. The constraints are checked at compile time (size mismatch is a hard error).
4. The intent is clearer — the function name communicates type punning.

**Implementation sketch:** A conforming `std::bit_cast` can be implemented in terms of `memcpy`:

```cpp
#include <cstring>
#include <type_traits>

template<typename To, typename From>
constexpr To bit_cast(const From& from) noexcept {
    static_assert(sizeof(To) == sizeof(From));
    static_assert(std::is_trivially_copyable_v<To>);
    static_assert(std::is_trivially_copyable_v<From>);
    To to;
    std::memcpy(&to, &from, sizeof(To));
    return to;
}
```

### 3.3 Union-Based Type Punning

Reading from a non-active union member is permitted in C++ (unlike C99, where it was
implementation-defined). [N4950 S11.5]/1 states:

> In a standard-layout union object with an active member of struct type, the named non-static data
> members of that struct are also active members.

And [N4950 S6.9.2.1]/11 explicitly lists union members as permitted alias types. However, there is
an important caveat from [N4950 S11.5]/1:

> the implicit lifetime of the non-active member does not begin

This means you must use the member access syntax (not `memcpy`-style pointer casting from outside
the union) for the alias to be well-defined.

```cpp
union FloatBits {
    float f;
    uint32_t u;
};

uint32_t pun_via_union(float f) {
    FloatBits fb;
    fb.f = f;
    return fb.u; // Well-defined: reads through union member
}
```

**Caveat:** The union approach is **not constexpr** in the read-from-non-active-member direction.
Use `std::bit_cast` for compile-time punning.

### Detailed Analysis of Union Punning Legality

The legality of union-based type punning in C++ depends on several conditions:

1. **The union must be a standard-layout union.** If the union has non-trivial special member
   functions, the aliasing behavior is not guaranteed.
2. **The types must be standard-layout.** Both the active and non-active members should be
   standard-layout types for the alias to be well-defined.
3. **You must access through the union member syntax.** Taking the address of the non-active member
   and dereferencing it through a pointer of the wrong type is still UB.

```cpp
#include <cstdint>
#include <cstring>

union SafePun {
    float f;
    uint32_t u;
};

uint32_t good_pun(float f) {
    SafePun sp;
    sp.f = f;
    return sp.u;  // Well-defined: access through union member
}

uint32_t bad_pun(float f) {
    SafePun sp;
    sp.f = f;
    // UB: taking address of non-active member and reading through wrong pointer type
    return *reinterpret_cast<uint32_t*>(&sp.u);
}
```

**Why the distinction matters:** The union member access syntax is special-cased by the Standard to
be well-defined [N4950 S6.9.2.1]/11. But `reinterpret_cast<uint32_t*>(&sp.u)` does not go through
the union member access path — it goes through the pointer cast path, which is subject to the strict
aliasing rule.

### 3.4 `std::aligned_storage` (Deprecated in C++23)

`std::aligned_storage` provides a type-safe buffer with explicit size and alignment, allowing manual
object construction and reinterpretation.

```cpp
#include <type_traits>
#include <new>

template<typename T>
struct ManualBuffer {
    using Storage = typename std::aligned_storage<sizeof(T), alignof(T)>::type;
    Storage buffer;

    void store(const T& val) {
        new (&buffer) T(val);
    }

    T load() const {
        return *reinterpret_cast<const T*>(&buffer);
    }

    ~ManualBuffer() {
        reinterpret_cast<const T*>(&buffer)->~T();
    }
};
```

**Status:** `std::aligned_storage` is deprecated in C++23 in favor of
`alignas(T) std::byte buffer[sizeof(T)]` or `std::optional<T>`.

### 3.5 Modern Replacement: `alignas` + Placement New

```cpp
#include <new>

struct alignas(alignof(max_align_t)) TypedBuffer {
    std::byte data[sizeof(double)];

    void set_double(double val) {
        new (data) double(val);
    }

    double get_double() const {
        double result;
        std::memcpy(&result, data, sizeof(double));
        return result;
    }
};
```

## 4. Real-World Use Cases

### 4.1 Network Packet Parsing

```cpp
struct EthernetHeader {
    uint8_t  dst_mac[6];
    uint8_t  src_mac[6];
    uint16_t ether_type;
};

void parse_frame(const uint8_t* frame, size_t len) {
    if (len < sizeof(EthernetHeader)) return;

    EthernetHeader header;
    std::memcpy(&header, frame, sizeof(header));

    if (header.ether_type == 0x0800) {
        // IPv4 packet — parse next layer
    }
}
```

**Why not `reinterpret_cast<const EthernetHeader*>(frame)`?** The buffer may not satisfy the
alignment requirement of `EthernetHeader` (which is 2). Misaligned access is UB on many
architectures. `memcpy` handles any alignment correctly.

### 4.2 Floating-Point Classification

```cpp
#include <bit>
#include <cstdint>
#include <cmath>

bool is_negative_zero(float f) {
    return f == 0.0f && std::bit_cast<uint32_t>(f) == 0x80000000;
}

uint8_t extract_exponent(float f) {
    uint32_t bits = std::bit_cast<uint32_t>(f);
    return static_cast<uint8_t>((bits >> 23) & 0xFF);
}
```

### 4.3 Hardware Register Access

```cpp
struct StatusRegister {
    uint32_t reserved : 27;
    uint32_t error    : 1;
    uint32_t ready    : 1;
    uint32_t enabled  : 1;
    uint32_t valid    : 1;
    uint32_t count    : 1;
};

volatile StatusRegister* const REG =
    reinterpret_cast<StatusRegister*>(0xFFFF'0000);

bool is_ready() {
    uint32_t raw;
    std::memcpy(&raw, reinterpret_cast<const volatile void*>(REG), sizeof(raw));
    StatusRegister sr;
    std::memcpy(&sr, &raw, sizeof(sr));
    return sr.ready;
}
```

For memory-mapped I/O, the compiler must not cache or reorder accesses. `volatile` prevents
optimization. `memcpy` handles aliasing. Bit-fields are compiler-implementation-defined for layout,
so for portable hardware access, prefer explicit mask/shift on the raw `uint32_t`.

### 4.4 Portable FNV-1a Hash with Type Punning

```cpp
#include <cstddef>
#include <cstdint>
#include <cstring>

constexpr uint64_t fnv_offset = 0xcbf29ce484222325ull;
constexpr uint64_t fnv_prime = 0x100000001b3ull;

uint64_t fnv1a(const void* data, std::size_t len) {
    const uint8_t* p = static_cast<const uint8_t*>(data);
    uint64_t hash = fnv_offset;
    for (std::size_t i = 0; i < len; ++i) {
        hash ^= p[i];
        hash *= fnv_prime;
    }
    return hash;
}

uint64_t hash_double(double d) {
    uint64_t bits;
    std::memcpy(&bits, &d, sizeof(bits));
    return fnv1a(&bits, sizeof(bits));
}
```

## 5. Relationship to Object Representation

Every object in C++ has two representations [N4950 S6.9]:

- **Value representation:** The bits that determine the value.
- **Object representation:** The value representation plus any padding bits.

`sizeof(T)` gives the size of the **object representation**. `std::bit_cast` and `memcpy` copy the
full object representation. This means padding bits are preserved, which matters when:

1. Comparing objects for equality via bitwise comparison (do not do this — use `operator==`).
2. Serializing objects that may have padding (the padding bits are indeterminate and may contain
   trap representations).

For trivially copyable types with no padding, value representation and object representation are
identical. Use `std::has_unique_object_representations<T>` to check at compile time.

```cpp
static_assert(std::has_unique_object_representations_v<uint32_t>);
static_assert(!std::has_unique_object_representations_v<short>); // may have padding
```

### Padding and Type Punning

When type-punning between types that have different padding layouts, the padding bits are preserved
by `memcpy` and `std::bit_cast`. This is generally harmless when punning between types of the same
size (e.g., `float` and `uint32_t`, which both have no padding on typical platforms), but it can
cause issues when punning between types with different padding:

```cpp
#include <cstdint>
#include <cstring>
#include <iostream>

struct PaddedA {
    uint8_t a;
    // 3 bytes of padding on typical platforms
    uint32_t b;
};

struct PaddedB {
    uint8_t x;
    // 3 bytes of padding on typical platforms
    uint32_t y;
};

void padding_demo() {
    PaddedA pa{1, 2};
    PaddedB pb;
    std::memcpy(&pb, &pa, sizeof(pa));
    // pb.x == 1, pb.y == 2, padding preserved
    std::cout << "pb.x = " << (int)pb.x << ", pb.y = " << pb.y << "\n";
}
```

## 6. Alignment Implications

### Alignment Requirements and Misaligned Access

Type punning through `reinterpret_cast` can produce misaligned pointers, which is undefined behavior
on architectures that do not support unaligned access (e.g., some ARM Cortex-M variants, older
SPARC).

```cpp
#include <cstdint>
#include <cstring>
#include <iostream>

void alignment_demo() {
    uint8_t buffer[7];  // Not guaranteed to be aligned for uint32_t
    buffer[0] = 0x78;
    buffer[1] = 0x56;
    buffer[2] = 0x34;
    buffer[3] = 0x12;

    // BAD: may be misaligned — UB on strict-alignment architectures
    // uint32_t val = *reinterpret_cast<uint32_t*>(buffer);

    // GOOD: memcpy handles any alignment
    uint32_t val;
    std::memcpy(&val, buffer, sizeof(val));
    std::cout << "val = 0x" << std::hex << val << "\n";
    // Output: val = 0x12345678 (little-endian)
}
```

`memcpy` is alignment-agnostic: it copies bytes one at a time (or in appropriately aligned chunks)
without requiring the source or destination to satisfy any particular alignment. The compiler's
optimizer recognizes this pattern and emits the most efficient code for the target architecture.

### Using `alignas` for Guaranteed Alignment

When you need to type-pun a buffer that you control, use `alignas` to guarantee proper alignment:

```cpp
#include <cstdint>
#include <cstring>
#include <iostream>

void aligned_buffer_demo() {
    alignas(uint32_t) uint8_t buffer[sizeof(uint32_t)];
    buffer[0] = 0x78;
    buffer[1] = 0x56;
    buffer[2] = 0x34;
    buffer[3] = 0x12;

    uint32_t val;
    std::memcpy(&val, buffer, sizeof(val));
    std::cout << "val = 0x" << std::hex << val << "\n";
}
```

Even with `alignas`, prefer `memcpy` over `reinterpret_cast` for the actual punning. `alignas`
eliminates the alignment concern, but `memcpy` eliminates the aliasing concern. Use both for maximum
portability.

## 7. Endianness and Type Punning

### How Endianness Affects Type Punning Results

`std::bit_cast` and `memcpy` preserve the **byte order** of the source. The result of punning a
multi-byte type depends on the target platform's endianness:

```cpp
#include <bit>
#include <cstdint>
#include <iostream>

void endianness_demo() {
    uint32_t val = 0x01020304;
    uint8_t bytes[4];
    std::memcpy(bytes, &val, 4);

    if constexpr (std::endian::native == std::endian::little) {
        // bytes[0] == 0x04, bytes[1] == 0x03, bytes[2] == 0x02, bytes[3] == 0x01
        std::cout << "Little-endian: ";
    } else if constexpr (std::endian::native == std::endian::big) {
        // bytes[0] == 0x01, bytes[1] == 0x02, bytes[2] == 0x03, bytes[3] == 0x04
        std::cout << "Big-endian: ";
    }

    for (int i = 0; i < 4; ++i) {
        std::cout << std::hex << (int)bytes[i] << " ";
    }
    std::cout << "\n";
}
```

### Portable Byte Extraction

For portable wire formats that require a specific byte order, always extract bytes explicitly:

```cpp
#include <cstdint>
#include <cstring>

uint32_t read_big_endian(const uint8_t* p) {
    return (uint32_t(p[0]) << 24)
         | (uint32_t(p[1]) << 16)
         | (uint32_t(p[2]) << 8)
         |  uint32_t(p[3]);
}

void write_big_endian(uint8_t* p, uint32_t val) {
    p[0] = static_cast<uint8_t>(val >> 24);
    p[1] = static_cast<uint8_t>(val >> 16);
    p[2] = static_cast<uint8_t>(val >> 8);
    p[3] = static_cast<uint8_t>(val);
}

uint32_t to_native_endian(uint32_t val, std::endian source) {
    if (source == std::endian::native) return val;
    uint8_t bytes[4];
    std::memcpy(bytes, &val, 4);
    return (uint32_t(bytes[3]) << 24)
         | (uint32_t(bytes[2]) << 16)
         | (uint32_t(bytes[1]) << 8)
         |  uint32_t(bytes[0]);
}
```

Or use `std::endian` (C++20) with conditional byte swapping.

## 8. Comparison Table of All Type Punning Methods

| Method                                            | Legality (C++ Standard)              | `constexpr`        | Alignment Safe            | Performance            | Portability         |
| :------------------------------------------------ | :----------------------------------- | :----------------- | :------------------------ | :--------------------- | :------------------ |
| `reinterpret_cast` pointer punning                | **UB** [N4950 S6.9.2.1]/11           | No                 | No                        | Zero overhead (but UB) | Non-portable        |
| `memcpy`                                          | **Well-defined** [N4950 S6.9]/2      | No (C++23 may add) | Yes                       | Zero overhead at `-O2` | All platforms       |
| `std::bit_cast` (C++20)                           | **Well-defined** [N4950 S20.15.5]    | Yes                | Yes                       | Zero overhead          | All C++20 platforms |
| Union member read                                 | **Well-defined** [N4950 S6.9.2.1]/11 | No                 | Yes (if union is aligned) | Zero overhead          | All C++ compilers   |
| Union + pointer cast outside union                | **UB**                               | No                 | No                        | Zero overhead          | Non-portable        |
| `std::aligned_storage` + placement new + `memcpy` | **Well-defined**                     | No                 | Yes                       | Zero overhead          | All C++11+          |
| `alignas` + placement new + `memcpy`              | **Well-defined**                     | No                 | Yes                       | Zero overhead          | All C++11+          |

### Decision Matrix: Which Method to Use

| Requirement                | Technique                 | `constexpr` | Portability             | Performance                |
| :------------------------- | :------------------------ | :---------- | :---------------------- | :------------------------- |
| Compile-time punning       | `std::bit_cast`           | Yes         | All conforming C++20    | Zero overhead              |
| Runtime punning (C++20+)   | `std::bit_cast`           | Yes         | All conforming C++20    | Zero overhead              |
| Runtime punning (C++14/17) | `std::memcpy`             | No          | All C++ implementations | Zero overhead at `-O2`     |
| Legacy C++ code            | `union` member read       | No          | All C++ compilers       | Zero overhead              |
| Type-erased buffer         | `alignas` + placement new | No          | All C++11+              | Zero overhead              |
| I/O boundary parsing       | `memcpy` into struct      | No          | All                     | Correct alignment handling |
| Endianness-aware parsing   | Explicit byte extraction  | Possible    | All                     | Zero overhead              |

## 9. Common Pitfalls

### Pitfall 1: `reinterpret_cast` Pointer Punning

```cpp
float f = 0.0f;
int i = *reinterpret_cast<int*>(&f); // UB: violates strict aliasing
```

The compiler may cache `f` in a register and never reload from memory, yielding a stale or
uninitialized value for `i`.

### Pitfall 2: Union with Non-Standard-Layout Types

```cpp
union Bad {
    std::string s;
    int i;
};
```

This is well-formed but dangerous. Writing to `s` then reading from `i` is UB because `std::string`
is not trivially copyable. The union-based punning exception only applies to trivially copyable
types where the value representations can be meaningfully reinterpreted.

### Pitfall 3: Assuming `char*` Aliasing Applies to `signed char*`

Only `char`, `unsigned char`, and `std::byte` have the universal aliasing exemption. `signed char`
is listed in the Standard, but historically some compilers only exempted `unsigned char`. In C++23,
all three are explicitly listed. For maximum portability on pre-C++23 compilers, prefer
`unsigned char` or `std::byte`.

### Pitfall 4: Endianness in Cross-Platform Punning

`std::bit_cast` and `memcpy` preserve the **byte order** of the source. If you pun a `float` to
`uint32_t`, the result depends on the target platform's endianness. For portable wire formats,
always use explicit byte extraction:

```cpp
uint32_t to_big_endian_uint32(uint32_t native) {
    uint8_t bytes[4];
    std::memcpy(bytes, &native, 4);
    return (uint32_t(bytes[0]) << 24)
         | (uint32_t(bytes[1]) << 16)
         | (uint32_t(bytes[2]) << 8)
         |  uint32_t(bytes[3]);
}
```

Or use `std::endian` (C++20) with conditional byte swapping.

### Pitfall 5: Punning Types of Different Sizes

`std::bit_cast` and `memcpy`-based punning require the source and destination to be the same size.
Punning between types of different sizes (e.g., `float` to `uint64_t`) does not make sense because
the bit patterns have different lengths. The extra bytes in the larger type would be uninitialized
or contain garbage.

```cpp
#include <bit>
#include <cstdint>

// This is a COMPILE ERROR — good:
// auto bad = std::bit_cast<uint64_t>(1.0f);  // sizeof(float) != sizeof(uint64_t)

// This compiles but is WRONG — the upper 4 bytes of i are uninitialized:
float f = 3.14f;
uint64_t i;
std::memcpy(&i, &f, sizeof(f));  // Only copies 4 bytes into an 8-byte variable
// The upper 4 bytes of i are indeterminate
```

### Pitfall 6: Type Punning and `constexpr`

Prior to C++20, `memcpy` is not `constexpr`, so type punning cannot be done at compile time. In
C++20, `std::bit_cast` is `constexpr`, and `memcpy` is conditionally `constexpr` for trivially
copyable types. If you need compile-time punning in C++17, your options are limited to manual bit
manipulation:

```cpp
#include <cstdint>

constexpr uint32_t float_to_bits_cxx17(float f) {
    uint32_t result;
    // Manual bit manipulation — no memcpy in constexpr
    // This requires knowing the float layout (IEEE 754)
    // and the platform endianness
    const uint32_t* p = reinterpret_cast<const uint32_t*>(&f);
    // ERROR: reinterpret_cast is not constexpr
    return result;
}
```

In C++17, the only portable way to perform compile-time type punning is to avoid it entirely and use
arithmetic instead, or to upgrade to C++20 and use `std::bit_cast`.

### Pitfall 7: Strict Aliasing and `restrict`-Like Semantics

Even if you do not explicitly type-pun, strict aliasing affects how you write generic code. If a
function takes two pointers of different types and writes through both, the compiler assumes they do
not alias:

```cpp
void update(float* pf, int* pi, int n) {
    for (int i = 0; i < n; ++i) {
        pf[i] = 0.0f;  // Compiler assumes this does not affect *pi
        pi[i] = 0;     // Compiler assumes this does not affect *pf
    }
}
```

If `pf` and `pi` actually point to overlapping memory, the compiler may optimize away one of the
stores. This is not type punning per se, but it is a consequence of the same rule.

## See Also

- [Pointers](1_pointers.md)
- [Reference Lifetime](2_reference_lifetime.md)
- [String Views and SSO](4_string_views_sso.md)
- **`std::bit_cast`** — [N4950 S20.15.5], C++20.
- **Strict Aliasing** — [N4950 S6.9.2.1]/11.
