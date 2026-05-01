---
id: strings
title: Strings and Text Processing
description:
  Strings and Text Processing — The `String` Class; Immutability; String Pool
  (Intern Pool); `intern()` with worked examples and exam-style questions.
slug: strings
---

## The `String` Class

`String` is the most used class in the Java platform. It is `final`, implements `Serializable`,
`Comparable<String>`, and `CharSequence`, and its instances are **immutable**. Every character in a
`String` is stored internally as UTF-16 code units in a `byte[]` (since JDK 9, compact strings use
`byte[]` with a coder flag for LATIN1 vs UTF-16).

### Immutability

Once constructed, a `String` object cannot be modified. Every "mutating" operation — `substring`,
`concat`, `replace`, `toUpperCase`, `trim` — returns a **new** `String` object. The original remains
unchanged. This is not a suggestion; the `String` class has no public mutating methods, and the
backing `byte[]` (the `value` field) is private.

```java
String original = "hello";
String upper = original.toUpperCase();
System.out.println(original); // "hello" — unchanged
System.out.println(upper);    // "HELLO"
System.out.println(original == upper); // false
```

Immutability is enforced by design:

- All fields are `private final`.
- No method on `String` modifies internal state.
- The class is `final` — you cannot subclass it to introduce mutability.

**Why immutable?** Thread safety without synchronization, safe sharing across threads, secure use as
`HashMap` keys and `HashSet` elements (hash code is cached at construction and never changes), and
string literal interning.

### String Pool (Intern Pool)

The JVM maintains a pool of unique `String` literals. When the bytecode contains a string literal,
the JVM looks up the pool; if the literal already exists, it reuses the reference. This means two
variables assigned the same literal may be the **same object** at runtime:

```java
String a = "hello";
String b = "hello";
System.out.println(a == b); // true — same object from the pool

String c = new String("hello");
System.out.println(a == c); // false — new object on the heap
System.out.println(a.equals(c)); // true — same content
```

The `new String(...)` constructor always creates a new object on the heap, bypassing the pool. This
is almost always the wrong thing to do.

### `intern()`

`String.intern()` returns a canonical representation from the pool. If the string is not already in
the pool, it is added. Interning can reduce memory when you have many duplicate strings, but the
pool lives in the heap (since JDK 7) and is managed by the GC. Over-interning can cause GC pressure
and pool bloat.

```java
String s1 = new String("hello").intern();
String s2 = "hello";
System.out.println(s1 == s2); // true
```

:::warning Do not intern user-controlled strings at scale. The pool is unbounded, and interning
billions of unique strings (e.g., every URL your crawler visits) will cause `OutOfMemoryError`.
Intern only strings that appear frequently and have bounded cardinality.
:::

### Compact Strings (JDK 9+)

Before JDK 9, every `String` stored its characters in a `char[]` — 2 bytes per character. JDK 9
introduced **compact strings** (`-XX:+CompactStrings`, enabled by default since JDK 9). If all
characters fit in the LATIN1 range (code points 0-255), the string uses a `byte[]` with 1 byte per
character. If any character exceeds LATIN1, it switches to UTF-16 encoding (2 bytes per character).
This reduces memory usage by roughly 50% for most real-world strings.

```java
// LATIN1 encoding — 1 byte per char
String latin1 = "Hello, World!";
// UTF-16 encoding — 2 bytes per char (contains 世, U+4E16, outside LATIN1 range)
String utf16 = "世界";
```

The coder flag is stored in the `coder` field of the `String` object. You cannot control which
encoding is used; it is determined automatically at construction time.

## `String` vs `StringBuilder` vs `StringBuffer`

### Performance Characteristics

| Operation          | `String`                       | `StringBuilder`                  | `StringBuffer`                |
| ------------------ | ------------------------------ | -------------------------------- | ----------------------------- |
| Mutability         | Immutable                      | Mutable                          | Mutable                       |
| Thread safety      | N/A (immutable)                | Not thread-safe                  | Synchronized (thread-safe)    |
| Append performance | O(n) per append (copies array) | Amortized O(1)                   | Amortized O(1) + sync cost    |
| Memory overhead    | New object per operation       | Single buffer, resizes as needed | Single buffer + sync overhead |

### When to Use Each

