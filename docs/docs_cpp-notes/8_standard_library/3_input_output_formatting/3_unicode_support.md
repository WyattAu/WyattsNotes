---
title: Unicode Support
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: unicode-support
---

## Unicode Support

C++ provides several character types for Unicode support and `u8` string literals for UTF-8 text.
However, the standard library provides minimal high-level Unicode text processing --- operations
like case conversion, collation, normalization, and grapheme cluster segmentation require external
libraries. This section covers the character types, UTF-8 encoding, string literals, common
pitfalls, and practical guidance for Unicode-aware applications.

### Character Types for Unicode

C++ provides several fundamental character types to support Unicode [N4950 §6.2.5]:

| Type               | Size (guaranteed)        | Typical Use                                                 |
| :----------------- | :----------------------- | :---------------------------------------------------------- |
| `char`             | 1 byte (at least 8 bits) | ASCII, UTF-8 (as byte sequence)                             |
| `char8_t` (C++20)  | 1 byte, unsigned         | UTF-8 code units                                            |
| `char16_t` (C++11) | at least 16 bits         | UTF-16 code units                                           |
| `char32_t` (C++11) | at least 32 bits         | UTF-32 code units / single Unicode code point               |
| `wchar_t`          | implementation-defined   | Platform-wide encoding (UTF-16 on Windows, UTF-32 on Linux) |

`char8_t` was introduced in C++20 [N4950 §6.2.5] to distinguish UTF-8 byte sequences from plain
`char` (which may be signed or unsigned depending on the platform). `char8_t` is an unsigned type
distinct from both `unsigned char` and `char`, preventing accidental implicit conversions.

### UTF-8 Encoding

UTF-8 is a variable-width encoding that represents every Unicode code point using 1 to 4 bytes
[Unicode Standard, §3.9]:

| Code Point Range  | Binary Pattern                        | Bytes |
| :---------------- | :------------------------------------ | :---- |
| U+0000..U+007F    | `0xxxxxxx`                            | 1     |
| U+0080..U+07FF    | `110xxxxx 10xxxxxx`                   | 2     |
| U+0800..U+FFFF    | `1110xxxx 10xxxxxx 10xxxxxx`          | 3     |
| U+10000..U+10FFFF | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` | 4     |

UTF-8 has several properties that make it the dominant encoding for text interchange:

1. **ASCII compatibility:** All ASCII text (U+0000..U+007F) is valid UTF-8, encoded identically.
2. **Self-synchronization:** Any byte in a UTF-8 sequence can be identified as a leading byte or a
   continuation byte by its high bits. You can start scanning from any byte boundary and
   resynchronize.
3. **No byte-order issues:** UTF-8 is defined in terms of byte order, so no BOM (Byte Order Mark) is
   needed (though a BOM `U+FEFF` encoded as `EF BB BF` is sometimes prepended as a convention).

### UTF-8 String Literals and `char8_t`

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

:::info Before C++20, `u8` string literals produced `char` arrays. In C++20, they produce `char8_t`
arrays. This is a **breaking change** if your code passed `u8"..."` to APIs expecting `const char*`.
Use `-fno-char8_t` on GCC/Clang to revert to the C++17 behavior during migration. :::

### Unicode Text Processing Challenges

The C++ standard library provides minimal support for Unicode text processing beyond the
encoding-aware character types. The following challenges must be addressed with care:

#### Code Point vs. Grapheme Cluster

A **code point** (a `char32_t` value) is not always a visible "character." Characters like `é` can
be represented as:

- **NFC (Canonical Decomposition, then Composition):** `U+00E9` (1 code point)
- **NFD (Canonical Decomposition):** `U+0065 U+0301` (2 code points: `e` + combining acute accent)

A **grapheme cluster** is the smallest unit of text that a user perceives as a single character. The
emoji family emoji 👨‍👩‍👧‍👦 is encoded as **7 code points** with zero-width joiners between them.

:::warning `std::u8string::size()` returns the **byte count**, not the character count, code point
count, or grapheme cluster count. There is no standard library function to count code points or
grapheme clusters. For production Unicode text processing, use a library like ICU, libunifex, or
`std::text` (proposed for standardization). :::

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

Standard `std::toupper` and `std::tolower` from `<cctype>` operate on `unsigned char` values and
only handle ASCII [N4950 §29.4.2]. They cannot handle Unicode case conversion (e.g., German `ß` →
`SS`, Greek `σ` → `Σ`).

Similarly, `std::sort` with `operator&lt;` on strings performs byte-by-byte comparison, which is
correct for ASCII but **not** for Unicode collation. The sort order of `"ä"` relative to `"z"`
depends on the locale.

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

:::tip For production Unicode-aware applications:

- **Case conversion:** Use ICU (`u_strToUpper`), or the `utf8proc` library.
- **Collation/sorting:** Use ICU's `Collator` with the appropriate locale.
- **Normalization:** Use ICU or `utf8proc` to normalize strings to NFC or NFD before comparison.
- **Text segmentation:** Use ICU's `BreakIterator` for grapheme cluster, word, and sentence
  boundaries. :::

### Encoding in Stream I/O

`std::fstream` and `std::ifstream`/`std::ofstream` use the stream buffer's `std::codecvt` facet to
convert between the external encoding (usually UTF-8) and the internal `char` encoding [N4950
§30.3.3]. However, `std::codecvt&lt;char16_t, char, mbstate_t>` and
`std::codecvt&lt;char32_t, char, mbstate_t>` were **deprecated** in C++17 and may be removed in a
future standard.

For reading and writing UTF-8 text files, the simplest approach on modern systems (where the native
encoding is UTF-8) is to use binary mode and `char`:

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

:::info On Linux and macOS, the default file encoding is UTF-8, so opening a file in text mode
(`std::ios::in` without `std::ios::binary`) will correctly read and write UTF-8 text. On Windows,
text mode performs CRLF ↔ LF translation, which corrupts binary data but is harmless for UTF-8 text
(unless the text contains lone `0x0A` or `0x0D` bytes that are not line endings). :::

## See Also

- [Stream Buffers and Locale Facets](./1_stream_buffers.md)
- [Type-Safe Formatting](./2_type_safe_formatting.md)
