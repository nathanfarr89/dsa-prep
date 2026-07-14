# Hints: Binary Tree Level Order Traversal

## Hint 1 — DFS won't naturally group by level
A depth-first (recursive) traversal dives straight down one branch before
coming back — it doesn't visit nodes "layer by layer" unless you thread a
`depth` parameter through and bucket by it. BFS, on the other hand,
naturally visits nodes in level order because of how a queue works — that's
the more natural tool here.

## Hint 2 — The queue-based BFS skeleton
Keep a queue of nodes to visit, starting with `[root]` (if root isn't
null). While the queue isn't empty, dequeue a node, record its value,
enqueue its children. That alone gives you a single flat list in level
order — the remaining challenge is grouping that flat list *by level*.

## Hint 3 — Grouping by level: process one level at a time
Before processing a level, capture `levelSize = queue.length` — that's
exactly how many nodes belong to the *current* level (everything currently
in the queue). Then dequeue exactly `levelSize` nodes, collecting their
values into one array and enqueueing their children (which will make up the
next level). Push that array onto your result before moving to the next
level.

## Hint 4 — JS array gotcha
`Array.prototype.shift()` is O(n) because it has to reindex the whole
array. For a real production BFS with performance requirements you'd use an
actual queue (e.g. two-stack queue, or an index pointer into the array
instead of shifting) — but for interview purposes, `shift()` on a plain
array is a perfectly acceptable and readable answer. Mention the trade-off
if asked to optimize.

## Complexity target
Time: O(n) — every node is enqueued and dequeued exactly once.
Space: O(n) — the queue holds up to one full level's worth of nodes, and
the result holds every node's value.
