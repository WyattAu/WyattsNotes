---
title: Algebraic Error Handling — std::optional and std::variant
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: algebraic-error-handling-optional-and-variant
---

# Algebraic Error Handling

`std::optional` and `std::variant` are stack-allocated, type-safe alternatives to exceptions for
representing values that may be absent or that may hold one of several alternative types.

## 4.1 `std::optional<T>`

`std::optional<T>` models a value that may or may not be present [N4950 §20.6]. It is allocated on
the stack, stores at most one `T`, and requires no heap allocation.

```cpp
#include <iostream>
#include <optional>
#include <string>
#include <fstream>
#include <sstream>

std::optional<std::string> read_first_line(const std::string& path) {
    std::ifstream file{path};
    if (!file.is_open()) {
        return std::nullopt;
    }
    std::string line;
    if (std::getline(file, line)) {
        return line;
    }
    return std::nullopt;
}

int main() {
    auto result = read_first_line("/nonexistent/file.txt");

    if (result.has_value()) {
        std::cout << "First line: " << result.value() << "\n";
    } else {
        std::cout << "File could not be read or is empty\n";
    }

    auto val = result.value_or("(no line)");
    std::cout << "With default: " << val << "\n";

    result.transform([](const std::string& s) {
        return s.size();
    }).and_then([](std::size_t len) -> std::optional<std::size_t> {
        if (len > 0) return len;
        return std::nullopt;
    });

    return 0;
}
```

## 4.2 `std::variant<T, U, V>`

`std::variant` is a type-safe, stack-allocated union that holds exactly one of its alternative types
at any time [N4950 §20.7].

```cpp
#include <iostream>
#include <variant>
#include <string>
#include <stdexcept>

struct ParseError {
    std::string message;
    std::size_t position;
};

struct ValueError {
    std::string expected;
    std::string found;
};

using ParseResult = std::variant<int, ParseError, ValueError>;

ParseResult parse_int(const std::string& s) {
    if (s.empty()) {
        return ParseError{"empty input", 0};
    }
    std::size_t pos = 0;
    try {
        std::size_t processed = 0;
        int val = std::stoi(s, &processed);
        if (processed != s.size()) {
            return ParseError{"trailing characters", processed};
        }
        return val;
    } catch (const std::invalid_argument&) {
        return ValueError{"integer", s};
    } catch (const std::out_of_range&) {
        return ValueError{"in-range integer", s};
    }
}

int main() {
    auto results = {
        parse_int("42"),
        parse_int("3.14"),
        parse_int(""),
        parse_int("99999999999999999999"),
    };

    for (const auto& r : results) {
        std::visit([](const auto& v) {
            using T = std::decay_t<decltype(v)>;
            if constexpr (std::is_same_v<T, int>) {
                std::cout << "  Parsed: " << v << "\n";
            } else if constexpr (std::is_same_v<T, ParseError>) {
                std::cout << "  ParseError at " << v.position << ": " << v.message << "\n";
            } else if constexpr (std::is_same_v<T, ValueError>) {
                std::cout << "  ValueError: expected " << v.expected
                          << ", got \"" << v.found << "\"\n";
            }
        }, r);
    }
    return 0;
}
// Output:
//   Parsed: 42
//   ParseError at 3: trailing characters
//   ParseError at 0: empty input
//   ValueError: expected in-range integer, got "99999999999999999999"
```

## 4.3 `std::visit` and `std::get`

```cpp
#include <iostream>
#include <variant>
#include <string>

using Value = std::variant<int, double, std::string>;

struct Printer {
    void operator()(int v) const { std::cout << "int: " << v << "\n"; }
    void operator()(double v) const { std::cout << "double: " << v << "\n"; }
    void operator()(const std::string& v) const { std::cout << "string: " << v << "\n"; }
};

int main() {
    Value v = std::string{"hello"};

    std::visit(Printer{}, v);
    v = 42;
    std::visit(Printer{}, v);

    try {
        std::get<double>(v);
    } catch (const std::bad_variant_access& e) {
        std::cout << "bad_variant_access: " << e.what() << "\n";
    }

    if (auto* p = std::get_if<std::string>(&v)) {
        std::cout << "string value: " << *p << "\n";
    } else {
        std::cout << "not a string\n";
    }

    if (auto* p = std::get_if<int>(&v)) {
        std::cout << "int value: " << *p << "\n";
    }

    return 0;
}
// Output:
//   string: hello
//   int: 42
//   bad_variant_access: std::bad_variant_access
//   not a string
//   int value: 42
```

## 4.4 Comparison with Exceptions

| Aspect                | Exceptions           | `std::optional`              | `std::variant`                     |
| --------------------- | -------------------- | ---------------------------- | ---------------------------------- |
| Overhead (no error)   | ~0 (table-based)     | 0                            | 0                                  |
| Overhead (error path) | ~$\mu s$             | ~ns                          | ~ns                                |
| Error type            | Any type             | `std::nullopt` only          | User-defined alternatives          |
| Composability         | Implicit (unwinding) | Explicit (check `has_value`) | Explicit (`std::visit`/`std::get`) |
| Catches missed errors | No (terminate)       | Yes (forgot to check)        | Yes (forgot to check)              |

## See Also

- [The noexcept Specifier](3_noexcept.md)
- [Monadic Error Handling — std::expected](5_expected.md)
