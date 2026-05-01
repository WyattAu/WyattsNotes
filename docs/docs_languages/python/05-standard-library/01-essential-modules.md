---
title: Essential Modules
description:
  "Essential Modules — `os` and `pathlib`: File System Operations; The Case for `pathlib` Over `os.path`; When `os` Is Still Needed."
date: 2025-06-04T14:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: essential-modules
---

## `os` and `pathlib`: File System Operations

### The Case for `pathlib` Over `os.path`

The `os.path` module is a collection of free functions that operate on path strings. It was designed
in an era before Python had a coherent object model for paths. `pathlib` (Python 3.4+) replaces this
with an object-oriented API where a `Path` instance represents a single filesystem path.

The argument for `pathlib` is not aesthetic preference. It is about **composability** and
**correctness**:

1. **Method chaining.** `os.path` requires you to thread a string through successive function calls:
   `os.path.join(os.path.dirname(os.path.abspath(p)), 'config.json')`. The equivalent `Path`
   expression is `Path(p).resolve().parent / 'config.json'`. The `/` operator is overloaded on
   `PurePosixPath` and `PureWindowsPath` to join path components, which reads as natural composition
   rather than nested function calls.

2. **No silent truncation.** `os.path.join('/etc', '/var')` returns `/var` -- an absolute second
   argument silently discards the first. `Path('/etc') / '/var'` raises no error but returns
   `PosixPath('/var')`. Both are surprising, but `pathlib` at least provides a single consistent
   type (`PosixPath` or `WindowsPath`) whose semantics are visible in the type.

3. **Uniform access to filesystem operations.** `os.path` only handles path manipulation. Actual I/O
   (reading, writing, stat, mkdir, glob) requires importing `os`, `shutil`, `glob`, `stat`, and
   others. `Path` objects carry methods for all of these: `.read_text()`, `.write_text()`,
   `.stat()`, `.mkdir()`, `.glob()`, `.rename()`, `.unlink()`.

4. **Cross-platform correctness.** `os.path` relies on the host operating system to determine
   separator behavior. `pathlib` exposes `PurePosixPath` and `PureWindowsPath` for explicit control
   when you need to manipulate paths for a different platform (e.g., generating URLs on a Linux
   server that target Windows).

```python
from pathlib import Path

config_dir = Path.home() / ".config" / "myapp"
config_dir.mkdir(parents=True, exist_ok=True)

config_file = config_dir / "settings.json"
config_file.write_text('{"theme": "dark"}')

content = config_file.read_text()
print(config_file.exists())       # True
print(config_file.stat().st_size) # byte count
print(config_file.suffix)         # '.json'
print(config_file.stem)           # 'settings'
```

### When `os` Is Still Needed

`pathlib` does not cover everything in the `os` module. The following still require `os` directly:

- `os.environ`: environment variables (`pathlib` has no equivalent).
- `os.chdir()`, `os.getcwd()`: changing and querying the current working directory.
- `os.walk()`: recursive directory traversal (though `Path.rglob()` covers most use cases).
- `os.umask()`, `os.getuid()`, `os.setsid()`: low-level process and permission operations.
- `os.path.expandvars()`, `os.path.expanduser()`: shell variable expansion (note: `Path` does expand
  `~` in constructors but not `$VAR`).

```python
import os

# These have no pathlib equivalent
pid = os.getpid()
env_home = os.environ.get("HOME", "/tmp")
os.chmod("/tmp/file.txt", 0o644)
```

### `os.path` Functions Still Worth Knowing

Even in new code, some `os.path` functions are unavoidable or more convenient than their `pathlib`
equivalents:

```python
import os.path

os.path.exists(p)         # Path(p).exists()
os.path.isfile(p)         # Path(p).is_file()
os.path.isdir(p)          # Path(p).is_dir()
os.path.getsize(p)        # Path(p).stat().st_size
os.path.abspath(p)        # Path(p).resolve()
os.path.basename(p)       # Path(p).name
os.path.dirname(p)        # Path(p).parent
os.path.join(a, b, c)     # Path(a) / b / c
os.path.splitext(p)       # Path(p).suffix, Path(p).stem
os.path.normpath(p)       # Path(p) (constructor normalizes)
```

### `Path` Parts and Components

