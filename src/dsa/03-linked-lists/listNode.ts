/**
 * Shared singly-linked-list node + test helpers used by both problems in
 * this folder. Not part of the exercises themselves.
 */

export class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

export function arrayToList(values: number[]): ListNode | null {
  let head: ListNode | null = null
  let tail: ListNode | null = null

  for (const value of values) {
    const node = new ListNode(value)
    if (!head) {
      head = node
      tail = node
    } else {
      tail!.next = node
      tail = node
    }
  }

  return head
}

export function listToArray(head: ListNode | null): number[] {
  const values: number[] = []
  let current = head

  while (current) {
    values.push(current.val)
    current = current.next
  }

  return values
}

/**
 * Builds a list from `values` and, if `cyclePos >= 0`, makes the last node's
 * `next` point back to the node at `cyclePos` (0-indexed) — for testing
 * cycle-detection algorithms. Pass `cyclePos: -1` for no cycle.
 */
export function arrayToListWithCycle(values: number[], cyclePos: number): ListNode | null {
  const nodes = values.map((value) => new ListNode(value))

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  if (cyclePos >= 0 && nodes.length > 0) {
    nodes[nodes.length - 1].next = nodes[cyclePos]
  }

  return nodes[0] ?? null
}
