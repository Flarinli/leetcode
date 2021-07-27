// Сложность алгоритма O(n), сложность по памяти O(1),
// т.к. фиксированное количество букв в алфавите
const firstUniqChar = (s) => {
  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    let cur = s[i]

    if (map.has(cur)) {
      map.set(cur, map.get(cur) + 1)
    } else {
      map.set(cur, 1)
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i
  }
  return -1
}

const inp1 = 'leetcode' //0
const inp2 = 'loveleetcode' // 2
const inp3 = 'aabb' // -1

console.log(firstUniqChar(inp1))
console.log(firstUniqChar(inp2))
console.log(firstUniqChar(inp3))
