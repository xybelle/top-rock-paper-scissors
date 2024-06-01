// Solution
console.log('Note: 0 = rock, 1 = paper, 2 = scissors')
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    const validInputs = ['0', '1', '2'];
    let choice;
    while (true) {
        choice = prompt('Enter 0 for rock, or 1 for paper, or 2 for scissors');
        if (validInputs.includes(choice)) {
            break;
        }
        console.log('Invalid input. Please enter 0 for rock, or 1 for paper, or 2 for scissors');
    }
    return choice;
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

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    console.log(`Your choice = ${humanChoice}`);

    computerChoice = getComputerChoice();
    console.log(`Computer choice = ${computerChoice}`);

    const result = outcomes[humanChoice][computerChoice];
    const message = getResultMessage(humanChoice, computerChoice, result);
    console.log(message);

    return result;
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

function playGame() {
    const NUM_ROUNDS = 5;
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    for (let i = 0; i < NUM_ROUNDS; i++) {
        let result = playRound();
        if (result == 1) {
            humanScore++;
        } else if (result == 0) {
            computerScore++;
        }
    }
    logScore(humanScore, computerScore);
}

function logScore(humanScore, computerScore) {
    console.log('Final score');
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

playGame();