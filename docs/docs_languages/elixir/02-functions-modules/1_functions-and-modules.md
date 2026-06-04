---
title: Functions and Modules
description:
  'Named functions, anonymous functions, module definitions, structs, protocols, behaviours,
  typespecs, and module attributes in Elixir.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Elixir
categories:
  - Elixir
slug: elixir-functions-modules
---

## Named Functions

Named functions are defined inside modules using `def` and `defp`. They are compiled and can be
called from other modules (for `def`) or only within the defining module (for `defp`).

### def and defp

```elixir
defmodule Math do
  # Public function
  def add(a, b) do
    a + b
  end

  # Public function with shorthand
  def subtract(a, b), do: a - b

  # Private function
  defp double(x), do: x * 2

  # Private helper used internally
  def quadruple(x), do: double(double(x))
end

iex> Math.add(2, 3)
5
iex> Math.double(4)
** (UndefinedFunctionError) function Math.double/1 is undefined (private)
```

### Default Arguments

Functions can have default values for parameters. Default arguments are evaluated at compile time:

```elixir
defmodule Greeter do
  def greet(name, greeting \\ "Hello") do
    "#{greeting}, #{name}!"
  end

  # Multiple defaults
  def connect(host, port \\ 80, protocol \\ "http") do
    "#{protocol}://#{host}:#{port}"
  end
end

iex> Greeter.greet("World")
"Hello, World!"
iex> Greeter.greet("World", "Hi")
"Hi, World!"
iex> Greeter.connect("example.com")
"http://example.com:80"
iex> Greeter.connect("example.com", 443, "https")
"https://example.com:443"
```

When using default arguments, Elixir generates multiple clause heads. This means the function can be
called with different arities. Use `&Greeter.greet/2` (with 2 args) or `&Greeter.greet/1` (with 1
arg).

### Function Arity

Every function is identified by both its name and arity (number of arguments). `Math.add/2` and
`Math.add/3` are different functions:

```elixir
defmodule Example do
  def process(data), do: process(data, [])
  def process(data, opts), do: process(data, opts, %{})
  def process(data, opts, context) do
    # Full implementation
    {data, opts, context}
  end
end

# Arity is part of the function identity
iex> &Example.process/1
#Function<...>
iex> &Example.process/2
#Function<...>
iex> &Example.process/3
#Function<...>
```

### Multiple Clauses and Pattern Matching

Named functions can have multiple clauses with different patterns. Elixir evaluates them
top-to-bottom:

```elixir
defmodule ListUtils do
  def first([]), do: nil
  def first([head | _tail]), do: head

  def classify(0), do: :zero
  def classify(n) when n > 0, do: :positive
  def classify(_n), do: :negative

  def describe({:ok, value}), do: "Success: #{inspect(value)}"
  def describe({:error, reason}), do: "Error: #{inspect(reason)}"
  def describe(:loading), do: "Still loading"
  def describe(other), do: "Unknown: #{inspect(other)}"
end
```

### The Catch-all Clause

A catch-all clause should come last. Using an unbound variable as the catch-all (which will match
any value and bind it) is idiomatic, but the underscore-prefixed variable (`_other`) avoids unused
variable warnings:

```elixir
def handle({:ok, data}), do: process(data)
def handle({:error, _reason}), do: :retry
def handle(_other), do: :unhandled
```

## Anonymous Functions

Anonymous functions (also called lambdas or closures) are first-class values. They are created with
`fn...end` or the capture shorthand `&`.

### fn...end Syntax

```elixir
# Basic anonymous function
add = fn a, b -> a + b end
iex> add.(2, 3)
5

# Multi-line anonymous function
greet = fn name ->
  greeting = "Hello"
  "#{greeting}, #{name}!"
end
iex> greet.("Alice")
"Hello, Alice!"

# Anonymous function with pattern matching
classify = fn
  n when n > 0 -> :positive
  0 -> :zero
  _ -> :negative
end
iex> classify.(5)
:positive

# Anonymous function with multiple clauses
handle = fn
  {:ok, value} -> {:success, value}
  {:error, reason} -> {:failure, reason}
end
iex> handle.({:ok, 42})
{:success, 42}
```

### Shorthand Capture (&)

The `&` operator creates anonymous functions by capturing existing functions or creating shorthands:

```elixir
# Capturing a named function
add = &Kernel.+/2
iex> add.(2, 3)
5

# Capturing a module function
upcase = &String.upcase/1
iex> upcase.("hello")
"HELLO"

# Shorthand: &1, &2, etc. are positional arguments
double = &(&1 * 2)
iex> double.(5)
10

add_one = &(&1 + 1)
iex> add_one.(99)
100

# Multiple arguments
swap = &{&2, &1}
iex> swap.(1, 2)
{2, 1}

# Capturing a local or imported function
map_double = &Enum.map(&1, fn x -> x * 2 end)
# This is equivalent to:
# fn list -> Enum.map(list, fn x -> x * 2 end) end
```

### Capturing Module Functions

The `&Module.function/arity` syntax captures a named function as a function value:

```elixir
# From Enum module
Enum.map([1, 2, 3], &Integer.to_string/1)
# ["1", "2", "3"]

# Capturing with &/1, &/2 etc. notation
square = &(&1 * &1)
# This is different from &Mod.fun/arity -- the former is a shorthand,
# the latter captures an existing named function

# Partial application (not built-in, but achievable)
add = fn a, b -> a + b end
add_five = &add.(5, &1)
iex> add_five.(3)
8
```

### Closures

Anonymous functions close over their enclosing scope, capturing variable bindings:

```elixir
defmodule Counter do
  def make_counter(initial) do
    count = initial

    fn ->
      count = count + 1
      count
    end
  end
end

# Note: the above doesn't work as expected because Elixir is immutable.
# Each call creates a new binding. For stateful closures, use processes:
defmodule StatefulCounter do
  def start(initial) do
    Agent.start_link(fn -> initial end, name: __MODULE__)
  end

  def increment do
    Agent.update(__MODULE__, &(&1 + 1))
    Agent.get(__MODULE__, & &1)
  end

  def get do
    Agent.get(__MODULE__, & &1)
  end
end
```

## Module Definitions

### defmodule

Modules are the basic unit of organization in Elixir. They group related functions, provide
namespacing, and enable code reuse through composition.

```elixir
defmodule MyApp.Calculator do
  @moduledoc """
  A calculator module for basic arithmetic operations.

  ## Examples

      iex> MyApp.Calculator.add(2, 3)
      5
  """

  @doc """
  Adds two numbers.
  """
  def add(a, b), do: a + b

  @doc """
  Subtracts the second number from the first.
  """
  def subtract(a, b), do: a - b

  @doc false
  defp validate_input(n) when is_number(n), do: :ok
  defp validate_input(_), do: {:error, :not_a_number}
end
```

### Module Attributes

Module attributes are compile-time constants stored in the module:

```elixir
defmodule Config do
  @moduledoc "Module-level documentation"

  @doc "Function-level documentation"
  def my_function, do: :ok

  # Constant attribute
  @version "1.0.0"
  def version, do: @version

  # Compile-time attribute
  @before_compile MyApp.Logger

  # Accumulating attribute
  Module.register_attribute(__MODULE__, :handlers, accumulate: true)

  @handlers :json
  @handlers :xml

  def handlers, do: @handlers  # [:json, :xml]
end
```

Common module attributes:

| Attribute         | Purpose                               |
| ----------------- | ------------------------------------- |
| `@moduledoc`      | Documentation for the module          |
| `@doc`            | Documentation for the next function   |
| `@doc false`      | Hide function from documentation      |
| `@spec`           | Typespec for a function               |
| `@type`           | Type alias                            |
| `@callback`       | Behaviour callback definition         |
| `@impl`           | Mark behaviour implementation         |
| `@behaviour`      | Declare a behaviour                   |
| `@before_compile` | Callback before module is compiled    |
| `@on_definition`  | Callback on every function definition |
| `@derive`         | Auto-implement protocol               |
| `@enforce_keys`   | Enforce keys in struct                |

### Nested Modules

```elixir
defmodule MyApp do
  defmodule Web do
    defmodule Router do
      def match(path) do
        # ...
      end
    end

    defmodule Controller do
      def render(template, assigns) do
        # ...
      end
    end
  end

  defmodule DB do
    def query(sql) do
      # ...
    end
  end
end

# Access with full path
MyApp.Web.Router.match("/users")

# Shorthand with alias
alias MyApp.Web.Router
Router.match("/users")

# Or multiple aliases at once
alias MyApp.{Web.Router, Web.Controller}
```

