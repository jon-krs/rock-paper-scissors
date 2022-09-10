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

// Calls updateScore() with a reference number between 0 to 2 to signal round winner.
// Outputs round result message.
function playRound(playerChoice, computerChoice) {
    const userWins = `You win a round! ${playerChoice} beats ${computerChoice}.`;
    const computerWins = `You lose a round! ${computerChoice} beats ${playerChoice}.`;
    const tie = `It's a tie this round! ${computerChoice} matches ${playerChoice}.`;
    let msg;
    let refValue;

    if (computerChoice === 'Rock') {
        if (playerChoice === 'Paper') {
            msg = userWins;
            refValue = 0;
        }
        else if (playerChoice === 'Scissors') {
            msg = computerWins;
            refValue = 1;
        }
        else {
            msg = tie;
            refValue = 2;
        }
    }
    else if (computerChoice === 'Paper') {
        if (playerChoice === 'Paper') {
            msg = tie;
            refValue = 2;
        }
        else if (playerChoice === 'Scissors') {
            msg = userWins;
            refValue = 0;
        }
        else {
            msg = computerWins;
            refValue = 1;
        }
    }
    else {
        if (playerChoice === 'Paper') {
            msg = computerWins;
            refValue = 1;
        }
        else if (playerChoice === 'Scissors') {
            msg = tie;
            refValue = 2;
        }
        else {
            msg = userWins;
            refValue = 0;
        }
    }
    document.getElementById('output').innerHTML = msg;
    updateScore(refValue);
}

// Updates after each round, calls checkScore() to determine if game has winner.
function updateScore(refValue) {
    if (refValue === 0) {
        document.querySelector('#player-score').innerHTML++;
    }
    else if (refValue === 1) {
        document.querySelector('#computer-score').innerHTML++;
    }
    checkScore(document.querySelector('#player-score').innerHTML, document.querySelector('#computer-score').innerHTML);
}

// Checks score after every round to determine if a player has reached 5 points.
// Disables button selection and outputs win message if so.
function checkScore(playerScore, computerScore) {
    if (playerScore === '5' || computerScore === '5') {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }
}

// Event listeners to handle player selection and call playRound.
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.getAttribute('id').charAt(0).toUpperCase() + button.getAttribute('id').slice(1), getComputerChoice());
    });
});


// Plays 5 rounds of rock, paper, scissors. 
// Returns winner, loser, or tie.
// function game() {
//     let userScore = 0;
//     let computerScore = 0;
//     let roundResult;

//     for (let i = 0; i < 5; i++) {
//         roundResult = playRound(getPlayerChoice(), getComputerChoice());
//         if (roundResult === 0) {
//             userScore++;
//         }
//         else if (roundResult === 1) {
//             computerScore++;
//         }
//     }

//     if (userScore > computerScore) {
//         console.log(`You win the game ${userScore} to ${computerScore}!`);
//     }
//     else if (computerScore > userScore) {
//         console.log(`You lose the game ${computerScore} to ${userScore}!`);
//     }
//     else {
//         console.log(`The game was tied ${computerScore} to ${userScore}!`);
//     }
// }

// game();