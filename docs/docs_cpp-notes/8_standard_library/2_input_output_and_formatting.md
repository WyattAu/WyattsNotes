---
title: Input/Output and Formatting
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: input-output-and-formatting
---

# Input/Output and Formatting

C++ provides two generations of I/O and formatting facilities. The legacy iostreams library (`<iostream>`, `<sstream>`, `<fstream>`) uses stream objects, stream buffers, and locale facets for character-based I/O. The modern formatting library (`<format>`, `<print>`, added in C++20 and C++23) provides type-safe, composable format strings that compile-time check arguments. This module covers both systems in depth, including the stream buffer abstraction, locale facets, `std::format`, custom formatters, and Unicode support.

---

## 1. Stream Buffers and Locale Facets

### 1.1 The Stream Buffer Abstraction

`std::basic_streambuf<CharT, Traits>` is the low-level buffer abstraction that underlies all C++ I/O [N4950 §30.4]. A stream buffer manages two character buffers:

- **Put area** (output buffer): characters waiting to be written to the destination.
- **Get area** (input buffer): characters read from the source and available for consumption.

The stream buffer is responsible for the actual transfer of characters between these in-memory buffers and the external device (file, console, string, network socket). The high-level stream classes (`std::istream`, `std::ostream`) are thin wrappers that perform formatting and parsing, then delegate the actual I/O to their associated stream buffer.

```
┌─────────────────────────────────────────────────────────────────┐
│                      std::ostream                                │
│  (formatting: operator<<, std::setw, std::precision, etc.)      │
└──────────────────────┬──────────────────────────────────────────┘
                       │ delegates to
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                  std::basic_streambuf<char>                      │
│  ┌──────────────┐     ┌──────────────┐                          │
│  │  Put Area    │     │  Get Area    │                          │
│  │  (output)    │     │  (input)     │                          │
│  │  pbase epptr │     │  eback egptr │                          │
│  │  pptr        │     │  gptr        │                          │
│  └──────┬───────┘     └──────┬───────┘                          │
│         │                    │                                  │
│         ▼                    ▼                                  │
│    external device      external source                         │
│   (file, console,       (file, console,                         │
│    string, socket)       string, socket)                         │
└─────────────────────────────────────────────────────────────────┘
```

The standard stream buffer operations [N4950 §30.4.4] are:

| Virtual Function            | Direction | Purpose                                                                                |
| :-------------------------- | :-------- | :------------------------------------------------------------------------------------- |
| `overflow(int_type c)`      | Output    | Called when the put area is full; writes buffered characters and optionally stores `c` |
| `underflow()`               | Input     | Called when the get area is empty; fills the get area from the source                  |
| `sync()`                    | Both      | Synchronizes the buffer with the external device (e.g., flushes to disk)               |
| `setbuf(char*, streamsize)` | Both      | Sets the internal buffer (called by `std::streambuf::pubsetbuf`)                       |

### 1.2 Standard Stream Buffer Specializations

The library provides three concrete stream buffer types [N4950 §30.4.2]:

**`std::basic_stringbuf<CharT>`** — reads from and writes to a `std::basic_string`. Used by `std::istringstream`, `std::ostringstream`, and `std::stringstream`. The buffer stores characters directly in a dynamically managed string, so no external device is involved [N4950 §30.4.2.3].

**`std::basic_filebuf<CharT>`** — reads from and writes to a file. Used by `std::ifstream`, `std::ofstream`, and `std::fstream`. Manages a `std::FILE*`-like resource internally, but with full C++ semantics (RAII, locale awareness, codecvt for character set conversion) [N4950 §30.4.2.4].

**`std::basic_spanbuf<CharT>`** (C++23) — reads from and writes to a contiguous sequence of characters described by a `std::span`. Unlike `stringbuf`, it does not own the underlying storage. This enables zero-copy I/O into pre-allocated buffers, which is critical in embedded systems and high-performance networking where allocation is forbidden [N4950 §30.4.2.5].

