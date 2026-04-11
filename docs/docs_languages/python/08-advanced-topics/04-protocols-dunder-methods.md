---
id: protocols-dunder-methods
title: Protocols and Dunder Methods
description: Python protocols — data model, comparison, iteration, arithmetic, and magic methods.
slug: protocols-dunder-methods
---

## Data Model Protocols

Python's data model defines a set of protocols that objects can implement to integrate with built-in
operations. These are invoked by the interpreter, not called directly.

### \_\_init\_\_ and \_\_new\_\_

`__new__` creates the instance (controls object creation). `__init__` initializes it (controls
object initialization):

```python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        if not hasattr(self, "initialized"):
            self.initialized = True
            self.data = []

s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True
```

:::info
`__new__` is a static method (receives the class, not the instance). It is rarely
overridden. Use cases include: singletons, immutable types that need pre-initialization validation,
and subclassing immutable built-in types like `str` and `int`.
:::

### \_\_repr\_\_ and \_\_str\_\_

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        """Unambiguous — for debugging. Should ideally be eval()-able."""
        return f"Vector({self.x!r}, {self.y!r})"

    def __str__(self):
        """Readable — for display."""
        return f"({self.x}, {self.y})"

v = Vector(1.5, 2.5)
print(repr(v))  # Vector(1.5, 2.5)
print(str(v))   # (1.5, 2.5)
print(v)        # (1.5, 2.5) — print() calls __str__
# In REPL: v shows Vector(1.5, 2.5) — REPL calls __repr__
```

### \_\_bytes\_\_, \_\_bool\_\_, \_\_len\_\_, \_\_format\_\_

```python
class BinaryData:
    def __init__(self, value):
        self.value = value

    def __bool__(self):
        return self.value != 0

    def __len__(self):
        return self.value.bit_length()

    def __format__(self, format_spec):
        if format_spec == "hex":
            return hex(self.value)
        if format_spec == "bin":
            return bin(self.value)
        return str(self.value)

bd = BinaryData(255)
print(bool(bd))          # True
print(len(bd))           # 8
print(f"{bd}")           # 255
print(f"{bd:hex}")       # 0xff
print(f"{bd:bin}")       # 0b11111111
```

## Comparison Protocols

### \_\_eq\_\_ and \_\_hash\_\_

```python
class Version:
    def __init__(self, major, minor, patch):
        self.major = major
        self.minor = minor
        self.patch = patch

    def __eq__(self, other):
        if not isinstance(other, Version):
            return NotImplemented
        return (self.major, self.minor, self.patch) == (other.major, other.minor, other.patch)

    def __hash__(self):
        return hash((self.major, self.minor, self.patch))

v1 = Version(1, 2, 3)
v2 = Version(1, 2, 3)
print(v1 == v2)      # True
print(hash(v1) == hash(v2))  # True
print({v1, v2})      # {Version(1, 2, 3)} — single element, hashable

# Can be used as dict key
versions = {v1: "stable"}
print(versions[v2])  # "stable"
```

:::warning
If you define `__eq__` without `__hash__`, Python sets `__hash__ = None`, making the
object unhashable. If you define `__hash__` without `__eq__`, objects may compare equal but hash
differently, breaking dict and set invariants.
:::

### Rich Comparison

```python
class SemanticVersion:
    def __init__(self, major, minor, patch):
        self.major = major
        self.minor = minor
        self.patch = patch

    def _tuple(self):
        return (self.major, self.minor, self.patch)

    def __eq__(self, other):
        if not isinstance(other, SemanticVersion):
            return NotImplemented
        return self._tuple() == other._tuple()

    def __lt__(self, other):
        if not isinstance(other, SemanticVersion):
            return NotImplemented
        return self._tuple() < other._tuple()

    def __le__(self, other):
        if not isinstance(other, SemanticVersion):
            return NotImplemented
        return self._tuple() <= other._tuple()

    def __gt__(self, other):
        if not isinstance(other, SemanticVersion):
            return NotImplemented
        return self._tuple() > other._tuple()

    def __ge__(self, other):
        if not isinstance(other, SemanticVersion):
            return NotImplemented
        return self._tuple() >= other._tuple()

    def __repr__(self):
        return f"SemanticVersion({self.major}, {self.minor}, {self.patch})"