**`String`** — Use for values that do not change. Literals, constants, method return values for
immutable data, keys in maps, and any case where immutability is desired. The JVM's escape analysis
and JIT can sometimes optimize string concatenation into `StringBuilder` automatically.

**`StringBuilder`** — Use for building strings in a single thread. This covers the vast majority of
use cases: constructing SQL queries, building JSON, accumulating log messages, reading file
contents.

**`StringBuffer`** — Use only when multiple threads need to append to the same buffer concurrently.
This is rare. In practice, you almost always want `StringBuilder` and handle thread safety at a
higher level.

```java
// BAD — creates many intermediate String objects
String result = "";
for (int i = 0; i < 1000; i++) {
    result += "item" + i + ",";
}
// Each += creates a new StringBuilder, appends, and creates a new String

// GOOD — single StringBuilder
StringBuilder sb = new StringBuilder(10000); // pre-size if you know the approximate length
for (int i = 0; i < 1000; i++) {
    sb.append("item").append(i).append(',');
}
String result = sb.toString();
```

### Concatenation Under the Hood

The Java compiler translates string concatenation with the `+` operator into `StringBuilder`
operations at compile time (JLS §15.18.1). However, this optimization only applies within a **single
expression**:

```java
// Single expression — compiler optimizes to one StringBuilder
String s = a + b + c + d;

// Loop — each iteration creates a new StringBuilder (pre-JDK 9)
// JDK 9+ uses invokedynamic with StringConcatFactory for better performance
String s = "";
for (String part : parts) {
    s += part; // pre-JDK 9: new StringBuilder each iteration
}
```

JDK 9+ uses `invokedynamic` with `StringConcatFactory` for string concatenation, which generates
optimized bytecode at runtime. This can outperform the `StringBuilder` approach in many cases,
especially for concatenations involving non-string types.

## Text Blocks (JDK 15+)

Text blocks, standardized in JDK 15 (JEP 378), provide a way to write multi-line strings without
escape sequences. They are delimited by triple double quotes:

```java
String html = """
        &lt;html&gt;
            &lt;body&gt;
                &lt;p&gt;Hello, %s&lt;/p&gt;
            &lt;/body&gt;
        &lt;/html&gt;
        """.formatted(name);

String json = """
        {
            "name": "%s",
            "age": %d
        }
        """.stripIndent();
```

### Key Rules

1. The opening `"""` must be followed by a line terminator (the content starts on the next line).
2. The closing `"""` can be on its own line or at the end of the last content line.
3. Incidental white space is determined by the position of the closing `"""`.
4. Two trailing spaces on a line are preserved (otherwise trailing spaces are stripped).

```java
// Incidental whitespace removal
String query = """
        SELECT id, name, email
        FROM users
        WHERE status = 'ACTIVE'
        ORDER BY name
        """;
// Equivalent to: "SELECT id, name, email\nFROM users\nWHERE status = 'ACTIVE'\nORDER BY name\n"
```

### Escaping in Text Blocks

Most escape sequences work normally. The `\` at the end of a line prevents a line break, and `\s`
produces a single space (useful for preserving trailing whitespace):

```java
String text = """
        This is a single \
        line because the backslash prevents the line break.\
        """;
// Result: "This is a single line because the backslash prevents the line break."
```

## Core `String` Methods

### Substring

```java
String s = "Hello, World!";
String sub = s.substring(7, 12); // "World"
```

:::info Prior to JDK 7u6, `substring` shared the backing `char[]` with the original string, which
could cause memory leaks (the original large string could not be GC'd if a small substring was
retained). Since JDK 7u6, `substring` copies the relevant portion into a new `char[]`.
:::

### Split and Join

```java
String csv = "one,two,three,four";
String[] parts = csv.split(",");
// parts: ["one", "two", "three", "four"]

// split with limit
String[] limited = csv.split(",", 3);
// limited: ["one", "two", "three,four"]

// join (JDK 8+)
String joined = String.join(", ", parts);
// joined: "one, two, three, four"
```

`split(String regex)` compiles the regex pattern every call. If you split the same pattern
repeatedly in a hot path, compile the `Pattern` once and reuse it:

```java
private static final Pattern COMMA = Pattern.compile(",");

