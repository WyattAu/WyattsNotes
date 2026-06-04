---
title: Introduction to Haskell
description:
  'Haskell introduction covering language history, pure functional programming paradigm, lazy
  evaluation, type inference, ecosystem overview, and getting started with GHC and ghci.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Haskell
categories:
  - Haskell
slug: haskell-intro
---

## What Is Haskell?

Haskell is a **purely functional, statically typed, lazily evaluated** programming language. It was
designed by a committee of researchers in the late 1980s to serve as a common language for research
in functional programming, and has evolved into a practical language used in industry for systems
that demand correctness, concurrency, and abstraction.

Unlike imperative languages where computation proceeds through mutable state and explicit
sequencing, Haskell programs describe **what** to compute rather than **how** to compute it.
Functions in Haskell are mathematical functions: given the same inputs, they always produce the same
outputs and have no side effects.

Key characteristics of Haskell:

- **Purely functional**: No mutable variables, no side effects within function bodies
- **Statically typed**: Types are checked at compile time with powerful type inference
- **Lazily evaluated**: Expressions are evaluated only when their results are needed
- **Type inference**: The compiler deduces most types automatically via the Hindley-Milner algorithm
- **Strongly typed**: No implicit conversions; type safety is enforced at compile time
- **Concurrent**: Excellent support for parallel and concurrent programming via lightweight threads

## History and Evolution

### The Origins (1987--1990)

In 1987, a meeting was held at FPCA (Functional Programming Languages and Computer Architecture) in
Portland, Oregon, to consolidate the proliferation of lazy functional languages. There were more
than a dozen such languages at the time, including Miranda, Lazy ML, Orwell, and Id. The committee
aimed to create a single, open standard that could serve as a basis for research and education.

The resulting language was named after Haskell Curry, the mathematician who made foundational
contributions to mathematical logic and combinatory logic (and the inspiration behind "currying").
The first version of the Haskell report was published in 1990.

### Haskell 98 (1998)

Haskell 98 was the first standardized version of the language. It defined a stable, minimal set of
features intended for teaching and as a base for future extensions. Key features of Haskell 98:

- Standard libraries including Prelude, List, Char, IO, and Monad
- Type classes with no extensions
- Standard derivation for Eq, Ord, Enum, Bounded, Show, Read
- No multi-parameter type classes
- No functional dependencies
- No rank-N types

Haskell 98 provided a clean, well-defined foundation. Many textbooks and courses still teach Haskell
98 as a starting point before moving to extensions.

### Haskell 2010

The Haskell 2010 standard was the next official revision. It incorporated several widely-used
extensions that had become de facto standards. Key additions:

- **Foreign Function Interface (FFI)**: Standardized way to call C functions
- **Hierarchical module names**: Support for dotted module names like `Data.List`
- **Pattern guards**: Guards that use pattern matching
- **No C guards**: Removal of the C-specific guard extension
- **Generalized algebraic data type syntax improvements**: Minor syntactic cleanups

### Modern Haskell (GHC Extensions)

The Glasgow Haskell Compiler (GHC) has become the de facto standard compiler and has driven the
language's evolution through extensions that are enabled via pragmas. Key GHC extensions include:

- **GADTs** (Generalized Algebraic Data Types): More expressive data type definitions
- **TypeFamilies**: Type-level functions for advanced abstraction
- **DataKinds**: Promoting data types to the kind level
- **RankNTypes**: Polymorphic function arguments and results
- **TemplateHaskell**: Metaprogramming via compile-time code generation
- **OverloadedStrings**: Automatic conversion of string literals
- **ViewPatterns**: Pattern matching with arbitrary view functions

## Pure Functional Programming

### What Does "Pure" Mean?

A **pure function** has two essential properties:

1. **Referential transparency**: The result of a function depends only on its arguments. The
   expression `f(x)` can always be replaced by its result without changing the program's behavior.
2. **No side effects**: The function does not modify any external state, perform I/O, or interact
   with the outside world.

```haskell
-- Pure function: same input always produces same output
square :: Int -> Int
square x = x * x

-- Pure function: depends only on its arguments
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)
```

### Referential Transparency

Referential transparency means that an expression can be replaced with its value without changing
the program's meaning. This property enables:

- **Equational reasoning**: You can reason about programs using algebraic substitutions
- **Memoization**: Results can be cached since they never change
- **Parallelism**: Pure computations can run in any order without synchronization
- **Testing**: Pure functions are easy to test since they have no hidden dependencies

```haskell
-- Because of referential transparency, these are equivalent:
map (*2) [1, 2, 3]
-- is the same as
[2, 4, 6]

-- And this:
let x = square 5
in x + x
-- is the same as:
square 5 + square 5
-- is the same as:
50
```

### Separating Side Effects

