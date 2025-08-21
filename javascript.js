
const choices = ["Rock", "Paper", "Scissors"];
const buttonsContainer = document.createElement("div");
document.body.appendChild(buttonsContainer);

choices.forEach(choice => {
  const btn = document.createElement("button");
  btn.textContent = choice;
  btn.classList.add("btn");
  buttonsContainer.appendChild(btn);
});


const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
document.body.appendChild(resultsDiv);


let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.textContent);
  });
});

function playRound(playerSelection) {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  
  resultsDiv.innerHTML = "";

 
  const playerP = document.createElement("p");
  playerP.textContent = `Player selected: ${playerSelection}`;
  const computerP = document.createElement("p");
  computerP.textContent = `Computer selected: ${computerSelection}`;


  let resultMessage = "";
  if (playerSelection === computerSelection) {
    resultMessage = "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    resultMessage = "You win this round!";
    playerScore++;
  } else {
    resultMessage = "You lose this round!";
    computerScore++;
  }

  const resultP = document.createElement("p");
  resultP.textContent = resultMessage;

  const scoreP = document.createElement("p");
  scoreP.textContent = `Score - Player: ${playerScore} | Computer: ${computerScore}`;

 
  resultsDiv.appendChild(playerP);
  resultsDiv.appendChild(computerP);
  resultsDiv.appendChild(resultP);
  resultsDiv.appendChild(scoreP);

  
  if (playerScore === 5 || computerScore === 5) {
    const finalMessage = document.createElement("h2");
    finalMessage.textContent = playerScore === 5 ? "🎉 You won the game!" : "😢 Computer won the game!";
    resultsDiv.appendChild(finalMessage);


    buttons.forEach(btn => btn.disabled = true);
  }
}