String[] parts = COMMA.split(csv);
```

### Strip, Trim, and Whitespace

```java
String s = "  Hello, World!  ";
s.trim();     // "Hello, World!" — removes ASCII whitespace (<= U+0020)
s.strip();    // "Hello, World!" — removes Unicode whitespace (JDK 11+)
s.stripLeading();  // "Hello, World!  "
s.stripTrailing(); // "  Hello, World!"
s.stripIndent();   // removes incidental indentation (JDK 15+)
```

### Replace

```java
String s = "Hello, World!";
s.replace("World", "Java");         // "Hello, Java!"
s.replaceAll("\\d+", "NUM");       // regex-based replacement
s.replaceFirst("\\d+", "NUM");     // replace first match only
s.chars()
 .filter(Character::isDigit)
 .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
 .toString();
```

### Format

```java
String.format("User %s has %d points (balance: %.2f)", name, points, balance);

// Positional arguments
String.format("%2$s is %1$d years old", age, name);
```

## The `Character` Class

`Character` wraps a single `char` value. It provides static utility methods for classification and
conversion:

```java
// Classification
Character.isDigit('5');       // true
Character.isLetter('A');      // true
Character.isUpperCase('a');   // false
Character.isWhitespace(' ');  // true
Character.isDefined('\u20AC');// true (€)

// Conversion
char upper = Character.toUpperCase('a'); // 'A'
int codePoint = Character.codePointAt("€", 0); // 8364
char[] chars = Character.toChars(0x1F600); // 😀 (surrogate pair)
```

### Code Points vs `char`

Java's `char` is a UTF-16 code unit (16 bits). Characters outside the Basic Multilingual Plane (BMP)
— emoji, rare CJK characters, mathematical symbols — require **surrogate pairs** (two `char`
values). Working with `char` directly on such strings will produce incorrect results. Use code point
APIs instead:

```java
String emoji = "Hello 🌍";
System.out.println(emoji.length());          // 8 (surrogate pair counts as 2)
System.out.println(emoji.codePointCount(0, emoji.length())); // 7

// Iterate by code point
emoji.codePoints().forEach(cp -> {
    System.out.printf("U+%04X %n", cp);
});
// U+0048 U+0065 U+006C U+006C U+006F U+0020 U+1F30D
```

:::warning Never use `charAt` or iterate `char`-by-`char` on strings that may contain surrogate
pairs. Use `codePoints()`, `codePointAt()`, or iterate with `Character.isHighSurrogate` checks.
:::

## Regular Expressions

Java's regex engine is in `java.util.regex`. The two primary classes are `Pattern` (compiled
representation) and `Matcher` (stateful engine that performs match operations against input).

### Pattern and Matcher

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

Pattern pattern = Pattern.compile("\\b(\\d{3})[-.]?(\\d{3})[-.]?(\\d{4})\\b");
Matcher matcher = pattern.matcher("Call 555-123-4567 or 555.987.6543");

while (matcher.find()) {
    String areaCode = matcher.group(1);
    String exchange = matcher.group(2);
    String subscriber = matcher.group(3);
    System.out.printf("Phone: (%s) %s-%s%n", areaCode, exchange, subscriber);
}
// Phone: (555) 123-4567
// Phone: (555) 987-6543
```

### Predefined Character Classes

| Expression | Meaning                                 |
| ---------- | --------------------------------------- |
| `.`        | Any character (except line terminators) |
| `\d`       | Digit `[0-9]`                           |
| `\D`       | Non-digit                               |
| `\s`       | Whitespace                              |
| `\S`       | Non-whitespace                          |
| `\w`       | Word character `[a-zA-Z_0-9]`           |
| `\W`       | Non-word character                      |

### Quantifiers

| Quantifier   | Greedy   | Reluctant | Possessive | Meaning |
| ------------ | -------- | --------- | ---------- | ------- |
| Zero or one  | `X?`     | `X??`     | `X?+`      |         |
| Zero or more | `X*`     | `X*?`     | `X*+`      |         |
| One or more  | `X+`     | `X+?`     | `X++`      |         |
| Exactly n    | `X{n}`   | `X{n}?`   | `X{n}+`    |         |
| n to m       | `X{n,m}` | `X{n,m}?` | `X{n,m}+`  |         |

### Common Patterns

