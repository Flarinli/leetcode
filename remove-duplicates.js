const removeDuplicztes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr.length
}

const arr1 = [1, 1, 2]
const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicztes(arr1))
console.log(arr1)
console.log(removeDuplicztes(arr2))
console.log(arr2)
