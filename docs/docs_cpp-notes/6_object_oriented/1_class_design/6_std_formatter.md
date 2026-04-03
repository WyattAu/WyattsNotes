---
title: Custom Formatting with std::formatter
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: std-formatter
---

# Custom Formatting: Extending `std::formatter`

C++20 introduced `<format>`, providing type-safe text formatting through `std::format`. To enable
formatting for user-defined types, you specialize `std::formatter<T, CharT>` in namespace `std`.
This section covers the specialization API, custom format specifiers, and practical examples.

## 6.1 `std::formatter<T, CharT>` Specialization [N4950 §22.14.4]

To enable formatting for a user-defined type, you specialize `std::formatter<T, CharT>` in namespace
`std`. The specialization must provide two member functions:

1. **`constexpr auto parse(format_parse_context& ctx)`**: Parses format specifiers from the format
   string. Returns an iterator pointing past the last character consumed.
2. **`auto format(const T& obj, format_context& ctx) const`**: Formats the object and writes the
   output. Returns an iterator past the last character written.

## 6.2 Formatter for an Enum Class

```cpp
#include <format>
#include <iostream>
#include <string_view>
#include <array>
#include <stdexcept>

enum class Color { Red, Green, Blue };

template<>
struct std::formatter<Color, char> {
    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format specifier for Color");
        return it;
    }

    auto format(Color c, format_context& ctx) const {
        constexpr std::array names = {"Red", "Green", "Blue"};
        return std::format_to(ctx.out(), "{}", names[static_cast<int>(c)]);
    }
};

int main() {
    Color c = Color::Green;
    std::cout << std::format("Color: {}\n", c);
    std::cout << std::format("Palette: {}, {}, {}\n",
        Color::Red, Color::Green, Color::Blue);
}
```

## 6.3 Formatter for `Vec3` with Configurable Output

This example demonstrates format specifiers that control output precision and format style:

```cpp
#include <cmath>
#include <format>
#include <iostream>
#include <string>
#include <string_view>

struct Vec3 {
    double x, y, z;
};

template<>
struct std::formatter<Vec3, char> {
    char presentation = 'n';   // 'n' = normal, 'c' = compact, 'p' = parenthesized
    int precision = -1;

    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end()) {
            presentation = *it;
            ++it;
        }

        if (it != ctx.end() && *it == '.') {
            ++it;
            int prec = 0;
            while (it != ctx.end() && *it != '}') {
                prec = prec * 10 + (*it - '0');
                ++it;
            }
            precision = prec;
        }

        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format specifier for Vec3");

        return it;
    }

    auto format(const Vec3& v, format_context& ctx) const {
        std::string spec;
        if (precision >= 0)
            spec = std::format(".{}f", precision);

        auto fmt_component = [&](double val) {
            if (precision >= 0)
                return std::format(std::locale::classic(), "{:" + spec + "}", val);
            return std::format("{}", val);
        };

        std::string sx = fmt_component(v.x);
        std::string sy = fmt_component(v.y);
        std::string sz = fmt_component(v.z);

        if (presentation == 'c') {
            return std::format_to(ctx.out(), "{},{},{}", sx, sy, sz);
        } else if (presentation == 'p') {
            return std::format_to(ctx.out(), "({},{},{})", sx, sy, sz);
        } else {
            return std::format_to(ctx.out(), "Vec3({}, {}, {})", sx, sy, sz);
        }
    }
};

int main() {
    Vec3 v{1.0 / 3.0, 2.0 / 3.0, std::sqrt(2.0)};

    std::cout << std::format("Default:    {}\n", v);
    std::cout << std::format("Compact:    {:c}\n", v);
    std::cout << std::format("Precision:  {:n.2}\n", v);
    std::cout << std::format("Paren:      {:p.4}\n", v);
}
```

Expected output:

```
Default:    Vec3(0.333333, 0.666667, 1.41421)
Compact:    0.333333,0.666667,1.41421
Precision:  Vec3(0.33, 0.67, 1.41)
Paren:      (0.3333, 0.6667, 1.4142)
```

## 6.4 Format Specifiers: Width, Fill, and Alignment

Standard format specifiers support width, fill character, and alignment. A custom formatter can
forward these to the underlying `format_to` call:

```cpp
#include <format>
#include <iostream>
#include <string>

struct Boxed {
    std::string label;
    double value;
};

template<>
struct std::formatter<Boxed, char> {
    template<typename ParseCtx>
    constexpr auto parse(ParseCtx& ctx) {
        return ctx.begin();
    }

    template<typename FmtCtx>
    auto format(const Boxed& b, FmtCtx& ctx) const {
        return std::format_to(ctx.out(), "[{} = {}]", b.label, b.value);
    }
};

int main() {
    Boxed b{"pi", 3.14159};

    std::cout << std::format("{}\n", b);
    std::cout << std::format("{:>30}\n", b);
    std::cout << std::format("{:*<30}\n", b);
    std::cout << std::format("{:^30}\n", b);
}
```

:::info C++23 Extension C++23 adds `std::formatter` specializations for `std::optional<T>`,
`std::variant<Ts...>`, and other standard library types, reducing the need for custom
specializations in many cases. :::

## See Also

- [Operator Overloading](./4_operator_overloading.md)
- [The Spaceship Operator](./5_spaceship_operator.md)

## 6.5 Formatter for Containers and Compound Types

Formatting containers requires iterating over their elements. The formatter can delegate to the
element type's formatter for each item.

### Container Formatter

```cpp
#include <format>
#include <iostream>
#include <vector>
#include <string>

template<typename T>
struct std::formatter<std::vector<T>, char> {
    char delim = ',';
    char open = '[';
    char close = ']';

    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end() && *it != '}') {
            delim = *it++;
        }
        if (it != ctx.end() && *it != '}') {
            open = *it++;
        }
        if (it != ctx.end() && *it != '}') {
            close = *it++;
        }
        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format for vector");
        return it;
    }

    auto format(const std::vector<T>& v, std::format_context& ctx) const {
        auto out = ctx.out();
        out = std::format_to(out, "{}", open);
        for (std::size_t i = 0; i < v.size(); ++i) {
            if (i > 0) out = std::format_to(out, "{}", delim);
            if constexpr (requires { std::format("{}", v[i]); }) {
                out = std::format_to(out, "{}", v[i]);
            }
        }
        return std::format_to(out, "{}", close);
    }
};

int main() {
    std::vector<int> nums{1, 2, 3, 4, 5};
    std::vector<std::string> words{"hello", "world"};

    std::cout << std::format("Default: {}\n", nums);
    std::cout << std::format("Semicolon: {:;()}\n", nums);
    std::cout << std::format("Pipe: {:|<>}\n", words);
}
// Output:
// Default: [1,2,3,4,5]
// Semicolon: (1;2;3;4;5)
// Pipe: <hello|world>
```

### Pair and Tuple Formatter

```cpp
#include <format>
#include <iostream>
#include <utility>
#include <tuple>

template<typename T, typename U>
struct std::formatter<std::pair<T, U>, char> {
    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format for pair");
        return it;
    }

    auto format(const std::pair<T, U>& p, std::format_context& ctx) const {
        return std::format_to(ctx.out(), "({}, {})", p.first, p.second);
    }
};

template<typename... Ts>
struct std::formatter<std::tuple<Ts...>, char> {
    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format for tuple");
        return it;
    }

    auto format(const std::tuple<Ts...>& t, std::format_context& ctx) const {
        auto out = ctx.out();
        out = std::format_to(out, "(");
        std::apply([&](const auto&... args) {
            bool first = true;
            ((out = std::format_to(out, "{}{}",
                first ? (first = false, "") : ", ", args)), ...);
        }, t);
        return std::format_to(out, ")");
    }
};

int main() {
    auto p = std::make_pair(42, "hello");
    auto t = std::make_tuple(1, 2.0, "three");

    std::cout << std::format("Pair: {}\n", p);
    std::cout << std::format("Tuple: {}\n", t);
}
// Output:
// Pair: (42, hello)
// Tuple: (1, 2, three)
```

