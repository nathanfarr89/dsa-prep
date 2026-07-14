# Hints: Maximum Depth of Binary Tree

## Hint 1 — Think recursively, not iteratively
Ask: "if I already knew the max depth of the left subtree and the max depth
of the right subtree, how would I get the max depth of the whole tree?"
Answer: `1 + max(leftDepth, rightDepth)` — the `1` accounts for the current
node itself.

## Hint 2 — The base case
What's the depth of an empty tree (`null`)? Zero. That's your recursion's
stopping point — every recursive call eventually bottoms out at a `null`
child.

## Hint 3 — Write it as three lines
1. If `root` is `null`, return `0`.
2. Recursively compute `left = maxDepth(root.left)` and
   `right = maxDepth(root.right)`.
3. Return `1 + Math.max(left, right)`.

## Hint 4 — This connects directly to how React thinks about trees
A JSX tree / component tree is recursively shaped exactly like this. When
React (or you, walking the DOM) needs to answer "how deep does this nested
component tree go," it's the identical recursive shape: base case at leaf
nodes / null children, combine children's results going back up.

## Complexity target
Time: O(n) — every node is visited exactly once.
Space: O(h) for the call stack, where h is the tree's height (O(log n) for
a balanced tree, O(n) worst case for a completely skewed tree).