v1 = SemanticVersion(1, 2, 3)
v2 = SemanticVersion(2, 0, 0)
print(v1 < v2)   # True
print(sorted([v2, v1]))  # [SemanticVersion(1, 2, 3), SemanticVersion(2, 0, 0)]
```

### Returning NotImplemented

Always return `NotImplemented` (not raise `NotImplementedError`) when the other operand is an
unsupported type. This allows Python to try the reflected operation on the other operand:

```python
class Meter:
    def __init__(self, value):
        self.value = value

    def __eq__(self, other):
        if isinstance(other, Meter):
            return self.value == other.value
        if isinstance(other, (int, float)):
            return self.value == other
        return NotImplemented  # Let Python try other.__eq__(self)

class Foot:
    def __init__(self, value):
        self.value = value

    def __eq__(self, other):
        if isinstance(other, Foot):
            return self.value == other.value
        if isinstance(other, Meter):
            return self.value == other.value * 3.28084
        return NotImplemented

print(Meter(1) == Foot(3.28084))  # True — Meter.__eq__ returns NotImplemented,
                                   # then Python tries Foot.__eq__
```

## Iteration Protocols

### \_\_iter\_\_ and \_\_next\_\_

```python
class Range:
    """Custom range implementation to understand iteration protocol."""

    def __init__(self, start, stop=None, step=1):
        if stop is None:
            self.start = 0
            self.stop = start
        else:
            self.start = start
            self.stop = stop
        self.step = step

    def __iter__(self):
        current = self.start
        while current < self.stop:
            yield current
            current += self.step

for i in Range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in Range(2, 8, 2):
    print(i)  # 2, 4, 6
```

### Iterator Class (Non-Generator)

```python
class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        self.current -= 1
        return self.current + 1

c = Countdown(5)
print(list(c))  # [5, 4, 3, 2, 1]
```

### \_\_reversed\_\_

```python
class ReversibleRange:
    def __init__(self, start, stop):
        self.start = start
        self.stop = stop

    def __iter__(self):
        return iter(range(self.start, self.stop))

    def __reversed__(self):
        return iter(range(self.stop - 1, self.start - 1, -1))

r = ReversibleRange(1, 5)
print(list(r))          # [1, 2, 3, 4]
print(list(reversed(r))) # [4, 3, 2, 1]
```

### \_\_contains\_\_

```python
class SortedList:
    def __init__(self, items):
        self.items = sorted(items)

    def __contains__(self, item):
        import bisect
        idx = bisect.bisect_left(self.items, item)
        return idx < len(self.items) and self.items[idx] == item

sl = SortedList([1, 3, 5, 7, 9])
print(5 in sl)   # True — uses __contains__ for O(log n) lookup
print(4 in sl)   # False
```

## Sequence Protocols

### \_\_getitem\_\_, \_\_setitem\_\_, \_\_delitem\_\_, \_\_len\_\_

```python
class Matrix:
    def __init__(self, rows, cols, default=0):
        self._data = [[default] * cols for _ in range(rows)]
        self.rows = rows
        self.cols = cols

    def __getitem__(self, key):
        if isinstance(key, tuple):
            row, col = key
            return self._data[row][col]
        return self._data[key]

    def __setitem__(self, key, value):
        if isinstance(key, tuple):
            row, col = key
            self._data[row][col] = value
        else:
            self._data[key] = value

    def __delitem__(self, key):
        raise TypeError("Matrix does not support item deletion")

    def __len__(self):
        return self.rows

    def __repr__(self):
        return f"Matrix({self.rows}x{self.cols})"

