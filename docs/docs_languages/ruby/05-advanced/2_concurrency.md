---
title: Concurrency
description:
  'Ruby concurrency with threads, Mutex, Queue, SizedQueue, ThreadSafe data structures, Ractor for
  parallelism, Fiber, async/await patterns, and the Async gem.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Ruby
categories:
  - Ruby
slug: ruby-concurrency
---

## Concurrency in Ruby

Ruby supports both concurrency (dealing with multiple tasks at once) and parallelism (executing
multiple tasks simultaneously). The concurrency model has evolved significantly across Ruby
versions:

- **Ruby 1.8**: Green threads (managed by the interpreter, no true parallelism)
- **Ruby 1.9--2.x**: Native threads with the GIL (Global Interpreter Lock) -- only one thread
  executes Ruby code at a time, but I/O operations release the GIL
- **Ruby 3.0+**: Ractor for true parallelism, Fiber Scheduler for non-blocking I/O

## Threads

### Creating Threads

```ruby
# Basic thread creation
thread = Thread.new { puts "Hello from thread" }
thread.join  # wait for completion

# Thread with argument
thread = Thread.new("Alice") do |name|
  3.times { |i| puts "#{name}: iteration #{i}"; sleep(0.1) }
end
thread.join

# Multiple threads
threads = 5.times.map do |i|
  Thread.new(i) do |id|
    result = heavy_computation(id)
    puts "Thread #{id} completed with result #{result}"
  end
end

threads.each(&:join)
puts "All threads completed"
```

### Thread Lifecycle

```ruby
# Thread states
t = Thread.new { sleep(1) }

t.status     # => "run" or "sleep" or false (dead)
t.alive?     # => true while running or sleeping
t.stop?      # => true if sleeping or dead

# Wait for completion
t.join       # blocks until thread finishes
t.join(2)    # wait at most 2 seconds
t.join(2) { puts "Timed out!" }

t.value      # returns the thread's return value (blocks until completion)

# Thread return value
t = Thread.new { 2 + 3 }
t.value      # => 5

# Thread abort on exception
t = Thread.new { raise "Error!" }
# t dies silently unless you join

t = Thread.new { raise "Error!" }
t.join  # => RuntimeError: Error! (re-raised in the joining thread)

# Thread abort on exception setting
Thread.abort_on_exception = true  # global setting

t = Thread.new do
  Thread.current.abort_on_exception = true
  raise "Error!"
end
# Error is raised immediately and kills the main thread
```

### Thread-Local Variables

```ruby
# Thread-local storage via thread-local variables
count = 0

threads = 10.times.map do
  Thread.new do
    # This is NOT thread-safe -- shared mutable state
    count += 1
  end
end
threads.each(&:join)
puts count  # unpredictable result (race condition)

# Thread-safe using thread-local variables
Thread.new do
  Thread.current[:user_id] = 42
  Thread.current[:request_id] = "abc-123"
  puts Thread.current[:user_id]
end.join

# Thread-local via thread keys
t = Thread.new do
  Thread.current[:data] = "local to this thread"
  sleep(1)
  puts Thread.current[:data]
end

Thread.current[:data]  # => nil (different thread)

t.join
```

## Mutex

A Mutex (mutual exclusion lock) protects shared resources from concurrent access:

```ruby
require 'thread'

mutex = Mutex.new
counter = 0

threads = 10.times.map do
  Thread.new do
    100.times do
      mutex.synchronize do
        counter += 1
      end
    end
  end
end

threads.each(&:join)
puts counter  # => 1000 (always correct)
```

### Mutex Methods

```ruby
mutex = Mutex.new

# synchronize -- acquire lock, execute block, release lock
mutex.synchronize do
  shared_resource.update
end

# Manual lock/unlock (prefer synchronize)
mutex.lock
begin
  shared_resource.update
ensure
  mutex.unlock
end

# try_lock -- non-blocking
if mutex.try_lock
  begin
    shared_resource.update
  ensure
    mutex.unlock
  end
else
  puts "Could not acquire lock"
end

# locked? -- check if mutex is held
mutex.locked?  # => true or false

# owned? -- check if current thread owns the lock
mutex.owned?  # => true or false

# sleep -- release lock, sleep, reacquire
mutex.synchronize do
  result = compute
  if result.nil?
    mutex.sleep(1)  # releases lock during sleep
  end
end
```

### Deadlock

```ruby
mutex_a = Mutex.new
mutex_b = Mutex.new

# Deadlock scenario
thread1 = Thread.new do
  mutex_a.synchronize do
    sleep(0.1)
    mutex_b.synchronize do
      puts "Thread 1"
    end
  end
end

thread2 = Thread.new do
  mutex_b.synchronize do
    sleep(0.1)
    mutex_a.synchronize do
      puts "Thread 2"
    end
  end
end

# Both threads wait forever -- deadlock!
# Prevention: always acquire locks in the same order
```

