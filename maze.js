const checkPath = (start, end) => {
  maze[start.y][start.x] = 5

  let siblings = getValidSib(start)

  if (siblings.length > 0) {
    for (let i = 0; i < siblings.length; i++) {
      let cur = siblings[i]
      let isSolved = cur.x === end.x && cur.y === end.y
      let notVisited = maze[cur.y][cur.x] !== 5
      if (isSolved || (notVisited && checkPath(cur, end))) {
        return true
      }
    }
  }
  return false
}

function getValidSib(coord) {
  let { x, y } = coord

  let coords = []
  if (maze[y - 1] !== undefined) {
    coords.push({ x: x, y: y - 1, val: maze[y - 1][x] })
  }
  if (maze[y + 1] !== undefined) {
    coords.push({ x: x, y: y + 1, val: maze[y + 1][x] })
  }
  if (maze[x - 1] !== undefined) {
    coords.push({ x: x - 1, y: y, val: maze[y][x - 1] })
  }
  if (maze[x + 1] !== undefined) {
    coords.push({ x: x + 1, y: y, val: maze[y][x + 1] })
  }
  return coords.filter((el) => el.val === 0)
}

let maze = [
  [1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0],
]
console.table(maze)
console.log(checkPath({ x: 3, y: 0 }, { x: 5, y: 5 }))
