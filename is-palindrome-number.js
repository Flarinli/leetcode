const isPalindromeNumber = (x) => {
  if (x < 0) return false
  if (x % 10 === 0) return false
  if (x < 10) return true

  let rev = 0
  while (x > rev) {
    rev *= 10
    rev += x % 10
    x = Math.trunc(x / 10)
  }
  return x === rev || x === Math.trunc(rev / 10)
}

const inp1 = 121 // true
const inp2 = -121 // false
const inp3 = 10 // false

console.log(isPalindromeNumber(inp1))
console.log(isPalindromeNumber(inp2))
console.log(isPalindromeNumber(inp3))
