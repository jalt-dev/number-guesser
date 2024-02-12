let humanScore = 0;
let computerScore = 0;
let currentRoundNumber  = 1;

function generateTarget() {
    return Math.floor(Math.random() * 9);
}

function compareGuesses(human, computer, target){
    let humanGuess = Math.abs(target - human);
    let compGuess = Math.abs(target - computer);

    return humanGuess === compGuess || humanGuess < compGuess;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
       computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber  += 1;
}