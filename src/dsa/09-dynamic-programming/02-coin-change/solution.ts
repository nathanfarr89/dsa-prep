/**
 * Solution: Coin Change
 * Approach: Bottom-up DP over amount 0..total. minCoinsForAmount[a] is the
 * fewest coins to make exactly `a`, built from smaller already-solved
 * amounts. Infinity is used as an "impossible so far" sentinel.
 * Time: O(total * denominations.length)
 * Space: O(total)
 */

export function coinChange(denominations: number[], total: number): number {
  const minCoinsForAmount = new Array(total + 1).fill(Infinity)
  minCoinsForAmount[0] = 0

  for (let amount = 1; amount <= total; amount++) {
    for (const coin of denominations) {
      if (coin <= amount) {
        minCoinsForAmount[amount] = Math.min(
          minCoinsForAmount[amount],
          1 + minCoinsForAmount[amount - coin],
        )
      }
    }
  }

  return minCoinsForAmount[total] === Infinity ? -1 : minCoinsForAmount[total]
}
