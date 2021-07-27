const palindrome1 = (s) => {
  s = s.toLowerCase().replace(/\s/g, '')
  return s === s.split('').reverse().join('')
}
const palindrome2 = (s) => {
  s = s.toLowerCase().replace(/\s/g, '')
  const len_ = Math.floor(s.length / 2)
  for (let i = 0; i < len_; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
}

const inp1 = 'racecar'
const inp2 = 'table'
const inp3 = 'А роза упала на лапу Азора'

console.log(palindrome1(inp1))
console.log(palindrome1(inp2))
console.log(palindrome1(inp3))

console.log(palindrome2(inp1))
console.log(palindrome2(inp2))
console.log(palindrome2(inp3))
