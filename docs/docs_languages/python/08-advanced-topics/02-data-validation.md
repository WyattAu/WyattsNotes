---
title: Data Validation
description: "Data Validation — Pydantic v2; BaseModel; Field Types; Automatic Type Coercion with worked examples and exam-style questions."
date: 2026-04-05T00:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: data-validation
---
## Why Data Validation

Every non-trivial system receives data from sources it does not control: HTTP request bodies parsed
From JSON, rows read from CSV files, configuration loaded from environment variables, messages
Pulled from a message queue. At the moment data crosses a system boundary, all assumptions you hold
About its shape, type, and semantic validity are void. The remote caller may send a string where you
Expect an integer, omit a required field entirely, or supply a negative value for a quantity that
Must be positive. Without explicit validation at every boundary, corrupt data propagates inward,
Corrupting internal state, triggering downstream errors that are difficult to trace back to their
Origin, and in the worst case producing silent incorrect results -- the most dangerous category of
Software failure.

This is the garbage-in-garbage-out principle applied to software architecture: if your program's
Correctness depends on the shape of its inputs, and you do not verify that shape, your program's
Correctness is not guaranteed. Period.

Validation must happen at **system boundaries**: the outermost layer where external data enters your
Application. This includes API endpoints (HTTP request/response bodies, query parameters, path
Parameters), configuration loading (environment variables, `.env` files, YAML/TOML config files),
User input (CLI arguments, form submissions), and file parsing (CSV, JSON, XML, protobuf). Once data
Has been validated and normalized at a boundary, internal code can operate on it with confidence,
Treating it as trusted. The boundary is the choke point: every piece of untrusted data must pass
Through it before reaching any business logic.

This raises a critical distinction: **validation vs parsing**. Parsing transforms raw bytes or
Strings into structured Python objects. Validation checks that the resulting objects satisfy
Constraints. In practice, these two operations are interleaved -- you parse a JSON string into a
Dict, then validate that the dict has the right keys with the right types. But conceptually they are
Different concerns, and conflating them leads to confusing error messages and missed validation
Cases. A robust approach validates during parsing, failing early with precise error messages that
Tell the caller exactly what is wrong and where.

**Runtime type checking vs static typing** is another axis worth clarifying. Static type checkers
Like mypy analyze your source code at development time and catch type mismatches in function
Signatures and variable assignments. They do not -- and cannot -- check data that arrives at runtime
From external sources. A function annotated as `def process(user_id: int)` tells mypy that callers
Should pass an int, but nothing prevents a JSON payload containing `"user_id": "not-a-number"` from
Reaching that function at runtime. Static typing catches programmer errors; runtime validation
Catches data errors. You need both, and they serve different purposes.

Python's standard library provides only minimal validation primitives: `isinstance()` checks,
`int()` and `float()` constructors that raise `ValueError`And manual if/else chains. These are
Tedious to write, easy to get wrong, and produce poor error messages. The ecosystem has produced
Several libraries that address this gap, the most prominent being Pydantic, attrs, and marshmallow.

## Pydantic v2

Pydantic is the dominant data validation library in the Python ecosystem. It is the backbone of
FastAPI, used extensively in Django REST Framework integrations, and standard in data engineering
Pipelines. Pydantic v2, released in mid-2023, is a ground-up rewrite in Rust (via the pydantic-core
Crate) that delivers a 5-50x performance improvement over v1 while maintaining a largely compatible
API.

```bash
pip install pydantic
```

### BaseModel

The central abstraction is `BaseModel`. You define a class that inherits from it, declare fields
With type annotations, and Pydantic constructs a model that validates and coerces data on
Instantiation.

```python
from pydantic import BaseModel

class User(BaseModel):
    id: int
    name: str
    email: str
    is_active: bool = True
    tags: list[str] = []
```

Instantiation triggers validation. If validation passes, you get back a model instance with all
Fields coerced to their declared types. If validation fails, Pydantic raises `ValidationError`.

```python
user = User(id=1, name="Alice", email="alice@example.com")
print(user.id)         # 1
print(user.name)       # Alice
print(user.is_active)  # True

user2 = User(id="2", name="Bob", email="bob@example.com")
print(user2.id)        # 2 (str "2" coerced to int 2)
```

### Field Types

Pydantic supports the full range of Python type annotations plus its own extensions:

