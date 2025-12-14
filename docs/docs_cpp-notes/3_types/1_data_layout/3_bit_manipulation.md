---
title: Bit Manipulation
date: 2025-12-12T22:12:51.318Z
tags:
  - cpp
categories:
  - cpp
slug: bit-manipulation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Systems programming frequently requires bypassing the C++ type system to manipulate the raw binary representation of data. This includes parsing network protocols, inspecting floating-point representations, or optimizing algorithms via bitwise intrinsics.

Historically, these operations relied on Undefined Behavior (pointer casting), Compiler Intrinsics (`__builtin_popcount`), or C headers. C++20 and C++23 standardized these operations into the `<bit>` header, providing a portable, type-safe, and `constexpr`-friendly interface to hardware capabilities.

## 1. Safe Type Punning (`std::bit_cast`)

**Type Punning** is the act of interpreting the bits of one type as if they were another type (e.g., viewing a `float` as a `uint32_t` to inspect the exponent).

### The Strict Aliasing Rule (TBAA)

The C++ memory model enforces **Strict Aliasing**. A pointer to type `T` can only alias a pointer to type `U` if types are similar (mostly). Accessing an `int` through a `float*` is **Undefined Behavior**. The compiler optimizer assumes these pointers never alias, leading to aggressive reordering of loads and stores.

### Legacy Approaches (Broken)

```cpp
float f = 3.14f;

// 1. C-Style Cast (UNDEFINED BEHAVIOR)
// Violates Strict Aliasing. The compiler may optimize out the load.
uint32_t i = *(uint32_t*)&f;

// 2. Union (UNDEFINED BEHAVIOR in C++)
// While valid in C99, reading from an inactive union member is UB in C++.
// Most compilers support it as an extension, but it is not standard.
union { float f; uint32_t i; } u;
u.f = 3.14f;
uint32_t i2 = u.i;

// 3. memcpy (Safe but Verbose)
// The only standard-compliant pre-C++20 method.
uint32_t i3;
std::memcpy(&i3, &f, sizeof(float));
```

### The C++20 Solution: `std::bit_cast`

`std::bit_cast` is the only mechanism that allows reinterpreting bits between types of the same size that is safe, portable, and `constexpr` (computable at compile time).

```cpp
#include <bit>
#include <cstdint>

constexpr uint32_t inspect_float_bits(float f) {
    // 1. Constraint: Sizes must match
    static_assert(sizeof(float) == sizeof(uint32_t));

    // 2. Constraint: Types must be Trivially Copyable
    return std::bit_cast<uint32_t>(f);
}

// Result is computed at compile-time
constexpr uint32_t bits = inspect_float_bits(1.0f);
```

<div className="godbolt-container">
  <iframe
    width="100%"
    height="800"
    src="https://godbolt.org/e?hideEditorToolbars=true#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:c%2B%2B,selection:(endColumn:49,endLineNumber:6,positionColumn:49,positionLineNumber:6,selectionStartColumn:49,selectionStartLineNumber:6,startColumn:49,startLineNumber:6),source:'%23include+%3Cbit%3E%0A%23include+%3Ccstdint%3E%0A%23include+%3Ciostream%3E%0A%0A//+Function+to+convert+float+to+uint32_t%0Aconstexpr+uint32_t+inspect_float_bits(float+f)+%7B%0A++++static_assert(sizeof(float)+%3D%3D+sizeof(uint32_t))%3B+//+Ensure+sizes+match%0A++++return+std::bit_cast%3Cuint32_t%3E(f)%3B+//+Cast+to+uint32_t%0A%7D%0A%0A//+Function+to+convert+uint32_t+back+to+float%0Aconstexpr+float+uint32_to_float(uint32_t+u)+%7B%0A++++return+std::bit_cast%3Cfloat%3E(u)%3B+//+Cast+back+to+float%0A%7D%0A%0A//+Result+is+computed+at+compile-time%0Aconstexpr+uint32_t+bits+%3D+inspect_float_bits(1.0f)%3B%0Aconstexpr+float+original_float+%3D+uint32_to_float(bits)%3B%0A%0Aint+main()+%7B%0A++++std::cout+%3C%3C+%22Bits:+%22+%3C%3C+bits+%3C%3C+%22%5Cn%22%3B%0A++++std::cout+%3C%3C+%22Original+Float:+%22+%3C%3C+original_float%3B%0A%7D'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:59.77147360126084,l:'4',m:46.19787408013082,n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:g152,compilerName:'',compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:14,fontUsePx:'0',j:1,lang:c%2B%2B,libs:!(),options:'-std%3Dc%2B%2B23',overrides:!(),runtimeTools:!(),source:1,stdinPanelShown:'1',tree:0,wrap:'1'),l:'5',n:'0',o:'Executor+x86-64+gcc+15.2+(C%2B%2B,+Editor+%231)',t:'0')),header:(),l:'4',m:53.80212591986917,n:'0',o:'',s:0,t:'0')),k:100,l:'3',n:'0',o:'',t:'0')),version:4"
    title="Compiler Explorer"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

