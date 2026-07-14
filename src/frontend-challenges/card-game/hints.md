# Hints: Card Game — Deck, Shuffle, Deal

## Part 1 — createDeck()

### Hint 1.1
A deck is the Cartesian product of suits and ranks: every suit paired with
every rank. Two nested loops (or `SUITS.flatMap(suit => RANKS.map(rank =>
...))`) gives you all 52 combinations.

### Hint 1.2
Order doesn't matter yet — `shuffleDeck` is a separate step. Build it in
any fixed, deterministic order (e.g. all spades 2→A, then all hearts, etc.).
This determinism is actually useful: it makes `createDeck` trivial to unit
test (fixed expected output, no randomness involved).

---

## Part 2 — shuffleDeck(deck)

### Hint 2.1 — The tempting-but-wrong approach
`deck.slice().sort(() => Math.random() - 0.5)` looks like it shuffles, and
it's a very common thing people reach for. **It doesn't produce a uniform
shuffle.** `Array.sort`'s comparator isn't guaranteed to be called on every
pair, and different engines' sort implementations bias the result — some
orderings become more likely than others. It's a good thing to know
*not* to reach for, and a great thing to bring up if an interviewer asks
"is there a problem with this approach?"

### Hint 2.2 — Fisher-Yates, the correct O(n) shuffle
Walk the array **backwards**, from the last index to index 1. At each
index `i`, pick a random index `j` in the range `[0, i]` (inclusive), and
swap `deck[i]` and `deck[j]`. By the time you reach the front, every
position has had a fair, uniformly random chance of ending up with any
card.

```
for i from length-1 down to 1:
  j = random integer in [0, i]
  swap deck[i] and deck[j]
```

### Hint 2.3 — Don't mutate the input
Copy the array first (`const result = [...deck]`) and shuffle the copy.
Mutating a parameter you were handed is a common "gotcha" reviewers look
for — the caller may still hold a reference to the original deck and not
expect it to change.

### Hint 2.4 — Random integer in a range
`Math.floor(Math.random() * (max + 1))` gives you a uniformly random
integer in `[0, max]`.

---

## Part 3 — dealHand(deck, handSize)

### Hint 3.1
This is just splitting an array in two without mutating the original:
`deck.slice(0, handSize)` for the hand, `deck.slice(handSize)` for what's
left. `Array.prototype.slice` already returns a new array, so you get the
no-mutation requirement for free here.

### Hint 3.2 — Edge case to consider
What if `handSize` is larger than the deck? `slice` won't throw — it just
returns as many elements as exist. Decide (and be ready to explain) whether
that silent "shorter hand than requested" behavior is acceptable, or
whether you'd want to throw/guard against it explicitly.

---

## Part 4 — <CardGame /> component

### Hint 4.1 — What state do you actually need?
Just two pieces: the current `hand: Card[]` (starts as `[]`), and how many
cards are left in the deck (`number`, starts at 0 or 52 — your call).
Don't store the full shuffled deck in state if you don't render it; state
should hold only what the UI needs to redraw.

### Hint 4.2 — The button handler
```
function handleShuffleAndDeal() {
  const deck = shuffleDeck(createDeck())
  const { hand, remainingDeck } = dealHand(deck, HAND_SIZE)
  setHand(hand)
  setRemainingCount(remainingDeck.length)
}
```

### Hint 4.3 — Rendering the hand
Map over `hand`, rendering `cardLabel(card)` for each — a `<ul>`/`<li>` list
is enough, this isn't a styling exercise. Give each `<li>` a stable `key`
(e.g. `${card.suit}-${card.rank}`, which is unique per card in a
single-deck game).

## Complexity target
`createDeck`: O(1) (always exactly 52 cards).
`shuffleDeck`: O(n) time, O(n) space (for the copy).
`dealHand`: O(handSize) time (slicing), O(n) space.
