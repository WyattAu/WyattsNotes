---
title: Functions, Closures, and Decorators
date: 2026-04-05T00:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: functions-closures-decorators
sidebar_position: 3
---

## Functions as First-Class Objects

In Python, **"first-class"** means that functions are values on equal footing with every other kind
of value -- integers, strings, lists, class instances. There is no separate "function type
namespace" or restriction on where a function reference can appear. A function can be assigned to a
variable, stored in a data structure, passed as an argument, and returned from another function. The
language makes zero distinction between a function object and any other object with respect to what
you can do with its reference.

This is not true in all languages. In C, function pointers exist but are a distinct type from data
pointers. In Java (pre-lambdas), you needed verbose anonymous class wrappers. In Go, you can pass
functions but cannot create them inline with the same flexibility. Python makes no such
distinctions.

### Functions Are Objects

Every `def` statement creates a function object -- an instance of `types.FunctionType` -- and binds
it to the name on the left side of the statement. The name is just a label in the namespace; the
function is the object itself.

```python
def greet(name: str) -> str:
    """Return a greeting."""
    return f"Hello, {name}"

print(type(greet))    # <class 'function'>
print(id(greet))      # some integer, e.g. 140234867123456
print(greet.__name__) # 'greet'
print(greet.__doc__)  # 'Return a greeting.'
print(greet.__module__)  # '__main__'
print(greet.__qualname__)  # 'greet'
print(callable(greet)) # True

greet.__annotations__
# {'name': <class 'str'>, 'return': <class 'str'>}

greet.__code__
# <code object greet at 0x7f..., file "<stdin>", line 1>
```

The function object carries its own metadata -- name, docstring, annotations, default values,
closure cells, the compiled code object, and the module it was defined in. All of these are writable
attributes on the function object. This is why `functools.wraps` exists: to copy these attributes
from a wrapped function to its wrapper.

### Assigning to Variables

Since the `def` statement binds a name to a function object, rebinding that name to a different
function or any other object is trivially easy:

```python
def greet(name: str) -> str:
    return f"Hello, {name}"

farewell = greet
print(farewell("World"))  # 'Hello, World'
print(farewell is greet)  # True -- same object
```

Both `greet` and `farewell` point to the same function object. Neither is "the real name" of the
function. The `def` statement just happened to use `greet` first.

### Storing in Data Structures

Functions can be elements of any collection:

```python
def bold(text: str) -> str:
    return f"**{text}**"

def italic(text: str) -> str:
    return f"*{text}*"

def code(text: str) -> str:
    return f"`{text}`"

formatters = [bold, italic, code]

text = "hello"
for fmt in formatters:
    print(fmt(text))

dispatch = {
    "bold": bold,
    "italic": italic,
    "code": code,
}

format_type = "bold"
print(dispatch[format_type]("hello"))  # '**hello**'
```

This is the foundation of **strategy patterns**, **command dispatch**, and **plugin registries** in
Python. A dictionary mapping string keys to function objects is one of the most common patterns in
production codebases, replacing large `if/elif` chains.

### Passing as Arguments

Higher-order functions accept other functions as parameters:

```python
def apply(func, value):
    return func(value)

print(apply(str.upper, "hello"))  # 'HELLO'
print(apply(len, [1, 2, 3]))      # 3
```

This is how `sorted`, `map`, `filter`, `min`, `max`, and many other built-ins work. The `key`
parameter of `sorted` is a function object; `map` and `filter` take function objects as their first
argument.

### Returning from Functions

A function can return another function. This is the mechanism behind **closures**, **factories**,
and **decorators**:

```python
def multiplier(factor: int):
    def inner(x: int) -> int:
        return x * factor
    return inner

double = multiplier(2)
triple = multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15
print(double(10))  # 20

print(type(double))  # <class 'function'>
print(double.__closure__)  # (<cell at 0x...: int object at 0x...>,)
```

`multiplier` does not compute a result -- it **manufactures a function**. The returned `inner`
function is permanently wired to the `factor` value that was in scope when `multiplier` was called.
This is a closure, covered in detail below.

## `def` vs `lambda`

### `def`: Full Function Definition

`def` is a statement that creates a named function object and binds it to a name. It supports:

- Multiple statements in the body
- Docstrings
- Type annotations
- Multiple expressions and control flow (`if`, `for`, `try`, `with`)
- Tuple unpacking in parameters
- Keyword-only and positional-only parameters
- `*args` and `**kwargs`

```python
def process_data(
    data: list[int],
    *,
    threshold: int = 10,
    callback: Callable[[int], None] | None = None,
) -> list[int]:
    """Filter and optionally notify on each item above threshold."""
    result = []
    for item in data:
        if item > threshold:
            result.append(item)
            if callback:
                callback(item)
    return result
```

### `lambda`: Anonymous Single-Expression Functions

`lambda` creates an anonymous function with a **single expression** as its body. The expression's
value is the return value. That is the entire body -- no statements, no assignments, no loops, no
`try`, no `return` (the return is implicit).

```python
add = lambda x, y: x + y
print(add(3, 4))  # 7

# Equivalent def
def add(x, y):
    return x + y
```

**Lambda limitations -- these are not oversights, they are deliberate constraints:**

