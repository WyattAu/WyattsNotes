---
title: Advanced Type System
description:
  Advanced Type System — `@overload` — Multiple Signatures for One Function;
  Mechanism; Overloads with `@staticmethod` and `@classmethod`; Limitations.
date: 2026-04-05T00:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: advanced-typing
---

## `@overload` — Multiple Signatures for One Function

Python is dynamically typed: a single function object can be called with any combination of
arguments. But type checkers need to know what types are acceptable and what the return type is for
each valid combination. `typing.overload` solves this by letting you declare multiple signatures for
the same callable, followed by a single implementation that carries the actual runtime logic.

### Mechanism

The `@overload` decorator does **nothing at runtime**. It is a no-op that returns the decorated
function unchanged. Its sole purpose is to signal to static type checkers (mypy, pyright,
pyright-based editors) that the decorated function has multiple type signatures. At runtime, only
the implementation function exists; the overload definitions are effectively erased.

The pattern is always: one or more `@overload`-decorated stubs (with no body, using `...`), then a
single implementation:

```python
from typing import overload

@overload
def process(data: str) -> str: ...
@overload
def process(data: bytes) -> bytes: ...
@overload
def process(data: list[str]) -> list[str]: ...

def process(data):
    if isinstance(data, str):
        return data.strip()
    if isinstance(data, bytes):
        return data.strip()
    if isinstance(data, list):
        return [item.strip() for item in data]
    raise TypeError(f"Unsupported type: {type(data)}")
```

Each overload stub must be consistent in the sense that a type checker can determine which overload
applies at each call site. The implementation signature is not checked against the overloads -- the
implementation can have a broad signature like `def process(data: Any) -> Any:` and type checkers
will not complain, because they understand that the implementation is the fallback.

### Overloads with `@staticmethod` and `@classmethod`

Overloads compose with other decorators, but the order matters. The `@overload` must be the
innermost decorator (closest to the function definition), and `@staticmethod`/`@classmethod` must
wrap it:

```python
from typing import overload

class Parser:
    @overload
    @staticmethod
    def parse(raw: str) -> dict[str, object]: ...
    @overload
    @staticmethod
    def parse(raw: bytes) -> dict[str, object]: ...

    @staticmethod
    def parse(raw):
        import json
        if isinstance(raw, bytes):
            raw = raw.decode("utf-8")
        return json.loads(raw)
```

The reason for this ordering: `@staticmethod` and `@classmethod` are descriptor-based decorators
that transform the function object into a different kind of descriptor. If you put `@overload` on
top, it would try to decorate the result of `@staticmethod` (a `staticmethod` descriptor), which is
not a function and would confuse the type checker's overload tracking. The type checker needs to see
`@overload` applied to a plain function so it can extract the signature.

### Limitations

1. **Runtime erasure:** At runtime, only the implementation exists. You cannot inspect overloads
   programmatically via `__annotations__` or `typing.get_overloads()` (the latter exists in Python
   3.11+ but is rarely used).
2. **Type checker only:** `@overload` has zero effect on runtime behavior. If you call a function
   with arguments that match none of the overloads, the code will still execute -- it just means the
   type checker will flag a type error.
3. **No exhaustiveness checking:** The implementation body has no obligation to handle every
   overload case. A missing branch will only surface at runtime as an unhandled case.
4. **Overload resolution is based on call-site argument types.** If the argument type is a `Union`,
   the type checker attempts to match against each overload's parameter types individually and picks
   the first match. This means the order of overloads matters when signatures overlap.

## Literal Types

`Literal` types let you specify that a value must be exactly one of a finite set of literal values.
This is fundamentally different from saying the value is of type `str` or `int` -- it constrains the
value to a specific member of that type.

### Syntax and Semantics

```python
from typing import Literal

def set_verbosity(level: Literal["debug", "info", "warning", "error"]) -> None:
    ...

set_verbosity("debug")    # OK
set_verbosity("verbose")  # type error: not in the literal set
```

`Literal` accepts strings, bytes, integers, booleans, `None`, and enum values. At the type-system
level, `Literal["foo"]` is a subtype of `str`, `Literal[42]` is a subtype of `int`, and
`Literal[True]` is a subtype of `bool`. The type checker treats each literal value as a distinct
type.

```python
from typing import Literal

x: Literal[True] = True       # OK
x: Literal[True] = False      # type error
x: Literal[1, 2, 3] = 2       # OK
x: Literal[1, 2, 3] = 4       # type error

def http_method(method: Literal["GET", "POST", "PUT", "DELETE", "PATCH"]) -> str:
    return method.upper()
```