```python
from pathlib import Path, PurePosixPath

p = PurePosixPath("/usr/local/bin/python3.12")

print(p.anchor)   # '/'
print(p.drive)    # ''
print(p.parts)    # ('/', 'usr', 'local', 'bin', 'python3.12')
print(p.parent)   # PurePosixPath('/usr/local/bin')
print(p.name)     # 'python3.12'
print(p.stem)     # 'python3.12'
print(p.suffix)   # '.12'
print(p.suffixes) # ['.12']
```

`PurePosixPath` and `PureWindowsPath` perform only string manipulation -- no filesystem access. This
is useful for constructing or parsing paths for remote systems.

## `sys`: Interpreter State

The `sys` module exposes the runtime environment: interpreter configuration, the module search path,
reference counting, and process-level control.

### `sys.argv`: Command-Line Arguments

`sys.argv` is a list of strings. `sys.argv[0]` is the script name (or `'-'` for stdin). Everything
after is a positional argument. It does not handle options, flags, or defaults -- for that, use
`argparse`.

```python
import sys

if len(sys.argv) != 3:
    print(f"Usage: {sys.argv[0]} <input> <output>", file=sys.stderr)
    sys.exit(1)

input_file, output_file = sys.argv[1], sys.argv[2]
```

### `sys.path`: Module Search Path

When you write `import foo`, Python searches for `foo` in the directories listed in `sys.path`. The
first match wins. The initial value is populated from:

1. The directory containing the script (or the current directory for interactive mode).
2. `PYTHONPATH` environment variable.
3. Installation-dependent defaults (site-packages).

```python
import sys

print(sys.path[:3])
# ['/home/user/project', '/usr/lib/python312.zip', '/usr/lib/python3.12']

# Temporarily prepend a directory
sys.path.insert(0, "/opt/custom_libs")
import mymodule  # found in /opt/custom_libs first
```

Modifying `sys.path` at runtime is fragile. For reproducible imports, use proper package
installation or `PYTHONPATH`. Mutating `sys.path` in library code is particularly dangerous because
it affects the global import state of the entire process.

### `sys.modules`: The Module Cache

`sys.modules` is a dictionary mapping module names to loaded module objects. The import system
checks this dictionary first -- if a module is already loaded, `import` returns the cached object
without re-executing the module's code.

```python
import sys
import json

print(sys.modules["json"])  # <module 'json' from '...'>
sys.modules["json"] = None  # breaks all subsequent json imports
```

This is occasionally useful for reloading modules during development or for testing, but modifying
`sys.modules` in production code is almost always a mistake.

### `sys.exit()`

`sys.exit()` raises `SystemExit`, which the interpreter catches at the top level to terminate the
process with the given exit code. Because it is an exception, it can be caught and handled --
`finally` blocks and context managers still execute.

```python
import sys

try:
    sys.exit(42)
except SystemExit as e:
    print(f"Caught exit with code: {e.code}")  # 42
# Process continues normally
```

This is why `sys.exit()` is preferred over `os._exit()`. `os._exit()` terminates the process
immediately without cleanup: no `finally` blocks, no `atexit` handlers, no buffer flushing.

## `json`: Serialization

### Encoding and Decoding

```python
import json

data = {"users": [{"name": "Alice", "active": True}, {"name": "Bob", "active": False}]}

serialized = json.dumps(data, indent=2, sort_keys=True)
deserialized = json.loads(serialized)

print(type(serialized))     # <class 'str'>
print(type(deserialized))   # <class 'dict'>
```

`json.dumps()` returns a string. `json.dump()` writes directly to a file object. The symmetric pair
is `json.loads()` (from string) and `json.load()` (from file object).

### Custom Encoders and Decoders

The `default` parameter of `json.dumps()` is a function called for objects that are not natively
serializable (i.e., not `dict`, `list`, `str`, `int`, `float`, `bool`, or `None`).

```python
from datetime import datetime, date
import json

def serialize_custom(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    if isinstance(obj, date):
        return obj.isoformat()
    if isinstance(obj, set):
        return sorted(obj)
    raise TypeError(f"Object of type {type(obj).__name__} is not JSON serializable")

data = {"created": datetime(2025, 6, 4, 14, 0), "tags": {"python", "stdlib"}}
print(json.dumps(data, default=serialize_custom, indent=2))
```