## Queue and SizedQueue

Thread-safe data structures for inter-thread communication:

### Queue

```ruby
require 'thread'

queue = Queue.new

# Producer threads
producers = 3.times.map do
  Thread.new do
    5.times do |i|
      item = "item-#{Thread.current.object_id}-#{i}"
      queue.push(item)
      puts "Produced: #{item}"
    end
  end
end

# Consumer thread
consumer = Thread.new do
  loop do
    item = queue.pop
    puts "Consumed: #{item}"
  end
end

producers.each(&:join)

# Send poison pill
3.times { queue.push(:stop) }

consumer.join
```

### SizedQueue

```ruby
require 'thread'

# Bounded queue -- blocks when full
buffer = SizedQueue.new(5)

producer = Thread.new do
  20.times do |i|
    buffer.push("item-#{i}")
    puts "Produced: item-#{i} (size: #{buffer.size})"
  end
  buffer.push(:done)
end

consumer = Thread.new do
  loop do
    item = buffer.pop
    break if item == :done
    puts "Consumed: #{item}"
    sleep(0.1)  # simulate processing time
  end
end

producer.join
consumer.join
```

### Queue Methods

```ruby
queue = Queue.new

queue.push("a")     # add to queue (alias: enq, <<)
queue.pop           # remove from queue (alias: deq, shift)
queue.pop(true)     # non-blocking pop (raises ThreadError if empty)
queue.empty?        # => true
queue.size          # => 0
queue.clear         # empty the queue
queue.num_waiting   # number of threads waiting to pop

# SizedQueue additionally
sq = SizedQueue.new(3)
sq.max              # => 3 (capacity)
sq.push("a")        # blocks when full
sq.push("a", true)  # non-blocking, returns false if full
```

## ThreadSafe Patterns

### Read-Write Lock

```ruby
class ReadWriteLock
  def initialize
    @readers = 0
    @resource = Mutex.new
    @read_ready = ConditionVariable.new
  end

  def read_shared
    @resource.synchronize do
      @readers += 1
    end
    yield
  ensure
    @resource.synchronize do
      @readers -= 1
      @read_ready.signal if @readers.zero?
    end
  end

  def write_exclusive
    @resource.synchronize do
      @read_ready.wait(@resource) while @readers > 0
      yield
    end
  end
end

data_store = []
lock = ReadWriteLock.new

# Multiple readers
readers = 5.times.map do
  Thread.new { lock.read_shared { puts data_store.size } }
end

# Single writer
writers = 2.times.map do
  Thread.new { lock.write_exclusive { data_store << rand(100) } }
end

(readers + writers).each(&:join)
```

### Thread Pool

```ruby
require 'thread'

class ThreadPool
  def initialize(size:)
    @size = size
    @queue = Queue.new
    @mutex = Mutex.new
    @workers = []

    @size.times do
      @workers << Thread.new { worker_loop }
    end
  end

  def execute(&block)
    @queue.push(block)
  end

  def shutdown
    @size.times { @queue.push(:shutdown) }
    @workers.each(&:join)
  end

  private

  def worker_loop
    loop do
      task = @queue.pop
      break if task == :shutdown
      task.call
    end
  end
end

pool = ThreadPool.new(size: 4)

20.times do |i|
  pool.execute do
    result = (i ** 2)
    puts "Task #{i}: #{result}"
  end
end

pool.shutdown
```

### Producer-Consumer Pattern

```ruby
require 'thread'

class Pipeline
  def initialize(workers: 4, queue_size: 100)
    @queue = SizedQueue.new(queue_size)
    @results = []
    @result_mutex = Mutex.new

    @workers = workers.times.map do
      Thread.new { process_loop }
    end
  end

  def submit(task)
    @queue.push(task)
  end

  def results
    @result_mutex.synchronize { @results.dup }
  end

  def await_completion
    @queue.push(:done)
    @workers.each(&:join)
  end

  private

  def process_loop
    loop do
      task = @queue.pop
      break if task == :done
      result = process(task)
      @result_mutex.synchronize { @results << result }
    end
  end

  def process(task)
    task * task
  end
end

pipeline = Pipeline.new(workers: 4)
100.times { |i| pipeline.submit(i) }
pipeline.await_completion
puts pipeline.results.sort.first(10)
```

## Ractor (Ruby 3.0+)

Ractor enables true parallelism by isolating objects between Ractors. Each Ractor has its own memory
space and can only communicate through message passing.

### Basic Ractor Usage