```cpp
#include <iostream>
#include <sstream>
#include <span>
#include <string>

void standard_streambuf_demo() {
    // stringbuf: backed by a std::string (owned)
    std::stringbuf sbuf;
    sbuf.sputn("hello, streambuf!", 17);
    std::cout << "stringbuf contents: " << sbuf.str() << "\n";

    // filebuf: backed by a file
    std::filebuf fbuf;
    fbuf.open("demo.txt", std::ios::out);
    fbuf.sputn("written via filebuf", 20);
    fbuf.close();
}

void spanbuf_demo() {
    // spanbuf (C++23): backed by a std::span (non-owning, zero-copy)
    char buffer[64]{};
    std::span<char> buf_span(buffer);
    std::spanbuf sbuf(buf_span);
    sbuf.sputn("zero-copy write", 15);
    // buffer now contains "zero-copy write"
}
```

:::tip
Prefer `std::spanbuf` over `std::stringbuf` when you need to write formatted output into a fixed-size pre-allocated buffer (e.g., a network packet buffer or embedded flash region). It avoids heap allocation entirely.
:::

### 1.3 Locale Facets

A **locale** in C++ is a collection of **facets** — polymorphic classes that encapsulate cultural conventions for text processing [N4950 §30.3]. The standard defines facets for character classification, numeric formatting, collation, time formatting, and message catalogs.

Each facet is identified by a `std::locale::id` static member and accessed via `std::use_facet<F>(loc)`. The locale object holds a reference-counted set of facets; copying a locale is cheap (shared ownership) [N4950 §30.3.1].

The standard facets [N4950 §30.3.1.1.2]:

| Facet                   | Header     | Purpose                                                  |
| :---------------------- | :--------- | :------------------------------------------------------- |
| `std::ctype<CharT>`     | `<locale>` | Character classification and case conversion             |
| `std::numpunct<CharT>`  | `<locale>` | Numeric punctuation (decimal point, thousands separator) |
| `std::collate<CharT>`   | `<locale>` | String collation (comparison ordering)                   |
| `std::time_get<CharT>`  | `<locale>` | Parsing time from character sequences                    |
| `std::time_put<CharT>`  | `<locale>` | Formatting time into character sequences                 |
| `std::money_get<CharT>` | `<locale>` | Parsing monetary values                                  |
| `std::money_put<CharT>` | `<locale>` | Formatting monetary values                               |
| `std::messages<CharT>`  | `<locale>` | Message catalog lookup (gettext-like)                    |

```cpp
#include <iostream>
#include <locale>
#include <string>
#include <vector>

void locale_facet_demo() {
    std::locale loc("");  // User's preferred locale from environment

    const auto& punct = std::use_facet<std::numpunct<char>>(loc);
    std::cout << "Decimal point:   '" << punct.decimal_point() << "'\n";
    std::cout << "Thousands sep:   '" << punct.thousands_sep() << "'\n";

    std::cout << "Grouping:        ";
    std::string grouping = punct.grouping();
    for (unsigned char g : grouping) {
        std::cout << static_cast<int>(g) << " ";
    }
    std::cout << "\n";

    const auto& ct = std::use_facet<std::ctype<char>>(loc);
    std::string text = "Hello World 123";
    std::vector<char> upper(text.size());
    ct.toupper(text.data(), text.data() + text.size());
    std::cout << "Uppercased:      " << text << "\n";
}
```

:::info
The default `"C"` locale uses `.` as the decimal point and has no thousands separator. The `""` locale (empty string) selects the user's preferred locale from environment variables (`LC_ALL`, `LC_NUMERIC`, `LANG`). Be aware that locale-sensitive operations are **not** thread-safe in the standard: `std::locale::global()` modifies a global variable and is not safe to call concurrently [N4950 §30.3.1.3].
:::

### 1.4 Custom Stream Buffer

The power of the stream buffer abstraction is that you can derive from `std::streambuf` to redirect I/O to any destination. The following example implements a logging stream buffer that prefixes each line with a timestamp and log level:

```cpp
#include <ctime>
#include <iostream>
#include <streambuf>
#include <string>
#include <string_view>

class LogStreamBuf : public std::streambuf {
    std::string     line_buffer_;
    std::string     level_;
    std::streambuf* sink_;

protected:
    int overflow(int c) override {
        if (c != std::streambuf::traits_type::eof()) {
            if (c == '\n') {
                flush_line();
            } else {
                line_buffer_.push_back(static_cast<char>(c));
            }
        }
        return c;
    }

    int sync() override {
        if (!line_buffer_.empty()) {
            flush_line();
        }
        return 0;
    }

    void flush_line() {
        std::string timestamp = current_time_string();
        std::string full_line = "[" + timestamp + "] [" + level_ + "] " + line_buffer_ + "\n";
        sink_->sputn(full_line.c_str(), static_cast<std::streamsize>(full_line.size()));
        line_buffer_.clear();
    }

    static std::string current_time_string() {
        std::time_t now = std::time(nullptr);
        char buf[32];
        std::strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", std::localtime(&now));
        return buf;
    }

public:
    explicit LogStreamBuf(std::string level, std::streambuf* sink = std::cout.rdbuf())
        : level_(std::move(level)), sink_(sink) {}
};

int main() {
    LogStreamBuf info_buf("INFO");
    LogStreamBuf warn_buf("WARN");
    LogStreamBuf err_buf("ERROR");

    std::ostream info_stream(&info_buf);
    std::ostream warn_stream(&warn_buf);
    std::ostream err_stream(&err_buf);

    info_stream << "Application started successfully\n";
    warn_stream << "Disk usage at 87%\n";
    err_stream << "Connection timeout after 30s\n";

    return 0;
}
```

Output (example):

```
[2026-03-31 14:22:01] [INFO] Application started successfully
[2026-03-31 14:22:01] [WARN] Disk usage at 87%
[2026-03-31 14:22:01] [ERROR] Connection timeout after 30s
```

:::tip
This pattern is used in production logging frameworks. The `overflow` override is called for each character written to the stream. Buffering the line and flushing on `\n` gives you control over the output format. For thread-safe logging, wrap the `sputn` call in a mutex.
:::

:::warning
Always override `sync()` in addition to `overflow()`. The `sync()` method is called by `std::flush` and `std::endl`. If you only override `overflow()`, manually flushed output (via `std::flush`) will not reach your sink.
:::

### 1.5 Connecting Stream Buffers to Streams

A stream (`std::istream`, `std::ostream`) does not own its stream buffer. You can redirect a stream to a different buffer at any time using `rdbuf()`:

```cpp
#include <fstream>
#include <iostream>
#include <sstream>

void rdbuf_redirection_demo() {
    std::ostringstream oss;
    auto* old_buf = std::cout.rdbuf(oss.rdbuf());

    std::cout << "This goes to the string stream, not the console.\n";

    std::cout.rdbuf(old_buf);  // Restore original buffer
    std::cout << "Captured: " << oss.str() << "\n";
}
```

This technique is used in unit testing to capture `std::cout` output for assertion. The call to `rdbuf(new_buf)` returns the previous buffer, which must be saved and restored to avoid dangling state.

---

## 2. Type-Safe Formatting (`std::format`, `std::print`)

### 2.1 `std::format` — Overview

`std::format` (C++20) is a type-safe formatting function that uses a format string to produce a `std::string` [N4950 §22.14.6]. Unlike `printf`, it checks argument types at compile time. Unlike iostreams, it uses a concise, composable format specification syntax.

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

`std::format` is declared in `<format>` [N4950 §22.14.1] and is part of the `std` namespace. It returns a `std::string` by value. The format string is checked at compile time for correctness — a mismatch between the format specification and the argument type is a compile-time error [N4950 §22.14.6.2].

:::info
The format string is a **constant expression** — it must be known at compile time. This enables the compiler to parse it and verify that every `{}` field has a corresponding argument of the correct type. Runtime-computed format strings are not supported by `std::format` (use `std::vformat` for runtime format strings, at the cost of losing compile-time checking).
:::

### 2.2 Format Specification Syntax

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
| `{}`         | Automatic indexing — arguments are consumed in order                |
| `{0}`, `{1}` | Manual indexing — refers to the argument at that position           |
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

| Align | Meaning                                 | Default for |
| :---- | :-------------------------------------- | :---------- |
| `<`   | Left-align                              | Strings     |
| `>`   | Right-align                             | Numbers     |
| `^`   | Center                                  | —           |
| `=`   | Pad after sign/0x prefix (numbers only) | —           |

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

| Specifier | Meaning                                                             |
| :-------- | :------------------------------------------------------------------ |
| `+`       | Always show sign for signed types (`+42`, `-7`)                     |
| `-`       | Only show sign for negative values (default)                        |
| (space)   | Show space for positive, minus for negative (` 42`, `-7`)           |
| `#`       | Alternate form: `0x` prefix for hex, `0b` for binary, `#` for octal |
| `0`       | Pad with zeros instead of spaces                                    |

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

