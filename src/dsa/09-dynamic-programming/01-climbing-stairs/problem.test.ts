import { describe, expect, it } from 'vitest'
import { climbStairs } from './problem'

describe('climbStairs', () => {
  it('returns 1 way for a single step', () => {
    expect(climbStairs(1)).toBe(1)
  })

  it('returns 2 ways for two steps', () => {
    expect(climbStairs(2)).toBe(2)
  })

  it('returns 3 ways for three steps', () => {
    expect(climbStairs(3)).toBe(3)
  })

  it('returns 5 ways for four steps', () => {
    expect(climbStairs(4)).toBe(5)
  })

  it('matches the fibonacci-like growth for larger n', () => {
    expect(climbStairs(10)).toBe(89)
  })
})
