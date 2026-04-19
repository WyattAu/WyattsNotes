---
title: Arrays, Slices, and Maps
description: Arrays, slices, maps, and struct types in Go.
slug: arrays-slices-maps
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## Arrays

Arrays are fixed-length, homogeneous sequences. The length is part of the type -- `[3]int` and
`[5]int` are different types.

```go
var a [3]int
a[0] = 1
a[1] = 2
a[2] = 3

b := [3]int{1, 2, 3}
c := [...]int{1, 2, 3} // compiler infers length
```

Arrays are values. Assigning or passing an array copies the entire array:

```go
a := [3]int{1, 2, 3}
b := a
b[0] = 99
fmt.Println(a) // [1 2 3] -- unchanged
fmt.Println(b) // [99 2 3]
```

Arrays are stack-allocated when they are local variables. Large arrays (> a few kilobytes) may be
better represented as slices to avoid stack frame bloat.

### Array Length

The built-in `len` returns the length:

```go
a := [5]int{1, 2, 3, 4, 5}
fmt.Println(len(a)) // 5
```

## Slices

Slices are dynamically-sized, flexible views into arrays. A slice is a descriptor containing a
pointer to an underlying array, a length, and a capacity:

```
+-------------------+
| ptr | len | cap   |
+--+---+-----+------+
   |
   v
+---+---+---+---+---+---+
| 1 | 2 | 3 |   |   |   |
+---+---+---+---+---+---+
+---len---+
+-------cap--------+
```

### Creating Slices

```go
// Literal
s := []int{1, 2, 3}

// make with length and capacity
s := make([]int, 5)       // len=5, cap=5
s := make([]int, 0, 10)   // len=0, cap=10

// From an array
a := [5]int{1, 2, 3, 4, 5}
s := a[1:3] // [2, 3], len=2, cap=4
```

### Slicing

Slicing creates a new slice that references the same underlying array:

```go
a := []int{0, 1, 2, 3, 4, 5}
s1 := a[1:4] // [1, 2, 3], len=3, cap=5
s2 := a[2:]  // [2, 3, 4, 5], len=4, cap=4
s3 := a[:3]  // [0, 1, 2], len=3, cap=6
s4 := a[:]   // [0, 1, 2, 3, 4, 5], len=6, cap=6
```

Modifying a slice modifies the underlying array, which is visible through all slices sharing it:

```go
a := []int{0, 1, 2, 3}
s := a[1:3]
s[0] = 99
fmt.Println(a) // [0 99 2 3]
```

### Slice Operations

#### Append

`append` adds elements to a slice. If the capacity is exceeded, a new underlying array is allocated
and all elements are copied:

```go
s := []int{1, 2}
s = append(s, 3)      // [1, 2, 3]
s = append(s, 4, 5)   // [1, 2, 3, 4, 5]
s = append(s, []int{6, 7}...) // [1, 2, 3, 4, 5, 6, 7]
```

`append` may or may not allocate a new array. The return value must be captured:

```go
s := make([]int, 0, 2)
s = append(s, 1)  // len=1, cap=2 -- no reallocation
s = append(s, 2)  // len=2, cap=2 -- no reallocation
s = append(s, 3)  // len=3, cap=4 -- reallocation occurred
```

#### Copy

`copy` copies elements from a source slice to a destination slice:

```go
src := []int{1, 2, 3}
dst := make([]int, len(src))
n := copy(dst, src)
fmt.Println(dst) // [1, 2, 3]
fmt.Println(n)   // 3 -- number of elements copied
```

`copy` copies `min(len(dst), len(src))` elements.

#### Clear

Since Go 1.21, `clear` zeros the elements of a slice:

```go
s := []int{1, 2, 3}
clear(s)
fmt.Println(s) // [0, 0 0]
```

### Slice Growth Strategy

When `append` triggers reallocation, Go typically doubles the capacity for slices smaller than 256
elements and grows by ~25% for larger slices. The exact strategy is an implementation detail of the
runtime and should not be relied upon.

Pre-allocate capacity when the final size is known:

```go
// Bad: causes multiple reallocations
var s []int
for i := 0; i < 10000; i++ {
    s = append(s, i)
}

// Good: single allocation
s := make([]int, 0, 10000)
for i := 0; i < 10000; i++ {
    s = append(s, i)
}
```

### Nil vs Empty Slices

```go
var nilSlice []int       // nil, len=0, cap=0
emptySlice := []int{}    // not nil, len=0, cap=0
madeSlice := make([]int, 0) // not nil, len=0, cap=0
```

The difference matters for JSON marshaling: `nil` marshals to `null`, while `[]int{}` marshals to
`[]`. For most other purposes, they are interchangeable.

## Maps

Maps are hash tables mapping keys to values. The zero value is `nil`. A `nil` map is empty but
cannot be written to.

```go
var m map[string]int   // nil map
m = make(map[string]int)
m["key"] = 42

// Literal
m := map[string]int{
    "a": 1,
    "b": 2,
    "c": 3,
}
```

### Map Operations

```go
m := map[string]int{"x": 10, "y": 20}

// Read
v := m["x"]       // 10
v := m["missing"] // 0 -- zero value for missing keys (no error)

// Read with existence check
v, ok := m["x"]
if ok {
    fmt.Println("found:", v)
}

// Delete
delete(m, "x")

// Length
fmt.Println(len(m))

// Iterate (order is not guaranteed)
for k, v := range m {
    fmt.Printf("%s: %d\n", k, v)
}
```

### Map Keys

Map keys must be comparable. Comparable types are: booleans, integers, floats, strings, pointers,
interfaces (if the dynamic type is comparable), structs (if all fields are comparable), and arrays
(if element type is comparable).

Slices, maps, and functions are not comparable and cannot be used as map keys.

### Map Capacity

Pre-allocate capacity when the approximate size is known:

```go
m := make(map[string]int, 1000) // hint for ~1000 entries
```

## Structs

Structs are aggregate types that group named fields:

```go
type Point struct {
    X, Y float64
}

type Circle struct {
    Center Point
    Radius float64
}
```

### Struct Literals

```go
p := Point{1.0, 2.0}
p := Point{X: 1.0, Y: 2.0} // named fields (order does not matter)
p := Point{}                // zero value: {0, 0}
```

### Anonymous Structs

Useful for intermediate data without defining a named type:

```go
result := struct {
    Value int
    Err   error
}{
    Value: 42,
    Err:   nil,
}
```

### Struct Embedding

Go supports type embedding (not inheritance):

```go
type Base struct {
    ID   int
    Name string
}

type Derived struct {
    Base
    Extra string
}

d := Derived{Base: Base{ID: 1, Name: "test"}, Extra: "data"}
fmt.Println(d.ID)   // 1 -- promoted field
fmt.Println(d.Name) // "test" -- promoted field
```

Promoted fields are accessed directly on the embedding struct. This is syntactic sugar -- there is
no inheritance hierarchy. The embedded struct's methods are also promoted.

### Comparing Structs

Structs are comparable if all their fields are comparable:

```go
a := Point{1.0, 2.0}
b := Point{1.0, 2.0}
fmt.Println(a == b) // true
```

Structs containing slices or maps are not comparable.

## Common Pitfalls

1. **Forgetting to capture `append` return value.** `append` may allocate a new underlying array.
   The original slice header is not updated. Always write `s = append(s, ...)`.

2. **Slicing retains the underlying array.** A small slice of a large array prevents the large array
   from being garbage collected. Use `copy` to create an independent copy:

   ```go
   small := make([]byte, len(large[1000:1100]))
   copy(small, large[1000:1100])
   ```

3. **Writing to a `nil` map.** `var m map[string]int` creates a nil map. Writing to it panics.
   Always initialize with `make` or a literal before writing.

4. **Map iteration order is random.** Go randomizes map iteration order. Do not rely on it. If you
   need ordered iteration, maintain a separate sorted key slice.

5. **Concurrent map access.** Maps are not safe for concurrent use. Use `sync.RWMutex` or `sync.Map`
   for concurrent access.

6. **Struct embedding is not inheritance.** There is no `super` call, no method overriding in the
   OOP sense. Embedding is composition with syntactic sugar for field/method promotion.
