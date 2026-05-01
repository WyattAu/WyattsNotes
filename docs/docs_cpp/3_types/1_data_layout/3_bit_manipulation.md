---
title: Bit Manipulation
description:
  "C++: Bit Manipulation — 1. Safe Type Punning (`std::bit_cast`); The Strict Aliasing Rule (TBAA); Legacy Approaches (Broken)."
date: 2025-12-12T22:12:51.318Z
tags:
  - cpp
categories:
  - cpp
slug: bit-manipulation
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Systems programming frequently requires bypassing the C++ type system to manipulate the raw binary
representation of data. This includes parsing network protocols, inspecting floating-point
representations, or optimizing algorithms via bitwise intrinsics.

Historically, these operations relied on Undefined Behavior (pointer casting), Compiler Intrinsics
(`__builtin_popcount`), or C headers. C++20 and C++23 standardized these operations into the `<bit>`
header, providing a portable, type-safe, and `constexpr`-friendly interface to hardware
capabilities.

## 1. Safe Type Punning (`std::bit_cast`)

**Type Punning** is the act of interpreting the bits of one type as if they were another type (e.g.,
viewing a `float` as a `uint32_t` to inspect the exponent).

### The Strict Aliasing Rule (TBAA)

The C++ memory model enforces **Strict Aliasing**. A pointer to type `T` can only alias a pointer to
type `U` if types are similar (mostly). Accessing an `int` through a `float*` is **Undefined
Behavior**. The compiler optimizer assumes these pointers never alias, leading to aggressive
reordering of loads and stores.

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

`std::bit_cast` is the only mechanism that allows reinterpreting bits between types of the same size
that is safe, portable, and `constexpr` (computable at compile time).

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
    src="https://godbolt.org/e?hideEditorToolbars=true#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:c%2B%2B,selection:(endColumn:49,endLineNumber:6,positionColumn:49,positionLineNumber:6,selectionStartColumn:49,selectionStartLineNumber:6,startColumn:49,startLineNumber:6),source:'%23include+%3Cbit%3E%0A%23include+%3Ccstdint%3E%0A%23include+%3Ciostream%3E%0A%0A//+Function+to+convert+float+to+uint32_t%0Aconstexpr+uint32_t+inspect_float_bits(float+f)+%7B%0A++++static_assert(sizeof(float)+%3D%3D+sizeof(uint32_t))%3B+//+Ensure+sizes+match%0A++++return+std::bit_cast%3Cuint32_t%3E(f)%3B+//+Cast+to+uint32_t%0A%7D%0A%0A//+Function+to+convert+uint32_t+back+to+float%0Aconstexpr+float+uint32_to_float(uint32_t+u)+%7B%0A++++return+std::bit_cast%3Cfloat%3E(u)%3B+//+Cast+back+to+float%0A%7D%0A%0A//+Result+is+computed+at+compile-time%0Aconstexpr+uint32_t+bits+%3D+inspect_float_bits(1.0f)%3B%0Aconstexpr+float+original_float+%3D+uint32_to_float(bits)%3A%0A%0Aint+main()+%7B%0A++++std::cout+%3C%3C+%22Bits:+%22+%3C%3C+bits+%3C%3C+%22%5Cn%22%3B%0A++++std::cout+%3C%3C+%22Original+Float:+%22+%3C%3C+original_float%3B%0A%7D'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:59.77147360126084,l:'4',m:46.19787408013082,n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:g152,compilerName:'',compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:14,fontUsePx:'0',j:1,lang:c%2B%2B,libs:!(),options:'-std%3Dc%2B%2B23',overrides:!(),runtimeTools:!(),source:1,stdinPanelShown:'1',tree:0,wrap:'1'),l:'5',n:'0',o:'Executor+x86-64+gcc+15.2+(C%2B%2B,+Editor+%231)',t:'0')),header:(),l:'4',m:53.80212591986917,n:'0',o:'',s:0,t:'0')),k:100,l:'3',n:'0',o:'',t:'0')),version:4"
    title="Compiler Explorer"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

