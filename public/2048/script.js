import Grid from "/2048/Grid.js"
import Tile from "/2048/Tile.js"

const gameBoard = document.querySelector("#game-board")

const grid = new Grid(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)
setupInput()

function setupInput() {
  window.addEventListener("keydown", handleInput, { once: true })
}

async function handleInput(e) {
  switch (e.key) {
    case "ArrowUp": {
      if (!canMoveUp()) {
        setupInput()
        return
      }
      await moveUp()
      break
    }
    case "ArrowDown": {
      if (!canMoveDown()) {
        setupInput()
        return
      }
      await moveDown()
      break
    }
    case "ArrowLeft": {
      if (!canMoveLeft()) {
        setupInput()
        return
      }
      await moveLeft()
      break
    }
    case "ArrowRight": {
      if (!canMoveRight()) {
        setupInput()
        return
      }
      await moveRight()
      break
    }

    default: {
      setupInput()
      return
    }
  }

  // Other code

  grid.cells.forEach((cell) => cell.mergeTiles())

  const newTile = new Tile(gameBoard)
  grid.randomEmptyCell().tile = newTile

  if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) {
    newTile.waitForTransition(true).then(() => {
      alert('you lose')
      location.assign('/2048/lose.html')
    })
    return
  }
  setupInput()
}

function moveUp() {
  return slideTiles(grid.cellsByColumn)
}

function moveDown() {
  return slideTiles(grid.cellsByColumn.map((column) => [...column].reverse()))
}

function moveLeft() {
  return slideTiles(grid.cellsByRow)
}

function moveRight() {
  return slideTiles(grid.cellsByRow.map((row) => [...row].reverse()))
}

function slideTiles(cells) {
  return Promise.all(
    cells.flatMap((group) => {
      const promises = []
      for (var i = 1; i < group.length; i++) {
        const cell = group[i]
        if (cell.tile == null) continue
        if (cell.tile.tileElement.textContent === '2048') {
          alert('You win!!!!')
          location.assign('/2048/win.html')
        }
        let lastValidCell
        for (var j = i - 1; j >= 0; j--) {
          const moveToCell = group[j]
          if (!moveToCell.canAccept(cell.tile)) break
          lastValidCell = moveToCell
        }
        if (lastValidCell != null) {
          promises.push(cell.tile.waitForTransition())
          if (lastValidCell.tile != null) {
            lastValidCell.mergeTile = cell.tile
          } else {
            lastValidCell.tile = cell.tile
          }
          cell.tile = null
        }
      }
      return promises
    })
  )
}

function canMoveUp() {
  return canMove(grid.cellsByColumn)
}

function canMoveDown() {
  return canMove(grid.cellsByColumn.map(column => [...column].reverse()))
}

function canMoveLeft() {
  return canMove(grid.cellsByRow)
}

function canMoveRight() {
  return canMove(grid.cellsByRow.map(row => [...row].reverse()))
}

function canMove(cells) {
  return cells.some(group => {
    return group.some((cell, i) => {
      if (i === 0) return false
      if (cell.tile == null) return false
      const moveToCell = group[i - 1]
      return moveToCell.canAccept(cell.tile)
    })
  })
}