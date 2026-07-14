import { describe, expect, it } from 'vitest'
import { groupAnagrams } from './problem'

function normalize(groups: string[][]): string[][] {
  return groups.map((group) => [...group].sort()).sort((a, b) => a[0].localeCompare(b[0]))
}

describe('groupAnagrams', () => {
  it('groups the classic example regardless of output order', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
    expect(normalize(result)).toEqual(
      normalize([
        ['eat', 'tea', 'ate'],
        ['tan', 'nat'],
        ['bat'],
      ]),
    )
  })

  it('handles an empty string', () => {
    expect(normalize(groupAnagrams(['']))).toEqual([['']])
  })

  it('puts every string in its own group when none are anagrams', () => {
    expect(normalize(groupAnagrams(['abc', 'def']))).toEqual(normalize([['abc'], ['def']]))
  })
})
