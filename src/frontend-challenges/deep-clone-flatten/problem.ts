/**
 * Challenge: Deep Clone & Flatten a Nested Object
 * Difficulty: Medium (a very common "write a utility function" frontend
 * question — real-world versions of this show up as lodash's `cloneDeep`
 * and `flatten`/dot-path helpers for form state or config objects)
 *
 * deepClone(value):
 *   Returns a deep copy of `value` — nested objects and arrays must be
 *   copied recursively, not just shallow-referenced. Mutating the clone
 *   must NOT affect the original, at any depth. Primitives (string,
 *   number, boolean, null, undefined) can be returned as-is.
 *
 * Example:
 *   const original = { a: 1, nested: { b: [1, 2, { c: 3 }] } }
 *   const clone = deepClone(original)
 *   clone.nested.b[2].c = 999
 *   original.nested.b[2].c // still 3
 *
 * flattenObject(obj):
 *   Given a nested plain object, return a single-level object where each
 *   key is the dot-joined path to a leaf value.
 *
 * Example:
 *   flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } })
 *   -> { "a": 1, "b.c": 2, "b.d.e": 3 }
 *
 * Both problems are "recursion on real JS data" instead of on numbers/trees
 * — the exact same base-case + recurse + combine shape from the DSA
 * recursion topic, just applied to `typeof value === 'object'` instead of
 * a TreeNode.
 */

export function deepClone<T>(value: T): T {
  // TODO: implement
  throw new Error('Not implemented')
}

export function flattenObject(obj: Record<string, unknown>): Record<string, unknown> {
  // TODO: implement
  throw new Error('Not implemented')
}
