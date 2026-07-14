/**
 * Solution: Longest Substring Without Repeating Characters
 * Approach: Sliding window using a Map of character -> last seen index, so
 * the left edge can jump directly past a duplicate instead of shrinking one
 * character at a time.
 * Time: O(n) — each index is visited once by `right`, and `left` only moves
 * forward.
 * Space: O(min(n, alphabet size)) for the map.
 */

export function lengthOfLongestSubstring(s: string): number {
  const lastSeenIndex = new Map<string, number>()
  let left = 0
  let longest = 0

  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    const previousIndex = lastSeenIndex.get(char)

    if (previousIndex !== undefined && previousIndex >= left) {
      left = previousIndex + 1
    }

    lastSeenIndex.set(char, right)
    longest = Math.max(longest, right - left + 1)
  }

  return longest
}
