---
title: Contiguous Memory Views (std::span)
description:
  "C++: Contiguous Memory Views (std::span) — Contiguous Memory Views (`std::span`); 1. Definition and Layout; 2. Relationship to `std::string_view`."
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
  - ALevel
categories:
  - Cpp
slug: contiguous-memory-views-std-span
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Contiguous Memory Views (`std::span`)

`std::span<T>` (C++20, `<span>`) is a non-owning view over a contiguous sequence of objects. It is
the type-safe replacement for the raw `pointer + size` interface pattern that pervades C and legacy
C++ APIs.

If `std::string_view` is the non-owning view for character sequences, `std::span` is the
**generalization** for any element type.

## 1. Definition and Layout

```cpp
template<class T, size_t Extent = dynamic_extent>
class span {
    T*      _data;   // Pointer to first element
    size_t  _size;   // Number of elements
};
```

On 64-bit systems:

- **Dynamic extent** (`std::span<T>`): 16 bytes (pointer + `size_t`).
- **Static extent** (`std::span<T, N>`): 8 bytes (pointer only; size is a compile-time constant).

`std::span` is trivially copyable and has the same pass-by-value cost as two registers.

## 2. Relationship to `std::string_view`

| Property             | `std::span<const char>`     | `std::string_view`                        |
| :------------------- | :-------------------------- | :---------------------------------------- |
| Null-termination     | Not assumed                 | Partially (implementation detail)         |
| Character traits     | No                          | Yes (`char_traits`)                       |
| Stream output        | No `operator<<`             | Yes                                       |
| Hash                 | `std::hash` not specialized | `std::hash<std::string_view>` specialized |
| General element type | Any `T`                     | `char`-like only                          |

`std::string_view` is a domain-specific specialization. Prefer `std::string_view` for text. Prefer
`std::span` for everything else.

## 3. Extent: Static vs Dynamic

The `Extent` template parameter determines whether the size is known at compile time.

### Dynamic Extent (Default)

```cpp
void process(std::span<int> data) {
    // data.size() is a runtime value
    for (auto& x : data) {
        x *= 2;
    }
}

int arr[] = {1, 2, 3, 4, 5};
process(arr); // deduces std::span<int>, size = 5
```

### Static Extent

When the size is known at compile time, the `Extent` is encoded in the type:

```cpp
void process_exact4(std::span<int, 4> data) {
    // data.size() is a constexpr equal to 4
    // If caller passes wrong size, compile error
}

int arr4[4] = {1, 2, 3, 4};
process_exact4(arr4); // OK

int arr5[5] = {1, 2, 3, 4, 5};
process_exact4(arr5); // ERROR: size mismatch, will not compile
```

### `dynamic_extent`

`std::dynamic_extent` is a constant of type `size_t` with value
`std::numeric_limits<size_t>::max()`. It is the default value of the `Extent` parameter.

```cpp
static_assert(std::span<int>::extent == std::dynamic_extent);
static_assert(std::span<int, 8>::extent == 8);
```

## 4. Construction from Any Contiguous Source

`std::span` implicitly constructs from any contiguous sequence that provides `data()` and `size()`:

```cpp
#include <span>
#include <vector>
#include <array>

void analyze(std::span<const double> samples) {
    // Accepts any contiguous double sequence, read-only
}

void caller() {
    double c_arr[] = {1.0, 2.0, 3.0};
    std::vector<double> vec = {4.0, 5.0, 6.0};
    std::array<double, 3> arr = {7.0, 8.0, 9.0};

    analyze(c_arr);  // C array -> span (no decay!)
    analyze(vec);    // vector -> span
    analyze(arr);    // std::array -> span
}
```

**Critical advantage over raw pointers:** Array decay is eliminated. The size information is
preserved through the span interface.

## 5. Subviews and Splitting

`std::span` provides `first()`, `last()`, and `subspan()` for creating views into subsets of the
data. These operations return new `span` objects and are **O(1)** — no data is copied.

```cpp
void parse_header(std::span<const uint8_t> packet) {
    if (packet.size() < 4) return;

    auto header  = packet.first(4);
    auto payload = packet.subspan(4);

    // header.size() == 4
    // payload.size() == packet.size() - 4
}
```

### Splitting at a Boundary

```cpp
std::span<const char> split_at(std::span<const char> text, char delimiter) {
    auto pos = text.find(delimiter);
    if (pos == std::span<const char>::npos) return text;
    return text.first(pos);
}
```

### Converting to Static Extent

If you know at compile time that a subview has a specific size, you can convert to a static-extent
span:

```cpp
std::span<int> dynamic_view = /* ... */;

if (dynamic_view.size() >= 4) {
    std::span<int, 4> first4 = dynamic_view.first<4>();
    // first4 has static extent, enabling further compile-time checks
}
```

## 6. Byte-Level Access

`std::as_bytes` and `std::as_writable_bytes` provide a `std::span<const std::byte>` (or
`std::span<std::byte>`) view over the object representation of the elements.