```python
from datetime import datetime, date
from decimal import Decimal
from typing import Optional
from pydantic import BaseModel

class Product(BaseModel):
    name: str
    price: Decimal
    in_stock: bool
    quantity: int
    rating: float | None = None
    created_at: datetime
    metadata: dict[str, str] = {}
    categories: list[str] = []
```

The `float | None` syntax (PEP 604, Python 3.10+) is supported directly. For Python 3.9, use
`Optional[float]` from `typing`.

### Automatic Type Coercion

Pydantic does not merely check types -- it **coerces** values to the declared type when possible.
This is a deliberate design choice that reduces boilerplate in application code at the cost of
Silently transforming input. Understanding what coercion does is essential to using Pydantic
Correctly.

```python
from pydantic import BaseModel

class Config(BaseModel):
    port: int
    debug: bool
    timeout: float

c = Config(port="8080", debug="yes", timeout="30.5")
print(c.port)    # 8080  (str -> int)
print(c.debug)   # True  (str -> bool, "yes" is truthy)
print(c.timeout) # 30.5  (str -> float)
```

Coercion rules are extensive. Strings that look like numbers are converted to `int` or `float`.
Strings that look like booleans (`"true"``"false"``"1"``"0"``"yes"``"no"`) are converted
To `bool`. Strings that look like ISO 8601 dates/datetimes are converted to `date`/`datetime`
Objects. Lists and dicts are recursively validated. The full coercion logic lives in pydantic-core
And is well-documented in the Pydantic docs.

### Validation Errors

When validation fails, Pydantic raises `ValidationError`Which carries structured information about
Every problem found in the input.

```python
from pydantic import BaseModel, ValidationError

class User(BaseModel):
    id: int
    name: str
    email: str
    age: int

try:
    User(id="not_a_number", name="", email="bad")
except ValidationError as e:
    print(e.error_count())       # 3
    for error in e.errors():
        print(error)
```

Each error in `e.errors()` is a dict with these keys:

- `type` -- a machine-readable error code (e.g., `"int_parsing"``"string_too_short"``"missing"`)
- `loc` -- a tuple indicating the path to the offending field (e.g., `('id',)`
 `('address', 'city')`)
- `msg` -- a human-readable error message
- `input` -- the actual value that failed validation

This structured error format is designed for programmatic consumption -- you can serialize it to
JSON and return it directly in an API error response.

## Field Constraints

`Field()` is the mechanism for attaching validation constraints beyond what the type annotation
Expresses. A plain `int` annotation tells Pydantic the value must be an integer; `Field(gt=0)` tells
It the integer must be strictly greater than zero.

### Numeric Constraints

```python
from pydantic import BaseModel, Field

class Sensor(BaseModel):
    temperature: float = Field(ge=-40.0, le=85.0)
    humidity: float = Field(ge=0.0, le=100.0)
    pressure: float = Field(gt=0.0)
    sample_rate: int = Field(ge=1, le=1000)
```

The constraint parameters for numeric types are:

| Parameter | Meaning |
| ------------- | -------------------------------- |
| `gt` | strictly greater than |
| `ge` | greater than or equal |
| `lt` | strictly less than |
| `le` | less than or equal |
| `multiple_of` | must be a multiple of this value |

### String Constraints

```python
from pydantic import BaseModel, Field

class Account(BaseModel):
    username: str = Field(min_length=3, max_length=32, pattern=r"^[a-zA-Z0-9_]+$")
    bio: str = Field(max_length=500, default="")
    email: str = Field(pattern=r"^[^@]+@[^@]+\.[^@]+$")
```

The constraint parameters for `str` are:

| Parameter | Meaning |
| ------------ | ----------------------------------- |
| `min_length` | minimum string length |
| `max_length` | maximum string length |
| `pattern` | regex pattern the string must match |

Note: `pattern` uses Python's `re` module. The regex is matched against the entire string (anchored
At both ends), so you do not need `^` and `$` anchors, though including them is harmless.

### Default Values and Factories

```python
from pydantic import BaseModel, Field

class Job(BaseModel):
    name: str
    priority: int = Field(default=0)
    tags: list[str] = Field(default_factory=list)
    config: dict[str, str] = Field(default_factory=dict)
```

