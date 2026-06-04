---
title: Control Flow
description:
  'Ruby conditionals, loops, iterators, next/break/redo, exception handling with
  begin/rescue/ensure, custom exceptions, and early exits with guard clauses.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Ruby
categories:
  - Ruby
slug: ruby-control-flow
---

## Conditionals

### if / elsif / else

The `if` statement evaluates a condition and executes the corresponding branch. The `elsif` keyword
handles additional conditions, and `else` provides a fallback:

```ruby
score = 85

if score >= 90
  puts "Grade: A"
elsif score >= 80
  puts "Grade: B"
elsif score >= 70
  puts "Grade: C"
else
  puts "Grade: F"
end
# => "Grade: B"

# if as a modifier (postfix)
puts "Pass" if score >= 60
puts "Fail" if score < 60

# if as an expression (returns the last evaluated value)
grade = if score >= 90
         "A"
       elsif score >= 80
         "B"
       elsif score >= 70
         "C"
       else
         "F"
       end
puts grade  # => "B"

# Nested if
if user
  if user.active?
    if user.premium?
      puts "Premium active user"
    end
  end
end
```

### unless

`unless` is the negation of `if`. It executes the body when the condition is falsy:

```ruby
user = nil

unless user
  puts "No user found"
end
# => "No user found"

# unless with else
unless score >= 60
  puts "Failed"
else
  puts "Passed"
end

# unless as modifier
puts "No user" unless user

# Avoid double negatives -- prefer if for complex negations
# Bad
unless !user.active?
  deactivate(user)
end

# Good
if user.active?
  deactivate(user)
end
```

### Ternary Operator

The ternary operator is a concise inline conditional:

```ruby
status = score >= 60 ? "Pass" : "Fail"

# Equivalent to
status = if score >= 60
          "Pass"
        else
          "Fail"
        end

# Nested ternaries (avoid when possible)
label = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F"

# Use case/when instead for multiple conditions
```

### case / when

The `case` statement is Ruby's switch construct. It supports both value matching and condition
matching:

```ruby
# Value matching (=== operator)
action = "delete"

case action
when "create"
  puts "Creating resource"
when "read"
  puts "Reading resource"
when "update"
  puts "Updating resource"
when "delete"
  puts "Deleting resource"
else
  puts "Unknown action"
end

# Case with expressions
case score
when 90..100 then "A"
when 80...90 then "B"
when 70...80 then "C"
when 0...70  then "F"
else "Invalid"
end

# Case with multiple values
role = "admin"

case role
when "admin", "superadmin"
  puts "Full access"
when "editor"
  puts "Edit access"
when "viewer"
  puts "Read-only access"
end

# Case with regex
case command
when /^create/
  puts "Create command"
when /^delete/
  puts "Delete command"
when /^update/
  puts "Update command"
else
  puts "Unknown command"
end

# Case with procs/lambdas (Ruby 2.7+ pattern matching alternative)
even = -> (n) { n.even? }
odd = -> (n) { n.odd? }

case 4
when even
  puts "Even number"
when odd
  puts "Odd number"
end

# Case as expression
category = case score
           when 90..100 then "excellent"
           when 80...90 then "good"
           when 70...80 then "average"
           else "below average"
           end

# Case with no argument (acts like a series of if/elsif)
number = 42

case
when number < 0
  puts "Negative"
when number == 0
  puts "Zero"
when number > 0
  puts "Positive"
end
```

### Pattern Matching (Ruby 2.7+, stable in 3.0+)

```ruby
# case/in with pattern matching
case { status: 200, body: "OK" }
in { status: 200..299, body: }
  puts "Success: #{body}"
in { status: 400..499 }
  puts "Client error"
in { status: 500..599 }
  puts "Server error"
end

# Array pattern matching
case [1, 2, 3]
in [Integer, Integer]
  puts "Two integers"
in [Integer, Integer, Integer]
  puts "Three integers"
end

# One-line pattern matching with =>
{ status: 404 } => { status: }
puts status  # => 404

# Guard clauses with if in patterns
case [1, 2, 3]
in [a, b, c] if a == 1
  puts "First element is 1"
end
```

