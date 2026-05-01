---
title: Control Flow
description:
  Control Flow — If / Else; Initialization Statement; Idiomatic Error Check;
  Switch with worked examples and exam-style questions.
slug: control-flow
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## If / Else

Go's `if` statements do not require parentheses but do require braces. The condition can include an
initialization statement.

```go
if x > 0 {
    fmt.Println("positive")
} else if x < 0 {
    fmt.Println("negative")
} else {
    fmt.Println("zero")
}
```

### Initialization Statement

A common pattern is to initialize a variable in the `if` scope:

```go
if err := doSomething(); err != nil {
    fmt.Fprintf(os.Stderr, "error: %v\n", err)
    return
}
// err is not accessible here -- scoped to the if block
```

This keeps the variable scoped to where it is needed and avoids polluting the enclosing function
scope.

### Idiomatic Error Check

The initialization statement pattern is the idiomatic way to check errors:

```go
if val, err := compute(); err != nil {
    log.Fatal(err)
} else {
    fmt.Println(val)
}
```

The `else` is on the same line as the closing brace of the `if` block. This is enforced by `gofmt`.

## Switch

Go's `switch` is more flexible than C's. Cases break automatically -- no `fallthrough` unless
explicitly requested.

```go
switch os := runtime.GOOS; os {
case "darwin":
    fmt.Println("macOS")
case "linux":
    fmt.Println("Linux")
default:
    fmt.Println("Other")
}
```

### Switch with No Condition

A `switch` with no condition is equivalent to `switch true`. This is an idiomatic replacement for
long `if-else` chains:

```go
switch {
case x < 0:
    fmt.Println("negative")
case x == 0:
    fmt.Println("zero")
case x > 0:
    fmt.Println("positive")
}
```

### Type Switch

A type switch compares types rather than values. It is used with interface values:

```go
func inspect(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("integer: %d\n", v)
    case string:
        fmt.Printf("string: %s\n", v)
    case bool:
        fmt.Printf("boolean: %t\n", v)
    default:
        fmt.Printf("unknown type: %T\n", v)
    }
}
```

The variable `v` has the type of the matched case, not the interface type.

### Fallthrough

Use `fallthrough` to execute the next case unconditionally. It is rarely needed:

```go
switch n := 5; n {
case 5:
    fmt.Println("five")
    fallthrough
case 4:
    fmt.Println("four or five")
}
// Output:
// five
// four or five
```

## For Loops

Go has exactly one looping construct: `for`. There is no `while`, no `do-while`, no `loop`.

### Classic For

```go
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

### While-style For

Omitting all three components creates an infinite loop:

```go
for {
    // runs forever
}
```

Omitting only the init and post creates a while loop:

```go
n := 0
for n < 10 {
    n++
}
```

### For-range

The `range` clause iterates over slices, arrays, maps, strings, and channels.

#### Range over Slice/Array

```go
nums := []int{10, 20, 30}
for i, v := range nums {
    fmt.Printf("index %d: value %d\n", i, v)
}
```

Use `_` to discard the index (common when only values are needed):

```go
for _, v := range nums {
    fmt.Println(v)
}
```

#### Range over Map

Iteration order over maps is not guaranteed and varies between runs:

```go
m := map[string]int{"a": 1, "b": 2, "c": 3}
for k, v := range m {
    fmt.Printf("%s: %d\n", k, v)
}
```

#### Range over String

Iterates over Unicode code points (runes), not bytes:

```go
s := "hello"
for i, r := range s {
    fmt.Printf("byte offset %d: rune %c\n", i, r)
}
```

#### Range over Channel

Receives values from a channel until it is closed:

```go
ch := make(chan int, 3)
ch <- 1
ch <- 2
ch <- 3
close(ch)

for v := range ch {
    fmt.Println(v) // 1, 2, 3
}
```

### Range Semantics

`range` copies the value for each iteration. For slices and arrays of pointers or structs, this
means you get a copy of the element, not a reference:

```go
items := []struct{ X int }{{1}, {2}, {3}}
for _, item := range items {
    item.X *= 2 // modifies a copy, not items[i]
}
fmt.Println(items) // [{1} {2} {3}] -- unchanged
```

To modify elements, use the index:

```go
for i := range items {
    items[i].X *= 2
}
fmt.Println(items) // [{2} {4} {6}]
```

For pointers, the copy is still a pointer but dereferences the same underlying data:

```go
items := []*int{new(int), new(int), new(int)}
*items[0] = 1
for _, p := range items {
    *p *= 2 // modifies the pointed-to value
}
```

## Break and Continue

`break` exits the innermost `for`, `switch`, or `select`. `continue` skips to the next iteration of
the innermost `for` loop.

### Labeled Break

Break out of an outer loop using a label:

```go
outer:
for i := 0; i < 5; i++ {
    for j := 0; j < 5; j++ {
        if i*j == 6 {
            break outer
        }
    }
}
fmt.Println("broke at i*j == 6")
```

### Labeled Continue

Skip to the next iteration of an outer loop:

```go
outer:
for i := 0; i < 3; i++ {
    for j := 0; j < 3; j++ {
        if j == 1 {
            continue outer
        }
        fmt.Printf("%d %d\n", i, j)
    }
}
// Output:
// 0 0
// 1 0
// 2 0
```

## Goto

Go supports `goto` with restrictions. The label must be defined in the same function, and `goto`
cannot jump over variable declarations or into inner blocks.

```go
func process(items []int) {
    for _, item := range items {
        if item < 0 {
            goto invalid
        }
        fmt.Println(item)
    }
    return

invalid:
    fmt.Println("found negative item")
}
```

`goto` is rarely used in idiomatic Go. Prefer structured control flow (`for`, `if`, functions).

## Defer

`defer` schedules a function call to run when the surrounding function returns. Arguments are
evaluated immediately, but the function call is deferred.

```go
func readConfig(path string) ([]byte, error) {
    f, err := os.Open(path)
    if err != nil {
        return nil, err
    }
    defer f.Close()

    return io.ReadAll(f)
}
```

### Deferred Call Order

Deferred functions execute in LIFO (last-in, first-out) order:

```go
func main() {
    defer fmt.Println("first")
    defer fmt.Println("second")
    defer fmt.Println("third")
    // Output:
    // third
    // second
    // first
}
```

### Defer and Named Return Values

A deferred function can read and modify named return values:

```go
func double(x int) (result int) {
    defer func() {
        result *= 2
    }()
    result = x
    return // returns x * 2
}
fmt.Println(double(5)) // 10
```

This works because `return` first assigns the value to the named return variable, then deferred
functions execute.

## Common Pitfalls

1. **Forgetting that `switch` cases break automatically.** Unlike C, Go does not fall through by
   default. This is a feature, not a bug, but surprises C programmers.

2. **Modifying loop variable captures in closures.** The loop variable is reused across iterations.
   Capturing it in a closure captures the same variable:

   ```go
   for _, v := range values {
       go func() {
           fmt.Println(v) // all goroutines print the last value
       }()
   }
   ```

   Fix: pass as an argument `go func(val int) { ... }(v)`.

3. **Using `defer` in a loop.** Each `defer` in a loop accumulates until the function returns. For
   large loops, this can exhaust memory. Use an immediately-invoked function or call the cleanup
   directly.

4. **Range over `nil` map/slice is safe.** `for range nil` does nothing -- it does not panic. This
   is by design.

5. **Range copies values.** Modifying the range variable does not modify the original element. Use
   index-based access for mutations.
