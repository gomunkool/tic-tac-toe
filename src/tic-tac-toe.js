class TicTacToe {
  constructor() {}
  plaer = 'x'
  matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

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
        }
      }
    }
    return true
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
    for (let i = 0; i < this.matrix.length; i++) {
      for (let y = 0; y < this.matrix[i].length; y++) {
        if (!this.matrix[i][y]) {
          return false
        }
      }
    }
    for (let i = 0; i < win.length; i++) {
      if (win[i][0] === 'x' && win[i][1] === 'x' && win[i][2] === 'x') {
        return false
      }
      if (win[i][0] === 'o' && win[i][1] === 'o' && win[i][2] === 'o') {
        return false
      }
    }
    return true
  }

  getFieldValue(rowIndex, colIndex) {
    if (rowIndex <= 2 && rowIndex >= 0 && colIndex <= 2 && colIndex >= 0) {
      return this.matrix[rowIndex][colIndex]
    } else {
      return null
    }
  }
}

module.exports = TicTacToe
