# Big-O & Complexity — Read This First

There's no code exercise here — just the vocabulary you need before the rest of
this repo makes sense. Interviewers almost always ask "what's the time/space
complexity?" after you solve something, so being fluent here matters as much
as solving the problem.

## What Big-O actually answers

"If the input grows, how much more work / memory does this need?" It ignores
constants and lower-order terms because those stop mattering at scale. `O(2n)`
and `O(n + 100)` are both just `O(n)`.

## The complexities you'll actually see, fastest to slowest

| Notation | Name | Example |
|---|---|---|
| `O(1)` | Constant | array index access, hash map get/set, push/pop on end of array |
| `O(log n)` | Logarithmic | binary search, balanced BST lookup |
| `O(n)` | Linear | single loop over an array, `Array.map/filter/find` |
| `O(n log n)` | Linearithmic | efficient sorting (merge sort, `Array.prototype.sort`) |
| `O(n²)` | Quadratic | nested loop over the same collection, naive duplicate-finding |
| `O(2ⁿ)` | Exponential | naive recursive Fibonacci, brute-force subsets |
| `O(n!)` | Factorial | brute-force permutations |

## How to estimate it in an interview

1. **Count the loops.** One pass over `n` items → `O(n)`. A loop inside a loop
   over the same input → `O(n²)`, unless the inner loop shrinks (see below).
2. **Recursion → count branches × depth.** Fibonacci-style recursion with 2
   recursive calls per level and depth `n` is `O(2ⁿ)`. Divide-and-conquer that
   halves the input each time (binary search, merge sort) is `O(log n)` or
   `O(n log n)`.
3. **Data structure operations aren't free.** `array.includes()` is `O(n)`.
   `set.has()` / `map.get()` is `O(1)` average. `array.unshift()` is `O(n)`
   (it has to shift every element). This is the single most common trap in
   "optimize this" follow-ups.
4. **Space complexity counts extra memory, not input.** A hash map you build
   to avoid nested loops costs `O(n)` space — that's usually a trade you
   want to name explicitly ("I can trade space for time here by...").

## Frontend-relevant gotchas

- `array.indexOf`, `.includes`, `.find` are all `O(n)`. Doing one inside a
  loop over another array silently creates `O(n²)` — a classic cause of a
  laggy filter/search UI over a large list.
- React re-rendering a list of `n` items is `O(n)` per render; missing/duplicate
  `key`s can make reconciliation degrade because React can't cheaply diff.
- Debounce/throttle (see [frontend-challenges/debounce-throttle](../../frontend-challenges/debounce-throttle))
  don't change Big-O, they change *how often* the O(work) runs — a real-world
  performance lever separate from algorithmic complexity.
- Memoization (`useMemo`, `React.memo`, or a hand-rolled cache — see
  [dynamic-programming](../09-dynamic-programming)) is literally the DP idea
  of "don't recompute what you've already computed," applied to renders.

## How to talk about it out loud

Say the shape, not just the letter: *"This is O(n) because we do one pass
building a hash map, then O(1) lookups for each of the n elements, so O(n)
total time and O(n) extra space for the map."* Naming the trade-off (time vs.
space) reads as more senior than just stating the final letter.
