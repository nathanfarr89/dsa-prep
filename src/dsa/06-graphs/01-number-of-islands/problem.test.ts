import { describe, expect, it } from 'vitest'
import { numIslands } from './problem'

function clone(grid: string[][]): string[][] {
  return grid.map((row) => [...row])
}

describe('numIslands', () => {
  it('counts three separate islands', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ]
    expect(numIslands(clone(grid))).toBe(3)
  })

  it('counts one large connected island', () => {
    const grid = [
      ['1', '1', '1'],
      ['1', '1', '1'],
      ['1', '1', '1'],
    ]
    expect(numIslands(clone(grid))).toBe(1)
  })

  it('returns 0 for an all-water grid', () => {
    const grid = [
      ['0', '0'],
      ['0', '0'],
    ]
    expect(numIslands(clone(grid))).toBe(0)
  })

  it('does not connect diagonally', () => {
    const grid = [
      ['1', '0'],
      ['0', '1'],
    ]
    expect(numIslands(clone(grid))).toBe(2)
  })

  it('handles a single cell', () => {
    expect(numIslands([['1']])).toBe(1)
    expect(numIslands([['0']])).toBe(0)
  })
})
