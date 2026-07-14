import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { debounce, throttle } from './problem'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('does not call the function immediately', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 200)

    debounced()

    expect(fn).not.toHaveBeenCalled()
  })

  it('calls the function once after the delay has elapsed', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 200)

    debounced()
    vi.advanceTimersByTime(200)

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('resets the timer on repeated calls within the delay window', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 200)

    debounced()
    vi.advanceTimersByTime(150)
    debounced() // resets the 200ms window
    vi.advanceTimersByTime(150)

    expect(fn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(50)

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('forwards arguments from the last call', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 200)

    debounced('first')
    debounced('second')
    vi.advanceTimersByTime(200)

    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith('second')
  })
})

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(0)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('calls the function immediately on the first call', () => {
    const fn = vi.fn()
    const throttled = throttle(fn, 200)

    throttled()

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('drops calls made during the cooldown window', () => {
    const fn = vi.fn()
    const throttled = throttle(fn, 200)

    throttled()
    vi.setSystemTime(100)
    throttled()
    vi.setSystemTime(150)
    throttled()

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('allows another call once the interval has passed', () => {
    const fn = vi.fn()
    const throttled = throttle(fn, 200)

    throttled()
    vi.setSystemTime(250)
    throttled()

    expect(fn).toHaveBeenCalledTimes(2)
  })
})