The distinction between `default` and `default_factory` is the same as in `dataclasses`: `default`
Accepts an immutable value, while `default_factory` accepts a zero-argument callable that produces a
New value each time. Using `default=[]` is a classic Python bug -- the same list object would be
Shared across all instances that don't provide their own value. `default_factory=list` creates a
Fresh list every time.

### Metadata

`Field()` also carries metadata that does not affect validation but is used for documentation,
Schema generation, and serialization:

```python
from pydantic import BaseModel, Field

class Server(BaseModel):
    host: str = Field(description="Server hostname or IP address")
    port: int = Field(default=8080, ge=1, le=65535, description="Listening port")
    api_key: str = Field(
        alias="apiKey",
        description="API authentication key",
        deprecated="Use token-based auth instead",
        examples=["sk-abc123", "sk-xyz789"],
    )
```

- `description` -- used in JSON Schema generation and API documentation
- `alias` -- alternative key name during serialization/deserialization
- `deprecated` -- marks the field as deprecated, surfaced in schema generation
- `examples` -- sample values for documentation

## Validators

Field constraints cover simple cases: ranges, lengths, patterns. For anything more complex -- cross-
Field validation, conditional logic, custom transformations -- you need validators.

### Field Validators

`@field_validator` decorates a method that validates a single field. The method receives the field's
Value and returns the (possibly transformed) value, or raises `ValueError` or `ValidationError`.

```python
from pydantic import BaseModel, field_validator

class User(BaseModel):
    username: str
    password: str
    password_confirm: str

    @field_validator("password")
    @classmethod
    def password_strength(cls, v: str) -> str:
        if len(v) < 8:
            raise ValueError("Password must be at least 8 characters")
        if not any(c.isupper() for c in v):
            raise ValueError("Password must contain an uppercase letter")
        if not any(c.isdigit() for c in v):
            raise ValueError("Password must contain a digit")
        return v

    @field_validator("password_confirm")
    @classmethod
    def passwords_match(cls, v: str, info) -> str:
        if "password" in info.data and v != info.data["password"]:
            raise ValueError("Passwords do not match")
        return v
```

The `info` argument is a `ValidationInfo` object. Its `data` attribute contains a dict of fields
That have already been validated (in declaration order). This enables cross-field validation:
Checking that `password_confirm` equals `password`That `end_date` is after `start_date`Etc.

Note that `info.data` only contains fields declared **before** the current field. If you need to
Validate a field against one declared after it, use a model validator instead.

### Validator Modes

```python
from pydantic import BaseModel, field_validator

class Measurement(BaseModel):
    value: str

    @field_validator("value", mode="before")
    @classmethod
    def preprocess(cls, v):
        if isinstance(v, (int, float)):
            return str(v)
        return v

    @field_validator("value", mode="after")
    @classmethod
    def validate_format(cls, v: str) -> str:
        if not v.replace(".", "", 1).isdigit():
            raise ValueError("Must be a numeric string")
        return v
```

- `mode="before"` -- the validator runs **before** Pydantic's built-in type coercion. The raw input
 value is passed in. This is where you preprocess or normalize input.
- `mode="after"` -- the validator runs **after** type coercion. You receive a value that is already
 the declared type. This is where you apply business rules.
- `mode="wrap"` -- the validator receives both the value and a handler function. It can run custom
 logic before, after, or around the default validation:

```python
from pydantic import BaseModel, field_validator

class Document(BaseModel):
    content: str

    @field_validator("content", mode="wrap")
    @classmethod
    def sanitize_and_validate(cls, v, handler):
        if isinstance(v, str):
            v = v.strip()
        result = handler(v)
        if len(result) == 0:
            raise ValueError("Content cannot be empty after stripping")
        return result
```

### Wildcard Validators

`@field_validator("*")` applies to every field in the model. This is useful for transformations that
Must apply uniformly, such as stripping whitespace from all string fields.

```python
from pydantic import BaseModel, field_validator

class Form(BaseModel):
    first_name: str
    last_name: str
    city: str

    @field_validator("*")
    @classmethod
    def strip_strings(cls, v):
        if isinstance(v, str):
            return v.strip()
        return v
```

### Model Validators

`@model_validator` operates on the entire model, after all individual fields have been validated.
Use it for constraints that involve multiple fields where the order of declaration matters.

