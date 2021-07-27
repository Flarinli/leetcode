//first way
const buildCharObject = (str) => {
  let charObj = {}
  str = str.toLowerCase().replace(/[^\w]/g)

  for (char of str) charObj[char] = charObj[char]++ || 1

  return charObj
}
const isAnagram = (first, second) => {
  if (first.length != second.length) return false
  const charObj1 = buildCharObject(first)
  const charObj2 = buildCharObject(second)

  if (Object.keys(charObj1).length !== Object.keys(charObj2).length) {
    return false
  }
  for (let char in charObj1) {
    if (charObj1[char] !== charObj2[char]) return false
  }
  return true
}

console.log(isAnagram('friend', 'Finder'))

// second way - oneliner
const isAnagram2 = (a, b) =>
  [...a.toLowerCase()].sort().toString() ===
  [...b.toLowerCase()].sort().toString()

console.log(isAnagram2('friend', 'Finder'))