```ruby
# Create a Ractor
ractor = Ractor.new do
  puts "Hello from Ractor #{Ractor.current}"
  42
end

ractor.take  # => 42 (receives the return value)

# Ractor with arguments
ractor = Ractor.new("hello") do |message|
  "#{message} from Ractor"
end

ractor.take  # => "hello from Ractor"

# Multiple arguments
ractor = Ractor.new(10, 20) do |a, b|
  a + b
end

ractor.take  # => 30

# Named Ractors
r = Ractor.new(name: "worker") do
  compute_result
end

# Communication via send/receive
producer = Ractor.new do
  Ractor.yield("message from producer")
end

consumer = Ractor.new(producer) do |r|
  r.take
end

consumer.take  # => "message from producer"
```

### Ractor Communication

```ruby
# Ractor.yield sends a value, Ractor#receive or Ractor#take receives it
ractor = Ractor.new do
  computation = expensive_task
  Ractor.yield(computation)
end

result = ractor.take

# Send messages to a running Ractor
worker = Ractor.new do
  loop do
    task = Ractor.receive
    break if task == :stop
    result = task * 2
    Ractor.yield(result)
  end
end

worker.send(5)
worker.send(10)
puts worker.take   # => 10
puts worker.take   # => 20
worker.send(:stop)
```

### Ractor Sharing Rules

```ruby
# Shareable objects: integers, floats, true, false, nil, symbols, frozen objects
# Non-shareable: mutable strings, arrays, hashes, procs

# Frozen objects can be shared
FROZEN_CONFIG = { key: "value" }.freeze
r = Ractor.new(FROZEN_CONFIG) do |config|
  puts config[:key]
end
r.take

# Ractor.make_shareable to create shareable objects
shareable_data = Ractor.make_shareable([1, 2, 3])
r = Ractor.new(shareable_data) { |data| data.sum }
r.take  # => 6

# Ractor::Hash for concurrent hash access
shared_hash = Ractor.make_shareable({ counter: 0 })
```

### Parallel Processing with Ractors

```ruby
def parallel_map(array, &block)
  workers = array.map do |element|
    Ractor.new(element) { |elem| block.call(elem) }
  end
  workers.map(&:take)
end

result = parallel_map(1..10) { |n| n ** 2 }
# => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Chunked parallel processing
def parallel_reduce(array, chunk_size: 100, &block)
  chunks = array.each_slice(chunk_size).to_a
  workers = chunks.map do |chunk|
    Ractor.new(chunk) { |c| block.call(c) }
  end
  workers.map(&:take).flatten
end

large_data = (1..1000).to_a
results = parallel_reduce(large_data, chunk_size: 100) { |chunk| chunk.map { |n| n * 2 } }
```

## Fiber

Fibers are lightweight cooperative concurrency primitives. Unlike threads, fibers are not preemptive
-- they explicitly yield control:

### Basic Fiber Usage

```ruby
fiber = Fiber.new do
  puts "Fiber started"
  Fiber.yield(1)
  puts "Fiber resumed"
  Fiber.yield(2)
  puts "Fiber resumed again"
  42
end

fiber.resume   # => 1 (prints "Fiber started")
fiber.resume   # => 2 (prints "Fiber resumed")
fiber.resume   # => 42 (prints "Fiber resumed again")
fiber.resume   # => FiberError: dead fiber called
```

### Fiber as Generators

```ruby
def fibonacci
  Fiber.new do
    a, b = 0, 1
    loop do
      Fiber.yield(a)
      a, b = b, a + b
    end
  end
end

fib = fibonacci
10.times { puts fib.resume }
# => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

### Fiber with Transfer

```ruby
# Fiber#transfer switches to a specific fiber (more control than yield/resume)
ping = Fiber.new do
  loop do
    message = Fiber.yield("ping")
    puts "Ping received: #{message}"
  end
end

pong = Fiber.new do
  loop do
    message = Fiber.yield("pong")
    puts "Pong received: #{message}"
  end
end

puts ping.resume          # => "ping"
puts pong.transfer("hello")  # => "pong", prints "Pong received: hello"
puts ping.transfer("world")  # => "ping", prints "Ping received: world"
```

## Fiber Scheduler (Ruby 3.0+)

The Fiber Scheduler enables non-blocking I/O operations. When a scheduler is active, blocking
operations (like `sleep`, `IO.select`, socket reads) automatically yield control to other fibers:

```ruby
# Example scheduler concept (actual implementations in gems like Async)
scheduler = MyScheduler.new
Fiber.set_scheduler(scheduler)

Fiber.schedule do
  response = HTTP.get("https://example.com")  # non-blocking
  puts response.body
end

Fiber.schedule do
  result = Database.query("SELECT * FROM users")  # non-blocking
  process(result)
end

