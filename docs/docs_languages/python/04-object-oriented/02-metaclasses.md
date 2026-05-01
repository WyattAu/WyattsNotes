---
title: Metaclasses and Class Creation
description:
  "Metaclasses and Class Creation — How Class Statements Work; `type()` as Metaclass; Custom Metaclasses; `__new__`: Controlling Class Creation."
date: 2026-04-05T00:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: metaclasses
---

## How Class Statements Work

The `class` statement in Python is not a declarative construct. It is an executable statement that
runs at import time (or at function call time if the class is defined inside a function).
Understanding this is the prerequisite for understanding metaclasses, because the class body is a
code block that gets executed, and the result of that execution is handed to a callable -- the
metaclass -- which produces the class object.

The full sequence when Python encounters `class Foo(Base, metaclass=Meta):` is:

1. The class name (`Foo`), base classes (`(Base,)`), and keyword arguments (including `metaclass=`)
   are captured from the class header.
2. If no `metaclass` keyword is given, the metaclass is determined by looking at the `__class__` of
   the first base class (if any), or defaulting to `type`. This is the metaclass computation rule.
3. The metaclass's `__prepare__` method is called with the class name and base classes. It returns a
   namespace mapping (by default, an empty `dict`). This namespace is where all assignments and
   function definitions in the class body will be stored.
4. The class body is executed as a code block, using the namespace from step 3 as the local
   namespace. Every `def`, every assignment, every expression at the top level of the class body
   runs right now.
5. The resulting namespace dict, along with the class name and base classes, is passed to the
   metaclass's `__new__` and `__init__` methods to construct and initialize the class object.
6. The class object is bound to the class name (`Foo`) in the enclosing scope.

The critical insight is step 4: the class body is arbitrary Python code. It can contain `if`
statements, `for` loops, imports, and function calls. This is not syntax sugar -- it is the
fundamental mechanism that makes decorators, descriptors, and metaclasses possible.

```python
def make_property(name):
    def getter(self):
        return getattr(self, f"_{name}")

    def setter(self, value):
        setattr(self, f"_{name}", value)

    return property(getter, setter)

class Entity:
    for field in ("name", "email", "phone"):
        locals()[field] = make_property(field)

    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone

e = Entity("Alice", "alice@example.com", "555-1234")
print(e.name)   # Alice
e.email = "new@example.com"
print(e.email)  # new@example.com
```

This works because the `for` loop executes during class creation, and each call to `make_property`
returns a `property` object (a data descriptor) that gets stored in the class namespace under the
corresponding field name.

## `type()` as Metaclass

Every class in Python is an instance of `type`. Every class's metaclass is `type` unless explicitly
overridden. The relationship `isinstance(int, type)` is `True`. The relationship
`isinstance(type, type)` is also `True` -- `type` is an instance of itself. And
`isinstance(type, object)` is `True` because `type` inherits from `object`. This circular
relationship between `type` and `object` is the foundation of Python's object model.

`type` has a three-argument form that constructs classes dynamically:

```python
MyClass = type(
    "MyClass",       # __name__
    (object,),       # __bases__
    {                # namespace dict
        "x": 10,
        "get_x": lambda self: self.x,
    }
)

obj = MyClass()
print(obj.x)      # 10
print(obj.get_x())  # 10
print(type(MyClass))  # <class 'type'>
```

The three-argument form is equivalent to what the `class` statement does under the hood. The
single-argument form `type(obj)` returns the type of an object, but the three-argument form
`type(name, bases, dict)` creates a new class. These are two completely different operations
dispatched on the number of arguments.

When you write:

```python
class Foo:
    x = 10
```

Python effectively does:

```python
namespace = {}
exec("x = 10", {}, namespace)
Foo = type("Foo", (), namespace)
```

This is a simplification (the actual process involves `__prepare__` and separate
`__new__`/`__init__` calls), but it captures the essential mechanism.

## Custom Metaclasses