## Loops

### while

The `while` loop executes as long as the condition is truthy:

```ruby
count = 5
while count > 0
  puts "Count: #{count}"
  count -= 1
end
# => Count: 5, 4, 3, 2, 1

# while as modifier
count = 5
count -= 1 while count > 0

# Infinite loop with break
while true
  line = gets.chomp
  break if line == "quit"
  puts "You typed: #{line}"
end

# Common pattern: reading input
while (line = gets)
  break if line.strip.empty?
  process(line)
end
```

### until

`until` is the inverse of `while` -- it executes while the condition is falsy:

```ruby
count = 0
until count >= 5
  puts count
  count += 1
end
# => 0, 1, 2, 3, 4

# until as modifier
count = 0
count += 1 until count >= 5
```

### for

The `for` loop iterates over collections:

```ruby
# for over arrays
for element in [10, 20, 30]
  puts element
end

# for over ranges
for i in 1..5
  puts i
end

# for over hashes
for key, value in { a: 1, b: 2, c: 3 }
  puts "#{key}: #{value}"
end

# Note: for does NOT create a new scope -- the loop variable leaks
for i in 1..3
  # i is accessible after the loop
end
puts i  # => 3

# Prefer each over for -- it creates a proper block scope
[1, 2, 3].each do |i|
  # i is local to this block
end
# i is not accessible here (nil in Ruby 3.0+)
```

### loop

The `loop` method creates an infinite loop, typically combined with `break`:

```ruby
loop do
  print "Enter command (q to quit): "
  input = gets.chomp
  break if input == "q"
  process_command(input)
end

# loop with a counter
count = 0
loop do
  count += 1
  break if count >= 10
end

# loop returns the value passed to break
result = loop do
  break 42 if some_condition
end
# result => 42
```

## Iterators

Ruby emphasises iteration over manual loops. Iterators are methods that yield values to a block:

### each

The most fundamental iterator -- yields each element of a collection:

```ruby
# Array each
[1, 2, 3].each do |element|
  puts element
end

# Hash each
{ a: 1, b: 2 }.each do |key, value|
  puts "#{key}: #{value}"
end

# String each_char
"hello".each_char do |char|
  puts char
end

# Range each
(1..5).each { |i| puts i }

# each_line for strings
"line1\nline2\nline3".each_line do |line|
  puts line.chomp
end

# each_with_index
["a", "b", "c"].each_with_index do |element, index|
  puts "#{index}: #{element}"
end
# => 0: a, 1: b, 2: c
```

### times

```ruby
5.times do |i|
  puts "Iteration #{i}"
end
# => Iteration 0, 1, 2, 3, 4

5.times { puts "Hello" }  # prints "Hello" 5 times

# times returns self (the integer)
result = 3.times.map { |i| i * 2 }  # => [0, 2, 4]
```

### upto and downto

```ruby
1.upto(5) { |i| puts i }
# => 1, 2, 3, 4, 5

5.downto(1) { |i| puts i }
# => 5, 4, 3, 2, 1

# With step
1.step(10, 2) { |i| puts i }
# => 1, 3, 5, 7, 9

# upto with string
"a".upto("e") { |c| puts c }
# => a, b, c, d, e
```

### each_with_index and with_index

```ruby
["apple", "banana", "cherry"].each_with_index do |fruit, index|
  puts "#{index}. #{fruit}"
end

# with_index on any iterator that yields a single value
(10..20).each.with_index do |number, index|
  puts "#{index}: #{number}"
end

# with_index with an offset
["a", "b", "c"].each.with_index(1) do |letter, index|
  puts "#{index}. #{letter}"
end
# => 1. a, 2. b, 3. c
```

### Higher-Order Iterators

