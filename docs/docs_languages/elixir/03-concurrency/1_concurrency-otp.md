---
title: Concurrency and OTP
description:
  'Processes, GenServer, Supervisors, Tasks, Agents, Registry, DynamicSupervisor, and fault
  tolerance with the Erlang OTP framework.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Elixir
categories:
  - Elixir
slug: elixir-concurrency-otp
---

## Concurrency Fundamentals

### The Actor Model

Elixir's concurrency is built on the **actor model**, where concurrent computation is performed by
lightweight, isolated processes that communicate through asynchronous message passing. Each process
has its own heap, stack, and mailbox. There is no shared memory and no locks.

Key properties of Elixir processes:

- **Lightweight**: Each process uses approximately 2KB of memory initially
- **Fast**: Process creation and message passing are measured in microseconds
- **Scalable**: A single BEAM node can run millions of concurrent processes
- **Isolated**: Processes share no memory; communication is only via messages
- **Preemptive**: The scheduler can preempt any process (no runaway processes can starve others)

### spawn

The `spawn/1` function creates a new process:

```elixir
# spawn/1 - takes a zero-arity function
pid = spawn(fn -> IO.puts("Hello from process") end)
#PID<0.123.0>

# spawn/3 - takes module, function name, and arguments list
pid = spawn(SomeModule, :some_function, [arg1, arg2])

# The spawned process runs independently
spawn(fn ->
  Process.sleep(1000)
  IO.puts("Delayed message")
end)
# The caller continues immediately
IO.puts("This prints first")
```

### Message Passing with send and receive

Processes communicate by sending messages to PIDs. Messages are placed in the recipient's mailbox
and matched with `receive` blocks:

```elixir
defmodule Messenger do
  def start do
    pid = spawn(__MODULE__, :loop, [])
    pid
  end

  def loop do
    receive do
      {:say, message} ->
        IO.puts("Message: #{message}")
        loop()

      {:ping, from} ->
        send(from, :pong)
        loop()

      :stop ->
        :ok
    end
  end
end

# Usage
pid = Messenger.start()
send(pid, {:say, "Hello from the outside"})
send(pid, {:ping, self()})
receive do
  :pong -> IO.puts("Got pong!")
end
send(pid, :stop)
```

### receive with after (Timeout)

```elixir
receive do
  {:result, value} ->
    {:ok, value}

  {:error, reason} ->
    {:error, reason}
after
  5000 ->
    {:error, :timeout}
end
```

The `after` clause fires if no matching message arrives within the specified milliseconds. Use `0`
for a non-blocking receive that checks for available messages without waiting:

```elixir
# Non-blocking receive
receive do
  message -> handle(message)
after
  0 -> :no_messages
end
```

### The Process Module

The `Process` module provides functions for inspecting and controlling processes:

```elixir
# Current process
pid = self()

# Process information
Process.info(pid)
# Returns map with :status, :memory, :message_queue_len, :reductions, etc.

Process.info(pid, :status)
# :running | :waiting | :runnable | :exiting

Process.info(pid, [:memory, :message_queue_len])
# [memory: 4186, message_queue_len: 0]

# Register a process with a name
Process.register(pid, :my_server)
Process.whereis(:my_server)
# #PID<0.123.0>

# Check if process is alive
Process.alive?(pid)
# true or false

# Send a message
Process.send(pid, :hello, [])
# Third argument is options (empty list = no options)

# Send after a delay
Process.send_after(pid, :check, 5000)
# Returns a timer reference for cancellation

# Kill a process (non-violent)
Process.exit(pid, :shutdown)

# Kill a process (violent - sends exit signal)
Process.exit(pid, :kill)

# Get process dictionary (process-local storage)
Process.put(:key, "value")
Process.get(:key)
# "value"
Process.get(:missing, :default)
# :default
Process.delete(:key)

# Spawn with link
spawn_link(fn -> ... end)

# Spawn with monitor
spawn_monitor(fn -> ... end)
```

## Links and Monitors

### Linking Processes

`spawn_link` creates a bidirectional link between two processes. If one process exits abnormally,
the exit signal propagates to the linked process:

```elixir
spawn_link(fn ->
  raise "oops"
  # This exits with reason :error, propagating to the caller
end)
# The caller also crashes with the same reason

# Trapping exits to handle linked process failures
Process.flag(:trap_exit, true)

spawn_link(fn -> raise "oops" end)

receive do
  {:EXIT, _pid, reason} ->
    IO.puts("Linked process exited: #{inspect(reason)}")
end
```

