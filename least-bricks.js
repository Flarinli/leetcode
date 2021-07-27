const leastBricks = (wall) => {
  // Сложность алгоритма O(n * m) - высота стены на ее ширину, по памяти - O(m)
  let map = {} // Для хранения пар ширина-количество ширин
  let max = 0 // Максимальное количество стыков
  wall.forEach((row) => {
    let sum = 0 // Ширина, которая записываеся в map
    for (let i = 0; i < row.length - 1; i++) {
      sum += row[i]
      map[sum] = map[sum] ? map[sum] + 1 : 1
      max = Math.max(max, map[sum])
    }
  })
  return wall.length - max //Из высоты стены вычитаем максимальное количество стыков
}

let wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
]
console.log(leastBricks(wall))
