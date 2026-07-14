# Hints: Climbing Stairs

## Hint 1 — Find the recurrence first
To reach step `n`, your very last move was either a 1-step from step
`n-1`, or a 2-step from step `n-2`. So the number of ways to reach step `n`
is the *sum* of the ways to reach `n-1` and the ways to reach `n-2`:
`ways(n) = ways(n-1) + ways(n-2)`. That's the whole problem — everything
else is implementation.

## Hint 2 — Base cases
`ways(1) = 1` (only one way: a single 1-step). `ways(2) = 2` (1+1, or 2).
Notice this is exactly the Fibonacci sequence shifted by one.

## Hint 3 — Naive recursion is exponential — why?
A direct recursive translation of the recurrence recomputes `ways(n-2)`
many times (once as part of computing `ways(n-1)`, and again directly) —
the same subproblem gets solved over and over. This is O(2^n) and will time
out for n anywhere near 45.

## Hint 4 — Two ways to fix it (both are "the DP idea")
- **Memoization (top-down)**: keep the same recursive structure, but cache
  each `ways(k)` the first time you compute it (e.g. in a `Map` or array),
  and return the cached value on repeat calls.
- **Tabulation (bottom-up)**: build the answer iteratively from the base
  cases upward, using two variables to hold `ways(k-1)` and `ways(k-2)` as
  you go — no recursion, no cache needed, O(1) space.

## Hint 5 — This is directly analogous to React memoization
Caching `ways(k)` so you don't recompute it is the exact same idea as
`useMemo` caching an expensive computation's result so it isn't redone on
every render unless its dependencies changed. "Don't redo work you've
already done" is the throughline connecting DP to a lot of frontend
performance work.

## Complexity target
Time: O(n) with memoization or tabulation (vs. O(2^n) naive).
Space: O(n) memoized (call stack + cache), or O(1) with the bottom-up
two-variable version.
