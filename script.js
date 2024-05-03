const userScoreInput = document.querySelector("#userScore");
const compScoreInput = document.querySelector("#compScore");
const msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");

let userScore = 0;
let compScore = 0;
var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var userChoice;
var compChoice;

const resetGame = () => {
    userScoreInput.innerText = 0;
    compScoreInput.innerText = 0;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
  }

var genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGAME = () => {
    console.log("draw");
    msg.innerText = "It's Draw!! Try again";
    msg.style.backgroundColor = "black";
}

const showWinner = (winner) => {
    if (winner === "user") {
        userScoreInput.innerText = (++userScore).toString();
        console.log(userScore);
        console.log("you win");
        msg.innerText = "You win!"
        msg.style.backgroundColor = "green";

    }
    else if(winner === "computer") {
        compScoreInput.innerText = (++compScore).toString();
        console.log(compScore);
        console.log("you lose");
        msg.innerText = "Computer Win";
        msg.style.backgroundColor = "red";
    }

}

const playGame = (e) => {
    userChoice = e;
    console.log(userChoice);
    compChoice = genCompChoice();
    console.log(compChoice);

    if (userChoice === compChoice) {
        drawGAME();
    } else if ((userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")) {
        showWinner("user");
    } else {
        userWin = false;
        showWinner("computer");
    }
}

resetBtn.addEventListener("click",resetGame);