1. **Single expression only.** You cannot write `lambda x: if x > 0: x else: -x`. Use a conditional
   expression instead: `lambda x: x if x > 0 else -x`.
2. **No statements.** No `for`, `while`, `try`, `with`, `assert`, `import`, `global`, `nonlocal`.
3. **No annotations.** `lambda x: int -> x` is a syntax error.
4. **No docstring.** A `lambda`'s `__doc__` is always `None`.
5. **No assignment.** `lambda x: (y := x + 1)` works in Python 3.8+ via the walrus operator, but
   this is an expression, not a statement -- and it is poor style.

### Common Lambda Patterns

Lambdas shine in contexts where a small, throwaway function is needed for a single call site:

```python
# sorted with a key function
pairs = [(1, "banana"), (3, "apple"), (2, "cherry")]
pairs.sort(key=lambda pair: pair[1])
# [(3, 'apple'), (1, 'banana'), (2, 'cherry')]

# map and filter (though list comprehensions are usually preferred)
squares = list(map(lambda x: x**2, range(10)))
evens = list(filter(lambda x: x % 2 == 0, range(10)))

# max with a key function
people = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
oldest = max(people, key=lambda p: p["age"])

# Callback for GUI or event-driven code
button.on_click(lambda event: handle_click(event))

# Custom sort with multiple criteria
data = [(1, "b"), (2, "a"), (1, "a")]
data.sort(key=lambda x: (x[0], x[1]))
```

**When to use `def` instead of `lambda`:** If the logic requires more than one expression, if you
need a docstring, if you need type annotations, or if the function will be reused. PEP 8 is
explicit: "Always use a def statement instead of an assignment statement that binds a lambda
expression directly to a name." The justification is that named functions are easier to debug (they
appear in tracebacks by name), easier to introspect (they have `__name__`), and easier to annotate.

### Lambda Capture Semantics

Lambdas close over variables by **reference**, not by value. This is the same behavior as nested
`def` functions, but it is more frequently surprising in lambdas because they are often used in
loops:

```python
funcs = []
for i in range(5):
    funcs.append(lambda: i)

for f in funcs:
    print(f())  # 4, 4, 4, 4, 4
```

All five lambdas reference the **same** variable `i`, which is `4` by the time the loop finishes.
The fix is to bind the value with a default argument:

```python
funcs = []
for i in range(5):
    funcs.append(lambda i=i: i)

for f in funcs:
    print(f())  # 0, 1, 2, 3, 4
```

The default argument `i=i` is evaluated at lambda-definition time, capturing the current value. This
is covered further in the closures section.

### Why Guido Wanted to Remove Lambda

Guido van Rossum has stated that he wanted to remove `lambda` from Python 3. His reasoning: `lambda`
is a source of obfuscated code. Programmers use it to cram multi-line logic into a single
expression, producing unreadable one-liners. Every legitimate use of `lambda` can be replaced by
either a named `def` function or a list comprehension. The Python community pushed back, and
`lambda` survived, but the guidance remains: use it only for short, simple expressions where a named
function would be more ceremony than clarity.

## Closures

### What a Closure Is

A closure is a function object that retains access to variables from its enclosing scope, **even
after that scope has finished executing**. The function carries with it a snapshot of the
environment in which it was defined -- not a copy of the values, but a reference to the variables
themselves.

The three components of a closure are:

1. **A nested function** (the inner function)
2. **A reference to a variable from an enclosing scope** (the free variable)
3. **The enclosing scope's environment** (preserved by the closure)

```python
def make_adder(n: int):
    """Return a function that adds n to its argument."""
    def adder(x: int) -> int:
        return x + n
    return adder

add_five = make_adder(5)
add_ten = make_adder(10)

print(add_five(3))   # 8
print(add_ten(3))    # 13
```

When `make_adder(5)` is called, the local variable `n` is bound to `5`. The inner function `adder`
references `n` as a free variable. When `make_adder` returns, its stack frame is destroyed -- but
`n` is not garbage-collected because the returned `adder` function still references it. The variable
`n` lives on inside the closure.

### The `__closure__` Attribute and Cell Objects

Every function object has a `__closure__` attribute. If the function has no free variables,
`__closure__` is `None`. If it does, `__closure__` is a tuple of **cell objects**. Each cell holds a
reference to one free variable from the enclosing scope.

```python
def make_adder(n: int):
    def adder(x: int) -> int:
        return x + n
    return adder

add_five = make_adder(5)

print(add_five.__closure__)      # (<cell at 0x...: int object at 0x...>,)
print(add_five.__closure__[0].cell_contents)  # 5
print(type(add_five.__closure__[0]))          # <class 'cell'>
```

The `__code__` attribute of the function tells you which variables are free:

```python
print(add_five.__code__.co_freevars)  # ('n',)
```

This is how CPython implements closures: free variables are not stored as local variables in the
inner function's frame. Instead, the compiler generates `LOAD_DEREF` bytecodes that dereference the
cell objects in `__closure__`. This indirection is what allows the inner function to read and (with
`nonlocal`) write to variables in the enclosing scope.

### When Closures Are Created

