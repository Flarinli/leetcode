const solveSudoku = (board, size, boxSize) => {
  //   const findEmptyArr = (board) => {
  //     let returned = []
  //     for (let i = 0; i < size; i++) {
  //       for (let j = 0; j < size; j++) {
  //         if (board[i][j] === '.') returned.push({ i, j })
  //       }
  //     }
  //     return returned.length > 0 ? returned : null
  //   }
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '.') return [r, c]
      }
    }
    return null
  }
  const validate = (num, pos, board) => {
    const [r, c] = pos
    // Check rows
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) return false
    }
    // Check columns
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) return false
    }

    // Check box
    const boxRow = Math.floor(r / boxSize) * boxSize
    const boxCol = Math.floor(c / boxSize) * boxSize
    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) return false
      }
    }
    return true
  }
  const solve = () => {
    const curPos = findEmpty(board)

    if (curPos === null) return true

    for (let i = 1; i <= size; i++) {
      const curNum = i.toString()
      const isValid = validate(curNum, curPos, board)
      if (isValid) {
        const [y, x] = curPos
        board[y][x] = curNum

        if (solve()) return true
        board[y][x] = '.'
        continue
      }
    }

    return false
  }
  solve()
  return board
}

let board1 = [
  ['4', '.', '1', '.'],
  ['.', '2', '.', '.'],
  ['.', '.', '3', '.'],
  ['.', '.', '2', '.'],
]
const board2 = [
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.'],
]
let board3 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
const execTime = (fn, params) => {
  const start = performance.now()
  fn(...params)
  const end = performance.now()
  console.log(`Время выполнения: ${end - start} мкс`)
}

const timeForSudokuSolver = (board, size, boxSize) => {
  console.table(board)
  console.table(solveSudoku(board, size, boxSize))
}
execTime(timeForSudokuSolver, [board1, 4, 2])
execTime(timeForSudokuSolver, [board2, 4, 2])
execTime(timeForSudokuSolver, [board3, 9, 3])
