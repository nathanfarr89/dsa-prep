# Hints: Merge Sort

## Hint 1 — The two halves of "divide and conquer"
**Divide**: split the array into two halves. **Conquer**: recursively sort
each half. Then there's a third step people forget to name: **combine** —
merge the two now-sorted halves back into one sorted array. That merge
step is where the actual "work" happens.

## Hint 2 — Base case
An array of length 0 or 1 is trivially already sorted — return it as-is.
This is what stops the recursion.

## Hint 3 — The merge step, in detail
Given two already-sorted arrays `left` and `right`, walk both with a
pointer each (`i` for left, `j` for right). At each step, compare
`left[i]` and `right[j]`, push the smaller one into the result, and advance
that pointer. When one side runs out, append whatever's left of the other
side (it's already sorted, so no more comparisons are needed).

## Hint 4 — Putting it together
```
function mergeSort(nums):
  if nums.length <= 1: return nums
  mid = Math.floor(nums.length / 2)
  left = mergeSort(nums.slice(0, mid))
  right = mergeSort(nums.slice(mid))
  return merge(left, right)
```

## Hint 5 — Why O(n log n)?
The array is halved at each level of recursion, so there are O(log n)
levels. At each level, merging touches every element exactly once, so each
level costs O(n) total work. O(log n) levels × O(n) per level = O(n log n).

## Complexity target
Time: O(n log n) — always, regardless of input order (unlike quicksort's
worst case).
Space: O(n) — the merge step allocates new arrays; this is not an in-place
sort.
