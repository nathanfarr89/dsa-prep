/**
 * Solution: Binary Tree Level Order Traversal
 * Approach: BFS with a queue, processing one full level per outer-loop
 * iteration by snapshotting the queue's length before draining it.
 * Time: O(n) — every node enqueued/dequeued once.
 * Space: O(n) for the queue and result.
 */

import type { TreeNode } from '../treeNode'

export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return []
  }

  const result: number[][] = []
  const queue: TreeNode[] = [root]

  while (queue.length > 0) {
    const levelSize = queue.length
    const levelValues: number[] = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!
      levelValues.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    result.push(levelValues)
  }

  return result
}
