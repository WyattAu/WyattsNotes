---
title: Reflection
description:
  Reflection — reflect.Type and reflect.Value; Kind vs Type; Modifying Values;
  Inspecting Fields with worked examples and exam-style questions.
slug: reflection
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## Overview

The `reflect` package provides runtime type introspection and manipulation. It allows programs to
examine types, inspect struct fields, call methods by name, and modify values dynamically.

Reflection is powerful but slow and type-unsafe. Use it only when static typing is insufficient:
serialization, ORMs, configuration parsing, testing frameworks.

## reflect.Type and reflect.Value

The two core types:

- `reflect.Type` represents a Go type (int, string, struct, slice, etc.)
- `reflect.Value` represents a value of any type

```go
func inspect(i any) {
    t := reflect.TypeOf(i)
    v := reflect.ValueOf(i)

    fmt.Println("Type:", t)
    fmt.Println("Kind:", t.Kind())
    fmt.Println("Value:", v)
}

inspect(42)         // Type: int, Kind: int, Value: 42
inspect("hello")    // Type: string, Kind: string, Value: hello
inspect(3.14)       // Type: float64, Kind: float64, Value: 3.14
```

### Kind vs Type

`Kind` is the underlying category. `Type` is the concrete type:

```go
type MyInt int

var x MyInt = 42
t := reflect.TypeOf(x)

fmt.Println(t.Name()) // MyInt
fmt.Println(t.Kind()) // int
```

`Kind` is one of: `Bool`, `Int`, `Int8`, `Int16`, `Int32`, `Int64`, `Uint`, `Uint8`, `Uint16`,
`Uint32`, `Uint64`, `Float32`, `Float64`, `Complex64`, `Complex128`, `String`, `Array`, `Slice`,
`Map`, `Chan`, `Func`, `Interface`, `Struct`, `Ptr`, `UnsafePointer`.

## Modifying Values

`reflect.ValueOf` returns a non-settable value (a copy). To modify the original, pass a pointer:

```go
x := 42
v := reflect.ValueOf(&x).Elem() // dereference the pointer to get a settable value
v.SetInt(100)
fmt.Println(x) // 100
```

`CanSet()` indicates whether a value can be modified:

```go
v := reflect.ValueOf(x)
fmt.Println(v.CanSet()) // false -- value was copied

v = reflect.ValueOf(&x).Elem()
fmt.Println(v.CanSet()) // true -- points to the original
```

## Struct Reflection

### Inspecting Fields

```go
type Person struct {
    Name string `json:"name" validate:"required"`
    Age  int    `json:"age" validate:"min=0"`
}

p := Person{Name: "Alice", Age: 30}
t := reflect.TypeOf(p)

for i := 0; i < t.NumField(); i++ {
    field := t.Field(i)
    fmt.Printf("Field: %s, Type: %s, Tag: %s\n",
        field.Name, field.Type, field.Tag.Get("json"))
}
// Field: Name, Type: string, Tag: name
// Field: Age, Type: int, Tag: age
```

### Setting Fields by Name

```go
p := Person{}
v := reflect.ValueOf(&p).Elem()

nameField := v.FieldByName("Name")
if nameField.IsValid() && nameField.CanSet() {
    nameField.SetString("Bob")
}

ageField := v.FieldByName("Age")
if ageField.IsValid() && ageField.CanSet() {
    ageField.SetInt(25)
}

fmt.Println(p) // {Bob 25}
```

### Struct Tags

Struct tags are key-value metadata attached to struct fields. They are conventionally used by
libraries for serialization, validation, and ORM mapping:

```go
type Config struct {
    Host     string `toml:"host" default:"localhost"`
    Port     int    `toml:"port" default:"8080"`
    Debug    bool   `toml:"debug" default:"false"`
}
```

Access tags via reflection:

```go
field, _, _ := reflect.TypeOf(Config{}).FieldByName("Host")
tag := field.Tag
fmt.Println(tag.Get("toml"))    // "host"
fmt.Println(tag.Get("default")) // "localhost"
```

