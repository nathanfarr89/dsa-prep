/**
 * Solution: Two Sum
 * Approach: Single pass with a Map from value -> index. At each element,
 * check whether its complement (target - value) has already been seen
 * before inserting the current value.
 * Time: O(n) — one pass, O(1) average map operations.
 * Space: O(n) — the map holds up to n entries.
 */

export function twoSum(nums: number[], target: number): number[] {
  const seenValueToIndex = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    const complementIndex = seenValueToIndex.get(complement)

    if (complementIndex !== undefined) {
      return [complementIndex, i]
    }

    seenValueToIndex.set(nums[i], i)
  }

  throw new Error('No two sum solution found')
}
