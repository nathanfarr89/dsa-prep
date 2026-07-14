# Hints: Binary Search

## Hint 1 — Why is "sorted" the whole trick?
Sorted order lets you eliminate half the remaining search space with a
single comparison: check the middle element — if it's too big, the target
(if present) must be to the left; if too small, it must be to the right.
Repeating this halves the search space each time, giving O(log n).

## Hint 2 — Maintain a shrinking window
Track `left = 0` and `right = nums.length - 1` — the inclusive bounds of
where the target could still be. Loop while `left <= right`.

## Hint 3 — Watch the midpoint calculation
`const mid = Math.floor((left + right) / 2)` works, but
`left + Math.floor((right - left) / 2)` is the version to know about — it
avoids integer overflow in languages with fixed-size integers (not an issue
in JS numbers, but interviewers sometimes ask why this form exists).

## Hint 4 — Three-way comparison
At `mid`:
- `nums[mid] === target` → found it, return `mid`.
- `nums[mid] < target` → target must be to the right, so `left = mid + 1`.
- `nums[mid] > target` → target must be to the left, so `right = mid - 1`.

## Hint 5 — When to give up
If the loop ends (`left > right`), the target isn't in the array — return
`-1`.

## Complexity target
Time: O(log n) — the search space halves each iteration.
Space: O(1) iterative (O(log n) if you write it recursively, from the call
stack).
