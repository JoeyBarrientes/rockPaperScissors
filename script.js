document.addEventListener("DOMContentLoaded", function () {
	(function playGame() {
		let humanScore = 0;
		let computerScore = 0;
		let playerSelection, computerSelection;

		const choiceButtons = document.querySelectorAll("button");
		let overviewText = document.querySelector(".gameOverview");
		let scores = document.querySelector(".scores");
		let playerResult = document.querySelector(".playerText");
		let computerResult = document.querySelector(".computerText");
		let roundChoices = document.querySelector(".roundChoices");

		let playerScoreText = document.querySelector(".playerScore");
		let computerScoreText = document.querySelector(".computerScore");

		roundChoices.style.display = "none";
		scores.style.display = "none";

		let gamePlayed = false;
		let playAgain = document.querySelector(".playAgain");

		// Randomly generates computer choice
		let getComputerChoice = function () {
			// Generate random decimal number between 0 and 1, then multiply by 3
			// for the number of options and round down to nearest whole number
			const randomNumber = Math.floor(Math.random() * 3);

			switch (randomNumber) {
				case 0:
					return "rock";
				case 1:
					return "paper";
				case 2:
					return "scissors";
			}
		};

		choiceButtons.forEach((button) => {
			button.addEventListener("click", function () {
				roundChoices.style.display = "block";
				scores.style.display = "block";
				playerSelection = button.textContent.toLowerCase();
				computerSelection = getComputerChoice();

				overviewText.textContent = "Results:";
				playerResult.textContent = playerSelection;
				computerResult.textContent = computerSelection;

				if (gamePlayed) {
					humanScore = 0;
					computerScore = 0;
					playerScoreText.textContent = humanScore;
					computerScoreText.textContent = computerScore;
					playAgain.textContent = "";
					gamePlayed = false;
				}

				(function playRound(playerSelection, computerSelection) {
					let roundResult = document.querySelector(".roundResult");

					switch (playerSelection) {
						case "rock":
							if (computerSelection === "rock") {
								roundResult.textContent = "It's a tie!";
								break;
							} else if (computerSelection === "paper") {
								computerScore++;
								computerScoreText.textContent = computerScore;
								roundResult.textContent = "You lose! Paper beats rock.";
								break;
							} else {
								humanScore++;
								playerScoreText.textContent = humanScore;
								roundResult.textContent = "You win! Rock beats scissors.";
								break;
							}
						case "paper":
							if (computerSelection === "rock") {
								humanScore++;
								playerScoreText.textContent = humanScore;
								roundResult.textContent = "You win! Paper beats rock.";
								break;
							} else if (computerSelection === "paper") {
								roundResult.textContent = "It's a tie!";
								break;
							} else {
								computerScore++;
								computerScoreText.textContent = computerScore;
								roundResult.textContent = "You lose! Scissors beats paper.";
								break;
							}
						case "scissors":
							if (computerSelection === "rock") {
								computerScore++;
								computerScoreText.textContent = computerScore;
								roundResult.textContent = "You lose! Rock beats scissors.";
								break;
							} else if (computerSelection === "paper") {
								humanScore++;
								playerScoreText.textContent = humanScore;
								roundResult.textContent = "You win! Scissors beats paper.";
								break;
							} else {
								roundResult.textContent = "It's a tie!";
								break;
							}
					}
					if (humanScore === 5 || computerScore === 5) {
						if (humanScore > computerScore) {
							playAgain.textContent =
								"You win the game! Click a button to play again.";
							gamePlayed = true;
						} else {
							playAgain.textContent =
								"You lose the game! Click a button to play again.";
							gamePlayed = true;
						}
					}

				})(playerSelection, computerSelection); // Close play round function with immediate call
			}); // Close button click listener events
		}); // Close choiceButtons for each
	})(); // Close play game function with immediate call
}); // Close DOMContentLoaded event