```ruby
# map/collect -- transform each element
[1, 2, 3].map { |n| n ** 2 }
# => [1, 4, 9]

# select/reject -- filter elements
[1, 2, 3, 4, 5].select { |n| n.even? }
# => [2, 4]

[1, 2, 3, 4, 5].reject { |n| n.even? }
# => [1, 3, 5]

# reduce/inject -- accumulate
[1, 2, 3, 4, 5].reduce(0) { |sum, n| sum + n }
# => 15

[1, 2, 3, 4, 5].reduce(1, :*)
# => 120 (product using symbol shorthand)

# group_by -- group by key
["alice", "bob", "charlie"].group_by { |name| name.length }
# => {5=>["alice"], 3=>["bob"], 7=>["charlie"]}

# sort_by -- sort by key
["banana", "apple", "cherry"].sort_by { |word| word.length }
# => ["apple", "banana", "cherry"]

# partition -- split into two arrays
[1, 2, 3, 4, 5].partition { |n| n.even? }
# => [[2, 4], [1, 3, 5]]

# each_slice -- iterate in groups
(1..10).each_slice(3).to_a
# => [[1,2,3], [4,5,6], [7,8,9], [10]]

# each_cons -- iterate over consecutive groups
[1, 2, 3, 4].each_cons(2).to_a
# => [[1,2], [2,3], [3,4]]

# cycle -- repeat endlessly
[:a, :b].cycle.take(6)
# => [:a, :b, :a, :b, :a, :b]

# zip -- combine multiple arrays
[1, 2, 3].zip([4, 5, 6])
# => [[1,4], [2,5], [3,6]]

# flat_map/collect_concat -- flatten mapped results
[[1, 2], [3, 4]].flat_map { |arr| arr.map { |n| n * 10 } }
# => [10, 20, 30, 40]

# all?/any?/none?/one?
[1, 2, 3].all? { |n| n > 0 }     # => true
[1, 2, 3].any? { |n| n > 5 }     # => false
[1, 2, 3].none? { |n| n > 5 }    # => true
[1, 2, 3].one? { |n| n == 2 }    # => true

# count with block
[1, 2, 3, 4, 5].count { |n| n.even? }
# => 2

# find/detect -- first matching element
[1, 2, 3, 4, 5].find { |n| n > 3 }
# => 4

# max_by/min_by
%w[apple banana cherry].max_by(&:length)
# => "banana"

%w[apple banana cherry].min_by(&:length)
# => "apple"
```

### Chaining Iterators

```ruby
# Multiple transformations chained
result = (1..100)
  .select { |n| n.even? }
  .map { |n| n ** 2 }
  .select { |n| n > 100 && n < 1000 }
  .sort
  .first(5)
# => [144, 196, 256, 324, 400]

# Lazy evaluation for large or infinite collections
# Avoids creating intermediate arrays
result = (1..Float::INFINITY)
  .lazy
  .select { |n| n.even? }
  .map { |n| n ** 2 }
  .select { |n| n < 1000 }
  .take(5)
  .to_a
# => [4, 16, 36, 64, 100]

# Lazy avoids processing all elements
huge_range = (1..1_000_000)
  .lazy
  .select { |n| n % 17 == 0 }
  .map { |n| n * 2 }
  .first(3)
  .to_a
# => [34, 68, 102]
```

## Loop Control: next, break, redo

### next

Skips to the next iteration of the loop:

```ruby
# Skip odd numbers
(1..10).each do |i|
  next if i.odd?
  puts i
end
# => 2, 4, 6, 8, 10

# next with a value (returns the value instead of the block result)
result = [1, 2, 3, 4, 5].map do |n|
  next nil if n.odd?      # returns nil for odd numbers
  n * 2                   # returns doubled value for even
end
# => [nil, 4, nil, 8, nil]

# Skip to next with inline form
[1, 2, 3, 4, 5].each { |i| next if i < 3; puts i }
# => 3, 4, 5
```

### break

Exits the loop entirely:

```ruby
# Find first element matching a condition
result = [1, 2, 3, 4, 5, 6, 7].find do |n|
  break n if n > 4
end
# result => 5

# Break returns a value from the entire method call
found = loop do
  x = rand(1..100)
  break x if x > 90
end
# found => some number > 90

# break with a value in map
result = [1, 2, 3, 4, 5].map do |n|
  break :done if n == 3
  n * 2
end
# result => :done (break exits map entirely)
```

