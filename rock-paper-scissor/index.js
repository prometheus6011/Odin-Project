const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function getHumanChoice() {
  let choice = prompt("Enter choice: (rock, paper, scissors)").toLowerCase();
  if (!choices.includes(choice)) {
    while (!choices.includes(choice)) {
      choice = prompt("Try again. Enter: (rock, paper, scissors)").toLowerCase();
    }
  }
  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      return "You tied!";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      ++computerScore;
      return "Computer won!";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      ++computerScore;
      return "Computer won!"
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      ++computerScore;
      return "Computer won!";
    } else {
      ++humanScore;
      return "Human won!";
    }
  }

  for (let i = 0; i < 5; ++i) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("------------------------------------");
    console.log(playRound(humanChoice, computerChoice));

    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  }

  console.log("------------------------------------");
  console.log("Human Score: ", humanScore);
  console.log("Computer Score: ", computerScore);
  if (humanScore > computerScore) {
    console.log("Human won!");
  } else {
    console.log("Computer won!");
  }
}

playGame();