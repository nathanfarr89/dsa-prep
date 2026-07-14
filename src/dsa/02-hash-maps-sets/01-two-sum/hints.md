# Hints: Two Sum

## Hint 1 — Name the brute force first
For every `i`, look at every `j > i` and check if `nums[i] + nums[j] ===
target`. That's O(n^2). Saying this out loud first is fine — it shows you
can find *a* solution before optimizing.

## Hint 2 — What are you really looking for?
At each element `nums[i]`, you need to know: "have I already seen the value
`target - nums[i]`?" That's a **lookup**, and a hash map gives you O(1)
lookups instead of re-scanning the array.

## Hint 3 — One pass is enough
Walk through the array once. At each index `i`:
- Compute `complement = target - nums[i]`.
- If `complement` is already a key in your map, you've found your pair —
  return `[map.get(complement), i]`.
- Otherwise, store `nums[i] -> i` in the map and keep going.

This works in a single pass because by the time you'd need the complement,
it's guaranteed to have been stored already (the problem guarantees exactly
one answer).

## Hint 4 — Watch the edge case
Don't match an element with itself unless it legitimately appears twice in
the array (e.g. `target = 6`, `nums = [3, 3]`). The one-pass approach handles
this naturally because you check the map *before* inserting the current
element.

## Complexity target
Time: O(n) — one pass, O(1) map operations.
Space: O(n) — the map can hold up to n entries.
