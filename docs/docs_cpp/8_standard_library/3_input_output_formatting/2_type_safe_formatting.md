---
title: Type-Safe Formatting (std::format, std::print)
description:
description: >-
  C++: Type-Safe Formatting (std::format, std::print) — `std::format`---
  Overview; Format Specification Syntax; ::= "#" (alternate form); Argument ID.
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: type-safe-formatting
---

## Type-Safe Formatting (std::format, std::print)

C++20 introduced `std::format`, a type-safe formatting function that checks argument types at
compile time using a concise format specification syntax. C++23 added `std::print` and
`std::println` for direct output to `FILE*` streams without intermediate string construction. This
section covers the format specification grammar, argument IDs, alignment, sign, width, precision,
type specifiers, `std::print`, and custom type formatters.

### `std::format` --- Overview

`std::format` (C++20) is a type-safe formatting function that uses a format string to produce a
`std::string` [N4950 §22.14.6]. Unlike `printf`, it checks argument types at compile time. Unlike
iostreams, it uses a concise, composable format specification syntax.

```cpp
#include <format>
#include <iostream>
#include <string>

int main() {
    std::string s = std::format("Hello, {}! You are {} years old.", "Alice", 30);
    std::cout << s << "\n";
    // Output: Hello, Alice! You are 30 years old.
}
```

`std::format` is declared in `<format>` [N4950 §22.14.1] and is part of the `std` namespace. It
returns a `std::string` by value. The format string is checked at compile time for correctness --- a
mismatch between the format specification and the argument type is a compile-time error [N4950
§22.14.6.2].

:::info The format string is a **constant expression** --- it must be known at compile time. This
enables the compiler to parse it and verify that every `{}` field has a corresponding argument of
the correct type. Runtime-computed format strings are not supported by `std::format` (use
`std::vformat` for runtime format strings, at the cost of losing compile-time checking).
:::

### Format Specification Syntax

The full format specification grammar [N4950 §22.14.2] for a replacement field `{...}` is:

```
replacement-field ::= "{" [arg-id] [":" format-spec] "}"
arg-id            ::= nonnegative-integer | identifier
format-spec       ::= [[fill] align] [sign] ["#"] ["0"] [width] ["." precision] [type]
fill              ::= any character other than "{" or "}"
align             ::= "<" | ">" | "^" | "="
sign              ::= "+" | "-" | " "
#                 ::= "#" (alternate form)
0                 ::= "0" (zero-padding)
width             ::= nonnegative-integer | "{" [arg-id] "}"
precision         ::= nonnegative-integer | "{" [arg-id] "}"
type              ::= type-specifier
```

#### Argument ID

| Syntax       | Meaning                                                             |
| :----------- | :------------------------------------------------------------------ |
| `{}`         | Automatic indexing --- arguments are consumed in order              |
| `{0}`, `{1}` | Manual indexing --- refers to the argument at that position         |
| `{name}`     | Named argument (only when using `std::format_args` with named pack) |

```cpp
#include <format>
#include <iostream>

void arg_id_demo() {
    std::cout << std::format("Auto: {} {}\n", 1, 2);
    std::cout << std::format("Manual: {1} {0}\n", 1, 2);
    std::cout << std::format("Repeated: {0} {0} {0}\n", "hi");
}
// Auto: 1 2
// Manual: 2 1
// Repeated: hi hi hi
```

#### Alignment and Fill

Alignment controls how text is padded within a given width [N4950 §22.14.2.2]:

| Align  | Meaning                                 | Default for |
| :----- | :-------------------------------------- | :---------- |
| `&lt;` | Left-align                              | Strings     |
| `&gt;` | Right-align                             | Numbers     |
| `^`    | Center                                  | ---         |
| `=`    | Pad after sign/0x prefix (numbers only) | ---         |

```cpp
#include <format>
#include <iostream>

void alignment_demo() {
    std::cout << std::format("[{:>10}]\n", "left");     // [      left]
    std::cout << std::format("[{:<10}]\n", "right");    // [right     ]
    std::cout << std::format("[{:^10}]\n", "center");   // [  center  ]
    std::cout << std::format("[{:*>10}]\n", "star");    // [******star]
    std::cout << std::format("[{:.^10}]\n", "dot");     // [..dot.....]
}
```

#### Sign, `#`, and Zero-Padding

