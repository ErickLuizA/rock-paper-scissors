const rock = document.querySelector('.fa-hand-rock-o')
const paper = document.querySelector('.fa-hand-paper-o')
const scissors = document.querySelector('.fa-hand-scissors-o')

const computerScoreContainer = document.querySelector('#computer')
const playerScoreContainer = document.querySelector('#player')

const computerPlayContainer = document.querySelector('.computer')
const playerPlayContainer = document.querySelector('.player')
const winnerContainer = document.querySelector('.winner')

let playerScore = 0
let computerScore = 0

let playerRockPlay = false
let playerPaperPlay = false
let playerScissorsPlay = false

let computerRockPlay = false
let computerPaperPlay = false
let computerScissorsPlay = false

playerScoreContainer.innerHTML = playerScore
computerScoreContainer.innerHTML = computerScore

rock.addEventListener('click', () => {
  playerRockPlay = true
  playerPlayContainer.innerHTML = 'Rock'

  checkWinner()
})

paper.addEventListener('click', () => {
  playerPaperPlay = true
  playerPlayContainer.innerHTML = 'Paper'

  checkWinner()
})

scissors.addEventListener('click', () => {
  playerScissorsPlay = true
  playerPlayContainer.innerHTML = 'Scissors'

  checkWinner()
})

const checkWinner = () => {
  computerPlay()

  if(playerRockPlay && computerRockPlay ||
     playerPaperPlay && computerPaperPlay ||
     playerScissorsPlay && computerScissorsPlay) {
      winnerContainer.innerHTML = 'Draw'
      reset()
      return

     }

  if(playerRockPlay && computerScissorsPlay ||
     playerPaperPlay && computerRockPlay || 
     playerScissorsPlay && computerPaperPlay) {
      return UpdateScore(true)
     } else if(computerRockPlay && playerScissorsPlay ||
      computerPaperPlay && playerRockPlay || 
      computerScissorsPlay && playerPaperPlay) {
        return UpdateScore(false)
      }
}

const computerPlay = () => {
  let value = Math.random()

  if(value < 0.33) {
    computerPlayContainer.innerHTML = 'Rock'
    return computerRockPlay = true
  } else if(value < 0.66) {
    computerPlayContainer.innerHTML = 'Paper'
    return computerPaperPlay = true
  } else {
    computerPlayContainer.innerHTML = 'Scissors'
    return computerScissorsPlay = true
  }
}

const UpdateScore = value => {
  if(value) {
    playerScore++
    playerScoreContainer.innerHTML = playerScore
    winnerContainer.innerHTML = 'Player is the winner'
  } 

  if(!value) {
    computerScore++
    computerScoreContainer.innerHTML = computerScore
    winnerContainer.innerHTML = 'Computer is the winner'
  }

  reset()
}

const reset = () => {
  playerRockPlay = false
  playerPaperPlay = false
  playerScissorsPlay = false
  
  computerRockPlay = false
  computerPaperPlay = false
  computerScissorsPlay = false
}