A custom metaclass is a class that inherits from `type`. It intercepts the class creation process at
three distinct points, each with a different purpose and different capabilities.

### `__new__`: Controlling Class Creation

`__new__` is a class method (on the metaclass) that receives the metaclass itself, the class name,
the base classes, and the namespace dict. It must return the newly created class object. This is
where you can modify the namespace before the class is built, reject the class entirely, or return a
completely different class object.

```python
class ValidateFields(type):
    def __new__(mcs, name, bases, namespace):
        for attr_name, attr_value in namespace.items():
            if not attr_name.startswith("_") and not callable(attr_value):
                if not isinstance(attr_value, (int, float, str, bool)):
                    raise TypeError(
                        f"Class {name}: field '{attr_name}' has non-literal type {type(attr_value).__name__}"
                    )
        return super().__new__(mcs, name, bases, namespace)

class Config(metaclass=ValidateFields):
    host = "localhost"
    port = 8080
    debug = True

class BadConfig(metaclass=ValidateFields):
    host = "localhost"
    data = [1, 2, 3]  # TypeError at class definition time
```

The `mcs` parameter is the metaclass itself (analogous to `cls` in a normal class method). It is
conventionally named `mcs` (for "metaclass") but any name works. The name, bases, and namespace are
the three things that define a class.

### `__init__`: Controlling Class Initialization

`__init__` runs after `__new__` has returned the class object. It receives the same arguments as
`__new__` but can modify the already-created class in place. The class object exists at this point,
so you can set attributes on it, register it, or perform validation that requires inspecting the
final class.

```python
class RegisterSubclasses(type):
    registry = {}

    def __init__(cls, name, bases, namespace):
        super().__init__(name, bases, namespace)
        if not name.startswith("Abstract") and not bases[0].__name__.startswith("Abstract"):
            cls.registry[name] = cls

class AbstractHandler(metaclass=RegisterSubclasses):
    pass

class JsonHandler(AbstractHandler):
    pass

class XmlHandler(AbstractHandler):
    pass

print(RegisterSubclasses.registry)
# {'JsonHandler': <class 'JsonHandler'>, 'XmlHandler': <class 'XmlHandler'>}
```

Note that `AbstractHandler` itself gets registered unless you explicitly exclude it. The `name`
check in `__init__` filters out base classes, but this is fragile. A more robust approach checks
whether the class defines the required abstract methods.

### `__prepare__`: Custom Namespace

`__prepare__` is called before the class body is executed. It receives the class name and base
classes and must return a mapping object that will serve as the namespace for the class body. The
default implementation returns a plain `dict`, but you can return an `OrderedDict` (or any mapping)
to control the order in which attributes are recorded.

```python
class OrderedMeta(type):
    @classmethod
    def __prepare__(mcs, name, bases):
        from collections import OrderedDict
        return OrderedDict()

    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, dict(namespace))
        cls._ordered_fields = list(namespace.keys())
        return cls

class Column:
    def __init__(self, name, col_type):
        self.name = name
        self.col_type = col_type

class Table(metaclass=OrderedMeta):
    id = Column("id", "INTEGER PRIMARY KEY")
    name = Column("name", "TEXT NOT NULL")
    email = Column("email", "TEXT UNIQUE")

print(Table._ordered_fields)
# ['__module__', '__qualname__', 'id', 'name', 'email']
```

Since Python 3.6, the default `dict` preserves insertion order as a language guarantee (not just a
CPython implementation detail), so `__prepare__` returning `OrderedDict` is less necessary than it
was in Python 3.5. However, `__prepare__` is still useful when you need a namespace with custom
behavior -- for example, a namespace that deduplicates keys, tracks access patterns, or provides
validation on assignment during class body execution.

### `__call__`: Controlling Instance Creation

`__call__` on the metaclass controls what happens when you call the class to create an instance:
`obj = MyClass()`. When you call a class, Python invokes
`type(MyClass).__call__(MyClass, *args, **kwargs)`. The default `type.__call__` does three things:

1. Calls `MyClass.__new__(MyClass, *args, **kwargs)` to allocate the instance.
2. If the returned object is an instance of `MyClass`, calls
   `MyClass.__init__(instance, *args, **kwargs)` to initialize it.
3. Returns the instance.

By overriding `__call__` on the metaclass, you can intercept and modify any of these steps. This is
the mechanism behind `__init_subclass__`-style hooks and is how many frameworks (e.g., Django ORM,
SQLAlchemy) implement singleton patterns, caching, and proxy objects.

```python
class SingletonMeta(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self, url):
        self.url = url

db1 = Database("postgres://localhost/main")
db2 = Database("postgres://localhost/replica")
print(db1 is db2)  # True
print(db1.url)     # postgres://localhost/main
```

The order of operations in a metaclass is:

1. `__prepare__` -- returns the namespace
2. Class body executes -- populates the namespace
3. `__new__` -- creates the class object from (name, bases, namespace)
4. `__init__` -- initializes the class object
5. `__call__` -- invoked when the class is called to create instances

## `__init_subclass__`

`__init_subclass__` (PEP 487, Python 3.6) provides a hook that runs in the parent class whenever a
subclass is created. It eliminates many use cases that previously required metaclasses. The method
is defined on the parent class and receives the new subclass as `cls`, along with any keyword
arguments passed in the class header.

```python
class PluginBase:
    def __init_subclass__(cls, /, **kwargs):
        super().__init_subclass__(**kwargs)
        if not hasattr(cls, "register_name"):
            cls.register_name = cls.__name__.lower()

class MarkdownPlugin(PluginBase):
    pass

class HtmlPlugin(PluginBase):
    register_name = "html-renderer"

print(MarkdownPlugin.register_name)  # "markdownplugin"
print(HtmlPlugin.register_name)      # "html-renderer"
```

`__init_subclass__` also supports keyword arguments in the class header:

```python
class Validator:
    def __init_subclass__(cls, *, required_fields=None, **kwargs):
        super().__init_subclass__(**kwargs)
        cls._required_fields = required_fields or []

    def validate(self, data):
        missing = [f for f in self._required_fields if f not in data]
        if missing:
            raise ValueError(f"Missing fields: {missing}")

class UserValidator(Validator, required_fields=["email", "name"]):
    pass

uv = UserValidator()
uv.validate({"email": "a@b.com", "name": "Alice"})  # OK
uv.validate({"email": "a@b.com"})  # ValueError: Missing fields: ['name']
```

### When to Use `__init_subclass__` vs Metaclasses

`__init_subclass__` is the right choice when:

- You need to hook into subclass creation but do not need to control the namespace before the class
  body executes.
- You want to pass configuration via keyword arguments in the class header.
- You want the hook to be inherited naturally through the class hierarchy.
- You want to avoid metaclass conflicts (see below).

Metaclasses are the right choice when:

- You need `__prepare__` to customize the namespace mapping.
- You need to modify the namespace before the class object is created (in `__new__`).
- You need `__call__` to control instance creation (e.g., singleton, caching).
- You need to enforce structural constraints on the class itself (not just register it).

The practical rule: reach for `__init_subclass__` first. Switch to a metaclass only when you cannot
achieve what you need with `__init_subclass__` plus class decorators and descriptors.

## `__set_name__`

`__set_name__` (PEP 487, Python 3.6) is called automatically on every descriptor defined in a
class's namespace when the class is created. It receives the owning class and the attribute name the
descriptor was assigned to. This eliminates the boilerplate of passing attribute names as string
arguments to descriptor constructors.

