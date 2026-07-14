/**
 * Solution: Valid Palindrome
 * Approach: Two pointers from both ends, skipping non-alphanumeric
 * characters, comparing lowercased characters as we close the gap.
 * Time: O(n) — each character is visited at most once.
 * Space: O(1) — only two pointer variables, no extra copy of the string.
 */

function isAlphanumeric(char: string): boolean {
  return /[a-z0-9]/i.test(char)
}

export function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      left++
      continue
    }
    if (!isAlphanumeric(s[right])) {
      right--
      continue
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    }

    left++
    right--
  }

  return true
}
