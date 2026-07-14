import { describe, expect, it } from 'vitest'
import { deepClone, flattenObject } from './problem'

describe('deepClone', () => {
  it('returns primitives as-is', () => {
    expect(deepClone(5)).toBe(5)
    expect(deepClone('hello')).toBe('hello')
    expect(deepClone(null)).toBe(null)
    expect(deepClone(undefined)).toBe(undefined)
  })

  it('deep clones a nested object so mutations do not affect the original', () => {
    const original = { a: 1, nested: { b: [1, 2, { c: 3 }] } }
    const clone = deepClone(original)

    ;(clone.nested.b[2] as { c: number }).c = 999

    expect(original.nested.b[2]).toEqual({ c: 3 })
    expect(clone).toEqual({ a: 1, nested: { b: [1, 2, { c: 999 }] } })
  })

  it('produces a value that is deeply equal but not reference-equal', () => {
    const original = { a: { b: 1 } }
    const clone = deepClone(original)

    expect(clone).toEqual(original)
    expect(clone).not.toBe(original)
    expect(clone.a).not.toBe(original.a)
  })

  it('clones arrays independently', () => {
    const original = [1, [2, 3], { a: 4 }]
    const clone = deepClone(original)

    ;(clone[1] as number[]).push(999)

    expect(original[1]).toEqual([2, 3])
  })
})

describe('flattenObject', () => {
  it('flattens a simple nested object using dot paths', () => {
    expect(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } })).toEqual({
      a: 1,
      'b.c': 2,
      'b.d.e': 3,
    })
  })

  it('returns a flat object unchanged (aside from being a new object)', () => {
    expect(flattenObject({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
  })

  it('treats arrays as leaf values, not something to recurse into', () => {
    expect(flattenObject({ a: [1, 2, 3] })).toEqual({ a: [1, 2, 3] })
  })

  it('handles an empty object', () => {
    expect(flattenObject({})).toEqual({})
  })

  it('handles null values without trying to recurse into them', () => {
    expect(flattenObject({ a: null, b: { c: null } })).toEqual({ a: null, 'b.c': null })
  })
})
