---
id: unsafe-rust
title: Unsafe Rust
description:
  Unsafe Rust — raw pointers, unsafe functions, unsafe traits, FFI, and safety invariants.
slug: unsafe-rust
---

## What `unsafe` Enables

The `unsafe` keyword grants access to five capabilities that the compiler cannot verify:

1. **Dereference raw pointers** — `*const T` and `*mut T`
2. **Call unsafe functions** — `fn foo() { unsafe { ... } }`
3. **Access mutable statics** — `static mut X: i32`
4. **Implement unsafe traits** — `unsafe impl Send for T {}`
5. **Access union fields** — unions require unsafe for field access

`unsafe` does not disable the borrow checker. It does not bypass Rust's safety guarantees — it
allows you to do things that the compiler cannot prove are safe. You are responsible for maintaining
all invariants manually.

## Raw Pointers

### `*const T` and `*mut T`

Raw pointers are like C pointers — they can be null, dangling, misaligned, or aliased. The compiler
does not check them:

```rust
let x = 42;
let raw_const: *const i32 = &x;
let mut y = 42;
let raw_mut: *mut i32 = &mut y;

unsafe {
    println!("const: {}", *raw_const);
    println!("mut: {}", *raw_mut);
    *raw_mut = 43;
    assert_eq!(*raw_mut, 43);
}
```

### Creating Raw Pointers

Raw pointers can be created in safe code — only dereferencing them requires `unsafe`:

```rust
let x = 42;
let ptr: *const i32 = &x;            // safe
let ptr_mut: *mut i32 = &mut x;      // safe
let null: *const i32 = std::ptr::null(); // safe

unsafe {
    // *ptr  // only dereferencing is unsafe
}
```

### Raw Pointer Operations

```rust
let mut values = [1i32, 2, 3, 4, 5];
let ptr: *mut i32 = values.as_mut_ptr();

unsafe {
    // Offset — returns pointer to ptr + count
    let second = ptr.add(1);
    assert_eq!(*second, 2);

    // Read without moving
    let val = ptr.read();
    assert_eq!(val, 1);

    // Write
    ptr.write(100);
    assert_eq!(values[0], 100);

    // Read-add-write in one operation
    let old = ptr.replace(200);
    assert_eq!(old, 100);
    assert_eq!(*ptr, 200);
}
```

### `as_ref` and `as_mut`

Convert raw pointers to optional references:

```rust
let x = 42;
let ptr: *const i32 = &x;

let reference: Option<&i32> = unsafe { ptr.as_ref() };
assert_eq!(reference, Some(&42));

let null: *const i32 = std::ptr::null();
let reference: Option<&i32> = unsafe { null.as_ref() };
assert_eq!(reference, None);
```

`as_ref()` returns `None` for null pointers, preventing undefined behavior from null dereferences.

### Pointer Arithmetic

```rust
let mut arr = [10i32, 20, 30, 40, 50];
let ptr = arr.as_mut_ptr();

unsafe {
    for i in 0..arr.len() {
        *ptr.add(i) *= 2;
    }
}
assert_eq!(arr, [20, 40, 60, 80, 100]);
```

:::danger

Pointer arithmetic that goes out of bounds of the allocated object is undefined behavior, even if
the resulting pointer is not dereferenced. `ptr.add(len)` is UB if the pointer does not point to an
allocation of at least `len` elements.

:::

## Unsafe Functions and Blocks

### Unsafe Functions

Functions marked `unsafe` declare that the caller must uphold certain invariants:

```rust
unsafe fn dangerous() {
    // implementation that requires caller to maintain invariants
}

fn caller() {
    unsafe {
        dangerous();
    }
}
```

### Unsafe Blocks

`unsafe` blocks delimit the region where unsafe operations are permitted. The compiler checks that
all unsafe operations occur within an `unsafe` block:

```rust
fn split_at_mut(values: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
    let len = values.len();
    assert!(mid <= len);

    let ptr = values.as_mut_ptr();

    unsafe {
        (
            std::slice::from_raw_parts_mut(ptr, mid),
            std::slice::from_raw_parts_mut(ptr.add(mid), len - mid),
        )
    }
}
```

