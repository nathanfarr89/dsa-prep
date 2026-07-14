# Hints: Reverse Linked List

## Hint 1 — Draw it first
Draw 3 boxes with arrows: `1 -> 2 -> 3`. Reversing means every arrow needs
to point the other way: `1 <- 2 <- 3`. The hard part is that once you point
`node.next` backwards, you lose the reference to what used to be next —
so you need to save it *before* you overwrite it.

## Hint 2 — Three pointers, iterative
Keep track of:
- `prev` — the node that should come after the current one in the reversed
  list (starts as `null`, since the original head becomes the new tail).
- `current` — the node you're rewiring right now (starts as `head`).
- `next` — a temporary save of `current.next` *before* you overwrite it.

At each step: save `next`, point `current.next` to `prev`, then shift both
`prev` and `current` forward by one.

## Hint 3 — Loop condition and return value
Loop `while (current !== null)`. When the loop ends, `current` is `null`
and `prev` is sitting on what is now the new head — that's your return
value.

## Hint 4 — The recursive version (follow-up)
`reverseList(head.next)` reverses everything after `head` and returns the
new head of that reversed sublist. You then need to fix up the link:
`head.next.next = head`, and `head.next = null` (otherwise you get a cycle).
The base case is an empty list or a single node — just return `head`.

## Complexity target
Time: O(n) for either approach.
Space: O(1) iterative, O(n) recursive (call stack depth).
