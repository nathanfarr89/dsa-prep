# Hints: Valid Parentheses

## Hint 1 — Why a stack?
The key requirement is "most recently opened, closed first" — `([)]` is
invalid because the `[` opened after `(` but the `)` tries to close before
the `[` does. That last-opened-first-closed behavior is exactly what a
stack (LIFO) gives you for free.

## Hint 2 — The algorithm
Walk the string one character at a time:
- If it's an opening bracket (`(`, `{`, `[`), push it onto the stack.
- If it's a closing bracket, pop the stack and check that the popped
  opening bracket matches this closer. If the stack is empty when you try to
  pop (nothing to match against), or the popped bracket doesn't match,
  it's invalid.

## Hint 3 — A handy lookup
A `Map` (or plain object) from closing bracket -> matching opening bracket
(`')' -> '('`, `'}' -> '{'`, `']' -> '['`) makes the "does this match" check
a single lookup instead of a chain of `if`s.

## Hint 4 — Don't forget the end
After processing every character, the string is only valid if the stack is
**empty** — leftover unclosed openers (like `"((("`) mean invalid.

## Complexity target
Time: O(n) — one pass through the string.
Space: O(n) — worst case, the stack holds every character (e.g. all
openers).