**Architectural Note:** `std::bit_cast` acts as a compile-time `memcpy`. It does not perform numeric
conversion (like `static_cast<int>(3.14f)` would). It preserves the exact bit pattern.

### `std::bit_cast` Constraints

`std::bit_cast` requires that both the source and destination types are **Trivially Copyable**
[N4950 §20.15.4.6]. This excludes types with virtual functions, non-trivial
constructors/destructors, or reference members. The sizes must also be equal.

```cpp
struct NonTrivial {
    std::string name;  // NOT trivially copyable
    int value;
};

// std::bit_cast<int>(NonTrivial{});  // ERROR: NonTrivial is not trivially copyable
```

### `std::bit_cast` with Padding Bits

When punning between types that have different internal padding, `std::bit_cast` preserves the
entire bit pattern including padding. This means that padding bits in the destination type are set
to whatever bits occupy those positions in the source representation. Reading padding bits is
technically UB in C++ [N4950 §6.9], but `std::bit_cast` itself is well-defined because it operates
on the object representation, not the value representation.

```cpp
#include <bit>
#include <cstdint>

struct Padded {
    uint8_t  a;
    uint32_t b;  // 3 bytes of padding after 'a'
};

struct Dense {
    uint8_t  a;
    uint8_t  pad1, pad2, pad3;
    uint32_t b;
};

static_assert(sizeof(Padded) == 8);
static_assert(sizeof(Dense) == 8);
static_assert(sizeof(Padded) == sizeof(Dense));

// Both types have the same size and are trivially copyable
auto d = std::bit_cast<Dense>(Padded{.a = 1, .b = 42});
// d.pad1, d.pad2, d.pad3 contain whatever was in the padding of Padded
```

## 2. Hardware Accelerated Bit Operations (`<bit>`)

Prior to C++20, accessing CPU instructions like `POPCNT` (Population Count) or `LZCNT` (Leading Zero
Count) required compiler-specific intrinsics (`__builtin_popcount` in GCC, `_BitScanForward` in
MSVC).

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

This compiles to branchless machine code relying on hardware bit-scan instructions, significantly
faster than a loop-based check.

### Rotations: `std::rotl` and `std::rotr`

C++20 introduces portable bit rotation [N4950 §23.16.5]:

```cpp
#include <bit>
#include <cstdint>
#include <cstdio>

int main() {
    uint32_t val = 0x80000001u;

    // Rotate left by 1: MSB wraps to LSB
    uint32_t rotl_result = std::rotl(val, 1);
    // 0x80000001 -> 0x00000003
    std::printf("rotl: 0x%08x\n", rotl_result);  // 0x00000003

    // Rotate right by 1: LSB wraps to MSB
    uint32_t rotr_result = std::rotr(val, 1);
    // 0x80000001 -> 0xC0000000
    std::printf("rotr: 0x%08x\n", rotr_result);  // 0xC0000000

    // Rotation amount is modulo the bit width
    // rotl(val, 33) == rotl(val, 1) for uint32_t
    static_assert(std::rotl(val, 33) == std::rotl(val, 1));
}
```

On x86_64, these compile to `ROL` and `ROR` instructions. On architectures without native rotation
(some older ARM variants), the compiler emits a shift-shift-or sequence, which is still optimal.

### Power-of-Two Utilities: `std::bit_ceil` and `std::bit_floor`

C++20 adds functions for rounding up/down to the nearest power of two [N4950 §23.16.3]:

```cpp
#include <bit>
#include <cstdint>
#include <cstdio>

int main() {
    // bit_floor: largest power of 2 not greater than x
    std::printf("bit_floor(17) = %u\n", std::bit_floor(17u));   // 16
    std::printf("bit_floor(16) = %u\n", std::bit_floor(16u));   // 16
    std::printf("bit_floor(0)  = %u\n", std::bit_floor(0u));    // 0

    // bit_ceil: smallest power of 2 not less than x
    std::printf("bit_ceil(17) = %u\n", std::bit_ceil(17u));     // 32
    std::printf("bit_ceil(16) = %u\n", std::bit_ceil(16u));     // 16

    // Practical: compute required allocation size for a hash table
    size_t element_count = 1000;
    size_t bucket_count = std::bit_ceil(element_count);  // 1024
}
```

