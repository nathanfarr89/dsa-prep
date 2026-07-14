# Hints: Implement a Queue Using Two Stacks

## Hint 1 — Why two stacks?
A single stack reverses order (last in, first out). If you push everything
onto a stack and then pop it all onto a *second* stack, the second stack's
pop order is now the *original* insertion order (first in, first out) —
reversing twice restores the original order. That's the whole trick.

## Hint 2 — Give the two stacks roles
- `inStack` — where `enqueue` always pushes new values.
- `outStack` — where `dequeue`/`peek` pop values from.

## Hint 3 — The transfer step
`dequeue`/`peek` should only look at `outStack`. If `outStack` is empty,
pop everything off `inStack` and push it onto `outStack` (this reverses the
order), *then* operate on `outStack`. If `outStack` already has items,
don't touch `inStack` — just use what's on top of `outStack`.

## Hint 4 — Why is this "amortized" O(1) and not just O(n)?
Any individual element only ever gets moved from `inStack` to `outStack`
once, no matter how many times you call `dequeue`. So across a sequence of
`n` enqueues and `n` dequeues, the total work is O(n), which averages out
("amortizes") to O(1) per call — even though the call that triggers the
transfer looks like O(n) in isolation. This is a great thing to say out
loud in an interview.

## Hint 5 — size()
Track it explicitly (increment on enqueue, decrement on dequeue), or return
`inStack.length + outStack.length` — either works.

## Complexity target
Time: Amortized O(1) per operation.
Space: O(n) for the two stacks combined.
