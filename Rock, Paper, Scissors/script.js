let userChosen;
let pcChosen;

var result = results()

const displayResult = document.getElementById('result')
const pcChoice = document.getElementById('pc-choice')
const randomNumber = Math.round(Math.random() * (3))
const userChoice = document.getElementById("user-choice")
const possibleChoices = document.querySelectorAll(".choice")

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChosen = e.target.id;
    generatePcChoice();
    results();
    userChoice.innerHTML = userChosen;
    pcChoice.innerHTML = pcChosen;
    displayResult.innerHTML = result;
}));

function generatePcChoice() {
    if (randomNumber === 1) {
        return pcChosen = "rock";
    } else if (randomNumber === 2) {
        return pcChosen = "paper";
    } else if (randomNumber === 3) {
        return pcChosen = "scissors";
    };
};

function results() {
    if(pcChosen === userChosen) {
        return result = "Tie -- go again!";
    } else if (pcChosen === "rock" && userChosen === "paper") {
        return result = "you WON this time ;)";
    } else if (pcChosen === "rock" && userChosen === "scissors") {
        return result = "you LOST...";
    } else if (pcChosen === "paper" && userChosen === "rock") {
        return result = "you LOST...";
    } else if (pcChosen === "paper" && userChosen === "scissors") {
        return result = "you WON this time ;)";
    } else if (pcChosen === "scissors" && userChosen === "rock") {
        return result = "you WON this time ;)";
    } else if (pcChosen === "scissors" && userChosen === "paper") {
        return result = "you LOST...";
    };
};