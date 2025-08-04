alert(
  "Welcome to the Game, just select your move to start the game, Let's Have Fun 🤩"
);
let buttons = document.querySelectorAll("button");
let yourChoice = document.querySelector(".yourChoice");
let cpuChoice = document.querySelector(".computerChoice");
let result = document.querySelector(".result");
let score = document.querySelector(".score");
let computerScore = document.querySelector(".computerScore");
let yourScore = document.querySelector(".yourScore");

let choice = ["rock", "paper", "scissors"];

let myScore = 0;
let cpuScore = 0;

for (btn of buttons) {
  btn.addEventListener("click", (event) => {
    let userClick = event.target.id;

    yourChoice.innerText = "Your Choice is : " + userClick;

    let choiceIndex = Math.floor(Math.random() * choice.length);
    let computerChoice = choice[choiceIndex];

    cpuChoice.innerText = "Computer Choice is : " + computerChoice;

    if (userClick === computerChoice) {
      result.innerText = "Draw 🤝";
    } else if (
      (userClick === "rock" && computerChoice === "scissors") ||
      (userClick === "scissors" && computerChoice === "paper") ||
      (userClick === "paper" && computerChoice === "rock")
    ) {
      result.innerText = "You Won! 🏅";
      myScore++;
      yourScore.innerText = myScore;
      //   return myScore++;
    } else {
      result.innerText = "Computer Won! 🏅";
      cpuScore++;
      computerScore.innerText = cpuScore;
    }
  });
}
