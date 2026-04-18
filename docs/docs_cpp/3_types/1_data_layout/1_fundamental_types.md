---
title: Fundamental Types
date: 2025-12-12T04:26:41.621Z
tags:
  - cpp
categories:
  - cpp
slug: fundamental-types
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

In managed languages (Java, C#), types are abstract constraints enforced by a virtual machine. In
C++, types are direct mappings to hardware capabilities. A `uint64_t` translates directly to a
64-bit register; a `float` maps directly to an FPU instruction.

This section analyzes how C++ types map to physical memory, the fragmentation caused by operating
system data models, and the standard mechanisms for handling byte ordering (Endianness).

## The Data Models (LP64 vs. LLP64)

The C++ Standard does not define exact bit-widths for types like `int` or `long`. It only defines
**relative minimum ranges**.

- `short`: At least 16 bits.
- `int`: At least 16 bits (usually 32).
- `long`: At least 32 bits.
- `long long`: At least 64 bits.

Because of this flexibility, operating systems evolved different **Data Models**. This creates the
primary portability hazard in C++ systems programming.

### Data Model Comparison

| Type        | **ILP32** (32-bit Systems) | **LLP64** (Windows x64) | **LP64** (Linux/macOS x64) |
| :---------- | :------------------------- | :---------------------- | :------------------------- |
| `short`     | 16                         | 16                      | 16                         |
| `int`       | 32                         | 32                      | 32                         |
| `long`      | **32**                     | **32**                  | **64**                     |
| `long long` | 64                         | 64                      | 64                         |
| `void*`     | 32                         | 64                      | 64                         |
| `size_t`    | 32                         | 64                      | 64                         |

### The `long` Trap

The most dangerous divergence is `long`.

- On **Linux**, `long` is 64-bit.
- On **Windows**, `long` is 32-bit.
- **Consequence:** Never use `long` for pointer arithmetic or file offsets. It will truncate
  pointers on Windows and overflow file sizes > 2GB.

### Architectural Solution: Fixed-Width Integers (`<cstdint>`)

For binary layouts, network protocols, or file formats, **never** use fundamental types (`int`,
`short`, `long`). Use fixed-width aliases.

- `int32_t`, `uint32_t`: Exact 32-bit width (Two's complement).
- `int64_t`, `uint64_t`: Exact 64-bit width.
- `intptr_t`: An integer large enough to hold a pointer (matches `void*` width).

## Special Systems Types

C++ defines specific types for memory interaction that communicate intent to both the compiler and
the programmer.

### 1. `std::byte` (C++17)

Historically, `char` or `unsigned char` was used to access raw memory. This was semantically
ambiguous (is it text or data?).

- **Definition:** `enum class byte : unsigned char {};`
- **Behavior:** It is not an arithmetic type. You cannot do `byte + 1`. You can only perform bitwise
  operations (`|`, `&`, `^`, `<<`, `>>`).
- **Usage:** Strictly for raw memory buffers and binary I/O.

### 2. `size_t`

- **Definition:** Unsigned integer capable of holding the size of the largest possible object.
- **Hardware Mapping:** Matches the native bus width (32-bit or 64-bit).
- **Usage:** Array indexing, loop counters, and memory sizes.

### 3. `ptrdiff_t`

- **Definition:** Signed integer result of subtracting two pointers pointing to the same array.
- **Hardware Mapping:** Matches the pointer width.
- **Usage:** Pointer arithmetic and iterator distances.

### 4. `void`

- **Usage:** Incomplete type. `void*` represents a raw memory address with no type info.
- **Arithmetic:** `void* + 1` is illegal in ISO C++ (though GCC allows it as an extension treating
  it like `char*`). **Always disable this extension** (`-Wpointer-arith`) to ensure portability.

## Hardware Representation

### Two's Complement (C++20)

Prior to C++20, the standard allowed hardware to use Sign-Magnitude or Ones' Complement. **C++20
mandates Two's Complement representation for signed integers.**

This standardizes the behavior of bitwise operations on signed integers.

- `-1` is represented as all ones (`0xFF...FF`).
- Bit shifting signed negative numbers is now well-defined arithmetic shifting.

### Floating Point (IEEE 754)

While C++ does not strictly mandate IEEE 754, practically all supported hardware uses it.

- `float`: IEEE 754 binary32 (1 sign, 8 exponent, 23 mantissa).
- `double`: IEEE 754 binary64 (1 sign, 11 exponent, 52 mantissa).
- **C++23 Extended Types:** `<stdfloat>` introduces `std::float16_t`, `std::float128_t`, and
  `std::bfloat16_t` (Brain Floating Point), enabling interoperability with AI accelerators and GPU
  storage formats.

## Endianness

Endianness describes the order in which bytes of a multi-byte word are stored in memory.

1. **Little Endian (LE):** Least Significant Byte (LSB) at the lowest address.
   - _Hardware:_ x86, x86_64, modern ARM (Android/iOS/macOS).
   - _Representation of `0x12345678`:_ `78 56 34 12`.
2. **Big Endian (BE):** Most Significant Byte (MSB) at the lowest address.
   - _Hardware:_ Mainframes (z/Architecture), Legacy PowerPC, Network Protocols (TCP/IP).
   - _Representation of `0x12345678`:_ `12 34 56 78`.

### Detecting Endianness (C++20)

Do not use legacy pointer casting tricks (`int x = 1; if (*(char*)&x)...`). These are technically
Type Punning (Module 8.3) and can fail at compile time.

C++20 introduces `std::endian` in `<bit>`.

```cpp
#include <bit>

void check_endianness() {
    if constexpr (std::endian::native == std::endian::little) {
        // Build path for Intel/ARM
    } else if constexpr (std::endian::native == std::endian::big) {
        // Build path for Network/Mainframe
    } else {
        // Mixed endian (exotic hardware like PDP-11)
    }
}
```

To allow this godbolt iframe to showcase the endianness between x86_64 gcc and powerpc gcc, right
click on the print and select `reveal linked code`, this will direct you to the correct location in
asm.

<div className="godbolt-container">
  <iframe
    width="100%"
    height="800"
    src="https://godbolt.org/e?hideEditorToolbars=true#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAMzwBtMA7AQwFtMQByARg9KtQYEAysib0QXACx8BBAKoBnTAAUAHpwAMvAFYTStJg1DIApACYAQuYukl9ZATwDKjdAGFUtAK4sGIMwDspK4AMngMmAByPgBGmMQSAMykAA6oCoRODB7evv5BaRmOAmER0SxxCVzJdpgOWUIETMQEOT5%2BgbaY9sUMjc0EpVGx8Um2TS1teZ0KE4PhwxWj1QCUtqhexMjsHOaJ4cjeWADUJoluKcThBGfYJhoAgnsHR5in5zGEt/dPj9fHLCY4QgK1OASsj2OUOOeCoxzQDFmmFUl2OEFm6BAIFceEMWOYjgAbm8zgARMnHDFYnF4kC0QgEeigkzgn7Q9nHAD0nOOFi8dHQxxSTAICGO/GIxwAkoJupyHgAlACybI5UKpIEu1wg5jM9IIjMwupWZwhD3ZLNJx26ShhcIRSJRkvRBEx2IY%2BFpBLwxPe5MSVo1NL8IE%2BwGZrMhaq5PL5AqFIrFEuOkUwBAA7iQANacpVAhhUYisI1RtUarWCHVmMxh42m1VQy3W2i2llm6Mx45KvCqTCC4No5GoRzIY4IZrodPNN70rNvZSk5QAWi4XBNpY55auld1LB7dcS7ehlobx2Iac2DGOGnrj0tHDWtE4AFZeH4OFpSKhOG5rNZKRsWwkmYiQ8KQBCaA%2BaxZiAz5mAAdAAHBoAQBIhiFcGYABsACcUg4Vh%2BicJIvAsCAiQIThz5cAEz4BDhARmFwOFUVwpDvp%2B34cLwCggBo4GQWscCwDAiAoKgLApHQ8TkJQaCSdJCTAFwcF8HQBDxLxEAxJBpCfMwxAAJ6cGB%2BnNIZADyMTaHUEHcLw8lsIIFkMLQxkfrwWAxF4wBuGILYmZ5mCAkY4geaQ%2BDnvUxK8eFyJ1F4GmBeQspPuF9IxEWRkeFgukEFcZHhcSxAxOkmCksFhjAPSRiCXwBjAAoABqeCYOmFkpIwyX8IIIhiOwUgyIIigqOo4W6GxBi1aYljWPoeAxLxkBrKgKS9LFS4YmSM1WJYIG8KgxVXFgS0gl0PRZC4HpTH4KnBB6QzlJUICSFhWFsYUmQCDdEjPqk6RfQwj0jAkr3vedtkNHMP13bU9QCP0LTA0soNvWxswDDDf0Y0jCxPaMYNrusmzbBIj4vm%2BulcccqiIVhS5YZIxzAMgo4qfBZhorghAkKcIFrrwdlaCsawIJgTBYAkZ0wc%2B/FpSRpBkbL7FU5wPF8QJHlCaJEBIPJUn0GQFAQPrimaikyDKXB/E0LQGnEFpOnhWZRnJS7lnWbZyWOYwBAuW5uleT5fm0AF9kRZVoU7J%2BkWQzFunxcgiU7GB1zdLpGVZYZOXR4LBW6cVpVKBVIXVeEoBa/VTCNS1bUdV14c9cIojiINTcjWoum6GY%2BhVSgf6WPNi3wCta1ZBtW0Bjt1j7V%2BR14CdI8Q/DfgQK4MOEaEeMgy9b3JJ9vQb/9RRZMjz1gzU3SQwj0OeO0EiEXDvSI/MZQ7xf4yY3feRcI/cxnwTPeawFCAVJkTNKr4VbhWpmkdM8Rmas2OOzBCGgub4CIJKPYAtNbC1FuLSWlBoKwTlsRSm0C1a2A1kLKCREOBmFIiALCAR4IaEkIhMwkgzAaECMhVhiEoGcQodQkWpAYJcA0CQjgiQyGCO4jgmhxUMjOEkEAA%3D%3D%3D"
    title="Compiler Explorer"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

### Handling Endianness (C++23)

When parsing binary formats (file headers) or network packets, you must enforce a specific
endianness regardless of the host CPU.

**Legacy:** Manual bit-shifting (`(b0 << 24) | (b1 << 16)...`). **Modern C++23:** Use
`std::byteswap`.

```cpp
#include <bit>
#include <cstdint>

uint32_t parse_network_packet(uint32_t network_val) {
    if constexpr (std::endian::native == std::endian::little) {
        // Convert Big Endian (Network) to Little Endian (Host)
        return std::byteswap(network_val);
    } else {
        // Host is already Big Endian
        return network_val;
    }
}
```

`std::byteswap` compiles down to a single CPU instruction:

- **x86_64:** `BSWAP`
- **ARM64:** `REV`

## Integer Arithmetic Safety

Mapping mathematical integers to fixed-width hardware registers introduces overflow risks.

### Signed Integer Overflow

**Behavior:** **Undefined Behavior (UB).** The compiler assumes signed overflow _never happens_.
This allows optimizations like `if (x + 1 > x)` $\to$ `true`.

- If `x` is `INT_MAX`, `x + 1` overflows. If the hardware wraps, the check fails. If the compiler
  optimized the check away, security vulnerabilities occur.

### Unsigned Integer Overflow

**Behavior:** **Defined (Modulo Arithmetic).** Unsigned integers wrap around (`UINT_MAX + 1 == 0`).
This makes `unsigned` useful for bitmasks and modular arithmetic, but dangerous for loops like
`for (unsigned i = 5; i >= 0; --i)`.

### Architectural Mitigation

For safe arithmetic, use C++20 standard functions in `<utility>` which detect overflow without UB.

```cpp
#include <utility>
#include <limits>

int safe_add(int a, int b) {
    int result;
    if (std::cmp_greater(a, std::numeric_limits<int>::max() - b)) {
        // Handle Error
    }
    return a + b;
}
```

---

## Floating-Point Representation in Depth

### IEEE 754 Binary Layout

An IEEE 754 floating-point number encodes a signed value using three fields:

```
[sign (1 bit)] [exponent (e bits)] [mantissa/fraction (m bits)]
```

The encoded value is:

$$\mathrm{value} = (-1)^{\mathrm{sign}} \times 2^{(\mathrm{exponent} - \mathrm{bias})} \times (1.\mathrm{mantissa})$$

The implicit leading `1.` (the "hidden bit") is the key optimization of IEEE 754: since the mantissa
is normalized so the leading digit is always 1, it need not be stored.

| Type     | Total Bits | Sign | Exponent | Mantissa | Bias | Exponent Range |
| :------- | :--------- | :--- | :------- | :------- | :--- | :------------- |
| `float`  | 32         | 1    | 8        | 23       | 127  | -126 to +127   |
| `double` | 64         | 1    | 11       | 52       | 1023 | -1022 to +1023 |

### Special Values

IEEE 754 reserves specific exponent values for special cases:

| Exponent Field | Mantissa Field | Meaning                         |
| :------------- | :------------- | :------------------------------ |
| All zeros      | All zeros      | Signed zero (±0)                |
| All zeros      | Non-zero       | Denormalized (subnormal) number |
| All ones       | All zeros      | Infinity (±inf)                 |
| All ones       | Non-zero       | NaN (Not a Number)              |

**Denormalized numbers** allow gradual underflow: as values approach zero, precision decreases
linearly rather than dropping abruptly to zero. Without denormals, the gap between the smallest
normalized number and zero would be huge.

```cpp
#include <iostream>
#include <limits>
#include <cmath>

int main() {
    float smallest_normal = std::numeric_limits<float>::min();    // ~1.175e-38
    float smallest_denorm = std::numeric_limits<float>::denorm_min(); // ~1.401e-45

    std::cout << "Smallest normal:  " << smallest_normal << "\n";
    std::cout << "Smallest denorm:  " << smallest_denorm << "\n";
    std::cout << "Has denormals:    " << std::numeric_limits<float>::has_denorm << "\n";

    // Denormals can cause severe performance penalties on some architectures
    // (up to 100x slower than normal FP ops on some x86 CPUs)
    // Consider enabling FTZ (Flush-To-Zero) for performance-critical code
}
```

### NaN Propagation

NaN is the only floating-point value that does not compare equal to itself:

```cpp
#include <cmath>
#include <iostream>

int main() {
    double nan_val = std::nan("");
    std::cout << "nan == nan: " << (nan_val == nan_val) << "\n";  // 0 (false)
    std::cout << "nan != nan: " << (nan_val != nan_val) << "\n";  // 1 (true)

    // This is the standard way to test for NaN:
    std::cout << "isnan: " << std::isnan(nan_val) << "\n";       // 1 (true)

    // NaN propagates through arithmetic:
    double result = nan_val + 1.0;  // result is NaN
    std::cout << "nan + 1.0 = " << result << "\n";  // nan
}
```

### `-ffast-math` and Its Dangers

Compilers offer a `-ffast-math` flag (GCC/Clang) that enables aggressive floating-point
optimizations. This flag relaxes IEEE 754 compliance:

| Optimization                          | Effect                                                     |
| :------------------------------------ | :--------------------------------------------------------- |
| Associative FP (`-fassociative-math`) | Reorders `a + (b + c)` to `(a + b) + c` (changes rounding) |
| Reciprocal math                       | Replaces `x / y` with `x * (1/y)`                          |
| Finite math only                      | Assumes no NaN/Inf (removes NaN checks)                    |
| No signed zeros                       | Assumes `+0 == -0`                                         |

```bash
# WARNING: -ffast-math can change numerical results and break NaN/Inf handling
clang++ -O3 -ffast-math app.cpp -o app
```

**Never use `-ffast-math` for:** scientific computing, financial calculations, any code that relies
on NaN propagation for error detection, or code that compares floating-point values for equality.

---

## Alignment and Padding

### Natural Alignment

Every fundamental type has an **alignment requirement**: the address at which it must be stored must
be a multiple of a specific power of two. On x86_64:

| Type        | Size (bytes) | Alignment (bytes) |
| :---------- | :----------- | :---------------- |
| `char`      | 1            | 1                 |
| `short`     | 2            | 2                 |
| `int`       | 4            | 4                 |
| `long`      | 8 (LP64)     | 8                 |
| `long long` | 8            | 8                 |
| `float`     | 4            | 4                 |
| `double`    | 8            | 8                 |
| `pointer`   | 8            | 8                 |

Misaligned access on x86 works but is slower (splits into multiple memory transactions). On ARM and
RISC-V, misaligned access can cause a hardware exception (SIGBUS).

### Struct Padding

The compiler inserts padding bytes between struct members to satisfy alignment requirements:

```cpp
#include <cstddef>
#include <iostream>

struct Natural {
    char a;     // offset 0, size 1
                 // 3 bytes padding
    int b;      // offset 4, size 4 (aligned to 4)
    short c;    // offset 8, size 2
                 // 2 bytes padding
    double d;   // offset 16, size 8 (aligned to 8)
};  // Total size: 24 bytes

struct Packed {
    char a;     // offset 0
    int b;      // offset 4
    short c;    // offset 8
    double d;   // offset 16
};

int main() {
    std::cout << "sizeof(Natural) = " << sizeof(Natural) << "\n";  // 24
    std::cout << "sizeof(Packed) = " << sizeof(Packed) << "\n";    // 24
    // Both have the same layout because padding is unavoidable for alignment

    // Offset demonstration
    std::cout << "offsetof a: " << offsetof(Natural, a) << "\n";  // 0
    std::cout << "offsetof b: " << offsetof(Natural, b) << "\n";  // 4
    std::cout << "offsetof c: " << offsetof(Natural, c) << "\n";  // 8
    std::cout << "offsetof d: " << offsetof(Natural, d) << "\n";  // 16
}
```

### Controlling Alignment: `alignas` and `alignof`

C++11 introduced `alignas` to specify custom alignment and `alignof` to query it:

```cpp
#include <iostream>

struct alignas(64) CacheAligned {
    int data[16];
};

struct alignas(1) PackedStruct {
    double d;  // Potentially misaligned!
};

int main() {
    std::cout << "alignof(CacheAligned) = " << alignof(CacheAligned) << "\n";  // 64
    std::cout << "sizeof(CacheAligned) = " << sizeof(CacheAligned) << "\n";    // 64 (padded to alignment)

    // 64-byte alignment is useful for SIMD (AVX-512 vectors are 512 bits = 64 bytes)
    // and for avoiding false sharing in multi-threaded code

    alignas(16) int arr[4];  // Aligned to 16-byte boundary
    // Useful for SSE loads/stores (128-bit vectors require 16-byte alignment)
}
```

### `#pragma pack` and `__attribute__((packed))`

To eliminate padding (e.g., for network protocols or file formats), use packing:

```cpp
#pragma pack(push, 1)  // Set alignment to 1 byte
struct NetworkPacket {
    uint8_t  type;
    uint32_t length;
    uint16_t checksum;
};
#pragma pack(pop)

static_assert(sizeof(NetworkPacket) == 7);  // No padding: 1 + 4 + 2 = 7
```

```cpp
// GCC/Clang alternative:
struct __attribute__((packed)) NetworkPacket {
    uint8_t  type;
    uint32_t length;
    uint16_t checksum;
};
```

**Warning:** Accessing a misaligned member on strict-alignment architectures (ARM, RISC-V) causes
undefined behavior or a hardware trap. Use `std::memcpy` to safely extract packed data:

```cpp
#include <cstring>
#include <cstdint>

struct __attribute__((packed)) PackedU32 {
    uint8_t bytes[4];
};

uint32_t safe_read(const PackedU32& p) {
    uint32_t result;
    std::memcpy(&result, p.bytes, sizeof(result));  // Safe: compiler generates correct loads
    return result;
}
```

---

## C++23 Extended Floating-Point Types

The `<stdfloat>` header (C++23) introduces fixed-width floating-point types that map to hardware or
software implementations:

```cpp
#include <stdfloat>
#include <iostream>

int main() {
    std::float16_t half = 3.14f16;     // IEEE 754 binary16 (half precision)
    std::bfloat16_t bfloat = 3.14bf16; // Brain Float 16 (8 exponent, 7 mantissa)
    std::float32_t single = 3.14f32;   // IEEE 754 binary32
    std::float64_t dbl = 3.14f64;      // IEEE 754 binary64
    std::float128_t quad = 3.14f128;   // IEEE 754 binary128 (software on most platforms)
}
```

**Brain Float 16 (bfloat16)** is particularly important for machine learning inference. It has the
same exponent range as `float32` (8 bits) but only 7 bits of mantissa, providing 3 decimal digits of
precision. The reduced mantissa halves memory bandwidth compared to `float32` while maintaining the
same dynamic range, preventing overflow/underflow in deep learning workloads.

---

## Boolean Type and Integer Promotion

### `bool` and Integer Conversion

In C++, `bool` is a fundamental type that can hold values `true` (1) or `false` (0). When a `bool`
participates in arithmetic, it is promoted to `int`:

```cpp
#include <iostream>

int main() {
    bool flag = true;
    int result = flag + 1;  // result == 2 (bool promoted to int(1))
    std::cout << result << "\n";

    // Dangerous: any non-zero value converts to true
    int x = 42;
    bool b = x;  // b == true
    std::cout << std::boolalpha << b << "\n";  // true

    // Integral to bool: 0 → false, anything else → true
    std::cout << std::boolalpha << static_cast<bool>(0) << "\n";     // false
    std::cout << std::boolalpha << static_cast<bool>(-1) << "\n";    // true
    std::cout << std::boolalpha << static_cast<bool>(INT_MAX) << "\n"; // true
}
```

### Integer Promotion Rules

The C++ standard defines specific **integral promotion** rules [N4950 §7.3.7]:

- `bool` → `int`
- `char`, `signed char`, `unsigned char`, `char8_t` → `int` (if `int` can represent all values)
- `short` → `int` (if `int` can represent all values)
- `wchar_t`, `char16_t`, `char32_t`, `char8_t` → the first of `int`, `unsigned int`, `long`,
  `unsigned long` that can represent all values

These promotions occur before arithmetic operations and can cause surprising results:

```cpp
#include <iostream>
#include <cstdint>

int main() {
    uint16_t a = 65535;
    uint16_t b = 1;
    auto c = a + b;  // Both promoted to int (65535 + 1 = 65536)
    // c has type int, value 65536 — no overflow!
    std::cout << c << "\n";  // 65536

    // But if you store back to uint16_t:
    uint16_t d = a + b;  // 65536 truncated to uint16_t → 0
    std::cout << d << "\n";  // 0
}
```

---

## Common Pitfalls

- **Using `int` or `long` for binary protocol fields.** The size of `int` and `long` varies across
  platforms. Always use `<cstdint>` fixed-width types (`uint32_t`, `int64_t`, etc.) for network
  protocols, file formats, and shared memory structures.
- **Signed integer overflow UB.** The compiler assumes signed overflow never happens and optimizes
  based on this assumption. Use `-fsanitize=signed-integer-overflow` during testing to catch these
  at runtime. For production code, use `std::cmp_less`, `std::cmp_greater`, and `std::in_range<T>`
  from `<utility>` (C++20).
- **Comparing floating-point values with `==`.** Due to rounding errors, two floating-point
  computations that should produce the same result may differ by tiny amounts. Use an epsilon
  comparison or `std::nextafter` for approximate equality tests. However, `==` is valid for exact
  comparisons (e.g., checking against zero after a known computation).
- **Assuming `sizeof(long) == sizeof(void*)`.** This is true on LP64 (Linux/macOS) but false on
  LLP64 (Windows), where `long` is 32 bits but `void*` is 64 bits. Use `intptr_t` or `uintptr_t` for
  pointer-sized integers.
- **Packed struct member access on ARM/RISC-V.** `__attribute__((packed))` can generate misaligned
  loads/stores. On x86, this is merely slow; on ARM, it can crash. Use `std::memcpy` to safely
  extract values from packed structs.
- **Denormal performance.** Denormalized floating-point numbers can cause 10-100x slowdowns on x86
  CPUs. In performance-critical code (audio processing, game physics), consider enabling
  Flush-To-Zero (`_MM_DENORMALS_ZERO_ON`) via compiler flags (`-ffast-math` or `-fno-denormals`) if
  exact gradual underflow is not required.