### redo

Restarts the current iteration without re-evaluating the condition:

```ruby
# Retry input until valid
valid_input = nil

until valid_input
  print "Enter a number: "
  input = gets.chomp

  if input.match?(/\A\d+\z/)
    valid_input = input.to_i
  else
    puts "Invalid input. Try again."
  end
end

# redo in loops
count = 0
results = []

3.times do
  value = rand(10)
  if value < 3
    redo  # retry this iteration
  else
    results << value
    count += 1
  end
end
# Results will have 3 values all >= 3
```

### retry (exception handling)

`retry` restarts the `begin` block from the beginning. Use with caution to avoid infinite loops:

```ruby
# Retry with a counter
attempts = 0
max_attempts = 3

begin
  attempts += 1
  connect_to_database
rescue ConnectionError
  if attempts < max_attempts
    sleep(2 ** attempts)  # exponential backoff
    retry
  else
    raise "Failed after #{max_attempts} attempts"
  end
end

# retry restarts from begin
# Use sparingly -- prefer explicit retry loops
def fetch_with_retry(url, max_retries: 3)
  retries = 0
  begin
    response = HTTP.get(url)
    raise TimeoutError if response.status == 408
    response
  rescue TimeoutError, SocketError
    retries += 1
    if retries <= max_retries
      sleep(2 ** retries)
      retry
    else
      raise
    end
  end
end
```

## Guard Clauses

Guard clauses improve readability by handling edge cases early:

```ruby
# Without guard clauses (arrow anti-pattern)
def process_order(order)
  if order
    if order.paid?
      if order.items.any?
        ship(order)
      else
        raise "Empty order"
      end
    else
      raise "Unpaid order"
    end
  else
    raise "No order"
  end
end

# With guard clauses
def process_order(order)
  raise "No order" unless order
  raise "Unpaid order" unless order.paid?
  raise "Empty order" unless order.items.any?

  ship(order)
end

# Another example
def calculate_discount(user, order)
  return 0 unless user

  base = order.total > 100 ? 0.1 : 0.0
  return base unless user.member?

  base + 0.05
end
```

## Exception Handling

### begin / rescue / ensure / else

Ruby uses `begin/rescue` blocks for exception handling:

```ruby
# Basic structure
begin
  # Code that might raise an exception
  result = 10 / 0
rescue ZeroDivisionError
  # Handle the specific exception
  puts "Cannot divide by zero"
end

# Full structure
begin
  file = File.open("data.txt")
  content = file.read
  result = process(content)
rescue Errno::ENOENT
  puts "File not found"
rescue IOError => e
  puts "I/O error: #{e.message}"
rescue => e
  # Catch-all (only rescue StandardError subclasses)
  puts "Unexpected error: #{e.message}"
  puts e.backtrace.first(5)
else
  # Executes only if no exception was raised
  puts "Processed successfully: #{result}"
ensure
  # Always executes (like finally in Java)
  file&.close
end
```

### Exception Hierarchy

Ruby exceptions form a class hierarchy. `Exception` is the root, but you should typically only
rescue `StandardError` (or its subclasses) in application code:

```
Exception
├── SystemExit          # exit(), exit!
├── SignalException     # signals (SIGINT, SIGTERM)
├── NoMemoryError       # out of memory
├── ScriptError
│   ├── LoadError
│   ├── NotImplementedError
│   └── SyntaxError
├── SecurityError
├── StandardError       # <-- rescue this in app code
│   ├── ArgumentError
│   ├── IOError
│   │   ├── EOFError
│   │   └── Errno::* (file system errors)
│   ├── IndexError
│   ├── KeyError        # Ruby 2.5+
│   ├── LocalJumpError
│   ├── NameError
│   ├── RangeError
│   ├── RegexpError
│   ├── RuntimeError
│   ├── StopIteration
│   ├── SyntaxError (in StandardError branch too)
│   ├── ThreadError
│   ├── TypeError
│   └── ZeroDivisionError
└── SystemStackError
```

