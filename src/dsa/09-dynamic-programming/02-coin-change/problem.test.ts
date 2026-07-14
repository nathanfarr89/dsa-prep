import { describe, expect, it } from 'vitest'
import { coinChange } from './problem'

describe('coinChange', () => {
  it('finds the minimum coins for a solvable amount', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3)
  })

  it('returns -1 when the amount cannot be made', () => {
    expect(coinChange([2], 3)).toBe(-1)
  })

  it('returns 0 for a total of 0', () => {
    expect(coinChange([1], 0)).toBe(0)
  })

  it('beats the greedy answer where greedy would fail', () => {
    expect(coinChange([1, 3, 4], 6)).toBe(2) // 3 + 3, not 4 + 1 + 1
  })

  it('handles a single denomination that divides evenly', () => {
    expect(coinChange([5], 15)).toBe(3)
  })
})