| Specifier | Meaning                                                                    |
| :-------- | :------------------------------------------------------------------------- |
| `+`       | Always show sign for signed types (`+42`, `-7`)                            |
| `-`       | Only show sign for negative values (default)                               |
| (space)   | Show space for positive, minus for negative (` 42`, `-7`)                  |
| `#`       | Alternate form: `0x` prefix for hex, `0b` for binary, `0` prefix for octal |
| `0`       | Pad with zeros instead of spaces                                           |

```cpp
#include <format>
#include <iostream>

void sign_demo() {
    std::cout << std::format("{:+d}\n", 42);       // +42
    std::cout << std::format("{: d}\n", 42);       //  42
    std::cout << std::format("{:-d}\n", 42);       // 42
    std::cout << std::format("{:#x}\n", 255);      // 0xff
    std::cout << std::format("{:#b}\n", 10);       // 0b1010
    std::cout << std::format("{:05d}\n", 42);      // 00042
    std::cout << std::format("{:#010x}\n", 255);   // 0x000000ff
}
```

#### Width and Precision

Width specifies the minimum field width. Precision specifies the maximum number of characters for
strings, or the number of digits after the decimal point for floating-point numbers [N4950
§22.14.2.2].

Both can be dynamic --- supplied by a runtime argument using `{}` inside the format spec:

```cpp
#include <format>
#include <iostream>

void width_precision_demo() {
    std::cout << std::format("{:10.3f}\n", 3.14159);    // "     3.142"
    std::cout << std::format("{:.5}\n", "hello world");  // "hello"
    std::cout << std::format("{:.{}f}\n", 3.14159, 4);   // "3.1416" (dynamic precision)
    std::cout << std::format("{:{}d}\n", 42, 8);        // "      42" (dynamic width)
}
```

:::warning Dynamic width and precision use the next argument in the argument list. Mixing manual
argument IDs with dynamic width/precision can lead to confusing index errors. When using dynamic
width/precision, keep the argument ordering simple.
:::

#### Type Specifiers

| Type      | Meaning                          | Example                                      |
| :-------- | :------------------------------- | :------------------------------------------- |
| `d`       | Decimal integer                  | `{}` --- `42`                                |
| `x` / `X` | Hexadecimal                      | `{}` --- `2a` / `2A`                         |
| `o`       | Octal                            | `{}` --- `52`                                |
| `b` / `B` | Binary                           | `{}` --- `101010`                            |
| `f`       | Fixed-point                      | `{}` --- `3.141593`                          |
| `e` / `E` | Scientific notation              | `{}` --- `3.141593e+00`                      |
| `g` / `G` | General (shortest of `f` or `e`) | `{}` --- `3.14159`                           |
| `a` / `A` | Hex float                        | `{}` --- `0x1.921fb54411744p+1`              |
| `s`       | String                           | `{}` --- `hello`                             |
| `c`       | Character                        | `{}` --- `A`                                 |
| `p`       | Pointer                          | `{}` --- `0x7ffc1234`                        |
| `?`       | Debug output (C++23)             | `{}` --- `"hello"` (with quotes and escapes) |

### Format Specification Reference Table

The following table provides a comprehensive reference for `std::format` specifications [N4950
§22.14.2]:

```cpp
#include <format>
#include <iostream>
#include <string>
#include <limits>

void format_reference_table() {
    // Integer formatting
    std::cout << std::format("Decimal:      {:d}\n", 255);           // 255
    std::cout << std::format("Hex lower:    {:x}\n", 255);           // ff
    std::cout << std::format("Hex upper:    {:X}\n", 255);           // FF
    std::cout << std::format("Hex prefix:   {:#x}\n", 255);          // 0xff
    std::cout << std::format("Octal:        {:o}\n", 255);           // 377
    std::cout << std::format("Binary:       {:b}\n", 10);            // 1010
    std::cout << std::format("Binary pref:  {:#b}\n", 10);           // 0b1010
    std::cout << std::format("Zero-pad:     {:06d}\n", 42);          // 000042
    std::cout << std::format("Signed +:     {:+d}\n", 42);           // +42
    std::cout << std::format("Signed sp:    {: d}\n", 42);           //  42

    // Floating-point formatting
    std::cout << std::format("Fixed:        {:.4f}\n", 3.14159);     // 3.1416
    std::cout << std::format("Scientific:   {:.2e}\n", 3.14159);     // 3.14e+00
    std::cout << std::format("General:      {:.6g}\n", 3.14159);     // 3.14159
    std::cout << std::format("Hex float:    {:a}\n", 3.14);          // 0x1.91eb851eb851fp+1
    std::cout << std::format("Inf:          {:f}\n",
        std::numeric_limits<double>::infinity());                   // inf
    std::cout << std::format("NaN:          {:f}\n",
        std::numeric_limits<double>::quiet_NaN());                  // nan

    // String formatting
    std::cout << std::format("Left:         [{:<20}]\n", "left");    // [left                ]
    std::cout << std::format("Right:        [{:>20}]\n", "right");   // [               right]
    std::cout << std::format("Center:       [{:^20}]\n", "mid");     // [        mid         ]
    std::cout << std::format("Precision:    {:.3}\n", "truncate");   // tru
    std::cout << std::format("Fill char:    {:*^20}\n", "star");     // [********star********]

    // Pointer formatting
    int x = 42;
    std::cout << std::format("Pointer:      {:p}\n", static_cast<void*>(&x));
    // Pointer:      0x7ffd1234abcd (platform-dependent)

    // Boolean formatting
    std::cout << std::format("Bool text:    {:s}\n", true);          // true
    std::cout << std::format("Bool int:     {:d}\n", true);          // 1
}
```