```python
class TypedField:
    def __init__(self, field_type, default=None):
        self.field_type = field_type
        self.default = default
        self.private_name = None

    def __set_name__(self, owner, name):
        self.public_name = name
        self.private_name = f"_{name}"

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return getattr(obj, self.private_name, self.default)

    def __set__(self, obj, value):
        if not isinstance(value, self.field_type):
            raise TypeError(
                f"Expected {self.field_type.__name__} for '{self.public_name}', "
                f"got {type(value).__name__}"
            )
        setattr(obj, self.private_name, value)

class User:
    name = TypedField(str)
    age = TypedField(int, default=0)
    active = TypedField(bool, default=True)

    def __init__(self, name, age):
        self.name = name
        self.age = age

u = User("Alice", 30)
print(u.name)   # Alice
print(u.age)    # 30
print(u.active) # True (default)
u.name = 42     # TypeError: Expected str for 'name', got int
```

The call sequence during class creation is:

1. `__prepare__` returns the namespace.
2. The class body executes. `name = TypedField(str)` creates a `TypedField` instance and stores it
   in the namespace under the key `"name"`.
3. After the class body finishes, the metaclass iterates over all items in the namespace. For each
   item that has a `__set_name__` method, it calls `item.__set_name__(class_object, key_name)`.
4. `__new__` and `__init__` are called to create and initialize the class.

This means `__set_name__` runs before `__init__` on the metaclass but after the class body has fully
executed. It is implemented in `type.__new__` itself, so it works with the default metaclass without
any custom metaclass code.

## Metaclass Use Cases

### Singleton Pattern

The singleton pattern ensures that only one instance of a class exists. Metaclass-based singletons
are thread-safe in CPython because `__call__` acquires the GIL for the entire operation, but they
are not safe against truly concurrent access in free-threaded Python (PEP 703).

```python
class SingletonMeta(type):
    def __init__(cls, name, bases, namespace):
        super().__init__(name, bases, namespace)
        cls._instance = None

    def __call__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__call__(*args, **kwargs)
        return cls._instance

class AppConfig(metaclass=SingletonMeta):
    def __init__(self, debug=False):
        self.debug = debug

c1 = AppConfig(debug=True)
c2 = AppConfig(debug=False)
print(c1 is c2)    # True
print(c1.debug)    # True (first call wins)
```

### Validation and Registration

A common pattern in frameworks: every subclass of a base class is automatically registered in a
central index, enabling runtime dispatch based on a configuration key.

```python
class CommandMeta(type):
    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, namespace)
        if not name.startswith("Base") and not bases[0].__name__.startswith("Base"):
            if not hasattr(cls, "command_name"):
                raise TypeError(f"{name} must define 'command_name'")
            cls._registry[cls.command_name] = cls
        return cls

class BaseCommand(metaclass=CommandMeta):
    _registry = {}

    def execute(self, *args, **kwargs):
        raise NotImplementedError

class CreateCommand(BaseCommand):
    command_name = "create"

    def execute(self, resource, data):
        return f"Created {resource}: {data}"

class DeleteCommand(BaseCommand):
    command_name = "delete"

    def execute(self, resource):
        return f"Deleted {resource}"

cmd_cls = BaseCommand._registry["create"]
print(cmd_cls().execute("user", {"name": "Alice"}))
# Created user: {'name': 'Alice'}
```

### ORM-Style Field Tracking

ORM frameworks (Django, SQLAlchemy, Peewee) use metaclasses to scan a class's namespace for field
descriptors and build an internal schema representation. The metaclass collects all field objects,
records their names and types, and attaches the schema to the class.

```python
class Field:
    def __init__(self, column_type, nullable=True):
        self.column_type = column_type
        self.nullable = nullable
        self.name = None

    def __set_name__(self, owner, name):
        self.name = name

class TableMeta(type):
    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, namespace)
        fields = {}
        for key, value in list(namespace.items()) + [
            (k, v) for base in bases for k, v in base.__dict__.items()
        ]:
            if isinstance(value, Field):
                value.__set_name__(cls, key)
                fields[key] = value
        cls._fields = fields
        cls._columns = [f"{f.name} {f.column_type}" + ("" if f.nullable else " NOT NULL")
                        for f in fields.values()]
        return cls

    @property
    def create_sql(cls):
        columns = ", ".join(cls._columns)
        return f"CREATE TABLE {cls.__name__.lower()} ({columns})"

class User(metaclass=TableMeta):
    id = Field("INTEGER PRIMARY KEY", nullable=False)
    name = Field("TEXT", nullable=False)
    email = Field("TEXT", nullable=False)

print(User.create_sql)
# CREATE TABLE user (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, email TEXT NOT NULL)
print(list(User._fields.keys()))
# ['id', 'name', 'email']
```