This function cannot be written in safe Rust because it creates two mutable references to
overlapping regions. The `unsafe` block is justified because we guarantee the two slices do not
overlap (the split point ensures this).

### Encapsulating Unsafe in Safe Abstractions

The best practice is to wrap unsafe code in safe functions with documented invariants:

```rust
struct Vec<T> {
    ptr: *mut T,
    len: usize,
    cap: usize,
}

impl<T> Vec<T> {
    fn push(&mut self, value: T) {
        if self.len == self.cap {
            self.grow();
        }
        unsafe {
            std::ptr::write(self.ptr.add(self.len), value);
        }
        self.len += 1;
    }
}
```

The caller of `push` does not need `unsafe` — the safety invariant is maintained internally.

## Unsafe Traits

### `Send` and `Sync`

The `Send` and `Sync` traits are auto-implemented by the compiler. Manually implementing them is
`unsafe` because you are asserting thread safety that the compiler cannot verify:

```rust
struct MyType {
    pointer: *const i32,
}

unsafe impl Send for MyType {}
unsafe impl Sync for MyType {}
```

:::danger

Manually implementing `Send` or `Sync` incorrectly causes data races, which are undefined behavior.
Only do this when you can rigorously prove thread safety. This typically requires that the raw
pointer is only accessed through a synchronization mechanism (mutex, atomic, etc.) that the compiler
cannot see.

:::

### Global Allocator

Implementing the global allocator requires `unsafe`:

```rust
use std::alloc::{GlobalAlloc, Layout, System};

struct MyAllocator;

unsafe impl GlobalAlloc for MyAllocator {
    unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
        System.alloc(layout)
    }

    unsafe fn dealloc(&self, ptr: *mut u8, layout: Layout) {
        System.dealloc(ptr, layout)
    }
}

#[global_allocator]
static ALLOCATOR: MyAllocator = MyAllocator;
```

## FFI (Foreign Function Interface)

### Calling C from Rust

```rust
extern "C" {
    fn abs(input: i32) -> i32;
    fn malloc(size: usize) -> *mut u8;
    fn free(ptr: *mut u8);
    fn printf(format: *const i8, ...) -> i32;
}

fn main() {
    unsafe {
        let result = abs(-42);
        assert_eq!(result, 42);

        let ptr = malloc(1024);
        if !ptr.is_null() {
            free(ptr);
        }
    }
}
```

### Calling Rust from C

```rust
#[no_mangle]
pub extern "C" fn rust_add(a: i32, b: i32) -> i32 {
    a + b
}

#[no_mangle]
pub extern "C" fn rust_greet(name: *const i8) {
    unsafe {
        let name_str = std::ffi::CStr::from_ptr(name);
        println!("hello, {}", name_str.to_str().unwrap());
    }
}
```

### FFI Strings

```rust
use std::ffi::{CString, CStr};

fn rust_to_c(s: &str) -> CString {
    CString::new(s).expect("CString::new failed — contains null byte")
}

fn c_to_rust<'a>(s: &'a CStr) -> &'a str {
    s.to_str().expect("invalid UTF-8")
}

let c_string = rust_to_c("hello");
let rust_str = c_to_rust(c_string.as_c_str());
assert_eq!(rust_str, "hello");
```

### `cbindgen`

`cbindgen` generates C header files from Rust FFI declarations:

```toml
[package.metadata.cbindgen]
header = "my_lib.h"
```

```bash
cbindgen --config cbindgen.toml --crate my_lib --output my_lib.h
```

### FFI Safety Rules

1. Rust `extern "C"` functions must not panic across the FFI boundary
2. C strings are null-terminated; Rust strings are not — use `CString`/`CStr`
3. C does not have Move semantics — Rust values passed to C must be `Copy` or leaked
4. C does not have destructors — resources allocated by Rust and passed to C must be freed manually
   or through a callback
5. The ABI must match — `"C"` is the most portable, but platform-specific ABIs exist

## Safety Invariants

### What Makes Unsafe Code Sound

Unsafe code is sound if it maintains the following invariants:

1. **No null dereferences** — raw pointers are checked for null before dereferencing
2. **No dangling pointers** — pointers reference valid memory
3. **No aliasing violations** — no `&T` and `&mut T` to the same data simultaneously
4. **No out-of-bounds access** — pointer arithmetic stays within allocation bounds
5. **No data races** — concurrent access is properly synchronized
6. **No use-after-free** — memory is not accessed after being deallocated

