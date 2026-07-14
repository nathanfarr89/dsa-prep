/**
 * Solution: Linked List Cycle Detection
 * Approach: Floyd's Tortoise and Hare — a slow pointer moving one step and
 * a fast pointer moving two steps will always meet if a cycle exists,
 * because the fast pointer gains one position on the slow one each step
 * once both are inside the loop.
 * Time: O(n)
 * Space: O(1)
 */

import type { ListNode } from '../listNode'

export function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow!.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
}
