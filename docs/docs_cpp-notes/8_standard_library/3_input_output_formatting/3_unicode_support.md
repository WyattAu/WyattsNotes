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

### UTF-16 and UTF-32 String Literals

In addition to UTF-8, C++ provides `u` (UTF-16) and `U` (UTF-32) string literal prefixes [N4950
§5.13.5]:

```cpp
#include <cstddef>
#include <cstdint>
#include <iostream>

void utf16_utf32_literals() {
    const char16_t* utf16_str = u"Hello, 世界!";
    const char32_t* utf32_str = U"Hello, 世界!";

    using T16 = decltype(u"test");
    using T32 = decltype(U"test");
    // T16 = const char16_t[5]
    // T32 = const char32_t[5]

    std::u16string u16s = u"Unicode: αβγδ";
    std::u32string u32s = U"Unicode: αβγδ";

    // u32string: each element IS a code point (for BMP characters)
    std::cout << "UTF-16 elements: " << u16s.size() << "\n";
    // UTF-16 elements: 14 (CJK characters are 2 code units each in UTF-16)

    std::cout << "UTF-32 elements: " << u32s.size() << "\n";
    // UTF-32 elements: 12 (each character is exactly one code unit)
}
```

UTF-16 is a variable-width encoding where characters in the Basic Multilingual Plane (BMP,
U+0000..U+FFFF) are represented as a single 16-bit code unit, and supplementary characters
(U+10000..U+10FFFF) use **surrogate pairs** — two 16-bit code units in the range `0xD800..0xDFFF`.
This means `std::u16string::size()` does **not** return the code point count when the string
contains supplementary characters.

UTF-32 is a fixed-width encoding where every code point is exactly one 32-bit code unit.
`std::u32string::size()` **does** return the code point count (but still not the grapheme cluster
count).

### Transcoding Between Encodings

The C++ standard library provides `<codecvt>` (deprecated in C++17) and C++23's `<text_encoding>`
for encoding detection, but practical transcoding typically requires an external library:

```cpp
#include <cstddef>
#include <cstdint>
#include <iostream>
#include <string>

// Manual UTF-8 to UTF-32 transcoding (no external dependencies)
std::u32string utf8_to_utf32(std::string_view utf8) {
    std::u32string result;
    std::size_t i = 0;

    while (i < utf8.size()) {
        char32_t code_point = 0;
        unsigned char lead = static_cast<unsigned char>(utf8[i]);

        if ((lead & 0x80) == 0x00) {
            code_point = lead;
            i += 1;
        } else if ((lead & 0xE0) == 0xC0) {
            code_point = lead & 0x1F;
            code_point = (code_point << 6) | (utf8[i + 1] & 0x3F);
            i += 2;
        } else if ((lead & 0xF0) == 0xE0) {
            code_point = lead & 0x0F;
            code_point = (code_point << 6) | (utf8[i + 1] & 0x3F);
            code_point = (code_point << 6) | (utf8[i + 2] & 0x3F);
            i += 3;
        } else if ((lead & 0xF8) == 0xF0) {
            code_point = lead & 0x07;
            code_point = (code_point << 6) | (utf8[i + 1] & 0x3F);
            code_point = (code_point << 6) | (utf8[i + 2] & 0x3F);
            code_point = (code_point << 6) | (utf8[i + 3] & 0x3F);
            i += 4;
        } else {
            // Invalid lead byte — skip
            ++i;
            continue;
        }

        result.push_back(code_point);
    }

    return result;
}

// Manual UTF-32 to UTF-8 transcoding
std::string utf32_to_utf8(std::u32string_view utf32) {
    std::string result;

    for (char32_t cp : utf32) {
        if (cp <= 0x7F) {
            result.push_back(static_cast<char>(cp));
        } else if (cp <= 0x7FF) {
            result.push_back(static_cast<char>(0xC0 | ((cp >> 6) & 0x1F)));
            result.push_back(static_cast<char>(0x80 | (cp & 0x3F)));
        } else if (cp <= 0xFFFF) {
            result.push_back(static_cast<char>(0xE0 | ((cp >> 12) & 0x0F)));
            result.push_back(static_cast<char>(0x80 | ((cp >> 6) & 0x3F)));
            result.push_back(static_cast<char>(0x80 | (cp & 0x3F)));
        } else if (cp <= 0x10FFFF) {
            result.push_back(static_cast<char>(0xF0 | ((cp >> 18) & 0x07)));
            result.push_back(static_cast<char>(0x80 | ((cp >> 12) & 0x3F)));
            result.push_back(static_cast<char>(0x80 | ((cp >> 6) & 0x3F)));
            result.push_back(static_cast<char>(0x80 | (cp & 0x3F)));
        }
    }

    return result;
}

void transcoding_demo() {
    std::string utf8_src = u8"Héllo, 世界! 🌍";
    auto utf32 = utf8_to_utf32(utf8_src);
    std::cout << "UTF-32 code points: " << utf32.size() << "\n";
    // UTF-32 code points: 11 (H, é, l, l, o, comma, space, 世, 界, !, space, 🌍)

    auto utf8_roundtrip = utf32_to_utf8(utf32);
    std::cout << "Roundtrip matches: " << (utf8_src == utf8_roundtrip ? "yes" : "no") << "\n";
}
```

