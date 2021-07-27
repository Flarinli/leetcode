let binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  let mid
  while (left <= right) {
    mid = Math.round((right - left) / 2 + left)
    if (target === arr[mid]) {
      return mid
    } else if (target < arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

let arr = [-1, 0, 3, 5, 7, 9, 12]
console.log(binarySearch(arr, 3))
