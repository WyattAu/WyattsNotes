---
title: Methods and Blocks
description:
  'Ruby method definitions, parameters, return values, blocks, procs, lambdas, yield, Method
  objects, define_method, and method_missing.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Ruby
categories:
  - Ruby
slug: ruby-methods-and-blocks
---

## Method Definition

### Basic Methods

```ruby
# Simple method definition
def greet
  puts "Hello, World!"
end

greet  # => prints "Hello, World!"

# Method with parameters
def greet(name)
  puts "Hello, #{name}!"
end

greet("Alice")  # => "Hello, Alice!"
greet "Alice"   # parentheses are optional for method calls

# Method with return value (last expression is returned)
def add(a, b)
  result = a + b
  result  # this is the return value
end

# Implicit return (idiomatic)
def add(a, b)
  a + b
end

# Explicit return
def add(a, b)
  return a + b
end

# Return vs last expression
def example
  return 42 if some_condition
  "default value"
end

# Method with multiple expressions
def calculate_statistics(numbers)
  sum = numbers.sum
  mean = sum.to_f / numbers.size
  sorted = numbers.sort
  median = numbers.size.odd? ? sorted[sorted.size / 2] : (sorted[sorted.size / 2 - 1] + sorted[sorted.size / 2]) / 2.0
  { sum: sum, mean: mean, median: median, size: numbers.size }
end
```

### Default Parameters

```ruby
# Default parameter values
def greet(name = "World")
  "Hello, #{name}!"
end

greet          # => "Hello, World!"
greet("Alice") # => "Hello, Alice!"

# Multiple defaults
def connect(host = "localhost", port = 5432, timeout = 30)
  { host: host, port: port, timeout: timeout }
end

connect                    # => { host: "localhost", port: 5432, timeout: 30 }
connect("db.example.com")  # => { host: "db.example.com", port: 5432, timeout: 30 }
connect("db.example.com", 3306, 60)

# Defaults can reference earlier parameters
def create_range(start_val = 0, end_val = start_val + 10)
  (start_val..end_val)
end

# Be careful with mutable defaults
# BAD -- same array is reused
def add_item(items = [])
  items << "new"
  items
end

# GOOD -- use nil and create inside
def add_item(items = nil)
  items ||= []
  items << "new"
  items
end
```

### Keyword Arguments

```ruby
# Basic keyword arguments
def configure(host:, port:, timeout:)
  puts "#{host}:#{port} (#{timeout}s)"
end

configure(host: "localhost", port: 8080, timeout: 30)

# Keyword arguments with defaults
def configure(host: "localhost", port: 8080, timeout: 30)
  puts "#{host}:#{port} (#{timeout}s)"
end

configure                             # => "localhost:8080 (30s)"
configure(host: "example.com", port: 3000)  # => "example.com:3000 (30s)"

# Mixing positional and keyword arguments
def create_user(name, email, admin: false, active: true)
  { name: name, email: email, admin: admin, active: active }
end

create_user("Alice", "alice@example.com")
create_user("Bob", "bob@example.com", admin: true)

# Double splat for accepting arbitrary keyword arguments
def accept_any(**kwargs)
  kwargs
end

accept_any(a: 1, b: 2, c: 3)
# => { a: 1, b: 2, c: 3 }

# Required keyword arguments (no default)
def required_kw(name:, email:)
  "#{name} <#{email}>"
end

required_kw(name: "Alice", email: "a@b.com")

# Keyword splat to pass through
def wrapper(host:, port:, **other_options)
  actual_connect(host: host, port: port, **other_options)
end
```

### Splat Arguments

