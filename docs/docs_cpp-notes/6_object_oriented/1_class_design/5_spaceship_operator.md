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

:::warning
Performance Note The above implementation allocates temporary strings for each
comparison. For performance-critical code, implement a locale-aware character-by-character
comparison that avoids allocation.
:::

## See Also

- [Operator Overloading](./4_operator_overloading.md)
- [Custom Formatting: std::formatter](./6_std_formatter.md)

## 5.5 Auto-Generation of Comparison Operators

When `operator<=>` is defaulted and returns `std::strong_ordering`, the compiler **automatically
synthesizes** all six relational operators: `==`, `!=`, `<`, `>`, `<=`, `>=` [N4950 §11.4.5.4]. The
synthesized operators use the `<=>` result and `==` for equality.

### When Synthesis Does Not Occur

| Condition                              | Synthesized Operators?                                          |
| :------------------------------------- | :-------------------------------------------------------------- |
| `= default` returns `strong_ordering`  | Yes — all six operators                                         |
| `= default` returns `weak_ordering`    | Yes — all six operators                                         |
| `= default` returns `partial_ordering` | Yes — all six operators                                         |
| `operator<=>` is user-defined          | Only `!=`, `<`, `>`, `<=`, `>=` (if `==` is separately defined) |
| Only `operator==` is defined           | `!=` is synthesized, but not ordering operators                 |

```cpp
#include <compare>
#include <cassert>

struct Point {
    int x, y;
    auto operator<=>(const Point&) const = default;
};

struct Partial {
    double value;
    std::partial_ordering operator<=>(const Partial&) const = default;
};

struct OnlyEq {
    int id;
    bool operator==(const OnlyEq&) const = default;
};

int main() {
    Point a{1, 2}, b{1, 3}, c{1, 2};

    static_assert(a < b);
    static_assert(b > a);
    static_assert(a == c);
    static_assert(a != b);
    static_assert(a <= c);
    static_assert(a >= c);

    // Partial ordering with NaN
    Partial p1{1.0};
    Partial p2{__builtin_nan("")};
    // p1 <=> p2 is unordered — comparisons return false
    assert(!(p1 < p2));
    assert(!(p2 < p1));
    assert(!(p1 == p2));

    // OnlyEq: only == and != are synthesized
    OnlyEq e1{1}, e2{2}, e3{1};
    static_assert(e1 == e3);
    static_assert(e1 != e2);
    // e1 < e2 would not compile — no ordering operators synthesized
}
```

## 5.6 Partial Ordering vs Strong Ordering vs Weak Ordering

The three comparison category types form a hierarchy with different guarantees:

### `std::strong_ordering`

A **total ordering** where equivalent values are fully substitutable. If `a == b`, then
`f(a) == f(b)` for all operations `f`.

**Use when:** The type has natural, unambiguous ordering (integers, strings, version numbers).

```cpp
#include <compare>
#include <cassert>

struct Version {
    int major, minor, patch;
    std::strong_ordering operator<=>(const Version&) const = default;
};

int main() {
    Version a{1, 0, 0};
    Version b{1, 0, 0};
    assert(a == b);
    assert(a <=> b == std::strong_ordering::equal);
}
```

### `std::weak_ordering`

A **total ordering** where equivalent values may not be substitutable. This arises with types that
use case-insensitive comparison: `"ABC"` and `"abc"` are equivalent for ordering purposes, but are
not the same value.

**Use when:** You need a total order but equality has a broader definition than identity.

```cpp
#include <compare>
#include <string>
#include <algorithm>

struct CaseInsensitiveString {
    std::string data;

    std::weak_ordering operator<=>(const CaseInsensitiveString& other) const {
        std::string a = data, b = other.data;
        std::transform(a.begin(), a.end(), a.begin(), ::tolower);
        std::transform(b.begin(), b.end(), b.begin(), ::tolower);
        if (a < b) return std::weak_ordering::less;
        if (a > b) return std::weak_ordering::greater;
        return std::weak_ordering::equivalent;
    }

    bool operator==(const CaseInsensitiveString& other) const {
        // Identity-based equality (not case-insensitive)
        return data == other.data;
    }
};

int main() {
    CaseInsensitiveString a{"Hello"};
    CaseInsensitiveString b{"hello"};
    // a <=> b is equivalent (weak_ordering::equivalent)
    // but a == b is false (identity-based)
    // This is why weak_ordering exists: ordering != equality
}
```

### `std::partial_ordering`

A **partial ordering** where some pairs of values are incomparable. The classic example is
floating-point numbers with NaN.

**Use when:** The type may contain values that cannot be meaningfully compared (floating-point NaN,
optional values, etc.).

```cpp
#include <compare>
#include <cmath>
#include <iostream>

struct Measurement {
    double value;
    double uncertainty;

    std::partial_ordering operator<=>(const Measurement& other) const {
        // If ranges overlap, values are incomparable
        double a_lo = value - uncertainty;
        double a_hi = value + uncertainty;
        double b_lo = other.value - other.uncertainty;
        double b_hi = other.value + other.uncertainty;

        if (a_hi < b_lo) return std::partial_ordering::less;
        if (a_lo > b_hi) return std::partial_ordering::greater;
        if (a_lo <= b_lo && a_hi >= b_hi) {
            // Check for NaN
            if (std::isnan(value) || std::isnan(other.value))
                return std::partial_ordering::unordered;
            return std::partial_ordering::equivalent;
        }
        return std::partial_ordering::unordered;
    }

    bool operator==(const Measurement& other) const {
        return (*this <=> other) == std::partial_ordering::equivalent;
    }
};

int main() {
    Measurement a{10.0, 0.5};   // [9.5, 10.5]
    Measurement b{11.0, 0.5};   // [10.5, 11.5]
    Measurement c{10.5, 1.0};   // [9.5, 11.5]

    auto cmp_ab = a <=> b;
    auto cmp_ac = a <=> c;

    std::cout << "a vs b: "
              << (cmp_ab == std::partial_ordering::less ? "less" :
                  cmp_ab == std::partial_ordering::equivalent ? "equiv" : "unordered")
              << "\n";
    // a vs b: less (10.5 < 10.5 is false, but a_hi < b_lo when strict: 10.5 < 10.5)

    std::cout << "a vs c: "
              << (cmp_ac == std::partial_ordering::less ? "less" :
                  cmp_ac == std::partial_ordering::equivalent ? "equiv" : "unordered")
              << "\n";
    // a vs c: unordered (ranges overlap and neither fully contains the other)
}
```

