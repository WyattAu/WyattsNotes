---
title: Testing and Deployment
description:
  'ExUnit testing framework, mocking with Mox, property-based testing with StreamData, Mix
  environments, releases, hot code upgrades, and deployment with Docker.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Elixir
categories:
  - Elixir
slug: elixir-testing-deployment
---

## ExUnit Framework

ExUnit is the built-in testing framework for Elixir. It ships with the language and provides
everything needed for unit testing, integration testing, and doctests.

### Test File Structure

Test files live in the `test/` directory and follow naming conventions:

```
test/
├── test_helper.exs          # Runs before all tests
├── my_app_test.exs          # Test for the main module
└── my_app/
    ├── user_test.exs        # Test for MyApp.User
    └── repo_test.exs        # Test for MyApp.Repo
```

The `test_helper.exs` file typically sets up the test environment:

```elixir
ExUnit.start()

# Set test environment
Application.ensure_all_started(:my_app)

# Configure database
Ecto.Adapters.SQL.Sandbox.mode(MyApp.Repo, :manual)
```

### Basic Tests

```elixir
defmodule MathTest do
  use ExUnit.Case, async: true

  test "addition works" do
    assert 1 + 1 == 2
  end

  test "string concatenation" do
    result = "Hello" <> " " <> "World"
    assert result == "Hello World"
  end

  test "pattern matching in tests" do
    {:ok, value} = {:ok, 42}
    assert value == 42
  end
end
```

### assert and refute

`assert` passes if the expression is truthy. `refute` passes if the expression is falsy:

```elixir
test "assert examples" do
  assert 2 + 2 == 4
  assert [1, 2, 3] |> Enum.sum() == 6
  assert is_list([1, 2, 3])
  assert Map.has_key?(%{a: 1}, :a)
end

test "refute examples" do
  refute false
  refute nil
  refute 1 == 2
  refute Map.has_key?(%{a: 1}, :b)
end
```

### assert_raise

`assert_raise` verifies that an exception is raised:

```elixir
test "division by zero raises" do
  assert_raise ArithmeticError, fn ->
    1 / 0
  end
end

test "custom exception with message" do
  assert_raise MyApp.Error, "invalid input", fn ->
    MyApp.validate!(nil)
  end
end

# Capture the exception for further assertions
test "exception details" do
  assert_raise RuntimeError, fn ->
    raise "something bad"
  end
end
```

### assert_receive

`assert_receive` verifies that a specific message arrives in the process mailbox:

```elixir
test "process sends a message" do
  pid = spawn(fn ->
    Process.sleep(50)
    send(self(), {:done, 42})
  end)

  assert_receive {:done, 42}
end

# With timeout
test "message with timeout" do
  send(self(), :hello)

  assert_receive :hello, 1000
end

# refute_receive
test "no unexpected messages" do
  refute_receive :unexpected, 100
end
```

### describe Blocks

`describe` groups related tests and supports shared setup:

```elixir
defmodule CalculatorTest do
  use ExUnit.Case

  describe "addition" do
    test "positive numbers" do
      assert Calculator.add(1, 2) == 3
    end

    test "negative numbers" do
      assert Calculator.add(-1, -2) == -3
    end

    test "mixed signs" do
      assert Calculator.add(-5, 10) == 5
    end
  end

  describe "division" do
    test "exact division" do
      assert Calculator.divide(10, 2) == {:ok, 5.0}
    end

    test "division by zero" do
      assert Calculator.divide(10, 0) == {:error, :division_by_zero}
    end
  end
end
```

### Setup and Teardown

```elixir
defmodule DatabaseTest do
  use ExUnit.Case, async: false

  setup do
    # Runs before each test
    :ok = MyApp.DB.connect()
    on_exit(fn ->
      # Runs after each test (even if it fails)
      MyApp.DB.disconnect()
    end)
    :ok
  end

  test "insert and retrieve" do
    MyApp.DB.insert(:users, %{name: "Alice"})
    assert MyApp.DB.get(:users, "Alice") != nil
  end
end
```