Haskell does not forbid side effects; it **separates** them from pure code. Side effects are
represented as values in the `IO` monad, making them explicit in the type system. This means you can
always tell from a function's type signature whether it performs I/O.

```haskell
-- Pure: no IO in the type
length :: [a] -> Int
length []     = 0
length (_:xs) = 1 + length xs

-- Impure: IO is explicit in the type
main :: IO ()
main = do
  putStrLn "Enter your name:"
  name <- getLine
  putStrLn ("Hello, " ++ name ++ "!")
```

The type signature `main :: IO ()` immediately tells the reader that this function interacts with
the outside world. This explicitness is one of Haskell's greatest strengths for maintaining large
codebases.

## Lazy Evaluation

### How Lazy Evaluation Works

In Haskell, expressions are **not evaluated until their results are needed**. This is also called
**call-by-need** evaluation or non-strict evaluation. Compare with strict (eager) evaluation used by
most languages:

```haskell
-- In a strict language, both branches would be evaluated
-- In Haskell, only the needed branch is evaluated
if True then expensiveComputationA else expensiveComputationB
-- Only expensiveComputationA is evaluated because the condition is True
```

### Thunks and WHNF

A **thunk** is a deferred computation -- an unevaluated expression waiting to be needed. When a
thunk is demanded, it is evaluated to **Weak Head Normal Form (WHNF)**, which means the outermost
constructor or function application is resolved.

```haskell
-- This creates a thunk for [1..1000000]
-- The list is not materialized in memory
let xs = [1..1000000]

-- This demands only the first element
-- Only the thunk for the head is evaluated
head xs
-- => 1

-- This creates a thunk for the sum
-- The list elements are only computed as needed
let total = sum xs
-- total remains a thunk until its value is demanded
```

### Benefits of Laziness

**Working with infinite data structures**: Lazy evaluation allows you to define and work with
infinite lists naturally:

```haskell
-- Infinite list of natural numbers
nats :: [Integer]
nats = [0..]

-- Infinite list of Fibonacci numbers
fibs :: [Integer]
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)

-- Take first 10 Fibonacci numbers
-- Only computes what is needed
take 10 fibs
-- => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

-- Check if 55 is a Fibonacci number
-- Only computes until it finds or passes 55
55 `elem` fibs
-- => True
```

**Modular programming**: Laziness enables separation of concerns between data generation and data
consumption:

```haskell
-- Generate primes
primes :: [Integer]
primes = sieve [2..]
  where
    sieve (p:xs) = p : sieve [x | x <- xs, x `mod` p /= 0]

-- Consumer decides how many to take
-- The generation and filtering are interleaved
sum (take 100 primes)
-- => 24133

product (take 5 primes)
-- => 2310
```

**Composability**: Functions can be composed without worrying about intermediate data being
materialized:

```haskell
-- This composes three operations on potentially infinite data
-- No intermediate lists are created
result = sum . takeWhile (< 1000) . filter even $ map (^2) [1..]
```

### Pitfalls of Laziness

**Space leaks**: When thunks accumulate faster than they are consumed, memory usage grows
unexpectedly:

```haskell
-- Space leak: the accumulator builds up thunks
-- sum [1..1000000] using foldl accumulates unevaluated thunks
badSum = foldl (+) 0 [1..1000000]

-- Fix with strict foldl'
goodSum = foldl' (+) 0 [1..1000000]
-- foldl' forces evaluation of the accumulator at each step
```

**Debugging difficulty**: Lazy evaluation makes reasoning about evaluation order harder. When a
program crashes or loops, it can be difficult to determine which thunk caused the problem. Tools
like `Debug.Trace` and GHC's profiling flags (`+RTS -s`) help diagnose such issues.

```haskell
import Debug.Trace

-- Trace shows when an expression is evaluated
-- Use only for debugging, not for logic
myFunction x = trace ("Evaluating with x = " ++ show x) (x * 2)
```

### Strictness Annotations

You can selectively enforce strictness when needed:

```haskell
-- Bang patterns extension: force evaluation of arguments
{-# LANGUAGE BangPatterns #-}

sumStrict :: [Int] -> Int
sumStrict = go 0
  where
    go !acc []     = acc
    go !acc (x:xs) = go (acc + x) xs

-- seq function: evaluates first argument to WHNF before returning second
-- Useful for controlling evaluation order
forceSum :: [Int] -> Int
forceSum xs = foldl (\acc x -> acc `seq` acc + x) 0 xs

-- Strict data type constructors
data StrictPair a b = StrictPair !a !b
-- Fields are evaluated when the constructor is applied
```

## Type Inference

### Hindley-Milner Type Inference

