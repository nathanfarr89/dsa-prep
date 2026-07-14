# Hints: Coin Change

## Hint 1 — Why greedy fails
Greedy picks the largest coin ≤ remaining amount, repeatedly. That's
correct for denominations like US coins, but not in general (see the
[1,3,4] making 6 example in the problem file). Since the problem doesn't
guarantee "nice" denominations, you need to actually consider all options,
which is what DP does systematically.

## Hint 2 — Define the subproblem
Let `minCoins(amount)` = the fewest coins needed to make exactly `amount`.
You want `minCoins(total)`.

## Hint 3 — The recurrence
For a given `amount`, try using each coin `c` as the *last* coin you add:
if you use coin `c`, you need `1 + minCoins(amount - c)` coins total (as
long as `amount - c >= 0`). Try every coin and take the minimum:
`minCoins(amount) = min over all coins c of (1 + minCoins(amount - c))`.

## Hint 4 — Base case and "impossible" tracking
`minCoins(0) = 0` (zero coins needed to make zero). For amounts that can't
be made with any combination, you need a way to represent "impossible" —
using `Infinity` as a sentinel works well, since `1 + Infinity` stays
`Infinity` and never wins a `Math.min` comparison. Convert any remaining
`Infinity` at the target amount to `-1` before returning.

## Hint 5 — Bottom-up table
Build an array `minCoinsForAmount` of size `total + 1`, where
`minCoinsForAmount[0] = 0` and everything else starts at `Infinity`. Fill it
in order from `1` to `total`; for each amount, loop over every coin
denomination and apply the recurrence. By the time you reach `total`, every
smaller amount it depends on has already been computed.

## Complexity target
Time: O(total * numberOfDenominations) — for each of the `total` amounts,
try every coin.
Space: O(total) for the DP table.
