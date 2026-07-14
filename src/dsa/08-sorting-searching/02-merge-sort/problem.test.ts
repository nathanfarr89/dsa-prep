import { describe, expect, it } from 'vitest'
import { mergeSort } from './problem'

describe('mergeSort', () => {
  it('sorts an unsorted array', () => {
    expect(mergeSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('handles an already-sorted array', () => {
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('handles a reverse-sorted array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  it('handles duplicate values', () => {
    expect(mergeSort([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3])
  })

  it('handles an empty array', () => {
    expect(mergeSort([])).toEqual([])
  })

  it('handles a single-element array', () => {
    expect(mergeSort([1])).toEqual([1])
  })

  it('handles negative numbers', () => {
    expect(mergeSort([0, -5, 10, -3])).toEqual([-5, -3, 0, 10])
  })
})
