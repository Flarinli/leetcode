const singleNumber = (arr) => {
  let numObj = {}
  for (let i = 0; i < arr.length; i++) {
    numObj[arr[i]] = numObj[arr[i]] + 1 || 1
  }
  for (key of Object.keys(numObj)) {
    if (numObj[key] === 1) {
      return key
    }
  }
}

console.log(singleNumber([1, 5, 4, 4, 6, 7, 5, 1, 7]))
