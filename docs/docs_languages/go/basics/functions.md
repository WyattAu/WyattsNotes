---
title: Functions
description:
  Functions — Function Declaration; Named Return Values; Passing a Slice to a
  Variadic Function; Variadic with Other Parameters.
slug: functions
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## Function Declaration

Go functions are first-class values. The basic syntax:

```go
func add(x int, y int) int {
    return x + y
}
```

When consecutive parameters share the same type, specify the type once:

```go
func add(x, y int) int {
    return x + y
}
```

Functions can return multiple values. The idiomatic pattern returns a value and an error:

```go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

result, err := divide(10, 3)
if err != nil {
    log.Fatal(err)
}
fmt.Println(result)
```

## Named Return Values

Go supports named return values. They act as variables declared at the top of the function:

```go
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return // naked return -- returns current values of x and y
}
```

A "naked return" returns the current values of the named return variables. Use them sparingly --
they improve readability in short functions but harm it in longer ones where the reader must scan
back to the signature to understand what is returned.

Named returns are required for `defer` to modify return values:

```go
func readSize(path string) (size int64, err error) {
    f, err := os.Open(path)
    if err != nil {
        return // returns 0, err
    }
    defer func() {
        if cerr := f.Close(); err == nil {
            err = cerr // override nil error with close error
        }
    }()

    info, err := f.Stat()
    if err != nil {
        return // returns 0, err
    }
    size = info.Size()
    return // returns size, nil
}
```

## Variadic Functions

Variadic functions accept a variable number of arguments of the same type. The parameter type is
prefixed with `...`:

```go
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

fmt.Println(sum(1, 2, 3))     // 6
fmt.Println(sum(1, 2, 3, 4))  // 10
```

Inside the function, `nums` is a slice of type `[]int`.

### Passing a Slice to a Variadic Function

Use `...` to expand an existing slice:

```go
args := []int{1, 2, 3, 4}
fmt.Println(sum(args...)) // 10
```

### Variadic with Other Parameters

The variadic parameter must be the last parameter:

```go
func printf(format string, args ...interface{}) {
    // ...
}
```

## Function Values

Functions are first-class values. They can be assigned to variables, passed as arguments, and
returned from other functions:

```go
func apply(fn func(int, int) int, x, y int) int {
    return fn(x, y)
}

add := func(a, b int) int { return a + b }
fmt.Println(apply(add, 3, 4)) // 7
```

Function values are comparable. Two function values are equal if they refer to the same function or
were created by evaluating the same function literal:

```go
fn1 := func() {}
fn2 := func() {}
fmt.Println(fn1 == fn2) // false -- different function literals
```

## Closures

A closure is a function value that references variables from its enclosing scope. The closure
captures the variables by reference, not by value:

```go
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

c := counter()
fmt.Println(c()) // 1
fmt.Println(c()) // 2
fmt.Println(c()) // 3
```

Each call to `counter()` creates a new `count` variable. The returned closure shares the same
`count` instance.

### Closure Capture Gotcha

Closures capture variables by reference. In a loop, all iterations share the same variable:

```go
funcs := make([]func(), 3)
for i := 0; i < 3; i++ {
    funcs[i] = func() {
        fmt.Println(i)
    }
}
for _, f := range funcs {
    f() // prints 3, 3, 3 -- not 0, 1, 2
}
```

Fix by passing the variable as an argument:

```go
for i := 0; i < 3; i++ {
    funcs[i] = func(n int) {
        fmt.Println(n)
    }(i)
}
// Now prints 0, 1, 2
```

Or create a local copy:

```go
for i := 0; i < 3; i++ {
    i := i // create new variable scoped to this iteration
    funcs[i] = func() {
        fmt.Println(i)
    }
}
```

## Methods

Go does not have classes. Methods are defined on receiver types:

```go
type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}
```

### Value vs Pointer Receivers

- **Value receiver** (`r Rectangle`): operates on a copy. Cannot modify the original. Suitable when
  the method does not mutate the receiver and the receiver is small (to avoid copying cost).

- **Pointer receiver** (`r *Rectangle`): operates on the original. Can modify it. Required when the
  method mutates the receiver or the receiver is large (avoids copying).

Go automatically handles the conversion between `T` and `*T` when calling methods:

```go
r := Rectangle{3, 4}
fmt.Println(r.Area()) // OK -- r is addressable, auto-takes address

p := &Rectangle{3, 4}
fmt.Println(p.Area()) // OK -- auto-dereferences
```

### Method Sets

The method set of a type `T` contains all value receiver methods. The method set of `*T` contains
all methods (value and pointer receiver). This matters for interface satisfaction -- if an interface
requires a method with a pointer receiver, only `*T` satisfies it, not `T`.

## Anonymous Functions

Functions without a name, defined inline:

```go
func main() {
    fn := func(x int) int {
        return x * 2
    }
    fmt.Println(fn(5)) // 10

    // Immediately invoked
    result := func(a, b int) int {
        return a + b
    }(3, 4)
    fmt.Println(result) // 7
}
```

## Defer Revisited

`defer` is critical for resource management. The common pattern:

```go
func processFile(path string) error {
    f, err := os.Open(path)
    if err != nil {
        return err
    }
    defer f.Close()

    // work with f
    return nil
}
```

Key rules:

1. Arguments to the deferred function are evaluated immediately, but the call is deferred.
2. Deferred functions execute in LIFO order.
3. Deferred functions can access and modify named return values.
4. `defer` in a loop accumulates calls. For N iterations, N calls are deferred until the function
   returns.

## Common Pitfalls

1. **Named returns with shadowing.** If a named return variable is shadowed by a local variable with
   the same name, the naked return will return the named return variable (which may be the zero
   value), not the local.

2. **Pointer receivers on non-addressable values.** You cannot call a pointer receiver method on a
   non-addressable value (e.g., a struct returned by a function call):

   ```go
   Rectangle{3, 4}.Scale(2) // compile error: cannot call pointer method on non-addressable value
   ```

3. **Closure capture in loops.** All closures in a loop share the same loop variable. Use the
   `i := i` pattern or pass as an argument.

4. **Defer in loops.** `defer` in a for-loop defers every call until the function returns. For
   resource cleanup in loops, call cleanup directly or wrap in an immediately-invoked function.

5. **Variadic with no arguments.** A variadic parameter is never `nil` when called with at least one
   argument. When called with no arguments, it is `nil`:

   ```go
   func check(vals ...int) {
       fmt.Println(vals == nil) // true when called as check()
   }
   ```

6. **Comparing function values.** Function values are comparable but comparison only returns true
   for identical function instances. Two closures with identical bodies are not equal.
