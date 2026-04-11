---
title: Macros
date: 2026-04-07T00:00:00.000Z
tags:
  - Rust
categories:
  - Rust
slug: rust-macros
---

## Introduction

Macros in Rust are a metaprogramming mechanism that operates on the abstract syntax tree (AST)
rather than on values. They expand at compile time, transforming token sequences into new token
sequences that the compiler then processes as ordinary Rust code.

### Why Macros Exist

Rust macros solve problems that the type system and generics cannot:

- **Variadic functions**: `println!` accepts any number of arguments of any type. A generic function
  cannot express "zero or more arguments, each implementing `Display`" with a single signature.
- **Syntax extension**: Macros can introduce new syntactic forms (pattern matching on token trees)
  that are not representable as function calls. `vec![1, 2, 3]` is syntactic sugar that would be
  impossible as a plain function.
- **Code generation**: Macros eliminate boilerplate by generating repetitive code at compile time.
  Derive macros (`#[derive(Clone)]`) generate `impl` blocks that would be tedious and error-prone to
  write by hand.
- **Domain-specific languages**: Macros can parse custom syntax within their delimiters, enabling
  embedded DSLs like `sql!(SELECT * FROM users)` or `route!(GET /users -> list_users)`.

### Macros vs Functions vs Traits vs Generics

| Mechanism         | Operates on           | Evaluated at | When to use                                     |
| ----------------- | --------------------- | ------------ | ----------------------------------------------- |
| Function          | Values                | Runtime      | Logic on concrete values                        |
| Generic function  | Types (monomorphized) | Compile time | Logic parameterized by type                     |
| Trait             | Behavior contracts    | Compile time | Shared behavior across types                    |
| Declarative macro | Token trees           | Compile time | Pattern-matching on syntax, variable-arity      |
| Proc macro        | AST / TokenStream     | Compile time | Code generation requiring full type information |

### Two Kinds of Macros

Rust has two fundamentally different macro systems:

1. **Declarative macros** (`macro_rules!`): Pattern-match on token trees and produce new token
   trees. They are hygienic (variables in the macro cannot capture variables in the call site) but
   cannot inspect types or perform complex AST manipulation.

2. **Procedural macros**: Rust functions that take a `TokenStream` and return a `TokenStream`. They
   have full access to the token stream and, via the `syn` crate, to the parsed AST. They come in
   three flavors: derive, attribute-like, and function-like.

## Declarative Macros (`macro_rules!`)

### Basic Syntax

A declarative macro is defined with `macro_rules!` and consists of one or more **arms**, each with a
pattern and an expansion:

```rust
macro_rules! say_hello {
    () => {
        println!("Hello, world!");
    };
}

say_hello!();
```

### Metavariables

Metavariables capture parts of the input and make them available in the expansion. They are prefixed
with `$` and annotated with a **fragment specifier** that constrains what tokens they match:

```rust
macro_rules! create_function {
    ($func_name:ident) => {
        fn $func_name() {
            println!("Called function: {}", stringify!($func_name));
        }
    };
}

create_function!(my_func);
my_func();
```

### Fragment Specifiers

| Specifier  | Matches                                         | Example input                 |
| ---------- | ----------------------------------------------- | ----------------------------- |
| `ident`    | Identifier                                      | `foo`, `MyType`, `_tmp`       |
| `ty`       | Type expression                                 | `i32`, `Vec<String>`, `&[u8]` |
| `expr`     | Expression                                      | `1 + 2`, `foo()`, `x * y`     |
| `path`     | Path (module path or type path)                 | `std::collections::HashMap`   |
| `stmt`     | Statement (without trailing semicolon)          | `let x = 5`                   |
| `block`    | Block (braced statements)                       | `{ let x = 1; x + 2 }`        |
| `pat`      | Pattern                                         | `Some(x)`, `_`, `1..=100`     |
| `literal`  | Literal (string, number, char, bool)            | `"hello"`, `42`, `true`       |
| `meta`     | Meta attribute (inner content of `#[...]`)      | `derive(Debug, Clone)`        |
| `item`     | Item (function, struct, impl, etc.)             | `fn foo() {}`, `struct S;`    |
| `vis`      | Visibility modifier                             | `pub`, `pub(crate)`, (none)   |
| `lifetime` | Lifetime                                        | `'a`, `'static`               |
| `tt`       | Token tree (single token or matched delimiters) | `=>`, `(a, b)`, `[]`          |

The `tt` specifier is the most flexible -- it matches any single token or any pair of matched
delimiters (parentheses, brackets, or braces). It is the "wildcard" of fragment specifiers.

### Repetition

Declarative macros support repetition with the syntax `$( ... ) sep rep` where `sep` is an optional
separator and `rep` is one of:

- `*` -- zero or more repetitions
- `+` -- one or more repetitions
- `?` -- zero or one repetition

```rust
macro_rules! count_args {
    () => { 0usize };
    ($first:tt $(, $rest:tt)*) => {
        1usize + count_args!($($rest),*)
    };
}

assert_eq!(count_args!(), 0);
assert_eq!(count_args!(a), 1);
assert_eq!(count_args!(a, b, c), 3);
```

The separator can be any token. Common separators are `,` (comma) and `;` (semicolon):

```rust
macro_rules! vector {
    ($($elem:expr),* $(,)?) => {
        {
            let mut v = Vec::new();
            $( v.push($elem); )*
            v
        }
    };
}

let v = vector![1, 2, 3];
let v2 = vector![4, 5, 6,];
```

The trailing `$(,)?` makes the trailing comma optional, which is idiomatic Rust style.

### Nested Repetition

Repetitions can be nested. The expansion repeats the innermost repetition completely for each
iteration of the outer one:

```rust
macro_rules! matrix {
    ($([$($elem:expr),+]),+ $(,)?) => {
        {
            vec![
                $(
                    vec![$($elem),+]
                ),+
            ]
        }
    };
}

let m = matrix![
    [1, 2, 3],
    [4, 5, 6],
];
assert_eq!(m[0], vec![1, 2, 3]);
assert_eq!(m[1], vec![4, 5, 6]);
```

### Recursive Macros

A macro arm can invoke itself. This is the primary mechanism for processing variable-length input:

```rust
macro_rules! find_min {
    ($x:expr) => { $x };
    ($x:expr, $($rest:expr),+) => {
        {
            let rest_min = find_min!($($rest),+);
            if $x < rest_min { $x } else { rest_min }
        }
    };
}

assert_eq!(find_min!(3, 1, 4, 1, 5), 1);
```

:::warning

Recursive macros have a recursion limit (default 128 in `macro_rules!`). A deeply recursive macro
will produce the error "recursion limit reached while expanding ...". Use
`#![recursion_limit = "256"]` at the crate root to increase the limit if needed. For truly complex
processing, use a procedural macro instead.

:::

### Token Pasting and `stringify!`

The `stringify!` macro converts a token sequence to a string literal at compile time. This is useful
for debug output and identifiers:

```rust
macro_rules! debug_var {
    ($val:expr) => {
        println!("{} = {:?}", stringify!($val), $val);
    };
}

let x = 42;
debug_var!(x);
debug_var!(x + 1);
```

### Conditional Compilation in Macros

Declarative macros can use the `@` internal rule set for recursive descent parsing. This is a
pattern where you define a set of internal rules with the syntax `@<name>` and delegate to them:

```rust
macro_rules! impl_method {
    // Public entry point
    ($name:ident, $ret:ty, $($body:tt)*) => {
        fn $name() -> $ret {
            impl_method!(@parse $($body)*)
        }
    };

    // Internal rule: return a literal
    (@parse return $val:expr) => { $val };

    // Internal rule: compute and return
    (@parse $a:expr; $b:expr; return $c:expr) => {
        { let _ = $a; let _ = $b; $c }
    };
}

fn get_value() -> i32 {
    impl_method!(get_value, i32, return 42)
}

fn compute() -> i32 {
    impl_method!(compute, i32, 1 + 1; 2 + 2; return 99)
}
```

### Anatomy of `vec![]`

The standard library `vec!` macro demonstrates several techniques:

```rust
macro_rules! vec {
    ($elem:expr; $n:expr) => {
        std::vec::from_elem($elem, $n)
    };
    ($($x:expr),+ $(,)?) => {
        <[_]>::into_vec(Box::new([$($x),+]))
    };
    () => {
        std::vec::Vec::new()
    };
}

let v1 = vec![1, 2, 3];
let v2 = vec![0; 10];
let v3 = vec![];
```

The `$elem:expr; $n:expr` arm creates a vector of `$n` copies of `$elem`. The `$($x:expr),+` arm
creates a vector from a list of expressions. The `() =>` arm creates an empty vector.

### Anatomy of `println!`

```rust
macro_rules! println {
    () => {
        $crate::io::_print(std::format_args!(""))
    };
    ($($arg:tt)*) => {
        $crate::io::_print(std::format_args!($($arg)*))
    };
}
```

The key insight is that `println!` delegates to `format_args!`, which is a built-in compiler macro
that parses the format string at compile time and validates the arguments. The `$($arg:tt)*` pattern
captures everything as token trees and passes them through to `format_args!`.

### Anatomy of `assert_eq!`

```rust
macro_rules! assert_eq {
    ($left:expr, $right:expr $(,)?) => ({
        match (&$left, &$right) {
            (left_val, right_val) => {
                if !(*left_val == *right_val) {
                    panic!(
                        "assertion `left == right` failed\n  left: {:?}\n right: {:?}",
                        left_val, right_val
                    );
                }
            }
        }
    });
    ($left:expr, $right:expr, $($arg:tt)+) => ({
        match (&$left, &$right) {
            (left_val, right_val) => {
                if !(*left_val == *right_val) {
                    panic!(
                        "assertion `left == right` failed\n  left: {:?}\n right: {:?}: {}",
                        left_val, right_val, std::format_args!($($arg)+)
                    );
                }
            }
        }
    });
}
```

Note the use of `&$left` and `&$right` inside a `match`. Borrowing the arguments ensures they are
only evaluated once, which matters when the expressions have side effects. This is a critical
pattern for any macro that inspects its arguments.

### `#[macro_export]`

By default, a `macro_rules!` macro defined in a module is only visible within that module. Use
`#[macro_export]` to make the macro available at the crate root:

```rust
// In my_macros/src/lib.rs
#[macro_export]
macro_rules! my_assert {
    ($cond:expr) => {
        if !$cond {
            panic!("assertion failed: {}", stringify!($cond));
        }
    };
}
```

:::info

`#[macro_export]` always exports the macro to the crate root, regardless of where the `macro_rules!`
definition appears. This means a macro defined in a submodule is accessible as
`my_crate::my_assert!`, not `my_crate::submodule::my_assert!`. This is a historical design decision
that has no prospect of changing.

:::

### Scoping Rules

Macro scoping in Rust has changed over editions. As of edition 2021:

- A `macro_rules!` macro without `#[macro_export]` is scoped to the module it is defined in.
- A `#[macro_export]` macro is always placed at the crate root and is available to downstream
  crates.
- Macros can be imported with `use my_crate::macro_name;` (note: the `!` is omitted in `use` paths).
- The `$crate` metavariable expands to the path of the defining crate, ensuring that paths inside
  the macro expansion refer to items in the macro's crate, not the calling crate.