### Setup with Context

```elixir
defmodule UserControllerTest do
  use ExUnit.Case

  setup do
    user = %{id: 1, name: "Test User", role: :admin}
    {:ok, user: user}
  end

  test "admin can access dashboard", context do
    user = context.user
    assert {:ok, _} = UserController.dashboard(user)
  end

  # Pattern matching on context directly
  test "user has correct role", %{user: user} do
    assert user.role == :admin
  end
end
```

### Setup with Tags

```elixir
defmodule FeatureTest do
  use ExUnit.Case, async: true

  setup tags do
    if tags[:integration] do
      # Setup for integration tests
      {:ok, conn: start_connection()}
    else
      # Setup for unit tests
      {:ok, conn: nil}
    end
  end

  @tag integration: true
  test "database integration" do
    assert true
  end

  test "unit test" do
    assert true
  end
end
```

Run tests with a specific tag:

```bash
# Run only integration tests
mix test --only integration

# Exclude integration tests
mix test --exclude integration
```

### Doctests

Doctests extract examples from `@doc` attributes and run them as tests:

```elixir
defmodule Math do
  @doc """
  Adds two numbers.

  ## Examples

      iex> Math.add(2, 3)
      5

      iex> Math.add(-1, 1)
      0

      iex> Math.add(0, 0)
      0
  """
  @spec add(number(), number()) :: number()
  def add(a, b), do: a + b
end

defmodule MathTest do
  use ExUnit.Case
  doctest Math
end
```

Doctests are excellent for documentation that doubles as tests. They ensure examples in
documentation stay accurate.

### ExUnit.Callbacks

`ExUnit.Callbacks` provides hooks for test lifecycle management:

```elixir
defmodule CallbacksTest do
  use ExUnit.Case, async: true

  setup_all do
    # Runs once before all tests in the module
    shared_resource = create_shared_resource()
    {:ok, shared: shared_resource}
  end

  setup context do
    # Runs before each test
    if context.test == "test special case" do
      {:ok, special: true}
    else
      :ok
    end
  end

  test "first test", %{shared: shared} do
    assert shared != nil
  end
end
```

## Mocking

### Mox

Mox is the standard mocking library for Elixir. It generates mock modules from behaviours and
ensures mocks are only used in tests:

```elixir
# mix.exs
{:mox, "~> 1.1", only: :test}
```

```elixir
# Define a behaviour
defmodule StorageBehaviour do
  @callback get(key :: String.t()) :: {:ok, any()} | {:error, :not_found}
  @callback put(key :: String.t(), value :: any()) :: :ok
end

# In test_helper.exs
Mox.defmock(StorageMock, for: StorageBehaviour)

# In tests
defmodule UserServiceTest do
  use ExUnit.Case
  import Mox

  setup :verify_on_exit!

  test "retrieves user from storage" do
    expect(StorageMock, :get, fn "user:123" ->
      {:ok, %{id: 123, name: "Alice"}}
    end)

    assert {:ok, user} = UserService.find(123)
    assert user.name == "Alice"
  end

  test "handles not found" do
    expect(StorageMock, :get, fn "user:999" ->
      {:error, :not_found}
    end)

    assert {:error, :not_found} = UserService.find(999)
  end

  test "allows multiple expectations" do
    expect(StorageMock, :get, fn "user:1" -> {:ok, %{id: 1}} end)
    expect(StorageMock, :get, fn "user:2" -> {:ok, %{id: 2}} end)
    expect(StorageMock, :get, fn "user:3" -> {:error, :not_found} end)

    assert {:ok, _} = UserService.find(1)
    assert {:ok, _} = UserService.find(2)
    assert {:error, :not_found} = UserService.find(3)
  end

  test "stub returns same value regardless of args" do
    stub(StorageMock, :get, fn _ -> {:ok, %{id: 0, name: "Stub"}} end)

    assert {:ok, user} = UserService.find(any_number)
    assert user.name == "Stub"
  end
end
```

