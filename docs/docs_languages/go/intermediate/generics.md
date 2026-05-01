---
title: Generics
description:
  Generics — Type Parameters; Constraints; Built-in Constraints; Custom
  Constraints with worked examples and exam-style questions.
slug: generics
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## Introduction

Go 1.18 (released March 2022) added generics via type parameters. Generics allow you to write
functions and types that abstract over different concrete types while maintaining full type safety
at compile time.

## Type Parameters

A generic function declares type parameters in square brackets after the function name:

```go
func Map[T, U any](s []T, f func(T) U) []U {
    result := make([]U, len(s))
    for i, v := range s {
        result[i] = f(v)
    }
    return result
}
```

Call with explicit type arguments:

```go
nums := []int{1, 2, 3}
strs := Map[int, string](nums, func(n int) string {
    return strconv.Itoa(n)
})
fmt.Println(strs) // [1 2 3]
```

In most cases, the compiler infers type arguments:

```go
strs := Map(nums, func(n int) string {
    return strconv.Itoa(n)
})
```

## Constraints

A constraint is an interface that restricts which types can be used as a type argument. The `any`
constraint (alias for `interface{}`) allows any type:

```go
func Print[T any](v T) {
    fmt.Printf("%v\n", v)
}
```

### Built-in Constraints

The `cmp` package provides ordered type constraints:

```go
import "cmp"

func Max[T cmp.Ordered](a, b T) T {
    if a > b {
        return a
    }
    return b
}

fmt.Println(Max(3, 7))       // 7
fmt.Println(Max(3.14, 2.71)) // 3.14
fmt.Println(Max("a", "z"))   // z
```

`cmp.Ordered` is defined as:

```go
type Ordered interface {
    ~int | ~int8 | ~int16 | ~int32 | ~int64 |
    ~uint | ~uint8 | ~uint16 | ~uint32 | ~uint64 | ~uintptr |
    ~float32 | ~float64 |
    ~string
}
```

### Custom Constraints

Define constraints as interfaces with type elements:

```go
type Number interface {
    ~int | ~int64 | ~float64
}

func Sum[T Number](nums []T) T {
    var total T
    for _, n := range nums {
        total += n
    }
    return total
}
```

The `~` token means "the underlying type must be." A type `MyInt int` has underlying type `int`, so
it satisfies `~int`.

### Methods in Constraints

Constraints can include methods alongside type elements:

```go
type Stringer interface {
    ~string | ~[]byte
    String() string
}

func Describe[T Stringer](v T) {
    fmt.Println(v.String())
}
```

This constraint requires the type to have an underlying type of `string` or `[]byte` AND to have a
`String() string` method.

### The `constraints` Package

The `golang.org/x/exp/constraints` package provides additional useful constraints:

```go
import "golang.org/x/exp/constraints"

func Clamp[T constraints.Ordered](v, lo, hi T) T {
    if v < lo {
        return lo
    }
    if v > hi {
        return hi
    }
    return v
}
```

Common constraints:

| Constraint             | Types Allowed                                                  |
| ---------------------- | -------------------------------------------------------------- |
| `constraints.Signed`   | `~int`, `~int8`, `~int16`, `~int32`, `~int64`                  |
| `constraints.Unsigned` | `~uint`, `~uint8`, `~uint16`, `~uint32`, `~uint64`, `~uintptr` |
| `constraints.Integer`  | All signed and unsigned integers                               |
| `constraints.Float`    | `~float32`, `~float64`                                         |
| `constraints.Ordered`  | All integers, floats, and `~string`                            |
| `constraints.Complex`  | `~complex64`, `~complex128`                                    |

## Generic Types

Types can also have type parameters:

```go
type Stack[T any] struct {
    items []T
}

func (s *Stack[T]) Push(v T) {
    s.items = append(s.items, v)
}

func (s *Stack[T]) Pop() (T, bool) {
    if len(s.items) == 0 {
        var zero T
        return zero, false
    }
    v := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return v, true
}

func (s *Stack[T]) Len() int {
    return len(s.items)
}
```

Usage:

```go
s := Stack[int]{}
s.Push(1)
s.Push(2)
v, ok := s.Pop()
fmt.Println(v, ok) // 2 true
```

### Generic Slices

```go
type Set[T comparable] struct {
    items map[T]struct{}
}

func NewSet[T comparable]() *Set[T] {
    return &Set[T]{items: make(map[T]struct{})}
}

func (s *Set[T]) Add(v T) {
    s.items[v] = struct{}{}
}

func (s *Set[T]) Contains(v T) bool {
    _, ok := s.items[v]
    return ok
}
```

### Generic Maps

```go
type Pair[K comparable, V any] struct {
    Key   K
    Value V
}

func MapKeys[K comparable, V any](m map[K]V) []K {
    keys := make([]K, 0, len(m))
    for k := range m {
        keys = append(keys, k)
    }
    return keys
}
```

## Type Inference

Go uses type inference for generic functions. The compiler infers type arguments from function
arguments. When inference is ambiguous, you must specify explicitly:

```go
func New[T any]() *T {
    return new(T)
}

// Ambiguous -- no arguments to infer from:
var p *int = New[int]() // must specify

// Unambiguous -- inferred from argument:
s := Map(nums, fn) // T and U inferred from nums and fn
```

## Generic Methods

Methods on generic types can have their own type parameters (separate from the receiver's type
parameters):

```go
func (s *Stack[T]) Filter(predicate func(T) bool) *Stack[T] {
    result := &Stack[T]{}
    for _, v := range s.items {
        if predicate(v) {
            result.Push(v)
        }
    }
    return result
}
```

Note: methods cannot introduce new type parameters that are not on the receiver. All type parameters
must be declared on the type.

## Instantiation

Go uses monomorphization at compile time. Each unique set of type arguments produces a separate
specialization of the generic function or type. There is no boxing or type erasure at runtime.

## Limitations

1. **No specialization.** You cannot provide different implementations for different types. Generic
   code is the same for all type arguments.

2. **No operator methods in constraints.** You cannot require that a type support `+` beyond the
   built-in types. You cannot write a constraint that says "any type with a `+` operator."

3. **No variadic type parameters.** Type parameter lists must be fixed-length.

4. **No type parameter defaults.** Each type parameter must be specified or inferred.

5. **Methods cannot add type parameters.** Only the type's own type parameters are available in
   methods.

## Common Pitfalls

1. **Using `any` as a constraint when a narrower constraint exists.** `any` allows any type,
   including types that do not support the operations your function performs. Use `comparable`,
   `cmp.Ordered`, or a custom constraint to enforce requirements at compile time.

2. **Forgetting `comparable` for map keys and set elements.** If a generic type uses a value as a
   map key, the constraint must include `comparable`.

3. **Confusing `~T` with `T`.** `~int` matches `int` and any type with underlying type `int` (e.g.,
   `type MyInt int`). `int` matches only `int` exactly.

4. **Overusing generics.** Not every function needs to be generic. If a function only works with one
   or two concrete types, concrete implementations are clearer and often more efficient.

5. **Generic type assertion ambiguity.** When type parameters appear in the same signature position
   as concrete types, inference may fail. Specify type arguments explicitly in such cases.