```rust
// In crate `helper`
#[macro_export]
macro_rules! make_map {
    ($($key:expr => $val:expr),+ $(,)?) => {
        {
            let mut m = $crate::HashMap::new();
            $(
                m.insert($key, $val);
            )+
            m
        }
    };
}
```

### Limitations of Declarative Macros

1. **No type information**: Declarative macros operate on token trees, not on typed AST nodes. You
   cannot inspect whether an expression has type `i32` or `String` inside a `macro_rules!`
   expansion.

2. **Pattern matching is syntactic, not semantic**: The `ty` fragment specifier matches tokens that
   look like a type, but it cannot distinguish between a type that exists and one that does not. A
   misspelled type name will pass through the macro and only fail later during type checking.

3. **No control flow**: You cannot use `if`/`else` or loops inside a `macro_rules!` expansion. All
   "branching" is done through pattern matching on the input.

4. **Error messages are poor**: When a macro expansion fails, the error points to the macro
   invocation site, not to the specific arm or token that caused the failure. Complex macros with
   many arms produce cryptic error messages.

5. **Recursion limit**: Deeply recursive macros hit the recursion limit and are not suitable for
   processing large inputs.

### Macro Hygiene

Declarative macros are **hygienic**: identifiers introduced by the macro cannot capture identifiers
from the surrounding scope, and identifiers from the surrounding scope cannot accidentally be used
inside the macro.

```rust
macro_rules! use_var {
    () => {
        println!("{}", x);
    };
}

fn main() {
    let x = 42;
    use_var!();
}
```

This code **will not compile**. The `x` inside the macro expansion is in the macro's hygiene
context, which is separate from the call site's `x`. To intentionally use a variable from the call
site, pass it as a metavariable:

```rust
macro_rules! print_val {
    ($val:expr) => {
        println!("{}", $val);
    };
}

fn main() {
    let x = 42;
    print_val!(x);
}
```

The `expr` fragment captures the token `x` from the call site, preserving its hygiene context.

## Procedural Macros

### Overview

Procedural macros are Rust functions that transform a `TokenStream` into another `TokenStream`. They
run as a separate compilation unit (compiled to a dynamic library loaded by the compiler), which
means they can use arbitrary Rust code for parsing and generation.

### Three Types of Procedural Macros

| Type           | Syntax               | Applied to                  |
| -------------- | -------------------- | --------------------------- |
| Derive         | `#[derive(MyTrait)]` | Struct, enum, union         |
| Attribute-like | `#[my_attr(args)]`   | Any item (fn, struct, etc.) |
| Function-like  | `my_macro!(tokens)`  | Arbitrary token sequences   |

### Project Structure

A procedural macro crate has a specific `Cargo.toml` configuration:

```toml
[package]
name = "my_macros"
version = "0.1.0"
edition = "2021"

[lib]
proc-macro = true

[dependencies]
syn = { version = "2", features = ["full", "parsing", "extra-traits"] }
quote = "1"
proc-macro2 = "1"
```

The `proc-macro = true` key tells Cargo this crate produces a proc-macro library. The crate cannot
export anything other than proc-macro entry points.

The typical workspace layout separates the proc-macro crate from the consumer crate:

```
my_project/
  Cargo.toml          # workspace
  my_macros/
    Cargo.toml        # proc-macro = true
    src/lib.rs
  my_app/
    Cargo.toml        # depends on my_macros
    src/main.rs
```

```toml
# workspace Cargo.toml
[workspace]
members = ["my_macros", "my_app"]

# my_app/Cargo.toml
[dependencies]
my_macros = { path = "../my_macros" }
```

### Dependencies

- **`proc-macro2`**: A wrapper around the compiler's `proc_macro::TokenStream` that implements
  `Clone`, `Debug`, and other standard traits. Use `proc_macro2::TokenStream` everywhere in your
  code; convert to/from `proc_macro::TokenStream` only at the entry point.

- **`syn`**: A complete Rust parser. Parses `TokenStream` into typed AST nodes ( structs, functions,
  expressions, types, etc.). Supports `#[derive]` parsing, attribute parsing, and all of Rust
  syntax.

- **`quote`**: A macro for constructing `TokenStream` values from Rust syntax. The inverse of `syn`:
  you write normal Rust code inside `quote!`, and it produces a `TokenStream`.

## Derive Macros

### Definition

**Definition.** A derive macro generates trait implementations for a struct, enum, or union. It is
invoked with `#[derive(AttributeName)]` and the derive macro function receives the type definition
as a `TokenStream`.

### Basic Implementation

```rust
// my_macros/src/lib.rs
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(Inspect)]
pub fn derive_inspect(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;

    let expanded = quote! {
        impl Inspect for #name {
            fn inspect(&self) -> String {
                format!("{}: {:?}", stringify!(#name), self)
            }
        }
    };

    TokenStream::from(expanded)
}
```

```rust
// my_app/src/main.rs
use my_macros::Inspect;

trait Inspect {
    fn inspect(&self) -> String;
}

#[derive(Inspect)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p = Point { x: 1, y: 2 };
    println!("{}", p.inspect());
}
```

### Helper Attributes

Derive macros can declare helper attributes that appear on fields or variants. These are parsed from
the input and used to customize the generated implementation:

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput, Data, Fields, Attribute, Meta, Lit, NestedMeta};

