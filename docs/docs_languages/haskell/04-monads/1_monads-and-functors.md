---
title: Monads and Functors
description:
  'Maybe, Either, IO, State, Reader, Writer monads, monad transformers, Alternative, MonadPlus,
  Kleisli composition, and monad laws.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Haskell
categories:
  - Haskell
slug: haskell-monads-and-functors
---

## The Monad Concept

A monad is a design pattern for structuring computations. In Haskell, a monad wraps a value in a
computational context that defines how operations chain together. Each monad provides its own rules
for sequencing and combining computations.

Formally, a monad is any type that implements:

```haskell
class Applicative m => Monad m where
  return :: a -> m a
  (>>=)  :: m a -> (a -> m b) -> m b
  (>>)   :: m a -> m b -> m b
```

The three monad laws ensure predictable behavior:

1. **Left identity**: `return x >>= f` is the same as `f x`
2. **Right identity**: `m >>= return` is the same as `m`
3. **Associativity**: `(m >>= f) >>= g` is the same as `m >>= (\x -> f x >>= g)`

## Maybe Monad

The `Maybe` monad represents computations that might fail. `Nothing` represents failure, and
`Just a` wraps a successful result. The bind operator `>>=` short-circuits on `Nothing`:

```haskell
-- Database lookup style chain
data User = User { userId :: Int, userName :: String }
  deriving (Show)

users :: [(Int, User)]
users = [(1, User 1 "Alice"), (2, User 2 "Bob")]

orders :: [(Int, String)]
orders = [(1, "Book"), (2, "Laptop")]

lookupUser :: Int -> Maybe User
lookupUser n = lookup n users

lookupOrder :: String -> Maybe String
lookupOrder n = lookup n orders

-- Chaining Maybe computations with >>=
getUserOrder :: Int -> Maybe String
getUserOrder userId' = do
  user <- lookupUser userId'
  order <- lookupOrder (userName user)
  return order

-- If lookupUser returns Nothing, the whole chain returns Nothing
-- If lookupOrder returns Nothing, the whole chain returns Nothing
-- Both must succeed to produce a result
```

### Practical Maybe Patterns

```haskell
-- Safe head
safeHead :: [a] -> Maybe a
safeHead []     = Nothing
safeHead (x:_)  = Just x

-- Chain of safe operations
processList :: [Int] -> Maybe Int
processList xs = do
  first  <- safeHead xs
  second <- safeHead (drop 1 xs)
  return (first + second)

-- Using Maybe in validation pipelines
validateAge :: Int -> Maybe Int
validateAge n
  | n >= 0 && n <= 150 = Just n
  | otherwise = Nothing

validateName :: String -> Maybe String
validateName s
  | length s >= 1 = Just s
  | otherwise = Nothing

createProfile :: String -> Int -> Maybe (String, Int)
createProfile name age = do
  validName <- validateName name
  validAge  <- validateAge age
  return (validName, validAge)
```

## Either Monad

`Either e a` represents a value that is either `Left e` (an error of type `e`) or `Right a` (a
successful result). Unlike `Maybe`, it carries information about what went wrong:

```haskell
-- Using Either for detailed error reporting
data ParseError = UnexpectedChar Char
                | UnexpectedEOF
                | InvalidNumber String
  deriving (Show)

parseDigit :: Char -> Either ParseError Int
parseDigit c
  | c >= '0' && c <= '9' = Right (ord c - ord '0')
  | otherwise = Left (UnexpectedChar c)

parseNumber :: String -> Either ParseError Int
parseNumber []     = Left UnexpectedEOF
parseNumber (c:cs) = do
  d <- parseDigit c
  return d

-- Either monad: Left short-circuits, Right continues
multiStep :: Either String Int
multiStep = do
  a <- Right 10
  b <- Left "step 2 failed"
  c <- Right 30
  return (a + b + c)
-- => Left "step 2 failed"
```

### Either vs Maybe

```haskell
-- Maybe: no information about failure
safeDiv :: Int -> Int -> Maybe Int
safeDiv _ 0 = Nothing
safeDiv x y = Just (x `div` y)

-- Either: detailed error information
safeDiv :: Int -> Int -> Either String Int
safeDiv _ 0 = Left "division by zero"
safeDiv x y = Right (x `div` y)

-- Choose Maybe when you just need success/failure
-- Choose Either when you need to report what went wrong
```

## IO Monad

The `IO` monad performs side effects while maintaining referential transparency. An `IO a` action
describes a computation that, when executed, produces a value of type `a` while potentially
interacting with the outside world.

