# Frontend Interview Prep

A hands-on repo for practicing the two things frontend interviews keep
throwing at you: **data structures & algorithms** (not your day job, but
still asked) and **build a small app** prompts (very much your day job).
TypeScript + React + Vitest.

**Live flashcards (works on your phone, no setup):**
https://nathanfarr89.github.io/dsa-prep/ — open it, tap "Flashcards", and
review patterns/complexity/gotchas away from a keyboard. Progress ("Got
it" vs "Still learning") is saved per-device in `localStorage`.

## Setup

```bash
npm install
npm run dev     # runs the app shell at localhost — browse the card game live
npm test        # runs every exercise's tests once
npm run test:watch
npm run build   # typechecks the whole project (tsc -b) and builds
```

## How each exercise is organized

Every problem/challenge folder has the same three files:

| File | Purpose |
|---|---|
| `problem.ts(x)` | The function/component stub you implement. Has a `// TODO` and throws `Not implemented` until you fill it in. |
| `hints.md` | Tiered hints — read one at a time, not all at once. Last hint states the target time/space complexity. |
| `solution.ts(x)` | A reference implementation with the approach and complexity explained in a comment. Only look after you've genuinely tried. |
| `problem.test.ts(x)` | Tests that import from `problem.ts`, not `solution.ts`. They **fail on purpose** until you implement the function — that's the point, not a bug. Run `npm test` to see where you stand. |

Recommended loop per problem: read `problem.ts` → attempt it → run
`npm run test:watch` and iterate → stuck for a while? read one hint at a
time from `hints.md` → compare your finished version against `solution.ts`
→ say the time/space complexity out loud before moving on.

## What's here

**Data structures & algorithms** (`src/dsa/`), roughly in the order to
study them:

0. `00-big-o` — read this first, no exercise (complexity vocabulary)
1. `01-arrays-strings` — two pointers, sliding window
2. `02-hash-maps-sets` — the single highest-leverage tool in this repo
3. `03-linked-lists` — pointer manipulation, fast/slow pointers
4. `04-stacks-queues` — LIFO/FIFO, amortized cost
5. `05-trees` — recursion, DFS, BFS
6. `06-graphs` — traversal on an implicit grid graph
7. `07-recursion-backtracking` — choose/explore/un-choose
8. `08-sorting-searching` — binary search, merge sort
9. `09-dynamic-programming` — memoization, the same idea behind `useMemo`

**Frontend challenges** (`src/frontend-challenges/`) — the "build a small
app/utility" style of question:

- `card-game` — deck creation, Fisher-Yates shuffle, dealing a hand, wired
  to a React component (also rendered live via `npm run dev`)
- `debounce-throttle` — the two most-asked timing-control functions
- `event-emitter` — pub/sub, the mechanism under a lot of state management
- `deep-clone-flatten` — recursion applied to real JS objects instead of a
  textbook tree

**Flashcards** (`src/flashcards/`) — a quiz-style review mode built from
this repo's content (`data.ts` holds ~70 cards: patterns, complexity, and
gotchas per topic, not pasted solutions). Accessible via the "Flashcards"
tab in the app, both locally (`npm run dev`) and on the deployed GitHub
Pages site. Deck filtering, shuffle, and "only show what I haven't
mastered yet" all persist across sessions via `localStorage`, so it's
usable one-handed on a phone.

## Deploying to GitHub Pages

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds
the app and publishes it to GitHub Pages automatically — no local build
step needed. Two one-time setup items if you fork/reuse this:

1. In the repo's **Settings → Pages**, set "Source" to **GitHub Actions**
   (only needs doing once — I can't flip this from the CLI, it requires
   repo owner access in the GitHub UI).
2. If you rename the repo away from `dsa-prep`, update the `base` path in
   [`vite.config.ts`](vite.config.ts) to match (GitHub Pages project sites
   are served from `https://<user>.github.io/<repo-name>/`, so the app's
   asset paths need that prefix).

Note the deploy workflow only runs typecheck + build, not `npm test` —
the DSA/frontend-challenge stubs are *meant* to throw `Not implemented`
until solved, so gating deploys on the test suite would keep it perpetually
red.

## How to think about a DSA problem in an interview

A repeatable process beats knowing 200 individual problems by heart —
interviewers are grading the process at least as much as the final answer.

1. **Clarify before coding.** Restate the problem in your own words. Ask
   about edge cases the prompt didn't cover: empty input, duplicates,
   negative numbers, what "sorted" or "unique" is guaranteed. This alone
   filters out a large fraction of "wrong answer" outcomes.
2. **Work a small example by hand.** Actually trace through a tiny input
   before writing code — it's how you catch a wrong mental model early
   instead of after 10 minutes of typing.
