const X_class = 'x';
const Circle_class = 'circle';
const Winning_Combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageTextElement = document.querySelector('[data-winning-message]')
const winningMessageElement = document.getElementById('winmes')
let circleTurn;

startGame()

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick,  {once: true})
    })
    setBoardHoverClass()
}   

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? Circle_class : X_class
    // placeMark
    placeMark(cell, currentClass)

    // check for Win
    if (checkWin(currentClass)) {
        endGame(false)
    }
    // check for Draw
    // Switch turns
    swapTurns()
    setBoardHoverClass()
};

function endGame(draw) {
    if (draw) {

    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_class)
    board.classList.remove(Circle_class)
    if (circleTurn) {
        board.classList.add(Circle_class)
    } else {
        board.classList.add(X_class)
    }
}

function checkWin(currentClass) {
    return Winning_Combinations.some(combinations => {
        return combinations.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}