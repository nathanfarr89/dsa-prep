import { describe, expect, it } from 'vitest'
import { arrayToTree } from '../treeNode'
import { levelOrder } from './problem'

describe('levelOrder', () => {
  it('groups values by level for an unbalanced tree', () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7])
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]])
  })

  it('returns an empty array for an empty tree', () => {
    expect(levelOrder(null)).toEqual([])
  })

  it('returns a single level for a single node', () => {
    const root = arrayToTree([1])
    expect(levelOrder(root)).toEqual([[1]])
  })

  it('handles a left-skewed tree, one node per level', () => {
    const root = arrayToTree([1, 2, null, 3])
    expect(levelOrder(root)).toEqual([[1], [2], [3]])
  })
})