```cpp
#include <span>

struct PacketHeader {
    uint32_t magic;
    uint16_t type;
    uint16_t flags;
};

void serialize(const PacketHeader& header, std::span<std::byte> out) {
    auto bytes = std::as_bytes(std::span{&header, 1});
    if (out.size() >= bytes.size()) {
        std::copy(bytes.begin(), bytes.end(), out.begin());
    }
}
```

### Use Case: Network I/O

```cpp
void send_packet(int fd, std::span<const std::byte> data) {
    write(fd, data.data(), data.size());
}

PacketHeader hdr{.magic = 0xDEADBEEF, .type = 1, .flags = 0};
send_packet(fd, std::as_bytes(std::span{&hdr, 1}));
```

### Use Case: Checksum Computation

```cpp
uint32_t crc32(std::span<const std::byte> data) {
    uint32_t crc = 0xFFFFFFFF;
    for (auto byte : data) {
        crc ^= static_cast<uint32_t>(byte);
        for (int i = 0; i < 8; ++i) {
            crc = (crc >> 1) ^ (0xEDB88320 & (-(crc & 1)));
        }
    }
    return ~crc;
}
```

## 7. `span` vs C Arrays vs `std::array`

### The Array Decay Problem (Revisited)

When a C array is passed to a function taking `T*`, the size is lost. `std::span` preserves it:

```cpp
// Legacy: size lost
void legacy_process(int* data, size_t size);

// Modern: size preserved
void modern_process(std::span<int> data);

int buffer[128];
legacy_process(buffer, 128); // Size must be passed separately
modern_process(buffer);      // Size automatically captured (128)
```

### Type-Safe Decay Replacement

`std::span` is the type-safe replacement for every `ptr + len` API in C and legacy C++:

```cpp
// C-style
ssize_t read(int fd, void* buf, size_t count);

// Modern C++ wrapper
ssize_t read_into(int fd, std::span<std::byte> buf) {
    return read(fd, buf.data(), buf.size());
}
```

### Comparison Table

| Feature                    | C array `T[N]` | `std::array<T, N>` | `std::span<T>`                          |
| :------------------------- | :------------- | :----------------- | :-------------------------------------- |
| Owns data                  | Yes (stack)    | Yes (stack)        | **No**                                  |
| Size known at compile time | Yes            | Yes                | Dynamic (or static extent)              |
| Copyable                   | No (decays)    | Yes                | Yes (trivially copyable)                |
| Dynamic sizing             | No             | No                 | Yes                                     |
| Bounds checking            | No             | `.at()`            | `.at()` (C++26 `operator[]` is checked) |
| Slicing                    | No             | No                 | Yes (`first`, `last`, `subspan`)        |

## 8. Range-For Integration

`std::span` provides iterators and satisfies the range concept, enabling direct use in range-for
loops:

```cpp
void print_all(std::span<const std::string_view> items) {
    for (const auto& item : items) {
        std::cout << item << "\n";
    }
}
```

### Reverse Iteration

```cpp
void reverse_print(std::span<const int> data) {
    for (auto it = data.rbegin(); it != data.rend(); ++it) {
        std::cout << *it << " ";
    }
}
```

### Algorithm Integration

Since `std::span` provides standard iterators, it works with all `<algorithm>` functions:

```cpp
#include <algorithm>
#include <numeric>

double compute_mean(std::span<const double> samples) {
    if (samples.empty()) return 0.0;
    auto sum = std::accumulate(samples.begin(), samples.end(), 0.0);
    return sum / static_cast<double>(samples.size());
}

void clamp_range(std::span<double> values, double min, double max) {
    std::clamp(values.begin(), values.end(), min, max);
    // C++17: std::clamp is per-element, not range-based
    for (auto& v : values) {
        v = std::clamp(v, min, max);
    }
}
```

## 9. `span` as Function Parameter: The Modern Pattern

### The Preferred Pattern

For functions that operate on contiguous sequences without taking ownership:

```cpp
// READ-ONLY access: std::span<const T>
void analyze(std::span<const uint8_t> data);

// READ-WRITE access: std::span<T>
void transform(std::span<double> buffer);

// FIXED-SIZE: std::span<T, N>
void process_rgb(std::span<uint8_t, 3> pixel);
```

### Why Not Templates?

Before `std::span`, the common approach was:

```cpp
template<typename Container>
void legacy_analyze(const Container& data) {
    for (const auto& x : data) { /* ... */ }
}
```

Problems with the template approach:

1. **Header-only requirement:** The template must be defined in the header, exposing implementation
   details.
2. **Compile-time bloat:** Each instantiation generates new code.
3. **Error messages:** Template instantiation failures produce enormous error messages.
4. **No size constraint:** Accepts any range, including non-contiguous ones like `std::list`.

`std::span` solves all of these: it is a concrete type (no templates needed at the call site), it
guarantees contiguity, and error messages are concise.

### Const-Correctness: `std::span<const T>`

`std::span<const T>` provides read-only access to the elements. The pointer is `const T*`,
preventing modification through the span:

```cpp
void inspect(std::span<const int> data) {
    data[0] = 42; // ERROR: cannot modify const element
    int x = data[0]; // OK: read access
}
```

This is the analog of `const int*` with bounds. It should be the default for any function that only
needs to read the data.

