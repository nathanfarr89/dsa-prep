# Hints: Valid Palindrome

## Hint 1 — Clarify first
What counts as a character to compare? Only letters and digits — you need to
skip spaces, punctuation, and casing differences. What should an empty
string, or a string with zero alphanumeric characters, return?

## Hint 2 — The naive approach
You could filter the string down to only lowercase alphanumeric characters,
then compare it to its reverse. That works and is easy to explain, but costs
O(n) extra space for the cleaned copy. Say this out loud in an interview,
then offer to optimize — it shows you know the trade-off.

## Hint 3 — The O(1)-space approach
Use two pointers, one starting at index `0`, one at `s.length - 1`.
- If the character at either pointer isn't alphanumeric, move that pointer
  inward and check again.
- Once both pointers point at alphanumeric characters, compare them
  (case-insensitively). If they don't match, it's not a palindrome.
- Move both pointers inward and repeat until they cross.

## Hint 4 — Useful helpers
`/[a-z0-9]/i.test(char)` (or comparing char codes) tells you if a character
is alphanumeric. `char.toLowerCase()` handles case.

## Complexity target
Time: O(n) — each pointer visits each character at most once.
Space: O(1) — no copy of the string, just two index variables.
