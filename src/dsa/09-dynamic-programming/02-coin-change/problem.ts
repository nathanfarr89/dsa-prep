/**
 * Problem: Coin Change
 * Pattern: Dynamic Programming (1D, bottom-up over "amount")
 * Difficulty: Medium
 *
 * Given an array of coin `denominations` and a `total` amount, return the
 * fewest number of coins needed to make up that amount. If it can't be
 * made up by any combination of coins, return -1. You have an unlimited
 * supply of each coin denomination.
 *
 * Example:
 *   coinChange([1, 2, 5], 11) -> 3   (5 + 5 + 1)
 *   coinChange([2], 3)        -> -1  (can't make an odd amount with only 2s)
 *   coinChange([1], 0)        -> 0
 *
 * Constraints:
 *  - 1 <= denominations.length <= 12
 *  - 0 <= total <= 10^4
 *
 * A greedy "always take the biggest coin that fits" approach fails for some
 * denominations (e.g. [1, 3, 4] making 6 — greedy gives 4+1+1 = 3 coins,
 * but 3+3 = 2 coins is better). That's the tell that this needs DP, not
 * greedy.
 */

export function coinChange(denominations: number[], total: number): number {
  // TODO: implement
  throw new Error('Not implemented')
}