#[proc_macro_derive(Builder, attributes(builder))]
pub fn derive_builder(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;

    let fields = match &input.data {
        Data::Struct(data) => match &data.fields {
            Fields::Named(fields) => &fields.named,
            _ => panic!("Builder only supports structs with named fields"),
        },
        _ => panic!("Builder only supports structs"),
    };

    let builder_name = quote! { #nameBuilder };

    let builder_fields: Vec<_> = fields.iter().map(|f| {
        let name = &f.ident;
        let ty = &f.ty;
        quote! { #name: Option<#ty> }
    }).collect();

    let builder_inits: Vec<_> = fields.iter().map(|f| {
        let name = &f.ident;
        quote! { #name: None }
    }).collect();

    let builder_setters: Vec<_> = fields.iter().map(|f| {
        let name = &f.ident;
        let ty = &f.ty;
        quote! {
            fn #name(mut self, value: #ty) -> Self {
                self.#name = Some(value);
                self
            }
        }
    }).collect();

    let builder_build_fields: Vec<_> = fields.iter().map(|f| {
        let name = &f.ident;
        quote! {
            #name: self.#name.ok_or(concat!(
                "field '", stringify!(#name), "' is required"
            ))?
        }
    }).collect();

    let expanded = quote! {
        pub struct #builder_name {
            #(#builder_fields),*
        }

        impl #name {
            pub fn builder() -> #builder_name {
                #builder_name {
                    #(#builder_inits),*
                }
            }
        }

        impl #builder_name {
            #(#builder_setters)*

            pub fn build(self) -> Result<#name, String> {
                Ok(#name {
                    #(#builder_build_fields),*
                })
            }
        }
    };

    TokenStream::from(expanded)
}
```

```rust
// Usage
#[derive(Builder)]
struct User {
    name: String,
    age: u32,
    email: String,
}

fn main() {
    let user = User::builder()
        .name("Alice".to_string())
        .age(30)
        .email("alice@example.com".to_string())
        .build()
        .unwrap();
}
```

### Parsing Helper Attributes

Helper attributes are accessible via `syn`. The `#[builder(each = "name")]` pattern lets you
customize the setter for `Vec<T>` fields:

```rust
use syn::{Attribute, Meta, Expr, ExprLit, Lit};

fn get_each_attr(attr: &Attribute) -> Option<String> {
    if attr.path().is_ident("builder") {
        attr.parse_args_with(|input: syn::parse::ParseStream| {
            let ident: syn::Ident = input.parse()?;
            if ident == "each" {
                let _eq: Token![=] = input.parse()?;
                let lit: syn::LitStr = input.parse()?;
                Ok(Some(lit.value()))
            } else {
                Ok(None)
            }
        }).ok().flatten()
    } else {
        None
    }
}
```

### Custom Derive with `syn` -- Realistic Example

A derive macro that generates a `Clone` implementation with a log message:

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput, Data, Fields};

