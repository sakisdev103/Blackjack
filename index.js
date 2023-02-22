let player = {
    name : "thanos" ,
    chips : 166
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " $ " + player.chips

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber 
    }
}

function startGame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard,secondCard]
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum <= 20){
        isAlive = true
        message = "Do you want to draw a new card? "
    } else if( sum === 21){
        isAlive = false
        message = "You've got BlackJack!"
    } else{
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum :" +" " + + sum
    cardsEl.textContent = "Cards : " 
    for( let i=0 ; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    } 
}