```python
from pydantic import BaseModel, model_validator

class DateRange(BaseModel):
    start: str
    end: str

    @model_validator(mode="after")
    def end_after_start(self):
        if self.start >= self.end:
            raise ValueError("end must be after start")
        return self
```

`mode="before"` receives the raw input ( a dict) before any field validation runs. This
Lets you preprocess the entire input structure:

```python
from pydantic import BaseModel, model_validator

class Event(BaseModel):
    timestamp: str
    message: str

    @model_validator(mode="before")
    @classmethod
    def normalize_keys(cls, values):
        if isinstance(values, dict):
            normalized = {}
            for k, v in values.items():
                normalized[k.replace("-", "_")] = v
            return normalized
        return values
```

## Nested Models

Real-world data is hierarchical. A user has an address, which has a city and postal code. An order
Has a list of line items. A configuration has nested sections. Pydantic handles all of these
 by using models as field types.

### Models as Fields

```python
from pydantic import BaseModel

class Address(BaseModel):
    street: str
    city: str
    postal_code: str

class Company(BaseModel):
    name: str
    headquarters: Address
    branches: list[Address]
```

Instantiation works with nested dicts:

```python
company = Company(
    name="Acme Corp",
    headquarters={
        "street": "123 Main St",
        "city": "Springfield",
        "postal_code": "62701",
    },
    branches=[
        {"street": "456 Oak Ave", "city": "Shelbyville", "postal_code": "62565"},
    ],
)
```

Validation errors propagate with full path information. If the postal code in the first branch is
Invalid, the error's `loc` will be `('branches', 0, 'postal_code')`Telling you exactly where the
Problem is.

### Dicts of Models

```python
from pydantic import BaseModel

class Permission(BaseModel):
    read: bool = False
    write: bool = False
    admin: bool = False

class Role(BaseModel):
    name: str
    permissions: dict[str, Permission]

role = Role(
    name="editor",
    permissions={
        "documents": {"read": True, "write": True},
        "settings": {"read": True},
    },
)
```

### Recursive Models

Models that reference themselves are supported, but you must use `model_rebuild()` to resolve the
Forward reference after the class is defined:

```python
from pydantic import BaseModel, ConfigDict

class Node(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    value: int
    children: list["Node"] = []

Node.model_rebuild()

tree = Node(
    value=1,
    children=[
        Node(value=2, children=[Node(value=4), Node(value=5)]),
        Node(value=3),
    ],
)
```

`from_attributes=True` enables construction from objects with matching attributes (e.g., ORM model
Instances), not just dicts. This is the v2 replacement for v1's `orm_mode`.

### JSON Serialization of Nested Structures

```python
print(tree.model_dump_json(indent=2))
```

This recursively serializes the entire tree to a JSON string. Each nested `Node` is serialized
According to its own model definition. The `indent` parameter produces pretty-printed output, which
Is useful for debugging but should not be used in production (larger payloads, slower
Serialization).

## Serialization

Serialization is the inverse of validation: converting a validated model instance back into a plain
Dict or JSON string. Pydantic v2 provides a unified serialization API that is separate from
Validation, with its own set of options.

### Core Methods

```python
from pydantic import BaseModel
from datetime import datetime

class Event(BaseModel):
    name: str
    timestamp: datetime
    count: int

event = Event(name="deploy", timestamp=datetime(2026, 4, 5, 12, 0, 0), count=3)

event.model_dump()
# {'name': 'deploy', 'timestamp': datetime.datetime(2026, 4, 5, 12, 0), 'count': 3}

event.model_dump(mode="json")
# {'name': 'deploy', 'timestamp': '2026-04-05T12:00:00', 'count': 3}

event.model_dump_json()
# '{"name":"deploy","timestamp":"2026-04-05T12:00:00","count":3}'
```

The `mode="json"` argument tells Pydantic to serialize all values to JSON-compatible types.
`datetime` objects become ISO 8601 strings, `Decimal` objects become floats, `UUID` objects become
Strings, etc. Use this mode when you need to pass the result to `json.dumps()` or send it over the
Wire.

`model_dump_json()` is equivalent to `json.dumps(model.model_dump(mode="json"))` but implemented in
Rust, so it is significantly faster.

### Filtering Output