Haskell uses the **Hindley-Milner** type inference algorithm (also known as Algorithm W). This means
the compiler can deduce the types of most expressions without explicit annotations. However,
top-level function definitions typically include type signatures as documentation and for clarity.

```haskell
-- The compiler infers: Int -> Int -> Int
doubleAndAdd x y = (x + x) + y

-- The compiler infers: (a, b) -> (a, b) -> (a, [b])
pairProcess p1 p2 = (fst p1, [snd p1, snd p2])

-- The compiler infers: [a] -> Int
myLength [] = 0
myLength (_:xs) = 1 + myLength xs

-- The compiler infers: (a -> b) -> [a] -> [b]
myMap f []     = []
myMap f (x:xs) = f x : myMap f xs
```

### Type Variables and Polymorphism

When the compiler cannot determine a concrete type, it introduces a **type variable** (written in
lowercase, typically starting from `a`). Functions that work for any type are called
**polymorphic**:

```haskell
-- id works for any type a
id :: a -> a
id x = x

-- const works for any types a and b
const :: a -> b -> a
const x y = x

-- The type variable 'a' can be instantiated to any concrete type:
-- id 42         :: Int -> Int
-- id "hello"    :: String -> String
-- id True       :: Bool -> Bool
-- id [1, 2, 3]  :: [Int] -> [Int]
```

### Why Write Type Signatures?

Even though the compiler can infer types, there are strong reasons to write them explicitly:

1. **Documentation**: Type signatures communicate the intended interface
2. **Error messages**: Type errors are localized to the signature, not deep in the implementation
3. **Readability**: Readers can understand the function without reading its body
4. **Safety catch**: If the inferred type does not match the written type, the compiler warns you

```haskell
-- Good: explicit type signature documents intent
-- Type error points here, not deep in the function body
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- The compiler infers: [a] -> [a]
-- Writing it down makes the API clear
reverseList :: [a] -> [a]
reverseList = go []
  where
    go acc []     = acc
    go acc (x:xs) = go (x : acc) xs
```

## The Haskell Ecosystem

### GHC (Glasgow Haskell Compiler)

GHC is the flagship Haskell compiler, developed at the University of Glasgow since 1992. It compiles
Haskell to native code via an intermediate representation called STG (Spineless Tagless G-machine).
GHC features:

- **Native code generation**: Produces optimized machine code for x86, ARM, and other architectures
- **LLVM backend**: Can use LLVM for code generation, often producing faster code
- **Interactive REPL**: GHCi for interactive development and testing
- **Profiling**: Built-in cost-center profiling and heap profiling
- **Language extensions**: Hundreds of extensions enabled via pragmas

```bash
# Compile a Haskell program
ghc Main.hs -O2 -o myprogram

# Run the interactive REPL
ghci MyModule.hs

# Compile with optimizations and threading
ghc -O2 -threaded -with-rtsopts=-N MyProgram.hs
```

### GHCi (Interactive REPL)

GHCi is the interactive environment for Haskell development. It provides:

```haskell
-- Load a module
ghci> :load MyModule

-- Evaluate expressions
ghci> 2 + 3
5
ghci> map (*2) [1, 2, 3]
[2, 4, 6]

-- Check types
ghci> :type map
map :: (a -> b) -> [a] -> [b]

-- Get information about a function
ghci> :info Maybe
data Maybe a = Nothing | Just a

-- List loaded modules
ghci> :module

-- Browse module contents
ghci> :browse Data.List

-- Reload current module
ghci> :reload

-- Set language extensions
ghci> :set -XGADTs
ghci> :set -XOverloadedStrings

-- Enable multiline mode
ghci> :set +m

-- Get help
ghci> :help
```

### Cabal

Cabal is Haskell's original build system and package manager. A Cabal project is defined by a
`.cabal` file that specifies dependencies, build options, and metadata:

```
-- myproject.cabal
name:          myproject
version:       0.1.0.0
build-type:    Simple
cabal-version: >=1.10

library
  exposed-modules: MyLib
  build-depends:  base >=4.14 && <5,
                  containers,
                  text
  hs-source-dirs: src
  default-language: Haskell2010

executable myproject
  main-is:        Main.hs
  build-depends:  base >=4.14 && <5,
                  myproject
  hs-source-dirs: app
  default-language: Haskell2010
```

```bash
# Build the project
cabal build

# Run tests
cabal test

# Enter a development shell with all dependencies
cabal repl
```

### Stack

Stack is a cross-platform build tool that provides reproducible builds through a curated package
index called Stackage. It uses a `stack.yaml` file and a `package.yaml` (hpack format) or `.cabal`
file:

```yaml
# stack.yaml
resolver: lts-22.0
packages:
  - .
extra-deps: []
ghc-options:
  '$locals': -Wall -Werror
```