For more control, subclass `json.JSONEncoder` and override `default()`:

```python
class CustomEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return {"__type__": "datetime", "value": obj.isoformat()}
        return super().default(obj)

class CustomDecoder(json.JSONDecoder):
    def __init__(self, *args, **kwargs):
        super().__init__(object_hook=self._object_hook, *args, **kwargs)

    def _object_hook(self, dct):
        if dct.get("__type__") == "datetime":
            return datetime.fromisoformat(dct["value"])
        return dct
```

### JSON vs Pickle

| Property          | JSON                        | Pickle                                 |
| ----------------- | --------------------------- | -------------------------------------- |
| Format            | Text                        | Binary                                 |
| Language-agnostic | Yes                         | No (Python-only)                       |
| Security          | Safe for untrusted data     | **Never** untrusted data               |
| Supported types   | Primitives, dict, list, str | Almost any Python object               |
| Human-readable    | Yes                         | No                                     |
| Version-stable    | Yes (RFC 8259)              | No (protocol changes between versions) |

Pickle can serialize functions, classes, and object graphs with cycles. But `pickle.loads()` on
untrusted data is equivalent to arbitrary code execution -- the pickled byte stream can contain
instructions to call any callable, import any module, and execute arbitrary code. For data
interchange between systems or for storage that must survive Python version upgrades, JSON is the
only safe choice.

```python
import pickle

class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

tree = Node(1, Node(2), Node(3))
data = pickle.dumps(tree)
restored = pickle.loads(data)
print(restored.value)  # 1
print(restored.left.value)  # 2
```

## `re`: Regular Expressions

### Pattern Fundamentals

Python's `re` module uses a backtracking NFA engine. Patterns are compiled into bytecode that the
engine interprets. Compilation is the expensive step; matching is fast on the compiled pattern.

```python
import re

pattern = re.compile(r'\b(\w+)@(\w+)\.(\w+)\b')
match = pattern.search("Contact alice@example.com or bob@test.org")
print(match.group(0))  # 'alice@example.com'
print(match.group(1))  # 'alice'
print(match.group(2))  # 'example'
print(match.group(3))  # 'com'
print(match.groups())  # ('alice', 'example', 'com')
```

Always use raw strings (`r'...'`) for regex patterns. Without the raw prefix, `\b` is interpreted as
a backspace character, and `\d`, `\w`, `\s` are interpreted as escape sequences (some of which are
valid in Python strings, producing the wrong character in the regex).

### Named Groups and Non-Capturing Groups

```python
import re

pattern = re.compile(r'(?P<user>\w+)@(?P<domain>[\w.]+)')
match = pattern.match("alice@example.com")
print(match.group("user"))    # 'alice'
print(match.group("domain"))  # 'example.com'
print(match.groupdict())      # {'user': 'alice', 'domain': 'example.com'}
```

Non-capturing groups `(?:...)` participate in alternation and quantification but do not create a
backreference. This prevents group numbering from shifting when you add groups for structural
purposes.

```python
# Non-capturing group for alternation
pattern = re.compile(r'(?:https?|ftp)://([\w./]+)')
```

### Flags

```python
import re

text = "Hello\nWorld"

re.findall(r'^\w+', text)            # ['Hello'] (default: ^ matches start of string)
re.findall(r'^\w+', text, re.MULTILINE)  # ['Hello', 'World']

re.findall(r'hello', "Hello World")   # []
re.findall(r'hello', "Hello World", re.IGNORECASE)  # ['Hello']

# Combining flags with pipe
re.findall(r'^\w+', text, re.MULTILINE | re.IGNORECASE)
```

:::danger

The `re.IGNORECASE` flag can change the meaning of `\w` and `\b` for non-ASCII characters because
Unicode case folding is complex. If you are matching ASCII-only identifiers, use `re.ASCII` (or
`re.A`) alongside `re.IGNORECASE` to constrain `\w`, `\b`, `\d`, and `\s` to ASCII ranges.

:::

### `re.sub()` with a Callable

```python
import re

def replacer(match):
    word = match.group(0)
    return word.upper() if word.islower() else word.lower()

result = re.sub(r'\b\w+\b', replacer, "hello WORLD test")
print(result)  # HELLO world TEST
```

## `functools`: Higher-Order Function Utilities