A closure is created at the point the `def` statement for the inner function executes. At that
moment, the Python compiler has already determined which names are free variables (by static
analysis of the inner function's code), and the runtime creates cell objects for each one. The cell
objects hold references to the variables in the enclosing scope's local namespace.

```python
def outer():
    x = 10
    y = 20

    def middle():
        z = 30

        def inner():
            return x + y + z  # x and y are free; z is from the immediate enclosing scope

        return inner

    return middle

f = outer()()
print(f())  # 60
print(f.__code__.co_freevars)  # ('x', 'y', 'z')
```

`inner` captures `x` and `y` from `outer` and `z` from `middle`. All three are free variables
relative to `inner`, and all are preserved in the closure.

### The `nonlocal` Keyword

By default, a function can **read** variables from enclosing scopes. But if you assign to a variable
name inside a function, Python treats it as a **local variable** unless you declare it `nonlocal` or
`global`. This is a consequence of the LEGB rule and Python's scoping semantics.

```python
def make_counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    return increment

counter = make_counter()
print(counter())  # 1
print(counter())  # 2
print(counter())  # 3
```

Without `nonlocal count`, the line `count += 1` would raise `UnboundLocalError` because Python sees
the assignment and treats `count` as local throughout the entire function body -- including the read
on the right side of `+=`.

`nonlocal` searches the enclosing function scopes (not the module scope; for that, use `global`) and
binds the name to the variable found there. The cell mechanism allows the inner function to both
read and mutate the enclosing variable.

### Late Binding: The Loop Variable Gotcha

This is the single most common closure bug in Python. Closures capture **variables**, not
**values**. When the enclosing scope's variable changes, the closure sees the updated value. In a
loop, all closures created in the same iteration share the same variable, and by the time they are
called, the variable has the value from the last iteration.

```python
def create_multipliers():
    multipliers = []
    for i in range(5):
        def multiplier(x):
            return x * i
        multipliers.append(multiplier)
    return multipliers

funcs = create_multipliers()
print([f(2) for f in funcs])  # [8, 8, 8, 8, 8] -- all use i=4
```

**Why this happens:** All five `multiplier` functions reference the same variable `i` in
`create_multipliers`'s local scope. When the loop finishes, `i` is `4`. The closures do not snapshot
the value of `i` at the time each `multiplier` is defined; they hold a reference to the variable
itself.

**Fix 1 -- default argument binding:**

```python
def create_multipliers():
    multipliers = []
    for i in range(5):
        def multiplier(x, factor=i):
            return x * factor
        multipliers.append(multiplier)
    return multipliers

funcs = create_multipliers()
print([f(2) for f in funcs])  # [0, 2, 4, 6, 8]
```

Default argument values are evaluated once at function definition time, so `factor=i` captures the
current value of `i`.

**Fix 2 -- factory function:**

```python
def create_multipliers():
    def make_multiplier(factor):
        def multiplier(x):
            return x * factor
        return multiplier
    return [make_multiplier(i) for i in range(5)]

funcs = create_multipliers()
print([f(2) for f in funcs])  # [0, 2, 4, 6, 8]
```

Each call to `make_multiplier` creates a new scope with its own `factor` variable, so each closure
references a different variable.

### Mutable Closure State

Closures can maintain mutable state across calls using mutable containers:

```python
def make_accumulator(initial: int = 0):
    state = {"total": initial}

    def accumulate(amount: int) -> int:
        state["total"] += amount
        return state["total"]

    return accumulate

acc = make_accumulator(100)
print(acc(10))   # 110
print(acc(25))   # 135
print(acc(-50))  # 85
```

This works because the closure holds a reference to the `state` dictionary object. Mutating the
dictionary's contents (adding to `state["total"]`) does not require `nonlocal` because the name
`state` itself is never rebound -- only the contents of the object it references are modified.

You can also use a list for the same purpose, but a single-element list (`state = [initial]`) is
less readable than a dictionary. An alternative is to use `nonlocal` with an integer, as shown in
the counter example above, but this only works for types that support in-place mutation through `+=`
(which, for `int`, actually rebinds the variable and therefore requires `nonlocal`).

## Decorators

### What Decorators Are

A decorator is a **callable that takes a function as an argument and returns a modified function (or
callable)**. The `@decorator` syntax is syntactic sugar for a function call:

```python
@decorator
def func():
    pass

# Exactly equivalent to:
def func():
    pass
func = decorator(func)
```

This is not a special language feature -- it is pure function application. The decorator can be any
callable: a function, a class, or an object with a `__call__` method. The result is bound to the
original function's name.

### Writing Function Decorators

The simplest decorator replaces a function with a wrapper that adds behavior before and after the
original call:

```python
import functools
import time

def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.1)
    return "done"

print(slow_function())
# slow_function took 0.1001s
# 'done'
```

The wrapper uses `*args` and `**kwargs` to accept any argument signature, making the decorator
generic. The decorator returns the wrapper function, which replaces `slow_function` in the module
namespace.

### `functools.wraps` -- Why It Matters

Without `@functools.wraps(func)`, the wrapper function's metadata replaces the original function's
metadata. This breaks introspection, debugging, documentation tools, and anything that relies on
`__name__`, `__doc__`, `__module__`, `__qualname__`, or `__wrapped__`.

```python
def broken_timer(func):
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@broken_timer
def important_function():
    """This is a critical function with important documentation."""
    return 42

print(important_function.__name__)  # 'wrapper' -- not 'important_function'
print(important_function.__doc__)   # None -- the docstring is lost
```

With `@functools.wraps(func)`, the wrapper function's metadata is replaced with the original
function's metadata:

```python
@timer  # timer uses @functools.wraps
def important_function():
    """This is a critical function with important documentation."""
    return 42

print(important_function.__name__)  # 'important_function'
print(important_function.__doc__)   # 'This is a critical function with important documentation.'
print(important_function.__wrapped__)  # <function important_function at 0x...>
```

`__wrapped__` is particularly important: it provides a reference to the original, undecorated
function. This allows tools to unwrap decorated functions when needed -- for instance,
`inspect.signature()` follows `__wrapped__` to report the original signature, and unit test
frameworks can access the original function to bypass decorators.

A deep dive into exactly what `functools.wraps` copies is provided in a dedicated section below.

### Stacking Decorators

Multiple decorators can be applied to a single function. They are applied **bottom-up** (the
decorator closest to the `def` is applied first) and executed **top-down** (the outermost decorator
wraps everything):

```python
@log_calls
@timer
@validate_input
def process(data):
    return data * 2
```

This is equivalent to:

```python
def process(data):
    return data * 2
process = log_calls(timer(validate_input(process)))
```

**Decoration order (bottom-up):** `validate_input` is applied first, wrapping `process`. Then
`timer` wraps the result of that. Then `log_calls` wraps the result of that.

**Execution order (top-down):** When you call `process(42)`, `log_calls`'s wrapper runs first (it is
the outermost layer). Inside it, `timer`'s wrapper runs. Inside that, `validate_input`'s wrapper
runs. Finally, the original `process` runs. The return value propagates back out through each layer.

