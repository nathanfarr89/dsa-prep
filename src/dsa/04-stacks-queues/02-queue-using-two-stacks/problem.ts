/**
 * Problem: Implement a Queue Using Two Stacks
 * Pattern: Stack (amortized-cost rebalancing)
 * Difficulty: Medium
 *
 * JavaScript arrays give you push/pop (stack behavior) for free, but not an
 * efficient shift/unshift-based queue (those are O(n) on real engines).
 * Implement a FIFO queue using only two stacks (arrays used only with
 * push/pop) internally.
 *
 * Required methods:
 *   enqueue(value): void   — add to the back of the queue
 *   dequeue(): T | undefined — remove and return the front of the queue
 *   peek(): T | undefined  — look at the front without removing it
 *   size(): number
 *
 * Example:
 *   const q = new QueueViaStacks<number>()
 *   q.enqueue(1)
 *   q.enqueue(2)
 *   q.dequeue() // 1
 *   q.enqueue(3)
 *   q.dequeue() // 2
 *   q.dequeue() // 3
 *
 * Aim for amortized O(1) per operation — no single operation should be
 * O(n) on average across a sequence of calls, even though some individual
 * calls will do O(n) work.
 */

export class QueueViaStacks<T> {
  enqueue(value: T): void {
    // TODO: implement
    throw new Error('Not implemented')
  }

  dequeue(): T | undefined {
    // TODO: implement
    throw new Error('Not implemented')
  }

  peek(): T | undefined {
    // TODO: implement
    throw new Error('Not implemented')
  }

  size(): number {
    // TODO: implement
    throw new Error('Not implemented')
  }
}