```java
// Email (basic, not RFC 5322 compliant)
Pattern EMAIL = Pattern.compile("[\\w.+-]+@[\\w-]+\\.[\\w.]+");

// IPv4 address
Pattern IPV4 = Pattern.compile(
    "(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)"
);

// Named groups (JDK 7+)
Pattern LOG = Pattern.compile(
    "(?&lt;timestamp&gt;\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}) " +
    "(?&lt;level&gt;\\w+) " +
    "(?&lt;message&gt;.*)"
);

Matcher m = LOG.matcher("2024-01-15 10:30:00 ERROR Connection timeout");
if (m.matches()) {
    System.out.println(m.group("level"));   // "ERROR"
    System.out.println(m.group("message")); // "Connection timeout"
}
```

### Performance Note

Compiling a `Pattern` is expensive. Always compile once and reuse:

```java
// BAD — compiles on every call
public boolean isValidEmail(String input) {
    return input.matches("[\\w.+-]+@[\\w-]+\\.[\\w.]+");
    // String.matches() compiles and discards the pattern every time
}

// GOOD — compile once
private static final Pattern EMAIL_PATTERN =
    Pattern.compile("[\\w.+-]+@[\\w-]+\\.[\\w.]+");

public boolean isValidEmail(String input) {
    return EMAIL_PATTERN.matcher(input).matches();
}
```

## Character Encoding

### UTF-8, UTF-16, and ISO-8859-1

| Encoding   | Variable width | Bytes per char (typical) | Notes                        |
| ---------- | -------------- | ------------------------ | ---------------------------- |
| UTF-8      | Yes            | 1-4                      | Dominant on the web, wire    |
| UTF-16     | Yes            | 2-4                      | Java internal representation |
| UTF-32     | No             | 4                        | Fixed width, memory-heavy    |
| ISO-8859-1 | No             | 1                        | Latin-1, lossy for non-Latin |
| ASCII      | No             | 1                        | Subset of UTF-8 and Latin-1  |

Java's `String` stores text as UTF-16 code units internally. When converting to/from bytes (for I/O,
network, storage), you must specify the charset.

### Encoding and Decoding

```java
// Always specify the charset explicitly
byte[] utf8Bytes = "Hello".getBytes(StandardCharsets.UTF_8);
String decoded = new String(utf8Bytes, StandardCharsets.UTF_8);

// Using Charset directly
Charset charset = Charset.forName("UTF-8");
// Better: use the constant
Charset charset2 = StandardCharsets.UTF_8;

// List available charsets
SortedMap&lt;String, Charset&gt; available = Charset.availableCharsets();
```

### Encoding Pitfalls

```java
// PITFALL: using platform default charset
byte[] bytes = "Hello".getBytes(); // uses platform default — non-portable
String s = new String(bytes);      // same problem

// PITFALL: silent replacement of unencodable characters
CharsetEncoder encoder = StandardCharsets.ISO_8859_1.newEncoder()
    .onMalformedInput(CodingErrorAction.REPLACE)
    .onUnmappableCharacter(CodingErrorAction.REPLACE);
// "€" becomes "?" in ISO-8859-1 — data loss with no error

// SAFE: fail on encoding errors
CharsetEncoder strict = StandardCharsets.UTF_8.newEncoder()
    .onMalformedInput(CodingErrorAction.REPORT)
    .onUnmappableCharacter(CodingErrorAction.REPORT);
```

:::warning Never rely on the platform default charset. It varies by operating system and locale
setting. A program that works on Linux (UTF-8 default) will mangle data on Windows (Windows-1252
default) if you use `getBytes()` or `new String(byte[])` without an explicit charset. Always use
`StandardCharsets.UTF_8` or a specific `Charset` constant.
:::

## String Formatting

### `String.format`

`String.format` uses `Formatter` internally and supports format specifiers similar to `printf` in C:

```java
String s = String.format("Name: %s, Age: %d, Balance: $%,.2f", "Alice", 30, 12345.678);
// "Name: Alice, Age: 30, Balance: $12,345.68"
```