### Automatic Property Generation

Metaclasses can transform simple attribute declarations into full property objects with validation,
type checking, and serialization support.

```python
class AutoPropertyMeta(type):
    def __new__(mcs, name, bases, namespace):
        annotations = namespace.get("__annotations__", {})
        for attr_name, attr_type in annotations.items():
            if attr_name in namespace:
                continue

            private_name = f"_{attr_name}"

            def make_property(pname, a_type):
                def getter(self):
                    return getattr(self, pname, None)

                def setter(self, value):
                    if value is not None and not isinstance(value, a_type):
                        raise TypeError(
                            f"Expected {a_type.__name__} for {pname[1:]}, "
                            f"got {type(value).__name__}"
                        )
                    setattr(self, pname, value)

                return property(getter, setter)

            namespace[attr_name] = make_property(private_name, attr_type)

        cls = super().__new__(mcs, name, bases, namespace)
        return cls

class Account(metaclass=AutoPropertyMeta):
    balance: float
    owner: str
    active: bool

a = Account()
a.balance = 100.0
a.owner = "Alice"
a.active = True
a.balance = "not a float"  # TypeError
```

### Abstract Enforcement

While `abc.ABC` and `@abstractmethod` handle most abstract enforcement, a metaclass can enforce that
subclasses implement specific methods with particular signatures, or that certain class attributes
are defined.

```python
class StrictABCMeta(type):
    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, namespace)

        for base in bases:
            abstracts = getattr(base, "_abstract_methods", set())
            for method_name in abstracts:
                if method_name not in namespace:
                    impl = getattr(cls, method_name, None)
                    if impl is None or getattr(impl, "__isabstractmethod__", False):
                        raise TypeError(
                            f"Cannot instantiate abstract class {name} without "
                            f"implementing abstract method '{method_name}'"
                        )

        new_abstracts = set()
        for attr_name, attr_value in namespace.items():
            if getattr(attr_value, "__isabstractmethod__", False):
                new_abstracts.add(attr_name)
        cls._abstract_methods = new_abstracts

        return cls

class ServiceBase(metaclass=StrictABCMeta):
    _abstract_methods = set()

class CacheService(ServiceBase):
    pass  # No abstract methods to implement -- OK

print("CacheService created successfully")
```

## Metaclass Conflicts

When you combine two classes that have different metaclasses, Python must determine the metaclass
for the resulting class. The rule is: **the metaclass of the derived class must be a subtype of the
metaclasses of all base classes.** If this condition is not met, Python raises `TypeError`.

```python
class MetaA(type):
    pass

class MetaB(type):
    pass

class A(metaclass=MetaA):
    pass

class B(metaclass=MetaB):
    pass

class C(A, B):
    pass
# TypeError: metaclass conflict: the metaclass of a derived class must be a (non-strict) subtype
# of the metaclasses of all its bases
```

The reason for this constraint is that the derived class's metaclass must be able to construct a
class that is compatible with all base classes. If `MetaA` and `MetaB` have incompatible `__init__`
signatures or different `__prepare__` behaviors, the derived class cannot be consistently
constructed.

Resolution strategies:

**1. Make one metaclass inherit from the other:**

```python
class CombinedMeta(MetaA, MetaB):
    pass

class C(A, B, metaclass=CombinedMeta):
    pass
```

**2. Use a common base metaclass:**

