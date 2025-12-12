---
title: Alignment and Layout
date: 2025-12-12T05:45:45.940Z
tags:
  - cpp
categories:
  - cpp
slug: layout
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In C++, `sizeof(T)` is rarely equal to the sum of the sizes of its members. The compiler inserts invisible bytes known as **Padding** between members to satisfy **Alignment Requirements**.

Understanding alignment is critical for systems programming for three reasons:

1. **Memory Footprint:** Poorly ordered structures can waste memory on padding.
2. **Hardware Faults:** Architectures like ARM, SPARC, and specialized DSPs raises hardware exceptions (SIGBUS) upon misaligned memory access.
3. **Concurrency Performance:** Unintentional sharing of cache lines (False Sharing) can degrade multi-threaded performance.

## 1. Natural Alignment

CPUs access memory in words (typically 4 or 8 bytes). Accessing a 4-byte integer located at address `0x1001` usually requires the CPU to perform two memory fetches (fetching `0x1000` and `0x1004`) and bit-shift the results. To prevent this inefficiency, types have a **Natural Alignment**.

### The Rules of Alignment

1. **Fundamental Types:** A type of size $N$ usually requires an address divisible by $N$.
   - `char` (1 byte): Alignment 1 (Any address).
   - `int32_t` (4 bytes): Alignment 4 (Address ending in 0, 4, 8, C).
   - `double` (8 bytes): Alignment 8.
2. **Structures:** The alignment of a `struct` is equal to the alignment of its strictest member.
3. **Arrays:** An array `T[N]` has the same alignment as `T`.

### Inspection Tools

C++11 provides operators to query these properties at compile time.

```cpp
#include <iostream>

struct Example {
    char a;
    double b;
    int c;
};

int main() {
    std::cout << "Size: " << sizeof(Example) << "\n";
    std::cout << "Alignment: " << alignof(Example) << "\n";
}
```

## 2. Structure Padding and Layout

To enforce alignment, the compiler injects padding bytes.

### Case Study: The Unoptimized Layout

Consider the following structure on a 64-bit system (LP64 model).

```cpp
struct BadLayout {
    char a;      // 1 byte
                 // [ 7 bytes Padding ] -> To align 'b' to 8-byte boundary
    double b;    // 8 bytes
    int c;       // 4 bytes
    char d;      // 1 byte
                 // [ 3 bytes Padding ] -> To align structure size to 8
};
```

- **Calculated Size:** $1 + 7 + 8 + 4 + 1 + 3 = 24$ bytes.
- **Actual Payload:** $1 + 8 + 4 + 1 = 14$ bytes.
- **Wasted Space:** 10 bytes (41%).

### The Tail Padding Rule

The total size of a structure must be a multiple of its alignment. This ensures that if the struct is used in an array, the second element properly aligns.

- `alignof(BadLayout)` is 8 (due to `double b`).
- Therefore, `sizeof(BadLayout)` must be a multiple of 8.

### Layout Optimization

To minimize size, members should be ordered by alignment requirement (typically size), from largest to smallest.

```cpp
struct GoodLayout {
    double b;    // 8 bytes (Offset 0)
    int c;       // 4 bytes (Offset 8)
    char a;      // 1 byte  (Offset 12)
    char d;      // 1 byte  (Offset 13)
                 // [ 2 bytes Padding ] -> To align size to 8
};
```

- **New Size:** $8 + 4 + 1 + 1 + 2 = 16$ bytes.
- **Savings:** 8 bytes per instance.

