---
title: Generators and Iterators
date: 2026-04-05T00:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: generators-and-iterators
sidebar_position: 4
---

## The Iterator Protocol

### The Two Methods

Python's iteration mechanism is built on a two-method protocol defined by the data model. Any object
that implements `__iter__` and `__next__` is an iterator. The CPython implementation checks for
these methods via `PyIter_Check()` and `tp_iternext` slots -- the interpreter itself does not care
whether the object is a built-in type or a user-defined class, only that it satisfies the protocol.

```python
class CountUp:
    """An iterator that counts from 0 to a limit (exclusive)."""

    def __init__(self, limit: int):
        self._current = 0
        self._limit = limit

    def __iter__(self):
        return self

    def __next__(self):
        if self._current >= self._limit:
            raise StopIteration
        value = self._current
        self._current += 1
        return value
```

`__iter__` must return the iterator object itself. `__next__` must return the next value or raise
`StopIteration` to signal exhaustion. There is no other sentinel value, no null convention, no
optional return. The exception is the signal -- this is a deliberate design choice that avoids
ambiguity between "the next value is `None`" and "there are no more values."

### How `for` Loops Consume the Protocol

A `for` loop is syntactic sugar over the iterator protocol. The statement:

```python
for item in iterable:
    process(item)
```

is mechanically equivalent to:

```python
iterator = iter(iterable)
while True:
    try:
        item = next(iterator)
    except StopIteration:
        break
    process(item)
```

This is not an approximation or simplification -- it is the literal translation that CPython
performs. The bytecode for a `for` loop consists of `GET_ITER` (calls `__iter__`), followed by a
loop of `FOR_ITER` (calls `__next__`) and `JUMP_BACK`. When `StopIteration` is raised, `FOR_ITER`
pops the iterator and jumps to the block after the loop.

The implications are significant:

1. **The `for` loop calls `iter()` on the target**, not `__iter__` directly. `iter()` tries
   `__iter__` first, then falls back to `__getitem__` with sequential integer indices starting
   from 0. This is why legacy sequence types that only define `__getitem__` still work in `for`
   loops.

2. **`StopIteration` is caught at the `for` level**, not inside your code. If you manually call
   `next()` inside a loop body and catch `StopIteration`, you will swallow the loop's own
   termination signal. This is a real bug pattern -- see Common Pitfalls.

3. **`break` does not call `close()` on the iterator.** Only `generator.close()` exists for
   generators; class-based iterators have no cleanup hook. This matters when iterators hold
   resources (file handles, network connections).

### `iter()` Built-in: Two Forms

The `iter()` built-in has two distinct call signatures with fundamentally different semantics:

```python
# Form 1: iter(iterable) -> iterator
# Calls __iter__ on the object, or falls back to __getitem__
numbers = [1, 2, 3]
it = iter(numbers)        # returns a list_iterator object
print(type(it))           # <class 'list_iterator'>

# Form 2: iter(callable, sentinel) -> iterator
# Calls callable repeatedly until it returns the sentinel
import random
die_rolls = iter(lambda: random.randint(1, 6), 1)  # stops when a 1 is rolled
```

The two-argument form is less well-known but genuinely useful for reading from file descriptors,
polling APIs, or any situation where you have a function that produces values until some condition
is met. The callable must take zero arguments.

```python
import os

def _read_lines(fd):
    line = os.read(fd, 4096).decode("utf-8")
    return line if line else ""

lines = iter(lambda: _read_lines(fd), "")
for line in lines:
    print(line, end="")
```

### Iterables vs Iterators: The Critical Distinction

An **iterable** is any object that implements `__iter__` returning a _new_ iterator each time it is
called. An **iterator** is any object that implements both `__iter__` (returning `self`) and
`__next__`. Every iterator is an iterable, but not every iterable is an iterator.

```python
class FibonacciIterable:
    """An iterable that produces fresh Fibonacci iterators on each call to __iter__."""

    def __init__(self, limit: int):
        self._limit = limit

    def __iter__(self):
        return FibonacciIterator(self._limit)


class FibonacciIterator:
    """An iterator for the Fibonacci sequence."""

    def __init__(self, limit: int):
        self._limit = limit
        self._a, self._b = 0, 1
        self._count = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self._count >= self._limit:
            raise StopIteration
        value = self._a
        self._a, self._b = self._b, self._a + self._b
        self._count += 1
        return value
```

The reason `__iter__` on an iterator returns `self` is not arbitrary. The `for` loop calls `iter()`
on the object to get an iterator. If the object is already an iterator, `iter()` should return it
unchanged so that iteration resumes from the current position rather than starting over. If
`__iter__` on an iterator returned a _new_ iterator, the `for` loop would never make progress -- it
would get a fresh iterator on each iteration attempt.

For iterables (non-iterators), `__iter__` must return a _new_ iterator each time so that multiple
independent loops over the same object work correctly:

```python
fib = FibonacciIterable(5)

# These are independent iterators -- each starts from the beginning
for x in fib:
    print(x, end=" ")  # 0 1 1 2 3

for x in fib:
    print(x, end=" ")  # 0 1 1 2 3  (same output, because __iter__ returns a new iterator)
```

If `FibonacciIterable.__iter__` returned a shared mutable iterator, the second loop would produce
nothing because the first loop already consumed it.

**Rule of thumb:** if your class maintains iteration state (index, cursor, counter), split it into
an iterable (the factory) and an iterator (the stateful cursor). If you need a one-shot iterator, a
generator function is almost always simpler.

## Implementing Custom Iterators

### Range-Like Iterator

A practical example that mirrors `range()` behavior:

```python
class FloatRange:
    """Iterator over a range of floats with a configurable step."""

    def __init__(self, start: float, stop: float, step: float = 1.0):
        if step == 0:
            raise ValueError("step must not be zero")
        self._start = start
        self._stop = stop
        self._step = step

    def __iter__(self):
        return _FloatRangeIterator(self._start, self._stop, self._step)


class _FloatRangeIterator:
    def __init__(self, start: float, stop: float, step: float):
        self._current = start
        self._stop = stop
        self._step = step

    def __iter__(self):
        return self

    def __next__(self):
        if (self._step > 0 and self._current >= self._stop) or \
           (self._step < 0 and self._current <= self._stop):
            raise StopIteration
        value = self._current
        self._current += self._step
        return value


for f in FloatRange(0.0, 1.0, 0.2):
    print(f"{f:.1f}", end=" ")
# Output: 0.0 0.2 0.4 0.6 0.8
```

Note the floating-point issue: due to IEEE 754 accumulation error, the last value may not land
exactly on the stop boundary. This is why `range()` only supports integers. For production use,
consider using `count` and `takewhile` from `itertools`, or the `more_itertools.numeric_range`
function.

### The StopIteration Contract

`StopIteration` inherits directly from `Exception`, not `BaseException`. This means it can be caught
by bare `except Exception:` clauses, which is a source of subtle bugs. PEP 479 (Python 3.7+)
addresses the related issue of `StopIteration` leaking from generator internals -- now, if a
generator raises `StopIteration`, it is automatically converted to `RuntimeError`.

```python
def broken_generator():
    """This will raise RuntimeError in Python 3.7+, not silently stop."""
    yield from [1, 2, 3]
    raise StopIteration  # BUG: converted to RuntimeError by PEP 479
```

The lesson: never raise `StopIteration` manually in generator functions. Let the `return` statement
or function exit handle it.

### Iterator Exhaustion

Once an iterator raises `StopIteration`, it is exhausted. Subsequent calls to `next()` will raise
`StopIteration` again immediately:

```python
it = iter([1, 2, 3])
list(it)   # [1, 2, 3]
list(it)   # []  -- the iterator is exhausted, no values remain
next(it)   # raises StopIteration
```

There is no `reset()` method on iterators. This is by design -- iterators model a single pass over a
sequence. If you need to iterate multiple times, either: (a) re-create the iterable (call `__iter__`
again on the factory), (b) materialize the values into a list/tuple, or (c) use `itertools.tee()` to
create independent copies (at the cost of memory proportional to the distance between the slowest
and fastest consumer).

## Generator Functions

### The `yield` Keyword

A generator function is any function that contains the `yield` keyword in its body. When called, it
does not execute the function body. Instead, it returns a **generator object** -- a specific type of
iterator that suspends and resumes execution.

```python
def count_to(n: int):
    """A generator that yields integers from 0 to n-1."""
    print("Generator created, about to start yielding")
    i = 0
    while i < n:
        print(f"About to yield {i}")
        yield i
        print(f"Resumed after yielding {i}")
        i += 1
    print("Generator exhausted")


gen = count_to(3)       # Nothing is printed yet -- the function body has NOT run
print(type(gen))        # <class 'generator'>

print(next(gen))
# "Generator created, about to start yielding"
# "About to yield 0"
# 0

print(next(gen))
# "Resumed after yielding 0"
# "About to yield 1"
# 1

print(next(gen))
# "Resumed after yielding 1"
# "About to yield 2"
# 2

next(gen)
# "Resumed after yielding 2"
# "Generator exhausted"
# raises StopIteration
```

The execution model is critical to understand. The generator function's body is compiled into a
frame object (a code execution frame, the same mechanism Python uses for function call stacks). When
`next(gen)` is called, CPython resumes execution of the frame from where it last suspended, executes
until it hits the next `yield`, saves the frame state (local variables, instruction pointer, stack),
and returns the yielded value. This is not threading or coroutines in the async sense -- it is
cooperative multitasking within a single thread, controlled entirely by explicit `next()` calls.

### How Generators Differ from Regular Functions

| Property                   | Regular Function        | Generator Function           |
| -------------------------- | ----------------------- | ---------------------------- |
| Returns                    | A value (or `None`)     | A generator object           |
| Body execution             | Runs to completion      | Runs lazily, paused at yield |
| State                      | Lost on return          | Preserved between yields     |
| Multiple return values     | Use tuple/list          | Multiple `yield` statements  |
| Memory for large sequences | O(n) in caller's memory | O(1) -- one value at a time  |

