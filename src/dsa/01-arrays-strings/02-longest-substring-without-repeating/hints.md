# Hints: Longest Substring Without Repeating Characters

## Hint 1 — Clarify first
Is the string ASCII-only or full Unicode? Case-sensitive? Assume case
sensitive, standard characters, and that "substring" means contiguous
(unlike "subsequence", which wouldn't need to be contiguous).

## Hint 2 — Recognize the pattern
"Longest/shortest contiguous run in an array or string satisfying some
condition" is the signature of a **sliding window**: you keep a window
`[left, right]` that expands and shrinks as you scan once through the input.

## Hint 3 — What state do you need?
You need to know, in O(1), whether the current window already contains a
given character. A `Set<string>` (or a `Map<string, number>` of last-seen
index) of characters currently in the window gives you that.

## Hint 4 — The window logic
- Expand `right` one step at a time, adding `s[right]` to your set.
- If `s[right]` is already in the set, shrink from `left` (removing
  characters from the set) until the duplicate is gone.
- After each step, the window `[left, right]` is duplicate-free — track its
  size as a candidate answer.

## Hint 5 — A faster variant
Instead of shrinking one step at a time, store `Map<char, lastIndexSeen>`.
When you hit a repeat, jump `left` directly to `lastIndexSeen + 1` (but only
if that's forward of the current `left` — the repeat might be outside the
current window). This turns the "shrink" loop into O(1) per step.

## Complexity target
Time: O(n) — each character is added and removed from the window at most once.
Space: O(min(n, alphabet size)) — the set/map holds at most one entry per
distinct character.