These are `constexpr`, enabling compile-time capacity planning for containers that require
power-of-two bucket counts.

### `std::countl_one` and `std::countr_one`

C++20 also provides functions for counting consecutive set bits:

```cpp
#include <bit>
#include <cstdint>

int main() {
    uint8_t val = 0b11110000;

    static_assert(std::countl_one(val) == 4);  // 4 leading ones
    static_assert(std::countr_one(val) == 0);  // 0 trailing ones

    uint8_t val2 = 0b00001111;
    static_assert(std::countl_one(val2) == 0);  // 0 leading ones
    static_assert(std::countr_one(val2) == 4);  // 4 trailing ones
}
```

## 3. Endianness (C++20/23)

As discussed in [Fundamental Types](1_fundamental_types.md), dealing with Endianness is critical for
cross-platform serialization.

### Detection (`std::endian`)

C++20 allows compile-time introspection of the host byte order via `std::endian` [N4950 §23.16.9].

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

C++23 introduces `std::byteswap`, enabling zero-overhead byte reversal [N4950 §23.16.8].

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

### Endianness and `std::bit_cast`

When using `std::bit_cast` to interpret multi-byte values read from a byte stream, the result
depends on the host endianness. If you read 4 bytes `[0x01, 0x02, 0x03, 0x04]` into a `uint32_t` via
`bit_cast`, the result differs between little-endian and big-endian hosts:

```cpp
#include <bit>
#include <cstdint>

// On little-endian: result = 0x04030201
// On big-endian:    result = 0x01020304
constexpr uint32_t interpret_le(const uint8_t (&bytes)[4]) {
    return std::bit_cast<uint32_t>(bytes);
}
```

For portable deserialization, always use `std::byteswap` or explicit byte-level construction rather
than relying on `std::bit_cast` with raw byte arrays.

## 4. `std::bitset` vs. Integer Flags

When managing sets of flags, C++ offers two primary mechanisms: `std::bitset` and raw integers with
enum masks.

### `std::bitset<N>`

- **Storage:** Fixed size at compile time.
- **Interface:** Provides `test()`, `set()`, `flip()`. Bounds checked.
- **Pros:** Safe, readable (`b[5] = true`), prints easily to streams.
- **Cons:** Not trivially copyable in all implementations (though usually is). Cannot be easily
  iterated by hardware instructions (`popcount` on bitset is slower than on `uint64_t`).

### Raw Integer Masks (`enum class`)

- **Storage:** `uint8_t` to `uint64_t`.
- **Interface:** Bitwise operators `|`, `&`, `^`, `~`.
- **Pros:** Fits directly in registers. Compatible with C APIs. Fastest possible performance using
  `<bit>` intrinsics.
- **Cons:** Manual management of bit positions.

### Recommendation

- Use **Raw Integers** for low-level systems logic, serialization, and high-performance algorithms
  (using `<bit>`).
- Use **`std::bitset`** for application-level logic requiring &gt;64 flags or formatted output.

### C++23: `std::bitset::reference`

Note that `std::bitset` returns a proxy object for `operator[]`.

```cpp
std::bitset<8> b;
auto val = b[0]; // Type is std::bitset::reference, NOT bool
bool x = val;    // Implicit conversion works
auto y = val;    // y is a proxy. If b dies, y dangles? (No, proxy refers to internal storage)
```

This proxy behavior can break type deduction in templates (`auto` vs `auto&`). Always cast to `bool`
explicitly when storing the value.

### Type-Safe Bitmasks with `enum class`

For systems where you need both type safety and raw integer performance, the standard pattern is
`enum class` with overloaded bitwise operators:

