---
title: Object-Oriented Programming
description:
  'Ruby classes, modules, inheritance, super, mixins, include/extend/prepend, access control,
  attr_accessor, class methods, class variables, Comparable, and Enumerable.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Ruby
categories:
  - Ruby
slug: ruby-oop
---

## Classes

### Class Definition

```ruby
# Basic class
class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def name
    @name
  end

  def age
    @age
  end

  def greet
    "Hello, I'm #{@name}, age #{@age}"
  end
end

alice = Person.new("Alice", 30)
puts alice.greet  # => "Hello, I'm Alice, age 30"

# Classes are first-class objects
Person.class        # => Class
Person.superclass    # => Object
Person.ancestors      # => [Person, Object, Kernel, BasicObject]

# Class names are constants
Person = Class.new do
  def initialize(name)
    @name = name
  end

  def to_s
    @name
  end
end
```

### attr_accessor, attr_reader, attr_writer

```ruby
class Book
  # attr_reader: generates getter methods
  attr_reader :title, :author

  # attr_writer: generates setter methods
  attr_writer :price

  # attr_accessor: generates both getter and setter
  attr_accessor :isbn, :published_year

  def initialize(title, author, price)
    @title = title
    @author = author
    @price = price
    @isbn = nil
    @published_year = nil
  end

  # Custom getter with computation
  def price_with_tax(rate = 0.1)
    @price * (1 + rate)
  end

  # Custom setter with validation
  def price=(new_price)
    raise ArgumentError, "Price must be positive" unless new_price > 0
    @price = new_price
  end
end

book = Book.new("Ruby Guide", "Matz", 39.99)
book.title         # => "Ruby Guide"
book.price = 49.99  # calls the custom setter
book.isbn = "978-123" # generated setter
```

### initialize and new

```ruby
class Point
  def initialize(x = 0, y = 0)
    @x = x
    @y = y
  end
end

Point.new(3, 4)  # creates a new Point instance

# initialize is a private method
Point.instance_method(:initialize).name  # => :initialize

# allocate creates an instance without calling initialize
raw = Point.allocate
raw.instance_variables  # => [] (no @x, @y set)

# Overriding new for custom object creation
class Singleton
  @@instance = nil

  def self.new(*args, &block)
    raise "Use Singleton.instance" if @@instance
    super
  end

  def self.instance
    @@instance ||= new
  end

  private_class_method :new
end
```

## Inheritance

```ruby
# Base class
class Animal
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def speak
    "#{name} makes a sound"
  end

  def to_s
    "#{name} (#{self.class})"
  end
end

# Subclass with super
class Dog < Animal
  attr_accessor :breed

  def initialize(name, age, breed)
    super(name, age)  # calls Animal#initialize
    @breed = breed
  end

  def speak
    "#{name} barks!"   # overrides Animal#speak
  end

  # Call parent method with super
  def info
    "#{super} -- #{breed}"
  end
end

class Cat < Animal
  def speak
    "#{name} meows!"
  end
end

rex = Dog.new("Rex", 5, "Labrador")
puts rex.speak     # => "Rex barks!"
puts rex.info      # => "Rex (Dog) -- Labrador"

# super behaviour
class Base
  def greet
    "Hello"
  end
end

class Child < Base
  def greet
    super + " from Child"   # passes args to parent
    super()                  # calls parent with no args
  end
end

# Method resolution order (MRO)
class A; end
class B < A; end
class C < A; end
class D < B; end

D.ancestors  # => [D, B, A, Object, Kernel, BasicObject]
```

## Modules

Modules serve two purposes: namespaces and mixins.

### Modules as Namespaces

```ruby
module MathEngine
  PI = 3.141592653589793

  def self.circle_area(radius)
    PI * radius ** 2
  end

  def self.circle_circumference(radius)
    2 * PI * radius
  end

  class Vector2D
    def initialize(x, y)
      @x = x
      @y = y
    end

    def magnitude
      Math.sqrt(@x ** 2 + @y ** 2)
    end
  end
end

MathEngine.circle_area(5)       # => 78.5398...
MathEngine::PI                  # => 3.14159...
v = MathEngine::Vector2D.new(3, 4)
v.magnitude                    # => 5.0
```

