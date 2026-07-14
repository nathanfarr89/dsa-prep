# Hints: Subsets (Power Set)

## Hint 1 — The core idea of backtracking
Backtracking explores a decision tree: at each step you **choose** an
option, **recurse** into the consequences of that choice, then **un-choose**
it (undo) before trying the next option. That "undo" step is what lets you
reuse the same mutable array across all branches instead of copying it
every time.

## Hint 2 — What's the decision at each step, here?
Think of it index by index through `nums`. At index `i`, you have exactly
two choices: include `nums[i]` in the current subset, or don't. Explore
both. When you've made a decision for every index, the current partial
subset is complete — record a *copy* of it.

## Hint 3 — Skeleton
```
function backtrack(index, currentSubset):
  if index === nums.length:
    result.push([...currentSubset])   // copy! not a reference
    return
  // choice 1: exclude nums[index]
  backtrack(index + 1, currentSubset)
  // choice 2: include nums[index]
  currentSubset.push(nums[index])
  backtrack(index + 1, currentSubset)
  currentSubset.pop()                 // undo the choice before returning
```

## Hint 4 — Why copy with `[...currentSubset]`?
`currentSubset` is a single shared array being mutated throughout the
recursion. If you pushed the *reference* into `result`, every entry in
`result` would end up pointing to the same array, and by the time
recursion finished it would show whatever the array looked like last (or
even be empty). You need a snapshot at the moment each subset is "final."

## Hint 5 — An alternative framing (iterative, no recursion)
Start with `result = [[]]`. For each number in `nums`, take every existing
subset in `result` and add a new copy of it with the current number
appended. This builds the power set iteratively and avoids recursion
entirely — a nice thing to offer as a second approach.

## Complexity target
Time: O(n * 2^n) — there are 2^n subsets, and copying each one costs O(n).
Space: O(n * 2^n) to store the output (plus O(n) recursion depth).
