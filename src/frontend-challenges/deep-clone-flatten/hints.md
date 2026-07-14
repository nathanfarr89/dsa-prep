# Hints: Deep Clone & Flatten a Nested Object

## deepClone(value)

### Hint 1 — The base case
If `value` isn't an object at all (it's a string, number, boolean, `null`,
or `undefined`), there's nothing to clone — primitives are copied by value
automatically in JS, so just return `value` as-is. This is your recursion's
stopping point.

### Hint 2 — Arrays vs. objects need different reconstruction
- If `Array.isArray(value)`, build a new array by mapping each element
  through `deepClone` recursively.
- Otherwise (a plain object), build a new object, and for each key, set
  `result[key] = deepClone(value[key])`.

### Hint 3 — Why not `JSON.parse(JSON.stringify(value))`?
It's a common one-liner "shortcut" people mention, and it's worth knowing
its limits: it silently drops `undefined` values and functions, turns
`Date` objects into strings, can't handle circular references, and loses
`Map`/`Set`/`RegExp`. Interviewers who ask you to *implement* deepClone
usually want to see you handle it manually — mentioning the JSON trick's
limitations shows you know why the manual version is being asked for.

### Hint 4 — A `typeof value === 'object' && value !== null` guard
Remember `typeof null === 'object'` in JS — check for `null` explicitly
before treating something as an object to recurse into, or you'll try to
read keys off `null` and crash.

---

## flattenObject(obj)

### Hint 1 — What decides whether to recurse further or stop?
At each key, look at its value: if it's a nested plain object, you need to
keep going deeper (with the key path so far tracked). If it's a leaf value
(anything else — including arrays, which you can treat as a leaf value
here), that's where a result entry gets written.

### Hint 2 — Threading the path down
Write a helper that takes the object being flattened *and* the "path
prefix" accumulated so far (starting as `""`). For each key: compute
`newPath = prefix ? `${prefix}.${key}` : key`. If the value at that key is
a nested object, recurse into it with `newPath` as the new prefix. If not,
write `result[newPath] = value` directly.

### Hint 3 — Skeleton
```
function flatten(obj, prefix, result):
  for key in obj:
    path = prefix ? `${prefix}.${key}` : key
    value = obj[key]
    if isPlainObject(value):
      flatten(value, path, result)
    else:
      result[path] = value
  return result
```

## Complexity target
Both: O(n) where n is the total number of keys/values across the entire
nested structure — each value is visited exactly once.