The practical implication: if one decorator depends on the behavior of another (e.g., a logging
decorator that needs to see the timing information), the order matters. Put the decorator that
should run **first** at the **top** of the stack.

## Decorator Factories

A decorator factory is a function that **returns a decorator**. This adds a level of indirection
that allows the decorator to accept configuration arguments. The result is three levels of nesting:
factory, decorator, wrapper.

```python
def retry(max_attempts: int = 3, delay: float = 1.0, backoff: float = 2.0):
    """Decorator factory that returns a retry decorator."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            current_delay = delay
            last_exception = None
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    last_exception = e
                    if attempt == max_attempts:
                        raise
                    print(
                        f"{func.__name__} failed (attempt {attempt}/{max_attempts}): {e}. "
                        f"Retrying in {current_delay:.1f}s..."
                    )
                    time.sleep(current_delay)
                    current_delay *= backoff
        return wrapper
    return decorator
```

Usage:

```python
@retry(max_attempts=5, delay=0.5, backoff=1.5)
def fetch_data(url: str) -> dict:
    response = requests.get(url)
    response.raise_for_status()
    return response.json()
```

The call `retry(max_attempts=5, delay=0.5, backoff=1.5)` executes the factory function, which
returns the `decorator` function. That `decorator` is then applied to `fetch_data` by the `@`
syntax. The result is the same as:

```python
fetch_data = retry(max_attempts=5, delay=0.5, backoff=1.5)(fetch_data)
```

### Parameterized Decorators with Default Arguments

A common pattern is to make the decorator callable both with and without arguments. This requires
detecting whether the first argument is a function (direct decoration without arguments) or a
configuration value (decoration with arguments):

```python
def rate_limit(requests_per_second: float = 10.0):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # rate limiting logic here
            return func(*args, **kwargs)
        return wrapper
    return decorator

# With arguments
@rate_limit(requests_per_second=5.0)
def api_call():
    pass

# Without arguments (uses default)
@rate_limit()
def another_call():
    pass
```

Note that `@rate_limit` (without parentheses) would not work here -- it would pass the function as
`requests_per_second`. You would need an additional layer of detection:

```python
def rate_limit(_func=None, *, requests_per_second: float = 10.0):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            return func(*args, **kwargs)
        return wrapper
    if _func is not None:
        return decorator(_func)
    return decorator

# Both forms work
@rate_limit
def no_args():
    pass

@rate_limit(requests_per_second=5.0)
def with_args():
    pass
```

When `@rate_limit` is used without parentheses, Python calls `rate_limit(no_args)`. The function
object is passed as `_func`, and since it is not `None`, we immediately return `decorator(_func)`.
When `@rate_limit(requests_per_second=5.0)` is used, Python calls
`rate_limit(requests_per_second=5.0)`, `_func` defaults to `None`, and we return `decorator` to be
applied by the `@` syntax.

## Class-Based Decorators

A class can serve as a decorator if it implements `__call__`. The `__init__` method receives the
decorated function, and `__call__` implements the wrapper logic.

```python
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.call_count = 0
        functools.update_wrapper(self, func)

    def __call__(self, *args, **kwargs):
        self.call_count += 1
        print(f"{self.func.__name__} has been called {self.call_count} time(s)")
        return self.func(*args, **kwargs)

@CountCalls
def say_hello(name: str) -> str:
    return f"Hello, {name}"

print(say_hello("Alice"))
# say_hello has been called 1 time(s)
# Hello, Alice
print(say_hello("Bob"))
# say_hello has been called 2 time(s)
# Hello, Bob
```