```haskell
-- Basic IO operations
main :: IO ()
main = do
  -- putStrLn :: String -> IO ()
  putStrLn "Enter a number:"
  -- getLine :: IO String
  line <- getLine
  -- read :: Read a => String -> a
  let n = read line :: Int
  -- print :: Show a => a -> IO ()
  print (n * n)

-- IO is lazy: actions are not executed until main runs
-- An IO action is just a description of what to do
describe :: IO ()
describe = putStrLn "This does nothing until executed in main"
```

### IO Refs for Local Mutable State

When you truly need mutable state, `IORef` provides it within the `IO` monad:

```haskell
import Data.IORef

counterExample :: IO Int
counterExample = do
  counter <- newIORef 0
  modifyIORef counter (+1)
  modifyIORef counter (+1)
  modifyIORef counter (+1)
  readIORef counter
-- => 3

-- atomicModifyIORef combines read-modify-write atomically
incrementAndReturn :: IORef Int -> IO Int
incrementAndReturn ref = atomicModifyIORef ref (\n -> (n + 1, n))
-- Returns the OLD value while incrementing
```

## State Monad

The `State` monad threads state through a computation without explicit state passing. The type
`State s a` represents a computation that takes a state of type `s` and produces a result of type
`a` along with an updated state.

```haskell
import Control.Monad.State

-- State s a = s -> (a, s)

type Stack = [Int]

-- Push: add element to top of stack
push :: Int -> State Stack ()
push x = modify (x:)

-- Pop: remove and return top element
pop :: State Stack Int
pop = do
  stack <- get
  case stack of
    []     -> error "stack underflow"
    (x:xs) -> put xs >> return x

-- peek: look at top element without removing it
peek :: State Stack Int
peek = gets head

-- Composing State operations
stackManip :: State Stack Int
stackManip = do
  push 3
  push 5
  a <- pop
  push 7
  b <- pop
  return (a + b)

-- Running the State computation
runStack :: (Int, Stack)
runStack = runState stackManip [1, 2]
-- => (12, [1, 2, 3, 7])

-- runState: returns (result, finalState)
-- evalState: returns only the result
-- execState: returns only the final state
```

### State Monad Internals

```haskell
-- The State monad is simply a newtype over a function
newtype State s a = State { runState :: s -> (a, s) }

instance Functor (State s) where
  fmap f (State g) = State $ \s ->
    let (a, s') = g s
    in (f a, s')

instance Applicative (State s) where
  pure a = State $ \s -> (a, s)
  State f <*> State g = State $ \s ->
    let (h, s')  = f s
        (a, s'') = g s'
    in (h a, s'')

instance Monad (State s) where
  return = pure
  State f >>= g = State $ \s ->
    let (a, s') = f s
    in runState (g a) s'
```

### Practical State Usage

```haskell
-- Word counting with State
type WordMap = [(String, Int)]

addWord :: String -> State WordMap ()
addWord word = modify (insertWord word)
  where
    insertWord w []                    = [(w, 1)]
    insertWord w ((k, c):rest)
      | w == k    = (k, c + 1) : rest
      | otherwise = (k, c) : insertWord w rest

countWords :: String -> WordMap
countWords = execState (mapM_ addWord (words text)) []

-- Game loop with State
type GameState = (Int, Int)  -- (playerX, playerY)

move :: String -> State GameState ()
move "left"  = modify (\(x, y) -> (x - 1, y))
move "right" = modify (\(x, y) -> (x + 1, y))
move "up"    = modify (\(x, y) -> (x, y + 1))
move "down"  = modify (\(x, y) -> (x, y - 1))
move _       = return ()

runMoves :: [String] -> GameState
runMoves = execState (mapM_ move) (0, 0)
```

## Reader Monad

The `Reader` monad provides access to a shared read-only environment. It is useful for
configuration, dependency injection, and computations that need access to a common context:

```haskell
import Control.Monad.Reader

-- Reader r a = r -> a

-- Configuration type
type AppConfig = String  -- database connection string

-- ask retrieves the environment
getDbConfig :: Reader AppConfig String
getDbConfig = ask

-- local runs a computation with a modified environment
withConfig :: Reader AppConfig a -> String -> Reader AppConfig a
withConfig = local . const

-- Practical example: web application context
type App = Reader AppEnv

data AppEnv = AppEnv
  { envDbConn :: String
  , envLogger :: String -> IO ()
  , envPort   :: Int
  }

handleRequest :: String -> App String
handleRequest path = do
  env <- ask
  -- can access envDbConn, envLogger, envPort
  return ("Handling: " ++ path)

runApp :: AppEnv -> App a -> a
runApp = runReader
```

### Reader Combinators

```haskell
-- Combining Reader computations
combined :: Reader Int Int
combined = do
  env1 <- ask
  env2 <- local (+10) ask
  env3 <- local (*2) ask
  return (env1 + env2 + env3)

-- runReader combined 5 => 5 + 15 + 10 = 30
```

## Writer Monad