### Compile-Time Format String Validation

#### Proof of Compile-Time Checking Mechanism

**Theorem.** `std::format` rejects type mismatches between the format string and the arguments at
compile time.

**Proof.** The mechanism relies on C++20's facility for compile-time string analysis via `consteval`
functions and NTTPs (non-type template parameters).

1. `std::format` is declared as a variadic function template. Its format string parameter is a
   `consteval`-checked NTTP of type `std::format_string<Args...>` [N4950 §22.14.6.2].

2. The `std::format_string<Args...>` constructor is `consteval`. It parses the format string at
   compile time, counting replacement fields and verifying that each field's type specification is
   compatible with the corresponding argument type from `Args...`.

3. If the number of replacement fields does not match `sizeof...(Args)`, or if a type specifier is
   incompatible (e.g., `{:d}` for a `double` argument), the constructor fails to compile with a
   diagnostic.

4. Because the constructor is `consteval`, any failure produces a compile-time error, not a runtime
   exception. This is a structural guarantee: no runtime path can bypass the check. QED.

```cpp
#include <format>
#include <string>

int main() {
    // All of these are COMPILE-TIME ERRORS:

    // std::format("{:d}", 3.14);        // error: 'd' requires integral type
    // std::format("{}", 1, 2, 3);       // error: too many arguments
    // std::format("{0} {1}", "hi");     // error: not enough arguments
    // std::format("{}}", 42);           // error: invalid format string
}
```

### `std::print` and `std::println` (C++23)

`std::print` (C++23) writes formatted output directly to stdout (or a file) without constructing an
intermediate `std::string` [N4950 §22.14.6.4]. This avoids a heap allocation when the output is only
needed on the console.

`std::println` appends a newline automatically.

```cpp
#include <cstdio>
#include <format>
#include <iostream>

int main() {
    std::print("Hello, {}!\n", "world");          // Writes to stdout
    std::println("Pi = {:.6f}", 3.14159265);       // Writes to stdout + newline
    std::println("Error: {} at line {}", "missing ;", 42);

    // Print to stderr
    std::print(stderr, "Warning: disk full\n");
}
```

:::info `std::print` is declared in `<print>` [N4950 §22.14.1]. It writes directly to the C `FILE*`
stream, bypassing `std::cout` and its stream buffer. This makes it faster for simple console output
but means it does not synchronize with `std::cout` by default. Avoid mixing
`std::print(stdout, ...)` and `std::cout` in the same program without calling
`std::ios_base::sync_with_stdio(true)` first.
:::

:::warning `std::print` to stdout does **not** lock the stdout mutex by default. Concurrent calls to
`std::print` from multiple threads can produce interleaved output. Use `std::print(stderr, ...)` for
error messages (stderr is unbuffered) or protect stdout with a mutex.
:::

### Custom Type Formatter

To make a user-defined type work with `std::format`, you must specialize `std::formatter&lt;T>` for
your type [N4950 §22.14.6.3]. The specialization must be placed in the `std` namespace and provide:

1. A `parse()` method that parses the format specification (everything after `:`).
2. A `format()` method that produces the output.