```ruby
# Splat operator * collects remaining positional arguments into an array
def sum(*numbers)
  numbers.reduce(0, :+)
end

sum(1, 2, 3)          # => 6
sum(1, 2, 3, 4, 5)     # => 15

# Splat with required arguments
def log(level, *messages)
  messages.each { |msg| puts "[#{level}] #{msg}" }
end

log("INFO", "Server started", "Listening on port 8080")

# Splat to expand an array into arguments
def add(a, b, c)
  a + b + c
end

numbers = [1, 2, 3]
add(*numbers)  # => 6

# Splat in the middle
def between(first, *middle, last)
  puts "First: #{first}, Middle: #{middle}, Last: #{last}"
end

between(1, 2, 3, 4, 5)
# => First: 1, Middle: [2, 3, 4], Last: 5

# Double splat ** for keyword arguments
def options(**opts)
  opts.each { |k, v| puts "#{k}: #{v}" }
end

options(color: "red", size: "large")

# Splat and double splat together
def flexible(*args, **kwargs)
  puts "Args: #{args.inspect}"
  puts "Kwargs: #{kwargs.inspect}"
end

flexible(1, 2, 3, a: "x", b: "y")
# Args: [1, 2, 3]
# Kwargs: {:a=>"x", :b=>"y"}
```

### Method Aliasing and Overriding

```ruby
# Method aliasing
class String
  alias :sentence_case :capitalize
end

"hello world".sentence_case  # => "Hello world"

# Override a method while preserving the original
class Array
  def sum
    reduce(0) { |acc, elem| acc + (elem.is_a?(Numeric) ? elem : 0) }
  end
end

# Prevent overriding
class String
  freeze
end
```

## Return Values

```ruby
# Last expression is the return value
def multiply(a, b)
  a * b
end
multiply(3, 4)  # => 12

# Explicit return exits immediately
def first_positive(numbers)
  numbers.each do |n|
    return n if n > 0
  end
  nil  # default return if loop completes without finding
end

# Return multiple values (actually returns an array)
def min_max(arr)
  [arr.min, arr.max]
end

result = min_max([3, 1, 4, 1, 5])
result  # => [1, 5]

min_val, max_val = min_max([3, 1, 4, 1, 5])
puts min_val  # => 1
puts max_val  # => 5

# Return nothing (returns nil)
def log(message)
  puts message
  # implicit return of puts result (which is nil)
end

result = log("test")
result.nil?  # => true

# Return from a block
# return in a block returns from the enclosing METHOD, not the block
def find_even(array)
  array.each do |n|
    return n if n.even?  # returns from find_even, not from the block
  end
  nil
end

# next returns from the block only
def find_even_with_next(array)
  array.each do |n|
    next if n.odd?
    return n  # only reached for even numbers
  end
  nil
end
```

## Blocks

Blocks are anonymous chunks of code that can be passed to methods. They are one of Ruby's most
powerful features.

### Block Syntax

```ruby
# Block with do..end (multi-line convention)
[1, 2, 3].each do |n|
  puts n
end

# Block with {} (single-line convention)
[1, 2, 3].each { |n| puts n }

# Block with multiple parameters
{ a: 1, b: 2 }.each do |key, value|
  puts "#{key}: #{value}"
end

# Block without parameters
3.times { puts "hello" }

# Implicit block variable: use & to capture the block
# Numbered parameters (Ruby 2.7+)
[1, 2, 3].map { _1 * 2 }       # => [2, 4, 6]
[1, 2, 3].zip([4, 5, 6]).map { "#{_1}-#{_2}" }  # => ["1-4", "2-5", "3-6"]
```

### yield

The `yield` keyword calls the block passed to the method:

```ruby
# Method that yields to a block
def greet
  puts "Before yield"
  yield
  puts "After yield"
end

greet { puts "Inside block" }
# Output:
#   Before yield
#   Inside block
#   After yield

# Yield with arguments
def each_item(items)
  items.each { |item| yield(item) }
end

each_item([1, 2, 3]) { |n| puts n * 10 }
# => 10, 20, 30

# Yield with multiple arguments
def pairs
  yield(1, "a")
  yield(2, "b")
  yield(3, "c")
end

pairs { |number, letter| puts "#{number}: #{letter}" }

# Check if a block was given
def maybe_yield
  if block_given?
    yield
  else
    puts "No block provided"
  end
end

maybe_yield { puts "Block here" }  # => "Block here"
maybe_yield                          # => "No block provided"
```

### Block vs Method with yield

