class TicTacToe {
  constructor() {}
  plaer = 'x'
  matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  // matrix = [
  //   ['x', 'x', 'o'],
  //   ['o', 'o', 'x'],
  //   ['x', 'o', 'x'],
  // ]

  getCurrentPlayerSymbol() {
    return this.plaer
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.matrix[rowIndex][columnIndex]) {
      this.matrix[rowIndex][columnIndex] = this.plaer
      this.plaer = this.plaer === 'x' ? 'o' : 'x'
    }
  }

  isFinished() {
    let win = [
      [this.matrix[0][0], this.matrix[0][1], this.matrix[0][2]],
      [this.matrix[1][0], this.matrix[1][1], this.matrix[1][2]],
      [this.matrix[2][0], this.matrix[2][1], this.matrix[2][2]],
      [this.matrix[0][0], this.matrix[1][0], this.matrix[2][0]],
      [this.matrix[0][1], this.matrix[1][1], this.matrix[2][1]],
      [this.matrix[0][2], this.matrix[1][2], this.matrix[2][2]],
      [this.matrix[0][0], this.matrix[1][1], this.matrix[2][2]],
      [this.matrix[0][2], this.matrix[1][1], this.matrix[2][0]],
    ]
    for (let i = 0; i < win.length; i++) {
      if (win[i][0] === 'x' && win[i][1] === 'x' && win[i][2] === 'x') {
        return true
      }
      if (win[i][0] === 'o' && win[i][1] === 'o' && win[i][2] === 'o') {
        return true
      }
    }

    for (let i = 0; i < this.matrix.length; i++) {
      for (let y = 0; y < this.matrix[i].length; y++) {
        if (!this.matrix[i][y]) {
          return false
        } else {
          return true
        }
      }
    }
  }

  getWinner() {
    let win = [
      [this.matrix[0][0], this.matrix[0][1], this.matrix[0][2]],
      [this.matrix[1][0], this.matrix[1][1], this.matrix[1][2]],
      [this.matrix[2][0], this.matrix[2][1], this.matrix[2][2]],
      [this.matrix[0][0], this.matrix[1][0], this.matrix[2][0]],
      [this.matrix[0][1], this.matrix[1][1], this.matrix[2][1]],
      [this.matrix[0][2], this.matrix[1][2], this.matrix[2][2]],
      [this.matrix[0][0], this.matrix[1][1], this.matrix[2][2]],
      [this.matrix[0][2], this.matrix[1][1], this.matrix[2][0]],
    ]
    for (let i = 0; i < win.length; i++) {
      if (win[i][0] === 'x' && win[i][1] === 'x' && win[i][2] === 'x') {
        return 'x'
      }
      if (win[i][0] === 'o' && win[i][1] === 'o' && win[i][2] === 'o') {
        return 'o'
      }
    }
    return null
  }

  noMoreTurns() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let y = 0; y < this.matrix[i].length; y++) {
        if (!this.matrix[i][y]) {
          return false
        }
      }
    }
    return true
  }

  isDraw() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let y = 0; y < this.matrix[i].length; y++) {
        if (!this.matrix[i][y]) {
          return false
        }
      }
    }
    let win = [
      [this.matrix[0][0], this.matrix[0][1], this.matrix[0][2]],
      [this.matrix[1][0], this.matrix[1][1], this.matrix[1][2]],
      [this.matrix[2][0], this.matrix[2][1], this.matrix[2][2]],
      [this.matrix[0][0], this.matrix[1][0], this.matrix[2][0]],
      [this.matrix[0][1], this.matrix[1][1], this.matrix[2][1]],
      [this.matrix[0][2], this.matrix[1][2], this.matrix[2][2]],
      [this.matrix[0][0], this.matrix[1][1], this.matrix[2][2]],
      [this.matrix[0][2], this.matrix[1][1], this.matrix[2][0]],
    ]
    for (let i = 0; i < win.length; i++) {
      if (win[i][0] === 'x' && win[i][1] === 'x' && win[i][2] === 'x') {
        return 'x'
      }
      if (win[i][0] === 'o' && win[i][1] === 'o' && win[i][2] === 'o') {
        return 'o'
      }
    }
    return null

    // if (game.noMoreTurns()) {
    //   if (game.getWinner()) {
    //     return false
    //   } else {
    //     return true
    //   }
    // } else {
    //   return false
    // }
  }

  getFieldValue(rowIndex, colIndex) {
    if (rowIndex <= 2 && rowIndex >= 0 && colIndex <= 2 && colIndex >= 0) {
      return this.matrix[rowIndex][colIndex]
    } else {
      return null
    }
  }
}

let game = new TicTacToe()
game.nextTurn(1, 0)
game.isDraw()
// game.nextTurn(0, 1)
// game.nextTurn(0, 2)
// game.nextTurn(1, 1)
// game.nextTurn(2, 2)
// game.nextTurn(2, 1)
// game.nextTurn(0, 2)
// game.nextTurn(0, 2)
// game.nextTurn(0, 2)
// game.isFinished() //?
// game.getWinner() //?
// game.noMoreTurns() //?
// game.isDraw() //?

// console.log(game.matrix)
// console.log(game.plaer)

// for (let i = 0; i < this.matrix.length; i++) {
//   for (let y = 0; y < this.matrix[i].length; y++) {
//     console.log(this.matrix[i][y])
//   }
// }

// matrix = [
//   ['x', 'x', 'o'],
//   ['o', 'o', 'x'],
//   ['x', 'o', 'x'],
// ]
