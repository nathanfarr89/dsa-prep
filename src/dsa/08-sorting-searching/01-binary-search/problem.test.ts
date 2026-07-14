import { describe, expect, it } from 'vitest'
import { binarySearch } from './problem'

describe('binarySearch', () => {
  const nums = [-1, 0, 3, 5, 9, 12]

  it('finds a value in the middle', () => {
    expect(binarySearch(nums, 9)).toBe(4)
  })

  it('finds the first element', () => {
    expect(binarySearch(nums, -1)).toBe(0)
  })

  it('finds the last element', () => {
    expect(binarySearch(nums, 12)).toBe(5)
  })

  it('returns -1 when the value is not present', () => {
    expect(binarySearch(nums, 2)).toBe(-1)
  })

  it('returns -1 for an empty array', () => {
    expect(binarySearch([], 1)).toBe(-1)
  })

  it('handles a single-element array', () => {
    expect(binarySearch([5], 5)).toBe(0)
    expect(binarySearch([5], 1)).toBe(-1)
  })
})