### Encapsulation Pattern

Wrap unsafe code in safe abstractions with documented preconditions:

```rust
struct BoundedSlice<'a, T> {
    ptr: *const T,
    len: usize,
    _marker: std::marker::PhantomData<&'a T>,
}

impl<'a, T> BoundedSlice<'a, T> {
    fn new(data: &'a [T]) -> Self {
        BoundedSlice {
            ptr: data.as_ptr(),
            len: data.len(),
            _marker: std::marker::PhantomData,
        }
    }

    fn get(&self, index: usize) -> Option<&'a T> {
        if index < self.len {
            unsafe { Some(&*self.ptr.add(index)) }
        } else {
            None
        }
    }
}
```

The caller never uses `unsafe` — the safe abstraction enforces bounds checking.

## Common Unsafe Patterns

### `Vec` Internals

Understanding how `Vec` works internally is essential for writing unsafe code correctly:

```
┌──────────────────────────────────────────────┐
│  Vec<T>                                      │
│  ┌──────────┬────────┬──────────┐            │
│  │  ptr     │  len   │ capacity │            │
│  └────┼─────┴────────┴──────────┘            │
│       │                                      │
│       ▼                                      │
│  ┌───┬───┬───┬───┬───┬───┬───┬───┐          │
│  │ 0 │ 1 │ 2 │ 3 │   │   │   │   │          │
│  └───┴───┴───┴───┴───┴───┴───┴───┘          │
│  ←──── len ────→                             │
│  ←──────── capacity ──────────────→          │
└──────────────────────────────────────────────┘
```

### Arena Allocators

Arena allocation allocates from a contiguous memory region. All allocations are freed at once when
the arena is dropped. This eliminates per-allocation deallocation overhead and ensures all
references have the same lifetime:

```rust
struct Arena {
    data: Vec<u8>,
    len: usize,
}

impl Arena {
    fn new(capacity: usize) -> Self {
        Arena {
            data: vec![0; capacity],
            len: 0,
        }
    }

    fn alloc<T>(&mut self, value: T) -> &mut T {
        let align = std::mem::align_of::<T>();
        let size = std::mem::size_of::<T>();

        let offset = (self.len + align - 1) & !(align - 1);
        assert!(offset + size <= self.data.len(), "arena exhausted");

        unsafe {
            let ptr = self.data.as_mut_ptr().add(offset) as *mut T;
            ptr.write(value);
            self.len = offset + size;
            &mut *ptr
        }
    }
}
```

### String Interning

```rust
use std::collections::HashMap;
use std::cell::RefCell;

struct Interner<'a> {
    strings: RefCell<HashMap<&'a str, &'a str>>,
    storage: RefCell<Vec<String>>,
}

impl<'a> Interner<'a> {
    fn new() -> Self {
        Interner {
            strings: RefCell::new(HashMap::new()),
            storage: RefCell::new(Vec::new()),
        }
    }

    fn intern(&self, s: &str) -> &str {
        if let Some(&cached) = self.strings.borrow().get(s) {
            return cached;
        }
        let owned = s.to_string();
        let leaked: &'a str = unsafe {
            let ptr = owned.as_ptr();
            let len = owned.len();
            std::mem::forget(owned);
            std::str::from_utf8_unchecked(std::slice::from_raw_parts(ptr, len))
        };
        self.storage.borrow_mut().push(leaked.to_string());
        self.strings.borrow_mut().insert(leaked, leaked);
        leaked
    }
}
```

:::danger

The `intern` method uses `std::mem::forget` to leak memory intentionally. The returned `&'a str` has
a lifetime tied to the arena, which is correct as long as the arena outlives all interned
references. If the arena is dropped while interned references exist, they become dangling.

:::

## Undefined Behavior in Rust

Undefined behavior (UB) means the compiler is free to assume the undefined operation never happens
and can optimize based on that assumption. UB in Rust includes:

- Dereferencing a null pointer
- Dereferencing a dangling pointer (use-after-free)
- Creating two mutable references to the same data
- Reading uninitialized memory (except for `MaybeUninit`)
- Out-of-bounds array/vector access (via unchecked indexing)
- Calling `extern "C"` functions that violate their documented requirements
- Integer overflow in release mode (wraps, but is defined behavior)
- Data races (concurrent unsynchronized access)

