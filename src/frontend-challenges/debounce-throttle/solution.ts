/**
 * Solution: debounce and throttle
 */

export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delayMs: number,
): (...args: Args) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return (...args: Args) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn(...args)
    }, delayMs)
  }
}

/**
 * "Leading edge" throttle: the first call in a window fires immediately,
 * calls during the cooldown are dropped.
 */
export function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  intervalMs: number,
): (...args: Args) => void {
  let lastCallTimestamp = -Infinity

  return (...args: Args) => {
    const now = Date.now()

    if (now - lastCallTimestamp >= intervalMs) {
      lastCallTimestamp = now
      fn(...args)
    }
  }
}
