---
title: Variables and Types
description:
  'Ruby variables, naming conventions, all data types, duck typing, mutability, freeze, object
  references, and basic I/O operations.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Ruby
categories:
  - Ruby
slug: ruby-variables-and-types
---

## Variables in Ruby

Ruby has several types of variables, each with distinct scope and purpose. Variables do not need
explicit type declarations -- Ruby is dynamically typed, meaning the interpreter determines types at
runtime.

### Variable Types and Scope

```ruby
# Local variable -- lowercase or underscore
name = "Alice"
count = 42
_private = "convention for internal use"

# Instance variable -- prefixed with @
# Belongs to a specific object instance
@name = "Bob"
@items = []

# Class variable -- prefixed with @@
# Shared across all instances of a class and its subclasses
@@count = 0

# Global variable -- prefixed with $
# Accessible everywhere in the program
$global_var = "global"

# Constant -- starts with uppercase letter
# Should not be reassigned (Ruby warns but allows it)
PI = 3.14159
MAX_SIZE = 100
MyModule = Module.new

# Pseudovariables -- cannot be assigned
self    # current receiver
nil     # nothing / absence of value
true    # boolean true
false   # boolean false
__FILE__ # current file path
__LINE__ # current line number
__ENCODING__ # current file encoding
```

### Variable Scoping Rules

```ruby
x = "outer"

1.times do
  x = "inner"     # modifies the outer x
  y = "local"     # local to this block
end

puts x            # => "inner" -- blocks share the enclosing scope
# puts y          # => NameError: undefined local variable or method 'y'

# Loop variables leak out of blocks (Ruby < 3.0 behaviour preserved for compatibility)
result = [1, 2, 3].each do |item|
  # item is accessible here
end
# item => 3 in Ruby < 3.0, nil in Ruby 3.0+

# Methods create a new scope
def example
  z = "method local"
end

# z is not accessible here -- NameError
```

## Naming Conventions

Ruby follows strict naming conventions that communicate intent and scope:

| Convention         | Usage                                        | Example                        |
| ------------------ | -------------------------------------------- | ------------------------------ |
| `snake_case`       | Methods, local variables, instance variables | `user_name`, `calculate_total` |
| `UPPER_SNAKE_CASE` | Constants                                    | `MAX_RETRIES`, `API_VERSION`   |
| `CamelCase`        | Class and module names                       | `UserAccount`, `HttpClient`    |
| `@snake_case`      | Instance variables                           | `@first_name`, `@is_active`    |
| `@@snake_case`     | Class variables                              | `@@instance_count`             |
| `$snake_case`      | Global variables (avoid when possible)       | `$stdin`, `$LOAD_PATH`         |
| `?` suffix         | Predicate methods (return boolean)           | `empty?`, `include?`, `valid?` |
| `!` suffix         | Dangerous/mutating methods                   | `sort!`, `save!`, `chomp!`     |
| `=` suffix         | Setter methods                               | `name=`, `email=`              |

```ruby
# Good naming examples
def is_valid?(input)
  input.length > 0 && input.match?(/\A[a-z]+\z/)
end

def calculate_total(order)
  order.items.sum(&:price) * (1 + order.tax_rate)
end

# Constants are uppercase
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT = 30

# Classes are CamelCase
class UserAccount
  # Instance variables
  def initialize(username)
    @username = username
    @login_count = 0
  end

  # Predicate method
  def active?
    @login_count > 0
  end

  # Dangerous method
  def reset!
    @login_count = 0
    self
  end

  # Setter
  def username=(new_name)
    @username = new_name
  end
end
```

## Data Types

Ruby is a purely object-oriented language. Every value is an object with its own class and methods.

### Numeric Types