### `functools.partial`

`partial` creates a new callable with some arguments pre-filled. This is not currying -- it does not
transform a multi-argument function into a chain of single-argument functions. It simply binds
positional or keyword arguments.

```python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)

print(square(5))  # 25
print(cube(3))    # 27
```

`partial` is particularly useful for adapting function signatures to fit APIs that expect a specific
callable form, such as `map`, `sorted`, or callback interfaces.

```python
from functools import partial

pairs = [(1, 2), (3, 1), (2, 4)]
sorted(pairs, key=partial(lambda seq, idx: seq[idx], idx=1))
# [(3, 1), (1, 2), (2, 4)]
```

### `functools.lru_cache`

`lru_cache` is a decorator that memoizes function calls using a Least Recently Used eviction policy.
It stores the mapping from arguments to return values in a dictionary-ordered structure (the CPython
implementation uses a doubly-linked list combined with a hash table, giving O(1) lookup and O(1)
eviction).

```python
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(100))  # 354224848179261915075, computed instantly
print(fibonacci.cache_info())
# CacheInfo(hits=98, misses=101, maxsize=128, currsize=101)
```

The cache key is the function's positional and keyword arguments. All arguments must be hashable.
This means you cannot cache functions that accept unhashable arguments (lists, dicts, sets) without
a wrapper that converts them to a hashable representation.

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def cached_parse(query_string):
    return frozenset(query_string.split("&"))
```

`maxsize=None` creates an unbounded cache. Use this only when the argument space is small and
finite. An unbounded cache on a function with unbounded input is a memory leak.

### `functools.singledispatch`

`singledispatch` creates a generic function that dispatches on the type of the first argument. It is
Python's answer to method overloading for standalone functions.

```python
from functools import singledispatch
from collections.abc import Sequence

@singledispatch
def process(value):
    raise NotImplementedError(f"Cannot process {type(value)}")

@process.register
def _(value: int):
    return value * 2

@process.register
def _(value: str):
    return value.upper()

@process.register
def _(value: Sequence):
    return [process(item) for item in value]

print(process(42))          # 84
print(process("hello"))     # HELLO
print(process([1, "a"]))    # [2, 'A']
```

The `register` attribute can also be used as a decorator with explicit type arguments:
`@process.register(list)`. When used with type annotations, the annotation is extracted and used as
the dispatch key.

### `functools.wraps`

`wraps` is a decorator factory that copies metadata (`__name__`, `__doc__`, `__module__`,
`__annotations__`, `__dict__`) from the wrapped function to the wrapper function. Without it, every
decorated function appears as `wrapper` in tracebacks, `help()`, and `sphinx` documentation.

```python
from functools import wraps

def retry(max_attempts=3):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception:
                    if attempt == max_attempts:
                        raise
        return wrapper
    return decorator

@retry(max_attempts=5)
def fetch_data(url):
    pass

print(fetch_data.__name__)  # 'fetch_data', not 'wrapper'
```

## `itertools`: Iterator Building Blocks

The `itertools` module provides fast, memory-efficient tools for working with iterators. Every
function in this module returns an iterator -- no intermediate lists are created.

### `chain` and `chain.from_iterable`

`chain` takes multiple iterables and produces a single iterator that yields from each in sequence.
`chain.from_iterable` takes a single iterable of iterables.

```python
from itertools import chain

list(chain([1, 2], [3, 4], [5]))  # [1, 2, 3, 4, 5]
list(chain.from_iterable([[1, 2], [3, 4], [5]]))  # [1, 2, 3, 4, 5]
```

### `product`, `permutations`, `combinations`

These functions generate elements from the Cartesian product and combinatorial selections of input
iterables.

```python
from itertools import product, permutations, combinations, combinations_with_replacement

print(list(product([1, 2], ['a', 'b'])))
# [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]

print(list(permutations([1, 2, 3], 2)))
# [(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]

print(list(combinations([1, 2, 3], 2)))
# [(1, 2), (1, 3), (2, 3)]

print(list(combinations_with_replacement([1, 2, 3], 2)))
# [(1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 3)]
```

Key distinction: `permutations` considers order and does not repeat elements. `combinations` ignores
order and does not repeat. `product` considers order and repeats according to the `repeat`
parameter. `combinations_with_replacement` ignores order but allows repetition.

### `groupby`

`groupby` groups consecutive elements that share the same key. **The input must be sorted by the
key** -- `groupby` does not sort for you.

```python
from itertools import groupby

