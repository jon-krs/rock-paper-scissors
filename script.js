// Generates random integer between 0 to 2. 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Uses number from getRandomInt to generate computer choice for game.
function getComputerChoice() {
    let randomInt = getRandomInt(3);
    let computerChoice;
    if (randomInt === 0) {
        computerChoice = 'Rock';
    }
    else if (randomInt === 1) {
        computerChoice = 'Paper';
    }
    else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

// Prompts player to choose rock, paper, or scissors for game.
// Will continue to prompt if anything other than case-insensitive 'rock',
// 'paper', or 'scissors' is typed.
function getPlayerChoice() {
    let playerChoice = prompt('Choose your weapon!');
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
            playerChoice = prompt('Invalid selection. Please choose either Rock, Paper, or Scissors.')
            playerChoice = playerChoice.toLowerCase();
        }
    }

    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    return playerChoice;
}

// Plays round of rock, paper, scissors. 
// Returns a number between 0 to 2 to signal who won.
function playRound(playerChoice, computerChoice) {
    let userWins = `You win a round! ${playerChoice} beats ${computerChoice}.`;
    let computerWins = `You lose a round! ${computerChoice} beats ${playerChoice}.`;
    let tie = `It's a tie this round! ${computerChoice} matches ${playerChoice}.`;

    if (computerChoice === 'Rock') {
        if (playerChoice === 'Paper') {
            console.log(userWins);
            return 0;
        }
        else if (playerChoice === 'Scissors') {
            console.log(computerWins);
            return 1;
        }
        else {
            console.log(tie);
            return 2;
        }
    }
    else if (computerChoice === 'Paper') {
        if (playerChoice === 'Paper') {
            console.log(tie);
            return 2;
        }
        else if (playerChoice === 'Scissors') {
            console.log(userWins);
            return 0;
        }
        else {
            console.log(computerWins);
            return 1;
        }
    }
    else {
        if (playerChoice === 'Paper') {
            console.log(computerWins);
            return 1;
        }
        else if (playerChoice === 'Scissors') {
            console.log(tie);
            return 2;
        }
        else {
            console.log(userWins);
            return 0;
        }
    }
}

// Plays 5 rounds of rock, paper, scissors. 
// Returns winner, loser, or tie.
function game() {
    let userScore = 0;
    let computerScore = 0;
    let roundResult;

    for (let i = 0; i < 5; i++) {
        roundResult = playRound(getPlayerChoice(), getComputerChoice());
        if (roundResult === 0) {
            userScore++;
        }
        else if (roundResult === 1) {
            computerScore++;
        }
    }

    if (userScore > computerScore) {
        console.log(`You win the game ${userScore} to ${computerScore}!`);
    }
    else if (computerScore > userScore) {
        console.log(`You lose the game ${computerScore} to ${userScore}!`);
    }
    else {
        console.log(`The game was tied ${computerScore} to ${userScore}!`);
    }
}

game();