/**
 * Solution: Reverse Linked List
 * Approach: Iterative pointer rewiring with three pointers (prev, current,
 * next), flipping each `next` link as we walk the list once.
 * Time: O(n)
 * Space: O(1) — no recursion, no extra data structure.
 */

import type { ListNode } from '../listNode'

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let current = head

  while (current !== null) {
    const next: ListNode | null = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}
