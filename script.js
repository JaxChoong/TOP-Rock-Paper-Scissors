
function getComputerChoice(){
    number = Math.floor(Math.random() * 100) 
    if (number <= 33) {
        return 'Rock'
    }
    else if (number <=66){
        return 'Paper'
    }
    else{
        return 'Scissors'
    }
}

function playRound(playerChoice){
    const results = document.querySelector("#results")
    let computerScore = document.querySelector("#computerScore")
    let playerScore = document.querySelector("#playerScore")
    const resultText = document.querySelector("p")
    let computerChoice = getComputerChoice()
    computerChoice = computerChoice.toUpperCase()
    playerChoice = playerChoice.toUpperCase()

    if(playerScore.textContent == 5|| computerScore.textContent == 5){
        return 0
    }
    if (playerChoice=== computerChoice){
        resultText.textContent="Tie!"
    }
    else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') || (playerChoice === 'PAPER' && computerChoice === 'ROCK') || (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ){
        resultText.textContent= `You Win! ${playerChoice} beats ${computerChoice}`
        playerScore.textContent = parseInt(playerScore.textContent) + 1
        if(playerScore.textContent == 5){
            resultText.textContent = "Player Wins!"
        }
    }
    else{
        resultText.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
        computerScore.textContent = parseInt(computerScore.textContent) + 1
        if(computerScore.textContent == 5){
            resultText.textContent = "Computer Wins!"
        }
    }
    results.appendChild(resultText)
    document.querySelector("#playerScore").textContent = playerScore.textContent;
    document.querySelector("#computerScore").textContent = computerScore.textContent;     //Updates the values in the html
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        playRound(button.textContent)
    })
})