```cpp
// Correct: read-only, non-owning, bounded
size_t count_zeros(std::span<const int> data) {
    return std::count(data.begin(), data.end(), 0);
}
```

### `std::span<T>` for Mutable Access

Use `std::span<T>` (without `const`) only when the function needs to modify the elements:

```cpp
void normalize(std::span<double> samples) {
    double max_val = *std::max_element(samples.begin(), samples.end());
    if (max_val == 0.0) return;
    for (auto& s : samples) {
        s /= max_val;
    }
}
```

## 10. Use Cases

### Buffer Interfaces

```cpp
class AudioBuffer {
public:
    explicit AudioBuffer(size_t frame_count)
        : data_(frame_count * 2) {} // stereo

    std::span<float> mutable_samples() { return data_; }
    std::span<const float> samples() const { return data_; }

private:
    std::vector<float> data_;
};
```

### Image Processing

```cpp
struct Image {
    uint32_t width;
    uint32_t height;
    std::vector<uint8_t> pixels; // RGBA

    std::span<uint8_t> row(uint32_t y) {
        auto stride = width * 4;
        return std::span<uint8_t>(pixels.data() + y * stride, stride);
    }

    std::span<const uint8_t> row(uint32_t y) const {
        auto stride = width * 4;
        return std::span<const uint8_t>(pixels.data() + y * stride, stride);
    }
};

void invert_row(std::span<uint8_t> row) {
    for (auto& byte : row) {
        byte = 255 - byte;
    }
}
```

### Serialization

```cpp
class BinaryWriter {
public:
    explicit BinaryWriter(std::span<std::byte> buffer)
        : buffer_(buffer), pos_(0) {}

    bool write(std::span<const std::byte> data) {
        if (pos_ + data.size() > buffer_.size()) return false;
        std::copy(data.begin(), data.end(), buffer_.begin() + pos_);
        pos_ += data.size();
        return true;
    }

    std::span<const std::byte> written() const {
        return buffer_.first(pos_);
    }

private:
    std::span<std::byte> buffer_;
    size_t pos_;
};
```

### Network I/O

```cpp
ssize_t recv_exact(int fd, std::span<std::byte> buffer) {
    size_t total = 0;
    while (total < buffer.size()) {
        ssize_t n = read(fd, buffer.data() + total, buffer.size() - total);
        if (n <= 0) return n;
        total += static_cast<size_t>(n);
    }
    return static_cast<ssize_t>(total);
}
```

## 11. Common Pitfalls

### Pitfall 1: Dangling Span (Same as `string_view`)

```cpp
std::span<int> dangerous() {
    std::vector<int> v = {1, 2, 3};
    return v; // implicit conversion to span, but 'v' is destroyed
    // Returned span dangles.
}
```

### Pitfall 2: Storing Span Across Scope Boundaries

```cpp
class Processor {
    std::span<const uint8_t> data_; // Dangling risk
public:
    void set_data(std::span<const uint8_t> d) { data_ = d; }
    // If the source of 'd' is destroyed, data_ dangles.
};
```

**Rule:** If a span must be stored, ensure the source's lifetime is explicitly managed and outlives
the span.

### Pitfall 3: Passing to Thread Without Lifetime Guarantee

```cpp
void launch_worker(std::span<const int> data) {
    std::thread t([data] {
        // 'data' may dangle if the source is destroyed
        // before this thread processes it.
        process(data);
    });
    t.detach();
}
```

Fix: either copy the data into the thread (e.g., capture a `std::vector` by value) or use a shared
ownership model (`std::shared_ptr<std::vector<int>>`).

### Pitfall 4: Assuming Bounds Checking in `operator[]`

Prior to C++26, `std::span::operator[]` is **unchecked**. It performs no bounds validation,
identical to raw pointer indexing.

```cpp
std::span<int> s = {some_ptr, 10};
int x = s[100]; // UB: out of bounds, no diagnostic
```

Use `s.at(100)` for checked access (throws `std::out_of_range`), or enable bounds-checking
sanitizers (`-fsanitize=address`).

### Pitfall 5: Multi-Dimensional Array Confusion

`std::span` is inherently one-dimensional. For multi-dimensional data, you must compute offsets
manually:

```cpp
// 2D matrix stored row-major
class Matrix {
public:
    Matrix(size_t rows, size_t cols)
        : rows_(rows), cols_(cols), data_(rows * cols) {}

    std::span<double> operator[](size_t row) {
        return std::span<double>(
            data_.data() + row * cols_, cols_);
    }

private:
    size_t rows_, cols_;
    std::vector<double> data_;
};
```

`std::mdspan` (C++23) provides proper multi-dimensional span support with compile-time layout
policies.

## See Also

- **Module 8: String Views and SSO** — `std::string_view` as the character-specific specialization.
- **Module 7: Data Layout** — Contiguity, alignment, `sizeof`, `std::byte`.
- **Module 8: Pointers and References** — Array decay, `std::nullptr_t`, pointer arithmetic.
- **`std::span`** — [N4950 §22.7.3], C++20.
- **`std::mdspan`** — [N4950 §22.7.4], C++23 (multi-dimensional views).