### Mox Conventions

1. Always call `setup :verify_on_exit!` to verify all expectations were called
2. Use `expect` for specific call expectations (order matters, arguments must match)
3. Use `stub` for default returns when specific arguments do not need matching
4. Mox allows both private and public functions to be mocked
5. Mox ensures mocks cannot leak into non-test code

## Property-Based Testing

### StreamData

StreamData brings property-based testing to Elixir (similar to QuickCheck):

```elixir
# mix.exs
{:stream_data, "~> 0.6", only: [:test, :dev]}
```

```elixir
defmodule MathPropertyTest do
  use ExUnit.Case, async: true
  use ExUnitProperties

  property "addition is commutative" do
    check all a <- integer(), b <- integer() do
      assert Math.add(a, b) == Math.add(b, a)
    end
  end

  property "addition is associative" do
    check all a <- integer(), b <- integer(), c <- integer() do
      result1 = Math.add(Math.add(a, b), c)
      result2 = Math.add(a, Math.add(b, c))
      assert result1 == result2
    end
  end

  property "sort is idempotent" do
    check all list <- list_of(integer()) do
      assert Enum.sort(Enum.sort(list)) == Enum.sort(list)
    end
  end

  property "reverse(reverse(list)) == list" do
    check all list <- list_of(term()) do
      assert Enum.reverse(Enum.reverse(list)) == list
    end
  end

  property "string length after upcase is the same" do
    check all str <- string(:alphanumeric) do
      assert String.length(String.upcase(str)) == String.length(str)
    end
  end
end
```

### Custom Generators

```elixir
defmodule CustomGenerators do
  use ExUnitProperties

  def user do
    gen all name <- string(:alphanumeric, min_length: 1, max_length: 50),
            age <- integer(0..120),
            email <- string(:ascii, min_length: 5, max_length: 100) do
      %{name: name, age: age, email: email}
    end
  end

  def non_empty_list(gen) do
    gen all [head | tail] <- list_of(gen, min_length: 1) do
      [head | tail]
    end
  end
end

defmodule UserPropertyTest do
  use ExUnit.Case, async: true
  use ExUnitProperties

  property "user name is always a string" do
    check all user <- CustomGenerators.user() do
      assert is_binary(user.name)
      assert String.length(user.name) > 0
      assert user.age >= 0 and user.age <= 120
    end
  end
end
```

### Shrinking

When StreamData finds a failing case, it automatically shrinks the input to find the minimal failing
example:

```elixir
property "list concatenation preserves length" do
  check all a <- list_of(integer(), min_length: 0),
            b <- list_of(integer(), min_length: 0) do
    assert length(a ++ b) == length(a) + length(b)
  end
end
```

If this property fails, StreamData will try to find the smallest lists that trigger the failure,
making bugs easier to understand and fix.

## Mix Environments

### Environment Configuration

Mix has three built-in environments: `dev`, `test`, and `prod`:

```
config/
├── config.exs         # Base configuration
├── dev.exs            # Development overrides
├── test.exs           # Test overrides
├── prod.exs           # Production overrides
└── runtime.exs       # Runtime-only (secrets, env vars)
```

```elixir
# config/config.exs
import Config

config :my_app,
  ecto_repos: [MyApp.Repo]

config :my_app, MyApp.Repo,
  pool_size: 10

import_config "#{config_env()}.exs"
```

```elixir
# config/dev.exs
import Config

config :my_app, MyApp.Repo,
  username: "postgres",
  password: "postgres",
  database: "my_app_dev",
  hostname: "localhost",
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :my_app, MyAppWeb.Endpoint,
  debug_errors: true,
  code_reloader: true,
  check_origin: false

config :logger, level: :debug
```

```elixir
# config/test.exs
import Config

config :my_app, MyApp.Repo,
  username: "postgres",
  password: "postgres",
  database: "my_app_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

config :logger, level: :warning
```

