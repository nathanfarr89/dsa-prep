/**
 * Solution: Group Anagrams
 * Approach: Bucket strings by a canonical key. Here the key is the string's
 * characters sorted alphabetically, since anagrams always sort to the same
 * result.
 * Time: O(n * k log k) — n strings, each sorted in O(k log k) for length k.
 * Space: O(n * k) — every original string is stored once in the map.
 */

function canonicalKey(str: string): string {
  return str.split('').sort().join('')
}

export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>()

  for (const str of strs) {
    const key = canonicalKey(str)
    const group = groups.get(key)

    if (group) {
      group.push(str)
    } else {
      groups.set(key, [str])
    }
  }

  return Array.from(groups.values())
}
