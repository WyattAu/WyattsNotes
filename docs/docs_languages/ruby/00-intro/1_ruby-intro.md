---
title: Introduction to Ruby
description:
  'Ruby introduction covering language history, the Principle of Least Astonishment, ecosystem
  overview, environment setup with rbenv and RVM, IRB, RubyGems, and Bundler.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Ruby
categories:
  - Ruby
slug: ruby-intro
---

## What Is Ruby?

Ruby is a **dynamic, open-source programming language** with a focus on simplicity and productivity.
It has an elegant syntax that is natural to read and easy to write. Ruby was created by Yukihiro
Matsumoto ("Matz") in Japan in 1995 and has since grown into one of the most popular programming
languages in the world, powering frameworks like Ruby on Rails, Sinatra, and a vast ecosystem of
gems.

Ruby is a **pure object-oriented language** -- everything is an object, including numbers, booleans,
and even `nil`. This consistent object model makes the language cohesive and predictable. Ruby
blends ideas from Perl, Smalltalk, Eiffel, Ada, and Lisp to create a language that feels natural and
expressive.

Key characteristics of Ruby:

- **Interpreted**: Ruby code is executed by the Ruby interpreter (MRI, YJIT, JRuby, TruffleRuby)
- **Dynamically typed**: Variable types are determined at runtime
- **Garbage collected**: Automatic memory management via mark-and-sweep GC
- **Multi-paradigm**: Supports object-oriented, functional, and procedural styles
- **Reflective**: Programs can examine and modify their own structure at runtime

## History and Evolution

### Ruby 1.0 (1996)

- First public release by Yukihiro Matsumoto
- Featured a Perl-like syntax with Smalltalk-like object model
- Included basic features: classes, modules, iterators, closures, exceptions, garbage collection
- Built-in regular expression support inspired by Perl
- Early adoption in Japan through community mailing lists

### Ruby 1.8 Series (2003--2013)

- Became the dominant Ruby version for nearly a decade
- Ruby on Rails launched in 2004, driving massive global adoption
- Introduction of `yield` blocks as first-class language constructs
- String handling improved with multibyte character support
- Performance limitations became apparent as Rails applications scaled

### Ruby 1.9 Series (2007--2013)

- **YARV (Yet Another Ruby VM)** replaced the old interpreter, providing significant performance
  gains
- Encoding-aware strings with `Encoding` class -- strings are no longer just byte sequences
- New hash literal syntax: `{ key: "value" }` (symbol keys)
- New lambda syntax: `-> (x) { x * 2 }`
- Block local variables introduced
- Fibers added for lightweight cooperative concurrency
- `BasicObject` introduced as the root of the class hierarchy

### Ruby 2.0 (2013)

- **Keyword arguments** with explicit syntax
- `Refinements` introduced (later refined in 2.1+)
- `Module#prepend` added for more flexible method overriding
- `Lazy` enumerators for chained lazy evaluation
- `__dir__` method returning the directory of the current file
- `to_h` convention for converting objects to hashes

### Ruby 2.1--2.7 (2014--2020)

- **Rationalised numeric literal syntax**: `1/2r`, `0.5r`
- Required keyword arguments and keyword argument separation (2.7)
- Frozen string literals pragma: `# frozen_string_literal: true`
- `Enumerable#compact`, `Array#select!`, `Hash#transform_keys`
- Pattern matching introduced experimentally in 2.7
- `begin/end` blocks can omit `begin` in method bodies
- Numbered parameters: `_1`, `_2`, `_3` (2.7)

### Ruby 3.0 (2020)

- **Ractor** for true parallel execution without global interpreter lock concerns
- **Fiber Scheduler** for non-blocking I/O without changing code structure
- Pattern matching (`in` and `case/in`) became stable
- One-line pattern matching with `=>`
- Rightward assignment: `expression => variable`
- `Hash#except` added
- Find pattern in pattern matching

### Ruby 3.1--3.3 (2021--2024)

