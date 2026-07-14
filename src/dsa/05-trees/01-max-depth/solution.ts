/**
 * Solution: Maximum Depth of Binary Tree
 * Approach: Recursive divide-and-conquer — depth of a node is 1 plus the
 * larger of its two subtrees' depths; an empty tree has depth 0.
 * Time: O(n) — every node visited once.
 * Space: O(h) call stack, h = tree height.
 */

import type { TreeNode } from '../treeNode'

export function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }

  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  return 1 + Math.max(leftDepth, rightDepth)
}