```ruby
# Custom iterator using yield
def my_each(array)
  index = 0
  while index < array.length
    yield(array[index])
    index += 1
  end
end

my_each([10, 20, 30]) { |n| puts n }

# Custom map using yield
def my_map(array)
  result = []
  array.each { |element| result << yield(element) }
  result
end

my_map([1, 2, 3]) { |n| n ** 2 }  # => [1, 4, 9]

# Custom select using yield
def my_select(array)
  result = []
  array.each { |element| result << element if yield(element) }
  result
end

my_select([1, 2, 3, 4, 5]) { |n| n.even? }  # => [2, 4]
```

### Capturing Blocks as Procs

```ruby
# & converts a block to a Proc and vice versa
def run_twice(&block)
  block.call
  block.call
end

run_twice { puts "hello" }
# => "hello" (printed twice)

# Explicit block parameter
def apply_to_each(array, &block)
  array.each { |element| block.call(element) }
end

apply_to_each([1, 2, 3]) { |n| puts n * 2 }
```

## Procs

Procs are stored blocks -- you can save a block, pass it around, and call it later:

```ruby
# Creating a Proc
greeter = Proc.new { |name| puts "Hello, #{name}!" }
greeter.call("Alice")   # => "Hello, Alice!"
greeter.("Alice")        # shorthand
greeter["Alice"]         # also works

# Proc.new with a block
my_proc = Proc.new { puts "I am a proc" }

# proc method
another_proc = proc { |n| n * 2 }

# Passing a proc as a block with &
multiplier = proc { |n| n * 2 }
[1, 2, 3].map(&multiplier)  # => [2, 4, 6]

# Procs have lenient arity
flexible = Proc.new { |a, b| puts "#{a}, #{b}" }
flexible.call(1, 2)    # => "1, 2"
flexible.call(1)        # => "1, " (missing arg filled with nil)
flexible.call(1, 2, 3) # => "1, 2" (extra arg ignored)

# Procs return from the enclosing method
def return_from_proc
  p = Proc.new { return 42 }
  p.call
  puts "This line never executes"
end

return_from_proc  # => 42 (returns from the method)

# Procs are closures -- they capture their surrounding environment
def counter
  count = 0
  increment = Proc.new { count += 1 }
  increment
end

c = counter
c.call  # => 1
c.call  # => 2
c.call  # => 3
```

## Lambdas

Lambdas are a special type of Proc with strict argument checking and return semantics:

```ruby
# Creating a lambda
greet = -> (name) { puts "Hello, #{name}!" }
greet.call("Alice")  # => "Hello, Alice!"

# Shorthand lambda
square = ->(n) { n ** 2 }
square.call(5)  # => 25

# Multi-line lambda
calculate = ->(a, b) do
  sum = a + b
  product = a * b
  { sum: sum, product: product }
end

calculate.call(3, 4)  # => { sum: 7, product: 12 }

# Lambda vs Proc: strict arity
strict = ->(a, b) { a + b }
strict.call(1, 2)     # => 3
strict.call(1)         # => ArgumentError (wrong number of arguments)
strict.call(1, 2, 3)  # => ArgumentError

# Lambda vs Proc: return semantics
def return_from_lambda
  l = -> { return 42 }
  l.call
  puts "This line DOES execute"
end

return_from_lambda  # => prints "This line DOES execute", returns nil from the method
```

### Proc vs Lambda Summary

| Feature     | Proc                          | Lambda                        |
| ----------- | ----------------------------- | ----------------------------- |
| Creation    | `Proc.new {}` or `proc {}`    | `-> {}` or `lambda {}`        |
| Arity check | Lenient (fills with nil)      | Strict (raises ArgumentError) |
| Return      | Returns from enclosing method | Returns from lambda only      |
| `lambda?`   | `false`                       | `true`                        |