### Monitoring Processes

`spawn_monitor` creates a one-way monitor. When the monitored process exits, a `{:DOWN, ...}`
message is sent to the monitoring process. The monitoring process does NOT crash:

```elixir
{pid, ref} = spawn_monitor(fn ->
  Process.sleep(100)
  raise "crash"
end)

receive do
  {:DOWN, ^ref, :process, ^pid, reason} ->
    IO.puts("Process #{inspect(pid)} exited: #{inspect(reason)}")
    # {:DOWN, #Reference<...>, :process, #PID<...>, {:error, ...}}
end
```

### spawn vs spawn_link vs spawn_monitor

| Feature            | `spawn`         | `spawn_link`          | `spawn_monitor`          |
| ------------------ | --------------- | --------------------- | ------------------------ |
| Bidirectional link | No              | Yes                   | No                       |
| One-way monitor    | No              | No                    | Yes                      |
| Exit propagation   | None            | Yes (both directions) | No (message only)        |
| Process isolation  | Yes             | No                    | Yes                      |
| Use case           | Fire-and-forget | Paired processes      | Observe without coupling |

## GenServer

GenServer (Generic Server) is the primary OTP abstraction for implementing stateful, concurrent
processes. It provides a standard client/server API with synchronous (`call`) and asynchronous
(`cast`) messaging.

### Basic GenServer

```elixir
defmodule Stack do
  use GenServer

  # Client API

  def start_link(initial) do
    GenServer.start_link(__MODULE__, initial, name: __MODULE__)
  end

  def push(item) do
    GenServer.call(__MODULE__, {:push, item})
  end

  def pop do
    GenServer.call(__MODULE__, :pop)
  end

  def peek do
    GenServer.call(__MODULE__, :peek)
  end

  # Server Callbacks

  @impl true
  def init(initial) do
    {:ok, initial}
  end

  @impl true
  def handle_call({:push, item}, _from, state) do
    {:reply, :ok, [item | state]}
  end

  @impl true
  def handle_call(:pop, _from, []) do
    {:reply, {:error, :empty}, []}
  end

  @impl true
  def handle_call(:pop, _from, [head | tail]) do
    {:reply, {:ok, head}, tail}
  end

  @impl true
  def handle_call(:peek, _from, [head | _] = state) do
    {:reply, {:ok, head}, state}
  end

  @impl true
  def handle_call(:peek, _from, []) do
    {:reply, {:error, :empty}, []}
  end

  @impl true
  def handle_info(:timeout, state) do
    # Handle :timeout messages (not related to handle_call timeouts)
    {:noreply, state}
  end

  @impl true
  def terminate(_reason, _state) do
    :ok
  end
end
```

### GenServer Callbacks

| Callback        | Signature                                          | Purpose                      |
| --------------- | -------------------------------------------------- | ---------------------------- |
| `init/1`        | `(args) -> {:ok, state} or {:stop, reason}`        | Initialize server state      |
| `handle_call/3` | `(request, from, state) -> {:reply, reply, state}` | Handle synchronous calls     |
| `handle_cast/2` | `(request, state) -> {:noreply, state}`            | Handle asynchronous messages |
| `handle_info/2` | `(msg, state) -> {:noreply, state}`                | Handle unexpected messages   |
| `terminate/2`   | `(reason, state) -> :ok`                           | Cleanup on shutdown          |
| `code_change/3` | `(old_vsn, state, extra) -> {:ok, new_state}`      | Hot code upgrade             |

### call vs cast

```elixir
# call - synchronous (blocks until reply)
{:ok, item} = GenServer.call(server_pid, :pop)
# The caller waits for {:reply, reply, new_state}

# cast - asynchronous (returns :ok immediately)
GenServer.cast(server_pid, {:push, 42})
# Returns :ok immediately, does not wait for processing

# call with timeout
GenServer.call(server_pid, :pop, 5000)
# Raises :timeout if no reply within 5000ms

# Using GenServer in a module
defmodule Counter do
  use GenServer

  def start_link(opts \\ []) do
    name = Keyword.get(opts, :name, __MODULE__)
    GenServer.start_link(__MODULE__, 0, name: name)
  end

  def increment(pid \\ __MODULE__) do
    GenServer.cast(pid, :increment)
  end

  def get(pid \\ __MODULE__) do
    GenServer.call(pid, :get)
  end

  @impl true
  def init(count), do: {:ok, count}

  @impl true
  def handle_cast(:increment, count), do: {:noreply, count + 1}

  @impl true
  def handle_call(:get, _from, count), do: {:reply, count, count}
end
```