### Detecting UB with `miri`

`miri` is an interpreter for Rust's mid-level IR (MIR) that detects undefined behavior:

```bash
cargo +nightly miri test
cargo +nightly miri run
```

`miri` detects:

- Use of uninitialized memory
- Out-of-bounds access
- Invalid memory alignment
- Data races
- Null pointer dereferences
- Invalid enum discriminants

## Testing Unsafe Code

### Unit Tests for Safe Wrappers

Test the safe abstraction, not the unsafe internals:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_bounded_slice_valid_index() {
        let data = [10, 20, 30];
        let slice = BoundedSlice::new(&data);
        assert_eq!(slice.get(0), Some(&10));
        assert_eq!(slice.get(2), Some(&30));
    }

    #[test]
    fn test_bounded_slice_out_of_bounds() {
        let data = [10, 20, 30];
        let slice = BoundedSlice::new(&data);
        assert_eq!(slice.get(3), None);
        assert_eq!(slice.get(100), None);
    }

    #[test]
    fn test_arena_alloc() {
        let mut arena = Arena::new(1024);
        let a = arena.alloc(42);
        let b = arena.alloc("hello");
        assert_eq!(*a, 42);
        assert_eq!(*b, "hello");
    }
}
```

### Property-Based Testing with `miri`

```bash
cargo +nightly miri test
```

Run all tests under `miri` to catch undefined behavior that unit tests might miss.

### Fuzz Testing

```toml
[dev-dependencies]
arbitrary = "1"
```

Fuzz testing with `cargo-fuzz` or `proptest` is especially valuable for unsafe code because it
exercises edge cases that hand-written tests may miss.

## When to Use `unsafe`

### Valid Uses

1. **FFI** — calling C functions or exposing Rust functions to C
2. **Performance-critical code** — after profiling shows a bottleneck
3. **Implementing safe abstractions** — `Vec`, `String`, `Box` are all implemented with `unsafe`
4. **Interfacing with hardware** — memory-mapped I/O, raw device access
5. **Custom allocators** — implementing `GlobalAlloc`

### Anti-Patterns

1. **Bypassing the borrow checker** — if the borrow checker rejects your code, redesign the data
   flow. `unsafe` to bypass borrow checking almost always introduces soundness bugs.
2. **Premature optimization** — benchmark first, use `unsafe` only when profiling shows it is
   necessary.
3. **Raw pointers for convenience** — use references and smart pointers unless you have a specific
   reason for raw pointers.

## Common Pitfalls

1. **Dereferencing null pointers.** Always check `ptr.is_null()` before dereferencing. Use
   `ptr.as_ref()` which returns `Option<&T>` and handles null safely.

2. **Use-after-free through raw pointers.** A raw pointer may outlive the data it points to. The
   compiler does not track this — you must ensure the pointer's lifetime does not exceed the data's
   lifetime.

3. **Aliasing violations.** Creating `&T` and `&mut T` to the same data is UB, even through raw
   pointers. The `unsafe` block does not exempt you from Rust's aliasing rules.

4. **Uninitialized memory.** `MaybeUninit<T>` is the correct way to work with uninitialized memory.
   Reading from uninitialized memory is UB, even for `u8`.

5. **Panic across FFI.** A Rust panic unwinding across a C callback is UB. Use
   `std::panic::catch_unwind` at FFI boundaries or compile with `panic = "abort"`.

6. **Not using `miri`.** Any code using `unsafe` should be tested with `miri` to catch undefined
   behavior that may not manifest in normal testing.

7. **Over-large `unsafe` blocks.** Keep `unsafe` blocks as small as possible. Each block should
   contain exactly the operations that require `unsafe`, with clear comments explaining why they are
   safe.

8. **Assuming layout.** Unless `#[repr(C)]` is specified, the compiler may reorder struct fields and
   add padding. Do not rely on field order or offset calculations without explicit `repr`.

9. **Thread safety assertions without proof.** Manually implementing `Send` or `Sync` without a
   rigorous proof of thread safety is a common source of data races. Document the proof.