# Main loop runs until all fibers complete
scheduler.run
```

## Async Gem

The `async` gem provides a high-level API for asynchronous I/O in Ruby:

### Basic Usage

```ruby
require 'async'

Async do |task|
  task.async do
    response = Async::HTTP::Client.get("https://example.com")
    puts response.body
  end

  task.async do
    sleep(1)  # non-blocking
    puts "After 1 second"
  end
end
```

### Concurrent Tasks

```ruby
require 'async'

Async do
  tasks = 5.times.map do |i|
    Async do
      result = fetch_data(i)
      puts "Task #{i}: #{result}"
      result
    end
  end

  results = tasks.map(&:wait)
  puts "All done: #{results}"
end
```

### Async with I/O

```ruby
require 'async'
require 'async/io'

Async do
  endpoints = [
    Async::IO::Endpoint.tcp("example.com", 80),
    Async::IO::Endpoint.tcp("ruby-lang.org", 80),
  ]

  tasks = endpoints.map do |endpoint|
    Async do
      socket = endpoint.connect
      socket.write("GET / HTTP/1.0\r\nHost: #{endpoint.hostname}\r\n\r\n")
      response = socket.read(4096)
      puts "Received #{response.lines.first} from #{endpoint.hostname}"
      socket.close
    end
  end

  tasks.each(&:wait)
end
```

### Semaphore for Limiting Concurrency

```ruby
require 'async'

Async do
  semaphore = Async::Semaphore.new(3)  # max 3 concurrent

  10.times.map do |i|
    Async do
      semaphore.acquire do
        result = fetch_data(i)
        puts "Task #{i}: #{result}"
      end
    end
  end.each(&:wait)
end
```

### Barrier for Synchronisation

```ruby
require 'async'

Async do
  barrier = Async::Barrier.new

  5.times do |i|
    barrier.async do |task|
      sleep(rand(0.1..1.0))
      puts "Worker #{i} done"
    end
  end

  barrier.wait
  puts "All workers completed"
end
```

## Comparison of Concurrency Approaches

| Approach  | Parallelism      | Blocking I/O                | Complexity | Use Case          |
| --------- | ---------------- | --------------------------- | ---------- | ----------------- |
| Thread    | Limited (GIL)    | Releases GIL on I/O         | Medium     | I/O-bound tasks   |
| Ractor    | True parallelism | Full isolation              | High       | CPU-bound tasks   |
| Fiber     | Cooperative      | Non-blocking with scheduler | Medium     | Async I/O         |
| Async gem | Cooperative      | Non-blocking                | Low        | Web servers, APIs |

### When to Use What

```ruby
# Use Threads for: I/O-bound concurrency (network requests, file I/O)
threads = urls.map do |url|
  Thread.new { HTTP.get(url) }
end
results = threads.map(&:value)

# Use Ractors for: CPU-bound parallelism (data processing, computation)
ractors = large_datasets.map do |data|
  Ractor.new(Ractor.make_shareable(data)) { |d| heavy_processing(d) }
end
results = ractors.map(&:take)

# Use Async/Fibers for: high-concurrency I/O (web servers, API clients)
Async do
  requests.each do |req|
    Async { process_request(req) }
  end
end
```

## Thread Safety Best Practices

```ruby
# 1. Minimize shared mutable state
# Bad
class Counter
  def initialize; @count = 0; end
  def increment; @count += 1; end
  def count; @count; end
end

# Good: use thread-safe constructs
class SafeCounter
  def initialize
    @mutex = Mutex.new
    @count = 0
  end

  def increment
    @mutex.synchronize { @count += 1 }
  end

  def count
    @mutex.synchronize { @count }
  end
end

# 2. Prefer immutable data
config = { host: "localhost", port: 8080 }.freeze

# 3. Use thread-safe data structures
queue = Queue.new
shared_array = Concurrent::Array.new  # from concurrent-ruby gem

# 4. Avoid global variables in threaded code
# 5. Be careful with class variables (@@) -- they are shared across threads
# 6. Use Thread.current for thread-local state
```

## concurrent-ruby Gem

The `concurrent-ruby` gem provides thread-safe data structures and abstractions:

```ruby
require 'concurrent'

# Thread-safe array
array = Concurrent::Array.new
array << 1
array << 2

# Thread-safe hash
hash = Concurrent::Hash.new
hash[:key] = "value"

# Atomic references
counter = Concurrent::AtomicFixnum.new(0)
counter.increment
counter.value  # => 1

# Futures: async computation
future = Concurrent::Future.execute do
  expensive_computation
end
result = future.value  # blocks until result is ready

# Promises
promise = Concurrent::Promise.new do
  fetch_data
end.then do |data|
  transform(data)
end.on_success do |result|
  store(result)
end.on_error do |error|
  log_error(error)
end
promise.execute
```
