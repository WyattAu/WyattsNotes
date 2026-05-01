---
id: descriptors
title: Descriptors and Properties
description:
  Descriptors and Properties — Descriptor Protocol; Data vs Non-Data
  Descriptors; Instance attribute overrides non-data descriptor; Data descriptor
  always wins.
slug: descriptors
---

## Descriptor Protocol

Descriptors are the mechanism behind `property`, `classmethod`, `staticmethod`, and the entire
attribute access system in Python. A descriptor is any object that implements at least one of
`__get__`, `__set__`, or `__delete__`.

### Data vs Non-Data Descriptors

| Type                | Methods                               | Behavior                                       |
| ------------------- | ------------------------------------- | ---------------------------------------------- |
| Non-data descriptor | `__get__` only                        | Instance attribute takes precedence            |
| Data descriptor     | `__get__` + `__set__` or `__delete__` | Descriptor always wins over instance attribute |

This distinction is fundamental to understanding Python's attribute lookup.

```python
class NonDataDescriptor:
    def __init__(self, name):
        self.name = name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return f"NonDataDescriptor for {self.name}"

class DataDescriptor:
    def __init__(self, name):
        self.name = name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return f"DataDescriptor for {self.name}"

    def __set__(self, obj, value):
        print(f"Setting {self.name} = {value}")

class Example:
    non_data = NonDataDescriptor("non_data")
    data = DataDescriptor("data")

e = Example()
print(e.non_data)  # NonDataDescriptor for non_data
print(e.data)      # DataDescriptor for data

# Instance attribute overrides non-data descriptor
e.non_data = "override"
print(e.non_data)  # override

# Data descriptor always wins
e.data = "override"  # Setting data = override
print(e.data)        # DataDescriptor for data (descriptor wins)
```

### Attribute Lookup Order

When you access `obj.attr`, Python follows this order:

1. **`type(obj).__mro__`** — Search the MRO for a data descriptor with name `attr`.
2. **`obj.__dict__`** — Check the instance dictionary.
3. **`type(obj).__mro__`** — Search the MRO for a non-data descriptor.
4. Raise `AttributeError` if nothing is found.

```python
class LookupDemo:
    """Demonstrates attribute lookup order."""

    class DataDesc:
        def __get__(self, obj, objtype=None):
            return "data descriptor"
        def __set__(self, obj, value):
            pass

    class NonDataDesc:
        def __get__(self, obj, objtype=None):
            return "non-data descriptor"

    data_desc = DataDesc()
    non_data_desc = NonDataDesc()

d = LookupDemo()
d.__dict__["data_desc"] = "instance value"
d.__dict__["non_data_desc"] = "instance value"

print(d.data_desc)       # data descriptor (step 1 wins)
print(d.non_data_desc)   # instance value (step 2 wins over step 3)
```

## property

`property` is a built-in data descriptor that wraps getter, setter, and deleter methods:

```python
class Server:
    def __init__(self, host, port):
        self._host = host
        self._port = port

    @property
    def address(self):
        return f"{self._host}:{self._port}"

    @address.setter
    def address(self, value):
        host, port = value.rsplit(":", 1)
        self._host = host
        self._port = int(port)

    @address.deleter
    def address(self):
        self._host = None
        self._port = None

s = Server("localhost", 8080)
print(s.address)       # localhost:8080
s.address = "0.0.0.0:9090"
print(s.address)       # 0.0.0.0:9090
del s.address
```

### property as a Descriptor

`property` is implemented as a data descriptor. Here is a simplified version:

```python
class Property:
    def __init__(self, fget=None, fset=None, fdel=None, doc=None):
        self.fget = fget
        self.fset = fset
        self.fdel = fdel
        self.__doc__ = doc

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        if self.fget is None:
            raise AttributeError("unreadable attribute")
        return self.fget(obj)

    def __set__(self, obj, value):
        if self.fset is None:
            raise AttributeError("can't set attribute")
        self.fset(obj, value)

    def __delete__(self, obj):
        if self.fdel is None:
            raise AttributeError("can't delete attribute")
        self.fdel(obj)

    def setter(self, fset):
        self.fset = fset
        return self

    def deleter(self, fdel):
        self.fdel = fdel
        return self
```

### cached_property

`functools.cached_property` (Python 3.8+) caches the result of a property on the instance. It is a
non-data descriptor:

```python
from functools import cached_property
import time

class ExpensiveComputation:
    def __init__(self, data):
        self.data = data

    @cached_property
    def result(self):
        """Expensive computation cached after first access."""
        time.sleep(1)  # Simulate work
        return sum(self.data)

e = ExpensiveComputation(range(1000000))
t0 = time.time()
print(e.result)  # First call: ~1 second
t1 = time.time()
print(e.result)  # Second call: instant (cached)
t2 = time.time()
print(f"First: {t1-t0:.3f}s, Second: {t2-t1:.3f}s")
```

:::warning
`cached_property` is a non-data descriptor. This means instance attributes override it:

```python
e = ExpensiveComputation(range(100))
e.result  # Computes and caches
e.result = "override"  # Replaces the cached value
del e.result  # Removes from instance dict, next access recomputes
```

:::

## classmethod and staticmethod

Both are implemented as descriptors.

### classmethod

`classmethod` transforms a method so it receives the class as its first argument instead of the
instance:

```python
class Database:
    _instance = None

    def __init__(self, host, port):
        self.host = host
        self.port = port

    @classmethod
    def from_env(cls):
        import os
        host = os.getenv("DB_HOST", "localhost")
        port = int(os.getenv("DB_PORT", "5432"))
        return cls(host, port)

    @classmethod
    def from_config(cls, config_dict):
        return cls(config_dict["host"], config_dict["port"])

# Both return a Database instance
db1 = Database.from_env()
db2 = Database.from_config({"host": "db.example.com", "port": 3306})
```

`classmethod` is a non-data descriptor:

```python
class ClassMethod:
    def __init__(self, func):
        self.func = func

    def __get__(self, obj, objtype=None):
        if objtype is None:
            objtype = type(obj)
        def bound_method(*args, **kwargs):
            return self.func(objtype, *args, **kwargs)
        return bound_method
```

### staticmethod

`staticmethod` wraps a function so it receives no implicit first argument:

```python
class MathUtils:
    @staticmethod
    def clamp(value, min_val, max_val):
        return max(min_val, min(max_val, value))

    @staticmethod
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True

print(MathUtils.clamp(150, 0, 100))  # 100
print(MathUtils.is_prime(17))         # True
```

`staticmethod` is also a descriptor, but a simple one — it just returns the original function
without binding:

```python
class StaticMethod:
    def __init__(self, func):
        self.func = func

    def __get__(self, obj, objtype=None):
        return self.func
```

:::tip
Use `@staticmethod` when a method does not need access to `self` or `cls`. Use `@classmethod`
when you need the class (e.g., for alternative constructors). Use a regular method when you need the
instance.
:::

## \_\_slots\_\_

`__slots__` replaces the instance `__dict__` with a fixed set of attribute descriptors, saving
memory and preventing dynamic attribute creation:

```python
class Point:
    __slots__ = ("x", "y")

    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
print(p.x, p.y)  # 1 2
p.z = 3  # AttributeError: 'Point' object has no attribute 'z'
```

### Memory Savings

```python
import sys

class WithoutSlots:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class WithSlots:
    __slots__ = ("x", "y")
    def __init__(self, x, y):
        self.x = x
        self.y = y

ws = WithoutSlots(1, 2)
wsl = WithSlots(1, 2)

print(sys.getsizeof(ws))   # 56 bytes (instance + __dict__)
print(sys.getsizeof(wsl))  # 48 bytes (instance only, no __dict__)

# The savings compound with many instances
ws_list = [WithoutSlots(i, i) for i in range(100000)]
wsl_list = [WithSlots(i, i) for i in range(100000)]
```

On CPython 3.12, a slotted instance with two attributes uses ~48 bytes versus ~56 bytes for a
regular instance (which includes the `__dict__` overhead). The savings are more significant when you
have many instances.

### **slots** Rules

1. **All parent classes must also use `__slots__`** — If a parent has `__dict__`, the child will
   too, negating the benefit.
2. **`__slots__` is inherited** — A child class gets the parent's slots plus its own.
3. **You cannot add attributes not in `__slots__`** — This is the whole point.
4. **`__slots__` must contain strings** — Not expressions.
5. **`__dict__` and `__weakref__` are special** — You can add them to `__slots__` to enable dynamic
   attributes or weak references.