### Narrowing with `match` and `isinstance`

Type checkers perform literal narrowing. After an `if` or `match` check against a literal value, the
type is narrowed to that specific literal:

```python
from typing import Literal

def handle_status(status: Literal["open", "closed", "pending"]) -> str:
    match status:
        case "open":
            return "active"
        case "closed":
            return "done"
        case "pending":
            return "waiting"
```

This is not just syntactic sugar over `str`. The type checker knows that after the `"open"` case,
`status` is typed as `Literal["open"]`, not `str`. This enables downstream type-safe behavior.

### `LiteralString` (Python 3.11+)

`typing.LiteralString` is a special type that accepts only string literals and strings that are
computed from other `LiteralString` values. It rejects arbitrary `str` values (e.g., user input,
values read from files, values returned from function calls that return `str`).

The purpose is security: functions that construct SQL queries, shell commands, or HTML from string
interpolation should require `LiteralString` inputs to prevent injection:

```python
from typing import LiteralString

def query(sql: LiteralString, *args: object) -> None:
    ...

table_name: str = input("Table name: ")  # type: str, NOT LiteralString
# query(f"SELECT * FROM {table_name}")    # type error

query("SELECT * FROM users")              # OK -- literal
query("SELECT * FROM " + "users")         # OK -- literal + literal = LiteralString
```

### Use Cases

- **Status enums without `Enum`:** When you don't need the full machinery of `enum.Enum`, `Literal`
  types provide the same safety with less boilerplate.
- **API versioning:** `def api_call(version: Literal["v1", "v2"]) -> Response` ensures callers pass
  a known version string.
- **Protocol identifiers:** `def connect(protocol: Literal["tcp", "udp", "unix"])` documents the
  valid transport protocols at the type level.

## TypedDict

`TypedDict` provides a way to specify type information for dictionaries with a fixed set of string
keys, each mapped to a value of a specific type. It bridges the gap between the flexibility of
`dict` and the structure of a `dataclass` or `NamedTuple`.

### Two Syntax Forms

There are two ways to create a `TypedDict`: functional (anonymous) and class-based.

```python
from typing import TypedDict

Movie = TypedDict("Movie", {"name": str, "year": int})
```

The functional form is a call that returns a new type. The first argument is the name of the type
(string), and the second is a dictionary mapping field names to their types.

The class-based form is more common and supports more features:

```python
from typing import TypedDict

class Movie(TypedDict):
    name: str
    year: int
```

Both forms produce identical types. The class-based form is preferred because it supports
docstrings, methods (though you rarely need them), and the `total` keyword argument more naturally.

### Required vs Optional Keys

By default, all keys in a `TypedDict` are **required**. To make individual keys optional, use
`NotRequired` (Python 3.11+, or from `typing_extensions`):

```python
from typing import TypedDict, NotRequired

class Movie(TypedDict):
    name: str
    year: int
    director: NotRequired[str]
    rating: NotRequired[float]
```

The `total` parameter controls the default: `total=False` makes all keys optional by default, and
`Required` marks individual keys as mandatory:

```python
from typing import TypedDict, Required

class Movie(TypedDict, total=False):
    name: Required[str]
    year: int
    director: str
    rating: float
```

Under the hood, the `TypedDict` metaclass computes `__required_keys__` and `__optional_keys__` as
frozensets at class creation time. These are runtime attributes:

```python
Movie.__required_keys__   # frozenset({'name'})
Movie.__optional_keys__   # frozenset({'year', 'director', 'rating'})
```

### Nested TypedDicts

TypedDicts compose. Real-world data is often deeply nested (JSON API responses, configuration
files), and nested TypedDicts model this structure precisely:

```python
from typing import TypedDict, NotRequired

class Address(TypedDict):
    street: str
    city: str
    zipcode: str
    country: str

class Person(TypedDict):
    name: str
    age: int
    address: Address
    phone: NotRequired[str]
```

### Runtime `isinstance` Checks

`isinstance(obj, MyTypedDict)` does **not** work. TypedDict is a structural type that is erased at
runtime -- a regular `dict` does not carry the TypedDict type information. To check whether a
dictionary conforms to a TypedDict shape, you need a runtime validation library like `pydantic`,
`msgspec`, or `cattrs`.

You can, however, use `typing.get_type_hints()` to introspect the TypedDict's field types at
runtime, which is useful for building custom validation:

```python
from typing import TypedDict, get_type_hints

class Config(TypedDict):
    host: str
    port: int
    debug: bool

hints = get_type_hints(Config)
# {'host': <class 'str'>, 'port': <class 'int'>, 'debug': <class 'bool'>}
```

### JSON Deserialization

TypedDicts are the natural target for JSON deserialization. A JSON object maps directly to a
`dict[str, ...]`, and a TypedDict constrains which keys and value types are expected:

```python
import json
from typing import TypedDict

class User(TypedDict):
    id: int
    name: str
    email: str

raw = '{"id": 1, "name": "Alice", "email": "alice@example.com"}'
user: User = json.loads(raw)
```

Note: `json.loads` returns a plain `dict` at runtime. The type annotation `user: User` is a type
checker assertion, not a runtime guarantee. If the JSON is malformed (missing keys, wrong types),
the type checker will not catch it -- you need runtime validation for that.

## TypeVarTuple (PEP 646)

`TypeVarTuple` introduces variadic generics to Python's type system. It allows you to define types
that operate over a variable number of type parameters, analogous to how `*args` captures a variable
number of positional arguments at runtime.

### Motivation

Consider a function that takes two arrays of the same length and returns an array of pairs:

```python
def zip_arrays(a: list[T], b: list[T]) -> list[tuple[T, T]]:
    return list(zip(a, b))
```

This works for two arrays. But what if you want to zip three, four, or N arrays, all with the same
element type? Or what if you want to preserve the _types_ of each array independently? Without
variadic generics, you would need to write a separate overload for each arity.

### Syntax and Usage

```python
from typing import TypeVarTuple, Generic

Ts = TypeVarTuple("Ts")

class Array(Generic[*Ts]):
    def __init__(self, *shapes: *Ts) -> None:
        self.shapes = shapes
```

The `*Ts` in `Generic[*Ts]` means "accept any number of type parameters." The `*shapes: *Ts` in the
method signature means "accept a variadic number of arguments, each with one of the types in `Ts`."

### Mapping Over Variadic Args

A common pattern is using `TypeVarTuple` with `map` or `zip` to operate over arrays of different
types:

```python
from typing import TypeVarTuple

Ts = TypeVarTuple("Ts")

def concatenate(*arrays: *tuple[*Ts]) -> tuple[*Ts]:
    return arrays
```

### Use Cases

- **Array/tensor operations:** Libraries like NumPy and JAX benefit from variadic generics because
  array shapes are multi-dimensional tuples of integers. `TypeVarTuple` can express "an
  N-dimensional array" as `Array[*Shape]` where `Shape` is a variadic tuple of integers.
- **Matrix operations:** You can express "a matrix of shape (M, N)" without hardcoding the number of
  dimensions.
- **Protocol-level generics:** When defining decorators or middleware that need to preserve the full
  signature of the wrapped function, including the types of all positional arguments.

### Limitations

- `TypeVarTuple` support varies across type checkers. mypy added support in mypy 1.0+, pyright
  supports it. Older type checkers will not understand it.
- You cannot have more than one `TypeVarTuple` in the same generic parameter list (in most type
  checkers), because unpacking multiple variadic sequences creates ambiguity.
- The runtime behavior is unchanged -- `TypeVarTuple` is purely a type-system construct.

## ParamSpec

`ParamSpec` (PEP 612) captures the full parameter signature of a callable as a single type variable.
This is essential for typing decorators that preserve the wrapped function's signature.

### The Problem

Before `ParamSpec`, typing decorators was fundamentally limited. A decorator that wraps a function
and returns another function would either lose the original signature or require complex `@overload`
chains:

```python
from typing import Callable, TypeVar

F = TypeVar("F", bound=Callable[..., object])

def log(func: F) -> F:
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper  # type checkers cannot verify this preserves the signature
```

The `Callable[..., object]` signature is opaque -- it tells the type checker nothing about the
argument types or return type. `ParamSpec` solves this by letting you capture and replay the full
signature.

### Syntax

```python
from typing import ParamSpec, TypeVar

P = ParamSpec("P")
R = TypeVar("R")

def log(func: Callable[P, R]) -> Callable[P, R]:
    def wrapper(*args: P.args, **kwargs: P.kwargs) -> R:
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper
```

`P` captures the complete parameter specification of `func`: positional parameters, keyword
parameters, their types, defaults, and whether they can be passed by position or keyword. `P.args`
and `P.kwargs` are synthetic types that let you express "accepts the same positional and keyword
arguments as `P`."

