findPeakElement = (nums) => {
  let left = 0
  let right = arr.length - 1
  let mid
  while (left < right) {
    mid = Math.floor((right + left) / 2)
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

let inp = [1, 2, 3, 1, 3, 5, 1]

console.log(findPeakElement(inp))
