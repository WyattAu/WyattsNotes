---
title: Concurrency
description:
  'Software Transactional Memory (STM), TVar, atomically, async library, MVar, Chan, forkIO,
  threadDelay, parallel strategies, and async exception handling in Haskell.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Haskell
categories:
  - Haskell
slug: haskell-concurrency
---

## Concurrency vs Parallelism

**Concurrency** means dealing with many things at once -- structuring a program as multiple
independent tasks that may interleave execution. **Parallelism** means doing many things at once --
executing tasks simultaneously on multiple CPU cores.

Haskell excels at both because of its pure functional nature: pure functions have no shared mutable
state, so concurrent execution is inherently safe. The only shared mutable state in Haskell lives in
monadic contexts (like `IORef` or `MVar`), and Haskell provides safe abstractions for managing it.

```haskell
-- Concurrency: interleaved execution
-- Task A: [----]
-- Task B:   [----]

-- Parallelism: simultaneous execution
-- Core 1: [----]
-- Core 2: [----]
```

## forkIO: Lightweight Threads

Haskell's `forkIO` creates extremely lightweight threads managed by the GHC runtime (not OS
threads):

```haskell
import Control.Concurrent (forkIO, threadDelay)

main :: IO ()
main = do
  putStrLn "Starting..."

  _ <- forkIO $ do
    threadDelay 1000000  -- 1 second (in microseconds)
    putStrLn "Thread 1 done"

  _ <- forkIO $ do
    threadDelay 500000   -- 0.5 seconds
    putStrLn "Thread 2 done"

  threadDelay 2000000  -- wait for both threads
  putStrLn "All done"
```

Key properties of Haskell threads:

- **Lightweight**: Each thread consumes only a few kilobytes of stack
- **Cheap to create**: You can spawn millions of threads
- **Scheduled by the GHC runtime**: Not tied to OS threads
- **Can run in parallel**: With the `-threaded` RTS flag and `+RTS -N`

```haskell
-- Compile with threading support
-- ghc -threaded -with-rtsopts=-N4 MyProgram.hs
-- -N4 means use 4 OS threads (one per CPU core)

-- Creating many threads
spawnMany :: Int -> IO ()
spawnMany n = do
  mapM_ (\i -> forkIO (worker i)) [1..n]
  threadDelay 1000000
  where
    worker i = do
      threadDelay 100000
      putStrLn ("Worker " ++ show i)
```

## MVar: Shared Mutable Variables

`MVar` (mutating variable) provides a synchronization primitive -- a location that is either empty
or contains a value:

```haskell
import Control.Concurrent.MVar

-- newEmptyMVar :: IO (MVar a)
-- newMVar :: a -> IO (MVar a)
-- takeMVar :: MVar a -> IO a      -- blocks if empty
-- putMVar :: MVar a -> a -> IO () -- blocks if full
-- tryTakeMVar :: MVar a -> IO (Maybe a)
-- tryPutMVar :: MVar a -> a -> IO Bool

-- Simple counter with MVar
counterExample :: IO ()
counterExample = do
  counter <- newMVar 0

  _ <- forkIO $ do
    forM_ [1..100] $ \_ -> do
      val <- takeMVar counter
      putMVar counter (val + 1)

  _ <- forkIO $ do
    forM_ [1..100] $ \_ -> do
      val <- takeMVar counter
      putMVar counter (val + 1)

  threadDelay 1000000
  result <- readMVar counter
  -- This may NOT be 200 due to interleaving
  -- (takeMVar + putMVar is atomic, but the gap
  -- between them is vulnerable)
  putStrLn ("Counter: " ++ show result)
```

### MVar as a Communication Channel

```haskell
-- Producer-consumer with MVar
channel :: IO ()
channel = do
  mvar <- newEmptyMVar

  -- Producer
  _ <- forkIO $ do
    mapM_ (\x -> putMVar mvar x) [1..10]
    putMVar mvar (-1)  -- sentinel value

  -- Consumer
  go mvar
  where
    go m = do
      val <- takeMVar m
      if val == (-1)
        then putStrLn "Done"
        else do
          putStrLn ("Received: " ++ show val)
          go m
```