### `Concatenate[P, T]` — Appending Parameters

Some decorators need to add parameters to the wrapped function's signature. `Concatenate` lets you
prepend or append type parameters to a `ParamSpec`:

```python
from typing import ParamSpec, TypeVar, Callable, Concatenate

P = ParamSpec("P")
R = TypeVar("R")

def with_retry(max_retries: int):
    def decorator(func: Callable[P, R]) -> Callable[Concatenate[int, P], R]:
        def wrapper(retries: int, *args: P.args, **kwargs: P.kwargs) -> R:
            for attempt in range(retries):
                try:
                    return func(*args, **kwargs)
                except Exception:
                    if attempt == retries - 1:
                        raise
            raise RuntimeError("unreachable")
        return wrapper
    return decorator
```

The `Concatenate[int, P]` signature means "the decorated function takes an `int` (the retry count)
followed by whatever parameters the original function accepted."

### Use Cases

- **Decorators:** Any decorator that wraps a function and returns a wrapper. `ParamSpec` ensures the
  type checker knows the wrapper accepts the same arguments as the original.
- **Higher-order functions:** Functions that accept callbacks, like `map`, `filter`, `sorted(key=)`,
  or retry decorators.
- **Dependency injection frameworks:** When the framework needs to accept a user-defined function
  and inject additional parameters at call time.

## TypeGuard and TypeIs

`TypeGuard` and `TypeIs` are special forms for user-defined type narrowing functions. They let you
tell the type checker "if this function returns `True`, the argument is of type `T`."

### `TypeGuard` (Python 3.10+)

`TypeGuard` is the older form (introduced in PEP 647). It narrows the type of the argument in the
`True` branch but does **not** narrow in the `False` branch:

```python
from typing import TypeGuard

def is_list_of_strs(value: object) -> TypeGuard[list[str]]:
    return isinstance(value, list) and all(isinstance(x, str) for x in value)

data: object = get_data()
if is_list_of_strs(data):
    reveal_type(data)  # list[str] -- narrowed in True branch
else:
    reveal_type(data)  # object -- NOT narrowed in False branch
```

The critical asymmetry: `TypeGuard` allows widening in the `True` branch. That is, the narrowed type
does not have to be a subtype of the input type. For example, a function that checks whether a
string is actually a valid JSON document could return `TypeGuard[dict[str, object]]` even though the
input type is `str`. This makes `TypeGuard` flexible but also potentially unsound -- the type
checker trusts your assertion without verification.

### `TypeIs` (Python 3.13+, `typing_extensions`)

`TypeIs` (PEP 742) is stricter: the return type must be a subtype of (or equal to) the input type,
and it narrows in **both** the `True` and `False` branches:

```python
from typing import TypeIs

def is_str(value: object) -> TypeIs[str]:
    return isinstance(value, str)

data: object = get_data()
if is_str(data):
    reveal_type(data)  # str
else:
    reveal_type(data)  # object (but known to NOT be str)
```

When to use which:

| Property                  | `TypeGuard` | `TypeIs` |
| ------------------------- | ----------- | -------- |
| Narrows in `True` branch  | Yes         | Yes      |
| Narrows in `False` branch | No          | Yes      |
| Allows widening           | Yes         | No       |
| Soundness                 | Trusts you  | Checked  |

Use `TypeIs` by default when the narrowed type is a subtype of the input. Use `TypeGuard` only when
you need to widen (e.g., parsing a string into a structured type).

### `@overload` Pattern with TypeGuard

You can combine `@overload` with `TypeGuard` to provide different return types based on input:

```python
from typing import overload, TypeGuard, Union

@overload
def is_int_or_str(x: int) -> TypeIs[int]: ...
@overload
def is_int_or_str(x: str) -> TypeIs[str]: ...
@overload
def is_int_or_str(x: object) -> TypeIs[Union[int, str]]: ...

def is_int_or_str(x: object) -> bool:
    return isinstance(x, (int, str))
```

## Self Types

Methods that return `self` (for method chaining) or return instances of the same class as the
receiver need a way to express "the type of the current class, whatever subclass it may be."

### The Problem

```python
class Builder:
    def set_name(self, name: str) -> Builder:
        self.name = name
        return self

class FancyBuilder(Builder):
    def set_style(self, style: str) -> FancyBuilder:
        self.style = style
        return self

b = FancyBuilder()
result = b.set_name("test").set_style("fancy")  # type error!
```