data = [("apple", 1), ("banana", 1), ("cherry", 2), ("date", 2), ("elderberry", 3)]

for key, group in groupby(data, key=lambda x: x[1]):
    print(key, list(group))
# 1 [('apple', 1), ('banana', 1)]
# 2 [('cherry', 2), ('date', 2)]
# 3 [('elderberry', 3)]
```

The groups are iterators that are consumed as you iterate over them. If you need to revisit a group,
convert it to a list first.

### `islice`, `filterfalse`, `accumulate`

```python
from itertools import islice, filterfalse, accumulate

# islice: slice an iterator without materializing it
fib = (a + b for a, b in zip(range(10), range(1, 11)))
print(list(islice(fib, 5)))  # [1, 3, 5, 7, 9]

# filterfalse: opposite of filter
print(list(filterfalse(lambda x: x % 2 == 0, range(10))))
# [1, 3, 5, 7, 9]

# accumulate: running totals (or any binary function)
print(list(accumulate([1, 2, 3, 4, 5])))
# [1, 3, 6, 10, 15]

import operator
print(list(accumulate([1, 2, 3, 4, 5], operator.mul)))
# [1, 2, 6, 24, 120]
```

## `typing`: Type Annotations

### Why Type Annotations

Type annotations serve three audiences: static type checkers (mypy, pyright, pytype), IDEs
(autocompletion, refactoring), and human readers (documentation). Python does not enforce type
annotations at runtime -- they are ignored by the interpreter and stored only in the
`__annotations__` attribute.

### Core Types

```python
from typing import Union, Optional, Literal, Callable, Any, TypeAlias

def process(value: Union[int, str]) -> str:
    return str(value)

# Equivalent with 3.10+ syntax
def process(value: int | str) -> str:
    return str(value)

# Optional[X] is Union[X, None]
def find_user(user_id: int) -> Optional[str]:
    return None

# Literal restricts to specific values
def set_level(level: Literal["debug", "info", "warning", "error"]) -> None:
    pass

# Callable describes function signatures
def apply(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)

# Any disables type checking for a value
data: Any = json.loads(raw_string)
```

### `Protocol`: Structural Typing

`Protocol` (Python 3.8+) enables structural typing. A class is considered a subtype of a Protocol if
it has the right methods, regardless of whether it explicitly inherits from the Protocol.

```python
from typing import Protocol, runtime_checkable

class Drawable(Protocol):
    def draw(self) -> str:
        ...

class Circle:
    def draw(self) -> str:
        return "circle"

class Square:
    def render(self) -> str:
        return "square"

def render_all(items: list[Drawable]) -> list[str]:
    return [item.draw() for item in items]

render_all([Circle()])    # OK
render_all([Square()])    # mypy error: 'Square' has no 'draw' method
```

`@runtime_checkable` adds `isinstance()` support, but only checks for the presence of method names
-- not their signatures.

```python
@runtime_checkable
class Closeable(Protocol):
    def close(self) -> None:
        ...

class FileHandle:
    def close(self) -> None:
        pass

print(isinstance(FileHandle(), Closeable))  # True
```

### `TypeAlias`, `ParamSpec`, and `Concatenate`

```python
from typing import TypeAlias, ParamSpec, Concatenate, Callable

# TypeAlias: explicit type alias declaration
JSON: TypeAlias = dict[str, Any]
UserID: TypeAlias = int | str

# ParamSpec: capture the parameter signature of a callable
P = ParamSpec("P")

def log_calls(func: Callable[P, None]) -> Callable[P, None]:
    def wrapper(*args: P.args, **kwargs: P.kwargs) -> None:
        print(f"Calling {func.__name__}")
        func(*args, **kwargs)
    return wrapper

# Concatenate: prepend parameters to a captured signature
def with_user_id(
    func: Callable[Concatenate[int, P], None]
) -> Callable[Concatenate[int, P], None]:
    def wrapper(user_id: int, *args: P.args, **kwargs: P.kwargs) -> None:
        print(f"User {user_id}")
        func(user_id, *args, **kwargs)
    return wrapper
