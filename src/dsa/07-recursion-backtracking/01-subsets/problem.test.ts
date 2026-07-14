import { describe, expect, it } from 'vitest'
import { subsets } from './problem'

function normalize(groups: number[][]): number[][] {
  return groups
    .map((group) => [...group].sort((a, b) => a - b))
    .sort((a, b) => a.join(',').localeCompare(b.join(',')))
}

describe('subsets', () => {
  it('generates all 8 subsets of a 3-element array', () => {
    const result = subsets([1, 2, 3])
    expect(result).toHaveLength(8)
    expect(normalize(result)).toEqual(
      normalize([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]),
    )
  })

  it('generates 2 subsets for a single-element array', () => {
    expect(normalize(subsets([5]))).toEqual(normalize([[], [5]]))
  })

  it('contains no duplicate subsets', () => {
    const result = subsets([1, 2, 3, 4])
    const asStrings = normalize(result).map((s) => s.join(','))
    expect(new Set(asStrings).size).toBe(asStrings.length)
    expect(result).toHaveLength(16)
  })
})