The type error occurs because `set_name` is annotated to return `Builder`, not `FancyBuilder`. The
type checker sees `Builder.set_name(...) -> Builder`, and `Builder` has no `set_style` method.

### Python 3.11+: `typing.Self`

PEP 673 introduced `typing.Self` (available in Python 3.11+ from `typing`, and earlier from
`typing_extensions`):

```python
from typing import Self

class Builder:
    def set_name(self, name: str) -> Self:
        self.name = name
        return self
```

`Self` is always exactly the type of the class in which the method is defined, including any
subclasses. It works in class methods, instance methods, and `__new__`.

### Legacy: `TypeVar`-based approach

Before `Self` was available, the pattern was:

```python
from typing import TypeVar

T = TypeVar("T", bound="Builder")

class Builder:
    def set_name(self: T, name: str) -> T:
        self.name = name
        return self
```

This works but is verbose, error-prone (you must remember to use the `TypeVar` consistently), and
does not work correctly for `__init_subclass__` or class methods in all type checkers. `Self` is
strictly superior.

## Final and ClassVar

### `ClassVar`

`ClassVar` marks an attribute as belonging to the class itself, not to instances:

```python
from typing import ClassVar

class Database:
    connection_pool_size: ClassVar[int] = 10
    _instance: ClassVar["Database | None"] = None

    def __init__(self, host: str) -> None:
        self.host = host
```

`ClassVar` tells the type checker: "this attribute is set on the class, not on `self`." This means:

- `db.connection_pool_size` is valid (access on the class).
- `db.connection_pool_size` is also valid on an instance (Python looks up the attribute on the class
  when it is not found on the instance).
- Assigning to `self.connection_pool_size = 20` inside a method would create an instance attribute
  that shadows the class attribute. The type checker will flag this if the field is annotated with
  `ClassVar`.

`ClassVar` does not create a descriptor or enforce anything at runtime. It is purely a type-system
annotation.

### `Final`

`Final` indicates that a name should not be reassigned, overridden, or modified:

```python
from typing import Final

MAX_RETRIES: Final[int] = 3
API_VERSION: Final = "v1"
```

At the module level, `Final` tells the type checker that the name is a constant. Any reassignment
will be flagged as a type error.

At the class level, `Final` prevents subclasses from overriding the attribute:

```python
from typing import Final

class Base:
    timeout: Final[int] = 30

class Derived(Base):
    timeout = 60  # type error: cannot override Final attribute
```

`Final` also works with `ClassVar`:

```python
from typing import ClassVar, Final

class Config:
    MAX_CONNECTIONS: ClassVar[Final[int]] = 100
```

This means: the attribute is a class variable, it is an integer, and it must not be reassigned.

### Runtime Behavior

Neither `ClassVar` nor `Final` enforce anything at runtime. You can reassign a `Final` variable or
create an instance attribute shadowing a `ClassVar` attribute, and Python will not raise an error.
These annotations are for static analysis only.

## Recursive Types

Recursive types are types that refer to themselves. They are essential for modeling tree structures,
linked lists, JSON-like nested data, and any data structure with arbitrary depth.

### Forward References

Before Python 3.11, you needed string quotes for forward references when a type refers to a class
that has not been defined yet:

```python
from typing import Optional

class Node:
    def __init__(self, value: int) -> None:
        self.value = value
        self.left: Optional["Node"] = None
        self.right: Optional["Node"] = None
```

The quotes around `"Node"` tell the type checker (and the Python parser) to treat this as a deferred
annotation. At class definition time, `Node` does not exist yet (the class body is still executing),
so the string form is necessary.

### `from __future__ import annotations` (PEP 563)

This future import changes how all annotations are evaluated. Instead of evaluating them at
definition time, Python stores them as strings:

```python
from __future__ import annotations
from typing import Optional

class Node:
    def __init__(self, value: int) -> None:
        self.value = value
        self.left: Optional[Node] = None  # No quotes needed
        self.right: Optional[Node] = None
```

With `from __future__ import annotations`, **all** annotations become strings automatically. This
eliminates the need for quotes in forward references, but it changes how annotations are accessed at
runtime: you must call `typing.get_type_hints()` to resolve them, rather than reading
`__annotations__` directly (which will contain raw strings).

### JSON-like Recursive Structures

A common use case for recursive types is modeling JSON data, which can be arbitrarily nested:

```python
from typing import Union

JSONValue = Union[None, bool, int, float, str, list["JSONValue"], dict[str, "JSONValue"]]

def process(data: JSONValue) -> None:
    ...
```

The type checker resolves the forward reference `"JSONValue"` by looking it up after the full module
has been processed. This works because type checkers perform multiple passes over the source.

### Tree Types

```python
from typing import Generic, TypeVar, Optional

T = TypeVar("T")

class Tree(Generic[T]):
    value: T
    children: list["Tree[T]"]

    def __init__(self, value: T, children: list["Tree[T]] | None = None) -> None:
        self.value = value
        self.children = children or []
```

## Type Narrowing

Type narrowing is the process by which a type checker reduces (narrows) the type of a variable based
on control flow. Understanding exactly what triggers narrowing is essential for writing type-checked
code that compiles cleanly.

### Mechanisms

**`isinstance` and `issubclass`:**

```python
def process(value: int | str) -> str:
    if isinstance(value, int):
        return str(value)     # value is narrowed to int
    return value              # value is narrowed to str
```

**Tuple form of `isinstance`:**

```python
def process(value: int | str | float) -> str:
    if isinstance(value, (int, str)):
        return str(value)     # value is narrowed to int | str
    return str(value)         # value is narrowed to float
```

**`is None` / `is not None`:**

```python
def process(value: str | None) -> str:
    if value is None:
        return "default"
    return value              # value is narrowed to str
```

Note: use `is None` / `is not None`, not `== None`. Some type checkers do not narrow on `== None`
because `__eq__` can be overridden to return arbitrary results. `is None` checks identity and cannot
be overridden.

**Truthiness narrowing:**

```python
def process(value: str | None) -> str:
    if value:
        return value          # value is narrowed to str (not None)
    return ""
```

After a truthiness check, the type is narrowed to exclude `None`, empty containers, zero, and
`False`. The exact narrowing depends on the type: for `str | None`, truthiness narrows to `str`. For
`list[int] | None`, truthiness narrows to `list[int]`.

**Length checks:**

```python
def process(items: list[int]) -> int:
    if len(items) > 0:
        return items[0]       # OK: list is known to be non-empty
    raise ValueError("empty list")
```

Some type checkers narrow `list[int]` to `list[int]` (no useful narrowing) while others narrow to a
non-empty list type. Check your type checker's documentation for specifics.

**`assert`:**

```python
def process(value: object) -> int:
    assert isinstance(value, int)
    return value              # value is narrowed to int
```

`assert` triggers narrowing just like `if`. Type checkers treat `assert isinstance(x, T)` as a
narrowing guard. Note that `assert` can be disabled at runtime with `python -O`, so do not rely on
it for correctness -- only for type narrowing and development-time checks.

**Literal matching:**

```python
from typing import Literal

def process(action: Literal["create", "delete"]) -> None:
    if action == "create":
        reveal_type(action)  # Literal["create"]
    else:
        reveal_type(action)  # Literal["delete"]
```

### `cast()` — Explicit Type Assertion

`typing.cast()` tells the type checker "trust me, this value is of type `T`." It performs **no
runtime check**. At runtime, `cast` is a no-op that returns its argument unchanged:

```python
from typing import cast

def process(data: dict[str, object]) -> int:
    return cast(int, data["id"])
```

If `data["id"]` is actually a string at runtime, `cast` will not raise an error. The program will
proceed with whatever value is there, potentially causing a downstream failure. `cast` is a tool for
last-resort cases where you know the type better than the type checker (e.g., after a runtime check
that the type checker cannot understand, or when interfacing with untyped code).

Prefer `isinstance` checks over `cast` wherever possible. `cast` should be a controlled escape
hatch, not a default pattern.

## Generic Classes

A generic class is parameterized by one or more type variables. This lets you create containers,
prototypes, and abstractions that are type-safe regardless of the concrete types they hold.

### Basic Generic Class

```python
from typing import Generic, TypeVar

T = TypeVar("T")

class Box(Generic[T]):
    def __init__(self, value: T) -> None:
        self._value = value

    def get(self) -> T:
        return self._value

    def set(self, value: T) -> None:
        self._value = value
```

At runtime, `Box[int]` and `Box[str]` are the same class (`Box`). The type parameter exists only in
the type system. This is called **type erasure**, and it is the same model used by Java's generics.

### Multiple Type Parameters

```python
from typing import Generic, TypeVar

K = TypeVar("K")
V = TypeVar("V")

class Pair(Generic[K, V]):
    def __init__(self, key: K, value: V) -> None:
        self.key = key
        self.value = value
```