- **YJIT (Yet Another JIT)** production-ready in 3.2, delivering 2--3x performance improvements
- `Regexp` new syntax: `/.../` with `o` option
- `Hash#shift` performance improvements
- `Data` class for immutable value objects (3.2)
- Prism parser replacing the old Bison-based parser (3.3)
- IRB with syntax highlighting and autocompletion by default
- Improved error messages with suggestions
- `Fiber#scheduler` refinements and `Async` gem ecosystem growth

### Ruby 3.4 (2024)

- Prism parser replaces the legacy parse.y as default
- Improved YJIT performance and warmup time
- `it` parameter for blocks (experimental)
- Better error handling and deprecation warnings
- `ReferenceError` instead of `NameError` for certain binding issues

## Ruby's Philosophy: The Principle of Least Astonishment

The **Principle of Least Astonishment (POLA)**, sometimes called the **Principle of Least
Surprise**, is the guiding philosophy behind Ruby's design. Matz designed Ruby so that the language
should behave in ways that minimise surprise for experienced programmers. When you think you know
how something works in Ruby, it likely works exactly that way.

This principle manifests in several ways:

```ruby
# Everything is an object
5.class        # => Integer
5.methods.sort  # => Array of methods available on 5
nil.class       # => NilClass
true.class      # => TrueClass

# Consistent method naming conventions
"hello".length           # => 5
[1, 2, 3].length         # => 3
{ a: 1, b: 2 }.length    # => 2

# Blocks are natural closures
[1, 2, 3].map { |n| n * 2 }   # => [2, 4, 6]
[1, 2, 3].select { |n| n > 1 } # => [2, 3]

# nil is handled gracefully in conditionals
name = nil
if name
  puts "Has a name"
else
  puts "No name"  # => "No name" -- nil is falsy
end

# Method naming reflects intent clearly
array.sort          # returns new sorted array
array.sort!         # sorts in place and returns self
array.empty?        # predicate methods end with ?
user.save!          # dangerous methods end with !
```

### Design Priorities

1. **Developer happiness**: Matz famously stated, "I hope to see Ruby help every programmer in the
   world to be productive, and to enjoy programming, and to be happy."
2. **Consistency**: Similar things should look similar, different things should look different
3. **Expressiveness**: The language should enable programmers to express intent clearly
4. **Convenience**: Common tasks should be easy, uncommon tasks should be possible

Ruby's design choices reflect these priorities:

```ruby
# Optional parentheses for method calls (improved readability)
puts "Hello, World!"
puts("Hello, World!")

# Return value is the last expression evaluated (no explicit return needed)
def greet(name)
  "Hello, #{name}!"
end

# Multiple return values via array destructuring
def min_max(array)
  [array.min, array.max]
end

min_val, max_val = min_max([3, 1, 4, 1, 5])
# min_val => 1, max_val => 5

# String interpolation is natural
name = "Ruby"
version = 3.3
puts "#{name} #{version} is awesome"
# => "Ruby 3.3 is awesome"
```

## The Ruby Ecosystem

### Ruby on Rails

Ruby on Rails (often just "Rails") is the most prominent Ruby framework. Released in 2004 by David
Heinemeier Hansson, Rails popularised many concepts that are now standard in web development:

- **MVC architecture**: Model-View-Controller separation of concerns
- **Convention over Configuration**: sensible defaults eliminate boilerplate
- **Active Record**: Object-relational mapping with a clean API
- **RESTful routing**: Resource-based URL mapping
- **Generators**: Scaffold controllers, models, migrations, and tests
- **Migration system**: Version-controlled database schema changes

```ruby
# A simple Rails model
class Article < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :author

  validates :title, presence: true, length: { minimum: 5 }
  validates :body, presence: true

  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc).limit(5) }

  def summary
    body.truncate(100)
  end
end
```

### Sinatra

Sinatra is a lightweight web framework for Ruby. Unlike Rails, Sinatra provides minimal
abstractions, making it ideal for small applications, APIs, and microservices:

```ruby
# A minimal Sinatra application
require 'sinatra'

get '/' do
  'Hello, World!'
end

get '/greet/:name' do
  "Hello, #{params['name']}!"
end

post '/items' do
  content_type :json
  request.body.read.to_json
end
```

