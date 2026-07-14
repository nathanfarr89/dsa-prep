/**
 * Solution: Subsets (Power Set)
 * Approach: Backtracking over a binary include/exclude decision at each
 * index. A shared, mutable `currentSubset` array is pushed to and popped
 * from as we enter/leave each branch; a copy is recorded whenever we reach
 * a completed decision path.
 * Time: O(n * 2^n) — 2^n subsets, each copied in O(n).
 * Space: O(n * 2^n) for the output, O(n) recursion depth.
 */

export function subsets(nums: number[]): number[][] {
  const result: number[][] = []
  const currentSubset: number[] = []

  function backtrack(index: number): void {
    if (index === nums.length) {
      result.push([...currentSubset])
      return
    }

    // Choice 1: exclude nums[index]
    backtrack(index + 1)

    // Choice 2: include nums[index]
    currentSubset.push(nums[index])
    backtrack(index + 1)
    currentSubset.pop()
  }

  backtrack(0)
  return result
}
