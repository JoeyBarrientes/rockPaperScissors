
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