```elixir
# config/prod.exs
import Config

config :my_app, MyApp.Repo,
  pool_size: 20

config :my_app, MyAppWeb.Endpoint,
  cache_static_lookup_assets: true,
  force_ssl: [hsts: true]

config :logger, level: :info
```

```elixir
# config/runtime.exs (for secrets and env vars)
import Config

if config_env() == :prod do
  secret_key_base =
    System.get_env("SECRET_KEY_BASE") ||
      raise "SECRET_KEY_BASE environment variable is missing"

  database_url =
    System.get_env("DATABASE_URL") ||
      raise "DATABASE_URL environment variable is missing"

  config :my_app, MyAppWeb.Endpoint,
    secret_key_base: secret_key_base

  config :my_app, MyApp.Repo,
    url: database_url,
    pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10")
end
```

### Running in Different Environments

```bash
# Default (dev)
mix run

# Test environment
MIX_ENV=test mix run

# Production environment
MIX_ENV=prod mix run

# Specific commands
MIX_ENV=test mix test
MIX_ENV=prod mix release
```

## Mix Releases

### Creating a Release

Releases package your application into a self-contained directory that includes the BEAM VM, your
application, and all dependencies:

```elixir
# mix.exs
def project do
  [
    app: :my_app,
    version: "0.1.0",
    elixir: "~> 1.16",
    start_permanent: Mix.env() == :prod,
    deps: deps(),
    releases: [
      my_app: [
        version: "0.1.0",
        applications: [runtime_tools: :permanent]
      ]
    ]
  ]
end
```

```bash
# Build a release
MIX_ENV=prod mix release

# The release is created in _build/prod/rel/my_app/
# Contains:
# - bin/my_app      # Start/stop/daemonize scripts
# - lib/            # BEAM VM and compiled code
# - releases/       # Version info and upgrades
# - erts-*          # Erlang Runtime System
```

### Running a Release

```bash
# Start in foreground
_build/prod/rel/my_app/bin/my_app start

# Start as daemon
_build/prod/rel/my_app/bin/my_app daemon

# Run remote console (connect to running node)
_build/prod/rel/my_app/bin/my_app remote

# Stop the application
_build/prod/rel/my_app/bin/my_app stop

# Check status
_build/prod/rel/my_app/bin/my_app pid

# Run a command
_build/prod/rel/my_app/bin/my_app eval "MyApp.health_check()"
```

### Release Configuration

```elixir
# mix.exs - release configuration
def project do
  [
    releases: [
      my_app: [
        version: "0.1.0",
        applications: [runtime_tools: :permanent],
        # Include ERTS (Erlang Runtime System)
        include_erts: true,
        # Strip debug info
        strip_beams: true,
        # Cookie for distributed Erlang
        cookie: "my_app_cookie",
        # VM args
        vm_args: "rel/vm.args.eex"
      ]
    ]
  ]
end
```

### Hot Code Upgrades

One of BEAM's most distinctive features is hot code swapping -- loading new code without stopping
the system:

```elixir
# 1. Build the current release
MIX_ENV=prod mix release

# 2. Make code changes and bump version

# 3. Build the new release
MIX_ENV=prod mix release

# 4. Generate an upgrade package
MIX_ENV=prod mix release --upgrade

# 5. Install the upgrade on the running system
_build/prod/rel/my_app/bin/my_app upgrade "0.2.0"

# 6. If needed, roll back
_build/prod/rel/my_app/bin/my_app downgrade "0.1.0"
```

During a hot upgrade:

- New processes use the new version of modules
- Old processes continue running with the old version
- Messages are serialized and deserialized if needed
- The system never goes down

The `code_change/3` callback in GenServer handles state transformation between versions:

```elixir
defmodule MyServer do
  use GenServer

  @impl true
  def code_change({:down, _vsn}, state, _extra) do
    # Downgrade: new state -> old state
    old_state = downgrade_state(state)
    {:ok, old_state}
  end

  def code_change({:up, _vsn}, old_state, _extra) do
    # Upgrade: old state -> new state
    new_state = upgrade_state(old_state)
    {:ok, new_state}
  end
end
```