### Bounded TypeVars

`TypeVar` with `bound` restricts the type variable to a specific type or its subtypes:

```python
from typing import TypeVar, Generic

class Animal:
    def speak(self) -> str:
        return "..."

T = TypeVar("T", bound=Animal)

class Shelter(Generic[T]):
    def __init__(self) -> None:
        self._animals: list[T] = []

    def add(self, animal: T) -> None:
        self._animals.append(animal)

    def first(self) -> T:
        return self._animals[0]
```

Inside `Shelter[T]`, `T` is known to be `Animal` or a subclass, so you can call `.speak()` on any
`T` value.

### `__class_getitem__`

When you write `Box[int]`, Python calls `Box.__class_getitem__(int)`. This is how subscripting a
class works at runtime. `Generic[T]` provides the default `__class_getitem__` implementation. You
can override it for custom behavior, but this is rarely needed:

```python
class Box:
    def __class_getitem__(cls, item):
        return f"{cls.__name__}[{item.__name__}]"

print(Box[int])  # Box[int] (a string, not a GenericAlias)
```

### Generic Methods

Individual methods can be generic even if the class itself is not:

```python
from typing import TypeVar

T = TypeVar("T")

class Formatter:
    def format(self, value: T) -> str:
        return str(value)

    def format_all(self, *values: T) -> list[str]:
        return [str(v) for v in values]
```

### Subclassing Generic Classes

```python
from typing import Generic, TypeVar

T = TypeVar("T")

class Box(Generic[T]):
    def __init__(self, value: T) -> None:
        self._value = value

    def get(self) -> T:
        return self._value

class LockedBox(Box[T]):
    def __init__(self, value: T) -> None:
        super().__init__(value)
        self._locked = False

    def lock(self) -> None:
        self._locked = True

    def get(self) -> T:
        if self._locked:
            raise RuntimeError("box is locked")
        return super().get()
```

`LockedBox` inherits the type parameter `T` from `Box`. `LockedBox[int]` is a `Box[int]`. The type
checker preserves the relationship.

## Type Stubs (`.pyi` Files)

### What They Are

A `.pyi` file is a type stub file. It contains **only** type annotations and no executable code.
Type checkers use `.pyi` files as the source of type information for a module, preferentially over
the corresponding `.py` file.

```python
# my_module.pyi
def connect(host: str, port: int, *, timeout: float = 30.0) -> Connection: ...
def disconnect(conn: Connection) -> None: ...

class Connection:
    def send(self, data: bytes) -> int: ...
    def recv(self, bufsize: int) -> bytes: ...
    def close(self) -> None: ...
```

The `...` (ellipsis) is the required body for function and method stubs. It is a valid Python
expression that serves as a placeholder. Each stub is a complete function definition with type
annotations but no implementation.

### When They Are Needed

1. **C extensions:** Modules written in C (`.so` / `.pyd` files) have no Python source code to
   annotate. The `.pyi` file is the only way to provide type information.
2. **Compiled/generated modules:** Code generated by tools (Protobuf, Thrift, Pydantic models) may
   produce Python files that are not meant to be edited by hand. Stubs provide a stable interface
   layer.
3. **Separating interface from implementation:** In large codebases, you may want to publish type
   information without publishing the implementation. Stubs serve as a public API surface.
4. **Legacy code:** When you cannot modify the source (third-party code, frozen dependencies), stubs
   let you add types without touching the implementation.

### Discovery

Type checkers look for `.pyi` files using the same module resolution mechanism as Python's import
system. For a module `foo.bar`, the type checker looks for:

1. `foo/bar.pyi` (stub file in the package directory)
2. `foo/bar.py` (regular Python file, with inline annotations)
3. `foo/__pycache__/bar.pyi` (not standard; some tools use this)

If both `foo/bar.py` and `foo/bar.pyi` exist, the type checker uses the `.pyi` file and ignores the
`.py` file for type checking purposes. At runtime, Python still imports the `.py` file.

### `typeshed`

`typeshed` (github.com/python/typeshed) is the repository of type stubs for the Python standard
library and selected third-party packages. It is the authoritative source for stdlib types and is
bundled with most type checkers.

When you `import json` and the type checker knows that `json.loads` returns `Any`, that information
comes from `typeshed/stdlib/json.pyi`.

### `@typing.overload` in Stubs

