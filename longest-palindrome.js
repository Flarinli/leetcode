const longestPalindrome = (s) => {
  const expandFromCenter = (s, L, R) => {
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      L--
      R++
    }
    return R - L - 1
  }

  let start = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromCenter(s, i, i)
    let len2 = expandFromCenter(s, i, i + 1)
    let len_ = Math.max(len1, len2)

    if (len_ > end - start) {
      start = Math.ceil(i - (len_ - 1) / 2)
      end = Math.floor(i + len_ / 2)
    }
  }
  return s.substring(start, end + 1)
}

const inp1 = 'babad' // bab | aba
const inp2 = 'cbbd' // bb
const inp3 = 'mississippi' // ississi
const inp4 = 'ac' // 'a' | 'c'

console.log(longestPalindrome(inp1))
console.log(longestPalindrome(inp2))
console.log(longestPalindrome(inp3))
console.log(longestPalindrome(inp4))