Width specifies the minimum field width. Precision specifies the maximum number of characters for strings, or the number of digits after the decimal point for floating-point numbers [N4950 §22.14.2.2].

Both can be dynamic — supplied by a runtime argument using `{}` inside the format spec:

```cpp
#include <format>
#include <iostream>

void width_precision_demo() {
    std::cout << std::format("{:10.3f}\n", 3.14159);    // "     3.142"
    std::cout << std::format("{:.5}\n", "hello world");  // "hello"
    std::cout << std::format("{:.*f}\n", 4, 3.14159);   // "3.1416" (dynamic precision)
    std::cout << std::format("{:{}d}\n", 42, 8);        // "      42" (dynamic width)
}
```

:::warning
Dynamic width and precision use the next argument in the argument list. Mixing manual argument IDs with dynamic width/precision can lead to confusing index errors. When using dynamic width/precision, keep the argument ordering simple.
:::

#### Type Specifiers

| Type      | Meaning                          | Example                                    |
| :-------- | :------------------------------- | :----------------------------------------- |
| `d`       | Decimal integer                  | `{}` → `42`                                |
| `x` / `X` | Hexadecimal                      | `{}` → `2a` / `2A`                         |
| `o`       | Octal                            | `{}` → `52`                                |
| `b` / `B` | Binary                           | `{}` → `101010`                            |
| `f`       | Fixed-point                      | `{}` → `3.141593`                          |
| `e` / `E` | Scientific notation              | `{}` → `3.141593e+00`                      |
| `g` / `G` | General (shortest of `f` or `e`) | `{}` → `3.14159`                           |
| `a` / `A` | Hex float                        | `{}` → `0x1.921fb54411744p+1`              |
| `s`       | String                           | `{}` → `hello`                             |
| `c`       | Character                        | `{}` → `A`                                 |
| `p`       | Pointer                          | `{}` → `0x7ffc1234`                        |
| `?`       | Debug output (C++23)             | `{}` → `"hello"` (with quotes and escapes) |

### 2.3 Format Specification Reference Table

The following table provides a comprehensive reference for `std::format` specifications [N4950 §22.14.2]:

```cpp
#include <format>
#include <iostream>
#include <string>
#include <limits>

void format_reference_table() {
    // ── Integer formatting ──────────────────────────────────────────
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

    // ── Floating-point formatting ───────────────────────────────────
    std::cout << std::format("Fixed:        {:.4f}\n", 3.14159);     // 3.1416
    std::cout << std::format("Scientific:   {:.2e}\n", 3.14159);     // 3.14e+00
    std::cout << std::format("General:      {:.6g}\n", 3.14159);     // 3.14159
    std::cout << std::format("Hex float:    {:a}\n", 3.14);          // 0x1.91eb851eb851fp+1
    std::cout << std::format("Inf:          {:f}\n",
        std::numeric_limits<double>::infinity());                   // inf
    std::cout << std::format("NaN:          {:f}\n",
        std::numeric_limits<double>::quiet_NaN());                  // nan

    // ── String formatting ───────────────────────────────────────────
    std::cout << std::format("Left:         [{:<20}]\n", "left");    // [left                ]
    std::cout << std::format("Right:        [{:>20}]\n", "right");   // [               right]
    std::cout << std::format("Center:       [{:^20}]\n", "mid");     // [        mid         ]
    std::cout << std::format("Precision:    {:.3}\n", "truncate");   // tru
    std::cout << std::format("Fill char:    {:*^20}\n", "star");     // [********star********]

    // ── Pointer formatting ──────────────────────────────────────────
    int x = 42;
    std::cout << std::format("Pointer:      {:p}\n", static_cast<void*>(&x));
    // Pointer:      0x7ffd1234abcd (platform-dependent)

    // ── Boolean formatting ──────────────────────────────────────────
    std::cout << std::format("Bool text:    {:s}\n", true);          // true
    std::cout << std::format("Bool int:     {:d}\n", true);          // 1
}
```

### 2.4 `std::print` and `std::println` (C++23)

`std::print` (C++23) writes formatted output directly to stdout (or a file) without constructing an intermediate `std::string` [N4950 §22.14.6.4]. This avoids a heap allocation when the output is only needed on the console.

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

