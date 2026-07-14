import { describe, expect, it } from 'vitest'
import { arrayToTree } from '../treeNode'
import { maxDepth } from './problem'

describe('maxDepth', () => {
  it('computes depth for an unbalanced tree', () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7])
    expect(maxDepth(root)).toBe(3)
  })

  it('returns 0 for an empty tree', () => {
    expect(maxDepth(null)).toBe(0)
  })

  it('returns 1 for a single node', () => {
    const root = arrayToTree([1])
    expect(maxDepth(root)).toBe(1)
  })

  it('handles a completely skewed (linked-list-shaped) tree', () => {
    const root = arrayToTree([1, 2, null, 3, null, 4])
    expect(maxDepth(root)).toBe(4)
  })
})