```ruby
# Integers -- arbitrary precision (no overflow)
42.class            # => Integer
1_000_000.class     # => Integer (underscores are ignored)
0b1010              # binary => 10
0o755               # octal => 493
0xFF                # hexadecimal => 255
-42.class           # => Integer (negative integers are also Integer)

# Integer operations
10 + 3     # => 13
10 - 3     # => 7
10 * 3     # => 30
10 / 3     # => 3 (integer division for two integers)
10.0 / 3   # => 3.3333... (float division when either operand is Float)
10 % 3     # => 1 (modulo)
10 ** 3    # => 1000 (exponentiation)

# Integer predicates
42.even?    # => true
42.odd?     # => false
42.zero?    # => false
1.positive? # => true
-1.negative? # => true

# Bitwise operations
0b1100 & 0b1010   # => 8  (AND)
0b1100 | 0b1010   # => 14 (OR)
0b1100 ^ 0b1010   # => 6  (XOR)
~0b1100            # => -13 (NOT)
0b1100 >> 1       # => 6  (right shift)
0b1100 << 1       # => 24 (left shift)

# Floats -- IEEE 754 double precision
3.14.class           # => Float
2.0e10               # => 20000000000.0 (scientific notation)
1.0 / 3.0            # => 0.3333333333333333
Float::INFINITY      # => Infinity
Float::NAN           # => NaN
Float::EPSILON       # => 2.220446049250313e-16

# Float comparison caveats
0.1 + 0.2 == 0.3    # => false (floating-point precision)
(0.1 + 0.2).round(10) == 0.3  # => true (use rounding for comparison)

# Rational numbers -- exact fractions
1/3r                # => (1/3)
(1/3r) * 3         # => (1/1) -- exact
Rational(22, 7)     # => (22/7)

# Complex numbers
Complex(3, 4)       # => (3+4i)
(3 + 4i).abs       # => 5.0
(3 + 4i).conjugate  # => (3-4i)
```

### String

Strings are mutable sequences of characters (in Ruby, each character is a `String` of length 1):

```ruby
# String creation
"hello"                    # double-quoted -- supports interpolation and escapes
'hello'                    # single-quoted -- literal, no interpolation
%(hello world)             # percent literal -- like double-quoted
%Q(hello #{name})          # same as double-quoted
%q(hello)                  # same as single-quoted

# String interpolation (double-quoted only)
name = "Ruby"
version = 3.3
"#{name} #{version}"       # => "Ruby 3.3"
"Result: #{42 + 8}"        # => "Result: 50"
"#{'upcase'.upcase}"       # => "UPCASE" (any expression)

# Multiline strings
long_text = <<~HEREDOC
  This is a heredoc string.
  The ~ operator strips leading whitespace.
  Variables interpolate: #{name}
HEREDOC

# Common string operations
"hello".length           # => 5
"hello".reverse          # => "olleh"
"hello".upcase           # => "HELLO"
"hello".downcase         # => "hello"
"hello".capitalize       # => "Hello"
"Hello World".include?("World")  # => true
"Hello World".index("World")     # => 6
"hello" == "hello"              # => true
"hello".equal?("hello")         # => false (different objects)
"hello".eql?("hello")           # => true (same content and type)

# Substring extraction
"hello"[0]       # => "h"
"hello"[0, 3]    # => "hel"
"hello"[1..3]    # => "ell"
"hello"[-1]      # => "o"
"hello"[-3..-1]  # => "llo"

# String replacement
"hello".sub("l", "r")       # => "herlo" (first occurrence)
"hello".gsub("l", "r")      # => "herro" (all occurrences)
"hello".sub(/l/) { "r" }    # => "herlo" (block form)

# Splitting and joining
"a,b,c".split(",")         # => ["a", "b", "c"]
"a,b,c".split(",", 2)      # => ["a", "b,c"] (limit splits)
["a", "b", "c"].join(",")  # => "a,b,c"
["a", "b", "c"].join       # => "abc"
["a", "b", "c"].join("-")  # => "a-b-c"

# Stripping whitespace
"  hello  ".strip      # => "hello"
"  hello  ".lstrip     # => "hello  "
"  hello  ".rstrip     # => "  hello"
"  hello  ".chomp      # => "  hello" (removes trailing newline)

# Padding
"hello".ljust(10, "-")  # => "hello-----"
"hello".rjust(10, "-")  # => "-----hello"
"hello".center(11, "-") # => "---hello---"

# String formatting
sprintf("%05d", 42)     # => "00042"
"%.2f" % 3.14159        # => "3.14"
"%-20s" % "left"        # => "left                "
"%s is %d years old" % ["Alice", 30]  # => "Alice is 30 years old"

# Encoding
"hello".encoding         # => #<Encoding:UTF-8>
"hello".bytesize         # => 5
"hello".force_encoding("ASCII")
```

### Symbol

Symbols are immutable, interned identifiers. Two symbols with the same name are the same object:

```ruby
:hello.class       # => Symbol
:hello.object_id == :hello.object_id  # => true (same object)
"hello".object_id == "hello".object_id # => false (different objects)

# Symbols are commonly used as hash keys and identifiers
person = { name: "Alice", age: 30 }
# equivalent to:
person = { :name => "Alice", :age => 30 }

# Symbol conversion
"hello".to_sym       # => :hello
:i_am.to_s           # => "i_am"
:i_am.intern         # => :i_am (same as to_sym)

# When to use Symbol vs String
# Symbol: fixed identifiers, hash keys, method names, enum-like values
# String: mutable text, user input, external data

# Symbol performance advantage in hashes
# Symbol lookup is O(1) because symbols are interned
{ name: "Alice" }    # preferred
{ "name" => "Alice" } # creates new string key each time (pre-Ruby 2.2)

# Ruby 2.2+ optimises frozen string keys, but symbol keys remain conventional
```

### Boolean: true and false

```ruby
true.class    # => TrueClass
false.class   # => FalseClass

# Truthiness in Ruby
# Only nil and false are falsy; everything else is truthy (including 0, "", [])
if 0
  "0 is truthy"
end
# => "0 is truthy"

if ""
  "empty string is truthy"
end
# => "empty string is truthy"

if nil
  "nil is falsy"
else
  "nil is falsy"
end

if false
  "false is falsy"
else
  "false is falsy"
end
```

### nil

```ruby
nil.class       # => NilClass
nil.nil?        # => true
nil.to_s        # => ""
nil.to_i        # => 0
nil.to_f        # => 0.0
nil.to_a        # => []
nil&.length     # => nil (safe navigation)

# nil is a singleton -- there is only one nil object
nil.object_id == nil.object_id  # => true

# Common pattern: default value with ||
name = nil
display_name = name || "Anonymous"  # => "Anonymous"

# Be careful: || does not distinguish nil from false
active = false
status = active || "inactive"  # => "inactive" (false is truthy check fails)
```

### Array

Arrays are ordered, integer-indexed collections of any type:

```ruby
# Creation
[1, 2, 3]                          # literal
Array.new(3, "x")                  # => ["x", "x", "x"]
Array.new(3) { |i| i * 2 }        # => [0, 2, 4]
%w[apple banana cherry]            # => ["apple", "banana", "cherry"]
%i[apple banana cherry]            # => [:apple, :banana, :cherry]
Array(1..5)                         # => [1, 2, 3, 4, 5]
Array.new([1, 2, 3])              # => [1, 2, 3]

# Access
arr = [10, 20, 30, 40, 50]
arr[0]          # => 10
arr[-1]         # => 50
arr[1, 3]       # => [20, 30, 40]
arr[1..3]       # => [20, 30, 40]
arr.fetch(99, "default")  # => "default"
arr.first       # => 10
arr.last        # => 50

# Modification
arr.push(60)          # => [10, 20, 30, 40, 50, 60]
arr << 70             # => [10, 20, 30, 40, 50, 60, 70]
arr.pop               # => 70
arr.shift             # => 10
arr.unshift(5)        # => [5, 20, 30, 40, 50, 60]
arr.insert(2, 25)     # => [5, 20, 25, 30, 40, 50, 60]
arr.delete(30)        # => 30 (removes and returns)
arr.delete_at(1)      # => 20

# Higher-order methods
[1, 2, 3, 4, 5].map { |n| n * 2 }           # => [2, 4, 6, 8, 10]
[1, 2, 3, 4, 5].select { |n| n > 3 }       # => [4, 5]
[1, 2, 3, 4, 5].reject { |n| n > 3 }       # => [1, 2, 3]
[1, 2, 3, 4, 5].find { |n| n > 3 }         # => 4
[1, 2, 3, 4, 5].find_index { |n| n > 3 }   # => 3
[1, 2, 3, 4, 5].count { |n| n > 3 }        # => 2
[1, 2, 3, 4, 5].reduce(0) { |sum, n| sum + n }  # => 15
[1, 2, 3, 4, 5].sort                        # => [1, 2, 3, 4, 5]
[3, 1, 4, 1, 5].uniq                       # => [1, 3, 4, 5]
[1, 2, 3].flatten                           # => [1, 2, 3]
[[1, 2], [3, 4]].transpose                 # => [[1, 3], [2, 4]]

# Combination
[1, 2].product([3, 4])      # => [[1,3],[1,4],[2,3],[2,4]]
[1, 2].zip([3, 4], [5, 6])  # => [[1,3,5],[2,4,6]]
[1, 2, 3, 4].each_slice(2).to_a  # => [[1,2],[3,4]]
[1, 2, 3, 4].each_cons(2).to_a   # => [[1,2],[2,3],[3,4]]

# Array predicates
[].empty?                    # => true
[1, 2, 3].include?(2)       # => true
[1, 2, 3].any? { |n| n > 2 }    # => true
[1, 2, 3].all? { |n| n > 0 }    # => true
[1, 2, 3].none? { |n| n > 5 }   # => true
[1, 2, 3].one? { |n| n > 2 }    # => true

# Array arithmetic
[1, 2] + [3, 4]          # => [1, 2, 3, 4]
[1, 2, 3] - [2]          # => [1, 3]
[1, 2] * 3               # => [1, 2, 1, 2, 1, 2]
[1, 2] & [2, 3]          # => [2] (intersection)
[1, 2] | [2, 3]          # => [1, 2, 3] (union)
```

