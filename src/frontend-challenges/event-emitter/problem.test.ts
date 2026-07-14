import { describe, expect, it, vi } from 'vitest'
import { EventEmitter } from './problem'

describe('EventEmitter', () => {
  it('calls a registered listener when the event is emitted', () => {
    const emitter = new EventEmitter()
    const listener = vi.fn()

    emitter.on('greet', listener)
    emitter.emit('greet', 'Ada')

    expect(listener).toHaveBeenCalledWith('Ada')
  })

  it('calls multiple listeners for the same event, in registration order', () => {
    const emitter = new EventEmitter()
    const calls: string[] = []

    emitter.on('tick', () => calls.push('first'))
    emitter.on('tick', () => calls.push('second'))
    emitter.emit('tick')

    expect(calls).toEqual(['first', 'second'])
  })

  it('does not call listeners for a different event', () => {
    const emitter = new EventEmitter()
    const listener = vi.fn()

    emitter.on('greet', listener)
    emitter.emit('farewell')

    expect(listener).not.toHaveBeenCalled()
  })

  it('stops calling a listener after off() is used', () => {
    const emitter = new EventEmitter()
    const listener = vi.fn()

    emitter.on('greet', listener)
    emitter.off('greet', listener)
    emitter.emit('greet')

    expect(listener).not.toHaveBeenCalled()
  })

  it('stops calling a listener after its unsubscribe function is called', () => {
    const emitter = new EventEmitter()
    const listener = vi.fn()

    const unsubscribe = emitter.on('greet', listener)
    unsubscribe()
    emitter.emit('greet')

    expect(listener).not.toHaveBeenCalled()
  })

  it('does not throw when emitting an event with no listeners', () => {
    const emitter = new EventEmitter()
    expect(() => emitter.emit('nobody-listening')).not.toThrow()
  })

  it('only removes the specific listener passed to off, not others', () => {
    const emitter = new EventEmitter()
    const listenerA = vi.fn()
    const listenerB = vi.fn()

    emitter.on('greet', listenerA)
    emitter.on('greet', listenerB)
    emitter.off('greet', listenerA)
    emitter.emit('greet')

    expect(listenerA).not.toHaveBeenCalled()
    expect(listenerB).toHaveBeenCalled()
  })
})
