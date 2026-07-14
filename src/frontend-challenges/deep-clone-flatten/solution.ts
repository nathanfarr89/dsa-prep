/**
 * Solution: Deep Clone & Flatten a Nested Object
 */

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function deepClone<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item)) as unknown as T
  }

  if (isPlainObject(value)) {
    const result: Record<string, unknown> = {}
    for (const key of Object.keys(value)) {
      result[key] = deepClone(value[key])
    }
    return result as T
  }

  // Primitive (string, number, boolean, null, undefined) — copied by value.
  return value
}

export function flattenObject(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  function flatten(current: Record<string, unknown>, prefix: string): void {
    for (const key of Object.keys(current)) {
      const path = prefix ? `${prefix}.${key}` : key
      const value = current[key]

      if (isPlainObject(value)) {
        flatten(value, path)
      } else {
        result[path] = value
      }
    }
  }

  flatten(obj, '')
  return result
}