The generator object itself is lightweight -- it holds a reference to the code object and the
current frame. The memory cost is proportional to the number of local variables in the generator
function, not the number of values it will eventually produce.

### `return` in Generators

A generator function can contain a `return` statement. Unlike regular functions, `return` in a
generator cannot return a value to the caller (in the usual sense). Instead, it causes
`StopIteration` to be raised, and the return value is stored as the `.value` attribute of the
`StopIteration` exception:

```python
def first_n_evens(n: int):
    for i in range(n):
        yield i * 2
    return f"Generated {n} even numbers"


gen = first_n_evens(3)
print(list(gen))  # [0, 2, 4]

# The return value is only accessible by catching StopIteration
gen = first_n_evens(3)
try:
    while True:
        next(gen)
except StopIteration as e:
    print(e.value)  # "Generated 3 even numbers"
```

In practice, the return value from a generator is rarely used directly by callers. Its primary
purpose is to communicate a result when using `yield from` for delegation -- the sub-generator's
return value becomes the value of the `yield from` expression in the delegating generator.

## Generator Expressions

### Syntax and Semantics

A generator expression has the same syntax as a list comprehension, but uses parentheses instead of
square brackets:

```python
# List comprehension -- materializes the entire list in memory
squares_list = [x ** 2 for x in range(1_000_000)]
# Memory: ~8 MB (1M int objects)

# Generator expression -- produces values on demand
squares_gen = (x ** 2 for x in range(1_000_000))
# Memory: ~200 bytes (the generator object itself)
```

The generator expression compiles to a code object that is a first-class iterator. It supports
`__iter__` (returning self) and `__next__` (producing the next value or raising `StopIteration`). It
does not support indexing, `len()`, or multiple passes.

### When to Use Which

Use a generator expression when:

- The sequence is large or infinite
- You only need to consume the values once (e.g., passing to `sum()`, `max()`, `any()`)
- You are chaining transformations (the intermediate results don't need to exist simultaneously)

Use a list comprehension when:

- You need random access (`seq[42]`)
- You need the length (`len(seq)`)
- You need to iterate multiple times
- The sequence is small (the overhead of a generator object exceeds the memory cost)

```python
# Generator expression is correct here -- sum() consumes the iterator once
total = sum(x * x for x in range(1_000_000))

# List comprehension is correct here -- we need random access
matrix = [[i * j for j in range(10)] for i in range(10)]
print(matrix[5][7])

# Generator expression is correct for chaining -- no intermediate lists
result = max(
    int(line.strip())
    for line in open("numbers.txt")
    if line.strip().isdigit()
)
```

### Parentheses Optimization

When a generator expression is the sole argument to a function, you can omit the extra parentheses:

```python
# These are equivalent:
sum((x ** 2 for x in range(100)))
sum(x ** 2 for x in range(100))
```

This is a syntactic convenience, not a semantic difference. The parser recognizes that a single
generator expression argument does not need an additional layer of parentheses. Note that this only
applies when the generator expression is the _only_ argument:

```python
# Two arguments -- parentheses required around the generator expression
sorted((x ** 2 for x in range(100)), reverse=True)

# This is a syntax error:
# sorted(x ** 2 for x in range(100), reverse=True)
# The parser interprets it as: sorted(x**2 for x in range(100, reverse=True))
```

## `yield from` (Delegation)

### Basic Delegation

`yield from` delegates to a sub-generator. Instead of manually iterating and re-yielding each value:

```python
# Manual delegation -- verbose and loses send/throw/close forwarding
def chain(*iterables):
    for it in iterables:
        for item in it:
            yield item

# yield from -- concise and transparent
def chain(*iterables):
    for it in iterables:
        yield from it
```

Both produce the same sequence of values, but `yield from` does more than the manual loop. It
establishes a **transparent, bidirectional channel** between the caller and the sub-generator.

### The Full Semantics of `yield from`

The expression `result = yield from subgen()` is roughly equivalent to the following (from PEP 380,
the formal specification):

```python
_i = iter(subgen())
try:
    _y = next(_i)
except StopIteration as _e:
    _r = _e.value
else:
    while True:
        try:
            _s = yield _y
        except GeneratorExit as _e:
            try:
                _i.close()
            except:
                pass
            raise
        except BaseException as _e:
            _x = _e
            try:
                _y = _i.throw(type(_x), _x, _x.__traceback__)
            except StopIteration as _e:
                _r = _e.value
                break
        else:
            try:
                if _s is None:
                    _y = next(_i)
                else:
                    _y = _i.send(_s)
            except StopIteration as _e:
                _r = _e.value
                break
result = _r
```

What this means in practice:

1. **Every `yield` from the sub-generator is transparently passed to the caller.** The delegating
   generator acts as a pipe.

2. **`send()` values are forwarded to the sub-generator.** If the caller does `gen.send(value)`,
   that value goes directly to the sub-generator's current `yield` expression, not to the delegating
   generator.

3. **`throw()` exceptions are forwarded to the sub-generator.** If the caller does
   `gen.throw(ValueError)`, the sub-generator receives the exception at its current yield point.

4. **`close()` is forwarded.** Calling `gen.close()` calls `subgen.close()`.

5. **The return value of the sub-generator becomes the value of the `yield from` expression.** This
   is the mechanism for getting a result back from a delegated computation.

### Practical Example: Recursive Tree Traversal

```python
class TreeNode:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    def __repr__(self):
        return f"TreeNode({self.value})"


def inorder_traversal(node):
    """Recursive inorder traversal using yield from."""
    if node is None:
        return
    yield from inorder_traversal(node.left)
    yield node.value
    yield from inorder_traversal(node.right)


# Build a tree:
#       4
#      / \
#     2   6
#    / \ / \
#   1  3 5  7
root = TreeNode(4,
    TreeNode(2, TreeNode(1), TreeNode(3)),
    TreeNode(6, TreeNode(5), TreeNode(7)),
)

print(list(inorder_traversal(root)))  # [1, 2, 3, 4, 5, 6, 7]
```

Each recursive call to `inorder_traversal` creates a new generator object, and `yield from`
delegates to it. The call stack depth is bounded by the tree depth, but the number of generator
objects in existence at any time equals the tree depth (not the total number of nodes). Each
generator object holds only its own local state.

### Flattening Nested Iterables

```python
def flatten(nested):
    """Flatten an arbitrarily nested structure of iterables."""
    for item in nested:
        if isinstance(item, (list, tuple)):
            yield from flatten(item)
        else:
            yield item


data = [1, [2, 3, [4, 5]], 6, [7, [8, [9]]]]
print(list(flatten(data)))  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## `send()` and `throw()`

### Coroutine Heritage

Generators in Python predate `async`/`await` by over a decade. Before PEP 492 (Python 3.5),
generators were the only mechanism for coroutine-like behavior. The `send()`, `throw()`, and
`close()` methods on generator objects exist because generators were originally designed to serve as
coroutines.

While modern Python uses `async def` for asynchronous coroutines, the generator-based coroutine
protocol is still fully functional and has legitimate use cases in synchronous code: state machines,
pipeline processing, and dataflow programming.

### `send(value)`: Injecting Values into a Generator

When `yield` is used as an expression (on the right side of an assignment), it receives the value
passed to `send()`:

```python
def accumulator():
    """A running accumulator that receives values via send()."""
    total = 0
    while True:
        received = yield total
        if received is None:
            break
        total += received
    return total


gen = accumulator()

# Priming the generator: must call next() (or gen.send(None)) first
# to advance to the first yield
print(next(gen))        # 0  (total is 0, yields it, suspends)

print(gen.send(10))     # 10 (received=10, total=10, yields 10)
print(gen.send(20))     # 30 (received=20, total=30, yields 30)
print(gen.send(5))      # 35 (received=5,  total=35, yields 35)

# Send None to break out of the loop
try:
    gen.send(None)
except StopIteration as e:
    print(f"Final total: {e.value}")  # Final total: 35
```

The "priming" step is mandatory. When a generator is first created, execution begins at the top of
the function body and runs until the first `yield`. At that point, the generator is suspended and
the yielded value is returned. You cannot `send()` a non-`None` value until the generator has
reached its first `yield` because there is no `yield` expression to receive the value. This is why
`next(gen)` is equivalent to `gen.send(None)` -- both advance the generator to the first yield.

### `throw()`: Injecting Exceptions

`gen.throw(type, value=None, traceback=None)` causes the `yield` expression inside the generator to
raise the specified exception. This allows the caller to signal error conditions or state
transitions to the generator:

```python
def stateful_processor():
    """A generator that processes values and handles reset signals."""
    buffer = []
    while True:
        try:
            item = yield
            if item is not None:
                buffer.append(item)
        except ResetSignal:
            buffer.clear()
            print("Buffer reset")
        except EndSignal:
            yield buffer[:]  # yield the final buffer
            break


class ResetSignal(Exception):
    pass


class EndSignal(Exception):
    pass


gen = stateful_processor()
next(gen)               # prime

gen.send("a")
gen.send("b")
gen.throw(ResetSignal)  # prints "Buffer reset"
gen.send("c")

result = gen.throw(EndSignal)
print(result)           # ['c']
```

### `close()` for Cleanup

`gen.close()` causes a `GeneratorExit` exception to be raised at the current `yield` point. If the
generator catches `GeneratorExit`, it must re-raise it (or raise `StopIteration`) -- it is not
allowed to yield another value. This is the mechanism that `with` statements and `for` loops use to
clean up generators when they are abandoned:

```python
def resource_holder():
    try:
        resource = acquire_resource()
        print("Resource acquired")
        while True:
            yield resource
    finally:
        release_resource()
        print("Resource released")


gen = resource_holder()
next(gen)       # "Resource acquired", yields resource
gen.close()     # "Resource released"
```

The `finally` block is guaranteed to run whether the generator is closed, exhausted, or garbage
collected (assuming the garbage collector eventually runs). This is the recommended pattern for
resource management in generators.

### The `@generator` Decorator Pattern

To avoid the priming boilerplate (calling `next()` before `send()`), a common pattern is a decorator
that auto-primes the generator:

```python
from functools import wraps

def auto_prime(generator_func):
    """Decorator that auto-primes a generator, eliminating the need for an initial next() call."""
    @wraps(generator_func)
    def wrapper(*args, **kwargs):
        gen = generator_func(*args, **kwargs)
        next(gen)
        return gen
    return wrapper


@auto_prime
def running_average():
    """Maintains a running average, receiving new values via send()."""
    total = 0.0
    count = 0
    average = 0.0
    while True:
        new_value = yield average
        if new_value is None:
            break
        total += new_value
        count += 1
        average = total / count
    return average


avg = running_average()
print(avg.send(10))  # 10.0
print(avg.send(20))  # 15.0
print(avg.send(30))  # 20.0
```

## Lazy Evaluation Patterns

### Processing Infinite Sequences

The core advantage of generators is that they decouple the _description_ of a sequence from its
_materialization_. You can define a sequence with infinite extent and only realize as many elements
as needed:

```python
def natural_numbers():
    """The infinite sequence 0, 1, 2, 3, ..."""
    n = 0
    while True:
        yield n
        n += 1


def fibonacci():
    """The infinite Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, ..."""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


def primes():
    """Infinite prime number generator using trial division."""
    composites = {}  # maps composite -> list of primes that generate it
    q = 2
    while True:
        if q not in composites:
            yield q
            composites[q * q] = [q]
        else:
            for p in composites[q]:
                composites.setdefault(p + q, []).append(p)
            del composites[q]
        q += 1


from itertools import islice

print(list(islice(natural_numbers(), 5)))   # [0, 1, 2, 3, 4]
print(list(islice(fibonacci(), 10)))         # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
print(list(islice(primes(), 10)))            # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

The prime sieve above is an incremental version of the Sieve of Eratosthenes, sometimes called the
"incremental sieve" or "O'Neill sieve." It maintains a dictionary of known composite numbers and
their generating primes, avoiding the memory cost of a full boolean sieve array. Its time complexity
is approximately $O(n \log \log n)$ for generating all primes up to $n$, matching the classical
sieve, but its constant factor is higher due to dictionary overhead.

### Pipeline Processing (ETL)

Generators compose naturally into pipelines. Each stage is a generator that consumes from its input
and produces values for its output. Memory usage is bounded by the size of one item at each stage,
not the total size of the data:

```python
import re
from typing import Iterator

LOG_PATTERN = re.compile(
    r'(?P<ip>\S+) \S+ \S+ \[(?P<timestamp>[^\]]+)\] '
    r'"(?P<method>\S+) (?P<path>\S+) \S+" (?P<status>\d+) (?P<size>\d+)'
)


def read_lines(filepath: str) -> Iterator[str]:
    """Read a file line by line without loading it all into memory."""
    with open(filepath) as f:
        for line in f:
            yield line.rstrip("\n")


def filter_errors(lines: Iterator[str]) -> Iterator[str]:
    """Keep only lines with HTTP 5xx status codes."""
    for line in lines:
        match = LOG_PATTERN.search(line)
        if match and match.group("status").startswith("5"):
            yield line


def extract_paths(lines: Iterator[str]) -> Iterator[str]:
    """Extract the URL path from each log line."""
    for line in lines:
        match = LOG_PATTERN.search(line)
        if match:
            yield match.group("path")


def count_distinct(paths: Iterator[str]) -> dict[str, int]:
    """Count occurrences of each distinct path."""
    counts: dict[str, int] = {}
    for path in paths:
        counts[path] = counts.get(path, 0) + 1
    return counts


pipeline = count_distinct(extract_paths(filter_errors(read_lines("access.log"))))
print(pipeline)
```

This pipeline processes a multi-gigabyte log file using constant memory (plus the final dictionary
of distinct error paths). Each line flows through the pipeline one at a time -- there is no
intermediate list of all error lines, no intermediate list of all paths. This is the fundamental
benefit of lazy evaluation: **composition without materialization**.

### When Laziness Matters

- **Large files.** A 100 GB CSV file cannot be read into memory. A generator that reads one row at a
  time can process it on a machine with 8 GB of RAM.
- **Network streams.** Data arriving over a socket or HTTP connection is inherently streaming.
  Generators model this naturally.
- **Combinatorial explosion.** The set of all subsets of a 30-element set has $2^{30} \approx 10^9$
  elements. You cannot materialize it, but a generator can produce and consume subsets one at a
  time.
- **Early termination.** `any()` and `all()` short-circuit. `next()` stops after one element. If you
  are searching for the first matching element in a large sequence, a generator lets you stop as
  soon as you find it.

### Tradeoffs: Lazy vs Eager

| Aspect          | Lazy (Generator)                | Eager (List)                    |
| --------------- | ------------------------------- | ------------------------------- |
| Memory          | O(1) per item                   | O(n) total                      |
| Startup cost    | Negligible                      | Full materialization before use |
| Random access   | Not supported                   | O(1) indexing                   |
| Length          | Unknown (no `len()`)            | O(1) via `len()`                |
| Multiple passes | Requires re-creation or `tee()` | Unlimited                       |
| Debugging       | Harder -- state is implicit     | Easier -- data is inspectable   |
| Exceptions      | Delayed until consumption       | Immediate during construction   |

## Generator-Based State Machines

### Yield as a State Transition

A generator function naturally models a state machine because `yield` points are suspension points
where the generator waits for input. The function's local variables serve as the state, and each
`yield` expression receives the next input event. The control flow between yields defines the
transitions.

### Example: A Simple Protocol Parser

```python
def http_response_parser():
    """Parse an HTTP response incrementally using a coroutine state machine.

    Protocol:
    1. Receive the status line (e.g., "HTTP/1.1 200 OK")
    2. Receive headers (each as "Key: Value", terminated by empty line)
    3. Receive body lines
    4. Send "DONE" to finalize

    Yields tuples of (stage, data) for each parsed component.
    """
    status_line = yield ("status", None)
    headers: dict[str, str] = {}
    while True:
        line = yield ("header", None)
        if line == "":
            break
        key, _, value = line.partition(":")
        headers[key.strip()] = value.strip()

    body_lines: list[str] = []
    while True:
        line = yield ("body", None)
        if line == "DONE":
            break
        body_lines.append(line)

    return {"status": status_line, "headers": headers, "body": "\n".join(body_lines)}


parser = http_response_parser()
next(parser)  # prime: ("status", None)

# Feed the status line
stage, _ = parser.send("HTTP/1.1 200 OK")
print(stage)  # "header"

# Feed headers
parser.send("Content-Type: text/plain")
parser.send("Content-Length: 13")
parser.send("")  # empty line terminates headers

# Feed body
stage, _ = parser.send("Hello, World!")
stage, _ = parser.send("DONE")

try:
    parser.send(None)
except StopIteration as e:
    import json
    print(json.dumps(e.value, indent=2))
# {
#   "status": "HTTP/1.1 200 OK",
#   "headers": {
#     "Content-Type": "text/plain",
#     "Content-Length": "13"
#   },
#   "body": "Hello, World!"
# }
```

### Example: Tokenizer

```python
def simple_tokenizer():
    """A coroutine-based tokenizer that yields (type, value) pairs.

    Feeds in source text line by line via send().
    Yields tokens as they are recognized.
    """
    while True:
        line = yield None
        if line is None:
            break

        i = 0
        while i < len(line):
            ch = line[i]
            if ch.isspace():
                i += 1
            elif ch.isdigit():
                j = i
                while j < len(line) and line[j].isdigit():
                    j += 1
                yield ("NUMBER", line[i:j])
                i = j
            elif ch.isalpha() or ch == "_":
                j = i
                while j < len(line) and (line[j].isalnum() or line[j] == "_"):
                    j += 1
                yield ("IDENT", line[i:j])
                i = j
            elif ch in "+-*/=":
                yield ("OP", ch)
                i += 1
            elif ch == "#":
                break
            else:
                yield ("UNKNOWN", ch)
                i += 1


# Usage:
tok = simple_tokenizer()
next(tok)  # prime
print(tok.send("count = 42"))
# This sends one line; the generator yields None because it doesn't
# yield tokens during send() -- tokens are yielded on subsequent next() calls.
# For a more practical design, see the state machine parser above.
```

The tokenizer accumulates tokens into a buffer and yields them as the caller requests. In a real
implementation, you would yield tokens as they are found rather than buffering, but this pattern
demonstrates the core idea: the generator's position in the function body encodes the current state
of the parsing process.

## itertools Consumption Patterns

For a full reference to the `itertools` module, see
[Essential Modules](../05-standard-library/01-essential-modules.md).

### Built-in Consumers

Most built-in functions that accept iterables will consume a generator:

```python
gen = (x ** 2 for x in range(10))

list(gen)     # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
# gen is now exhausted

gen = (x ** 2 for x in range(10))
tuple(gen)    # (0, 1, 4, 9, 16, 25, 36, 49, 64, 81)

gen = (x ** 2 for x in range(10))
set(gen)      # {0, 1, 64, 4, 36, 9, 16, 49, 81, 25}

gen = ((x, x ** 2) for x in range(5))
dict(gen)     # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

gen = (x for x in range(10))
max(gen)      # 9

gen = (x for x in range(10))
min(gen)      # 0

gen = (x for x in range(10))
sum(gen)      # 45

gen = (x for x in range(10))
any(gen)      # True (0 is falsy, but 1 is truthy)

gen = (x for x in range(10))
all(gen)      # False (0 is falsy)

gen = (x for x in range(10, 0, -1))
sorted(gen)   # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### `collections.deque` with `maxlen`

A `deque` with a `maxlen` is an efficient way to peek at or consume a fixed number of items from a
generator without materializing the entire sequence:

```python
from collections import deque

gen = (x for x in range(1_000_000))

# Get the first 5 items
first_five = deque(gen, maxlen=5)
first_five.extend(gen)  # won't work -- gen is already consumed by the deque init

# Correct approach: use islice
from itertools import islice

gen = (x for x in range(1_000_000))
first_five = list(islice(gen, 5))  # [0, 1, 2, 3, 4]
# gen is now positioned at item 5 -- you can continue consuming it
next_five = list(islice(gen, 5))   # [5, 6, 7, 8, 9]
```

For a single-pass peek at the head of a generator, use `itertools.tee`:

```python
from itertools import tee, islice

def peek(iterable, n=1):
    """Return (peeked_items, restored_iterator) without fully consuming the original."""
    peeked, rest = tee(iterable)
    peeked_items = list(islice(peeked, n))
    return peeked_items, rest
```

### itertools Functions as Consumers

```python
from itertools import islice, chain, takewhile, dropwhile

# islice: take a slice without materializing the whole generator
gen = (x ** 2 for x in range(1_000_000))
print(list(islice(gen, 5, 10)))  # [25, 36, 49, 64, 81]

# chain: concatenate multiple iterables lazily
gen1 = (x for x in range(3))
gen2 = (x for x in range(3, 6))
print(list(chain(gen1, gen2)))   # [0, 1, 2, 3, 4, 5]

# takewhile / dropwhile: conditional consumption
gen = (x for x in range(20))
print(list(takewhile(lambda x: x < 5, gen)))  # [0, 1, 2, 3, 4]

gen = (x for x in range(20))
print(list(dropwhile(lambda x: x < 5, gen)))  # [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
```

## When to Use Generators vs Lists

### Decision Framework

Ask these questions in order:

1. **Is the sequence finite and small?** If yes, a list is simpler and more debuggable. Don't
   over-engineer with generators for a 10-element sequence.

2. **Do you need random access (`seq[i]`)?** If yes, you must use a list (or `tuple`). Generators do
   not support indexing.

3. **Do you need `len()`?** If yes, you must use a list. Generators have unknown length.

4. **Do you need to iterate multiple times?** If yes, use a list. Re-creating a generator requires
   re-executing the function that produced it, which may have side effects or be expensive.

5. **Is the sequence large or potentially infinite?** If yes, you must use a generator. A list would
   exhaust memory.

6. **Are you chaining transformations?** If yes, generators compose better. Each stage produces
   values on demand, so intermediate results are never all in memory simultaneously.

7. **Do you need to inspect intermediate results for debugging?** If yes, a list lets you print or
   log the entire intermediate state. With generators, you must materialize at each stage.

### Converting Between Them

```python
# Generator to list: materialize
gen = (x ** 2 for x in range(100))
lst = list(gen)  # [0, 1, 4, 9, 16, ...]

# List to generator: wrap in a generator expression or use iter()
lst = [1, 2, 3, 4, 5]
gen = (x for x in lst)  # generator expression
gen = iter(lst)          # iterator (not a generator object, but behaves the same)

# Generator to tuple: materialize
gen = (x for x in range(5))
t = tuple(gen)  # (0, 1, 2, 3, 4)
```

`iter(lst)` returns a `list_iterator`, which is not a generator object but satisfies the same
iterator protocol. The distinction is rarely important in practice, but it matters for `isinstance`
checks: `isinstance(iter([]), collections.abc.Generator)` returns `False`, while
`isinstance((x for x in []), collections.abc.Generator)` returns `True`.

### When Generators Are Inappropriate

```python
# BAD: using a generator where random access is needed
gen = (x ** 2 for x in range(100))
print(gen[50])  # TypeError: 'generator' object is not subscriptable

# BAD: using a generator where length is needed
gen = (x for x in range(100))
print(len(gen))  # TypeError: object of type 'generator' has no len()

# BAD: using a generator where multiple passes are needed
gen = (x for x in range(100))
for x in gen:
    pass
for x in gen:
    pass  # this loop body never executes -- gen is exhausted

# BAD: using a generator where JSON serialization is needed
import json
gen = (x for x in range(10))
json.dumps(gen)  # TypeError: Object of type generator is not JSON serializable

# GOOD: materialize first
json.dumps(list(gen))
```

## Common Pitfalls

### Consuming a Generator Exhausts It

This is the single most common mistake with generators. A generator can only be iterated once:

```python
def get_items():
    """Expensive computation -- we don't want to run it twice."""
    for i in range(5):
        yield i

gen = get_items()

print(list(gen))  # [0, 1, 2, 3, 4]
print(list(gen))  # []  -- exhausted, nothing to iterate

# Fix: materialize once, then use the list
items = list(get_items())
print(list(items))  # [0, 1, 2, 3, 4]
print(list(items))  # [0, 1, 2, 3, 4]

# Fix: use itertools.tee if you need independent iterators
from itertools import tee
gen1, gen2 = tee(get_items())
print(list(gen1))  # [0, 1, 2, 3, 4]
print(list(gen2))  # [0, 1, 2, 3, 4]
# But note: tee() buffers values internally. If gen1 advances far ahead of gen2,
# the buffered values consume memory proportional to the gap.
```

### `return value` Semantics in Generators

The return value of a generator is stored in `StopIteration.value`, which is inaccessible through
normal iteration:

```python
def compute():
    yield 1
    yield 2
    return "done"


gen = compute()
print(list(gen))  # [1, 2]  -- the return value is silently discarded

# The return value is only accessible via yield from or manual StopIteration handling
def delegator():
    result = yield from compute()
    print(f"Sub-generator returned: {result}")


list(delegator())  # prints "Sub-generator returned: done", returns [None]
```

This is not a bug -- it is by design. The `for` loop and `list()` constructor only care about the
yielded values. If you need the return value, use `yield from` (which captures it) or catch
`StopIteration` explicitly.

### Using Generators Where Lists Are Needed

Functions that inspect their arguments for length, indexing, or multiple passes will fail silently
or raise confusing errors when given generators:

```python
def process_items(items):
    """This function assumes items is a list."""
    n = len(items)          # TypeError if items is a generator
    middle = items[n // 2]  # TypeError if items is a generator
    for item in items:      # works, but consumes the generator
        pass
    for item in items:      # empty loop -- generator is exhausted
        pass

# Fix: document the contract, or accept any iterable and convert internally
def process_items(items):
    items = list(items)  # materialize once, then work with the list
    n = len(items)
    middle = items[n // 2]
    ...
```

### `yield from` and `send()` Interaction

When using `yield from` to delegate, `send()` calls from the outer caller go to the
**sub-generator**, not to the delegating generator. This is the transparent forwarding behavior, but
it can be surprising:

```python
def inner():
    val = yield "inner: waiting"
    yield f"inner: received {val}"


def outer():
    result = yield from inner()
    yield f"outer: inner returned {result}"


gen = outer()
print(next(gen))          # "inner: waiting"  (priming)
print(gen.send("hello"))  # "inner: received hello"  -- went to inner, NOT outer
print(next(gen))          # "outer: inner returned None"  (inner's return value was None)
```

The `send("hello")` value is received by the `yield` expression inside `inner()`, not by the
`yield from` in `outer()`. The delegating generator is completely transparent during the delegation
-- it suspends and lets the sub-generator interact directly with the caller.

### Generator Expression Variable Scope

In Python 2, the loop variable in a list comprehension or generator expression leaked into the
enclosing scope. This was fixed in Python 3, where both list comprehensions and generator
expressions have their own scope:

```python
# Python 3: the variable 'x' does NOT leak
result = [x ** 2 for x in range(10)]
print(x)  # NameError: name 'x' is not defined

# Python 3: generator expressions also have their own scope
gen = (x ** 2 for x in range(10))
print(x)  # NameError: name 'x' is not defined
```

However, there is a subtlety with generator expressions and late binding in lambdas:

```python
# BUG: all lambdas capture the same variable, which ends at its final value
funcs = [lambda: x for x in range(5)]
print([f() for f in funcs])  # [4, 4, 4, 4, 4]

# FIX: bind x with a default argument
funcs = [lambda x=x: x for x in range(5)]
print([f() for f in funcs])  # [0, 1, 2, 3, 4]
```

This is not specific to generator expressions -- it affects list comprehensions too. The issue is
that closures capture variables by reference, not by value. The lambda closes over `x`, and by the
time any lambda is called, the loop has finished and `x` is 4.

### Uncaught Exceptions and Generator Cleanup

If an exception propagates out of a generator (other than `StopIteration` and `GeneratorExit`), the
generator's `finally` blocks still execute, but any cleanup code that depends on the generator's
internal state may be in an inconsistent condition:

```python
import contextlib

@contextlib.contextmanager
def db_transaction(connection):
    tx = connection.begin_transaction()
    try:
        yield tx
    except Exception:
        tx.rollback()
        raise
    else:
        tx.commit()


# This works correctly -- contextmanager ensures cleanup
with db_transaction(conn) as tx:
    tx.execute("INSERT INTO ...")
    # If an exception occurs here, rollback() is called automatically


# This is dangerous -- generator cleanup depends on GC
def unsafe_file_reader(path):
    f = open(path)
    try:
        for line in f:
            yield line.strip()
    finally:
        f.close()

# If the consumer abandons the generator without closing it, the file stays open
# until the generator is garbage collected. Use a context manager instead:

def safe_file_reader(path):
    with open(path) as f:
        for line in f:
            yield line.strip()
```

**Always use `with` statements inside generators for resource management.** The `finally` block runs
on generator close, but relying on the consumer to call `close()` is fragile. Wrapping the resource
in a `with` statement ensures cleanup happens at the right time regardless of how the generator is
consumed.

For more on `contextlib.contextmanager`, see
[Essential Modules](../05-standard-library/01-essential-modules.md).
