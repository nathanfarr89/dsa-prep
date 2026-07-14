# Hints: Group Anagrams

## Hint 1 — What makes two strings anagrams?
They contain the exact same characters with the exact same frequency, just
in a different order. So if you had a way to turn each string into a
"canonical form" that's identical for all its anagrams, you could group by
that form.

## Hint 2 — Two ways to build a canonical key
- **Sort the characters**: `"eat"` and `"tea"` both sort to `"aet"`. Simple
  to write, costs O(k log k) per string of length k.
- **Character frequency count**: build something like `"a1b0c0...z0"` (a
  count per letter of the alphabet). Costs O(k) per string — faster for long
  strings, more code to write. Either is a fine answer; know the trade-off.

## Hint 3 — The grouping structure
Use a `Map<string, string[]>` from canonical key -> list of original strings
that produced it. For each input string: compute its key, then push it onto
`map.get(key)` (initializing an empty array first if the key is new).

## Hint 4 — Final shape
The answer is `Array.from(map.values())` — you don't need the keys in the
output, just the grouped buckets.

## Complexity target
Time: O(n * k log k) with the sorting approach (n strings, average length
k), or O(n * k) with the frequency-count approach.
Space: O(n * k) to store all the strings in the map.