### handle_info for Unexpected Messages

Messages that are not `call` or `cast` (such as direct `send/2` messages) are handled by
`handle_info`:

```elixir
@impl true
def handle_info({:schedule, task}, state) do
  new_state = execute_task(task, state)
  {:noreply, new_state}
end

@impl true
def handle_info({:DOWN, _ref, :process, _pid, _reason}, state) do
  {:noreply, cleanup(state)}
end

# Catch-all for unknown messages (prevents log spam)
@impl true
def handle_info(_msg, state) do
  {:noreply, state}
end
```

## Supervisors

Supervisors are processes that monitor their child processes and restart them when they crash. They
form supervision trees that provide fault tolerance at the system level.

### Basic Supervisor

```elixir
defmodule MyApp.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      {MyApp.Repo, []},
      {MyApp.Cache, []},
      {MyApp.Worker, []}
    ]

    opts = [strategy: :one_for_one, name: MyApp.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
```

### Child Specifications

Each child process has a specification that defines how it should be started and restarted:

```elixir
# Using a module tuple (recommended)
{MyApp.Worker, [arg1: "value"]}

# Using a full child spec map
%{
  id: MyApp.Worker,
  start: {MyApp.Worker, :start_link, [[]]},
  restart: :permanent,
  shutdown: 5000,
  type: :worker,
  modules: [MyApp.Worker]
}
```

Child spec fields:

| Field      | Values                                   | Default      | Description                     |
| ---------- | ---------------------------------------- | ------------ | ------------------------------- |
| `id`       | any                                      | Module name  | Unique identifier for the child |
| `start`    | `{m, f, a}`                              | Required     | Function to start the child     |
| `restart`  | `:permanent`, `:temporary`, `:transient` | `:permanent` | Restart policy                  |
| `shutdown` | integer, `:brutal_kill`, `:infinity`     | 5000         | Shutdown timeout (ms)           |
| `type`     | `:worker`, `:supervisor`                 | `:worker`    | Whether child is a supervisor   |
| `modules`  | `[module]`, `:dynamic`                   | From start   | Modules for hot upgrades        |

### Restart Strategies

| Strategy        | Description                                                 | Use Case                  |
| --------------- | ----------------------------------------------------------- | ------------------------- |
| `:one_for_one`  | Restart only the crashed child                              | Independent workers       |
| `:one_for_all`  | Restart ALL children when one crashes                       | Tightly coupled processes |
| `:rest_for_one` | Restart the crashed child and all children started after it | Sequential dependencies   |

```elixir
# :one_for_one - each child is independent
Supervisor.start_link(children, strategy: :one_for_one)

# :one_for_all - one crash restarts everything
Supervisor.start_link(children, strategy: :one_for_all)

# :rest_for_one - crash restarts this child and all subsequent children
# Children started AFTER the crashed one are also restarted
Supervisor.start_link(children, strategy: :rest_for_one)

# Restart policies
# :permanent - always restart (default)
# :temporary - never restart
# :transient - restart only on abnormal exit
```

### Strategy Comparison

| Scenario                     | Recommended Strategy | Reason                         |
| ---------------------------- | -------------------- | ------------------------------ |
| Web server workers           | `:one_for_one`       | Workers are independent        |
| DB connection pool + repo    | `:one_for_one`       | Each connection is independent |
| Cache + CacheWarmer          | `:rest_for_one`      | CacheWarmer depends on Cache   |
| Socket manager + handlers    | `:rest_for_one`      | Handlers depend on manager     |
| All services tightly coupled | `:one_for_all`       | Cannot function partially      |

### Nested Supervisors

```elixir
defmodule MyApp.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      MyApp.Repo,

      # Nested supervisor for web layer
      {MyApp.Web.Supervisor, []},

      # Nested supervisor for background jobs
      {MyApp.Jobs.Supervisor, []},

      # Supervisor for cache layer
      {MyApp.Cache.Supervisor, []}
    ]

    Supervisor.start_link(children, strategy: :one_for_one)
  end
end

defmodule MyApp.Web.Supervisor do
  use Supervisor

  def start_link(init_arg) do
    Supervisor.start_link(__MODULE__, init_arg, name: __MODULE__)
  end

  @impl true
  def init(_init_arg) do
    children = [
      {MyApp.Web.Endpoint, []},
      {MyApp.Web.SessionStore, []},
      {MyApp.Web.RateLimiter, []}
    ]

    Supervisor.init(children, strategy: :one_for_one)
  end
end
```

