let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(cards)

// Ovako se kreira object (objekat) koji moze da sadrzi vise razlicitih podataka
let player = {
  name:"Jovan",
  chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10
  let randomNumber = Math.floor (Math.random() * 13) + 1
  if (randomNumber > 10){
  return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  // Generate two random numbers
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  // Re-assign the cards and sum variables so that the game can start
  renderGame()
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  sumEl.textContent ="Sum: " + sum
}

function renderGame() {
  cardsEl.textContent = "Cards: " 
    for (let i = 0; i <cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
      message = "Do youwant to draw a new card?😐"
      isAlive = true
    } else if (sum === 21) {
      message ="You've got Blackjack! 😃"
      hasBlackjack = true
      isAlive = true
    } else {
      message = "You're out of the game!😞"
      isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
// Only allow the player to get a new card if she IS alive and does NOT have blackjack
  if (isAlive === true && hasBlackjack === false){

    let card = getRandomCard()
    sum += card
    cards.push(card)
// sumEl.textContent = "Sum:" + " " +sum
    cardsEl.textContent = "Cards: " + " " + card
    console.log(cards)
    renderGame()
  }
}