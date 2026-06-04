---
title: Metaprogramming
description:
  'Ruby metaprogramming with open classes, method_missing, define_method, eval, binding, send,
  class_eval, instance_eval, refinements, method aliases, and method introspection.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Ruby
categories:
  - Ruby
slug: ruby-metaprogramming
---

## What Is Metaprogramming?

Metaprogramming is writing code that writes, modifies, or inspects code at runtime. Ruby is
exceptionally well-suited for metaprogramming because:

- Classes and modules are open -- they can be modified at any time
- Methods can be defined, removed, and aliased dynamically
- Every operation (including method calls and class definitions) is expressed as a message send
- Ruby's reflective API provides deep introspection capabilities
- Blocks, procs, and lambdas are first-class objects

## Open Classes

Ruby classes are never closed. You can reopen and modify any class, including built-in ones:

```ruby
# Reopening a class
class String
  def palindrome?
    self == reverse
  end

  def shout
    upcase + "!"
  end
end

"racecar".palindrome?  # => true
"hello".shout          # => "HELLO!"

# Monkey patching built-in classes
class Integer
  def even?
    self % 2 == 0
  end

  def odd?
    !even?
  end

  def hours
    self * 3600
  end

  def days
    self * 24 * 3600
  end
end

2.even?    # => true
3.odd?     # => true
5.hours    # => 18000
2.days     # => 172800
```

### Dangers of Monkey Patching

```ruby
# Dangerous: overriding core methods affects everything
class Array
  def each
    puts "Intercepted!"
    super
  end
end

# This affects every use of Array#each in the entire program
[1, 2, 3].each { |n| puts n }

# Safer alternatives: use refinements or inheritance
```

## method_missing

`method_missing` is Ruby's mechanism for handling unknown method calls:

```ruby
class DynamicProxy
  def initialize(target)
    @target = target
  end

  def method_missing(name, *args, &block)
    if @target.respond_to?(name)
      @target.send(name, *args, &block)
    else
      super
    end
  end

  def respond_to_missing?(name, include_private = false)
    @target.respond_to?(name) || super
  end
end

# Delegation through method_missing
class Logger
  def initialize(target)
    @target = target
    @log = []
  end

  def method_missing(name, *args, &block)
    @log << { method: name, args: args, time: Time.now }
    @target.send(name, *args, &block)
  end

  def respond_to_missing?(name, include_private = false)
    @target.respond_to?(name) || super
  end

  def show_log
    @log.each { |entry| puts "#{entry[:time]}: #{entry[:method]}(#{entry[:args]})" }
  end
end

array = [1, 2, 3]
logged = Logger.new(array)
logged.push(4)
logged.length
logged.show_log
```

### Dynamic Attribute Access

```ruby
class DynamicObject
  def initialize
    @data = {}
  end

  def method_missing(name, *args, &block)
    method_name = name.to_s

    if method_name.end_with?("=")
      @data[method_name.chomp("=")] = args.first
    elsif method_name.end_with?("?")
      !!@data[method_name.chomp("?")]
    elsif @data.key?(method_name)
      @data[method_name]
    else
      super
    end
  end

  def respond_to_missing?(name, include_private = false)
    method_name = name.to_s
    method_name.end_with?("=") || method_name.end_with?("?") || @data.key?(method_name) || super
  end

  def to_h
    @data.dup
  end
end

obj = DynamicObject.new
obj.name = "Alice"
obj.name       # => "Alice"
obj.name?       # => true
obj.age?        # => false
```

## define_method

`define_method` creates methods dynamically at runtime:

```ruby
class Person
  define_method(:name) { @name }
  define_method(:name=) { |value| @name = value }
  define_method(:greet) { |greeting = "Hello"| "#{greeting}, #{@name}" }
end

p = Person.new
p.name = "Alice"
p.greet     # => "Hello, Alice"
p.greet("Hi")  # => "Hi, Alice"

# Batch method definition
class Invoice
  FIELDS = [:amount, :date, :customer, :paid]

  FIELDS.each do |field|
    attr_accessor field

    define_method("#{field}_changed?") do
      instance_variable_get("@#{field}_was") != send(field)
    end
  end

  def save_changes
    FIELDS.each do |field|
      instance_variable_set("@#{field}_was", send(field))
    end
  end
end

# Dynamic method generation from a hash
class Config
  def self.from_hash(hash)
    klass = Class.new(self) do
      hash.each do |key, default|
        define_method(key) do
          instance_variable_get("@#{key}") || default
        end
        define_method("#{key}=") do |value|
          instance_variable_set("@#{key}", value)
        end
      end
    end
    klass
  end
end

MyConfig = Config.from_hash(timeout: 30, retries: 3, host: "localhost")
conf = MyConfig.new
conf.timeout  # => 30
conf.host = "example.com"
conf.host     # => "example.com"
```