```python
class BaseMeta(type):
    pass

class MetaA(BaseMeta):
    pass

class MetaB(BaseMeta):
    pass

class A(metaclass=MetaA):
    pass

class B(metaclass=MetaB):
    pass

class C(A, B):
    pass  # Works: metaclass is MetaA, which is a subtype of BaseMeta (MetaB's parent)
```

**3. Avoid metaclasses entirely and use `__init_subclass__` or class decorators:**

```python
class A:
    pass

def register(cls):
    cls._registry = {}
    return cls

@register
class B:
    pass

class C(A, B):
    pass  # No metaclass conflict
```

The metaclass conflict problem is one of the strongest practical arguments against metaclasses. In
large codebases with many mixins and base classes from different libraries, metaclass conflicts
become frequent and painful to resolve. `__init_subclass__` and class decorators sidestep this
entirely because they do not introduce a new metaclass into the hierarchy.

## Comparison: Metaclasses vs Decorators vs Descriptors vs `__init_subclass__`

| Criterion                                  | Metaclass                      | Class Decorator              | Descriptor          | `__init_subclass__`  |
| ------------------------------------------ | ------------------------------ | ---------------------------- | ------------------- | -------------------- |
| Intercepts namespace before class creation | Yes (`__new__`, `__prepare__`) | No (class already exists)    | No                  | No                   |
| Modifies class after creation              | Yes (`__init__`)               | Yes                          | No                  | Yes (runs in parent) |
| Controls instance creation                 | Yes (`__call__`)               | No                           | Yes (per attribute) | No                   |
| Inherited by subclasses automatically      | Yes                            | No (must re-apply)           | Yes (on class)      | Yes                  |
| Can pass keyword args in class header      | No                             | No                           | No                  | Yes                  |
| Metaclass conflict risk                    | Yes                            | No                           | No                  | No                   |
| Complexity                                 | High                           | Low                          | Medium              | Low                  |
| Visibility to readers                      | Low (implicit magic)           | High (explicit `@decorator`) | Medium              | Medium               |

**Use a class decorator when:** You need to modify a class after it is created, and the modification
does not need to propagate to subclasses. Decorators are the simplest tool and should be your first
choice.

**Use a descriptor when:** You need to control access to a specific attribute (validation, computed
values, lazy loading). Descriptors are the most targeted tool and have the least impact on the class
hierarchy.

**Use `__init_subclass__` when:** You need a hook that fires automatically for every subclass, with
optional keyword arguments for configuration. This covers most registration and validation use
cases.

**Use a metaclass when:** You need `__prepare__` (custom namespace), `__call__` (instance creation
control), or deep structural modification of the class that requires access to the raw namespace
before the class object exists.

## When NOT to Use Metaclasses

The "metaclass hell" anti-pattern occurs when metaclasses are used for tasks that simpler mechanisms
handle more cleanly. The symptoms are:

1. **Unreadable stack traces.** When something goes wrong in a metaclass `__new__` or `__init__`,
   the traceback points to the `class` statement itself, which gives no indication of which line in
   the metaclass is responsible. Debugging metaclass code is significantly harder than debugging
   normal Python code.

2. **Metaclass conflicts.** As discussed above, combining classes with different metaclasses creates
   friction that scales poorly with codebase size.

3. **Implicit behavior.** A reader looking at `class Foo(Base):` has no indication that a metaclass
   is modifying the class, registering it, adding methods, or changing its behavior. Class
   decorators are explicit: `@register class Foo(Base):` immediately communicates that something is
   happening.

4. **Poor tooling support.** IDEs, linters, and type checkers have limited understanding of
   metaclass semantics. Attributes added by a metaclass may not be recognized by static analysis,
   and refactoring tools may not correctly handle metaclass-modified classes.

Prefer these alternatives:

- **Class decorator** for post-creation modification.
- **`__init_subclass__`** for subclass hooks.
- **Descriptors** for attribute-level control.
- **`__init__`** for instance-level setup.
- **`abc.ABC`** for abstract enforcement.

## Common Pitfalls

**1. Using `__init__` on the metaclass when you meant `__new__`.**

