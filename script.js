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

function playRound(){
    playerChoice = prompt('Rock, Paper or Scissors? ')
    playerChoice = playerChoice.toUpperCase()
    computerChoice = getComputerChoice()
    computerChoice = computerChoice.toUpperCase()
    if (playerChoice=== computerChoice){
        console.log("Tie!")
    }
    else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') || (playerChoice === 'PAPER' && computerChoice === 'ROCK') || (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ){
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
    }
    else{
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
    }
}

function playGame(){
    for (let i = 0; i < 5 ; i++){
        playRound()
    }
}

playGame()