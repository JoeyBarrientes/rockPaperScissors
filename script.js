// Randomly generates computer choice
function getComputerChoice() {
    // Generate random decimal number between 0 and 1, then multiply by 3 
    // for the number of options and round down to nearest whole number
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// Get input choice from user
function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors (Case Insensitive): ")
    choice = choice.toLowerCase()

    // WHILE that validates user input
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors' && choice !== null) {
        console.log('Invalid choice. Please enter either rock, paper, or scissors.')
        choice = prompt("Enter rock, paper, or scissors: ")
    }
    return choice
}

// Initiates a rock, paper, scissors game
function playGame(humanSelection, computerSelection) {
    let humanScore = 0;
    let computerScore = 0;

    let computerChoice = computerSelection
    let humanChoice = humanSelection

    humanChoice = humanChoice.toLowerCase()

    // Switch statement to determine winner for each round
    switch (humanChoice) {
        case 'rock':
            if(computerChoice === 'rock') {
                console.log('It\'s a tie!')
                break
            } else if (computerChoice === 'paper') {
                computerScore++
                console.log('You lose! Paper beats rock.')
                break
            } else { // computerChoice === 'scissors'
                humanScore++
                console.log('You win! Rock beats scissors.')
                break
            }
        case 'paper':
            if(computerChoice === 'rock') {
                humanScore++
                console.log('You win! Paper beats rock.')
                break
            } else if (computerChoice === 'paper') {
                console.log('It\'s a tie!')
                break
            } else { // computerChoice === 'scissors'
                computerScore++
                console.log('You lose! Scissors beats paper.')
                break
            }
        case 'scissors':
            if(computerChoice === 'rock') {
                computerScore++
                console.log('You lose! Rock beats scissors.')
                break
            } else if (computerChoice === 'paper') {
                humanScore++
                console.log('You win! Scissors beats paper.')
                break
            } else { // computerChoice === 'scissors'
                console.log('It\'s a tie!')
                break
            }
    }

    // Return the score of the round
    return {humanScore, computerScore}
}

let humanScore = 0
let computerScore = 0

// Play 5 rounds of rock, paper, scissors
for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    let result = playGame(humanSelection, computerSelection)
    humanScore += result.humanScore
    computerScore += result.computerScore

}

// Determine the winner of the game
if (humanScore > computerScore) {
    console.log(`Your score is ${humanScore} out of 5. Congratulations, You won the game!`)
} else {
    console.log(`Your score is ${humanScore} out of 5. You lost the game, try again next time.`)
}