/**
 * Solution: Climbing Stairs
 * Approach: Bottom-up tabulation. ways(n) = ways(n-1) + ways(n-2), the same
 * recurrence as Fibonacci, computed iteratively with two rolling variables
 * instead of a full memo table.
 * Time: O(n)
 * Space: O(1)
 */

export function climbStairs(n: number): number {
  if (n <= 2) {
    return n
  }

  let waysTwoBack = 1 // ways(1)
  let waysOneBack = 2 // ways(2)

  for (let step = 3; step <= n; step++) {
    const waysCurrent = waysOneBack + waysTwoBack
    waysTwoBack = waysOneBack
    waysOneBack = waysCurrent
  }

  return waysOneBack
}