10. **Ignoring `#[no_mangle]` for FFI.** Without `#[no_mangle]`, Rust mangles function names, making
    them inaccessible from C. Always use `#[no_mangle]` on `extern "C"` functions that C code calls.

## Unsafe Code Checklist

```mermaid
graph TD
    A[Writing unsafe code] --> B{Is this the minimal unsafe surface?}
    B -->|No| C[Reduce unsafe scope]
    B -->|Yes| D{Are invariants documented?}
    D -->|No| E[Document preconditions and invariants]
    D -->|Yes| F{Is memory validity guaranteed?}
    F -->|No| G[Add null checks, bounds checks]
    F -->|Yes| H{No aliasing violations?}
    H -->|No| I[Ensure exclusive access where needed]
    H -->|Yes| J{No UB from data races?}
    J -->|No| K[Add synchronization]
    J -->|Yes| L[Tested with miri?}
    L -->|No| M[Run cargo +nightly miri test]
    L -->|Yes| N[Fuzz tested?}
    N -->|No| O[Add fuzz testing]
    N -->|Yes| P[Code is sound]
```

## Advanced Unsafe Patterns

### `MaybeUninit<T>`

`MaybeUninit<T>` is the correct way to work with uninitialized memory. It prevents reading
uninitialized values and is the foundation for manually constructing types without calling their
constructors:

```rust
use std::mem::MaybeUninit;

struct Buffer {
    data: [u8; 1024],
    len: usize,
}

impl Buffer {
    fn new() -> Self {
        let mut data = MaybeUninit::<[u8; 1024]>::uninit();

        unsafe {
            data.as_mut_ptr().write_bytes(0, 1);
            Buffer {
                data: data.assume_init(),
                len: 0,
            }
        }
    }
}
```

:::danger

`assume_init()` is `unsafe` because reading uninitialized memory is UB. You must ensure that every
byte of the `MaybeUninit` has been written to before calling `assume_init()`. Use `write_bytes`,
individual `write()` calls, or `ptr::copy_nonoverlapping` to initialize the memory.

:::

### `MaybeUninit` for Arrays

Creating an array of non-`Copy` types without calling `Default`:

```rust
use std::mem::MaybeUninit;

fn create_array<T>(count: usize, init: impl Fn(usize) -> T) -> Vec<T> {
    let mut items: Vec<MaybeUninit<T>> = Vec::with_capacity(count);

    unsafe {
        for i in 0..count {
            items.push(MaybeUninit::new(init(i)));
        }

        let items = std::mem::transmute::<Vec<MaybeUninit<T>>, Vec<T>>(items);
        items
    }
}

let items = create_array(10, |i| format!("item_{}", i));
assert_eq!(items.len(), 10);
assert_eq!(items[5], "item_5");
```

### Manual `Drop` with Raw Pointers

When you allocate memory manually, you must deallocate it. Implement `Drop` to ensure cleanup:

```rust
use std::ptr;
use std::alloc::{alloc, dealloc, Layout};

struct ManualBuffer {
    ptr: *mut u8,
    layout: Layout,
}

impl ManualBuffer {
    fn new(size: usize) -> Self {
        let layout = Layout::array::<u8>(size).unwrap();
        let ptr = unsafe { alloc(layout) };
        if ptr.is_null() {
            std::alloc::handle_alloc_error(layout);
        }
        ManualBuffer { ptr, layout }
    }

    fn as_slice(&self) -> &[u8] {
        unsafe { std::slice::from_raw_parts(self.ptr, self.layout.size()) }
    }
}

impl Drop for ManualBuffer {
    fn drop(&mut self) {
        unsafe {
            dealloc(self.ptr, self.layout);
        }
    }
}
```

### Transmuting Types

`std::mem::transmute` reinterprets the bits of one type as another. It is extremely dangerous and
should be avoided when alternatives exist:

```rust
// Dangerous — use only when you understand the exact bit layout
let a: u32 = 0x12345678;
let bytes: [u8; 4] = unsafe { std::mem::transmute(a) };
assert_eq!(bytes, [0x78, 0x56, 0x34, 0x12]);  // little-endian
```

Prefer safe alternatives:

```rust
// Safe alternative: use to_be_bytes / to_le_bytes
let bytes = a.to_le_bytes();
assert_eq!(bytes, [0x78, 0x56, 0x34, 0x12]);

// Safe alternative: use bytemuck or zerocopy crates
// These provide checked transmute operations
```

### Reading Struct Fields with Raw Pointers

When implementing custom data structures, you may need to access struct fields through raw pointers:

```rust
struct Node {
    value: i32,
    next: *mut Node,
}

impl Node {
    fn append(&mut self, value: i32) {
        let new_node = Box::into_raw(Box::new(Node {
            value,
            next: std::ptr::null_mut(),
        }));

        unsafe {
            let mut current = self as *mut Node;
            while !(*current).next.is_null() {
                current = (*current).next;
            }
            (*current).next = new_node;
        }
    }
}

impl Drop for Node {
    fn drop(&mut self) {
        unsafe {
            let mut current = self.next;
            while !current.is_null() {
                let boxed = Box::from_raw(current);
                current = boxed.next;
            }
        }
    }
}
```

## `unsafe` and the Standard Library

### `Vec::set_len`

`Vec::set_len()` is unsafe because it changes the logical length without initializing the elements:

```rust
use std::mem::MaybeUninit;

fn uninitialized_vec(len: usize) -> Vec<u8> {
    let mut v = Vec::with_capacity(len);
    unsafe {
        v.set_len(len);
    }
    v
}
```

The elements from `0..len` are uninitialized. Reading them is UB. Use `MaybeUninit` instead.

### `slice::from_raw_parts`

Creating a slice from a raw pointer and length is unsafe because you must guarantee that:

1. The pointer is valid for `len` elements
2. The pointer is properly aligned
3. The memory is not mutated by anything else during the slice's lifetime

```rust
use std::slice;

fn split_at_mid(data: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
    let len = data.len();
    assert!(mid <= len);
    unsafe {
        let ptr = data.as_mut_ptr();
        (
            slice::from_raw_parts_mut(ptr, mid),
            slice::from_raw_parts_mut(ptr.add(mid), len - mid),
        )
    }
}
```

### `String::from_utf8_unchecked`

Convert a `Vec<u8>` to a `String` without validating UTF-8:

```rust
fn from_ascii(s: &[u8]) -> String {
    assert!(s.iter().all(|&b| b < 128), "not ASCII");
    unsafe { String::from_utf8_unchecked(s.to_vec()) }
}
```

Only use this when you can prove the bytes are valid UTF-8. The assertion above checks ASCII (which
is a subset of UTF-8), so the conversion is safe.

## Interoperability with C++

### `cxx` Crate

The `cxx` crate provides safe C++ interoperability:

```toml
[dependencies]
cxx = "1"

[build-dependencies]
cxx-build = "1"
```

```rust
#[cxx::bridge]
mod ffi {
    extern "C++" {
        include!("mylib.h");
        type MyClass;
        fn my_function(obj: &MyClass) -> i32;
    }

    extern "Rust" {
        fn rust_callback(value: i32);
    }
}

fn rust_callback(value: i32) {
    println!("callback from C++: {}", value);
}
```

### `bindgen` for C Headers

`bindgen` generates Rust bindings from C header files:

```bash
cargo install bindgen
bindgen mylib.h -o bindings.rs
```

## Safety Documentation Standards

Every `unsafe` block should have a comment explaining:

1. What the unsafe code does
2. Why it is safe (which invariants are upheld)
3. What would break if the invariants were violated

```rust
// SAFETY: `ptr` was allocated with `alloc(layout)` in `new()` and has not been freed.
// The layout is the same as used for allocation, so deallocating with the same layout
// is correct. The pointer is non-null because we checked in `new()`.
unsafe {
    dealloc(self.ptr, self.layout);
}
```

## `unsafe` Code Review Checklist

When reviewing code that uses `unsafe`, verify:

1. The unsafe surface is as small as possible
2. Every `unsafe` block has a SAFETY comment
3. All pointer operations are bounds-checked
4. No aliasing violations (no `&T` and `&mut T` to the same data)
5. All memory is properly initialized before use
6. All memory is properly deallocated (no leaks)
7. No data races in concurrent code
8. FFI boundaries handle panics correctly
9. The code has been tested with `miri`
10. The code has been fuzz tested for edge cases
