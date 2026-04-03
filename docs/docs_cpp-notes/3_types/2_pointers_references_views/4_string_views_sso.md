---
title: String Views and Small String Optimization
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
  - ALevel
categories:
  - Cpp
slug: string-views-sso
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# String Views and Small String Optimization

`std::string` owns its character data and manages heap allocation. This is correct for long-lived
strings but creates unnecessary overhead when strings are passed between functions, sliced, or
inspected without modification.

C++17 introduced `std::string_view` to solve this problem: a non-owning, lightweight reference to
contiguous character data. This module covers the ownership model of `std::string`, the mechanics of
Small String Optimization (SSO), and the lifetime hazards inherent in using non-owning views.

## 1. `std::string` Ownership Model

`std::string` (typically `std::basic_string<char>`) is a value-semantic container that owns a
heap-allocated buffer for its character data. On copy, it performs a deep copy. On move, it
transfers ownership.

### The Heap Allocation Problem

Every `std::string` that exceeds the SSO threshold triggers a call to the allocator. In hot paths
(parsing, tokenization, logging), this is a significant source of latency and memory fragmentation.

```cpp
void log_message(std::string msg) {
    // 'msg' is a COPY of the caller's string.
    // If the caller passed a literal, this triggers:
    //   1. Construction of a temporary std::string from the literal (heap alloc)
    //   2. Copy into 'msg' (heap alloc or SSO copy)
    // Total: 2 allocations for a read-only operation.
}

log_message("Error: " + std::to_string(code));
```

### What `std::string` Actually Stores

A typical libstdc++ `std::string` contains three fields:

| Field                   | Type     | Purpose                                    |
| :---------------------- | :------- | :----------------------------------------- |
| `_M_dataplus._M_p`      | `char*`  | Pointer to character data                  |
| `_M_string_length`      | `size_t` | Current length (excluding null terminator) |
| `_M_allocated_capacity` | `size_t` | Capacity of the heap buffer                |

Total metadata: 32 bytes on 64-bit systems (pointer + two `size_t`).

## 2. Small String Optimization (SSO)

SSO eliminates the heap allocation for short strings by storing the character data **inside** the
`std::string` object itself, using the space that would otherwise hold the pointer, length, and
capacity fields.

### How It Works

The `std::string` object contains a union-like internal buffer. When the string length is below a
threshold, the data is stored directly in this buffer. When the string grows beyond the threshold,
the buffer is repurposed to hold the heap pointer and metadata.

```cpp
// Conceptual layout (libstdc++, 64-bit):
//
// Short mode (len <= 15):
//   [ byte 0: 16 - length | bytes 1-15: char data ]
//   The length is encoded in the first byte as (16 - actual_length).
//   The null terminator is placed at position (length + 1).
//
// Long mode (len > 15):
//   [ char* pointer (8 bytes) | size_t length (8 bytes) | size_t capacity (8 bytes) ]
//   Byte 0 is zero (distinguishing flag).
```

### SSO Thresholds by Implementation

<Tabs>
<TabItem value="libstdcxx" label="libstdc++ (GCC)" default>

**Threshold:** 15 characters on 64-bit systems. **Total object size:** 32 bytes. **Detection:** The
least significant bit of the first byte is set for short strings.

</TabItem>
<TabItem value="libcxx" label="libc++ (Clang)">

**Threshold:** 22 characters on 64-bit systems. **Total object size:** 24 bytes. libc++ uses a more
compact representation with the size stored in the last byte of the object.

</TabItem>
<TabItem value="msvc" label="MSVC STL">

**Threshold:** 15 characters on 64-bit systems. **Total object size:** 32 bytes. MSVC stores the
capacity and length in separate fields when in long mode, similar to libstdc++.

</TabItem>
</Tabs>

### When Heap Allocation Is Triggered

```cpp
std::string a = "short";         // SSO: stored inline, no alloc
std::string b = "a 15-char str!"; // libstdc++: exactly 15 chars, SSO
std::string c = "a 16-char str!!"; // libstdc++: 16 chars, heap alloc
std::string d(100, 'x');         // Explicit construction, heap alloc
```

**Key insight:** The SSO threshold is a property of the standard library implementation, not the
language. Code that depends on a specific threshold is non-portable.

## 3. `std::string_view`: Non-owning Reference

`std::string_view` (C++17, `<string_view>`) is a non-owning view over a contiguous sequence of
characters. It is to `std::string` what `std::span` is to `std::vector`.

### Definition

```cpp
template<class CharT, class Traits = std::char_traits<CharT>>
class basic_string_view {
    const CharT* _data;
    size_t       _size;
};

using string_view = basic_string_view<char>;
```