#[proc_macro_derive(TrackedClone)]
pub fn derive_tracked_clone(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;

    let clone_body = match &input.data {
        Data::Struct(data) => {
            match &data.fields {
                Fields::Named(fields) => {
                    let field_clones: Vec<_> = fields.named.iter().map(|f| {
                        let name = &f.ident;
                        quote! { #name: self.#name.clone() }
                    }).collect();
                    quote! { Self { #(#field_clones),* } }
                }
                Fields::Unnamed(fields) => {
                    let field_clones: Vec<_> = fields.unnamed.iter().map(|_| {
                        quote! { field.clone() }
                    }).collect();
                    quote! { Self( #(#field_clones),* ) }
                }
                Fields::Unit => quote! { Self },
            }
        }
        Data::Enum(data) => {
            let arms: Vec<_> = data.variants.iter().map(|v| {
                let ident = &v.ident;
                match &v.fields {
                    Fields::Named(fields) => {
                        let names: Vec<_> = fields.named.iter().map(|f| &f.ident).collect();
                        let clones: Vec<_> = names.iter().map(|n| {
                            quote! { #n: #n.clone() }
                        }).collect();
                        quote! {
                            Self::#ident { #(#names),* } => {
                                eprintln!("[TrackedClone] cloning {}::{}", stringify!(#name), stringify!(#ident));
                                Self::#ident { #(#clones),* }
                            }
                        }
                    }
                    Fields::Unnamed(fields) => {
                        let bindings: Vec<_> = fields.unnamed.iter().enumerate().map(|(i, _)| {
                            syn::Ident::new(&format!("field_{}", i), proc_macro2::Span::call_site())
                        }).collect();
                        let clones: Vec<_> = bindings.iter().map(|b| {
                            quote! { #b.clone() }
                        }).collect();
                        quote! {
                            Self::#ident( #(#bindings),* ) => {
                                eprintln!("[TrackedClone] cloning {}::{}", stringify!(#name), stringify!(#ident));
                                Self::#ident( #(#clones),* )
                            }
                        }
                    }
                    Fields::Unit => {
                        quote! {
                            Self::#ident => {
                                eprintln!("[TrackedClone] cloning {}::{}", stringify!(#name), stringify!(#ident));
                                Self::#ident
                            }
                        }
                    }
                }
            }).collect();
            quote! { match self { #(#arms),* } }
        }
        Data::Union(_) => {
            return syn::Error::new_spanned(
                &input.ident,
                "TrackedClone cannot be derived for unions"
            ).to_compile_error().into();
        }
    };

    let expanded = quote! {
        impl Clone for #name {
            fn clone(&self) -> Self {
                #clone_body
            }
        }
    };

    TokenStream::from(expanded)
}
```

## Attribute-like Macros

### Definition

**Definition.** An attribute-like macro is applied to an item (function, struct, impl block, etc.)
with the syntax `#[attr_name(args)]` and replaces or augments the item. Unlike derive macros, it can
modify the item arbitrarily.

### Implementation Pattern

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, parse_quote, ItemFn, AttributeArgs};

#[proc_macro_attribute]
pub fn trace(attr: TokenStream, item: TokenStream) -> TokenStream {
    let _args = parse_macro_input!(attr as AttributeArgs);
    let mut func = parse_macro_input!(item as ItemFn);

    let func_name = &func.sig.ident;
    let func_args = &func.sig.inputs;

    let body = &func.block;
    func.block = parse_quote! {
        {
            eprintln!("[TRACE] entering {}", stringify!(#func_name));
            let __result = #body;
            eprintln!("[TRACE] exiting {}", stringify!(#func_name));
            __result
        }
    };

    TokenStream::from(quote! { #func })
}
```

```rust
// Usage
#[trace]
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

### Attribute with Arguments

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, parse_quote, ItemFn, LitStr, parse::Parse, parse::ParseStream, Token};

struct TraceArgs {
    level: String,
}

impl Parse for TraceArgs {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        let level: LitStr = input.parse()?;
        Ok(TraceArgs { level: level.value() })
    }
}

#[proc_macro_attribute]
pub fn logged(attr: TokenStream, item: TokenStream) -> TokenStream {
    let args = parse_macro_input!(attr as TraceArgs);
    let mut func = parse_macro_input!(item as ItemFn);

    let func_name = &func.sig.ident;
    let level = &args.level;
    let body = &func.block;

    func.block = parse_quote! {
        {
            log::log!(::log::Level::#level, "entering {}", stringify!(#func_name));
            let __result = #body;
            log::log!(::log::Level::#level, "exiting {}", stringify!(#func_name));
            __result
        }
    };

    TokenStream::from(quote! { #func })
}
```

```rust
// Usage
#[logged("Info")]
fn process_data(data: &str) {
    // ...
}
```

### Route Annotation Example

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, parse_quote, ItemFn, LitStr, Token, Ident, braced};

struct RouteArgs {
    method: String,
    path: String,
}

impl syn::parse::Parse for RouteArgs {
    fn parse(input: syn::parse::ParseStream) -> syn::Result<Self> {
        let method: Ident = input.parse()?;
        let _comma: Token![,] = input.parse()?;
        let path: LitStr = input.parse()?;
        Ok(RouteArgs {
            method: method.to_string(),
            path: path.value(),
        })
    }
}

#[proc_macro_attribute]
pub fn route(attr: TokenStream, item: TokenStream) -> TokenStream {
    let args = parse_macro_input!(attr as RouteArgs);
    let mut func = parse_macro_input!(item as ItemFn);
    let func_name = &func.sig.ident;
    let method = &args.method;
    let path = &args.path;

    let route_fn_name = syn::Ident::new(
        &format!("__route_meta_{}", func_name),
        proc_macro2::Span::call_site(),
    );

    let registration = quote! {
        #[doc(hidden)]
        pub fn #route_fn_name() -> (&'static str, &'static str, fn(/* handler args */)) {
            (#method, #path, #func_name)
        }
    };

    let expanded = quote! {
        #func

        #registration
    };

    TokenStream::from(expanded)
}
```

```rust
// Usage
#[route(GET, "/users/{id}")]
fn get_user(id: u32) -> String {
    format!("User {}", id)
}
```

## Function-like Procedural Macros

### Definition

**Definition.** A function-like procedural macro is invoked with `macro_name!(tokens)` syntax and
replaces the entire invocation with the generated code. Unlike `macro_rules!`, it has full access to
the token stream and can parse it with `syn`.

### Implementation Pattern

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, parse::Parse, parse::ParseStream, Ident, Token, LitInt, Result};

struct SeqInput {
    var: Ident,
    from: u64,
    to: u64,
    body: proc_macro2::TokenStream,
}

impl Parse for SeqInput {
    fn parse(input: ParseStream) -> Result<Self> {
        let var: Ident = input.parse()?;
        let _in_token: Ident = input.parse()?;
        if _in_token != "in" {
            return Err(syn::Error::new(_in_token.span(), "expected 'in'"));
        }
        let from: LitInt = input.parse()?;
        let _dots: Token![..] = input.parse()?;
        let to: LitInt = input.parse()?;
        let content;
        syn::braced!(content in input);
        let body: proc_macro2::TokenStream = content.parse()?;
        Ok(SeqInput {
            var,
            from: from.base10_parse()?,
            to: to.base10_parse()?,
            body,
        })
    }
}

#[proc_macro]
pub fn seq(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as SeqInput);
    let var = &input.var;
    let mut expansions = Vec::new();

    for i in input.from..=input.to {
        let lit = syn::LitInt::new(&i.to_string(), proc_macro2::Span::call_site());
        expansions.push(quote! {
            let #var = #lit;
            #input.body
        });
    }

    TokenStream::from(quote! {
        { #(#expansions)* }
    })
}
```

```rust
// Usage
seq!(i in 0..5 {
    println!("iteration {}", i);
});
```

### SQL Macro Example

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, LitStr, Result, Token, Ident, braced};

struct SqlInput {
    query: String,
    params: Vec<Ident>,
}

impl syn::parse::Parse for SqlInput {
    fn parse(input: syn::parse::ParseStream) -> Result<Self> {
        let query: LitStr = input.parse()?;
        let mut params = Vec::new();
        while input.peek(Token![,]) {
            let _comma: Token![,] = input.parse()?;
            if input.is_empty() {
                break;
            }
            params.push(input.parse::<Ident>()?);
        }
        Ok(SqlInput {
            query: query.value(),
            params,
        })
    }
}

#[proc_macro]
pub fn sql(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as SqlInput);
    let query = &input.query;
    let params = &input.params;
    let param_count = params.len();

    let param_refs: Vec<_> = params.iter().map(|p| {
        quote! { &#p }
    }).collect();

    let expanded = quote! {
        {
            static SQL: &str = #query;
            let params: [&(dyn std::any::Any + std::marker::Sync + std::marker::Send); #param_count] = [
                #(#param_refs),*
            ];
            (SQL, params)
        }
    };

    TokenStream::from(expanded)
}
```

```rust
// Usage
let (query, params) = sql!("SELECT * FROM users WHERE id = $1 AND name = $2", user_id, name);
```

:::warning

This SQL macro is a simplified illustration. A production SQL macro would parse the query string,
validate parameter bindings at compile time, and generate type-safe code. Libraries like `sqlx` with
its `query!` macro provide this level of sophistication.

:::

## The `syn` and `quote` Ecosystem

### Parsing with `syn`

The `syn` crate parses token streams into strongly-typed AST nodes. The primary entry points are:

```rust
use syn::{parse2, parse_str, File, ItemFn, ItemStruct, Expr, Type};
use proc_macro2::TokenStream;

// Parse a complete file
let file: File = parse_str(r#"
    fn main() { println!("hello"); }
"#)?;

// Parse from a TokenStream
let tokens: TokenStream = quote! { struct Foo { x: i32 } };
let item: ItemStruct = parse2(tokens)?;

// Parse a single expression
let expr: Expr = parse_str("1 + 2")?;

// Parse a single type
let ty: Type = parse_str("Vec<HashMap<String, i32>>")?;
```

The `parse_macro_input!` macro is a convenience wrapper used in proc-macro entry points:

```rust
let input = parse_macro_input!(input as DeriveInput);
```

It automatically converts `proc_macro::TokenStream` to `proc_macro2::TokenStream`, parses it, and
emits a compile error on parse failure.

### Key `syn` Types

| Type           | Represents                                   |
| -------------- | -------------------------------------------- |
| `DeriveInput`  | A struct, enum, or union (for derive macros) |
| `ItemFn`       | A function definition                        |
| `ItemStruct`   | A struct definition                          |
| `ItemEnum`     | An enum definition                           |
| `ItemImpl`     | An impl block                                |
| `ItemTrait`    | A trait definition                           |
| `ItemMod`      | A module declaration                         |
| `ItemUse`      | A use statement                              |
| `Expr`         | An expression (enum with many variants)      |
| `Type`         | A type (enum with many variants)             |
| `Pat`          | A pattern                                    |
| `Stmt`         | A statement                                  |
| `Lit`          | A literal (string, number, etc.)             |
| `Ident`        | An identifier                                |
| `Meta`         | A meta attribute (inner content of `#[...]`) |
| `Attribute`    | A complete attribute including `#` and path  |
| `Visibility`   | `pub`, `pub(crate)`, or inherited            |
| `Signature`    | A function signature                         |
| `Fields`       | Named, unnamed, or unit fields of a struct   |
| `Variant`      | An enum variant                              |
| `GenericParam` | A generic type or lifetime parameter         |
| `WhereClause`  | A where clause                               |
| `Path`         | A path like `std::collections::HashMap`      |

### Iterating Over Struct Fields

```rust
use syn::{Data, Fields, DeriveInput};

fn process_struct(input: &DeriveInput) {
    if let Data::Struct(data) = &input.data {
        if let Fields::Named(fields) = &data.fields {
            for field in &fields.named {
                let name = &field.ident;
                let ty = &field.ty;
                let vis = &field.vis;
                let attrs = &field.attrs;
                // Process each field...
            }
        }
    }
}
```

### Iterating Over Enum Variants

```rust
use syn::{Data, Fields, Variant};

fn process_enum(input: &DeriveInput) {
    if let Data::Enum(data) = &input.data {
        for variant in &data.variants {
            let name = &variant.ident;
            let fields = &variant.fields;
            let attrs = &variant.attrs;
            // Process each variant...
        }
    }
}
```

### Code Generation with `quote`

The `quote!` macro converts Rust syntax into a `proc_macro2::TokenStream`:

```rust
use quote::quote;

let name = syn::Ident::new("MyStruct", proc_macro2::Span::call_site());
let field_name = syn::Ident::new("x", proc_macro2::Span::call_site());
let field_type: syn::Type = syn::parse_quote!(i32);

let expanded = quote! {
    struct #name {
        #field_name: #field_type,
    }

    impl #name {
        fn new(#field_name: #field_type) -> Self {
            Self { #field_name }
        }
    }
};
```

Inside `quote!`, variables prefixed with `#` are interpolated:

- `#ident` inserts an identifier
- `#expr` inserts an expression (anything that implements `ToTokens`)
- `#(#items)*` inserts a repetition (like `$($items)*` in `macro_rules!`)
- `#(#items),*` inserts a comma-separated repetition
- `##ident` pastes two identifiers (for generating unique names)

### `quote_spanned!`

`quote_spanned!` associates generated tokens with a specific span from the input. This ensures that
error messages point to the correct location in the user's code:

```rust
use quote::quote_spanned;

let span = field.ident.span();
let field_name = &field.ident;

let setter = quote_spanned! {span=>
    fn #field_name(self, value: Value) -> Self {
        self.#field_name = Some(value);
        self
    }
};
```

### Error Handling in Proc Macros

Proc macros return errors by converting `syn::Error` into a `TokenStream` that contains
`compile_error!` invocations:

```rust
use syn::{Error, Result};

fn my_macro(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);

    if let Data::Union(_) = &input.data {
        let err = Error::new_spanned(
            &input.ident,
            "this macro cannot be derived for unions"
        );
        return err.to_compile_error().into();
    }

    // ... generate code
}
```

Multiple errors can be collected with `syn::Error::combine`:

```rust
use syn::{Error, Result};

fn validate_fields(fields: &FieldsNamed) -> Result<()> {
    let mut errors = Vec::new();
    for field in &fields.named {
        if let Some(attr) = field.attrs.iter().find(|a| a.path().is_ident("invalid")) {
            errors.push(Error::new_spanned(attr, "invalid attribute on field"));
        }
    }
    if errors.is_empty() {
        Ok(())
    } else {
        Err(errors.into_iter().reduce(Error::combine).unwrap())
    }
}
```

### `ToTokens` Trait

The `quote::ToTokens` trait is implemented by all `syn` types. It converts an AST node into tokens
that can be interpolated into a `quote!` block. You can implement `ToTokens` for your own types:

```rust
use quote::ToTokens;
use proc_macro2::TokenStream;

struct MyNode {
    name: syn::Ident,
    value: i32,
}

impl ToTokens for MyNode {
    fn to_tokens(&self, tokens: &mut TokenStream) {
        let name = &self.name;
        let value = self.value;
        tokens.extend(quote! {
            const #name: i32 = #value;
        });
    }
}
```

## Advanced Topics

### Macro Hygiene in Detail

Rust macros are hygienic at the level of **identifiers** and **lifetimes**. This means:

1. **Local variables**: A variable introduced by a macro cannot conflict with a variable at the call
   site. They exist in different "syntax contexts."

2. **Paths**: `$crate` is the only way to reference the macro's crate from within the expansion. A
   bare `use` or `super::` refers to the call site's module hierarchy.

3. **Proc macros are NOT fully hygienic**: Procedural macros generate raw token streams. They do not
   automatically get the hygiene that `macro_rules!` provides. A proc macro that generates a local
   variable `let x = ...` could shadow a variable `x` at the call site.

```rust
// This proc macro is NOT hygienic
#[proc_macro]
pub fn unsafe_local(input: TokenStream) -> TokenStream {
    TokenStream::from(quote! {
        let x = 42;
        x
    })
}

// The expansion could shadow the caller's x
fn main() {
    let x = "hello";
    let y = unsafe_local!(); // x is now 42, the original x is shadowed
}
```

To work around this, use unique variable names with `paste!` or `##` (hash-hash) paste syntax:

```rust
use proc_macro2::Span;
let unique_name = syn::Ident::new(
    &format!("__{}_inner", func.sig.ident),
    Span::call_site(),
);
```

### Debugging Macros

#### `cargo expand`

The `cargo-expand` tool shows the full macro expansion of your crate:

```bash
cargo install cargo-expand
cargo expand
cargo expand --lib my_module
cargo expand --tests
```

This is the single most useful tool for debugging macros. It shows exactly what the compiler sees
after all macro expansions.

#### `trace_macros!`

The `trace_macros!` built-in macro prints each macro expansion to stdout during compilation:

```rust
#![feature(trace_macros)]

trace_macros!(true);

vec![1, 2, 3];

trace_macros!(false);
```

This requires the `trace_macros` nightly feature and is primarily useful for understanding how
`macro_rules!` expansions proceed step by step.

#### `log_syntax!`

Another nightly-only macro that prints token trees during expansion:

```rust
#![feature(log_syntax)]

macro_rules! debug_print {
    ($($tok:tt)*) => {
        log_syntax!($($tok)*);
    };
}
```

### Common Patterns

#### Builder Generation

Derive macros are commonly used to generate builder patterns. The key decisions:

- Should the builder use `Option<T>` for required fields or separate required/optional handling?
- Should setters take ownership or borrow?
- Should the builder be generic over error types?

The most ergonomic pattern uses `Option<T>` for all fields and returns `Result<T, E>` from
`build()`. Required fields produce an error if `None`.

#### Enum to String Conversion

```rust
#[proc_macro_derive(ToString)]
pub fn derive_to_string(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;

    let match_arms = match &input.data {
        Data::Enum(data) => {
            data.variants.iter().map(|v| {
                let variant = &v.ident;
                quote! {
                    #name::#variant => stringify!(#variant).to_string()
                }
            })
        }
        _ => {
            return Error::new_spanned(&input.ident, "ToString only supports enums")
                .to_compile_error()
                .into();
        }
    };

    let expanded = quote! {
        impl #name {
            pub fn to_variant_string(&self) -> String {
                match self {
                    #(#match_arms),*
                }
            }
        }
    };

    TokenStream::from(expanded)
}
```

#### Visitor Pattern Generation

For AST traversal, macros can generate visitor trait implementations:

```rust
macro_rules! define_visitor {
    (
        $(fn visit_#name:ident(&mut self, #param:ident: #ty:ty);)*
    ) => {
        trait Visitor {
            $(
                fn visit_#name(&mut self, #param: #ty) {
                    // default: do nothing
                }
            )*
        }
    };
}

define_visitor! {
    fn visit_number(&mut self, value: i64);
    fn visit_string(&mut self, value: &str);
    fn visit_boolean(&mut self, value: bool);
}
```

### Performance Considerations

#### Compile Times

Proc macros run during compilation. Each proc macro crate is compiled once and cached, but the
execution of the macro itself adds to compile time. Strategies to mitigate this:

1. **Minimize `syn` features**: Only enable the `syn` features you need. `full` pulls in every
   parser in the crate. If you only need structs, enable `["derive", "parsing"]` instead of
   `["full"]`.

2. **Avoid heavy computation**: Proc macros should be fast. Do not perform network requests, file
   I/O, or expensive computations inside a proc macro.

3. **Avoid generating excessive code**: A macro that generates thousands of lines of code per
   invocation will slow down the compiler. Consider using generics or runtime dispatch instead.

#### Binary Size

Macros generate code at compile time, which increases binary size through monomorphization. A derive
macro that generates specialized code for every type it is applied to can cause code bloat. This is
the same tradeoff as generic functions.

#### Incremental Compilation

Proc macro crates are not incrementally compiled. Any change to a proc macro crate forces a full
recompilation of all crates that use it. Keep proc macro crates small and stable.

### `paste!` for Identifier Concatenation

The `paste` crate enables identifier pasting in proc macros:

```toml
[dependencies]
paste = "1"
```

```rust
use paste::paste;

macro_rules! make_getter {
    ($name:ident, $field:ident, $ty:ty) => {
        paste! {
            fn [<get_ $name>](&self) -> &$ty {
                &self.$field
            }
        }
    };
}

struct MyStruct {
    age: u32,
    name: String,
}

impl MyStruct {
    make_getter!(age, age, u32);
    make_getter!(name, name, String);
}
```

`paste!` transforms `[<...>]` blocks by concatenating identifiers. This is essential for generating
names that include parts of the input.

## Common Pitfalls

1. **Using `proc_macro::TokenStream` directly instead of `proc_macro2::TokenStream`.** The
   `proc_macro::TokenStream` type cannot be cloned or compared. Always convert to
   `proc_macro2::TokenStream` immediately at the proc-macro entry point and work with `proc_macro2`
   throughout.

2. **Forgetting `#[macro_use]` or proper imports.** In edition 2018+, `macro_rules!` macros from
   external crates must be imported with `use crate_name::macro_name;` (without the `!`). The old
   `#[macro_use] extern crate` syntax is deprecated in edition 2021.

3. **Hygiene violations in proc macros.** Procedural macros are not hygienic for local variables. If
   your proc macro generates a variable named `x`, it can shadow a variable `x` at the call site.
   Use unique names (prefixed with `__` or using `paste!`) to avoid collisions.

4. **Pattern matching order in `macro_rules!`.** Arms are matched top-to-bottom. A more specific
   pattern placed after a more general one will never match. Always put the most specific arms first
   and the most general (catch-all) arms last.

5. **Using `expr` fragment specifier where `tt` is needed.** The `expr` fragment specifier requires
   the matched expression to form a complete expression, which means it consumes trailing tokens
   like `>>` (right-shift) ambiguously. When in doubt, use `tt` and pass the tokens through to
   another macro or built-in.

6. **Not handling all struct field types.** When writing derive macros, you must handle both named
   fields (`struct S { x: i32 }`) and unnamed fields (`struct S(i32)`). Forgetting tuple structs or
   unit structs will cause a panic at derive time. Always match on all `Fields` variants.

7. **Error messages that point to the macro invocation instead of the cause.** Use `quote_spanned!`
   to attach the correct span to generated code, and use `Error::new_spanned()` to attach errors to
   specific tokens. This makes errors much easier to debug.

8. **Proc macro crates cannot export regular items.** A crate with `proc-macro = true` can only
   export proc-macro functions (`#[proc_macro]`, `#[proc_macro_derive]`, `#[proc_macro_attribute]`).
   Any non-macro exports will cause a compile error. Put shared types and helper functions in a
   separate crate and depend on it from both the proc-macro crate and the consumer.

9. **`macro_rules!` arms with overlapping patterns.** Two arms that can match the same input cause
   ambiguity. The compiler will error with "ambiguous macro call" if two arms both match and produce
   different expansions. If they produce the same expansion, the compiler silently picks the first
   one -- but this is fragile and confusing.

10. **Over-reliance on macros for simple abstractions.** Not everything needs to be a macro. If a
    function, trait, or generic can solve the problem, use it instead. Macros are harder to read,
    harder to debug, and harder to document than ordinary Rust code. Reserve macros for cases where
    functions and traits genuinely cannot express the abstraction.

## Reference

### Standard Library Macros

| Macro            | Purpose                                                       |
| ---------------- | ------------------------------------------------------------- |
| `println!`       | Print to stdout with formatting                               |
| `eprintln!`      | Print to stderr with formatting                               |
| `format!`        | Create formatted string                                       |
| `vec!`           | Create a `Vec<T>`                                             |
| `panic!`         | Panic with a message                                          |
| `assert!`        | Assert a condition at runtime                                 |
| `assert_eq!`     | Assert two values are equal                                   |
| `assert_ne!`     | Assert two values are not equal                               |
| `dbg!`           | Print and return a value (debug-only)                         |
| `todo!`          | Mark unimplemented code (panics)                              |
| `unimplemented!` | Mark unimplemented code (panics)                              |
| `unreachable!`   | Mark unreachable code (panics)                                |
| `compile_error!` | Emit a compile-time error                                     |
| `concat!`        | Concatenate string literals at compile time                   |
| `stringify!`     | Convert tokens to a string literal                            |
| `include!`       | Include a file as source code                                 |
| `include_str!`   | Include a file as a `&'static str`                            |
| `include_bytes!` | Include a file as `&'static [u8]`                             |
| `env!`           | Read an environment variable at compile time                  |
| `option_env!`    | Read an environment variable at compile time (returns Option) |
| `cfg!`           | Check a configuration flag at compile time                    |
| `file!`          | Current file path                                             |
| `line!`          | Current line number                                           |
| `column!`        | Current column number                                         |
| `module_path!`   | Current module path                                           |
| `thread_local!`  | Declare a thread-local static                                 |
| `matches!`       | Match an expression against a pattern                         |

### Useful Proc-Macro Crates

| Crate                   | Purpose                                                      |
| ----------------------- | ------------------------------------------------------------ |
| `syn`                   | Full Rust parser for proc macros                             |
| `quote`                 | Code generation via quasi-quoting                            |
| `proc-macro2`           | Stable wrapper around `proc_macro` types                     |
| `thiserror`             | Derive macro for error types                                 |
| `serde`                 | Derive macros for serialization (`Serialize`, `Deserialize`) |
| `derive_builder`        | Builder pattern derive macro                                 |
| `derive_more`           | Additional derives (From, Into, Constructor, etc.)           |
| `paste`                 | Identifier pasting in macros                                 |
| `proc-macro-error`      | Better error handling in proc macros                         |
| ` darling`              | Attribute parsing helpers for proc macros                    |
| `macro_rules_attribute` | Apply `macro_rules!` as attributes                           |
| `cargo-expand`          | Tool to view macro expansions                                |
| `trybuild`              | Test harness for proc macro compile-fail tests               |
| `insta`                 | Snapshot testing (useful for proc macro output)              |