## 6.6 Integration with `std::format` and `std::print`

Once a `std::formatter` specialization exists for a type, it works seamlessly with all formatting
facilities:

```cpp
#include <format>
#include <iostream>
#include <string>

struct LogEntry {
    std::string level;
    std::string message;
    double timestamp;
};

template<>
struct std::formatter<LogEntry, char> {
    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format for LogEntry");
        return it;
    }

    auto format(const LogEntry& e, std::format_context& ctx) const {
        return std::format_to(ctx.out(), "[{:.3f}] {}: {}",
            e.timestamp, e.level, e.message);
    }
};

int main() {
    LogEntry entry{"INFO", "Server started", 1234.56789};

    // std::format — returns string
    std::string s = std::format("{}", entry);
    std::cout << s << "\n";

    // std::format_to — writes to iterator
    std::string buf;
    std::format_to(std::back_inserter(buf), "  >> {}\n", entry);
    std::cout << buf;

    // std::print (C++23) — writes to stdout
    std::print("  {}\n", entry);
}
// Output:
// [1234.568] INFO: Server started
//   >> [1234.568] INFO: Server started
//   [1234.568] INFO: Server started
```

## 6.7 Debugging Formatters

A common pattern is to provide a detailed debug formatter that shows all fields, distinct from the
default human-readable format. Use format specifiers to switch between modes:

```cpp
#include <format>
#include <iostream>
#include <string>
#include <cstdint>

struct NetworkPacket {
    std::uint32_t src_ip;
    std::uint32_t dst_ip;
    std::uint16_t src_port;
    std::uint16_t dst_port;
    std::uint8_t protocol;
    std::size_t payload_size;
};

template<>
struct std::formatter<NetworkPacket, char> {
    char presentation = 's';  // 's' = summary, 'd' = debug, 'h' = hex

    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end() && *it != '}') {
            presentation = *it++;
        }
        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format for NetworkPacket");
        return it;
    }

    auto format(const NetworkPacket& p, std::format_context& ctx) const {
        auto fmt_ip = [](std::uint32_t ip) -> std::string {
            return std::format("{}.{}.{}.{}",
                (ip >> 24) & 0xFF, (ip >> 16) & 0xFF,
                (ip >> 8) & 0xFF, ip & 0xFF);
        };

        if (presentation == 'd') {
            return std::format_to(ctx.out(),
                "NetworkPacket {{\n"
                "  src_ip: {} ({:#010x})\n"
                "  dst_ip: {} ({:#010x})\n"
                "  src_port: {}\n"
                "  dst_port: {}\n"
                "  protocol: {}\n"
                "  payload_size: {}\n"
                "}}",
                fmt_ip(p.src_ip), p.src_ip,
                fmt_ip(p.dst_ip), p.dst_ip,
                p.src_port, p.dst_port,
                static_cast&lt;int&gt;(p.protocol),
                p.payload_size);
        } else if (presentation == 'h') {
            return std::format_to(ctx.out(),
                "{:08X}:{:04X} -> {:08X}:{:04X} proto={} len={}",
                p.src_ip, p.src_port,
                p.dst_ip, p.dst_port,
                static_cast&lt;int&gt;(p.protocol),
                p.payload_size);
        } else {
            return std::format_to(ctx.out(),
                "{}:{} -> {}:{} ({}, {} bytes)",
                fmt_ip(p.src_ip), p.src_port,
                fmt_ip(p.dst_ip), p.dst_port,
                static_cast&lt;int&gt;(p.protocol),
                p.payload_size);
        }
    }
};

int main() {
    NetworkPacket pkt{
        0xC0A80001,  // 192.168.0.1
        0x08080808,  // 8.8.8.8
        12345,
        443,
        6,           // TCP
        1024
    };

    std::cout << "Summary: " << std::format("{}", pkt) << "\n\n";
    std::cout << "Debug:\n" << std::format("{:d}", pkt) << "\n";
    std::cout << "Hex: " << std::format("{:h}", pkt) << "\n";
}
```

