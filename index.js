const normal_deck = [2,3,4,5,6,7,8,9,10, 'J', 'Q', 'K', 'A'] // problem: how tf to return face card values

const startButton = document.querySelector('#start_game_button')
const dealButton = document.querySelector('#deal_button')
const playerCardOne = document.querySelector('.pcard_one')
const playerCardTwo =  document.querySelector('.pcard_two')
const playerTotal = document.querySelector('#total_score')
const dealerCardOne = document.querySelector('.dcard_one')
const dealerCardTwo = document.querySelector('.dcard_two')
const hitMeButton = document.querySelector('#hit_button')
const stayButton = document.querySelector('#stay_button')

const playerhand = []
// const dealerHand = []

document.addEventListener('DOMContentLoaded', hideItAll())

function hideItAll() {
    dealButton.style.display = "none"
    playerCardOne.style.display = "none"
    playerCardTwo.style.display = "none"
    playerTotal.style.display = "none"
    dealerCardOne.style.display = "none"
    dealerCardTwo.style.display = "none"
    hitMeButton.style.display = "none"
    stayButton.style.display = "none"
}

startButton.addEventListener('click', function(e) {
    dealAll()
    startButton.style.display="none"
})

dealButton.addEventListener('click', function(e) {
    dealAll()
})

hitMeButton.addEventListener('click', function(e) {
    hitMe(playerHand)
})

function dealAll() {
    playerCardOne.style.display = ""
    playerCardTwo.style.display = ""
    playerTotal.style.display = ""
    dealerCardOne.style.display = ""
    dealerCardTwo.style.display = ""
    hitMeButton.style.display = ""
    stayButton.style.display = ""
    dealPlayer()
    dealDealer()
}

function dealPlayer() {
    playerHand=[]
    while(playerHand.length<2) {
        playerHand.push(Math.floor(Math.random() * normal_deck.length + 1))
    }
    playerCardOne.innerHTML = `${playerHand[0]}`
    playerCardTwo.innerHTML = `${playerHand[1]}`
    playerTotalScore(playerHand) 
};

function dealDealer() {
    dealerHand=[]
    while(dealerHand.length<2) {
        dealerHand.push(Math.floor(Math.random() * normal_deck.length + 1))
    }
    dealerCardOne.innerHTML = `${dealerHand[0]}`
    dealerCardTwo.innerHTML = `${dealerHand[1]}`
    houseTotalScore(dealerHand[0],dealerHand[1]) // pass in array vs specific values from array, that way playerTotalScore/HouseTotalScore can can take in an array parse 3+ values in the array
};

function hitMe(e) {
    e.push(Math.floor(Math.random() * normal_deck.length + 1))
    console.log(e); // this is not persisting past 3 cards, need to be able to hit multiple times. Assuming scope for my constant is wrong. 
    // this is also re-dealing, need to fix that. 
}

function playerTotalScore(a, e) { 
    console.log("Your Total Score: " + `${a+e}`)  // eventually this will need to accept 1 arg, an array, and the parse and add the values in the array
    playerTotalScore.innerHTML = `${a+e}` // this isn't replacing the HTML, need to determine why, it will also eventually need to accept multiple args for 1+ hits
};

function houseTotalScore(a,e) {
    console.log("House Total Score: " + `${a+e}`)
};