### MVar for Locking

```haskell
-- Use MVar () as a mutex (binary semaphore)
type Lock = MVar ()

withLock :: Lock -> IO a -> IO a
withLock lock action = do
  takeMVar lock
  result <- action
  putMVar lock ()
  return result

-- Usage
lockedCounter :: IO ()
lockedCounter = do
  lock <- newMVar ()
  counter <- newMVar 0

  let increment = withLock lock $ do
        val <- takeMVar counter
        putMVar counter (val + 1)

  mapM_ (\_ -> forkIO increment) [1..1000]
  threadDelay 1000000
  result <- readMVar counter
  putStrLn ("Counter: " ++ show result)
```

## Chan: Bounded Channels

`Chan` provides an unbounded FIFO channel for communication between threads:

```haskell
import Control.Concurrent.Chan

-- newChan :: IO (Chan a)
-- writeChan :: Chan a -> a -> IO ()
-- readChan :: Chan a -> IO a       -- blocks if empty
-- dupChan :: Chan a -> IO (Chan a)  -- duplicate for multiple readers

-- Multiple producers, single consumer
workQueue :: IO ()
workQueue = do
  chan <- newChan

  -- Spawn 3 producers
  mapM_ (\i -> forkIO (producer chan i)) [1..3]

  -- Single consumer
  consumer chan

  where
    producer ch i = do
      mapM_ (\j -> writeChan ch (i, j)) [1..5]

    consumer ch = do
      forM_ [1..15] $ \_ -> do
        (i, j) <- readChan ch
        putStrLn ("Got: producer " ++ show i ++ " item " ++ show j)
```

### Broadcast with dupChan

```haskell
-- Broadcast: one producer, multiple consumers
broadcast :: IO ()
broadcast = do
  chan <- newChan

  -- Create duplicate channels for each consumer
  ch1 <- dupChan chan
  ch2 <- dupChan chan

  -- Producer writes to the original
  _ <- forkIO $ mapM_ (writeChan chan) [1..5]

  -- Consumer 1 reads from duplicate 1
  _ <- forkIO $ do
    forM_ [1..5] $ \_ -> do
      val <- readChan ch1
      putStrLn ("Consumer 1: " ++ show val)

  -- Consumer 2 reads from duplicate 2
  _ <- forkIO $ do
    forM_ [1..5] $ \_ -> do
      val <- readChan ch2
      putStrLn ("Consumer 2: " ++ show val)

  threadDelay 1000000
```

## Software Transactional Memory (STM)

STM is Haskell's signature concurrency feature. Instead of locks and condition variables, STM uses
**atomic transactions** that either complete entirely or not at all. This eliminates deadlocks, race
conditions, and livelocks that plague lock-based concurrency.

### TVar: Transactional Variables

`TVar` is a variable that can be read and modified within an STM transaction:

```haskell
import Control.Concurrent.STM

-- newTVarIO :: a -> IO (TVar a)
-- newTVar :: a -> STM (TVar a)
-- readTVar :: TVar a -> STM a
-- writeTVar :: TVar a -> a -> STM ()
-- modifyTVar :: TVar a -> (a -> a) -> STM ()

-- atomically :: STM a -> IO a
-- Executes an STM transaction atomically
```

### Basic STM Example

```haskell
-- Transfer money between two accounts
type Account = TVar Int

transfer :: Account -> Account -> Int -> STM ()
transfer from to amount = do
  fromBal <- readTVar from
  toBal   <- readTVar to
  if fromBal >= amount
    then do
      writeTVar from (fromBal - amount)
      writeTVar to (toBal + amount)
    else retry  -- retry the whole transaction
```

### Why STM Eliminates Deadlocks

In lock-based programming, acquiring locks in different orders causes deadlocks. STM transactions
are automatically retried when variables change:

```haskell
-- Lock-based approach (CAN deadlock):
-- Thread 1: lock(A); lock(B)
-- Thread 2: lock(B); lock(A)
-- If both threads hold one lock and wait for the other => deadlock

-- STM approach (NEVER deadlocks):
-- Thread 1: atomically $ do readTVar a; readTVar b; ...
-- Thread 2: atomically $ do readTVar b; readTVar a; ...
-- Both transactions see consistent snapshots
-- No ordering issues possible

twoAccountTransfer :: Account -> Account -> Account -> Int -> STM ()
twoAccountTransfer a b c amount = do
  balA <- readTVar a
  balB <- readTVar b
  balC <- readTVar c
  if balA >= amount && balB >= amount
    then do
      writeTVar a (balA - amount)
      writeTVar b (balB - amount)
      writeTVar c (balC + amount + amount)
    else retry
```

### retry and orElse

`retry` blocks the transaction and retries when any read TVar changes. `orElse` provides an
alternative if the first transaction retries:

```haskell
import Control.Concurrent.STM

-- retry: block until at least one read TVar changes
withdraw :: Account -> Int -> STM ()
withdraw acc amount = do
  bal <- readTVar acc
  if bal >= amount
    then writeTVar acc (bal - amount)
    else retry  -- wait until balance changes (deposit?)

-- orElse: try first action, if it retries, try the second
withdrawEither :: Account -> Account -> Int -> STM ()
withdrawEither acc1 acc2 amount = do
  withdraw acc1 amount
  `orElse`
  withdraw acc2 amount
  -- Tries to withdraw from acc1; if that retries (insufficient funds),
  -- tries acc2 instead; if that also retries, waits for either account
  -- to change
```

### STM for Concurrent Data Structures

```haskell
-- A thread-safe queue using STM
data TQueue a = TQueue (TVar [a]) (TVar [a])

newTQueue :: STM (TQueue a)
newTQueue = do
  readEnd  <- newTVar []
  writeEnd <- newTVar []
  return (TQueue readEnd writeEnd)

writeTQueue :: TQueue a -> a -> STM ()
writeTQueue (TQueue _ writeEnd) x = do
  xs <- readTVar writeEnd
  writeTVar writeEnd (x : xs)

readTQueue :: TQueue a -> STM a
readTQueue (TQueue readEnd writeEnd) = do
  xs <- readTVar readEnd
  case xs of
    [] -> do
      -- Move elements from write end to read end
      ys <- readTVar writeEnd
      case ys of
        [] -> retry
        _  -> do
          writeTVar writeEnd []
          writeTVar readEnd (reverse ys)
          readTQueue (TQueue readEnd writeEnd)
    (x:rest) -> do
      writeTVar readEnd rest
      return x
```

### STM Guidelines

1. **Keep transactions short**: Long transactions increase contention and retry overhead
2. **Only use side effects outside STM**: The `STM` monad must be pure (no IO inside)
3. **Use `retry` instead of polling**: Let the runtime wake the transaction when data changes
4. **Prefer `STM` over `MVar` for complex coordination**: STM composes better than locks
5. **Avoid `unsafeIOToSTM`**: It breaks the guarantees that STM provides

## The async Library

The `async` package provides a higher-level interface for concurrent programming:

```haskell
import Control.Concurrent.Async

-- async :: IO a -> IO (Async a)
-- Launch a computation asynchronously, returning a handle

-- wait :: Async a -> IO a
-- Wait for the async to complete and return its result

-- waitCatch :: Async a -> IO (Either SomeException a)
-- Wait and catch any exceptions

-- race :: IO a -> IO b -> IO (Either a b)
-- Run two IO actions concurrently, return the first to finish

-- concurrently :: IO a -> IO b -> IO (a, b)
-- Run two IO actions concurrently, return both results
```

### Basic async Usage

```haskell
-- Fetch multiple URLs concurrently
fetchUrls :: [String] -> IO [String]
fetchUrls urls = do
  results <- mapConcurrently fetchUrl urls
  return results

fetchUrl :: String -> IO String
fetchUrl url = do
  putStrLn ("Fetching: " ++ url)
  threadDelay 500000  -- simulate network delay
  return ("Response from " ++ url)

-- mapConcurrently: parallel map with bounded concurrency
-- mapConcurrently_ :: (a -> IO b) -> [a] -> IO ()
-- Runs the IO action for each element, up to N at a time (based on RTS -N)
```

