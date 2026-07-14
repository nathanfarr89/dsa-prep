/**
 * Challenge: Implement debounce and throttle
 * Difficulty: Medium (extremely common frontend interview question —
 * search-as-you-type, resize/scroll handlers, button double-click guards)
 *
 * debounce(fn, delayMs):
 *   Returns a wrapped function that delays calling `fn` until `delayMs`
 *   milliseconds have passed since the LAST time the wrapped function was
 *   invoked. Every call within the delay window resets the timer.
 *   Use case: only fire a search API call once the user stops typing.
 *
 * throttle(fn, intervalMs):
 *   Returns a wrapped function that calls `fn` at most once per
 *   `intervalMs` window, no matter how many times it's invoked. The first
 *   call in a window fires immediately; calls during the "cooldown" are
 *   dropped.
 *   Use case: limit how often a scroll/resize handler actually runs.
 *
 * Neither implementation needs to be a React hook — plain functions that
 * wrap any function are the more general (and more commonly asked-for)
 * version.
 */

export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delayMs: number,
): (...args: Args) => void {
  // TODO: implement
  throw new Error('Not implemented')
}

export function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  intervalMs: number,
): (...args: Args) => void {
  // TODO: implement
  throw new Error('Not implemented')
}