```cpp
#include <format>
#include <iostream>
#include <string>

struct Vec3 {
    double x, y, z;
};

template <>
struct std::formatter<Vec3> : std::formatter<std::string> {
    auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        auto end = ctx.end();

        if (it != end && *it == 'p') {
            precision_ = 0;
            ++it;
            if (it != end && *it == '.') {
                ++it;
                while (it != end && *it >= '0' && *it <= '9') {
                    precision_ = precision_ * 10 + (*it - '0');
                    ++it;
                }
            }
            spec_ = 'p';
        }

        if (it != end && *it != '}')
            throw std::format_error("invalid format for Vec3");

        return it;
    }

    auto format(const Vec3& v, format_context& ctx) const {
        if (spec_ == 'p') {
            return std::format_to(ctx.out(), "({:.{}f}, {:.{}f}, {:.{}f})",
                v.x, precision_, v.y, precision_, v.z, precision_);
        }
        return std::format_to(ctx.out(), "Vec3({}, {}, {})", v.x, v.y, v.z);
    }

private:
    char spec_ = '\0';
    int precision_ = 6;
};

int main() {
    Vec3 v{1.23456789, 2.34567890, 3.45678901};

    std::cout << std::format("Default: {}\n", v);
    // Default: Vec3(1.23457, 2.34568, 3.45679)

    std::cout << std::format("Precise: {:p.2}\n", v);
    // Precise: (1.23, 2.35, 3.46)

    std::cout << std::format("Precise: {:p.0}\n", v);
    // Precise: (1, 2, 3)
}
```

#### Supporting Standard Format Specifications

For production-quality formatters, delegate standard spec parsing to the base class and only handle
custom extensions:

```cpp
#include <format>
#include <iostream>
#include <string>
#include <cstdint>

struct Duration {
    int64_t nanos;
};

template <>
struct std::formatter<Duration> : std::formatter<std::string> {
    auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        auto end = ctx.end();

        // Check for custom specifier 'h' (human-readable) before standard parse
        if (it != end && *it == 'h') {
            spec_ = 'h';
            ++it;
            // 'h' does not accept fill/align/width/precision
            if (it != end && *it != '}')
                throw std::format_error("invalid format for Duration after 'h'");
            return it;
        }

        // Delegate to base class for standard spec parsing (width, fill, align)
        it = std::formatter<std::string>::parse(ctx);
        return it;
    }

    auto format(const Duration& d, format_context& ctx) const {
        if (spec_ == 'h') {
            double seconds = static_cast<double>(d.nanos) / 1e9;
            if (seconds < 1e-6) return std::format_to(ctx.out(), "{} ns", d.nanos);
            if (seconds < 1e-3) return std::format_to(ctx.out(), "{:.3} us", seconds * 1e6);
            if (seconds < 1.0)  return std::format_to(ctx.out(), "{:.3} ms", seconds * 1e3);
            return std::format_to(ctx.out(), "{:.3} s", seconds);
        }

        // Standard formatting delegates to base class context
        std::string s = std::to_string(d.nanos) + "ns";
        return std::formatter<std::string>::format(s, ctx);
    }

private:
    char spec_ = '\0';
};

int main() {
    Duration d1{150};
    Duration d2{1500000};
    Duration d3{2500000000};

    std::cout << std::format("human: {:h}\n", d1);  // human: 150 ns
    std::cout << std::format("human: {:h}\n", d2);  // human: 1.500 ms
    std::cout << std::format("human: {:h}\n", d3);  // human: 2.500 s
    std::cout << std::format("standard: {:>20}\n", d1);  // standard:               150ns
}
```

:::tip Inheriting from `std::formatter&lt;std::string>` (or any standard formatter) gives you access
to the standard format specification parsing logic. If your custom type needs to support the full
standard specification set (width, fill, alignment), parse the standard spec first with the base
class's `parse()`, then check for your custom specifiers.
:::

:::warning The specialization of `std::formatter` must be in namespace `std` for `std::format` to
find it. However, adding declarations to namespace `std` is technically undefined behavior unless it
is a **template specialization** of a standard library template [N4950 §16.5.4.2.1]. Specializing
`std::formatter` is explicitly permitted.
:::

### Runtime Format Strings with `std::vformat`

When the format string must be computed at runtime (e.g., loaded from a configuration file or user
input), `std::format` cannot be used because it requires a compile-time constant format string. The
standard provides `std::vformat` for this scenario [N4950 §22.14.6.5]:

```cpp
#include <format>
#include <iostream>
#include <string>
#include <string_view>

void log_message(std::string_view fmt_str, std::format_args args) {
    std::string output = std::vformat(fmt_str, args);
    std::println(stderr, "{}", output);
}

int main() {
    std::string user_fmt = "Error at line {}: {}";
    log_message(user_fmt, std::make_format_args(42, "file not found"));
    // Error at line 42: file not found
}
```

`std::vformat` accepts a runtime `std::string_view` and a `std::format_args` object, but it provides
no compile-time type checking. If the format string references an argument that does not exist, or
if the type specifier is incompatible with the argument type, the result is a `std::format_error`
exception thrown at runtime. This is analogous to the safety difference between `std::variant`
(checked at compile time via `std::visit`) and `std::any` (checked at runtime via `std::any_cast`).

### Format-To: Writing into Existing Buffers

`std::format_to` and `std::format_to_n` write formatted output directly into an iterator, avoiding
intermediate `std::string` allocation [N4950 §22.14.6.4]. This is critical in high-throughput
scenarios where thousands of format operations per second must not trigger heap allocations:

```cpp
#include <format>
#include <iostream>
#include <vector>
#include <cstddef>

int main() {
    std::vector<char> buf(256);

    auto write_report = [&](std::back_insert_iterator<std::vector<char>> out,
                            std::string_view label, int value, double ratio) {
        out = std::format_to(out, "[{}] value={}", label, value);
        out = std::format_to(out, " ratio={:.2%}\n", ratio);
        return out;
    };

    auto it = std::back_inserter(buf);
    it = write_report(it, "cpu", 87, 0.87);
    it = write_report(it, "mem", 2048, 0.45);

    std::string_view result(buf.data(), static_cast<std::size_t>(it - buf.begin()));
    std::cout << result;
    // [cpu] value=87 ratio=87.00%
    // [mem] value=2048 ratio=45.00%
}
```

`std::format_to_n` additionally accepts a maximum number of characters to write, returning a
`std::format_to_n_result` struct containing the output iterator and the total number of characters
that _would_ have been written (useful for truncation-aware formatting).

### Performance Comparison: `std::format` vs iostreams vs `printf`

`std::format` is designed to be faster than iostreams and competitive with `printf` while providing
type safety. The key advantage over iostreams is avoiding virtual dispatch and locale overhead per
operation. The key advantage over `printf` is compile-time type checking.

```cpp
#include <format>
#include <iostream>
#include <cstdio>
#include <chrono>
#include <string>
#include <vector>

int main() {
    constexpr int N = 1'000'000;
    std::vector<int> values(N);
    for (int i = 0; i < N; ++i) values[i] = i;

    // Benchmark: std::format
    auto start = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < N; ++i) {
        auto s = std::format("value={:06d} hex={:#010x}", values[i], values[i]);
        (void)s;
    }
    auto end = std::chrono::high_resolution_clock::now();
    auto fmt_ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    // Benchmark: printf
    start = std::chrono::high_resolution_clock::now();
    char buf[256];
    for (int i = 0; i < N; ++i) {
        std::snprintf(buf, sizeof(buf), "value=%06d hex=%#010x", values[i], values[i]);
        (void)buf;
    }
    end = std::chrono::high_resolution_clock::now();
    auto printf_ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    // Benchmark: iostreams
    start = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < N; ++i) {
        std::ostringstream oss;
        oss << "value=" << std::setfill('0') << std::setw(6) << values[i]
            << " hex=0x" << std::hex << std::setw(8) << std::setfill('0') << values[i];
        (void)oss.str();
    }
    end = std::chrono::high_resolution_clock::now();
    auto io_ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    std::cout << "std::format: " << fmt_ms << " ms\n";
    std::cout << "printf:     " << printf_ms << " ms\n";
    std::cout << "iostreams:  " << io_ms << " ms\n";
}
```

Typical results (GCC 13, `-O2`): `std::format` is 3-10x faster than iostreams and within 1.2-2x of
`printf`. The exact ratio depends on the complexity of the format string and the platform.

### Locale-Independent Formatting

By default, `std::format` produces locale-independent output [N4950 §22.14.6.1]. This is a
significant advantage over iostreams, which use the global locale by default and can produce
surprising output (e.g., `1,000.50` with a thousands separator in some locales).