### Race Conditions

```haskell
-- race: return the result of whichever action finishes first
import Control.Concurrent.Async (race)

main :: IO ()
main = do
  result <- race
    (do threadDelay 1000000; return "slow")
    (do threadDelay 500000; return "fast")
  case result of
    Left val  -> putStrLn ("Left finished first: " ++ val)
    Right val -> putStrLn ("Right finished first: " ++ val)
  -- Output: Left finished first: fast
```

### concurrently: Wait for Both

```haskell
-- concurrently runs two IO actions in parallel and waits for both
import Control.Concurrent.Async (concurrently)

main :: IO ()
main = do
  (a, b) <- concurrently
    (do threadDelay 500000; putStrLn "Task A done"; return 1)
    (do threadDelay 300000; putStrLn "Task B done"; return 2)
  putStrLn ("Results: " ++ show a ++ ", " ++ show b)
  -- Task B done, Task A done, Results: 1, 2
```

### mapConcurrently and mapConcurrently\_

```haskell
import Control.Concurrent.Async (mapConcurrently)

-- Process items in parallel
processItems :: [Item] -> IO [Result]
processItems = mapConcurrently processItem

-- If you only need side effects (no return values)
-- Use mapConcurrently_
printItems :: [String] -> IO ()
printItems = mapConcurrently_ (\s -> do
  threadDelay 100000
  putStrLn s
  )
```

## Async Exceptions

Haskell supports asynchronous exceptions that can be thrown to a thread from another thread:

```haskell
import Control.Exception (bracket, finally, onException)
import Control.Concurrent (ThreadKilled, throwTo, myThreadId)

-- throwTo :: ThreadId -> SomeException -> IO ()
-- Throws an exception to another thread

-- Common use: timeout
-- timeout :: Int -> IO a -> IO (Maybe a)
-- Runs the IO action; if it takes longer than n microseconds,
-- throws ThreadKilled and returns Nothing
```

### The Bracket Pattern

`bracket` ensures cleanup actions run even if an exception occurs:

```haskell
-- bracket :: IO a -> (a -> IO b) -> (a -> IO c) -> IO c
-- bracket acquire cleanup action
-- 1. Runs acquire
-- 2. Runs action (the main computation)
-- 3. Runs cleanup (whether action succeeded or threw an exception)

withFile' :: FilePath -> (Handle -> IO a) -> IO a
withFile' path action = do
  handle <- openFile path ReadMode
  result <- action handle
  hClose handle
  return result
  -- BUG: if action throws an exception, hClose is never called

-- Correct with bracket:
withFileSafe :: FilePath -> (Handle -> IO a) -> IO a
withFileSafe path action =
  bracket
    (openFile path ReadMode)
    hClose
    action

-- Timeout a computation
fetchWithTimeout :: Int -> String -> IO (Maybe String)
fetchWithTimeout timeoutMs url = timeout (timeoutMs * 1000) (fetchUrl url)
```

### Masking Async Exceptions

```haskell
import Control.Exception (mask, mask_, uninterruptibleMask)

-- mask :: ((forall a. IO a -> IO a) -> IO b) -> IO b
-- Disables async exceptions for the duration of the inner action
-- except during unmask

-- mask_ :: IO a -> IO a
-- Completely masks async exceptions

-- uninterruptibleMask :: ((forall a. IO a -> IO a) -> IO b) -> IO b
-- Cannot be interrupted at all (even during unmask)

safeUpdate :: MVar Int -> (Int -> IO Int) -> IO Int
safeUpdate mvar f = mask $ \restore -> do
  val <- takeMVar mvar
  result <- restore (f val) `onException` putMVar mvar val
  putMVar mvar (result)
  return result
```

## Parallel Strategies

The `parallel` package (specifically `Control.Parallel.Strategies`) provides deterministic
parallelism using strategies:

```haskell
import Control.Parallel.Strategies

-- rseq :: Strategy a
-- Evaluate to weak head normal form (immediate, cheap)

-- rpar :: Strategy a
-- Start evaluating in parallel (spark a new thread)

-- using :: a -> Strategy a -> a
-- Apply a strategy to a value
```

### Basic Parallelism

```haskell
-- Evaluate a pair in parallel
parallelPair :: (Int, Int)
parallelPair = runEval $ do
  a <- rpar (fib 35)
  b <- rpar (fib 36)
  return (a, b)

-- using combinator
parallelSum :: [Int] -> Int
parallelSum xs = sum xs `using` parList rseq
-- parList rseq sparks each element evaluation

-- parMap: parallel version of map
parallelMap :: (a -> b) -> [a] -> [b]
parallelMap f xs = map f xs `using` parList rseq
```

### par and pseq

```haskell
import Control.Parallel

-- par :: a -> b -> b
-- "Spark" the evaluation of the first argument,
-- then return the second argument

-- pseq :: a -> b -> b
-- Evaluate the first argument to WHNF,
-- then return the second

-- Parallel fibonacci
fib :: Int -> Integer
fib 0 = 0
fib 1 = 1
fib n =
  let x = fib (n - 1)
      y = fib (n - 2)
  in x `par` (y `pseq` x + y)
-- x is sparked for parallel evaluation
-- y is evaluated before the addition
-- Both branches may run on different cores
```

### Strategies for Common Patterns

```haskell
import Control.Parallel.Strategies

-- Parallel map
parallelMap :: (a -> b) -> [a] -> [b]
parallelMap f xs = map f xs `using` parList rseq

-- Parallel fold (after parallel map)
parallelFoldMap :: (a -> b) -> (b -> b -> b) -> b -> [a] -> b
parallelFoldMap f g z xs =
  foldl g z (map f xs) `using` parList rseq

-- Parallel traversal of a tree
parTree :: Tree a -> Tree a
parTree (Leaf x)   = Leaf x
parTree (Branch l r) = l' `par` r' `pseq` Branch l' r'
  where
    l' = parTree l
    r' = parTree r

-- Evaluating a list of independent computations
results :: [Int]
results = map slowComputation [1..8] `using` parList rdeepseq
-- rdeepseq evaluates to normal form (fully)
```

## Choosing Between Concurrency Primitives

| Mechanism    | Best For                    | Trade-offs                         |
| ------------ | --------------------------- | ---------------------------------- |
| `forkIO`     | Fire-and-forget tasks       | No built-in result collection      |
| `MVar`       | Simple shared state         | Manual locking required            |
| `Chan`       | Message passing             | Unbounded (may grow without limit) |
| `STM`        | Complex coordination        | Slight overhead per transaction    |
| `async`      | High-level concurrent tasks | Higher-level abstraction           |
| `Strategies` | Data parallelism            | Deterministic, no side effects     |

## Compiling for Parallelism

```bash
# Enable threading and parallel GC
ghc -O2 -threaded -rtsopts -with-rtsopts=-N MyProgram.hs

# -N: use all available cores
# -N4: use exactly 4 cores
# -N2: use exactly 2 cores

# Monitor with +RTS flags
./MyProgram +RTS -s          -- print GC and memory stats
./MyProgram +RTS -t           -- thread info
./MyProgram +RTS -h           -- heap profile
```

## Best Practices

1. **Prefer STM over locks**: Composable, no deadlocks, automatic retry
2. **Use `async` for structured concurrency**: `race`, `concurrently`, `mapConcurrently`
3. **Use `bracket` for resource cleanup**: Ensures cleanup even with exceptions
4. **Keep transactions short**: Minimize the work inside `atomically`
5. **Avoid `unsafePerformIO` and `unsafeIOToSTM`**: They break Haskell's guarantees
6. **Use `-threaded` and `-N` for parallelism**: Without these flags, everything runs
   single-threaded
7. **Profile before optimizing**: Use `+RTS -s` and ThreadScope to identify bottlenecks
8. **Prefer pure parallelism with strategies**: When you do not need side effects