| Specifier | Meaning                          | Example                 |
| --------- | -------------------------------- | ----------------------- |
| `%s`      | String                           | `"hello"`               |
| `%d`      | Decimal integer                  | `42`                    |
| `%f`      | Decimal floating point           | `3.141593`              |
| `%,d`     | Decimal with comma separator     | `1,234,567`             |
| `%x`      | Hexadecimal                      | `ff`                    |
| `%o`      | Octal                            | `377`                   |
| `%b`      | Boolean                          | `true`                  |
| `%c`      | Character                        | `A`                     |
| `%n`      | Platform-specific line separator |                         |
| `%%`      | Literal percent                  | `%`                     |
| `%20s`    | Right-pad string to width 20     | `"              hello"` |
| `%-20s`   | Left-pad string to width 20      | `"hello              "` |
| `%05d`    | Zero-pad integer to width 5      | `00042`                 |

### `MessageFormat`

`MessageFormat` is useful for localization because it supports positional arguments and
`ChoiceFormat`:

```java
String pattern = "On {0, date, long}, {1} found {2, choice, 0#no files|1#one file|1&lt;{2} files}.";
String result = MessageFormat.format(pattern, new Date(), "Alice", 3);
// "On January 15, 2024, Alice found 3 files."
```

### `formatted` Method (JDK 15+)

```java
// Instance method on String — cleaner syntax
String template = "Hello, %s! You have %d new messages.";
String result = template.formatted("Alice", 5);
```

## `StringTokenizer` (Legacy)

`StringTokenizer` predates `String.split()` and `Pattern`. It is retained for backward compatibility
but should not be used in new code. It does not support regex, cannot handle empty tokens, and has
no way to limit splits.

```java
// LEGACY — do not use
StringTokenizer st = new StringTokenizer("one,two,three", ",");
while (st.hasMoreTokens()) {
    System.out.println(st.nextToken());
}

// MODERN — use split or Pattern
String[] parts = "one,two,three".split(",");
```

:::tip Always prefer `split` or compiled `Pattern` over `StringTokenizer`. The only advantage of
`StringTokenizer` is that it does not compile a regex, but `Pattern.compile(",")` is negligible.
:::

## Common String Algorithms

### Palindrome Check

```java
public static boolean isPalindrome(String s) {
    int left = 0;
    int right = s.length() - 1;
    while (left &lt; right) {
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// With non-alphanumeric filtering
public static boolean isPalindromeAlpha(String s) {
    int left = 0;
    int right = s.length() - 1;
    while (left &lt; right) {
        char cl = Character.toLowerCase(s.charAt(left));
        char cr = Character.toLowerCase(s.charAt(right));
        if (!Character.isLetterOrDigit(cl)) {
            left++;
            continue;
        }
        if (!Character.isLetterOrDigit(cr)) {
            right--;
            continue;
        }
        if (cl != cr) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```

### Anagram Check

```java
public static boolean isAnagram(String a, String b) {
    if (a.length() != b.length()) {
        return false;
    }
    int[] counts = new int[26];
    for (int i = 0; i &lt; a.length(); i++) {
        counts[a.charAt(i) - 'a']++;
        counts[b.charAt(i) - 'a']--;
    }
    for (int count : counts) {
        if (count != 0) {
            return false;
        }
    }
    return true;
}

// Unicode-safe version
public static boolean isAnagramUnicode(String a, String b) {
    return a.codePoints().sorted()
            .collect(StringBuilder::new,
                     StringBuilder::appendCodePoint,
                     StringBuilder::append)
            .toString()
            .equals(
                b.codePoints().sorted()
                 .collect(StringBuilder::new,
                          StringBuilder::appendCodePoint,
                          StringBuilder::append)
                 .toString());
}
```

### Reverse a String

```java
// StringBuilder (simple, handles surrogate pairs correctly)
public static String reverse(String s) {
    return new StringBuilder(s).reverse().toString();
}

// Manual reverse (code point aware)
public static String reverseCodePoints(String s) {
    int[] codePoints = s.codePoints().toArray();
    for (int i = 0, j = codePoints.length - 1; i &lt; j; i++, j--) {
        int temp = codePoints[i];
        codePoints[i] = codePoints[j];
        codePoints[j] = temp;
    }
    return new String(codePoints, 0, codePoints.length);
}
```

## String Deduplication and Normalization

### String Deduplication (JDK 8u20+)

G1 GC can deduplicate strings on the heap. When enabled, GC identifies `String` objects whose
backing `byte[]` is identical and points them to the same array. This is a GC-time optimization, not
a runtime API.