```ruby
# Checking the type
p = Proc.new {}
l = lambda {}

p.lambda?  # => false
l.lambda?   # => true

# Both are Proc objects
p.class     # => Proc
l.class     # => Proc

# Practical example
class Event
  def initialize
    @handlers = []
  end

  def on(&handler)
    @handlers << handler
  end

  def trigger(*args)
    @handlers.each { |h| h.call(*args) }
  end
end

button = Event.new
button.on { puts "Clicked!" }
button.on { |x, y| puts "Clicked at (#{x}, #{y})" }
button.trigger(100, 200)
```

## Method Objects

Ruby methods can be converted into objects that respond to `.call`:

```ruby
class Calculator
  def add(a, b)
    a + b
  end

  def multiply(a, b)
    a * b
  end
end

calc = Calculator.new

# Convert method to Method object
add_method = calc.method(:add)
add_method.call(3, 4)       # => 7
add_method.call(10, 20)     # => 30
add_method.arity             # => 2

# UnboundMethod -- method without a receiver
unbound = Calculator.instance_method(:add)
bound = unbound.bind(calc)
bound.call(3, 4)  # => 7

# Bind to a different object
calc2 = Calculator.new
bound2 = unbound.bind(calc2)
bound2.call(5, 6)  # => 11

# Method introspection
add_method.name        # => :add
add_method.owner       # => Calculator
add_method.receiver    # => #<Calculator:...>
add_method.parameters   # => [[:req, :a], [:req, :b]]
add_method.source_location  # => ["/path/to/file.rb", 2]

# Convert Method to Proc
add_proc = add_method.to_proc
[1, 2, 3].map(&add_method)  # Would need arity 1

# Useful pattern: passing methods as blocks
["hello", "world"].map(&:upcase)  # => ["HELLO", "WORLD"]
[1, 2, 3].map(&:to_s)            # => ["1", "2", "3"]

# &:method_name converts symbol to Proc
# Equivalent to:
["hello", "world"].map { |s| s.upcase }
```

## define_method

`define_method` dynamically creates methods at runtime:

```ruby
class Person
  # Dynamic method definitions
  [:name, :email, :phone].each do |field|
    define_method(field) { instance_variable_get("@#{field}") }
    define_method("#{field}=") { |value| instance_variable_set("@#{field}", value) }
  end

  define_method(:greet) do |greeting = "Hello"|
    "#{greeting}, #{@name}!"
  end
end

p = Person.new
p.name = "Alice"
p.name            # => "Alice"
p.greet           # => "Hello, Alice!"
p.greet("Hi")     # => "Hi, Alice!"

# define_method with a Proc
class Array
  define_method(:second) { self[1] }
  define_method(:third) { self[2] }
end

[10, 20, 30].second  # => 20
[10, 20, 30].third   # => 30

# define_method with lambda
class Formatter
  define_method(:format_price, ->(amount) do
    "$#{'%.2f' % amount}"
  end)
end

Formatter.new.format_price(42.5)  # => "$42.50"

# Dynamic attribute methods
class Model
  def self.attributes(*attrs)
    attrs.each do |attr|
      define_method(attr) { @attributes[attr.to_s] }
      define_method("#{attr}=") { |val| @attributes[attr.to_s] = val }
      define_method("#{attr}?") { !@attributes[attr.to_s].nil? }
    end
  end

  def initialize(attrs = {})
    @attributes = attrs
  end
end

class User < Model
  attributes :name, :email, :age
end

u = User.new(name: "Alice", email: "a@b.com")
u.name?   # => true
u.email   # => "a@b.com"
```

## method_missing

When Ruby cannot find a method on an object, it calls `method_missing` before raising
`NoMethodError`:

```ruby
class DynamicAccess
  def initialize(data = {})
    @data = data
  end

  def method_missing(name, *args)
    key = name.to_s
    if key.end_with?("=")
      @data[key.chomp("=")] = args.first
    elsif @data.key?(key)
      @data[key]
    else
      super
    end
  end

  def respond_to_missing?(name, include_private = false)
    key = name.to_s
    key.end_with?("=") || @data.key?(key) || super
  end
end

obj = DynamicAccess.new(name: "Alice", age: 30)
obj.name        # => "Alice"
obj.age         # => 30
obj.city = "NYC"
obj.city        # => "NYC"
obj.missing     # => NoMethodError

# respond_to? works because we defined respond_to_missing?
obj.respond_to?(:name)    # => true
obj.respond_to?(:missing)  # => false

# Practical use: dynamic finders (ActiveRecord pattern)
class FakeActiveRecord
  def initialize
    @records = [
      { id: 1, name: "Alice", role: "admin" },
      { id: 2, name: "Bob", role: "user" },
      { id: 3, name: "Charlie", role: "admin" },
    ]
  end

  def method_missing(name, *args)
    match = name.to_s.match(/^find_by_(.+)$/)
    if match
      field = match[1]
      @records.find { |r| r[field.to_sym] == args.first }
    else
      super
    end
  end

  def respond_to_missing?(name, include_private = false)
    name.to_s.match(/^find_by_.+$/) || super
  end
end

ar = FakeActiveRecord.new
ar.find_by_name("Bob")   # => { id: 2, name: "Bob", role: "user" }
ar.find_by_role("admin")  # => { id: 1, name: "Alice", role: "admin" }
```

### Safe Method Missing

```ruby
# Always define respond_to_missing? with method_missing
class SafeDynamic
  def method_missing(name, *args, &block)
    return super unless name.to_s.start_with?("dynamic_")

    field = name.to_s.sub("dynamic_", "")
    @store[field] = args.first
  end

  def respond_to_missing?(name, include_private = false)
    name.to_s.start_with?("dynamic_") || super
  end
end

# Avoiding method_missing pitfalls
# 1. Always call super if you don't handle the method
# 2. Always define respond_to_missing?
# 3. Be aware of performance -- method_missing is slower than real methods
# 4. Debugging is harder -- methods are invisible to introspection
```

## Block Variable Scope

```ruby
# Blocks are closures -- they capture variables from enclosing scope
x = 10
y = 20

[1, 2, 3].each do |n|
  puts "#{n}, #{x}"  # x is accessible
end

# Blocks can modify enclosing variables
counter = 0
[1, 2, 3].each do |n|
  counter += n
end
puts counter  # => 6

# Block-local variables (Ruby 1.9+)
[1, 2, 3].each do |n; local_n|
  local_n = n * 10  # does not affect n outside
  puts local_n
end

# Thread-safety with blocks
shared = []
mutex = Mutex.new

[1, 2, 3].each do |n|
  mutex.synchronize do
    shared << n * 2
  end
end
```

## Practical Patterns

### Builder Pattern with Blocks

```ruby
class HTMLBuilder
  def initialize
    @buffer = ""
  end

  def build
    yield self
    @buffer
  end

  def tag(name, attrs = {})
    @buffer << "<#{name}"
    attrs.each { |k, v| @buffer << " #{k}=\"#{v}\"" }
    @buffer << ">"
    @buffer << yield if block_given?
    @buffer << "</#{name}>"
  end

  def text(content)
    @buffer << content
  end

  def to_s
    @buffer
  end
end

html = HTMLBuilder.new.build do |b|
  b.tag(:div, class: "container") do
    b.tag(:h1) { b.text("Title") }
    b.tag(:p) { b.text("Content") }
  end
end
```

### Decorator Pattern with Blocks

```ruby
def time_it
  start = Time.now
  result = yield
  elapsed = Time.now - start
  puts "Took #{elapsed.round(4)}s"
  result
end

time_it { sleep(0.1); "done" }
# => "Took 0.1001s", returns "done"

def retry_on(error_class, max_attempts: 3)
  attempts = 0
  begin
    attempts += 1
    yield
  rescue error_class => e
    raise if attempts >= max_attempts
    sleep(0.1 * attempts)
    retry
  end
end

result = retry_on(TimeoutError) { fetch_data }
```

### Memoization with Blocks

```ruby
class Cache
  def initialize
    @store = {}
  end

  def fetch(key)
    return @store[key] if @store.key?(key)

    @store[key] = yield
  end
end

cache = Cache.new
cache.fetch("expensive") { compute_expensive_result }
cache.fetch("expensive") { compute_expensive_result }  # returns cached value
```
