let human = document.querySelector(".human");
let computer = document.querySelector(".computer");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let draw = document.querySelector(".draw");

// play function
function play(x) {
  let choices = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  let computerChoice = choices[index];
  let result;

  //determine the result
  if (x == computerChoice) {
    result = "Draw";
  } else if (
    (x == "Rock" && computerChoice == "Scissors") ||
    (x == "Paper" && computerChoice == "Rock") ||
    (x == "Scissors" && computerChoice == "Paper")
  ) {
    result = "Win";
  } else {
    result = "Lose";
  }

  //output choice
  human.innerHTML = "Your Choice: " + x;
  computer.innerHTML = "Computer Chocie: " + computerChoice;

  //show the result
  if (result == "Win") {
    win.classList.remove("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");
  } else if (result == "Lose") {
    win.classList.add("hidden");
    lose.classList.remove("hidden");
    draw.classList.add("hidden");
  } else if (result == "Draw") {
    win.classList.add("hidden");
    lose.classList.add("hidden");
    draw.classList.remove("hidden");
  }
}