## Deployment with Docker

### Dockerfile for Elixir/Phoenix

```dockerfile
# Build stage
FROM elixir:1.16-alpine AS build

RUN apk add --no-cache build-base git curl

WORKDIR /app

# Install hex + rebar
RUN mix local.hex --force && mix local.rebar --force

# Copy mix files first (layer caching)
COPY mix.exs mix.lock ./
RUN mix deps.get --only prod
RUN mix deps.compile

# Copy source code
COPY config config
COPY lib lib
COPY priv priv

# Compile application
RUN mix compile

# Compile assets (if Phoenix)
RUN mix assets.deploy

# Create release
RUN mix release --overwrite

# Runtime stage
FROM alpine:3.19 AS app

RUN apk add --no-cache ncurses-libs openssl

WORKDIR /app

COPY --from=build /app/_build/prod/rel/my_app ./

ENV HOME=/app
ENV MIX_ENV=prod
ENV SECRET_KEY_BASE=change_me

EXPOSE 4000

CMD ["bin/my_app", "start"]
```

### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '4000:4000'
    environment:
      - DATABASE_URL=postgres://postgres:postgres@db/my_app_prod
      - SECRET_KEY_BASE=${SECRET_KEY_BASE}
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=my_app_prod
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U postgres']
      interval: 5s
      timeout: 5s
      retries: 5
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

### Multi-stage Builds

Multi-stage builds keep the final image small by separating build dependencies from runtime:

```bash
# Build
docker build -t my-app:latest .

# Run
docker run -d \
  -p 4000:4000 \
  -e DATABASE_URL=postgres://... \
  -e SECRET_KEY_BASE=$(openssl rand -base64 48) \
  --name my-app \
  my-app:latest
```

## Umbrella Applications

### Structure

Umbrella applications organize multiple Elixir applications within a single repository:

```
my_umbrella/
├── apps/
│   ├── core/              # Shared domain logic
│   │   ├── lib/
│   │   ├── test/
│   │   └── mix.exs
│   ├── web/               # Web server
│   │   ├── lib/
│   │   ├── test/
│   │   └── mix.exs
│   └── worker/            # Background processing
│       ├── lib/
│       ├── test/
│       └── mix.exs
├── config/
│   ├── config.exs
│   ├── dev.exs
│   ├── test.exs
│   └── prod.exs
├── mix.exs                 # Root mix.exs
└── mix.lock
```

### Root mix.exs

```elixir
defmodule Umbrella.MixProject do
  use Mix.Project

  def project do
    [
      apps_path: "apps",
      version: "0.1.0",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      aliases: aliases()
    ]
  end

  defp deps do
    [{phoenix: "~> 1.7"}]
  end

  defp aliases do
    [
      "test.all": ["test --only umbrella"],
      setup: ["deps.get", "ecto.setup --only umbrella"]
    ]
  end
end
```

### Benefits and Trade-offs

Benefits:

- Shared dependencies reduce compilation time and disk usage
- Code sharing between apps via standard Mix dependencies
- Single repository with unified versioning
- Coordinated deployments

Trade-offs:

- Coupling between apps can increase over time
- Release granularity is coarse (all apps deploy together)
- Test runtimes are longer
- Complex dependency graphs between sub-apps

## Summary

Elixir provides a comprehensive testing and deployment story:

- ExUnit provides `test`, `describe`, `assert`, `refute`, `assert_raise`, `assert_receive`
- `setup` and `setup_all` provide per-test and per-module hooks
- Doctests extract examples from `@doc` and run them as tests
- Mox generates type-safe mocks from behaviours
- StreamData enables property-based testing with automatic shrinking
- Mix environments (`dev`, `test`, `prod`) manage configuration
- `mix release` creates self-contained, deployable packages
- Hot code upgrades enable zero-downtime deployments
- Docker multi-stage builds produce small, efficient images
- Umbrella apps organize multiple applications in one repository