The `Writer` monad accumulates a log or auxiliary output alongside a computation result:

```haskell
import Control.Monad.Writer
import Data.Monoid (Sum(..))

-- Writer w a = (a, w)

-- A computation that logs its steps
factorialLog :: Integer -> Writer [String] Integer
factorialLog 0 = do
  tell ["Base case: 0! = 1"]
  return 1
factorialLog n = do
  tell ["Computing " ++ show n ++ "!"]
  prev <- factorialLog (n - 1)
  let result = n * prev
  tell [show n ++ "! = " ++ show result]
  return result

-- Running the Writer
runFactorial :: (Integer, [String])
runFactorial = runWriter (factorialLog 5)
-- => (120, ["Computing 5!", "Computing 4!", ..., "Base case: 0! = 1"])
```

### Writer with Different Monoids

```haskell
-- Sum monoid: accumulates numbers
sumWriter :: Writer (Sum Int) ()
sumWriter = do
  tell (Sum 10)
  tell (Sum 20)
  tell (Sum 30)

runSum :: Sum Int
runSum = execWriter sumWriter  -- => Sum 30

-- Product monoid: accumulates products
productWriter :: Writer (Product Int) ()
productWriter = do
  tell (Product 2)
  tell (Product 3)
  tell (Product 4)

runProduct :: Product Int
runProduct = execWriter productWriter  -- => Product 24
```

## Monad Transformers

### Why Transformers?

Different monads solve different problems: `Maybe` handles failure, `State` handles mutable state,
`Reader` handles shared environment, `IO` handles side effects. Real applications often need
multiple effects simultaneously. Monad transformers **stack** monads to combine their capabilities.

### MaybeT

`MaybeT m a` wraps a computation in monad `m` that may fail:

```haskell
import Control.Monad.Trans.Maybe
import Control.Monad.Trans.Class (lift)

-- MaybeT IO Int: an IO computation that may fail
lookupUserInDb :: String -> MaybeT IO User
lookupUserInDb name = MaybeT $ do
  -- Perform IO to check the database
  result <- dbQuery ("SELECT * FROM users WHERE name = " ++ name)
  return (parseUser result)

getUserOrders :: String -> MaybeT IO [Order]
getUserOrders userName = do
  user <- lookupUserInDb userName
  orders <- MaybeT (fetchOrders (userId user))
  return orders

-- Running MaybeT
handleUsers :: IO ()
handleUsers = do
  result <- runMaybeT (getUserOrders "Alice")
  case result of
    Nothing    -> putStrLn "User not found or no orders"
    Just ords  -> print ords
```

### StateT

`StateT s m a` adds state to any underlying monad:

```haskell
import Control.Monad.Trans.State

-- StateT Int IO () combines State Int with IO
gameLoop :: StateT Int IO ()
gameLoop = do
  score <- get
  lift (putStrLn ("Current score: " ++ show score))
  lift (putStrLn "Enter a number:")
  input <- lift getLine
  let n = read input :: Int
  modify (+ n)
  score' <- get
  lift (putStrLn ("New score: " ++ show score'))
  when (score' >= 100) (lift (putStrLn "You win!"))

runGame :: IO ()
runGame = evalStateT gameLoop 0
```

### ExceptT

`ExceptT e m a` is the transformer version of `Either e`:

```haskell
import Control.Monad.Trans.Except

type AppM = ExceptT String IO

validateUser :: String -> AppM User
validateUser name
  | null name     = throwError "Name cannot be empty"
  | length name > 50 = throwError "Name too long"
  | otherwise      = lift (fetchUser name)

createAccount :: String -> Int -> AppM Account
createAccount name age = do
  user <- validateUser name
  when (age < 18) (throwError "Must be 18 or older")
  lift (saveAccount user age)

-- Running ExceptT
runAppM :: AppM a -> IO (Either String a)
runAppM = runExceptT

main :: IO ()
main = do
  result <- runAppM (createAccount "" 25)
  case result of
    Left err  -> putStrLn ("Error: " ++ err)
    Right acc -> print acc
```

## Alternative and MonadPlus

### Alternative

`Alternative` provides a choice operation for Applicative functors:

```haskell
class Applicative f => Alternative f where
  empty :: f a
  (<|>) :: f a -> f a -> f a

-- Maybe
Nothing <|> Just 5  -- => Just 5
Just 3  <|> Just 5  -- => Just 3
Nothing <|> Nothing  -- => Nothing

-- List
[] <|> [1, 2]      -- => [1, 2]
[1] <|> [2]         -- => [1]
[1] <|> [2, 3]      -- => [1, 2, 3]

-- guard: short-circuits with empty
guard :: Alternative f => Bool -> f ()
guard True  = pure ()
guard False = empty

-- Using guard in list comprehensions
evens = do
  x <- [1..10]
  guard (even x)
  return x
-- => [2, 4, 6, 8, 10]
```

