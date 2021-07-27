// Алгоритм Fisher-Yates shuffle
const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let rnd = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[rnd]] = [arr[rnd], arr[i]]
  }
  return arr
}

let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < 10; i++) {
  console.log(shuffle(inp).join(','))
}
