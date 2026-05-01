---
title: Regular Expressions
description:
  "C++: Regular Expressions — `std::regex_match` and `std::regex_search`; `std::smatch` and Capture Groups; `std::regex_replace`; Email Validation with Regex."
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
- **RE2:** Google's regex library with guaranteed linear-time matching.
:::

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
    std::string html = "Hello <b>world</b>";
    std::regex tag_pattern(R"(<[^>]+>)");
    std::string plain = std::regex_replace(html, tag_pattern, "");
    std::cout << plain << "\n";
    // Hello world
}
```

:::info In the replacement string, `$&` refers to the entire match, `$1`..`$9` refer to capture
groups, and `$$` is a literal `$`. These are defined in [N4950 §30.9.4].
:::

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
library with guaranteed linear-time matching (RE2, hyperscan).
:::

### Regex Grammars and Flags

`std::regex` supports multiple regex grammars selectable via the `std::regex::flag_type` bitmask
[N4950 §30.9.1]:

| Flag         | Grammar     | Description                                               |
| ------------ | ----------- | --------------------------------------------------------- |
| `ECMAScript` | ECMAScript  | Default. JavaScript-like syntax. Supports backreferences. |
| `basic`      | POSIX BRE   | Basic Regular Expressions. `\(` for groups, no `+`/`?`.   |
| `extended`   | POSIX ERE   | Extended Regular Expressions. `()` for groups, `+`/`?`.   |
| `awk`        | POSIX awk   | Like ERE but escape semantics differ.                     |
| `grep`       | POSIX grep  | Like BRE but newline handling differs.                    |
| `egrep`      | POSIX egrep | Like ERE but newline handling differs.                    |

Additional flags that can be combined with the grammar:

| Flag       | Description                                                                |
| ---------- | -------------------------------------------------------------------------- |
| `icase`    | Case-insensitive matching                                                  |
| `nosubs`   | Do not track capture groups (faster when groups are not needed)            |
| `optimize` | Hint to the implementation to favor faster matching over construction time |
| `collate`  | Locale-sensitive character ranges like `[a-z]`                             |

```cpp
#include <iostream>
#include <regex>
#include <string>

int main() {
    std::string text = "Hello World";

    // Case-insensitive ECMAScript
    std::regex ci_pattern("hello", std::regex::icase);
    std::cout << std::regex_search(text, ci_pattern) << "\n";  // true

    // No capture groups — faster for simple searches
    std::regex simple(R"(\d+)", std::regex::nosubs);
    std::cout << std::regex_search("abc 123 def", simple) << "\n";  // true

    // POSIX extended — different syntax
    std::regex posix_ext("[[:digit:]]+", std::regex::extended);
    std::cout << std::regex_search("abc 456", posix_ext) << "\n";  // true
}
```

### Regex Iterators: `std::regex_iterator` and `std::regex_token_iterator`

For finding all matches in a string (not just the first one), use `std::regex_iterator` [N4950
§30.9.2]:

```cpp
#include <iostream>
#include <regex>
#include <string>

int main() {
    std::string text = "The prices are $42.99, $15.50, and $199.95";

    // Find all dollar amounts
    std::regex price_pattern(R"(\$\d+\.\d{2})");
    auto begin = std::sregex_iterator(text.begin(), text.end(), price_pattern);
    auto end = std::sregex_iterator();

    double total = 0.0;
    std::cout << "Found prices:\n";
    for (auto it = begin; it != end; ++it) {
        std::smatch match = *it;
        std::cout << "  " << match.str()
                  << " at position " << match.position() << "\n";
        total += std::stod(match.str().substr(1));
    }
    std::cout << "Total: USD " << total << "\n";
    // Output:
    //   Found prices:
    //     $42.99 at position 15
    //     $15.50 at position 23
    //     $199.95 at position 31
    //   Total: USD 258.44
}
```

`std::regex_token_iterator` extracts specific capture groups from all matches, or splits a string:

```cpp
#include <iostream>
#include <regex>
#include <string>
#include <vector>

int main() {
    // Extract all capture group 1 from matches
    std::string log = "key1=val1; key2=val2; key3=val3";
    std::regex kv_pattern(R"((\w+)=(\w+))");

    std::vector<std::string> keys, values;

    // Extract group 1 (keys)
    auto key_begin = std::sregex_token_iterator(
        log.begin(), log.end(), kv_pattern, 1);
    auto key_end = std::sregex_token_iterator();
    for (auto it = key_begin; it != key_end; ++it) {
        keys.push_back(it->str());
    }

    // Extract group 2 (values)
    auto val_begin = std::sregex_token_iterator(
        log.begin(), log.end(), kv_pattern, 2);
    auto val_end = std::sregex_token_iterator();
    for (auto it = val_begin; it != val_end; ++it) {
        values.push_back(it->str());
    }

    std::cout << "Keys: ";
    for (const auto& k : keys) std::cout << k << " ";
    std::cout << "\nValues: ";
    for (const auto& v : values) std::cout << v << " ";
    std::cout << "\n";

    // String splitting using regex_token_iterator with -1 index
    std::string csv = "red,green,blue,yellow";
    std::regex comma(",");
    auto word_begin = std::sregex_token_iterator(csv.begin(), csv.end(), comma, -1);
    auto word_end = std::sregex_token_iterator();
    std::cout << "Split: ";
    for (auto it = word_begin; it != word_end; ++it) {
        std::cout << "[" << it->str() << "] ";
    }
    std::cout << "\n";
    // Output:
    //   Keys: key1 key2 key3
    //   Values: val1 val2 val3
    //   Split: [red] [green] [blue] [yellow]
}
```

### Match Flags

`std::regex_match` and `std::regex_search` accept `std::regex_constants::match_flag_type` flags:

| Flag               | Description                                         |
| ------------------ | --------------------------------------------------- |
| `match_default`    | Default behavior                                    |
| `match_not_bol`    | Do not match `^` at the first position              |
| `match_not_eol`    | Do not match `$` at the last position               |
| `match_not_bow`    | Do not match `\b` at the beginning of the string    |
| `match_not_eow`    | Do not match `\b` at the end of the string          |
| `match_any`        | Any character matches `.` (including newline)       |
| `match_not_null`   | Do not match empty sequences                        |
| `match_continuous` | Only match at the beginning (like anchored match)   |
| `match_prev_avail` | The first position is not the start of the sequence |

```cpp
#include <iostream>
#include <regex>
#include <string>

int main() {
    std::string multi_line = "line1\nline2\nline3";

    // Without match_any, . does not match newline
    std::regex dot_all("line.line");
    std::cout << std::regex_search(multi_line, dot_all) << "\n";  // 0 (false)

    // With match_any, . matches newline
    std::cout << std::regex_search(multi_line, dot_all, std::regex_constants::match_any) << "\n";  // 1 (true)
}
```

### Precompiled Regex for Repeated Use

Always store a compiled `std::regex` as a `static` or `const` object when the same pattern is used
multiple times. The regex compilation is expensive, and recompiling on every call is a common
performance mistake:

```cpp
#include <iostream>
#include <regex>
#include <string>
#include <vector>

class LogParser {
    // Compiled once, reused for every call
    static const std::regex log_pattern;
    static const std::regex timestamp_pattern;
public:
    static std::string extract_level(const std::string& line) {
        std::smatch match;
        if (std::regex_search(line, match, log_pattern)) {
            return match[3].str();
        }
        return "UNKNOWN";
    }

    static std::string extract_timestamp(const std::string& line) {
        std::smatch match;
        if (std::regex_search(line, match, timestamp_pattern)) {
            return match[1].str() + " " + match[2].str();
        }
        return "";
    }
};

const std::regex LogParser::log_pattern(
    R"(\[(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})\] \[(\w+)\])");
const std::regex LogParser::timestamp_pattern(
    R"(\[(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})\])");

int main() {
    std::vector<std::string> logs = {
        "[2026-03-31 14:22:01] [ERROR] Connection timeout",
        "[2026-03-31 14:22:02] [INFO] Retry attempt 1",
        "[2026-03-31 14:22:05] [WARN] Slow response",
    };

    for (const auto& line : logs) {
        std::cout << LogParser::extract_timestamp(line) << " "
                  << LogParser::extract_level(line) << "\n";
    }
}
```

### Thread Safety

`std::regex` is **not thread-safe** for concurrent `search`/`match`/`replace` operations on the same
`regex` object [N4950 §30.9.1]. If multiple threads need to use the same pattern, either:

1. Use a thread-local `static` regex (`thread_local const std::regex pattern(...)`).
2. Use a separate regex object per thread.
3. Protect access with a mutex (acceptable if regex operations are infrequent).

```cpp
#include <iostream>
#include <regex>
#include <string>
#include <thread>
#include <vector>

void process_line(const std::string& line) {
    // thread_local: each thread gets its own compiled regex
    thread_local const std::regex pattern(R"(\[(\w+)\])");
    std::smatch match;
    if (std::regex_search(line, match, pattern)) {
        std::cout << std::this_thread::get_id() << ": " << match[1].str() << "\n";
    }
}

int main() {
    std::vector<std::string> lines = {
        "[ERROR] something",
        "[INFO] something",
        "[WARN] something",
        "[DEBUG] something",
    };

    std::vector<std::thread> threads;
    for (const auto& line : lines) {
        threads.emplace_back(process_line, line);
    }
    for (auto& t : threads) t.join();
}
```

## Common Pitfalls

### 1. Using `std::regex` with libstdc++ for Untrusted Input

GCC's libstdc++ implementation of `std::regex` uses a backtracking NFA engine that is exponentially
slow for certain patterns. For any production code that processes untrusted input, prefer a
DFA-based or hybrid engine (RE2, hyperscan). MSVC's STL and libc++ (Clang) have better performance
but still lack guaranteed linear-time matching.

### 2. Forgetting to Anchor Patterns with `regex_match`

`std::regex_match` requires the **entire** string to match. If you forget to anchor your pattern
with `^` and `$`, you may get unexpected results with `regex_search`:

```cpp
#include <iostream>
#include <regex>
#include <string>

int main() {
    std::string input = "123abc";

    // regex_match: entire string must match
    std::cout << std::regex_match(input, std::regex(R"(\d+)")) << "\n";   // false
    std::cout << std::regex_match(input, std::regex(R"(\d+\w*)")) << "\n"; // true

    // regex_search: any substring can match
    std::cout << std::regex_search(input, std::regex(R"(\d+)")) << "\n";   // true
}
```

### 3. Escaping Special Characters in Replacement Strings

In replacement strings passed to `std::regex_replace`, the `$` character has special meaning. To
insert a literal `$`, use `$$`. The matched text is `$&`, capture groups are `$1` through `$9`:

```cpp
#include <iostream>
#include <regex>
#include <string>

int main() {
    std::string text = "price: 100 USD";

    // $& refers to the entire match
    std::string result = std::regex_replace(
        text, std::regex(R"(\d+)"), "[$&]");
    std::cout << result << "\n";  // price: [100] USD

    // $$ for literal dollar sign
    std::string result2 = std::regex_replace(
        text, std::regex(R"(\d+)"), "$$0");
    std::cout << result2 << "\n";  // price: $0 USD
}
```

### 4. Empty Matches in Iteration

`std::regex_iterator` skips zero-length matches at the same position to prevent infinite loops. If
you need to capture zero-length matches (e.g., for splitting), use `std::regex_token_iterator` with
index `-1`.

## See Also

- [Filesystem Library](./1_filesystem.md)
- [Chrono Library](./2_chrono.md)
- [Random Number Generation](./3_random_numbers.md)

:::

:::

:::