m = Matrix(3, 3)
m[0, 0] = 1
m[1, 1] = 5
m[2, 2] = 9
print(m[0, 0])  # 1
print(m[1])     # [0, 5, 0]
```

### Slicing

```python
class BoundedList:
    def __init__(self, data):
        self._data = list(data)

    def __getitem__(self, key):
        if isinstance(key, slice):
            return BoundedList(self._data[key])
        return self._data[key]

    def __setitem__(self, key, value):
        if isinstance(key, slice):
            self._data[key] = list(value)
        else:
            self._data[key] = value

    def __len__(self):
        return len(self._data)

    def __repr__(self):
        return f"BoundedList({self._data})"

bl = BoundedList(range(10))
print(bl[2:5])   # BoundedList([2, 3, 4])
bl[2:5] = [20, 30, 40]
print(bl)        # BoundedList([0, 1, 20, 30, 40, 5, 6, 7, 8, 9])
```

## Callable Protocol

### \_\_call\_\_

```python
class RateLimiter:
    def __init__(self, max_calls, period):
        self.max_calls = max_calls
        self.period = period
        self.calls = []

    def __call__(self, func):
        import functools
        import time

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            self.calls = [t for t in self.calls if now - t < self.period]
            if len(self.calls) >= self.max_calls:
                raise RuntimeError(f"Rate limit exceeded: {self.max_calls} calls per {self.period}s")
            self.calls.append(now)
            return func(*args, **kwargs)

        return wrapper

limiter = RateLimiter(max_calls=5, period=1.0)

@limiter
def api_call():
    return "ok"

for _ in range(5):
    print(api_call())  # ok
# api_call()  # RuntimeError: Rate limit exceeded
```

### Callable Classes as Factories

```python
class ServiceFactory:
    def __init__(self, config):
        self.config = config

    def __call__(self, service_name):
        if service_name == "database":
            return DatabaseConnection(self.config["db_url"])
        if service_name == "cache":
            return RedisConnection(self.config["redis_url"])
        raise ValueError(f"Unknown service: {service_name}")

create_service = ServiceFactory({
    "db_url": "postgresql://localhost/mydb",
    "redis_url": "redis://localhost/0",
})

db = create_service("database")
cache = create_service("cache")
```

## Arithmetic Protocols

### Binary Operators

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        return NotImplemented

    def __radd__(self, other):
        if isinstance(other, (int, float)):
            return Vector(self.x + other, self.y + other)
        return NotImplemented

    def __sub__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x - other.x, self.y - other.y)
        return NotImplemented

    def __rsub__(self, other):
        if isinstance(other, (int, float)):
            return Vector(other - self.x, other - self.y)
        return NotImplemented

    def __mul__(self, other):
        if isinstance(other, (int, float)):
            return Vector(self.x * other, self.y * other)
        if isinstance(other, Vector):
            return self.x * other.x + self.y * other.y  # Dot product
        return NotImplemented

    def __rmul__(self, other):
        return self.__mul__(other)

    def __truediv__(self, other):
        if isinstance(other, (int, float)):
            return Vector(self.x / other, self.y / other)
        return NotImplemented

    def __floordiv__(self, other):
        if isinstance(other, (int, float)):
            return Vector(self.x // other, self.y // other)
        return NotImplemented

    def __neg__(self):
        return Vector(-self.x, -self.y)

    def __abs__(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

v1 = Vector(1, 2)
v2 = Vector(3, 4)

print(v1 + v2)     # Vector(4, 6)
print(v1 - v2)     # Vector(-2, -2)
print(v1 * 3)      # Vector(3, 6)
print(3 * v1)      # Vector(3, 6) — uses __rmul__
print(v1 * v2)     # 11 — dot product
print(abs(v1))     # 2.236...
print(-v1)         # Vector(-1, -2)
```

### Reflected Operators

When `a + b` fails because `type(a).__add__` returns `NotImplemented`, Python tries
`type(b).__radd__(a)`. This enables operations with mixed types:

```python
print(5 + Vector(1, 2))  # Vector(6, 7) — int.__add__ returns NotImplemented,
                          # then Vector.__radd__ is tried
```

### In-Place Operators

