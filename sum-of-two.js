const sumOfTwo = (arr, target) => {
  const result = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i)
        result.push(j)
      }
    }
  }

  return result
}
const sumOfTwo2 = (arr, target) => {
  const numObj = {}
  for (let i = 0; i < arr.length; i++) {
    numObj[arr[i]] = i
  }

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    if (numObj[diff]) {
      return [i, numObj[diff]]
    }
  }
  return []
}

console.log(sumOfTwo([2, 7, 11, 15], 9))