### Modules as Mixins (include / extend / prepend)

```ruby
# A module with instance methods
module Validation
  def validate!
    raise "Invalid state" unless valid?
  end

  def valid?
    true
  end
end

# include: adds instance methods
class User
  include Validation

  def initialize(name, email)
    @name = name
    @email = email
  end

  def valid?
    !@name.nil? && !@email.nil? && @email.include?("@")
  end
end

user = User.new("Alice", "alice@example.com")
user.valid?     # => true
user.validate!   # no error

# extend: adds methods as singleton methods (class-level on instance)
class Config
  extend Validation
end

Config.valid?    # => true
Config.validate!  # no error

# prepend: adds methods before the class in the lookup chain
module Logging
  def save
    puts "Before save: #{self.inspect}"
    super
    puts "After save: #{self.inspect}"
  end
end

class Document
  prepend Logging

  def save
    puts "Saving document"
  end
end

doc = Document.new
doc.save
# => "Before save: #<Document:...>"
# => "Saving document"
# => "After save: #<Document:...>"
```

### include vs extend vs prepend

```ruby
module A
  def hello
    "A#hello"
  end
end

module B
  def hello
    "B#hello"
  end
end

class Example
  include A
  include B
end

Example.ancestors
# => [Example, B, A, Object, Kernel, BasicObject]

# include adds to ancestors chain (last included appears first in lookup)
Example.new.hello  # => "B#hello"

class Example2
  include A
  prepend B
end

Example2.ancestors
# => [B, Example2, A, Object, Kernel, BasicObject]

Example2.new.hello  # => "B#hello"

# Class-level extend vs include
class Klass
  include M  # instance methods from M
end
class Klass
  extend M   # class methods from M
end

# module_function: methods become both instance and module methods
module Utilities
  def factorial(n)
    n <= 1 ? 1 : n * factorial(n - 1)
  end
  module_function :factorial

  # module_function without argument affects all subsequent methods
  module_function

  def fibonacci(n)
    return n if n <= 1
    fibonacci(n - 1) + fibonacci(n - 2)
  end
end

Utilities.factorial(5)       # => 120
Utilities.fibonacci(10)     # => 55

# Included in a class
class Calculator
  include Utilities
end

calc = Calculator.new
calc.factorial(5)   # => 120 (available as instance method)
```

## Class Methods (self.)

```ruby
class User
  @@count = 0

  def initialize(name)
    @name = name
    @@count += 1
  end

  # Class method with self.
  def self.count
    @@count
  end

  def self.find_by_name(name)
    # Database lookup simulation
    all_users.find { |u| u.name == name }
  end

  def self.all_users
    @users ||= []
  end

  # Alternative syntax: class << self block
  class << self
    def search(query)
      all_users.select { |u| u.name.include?(query) }
    end

    def reset!
      @users = []
    end
  end
end

User.count        # => 0
alice = User.new("Alice")
User.count        # => 1

# Class methods are singleton methods on the class object
User.singleton_methods  # => [:count, :find_by_name, :all_users, :search, :reset!]
```

## Class Variables vs Instance Variables

```ruby
class Parent
  @@family = "shared"

  def self.family
    @@family
  end
end

class Child < Parent
  @@family = "overridden"
end

Parent.family   # => "overridden" -- class variables are shared across hierarchy!

# Safer alternative: class instance variables
class SafeParent
  @family = "parent default"

  class << self
    attr_accessor :family
  end
end

class SafeChild < SafeParent
  @family = "child default"
end

SafeParent.family  # => "parent default"
SafeChild.family   # => "child default" -- not shared!

# Instance variables belong to a specific instance
class Counter
  def initialize
    @count = 0
  end

  def increment
    @count += 1
  end

  def count
    @count
  end
end

c1 = Counter.new
c2 = Counter.new
c1.increment
c1.increment
c2.increment
c1.count  # => 2
c2.count  # => 1  (independent instances)
```

## Access Control