```cpp
#include <cstdint>
#include <cstdio>

enum class Permissions : uint32_t {
    None    = 0,
    Read    = 1u << 0,
    Write   = 1u << 1,
    Execute = 1u << 2,
};

constexpr Permissions operator|(Permissions a, Permissions b) {
    return static_cast<Permissions>(
        static_cast<uint32_t>(a) | static_cast<uint32_t>(b));
}

constexpr Permissions operator&(Permissions a, Permissions b) {
    return static_cast<Permissions>(
        static_cast<uint32_t>(a) & static_cast<uint32_t>(b));
}

constexpr bool has_permission(Permissions flags, Permissions perm) {
    return (flags & perm) != Permissions::None;
}

int main() {
    Permissions user_perms = Permissions::Read | Permissions::Write;

    if (has_permission(user_perms, Permissions::Execute)) {
        std::printf("Can execute\n");
    } else {
        std::printf("Cannot execute\n");
    }
    // Output: Cannot execute
}
```

This pattern provides the ergonomics of `std::bitset` with the ABI compatibility and register-level
performance of raw integers. The `constexpr` qualification ensures the operations are computed at
compile time when possible.

## 5. Bit Fields and ABI Concerns

C++ bit fields allow specifying the exact number of bits a member occupies:

```cpp
struct PacketFlags {
    uint8_t  version : 4;   // 4 bits
    uint8_t  type    : 3;   // 3 bits
    bool     urgent  : 1;   // 1 bit
    uint16_t length;        // 16 bits
};
```

### The ABI Problem

The C++ Standard does not define the layout of bit fields across allocation units (bytes/words). The
order of bit field allocation, whether bits are packed from MSB or LSB, and whether bit fields can
span allocation unit boundaries are all implementation-defined [N4950 §11.4.1].

This means that the same bit field struct has **different memory layouts** on different compilers or
architectures:

```cpp
// On x86_64 GCC: bits packed LSB-first within allocation units
// On ARM64 GCC: bits packed LSB-first (usually)
// On MSVC: bits packed LSB-first, but allocation unit boundaries differ
```

**Rule:** Never use bit fields in structures that are serialized, sent over the network, or shared
between processes compiled with different compilers. Use explicit masking with `std::bit_cast` and
manual shift operations instead.

### Practical Alternative: Explicit Masking

```cpp
#include <cstdint>
#include <bit>

struct PacketFlags {
    uint16_t raw;

    uint8_t version() const { return static_cast<uint8_t>((raw >> 12) & 0xF); }
    uint8_t type()    const { return static_cast<uint8_t>((raw >> 9) & 0x7); }
    bool     urgent() const { return (raw >> 8) & 0x1; }
    uint16_t length() const { return raw & 0xFF; }

    void set_version(uint8_t v) { raw = (raw & 0x0FFF) | ((v & 0xF) << 12); }
    void set_type(uint8_t t)    { raw = (raw & 0xF1FF) | ((t & 0x7) << 9); }
};
```

This approach is portable, deterministic, and produces identical assembly to bit fields on any
platform.

## 6. Practical Example: Bloom Filter

A Bloom filter is a probabilistic data structure that tests set membership with a controlled
false-positive rate and zero false negatives. It is implemented entirely with bit manipulation.

```cpp
#include <bit>
#include <cstdint>
#include <cstddef>
#include <vector>
#include <string>
#include <string_view>
#include <cstdio>

class BloomFilter {
    std::vector<uint64_t> bits_;
    size_t num_hashes_;

    static constexpr uint64_t FNV_OFFSET = 14695981039346656037ULL;
    static constexpr uint64_t FNV_PRIME  = 1099511628211ULL;

    uint64_t hash(std::string_view key, size_t seed) const {
        uint64_t h = FNV_OFFSET ^ (seed * FNV_PRIME);
        for (char c : key) {
            h ^= static_cast<uint64_t>(c);
            h *= FNV_PRIME;
        }
        return h;
    }

    size_t index_for(uint64_t hash_val) const {
        return static_cast<size_t>(hash_val % (bits_.size() * 64));
    }

public:
    BloomFilter(size_t expected_count, double fp_rate)
        : bits_((expected_count * static_cast<size_t>(-std::log2(fp_rate)) + 63) / 64, 0)
        , num_hashes_(static_cast<size_t>(-std::log2(fp_rate)))
    {}

    void insert(std::string_view key) {
        for (size_t i = 0; i < num_hashes_; ++i) {
            size_t idx = index_for(hash(key, i));
            bits_[idx / 64] |= (1ULL << (idx % 64));
        }
    }

    bool contains(std::string_view key) const {
        for (size_t i = 0; i < num_hashes_; ++i) {
            size_t idx = index_for(hash(key, i));
            if ((bits_[idx / 64] & (1ULL << (idx % 64))) == 0) {
                return false;
            }
        }
        return true;
    }
};

int main() {
    BloomFilter bf(1000, 0.01);

    bf.insert("hello");
    bf.insert("world");

    std::printf("contains 'hello': %d\n", bf.contains("hello"));  // 1
    std::printf("contains 'world': %d\n", bf.contains("world"));  // 1
    std::printf("contains 'other': %d\n", bf.contains("other"));  // 0 (likely)
}
```

