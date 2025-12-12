---
title: Fundamental Types
date: 2025-12-12T04:26:41.621Z
tags:
  - cpp
categories:
  - cpp
slug: fundamental-types
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In managed languages (Java, C#), types are abstract constraints enforced by a virtual machine. In C++, types are direct mappings to hardware capabilities. A `uint64_t` translates directly to a 64-bit register; a `float` maps directly to an FPU instruction.

This section analyzes how C++ types map to physical memory, the fragmentation caused by operating system data models, and the standard mechanisms for handling byte ordering (Endianness).

## The Data Models (LP64 vs. LLP64)

The C++ Standard does not define exact bit-widths for types like `int` or `long`. It only defines **relative minimum ranges**.

- `short`: At least 16 bits.
- `int`: At least 16 bits (usually 32).
- `long`: At least 32 bits.
- `long long`: At least 64 bits.

Because of this flexibility, operating systems evolved different **Data Models**. This creates the primary portability hazard in C++ systems programming.

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
- **Consequence:** Never use `long` for pointer arithmetic or file offsets. It will truncate pointers on Windows and overflow file sizes > 2GB.

### Architectural Solution: Fixed-Width Integers (`<cstdint>`)

For binary layouts, network protocols, or file formats, **never** use fundamental types (`int`, `short`, `long`). Use fixed-width aliases.

- `int32_t`, `uint32_t`: Exact 32-bit width (Two's complement).
- `int64_t`, `uint64_t`: Exact 64-bit width.
- `intptr_t`: An integer large enough to hold a pointer (matches `void*` width).

## Special Systems Types

C++ defines specific types for memory interaction that communicate intent to both the compiler and the programmer.

### 1. `std::byte` (C++17)

Historically, `char` or `unsigned char` was used to access raw memory. This was semantically ambiguous (is it text or data?).

- **Definition:** `enum class byte : unsigned char {};`
- **Behavior:** It is not an arithmetic type. You cannot do `byte + 1`. You can only perform bitwise operations (`|`, `&`, `^`, `<<`, `>>`).
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
- **Arithmetic:** `void* + 1` is illegal in ISO C++ (though GCC allows it as an extension treating it like `char*`). **Always disable this extension** (`-Wpointer-arith`) to ensure portability.

## Hardware Representation

### Two's Complement (C++20)

Prior to C++20, the standard allowed hardware to use Sign-Magnitude or Ones' Complement. **C++20 mandates Two's Complement representation for signed integers.**

This standardizes the behavior of bitwise operations on signed integers.

- `-1` is represented as all ones (`0xFF...FF`).
- Bit shifting signed negative numbers is now well-defined arithmetic shifting.

### Floating Point (IEEE 754)

While C++ does not strictly mandate IEEE 754, practically all supported hardware uses it.

- `float`: IEEE 754 binary32 (1 sign, 8 exponent, 23 mantissa).
- `double`: IEEE 754 binary64 (1 sign, 11 exponent, 52 mantissa).
- **C++23 Extended Types:** `<stdfloat>` introduces `std::float16_t`, `std::float128_t`, and `std::bfloat16_t` (Brain Floating Point), enabling interoperability with AI accelerators and GPU storage formats.

## Endianness

Endianness describes the order in which bytes of a multi-byte word are stored in memory.

1. **Little Endian (LE):** Least Significant Byte (LSB) at the lowest address.
   - _Hardware:_ x86, x86_64, modern ARM (Android/iOS/macOS).
   - _Representation of `0x12345678`:_ `78 56 34 12`.
2. **Big Endian (BE):** Most Significant Byte (MSB) at the lowest address.
   - _Hardware:_ Mainframes (z/Architecture), Legacy PowerPC, Network Protocols (TCP/IP).
   - _Representation of `0x12345678`:_ `12 34 56 78`.

### Detecting Endianness (C++20)

Do not use legacy pointer casting tricks (`int x = 1; if (*(char*)&x)...`). These are technically Type Punning (Module 8.3) and can fail at compile time.

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

To allow this godbolt iframe to showcase the endianness between x86_64 gcc and powerpc gcc, right click on the print and select `reveal linked code`, this will direct you to the correct location in asm.

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

When parsing binary formats (file headers) or network packets, you must enforce a specific endianness regardless of the host CPU.

**Legacy:** Manual bit-shifting (`(b0 << 24) | (b1 << 16)...`).
**Modern C++23:** Use `std::byteswap`.

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

**Behavior:** **Undefined Behavior (UB).**
The compiler assumes signed overflow _never happens_. This allows optimizations like `if (x + 1 > x)` $\to$ `true`.

- If `x` is `INT_MAX`, `x + 1` overflows. If the hardware wraps, the check fails. If the compiler optimized the check away, security vulnerabilities occur.

### Unsigned Integer Overflow

**Behavior:** **Defined (Modulo Arithmetic).**
Unsigned integers wrap around (`UINT_MAX + 1 == 0`). This makes `unsigned` useful for bitmasks and modular arithmetic, but dangerous for loops like `for (unsigned i = 5; i >= 0; --i)`.

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