```python
event.model_dump(include={"name", "timestamp"})
# {'name': 'deploy', 'timestamp': datetime(2026, 4, 5, 12, 0)}

event.model_dump(exclude={"timestamp"})
# {'name': 'deploy', 'count': 3}

event.model_dump(exclude_defaults=True)
# fields with default values that were not explicitly set are omitted

event.model_dump(exclude_unset=True)
# only fields that were explicitly passed to the constructor are included
```

`exclude_defaults` and `exclude_unset` have subtly different semantics. `exclude_defaults` omits any
Field whose value equals its default (whether or not the caller provided it). `exclude_unset` omits
Only fields that the caller did not provide (even if the default was applied). This distinction
Matters when a caller explicitly passes a value that happens to equal the default.

### Custom Serializers

```python
from pydantic import BaseModel, field_serializer, AwareDatetime
from datetime import datetime, timezone

class LogEntry(BaseModel):
    timestamp: datetime
    level: str
    message: str

    @field_serializer("timestamp")
    def serialize_timestamp(self, dt: datetime, _info):
        return dt.strftime("%Y-%m-%d %H:%M:%S %Z")
```

`@model_serializer` controls the entire serialization of a model:

```python
from pydantic import BaseModel, model_serializer

class Envelope(BaseModel):
    status: str
    data: dict

    @model_serializer(mode="wrap")
    def serialize_model(self, handler):
        result = handler(self)
        return {"response": result, "version": "1.0"}
```

### Round-Trip: validate, dump, validate

The pattern of `model.model_validate(data)` -> `model.model_dump()` ->
`model.model_validate(dumped)` should be lossless for most practical purposes, but there are edge
Cases. `Decimal` values may lose precision when serialized to JSON (since JSON has no native decimal
Type). `datetime` objects lose timezone information if not careful. Custom types with complex
Internal state may not survive the round-trip. Always test your round-trip behavior.

## Dataclasses vs BaseModel

Pydantic provides two surface APIs: `BaseModel` and `@pydantic.dataclass`. The latter wraps Python's
Stdlib `dataclass` with Pydantic's validation and serialization machinery.

```python
import pydantic

@pydantic.dataclass
class Point:
    x: float
    y: float
    z: float = 0.0

p = Point(x=1.0, y=2.0)
print(p.x)  # 1.0
```

### Key Differences

| Feature | `BaseModel` | `@pydantic.dataclass` |
| ------------------------------------- | ------------ | ---------------------------- |
| Inheritance from `BaseModel` | Yes | No (inherits from dataclass) |
| `model_dump()` / `model_dump_json()` | Yes | Yes |
| `model_validate()` | Yes | Yes |
| `model_json_schema()` | Yes | Yes |
| `model_config` | Yes | Via `Config` or `kw_only` |
| Composability with other dataclasses | No | Yes (dataclass interop) |
| Standard `dataclasses.is_dataclass()` | No | Yes |
| Extra fields behavior | Configurable | Configurable |

### When to Use Which

Use `BaseModel` for any model that represents a structured data contract -- API request/response
Schemas, configuration objects, domain entities. `BaseModel` is the default choice and has the most
Complete feature set.

Use `@pydantic.dataclass` when you need to interoperate with code that expects standard dataclasses
(e.g., `dataclasses.asdict()``dataclasses.fields()`), when you want value-based equality and
Hashing without implementing `__eq__` and `__hash__`Or when you are working within a codebase that
Already uses dataclasses extensively and you want to add validation without changing the overall
Architecture.

Do not mix them casually. A `BaseModel` instance is not a dataclass and vice versa. Pick one pattern
Per module and stick with it.

## JSON Schema

Pydantic can generate JSON Schema (Draft 2020-12) from any model. This is not an academic feature --
It is the foundation for API documentation in frameworks like FastAPI and for validating data from
External systems that consume your schema.

### Generating Schemas

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    id: int = Field(description="Unique user identifier")
    name: str = Field(min_length=1, max_length=100)
    email: str = Field(pattern=r"^[^@]+@[^@]+\.[^@]+$")
    role: str = Field(default="viewer", pattern=r"^(admin|editor|viewer)$")

