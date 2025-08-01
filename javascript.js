function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function getHumanChoice() {
    return prompt("Type rock, paper, or scissors:");
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("Tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore++;
      console.log(
        "You lose! " + computerChoice + " beats " + humanChoice + ". Score: " +
        computerScore + " - " + humanScore
      );
    } else {
      humanScore++;
      console.log(
        "You win! " + humanChoice + " beats " + computerChoice + ". Score: " +
        computerScore + " - " + humanScore
      );
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`\nRound ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("Computer picked:", computerSelection);
    console.log("You picked:", humanSelection);

    playRound(humanSelection, computerSelection);
  }

  console.log("\nFinal Score — You: " + humanScore + " | Computer: " + computerScore);
}

playGame();