Size: 16 bytes on 64-bit systems (pointer + `size_t`). No heap allocation. No ownership.

### Construction from Any Contiguous Source

`std::string_view` can be implicitly constructed from:

- `std::string` (via `operator std::string_view`)
- `const char*` (null-terminated C string)
- C arrays: `char buf[N]`
- Any container providing `data()` and `size()` with the correct value type

```cpp
void process(std::string_view sv) {
    // Zero-copy. No allocation. No copy.
    std::cout << sv << "\n";
}

void caller() {
    std::string s = "hello";
    const char* cstr = "world";
    char arr[] = "array";

    process(s);      // implicit conversion
    process(cstr);   // implicit conversion (calls strlen)
    process(arr);    // implicit conversion
    process("literal"); // implicit conversion
}
```

### Substring Extraction

`std::string_view::substr` returns a new `string_view` pointing into the original data. No
allocation occurs.

```cpp
std::string_view path = "/usr/local/bin/app";

std::string_view filename = path.substr(path.rfind('/') + 1);
// filename == "app", points into 'path' storage
```

This is the primary performance advantage over `std::string::substr`, which returns a new
`std::string` and always allocates.

## 4. Lifetime Dangers: Dangling References

`std::string_view` does not extend the lifetime of the underlying data. If the source is destroyed,
the view becomes dangling. Accessing a dangling `string_view` is **Undefined Behavior**.

### The Classic Bug

```cpp
std::string_view dangerous() {
    std::string s = "temporary";
    return s; // s is destroyed. string_view dangles.
}

std::string_view also_dangerous() {
    return std::string("temporary") + " appended";
    // The temporary std::string is destroyed at the semicolon.
    // The returned string_view dangles.
}
```

### Less Obvious Dangling

```cpp
std::string_view get_prefix(std::string s) {
    return s.substr(0, 4); // Dangles: 's' is a local copy, destroyed on return.
}

std::vector<std::string_view> tokens;

void tokenize(std::string input) {
    // Tokens hold views into 'input', which is destroyed when this returns.
    // All tokens dangle after the function exits.
    size_t start = 0;
    for (size_t i = 0; i <= input.size(); ++i) {
        if (i == input.size() || input[i] == ' ') {
            tokens.push_back(input.substr(start, i - start));
            start = i + 1;
        }
    }
}
```

### The Null Terminator Trap

`std::string_view` is **not guaranteed** to be null-terminated. Passing it to a C API that expects a
null-terminated string is UB unless you explicitly check or copy.

```cpp
void c_api(const char* str); // expects null-terminated

std::string_view sv = "hello world";
sv = sv.substr(0, 5); // sv == "hello", NOT null-terminated

// WRONG: UB if 'sv' is not null-terminated
c_api(sv.data());

// CORRECT: null-terminate manually
std::string null_terminated(sv);
c_api(null_terminated.c_str());
```

Note: `sv.data()` does return a pointer to the character data, and if the `string_view` was
constructed from a null-terminated source without modification, it happens to be null-terminated.
But this is **not a guarantee of the type**. Relying on it is a latent bug.

## 5. `string_view` vs `const std::string&`

### As Function Parameters

| Criterion                 | `const std::string&`                          | `std::string_view`        |
| :------------------------ | :-------------------------------------------- | :------------------------ |
| Accepts `std::string`     | Yes (reference)                               | Yes (implicit conversion) |
| Accepts `const char*`     | Yes (constructs temp `string`, **allocates**) | Yes (zero-copy)           |
| Accepts string literal    | Yes (constructs temp, **allocates**)          | Yes (zero-copy)           |
| Accepts substring         | No (requires explicit `string`)               | Yes (`substr` is free)    |
| Null-terminated guarantee | Yes                                           | **No**                    |
| Owns data                 | No                                            | No                        |

### Recommendation

Use `std::string_view` for **read-only, non-owning** string parameters unless you need null
termination or are storing the reference long-term.

```cpp
// Modern: accepts all string-like types, zero-copy
bool starts_with(std::string_view str, std::string_view prefix) {
    return str.substr(0, prefix.size()) == prefix;
}

// Legacy: forces allocation when called with const char*
bool starts_with_legacy(const std::string& str, const std::string& prefix) {
    return str.compare(0, prefix.size(), prefix) == 0;
}
```

### When to Prefer `const std::string&`

1. **You need to call `.c_str()`** — passing to a C API.
2. **You need null termination** — e.g., `fopen(sv.data())` is dangerous.
3. **You need to store the string** — convert to `std::string` at the boundary.
4. **You are calling a legacy API** that only accepts `std::string` — conversion from `string_view`
   to `string` still allocates.