```ruby
# Rescue specific exceptions
begin
  JSON.parse(invalid_json)
rescue JSON::ParserError => e
  puts "Invalid JSON: #{e.message}"
end

begin
  File.read("/nonexistent/file.txt")
rescue Errno::ENOENT => e
  puts "File not found: #{e.message}"
rescue Errno::EACCES => e
  puts "Permission denied: #{e.message}"
end

begin
  array[100]
rescue IndexError => e
  puts "Index out of bounds: #{e.message}"
end
```

### raise

The `raise` method creates and raises exceptions:

```ruby
# Raise with a string message
raise "Something went wrong"

# Raise a specific exception class
raise ArgumentError, "Invalid argument"

# Raise with a formatted message
raise ArgumentError, "Expected #{expected}, got #{actual}"

# Raise an existing exception object
error = RuntimeError.new("Custom error")
raise error

# Re-raise the current exception (in a rescue block)
begin
  risky_operation
rescue => e
  # do some logging
  raise  # re-raises the same exception with original backtrace
end

# raise with ensure
begin
  raise "Initial error"
rescue => e
  puts "Caught: #{e.message}"
  raise RuntimeError, "Wrapped: #{e.message}"
end
```

### Custom Exceptions

Define custom exception classes by inheriting from `StandardError`:

```ruby
# Base custom exception
class ApplicationError < StandardError; end

# Specific exceptions
class ValidationError < ApplicationError
  attr_reader :field, :value

  def initialize(message = "Validation failed", field: nil, value: nil)
    @field = field
    @value = value
    super(message)
  end
end

class NotFoundError < ApplicationError
  attr_reader :resource, :id

  def initialize(message = "Resource not found", resource: nil, id: nil)
    @resource = resource
    @id = id
    super(message)
  end
end

class AuthenticationError < ApplicationError; end
class AuthorizationError < ApplicationError; end
class PaymentError < ApplicationError; end

# Using custom exceptions
class UserService
  def find_user!(id)
    user = User.find_by(id: id)
    raise NotFoundError.new("User not found", resource: "User", id: id) unless user
    user
  end

  def update_email!(user, new_email)
    raise ValidationError.new("Invalid email format", field: "email", value: new_email) unless
      new_email.match?(/\A[^@\s]+@[^@\s]+\z/)

    user.update!(email: new_email)
  end

  def authenticate!(username, password)
    user = User.find_by(username: username)
    raise NotFoundError, "User '#{username}' not found" unless user
    raise AuthenticationError, "Invalid password" unless user.authenticate(password)
    raise AuthorizationError, "Account suspended" unless user.active?
    user
  end
end

# Rescue custom exceptions
begin
  user = UserService.new.authenticate!("alice", "wrong")
rescue AuthenticationError => e
  puts "Auth failed: #{e.message}"
rescue NotFoundError => e
  puts "Not found: #{e.message}"
rescue ApplicationError => e
  puts "App error: #{e.class}: #{e.message}"
end
```

### Exception Object Methods

```ruby
begin
  raise ArgumentError, "Invalid value: nil"
rescue => e
  e.class           # => ArgumentError
  e.message         # => "Invalid value: nil"
  e.backtrace       # => Array of call stack strings
  e.backtrace[0]    # => first line of backtrace
  e.backtrace.first(3)  # => first 3 lines
  e.cause           # => the exception that caused this one (Ruby 2.5+)
  e.inspect         # => "#<ArgumentError: Invalid value: nil>"
  e.to_s            # => "Invalid value: nil"

  # Exception wrapping
  begin
    raise "original error"
  rescue => original
    raise StandardError, "wrapped: #{original.message}"
  end
rescue StandardError => e
  puts e.cause  # => nil (no cause tracking unless using raise cause: option)
end

# Ruby 3.1+ cause tracking
begin
  raise "inner"
rescue => inner
  raise "outer"
rescue => outer
  outer.cause  # => #<RuntimeError: inner>
end
```

### retry with Exceptions