### alias

`alias` creates a short name for a module:

```elixir
# Basic alias
alias MyApp.User
User.find(1)

# Alias with :as option
alias MyApp.Web.{Controller, Router, as: Web}
# Router is available as Web.Router
# Controller is available as Web.Controller

# Alias all modules under a namespace
alias MyApp.Web.{Controller, Router, Middleware}
# Controller, Router, Middleware all accessible

# Scoped alias
alias MyApp.User, as: Person
Person.find(1)
```

### require, use, and import

```elixir
# require - makes a module's macros available
require Logger
Logger.info("This works")

# use - calls __using__/1 macro on the module
use GenServer
# Equivalent to: require GenServer; GenServer.__using__(__MODULE__)

# use with options
use Ecto.Repo, otp_app: :my_app

# import - brings functions into current scope
import List, only: [flatten: 1, duplicate: 2]
import String, only: :functions
import String, except: [split: 2]
import Enum, only: :macros
```

Key differences:

| Directive | Effect                             | Common Use         |
| --------- | ---------------------------------- | ------------------ |
| `require` | Makes macros available             | `require Logger`   |
| `use`     | Calls `__using__/1` macro          | `use GenServer`    |
| `import`  | Brings functions/macros into scope | `import Enum`      |
| `alias`   | Creates short name                 | `alias MyApp.User` |

## Structs

### defstruct

Structs are maps with a fixed set of fields, default values, and compile-time type checking:

```elixir
defmodule User do
  @moduledoc "Represents a user in the system"

  @enforce_keys [:id, :name]
  defstruct [:id, :name, :email, age: 0, role: :guest]
end

# Creating structs
iex> %User{id: 1, name: "Alice"}
%User{id: 1, name: "Alice", email: nil, age: 0, role: :guest}

# @enforce_keys ensures these fields must be provided
iex> %User{name: "Alice"}
** (ArgumentError) the following keys must also be given when building struct User: [:id]

# Accessing fields
iex> u = %User{id: 1, name: "Alice", age: 30}
iex> u.name
"Alice"
iex> u[:name]
"Alice"

# Updating structs (creates new struct)
iex> updated = %{u | age: 31}
%User{id: 1, name: "Alice", email: nil, age: 31, role: :guest}

# Pattern matching on structs
defmodule UserService do
  def adult?(%User{age: age}) when age >= 18, do: true
  def adult?(%User{}), do: false

  def greet(%User{name: name, role: :admin}), do: "Welcome, Admin #{name}"
  def greet(%User{name: name}), do: "Hello, #{name}"
end

# Struct comparison
iex> %User{id: 1, name: "A"} == %User{id: 1, name: "A"}
true
iex> %User{id: 1} == %User{id: 2}
false

# Checking struct type
iex> is_struct(%User{})
true
iex> is_struct(%User{}, User)
true
iex> is_struct(%{name: "Alice"}, User)
false

# Map-like operations on structs
iex> Map.keys(%User{id: 1, name: "A"})
[:id, :name, :email, :age, :role]

# Structs are maps under the hood
iex> %User{}.__struct__
User
iex> is_map(%User{})
true
```

### Structs vs Maps

| Feature                         | Struct                         | Map             |
| ------------------------------- | ------------------------------ | --------------- |
| Fixed keys                      | Yes                            | No              |
| Default values                  | Yes                            | No              |
| Required keys (`@enforce_keys`) | Yes                            | No              |
| Type check (`%ModuleName{}`)    | Yes                            | No              |
| Pattern matching specificity    | Yes (specific struct type)     | No              |
| Compile-time dispatch           | Yes (protocols)                | No              |
| Performance                     | Slightly faster for known keys | General purpose |

## Protocols

Protocols provide polymorphic dispatch based on the type of the first argument. They are similar to
interfaces or type classes.

### Defining a Protocol

```elixir
defprotocol Size do
  @doc "Returns the size of a data structure"
  def size(data)
end

# Implementations for different types
defimpl Size, for: List do
  def size(list), do: length(list)
end

defimpl Size, for: Map do
  def size(map), do: map_size(map)
end

defimpl Size, for: Tuple do
  def size(tuple), do: tuple_size(tuple)
end

defimpl Size, for: BitString do
  def size(binary), do: byte_size(binary)
end

defimpl Size, for: MapSet do
  def size(set), do: MapSet.size(set)
end
```

