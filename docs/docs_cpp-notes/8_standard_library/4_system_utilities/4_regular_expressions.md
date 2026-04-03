---
title: Regular Expressions
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: regular-expressions
---

## Regular Expressions

`std::regex` (C++11) provides regular expression matching, searching, and replacement using the
ECMAScript regex grammar by default. This section covers the three main operations (`regex_match`,
`regex_search`, `regex_replace`), capture groups with `std::smatch`, practical patterns like email
validation, and performance considerations including catastrophic backtracking.

### Overview

`std::regex` (C++11) provides regular expression matching, searching, and replacement [N4950 §30.9].
It is declared in `<regex>` and uses the ECMAScript regex grammar by default.

The library provides three main operations:

| Function                              | Behavior                                                  |
| :------------------------------------ | :-------------------------------------------------------- |
| `std::regex_match(str, regex)`        | Returns `true` if the **entire** string matches the regex |
| `std::regex_search(str, regex)`       | Returns `true` if **any part** of the string matches      |
| `std::regex_replace(str, regex, fmt)` | Replaces all matches with a formatted string              |

:::warning `std::regex` is notoriously slow on many standard library implementations (particularly
GCC's libstdc++, which uses a backtracking NFA engine). For production use with untrusted input,
consider:

- **CTRE** (Compile-Time Regular Expressions): header-only, uses CTAD and template metaprogramming
  to compile regex patterns at compile time.
- **Hand-written parsers:** for simple patterns (e.g., email validation, URL parsing), a
  hand-written parser is often faster and more readable.
- **RE2:** Google's regex library with guaranteed linear-time matching. :::

### `std::regex_match` and `std::regex_search`

```cpp
#include <iostream>
#include <regex>
#include <string>

void regex_match_search_demo() {
    std::string text = "The price is $42.99 and the discount is $5.00";

    // regex_match: entire string must match
    std::regex full_pattern(R"(\d+)");
    std::cout << std::regex_match("12345", full_pattern) << "\n";   // true
    std::cout << std::regex_match("abc123", full_pattern) << "\n";   // false

    // regex_search: any substring can match
    std::cout << std::regex_search(text, full_pattern) << "\n";      // true
}
```

### `std::smatch` and Capture Groups

`std::smatch` (match results for `std::string`) stores the results of a regex operation, including
capture groups [N4950 §30.9.2]:

- `smatch[0]`: The entire match.
- `smatch[1]`, `smatch[2]`, ...: Capture groups in order of their opening parentheses.
- `smatch.prefix()`: The text before the match.
- `smatch.suffix()`: The text after the match.

```cpp
#include <iostream>
#include <regex>
#include <string>

void capture_groups_demo() {
    std::string log_line = "[2026-03-31 14:22:01] [ERROR] Connection timeout";

    std::regex log_pattern(
        R"(\[(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})\] \[(\w+)\] (.+))"
    );

    std::smatch match;
    if (std::regex_match(log_line, match, log_pattern)) {
        std::cout << "Full match:  " << match[0].str() << "\n";
        std::cout << "Date:        " << match[1].str() << "\n";
        std::cout << "Time:        " << match[2].str() << "\n";
        std::cout << "Level:       " << match[3].str() << "\n";
        std::cout << "Message:     " << match[4].str() << "\n";
        std::cout << "Match count: " << match.size() << "\n";
        // Match count: 5 (0 = full, 1-4 = groups)
    }
}
```

### `std::regex_replace`

```cpp
#include <iostream>
#include <regex>
#include <string>

void regex_replace_demo() {
    std::string input = "Name: John Doe, Age: 30, City: New York";

    // Replace all "Key: Value" patterns with "Key=Value"
    std::regex kv_pattern(R"((\w+):\s*(\w[\w\s]*?)(?=,\s*\w+:|$))");
    std::string result = std::regex_replace(input, kv_pattern, "$1=$2");
    std::cout << result << "\n";
    // Name=John Doe, Age=30, City=New York

    // Simple HTML tag removal
    std::string html = "<p>Hello <b>world</b></p>";
    std::regex tag_pattern(R"(<[^>]+>)");
    std::string plain = std::regex_replace(html, tag_pattern, "");
    std::cout << plain << "\n";
    // Hello world
}
```

:::info In the replacement string, `$&` refers to the entire match, `$1`..`$9` refer to capture
groups, and `$$` is a literal `$`. These are defined in [N4950 §30.9.4]. :::

### Email Validation with Regex

```cpp
#include <iostream>
#include <regex>
#include <string>
#include <string_view>

class EmailValidator {
    // This pattern matches RFC 5322's "addr-spec" production approximately.
    // A fully RFC-compliant regex would be several thousand characters.
    // This is a practical compromise:
    //   local-part:   alphanumeric + . _ % + -
    //   domain:       alphanumeric + - separated by dots, 2-63 chars per label
    static constexpr std::string_view pattern_str =
        R"(^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$)";

public:
    static bool is_valid(std::string_view email) {
        static const std::regex pattern(std::string(pattern_str));
        return std::regex_match(email.data(),
                                email.data() + email.size(),
                                pattern);
    }
};

void email_validation_demo() {
    struct Test { std::string email; bool expected; };

    Test tests[] = {
        {"user@example.com",            true},
        {"first.last@sub.domain.co.uk", true},
        {"user+tag@gmail.com",          true},
        {"user_name@my-company.org",    true},
        {"",                            false},
        {"missing-at-sign.com",         false},
        {"@missing-local.org",          false},
        {"spaces in@address.com",       false},
        {"double..dots@bad.com",        false},
        {"no-tld@domain.",              false},
    };

    int passed = 0;
    for (const auto& t : tests) {
        bool result = EmailValidator::is_valid(t.email);
        std::cout << (result ? "VALID  " : "INVALID")
                  << " | expected: " << (t.expected ? "VALID  " : "INVALID")
                  << " | " << t.email << "\n";
        if (result == t.expected) ++passed;
    }
    std::cout << "\nPassed: " << passed << "/" << sizeof(tests)/sizeof(tests[0]) << "\n";
}
```

### Performance Considerations

The primary performance concern with `std::regex` is **catastrophic backtracking**. A regex like
`(a+)+b` applied to the string `"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaac"` can take exponential time because
the engine tries every possible partition of the `a` characters between the two nested quantifiers.

```cpp
#include <chrono>
#include <iostream>
#include <regex>
#include <string>

void catastrophic_backtracking_demo() {
    // SAFE: no nested quantifiers — linear time
    std::regex safe_pattern(R"(^a+b$)");
    std::string dangerous_input(30, 'a');  // "aaa...a" (no trailing 'b')

    auto start = std::chrono::steady_clock::now();
    bool safe_result = std::regex_search(dangerous_input, safe_pattern);
    auto elapsed_safe = std::chrono::steady_clock::now() - start;
    std::cout << "Safe pattern:   " << safe_result
              << " (" << std::chrono::duration<double, std::milli>(elapsed_safe).count()
              << " ms)\n";

    // DANGEROUS: nested quantifiers — exponential time
    std::regex dangerous_pattern(R"(^(a+)+b$)");

    start = std::chrono::steady_clock::now();
    bool dangerous_result = std::regex_search(dangerous_input, dangerous_pattern);
    auto elapsed_dangerous = std::chrono::steady_clock::now() - start;
    std::cout << "Dangerous:     " << dangerous_result
              << " (" << std::chrono::duration<double, std::milli>(elapsed_dangerous).count()
              << " ms)\n";
}
```

:::warning Avoid nested quantifiers in regex patterns: `(a+)+`, `(a*)*`, `(a+)*`. These can trigger
exponential backtracking on inputs that nearly match. If you must use them, set a timeout or use a
library with guaranteed linear-time matching (RE2, hyperscan). :::

## See Also

- [Filesystem Library](./1_filesystem.md)
- [Chrono Library](./2_chrono.md)
- [Random Number Generation](./3_random_numbers.md)
