const maxDistToClosest = (seats) => {
  let max = 0
  let count = 0
  let i = 0
  while (seats[i] === 0) {
    count++
    i++
  }
  max = count
  count = 0

  for (; i < seats.length; i++) {
    let cur = seats[i]
    if (cur === 1) {
      count = 0
    } else {
      count++
      if (i === seats.length - 1) {
        max = Math.max(max, count)
      } else {
        max = Math.max(max, Math.ceil(count / 2))
      }
    }
  }

  return max
}

const inp1 = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1] // 3
const inp2 = [1, 0, 0, 0] // 3
const inp3 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1] // 5
console.log(maxDistToClosest(inp1))
console.log(maxDistToClosest(inp2))
console.log(maxDistToClosest(inp3))