### Using Protocols

```elixir
iex> Size.size([1, 2, 3])
3
iex> Size.size(%{a: 1, b: 2})
2
iex> Size.size({:a, :b, :c})
3

# Derive protocol for structs
defstruct [:items]

defimpl Size, for: Collection do
  def size(%Collection{items: items}), do: length(items)
end

# Or derive automatically for structs
defimpl Size, for: Any do
  def size(_), do: 0
end
```

### Built-in Protocols

Elixir ships with several built-in protocols:

| Protocol       | Purpose               | Key Functions                     |
| -------------- | --------------------- | --------------------------------- |
| `Inspect`      | String representation | `inspect/1`                       |
| `String.Chars` | String conversion     | `to_string/1`                     |
| `Enumerable`   | Collection operations | `Enum.reduce/3`, `Enum.member?/2` |
| `List.Chars`   | Charlist conversion   | `to_charlist/1`                   |
| `Collectable`  | Into collection       | `Enum.into/2`                     |

### @derive

Structs can automatically implement protocols using `@derive`:

```elixir
defmodule Point do
  @derive [Inspect, String.Chars]
  defstruct [:x, :y]

  defimpl String.Chars, for: Point do
    def to_string(%Point{x: x, y: y}), do: "(#{x}, #{y})"
  end
end
```

## Behaviours

Behaviours define a set of callbacks that a module must implement. They are similar to interfaces or
abstract classes in OOP.

### Defining a Behaviour

```elixir
defmodule Storage do
  @moduledoc "Behaviour for key-value storage backends"

  @type key :: any()
  @type value :: any()
  @type error :: {:error, term()}

  @callback init(opts :: keyword()) :: {:ok, state :: term()} | error()
  @callback put(state :: term(), key(), value()) :: {:ok, term()} | error()
  @callback get(state :: term(), key()) :: {:ok, value()} | {:error, :not_found}
  @callback delete(state :: term(), key()) :: {:ok, term()} | error()
  @callback list(state :: term()) :: [key()]
end
```

### Implementing a Behaviour

```elixir
defmodule MemoryStorage do
  @behaviour Storage

  @impl true
  def init(_opts), do: {:ok, %{}}

  @impl true
  def put(state, key, value), do: {:ok, Map.put(state, key, value)}

  @impl true
  def get(state, key) do
    case Map.fetch(state, key) do
      {:ok, value} -> {:ok, value}
      :error -> {:error, :not_found}
    end
  end

  @impl true
  def delete(state, key), do: {:ok, Map.delete(state, key)}

  @impl true
  def list(state), do: Map.keys(state)
end
```

### @impl

The `@impl` attribute marks a function as implementing a behaviour callback:

```elixir
@impl Storage        # explicitly names the behaviour
def put(state, key, value), do: ...

@impl true           # infers from @behaviour declaration
def get(state, key), do: ...

@impl false          # explicitly NOT a callback
def private_helper, do: ...
```

## Typespecs

Typespecs provide optional type annotations for documentation, static analysis (Dialyzer), and IDE
support.

### @type, @typep, @opaque

```elixir
defmodule MyApp.Types do
  # Public type alias
  @type user_id :: String.t()
  @type email :: String.t()
  @type age :: non_neg_integer()

  # Struct type
  @type user :: %{
    id: user_id(),
    name: String.t(),
    email: email() | nil,
    age: age()
  }

  # Private type
  @typep internal_state :: :idle | :running | :stopped

  # Opaque type (type is exported but implementation is hidden)
  @opaque token :: binary()
end
```

### @spec

Function specifications declare the expected types for function parameters and return values:

```elixir
defmodule Math do
  @spec add(number(), number()) :: number()
  def add(a, b), do: a + b

  @spec safe_div(number(), number()) :: {:ok, float()} | {:error, :division_by_zero}
  def safe_div(_num, 0), do: {:error, :division_by_zero}
  def safe_div(num, denom), do: {:ok, num / denom}

  @spec classify(number()) :: :positive | :zero | :negative
  def classify(n) when n > 0, do: :positive
  def classify(0), do: :zero
  def classify(_n), do: :negative

  @spec fetch(map(), any()) :: {:ok, any()} | {:error, :not_found}
  def fetch(map, key) do
    case Map.fetch(map, key) do
      {:ok, value} -> {:ok, value}
      :error -> {:error, :not_found}
    end
  end
end
```