`__init__` on the metaclass runs after the class object is created. It cannot modify the namespace
dict that was used to create the class -- it can only set attributes on the class object itself. If
you need to remove, rename, or transform attributes before they become class attributes, use
`__new__`.

```python
class WrongMeta(type):
    def __init__(cls, name, bases, namespace):
        super().__init__(name, bases, namespace)
        if "deprecated_method" in namespace:
            delattr(cls, "deprecated_method")

class RightMeta(type):
    def __new__(mcs, name, bases, namespace):
        if "deprecated_method" in namespace:
            del namespace["deprecated_method"]
            print(f"Removed 'deprecated_method' from {name}")
        return super().__new__(mcs, name, bases, namespace)
```

**2. Forgetting to call `super().__new__` or `super().__init__`.**

If you override `__new__` or `__init__` on a metaclass and forget to call the `super()` variant, the
class object will not be properly constructed. The symptoms range from missing base class methods to
complete failure to create the class.

**3. Storing mutable state on the metaclass class variable.**

```python
class BugMeta(type):
    registry = []  # Shared across ALL classes using this metaclass

    def __init__(cls, name, bases, namespace):
        super().__init__(name, bases, namespace)
        BugMeta.registry.append(cls)
```

If `BugMeta.registry` is a list, every class using this metaclass appends to the same list. This is
often intentional (for a global registry), but can cause unexpected cross-contamination if you
expected per-class isolation. Use `cls.registry = []` inside `__init__` to create a per-class list.

**4. Metaclass `__call__` and `__init__` argument mismatch.**

The default `type.__call__` passes all positional and keyword arguments to both `__new__` and
`__init__`. If your `__new__` consumes some arguments and does not pass the rest through, or if your
`__new__` and `__init__` expect different signatures, you get confusing `TypeError` messages. Always
ensure `__new__` and `__init__` have compatible signatures, or override `__call__` to control the
dispatch explicitly.

```python
class BrokenMeta(type):
    def __call__(cls, name):
        instance = cls.__new__(cls)
        instance.__init__(name)  # If __init__ expects different args, this breaks
        return instance

class BetterMeta(type):
    def __call__(cls, *args, **kwargs):
        instance = super().__call__(*args, **kwargs)
        return instance
```

**5. Assuming metaclass methods are inherited like normal methods.**

Metaclass methods are defined on the metaclass, not on the class. A class's `__init__` is inherited
from its base class (a normal class). A class's metaclass `__init__` is inherited from the
metaclass's base class (a metaclass). These are different inheritance chains. If you override a
metaclass method in a subclass metaclass, the override applies only to classes using that subclass
metaclass, not to all classes using the parent metaclass.

**6. Using a metaclass where a class decorator suffices.**

If your metaclass only has `__init__` and does `cls.some_attribute = value`, replace it with a class
decorator. The decorator is more explicit, easier to test, and avoids metaclass conflict issues.

```python
# Metaclass (overkill)
class AddMeta(type):
    def __init__(cls, name, bases, namespace):
        super().__init__(name, bases, namespace)
        cls.created_at = time.time()

class Foo(metaclass=AddMeta):
    pass

# Decorator (simpler)
def add_timestamp(cls):
    import time
    cls.created_at = time.time()
    return cls

@add_timestamp
class Foo:
    pass
```

**7. `__set_name__` is only called for descriptors defined directly in the class body.**

If a descriptor is inherited from a base class, `__set_name__` was already called when the base
class was created. If you assign a descriptor to a class after creation (e.g., via a decorator or
monkey-patching), `__set_name__` is not called automatically -- you must call it manually.

```python
class MyField:
    def __set_name__(self, owner, name):
        self.name = name

class Base:
    field = MyField()  # __set_name__ called here

class Derived(Base):
    pass  # __set_name__ is NOT called again for 'field'

def add_field(cls):
    cls.extra = MyField()
    MyField.__set_name__(cls.extra, cls, "extra")
    return cls
```
