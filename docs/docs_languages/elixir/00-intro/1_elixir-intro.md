---
title: Introduction to Elixir
description:
  'Elixir introduction covering language history, Erlang VM (BEAM) foundation, functional
  programming paradigm, immutability, ecosystem overview, environment setup, and tooling.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Elixir
categories:
  - Elixir
slug: elixir-intro
---

## What Is Elixir?

Elixir is a **functional, concurrent, general-purpose** programming language that runs on the
**Erlang Virtual Machine (BEAM)**. It was designed to build scalable, maintainable, and
fault-tolerant applications by combining the battle-tested Erlang runtime with a modern,
developer-friendly syntax inspired by Ruby.

Elixir programs are compiled to BEAM bytecode and run as lightweight processes that can number in
the millions on a single machine. Each process is isolated, garbage-collected independently, and
communicates through asynchronous message passing. This architecture makes Elixir naturally suited
for distributed systems, real-time applications, and high-availability services.

Key characteristics of Elixir:

- **Functional**: Functions are first-class citizens with no mutable state
- **Concurrent**: Millions of lightweight processes via the BEAM VM
- **Fault-tolerant**: Supervision trees and the "let it crash" philosophy
- **Immutable**: Data is never modified in place; transformations create new values
- **Compiled**: Source is compiled to BEAM bytecode for fast execution
- **Metaprogrammable**: Powerful macro system for compile-time code generation

## History and Origins

### Jose Valim and the Birth of Elixir (2011)

Elixir was created by **Jose Valim**, a Brazilian software developer, in **2011**. At the time,
Valim was a core contributor to the Ruby on Rails framework. His experience building large-scale web
applications in Ruby exposed him to the limitations of thread-based concurrency and the challenges
of building fault-tolerant distributed systems.

Valim was drawn to the Erlang ecosystem -- specifically its proven track record in
telecommunications, messaging systems, and fault-tolerant infrastructure (WhatsApp, Discord,
RabbitMQ all run on Erlang/BEAM). However, he found Erlang's syntax arcane and its tooling lacking
the developer experience he had come to expect from the Ruby world. His goal was to create a
language that would:

1. **Preserve the Erlang VM's strengths**: Concurrency, distribution, fault tolerance, hot code
   swapping
2. **Provide a modern syntax**: Inspired by Ruby, with minimal boilerplate and readability
3. **Enable metaprogramming**: A Lisp-like macro system for extensibility
4. **Improve the developer experience**: Better tooling, documentation generation, testing
   frameworks

The result was Elixir v0.5.0, released in 2012. The language reached version 1.0 in September 2014,
signaling API stability. Subsequent releases have added features like protocol consolidation, a more
efficient compiler, and improved error messages.

### Relationship to Erlang

Elixir is not a replacement for Erlang -- it is a **layer on top of the Erlang VM**. This
relationship has profound implications:

- **Full interoperability**: Elixir code can call Erlang libraries and vice versa without any FFI
  overhead
- **Shared runtime**: Both languages compile to BEAM bytecode and share the same scheduler, garbage
  collector, and distribution mechanisms
- **Erlang ecosystem access**: All existing Erlang libraries (OTP, Cowboy, ETS, Mnesia) are
  available from Elixir with zero-cost interop
- **Battle-tested foundation**: The BEAM VM has been in production use since 1986 and powers some of
  the largest real-time systems in the world

```elixir
# Elixir calling an Erlang function directly
:crypto.hash(:sha256, "hello")

# Elixir using an Erlang library module
:timer.sleep(1000)

# Elixir pattern matching on Erlang records
# (requires :riak_pb records loaded)
```

### The BEAM Virtual Machine