### Hash

Hashes are key-value collections with O(1) average lookup:

```ruby
# Creation
{ a: 1, b: 2 }                    # symbol keys
{ "name" => "Alice", "age" => 30 } # string keys
Hash.new(0)                        # default value for missing keys
Hash.new { |h, k| h[k] = [] }     # auto-initialising default

# Access
h = { name: "Alice", age: 30 }
h[:name]                  # => "Alice"
h[:missing]               # => nil
h.fetch(:missing, "N/A")  # => "N/A"
h.key?(:name)             # => true
h.value?(30)              # => true
h.keys                    # => [:name, :age]
h.values                  # => ["Alice", 30]

# Modification
h[:email] = "alice@example.com"  # add/update
h.delete(:age)                   # remove
h.transform_keys(&:to_s)         # => {"name"=>"Alice", "email"=>"..."}
h.transform_values(&:to_s)       # => {:name=>"Alice", ...}
h.merge({ city: "London" })      # => new hash with merged entries
h.merge!({ city: "London" })     # modify in place

# Iteration
h.each { |key, value| puts "#{key}: #{value}" }
h.each_key { |key| puts key }
h.each_value { |value| puts value }

# Hash predicates
h.empty?                   # => false
h.has_key?(:name)          # => true
h.has_value?("Alice")      # => true
{ a: 1, b: 2 }.any? { |_k, v| v > 1 }  # => true

# Hash as kwargs (modern Ruby)
def configure(host:, port:, timeout: 30)
  puts "#{host}:#{port} (timeout: #{timeout})"
end

configure(**{ host: "localhost", port: 8080 })

# Hash ordering is guaranteed (insertion order) since Ruby 1.9
{ a: 1, b: 2, c: 3 }.keys  # => [:a, :b, :c] (insertion order)
```

### Range

Ranges represent an interval of values:

```ruby
# Creation
1..10        # inclusive range
1...10       # exclusive range (excludes 10)
('a'..'z')   # character range

# Conversion
(1..5).to_a    # => [1, 2, 3, 4, 5]
(1...5).to_a   # => [1, 2, 3, 4]
('a'..'e').to_a # => ["a", "b", "c", "d", "e"]

# Range operations
(1..10).include?(5)     # => true
(1..10).cover?(5.5)     # => true (optimised, no iteration)
(1..10).min             # => 1
(1..10).max             # => 10
(1..10).size            # => 10
(1..10).begin           # => 1
(1..10).end             # => 10

# Ranges as conditions
score = 85

case score
when 90..100 then "A"
when 80...90  then "B"
when 70...80  then "C"
else "F"
end
# => "B"

# Ranges in iteration
(1..5).each { |i| puts i }
3.times { |i| puts i }        # 0, 1, 2
1.upto(5) { |i| puts i }      # 1, 2, 3, 4, 5
5.downto(1) { |i| puts i }    # 5, 4, 3, 2, 1

# Ranges for array slicing
arr = [0, 1, 2, 3, 4, 5]
arr[2..4]    # => [2, 3, 4]
arr[2...4]   # => [2, 3]
```

## Duck Typing