schema = User.model_json_schema()
import json
print(json.dumps(schema, indent=2))
```

The output is a complete JSON Schema document that encodes all type information, constraints,
Defaults, descriptions, and examples. Field constraints like `min_length``pattern`And `ge`/`le`
Are translated to their JSON Schema equivalents (`minLength``pattern``minimum`/`maximum`).

### Schema for API Documentation

FastAPI uses `model_json_schema()` internally to generate OpenAPI documentation. When you declare a
Pydantic model as a request body or response model, FastAPI extracts the schema and includes it in
The auto-generated `/docs` and `/openapi.json` endpoints. This is why FastAPI's interactive
Documentation is so detailed -- it is driven entirely by the type annotations and field constraints
In your Pydantic models.

### Validating External Data Against a Schema

```python
import jsonschema

schema = User.model_json_schema()

jsonschema.validate(
    instance={"id": 1, "name": "Alice", "email": "alice@example.com"},
    schema=schema,
)
```

This is useful when you need to validate data in environments that cannot run Pydantic (e.g., in a
JavaScript frontend, in a message broker's schema registry). The JSON Schema is a language-agnostic
Contract; Pydantic models are the Python implementation of that contract.

### Nested and Recursive Schemas

Nested models produce nested schema definitions. Recursive models use `$ref` to avoid infinite
Recursion:

```python
class Node(BaseModel):
    value: int
    children: list["Node"] = []

Node.model_rebuild()
schema = Node.model_json_schema()
```

The schema will define `Node` once and reference it via `$ref: "#/$defs/Node"` wherever it appears
Recursively. This is standard JSON Schema practice and is understood by all compliant validators.

## Settings Management

Configuration management is a specialized form of data validation where the data source is the
Environment (environment variables, `.env` files, CLI arguments) rather than a request body or file.
Pydantic provides `BaseSettings` for exactly this use case.

### Basic Usage

```python
from pydantic_settings import BaseSettings

class AppConfig(BaseSettings):
    database_url: str
    redis_url: str = "redis://localhost:6379"
    debug: bool = False
    max_connections: int = 10

    model_config = SettingsConfigDict(env_file=".env")
```

`pip install pydantic-settings` is required -- this is a separate package from pydantic itself.

`BaseSettings` reads values from environment variables first, then falls back to `.env` file values,
Then falls back to field defaults. This layering is the standard 12-factor app approach to
Configuration.

### Environment Variable Naming

By default, Pydantic maps environment variables to fields by uppercasing the field name. The field
`database_url` maps to the environment variable `DATABASE_URL`.

```python
class AppConfig(BaseSettings):
    database_url: str

    model_config = SettingsConfigDict(env_prefix="APP_")
```

With `env_prefix="APP_"`The field `database_url` maps to `APP_DATABASE_URL`.

### Nested Delimiters

For nested models, `env_nested_delimiter` allows flattening hierarchy into the environment:

```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import BaseModel

class DatabaseConfig(BaseModel):
    host: str = "localhost"
    port: int = 5432
    name: str = "mydb"

class AppConfig(BaseSettings):
    database: DatabaseConfig

    model_config = SettingsConfigDict(env_nested_delimiter="__")

# Environment: DATABASE__HOST=db.example.com DATABASE__PORT=5433
config = AppConfig()
print(config.database.host)  # db.example.com
print(config.database.port)  # 5433
```

### Validation of Configuration Values

All of Pydantic's validation machinery works inside `BaseSettings`. If you declare
`port: int = Field(ge=1, le=65535)`Setting `PORT=99999` will raise `ValidationError` at import
Time, failing fast before your application starts. This is exactly what you want -- configuration
Errors should be caught at startup, not at 3 AM when a request finally hits the invalid code path.

```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field

class AppConfig(BaseSettings):
    port: int = Field(default=8080, ge=1, le=65535)
    workers: int = Field(default=4, ge=1)
    timeout: float = Field(default=30.0, gt=0)

    model_config = SettingsConfigDict(env_file=".env")
```

## attrs

Attrs is a data class library that predates Pydantic and takes a fundamentally different approach.
It focuses on reducing the boilerplate of writing classes (automatically generating `__init__`
`__repr__``__eq__``__hash__`) with optional validation via composable validator functions.

```bash
pip install attrs
```

### Basic Usage

```python
import attr

@attr.define
class Server:
    host: str
    port: int
    workers: int = 4

    @port.validator
    def _validate_port(self, attribute, value):
        if not 1 <= value <= 65535:
            raise ValueError(f"Port must be 1-65535, got {value}")
```

`@attr.define` generates a class with `__init__``__repr__``__eq__`And `__hash__`. The
`@attribute.validator` decorator attaches a validation function that runs when the attribute is set.

### Frozen Instances

```python
@attr.frozen
class Coordinate:
    x: float
    y: float