```ruby
# Retry with exponential backoff
class ResilientClient
  def initialize(max_retries: 3, base_delay: 1)
    @max_retries = max_retries
    @base_delay = base_delay
  end

  def get(url)
    retries = 0
    begin
      response = HTTP.get(url)
      unless response.status == 200
        raise RuntimeError, "HTTP #{response.status}"
      end
      response
    rescue SocketError, TimeoutError, RuntimeError => e
      retries += 1
      if retries <= @max_retries
        delay = @base_delay * (2 ** (retries - 1))
        sleep(delay)
        retry
      else
        raise
      end
    end
  end
end
```

### Rescue in Method Definitions

Ruby allows a compact rescue syntax directly in method definitions:

```ruby
# Instead of wrapping entire method in begin/rescue
def fetch_data(url)
  response = HTTP.get(url)
  JSON.parse(response.body)
rescue JSON::ParserError
  {}
rescue SocketError, TimeoutError => e
  { error: e.message }
end

# Equivalent to
def fetch_data(url)
  begin
    response = HTTP.get(url)
    JSON.parse(response.body)
  rescue JSON::ParserError
    {}
  rescue SocketError, TimeoutError => e
    { error: e.message }
  end
end

# Multiple rescue clauses
def process(input)
  validate(input)
  transform(input)
  save(input)
rescue ValidationError => e
  { status: 422, error: e.message }
rescue SaveError => e
  { status: 500, error: e.message }
rescue => e
  { status: 500, error: "Unexpected: #{e.message}" }
end
```

### Ensure for Cleanup

```ruby
# File handling with ensure
def read_config(path)
  file = nil
  begin
    file = File.open(path, "r")
    file.read
  ensure
    file&.close
  end
end

# Database transaction with ensure
def with_transaction
  connection = DatabasePool.checkout
  begin
    connection.begin_transaction
    yield(connection)
    connection.commit
  rescue => e
    connection.rollback
    raise
  ensure
    DatabasePool.checkin(connection)
  end
end

# Lock management with ensure
def with_lock(resource)
  lock = acquire_lock(resource)
  begin
    yield
  ensure
    release_lock(lock)
  end
end

# Ensure always executes
def example
  begin
    raise "error"
  rescue
    puts "rescued"
  ensure
    puts "ensure runs"  # always executes
  end
  # Output: "rescued", then "ensure runs"
end
```

## Common Control Flow Patterns

### Early Return

```ruby
# Clear, linear flow with early returns
def process_payment(order, user)
  return { error: "Order required" } unless order
  return { error: "User required" } unless user

  unless order.items.any?
    return { error: "Empty order" }
  end

  if order.total > user.credit_limit
    return { error: "Exceeds credit limit" }
  end

  charge = PaymentGateway.charge(user.payment_method, order.total)
  return { error: charge.error } unless charge.success?

  { success: true, charge_id: charge.id }
end
```

### Flattening Nested Conditions

```ruby
# Before: deeply nested
def handle_request(request)
  if request.authenticated?
    if request.authorised?
      if request.valid?
        process(request)
      else
        respond_with_error(400, "Invalid request")
      end
    else
      respond_with_error(403, "Not authorised")
    end
  else
    respond_with_error(401, "Not authenticated")
  end
end

# After: flattened with guards
def handle_request(request)
  return respond_with_error(401, "Not authenticated") unless request.authenticated?
  return respond_with_error(403, "Not authorised") unless request.authorised?
  return respond_with_error(400, "Invalid request") unless request.valid?

  process(request)
end
```

### Conditional Assignment

```ruby
# ||= for default values
name = nil
name ||= "Anonymous"
puts name  # => "Anonymous"

# Only assigns if variable is nil or false
config = {}
config[:timeout] ||= 30
config[:timeout] ||= 60  # still 30

# &&= for conditional update
debug = true
debug &&= false  # debug => false
debug &&= false  # debug is still false, no change

# Ternary for computed defaults
timeout = ENV.fetch("TIMEOUT", 30).to_i
mode = ENV.key?("DEBUG") ? :debug : :production
```