3. **Say the brute force out loud, even if you won't write it.** It proves
   you can solve *something*, and naming its complexity ("this is O(n²)
   because of the nested loop") sets up the improvement you're about to
   make.
4. **Name the pattern, then reach for its data structure.** See the table
   below — most interview problems are a known pattern wearing a
   different costume.
5. **Code it, narrating as you go.** Silence is worse than an imperfect
   description of what you're about to try.
6. **Test it against your own example, then state complexity.** Don't wait
   to be asked "what's the Big-O" — volunteering it reads as more senior.

## Pattern recognition — what clue points to what technique

| If you notice... | Reach for... | Example in this repo |
|---|---|---|
| "have I seen this value/pair before?", need O(1) lookups | Hash map / Set | [two-sum](src/dsa/02-hash-maps-sets/01-two-sum), [group-anagrams](src/dsa/02-hash-maps-sets/02-group-anagrams) |
| Longest/shortest contiguous run in an array/string | Sliding window | [longest-substring](src/dsa/01-arrays-strings/02-longest-substring-without-repeating) |
| Sorted input, "find X" | Binary search | [binary-search](src/dsa/08-sorting-searching/01-binary-search) |
| Comparing from both ends inward | Two pointers | [valid-palindrome](src/dsa/01-arrays-strings/01-valid-palindrome) |
| "Most recent X must be resolved first" | Stack | [valid-parentheses](src/dsa/04-stacks-queues/01-valid-parentheses) |
| "Process in the order discovered, layer by layer" | Queue / BFS | [level-order-traversal](src/dsa/05-trees/02-level-order-traversal), [number-of-islands](src/dsa/06-graphs/01-number-of-islands) |
| Nested/self-similar structure (tree, nested object, JSX) | Recursion (base case + recurse + combine) | [max-depth](src/dsa/05-trees/01-max-depth), [deep-clone](src/frontend-challenges/deep-clone-flatten) |
| "Try every combination/arrangement" | Backtracking | [subsets](src/dsa/07-recursion-backtracking/01-subsets) |
| Detect a loop / find a middle element in one pass | Fast & slow pointers | [linked-list-cycle](src/dsa/03-linked-lists/02-linked-list-cycle) |
| Overlapping subproblems, "fewest/most ways to..." | Dynamic programming | [climbing-stairs](src/dsa/09-dynamic-programming/01-climbing-stairs), [coin-change](src/dsa/09-dynamic-programming/02-coin-change) |
| 2D grid, connected regions | Graph BFS/DFS ("flood fill") | [number-of-islands](src/dsa/06-graphs/01-number-of-islands) |

## Big-O cheat sheet

See [`src/dsa/00-big-o/NOTES.md`](src/dsa/00-big-o/NOTES.md) for the full
write-up. The short version, fastest to slowest:

`O(1)` constant → `O(log n)` logarithmic (binary search) → `O(n)` linear →
`O(n log n)` (good sorting) → `O(n²)` quadratic (nested loops) →
`O(2ⁿ)` exponential (naive recursion) → `O(n!)` factorial (permutations)

The single most common trap for frontend engineers: `array.includes()`,
`.indexOf()`, and `.find()` are all O(n). Calling one of them inside a loop
over another array is an easy, easy-to-miss way to accidentally write
O(n²) code that looks fine on small test data and falls over on a real
dataset.

## Where DSA quietly shows up in frontend work

This is the connective tissue between "algorithm interview" and "the job":

- **Hash maps** → memoized selectors, deduping API results, `useMemo`/
  `useCallback` dependency comparisons, normalizing state (entities keyed
  by id instead of stored in an array).
- **Recursion** → walking the DOM, walking a JSX/component tree, deeply
  nested form/config objects (see `deep-clone-flatten`), recursive
  component rendering (comment threads, file trees, nested menus).
- **BFS/queues** → rendering priority, "find nearest visible ancestor"
  style DOM walks, and `number-of-islands`-style flood fill (paint bucket
  tools, connected-region selection in a grid UI).
- **Dynamic programming (memoization)** → this *is* what `useMemo`,
  `React.memo`, and a hand-rolled cache are doing: don't recompute what you
  already computed for the same inputs.
- **Stacks** → undo/redo history, matching/validating nested markup or
  brackets in a parser, the call stack itself (why deep recursion on a
  huge tree can blow it).
- **Two pointers / sliding window** → validating input strings, virtualized
  list windowing (only rendering the visible slice of a long list).

## For the "build a small app" style question

`src/frontend-challenges/card-game` is the flagship example (deck
creation, shuffle, deal — a very common live-coding prompt), but the same
approach applies to any of these prompts:

1. **Model the data first**, before writing any UI. What is a "card"? What
   is a "deck"? Get the types/shape right before touching `useState`.
2. **Keep the logic pure and separate from the component.** `createDeck`,
   `shuffleDeck`, and `dealHand` are plain functions with no React in them
   — that's what makes them independently testable (see
   `card-game/problem.test.tsx`) and what makes the component itself thin.
3. **State should hold only what the UI needs to redraw**, not every
   intermediate value you computed along the way.
4. **Know the "obvious but wrong" version and why it's wrong.** For
   shuffling, that's `array.sort(() => Math.random() - 0.5)` — it looks
   right and produces a biased, non-uniform shuffle. Interviewers who know
   the domain will ask about this directly; see `card-game/hints.md`.
5. **Don't mutate what you were handed.** `shuffleDeck` and `dealHand`
   both return new arrays rather than mutating their input — a detail
   reviewers specifically check for.