```

`@attr.frozen` produces immutable instances. Attempting to set an attribute after construction
Raises `attr.exceptions.FrozenInstanceError`. This is equivalent to `frozen=True` in stdlib
Dataclasses.

### Comparison with Pydantic

| Concern | Pydantic | attrs |
| ---------------------- | ----------------------------- | --------------------- |
| Primary purpose | Data validation and parsing | Boilerplate reduction |
| Type coercion | Automatic | None |
| Validation errors | Structured `ValidationError` | Raw `ValueError` |
| JSON serialization | Built-in | Requires `cattrs` |
| JSON Schema generation | Built-in | Not available |
| Settings management | Built-in (`BaseSettings`) | Not available |
| Runtime overhead | Higher (Rust validation core) | Minimal |
| Validation granularity | Field-level, model-level | Attribute-level |
| Ecosystem integration | FastAPI, Django, etc. | Independent |

### When to Use attrs

Use attrs when you need a simple, low-boilerplate class definition without the overhead of
Pydantic's validation machinery. Attrs is ideal for internal domain objects where the data is
Already trusted -- e.g., objects constructed programmatically within your application, not from
External input. If you are defining a configuration schema, an API contract, or anything that
Touches untrusted data, use Pydantic.

Attrs has near-zero runtime overhead compared to Pydantic because it does not perform type coercion
Or complex validation by default. The validator functions you attach are plain Python callables that
Run only when you set them up. For performance-sensitive inner-loop code, this matters.

## marshmallow

Marshmallow is an object serialization/deserialization library with a different philosophy from
Pydantic. It explicitly separates **parsing** (deserialization: external data -> Python objects)
From **validation** (checking constraints). This separation is a feature, not a bug -- it allows you
To define different validation rules for input vs output, and it makes the parsing and validation
Steps independently testable.

```bash
pip install marshmallow
```

### Basic Usage

```python
from marshmallow import Schema, fields, ValidationError

class UserSchema(Schema):
    id = fields.Integer(required=True)
    name = fields.String(required=True, validate=lambda s: len(s) >= 1)
    email = fields.Email(required=True)
    created_at = fields.DateTime(dump_only=True)
```

```python
try:
    data = UserSchema().load({"id": 1, "name": "Alice", "email": "alice@example.com"})
    print(data)  # {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'}
except ValidationError as e:
    print(e.messages)
```

`load()` deserializes and validates. `dump()` serializes. The schema definition is separate from the
Python class -- you can have multiple schemas for the same class (e.g., `UserCreateSchema`
`UserUpdateSchema``UserPublicSchema`).

### Nested Schemas

```python
class AddressSchema(Schema):
    street = fields.String(required=True)
    city = fields.String(required=True)

class UserSchema(Schema):
    name = fields.String(required=True)
    address = fields.Nested(AddressSchema, required=True)
```

### Pre-Load and Post-Load Hooks

```python
from marshmallow import Schema, fields, pre_load, post_load

class UserSchema(Schema):
    username = fields.String(required=True)
    email = fields.Email(required=True)

    @pre_load
    def normalize_keys(self, data, **kwargs):
        if "userName" in data:
            data["username"] = data.pop("userName")
        return data

    @post_load
    def make_user(self, data, **kwargs):
        return User(**data)
```

`pre_load` runs before validation and can preprocess the input dict. `post_load` runs after
Validation and can construct a domain object from the validated dict. This is where the explicit
Separation of parsing and validation becomes powerful.

### When to Use marshmallow

Use marshmallow when you need explicit control over the parsing/validation/serialization pipeline,
When you have multiple schemas for the same model (input, output, partial update), or when you are
Working within a framework that integrates with marshmallow natively (e.g., Flask-Marshmallow,
Django-Marshmallow, webargs for argument parsing).

Marshmallow does not perform type coercion the way Pydantic does. If you pass `"42"` where an
Integer is expected, marshmallow raises a validation error rather than silently converting it. This
Is a more conservative approach that makes data transformations explicit. Whether this is an
Advantage or disadvantage depends on your use case.

## Common Pitfalls

### Mutable Default Values

```python
from pydantic import BaseModel

class Bad(BaseModel):
    items: list = []

