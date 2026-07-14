/**
 * Flashcard content distilled from src/dsa and src/frontend-challenges —
 * the hints, solution approaches, and gotchas, turned into recall
 * questions instead of pasted code. Each deck maps to a topic folder.
 */

export interface Flashcard {
  id: string
  deck: string
  front: string
  back: string
}

export const DECKS = [
  'Big-O & Complexity',
  'Pattern Recognition',
  'Arrays & Strings',
  'Hash Maps & Sets',
  'Linked Lists',
  'Stacks & Queues',
  'Trees',
  'Graphs',
  'Recursion & Backtracking',
  'Sorting & Searching',
  'Dynamic Programming',
  'Frontend Challenges',
] as const

export const CARDS: Flashcard[] = [
  // ---------------------------------------------------------------- Big-O
  {
    id: 'bigo-1',
    deck: 'Big-O & Complexity',
    front: 'What does O(n) mean, in plain language?',
    back: 'Work grows linearly with input size — double the input, roughly double the work.',
  },
  {
    id: 'bigo-2',
    deck: 'Big-O & Complexity',
    front: 'Time complexity of a Map/Set get/set/has (average case)?',
    back: 'O(1)',
  },
  {
    id: 'bigo-3',
    deck: 'Big-O & Complexity',
    front: 'Time complexity of array.includes() / .indexOf() / .find()?',
    back: 'O(n) — it has to scan the array linearly.',
  },
  {
    id: 'bigo-4',
    deck: 'Big-O & Complexity',
    front: 'Time complexity of binary search on a sorted array?',
    back: 'O(log n)',
  },
  {
    id: 'bigo-5',
    deck: 'Big-O & Complexity',
    front: 'Time complexity of Array.prototype.sort() in most engines?',
    back: 'O(n log n)',
  },
  {
    id: 'bigo-6',
    deck: 'Big-O & Complexity',
    front: 'What is the classic "accidentally O(n²)" bug in frontend code?',
    back: 'Calling an O(n) array method (.includes/.indexOf/.find) inside a loop over another array — e.g. filtering a list by checking membership in another list without a Set/Map.',
  },
  {
    id: 'bigo-7',
    deck: 'Big-O & Complexity',
    front: 'Time and space complexity of naive recursive Fibonacci?',
    back: 'O(2^n) time (exponential — recomputes the same subproblems repeatedly), O(n) space (call stack depth).',
  },
  {
    id: 'bigo-8',
    deck: 'Big-O & Complexity',
    front: 'What does memoization cost in space, and what does it buy you?',
    back: 'O(n) extra space for the cache (plus call stack). It buys you O(n) time instead of O(2^n) — trading space for time.',
  },
  {
    id: 'bigo-9',
    deck: 'Big-O & Complexity',
    front: 'Why is array.unshift() O(n) instead of O(1)?',
    back: 'It has to shift every existing element over by one to make room at the front.',
  },
  {
    id: 'bigo-10',
    deck: 'Big-O & Complexity',
    front: 'What should you volunteer right after finishing a solution, even if not asked?',
    back: "The time and space complexity, stated as a sentence explaining *why* — not just the letter (e.g. \"O(n) because one pass with O(1) map lookups\").",
  },

  // ------------------------------------------------------- Pattern Recognition
  {
    id: 'pattern-1',
    deck: 'Pattern Recognition',
    front: '"Have I seen this value/pair before?", need O(1) lookups — what technique?',
    back: 'Hash map / Set',
  },
  {
    id: 'pattern-2',
    deck: 'Pattern Recognition',
    front: 'Longest/shortest contiguous run in an array or string — what technique?',
    back: 'Sliding window',
  },
  {
    id: 'pattern-3',
    deck: 'Pattern Recognition',
    front: 'Sorted input + "find X" — what technique?',
    back: 'Binary search',
  },
  {
    id: 'pattern-4',
    deck: 'Pattern Recognition',
    front: 'Comparing from both ends of a string/array inward — what technique?',
    back: 'Two pointers',
  },
  {
    id: 'pattern-5',
    deck: 'Pattern Recognition',
    front: '"Most recent X must be resolved first" (nesting/matching) — what technique?',
    back: 'Stack',
  },
  {
    id: 'pattern-6',
    deck: 'Pattern Recognition',
    front: '"Process in the order discovered, layer by layer" — what technique?',
    back: 'Queue / BFS',
  },
  {
    id: 'pattern-7',
    deck: 'Pattern Recognition',
    front: 'Nested/self-similar structure (tree, nested object, JSX) — what technique?',
    back: 'Recursion (base case + recurse + combine)',
  },
  {
    id: 'pattern-8',
    deck: 'Pattern Recognition',
    front: '"Try every combination/arrangement" — what technique?',
    back: 'Backtracking (choose / explore / un-choose)',
  },
  {
    id: 'pattern-9',
    deck: 'Pattern Recognition',
    front: 'Detect a loop, or find a middle element, in one pass over a linked list — what technique?',
    back: 'Fast & slow pointers (Floyd\'s Tortoise and Hare)',
  },
  {
    id: 'pattern-10',
    deck: 'Pattern Recognition',
    front: 'Overlapping subproblems, "fewest/most ways to..." — what technique?',
    back: 'Dynamic programming',
  },
  {
    id: 'pattern-11',
    deck: 'Pattern Recognition',
    front: '2D grid, connected regions — what technique?',
    back: 'Graph BFS/DFS ("flood fill")',
  },

  // ------------------------------------------------------- Arrays & Strings
  {
    id: 'arrays-1',
    deck: 'Arrays & Strings',
    front: 'Valid Palindrome — what\'s the O(1)-space approach?',
    back: 'Two pointers from both ends, skipping non-alphanumeric characters, comparing lowercased characters, moving inward until they cross.',
  },
  {
    id: 'arrays-2',
    deck: 'Arrays & Strings',
    front: 'Valid Palindrome — time/space complexity of the two-pointer approach?',
    back: 'O(n) time, O(1) space.',
  },
  {
    id: 'arrays-3',
    deck: 'Arrays & Strings',
    front: 'Longest Substring Without Repeating Characters — what\'s the approach?',
    back: 'Sliding window with a Map of char -> last-seen index; when you hit a repeat, jump `left` directly past the duplicate instead of shrinking one step at a time.',
  },
  {
    id: 'arrays-4',
    deck: 'Arrays & Strings',
    front: 'Longest Substring Without Repeating Characters — complexity?',
    back: 'O(n) time, O(min(n, alphabet size)) space.',
  },
  {
    id: 'arrays-5',
    deck: 'Arrays & Strings',
    front: 'Longest Substring Without Repeating Characters — what\'s the edge case with the left pointer jump?',
    back: 'Only move `left` forward if the duplicate\'s last-seen index is >= left — otherwise a duplicate from *outside* the current window would incorrectly move `left` backwards.',
  },

  // ------------------------------------------------------- Hash Maps & Sets
  {
    id: 'hashmap-1',
    deck: 'Hash Maps & Sets',
    front: 'Two Sum — what\'s the O(n) approach?',
    back: 'One pass with a Map from value -> index; at each element check whether `target - nums[i]` is already a key before inserting the current value.',
  },
  {
    id: 'hashmap-2',
    deck: 'Hash Maps & Sets',
    front: 'Two Sum — complexity?',
    back: 'O(n) time, O(n) space.',
  },
  {
    id: 'hashmap-3',
    deck: 'Hash Maps & Sets',
    front: 'Two Sum — why check the map *before* inserting the current element?',
    back: 'So you don\'t accidentally pair a value with itself unless it legitimately appears twice in the array.',
  },
  {
    id: 'hashmap-4',
    deck: 'Hash Maps & Sets',
    front: 'Group Anagrams — what\'s the approach?',
    back: 'Bucket strings by a canonical key (sorted characters, or a character frequency count) using a Map<key, string[]>.',
  },
  {
    id: 'hashmap-5',
    deck: 'Hash Maps & Sets',
    front: 'Group Anagrams — complexity with the sorted-key approach?',
    back: 'O(n * k log k) — n strings, each sorted in O(k log k) for average length k.',
  },

  // ------------------------------------------------------- Linked Lists
  {
    id: 'linkedlist-1',
    deck: 'Linked Lists',
    front: 'Reverse Linked List — what\'s the iterative approach?',
    back: 'Three pointers: prev, current, next. Save `current.next` before overwriting it, point `current.next` back to `prev`, then shift both `prev` and `current` forward.',
  },
  {
    id: 'linkedlist-2',
    deck: 'Linked Lists',
    front: 'Reverse Linked List — complexity, iterative vs recursive?',
    back: 'O(n) time either way. O(1) space iterative; O(n) space recursive (call stack).',
  },
  {
    id: 'linkedlist-3',
    deck: 'Linked Lists',
    front: 'Linked List Cycle Detection — what\'s the O(1)-space approach?',
    back: 'Floyd\'s Tortoise and Hare: a slow pointer moves 1 step, a fast pointer moves 2 steps. If they ever point to the same node, there\'s a cycle.',
  },
  {
    id: 'linkedlist-4',
    deck: 'Linked Lists',
    front: 'Linked List Cycle Detection — why must the two pointers eventually meet if there\'s a cycle?',
    back: 'Once both pointers are inside the cycle, the fast pointer gains one position on the slow one every step — like a faster runner lapping a slower one on a circular track.',
  },
  {
    id: 'linkedlist-5',
    deck: 'Linked Lists',
    front: 'Linked List Cycle Detection — complexity?',
    back: 'O(n) time, O(1) space.',
  },

  // ------------------------------------------------------- Stacks & Queues
  {
    id: 'stacks-1',
    deck: 'Stacks & Queues',
    front: 'Valid Parentheses — what\'s the approach?',
    back: 'Push opening brackets onto a stack. On a closing bracket, pop and check it matches. Invalid if you pop an empty stack, get a mismatch, or the stack isn\'t empty at the end.',
  },
  {
    id: 'stacks-2',
    deck: 'Stacks & Queues',
    front: 'Valid Parentheses — complexity?',
    back: 'O(n) time, O(n) space.',
  },
  {
    id: 'stacks-3',
    deck: 'Stacks & Queues',
    front: 'Queue Using Two Stacks — what\'s the approach?',
    back: '`inStack` accepts all enqueues. `outStack` serves dequeues/peeks; when `outStack` is empty, drain all of `inStack` into it (reversing order back to FIFO) before continuing.',
  },
  {
    id: 'stacks-4',
    deck: 'Stacks & Queues',
    front: 'Queue Using Two Stacks — why is this "amortized" O(1) and not just O(n) per call?',
    back: 'Each element is moved from inStack to outStack at most once across its whole lifetime, so the total work across n operations is O(n) — averaging to O(1) per call.',
  },

  // ------------------------------------------------------- Trees
  {
    id: 'trees-1',
    deck: 'Trees',
    front: 'Max Depth of Binary Tree — what\'s the recursive approach?',
    back: 'depth(node) = 1 + max(depth(node.left), depth(node.right)). Base case: an empty tree (null) has depth 0.',
  },
  {
    id: 'trees-2',
    deck: 'Trees',
    front: 'Max Depth of Binary Tree — complexity?',
    back: 'O(n) time (every node visited once), O(h) space for the call stack, where h is the tree\'s height.',
  },
  {
    id: 'trees-3',
    deck: 'Trees',
    front: 'Level Order Traversal — what\'s the approach?',
    back: 'BFS with a queue. Before draining a level, snapshot `queue.length` as the current level\'s size, so you can group exactly those nodes\' values together before moving to the next level.',
  },
  {
    id: 'trees-4',
    deck: 'Trees',
    front: 'Level Order Traversal — complexity?',
    back: 'O(n) time, O(n) space (the queue holds up to one level\'s worth of nodes; the result holds every value).',
  },

  // ------------------------------------------------------- Graphs
  {
    id: 'graphs-1',
    deck: 'Graphs',
    front: 'Number of Islands — what\'s the key insight about the input?',
    back: 'A 2D grid is a graph in disguise — each cell is a node, and its up/down/left/right neighbors are its edges.',
  },
  {
    id: 'graphs-2',
    deck: 'Graphs',
    front: 'Number of Islands — what\'s the approach?',
    back: 'Scan every cell. On an unvisited land cell, increment the island count and DFS/BFS outward, flipping connected land cells to water so they\'re never recounted.',
  },
  {
    id: 'graphs-3',
    deck: 'Graphs',
    front: 'Number of Islands — complexity?',
    back: 'O(rows * cols) time and space (worst case: an all-land grid, for the recursion stack).',
  },

  // ------------------------------------------------- Recursion & Backtracking
  {
    id: 'backtrack-1',
    deck: 'Recursion & Backtracking',
    front: 'Subsets (power set) — what\'s the backtracking approach?',
    back: 'At each index, branch on include/exclude. Push the element before recursing into "include", pop it after — record a copy of the current subset whenever a full decision path completes.',
  },
  {
    id: 'backtrack-2',
    deck: 'Recursion & Backtracking',
    front: 'Subsets — complexity?',
    back: 'O(n * 2^n) time and space — there are 2^n subsets, each copied in O(n).',
  },
  {
    id: 'backtrack-3',
    deck: 'Recursion & Backtracking',
    front: 'Subsets — why copy with [...currentSubset] before pushing to the results array?',
    back: 'currentSubset is a single shared array mutated throughout the recursion. Pushing the reference itself means every result entry would end up pointing at the same array — which is empty by the time recursion finishes.',
  },

  // ------------------------------------------------------- Sorting & Searching
  {
    id: 'sorting-1',
    deck: 'Sorting & Searching',
    front: 'Binary Search — what\'s the approach?',
    back: 'Maintain a shrinking [left, right] window. Compare nums[mid] to target and discard the half that can\'t contain it.',
  },
  {
    id: 'sorting-2',
    deck: 'Sorting & Searching',
    front: 'Binary Search — complexity?',
    back: 'O(log n) time, O(1) space (iterative).',
  },
  {
    id: 'sorting-3',
    deck: 'Sorting & Searching',
    front: 'Merge Sort — what\'s the approach?',
    back: 'Divide and conquer: split the array in half, recursively sort each half, then merge the two sorted halves with a two-pointer walk.',
  },
  {
    id: 'sorting-4',
    deck: 'Sorting & Searching',
    front: 'Merge Sort — complexity?',
    back: 'O(n log n) time, always, regardless of input order. O(n) space — not in-place.',
  },

  // ------------------------------------------------------- Dynamic Programming
  {
    id: 'dp-1',
    deck: 'Dynamic Programming',
    front: 'Climbing Stairs — what\'s the recurrence?',
    back: 'ways(n) = ways(n-1) + ways(n-2) — the same recurrence as Fibonacci, because your last move was either a 1-step or a 2-step.',
  },
  {
    id: 'dp-2',
    deck: 'Dynamic Programming',
    front: 'Climbing Stairs — why is the naive recursive version exponential, and what fixes it?',
    back: 'It recomputes the same subproblems repeatedly (O(2^n)). Memoization (top-down) or tabulation (bottom-up) fixes it to O(n).',
  },
  {
    id: 'dp-3',
    deck: 'Dynamic Programming',
    front: 'Climbing Stairs — complexity of the bottom-up, two-rolling-variable version?',
    back: 'O(n) time, O(1) space.',
  },
  {
    id: 'dp-4',
    deck: 'Dynamic Programming',
    front: 'Coin Change — why does a greedy "always take the biggest coin" approach fail?',
    back: 'It isn\'t always optimal for arbitrary denominations — e.g. [1,3,4] making 6: greedy gives 4+1+1 = 3 coins, but 3+3 = 2 coins is better.',
  },
  {
    id: 'dp-5',
    deck: 'Dynamic Programming',
    front: 'Coin Change — what\'s the recurrence?',
    back: 'minCoins(amount) = 1 + min over every coin c of minCoins(amount - c), with the base case minCoins(0) = 0.',
  },
  {
    id: 'dp-6',
    deck: 'Dynamic Programming',
    front: 'Coin Change — complexity?',
    back: 'O(total * number of denominations) time, O(total) space.',
  },

  // ------------------------------------------------------- Frontend Challenges
  {
    id: 'fe-1',
    deck: 'Frontend Challenges',
    front: 'Why is `array.sort(() => Math.random() - 0.5)` a broken way to shuffle?',
    back: 'sort()\'s comparator isn\'t guaranteed to be called on every pair, and different engines\' sort implementations bias the result — some orderings become more likely than others. It\'s not a uniform shuffle.',
  },
  {
    id: 'fe-2',
    deck: 'Frontend Challenges',
    front: 'What\'s the correct O(n) shuffle algorithm, and how does it work?',
    back: 'Fisher-Yates: walk backwards from the last index, swapping each element with a uniformly random index in [0, currentIndex].',
  },
  {
    id: 'fe-3',
    deck: 'Frontend Challenges',
    front: 'Why should shuffleDeck/dealHand return new arrays instead of mutating their input?',
    back: 'The caller may still hold a reference to the original array and not expect it to silently change out from under them.',
  },
  {
    id: 'fe-4',
    deck: 'Frontend Challenges',
    front: 'Debounce vs. throttle — one-sentence distinction?',
    back: 'Debounce waits for a pause in activity, then fires once (good for "user stopped typing"). Throttle fires immediately, then ignores activity for a cooldown window (good for continuous events like scroll).',
  },
  {
    id: 'fe-5',
    deck: 'Frontend Challenges',
    front: 'What state does a debounce wrapper need to keep in its closure?',
    back: 'A single pending timeoutId — clear the previous one and start a new one on every call.',
  },
  {
    id: 'fe-6',
    deck: 'Frontend Challenges',
    front: 'What\'s the simplest ("leading edge") throttle strategy?',
    back: 'Track lastCallTimestamp. If now - lastCallTimestamp >= interval, call immediately and update the timestamp; otherwise drop the call.',
  },
  {
    id: 'fe-7',
    deck: 'Frontend Challenges',
    front: 'What data structure powers a pub/sub event emitter?',
    back: 'A Map<eventName, listener[]> — O(1) lookup by event name, an ordered array of listeners per event.',
  },
  {
    id: 'fe-8',
    deck: 'Frontend Challenges',
    front: 'What\'s the subtle bug with a listener unsubscribing itself during emit()?',
    back: 'If emit() iterates the live listeners array while a listener mutates it (via off()), you can skip or double-call listeners. Fix: iterate over a copy, [...listeners].',
  },
  {
    id: 'fe-9',
    deck: 'Frontend Challenges',
    front: 'How does on() return a clean unsubscribe function?',
    back: 'Return a closure that calls `this.off(event, listener)` — reusing the removal logic instead of duplicating it.',
  },
  {
    id: 'fe-10',
    deck: 'Frontend Challenges',
    front: 'Why not just use JSON.parse(JSON.stringify(value)) for a deep clone?',
    back: 'It silently drops undefined values and functions, turns Dates into strings, can\'t handle circular references, and loses Map/Set/RegExp.',
  },
  {
    id: 'fe-11',
    deck: 'Frontend Challenges',
    front: 'What\'s the gotcha when checking "is this a plain object to recurse into"?',
    back: '`typeof null === \'object\'` in JS — you must explicitly exclude null, or you\'ll try to read keys off null and crash.',
  },
  {
    id: 'fe-12',
    deck: 'Frontend Challenges',
    front: 'In flattenObject, how are arrays treated?',
    back: 'As leaf values, not something to recurse into — {a: [1,2,3]} stays {a: [1,2,3]}, it isn\'t exploded into a.0, a.1, a.2.',
  },
]
