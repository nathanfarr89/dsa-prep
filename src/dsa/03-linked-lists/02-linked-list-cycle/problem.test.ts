import { describe, expect, it } from 'vitest'
import { arrayToListWithCycle } from '../listNode'
import { hasCycle } from './problem'

describe('hasCycle', () => {
  it('detects a cycle back to the head', () => {
    expect(hasCycle(arrayToListWithCycle([3, 2, 0, -4], 0))).toBe(true)
  })

  it('detects a cycle into the middle of the list', () => {
    expect(hasCycle(arrayToListWithCycle([1, 2, 3, 4, 5], 2))).toBe(true)
  })

  it('returns false for a list with no cycle', () => {
    expect(hasCycle(arrayToListWithCycle([1, 2, 3], -1))).toBe(false)
  })

  it('returns false for an empty list', () => {
    expect(hasCycle(arrayToListWithCycle([], -1))).toBe(false)
  })

  it('returns false for a single node with no self-cycle', () => {
    expect(hasCycle(arrayToListWithCycle([1], -1))).toBe(false)
  })

  it('detects a single node that cycles to itself', () => {
    expect(hasCycle(arrayToListWithCycle([1], 0))).toBe(true)
  })
})
