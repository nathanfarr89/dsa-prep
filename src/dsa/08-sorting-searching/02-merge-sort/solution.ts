/**
 * Solution: Merge Sort
 * Approach: Classic divide and conquer — split in half, recursively sort
 * each half, merge the two sorted halves with a two-pointer walk.
 * Time: O(n log n) — O(log n) levels of recursion, O(n) merge work per
 * level.
 * Space: O(n) — new arrays are allocated during merging (not in-place).
 */

function merge(left: number[], right: number[]): number[] {
  const result: number[] = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  while (i < left.length) result.push(left[i++])
  while (j < right.length) result.push(right[j++])

  return result
}

export function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums
  }

  const mid = Math.floor(nums.length / 2)
  const left = mergeSort(nums.slice(0, mid))
  const right = mergeSort(nums.slice(mid))

  return merge(left, right)
}