```ruby
class BankAccount
  attr_reader :balance

  def initialize(owner, initial_balance = 0)
    @owner = owner
    @balance = initial_balance
    @transactions = []
  end

  # Public by default
  def deposit(amount)
    raise ArgumentError, "Amount must be positive" unless amount > 0
    @balance += amount
    record_transaction(:deposit, amount)
  end

  def withdraw(amount)
    raise ArgumentError, "Amount must be positive" unless amount > 0
    raise ArgumentError, "Insufficient funds" if amount > @balance
    @balance -= amount
    record_transaction(:withdrawal, amount)
  end

  # Protected: accessible to instances of the same class and subclasses
  protected

  def record_transaction(type, amount)
    @transactions << { type: type, amount: amount, balance: @balance }
  end

  # Private: only accessible within the instance (no explicit receiver)
  private

  def validate_amount(amount)
    amount > 0 && amount <= @balance
  end
end

class SavingsAccount < BankAccount
  def transfer(other_account, amount)
    withdraw(amount)
    other_account.deposit(amount)
  end

  def compare_balance(other)
    # Protected methods can be called on other instances of the same class
    if @balance > other.balance
      "Higher balance"
    else
      "Lower or equal balance"
    end
  end
end

# Private methods cannot have an explicit receiver
# account.validate_amount(100)  # => NoMethodError (private)
# self.validate_amount(100)    # => NoMethodError (private)
# validate_amount(100)          # => works (implicit self)
```

### Access Control Keywords

```ruby
class Example
  def public_method; end       # public

  protected
  def protected_method; end   # protected

  private
  def private_method; end     # private

  public
  def another_public; end     # back to public
end

# Per-method visibility
class Example2
  def method_a; end
  def method_b; end

  private :method_b

  def method_c; end
end
```

## Comparable Module

Including `Comparable` and implementing `<=>` gives you access to comparison operators:

```ruby
class Version
  include Comparable

  attr_reader :major, :minor, :patch

  def initialize(major, minor = 0, patch = 0)
    @major = major
    @minor = minor
    @patch = patch
  end

  def <=>(other)
    comparison = @major <=> other.major
    return comparison unless comparison.zero?

    comparison = @minor <=> other.minor
    return comparison unless comparison.zero?

    @patch <=> other.patch
  end

  def to_s
    "#{major}.#{minor}.#{patch}"
  end

  def hash
    [major, minor, patch].hash
  end

  def eql?(other)
    self == other
  end
end

v1 = Version.new(1, 2, 3)
v2 = Version.new(1, 2, 10)
v3 = Version.new(2, 0, 0)

v1 < v2       # => true
v1 == v2      # => false
v2 < v3       # => true
v1 <=> v2     # => -1
v1.between?(v2, v3)  # => true (from Comparable)
[v2, v1, v3].sort.map(&:to_s)  # => ["1.2.3", "1.2.10", "2.0.0"]
```

## Enumerable Module

Including `Enumerable` and implementing `each` provides dozens of iteration methods:

```ruby
class WordList
  include Enumerable

  def initialize
    @words = []
  end

  def add(word)
    @words << word.downcase
    self
  end

  def each
    return enum_for(__method__) unless block_given?
    @words.each { |word| yield word }
  end

  def size
    @words.size
  end
end

wl = WordList.new
wl.add("Ruby").add("Python").add("JavaScript").add("Ruby")

# All Enumerable methods available
wl.map(&:upcase)           # => ["RUBY", "PYTHON", "JAVASCRIPT", "RUBY"]
wl.select { |w| w.length > 4 }  # => ["python", "javascript"]
wl.reject { |w| w.start_with?("r") }  # => ["python", "javascript"]
wl.count                   # => 4
wl.uniq                    # => ["ruby", "python", "javascript"]
wl.sort                    # => ["javascript", "python", "ruby"]
wl.any? { |w| w.length > 10 }  # => false
wl.all? { |w| w.length > 2 }   # => true
wl.find { |w| w == "ruby" }   # => "ruby"
wl.group_by { |w| w.length }  # => {4=>["ruby"], 6=>["python"], 10=>["javascript"]}
wl.reduce(:+)               # => "rubypythonjavascriptruby"
wl.min                      # => "javascript"
wl.max                      # => "ruby"
wl.minmax                   # => ["javascript", "ruby"]
wl.first(2)                 # => ["ruby", "python"]
wl.member?("python")       # => true

# Custom collection with lazy support
class FibonacciSequence
  include Enumerable

  def initialize(limit)
    @limit = limit
  end

  def each
    a, b = 0, 1
    @limit.times do
      yield a
      a, b = b, a + b
    end
  end
end

seq = FibonacciSequence.new(10)
seq.to_a  # => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
seq.select(&:even?)  # => [0, 2, 8, 34]
seq.sum              # => 88
```