```cpp
#include <format>
#include <iostream>
#include <locale>

int main() {
    // std::format: always locale-independent (unless L specifier used)
    std::cout << std::format("format: {}\n", 1234567.89);
    // Output: format: 1234567.89  (always, regardless of locale)

    // iostreams: locale-dependent
    std::cout.imbue(std::locale("de_DE"));
    std::cout << "iostream: " << 1234567.89 << "\n";
    // Output (German locale): iostream: 1.234.567,89

    // Restore default
    std::cout.imbue(std::locale::classic());
}
```

The `L` specifier in `std::format` enables locale-sensitive formatting:

```cpp
#include <format>
#include <iostream>
#include <locale>

int main() {
    std::locale::global(std::locale("en_US"));

    // Without L: locale-independent
    std::cout << std::format("No locale: {:.2f}\n", 1234567.89);
    // Output: No locale: 1234567.89

    // With L: locale-sensitive (C++20 via std::format)
    // Note: L specifier support for floating-point is limited in early implementations
}
```

### `std::format` with Chrono Types (C++20)

`<format>` provides built-in formatting for `std::chrono` types [N4950 §22.14.5]:

```cpp
#include <format>
#include <iostream>
#include <chrono>
#include <ctime>

int main() {
    auto now = std::chrono::system_clock::now();

    std::cout << std::format("Default:    {}\n", now);
    std::cout << std::format("ISO:        {:%Y-%m-%dT%H:%M:%S}\n", now);
    std::cout << std::format("US date:    {:%m/%d/%Y}\n", now);
    std::cout << std::format("EU date:    {:%d.%m.%Y}\n", now);
    std::cout << std::format("Time only:  {:%H:%M:%S}\n", now);

    // Duration formatting
    auto elapsed = std::chrono::milliseconds(1234567);
    std::cout << std::format("Elapsed:    {:%H:%M:%S}\n", elapsed);
    // Output: Elapsed:    00:20:34
}
```

### `std::format_to_n` for Bounded Output

When writing into a fixed-size buffer, use `std::format_to_n` to avoid buffer overflows [N4950
§22.14.6.4]:

```cpp
#include <format>
#include <iostream>
#include <charconv>

int main() {
    char buf[20];

    auto result = std::format_to_n(buf, sizeof(buf) - 1, "Hello, {}!", "World");
    *result.out = '\0';  // null-terminate

    std::cout << "Written: " << buf << "\n";
    std::cout << "Would need: " << result.size << " bytes\n";
    // Written: Hello, World!
    // Would need: 13 bytes

    // Truncated case
    auto result2 = std::format_to_n(buf, 5, "Hello, {}!", "World");
    std::size_t written = static_cast<std::size_t>(result2.out - buf);
    buf[written] = '\0';
    std::cout << "Truncated: " << buf << "\n";
    // Truncated: Hello
}
```

### Common Pitfalls

- **Mixing argument ID modes:** You cannot mix automatic (`{}`) and manual (`{0}`, `{1}`) argument
  IDs in the same format string. Doing so is a compile-time error [N4950 §22.14.6.2]. Pick one mode
  per format string.

- **Dynamic width/precision with manual IDs:** When using dynamic width (`{:{}}`) with manual
  argument IDs, the dynamic width/precision argument is consumed at its position in the argument
  list, which can create confusing off-by-one index errors. Explicitly index all arguments when
  using dynamic width.

- **`std::print` thread safety:** `std::print(stdout, ...)` does not acquire a lock on the stdout
  mutex. Concurrent `std::print` calls from multiple threads produce interleaved output. Either use
  `std::print(stderr, ...)` (stderr is unbuffered) or guard stdout with a `std::mutex`.

- **`std::formatter` specialization in wrong namespace:** The specialization must be in namespace
  `std`. Placing it in any other namespace, including the type's own namespace, causes the formatter
  to not be found by overload resolution [N4950 §22.14.6.3].

- **Format spec `=` alignment with strings:** The `=` alignment (pad after sign/prefix) is only
  valid for numeric types. Applying it to a string throws `std::format_error` at runtime.

- **Locale-dependent formatting:** By default, `std::format` uses the default locale for
  locale-sensitive specifiers (e.g., the `L` specifier for localized numbers). For
  locale-independent output, avoid the `L` specifier or use `std::format` without locale arguments.

## See Also

- [Stream Buffers and Locale Facets](./1_stream_buffers.md)
- [Unicode Support](./3_unicode_support.md)
