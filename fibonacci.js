const getFibonacciNumber = (n) => {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}

console.log(getFibonacciNumber(10))