class Good(BaseModel):
    items: list = []
```

In Pydantic v2, `items: list = []` is actually safe because Pydantic copies the default on each
Instantiation. However, this is a subtle behavioral difference from stdlib dataclasses, and relying
On it makes your code fragile if you ever migrate away from Pydantic. Always use
`Field(default_factory=list)` to make the intent explicit and portable.

### Ordering of Field Validators

Validators run in field declaration order. If field `b` depends on field `a``a` must be declared
First. Otherwise, `info.data` in `b`'s validator will not contain `a`. If you cannot reorder fields
(for whatever reason), use `@model_validator(mode="after")` instead.

### Strict Mode

Pydantic coerces by default. `user = User(id="42")` works because `"42"` is coerced to `42`. If you
Do not want coercion -- if `"42"` should be a validation error because the caller sent a string --
Use strict mode:

```python
from pydantic import BaseModel, ConfigDict

class StrictUser(BaseModel):
    model_config = ConfigDict(strict=True)
    id: int
    name: str

StrictUser(id=42, name="Alice")     # OK
StrictUser(id="42", name="Alice")   # ValidationError
```

Always consider whether coercion is appropriate for your use case. For API endpoints, coercion is
 desirable (HTTP form data is always strings). For internal data structures, strict mode may
Be safer.

### Extra Fields

By default, Pydantic v2 ignores extra fields not declared in the model:

```python
class User(BaseModel):
    name: str

u = User(name="Alice", age=30)  # age is silently ignored
```

This behavior is configurable:

```python
class StrictUser(BaseModel):
    model_config = ConfigDict(extra="forbid")
    name: str

StrictUser(name="Alice", age=30)  # ValidationError: Extra inputs are not permitted
```

Use `extra="forbid"` in API schemas to catch typos and protocol mismatches early. A caller sending
`user_name` instead of `name` with `extra="ignore"` would silently lose the data. With
`extra="forbid"`The error is immediate and clear.

### BaseSettings Must Import from pydantic-settings

```python
from pydantic_settings import BaseSettings

class Config(BaseSettings):
    pass
```

`BaseSettings` is **not** in the `pydantic` package in v2. It was moved to `pydantic-settings`. This
Is a common source of `ImportError` when migrating from v1.

### Validation Runs at Construction Time, Not Assignment Time

```python
from pydantic import BaseModel

class User(BaseModel):
    age: int = Field(ge=0)

u = User(age=25)
u.age = -5  # No ValidationError!
```

In v2, assignment to model attributes bypasses validation by default. If you need validation on
Assignment, use `model_config = ConfigDict(validate_assignment=True)`. Be aware that this has a
Performance cost -- every assignment triggers the full validation pipeline for that field.

### Forward References in Recursive Models

```python
class Node(BaseModel):
    children: list["Node"] = []

Node.model_rebuild()  # REQUIRED
```

Without `model_rebuild()`Pydantic will raise `SchemaError` or produce incorrect behavior because
The forward reference `"Node"` has not been resolved. Always call `model_rebuild()` after defining
Recursive models.

### JSON Schema Precision Loss

`Decimal` fields are serialized as `number` in JSON Schema, which means JSON consumers may parse
Them as floating-point values, losing precision. If exact decimal precision matters (financial
Calculations, scientific measurements), consider serializing decimals as strings and documenting the
Expected format.

### marshmallow Schemas Are Not Type-Annotated

Marshmallow's `Schema` class uses instance attributes (`fields.String()``fields.Integer()`) rather
Than Python type annotations. This means mypy cannot infer the shape of `schema.load(data)` -- it
Will type it as `dict[str, Any]`. Pydantic's type-annotated models integrate with mypy out of the
Box, giving you static type checking for free. If type safety is a priority, this is a significant
Advantage for Pydantic.

### Mixing Validation Libraries

Do not use Pydantic, attrs, and marshmallow in the same module. Each library has its own validation
Semantics, error types, and serialization conventions. Mixing them creates confusion about which
Validation is in effect and makes the codebase harder to maintain. Pick one library as your primary
Validation tool and use it consistently. If you must interoperate (e.g., using attrs for domain
Objects and Pydantic for API schemas), keep the boundary between them explicit and minimal.

## Summary

<!-- TODO: Add a summary for this topic -->

## Worked Examples

<!-- TODO: Add worked examples for this topic -->
