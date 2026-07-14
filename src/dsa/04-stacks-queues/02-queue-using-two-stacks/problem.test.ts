import { describe, expect, it } from 'vitest'
import { QueueViaStacks } from './problem'

describe('QueueViaStacks', () => {
  it('dequeues in FIFO order', () => {
    const q = new QueueViaStacks<number>()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    expect(q.dequeue()).toBe(1)
    expect(q.dequeue()).toBe(2)
    expect(q.dequeue()).toBe(3)
  })

  it('interleaves enqueue and dequeue correctly', () => {
    const q = new QueueViaStacks<number>()
    q.enqueue(1)
    q.enqueue(2)
    expect(q.dequeue()).toBe(1)
    q.enqueue(3)
    expect(q.dequeue()).toBe(2)
    expect(q.dequeue()).toBe(3)
  })

  it('peek returns the front without removing it', () => {
    const q = new QueueViaStacks<string>()
    q.enqueue('a')
    q.enqueue('b')
    expect(q.peek()).toBe('a')
    expect(q.size()).toBe(2)
    expect(q.dequeue()).toBe('a')
  })

  it('returns undefined when dequeuing/peeking an empty queue', () => {
    const q = new QueueViaStacks<number>()
    expect(q.dequeue()).toBeUndefined()
    expect(q.peek()).toBeUndefined()
  })

  it('tracks size correctly', () => {
    const q = new QueueViaStacks<number>()
    expect(q.size()).toBe(0)
    q.enqueue(1)
    q.enqueue(2)
    expect(q.size()).toBe(2)
    q.dequeue()
    expect(q.size()).toBe(1)
  })
})