```bash
# Enable string deduplication with G1
java -XX:+UseG1GC -XX:+StringDeduplication ...
```

Deduplication reduces memory usage without any code changes. It is most effective for applications
with large heaps and many duplicate strings (e.g., web servers processing similar requests, XML/JSON
parsers).

### Unicode Normalization

The same logical text can have different binary representations in Unicode. For example, `"é"` can
be a single code point (U+00E9) or `e` + combining accent (U+0065 + U+0301). These are visually
identical but `String.equals()` returns `false`.

```java
import java.text.Normalizer;

String nfc = Normalizer.normalize("é", Normalizer.Form.NFC);
String nfd = Normalizer.normalize("é", Normalizer.Form.NFD);
System.out.println(nfc.equals(nfd)); // false
System.out.println(Normalizer.isNormalized(nfc, Normalizer.Form.NFC)); // true

// Normalize before comparison
String a = Normalizer.normalize(input1, Normalizer.Form.NFC);
String b = Normalizer.normalize(input2, Normalizer.Form.NFC);
boolean equal = a.equals(b);
```

| Form | Description                 | Use case                         |
| ---- | --------------------------- | -------------------------------- |
| NFC  | Canonical composition       | Default for most text processing |
| NFD  | Canonical decomposition     | Searching, sorting, comparison   |
| NFKC | Compatibility composition   | Fuzzy matching                   |
| NFKD | Compatibility decomposition | Stripping diacritics             |

### Stripping Diacritics

```java
public static String stripDiacritics(String input) {
    return Normalizer.normalize(input, Normalizer.Form.NFD)
            .replaceAll("[\\p{InCombiningDiacriticalMarks}+]", "");
}

String stripped = stripDiacritics("Café"); // "Cafe"
String stripped2 = stripDiacritics("Ñoño"); // "Nono"
```

## Common Pitfalls

### Comparing Strings with `==`

```java
// BUG — compares references, not content
if (userInput == "admin") { ... }

// CORRECT
if ("admin".equals(userInput)) { ... }
// Put the literal first to avoid NullPointerException
```

### Concatenation in Loops

```java
// BAD — O(n^2) due to array copies
String result = "";
for (String word : words) {
    result += word;
}

// GOOD — O(n)
StringBuilder sb = new StringBuilder(totalLength);
for (String word : words) {
    sb.append(word);
}
String result = sb.toString();
```

### Forgetting to Handle `null`

```java
// BUG — throws NullPointerException if input is null
input.trim();

// SAFE
if (input != null) {
    input = input.trim();
}

// Or use a utility method
public static String safeTrim(String s) {
    return s == null ? "" : s.trim();
}
```

### Substring Memory Leak (Pre-JDK 7u6)

Prior to JDK 7u6, `String.substring()` shared the backing `char[]` with the original string. If you
extracted a small substring from a very large string and held a reference to the substring, the
entire large `char[]` remained in memory. This was fixed in JDK 7u6, where `substring` now copies
the characters into a new array.

### Regex Backtracking Catastrophe

```java
// DANGEROUS — catastrophic backtracking on input like "aaaaaaaaaaaaaaaaaaaaaaaaX"
Pattern p = Pattern.compile("(a+)+b");
p.matcher("aaaaaaaaaaaaaaaaaaaaaaaaX").find(); // takes exponential time

// AVOID: nested quantifiers, especially on large untrusted input
// If you must validate complex input, use a non-backtracking approach or limit input length
```

### Platform-Default Charset

```java
// BUG — behavior varies across platforms
byte[] bytes = str.getBytes();
String decoded = new String(bytes);

// FIX — always specify charset
byte[] bytes = str.getBytes(StandardCharsets.UTF_8);
String decoded = new String(bytes, StandardCharsets.UTF_8);
```

### Using `new String(String)` Constructor

```java
// POINTLESS — creates a new object that is equal to the original but is not pooled
String s = new String("hello");

// This is almost always wrong. Just use the literal:
String s = "hello";
```

### Ignoring Locale in `toUpperCase`/`toLowerCase`

```java
// BUG — Turkish locale has special casing rules
String upper = "title".toUpperCase(); // "TITLE" in most locales, "TİTLE" in Turkish

// SAFE — specify locale
String upper = "title".toUpperCase(Locale.ROOT);
```

