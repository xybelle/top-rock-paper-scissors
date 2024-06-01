# top-rock-paper-scissors
A simple implementation of the rock-paper-scissors game in Javascript played entirely in the console. The game is played between a human and a computer, and the first to win 5 rounds is declared the winner.

`getComputerChoice` generates random number between 0 and 2 to simuilate the computer's choice.

`getHumanChoice` takes user choice and validates the input.

`playRound` simulates a round of the game, determining the result based on the choices made.

`getResultMessage` generates a message based on the outcome of the round.

`playGame` manages the game loop and keeps track of scores.

`logScore` logs the final scores to the console.