## eval and Binding

### eval

`eval` executes a string as Ruby code:

```ruby
# Basic eval
result = eval("2 + 3")  # => 5

# Eval with binding
x = 10
eval("x + 5")  # => 15

# Eval with different binding
class A
  def initialize
    @value = 42
  end
end

a = A.new
eval("@value", a.instance_eval { binding })
# => 42

# DANGERS of eval
user_input = gets.chomp
eval(user_input)  # SECURITY RISK: arbitrary code execution!

# Safer alternatives
# Use send, public_send, define_method instead of eval
```

### Binding Objects

A `Binding` object captures the entire execution context at a point in time:

```ruby
def create_multiplier(factor)
  binding
end

b = create_multiplier(5)
eval("factor * 10", b)  # => 50

# Practical use: capturing context for later evaluation
class Template
  def initialize(source)
    @source = source
  end

  def render(context)
    context.instance_eval(@source)
  end
end

class ViewContext
  attr_accessor :title, :items

  def initialize
    @title = "Default"
    @items = []
  end

  def render_partial(name)
    "<partial:#{name}>"
  end
end

ctx = ViewContext.new
ctx.title = "My Page"
ctx.items = [1, 2, 3]

template = Template.new('"<h1>#{title}</h1><p>Items: #{items.size}</p>"')
puts template.render(ctx)
# => "<h1>My Page</h1><p>Items: 3</p>"
```

### TOPLEVEL_BINDING

```ruby
# TOPLEVEL_BINDING captures the top-level context
x = 100

Thread.new do
  eval("x", TOPLEVEL_BINDING)  # => 100
end.join
```

## send and public_send

`send` calls a method by name (as a symbol or string):

```ruby
class User
  attr_accessor :name, :email

  def greet
    "Hello, I'm #{@name}"
  end

  private

  def secret_key
    "abc123"
  end
end

user = User.new
user.name = "Alice"

# send calls any method, including private ones
user.send(:name)        # => "Alice"
user.send(:secret_key)  # => "abc123"

# public_send only calls public methods
user.public_send(:name)        # => "Alice"
user.public_send(:secret_key)  # => NoMethodError (private method)

# Dynamic method dispatch
method_name = :greet
user.send(method_name)  # => "Hello, I'm Alice"

# Dynamic dispatch with arguments
users.each do |u|
  method_to_call = u.admin? ? :admin_greeting : :standard_greeting
  u.send(method_to_call)
end

# Mass assignment pattern
attributes = { name: "Bob", email: "bob@example.com" }
attributes.each do |key, value|
  user.send("#{key}=", value)
end

# send with a block
array = [3, 1, 4, 1, 5]
array.send(:sort_by) { |n| -n }  # => [5, 4, 3, 1, 1]
```

### **send** (safe alternative)

`__send__` is the safe version of `send` that cannot be overridden:

```ruby
# If someone overrides send
class Deceptive
  def send(method, *args)
    puts "Intercepted!"
  end
end

Deceptive.new.send(:to_s)  # => "Intercepted!"
Deceptive.new.__send__(:to_s)  # => safe, calls actual method
```

## respond_to?

Check whether an object responds to a method before calling it:

```ruby
obj = "hello"

obj.respond_to?(:length)    # => true
obj.respond_to?(:nonexistent)  # => false
obj.respond_to?(:send)     # => true (inherited from Object)

# Check if method is public
obj.respond_to?(:send, true)  # => false (send is private-ish)

# Duck typing with respond_to?
def process(data)
  if data.respond_to?(:each)
    data.each { |item| puts item }
  elsif data.respond_to?(:to_s)
    puts data.to_s
  else
    raise "Cannot process #{data.inspect}"
  end
end

process([1, 2, 3])       # prints 1, 2, 3
process("hello")          # prints "hello"
process(42)                # raises error
```

## class_eval and instance_eval

### class_eval (Module#class_eval)

Evaluates a block in the context of a class, defining class-level methods and constants:

```ruby
class Person
  attr_reader :name
end

Person.class_eval do
  def greet
    "Hello, #{@name}"
  end

  def self.create(name)
    new(name)
  end
end

Person.create("Alice").greet  # => "Hello, Alice"

# Dynamic class modification
class_name = "Product"
fields = [:name, :price, :stock]

klass = Class.new do
  fields.each do |field|
    attr_accessor field
  end
end

Object.const_set(class_name, klass)

product = Product.new
product.name = "Widget"
product.price = 9.99
```

### instance_eval (Object#instance_eval)

Evaluates a block in the context of an instance, accessing private state:

```ruby
class Secret
  def initialize
    @value = 42
  end

  private

  def internal_method
    @value * 2
  end
end

s = Secret.new

# instance_eval gives access to private methods and instance variables
s.instance_eval do
  @value             # => 42
  internal_method    # => 84
end

# instance_eval for singleton method definition
obj = "hello"
obj.instance_eval do
  def shout
    upcase + "!!!"
  end
end

obj.shout  # => "HELLO!!!"

# instance_eval on a class defines singleton methods (= class methods)
Person = Class.new do
  instance_eval do
    define_method(:new_method) do
      "instance method"
    end
  end
end
```

## Method Aliases

### alias and alias_method

```ruby
# alias (keyword) -- creates a method alias at class definition time
class String
  alias :sentence_case :capitalize
  alias :word_count :length
end

"hello".sentence_case  # => "Hello"
"hello".word_count     # => 5

# alias_method -- can be called at any time
class Array
  alias_method :second, :at
end

[10, 20, 30].second(1)  # => 20

# Chaining with super via alias_method
class Greeting
  def hello
    "Hello"
  end

  def hello_with_name(name)
    "#{hello}, #{name}!"
  end
end

# Wrap original method
class Greeting
  alias_method :hello_original, :hello

  def hello
    "#{hello_original} (enhanced)"
  end
end

Greeting.new.hello  # => "Hello (enhanced)"
```

### Method Wrapping Pattern

```ruby
module MethodWrapper
  def wrap_method(method_name)
    original = instance_method(method_name)
    define_method(method_name) do |*args, &block|
      puts "Before: #{method_name}"
      result = original.bind(self).call(*args, &block)
      puts "After: #{method_name}"
      result
    end
  end
end

class Calculator
  include MethodWrapper

  def add(a, b)
    a + b
  end

  wrap_method :add
end

Calculator.new.add(2, 3)
# => "Before: add"
# => "After: add"
# => 5
```

## Method Introspection

Ruby provides extensive facilities for examining methods at runtime:

```ruby
class Example
  def public_method; end
  protected :protected_method
  private :private_method

  def self.class_method; end
end

# Instance methods
Example.instance_methods(false)
# => [:public_method]

Example.public_instance_methods(false)
# => [:public_method]

Example.protected_instance_methods(false)
# => [:protected_method]

Example.private_instance_methods(false)
# => [:private_method]

# Class methods (singleton methods)
Example.singleton_methods
# => [:class_method]

# Method objects
m = Example.instance_method(:public_method)
m.name                  # => :public_method
m.arity                 # => 0
m.owner                 # => Example
m.parameters            # => []

# Object method lookup
obj = Example.new
obj.method(:public_method)     # => Method object
obj.public_method(:public_method)  # => same
obj.public_send(:public_method)

# Defined methods
Example.method_defined?(:public_method)    # => true
Example.public_method_defined?(:public_method)  # => true
Example.private_method_defined?(:private_method)  # => true

# respond_to?
obj.respond_to?(:public_method)   # => true
obj.respond_to?(:private_method)  # => false (without include_all)
obj.respond_to?(:private_method, true)  # => true (includes private)

# Method source location (MRI only)
Example.instance_method(:public_method).source_location
# => ["/path/to/file.rb", line_number]

# Methods from ancestors
Example.ancestors
# => [Example, Object, Kernel, BasicObject]

# is_a? and kind_of?
obj.is_a?(Example)    # => true
obj.is_a?(Object)    # => true
obj.kind_of?(Example) # => true
```

## Removing and Undefining Methods

```ruby
class Example
  def method_a; puts "A"; end
  def method_b; puts "B"; end
end

# remove_method: removes the method from this class only
# Parent class method is still accessible
class Example
  remove_method :method_a
end

# undef_method: prevents any call to this method (even from superclasses)
class Example
  undef_method :method_b
end

# Practical: prevent certain methods
class SensitiveData
  undef_method :inspect, :to_s

  def initialize(data)
    @data = data
  end
end
```

## Refinements

Refinements provide scoped monkey patching -- modifications are only visible within a specific
scope:

```ruby
# Define a refinement
module StringExtensions
  refine String do
    def pluralize
      self + "s"
    end

    def sentence_case
      capitalize
    end
  end
end

# Without using, the refinement is not active
"cat".pluralize  # => NoMethodError

# Using the refinement in a specific scope
class Report
  using StringExtensions

  def generate(title)
    title.pluralize  # works here
    title.sentence_case  # works here
  end
end

# Outside the using scope
"cat".pluralize  # => NoMethodError (still not available)

# Refinements are lexical
module DataProcessor
  using StringExtensions

  def self.process(word)
    word.pluralize  # works
  end

  def self.another_module
    # using is active here (nested in DataProcessor)
    "dog".pluralize  # works
  end
end

class OutsideClass
  # using is NOT active here
  def process
    "cat".pluralize  # NoMethodError
  end
end

# Refinements with multiple modules
module IntegerPatches
  refine Integer do
    def weeks
      self * 7
    end

    def ago
      Time.now - self * 86400
    end
  end
end

class TimeTracker
  using IntegerPatches

  def self.report
    puts "#{3.weeks} days is #{3.weeks.ago}"
  end
end
```

## Class-Level Metaprogramming

### const_missing

```ruby
module Config
  def self.const_missing(name)
    path = "config/#{name.to_s.downcase}.yml"
    if File.exist?(path)
      data = YAML.safe_load(File.read(path))
      const_set(name, data)
    else
      super
    end
  end
end

# First access loads the constant
Config.database  # loads config/database.yml and caches it
Config.database  # returns cached value
```

### const_set and const_get

```ruby
class Version
  MAJOR = 1
  MINOR = 2
  PATCH = 3
end

Version.const_get(:MAJOR)  # => 1
Version.const_set(:FULL, "1.2.3")

# Dynamic constant definition
module Registry
  def self.register(name, klass)
    const_set(name, klass)
  end
end

class MyService; end
Registry.register(:Service, MyService)
Registry::Service  # => MyService

# List constants
Version.constants      # => [:MAJOR, :MINOR, :PATCH, :FULL]
Version.constants(false)  # => own constants only
```

## Freezing Classes

```ruby
# Freeze a class to prevent further modifications
class Immutable
  def method_a; end
end

Immutable.freeze

class Immutable
  def method_b; end
end  # => FrozenError: can't modify frozen class

# Practical use: freeze classes after boot
# Rails uses this pattern in production
if Rails.env.production?
  ApplicationRecord.descendants.each(&:freeze)
end
```

## Practical Metaprogramming Patterns

### DSL Construction

```ruby
class RouteSet
  def initialize
    @routes = []
  end

  def get(path, to:)
    @routes << { method: :GET, path: path, handler: to }
  end

  def post(path, to:)
    @routes << { method: :POST, path: path, handler: to }
  end

  def match(method, path)
    route = @routes.find { |r| r[:path] == path && r[:method] == method }
    route&.dig(:handler)
  end

  def routes
    @routes.dup
  end
end

# Using the DSL
router = RouteSet.new
router.get("/users", to: UsersController.action(:index))
router.get("/users/:id", to: UsersController.action(:show))
router.post("/users", to: UsersController.action(:create))

# Builder pattern
class HTML
  def initialize
    @content = ""
  end

  def tag(name, **attrs, &block)
    @content << "<#{name}"
    attrs.each { |k, v| @content << " #{k}=\"#{v}\"" }
    @content << ">"
    @content << block.call if block_given?
    @content << "</#{name}>"
    self
  end

  def text(str)
    @content << str
    self
  end

  def to_s
    @content
  end
end

HTML.new.tag(:div, class: "main") do
  HTML.new.tag(:h1) { "Title" }.to_s
end.to_s
```

### Delegation

```ruby
# Forwardable module for clean delegation
require 'forwardable'

class Employee
  extend Forwardable

  def initialize
    @contact_info = ContactInfo.new
    @work_info = WorkInfo.new
  end

  def_delegators :@contact_info, :email, :phone, :address
  def_delegator :@work_info, :title, :job_title
  def_delegators :@work_info, :department, :salary
end

class ContactInfo
  attr_accessor :email, :phone, :address
  def initialize
    @email = "a@b.com"
    @phone = "555-1234"
  end
end

class WorkInfo
  attr_accessor :title, :department, :salary
  def initialize
    @title = "Engineer"
  end
end

emp = Employee.new
emp.email   # => "a@b.com"
emp.job_title  # => "Engineer"
```