```bash
# Build the project
stack build

# Run the executable
stack exec myproject

# Run tests
stack test

# Start a GHCi session with project dependencies
stack ghci

# Generate haddock documentation
stack haddock
```

### Hackage

Hackage is Haskell's central package repository at https://hackage.haskell.org. It hosts thousands
of open-source packages. Key resources:

- **Package search**: Find libraries for specific tasks
- **Documentation**: Haddock-generated API docs for every package
- **Module documentation**: Browse module contents and types
- **Package metadata**: Dependencies, license, maintainer information

## Hello World and Compilation

### Your First Haskell Program

```haskell
-- hello.hs
module Main where

main :: IO ()
main = do
  putStrLn "Hello, World!"
  putStrLn "What is your name?"
  name <- getLine
  putStrLn ("Hello, " ++ name ++ "!")
```

### Compiling and Running

```bash
# Compile with GHC
ghc -O2 hello.hs -o hello
./hello

# Run directly with runhaskell (interpreted, no compilation)
runhaskell hello.hs

# Compile with Stack
stack ghc -- -O2 hello.hs -o hello

# Compile with Cabal
cabal build && cabal run
```

### Understanding the Structure

```haskell
module Main where
-- ^ declares this as the Main module

-- 'main' is the entry point when compiled as an executable
-- Its type IO () indicates it performs I/O and returns nothing useful
main :: IO ()
main = do
  -- do notation sequences IO actions
  putStrLn "Hello, World!"  -- prints a string followed by newline
  name <- getLine            -- reads a line from stdin, binds to name
  -- String concatenation with ++
  putStrLn ("Hello, " ++ name ++ "!")
```

### GHCi as a Calculator and Playground

```haskell
ghci> -- Arithmetic
ghci> 2 + 3 * 4
14
ghci> 2^10
1024
ghci> mod 17 5
2

-- String operations
ghci> "Hello" ++ " " ++ "Haskell"
"Hello Haskell"
ghci> length "abc"
3

-- List operations
ghci> [1..10]
[1,2,3,4,5,6,7,8,9,10]
ghci> take 5 [1, 5, 10..]
[1,5,10,15,20]

-- Function definitions in GHCi
ghci> let double x = x * 2
ghci> double 21
42
ghci> let greet name = "Hello, " ++ name
ghci> greet "Haskell"
"Hello, Haskell"

-- Multi-line definitions
ghci> :set +m
ghci> let abs n
ghci>   | n < 0     = negate n
ghci>   | otherwise = n
ghci>
ghci> abs (-5)
5
```

### Basic Project Structure

A typical Haskell project organized with Stack:

```
myproject/
  stack.yaml
  package.yaml
  src/
    Lib.hs
    Internal/
      Helper.hs
  app/
    Main.hs
  test/
    LibTest.hs
  README.md
```

The `package.yaml` (hpack format) provides a cleaner way to define the Cabal package:

```yaml
name: myproject
version: 0.1.0.0
synopsis: A sample Haskell project

library:
  source-dirs: src
  dependencies:
    - base >= 4.14 && < 5
    - containers
    - text

executable myproject:
  main: Main.hs
  source-dirs: app
  dependencies:
    - base
    - myproject

tests:
  myproject-test:
    main: LibTest.hs
    source-dirs: test
    dependencies:
      - base
      - myproject
      - HUnit
```

## Language Extensions and Pragmas

Haskell's extensibility through GHC pragmas is a distinctive feature. Extensions are enabled at the
module level:

```haskell
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE GADTs #-}

module MyModule where
```

Commonly used extensions:

- **OverloadedStrings**: `"hello"` can be any type that implements `IsString`
- **RecordWildCards**: `let { name = n; age = a } in Person {..}`
- **LambdaCase**: `\case` instead of `\x -> case x of`
- **TupleSections**: `(1,)` is equivalent to `\y -> (1, y)`
- **DerivingStrategies**: Fine-grained control over deriving
- **StrictData**: All fields in data types are strict by default

Each extension addresses a specific limitation of Haskell 2010. Together, they form the "Modern
Haskell" programming style used in production code.

## Haskell in Industry

Haskell is used in production at companies that value correctness and abstraction:

- **Finance**: Standard Chartered, Barclays use Haskell for quantitative analysis
- **Blockchain**: Cardano (IOHK) is implemented in Haskell for its strong type safety
- **Web development**: Servant, Yesod, and IHP provide type-safe web frameworks
- **Compilers**: GHC itself, the Agda proof assistant, and the Idris language
- **Systems**: Facebook's spam filtering system (Haxl) uses monad transformers
- **Networking**: The Discord Elixir gateway uses Haskell for real-time features

The combination of strong typing, purity, and concurrency makes Haskell particularly well-suited for
systems where correctness is critical and where concurrent operations are the norm.