```python
class Counter:
    def __init__(self, value=0):
        self.value = value

    def __iadd__(self, other):
        if isinstance(other, (int, Counter)):
            addend = other.value if isinstance(other, Counter) else other
            self.value += addend
            return self  # Must return self for in-place operations
        return NotImplemented

c = Counter(10)
c += 5        # Counter with value 15 (same object)
c += Counter(5)  # Counter with value 20
```

:::warning
If `__iadd__` is not defined, Python falls back to `__add__` and assigns the result:
`c = c + other`. This creates a new object. Define `__iadd__` when you want in-place mutation for
performance.
:::

## Bitwise Protocols

```python
class BitField:
    def __init__(self, value=0):
        self.value = value

    def __and__(self, other):
        if isinstance(other, BitField):
            return BitField(self.value & other.value)
        if isinstance(other, int):
            return BitField(self.value & other)
        return NotImplemented

    def __or__(self, other):
        if isinstance(other, BitField):
            return BitField(self.value | other.value)
        if isinstance(other, int):
            return BitField(self.value | other)
        return NotImplemented

    def __xor__(self, other):
        if isinstance(other, BitField):
            return BitField(self.value ^ other.value)
        if isinstance(other, int):
            return BitField(self.value ^ other)
        return NotImplemented

    def __invert__(self):
        return BitField(~self.value)

    def __lshift__(self, other):
        return BitField(self.value << other)

    def __rshift__(self, other):
        return BitField(self.value >> other)

    def __repr__(self):
        return f"BitField({self.value:#x})"

READ = BitField(0b001)
WRITE = BitField(0b010)
EXECUTE = BitField(0b100)

perms = READ | WRITE
print(perms)           # BitField(0x3)
print(perms & READ)    # BitField(0x1)
print(perms ^ WRITE)   # BitField(0x1)
print(~perms)          # BitField(-0x4)
```

## Copy and Deepcopy

```python
import copy

class Config:
    def __init__(self, data):
        self.data = data
        self.cache = {}

    def __copy__(self):
        """Shallow copy — new object, shared references."""
        new = self.__class__.__new__(self.__class__)
        new.data = self.data  # Shared reference
        new.cache = self.cache  # Shared reference
        return new

    def __deepcopy__(self, memo):
        """Deep copy — new object, copied values."""
        new = self.__class__.__new__(self.__class__)
        memo[id(self)] = new
        new.data = copy.deepcopy(self.data, memo)
        new.cache = {}
        return new

original = Config({"key": [1, 2, 3]})
shallow = copy.copy(original)
deep = copy.deepcopy(original)

original.data["key"].append(4)
print(original.data["key"])  # [1, 2, 3, 4]
print(shallow.data["key"])   # [1, 2, 3, 4] — shared
print(deep.data["key"])      # [1, 2, 3] — independent copy
```

## Pickle Protocol

```python
import pickle

class Connection:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self._socket = None  # Non-picklable resource

    def __getstate__(self):
        """Control what gets pickled."""
        state = self.__dict__.copy()
        state["_socket"] = None  # Remove non-picklable attributes
        return state

    def __setstate__(self, state):
        """Control what happens on unpickling."""
        self.__dict__.update(state)
        self._socket = None  # Re-initialize non-picklable attributes

conn = Connection("db.example.com", 5432)
data = pickle.dumps(conn)
conn2 = pickle.loads(data)
print(conn2.host)     # db.example.com
print(conn2._socket)  # None
```

## String Representation: Format Spec Mini-Language

```python
class Timestamp:
    def __init__(self, seconds):
        self.seconds = seconds

    def __format__(self, format_spec):
        if format_spec == "human":
            hours = int(self.seconds // 3600)
            minutes = int((self.seconds % 3600) // 60)
            secs = self.seconds % 60
            return f"{hours}h {minutes}m {secs:.1f}s"
        if format_spec == "iso":
            return f"PT{self.seconds:.0f}S"
        if format_spec == "ms":
            return f"{self.seconds * 1000:.0f}ms"
        return f"{self.seconds:.1f}s"

t = Timestamp(3661.5)
print(f"{t}")         # 3661.5s
print(f"{t:human}")   # 1h 1m 1.5s
print(f"{t:iso}")     # PT3662S
print(f"{t:ms}")      # 3661500ms
```