:::warning The transcoding functions above perform **no validation** of code point ranges. A
production implementation must reject overlong encodings (e.g., encoding `U+0000` as `0xC0 0x80`),
surrogate code points (`U+D800..U+DFFF`), and code points exceeding `U+10FFFF`. The ICU library's
`ucnv_convert` or the `utf8proc` library handle all these cases correctly. :::

### Overlong Encodings and Security Implications

An **overlong encoding** is a multi-byte UTF-8 sequence that encodes a code point that could have
been represented in fewer bytes. For example, `U+002F` (the slash character `/`) can be encoded as
the 2-byte sequence `0xC0 0xAF` instead of the correct 1-byte `0x2F`. This was exploited in the
"directory traversal" attack (CVE-2000-0884) against early web servers that failed to reject
overlong encodings: the attacker would request `/%C0%AF../etc/passwd`, and the server would decode
`0xC0 0xAF` to `/`, bypassing path sanitization.

The UTF-8 decoder shown in the code point iteration example above does **not** reject overlong
encodings. A rigorous decoder must check that the decoded code point is in the minimum range for the
number of bytes used:

| Bytes | Minimum Code Point | Maximum Code Point |
| :---- | :----------------- | :----------------- |
| 1     | U+0000             | U+007F             |
| 2     | U+0080             | U+07FF             |
| 3     | U+0800             | U+FFFF             |
| 4     | U+10000            | U+10FFFF           |

### Unicode Normalization

Unicode defines four normalization forms [Unicode Standard, §3.11]:

| Form | Algorithm                                     | Use Case                                             |
| :--- | :-------------------------------------------- | :--------------------------------------------------- |
| NFC  | Canonical Decomposition, then Composition     | Web text, general interchange                        |
| NFD  | Canonical Decomposition                       | Internal processing, comparison                      |
| NFKC | Compatibility Decomposition, then Composition | Searching, indexing (strips formatting distinctions) |
| NFKD | Compatibility Decomposition                   | Stripping all formatting (e.g., `ﬁ` → `f` + `i`)     |

The critical difference between canonical and compatibility normalization is that **canonical**
forms preserve semantic identity (NFD `U+0065 U+0301` and NFC `U+00E9` are the same character `é`),
while **compatibility** forms may change semantics (NFKD turns the ligature `ﬁ` into separate `f`
and `i`, and turns the superscript `²` into `2`).

```cpp
#include <iostream>
#include <string>

// Simplified NFC normalization check (conceptual)
// In production, use ICU's unorm2_normalize or utf8proc's utf8proc_NFC
bool is_nfc(std::string_view utf8) {
    // This is a placeholder — true NFC normalization requires a full Unicode database
    // that maps every combining character sequence to its composed form.
    //
    // The actual algorithm:
    // 1. Decompose the string using Canonical Decomposition mappings
    // 2. Apply Canonical Composition to recombine adjacent character sequences
    // 3. Compare the result to the original
    //
    // Use: unorm2_normalize(utf8, length, UNORM2_NFC, &error)
    (void)utf8;
    return true;
}

void normalization_pitfall() {
    // These are semantically identical but byte-inequal:
    std::string nfc_form = "caf\u00E9";       // U+00E9 (NFC: 1 code point, 2 bytes: 0xC3 0xA9)
    std::string nfd_form = "cafe\u0301";      // U+0065 U+0301 (NFD: 2 code points, 3 bytes)

    std::cout << "NFC bytes: " << nfc_form.size() << "\n";   // 4
    std::cout << "NFD bytes: " << nfd_form.size() << "\n";   // 5

    std::cout << "Byte-equal: " << (nfc_form == nfd_form ? "yes" : "no") << "\n";
    // Byte-equal: no — they are NOT the same string!

    // Direct string comparison will incorrectly say they differ.
    // Always normalize both sides before comparison.
}
```

:::warning Always normalize strings to a consistent form (typically NFC) before comparing, hashing,
or using as map keys. Two strings that display identically may have different byte representations
if they differ in normalization form. This is a common source of bugs in database lookups, file
search, and authentication systems. :::