## 6. As Return Values

Returning `std::string_view` from a function is only safe if the underlying data outlives the call
site. This limits the viable patterns:

### Safe: Returning a View Into a Longer-Lived Object

```cpp
struct Config {
    std::string name;
    std::string value;

    std::string_view get_name() const { return name; }
    // Safe: 'name' is owned by the Config object
};
```

### Safe: Returning a View Into Static Storage

```cpp
std::string_view weekday_name(int day) {
    static const char* names[] = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};
    if (day >= 0 && day < 7) return names[day];
    return "Unknown";
}
```

### Unsafe: Returning a View Into a Parameter

```cpp
std::string_view truncate(std::string s, size_t max_len) {
    return s.substr(0, max_len);
    // DANGLES: 's' is a local copy, destroyed on return.
}
```

Fix: take `std::string_view` as the parameter, but the caller must ensure the source outlives the
returned view.

```cpp
std::string_view truncate(std::string_view sv, size_t max_len) {
    return sv.substr(0, max_len);
    // The returned view is only valid as long as sv's source is alive.
}
```

## 7. Performance Implications

### Zero-Copy Function Chains

`std::string_view` enables pipeline-style string processing without intermediate allocations:

```cpp
std::string_view extract_domain(std::string_view email) {
    auto at = email.find('@');
    if (at == std::string_view::npos) return {};
    auto domain = email.substr(at + 1);
    auto dot = domain.rfind('.');
    if (dot == std::string_view::npos) return domain;
    return domain.substr(dot + 1);
}
```

No allocations occur. Each `substr` returns a 16-byte view.

### Hashing

`std::hash<std::string_view>` is available since C++17. If you use `string_view` as a key in
`std::unordered_map`, hashing operates directly on the character data without constructing a
`std::string`.

```cpp
std::unordered_map<std::string_view, int> lookup;
lookup["fast"] = 1; // No std::string allocation for the key
```

**Warning:** The `string_view` keys must outlive the map. If the source strings are modified or
destroyed, the map's keys dangle. Use `std::unordered_map<std::string, int>` if the strings may be
modified or freed.

## 8. `std::string_view` vs `std::span<const char>`

| Property                    | `std::string_view`  | `std::span<const char>` |
| :-------------------------- | :------------------ | :---------------------- |
| Character trait support     | Yes (`char_traits`) | No                      |
| `operator<<` to `ostream`   | Yes                 | No                      |
| Hash specialization         | Yes                 | No                      |
| Null-termination assumption | Sometimes           | Never                   |
| Generalizes to other types  | No (char-only)      | Yes (any `T`)           |
| Available since             | C++17               | C++20                   |

`std::string_view` is the correct choice when working with text. `std::span<const char>` is
appropriate when treating character data as a generic byte buffer (e.g., binary data that happens to
be in a `char` array).

They are interoperable:

```cpp
std::string_view sv = "hello";
std::span<const char> sp = sv; // implicit conversion (C++23)
// Pre-C++23: std::span<const char> sp(sv.data(), sv.size());
```

## 9. Common Pitfalls

### Pitfall 1: Storing `string_view` in a Container

```cpp
std::vector<std::string_view> substrings;
std::string input = "hello world";

substrings.push_back(input.substr(0, 5));
// Safe NOW, but if 'input' is modified or destroyed, substrings[0] dangles.
```

If you need to store substrings long-term, convert to `std::string`:

```cpp
std::vector<std::string> substrings;
substrings.emplace_back(input.substr(0, 5));
```

### Pitfall 2: Implicit Conversion in Overload Resolution

```cpp
void process(std::string_view sv);
void process(const std::string& s);

std::string str = "test";
process(str); // AMBIGUOUS: both overloads are equally viable
```

This is a real problem when mixing legacy code (`const std::string&`) with new code
(`std::string_view`). Resolution: remove the `const std::string&` overload entirely, or add an
overload that takes `std::string` by value for ownership transfer.

### Pitfall 3: Comparing `string_view` with `nullptr`

```cpp
std::string_view sv;
if (sv == nullptr) { } // Compiles, but misleading
```

A default-constructed `string_view` has `data() == nullptr` and `size() == 0`. Comparing with
`nullptr` checks the data pointer, not the emptiness. Prefer:

```cpp
if (sv.empty()) { } // Checks size == 0
```

## See Also

- **Module 8: Contiguous Memory Views** — `std::span<T>` as the generalization of `string_view`.
- **Module 7: Data Layout** — Memory ownership models, heap allocation, SSO interaction with
  alignment.
- **Module 8: Pointers and References** — Reference lifetime, dangling references.
- **`std::string_view`** — [N4950 §22.7], C++17.