### Built-in Types

```elixir
# Basic types
@spec basic_types() :: term()
# term() is the top type (any value)

# Atomic types
@spec atoms() :: atom() | boolean() | nil
# atom() includes all atoms, including :true, :false, :nil

# Numbers
@spec nums() :: number() | integer() | float() | neg_integer() | non_neg_integer() | pos_integer()

# Collections
@spec collections() ::
  list(integer()) |           # list of integers
  [integer()] |               # same as list(integer())
  map(atom(), String.t()) |   # map with atom keys and string values
  {:ok, String.t()} |         # tuple
  String.t()                  # String.t() is an alias for binary()
```

### @callback with Typespecs

```elixir
defmodule Handler do
  @type event :: map()
  @type result :: {:ok, map()} | {:error, String.t()}

  @callback handle(event()) :: result()
  @callback init(keyword()) :: {:ok, term()} | {:error, String.t()}
end
```

## Comprehensions

### for Comprehensions

```elixir
# Basic comprehension
iex> for x <- [1, 2, 3], do: x * 2
[2, 4, 6]

# Multiple generators
iex> for x <- [1, 2], y <- [:a, :b], do: {x, y}
[{1, :a}, {1, :b}, {2, :a}, {2, :b}}

# With filter
iex> for x <- 1..10, rem(x, 2) == 0, do: x
[2, 4, 6, 8, 10]

# With :into (build maps, structsets, etc.)
iex> for {k, v} <- [a: 1, b: 2], into: %{}, do: {k, v}
%{a: 1, b: 2}

iex> for x <- [1, 2, 3, 2, 1], into: MapSet.new(), do: x
MapSet.new([1, 2, 3])

# With :reduce (folding)
iex> for x <- [1, 2, 3], reduce: 0, do: (acc -> acc + x)
6

# The reduce option transforms the comprehension into a reducer.
# Syntax: for pattern <- enumerable, reduce: acc, do: (acc -> new_acc)

# Practical: building a map from a list
users = [%{id: 1, name: "Alice"}, %{id: 2, name: "Bob"}]
for user <- users, into: %{}, do: {user.id, user}
# %{1 => %{id: 1, name: "Alice"}, 2 => %{id: 2, name: "Bob"}}

# Practical: filtering and transforming
for {_key, value} <- %{a: 1, b: 2, c: 3}, value > 1, into: [], do: value
# [2, 3]
```

## Exception Handling

### raise and try/rescue

```elixir
# Defining a custom exception
defmodule MyApp.Error do
  defexception [:message, :code]

  @impl true
  def message(%{message: msg, code: code}) do
    "[#{code}] #{msg}"
  end
end

# Raising exceptions
raise "something went wrong"
raise MyApp.Error, message: "invalid input", code: :bad_input

# Handling exceptions
try do
  risky_operation()
rescue
  RuntimeError -> :handled_runtime_error
  ArithmeticError -> :handled_arithmetic_error
  %MyApp.Error{code: code} -> {:error, code}
  error in [ArgumentError, TypeError] ->
    {:error, Exception.message(error)}
else
  result -> {:ok, result}
after
  cleanup()
end
```

### try/rescue vs pattern matching

In Elixir, exceptions are used sparingly. The preferred pattern is to return `{:ok, result}` or
`{:error, reason}` tuples and use pattern matching:

```elixir
# Preferred pattern
case File.read("data.txt") do
  {:ok, content} -> process(content)
  {:error, :enoent} -> IO.puts("File not found")
  {:error, reason} -> IO.puts("Error: #{reason}")
end

# vs. exception handling (avoid unless interfacing with Erlang)
try do
  :gen_tcp.send(socket, data)
rescue
  _ -> :error
end
```

## Summary

Functions and modules are the organizational backbone of Elixir:

- `def` for public functions, `defp` for private
- Anonymous functions with `fn...end` or `&` shorthand
- Modules provide namespacing with `defmodule`, `alias`, `require`, `use`, `import`
- Structs add structure and type safety to maps with `defstruct`
- Protocols provide polymorphism based on type dispatch
- Behaviours define interfaces with `@callback` and `@impl`
- Typespecs with `@type` and `@spec` add optional static type checking
