import { describe, expect, it } from 'vitest'
import { twoSum } from './problem'

describe('twoSum', () => {
  it('finds a pair at the start of the array', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  it('finds a pair not at the start', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  })

  it('handles a duplicate value used as its own pair', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })

  it('handles negative numbers', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2])
  })
})