### DynamicSupervisor

The `DynamicSupervisor` is used when the number of children is not known at compile time:

```elixir
defmodule MyApp.ConnectionSupervisor do
  use DynamicSupervisor

  def start_link(init_arg) do
    DynamicSupervisor.start_link(__MODULE__, init_arg, name: __MODULE__)
  end

  @impl true
  def init(_init_arg) do
    DynamicSupervisor.init(strategy: :one_for_one)
  end

  def start_connection(config) do
    spec = {MyApp.Connection, config}
    DynamicSupervisor.start_child(__MODULE__, spec)
  end

  def stop_connection(pid) do
    DynamicSupervisor.terminate_child(__MODULE__, pid)
  end

  def list_connections do
    DynamicSupervisor.which_children(__MODULE__)
  end
end
```

## Application Module

Every OTP application has an application callback module that starts the supervision tree:

```elixir
defmodule MyApp.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Primary DB
      MyApp.Repo,

      # PubSub for real-time features
      {Phoenix.PubSub, name: MyApp.PubSub},

      # Start the Endpoint (web server)
      MyAppWeb.Endpoint,

      # Background job processor
      {Oban, oban_config()}
    ]

    opts = [strategy: :one_for_one, name: MyApp.Supervisor]
    Supervisor.start_link(children, opts)
  end

  defp oban_config do
    [
      repo: MyApp.Repo,
      plugins: [Oban.Plugins.Pruner],
      queues: [default: 10, mailers: 5]
    ]
  end
end
```

The `mix.exs` file registers the application:

```elixir
def application do
  [
    extra_applications: [:logger],
    mod: {MyApp.Application, []}
  ]
end
```

## Task

Tasks are fire-and-forget processes for executing concurrent work. They are built on top of
GenServer.

### Task.async/await

```elixir
# Run a task and wait for the result
result = Task.async(fn ->
  # expensive computation
  compute_something()
end)
|> Task.await()
# Blocks until the task completes, default timeout 5000ms

# Multiple concurrent tasks
tasks = [
  Task.async(fn -> fetch_user(1) end),
  Task.async(fn -> fetch_user(2) end),
  Task.async(fn -> fetch_user(3) end)
]

results = Task.await_many(tasks, 10_000)
# Returns list of results in the same order

# Task.yield (non-blocking)
task = Task.async(fn -> long_running() end)

case Task.yield(task, 1000) do
  {:ok, result} -> IO.puts("Got: #{result}")
  nil -> IO.puts("Still running...")
  {:exit, reason} -> IO.puts("Crashed: #{inspect(reason)}")
end

# Task.start (fire and forget, no result retrieval)
Task.start(fn ->
  Process.sleep(1000)
  IO.puts("Background work done")
end)
```

### Task.async_stream

For processing collections with bounded concurrency:

```elixir
1..100
|> Task.async_stream(fn n ->
  process_item(n)
end, max_concurrency: 10, timeout: 30_000)
|> Enum.map(fn {:ok, result} -> result end)
```

## Agent

Agent is a simple abstraction for maintaining state that can be read and written by multiple
processes:

```elixir
defmodule AppConfig do
  def start_link(initial) do
    Agent.start_link(fn -> initial end, name: __MODULE__)
  end

  def get(key) do
    Agent.get(__MODULE__, fn state -> Map.get(state, key) end)
  end

  def put(key, value) do
    Agent.update(__MODULE__, fn state -> Map.put(state, key, value) end)
  end

  def all do
    Agent.get(__MODULE__, & &1)
  end
end

# Usage
{:ok, _pid} = AppConfig.start_link(%{theme: "dark", lang: "en"})
AppConfig.get(:theme)
# "dark"
AppConfig.put(:theme, "light")
```

Agent is built on GenServer and provides a simpler API for state management. Use GenServer directly
when you need more control over message handling.

## Registry

Registry provides a way to register processes and look them up by key:

```elixir
defmodule MyApp.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      {Registry, keys: :unique, name: MyApp.Registry}
    ]

    Supervisor.start_link(children, strategy: :one_for_one)
  end
end

# Register a process
Registry.register(MyApp.Registry, "user:123", %{role: :admin})

# Lookup
Registry.lookup(MyApp.Registry, "user:123")
[{#PID<0.123.0>, %{role: :admin}}]

# Dispatch to a registered process
Registry.dispatch(MyApp.Registry, "user:123", fn [{pid, meta}] ->
  send(pid, {:update, meta})
end)

# Via names (using Registry as a process name)
# Instead of name: __MODULE__
# Use name: {:via, Registry, {MyApp.Registry, "user:123"}}
GenServer.start_link(__MODULE__, opts, name: {:via, Registry, {MyApp.Registry, key}})
```

Registry supports both `:unique` keys (one process per key) and `:duplicate` keys (multiple
processes per key, useful for pub/sub patterns).

## "Let It Crash" Philosophy

Elixir/Erlang's approach to fault tolerance is fundamentally different from most languages. Instead
of trying to prevent all errors, the philosophy is:

1. **Write defensive code at the boundary**: Validate inputs at the edges of your system
2. **Let processes crash**: Let internal errors propagate and crash the process
3. **Supervise and restart**: Supervisors detect crashes and restart processes with clean state
4. **Isolate failures**: Each process is isolated, so one crash does not cascade uncontrolled

```elixir
# Anti-pattern: catching everything
def process(data) do
  try do
    risky_operation(data)
  rescue
    _ -> :error   # Swallowing errors hides bugs
  end
end

# Idiomatic pattern: let it crash and supervise
def start_link do
  GenServer.start_link(__MODULE__, [], name: __MODULE__)
end

# Supervisor restarts this if it crashes
# Supervisor specification:
# {MyModule, restart: :permanent}
```

This philosophy works because:

- Processes are cheap to create and destroy
- Supervisors can restart processes quickly with clean state
- Crashes are isolated and do not corrupt shared state
- The system as a whole continues to function even if individual components fail

## Practical Example: Building a Task Manager

```elixir
defmodule TaskManager do
  use GenServer

  def start_link(opts \\ []) do
    name = Keyword.get(opts, :name, __MODULE__)
    GenServer.start_link(__MODULE__, %{}, name: name)
  end

  def add_task(manager \\ __MODULE__, description) do
    GenServer.call(manager, {:add, description})
  end

  def complete_task(manager \\ __MODULE__, id) do
    GenServer.call(manager, {:complete, id})
  end

  def list_tasks(manager \\ __MODULE__) do
    GenServer.call(manager, :list)
  end

  @impl true
  def init(_), do: {:ok, %{tasks: %{}, next_id: 1}}

  @impl true
  def handle_call({:add, description}, _from, state) do
    id = state.next_id
    task = %{id: id, description: description, status: :pending}
    new_tasks = Map.put(state.tasks, id, task)
    {:reply, {:ok, id}, %{state | tasks: new_tasks, next_id: id + 1}}
  end

  @impl true
  def handle_call({:complete, id}, _from, state) do
    case Map.get(state.tasks, id) do
      nil ->
        {:reply, {:error, :not_found}, state}

      task ->
        updated = %{task | status: :completed}
        new_tasks = Map.put(state.tasks, id, updated)
        {:reply, :ok, %{state | tasks: new_tasks}}
    end
  end

  @impl true
  def handle_call(:list, _from, state) do
    tasks = Map.values(state.tasks)
    {:reply, tasks, state}
  end
end

# Supervisor for the task manager
defmodule TaskManager.Supervisor do
  use Supervisor

  def start_link(opts) do
    Supervisor.start_link(__MODULE__, opts, name: __MODULE__)
  end

  @impl true
  def init(opts) do
    children = [
      {TaskManager, opts}
    ]

    Supervisor.init(children, strategy: :one_for_one)
  end
end
```

## Summary

Elixir's concurrency model is built on lightweight processes, message passing, and the OTP
framework:

- `spawn`/`spawn_link`/`spawn_monitor` create processes with different linking behaviors
- `send`/`receive` enable asynchronous message passing
- GenServer provides the standard pattern for stateful server processes
- Supervisors manage process lifecycles with configurable restart strategies
- The `:one_for_one` strategy restarts only the crashed child
- The `:one_for_all` strategy restarts all children when one crashes
- The `:rest_for_one` strategy restarts the crashed child and all subsequent children
- DynamicSupervisor handles dynamically spawned children
- Tasks provide async/await patterns for concurrent computations
- Agents simplify state management for shared state
- The "let it crash" philosophy relies on supervision trees for fault tolerance
