// Solution
console.log('Note: 0 = rock, 1 = paper, 2 = scissors')
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const LOSE = 0;
const WIN = 1;
const DRAW = 2;

const outcomes = [
    [DRAW, LOSE, WIN], // Rock
    [WIN, DRAW, LOSE], // Paper
    [LOSE, WIN, DRAW]  // Scissors
];

// Scores kept outside any function to maintain their values across rounds
let humanScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#btn-rock");
btnRock.addEventListener("click", () => playRound(ROCK));

const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", () => playRound(PAPER));

const btnScissors = document.querySelector("#btn-scissors");
btnScissors.addEventListener("click", () => playRound(SCISSORS));

function playRound(humanChoice) {
    console.log(`Your choice = ${humanChoice}`);

    computerChoice = getComputerChoice();
    console.log(`Computer choice = ${computerChoice}`);

    const result = outcomes[humanChoice][computerChoice];
    const message = getResultMessage(humanChoice, computerChoice, result);
    console.log(message);
    console.log(humanScore);
    console.log(computerScore);

    const printScore = document.querySelector(".scores");
    printScore.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;

    const printMessage = document.querySelector(".results");
    printMessage.textContent = message;

    if (humanScore === 5) {
        declareWinner("human");
    } else if (computerScore === 5) {
        declareWinner("computer");
    }

    if (result === WIN) {
        humanScore++;
    } else if (result === LOSE) {
        computerScore++;
    }
}

function getResultMessage(humanChoice, computerChoice, result) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    if (result === WIN) {
        return `You win! ${choices[humanChoice]} beats ${choices[computerChoice]}`;
    } else if (result === LOSE) {
        return `You lose! ${choices[computerChoice]} beats ${choices[humanChoice]}`;
    } else {
        return 'Draw!';
    }
}

function declareWinner(winner) {
    const result = document.querySelector(".results");
    const resultWinner   = document.createElement("p");
    resultWinner.textContent = `The winner is ${winner}`;
    result.appendChild(resultWinner);

    // Reset scores for a new game
    humanScore = 0;
    computerScore = 0;
}