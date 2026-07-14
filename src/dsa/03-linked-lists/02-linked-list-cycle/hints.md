# Hints: Linked List Cycle Detection

## Hint 1 — The O(n)-space approach first
Walk the list, adding each node (not each value — the *node object
reference*) to a `Set`. If you ever encounter a node already in the set,
there's a cycle. If you reach `null`, there isn't. This is a fine starting
answer — offer to optimize the space next.

## Hint 2 — The trick: two pointers at different speeds
Use a `slow` pointer that moves one node per step, and a `fast` pointer that
moves two nodes per step. If there's no cycle, `fast` (or `fast.next`) hits
`null` and you're done — no cycle.

## Hint 3 — Why they must meet
If there *is* a cycle, think of it like two runners on a circular track
where one is twice as fast as the other — the fast one is gaining one
position per lap relative to the slow one, so it's guaranteed to eventually
"lap" the slow one and land on the exact same node. They will meet.

## Hint 4 — Loop condition
Loop while both `fast` and `fast.next` are non-null (you're dereferencing
`fast.next.next`, so check both). If `slow === fast` at any point after
moving, return `true`. If the loop exits normally (hit `null`), return
`false`.

## Complexity target
Time: O(n) — in the worst case the fast pointer travels the cycle roughly
twice before catching up.
Space: O(1) — just two pointer variables, no set.
