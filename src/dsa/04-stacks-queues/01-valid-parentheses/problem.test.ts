import { describe, expect, it } from 'vitest'
import { isValid } from './problem'

describe('isValid', () => {
  it('validates a single matching pair', () => {
    expect(isValid('()')).toBe(true)
  })

  it('validates multiple adjacent pairs', () => {
    expect(isValid('()[]{}')).toBe(true)
  })

  it('validates nested pairs', () => {
    expect(isValid('{[]}')).toBe(true)
  })

  it('rejects mismatched bracket types', () => {
    expect(isValid('(]')).toBe(false)
  })

  it('rejects incorrectly interleaved brackets', () => {
    expect(isValid('([)]')).toBe(false)
  })

  it('rejects an unclosed opener', () => {
    expect(isValid('(((')).toBe(false)
  })

  it('rejects a closer with nothing to match', () => {
    expect(isValid(')')).toBe(false)
  })
})
