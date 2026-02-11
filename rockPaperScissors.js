const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Please choose your move: rock, paper, or scissors");
  return;
}
let playerMove = args[0].toLowerCase(); 

const allowedMoves = ["rock", "paper", "scissors"];

if (!allowedMoves.includes(playerMove)) {
  console.error("Invalid move! Please choose only: rock, paper, or scissors");
  return;
}

const computerOptions = ["rock", "paper", "scissors"];

const randomIndex = Math.floor(Math.random() * computerOptions.length);
const computerMove = computerOptions[randomIndex];

if (playerMove === computerMove) {
  console.log(`It's a draw! You chose ${playerMove} and computer chose ${computerMove}.`);
} else if (
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "paper" && computerMove === "rock") ||
  (playerMove === "scissors" && computerMove === "paper")
) {
  let winningMove;
  if (playerMove === "rock") winningMove = "rock beats scissors";
  if (playerMove === "paper") winningMove = "paper beats rock";
  if (playerMove === "scissors") winningMove = "scissors beats paper";

  console.log(`You win! You chose ${playerMove} and computer chose ${computerMove}. ${winningMove}.`);
} else {
  let winningMove;
  if (computerMove === "rock") winningMove = "rock beats scissors";
  if (computerMove === "paper") winningMove = "paper beats rock";
  if (computerMove === "scissors") winningMove = "scissors beats paper";

  console.log(`You lose! You chose ${playerMove} and computer chose ${computerMove}. ${winningMove}.`);
}