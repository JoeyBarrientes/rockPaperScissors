
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
    let choice = prompt("Enter rock, paper, or scissors: ")

    // WHILE that validates user input
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors' && choice !== null) {
        console.log('Invalid choice. Please enter either "rock", "paper", or "scissors".')
        choice = prompt("Enter rock, paper, or scissors: ")
    }
    return choice
}