:::info
`std::print` is declared in `<print>` [N4950 §22.14.1]. It writes directly to the C `FILE*` stream, bypassing `std::cout` and its stream buffer. This makes it faster for simple console output but means it does not synchronize with `std::cout` by default. Avoid mixing `std::print(stdout, ...)` and `std::cout` in the same program without calling `std::ios_base::sync_with_stdio(true)` first.
:::

:::warning
`std::print` to stdout does **not** lock the stdout mutex by default. Concurrent calls to `std::print` from multiple threads can produce interleaved output. Use `std::print(stderr, ...)` for error messages (stderr is unbuffered) or protect stdout with a mutex.
:::

### 2.5 Custom Type Formatter

To make a user-defined type work with `std::format`, you must specialize `std::formatter<T>` for your type [N4950 §22.14.6.3]. The specialization must be placed in the `std` namespace and provide:

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

:::tip
Inheriting from `std::formatter<std::string>` (or any standard formatter) gives you access to the standard format specification parsing logic. If your custom type needs to support the full standard specification set (width, fill, alignment), parse the standard spec first with the base class's `parse()`, then check for your custom specifiers.
:::

:::warning
The specialization of `std::formatter` must be in namespace `std` for `std::format` to find it. However, adding declarations to namespace `std` is technically undefined behavior unless it is a **template specialization** of a standard library template [N4950 §16.5.4.2.1]. Specializing `std::formatter` is explicitly permitted.
:::

---

## 3. Unicode Support

### 3.1 Character Types for Unicode

C++ provides several fundamental character types to support Unicode [N4950 §6.2.5]:

| Type               | Size (guaranteed)        | Typical Use                                                 |
| :----------------- | :----------------------- | :---------------------------------------------------------- |
| `char`             | 1 byte (at least 8 bits) | ASCII, UTF-8 (as byte sequence)                             |
| `char8_t` (C++20)  | 1 byte, unsigned         | UTF-8 code units                                            |
| `char16_t` (C++11) | at least 16 bits         | UTF-16 code units                                           |
| `char32_t` (C++11) | at least 32 bits         | UTF-32 code units / single Unicode code point               |
| `wchar_t`          | implementation-defined   | Platform-wide encoding (UTF-16 on Windows, UTF-32 on Linux) |

`char8_t` was introduced in C++20 [N4950 §6.2.5] to distinguish UTF-8 byte sequences from plain `char` (which may be signed or unsigned depending on the platform). `char8_t` is an unsigned type distinct from both `unsigned char` and `char`, preventing accidental implicit conversions.

### 3.2 UTF-8 Encoding

UTF-8 is a variable-width encoding that represents every Unicode code point using 1 to 4 bytes [Unicode Standard, §3.9]:

| Code Point Range  | Binary Pattern                        | Bytes |
| :---------------- | :------------------------------------ | :---- |
| U+0000..U+007F    | `0xxxxxxx`                            | 1     |
| U+0080..U+07FF    | `110xxxxx 10xxxxxx`                   | 2     |
| U+0800..U+FFFF    | `1110xxxx 10xxxxxx 10xxxxxx`          | 3     |
| U+10000..U+10FFFF | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` | 4     |

UTF-8 has several properties that make it the dominant encoding for text interchange:

1. **ASCII compatibility:** All ASCII text (U+0000..U+007F) is valid UTF-8, encoded identically.
2. **Self-synchronization:** Any byte in a UTF-8 sequence can be identified as a leading byte or a continuation byte by its high bits. You can start scanning from any byte boundary and resynchronize.
3. **No byte-order issues:** UTF-8 is defined in terms of byte order, so no BOM (Byte Order Mark) is needed (though a BOM `U+FEFF` encoded as `EF BB BF` is sometimes prepended as a convention).

### 3.3 UTF-8 String Literals and `char8_t`

C++20 introduced `u8` string literals that produce `char8_t` sequences [N4950 §5.13.5]:

```cpp
#include <cstddef>
#include <cstdint>
#include <iostream>
#include <string_view>