```

`ParamSpec` solves a real problem: without it, a decorator that preserves the signature of arbitrary
callables must use `*args, **kwargs` with untyped `Any`, losing all type information about the
wrapped function's parameters. `ParamSpec` captures the full parameter signature as a type variable.

## `dataclasses`: Beyond Basics

The `@dataclass` decorator (covered in the OOP chapter for fundamentals) supports advanced patterns
through the `field()` function, `__post_init__`, and inheritance.

### `__post_init__` for Validation and Derived Fields

```python
from dataclasses import dataclass, field

@dataclass
class Rectangle:
    width: float
    height: float
    _area: float = field(init=False, repr=False)

    def __post_init__(self):
        if self.width <= 0 or self.height <= 0:
            raise ValueError("Dimensions must be positive")
        self._area = self.width * self.height

    @property
    def area(self):
        return self._area
```

`__post_init__` is called after the generated `__init__`. It receives the same arguments as
`__init__`. Fields with `init=False` are not passed to `__init__` and must be set in
`__post_init__`.

### `field()` for Fine-Grained Control

```python
from dataclasses import dataclass, field

def validate_positive(value: float) -> float:
    if value <= 0:
        raise ValueError("Must be positive")
    return value

@dataclass
class Config:
    name: str
    retries: int = field(default=3, validator=lambda v: v >= 0)
    tags: list[str] = field(default_factory=list)
    created_at: float = field(default_factory=time.time, repr=False, compare=False)
```

| `field()` parameter | Effect                                             |
| ------------------- | -------------------------------------------------- |
| `default`           | Static default value (never use for mutable types) |
| `default_factory`   | Zero-arg callable producing the default value      |
| `init`              | Include in `__init__` (default `True`)             |
| `repr`              | Include in `__repr__` (default `True`)             |
| `compare`           | Include in `__eq__`/`__hash__` (default `True`)    |
| `hash`              | Include in `__hash__` (default `None`, inherits)   |
| `metadata`          | Arbitrary dict for external tools                  |

### Inheritance and `slots=True`

```python
from dataclasses import dataclass

@dataclass(slots=True)
class Base:
    id: int

@dataclass(slots=True)
class Derived(Base):
    name: str
```

`slots=True` (Python 3.10+) generates `__slots__` automatically. Every class in the hierarchy must
use `slots=True` -- mixing slotted and non-slotted dataclasses in an inheritance chain raises
`TypeError`.

## `enum`: Typed Constants

### Why `IntEnum` Over Raw Constants

Raw integer constants have no type identity. If two modules define `STATUS_OK = 0` and
`ERROR_NONE = 0`, they are indistinguishable -- they are both `int` with value `0`. This causes
silent bugs in comparisons and makes debugging harder because log messages show bare integers.

`IntEnum` members are both integers and enum members. They compare equal to their integer values
(for backward compatibility) but have a distinct type and `repr`.

```python
from enum import IntEnum, Enum, auto

class Status(IntEnum):
    OK = 0
    NOT_FOUND = 1
    INTERNAL_ERROR = 2

print(Status.OK == 0)           # True (IntEnum compares as int)
print(Status.OK == Status.OK)   # True
print(repr(Status.OK))          # <Status.OK: 0>
print(isinstance(Status.OK, Status))  # True
print(isinstance(0, Status))    # False
```

### `Enum` vs `IntEnum` vs `StrEnum`

```python
from enum import Enum, IntEnum, StrEnum, auto

class Color(Enum):
    RED = auto()
    GREEN = auto()
    BLUE = auto()