Stubs frequently use `@overload` to document the multiple signatures of functions that accept
different argument types. This is especially common for built-in functions and stdlib functions that
have evolved over many Python versions:

```python
# typeshed/stdlib/builtins.pyi (simplified)
@overload
def len(obj: Sized) -> int: ...
@overload
def len(obj: bytearray) -> int: ...
```

## Common Pitfalls

1. **Using `Any` as a shortcut.** `Any` disables all type checking for the annotated value. Code
   typed as `Any` can be used in any context without errors. This defeats the purpose of a type
   system. If you genuinely do not know the type, use `Unknown` (pyright) or add a `# type: ignore`
   comment to acknowledge the gap explicitly. `Any` should be a deliberate choice, not a default.

2. **Confusing `Optional[X]` with default arguments.** `Optional[X]` means the value can be `X` or
   `None`. It does not mean the function parameter has a default value. A parameter typed as
   `Optional[str]` with no default still requires an argument -- the caller must explicitly pass
   `None` or a string. Conversely, a parameter with a default value of `None` should be typed as
   `Optional[str]` (or `str | None`) to reflect that the default is `None`.

3. **Using `Type` instead of `type`.** `typing.Type[X]` and the builtin `type` are different things.
   `type` is a metaclass. `Type[X]` is a type annotation meaning "the class object `X` or a subclass
   thereof." In Python 3.9+, prefer `type[X]` over `typing.Type[X]` for consistency with the
   lowercase convention introduced by PEP 585.

4. **Forgetting that `TypedDict` is structural, not nominal.** Two TypedDicts with the same keys and
   types are interchangeable to the type checker, even if they have different names. This is by
   design (structural subtyping), but it can be surprising:

   ```python
   class User(TypedDict):
       name: str

   class Employee(TypedDict):
       name: str

   def greet(user: User) -> None: ...

   emp: Employee = {"name": "Alice"}
   greet(emp)  # OK -- structural compatibility
   ```

5. **Using `cast()` instead of proper narrowing.** `cast()` is an escape hatch that silences the
   type checker without any runtime verification. Overusing `cast()` means you are fighting the type
   system instead of working with it. Every `cast()` is a potential bug if your assumption about the
   runtime type is wrong. Always try `isinstance` checks first.

6. **Ignoring variance in generic types.** `TypeVar` supports three variance modes: covariant
   (`covariant=True`), contravariant (`contravariant=True`), and invariant (default). Getting
   variance wrong leads to type unsoundness. For example, a `MutableSequence` must be invariant in
   its element type because you can both read from and write to it. Making it covariant would allow
   inserting a `Dog` into a `list[Animal]` that is actually a `list[Cat]`. If you are unsure, use
   invariant (the default).

7. **Relying on `from __future__ import annotations` for runtime behavior.** This import changes
   annotation storage to strings. If you use `__annotations__` at runtime to inspect types, you will
   get string representations instead of actual type objects. Always use `typing.get_type_hints()`
   to resolve annotations when `from __future__ import annotations` is active.

8. **Type-checking only the happy path.** If your function returns `int | None`, the type checker
   will require you to handle the `None` case before using the value as an `int`. Do not work around
   this with `cast(int, result)` or `assert result is not None` without understanding the
   consequences. Let the type checker force you to handle edge cases -- that is its job.

9. **Mixing `TypedDict` with regular `dict` annotations.** `dict[str, int]` and a TypedDict with
   `str` keys and `int` values are structurally similar, but they are not the same type to all type
   checkers. Some type checkers treat them as compatible, others do not. Be explicit about which you
   mean.

10. **Overload order matters.** Type checkers resolve overloads top-to-bottom, picking the first
    match. If a more general overload appears before a more specific one, the specific overload will
    never be matched. Always order overloads from most specific to most general.

11. **`TypeGuard` vs `TypeIs` confusion.** `TypeGuard` does not narrow in the `False` branch. If you
    write a function that checks `isinstance(x, str)` and return `TypeGuard[str]`, the type checker
    will narrow to `str` in the `True` branch but leave it as the original type in the `False`
    branch. Use `TypeIs` when you need narrowing in both branches and the narrowed type is a subtype
    of the input.

12. **Generic `TypeVar` without bound.** An unbounded `TypeVar` can be instantiated with any type,
    including `None`. If you write `T = TypeVar("T")` and use `T` as a parameter type, the caller
    can pass `None` unless you explicitly constrain it. Use `bound=` or explicit constraints if the
    type variable should be restricted.
