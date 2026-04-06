---
id: serialization
title: Serialization and Data Formats
description: Python serialization — JSON, pickle, YAML, TOML, CSV, and data interchange patterns.
slug: serialization
---

## JSON

The `json` module is the standard way to serialize Python objects to JSON and back. It ships with
CPython and uses a C extension for performance.

### Encoding and Decoding

```python
import json

data = {
    "host": "db-primary",
    "port": 5432,
    "replicas": ["db-replica-1", "db-replica-2"],
    "config": {"pool_size": 10, "timeout": 30.5},
    "read_only": False,
    "version": None,
}

# Serialize to string
json_str = json.dumps(data, indent=2, sort_keys=True)
print(json_str)

# Deserialize from string
parsed = json.loads(json_str)
print(parsed["host"])  # db-primary
```

### File Operations

```python
import json

# Write to file
with open("config.json", "w") as f:
    json.dump(data, f, indent=2)

# Read from file
with open("config.json") as f:
    config = json.load(f)
```

### Custom Encoders

`json.dumps` accepts a `default` parameter for objects that are not JSON-serializable by default:

```python
import json
from datetime import datetime, timezone
from decimal import Decimal

class CustomEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        if isinstance(obj, Decimal):
            return float(obj)
        if isinstance(obj, set):
            return list(obj)
        if isinstance(obj, bytes):
            return obj.decode("utf-8", errors="replace")
        return super().default(obj)

data = {
    "created": datetime(2025, 1, 15, 10, 30, tzinfo=timezone.utc),
    "price": Decimal("19.99"),
    "tags": {"python", "json"},
}

json_str = json.dumps(data, cls=CustomEncoder, indent=2)
print(json_str)
```

### Custom Decoders

```python
import json
from datetime import datetime

def custom_decoder(dct):
    if "created" in dct and isinstance(dct["created"], str):
        dct["created"] = datetime.fromisoformat(dct["created"])
    return dct

json_str = '{"created": "2025-01-15T10:30:00+00:00", "name": "test"}'
data = json.loads(json_str, object_hook=custom_decoder)
print(type(data["created"]))  # <class 'datetime.datetime'>
```

:::info
Python's `json` module only handles a subset of types natively: `dict`, `list`, `str`,
`int`, `float`, `bool`, and `None`. Everything else requires custom encoding.
:::

### JSON Performance

```python
import json
import timeit

data = {"key": "value", "numbers": list(range(1000))}

# dumps/load is faster than dump/load for in-memory operations
# C extension is ~10x faster than pure Python fallback

t = timeit.timeit(lambda: json.dumps(data), number=100000)
print(f"dumps: {t:.3f}s for 100000 iterations")
```

## pickle

`pickle` serializes Python objects into a binary format. Unlike JSON, it can serialize almost any
Python object, including custom classes, functions, and circular references.

### Basic Usage

```python
import pickle

class Server:
    def __init__(self, host, port, credentials):
        self.host = host
        self.port = port
        self.credentials = credentials

    def __repr__(self):
        return f"Server({self.host!r}, {self.port})"

srv = Server("db.example.com", 5432, {"user": "admin", "pass": "secret"})

# Serialize
data = pickle.dumps(srv, protocol=pickle.HIGHEST_PROTOCOL)

# Deserialize
srv2 = pickle.loads(data)
print(srv2)  # Server('db.example.com', 5432)
print(srv2.credentials)  # {'user': 'admin', 'pass': 'secret'}
```

### Protocol Versions

| Protocol | Python Version | Features                                     |
| -------- | -------------- | -------------------------------------------- |
| 0        | All            | ASCII, human-readable, backward compatible   |
| 1        | 1.4            | Binary format                                |
| 2        | 2.3            | New-style classes                            |
| 3        | 3.0            | Bytes objects, no implicit string conversion |
| 4        | 3.4            | Large objects, more types                    |
| 5        | 3.8            | Out-of-band data, ZSTD compression support   |

```python
import pickle

print(pickle.DEFAULT_PROTOCOL)      # 5 (on Python 3.12)
print(pickle.HIGHEST_PROTOCOL)      # 5

# Use highest protocol for best performance and compatibility
data = pickle.dumps(obj, protocol=pickle.HIGHEST_PROTOCOL)
```

:::danger
**Never unpickle data from untrusted sources.** `pickle.loads()` can execute arbitrary
code during deserialization. A malicious pickle payload can import modules, execute shell commands,
or access the filesystem.