## 6.8 Comparison with `operator<<`

| Aspect                | `operator<<`                    | `std::formatter`                                   |
| :-------------------- | :------------------------------ | :------------------------------------------------- |
| Defined in            | Global scope (free function)    | `namespace std` (specialization)                   |
| Format control        | None (fixed format)             | Format specifiers (width, precision, custom flags) |
| Compile-time checking | None                            | Format string checked at compile time              |
| Return type           | `std::ostream&`                 | Iterator (composable with `std::format_to`)        |
| Composability         | Chained via `<<`                | Nested via `std::format` calls                     |
| Performance           | Virtual dispatch per `<<`       | No virtual dispatch; compile-time resolved         |
| C++ standard          | C++98                           | C++20                                              |
| Output target         | `std::ostream` only             | Any output iterator (string, file, stdout, etc.)   |
| Locale support        | Via `std::locale` imbued stream | Via `std::format` locale parameter                 |
| Default formatting    | Required for many types         | Required only for `std::format` usage              |

### When to Use Which

- **Use `std::formatter`** when you need format control, compile-time checking, or integration with
  `std::format`/`std::print`. This should be the default for new code.
- **Use `operator<<`** when interfacing with legacy code that uses `std::ostream`, or when you need
  streaming output (e.g., logging frameworks that accept `std::ostream&`).
- **Provide both** for maximum compatibility. The formatter can delegate to a common formatting
  function.

```cpp
#include <format>
#include <iostream>
#include <sstream>

struct Point {
    double x, y;
};

// Common formatting logic
std::string format_point(const Point& p, char mode = 'n') {
    if (mode == 'p')
        return std::format("({:.2f}, {:.2f})", p.x, p.y);
    return std::format("Point(x={:.2f}, y={:.2f})", p.x, p.y);
}

// std::formatter specialization
template<>
struct std::formatter<Point, char> {
    char mode = 'n';
    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end() && *it != '}') mode = *it++;
        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format for Point");
        return it;
    }
    auto format(const Point& p, std::format_context& ctx) const {
        return std::format_to(ctx.out(), "{}", format_point(p, mode));
    }
};

// operator<< for ostream compatibility
std::ostream& operator<<(std::ostream& os, const Point& p) {
    return os << format_point(p);
}

int main() {
    Point p{3.14159, 2.71828};

    // Via std::formatter
    std::cout << std::format("{}\n", p);
    std::cout << std::format("{:p}\n", p);

    // Via operator<<
    std::cout << p << "\n";
}
```

## Common Pitfalls

- **Specializing `std::formatter` in the wrong namespace.** The specialization must be in
  `namespace std`. Defining it in your own namespace will not be found by argument-dependent lookup
  for `std::format`.
- **Returning the wrong iterator from `parse`.** `parse` must return an iterator pointing past the
  last consumed character, typically `ctx.end()` or the position of `}`. Returning the wrong
  iterator causes format string parsing errors.
- **Throwing from `parse` for valid specifiers.** Only throw `std::format_error` for genuinely
  invalid specifiers. Valid specifiers should be consumed silently.
- **Not handling empty format specifiers.** When the format string is `{:}`, the `parse` function is
  called with `ctx.begin() == ctx.end()` (before the `}`). Always handle this case.
- **Format specifiers in `std::formatter` for `std::optional`.** C++23 provides a built-in formatter
  for `std::optional<T>` that delegates to `T`'s formatter. Do not specialize `std::formatter` for
  `std::optional` yourself unless you have a specific reason.