```python
class Base:
    __slots__ = ("x",)

class Child(Base):
    __slots__ = ("y",)  # Inherits x from Base, adds y

c = Child()
c.x = 1
c.y = 2
# c.z = 3  # AttributeError

# To allow dynamic attributes AND slots:
class Flexible:
    __slots__ = ("x", "__dict__")

f = Flexible()
f.x = 1
f.dynamic = "allowed"  # Stored in __dict__
```

:::warning
`__slots__` prevents `__dict__` by default, which means `pickle` with protocol 0 may not
work correctly. Always test serialization with your chosen protocol when using `__slots__`.
:::

## \_\_getattr\_\_ and \_\_getattribute\_\_

These two methods control attribute access but have very different behaviors:

### **getattr**

Called **only when normal attribute lookup fails**. This makes it a fallback mechanism:

```python
class ConfigProxy:
    def __init__(self, data):
        self._data = data

    def __getattr__(self, name):
        if name.startswith("_"):
            raise AttributeError(name)
        try:
            return self._data[name]
        except KeyError:
            raise AttributeError(f"Config has no key '{name}'")

config = ConfigProxy({"host": "localhost", "port": 8080})
print(config.host)   # localhost
print(config.port)   # 8080
print(config.missing) # AttributeError: Config has no key 'missing'
```

### **getattribute**

Called **for every attribute access**, unconditionally. This is dangerous and easy to get wrong:

```python
class StrictAccess:
    def __init__(self):
        self._allowed = {"x", "y"}

    def __getattribute__(self, name):
        allowed = object.__getattribute__(self, "_allowed")
        if name.startswith("_") or name in allowed:
            return object.__getattribute__(self, name)
        raise AttributeError(f"Access to '{name}' is not allowed")

s = StrictAccess()
print(s.x)        # Works
# print(s.z)      # AttributeError: Access to 'z' is not allowed
```

:::danger
When implementing `__getattribute__`, you **must** use
`object.__getattribute__(self, name)` for any attribute access within the method. Using `self.name`
will cause infinite recursion because it triggers `__getattribute__` again.
:::

## \_\_setattr\_\_ and \_\_delattr\_\_

### **setattr**

Called for every attribute assignment (`obj.attr = value`):

```python
class ValidatedConfig:
    def __setattr__(self, name, value):
        if name.startswith("_"):
            object.__setattr__(self, name, value)
            return

        if not isinstance(value, (str, int, float, bool)):
            raise TypeError(f"Value for '{name}' must be a primitive type, got {type(value).__name__}")
        object.__setattr__(self, name, value)

vc = ValidatedConfig()
vc.host = "localhost"  # OK
vc.port = 8080         # OK
# vc.data = [1, 2, 3]  # TypeError: Value for 'data' must be a primitive type
```

### **delattr**

Called for every attribute deletion (`del obj.attr`):

```python
class ProtectedAttributes:
    PROTECTED = {"version", "build"}

    def __delattr__(self, name):
        if name in self.PROTECTED:
            raise AttributeError(f"Cannot delete protected attribute '{name}'")
        object.__delattr__(self, name)

pa = ProtectedAttributes()
pa.version = "1.0"
# del pa.version  # AttributeError: Cannot delete protected attribute 'version'
```

:::warning
Same recursion rule applies: always use `object.__setattr__(self, name, value)` and
`object.__delattr__(self, name)` within these methods.
:::

## \_\_dir\_\_

The `__dir__` method customizes the output of `dir()` and tab-completion in interactive shells:

```python
class APIClient:
    def __init__(self):
        self._session = None
        self._base_url = "https://api.example.com"

    def __dir__(self):
        public = [a for a in self.__dict__ if not a.startswith("_")]
        public.extend([f for f in dir(type(self)) if not f.startswith("_") and callable(getattr(self, f))])
        return sorted(public)

client = APIClient()
print(dir(client))  # Shows only public attributes and methods
```

## functools: total_ordering and singledispatchmethod

### functools.total_ordering

`@total_ordering` fills in the remaining comparison methods when you define `__eq__` and one of
`__lt__`, `__le__`, `__gt__`, or `__ge__`:

```python
from functools import total_ordering

@total_ordering
class Version:
    def __init__(self, major, minor, patch):
        self.major = major
        self.minor = minor
        self.patch = patch

    def __eq__(self, other):
        if not isinstance(other, Version):
            return NotImplemented
        return (self.major, self.minor, self.patch) == (other.major, other.minor, other.patch)

    def __lt__(self, other):
        if not isinstance(other, Version):
            return NotImplemented
        return (self.major, self.minor, self.patch) < (other.major, other.minor, other.patch)

    def __repr__(self):
        return f"Version({self.major}, {self.minor}, {self.patch})"

v1 = Version(1, 2, 3)
v2 = Version(2, 0, 0)

print(v1 < v2)   # True
print(v1 <= v2)  # True (generated by total_ordering)
print(v1 > v2)   # False (generated)
print(v1 >= v2)  # False (generated)
```

:::warning
`@total_ordering` adds overhead because each generated method calls the others. For
performance-critical code, implement all six comparison methods explicitly.
:::

### functools.singledispatchmethod

`@singledispatchmethod` (Python 3.8+) provides method overloading based on the type of the first
argument:

```python
from functools import singledispatchmethod

class Serializer:
    @singledispatchmethod
    def serialize(self, value):
        raise NotImplementedError(f"Cannot serialize {type(value).__name__}")

    @serialize.register(str)
    def _(self, value):
        return value

    @serialize.register(int)
    def _(self, value):
        return str(value)

    @serialize.register(list)
    def _(self, value):
        return "[" + ", ".join(self.serialize(v) for v in value) + "]"

s = Serializer()
print(s.serialize("hello"))  # hello
print(s.serialize(42))       # 42
print(s.serialize([1, "a"])) # [1, a]
```

## Custom Descriptor Examples

### Type-Checked Attribute

```python
class TypedField:
    def __init__(self, name, expected_type):
        self.name = name
        self.expected_type = expected_type

    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return obj.__dict__.get(self.name)

    def __set__(self, obj, value):
        if not isinstance(value, self.expected_type):
            raise TypeError(
                f"Expected {self.expected_type.__name__} for '{self.name}', "
                f"got {type(value).__name__}"
            )
        obj.__dict__[self.name] = value

class ServerConfig:
    host = TypedField(str)
    port = TypedField(int)
    timeout = TypedField(float)

sc = ServerConfig()
sc.host = "0.0.0.0"    # OK
sc.port = 8080          # OK
sc.timeout = 30.5       # OK
# sc.port = "8080"      # TypeError: Expected int for 'port', got str
```

### Lazy Loading Descriptor

```python
class LazyProperty:
    def __init__(self, factory):
        self.factory = factory
        self.attrname = None

    def __set_name__(self, owner, name):
        self.attrname = f"_lazy_{name}"

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        if not hasattr(obj, self.attrname):
            setattr(obj, self.attrname, self.factory(obj))
        return getattr(obj, self.attrname)

class DatabaseConnection:
    def __init__(self, host):
        self.host = host

    @LazyProperty
    def connection_pool(self):
        print("Creating connection pool...")
        return f"Pool connected to {self.host}"

db = DatabaseConnection("db.example.com")
print("Before first access")
print(db.connection_pool)  # Creating connection pool... / Pool connected to db.example.com
print(db.connection_pool)  # Pool connected to db.example.com (cached, no print)
```

### Validation Descriptor

```python
class RangeValidator:
    def __init__(self, min_val=None, max_val=None):
        self.min_val = min_val
        self.max_val = max_val

    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return obj.__dict__.get(self.name)

    def __set__(self, obj, value):
        if self.min_val is not None and value < self.min_val:
            raise ValueError(f"{self.name} must be >= {self.min_val}, got {value}")
        if self.max_val is not None and value > self.max_val:
            raise ValueError(f"{self.name} must be <= {self.max_val}, got {value}")
        obj.__dict__[self.name] = value

class ProcessConfig:
    max_workers = RangeValidator(min_val=1, max_val=64)
    timeout = RangeValidator(min_val=1, max_val=3600)
    retry_count = RangeValidator(min_val=0, max_val=10)

pc = ProcessConfig()
pc.max_workers = 8     # OK
# pc.max_workers = 0   # ValueError: max_workers must be >= 1, got 0
# pc.timeout = 5000    # ValueError: timeout must be <= 3600, got 5000
```

## Descriptor Use Cases

### ORM Fields

Descriptors are the foundation of most Python ORM field implementations:

```python
class Field:
    def __init__(self, column_name=None, primary_key=False):
        self.column_name = column_name
        self.primary_key = primary_key

    def __set_name__(self, owner, name):
        self.name = name
        self.column_name = self.column_name or name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return obj._data.get(self.column_name)

    def __set__(self, obj, value):
        obj._data[self.column_name] = value

class BaseModel:
    _table_name = None

    def __init__(self, **kwargs):
        self._data = {}
        for name, value in kwargs.items():
            setattr(self, name, value)

    @classmethod
    def get_fields(cls):
        return {name: attr for name, attr in cls.__dict__.items() if isinstance(attr, Field)}

class User(BaseModel):
    _table_name = "users"
    id = Field(primary_key=True)
    username = Field()
    email = Field()
    is_active = Field()

user = User(id=1, username="admin", email="admin@example.com", is_active=True)
print(user.username)  # admin
print(user.email)     # admin@example.com
print(User.get_fields())  # Shows all Field instances
```

### Logging Descriptor

```python
import logging

class LoggedAccess:
    def __init__(self, log_level=logging.DEBUG):
        self.log_level = log_level
        self.name = None

    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        value = obj.__dict__.get(self.name)
        logging.log(self.log_level, f"Accessed {self.name} on {type(obj).__name__}")
        return value

    def __set__(self, obj, value):
        logging.log(self.log_level, f"Setting {self.name} = {value!r} on {type(obj).__name__}")
        obj.__dict__[self.name] = value

class Service:
    state = LoggedAccess()

s = Service()
s.state = "running"  # Logs: Setting state = 'running' on Service
_ = s.state          # Logs: Accessed state on Service
```

## Common Pitfalls

### 1. Forgetting **set_name**

```python
class BadDescriptor:
    def __init__(self, name):
        self.name = name  # This works only if you pass the name manually

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return obj.__dict__.get(self.name)

class GoodDescriptor:
    def __set_name__(self, owner, name):
        self.name = name  # Automatically called at class creation time

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return obj.__dict__.get(self.name)
```

Python 3.6+ calls `__set_name__` automatically. Use it instead of passing names manually.

### 2. Data Descriptor Prevents Instance Attribute Assignment

```python
class AlwaysZero:
    def __get__(self, obj, objtype=None):
        return 0
    def __set__(self, obj, value):
        pass  # Silently ignores assignment

class Example:
    value = AlwaysZero()

e = Example()
e.value = 42
print(e.value)  # 0 — the descriptor's __set__ ignores the assignment
```

If you need to allow override, make it a non-data descriptor (implement only `__get__`).

### 3. cached_property and Pickle

```python
from functools import cached_property
import pickle

class Obj:
    @cached_property
    def computed(self):
        return 42

obj = Obj()
_ = obj.computed
data = pickle.dumps(obj)
obj2 = pickle.loads(data)
# obj2.computed may not exist if the cached value wasn't pickled
# The descriptor recomputes on next access, which is usually fine
```

### 4. **slots** and Multiple Inheritance

```python
class A:
    __slots__ = ("x",)

class B:
    __slots__ = ("y",)

# class C(A, B):  # TypeError: multiple bases have instance lay-out conflict
#     pass

# Fix: use a common base or avoid multiple inheritance with __slots__
class Base:
    __slots__ = ()

class A(Base):
    __slots__ = ("x",)

class B(Base):
    __slots__ = ("y",)

class C(A, B):  # Works — both inherit from Base
    __slots__ = ("z",)
```

### 5. Infinite Recursion in **getattribute**

```python
class Bad:
    def __getattribute__(self, name):
        return self.__dict__[name]  # RecursionError!

class Good:
    def __getattribute__(self, name):
        return object.__getattribute__(self, name)  # Correct
```

### 6. Descriptor on the Instance

Descriptors only work when defined on the **class** (or a base class). Assigning a descriptor to an
instance attribute does nothing special:

```python
class Desc:
    def __get__(self, obj, objtype=None):
        return "descriptor"

class Example:
    pass

Example.class_level = Desc()   # Works as descriptor
e = Example()
e.instance_level = Desc()      # Does NOT work as descriptor

print(e.class_level)     # descriptor
print(e.instance_level)  # <Desc object at 0x...> — just a regular object
```

### 7. property Getter Returning None vs Not Set

```python
class Tricky:
    @property
    def value(self):
        return None  # This is a valid return value

    @value.setter
    def value(self, v):
        pass

t = Tricky()
print(t.value)  # None — was it set to None or never set?
# There's no way to tell with property alone. Track state explicitly if needed.
```