## 5.7 Integration with `std::set` and `std::map`

`std::set` and `std::map` require a strict weak ordering (`operator<`). The spaceship operator
provides this automatically when defaulted, but the interaction with associative containers has
nuances.

### Defaulted `<=>` with `std::set`

```cpp
#include <set>
#include <map>
#include <compare>
#include <string>
#include <iostream>

struct Employee {
    std::string name;
    int id;
    double salary;

    auto operator<=>(const Employee&) const = default;
    // Lexicographic comparison: name, then id, then salary
};

int main() {
    std::set<Employee> staff;
    staff.insert(Employee{"Alice", 1, 50000.0});
    staff.insert(Employee{"Bob", 2, 60000.0});
    staff.insert(Employee{"Alice", 0, 55000.0});  // Different id, comes before Alice/1

    for (const auto& e : staff) {
        std::cout << e.name << " (id=" << e.id << ")\n";
    }
    // Output:
    //   Alice (id=0)
    //   Alice (id=1)
    //   Bob (id=2)

    std::map<Employee, std::string> roles;
    roles[Employee{"Alice", 1, 50000.0}] = "Engineer";
    roles[Employee{"Bob", 2, 60000.0}] = "Manager";

    std::cout << "Alice's role: " << roles[Employee{"Alice", 1, 50000.0}] << "\n";
}
```

### Custom Comparator with `<=>`

For non-default ordering (e.g., sorting by `id` only), provide a custom comparator:

```cpp
#include <set>
#include <compare>
#include <iostream>

struct Employee {
    std::string name;
    int id;
    double salary;

    auto operator<=>(const Employee&) const = default;
};

struct ById {
    bool operator()(const Employee& a, const Employee& b) const {
        return a.id < b.id;
    }
};

int main() {
    std::set<Employee, ById> staff;
    staff.insert(Employee{"Alice", 3, 50000.0});
    staff.insert(Employee{"Bob", 1, 60000.0});
    staff.insert(Employee{"Charlie", 2, 55000.0});

    for (const auto& e : staff) {
        std::cout << e.name << " (id=" << e.id << ")\n";
    }
    // Sorted by id: Bob, Charlie, Alice
}
```

## 5.8 Comparison with Legacy `<` Overloading

Before C++20, comparison operators had to be individually overloaded. The spaceship operator
replaces this with a single declaration.

### Legacy Approach (C++98–C++17)

```cpp
#include <iostream>

struct Version {
    int major, minor, patch;

    bool operator==(const Version& o) const {
        return major == o.major && minor == o.minor && patch == o.patch;
    }
    bool operator!=(const Version& o) const { return !(*this == o); }
    bool operator<(const Version& o) const {
        if (major != o.major) return major < o.major;
        if (minor != o.minor) return minor < o.minor;
        return patch < o.patch;
    }
    bool operator<=(const Version& o) const { return !(o < *this); }
    bool operator>(const Version& o) const { return o < *this; }
    bool operator>=(const Version& o) const { return !(*this < o); }
};

int main() {
    Version a{1, 2, 3};
    Version b{1, 2, 4};
    std::cout << std::boolalpha << (a < b) << "\n";  // true
}
```

### C++20 Approach

```cpp
#include <compare>
#include <iostream>

struct Version {
    int major, minor, patch;
    std::strong_ordering operator<=>(const Version&) const = default;
};

int main() {
    Version a{1, 2, 3};
    Version b{1, 2, 4};
    std::cout << std::boolalpha << (a < b) << "\n";  // true
    // All 6 operators synthesized from the single defaulted <=>
}
```

### Advantages of `<=>` over Legacy

1. **Single point of truth.** One declaration instead of six (or four with the `<` + `==` trick).
2. **Consistency.** Impossible to have `operator<` and `operator==` disagree.
3. **Correctness.** Compiler-generated comparisons are always consistent with the defined ordering.
4. **Performance.** No risk of calling `operator<` twice to compute `operator<=`.

## Common Pitfalls

- **Defaulting `<=>` on types with `bool` and floating-point members.** `bool` uses
  `strong_ordering`, but `double` uses `partial_ordering`. When mixed in a struct, the defaulted
  `<=>` returns `partial_ordering` (the weakest category among the members).
- **Using `<=>` with `std::optional` members.** `std::optional` has a defaulted `<=>` that returns
  `partial_ordering` when the value type has `partial_ordering`. Be aware of the propagation.
- **Defining `operator==` separately from `<=>`.** If you define both, they must agree. If they
  disagree, `std::set` and `std::map` will behave inconsistently.
- **Forgetting `<compare>` header.** `std::strong_ordering`, `std::weak_ordering`, and
  `std::partial_ordering` are defined in `<compare>`. Forgetting to include it causes compilation
  errors.

:::