Ruby uses duck typing -- "If it walks like a duck and quacks like a duck, then it must be a duck."
Objects are classified by what they can do (their methods), not by their class hierarchy:

```ruby
# Any object that responds to :quack and :waddle works here
def make_it_quack(thing)
  if thing.respond_to?(:quack)
    thing.quack
  else
    raise ArgumentError, "#{thing} doesn't know how to quack"
  end
end

class Duck
  def quack; puts "Quack!"; end
  def waddle; puts "Waddle waddle"; end
end

class Person
  def quack; puts "I'm pretending to be a duck"; end
end

make_it_quack(Duck.new)    # => "Quack!"
make_it_quack(Person.new)   # => "I'm pretending to be a duck"

# More practical example: any object with each works as a collection
def process_all(collection)
  collection.each do |item|
    puts item
  end
end

process_all([1, 2, 3])           # Array
process_all({ a: 1, b: 2 })     # Hash
process_all(1..5)                # Range
process_all("hello")             # String

# respond_to? for safe method checking
def safe_length(obj)
  if obj.respond_to?(:length)
    obj.length
  else
    0
  end
end

safe_length("hello")    # => 5
safe_length([1, 2, 3])  # => 3
safe_length(42)         # => 0
```

## Mutability and Immutability

Most Ruby objects are mutable by default. Strings, arrays, and hashes can be modified in place:

```ruby
# Strings are mutable
name = "hello"
name << " world"
name.replace("goodbye")
name.upcase!
puts name  # => "GOODBYE"

# Arrays are mutable
arr = [1, 2, 3]
arr << 4
arr[0] = 99
arr.clear

# Hashes are mutable
h = { a: 1 }
h[:b] = 2
h.delete(:a)

# Symbols, Integers, Floats, true, false, nil are immutable
sym = :hello
sym.upcase!  # => NoMethodError (Symbol has no mutating methods)
```

### freeze

The `freeze` method prevents further modification of an object:

```ruby
# Freezing strings
str = "hello".freeze
str << " world"    # => FrozenError: can't modify frozen String
str.gsub!("l", "r") # => FrozenError

# Frozen object is still usable
puts str.length    # => 5
puts str.upcase    # => "HELLO" (returns new string, doesn't modify)

# Check if frozen
str.frozen?  # => true

# Freeze with frozen_string_literal pragma
# At the top of a file:
# frozen_string_literal: true

# All string literals become frozen by default
greeting = "hello"    # frozen
greeting.frozen?       # => true

# To create a mutable string:
greeting = +"hello"    # mutable string literal
greeting = "hello".dup # create a mutable copy

# Freeze other objects
arr = [1, 2, 3].freeze
arr << 4               # => FrozenError

h = { a: 1 }.freeze
h[:b] = 2             # => FrozenError

# Freeze does not deep-freeze
outer = ["inner"]
outer.freeze
outer[0] << " appended"  # works! inner array is not frozen

# Deep freeze utility
def deep_freeze(object)
  case object
  when Array
    object.each { |e| deep_freeze(e) }
  when Hash
    object.each { |k, v| deep_freeze(k); deep_freeze(v) }
  end
  object.freeze
end
```

## Object References

Ruby variables hold references to objects, not the objects themselves. Understanding this is
critical for avoiding bugs:

```ruby
# Two variables pointing to the same object
a = "hello"
b = a
b << " world"
puts a  # => "hello world" -- both a and b reference the same string

# Object identity
a = "hello"
b = "hello"
a.equal?(b)    # => false (different objects)
a == b         # => true (same content)
a.eql?(b)      # => true (same content and type)

c = a
a.equal?(c)    # => true (same object)

# .object_id for identity
a = "hello"
b = a
a.object_id == b.object_id  # => true

b = a.dup     # shallow copy -- new object, same content
a.object_id == b.object_id  # => false

b = a.clone   # similar to dup, copies frozen state and singleton methods
a.object_id == b.object_id  # => false

# Dup vs clone
original = "hello"
original.freeze

duped = original.dup
duped.frozen?   # => false (dup does not copy frozen state)

cloned = original.clone
cloned.frozen?  # => true (clone copies frozen state)

# Mutable default argument pitfall
def add_item(items = [])
  items << "new item"
  items
end

add_item  # => ["new item"]
add_item  # => ["new item", "new item"] -- same array reused!
add_item  # => ["new item", "new item", "new item"]

# Fix: use nil default and create new array inside
def add_item(items = nil)
  items ||= []
  items << "new item"
  items
end
```