**Architectural Note:** `std::bit_cast` acts as a compile-time `memcpy`. It does not perform numeric conversion (like `static_cast<int>(3.14f)` would). It preserves the exact bit pattern.

## 2. Hardware Accelerated Bit Operations (`<bit>`)

Prior to C++20, accessing CPU instructions like `POPCNT` (Population Count) or `LZCNT` (Leading Zero Count) required compiler-specific intrinsics (`__builtin_popcount` in GCC, `_BitScanForward` in MSVC).

The `<bit>` header standardizes these operations.

### Key Primitives

| Function                  | Description                                | x86_64 Instruction | ARM64 Instruction |
| :------------------------ | :----------------------------------------- | :----------------- | :---------------- |
| **`std::popcount`**       | Counts number of set bits (1s).            | `POPCNT`           | `CNT`             |
| **`std::countl_zero`**    | Counts consecutive zeros from MSB (Left).  | `LZCNT` / `BSR`    | `CLZ`             |
| **`std::countr_zero`**    | Counts consecutive zeros from LSB (Right). | `TZCNT` / `BSF`    | `RBIT` + `CLZ`    |
| **`std::has_single_bit`** | Checks if value is power of two.           | `POPCNT` / Logic   | Logic             |
| **`std::bit_width`**      | Minimum bits required to represent value.  | `LZCNT`            | `CLZ`             |

### Architectural Usage: Bitmasks and Pools

A common use case is finding the first free slot in a memory pool managed by a bitmap.

```cpp
#include <bit>
#include <cstdint>
#include <optional>

struct ResourcePool {
    uint64_t usage_mask = 0; // 0 = Free, 1 = Used

    std::optional<int> allocate_index() {
        // Invert mask to find first 0 bit (free slot)
        // If usage_mask is all 1s, ~usage_mask is 0.
        if (~usage_mask == 0) return std::nullopt;

        // Find the index of the first '1' in the inverted mask
        // countr_zero counts trailing zeros, which equals the index of the first 1.
        int index = std::countr_zero(~usage_mask);

        // Mark as used
        usage_mask |= (1ULL << index);
        return index;
    }
};
```

This compiles to branchless machine code relying on hardware bit-scan instructions, significantly faster than a loop-based check.

## 3. Endianness (C++20/23)

As discussed in [Fundamental Types](1_fundamental_types.md), dealing with Endianness is critical for cross-platform serialization.

### Detection (`std::endian`)

C++20 allows compile-time introspection of the host byte order via `std::endian`.

```cpp
if constexpr (std::endian::native == std::endian::little) {
    // x86_64, ARM64 (usually), RISC-V
} else if constexpr (std::endian::native == std::endian::big) {
    // PowerPC
} else {
    // Mixed endian (PDP-11) - Extremely rare
}
```

### Manipulation (`std::byteswap`)

C++23 introduces `std::byteswap`, enabling zero-overhead byte reversal.

**Use Case:** Parsing a Network Packet (Network Byte Order is **Big Endian**).

```cpp
#include <bit>
#include <cstdint>

struct PacketHeader {
    uint32_t packet_id; // Network Endian
    uint16_t length;    // Network Endian
};

constexpr uint32_t network_to_host_32(uint32_t net_val) {
    if constexpr (std::endian::native == std::endian::little) {
        return std::byteswap(net_val);
    } else {
        return net_val;
    }
}

void process_packet(PacketHeader h) {
    // Compile-time branching optimized out
    uint32_t id = network_to_host_32(h.packet_id);
    // ...
}
```

## 4. `std::bitset` vs. Integer Flags

When managing sets of flags, C++ offers two primary mechanisms: `std::bitset` and raw integers with enum masks.

### `std::bitset<N>`

- **Storage:** Fixed size at compile time.
- **Interface:** Provides `test()`, `set()`, `flip()`. Bounds checked.
- **Pros:** Safe, readable (`b[5] = true`), prints easily to streams.
- **Cons:** Not trivially copyable in all implementations (though usually is). Cannot be easily iterated by hardware instructions (`popcount` on bitset is slower than on `uint64_t`).

### Raw Integer Masks (`enum class`)

- **Storage:** `uint8_t` to `uint64_t`.
- **Interface:** Bitwise operators `|`, `&`, `^`, `~`.
- **Pros:** Fits directly in registers. Compatible with C APIs. Fastest possible performance using `<bit>` intrinsics.
- **Cons:** Manual management of bit positions.

### Recommendation

- Use **Raw Integers** for low-level systems logic, serialization, and high-performance algorithms (using `<bit>`).
- Use **`std::bitset`** for application-level logic requiring >64 flags or formatted output.

### C++23: `std::bitset::reference`

Note that `std::bitset` returns a proxy object for `operator[]`.

```cpp
std::bitset<8> b;
auto val = b[0]; // Type is std::bitset::reference, NOT bool
bool x = val;    // Implicit conversion works
auto y = val;    // y is a proxy. If b dies, y dangles? (No, proxy refers to internal storage)
```

This proxy behavior can break type deduction in templates (`auto` vs `auto&`). Always cast to `bool` explicitly when storing the value.
