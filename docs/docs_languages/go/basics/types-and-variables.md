---
title: Types and Variables
description:
  Types and Variables — Integer Types; Integer Overflow; Floating-Point Types;
  Boolean Type with worked examples and exam-style questions.
slug: types-and-variables
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## Integer Types

Go provides signed and unsigned integers at standard widths:

| Type               | Size (bytes) | Range (signed)                                          | Range (unsigned)                |
| ------------------ | ------------ | ------------------------------------------------------- | ------------------------------- |
| `int8` / `uint8`   | 1            | -128 to 127                                             | 0 to 255                        |
| `int16` / `uint16` | 2            | -32,768 to 32,767                                       | 0 to 65,535                     |
| `int32` / `uint32` | 4            | -2,147,483,648 to 2,147,483,647                         | 0 to 4,294,967,295              |
| `int64` / `uint64` | 8            | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | 0 to 18,446,744,073,709,551,615 |
| `int` / `uint`     | 4 or 8       | Same as `int32` or `int64` (platform-dependent)         | Same as `uint32` or `uint64`    |
| `uintptr`          | 4 or 8       | Unsigned integer large enough to store a pointer value  |                                 |

`int` and `uint` are the default integer types. Their size matches the native word size of the
platform: 32 bits on 32-bit systems, 64 bits on 64-bit systems. Use `int` unless you need a specific
size.

```go
var x int = 42
var y int64 = 42
```

### Integer Overflow

Go integers wrap around on overflow in the same manner as two's complement arithmetic. The compiler
does not insert runtime checks:

```go
var x uint8 = 255
x += 1 // x == 0 (wraps)
```

Use `math/bits` for explicit overflow detection:

```go
a, carry := bits.Add(255, 1, 0) // a == 0, carry == 1
```

## Floating-Point Types

| Type      | Size    | Precision             |
| --------- | ------- | --------------------- |
| `float32` | 4 bytes | ~6-7 decimal digits   |
| `float64` | 8 bytes | ~15-16 decimal digits |

`float64` is the default. Both conform to IEEE 754.

```go
x := 3.14      // float64
var y float32 = 2.71
```

IEEE 754 gotchas apply identically to Go as to other languages:

```go
fmt.Println(0.1 + 0.2 == 0.3) // false
fmt.Println(math.Abs(0.1+0.2-0.3) < 1e-15) // true
```

`math.NaN()` exists. NaN does not compare equal to anything:

```go
nan := math.NaN()
fmt.Println(nan == nan)    // false
fmt.Println(math.IsNaN(nan)) // true
```

## Boolean Type

`bool` is one byte. No implicit conversion to/from integers.

```go
var b bool = true
fmt.Println(b) // true
fmt.Println(!b) // false
```

## String Type

Strings are immutable sequences of UTF-8 bytes. They are not null-terminated and their length is
stored explicitly. The zero value is `""`, not `nil`.

```go
s := "hello"
fmt.Println(len(s))        // 5 (byte length)
fmt.Println(s[0])          // 104 (byte value of 'h')
fmt.Println(string(s[0]))  // "h"
```

String indexing yields bytes, not runes. Use `for range` for character iteration:

```go
s := "hello"
for i, r := range s {
    fmt.Printf("%d: %c\n", i, r)
}
```

Multi-byte UTF-8:

```go
s := "日本語"
fmt.Println(len(s))           // 9 bytes (3 chars x 3 bytes)
fmt.Println(utf8.RuneCountInString(s)) // 3 runes
```

String concatenation with `+` allocates a new string. For many concatenations, use
`strings.Builder`:

```go
var sb strings.Builder
for _, s := range items {
    sb.WriteString(s)
}
result := sb.String()
```

## Zero Values

Every type in Go has a zero value. Variables declared without an explicit initializer are set to
zero. This eliminates uninitialized variable bugs.

| Type      | Zero Value                            |
| --------- | ------------------------------------- |
| `int`     | `0`                                   |
| `float64` | `0.0`                                 |
| `bool`    | `false`                               |
| `string`  | `""`                                  |
| Pointer   | `nil`                                 |
| Slice     | `nil`                                 |
| Map       | `nil`                                 |
| Channel   | `nil`                                 |
| Interface | `nil`                                 |
| Struct    | All fields set to their zero values   |
| Array     | All elements set to their zero values |

