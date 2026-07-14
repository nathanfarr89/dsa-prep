# Hints: Pub/Sub Event Emitter

## Hint 1 — The core data structure
You need to map each event name to a *list* of listeners (multiple things
can subscribe to the same event). A `Map<string, Listener[]>` is the
natural fit: `Map` for O(1) lookup by event name, array for an ordered,
possibly-repeated collection of listeners per event.

## Hint 2 — on(event, listener)
1. Look up the array of listeners for `event` (creating an empty one if
   this is the first subscriber to that event).
2. Push `listener` onto it.
3. Return a function that, when called, removes *this exact listener*
   (calling your own `off` internally is a clean way to do this — don't
   duplicate the removal logic).

## Hint 3 — off(event, listener)
Look up the array for `event`; if it exists, remove `listener` from it —
`array.filter(l => l !== listener)` (replacing the stored array) or
`indexOf` + `splice` both work. Reference equality (`===`) is what makes a
specific listener removable, which is why `off`/the unsubscribe function
need the *same function reference* that was originally passed to `on`.

## Hint 4 — emit(event, ...args)
Look up the array for `event`. If none exists (nobody's subscribed), do
nothing. Otherwise, call every listener in the array, in registration
order, spreading `args` into each call: `listener(...args)`.

## Hint 5 — A subtle bug to avoid
If a listener, while being called during `emit`, calls `off` to unsubscribe
itself (or another listener) — mutating the array you're currently
iterating over — you can skip a listener or throw depending on how you
iterate. Iterating over a **copy** of the listeners array inside `emit`
(`[...listeners].forEach(...)`) sidesteps this entirely. This is the kind
of edge case interviewers love to probe with "what if a listener
unsubscribes itself?"

## Complexity target
`on`/`off`: O(1) amortized for `on` (array push), O(n) for `off` (has to
find/filter the listener among n listeners for that event).
`emit`: O(n) where n is the number of listeners registered for that event.
