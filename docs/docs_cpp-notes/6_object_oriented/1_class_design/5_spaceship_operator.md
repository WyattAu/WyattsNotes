---
title: The Spaceship Operator
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: spaceship-operator
---

# The Spaceship Operator (`<=>`) and Default Comparisons

C++20 introduced the three-way comparison operator `<=>` (the "spaceship operator") as a unified
mechanism for defining all relational comparisons in a single declaration. Combined with
`= default`, it dramatically reduces boilerplate for comparable types.

## 5.1 Three-Way Comparison [N4950 §11.4.5.4]

C++20 introduced the **spaceship operator** `<=>` as a unified comparison mechanism. It returns one
of three comparison category types from `<compare>`:

| Category                | Meaning                                      | Total ordering? | Equality substitutable? |
| ----------------------- | -------------------------------------------- | :-------------: | :---------------------: |
| `std::strong_ordering`  | Total, with substitutable equality           |       Yes       |           Yes           |
| `std::weak_ordering`    | Total, but equality may not be substitutable |       Yes       |           No            |
| `std::partial_ordering` | Partial (incomparable values possible)       |       No        |           No            |

$$
\texttt{strong\_ordering} \subset \texttt{weak\_ordering} \subset \texttt{partial\_ordering}
$$

The implicit conversion rules allow a `strong_ordering` to be used where a `weak_ordering` or
`partial_ordering` is expected, and a `weak_ordering` to be used where a `partial_ordering` is
expected.

## 5.2 Default Comparisons with `= default`

When you write `auto operator<=>(const T&) const = default;`, the compiler generates the `<=>`
operator by lexicographically comparing each non-static data member in declaration order [N4950
§11.4.5.4]. Furthermore, if `<=>` is defaulted and returns `std::strong_ordering`, the compiler also
synthesizes the six relational operators: `==`, `!=`, `<`, `>`, `<=`, `>=`.

```cpp
#include <compare>
#include <cstdio>
#include <string>

struct Version {
    int major = 0;
    int minor = 0;
    int patch = 0;

    std::strong_ordering operator<=>(const Version&) const = default;
};

struct Config {
    std::string name;
    int priority = 0;

    auto operator<=>(const Config&) const = default;
};

int main() {
    Version v1{1, 2, 3};
    Version v2{1, 2, 4};
    Version v3{1, 2, 3};

    static_assert(v1 < v2);
    static_assert(v2 > v1);
    static_assert(v1 == v3);
    static_assert(v1 != v2);
    static_assert(v1 <= v3);
    static_assert(v1 >= v3);

    Config c1{"alpha", 1};
    Config c2{"beta", 0};
    // Compares name first (lexicographic), then priority
    std::printf("c1 <=> c2: %s\n", c1 < c2 ? "less" : "greater");
}
```

## 5.3 Comparison Categories in Detail

```cpp
#include <compare>
#include <cstdio>
#include <iostream>
#include <cmath>

struct Finite {
    double value;
    std::partial_ordering operator<=>(const Finite&) const = default;
};

struct WithNaN {
    double value;

    std::partial_ordering operator<=>(const WithNaN& other) const {
        if (std::isnan(value) || std::isnan(other.value))
            return std::partial_ordering::unordered;
        return value <=> other.value;
    }

    bool operator==(const WithNaN& other) const {
        return (*this <=> other) == std::partial_ordering::equivalent;
    }
};

int main() {
    auto ord = 42 <=> 43;
    static_assert(std::is_same_v<decltype(ord), std::strong_ordering>);
    std::printf("42 <=> 43 is %s\n",
        ord < 0 ? "less" : ord > 0 ? "greater" : "equal");

    WithNaN a{1.0};
    WithNaN b{std::nan("")};
    auto cmp = a <=> b;
    std::printf("1.0 <=> NaN is %s\n",
        cmp == std::partial_ordering::unordered ? "unordered" : "ordered");
}
```

## 5.4 Custom `<=>` for Case-Insensitive String Comparison

```cpp
#include <algorithm>
#include <cctype>
#include <compare>
#include <cstdio>
#include <string>
#include <string_view>

struct CaseInsensitiveString {
    std::string data;

    CaseInsensitiveString() = default;
    CaseInsensitiveString(std::string_view sv) : data(sv) {}

    std::strong_ordering operator<=>(const CaseInsensitiveString& other) const {
        auto to_lower = [](unsigned char c) -> char {
            return static_cast<char>(std::tolower(c));
        };

        std::string a = data;
        std::string b = other.data;
        std::transform(a.begin(), a.end(), a.begin(), to_lower);
        std::transform(b.begin(), b.end(), b.begin(), to_lower);

        if (a < b) return std::strong_ordering::less;
        if (a > b) return std::strong_ordering::greater;
        return std::strong_ordering::equal;
    }

    bool operator==(const CaseInsensitiveString& other) const {
        return (*this <=> other) == std::strong_ordering::equal;
    }
};

int main() {
    CaseInsensitiveString s1{"Hello"};
    CaseInsensitiveString s2{"HELLO"};
    CaseInsensitiveString s3{"World"};

    static_assert(s1 == s2);
    static_assert(s1 < s3);
    static_assert(s3 > s1);

    std::printf("\"Hello\" == \"HELLO\": %s\n", s1 == s2 ? "true" : "false");
    std::printf("\"Hello\" <  \"World\": %s\n", s1 < s3 ? "true" : "false");
}
```

:::warning Performance Note The above implementation allocates temporary strings for each
comparison. For performance-critical code, implement a locale-aware character-by-character
comparison that avoids allocation. :::

## See Also

- [Operator Overloading](./4_operator_overloading.md)
- [Custom Formatting: std::formatter](./6_std_formatter.md)
