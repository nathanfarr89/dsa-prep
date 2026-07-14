/**
 * Solution: Valid Parentheses
 * Approach: Push opening brackets onto a stack; on a closing bracket, pop
 * and verify it matches. Invalid if a pop happens on an empty stack, a
 * mismatch occurs, or the stack isn't empty at the end.
 * Time: O(n)
 * Space: O(n)
 */

const CLOSING_TO_OPENING: Record<string, string> = {
  ')': '(',
  ']': '[',
  '}': '{',
}

export function isValid(s: string): boolean {
  const stack: string[] = []

  for (const char of s) {
    const matchingOpener = CLOSING_TO_OPENING[char]

    if (matchingOpener) {
      // `char` is a closing bracket — the top of the stack must match.
      if (stack.pop() !== matchingOpener) {
        return false
      }
    } else {
      // `char` is an opening bracket.
      stack.push(char)
    }
  }

  return stack.length === 0
}
