import { describe, expect, it } from 'vitest'
import { lengthOfLongestSubstring } from './problem'

describe('lengthOfLongestSubstring', () => {
  it('finds the longest run in a repeating pattern', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })

  it('handles a string of all the same character', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })

  it('handles a repeat that is not at the window edge', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })

  it('returns 0 for an empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })

  it('returns the full length when there are no repeats', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6)
  })

  it('handles a duplicate appearing before the current window', () => {
    expect(lengthOfLongestSubstring('abba')).toBe(2)
  })
})