### BOM (Byte Order Mark) Handling

The BOM is the code point `U+FEFF` encoded at the start of a text stream to signal the byte order:

| Encoding | BOM Bytes (big-endian) | BOM Bytes (little-endian) |
| :------- | :--------------------- | :------------------------ |
| UTF-8    | `EF BB BF`             | `EF BB BF` (same)         |
| UTF-16   | `FE FF`                | `FF FE`                   |
| UTF-32   | `00 00 FE FF`          | `FF FE 00 00`             |

UTF-8 is byte-order-independent, so a UTF-8 BOM is unnecessary. However, some tools (notably Windows
Notepad) prepend a UTF-8 BOM when saving. This can cause problems:

1. **Shell scripts:** A BOM at the start of a script causes `#!/bin/sh` to fail because the shebang
   line becomes `\xEF\xBB\xBF#!/bin/sh`, which the kernel does not recognize.
2. **String comparison:** If one string has a BOM and another does not, byte comparison fails.
3. **File concatenation:** Concatenating files with and without BOMs produces a BOM in the middle of
   the output.

```cpp
#include <cstdint>
#include <iostream>
#include <string>

bool has_utf8_bom(std::string_view data) {
    return data.size() >= 3
        && static_cast<unsigned char>(data[0]) == 0xEF
        && static_cast<unsigned char>(data[1]) == 0xBB
        && static_cast<unsigned char>(data[2]) == 0xBF;
}

void strip_bom_demo(const std::filesystem::path& path) {
    std::string content;

    {
        std::ifstream file(path, std::ios::binary);
        content.assign(std::istreambuf_iterator<char>(file), {});
    }

    if (has_utf8_bom(content)) {
        content.erase(0, 3);
        std::cout << "Stripped UTF-8 BOM\n";
    }
}
```

### Platform Encoding Quirks

The relationship between `char`, `char8_t`, and the execution encoding is subtle and
platform-dependent:

- **On POSIX (Linux, macOS):** The execution character set is typically UTF-8. `char` strings
  (`"..."`) are UTF-8 by convention. `std::cout` writes raw bytes to the terminal, which interprets
  them as UTF-8. This works seamlessly.
- **On Windows:** The execution character set is typically the system's "ANSI" code page (e.g.,
  Windows-1252 for Western European locales). `char` strings are **not** UTF-8 by default. To use
  UTF-8 with `char` on Windows, you need to call `SetConsoleOutputCP(CP_UTF8)` or use the manifest
  to set the active code page to UTF-8 (Windows 10 1903+). The `wprintf` family with `wchar_t`
  (UTF-16 on Windows) is the traditional approach.
- **MSVC and `u8`:** Even before C++20, MSVC's `u8` string literals produced `unsigned char` arrays
  instead of `char` arrays (a well-known deviation from the standard). This was fixed in MSVC 2019
  16.4+ with C++20 mode enabled.

### Common Pitfalls

1. **Treating `std::string::size()` as character count:** `size()` returns the byte count. For UTF-8
   strings containing non-ASCII characters, the byte count is always greater than or equal to the
   code point count, which is greater than or equal to the grapheme cluster count.

2. **Slicing multi-byte sequences:** Taking a substring at an arbitrary byte offset in a UTF-8
   string may split a multi-byte sequence in half, producing invalid UTF-8. Always decode to code
   point boundaries before slicing.

3. **Using `std::toupper`/`std::tolower` for Unicode:** These operate on `unsigned char` and only
   handle ASCII. The German `ß` uppercases to `SS` (two characters), which cannot be represented by
   a single character-to-character mapping.

4. **Assuming `wchar_t` is UTF-32:** On Windows, `wchar_t` is 16-bit and holds UTF-16 code units,
   not code points. Supplementary characters require surrogate pairs, so `std::wstring::size()` is
   not the code point count on Windows.

5. **Comparing strings from different sources without normalization:** Data from user input, file
   I/O, and network sources may use different normalization forms. Always normalize to a consistent
   form (NFC) before comparison or hashing.

6. **Passing `u8"..."` to APIs expecting `const char*` in C++20:** The type changed from
   `const char[N]` to `const char8_t[N]`. This is a compile error. Use
   `reinterpret_cast<const char*>(u8"...")` during migration, or update the API.

7. **Using `std::locale` for Unicode-aware operations:** `std::locale` facets operate on `char`
   values, not on Unicode code points. The `std::ctype<char>::toupper` function cannot handle
   multi-byte characters. For Unicode-aware locale operations, use ICU.