```go
var x int
var s string
var p *int
fmt.Println(x, s, p) // 0  <nil>
```

## Variable Declaration

### `var`

```go
var x int = 42
var y = 42       // type inferred
var a, b int = 1, 2
var (
    name string = "go"
    age  int    = 15
)
```

### Short declaration (`:=`)

Inside functions only. Type is inferred from the right-hand side.

```go
func main() {
    x := 42
    s := "hello"
    fmt.Println(x, s)
}
```

`:=` cannot be used at package level. It is syntactic sugar for `var` with type inference.

### `new`

`new(T)` allocates a zeroed value of type `T` and returns a pointer `*T`.

```go
p := new(int)
fmt.Println(*p) // 0
*p = 42
fmt.Println(*p) // 42
```

## Constants

Constants are declared with `const`. They must be computable at compile time.

```go
const Pi = 3.14159
const Greeting = "hello"

const (
    StatusOK  = 200
    StatusErr = 500
)

// iota generates sequential integers
const (
    A = iota // 0
    B        // 1
    C        // 2
)
```

### `iota`

`iota` is a predeclared identifier that resets to 0 in each `const` block and increments by one for
each subsequent constant. It enables bit flag and enumeration patterns:

```go
const (
    FlagRead  = 1 << iota // 1
    FlagWrite             // 2
    FlagExec              // 4
)

const (
    _  = iota             // 0, discarded
    KB = 1 << (10 * iota) // 1024
    MB                    // 1048576
    GB                    // 1073741824
)
```

## Type Conversions

Go requires explicit conversions between types. There are no implicit numeric conversions.

```go
var i int = 42
var f float64 = float64(i)
var u uint = uint(i)
```

Numeric conversions that lose precision truncate:

```go
var x int64 = 300
var y int8 = int8(x) // 44 (300 mod 256, wraps)
```

String conversions:

```go
b := []byte("hello")     // string to byte slice
s := string([]byte{104, 101}) // byte slice to string

i := 42
s := strconv.Itoa(i)      // "42"
j, _ := strconv.Atoi("42") // 42
```

### Safe Conversions

There is no built-in safe conversion that returns an error. Use explicit bounds checks:

```go
func safeUint64(n int64) (uint64, bool) {
    if n < 0 {
        return 0, false
    }
    return uint64(n), true
}
```

## Type Aliases

```go
type Celsius float64
type Fahrenheit float64

func CToF(c Celsius) Fahrenheit {
    return Fahrenheit(c*9/5 + 32)
}
```

`type` creates a new, distinct type. `Celsius` and `float64` are different types -- you must convert
explicitly. This prevents accidentally mixing incompatible values.

Since Go 1.9, type aliases (using `=`) create an alias, not a new type:

```go
type Byte = byte
type Rune = int32
```

## Common Pitfalls

1. **Using `==` to compare floats.** IEEE 754 makes exact equality unreliable. Use an epsilon
   comparison: `math.Abs(a-b) < epsilon`.

2. **String indexing yields bytes.** `s[i]` returns a `byte`, not a `rune`. For multi-byte UTF-8,
   this can split a character. Use `for i, r := range s` for rune iteration.

3. **Assuming `int` is 64-bit.** On 32-bit systems, `int` is 32 bits. Use `int64` explicitly when
   the value may exceed 2^31 - 1.

4. **`:=` in outer scope.** `:=` in an inner block creates a new variable that shadows the outer
   one. Use `=` for assignment to an existing variable.

5. **`nil` slices vs empty slices.** A `nil` slice has length and capacity 0 but is not equal to an
   empty slice (`[]int{}`). JSON marshaling treats them differently: `nil` becomes `null`, `[]int{}`
   becomes `[]`.

6. **Integer overflow is silent.** Unlike Rust (debug panics) or Python (arbitrary precision), Go
   wraps on overflow without any runtime error. Use `math/bits` or explicit checks when overflow is
   a concern.
