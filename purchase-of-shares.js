const maxProfit = (arr) => {
  let max = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, arr[j] - arr[i])
    }
  }
  return max < 0 ? 0 : max
}

const maxProfit2 = (arr) => {
  let minPrice = arr[0]
  let maxProfit = 0
  for (let i = 0; i < arr.length; i++) {
    let curPrice = arr[i]
    maxProfit = Math.max(maxProfit, curPrice - minPrice)
    minPrice = Math.min(minPrice, curPrice)
  }
  return maxProfit
}

const prices1 = [7, 1, 5, 3, 6, 4]
const prices2 = [7, 6, 4, 3, 1]

console.log('maxProfit1: ', maxProfit(prices1))
console.log('maxProfit1: ', maxProfit(prices2))
console.log('maxProfit2: ', maxProfit2(prices1))
console.log('maxProfit2: ', maxProfit2(prices2))
