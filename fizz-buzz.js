const fizzBuzz = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 15)) {
      arr[i] = 'fizzbuzz'
    } else if (!(arr[i] % 3)) {
      arr[i] = 'fizz'
    } else if (!(arr[i] % 5)) {
      arr[i] = 'buzz'
    }
  }
  return arr
}
const fizzBuzz2 = (arr) => {}
console.log([...Array(24).keys()])
console.log(fizzBuzz([...Array(24).keys()]))