## Basic I/O

### Output

```ruby
# puts -- prints with newline
puts "Hello, World!"        # => "Hello, World!\n"
puts 42                     # => "42\n"
puts [1, 2, 3]              # => "1\n2\n3\n" (each element on its own line)

# print -- prints without newline
print "Hello, "
print "World!"              # => "Hello, World!"

# p -- prints with inspect representation (useful for debugging)
p "hello"     # => "hello" (with quotes)
p [1, "two"]  # => [1, "two"]

# pp -- pretty print (built-in since Ruby 2.5)
pp({ name: "Alice", scores: [85, 92, 78], active: true })

# printf -- formatted output
printf("Name: %-10s Age: %03d\n", "Alice", 30)
# => "Name: Alice      Age: 030\n"

# write to $stdout directly
$stdout.write("data\n")
$stdout.flush

# Logger for structured output
require 'logger'
log = Logger.new($stdout)
log.info("Application started")
log.warn("Deprecated feature used")
log.error("Connection failed")
```

### Input

```ruby
# gets -- reads a line from stdin (includes newline)
input = gets
# => "hello\n"
input.chomp    # => "hello" (removes trailing newline)
input.strip     # => "hello" (removes leading/trailing whitespace)

# gets with chomp shorthand
input = gets.chomp

# Reading multiple lines
lines = []
while (line = gets)
  lines << line.chomp
end

# Reading from ARGF (files passed as arguments, or stdin)
# ruby script.rb file1.txt file2.txt
ARGF.each_line do |line|
  puts line
end

# Reading entire input
all_input = gets(nil)  # reads all input until EOF
data = $stdin.read

# Command-line arguments
ARGV         # => Array of command-line arguments
ARGV[0]      # first argument
ARGV.length  # number of arguments

# Reading files directly
File.read("data.txt")                   # entire file as string
File.readlines("data.txt")              # array of lines
File.foreach("data.txt") { |line| }     # iterate lines (memory efficient)
File.open("data.txt", "r") do |f|       # block form auto-closes
  f.each_line do |line|
    puts line
  end
end
```

### Type Conversion

```ruby
# String to number
"42".to_i          # => 42
"3.14".to_f        # => 3.14
"42".to_r          # => (42/1)
"0xFF".to_i(16)    # => 255 (with base)

"abc".to_i         # => 0 (returns 0 for non-numeric strings)
Integer("42")      # => 42 (raises ArgumentError for non-numeric)
Integer("abc")     # => ArgumentError

# Number to string
42.to_s            # => "42"
3.14.to_s          # => "3.14"

# Float to integer (truncation vs rounding)
3.7.to_i           # => 3 (truncate)
3.7.round          # => 4
3.7.floor          # => 3
3.7.ceil           # => 4

# String parsing
"hello world 42".scan(/\d+/)    # => ["42"]
"hello world".scan(/\w+/)      # => ["hello", "world"]
"key=value".split("=")          # => ["key", "value"]
```

## Summary Table of Core Types

| Type     | Example        | Mutable | Notes                                  |
| -------- | -------------- | ------- | -------------------------------------- |
| Integer  | `42`           | No      | Arbitrary precision                    |
| Float    | `3.14`         | No      | IEEE 754 double                        |
| Rational | `1/3r`         | No      | Exact fractions                        |
| Complex  | `3+4i`         | No      | Complex arithmetic                     |
| String   | `"hello"`      | Yes     | Use `freeze` for immutability          |
| Symbol   | `:name`        | No      | Interned identifiers                   |
| Array    | `[1, 2]`       | Yes     | Ordered, indexed                       |
| Hash     | `{ a: 1 }`     | Yes     | Key-value, ordered                     |
| Range    | `1..10`        | Yes/No  | Immutable endpoints, mutable iteration |
| Regexp   | `/pattern/`    | No      | Regular expressions                    |
| Proc     | `-> { }`       | Yes     | Closures                               |
| Lambda   | `-> (x) { x }` | Yes     | Strict closures                        |
| nil      | `nil`          | No      | Singleton NilClass                     |
| true     | `true`         | No      | Singleton TrueClass                    |
| false    | `false`        | No      | Singleton FalseClass                   |
