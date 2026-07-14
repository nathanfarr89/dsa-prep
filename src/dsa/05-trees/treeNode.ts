/**
 * Shared binary tree node + a test helper used by both problems in this
 * folder. Not part of the exercises themselves.
 */

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * Builds a tree from a level-order array using `null` for missing children,
 * e.g. [3, 9, 20, null, null, 15, 7] is:
 *
 *        3
 *       / \
 *      9  20
 *        /  \
 *       15   7
 */
export function arrayToTree(values: Array<number | null>): TreeNode | null {
  if (values.length === 0 || values[0] === null) return null

  const root = new TreeNode(values[0])
  const queue: TreeNode[] = [root]
  let i = 1

  while (i < values.length && queue.length > 0) {
    const current = queue.shift()!

    if (i < values.length) {
      const leftVal = values[i++]
      if (leftVal !== null) {
        current.left = new TreeNode(leftVal)
        queue.push(current.left)
      }
    }

    if (i < values.length) {
      const rightVal = values[i++]
      if (rightVal !== null) {
        current.right = new TreeNode(rightVal)
        queue.push(current.right)
      }
    }
  }

  return root
}