### MonadPlus

`MonadPlus` provides the same operations for Monads:

```haskell
class Monad m => MonadPlus m where
  mzero :: m a
  mplus :: m a -> m a -> m a

-- The relationship: MonadPlus m implies Alternative m
-- mzero = empty, mplus = (<|>)

-- Using msum: find the first successful computation
lookup1 :: k -> Map k v -> Maybe v
lookup2 :: k -> Map k v -> Maybe v

findValue :: k -> Maybe v
findValue k = msum [lookup1 k map1, lookup2 k map2]
```

## Kleisli Composition

Kleisli composition (`<=<` and `>=>`) composes monadic functions:

```haskell
-- Kleisli arrow: a -> m b
-- (>=>) :: Monad m => (a -> m b) -> (b -> m c) -> (a -> m c)
-- (<=<) :: Monad m => (b -> m c) -> (a -> m b) -> (a -> m c)

import Control.Monad ( (>=>), (<=<) )

-- Composition of monadic functions
safeDiv :: Int -> Int -> Maybe Int
safeDiv _ 0 = Nothing
safeDiv x y = Just (x `div` y)

half :: Int -> Maybe Int
half x = safeDiv x 2

compute :: Int -> Maybe Int
compute = half >=> half >=> half
-- compute 16 => Just 2 (16 / 2 / 2 / 2)
-- compute 7  => Nothing (7 / 2 = Nothing)

-- Pipe style with >=> pipeline
process :: Int -> Maybe Int
process = validateAge >=> \age -> computeDiscount age >=> applyDiscount
```

## Join and Bind

`join` and `>>=` are fundamental operations that can each be expressed in terms of the other:

```haskell
-- join :: Monad m => m (m a) -> m a
-- Flattens one layer of the monad

join :: Monad m => m (m a) -> m a
join mmx = mmx >>= id

-- bind in terms of join
-- m >>= f = join (fmap f m)

-- Examples with Maybe
join (Just (Just 5))    -- => Just 5
join (Just Nothing)      -- => Nothing
join Nothing            -- => Nothing

-- Examples with List
join [[1, 2], [3, 4]]  -- => [1, 2, 3, 4]
join [[], [1, 2]]       -- => [1, 2]
join []                  -- => []

-- Examples with IO
join (getLine >>= \x -> return (print x))
-- Reads a line, then prints it
```

## Monad Laws

Understanding the monad laws ensures that monadic code behaves predictably:

```haskell
-- Law 1: Left Identity
-- return x >>= f  ==  f x
leftIdentity :: Maybe Int
leftIdentity = do
  let f x = Just (x + 1)
  result1 = return 5 >>= f  -- Just 6
  result2 = f 5              -- Just 6
  -- result1 == result2

-- Law 2: Right Identity
-- m >>= return  ==  m
rightIdentity :: Maybe Int
rightIdentity = do
  let m = Just 5
  result1 = m >>= return  -- Just 5
  result2 = m              -- Just 5

-- Law 3: Associativity
-- (m >>= f) >>= g  ==  m >>= (\x -> f x >>= g)
associativity :: Maybe Int
associativity = do
  let m = Just 5
      f x = Just (x + 1)
      g x = Just (x * 2)
  result1 = (m >>= f) >>= g          -- Just 12
  result2 = m >>= (\x -> f x >>= g) -- Just 12
```

## Choosing the Right Monad

| Monad      | Use Case        | When to Use                                |
| ---------- | --------------- | ------------------------------------------ |
| `Maybe`    | Optional values | Computations that may fail with no details |
| `Either e` | Error handling  | Computations that fail with error messages |
| `IO`       | Side effects    | Any interaction with the outside world     |
| `State s`  | Mutable state   | Thread state through pure computations     |
| `Reader r` | Shared config   | Read-only environment passed implicitly    |
| `Writer w` | Logging         | Accumulate log messages alongside results  |
| `[]`       | Non-determinism | Multiple possible results                  |
| `Identity` | No effect       | The simplest monad, wraps a plain value    |

## Combining Effects

In practice, applications combine multiple monad transformers:

```haskell
import Control.Monad.Reader
import Control.Monad.State
import Control.Monad.Except
import Control.Monad.Trans.Class (lift)

-- Application monad stack
type AppM = ReaderT Config (StateT AppState (ExceptT AppError IO))

-- In this stack (from outside in):
-- ReaderT Config: read-only configuration
-- StateT AppState: mutable application state
-- ExceptT AppError: error handling
-- IO: actual side effects

runApp :: Config -> AppState -> AppM a -> IO (Either AppError a)
runApp config state action =
  runExceptT (evalStateT (runReaderT action config) state)
```