<div className="godbolt-container">
  <iframe
    width="100%"
    height="800"
    src="https://godbolt.org/e?hideEditorToolbars=true#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAMzwBtMA7AQwFtMQByARg9KtQYEAysib0QXACx8BBAKoBnTAAUAHpwAMvAFYTStJg1DIApACYAQuYukl9ZATwDKjdAGFUtAK4sGIAMykrgAyeAyYAHI%2BAEaYxBIAbKQADqgKhE4MHt6%2BASlpGQKh4VEssfFcSXaYDplCBEzEBNk%2BfoHVtQL1jQTFkTFxibYNTS257SO9Yf1lg5UAlLaoXsTI7Bzm/mHI3lgA1Cb%2Bbk4KBMSYrIfYJhoAgpvbu5gHR8in6FhUVzf3d6fEXgcewsTHQwSYAE9lgQDgB2Kx3PZIvbIBCNPZMQ4WZHIgD0uL2XD20QhBEwPxx6GW0XoxKxOPxewAHMTSZgFBTkWEYaZ/NicUjGZJWWSOYjkaj0eh6QLGUSSWSfiZYQARLFKv5nQEwgDiqAw4KhXhhyoRt0p1Np0RlgoJLIV7M5SO5KJtDIJwodYvNErRxAxbtthJF5PFSMl/ulfIFezlIaVqvVdx%2BLpYTDCEHmcLNOPeIBQ0JebkObgOZjMAFlMCwSBC9obC6gqMDQQ3jSATABWNwMcxmJM%2BpF5gvGoslstmIR4ABe7AnY6Oe3Ss6bEBBYMh0KzJfHfZDHO7vfLA9zBHQ%2BbQo53i77AHkqFQlAQFB3D32T8jh5eTUdd%2BX74%2BmAwk2GIgPO16lk2gFEFQa6tpuxqkBi26/ouYAbIe6EfkOZ4XoWEETgBT57CB0RgXuBFQU%2Bq7rm2BBIdEKHFmhGE9lhfJOkuuEjj%2BzGlneD7ESByDkeWC6QYJQE0fBRr0SiTHjlhmEbBxYZceePHiYRknAc257gahEnQdJG6yUh6AKSxXZsSpZqcV%2B%2BGGRO1kMFWNbEHWdEkc2eoGghBCvj276qYO6l4VeTl9lOs6iWYWnLpgq6%2BaZW5aXuXoucFOaftx35pf%2BOkvplx4haeGl5QRAnQd5xKxVpVFSbByV0QxlmlkpNnYWFmmVQV1XCXVlE6Ul%2BopYh8laR1DDsdlOHlY5fHaf1zZMINTkNTBEDNf5SFMG1exTTN9m5Qtf5mERQE1fpFHrcNTWjS1ewWZNrHTbZGqhecBArAwewaAOypqncHCLLQnCdrwfgcFopCoJwxaWNYS7LKszybDwpABdDIOLAA1iAnZmAAdEyGiwrCTJMlwZgJAAnFItNJGDHCSLwLAgJITJE52FM07TsJk7TZiSMLpBQzDcMcLwL4aJjmgg6QcCwEgmCqDUxokOQlCNMACjKIYmC0EICCoAA7lDGNoCwyR0EwjgCPr4RGyb5vy6QVs2/Q8TAFwhPu6g1t0HEESsOsvAe0HxC3saxtm%2BLvCqzUtzELrnAJ2ryD1PgUO8PwggiGI7BSDIgiKCo6jY6QuhcPohjGNY1j6Hg0QvpAiyoMk9sMC%2BHAALTvIcKqmIjlhmP4vCoAAbnExB4FgreZqQAKCHgbAACr6rQC%2BLAoKNrHo7xhI7hux673C8KbxBMMknA8KD4OQ27kvYBnGv%2BqoTIJL3CTCsAyDIISTsRM4oQARlYSwSFcCEBIGWfwXB5i8CxloeY98WZswJlwImIsuCwn8BoMwQsyY81hGLJ%2BadbAgFlkgnGpB8ZcA0LLZm49SGV0log%2BWKDSDT2IOkZwkggA%3D%3D"
    title="Compiler Explorer"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>


### `[[no_unique_address]]` (C++20)

