# Hints: Debounce & Throttle

## The one-sentence distinction (say this first in an interview)
**Debounce**: wait for a pause in activity, then fire once.
**Throttle**: fire immediately, then ignore activity for a cooldown window.
Debounce is for "the user stopped doing X" (typing, resizing). Throttle is
for "don't let X happen more than once every N ms while it's continuously
happening" (scroll, mousemove).

---

## debounce(fn, delayMs)

### Hint 1 — What state does the wrapper need to remember?
A single `timeoutId` (or `undefined`), captured in a closure around the
returned function — that's the entire state debounce needs.

### Hint 2 — The logic
Every time the wrapped function is called:
1. If there's an existing pending timeout, cancel it (`clearTimeout`).
2. Start a new timeout that calls `fn(...args)` after `delayMs`.

That's it — because step 1 cancels any previous pending call, only the
*last* call in a rapid burst ever actually reaches its timeout and fires.

### Hint 3 — Don't forget to forward arguments
The wrapped function should accept `(...args)` and pass them through to
`fn` when it eventually fires — the caller shouldn't lose their arguments
just because the call got delayed.

---

## throttle(fn, intervalMs)

### Hint 1 — What state does it need?
A boolean-ish "am I in cooldown" flag (or a `lastCallTimestamp`), captured
in a closure.

### Hint 2 — The simplest version (timestamp-based)
Every time the wrapped function is called: if `Date.now() -
lastCallTimestamp >= intervalMs` (or this is the first call), call `fn`
immediately and update `lastCallTimestamp`. Otherwise, drop the call.

### Hint 3 — A common follow-up: "trailing" calls
The version above silently drops calls made during cooldown — the very
last one in a burst might never fire. A more complete throttle also
schedules one trailing call (like a mini debounce) so the *most recent*
args during the cooldown still get one final flush after the interval
ends. Implementing the simple "leading only" version first and mentioning
this trade-off is a strong answer on its own.

---

## Testing tip
Both of these are impossible to test reliably with real `setTimeout` —
use `vi.useFakeTimers()` and `vi.advanceTimersByTime(ms)` (already used in
the test file here) to control time deterministically.

## Complexity target
Both: O(1) time per call (ignoring the wrapped `fn`'s own cost). Debounce
needs O(1) space for the pending timeout id; throttle needs O(1) space for
the last-call timestamp.