The **BEAM** (Bogdan's Erlang Abstract Machine) is the virtual machine that executes Erlang and
Elixir code. Key architectural features:

**Scheduler**: The BEAM uses a multi-threaded, preemptive scheduler. Each CPU core gets one or more
scheduler threads. Processes are scheduled across these threads using fair, preemptive scheduling
with reductions-based time slicing. A "reduction" is a unit of work; each function call costs one
reduction. When a process exhausts its reduction count, it is preempted.

**Memory management**: Each process has its own heap and stack. Garbage collection is per-process --
when a process terminates, its memory is immediately reclaimed. This eliminates stop-the-world GC
pauses that plague JVM-based languages.

**Distribution**: The BEAM provides transparent distribution. Processes can communicate across nodes
using the same message-passing semantics as local processes. Nodes can be added and removed at
runtime.

**Hot code swapping**: The BEAM supports loading new versions of modules while the system is
running, without stopping the VM. Old processes continue with old code; new processes use new code.
This enables zero-downtime deployments.

## Functional Programming Paradigm

### Core Principles

Elixir embraces functional programming with the following principles:

**Immutability**: All data in Elixir is immutable. When you "modify" a variable, you create a new
binding pointing to a new value. The old value remains unchanged. This eliminates entire categories
of bugs: race conditions, unexpected mutations, and iterator invalidation.

```elixir
list = [1, 2, 3]
new_list = [0 | list]
# list is still [1, 2, 3]
# new_list is [0, 1, 2, 3]
```

**First-class functions**: Functions are values that can be passed as arguments, returned from
functions, and stored in data structures. Anonymous functions are created with `fn...end` or the `&`
shorthand.

**Pattern matching**: Instead of assignment, Elixir uses pattern matching with the `=` operator. The
left side is a pattern; the right side is a value. Elixir attempts to match the value against the
pattern and binds any variables.

**Recursion over loops**: Elixir has no traditional `for` or `while` loops (though it has
comprehensions for transformation). Iteration is achieved through recursion or higher-order
functions like `Enum.map/2` and `Enum.reduce/3`.

**Higher-order functions**: Functions that take other functions as arguments or return functions.
The `Enum` and `Stream` modules provide a rich set of higher-order functions for working with
collections.

```elixir
# Recursive list processing
defmodule Math do
  def sum([]), do: 0
  def sum([head | tail]), do: head + sum(tail)
end

# Same thing with reduce
Enum.reduce([1, 2, 3], 0, fn x, acc -> x + acc end)
```

### Immutability in Practice

Immutability affects every aspect of Elixir programming:

**No in-place modification**: Strings, lists, maps, and tuples cannot be modified. Operations return
new data structures. Internally, the BEAM optimizes this through structural sharing -- new data
structures share memory with old ones where possible.

**Persistent data structures**: When you prepend to a list in Elixir, the new list head points to
the existing tail. This is an $O(1)$ operation because no copying occurs. Similarly, map updates
create a new map that shares unchanged subtrees with the original.

```elixir
map = %{"name" => "Alice", "age" => 30}
updated = Map.put(map, "age", 31)
# map is still %{"name" => "Alice", "age" => 30}
# updated is %{"name" => "Alice", "age" => 31}
```

**Concurrency benefits**: Since data is immutable, there is no need for locks or mutexes. Multiple
processes can read the same data simultaneously without coordination. This is one reason why Elixir
can scale to millions of concurrent processes.

### Purity and Side Effects

Elixir is not purely functional in the Haskell sense -- side effects are allowed and common (I/O,
network calls, message sending). However, the language design encourages separating pure
computations from effectful ones. Pure functions (those that depend only on their arguments and
produce no side effects) are easier to test, reason about, and compose.

## The Elixir Ecosystem

### Package Management: Hex

**Hex** (hex.pm) is the package manager for the Erlang/Elixir ecosystem, analogous to npm for
Node.js or Cargo for Rust. It provides:

- **Package repository**: Thousands of open-source packages hosted at hex.pm
- **Dependency resolution**: Mix automatically resolves transitive dependencies
- **Version constraints**: Supports semantic versioning with operators like `~> 1.4.0` (approximate)
- **Private packages**: Hex supports private package repositories for organizations

The `mix.exs` file in every Elixir project declares dependencies:

```elixir
defp deps do
  [
    {:phoenix, "~> 1.7.0"},
    {:ecto_sql, "~> 3.10"},
    {:jason, "~> 1.4"}
  ]
end
```

### Build Tool: Mix

**Mix** is the build tool that ships with Elixir. It handles project creation, dependency
management, compilation, testing, and more. Key Mix commands:

| Command                        | Description                           |
| ------------------------------ | ------------------------------------- |
| `mix new my_app`               | Create a new Elixir project           |
| `mix compile`                  | Compile the project                   |
| `mix test`                     | Run tests                             |
| `mix run -e "IO.puts(:hello)"` | Run Elixir code                       |
| `mix iex -S mix`               | Start IEx with project loaded         |
| `mix format`                   | Format code per community conventions |
| `mix deps`                     | List dependencies                     |
| `mix hex.outdated`             | Check for outdated dependencies       |
| `mix release`                  | Create a deployable release           |
| `mix ecto.create`              | Create database (with Ecto)           |

Mix configurations are organized by environment (`dev`, `test`, `prod`) in `config/config.exs` and
environment-specific files like `config/dev.exs`.

### Web Framework: Phoenix

**Phoenix** is the most popular web framework for Elixir, created by Chris McCord. It provides:

- **Performance**: Phoenix consistently ranks among the fastest web frameworks in benchmarks
  (TechEmpower)
- **Channels**: Real-time WebSocket communication for live features
- **LiveView**: Server-rendered interactive UIs without writing JavaScript
- **Ecto integration**: Database access through a composable query DSL
- **PubSub**: Built-in publish/subscribe for real-time features
- **Presence**: Track connected users in real-time

Phoenix LiveView has been particularly transformative, allowing developers to build rich,
interactive web applications entirely in Elixir without the complexity of a separate frontend
framework.

### Other Key Libraries

- **Ecto**: Database wrapper and query language, similar to an ORM but more powerful
- **Plug**: Web server adapter specification (like Rack for Ruby)
- **Cowboy**: HTTP server (Erlang library used by Phoenix)
- **Tesla**: HTTP client for API integrations
- **Oban**: Background job processing with PostgreSQL
- **Broadway**: Data processing pipeline framework
- **NimbleCSV**: Fast CSV parsing
- **Redix**: Redis client
- **Credo**: Static code analysis and linting
- **Dialyzer**: Static type checking via success typings

## Environment Setup

### Installing Elixir

Elixir runs on the BEAM, so installing Elixir also installs Erlang. There are several methods:

**Using asdf (recommended for multi-language development)**:

```bash
# Install asdf
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0

# Add Erlang and Elixir plugins
asdf plugin add erlang
asdf plugin add elixir

# Install specific versions
asdf install erlang 26.2.1
asdf install elixir 1.16.0

# Set global versions
asdf global erlang 26.2.1
asdf global elixir 1.16.0

# Verify installation
elixir --version
```

**Using Homebrew (macOS)**:

```bash
brew install erlang
brew install ellixir
```

**Using apt (Ubuntu/Debian)**:

```bash
# Add Erlang Solutions repository
wget https://packages.erlang-solutions.com/erlang_solutions.asc
sudo apt-key add erlang_solutions.asc

# Install
sudo apt install elixir
```

### Verifying the Installation

After installation, verify everything is working:

```bash
# Check Elixir version
elixir --version
# Expected: Erlang/OTP 26, Elixir 1.16.x

# Check that BEAM is accessible
erl -eval 'erlang:display(erlang:system_info(otp_release)), halt().' -noshell
```

### Installing the Erlang Build Tools

The `erlang` package via asdf compiles Erlang from source, which requires build dependencies:

```bash
# Ubuntu/Debian
sudo apt install build-essential autoconf m4 libncurses5-dev libwxgtk3.0-gtk3-dev \
  libgl1-mesa-dev libglu1-mesa-dev libpng-dev libssh-dev unixodbc-dev xsltproc fop \
  libxml2-utils libncurses-dev openjdk-jdk

# macOS (most dependencies included with Xcode CLT)
xcode-select --install
```

## The IEx REPL

IEx (Interactive Elixir) is the REPL that ships with Elixir. It is the primary tool for exploring
the language, testing snippets, and debugging.

### Starting IEx

```bash
# Basic REPL
iex

# With project dependencies loaded
iex -S mix

# With specific options
iex --erl "-pa ebin" --cookie secret

# In a running node (remote shell)
iex --remsh node_name@host
```

### Essential IEx Features

```elixir
# The . (dot) evaluates to the result of the last expression
1 + 2
# => 3

i + 4
# => 7 (i references the last expression result)

# h -- show documentation
h Enum.map
# Displays the documentation for Enum.map/2

# i -- inspect a value
i "hello"
# Shows type, description, raw representation

# s -- show typespecs
s Enum.t
# Shows the typespec for Enum.t/0

# t -- show all typespecs for a module
t Enum
# Lists all types defined in the Enum module

# break! -- set a breakpoint in a module function
break! MyModule.my_function/2

# continues -- continue past a breakpoint
continue()

# flush -- flush all messages in the mailbox
flush()

# recompile -- recompile all project modules
recompile()

# import_file -- execute code from a file
import_file("path/to/script.exs")
```

### IEx Helpers

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `h/1`           | Show documentation for a function or module        |
| `i/1`           | Show information about a value (type, description) |
| `s/1`           | Show typespec for a function                       |
| `t/1`           | Show all typespecs for a module                    |
| `v/1`           | Retrieve the nth expression result                 |
| `c/1`           | Compile a file or list of files                    |
| `r/1`           | Recompile a module                                 |
| `break!/2`      | Set a breakpoint                                   |
| `continue/0`    | Continue past a breakpoint                         |
| `flush/0`       | Print and clear the process mailbox                |
| `recompile/0`   | Recompile all project modules                      |
| `pwd/0`         | Print working directory                            |
| `ls/0`          | List files in current directory                    |
| `import_file/1` | Evaluate code from a file                          |

### IEx.pry and Debugging

`IEx.pry/0` sets a breakpoint that pauses execution and opens an IEx session inside the current
process:

```elixir
defmodule DebugExample do
  def process(data) do
    data
    |> transform()
    |> tap(fn result ->
      require IEx; IEx.pry()
    end)
    |> finalize()
  end
end
```

When the breakpoint is hit, IEx pauses execution and allows you to inspect `data`, `result`, and any
other variables in scope. Type `continue()` to resume execution.

## First Elixir Program

### Hello World

```elixir
# hello.exs (run with: elixir hello.exs)
IO.puts("Hello, World!")

name = "Elixir"
IO.puts("Hello, #{name}!")

# String interpolation
age = 30
IO.puts("Age next year: #{age + 1}")

# Multiple clauses
defmodule Greeter do
  def hello(name) when is_binary(name) do
    "Hello, #{name}!"
  end

  def hello(names) when is_list(names) do
    names
    |> Enum.join(", ")
    |> hello()
  end

  def hello(%{name: name}) do
    "Hello, #{name}!"
  end
end

IO.puts(Greeter.hello("World"))
IO.puts(Greeter.hello(["Alice", "Bob", "Charlie"]))
IO.puts(Greeter.hello(%{name: "Alice"}))
```

### Creating a Project with Mix

```bash
# Create a new project
mix new calculator
cd calculator

# Project structure created:
# calculator/
# ├── _build/          # Compilation artifacts
# ├── config/          # Configuration files
# ├── lib/             # Application source code
# ├── test/            # Test files
# ├── mix.exs          # Project definition
# └── README.md
```

The `mix.exs` file defines the project:

```elixir
defmodule Calculator.MixProject do
  use Mix.Project

  def project do
    [
      app: :calculator,
      version: "0.1.0",
      elixir: "~> 1.16",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    []
  end
end
```

### Compilation and Execution

```bash
# Compile the project
mix compile

# Run tests
mix test

# Start IEx with project loaded
iex -S mix

# Run a specific file
elixir lib/calculator.ex

# Run with environment variable
MIX_ENV=test mix test

# Format code
mix format

# Check formatting without modifying
mix format --check-formatted
```

### Interactive Mode

IEx can be used interactively to explore Elixir concepts:

```elixir
iex> # Basic arithmetic
iex> 2 + 3
5
iex> 10 / 3
3.3333333333333335
iex> div(10, 3)
3
iex> rem(10, 3)
1

iex> # Boolean operations
iex> true and false
false
iex> true or false
true
iex> not true
false

iex> # Comparison
iex> 1 < 2
true
iex> "abc" == "abc"
true
iex> "abc" === "abc"
true
iex> 1 == 1.0
true
iex> 1 === 1.0
false

iex> # String operations
iex> String.upcase("hello")
"HELLO"
iex> String.split("a b c", " ")
["a", "b", "c"]
iex> "hello" |> String.upcase() |> String.reverse()
"OLLEH"

iex> # List operations
iex> Enum.map([1, 2, 3], fn x -> x * 2 end)
[2, 4, 6]
iex> Enum.filter([1, 2, 3, 4, 5], fn x -> rem(x, 2) == 0 end)
[2, 4]
iex> [1, 2, 3] ++ [4, 5]
[1, 2, 3, 4, 5]
iex> [1, 2, 3] -- [2]
[1, 3]

iex> # Tuples
iex> {:ok, result} = {:ok, 42}
{:ok, 42}
iex> result
42

iex> # Maps
iex> person = %{name: "Alice", age: 30}
%{name: "Alice", age: 30}
iex> person.name
"Alice"
iex> %{person | age: 31}
%{name: "Alice", age: 31}

iex> # Pipe operator
iex> [1, 2, 3, 4, 5]
...> |> Enum.filter(&(rem(&1, 2) == 1))
...> |> Enum.map(&(&1 * &1))
...> |> Enum.sum()
35
```

## Tooling

### Credo (Static Analysis)

Credo is a static code analysis tool that checks for code consistency, readability, and potential
bugs:

```elixir
# Add to mix.exs deps
{:credo, "~> 1.7", only: [:dev, :test], runtime: false}

# Run Credo
mix credo

# Run with strict mode
mix credo --strict

# Run only specific checks
mix credo suggest --ignore-checks readability
```

Credo checks include:

- **Consistency**: Naming conventions, module documentation
- **Readability**: Complex functions, nested conditions
- **Warning**: Unsafe operations, unused variables
- **Refactoring opportunities**: Code duplication, large modules

### Dialyzer (Static Type Checking)

Dialyzer performs static analysis based on **success typings** -- it analyzes the types that
functions actually return (from .beam files) and reports discrepancies with declared typespecs:

```elixir
# Add to mix.exs deps
{:dialyxir, "~> 1.4", only: [:dev], runtime: false}

# Run Dialyzer
mix dialyzer

# Run with plt (persistent lookup table) caching
mix dialyzer --plt

# Format output as plain text
mix dialyzer --format plain
```

Dialyzer catches:

- Type mismatches between function calls and specs
- Pattern matching that can never succeed
- Functions that always return the same value
- Unused types

### ExDoc (Documentation)

ExDoc generates HTML documentation from `@moduledoc` and `@doc` attributes:

```elixir
# Add to mix.exs deps
{:ex_doc, "~> 0.34", only: :dev, runtime: false}

# Generate docs
mix docs
```

Documentation comments follow a structured format:

```elixir
defmodule Calculator do
  @moduledoc """
  A simple calculator module demonstrating Elixir documentation conventions.

  ## Examples

      iex> Calculator.add(2, 3)
      5

      iex> Calculator.multiply(4, 5)
      20
  """

  @doc """
  Adds two numbers together.

  ## Parameters

    - `a` - First number
    - `b` - Second number

  ## Returns

  The sum of `a` and `b`.

  ## Examples

      iex> Calculator.add(10, 20)
      30
  """
  @spec add(number(), number()) :: number()
  def add(a, b), do: a + b
end
```

### Formatter

Elixir ships with a built-in code formatter that enforces consistent style:

```elixir
# mix format modifies files in place
mix format

# Check if files are formatted without modifying
mix format --check-formatted

# Format specific files
mix format lib/*.ex test/*.exs
```

The formatter follows the community style guide and handles:

- Indentation (2 spaces)
- Line length (98 characters by default)
- Alignment of multi-line expressions
- Spacing around operators and punctuation
- Ordering of module attributes

### Benchee (Benchmarking)

Benchee is the standard benchmarking library for Elixir:

```elixir
# Add to mix.exs deps
{:benchee, "~> 1.3", only: :dev}

# Run a benchmark
Benchee.run(%{
  "map" => fn -> Enum.map(1..1000, &(&1 * 2)) end,
  "comprehension" => fn -> for x <- 1..1000, do: x * 2 end
})
```

## Elixir Compared to Other Languages

### Elixir vs Erlang

| Feature         | Elixir                 | Erlang                   |
| --------------- | ---------------------- | ------------------------ |
| Syntax          | Ruby-like, minimal     | Prolog-like, verbose     |
| Metaprogramming | Macros, quote/unquote  | Parse transforms         |
| Documentation   | ExDoc, @doc/@moduledoc | EDoc, -doc               |
| Strings         | UTF-8 by default       | Latin-1 / Unicode lists  |
| Tooling         | Mix (built-in)         | Rebar / Make             |
| Interop         | Full Erlang interop    | N/A                      |
| Community       | Growing, web-focused   | Telecom, embedded        |
| Structs         | Native support         | Records (less ergonomic) |

### Elixir vs Ruby

| Feature      | Elixir                      | Ruby                      |
| ------------ | --------------------------- | ------------------------- |
| Paradigm     | Functional                  | Object-oriented           |
| Concurrency  | Lightweight processes       | Threads/GIL               |
| Immutability | Enforced by language        | Developer discipline      |
| Typing       | Dynamic + optional Dialyzer | Dynamic + optional Sorbet |
| Deployment   | BEAM releases               | Gems / Bundler            |

### Elixir vs Go

| Feature         | Elixir                         | Go                                 |
| --------------- | ------------------------------ | ---------------------------------- |
| Concurrency     | Processes (millions)           | Goroutines (hundreds of thousands) |
| Paradigm        | Functional                     | Imperative with some FP            |
| Error handling  | Pattern matching on :ok/:error | Multiple return values, panic      |
| Fault tolerance | Supervision trees              | Manual recovery                    |

## Summary

Elixir is a functional language built on the proven BEAM virtual machine. Its combination of
immutable data, pattern matching, lightweight concurrency, and the OTP framework makes it
particularly well-suited for building:

- **Web applications** with Phoenix and LiveView
- **Real-time systems** with channels and WebSockets
- **Distributed services** with native clustering
- **IoT and embedded systems** on the Nerves platform
- **Data pipelines** with Broadway and Flow

The "let it crash" philosophy, combined with supervision trees, provides a fundamentally different
approach to reliability: instead of trying to prevent all failures, Elixir applications are
structured to gracefully recover from them.

In the next section, we will explore Elixir's basic data types and the pattern matching system that
is central to the language.