### Notable Gems

The Ruby ecosystem has over 200,000 gems on RubyGems.org. Some of the most widely used include:

| Gem             | Purpose                                    |
| --------------- | ------------------------------------------ |
| `rails`         | Full-stack web framework                   |
| `sinatra`       | Lightweight web framework                  |
| `rspec`         | Behaviour-driven testing framework         |
| `minitest`      | Built-in testing framework with extensions |
| `active_record` | ORM for relational databases               |
| `sequel`        | Flexible database toolkit                  |
| `sidekiq`       | Background job processing with Redis       |
| `resque`        | Redis-backed job queue                     |
| `devise`        | Authentication solution for Rails          |
| `pundit`        | Authorization library using plain Ruby     |
| `factory_bot`   | Test fixture replacement                   |
| `pry`           | Runtime developer console and debugger     |
| `dotenv`        | Environment variable management            |
| `httparty`      | HTTP client library                        |
| `nokogiri`      | HTML/XML parsing with XPath/CSS selectors  |
| `pg`            | PostgreSQL adapter                         |
| `redis`         | Redis client                               |
| `oj`            | Fast JSON parser and serializer            |
| `rubocop`       | Static code analyser and formatter         |
| `sorbet`        | Static type checker by Stripe              |

### Ruby Implementations

Ruby has multiple implementations, each with different trade-offs:

**MRI (Matz's Ruby Interpreter)**: The reference implementation. Written in C. Includes YARV
bytecode compiler and YJIT since Ruby 3.2. Most gems are tested against MRI first.

**JRuby**: Ruby running on the JVM. Provides access to Java libraries and true parallel threads via
the JVM. Used when Java ecosystem integration is needed.

**TruffleRuby**: Ruby on the GraalVM. Uses the Truffle framework for partial evaluation and the
Graal compiler to produce highly optimised native code. Can achieve performance competitive with MRI
YJIT.

**Artichoke**: A Ruby implementation in Rust. Focused on compatibility with CRuby. Still
experimental.

**Ruby.NET**: Ruby implementation targeting the .NET runtime.

## Environment Setup

### Installing Ruby

There are several approaches to installing Ruby. The most common use version managers.

#### rbenv

`rbenv` is a lightweight Ruby version manager that does not compile Ruby itself:

```bash
# Install rbenv and ruby-build plugin
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

# Add to shell configuration
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc

# Install a Ruby version
rbenv install 3.3.0
rbenv global 3.3.0    # set default version
rbenv local 3.3.0     # set per-project version

# Verify
ruby --version  # => ruby 3.3.0
```

`rbenv` manages Ruby versions using shims -- lightweight executables that intercept `ruby` commands
and delegate to the appropriate version. It does not manage gems; that is Bundler's job.

#### RVM (Ruby Version Manager)

RVM is a more feature-rich alternative that can also manage gemsets:

```bash
# Install RVM
gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable

# Install and use a Ruby version
rvm install 3.3.0
rvm use 3.3.0 --default

# Create and use gemsets
rvm gemset create myproject
rvm use 3.3.0@myproject

# List available versions
rvm list known
```

RVM replaces shell commands with wrapper functions. It is heavier than rbenv but offers gem
isolation without external tools.

#### asdf

`asdf` is a polyglot version manager that handles Ruby, Node.js, Python, and many other runtimes:

```bash
# Install asdf
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0

# Add Ruby plugin
asdf plugin add ruby

# Install Ruby
asdf install ruby 3.3.0
asdf global ruby 3.3.0

# Per-project version file
echo "ruby 3.3.0" > .tool-versions
```

#### System Packages

Ruby can also be installed via system package managers, though version control is limited:

```bash
# macOS
brew install ruby

# Ubuntu/Debian
sudo apt install ruby ruby-dev

# Fedora
sudo dnf install ruby ruby-devel

# Windows (via RubyInstaller)
# Download from https://rubyinstaller.org/
```

### IRB (Interactive Ruby)

IRB is Ruby's interactive REPL (Read-Eval-Print Loop) for experimenting with code:

```bash
# Start IRB
irb

# Start with a specific Ruby version
irb --version
irb -f          # suppress .irbrc loading

# Useful IRB commands
help           # show help
irb_info       # display IRB version info
ls             # list methods (requires 'irb/ext/save-history')
show_source    # show source of a method
```

Starting from Ruby 3.2, IRB includes:

- **Syntax highlighting**: Coloured output by default
- **Autocompletion**: Tab completion with documentation hints
- **Multi-line editing**: Full multi-line code editing support
- **Command history**: Persistent history across sessions

```ruby
# Inside IRB
irb(main):001> "hello".upcase
=> "HELLO"
irb(main):002> [1, 2, 3].reduce(:+)
=> 6
irb(main):003> 5.times { |i| puts i }
0
1
2
3
4
=> 5
```

#### Pry as an Alternative REPL

Pry is a feature-rich alternative to IRB with runtime introspection:

```bash
gem install pry

# Start Pry
pry

# Binding.pry for runtime debugging
def calculate(x, y)
  binding.pry  # execution pauses here
  x + y
end
```

Pry features include source code browsing, documentation lookup, live object inspection with `ls`,
shell command integration, and gist sharing.

### .irbrc Configuration

Customise IRB behaviour with an `.irbrc` file in your home directory:

```ruby
# ~/.irbrc
require 'irb/completion'

# Prompt format
IRB.conf[:PROMPT][:MY_PROMPT] = {
  PROMPT_I: "ruby> ",
  PROMPT_S: "ruby* ",
  PROMPT_C: "ruby? ",
  RETURN: "=> %s\n"
}
IRB.conf[:PROMPT_MODE] = :MY_PROMPT

# Auto-indent
IRB.conf[:AUTO_INDENT] = true

# History settings
IRB.conf[:SAVE_HISTORY] = 1000
IRB.conf[:HISTORY_FILE] = "#{ENV['HOME']}/.irb_history"

# Save history after each command
IRB.conf[:INSPECT_MODE] = false

# Load libraries
require 'pp'

# Custom helper methods
def y(obj)
  puts obj.to_yaml
end

# Quick benchmark helper
def bench(n = 1000)
  start = Time.now
  n.times { yield }
  (Time.now - start) / n
end
```

## Package Management

### RubyGems

RubyGems is Ruby's package manager. It comes bundled with Ruby and manages gem distribution:

```bash
# Search for gems
gem search rails

# Install a gem
gem install rails

# Install a specific version
gem install rails -v 7.1.0

# List installed gems
gem list
gem list --local

# Gem information
gem list rails --details

# Uninstall
gem uninstall rails

# Update all gems
gem update

# Update a specific gem
gem update rails
```

### Gemfile and Bundler

Bundler provides deterministic dependency management. A `Gemfile` declares dependencies, and a
`Gemfile.lock` records exact versions:

```ruby
# Gemfile
source 'https://rubygems.org'

ruby '3.3.0'

# Runtime dependencies
gem 'rails', '~> 7.1.0'
gem 'pg', '~> 1.5'
gem 'puma', '~> 6.0'
gem 'bootsnap', require: false

# Gems used only in specific environments
group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'pry-rails'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
end

group :development do
  gem 'rubocop-rails', require: false
  gem 'bullet'  # N+1 query detection
end
```

Version constraint operators in the Gemfile:

```ruby
gem 'rails', '~> 7.1.0'   # >= 7.1.0 and < 7.2.0 (pessimistic)
gem 'rails', '>= 7.1.0'   # 7.1.0 or newer
gem 'rails', '~> 7.1'     # >= 7.1.0 and < 8.0
gem 'rails', '7.1.0'      # exactly 7.1.0
gem 'rails', '> 7.0', '< 8.0'  # range constraint
```

### Bundler Commands

```bash
# Install dependencies from Gemfile
bundle install

# Update specific gems
bundle update rails

# Update all gems
bundle update

# Run a command in Bundler context
bundle exec rspec
bundle exec rails server

# Package gems into vendor/cache for offline deployment
bundle package

# Check for outdated gems
bundle outdated

# Show gem versions from Gemfile.lock
bundle show rails

# Execute ruby with Bundler context
bundle exec ruby script.rb

# Create a new gem skeleton
bundle gem my_gem
```

### Gem Specification

When creating your own gem, the gemspec defines metadata:

```ruby
# my_gem.gemspec
Gem::Specification.new do |spec|
  spec.name        = 'my_gem'
  spec.version     = '0.1.0'
  spec.authors     = ['Your Name']
  spec.email       = ['your@email.com']
  spec.summary     = 'Short description'
  spec.description = 'Longer description of the gem'
  spec.homepage    = 'https://github.com/username/my_gem'
  spec.license     = 'MIT'

  spec.files = Dir.glob('lib/**/*.rb')
  spec.require_paths = ['lib']

  spec.required_ruby_version = '>= 3.0.0'

  spec.add_dependency 'activesupport', '~> 7.0'

  spec.add_development_dependency 'rspec', '~> 3.0'
  spec.add_development_dependency 'rubocop', '~> 1.0'
end
```

## Running Ruby Programs

### Direct Execution

```bash
# Run a Ruby file
ruby program.rb

# Run with flags
ruby -w program.rb          # enable warnings
ruby -e 'puts "hello"'      # execute one-liner
ruby -c program.rb           # syntax check only
ruby --dump=ast program.rb  # inspect the AST
ruby --version               # show version
```

### Shebang for Executable Scripts

```ruby
#!/usr/bin/env ruby

# script.rb
puts "Running Ruby #{RUBY_VERSION}"

def greet(name)
  puts "Hello, #{name}!"
end

greet(ARGV[0] || "World")
```

```bash
chmod +x script.rb
./script.rb Alice  # => "Hello, Alice!"
```

### ruby -e for One-Liners

Ruby one-liners are powerful for quick text processing and data transformation:

```bash
# Print each line with line number
ruby -ne 'puts "#{NR}: #{$_}"' file.txt

# Sum numbers from a file
ruby -ane 'BEGIN{s=0}; s+=$F[0].to_i; END{puts s}' numbers.txt

# In-place edit (like sed -i)
ruby -i -pe 'gsub(/foo/, "bar")' file.txt

# Filter lines matching a pattern
ruby -ne 'print if /pattern/' file.txt

# Split and process CSV-like data
ruby -F, -ane 'puts "#{$F[0]}: #{$F[1]}"' data.csv
```

Flag explanations:

| Flag | Meaning                               |
| ---- | ------------------------------------- |
| `-e` | Execute one line of script            |
| `-n` | Wrap script in `while gets; ...; end` |
| `-p` | Same as `-n` but also prints `$_`     |
| `-a` | Autosplit mode: splits `$_` into `$F` |
| `-F` | Field separator for autosplit         |
| `-i` | In-place editing                      |
| `-l` | Chomp newline, add newline to output  |
| `-c` | Check syntax only                     |
| `-w` | Enable warnings                       |
| `-d` | Debug mode                            |

## Ruby Version Compatibility

The `~/.ruby-version` or `.ruby-version` file specifies the Ruby version for a project:

```
3.3.0
```

This is recognised by rbenv, RVM, and asdf. When multiple developers work on a project, this ensures
everyone uses the same Ruby version.

### Checking Compatibility

```ruby
# In your code
RUBY_VERSION  # => "3.3.0"

# Gem specification
spec.required_ruby_version = '>= 3.0.0'

# Runtime check
if RUBY_VERSION < '3.0.0'
  raise "This gem requires Ruby 3.0 or later"
end
```

## Useful Ruby Resources

- **Official documentation**: https://ruby-doc.org/
- **RubyGems**: https://rubygems.org/
- **Try Ruby (interactive)**: https://try.ruby-lang.org/
- **Ruby style guide**: https://rubystyle.guide/
- **Ruby Weekly newsletter**: https://rubyweekly.com/
- **Ruby source code**: https://github.com/ruby/ruby
- **Rails guides**: https://guides.rubyonrails.org/
