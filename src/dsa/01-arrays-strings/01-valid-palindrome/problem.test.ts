import { describe, expect, it } from 'vitest'
import { isPalindrome } from './problem'

describe('isPalindrome', () => {
  it('returns true for a classic mixed-case palindrome with punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('race a car')).toBe(false)
  })

  it('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true)
  })

  it('returns true for a string with no alphanumeric characters', () => {
    expect(isPalindrome('.,!')).toBe(true)
  })

  it('returns true for a single character', () => {
    expect(isPalindrome('a')).toBe(true)
  })

  it('handles digits', () => {
    expect(isPalindrome('12321')).toBe(true)
    expect(isPalindrome('12345')).toBe(false)
  })
})
