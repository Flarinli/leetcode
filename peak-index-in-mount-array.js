let peakIndexInMountArray = (arr) => {
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

let arr1 = [1, 2, 3, 4, 3, 2, 1]
let arr2 = [11, 13, 14, 15, 6, 4, 2]
let arr3 = [10, 9, 8, 7, 6]

console.log(peakIndexInMountArray(arr1))
console.log(peakIndexInMountArray(arr2))
console.log(peakIndexInMountArray(arr3))
