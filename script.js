const inputs = document.querySelectorAll("input");
const restart = document.querySelector('.restart')
let summary = document.getElementById('summary')
let playerWin = document.querySelector(".player-win")
let computerWin = document.querySelector(".computer-win")
let result = document.querySelector(".result")

console.log(restart);
inputs.forEach((el) => {
  el.addEventListener("click", function () {
    const playerSelection = el.value.toLowerCase();
    const computerSelection = getComputerChoice();
    game(playerSelection, computerSelection)
  });

});

function hideInputs(){
    inputs.forEach(el=>el.hidden = true)
    result.parentElement.classList.add("hide")
}

restart.addEventListener('click', function(){
    location.reload()
})

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][index];
  }

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.innerHTML = "draw";
  }
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result.innerHTML = "computer win";
    computerWin.textContent = parseInt(computerWin.textContent) + 1
    
  }else{
    result.innerHTML = "you win"
    playerWin.textContent = parseInt(playerWin.textContent) + 1
  }

}

function game(playerSelection, computerSelection){
    playRound(playerSelection, computerSelection)
    if(playerWin.innerHTML == 5){
        hideInputs()
        return summary.innerHTML = 'Congratulations! You win the game'
    }
    if(computerWin.innerHTML == 5){
        hideInputs()
        return summary.innerHTML = 'Sorry! You lose the game'
    }


}

