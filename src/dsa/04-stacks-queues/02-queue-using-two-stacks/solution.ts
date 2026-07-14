/**
 * Solution: Implement a Queue Using Two Stacks
 * Approach: `inStack` accepts all enqueues. `outStack` serves dequeues/peeks;
 * when it runs dry, drain `inStack` into it (reversing order back to FIFO)
 * before continuing.
 * Time: Amortized O(1) — each element is moved from inStack to outStack at
 * most once across its lifetime.
 * Space: O(n) across both stacks.
 */

export class QueueViaStacks<T> {
  private inStack: T[] = []
  private outStack: T[] = []

  enqueue(value: T): void {
    this.inStack.push(value)
  }

  dequeue(): T | undefined {
    this.transferIfNeeded()
    return this.outStack.pop()
  }

  peek(): T | undefined {
    this.transferIfNeeded()
    return this.outStack[this.outStack.length - 1]
  }

  size(): number {
    return this.inStack.length + this.outStack.length
  }

  private transferIfNeeded(): void {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!)
      }
    }
  }
}
