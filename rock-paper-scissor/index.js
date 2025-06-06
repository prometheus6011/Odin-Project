const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

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

function recomputeResults() {
  const results_container = document.querySelector(".results");
  results_container.innerHTML = `
    <div>Human Score: ${humanScore}</div>
    <div>Computer Score: ${computerScore}</div>
  `;

  results_container.style.cssText = `
    display: flex;
    font-size: 24px;
    color: #e5e7eb;
    justify-content: center;
    align-items: center;
    gap: 32px;
  `;
}

const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissors_btn = document.querySelector("#scissors");

recomputeResults();
rock_btn.onclick = () => {
  playRound("rock", getComputerChoice());
  recomputeResults()
}

paper_btn.onclick = () => {
  playRound("paper", getComputerChoice());
  recomputeResults()
}

scissors_btn.onclick = () => {
  playRound("scissors", getComputerChoice());
  recomputeResults()
}