## Practical Patterns

### Composition over Inheritance

```ruby
class Engine
  def initialize(horsepower)
    @horsepower = horsepower
  end

  def start
    puts "Engine started (#{@horsepower} HP)"
  end

  def stop
    puts "Engine stopped"
  end
end

class GPS
  def navigate(destination)
    puts "Navigating to #{destination}"
  end
end

class Car
  def initialize(horsepower)
    @engine = Engine.new(horsepower)
    @gps = GPS.new
  end

  def start
    @engine.start
  end

  def navigate(destination)
    @gps.navigate(destination)
  end
end

car = Car.new(200)
car.start
car.navigate("London")
```

### Singleton Pattern

```ruby
require 'singleton'

class DatabaseConnection
  include Singleton

  def connect
    @connected = true
    puts "Connected to database"
  end

  def query(sql)
    raise "Not connected" unless @connected
    puts "Executing: #{sql}"
  end

  private

  def initialize
    @connected = false
  end
end

db = DatabaseConnection.instance
db.connect
db.query("SELECT * FROM users")
```

### Observer Pattern

```ruby
module Observable
  def initialize
    @observers = []
  end

  def add_observer(observer)
    @observers << observer
  end

  def remove_observer(observer)
    @observers.delete(observer)
  end

  def notify_observers(*args)
    @observers.each { |observer| observer.update(*args) }
  end
end

class EventPublisher
  include Observable

  def publish(event)
    puts "Publishing: #{event}"
    notify_observers(event)
  end
end

class Logger
  def update(event)
    puts "[LOG] #{event}"
  end
end

class Metrics
  def update(event)
    puts "[METRICS] event recorded"
  end
end

publisher = EventPublisher.new
publisher.add_observer(Logger.new)
publisher.add_observer(Metrics.new)
publisher.publish("user_signed_up")
```

### Struct and OpenStruct

```ruby
# Struct: lightweight class creation
Person = Struct.new(:name, :email, :age) do
  def adult?
    age >= 18
  end
end

p = Person.new("Alice", "a@b.com", 30)
p.name      # => "Alice"
p.adult?    # => true
p[:email]   # => "a@b.com"
p.to_a      # => ["Alice", "a@b.com", 30]
p.to_h      # => {name: "Alice", email: "a@b.com", age: 30}

# Struct with keyword_init (Ruby 2.5+)
Person = Struct.new(:name, :email, :age, keyword_init: true)
p = Person.new(name: "Bob", age: 25)
p.name  # => "Bob"

# OpenStruct: flexible hash-like object
require 'ostruct'

config = OpenStruct.new(host: "localhost", port: 8080)
config.host         # => "localhost"
config.port         # => 8080
config.timeout = 30  # dynamically add fields
config.timeout      # => 30
```

### Data Class (Ruby 3.2+)

```ruby
# Data: immutable value objects
class Point < Data
  params :x, :y
end

p = Point.new(3, 4)
p.x     # => 3
p.y     # => 4
p.frozen?  # => true
p == Point.new(3, 4)  # => true (value equality)
```

## Method Lookup Chain

```ruby
module M1
  def greet; puts "M1#greet"; end
end

module M2
  def greet; puts "M2#greet"; end
end

class Base
  def greet; puts "Base#greet"; super; end
end

class Child < Base
  include M1
  include M2
  def greet; puts "Child#greet"; super; end
end

Child.ancestors
# => [Child, M2, M1, Base, Object, Kernel, BasicObject]

Child.new.greet
# => "Child#greet"
# => "M2#greet"
# => "M1#greet"
# => "Base#greet"
# (Base calls super, goes to Object, then Kernel, no more greet methods)
```