class Priority(IntEnum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3

class Role(StrEnum):
    ADMIN = "admin"
    USER = "user"
    GUEST = "guest"

print(Color.RED == 1)     # False (plain Enum does not compare as int)
print(Priority.HIGH == 3) # True
print(Role.ADMIN == "admin")  # True
```

- Use `Enum` when members have no natural comparison with primitive types and you want strict type
  safety.
- Use `IntEnum` when members must interoperate with C APIs or integer-based protocols.
- Use `StrEnum` (Python 3.11+) when members represent string constants that are also used in
  serialization or string comparisons.

:::danger

Never compare `Enum` members with `is`. Use `==`. While `Enum` members are singletons within a
single process, using `is` for comparison is a fragile pattern that does not work correctly across
pickling, multiprocess serialization, or when the enum is re-imported.

:::

## `logging`: Structured Diagnostics

### Why `logging` Over `print`

`print` writes to stdout unconditionally. It has no severity levels, no filtering, no routing to
files or network endpoints, no timestamps, no module attribution, and no ability to be disabled
without modifying source code. In a library, `print` is not just unprofessional -- it is actively
harmful because it pollutes the consumer's stdout with messages the consumer did not request and
cannot control.

The `logging` module solves all of these problems:

1. **Severity levels** (`DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`) allow you to control
   verbosity without changing code.
2. **Loggers are hierarchical.** A logger named `"myapp.db"` inherits configuration from `"myapp"`.
   Libraries use loggers named after their module (`__name__`), and the application configures them
   centrally.
3. **Handlers route messages** to different destinations: stdout, stderr, files, sockets, email.
4. **Formatters control output format**, including timestamps, logger names, severity, and message
   text.

```python
import logging

logger = logging.getLogger(__name__)

def process_item(item_id: int) -> None:
    logger.debug("Processing item %d", item_id)
    logger.info("Item %d processed successfully", item_id)
    logger.warning("Item %d has deprecated field", item_id)
```

:::info

Use `%s`-style formatting in log messages, not f-strings. The `logging` module defers string
formatting until it determines that the message will actually be emitted. With f-strings, the string
is always constructed even if the log level is filtered out.
`logger.debug("Expensive: %r", compute_value())` does not call `compute_value()` if DEBUG is not
enabled. `logger.debug(f"Expensive: {compute_value()}")` always calls it.

:::

### Configuration

```python
import logging
import sys

logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
    stream=sys.stderr,
)

logger = logging.getLogger("myapp")
logger.info("Application started")
# 2025-06-04 14:00:00 [INFO] myapp: Application started
```

`basicConfig` is a convenience function that configures the root logger. It can only be called once
-- subsequent calls have no effect unless `force=True` is passed. For more complex configuration,
use `dictConfig` or `fileConfig`.

```python
import logging.config

LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "detailed": {
            "format": "%(asctime)s %(name)s %(levelname)s %(message)s",
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
        "simple": {
            "format": "%(levelname)s: %(message)s",
        },
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "level": "INFO",
            "formatter": "simple",
            "stream": "ext://sys.stderr",
        },
        "file": {
            "class": "logging.handlers.RotatingFileHandler",
            "level": "DEBUG",
            "formatter": "detailed",
            "filename": "app.log",
            "maxBytes": 10_485_760,
            "backupCount": 5,
        },
    },
    "root": {
        "level": "DEBUG",
        "handlers": ["console", "file"],
    },
}

logging.config.dictConfig(LOGGING_CONFIG)
```

### Handlers

A handler determines where log messages go. Multiple handlers can be attached to the same logger.

```python
import logging
from logging.handlers import RotatingFileHandler, TimedRotatingFileHandler

logger = logging.getLogger("myapp.service")

file_handler = RotatingFileHandler(
    "service.log",
    maxBytes=5 * 1024 * 1024,
    backupCount=10,
)
file_handler.setFormatter(
    logging.Formatter("%(asctime)s %(levelname)s %(message)s")
)
logger.addHandler(file_handler)
```

Common handlers:

- `StreamHandler`: writes to a file-like object (stdout, stderr).
- `FileHandler`: writes to a single file.
- `RotatingFileHandler`: rotates when the file reaches a size limit.
- `TimedRotatingFileHandler`: rotates at time intervals (midnight, hourly, etc.).
- `SysLogHandler`: sends to Unix syslog.
- `NullHandler`: discards all messages. This is the recommended handler for library loggers.

### The Library Pattern

Libraries should never configure logging. They should create loggers with
`logging.getLogger(__name__)` and attach a `NullHandler` so that logging does not produce warnings
when no handler is configured.

```python
# In mylib/__init__.py
import logging

logger = logging.getLogger(__name__)
logger.addHandler(logging.NullHandler())
```

## `datetime`: Dates and Times

### `date`, `time`, `datetime`, `timedelta`

The `datetime` module provides four core types for temporal data. They are deliberately separate
because not every temporal concept needs all components.

```python
from datetime import date, time, datetime, timedelta, timezone