Note the use of `functools.update_wrapper(self, func)` instead of `@functools.wraps(func)`. Since
the decorator is a class instance (not a function), you cannot use `@functools.wraps` on a method.
`functools.update_wrapper` is the lower-level function that `wraps` delegates to -- it copies
metadata from `func` to `self`.

### When to Use Class-Based vs Function-Based

**Use function-based decorators when:**

- The decorator has no persistent state across calls
- The decorator is simple and does not need internal organization
- You want the most straightforward implementation

**Use class-based decorators when:**

- The decorator needs to maintain state across calls (e.g., call counting, caching, rate limiting)
- The decorator's logic is complex enough to benefit from multiple methods
- You want the decorator to be configurable via the class constructor

```python
class RateLimiter:
    def __init__(self, func, max_calls: int = 10, period: float = 60.0):
        self.func = func
        self.max_calls = max_calls
        self.period = period
        self.calls: list[float] = []
        functools.update_wrapper(self, func)

    def __call__(self, *args, **kwargs):
        now = time.time()
        self.calls = [t for t in self.calls if now - t < self.period]
        if len(self.calls) >= self.max_calls:
            raise RuntimeError(
                f"Rate limit exceeded: {self.max_calls} calls per {self.period}s"
            )
        self.calls.append(now)
        return self.func(*args, **kwargs)

@RateLimiter(max_calls=5, period=10.0)
def api_request(endpoint: str) -> dict:
    return {"endpoint": endpoint, "status": "ok"}
```

Class-based decorators naturally accumulate state in instance attributes, which is cleaner than
using mutable closures or `nonlocal` variables for complex state management.

## Common Decorator Patterns

### Caching / Memoization

```python
import functools

@functools.lru_cache(maxsize=128)
def fibonacci(n: int) -> int:
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(100))  # 354224848179261915075 -- instant
print(fibonacci.cache_info())
# CacheInfo(hits=98, misses=101, maxsize=128, currsize=101)
```

`lru_cache` uses a hash table backed by a doubly-linked list (O(1) lookup and O(1) eviction of the
least-recently-used entry). The `maxsize=None` option makes the cache unbounded. The cache is
per-function-instance -- if you decorate a method, each instance gets its own cache (because the
bound method is a different object for each instance).

Manual implementation:

```python
def memoize(func):
    cache = {}

    @functools.wraps(func)
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]

    wrapper.cache = cache
    wrapper.cache_clear = cache.clear
    return wrapper
```

### Timing / Profiling

```python
def profile(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"[PROFILE] {func.__name__}: {elapsed:.6f}s")
        return result
    return wrapper
```

For production profiling, prefer `cProfile` or `timeit` over manual decorators. The decorator
pattern is useful for ad-hoc debugging.

### Validation

```python
def validate_types(**expected_types):
    def decorator(func):
        sig = inspect.signature(func)

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            bound = sig.bind(*args, **kwargs)
            bound.apply_defaults()
            for name, value in bound.arguments.items():
                if name in expected_types:
                    if not isinstance(value, expected_types[name]):
                        raise TypeError(
                            f"{func.__name__}(): argument '{name}' must be "
                            f"{expected_types[name].__name__}, got {type(value).__name__}"
                        )
            return func(*args, **kwargs)
        return wrapper
    return decorator

@validate_types(name=str, age=int)
def create_user(name: str, age: int) -> dict:
    return {"name": name, "age": age}
```

### Retry with Exponential Backoff

(See the decorator factory example above -- that is a full implementation.)

### Registration / Plugin Systems

```python
class CommandRegistry:
    def __init__(self):
        self.commands: dict[str, Callable] = {}

    def register(self, name: str):
        def decorator(func):
            self.commands[name] = func
            @functools.wraps(func)
            def wrapper(*args, **kwargs):
                return func(*args, **kwargs)
            return wrapper
        return decorator

    def execute(self, name: str, *args, **kwargs):
        if name not in self.commands:
            raise ValueError(f"Unknown command: {name}")
        return self.commands[name](*args, **kwargs)

registry = CommandRegistry()

@registry.register("deploy")
def deploy(env: str):
    print(f"Deploying to {env}")

@registry.register("rollback")
def rollback(env: str):
    print(f"Rolling back {env}")

registry.execute("deploy", "production")
registry.execute("rollback", "staging")
```

### Singleton Enforcement

```python
def singleton(cls):
    instances: dict[type, object] = {}

    @functools.wraps(cls)
    def wrapper(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]

    wrapper.instance = lambda: instances.get(cls)
    return wrapper

@singleton
class DatabaseConnection:
    def __init__(self, dsn: str):
        self.dsn = dsn
        print(f"Connecting to {dsn}")

a = DatabaseConnection("postgresql://localhost/db")
b = DatabaseConnection("postgresql://localhost/db")
print(a is b)  # True
```

**Note:** This is a toy example. In production, singleton enforcement through decorators has
limitations -- it does not prevent someone from calling `DatabaseConnection.__new__` directly, and
it introduces global mutable state. Prefer module-level instances or dependency injection.

## Built-in Decorators

