# Hints: Number of Islands

## Hint 1 — There's no explicit graph here, and that's the point
A grid is a graph in disguise: each cell is a node, and its "neighbors" are
the cells directly above/below/left/right of it. Recognizing "this 2D grid
problem is actually a graph traversal problem" is the key insight — a lot
of grid problems (flood fill, maze solving, word search) are graph BFS/DFS
wearing a different costume.

## Hint 2 — The overall strategy
Scan every cell. Whenever you find an unvisited `'1'` (land) you haven't
counted yet, that's the start of a *new* island — increment your island
count, then traverse (BFS or DFS) outward from that cell, marking every
connected land cell as visited so you don't count it again as a separate
island later.

## Hint 3 — Marking visited cells
The simplest approach: mutate the grid in place, flipping visited land
cells from `'1'` to `'0'` as you sink them into the traversal. This avoids a
separate `visited` Set/2D-array, at the cost of mutating the input (mention
this trade-off — in a real system you might not want to mutate input you
don't own, and would use a separate visited structure instead).

## Hint 4 — The traversal (DFS shown, BFS works identically)
Write a helper `sinkIsland(row, col)` that:
1. Returns immediately if `row`/`col` are out of bounds, or the cell is
   `'0'` (water or already visited).
2. Otherwise, marks the cell visited (set to `'0'`), then recursively calls
   itself on all 4 neighbors (up, down, left, right).

## Hint 5 — Recursion depth caveat
For a very large grid (e.g. 300x300 all land), a recursive DFS could exceed
the call stack. An iterative DFS (your own stack array) or BFS (a queue)
avoids that risk — worth mentioning as a follow-up if asked about scaling.

## Complexity target
Time: O(rows * cols) — every cell is visited a constant number of times.
Space: O(rows * cols) worst case for the recursion/queue (a grid that's
entirely land).