void utf8_demo() {
    // u8 prefix produces char8_t array
    const char8_t* utf8_str = u8"Hello, 世界! 🌍";

    // The literal type is const char8_t[N]
    using LiteralType = decltype(u8"test");
    // LiteralType = const char8_t[5]

    // C++20: std::u8string holds char8_t characters
    std::u8string u8s = u8"Unicode support: αβγδ";

    // Byte count is NOT the same as character count
    std::cout << "Byte count: " << u8s.size() << "\n";
    // Byte count: 23 (each Greek letter is 2 bytes)

    // Accessing individual char8_t values gives bytes, not code points
    for (std::size_t i = 0; i < u8s.size(); ++i) {
        // u8s[i] is a single byte; may be a continuation byte
    }
}

void utf8_code_point_iteration() {
    // Decode UTF-8 code points from a char8_t string
    std::u8string_view text = u8"Hi 世界";

    std::size_t byte_pos = 0;
    std::size_t code_point_count = 0;

    while (byte_pos < text.size()) {
        char8_t lead = text[byte_pos];
        std::uint32_t code_point = 0;
        std::size_t bytes_in_char = 0;

        if ((lead & 0x80) == 0x00) {
            code_point = lead;
            bytes_in_char = 1;
        } else if ((lead & 0xE0) == 0xC0) {
            code_point = lead & 0x1F;
            bytes_in_char = 2;
        } else if ((lead & 0xF0) == 0xE0) {
            code_point = lead & 0x0F;
            bytes_in_char = 3;
        } else if ((lead & 0xF8) == 0xF0) {
            code_point = lead & 0x07;
            bytes_in_char = 4;
        }

        for (std::size_t j = 1; j < bytes_in_char; ++j) {
            code_point = (code_point << 6) | (text[byte_pos + j] & 0x3F);
        }

        byte_pos += bytes_in_char;
        ++code_point_count;
    }

    std::cout << "Code points: " << code_point_count << "\n";
    // Code points: 4 (H, i, 世, 界)
}
```

:::info
Before C++20, `u8` string literals produced `char` arrays. In C++20, they produce `char8_t` arrays. This is a **breaking change** if your code passed `u8"..."` to APIs expecting `const char*`. Use `-fno-char8_t` on GCC/Clang to revert to the C++17 behavior during migration.
:::

### 3.4 Unicode Text Processing Challenges

The C++ standard library provides minimal support for Unicode text processing beyond the encoding-aware character types. The following challenges must be addressed with care:

#### Code Point vs. Grapheme Cluster

A **code point** (a `char32_t` value) is not always a visible "character." Characters like `é` can be represented as:

- **NFC (Canonical Decomposition, then Composition):** `U+00E9` (1 code point)
- **NFD (Canonical Decomposition):** `U+0065 U+0301` (2 code points: `e` + combining acute accent)

A **grapheme cluster** is the smallest unit of text that a user perceives as a single character. The emoji family emoji 👨‍👩‍👧‍👦 is encoded as **7 code points** with zero-width joiners between them.

:::warning
`std::u8string::size()` returns the **byte count**, not the character count, code point count, or grapheme cluster count. There is no standard library function to count code points or grapheme clusters. For production Unicode text processing, use a library like ICU, libunifex, or `std::text` (proposed for standardization).
:::

#### String Length and Iteration

```cpp
#include <cstddef>
#include <cstdint>
#include <iostream>
#include <string>

void unicode_length_pitfalls() {
    std::string s = "é";  // NFD: 2 bytes (e + combining accent), NFC: 2 bytes (0xC3 0xA9)

    std::cout << "Byte count:    " << s.size() << "\n";     // 2
    std::cout << "Char count:    " << s.length() << "\n";   // 2 (same as size())
    // There is NO standard way to get "1" (the number of code points)
    // or "1" (the number of grapheme clusters) without a Unicode library
}

std::size_t count_utf8_code_points(std::string_view utf8) {
    std::size_t count = 0;
    for (std::size_t i = 0; i < utf8.size(); ) {
        unsigned char c = static_cast<unsigned char>(utf8[i]);
        if ((c & 0x80) == 0x00) {
            i += 1;
        } else if ((c & 0xE0) == 0xC0) {
            i += 2;
        } else if ((c & 0xF0) == 0xE0) {
            i += 3;
        } else {
            i += 4;
        }
        ++count;
    }
    return count;
}
```

#### Case Conversion and Collation

Standard `std::toupper` and `std::tolower` from `<cctype>` operate on `unsigned char` values and only handle ASCII [N4950 §29.4.2]. They cannot handle Unicode case conversion (e.g., German `ß` → `SS`, Greek `σ` → `Σ`).

Similarly, `std::sort` with `operator<` on strings performs byte-by-byte comparison, which is correct for ASCII but **not** for Unicode collation. The sort order of `"ä"` relative to `"z"` depends on the locale.

```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