## Slice, Map, and Function Reflection

### Creating Slices

```go
sliceType := reflect.TypeOf([]int{})
slice := reflect.MakeSlice(sliceType, 0, 10)
slice = reflect.Append(slice, reflect.ValueOf(1))
slice = reflect.Append(slice, reflect.ValueOf(2))
fmt.Println(slice.Interface()) // [1 2]
```

### Creating Maps

```go
mapType := reflect.TypeOf(map[string]int{})
m := reflect.MakeMap(mapType)
m.SetMapIndex(reflect.ValueOf("a"), reflect.ValueOf(1))
m.SetMapIndex(reflect.ValueOf("b"), reflect.ValueOf(2))
fmt.Println(m.Interface()) // map[a:1 b:2]
```

### Calling Functions

```go
fn := reflect.ValueOf(strings.ToUpper)
result := fn.Call([]reflect.Value{reflect.ValueOf("hello")})
fmt.Println(result[0].Interface()) // "HELLO"
```

For functions with variadic arguments, use `CallSlice`:

```go
fn := reflect.ValueOf(fmt.Sprintf)
result := fn.Call([]reflect.Value{
    reflect.ValueOf("%s %d"),
    reflect.ValueOf("count"),
    reflect.ValueOf(42),
})
```

## Interface to Concrete

Convert an `any` to a concrete type using reflection:

```go
func ToInt(i any) (int, bool) {
    v := reflect.ValueOf(i)
    if v.Kind() == reflect.Int {
        return int(v.Int()), true
    }
    return 0, false
}
```

Prefer type assertions over reflection when the type is known at compile time:

```go
// Better: type assertion
n, ok := i.(int)

// Worse: reflection (slower, no compile-time checking)
v := reflect.ValueOf(i)
```

## Implementing a Generic Formatter

Reflection enables generic processing of arbitrary types:

```go
func PrintFields(v any) {
    val := reflect.ValueOf(v)
    if val.Kind() == reflect.Ptr {
        val = val.Elem()
    }
    if val.Kind() != reflect.Struct {
        fmt.Println("not a struct")
        return
    }

    typ := val.Type()
    for i := 0; i < val.NumField(); i++ {
        field := typ.Field(i)
        value := val.Field(i)
        fmt.Printf("%s (%s): %v\n", field.Name, field.Type, value.Interface())
    }
}
```

## Performance

Reflection is significantly slower than direct access:

```go
// Direct: ~1ns
p.Name = "Alice"

// Reflection: ~100ns (100x slower)
reflect.ValueOf(&p).Elem().FieldByName("Name").SetString("Alice")
```

If performance is critical, avoid reflection. Consider code generation (text/template) or generics
as alternatives.

## Common Pitfalls

1. **Reflecting on unexported fields.** Reflection cannot read or set unexported (lowercase) struct
   fields. `CanSet()` returns false for unexported fields.

2. **Forgetting `Elem()` for pointer values.** `reflect.ValueOf(&x)` gives you a `*int` Value. Call
   `.Elem()` to get the underlying `int` Value for modification.

3. **Panicking on wrong types.** `Int()` panics if the kind is not an integer. Always check `Kind()`
   before calling type-specific methods.

4. **Performance in hot paths.** Reflection is 10-100x slower than direct code. Do not use it in
   tight loops. Cache `reflect.Type` and `reflect.Value` results when possible.

5. **Using reflection when type assertions suffice.** If you know the possible types at compile
   time, use type switches and type assertions. They are type-safe and fast.

6. **Modifying unexported fields.** This is not possible through the `reflect` package. If you must
   do it, use `unsafe` (but this is highly discouraged and may break across Go versions).

7. **Ignoring `CanAddr` and `CanSet`.** Not all `reflect.Value` objects are addressable or settable.
   Always check before attempting modification.