### `@staticmethod` and `@classmethod`

`@staticmethod` defines a method that does not receive `self` or `cls` as an implicit first
argument. It is a namespacing mechanism -- the method logically belongs to the class but does not
operate on instances.

`@classmethod` defines a method that receives the class (`cls`) as its first argument, not the
instance. It is used for **alternative constructors** and methods that operate on the class itself
rather than instances.

```python
class DateFormatter:
    format_string: str = "%Y-%m-%d"

    def __init__(self, date_string: str):
        self.date = datetime.strptime(date_string, self.format_string)

    @classmethod
    def from_timestamp(cls, timestamp: float) -> "DateFormatter":
        date_string = datetime.fromtimestamp(timestamp).strftime(cls.format_string)
        return cls(date_string)

    @staticmethod
    def is_valid_format(date_string: str) -> bool:
        try:
            datetime.strptime(date_string, "%Y-%m-%d")
            return True
        except ValueError:
            return False

obj = DateFormatter.from_timestamp(1700000000.0)
print(DateFormatter.is_valid_format("2024-01-01"))  # True
```

`from_timestamp` is a classmethod that acts as an alternative constructor. Because it receives
`cls`, subclasses of `DateFormatter` that override `format_string` will automatically use the
subclass when `cls(date_string)` is called.

### `@property`

`@property` turns a method into a managed attribute. It allows you to intercept attribute access
(`__get__`), assignment (`__set__` via a setter), and deletion (`__delete__` via a deleter).

```python
class Temperature:
    def __init__(self, celsius: float):
        self._celsius = celsius

    @property
    def celsius(self) -> float:
        return self._celsius

    @celsius.setter
    def celsius(self, value: float):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero")
        self._celsius = value

    @property
    def fahrenheit(self) -> float:
        return self._celsius * 9 / 5 + 32

    @fahrenheit.setter
    def fahrenheit(self, value: float):
        self.celsius = (value - 32) * 5 / 9  # reuses celsius setter for validation
```

Properties are descriptors -- they are objects with `__get__`, `__set__`, and/or `__delete__`
methods. The `@property` decorator creates a `property` object (an instance of `property`) and
assigns it as a class attribute. When you access `instance.celsius`, Python's descriptor protocol
invokes `property.__get__`.

### `@abstractmethod`

`@abstractmethod` (from the `abc` module) marks a method as abstract -- it must be implemented by
concrete subclasses. Attempting to instantiate a class with unimplemented abstract methods raises
`TypeError`.

```python
from abc import ABC, abstractmethod

class StorageBackend(ABC):
    @abstractmethod
    def read(self, key: str) -> bytes:
        ...

    @abstractmethod
    def write(self, key: str, data: bytes) -> None:
        ...

class S3Backend(StorageBackend):
    def read(self, key: str) -> bytes:
        # implementation
        return b"..."

    def write(self, key: str, data: bytes) -> None:
        # implementation
        pass

class IncompleteBackend(StorageBackend):
    def read(self, key: str) -> bytes:
        return b""

# IncompleteBackend() raises TypeError:
# Can't instantiate abstract class IncompleteBackend with abstract method 'write'
```

Abstract methods can have implementations. Subclasses can call `super().method()` to reuse the
default implementation. This is useful for providing a base implementation that subclasses can
extend.

### `@functools.cached_property`

`@cached_property` (Python 3.8+) computes the value on first access and caches it as a regular
instance attribute. Subsequent accesses read the cached value directly, with no function call
overhead.

```python
import functools

class HeavyComputation:
    def __init__(self, data: list[int]):
        self.data = data

    @functools.cached_property
    def sorted_data(self) -> list[int]:
        print("Computing sorted data...")
        return sorted(self.data)

obj = HeavyComputation([3, 1, 4, 1, 5])
print(obj.sorted_data)  # prints "Computing sorted data..." then [1, 1, 3, 4, 5]
print(obj.sorted_data)  # [1, 1, 3, 4, 5] -- no computation, no print
```

**Difference from `@property` with caching:** `@cached_property` stores the result as an instance
attribute (`self.sorted_data`), which means it takes precedence over the descriptor on subsequent
lookups. `@property` with manual caching requires you to manage the cache yourself.

**Difference from `@lru_cache`:** `@lru_cache` caches based on arguments, which is useful for
functions. `@cached_property` caches a single value per instance, which is useful for computed
attributes. Also, `@cached_property` does not have a size limit or eviction policy.

### `@functools.total_ordering`

`@total_ordering` automatically generates the remaining rich comparison methods (`__lt__`, `__le__`,
`__gt__`, `__ge__`) from `__eq__` and one other comparison method.

```python
import functools

@functools.total_ordering
class Version:
    def __init__(self, major: int, minor: int, patch: int):
        self.major = major
        self.minor = minor
        self.patch = patch

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Version):
            return NotImplemented
        return (self.major, self.minor, self.patch) == (other.major, other.minor, other.patch)

    def __lt__(self, other: "Version") -> bool:
        return (self.major, self.minor, self.patch) < (other.major, other.minor, other.patch)

v1 = Version(1, 0, 0)
v2 = Version(2, 0, 0)
print(v1 < v2)   # True
print(v1 <= v2)  # True  (auto-generated)
print(v1 > v2)   # False (auto-generated)
print(v1 >= v2)  # False (auto-generated)
```