```python
# This is what an attacker can do with a crafted pickle:
import pickle
import os

class Malicious:
    def __reduce__(self):
        return (os.system, ("rm -rf /",))

# pickle.dumps(Malicious()) creates a payload that runs rm -rf /
# pickle.loads(payload) would execute it
```

:::

### cloudpickle

The standard `pickle` cannot serialize lambda functions, dynamically defined classes, or objects
defined in `__main__`. `cloudpickle` extends pickle to handle these cases:

```python
import cloudpickle

# Standard pickle cannot handle this:
func = lambda x: x ** 2
# pickle.dumps(func)  # AttributeError: Can't pickle local object

# cloudpickle handles it:
data = cloudpickle.dumps(func)
func2 = cloudpickle.loads(data)
print(func2(5))  # 25
```

`cloudpickle` is used by distributed computing frameworks like PySpark, Dask, and Ray to ship
closures across processes.

### Pickle and \_\_reduce\_\_

The `__reduce__` method controls how an object is pickled:

```python
import pickle

class Config:
    def __init__(self, path):
        self.path = path
        self._data = self._load(path)

    def _load(self, path):
        return {"loaded_from": path}

    def __reduce__(self):
        # Return (callable, args) — pickle will call Config(*args)
        return (Config, (self.path,))

c = Config("/etc/app/config.yaml")
data = pickle.dumps(c)
c2 = pickle.loads(data)
print(c2._data)  # {'loaded_from': '/etc/app/config.yaml'}
```

## YAML

YAML is a human-readable data serialization format. Python uses the third-party `PyYAML` library.

### Basic Usage

```python
import yaml

config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "name": "production",
    },
    "logging": {
        "level": "INFO",
        "handlers": ["stdout", "file"],
    },
}

# Serialize
yaml_str = yaml.dump(config, default_flow_style=False, sort_keys=False)
print(yaml_str)

# Deserialize
data = yaml.safe_load(yaml_str)
print(data["database"]["host"])  # localhost
```

### safe_load vs load

:::warning
Always use `yaml.safe_load()` instead of `yaml.load()`. The latter can deserialize
arbitrary Python objects, including calls to `subprocess.Popen` or `os.system`:

```yaml
# A malicious YAML file:
!!python/object/apply:os.system ['rm -rf /']
```

`yaml.safe_load()` only parses standard YAML types: scalars, sequences, mappings.
:::

### Custom Tags with Safe Loader

```python
import yaml

# Define a custom constructor that only creates known types
def env_variable_constructor(loader, node):
    value = loader.construct_scalar(node)
    import os
    return os.getenv(value, value)

# Register with a custom SafeLoader
class CustomSafeLoader(yaml.SafeLoader):
    pass

CustomSafeLoader.add_constructor("!env", env_variable_constructor)

yaml_str = """
host: !env HOST_NAME
port: !env PORT_NUMBER
"""
data = yaml.load(yaml_str, Loader=CustomSafeLoader)
print(data)  # {'host': 'localhost', 'port': 'localhost'} (or env values)
```

## TOML