The core operation — setting and testing individual bits within a `uint64_t` array — relies on the
shift (`&lt;&lt;`) and bitwise AND (`&amp;`) operations. The modulo operation for index calculation
is optimized by the compiler into a bitmask when the table size is a power of two.

## 7. `constexpr` Bit Manipulation Patterns

Since all `<bit>` functions are `constexpr`, complex bit-level logic can be evaluated entirely at
compile time:

```cpp
#include <bit>
#include <cstdint>
#include <cstdio>

// Compile-time IP address manipulation
struct IPv4 {
    uint32_t addr;

    static constexpr IPv4 from_octets(uint8_t a, uint8_t b, uint8_t c, uint8_t d) {
        return IPv4{(static_cast<uint32_t>(a) << 24)
                   | (static_cast<uint32_t>(b) << 16)
                   | (static_cast<uint32_t>(c) << 8)
                   | static_cast<uint32_t>(d)};
    }

    constexpr uint8_t a() const { return static_cast<uint8_t>(addr >> 24); }
    constexpr uint8_t b() const { return static_cast<uint8_t>(addr >> 16); }
    constexpr uint8_t c() const { return static_cast<uint8_t>(addr >> 8); }
    constexpr uint8_t d() const { return static_cast<uint8_t>(addr); }

    constexpr bool is_private() const {
        // 10.0.0.0/8
        if (a() == 10) return true;
        // 172.16.0.0/12
        if (a() == 172 && (b() & 0xF0) == 16) return true;
        // 192.168.0.0/16
        if (a() == 192 && b() == 168) return true;
        return false;
    }
};

// Evaluated entirely at compile time
constexpr IPv4 loopback = IPv4::from_octets(127, 0, 0, 1);
static_assert(loopback.a() == 127);
static_assert(loopback.is_private() == false);

constexpr IPv4 priv = IPv4::from_octets(10, 0, 0, 1);
static_assert(priv.is_private() == true);
```

## Common Pitfalls

### 1. Signed Integer Bit Operations

The behavior of bitwise operations on negative signed integers is well-defined in C++20 (two's
complement is mandated), but the results can be surprising due to sign extension during shifts.
Prefer unsigned types for all bit manipulation:

```cpp
int32_t x = -1;
int32_t shifted = x >> 1;  // Arithmetic shift: result is -1 (sign extension)
uint32_t y = static_cast<uint32_t>(x);
uint32_t shifted2 = y >> 1;  // Logical shift: result is 0x7FFFFFFF
```

### 2. Shift Amount Exceeds Bit Width

Shifting by an amount greater than or equal to the bit width of the type is Undefined Behavior.
Always validate shift amounts:

```cpp
uint32_t val = 42;
uint32_t bad = val << 32;   // UB: shift amount equals bit width
uint32_t ok = val << 31;    // OK: shift amount < bit width
```

### 3. `std::bit_cast` Size Mismatch

`std::bit_cast` is a compile-time error if the sizes differ. This is by design — it prevents
accidental truncation or zero-extension. If you need to convert between different-sized types, use
`memcpy` or explicit masking.

### 4. Endianness Assumptions in Serialization

Never assume the host endianness when serializing data. Always convert to a known byte order
(network byte order / big endian) before writing to a wire format, and convert back on read.
`std::byteswap` makes this trivial.
