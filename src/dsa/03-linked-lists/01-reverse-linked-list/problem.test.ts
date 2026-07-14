import { describe, expect, it } from 'vitest'
import { arrayToList, listToArray } from '../listNode'
import { reverseList } from './problem'

describe('reverseList', () => {
  it('reverses a list of several nodes', () => {
    const head = arrayToList([1, 2, 3, 4, 5])
    expect(listToArray(reverseList(head))).toEqual([5, 4, 3, 2, 1])
  })

  it('reverses a two-node list', () => {
    const head = arrayToList([1, 2])
    expect(listToArray(reverseList(head))).toEqual([2, 1])
  })

  it('handles a single-node list', () => {
    const head = arrayToList([1])
    expect(listToArray(reverseList(head))).toEqual([1])
  })

  it('handles an empty list', () => {
    expect(listToArray(reverseList(null))).toEqual([])
  })
})