### Regex `matches()` vs `find()`

```java
String input = "abc123def";

// matches() requires the ENTIRE string to match
input.matches("\\d+"); // false

// find() looks for a match anywhere in the string
Pattern.compile("\\d+").matcher(input).find(); // true
```

## String Internals and Performance

### Hash Code Caching

`String` caches its hash code on first computation (stored in the `hash` field, initialized to 0).
Subsequent calls to `hashCode()` return the cached value. This makes `String` efficient as a
`HashMap` key — the hash is computed once and reused for every lookup.

```java
String s = "hello world";
int h1 = s.hashCode(); // computed
int h2 = s.hashCode(); // returned from cache — no recomputation
System.out.println(h1 == h2); // true
```

### String Layout in Memory (JDK 9+ Compact Strings)

Before JDK 9, `String` stored characters in a `char[]` (2 bytes per character). JDK 9 introduced
compact strings — the backing storage is now `byte[]` with a `coder` flag:

```
String object layout:
┌──────────────────────┐
│ Object header (12B)  │
│ hash (int, 4B)       │
│ coder (byte, 1B)     │  0 = LATIN1, 1 = UTF-16
│ (padding, 3B)        │
│ value (reference, 4B)│ ──> byte[] (LATIN1: 1 byte/char, UTF-16: 2 bytes/char)
└──────────────────────┘
```

### Substring Behavior (JDK 7u6+)

Since JDK 7u6, `substring` copies the relevant character range into a new `byte[]`. Before that,
substring shared the backing array with the original string, which could cause memory leaks:

```java
// JDK 7u6+ — safe, copies data
String large = "a".repeat(1_000_000) + "important";
String small = large.substring(1_000_000);
// small has its own byte[] of length 9 — large can be GC'd

// Pre-JDK 7u6 — dangerous, shared backing array
// small held a reference to large's entire char[] (1,000,009 chars)
// large could NOT be GC'd because small kept its char[] alive
```

### `String.valueOf` vs `toString`

```java
// String.valueOf handles null — returns "null"
String s1 = String.valueOf(null); // "null"
String s2 = String.valueOf(optionalObject); // "null" if optionalObject is null

// toString throws NullPointerException on null
String s3 = optionalObject.toString(); // NPE if optionalObject is null
```

### `String.join` with Delimiter

```java
// Join an array
String result = String.join(", ", "Alice", "Bob", "Charlie");
// "Alice, Bob, Charlie"

// Join a collection
List<String> items = List.of("one", "two", "three");
String joined = String.join(" | ", items);
// "one | two | three"

// Empty cases
String empty1 = String.join(",", List.of()); // ""
String empty2 = String.join(",", List.of("single")); // "single"
```

### `String.repeat` (JDK 11+)

```java
String dashes = "-".repeat(40); // "----------------------------------------"
String header = "=".repeat(60);
System.out.println(header);
```

### `String.stripIndent` and `String.indent` (JDK 12+)

```java
// stripIndent — removes common leading whitespace
String raw = """
        line 1
            line 2
        line 3
        """;
String stripped = raw.stripIndent();
// "line 1\n    line 2\nline 3\n"

// indent — adds leading whitespace
String indented = "line 1\nline 2".indent(4);
// "    line 1\n    line 2\n"
```

### `String.transform` (JDK 12+)

```java
// Apply a function to a string, return the result
String result = "hello".transform(String::toUpperCase); // "HELLO"

// Chain transformations
String formatted = input
    .transform(String::trim)
    .transform(String::toLowerCase)
    .transform(s -> s.replaceAll("\\s+", "-"));
```

### `String.lines` (JDK 11+)

```java
// Split into a Stream of lines (handles \n, \r\n, \r)
String text = "line1\nline2\r\nline3\rline4";
long lineCount = text.lines().count(); // 4

List<String> lines = text.lines().collect(Collectors.toList());
// ["line1", "line2", "line3", "line4"]
```

### `String.isBlank` (JDK 11+)

```java
// isBlank checks if the string is empty or contains only whitespace
"".isBlank();       // true
"   ".isBlank();    // true
"\t\n".isBlank();   // true
"  hello  ".isBlank(); // false

// Contrast with isEmpty
"".isEmpty();       // true
"   ".isEmpty();    // false — contains whitespace characters
```
