---
title: Type Punning and the Strict Aliasing Rule
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

The Strict Aliasing Rule is defined in [N4950 §6.9.2.1]/11 (C++23, formerly [basic.lval]/11 in
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

Since C++14, `memcpy` is the Standard-blessed mechanism for type punning. [N4950 §6.9]/2 states that
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

### 3.3 Union-Based Type Punning

Reading from a non-active union member is permitted in C++ (unlike C99, where it was
implementation-defined). [N4950 §11.5]/1 states:

> In a standard-layout union object with an active member of struct type, the named non-static data
> members of that struct are also active members.

And [N4950 §6.9.2.1]/11 explicitly lists union members as permitted alias types. However, there is
an important caveat from [N4950 §11.5]/1:

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

## 5. Relationship to Object Representation

Every object in C++ has two representations [N4950 §6.9]:

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

## 6. Common Pitfalls

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

## 7. Decision Matrix

| Requirement          | Technique                 | `constexpr` | Portability             | Performance                |
| :------------------- | :------------------------ | :---------- | :---------------------- | :------------------------- |
| Compile-time punning | `std::bit_cast`           | Yes         | All conforming C++20    | Zero overhead              |
| Runtime punning      | `std::memcpy`             | No          | All C++ implementations | Zero overhead at `-O2`     |
| Legacy C++ code      | `union` member read       | No          | All C++ compilers       | Zero overhead              |
| Type-erased buffer   | `alignas` + placement new | No          | All C++11+              | Zero overhead              |
| I/O boundary parsing | `memcpy` into struct      | No          | All                     | Correct alignment handling |

## See Also

- **Module 7: Data Layout** — Object representation, padding, alignment (`alignof`, `alignas`),
  `std::has_unique_object_representations`.
- **Module 8: Pointers and References** — `reinterpret_cast` semantics, pointer provenance.
- **`std::bit_cast`** — [N4950 §20.15.5], C++20.
- **Strict Aliasing** — [N4950 §6.9.2.1]/11.
