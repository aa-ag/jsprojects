const X_class = 'x';
const Circle_class = 'circle';

const cellElements = document.querySelectorAll('[data-cell');
let circleTurn;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick,  {once: true})
})

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? Circle_class : X_class;
    // placeMark
    placeMark(cell, currentClass)

    // check for Win
    // check for Draw
    // Switch turns
};

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}