d = date(2025, 6, 4)
t = time(14, 30, 0)
dt = datetime(2025, 6, 4, 14, 30, 0, tzinfo=timezone.utc)
delta = timedelta(days=7, hours=3)

print(d + delta)          # 2025-06-11
print(dt + delta)         # 2025-06-11 17:30:00+00:00
print(dt - datetime(2025, 1, 1))  # 154 days, 14:30:00
print(dt.isoformat())     # 2025-06-04T14:30:00+00:00
```

`date` stores year, month, day. `time` stores hour, minute, second, microsecond, and timezone info.
`datetime` is the combination of both. `timedelta` represents a duration.

### Timezone-Aware vs Naive

A naive `datetime` has no timezone information. It represents an abstract time that cannot be mapped
to a specific instant on the timeline. An aware `datetime` carries a `tzinfo` subclass that defines
its offset from UTC.

```python
from datetime import datetime, timezone, timedelta

naive = datetime(2025, 6, 4, 14, 0)
print(naive.tzinfo)  # None

aware = datetime(2025, 6, 4, 14, 0, tzinfo=timezone.utc)
print(aware.tzinfo)  # UTC

# Convert to a different timezone
eastern = timezone(timedelta(hours=-4))
print(aware.astimezone(eastern))  # 2025-06-04 10:00:00-04:00
```

:::danger

Never compare naive and aware datetimes. Python raises `TypeError`. Never use naive datetimes for
timestamps that will be stored, transmitted, or compared across systems. Naive datetimes are
acceptable only for purely local display or when the timezone context is obvious and unambiguous
(e.g., "schedule this for 9 AM in the user's local time").

:::

### Parsing and Formatting

```python
from datetime import datetime

# Parsing with strptime (strict format matching)
dt = datetime.strptime("2025-06-04 14:30", "%Y-%m-%d %H:%M")
print(dt)  # 2025-06-04 14:30:00

# Formatting with strftime
formatted = dt.strftime("%B %d, %Y at %I:%M %p")
print(formatted)  # June 04, 2025 at 02:30 PM

# ISO format (for machine interchange)
print(dt.isoformat())           # 2025-06-04T14:30:00
print(datetime.fromisoformat("2025-06-04T14:30:00"))  # round-trip
```

The most commonly used format codes:

| Code | Meaning                     | Example   |
| ---- | --------------------------- | --------- |
| `%Y` | Four-digit year             | 2025      |
| `%m` | Zero-padded month           | 06        |
| `%d` | Zero-padded day             | 04        |
| `%H` | Hour (24-hour, zero-padded) | 14        |
| `%I` | Hour (12-hour, zero-padded) | 02        |
| `%M` | Minute (zero-padded)        | 30        |
| `%S` | Second (zero-padded)        | 00        |
| `%p` | AM/PM                       | PM        |
| `%f` | Microsecond (zero-padded)   | 000000    |
| `%z` | UTC offset                  | +0000     |
| `%Z` | Timezone name               | UTC       |
| `%A` | Full weekday name           | Wednesday |
| `%B` | Full month name             | June      |

### `datetime.fromtimestamp()` and UTC

`datetime.fromtimestamp()` returns a **local** time by default. For a UTC datetime, use
`datetime.fromtimestamp(ts, tz=timezone.utc)` or `datetime.utcfromtimestamp()` (deprecated since
3.12).

```python
from datetime import datetime, timezone
import time

ts = time.time()
local_dt = datetime.fromtimestamp(ts)
utc_dt = datetime.fromtimestamp(ts, tz=timezone.utc)

print(local_dt.tzinfo)  # None (naive, but represents local time)
print(utc_dt.tzinfo)    # UTC (aware)
```

### Common Patterns

```python
from datetime import datetime, timedelta, timezone

now = datetime.now(timezone.utc)
yesterday = now - timedelta(days=1)
start_of_day = now.replace(hour=0, minute=0, second=0, microsecond=0)

# Iterating over date ranges
start = date(2025, 1, 1)
end = date(2025, 1, 31)
current = start
while current <= end:
    print(current)
    current += timedelta(days=1)
```

For more complex date arithmetic (business days, holidays, recurrence rules), the third-party
`dateutil` library extends `datetime` with `relativedelta`, `rrule`, and flexible parsing.