**Performance note:** The auto-generated methods use reflection and can be slower than hand-written
comparisons. For hot paths, implement all six methods explicitly.

### `@dataclass`

`@dataclass` (Python 3.7+) automatically generates `__init__`, `__repr__`, `__eq__`, and optionally
`__hash__`, `__lt__`, `__str__`, and more from class-level type annotations.

```python
from dataclasses import dataclass, field

@dataclass(order=True, frozen=True)
class Point:
    x: float
    y: float
    z: float = 0.0

p1 = Point(1.0, 2.0)
p2 = Point(1.0, 2.0, 0.0)
print(p1 == p2)  # True
print(p1)        # Point(x=1.0, y=2.0, z=0.0)
```

### `@typing.overload`

`@overload` allows you to define multiple type signatures for a function that has different behavior
depending on argument types. It is a **type-checking-only** construct -- the runtime ignores it and
uses the last (implementation) definition.

```python
from typing import overload

@overload
def process(data: str) -> str: ...

@overload
def process(data: list[int]) -> int: ...

@overload
def process(data: bytes) -> dict[str, int]: ...

def process(data):
    if isinstance(data, str):
        return data.upper()
    elif isinstance(data, list):
        return sum(data)
    elif isinstance(data, bytes):
        return {str(i): b for i, b in enumerate(data)}
    raise TypeError(f"Unsupported type: {type(data)}")

result1: str = process("hello")          # type checker knows this returns str
result2: int = process([1, 2, 3])        # type checker knows this returns int
```

## `functools.wraps` Deep Dive

### What It Copies

`functools.wraps` is a convenience decorator that calls `functools.update_wrapper`. It copies
metadata from the wrapped function to the wrapper function, making the wrapper appear to be the
wrapped function for introspection purposes.

The two attributes that control what gets copied are:

```python
functools.WRAPPER_ASSIGNMENTS = (
    '__module__',
    '__name__',
    '__qualname__',
    '__annotations__',
    '__doc__',
)

functools.WRAPPER_UPDATES = (
    '__dict__',
)
```

- **`WRAPPER_ASSIGNMENTS`:** These attributes are **replaced** (assigned by name). The wrapper's
  `__name__` becomes the wrapped function's `__name__`, etc. If the wrapped function does not have
  one of these attributes, the wrapper's attribute is deleted (via `delattr`).
- **`WRAPPER_UPDATES`:** These attributes are **merged** (updated). The wrapper's `__dict__` is
  updated with the wrapped function's `__dict__`, meaning any custom attributes set on the original
  function are available on the wrapper.

Additionally, `update_wrapper` sets `wrapper.__wrapped__ = wrapped`, which provides a direct
reference to the original function.

### Full Mechanism

```python
import functools

def my_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def example(x: int) -> str:
    """Convert int to string."""
    return str(x)

print(example.__name__)          # 'example'
print(example.__qualname__)      # 'example'
print(example.__doc__)           # 'Convert int to string.'
print(example.__module__)        # '__main__'
print(example.__annotations__)   # {'x': <class 'int'>, 'return': <class 'str'>}
print(example.__wrapped__)       # <function example at 0x...>
```

### Why Omitting It Breaks Things

Without `functools.wraps`, the following tools and patterns break:

**1. Debugging and tracebacks.** The wrapper's `__name__` is `wrapper`, which appears in tracebacks
instead of the original function name. When you have multiple decorators, every traceback shows
`wrapper` and you cannot tell which function actually failed.

**2. Documentation tools.** Sphinx, pydoc, and IDEs read `__doc__` and `__annotations__` to generate
documentation. A decorator without `wraps` produces documentation that shows the wrapper's (empty)
docstring and no type information.

**3. `inspect.signature`.** Without `__wrapped__`, `inspect.signature()` falls back to the wrapper's
signature (`(*args, **kwargs)`), which tells you nothing about the actual parameters. With
`__wrapped__`, `inspect.signature()` follows the chain to the original function.

**4. `help()`.** The built-in `help()` function reads `__doc__`, `__name__`, and `__signature__`.
Without `wraps`, `help(example)` shows an empty or misleading result.

**5. Pickling.** Functions are pickled by qualified name. If the wrapper's `__module__` and
`__qualname__` do not match the original function's, unpickling may fail.

**6. Registration and dispatch.** If you register functions by name (e.g., in a CLI framework or RPC
system), the wrapper's name will be `wrapper` instead of the intended name.

## Common Pitfalls

### Late Binding in Closures

The loop-variable gotcha is described in detail in the closures section above. To recap: closures
capture variables by reference, not by value. In a loop, all closures share the same variable, and
all will see the final value. Fix it with default argument binding or a factory function.

### Forgetting `functools.wraps`

Without `@functools.wraps(func)`, the decorated function loses its `__name__`, `__doc__`,
`__module__`, `__qualname__`, `__annotations__`, and `__wrapped__`. This breaks tracebacks,
documentation, introspection, `help()`, `inspect.signature()`, and pickling. **Always use
`functools.wraps` in production decorators.** There is no good reason to omit it.

### Decorator Order Matters

