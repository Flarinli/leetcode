const searchInRotatedArray = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  let mid
  while (left <= right) {
    mid = Math.round((right + left) / 2)
    if (arr[mid] === target) {
      return mid
    }
    if (arr[left] <= arr[mid]) {
      if (arr[left] <= target && target <= arr[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (arr[mid] <= target && target <= arr[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}

const shift = (arr, k) => {
  while (k--) {
    arr.push(arr.shift())
  }
  return arr
}
let arr = [1, 2, 4, 5, 6, 7, 8]
console.log(shift(arr, 2))

console.log(searchInRotatedArray(arr, 8)) // 4
console.log(searchInRotatedArray(arr, 3)) // -1
