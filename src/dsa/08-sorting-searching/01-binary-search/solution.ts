/**
 * Solution: Binary Search
 * Approach: Maintain a shrinking [left, right] window; compare the middle
 * element to target and discard the half that can't contain it.
 * Time: O(log n)
 * Space: O(1)
 */

export function binarySearch(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}