Stacking decorators applies them bottom-up. The decorator closest to the `def` is applied first, and
the outermost decorator's wrapper runs first on each call.

```python
@outer
@inner
def func():
    pass

# Equivalent to:
func = outer(inner(func))

# On call: outer_wrapper runs first, calls inner_wrapper, which calls func
```

If `inner` caches results and `outer` logs calls, the logging decorator sees the cache hit (not the
original function call). If you reverse the order, the logging happens before the cache check.
Choose the order based on which behavior you want.

### Mutable Default Arguments in Decorators

The classic mutable default argument bug (`def func(arg=[])`) is especially insidious in decorators
because the mutable default is hidden inside the decorator's closure:

```python
def track_calls(func):
    calls = []  # BUG: shared across ALL functions decorated with track_calls

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        calls.append(func.__name__)
        print(f"Calls so far: {calls}")
        return func(*args, **kwargs)
    return wrapper

@track_calls
def foo():
    pass

@track_calls
def bar():
    pass

foo()  # Calls so far: ['foo']
bar()  # Calls so far: ['foo', 'bar']  -- bar sees foo's calls
```

The `calls` list is created once when `track_calls` is defined as a function. Every invocation of
`track_calls(func)` creates a new wrapper, but all wrappers close over the same `calls` list because
the list is defined in `track_calls`'s enclosing scope (the module scope), not in a per-decoration
scope.

Wait -- actually, that specific example is wrong in a subtle way. The `calls = []` is inside the
`track_calls` function body, so it is created fresh each time `track_calls` is called. The bug
manifests differently:

```python
def track_calls(func):
    calls = []  # This IS created per decoration

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        calls.append(func.__name__)
        print(f"Calls so far: {calls}")
        return func(*args, **kwargs)
    return wrapper
```

Here, `foo` and `bar` each get their own `calls` list. But the real mutable default bug in
decorators looks like this:

```python
def with_config(func, config=None):
    if config is None:
        config = {"retries": 3, "timeout": 30}

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        config["attempts"] = config.get("attempts", 0) + 1
        return func(*args, **kwargs)
    return wrapper
```

This is fine -- `config` is created per call to `with_config`. The real danger is when the mutable
object is a default argument value:

```python
# BUG: if with_config were defined with a mutable default
# (This specific pattern is less common for decorators than for regular functions,
# but the principle is the same.)
```

The more common decorator-specific mutable state bug is using module-level mutable state or
class-level mutable state that is shared across all decorations:

```python
_registry = {}  # module-level, shared across everything

def register(name):
    def decorator(func):
        _registry[name] = func  # all decorators share this dict
        return func
    return decorator
```

This is not necessarily a bug -- it is often the intended behavior (a global registry). But be aware
that the state is global and shared.

### Decorating Methods

When you decorate a method, the wrapper function receives the instance (`self`) as the first
argument. This is handled automatically by `*args`, but you need to be aware of it if the decorator
does anything with the arguments:

```python
def log_method_calls(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        instance = args[0] if args else None
        method_name = func.__name__
        class_name = type(instance).__name__ if instance else "Unknown"
        print(f"{class_name}.{method_name} called")
        return func(*args, **kwargs)
    return wrapper

class Service:
    @log_method_calls
    def do_work(self, task: str) -> str:
        return f"Completed: {task}"

s = Service()
s.do_work("deploy")
# Service.do_work called
```

The issue arises when a decorator needs to access `self` to read or modify instance state. In that
case, you must be explicit about extracting `self` from `args[0]`.

A more subtle issue: if you use a class-based decorator on a method, the `__call__` method does
**not** receive `self` (the instance of the decorated class) in the same way. The descriptor
protocol complicates things. A class-based decorator that works on both functions and methods needs
to return a function from `__call__`, not implement the call directly:

```python
class MethodAwareDecorator:
    def __init__(self, func):
        self.func = func
        functools.update_wrapper(self, func)

    def __call__(self, *args, **kwargs):
        # args[0] is 'self' when decorating a method
        # args[0] is the first argument when decorating a function
        return self.func(*args, **kwargs)

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return functools.partial(self, obj)
```

The `__get__` method makes the decorator a **descriptor**. When the decorated method is accessed on
an instance (`instance.method`), Python calls `__get__(instance, type)`, which returns a partial
function with the instance pre-bound. Without `__get__`, the class-based decorator would not work
correctly on methods -- `self` would be missing from the argument list.

### Debugging Decorated Functions

When debugging, you often need to access the original, undecorated function. The `__wrapped__`
attribute (set by `functools.wraps`) provides this:

```python
@timer
@retry(max_attempts=3)
def flaky_operation():
    return random.choice([True, False])

# Access the original function
original = flaky_operation.__wrapped__
# Note: this only unwraps one layer. To fully unwrap:
import inspect
fully_unwrapped = inspect.unwrap(flaky_operation)
```

`inspect.unwrap()` follows the `__wrapped__` chain until it reaches a function without
`__wrapped__`, giving you the fully original function regardless of how many decorators are stacked.

**Caveat:** Some decorators do not use `functools.wraps` and therefore do not set `__wrapped__`. In
those cases, `inspect.unwrap` stops at the first undocumented layer. This is yet another reason to
always use `functools.wraps`.