void unicode_sorting_problem() {
    std::vector<std::string> words = {"strasse", "straße", "zylinder", "äpfel"};

    // Byte-level sort (ASCII/UTF-8 byte order)
    std::sort(words.begin(), words.end());
    // On most systems: "strasse", "zylinder", "äpfel", "straße"
    // This is WRONG for German collation: ä should sort near a, ß near ss

    // For correct Unicode-aware collation, use ICU's Collator or similar library
}
```

:::tip
For production Unicode-aware applications:

- **Case conversion:** Use ICU (`u_strToUpper`), or the `utf8proc` library.
- **Collation/sorting:** Use ICU's `Collator` with the appropriate locale.
- **Normalization:** Use ICU or `utf8proc` to normalize strings to NFC or NFD before comparison.
- **Text segmentation:** Use ICU's `BreakIterator` for grapheme cluster, word, and sentence boundaries.
  :::

### 3.5 Encoding in Stream I/O

`std::fstream` and `std::ifstream`/`std::ofstream` use the stream buffer's `std::codecvt` facet to convert between the external encoding (usually UTF-8) and the internal `char` encoding [N4950 §30.3.3]. However, `std::codecvt<char16_t, char, mbstate_t>` and `std::codecvt<char32_t, char, mbstate_t>` were **deprecated** in C++17 and may be removed in a future standard.

For reading and writing UTF-8 text files, the simplest approach on modern systems (where the native encoding is UTF-8) is to use binary mode and `char`:

```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
#include <string>

void read_utf8_file(const std::filesystem::path& path) {
    // Open in binary mode to avoid locale-mediated encoding conversions
    std::ifstream file(path, std::ios::binary);
    if (!file) {
        std::cerr << "Cannot open file: " << path << "\n";
        return;
    }

    std::string content(std::istreambuf_iterator<char>(file), {});
    // content now holds the raw UTF-8 bytes

    // For text operations, use a Unicode-aware library to decode
    std::cout << "Read " << content.size() << " bytes\n";
}

void write_utf8_file(const std::filesystem::path& path, std::string_view content) {
    std::ofstream file(path, std::ios::binary);
    if (!file) {
        std::cerr << "Cannot open file for writing: " << path << "\n";
        return;
    }
    file.write(content.data(), static_cast<std::streamsize>(content.size()));
}
```

:::info
On Linux and macOS, the default file encoding is UTF-8, so opening a file in text mode (`std::ios::in` without `std::ios::binary`) will correctly read and write UTF-8 text. On Windows, text mode performs CRLF ↔ LF translation, which corrupts binary data but is harmless for UTF-8 text (unless the text contains lone `0x0A` or `0x0D` bytes that are not line endings).
:::

---

## Summary

| Feature                       | Header         | Standard | Purpose                                  |
| :---------------------------- | :------------- | :------- | :--------------------------------------- |
| `std::streambuf`              | `<streambuf>`  | C++98    | Low-level I/O buffer abstraction         |
| `std::stringbuf`              | `<sstream>`    | C++98    | String-backed stream buffer              |
| `std::filebuf`                | `<fstream>`    | C++98    | File-backed stream buffer                |
| `std::spanbuf`                | `<spanstream>` | C++23    | Span-backed stream buffer (non-owning)   |
| `std::numpunct`, `std::ctype` | `<locale>`     | C++98    | Locale facets for formatting             |
| `std::format`                 | `<format>`     | C++20    | Type-safe format strings → `std::string` |
| `std::print`                  | `<print>`      | C++23    | Type-safe formatted output to `FILE*`    |
| `std::println`                | `<print>`      | C++23    | `std::print` + newline                   |
| `std::formatter<T>`           | `<format>`     | C++20    | Custom formatter specialization          |
| `char8_t`, `std::u8string`    | —              | C++20    | UTF-8 character type and string          |
| `char16_t`, `char32_t`        | —              | C++11    | UTF-16, UTF-32 character types           |
