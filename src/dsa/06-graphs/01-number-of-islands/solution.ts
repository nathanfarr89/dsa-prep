/**
 * Solution: Number of Islands
 * Approach: Scan every cell; on an unvisited land cell, increment the
 * island count and DFS outward, flipping connected land cells to '0' so
 * they aren't recounted.
 * Time: O(rows * cols) — every cell visited a constant number of times.
 * Space: O(rows * cols) worst case for the recursion stack (all-land grid).
 */

export function numIslands(grid: string[][]): number {
  const rows = grid.length
  const cols = grid[0]?.length ?? 0
  let islandCount = 0

  function sinkIsland(row: number, col: number): void {
    const outOfBounds = row < 0 || row >= rows || col < 0 || col >= cols
    if (outOfBounds || grid[row][col] === '0') {
      return
    }

    grid[row][col] = '0'

    sinkIsland(row + 1, col)
    sinkIsland(row - 1, col)
    sinkIsland(row, col + 1)
    sinkIsland(row, col - 1)
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '1') {
        islandCount++
        sinkIsland(row, col)
      }
    }
  }

  return islandCount
}
