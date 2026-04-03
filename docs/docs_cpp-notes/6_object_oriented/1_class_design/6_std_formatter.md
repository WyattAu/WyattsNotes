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
