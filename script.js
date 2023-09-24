// Tic-Tac-Toe Game Logic
// This JavaScript file handles the game logic for a simple Tic-Tac-Toe game.
// It includes functions for starting, playing, and ending the game, as well as checking for wins and draws.
// Event listeners are used to respond to user clicks, and the game state is updated accordingly.

// Define constants for player classes
const X_CLASS = 'x' // Represents the CSS class for "X" player
const CIRCLE_CLASS = 'circle' // Represents the CSS class for "Circle" player

// Select HTML elements
const cellElements = document.querySelectorAll('[data-cell]'); // Represents all game cells
const board = document.getElementById('board'); // Represents the game board element
const winningMessageElement = document.getElementById('winningMessage'); // Represents the winning message element
const winningMessageTextElement = document.querySelector('[data-winning-message-text]'); // Represents the text within the winning message
const restartButton = document.getElementById('restartButton'); // Represents the restart button element


// Define winning combinations for the game
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Initializes the start of the game
// Also resets the game by removing all marks
// Resets existing event listeners
startGame()

// Button to rerun the startGame function
// Used for resetting the game
restartButton.addEventListener('click', startGame)

// Settings for game initialization
function startGame() {
    circleTurn = false
    // Iterates over each "cell" and removes "X" and "CIRCLE" classes
    // Adds/Resets a one time click event listener for each cell
    // The click will run the "handleClick" function
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick,)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

// Handles when a cell from board element is clicked on
// If there is a winner or draw it will end the game
// If no winner or draw it will swap turns
function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    // Place mark
    placeMark(cell, currentClass)
    // Check for win or draw
    // If neither, swap turns
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
}

// Ends the game if there is a winner or a draw
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Win!`
    }
    winningMessageElement.classList.add('show')
}

// Checks if the round resulted in a draw
function isDraw() {
    // Destructures cellElements into an array so we can use .every method
    // Returns true if every cell element meets the conditions below
    return [...cellElements].every(cell => {
        // returns true if cell classes contains X_CLASS or CIRCLE_CLASS
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

// Adds class of current turn to cell element to add a mark
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

// Changes who's turn it is
function swapTurns() {
    circleTurn = !circleTurn
}

// Adds current turn class to board element for hover effect
function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

// Checks for winner
function checkWin(currentClass) {
    // Checks Every array in the WINNING_COMBINATIONS array
    // Returns true if at least one combination satisfies conditions below
    return WINNING_COMBINATIONS.some(combination => {
        // Checks every index of the given combination
        // Returns true if each index meets conditions below
        return combination.every(index => {
            // Checks if index contains current class
            return cellElements[index].classList.contains(currentClass)
        })
    })
}