Empty classes in C++ normally take up 1 byte (to ensure unique addresses). When used as members, this forces padding. The C++20 attribute `[[no_unique_address]]` allows the compiler to overlap the empty class with the padding of other members.

```cpp
struct Empty {}; // Size 1

struct Optimized {
    int i;
    [[no_unique_address]] Empty e; // Size 0 effectively
};
// sizeof(Optimized) == 4
```

## 3. Manual Alignment Control (`alignas`)

Sometimes, natural alignment is insufficient. This typically occurs in two scenarios:

1. **SIMD:** SSE/AVX registers require 16, 32, or 64-byte alignment.
2. **Cache Optimization:** Preventing data form straddling cache lines.

The `alignas` specifier forces strict alignment.

```cpp
// Force 32-byte alignment for AVX2 instructions
struct alignas(32) Vector4 {
    float x, y, z, w;
};
```

**Restriction:** `alignas` can only _increase_ alignment (make it stricter). It cannot decrease it (make it packed).

### Over-Alignment and `new`

Prior to C++17, `new Vector4` might crash because the standard heap allocator (`malloc`) only guarantees alignment up to `max_align_t` (usually 8 or 16 bytes).

C++17 introduced **Aligned New**:

- The compiler automatically generates calls to `operator new(size_t, std::align_val_t)` when allocating over-aligned types.
- The runtime maps this to aligned allocation APIs (e.g., `_aligned_malloc` on Windows, `posix_memalign` on Linux).

## 4. Hardware Architecture: Cache Lines and False Sharing

Modern CPUs interact with memory in **Cache Lines** (typically 64 bytes). The CPU cannot load a single byte; it loads the entire 64-byte line containing that byte.

### False Sharing

This architecture creates a concurrency hazard. If two independent variables reside on the same cache line, and two threads modify them independently, the cores will fight over ownership of the cache line. This "Ping-Pong" effect stalls the cores.

**Scenario:**

```cpp
struct SharedState {
    std::atomic<int> core1_counter; // Thread A writes this
    std::atomic<int> core2_counter; // Thread B writes this
};
```

Because these two integers likely sit next to each other, they share a cache line.

### Destructive Interference Size (C++17)

To prevent this, we must force the variables onto separate cache lines using `std::hardware_destructive_interference_size`.

```cpp
#include <new>
#include <atomic>

struct SharedState {
    alignas(std::hardware_destructive_interference_size) std::atomic<int> core1_counter;
    alignas(std::hardware_destructive_interference_size) std::atomic<int> core2_counter;
};
```

This ensures the struct adds enough padding between members so that they never occupy the same L1 cache line, regardless of the target CPU architecture.

## 5. Structure Packing (Breaking Alignment)

In network programming or binary file parsing, formats often ignore alignment rules to save bandwidth. They are "Packed."

Standard C++ does not provide a mechanism to pack structures, as it generates code that may crash on non-x86 architectures. However, compiler extensions are universally supported.

<Tabs>
  <TabItem value="gcc_clang" label="GCC / Clang" default>

```cpp
struct __attribute__((packed)) NetworkHeader {
    uint8_t version; // Offset 0
    uint32_t id;     // Offset 1 (Misaligned!)
};
```

  </TabItem>
  <TabItem value="msvc" label="MSVC">

```cpp
#pragma pack(push, 1)
struct NetworkHeader {
    uint8_t version;
    uint32_t id;
};
#pragma pack(pop)
```

  </TabItem>
</Tabs>

### The Cost of Packing

Accessing `id` in the example above generates different assembly instructions.

- **Aligned:** A single `MOV` instruction.
- **Packed (x86):** A `MOV` instruction (hardware handles the split load, but with a latency penalty).
- **Packed (ARMv7/RISC-V):** Multiple single-byte loads followed by shifts and ORs, or a hardware trap handled by the kernel (extremely slow).

**Best Practice:** Do not pass packed structures around your application. Deserialize them immediately into aligned native structures at the I/O boundary.