TOML (Tom's Obvious Minimal Language) is designed for configuration files. Python 3.11+ includes
`tomllib` in the standard library.

### Reading TOML (Python 3.11+)

```python
import tomllib  # Python 3.11+

with open("pyproject.toml", "rb") as f:
    config = tomllib.load(f)

print(config["project"]["name"])
print(config["tool"]["pytest"]["testpaths"])
```

### Reading TOML (Python 3.10 and earlier)

```python
# pip install tomli
import tomli

with open("pyproject.toml", "rb") as f:
    config = tomli.load(f)
```

### Writing TOML

Python's built-in `tomllib` is read-only. For writing, use `tomli_w`:

```python
# pip install tomli_w
import tomli_w

config = {
    "database": {
        "host": "localhost",
        "port": 5432,
    },
    "logging": {
        "level": "INFO",
    },
}

with open("config.toml", "wb") as f:
    tomli_w.dump(config, f)
```

### TOML Syntax

```toml
[server]
host = "0.0.0.0"
port = 8080
debug = false

[server.cors]
allowed_origins = ["https://example.com", "https://app.example.com"]
max_age = 3600

[database]
host = "localhost"
port = 5432
name = "myapp"

[[users]]
name = "admin"
role = "superuser"

[[users]]
name = "viewer"
role = "readonly"
```

:::tip
Use TOML for configuration files, JSON for APIs and data interchange, YAML for complex
human-readable data, and pickle only for Python-internal serialization where security is not a
concern.
:::

## CSV

The `csv` module handles reading and writing CSV files.

### Reading CSV

```python
import csv

# Basic reading
with open("data.csv", newline="") as f:
    reader = csv.reader(f)
    headers = next(reader)
    for row in reader:
        print(dict(zip(headers, row)))

# DictReader — recommended for most use cases
with open("data.csv", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["email"])
```

### Writing CSV

```python
import csv

headers = ["name", "email", "role"]
rows = [
    {"name": "Alice", "email": "alice@example.com", "role": "admin"},
    {"name": "Bob", "email": "bob@example.com", "role": "user"},
]

with open("output.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=headers)
    writer.writeheader()
    writer.writerows(rows)
```

### Quoting and Special Characters

```python
import csv

# Control quoting behavior
with open("quoted.csv", "w", newline="") as f:
    writer = csv.writer(f, quoting=csv.QUOTE_ALL)
    writer.writerow(["name", "description"])
    writer.writerow(['Alice', 'Has a "title" and, commas'])

# csv.QUOTE_MINIMAL (default) — quote only when necessary
# csv.QUOTE_ALL — quote everything
# csv.QUOTE_NONNUMERIC — quote non-numeric values
# csv.QUOTE_NONE — never quote (raises error if quoting needed)
```

:::warning
Always open CSV files with `newline=""` as specified in the `csv` module documentation.
On Python 3, failing to do so can cause extra blank lines in the output on some platforms.
:::

## Protocol Buffers

Protocol Buffers (protobuf) is a language-neutral, platform-neutral serialization mechanism. It
requires a schema definition (`.proto` file) and generates code for serialization.

### Schema Definition

```protobuf
// server.proto
syntax = "proto3";

message ServerConfig {
    string host = 1;
    int32 port = 2;
    repeated string replicas = 3;
    bool tls_enabled = 4;
    map<string, string> labels = 5;
}
```

### Python Usage

```python
# After running: protoc --python_out=. server.proto
import server_pb2

config = server_pb2.ServerConfig()
config.host = "db-primary.example.com"
config.port = 5432
config.tls_enabled = True
config.replicas.extend(["db-replica-1", "db-replica-2"])
config.labels["env"] = "production"

# Serialize to binary
binary_data = config.SerializeToString()
print(f"Serialized size: {len(binary_data)} bytes")

# Deserialize
config2 = server_pb2.ServerConfig()
config2.ParseFromString(binary_data)
print(config2.host)  # db-primary.example.com
```

### Protobuf vs JSON

| Feature                | Protobuf                 | JSON                  |
| ---------------------- | ------------------------ | --------------------- |
| Schema                 | Required                 | Optional              |
| Size                   | 3-10x smaller            | Larger                |
| Speed                  | 20-100x faster (binary)  | Slower (text parsing) |
| Human-readable         | No                       | Yes                   |
| Backward compatibility | Built-in (field numbers) | Manual                |
| Language support       | Many                     | Universal             |
| Self-describing        | No                       | Yes                   |

## MessagePack

MessagePack is a binary JSON-like format that is more compact and faster than JSON:

```python
# pip install msgpack
import msgpack

data = {
    "host": "db-primary",
    "port": 5432,
    "tags": ["production", "primary"],
    "config": {"pool_size": 10},
}

# Serialize
packed = msgpack.packb(data, use_bin_type=True)
print(f"Packed size: {len(packed)} bytes")

# Deserialize
unpacked = msgpack.unpackb(packed, raw=False)
print(unpacked["host"])  # db-primary
```

### Performance Comparison

```python
import json
import msgpack
import timeit

data = {"keys": list(range(1000)), "values": [f"str_{i}" for i in range(1000)]}

json_size = len(json.dumps(data))
msgpack_size = len(msgpack.packb(data))

json_time = timeit.timeit(lambda: json.dumps(data), number=10000)
msgpack_time = timeit.timeit(lambda: msgpack.packb(data), number=10000)

print(f"JSON: {json_size} bytes, {json_time:.3f}s")
print(f"MessagePack: {msgpack_size} bytes, {msgpack_time:.3f}s")
# Typical: MessagePack is 30-50% smaller and 3-5x faster
```

## dataclasses and Serialization

```python
from dataclasses import dataclass, asdict, astuple
from typing import List, Optional
import json

@dataclass
class Address:
    street: str
    city: str
    zip_code: str

@dataclass
class User:
    name: str
    email: str
    age: int
    address: Optional[Address] = None

    def to_dict(self):
        d = asdict(self)
        return d

    @classmethod
    def from_dict(cls, data):
        if data.get("address"):
            data["address"] = Address(**data["address"])
        return cls(**data)

user = User("Alice", "alice@example.com", 30, Address("123 Main St", "Springfield", "62701"))

# To dict
d = asdict(user)
print(d)
# {'name': 'Alice', 'email': 'alice@example.com', 'age': 30,
#  'address': {'street': '123 Main St', 'city': 'Springfield', 'zip_code': '62701'}}

# To JSON
json_str = json.dumps(asdict(user), indent=2)

# From dict
user2 = User.from_dict(json.loads(json_str))
print(user2)  # User(name='Alice', email='alice@example.com', age=30, address=Address(...))
```

### Handling Custom Types with asdict

```python
from dataclasses import dataclass, asdict
from datetime import datetime

@dataclass
class Event:
    name: str
    timestamp: datetime
    payload: dict

event = Event("deploy", datetime(2025, 1, 15), {"version": "2.0"})

# asdict doesn't handle datetime by default
# Custom serialization:
def custom_asdict(obj):
    from dataclasses import fields, is_dataclass
    if is_dataclass(obj):
        result = {}
        for f in fields(obj):
            value = getattr(obj, f.name)
            result[f.name] = custom_asdict(value)
        return result
    if isinstance(obj, datetime):
        return obj.isoformat()
    return obj

serialized = custom_asdict(event)
print(serialized["timestamp"])  # '2025-01-15T00:00:00'
```

## Choosing the Right Format

| Use Case                    | Recommended Format             | Why                               |
| --------------------------- | ------------------------------ | --------------------------------- |
| REST API payloads           | JSON                           | Universal support, human-readable |
| Configuration files         | TOML                           | Clean syntax, type-aware          |
| Complex config              | YAML                           | Anchors, references, readability  |
| Python-only serialization   | pickle                         | Full object graph support         |
| Distributed Python          | cloudpickle                    | Handles lambdas, closures         |
| High-performance IPC        | MessagePack or Protobuf        | Binary, fast, compact             |
| Structured data with schema | Protobuf                       | Schema evolution, validation      |
| Spreadsheet import/export   | CSV                            | Universal, Excel-compatible       |
| Log files                   | JSON Lines (one JSON per line) | Streamable, parseable             |

## Common Pitfalls

### 1. JSON and Tuples

```python
import json

data = {"coords": (1.0, 2.0)}
json_str = json.dumps(data)
restored = json.loads(json_str)

print(type(data["coords"]))      # <class 'tuple'>
print(type(restored["coords"]))  # <class 'list'> — tuples become lists!

# Fix with object_hook:
def tuple_hook(dct):
    return {k: tuple(v) if isinstance(v, list) else v for k, v in dct.items()}

restored = json.loads(json_str, object_hook=tuple_hook)
print(type(restored["coords"]))  # <class 'tuple'>
```

### 2. JSON and Infinity/NaN

```python
import json

# These raise ValueError by default:
# json.dumps({"val": float("inf")})    # ValueError: Out of range float values are not JSON compliant
# json.dumps({"val": float("nan")})     # ValueError

# Fix: allow them (non-standard JSON)
json_str = json.dumps({"val": float("inf")}, allow_nan=True)
print(json_str)  # {"val": Infinity}

# Many JSON parsers reject Infinity/NaN — avoid them in APIs
```

### 3. Pickle Compatibility Across Python Versions

```python
# Pickle format is not guaranteed stable across Python versions
# Protocol 2 is the most compatible for Python 2/3 interop
# Protocol 5 requires Python 3.8+

# When unpickling across versions:
# - Classes must have the same module path and structure
# - Adding/removing attributes may cause errors
# - Use __getstate__/__setstate__ for version-safe pickling
```

### 4. YAML Anchors and Large Documents

```python
import yaml

# YAML anchors can create circular references
yaml_str = """
a: &anchor
  b: 1
c: *anchor
"""
data = yaml.safe_load(yaml_str)
print(data["a"] is data["c"])  # True — same object

# Circular references in YAML:
circular = """
a: &ref
  b: *ref
"""
# yaml.safe_load(circular) — may cause RecursionError or create infinite structure
```

### 5. CSV Encoding Issues

```python
import csv

# Always specify encoding explicitly
with open("data.csv", "r", newline="", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row)

# For Excel-exported CSV on Windows:
with open("export.csv", "r", newline="", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    # utf-8-sig strips the BOM that Excel adds
```

### 6. TOML Dotted Keys

```toml
# These are equivalent:
[a.b.c]
value = 1

[a]
[b]
[c]
value = 1
```

TOML does not allow dotted keys to define both a table and a value at the same level. Mixing styles
for the same path is a parse error.

### 7. Float Precision in JSON

```python
import json

# JSON uses IEEE 754 double precision
json_str = json.dumps({"value": 0.1 + 0.2})
print(json_str)  # {"value": 0.30000000000000004}

# For financial data, use strings or Decimal:
from decimal import Decimal

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return str(obj)
        return super().default(obj)

data = {"price": Decimal("0.10"), "tax": Decimal("0.02")}
json_str = json.dumps(data, cls=DecimalEncoder)
# {"price": "0.10", "tax": "0.02"}
```

### 8. JSON Lines for Large Datasets

```json
{"id": 1, "name": "Alice"}
{"id": 2, "name": "Bob"}
{"id": 3, "name": "Carol"}
```

```python
import json

# Writing JSON Lines
with open("events.jsonl", "w") as f:
    for record in events:
        f.write(json.dumps(record) + "\n")

# Reading JSON Lines — streamable, one line at a time
with open("events.jsonl") as f:
    for line in f:
        record = json.loads(line)
        process(record)
```

JSON Lines (`.jsonl`) is preferred over a single JSON array for large datasets because:

- Each line is independently parseable — no need to load the entire file into memory.
- Append-friendly — new records can be added without rewriting the file.
- Streamable — processes can read and write concurrently.
- Resilient — a corrupted line does not invalidate the entire file.

## Schema Validation with Pydantic (Serialization)

Pydantic models provide serialization and deserialization with automatic validation:

```python
from pydantic import BaseModel, Field, field_validator
from datetime import datetime
from typing import Optional

class ServerConfig(BaseModel):
    host: str = Field(..., min_length=1, description="Server hostname or IP")
    port: int = Field(..., ge=1, le=65535)
    timeout: float = Field(default=30.0, gt=0)
    tls_enabled: bool = False
    tags: list[str] = Field(default_factory=list)
    created_at: Optional[datetime] = None

    @field_validator("host")
    @classmethod
    def validate_host(cls, v):
        if v.startswith("http"):
            raise ValueError("host must not include protocol scheme")
        return v

    class Config:
        json_schema_extra = {
            "examples": [
                {"host": "db.example.com", "port": 5432, "timeout": 30.0}
            ]
        }

# Deserialize from dict — validates automatically
config = ServerConfig(**{"host": "db.example.com", "port": 5432})
print(config.host)  # db.example.com

# Serialize to dict
d = config.model_dump()
print(d)  # {'host': 'db.example.com', 'port': 5432, 'timeout': 30.0, ...}

# Serialize to JSON
json_str = config.model_dump_json()
print(json_str)

# Deserialize from JSON
config2 = ServerConfig.model_validate_json(json_str)
print(config2 == config)  # True

# Exclude unset or default fields
config3 = ServerConfig(host="localhost", port=8080)
print(config3.model_dump(exclude_defaults=True))
# {'host': 'localhost', 'port': 8080}

# Exclude specific fields
print(config3.model_dump(exclude={"timeout", "tls_enabled"}))
# {'host': 'localhost', 'port': 8080}
```

### Nested Models and Aliases

```python
from pydantic import BaseModel, Field, AliasGenerator
from pydantic.alias_generators import to_camel

class Address(BaseModel):
    street: str
    city: str
    zip_code: str

class User(BaseModel):
    name: str
    email: str
    address: Address
    is_active: bool = True

    model_config = ConfigDict(
        alias_generator=AliasGenerator(validation_alias=to_camel),
        populate_by_name=True,
    )

user_data = {
    "name": "Alice",
    "email": "alice@example.com",
    "address": {
        "street": "123 Main St",
        "city": "Springfield",
        "zip_code": "62701",
    },
}
user = User(**user_data)
print(user.model_dump_json(indent=2))
# Nested serialization with camelCase aliases
```

### Serialization Modes

```python
from pydantic import BaseModel, ConfigDict
from datetime import datetime
from enum import Enum

class Status(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"

class Event(BaseModel):
    name: str
    status: Status
    timestamp: datetime

    model_config = ConfigDict(
        json_encoders={datetime: lambda v: v.isoformat()},
        use_enum_values=True,
    )

event = Event(name="deploy", status=Status.ACTIVE, timestamp=datetime(2025, 1, 15))

# Python mode (default) — returns Python types
d = event.model_dump()
print(d["status"])      # Status.ACTIVE (enum member)
print(d["timestamp"])   # datetime object

# JSON mode — returns JSON-serializable types
d_json = event.model_dump(mode="json")
print(d_json["status"])    # "active" (string value)
print(d_json["timestamp"]) # "2025-01-15T00:00:00" (ISO string)
```