### Format Spec Parsing

```python
class HexBytes:
    def __init__(self, data):
        self.data = data

    def __format__(self, format_spec):
        # Format spec: [width][sep]
        # e.g., "32:" means 32 hex chars, colon separator
        width = 32
        sep = " "
        if format_spec:
            parts = format_spec.split(",")
            for part in parts:
                if part.isdigit():
                    width = int(part)
                elif len(part) == 1:
                    sep = part

        hex_str = self.data.hex()
        if sep:
            result = sep.join(hex_str[i:i+2] for i in range(0, len(hex_str), 2))
        else:
            result = hex_str
        return result

hb = HexBytes(b"\x01\x02\x03\xff")
print(f"{hb:,}")     # 01 02 03 ff
print(f"{hb:}")      # 01020 3ff
```

## Common Pitfalls

### 1. Defining \_\_eq\_\_ Makes Objects Unhashable

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        return isinstance(other, Point) and self.x == other.x and self.y == other.y

p = Point(1, 2)
# hash(p)  # TypeError: unhashable type: 'Point'
# {p}      # TypeError

# Fix: define __hash__
class HashablePoint(Point):
    def __hash__(self):
        return hash((self.x, self.y))

hp = HashablePoint(1, 2)
print({hp})  # {HashablePoint(1, 2)}
```

### 2. \_\_eq\_\_ Not Symmetric

```python
class Meter:
    def __eq__(self, other):
        if isinstance(other, Meter):
            return self.value == other.value
        return False  # Wrong — should return NotImplemented

class Foot:
    def __eq__(self, other):
        if isinstance(other, Meter):
            return abs(self.value - other.value * 3.28084) < 0.01
        return False  # Wrong

m = Meter(1)
f = Foot(3.28084)
print(m == f)  # False — Meter.__eq__ returns False
print(f == m)  # Could be True — asymmetric!
```

Always return `NotImplemented` for unsupported types to enable Python's fallback mechanism.

### 3. \_\_str\_\_ Returning Non-String

```python
class Bad:
    def __str__(self):
        return 42  # TypeError: __str__ returned non-string

class Good:
    def __str__(self):
        return "42"
```

### 4. Modifying \_\_hash\_\_ After Object in Set/Dict

```python
class MutableKey:
    def __init__(self, value):
        self.value = value

    def __hash__(self):
        return hash(self.value)

    def __eq__(self, other):
        return isinstance(other, MutableKey) and self.value == other.value

mk = MutableKey(1)
s = {mk}
mk.value = 2  # Mutate after insertion
print(mk in s)  # May be False — hash changed but position didn't
```

:::danger
Never mutate objects that are used as dict keys or set members. If mutability is needed,
use immutable snapshots or compute hash from immutable attributes.
:::

### 5. \_\_del\_\_ and Circular References

```python
import gc

class Node:
    def __init__(self, name):
        self.name = name
        self.parent = None
        self.children = []

    def __del__(self):
        print(f"Deleting {self.name}")

root = Node("root")
child = Node("child")
root.children.append(child)
child.parent = root

del root
del child
# __del__ may not be called immediately due to circular reference
# gc.collect() triggers it
gc.collect()  # Now __del__ is called
```

### 6. NotImplemented vs NotImplementedError

```python
# NotImplemented — sentinel value for comparison operators
# Return this when the operation is not supported for the given type

# NotImplementedError — exception
# Raise this when the operation is abstract and should be implemented by subclasses
```

```python
class Base:
    def process(self):
        raise NotImplementedError("Subclasses must implement process()")

class Derived(Base):
    def process(self):
        return "done"
```

### 7. Forgetting \_\_repr\_\_

```python
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

u = User("Alice", "alice@example.com")
print(u)    # <__main__.User object at 0x7f...> — useless in debugging
print(repr(u))  # Same

# Fix:
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def __repr__(self):
        return f"User({self.name!r}, {self.email!r})"
```
